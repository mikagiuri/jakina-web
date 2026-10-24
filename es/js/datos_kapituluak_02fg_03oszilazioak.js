/* JAKINA · kapitulua «B04A.2 - M17 Oszilazioak eta uhinak» (02fg_03oszilazioak), desde edicion2/kapituluak/02fg_03oszilazioak/02fg_03oszilazioak.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["02fg_03oszilazioak"] = {
 "gakoa": "02fg_03oszilazioak",
 "titulua": "JAKINA - B04A.2 - M17 Oscilaciones y ondas",
 "azala": "B04A.2 - M17 Oscilaciones y ondas",
 "azpititulua": "Etapa II - L1",
 "iturburua": "kapituluak/02fg_03oszilazioak/02fg_03oszilazioak.typ",
 "sarrera": [
  {
   "mota": "modulua",
   "kodea": "M17",
   "izenburua": "Oscilaciones y ondas (primera pasada)",
   "maila": "L1"
  },
  {
   "mota": "helburuak",
   "elementuak": [
    "Reconocer y resolver el movimiento armónico simple.",
    "Usar los parámetros de una onda: amplitud, frecuencia, longitud de onda.",
    "Adquirir una primera intuición de la interferencia y de la resonancia."
   ]
  },
  {
   "mota": "aurrebaldintzak",
   "elementuak": [
    "M16 — Física general: mecánica; M08 — Complejos (fasores)"
   ]
  },
  {
   "mota": "iturria",
   "proiektua": "8 OSZILAZIOAK ETA UHINAK",
   "xehetasuna": "FÍSICA GENERAL, UPV/EHU (Facultad de Ciencia y Tecnología), apuntes de la asignatura 2012-2014; tema 8 (oscilaciones y ondas), la misma fuente que usa M16",
   "hizkuntza": "eu"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Oscilaciones",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota editorial",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este capítulo procede del tema 8 de la asignatura <strong>Física General</strong> de la UPV/EHU (véase la nota inicial del capítulo 1, M16). La Física General se divide en dos cuatrimestres: el primero abarca la mecánica (M16) y se cierra con oscilaciones y ondas (M17); el segundo, el electromagnetismo y la óptica (M18)."
      }
     ]
    }
   ]
  },
  {
   "id": "a2",
   "maila": 1,
   "izenburua": "Movimiento armónico simple",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Muchos sistemas, cuando se alejan de la posición de equilibrio, tienden a volver bajo la acción de una fuerza (o momento) proporcional a la separación y de sentido contrario — la <strong>fuerza recuperadora</strong>. Cuando esa fuerza es directamente proporcional al desplazamiento, se produce un <strong>movimiento armónico simple</strong> (MAS):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>x</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La solución general de esa ecuación diferencial es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mi>A</mi></math> es la <strong>amplitud</strong> (valor máximo de <math display=\"inline\"><mi>x</mi></math>), <math display=\"inline\"><mi>ω</mi></math> la <strong>frecuencia angular</strong> y <math display=\"inline\"><mrow><mi>ω</mi><mi>t</mi><mo>+</mo><mi>ϕ</mi></mrow></math> la <strong>fase instantánea</strong> (<math display=\"inline\"><mi>ϕ</mi></math>, la <strong>fase inicial</strong>). La velocidad y la aceleración se obtienen derivando:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>ϕ</mi><mo>+</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"block\"><mrow><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>A</mi><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>v</mi></math> y <math display=\"inline\"><mi>x</mi></math> están <strong>en cuadratura</strong> (desfase <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>), y <math display=\"inline\"><mi>a</mi></math> y <math display=\"inline\"><mi>x</mi></math> están <strong>en oposición</strong> (desfase <math display=\"inline\"><mi>π</mi></math>). El <strong>periodo</strong> y la <strong>frecuencia</strong>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>ω</mi></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>ν</mi><mo>=</mo><mfrac><mi>ω</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Posición del movimiento armónico simple en función del tiempo,\n    <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (en el caso <math display=\"inline\"><mrow><mi>ϕ</mi><mo>=</mo><mn>0</mn></mrow></math>); se indican la amplitud <math display=\"inline\"><mi>A</mi></math> y el\n  periodo <math display=\"inline\"><mi>T</mi></math>.",
     "src": "../media/irudiak/b9fe880cde05670b.svg",
     "zabalera": 389
    },
    {
     "mota": "testua",
     "html": "Relación entre la posición y la velocidad, sin que aparezca el tiempo de forma explícita:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><msqrt><mrow><msup><mi>A</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Dinámica.</strong> Si sobre una partícula de masa <math display=\"inline\"><mi>m</mi></math> se cumple <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>m</mi><mi>a</mi></mrow></math> y el movimiento es un MAS, entonces <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi></mrow></math>: la fuerza recuperadora es proporcional al desplazamiento y de sentido contrario."
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Muelle lineal",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para una partícula de masa <math display=\"inline\"><mi>m</mi></math> unida a un muelle de constante <math display=\"inline\"><mi>k</mi></math>, la fuerza recuperadora viene dada por la <strong>ley de Hooke</strong>: <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>x</mi></mrow></math> (<math display=\"inline\"><mi>x</mi></math>, alargamiento medido desde la posición de equilibrio). Sustituyendo en la 2.ª ley de Newton,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mi>k</mi><mi>x</mi><mo>=</mo><mi>m</mi><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>x</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>x</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mi>k</mi><mi>m</mi></mfrac><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Coincide con la ecuación del MAS haciendo <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mi>k</mi><mi>/</mi><mi>m</mi></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Péndulo simple",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una masa puntual <math display=\"inline\"><mi>m</mi></math> que cuelga de un hilo de longitud <math display=\"inline\"><mi>L</mi></math> realiza, para ángulos pequeños <math display=\"inline\"><mi>ϕ</mi></math>, un MAS:"
    },
    {
     "mota": "irudia",
     "oina": "Péndulo simple: masa <math display=\"inline\"><mi>m</mi></math> que cuelga de un hilo de longitud <math display=\"inline\"><mi>L</mi></math>,\n    oscilando con un ángulo pequeño <math display=\"inline\"><mi>ϕ</mi></math>.",
     "src": "../media/irudiak/801ffe50733fd85d.svg",
     "zabalera": 120
    },
    {
     "mota": "testua",
     "html": "Tangencialmente, <math display=\"inline\"><mrow><msub><mi>F</mi><mi>τ</mi></msub><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>=</mo><mi>m</mi><msub><mi>a</mi><mi>τ</mi></msub></mrow></math>, y como <math display=\"inline\"><mrow><msub><mi>a</mi><mi>τ</mi></msub><mo>=</mo><mi>L</mi><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>ϕ</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>ϕ</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mi>g</mi><mi>L</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En general <strong>no es armónico</strong> (porque <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mrow></math>), pero para ángulos pequeños <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>≈</mo><mi>ϕ</mi></mrow></math>, y entonces se convierte en un MAS:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mi>g</mi><mi>L</mi></mfrac><mtext mathvariant=\"normal\">  </mtext><mo>→</mo><mtext mathvariant=\"normal\">  </mtext><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>L</mi><mi>g</mi></mfrac></msqrt></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Péndulo físico",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Todo sólido rígido que realiza pequeñas oscilaciones alrededor de un eje que no pasa por el CM (<math display=\"inline\"><mi>I</mi></math>, con <math display=\"inline\"><mi>O</mi></math> el momento de inercia respecto al eje y <math display=\"inline\"><mi>b</mi></math> la distancia entre el CM y el eje) cumple, para ángulos pequeños,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mi>b</mi></mrow><mi>I</mi></mfrac><mtext mathvariant=\"normal\">  </mtext><mo>→</mo><mtext mathvariant=\"normal\">  </mtext><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>I</mi><mrow><mi>m</mi><mi>g</mi><mi>b</mi></mrow></mfrac></msqrt></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como caso particular, se recupera el péndulo simple haciendo <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></math> y <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mi>L</mi></mrow></math>."
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Energía de las oscilaciones armónicas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bajo una fuerza conservativa <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>x</mi></mrow></math>, usando <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><msqrt><mrow><msup><mi>A</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> y <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mi>k</mi><mi>/</mi><mi>m</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mi>k</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>A</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>E</mi><mi>p</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mn>2</mn></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><msub><mi>E</mi><mi>k</mi></msub><mo>+</mo><msub><mi>E</mi><mi>p</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>A</mi><mn>2</mn></msup><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstante </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Energía cinética y potencial en el MAS, en función de <math display=\"inline\"><mi>x</mi></math>: la suma\n    (<math display=\"inline\"><mi>E</mi></math>, línea discontinua) se mantiene constante.",
     "src": "../media/irudiak/534849c14993ffaf.svg",
     "zabalera": 245
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Muelles verticales: origen de la energía potencial"
    },
    {
     "mota": "testua",
     "html": "En un muelle vertical, al colocar una masa y comprimirlo hasta una nueva posición de equilibrio (<math display=\"inline\"><mrow><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mi>m</mi><mi>g</mi><mi>/</mi><mi>k</mi></mrow></math>), si se mide desde el nuevo equilibrio (<math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math>) basta con considerar únicamente la energía potencial elástica:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mi>p</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msubsup><mi>y</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><mi>m</mi><mi>g</mi><msub><mi>y</mi><mn>0</mn></msub><mo>+</mo><munder><munder><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msubsup><mi>y</mi><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><mi>k</mi><msub><mi>y</mi><mn>0</mn></msub><msub><mi>y</mi><mn>1</mn></msub></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> garatuz</mtext></mrow></munder><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msubsup><mi>y</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstante </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El efecto de la gravedad queda &quot;oculto&quot; en una constante en la nueva posición de equilibrio; por eso, también en los muelles verticales basta con escribir solo la energía potencial elástica, si se mide desde la nueva posición de equilibrio."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 1,
   "izenburua": "Oscilaciones amortiguadas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En la realidad, el rozamiento (proporcional a la velocidad, <math display=\"inline\"><mrow><msub><mi>F</mi><mtext mathvariant=\"normal\">indargetzailea</mtext></msub><mo>=</mo><mi>−</mi><mi>λ</mi><mi>v</mi></mrow></math>) absorbe energía y la amplitud va disminuyendo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>x</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>λ</mi><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi>k</mi><mi>x</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>x</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mn>2</mn><mi>γ</mi><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mi>λ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es el <strong>factor de amortiguamiento</strong> y <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> la frecuencia propia del oscilador (sin amortiguamiento). Se distinguen tres regímenes, comparando <math display=\"inline\"><mi>γ</mi></math> y <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Amortiguamiento débil</strong> (<math display=\"inline\"><mrow><mi>γ</mi><mo>&lt;</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>): <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> — sigue oscilando, con una amplitud cada vez menor.",
      "<strong>Sobreamortiguamiento</strong> (<math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>): no oscila, vuelve al equilibrio de forma exponencial, más lentamente.",
      "<strong>Amortiguamiento crítico</strong> (<math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>): vuelve al equilibrio sin oscilar en el menor tiempo posible."
     ]
    },
    {
     "mota": "irudia",
     "oina": "Oscilación con amortiguamiento débil: la amplitud disminuye según la\n  envolvente <math display=\"inline\"><mrow><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup></mrow></math>.",
     "src": "../media/irudiak/b6b80b34bdb13dd5.svg",
     "zabalera": 385
    },
    {
     "mota": "testua",
     "html": "<strong>Con amortiguamiento débil</strong>, la variación que experimenta la amplitud en un periodo es constante: <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>T</mi></mrow></msup></mrow></math>."
    }
   ]
  },
  {
   "id": "a8",
   "maila": 1,
   "izenburua": "Oscilaciones forzadas y resonancia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para mantener en marcha un oscilador amortiguado hay que suministrarle energía externa, por ejemplo mediante una fuerza periódica <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>F</mi><mtext mathvariant=\"normal\">eragilea</mtext></msub><mo>=</mo><msub><mi>F</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>e</mi></msub><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. En régimen estacionario (cuando la energía aportada iguala a la disipada), la amplitud se mantiene constante y depende de <math display=\"inline\"><msub><mi>F</mi><mn>0</mn></msub></math> y de <math display=\"inline\"><msub><mi>ω</mi><mi>e</mi></msub></math>. Cuando <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>e</mi></msub><mo>≈</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> (frecuencia de la fuerza externa próxima a la frecuencia propia del oscilador), se produce la <strong>resonancia</strong>: la mayor amplitud que puede alcanzar el oscilador forzado."
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Tratamiento cuantitativo (ampliación editorial, T3)",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Ampliación editorial (T3, 2026-08-27)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aquí se completa la descripción cualitativa anterior, cerrando la laguna declarada en la cabecera del capítulo. Fuentes: Sears-Zemansky (cap. 14), Alonso-Finn I (cap. 12), Serway (cap. 15)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Añadiendo una fuerza impulsora armónica, la ecuación del movimiento es (con <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>b</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> el parámetro de amortiguamiento y <math display=\"inline\"><mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mi>k</mi><mi>/</mi><mi>m</mi></mrow></math>): <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>β</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>F</mi><mn>0</mn></msub><mi>m</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Una vez extinguido el transitorio (la solución del oscilador amortiguado, apartado anterior), en el régimen estacionario el sistema oscila a la frecuencia <math display=\"inline\"><mi>ω</mi></math> de la fuerza impulsora, no a su frecuencia natural <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>: <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> donde"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>F</mi><mn>0</mn></msub><mi>/</mi><mi>m</mi></mrow><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>β</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>δ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>β</mi><mi>ω</mi></mrow><mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Lectura:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>A</mi><mo>→</mo><msub><mi>F</mi><mn>0</mn></msub><mi>/</mi><mi>k</mi></mrow></math> (deformación estática), <math display=\"inline\"><mrow><mi>δ</mi><mo>→</mo><mn>0</mn></mrow></math> (en fase).",
      "<math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>: <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>F</mi><mn>0</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mi>β</mi><msub><mi>ω</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> — el impulso va siempre a favor de la velocidad, transferencia máxima de energía.",
      "<math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mi>∞</mi></mrow></math>: <math display=\"inline\"><mrow><mi>A</mi><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>δ</mi><mo>→</mo><mi>π</mi></mrow></math> (en oposición de fase: la masa no puede seguirlo)."
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Resonancia</em>"
    },
    {
     "mota": "testua",
     "html": ": el máximo de la amplitud se da a la frecuencia <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>R</mi></msub><mo>=</mo><msqrt><mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msup><mi>β</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> (con amortiguamiento débil, <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>R</mi></msub><mo>≈</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>), y cuanto menor es el amortiguamiento, más alto y más estrecho es el pico. La agudeza del pico la mide el factor de calidad: <math display=\"block\"><mrow><mi>Q</mi><mo>=</mo><mfrac><msub><mi>ω</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>β</mi></mrow></mfrac><mo>,</mo></mrow></math> es, aproximadamente, &quot;el número de oscilaciones antes de perder una energía apreciable&quot;. Los sistemas con <math display=\"inline\"><mi>Q</mi></math> grande (una campana, un buen circuito resonante — véanse los circuitos RLC, tema 11 de 02fg_04, donde aparece el mismo <math display=\"inline\"><mi>Q</mi></math>) solo responden en un intervalo de frecuencias muy estrecho."
    },
    {
     "mota": "irudia",
     "oina": "Curvas de resonancia: cuanto menor es el amortiguamiento, más alto y más estrecho es el pico (<math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mi>β</mi></mrow></math> mayor).",
     "src": "../media/irudiak/f042904d478e2a4f.svg",
     "zabalera": 339
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
       "html": "Suspensión de un coche (<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>300</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg</mtext></mrow></mrow></math> por rueda, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>4</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> N/m</mtext></mrow></mrow></math>): <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt><mo>=</mo><mn>10</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rad/s</mtext></mrow></mrow></math>, es decir, <math display=\"inline\"><mrow><msub><mi>f</mi><mn>0</mn></msub><mo>≈</mo><mn>1.6</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz</mtext></mrow></mrow></math>. Las ondulaciones de la carretera (<math display=\"inline\"><mrow><mi>λ</mi><mo>≈</mo><mn>10</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow></mrow></math>) impulsan justo esa frecuencia a la velocidad <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>λ</mi><mi>f</mi><mo>≈</mo><mn>57</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> km/h</mtext></mrow></mrow></math>: por eso el coche vibra a una velocidad determinada, y por eso hacen falta buenos amortiguadores (aumentar <math display=\"inline\"><mi>β</mi></math>, aplanar el pico)."
      }
     ]
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Ejercicios",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una selección de la lista oficial de ejercicios (2012-2013) del tema 8 (&quot;Oscilaciones&quot;) de la asignatura <strong>Física General</strong> de la UPV/EHU."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sobre una plataforma que vibra con movimiento armónico en un plano horizontal, a razón de dos oscilaciones por segundo, hay una caja. El coeficiente de rozamiento estático entre la caja y la plataforma vale <math display=\"inline\"><mn>0.5</mn></math>. ¿Cuál es la mayor amplitud que pueden tener las oscilaciones para que la caja siga sin deslizar? Si la vibración de la plataforma fuera vertical y su amplitud de <math display=\"inline\"><mn>25</mn></math> mm, ¿cuál sería la mayor frecuencia para que la caja no se separe de la plataforma? <strong>Resultado</strong>: (a) <math display=\"inline\"><mrow><mi>x</mi><mo>≤</mo><mn>0.031</mn></mrow></math> m; (b) <math display=\"inline\"><mrow><msub><mi>ν</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mn>3.16</mn></mrow></math> <math display=\"inline\"><msup><mi>s</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supongamos que el alargamiento en la posición de equilibrio estable de una partícula de masa <math display=\"inline\"><mi>m</mi></math> unida a un muelle colocado verticalmente es <math display=\"inline\"><mi>l</mi></math>. Demuéstrese que, si se perturba el sistema, se produce un movimiento oscilatorio como el de un péndulo simple de longitud <math display=\"inline\"><mi>l</mi></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Obténgase la constante recuperadora equivalente del sistema formado por muelles de constantes recuperadoras <math display=\"inline\"><msub><mi>k</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>k</mi><mn>2</mn></msub></math>, cuando los muelles están asociados en paralelo y en serie. <strong>Resultado</strong>: en paralelo, <math display=\"inline\"><mrow><msub><mi>K</mi><mtext mathvariant=\"normal\">par</mtext></msub><mo>=</mo><msub><mi>k</mi><mn>1</mn></msub><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub></mrow></math>; en serie, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msub><mi>K</mi><mtext mathvariant=\"normal\">ser</mtext></msub><mo>=</mo><mn>1</mn><mi>/</mi><msub><mi>k</mi><mn>1</mn></msub><mo>+</mo><mn>1</mn><mi>/</mi><msub><mi>k</mi><mn>2</mn></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula de <math display=\"inline\"><mn>2</mn></math> kg está en el extremo de un muelle vertical sujeto al suelo. La longitud propia del muelle es <math display=\"inline\"><mn>8</mn></math> cm, pero al colocar la partícula sobre él, la longitud del muelle es <math display=\"inline\"><mn>5</mn></math> cm. Cuando está en la posición de equilibrio, al darle un golpe hacia abajo con un martillo, la velocidad inicial de la partícula es <math display=\"inline\"><mn>0.3</mn></math> m/s. (a) ¿Cuál será la altura máxima que alcanzará la masa? (b) ¿Cuánto tiempo necesita la masa para alcanzar por primera vez la altura máxima? <strong>Resultado</strong>: (a) <math display=\"inline\"><mrow><msub><mi>h</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mn>17</mn></mrow></math> mm; (b) <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0.26</mn></mrow></math> s."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cuando oscila, el periodo de una masa unida a un muelle horizontal es <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>4</mn></mrow></math> s. Si se cuelgan el muelle y la masa verticalmente, y sin oscilar, ¿cuál será el alargamiento que sufrirá el muelle? <strong>Resultado</strong>: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>3.97</mn></mrow></math> m."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una masa puntual de <math display=\"inline\"><mn>40</mn></math> g realiza un movimiento armónico simple de periodo <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0.32</mn></mrow></math> s. Si el valor máximo de la fuerza que origina el movimiento es <math display=\"inline\"><mn>10</mn></math> N, ¿cuál es el valor de la amplitud? <strong>Resultado</strong>: <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>65</mn></mrow></math> cm."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un cuerpo de <math display=\"inline\"><mn>2</mn></math> kg alarga <math display=\"inline\"><mn>10</mn></math> cm un muelle cuando está colgado verticalmente en equilibrio. El cuerpo se une al mismo muelle, pero ahora el sistema se ha colocado horizontalmente sobre una mesa sin rozamiento, con el otro extremo del muelle sujeto a un punto fijo. Se separa <math display=\"inline\"><mn>5</mn></math> cm de la posición de equilibrio y se suelta cuando <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>. (a) Hállense la amplitud <math display=\"inline\"><mi>A</mi></math>, la frecuencia angular, la frecuencia y el periodo. (b) ¿Cuál es la velocidad máxima del cuerpo? <strong>Resultado</strong>: (a) <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>5</mn></mrow></math> cm, <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>1.58</mn></mrow></math> Hz, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0.6347</mn></mrow></math> s; (b) <math display=\"inline\"><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mn>0.495</mn></mrow></math> m/s, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0.158</mn></mrow></math> s."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un anillo de radio <math display=\"inline\"><mi>R</mi></math> y masa <math display=\"inline\"><mi>m</mi></math> se cuelga del punto <math display=\"inline\"><mi>O</mi></math>, realizando pequeñas oscilaciones en el plano vertical. ¿Cuál es el periodo de las oscilaciones? <strong>Resultado</strong>: <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mrow><mn>2</mn><mi>R</mi><mi>/</mi><mi>g</mi></mrow></msqrt></mrow></math> (<math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>2</mn><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El periodo de un péndulo simple vale <math display=\"inline\"><mn>2.5</mn></math> s al realizar oscilaciones pequeñas. En un instante la amplitud de las oscilaciones ha valido <math display=\"inline\"><mrow><mn>2</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. A causa del rozamiento, la amplitud ha ido disminuyendo, tomando el valor <math display=\"inline\"><mrow><mn>1.5</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> tras completarse <math display=\"inline\"><mn>10</mn></math> oscilaciones completas. Obténgase el valor de la constante de amortiguamiento. <strong>Resultado</strong>: <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0.0115</mn></mrow></math> <math display=\"inline\"><msup><mi>s</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Test de autoevaluación",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una selección del cuestionario oficial (Moodle, preguntas de opción múltiple) del tema 8 de la asignatura <strong>Física General</strong> de la UPV/EHU."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un disco uniforme de masa <math display=\"inline\"><mi>M</mi></math> y radio <math display=\"inline\"><mi>R</mi></math> se cuelga de un punto de su perímetro. Si oscila como un péndulo físico, su periodo es:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "etiketak": [
        "a)",
        "b)",
        "c)",
        "d)",
        "e)"
       ],
       "elementuak": [
        "<math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><msqrt><mrow><mi>g</mi><mi>/</mi><mn>3</mn><mi>R</mi></mrow></msqrt></mrow></math>",
        "<math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><msqrt><mrow><mn>3</mn><mi>R</mi><mi>/</mi><mn>2</mn><mi>g</mi></mrow></msqrt></mrow></math>",
        "<math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><msqrt><mrow><mi>g</mi><mi>/</mi><mi>R</mi></mrow></msqrt></mrow></math>",
        "<math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><msqrt><mrow><mn>3</mn><mi>R</mi><mi>/</mi><mi>g</mi></mrow></msqrt></mrow></math>",
        "<math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><msqrt><mrow><mi>g</mi><mi>/</mi><mn>2</mn><mi>R</mi></mrow></msqrt></mrow></math>"
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Respuesta correcta</strong>: (b) — <math display=\"inline\"><mrow><msub><mi>I</mi><mi>O</mi></msub><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> (Steiner: <math display=\"inline\"><mrow><msub><mi>I</mi><mtext mathvariant=\"normal\">MZ</mtext></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> más <math display=\"inline\"><mrow><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>), <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mi>M</mi><mi>g</mi><mi>R</mi><mi>/</mi><msub><mi>I</mi><mi>O</mi></msub><mo>=</mo><mn>2</mn><mi>g</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.\n"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ordénense, de menor a mayor, los periodos de oscilación de los sistemas que aparecen en las figuras:"
      },
      {
       "mota": "irudia",
       "oina": "Tres sistemas oscilantes: (a) y (b) muelles verticales con masas\n    distintas, (c) péndulo simple.",
       "src": "../media/irudiak/c8a40838245fb22e.svg",
       "zabalera": 353
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "etiketak": [
        "a)",
        "b)",
        "c)",
        "d)",
        "e)"
       ],
       "elementuak": [
        "a,c,b",
        "c,a,b",
        "a,b,c",
        "b,a,c",
        "a,b,c"
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Respuesta correcta</strong>: (d) b,a,c — usando <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mrow><mi>m</mi><mi>/</mi><mi>k</mi></mrow></msqrt></mrow></math> (a,b) y <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mrow><mi>L</mi><mi>/</mi><mi>g</mi></mrow></msqrt></mrow></math> (c): <math display=\"inline\"><mrow><msub><mi>T</mi><mi>b</mi></msub><mo>≈</mo><mn>0.5</mn></mrow></math> s <math display=\"inline\"><mrow><mo>&lt;</mo><msub><mi>T</mi><mi>a</mi></msub><mo>≈</mo><mn>1.0</mn></mrow></math> s <math display=\"inline\"><mrow><mo>&lt;</mo><msub><mi>T</mi><mi>c</mi></msub><mo>≈</mo><mn>2.8</mn></mrow></math> s."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La frecuencia de un movimiento armónico simple es <math display=\"inline\"><mrow><mn>2.6</mn><mo>×</mo><msup><mn>10</mn><mn>4</mn></msup></mrow></math> <math display=\"inline\"><msup><mi>s</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>. La oscilación comienza (<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>) cuando el desplazamiento es máximo y vale <math display=\"inline\"><mrow><mn>6.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math> cm. ¿Cuándo pasará la partícula por primera vez por la posición <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>2.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math> cm?"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "etiketak": [
        "a)",
        "b)",
        "c)",
        "d)",
        "e)"
       ],
       "elementuak": [
        "<math display=\"inline\"><mrow><mn>7.1</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow></math> s",
        "<math display=\"inline\"><mrow><mn>1.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup></mrow></math> s",
        "<math display=\"inline\"><mrow><mn>1.1</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math> s",
        "<math display=\"inline\"><mrow><mn>1.1</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></mrow></math> s",
        "<math display=\"inline\"><mrow><mn>4.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math> s"
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Respuesta correcta</strong>: (b)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cuando empujas a un niño en un columpio, ¿qué es lo más eficaz?"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "etiketak": [
        "a)",
        "b)",
        "c)",
        "d)",
        "e)"
       ],
       "elementuak": [
        "Hacer la mayor fuerza posible",
        "Empujar con una fuerza periódica de la mayor frecuencia posible",
        "Empujar con una fuerza igual al peso del niño",
        "Empujar con una fuerza periódica cuyo periodo dependa de la longitud de las cuerdas",
        "Empujar con una fuerza periódica cuyo periodo dependa del peso del niño"
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Respuesta correcta</strong>: (d) — para lograr la resonancia, el periodo de la fuerza externa debe coincidir con el periodo propio del péndulo (<math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mrow><mi>L</mi><mi>/</mi><mi>g</mi></mrow></msqrt></mrow></math>, condicionado por la longitud de las cuerdas)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula oscila siguiendo un movimiento armónico simple. La frecuencia del movimiento es <math display=\"inline\"><mn>10</mn></math> Hz y la amplitud <math display=\"inline\"><mn>5</mn></math> cm. Cuando la partícula pasa por la posición de equilibrio, la aceleración de la partícula es:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "etiketak": [
        "a)",
        "b)",
        "c)",
        "d)",
        "e)"
       ],
       "elementuak": [
        "<math display=\"inline\"><mrow><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup></mrow></math> cm/s²",
        "<math display=\"inline\"><mn>100</mn></math> cm/s²",
        "<math display=\"inline\"><mrow><mn>4.0</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup></mrow></math> cm/s²",
        "<math display=\"inline\"><mn>0</mn></math>",
        "<math display=\"inline\"><mrow><mn>3.2</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup></mrow></math> cm/s²"
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Respuesta correcta</strong>: (d) — <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi></mrow></math>, y como <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> está en la posición de equilibrio, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se ha representado la energía cinética de un cuerpo con movimiento armónico en función del tiempo (con el tiempo expresado en función del periodo). Si el desfase inicial es cero, ¿qué gráfica representa esas condiciones?"
      },
      {
       "mota": "irudia",
       "oina": "Cuatro gráficas candidatas (energía cinética <math display=\"inline\"><mi>K</mi></math>, en función del tiempo <math display=\"inline\"><mrow><mi>t</mi><mi>/</mi><mi>T</mi></mrow></math>):\n    (1) constante, (2) <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>t</mi><mi>/</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (tiende a valores negativos),\n        (3) <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>t</mi><mi>/</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (frecuencia doble y siempre positiva), (4)\n        <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>t</mi><mi>/</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (tiende a valores negativos).",
       "src": "../media/irudiak/dc82681b0cbb87c2.svg",
       "zabalera": 203
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "etiketak": [
        "a)",
        "b)",
        "c)",
        "d)",
        "e)"
       ],
       "elementuak": [
        "4",
        "5",
        "1",
        "2",
        "3"
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Respuesta correcta</strong>: (e) 3 — <math display=\"inline\"><mrow><msub><mi>E</mi><mi>k</mi></msub><mo>∝</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math> cuando <math display=\"inline\"><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup></math> tiene el doble de la frecuencia de <math display=\"inline\"><mi>ω</mi></math>, es decir, un periodo <math display=\"inline\"><mrow><mi>T</mi><mi>/</mi><mn>2</mn></mrow></math>; además es siempre positiva."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una masa de <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>36</mn></mrow></math> kg se une a las dos paredes mediante muelles de constantes <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn></mrow></math> N/m y <math display=\"inline\"><mrow><msub><mi>k</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn></mrow></math> N/m. Tras desplazarla de la posición de equilibrio hacia los lados, ¿cuál será el periodo de sus oscilaciones?"
      },
      {
       "mota": "irudia",
       "oina": "Masa unida a las dos paredes mediante dos muelles: el sistema\n    equivalente es un único muelle combinado en paralelo.",
       "src": "../media/irudiak/49c4640f390db69b.svg",
       "zabalera": 309
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "etiketak": [
        "a)",
        "b)",
        "c)",
        "d)",
        "e)"
       ],
       "elementuak": [
        "<math display=\"inline\"><mn>20</mn></math> s",
        "<math display=\"inline\"><mn>14</mn></math> s",
        "<math display=\"inline\"><mn>11</mn></math> s",
        "<math display=\"inline\"><mn>32</mn></math> s",
        "<math display=\"inline\"><mn>38</mn></math> s"
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Respuesta correcta</strong>: (b) — los dos muelles están en paralelo (<math display=\"inline\"><mrow><mi>K</mi><mo>=</mo><msub><mi>k</mi><mn>1</mn></msub><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub></mrow></math>), <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mrow><mi>m</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un bloque de <math display=\"inline\"><mn>0.454</mn></math> kg parte del reposo y cae por un plano inclinado de <math display=\"inline\"><mn>3.05</mn></math> m de longitud y <math display=\"inline\"><mrow><mn>53</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. Tras el plano recorre un tramo horizontal de <math display=\"inline\"><mn>9.14</mn></math> m y comprime un muelle de <math display=\"inline\"><mn>14.7</mn></math> N/m. ¿Cuánto se ha comprimido el muelle? (No hay rozamiento.)"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "etiketak": [
        "a)",
        "b)",
        "c)",
        "d)",
        "e)"
       ],
       "elementuak": [
        "<math display=\"inline\"><mn>1.21</mn></math> m",
        "<math display=\"inline\"><mn>2.44</mn></math> m",
        "<math display=\"inline\"><mn>1.83</mn></math> m",
        "<math display=\"inline\"><mn>0.215</mn></math> m",
        "<math display=\"inline\"><mn>1.52</mn></math> m"
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Respuesta correcta</strong>: (a) — por conservación de la energía, <math display=\"inline\"><mrow><mi>m</mi><mi>g</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>3.05</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>53</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una masa que oscila sin rozamiento sobre una mesa horizontal está unida a un muelle. Estiramos el muelle <math display=\"inline\"><mn>10</mn></math> cm y lo soltamos desde el reposo. El periodo de las oscilaciones de la masa es de <math display=\"inline\"><mn>5.6</mn></math> s. ¿Cuál es la velocidad de la masa después de transcurridos <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>2.5</mn></mrow></math> s?"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "etiketak": [
        "a)",
        "b)",
        "c)",
        "d)",
        "e)"
       ],
       "elementuak": [
        "<math display=\"inline\"><mrow><mi>−</mi><mn>0.106</mn></mrow></math> m/s",
        "<math display=\"inline\"><mrow><mi>−</mi><mn>0.261</mn></mrow></math> m/s",
        "<math display=\"inline\"><mrow><mi>−</mi><mn>0.0371</mn></mrow></math> m/s",
        "<math display=\"inline\"><mrow><mi>−</mi><mn>0.201</mn></mrow></math> m/s",
        "<math display=\"inline\"><mrow><mi>−</mi><mn>0.471</mn></mrow></math> m/s"
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Respuesta correcta</strong>: (c) — <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>A</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>T</mi></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>0.10</mn></mrow></math> m."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El péndulo <math display=\"inline\"><mi>A</mi></math> tiene longitud <math display=\"inline\"><msub><mi>L</mi><mi>A</mi></msub></math> y cuelga de él una masa <math display=\"inline\"><msub><mi>M</mi><mi>A</mi></msub></math>. El péndulo <math display=\"inline\"><mi>B</mi></math> tiene longitud <math display=\"inline\"><msub><mi>L</mi><mi>B</mi></msub></math> y cuelga de él una masa <math display=\"inline\"><msub><mi>M</mi><mi>B</mi></msub></math>. El periodo de <math display=\"inline\"><mi>A</mi></math> es el doble del periodo de <math display=\"inline\"><mi>B</mi></math>. Entonces:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "etiketak": [
        "a)",
        "b)",
        "c)",
        "d)",
        "e)"
       ],
       "elementuak": [
        "<math display=\"inline\"><mrow><msub><mi>L</mi><mi>A</mi></msub><mo>=</mo><mn>4</mn><msub><mi>L</mi><mi>B</mi></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>M</mi><mi>A</mi></msub><mo>=</mo><msub><mi>M</mi><mi>B</mi></msub></mrow></math>",
        "<math display=\"inline\"><mrow><msub><mi>L</mi><mi>A</mi></msub><mo>=</mo><msqrt><mn>2</mn></msqrt><msub><mi>L</mi><mi>B</mi></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>M</mi><mi>A</mi></msub><mi>/</mi><msub><mi>M</mi><mi>B</mi></msub></mrow></math> cualquiera",
        "<math display=\"inline\"><mrow><msub><mi>L</mi><mi>A</mi></msub><mo>=</mo><mn>4</mn><msub><mi>L</mi><mi>B</mi></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>M</mi><mi>A</mi></msub><mi>/</mi><msub><mi>M</mi><mi>B</mi></msub></mrow></math> cualquiera",
        "<math display=\"inline\"><mrow><msub><mi>L</mi><mi>A</mi></msub><mo>=</mo><msqrt><mn>2</mn></msqrt><msub><mi>L</mi><mi>B</mi></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>M</mi><mi>A</mi></msub><mo>=</mo><msub><mi>M</mi><mi>B</mi></msub></mrow></math>",
        "<math display=\"inline\"><mrow><msub><mi>L</mi><mi>A</mi></msub><mo>=</mo><mn>2</mn><msub><mi>L</mi><mi>B</mi></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>M</mi><mi>A</mi></msub><mo>=</mo><mn>2</mn><msub><mi>M</mi><mi>B</mi></msub></mrow></math>"
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Respuesta correcta</strong>: (c) — <math display=\"inline\"><mrow><mi>T</mi><mo>∝</mo><msqrt><mi>L</mi></msqrt></mrow></math> (independiente de la masa); <math display=\"inline\"><mrow><msub><mi>T</mi><mi>A</mi></msub><mo>=</mo><mn>2</mn><msub><mi>T</mi><mi>B</mi></msub><mo>→</mo><msub><mi>L</mi><mi>A</mi></msub><mo>=</mo><mn>4</mn><msub><mi>L</mi><mi>B</mi></msub></mrow></math>, para cualquier relación <math display=\"inline\"><mrow><msub><mi>M</mi><mi>A</mi></msub><mi>/</mi><msub><mi>M</mi><mi>B</mi></msub></mrow></math>."
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Más exámenes (Electromagnetismoak/ cuaderno)",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los ejercicios siguientes se han transcrito de los exámenes oficiales de la asignatura <strong>Física General</strong> de la UPV/EHU (2012-2014), a partir de las fotos del cuaderno del usuario (<code>espazio-ontzia/08_elektromagnetismoa/elektromagnetismo/ Elektromagnetismoak/</code>). Solucionario completo: <code>espazio-ontzia/08_elektromagnetismoa/elektromagnetismo/ebazpenak/</code>. En el original solo figuraba el resultado (en muchos casos sin desarrollo completo); aquí se ha construido el desarrollo completo, hasta llegar al resultado exacto del original."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un estudiante de Física recibe como regalo un frecuencímetro y, para comprobar que funciona bien, diseña este experimento: toma una plataforma de 1 kg, unida a la pared por un muelle horizontal en un extremo (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>625</mn></mrow></math> N/m), y fija rápidamente su nuevo frecuencímetro sobre la plataforma. Después comprime el muelle 0.5 m y deja que la plataforma oscile sin rozamiento (junto con el frecuencímetro). Luego, lejos de la pared, hace sonar un altavoz que emite un sonido de <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>250</mn></mrow></math> Hz, y pulsa la cuerda del generador de ondas estando esta en reposo."
      },
      {
       "mota": "testua",
       "html": "a) Calcular la frecuencia de oscilación de la plataforma, en Hz. b) ¿Cuál es la frecuencia máxima y la mínima que medirá el frecuencímetro en la cuerda? ¿En qué posición y en qué sentido se moverá la plataforma en esos casos? c) ¿En qué posición debe estar para medir la frecuencia propia de la cuerda?"
      },
      {
       "mota": "testua",
       "html": "La masa del frecuencímetro debe considerarse despreciable frente a la de la plataforma, y el frecuencímetro puede guardar en su memoria las medidas realizadas en intervalos de tiempo muy pequeños. Dato: <math display=\"inline\"><mrow><msub><mi>v</mi><mtext mathvariant=\"normal\">soinua</mtext></msub><mo>=</mo><mn>343</mn></mrow></math> m/s. <strong>1.25 puntos</strong>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Solución.</strong>"
    },
    {
     "mota": "testua",
     "html": "a) El sistema plataforma-muelle realiza un movimiento armónico simple, y su frecuencia angular solo depende de <math display=\"inline\"><mi>k</mi></math> y de <math display=\"inline\"><mi>m</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mn>625</mn><mn>1</mn></mfrac></msqrt><mo>=</mo><mn>25</mn><mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rad</mtext></mrow><mrow><mtext mathvariant=\"normal\">s </mtext><mspace width=\"0.333em\"></mspace></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>p</mi></msub><mo>=</mo><mfrac><mi>ω</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mfrac><mn>25</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>≈</mo><mn>3.98</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>p</mi></msub><mo>≈</mo><mn>4</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "b) El frecuencímetro situado sobre la plataforma está en movimiento continuo (observador móvil), mientras que el altavoz está en reposo (fuente fija). Según el efecto Doppler, para un observador móvil:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mfrac><mrow><msub><mi>v</mi><mtext mathvariant=\"normal\">soinua</mtext></msub><mo>±</mo><msub><mi>v</mi><mtext mathvariant=\"normal\">behatzailea</mtext></msub></mrow><msub><mi>v</mi><mtext mathvariant=\"normal\">soinua</mtext></msub></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el movimiento armónico simple del muelle, la velocidad máxima se da en el punto de equilibrio (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mi>A</mi><mi>ω</mi><mo>=</mo><mn>0.5</mn><mo>⋅</mo><mn>25</mn><mo>=</mo><mn>12.5</mn><mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mrow><mtext mathvariant=\"normal\">s </mtext><mspace width=\"0.333em\"></mspace></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La frecuencia máxima se mide cuando la plataforma se mueve hacia el altavoz con velocidad máxima (en el punto de equilibrio, hacia el altavoz):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mi>f</mi><mfrac><mrow><msub><mi>v</mi><mtext mathvariant=\"normal\">soinua</mtext></msub><mo>+</mo><msub><mi>v</mi><mi mathvariant=\"normal\">max</mi></msub></mrow><msub><mi>v</mi><mtext mathvariant=\"normal\">soinua</mtext></msub></mfrac><mo>=</mo><mn>250</mn><mo>⋅</mo><mfrac><mrow><mn>343</mn><mo>+</mo><mn>12.5</mn></mrow><mn>343</mn></mfrac><mo>≈</mo><mn>259</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La frecuencia mínima, en cambio, cuando se aleja del altavoz desde el punto de equilibrio (con velocidad máxima, en sentido contrario):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi mathvariant=\"normal\">min</mi></msub><mo>=</mo><mi>f</mi><mfrac><mrow><msub><mi>v</mi><mtext mathvariant=\"normal\">soinua</mtext></msub><mo>−</mo><msub><mi>v</mi><mi mathvariant=\"normal\">max</mi></msub></mrow><msub><mi>v</mi><mtext mathvariant=\"normal\">soinua</mtext></msub></mfrac><mo>=</mo><mn>250</mn><mo>⋅</mo><mfrac><mrow><mn>343</mn><mo>−</mo><mn>12.5</mn></mrow><mn>343</mn></mfrac><mo>≈</mo><mn>241</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi mathvariant=\"normal\">max</mi></msub><mo>≈</mo><mn>259</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">bozgorailurantz</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi mathvariant=\"normal\">min</mi></msub><mo>≈</mo><mn>241</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">bozgorailutik urrunduz</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "c) Para medir la frecuencia propia de la cuerda (<math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>250</mn></mrow></math> Hz, sin desplazamiento Doppler), la velocidad de la plataforma debe ser cero en ese instante (<math display=\"inline\"><mrow><msub><mi>v</mi><mtext mathvariant=\"normal\">behatzailea</mtext></msub><mo>=</mo><mn>0</mn></mrow></math>), y eso ocurre en los extremos del movimiento armónico simple, en las posiciones <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mi>A</mi></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mi>A</mi><mo>=</mo><mi>±</mi><mn>0.5</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>=</mo><msub><mi>t</mi><mtext mathvariant=\"normal\">muturretan</mtext></msub><mo>,</mo><mi>v</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> denean</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La figura del movimiento armónico simple muestra la función <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> a lo largo de un periodo <math display=\"inline\"><mi>T</mi></math>. Calcular: <strong>0.5 puntos</strong>."
      },
      {
       "mota": "irudia",
       "oina": "Función <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de un MAS a lo largo de un periodo <math display=\"inline\"><mi>T</mi></math>, con los\n    instantes <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math> señalados (reconstrucción cualitativa del original).",
       "src": "../media/irudiak/f14c42ea0a7129de.svg",
       "zabalera": 488
      },
      {
       "mota": "testua",
       "html": "a) El periodo del movimiento. b) La amplitud del movimiento. c) La fase inicial, si escribimos la posición como <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. d) La posición en el instante <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math>. e) La aceleración en el instante <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Solución.</strong>"
    },
    {
     "mota": "testua",
     "html": "a) En la gráfica se lee directamente que la curva da una vuelta completa en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>12</mn></mrow></math> s (porque el argumento de la función coseno es <math display=\"inline\"><mrow><mn>30</mn><mfrac><msup><mi></mi><mo>∘</mo></msup><mrow><mtext mathvariant=\"normal\">s </mtext><mspace width=\"0.333em\"></mspace></mrow></mfrac><mo>⋅</mo><mi>t</mi></mrow></math>, es decir, <math display=\"inline\"><mrow><mn>360</mn><mfrac><msup><mi></mi><mo>∘</mo></msup><mn>30</mn></mfrac><mfrac><msup><mi></mi><mo>∘</mo></msup><mrow><mtext mathvariant=\"normal\">s </mtext><mspace width=\"0.333em\"></mspace></mrow></mfrac><mo>=</mo><mn>12</mn></mrow></math> s):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mn>12</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "De ahí la frecuencia angular: <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>2</mn><mfrac><mi>π</mi><mi>T</mi></mfrac><mo>=</mo><mfrac><mi>π</mi><mn>6</mn></mfrac><mo>≈</mo><mn>0.524</mn><mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rad</mtext></mrow><mi>s</mi></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "b) Si <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la velocidad es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>A</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>v</mi><mi mathvariant=\"normal\">max</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Leyendo el valor más significativo del eje de ordenadas de la gráfica, se deduce que <math display=\"inline\"><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">max</mi></msub><mo>≈</mo><mn>4.97</mn></mrow></math> m/s. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mfrac><msub><mi>v</mi><mi mathvariant=\"normal\">max</mi></msub><mi>ω</mi></mfrac><mo>=</mo><mfrac><mn>4.97</mn><mrow><mi>π</mi><mi>/</mi><mn>6</mn></mrow></mfrac><mo>≈</mo><mn>9.5</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>≈</mo><mn>9.5</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "c) Las funciones <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>v</mi><mi mathvariant=\"normal\">max</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> y <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tienen la misma fase. En el instante <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn></mrow></math> s se ve en la gráfica que la plataforma pasa por la posición <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> (véase d), por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><msub><mi>t</mi><mn>1</mn></msub><mo>+</mo><mi>ϕ</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>ϕ</mi><mo>=</mo><mi>−</mi><mi>ω</mi><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mfrac><mi>π</mi><mn>6</mn></mfrac><mo>⋅</mo><mn>2</mn><mo>=</mo><mi>−</mi><mfrac><mi>π</mi><mn>3</mn></mfrac></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ϕ</mi><mo>=</mo><mi>−</mi><mn>60</mn><msup><mi></mi><mo>∘</mo></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>−</mo><mfrac><mi>π</mi><mn>3</mn></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "d) En el instante <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn></mrow></math> s:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><msub><mi>t</mi><mn>1</mn></msub><mo>+</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>9.5</mn><mo>⋅</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>6</mn></mfrac><mo>⋅</mo><mn>2</mn><mo>−</mo><mfrac><mi>π</mi><mn>3</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>9.5</mn><mo>⋅</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "e) La aceleración en un MAS es siempre <math display=\"inline\"><mrow><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En el instante <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><mn>5</mn></mrow></math> s:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><msub><mi>t</mi><mn>2</mn></msub><mo>+</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>9.5</mn><mo>⋅</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>6</mn></mfrac><mo>⋅</mo><mn>5</mn><mo>−</mo><mfrac><mi>π</mi><mn>3</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>9.5</mn><mo>⋅</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>9.5</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>6</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>⋅</mo><mn>9.5</mn><mo>≈</mo><mi>−</mi><mn>2.60</mn><mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><msup><mi>s</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Nota sobre el redondeo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El cálculo exacto da <math display=\"inline\"><mrow><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≈</mo><mi>−</mi><mn>2.60</mn></mrow></math> m/s²; el resultado del cuaderno, que es el original, es <math display=\"inline\"><mrow><mi>−</mi><mn>2.62</mn></mrow></math> m/s². La diferencia es pequeña (<math display=\"inline\"><mrow><mo>&lt;</mo><mn>1</mn><mi>%</mi></mrow></math>) y puede deberse al redondeo del valor <math display=\"inline\"><msub><mi>v</mi><mi mathvariant=\"normal\">max</mi></msub></math> leído en la gráfica; se ha mantenido el valor literal del original."
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
       "html": "<math display=\"block\"><mrow><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>2.62</mn><mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><msup><mi>s</mi><mn>2</mn></msup></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tarzán (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>T</mi></msub><mo>=</mo><mn>85</mn></mrow></math> kg) realiza un salto pendular desde una altura de <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>2</mn></mrow></math> m (gritando, como de costumbre), colgado de una liana de <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>20</mn></mrow></math> m. Al pasar por el punto más bajo de su trayectoria, Chita (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>C</mi></msub><mo>=</mo><mn>35</mn></mrow></math> kg) lo agarra de los brazos y se sube. <strong>2.5 puntos</strong>."
      },
      {
       "mota": "testua",
       "html": "(Margen: &quot;tema 4, ejercicio 7&quot;.)"
      },
      {
       "mota": "irudia",
       "oina": "Tarzán oscilando en la liana, desde la altura <math display=\"inline\"><mi>h</mi></math> hasta el punto más bajo,\n    donde Chita lo agarra (reconstrucción del original).",
       "src": "../media/irudiak/af267403742d64ec.svg",
       "zabalera": 124
      },
      {
       "mota": "testua",
       "html": "a) Si la liana no se rompiera, ¿hasta qué altura subirían Tarzán (T) y Chita (C) en el punto más alto de su movimiento? b) ¿Cuál es la tensión de la cuerda cuando Tarzán pasa por el punto más bajo de la trayectoria? ¿Y después de que Chita lo agarre? c) Supongamos que Tarzán y Chita, unidos a la liana, realizan pequeñas oscilaciones respecto a la vertical. ¿Cuál sería el periodo de las oscilaciones que mediría Jane (J en la figura)?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Resolución.</strong> (Se usará <math display=\"inline\"><mrow><mi>g</mi><mo>=</mo><mn>9.81</mn></mrow></math> m/s².)"
    },
    {
     "mota": "testua",
     "html": "b) Por conservación de la energía (sin rozamiento), la velocidad de Tarzán en el punto más bajo es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mi>T</mi></msub><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msub><mi>m</mi><mi>T</mi></msub><mi>g</mi><mi>h</mi><mo>⇒</mo><mi>v</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow></msqrt><mo>=</mo><msqrt><mrow><mn>2</mn><mo>⋅</mo><mn>9.81</mn><mo>⋅</mo><mn>2</mn></mrow></msqrt><mo>≈</mo><mn>6.26</mn><mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mrow><mtext mathvariant=\"normal\">s </mtext><mspace width=\"0.333em\"></mspace></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el punto más bajo, como el movimiento es circular (mediante la cuerda), la tensión debe equilibrar la fuerza de la gravedad y la fuerza centrípeta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>T</mi><mi>T</mi></msub><mo>−</mo><msub><mi>m</mi><mi>T</mi></msub><mi>g</mi><mo>=</mo><msub><mi>m</mi><mi>T</mi></msub><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>L</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mi>T</mi></msub><mo>=</mo><msub><mi>m</mi><mi>T</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo>+</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>m</mi><mi>T</mi></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mn>2</mn><mi>h</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>T</mi><mi>T</mi></msub><mo>=</mo><mn>85</mn><mo>⋅</mo><mn>9.81</mn><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>4</mn><mn>20</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>85</mn><mo>⋅</mo><mn>9.81</mn><mo>⋅</mo><mn>1.2</mn><mo>≈</mo><mn>1000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> N </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>T</mi><mi>T</mi></msub><mo>≈</mo><mn>1000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> N </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Cuando Chita agarra a Tarzán se supone que el choque es rápido y casi instantáneo (el impulso de la gravedad es despreciable en ese intervalo de tiempo), por lo que se conserva el momento lineal:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>m</mi><mi>T</mi></msub><mi>v</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>T</mi></msub><mo>+</mo><msub><mi>m</mi><mi>C</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>v</mi><mo>′</mo></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>v</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mi>T</mi></msub><mi>v</mi></mrow><mrow><msub><mi>m</mi><mi>T</mi></msub><mo>+</mo><msub><mi>m</mi><mi>C</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>85</mn><mo>⋅</mo><mn>6.26</mn></mrow><mn>120</mn></mfrac><mo>≈</mo><mn>4.44</mn><mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mrow><mtext mathvariant=\"normal\">s </mtext><mspace width=\"0.333em\"></mspace></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En ese mismo instante (en el punto más bajo, todavía), la tensión del nuevo sistema:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>T</mi><mtext mathvariant=\"normal\">T+C</mtext></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>T</mi></msub><mo>+</mo><msub><mi>m</mi><mi>C</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo>+</mo><mi>v</mi><mfrac><msup><mi>′</mi><mn>2</mn></msup><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>120</mn><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>9.81</mn><mo>+</mo><mfrac><msup><mn>4.44</mn><mn>2</mn></msup><mn>20</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≈</mo><mn>1295</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> N </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>T</mi><mi>T</mi></msub><mo>≈</mo><mn>1000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> N</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mtext mathvariant=\"normal\">T+C</mtext></msub><mo>≈</mo><mn>1295</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> N </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "a) Si la liana aguantara (sin romperse), tras el choque el sistema Tarzán+Chita seguiría oscilando con velocidad <math display=\"inline\"><msup><mi>v</mi><mo>′</mo></msup></math> y subiría hasta la misma altura en el lado contrario, conservando la energía (las masas se mueven unidas, y el periodo del péndulo ideal es independiente de la masa):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>T</mi></msub><mo>+</mo><msub><mi>m</mi><mi>C</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>v</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>T</mi></msub><mo>+</mo><msub><mi>m</mi><mi>C</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><msup><mi>h</mi><mo>′</mo></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>h</mi><mo>′</mo></msup><mo>=</mo><mi>v</mi><mfrac><msup><mi>′</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>g</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mn>4.44</mn><mn>2</mn></msup><mrow><mn>2</mn><mo>⋅</mo><mn>9.81</mn></mrow></mfrac><mo>≈</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>h</mi><mo>′</mo></msup><mo>≈</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "c) Para oscilaciones pequeñas, el periodo del péndulo simple solo depende de <math display=\"inline\"><mi>L</mi></math> y de <math display=\"inline\"><mi>g</mi></math>, no de la masa (porque la fuerza externa resultante y la inercia son ambas proporcionales a la masa):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>L</mi><mi>g</mi></mfrac></msqrt><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mn>20</mn><mn>9.81</mn></mfrac></msqrt><mo>≈</mo><mn>8.97</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>≈</mo><mn>8.97</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a13",
   "maila": 1,
   "izenburua": "Oscilaciones acopladas y modos normales",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Ampliación editorial (T3, 2026-08-27)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Segunda laguna declarada en la cabecera. Fuentes: Alonso-Finn I (cap. 12), Sears-Zemansky (preámbulo de las ondas)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si unimos dos osciladores idénticos (<math display=\"inline\"><mi>m</mi></math>, <math display=\"inline\"><mi>k</mi></math>) con un muelle débil (<math display=\"inline\"><msup><mi>k</mi><mo>′</mo></msup></math>), el movimiento de cada uno condiciona el del otro: <math display=\"block\"><mrow><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi>k</mi><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msup><mi>k</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>=</mo><mi>−</mi><mi>k</mi><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msup><mi>k</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> La clave para resolver el sistema es un cambio de variable: suma y diferencia. Tomando <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub></mrow></math>, las ecuaciones se desacoplan: <math display=\"block\"><mrow><mi>m</mi><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>k</mi><mi>s</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>m</mi><mover><mi>d</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>2</mn><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>.</mi></mrow></math> Dos osciladores libres &quot;nuevos&quot; — esos son los <em>modos normales</em>:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<em>Modo simétrico</em> (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub></mrow></math>, el muelle central en reposo): <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> — los dos a la vez, sin notar el acoplamiento.",
      "<em>Modo antisimétrico</em> (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>2</mn></msub></mrow></math>, el central estirado el doble):"
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mi>k</mi><mo>+</mo><mn>2</mn><msup><mi>k</mi><mo>′</mo></msup></mrow><mi>m</mi></mfrac></msqrt><mo>&gt;</mo><msub><mi>ω</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Cualquier movimiento es la superposición de los dos modos. Si al principio solo se desplaza una masa (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>A</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> — los dos modos se excitan con la misma amplitud), la energía pasa de una a otra: <em>pulsaciones</em>. Cada masa oscila con frecuencia <math display=\"inline\"><mrow><mover><mi>ω</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>+</mo><msub><mi>ω</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math>, con la amplitud modulada por una frecuencia lenta <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math> — el mismo fenómeno de los batidos del tema 9, aquí en el espacio."
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
       "html": "<math display=\"inline\"><mi>N</mi></math> osciladores acoplados tienen <math display=\"inline\"><mi>N</mi></math> modos normales, cada uno con su frecuencia. En el límite <math display=\"inline\"><mrow><mi>N</mi><mo>→</mo><mi>∞</mi></mrow></math> (una fila continua de masas), los modos se convierten en ondas estacionarias de una cuerda y las frecuencias en la serie de los armónicos (las ondas estacionarias del capítulo siguiente): este es el puente entre los osciladores y las ondas."
      }
     ]
    }
   ]
  },
  {
   "id": "a14",
   "maila": 1,
   "izenburua": "Movimiento armónico simple (MAS): elongación, velocidad y aceleración",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Definición y magnitudes básicas del <strong>movimiento armónico simple</strong>."
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Ecuación y magnitudes",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El MAS es la <strong>proyección de un movimiento circular uniforme</strong>. El periodo <math display=\"inline\"><mi>T</mi></math>, la frecuencia <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>T</mi></mrow></math>, y <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>f</mi></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>=</mo><mi>A</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>a</mi><mo>=</mo><mi>−</mi><mi>A</mi><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>y</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Clave: la <strong>aceleración es opuesta y proporcional a la elongación</strong> (<math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>y</mi></mrow></math>) — esa es la\n  característica distintiva del MAS.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>LANDETA1_0069</code>, páginas 136-137; &quot;FÍSICA LANDETA&quot;). <strong>MAS</strong>: definición, <math display=\"inline\"><mi>T</mi></math>, <math display=\"inline\"><mi>f</mi></math>, ecuación como proyección del MCU, elongación/velocidad/aceleración, relación <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>y</mi></mrow></math>. Verificado. Sin correcciones. Véase <code>koadernoa_landeta_fisica_p136.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_fisica_p138_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y verificación; física de landeta1 (MAS, ondas, péndulos, Doppler)",
     "hizkuntza": "eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puente a la física — La cinemática mediante integrales y la ley <math display=\"inline\"><mrow><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el movimiento unidimensional la posición, la velocidad y la aceleración se relacionan así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si los datos iniciales son <math display=\"inline\"><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub></mrow></math>, la integración fija automáticamente las constantes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mo>+</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>0</mn></msub><mi>t</mi></msubsup><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>s</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>0</mn></msub><mi>t</mi></msubsup><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>s</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> es el <strong>desplazamiento con signo</strong>. El camino geométrico recorrido, en cambio, es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>s</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>d</mi><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "; en los puntos en que <math display=\"inline\"><mi>v</mi></math> cambia de signo hay que dividir la integral. La altura máxima, si el movimiento ha empezado hacia arriba, se alcanza por primera vez en el instante <math display=\"inline\"><mrow><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mo>*</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, y <math display=\"inline\"><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mo>*</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>0</mn></msub><msub><mi>t</mi><mo>*</mo></msub></msubsup><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi></mrow></math>. Si el reposo solo se alcanza como límite, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>, el camino se expresa mediante una integral impropia y hay que comprobar su convergencia."
    },
    {
     "mota": "testua",
     "html": "En el movimiento vertical con gravedad constante, tomando positivo el sentido hacia arriba, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>−</mi><mi>g</mi></mrow></math> y <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mo>−</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Aunque otra ley de la aceleración se dé con el símbolo <math display=\"inline\"><mrow><mi>j</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, comprobar qué significa <math display=\"inline\"><mrow><mi>j</mi><mo>=</mo><mi>d</mi><mfrac><mi>v</mi><mi>d</mi></mfrac><mi>t</mi></mrow></math> en el contexto, y encadenar las dos integrales anteriores."
    },
    {
     "mota": "testua",
     "html": "En un movimiento periódico, la velocidad media con signo en un período <math display=\"inline\"><mi>T</mi></math> y el valor medio del valor absoluto de la velocidad no son lo mismo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>v</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si la aceleración es función de la velocidad en lugar del tiempo, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, en un intervalo en que <math display=\"inline\"><mrow><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn></mrow></math>, el tiempo para acelerar de <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> a <math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math> es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><msubsup><mo>∫</mo><msub><mi>v</mi><mn>1</mn></msub><msub><mi>v</mi><mn>2</mn></msub></msubsup><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por eso, el área de la gráfica de <math display=\"inline\"><mfrac><mn>1</mn><mi>a</mi></mfrac></math> frente a <math display=\"inline\"><mi>v</mi></math> es el tiempo. Si <math display=\"inline\"><mrow><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se anula, la integral puede ser impropia; si cambia de signo, hay que separar los intervalos. También es útil la forma respecto de la posición: <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>v</mi><mi>d</mi><mfrac><mi>v</mi><mi>d</mi></mfrac><mi>x</mi></mrow></math>."
    },
    {
     "mota": "iturria",
     "proiektua": "DEMIDOVICH PROBLEMAS Y EJERCICIOS DE ANALISIS MATEMATICO ESPAÑOL.pdf",
     "xehetasuna": "cap. V, apartado 12; páginas impresas 184--188; aplicaciones 1753",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "problema-gaia",
     "testua": "Demidovich — Oscilación armónica"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si la velocidad de un punto es <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> es <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, hallar la ley de la vibración y el valor medio absoluto de la velocidad por periodo."
      }
     ]
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "MAS: muelle, energía y comienzo de las ondas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Dinámica</strong> del MAS (muelle, energía) e introducción a las <strong>ondas</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Muelle y periodo"
    },
    {
     "mota": "testua",
     "html": "La ley de Hooke (<math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>K</mi><mi>x</mi></mrow></math>) produce un MAS; a partir de <math display=\"inline\"><mrow><mi>K</mi><mo>=</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>m</mi><mi>K</mi></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>m</mi><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>x</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mi>K</mi><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La <strong>energía del oscilador</strong> (potencial + cinética) es <strong>constante</strong>: <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>K</mi><msup><mi>A</mi><mn>2</mn></msup></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Introducción a las ondas"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  <strong>Ondas</strong>: mecánicas (necesitan un medio) frente a electromagnéticas. <strong>Transversales</strong> (la perturbación\n  es perpendicular a la propagación) frente a <strong>longitudinales</strong> (paralela).\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>LANDETA1_0070</code>, páginas 138-139; &quot;FÍSICA LANDETA&quot;). MAS: muelle horizontal (<math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>K</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>K</mi><mo>=</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mrow><mi>m</mi><mi>/</mi><mi>K</mi></mrow></msqrt></mrow></math>), <strong>ecuación diferencial</strong>, <strong>energía del oscilador</strong> (<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>K</mi><msup><mi>A</mi><mn>2</mn></msup></mrow></math> constante), y comienzo de las <strong>ondas</strong> (mecánicas/EM, transversales/longitudinales). Verificado. Sin correcciones. Véase <code>koadernoa_landeta_fisica_p138.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_fisica_p142_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y verificación; física de landeta1 (MAS, ondas, péndulos, Doppler)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "Péndulo simple y compuesto",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Periodos del <strong>péndulo simple</strong> y del <strong>péndulo físico/compuesto</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Péndulo simple"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>L</mi><mi>g</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Péndulo físico/compuesto"
    },
    {
     "mota": "testua",
     "html": "Un disco oscilando alrededor de un eje de suspensión; momento de inercia por <strong>Steiner</strong> (<math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><msub><mi>I</mi><mrow><mtext mathvariant=\"normal\">mz </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>+</mo><mi>m</mi><msup><mi>d</mi><mn>2</mn></msup></mrow></math>), y, a partir de la ecuación del movimiento, el periodo en función de <math display=\"inline\"><mi>R</mi></math> y <math display=\"inline\"><mi>d</mi></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>I</mi><mrow><mi>m</mi><mi>g</mi><mi>d</mi></mrow></mfrac></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>LANDETA1_0072</code>, páginas 142-143; &quot;FÍSICA LANDETA&quot;). Continuación del texto del MAS, <strong>péndulo simple</strong> (<math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mrow><mi>L</mi><mi>/</mi><mi>g</mi></mrow></msqrt></mrow></math>) y <strong>péndulo físico/compuesto</strong> (disco; <math display=\"inline\"><mi>I</mi></math> por Steiner; <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mrow><mi>I</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mrow></math>, <math display=\"inline\"><mi>R</mi></math> y en función de <math display=\"inline\"><mi>d</mi></math>). Verificado. Sin correcciones. Véase <code>koadernoa_landeta_fisica_p142.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_fisica_p144_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y verificación; física de landeta1 (MAS, ondas, péndulos, Doppler)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Optimización del péndulo físico y muelles combinados",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Minimizar</strong> el periodo del péndulo físico y la frecuencia de <strong>muelles combinados</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Minimizar el periodo"
    },
    {
     "mota": "testua",
     "html": "Derivando el periodo del péndulo físico respecto a <math display=\"inline\"><mi>d</mi></math> e igualando a cero (<math display=\"inline\"><mrow><mi>d</mi><mi>T</mi><mi>/</mi><mi>d</mi><mi>d</mi><mo>=</mo><mn>0</mn></mrow></math>), la distancia que <strong>minimiza</strong> el periodo:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>T</mi></mrow><mrow><mi>d</mi><mi>d</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mo>=</mo><mfrac><mi>R</mi><msqrt><mn>2</mn></msqrt></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Muelles combinados"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(En distintos casos numéricos la constante equivalente cambia: en serie <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>k</mi><mo>=</mo><mo>∑</mo><mn>1</mn><mi>/</mi><msub><mi>k</mi><mi>i</mi></msub></mrow></math>; en paralelo <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mo>∑</mo><msub><mi>k</mi><mi>i</mi></msub></mrow></math>.)"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>LANDETA1_0073</code>, páginas 144-145; &quot;FÍSICA LANDETA&quot;). <strong>Optimización del péndulo físico</strong> (<math display=\"inline\"><mrow><mi>d</mi><mi>T</mi><mi>/</mi><mi>d</mi><mi>d</mi><mo>=</mo><mn>0</mn><mo>→</mo><mi>d</mi><mo>=</mo><mi>R</mi><mi>/</mi><msqrt><mn>2</mn></msqrt></mrow></math>) y <strong>muelles combinados</strong> (<math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>; serie/paralelo). La <strong>mitad computacional</strong> de esta página (algoritmo de búsqueda del máximo de una lista) pasa al apartado <code>13</code>. Verificado. Sin correcciones. Véase <code>koadernoa_landeta_fisica_p144.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_fisica_p154_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y verificación; física de landeta1 (MAS, ondas, péndulos, Doppler)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Muelles combinados, energía del oscilador y rodadura",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Osciladores de muelles combinados y dinámica de la <strong>rodadura</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Muelles combinados y energía"
    },
    {
     "mota": "testua",
     "html": "<strong>Periodo</strong> de muelles combinados en serie/paralelo (mediante la constante equivalente), elongación en un instante dado (por comparación de fases) y <strong>energía mecánica total</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>A</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> seriean </mtext><mspace width=\"0.333em\"></mspace></mrow><mfrac><mn>1</mn><mi>k</mi></mfrac><mo>=</mo><mo>∑</mo><mfrac><mn>1</mn><msub><mi>k</mi><mi>i</mi></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> paraleloan </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>k</mi><mo>=</mo><mo>∑</mo><msub><mi>k</mi><mi>i</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Rodadura (esfera maciza)"
    },
    {
     "mota": "testua",
     "html": "Esfera maciza que rueda sin deslizar bajo una fuerza <math display=\"inline\"><mi>F</mi></math>; con las ecuaciones de traslación (<math display=\"inline\"><mrow><mo>∑</mo><mi>F</mi><mo>=</mo><mi>m</mi><mi>a</mi></mrow></math>) y de rotación (<math display=\"inline\"><mrow><mo>∑</mo><mi>M</mi><mo>=</mo><mi>I</mi><mi>α</mi></mrow></math>), aceleración del centro de masas (usando la condición de rodadura <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>α</mi><mi>R</mi></mrow></math>)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>LANDETA1_0078</code>, páginas 154-155; &quot;FÍSICA LANDETA&quot;). <strong>Muelles combinados</strong> (serie/paralelo, comparación de fases, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi><msup><mi>A</mi><mn>2</mn></msup></mrow></math>) y <strong>rodadura</strong> (esfera maciza; <math display=\"inline\"><mrow><mo>∑</mo><mi>F</mi><mo>=</mo><mi>m</mi><mi>a</mi></mrow></math> + <math display=\"inline\"><mrow><mo>∑</mo><mi>M</mi><mo>=</mo><mi>I</mi><mi>α</mi></mrow></math>, condición de rodadura <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>α</mi><mi>R</mi></mrow></math>). Verificado. Sin correcciones. Véase <code>koadernoa_landeta_fisica_p154.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_fisica_p168_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y verificación; física de landeta1 (MAS, ondas, péndulos, Doppler)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Fase inicial del MAS y plano inclinado con muelle",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cálculo de la <strong>fase inicial</strong> del MAS, y problema de un muelle en un <strong>plano inclinado</strong> con rozamiento."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "MAS: fase inicial"
    },
    {
     "mota": "testua",
     "html": "A partir de los datos de velocidad se obtiene la <strong>fase inicial</strong> <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math> y se calculan la <strong>posición</strong> y la <strong>aceleración</strong> en un instante dado (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Plano inclinado con muelle y rozamiento"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Bloque unido a un muelle en un plano inclinado: <strong>fuerza normal</strong> (<math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>), <strong>rozamiento</strong>\n  (<math display=\"inline\"><mrow><msub><mi>F</mi><mi>r</mi></msub><mo>=</mo><mi>μ</mi><mi>N</mi></mrow></math>) y <strong>balance trabajo-energía</strong> (incluida la energía elástica <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>) para obtener\n  la constante elástica <math display=\"inline\"><mi>k</mi></math>.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>LANDETA1_0085</code>, páginas 168-169; &quot;FÍSICA LANDETA&quot;). <strong>Fase inicial del MAS</strong> (a partir de la velocidad <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math>; posición/aceleración), y <strong>plano inclinado</strong> con muelle + rozamiento (<math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>F</mi><mi>r</mi></msub><mo>=</mo><mi>μ</mi><mi>N</mi></mrow></math>, balance trabajo-energía con energía elástica → <math display=\"inline\"><mi>k</mi></math>). Verificado. Sin correcciones. Véase <code>koadernoa_landeta_fisica_p168.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Oscilador con dos masas y rozamiento; choque elástico",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Dos ejercicios: (1) dos masas y un muelle, amplitud máxima limitada por el rozamiento estático; (2) choque elástico desde dos alturas."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 1: oscilador con dos masas"
    },
    {
     "mota": "testua",
     "html": "Bloque <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> sobre el bloque <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>, con un muelle (<math display=\"inline\"><mi>k</mi></math>). Moviéndose juntos, la frecuencia angular es: <math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mfrac><mi>k</mi><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac></msqrt><mi>.</mi></mrow></math> Para que el bloque <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> <strong>no deslice</strong>, la fuerza que lo acelera (máxima en la elongación máxima, <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi></mrow></math>) debe ser menor que el rozamiento estático máximo (<math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi></mrow></math>): <math display=\"block\"><mrow><msub><mi>F</mi><mrow><mi>m</mi><mi>e</mi></mrow></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>F</mi><mrow><mi>m</mi><mi>e</mi></mrow></msub><mo>≤</mo><msub><mi>μ</mi><mi>e</mi></msub><mi>N</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>m</mi><mn>2</mn></msub><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>≤</mo><msub><mi>μ</mi><mi>e</mi></msub><mi>N</mi><mi>.</mi></mrow></math> Amplitud máxima:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>≤</mo><mfrac><mrow><msub><mi>μ</mi><mi>e</mi></msub><mi>N</mi></mrow><mrow><msub><mi>m</mi><mn>2</mn></msub><msup><mi>ω</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mi>e</mi></msub><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><msub><mi>m</mi><mn>2</mn></msub><mi>k</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mi>e</mi></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>k</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 2: choque elástico"
    },
    {
     "mota": "testua",
     "html": "En caída libre, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow></msqrt></mrow></math>: <math display=\"block\"><mrow><msub><mi>v</mi><mi>C</mi></msub><mo>=</mo><msqrt><mrow><mn>2</mn><mi>g</mi><msub><mi>h</mi><mi>N</mi></msub></mrow></msqrt><mo>=</mo><mn>14</mn><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mi>N</mi></msub><mo>=</mo><msqrt><mrow><mn>2</mn><mi>g</mi><msub><mi>h</mi><mi>L</mi></msub></mrow></msqrt><mo>=</mo><mn>12</mn><mo>,</mo><mn>14</mn><mspace width=\"0.222em\"></mspace><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow><mi>.</mi></mrow></math> (con <math display=\"inline\"><mrow><mi>g</mi><mo>=</mo><mn>9</mn><mo>,</mo><mn>8</mn></mrow></math>, <math display=\"inline\"><mrow><mn>14</mn><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow></mrow></math> da <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>10</mn><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow></mrow></math>, y <math display=\"inline\"><mrow><mn>12</mn><mo>,</mo><mn>14</mn></mrow></math> da <math display=\"inline\"><mrow><mi>h</mi><mo>≈</mo><mn>7</mn><mo>,</mo><mn>5</mn><mspace width=\"0.222em\"></mspace><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow></mrow></math>.)"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — primera cabecera en euskera",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: (1) <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow></math> y la amplitud máxima <math display=\"inline\"><mrow><mi>x</mi><mo>≤</mo><msub><mi>μ</mi><mi>e</mi></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>k</mi></mrow></math> (el original escribe <math display=\"inline\"><mrow><msub><mi>μ</mi><mi>e</mi></msub><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>2</mn></msub><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, lo mismo que <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> sin simplificar — y lo tacha); (2) <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow></msqrt></mrow></math> (<math display=\"inline\"><mrow><mn>14</mn><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>→</mo><mi>h</mi><mo>=</mo><mn>10</mn><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow></mrow></math>, <math display=\"inline\"><mrow><mn>12</mn><mo>,</mo><mn>14</mn><mspace width=\"0.222em\"></mspace><mo>→</mo><mi>h</mi><mo>≈</mo><mn>7</mn><mo>,</mo><mn>5</mn><mspace width=\"0.222em\"></mspace><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow></mrow></math>). ⚠ El cruce aparente de subíndices (<math display=\"inline\"><msub><mi>v</mi><mi>C</mi></msub></math> con <math display=\"inline\"><msub><mi>h</mi><mi>N</mi></msub></math>, <math display=\"inline\"><msub><mi>v</mi><mi>N</mi></msub></math> con <math display=\"inline\"><msub><mi>h</mi><mi>L</mi></msub></math>) puede ser intencionado (en el choque elástico de masas iguales las velocidades se intercambian — resultado posterior al choque) o un lapsus de etiquetado; las notas son tan breves que no se puede decidir (queda anotado). ⚠ <strong>Fuente nueva (matriz docente):</strong> «FISIKA II» = <strong>primera cabecera en euskera</strong> de este cuaderno (hasta entonces «FÍSICA LANDETA» en castellano). También se ha anotado una nota del profesor («EL PROFESOR ESTÁ ENFERMO…»). Véase <code>koadernoa_landeta2_fisika2_p113.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a22",
   "maila": 1,
   "izenburua": "Ondas",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota editorial",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este capítulo procede de la segunda parte del tema 8 de la asignatura <strong>Física General</strong> de la UPV/EHU (véase la nota inicial del capítulo 8 — &quot;Oscilaciones&quot;). Es solo un tratamiento descriptivo de las ondas mecánicas, basado en ejemplos 1D (cuerda, columna de sonido); la deducción formal a partir de medios continuos y el estudio específico de las ondas electromagnéticas están en otros módulos (véase la nota anterior)."
      }
     ]
    }
   ]
  },
  {
   "id": "a23",
   "maila": 1,
   "izenburua": "El concepto de onda",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una <strong>onda</strong> es una perturbación que se propaga por el espacio: una perturbación inicial se extiende de punto a punto, sin transporte de materia, a partir de una fuente emisora. Se transporta <strong>energía</strong> (no materia), y existe un <strong>retardo</strong> hasta que la perturbación llega a los puntos más alejados de donde se originó."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Ondas mecánicas</strong>: para propagar una perturbación de naturaleza mecánica se necesita un medio material elástico (aire, agua, cuerda).",
      "<strong>Ondas electromagnéticas</strong>: la transmisión de energía electromagnética se produce sin necesidad de medio material; pueden propagarse en el vacío o a través de la materia (luz visible, ondas de radio, rayos X)."
     ]
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Ondas transversales y longitudinales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Ondas transversales</strong>: la perturbación es perpendicular a la dirección de propagación de la onda (p. ej., un pulso generado en una cuerda). <strong>Ondas longitudinales</strong>: la perturbación es paralela a la dirección de propagación (p. ej., las ondas sonoras, que se propagan como compresiones y dilataciones)."
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Función de onda y ecuación de onda",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Si el origen <math display=\"inline\"><msup><mi>O</mi><mo>′</mo></msup></math> se mueve junto con el pulso (<math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi></mrow></math>), el desplazamiento de la cuerda medido desde <math display=\"inline\"><mi>O</mi></math> es <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En general, la <strong>función de onda</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∓</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El signo <math display=\"inline\"><mi>−</mi></math> indica la onda que se propaga en el sentido positivo de <math display=\"inline\"><mi>x</mi></math>, y el signo <math display=\"inline\"><mi>+</mi></math> la que se propaga en el sentido negativo; <math display=\"inline\"><mi>v</mi></math> es el módulo de la velocidad de propagación de la onda. En las ondas longitudinales, <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Toda función de onda cumple la <strong>ecuación de onda</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Velocidad de propagación"
    },
    {
     "mota": "testua",
     "html": "La velocidad de propagación de la onda depende del medio — es el cociente entre la distancia a la que se transmite la onda y el tiempo necesario para ello:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Cuerda</strong>: <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><msub><mi>F</mi><mi>T</mi></msub><mi>/</mi><mi>μ</mi></mrow></msqrt></mrow></math> (<math display=\"inline\"><msub><mi>F</mi><mi>T</mi></msub></math>, tensión; <math display=\"inline\"><mi>μ</mi></math>, masa por unidad de longitud).",
      "<strong>Sonido en un gas</strong>: <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mi>γ</mi><mi>R</mi><mi>T</mi><mi>/</mi><mi>M</mi></mrow></msqrt></mrow></math> (<math display=\"inline\"><mi>γ</mi></math>, cociente Cp/Cv; <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>8.314</mn></mrow></math> J/(mol K); <math display=\"inline\"><mi>M</mi></math>, masa molar). En la atmósfera, en condiciones normales (<math display=\"inline\"><mrow><mn>20</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>C): <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>343</mn></mrow></math> m/s.",
      "<strong>Ondas superficiales de los líquidos</strong>: <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mi>g</mi><mi>h</mi></mrow></msqrt></mrow></math> (<math display=\"inline\"><mi>h</mi></math>, profundidad)."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Deducción de la ecuación de onda en una cuerda (ampliación editorial, T3)"
    },
    {
     "mota": "oharra",
     "titulua": "Ampliación editorial (T3, 2026-08-27)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tercera laguna declarada en la cabecera: la ecuación de onda no se deducía, sino que se presentaba. Aquí está la deducción estándar en una cuerda tensa. Fuentes: Sears-Zemansky (cap. 15), Alonso-Finn II."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Sea una cuerda tensada con tensión <math display=\"inline\"><mi>T</mi></math>, densidad lineal de masa <math display=\"inline\"><mi>μ</mi></math> (kg/m) y desplazamiento transversal pequeño <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Tomemos un trocito <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> (de masa <math display=\"inline\"><mrow><mi>μ</mi><mspace width=\"0.167em\"></mspace><mi>d</mi><mi>x</mi></mrow></math>): la tensión tira de él en los dos extremos, pero como la cuerda está curvada, las direcciones de los dos tirones son ligeramente distintas y queda una fuerza transversal neta."
    },
    {
     "mota": "testua",
     "html": "Para pendientes pequeñas (<math display=\"inline\"><mrow><mi>θ</mi><mo>≈</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>∂</mi><mi>y</mi><mi>/</mi><mi>∂</mi><mi>x</mi></mrow></math>), la componente transversal es <math display=\"inline\"><mrow><mi>T</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>y</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y la fuerza neta es la diferencia de pendiente entre los dos extremos: <math display=\"block\"><mrow><msub><mi>F</mi><mi>y</mi></msub><mo>=</mo><mi>T</mi><msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>∂</mi><mi>y</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi></mrow></msub><mo>−</mo><mi>T</mi><msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>∂</mi><mi>y</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>x</mi></msub><mo>=</mo><mi>T</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Aplicando la segunda ley de Newton al trocito (<math display=\"inline\"><mrow><msub><mi>F</mi><mi>y</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mspace width=\"0.167em\"></mspace><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi><mi>/</mi><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mi>μ</mi><mi>T</mi></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>↔</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>=</mo><msqrt><mfrac><mi>T</mi><mi>μ</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La deducción da a la vez dos cosas: la <em>forma</em> de la ecuación de onda (la segunda derivada espacial <math display=\"inline\"><mo>∝</mo></math> la aceleración) y la velocidad de propagación a partir de las propiedades de la cuerda — la fórmula <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mi>T</mi><mi>/</mi><mi>μ</mi></mrow></msqrt></mrow></math> presentada antes, ahora demostrada. Comprobación directa: cualquier función <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (onda viajera) es solución, por la regla de la cadena."
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
       "html": "El mismo patrón se repite en la naturaleza: en un gas <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mi>γ</mi><mi>p</mi><mi>/</mi><mi>ρ</mi></mrow></msqrt></mrow></math> (sonido), y en el tema 14 (02fg_04) los campos electromagnéticos cumplen la misma ecuación con velocidad <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub></mrow></msqrt></mrow></math> — &quot;rigidez dividida por inercia&quot; es una estructura universal."
      }
     ]
    }
   ]
  },
  {
   "id": "a26",
   "maila": 1,
   "izenburua": "Ondas armónicas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Si una onda armónica se propaga a través de un medio, cada punto del medio realiza un movimiento armónico simple. Parámetros:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Longitud de onda</strong> (<math display=\"inline\"><mi>λ</mi></math>): distancia mínima entre dos puntos consecutivos que se encuentran en el mismo estado de vibración.",
      "<strong>Amplitud</strong> (<math display=\"inline\"><mi>A</mi></math>): valor máximo de la elongación de las partículas del medio.",
      "<strong>Periodo</strong> (<math display=\"inline\"><mi>T</mi></math>): tiempo que necesita el movimiento ondulatorio para propagarse una longitud de onda.",
      "<strong>Frecuencia</strong> (<math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>T</mi></mrow></math>): número de oscilaciones que realiza cada punto por unidad de tiempo."
     ]
    },
    {
     "mota": "irudia",
     "oina": "&quot;Fotografía instantánea&quot; de una onda armónica: se indican la longitud de onda <math display=\"inline\"><mi>λ</mi></math>\n  y la amplitud <math display=\"inline\"><mi>A</mi></math>, en la dirección de la velocidad de propagación <math display=\"inline\"><mi>v</mi></math>.",
     "src": "../media/irudiak/6ae5d13a47efc3ae.svg",
     "zabalera": 387
    },
    {
     "mota": "testua",
     "html": "En un instante determinado <math display=\"inline\"><mi>t</mi></math>, el desplazamiento es <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mi>δ</mi></math>, la constante de fase, depende del origen; <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>λ</mi></mrow></math>, el <strong>número de onda</strong>, SI: <math display=\"inline\"><msup><mi>m</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>). Para una onda que se propaga hacia la derecha (<math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mi>k</mi><mi>v</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>f</mi></mrow></math> es la <strong>frecuencia angular</strong>. Relación fundamental:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mi>f</mi><mi>λ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La velocidad transversal de un punto fijo es <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>v</mi><mi>y</mi></msub><mo>=</mo><mi>∂</mi><mi>y</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mi>−</mi><mi>ω</mi><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>."
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Interferencia de ondas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Principio de superposición</strong>: cuando se combinan dos o más ondas, la onda resultante es la suma algebraica de las ondas. Si se superponen dos ondas armónicas de igual amplitud, frecuencia angular y número de onda, pero desfasadas,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "usando la identidad trigonométrica (<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math></span>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>δ</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mfrac><mi>δ</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Tiene el mismo número de onda y la misma frecuencia angular, pero la amplitud es <math display=\"inline\"><mrow><mn>2</mn><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>δ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, que depende del desfase <math display=\"inline\"><mi>δ</mi></math>:"
    },
    {
     "mota": "irudia",
     "oina": "Patrones de interferencia: superposición de <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math> (rojo) y <math display=\"inline\"><msub><mi>y</mi><mn>2</mn></msub></math> (verde)\n    (<math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub></mrow></math>, en azul). Cuando <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mn>0</mn></mrow></math> las amplitudes se suman; cuando <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>π</mi></mrow></math>\n  se anulan por completo.",
     "src": "../media/irudiak/6ae64eac436aea46.svg",
     "zabalera": 409
    },
    {
     "mota": "testua",
     "html": "La interferencia es <strong>constructiva</strong> cuando <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>2</mn><mi>π</mi><mo>,</mo><mn>4</mn><mi>π</mi><mo>,</mo><mi>…</mi></mrow></math> (amplitud resultante máxima, <math display=\"inline\"><mrow><mn>2</mn><mi>A</mi></mrow></math>); <strong>destructiva</strong> cuando <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>π</mi><mo>,</mo><mn>3</mn><mi>π</mi><mo>,</mo><mi>…</mi></mrow></math> (amplitud resultante nula)."
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "Ondas estacionarias",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Superposición de ondas viajeras que se mueven en sentidos opuestos, cuando las ondas están en un espacio limitado (<math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>+</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Es armónica, con la misma frecuencia que sus componentes, pero la amplitud (<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) es independiente del tiempo y varía de forma sinusoidal en función de <math display=\"inline\"><mi>x</mi></math> — algunos puntos (<math display=\"inline\"><mi>x</mi></math> donde <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>) están siempre en reposo, los <strong>nodos</strong>; otros (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>) oscilan con amplitud máxima, los <strong>antinodos</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cuerda con los dos extremos fijos"
    },
    {
     "mota": "testua",
     "html": "En una cuerda de longitud <math display=\"inline\"><mi>L</mi></math>, el hecho de tener los dos extremos fijos (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi></mrow></math> deben ser nodos) condiciona qué longitudes de onda son posibles:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>n</mi><mfrac><msub><mi>λ</mi><mi>n</mi></msub><mn>2</mn></mfrac><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "De ahí, las <strong>frecuencias de resonancia</strong>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mfrac><mi>v</mi><msub><mi>λ</mi><mi>n</mi></msub></mfrac><mo>=</mo><mi>n</mi><mfrac><mi>v</mi><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo>=</mo><mi>n</mi><msub><mi>f</mi><mn>1</mn></msub><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>f</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>v</mi><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (oinarrizko maiztasuna). </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las frecuencias que son múltiplos de <math display=\"inline\"><msub><mi>f</mi><mn>1</mn></msub></math> son los <strong>armónicos</strong>."
    },
    {
     "mota": "irudia",
     "oina": "Los tres primeros modos (armónicos) de una cuerda con los dos extremos fijos:\n    <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> (fundamental, <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mi>L</mi></mrow></math>), <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>L</mi></mrow></math>), <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>\n    (<math display=\"inline\"><mrow><msub><mi>λ</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn><mi>L</mi><mi>/</mi><mn>3</mn></mrow></math>).",
     "src": "../media/irudiak/8aac5f37bf97d4de.svg",
     "zabalera": 368
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cuerda con un extremo fijo y el otro libre"
    },
    {
     "mota": "testua",
     "html": "En este caso el extremo fijo debe ser un nodo y el extremo libre un antinodo:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>n</mi><mfrac><msub><mi>λ</mi><mi>n</mi></msub><mn>4</mn></mfrac><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mfrac><mi>v</mi><mrow><mn>4</mn><mi>L</mi></mrow></mfrac><mo>=</mo><mi>n</mi><msub><mi>f</mi><mn>1</mn></msub><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>f</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>v</mi><mrow><mn>4</mn><mi>L</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En este caso solo aparecen los armónicos <strong>impares</strong> (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>,</mo><mi>…</mi></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ondas sonoras estacionarias en una columna de aire"
    },
    {
     "mota": "testua",
     "html": "El mismo fenómeno se aplica a los tubos de órgano: un <strong>tubo abierto por los dos lados</strong> equivale a una cuerda con los dos extremos fijos (antinodos en los dos extremos, nodo en la variación de presión), y un <strong>tubo cerrado por un lado</strong> equivale a una cuerda con un extremo fijo y el otro libre (nodo en el extremo cerrado, antinodo en el extremo abierto). Los antinodos están fuera del tubo, más allá de los extremos, por lo que la longitud efectiva del tubo es <math display=\"inline\"><mrow><mi>L</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>L</mi></mrow></math> (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>L</mi></mrow></math>, corrección de extremo, que depende del diámetro del tubo)."
    }
   ]
  },
  {
   "id": "a29",
   "maila": 1,
   "izenburua": "Efecto Doppler",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cuando hay movimiento relativo entre la fuente que genera la onda y el receptor, la frecuencia que mide el receptor y la emitida por la fuente no son iguales: <strong>cuando se acercan</strong>, la frecuencia observada es mayor (tono más agudo); <strong>cuando se alejan</strong>, menor (tono más grave)."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>r</mi></msub><mo>=</mo><mfrac><mrow><mi>v</mi><mo>±</mo><msub><mi>u</mi><mi>r</mi></msub></mrow><mrow><mi>v</mi><mo>±</mo><msub><mi>u</mi><mi>i</mi></msub></mrow></mfrac><msub><mi>f</mi><mi>i</mi></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mi>v</mi></math> es la velocidad del sonido en el medio, <math display=\"inline\"><msub><mi>u</mi><mi>i</mi></msub></math> la velocidad de la fuente, <math display=\"inline\"><msub><mi>u</mi><mi>r</mi></msub></math> la del receptor, <math display=\"inline\"><msub><mi>f</mi><mi>i</mi></msub></math> la frecuencia que emite la fuente y <math display=\"inline\"><msub><mi>f</mi><mi>r</mi></msub></math> la que mide el receptor. Signos: en el denominador, <math display=\"inline\"><mi>−</mi></math> si la fuente va hacia el receptor (se acerca); en el numerador, <math display=\"inline\"><mi>+</mi></math> si el receptor va hacia la fuente."
    },
    {
     "mota": "irudia",
     "oina": "Frentes de onda de una fuente en movimiento: comprimidos\n  delante del movimiento (mayor frecuencia), dispersos detrás (menor\n  frecuencia).",
     "src": "../media/irudiak/a42919d2186ecbaa.svg",
     "zabalera": 350
    },
    {
     "mota": "testua",
     "html": "Se distinguen tres casos, tomando como referencia el medio en reposo:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Observador en reposo, fuente en movimiento</strong>: <math display=\"inline\"><mrow><msub><mi>f</mi><mi>r</mi></msub><mo>=</mo><mi>v</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mo>∓</mo><msub><mi>u</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.167em\"></mspace><msub><mi>f</mi><mi>i</mi></msub></mrow></math> (<math display=\"inline\"><mi>−</mi></math> se acerca, <math display=\"inline\"><mi>+</mi></math> se aleja).",
      "<strong>Fuente en reposo, observador en movimiento</strong>: <math display=\"inline\"><mrow><msub><mi>f</mi><mi>r</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mo>±</mo><msub><mi>u</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>v</mi><mspace width=\"0.167em\"></mspace><msub><mi>f</mi><mi>i</mi></msub></mrow></math> (<math display=\"inline\"><mi>+</mi></math> se acerca, <math display=\"inline\"><mi>−</mi></math> se aleja).",
      "<strong>Ambos en movimiento</strong>: se resuelve en dos pasos, usando el medio en reposo como intermediario (primero fuente<math display=\"inline\"><mo>→</mo></math>medio, luego medio<math display=\"inline\"><mo>→</mo></math>receptor)."
     ]
    }
   ]
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Ejercicios",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una selección de la lista oficial de ejercicios (2012-2013) del tema 8 (&quot;Ondas&quot;) de la asignatura <strong>Física General</strong> de la UPV/EHU."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La ecuación de una onda armónica que se propaga en una cuerda es: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0.001</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>62.8</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>x</mi><mo>+</mo><mn>314</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. (a) ¿En qué sentido se desplaza la onda? ¿Cuál es su velocidad? (b) Hállense la longitud de onda, la frecuencia y el periodo de la onda. (c) ¿Cuál es la velocidad máxima de cualquier porción de la cuerda? <strong>Resultado</strong>: (a) <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>5</mn></mrow></math> m/s; (b) <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> m, <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>50</mn></mrow></math> Hz; (c) <math display=\"inline\"><mn>0.314</mn></math> m/s."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una cuerda larga de masa por unidad de longitud <math display=\"inline\"><mn>0.1</mn></math> kg/m está sometida a una tensión constante de <math display=\"inline\"><mn>10</mn></math> N. En el extremo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> de la cuerda, un motor genera un movimiento armónico de <math display=\"inline\"><mn>5</mn></math> oscilaciones por segundo y amplitud <math display=\"inline\"><mn>4</mn></math> cm. (a) ¿Cuál es la velocidad de la onda? (b) ¿Cuál es la longitud de onda? <strong>Resultado</strong>: (a) <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>10</mn></mrow></math> m/s; (b) <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math> m."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una onda armónica se propaga con velocidad <math display=\"inline\"><mn>3</mn></math> m/s en el sentido positivo del eje <math display=\"inline\"><mi>x</mi></math>. La frecuencia y la amplitud de la onda son <math display=\"inline\"><mn>2</mn></math> Hz y <math display=\"inline\"><mn>5</mn></math> cm, respectivamente. La elongación de un punto situado a <math display=\"inline\"><mn>10</mn></math> cm del origen es nula en el instante inicial. Hállese la ecuación de la onda. <strong>Resultado</strong>: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><mi>/</mi><mn>3</mn><mspace width=\"0.167em\"></mspace><mi>x</mi><mo>−</mo><mn>4</mn><mi>π</mi><mi>t</mi><mo>−</mo><mn>0.4</mn><mi>π</mi><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> (SI)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dos ondas sinusoidales de la misma frecuencia se propagan por una cuerda larga. Las ondas tienen amplitudes de <math display=\"inline\"><mn>3</mn></math> cm y <math display=\"inline\"><mn>2</mn></math> cm, y la segunda onda tiene un retardo de <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> respecto a la primera. Obténgase la amplitud de la superposición de las dos ondas. <strong>Resultado</strong>: <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>3.6</mn></mrow></math> cm."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La frecuencia fundamental de una cuerda con los dos extremos fijos es <math display=\"inline\"><mn>180</mn></math> Hz. ¿Cuál de las siguientes acciones reduce la frecuencia fundamental a <math display=\"inline\"><mn>90</mn></math> Hz? (a) Duplicar la tensión y duplicar la longitud; (b) reducir la tensión a la mitad y mantener constantes la masa por unidad de longitud y la longitud; (c) mantener constantes la tensión y la masa por unidad de longitud y duplicar la longitud; (d) mantener constantes la tensión y la masa por unidad de longitud y reducir la longitud a la mitad. <strong>Resultado</strong>: (c) — como <math display=\"inline\"><mrow><msub><mi>f</mi><mn>1</mn></msub><mo>=</mo><mi>v</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><mn>1</mn><mi>/</mi><mi>L</mi></mrow></math>, al duplicar <math display=\"inline\"><mi>L</mi></math>, <math display=\"inline\"><msub><mi>f</mi><mn>1</mn></msub></math> se reduce a la mitad."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una cuerda con los dos extremos fijos y de <math display=\"inline\"><mn>3</mn></math> m de longitud vibra en su tercer armónico. El desplazamiento máximo de los puntos de la cuerda es <math display=\"inline\"><mn>4</mn></math> mm y la velocidad de las ondas transversales es <math display=\"inline\"><mn>50</mn></math> m/s. ¿Cuáles son la longitud de onda y la frecuencia de la onda? Escríbase la ecuación de onda. <strong>Resultado</strong>: <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn></mrow></math> m, <math display=\"inline\"><mrow><msub><mi>f</mi><mn>3</mn></msub><mo>=</mo><mn>25</mn></mrow></math> Hz, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>y</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>50</mn><mi>π</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> mm."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La frecuencia fundamental de la cuerda de un violín de longitud <math display=\"inline\"><mn>40</mn></math> cm y masa <math display=\"inline\"><mn>1.2</mn></math> g es <math display=\"inline\"><mn>500</mn></math> Hz. (a) ¿Cuál es la longitud de onda de la onda estacionaria? (b) ¿Cuál es la tensión de la cuerda? <strong>Resultado</strong>: (a) <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0.8</mn></mrow></math> m; (b) <math display=\"inline\"><mrow><msub><mi>F</mi><mi>T</mi></msub><mo>=</mo><mn>480</mn></mrow></math> N."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La longitud de un tubo de órgano abierto por los dos extremos es <math display=\"inline\"><mn>1</mn></math> m. Si la velocidad del sonido es <math display=\"inline\"><mn>343</mn></math> m/s, ¿cuáles son las frecuencias y las longitudes de onda de las ondas estacionarias permitidas en ese tubo? <strong>Resultado</strong>: <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mi>/</mi><mi>n</mi></mrow></math> m, <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mn>172</mn><mi>n</mi></mrow></math> Hz, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un diapasón de <math display=\"inline\"><mn>460</mn></math> Hz produce resonancia en un tubo vertical lleno de agua cuando el agua está a <math display=\"inline\"><mn>18.3</mn></math> cm y a <math display=\"inline\"><mn>55.8</mn></math> cm del extremo. Hállese la velocidad del sonido en el aire. <strong>Resultado</strong>: corrección de extremo <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>L</mi><mo>=</mo><mn>0.5</mn></mrow></math> cm; de ahí <math display=\"inline\"><mrow><mi>v</mi><mo>≈</mo><mn>343</mn></mrow></math> m/s."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La frecuencia del claxon de un coche parado es <math display=\"inline\"><mn>400</mn></math> Hz. Hállense la longitud de onda del sonido y la frecuencia observada si el coche se mueve a una velocidad de <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>34</mn></mrow></math> m/s en dirección a un oyente en reposo (<math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>343</mn></mrow></math> m/s). <strong>Resultado</strong>: <math display=\"inline\"><mn>444</mn></math> Hz, <math display=\"inline\"><mn>0.77</mn></math> m."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un coche se acerca a una pared reflectante. A un observador en reposo detrás del coche le llega el sonido del claxon del coche, de <math display=\"inline\"><mn>745</mn></math> Hz, y el sonido reflejado en la pared, de <math display=\"inline\"><mn>863</mn></math> Hz. (a) ¿Cuál es la velocidad del coche? (b) ¿Cuál es la frecuencia del claxon? <strong>Resultado</strong>: (a) <math display=\"inline\"><mn>90.6</mn></math> km/h; (b) <math display=\"inline\"><mn>800</mn></math> Hz."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La longitud de onda de la línea azul del espectro del hidrógeno es <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>486</mn></mrow></math> nm. En el espectro del hidrógeno emitido por una galaxia muy lejana, esa línea se observa en la Tierra a <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>550</mn></mrow></math> nm. ¿A qué velocidad se aleja de nosotros esa galaxia? (velocidad de la luz <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></math> m/s). <strong>Resultado</strong>: <math display=\"inline\"><mrow><mn>3.95</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup></mrow></math> m/s."
      }
     ]
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "Más exámenes (Electromagnetismoak/ cuaderno)",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los ejercicios siguientes se han transcrito de los exámenes oficiales de la asignatura <strong>Física General</strong> de la UPV/EHU (2012-2014), a partir de las fotos del cuaderno del usuario (<code>espazio-ontzia/08_elektromagnetismoa/elektromagnetismo/ Elektromagnetismoak/</code>). Solucionario completo: <code>espazio-ontzia/08_elektromagnetismoa/elektromagnetismo/ebazpenak/</code>. En el original solo figuraba el resultado (en muchos casos sin desarrollo completo); aquí se ha construido el desarrollo completo, para llegar al resultado original (tomado como prueba)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El conductor de un coche estudia Física y está comprobando las consecuencias del efecto Doppler; para ello lleva en el coche un instrumento para medir la frecuencia del sonido, listo para usar. Es Nochebuena y los coches están parados en el Bulevar de San Sebastián; nuestro estudiante está parado en su coche, esperando a que el semáforo se ponga en verde. En ese momento, una ambulancia se acerca por detrás a velocidad constante, y el frecuencímetro que nuestro estudiante lleva en el coche marca una frecuencia de 905 Hz mientras la ambulancia se acerca. Después de adelantarlo, a medida que la ambulancia se aleja, el aparato indica una frecuencia de 850 Hz. ¿Cuál es la frecuencia original del sonido de la ambulancia (en Hz) y cuál la velocidad de la ambulancia (en km/h)? <strong>1 punto</strong>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Solución.</strong>"
    },
    {
     "mota": "testua",
     "html": "El conductor (observador) está parado, y la ambulancia (fuente) se mueve con velocidad constante <math display=\"inline\"><mi>v</mi></math>, primero acercándose y luego alejándose. En este caso usaremos la fórmula del efecto Doppler para fuente en movimiento y observador en reposo:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mrow><mtext mathvariant=\"normal\">hautemana </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><mo>⋅</mo><mfrac><msub><mi>v</mi><mi>s</mi></msub><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>∓</mo><mi>v</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><msub><mi>f</mi><mn>0</mn></msub></math> es la frecuencia original de la fuente, <math display=\"inline\"><msub><mi>v</mi><mi>s</mi></msub></math> la velocidad del sonido en el aire (<math display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>=</mo><mn>343</mn></mrow></math> m/s, a <math display=\"inline\"><mrow><mn>20</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>C) y <math display=\"inline\"><mi>v</mi></math> la velocidad de la ambulancia. Convenio de signos: en el denominador se toma <math display=\"inline\"><mrow><mi>−</mi><mi>v</mi></mrow></math> cuando la fuente se acerca (porque la frecuencia aumenta), y <math display=\"inline\"><mrow><mi>+</mi><mi>v</mi></mrow></math> cuando se aleja (porque la frecuencia disminuye)."
    },
    {
     "mota": "testua",
     "html": "<strong>Al acercarse</strong> (<math display=\"inline\"><mrow><msub><mi>f</mi><mn>1</mn></msub><mo>=</mo><mn>905</mn></mrow></math> Hz):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mn>1</mn></msub><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><mo>⋅</mo><mfrac><msub><mi>v</mi><mi>s</mi></msub><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>−</mo><mi>v</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Al alejarse</strong> (<math display=\"inline\"><mrow><msub><mi>f</mi><mn>2</mn></msub><mo>=</mo><mn>850</mn></mrow></math> Hz):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mn>2</mn></msub><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><mo>⋅</mo><mfrac><msub><mi>v</mi><mi>s</mi></msub><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>+</mo><mi>v</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Cálculo de la velocidad.</strong> Dividiendo (1) entre (2), <math display=\"inline\"><msub><mi>f</mi><mn>0</mn></msub></math> desaparece:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>f</mi><mn>1</mn></msub><msub><mi>f</mi><mn>2</mn></msub></mfrac><mo>=</mo><mfrac><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>+</mo><mi>v</mi></mrow><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>−</mo><mi>v</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sea <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mfrac><msub><mi>f</mi><mn>1</mn></msub><msub><mi>f</mi><mn>2</mn></msub></mfrac><mo>=</mo><mfrac><mn>905</mn><mn>850</mn></mfrac><mo>=</mo><mn>1.0647</mn></mrow></math>. Entonces:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mi>s</mi></msub><mo>−</mo><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>v</mi><mi>s</mi></msub><mo>+</mo><mi>v</mi></mrow></math> <math display=\"block\"><mrow><mi>k</mi><msub><mi>v</mi><mi>s</mi></msub><mo>−</mo><mi>k</mi><mi>v</mi><mo>=</mo><msub><mi>v</mi><mi>s</mi></msub><mo>+</mo><mi>v</mi></mrow></math> <math display=\"block\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msub><mi>v</mi><mi>s</mi></msub><mo>⋅</mo><mfrac><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo los valores:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mn>343</mn><mo>⋅</mo><mfrac><mrow><mn>1.0647</mn><mo>−</mo><mn>1</mn></mrow><mrow><mn>1.0647</mn><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mn>343</mn><mo>⋅</mo><mfrac><mn>0.0647</mn><mn>2.0647</mn></mfrac><mo>=</mo><mn>343</mn><mo>⋅</mo><mn>0.03134</mn><mo>≈</mo><mn>10.75</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Expresado en km/h (<math display=\"inline\"><mrow><mi>×</mi><mn>3.6</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mn>10.75</mn><mo>×</mo><mn>3.6</mn><mo>≈</mo><mn>38.7</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> km/h </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Cálculo de la frecuencia original.</strong> Despejando <math display=\"inline\"><msub><mi>f</mi><mn>0</mn></msub></math> de la ecuación (2):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mn>0</mn></msub><mo>=</mo><msub><mi>f</mi><mn>2</mn></msub><mo>⋅</mo><mfrac><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>+</mo><mi>v</mi></mrow><msub><mi>v</mi><mi>s</mi></msub></mfrac><mo>=</mo><mn>850</mn><mo>⋅</mo><mfrac><mrow><mn>343</mn><mo>+</mo><mn>10.75</mn></mrow><mn>343</mn></mfrac><mo>=</mo><mn>850</mn><mo>⋅</mo><mfrac><mn>353.75</mn><mn>343</mn></mfrac><mo>≈</mo><mn>876</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(Se obtiene el mismo resultado partiendo de la ecuación (1): <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>f</mi><mn>0</mn></msub><mo>=</mo><msub><mi>f</mi><mn>1</mn></msub><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mi>s</mi></msub><mo>−</mo><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msub><mi>v</mi><mi>s</mi></msub><mo>=</mo><mn>905</mn><mo>⋅</mo><mn>332.25</mn><mi>/</mi><mn>343</mn><mo>≈</mo><mn>876</mn></mrow></math></span> Hz, lo que comprueba la consistencia.)"
    },
    {
     "mota": "testua",
     "html": "Por tanto, la frecuencia original del sonido de la ambulancia y la velocidad son:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mn>0</mn></msub><mo>=</mo><mn>876</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>=</mo><mn>38.7</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> km/h </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ese resultado coincide con el resultado manuscrito original."
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_fisica_p192_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y verificación (SymPy); parámetros de la onda, velocidad de oscilación frente a velocidad de propagación, ondas estacionarias y armónicos (lambda_n=2L/n)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a32",
   "maila": 1,
   "izenburua": "Parámetros de la onda y ondas estacionarias",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Extraer <strong>todos los parámetros</strong> a partir de la ecuación de una onda en una cuerda, distinguir la <strong>velocidad de oscilación</strong> de la <strong>velocidad de propagación</strong> (clave conceptual) y las <strong>ondas estacionarias</strong> (nodos, armónicos)."
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "Parámetros de la onda",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Comparando la ecuación <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0.001</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>62.8</mn><mi>x</mi><mo>+</mo><mn>314</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> con el modelo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>+</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mn>0.001</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>=</mo><mn>62.8</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rad/m </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇒</mo><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>k</mi></mfrac><mo>=</mo><mn>0.1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>=</mo><mn>314</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rad/s </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇒</mo><mi>f</mi><mo>=</mo><mfrac><mi>ω</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mn>50</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mi>f</mi></mfrac><mo>=</mo><mn>0.02</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El <strong>signo positivo</strong> entre <math display=\"inline\"><mrow><mi>k</mi><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mi>ω</mi><mi>t</mi></mrow></math> indica que la onda se propaga en el <strong>sentido negativo</strong> del eje <math display=\"inline\"><mi>x</mi></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> va hacia <math display=\"inline\"><mrow><mi>+</mi><mi>x</mi></mrow></math>; <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>+</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hacia <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi></mrow></math>)."
    },
    {
     "mota": "irudia",
     "oina": "La <strong>fotografía</strong> de la onda (con <math display=\"inline\"><mi>t</mi></math> fijo): <strong>amplitud</strong> <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>0.001</mn></mrow></math> m y <strong>longitud de onda</strong> <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0.1</mn></mrow></math> m (de cresta a cresta). El patrón se repite en el espacio cada <math display=\"inline\"><mi>λ</mi></math>.",
     "src": "../media/irudiak/189c74ceb45318e7.svg",
     "zabalera": 217
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Las dos velocidades (la distinción clave)",
   "blokeak": [
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Velocidad de oscilación</strong> (de un punto de la cuerda, transversal): <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>v</mi><mi>y</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0.314</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>62.8</mn><mi>x</mi><mo>+</mo><mn>314</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, con valor máximo <math display=\"inline\"><mn>0.314</mn></math> m/s (cuando el coseno <math display=\"inline\"><mn>1</mn></math>). Cómo <strong>sube y baja</strong> cada punto.",
      "<strong>Velocidad de propagación</strong> (de la onda): <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>λ</mi><mi>T</mi></mfrac><mo>=</mo><mfrac><mn>0.1</mn><mn>0.02</mn></mfrac><mo>=</mo><mn>5</mn></mrow></math> m/s. Cómo avanza el <strong>patrón</strong>."
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  <strong>Velocidad de oscilación <math display=\"inline\"><mo>≠</mo></math> velocidad de propagación.</strong> El punto material vibra a <math display=\"inline\"><mn>0.314</mn></math> m/s;\n  el patrón de la onda, en cambio, se propaga a <math display=\"inline\"><mn>5</mn></math> m/s. Dos cosas distintas.\n</em>"
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "Ondas estacionarias",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Dos ondas <strong>opuestas</strong> superpuestas (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>+</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) forman una <strong>onda estacionaria</strong>: <strong>nodos</strong> (puntos que no vibran) y <strong>antinodos</strong> (amplitud <math display=\"inline\"><mrow><mn>2</mn><mi>A</mi></mrow></math>). La <strong>distancia entre nodos consecutivos</strong> es <math display=\"inline\"><mrow><mi>λ</mi><mi>/</mi><mn>2</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Armónicos</strong> (cuerda fija en los dos extremos): <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mi>/</mi><mn>2</mn><mo>=</mo><mi>L</mi></mrow></math> en el primer armónico, y en general"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>L</mi></mrow><mi>n</mi></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mi>L</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>L</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>LANDETA1_0097</code>, páginas 192-193; &quot;FÍSICA LANDETA&quot;). Verificado (SymPy/numéricamente): <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0.1</mn></mrow></math> m, <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>50</mn></mrow></math> Hz, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0.02</mn></mrow></math> s, velocidad máxima de oscilación <math display=\"inline\"><mn>0.314</mn></math> m/s y velocidad de propagación <math display=\"inline\"><mn>5</mn></math> m/s (distintas), <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mi>L</mi><mi>/</mi><mi>n</mi></mrow></math>. Signo positivo <math display=\"inline\"><mo>⇒</mo></math> dirección <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi></mrow></math>. Sin correcciones. Véase <code>koadernoa_landeta1_fisica_p192.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_fisica_p140_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y verificación; física de landeta1 (MAS, ondas, péndulos, Doppler)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "Longitud de onda y ecuación de la onda armónica",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Deducción de la ecuación</strong> de una onda armónica a partir del <strong>retardo temporal</strong> entre el foco y un punto."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Longitud de onda y ecuación"
    },
    {
     "mota": "testua",
     "html": "Longitud de onda <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>v</mi><mi>T</mi></mrow></math>. El punto a distancia <math display=\"inline\"><mi>x</mi></math> vibra con un retardo <math display=\"inline\"><mrow><mi>x</mi><mi>/</mi><mi>v</mi></mrow></math> respecto al foco, de ahí:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>−</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>λ</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mi>v</mi><mi>T</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>k</mi></math> = número de onda. La ecuación combina la periodicidad temporal y la espacial."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>LANDETA1_0071</code>, páginas 140-141; &quot;FÍSICA LANDETA&quot;). <strong>Longitud de onda</strong> <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>v</mi><mi>T</mi></mrow></math>, <strong>ecuación de la onda armónica</strong> <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>−</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (a partir del retardo entre el foco y el punto <math display=\"inline\"><mi>x</mi></math>), <strong>número de onda</strong> <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>λ</mi></mrow></math>; un test (relación energía-amplitud, MAS numérico). Verificado. Sin correcciones. Véase <code>koadernoa_landeta_fisica_p140.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_fisica_p166_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y verificación; física de landeta1 (MAS, ondas, péndulos, Doppler)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a37",
   "maila": 2,
   "izenburua": "Efecto Doppler, análisis dimensional y Bernoulli",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Efecto <strong>Doppler</strong> acústico, <strong>análisis dimensional</strong> y ejercicios de fluidos/MAS."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Efecto Doppler"
    },
    {
     "mota": "testua",
     "html": "Frecuencia <strong>percibida</strong> en función de las velocidades del observador y de la fuente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mfrac><mrow><mi>v</mi><mo>±</mo><msub><mi>v</mi><mtext mathvariant=\"normal\">beh</mtext></msub></mrow><mrow><mi>v</mi><mo>∓</mo><msub><mi>v</mi><mtext mathvariant=\"normal\">itur</mtext></msub></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Ejemplo: dos ambulancias/sirenas.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Análisis dimensional y Bernoulli"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  <strong>Análisis dimensional</strong>: comprobar las dimensiones de magnitudes físicas (presión, energía por unidad de volumen:\n  <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtext mathvariant=\"normal\">energia</mtext><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtext mathvariant=\"normal\">bolumena</mtext><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>). Repaso de la ecuación de <strong>Bernoulli</strong> y un ejercicio numérico de MAS.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>LANDETA1_0084</code>, páginas 166-167; &quot;FÍSICA LANDETA&quot;). <strong>Efecto Doppler acústico</strong> (<math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mo>±</mo><msub><mi>v</mi><mtext mathvariant=\"normal\">beh</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mo>∓</mo><msub><mi>v</mi><mtext mathvariant=\"normal\">itur</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; dos sirenas), <strong>análisis dimensional</strong> (presión = energía/volumen), <strong>Bernoulli</strong> y ejercicio numérico de MAS. Verificado. Sin correcciones. Véase <code>koadernoa_landeta_fisica_p166.typ</code>."
      }
     ]
    }
   ]
  }
 ]
};
