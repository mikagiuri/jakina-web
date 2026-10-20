/* JAKINA · kapitulua «B2 - Aljebra oinarriak eta espazio bektorialak (I)» (01ma_01espazioak), desde edicion2/kapituluak/01ma_01espazioak/01ma_01espazioak.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["01ma_01espazioak"] = {
 "gakoa": "01ma_01espazioak",
 "titulua": "JAKINA - B2 - Fundamentos de álgebra y espacios vectoriales (I)",
 "azala": "B2 - Fundamentos de álgebra y espacios vectoriales (I)",
 "azpititulua": "Era I - Herramientas",
 "iturburua": "kapituluak/01ma_01espazioak/01ma_01espazioak.typ",
 "sarrera": [
  {
   "mota": "atala",
   "izenburua": "Álgebra, matrices, geometría y trigonometría",
   "deskribapena": [
    {
     "mota": "testua",
     "html": "Con las herramientas formales en la mano, ahora hay que aprender a calcular. El álgebra enseña a despejar la incógnita; la trigonometría, a describir el giro y la periodicidad; la exponencial, el crecimiento y la atenuación. Y luego viene la estructura: el espacio vectorial es el esqueleto oculto de la física -las fuerzas, los campos y los estados cuánticos son vectores-, y los valores propios abren la puerta a las oscilaciones normales y a los ejes de inercia."
    }
   ],
   "edukia": [
    "Aljebraren oinarriak: ekuazioak, erlazioak, polinomioak",
    "Trigonometria eta radianak",
    "Funtzio esponentziala eta logaritmikoa",
    "Sistemak, konikoak eta matematika diskretua",
    "Zenbaki konplexuak",
    "Espazio bektorialak, matrizeak eta diagonalizazioa"
   ]
  },
  {
   "mota": "modulua",
   "kodea": "M04",
   "izenburua": "Fundamentos de álgebra",
   "maila": "HERRAMIENTAS"
  },
  {
   "mota": "helburuak",
   "elementuak": [
    "Manejarse con soltura en la estructura de los números reales.",
    "Resolver ecuaciones e inecuaciones.",
    "Factorizar polinomios y hallar sus raíces."
   ]
  },
  {
   "mota": "aurrebaldintzak",
   "elementuak": [
    "M03 — Números naturales e inducción"
   ]
  },
  {
   "mota": "iturria",
   "proiektua": "_historico/espazio-ontzia/wcata/eu",
   "xehetasuna": "Capítulos 1-4",
   "hizkuntza": "eu"
  },
  {
   "mota": "oharra",
   "titulua": "Material para integrar más adelante",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Los fundamentos de álgebra están en el corpus WCATA separado: <code>materialak_gero_integratzeko/matematika_orokorra.typ</code>."
    }
   ]
  },
  {
   "mota": "modulua",
   "kodea": "M05",
   "izenburua": "Trigonometría",
   "maila": "HERRAMIENTAS"
  },
  {
   "mota": "helburuak",
   "elementuak": [
    "Medir ángulos en radianes y usar la circunferencia unidad.",
    "Demostrar y aplicar las identidades trigonométricas.",
    "Resolver ecuaciones trigonométricas."
   ]
  },
  {
   "mota": "aurrebaldintzak",
   "elementuak": [
    "M04 — Fundamentos de álgebra"
   ]
  },
  {
   "mota": "iturria",
   "proiektua": "_historico/espazio-ontzia/wcata/eu",
   "xehetasuna": "Capítulos 5-8",
   "hizkuntza": "eu"
  },
  {
   "mota": "oharra",
   "titulua": "Material para integrar más adelante",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La trigonometría está en el corpus WCATA separado: <code>materialak_gero_integratzeko/matematika_orokorra.typ</code>."
    }
   ]
  },
  {
   "mota": "modulua",
   "kodea": "M06",
   "izenburua": "Exponencial y logaritmo",
   "maila": "HERRAMIENTAS"
  },
  {
   "mota": "helburuak",
   "elementuak": [
    "Modelar el crecimiento y la atenuación exponenciales.",
    "Usar las propiedades de los logaritmos."
   ]
  },
  {
   "mota": "aurrebaldintzak",
   "elementuak": [
    "M04 — Fundamentos de álgebra"
   ]
  },
  {
   "mota": "iturria",
   "proiektua": "_historico/espazio-ontzia/wcata/eu",
   "xehetasuna": "Capítulo 9",
   "hizkuntza": "eu"
  },
  {
   "mota": "oharra",
   "titulua": "Material para integrar más adelante",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La exponencial y el logaritmo están en el corpus WCATA separado: <code>materialak_gero_integratzeko/matematika_orokorra.typ</code>."
    }
   ]
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Excursus (cont.): logaritmo y exponencial (funciones inversas)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Más ejemplos de inyectividad y sobreyectividad con funciones reales: el <strong>logaritmo</strong> (biyectivo) y la <strong>exponencial</strong> (inyectiva pero no sobreyectiva), <strong>inversas</strong> una de otra."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Logaritmo: biyectivo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>↦</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>. Tabla de valores: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>e</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msup><mi>e</mi><mn>2</mn></msup><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msup><mi>e</mi><mn>3</mn></msup><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>, ... (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msup><mi>e</mi><mi>k</mi></msup><mo>=</mo><mi>k</mi></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "El dominio es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (el logaritmo solo para argumentos positivos). Por ser <strong>estrictamente creciente</strong> es <strong>inyectivo</strong>, y como <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> toma todos los valores (de <math display=\"inline\"><mrow><mi>−</mi><mi>∞</mi></mrow></math> a <math display=\"inline\"><mrow><mi>+</mi><mi>∞</mi></mrow></math> en <math display=\"inline\"><msup><mn>0</mn><mo>+</mo></msup></math>) es <strong>sobreyectivo</strong>: por tanto <strong>biyectivo</strong> de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> a <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>."
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Exponencial: inyectiva, no sobreyectiva",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>↦</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>. Tabla de valores (con tres decimales): <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>−</mi><mn>3</mn></mrow></msup><mo>≈</mo><mn>0.050</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>≈</mo><mn>0.368</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>e</mi><mn>0</mn></msup><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>e</mi><mn>1</mn></msup><mo>≈</mo><mn>2.718</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>e</mi><mn>2</mn></msup><mo>≈</mo><mn>7.389</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>e</mi><mn>3</mn></msup><mo>≈</mo><mn>20.086</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Por ser <strong>estrictamente creciente</strong> es <strong>inyectiva</strong>, pero <strong>no sobreyectiva</strong> en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>: <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (&quot;no hay elementos negativos&quot;, ni tampoco <math display=\"inline\"><mn>0</mn></math>)."
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Funciones inversas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Al <strong>componerlas una con otra dan la identidad</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>e</mi><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup><mo>=</mo><mi>x</mi><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> (azul) y <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math> (rojo) son <strong>funciones inversas</strong>: son <strong>simétricas</strong> respecto a la recta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math>. Los puntos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de <math display=\"inline\"><mi mathvariant=\"normal\">ln</mi></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de <math display=\"inline\"><mi mathvariant=\"normal\">exp</mi></math> son <strong>reflejos</strong> uno del otro.",
     "src": "../media/irudiak/20c056cfa89d0d22.svg",
     "zabalera": 245
    },
    {
     "mota": "testua",
     "html": "Por último, el <strong>polinomio general de grado 5</strong> de tipo <math display=\"inline\"><msup><mi>x</mi><mn>5</mn></msup></math> (con dos extremos) es <strong>sobreyectivo</strong> pero <strong>no inyectivo</strong>."
    },
    {
     "mota": "oharra",
     "titulua": "Correcciones y precisiones",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Valor de la tabla:</strong> en la página original se lee <math display=\"inline\"><mrow><msup><mi>e</mi><mn>2</mn></msup><mo>=</mo><mn>3.349</mn></mrow></math>; el valor <strong>correcto</strong> es <math display=\"inline\"><mrow><msup><mi>e</mi><mn>2</mn></msup><mo>=</mo><mn>7.389</mn></mrow></math> (error de lectura o de escritura). Se indica, sin forzar el original.",
        "<strong>Etiqueta <math display=\"inline\"><msup><mi>x</mi><mn>5</mn></msup></math>:</strong> <math display=\"inline\"><msup><mi>x</mi><mn>5</mn></msup></math> <strong>puro</strong> es estrictamente creciente (biyectivo); la curva dibujada con dos extremos es un polinomio <strong>general</strong> de grado <math display=\"inline\"><mrow><mn>5</mn><mi>.</mi></mrow></math> (con términos de grado menor). Se indica la distinción."
       ]
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>LANDETA1_0096</code>, páginas 190-191; &quot;ÁLGEBRA LANDETA&quot;). Comprobado: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msup><mi>e</mi><mi>k</mi></msup><mo>=</mo><mi>k</mi></mrow></math> (logaritmo biyectivo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>), exponencial inyectiva pero no sobreyectiva (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), y <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> (inversas). Precisiones <math display=\"inline\"><msup><mi>e</mi><mn>2</mn></msup></math> y <math display=\"inline\"><msup><mi>x</mi><mn>5</mn></msup></math> indicadas. El registro dice &quot;calculo&quot;; el contenido es <strong>álgebra</strong> (continuación de este excursus). Véase <code>koadernoa_landeta1_alg_p190.typ</code>."
      }
     ]
    },
    {
     "mota": "modulua",
     "kodea": "M07",
     "izenburua": "Sistemas, cónicas y matemática discreta",
     "maila": "HERRAMIENTAS"
    },
    {
     "mota": "helburuak",
     "elementuak": [
      "Resolver sistemas de ecuaciones.",
      "Conocer las cónicas y usar sus ecuaciones (base para las órbitas).",
      "Usar sucesiones, series y combinatoria."
     ]
    },
    {
     "mota": "aurrebaldintzak",
     "elementuak": [
      "M04, M05"
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "_historico/espazio-ontzia/wcata/eu",
     "xehetasuna": "Capítulos 10-12",
     "hizkuntza": "eu"
    },
    {
     "mota": "oharra",
     "titulua": "Material para integrar más adelante",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los sistemas, las cónicas y la matemática discreta están en el corpus WCATA separado: <code>materialak_gero_integratzeko/matematika_orokorra.typ</code>."
      }
     ]
    },
    {
     "mota": "modulua",
     "kodea": "M08",
     "izenburua": "Números complejos",
     "maila": "HERRAMIENTAS"
    },
    {
     "mota": "helburuak",
     "elementuak": [
      "Usar las formas binómica, polar y exponencial.",
      "Entender la fórmula de Euler y aplicarla a las oscilaciones."
     ]
    },
    {
     "mota": "aurrebaldintzak",
     "elementuak": [
      "M05 — Trigonometría; M06 — Exponencial"
     ]
    },
    {
     "mota": "itzulgai",
     "proiektua": "_historico/espazio-ontzia/02_algebra_geometria/compendio_matematico",
     "orrialdeak": "\"1. kap.\"",
     "jatorria": "es"
    },
    {
     "mota": "iturria",
     "proiektua": "_historico/espazio-ontzia/edf_eus D eranskina + fullmekanika B eranskina",
     "xehetasuna": "fundamentos de los complejos unificados para JAKINA",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a5",
   "maila": 1,
   "izenburua": "Números complejos: forma, álgebra y Euler",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este apartado trae a M08 la primera parte del anexo de funciones especiales de <code>edf_eus</code> y el formulario de complejos de los complementos matemáticos de <code>fullmekanika</code>. El objetivo no es hacer análisis complejo, sino fijar el lenguaje que se usará una y otra vez en física: fase, amplitud compleja, factores de Fourier y funciones de onda."
      }
     ]
    }
   ]
  },
  {
   "id": "a6",
   "maila": 1,
   "izenburua": "Forma cartesiana y polar",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Un número complejo se escribe mediante dos números reales:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>i</mi><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>i</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aquí <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>z</mi></mrow></math> es la parte real, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>z</mi></mrow></math> la parte imaginaria, y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">arg</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo>=</mo><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "son el módulo y el argumento. En el plano complejo el mismo punto puede escribirse también así:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mi>i</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>r</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>θ</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El argumento no es único: los ángulos <math display=\"inline\"><mi>θ</mi></math> y <math display=\"inline\"><mrow><mi>θ</mi><mo>+</mo><mn>2</mn><mi>k</mi><mi>π</mi></mrow></math> corresponden al mismo número complejo. Por eso, al estudiar raíces y logaritmos hay que elegir una rama."
    },
    {
     "mota": "irudia",
     "oina": "Interpretación geométrica del número complejo: un punto en el plano,\n  o un módulo y una fase.",
     "src": "../media/irudiak/98ecabc51dfee09e.svg",
     "zabalera": 269
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Álgebra",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Dados dos números complejos, <math display=\"inline\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>i</mi><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>θ</mi><mn>1</mn></msub></mrow></msup></mrow></math> y <math display=\"inline\"><mrow><msub><mi>z</mi><mn>2</mn></msub><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mi>i</mi><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>r</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>θ</mi><mn>2</mn></msub></mrow></msup></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>+</mo><msub><mi>z</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>1</mn></msub><msub><mi>z</mi><mn>2</mn></msub><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub><msub><mi>r</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><msub><mi>z</mi><mn>1</mn></msub><msub><mi>z</mi><mn>2</mn></msub></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>r</mi><mn>1</mn></msub><msub><mi>r</mi><mn>2</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>≠</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, multiplicar es multiplicar los módulos y sumar las fases. Esa es la razón de que los complejos sean tan adecuados en oscilaciones y ondas."
    },
    {
     "mota": "testua",
     "html": "Conjugado"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>z</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><mi>i</mi><mi>y</mi><mo>=</mo><mi>r</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>θ</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y se obtienen de inmediato:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mover><mi>z</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>z</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>z</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mo>−</mo><mover><mi>z</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>2</mn><mi>i</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>z</mi><mi>.</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Eulerren formula y De Moivre",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Usando series de potencias,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>θ</mi></mrow></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mi>i</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "De ahí viene el teorema de De Moivre:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mi>i</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>i</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esto controla las raíces. Si <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>r</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>θ</mi></mrow></msup></mrow></math>, las raíces <math display=\"inline\"><mi>n</mi></math>-ésimas son:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>z</mi><mfrac><mn>1</mn><mi>n</mi></mfrac></msup><mo>=</mo><msup><mi>r</mi><mfrac><mn>1</mn><mi>n</mi></mfrac></msup><msup><mi>e</mi><mrow><mi>i</mi><mfrac><mrow><mi>θ</mi><mo>+</mo><mn>2</mn><mi>k</mi><mi>π</mi></mrow><mi>n</mi></mfrac></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><msup><mi>z</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math> y kokatu hiru erroak plano konplexuan. Ondoren, azaldu zergatik dauden <math display=\"inline\"><mrow><mn>120</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-ko angeluz bereizita."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Idatzi <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  <math display=\"inline\"><msup><mi>e</mi><mrow><mi>i</mi><mi>θ</mi></mrow></msup></math> y <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>θ</mi></mrow></msup></math> erabiliz. Emaitza hori erabiliko da gero Fourier-en serieetan y uhin harmonikoetan."
      }
     ]
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Puente hacia la física",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una oscilación armónica puede escribirse así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>φ</mi></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La expresión compleja simplifica el cálculo: derivar es multiplicar por <math display=\"inline\"><mrow><mi>i</mi><mi>ω</mi></mrow></math>, e integrar es multiplicar por <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mi>ω</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>. Al final se toma la parte real."
    },
    {
     "mota": "testua",
     "html": "Por eso los complejos no son solo &quot;números raros&quot;: son una abreviatura operativa de la física."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 1,
   "izenburua": "Raíz cuadrada de un número complejo en forma polar",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Las raíces de un complejo se calculan con más facilidad en forma polar. Como ejemplo, se resuelve <math display=\"inline\"><msqrt><mrow><mn>18</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msqrt><mn>3</mn></msqrt><mi>i</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Raíz cuadrada",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcular <math display=\"inline\"><msqrt><mrow><mn>18</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msqrt><mn>3</mn></msqrt><mi>i</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></math>."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>El denominador en forma polar.</strong> Sea <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>1</mn><mo>−</mo><msqrt><mn>3</mn></msqrt><mi>i</mi></mrow></math>. Entonces <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>u</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>4</mn></mrow></math>, es decir <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>2</mn></mrow></math>; y <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>3</mn></msqrt><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>i</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, luego <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mi>−</mi><msqrt><mn>3</mn></msqrt><mi>/</mi><mn>2</mn></mrow></math>, esto es <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mi>−</mi><mi>π</mi><mi>/</mi><mn>3</mn></mrow></math>. Por tanto"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mn>2</mn><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>π</mi><mi>/</mi><mn>3</mn></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mfrac><mn>18</mn><mi>u</mi></mfrac><mo>=</mo><mfrac><mn>18</mn><mrow><mn>2</mn><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>π</mi><mi>/</mi><mn>3</mn></mrow></msup></mrow></mfrac><mo>=</mo><mn>9</mn><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi><mi>/</mi><mn>3</mn></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Las dos raíces cuadradas.</strong> Por la fórmula de la raíz <math display=\"inline\"><mi>n</mi></math>-ésima, <math display=\"inline\"><mrow><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></msqrt><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>+</mo><mn>2</mn><mi>k</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>), son <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>9</mn></mrow></math> y <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>3</mn></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi><mi>/</mi><mn>6</mn></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>z</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mn>6</mn><mo>+</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><mn>3</mn><msup><mi>e</mi><mrow><mi>i</mi><mspace width=\"0.167em\"></mspace><mn>7</mn><mi>π</mi><mi>/</mi><mn>6</mn></mrow></msup><mi>.</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Las dos raíces son <strong>opuestas</strong> (<math display=\"inline\"><mrow><msub><mi>z</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>z</mi><mn>1</mn></msub></mrow></math>), porque sus argumentos difieren en <math display=\"inline\"><mi>π</mi></math>. En forma binómica: <math display=\"inline\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>3</mn><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>i</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>z</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>z</mi><mn>1</mn></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/e2e89ae7aba89e4d.svg",
     "zabalera": 220
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El desarrollo es correcto: módulo y argumento de <math display=\"inline\"><mi>u</mi></math>, <math display=\"inline\"><mrow><mn>18</mn><mi>/</mi><mi>u</mi><mo>=</mo><mn>9</mn><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi><mi>/</mi><mn>3</mn></mrow></msup></mrow></math> y las dos raíces cuadradas (<math display=\"inline\"><mrow><msub><mi>z</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>z</mi><mn>1</mn></msub></mrow></math> con comprobación cruzada). En el original hay dos dudas: (i) el número de la raíz podía leerse <math display=\"inline\"><mn>9</mn></math> o <math display=\"inline\"><mn>18</mn></math>, pero el propio desarrollo (<math display=\"inline\"><mrow><mn>18</mn><mi>/</mi><mi>u</mi><mo>=</mo><mn>9</mn><mi>…</mi></mrow></math>) muestra que es <math display=\"inline\"><mn>18</mn></math>; (ii) en la línea de <math display=\"inline\"><msub><mi>z</mi><mn>1</mn></msub></math> el exponente de la raíz está escrito <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>6</mn></mrow></math> en lugar de <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>3</mn></mrow></math>, probablemente un lapsus del alumno (el resultado es correcto). Un borrador en la parte inferior derecha (<math display=\"inline\"><mi>ω</mi></math>, <math display=\"inline\"><msqrt><mi>ω</mi></msqrt></math> y dos signos de interrogación) no se interpreta -lo dejó abierto el propio alumno-; no se ha inventado nada. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_calculo1_2013_zk_p007.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_calculo1_2013_zk_p007_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    },
    {
     "mota": "modulua",
     "kodea": "M09",
     "izenburua": "Espacios vectoriales",
     "maila": "HERRAMIENTAS"
    },
    {
     "mota": "helburuak",
     "elementuak": [
      "Comprobar los axiomas de un espacio vectorial.",
      "Usar la dependencia lineal, la base y la dimensión."
     ]
    },
    {
     "mota": "aurrebaldintzak",
     "elementuak": [
      "M03 — Estructuras algebraicas"
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "_historico/espazio-ontzia/02_algebra_geometria/algebra_lineal/espazio_bektorialak",
     "xehetasuna": null,
     "hizkuntza": "eu"
    },
    {
     "mota": "testua",
     "html": ".update(0)"
    }
   ]
  },
  {
   "id": "a11",
   "maila": 1,
   "izenburua": "Espacios vectoriales",
   "blokeak": []
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Bases",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>SÍMBOLOS</strong>"
    },
    {
     "mota": "testua",
     "html": "En matemáticas se usan símbolos para abreviar las expresiones; los más utilizados son los siguientes:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [
        "<strong>Sinboloak</strong>",
        "<strong>Esanahia</strong>"
       ],
       "lerroak": [
        [
         "<math display=\"inline\"><mo>∀</mo></math>",
         "edozein"
        ],
        [
         "<math display=\"inline\"><mo>∃</mo></math>",
         "existitzen da"
        ],
        [
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>!</mi></mrow></math>",
         "bakar bat existitzen da"
        ],
        [
         "<math display=\"inline\"><mi>/</mi></math>",
         "non"
        ],
        [
         "<math display=\"inline\"><mo stretchy=\"false\" form=\"prefix\">|</mo></math>",
         "non"
        ],
        [
         "<math display=\"inline\"><mi>∧</mi></math>",
         "eta"
        ],
        [
         "<math display=\"inline\"><mi>∨</mi></math>",
         "edo"
        ],
        [
         "<math display=\"inline\"><mo>⇒</mo></math>",
         "halabeharrez (inplikatzen du)"
        ],
        [
         "<math display=\"inline\"><mo>⇔</mo></math>",
         "baldin eta soilik baldin"
        ]
       ]
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La expresión &quot;para cualquier número natural <math display=\"inline\"><mrow><mo>∀</mo><mi>m</mi></mrow></math>, existe un número natural <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi></mrow></math> tal que <math display=\"inline\"><mo stretchy=\"false\" form=\"prefix\">|</mo></math>  <math display=\"inline\"><mrow><mi>y</mi><mo>&gt;</mo><mi>m</mi></mrow></math>&quot; se lee así:"
      },
      {
       "mota": "testua",
       "html": "&quot;Para cualquier número natural <math display=\"inline\"><mi>m</mi></math> existe un número natural <math display=\"inline\"><mi>y</mi></math> tal que <math display=\"inline\"><mi>y</mi></math> es mayor que <math display=\"inline\"><mi>m</mi></math>&quot;."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>CONJUNTOS</strong>"
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
       "html": "Un conjunto es una colección de cosas. Esas cosas se llaman elementos del conjunto. Normalmente los conjuntos se designan con letras mayúsculas: <math display=\"inline\"><mrow><mi>A</mi><mo>,</mo><mi>B</mi><mo>,</mo><mi>C</mi><mo>,</mo><mi>…</mi></mrow></math> y los elementos con letras minúsculas: <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>…</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hay dos maneras de definir un conjunto:"
    },
    {
     "mota": "testua",
     "html": "1.- <em>Por extensión</em>: enumerando todos los elementos del conjunto. Por ejemplo: <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>5</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "2.- <em>Por comprensión</em>: dando una (o varias) propiedad(es) que distinguen los elementos de ese conjunto. Entonces escribiremos en el conjunto <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> donde <math display=\"inline\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  es una propiedad referida a <math display=\"inline\"><mi>x</mi></math>. Por ejemplo: <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arrunta eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>≤</mo><mn>5</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mi>A</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Si el elemento <math display=\"inline\"><mi>x</mi></math> está en el conjunto <math display=\"inline\"><mi>A</mi></math> escribiremos <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>A</mi></mrow></math>, y si el elemento <math display=\"inline\"><mi>x</mi></math> no está en el conjunto <math display=\"inline\"><mi>A</mi></math> escribiremos <math display=\"inline\"><mrow><mi>x</mi><mo>∉</mo><mi>A</mi></mrow></math>. Por ejemplo, si <math display=\"inline\"><mrow><mi mathvariant=\"double-struck\">ℕ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zenbaki arrunta</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> entonces <math display=\"inline\"><mrow><mi>−</mi><mn>6</mn><mo>∉</mo><mi mathvariant=\"double-struck\">ℕ</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math> son dos conjuntos y todos los elementos del conjunto <math display=\"inline\"><mi>B</mi></math> están en el conjunto <math display=\"inline\"><mi>A</mi></math>, decimos que se da la <em>inclusión</em> y escribimos <math display=\"inline\"><mrow><mi>B</mi><mo>⊆</mo><mi>A</mi></mrow></math> o <math display=\"inline\"><mrow><mi>B</mi><mo>⊂</mo><mi>A</mi></mrow></math>, &quot;<math display=\"inline\"><mi>B</mi></math> es parte de <math display=\"inline\"><mi>A</mi></math>&quot;. Es decir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>B</mi><mo>⊆</mo><mi>A</mi><mo>⇔</mo><mo>∀</mo><mi>b</mi><mo>∈</mo><mi>B</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>b</mi><mo>∈</mo><mi>A</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si no todos los elementos del conjunto <math display=\"inline\"><mi>B</mi></math> están en <math display=\"inline\"><mi>A</mi></math> escribimos <math display=\"inline\"><mrow><mi>B</mi><mo>⊈</mo><mi>A</mi></mrow></math>, es decir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>B</mi><mo>⊈</mo><mi>A</mi><mo>⇔</mo><mo>∃</mo><mi>b</mi><mo>∈</mo><mi>B</mi><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> non </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"0.222em\"></mspace><mi>b</mi><mo>∉</mo><mi>A</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por último, si se da <math display=\"inline\"><mrow><mi>B</mi><mo>⊆</mo><mi>A</mi></mrow></math> pero son distintos, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>≠</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y queremos subrayarlo, escribimos entonces <math display=\"inline\"><mrow><mi>B</mi><mo>⊊</mo><mi>A</mi></mrow></math>, <em>inclusión estricta</em>."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(i)  <math display=\"inline\"><mrow><mi>∅</mi><mo>⊆</mo><mi>A</mi></mrow></math> y <math display=\"inline\"><mrow><mi>A</mi><mo>⊆</mo><mi>A</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(ii) Sean <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"double-struck\">ℤ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>z</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>z</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zenbaki osoa</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Entonces <math display=\"inline\"><mrow><mi>A</mi><mo>⊊</mo><mi mathvariant=\"double-struck\">ℤ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(iii) Sean <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>−</mi><msqrt><mn>2</mn></msqrt><mo>,</mo><msqrt><mn>5</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"double-struck\">ℚ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mfrac><mi>a</mi><mi>b</mi></mfrac><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>a</mi><mo>,</mo><mi>b</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℤ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>b</mi><mo>≠</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Entonces, <math display=\"inline\"><mrow><mi>A</mi><mo>⊈</mo><mi mathvariant=\"double-struck\">ℚ</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Operaciones entre conjuntos</strong>"
    },
    {
     "mota": "testua",
     "html": "Entre conjuntos pueden definirse cuatro tipos de operaciones:"
    },
    {
     "mota": "testua",
     "html": "1.-<em>Intersección</em>: si <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math> son conjuntos, la intersección de <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math>, que denotamos <math display=\"inline\"><mrow><mi>A</mi><mo>∩</mo><mi>B</mi></mrow></math>  (<math display=\"inline\"><mi>A</mi></math> intersección <math display=\"inline\"><mi>B</mi></math>), es otro conjunto, formado por los elementos que están a la vez en <math display=\"inline\"><mi>A</mi></math> y en <math display=\"inline\"><mi>B</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>∈</mo><mi>A</mi><mo>∧</mo><mi>x</mi><mo>∈</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "2.-<em>Unión</em>: si <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math> son conjuntos, la unión de <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math>, que denotamos <math display=\"inline\"><mrow><mi>A</mi><mo>∪</mo><mi>B</mi></mrow></math>  (<math display=\"inline\"><mi>A</mi></math> unión <math display=\"inline\"><mi>B</mi></math>), es otro conjunto, que contiene los elementos de <math display=\"inline\"><mi>A</mi></math> y de <math display=\"inline\"><mi>B</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>∪</mo><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>∈</mo><mi>A</mi><mo>∨</mo><mi>x</mi><mo>∈</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "3.-<em>Producto cartesiano</em>: si <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math> son conjuntos, el producto cartesiano de <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math>, que denotamos <math display=\"inline\"><mrow><mi>A</mi><mo>×</mo><mi>B</mi></mrow></math>, es otro conjunto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>×</mo><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>a</mi><mo>∈</mo><mi>A</mi><mo>∧</mo><mi>b</mi><mo>∈</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>B</mi><mo>=</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>; entonces <math display=\"inline\"><mrow><mi>A</mi><mo>×</mo><mi>B</mi><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></mrow></math> es el plano."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(i)  <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es un par ordenado, es decir <math display=\"inline\"><mrow><mi>a</mi><mo>∈</mo><mi>A</mi></mrow></math> y <math display=\"inline\"><mrow><mi>b</mi><mo>∈</mo><mi>B</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(ii)  <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>b</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>b</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇔</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>2</mn></msub><mo>∧</mo><msub><mi>b</mi><mn>1</mn></msub><mo>=</mo><msub><mi>b</mi><mn>2</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(iii)  Si <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>n</mi></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>m</mi></mrow></math>, entonces <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>n</mi><mo>×</mo><mi>m</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(iv)  <math display=\"inline\"><mrow><mi>A</mi><mo>×</mo><mi>B</mi><mo>≠</mo><mi>B</mi><mo>×</mo><mi>A</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Igualmente, si <math display=\"inline\"><mi>A</mi></math>, <math display=\"inline\"><mi>B</mi></math> y <math display=\"inline\"><mi>C</mi></math> son tres conjuntos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>×</mo><mi>B</mi><mo>×</mo><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>a</mi><mo>∈</mo><mi>A</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>b</mi><mo>∈</mo><mi>B</mi><mo>∧</mo><mi>c</mi><mo>∈</mo><mi>C</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Normalmente, si <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>,</mo><msub><mi>A</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>A</mi><mi>k</mi></msub></mrow></math> son conjuntos, su producto cartesiano es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>×</mo><msub><mi>A</mi><mn>2</mn></msub><mo>×</mo><mi>…</mi><mo>×</mo><msub><mi>A</mi><mi>k</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>a</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><msub><mi>a</mi><mn>1</mn></msub><mo>∈</mo><msub><mi>A</mi><mn>1</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>a</mi><mn>2</mn></msub><mo>∈</mo><msub><mi>A</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>a</mi><mi>k</mi></msub><mo>∈</mo><msub><mi>A</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>OPERACIÓN</strong>"
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
       "html": "Sea <math display=\"inline\"><mrow><mi>A</mi><mo>≠</mo><mi>∅</mi></mrow></math> un conjunto. Entonces, una <strong>operación</strong> en el conjunto <math display=\"inline\"><mi>A</mi></math> o <strong>ley de composición interna</strong> es una aplicación: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>×</mo><mi>A</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>↦</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Observación: en cuanto a la notación, normalmente, en lugar de escribir <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, escribiremos el resultado de la operación así: <math display=\"inline\"><mrow><mi>a</mi><mo>*</mo><mi>b</mi><mo>,</mo><mi>a</mi><mo>∘</mo><mi>b</mi><mo>,</mo><mi>a</mi><mo>⋅</mo><mi>b</mi><mo>,</mo><mi>…</mi></mrow></math> y para indicar la operación, <math display=\"inline\"><mrow><mi>*</mi><mo>,</mo><mi>∘</mi><mo>,</mo><mi>⋅</mi><mo>,</mo><mi>…</mi></mrow></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(i) Sea <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> un conjunto. Definamos en <math display=\"inline\"><mi>A</mi></math> dos operaciones <math display=\"inline\"><mi>*</mi></math> y <math display=\"inline\"><mi>∘</mi></math>."
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "taula",
         "goiburua": [],
         "lerroak": [
          [
           "<math display=\"inline\"><mrow><mn>0</mn><mo>*</mo><mn>0</mn><mo>=</mo><mn>0</mn></mrow></math>",
           "",
           "<math display=\"inline\"><mrow><mn>0</mn><mo>∘</mo><mn>0</mn><mo>=</mo><mn>0</mn></mrow></math>"
          ],
          [
           "<math display=\"inline\"><mrow><mn>0</mn><mo>*</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>",
           "",
           "<math display=\"inline\"><mrow><mn>0</mn><mo>∘</mo><mn>1</mn><mo>=</mo><mn>1</mn></mrow></math>"
          ],
          [
           "<math display=\"inline\"><mrow><mn>1</mn><mo>*</mo><mn>0</mn><mo>=</mo><mn>0</mn></mrow></math>",
           "",
           "<math display=\"inline\"><mrow><mn>1</mn><mo>∘</mo><mn>0</mn><mo>=</mo><mn>1</mn></mrow></math>"
          ],
          [
           "<math display=\"inline\"><mrow><mn>1</mn><mo>*</mo><mn>1</mn><mo>=</mo><mn>1</mn></mrow></math>",
           "",
           "<math display=\"inline\"><mrow><mn>1</mn><mo>∘</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>"
          ]
         ]
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Como se ve, en un conjunto se puede definir más de una operación."
      },
      {
       "mota": "testua",
       "html": "(ii) Sea <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi mathvariant=\"double-struck\">ℤ</mi></mrow></math> un conjunto."
      },
      {
       "mota": "testua",
       "html": "(a)  <math display=\"inline\"><mrow><mi>a</mi><mo>+</mo><mi>b</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℤ</mi><mo>,</mo><mo>∀</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℤ</mi></mrow></math>. <math display=\"inline\"><mi mathvariant=\"double-struck\">ℤ</mi></math> es la operación suma habitual en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℤ</mi></math>"
      },
      {
       "mota": "testua",
       "html": "(b)  <math display=\"inline\"><mrow><mi>a</mi><mi>b</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℤ</mi><mo>,</mo><mo>∀</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℤ</mi></mrow></math>. <math display=\"inline\"><mi mathvariant=\"double-struck\">ℤ</mi></math> es la operación producto habitual en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℤ</mi></math>"
      },
      {
       "mota": "testua",
       "html": "(c)  <math display=\"inline\"><mrow><mi>a</mi><mo>*</mo><mi>b</mi><mo>=</mo><msqrt><mrow><mi>a</mi><mi>b</mi></mrow></msqrt><mo>,</mo><mo>∀</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℤ</mi></mrow></math> no es una operación en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℤ</mi></math>."
      },
      {
       "mota": "testua",
       "html": "(iii) Sea <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. <math display=\"inline\"><mrow><mi>a</mi><mo>*</mo><mi>b</mi><mo>=</mo><mfrac><mi>a</mi><mi>b</mi></mfrac><mo>,</mo><mo>∀</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>∈</mo><mi>A</mi></mrow></math> es una operación en <math display=\"inline\"><mi>A</mi></math> pero no en el conjunto <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>."
      },
      {
       "mota": "testua",
       "html": "(iv) Sea <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi mathvariant=\"double-struck\">ℕ</mi></mrow></math>. <math display=\"inline\"><mrow><mi>a</mi><mo>*</mo><mi>b</mi><mo>=</mo><msup><mi>a</mi><mi>b</mi></msup><mo>,</mo><mo>∀</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℕ</mi></mrow></math>  es una operación en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℕ</mi></math> pero no en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℤ</mi></math>."
      },
      {
       "mota": "testua",
       "html": "(v) Sea <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℱ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>f</mi><mo>:</mo><mi>A</mi><mo>→</mo><mi>A</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> aplikazioa</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Entonces <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>∘</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> donde <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>∘</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mo>∀</mo><mi>x</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> es una operación en el conjunto <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℱ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(vi) Sea <math display=\"inline\"><mi>A</mi></math> un conjunto y <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℬ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>A</mi><mtext mathvariant=\"normal\">-ren azpimultzoak</mtext><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> su conjunto de partes (booleano). Sobre <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℬ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la unión, la intersección y la diferencia son operaciones."
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
       "html": "Si el conjunto <math display=\"inline\"><mi>A</mi></math> es finito, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, y <math display=\"inline\"><mi>*</mi></math>  es una operación en <math display=\"inline\"><mi>A</mi></math>, entonces los resultados de la operación pueden representarse mediante una tabla de este tipo:"
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "taula",
         "goiburua": [],
         "lerroak": [
          [
           "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>,</mo><mi>*</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
           "<math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math>",
           "<math display=\"inline\"><msub><mi>a</mi><mn>2</mn></msub></math>",
           "<math display=\"inline\"><mi>⋯</mi></math>",
           "<math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math>"
          ],
          [
           "<math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math>",
           "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>*</mo><msub><mi>a</mi><mn>1</mn></msub></mrow></math>",
           "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>*</mo><msub><mi>a</mi><mn>2</mn></msub></mrow></math>",
           "<math display=\"inline\"><mi>⋯</mi></math>",
           "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>*</mo><msub><mi>a</mi><mi>n</mi></msub></mrow></math>"
          ],
          [
           "<math display=\"inline\"><msub><mi>a</mi><mn>2</mn></msub></math>",
           "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>*</mo><msub><mi>a</mi><mn>1</mn></msub></mrow></math>",
           "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>*</mo><msub><mi>a</mi><mn>2</mn></msub></mrow></math>",
           "<math display=\"inline\"><mi>⋯</mi></math>",
           "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>*</mo><msub><mi>a</mi><mi>n</mi></msub></mrow></math>"
          ],
          [
           "<math display=\"inline\"><mi>⋮</mi></math>",
           "<math display=\"inline\"><mi>⋮</mi></math>",
           "<math display=\"inline\"><mi>⋮</mi></math>",
           "<math display=\"inline\"><mo>⋱</mo></math>",
           "<math display=\"inline\"><mi>⋮</mi></math>"
          ],
          [
           "<math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math>",
           "<math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>*</mo><msub><mi>a</mi><mn>1</mn></msub></mrow></math>",
           "<math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>*</mo><msub><mi>a</mi><mn>2</mn></msub></mrow></math>",
           "<math display=\"inline\"><mi>⋯</mi></math>",
           "<math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>*</mo><msub><mi>a</mi><mi>n</mi></msub></mrow></math>"
          ]
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "A la tabla anterior se la llama tabla de <math display=\"inline\"><mi>A</mi></math> respecto de la operación <math display=\"inline\"><mi>+</mi></math>. Si <math display=\"inline\"><mi>A</mi></math> es infinito no podemos construir ninguna tabla."
    },
    {
     "mota": "testua",
     "html": "<strong>ESTRUCTURAS ALGEBRAICAS BÁSICAS</strong>"
    },
    {
     "mota": "testua",
     "html": "<strong>Grupo</strong>"
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
       "html": "Sean <math display=\"inline\"><mi>A</mi></math> un conjunto y <math display=\"inline\"><mi>*</mi></math>  una operación en <math display=\"inline\"><mi>A</mi></math>. Decimos que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>,</mo><mi>*</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  es un <strong>grupo</strong> cuando se cumplen las tres condiciones siguientes:"
      },
      {
       "mota": "testua",
       "html": "(i) Se cumple la propiedad asociativa, es decir, <math display=\"block\"><mrow><mi>a</mi><mo>*</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>*</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>*</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>*</mo><mi>c</mi><mspace width=\"1.0em\"></mspace><mo>∀</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>∈</mo><mi>A</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "(ii) Existe elemento neutro, es decir, existe <math display=\"inline\"><mrow><mi>e</mi><mo>∈</mo><mi>A</mi></mrow></math>  tal que: <math display=\"block\"><mrow><mi>a</mi><mo>*</mo><mi>e</mi><mo>=</mo><mi>a</mi><mo>=</mo><mi>e</mi><mo>*</mo><mi>a</mi><mo>,</mo><mo>∀</mo><mi>a</mi><mo>∈</mo><mi>A</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "(iii)  Todos los elementos del conjunto <math display=\"inline\"><mi>A</mi></math> son invertibles, es decir, <math display=\"inline\"><mrow><mo>∀</mo><mi>a</mi><mo>∈</mo><mi>A</mi><mspace width=\"1.0em\"></mspace><mo>∃</mo><msup><mi>a</mi><mo>′</mo></msup><mo>∈</mo><mi>A</mi></mrow></math>  tal que: <math display=\"block\"><mrow><mi>a</mi><mo>*</mo><msup><mi>a</mi><mo>′</mo></msup><mo>=</mo><mi>e</mi><mo>=</mo><msup><mi>a</mi><mo>′</mo></msup><mo>*</mo><mi>a</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "En este caso, <math display=\"inline\"><msup><mi>a</mi><mo>′</mo></msup></math>  se llama el <strong>inverso</strong> de <math display=\"inline\"><mi>a</mi></math>. Además, si se cumple la propiedad conmutativa, es decir, <math display=\"block\"><mrow><mi>a</mi><mo>*</mo><mi>b</mi><mo>=</mo><mi>b</mi><mo>*</mo><mi>a</mi><mspace width=\"1.0em\"></mspace><mo>∀</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>∈</mo><mi>A</mi></mrow></math> entonces <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>,</mo><mi>*</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  se llama <strong>grupo abeliano</strong> o <strong>grupo conmutativo</strong>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(i)  <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo><mi>+</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mi>x</mi></math> es invertible si y solo si existe <math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> que cumple <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mo>=</mo><msup><mi>x</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi></mrow></math>. Para ello basta tomar <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi></mrow></math>. Por otro lado, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  <math display=\"inline\"><mi>x</mi></math> es invertible si y solo si <math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mn>0</mn></mrow></math>. Y en este caso, el inverso de <math display=\"inline\"><mi>x</mi></math> es <math display=\"inline\"><mfrac><mn>1</mn><mi>x</mi></mfrac></math>."
      },
      {
       "mota": "testua",
       "html": "(ii)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">ℱ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>∘</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> tiene la propiedad asociativa y elemento neutro."
      },
      {
       "mota": "testua",
       "html": "(iii)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">ℬ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>∪</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> tiene la propiedad asociativa, la conmutativa y elemento neutro."
      }
     ]
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
       "html": "Sea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>,</mo><mi>*</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> un grupo. Entonces se cumplen las afirmaciones siguientes:"
      },
      {
       "mota": "testua",
       "html": "(i)  La expresión <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>*</mo><mi>…</mi><mo>*</mo><msub><mi>a</mi><mi>n</mi></msub></mrow></math> tiene sentido <math display=\"inline\"><mrow><mo>∀</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>a</mi><mi>n</mi></msub><mo>∈</mo><mi>A</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(ii) El elemento neutro es único."
      },
      {
       "mota": "testua",
       "html": "(iii) El inverso de un elemento es único."
      },
      {
       "mota": "testua",
       "html": "(iv)  Los elementos del grupo <math display=\"inline\"><mi>A</mi></math> son simplificables, es decir, cumplen las implicaciones siguientes: <math display=\"inline\"><mrow><mi>a</mi><mo>*</mo><mi>b</mi><mo>=</mo><mi>a</mi><mo>*</mo><mi>c</mi><mo>⇒</mo><mi>b</mi><mo>=</mo><mi>c</mi></mrow></math> y <math display=\"inline\"><mrow><mi>b</mi><mo>*</mo><mi>a</mi><mo>=</mo><mi>c</mi><mo>*</mo><mi>a</mi><mo>⇒</mo><mi>b</mi><mo>=</mo><mi>c</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(i) Conjuntos de números: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℤ</mi><mo>,</mo><mi>+</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es un grupo abeliano, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℤ</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no es un grupo pero <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mi>⋅</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> es un grupo abeliano. <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℚ</mi><mo>,</mo><mi>+</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es un grupo abeliano, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℚ</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no es un grupo pero <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℚ</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mi>⋅</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> es un grupo abeliano. <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo><mi>+</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es un grupo abeliano, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no es un grupo pero <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mi>⋅</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> es un grupo abeliano."
      },
      {
       "mota": "testua",
       "html": "(ii) Sea el conjunto siguiente: Caso general: <math display=\"block\"><mrow><msub><mi>M</mi><mrow><mi>n</mi><mo>×</mo><mi>m</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mn>1</mn><mi>m</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>n</mi><mn>1</mn></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo><mo>∀</mo><mi>i</mi><mo>,</mo><mi>j</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><mrow><mi>n</mi><mo>×</mo><mi>m</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>+</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> es un grupo abeliano."
      },
      {
       "mota": "testua",
       "html": "Caso particular, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>m</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>M</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mn>1</mn><mi>n</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>n</mi><mn>1</mn></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>n</mi><mi>n</mi></mrow></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo><mo>∀</mo><mi>i</mi><mo>,</mo><mi>j</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "(a)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>+</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> es un grupo abeliano."
      },
      {
       "mota": "testua",
       "html": "(b)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>⋅</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> no es un grupo, porque solo los elementos invertibles son matrices invertibles."
      },
      {
       "mota": "testua",
       "html": "(iii)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup><mo>,</mo><mi>+</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> es un grupo abeliano y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>,</mo><mi>+</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> también."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Anillo</strong>"
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
       "html": "Sean <math display=\"inline\"><mi>E</mi></math> un conjunto y <math display=\"inline\"><mrow><mi>+</mi><mo>,</mo><mi>⋅</mi></mrow></math>  dos operaciones binarias sobre <math display=\"inline\"><mi>E</mi></math>. Se dice que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  es un <strong>anillo</strong> si se cumplen las condiciones siguientes:"
      },
      {
       "mota": "testua",
       "html": "(i)  <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mi>+</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es un grupo abeliano."
      },
      {
       "mota": "testua",
       "html": "(ii)  <math display=\"inline\"><mi>⋅</mi></math> cumple la propiedad asociativa."
      },
      {
       "mota": "testua",
       "html": "(iii) Se cumplen las propiedades distributivas, es decir: <math display=\"block\"><mrow><mi>x</mi><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>⋅</mo><mi>y</mi><mo>+</mo><mi>x</mi><mo>⋅</mo><mi>z</mi><mo>,</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>∈</mo><mi>E</mi></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo>⋅</mo><mi>x</mi><mo>+</mo><mi>z</mi><mo>⋅</mo><mi>x</mi><mo>,</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>∈</mo><mi>E</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Tipos de anillos:</strong>"
    },
    {
     "mota": "testua",
     "html": "1.- Un anillo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se llama <em>anillo conmutativo</em> cuando <math display=\"inline\"><mi>⋅</mi></math> es conmutativa."
    },
    {
     "mota": "testua",
     "html": "2.- Un anillo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se llama <em>anillo con identidad</em> cuando la operación <math display=\"inline\"><mi>⋅</mi></math> tiene elemento neutro; este elemento neutro se llama <em>identidad</em>."
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> un anillo."
      },
      {
       "mota": "testua",
       "html": "(i)  Si usamos la notación <math display=\"inline\"><mi>+</mi></math>: denotaremos el elemento neutro por <math display=\"inline\"><mn>0</mn></math> y el inverso de <math display=\"inline\"><mi>a</mi></math> por <math display=\"inline\"><mrow><mi>−</mi><mi>a</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(ii)  Si usamos la notación <math display=\"inline\"><mi>⋅</mi></math>: denotaremos el elemento neutro por <math display=\"inline\"><mn>1</mn></math> y el inverso de <math display=\"inline\"><mi>a</mi></math> por <math display=\"inline\"><msup><mi>a</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(i) Conjuntos de números: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℤ</mi><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℚ</mi><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son anillos conmutativos con identidad, pero <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℕ</mi><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no es un anillo."
      },
      {
       "mota": "testua",
       "html": "(ii) Sea <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>2</mn><mi>k</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>k</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℤ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> el conjunto de los números pares; entonces <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es un anillo conmutativo pero sin identidad."
      },
      {
       "mota": "testua",
       "html": "(iii)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> es un anillo con identidad pero no es conmutativo."
      },
      {
       "mota": "testua",
       "html": "(iv)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> es un anillo conmutativo con identidad; este anillo se llama <em>trivial</em>. En este caso <math display=\"inline\"><mrow><mn>0</mn><mo>=</mo><mn>1</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las notaciones <math display=\"inline\"><mi>+</mi></math> y <math display=\"inline\"><mi>⋅</mi></math> solo las usaremos para operaciones asociativas. Entonces el neutro, si existe, y el inverso de los elementos invertibles serán únicos. Usamos entonces símbolos especiales para denotarlos:"
      },
      {
       "mota": "testua",
       "html": "(i)  Respecto de la operación <math display=\"inline\"><mi>+</mi></math>: el neutro es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y el inverso de <math display=\"inline\"><mi>a</mi></math> es <math display=\"inline\"><mrow><mi>−</mi><mi>a</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(ii)  Respecto de la operación <math display=\"inline\"><mi>⋅</mi></math>: el neutro es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y el inverso de <math display=\"inline\"><mi>a</mi></math> es <math display=\"inline\"><msup><mi>a</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Cuerpo</strong>"
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
       "html": "Sea <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">IK</mtext><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> un anillo y supongamos que se cumplen las propiedades siguientes:"
      },
      {
       "mota": "testua",
       "html": "(i)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">IK</mtext><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> no es trivial."
      },
      {
       "mota": "testua",
       "html": "(ii)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">IK</mtext><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> con identidad y conmutativo."
      },
      {
       "mota": "testua",
       "html": "(iii)  Todos los elementos del conjunto <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">IK </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> son invertibles respecto de la operación <math display=\"inline\"><mi>⋅</mi></math>. Entonces <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">IK</mtext><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>  se llama <strong>cuerpo</strong>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(i) Conjuntos de números: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℤ</mi><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no es un cuerpo, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℚ</mi><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son cuerpos, y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℕ</mi><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no es un cuerpo."
      },
      {
       "mota": "testua",
       "html": "(ii)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> no es un cuerpo."
      }
     ]
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Definición de espacio vectorial. Consecuencias",
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
       "html": "Sean <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">IK</mtext><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> un cuerpo y <math display=\"inline\"><mi>V</mi></math> un conjunto. Diremos que <math display=\"inline\"><mi>V</mi></math>  es un <strong>espacio vectorial &quot;IK&quot;</strong> si se cumplen las condiciones siguientes:"
      },
      {
       "mota": "testua",
       "html": "1.- En <math display=\"inline\"><mi>V</mi></math> hay definida una operación, que denotaremos <math display=\"inline\"><mi>+</mi></math>, y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo>,</mo><mi>+</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es un grupo abeliano."
      },
      {
       "mota": "testua",
       "html": "2.- Existe una aplicación: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mi>V</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>V</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mi>v</mi></mtd></mtr></mtable></math> llamada <strong>producto externo</strong>, que cumple las propiedades siguientes:"
      },
      {
       "mota": "testua",
       "html": "(i)  <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>v</mi><mo>=</mo><msub><mi>k</mi><mn>1</mn></msub><mi>v</mi><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub><mi>v</mi><mo>,</mo><mo>∀</mo><msub><mi>k</mi><mn>1</mn></msub><mo>,</mo><msub><mi>k</mi><mn>2</mn></msub><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow><mo>,</mo><mo>∀</mo><mi>v</mi><mo>∈</mo><mi>V</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(ii)  <math display=\"inline\"><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>k</mi><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>k</mi><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>∀</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>∈</mo><mi>V</mi><mo>,</mo><mo>∀</mo><mi>k</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(iii)  <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><msub><mi>k</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>v</mi><mo>=</mo><msub><mi>k</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>2</mn></msub><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mo>∀</mo><msub><mi>k</mi><mn>1</mn></msub><mo>,</mo><msub><mi>k</mi><mn>2</mn></msub><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow><mo>,</mo><mo>∀</mo><mi>v</mi><mo>∈</mo><mi>V</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(iv)  <math display=\"inline\"><mrow><msub><mn>1</mn><mrow><mtext mathvariant=\"normal\">IK </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>v</mi><mo>=</mo><mi>v</mi><mo>,</mo><mo>∀</mo><mi>v</mi><mo>∈</mo><mi>V</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Los elementos de <math display=\"inline\"><mi>V</mi></math> se llaman <strong>vectores</strong> y los de <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math>, <strong>escalares</strong>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la definición de espacio vectorial:"
      },
      {
       "mota": "testua",
       "html": "1.- El símbolo <math display=\"inline\"><mi>+</mi></math> se está usando para designar dos operaciones distintas."
      },
      {
       "mota": "testua",
       "html": "(a)  <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math> designa la primera operación del cuerpo y entonces usaremos la notación <math display=\"inline\"><msub><mn>0</mn><mtext mathvariant=\"normal\">IK</mtext></msub></math> para el elemento neutro."
      },
      {
       "mota": "testua",
       "html": "(b)  <math display=\"inline\"><mi>V</mi></math> designa la operación del grupo abeliano y entonces usaremos la notación <math display=\"inline\"><msub><mn>0</mn><mi>V</mi></msub></math> para el elemento neutro."
      },
      {
       "mota": "testua",
       "html": "2.- El símbolo <math display=\"inline\"><mi>⋅</mi></math> designa dos cosas distintas."
      },
      {
       "mota": "testua",
       "html": "(a)  <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math> designa la segunda operación del cuerpo y entonces usaremos la notación <math display=\"inline\"><msub><mn>1</mn><mtext mathvariant=\"normal\">IK</mtext></msub></math> para el elemento neutro."
      },
      {
       "mota": "testua",
       "html": "(b) Designa el producto externo."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(i)  <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>  es un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> con la suma y el producto externo siguientes:"
      },
      {
       "mota": "testua",
       "html": "<strong>Operación:</strong> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mo>∀</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Producto externo:</strong> <math display=\"block\"><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><mi>k</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mo>∀</mo><mi>k</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo><mo>∀</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Caso general: si <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math> es un cuerpo cualquiera, <math display=\"inline\"><msup><mtext mathvariant=\"normal\">IK</mtext><mi>n</mi></msup></math>  es un espacio vectorial sobre <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math> con la operación y el producto externo siguientes:"
      },
      {
       "mota": "testua",
       "html": "<strong>Operación:</strong> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mo>∀</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow><mi>n</mi></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Producto externo:</strong> <math display=\"block\"><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><mi>k</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mo>∀</mo><mi>k</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow><mo>,</mo><mo>∀</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow><mi>n</mi></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "(ii)  <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><mi>n</mi><mo>×</mo><mi>m</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">IK</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mn>1</mn><mi>m</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mo>⋱</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>n</mi><mn>1</mn></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>n</mi><mn>2</mn></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow><mo>,</mo><mo>∀</mo><mi>i</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mo>∀</mo><mi>j</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mi>.</mi><mi>.</mi><mo>,</mo><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>  es un espacio vectorial sobre <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math> con la operación y el producto externo siguientes:"
      },
      {
       "mota": "testua",
       "html": "<strong>Operación:</strong> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>b</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>+</mo><msub><mi>b</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mo>∀</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>b</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msub><mi>M</mi><mrow><mi>n</mi><mo>×</mo><mi>m</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">IK</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Producto externo:</strong> <math display=\"block\"><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mo>∀</mo><mi>k</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow><mo>,</mo><mo>∀</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msub><mi>M</mi><mrow><mi>n</mi><mo>×</mo><mi>m</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">IK</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "(iii)  <math display=\"inline\"><mrow><msub><mi>P</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">IK</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><msub><mi>a</mi><mi>i</mi></msub><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow><mo>,</mo><mi>i</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>  es un espacio vectorial sobre <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math> con la operación y el producto externo siguientes:"
      },
      {
       "mota": "testua",
       "html": "<strong>Operación:</strong> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>b</mi><mn>0</mn></msub><mo>+</mo><msub><mi>b</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>b</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>b</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><msub><mi>b</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mi>…</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mo>+</mo><msub><mi>b</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo>∀</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>b</mi><mn>0</mn></msub><mo>+</mo><msub><mi>b</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>b</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>∈</mo><msub><mi>P</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">IK</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Producto externo:</strong> <math display=\"block\"><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>k</mi><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><mi>k</mi><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><mi>…</mi><mo>+</mo><mi>k</mi><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo>∀</mo><mi>k</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow><mo>,</mo><mo>∀</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>∈</mo><msub><mi>P</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">IK</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
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
       "html": "Sea <math display=\"inline\"><mi>V</mi></math>  un espacio vectorial sobre <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math>. Entonces se cumplen las propiedades siguientes:"
      },
      {
       "mota": "testua",
       "html": "(i)  <math display=\"inline\"><mrow><mi>k</mi><mo>⋅</mo><msub><mn>0</mn><mi>V</mi></msub><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub><mo>,</mo><mo>∀</mo><mi>k</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(ii)  <math display=\"inline\"><mrow><msub><mn>0</mn><mrow><mtext mathvariant=\"normal\">IK </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>⋅</mo><mi>v</mi><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub><mo>,</mo><mo>∀</mo><mi>v</mi><mo>∈</mo><mi>V</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(iii)  <math display=\"inline\"><mrow><mi>k</mi><mo>⋅</mo><mi>v</mi><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub></mrow></math> si y solo si <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><msub><mn>0</mn><mtext mathvariant=\"normal\">IK</mtext></msub></mrow></math> o <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(iv)  <math display=\"inline\"><mrow><mi>−</mi><mi>v</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mn>1</mn><mtext mathvariant=\"normal\">IK</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>v</mi><mo>,</mo><mo>∀</mo><mi>v</mi><mo>∈</mo><mi>V</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(i)  Como <math display=\"inline\"><mrow><mi>k</mi><mo>⋅</mo><msub><mn>0</mn><mi>V</mi></msub><mo>=</mo></mrow></math> es el elemento neutro <math display=\"inline\"><mrow><mo>=</mo><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mn>0</mn><mi>V</mi></msub><mo>+</mo><msub><mn>0</mn><mi>V</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo></mrow></math>, usando las propiedades de la definición de espacio vectorial <math display=\"inline\"><mrow><mo>=</mo><mi>k</mi><msub><mn>0</mn><mi>V</mi></msub><mo>+</mo><mi>k</mi><msub><mn>0</mn><mi>V</mi></msub></mrow></math> y como los elementos del grupo <math display=\"inline\"><mi>V</mi></math> son simplificables, <math display=\"inline\"><mrow><msub><mn>0</mn><mi>V</mi></msub><mo>=</mo><mi>k</mi><msub><mn>0</mn><mi>V</mi></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(ii) Se demuestra de modo análogo."
      },
      {
       "mota": "testua",
       "html": "(iii) Usando los dos apartados anteriores, si <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><msub><mn>0</mn><mtext mathvariant=\"normal\">IK</mtext></msub></mrow></math> o <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub></mrow></math>, entonces se cumple <math display=\"inline\"><mrow><mi>k</mi><mo>⋅</mo><mi>v</mi><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub></mrow></math>. Para demostrar la otra implicación, supongamos que <math display=\"inline\"><mrow><mi>k</mi><mo>≠</mo><msub><mn>0</mn><mtext mathvariant=\"normal\">IK</mtext></msub></mrow></math>. Entonces, como <math display=\"inline\"><mi>k</mi></math> es un elemento invertible del cuerpo respecto del producto, existirá su inverso <math display=\"inline\"><msup><mi>k</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>. Por tanto <math display=\"inline\"><mrow><msup><mi>k</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>⋅</mo><mi>k</mi><mo>⋅</mo><mi>v</mi><mo>=</mo><msup><mi>k</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msub><mn>0</mn><mi>V</mi></msub></mrow></math> y, usando las propiedades de la definición de espacio vectorial, deducimos <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(iv) Para demostrar esta consecuencia basta probar que <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mn>1</mn><mtext mathvariant=\"normal\">IK</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>v</mi></mrow></math>  es el inverso de <math display=\"inline\"><mi>v</mi></math>. Para ello, usando una de las propiedades de la definición de espacio vectorial <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mn>1</mn><mtext mathvariant=\"normal\">IK</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>v</mi><mo>+</mo><mi>v</mi><mo>=</mo></mrow></math> y, usando de nuevo una propiedad de la definición, <math display=\"inline\"><mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mn>1</mn><mtext mathvariant=\"normal\">IK</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>v</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mn>1</mn><mtext mathvariant=\"normal\">IK</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>v</mi><mo>=</mo></mrow></math> <math display=\"inline\"><mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mn>1</mn><mtext mathvariant=\"normal\">IK</mtext></msub><mo>+</mo><msub><mn>1</mn><mtext mathvariant=\"normal\">IK</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>v</mi><mo>=</mo><msub><mn>0</mn><mrow><mtext mathvariant=\"normal\">IK </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>v</mi><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Subespacios",
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
       "html": "Sea <math display=\"inline\"><mi>V</mi></math>  un espacio vectorial sobre <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math>. Se dice que un subconjunto <math display=\"inline\"><mrow><mi>W</mi><mo>⊆</mo><mi>V</mi></mrow></math> es un <strong>subespacio vectorial</strong>, o <strong>subespacio</strong>, de <math display=\"inline\"><mi>V</mi></math>, y lo denotaremos <math display=\"inline\"><mrow><mi>W</mi><mo>≤</mo><mi>V</mi></mrow></math>, si cumple las condiciones siguientes:"
      },
      {
       "mota": "testua",
       "html": "(i)  La operación de <math display=\"inline\"><mi>V</mi></math> es también una operación en <math display=\"inline\"><mi>W</mi></math>, es decir: <math display=\"block\"><mrow><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><msub><mi>w</mi><mn>2</mn></msub><mo>∈</mo><mi>W</mi><mo>,</mo><mo>∀</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><msub><mi>w</mi><mn>2</mn></msub><mo>∈</mo><mi>W</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "(ii)  El producto externo de <math display=\"inline\"><mi>V</mi></math> es también un producto externo en <math display=\"inline\"><mi>W</mi></math>, es decir: <math display=\"block\"><mrow><mi>k</mi><mi>w</mi><mo>∈</mo><mi>W</mi><mo>,</mo><mo>∀</mo><mi>k</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow><mo>,</mo><mo>∀</mo><mi>w</mi><mo>∈</mo><mi>W</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "(iii)  <math display=\"inline\"><mi>W</mi></math> es un espacio vectorial sobre <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math> con esa operación y ese producto externo."
      }
     ]
    },
    {
     "mota": "etiketa",
     "etiketa": "Ejemplo.",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>V</mi></math>  es un espacio vectorial sobre <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>O</mi><mi>V</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> y <math display=\"inline\"><mi>V</mi></math> son siempre subespacios; estos subespacios se llaman <em>triviales</em>."
      }
     ]
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
       "html": "Sean <math display=\"inline\"><mi>V</mi></math>  un espacio vectorial sobre <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math> y <math display=\"inline\"><mrow><mi>∅</mi><mo>≠</mo><mi>W</mi><mo>⊆</mo><mi>V</mi></mrow></math>. Entonces <math display=\"inline\"><mi>W</mi></math>  es un subespacio de <math display=\"inline\"><mi>V</mi></math> si y solo si cumple las dos condiciones siguientes:"
      },
      {
       "mota": "testua",
       "html": "1.- <math display=\"inline\"><mrow><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><msub><mi>w</mi><mn>2</mn></msub><mo>∈</mo><mi>W</mi><mo>,</mo><mo>∀</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><msub><mi>w</mi><mn>2</mn></msub><mo>∈</mo><mi>W</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "2.- <math display=\"inline\"><mrow><mi>k</mi><mi>w</mi><mo>∈</mo><mi>W</mi><mo>,</mo><mo>∀</mo><mi>k</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow><mo>,</mo><mo>∀</mo><mi>w</mi><mo>∈</mo><mi>W</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una de las implicaciones es inmediata, por lo que basta demostrar la otra. Supongamos que el subconjunto no vacío <math display=\"inline\"><mi>W</mi></math> cumple estas dos propiedades"
      },
      {
       "mota": "testua",
       "html": "1.- <math display=\"inline\"><mrow><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><msub><mi>w</mi><mn>2</mn></msub><mo>∈</mo><mi>W</mi><mo>,</mo><mo>∀</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><msub><mi>w</mi><mn>2</mn></msub><mo>∈</mo><mi>W</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "2.- <math display=\"inline\"><mrow><mi>k</mi><mi>w</mi><mo>∈</mo><mi>W</mi><mo>,</mo><mo>∀</mo><mi>k</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow><mo>,</mo><mo>∀</mo><mi>w</mi><mo>∈</mo><mi>W</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Para demostrar que <math display=\"inline\"><mi>W</mi></math> es un subespacio debemos probar que con esa operación y ese producto externo <math display=\"inline\"><mi>W</mi></math> es un espacio vectorial sobre <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math>. Es claro que la operación <math display=\"inline\"><mi>+</mi></math> cumple las propiedades asociativa y conmutativa (porque se cumplen en <math display=\"inline\"><mi>V</mi></math> y <math display=\"inline\"><mrow><mi>W</mi><mo>⊆</mo><mi>V</mi></mrow></math>). Además cumple también (i), (ii), (iii) y (iv) de la definición de espacio vectorial por las mismas razones."
      },
      {
       "mota": "testua",
       "html": "Por otro lado, <math display=\"inline\"><mrow><mo>∃</mo><mi>w</mi><mo>∈</mo><mi>W</mi></mrow></math> y, en consecuencia, usando la condición 2.- y las consecuencias del apartado anterior, <math display=\"inline\"><mrow><msub><mn>0</mn><mi>V</mi></msub><mo>=</mo><msub><mn>0</mn><mrow><mtext mathvariant=\"normal\">IK </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>w</mi><mo>∈</mo><mi>W</mi></mrow></math>. Entonces hemos encontrado el elemento neutro. Por último, si <math display=\"inline\"><mrow><mi>w</mi><mo>∈</mo><mi>W</mi></mrow></math>, su inverso <math display=\"inline\"><mrow><mi>−</mi><mi>w</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mn>1</mn><mtext mathvariant=\"normal\">IK</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>w</mi><mo>∈</mo><mi>W</mi></mrow></math> también está en <math display=\"inline\"><mi>W</mi></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(i) Sea <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></math>  un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>; entonces <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mo>=</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es un subespacio pero <math display=\"inline\"><mrow><msup><mi>W</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> no."
      },
      {
       "mota": "testua",
       "html": "(ii) Sea <math display=\"inline\"><mrow><msub><mi>M</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>; entonces <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>a</mi><mo>,</mo><mi>b</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es un subespacio."
      },
      {
       "mota": "testua",
       "html": "(iii) Sean <math display=\"inline\"><mi>V</mi></math>  un espacio vectorial sobre <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math> y <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo>∈</mo><mi>V</mi></mrow></math> vectores fijos; entonces <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>k</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>n</mi></msub><msub><mi>v</mi><mi>n</mi></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><msub><mi>k</mi><mi>i</mi></msub><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow><mo>,</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>.</mi><mi>.</mi><mo>,</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>  es un subespacio de <math display=\"inline\"><mi>V</mi></math>. Este subespacio lo denotaremos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y se llama subespacio generado por los vectores <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub></mrow></math>. En general, si <math display=\"inline\"><mrow><mi>S</mi><mo>⊆</mo><mi>V</mi></mrow></math>, el subespacio generado por <math display=\"inline\"><mi>S</mi></math> se define así:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>k</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>n</mi></msub><msub><mi>v</mi><mi>n</mi></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><msub><mi>k</mi><mi>i</mi></msub><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow><mo>,</mo><msub><mi>v</mi><mi>i</mi></msub><mo>∈</mo><mi>S</mi><mo>,</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Se puede demostrar que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> es el menor subespacio que contiene a <math display=\"inline\"><mi>S</mi></math>. Por ejemplo, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>−</mi><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>,</mo><mi>y</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
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
       "html": "Sean <math display=\"inline\"><msub><mi>W</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>W</mi><mn>2</mn></msub></math>  subespacios de <math display=\"inline\"><mi>V</mi></math>. La <strong>suma</strong> de <math display=\"inline\"><msub><mi>W</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>W</mi><mn>2</mn></msub></math>, que denotaremos <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub></mrow></math>, se define así:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><msub><mi>w</mi><mn>2</mn></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><msub><mi>w</mi><mi>i</mi></msub><mo>∈</mo><msub><mi>W</mi><mi>i</mi></msub><mo>,</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Se dice que la suma es <strong>directa</strong> si se cumple <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>W</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mn>0</mn><mi>V</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, y en este caso la denotaremos <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>⊕</mo><msub><mi>W</mi><mn>2</mn></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "etiketa",
     "etiketa": "Ejemplo.",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>  un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>. Entonces <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>,</mo><mi>y</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y además la suma es directa."
      }
     ]
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
       "html": "Sean <math display=\"inline\"><msub><mi>W</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>W</mi><mn>2</mn></msub></math>  subespacios de <math display=\"inline\"><mi>V</mi></math>. Entonces"
      },
      {
       "mota": "testua",
       "html": "(i)  <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>W</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub></mrow></math>  son subespacios de <math display=\"inline\"><mi>V</mi></math>."
      },
      {
       "mota": "testua",
       "html": "(ii)  La suma de <math display=\"inline\"><msub><mi>W</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>W</mi><mn>2</mn></msub></math> es directa si y solo si: <math display=\"block\"><mrow><mo>∀</mo><mi>w</mi><mo>∈</mo><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub><mo>,</mo><mo>∃</mo><mi>!</mi><msub><mi>w</mi><mi>i</mi></msub><mo>∈</mo><msub><mi>W</mi><mi>i</mi></msub><mo>,</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> non </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>w</mi><mo>=</mo><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><msub><mi>w</mi><mn>2</mn></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> betetzen den</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(i)  Demostraremos que <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub></mrow></math> es un subespacio, pues el otro se hace de modo análogo. Como <math display=\"inline\"><mrow><mi>∅</mi><mo>≠</mo><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub><mo>⊆</mo><mi>V</mi></mrow></math>, usando la caracterización, hay que demostrar las dos propiedades siguientes:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>+</mo><msub><mi>w</mi><msup><mn>2</mn><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub><mo>,</mo><mo>∀</mo><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><msub><mi>w</mi><mn>2</mn></msub><mo>,</mo><msub><mi>w</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>+</mo><msub><mi>w</mi><msup><mn>2</mn><mo>′</mo></msup></msub><mo>∈</mo><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><msub><mi>W</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> <math display=\"block\"><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub><mo>,</mo><mo>∀</mo><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><msub><mi>w</mi><mn>2</mn></msub><mo>∈</mo><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub><mo>,</mo><mo>∀</mo><mi>k</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Pero como <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>+</mo><msub><mi>w</mi><msup><mn>2</mn><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><msub><mi>w</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>2</mn></msub><mo>+</mo><msub><mi>w</mi><msup><mn>2</mn><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><msub><mi>W</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>W</mi><mn>2</mn></msub></math> son subespacios, es decir <math display=\"inline\"><mrow><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><msub><mi>w</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>∈</mo><msub><mi>W</mi><mn>1</mn></msub><mo>,</mo><msub><mi>w</mi><mn>2</mn></msub><mo>+</mo><msub><mi>w</mi><msup><mn>2</mn><mo>′</mo></msup></msub><mo>∈</mo><msub><mi>W</mi><mn>2</mn></msub></mrow></math>, la primera condición es inmediata. La segunda se demuestra de manera parecida."
      },
      {
       "mota": "testua",
       "html": "(ii)  Demostraremos primero <math display=\"inline\"><mo>⇒</mo></math>. Supongamos que existen <math display=\"inline\"><mrow><msub><mi>w</mi><msup><mi>i</mi><mo>′</mo></msup></msub><mo>∈</mo><msub><mi>W</mi><mi>i</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math> que cumplen <math display=\"inline\"><mrow><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><msub><mi>w</mi><mn>2</mn></msub><mo>=</mo><mi>w</mi><mo>=</mo><msub><mi>w</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>+</mo><msub><mi>w</mi><msup><mn>2</mn><mo>′</mo></msup></msub></mrow></math>. Entonces tendremos <math display=\"inline\"><mrow><msub><mi>w</mi><mn>1</mn></msub><mo>−</mo><msub><mi>w</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>=</mo><msub><mi>w</mi><msup><mn>2</mn><mo>′</mo></msup></msub><mo>−</mo><msub><mi>w</mi><mn>2</mn></msub></mrow></math>; la primera parte de la igualdad está en <math display=\"inline\"><msub><mi>W</mi><mn>1</mn></msub></math>, porque <math display=\"inline\"><msub><mi>W</mi><mn>1</mn></msub></math> es un subespacio, y la segunda en <math display=\"inline\"><msub><mi>W</mi><mn>2</mn></msub></math>. En consecuencia, ese vector está en <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>W</mi><mn>2</mn></msub></mrow></math> y, como la suma es directa, debe ser el vector nulo."
      },
      {
       "mota": "testua",
       "html": "Demostraremos <math display=\"inline\"><mo>←</mo></math>. Sea <math display=\"inline\"><mrow><mi>v</mi><mo>∈</mo><msub><mi>W</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>W</mi><mn>2</mn></msub></mrow></math>; entonces la expresión <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>v</mi><mo>+</mo><msub><mn>0</mn><mi>V</mi></msub></mrow></math> expresa <math display=\"inline\"><mi>v</mi></math> como suma de vectores de <math display=\"inline\"><msub><mi>W</mi><mn>1</mn></msub></math> y de <math display=\"inline\"><msub><mi>W</mi><mn>2</mn></msub></math>. Por otro lado, la expresión <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub><mo>+</mo><mi>v</mi></mrow></math> expresa lo mismo. Por hipótesis, como la forma de expresarlo es única, debe ser <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "etiketa",
     "etiketa": "Ejemplo.",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>W</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> subespacios. Entonces <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>W</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Caso general</strong>"
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
       "html": "Sean <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>,</mo><msub><mi>W</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>W</mi><mi>n</mi></msub></mrow></math>  subespacios de <math display=\"inline\"><mi>V</mi></math>. La <strong>suma</strong> de <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>,</mo><msub><mi>W</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>W</mi><mi>n</mi></msub></mrow></math>, que denotaremos <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>W</mi><mi>n</mi></msub></mrow></math>, se define así:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>W</mi><mi>n</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><msub><mi>w</mi><mn>2</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>w</mi><mi>n</mi></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><msub><mi>w</mi><mi>i</mi></msub><mo>∈</mo><msub><mi>W</mi><mi>i</mi></msub><mo>,</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Se dice que la suma es <strong>directa</strong> si <math display=\"inline\"><mrow><msub><mi>W</mi><mi>i</mi></msub><mo>∩</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>W</mi><mrow><mi>i</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>W</mi><mrow><mi>i</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>W</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mn>0</mn><mi>V</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es <math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi></mrow></math>, y en este caso la denotaremos <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>⊕</mo><msub><mi>W</mi><mn>2</mn></msub><mo>⊕</mo><mi>…</mi><mo>⊕</mo><msub><mi>W</mi><mi>n</mi></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>  un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>. Entonces la suma de los subespacios <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>W</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>W</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> es directa y la suma es <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>."
      }
     ]
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
       "html": "Sean <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>,</mo><msub><mi>W</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>W</mi><mi>n</mi></msub></mrow></math>  subespacios de <math display=\"inline\"><mi>V</mi></math>. Entonces"
      },
      {
       "mota": "testua",
       "html": "(i)  <math display=\"inline\"><mrow><msubsup><mo>⋂</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msub><mi>W</mi><mi>i</mi></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>W</mi><mi>n</mi></msub></mrow></math>  son subespacios de <math display=\"inline\"><mi>V</mi></math>."
      },
      {
       "mota": "testua",
       "html": "(ii)  La suma de <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>,</mo><msub><mi>W</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>W</mi><mi>n</mi></msub></mrow></math> es directa si y solo si <math display=\"inline\"><mrow><mo>∀</mo><mi>w</mi><mo>∈</mo><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>W</mi><mi>n</mi></msub><mo>,</mo><mo>∃</mo><mi>!</mi><msub><mi>w</mi><mi>i</mi></msub><mo>∈</mo><msub><mi>W</mi><mi>i</mi></msub><mspace width=\"0.222em\"></mspace><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi></mrow></math> donde se cumple <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><msub><mi>w</mi><mn>2</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>w</mi><mi>n</mi></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usando inducción sobre <math display=\"inline\"><mi>n</mi></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Bases y dimensión",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Combinación lineal"
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
       "html": "Sean <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo>∈</mo><mi>V</mi></mrow></math> fijos. Se dice que otro vector <math display=\"inline\"><mrow><mi>v</mi><mo>∈</mo><mi>V</mi></mrow></math>  es una <strong>combinación lineal</strong> de los vectores <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub></mrow></math> si existen <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>k</mi><mi>n</mi></msub><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow></mrow></math> tales que se cumple <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msub><mi>k</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>n</mi></msub><msub><mi>v</mi><mi>n</mi></msub></mrow></math>, es decir, si se cumple <math display=\"inline\"><mrow><mi>v</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. Los escalares <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>k</mi><mi>n</mi></msub></mrow></math> se llaman <strong>coeficientes</strong> de la combinación lineal."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(i) Sea <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>  un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>. El vector <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es una combinación lineal de los vectores <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(ii) Sea <math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>. El vector <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math> es una combinación lineal de los vectores <math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>,</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> y <math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Combinación lineal en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></math>, geométricamente: estirar <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math>\n      (<math display=\"inline\"><mrow><mn>2</mn><msub><mi>v</mi><mn>1</mn></msub></mrow></math>) y añadir <math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math> (regla del paralelogramo)  da <math display=\"inline\"><mi>v</mi></math>.\n   El subespacio <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> es todo el plano,\n      porque <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math> no son paralelos.",
     "src": "../media/irudiak/052642632bb0292e.svg",
     "zabalera": 299
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema libre"
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
       "html": "Sean <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo>∈</mo><mi>V</mi></mrow></math> vectores fijos. Diremos que <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>.</mi><mi>.</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub></mrow></math>  son <strong>linealmente independientes</strong>, o que <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>  es un <strong>sistema libre</strong>, si se cumple la implicación siguiente:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>k</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>n</mi></msub><msub><mi>v</mi><mi>n</mi></msub><mo>=</mo><msub><mn>0</mn><mrow><mtext mathvariant=\"normal\">IK </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>⇒</mo><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><msub><mi>k</mi><mn>2</mn></msub><mo>=</mo><mi>…</mi><mo>=</mo><msub><mi>k</mi><mi>n</mi></msub><mo>=</mo><msub><mn>0</mn><mtext mathvariant=\"normal\">IK</mtext></msub><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "En caso contrario diremos que los vectores son <strong>linealmente dependientes</strong>, o que es un <strong>sistema ligado</strong>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(i) Sea <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>  un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>; entonces <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> es un sistema libre."
      },
      {
       "mota": "testua",
       "html": "(ii) Sea <math display=\"inline\"><mrow><msub><mi>M</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>; entonces <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> es un sistema ligado."
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
       "html": "Sea <math display=\"inline\"><mrow><mi>∅</mi><mo>≠</mo><mi>T</mi><mo>⊆</mo><mi>V</mi></mrow></math> un subconjunto. Diremos que <math display=\"inline\"><mi>T</mi></math>  es <strong>libre</strong> si cada uno de sus subconjuntos finitos es un sistema libre, es decir:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> sistema librea</mtext></mrow><mo>,</mo><mo>∀</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊆</mo><mi>T</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "En caso contrario diremos que <math display=\"inline\"><mi>T</mi></math>  es <strong>ligado</strong>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></math>  un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>; entonces el conjunto infinito <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>n</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℕ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> es ligado."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Sistema libre frente a ligado en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></math>: a la izquierda, dos vectores no paralelos\n   generan todo el plano; a la derecha, uno es múltiplo del otro\n      (una combinación con algún coeficiente no nulo da <math display=\"inline\"><mn>0</mn></math>) y entre los dos\n   solo generan la misma recta.",
     "src": "../media/irudiak/f654cf62b4e43bdb.svg",
     "zabalera": 357
    },
    {
     "mota": "ingurunea",
     "izena": "Lema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mi>T</mi><mo>⊆</mo><mi>V</mi></mrow></math> libre y supongamos que <math display=\"inline\"><mi>v</mi></math> no puede expresarse como combinación lineal de los elementos de <math display=\"inline\"><mi>T</mi></math>. Entonces <math display=\"inline\"><mrow><mi>T</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> también es libre."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊆</mo><mi>T</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Hay que demostrar que <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> es un sistema libre y para ello distinguimos dos casos."
      },
      {
       "mota": "testua",
       "html": "Caso 1.-: <math display=\"inline\"><mrow><mi>v</mi><mo>∉</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Entonces <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊆</mo><mi>T</mi></mrow></math> y, como <math display=\"inline\"><mi>T</mi></math> es libre, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> será un sistema libre."
      },
      {
       "mota": "testua",
       "html": "Caso 2.-: <math display=\"inline\"><mrow><mi>v</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Supongamos que <math display=\"inline\"><mrow><msub><mi>v</mi><mi>n</mi></msub><mo>=</mo><mi>v</mi></mrow></math>; entonces hay que demostrar que <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> es un sistema libre. Para ello, en la igualdad <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><msub><mi>v</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mi>k</mi><mi>v</mi><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub></mrow></math> debe ser <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><msub><mn>0</mn><mtext mathvariant=\"normal\">IK</mtext></msub></mrow></math>, pues en caso contrario existiría <math display=\"inline\"><msup><mi>k</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> y entonces, despejando <math display=\"inline\"><mi>v</mi></math>, demostraríamos que <math display=\"inline\"><mi>v</mi></math> es una combinación lineal de los elementos de <math display=\"inline\"><mi>T</mi></math>, lo cual es imposible por la hipótesis. Por tanto <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><msub><mi>v</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub></mrow></math> pero, como ahora <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>∈</mo><mi>T</mi></mrow></math> y <math display=\"inline\"><mi>T</mi></math> es libre, todos los coeficientes de la combinación lineal deben ser nulos."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>  un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>. Como <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es un vector no nulo, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es un sistema libre. Entonces, por el lema anterior, eligiendo <math display=\"inline\"><mrow><mi>v</mi><mo>∉</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, por ejemplo <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>T</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> también es libre. Continuando el proceso, eligiendo <math display=\"inline\"><mrow><mi>w</mi><mo>∉</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> el conjunto siguiente <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> también es libre. Pero a partir de aquí ya no podemos seguir."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema generador"
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
       "html": "Sea <math display=\"inline\"><mrow><mi>S</mi><mo>⊆</mo><mi>V</mi></mrow></math> un subconjunto. Diremos que <math display=\"inline\"><mi>S</mi></math>  es un <strong>sistema generador</strong> de <math display=\"inline\"><mi>V</mi></math> si se cumple <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, es decir, cualquier vector de <math display=\"inline\"><mi>V</mi></math> puede expresarse como combinación lineal de los vectores de <math display=\"inline\"><mi>S</mi></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>  un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>. Entonces el sistema de vectores <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> es un sistema generador de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Lema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mi>S</mi></math>  un sistema generador del espacio <math display=\"inline\"><mi>V</mi></math>. Supongamos que existe un vector <math display=\"inline\"><mrow><mi>w</mi><mo>∈</mo><mi>S</mi></mrow></math> que puede expresarse como combinación lineal de los vectores del conjunto <math display=\"inline\"><mrow><mi>S</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Entonces <math display=\"inline\"><mrow><mi>S</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> también es un sistema generador de <math display=\"inline\"><mi>V</mi></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mi>v</mi><mo>∈</mo><mi>V</mi></mrow></math> un vector. Hay que demostrar que puede expresarse como combinación lineal de los vectores del conjunto <math display=\"inline\"><mrow><mi>S</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Por hipótesis sabemos que <math display=\"inline\"><mi>v</mi></math>  puede expresarse como combinación lineal de los vectores del conjunto <math display=\"inline\"><mi>S</mi></math>, es decir, existen <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>k</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>k</mi><mo>∈</mo><mi>K</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>w</mi><mo>∈</mo><mi>S</mi></mrow></math> tales que se cumple lo siguiente:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msub><mi>k</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><msub><mi>k</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><msub><mi>v</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mi>k</mi><mi>w</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Ahora, como <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>∈</mo><mi>S</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es distinto de <math display=\"inline\"><mi>w</mi></math> y además, por hipótesis, <math display=\"inline\"><mi>w</mi></math>  puede expresarse como combinación lineal de los vectores del conjunto <math display=\"inline\"><mrow><mi>S</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, en consecuencia <math display=\"inline\"><mi>v</mi></math>  puede expresarse como combinación lineal de los vectores del conjunto <math display=\"inline\"><mrow><mi>S</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Base"
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
       "html": "Se dice que <math display=\"inline\"><mi>β</mi></math>  es una <strong>base</strong> de <math display=\"inline\"><mi>V</mi></math> si <math display=\"inline\"><mi>β</mi></math>  es un sistema generador de <math display=\"inline\"><mi>V</mi></math> y un sistema libre."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "1.- Sea <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>  un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>; definimos <math display=\"inline\"><mrow><msub><mi>e</mi><mi>i</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>…</mi><mo>,</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mn>1</mn></math>  <math display=\"inline\"><mi>i</mi></math>. donde tenemos, <math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi></mrow></math> entonces <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>e</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>  es una base de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>; esta base se llama <strong>canónica</strong> y la denotaremos <math display=\"inline\"><msub><mi>β</mi><mi>k</mi></msub></math>."
      },
      {
       "mota": "testua",
       "html": "2.- Sea <math display=\"inline\"><mrow><msub><mi>P</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>; entonces <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo><mi>…</mi><mo>,</mo><msup><mi>x</mi><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> es una base del espacio."
      },
      {
       "mota": "testua",
       "html": "3.- Sea <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><mi>n</mi><mo>×</mo><mi>m</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>; entonces <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>…</mi><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> es una base del espacio."
      },
      {
       "mota": "testua",
       "html": "4.- Sea <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>  un subespacio de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>; entonces <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>  es una base de <math display=\"inline\"><mi>W</mi></math>."
      }
     ]
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
       "html": "Sea <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>  una base de <math display=\"inline\"><mi>V</mi></math>. Entonces cualquier vector de <math display=\"inline\"><mi>V</mi></math> puede expresarse de una única manera como combinación lineal de los vectores de <math display=\"inline\"><mi>β</mi></math>. Es decir, si <math display=\"inline\"><mrow><mi>v</mi><mo>∈</mo><mi>V</mi></mrow></math>, entonces existen únicos <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>λ</mi><mi>n</mi></msub><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow></mrow></math> tales que se cumple <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>λ</mi><mi>n</mi></msub><msub><mi>v</mi><mi>n</mi></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>β</mi></math>  es un sistema generador y un sistema libre de <math display=\"inline\"><mi>V</mi></math>."
      },
      {
       "mota": "testua",
       "html": "Demostración de la existencia: por ser <math display=\"inline\"><mi>β</mi></math> un sistema generador, cualquier vector de <math display=\"inline\"><mi>V</mi></math> puede expresarse como combinación lineal de los vectores <math display=\"inline\"><mi>v</mi></math>  <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub></mrow></math>. Es decir, existen <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>λ</mi><mi>n</mi></msub><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow></mrow></math> tales que se cumple <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>λ</mi><mi>n</mi></msub><msub><mi>v</mi><mi>n</mi></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Demostración de la unicidad: supongamos que existen <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>k</mi><mi>n</mi></msub><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow></mrow></math> tales que se cumple <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msub><mi>k</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>n</mi></msub><msub><mi>v</mi><mi>n</mi></msub></mrow></math>. Entonces,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>λ</mi><mi>n</mi></msub><msub><mi>v</mi><mi>n</mi></msub><mo>=</mo><mi>v</mi><mo>=</mo><msub><mi>k</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>n</mi></msub><msub><mi>v</mi><mi>n</mi></msub></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "O sea"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>k</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>n</mi></msub><mo>−</mo><msub><mi>k</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>v</mi><mi>n</mi></msub><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Pero como <math display=\"inline\"><mi>β</mi></math> es un sistema libre, <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>k</mi><mn>2</mn></msub><mo>=</mo><mi>⋯</mi><mo>=</mo><msub><mi>λ</mi><mi>n</mi></msub><mo>−</mo><msub><mi>k</mi><mi>n</mi></msub><mo>=</mo><msub><mn>0</mn><mtext mathvariant=\"normal\">IK</mtext></msub></mrow></math>. En consecuencia <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>k</mi><mn>1</mn></msub><mo>,</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><msub><mi>k</mi><mn>2</mn></msub><mo>,</mo><mi>⋯</mi><mo>,</mo><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><msub><mi>k</mi><mi>n</mi></msub></mrow></math>."
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
       "html": "Se dice que <math display=\"inline\"><mi>V</mi></math>  está <strong>finitamente generado</strong> si existe un sistema generador finito <math display=\"inline\"><mi>S</mi></math> de <math display=\"inline\"><mi>V</mi></math> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> finito)."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> está finitamente generado porque <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>  es un sistema generador finito de <math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
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
       "html": "Sea <math display=\"inline\"><mi>V</mi></math> un espacio vectorial finitamente generado. Entonces <math display=\"inline\"><mi>V</mi></math> tiene una base finita."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mi>S</mi></math>  un sistema generador finito de <math display=\"inline\"><mi>V</mi></math>. Hay dos posibilidades:"
      },
      {
       "mota": "testua",
       "html": "1.- Que <math display=\"inline\"><mi>S</mi></math> sea un sistema libre. Entonces <math display=\"inline\"><mi>S</mi></math>  es una base de <math display=\"inline\"><mi>V</mi></math> y la demostración ha terminado."
      },
      {
       "mota": "testua",
       "html": "2.- Que <math display=\"inline\"><mi>S</mi></math> sea un sistema ligado. Entonces existen <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>k</mi><mi>n</mi></msub><mo>∈</mo><mi>K</mi></mrow></math> no todos nulos y vectores <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo>∈</mo><mi>V</mi></mrow></math> tales que <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>n</mi></msub><msub><mi>v</mi><mi>n</mi></msub><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub></mrow></math>. Pero entonces uno de los vectores puede expresarse como combinación lineal de los otros; supongamos que <math display=\"inline\"><msub><mi>v</mi><mi>n</mi></msub></math> es ese vector. Entonces, por el lema, <math display=\"inline\"><mrow><mi>S</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> también es un sistema generador."
      },
      {
       "mota": "testua",
       "html": "Continuando el procedimiento con el conjunto <math display=\"inline\"><mrow><mi>S</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> acabaremos obteniendo una base."
      }
     ]
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
       "html": "Sea <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mn>0</mn><mi>V</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>≠</mo><mi>V</mi></mrow></math> finitamente generado. Entonces todas las bases tienen el mismo cardinal."
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
       "html": "Sea <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mn>0</mn><mi>V</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>≠</mo><mi>V</mi></mrow></math> finitamente generado. Entonces el cardinal de una base, que por el teorema anterior no depende de la base elegida, se llama <strong>dimensión</strong> de <math display=\"inline\"><mi>V</mi></math> y se denota <math display=\"inline\"><mrow><msub><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mtext mathvariant=\"normal\">IK </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>V</mi></mrow></math> o <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "1.- Sea <math display=\"inline\"><msup><mtext mathvariant=\"normal\">IK</mtext><mi>n</mi></msup></math>  un espacio vectorial sobre <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math>; entonces <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow><mi>n</mi></msup><mo>=</mo><mi>n</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "2.- Sea <math display=\"inline\"><mrow><msub><mi>P</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>; entonces <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>P</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "3.- Sea <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><mi>n</mi><mo>×</mo><mi>m</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>; entonces <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>M</mi><mrow><mi>n</mi><mo>×</mo><mi>m</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>n</mi><mi>m</mi></mrow></math>."
      }
     ]
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
       "html": "Sean <math display=\"inline\"><mi>V</mi></math>  un espacio vectorial de dimensión <math display=\"inline\"><mi>n</mi></math> sobre <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math> y <math display=\"inline\"><mrow><mi>S</mi><mo>⊆</mo><mi>V</mi></mrow></math>  un sistema generador de <math display=\"inline\"><mi>V</mi></math>. Entonces se cumple:"
      },
      {
       "mota": "testua",
       "html": "(i) Existe una base <math display=\"inline\"><mi>β</mi></math>  de <math display=\"inline\"><mi>V</mi></math> tal que se cumple <math display=\"inline\"><mrow><mi>β</mi><mo>⊆</mo><mi>S</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(ii)  <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≥</mo><mi>n</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(iii)  Si <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>n</mi></mrow></math>, entonces <math display=\"inline\"><mi>S</mi></math>  es una base de <math display=\"inline\"><mi>V</mi></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El primer apartado lo hemos demostrado en el teorema anterior"
      },
      {
       "mota": "testua",
       "html": "(ii)  Como <math display=\"inline\"><mrow><mi>β</mi><mo>⊆</mo><mi>S</mi></mrow></math>, tomando cardinales <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>⊆</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(iii)  Si <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>n</mi></mrow></math>, entonces la base <math display=\"inline\"><mi>β</mi></math> del apartado (i) y <math display=\"inline\"><mi>S</mi></math> son la misma."
      }
     ]
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
       "html": "Sean <math display=\"inline\"><mi>V</mi></math>  un espacio vectorial de dimensión <math display=\"inline\"><mi>n</mi></math> sobre <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math> y <math display=\"inline\"><mrow><mi>T</mi><mo>⊆</mo><mi>V</mi></mrow></math> un sistema libre. Entonces se cumple:"
      },
      {
       "mota": "testua",
       "html": "(i)  <math display=\"inline\"><mi>T</mi></math>  puede extenderse hasta una base de <math display=\"inline\"><mi>V</mi></math>, es decir, existe una base <math display=\"inline\"><mi>β</mi></math>  de <math display=\"inline\"><mi>V</mi></math> tal que se cumple <math display=\"inline\"><mrow><mi>T</mi><mo>⊆</mo><mi>β</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(ii)  <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mi>n</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(iii)  Si <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>n</mi></mrow></math>, entonces <math display=\"inline\"><mi>T</mi></math>  es una base de <math display=\"inline\"><mi>V</mi></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(i) Sean <math display=\"inline\"><mi>T</mi></math> un sistema libre y <math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>  una base de <math display=\"inline\"><mi>V</mi></math>. Entonces hay dos posibilidades:"
      },
      {
       "mota": "testua",
       "html": "1.- <math display=\"inline\"><mi>T</mi></math>  es un sistema generador de <math display=\"inline\"><mi>V</mi></math> y entonces una base, con lo que la demostración ha terminado en este caso."
      },
      {
       "mota": "testua",
       "html": "2.- <math display=\"inline\"><mi>T</mi></math> no es un sistema generador de <math display=\"inline\"><mi>V</mi></math>. Entonces se cumple <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>≠</mo><mi>V</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. Por tanto, existe <math display=\"inline\"><mrow><mi>i</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> tal que <math display=\"inline\"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>∉</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>; supongamos que es <math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow></math>. Usando un lema, sabemos que <math display=\"inline\"><mrow><mi>T</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> también es un sistema libre. Continuando el procedimiento anterior con este nuevo sistema libre acabaremos obteniendo una base <math display=\"inline\"><mi>β</mi></math> tal que se cumple <math display=\"inline\"><mrow><mi>T</mi><mo>⊆</mo><mi>β</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(ii)  Como <math display=\"inline\"><mrow><mi>T</mi><mo>⊆</mo><mi>β</mi></mrow></math>, tomando cardinales <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>⊆</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(iii)  Si <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>n</mi></mrow></math>, entonces la base <math display=\"inline\"><mi>β</mi></math> del apartado (i) y <math display=\"inline\"><mi>T</mi></math> son la misma."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dimensión de los subespacios"
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
       "html": "Sean <math display=\"inline\"><mi>V</mi></math> un espacio vectorial de dimensión finita <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math> y <math display=\"inline\"><mrow><mi>W</mi><mo>≤</mo><mi>V</mi></mrow></math>. Entonces <math display=\"inline\"><mi>W</mi></math> también es de dimensión finita y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi></mrow></math>. Además:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo>⇔</mo><mi>W</mi><mo>=</mo><mi>V</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bada </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><msub><mi>β</mi><mi>W</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>  una base de <math display=\"inline\"><mi>W</mi></math>. Entonces, como <math display=\"inline\"><mrow><mi>W</mi><mo>≤</mo><mi>V</mi></mrow></math>, son vectores de <math display=\"inline\"><mi>V</mi></math> y además un sistema libre en <math display=\"inline\"><mi>V</mi></math>. Por tanto, usando el teorema, existe una base <math display=\"inline\"><mi>β</mi></math>  de <math display=\"inline\"><mi>V</mi></math> tal que se cumple <math display=\"inline\"><mrow><msub><mi>β</mi><mi>W</mi></msub><mo>⊆</mo><mi>β</mi></mrow></math>. Ahora, por la definición de dimensión, esto demuestra que <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi></mrow></math>. Además <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi></mrow></math> si y solo si <math display=\"inline\"><mrow><msub><mi>β</mi><mi>W</mi></msub><mo>=</mo><mi>β</mi></mrow></math>, es decir, si se cumple <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mi>V</mi></mrow></math>."
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
       "html": "Sean <math display=\"inline\"><mi>V</mi></math>  un espacio vectorial sobre <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math> y <math display=\"inline\"><mrow><mi>W</mi><mo>≤</mo><mi>V</mi></mrow></math>. Diremos que otro subespacio <math display=\"inline\"><mi>U</mi></math>  es un <strong>complemento</strong> de <math display=\"inline\"><mi>W</mi></math> si se cumple <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>W</mi><mo>⊕</mo><mi>U</mi></mrow></math>. Es decir, la suma de <math display=\"inline\"><mi>W</mi></math> y <math display=\"inline\"><mi>U</mi></math> es directa y además <math display=\"inline\"><mrow><mi>W</mi><mo>+</mo><mi>U</mi><mo>=</mo><mi>V</mi></mrow></math>."
      }
     ]
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
       "html": "Sean <math display=\"inline\"><mi>V</mi></math> un espacio vectorial de dimensión finita sobre <math display=\"inline\"><mtext mathvariant=\"normal\">IK</mtext></math> y <math display=\"inline\"><mrow><mi>W</mi><mo>≤</mo><mi>V</mi></mrow></math>. Entonces el subespacio vectorial <math display=\"inline\"><mi>W</mi></math> tiene un complemento."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Como <math display=\"inline\"><mi>V</mi></math> es de dimensión finita, por el teorema anterior <math display=\"inline\"><mi>W</mi></math> también es de dimensión finita y además se cumple <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi></mrow></math>. Sea <math display=\"inline\"><mrow><msub><mi>β</mi><mi>W</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>  una base de <math display=\"inline\"><mi>W</mi></math>; por ser un sistema libre en <math display=\"inline\"><mi>V</mi></math>, puede extenderse hasta una base de <math display=\"inline\"><mi>V</mi></math>, obteniendo <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>s</mi></msub><mo>,</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>  base de <math display=\"inline\"><mi>V</mi></math>. Definimos el subespacio <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y demostraremos que es un complemento de <math display=\"inline\"><mi>W</mi></math>. Sean <math display=\"inline\"><mrow><msub><mi>β</mi><mi>W</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>β</mi><mi>U</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>  bases de <math display=\"inline\"><mi>W</mi></math> y de <math display=\"inline\"><mi>U</mi></math> respectivamente. Entonces, como <math display=\"inline\"><mrow><msub><mi>β</mi><mi>W</mi></msub><mo>∪</mo><msub><mi>β</mi><mi>U</mi></msub></mrow></math> es un sistema libre, la suma de <math display=\"inline\"><mi>W</mi></math> y <math display=\"inline\"><mi>U</mi></math> es directa y, además, como la unión es una base de <math display=\"inline\"><mi>V</mi></math>, el teorema queda demostrado."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>  un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>. Obtendremos un complemento del subespacio <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> siguiendo la demostración del teorema anterior."
      },
      {
       "mota": "testua",
       "html": "Primero hay que obtener una base de <math display=\"inline\"><mi>W</mi></math>. Es claro que <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y, como además es un sistema libre, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>  es una base de <math display=\"inline\"><mi>W</mi></math>."
      },
      {
       "mota": "testua",
       "html": "Después la extendemos hasta una base de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>. Por ejemplo, añadiendo el vector <math display=\"inline\"><mrow><msub><mi>e</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> obtendríamos <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>. Por tanto <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>  es un complemento de <math display=\"inline\"><mi>W</mi></math>."
      },
      {
       "mota": "testua",
       "html": "Obsérvese que <math display=\"inline\"><mrow><msup><mi>U</mi><mo>′</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> también es un complemento, por lo que el complemento no es único."
      }
     ]
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
       "html": "Sean <math display=\"inline\"><mi>U</mi></math> y <math display=\"inline\"><mi>W</mi></math>  subespacios vectoriales de dimensión finita de <math display=\"inline\"><mi>V</mi></math>. Entonces <math display=\"inline\"><mrow><mi>U</mi><mo>+</mo><mi>W</mi></mrow></math> también es de dimensión finita y además:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>U</mi><mo>+</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>U</mi><mo>∩</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tenemos las definiciones siguientes <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>=</mo><mi>r</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi><mo>=</mo><mi>s</mi></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>U</mi><mo>∩</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>t</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><msub><mi>β</mi><mrow><mi>U</mi><mo>∩</mo><mi>W</mi></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>t</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>  una base del subespacio <math display=\"inline\"><mrow><mi>W</mi><mo>∩</mo><mi>U</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "1.- Como <math display=\"inline\"><mrow><mi>U</mi><mo>∩</mo><mi>W</mi><mo>≤</mo><mi>W</mi></mrow></math>, puede extenderse hasta una base de <math display=\"inline\"><mi>W</mi></math>: <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>t</mi></msub><mo>,</mo><msub><mi>w</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "2.- Como <math display=\"inline\"><mrow><mi>U</mi><mo>∩</mo><mi>W</mi><mo>≤</mo><mi>U</mi></mrow></math>, puede extenderse hasta una base de <math display=\"inline\"><mi>U</mi></math>: <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>t</mi></msub><mo>,</mo><msub><mi>u</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>u</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "El teorema queda demostrado si demostramos que <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>t</mi></msub><mo>,</mo><msub><mi>w</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>r</mi></msub><mo>,</mo><msub><mi>u</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>u</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> es una base de <math display=\"inline\"><mrow><mi>U</mi><mo>+</mo><mi>W</mi></mrow></math>. Para ello, por la definición, tendremos que demostrar que es un sistema generador y un sistema libre de <math display=\"inline\"><mrow><mi>W</mi><mo>+</mo><mi>U</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(i)  Demostración de que es un sistema generador de <math display=\"inline\"><mrow><mi>U</mi><mo>+</mo><mi>W</mi></mrow></math>. Cualquier vector de la suma puede expresarse como <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>w</mi><mo>+</mo><mi>u</mi></mrow></math>. Además, como <math display=\"inline\"><mrow><mi>w</mi><mo>∈</mo><mi>W</mi></mrow></math>, <math display=\"inline\"><mi>w</mi></math>  puede expresarse como combinación lineal de los vectores <math display=\"inline\"><mrow><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>t</mi></msub><mo>,</mo><msub><mi>w</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>r</mi></msub></mrow></math> y, análogamente, como <math display=\"inline\"><mrow><mi>u</mi><mo>∈</mo><mi>U</mi></mrow></math>, <math display=\"inline\"><mi>u</mi></math>  puede expresarse como combinación lineal de los vectores <math display=\"inline\"><mrow><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>t</mi></msub><mo>,</mo><msub><mi>u</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>u</mi><mi>s</mi></msub></mrow></math>. Por tanto, <math display=\"inline\"><mi>v</mi></math>  puede expresarse como combinación lineal de los vectores <math display=\"inline\"><mrow><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>t</mi></msub><mo>,</mo><msub><mi>w</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>r</mi></msub><mo>,</mo><msub><mi>u</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>u</mi><mi>s</mi></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(ii) Demostración de que es un sistema libre: <math display=\"block\"><mrow><msub><mi>k</mi><mn>1</mn></msub><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>t</mi></msub><msub><mi>w</mi><mi>t</mi></msub><mo>+</mo><msub><mi>k</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>w</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>r</mi></msub><msub><mi>w</mi><mi>r</mi></msub><mo>+</mo><msub><mi>λ</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>u</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>λ</mi><mi>s</mi></msub><msub><mi>u</mi><mi>s</mi></msub><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub><mo>⇒</mo></mrow></math> <math display=\"block\"><mrow><mo>⇒</mo><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><mi>…</mi><mo>=</mo><msub><mi>λ</mi><mi>s</mi></msub><mo>=</mo><msub><mn>0</mn><mrow><mtext mathvariant=\"normal\">IK </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Definimos <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><msub><mi>k</mi><mn>1</mn></msub><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>t</mi></msub><msub><mi>w</mi><mi>t</mi></msub><mo>+</mo><msub><mi>k</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>w</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>r</mi></msub><msub><mi>w</mi><mi>r</mi></msub></mrow></math> y <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mi>λ</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>u</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>λ</mi><mi>s</mi></msub><msub><mi>u</mi><mi>s</mi></msub></mrow></math>. Entonces, de la igualdad anterior <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>−</mi><mi>u</mi><mo>∈</mo><mi>W</mi><mo>∩</mo><mi>U</mi></mrow></math> y, como <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>t</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>  es una base del subespacio <math display=\"inline\"><mrow><mi>W</mi><mo>∩</mo><mi>U</mi></mrow></math>, puede expresarse como <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><msub><mi>k</mi><msup><mn>1</mn><mo>′</mo></msup></msub><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><msup><mi>t</mi><mo>′</mo></msup></msub><msub><mi>w</mi><mi>t</mi></msub></mrow></math>; pero entonces tendremos <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>t</mi></msub><msub><mi>w</mi><mi>t</mi></msub><mo>+</mo><msub><mi>k</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>w</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>r</mi></msub><msub><mi>w</mi><mi>r</mi></msub><mo>=</mo><msub><mi>k</mi><msup><mn>1</mn><mo>′</mo></msup></msub><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><msup><mi>t</mi><mo>′</mo></msup></msub><msub><mi>w</mi><mi>t</mi></msub></mrow></math> y, en consecuencia, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><mo>−</mo><msub><mi>k</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>t</mi></msub><mo>−</mo><msub><mi>k</mi><msup><mi>t</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>w</mi><mi>t</mi></msub><mo>+</mo><msub><mi>k</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>w</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>r</mi></msub><msub><mi>w</mi><mi>r</mi></msub><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub></mrow></math> y, como <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>t</mi></msub><mo>,</mo><msub><mi>w</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>  es una base de <math display=\"inline\"><mi>W</mi></math>, necesariamente <math display=\"inline\"><mrow><msub><mi>k</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mi>…</mi><mo>=</mo><msub><mi>k</mi><mi>r</mi></msub><mo>=</mo><msub><mn>0</mn><mtext mathvariant=\"normal\">IK</mtext></msub></mrow></math>. Sustituyendo en la expresión inicial tenemos <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>t</mi></msub><msub><mi>w</mi><mi>t</mi></msub><mo>+</mo><mi>+</mi><msub><mi>λ</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>u</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>λ</mi><mi>s</mi></msub><msub><mi>u</mi><mi>s</mi></msub><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub></mrow></math> y, como <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>t</mi></msub><mo>,</mo><msub><mi>u</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>u</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>  es una base de <math display=\"inline\"><mi>U</mi></math>, todos los coeficientes de la combinación deben ser cero."
      }
     ]
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
       "html": "Sean <math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>U</mi><mi>n</mi></msub></mrow></math>  subespacios vectoriales de dimensión finita de <math display=\"inline\"><mi>V</mi></math> y <math display=\"inline\"><mrow><msub><mi>β</mi><msub><mi>U</mi><mn>1</mn></msub></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>β</mi><msub><mi>U</mi><mi>n</mi></msub></msub></mrow></math>  bases de <math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>U</mi><mi>n</mi></msub></mrow></math> respectivamente. Entonces:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>⊕</mo><mi>⋯</mi><mo>⊕</mo><msub><mi>U</mi><mi>n</mi></msub><mo>⇔</mo><msub><mi>β</mi><msub><mi>U</mi><mn>1</mn></msub></msub><mo>∪</mo><mi>⋯</mi><mo>∪</mo><msub><mi>β</mi><msub><mi>U</mi><mi>n</mi></msub></msub><mo>,</mo><msub><mi>U</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>U</mi><mi>n</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> subespacioren base bada </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usando inducción sobre <math display=\"inline\"><mi>n</mi></math>, lo demostraremos solo en el caso <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mo>⇒</mo></math>. Supongamos que se cumple <math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>⊕</mo><msub><mi>U</mi><mn>2</mn></msub></mrow></math>. Sabemos que <math display=\"inline\"><mrow><msub><mi>β</mi><msub><mi>U</mi><mn>1</mn></msub></msub><mo>∪</mo><msub><mi>β</mi><msub><mi>U</mi><mn>2</mn></msub></msub></mrow></math>  es siempre un sistema generador del subespacio <math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>+</mo><msub><mi>U</mi><mn>2</mn></msub></mrow></math>. Ahora demostraremos que es libre; si <math display=\"inline\"><mrow><msub><mi>β</mi><msub><mi>U</mi><mn>1</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>β</mi><msub><mi>U</mi><mn>2</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>t</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, entonces:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>k</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>s</mi></msub><msub><mi>v</mi><mi>s</mi></msub><mo>+</mo><msub><mi>k</mi><msup><mn>1</mn><mo>′</mo></msup></msub><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><msup><mi>t</mi><mo>′</mo></msup></msub><msub><mi>w</mi><mi>t</mi></msub><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub><mo>⇒</mo><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><mi>…</mi><mo>=</mo><msub><mi>k</mi><msup><mi>t</mi><mo>′</mo></msup></msub><mo>=</mo><msub><mn>0</mn><mrow><mtext mathvariant=\"normal\">IK </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Sean <math display=\"inline\"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><msub><mi>k</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>s</mi></msub><msub><mi>v</mi><mi>s</mi></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>u</mi><mn>2</mn></msub><mo>=</mo><msub><mi>k</mi><msup><mn>1</mn><mo>′</mo></msup></msub><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><msup><mi>t</mi><mo>′</mo></msup></msub><msub><mi>w</mi><mi>t</mi></msub></mrow></math>. Entonces se cumple <math display=\"inline\"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>u</mi><mn>2</mn></msub><mo>∈</mo><msub><mi>U</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>U</mi><mn>2</mn></msub></mrow></math>. Pero, como la suma es directa, <math display=\"inline\"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>u</mi><mn>2</mn></msub><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub></mrow></math> y, en consecuencia, como <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>t</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> son sistemas libres, la implicación queda demostrada."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mo>←</mo></math>. Supongamos que <math display=\"inline\"><mrow><msub><mi>β</mi><msub><mi>U</mi><mn>1</mn></msub></msub><mo>∪</mo><msub><mi>β</mi><msub><mi>U</mi><mn>2</mn></msub></msub></mrow></math>  es una base de <math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>+</mo><msub><mi>U</mi><mn>2</mn></msub></mrow></math>. Demostremos que se cumple <math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>U</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mn>0</mn><mi>V</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Para ello, sea <math display=\"inline\"><mrow><mi>v</mi><mo>∈</mo><msub><mi>U</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>U</mi><mn>2</mn></msub></mrow></math>; por tanto, si <math display=\"inline\"><mrow><msub><mi>β</mi><msub><mi>U</mi><mn>1</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>β</mi><msub><mi>U</mi><mn>2</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>w</mi><mi>t</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msub><mi>k</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>s</mi></msub><msub><mi>v</mi><mi>s</mi></msub><mo>=</mo><msub><mi>k</mi><msup><mn>1</mn><mo>′</mo></msup></msub><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><msup><mi>t</mi><mo>′</mo></msup></msub><msub><mi>w</mi><mi>t</mi></msub></mrow></math>. Entonces <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>s</mi></msub><msub><mi>v</mi><mi>s</mi></msub><mo>−</mo><msub><mi>k</mi><msup><mn>1</mn><mo>′</mo></msup></msub><msub><mi>w</mi><mn>1</mn></msub><mo>−</mo><mi>…</mi><mo>−</mo><msub><mi>k</mi><msup><mi>t</mi><mo>′</mo></msup></msub><msub><mi>w</mi><mi>t</mi></msub><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub></mrow></math>. Pero, como la unión de las bases es un sistema libre, necesariamente se cumplirá <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><mi>…</mi><mo>=</mo><msub><mi>k</mi><mi>s</mi></msub><mo>=</mo><msub><mn>0</mn><mtext mathvariant=\"normal\">IK</mtext></msub></mrow></math> y entonces <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msub><mi>k</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>k</mi><mi>s</mi></msub><msub><mi>v</mi><mi>s</mi></msub><mo>=</mo><msub><mn>0</mn><mi>V</mi></msub></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Coordenadas",
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
       "html": "Sea <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>.</mi><mi>.</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>  una base de <math display=\"inline\"><mi>V</mi></math>. Para un vector <math display=\"inline\"><mrow><mi>v</mi><mo>∈</mo><mi>V</mi></mrow></math> existen únicos escalares <math display=\"inline\"><mi>n</mi></math> tales que <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>λ</mi><mi>n</mi></msub></mrow></math> es <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>λ</mi><mi>n</mi></msub><msub><mi>v</mi><mi>n</mi></msub></mrow></math>. <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>λ</mi><mi>n</mi></msub></mrow></math>  se llaman <strong>coordenadas</strong> de <math display=\"inline\"><mi>v</mi></math> respecto de la base <math display=\"inline\"><mi>β</mi></math> y las denotaremos <math display=\"inline\"><mrow><msub><mi>M</mi><mi>β</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>  un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>."
      },
      {
       "mota": "testua",
       "html": "1.- Si <math display=\"inline\"><mrow><msub><mi>β</mi><mi>k</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>2</mn></msub><mo>,</mo><msub><mi>e</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es la base canónica, <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>β</mi><mi>k</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "2.- Respecto de la base <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>M</mi><mi>β</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi><mo>−</mo><mi>z</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "El mismo vector en dos bases: las coordenadas <strong>dependen de la base</strong>\n   — en la retícula canónica de la izquierda son <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2.5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; en la retícula\n   oblicua de la derecha (<math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>), <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. La matriz\n   de cambio de base las convierte de unas en otras.",
     "src": "../media/irudiak/64bace5c8ebf44c5.svg",
     "zabalera": 435
    },
    {
     "mota": "testua",
     "html": "Sean <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>  dos bases de <math display=\"inline\"><mi>V</mi></math>. Entonces, para un vector <math display=\"inline\"><mrow><mi>v</mi><mo>∈</mo><mi>V</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>M</mi><mi>β</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>M</mi><msup><mi>β</mi><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><msup><mn>1</mn><mo>′</mo></msup></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><msup><mi>n</mi><mo>′</mo></msup></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> son distintas. Vamos a obtener la relación entre estas dos matrices. Para ello expresaremos <math display=\"inline\"><mi>v</mi></math> como producto de dos matrices:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>λ</mi><mi>n</mi></msub><msub><mi>v</mi><mi>n</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mi>⋯</mi><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por otro lado, como <math display=\"inline\"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>∈</mo><mi>V</mi></mrow></math> y <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>  es una base de <math display=\"inline\"><mi>V</mi></math>, existirán únicos escalares <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>a</mi><mrow><mi>n</mi><mi>i</mi></mrow></msub></mrow></math> tales que <math display=\"inline\"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><msub><mi>v</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>a</mi><mrow><mi>n</mi><mi>i</mi></mrow></msub><msub><mi>v</mi><msup><mi>n</mi><mo>′</mo></msup></msub></mrow></math> cumple <math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi></mrow></math>. Como antes, podemos expresar <math display=\"inline\"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mi>⋯</mi><msub><mi>v</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>n</mi><mi>i</mi></mrow></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi></mrow></math> como producto de matrices. Sustituyendo estos productos en la igualdad anterior obtendremos lo siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mi>⋯</mi><msub><mi>v</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mn>1</mn><mi>n</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>n</mi><mn>1</mn></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>n</mi><mn>2</mn></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>n</mi><mi>n</mi></mrow></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Entonces, como la forma de expresarlo es única:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><msup><mn>1</mn><mo>′</mo></msup></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><msup><mi>n</mi><mo>′</mo></msup></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mn>1</mn><mi>n</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>n</mi><mn>1</mn></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>n</mi><mn>2</mn></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>n</mi><mi>n</mi></mrow></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "En las hipótesis anteriores, la matriz <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mn>1</mn><mi>n</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>n</mi><mn>1</mn></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>n</mi><mn>2</mn></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>n</mi><mi>n</mi></mrow></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> se llama <strong>matriz de cambio de base</strong> de la base <math display=\"inline\"><mi>β</mi></math> a la base <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math> y la denotaremos <math display=\"inline\"><msubsup><mi>M</mi><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></msubsup></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hemos demostrado el teorema siguiente:"
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
       "html": "Sean <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>  dos bases de <math display=\"inline\"><mi>V</mi></math>. Entonces:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>M</mi><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></msubsup><msub><mi>M</mi><mi>β</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>M</mi><msup><mi>β</mi><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplos",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>  un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>. Si tomamos las bases <math display=\"inline\"><mrow><msub><mi>β</mi><mi>k</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>2</mn></msub><mo>,</mo><msub><mi>e</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, entonces:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>M</mi><mi>β</mi><msub><mi>β</mi><mi>k</mi></msub></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msubsup><mi>M</mi><msub><mi>β</mi><mi>k</mi></msub><mi>β</mi></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Notas",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "1.- Sean <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> dos bases de <math display=\"inline\"><mi>V</mi></math>; entonces <math display=\"inline\"><mrow><msubsup><mi>M</mi><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></msubsup><msubsup><mi>M</mi><msup><mi>β</mi><mo>′</mo></msup><mi>β</mi></msubsup></mrow></math> es la matriz de cambio de la base <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math> a la base <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>, es decir, la matriz identidad. Del mismo modo, <math display=\"inline\"><mrow><msubsup><mi>M</mi><msup><mi>β</mi><mo>′</mo></msup><mi>β</mi></msubsup><msubsup><mi>M</mi><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></msubsup></mrow></math> es la matriz de cambio de la base <math display=\"inline\"><mi>β</mi></math> a la base <math display=\"inline\"><mi>β</mi></math>, es decir, la matriz identidad. Por tanto, la matriz <math display=\"inline\"><msubsup><mi>M</mi><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></msubsup></math> es invertible y su inversa es <math display=\"inline\"><msubsup><mi>M</mi><msup><mi>β</mi><mo>′</mo></msup><mi>β</mi></msubsup></math>."
      },
      {
       "mota": "testua",
       "html": "2. Sea <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> una base de <math display=\"inline\"><mi>V</mi></math>. Si <math display=\"inline\"><mrow><mi>v</mi><mo>∈</mo><mi>V</mi></mrow></math>, también se puede expresar como <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mi>⋯</mi><msub><mi>λ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>v</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>v</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, es decir, colocando las coordenadas por filas. Pero entonces la matriz de cambio de base también cambiaría, obteniéndose la traspuesta de la anterior."
      }
     ]
    }
   ]
  },
  {
   "id": "a17",
   "maila": 1,
   "izenburua": "Ejemplos de pares: base, ortogonal, ortonormal",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Los pares de dos vectores de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></math> pueden presentar situaciones distintas:"
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
       "html": "<strong>A.</strong> <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>: <strong>no es base</strong>, porque contiene el vector nulo (depende de cualquier conjunto)."
      },
      {
       "mota": "testua",
       "html": "<strong>B.</strong> <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>: <strong>no es base</strong>, porque no son independientes (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, colineales)."
      },
      {
       "mota": "testua",
       "html": "<strong>C.</strong> <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>: <strong>es base, pero no ortogonal</strong> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math>)."
      },
      {
       "mota": "testua",
       "html": "<strong>D.</strong> <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>: <strong>base ortogonal, pero no ortonormal</strong> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, pero <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>≠</mo><mn>1</mn></mrow></math>)."
      },
      {
       "mota": "testua",
       "html": "<strong>E.</strong> <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>: <strong>base ortogonal ortonormal</strong> (ambos ortogonales y de norma uno): base canónica."
      }
     ]
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Descomposición de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en cada base",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En la base <math display=\"inline\"><mi>C</mi></math> (<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En la base ortogonal <math display=\"inline\"><mi>D</mi></math> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>5</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En la base ortogonal ortonormal <math display=\"inline\"><mi>E</mi></math> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>5</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las tres descomposiciones (verificadas) son expresiones distintas del mismo vector según la base; en la base ortonormal las coordenadas coinciden directamente con las componentes cartesianas."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los cinco ejemplos (A-E) y las tres descomposiciones están todos verificados. El original incluye dibujos esquemáticos de cada par (vectores y paralelogramos); no se han reproducido aquí. La frase &quot;PORQUE EL VECTOR VAGO...&quot; queda incompleta en el original. La página 11 está en blanco en el cuaderno (última hoja)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p036_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a19",
   "maila": 1,
   "izenburua": "Ejercicio (examen): sistema generador, base y coordenadas",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. <strong>a)</strong> Demostrar que <math display=\"inline\"><mi>T</mi></math> es un <strong>sistema generador</strong> de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>. <strong>b)</strong> Extraer un <math display=\"inline\"><mrow><mi>S</mi><mo>⊂</mo><mi>T</mi></mrow></math> que sea <strong>base</strong> de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>. <strong>c)</strong> Calcular las coordenadas de los vectores <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> respecto de <math display=\"inline\"><mi>S</mi></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>a) Sistema generador.</strong> <math display=\"inline\"><mi>T</mi></math>Los vectores de <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>3</mn></mrow></math> son las filas de una matriz <math display=\"inline\"><mrow><mn>1</mn><mo>≤</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> errango </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≤</mo><mn>3</mn></mrow></math>, y si el rango es <math display=\"inline\"><mn>3</mn></math> entonces <math display=\"inline\"><mi>T</mi></math> es un sistema generador. Lehen hiru bektoreen <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> minorea, lehen errenkadatik garatuz: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn><mo>⋅</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>1</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn><mo>⋅</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn><mo>≠</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> Por tanto el rango es <math display=\"inline\"><mn>3</mn></math> y <strong><math display=\"inline\"><mi>T</mi></math> <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> es un sistema generador de</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> resolviendo los coeficientes; si todas existen, <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> generan "
      },
      {
       "mota": "testua",
       "html": "<strong>b) Base.</strong> <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>; como su determinante es <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math> (el del apartado a), <math display=\"inline\"><mi>S</mi></math> <strong><math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> es una base de</strong> "
      },
      {
       "mota": "testua",
       "html": "<strong>c) Koordenatuak.</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>λ</mi><mo>+</mo><mi>δ</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>λ</mi><mo>+</mo><mi>μ</mi><mo>+</mo><mi>δ</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>μ</mi><mo>−</mo><mi>δ</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> (2.)<math display=\"inline\"><mi>−</mi></math>(1.): <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn></mrow></math>. (3.): <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>δ</mi><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>δ</mi><mo>=</mo><mn>0</mn></mrow></math>. (1.): <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>. Egiaztapena: <math display=\"inline\"><mrow><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>0</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ✓."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>S</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>λ</mi><mo>+</mo><mi>δ</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>λ</mi><mo>+</mo><mi>μ</mi><mo>+</mo><mi>δ</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>μ</mi><mo>−</mo><mi>δ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> (2.)<math display=\"inline\"><mi>−</mi></math>(1.): <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math>. (3.): <math display=\"inline\"><mrow><mi>−</mi><mi>δ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>⇒</mo><mi>δ</mi><mo>=</mo><mn>1</mn></mrow></math>. (1.): <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>S</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "(koherentea: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mi>S</mi></math>-ren hirugarren bektorea da)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Es un ejercicio de examen (rótulo rojo «EXÁMENES»; «GRUPO» en verde; «ÁLGEBRA LANDETA», 2013/01/03). Todo verificado: el determinante <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> (Sarrus / cofactores), <math display=\"inline\"><mi>T</mi></math> sistema generador, <math display=\"inline\"><mi>S</mi></math> base, y los dos conjuntos de coordenadas (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). El método 2 solo está planteado en el original. Algunas dudas de lectura (rótulos <code>c)</code>/<code>4</code>, «CUBRIR/ORLAR MENOR COMPLEMENTARIO») no afectan al fondo. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta2_alg_p010.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "_historico/espazio-ontzia/diario landeta 2 ene 2013, IMG_2026_07_28_01_42_47S.jpg",
     "xehetasuna": "Cuaderno LANDETA2, páginas 16-17: suma e intersección de subespacios (Grassmann), endomorfismo de núcleo e imagen dados — transcripción v3 verificada",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a20",
   "maila": 1,
   "izenburua": "Suma e intersección de subespacios; endomorfismo de núcleo e imagen dados",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Continuación del problema <math display=\"inline\"><mi>U</mi></math>, <math display=\"inline\"><mrow><mi>W</mi><mo>⊂</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> de p014: <math display=\"inline\"><mrow><mi>U</mi><mo>+</mo><mi>W</mi></mrow></math> y <math display=\"inline\"><mrow><mi>U</mi><mo>∩</mo><mi>W</mi></mrow></math> (Grassmann), razonar que <math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>≠</mo><mi>U</mi><mo>⊕</mo><mi>W</mi></mrow></math>, y construir un endomorfismo con <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mi>U</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mi>W</mi></mrow></math>."
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><mi>U</mi><mo>+</mo><mi>W</mi></mrow></math> y <math display=\"inline\"><mrow><mi>U</mi><mo>∩</mo><mi>W</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>; el determinante de los cuatro generadores es <math display=\"inline\"><mn>0</mn></math> (dependientes). Tomando tres libres: <math display=\"block\"><mrow><mi>U</mi><mo>+</mo><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>U</mi><mo>+</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>.</mi></mrow></math> por la fórmula de Grassmann: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>U</mi><mo>∩</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>U</mi><mo>+</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>3</mn><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>U</mi><mo>∩</mo><mi>W</mi></mrow></math> cumple las cuatro ecuaciones (las de <math display=\"inline\"><mi>U</mi></math> y las de <math display=\"inline\"><mi>W</mi></math>): <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>. De ahí <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>−</mi><mi>y</mi><mo>=</mo><mn>2</mn><mi>t</mi></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>U</mi><mo>∩</mo><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>t</mi><mo>,</mo><mi>−</mi><mn>2</mn><mi>t</mi><mo>,</mo><mn>2</mn><mi>t</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>≠</mo><mi>U</mi><mo>⊕</mo><mi>W</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para que <math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>=</mo><mi>U</mi><mo>⊕</mo><mi>W</mi></mrow></math> harían falta <strong>dos</strong> condiciones: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>U</mi><mo>+</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn></mrow></math> y <math display=\"inline\"><mrow><mi>U</mi><mo>∩</mo><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. <strong>Ambas fallan:</strong> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>U</mi><mo>+</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo>≠</mo><mn>4</mn></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>U</mi><mo>∩</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math>. Por tanto, la suma no es directa."
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Endomorfismo <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mi>U</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mi>W</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Se forma una base de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math> a partir de la base de <math display=\"inline\"><mi>U</mi></math>: <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Se define: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> (núcleo), <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (generadores de la imagen)."
    },
    {
     "mota": "testua",
     "html": "Expresando <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>λ</mi><mo>+</mo><mi>δ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>2</mn><mi>μ</mi><mo>+</mo><mi>ε</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>μ</mi></mrow></math>; de ahí <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi></mrow></math>. Por tanto: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mi>t</mi><mo>−</mo><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Comprobación: <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>z</mi><mo>=</mo><mn>2</mn><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mi>U</mi></mrow></math> y <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>W</mi></mrow></math>. ✓"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo verificado: el determinante de los cuatro generadores <math display=\"inline\"><mn>0</mn></math> (dependientes, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>U</mi><mo>+</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>), Grassmann (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>U</mi><mo>∩</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>), <math display=\"inline\"><mrow><mi>U</mi><mo>∩</mo><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, las dos razones de que la suma no sea directa, y la construcción completa del endomorfismo (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>,</mo><mn>2</mn><mi>t</mi><mo>−</mo><mi>z</mi><mo>,</mo><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo>,</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mi>U</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mi>W</mi></mrow></math>). Algunas dudas de lectura (entradas del desarrollo del determinante, «x2» = dos razones) no afectan al fondo. Véase <code>koadernoa_landeta2_alg_p016.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a24",
   "maila": 1,
   "izenburua": "Nukleoa y irudia; ongi definitutako aplikazioa",
   "blokeak": []
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "(13) <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> (<math display=\"inline\"><mi>n</mi></math> es impar)",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mi>V</mi></math> un espacio vectorial de dimensión finita, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo>=</mo><mi>n</mi></mrow></math> <strong>impar</strong>, y <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math> una aplicación lineal. Demostrar que <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supongamos, por reducción al absurdo, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>. Entonces sus dimensiones son iguales: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>. Por el teorema del rango-nulidad: <math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>+</mo><mi>x</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>,</mo></mrow></math>, es decir, <math display=\"inline\"><mi>n</mi></math> es <strong>par</strong>. Pero habíamos supuesto que <math display=\"inline\"><mi>n</mi></math> es impar: contradicción. Por tanto <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y en particular <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "(14) <math display=\"inline\"><mi>f</mi></math> ongi definitua <math display=\"inline\"><mi>W</mi></math> azpiespazioan",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>W</mi><mo>→</mo><mi>W</mi></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>,</mo><mi>−</mi><mn>3</mn><mi>z</mi><mo>−</mo><mi>t</mi><mo>,</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. (i) Demostrar que que <math display=\"inline\"><mi>f</mi></math> está bien definida."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>Los generadores <math display=\"inline\"><mrow><mo>≠</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mn>3</mn><mo>≠</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mi>f</mi></math> está bien definida <math display=\"inline\"><mi>W</mi></math> de <math display=\"inline\"><mi>W</mi></math> si aplica (una única imagen por elemento). Las imágenes de los generadores: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mi>u</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>6</mn><mi>u</mi><mo>+</mo><mi>v</mi><mo>,</mo></mrow></math> ambas <math display=\"inline\"><mi>W</mi></math>. Por tanto <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>W</mi><mo>→</mo><mi>W</mi></mrow></math> está bien definida."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El original escribe en el margen rojo &quot;LA SUMA DE DOS NÚMEROS IGUALES NUNCA ES PAR&quot;; eso es <strong>incorrecto</strong> (<math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>x</mi><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math> es siempre par), y lo contradice la propia nota negra del autor &quot;PAR&quot; (bajo <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi></mrow></math>). El núcleo de la demostración es correcto. En el diagrama de la aplicación hay una &quot;X&quot; roja sobre la flecha con dos salidas desde <math display=\"inline\"><mi>x</mi></math>: una aplicación no puede asignar dos imágenes al mismo elemento. La curva central y la circunferencia <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> (marcadas &quot;MAL&quot;) cortan a una recta vertical más de una vez, por lo que no son gráficas de funciones de <math display=\"inline\"><mi>x</mi></math>. El símbolo rojo posterior a &quot;<math display=\"inline\"><mrow><mi>n</mi><mo>:</mo><mi>n</mi></mrow></math> impar&quot; y &quot;DEMOSTRADO&quot; (¿<math display=\"inline\"><mi>!</mi></math>?) son lecturas dudosas."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Edición crítica de la fuente manuscrita",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Lote:</strong> <code>A1_L05</code>. <strong>Imágenes:</strong> 20/20. El texto no se ha abreviado: la transcripción literal de cada imagen y sus dudas de lectura, las correcciones editoriales y la verificación matemática se mantienen separadas. El fichero original autónomo y la tabla de verificación se conservan como evidencia externa."
      }
     ]
    }
   ]
  },
  {
   "id": "a27",
   "maila": 1,
   "izenburua": "Álgebra lineal: edición crítica del cuaderno manuscrito (A1_L05)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Transcripción literal autónoma, según el protocolo <code>agente_cuadernos_literal_v2.md</code>, rol 2. Se conserva el orden del inventario. Las expresiones entre corchetes son marcas de transcripción; no completan el manuscrito en silencio. Las descripciones de los dibujos recogen sus elementos visibles y rótulos, sin redibujarlos editorialmente."
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "0021 - IMG_2026_07_28_02_15_08S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Origen"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_15_08S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>teoria_manuscrita</code>.",
      "<strong>Tema validado:</strong> <code>endomorfismos_ortogonales_unitarios_y_matriz_de_Gram</code>.",
      "<strong>Continuidad:</strong> inicio del bloque B05; páginas 40–41 del manuscrito."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal, maquetada"
    },
    {
     "mota": "testua",
     "html": "<strong>Página izquierda (40).</strong> Encabezado: &quot;2013/2/13 — ÁLGEBRA — NEWTON&quot;."
    },
    {
     "mota": "testua",
     "html": "Base ortonormalizada (ejemplo del encabezado): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mi>i</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>e</mi><mi>x</mi></msub><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>1</mn><mo>−</mo><mi>e</mi></mrow><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>1</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(línea horizontal discontinua)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>E</mi></math>, espacio vectorial euclídeo sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>E</mi><mo>=</mo><mi>n</mi></mrow></math>, y <math display=\"inline\"><mrow><mi>f</mi><mo>∈</mo><msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Endomorfismo</mtext></mrow><mi mathvariant=\"double-struck\">ℝ</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>e</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> en la base <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>G</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo>∃</mo><msup><mi>f</mi><mo>*</mo></msup><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> non </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∈</mo><mi>E</mi><mo>:</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><msup><mi>f</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi>f</mi><mo>*</mo></msup></math> = endomorfismo <strong>adjunto</strong> de <math display=\"inline\"><mi>f</mi></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>C</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>A</mi><mi>t</mi></msup><mi>G</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mi>…</mi><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sea <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>f</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; se busca: <math display=\"inline\"><mrow><msup><mi>f</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><mi>B</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mi>…</mi><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup></mrow></math> <math display=\"block\"><mrow><mo>⇒</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><msup><mi>f</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>G</mi><mi>B</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mi>…</mi><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><msup><mi>f</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi></mrow></math> <math display=\"block\"><mrow><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.222em\"></mspace><msup><mi>A</mi><mi>t</mi></msup><mi>G</mi><mspace width=\"0.222em\"></mspace><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mi>…</mi><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.222em\"></mspace><mi>G</mi><mi>B</mi><mspace width=\"0.222em\"></mspace><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mi>…</mi><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(en rojo: <math display=\"inline\"><mrow><msup><mi>A</mi><mi>t</mi></msup><mi>G</mi></mrow></math> y <math display=\"inline\"><mrow><mi>G</mi><mi>B</mi></mrow></math> están en recuadros, y unas flechas unen los dos recuadros)</em>"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\"><math display=\"inline\"><mrow><msup><mi>A</mi><mi>t</mi></msup><mi>G</mi><mo>=</mo><mi>G</mi><mi>B</mi></mrow></math></em>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mi>G</mi></math> está ligado a un producto escalar <em>(lectura dudosa: definido)</em> <math display=\"block\"><mrow><mo>⇒</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hein </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>G</mi><mo>=</mo><mi>n</mi><mo>⇒</mo><mo>∃</mo><msup><mi>G</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">(recuadro rojo) <math display=\"inline\"><mrow><msup><mi>G</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mi>A</mi><mi>t</mi></msup><mi>G</mi><mo>=</mo><mi>B</mi></mrow></math></em>"
    },
    {
     "mota": "testua",
     "html": "<strong>Página derecha (41).</strong>"
    },
    {
     "mota": "testua",
     "html": "Tomando una base ortonormal <math display=\"inline\"><msup><mi>B</mi><mo>′</mo></msup></math>: <math display=\"inline\"><mrow><msup><mi>G</mi><mo>′</mo></msup><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub></mrow></math>; <math display=\"block\"><mrow><msub><mi>M</mi><msup><mi>B</mi><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>A</mi><mo>′</mo></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>M</mi><msup><mi>B</mi><mo>′</mo></msup></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>f</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>B</mi><mo>′</mo></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mo>′</mo></msup><msup><mi></mi><mi>t</mi></msup><mo>=</mo><msup><mi>B</mi><mo>′</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(en el margen superior derecho, con una flecha:)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><msup><mi>A</mi><mo>′</mo></msup><msup><mi></mi><mi>t</mi></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Endomorfismos especiales <em>(en rojo, lectura dudosa: mirar la demostración)</em>:"
    },
    {
     "mota": "testua",
     "html": "I) <strong>autoadjuntos</strong> (simétricos) <math display=\"inline\"><mo>⇒</mo></math> si <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><msup><mi>f</mi><mo>*</mo></msup></mrow></math> <br>II) <strong>isometrías</strong> (ortogonales) <math display=\"inline\"><mo>⇒</mo></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>E</mi></mrow></math> \\"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">lo mismo; normas</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En una base ortonormal, <math display=\"inline\"><mrow><mi>A</mi><mo>∈</mo><msub><mi>M</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>I</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>A</mi><mi>t</mi></msup><msub><mi>I</mi><mi>n</mi></msub><mi>A</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>I</mi><mo>=</mo><msup><mi>A</mi><mi>t</mi></msup><mi>A</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>E</mi><mo>=</mo><mi>n</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>e</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> ortonormal; <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>I</mi></mrow></math>; <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> autoadjuntua da </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇔</mo><mi>f</mi><mo>=</mo><msup><mi>f</mi><mo>*</mo></msup><mo>⇔</mo><mi>A</mi><mo>=</mo><msup><mi>A</mi><mi>t</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Matriz simétrica de números reales:"
    },
    {
     "mota": "testua",
     "html": "1) Todas las raíces del polinomio característico de <math display=\"inline\"><mi>f</mi></math> son números reales; es decir, son autovalores de <math display=\"inline\"><mi>f</mi></math>. <br>2) Dimensión de los subespacios propios <em>(continúa)</em>: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mi>i</mi></mrow></math>; valor propio de <math display=\"inline\"><mi>f</mi></math>."
    },
    {
     "mota": "testua",
     "html": "<em>(en el margen: siempre <math display=\"inline\"><mrow><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≤</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> al</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, lectura dudosa)</em>"
    },
    {
     "mota": "testua",
     "html": "<br>3) <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⊆</mo><mi>E</mi><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. <br>4) Si <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>i</mi></msub><mo>≠</mo><msub><mi>λ</mi><mi>j</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><msub><mi>v</mi><mi>i</mi></msub><mo>∈</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><msub><mi>w</mi><mi>j</mi></msub><mo>∈</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>v</mi><mi>i</mi></msub><mo>,</mo><msub><mi>w</mi><mi>j</mi></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "El ejemplo de la “base ortonormalizada” del encabezado está parcialmente desenfocado.",
      "En la propiedad 2), la notación marginal sobre las multiplicidades no se distingue con seguridad.",
      "La línea 3) parece usar complementos de subespacios, pero los signos exactos son dudosos."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "En la deducción matricial, la conclusión reconstruible es <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><msup><mi>G</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mi>A</mi><mi>t</mi></msup><mi>G</mi></mrow></math>; se conserva tal como aparece en la transcripción.",
      "En base ortonormal, la nota <math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><msup><mi>A</mi><mo>′</mo></msup><msup><mi></mi><mi>t</mi></msup></mrow></math> corresponde solo al caso autoadjunto; el manuscrito la sitúa antes del epígrafe y puede funcionar como adelanto."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación matemática"
    },
    {
     "mota": "testua",
     "html": "La identidad de adjunción es correcta: de la igualdad <math display=\"inline\"><mrow><msup><mi>A</mi><mi>t</mi></msup><mi>G</mi><mo>=</mo><mi>G</mi><mi>B</mi></mrow></math> y de la no degeneración de <math display=\"inline\"><mi>G</mi></math> se deduce <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><msup><mi>G</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mi>A</mi><mi>t</mi></msup><mi>G</mi></mrow></math>. Para una isometría, en base ortonormal se obtiene <math display=\"inline\"><mrow><msup><mi>A</mi><mi>t</mi></msup><mi>A</mi><mo>=</mo><mi>I</mi></mrow></math>. La ortogonalidad de los autoespacios correspondientes a autovalores distintos es válida para endomorfismos autoadjuntos."
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "0022 - IMG_2026_07_28_02_15_12S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Origen"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_15_12S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>teoria_y_ejercicio_manuscrito</code>.",
      "<strong>Tema validado:</strong> <code>isometrias_lineales_autovalores_y_ortogonalidad</code>.",
      "<strong>Continuidad:</strong> continuación de 0021; páginas 42–43 del manuscrito."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal, maquetada"
    },
    {
     "mota": "testua",
     "html": "<strong>Página izquierda (42).</strong> Encabezado: &quot;2013/2/13 — ÁLGEBRA — NEWTON&quot;."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">TEOREMA.</em>"
    },
    {
     "mota": "testua",
     "html": "Todo endomorfismo autoadjunto es diagonalizable y, además, se puede obtener una base ortonormal formada por vectores propios."
    },
    {
     "mota": "testua",
     "html": "Ejemplo <em>(en rojo: eso ya me dice que existe una base ortonormal)</em>: <math display=\"inline\"><mrow><mi>f</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>2</mn></msub><mo>,</mo><msub><mi>e</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> base ortonormal, como <math display=\"block\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> es ortonormal y <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msup><mi>A</mi><mi>t</mi></msup></mrow></math> <math display=\"inline\"><mo>→</mo></math> <math display=\"inline\"><mi>f</mi></math> es un endomorfismo autoadjunto. Es diagonalizable y tiene alguna base ortonormal formada por vectores propios."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(operación: <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>←</mo><msub><mi>C</mi><mn>2</mn></msub><mo>−</mo><msub><mi>C</mi><mn>3</mn></msub></mrow></math>)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi><mo>−</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(operación: <math display=\"inline\"><mrow><msub><mi>F</mi><mn>3</mn></msub><mo>←</mo><msub><mi>F</mi><mn>3</mn></msub><mo>+</mo><msub><mi>F</mi><mn>2</mn></msub></mrow></math>)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi><mo>−</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Página derecha (43).</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>A</mi><mi>x</mi><mo>=</mo><mi>−</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><mi>−</mi><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Base: <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>A</mi><mi>x</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(ecuaciones de restricción al lado:)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>3</mn><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mn>3</mn><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>−</mo><mn>3</mn><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>3</mn><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>a</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>a</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math> Base: <math display=\"inline\"><mrow><msub><mi>v</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>M</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>D</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msub><mi>v</mi><mn>1</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msub><mi>v</mi><mn>2</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><msub><mi>v</mi><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En busca de una base ortogonal formada por vectores propios: obligo a que <math display=\"block\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mn>2</mn></msub><mo>⋅</mo><msub><mi>v</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi>v</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"block\"><mrow><msub><mi>w</mi><mn>1</mn></msub><mo>=</mo><msub><mi>v</mi><mn>1</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>w</mi><mn>2</mn></msub><mo>=</mo><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><mi>k</mi><msub><mi>v</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math> sea <math display=\"inline\"><mrow><msub><mi>w</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi>w</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mn>0</mn><mo>=</mo><msub><mi>v</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>k</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Algunos signos de las operaciones intermedias del determinante están sobremarcados y no son seguros; la factorización final, en cambio, es legible.",
      "El manuscrito alterna <math display=\"inline\"><msub><mi>v</mi><mi>i</mi></msub></math> y <math display=\"inline\"><msub><mi>w</mi><mi>i</mi></msub></math> durante la ortogonalización."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La base inicial de <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no es ortogonal; el manuscrito comienza Gram–Schmidt al final de la página 43.",
      "El enunciado del teorema se entiende como la existencia de una base ortonormal completa formada por autovectores."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación matemática"
    },
    {
     "mota": "testua",
     "html": "La matriz tiene el autovalor <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> (multiplicidad 2) y el autovalor <math display=\"inline\"><mn>2</mn></math> (multiplicidad 1). Los autoespacios escritos son correctos. Tomando <math display=\"inline\"><mrow><msub><mi>w</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>w</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> se obtiene la ortogonalidad; <math display=\"inline\"><mrow><msub><mi>v</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ya es ortogonal a todo <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    }
   ]
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "0023 - IMG_2026_07_28_02_15_18S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Origen"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_15_18S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>teoria_y_ejercicio_manuscrito</code>.",
      "<strong>Tema validado:</strong> <code>operadores_ortogonales_y_descomposiciones_en_subespacios</code>.",
      "<strong>Continuidad:</strong> continuación de 0022; páginas 44–45 del manuscrito."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal, maquetada"
    },
    {
     "mota": "testua",
     "html": "<strong>Página izquierda (44).</strong> Encabezado: &quot;2013/2/13 — ÁLGEBRA — NEWTON&quot;."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>B</mi><msup><mn>2</mn><mo>′</mo></msup></msub></math>, base ortogonal de vectores propios: <math display=\"block\"><mrow><msub><mi>B</mi><msup><mn>2</mn><mo>′</mo></msup></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>w</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>w</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>M</mi><msub><mi>B</mi><msup><mn>2</mn><mo>′</mo></msup></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>D</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Base ortonormal de vectores propios, <math display=\"inline\"><mrow><msub><mi>B</mi><msup><mn>2</mn><mo>″</mo></msup></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>: <math display=\"block\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mfrac><msub><mi>w</mi><mn>1</mn></msub><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mi>w</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow><msqrt><mn>2</mn></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><mfrac><msub><mi>w</mi><mn>2</mn></msub><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><msqrt><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mn>3</mn></msub><mo>=</mo><mfrac><msub><mi>w</mi><mn>3</mn></msub><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mi>w</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn></mrow><msqrt><mn>3</mn></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(dibujo 1; sombreado azul claro y trazos interiores negros: <math display=\"inline\"><msub><mi>w</mi><mn>1</mn></msub></math> en el punto\nsuperior y <math display=\"inline\"><msub><mi>w</mi><mn>2</mn></msub></math> en el interior; dos segmentos negros unen <math display=\"inline\"><msub><mi>w</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>w</mi><mn>2</mn></msub></math> con el vértice\ninterior; un pequeño cuadrado negro marca el ángulo recto.)</em>"
    },
    {
     "mota": "testua",
     "html": "<em>(dibujo 2; tres vectores de origen común, eje negro vertical:\n<math display=\"inline\"><msub><mi>v</mi><mn>3</mn></msub></math> apunta hacia arriba a la izquierda; <math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math> hacia arriba a la derecha; <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> hacia la derecha,\nsobre el eje azul claro; hay una marca de ángulo recto junto al origen.)</em>"
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><msqrt><mn>2</mn></msqrt><mrow><mn>2</mn><msqrt><mn>3</mn></msqrt></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><msqrt><mn>3</mn></msqrt></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msqrt><mn>2</mn></msqrt><msqrt><mn>3</mn></msqrt></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><msqrt><mn>3</mn></msqrt></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><msqrt><mn>2</mn></msqrt><mrow><mn>2</mn><msqrt><mn>3</mn></msqrt></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><msqrt><mn>3</mn></msqrt></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>P</mi><mi>t</mi></msup></mrow></math>, por ser ortonormal. <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mi>…</mi><msub><mi>x</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo>=</mo><mi>P</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>M</mi><msub><mi>B</mi><msup><mn>2</mn><mo>″</mo></msup></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>I</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Página derecha (45).</strong> Encabezado: &quot;ÁLGEBRA — 2013/2/14&quot;."
    },
    {
     "mota": "testua",
     "html": "<em>(en azul: &lt;1.97)</em>"
    },
    {
     "mota": "testua",
     "html": "Los espacios euclídeos isométricos se identifican. <math display=\"block\"><mrow><msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Id</mtext></mrow><mi>V</mi></msub><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>↦</mo><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Solo tenemos la longitud, y se conserva (el ángulo con los ángulos). Producto escalar (ángulo). Conserva el producto <math display=\"inline\"><mo>→</mo></math> es una isometría."
    },
    {
     "mota": "testua",
     "html": "4. <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↦</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></msub><mo>=</mo><mi>x</mi><mi>u</mi><mo>+</mo><mi>y</mi><mi>v</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>u</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>v</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>u</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>v</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>u</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>u</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La composición de dos isometrías <math display=\"inline\"><mo>→</mo></math> <em>(en azul:)</em> ES UNA ISOMETRÍA."
    },
    {
     "mota": "testua",
     "html": "5. <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msub><mi>V</mi><mn>1</mn></msub><mo>→</mo><msub><mi>V</mi><mn>2</mn></msub></mrow></math> isometría, es decir, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><mi>y</mi><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msub></mrow></math>; <math display=\"inline\"><mrow><mi>g</mi><mo>:</mo><msub><mi>V</mi><mn>2</mn></msub><mo>→</mo><msub><mi>V</mi><mn>3</mn></msub></mrow></math> isometría."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La segunda componente de la aplicación <math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> es legible; la tercera parece <math display=\"inline\"><mrow><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mspace width=\"0.222em\"></mspace><mi>y</mi></mrow></math>, pero la reconstrucción queda marcada como no segura.",
      "La frase entre “longitud” y “producto escalar” es muy débil, y solo se han conservado las palabras distintivas."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La matriz normalizada <math display=\"inline\"><mi>P</mi></math> se ha espaciado tipográficamente; el contenido no se ha alterado.",
      "La comprobación de la aplicación <math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> queda interrumpida en el manuscrito, y no se completa dentro de la transcripción."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación matemática"
    },
    {
     "mota": "testua",
     "html": "La normalización de los tres autovectores es correcta. La composición de isometrías es una isometría. Leyendo la tercera componente como <math display=\"inline\"><mrow><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mspace width=\"0.222em\"></mspace><mi>y</mi></mrow></math>, la aplicación escrita no conserva en general <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>; por eso esa lectura o algún coeficiente podría ser erróneo."
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "0024 - IMG_2026_07_28_02_15_23S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Origen"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_15_23S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>teoria_manuscrita</code>.",
      "<strong>Tema validado:</strong> <code>endomorfismos_normales_y_diagonalizacion_ortogonal</code>.",
      "<strong>Continuidad:</strong> continuación de 0023; páginas 46–47 del manuscrito."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal, maquetada"
    },
    {
     "mota": "testua",
     "html": "<strong>Página izquierda (46).</strong> Encabezado: &quot;2013/2/14 — ÁLGEBRA&quot;."
    },
    {
     "mota": "testua",
     "html": "<em>(en azul: &lt;1.97)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo>∘</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo>∘</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><mi>y</mi><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo>∘</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo>∘</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "6. <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msub><mi>V</mi><mn>1</mn></msub><mo>→</mo><msub><mi>V</mi><mn>2</mn></msub></mrow></math> isometría y suprayectiva. Si <math display=\"inline\"><mrow><mo>∀</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo>∈</mo><msub><mi>V</mi><mn>2</mn></msub></mrow></math> entonces <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub></mrow></math> donde <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(en azul:)</em>"
    },
    {
     "mota": "testua",
     "html": "La inversa de una isometría es una isometría."
    },
    {
     "mota": "testua",
     "html": "Para comprobar que una aplicación lineal es una isometría, basta examinar una base."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">(recuadro rojo) Proposición 28</em>"
    },
    {
     "mota": "testua",
     "html": "<em>(lectura dudosa: fundamental)</em>. Si y solo si <math display=\"inline\"><mi>f</mi></math> transforma una base ortonormal en una base ortonormal. <math display=\"block\"><mrow><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> isometria </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇒</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>b</mi><mi>i</mi></msub><mo>,</mo><msub><mi>b</mi><mi>j</mi></msub><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>b</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>b</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Página derecha (47).</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>p</mi></math> si y solo si <math display=\"inline\"><mi>q</mi></math>. <br><math display=\"inline\"><mi>p</mi></math> si <math display=\"inline\"><mi>q</mi></math>: <math display=\"inline\"><mrow><mi>q</mi><mo>⇒</mo><mi>p</mi></mrow></math> <em>(en el margen azul: es necesario y suficiente para <math display=\"inline\"><mi>q</mi></math>)</em> <br><math display=\"inline\"><mi>p</mi></math> solo si <math display=\"inline\"><mi>q</mi></math>: <math display=\"inline\"><mrow><mi>p</mi><mo>⇒</mo><mi>q</mi></mrow></math> <em>(en el margen azul: necesario / suficiente)</em> <br><math display=\"inline\"><mi>p</mi></math> cuando y solo cuando <math display=\"inline\"><mi>q</mi></math>."
    },
    {
     "mota": "testua",
     "html": "<em>(lectura dudosa: ¿delta de Kronecker?)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mo>→</mo></math> &quot;coooojones :)&quot;"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">(recuadro rojo) Corolario 30.</em>"
    },
    {
     "mota": "testua",
     "html": "Igual que en una aplicación isométrica, su matriz asociada en una base ortonormal es ortogonal."
    },
    {
     "mota": "testua",
     "html": "Ejemplo, 4 bis: <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↦</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup><mo>;</mo></mrow></math> es una isometría."
    },
    {
     "mota": "testua",
     "html": "<em>(en azul:)</em>"
    },
    {
     "mota": "testua",
     "html": "Como sus columnas forman una matriz ortonormal"
    },
    {
     "mota": "testua",
     "html": "<em>(en azul: isometría; lo veremos con el producto escalar)</em>"
    },
    {
     "mota": "testua",
     "html": ": <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "El número del corolario parece <math display=\"inline\"><mn>30</mn></math>; el de la proposición, <math display=\"inline\"><mn>28</mn></math>.",
      "Se ha conservado la nota coloquial de la página derecha; la palabra anterior a “delta” no es segura."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La redacción del corolario es elíptica. Una forma reconstruida: una aplicación lineal entre espacios euclídeos de la misma dimensión es una isometría si y solo si su matriz en bases ortonormales es ortogonal."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación matemática"
    },
    {
     "mota": "testua",
     "html": "La demostración de que la inversa de una isometría suprayectiva es una isometría es correcta. La matriz del ejemplo es un giro de <math display=\"inline\"><mn>30</mn></math> grados alrededor del eje <math display=\"inline\"><mi>z</mi></math>; sus columnas son ortonormales y la aplicación, efectivamente, es una isometría."
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "0025 - IMG_2026_07_28_02_15_28S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Origen"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_15_28S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>teoria_y_ejercicio_manuscrito</code>.",
      "<strong>Tema validado:</strong> <code>polinomio_caracteristico_y_espectro_de_operadores_ortogonales</code>.",
      "<strong>Continuidad:</strong> continuación de 0024; páginas 48–49 del manuscrito."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal, maquetada"
    },
    {
     "mota": "testua",
     "html": "<strong>Página izquierda (48).</strong> Encabezado: &quot;2013/2/14 — ÁLGEBRA&quot;."
    },
    {
     "mota": "testua",
     "html": "<em>(en azul: &lt;1.97)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>V</mi><mn>2</mn></msub></mrow></math>. Bases ortonormales: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>e</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>. <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≔</mo><msub><mi>f</mi><mi>i</mi></msub></mrow></math>, ¡la aplicación lineal dada por la regla <math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi></mrow></math> es una isometría! <em>(a la derecha: ????)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><msub><mi>V</mi><mn>1</mn></msub></mrow></math>: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mo>∑</mo><msup><mi>x</mi><mi>i</mi></msup><msub><mi>e</mi><mi>i</mi></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><msup><mi>x</mi><mi>i</mi></msup><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo>∑</mo><msup><mi>x</mi><mi>i</mi></msup><msub><mi>f</mi><mi>i</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(a la derecha: ????)</em>"
    },
    {
     "mota": "testua",
     "html": "¿Cuántos espacios euclídeos hay de dimensión <math display=\"inline\"><mn>3</mn></math>? Uno: <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>f</mi><mo>,</mo><mi>V</mi><mrow><mtext mathvariant=\"normal\">-ren isometriak </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>↔</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> matrize ortogonalak </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mtext mathvariant=\"normal\">GL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></math> <math display=\"block\"><mrow><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> isometria </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇔</mo><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>f</mi><mo>*</mo></msup><mo>⇔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>A</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ortogonala </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇔</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>A</mi><mi>t</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Página derecha (49).</strong> Encabezado: &quot;ÁLGEBRA — 2013/2/14&quot;."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>e</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, base ortonormal de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, y <math display=\"inline\"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Si <math display=\"inline\"><mi>P</mi></math> es la matriz asociada al cambio de base entre <math display=\"inline\"><msub><mi>B</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math>, <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>t</mi></msup><mo>=</mo><mi>I</mi></mrow></math>; es decir, <math display=\"inline\"><mi>P</mi></math> es ortogonal."
    },
    {
     "mota": "testua",
     "html": "Demostración. Como <math display=\"inline\"><msub><mi>B</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math> son ortonormales <math display=\"block\"><mrow><mo>⇒</mo><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>I</mi><mi>.</mi></mrow></math> <math display=\"block\"><mrow><msub><mi>C</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>C</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"block\"><mrow><msub><mi>C</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>C</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mi>…</mi><msub><mi>x</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>Q</mi><mi>t</mi></msup></mrow></math> <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo>=</mo><mi>Q</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mi>…</mi><msub><mi>x</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup></mrow></math> <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mi>…</mi><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo>=</mo><mi>Q</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mi>…</mi><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>I</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mi>…</mi><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mi>…</mi><msub><mi>x</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>I</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mi>…</mi><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>I</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mi>…</mi><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><msub><mi>I</mi><mi>n</mi></msub><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mi>…</mi><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup></mrow></math> <math display=\"block\"><mrow><mo>⇒</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><msub><mi>I</mi><mi>n</mi></msub><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "El manuscrito usa <math display=\"inline\"><mi>P</mi></math> en el enunciado y <math display=\"inline\"><mi>Q</mi></math> durante la demostración; no está claro si representan el mismo cambio de base o cambios inversos entre sí.",
      "Los cuatro signos de interrogación de la página 48 son marcas visibles del original."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si las columnas de <math display=\"inline\"><mi>P</mi></math> son las coordenadas de la base <math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math> en <math display=\"inline\"><msub><mi>B</mi><mn>1</mn></msub></math>, la condición esperada es <math display=\"inline\"><mrow><msup><mi>P</mi><mi>t</mi></msup><mi>P</mi><mo>=</mo><mi>I</mi></mrow></math>.",
      "La frase “Por decir P” parece querer decir “por tanto P”. No se modifica en la transcripción."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación matemática"
    },
    {
     "mota": "testua",
     "html": "Entre espacios euclídeos reales de la misma dimensión siempre existe una isometría que lleva una base ortonormal a otra. La matriz de cambio entre bases ortonormales es ortogonal. La demostración contiene una convención de cambio de base sin fijar, pero su conclusión es correcta."
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "0026 - IMG_2026_07_28_02_15_31S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Origen"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_15_31S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>teoria_y_ejercicio_manuscrito</code>.",
      "<strong>Tema validado:</strong> <code>matrices_normales_adjuntas_y_bases_ortonormales</code>.",
      "<strong>Continuidad:</strong> continuación de 0025; páginas 50–51 del manuscrito."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal, maquetada"
    },
    {
     "mota": "testua",
     "html": "<strong>Página izquierda (50).</strong> Encabezado: &quot;2013/2/14 — ÁLGEBRA — NEWTON&quot;."
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo>=</mo><mi>Q</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mi>…</mi><msub><mi>x</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup></mrow></math>, <img class=\"formula formula-d\" src=\"../media/formulak/190703ef3c3bce9e.svg\" alt=\"Q^t Q = I -&gt; #text[#emph[(urdinez, laukian:)]] P = Q^t\" style=\"width:19.940em;height:1.425em\" loading=\"lazy\"> y siendo <math display=\"inline\"><mrow><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mi>…</mi><msub><mi>x</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup></mrow></math>, <img class=\"formula formula-d\" src=\"../media/formulak/c5ab58dae874565d.svg\" alt=\"(Q^(-1))^t Q^t = I -&gt; #text[#emph[(urdinez, laukian:)]] P = (Q^(-1))^t.\" style=\"width:24.945em;height:1.730em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<em>(línea horizontal discontinua)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>E</mi></math> espacio vectorial euclídeo y <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>e</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> base ortonormal, y <math display=\"inline\"><mi>f</mi></math>, una forma bilineal simétrica sobre <math display=\"inline\"><mi>E</mi></math>, con <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math>. Quiero un sistema de ejes con el número mínimo de autovalores (?) y"
    },
    {
     "mota": "testua",
     "html": "<em>(lectura dudosa: <math display=\"inline\"><mi>A</mi></math> funciona / expresa <math display=\"inline\"><mi>f</mi></math>)</em>"
    },
    {
     "mota": "testua",
     "html": ". <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>E</mi><mo>×</mo><mi>E</mi><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, forma bilineal: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>A</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mi>…</mi><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mi>…</mi><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Consideremos el endomorfismo <math display=\"inline\"><mi>h</mi></math> de <math display=\"inline\"><mi>E</mi></math>, donde <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math>. Como <math display=\"inline\"><mi>f</mi></math> es simétrica, <math display=\"inline\"><mo>→</mo></math> <math display=\"inline\"><mi>A</mi></math> es simétrica, y como <math display=\"inline\"><msub><mi>B</mi><mn>1</mn></msub></math> es ortonormal, <math display=\"inline\"><mo>→</mo></math> <math display=\"inline\"><mi>h</mi></math> es autoadjunto <math display=\"block\"><mrow><mo>⇒</mo><mo>∃</mo><msub><mi>B</mi><mn>2</mn></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ortonormala, bektore propioz osatua</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Página derecha (51).</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mi>…</mi><msub><mi>x</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>P</mi><mi>t</mi></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(en azul, en un recuadro: <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mi>…</mi><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo>=</mo><mi>P</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mi>…</mi><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup></mrow></math>)</em>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><msub><mi>B</mi><mn>1</mn></msub></math> es ortonormal: <math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>P</mi><mi>t</mi></msup></mrow></math>. <math display=\"block\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>D</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>λ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi><mo>=</mo><msup><mi>P</mi><mi>t</mi></msup><mi>A</mi><mi>P</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>A</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mi>…</mi><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mi>…</mi><msub><mi>x</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>P</mi><mi>t</mi></msup><mi>A</mi><mi>P</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mi>…</mi><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mi>…</mi><msub><mi>x</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>D</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mi>…</mi><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mi>.</mi></mtd></mtr></mtable></math> <math display=\"block\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>P</mi><mi>t</mi></msup><mi>A</mi><mi>P</mi><mo>=</mo><mi>D</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(con una llave:)</em>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><msup><mi>P</mi><mi>t</mi></msup><mi>A</mi><mi>P</mi><mo>=</mo><mi>D</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>D</mi></mrow></math> <math display=\"inline\"><mrow><mo>⇒</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> signatura</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>i</mi><mo>+</mo></msup><mo>,</mo><msup><mi>i</mi><mo>−</mo></msup><mo>,</mo><msup><mi>i</mi><mn>0</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<em>(línea horizontal discontinua)</em>"
    },
    {
     "mota": "testua",
     "html": "Dado <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "1) es diagonalizable, por ser autoadjunto / lo diagonaliza. <br>2) Si <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, asociada a una forma bilineal simétrica <math display=\"inline\"><mi>f</mi></math> sobre <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> en la base <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>2</mn></msub><mo>,</mo><msub><mi>e</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, evaluar la signatura de <math display=\"inline\"><mi>f</mi></math>."
    },
    {
     "mota": "testua",
     "html": "1) Si considero <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>2</mn></msub><mo>,</mo><msub><mi>e</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> ortonormal respecto de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> y <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math>, <math display=\"inline\"><mrow><mi>h</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, entonces <math display=\"inline\"><mi>h</mi></math> es autoadjunto respecto de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y <math display=\"inline\"><mi>A</mi></math> es diagonalizable."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La frase de la página 50 sobre el “número mínimo de autovalores” está atravesada por notas y no se lee completa.",
      "Los superíndices de la terna <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">signatura</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>i</mi><mo>+</mo></msup><mo>,</mo><msup><mi>i</mi><mo>−</mo></msup><mo>,</mo><msup><mi>i</mi><mn>0</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> son pequeños, pero el rótulo <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">signatura</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es legible."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Se distinguen dos objetos con la misma matriz <math display=\"inline\"><mi>A</mi></math>: la forma bilineal <math display=\"inline\"><mi>f</mi></math> y el endomorfismo autoadjunto auxiliar <math display=\"inline\"><mi>h</mi></math>.",
      "La terna escrita junto a la diagonal nombra los índices de la signatura; sus valores se obtienen contando los signos de los elementos diagonales."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación matemática"
    },
    {
     "mota": "testua",
     "html": "El procedimiento es correcto: una matriz real simétrica define un endomorfismo autoadjunto, se diagonaliza ortogonalmente y da <math display=\"inline\"><mrow><msup><mi>P</mi><mi>t</mi></msup><mi>A</mi><mi>P</mi><mo>=</mo><mi>D</mi></mrow></math>. La signatura se obtiene después contando los signos de los autovalores, no solo comprobando la diagonalización."
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "0027 - IMG_2026_07_28_02_15_35S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Origen"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_15_35S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>teoria_y_ejercicio_manuscrito</code>.",
      "<strong>Tema validado:</strong> <code>isometrias_ortogonales_y_representacion_geometrica</code>.",
      "<strong>Continuidad:</strong> continuación de 0026; páginas 52–53 del manuscrito."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal, maquetada"
    },
    {
     "mota": "testua",
     "html": "<strong>Página izquierda (52).</strong> Encabezado: &quot;2013/2/14 — ÁLGEBRA — NEWTON&quot;."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn><mo>−</mo><mi>λ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>7</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mi>−</mi><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>7</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(debajo: <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>11</mn><mi>λ</mi><mo>+</mo><mn>26</mn></mrow></math>)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>=</mo><mi>−</mi><mn>20</mn><mo>+</mo><mn>4</mn><mi>λ</mi><mo>+</mo><mn>7</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>77</mn><mi>λ</mi><mo>+</mo><mn>182</mn><mo>−</mo><msup><mi>λ</mi><mn>3</mn></msup><mo>+</mo><mn>11</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>26</mn><mi>λ</mi><mo>=</mo><mi>−</mi><msup><mi>λ</mi><mn>3</mn></msup><mo>+</mo><mn>18</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>99</mn><mi>λ</mi><mo>+</mo><mn>162</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(en azul, tanteo:)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>9</mn><mo>,</mo><mn>18</mn><mo>,</mo><mn>27</mn><mo>,</mo><mn>54</mn><mo>,</mo><mn>81</mn><mo>,</mo><mn>162</mn></mrow></math> <br><math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn></mrow></math> <em>(en azul: así sale un vértice superior, lectura dudosa)</em> <br><math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>8</mn></mrow></math> <br><math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> <em>(marca)</em> <br><math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> <br><math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Existe <math display=\"inline\"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> ortonormal, formada por vectores propios de <math display=\"inline\"><mi>h</mi></math>: <math display=\"block\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>6</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>3</mn></msub><mo>=</mo><mn>9</mn><mi>.</mi></mrow></math> <math display=\"block\"><mrow><msub><mi>C</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>,</mo><msub><mi>x</mi><msup><mn>2</mn><mo>′</mo></msup></msub><mo>,</mo><msub><mi>x</mi><msup><mn>3</mn><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo>=</mo><mi>P</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>,</mo><msub><mi>x</mi><msup><mn>2</mn><mo>′</mo></msup></msub><mo>,</mo><msub><mi>x</mi><msup><mn>3</mn><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo>;</mo><mspace width=\"1.0em\"></mspace><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>P</mi><mi>t</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "2) <math display=\"inline\"><mrow><msub><mi>C</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo>,</mo><msub><mi>y</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>A</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo>,</mo><msub><mi>y</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>,</mo><msub><mi>x</mi><msup><mn>2</mn><mo>′</mo></msup></msub><mo>,</mo><msub><mi>x</mi><msup><mn>3</mn><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>,</mo><msub><mi>y</mi><msup><mn>2</mn><mo>′</mo></msup></msub><mo>,</mo><msub><mi>y</mi><msup><mn>3</mn><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>i</mi></msub><mo>&gt;</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mo>→</mo></math> <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">sign</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <em>(lectura dudosa)</em>."
    },
    {
     "mota": "testua",
     "html": "<strong>Página derecha (53).</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(en azul, en un recuadro: subespacios <math display=\"inline\"><mi>S</mi></math>)</em>"
    },
    {
     "mota": "testua",
     "html": "<br>¡Esto es ortogonal! <em class=\"j-nab\">(en rojo/azul:) ORTOGONÍA; ¡no es solo perpendicular!</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>S</mi><mo>⟂</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>∀</mo><mi>v</mi><mo>∈</mo><mi>S</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(nota junto al dibujo:)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>n</mi><mo>⟂</mo><mi>S</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(Dibujo, inventario literal: sombreado del plano <math display=\"inline\"><mi>S</mi></math>, un cuadrilátero inclinado\ntrazado con cuatro lados continuos; punto de concurrencia negro dentro del sombreado;\ndel punto salen tres rayos continuos con flecha, uno vertical hacia arriba, uno\noblicuo hacia arriba a la izquierda y otro oblicuo hacia abajo a la izquierda; del mismo punto, un rayo\nhorizontal hacia la derecha, discontinuo hasta cruzar el lado derecho del sombreado y\ncontinuo desde ese cruce hasta la flecha; debajo del sombreado hay otra línea más o menos\nhorizontal, discontinua y sin flecha; el vector corto <math display=\"inline\"><mi>n</mi></math>\nestá dentro del sombreado, encima y a la derecha del punto de concurrencia, con una flecha\noblicua hacia arriba a la izquierda; no parte de ese punto.)</em>"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">(en rojo) COMPLEMENTO</em>"
    },
    {
     "mota": "testua",
     "html": "<br>Se llama complemento o complemento ortogonal de <math display=\"inline\"><mi>S</mi></math>, siendo <math display=\"inline\"><mi>S</mi></math> un subespacio de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><msup><mi>S</mi><mo>⟂</mo></msup><mo>=</mo></mrow></math> <em>(lectura dudosa: <math display=\"inline\"><msup><mi>S</mi><mi>a</mi></msup></math>)</em>. <br>Subespacio de <math display=\"inline\"><mi>E</mi></math>, donde <math display=\"inline\"><mrow><mi>S</mi><mo>⊕</mo><msup><mi>S</mi><mo>⟂</mo></msup><mo>=</mo><mi>E</mi></mrow></math> y <math display=\"inline\"><mrow><mo>∀</mo><mi>u</mi><mo>∈</mo><mi>S</mi></mrow></math> son <math display=\"inline\"><mrow><mo>∀</mo><mi>v</mi><mo>∈</mo><msup><mi>S</mi><mo>⟂</mo></msup><mo>⇒</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Los valores de tanteo en azul son muy débiles; solo se han recogido los distintivos.",
      "La igualdad <math display=\"inline\"><mrow><msup><mi>S</mi><mo>⟂</mo></msup><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> depende de qué autoespacio se llame <math display=\"inline\"><mi>S</mi></math>; esa definición no aparece completa en la fotografía.",
      "La palabra roja en euskera se lee <code>OSAGARRIA</code>."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La factorización implícita del polinomio es <math display=\"inline\"><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
      "La notación estándar de la signatura de una forma definida positiva puede variar; aquí parece estar escrito <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación matemática"
    },
    {
     "mota": "testua",
     "html": "El polinomio característico calculado tiene las raíces <math display=\"inline\"><mrow><mn>3</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>9</mn></mrow></math>, todas positivas. Por tanto, la forma es definida positiva y su signatura es tres positivos y ningún negativo. La descomposición ortogonal en autoespacios es válida, por la simetría de <math display=\"inline\"><mi>A</mi></math>."
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "0028 - IMG_2026_07_28_02_15_42S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Origen"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_15_42S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>teoria_y_ejercicio_manuscrito</code>.",
      "<strong>Tema validado:</strong> <code>complemento_ortogonal_proyeccion_y_distancia_euclidea</code>.",
      "<strong>Continuidad:</strong> continuación de 0027; páginas 54–55 del manuscrito."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal, maquetada"
    },
    {
     "mota": "testua",
     "html": "<strong>Página izquierda (54).</strong> Encabezado: &quot;2013/2/14 — ÁLGEBRA — NEWTON&quot;."
    },
    {
     "mota": "testua",
     "html": "Ej. <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mi>i</mi></msub><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Se considera <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mn>1</mn></mrow><mn>1</mn></msubsup><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> y el subespacio <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><msub><mi>P</mi><mn>2</mn></msub><mi>/</mi><msup><mi>p</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Hallar el complemento de <math display=\"inline\"><mi>S</mi></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>S</mi><mo>⟂</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><msub><mi>P</mi><mn>2</mn></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>∀</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mi>S</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math> base de <math display=\"inline\"><mi>S</mi></math>: <math display=\"block\"><mrow><msup><mi>p</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msup><mi>x</mi><mn>2</mn></msup></mrow></math> <math display=\"block\"><mrow><mo>⇒</mo><mi>S</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo></mrow></math> base de <math display=\"inline\"><mi>S</mi></math> <math display=\"inline\"><mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Como <math display=\"inline\"><mrow><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mi>S</mi></mrow></math>, <math display=\"inline\"><mrow><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>S</mi><mo>⟂</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><msub><mi>P</mi><mn>2</mn></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> <math display=\"block\"><mrow><mo>=</mo><msubsup><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>a</mi><mn>0</mn></msub><mi>x</mi><mo>−</mo><msub><mi>a</mi><mn>0</mn></msub><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><msub><mi>a</mi><mn>1</mn></msub><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>−</mo><msub><mi>a</mi><mn>2</mn></msub><mfrac><msup><mi>x</mi><mn>4</mn></msup><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow><mn>1</mn></msubsup><mo>=</mo><mn>0</mn></mrow></math> <math display=\"block\"><mrow><mo>⇒</mo><mn>3</mn><msub><mi>a</mi><mn>0</mn></msub><mo>−</mo><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn><mo>=</mo><msubsup><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>a</mi><mn>0</mn></msub><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mfrac><msup><mi>x</mi><mn>4</mn></msup><mn>4</mn></mfrac><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow><mn>1</mn></msubsup><mo>=</mo><mn>0</mn></mrow></math> <math display=\"block\"><mrow><mo>⇒</mo><mn>5</mn><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><mn>3</mn><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Página derecha (55).</strong>"
    },
    {
     "mota": "testua",
     "html": "<em>(Dibujo; negro, salvo los elementos indicados en azul: segmento\nazul <math display=\"inline\"><mi>v</mi></math> desde el vértice izquierdo del plano hasta <math display=\"inline\"><mi>P</mi></math>, con el\nrótulo <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><msub><mi>y</mi><mn>2</mn></msub><mo>,</mo><msub><mi>z</mi><mn>1</mn></msub><mo>−</mo><msub><mi>z</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; el segmento negro <math display=\"inline\"><mi>P</mi></math>–<math display=\"inline\"><mi>Q</mi></math> perpendicular al plano; cuadradito de ángulo\nrecto en <math display=\"inline\"><mi>Q</mi></math>; vector azul punteado <math display=\"inline\"><mi>w</mi></math> desde el vértice izquierdo hasta\n<math display=\"inline\"><mi>Q</mi></math>; el plano lleva el rótulo <math display=\"inline\"><mi>π</mi></math>, y los bordes <math display=\"inline\"><mi>l</mi></math> y <math display=\"inline\"><mi>m</mi></math>.)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><mi>Q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>1</mn></msub><mo>−</mo><msub><mi>z</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow></math> (distancia euclídea) <math display=\"block\"><mrow><mo>=</mo><msqrt><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><msub><mi>y</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>z</mi><mn>1</mn></msub><mo>−</mo><msub><mi>z</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.222em\"></mspace><mi>I</mi><mspace width=\"0.222em\"></mspace><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><msub><mi>y</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>z</mi><mn>1</mn></msub><mo>−</mo><msub><mi>z</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(en azul:)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>w</mi></math> = proyección ortogonal de <math display=\"inline\"><mi>v</mi></math> sobre <math display=\"inline\"><mi>S</mi></math>. <math display=\"block\"><mrow><mi>q</mi><mo>=</mo><mi>v</mi><mo>−</mo><mi>w</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>v</mi><mo>−</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>w</mi><mo>∈</mo><mi>S</mi><mi>/</mi><mi>v</mi><mo>−</mo><mi>w</mi><mo>∈</mo><msup><mi>S</mi><mo>⟂</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "En la parametrización de <math display=\"inline\"><mi>S</mi></math>, <math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math> se reutiliza como parámetro libre tras escribir los coeficientes genéricos <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub></mrow></math>; se conserva ese cambio del manuscrito.",
      "La página 55 no numera de forma coherente el punto proyectado entre <math display=\"inline\"><mi>q</mi></math> y <math display=\"inline\"><mi>Q</mi></math>."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Para la condición <math display=\"inline\"><mrow><msup><mi>p</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> del manuscrito, la base <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> escrita es compatible, sí.",
      "La distancia al subespacio es la norma de la componente ortogonal <math display=\"inline\"><mrow><mi>v</mi><mo>−</mo><mi>w</mi></mrow></math>."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación matemática"
    },
    {
     "mota": "testua",
     "html": "La condición <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> define un subespacio de dimensión 2 y su complemento ortogonal tiene dimensión 1. Las dos ecuaciones obtenidas de las integrales y las fórmulas geométricas de proyección y distancia de la página 55 son correctas."
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "0029 - IMG_2026_07_28_02_15_47S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Origen"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_15_47S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>teoria_y_ejercicio_manuscrito</code>.",
      "<strong>Tema validado:</strong> <code>proyecciones_ortogonales_y_descomposicion_directa</code>.",
      "<strong>Continuidad:</strong> continuación de 0028; páginas 56–57 del manuscrito."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal, maquetada"
    },
    {
     "mota": "testua",
     "html": "<strong>Página izquierda (56).</strong> Encabezado: &quot;2013/2/18 — ÁLGEBRA — LAU DOTA&quot;"
    },
    {
     "mota": "testua",
     "html": "<em>(lectura dudosa)</em>"
    },
    {
     "mota": "testua",
     "html": ". \\"
    },
    {
     "mota": "testua",
     "html": "<em>(en el margen verde: “cálculo de [ilegible] todas tu vida”, lectura\ndudosa)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">(en rojo, junto a la descomposición) APLICACIÓN LINEAL</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>=</mo><mi>λ</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(flechas:)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(dibujo pequeño: dos flechas y los rótulos “así es la cosa” y “ÁLGEBRA LINEAL”\n(lectura dudosa))</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>δ</mi><mo>,</mo><mn>0</mn><mo>,</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ε</mi><mo>,</mo><mi>ε</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>δ</mi><mo>+</mo><mn>2</mn><mi>ε</mi><mo>,</mo><mi>ε</mi><mo>,</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(estrella azul)</em>"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">(en rojo) ATENTO</em>"
    },
    {
     "mota": "testua",
     "html": "Cálculo de un vector general del espacio de llegada: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>δ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>λ</mi><mo>+</mo><mi>μ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mo>=</mo><mi>−</mi><mi>λ</mi><mo>+</mo><mi>ε</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>t</mi><mo>=</mo><mi>λ</mi><mo>+</mo><mi>μ</mi><mo>+</mo><mi>ε</mi></mrow></math> <img class=\"formula formula-d\" src=\"../media/formulak/f85b6cef15bad28a.svg\" alt=\"==&gt; epsilon = t - y #text[#emph[(laukian)]], quad delta = x #text[#emph[(laukian)]]\" style=\"width:20.950em;height:1.364em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<em>(a la derecha: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)</em>"
    },
    {
     "mota": "testua",
     "html": "<em>(en azul:)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mi>y</mi><mo>+</mo><mi>t</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Página derecha (57).</strong>"
    },
    {
     "mota": "testua",
     "html": "6. Calcular el núcleo y la imagen de la aplicación lineal <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> definida así: <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mi>?</mi></mrow></math> <math display=\"block\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mi>/</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mn>0</mn><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>=</mo><mn>0</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>0</mn><mi>x</mi><mo>+</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La página 56 mezcla parámetros y coordenadas, pero la sustitución final <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>t</mi><mo>−</mo><mi>y</mi></mrow></math> y la combinación azul son legibles.",
      "El CSV de verificación llama <code>método</code> a la nota roja junto a la descomposición; en la fuente se distingue <code>APLICACIÓN LINEAL</code>. Se ha conservado la lectura visible y no se introduce como <code>método</code> literal.",
      "En la definición de <math display=\"inline\"><mi>f</mi></math> de la página 57 no se ve ningún término constante después de <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi></mrow></math>."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "El núcleo y la imagen no se completan: la fotografía deja el ejercicio en el planteamiento mostrado.",
      "La expresión <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>δ</mi><mo>+</mo><mn>2</mn><mi>ε</mi><mo>,</mo><mi>ε</mi><mo>,</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se obtiene, sí, de los dos sumandos visibles: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>δ</mi><mo>,</mo><mn>0</mn><mo>,</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ε</mi><mo>,</mo><mi>ε</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación matemática"
    },
    {
     "mota": "testua",
     "html": "La combinación azul de la página 56 coincide con la sustitución de <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>t</mi><mo>−</mo><mi>y</mi></mrow></math> en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>δ</mi><mo>+</mo><mn>2</mn><mi>ε</mi><mo>,</mo><mi>ε</mi><mo>,</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En la página 57, la fórmula visible tiene el término constante nulo; por eso la pregunta sobre <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> queda abierta en el manuscrito y no se completa aquí."
    }
   ]
  },
  {
   "id": "a37",
   "maila": 2,
   "izenburua": "0030 - IMG_2026_07_28_02_15_51S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Origen"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_15_51S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>teoria_manuscrita</code>.",
      "<strong>Tema validado:</strong> <code>teoremas_de_ortogonalidad_y_descomposicion_de_espacios</code>.",
      "<strong>Continuidad:</strong> continuación de 0029; páginas 58–59 del manuscrito."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal, maquetada"
    },
    {
     "mota": "testua",
     "html": "<strong>Página izquierda (58).</strong> Encabezado: &quot;2013/2/18 — ÁLGEBRA&quot;."
    },
    {
     "mota": "testua",
     "html": "<em>(en azul: &lt;1.97)</em>"
    },
    {
     "mota": "testua",
     "html": "Notas, p. 13:"
    },
    {
     "mota": "testua",
     "html": "(ii) En el espacio vectorial euclídeo <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>, las únicas isometrías son la identidad y su opuesta. <br>(iii) La función valor absoluto de <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> a <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> expresa una norma, pero no es una isometría. <br>(iv) Aplicación del espacio vectorial euclídeo <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></math> al espacio euclídeo <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>, <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(lectura dudosa: aparecen tres términos)</em>"
    },
    {
     "mota": "testua",
     "html": "."
    },
    {
     "mota": "testua",
     "html": "<em>(triángulo de aviso azul, referido al apartado (iii), escrito bajo (iv):)</em>"
    },
    {
     "mota": "testua",
     "html": "<br>Conserva la norma, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math>, pero no es lineal. No conserva el producto escalar: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≠</mo><mi>x</mi><mi>y</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(en rojo, comentario entre paréntesis, literal:)</em>"
    },
    {
     "mota": "testua",
     "html": "&quot;Ha soltado una movida didáctica sobre [ilegible]: somos una generación [ilegible] que se dan todo y no hacer nada, [ilegible] se viene a la uni a trabajar, y que tenemos [ilegible] competición con alumnos de no sé qué países.&quot;"
    },
    {
     "mota": "testua",
     "html": "Giros. Un subgrupo (normal) de <math display=\"inline\"><mrow><msup><mtext mathvariant=\"normal\">GL</mtext><mo>+</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el de las matrices cuadradas reales de orden <math display=\"inline\"><mi>n</mi></math> con determinante igual a la unidad, que se llama"
    },
    {
     "mota": "testua",
     "html": "<em>(continúa)</em>"
    },
    {
     "mota": "testua",
     "html": "."
    },
    {
     "mota": "testua",
     "html": "<strong>Página derecha (59).</strong>"
    },
    {
     "mota": "testua",
     "html": "Cada especial de orden <math display=\"inline\"><mi>n</mi></math> sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>, y se escribe <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; el grupo isomorfo correspondiente de transformaciones del espacio vectorial real <math display=\"inline\"><mi>V</mi></math> de dimensión <math display=\"inline\"><mi>n</mi></math> se llama especial, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<em>(diagrama de inclusión y correspondencia:)</em>"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "auto auto auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<strong>grupos de transformaciones</strong>"
          }
         ]
        },
        {
         "blokeak": []
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<strong>grupos de matrices</strong>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">GL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mo>↔</mo></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">GL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo>+</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mo>↔</mo></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo>+</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SO</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> SL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mo>↔</mo></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SO</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> SL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>(flechas verticales: inclusión hacia <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">GL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">GL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>;\n<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SO</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊆</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SO</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊆</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> SL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊆</mo><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo>+</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>;\n<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SO</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊆</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SO</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊆</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> SL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>,\n<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊆</mo><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo>+</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)</em>"
    },
    {
     "mota": "testua",
     "html": "\\"
    },
    {
     "mota": "testua",
     "html": "<em>(correspondencias horizontales mediante una base:\n<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">GL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msup><mtext mathvariant=\"normal\">GL</mtext><mo>+</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo>+</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>,\n<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SO</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> SO</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> SL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)</em>"
    },
    {
     "mota": "testua",
     "html": "Es una base ortonormal."
    },
    {
     "mota": "testua",
     "html": "(i) El grupo <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tiene sentido cuando el espacio <math display=\"inline\"><mi>V</mi></math> es <em>(ilegible)</em>. <br>(ii) El isomorfismo entre <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">GL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">GL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <em>(se restringe)</em> a <math display=\"inline\"><mrow><msup><mtext mathvariant=\"normal\">GL</mtext><mo>+</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msup><mtext mathvariant=\"normal\">GL</mtext><mo>+</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; a <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <br>(iii) Isomorfismo de <math display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SO</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SO</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, una base ortonormal."
    },
    {
     "mota": "testua",
     "html": "<em>(en rojo:)</em>"
    },
    {
     "mota": "testua",
     "html": "Una de las matrices de orden 2 es de la forma: <math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(en azul: giro)</em>"
    },
    {
     "mota": "testua",
     "html": ", o <math display=\"block\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La nota azul sobre el valor absoluto está escrita físicamente bajo el ejemplo (iv), pero sus fórmulas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> la vinculan con el apartado (iii); se ha recogido esa disposición.",
      "El comentario rojo contiene algunas palabras irrecuperables, y se marca sin inventarlas.",
      "Los cinco rótulos del diagrama de inclusión son legibles; algunos signos de inclusión están sobremarcados."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "El conjunto de matrices reales con determinante <math display=\"inline\"><mn>1</mn></math> es <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, subgrupo de <math display=\"inline\"><mrow><msup><mtext mathvariant=\"normal\">GL</mtext><mo>+</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
      "Las dos familias finales son, respectivamente, los giros y las simetrías (reflexiones) de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></math>."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación matemática"
    },
    {
     "mota": "testua",
     "html": "La aplicación valor absoluto conserva la norma real, pero no es lineal y no conserva el producto escalar, como indica el manuscrito. Las matrices <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son ortogonales, con determinantes <math display=\"inline\"><mn>1</mn></math> y <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>, respectivamente."
    }
   ]
  },
  {
   "id": "a38",
   "maila": 2,
   "izenburua": "0031 - IMG_2026_07_28_02_15_55S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Origen"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_15_55S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>teoria_manuscrita</code>.",
      "<strong>Tema validado:</strong> <code>matrices_unitarias_hermitianas_y_endomorfismo_adjunto</code>.",
      "<strong>Continuidad:</strong> continuación de 0030; páginas 60–61 del manuscrito."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal, maquetada"
    },
    {
     "mota": "testua",
     "html": "<strong>Página izquierda (60).</strong> Encabezado: &quot;2013/2/19 — ÁLGEBRA&quot;."
    },
    {
     "mota": "testua",
     "html": "<em>(en azul: &lt;0.23&gt;)</em>"
    },
    {
     "mota": "testua",
     "html": "<em>(en azul, en la parte superior: matrices ortogonales)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>∈</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <math display=\"inline\"><mi>A</mi></math> ortogonal <math display=\"inline\"><mrow><mo>⇒</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>. Si <math display=\"inline\"><mi>λ</mi></math> es una raíz del polinomio característico de la matriz <math display=\"inline\"><mi>A</mi></math> (ortogonal), <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>1</mn></mrow></math>. Los autovalores serán <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> o <math display=\"inline\"><mn>1</mn></math> (en los complejos hay otro espectro"
    },
    {
     "mota": "testua",
     "html": "<em>(hay)</em>"
    },
    {
     "mota": "testua",
     "html": "). <em>(nota: autovalores complejos)</em> <math display=\"block\"><mrow><mi>A</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℂ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℂ</mi><mi>n</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Proposición: las raíces del polinomio característico de una matriz real simétrica son reales. <br>Dem.: <math display=\"inline\"><mrow><mi>A</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℂ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℂ</mi><mi>n</mi></msup></mrow></math>. <math display=\"inline\"><mi>λ</mi></math>: valor propio (autovalor) de <math display=\"inline\"><mi>A</mi></math>; <math display=\"inline\"><mrow><mi>A</mi><mi>x</mi><mo>=</mo><mi>λ</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℂ</mi><mi>n</mi></msup></mrow></math>. Porque <math display=\"block\"><mrow><msup><mi>x</mi><mo>*</mo></msup><mi>A</mi><mi>x</mi><mo>=</mo><mi>λ</mi><msup><mi>x</mi><mo>*</mo></msup><mi>x</mi><mi>.</mi></mrow></math> <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mi>A</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>*</mo></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><msup><mi>x</mi><mo>*</mo></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>*</mo></msup><mo>⇒</mo><msup><mi>x</mi><mo>*</mo></msup><mi>A</mi><mi>x</mi><mo>=</mo><mover><mi>λ</mi><mo accent=\"true\">¯</mo></mover><msup><mi>x</mi><mo>*</mo></msup><mi>x</mi><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><msup><mi>A</mi><mo>*</mo></msup><mo>=</mo><mi>A</mi></mrow></math>. <math display=\"block\"><mrow><mo>⇒</mo><mi>λ</mi><msup><mi>x</mi><mo>*</mo></msup><mi>x</mi><mo>=</mo><mover><mi>λ</mi><mo accent=\"true\">¯</mo></mover><msup><mi>x</mi><mo>*</mo></msup><mi>x</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mo>*</mo></msup><mi>x</mi><mo>≠</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mover><mi>λ</mi><mo accent=\"true\">¯</mo></mover><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> beraz </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>λ</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mi>.</mi></mrow></math> <math display=\"block\"><mrow><msup><mi>x</mi><mo>*</mo></msup><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><msub><mi>x</mi><mn>1</mn></msub><mo accent=\"true\">¯</mo></mover><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><mover><msub><mi>x</mi><mi>n</mi></msub><mo accent=\"true\">¯</mo></mover><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>x</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>+</mo><mi>…</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>x</mi><mi>n</mi></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(en azul:)</em>"
    },
    {
     "mota": "testua",
     "html": "conjugado de un número complejo: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mi>i</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mi>i</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Página derecha (61).</strong>"
    },
    {
     "mota": "testua",
     "html": "Proposición (criterio de Sylvester): una matriz cuadrada real está asociada a un producto escalar si <math display=\"inline\"><mi>A</mi></math> es simétrica y sus menores principales son positivos."
    },
    {
     "mota": "testua",
     "html": "<em>(en azul, lista: no degenerada; definida positiva; simétrica;\naplicación bilineal)</em>"
    },
    {
     "mota": "testua",
     "html": "6.3 Endomorfismos autoadjuntos. <br>Proposición: sea <math display=\"inline\"><mi>V</mi></math> un espacio vectorial euclídeo y <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math> un endomorfismo. Esta relación define un único endomorfismo <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>*</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>f</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∈</mo><mi>V</mi><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><msup><mi>f</mi><mo>*</mo></msup><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Definición. <br>Dado <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>V</mi></mrow></math>, si existe <math display=\"inline\"><msup><mi>f</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math> que cumple <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>*</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><msup><mi>f</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math> es único. Sean <math display=\"inline\"><mrow><mi>z</mi><mo>,</mo><mi>w</mi><mo>∈</mo><mi>V</mi></mrow></math> los que cumplen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>*</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es decir: <img class=\"formula formula-d\" src=\"../media/formulak/865ae5edb3c4e067.svg\" alt=\"chevron.l z, y chevron.r = chevron.l x, f(y) chevron.r; quad chevron.l w, y chevron.r = chevron.l x, f(y) chevron.r #text[#emph[($forall y$)]].\" style=\"width:21.694em;height:1.368em\" loading=\"lazy\"> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>z</mi><mo>−</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "El manuscrito escribe que los autovalores “serán <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> o <math display=\"inline\"><mn>1</mn></math>” y añade una débil salvedad sobre los complejos; no se corrige dentro de la transcripción.",
      "El nombre “criterio de Sylvester” es una lectura contextual del encabezado entre paréntesis."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Una matriz ortogonal real puede tener autovalores complejos de módulo <math display=\"inline\"><mn>1</mn></math>, no solo <math display=\"inline\"><mrow><mi>±</mi><mn>1</mn></mrow></math>; estos últimos son los únicos autovalores reales posibles.",
      "En el criterio de Sylvester, para una matriz simétrica se exige que los menores principales dominantes sean positivos."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación matemática"
    },
    {
     "mota": "testua",
     "html": "La demostración de la realidad de los autovalores de una matriz real simétrica es correcta, pasando a <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℂ</mi><mi>n</mi></msup></math> y usando la forma hermítica. La unicidad del adjunto se obtiene tomando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>z</mi><mo>−</mo><mi>w</mi></mrow></math>, lo que fuerza <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>w</mi></mrow></math>; este último paso continúa en la fotografía siguiente."
    }
   ]
  },
  {
   "id": "a39",
   "maila": 2,
   "izenburua": "0032 - IMG_2026_07_28_02_16_00S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Origen"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_16_00S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>teoria_manuscrita</code>.",
      "<strong>Tema validado:</strong> <code>base_ortonormal_y_definicion_de_subespacio_afin</code>.",
      "<strong>Continuidad:</strong> transición de B05 a B06; páginas 62–63 del manuscrito."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal, maquetada"
    },
    {
     "mota": "testua",
     "html": "<strong>Página izquierda (62).</strong> Encabezado: &quot;2013/2/19 — ÁLGEBRA&quot;."
    },
    {
     "mota": "testua",
     "html": "<em>(en azul: &lt;0.23&gt;)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>f</mi><mo>*</mo></msup><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>→</mo><msup><mi>f</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(lectura dudosa: <math display=\"inline\"><msup><mi>f</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math>)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>z</mi><mo>−</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>∀</mo><mi>y</mi><mo>∈</mo><mi>V</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mo>−</mo><mi>w</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(en azul, con una flecha:)</em>"
    },
    {
     "mota": "testua",
     "html": "no degenerada. <br>El único vector perpendicular a todos es el cero."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">(recuadro azul) 2. EXISTENCIA</em>"
    },
    {
     "mota": "testua",
     "html": "<br>Consideramos una base ortonormal de <math display=\"inline\"><mi>V</mi></math> (la matriz asociada a <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> es <math display=\"inline\"><msub><mi>I</mi><mi>n</mi></msub></math>). Llamamos <math display=\"inline\"><mrow><mi>X</mi><mo>,</mo><mi>Y</mi><mo>,</mo><mi>Z</mi></mrow></math> a las matrices columna con las coordenadas de los vectores <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>∈</mo><mi>V</mi></mrow></math>, en la base ortonormal. Condición: <img class=\"formula formula-d\" src=\"../media/formulak/956006969dcf60a2.svg\" alt=\"#text[#emph[(¿$Z$?)]] quad chevron.l z, y chevron.r = chevron.l x, f(y) chevron.r, quad forall y in V.\" style=\"width:18.126em;height:1.368em\" loading=\"lazy\"> <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (matrizialki) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msup><mi>Z</mi><mi>t</mi></msup><mi>Y</mi><mo>=</mo><msup><mi>X</mi><mi>t</mi></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mi>Y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>∀</mo><mi>Y</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mi>B</mi></math> = matriz asociada a <math display=\"inline\"><mi>f</mi></math> en una base ortonormal."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">(en el recuadro) <math display=\"inline\"><mrow><msup><mi>Z</mi><mi>t</mi></msup><mo>=</mo><msup><mi>X</mi><mi>t</mi></msup><mi>B</mi><mo>→</mo><mo>∃</mo><mi>Z</mi></mrow></math>; por tanto, existe.</em>"
    },
    {
     "mota": "testua",
     "html": "<strong>Página derecha (63).</strong>"
    },
    {
     "mota": "testua",
     "html": "<em>(esquema superior: matemático <math display=\"inline\"><mo>←</mo></math> ÁLGEBRA; “el traidor”, WIP,\nlectura dudosa)</em>"
    },
    {
     "mota": "testua",
     "html": "\\"
    },
    {
     "mota": "testua",
     "html": "<em>(en azul: &lt;2.17&gt;)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> <br>elemento: geométrico, CARTESIANO <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <br>elemento: NATURAL <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> <math display=\"block\"><mrow><mi>p</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>p</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>q</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>1</mn></msub><mo>−</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo>−</mo><msub><mi>p</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">(en el recuadro) VECTORIAL</em>"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/37db3e7b14a8c728.svg\" alt=\"arrow(p q) = v; quad q = p + v quad #text[#emph[(partikularra, oinarria)]].\" style=\"width:22.765em;height:1.364em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "7.2 Subespacio afín <br>Def.: un conjunto no vacío <math display=\"inline\"><mrow><mi>S</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> es un subespacio afín si existen <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> y un subespacio vectorial <math display=\"inline\"><mrow><mi>W</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> tales que <math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo>+</mo><mi>v</mi><mo>:</mo><mi>v</mi><mo>∈</mo><mi>W</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>q</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>:</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>W</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(dibujo: ejes; punto <math display=\"inline\"><mi>p</mi></math>; vector <math display=\"inline\"><mi>v</mi></math> y punto <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>v</mi></mrow></math>)</em>"
    },
    {
     "mota": "testua",
     "html": "<em>(aviso:)</em>"
    },
    {
     "mota": "testua",
     "html": "Las aplicaciones afines son siempre puntuales:"
    },
    {
     "mota": "testua",
     "html": "<em>(literal: “daina aplicaciones vectoriales el objeto punto ‘vector’\nllamando...”)</em>"
    },
    {
     "mota": "testua",
     "html": "\\"
    },
    {
     "mota": "testua",
     "html": "<em>(dibujo inferior: subespacio vectorial <math display=\"inline\"><mi>W</mi></math> que pasa por el origen;\nrecta/plano paralelo <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi></mrow></math>; punto <math display=\"inline\"><mi>p</mi></math> sobre <math display=\"inline\"><mi>S</mi></math>)</em>"
    },
    {
     "mota": "testua",
     "html": "\\"
    },
    {
     "mota": "testua",
     "html": "<em>(recuadro al margen)</em>"
    },
    {
     "mota": "testua",
     "html": "<em>(lectura dudosa:)</em>"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">OJO: LOS SUBESPACIOS AFINES SON COPIAS DE LOS SUBESPACIOS VECTORIALES; PUEDEN PASAR POR CUALQUIER PUNTO.</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "En la primera flecha de la página 62 aparece <math display=\"inline\"><msup><mi>f</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math>, donde el contexto exigiría <math display=\"inline\"><msup><mi>f</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math>; se ha conservado.",
      "Las notas en euskera son parcialmente ilegibles; el recuadro inferior se conserva línea a línea, con la marca de lectura dudosa.",
      "Los rótulos “geométrico cartesiano” y “natural” se leen sin seguridad."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "En coordenadas ortonormales, si <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la condición de adjunto da <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><msup><mi>B</mi><mi>t</mi></msup><mi>X</mi></mrow></math>, equivalente a <math display=\"inline\"><mrow><msup><mi>Z</mi><mi>t</mi></msup><mo>=</mo><msup><mi>X</mi><mi>t</mi></msup><mi>B</mi></mrow></math>.",
      "En la definición afín, el vector director es <math display=\"inline\"><mi>W</mi></math>, y se puede usar cualquier <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><mi>S</mi></mrow></math> como punto base."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación matemática"
    },
    {
     "mota": "testua",
     "html": "En dimensión finita, la existencia del adjunto se reduce directamente a la igualdad <math display=\"inline\"><mrow><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>f</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup></mrow></math> en una base ortonormal. Las tres descripciones de <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi></mrow></math> de la página 63 son equivalentes."
    }
   ]
  },
  {
   "id": "a40",
   "maila": 2,
   "izenburua": "0033 - IMG_2026_07_28_02_16_04S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Origen"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_16_04S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>teoria_manuscrita</code>.",
      "<strong>Tema validado:</strong> <code>subespacios_afines_variedad_directora_y_dimension</code>.",
      "<strong>Continuidad:</strong> continuación de 0032; páginas 64–65 del manuscrito."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal, maquetada"
    },
    {
     "mota": "testua",
     "html": "<strong>Página izquierda (64).</strong> Encabezado: &quot;2013/2/19 — ÁLGEBRA&quot;."
    },
    {
     "mota": "testua",
     "html": "<em>(en azul: &lt;2.17&gt;; arriba: “irudiak / luces”, lectura dudosa)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">(en el recuadro) <math display=\"inline\"><mrow><mi>q</mi><mo>∈</mo><mi>S</mi><mo>⇔</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>W</mi></mrow></math>. La unicidad que implica\n<em>(lectura dudosa)</em>.</em>"
    },
    {
     "mota": "testua",
     "html": "<em>(dibujo superior: ejes horizontal y vertical que pasan por el origen;\n<math display=\"inline\"><mi>W</mi></math> pasa por el origen; <math display=\"inline\"><mi>p</mi></math> y <math display=\"inline\"><mi>q</mi></math> están marcados con puntos negros;\nel segmento dirigido <math display=\"inline\"><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></math> los une; el rótulo <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi></mrow></math> queda\nabajo y el rótulo <math display=\"inline\"><mrow><mi>q</mi><mo>∈</mo><mi>S</mi></mrow></math> a la derecha)</em>"
    },
    {
     "mota": "testua",
     "html": "Subespacios afines según la dimensión"
    },
    {
     "mota": "testua",
     "html": "<em>(en dos idiomas: “subespacios afines dimensionales según”, con una palabra ilegible)</em>"
    },
    {
     "mota": "testua",
     "html": "."
    },
    {
     "mota": "testua",
     "html": "<em>(dibujo grande de la izquierda: <math display=\"inline\"><mi>W</mi></math> y <math display=\"inline\"><msup><mi>W</mi><mo>′</mo></msup></math> son rectas que pasan por el origen,\ncon eje vertical y horizontal; <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><msup><mi>W</mi><mo>′</mo></msup></mrow></math> es una recta paralela\ntrasladada; los puntos <math display=\"inline\"><mi>p</mi></math>, <math display=\"inline\"><msup><mi>p</mi><mo>′</mo></msup></math>, <math display=\"inline\"><msup><mi>p</mi><mo>″</mo></msup></math>, <math display=\"inline\"><msup><mi>p</mi><mo>‴</mo></msup></math> y <math display=\"inline\"><mi>q</mi></math> están sobre <math display=\"inline\"><mi>S</mi></math>\ny los tramos sucesivos se marcan con líneas discontinuas; <math display=\"inline\"><mi>p</mi></math>, además, aparece dentro de un\nrecuadro)</em>"
    },
    {
     "mota": "testua",
     "html": "<em>(dibujo grande de la derecha: <math display=\"inline\"><msup><mi>W</mi><mo>′</mo></msup></math> pasa por el origen, con eje vertical\ny horizontal; una segunda recta es paralela a <math display=\"inline\"><msup><mi>W</mi><mo>′</mo></msup></math>, trasladada\npasando por <math display=\"inline\"><msup><mi>p</mi><mo>′</mo></msup></math>; <math display=\"inline\"><msup><mi>p</mi><mo>′</mo></msup></math> es un punto de la recta trasladada y de <math display=\"inline\"><msup><mi>p</mi><mo>′</mo></msup></math>\nsale un segmento dirigido hacia <math display=\"inline\"><mi>q</mi></math>)</em>"
    },
    {
     "mota": "testua",
     "html": "Proposición. Sean <math display=\"inline\"><mrow><mi>p</mi><mo>,</mo><mi>q</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>,</mo><msub><mi>W</mi><mn>2</mn></msub><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> subespacios vectoriales. Entonces: <math display=\"block\"><mrow><mi>p</mi><mo>+</mo><msub><mi>W</mi><mn>1</mn></msub><mo>=</mo><mi>q</mi><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub><mo>⇔</mo><msub><mi>W</mi><mn>1</mn></msub><mo>=</mo><msub><mi>W</mi><mn>2</mn></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>q</mi><mo>∈</mo><mi>p</mi><mo>+</mo><msub><mi>W</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(punto)</em>"
    },
    {
     "mota": "testua",
     "html": "Demostración: a la izquierda."
    },
    {
     "mota": "testua",
     "html": "<strong>Página derecha (65).</strong>"
    },
    {
     "mota": "testua",
     "html": "Entonces, <math display=\"inline\"><mi>S</mi></math> de un subespacio afín es el único subespacio vectorial <math display=\"inline\"><mi>W</mi></math> que tiene una expresión; y cada punto <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> de <math display=\"inline\"><mi>S</mi></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(ilegible)</em>"
    },
    {
     "mota": "testua",
     "html": "puede tomarse como punto."
    },
    {
     "mota": "testua",
     "html": "COROLARIO. Siendo <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi></mrow></math> un subespacio afín:"
    },
    {
     "mota": "testua",
     "html": "(1) <math display=\"inline\"><mrow><mi>r</mi><mo>,</mo><mi>s</mi><mo>∈</mo><mi>S</mi><mo>⇒</mo><mover><mrow><mi>r</mi><mi>s</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>W</mi></mrow></math>. <br>Dem.: <math display=\"inline\"><mrow><mi>r</mi><mo>∈</mo><mi>S</mi><mo>⇔</mo><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>W</mi></mrow></math>; <math display=\"inline\"><mrow><mspace width=\"1.0em\"></mspace><mi>s</mi><mo>∈</mo><mi>S</mi><mo>⇔</mo><mover><mrow><mi>p</mi><mi>s</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>W</mi></mrow></math>. <math display=\"block\"><mrow><mover><mrow><mi>r</mi><mi>s</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>r</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>p</mi><mi>s</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>W</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(dibujo triangular, con vértices <math display=\"inline\"><mi>r</mi></math>, <math display=\"inline\"><mi>p</mi></math>, <math display=\"inline\"><mi>s</mi></math>)</em>"
    },
    {
     "mota": "testua",
     "html": "<br>(2) <math display=\"inline\"><mrow><mi>q</mi><mo>∈</mo><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi><mo>⇔</mo><mi>q</mi><mo>+</mo><mi>W</mi><mo>=</mo><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "DEFINICIÓN. Sea <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi></mrow></math> un subespacio afín de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>. Al subespacio vectorial <math display=\"inline\"><mi>W</mi></math> se le <em>(llama)</em> dirección de <math display=\"inline\"><mi>S</mi></math>; se denota <math display=\"inline\"><mover><mi>S</mi><mo accent=\"true\">→</mo></mover></math>. Asimismo, se dirá que el subespacio <math display=\"inline\"><mi>S</mi></math> pasa por el punto <math display=\"inline\"><mi>p</mi></math>."
    },
    {
     "mota": "testua",
     "html": "DEFINICIÓN. La dimensión de un subespacio afín <math display=\"inline\"><mi>S</mi></math> es la dimensión de su dirección: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>≔</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La página 65 está en su mayor parte en euskera y algunos finales son débiles; se conservan las secuencias legibles y se pone <em>(ilegible)</em> donde falta el texto.",
      "En los dibujos de la página 64, los superíndices sucesivos de los puntos <math display=\"inline\"><mi>p</mi></math>, <math display=\"inline\"><msup><mi>p</mi><mo>′</mo></msup></math>, <math display=\"inline\"><msup><mi>p</mi><mo>″</mo></msup></math> y <math display=\"inline\"><msup><mi>p</mi><mo>‴</mo></msup></math> son débiles; se conserva la secuencia visible, y se distingue de las relaciones demostradas en el texto.",
      "En la demostración del corolario aparece <math display=\"inline\"><mrow><mover><mrow><mi>r</mi><mi>s</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>r</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>p</mi><mi>s</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>; geométricamente, la suma directa depende de la orientación elegida para los vectores."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La proposición afirma la unicidad del subespacio director <math display=\"inline\"><mi>W</mi></math> de un subespacio afín no vacío.",
      "Con la convención <math display=\"inline\"><mrow><mover><mrow><mi>a</mi><mi>b</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>b</mi><mo>−</mo><mi>a</mi></mrow></math>, se cumple exactamente <math display=\"inline\"><mrow><mover><mrow><mi>r</mi><mi>s</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>r</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>p</mi><mi>s</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>−</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>s</mi><mo>−</mo><mi>r</mi></mrow></math>."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación matemática"
    },
    {
     "mota": "testua",
     "html": "La equivalencia <math display=\"inline\"><mrow><mi>p</mi><mo>+</mo><msub><mi>W</mi><mn>1</mn></msub><mo>=</mo><mi>q</mi><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub></mrow></math> si y solo si <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>=</mo><msub><mi>W</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>q</mi><mo>∈</mo><mi>p</mi><mo>+</mo><msub><mi>W</mi><mn>1</mn></msub></mrow></math> es correcta. También son correctas la clausura de las diferencias de puntos en <math display=\"inline\"><mi>W</mi></math> y la invariancia respecto del cambio del punto base dentro de <math display=\"inline\"><mi>S</mi></math>."
    }
   ]
  },
  {
   "id": "a41",
   "maila": 2,
   "izenburua": "0034 - IMG_2026_07_28_02_16_09S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Origen"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_16_09S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>teoria_y_ejercicio_manuscrito</code>.",
      "<strong>Tema validado:</strong> <code>interseccion_paralelismo_y_posicion_de_subespacios_afines</code>.",
      "<strong>Continuidad:</strong> continuación de 0033; páginas 66–67 del manuscrito."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal, maquetada"
    },
    {
     "mota": "testua",
     "html": "<strong>Página izquierda (66).</strong> Encabezado: &quot;2013/2/19 — ÁLGEBRA&quot;."
    },
    {
     "mota": "testua",
     "html": "<em>(en azul: &lt;2.17&gt;)</em>"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">(en el recuadro) TIPOS DE SUBESPACIOS AFINES / clases prácticas\n<em>(lectura dudosa)</em></em>"
    },
    {
     "mota": "testua",
     "html": "Ejemplos:"
    },
    {
     "mota": "testua",
     "html": "(1) Si <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mn>0</mn></mrow></math>, es decir, si <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mi>p</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. PUNTO ÚNICO / punto: modelo <em>(ilegible)</em>. <br>(2) Si <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mn>1</mn><mo>⇒</mo><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>: recta afín / línea afín. \\"
    },
    {
     "mota": "testua",
     "html": "<em>(en el margen: forma paramétrica <em>(ilegible)</em>; forma vectorial)</em>"
    },
    {
     "mota": "testua",
     "html": "\\"
    },
    {
     "mota": "testua",
     "html": "<em>(línea horizontal pequeña, con el rótulo “recta vectorial”)</em>"
    },
    {
     "mota": "testua",
     "html": "<br>Si <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mn>2</mn><mo>⇒</mo><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>: plano afín / plano afín."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math>: hiperplano vectorial / hiperplano afín.",
      "Si <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mi>n</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>n</mi></mrow></math>: <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>; <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "(3) Si <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>…</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el punto del subespacio afín <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi></mrow></math> será el origen, y serán iguales a los del subespacio vectorial <math display=\"inline\"><mi>W</mi></math> <em>(ilegible)</em>: “informalmente”."
    },
    {
     "mota": "testua",
     "html": "<em>(dibujo: ejes, recta <math display=\"inline\"><mi>W</mi></math> por el origen, punto <math display=\"inline\"><mi>p</mi></math> y <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi></mrow></math>)</em>"
    },
    {
     "mota": "testua",
     "html": "<strong>Página derecha (67).</strong> Encabezado: &quot;2013/2/20 — ÁLGEBRA — CLASE PRÁCTICA&quot;."
    },
    {
     "mota": "testua",
     "html": "Existen un subespacio afín <math display=\"inline\"><mrow><mi>S</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> <math display=\"inline\"><mo>⇔</mo></math> un punto <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> (se puede tomar cualquier punto de <math display=\"inline\"><mi>S</mi></math>) y <math display=\"inline\"><mover><mi>S</mi><mo accent=\"true\">→</mo></mover></math>, subespacio vectorial de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> (la dirección de <math display=\"inline\"><mi>S</mi></math>), tales que <math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>q</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>:</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Proposición. <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>; <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>,</mo><msub><mi>S</mi><mn>2</mn></msub><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> subespacios afines; <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>,</mo><msub><mi>W</mi><mn>2</mn></msub><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> sus direcciones. Entonces: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub><mo>⇒</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><msub><mi>W</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>W</mi><mn>2</mn></msub><mo>⇒</mo><mi>p</mi><mo>+</mo><msub><mi>W</mi><mn>1</mn></msub><mo>⊆</mo><mi>p</mi><mo>+</mo><msub><mi>W</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(1) Demostración. Hip.: <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>. <math display=\"block\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>∈</mo><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> <math display=\"block\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> Tomar <math display=\"inline\"><mrow><mi>v</mi><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⇒</mo><mi>q</mi><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><mi>v</mi><mo>∈</mo><msub><mi>S</mi><mn>1</mn></msub></mrow></math>, <math display=\"block\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub><mo>⇒</mo><mi>q</mi><mo>∈</mo><msub><mi>S</mi><mn>2</mn></msub><mo>⇔</mo><mover><mrow><msub><mi>p</mi><mn>1</mn></msub><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> <math display=\"block\"><mrow><mover><mrow><msub><mi>p</mi><mn>1</mn></msub><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>v</mi><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> Por tanto, <math display=\"inline\"><mrow><mi>v</mi><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⇒</mo><mi>v</mi><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Muchos rótulos en euskera de la página 66 son parcialmente legibles; no se traducen ni se sustituyen.",
      "El texto posterior a <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>…</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> está borroso; solo se conserva lo visible."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Los casos de dimensión corresponden al punto, la recta afín, el plano afín, el hiperplano y el espacio total.",
      "En la demostración de la inclusión, se elige el mismo punto base (<math display=\"inline\"><msub><mi>p</mi><mn>1</mn></msub></math>) para los dos subespacios, porque <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>∈</mo><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación matemática"
    },
    {
     "mota": "testua",
     "html": "La clasificación por dimensión y las dos implicaciones de la inclusión son correctas. La demostración de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> queda completa al notar que <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>1</mn></msub><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>v</mi></mrow></math>; por tanto, <math display=\"inline\"><mrow><mi>v</mi><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>."
    }
   ]
  },
  {
   "id": "a42",
   "maila": 2,
   "izenburua": "0035 - IMG_2026_07_28_02_16_14S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Origen"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_16_14S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>teoria_y_ejercicio_manuscrito</code>.",
      "<strong>Tema validado:</strong> <code>coordenadas_afines_y_representacion_parametrica</code>.",
      "<strong>Continuidad:</strong> continuación de 0034; páginas 68–69 del manuscrito."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal, maquetada"
    },
    {
     "mota": "testua",
     "html": "<strong>Página izquierda (68).</strong> Encabezado: &quot;2013/2/20 — ÁLGEBRA — “CLASE PRÁCTICA”&quot;."
    },
    {
     "mota": "testua",
     "html": "(2) Demostración: hipótesis, <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>W</mi><mn>2</mn></msub></mrow></math>. Tesis: <math display=\"inline\"><mrow><mi>p</mi><mo>+</mo><msub><mi>W</mi><mn>1</mn></msub><mo>⊆</mo><mi>p</mi><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub></mrow></math>. <math display=\"block\"><mrow><mi>q</mi><mo>∈</mo><mi>p</mi><mo>+</mo><msub><mi>W</mi><mn>1</mn></msub><mo>⇒</mo><mi>q</mi><mo>∈</mo><mi>p</mi><mo>+</mo><msub><mi>W</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> <math display=\"block\"><mrow><mi>q</mi><mo>∈</mo><mi>p</mi><mo>+</mo><msub><mi>W</mi><mn>1</mn></msub><mo>⇔</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mi>W</mi><mn>1</mn></msub><mo>→</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mi>W</mi><mn>2</mn></msub></mrow></math> <math display=\"block\"><mrow><mo>⇒</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mi>W</mi><mn>2</mn></msub><mo>⇔</mo><mi>q</mi><mo>∈</mo><mi>p</mi><mo>+</mo><msub><mi>W</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(marca)</em>"
    },
    {
     "mota": "testua",
     "html": "\\"
    },
    {
     "mota": "testua",
     "html": "<em>(en rojo:)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>q</mi><mo>∈</mo><mi>S</mi><mo>⇔</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">→</mo></mover></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "COROLARIO. <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>,</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>, subespacios afines de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>. Entonces: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub><mo>⇒</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub><mo>⇒</mo><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><msub><mi>S</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Demostración (1): <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub><mo>→</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>. <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(en verde, al pie de la página:)</em>"
    },
    {
     "mota": "testua",
     "html": "<br><math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>,</mo><msub><mi>W</mi><mn>2</mn></msub><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> subespacios vectoriales."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>W</mi><mn>2</mn></msub><mo>⇒</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>W</mi><mn>1</mn></msub><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>W</mi><mn>2</mn></msub></mrow></math>.",
      "<math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>W</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>W</mi><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>W</mi><mn>2</mn></msub><mo>⇒</mo><msub><mi>W</mi><mn>1</mn></msub><mo>=</mo><msub><mi>W</mi><mn>2</mn></msub></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Página derecha (69).</strong>"
    },
    {
     "mota": "testua",
     "html": "(2) Demostración. <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub><mo>⇒</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>. <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub><mo>⇒</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>⇒</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> Tomar <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>; por tanto <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>∈</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>, y por tanto <math display=\"block\"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mi>S</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(marca)</em>"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">(en el recuadro) 7.3 Subespacios afines: posición relativa.</em>"
    },
    {
     "mota": "testua",
     "html": "\\"
    },
    {
     "mota": "testua",
     "html": "<em>(en azul: PRIMERA OPCIÓN; en rojo: CORTARSE)</em>"
    },
    {
     "mota": "testua",
     "html": "\\"
    },
    {
     "mota": "testua",
     "html": "<em>(en rojo, entre paréntesis: ¿NO MÁS ENTRENAMIENTO?)</em>"
    },
    {
     "mota": "testua",
     "html": "PROPOSICIÓN. <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mi>p</mi><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mi>q</mi><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>, subespacios afines de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>. Entonces:"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">(en rojo, en el recuadro)\n<math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>≠</mo><mi>∅</mi><mo>⇔</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>.</em>"
    },
    {
     "mota": "testua",
     "html": "Demostración: <br>Si <math display=\"inline\"><mo>⇒</mo></math> <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>≠</mo><mi>∅</mi></mrow></math>, entonces existe <math display=\"inline\"><mrow><mi>u</mi><mo>∈</mo><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math> <math display=\"inline\"><mo>⇒</mo></math> <math display=\"block\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mi>u</mi><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mi>u</mi><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>p</mi><mi>u</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>u</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(dibujo: triángulo de los puntos <math display=\"inline\"><mi>p</mi></math>, <math display=\"inline\"><mi>q</mi></math> y <math display=\"inline\"><mi>u</mi></math>; segmento rojo <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math>;\nsegmento azul <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math>; <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>p</mi><mi>u</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>u</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>)</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "El subtítulo en euskera de <code>7.3</code> se lee <code>kokapen erlatiboa</code>; el trazo es débil.",
      "La demostración de la proposición <code>7.3</code> continúa en la imagen siguiente."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "En el corolario <code>(2)</code>, la igualdad de dimensiones fuerza la igualdad de direcciones y, al compartir <math display=\"inline\"><msub><mi>p</mi><mn>1</mn></msub></math>, la igualdad de los subespacios afines.",
      "La Proposición <code>7.3</code> separa la condición de intersección del desarrollo de su demostración; la implicación que continúa en <code>0036</code> no se completa aquí."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación matemática"
    },
    {
     "mota": "testua",
     "html": "Las consecuencias del corolario son correctas en dimensión finita. En la primera implicación de la Proposición <code>7.3</code>, si <math display=\"inline\"><mrow><mi>u</mi><mo>∈</mo><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>, entonces <math display=\"inline\"><mover><mrow><mi>p</mi><mi>u</mi></mrow><mo accent=\"true\">→</mo></mover></math> y <math display=\"inline\"><mover><mrow><mi>u</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></math> pertenecen a las direcciones correspondientes; por tanto, <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>p</mi><mi>u</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>u</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math> pertenece a su suma."
    }
   ]
  },
  {
   "id": "a43",
   "maila": 2,
   "izenburua": "0036 - IMG_2026_07_28_02_16_17S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Origen"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_16_17S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>teoria_manuscrita</code>.",
      "<strong>Tema validado:</strong> <code>aplicaciones_afines_parte_lineal_y_traslacion</code>.",
      "<strong>Continuidad:</strong> continuación de 0035; páginas 70–71 del manuscrito."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal, maquetada"
    },
    {
     "mota": "testua",
     "html": "<strong>Página izquierda (70).</strong> Encabezado: &quot;2013/2/20 — ÁLGEBRA&quot;."
    },
    {
     "mota": "testua",
     "html": "<em>(en azul: “Finalmente digamos ahora”, lectura dudosa)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>→</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> Lo que queremos: el punto <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>p</mi><mo>+</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></math>. <math display=\"block\"><mrow><mover><mrow><mi>p</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><msub><mi>v</mi><mn>1</mn></msub><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⇒</mo><mi>a</mi><mo>∈</mo><msub><mi>S</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math> Hay que ver que <math display=\"inline\"><mrow><mi>a</mi><mo>∈</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math> también lo es. Entonces: <math display=\"block\"><mrow><mover><mrow><mi>q</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>q</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>p</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>−</mi><msub><mi>v</mi><mn>1</mn></msub><mo>−</mo><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>v</mi><mn>2</mn></msub><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>⇒</mo><mi>a</mi><mo>∈</mo><msub><mi>S</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> <math display=\"block\"><mrow><mi>a</mi><mo>∈</mo><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>⇒</mo><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>≠</mo><mi>∅</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "DEFINICIÓN. Sean <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> subespacios afines de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>. <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> son <em class=\"j-nab\">(recuadro rojo) PARALELOS</em> si las direcciones tienen alguna relación de particularidad <em>(lectura dudosa)</em>."
    },
    {
     "mota": "testua",
     "html": "<em>(esquema de las tres opciones:)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(en rojo, triángulo:)</em>"
    },
    {
     "mota": "testua",
     "html": "<br>paralelo puntual (uno no toca al otro) <br>paralelismo (sentido <em>(ilegible)</em>). \\"
    },
    {
     "mota": "testua",
     "html": "<em>(dibujo azul 1: <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mi>∅</mi></mrow></math>; direcciones\ncon inclusión; rótulo “paralelo parcial”)</em>"
    },
    {
     "mota": "testua",
     "html": "\\"
    },
    {
     "mota": "testua",
     "html": "<em>(dibujo azul 2: <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mi>∅</mi></mrow></math>; <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math>\nparalelos; rótulo “paralelos”)</em>"
    },
    {
     "mota": "testua",
     "html": "\\"
    },
    {
     "mota": "testua",
     "html": "<em>(dibujo azul 3: <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>; <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> dibujado dentro de\n<math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math>)</em>"
    },
    {
     "mota": "testua",
     "html": "<strong>Página derecha (71).</strong>"
    },
    {
     "mota": "testua",
     "html": "Proposición. Si <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> son subespacios afines paralelos de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>&lt;</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bada, orduan </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mi>∅</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ala </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bada, </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mi>∅</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ala </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><msub><mi>S</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(el resto de la página no tiene contenido manuscrito visible)</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La primera demostración de la página 70 está abreviada, pero las pertenencias <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>−</mi><msub><mi>v</mi><mn>2</mn></msub><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math> y el punto <math display=\"inline\"><mi>a</mi></math> son legibles.",
      "La definición exacta de “paralelos” está cubierta por un recuadro rojo y notas superpuestas.",
      "Las notas rojas distinguen dos usos de “paralelo”, pero su terminología completa no es legible."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La proposición final expresa la dicotomía habitual para subespacios afines paralelos: o son disjuntos, o el de menor dimensión está contenido en el otro; con la misma dimensión, son disjuntos o iguales."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación matemática"
    },
    {
     "mota": "testua",
     "html": "Las dos consecuencias de la página 71 son correctas, definiendo el paralelismo por inclusión de direcciones. La deducción inicial de la página 70 no puede auditarse por completo, debido a las abreviaturas indicadas y a las lecturas dudosas."
    }
   ]
  },
  {
   "id": "a44",
   "maila": 2,
   "izenburua": "0037 - IMG_2026_07_28_02_16_20S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Origen"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_16_20S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>teoria_y_ejercicio_manuscrito</code>.",
      "<strong>Tema validado:</strong> <code>matriz_de_aplicacion_afin_y_cambio_de_referencia</code>.",
      "<strong>Continuidad:</strong> continuación de 0036, aunque el contenido visible retoma un ejercicio euclídeo; páginas 72–73 del manuscrito."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal, maquetada"
    },
    {
     "mota": "testua",
     "html": "<strong>Página izquierda (72).</strong> Encabezado: &quot;2013/3/20 — ÁLGEBRA — NEWTON&quot;."
    },
    {
     "mota": "testua",
     "html": "Dado el producto escalar de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo>,</mo><msub><mi>y</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>y</mi><mn>3</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><msub><mi>y</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><msub><mi>y</mi><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math> 1) Hallar una base <math display=\"inline\"><mi>B</mi></math> ortonormal respecto de ese producto. <br>2) <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: ¿es una isometría respecto de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>? <br>3) Hallar la matriz asociada a <math display=\"inline\"><mi>f</mi></math> en <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> y en la base <math display=\"inline\"><mi>B</mi></math>. <br>4) Si <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es ortogonal, ¿está en contradicción con la suposición del enunciado?"
    },
    {
     "mota": "testua",
     "html": "<em>(lectura dudosa)</em>"
    },
    {
     "mota": "testua",
     "html": "1) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo>,</mo><msub><mi>y</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo>,</mo><msub><mi>y</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>2</mn></msub><mo>,</mo><msub><mi>e</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. <br><math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><msub><mi>w</mi><mn>2</mn></msub><mo>,</mo><msub><mi>w</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> base ortogonal: <math display=\"block\"><mrow><msub><mi>w</mi><mn>1</mn></msub><mo>=</mo><msub><mi>e</mi><mn>1</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>w</mi><mn>2</mn></msub><mo>=</mo><msub><mi>e</mi><mn>2</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>w</mi><mn>3</mn></msub><mo>=</mo><msub><mi>e</mi><mn>3</mn></msub><mo>+</mo><mi>λ</mi><msub><mi>e</mi><mn>1</mn></msub><mo>+</mo><mi>β</mi><msub><mi>e</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <img class=\"formula formula-d\" src=\"../media/formulak/81e01187b636dd4d.svg\" alt=\"chevron.l w_1, w_3 chevron.r = -1 + lambda = 0 ==&gt; #text[#emph[(laukian)]] lambda = 1.\" style=\"width:22.010em;height:1.381em\" loading=\"lazy\"> <img class=\"formula formula-d\" src=\"../media/formulak/ca7b3abaa70399b5.svg\" alt=\"chevron.l w_2, w_3 chevron.r = 0 + lambda (0) + beta (1) ==&gt; #text[#emph[(laukian)]] beta = 0.\" style=\"width:24.080em;height:1.381em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<strong>Página derecha (73).</strong>"
    },
    {
     "mota": "testua",
     "html": "<em>(en azul, subrayado:)</em>"
    },
    {
     "mota": "testua",
     "html": "DEFINICIÓN <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mi>w</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mi>w</mi><mn>2</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>e</mi><mn>2</mn></msub><mo>,</mo><msub><mi>e</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mi>w</mi><mn>3</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(con una llave:)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mi>w</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mi>w</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mn>1</mn></mrow></math>: base ortonormal."
    },
    {
     "mota": "testua",
     "html": "2) <math display=\"inline\"><mi>f</mi></math> es una isometría respecto de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> <math display=\"inline\"><mo>⇔</mo></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> <math display=\"inline\"><mo>⇔</mo></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>. \\"
    },
    {
     "mota": "testua",
     "html": "<em>(en rojo, subrayado:)</em>"
    },
    {
     "mota": "testua",
     "html": "Como la base canónica NO es ortonormal, no se puede comprobar la isometría con la matriz asociada de <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math>."
    },
    {
     "mota": "testua",
     "html": "<em>(en verde, desarrollo:)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">(en verde, en el recuadro) <math display=\"inline\"><mrow><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup></mrow></math>.</em>"
    },
    {
     "mota": "testua",
     "html": "<em>(en azul, desarrollo:)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup></mrow></math> <math display=\"block\"><mrow><mo>=</mo><msub><mi>x</mi><mn>3</mn></msub><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><msub><mi>x</mi><mn>3</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">(en azul, en el recuadro) <math display=\"inline\"><mrow><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup></mrow></math>.</em>"
    },
    {
     "mota": "testua",
     "html": "<em>(en azul:)</em>"
    },
    {
     "mota": "testua",
     "html": "IGUALES."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "El cuarto enunciado de la página 72 no se lee completo.",
      "La fecha parece <code>2013/3/20</code>, aunque las fotografías vecinas muestran febrero; se ha conservado lo escrito."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La base obtenida es <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>2</mn></msub><mo>,</mo><msub><mi>e</mi><mn>1</mn></msub><mo>+</mo><msub><mi>e</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>.",
      "Aunque la matriz en una base no ortonormal no se demuestre ortogonal con la condición habitual <math display=\"inline\"><mrow><msup><mi>A</mi><mi>t</mi></msup><mi>A</mi><mo>=</mo><mi>I</mi></mrow></math>, la isometría puede comprobarse mediante <math display=\"inline\"><mrow><msup><mi>A</mi><mi>t</mi></msup><mi>G</mi><mi>A</mi><mo>=</mo><mi>G</mi></mrow></math>, sí."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación matemática"
    },
    {
     "mota": "testua",
     "html": "La matriz de Gram es definida positiva y la base construida es ortonormal respecto del producto dado. El desarrollo final confirma que <math display=\"inline\"><mi>f</mi></math> conserva la forma cuadrática; por polarización real, conserva el producto escalar y es una isometría."
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "0038 - IMG_2026_07_28_02_16_25S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Procedencia"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_16_25S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>teoria_y_ejercicio_manuscrito</code>.",
      "<strong>Tema validado:</strong> <code>transformaciones_afines_subespacios_y_puntos_fijos</code>.",
      "<strong>Continuidad:</strong> cierre clasificado de B06, aunque continúa el ejercicio euclídeo de 0037; páginas manuscritas 74–75."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal"
    },
    {
     "mota": "testua",
     "html": "<code></code><code>text [página izquierda, 74] 2013/2/20                         ÁLGEBRA NEWTON [azul] La base ortonormal era B={w_1=e_1, w_2=e_2, w_3=e_1+e_3}. 3) f(x_1,x_2,x_3)=(x_2+x_3,-x_1+x_3,x_2). (y_1,y_2,y_3)=(x_1,x_2,x_3)(0 -1 0; 1 0 1; 1 1 0) (y_1,y_2,y_3)^t=(0 1 1; -1 0 1; 0 1 0)(x_1,x_2,x_3)^t M_Bc(f)=(0 1 1; -1 0 1; 0 1 0).</code>"
    },
    {
     "mota": "testua",
     "html": "Para hallar M_B(f): f(w_1)=f(e_1)=-e_2=-w_2;       C_B(f(w_1))=(0,-1,0) f(w_2)=f(e_2)=e_1+e_3=w_3;     C_B(f(w_2))=(0,0,1) f(w_3)=f(e_1+e_3)=[lectura dudosa: e_1]; C_B(f(w_3))=(1,0,0)"
    },
    {
     "mota": "testua",
     "html": "C_B(x)=(x_1&#x27;,x_2&#x27;,x_3&#x27;); C_B(f(x))=(y_1&#x27;,y_2&#x27;,y_3&#x27;). (y_1&#x27;,y_2&#x27;,y_3&#x27;)^t=(0 0 1; -1 0 0; 0 1 0)(x_1&#x27;,x_2&#x27;,x_3&#x27;)^t. M_B(f)=(0 0 1; -1 0 0; 0 1 0)."
    },
    {
     "mota": "testua",
     "html": "[verde] P=(0 1 0;0 0 1;1 0 0); P^t=(0 0 1;1 0 0;0 1 0); P P^t=I -&gt; M_B(f) es ortogonal."
    },
    {
     "mota": "testua",
     "html": "Q=(0 -1 0;1 0 1;1 1 0), Q^t=(0 1 1;-1 0 1;0 1 0), Q Q^t≠I. Q=M_Bc(f) no es ortogonal. [rojo] Al cambiar la base, dado que la base canónica no tiene por qué ser ortogonal."
    },
    {
     "mota": "testua",
     "html": "[página derecha, 75] Supongamos que en el mismo producto escalar tenemos el endomorfismo f, tal que M_Bc(f)=(0 1 0; 0 0 1; 1 0 0). ¿f es isometría de R^3 respecto a &lt;,&gt;?"
    },
    {
     "mota": "testua",
     "html": "Como la base canónica no es ortonormal, aunque M_Bc(f) sea ortogonal, NO significa que f sea una isometría respecto a ese &lt;,&gt;."
    },
    {
     "mota": "testua",
     "html": "f isometría &lt;=&gt; &lt;x,x&gt;=&lt;f(x),f(x)&gt; para todo x∈R^3. &lt;x,x&gt;=(x_1,x_2,x_3)(1 0 -1; 0 1 0; -1 0 2)(x_1,x_2,x_3)^t =x_1^2+x_2^2-2x_1x_3+2x_3^2."
    },
    {
     "mota": "testua",
     "html": "f(x_1,x_2,x_3)=(x_2,x_3,x_1). &lt;f(x),f(x)&gt;=(x_2,x_3,x_1)(1 0 -1; 0 1 0; -1 0 2)(x_2,x_3,x_1)^t =(x_2-x_1,x_3,-x_2+2x_1)(x_2,x_3,x_1)^t =x_2^2-x_1x_2+x_3^2-x_2x_1+2x_1^2 =2x_1^2+x_2^2+x_3^2-2x_1x_2. [verde, subrayado] SON DISTINTOS! <code></code><code></code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La imagen de <code>w_3</code> se ve muy tenue; la columna de coordenadas <code>(1,0,0)</code> es más clara que la igualdad anterior.",
      "Las letras <code>P</code> y <code>Q</code> pueden estar intercambiadas en las anotaciones verdes.",
      "En la página 75, la matriz cíclica y las dos formas cuadráticas son legibles; la frase introductoria tiene algunos trazos tenues, pero su sentido literal queda completo."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La matriz en la base ortonormal <code>B</code> se forma con las tres columnas de coordenadas visibles.",
      "Que la matriz canónica no sea ortogonal no contradice que <code>f</code> sea isometría, porque la base canónica no es ortonormal para este producto.",
      "En el segundo endomorfismo de la página 75 ocurre la advertencia recíproca: que su matriz canónica sea ortogonal no basta para ser isometría respecto al producto no canónico."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Comprobación matemática"
    },
    {
     "mota": "testua",
     "html": "La matriz <code>M_B(f)</code> escrita es una matriz de permutación con signo y satisface <code>M_B(f)^t M_B(f)=I</code>. La matriz canónica debe satisfacer <code>A^t G A=G</code>, no necesariamente <code>A^tA=I</code>; esto coincide con la advertencia manuscrita. Para el segundo endomorfismo de la página 75, las dos formas cuadráticas escritas son distintas, por lo que no es una isometría del producto dado."
    }
   ]
  },
  {
   "id": "a46",
   "maila": 2,
   "izenburua": "0039 - IMG_2026_07_28_02_16_29S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Procedencia"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_16_29S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>ejercicio_resuelto_manuscrito</code>.",
      "<strong>Tema validado:</strong> <code>base_ortonormal_matriz_de_Gram_y_operador_simetrico</code>.",
      "<strong>Continuidad:</strong> retoma B05; páginas manuscritas 76–77."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal"
    },
    {
     "mota": "testua",
     "html": "<code></code><code>text [página izquierda, 76] 2013/2/20                         ÁLGEBRA NEWTON En R^3, producto escalar &lt;,&gt;, respecto del cual B={(-1,0,1),(0,-1,-1),(1,-1,0)} es base ortonormal. f∈End(R^3), cuya matriz asociada (por columnas) en la base canónica es A=(1 2 2; -2 -1 -1; -2 -1 -1) [lectura dudosa]. 1) Hallar M_Bc(&lt;,&gt;). 2) ¿Es f isometría respecto a &lt;,&gt;? ¿Es autoadjunto respecto a &lt;,&gt;?</code>"
    },
    {
     "mota": "testua",
     "html": "B={w_1,w_2,w_3}; w_1=-e_1+e_3; w_2=-e_2-e_3; w_3=e_1-e_2. B_c={e_1,e_2,e_3}. Como es ortonormal M_B(&lt;,&gt;)=I_3. M_Bc(&lt;,&gt;)=(&lt;e_1,e_1&gt; &lt;e_1,e_2&gt; &lt;e_1,e_3&gt;; &lt;e_2,e_1&gt; &lt;e_2,e_2&gt; &lt;e_2,e_3&gt;; &lt;e_3,e_1&gt; &lt;e_3,e_2&gt; &lt;e_3,e_3&gt;)."
    },
    {
     "mota": "testua",
     "html": "w_1=-e_1+e_3 =&gt; e_1=-w_1+e_3 w_1+w_2=-e_1-e_2 =&gt; e_2=-w_1-w_2-e_1 w_3+w_1=-e_2+e_3 =&gt; e_3=[ilegible]. C_B(e_1)=(-1,-1,1); C_B(e_2)=(-1,-1,0); C_B(e_3)=(0,-1,1) [lecturas dudosas]. &lt;e_1,e_1&gt;=3; &lt;e_1,e_2&gt;=2; &lt;e_1,e_3&gt;=2; &lt;e_2,e_2&gt;=2; &lt;e_2,e_3&gt;=1; &lt;e_3,e_3&gt;=2."
    },
    {
     "mota": "testua",
     "html": "[página derecha, 77] M_Bc(&lt;,&gt;)=(3 2 2; 2 2 1; 2 1 2) ≠ I_3 =&gt; B_c no es ortonormal."
    },
    {
     "mota": "testua",
     "html": "Trabajando en B_c: f isometría &lt;=&gt; &lt;x,x&gt;=&lt;f(x),f(x)&gt; para todo x. f es autoadjunto &lt;=&gt; &lt;f(x),y&gt;=&lt;x,f(y)&gt; para todo x,y. [llave] no son las definiciones [lectura dudosa]."
    },
    {
     "mota": "testua",
     "html": "Trabajando en B ortonormal y A&#x27;=M_B(f): f es isometría &lt;=&gt; A&#x27; es ortogonal. f es autoadjunto &lt;=&gt; A&#x27; es simétrica."
    },
    {
     "mota": "testua",
     "html": "Para hallar A&#x27; necesito C_B(f(w_1)), C_B(f(w_2)), C_B(f(w_3)). f(w_1)=f(-e_1+e_3)=-2e_1+e_2+e_3 =(2w_1+2w_2-2w_3)+(-w_1-w_2)+(-w_2+w_3) =w_1-w_3. (y_1,y_2,y_3)^t=A(-1,0,1)^t. f(w_2)=f(-e_2-e_3)=0 !!!! [rojo] w_2 y f(w_2) no miden lo mismo; por tanto NO es una isometría. f(w_3)=f(e_1-e_2)=2e_1-e_2-e_3=-w_1+w_3."
    },
    {
     "mota": "testua",
     "html": "(y_1&#x27;,y_2&#x27;,y_3&#x27;)^t=A&#x27;(x_1&#x27;,x_2&#x27;,x_3&#x27;)^t A&#x27;=(1 0 -1; 0 0 0; -1 0 1) [azul: no es isometría; sí es endomorfismo autoadjunto]. <code></code><code></code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La matriz canónica de <code>f</code> está desenfocada; se transcribe la lectura más probable, pero debe cotejarse si se reutiliza.",
      "Varias coordenadas de <code>e_i</code> en <code>B</code> son tenues. La matriz de Gram final es nítida.",
      "El desarrollo de <code>f(w_1)</code> está repasado, pero los tres sumandos y la simplificación <code>w_1-w_3</code> son legibles."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La base <code>B</code> se declara ortonormal para el producto dado, aunque sus vectores no sean ortonormales para el producto canónico.",
      "La conclusión “no es isometría” se justifica ya por el vector no nulo <code>w_2</code> enviado a cero."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Comprobación matemática"
    },
    {
     "mota": "testua",
     "html": "La matriz de Gram escrita es simétrica y positiva definida (sus menores líderes son <code>3</code>, <code>2</code> y <code>1</code>). La matriz final <code>A&#x27;</code> es simétrica pero singular; por tanto representa un endomorfismo autoadjunto que no es isometría. Estas conclusiones son coherentes con las notas manuscritas."
    }
   ]
  },
  {
   "id": "a47",
   "maila": 2,
   "izenburua": "0040 - IMG_2026_07_28_02_16_36S.jpg",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Procedencia"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> <code>espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_16_36S.jpg</code>.",
      "<strong>Asignatura:</strong> <code>algebra_lineal_avanzada</code>.",
      "<strong>Función documental:</strong> <code>teoria_y_ejercicio_manuscrito</code>.",
      "<strong>Tema validado:</strong> <code>operador_normal_autovalores_y_estimaciones_en_base_ortonormal</code>.",
      "<strong>Continuidad:</strong> continúa hacia la siguiente imagen; páginas manuscritas 78–79."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transcripción literal"
    },
    {
     "mota": "testua",
     "html": "<code></code><code>text [página izquierda, 78] 2013/2/20                         ÁLGEBRA NEWTON 3) Si f es autoadjunto, puedo hallar una base ortonormal de vectores propios. Trabajando en base B={w_1,w_2,w_3}: C_B(x)=(x_1&#x27;,x_2&#x27;,x_3&#x27;); C_B(f(x))=(y_1&#x27;,y_2&#x27;,y_3&#x27;). (y_1&#x27;,y_2&#x27;,y_3&#x27;)^t=A&#x27;(x_1&#x27;,x_2&#x27;,x_3&#x27;)^t, A&#x27;=(1 0 -1; 0 0 0; -1 0 1).</code>"
    },
    {
     "mota": "testua",
     "html": "Autovalores de f: |A&#x27;-λI|=|1-λ 0 -1; 0 -λ 0; -1 0 1-λ| =-λ[(1-λ)^2-1]=-λ(λ^2-2λ)=-λ^2(λ-2). λ=0, m(0)=2; λ=2, m(2)=1."
    },
    {
     "mota": "testua",
     "html": "V(0)={x / C_B(x)=(x_1&#x27;,x_2&#x27;,x_3&#x27;) y f(x)=0} x=x_1&#x27;w_1+x_2&#x27;w_2+x_3&#x27;w_3; x_1&#x27;-x_3&#x27;=0. Base de V(0): {v_1=w_1+w_3, v_2=w_2} [lectura dudosa]. Como v_1·v_2=0, ||v_1||^2=&lt;w_1+w_3,w_1+w_3&gt;=2; ||v_2||=||w_2||=1."
    },
    {
     "mota": "testua",
     "html": "[página derecha, 79] Base ortonormal de V(0): {v_1&#x27;=1/sqrt(2)(w_1+w_3), v_2&#x27;=w_2}."
    },
    {
     "mota": "testua",
     "html": "Lo da el resultado teórico."
    },
    {
     "mota": "testua",
     "html": "• Sea E un espacio euclídeo y f un endomorfismo de E autoadjunto. Demostrar que si para todo valor propio de f, λ_i, se cumple |λ_i|≤1, =&gt; ||f(v)||≤||v|| para todo v∈E."
    },
    {
     "mota": "testua",
     "html": "Como f es autoadjunto, existe una base ortonormal B={v_1,...,v_n} de vectores propios. Para todo v∈E, v=x_1v_1+...+x_nv_n =&gt; f(v)=λ_1x_1v_1+λ_2x_2v_2+...+λ_nx_nv_n, siendo {λ_1,...,λ_n} los autovalores de f."
    },
    {
     "mota": "testua",
     "html": "Como B es ortonormal, M_B(&lt;,&gt;)=I_n: ||v||^2=&lt;v,v&gt;=x_1^2+...+x_n^2. ||f(v)||^2=&lt;f(v),f(v)&gt;=λ_1^2x_1^2+...+λ_n^2x_n^2. Como |λ_i|≤1 =&gt; |λ_i|^2≤1 =&gt; λ_1^2x_1^2+...+λ_n^2x_n^2≤x_1^2+...+x_n^2 =&gt; ||f(v)||≤||v|| para todo v∈E."
    },
    {
     "mota": "testua",
     "html": "• Sea la familia formada por k vectores un conjunto ortonormal no necesariamente una base, en un espacio euclídeo. Demostrar que para todo v∈V: Σ_(i=1)^k (&lt;v,v_i&gt;)^2 ≤ ||v||^2. <code></code><code></code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "En la base de <code>V(0)</code> el primer vector parece <code>w_1+w_3</code>; la foto deja una sombra sobre el subíndice.",
      "La segunda viñeta termina en el enunciado de la desigualdad; no hay demostración visible en esta imagen."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La frase inicial enuncia la dirección del teorema espectral escrita en el manuscrito: de autoadjunto a existencia de una base ortonormal de vectores propios.",
      "La última desigualdad es la desigualdad de Bessel."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Comprobación matemática"
    },
    {
     "mota": "testua",
     "html": "El polinomio característico de <code>A&#x27;</code> y sus multiplicidades son correctos. La base normalizada de <code>V(0)</code> es ortonormal si <code>B</code> lo era. La estimación <code>||f(v)||≤||v||</code> está demostrada correctamente mediante una base ortonormal de autovectores. El último enunciado es correcto, pero su prueba no aparece en el rango."
    },
    {
     "mota": "iturria",
     "proiektua": "_historico/espazio-ontzia/diario landeta 1 nov 2012 alg calc fis general quimi computacion, IMG_2026_07_28_01_07_39S.jpg",
     "xehetasuna": "Cuaderno LANDETA, página 1: transcripción literal autoauditada y verificada matemáticamente del desarrollo manuscrito de espacios vectoriales y aplicaciones lineales",
     "hizkuntza": "es"
    },
    {
     "mota": "iturria",
     "proiektua": "_historico/espazio-ontzia/diario algebra ene 2013, 0021-0040",
     "xehetasuna": "A1_L05: transcripción literal verificada del cuaderno manuscrito de álgebra lineal; correcciones y comprobaciones matemáticas en capas separadas",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "iturria",
     "proiektua": "_historico/espazio-ontzia/diario landeta 2 ene 2013, IMG_2026_07_28_01_42_26S.jpg",
     "xehetasuna": "Cuaderno LANDETA2, páginas 10-11 (material de examen): sistema generador, base y coordenadas — transcripción literal rehecha bajo el contrato v3, verificada matemáticamente",
     "hizkuntza": "es"
    }
   ]
  }
 ]
};
