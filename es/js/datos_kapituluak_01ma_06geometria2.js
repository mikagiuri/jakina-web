/* JAKINA · kapitulua «B2 - Geometria eta koadernoak - IV» (01ma_06geometria2), desde edicion2/kapituluak/01ma_06geometria2/01ma_06geometria2.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["01ma_06geometria2"] = {
 "gakoa": "01ma_06geometria2",
 "titulua": "JAKINA - B2 - Geometría y cuadernos - IV",
 "azala": "B2 - Geometría y cuadernos - IV",
 "azpititulua": "Era I - Herramientas",
 "iturburua": "kapituluak/01ma_06geometria2/01ma_06geometria2.typ",
 "sarrera": [
  {
   "mota": "iturria",
   "proiektua": "koadernoa_iraide_p110_mk.typ",
   "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
   "hizkuntza": "es"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "TEMA 8: Geometría euclídea",
   "blokeak": []
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "8.1 Estructura afín euclídea de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En el espacio afín <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> disponemos del producto escalar estándar; con él, la distancia euclídea:"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Distancia euclídea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>×</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>,</mo></mrow></math> es decir, la norma (módulo) del vector que une los dos puntos. Propiedades (<math display=\"inline\"><mrow><mi>p</mi><mo>,</mo><mi>q</mi><mo>,</mo><mi>r</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>): <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (i) </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><mn>0</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (ii) </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇔</mo><mi>p</mi><mo>=</mo><mi>q</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (iii) </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (iv) </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(iv) la desigualdad triangular se deduce de la desigualdad de Minkowski:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>r</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>≤</mo><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>r</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Teorema de Pitágoras (en lenguaje de puntos)",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Pitágoras",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Siendo <math display=\"inline\"><mrow><mi>p</mi><mo>,</mo><mi>q</mi><mo>,</mo><mi>n</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>, si <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>n</mi></mrow><mo accent=\"true\">→</mo></mover><mo>⟂</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math> (es decir, <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mrow><mi>p</mi><mi>n</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><msup><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Cuando dotamos al espacio afín <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> de la distancia euclídea, se le llama <strong>espacio afín euclídeo</strong>."
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "8.2 Perpendicularidad",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Perpendicularidad",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los subespacios afines <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>T</mi></math> de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> son <strong>perpendiculares</strong> si sus direcciones <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>,</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> son ortogonales (<math display=\"inline\"><mrow><mo>∀</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>,</mo><mspace width=\"0.167em\"></mspace><mo>∀</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>:</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mn>0</mn></mrow></math>) y se cortan."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El mismo contenido está recogido en castellano en el cuaderno de CHUSA (p209 y siguientes), como comprobación cruzada. Demostración de Pitágoras: <math display=\"inline\"><mrow><msup><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>n</mi></mrow><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>n</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>2</mn><mover><mrow><mi>p</mi><mi>n</mi></mrow><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup></mrow></math>; por ortogonalidad se anula el término cruzado. Algunas frases del original que mezclan castellano y euskera son OCR/manuscrito deficiente. Los dos dibujos finales («EZ»/«BAI») ilustran la perpendicularidad."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p162_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Versor (vector unitario)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El <strong>versor</strong> es el vector de módulo <strong>uno</strong> (vector unitario). A partir de cualquier vector se obtiene el versor <strong>en su dirección</strong> dividiendo por el módulo."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "¿Qué vector tiene módulo uno?"
    },
    {
     "mota": "testua",
     "html": "El que cumple <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mn>1</mn></mrow></math>. Los vectores de la <strong>base canónica</strong> (<math display=\"inline\"><mrow><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) tienen módulo uno."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fórmula del versor"
    },
    {
     "mota": "testua",
     "html": "El versor en la dirección de un vector, dividiendo por el módulo:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mfrac><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow></mfrac><mo>=</mo><mi>λ</mi><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> non </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">eskalarra</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo"
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><msqrt><mrow><msup><mn>0</mn><mn>2</mn></msup><mo>+</mo><msup><mn>4</mn><mn>2</mn></msup><mo>+</mo><msup><mn>7</mn><mn>2</mn></msup></mrow></msqrt><mo>=</mo><msqrt><mn>65</mn></msqrt><mo>≈</mo><mn>8.06</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mfrac><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><msqrt><mn>65</mn></msqrt></mfrac><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>65</mn></msqrt></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mover><mi>u</mi><mo accent=\"true\">→</mo></mover></math> es el vector unitario en la dirección de <math display=\"inline\"><mover><mi>a</mi><mo accent=\"true\">→</mo></mover></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hoja suelta (<code>LANDETA1_0118</code>, apaisada, sin numerar; continuación de <code>0117</code>). Comprobado: la fórmula del versor <math display=\"inline\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow></mrow></math>, los módulos de la base canónica <math display=\"inline\"><mrow><mo>=</mo><mn>1</mn></mrow></math>, y <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><msqrt><mn>65</mn></msqrt><mo>≈</mo><mn>8.06</mn></mrow></math> (en el original <math display=\"inline\"><mn>8.065</mn></math>; pequeña diferencia de redondeo, <math display=\"inline\"><mrow><msqrt><mn>65</mn></msqrt><mo>=</mo><mn>8.062</mn></mrow></math>). El registro dice «fisica_general»; el contenido es de <strong>vectores/álgebra</strong>. Sin correcciones importantes. Véase <code>koadernoa_landeta1_alg_bertsorea.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_bertsorea_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; versor (vector unitario) u=a/norm(a), ejemplo a=(0,4,7) (hoja suelta)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Perpendicularidad: intersección y proyección",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Observación.</strong> Si <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>T</mi></math> son perpendiculares, <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> (un vector no nulo no puede ser ortogonal a sí mismo)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proposición 8.4"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mi>S</mi><mo>,</mo><mi>T</mi></mrow></math> son subespacios afines de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> y son <strong>perpendiculares</strong>, entonces <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math> es un <strong>único punto</strong>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Como son perpendiculares, <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi></mrow></math> (véase abajo), luego <math display=\"inline\"><mrow><mo>∃</mo><msub><mi>p</mi><mn>0</mn></msub><mo>∈</mo><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math>. Además <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, por lo tanto: <math display=\"block\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Complemento ortogonal e intersección"
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><msup><mi>W</mi><mo>⟂</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>:</mo><mo>∀</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>W</mi><mo>,</mo><mspace width=\"0.167em\"></mspace><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>W</mi><mo>⟂</mo><msup><mi>W</mi><mo>⟂</mo></msup></mrow></math>. Los subespacios <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi></mrow></math> y <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>q</mi><mo>+</mo><msup><mi>W</mi><mo>⟂</mo></msup></mrow></math> se cortan <strong>siempre</strong> en un punto:"
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supongamos, por reducción al absurdo, <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>. Por Grassmann (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi>W</mi><mo>⟂</mo></msup><mo>=</mo><mi>n</mi></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>W</mi><mo>∩</mo><msup><mi>W</mi><mo>⟂</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mi mathvariant=\"normal\">dim</mi><mi>W</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>0</mn><mo>+</mo><mn>1</mn><mo>=</mo><mi>n</mi><mo>+</mo><mn>1</mn><mi>.</mi></mrow></math> Pero como <math display=\"inline\"><mrow><mi>S</mi><mo>+</mo><mi>T</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mi>n</mi></mrow></math>; <math display=\"inline\"><mrow><mi>n</mi><mo>+</mo><mn>1</mn><mo>&gt;</mo><mi>n</mi></mrow></math> es una contradicción. Por tanto, <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proyección ortogonal"
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
       "html": "Dados un subespacio afín <math display=\"inline\"><mi>S</mi></math> y un punto <math display=\"inline\"><mi>p</mi></math>, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>p</mi><mo>+</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math> es la <strong>única recta</strong> perpendicular a <math display=\"inline\"><mi>S</mi></math> que pasa por <math display=\"inline\"><mi>p</mi></math>. Por la proposición 8.4, <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math> es un único punto: ese es la <strong>proyección ortogonal</strong> de <math display=\"inline\"><mi>p</mi></math> sobre <math display=\"inline\"><mi>S</mi></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El paso «<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>+</mo><mi>n</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi></mrow></math>» de la izquierda se simplifica a <math display=\"inline\"><mi>n</mi></math>, y añadiendo «<math display=\"inline\"><mrow><mi>+</mi><mn>1</mn></mrow></math>» de Grassmann resulta <math display=\"inline\"><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math> (la disposición del original es confusa). «ISEMPRE» («siempre»), «ERPIKO» y la notación «<math display=\"inline\"><msub><mi>x</mi><mi>p</mi></msub></math>» son OCR/manuscrito deficiente."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p168_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Complemento ortogonal: suma directa y cota de dimensión (Chusa)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La forma explícita de la distancia inducida por el producto escalar (que deja ver el origen del producto interior):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> , </mtext><mspace width=\"0.333em\"></mspace></mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Complemento ortogonal y suma directa"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></math> es un subespacio vectorial de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, existe el complemento ortogonal <math display=\"inline\"><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></math>, con <math display=\"block\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⊕</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>∀</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>,</mo><mspace width=\"0.167em\"></mspace><mo>∀</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cota de dimensión de los perpendiculares"
    },
    {
     "mota": "testua",
     "html": "Para subespacios afines perpendiculares (definición de perpendicularidad en 8.2), las consecuencias:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><msub><mi>S</mi><mn>3</mn></msub><mo>=</mo><mi>a</mi><mo>+</mo><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn><mo>⟂</mo></msubsup></mrow></math> es <strong>siempre</strong> perpendicular a <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> (comparten el mismo punto <math display=\"inline\"><mi>a</mi></math>).",
      "Si <math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>⊆</mo><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn><mo>⟂</mo></msubsup></mrow></math>, <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> también es perpendicular a <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "Por último, como <math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>⊕</mo><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn><mo>⟂</mo></msubsup><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>, si son perpendiculares:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub><mo>≤</mo><mi>n</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La suma directa del complemento ortogonal y la cota de dimensión de los perpendiculares proceden del cuaderno de CHUSA (p210), añadidas como complemento a la línea principal de IRAIDE; se han eliminado las definiciones y propiedades de distancia repetidas (que están en IRAIDE)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p210_mk.typ",
     "xehetasuna": "complemento ortogonal (suma directa) y cota de dimensión de los perpendiculares (sin repeticiones)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a8",
   "maila": 1,
   "izenburua": "Distancia a subespacios; proyección ortogonal",
   "blokeak": []
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Recordatorio de la perpendicularidad",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>S</mi><mo>⟂</mo><mi>T</mi><mo>⇔</mo><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi></mrow></math> y <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, en ese caso <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Desde un punto, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>p</mi><mo>+</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math> es perpendicular a <math display=\"inline\"><mi>S</mi></math>, y <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math> es la <strong>proyección ortogonal</strong> de <math display=\"inline\"><mi>p</mi></math> sobre <math display=\"inline\"><mi>S</mi></math>."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "8.3 Distancia entre subespacios",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Distancia (def. 9.6)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Distancia entre dos subconjuntos <math display=\"inline\"><mrow><mi>A</mi><mo>,</mo><mi>B</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>: <math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≔</mo><mrow><mi mathvariant=\"normal\">inf</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>a</mi><mo>∈</mo><mi>A</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>b</mi><mo>∈</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math> En particular, cuando <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≔</mo><mrow><mi mathvariant=\"normal\">inf</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>b</mi><mo>∈</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Observaciones 8.7.</strong> (1) Si <math display=\"inline\"><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>≠</mo><mi>∅</mi></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. (2) <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">inf</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>b</mi><mo>∈</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Proposición 8.8",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mi>S</mi></math> un subespacio afín de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> y <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>: <math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> donde <math display=\"inline\"><msub><mi>π</mi><mi>p</mi></msub></math> es la proyección ortogonal de <math display=\"inline\"><mi>p</mi></math> sobre <math display=\"inline\"><mi>S</mi></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1) Tomar <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>p</mi><mo>+</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math>. (2) Por la proposición 8.4, <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es un único punto. (3) El ínfimo de <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">inf</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>q</mi><mo>∈</mo><mi>S</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> se alcanza en el punto <math display=\"inline\"><msub><mi>π</mi><mi>p</mi></msub></math> (el pie de la perpendicular), luego <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La proposición 8.8 se deduce directamente de 8.4 (<math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>p</mi><mo>+</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math> corta a <math display=\"inline\"><mi>S</mi></math> en un único punto). Que el ínfimo se alcanza en <math display=\"inline\"><msub><mi>π</mi><mi>p</mi></msub></math> (y no en otro punto de <math display=\"inline\"><mi>S</mi></math>) se demuestra con el teorema de Pitágoras; ese último paso se completa en la página siguiente. El original tiene muchas palabras con OCR/manuscrito deficiente («GOOGEIK» = subespacios afines, «ALGISUAK», «EZ DA ERROREARIK»...)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p170_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Demostración de 8.8; distancia a un hiperplano (8.10)",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Demostración de la proposición 8.8 (Pitágoras)"
    },
    {
     "mota": "testua",
     "html": "Objetivo: <math display=\"inline\"><mrow><mo>∀</mo><mi>q</mi><mo>∈</mo><mi>S</mi><mo>,</mo><mspace width=\"0.167em\"></mspace><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mi>q</mi><mo>∈</mo><mi>S</mi></mrow></math> cualquiera. Como <math display=\"inline\"><mrow><msub><mi>π</mi><mi>p</mi></msub><mo>→</mo><mi>p</mi><mo>∈</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math> y <math display=\"inline\"><mrow><msub><mi>π</mi><mi>p</mi></msub><mo>→</mo><mi>q</mi><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, <math display=\"inline\"><mrow><msub><mi>π</mi><mi>p</mi></msub><mo>→</mo><mi>p</mi><mo>⟂</mo><msub><mi>π</mi><mi>p</mi></msub><mo>→</mo><mi>q</mi></mrow></math>. Por el teorema de Pitágoras: <math display=\"block\"><mrow><msup><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>π</mi><mi>p</mi></msub><mo>,</mo><mi>q</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>≥</mo><msup><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>,</mo></mrow></math> y tomando la raíz cuadrada (las distancias son no negativas), <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> para todo <math display=\"inline\"><mi>q</mi></math>. Por tanto, <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Observación 8.9.</strong> Cuando la base de un sistema de referencia afín es <strong>ortonormal</strong>, se le llama <strong>sistema de referencia ortonormal</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Corolario 8.10: distancia a un hiperplano"
    },
    {
     "mota": "ingurunea",
     "izena": "Corolario",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> y <math display=\"inline\"><mi>W</mi></math> un hiperplano afín. Si en un sistema de referencia ortonormal <math display=\"inline\"><mi>E</mi></math>, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>p</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y la ecuación implícita de <math display=\"inline\"><mi>W</mi></math> es <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>A</mi><mi>n</mi></msub><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>A</mi><mn>1</mn></msub><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>A</mi><mi>n</mi></msub><msub><mi>p</mi><mi>n</mi></msub><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><msqrt><mrow><msubsup><mi>A</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mi>…</mi><mo>+</mo><msubsup><mi>A</mi><mi>n</mi><mn>2</mn></msubsup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> es un hiperplano (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mn>2</mn><mo>=</mo><mn>3</mn><mo>−</mo><mn>1</mn></mrow></math>); su ecuación implícita en <math display=\"inline\"><msub><mi>E</mi><mi>k</mi></msub></math>: <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn></mrow></math>. Aplicando la fórmula:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>1</mn><mo>+</mo><mn>0</mn><mo>+</mo><mn>0</mn><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><msqrt><mrow><msup><mn>1</mn><mn>2</mn></msup><mo>+</mo><msup><mn>1</mn><mn>2</mn></msup><mo>+</mo><msup><mn>1</mn><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>3</mn></msqrt></mfrac><mo>=</mo><mfrac><msqrt><mn>3</mn></msqrt><mrow><mn>3</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el ejemplo, el resultado (<math display=\"inline\"><mrow><msqrt><mn>3</mn></msqrt><mi>/</mi><mn>3</mn></mrow></math>) coincide con el valor <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>E</mi><mi>k</mi></msub></msub></mrow></math> (el que el original usa en el desarrollo); con «<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>» del enunciado sería <math display=\"inline\"><msqrt><mn>3</mn></msqrt></math>. Hay una diferencia de lectura (quizá <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es un punto de <math display=\"inline\"><mi>S</mi></math>). La notación «<math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn><mo>=</mo><mn>0</mn></mrow></math>» quiere decir «<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mo>=</mo><mn>0</mn></mrow></math>». La demostración de la fórmula está en el libro de Castillo/Llorente (pág. 302), señalada por el autor en rojo."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p172_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Distancia entre dos subespacios paralelos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Recordando: <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≔</mo><mrow><mi mathvariant=\"normal\">inf</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>a</mi><mo>∈</mo><mi>A</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>b</mi><mo>∈</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, y de un punto a un subespacio <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (<math display=\"inline\"><msub><mi>π</mi><mi>p</mi></msub></math> = proyección ortogonal de <math display=\"inline\"><mi>p</mi></math> sobre <math display=\"inline\"><mi>S</mi></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proposición"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean <math display=\"inline\"><mrow><mi>S</mi><mo>,</mo><mi>T</mi></mrow></math> subespacios afines de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>. Sea <math display=\"inline\"><mi>P</mi></math> un subespacio, <math display=\"inline\"><mi>S</mi></math> y perpendicular a <math display=\"inline\"><mi>T</mi></math>, con <math display=\"inline\"><mrow><mi>P</mi><mo>∩</mo><mi>S</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>P</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Entonces: <math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Como <math display=\"inline\"><mrow><mi>s</mi><mo>∈</mo><mi>S</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>∈</mo><mi>T</mi></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Para demostrar la desigualdad contraria, sean <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><mi>S</mi></mrow></math>, <math display=\"inline\"><mrow><mi>q</mi><mo>∈</mo><mi>T</mi></mrow></math> cualesquiera. Como <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> (paralelos), puede definirse <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>∈</mo><mi>S</mi></mrow></math> de modo que cumpla <math display=\"inline\"><mrow><mover><mrow><mi>s</mi><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>t</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>. Entonces <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math> (dirección común) y <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>1</mn></msub><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>⟂</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>; por el teorema de Pitágoras: <math display=\"block\"><mrow><msup><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>q</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>≥</mo><msup><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>q</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo></mrow></math> (<math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>q</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, por la traslación paralela). Por tanto, <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> para todo <math display=\"inline\"><mrow><mi>p</mi><mo>,</mo><mi>q</mi></mrow></math>, y de ahí <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Juntando las dos desigualdades, <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Es un resultado clásico: la distancia entre dos subespacios afines paralelos y disjuntos es la distancia entre los pies (<math display=\"inline\"><mrow><mi>s</mi><mo>,</mo><mi>t</mi></mrow></math>) de la perpendicular común. El original condensa algunos pasos (en particular <math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>q</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> mediante la traslación). El «RIPÓSOLO» («¡RESUELTO!») en rojo del final cierra la demostración. Las notaciones «<math display=\"inline\"><msub><mover><mi>t</mi><mo accent=\"true\">→</mo></mover><mi>q</mi></msub></math>» y «<math display=\"inline\"><mover><mi>p</mi><mo accent=\"true\">¯</mo></mover></math>» son OCR deficiente."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p174_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Distancia entre subespacios: caso paralelo y caso general",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proposición (caso paralelo)"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean <math display=\"inline\"><mrow><mi>S</mi><mo>,</mo><mi>T</mi></mrow></math> dos subespacios afines <strong>paralelos</strong> de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math>. Entonces <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, siendo <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><mi>S</mi></mrow></math> cualquiera."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Como son paralelos y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>. Dos casos:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Si <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi></mrow></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>⊆</mo><mi>T</mi></mrow></math>, luego <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (para cualquier <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><mi>S</mi><mo>⊆</mo><mi>T</mi></mrow></math>).",
        "Si <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>, se construye <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>p</mi><mo>+</mo><msup><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math>; <math display=\"inline\"><mi>R</mi></math> es perpendicular a <math display=\"inline\"><mi>T</mi></math>, y desde <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> <math display=\"inline\"><mrow><msup><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>⊆</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math>, luego <math display=\"inline\"><mi>R</mi></math> también es perpendicular a <math display=\"inline\"><mi>S</mi></math>. Siendo <math display=\"inline\"><mrow><mi>R</mi><mo>∩</mo><mi>S</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>R</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>r</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, por la proposición anterior <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>r</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><msub><mi>r</mi><mi>p</mi></msub></math> = proyección ortogonal de <math display=\"inline\"><mi>p</mi></math> en <math display=\"inline\"><mi>T</mi></math>)."
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proposición (caso general)"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math> y <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>q</mi><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> (no necesariamente paralelos), <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math>. Sea <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>q</mi><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></mrow></math> el subespacio <strong>mínimo</strong> que contiene a <math display=\"inline\"><mi>S</mi></math> y es perpendicular a <math display=\"inline\"><mi>T</mi></math>. Entonces: <math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mo>∈</mo><mi>S</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edozein izanik. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La segunda proposición es la generalización de la primera: <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>q</mi><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></mrow></math> es perpendicular a <math display=\"inline\"><mi>S</mi></math> y a <math display=\"inline\"><mi>T</mi></math> (pues <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></math> es el complemento ortogonal de las dos direcciones), y hace el papel de «puente» perpendicular del caso paralelo. La demostración completa de la segunda no aparece en esta imagen (solo el enunciado). Las notaciones «ARGISTATUA», «OROKORREAN» son manuscrito deficiente."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p176_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Demostración del caso general; ejercicio 7",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Demostración del caso general (resumen)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>q</mi><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> y <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math> (<math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∉</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>). Se construye el subespacio <math display=\"inline\"><mi>P</mi></math> perpendicular a <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>T</mi></math>, con <math display=\"inline\"><mrow><mi>P</mi><mo>∩</mo><mi>S</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>P</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>; entonces <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Tomando <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>q</mi><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></mrow></math>, <math display=\"inline\"><mi>R</mi></math> y <math display=\"inline\"><mi>S</mi></math> son paralelos (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>R</mi></mrow></math>), por lo que:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>∀</mo><mi>p</mi><mo>∈</mo><mi>S</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 7: <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>)"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Calcular <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Procedimiento en tres pasos: (1) <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>p</mi><mo>+</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math>; (2) <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>; (3) <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>1) <math display=\"inline\"><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></math> y <math display=\"inline\"><mi>T</mi></math>.</strong> <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Los vectores normales de las ecuaciones generan <math display=\"inline\"><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>=</mo><mn>4</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></math> lo generan los vectores normales de las ecuaciones homogéneas (resultado estándar del álgebra lineal); está comprobado (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> linealmente independientes, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>2</mn></mrow></math>). El cálculo de <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> continúa en la página siguiente. La demostración de la izquierda es muy densa en el original; la notación «<math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>q</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>» pierde <math display=\"inline\"><mo>⟂</mo></math> (en la página anterior <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></math>)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p178_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Ejercicios 7 y 8: distancias",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cierre del ejercicio 7"
    },
    {
     "mota": "testua",
     "html": "Ecuaciones implícitas de <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>p</mi><mo>+</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math>: <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. Resolviendo <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math> (cuatro ecuaciones):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>π</mi><mi>p</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Distancia:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><msub><mi>π</mi><mi>p</mi></msub></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt><mo>=</mo><msqrt><mn>5</mn></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 8: <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>S</mi><mo>:</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> (plano) y <math display=\"inline\"><mrow><mi>T</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>4</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>3</mn><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> (recta). Parametrizando:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>5</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⊆</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), luego la recta <math display=\"inline\"><mi>T</mi></math> es <strong>paralela</strong> al plano <math display=\"inline\"><mi>S</mi></math>. Como <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>5</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∉</mo><mi>S</mi></mrow></math> (<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>−</mo><mn>5</mn><mo>+</mo><mn>0</mn><mo>=</mo><mi>−</mi><mn>6</mn><mo>≠</mo><mn>0</mn></mrow></math>), <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>: <strong>paralelos estrictos</strong>."
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>T</mi><mo>&lt;</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> para cualquier <math display=\"inline\"><mrow><mi>q</mi><mo>∈</mo><mi>T</mi></mrow></math>. Como <math display=\"inline\"><mi>S</mi></math> es un hiperplano, la fórmula del corolario 8.10:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>−</mi><mn>1</mn><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>0</mn><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><msqrt><mrow><msup><mn>1</mn><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mn>1</mn><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>6</mn><msqrt><mn>6</mn></msqrt></mfrac><mo>=</mo><msqrt><mn>6</mn></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todos los cálculos están comprobados (<math display=\"inline\"><mrow><msub><mi>π</mi><mi>p</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mn>5</mn></msqrt></mrow></math>; <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mn>6</mn></msqrt></mrow></math>). «S NIRPALANOA» es probablemente «S HIPERPLANOA» (pues se aplica la fórmula del hiperplano). El «<math display=\"inline\"><mrow><mi>⋅</mi><mn>2</mn></mrow></math>» de «<math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>5</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⋅</mo><mn>2</mn></mrow></math>» es una anotación de escala del parámetro, no parte de la ecuación."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p180_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "Ejercicio 11: <math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><msub><mi>T</mi><mi>a</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (con parámetro <math display=\"inline\"><mi>a</mi></math>)",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>6</mn><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>+</mo><mi>z</mi><mo>−</mo><mn>7</mn><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>T</mi><mi>a</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. Calcular <math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><msub><mi>T</mi><mi>a</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> en función de <math display=\"inline\"><mi>a</mi></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La recta <math display=\"inline\"><mi>S</mi></math>: <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>7</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dos casos"
    },
    {
     "mota": "testua",
     "html": "La dirección de <math display=\"inline\"><msub><mi>T</mi><mi>a</mi></msub></math> es fija, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; solo cambia el punto base con <math display=\"inline\"><mi>a</mi></math>. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munder><munder><mrow><mi>a</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ⓐ</mtext></mrow></munder><mo>→</mo><mi>S</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>T</mi><mi>a</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> puntu batean ebaki </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>→</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><msub><mi>T</mi><mi>a</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><munder><munder><mrow><mi>a</mi><mo>≠</mo><mi>−</mi><mn>1</mn></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ⓑ</mtext></mrow></munder><mo>→</mo><mi>S</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>T</mi><mi>a</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> paraleloak. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>a</mi><mo>≠</mo><mi>−</mi><mn>1</mn></mrow></math>: procedimiento"
    },
    {
     "mota": "testua",
     "html": "Se construye el subespacio <math display=\"inline\"><mi>R</mi></math> perpendicular a <math display=\"inline\"><mi>S</mi></math> y paralelo a <math display=\"inline\"><msub><mi>T</mi><mi>a</mi></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>7</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Su ecuación implícita mediante determinantes (con <math display=\"inline\"><mover><mrow><mi>p</mi><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover></math>, <math display=\"inline\"><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></math>, <math display=\"inline\"><mover><mi>w</mi><mo accent=\"true\">→</mo></mover></math> como columnas):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi><mo>−</mo><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo>−</mo><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>−</mo><mn>5</mn><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Esta página tiene algunas discrepancias de transcripción: la primera ecuación de <math display=\"inline\"><mi>S</mi></math> aparece como «<math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>b</mi><mo>−</mo><mn>6</mn><mo>=</mo><mn>0</mn></mrow></math>» (probablemente «<math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>6</mn></mrow></math>»); los puntos base (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>7</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) no cumplen exactamente las ecuaciones; y la columna <math display=\"inline\"><mover><mi>w</mi><mo accent=\"true\">→</mo></mover></math> de la matriz es «<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>» (no <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, como en la definición de <math display=\"inline\"><mi>R</mi></math>). Al desarrollar el determinante se obtiene <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>−</mo><mn>5</mn><mo>=</mo><mn>0</mn></mrow></math> (comprobado por dos métodos); el original escribe «<math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>+</mo><mn>5</mn><mo>=</mo><mn>0</mn></mrow></math>», que difiere en el signo de <math display=\"inline\"><mi>z</mi></math> (orden de las filas o error del autor)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p197_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Ejercicio 6: recta perpendicular a <math display=\"inline\"><mi>S</mi></math>",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Calcular la ecuación de la recta que pasa por el punto <math display=\"inline\"><mrow><mi>O</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y es perpendicular a <math display=\"inline\"><mi>S</mi></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Parametrizando <math display=\"inline\"><mi>S</mi></math>: <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, es decir <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Definición de perpendicularidad"
    },
    {
     "mota": "testua",
     "html": "Dos condiciones para que la recta <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> sea perpendicular a <math display=\"inline\"><mi>S</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<strong>a) <math display=\"inline\"><mrow><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>:</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>a</mi><mo>−</mo><mi>b</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>=</mo><mn>2</mn><mi>a</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>b) <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi></mrow></math>:</strong> <math display=\"inline\"><mrow><mover><mrow><msub><mi>s</mi><mn>0</mn></msub><msub><mi>t</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, mediante determinantes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>c</mi><mo>−</mo><mn>2</mn><mi>b</mi><mo>−</mo><mi>a</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>c</mi><mo>=</mo><mn>5</mn><mi>a</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>b</mi><mo>=</mo><mn>2</mn><mi>a</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -rekin</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, <math display=\"inline\"><mrow><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y la recta buscada:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los cálculos están comprobados: <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>2</mn><mi>a</mi></mrow></math> (apartado a) y <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mn>5</mn><mi>a</mi></mrow></math> (apartado b, determinante <math display=\"inline\"><mrow><mi>c</mi><mo>−</mo><mn>2</mn><mi>b</mi><mo>−</mo><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math>). <math display=\"inline\"><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></math> aparece en el original una vez como <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y otra como <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; ambos generan el mismo subespacio. El bloque final de determinantes <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> (en el original «<math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math>», «<math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>») es de lectura muy difícil y no se recoge aquí; la dirección de <math display=\"inline\"><mi>T</mi></math> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) es fiable."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p198_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "2.º método del ejercicio 6; ejercicio 12",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 6: 2.º modo (mediante un plano)"
    },
    {
     "mota": "testua",
     "html": "Con <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, con ecuaciones implícitas <math display=\"inline\"><mrow><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mn>5</mn><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Segundo modo:</strong> el plano perpendicular <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math>. <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>; las normales de las ecuaciones generan <math display=\"inline\"><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>:</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Resolviendo <math display=\"inline\"><mrow><mi>R</mi><mo>∩</mo><mi>S</mi></mrow></math> (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>5</mn><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>q</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>5</mn><mo>,</mo><mn>2</mn><mi>/</mi><mn>5</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>S</mi><mo>∩</mo><mi>R</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mi>q</mi><mo>∝</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: se obtiene el mismo <math display=\"inline\"><mi>T</mi></math> que en el primer modo."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 12 (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>)"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>, <math display=\"inline\"><mrow><mi>P</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>z</mi><mo>=</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>T</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>t</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> askea</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Calcular la recta que pasa por el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y es perpendicular tanto a <math display=\"inline\"><mi>P</mi></math> como a <math display=\"inline\"><mi>T</mi></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Parametrizando (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>P</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>T</mi><mo>=</mo><mn>1</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los dos modos del ejercicio 6 dan el mismo <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>; <math display=\"inline\"><mrow><mi>R</mi><mo>∩</mo><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>5</mn><mo>,</mo><mn>2</mn><mi>/</mi><mn>5</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> está comprobado. En la última línea de <math display=\"inline\"><mi>T</mi></math> hay una incoherencia entre los puntos base «<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>» y «<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>», pero las ecuaciones implícitas (<math display=\"inline\"><mrow><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mn>5</mn><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>) coinciden. En el ejercicio 12, el punto base de <math display=\"inline\"><mi>P</mi></math> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) no cumple exactamente «<math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>t</mi></mrow></math>» (<math display=\"inline\"><mrow><mn>2</mn><mo>≠</mo><mn>0</mn></mrow></math>); diferencia de lectura. La solución continúa en la página siguiente."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p200_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Ejercicio 13 (cont.): hallar la perpendicular <math display=\"inline\"><mi>S</mi></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Se busca el subespacio <math display=\"inline\"><mi>S</mi></math> perpendicular a <math display=\"inline\"><mi>P</mi></math> y a <math display=\"inline\"><mi>T</mi></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "1.er modo: intersección de complementos ortogonales"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover></mrow></math> y <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><msup><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>∩</mo><msup><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>z</mi><mo>−</mo><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⇒</mo><msup><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math>); <math display=\"inline\"><mrow><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>t</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⇒</mo><msup><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>3</mn></mrow></math>). Intersección:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>∩</mo><msup><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "2.º modo: perpendicularidad directa"
    },
    {
     "mota": "testua",
     "html": "Imponiendo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover></mrow></math> y <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> (productos escalares nulos):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>b</mi><mo>=</mo><mi>−</mi><mi>a</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mo>=</mo><mi>−</mi><mi>c</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>+</mo><mi>c</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>⇒</mo><mi>c</mi><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>−</mi><mi>a</mi><mo>,</mo><mi>a</mi><mo>,</mo><mi>−</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, que coincide con el 1.er modo."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(ii)-(iii) Posición y distancias"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>P</mi></math> se cruzan; <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>T</mi></math> también. En el apartado (iii), <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi></mrow></math>)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los dos modos dan <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (comprobación cruzada). Sin embargo, los dos métodos usan signos distintos en las ecuaciones normales de <math display=\"inline\"><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> frente a <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>); por eso la comprobación de la perpendicularidad de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> exige coherencia de signos en cada método. El «se cruzan» de (ii) y el «<math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>» (<math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi></mrow></math>) de (iii) parecen contradictorios en el original. El bloque final «<math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>» de la izquierda y «<math display=\"inline\"><mrow><mi>t</mi><mo>−</mo><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>» (probablemente «<math display=\"inline\"><mrow><mi>z</mi><mo>−</mo><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>») son OCR/manuscrito deficiente."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p202_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Cierre del ejercicio 13: <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cierre del ejercicio 13: <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>; <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi></mrow></math>). Para calcular <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, se construye el hiperplano <math display=\"inline\"><mi>N</mi></math> que contiene a <math display=\"inline\"><mi>P</mi></math> y es paralelo a <math display=\"inline\"><mi>S</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>N</mi><mo>:</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>+</mo><mi>t</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Distancia (fórmula 8.10), desde el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>N</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>0</mn><mo>−</mo><mn>0</mn><mo>−</mo><mn>0</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><msqrt><mrow><msup><mn>1</mn><mn>2</mn></msup><mo>+</mo><msup><mn>1</mn><mn>2</mn></msup><mo>+</mo><msup><mn>1</mn><mn>2</mn></msup><mo>+</mo><msup><mn>1</mn><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Repaso de la distancia; dos rectas que se cruzan (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>)",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proposición (repaso)"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>q</mi><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> son paralelos y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math>, entonces <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, para cualquier <math display=\"inline\"><mrow><mi>P</mi><mo>∈</mo><mi>p</mi><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio: dos rectas que se cruzan en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>"
    },
    {
     "mota": "testua",
     "html": "Parametrizando <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>T</mi></math> a partir de la forma continua:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>:</mo><mfrac><msub><mi>x</mi><mn>1</mn></msub><mn>3</mn></mfrac><mo>=</mo><mfrac><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn></mrow><mrow><mi>−</mi><mn>4</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><mn>1</mn></mrow><mn>4</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>T</mi><mo>:</mo><mfrac><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mn>2</mn></mrow><mn>5</mn></mfrac><mo>=</mo><mfrac><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>4</mn></mrow><mn>3</mn></mfrac><mo>=</mo><mfrac><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><mn>1</mn></mrow><mrow><mi>−</mi><mn>2</mn></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ambas son rectas (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>). Al resolver el sistema <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math>, es <strong>incompatible</strong>: <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>, y <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> (direcciones independientes): las rectas <strong>se cruzan</strong>."
    },
    {
     "mota": "testua",
     "html": "Envoltura afín (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>∪</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para hallar una perpendicular común a <math display=\"inline\"><msub><mi>N</mi><mi>p</mi></msub></math>, se calcula <math display=\"inline\"><msup><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>1</mn></mrow></math>), se parametriza <math display=\"inline\"><mrow><mi>p</mi><mo>+</mo><msup><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math>, y <math display=\"inline\"><mrow><msub><mi>N</mi><mi>p</mi></msub><mo>=</mo><mi>P</mi><mo>∩</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>+</mo><msup><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este ejercicio es muy denso y el propio autor marca «???» en rojo en el cálculo del determinante de la ecuación implícita de <math display=\"inline\"><mi>P</mi></math> (su incertidumbre); aquí no se recoge el valor numérico exacto, sino los pasos estructurales. Las reducciones por filas de la matriz (4 ecuaciones) son de lectura difícil, pero la conclusión (<math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>, se cruzan) es sólida. En la proposición de repaso, la notación «<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>q</mi><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>» repite <math display=\"inline\"><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></math> (probablemente «<math display=\"inline\"><mrow><mi>q</mi><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>»)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p228_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Cierre de <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (rectas que se cruzan)",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cierre de <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La distancia del ejercicio anterior mediante la perpendicular común:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>4</mn><mo>⋅</mo><mn>0</mn><mo>−</mo><mn>26</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>29</mn><mo>⋅</mo><mn>1</mn><mo>−</mo><mi>…</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><msqrt><mrow><msup><mn>4</mn><mn>2</mn></msup><mo>+</mo><msup><mn>26</mn><mn>2</mn></msup><mo>+</mo><msup><mn>29</mn><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — ejercicio incompleto eliminado",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La variante del «ejercicio 11» de la p228 original (<math display=\"inline\"><mrow><mi>S</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>6</mn><mo>=</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo>+</mo><mi>z</mi><mo>−</mo><mn>3</mn><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>T</mi><mi>a</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>) estaba incompleta (se interrumpe en <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><msub><mi>T</mi><mi>a</mi></msub><mo>=</mo><mi>∅</mi></mrow></math>, sin calcular <math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><msub><mi>T</mi><mi>a</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>); no se recoge aquí. La versión completa del ejercicio 11 (con otros datos, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> crítico) está más arriba (IRAIDE p197)."
      }
     ]
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Distancias; subespacio perpendicular",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Perpendicularidad: caso general (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub><mo>&gt;</mo><mi>n</mi></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub><mo>&gt;</mo><mi>n</mi></mrow></math>, <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> son perpendiculares si:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn><mo>⟂</mo></msubsup><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn><mo>⟂</mo></msubsup><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(1) Distancia de un punto a una variedad"
    },
    {
     "mota": "testua",
     "html": "Para la variedad <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>b</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">min</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>q</mi><mo>∈</mo><mi>S</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>q</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><mi>S</mi><mo>∩</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>+</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(2) Distancia entre dos subespacios"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>S</mi><mn>1</mn></msub><mo>,</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">min</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>p</mi><mo>∈</mo><msub><mi>S</mi><mn>1</mn></msub><mo>,</mo><mi>q</mi><mo>∈</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Construyendo el vector <math display=\"inline\"><mi>W</mi></math> perpendicular a los dos subespacios, si <math display=\"inline\"><mrow><mi>W</mi><mo>∩</mo><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>W</mi><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><msub><mi>p</mi><mn>2</mn></msub></mrow></math>, entonces <math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>S</mi><mn>1</mn></msub><mo>,</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio: perpendicular a <math display=\"inline\"><mi>Q</mi></math> y <math display=\"inline\"><mi>R</mi></math>"
    },
    {
     "mota": "testua",
     "html": "El subespacio <math display=\"inline\"><mi>W</mi></math> perpendicular a la vez a las rectas <math display=\"inline\"><mi>Q</mi></math> y <math display=\"inline\"><mi>R</mi></math> se obtiene tomando <math display=\"inline\"><mrow><mi>W</mi><mo>⊆</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>Q</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>R</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></mrow></math>. Suma de las direcciones:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>Q</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>R</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>Q</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>R</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, <math display=\"inline\"><mrow><msup><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>Q</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>R</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup><mo>=</mo><mn>4</mn><mo>−</mo><mn>3</mn><mo>=</mo><mn>1</mn></mrow></math>, y como <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es perpendicular a los tres generadores:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>W</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>Q</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>R</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El original describe <math display=\"inline\"><mover><mi>W</mi><mo accent=\"true\">¯</mo></mover></math> con las ecuaciones «<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>», pero eso es incoherente con el generador (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tiene <math display=\"inline\"><mi>z</mi></math> libre); lo correcto es «<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>» (<math display=\"inline\"><mi>z</mi></math> libre). El ejercicio continúa: la intersección de <math display=\"inline\"><mi>W</mi></math> y <math display=\"inline\"><mi>Q</mi></math> (<math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>c</mi><mo>+</mo><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>) es un punto, y el cálculo de la distancia está en la página siguiente. <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>Q</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>R</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>Q</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>R</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup><mo>=</mo><mn>3</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>4</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>E</mi></mrow></math> está comprobado."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p212_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Intersección de <math display=\"inline\"><mi>W</mi></math>; posición de <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>T</mi></math> (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>)",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Perpendicular común y distancia"
    },
    {
     "mota": "testua",
     "html": "Continuación del ejercicio anterior: <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. Distancia entre dos rectas mediante la perpendicular común:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>,</mo><mi>Q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msub><mi>q</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mi>R</mi><mo>∩</mo><msub><mi>W</mi><mo>⟂</mo></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><mi>Q</mi><mo>∩</mo><msub><mi>W</mi><mo>⟂</mo></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><msub><mi>W</mi><mo>⟂</mo></msub></math> es la variedad perpendicular a cada una."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio nuevo: <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>T</mi></math> (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>)"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dos subespacios afines de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>: <math display=\"block\"><mrow><mi>S</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mi>t</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>t</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>t</mi><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr></mtable></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> (a) las ecuaciones y la dirección de <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>∪</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; (b) una perpendicular común a <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>T</mi></math>; (c) <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Posición relativa"
    },
    {
     "mota": "testua",
     "html": "Al resolver las ecuaciones, ambas son <strong>rectas</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>1</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "El vector que une <math display=\"inline\"><msub><mi>p</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>p</mi><mn>2</mn></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mrow><msub><mi>p</mi><mn>2</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∉</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(la primera componente es <math display=\"inline\"><mrow><mn>2</mn><mo>≠</mo><mn>0</mn></mrow></math>, pero los vectores de <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> tienen nulas las dos primeras componentes). Por tanto, <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>T</mi></math> <strong>no se cortan</strong>; y como <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>≠</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, <strong>no son paralelas</strong>: <strong>se cruzan</strong>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la parametrización de <math display=\"inline\"><mi>S</mi></math>, el punto <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> cumple las ecuaciones primera y tercera (<math display=\"inline\"><mrow><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>5</mn><mo>=</mo><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>0</mn><mo>−</mo><mn>5</mn><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>), pero no la segunda (<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mo>+</mo><mn>0</mn><mo>−</mo><mn>5</mn><mo>=</mo><mi>−</mi><mn>7</mn><mo>≠</mo><mn>3</mn></mrow></math>); hay un lapsus en el enunciado o en el desarrollo intermedio, que no se ha podido conciliar. En «<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>δ</mi><mo>,</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>», <math display=\"inline\"><mi>δ</mi></math> es probablemente <math display=\"inline\"><mi>c</mi></math>. El cálculo de la perpendicular común y de <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (apartados b, c) está en las páginas siguientes."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p214_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>; plano perpendicular a dos rectas",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(a) <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>∪</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>∪</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><msub><mi>p</mi><mn>2</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eliminando los parámetros, la ecuación implícita es <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(b) Perpendicular común"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>≠</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>, puede calcularse su complemento ortogonal:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Construyendo <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></mrow></math>, se obtienen los puntos de corte <math display=\"inline\"><mrow><mi>W</mi><mo>∩</mo><mi>S</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>W</mi><mo>∩</mo><mi>T</mi><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(c) <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msqrt><mrow><msup><mn>2</mn><mn>2</mn></msup><mo>+</mo><msup><mn>0</mn><mn>2</mn></msup><mo>+</mo><msup><mn>0</mn><mn>2</mn></msup><mo>+</mo><msup><mn>0</mn><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio nuevo (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>): plano perpendicular a dos rectas"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>, los planos <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. Determinar el plano perpendicular a <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y a <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> que pasa por un punto de su intersección con coordenada <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ecuaciones implícitas (normal = producto vectorial de los vectores directores):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>:</mo><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>S</mi><mn>2</mn></msub><mo>:</mo><mn>2</mn><mi>x</mi><mo>−</mo><mi>z</mi><mo>+</mo><mn>2</mn><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Al resolver el sistema (<math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn></mrow></math>, luego <math display=\"inline\"><mrow><mn>5</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>4</mn><mo>=</mo><mn>0</mn></mrow></math>), la intersección es una <strong>recta</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>4</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las ecuaciones implícitas de <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> están comprobadas mediante el producto vectorial (normal <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; los puntos base las cumplen). La segunda aparición de «<math display=\"inline\"><mrow><mi>W</mi><mo>∩</mo><mi>S</mi></mrow></math>» es probablemente «<math display=\"inline\"><mrow><mi>W</mi><mo>∩</mo><mi>T</mi></mrow></math>» (lo que da <math display=\"inline\"><msub><mi>p</mi><mn>1</mn></msub></math>). La tercera componente de <math display=\"inline\"><mover><mrow><msub><mi>p</mi><mn>2</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover></math> es «<math display=\"inline\"><mn>1</mn></math>» en esta página y «<math display=\"inline\"><mn>0</mn></math>» en la anterior (diferencia de lectura en la componente <math display=\"inline\"><mi>z</mi></math>). El cálculo de <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math> de la perpendicular común procede de la diferencia de las primeras componentes de los puntos <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mn>2</mn><mo>−</mo><mn>0</mn><mo>=</mo><mn>2</mn></mrow></math>)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p216_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Completar el plano perpendicular; familia de rectas <math display=\"inline\"><msub><mi>R</mi><mi>λ</mi></msub></math>",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cierre del ejercicio: plano perpendicular"
    },
    {
     "mota": "testua",
     "html": "El punto <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math> de <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math> es <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Como <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mn>4</mn></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>), para ser perpendicular a <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> se necesitan <math display=\"inline\"><mrow><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn><mo>⟂</mo></msubsup><mo>⊆</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math> y <math display=\"inline\"><mrow><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn><mo>⟂</mo></msubsup><mo>⊆</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>; complemento ortogonal:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn><mo>⟂</mo></msubsup><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mo>=</mo><mn>3</mn><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn><mo>⟂</mo></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn><mo>⟂</mo></msubsup><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn><mo>⟂</mo></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, el plano buscado:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio nuevo: familia de rectas <math display=\"inline\"><msub><mi>R</mi><mi>λ</mi></msub></math>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el plano afín euclídeo, sea la familia de rectas <math display=\"block\"><mrow><msub><mi>R</mi><mi>λ</mi></msub><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mn>2</mn><mi>λ</mi><mi>y</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>λ</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mi>.</mi></mrow></math> Demostrar que existe algún punto <math display=\"inline\"><mi>P</mi></math> tal que <math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><msub><mi>R</mi><mi>λ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es constante (no depende de <math display=\"inline\"><mi>λ</mi></math>)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para la recta <math display=\"inline\"><mrow><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi><mi>y</mi><mo>+</mo><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math>, el vector director es <math display=\"inline\"><mrow><mover><mi>V</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo>,</mo><mi>−</mi><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (o <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>B</mi><mo>,</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), y la normal <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En este caso <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>2</mn><mi>λ</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mi>λ</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>λ</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La recta normal <math display=\"inline\"><msub><mi>N</mi><mi>λ</mi></msub></math> que pasa por <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — corrección",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el original, <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>λ</mi></msub></math> aparece como «<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>,</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>», pero eso no es perpendicular a <math display=\"inline\"><msub><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mi>λ</mi></msub></math> (<math display=\"inline\"><mrow><msub><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mi>λ</mi></msub><mo>⋅</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>λ</mi></msub><mo>=</mo><mn>2</mn><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mn>0</mn></mrow></math>); la fórmula correcta (<math display=\"inline\"><mrow><mover><mi>V</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo>,</mo><mi>−</mi><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) da <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>,</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (corregido aquí; «<math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math>» mal leído como «<math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mi>λ</mi></mrow></math>»). El primer generador de <math display=\"inline\"><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub></math> es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (no <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), de acuerdo con el cálculo del complemento ortogonal. <math display=\"inline\"><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn><mo>⟂</mo></msubsup></math> y <math display=\"inline\"><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn><mo>⟂</mo></msubsup></math> están comprobados con el producto escalar."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p218_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "Ejercicio de la familia de rectas: el punto <math display=\"inline\"><mi>P</mi></math>",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proyección: <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msub><mi>R</mi><mi>λ</mi></msub><mo>∩</mo><msub><mi>N</mi><mi>λ</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Proyección de <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sobre <math display=\"inline\"><msub><mi>R</mi><mi>λ</mi></msub></math>. Sustituyendo la parametrización de <math display=\"inline\"><msub><mi>N</mi><mi>λ</mi></msub></math> en la ecuación de <math display=\"inline\"><msub><mi>R</mi><mi>λ</mi></msub></math>, se despeja <math display=\"inline\"><mi>k</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>a</mi><mo>+</mo><mn>2</mn><mi>λ</mi><mi>b</mi><mo>−</mo><mn>4</mn><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>a</mi><mo>+</mo><mn>2</mn><mi>λ</mi><mi>b</mi><mo>−</mo><mn>4</mn><mi>λ</mi><mo>−</mo><mn>2</mn></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mfrac></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Distancia: <math display=\"inline\"><mrow><msup><mi>d</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><msub><mi>R</mi><mi>λ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>d</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><msub><mi>R</mi><mi>λ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>k</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mo>+</mo><mn>4</mn><mi>λ</mi><mo>−</mo><mn>2</mn><mi>λ</mi><mi>b</mi><mo>−</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Con valores exactos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mn>1</mn><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hallar el punto <math display=\"inline\"><mi>P</mi></math>"
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Imponiendo <math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><msub><mi>R</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><msub><mi>R</mi><mrow><mi>−</mi><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>3</mn><mo>−</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>b</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>. «<math display=\"inline\"><mrow><mn>3</mn><mo>−</mo><mi>b</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>b</mi></mrow></math>» es imposible; de «<math display=\"inline\"><mrow><mn>3</mn><mo>−</mo><mi>b</mi><mo>=</mo><mi>b</mi><mo>−</mo><mn>1</mn></mrow></math>», <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>2</mn></mrow></math>. Entonces <math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><msub><mi>R</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>, y de <math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><msub><mi>R</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> o <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>3</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Comprobación.</strong> Si <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>b</mi><mo>=</mo><mn>2</mn></mrow></math>, el numerador es <math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mn>4</mn><mi>λ</mi><mo>−</mo><mn>4</mn><mi>λ</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup></mrow></math>, luego <math display=\"inline\"><mrow><msup><mi>d</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><msub><mi>R</mi><mi>λ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> <strong>para todo <math display=\"inline\"><mi>λ</mi></math></strong>. Si <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>3</mn><mo>,</mo><mi>b</mi><mo>=</mo><mn>2</mn></mrow></math>, el numerador es <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>+</mo><mn>3</mn><msup><mi>λ</mi><mn>2</mn></msup></mrow></math>, que no es constante (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>11</mn><mi>/</mi><mn>5</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>≠</mo><mn>1</mn></mrow></math> para <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>). Por tanto, la solución única: <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Nueva propiedad geométrica"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>a</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><mi>b</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>c</mi></math> es el <strong>punto medio</strong> de <math display=\"inline\"><mi>a</mi></math> y <math display=\"inline\"><mi>b</mi></math> (ángulo recto en el diámetro de un segmento)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todos los cálculos están comprobados: <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> (no <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>3</mn></mrow></math>), <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En la nueva propiedad el original escribe «<math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>», pero probablemente es «<math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>» (el dibujo solo tiene <math display=\"inline\"><mrow><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>p</mi></mrow></math>). La nota final «ÁNGULO RECTO» está ligada a esa propiedad (circunferencia de Tales)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p220_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a29",
   "maila": 1,
   "izenburua": "Propiedad de Tales; ángulo entre vectores",
   "blokeak": []
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Demostración: <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⇔</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>a</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><mi>b</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mi>c</mi></math> es el punto medio de <math display=\"inline\"><mi>a</mi></math> y <math display=\"inline\"><mi>b</mi></math>, <math display=\"inline\"><mrow><mover><mrow><mi>c</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>−</mi><mover><mrow><mi>c</mi><mi>b</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>. Por la relación de Chasles:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mrow><mi>a</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>p</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>c</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mrow><mi>b</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>p</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mrow><mi>c</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Desarrollando el producto escalar: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>a</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><mi>b</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>p</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>c</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><mi>p</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mrow><mi>c</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>c</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>,</mo></mrow></math> pues los términos cruzados se anulan (el producto escalar es simétrico). Por tanto, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>a</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><mi>b</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math> si y solo si <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>c</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup></mrow></math>, es decir, <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. (El ángulo inscrito en un diámetro es recto: Tales.)"
      }
     ]
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "Ángulo entre vectores",
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
       "html": "El coseno del ángulo entre dos vectores: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Entre <math display=\"inline\"><mover><mi>u</mi><mo accent=\"true\">→</mo></mover></math> y <math display=\"inline\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></mrow></math> (vectores unitarios, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mn>1</mn></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como ambos son iguales, la dirección <math display=\"inline\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></mrow></math> es la <strong>bisectriz</strong>."
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "Diagonales del rombo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El ángulo que forman las dos bisectrices (<math display=\"inline\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></mrow></math> y <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow></mrow></math> (rombo), las diagonales son siempre <strong>perpendiculares</strong>: las bisectrices forman <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El original escribe una vez «<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>a</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><mi>b</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>≤</mo><mn>0</mn></mrow></math>», pero debe ser «<math display=\"inline\"><mrow><mo>=</mo><mn>0</mn></mrow></math>» (el desarrollo da la igualdad). La línea «<math display=\"inline\"><mrow><mover><mrow><mi>a</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>p</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>c</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>» usa «<math display=\"inline\"><mo>=</mo></math>», pero es «<math display=\"inline\"><mrow><mover><mrow><mi>a</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>p</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>c</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>» (análogo a la línea siguiente). En las fórmulas del coseno, la notación abreviada <math display=\"inline\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es el producto escalar; se supone <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a33",
   "maila": 1,
   "izenburua": "Atlas visual de la geometría euclídea",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Aportación editorial independiente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El atlas recupera el significado geométrico de las ecuaciones afines. El desarrollo algebraico de los cuadernos se mantiene íntegro y estas figuras se usan como orientación visual junto a él."
      }
     ]
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Proyecciones y distancias",
   "blokeak": [
    {
     "mota": "irudia",
     "oina": "editoriala([La proyección ortogonal descompone el vector <math display=\"inline\"><mi>v</mi></math> en una única suma de su componente en el subespacio y su componente normal.])",
     "src": "../media/irudiak/3087477f8c477f30.svg",
     "zabalera": 246
    },
    {
     "mota": "irudia",
     "oina": "editoriala([La distancia entre un punto y un hiperplano es la longitud del segmento normal; el punto de proyección da el mínimo único.])",
     "src": "../media/irudiak/445068a5cce6431f.svg",
     "zabalera": 260
    },
    {
     "mota": "irudia",
     "oina": "editoriala([La distancia entre rectas que se cruzan la mide el único segmento perpendicular a las dos direcciones.])",
     "src": "../media/irudiak/4b241282c057f192.svg",
     "zabalera": 239
    }
   ]
  }
 ]
};
