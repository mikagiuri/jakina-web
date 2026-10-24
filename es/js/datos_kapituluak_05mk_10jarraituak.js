/* JAKINA · kapitulua «B9.10 - Ingurune jarraituak» (05mk_10jarraituak), desde edicion2/kapituluak/05mk_10jarraituak/05mk_10jarraituak.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["05mk_10jarraituak"] = {
 "gakoa": "05mk_10jarraituak",
 "titulua": "JAKINA - B9 - Mecánica clásica - 10/10",
 "azala": "B9.10 - Medios continuos",
 "azpititulua": "Etapa III - L2",
 "iturburua": "kapituluak/05mk_10jarraituak/05mk_10jarraituak.typ",
 "sarrera": [],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Medios continuos",
   "blokeak": [
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>FIGURA 10.1</strong> Efecto espectacular de la tensión superficial."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En este tema se estudiarán los conceptos básicos de los medios continuos: empezando por la elasticidad, y más adelante la mecánica de fluidos."
    },
    {
     "mota": "testua",
     "html": "Como el propio nombre indica, en este tema los sólidos, los líquidos y los gases se considerarán continuos, dejando a un lado su estructura molecular. Así, los «elementos infinitesimales» (o «partículas») serán muy pequeños desde el punto de vista macroscópico, pero muy grandes frente a sus componentes microscópicos (como no tienen en cuenta toda la estructura subyacente, se dice que son teorías efectivas). Gracias a esta aproximación fructífera, las magnitudes son campos continuos y pueden usarse las herramientas del cálculo diferencial."
    },
    {
     "mota": "testua",
     "html": "El problema general de los medios continuos no corresponde a un libro de este nivel, y solo se verán las propiedades fundamentales y problemas simplificados. (Por ejemplo, dejaremos aquí a un lado el aspecto termodinámico de los fenómenos, aunque es fundamental.)"
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Elasticidad",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Todos conocemos los cuerpos elásticos: los de goma son el modelo, pero todos los sólidos son elásticos, al menos dentro de unos límites. Cuando los cuerpos elásticos sufren fuerzas exteriores se deforman, y tienden a recuperar el aspecto inicial cuando las fuerzas desaparecen. En la figura 10.2 se muestra este comportamiento de forma esquemática, en el caso de los cuerpos elásticos corrientes que estudiaremos aquí. Cuando las fuerzas exteriores son pequeñas, la fuerza que sufre el cuerpo y la deformación son proporcionales entre sí. Esta ley de Hooke se cumple al aumentar los valores de las fuerzas y de las deformaciones, pero solo hasta llegar a un punto llamado <strong>límite de proporcionalidad</strong>. A partir de ahí la deformación y la fuerza no son proporcionales, pero el comportamiento del cuerpo sigue siendo <strong>elástico</strong>: la deformación es transitoria y desaparece cuando desaparece la fuerza. Más allá del <strong>límite elástico</strong> el comportamiento se vuelve <strong>plástico</strong> y la deformación es permanente: aunque desaparezca la fuerza exterior la deformación no desaparece del todo. Por último, al llegar al <strong>límite de rotura</strong>, el cuerpo no soporta la fuerza y se rompe."
    },
    {
     "mota": "irudia",
     "oina": "Comportamiento esquemático de los cuerpos elásticos.",
     "src": "../media/irudiak/c13efe3f77a04a9c.svg",
     "zabalera": 255
    },
    {
     "mota": "testua",
     "html": "Aquí nos limitaremos a los casos en que se cumple la proporcionalidad de la ley de Hooke y, además, admitiremos que las deformaciones son pequeñas. Esta última hipótesis no es del todo necesaria para usar la ley de Hooke (a veces se cumple también con deformaciones grandes), pero nos ayudará a hacer los cálculos, permitiéndonos hacer aproximaciones."
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Equilibrio de los sólidos elásticos homogéneos e isótropos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos la barra elástica de la figura 10.3, que inicialmente tiene longitud propia <math display=\"inline\"><mi>l</mi></math> y se deforma al sufrir fuerzas exteriores opuestas. Cuando vuelve a estar en equilibrio su longitud será <math display=\"inline\"><mrow><mi>l</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "La barra elástica se deforma al sufrir las fuerzas <math display=\"inline\"><mi>F</mi></math>.",
     "src": "../media/irudiak/7240d70324d3d532.svg",
     "zabalera": 505
    },
    {
     "mota": "testua",
     "html": "Según la ley de Hooke, tenemos <math display=\"inline\"><mrow><mi>F</mi><mo>∝</mo><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow></math>, pero en la relación entre la fuerza y la deformación entran otras magnitudes de forma sencilla, como veremos haciendo un par de experimentos mentales. Si consideramos las dos mitades que se muestran arriba a la derecha en la figura 10.3, y admitimos que también están en equilibrio y usamos la tercera ley de Newton, está claro que sufren las fuerzas de la figura. Como la longitud y la deformación de toda la barra son las sumas de las longitudes y deformaciones de las dos mitades, para cada fuerza <math display=\"inline\"><mi>F</mi></math> la deformación <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow></math> es proporcional a la longitud <math display=\"inline\"><mi>l</mi></math> de la barra: <math display=\"inline\"><mrow><mi>F</mi><mo>∝</mo><mi mathvariant=\"normal\">Δ</mi><mi>l</mi><mi>/</mi><mi>l</mi></mrow></math>. De manera parecida, considerando la mitad de abajo a la derecha, está claro que la fuerza es proporcional al área <math display=\"inline\"><mi>A</mi></math> de la sección transversal: <math display=\"inline\"><mrow><mi>F</mi><mo>∝</mo><mi>A</mi><mi mathvariant=\"normal\">Δ</mi><mi>l</mi><mi>/</mi><mi>l</mi></mrow></math>. La constante de proporcionalidad que aparece en este resultado, es decir, el módulo de elasticidad, se llama <strong>módulo de Young</strong> y lo representamos con la letra <math display=\"inline\"><mi>E</mi></math>. La ley de Hooke se escribe, pues, así en este caso:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mi>F</mi><mi>A</mi></mfrac><mo>=</mo><mi>E</mi><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "A la fuerza por unidad de área de la sección transversal se le llama <strong>esfuerzo</strong>  (o <strong>tensión</strong>). En este caso, como es perpendicular a la sección transversal, se dice que es un <strong>esfuerzo normal</strong>. En el caso de la figura es un <strong>esfuerzo de tracción</strong>, pero si tuviera el sentido contrario sería un <strong>esfuerzo de compresión</strong>. Por otra parte, la deformación <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi><mi>/</mi><mi>l</mi></mrow></math> por unidad de longitud se llama <strong>deformación unitaria</strong> y es la que nos interesa casi siempre, aunque, por abreviar, digamos «deformación» (olvidando el adjetivo «unitaria»). La ley de Hooke expresa, pues, la <em>proporcionalidad entre el esfuerzo y la deformación unitaria</em>."
    },
    {
     "mota": "testua",
     "html": "La deformación unitaria es adimensional y la unidad del esfuerzo y del módulo de Young es la de la presión; en el sistema SI, el pascal: <math display=\"inline\"><mn>1</mn></math> Pa <math display=\"inline\"><mrow><mo>=</mo><mn>1</mn></mrow></math> N m<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>2</mn></mrow></msup></math>. El módulo de Young es una característica del material (y de su preparación) (véase la tabla A.9). En muchos materiales el módulo de Young es el mismo en tracción y en compresión, pero no siempre: los huesos son un contraejemplo conocido. El mayor esfuerzo que puede soportar la barra sin romperse se llama <strong>resistencia</strong> y es muy conocido que la <strong>resistencia a la compresión del hormigón es mucho mayor que la resistencia a la tracción</strong> (véase la tabla A.9). nales (y las contrarias) son:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>h</mi></mrow><mi>h</mi></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>z</mi></mrow><mi>z</mi></mfrac><mo>=</mo><mi>−</mi><mi>σ</mi><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La constante de proporcionalidad de aquí, que es una característica del material, se llama <strong>coeficiente de Poisson</strong>, y aparecerá así en la ley de Hooke: <math display=\"block\"><mrow><mfrac><mi>F</mi><mi>A</mi></mfrac><mo>=</mo><mi>E</mi><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>E</mi><mi>σ</mi></mfrac><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>h</mi></mrow><mi>h</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>E</mi><mi>σ</mi></mfrac><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>z</mi></mrow><mi>z</mi></mfrac><mi>.</mi></mrow></math> Como veremos más adelante, el coeficiente de Poisson es siempre menor que <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> y en los materiales corrientes <math display=\"inline\"><mrow><mi>σ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>; por tanto, siempre tenemos <math display=\"block\"><mrow><mn>0</mn><mo>&lt;</mo><mi>σ</mi><mo>&lt;</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math> Debido a la linealidad de la ley de Hooke, para estudiar el equilibrio elástico de los sólidos elásticos homogéneos e isótropos basta con usar el módulo de Young y el coeficiente de Poisson, junto con el principio de superposición. En las secciones siguientes veremos cómo pueden usarse estos conceptos para estudiar varios ejemplos sencillos interesantes."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Deformación del volumen"
    },
    {
     "mota": "testua",
     "html": "Supongamos que una barra elástica sufre una presión hidrostática uniforme <math display=\"inline\"><mi>p</mi></math>, es decir, que en todos los lados se le aplica un esfuerzo normal de valor <math display=\"inline\"><mrow><mi>−</mi><mi>p</mi></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Barra elástica sometida a presión hidrostática uniforme.",
     "src": "../media/irudiak/04c872f5cc1369cf.svg",
     "zabalera": 203
    },
    {
     "mota": "testua",
     "html": "La deformación en cada dirección tendrá tres orígenes: por (10.1), el esfuerzo aplicado en la misma dirección y, según la ley (10.2), los aplicados en las direcciones transversales. Por tanto, <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>h</mi></mrow><mi>h</mi></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>z</mi></mrow><mi>z</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mi>E</mi></mfrac><mi>p</mi><mo>+</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><mi>p</mi><mo>+</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><mi>p</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>E</mi></mfrac><mi>p</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que cuando las deformaciones son pequeñas la deformación unitaria del volumen de la barra es esta: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi></mrow><mi>V</mi></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mo>+</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>h</mi></mrow><mi>h</mi></mfrac><mo>+</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>z</mi></mrow><mi>z</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el caso de deformaciones pequeñas, la ley de Hooke se escribe así como consecuencia de las ecuaciones (10.5) y (10.6):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>p</mi><mo>=</mo><mi>−</mi><mi>B</mi><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi></mrow><mi>V</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El módulo de elasticidad de aquí se llama <strong>módulo de compresibilidad volumétrica</strong>  (o <strong>módulo de compresibilidad</strong>) y se escribe así mediante el módulo de Young y el coeficiente de Poisson:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>B</mi><mo>=</mo><mfrac><mi>E</mi><mrow><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En muchas tablas (véanse las tablas A.9 y A.10), en lugar del módulo de Young y el coeficiente de Poisson se dan <math display=\"inline\"><mi>E</mi></math> y <math display=\"inline\"><mi>B</mi></math>, pero con ellos se recupera fácilmente <math display=\"inline\"><mi>σ</mi></math>: <math display=\"block\"><mrow><mi>σ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>−</mo><mfrac><mi>E</mi><mrow><mn>6</mn><mi>B</mi></mrow></mfrac><mi>.</mi></mrow></math> El módulo de compresibilidad volumétrica es positivo, pues de lo contrario al aplicar presión el sólido empezaría a dilatarse y la presión haría un trabajo negativo: sería una bonita manera de sacar energía; pero eso solo puede ocurrir si de antemano la barra está en equilibrio inestable y al aplicar la presión se libera la energía elástica acumulada en la barra. Pero si <math display=\"inline\"><mrow><mi>B</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, por (10.9) se obtiene la propiedad <math display=\"inline\"><mrow><mi>σ</mi><mo>&lt;</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> que hemos mencionado antes."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Deformación transversal nula"
    },
    {
     "mota": "testua",
     "html": "Al aplicar esfuerzos en una dirección se producen también deformaciones en las direcciones perpendiculares. ¿Qué condiciones deben cumplirse para que las deformaciones ocurran en una sola dirección? En la práctica eso se consigue con bastante facilidad: si se llena de goma un tubo de acero, al aplicar presión en los extremos de esta la goma se acortará, pero (casi) no se ensanchará, gracias a la gran rigidez de la pared de acero."
    },
    {
     "mota": "irudia",
     "oina": "Deformación transversal nula.",
     "src": "../media/irudiak/41741f3ca2111e18.svg",
     "zabalera": 198
    },
    {
     "mota": "testua",
     "html": "Consideremos el paralelepípedo de la figura 10.5. Las deformaciones que ocurren en cada dirección se calculan fácilmente teniendo en cuenta la ley (10.3) y el principio de superposición: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>E</mi></mfrac><mi>τ</mi><mo>−</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><msub><mi>τ</mi><mi>h</mi></msub><mo>−</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><msub><mi>τ</mi><mi>z</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>h</mi></mrow><mi>h</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>E</mi></mfrac><msub><mi>τ</mi><mi>h</mi></msub><mo>−</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><msub><mi>τ</mi><mi>z</mi></msub><mo>−</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><mi>τ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>z</mi></mrow><mi>z</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>E</mi></mfrac><msub><mi>τ</mi><mi>z</mi></msub><mo>−</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><msub><mi>τ</mi><mi>h</mi></msub><mo>−</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><mi>τ</mi><mi>.</mi></mrow></math> Si en las dos últimas ecuaciones se hace <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>h</mi><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math> y se sustituyen los resultados en la primera, se obtiene esto: <math display=\"block\"><mrow><msub><mi>τ</mi><mi>h</mi></msub><mo>=</mo><msub><mi>τ</mi><mi>z</mi></msub><mo>=</mo><mfrac><mi>σ</mi><mrow><mn>1</mn><mo>−</mo><mi>σ</mi></mrow></mfrac><mi>τ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>τ</mi><mo>=</mo><msup><mi>E</mi><mo>′</mo></msup><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>E</mi><mo>′</mo></msup><mo>≡</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>σ</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>E</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba los resultados (10.13)–(10.15) y demuestra esta desigualdad:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msup><mi>E</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>σ</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>E</mi><mo>&gt;</mo><mi>E</mi><mi>.</mi></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto, cuando la deformación transversal es nula, el módulo longitudinal que hay que usar en la ley de Hooke, en lugar del de Young, es el <math display=\"inline\"><msup><mi>E</mi><mo>′</mo></msup></math> de la ecuación (10.15) y, en consecuencia, para obtener así una deformación dada hace falta un esfuerzo mayor. Para ver el interés del resultado, consideremos la propagación longitudinal en cuerpos <em>grandes</em>, es decir, cuando las dimensiones del cuerpo son mucho mayores que la longitud de onda (eso es lo que ocurre, por ejemplo, cuando las ondas sísmicas se propagan por el interior de la Tierra). Si se propagan en una barra, la velocidad de fase es <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mi>E</mi><mi>ρ</mi></mfrac></msqrt></mrow></math>, como demostramos en la sección 9.6. Pero en un cuerpo grande en el límite de la zona por la que va la onda no habrá deformación y, por tanto, habrá que usar <math display=\"inline\"><msup><mi>E</mi><mo>′</mo></msup></math>: la velocidad del sonido"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><msup><mi>E</mi><mo>′</mo></msup><mi>ρ</mi></mfrac></msqrt><mo>&gt;</mo><msqrt><mfrac><mi>E</mi><mi>ρ</mi></mfrac></msqrt></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "será."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Esfuerzos opuestos"
    },
    {
     "mota": "testua",
     "html": "Consideremos el paralelepípedo de la figura 10.6, que sufre esfuerzos opuestos en dos direcciones perpendiculares. Las deformaciones que usaremos más adelante se calculan fácilmente: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>E</mi></mfrac><mi>τ</mi><mo>+</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><mi>τ</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow><mi>E</mi></mfrac><mi>τ</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>h</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Esfuerzos opuestos.",
     "src": "../media/irudiak/4ba7e1450bd3ee0e.svg",
     "zabalera": 215
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Esfuerzos cortantes"
    },
    {
     "mota": "testua",
     "html": "Cuando el esfuerzo es paralelo a la superficie en la que se aplica, se llama <strong>esfuerzo cortante</strong> (o de cizalladura). En el ejemplo de la figura 10.7, en cuatro lados de un cubo homogéneo se han aplicado esfuerzos cortantes iguales en las direcciones indicadas. Esas cuatro fuerzas son necesarias para que el cubo esté en equilibrio, es decir, para que la fuerza y el momento totales sean nulos."
    },
    {
     "mota": "irudia",
     "oina": "Esfuerzos cortantes en un cubo.",
     "src": "../media/irudiak/940ea7df4923998f.svg",
     "zabalera": 408
    },
    {
     "mota": "testua",
     "html": "La magnitud adimensional adecuada para medir la deformación es el ángulo <math display=\"inline\"><mi>θ</mi></math> de la figura. Así, cuando las deformaciones son pequeñas, estas son las coordenadas de <math display=\"inline\"><mi>Q</mi></math> medidas desde el punto <math display=\"inline\"><mi>P</mi></math> y la nueva diagonal: <math display=\"block\"><mrow><mi>x</mi><mo>≈</mo><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>l</mi><mi>θ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>≈</mo><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>l</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>d</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>d</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>≈</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>θ</mi><mo>≈</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>d</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba la última aproximación."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para aplicar la ley de Hooke, estudiaremos el problema que aparece a la derecha de la figura. Está claro que los estados de esfuerzo y de deformación del cubo dibujado con línea discontinua son los del problema inicial (considera el equilibrio del prisma triangular <math display=\"inline\"><mrow><mi>U</mi><mi>R</mi><mi>S</mi></mrow></math>); pero este nuevo problema es el de la sección 10.2.3: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>d</mi></mrow><mi>d</mi></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>E</mi></mfrac><mfrac><mrow><msqrt><mn>2</mn></msqrt><mi>F</mi></mrow><mrow><msqrt><mn>2</mn></msqrt><mi>A</mi></mrow></mfrac><mo>,</mo></mrow></math> pues, si el área de los lados del cubo es <math display=\"inline\"><mi>A</mi></math>, la de los lados del cuerpo de este problema es <math display=\"inline\"><mrow><msqrt><mn>2</mn></msqrt><mi>A</mi></mrow></math>. Por los resultados (10.22) y (10.23), la relación entre el esfuerzo cortante <math display=\"inline\"><mrow><mi>F</mi><mi>/</mi><mi>A</mi></mrow></math> y la deformación <math display=\"inline\"><mi>θ</mi></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mi>F</mi><mi>A</mi></mfrac><mo>=</mo><mi>G</mi><mi>θ</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "es la siguiente, y el <strong>módulo de cizalladura</strong>  (o <strong>módulo de rigidez</strong>) es este:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>G</mi><mo>=</mo><mfrac><mi>E</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por (10.4), los límites de <math display=\"inline\"><mi>G</mi></math> son estos: <math display=\"block\"><mrow><mfrac><mi>E</mi><mn>3</mn></mfrac><mo>&lt;</mo><mi>G</mi><mo>&lt;</mo><mfrac><mi>E</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ondas transversales en una barra"
    },
    {
     "mota": "testua",
     "html": "En la sección 9.6 hemos estudiado las ondas longitudinales que se propagan a lo largo de una barra. Allí los esfuerzos eran normales. Si ahora consideramos ondas transversales, los esfuerzos serán tangenciales."
    },
    {
     "mota": "irudia",
     "oina": "Ondas transversales en una barra.",
     "src": "../media/irudiak/a079b7012d00d92e.svg",
     "zabalera": 281
    },
    {
     "mota": "testua",
     "html": "Estudiemos el movimiento del elemento infinitesimal que está en reposo entre los puntos <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi></mrow></math>. Las fuerzas cortantes aplicadas en las dos bases tienen sentidos positivos opuestos, pues en un caso es la parte que está a la derecha de la superficie la que actúa sobre la de la izquierda, y en el otro la de la izquierda sobre la de la derecha. El campo de deformación será la distancia transversal medida desde el reposo, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> como se muestra en la figura. Si las deformaciones son pequeñas, tenemos <math display=\"block\"><mrow><mi>θ</mi><mo>≈</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math> y la ley de Hooke (10.24) <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mi>G</mi><mi>θ</mi><mo>=</mo><mi>A</mi><mi>G</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math> La fuerza total que sufre el elemento infinitesimal, por tanto, es <math display=\"block\"><mrow><mi>d</mi><mi>F</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mi>A</mi><mi>G</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>x</mi></mrow></math> y la segunda ley de Newton <math display=\"block\"><mrow><mi>d</mi><mi>F</mi><mo>=</mo><mi>d</mi><mi>m</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>ρ</mi><mi>A</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> La ecuación de evolución del campo de desplazamientos es, en consecuencia, la ecuación de ondas (9.5), <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> y la velocidad de fase"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mi>G</mi><mi>ρ</mi></mfrac></msqrt><mo>&lt;</mo><msqrt><mfrac><mi>E</mi><mi>ρ</mi></mfrac></msqrt><mo>&lt;</mo><msqrt><mfrac><msup><mi>E</mi><mo>′</mo></msup><mi>ρ</mi></mfrac></msqrt><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "es decir, las ondas transversales se propagan más despacio que las longitudinales. Esta diferencia de velocidades puede usarse para medir la distancia del foco de un terremoto: a los sismógrafos llegan antes las <strong>ondas p</strong> longitudinales que las <strong>ondas s</strong> transversales."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ondas de torsión en una barra"
    },
    {
     "mota": "testua",
     "html": "Si la barra elástica es cilíndrica, al aplicar en los extremos momentos de fuerza opuestos se producirá una torsión, como se muestra en la figura 10.9."
    },
    {
     "mota": "irudia",
     "oina": "Torsión en una barra.",
     "src": "../media/irudiak/89ffc75eec4375dc.svg",
     "zabalera": 277
    },
    {
     "mota": "testua",
     "html": "Para estudiar el nuevo equilibrio de la barra, consideremos el anillo cilíndrico entre los radios <math display=\"inline\"><mi>r</mi></math> y <math display=\"inline\"><mrow><mi>r</mi><mo>+</mo><mi>d</mi><mi>r</mi></mrow></math>. Si el ángulo de torsión de toda la barra es <math display=\"inline\"><mi>φ</mi></math> y el del anillo <math display=\"inline\"><mi>θ</mi></math>, tenemos esto: <math display=\"block\"><mrow><mi>L</mi><mi>θ</mi><mo>=</mo><mi>r</mi><mi>φ</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>θ</mi><mo>=</mo><mfrac><mi>r</mi><mi>L</mi></mfrac><mi>φ</mi><mi>.</mi></mrow></math> El estudio de un elemento rectangular del anillo es el de la sección 10.2.4: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>F</mi></mrow><mrow><mi>d</mi><mi>l</mi><mi>d</mi><mi>r</mi></mrow></mfrac><mo>=</mo><mi>G</mi><mi>θ</mi><mo>=</mo><mfrac><mrow><mi>G</mi><mi>r</mi><mi>φ</mi></mrow><mi>L</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mi>F</mi><mo>=</mo><mfrac><mrow><mi>G</mi><mi>φ</mi></mrow><mi>L</mi></mfrac><mi>r</mi><mi>d</mi><mi>r</mi><mi>d</mi><mi>l</mi><mi>.</mi></mrow></math> Integrando respecto de <math display=\"inline\"><mrow><mi>d</mi><mi>l</mi></mrow></math> se obtiene el momento de fuerza que sufre el anillo: <math display=\"block\"><mrow><mi>d</mi><mi>N</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></msubsup><mi>r</mi><mi>d</mi><mi>F</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>G</mi><mi>φ</mi></mrow><mi>L</mi></mfrac><msup><mi>r</mi><mn>3</mn></msup><mi>d</mi><mi>r</mi><mi>.</mi></mrow></math> Por tanto, el momento de fuerza total que soporta la barra es este: <math display=\"block\"><mrow><mi>N</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>R</mi></msubsup><mi>d</mi><mi>N</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>π</mi><mi>G</mi><msup><mi>R</mi><mn>4</mn></msup><mfrac><mi>φ</mi><mi>L</mi></mfrac><mi>.</mi></mrow></math> Hay que subrayar que el momento de fuerza que hay que aplicar para conseguir una torsión dada aumenta con la cuarta potencia del radio de la barra."
    },
    {
     "mota": "irudia",
     "oina": "Elemento infinitesimal de la barra.",
     "src": "../media/irudiak/060e29ab12006a4f.svg",
     "zabalera": 372
    },
    {
     "mota": "testua",
     "html": "Si, en lugar de estar en equilibrio, en la barra se propaga una onda tras producirse una perturbación, habrá que estudiar el ángulo de torsión diferencial <math display=\"inline\"><mrow><mi>d</mi><mi>φ</mi></mrow></math> de un elemento infinitesimal de longitud <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> de la barra: en el caso de la figura 10.10, en lugar del cociente global <math display=\"inline\"><mrow><mi>φ</mi><mi>/</mi><mi>L</mi></mrow></math> habrá que usar <math display=\"block\"><mrow><mfrac><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>≈</mo><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math>: <math display=\"block\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>π</mi><mi>G</mi><msup><mi>R</mi><mn>4</mn></msup><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math> Como el movimiento del elemento infinitesimal ocurre en una dirección principal, la ecuación del movimiento será <math display=\"inline\"><mrow><mi>d</mi><mi>N</mi><mo>=</mo><mi>d</mi><mi>I</mi><msup><mi>∂</mi><mn>2</mn></msup><mi>φ</mi><mi>/</mi><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math>, usando el momento de inercia <math display=\"inline\"><mrow><mi>d</mi><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>d</mi><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> del elemento y la aceleración angular <math display=\"inline\"><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>φ</mi><mi>/</mi><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math>: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>d</mi><mi>N</mi><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>N</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>π</mi><mi>G</mi><msup><mi>R</mi><mn>4</mn></msup><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>φ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ρ</mi><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>R</mi><mn>2</mn></msup><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>φ</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mtd></mtr></mtable></math> Por tanto, tenemos la ecuación de ondas <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>φ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>φ</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> y la velocidad de fase de las ondas de torsión es la de las transversales:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mi>G</mi><mi>ρ</mi></mfrac></msqrt><mo>&lt;</mo><msqrt><mfrac><mi>E</mi><mi>ρ</mi></mfrac></msqrt><mo>&lt;</mo><msqrt><mfrac><msup><mi>E</mi><mo>′</mo></msup><mi>ρ</mi></mfrac></msqrt><mo>,</mo></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Tensor de deformaciones",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para estudiar las deformaciones generales y la dinámica, hay que tener en cuenta que la deformación del cuerpo elástico puede cambiar de un punto a otro: tenemos que describir la deformación de los elementos infinitesimales."
    },
    {
     "mota": "irudia",
     "oina": "Deformación general del elemento infinitesimal <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒅</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math>.",
     "src": "../media/irudiak/f680a6f86ef664d1.svg",
     "zabalera": 228
    },
    {
     "mota": "testua",
     "html": "Consideremos un elemento infinitesimal <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> situado en el punto <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math>, que sin deformación está en la posición <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math>, que da la posición relativa del punto próximo <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math> de posición <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math>. El cuadrado de la distancia entre los dos puntos"
    },
    {
     "mota": "testua",
     "html": "será, si, para abreviar la notación, de forma parecida a lo que hicimos en la sección 2.2, escribimos <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>y</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mi>z</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Cuando el campo de deformaciones es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el material del primer punto estará en el punto <math display=\"inline\"><msubsup><mi>P</mi><mn>1</mn><mo>*</mo></msubsup></math>, en la posición <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y el del segundo punto en el punto <math display=\"inline\"><msubsup><mi>P</mi><mn>2</mn><mo>*</mo></msubsup></math> de posición <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. La nueva posición relativa será, por tanto, <math display=\"block\"><mrow><mi>d</mi><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>*</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>d</mi><msubsup><mi>x</mi><mi>i</mi><mo>*</mo></msubsup><mo>=</mo><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub><mo>+</mo><msub><mi>u</mi><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msub><mi>u</mi><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mi>d</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></math>, pues, como hemos dicho, admitimos que las deformaciones son pequeñas. (Para aligerar un poco la notación, en esta sección no escribimos la dependencia del tiempo.) La nueva distancia entre los puntos será la dada por la expresión <math display=\"block\"><mrow><mi>d</mi><msup><mi>l</mi><mrow><mi>*</mi><mn>2</mn></mrow></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>d</mi><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mi>d</mi><msubsup><mi>x</mi><mi>i</mi><mrow><mi>*</mi><mn>2</mn></mrow></msubsup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mi>d</mi><msubsup><mi>x</mi><mi>i</mi><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub><mi>d</mi><msub><mi>x</mi><mi>j</mi></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mi>d</mi><msub><mi>x</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup></mrow></math>; pero aquí el último término es cuadrático en la deformación y, por tanto, despreciable. Con las derivadas <math display=\"inline\"><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub><mi>/</mi><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></math> que aparecen en el segundo término puede formarse una matriz cuadrada <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> que, como todas las matrices cuadradas, se descompone de manera única como suma de una matriz simétrica y otra antisimétrica: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>j</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>j</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Está claro que la suma que se obtiene al multiplicar la componente antisimétrica por el factor simétrico <math display=\"inline\"><mrow><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub><mi>d</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></math> es cero. Por definición, las componentes del tensor de deformaciones"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>≡</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>j</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "son y, por tanto, <math display=\"block\"><mrow><mi>d</mi><msup><mi>l</mi><mrow><mi>*</mi><mn>2</mn></mrow></msup><mo>=</mo><mi>d</mi><msup><mi>l</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub><mi>d</mi><msub><mi>x</mi><mi>j</mi></msub><mo>=</mo><mi>d</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mfrac><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub><mi>d</mi><msub><mi>x</mi><mi>j</mi></msub></mrow><mrow><mi>d</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>d</mi><msup><mi>l</mi><mo>*</mo></msup><mo>=</mo><mi>d</mi><mi>l</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub><mi>d</mi><msub><mi>x</mi><mi>j</mi></msub></mrow><mrow><mi>d</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> tenemos, como consecuencia del binomio de Newton. Esto es, pues, lo que hemos demostrado: <em>mediante la expresión siguiente, la deformación unitaria en el punto <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> y en la dirección <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> viene dada por el tensor de deformaciones</em>: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msup><mi>l</mi><mo>*</mo></msup><mo>−</mo><mi>d</mi><mi>l</mi></mrow><mrow><mi>d</mi><mi>l</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>d</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub><mi>d</mi><msub><mi>x</mi><mi>j</mi></msub><mi>.</mi></mrow></math> En consecuencia, en el punto que consideramos, en la dirección del vector unitario <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>≡</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow><mrow><mi>d</mi><mi>l</mi></mrow></mfrac></mrow></math>, la deformación unitaria es esta:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msup><mi>l</mi><mo>*</mo></msup><mo>−</mo><mi>d</mi><mi>l</mi></mrow><mrow><mi>d</mi><mi>l</mi></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>n</mi><mi>i</mi></msub><msub><mi>n</mi><mi>j</mi></msub><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Está claro que el tensor de deformaciones, que es la generalización de la deformación unitaria, es simétrico (y por tanto tiene como máximo 6 componentes distintas) y adimensional. El miembro izquierdo de (10.49) es un escalar y tendrá el mismo valor en todos los triedros cartesianos y, en consecuencia, lo mismo debe ocurrir con la combinación que aparece a la derecha, aunque no ocurra así con cada elemento. De hecho, aunque el vector <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> no dependa del triedro, las variables <math display=\"inline\"><mrow><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></math> cambiarán al cambiar el triedro; del mismo modo las componentes <math display=\"inline\"><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> dependerán del triedro, pero el tensor de deformaciones en sí es independiente del triedro. Recuerda que dijimos algo parecido del tensor de inercia en la sección 5.3.1. Hay que subrayar que hay una diferencia muy importante entre los tensores de inercia y de deformaciones, aunque ambos son tensores simétricos de rango 2: el primero es una propiedad global del sólido, que tiene un único valor; el tensor de deformaciones, en cambio, es una propiedad local, que tiene un valor en cada punto. El tensor de deformaciones es un campo tensorial."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Deformaciones longitudinales"
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, si <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>d</mi><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>=</mo><mi>d</mi><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>l</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>d</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math> y tenemos esto:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msup><mi>x</mi><mo>*</mo></msup><mo>−</mo><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><msub><mi>u</mi><mn>11</mn></msub><mo>≡</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(En el último resultado no hay que usar el valor absoluto, pues es consecuencia directa de (10.43).) El caso particular de este resultado era (9.54). Como se ve, si el desplazamiento <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> se elige en la dirección de un eje, <em>los elementos de la diagonal del tensor de deformaciones son las deformaciones unitarias longitudinales medidas en las direcciones de los ejes cartesianos</em>."
    },
    {
     "mota": "irudia",
     "oina": "Cubo sometido a tensión.",
     "src": "../media/irudiak/ccbb48f58485f186.svg",
     "zabalera": 232
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, en el caso del equilibrio del cubo homogéneo e isótropo de la figura 10.12, las componentes del tensor de deformaciones <em>en todos los puntos</em> son las siguientes, como consecuencia del resultado (10.2): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>x</mi></msub><mi>/</mi><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>y</mi></msub><mi>/</mi><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>z</mi></msub><mi>/</mi><mi>a</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>y</mi></msub></mrow><mi>a</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>σ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>σ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> (La longitud propia de los lados del cubo es <math display=\"inline\"><mi>a</mi></math> y, como veremos en la sección 10.3.2, en este ejemplo los elementos fuera de la diagonal son cero.)"
    },
    {
     "mota": "testua",
     "html": "Las deformaciones longitudinales que ocurren en direcciones no paralelas a los ejes cartesianos se calculan fácilmente usando el resultado (10.51): <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mfrac><mrow><mi>d</mi><msup><mi>l</mi><mo>*</mo></msup><mo>−</mo><mi>d</mi><mi>l</mi></mrow><mrow><mi>d</mi><mi>l</mi></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>n</mi><mi>i</mi></msub><msub><mi>n</mi><mi>j</mi></msub><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>y</mi></msub></mrow><mi>a</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>n</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>n</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>n</mi><mi>z</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>σ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>σ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>n</mi><mi>x</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>n</mi><mi>y</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>n</mi><mi>z</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>y</mi></msub></mrow><mi>a</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><mo>−</mo><mi>σ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Por ejemplo, como las direcciones de las diagonales principales son las de los vectores unitarios <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>±</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>±</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msqrt><mn>3</mn></msqrt></mrow></math>, tenemos <math display=\"inline\"><mrow><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><mo>=</mo><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><mo>=</mo><msubsup><mi>n</mi><mi>z</mi><mn>2</mn></msubsup><mo>=</mo><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math> y todas las diagonales principales de longitud <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><msqrt><mn>3</mn></msqrt><mi>a</mi></mrow></math> se deforman de la misma manera en este caso: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>d</mi></mrow><mi>d</mi></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi></mrow><mn>3</mn></mfrac><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>y</mi></msub></mrow><mi>a</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Deformaciones de cizalladura"
    },
    {
     "mota": "testua",
     "html": "Para estudiar el significado de los elementos fuera de la diagonal y, de paso, comprender mejor la razón de elegir en la definición (10.46) la combinación simétrica de las derivadas <math display=\"inline\"><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub><mi>/</mi><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></math>, consideremos las dos deformaciones de un elemento infinitesimal que se representan en la figura 10.13."
    },
    {
     "mota": "irudia",
     "oina": "Deformación de cizalladura y giro.",
     "src": "../media/irudiak/d6d7d346e05682dc.svg",
     "zabalera": 369
    },
    {
     "mota": "testua",
     "html": "En el caso de la izquierda, tenemos una deformación de cizalladura y podemos calcular fácilmente el ángulo <math display=\"inline\"><mi>θ</mi></math> que hemos dividido en dos partes pequeñas. El cálculo de <math display=\"inline\"><mi>α</mi></math> respecto de la horizontal es este: <math display=\"block\"><mrow><mi>δ</mi><mo>=</mo><msub><mi>u</mi><mi>y</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>u</mi><mi>y</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>d</mi><mi>x</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>α</mi><mo>≈</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mfrac><mi>δ</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>≈</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math> De la misma manera, <math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mrow></math> y la mitad de la deformación de cizalladura es esta:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mi>θ</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mi>α</mi><mo>+</mo><mi>β</mi></mrow><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>y</mi><mi>x</mi></mrow></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las componentes del tensor de deformaciones, en el triedro elegido, son, pues, estas: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>θ</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Este es, pues, el significado de los elementos fuera de la diagonal: <em>los elementos <math display=\"inline\"><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> y <math display=\"inline\"><msub><mi>u</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub></math> son iguales a la mitad de la deformación de cizalladura en el plano <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>,</mo><msub><mi>x</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math></em>  (cuando <math display=\"inline\"><mrow><mi>i</mi><mo>≠</mo><mi>j</mi></mrow></math>). El resultado (10.27) es un caso particular de lo de aquí."
    },
    {
     "mota": "testua",
     "html": "En el caso de la derecha de la figura 10.13 el elemento infinitesimal se ha (trasladado y) girado, sin deformarse, y el ángulo de giro alrededor del eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> es este: <math display=\"block\"><mrow><mi>φ</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><msub><mi>u</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Es decir, para expresar giros sin deformación hay que usar el tensor antisimétrico <math display=\"block\"><mrow><msub><mi>α</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mi>−</mi><msub><mi>α</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>j</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Tendrá como máximo 3 componentes distintas: las necesarias para expresar un giro infinitesimal mediante un vector: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝜶</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><msub><mi>α</mi><mrow><mi>y</mi><mi>z</mi></mrow></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>α</mi><mrow><mi>z</mi><mi>x</mi></mrow></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><msub><mi>α</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> Por tanto, si el campo de deformaciones es irrotacional, <math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> (véase la sección B.3.6) los elementos infinitesimales no giran (aunque los puntos giren): <math display=\"inline\"><mrow><msub><mi>α</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Además, la descomposición (10.45) hecha en el cálculo (10.44) se escribe como <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>j</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>+</mo><msub><mi>α</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></mrow></math> y allí no aparece <math display=\"inline\"><msub><mi>α</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> al calcular la deformación, pues expresa un giro puro sin deformación. (Tampoco hay deformación en una traslación pura, pues <math display=\"inline\"><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub><mi>/</mi><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub><mo>=</mo><mn>0</mn></mrow></math> en ese caso.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Deformación del volumen"
    },
    {
     "mota": "testua",
     "html": "Para calcular el cambio infinitesimal del volumen, consideremos, cuando la deformación es nula, los tres vectores siguientes definidos en las direcciones de los tres ejes cartesianos y en el punto <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math>: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub><mo>=</mo><mi>d</mi><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub><mo>=</mo><mi>d</mi><mi>y</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>3</mn></msub><mo>=</mo><mi>d</mi><mi>z</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> con el campo de deformaciones, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> estarán en el punto: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msubsup><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn><mo>*</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>d</mi><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo>=</mo><mi>d</mi><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>d</mi><mi>x</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn><mo>*</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn><mo>*</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒗</mi><mn>3</mn><mo>*</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>z</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Cambio infinitesimal del volumen.",
     "src": "../media/irudiak/3dee06a58b1ce09f.svg",
     "zabalera": 361
    },
    {
     "mota": "testua",
     "html": "El volumen del paralelepípedo infinitesimal definido por los tres vectores antes de producirse la deformación es <math display=\"block\"><mrow><mi>d</mi><mi>V</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mi>d</mi><mi>z</mi></mrow></math> y con la deformación <math display=\"block\"><mrow><mi>d</mi><msup><mi>V</mi><mo>*</mo></msup><mo>=</mo><msubsup><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn><mo>*</mo></msubsup><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn><mo>*</mo></msubsup><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝒗</mi><mn>3</mn><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mi>d</mi><mi>z</mi></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>V</mi><mi>.</mi></mrow></math> Es decir, tenemos la generalización del resultado (10.6): <em>la deformación unitaria del volumen es igual a la divergencia del campo de deformaciones (véase la sección B.3.4) y a la traza del tensor de deformaciones</em>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msup><mi>V</mi><mo>*</mo></msup><mo>−</mo><mi>d</mi><mi>V</mi></mrow><mrow><mi>d</mi><mi>V</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>=</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>i</mi><mi>i</mi></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto, si el campo de deformaciones es solenoidal, <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> el volumen de los elementos infinitesimales no cambia."
    },
    {
     "mota": "testua",
     "html": "En el caso general, según el teorema de Helmholtz, el campo de deformaciones <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math> se escribe como la suma de un campo irrotacional y otro solenoidal (véase la sección B.3.8): <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>La deformación infinitesimal general es la composición de una deformación sin giro y otra sin cambio de volumen</em>"
    },
    {
     "mota": "testua",
     "html": ", pues."
    },
    {
     "mota": "testua",
     "html": "A modo de ejemplo, en el caso (10.53) tenemos <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi></mrow><mi>V</mi></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>x</mi></msub></mrow><mi>a</mi></mfrac><mo>+</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>y</mi></msub></mrow><mi>a</mi></mfrac><mo>+</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>z</mi></msub></mrow><mi>a</mi></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>y</mi></msub></mrow><mi>a</mi></mfrac></mrow></math> y en el caso (10.60) <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Tensor de esfuerzos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Las fuerzas elásticas son las fuerzas de contacto que cada elemento infinitesimal de un sólido elástico ejerce sobre el contiguo, en la superficie que hay entre ambos."
    },
    {
     "mota": "irudia",
     "oina": "Una superficie infinitesimal.",
     "src": "../media/irudiak/b8f8f8122732aa67.svg",
     "zabalera": 140
    },
    {
     "mota": "testua",
     "html": "Consideremos el elemento de superficie infinitesimal de la figura 10.15. Es perpendicular al eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> y su área es <math display=\"inline\"><mrow><mi>d</mi><mi>S</mi><mo>=</mo><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi></mrow></math>. La expresión vectorial del elemento es <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>. La fuerza elástica que el material situado sobre el elemento (es decir, en el lado definido por el sentido positivo de <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math>) ejerce a través de la superficie sobre el que está debajo será <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi></mrow></math>. El esfuerzo normal"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>z</mi><mi>z</mi></mrow></msub><mo>≡</mo><mfrac><mrow><mi>d</mi><msub><mi>F</mi><mi>z</mi></msub></mrow><mrow><mi>d</mi><mi>S</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><msub><mi>F</mi><mi>z</mi></msub></mrow><mrow><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "será, pero el esfuerzo cortante tiene dos componentes, en las direcciones de los ejes <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> y <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>x</mi><mi>z</mi></mrow></msub><mo>≡</mo><mfrac><mrow><mi>d</mi><msub><mi>F</mi><mi>x</mi></msub></mrow><mrow><mi>d</mi><mi>S</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><msub><mi>F</mi><mi>x</mi></msub></mrow><mrow><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi></mrow></mfrac><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>y</mi><mi>z</mi></mrow></msub><mo>≡</mo><mfrac><mrow><mi>d</mi><msub><mi>F</mi><mi>y</mi></msub></mrow><mrow><mi>d</mi><mi>S</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><msub><mi>F</mi><mi>y</mi></msub></mrow><mrow><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En general, en el elemento infinitesimal perpendicular al eje <math display=\"inline\"><mi>j</mi></math>, la componente <math display=\"inline\"><mi>i</mi></math> del esfuerzo que el material situado en el sentido positivo ejerce sobre el otro será <math display=\"inline\"><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math>. El conjunto de los esfuerzos <math display=\"inline\"><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> es el tensor de esfuerzos. También se llama <strong>tensor de tensiones</strong>; de hecho, de este caso particular viene la palabra «tensor». Está claro que, en general, como el tensor de deformaciones, el tensor de esfuerzos también es un campo tensorial: en cada punto tenemos un tensor."
    },
    {
     "mota": "testua",
     "html": "Las dimensiones del tensor de esfuerzos son las del esfuerzo y, como el tensor de deformaciones, es simétrico: tiene como máximo 6 componentes distintas. (Como demostraremos en la sección 10.6.3, esta propiedad es consecuencia de la ecuación de evolución del momento angular.)"
    },
    {
     "mota": "irudia",
     "oina": "Esfuerzos en algunos elementos infinitesimales.",
     "src": "../media/irudiak/e98f088142d8828a.svg",
     "zabalera": 334
    },
    {
     "mota": "testua",
     "html": "Usando la definición, se calcula fácilmente la fuerza elástica aplicada sobre una superficie infinitesimal perpendicular a un eje cartesiano; pero lo mismo puede hacerse en una superficie infinitesimal de cualquier orientación. En el caso del elemento de la derecha de la figura 10.16, en el límite en que las dimensiones tienden a cero la masa y, por tanto, la fuerza total son cero. Por ejemplo, la componente <math display=\"inline\"><mi>x</mi></math> de la ecuación del movimiento es la siguiente: <math display=\"block\"><mrow><mi>d</mi><msub><mi>F</mi><mi>x</mi></msub><mo>−</mo><msub><mi>τ</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mi>d</mi><mi>x</mi><mi>d</mi><mi>z</mi><mo>−</mo><msub><mi>τ</mi><mrow><mi>x</mi><mi>z</mi></mrow></msub><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>τ</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo></mrow><mrow><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi></mrow></msub><mi>d</mi><mi>y</mi><mi>d</mi><mi>z</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>τ</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo></mrow><mi>x</mi></msub><mi>d</mi><mi>y</mi><mi>d</mi><mi>z</mi><mo>=</mo><mi>ρ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>V</mi><mo>,</mo></mrow></math> donde el volumen infinitesimal del elemento es <math display=\"block\"><mrow><mi>d</mi><mi>V</mi><mo>≡</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mi>d</mi><mi>z</mi></mrow></math>. Es evidente que en el límite <math display=\"inline\"><mrow><mi>d</mi><mi>V</mi><mo>→</mo><mn>0</mn></mrow></math> todos los esfuerzos se aplican en el mismo punto y, en consecuencia, los dos últimos términos que aparecen a la izquierda de la expresión (10.85) se cancelan entre sí. El área de la superficie infinitesimal y el correspondiente vector unitario normal son los siguientes: <math display=\"block\"><mrow><mi>d</mi><mi>S</mi><mo>=</mo><mi>d</mi><mi>x</mi><msqrt><mrow><mi>d</mi><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>d</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><msqrt><mrow><mi>d</mi><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>d</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><msqrt><mrow><mi>d</mi><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>d</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> Por tanto, vemos que la componente <math display=\"inline\"><mi>x</mi></math> del esfuerzo aplicado en la cara positiva del elemento <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mi>d</mi><mi>S</mi><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover></mrow></math> es la siguiente: <img class=\"formula formula-d\" src=\"../media/formulak/88f95adde9816b15.svg\" alt=\"(d F_x) / (dif S) = tau_(x y) n_y + tau_(x z) n_z + 1 / 2 rho (partial^2 u_x) / (partial t^2) n_y n_z sqrt(dif y^2 + dif z^2) attach(arrow.r.long, t: $dif V -&gt; 0$) tau_(x y) n_y + tau_(x z) n_z.\" style=\"width:35.004em;height:2.773em\" loading=\"lazy\"> En general, en el caso del elemento <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mi>d</mi><mi>S</mi><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover></mrow></math> el esfuerzo es <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msub><mi>F</mi><mi>i</mi></msub></mrow><mrow><mi>d</mi><mi>S</mi></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>n</mi><mi>j</mi></msub></mrow></math> y la fuerza"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><msub><mi>F</mi><mi>i</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>n</mi><mi>j</mi></msub><mi>d</mi><mi>S</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msub><mi>S</mi><mi>j</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Los dos términos son componentes de vectores; el de la derecha, el producto escalar de un tensor y un vector. Las componentes serán distintas en triedros distintos, pero los vectores y los tensores son intrínsecos, independientes del triedro:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi></mrow><mrow><mi>d</mi><mi>S</mi></mrow></mfrac><mo>=</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Un cubo en equilibrio.",
     "src": "../media/irudiak/41340a103aa58d80.svg",
     "zabalera": 197
    },
    {
     "mota": "testua",
     "html": "A modo de ejemplo, consideremos el cubo en equilibrio de la figura 10.17. En los ejes elegidos, el tensor de esfuerzos se escribe así: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>τ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Por otra parte, por los resultados (10.3), tenemos las deformaciones unitarias longitudinales: <math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>z</mi><mi>z</mi></mrow></msub><mo>=</mo><mi>−</mi><mi>σ</mi><mfrac><mi>τ</mi><mi>E</mi></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mfrac><mi>τ</mi><mi>E</mi></mfrac><mi>.</mi></mrow></math> Usando la expresión (10.24), se calculan directamente las deformaciones de cizalladura: <math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>y</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>y</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>z</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>z</mi><mi>x</mi></mrow></msub><mo>=</mo><mfrac><mi>θ</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mi>τ</mi><mrow><mn>2</mn><mi>G</mi></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>τ</mi><mi>E</mi></mfrac><mi>.</mi></mrow></math> En consecuencia, tenemos el tensor de deformaciones: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>τ</mi><mi>E</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>σ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><mi>σ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><mi>σ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>σ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Dos superficies dentro del cubo.",
     "src": "../media/irudiak/253f5197170b1b4b.svg",
     "zabalera": 368
    },
    {
     "mota": "testua",
     "html": "La deformación unitaria del volumen, por tanto, es esta: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi></mrow><mi>V</mi></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>k</mi><mi>k</mi></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>τ</mi><mi>E</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Calculemos ahora el esfuerzo aplicado en la superficie <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> de la figura 10.18. Como el vector unitario correspondiente es <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒋</mi></mrow><msqrt><mn>2</mn></msqrt></mfrac></mrow></math>, por el resultado (10.92) tenemos esto: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi></mrow><mrow><mi>d</mi><mi>S</mi></mrow></mfrac><mo>=</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mfrac><mi>τ</mi><msqrt><mn>2</mn></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>τ</mi><msqrt><mn>2</mn></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>τ</mi><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒌</mi></mrow><msqrt><mn>2</mn></msqrt></mfrac><mi>.</mi></mrow></math> El esfuerzo normal y el tangente (es decir, el esfuerzo cortante) se calculan ahora directamente: <math display=\"block\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi></mrow><mrow><mi>d</mi><mi>S</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi></mrow><mrow><mi>d</mi><mi>S</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>τ</mi><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒋</mi></mrow><mrow><mn>2</mn><msqrt><mn>2</mn></msqrt></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi></mrow><mrow><mi>d</mi><mi>S</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∥</mo></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi></mrow><mrow><mi>d</mi><mi>S</mi></mrow></mfrac><mo>−</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi></mrow><mrow><mi>d</mi><mi>S</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msub><mo>=</mo><mi>τ</mi><mfrac><mrow><mi>−</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝒌</mi></mrow><mrow><mn>2</mn><msqrt><mn>2</mn></msqrt></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcula las dos componentes del esfuerzo en la superficie <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> de la figura 10.18."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Considera los sólidos en equilibrio de las figuras 10.3 y 10.7. Supongamos que el plano mostrado en cada figura es <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math>, que el eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> es horizontal y el eje <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> vertical. Demuestra que los tensores de esfuerzos correspondientes son, respectivamente, estos: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>F</mi><mi>A</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>F</mi><msup><mi>l</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Presión"
    },
    {
     "mota": "testua",
     "html": "El tensor de esfuerzos más sencillo es el proporcional a la identidad:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mi>−</mi><mi>p</mi><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esto describe la presión, pues es perpendicular a cualquier superficie infinitesimal y hacia el interior (véase, en la página 590, la ley de Pascal):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><msub><mi>F</mi><mi>i</mi></msub><mo>=</mo><mi>−</mi><mi>p</mi><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msub><mi>S</mi><mi>j</mi></msub><mo>=</mo><mi>−</mi><mi>p</mi><mi>d</mi><msub><mi>S</mi><mi>i</mi></msub><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi>p</mi><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Tensor de elasticidad",
   "blokeak": [
    {
     "mota": "testua",
     "html": "También en el caso general la ley de Hooke expresa una relación lineal entre los tensores de esfuerzos y de deformaciones, pero —como se ve en el ejemplo de los tensores (10.93) y (10.98)— no la da una constante de proporcionalidad, sino la siguiente estructura más general:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>,</mo><mi>l</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>C</mi><mrow><mi>i</mi><mi>j</mi><mi>k</mi><mi>l</mi></mrow></msub><msub><mi>u</mi><mrow><mi>k</mi><mi>l</mi></mrow></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las componentes del tensor de elasticidad <math display=\"inline\"><msub><mi>C</mi><mrow><mi>i</mi><mi>j</mi><mi>k</mi><mi>l</mi></mrow></msub></math> son los módulos de elasticidad y, si el cuerpo es homogéneo, son constantes."
    },
    {
     "mota": "testua",
     "html": "Como los tensores de esfuerzos y de deformaciones son simétricos, cada uno tiene como máximo 6 componentes distintas; el tensor de elasticidad, en consecuencia, tendrá como máximo 36 componentes distintas, pero a menudo son muchas menos. En el caso de un cristal cúbico son 21, como máximo."
    },
    {
     "mota": "testua",
     "html": "Por otra parte, como generalización de (1.89), la densidad de energía elástica es esta: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mi>j</mi><mi>k</mi><mi>l</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>C</mi><mrow><mi>i</mi><mi>j</mi><mi>k</mi><mi>l</mi></mrow></msub><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>u</mi><mrow><mi>k</mi><mi>l</mi></mrow></msub><mi>.</mi></mrow></math> (Esta relación se estudia en los problemas 10.6 y 10.7 en dos casos sencillos.) Si no hay otras fuerzas, el equilibrio ocurrirá en los mínimos de la energía elástica total <math display=\"inline\"><mrow><mo>∫</mo><mi>U</mi><mi>d</mi><mi>V</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cuerpo homogéneo e isótropo"
    },
    {
     "mota": "testua",
     "html": "En este caso particular, el tensor de elasticidad tiene solo dos componentes independientes, como consecuencia de las simetrías, y la relación entre los tensores de esfuerzos y de deformaciones siempre puede escribirse de esta manera<span class=\"j-oin\">[Véase también el problema 10.13.]</span>: <math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mn>2</mn><mi>μ</mi><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>+</mo><mi>λ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>k</mi><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>.</mi></mrow></math> Esto quiere decir que las componentes del tensor de elasticidad son <math display=\"block\"><mrow><msub><mi>C</mi><mrow><mi>i</mi><mi>j</mi><mi>k</mi><mi>l</mi></mrow></msub><mo>=</mo><mi>λ</mi><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>δ</mi><mrow><mi>k</mi><mi>l</mi></mrow></msub><mo>+</mo><mi>μ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>δ</mi><mrow><mi>i</mi><mi>k</mi></mrow></msub><msub><mi>δ</mi><mrow><mi>j</mi><mi>l</mi></mrow></msub><mo>+</mo><msub><mi>δ</mi><mrow><mi>i</mi><mi>l</mi></mrow></msub><msub><mi>δ</mi><mrow><mi>j</mi><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> o <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>C</mi><mrow><mi>x</mi><mi>x</mi><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>y</mi><mi>y</mi><mi>z</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>z</mi><mi>z</mi><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>y</mi><mi>y</mi><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>⋯</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>μ</mi><mo>=</mo><msub><mi>C</mi><mrow><mi>x</mi><mi>y</mi><mi>x</mi><mi>y</mi></mrow></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>x</mi><mi>z</mi><mi>x</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>y</mi><mi>x</mi><mi>y</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>⋯</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mn>2</mn><mi>μ</mi><mo>+</mo><mi>λ</mi><mo>=</mo><msub><mi>C</mi><mrow><mi>x</mi><mi>x</mi><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>y</mi><mi>y</mi><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>z</mi><mi>z</mi><mi>z</mi><mi>z</mi></mrow></msub><mi>.</mi></mrow></math>. Los parámetros <math display=\"inline\"><mi>μ</mi></math> y <math display=\"inline\"><mi>λ</mi></math> que hemos usado son las <strong>constantes elásticas de Lamé</strong>. Consideremos un elemento de la barra de la figura 10.3 en equilibrio. Usando la ley de Hooke (10.3), el tensor de deformaciones (10.53), el tensor de esfuerzos (10.104) y la expresión (10.110), tenemos esto: <math display=\"block\"><mrow><mi>E</mi><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mo>=</mo><mi>τ</mi><mo>=</mo><msub><mi>τ</mi><mn>11</mn></msub><mo>=</mo><mn>2</mn><mi>μ</mi><msub><mi>u</mi><mn>11</mn></msub><mo>+</mo><mi>λ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>11</mn></msub><mo>+</mo><msub><mi>u</mi><mn>22</mn></msub><mo>+</mo><msub><mi>u</mi><mn>33</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mi>μ</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mn>0</mn><mo>=</mo><msub><mi>τ</mi><mn>22</mn></msub><mo>=</mo><mn>2</mn><mi>μ</mi><msub><mi>u</mi><mn>22</mn></msub><mo>+</mo><mi>λ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>11</mn></msub><mo>+</mo><msub><mi>u</mi><mn>22</mn></msub><mo>+</mo><msub><mi>u</mi><mn>33</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mn>2</mn><mi>σ</mi><mi>μ</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mi>.</mi></mrow></math> De aquí se obtiene directamente que las constantes de Lamé pueden escribirse como combinación de los módulos de elasticidad que hemos visto antes: <math display=\"block\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mi>E</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>E</mi><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow></mfrac><mfrac><mi>σ</mi><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi></mrow></mfrac><mi>.</mi></mrow></math> Como se ve, el módulo de cizalladura (10.25) es <math display=\"inline\"><mrow><mi>G</mi><mo>=</mo><mi>μ</mi></mrow></math> y el módulo longitudinal (10.15) <math display=\"inline\"><mrow><msup><mi>E</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>μ</mi><mo>+</mo><mi>λ</mi></mrow></math>. En el caso del cubo de la figura 10.17, usando (10.98) y (10.99), se recupera (10.93): <math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>2</mn><mi>μ</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mi>λ</mi><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>k</mi><mi>k</mi></mrow></msub><mo>=</mo><mfrac><mi>τ</mi><mi>E</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>σ</mi><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow></mfrac><mo>+</mo><mfrac><mi>E</mi><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow></mfrac><mfrac><mi>σ</mi><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>2</mn><mi>μ</mi><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>λ</mi><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>k</mi><mi>k</mi></mrow></msub><mo>=</mo><mfrac><mi>τ</mi><mi>E</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>E</mi><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow></mfrac><mo>+</mo><mfrac><mi>E</mi><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow></mfrac><mfrac><mi>σ</mi><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>τ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>2</mn><mi>μ</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>x</mi><mi>z</mi></mrow></msub><mo>=</mo><mn>2</mn><mi>μ</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>z</mi></mrow></msub><mo>=</mo><mfrac><mi>E</mi><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow></mfrac><mfrac><mi>τ</mi><mi>E</mi></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>τ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Considera el elemento en equilibrio de la figura 10.13. Usa el tensor de deformaciones (10.60), el tensor de esfuerzos (10.105) y la ley (10.24) para comprobar de nuevo <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>G</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el caso de cuerpos elásticos homogéneos e isótropos, también pueden usarse las siguientes expresiones equivalentes, que demostraremos en el problema 10.13:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝝉</mi><mo>=</mo><mfrac><mi>E</mi><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>+</mo><mfrac><mi>σ</mi><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi></mrow></mfrac><mi mathvariant=\"normal\">tr</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mn mathvariant=\"bold\">𝟏</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow><mi>E</mi></mfrac><mi mathvariant=\"bold-italic\">𝝉</mi><mo>−</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"bold-italic\">𝝉</mi><mn mathvariant=\"bold\">𝟏</mn><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Ecuaciones del movimiento del cuerpo elástico",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Algunas fuerzas exteriores que actúan sobre los cuerpos elásticos son proporcionales al volumen, es decir, se expresan mediante una densidad de fuerza: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>V</mi></msub><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mi>d</mi><mi>V</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Un volumen dentro de un cuerpo elástico.",
     "src": "../media/irudiak/0669b644ce2526fb.svg",
     "zabalera": 190
    },
    {
     "mota": "testua",
     "html": "Se llaman <strong>fuerzas de volumen</strong>, y la más conocida es el peso, cuya densidad de fuerza es esta: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mo>=</mo><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒈</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>V</mi></msub><mo>=</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝒈</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Otras fuerzas exteriores pueden ser <strong>fuerzas de superficie</strong>, si actúan solo en la superficie del cuerpo. Fueron así las de la figura 10.3, por ejemplo. Aquí, para simplificar, admitiremos que las fuerzas de superficie exteriores son nulas. Eso puede ocurrir porque se han quitado después de producir un campo de deformaciones o porque la única fuerza exterior ha sido la de volumen."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Densidad de las fuerzas elásticas"
    },
    {
     "mota": "testua",
     "html": "Las fuerzas internas, precisamente las elásticas, se aplican en las superficies entre elementos infinitesimales, pero también podemos considerarlas de volumen. De hecho, la densidad de las fuerzas elásticas se define fácilmente. La fuerza elástica total hecha en una superficie cerrada <math display=\"inline\"><mi>S</mi></math>, por (10.92), es <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>e</mi></msub><mo>=</mo><msub><mo>∮</mo><mi>S</mi></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><msub><mo>∮</mo><mi>S</mi></msub><mi mathvariant=\"bold-italic\">𝝉</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math>. Recordemos ahora que, según el teorema de Gauss (véase la sección B.3.4), el flujo hacia fuera de un campo vectorial a través de una superficie cerrada es igual a la integral de la divergencia del campo calculada en el volumen rodeado por la superficie: <math display=\"block\"><mrow><msub><mo>∮</mo><mi>S</mi></msub><mi mathvariant=\"bold-italic\">𝑬</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mi>d</mi><mi>V</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mo>∮</mo><mi>S</mi></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>E</mi><mi>j</mi></msub><mi>d</mi><msub><mi>S</mi><mi>j</mi></msub><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>E</mi><mi>j</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mi>d</mi><mi>V</mi><mi>.</mi></mrow></math> De la misma manera puede demostrarse la siguiente generalización (en definitiva, es el teorema de Gauss para cada valor del índice <math display=\"inline\"><mi>i</mi></math>): <math display=\"block\"><mrow><msub><mo>∮</mo><mi>S</mi></msub><mi mathvariant=\"bold-italic\">𝝉</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mi>d</mi><mi>V</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mo>∮</mo><mi>S</mi></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msub><mi>S</mi><mi>j</mi></msub><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mi>d</mi><mi>V</mi><mi>.</mi></mrow></math> Pero eso quiere decir que <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>e</mi></msub><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mi>d</mi><mi>V</mi></mrow></math> y, por tanto, la densidad de la fuerza elástica"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>e</mi></msub><mo>=</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mi>f</mi><mrow><mi>e</mi><mi>i</mi></mrow></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la densidad de fuerza definida por el tensor de esfuerzos (10.106) correspondiente a la presión es esta:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>p</mi><mi>.</mi></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones de evolución"
    },
    {
     "mota": "testua",
     "html": "La masa y la aceleración de un elemento infinitesimal <math display=\"inline\"><mrow><mi>d</mi><mi>V</mi></mrow></math> son <math display=\"inline\"><mrow><mi>d</mi><mi>m</mi><mo>=</mo><mi>ρ</mi><mi>d</mi><mi>V</mi></mrow></math> y <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒖</mi><mi>/</mi><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math>, respectivamente, y la segunda ley de Newton <math display=\"inline\"><mrow><mi>d</mi><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>e</mi></msub><mi>d</mi><mi>V</mi><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mi>d</mi><mi>V</mi></mrow></math>, es decir, si las fuerzas que sufre el sólido elástico son fuerzas exteriores de volumen y elásticas, la ecuación del movimiento es la siguiente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ρ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La ecuación de evolución del momento angular del elemento es consecuencia directa de esta segunda ley de Newton: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi>d</mi><mi>m</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>V</mi><mi>.</mi></mrow></math> Por tanto, como la derivada del momento angular es igual al momento de fuerza, la densidad de los momentos de las fuerzas elásticas es esta: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msub><mi mathvariant=\"bold-italic\">𝑵</mi><mi>e</mi></msub></mrow><mrow><mi>d</mi><mi>V</mi></mrow></mfrac><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>e</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Densidad de los momentos de las fuerzas elásticas"
    },
    {
     "mota": "testua",
     "html": "Pero, por otra parte, podemos calcular directamente el momento de las fuerzas elásticas aplicadas en el volumen <math display=\"inline\"><mi>V</mi></math> de la figura 10.19: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑵</mi><mi>e</mi></msub><mo>=</mo><msub><mo>∮</mo><mi>S</mi></msub><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><msub><mo>∮</mo><mi>S</mi></msub><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>.</mi></mrow></math> Calculemos su componente <math display=\"inline\"><mi>z</mi></math> usando el teorema de Gauss: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>N</mi><mrow><mi>e</mi><mn>3</mn></mrow></msub><mo>=</mo><msub><mo>∮</mo><mi>S</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>d</mi><msub><mi>F</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mi>d</mi><msub><mi>F</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mo>∮</mo><mi>S</mi></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>τ</mi><mrow><mn>2</mn><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><msub><mi>τ</mi><mrow><mn>1</mn><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><msub><mi>S</mi><mi>j</mi></msub></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mi>∂</mi><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>τ</mi><mrow><mn>2</mn><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><msub><mi>τ</mi><mrow><mn>1</mn><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>V</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>τ</mi><mrow><mn>2</mn><mi>j</mi></mrow></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>τ</mi><mrow><mn>1</mn><mi>j</mi></mrow></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>+</mo><msub><mi>τ</mi><mn>21</mn></msub><mo>−</mo><msub><mi>τ</mi><mn>12</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>V</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>f</mi><mrow><mi>e</mi><mn>2</mn></mrow></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><msub><mi>f</mi><mrow><mi>e</mi><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>τ</mi><mn>21</mn></msub><mo>−</mo><msub><mi>τ</mi><mn>12</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>V</mi><mi>.</mi></mtd></mtr></mtable></math> Como este resultado se cumple para todos los <math display=\"inline\"><mi>V</mi></math>, la componente <math display=\"inline\"><mi>z</mi></math> del momento de las fuerzas elásticas es <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msub><mi>N</mi><mrow><mi>e</mi><mn>3</mn></mrow></msub></mrow><mrow><mi>d</mi><mi>V</mi></mrow></mfrac><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>f</mi><mrow><mi>e</mi><mn>2</mn></mrow></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><msub><mi>f</mi><mrow><mi>e</mi><mn>1</mn></mrow></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>τ</mi><mn>21</mn></msub><mo>−</mo><msub><mi>τ</mi><mn>12</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; pero en la 3.ª componente de la expresión (10.135) no aparece el último término: por tanto, debe cumplirse <math display=\"inline\"><mrow><msub><mi>τ</mi><mn>21</mn></msub><mo>=</mo><msub><mi>τ</mi><mn>12</mn></msub></mrow></math>. Está claro que las demás componentes cumplen la misma propiedad: tenemos <math display=\"inline\"><mrow><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><msub><mi>τ</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub></mrow></math> y <em>el tensor de esfuerzos es simétrico</em>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sólido homogéneo e isótropo"
    },
    {
     "mota": "testua",
     "html": "Si el sólido es homogéneo e isótropo, de las expresiones (10.46) y (10.110) se obtiene <math display=\"block\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>i</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mi>μ</mi><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msubsup><mi>x</mi><mi>j</mi><mn>2</mn></msubsup></mrow></mfrac><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>j</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mo>=</mo><mi>μ</mi><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒖</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>∇</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y la ecuación del movimiento (10.133) se reduce a la <strong>ecuación de Cauchy-Navier</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ρ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>μ</mi><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒖</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>∇</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ondas elásticas en medios homogéneos e isótropos ilimitados"
    },
    {
     "mota": "testua",
     "html": "Si no hay fuerzas exteriores, es decir, si desaparecen tras poner el cuerpo en un estado de deformación, la evolución del cuerpo homogéneo e isótropo ocurrirá bajo los esfuerzos elásticos, según la siguiente ecuación: <math display=\"block\"><mrow><mi>ρ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>μ</mi><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒖</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>∇</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Si no estuviera el último término, diríamos que es la ecuación de ondas. Para ver que es una ecuación de ondas distinta, intentemos una solución de la estructura <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi><mo>,</mo></mrow></math> Como se cumple <math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>, las componentes de la ecuación (10.142) son estas: <math display=\"block\"><mrow><mi>ρ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>μ</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>ρ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>μ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>ρ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>μ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> La solución, por tanto, es una onda que se propaga en la dirección <math display=\"inline\"><mi>x</mi></math>. La componente <math display=\"inline\"><msub><mi>u</mi><mi>x</mi></msub></math> es una onda longitudinal y su velocidad de fase (10.18) es:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mo>∥</mo></msub><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>μ</mi><mo>+</mo><mi>λ</mi></mrow><mi>ρ</mi></mfrac></msqrt><mo>=</mo><msqrt><mfrac><msup><mi>E</mi><mo>′</mo></msup><mi>ρ</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las componentes <math display=\"inline\"><msub><mi>u</mi><mi>y</mi></msub></math> y <math display=\"inline\"><msub><mi>u</mi><mi>z</mi></msub></math>, en cambio, son ondas transversales y se propagan con una velocidad de fase menor (10.32):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mo>⟂</mo></msub><mo>=</mo><msqrt><mfrac><mi>μ</mi><mi>ρ</mi></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mi>G</mi><mi>ρ</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hemos demostrado, pues, que (10.142) es una ecuación de ondas, y ahora veremos de manera más general cómo se descompone en dos ecuaciones de ondas corrientes. Para empezar, escribiremos <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msubsup><mi>v</mi><mo>⟂</mo><mn>2</mn></msubsup><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒖</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>v</mi><mo>∥</mo><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>v</mi><mo>⟂</mo><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>∇</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> de modo equivalente, usando las velocidades (10.150)–(10.151). Ahora, según el teorema de Helmholtz, si escribimos el campo de deformaciones <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math> como (10.78)–(10.80), tenemos <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msubsup><mi>v</mi><mo>⟂</mo><mn>2</mn></msubsup><msup><mi>∇</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo>+</mo><msubsup><mi>v</mi><mo>⟂</mo><mn>2</mn></msubsup><msup><mi>∇</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>v</mi><mo>∥</mo><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>v</mi><mo>⟂</mo><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>∇</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y, usando (10.80) y que los operadores diferenciales, como las derivadas parciales, conmutan entre sí, su divergencia queda así: <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mi>v</mi><mo>∥</mo><mn>2</mn></msubsup><msup><mi>∇</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo>−</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Por otra parte, como consecuencia de (10.79) tenemos <math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mi>v</mi><mo>∥</mo><mn>2</mn></msubsup><msup><mi>∇</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo>−</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> y, usando que un campo vectorial de rotacional y divergencia nulos es nulo (véase la sección B.3.8), <math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo>−</mo><mfrac><mn>1</mn><msubsup><mi>v</mi><mo>∥</mo><mn>2</mn></msubsup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Todas las ondas armónicas sin giro de los elementos infinitesimales (<math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn></mrow></math>) se propagan con la velocidad de fase (10.150)."
    },
    {
     "mota": "testua",
     "html": "Ahora, usando el rotacional de (10.153), <math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mi>v</mi><mo>⟂</mo><mn>2</mn></msubsup><msup><mi>∇</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub><mo>−</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> y <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mi>v</mi><mo>⟂</mo><mn>2</mn></msubsup><msup><mi>∇</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub><mo>−</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, que es consecuencia de (10.80), tenemos <math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub><mo>−</mo><mfrac><mn>1</mn><msubsup><mi>v</mi><mo>⟂</mo><mn>2</mn></msubsup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>: la velocidad de fase de las ondas elásticas que se propagan sin cambiar el volumen (<math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub><mo>=</mo><mn>0</mn></mrow></math>) es (10.151)."
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Fluidos y campo de velocidades",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Todos sabemos lo que son los líquidos y los gases corrientes (aquí no consideraremos los interesantes casos intermedios): en lugar de tener forma propia adoptan la del recipiente. Consideremos el disco en equilibrio en el embudo de la figura 10.20. Está claro que eso es posible si el disco es sólido e imposible si es agua u otro líquido. Pero, si estudiamos el equilibrio del cilindro central, para que esté en equilibrio, es decir, para producir la fuerza elástica tangente <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mo>∥</mo></msub></math> contraria al peso, la fuerza elástica que ejerce el material de alrededor sobre la superficie lateral del disco tiene que hacer un esfuerzo cortante. Y como ese equilibrio es imposible en el caso de los fluidos, podemos decir esto: <em>los fluidos no pueden estar en equilibrio mientras sufren esfuerzos cortantes</em>. Aunque el esfuerzo cortante sea pequeño, la deformación no es necesariamente pequeña: aumenta hasta que el esfuerzo desaparece. Eso es lo que usaremos en este texto como definición de fluidos."
    },
    {
     "mota": "irudia",
     "oina": "Equilibrio imposible del agua en un embudo.",
     "src": "../media/irudiak/857c3bd096985696.svg",
     "zabalera": 374
    },
    {
     "mota": "testua",
     "html": "Hasta ahora, en los sistemas de partículas y en los medios elásticos continuos, los valores de las magnitudes (posición, velocidad, etc.) que tienen las partículas o los elementos infinitesimales a lo largo de sus trayectorias han sido el objeto fundamental de estudio de los sistemas mecánicos: se dice que son <strong>variables lagrangianas</strong>, pues son adecuadas para hacer mecánica analítica. Pero en el caso de los fluidos muchas veces son más adecuadas las <strong>variables eulerianas</strong>: en lugar de considerar la posición y la velocidad que tiene cada partícula en cada instante, en cada instante <math display=\"inline\"><mi>t</mi></math> y en cada punto <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> consideraremos la velocidad de la partícula que está en ese preciso momento en el punto. Así, se define la función <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en todos los instantes y puntos: tenemos un campo vectorial, el campo de velocidades. En cierto modo, hasta ahora la partícula ha sido el lugar de estudio, pero ahora lo será el punto."
    },
    {
     "mota": "testua",
     "html": "De la misma manera se definirán otros campos escalares y vectoriales, como la densidad y la presión. La densidad, por ejemplo, será el cociente entre la masa y el volumen del elemento infinitesimal que hay en cada instante en cada punto: <math display=\"inline\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mi>m</mi><mi>/</mi><mi>d</mi><mi>V</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Líneas de corriente"
    },
    {
     "mota": "testua",
     "html": "Desde este punto de vista, en lugar de las trayectorias de las partículas, tenemos que considerar las líneas de corriente —es decir, las curvas que en cada instante son tangentes al campo de velocidades en todos los puntos—: <math display=\"block\"><mrow><mi>δ</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>∥</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>δ</mi><mi>x</mi></mrow><msub><mi>v</mi><mi>x</mi></msub></mfrac><mo>=</mo><mfrac><mrow><mi>δ</mi><mi>y</mi></mrow><msub><mi>v</mi><mi>y</mi></msub></mfrac><mo>=</mo><mfrac><mrow><mi>δ</mi><mi>z</mi></mrow><msub><mi>v</mi><mi>z</mi></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>δ</mi><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> (Aquí hemos usado la notación de los desplazamientos virtuales de la sección D.0.1 para expresar los diferenciales, en lugar de <math display=\"inline\"><mi>d</mi></math>, pues hemos considerado un instante fijo.) En general, como el campo de velocidades depende del tiempo, así serán las líneas de corriente y, en consecuencia, distintas de las trayectorias: en una trayectoria se consideran las velocidades que tiene una partícula en todos los instantes y en una línea de corriente las velocidades que tienen varias partículas en un único instante."
    },
    {
     "mota": "irudia",
     "oina": "Líneas de corriente en un instante y en dos instantes próximos.",
     "src": "../media/irudiak/36399a4fb57151d4.svg",
     "zabalera": 301
    },
    {
     "mota": "testua",
     "html": "En el caso de los fluidos, en general, las deformaciones no serán pequeñas y, por tanto, en lugar del campo de deformaciones <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la variable cinemática fundamental será el campo de velocidades <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, que mide la deformación por unidad de tiempo. Está claro que hay una relación directa y estrecha entre los dos conceptos, y que en el intervalo infinitesimal <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>t</mi><mo>+</mo><mi>d</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> la deformación es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi></mrow></math>. Por ejemplo, como consecuencia de (10.76), <em>la derivada logarítmica del volumen del elemento infinitesimal que se mueve con el fluido es igual a la divergencia del campo de velocidades, llamada velocidad de dilatación</em>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>d</mi><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>d</mi><mi>V</mi></mrow></mfrac><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>d</mi><mi>V</mi><mo>=</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En consecuencia, el volumen del elemento infinitesimal que se mueve con el fluido se conservará cuando el campo de velocidades sea solenoidal: <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Vorticidad"
    },
    {
     "mota": "testua",
     "html": "Según el teorema de Helmholtz (véase la sección B.3.8), su divergencia y su rotacional (junto con condiciones de contorno adecuadas) determinan un campo vectorial. El rotacional del campo de velocidades se llama <strong>vorticidad</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold\">𝛀</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por (10.63), <em>la velocidad angular del elemento infinitesimal que se mueve con el fluido es la mitad de la vorticidad</em>."
    },
    {
     "mota": "irudia",
     "oina": "Curva cerrada y superficie orientada que la limita.",
     "src": "../media/irudiak/e03962e4cf6a25a4.svg",
     "zabalera": 191
    },
    {
     "mota": "testua",
     "html": "será igual al flujo de la vorticidad a través de ella (si el campo de velocidades es regular y no hay agujeros en la superficie <math display=\"inline\"><mi>S</mi></math>): <math display=\"block\"><mrow><msub><mo>∮</mo><mi>C</mi></msub><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msub><mo>∫</mo><mi>S</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><msub><mo>∫</mo><mi>S</mi></msub><mi mathvariant=\"bold\">𝛀</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Derivadas respecto del tiempo"
    },
    {
     "mota": "testua",
     "html": "El campo de aceleraciones será, por supuesto, la aceleración de la partícula que hay en cada instante en cada punto; pero si la aceleración de una partícula es la derivada de su velocidad, ¿cómo hay que derivar el campo de velocidades para hallar la aceleración? Si en el instante <math display=\"inline\"><mi>t</mi></math> la partícula está en el punto <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math>, su velocidad será <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y, como en el intervalo <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> ha recorrido el camino <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi></mrow></math>, en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>+</mo><mi>d</mi><mi>t</mi></mrow></math> su velocidad será <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>+</mo><mi>d</mi><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><msub><mi>v</mi><mi>x</mi></msub><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><msub><mi>v</mi><mi>y</mi></msub><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><msub><mi>v</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi></mrow></math>. (Todos los elementos del término derecho de la última ecuación se calculan en los valores <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, pues alrededor de ellos se ha hecho el desarrollo de Taylor.) La aceleración, por tanto, será <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>+</mo><mi>d</mi><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><msub><mi>v</mi><mi>x</mi></msub><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><msub><mi>v</mi><mi>y</mi></msub><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><msub><mi>v</mi><mi>z</mi></msub></mrow></math> y, valiéndonos de la definición que se usa con los campos escalares y vectoriales,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>f</mi><mo>≡</mo><msub><mi>v</mi><mi>x</mi></msub><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><msub><mi>v</mi><mi>y</mi></msub><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>+</mo><msub><mi>v</mi><mi>z</mi></msub><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "la escribiremos así, de nuevo sin poner explícitamente los argumentos <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por supuesto, habrá que usar una fórmula parecida para calcular la derivada de todos los demás campos (escalares o vectoriales). Por ejemplo, las derivadas de la densidad y de la presión son estas:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>ρ</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>ρ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ρ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>p</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>p</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Observa que lo que se multiplica por el operador nabla es siempre el campo de velocidades.) En algunos textos se dice que la derivada total <math display=\"inline\"><mrow><mi>d</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math> es la <strong>derivada sustancial</strong>, pues la produce el movimiento de la sustancia. La derivada parcial <math display=\"inline\"><mrow><mi>∂</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> es la <strong>derivada local</strong> y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi></mrow></math> es la <strong>derivada convectiva</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Flujo"
    },
    {
     "mota": "testua",
     "html": "Consideremos una superficie <em>fija</em> <math display=\"inline\"><mi>S</mi></math>. La masa que atraviesa <math display=\"inline\"><mi>S</mi></math> en la unidad de tiempo se llama flujo. Empecemos por el flujo a través de un elemento infinitesimal <math display=\"inline\"><mrow><mi>d</mi><mi>S</mi></mrow></math>. Como allí la velocidad del fluido es <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>, la masa que atravesará <math display=\"inline\"><mrow><mi>d</mi><mi>S</mi></mrow></math> en el intervalo <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> es la que hay en el paralelepípedo infinitesimal de la figura: <math display=\"inline\"><mrow><mi>ρ</mi><mi>d</mi><mi>V</mi></mrow></math>. El área de la base del paralelepípedo es <math display=\"inline\"><mrow><mi>d</mi><mi>S</mi></mrow></math> y la altura <math display=\"inline\"><mrow><mi>d</mi><mi>h</mi><mo>=</mo><mi>v</mi><mi>d</mi><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, si el ángulo entre los vectores <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> y <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math> es <math display=\"inline\"><mi>θ</mi></math>. El volumen del paralelepípedo es <math display=\"block\"><mrow><mi>d</mi><mi>V</mi><mo>=</mo><mi>v</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>S</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>d</mi><mi>t</mi></mrow></math> y el flujo infinitesimal <math display=\"block\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mfrac><mrow><mi>ρ</mi><mi>d</mi><mi>V</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Una superficie y un elemento infinitesimal de ella.",
     "src": "../media/irudiak/4d6175fed685e5ab.svg",
     "zabalera": 358
    },
    {
     "mota": "testua",
     "html": "El campo vectorial <math display=\"inline\"><mrow><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> que aparece en la última expresión es la <strong>densidad de corriente</strong>: su dirección y su sentido son los del fluido (es decir, los del campo de velocidades) y su módulo es la masa que atraviesa en la unidad de tiempo la sección normal por unidad de área. De hecho, si el elemento infinitesimal es normal, tenemos <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>∥</mo><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> y el flujo por unidad de área <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Φ</mi><mi>/</mi><mi>d</mi><mi>S</mi><mo>=</mo><mi>ρ</mi><mi>v</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "El flujo total, por (10.172), es este:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><msub><mo>∫</mo><mi>S</mi></msub><mi>d</mi><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><msub><mo>∫</mo><mi>S</mi></msub><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El volumen de materia que atraviesa la superficie en la unidad de tiempo se llama <strong>caudal</strong> y, como se ve, se calcula así:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>Q</mi><mo>=</mo><msub><mo>∫</mo><mi>S</mi></msub><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el caso del agua, a menudo, en lugar de la unidad m<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math> s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, se mide en l s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> y, si podemos tomar la densidad del agua como constante, está claro que el flujo y el caudal son proporcionales en este caso."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación de continuidad"
    },
    {
     "mota": "testua",
     "html": "Consideremos ahora una superficie cerrada en reposo <math display=\"inline\"><mi>S</mi></math> y el volumen <math display=\"inline\"><mi>V</mi></math> que rodea (véase la figura 10.24). Gracias al teorema de Gauss (B.30), el caudal a través de la superficie cerrada <math display=\"inline\"><mi>S</mi></math> (si el campo de velocidades es regular y no hay agujeros) puede calcularse mediante la divergencia del campo de velocidades: <math display=\"block\"><mrow><mi>Q</mi><mo>=</mo><msub><mo>∮</mo><mi>S</mi></msub><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>d</mi><mi>V</mi><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>V</mi></math> es el volumen rodeado por la superficie <math display=\"inline\"><mi>S</mi></math>. Por la misma razón, tenemos el flujo hacia fuera: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><msub><mo>∮</mo><mi>S</mi></msub><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>∇</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>V</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Superficie cerrada y volumen que rodea.",
     "src": "../media/irudiak/cfdfc7455448a836.svg",
     "zabalera": 190
    },
    {
     "mota": "testua",
     "html": "Por otra parte, por el principio de conservación de la masa, el cambio de la masa que hay dentro será igual a la masa que entra, es decir, la derivada respecto del tiempo de la masa interior será igual al flujo hacia dentro —y contraria al flujo hacia fuera—: <math display=\"block\"><mrow><mover><mi>m</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Φ</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><msub><mo>∫</mo><mi>V</mi></msub><mi>ρ</mi><mi>d</mi><mi>V</mi><mo>=</mo><mi>−</mi><msub><mo>∮</mo><mi>S</mi></msub><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>.</mi></mrow></math> Como consecuencia del resultado (10.176), la conservación de la masa se escribe como <math display=\"block\"><mrow><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>∂</mi><mi>ρ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi>∇</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math> o, como esto debe cumplirse para todos los <math display=\"inline\"><mi>V</mi></math>, por (10.161), (10.169) y (B.33), de las cuatro formas equivalentes siguientes:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>ρ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi>∇</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>ρ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ρ</mi><mo>+</mo><mi>ρ</mi><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>ρ</mi></mfrac><mfrac><mrow><mi>d</mi><mi>ρ</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>ρ</mi><mo>+</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>d</mi><mi>V</mi><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En las últimas expresiones vemos que la conservación de la masa puede entenderse también de la siguiente manera equivalente: <em>la masa <math display=\"inline\"><mrow><mi>ρ</mi><mi>d</mi><mi>V</mi></mrow></math> de un elemento infinitesimal <math display=\"inline\"><mrow><mi>d</mi><mi>V</mi></mrow></math> que se mueve con el fluido es constante a lo largo del flujo</em>: <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>. Esta sería la conservación de la masa desde el punto de vista de las «partículas» y la expresión (10.177) la hecha en la descripción de Euler."
    },
    {
     "mota": "testua",
     "html": "Diremos que el flujo es <strong>estacionario</strong> si los campos físicos no dependen explícitamente del tiempo: <math display=\"inline\"><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>∂</mi><mi>ρ</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, etc. En este caso, las líneas de corriente son estacionarias y coinciden con las trayectorias de los elementos infinitesimales, y la ecuación de continuidad se reduce a esta: <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fluidos incompresibles"
    },
    {
     "mota": "testua",
     "html": "Para estudiar los fluidos hay que conocer su ecuación de estado, para saber cómo cambia la densidad <math display=\"inline\"><mi>ρ</mi></math> con la presión (y con la temperatura, por ejemplo). Algo dijimos de eso en la sección 9.7.1, al estudiar la velocidad del sonido en los gases ideales. Con todo, dejando a un lado las ondas, en muchos casos interesantes podemos tomar <math display=\"inline\"><mi>ρ</mi></math> como constante. Eso es lo que ocurre casi siempre con el agua, pero también con el aire (cuando el número de Mach —el cociente entre las velocidades del aire y del sonido— es mucho menor que 1). Cuando se hace esa aproximación de que la densidad es la misma en todos los puntos e instantes, se dice que el fluido es incompresible y entonces la ecuación de continuidad se reduce a la condición (10.162), que expresa la conservación del volumen: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>ρ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>∇</mi><mi>ρ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mi>V</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ktea</mtext></mrow><mi>.</mi></mrow></math> En ese caso el flujo es solenoidal, puede escribirse como <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math> (véase la sección B.3.7), y el caudal total a través de una superficie cerrada es cero y, por (10.175): <math display=\"block\"><mrow><msub><mo>∮</mo><mi>S</mi></msub><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> es decir, no hay ni fuentes ni sumideros."
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Hidrostática",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Por la definición de los fluidos, en estática no hay esfuerzos cortantes y los esfuerzos elásticos serán normales, consecuencia directa de la presión:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>e</mi></msub><mo>=</mo><mi>−</mi><mi>p</mi><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Equilibrio de un prisma en hidrostática.",
     "src": "../media/irudiak/20b525f1ec81cd78.svg",
     "zabalera": 312
    },
    {
     "mota": "testua",
     "html": "Estudiemos el equilibrio del prisma de la figura 10.25: en el límite <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mi>d</mi><mi>z</mi><mo>→</mo><mn>0</mn></mrow></math> las tres presiones se aplican en el mismo punto, pero en direcciones distintas. Para que la fuerza total en la dirección del eje <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> sea cero necesitamos esto: <math display=\"block\"><mrow><msub><mi>p</mi><mi>y</mi></msub><mi>d</mi><mi>x</mi><mi>d</mi><mi>z</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mi>d</mi><mi>x</mi><msqrt><mrow><mi>d</mi><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>d</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>p</mi><mi>d</mi><mi>x</mi><mi>d</mi><mi>z</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mo>=</mo><msub><mi>p</mi><mi>y</mi></msub><mi>.</mi></mrow></math> Del mismo modo, <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><msub><mi>p</mi><mi>y</mi></msub><mo>=</mo><msub><mi>p</mi><mi>z</mi></msub></mrow></math> y, cambiando la orientación del prisma, vemos que en hidrostática la presión, además de ser perpendicular a la superficie en que se aplica, es independiente de la orientación de esta<span class=\"j-oin\">[A veces a este resultado se le llama <strong>ley de Pascal</strong>.]</span>."
    },
    {
     "mota": "testua",
     "html": "Como demostramos en el resultado (10.132), la densidad de fuerza correspondiente a la presión es <math display=\"inline\"><mrow><mi>−</mi><mi>∇</mi><mi>p</mi></mrow></math>. Además, si la única fuerza exterior que sufre el fluido es el peso, la densidad de fuerza correspondiente es <math display=\"inline\"><mrow><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒈</mi></mrow></math>. Por tanto, la condición de equilibrio se escribe como <math display=\"block\"><mrow><mi>−</mi><mi>∇</mi><mi>p</mi><mo>+</mo><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒈</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>p</mi><mo>−</mo><mi>ρ</mi><mi>∇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, siendo <math display=\"inline\"><mi>h</mi></math> la altura medida desde un nivel cero hacia arriba. Además, supongamos que el fluido es incompresible (en el problema 10.14.2 estudiaremos lo que ocurre si no se hace esta hipótesis). Por tanto, se cumplirá <math display=\"block\"><mrow><mi>−</mi><mi>∇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>+</mo><mi>ρ</mi><mi>g</mi><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y, como en estática todas las magnitudes son independientes del tiempo,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>p</mi><mo>+</mo><mi>ρ</mi><mi>g</mi><mi>h</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ktea</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esta es la ley fundamental de la hidrostática, que se cumple en todos los fluidos incompresibles en equilibrio (y no solo en el caso del agua)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Manómetro"
    },
    {
     "mota": "testua",
     "html": "Como aplicación, veamos los fundamentos del manómetro y del barómetro. En la parte izquierda de la figura 10.26 tenemos el esquema del manómetro de tubo abierto, que puede usarse para medir la presión del gas que hay en el recipiente. La presión será parecida en todos los puntos si la densidad del gas y las dimensiones del recipiente no son muy grandes. En el tubo curvo hay un líquido pesado de densidad <math display=\"inline\"><mi>ρ</mi></math> (mercurio, por ejemplo). La presión del gas es la que hay en el extremo 1 del líquido del manómetro: <math display=\"inline\"><mi>p</mi></math>. Como ese líquido está en equilibrio, en el punto 2 el valor de la magnitud (10.190) será el mismo, pero allí tenemos la presión atmosférica: <math display=\"block\"><mrow><mi>p</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mi>ρ</mi><mi>g</mi><mi>h</mi><mi>.</mi></mrow></math> Por tanto, la <strong>presión manométrica</strong> del gas del recipiente, es decir, la que se mide eligiendo la presión atmosférica como nivel cero, es proporcional a la altura <math display=\"inline\"><mi>h</mi></math>: <math display=\"block\"><mrow><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mi>ρ</mi><mi>g</mi><mi>h</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Manómetro y barómetro.",
     "src": "../media/irudiak/39a5544f3ab00e3d.svg",
     "zabalera": 364
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Barómetro"
    },
    {
     "mota": "testua",
     "html": "Torricelli propuso el esquema de los primeros barómetros, que se muestra en la parte derecha de la figura 10.26: una probeta llena de mercurio se introduce en mercurio. En la superficie del recipiente la presión es la atmosférica: <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math>. Por otra parte, dentro de la probeta, sobre el mercurio, se ha hecho el vacío y la presión es cero. Así se escribe, pues, (10.190) en los puntos 1 y 2: <math display=\"block\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mi>ρ</mi><mi>g</mi><mi>h</mi><mi>.</mi></mrow></math> Esta es la razón por la que hace tiempo se eligió el milímetro de mercurio como unidad de presión: si el líquido del manómetro es, como a menudo, mercurio, cuando su altura es <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>1</mn></mrow></math> mm la presión manométrica es 1 mm Hg. En honor de Torricelli esa unidad se llama también <strong>torr</strong>: 1 torr <math display=\"inline\"><mrow><mo>=</mo><mn>1</mn></mrow></math> mm Hg <math display=\"inline\"><mrow><mo>=</mo><mn>133.322</mn></mrow></math> Pa. En otros casos, para medir la presión atmosférica, se usa la <strong>atmósfera (estándar)</strong>, que es un valor medio: 1 atm <math display=\"inline\"><mrow><mo>=</mo><mn>760</mn></mrow></math> torr <math display=\"inline\"><mrow><mo>=</mo><mn>101</mn><mspace width=\"0.167em\"></mspace><mn>325</mn></mrow></math> Pa. Por otra parte, también se usa la unidad llamada <strong>bar</strong> (o su submúltiplo el milibar): 1 bar <math display=\"inline\"><mrow><mo>=</mo><msup><mn>10</mn><mn>5</mn></msup></mrow></math> Pa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Principio de Arquímedes"
    },
    {
     "mota": "testua",
     "html": "Consideremos el cuerpo de la figura 10.27: está en equilibrio en un fluido (siendo más pesado que el fluido, porque está colgado de un punto mediante una cuerda o similar). Debido a la presión, la fuerza que el fluido ejerce sobre la superficie <math display=\"inline\"><mi>S</mi></math> del cuerpo es esta: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>e</mi></msub><mo>=</mo><mi>−</mi><msub><mo>∮</mo><mi>S</mi></msub><mi>p</mi><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Principio de Arquímedes.",
     "src": "../media/irudiak/720cd8c574e7435a.svg",
     "zabalera": 292
    },
    {
     "mota": "testua",
     "html": "Ahora, si mentalmente sustituimos el cuerpo por el líquido, está claro que la presión no cambiará en la superficie ni en el exterior; pero ahora, usando la densidad de fuerza (10.132) y (10.188), podemos calcular la integral (10.194) en el volumen <math display=\"inline\"><mi>V</mi></math> rodeado por la superficie <math display=\"inline\"><mi>S</mi></math>, mediante la densidad del fluido: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>e</mi></msub><mo>=</mo><mi>−</mi><msub><mo>∮</mo><mi>S</mi></msub><mi>p</mi><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>∇</mi><mi>p</mi><mi>d</mi><mi>V</mi><mo>=</mo><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒈</mi><mi>d</mi><mi>V</mi><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>ρ</mi><mi>d</mi><mi>V</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi mathvariant=\"bold-italic\">𝒈</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>Un cuerpo sumergido sufre un empuje hidrostático contrario al peso del agua que desaloja</em>"
    },
    {
     "mota": "testua",
     "html": ". Aunque en este enunciado clásico se cita el caso del agua, está claro que se extiende a todos los fluidos <em>mutatis mutandi</em>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Puede aplicarse el principio de Arquímedes si el fluido es compresible o si el cuerpo entero no está bajo la superficie del agua?"
      }
     ]
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Fluidos ideales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Por definición, la fuerza que un elemento de un fluido ideal ejerce sobre el contiguo, en el límite entre ambos, es perpendicular a dicho límite, es decir, mera consecuencia de la presión:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>e</mi></msub><mo>=</mo><mi>−</mi><mi>p</mi><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hay que subrayar que, aunque esta condición se cumple en equilibrio en todos los fluidos, en dinámica solo se cumple en los fluidos ideales (y nunca en los fluidos reales). Sabemos que el tensor de esfuerzos correspondiente a la presión es (10.106) y, como demostramos en el resultado (10.132), la densidad de fuerza <math display=\"inline\"><mrow><mi>−</mi><mi>∇</mi><mi>p</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Si además de esa fuerza interna hay fuerzas exteriores, expresadas mediante la densidad <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub></math>, la segunda ley de Newton se escribe así en el caso del elemento infinitesimal <math display=\"inline\"><mrow><mi>d</mi><mi>V</mi></mrow></math> que se mueve con el fluido: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>∇</mi><mi>p</mi><mi>d</mi><mi>V</mi><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mi>d</mi><mi>V</mi><mi>.</mi></mrow></math> Por tanto, la ecuación del movimiento del fluido ideal se escribe de las siguientes formas equivalentes:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ρ</mi><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>∇</mi><mi>p</mi><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>ρ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>−</mi><mi>∇</mi><mi>p</mi><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "A esto se le llama <strong>ecuación de Euler</strong>. A menudo la fuerza exterior será el peso y <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub></math> la densidad de fuerza de la expresión (10.126). Observa que esta ecuación de evolución, como ocurre en los medios continuos, es una ecuación en derivadas parciales. Por desgracia, debido al término <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math>, la ecuación no es lineal: todo puede ser más difícil y, en general, no se cumplirá el principio de superposición (pero sí en casos particulares, como veremos en la sección 10.9.1)."
    },
    {
     "mota": "testua",
     "html": "Por otra parte, hay que reconocer que la aproximación de los fluidos ideales no es muy buena: en todos los fluidos aparecen esfuerzos cortantes que el tensor de esfuerzos (10.106) no tiene. Por eso John von Neumann decía que en esta aproximación se estudiaba el «agua seca»<span class=\"j-oin\">[Pero, según los experimentos realizados en los últimos años, parece que el plasma de quarks y gluones se mueve como un fluido (relativista) ideal.]</span>. Aun así, al menos desde el punto de vista cualitativo, puede ser útil para hacer un primer estudio."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Evolución de la vorticidad"
    },
    {
     "mota": "testua",
     "html": "Usando la definición (10.163) de la vorticidad y (B.49), tenemos <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>∇</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math> y la ecuación de Euler se escribe así: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>∇</mi><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mi>ρ</mi></mfrac><mi>∇</mi><mi>p</mi><mo>+</mo><mfrac><mn>1</mn><mi>ρ</mi></mfrac><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mi>.</mi></mrow></math> Supongamos que el fluido es incompresible: por (B.22) tenemos <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>ρ</mi></mfrac><mi>∇</mi><mi>p</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mi>ρ</mi></mfrac><mi>∇</mi><mo>×</mo><mi>∇</mi><mi>p</mi><mo>=</mo><mn>0</mn></mrow></math>. Además, admitiremos que se cumple <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>ρ</mi></mfrac><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> (por ejemplo, porque <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mo>=</mo><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒈</mi></mrow></math>). Con estas hipótesis y usando de nuevo (B.22), el rotacional de la ecuación (10.201) y la ecuación (10.162), que expresa la conservación del volumen, quedan así: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold\">𝛀</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> En estas ecuaciones han desaparecido la densidad <math display=\"inline\"><mi>ρ</mi></math>, la presión <math display=\"inline\"><mi>p</mi></math> y la fuerza exterior: solo queda el campo de velocidades. Estas dos ecuaciones bastan, con condiciones de contorno adecuadas, para calcular en principio el campo de velocidades."
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, si la vorticidad es siempre y en todas partes cero, <math display=\"inline\"><mrow><mi mathvariant=\"bold\">𝛀</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, se cumple la ecuación (10.202) y las ecuaciones que hay que resolver junto con las condiciones de contorno son las siguientes: <math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Pero si en lugar de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> escribimos el campo eléctrico (magnético), estas ecuaciones son las de la electrostática (magnetostática), que se cumplen en estado estacionario fuera de las cargas (corrientes). En consecuencia, como en electrostática, el campo de velocidades puede obtenerse en este caso de un potencial <math display=\"inline\"><mi>φ</mi></math> que cumple la ecuación de Laplace<span class=\"j-oin\">[De hecho, Euler y Lagrange usaron esta ecuación para estudiar el movimiento de los fluidos, antes de que Laplace la escribiera en el caso del campo gravitatorio.]</span>, <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>φ</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Consideremos, por ejemplo, que metemos en el fluido un cilindro infinito. Supongamos que el eje del cilindro es el eje cartesiano <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math>. Si el campo de velocidades es homogéneo y uniforme a distancia infinita, en la dirección <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math>, esperamos algo parecido a lo que hay a la izquierda de la figura 10.28. Pero una solución así se obtiene sumando dos soluciones conocidas de la electrostática (el campo eléctrico uniforme y el de un dipolo). De hecho, como demostraremos en el problema 10.65, el campo <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi>∇</mi><mi>φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>φ</mi><mo>=</mo><mi>−</mi><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ρ</mi><mo>+</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><mi>ρ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> cumple las ecuaciones (10.204)–(10.205) y la condición de contorno <math display=\"block\"><mrow><msub><mi>v</mi><mi>ρ</mi></msub><msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo></mrow><mrow><mi>ρ</mi><mo>=</mo><mi>a</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> en las coordenadas cilíndricas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> alrededor del eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Si el fluido está inicialmente en reposo y el cilindro gira alrededor de su eje, debido a la viscosidad que hemos despreciado hasta ahora, en estado estacionario el fluido girará alrededor del cilindro, como se muestra en el centro de la figura 10.28. Pero una solución así es muy conocida en magnetostática, pues la produce una corriente recta infinita: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mi>β</mi><mrow><mn>2</mn><mi>π</mi><mi>ρ</mi></mrow></mfrac><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Un cilindro largo en un flujo incompresible irrotacional.",
     "src": "../media/irudiak/c4b885830992280d.svg",
     "zabalera": 488
    },
    {
     "mota": "testua",
     "html": "Sabemos, por la ley de Ampère, que la circulación del campo magnético es igual a la intensidad total que rodea la línea de integración; por tanto, aunque la ecuación (10.204) se cumpla fuera del cilindro, la circulación alrededor del cilindro es esta: <math display=\"block\"><mrow><mo>∮</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>−</mi><mi>β</mi><mi>.</mi></mrow></math> Como las ecuaciones (10.204)–(10.205) son lineales, la suma de soluciones es solución: en el caso de un cilindro giratorio metido en un flujo uniforme, la solución puede ser la de la derecha de la figura 10.28, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub></mrow></math>. Además, demostraremos en el problema 10.65 que el flujo no uniforme actual ejerce una fuerza <math display=\"block\"><mrow><mfrac><mi mathvariant=\"bold-italic\">𝑭</mi><mi>L</mi></mfrac><mo>=</mo><mi>α</mi><mi>β</mi><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> por unidad de longitud del cilindro. A esto se le llama <strong>efecto Magnus</strong>, y ocurre también con otras geometrías, claro."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Teorema de Bernoulli"
    },
    {
     "mota": "testua",
     "html": "Consideremos el movimiento de un fluido que cumple las siguientes condiciones:"
    },
    {
     "mota": "sarea",
     "zutabeak": "auto minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "El fluido es ideal:"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>ρ</mi><mi>d</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>p</mi><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mi>.</mi></mrow></math>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "El fluido es incompresible:"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>ρ</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Se mueve bajo la acción de la gravedad:"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mo>=</mo><mi>−</mi><mi>ρ</mi><mi>∇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "El flujo es estacionario:"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mi>∂</mi><mi>p</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para hallar la ecuación de evolución de la energía, si multiplicamos la ecuación de Euler (10.198) por la velocidad, se obtiene <math display=\"block\"><mrow><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>p</mi><mo>−</mo><mi>ρ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y, si usamos (10.168) y (10.170), <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mi>ρ</mi><mi>g</mi><mi>h</mi><mo>+</mo><mi>p</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Por tanto, <em>a lo largo de una línea de corriente</em>  (recuerda que, como el flujo es estacionario, las líneas de corriente son las trayectorias de las partículas)  <em>esta magnitud es constante</em><span class=\"j-oin\">[Daniel Bernoulli demostró este teorema en el libro <em>Hydrodynamica</em>, que terminó en 1734.]</span>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mi>ρ</mi><mi>g</mi><mi>h</mi><mo>+</mo><mi>p</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ktea</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El primer término es la densidad de energía cinética, el segundo el de la energía potencial gravitatoria y el término correspondiente al trabajo hecho por la presión. Este teorema de Bernoulli expresa la conservación de la energía mecánica y, como ocurre con todas las constantes del movimiento, el valor de la magnitud (10.213) es constante a lo largo de cada línea de corriente, pero puede cambiar de una línea a otra."
    },
    {
     "mota": "testua",
     "html": "Sin embargo, si el flujo es irrotacional, tenemos <math display=\"inline\"><mrow><mi mathvariant=\"bold\">𝛀</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn></mrow></math> y la ecuación de Euler (10.201) queda así: <math display=\"block\"><mrow><mi>∇</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mi>ρ</mi><mi>g</mi><mi>h</mi><mo>+</mo><mi>p</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Por tanto, en este caso el valor de (10.213) es el mismo en todos los instantes y puntos. Como en el teorema de Bernoulli el último término es la presión, a veces se dice que la magnitud <math display=\"inline\"><mrow><mi>p</mi><mo>+</mo><mi>ρ</mi><mi>g</mi><mi>h</mi></mrow></math> es la <strong>presión estática</strong> (pues es la magnitud (10.190) de la hidrostática) y la constante del movimiento <math display=\"inline\"><mrow><mi>p</mi><mo>+</mo><mi>ρ</mi><mi>g</mi><mi>h</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math> la <strong>presión dinámica</strong>."
    },
    {
     "mota": "testua",
     "html": "Teorema de Torricelli"
    },
    {
     "mota": "testua",
     "html": "Como aplicación, estudiemos el vaciado de la figura 10.29 a través de un orificio estrecho. Si el orificio es muy pequeño (<math display=\"inline\"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo>≪</mo><msub><mi>S</mi><mn>1</mn></msub></mrow></math>), la velocidad de la superficie será muy pequeña (<math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>≪</mo><mi>v</mi><mo>≡</mo><msub><mi>v</mi><mn>2</mn></msub></mrow></math>) y, como en los puntos 1 y 2 la presión es igual a la atmosférica, la presión dinámica en esos dos puntos se escribe así, midiendo la altura desde el punto 2: <math display=\"block\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mi>ρ</mi><mi>g</mi><mi>h</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msup><mi>v</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> En consecuencia, la velocidad del fluido en el orificio es la de una partícula que ha caído desde la superficie hasta allí<span class=\"j-oin\">[En la práctica, como los líquidos no son ideales, el resultado se escribe como <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>φ</mi><msqrt><mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow></msqrt></mrow></math>. En el caso del agua, el coeficiente de rozamiento es <math display=\"inline\"><mrow><mi>φ</mi><mo>≈</mo><mn>0.97</mn></mrow></math>.]</span>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El resultado no es tan sorprendente; al fin y al cabo, en los dos casos la energía cinética ha salido de la energía potencial gravitatoria. Hay otra solución en estos dos problemas, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>−</mi><msqrt><mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow></msqrt></mrow></math>: se obtiene esto si la partícula se lanza hacia arriba hasta la misma altura o si el agua entra por el orificio a presión atmosférica con velocidad <math display=\"inline\"><mi>v</mi></math>."
    },
    {
     "mota": "irudia",
     "oina": "Vaciado de un recipiente.",
     "src": "../media/irudiak/6617c13bc224b297.svg",
     "zabalera": 411
    },
    {
     "mota": "testua",
     "html": "No hay que pensar que el caudal que se mide en el orificio es <math display=\"inline\"><mrow><mi>v</mi><msub><mi>S</mi><mn>2</mn></msub></mrow></math>. De hecho, alrededor del orificio las líneas de corriente son convergentes y el chorro se contrae: la sección transversal efectiva es menor (y además siempre se pierde un poco de energía). El caudal, por tanto, será <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>C</mi><mi>v</mi><msub><mi>S</mi><mn>2</mn></msub></mrow></math>, donde la constante <math display=\"inline\"><mi>C</mi></math> es el <strong>coeficiente de caudal</strong> del orificio. Por ejemplo, en el caso de un orificio circular delgado del tipo de la figura tenemos <math display=\"inline\"><mrow><mi>C</mi><mo>≈</mo><mn>0.62</mn></mrow></math> y si el borde, en lugar de ser afilado, es redondeado, <math display=\"inline\"><mrow><mi>C</mi><mo>≈</mo><mn>0.97</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Efecto Venturi"
    },
    {
     "mota": "testua",
     "html": "Consideremos ahora un tubo horizontal de sección transversal variable. Si admitimos que la altura <math display=\"inline\"><mi>h</mi></math> es la misma en todos los puntos (y eso es lo que ocurre exactamente en la línea de corriente central y de forma aproximada en las demás), el teorema de Bernoulli se escribe así en los puntos 1 y 2: <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>p</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> Como el fluido es incompresible, el caudal será igual en los puntos 1 y 2 y (10.185) se escribe así: <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><msub><mi>v</mi><mn>2</mn></msub><msub><mi>S</mi><mn>2</mn></msub></mrow></math>. Pero, como <math display=\"inline\"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>S</mi><mn>1</mn></msub></mrow></math>, tenemos <math display=\"inline\"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>&gt;</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></math> y, por (10.217), <math display=\"inline\"><mrow><msub><mi>p</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>p</mi><mn>1</mn></msub></mrow></math>: <em>la presión es menor (y la velocidad mayor) en los puntos en que el tubo es más estrecho</em>."
    },
    {
     "mota": "irudia",
     "oina": "Tubo horizontal.",
     "src": "../media/irudiak/ebd14e6705f6b1cb.svg",
     "zabalera": 258
    },
    {
     "mota": "testua",
     "html": "Este efecto explica por qué se rompen a menudo las tuberías de agua gruesas. Este efecto se usa para introducir la gasolina en los carburadores de los motores, para ayudar a salir el humo por las chimeneas y para mezclar con el aire gotitas diminutas de perfume en los pulverizadores. Además, como veremos en los problemas, podemos valernos de este fenómeno para medir el caudal en los venturímetros, y en el problema 10.58 lo usaremos para validar la sustentación aerodinámica de las alas de los aviones. Pero este último problema y muchos otros que aparecen a menudo en la práctica no se explican tan fácilmente de forma directa. Aun así, para entender las cosas de algún modo, puede ser útil otra explicación cualitativa del efecto Venturi. Como tenemos <math display=\"inline\"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>&gt;</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></math>, entre los puntos 1 y 2 la partícula que se mueve por la línea de corriente central tiene que sufrir (por ejemplo) una aceleración hacia la derecha y esa aceleración solo puede producirla un gradiente de presión: la presión es mayor en el punto 1. En general, los gradientes de presión que producen los cambios del módulo o de la dirección del campo de velocidades (como la curvatura de las líneas de corriente) pueden usarse para entender algunos fenómenos, aunque no se apliquen los resultados de Bernoulli o de Venturi."
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Fluidos viscosos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aunque en equilibrio no haya nada así, en dinámica siempre aparecen esfuerzos cortantes en los fluidos reales. Consideremos el experimento de la figura 10.31. Entre dos planos infinitos tenemos un fluido. El plano de abajo está en reposo y el de arriba se mueve con velocidad constante en la dirección indicada. La fuerza entre ese plano y las capas de fluido contiguas tiene dos componentes: la normal, que es consecuencia de la presión, y la tangente. Debido a esta última, el plano arrastra al fluido: una capa delgada que toca el plano está en reposo relativo y se mueve con él; eso es lo que se ve en los experimentos. Por la misma razón, la capa de abajo está en reposo y las intermedias se mueven con velocidades intermedias, pues cada una ejerce sobre la siguiente una fuerza de rozamiento (es decir, una fuerza tangente). Este fenómeno, que ocurre en todos los fluidos, se llama <strong>viscosidad</strong>."
    },
    {
     "mota": "irudia",
     "oina": "Un fluido entre dos planos infinitos con velocidad relativa.",
     "src": "../media/irudiak/7cf96f9413dba2d2.svg",
     "zabalera": 247
    },
    {
     "mota": "testua",
     "html": "Además, según la <strong>ley de viscosidad de Newton</strong>, el esfuerzo que hay que aplicar para mantener la velocidad relativa entre los planos es proporcional a la diferencia de velocidades e inversamente proporcional a la distancia entre los planos: <math display=\"block\"><mrow><mfrac><mi>F</mi><mi>A</mi></mfrac><mo>=</mo><mi>η</mi><mfrac><mi>v</mi><mi>d</mi></mfrac><mi>.</mi></mrow></math> La constante de proporcionalidad se llama <strong>coeficiente de viscosidad dinámica</strong>  (o <strong>coeficiente de viscosidad</strong>) y la unidad correspondiente en el sistema SI es 1 Pa s. En la tabla A.10 se recogen los coeficientes de viscosidad de algunos fluidos."
    },
    {
     "mota": "testua",
     "html": "Si en la dirección perpendicular al movimiento elegimos la coordenada <math display=\"inline\"><mi>x</mi></math>, el esfuerzo cortante de la viscosidad producido por las diferencias de velocidades de los dos planos paralelos próximos de la figura se expresa así: <math display=\"block\"><mrow><mfrac><mi>F</mi><mi>A</mi></mfrac><mo>=</mo><mi>η</mi><mfrac><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math> Por tanto, en el límite <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>→</mo><mn>0</mn></mrow></math>, tenemos esto: el esfuerzo cortante, debido a la viscosidad, que un elemento situado a distancia <math display=\"inline\"><mi>x</mi></math> en la dirección del movimiento ejerce sobre el contiguo:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mi>F</mi><mi>A</mi></mfrac><mo>=</mo><mi>η</mi><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ley de Poiseuille"
    },
    {
     "mota": "testua",
     "html": "Para calcular el caudal en la sección transversal de un tubo, hemos usado antes la fórmula <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>v</mi><mi>S</mi></mrow></math>, como si la velocidad fuera igual en todos los puntos de la sección. Pero sabemos que eso es imposible, pues en la pared la velocidad del fluido es nula."
    },
    {
     "mota": "testua",
     "html": "Consideremos el tubo horizontal largo de la figura 10.32. Si el flujo es estacionario, la distribución de velocidades será independiente del tiempo y la fuerza total aplicada en el cilindro de radio <math display=\"inline\"><mi>r</mi></math> será nula. Para calcular la fuerza de viscosidad ejercida por el fluido lateral, en lugar de la coordenada <math display=\"inline\"><mi>x</mi></math> habrá que usar <math display=\"inline\"><mi>r</mi></math> en la ley (10.220). En consecuencia, tenemos el equilibrio de fuerzas (teniendo en cuenta que <math display=\"inline\"><mrow><mi>d</mi><mi>v</mi><mi>/</mi><mi>d</mi><mi>r</mi><mo>&lt;</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>−</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>η</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>r</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>r</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Velocidad del fluido en un tubo horizontal.",
     "src": "../media/irudiak/d62579dd455a7480.svg",
     "zabalera": 477
    },
    {
     "mota": "testua",
     "html": "De aquí se obtiene fácilmente la distribución de velocidades mediante una integral: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>r</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>−</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>2</mn><mi>η</mi><mi>L</mi></mrow></mfrac><mi>r</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>−</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>η</mi><mi>L</mi></mrow></mfrac><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math> Para calcular la constante de integración, si se usa la condición de contorno <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> que expresa que el fluido está en reposo en la pared, esta es la velocidad a la distancia <math display=\"inline\"><mi>r</mi></math> del centro: <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>−</mo><msub><mi>p</mi><mn>2</mn></msub></mrow><mrow><mn>4</mn><mi>η</mi><mi>L</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Por otra parte, teniendo en cuenta el volumen de fluido que pasa por unidad de tiempo por el anillo infinitesimal entre los radios <math display=\"inline\"><mi>r</mi></math> y <math display=\"inline\"><mrow><mi>r</mi><mo>+</mo><mi>d</mi><mi>r</mi></mrow></math>, se calcula fácilmente el caudal: <math display=\"block\"><mrow><mi>Q</mi><mo>=</mo><msub><mo>∫</mo><msub><mi>S</mi><mo>⟂</mo></msub></msub><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mfrac><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>−</mo><msub><mi>p</mi><mn>2</mn></msub></mrow><mrow><mn>4</mn><mi>η</mi><mi>L</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>R</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn><mi>π</mi><mi>r</mi><mi>d</mi><mi>r</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>Q</mi><mo>=</mo><mfrac><mrow><mi>π</mi><msup><mi>R</mi><mn>4</mn></msup></mrow><mrow><mn>8</mn><mi>η</mi></mrow></mfrac><mfrac><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>−</mo><msub><mi>p</mi><mn>2</mn></msub></mrow><mi>L</mi></mfrac><mi>.</mi></mrow></math> En la última expresión, el último término mide cómo disminuye la presión por unidad de longitud:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow></mfrac><mo>≡</mo><mfrac><mrow><msub><mi>p</mi><mn>2</mn></msub><mo>−</mo><msub><mi>p</mi><mn>1</mn></msub></mrow><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>8</mn><mi>η</mi><mi>Q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>π</mi><msup><mi>R</mi><mn>4</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Debido a las pérdidas causadas por la viscosidad, la presión va disminuyendo a lo largo del tubo. Hay que destacar la dependencia de la cuarta potencia del radio: la pérdida de presión será mucho menor en tubos anchos que en estrechos. Esa dependencia aclara muchos fenómenos, aunque la ley no se cumpla del todo. Al reducirse el diámetro de la arteria coronaria por la arteriosclerosis disminuye mucho el flujo de sangre, y un problema parecido ocurre en la uretra al agrandarse la próstata. También se usa para controlar la temperatura del cuerpo, mediante la vasoconstricción y la vasodilatación."
    },
    {
     "mota": "testua",
     "html": "Usando (10.227), el campo de velocidades (10.224) queda así:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>Q</mi></mrow><mrow><mi>π</mi><msup><mi>R</mi><mn>4</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Vemos, pues, que la distribución de velocidades es parabólica, como se muestra en la figura 10.32 (a) (si hay turbulencia, de la que se habla en la sección 10.11, la figura (b) describe mejor cualitativamente lo que ocurre)."
    },
    {
     "mota": "irudia",
     "oina": "Vaciado de un fluido (a) ideal (b) viscoso por un tubo horizontal.",
     "src": "../media/irudiak/6f233be490a32297.svg",
     "zabalera": 360
    },
    {
     "mota": "testua",
     "html": "En la figura 10.33 se muestran las consecuencias de esa disminución de la presión en un tubo horizontal delgado. En el caso del fluido ideal que aparece a la izquierda, la presión disminuye como consecuencia de la aceleración, según el efecto Venturi; pero en el caso del fluido viscoso de la derecha, hay además la pérdida (10.227), que es menor en tubos más delgados. En el caso del fluido ideal, en el último manómetro casi no hay presión manométrica, pues allí la presión es parecida a la atmosférica. En el caso del fluido viscoso la presión allí será mayor, pues todavía tiene que recorrer un camino hasta la boca del tubo."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación de Navier y Stokes"
    },
    {
     "mota": "testua",
     "html": "En general, el tensor de esfuerzos de un fluido viscoso, además de la contribución (10.106) correspondiente a la presión, tiene otra componente con la misma estructura que el tensor (10.110) que vimos en el caso de un sólido elástico homogéneo e isótropo: <math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mi>−</mi><mi>p</mi><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>+</mo><msubsup><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>′</mo></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>′</mo></msubsup><mo>=</mo><mi>η</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>v</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>v</mi><mi>j</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ζ</mi><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>η</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>v</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>k</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>.</mi></mrow></math> En el caso de algunos fluidos hace falta una segunda constante: <math display=\"inline\"><mi>ζ</mi></math>, llamada <strong>segundo coeficiente de viscosidad</strong>  (o <strong>coeficiente de viscosidad volumétrica</strong>). Este coeficiente no aparece en los fluidos incompresibles, pues multiplica la velocidad de dilatación <math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math>. En un fluido general, por tanto, además de la densidad de fuerza <math display=\"inline\"><mrow><mi>−</mi><mi>∇</mi><mi>p</mi></mrow></math> correspondiente a la presión, aparecerá la densidad de la fuerza de viscosidad: <math display=\"block\"><mrow><msub><mi>f</mi><mrow><mi>B</mi><mi>i</mi></mrow></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msubsup><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>′</mo></msubsup></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mi>η</mi><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>v</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msubsup><mi>x</mi><mi>j</mi><mn>2</mn></msubsup></mrow></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>η</mi><mo>+</mo><mi>ζ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><mi>∂</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>B</mi></msub><mo>=</mo><mi>η</mi><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>η</mi><mo>+</mo><mi>ζ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>∇</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Si añadimos esta última densidad de fuerza al segundo término de la ecuación de Euler (10.199), obtenemos la ecuación del movimiento de los fluidos viscosos, llamada ecuación de Navier y Stokes:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ρ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>−</mi><mi>∇</mi><mi>p</mi><mo>+</mo><mi>η</mi><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>η</mi><mo>+</mo><mi>ζ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>∇</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Coeficiente de viscosidad cinemática"
    },
    {
     "mota": "testua",
     "html": "Si lo definimos como <math display=\"block\"><mrow><mi>ν</mi><mo>≡</mo><mfrac><mi>η</mi><mi>ρ</mi></mfrac></mrow></math>, la ecuación de Navier y Stokes se reduce a la forma siguiente en el caso de los fluidos incompresibles:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mi>ρ</mi></mfrac><mi>∇</mi><mi>p</mi><mo>+</mo><mi>ν</mi><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi><mo>+</mo><mfrac><mn>1</mn><mi>ρ</mi></mfrac><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La ecuación de Navier y Stokes no es lineal —el término <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> es cuadrático— y en pocos casos puede resolverse explícitamente. En el problema 10.14.4 estudiaremos uno."
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Número de Reynolds",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Supongamos que el fluido es incompresible (<math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn></mrow></math>) y que la densidad de la fuerza exterior es conservativa (<math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mo>=</mo><mn>0</mn></mrow></math>). Así, por el resultado (10.200), <math display=\"inline\"><mrow><mi mathvariant=\"bold\">𝛀</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> la ecuación de evolución de la vorticidad es el rotacional de la ecuación de Navier y Stokes (10.235): <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold\">𝛀</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>η</mi><mi>ρ</mi></mfrac><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold\">𝛀</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> En la ecuación (10.236) aparece un nuevo término dependiente de la viscosidad que no estaba en (10.202). En consecuencia, las ecuaciones de la vorticidad cambian. Por ejemplo, si en (10.236) no estuviera el término <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, sería una ecuación de difusión (que describe la propagación del calor en un conductor): esperamos, pues, que si la vorticidad se produce en algún sitio, pueda propagarse a otros puntos."
    },
    {
     "mota": "testua",
     "html": "Supongamos, como a la izquierda de la figura 10.28, que metemos un cilindro infinito en un fluido que a gran distancia se mueve con velocidad constante <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>0</mn></msub><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math>. Para hallar el campo de velocidades, las ecuaciones (10.236)–(10.237) deben resolverse junto con las siguientes condiciones de contorno: <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>ρ</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo></mrow><mrow><mi>ρ</mi><mo>=</mo><mi>a</mi></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Para estudiar el problema, elegiremos como unidad de longitud el diámetro <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> y como unidad de tiempo <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi><mi>/</mi><msub><mi>v</mi><mn>0</mn></msub></mrow></math>, es decir, se usarán estas variables adimensionales: <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>=</mo><mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mfrac><msub><mi>v</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mi>t</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que, como consecuencia de la relación entre las variables iniciales y las adimensionales, tenemos esto: <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒗</mi><mo>′</mo></msup><mo>=</mo><mfrac><mi mathvariant=\"bold-italic\">𝒗</mi><msub><mi>v</mi><mn>0</mn></msub></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>∇</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>a</mi><mi>∇</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mi>∂</mi><mrow><mi>∂</mi><msup><mi>t</mi><mo>′</mo></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>a</mi></mrow><msub><mi>v</mi><mn>0</mn></msub></mfrac><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>a</mi></mrow><msub><mi>v</mi><mn>0</mn></msub></mfrac><mi mathvariant=\"bold\">𝛀</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mo>′</mo></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>a</mi><mn>2</mn></msup></mrow><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold\">𝛀</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>∇</mi><mo>′</mo></msup><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒗</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>a</mi><mn>2</mn></msup></mrow><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>∇</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>8</mn><msup><mi>a</mi><mn>3</mn></msup></mrow><msub><mi>v</mi><mn>0</mn></msub></mfrac><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold\">𝛀</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mn>4</mn><msup><mi>a</mi><mn>2</mn></msup></mrow><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold\">𝛀</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mi>η</mi><mi>ρ</mi></mfrac><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold\">𝛀</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mi>∂</mi><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mo>′</mo></msup></mrow></mfrac><mo>+</mo><msup><mi>∇</mi><mo>′</mo></msup><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒗</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mi mathvariant=\"script\">ℛ</mi></mfrac><msup><mi>∇</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"script\">ℛ</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>ρ</mi><mi>a</mi><msub><mi>v</mi><mn>0</mn></msub></mrow><mi>η</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La magnitud adimensional que hemos definido en la última ecuación"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">ℛ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>ρ</mi><mi>a</mi><msub><mi>v</mi><mn>0</mn></msub></mrow><mi>η</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>a</mi><msub><mi>v</mi><mn>0</mn></msub></mrow><mi>ν</mi></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "es el <strong>número de Reynolds</strong> del problema y hemos demostrado que el problema que hay que resolver, quitando las primas, se escribe así: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold\">𝛀</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mi mathvariant=\"script\">ℛ</mi></mfrac><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold\">𝛀</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>ρ</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo></mrow><mrow><mi>ρ</mi><mo>=</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Pero aquí el único parámetro que ha quedado es <math display=\"inline\"><mi mathvariant=\"script\">ℛ</mi></math>. Esto quiere decir que en dos problemas, aunque <math display=\"inline\"><mi>a</mi></math>, <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>, <math display=\"inline\"><mi>ρ</mi></math> o <math display=\"inline\"><mi>η</mi></math> sean distintos, si el número de Reynolds es el mismo, los dos serán <strong>semejantes</strong>, es decir, equivalentes desde el punto de vista matemático: bastará con estudiar uno para entender el otro. Esta <strong>ley de semejanza</strong> tiene gran importancia práctica. Por ejemplo, para diseñar aviones basta con estudiar un modelo a pequeña escala en un túnel de viento. (En realidad, para mantener la hipótesis de que el aire es incompresible, si el número de Mach no es pequeño, debe ser igual en los dos problemas para que estos sean semejantes.)"
    },
    {
     "mota": "testua",
     "html": "El problema matemático que hay que resolver es muy difícil y hay que resolverlo con aproximaciones o métodos numéricos. Cuando el número de Reynolds es muy pequeño (<math display=\"inline\"><mrow><mi mathvariant=\"script\">ℛ</mi><mo>≲</mo><mn>1</mn></mrow></math>), la solución es parecida a la que vimos a la izquierda de la figura 10.28. Al aumentar <math display=\"inline\"><mi mathvariant=\"script\">ℛ</mi></math>, detrás del cilindro se forman torbellinos: la circulación no es, pues, cero; pero el movimiento es muy regular y estable. Con <math display=\"inline\"><mi mathvariant=\"script\">ℛ</mi></math> mayores los torbellinos se sueltan y en su lugar se forman otros continuamente; el movimiento es regular pero no estable, sino periódico. Por último, empieza el movimiento irregular, caótico: se produce la <strong>turbulencia</strong>. las derivadas de segundo orden que multiplica pueden ser muy grandes: la aproximación de los fluidos ideales olvida una característica fundamental de los fluidos (aun así, es útil cuando el flujo es laminar si no hay vorticidad)."
    },
    {
     "mota": "testua",
     "html": "En muchos experimentos se ha visto que, en el caso de un fluido que se mueve en un tubo recto horizontal, cuando el número de Reynolds<span class=\"j-oin\">[En ese caso, en la definición (10.251) hay que usar el diámetro del tubo en lugar de <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> y, en lugar de <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>, el valor medio de la velocidad del fluido.]</span> es menor que 2000 el flujo suele ser regular, <strong>laminar</strong>, pero cuando es mayor que 4000 casi siempre ha aparecido turbulencia."
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Leyes de Stokes y de Newton",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Debido a la viscosidad, los cuerpos que se mueven con velocidad <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> en los fluidos sufren una fuerza de arrastre, además del empuje hidrostático (10.195). Para expresar la fuerza de arrastre se suele usar el <strong>coeficiente de arrastre</strong> adimensional <math display=\"inline\"><msub><mi>C</mi><mi>D</mi></msub></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>F</mi><mi>η</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>C</mi><mi>D</mi></msub><mi>ρ</mi><msup><mi>v</mi><mn>2</mn></msup><msub><mi>S</mi><mo>⟂</mo></msub><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><msub><mi>S</mi><mo>⟂</mo></msub></math> es el área de la proyección del cuerpo en el plano perpendicular a <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>."
    },
    {
     "mota": "testua",
     "html": "Supongamos que una esfera rígida de radio <math display=\"inline\"><mi>a</mi></math> (<math display=\"inline\"><mrow><msub><mi>S</mi><mo>⟂</mo></msub><mo>=</mo><mi>π</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>) se mueve en un fluido con velocidad <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>. Si el flujo es incompresible y el número de Reynolds de este problema es muy pequeño, el coeficiente de arrastre <math display=\"block\"><mrow><mi mathvariant=\"script\">ℛ</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>ρ</mi><mi>a</mi><mi>v</mi></mrow><mi>η</mi></mfrac><mo>≲</mo><mn>0.2</mn><mo>,</mo></mrow></math> es <math display=\"block\"><mrow><msub><mi>C</mi><mi>D</mi></msub><mo>=</mo><mfrac><mn>24</mn><mi mathvariant=\"script\">ℛ</mi></mfrac></mrow></math> y la fuerza de arrastre la da la ley de Stokes:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>η</mi></msub><mo>=</mo><mi>−</mi><mn>6</mn><mi>π</mi><mi>a</mi><mi>η</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Esto puede aplicarse a un guijarro que se hunde lentamente en un lago, y también a un microorganismo que está en el agua o al polvo del aire.)"
    },
    {
     "mota": "irudia",
     "oina": "Coeficiente de arrastre en función del número de Reynolds.",
     "src": "../media/irudiak/aaba0dbe9682c078.svg",
     "zabalera": 269
    },
    {
     "mota": "testua",
     "html": "Al aumentar <math display=\"inline\"><mi mathvariant=\"script\">ℛ</mi></math> cambia <math display=\"inline\"><mrow><msub><mi>C</mi><mi>D</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, pero en el intervalo <math display=\"inline\"><mrow><mn>1000</mn><mo>≲</mo><mi mathvariant=\"script\">ℛ</mi><mo>≲</mo><msup><mn>10</mn><mn>5</mn></msup></mrow></math> es casi constante, <math display=\"block\"><mrow><msub><mi>C</mi><mi>D</mi></msub><mo>≈</mo><mn>0.44</mn><mo>,</mo></mrow></math> y la fuerza de arrastre (10.256) cumple la ley de Newton: es proporcional al cuadrado de la velocidad. (Este es el arrastre del aire que sufren la piedra soltada desde la torre de Pisa o un paracaidista.)"
    },
    {
     "mota": "testua",
     "html": "Una variante de la ley de Stokes se usó en un experimento famoso e importante del siglo XX. En 1897 J. J. Thomson descubrió el electrón. En los experimentos realizados por Millikan<span class=\"j-oin\">[Robert Andrews Millikan obtuvo el premio Nobel de 1923 por estos experimentos y por los realizados sobre el efecto fotoeléctrico.]</span> entre 1909 y 1913 se midió con gran precisión la carga <math display=\"inline\"><mrow><mi>−</mi><mi>e</mi></mrow></math> del electrón y se demostró la cuantización de la carga, es decir, que todas las cargas son múltiplos de la carga elemental."
    },
    {
     "mota": "irudia",
     "oina": "Esquema del experimento de Millikan.",
     "src": "../media/irudiak/b41385e6d3d7412d.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "El esquema del experimento se muestra en la figura 10.35. Mediante un pulverizador se dispersan gotitas de aceite sobre la placa de arriba y las gotas que pasan por el pequeño agujero que esta tiene se iluminan con un rayo horizontal, para poder verlas con un telescopio. Las gotas se cargan con rayos X o con otra radiación ionizante. Cambiando la diferencia de potencial <math display=\"inline\"><mi>V</mi></math> entre las placas metálicas, se puede conseguir que una gota quede quieta en el aire. Cuando esto ocurre, la suma del peso, de la fuerza electrostática y del empuje hidrostático aplicados en la gota es nula: <math display=\"block\"><mrow><mi>−</mi><mi>q</mi><mi>E</mi><mo>−</mo><mi>m</mi><mi>g</mi><mo>+</mo><mfrac><msub><mi>ρ</mi><mtext mathvariant=\"normal\">airea</mtext></msub><msub><mi>ρ</mi><mtext mathvariant=\"normal\">olioa</mtext></msub></mfrac><mi>m</mi><mi>g</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>q</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ρ</mi><mrow><mtext mathvariant=\"normal\">olioa </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><msub><mi>ρ</mi><mtext mathvariant=\"normal\">airea</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>a</mi><mn>3</mn></msup><mi>g</mi><mi>L</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>3</mn><mi>V</mi></mrow></mfrac><mo>,</mo></mrow></math> donde hemos usado que, si la distancia entre las placas es <math display=\"inline\"><mi>L</mi></math>, el campo electrostático es <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>V</mi><mi>/</mi><mi>L</mi></mrow></math>. En la expresión (10.261) obtenida, el radio <math display=\"inline\"><mi>a</mi></math> de la gota era muy pequeño (del orden de <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup></math> cm) y, en lugar de medirlo directamente, se usaba la ley de Stokes midiendo la velocidad de las gotas al quitar el campo electrostático: como demostraremos en el problema 10.91, la velocidad de la gota tiende a un valor medible y con él puede calcularse el radio <math display=\"inline\"><mi>a</mi></math>. (En realidad, al ser las gotas tan pequeñas, el aire no puede considerarse un medio continuo y hay que usar una variante de la ley de Stokes.) Las cargas de las gotas eran siempre múltiplos de un valor: así se demostró que en la naturaleza las cargas son siempre múltiplos enteros de un valor <math display=\"inline\"><mi>e</mi></math> (en el caso de los quarks, que no aparecen libres, las cargas son múltiplos enteros de <math display=\"inline\"><mrow><mi>e</mi><mi>/</mi><mn>3</mn></mrow></math>)."
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Tensión superficial",
   "blokeak": [
    {
     "mota": "testua",
     "html": "¿Por qué son esféricas las pompas de jabón y las gotas de agua? ¿Cómo andan los zapateros sobre el agua?<span class=\"j-oin\">[Así se llaman los insectos <em>gerris sp.</em>]</span> La causa de estos fenómenos y de otros muchos es la tensión superficial. Las moléculas que están en la superficie entre fluidos ven un entorno muy anisótropo; por ejemplo, por un lado tienen las moléculas del agua y por otro las del aire (junto con las del vapor). En consecuencia, entre las partes de unas capas del grosor de unas moléculas entre medios aparecen fuerzas tangentes a la superficie: las fuerzas superficiales."
    },
    {
     "mota": "irudia",
     "oina": "Película de agua jabonosa.",
     "src": "../media/irudiak/6e09919738c83351.svg",
     "zabalera": 162
    },
    {
     "mota": "testua",
     "html": "Para medir la fuerza superficial puede hacerse el experimento de la figura 10.36. Con un alambre de hierro se hace una u y con un alambre recto ligero y móvil se forma un rectángulo. Si, después de meterlo en agua jabonosa, se saca con cuidado, una película delgada llena el rectángulo y atrae el alambre de abajo hacia arriba, si no se le aplica una fuerza adecuada. Se mide el peso del alambre de abajo y la fuerza aplicada para mantenerlo en equilibrio. Aunque sorprenda, la fuerza <math display=\"inline\"><mi>F</mi></math> no depende del área: no cambia con <math display=\"inline\"><mi>z</mi></math>. La explicación está en la estructura microscópica de la película. Aunque sea muy delgada, su grosor es muy grande comparado con las dimensiones de las moléculas: es el volumen limitado por dos capas superficiales del grosor de unas moléculas. Al aumentar el área, algunas moléculas que estaban dentro se mueven a la superficie, para aumentar el área de las capas superficiales. Ese comportamiento es completamente distinto del de una membrana de goma y la fuerza no depende de la deformación."
    },
    {
     "mota": "testua",
     "html": "Lo que se ve en los experimentos es esto: <em>la tensión superficial es proporcional a la longitud de la línea en que se aplica</em>. Como en el experimento de la figura 10.36 la película tiene dos lados, la longitud total es <math display=\"inline\"><mrow><mn>2</mn><mi>l</mi></mrow></math> y la fuerza que se mide es <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mn>2</mn><mi>γ</mi><mi>l</mi><mo>,</mo></mrow></math> donde, por definición, la fuerza superficial por unidad de longitud <math display=\"inline\"><mi>γ</mi></math> es la tensión superficial:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>γ</mi><mo>=</mo><mfrac><mi>F</mi><mrow><mn>2</mn><mi>l</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En la tabla A.10 se recogen las tensiones superficiales de algunos fluidos. La unidad de esta magnitud en el sistema SI es <math display=\"inline\"><mn>1</mn></math>  N/m  <math display=\"inline\"><mrow><mo>=</mo><mn>1</mn></mrow></math>  W/m<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math>. Para entender de otra manera esta sencilla relación entre unidades, calculemos el trabajo hecho contra la tensión superficial al cambiar <math display=\"inline\"><mi>z</mi></math> (es decir, al cambiar el área de la película): <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>W</mi><mo>=</mo><mi>F</mi><mi mathvariant=\"normal\">Δ</mi><mi>z</mi><mo>=</mo><mn>2</mn><mi>γ</mi><mi>l</mi><mi mathvariant=\"normal\">Δ</mi><mi>z</mi><mi>.</mi></mrow></math> Como el cambio del área total es <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><mn>2</mn><mi>l</mi><mi mathvariant=\"normal\">Δ</mi><mi>z</mi></mrow></math>, el trabajo por unidad de cambio del área es igual a la tensión superficial: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>W</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi></mrow></mfrac><mo>=</mo><mi>γ</mi><mi>.</mi></mrow></math> Pero, para que el cálculo que acabamos de hacer sea correcto, hay que tener en cuenta que la tensión superficial tiene una gran dependencia de la temperatura y que al aumentar esta disminuye la tensión superficial: <math display=\"inline\"><mrow><mi>d</mi><mi>γ</mi><mi>/</mi><mi>d</mi><mi>T</mi><mo>&lt;</mo><mn>0</mn></mrow></math>. Por tanto, hay que dar calor a la película para que su temperatura sea constante en el proceso. En consecuencia, no podemos decir, de forma parecida a lo que haremos en el problema 10.6 en el caso de las fuerzas y la energía elásticas, que el trabajo hecho por la tensión superficial sea igual al cambio de la energía de la película."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Diferencia de presiones a los dos lados de una película esférica"
    },
    {
     "mota": "testua",
     "html": "Consideremos una pompa hecha de agua jabonosa y estudiemos el equilibrio de la película. Las fuerzas que sufre la mitad de la pompa (olvidando el peso) son las producidas por las presiones exterior e interior y las fuerzas superficiales aplicadas en las dos superficies. Con la geometría 10.37, la última se calcula fácilmente: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>γ</mi></msub><mo>=</mo><mi>−</mi><mn>2</mn><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mi>−</mi><mn>4</mn><mi>γ</mi><mi>π</mi><mi>R</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Mitad de una pompa de jabón.",
     "src": "../media/irudiak/6af42f44b0908bf2.svg",
     "zabalera": 297
    },
    {
     "mota": "testua",
     "html": "Por otra parte, como hemos despreciado la altura, las presiones serán homogéneas y la fuerza producida la siguiente: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>p</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo>∫</mo><mi>S</mi></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> Aquí hemos usado que la integral <math display=\"inline\"><mrow><msub><mo>∫</mo><mi>S</mi></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math> depende solo del contorno (véase el problema 10.14.5) para encontrarla directamente en el círculo que le sirve de base, en lugar de calcularla en el hemisferio: <math display=\"inline\"><mrow><msub><mo>∫</mo><mi>S</mi></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>. Como la condición de equilibrio es <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>p</mi></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>γ</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, tenemos la diferencia de presiones: <math display=\"block\"><mrow><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mi>γ</mi></mrow><mi>R</mi></mfrac><mi>.</mi></mrow></math> La diferencia es mayor cuando el radio de la pompa es menor."
    },
    {
     "mota": "testua",
     "html": "En el caso de una gota de agua, como solo tenemos una superficie, el resultado es la mitad del anterior<span class=\"j-oin\">[Este es un caso particular del resultado llamado <strong>ecuación de Laplace</strong>. Laplace halló esa ecuación en 1806 mediante un estudio del equilibrio mecánico.]</span>: <math display=\"block\"><mrow><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>γ</mi></mrow><mi>R</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ángulo de contacto"
    },
    {
     "mota": "testua",
     "html": "Supongamos que tenemos un líquido en un recipiente. En los puntos en que la superficie del líquido toca la pared del recipiente tenemos tres medios: el sólido (vidrio, por ejemplo), el líquido (agua) y el gas (aire o, mejor dicho, vapor). Por tanto, habrá tres capas entre medios y las tres tensiones superficiales correspondientes, que designaremos con las primeras letras de los nombres de los medios que limitan las capas: <math display=\"inline\"><msub><mi>γ</mi><mrow><mi>s</mi><mi>l</mi></mrow></msub></math>, <math display=\"inline\"><msub><mi>γ</mi><mrow><mi>l</mi><mi>g</mi></mrow></msub></math> y <math display=\"inline\"><msub><mi>γ</mi><mrow><mi>s</mi><mi>g</mi></mrow></msub></math>. En las secciones anteriores solo hemos considerado <math display=\"inline\"><mrow><mi>γ</mi><mo>≡</mo><msub><mi>γ</mi><mrow><mi>l</mi><mi>g</mi></mrow></msub></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Capas entre sólido, líquido y gas.",
     "src": "../media/irudiak/473fd47d8ab10063.svg",
     "zabalera": 519
    },
    {
     "mota": "testua",
     "html": "El ángulo entre la pared del sólido y la superficie del líquido en los puntos de contacto se llama <strong>ángulo de contacto</strong>. En la línea en que se cortan las tres capas (una circunferencia si el recipiente es cilíndrico), como se ve en la figura 10.38, si el ángulo de contacto no es <math display=\"inline\"><mn>0</mn></math> o <math display=\"inline\"><mi>π</mi></math>, hace falta una cuarta fuerza para que esa intersección esté en equilibrio: a esa fuerza que ejerce la pared se le llama <strong>fuerza de adherencia</strong>. Las condiciones de equilibrio por unidad de longitud de la intersección se escriben así:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>γ</mi><mrow><mi>s</mi><mi>g</mi></mrow></msub><mo>=</mo><msub><mi>γ</mi><mrow><mi>s</mi><mi>l</mi></mrow></msub><mo>+</mo><msub><mi>γ</mi><mrow><mi>l</mi><mi>g</mi></mrow></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msub><mi>γ</mi><mrow><mi>l</mi><mi>g</mi></mrow></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El primer resultado se llama <strong>ecuación de Young</strong> y nos dice que el ángulo de contacto depende de las características de los medios. El segundo nos da la fuerza de adherencia <math display=\"inline\"><mi>I</mi></math> por unidad de longitud."
    },
    {
     "mota": "testua",
     "html": "Cuando el ángulo de contacto es <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>θ</mi><mo>&lt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, se dice que el líquido <strong>moja</strong> el sólido. Así ocurre, por ejemplo, cuando el agua, el alcohol, el éter y otros líquidos tocan muchos tipos de vidrio: en estos casos, además, tenemos <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>. Por otra parte, entre el agua y la plata es <math display=\"inline\"><mrow><mi>θ</mi><mo>≈</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, entre el agua y la parafina <math display=\"inline\"><mrow><mi>θ</mi><mo>≈</mo><mn>107</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> y entre el mercurio y el vidrio <math display=\"inline\"><mrow><mi>θ</mi><mo>≈</mo><mn>140</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. En estos dos últimos casos se dice que el líquido no moja el sólido, y siempre que sea <math display=\"inline\"><mrow><mi>θ</mi><mo>&gt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Como la tensión superficial depende de las impurezas del líquido, mediante un agente humectante puede disminuirse el ángulo de contacto: esa es una de las funciones de los detergentes."
    },
    {
     "mota": "irudia",
     "oina": "Efecto del detergente en una gota de aceite.",
     "src": "../media/irudiak/0c9c682d2af65676.svg",
     "zabalera": 462
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Capilaridad"
    },
    {
     "mota": "testua",
     "html": "Debido a la tensión superficial, si se mete un tubo muy delgado en un líquido, la altura de la superficie del agua es mayor o menor que fuera del tubo. La razón se muestra en la figura 10.40, a la izquierda cuando el líquido moja el tubo y a la derecha en el caso contrario."
    },
    {
     "mota": "irudia",
     "oina": "Capilaridad.",
     "src": "../media/irudiak/6324337201eedc53.svg",
     "zabalera": 292
    },
    {
     "mota": "testua",
     "html": "El equilibrio de la columna de agua sobre la superficie exterior ocurre cuando la suma de su peso y de la componente vertical de la fuerza superficial es nula: <math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><mi>g</mi><mo>+</mo><msub><mi>F</mi><mi>γ</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>. La superficie curva del agua del interior se llama <strong>menisco</strong> y, si despreciamos su curvatura, el volumen de la columna es <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup><mi>h</mi></mrow></math>, si el radio del capilar es <math display=\"inline\"><mi>R</mi></math>. Por tanto, tenemos la condición de equilibrio:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>2</mn><mi>π</mi><mi>R</mi><mi>γ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>ρ</mi><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup><mi>h</mi><mi>g</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>h</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>γ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mi>ρ</mi><mi>g</mi><mi>R</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Según este resultado, llamado <strong>ley de Jurin</strong>, el fenómeno es más espectacular en los tubos delgados. Está claro que en este resultado, si el líquido no moja la pared (<math display=\"inline\"><mrow><mi>θ</mi><mo>&gt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>), la altura del líquido interior es menor: <math display=\"inline\"><mrow><mi>h</mi><mo>&lt;</mo><mn>0</mn></mrow></math>. La capilaridad es de gran importancia, por ejemplo, para guardar el agua de lluvia en las rendijas entre las partículas del suelo, para que las plantas la tomen de allí."
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Problemas resueltos",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Autovalores y autovectores del tensor de deformaciones"
    },
    {
     "mota": "testua",
     "html": "<em>Consideremos una superficie esférica infinitesimal imaginaria centrada en un punto de un sólido elástico. Demuestra que cuando el cuerpo sufre una deformación pequeña la superficie se convierte en un elipsoide. ¿Cómo pueden hallarse la forma y la orientación del elipsoide? Haz el último cálculo en el caso en que la deformación en dicho punto sea la siguiente:</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si el centro de la superficie es el punto <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> de la figura 10.11 y un punto genérico de la superficie <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math>, antes de producirse la deformación el radio infinitesimal de la esfera será <math display=\"inline\"><mrow><mi>d</mi><mi>l</mi></mrow></math>. Una vez deformada, por (10.47), la distancia se escribe así, teniendo en cuenta que las deformaciones son pequeñas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><msup><mi>l</mi><mn>2</mn></msup><mo>=</mo><mi>d</mi><msup><mi>l</mi><mrow><mi>*</mi><mn>2</mn></mrow></msup><mo>−</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msubsup><mi>x</mi><mi>i</mi><mo>*</mo></msubsup><mi>d</mi><msubsup><mi>x</mi><mi>j</mi><mo>*</mo></msubsup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta forma cuadrática se escribe como <math display=\"inline\"><mn mathvariant=\"bold\">𝟏</mn></math> mediante la matriz identidad y la matriz de deformaciones <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑼</mi><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> construida con las componentes del tensor de deformaciones:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><msup><mi>l</mi><mn>2</mn></msup><mo>≈</mo><msup><mi mathvariant=\"bold-italic\">𝑿</mi><mi>⊤</mi></msup><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn mathvariant=\"bold\">𝟏</mn><mo>−</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝑼</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑿</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi mathvariant=\"bold-italic\">𝑿</mi><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>d</mi><msubsup><mi>x</mi><mn>1</mn><mo>*</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>d</mi><msubsup><mi>x</mi><mn>2</mn><mo>*</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>d</mi><msubsup><mi>x</mi><mn>3</mn><mo>*</mo></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El problema de los autovalores y autovectores de la matriz <math display=\"inline\"><mrow><mn mathvariant=\"bold\">𝟏</mn><mo>−</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝑼</mi></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn mathvariant=\"bold\">𝟏</mn><mo>−</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝑼</mi><mo>−</mo><mi>λ</mi><mn mathvariant=\"bold\">𝟏</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es equivalente al siguiente, si se hace <math display=\"inline\"><mrow><mi>λ</mi><mo>≡</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>ε</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑼</mi><mo>−</mo><mi>ε</mi><mn mathvariant=\"bold\">𝟏</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como el tensor de deformaciones (y la matriz <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑼</mi></math>) es simétrico, siempre admite tres autovectores ortonormales correspondientes a los <math display=\"inline\"><msub><mi>ε</mi><mi>i</mi></msub></math> autovalores y, si estos se eligen como base, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑼</mi></math> y <math display=\"inline\"><mrow><mn mathvariant=\"bold\">𝟏</mn><mo>−</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝑼</mi></mrow></math> se vuelven diagonales. En consecuencia, la ecuación de la superficie deformada se escribe así en ese triedro propio:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><msup><mi>l</mi><mn>2</mn></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><msub><mi>ε</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><msubsup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>i</mi><mn>2</mn></msubsup><mo>≈</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><msub><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>i</mi></msub></mrow><mrow><mn>1</mn><mo>+</mo><msub><mi>ε</mi><mi>i</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta es, por supuesto, la ecuación de un elipsoide, y las longitudes de los ejes principales son <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msub><mi>ε</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>l</mi></mrow></math>. En la dirección de esos ejes, es decir, en la dirección de los autovectores del tensor de deformaciones, la deformación es longitudinal, sin componentes transversales, y la deformación unitaria es el autovalor <math display=\"inline\"><msub><mi>ε</mi><mi>i</mi></msub></math> correspondiente."
    },
    {
     "mota": "testua",
     "html": "Los autovalores y autovectores ortonormales del tensor de deformaciones en el ejemplo son los siguientes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mn>0.024427</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mn>0.0012333</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mn>0.033194</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>i</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0.91189</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>0.40368</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>0.074169</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"0.222em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0.40645</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0.86302</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0.30001</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"0.222em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>0.057097</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>0.30372</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0.95105</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Compresibilidad del agua"
    },
    {
     "mota": "testua",
     "html": "<em>¿Cómo cambia la ley fundamental de la hidrostática si no se desprecia la compresibilidad del agua? Observación: Olvida los cambios de salinidad y de temperatura.</em>"
    },
    {
     "mota": "testua",
     "html": "Consideremos un cubo vertical infinitesimal de altura <math display=\"inline\"><mrow><mi>d</mi><mi>z</mi></mrow></math>. En la superficie del agua, es decir, a presión atmosférica <math display=\"inline\"><msub><mi>p</mi><mn>0</mn></msub></math>, si la densidad del agua es <math display=\"inline\"><msub><mi>ρ</mi><mn>0</mn></msub></math>, a profundidad <math display=\"inline\"><mi>z</mi></math> la relación entre la presión <math display=\"inline\"><mi>p</mi></math> y la densidad <math display=\"inline\"><mi>ρ</mi></math> será la dada por la definición (10.7) del módulo de compresibilidad:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mi>B</mi><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi></mrow><mi>V</mi></mfrac><mo>=</mo><mi>B</mi><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>ρ</mi></mrow><mi>ρ</mi></mfrac><mo>=</mo><mi>B</mi><mfrac><mrow><mi>ρ</mi><mo>−</mo><msub><mi>ρ</mi><mn>0</mn></msub></mrow><msub><mi>ρ</mi><mn>0</mn></msub></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>ρ</mi><mo>=</mo><msub><mi>ρ</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub></mrow><mi>B</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde hemos usado que, como la masa <math display=\"inline\"><mrow><mi>d</mi><mi>m</mi><mo>=</mo><mi>ρ</mi><mi>V</mi><mo>=</mo><mi>ρ</mi><mi>d</mi><mi>S</mi><mi>d</mi><mi>z</mi></mrow></math> del cubo no cambia, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>ρ</mi><mspace width=\"0.222em\"></mspace><mi>V</mi><mo>+</mo><mi>ρ</mi><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>. La ley de la hidrostática será la ecuación de equilibrio del cubo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mi>d</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>S</mi><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>S</mi><mo>−</mo><mi>d</mi><mi>m</mi><mspace width=\"0.222em\"></mspace><mi>g</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>d</mi><mi>p</mi><mo>=</mo><mi>ρ</mi><mi>g</mi><mi>d</mi><mi>z</mi><mo>=</mo><msub><mi>ρ</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub></mrow><mi>B</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mi>d</mi><mi>z</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta ecuación diferencial lineal de coeficientes constantes se integra directamente (véase, por ejemplo, [46]), usando la condición inicial <math display=\"inline\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>p</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><msub><mi>ρ</mi><mn>0</mn></msub><mi>g</mi><mi>z</mi><mi>/</mi><mi>B</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><msub><mi>ρ</mi><mn>0</mn></msub><mi>g</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mfrac><mrow><msub><mi>ρ</mi><mn>0</mn></msub><mi>g</mi><mi>z</mi></mrow><mrow><mn>2</mn><mi>B</mi></mrow></mfrac><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>B</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>ρ</mi><mo>=</mo><msub><mi>ρ</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mfrac><mrow><msub><mi>ρ</mi><mn>0</mn></msub><mi>g</mi><mi>z</mi></mrow><mi>B</mi></mfrac><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>B</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Tubo de Pitot"
    },
    {
     "mota": "testua",
     "html": "<em>Para medir la velocidad de un avión puede colocarse en el fuselaje un tubo de Pitot, como el que se muestra esquemáticamente en la figura. Por los agujeros del tubo exterior se mide la presión <math display=\"inline\"><msub><mi>p</mi><mn>1</mn></msub></math> del aire y el extremo del interior es el punto de estancamiento, pues allí la velocidad relativa del aire es nula. ¿Cómo puede calcularse la velocidad del avión valiéndonos de la diferencia de las dos presiones?</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/a2489ec876048930.svg",
     "zabalera": 139
    },
    {
     "mota": "testua",
     "html": "La presión <math display=\"inline\"><msub><mi>p</mi><mn>1</mn></msub></math> que se mide por los agujeros de arriba (en el sistema del avión) es la del aire que se mueve con velocidad <math display=\"inline\"><mi>v</mi></math>. En la boca del tubo para medir <math display=\"inline\"><msub><mi>p</mi><mn>2</mn></msub></math>, en cambio, el aire está en reposo. Si aplicamos el teorema de Bernoulli entre esos dos puntos (si se prefiere, puede usarse un punto intermedio que esté a gran distancia delante del tubo) (a falta de otra información, supongamos que se cumplen las hipótesis del teorema),"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msub><mi>p</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "se obtiene, y de ahí se despeja la velocidad <math display=\"inline\"><mi>v</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mfrac><mrow><msub><mi>p</mi><mn>2</mn></msub><mo>−</mo><msub><mi>p</mi><mn>1</mn></msub></mrow><mi>ρ</mi></mfrac></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Viscosímetro"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/dabb48892f5b5fa0.svg",
     "zabalera": 211
    },
    {
     "mota": "testua",
     "html": "<em>Los cilindros largos de la figura giran alrededor del eje común <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> con las velocidades angulares mostradas. Entre ambos hay un fluido. Calcula el campo de velocidades y los momentos de fuerza que hay que aplicar en los cilindros para que su velocidad angular sea constante (midiéndolos puede calcularse el coeficiente de viscosidad dinámica del fluido). Supón que el flujo es estacionario.</em>"
    },
    {
     "mota": "testua",
     "html": "Gracias a la última hipótesis, está claro que por simetría tenemos <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover></mrow></math> si se usan coordenadas cilíndricas. La aceleración del fluido es centrípeta, por supuesto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>ρ</mi></mfrac><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si se prefiere, pueden usarse (B.18), (B.31), (B.46) y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover></mrow><mrow><mi>d</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover></mrow><mrow><mi>d</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "los resultados para obtener la aceleración anterior mediante la expresión <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math>. Además, se comprueban directamente los siguientes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mi>p</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>ρ</mi></mrow></mfrac><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>v</mi></mrow><mrow><mi>d</mi><msup><mi>ρ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>ρ</mi></mrow></mfrac><mo>−</mo><mfrac><mi>v</mi><msup><mi>ρ</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En este caso sencillo, por tanto, podemos tomar el fluido como incompresible y la ecuación (10.235) se reduce a la siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mi>ρ</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>ρ</mi></mfrac><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><mi>ρ</mi></mrow></mfrac><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>η</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>v</mi></mrow><mrow><mi>d</mi><msup><mi>ρ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>ρ</mi></mrow></mfrac><mo>−</mo><mfrac><mi>v</mi><msup><mi>ρ</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las dos componentes de esta ecuación se escriben así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>ρ</mi></mrow></mfrac><mo>=</mo><mi>ρ</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>ρ</mi></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>v</mi></mrow><mrow><mi>d</mi><msup><mi>ρ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>ρ</mi></mrow></mfrac><mo>−</mo><mfrac><mi>v</mi><msup><mi>ρ</mi><mn>2</mn></msup></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La última es la ecuación de Cauchy y Euler (véase, por ejemplo, [46]) y las soluciones son del tipo <math display=\"inline\"><mrow><mi>v</mi><mo>∝</mo><msup><mi>ρ</mi><mi>λ</mi></msup></mrow></math>. Se ve directamente que en este caso la solución general de esta ecuación lineal"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mi>A</mi><mi>ρ</mi><mo>+</mo><mfrac><mi>B</mi><mi>ρ</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es. Para hallar las constantes de integración, si se usan las condiciones de contorno <math display=\"inline\"><mrow><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>R</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>ω</mi><mn>1</mn></msub><msub><mi>R</mi><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>R</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>ω</mi><mn>2</mn></msub><msub><mi>R</mi><mn>2</mn></msub></mrow></math> que expresan que en las paredes de los cilindros el fluido está en reposo relativo, se obtiene esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mfrac><mrow><msub><mi>ω</mi><mn>2</mn></msub><msubsup><mi>R</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msub><mi>ω</mi><mn>1</mn></msub><msubsup><mi>R</mi><mn>1</mn><mn>2</mn></msubsup></mrow><mrow><msubsup><mi>R</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>R</mi><mn>1</mn><mn>2</mn></msubsup></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>B</mi><mo>=</mo><mfrac><mrow><msubsup><mi>R</mi><mn>1</mn><mn>2</mn></msubsup><msubsup><mi>R</mi><mn>2</mn><mn>2</mn></msubsup></mrow><mrow><msubsup><mi>R</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>R</mi><mn>1</mn><mn>2</mn></msubsup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ahora, la integral de la ecuación radial que da la derivada de la presión nos da la presión. Observa que cuando las velocidades angulares de los dos cilindros son iguales el fluido también se mueve de la misma manera, como si todo el sistema fuera un sólido rígido."
    },
    {
     "mota": "testua",
     "html": "Estudiemos ahora el momento de fuerza que el fluido ejerce sobre cada cilindro. Para empezar, hallemos el esfuerzo cortante en el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>R</mi><mn>1</mn></msub><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Para ello tenemos que calcular <math display=\"inline\"><msub><mi>τ</mi><mrow><mi>y</mi><mi>x</mi></mrow></msub></math> en ese punto. El campo de velocidades en coordenadas cartesianas"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>x</mi></msub><mo>=</mo><mi>−</mi><mi>v</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mi>−</mi><mi>ω</mi><mi>y</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>v</mi><mi>y</mi></msub><mo>=</mo><mi>v</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mi>ω</mi><mi>x</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>ω</mi><mo>≡</mo><mfrac><mi>v</mi><mi>ρ</mi></mfrac><mo>=</mo><mi>A</mi><mo>+</mo><mfrac><mi>B</mi><msup><mi>ρ</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "se escribe así. En consecuencia, usando (10.229)–(10.230) y que en el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>ρ</mi></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>y</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>η</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>v</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>v</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>η</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mfrac><mrow><mi>∂</mi><mi>ω</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mi>y</mi><mfrac><mrow><mi>∂</mi><mi>ω</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mrow><msub><mi>τ</mi><mrow><mi>y</mi><mi>x</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></msub><mo>=</mo><mi>η</mi><mi>x</mi><mfrac><mrow><mi>∂</mi><mi>ω</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo></mrow><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></msub><mo>=</mo><mi>η</mi><mi>ρ</mi><mfrac><mrow><mi>∂</mi><mi>ω</mi></mrow><mrow><mi>∂</mi><mi>ρ</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mi>η</mi><mfrac><mi>B</mi><msup><mi>ρ</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>τ</mi><mo>≡</mo><msub><mi>τ</mi><mrow><mi>y</mi><mi>x</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>R</mi><mn>1</mn></msub><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>2</mn><mi>η</mi><mfrac><mi>B</mi><msubsup><mi>R</mi><mn>1</mn><mn>2</mn></msubsup></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como el módulo del esfuerzo cortante es el mismo en todos los puntos del cilindro, el momento de fuerza total ejercido en la longitud <math display=\"inline\"><mi>L</mi></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>N</mi><mn>1</mn></msub><mo>=</mo><mi>τ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><msub><mi>R</mi><mn>1</mn></msub><mi>L</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>4</mn><mi>π</mi><mi>η</mi><mi>L</mi><mi>B</mi><mo>=</mo><mi>−</mi><mn>4</mn><mi>π</mi><mi>η</mi><mi>L</mi><mfrac><mrow><msubsup><mi>R</mi><mn>1</mn><mn>2</mn></msubsup><msubsup><mi>R</mi><mn>2</mn><mn>2</mn></msubsup></mrow><mrow><msubsup><mi>R</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>R</mi><mn>1</mn><mn>2</mn></msubsup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De la misma manera, se demuestra fácilmente que el momento de fuerza ejercido sobre el cilindro exterior es <math display=\"inline\"><mrow><msub><mi>N</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>N</mi><mn>1</mn></msub></mrow></math>. (Por supuesto, cuando <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow></math> no hay ningún momento de fuerza.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Vector área total"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/7da7fc22f249a363.svg",
     "zabalera": 161
    },
    {
     "mota": "testua",
     "html": "Así como la integral <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub></mrow></math> depende solo de los límites de integración, la integral <math display=\"inline\"><mrow><msub><mo>∫</mo><mi>S</mi></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math> depende solo del contorno de la superficie <math display=\"inline\"><mi>S</mi></math>. Demuestra que si las superficies <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> tienen por contorno la misma curva cerrada <math display=\"inline\"><mi>C</mi></math> y tienen la misma orientación, se cumple lo siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mo>∫</mo><msub><mi>S</mi><mn>1</mn></msub></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><msub><mo>∫</mo><msub><mi>S</mi><mn>2</mn></msub></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como al invertir la orientación de una superficie se obtiene una superficie cerrada, este resultado"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mo>∮</mo><mi>S</mi></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "también puede expresarse así, para todas las superficies cerradas <math display=\"inline\"><mi>S</mi></math>. Para demostrarlo de este modo, puede usarse la expresión (10.129) del teorema de Gauss si el tensor <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝉</mi></math> es la identidad (y, por tanto, constante):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msub><mi>S</mi><mi>j</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msub><mi>S</mi><mi>j</mi></msub><mo>=</mo><mi>d</mi><msub><mi>S</mi><mi>i</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mo>∮</mo><mi>S</mi></msub><mi>d</mi><msub><mi>S</mi><mi>i</mi></msub><mo>=</mo><msub><mo>∮</mo><mi>S</mi></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msub><mi>S</mi><mi>j</mi></msub><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mi>d</mi><mi>V</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "También podríamos valernos de las proyecciones que se usan en algunos libros de texto para demostrar el teorema de Gauss, para dar otra demostración."
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>smallcaps[Elasticidad]</strong>"
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
       "html": "¿Cuál es la longitud máxima de un cable de acero para que, al colgarlo de un extremo, no se rompa por efecto de su peso?"
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
       "html": "¿Cuál sería el coeficiente de Poisson de un material incompresible?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "La varilla ligera de la figura mide 105 cm de longitud y está colgada del techo con los hilos <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math>. Si las deformaciones de los hilos son pequeñas, ¿de dónde hay que colgar la masa <math display=\"inline\"><mi>M</mi></math> para que los dos hilos sufran (a) esfuerzos iguales, (b) deformaciones iguales? <em>Datos</em>: la sección transversal del hilo <math display=\"inline\"><mi>A</mi></math> es 1 mm<sup>2</sup> y la de <math display=\"inline\"><mi>B</mi></math> 2 mm<sup>2</sup>. El módulo de Young del primero es <math display=\"inline\"><mrow><mn>21</mn><mo>×</mo><msup><mn>10</mn><mn>3</mn></msup></mrow></math>  kp/mm<sup>2</sup> y el de <math display=\"inline\"><mi>B</mi></math> <math display=\"inline\"><mrow><mn>14</mn><mo>×</mo><msup><mn>10</mn><mn>3</mn></msup></mrow></math>  kp/mm<sup>2</sup>."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/8e518b6d515ada91.svg",
           "zabalera": 142
          }
         ]
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
       "html": "Una barra de goma mide 10 cm de longitud y los lados de su sección cuadrada 1 cm. Cuando se le aplica en la dirección de su longitud una fuerza de compresión de 1000 N se acorta 1 cm y la sección transversal es de 1.1 cm<sup>2</sup>. ¿Cuáles son el módulo de Young y el coeficiente de Poisson? Si ahora la barra se mete en una matriz de acero, para que no se ensanche en las direcciones transversales, ¿cuál será el acortamiento con la misma compresión?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Una barra está en equilibrio bajo esfuerzos opuestos aplicados en los extremos. ¿Cuáles son los esfuerzos de tensión y cortante (es decir, la componente normal y la tangente del esfuerzo) en el plano transversal que se muestra en la figura? ¿Cómo hay que elegir el ángulo <math display=\"inline\"><mi>α</mi></math> para que el esfuerzo de tracción sea máximo? ¿Y para que el esfuerzo cortante sea máximo?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/f3e6dced5c44b203.svg",
           "zabalera": 207
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcula el trabajo hecho por las fuerzas aplicadas para llegar lentamente al estado de equilibrio de la barra del problema 10.5. Usa el resultado para escribir la densidad de energía elástica en función del esfuerzo y de la deformación unitaria."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "El cubo de la figura está en equilibrio bajo los esfuerzos que se muestran. La deformación es pequeña y la longitud de los lados del cubo <math display=\"inline\"><mi>a</mi></math>. Calcula el trabajo que ha habido que hacer sobre el cubo para llegar poco a poco a ese estado. ¿Cuál es la densidad de energía elástica?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/7011295a60f09294.svg",
           "zabalera": 117
          }
         ]
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
       "html": "El módulo de compresibilidad volumétrica de una barra de acero es <math display=\"inline\"><mi>B</mi></math>. Si en los extremos se aplican esfuerzos de tracción <math display=\"inline\"><mi>τ</mi></math>, ¿cuál es el cambio unitario de la densidad de la barra?"
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
       "html": "Una bolita de <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>20</mn></mrow></math> kg se cuelga de un hilo de acero de <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>3</mn></mrow></math> m. Al oscilar verticalmente, la frecuencia de la bolita es <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>8.14</mn></mrow></math> Hz. Si el diámetro del hilo es <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1</mn></mrow></math> mm, ¿cuál es su módulo de Young?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Para hacer un cubo se pegan dos bloques idénticos como se muestra en la figura. ¿Cómo es el esfuerzo que sufre la unión: tensión, compresión o esfuerzo cortante?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/f931924e8872a149.svg",
           "zabalera": 71
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Para medir el módulo de compresibilidad volumétrica del sodio se usa el pistón de la figura. Una muestra de sodio de volumen <math display=\"inline\"><msub><mi>V</mi><mn>1</mn></msub></math> se mete en el volumen <math display=\"inline\"><msub><mi>V</mi><mn>2</mn></msub></math> de aceite. Al aplicar una fuerza grande <math display=\"inline\"><mi>F</mi></math>, si el desplazamiento del pistón de área <math display=\"inline\"><mi>A</mi></math> es <math display=\"inline\"><mi>d</mi></math> y el módulo de compresibilidad volumétrica del aceite <math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math>, ¿cuál es el del sodio? <em>Observación</em>: Supón que el pistón y la pared no se deforman y que el rozamiento es despreciable."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/7cfe13736a79fa67.svg",
           "zabalera": 143
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "El área de la sección transversal de un cable de acero es <math display=\"inline\"><mi>A</mi></math> y su módulo de Young <math display=\"inline\"><mi>E</mi></math>. Inicialmente está entre dos extremos fijos, con tensión despreciable. Al colgar por el medio un objeto de masa <math display=\"inline\"><mi>m</mi></math>, el cable queda como se muestra en la figura. Demuestra que el ángulo de deformación <math display=\"inline\"><mi>θ</mi></math> viene dado por la siguiente ecuación trascendente:"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sec</mi><mi>θ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi></mrow><mrow><mi>E</mi><mi>A</mi></mrow></mfrac><mi>.</mi></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "¿Cuál es el valor de <math display=\"inline\"><mi>θ</mi></math> cuando <math display=\"inline\"><mrow><mi>m</mi><mi>g</mi><mi>/</mi><mi>E</mi><mi>A</mi><mo>=</mo><mn>0.01</mn></mrow></math>?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/cdd2ead209cd40f4.svg",
           "zabalera": 190
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que, en el caso de un cuerpo homogéneo e isótropo, la deformación unitaria del volumen"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>τ</mi><mrow><mi>k</mi><mi>k</mi></mrow></msub><mo>=</mo><mn>3</mn><mi>B</mi><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi></mrow><mi>V</mi></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "viene dada por la relación y que la ley de Hooke también puede escribirse de estas formas equivalentes:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mfrac><mi>E</mi><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>+</mo><mfrac><mi>σ</mi><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>k</mi><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow><mi>E</mi></mfrac><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>τ</mi><mrow><mi>k</mi><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El radio de un recipiente esférico es <math display=\"inline\"><mi>R</mi></math> y el grosor de la pared <math display=\"inline\"><mrow><mi>d</mi><mo>≪</mo><mi>R</mi></mrow></math>. Al aumentar la presión manométrica interior, cuando llega al valor <math display=\"inline\"><msub><mi>p</mi><mi>e</mi></msub></math> el recipiente estalla. ¿Cuál es la resistencia a la tracción del material de la pared?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "El cubo homogéneo e isótropo de la figura está en equilibrio. Usa el área <math display=\"inline\"><mi>A</mi></math> de los lados del cubo, la fuerza <math display=\"inline\"><mi>F</mi></math> y el módulo de Young y el coeficiente de Poisson para escribir los tensores de esfuerzos y de deformaciones. ¿Cuál es la deformación del volumen? ¿Y la de las diagonales principales?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/f7463f44d18e35ce.svg",
           "zabalera": 168
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La longitud, la densidad, el módulo de Young y el coeficiente de Poisson de una columna homogénea son <math display=\"inline\"><mi>L</mi></math>, <math display=\"inline\"><mi>ρ</mi></math>, <math display=\"inline\"><mi>E</mi></math> y <math display=\"inline\"><mi>σ</mi></math>, respectivamente. Si se coloca en vertical, ¿cuánto se acortará por efecto de su peso? ¿Cuánto se alargará al colgarla de un extremo?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcula los tensores de esfuerzos y de deformaciones en el caso del problema 10.16. ¿Cuál es la deformación unitaria del volumen?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "¿Cómo debe ser el módulo de Young de la barra de abajo para que sufra la deformación de la de arriba, hecha de dos materiales distintos?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/d2684850541dfa61.svg",
           "zabalera": 186
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "La barra homogénea de la figura gira alrededor de un extremo, en el plano horizontal, con velocidad angular grande y constante <math display=\"inline\"><mi>ω</mi></math>. Calcula el campo de deformaciones cuando el sistema está en equilibrio relativo, es decir, cuando el campo de deformaciones <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no depende del tiempo. ¿Cuál es el alargamiento total de la barra? <em>Observación</em>: La masa de la barra, el módulo de Young y el área de la sección transversal son <math display=\"inline\"><mi>m</mi></math>, <math display=\"inline\"><mi>E</mi></math> y <math display=\"inline\"><mi>A</mi></math>, respectivamente."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/c128444fe2034e51.svg",
           "zabalera": 187
          }
         ]
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
       "html": "La distancia entre dos paredes verticales es <math display=\"inline\"><mi>d</mi></math> y entre ambas, en dirección perpendicular, se coloca una barra de longitud <math display=\"inline\"><mi>d</mi></math>. El área de la sección transversal de la barra es <math display=\"inline\"><mi>S</mi></math>, el módulo de Young <math display=\"inline\"><mi>E</mi></math> y el coeficiente de dilatación térmica lineal <math display=\"inline\"><mi>α</mi></math>. Si la temperatura aumenta, cuando su cambio es <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>T</mi></mrow></math>, ¿cuál será la fuerza que la barra ejerce sobre cada pared, si las paredes no se deforman?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "El módulo de Young, la densidad, la longitud y el área de la sección normal de la barra de la figura son <math display=\"inline\"><mi>E</mi></math>, <math display=\"inline\"><mi>ρ</mi></math>, <math display=\"inline\"><mi>L</mi></math> y <math display=\"inline\"><mi>A</mi></math>, respectivamente, y se mueve bajo las fuerzas <math display=\"inline\"><mrow><msub><mi>F</mi><mn>2</mn></msub><mo>&gt;</mo><msub><mi>F</mi><mn>1</mn></msub></mrow></math>. El sistema está en equilibrio relativo, es decir, no hay aceleración relativa entre los puntos de la barra. Calcula la tensión <math display=\"inline\"><mrow><mi>τ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el campo de deformaciones y el alargamiento de la barra."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/969200c21bd8bb18.svg",
           "zabalera": 154
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Estudiemos el movimiento general de la barra del problema 10.21 (con deformaciones pequeñas)."
          },
          {
           "mota": "testua",
           "html": "(a) Considera la ecuación del movimiento de un elemento de longitud <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> y demuestra que el campo de deformaciones <math display=\"inline\"><mi>u</mi></math> cumple una ecuación de ondas."
          },
          {
           "mota": "testua",
           "html": "(b) Escribe las condiciones de contorno que cumplen los campos de tensiones <math display=\"inline\"><mrow><mi>τ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, usando <math display=\"inline\"><msub><mi>F</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>F</mi><mn>2</mn></msub></math> y otros datos del problema. Deduce cuáles son las condiciones de contorno que cumplen los desplazamientos <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
          },
          {
           "mota": "testua",
           "html": "(c) Sustituye en la ecuación de ondas una solución de la siguiente estructura:"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi><mi>t</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mrow><msub><mi>F</mi><mn>2</mn></msub><mo>−</mo><msub><mi>F</mi><mn>1</mn></msub></mrow><mrow><mi>ρ</mi><mi>A</mi><mi>L</mi></mrow></mfrac><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><msub><mi>F</mi><mn>2</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>L</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>F</mi><mn>1</mn></msub></mrow><mrow><mn>2</mn><mi>A</mi><mi>L</mi><mi>E</mi></mrow></mfrac><mo>+</mo><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "(Si se prefiere, esta es la definición de <math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.)"
          },
          {
           "mota": "testua",
           "html": "(d) Halla cuáles son la ecuación de evolución y las condiciones de contorno que cumplen las funciones <math display=\"inline\"><mi>w</mi></math>. Escribe la solución general correspondiente."
          },
          {
           "mota": "testua",
           "html": "(e) ¿Cuál es el significado físico de <math display=\"inline\"><mi>w</mi></math>? ¿Y el de la otra parte de <math display=\"inline\"><mi>u</mi></math>? ¿Qué son las constantes <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math>?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/7da5c74f62c6008e.svg",
           "zabalera": 201
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "La masa, la longitud propia, el área de la sección transversal y el módulo de Young de la columna homogénea vertical de la figura son <math display=\"inline\"><mi>m</mi></math>, <math display=\"inline\"><mi>L</mi></math>, <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>E</mi></math>, respectivamente. Calcula cuáles son, a cada altura <math display=\"inline\"><mi>z</mi></math>, el esfuerzo y el campo de deformaciones producidos por su peso y por el de la carga <math display=\"inline\"><mi>M</mi></math>. ¿Cuál es el cambio total de la longitud?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/31e263640302842a.svg",
           "zabalera": 91
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En un triedro cartesiano el tensor de esfuerzos de un sólido elástico se escribe así (en función de la constante <math display=\"inline\"><mi>C</mi></math>):"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝝉</mi><mo>=</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><mi>x</mi><mi>z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>x</mi><mi>z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>x</mi><mi>z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>y</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "(a) ¿Cómo hay que elegir el elemento infinitesimal <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math> en el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> para que allí el esfuerzo sea normal? (b) Considera ahora el elipsoide de revolución dado por la ecuación <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msup><mi>z</mi><mn>2</mn></msup><mo>=</mo><mn>5</mn></mrow></math>. ¿En qué punto del elipsoide desaparece el esfuerzo cortante? (c) ¿Y el esfuerzo total?"
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
       "html": "<strong>La caída de una barra elástica.</strong>"
      },
      {
       "mota": "testua",
       "html": "«Una barra elástica homogénea se ha colgado de un extremo en vertical. Si se corta la cuerda, ¿serán iguales al principio las aceleraciones de todos los puntos de la barra?», pregunta el profesor."
      },
      {
       "mota": "testua",
       "html": "«¡Sí, señor! —responde Peru, el sabelotodo—. Según el principio de equivalencia de Einstein, en un campo gravitatorio homogéneo todas las partículas caen con la misma aceleración.»"
      },
      {
       "mota": "testua",
       "html": "«Pero en la solución del problema 78 del libro [23] he leído que las partículas de abajo se moverán con aceleración <math display=\"inline\"><mi>g</mi></math> y las de arriba más deprisa», dice Maitane."
      },
      {
       "mota": "testua",
       "html": "«Claro —dice Eneritz—, como vimos en el problema 10.16, abajo no hay tensión y las partículas de allí sufrirán solo el peso. Arriba, en cambio, la tensión es máxima y, por tanto, la fuerza total y la aceleración son mayores.»"
      },
      {
       "mota": "testua",
       "html": "¿Tú qué crees?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<strong>La caída de una barra elástica, otra vez.</strong>"
          },
          {
           "mota": "testua",
           "html": "Estudiemos cuantitativamente el problema 10.25. Para designar los puntos de la barra, usaremos la abscisa <math display=\"inline\"><mi>x</mi></math> que tiene cada punto <math display=\"inline\"><mi>P</mi></math> cuando la barra no está deformada, como se indica en la parte a) de la figura. La densidad de la barra y el módulo de Young son <math display=\"inline\"><mi>ρ</mi></math> y <math display=\"inline\"><mi>E</mi></math>, respectivamente. Mientras está colgada (cuando <math display=\"inline\"><mrow><mi>t</mi><mo>&lt;</mo><mn>0</mn></mrow></math>), la deformación <math display=\"inline\"><mrow><msub><mi>u</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es la del problema 10.16. Tras cortar la cuerda (<math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math>), el estudio es más fácil en el sistema de referencia que cae con aceleración <math display=\"inline\"><mi>g</mi></math>, pues allí puede usarse el estudio de la sección 9.6. Demuestra que en ese sistema el campo de deformaciones se escribe así, con un <math display=\"inline\"><mi>v</mi></math> adecuado que debes calcular, en el intervalo de tiempo <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>t</mi><mo>&lt;</mo><mi>L</mi><mi>/</mi><mi>v</mi></mrow></math>:"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><msup><mi>u</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>u</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mn>2</mn></msup><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&gt;</mo><mi>v</mi><mi>t</mi><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&lt;</mo><mi>v</mi><mi>t</mi><mo>&lt;</mo><mi>L</mi><mi>.</mi></mtd></mtr></mtable></mrow></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "Usa dos ideas físicas sencillas para calcular las funciones <math display=\"inline\"><mi>f</mi></math> y <math display=\"inline\"><mi>h</mi></math>: que la barra no se rompe (y, por tanto, que la deformación <math display=\"inline\"><msup><mi>u</mi><mo>*</mo></msup></math> es continua en el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>v</mi><mi>t</mi></mrow></math>) y que en ese sistema de referencia el centro de masas está en reposo. Calcula el campo de deformaciones <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> medido en el laboratorio, el campo de esfuerzos <math display=\"inline\"><mrow><mi>τ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la velocidad y la aceleración de los puntos. Comenta el método que usa este sistema de partículas para ganar momento lineal."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/ca77e49bf8febd3d.svg",
           "zabalera": 191
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "El cubo homogéneo e isótropo de la figura está en equilibrio, bajo los esfuerzos que se muestran. El módulo de Young y el coeficiente de Poisson son <math display=\"inline\"><mi>E</mi></math> y <math display=\"inline\"><mi>σ</mi></math>, respectivamente."
          },
          {
           "mota": "testua",
           "html": "(a) Calcula los tensores de esfuerzos y de deformaciones, (b) la deformación unitaria del volumen, (c) las deformaciones unitarias de las diagonales principales. (d) ¿En qué dirección es cero la deformación unitaria longitudinal? (e) ¿Cómo hay que elegir el elemento infinitesimal <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math> para que el esfuerzo total que sufre sea nulo? (f) ¿Y para que el esfuerzo que sufre sea normal? (g) ¿Y para que el esfuerzo que sufre sea tangente?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/30ef2e6d4aea7431.svg",
           "zabalera": 147
          }
         ]
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
       "html": "Un cubo homogéneo e isótropo está en equilibrio bajo los esfuerzos aplicados en los lados. Si los ejes cartesianos se eligen en las direcciones de las aristas del cubo, el tensor de deformaciones se escribe así:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mfrac><mi>τ</mi><mi>E</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>σ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>σ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "(a) Dibuja los esfuerzos aplicados en los lados. (b) Calcula la deformación unitaria del volumen. (c) ¿Cómo hay que elegir el elemento infinitesimal <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math> para que el esfuerzo que sufre sea normal?"
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
       "html": "¿Puede un sólido homogéneo e isótropo estar en tensión en un punto y en compresión en otro? ¿Por qué?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "La barra de la figura gira en el plano horizontal con velocidad angular grande y constante <math display=\"inline\"><mi>ω</mi></math>. Las densidades <math display=\"inline\"><mi>ρ</mi></math> y las áreas de la sección transversal <math display=\"inline\"><mi>A</mi></math> de las dos mitades homogéneas de la barra son iguales y los módulos de Young <math display=\"inline\"><msub><mi>E</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>E</mi><mn>2</mn></msub></math>. Halla el esfuerzo <math display=\"inline\"><mrow><mi>τ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y el campo de deformaciones <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. ¿Cuándo se alarga más, cuando <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><msub><mi>E</mi><mn>2</mn></msub><mi>/</mi><mn>2</mn></mrow></math> o cuando <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><msub><mi>E</mi><mn>2</mn></msub></mrow></math>?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/098921d9d12e1611.svg",
           "zabalera": 191
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "El paralelepípedo de la figura está en equilibrio bajo las fuerzas aplicadas. ¿Cómo debe ser el cociente <math display=\"inline\"><mrow><msup><mi>F</mi><mo>′</mo></msup><mi>/</mi><mi>F</mi></mrow></math> para que la deformación del volumen sea nula? ¿Cuál es entonces la deformación unitaria de las diagonales principales?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/f4e6a285e82affbb.svg",
           "zabalera": 202
          }
         ]
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
       "html": "Calcula la tensión de la cuerda del problema 4.134 y comprueba que es cero en los dos extremos de la cuerda. (La densidad de la cuerda es <math display=\"inline\"><mi>ρ</mi></math>.) ¿Dónde es máxima la tensión? ¿Puede ser de acero la cuerda, si gira alrededor de la Tierra? ¿Y un nanotubo de carbono, si su densidad es <math display=\"inline\"><mrow><mn>1</mn><mspace width=\"0.167em\"></mspace><mn>300</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg m</mtext></mrow><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math> y su resistencia 63 GPa?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>El gancho celeste.</strong>"
      },
      {
       "mota": "testua",
       "html": "Sobre un punto del ecuador hay un cable uniforme vertical, sin ataduras, en equilibrio relativo. ¿Cuál es la longitud del cable? ¿Dónde es máxima la tensión del cable? ¿Puede ser de acero? ¿Y el nanotubo del problema 10.32?"
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>smallcaps[Cinemática de fluidos]</strong>"
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
       "html": "El campo de velocidades de un fluido se escribe como <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>z</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> en coordenadas cartesianas, en función de la constante <math display=\"inline\"><mi>C</mi></math>. Halla las líneas de corriente, la velocidad de dilatación, la vorticidad y la aceleración."
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
       "html": "El campo de velocidades de un fluido"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>ω</mi><mi>ρ</mi><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>ρ</mi><mo>≤</mo><mi>R</mi><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mrow><mi>ω</mi><msup><mi>R</mi><mn>2</mn></msup></mrow><mi>ρ</mi></mfrac><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>ρ</mi><mo>≥</mo><mi>R</mi></mtd></mtr></mtable></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "se escribe así en coordenadas cilíndricas, en función de las constantes positivas <math display=\"inline\"><mi>ω</mi></math> y <math display=\"inline\"><mi>R</mi></math>. Halla las líneas de corriente, la velocidad de dilatación, la vorticidad y la aceleración."
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
       "html": "El campo de velocidades de un fluido"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mfrac><mi>C</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "se escribe así en coordenadas esféricas, en función de la constante <math display=\"inline\"><mi>C</mi></math>, para los valores <math display=\"inline\"><mrow><mi>r</mi><mo>&gt;</mo><mn>0</mn></mrow></math>. Halla las líneas de corriente, la velocidad de dilatación, la vorticidad y la aceleración."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "El cambio del diámetro de la sección de un tubo convergente es lineal. El fluido que fluye por su interior es ideal e incompresible. Si el caudal es <math display=\"inline\"><mi>Q</mi></math>, ¿cuál será la aceleración longitudinal a la distancia <math display=\"inline\"><mi>x</mi></math> del punto en que el diámetro empieza a cambiar? <em>Observación</em>: Supón, en buena aproximación, que la componente longitudinal de la velocidad no depende de la distancia medida desde el centro: <math display=\"inline\"><mrow><mi>∂</mi><msub><mi>v</mi><mi>x</mi></msub><mi>/</mi><mi>∂</mi><mi>y</mi><mo>≈</mo><mi>∂</mi><msub><mi>v</mi><mi>x</mi></msub><mi>/</mi><mi>∂</mi><mi>z</mi><mo>≈</mo><mn>0</mn></mrow></math>. (Esta aproximación es buena cuando <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>r</mi><mn>2</mn></msub><mo>≪</mo><mi>l</mi></mrow></math>.)"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/3bd08655199de550.svg",
           "zabalera": 182
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 3,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tienes que cruzar un patio, no tienes paraguas y llueve, sin viento. Para mojarte lo menos posible, ¿cómo irás, corriendo o andando?"
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>smallcaps[Hidrostática]</strong>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "El tubo vertical de la figura es un acelerómetro lleno de un líquido de densidad <math display=\"inline\"><mi>ρ</mi></math>. Expresa la aceleración <math display=\"inline\"><mi>a</mi></math> mediante los demás parámetros, cuando el sistema ha llegado al equilibrio dinámico."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/11460e53ac7d6bfd.svg",
           "zabalera": 190
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<strong>La paradoja hidrostática.</strong>"
          },
          {
           "mota": "testua",
           "html": "«Los dos recipientes cerrados idénticos de la figura están llenos de agua. En sus bases, como la altura del agua que tienen encima es la misma, la presión es la misma y, por tanto, en la base más ancha del de la izquierda se ejerce una fuerza mayor. Por tanto, el peso del recipiente de la izquierda es mayor. Por otra parte, eso es imposible, pues los dos recipientes son idénticos. Por tanto, la ley fundamental de la hidrostática está mal.» ¿Tú qué crees?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/aeb0556fe79a7964.svg",
           "zabalera": 205
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "La válvula de la cisterna de agua de la figura es una esfera de masa despreciable que tapa el orificio circular del fondo. El círculo de contacto entre la esfera y el orificio define el ángulo <math display=\"inline\"><mi>φ</mi></math> medido desde la vertical y la superficie del agua está a la distancia <math display=\"inline\"><mi>h</mi></math> del punto superior de la esfera."
          },
          {
           "mota": "testua",
           "html": "(a) Calcula la presión que el agua ejerce en los puntos de la esfera. (b) Halla la fuerza vertical total que sufre la esfera. ¿Puede calcularse usando el principio de Arquímedes? (c) ¿Cuál es esa fuerza vertical en el límite <math display=\"inline\"><mrow><mi>φ</mi><mo>→</mo><mi>π</mi></mrow></math> (es decir, cuando no hay orificio)? (d) ¿Cómo debe ser la altura <math display=\"inline\"><mi>h</mi></math> cuando <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>3</mn><mi>π</mi><mi>/</mi><mn>4</mn></mrow></math>, para que el agua no se vierta por el orificio?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/0a1eff497e789ae3.svg",
           "zabalera": 122
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
       "mota": "testua",
       "html": "<strong>FIGURA 10.41</strong>  Vaso colocado boca abajo (véase el problema 10.42)."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hay agua en un vaso y la boca se tapa con un cartón fino. Después de poner el vaso boca abajo, si se suelta el cartón, no cae: el agua se queda dentro (véanse las fotografías de la figura 10.41). ¿Cómo puede explicarse este fenómeno?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Un recipiente lleno de agua baja por una pendiente. Si el plano inclinado es muy largo y el coeficiente de rozamiento entre el plano y el recipiente es <math display=\"inline\"><mrow><mi>μ</mi><mo>&lt;</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>, ¿cuál será el ángulo <math display=\"inline\"><mi>φ</mi></math> entre la superficie del agua y la horizontal?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/78b6f8e261d8d93e.svg",
           "zabalera": 148
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<strong>¿Verdadero o falso?</strong>"
          },
          {
           "mota": "testua",
           "html": "«Tras mezclar bien el aceite y el agua en el recipiente de la figura, se ha medido la presión del fondo. Dejando el recipiente en reposo, cuando se han separado el aceite y el agua, la presión que se mide en el fondo es menor.»"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/8336e4fa5776862c.svg",
           "zabalera": 80
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<strong>El modelo estelar más sencillo (I).</strong>"
          },
          {
           "mota": "testua",
           "html": "Una esfera homogénea de un fluido está en equilibrio hidrostático, en el espacio vacío, muy lejos de todos los demás cuerpos. La masa del fluido es <math display=\"inline\"><mi>m</mi></math> y el radio de la esfera <math display=\"inline\"><mi>R</mi></math>. Cuando se le pidió calcular la presión, un estudiante respondió así:"
          },
          {
           "mota": "testua",
           "html": "«Consideremos la capa esférica infinitesimal entre los radios <math display=\"inline\"><mi>r</mi></math> y <math display=\"inline\"><mrow><mi>r</mi><mo>+</mo><mi>d</mi><mi>r</mi></mrow></math>. En la superficie interior la fuerza elástica hacia fuera es <math display=\"inline\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y en la exterior la fuerza hacia dentro es <math display=\"inline\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>d</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>4</mn><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>d</mi><mi>r</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. Además, tenemos el peso <math display=\"inline\"><mrow><mi>ρ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mi>d</mi><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi></mrow></math>. En consecuencia, la condición de equilibrio es esta:"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mn>4</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>4</mn><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>d</mi><mi>r</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>d</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>4</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mi>ρ</mi><mi>g</mi><mi>d</mi><mi>r</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "Si aquí hacemos el desarrollo de Taylor y tenemos en cuenta que el módulo del campo gravitatorio es <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>π</mi><mi>G</mi><mi>ρ</mi><mi>r</mi></mrow></math>, se obtiene esto:"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>p</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>r</mi><mi>d</mi><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>π</mi><mi>G</mi><msup><mi>ρ</mi><mn>2</mn></msup><msup><mi>r</mi><mn>3</mn></msup><mi>d</mi><mi>r</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>r</mi><msup><mi>p</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>π</mi><mi>G</mi><msup><mi>ρ</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>π</mi><mi>G</mi><msup><mi>ρ</mi><mn>2</mn></msup><mfrac><mrow><msup><mi>R</mi><mn>4</mn></msup><mo>−</mo><msup><mi>r</mi><mn>4</mn></msup></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>ρ</mi><mo>≡</mo><mfrac><mrow><mn>3</mn><mi>m</mi></mrow><mrow><mn>4</mn><mi>π</mi><msup><mi>R</mi><mn>3</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "Hemos resuelto una ecuación diferencial sencilla de Cauchy y Euler (véase [46]), junto con la condición de contorno que expresa que en la superficie la presión es cero.» (a) El resultado obtenido es inaceptable. ¿Por qué? (b) ¿Qué hay mal en el razonamiento hecho?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/9b0048616744913e.svg",
           "zabalera": 131
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>El modelo estelar más sencillo (II).</strong>"
      },
      {
       "mota": "testua",
       "html": "Resuelve el problema 10.45. ¿Cuál sería la presión máxima si la masa y el radio de la esfera fueran los de la Tierra?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "En un recipiente cilíndrico de radio <math display=\"inline\"><mi>R</mi></math> hay un fluido de densidad <math display=\"inline\"><mi>ρ</mi></math>. Un orificio circular situado a profundidad <math display=\"inline\"><mi>h</mi></math> desde la superficie del fluido está cerrado con un tapón cilíndrico de radio <math display=\"inline\"><mi>r</mi></math>. Calcula el trabajo que hay que hacer para meter el tapón la distancia <math display=\"inline\"><mi>l</mi></math>. <em>Observación</em>: Desprecia el rozamiento."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/8222fac5682767ba.svg",
           "zabalera": 197
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<strong>El cubo de Newton (I).</strong>"
          },
          {
           "mota": "testua",
           "html": "Consideremos el recipiente giratorio del problema 2.55. En reposo, la profundidad del agua es <math display=\"inline\"><mi>h</mi></math> y la densidad del agua <math display=\"inline\"><mi>ρ</mi></math>. Elige coordenadas polares cilíndricas alrededor de la mitad del fondo. (a) Generaliza la ley (10.188) al caso <math display=\"inline\"><mrow><mi>ω</mi><mo>≠</mo><mn>0</mn></mrow></math>. (b) Usa el gradiente (B.18) para calcular el campo de presiones. (c) Recupera el resultado del problema 2.55, calculando la ecuación de la superficie del agua."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/d54d6fd70230457b.svg",
           "zabalera": 114
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
       "mota": "testua",
       "html": "<strong>smallcaps[Principio de Arquímedes]</strong>"
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
       "html": "Sobre el agua de un vaso completamente lleno hay unos cubitos de hielo. Demuestra que al derretirse el hielo no se perderá ni una gota (aunque no hayamos empezado a beber). ¿Qué ocurre si hay burbujas de aire en el hielo? ¿Y si hay granos de arena?"
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
       "html": "Si la octava parte de la altura de un iceberg paralelepipédico está sobre el agua, ¿cuál es su densidad?"
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
       "html": "Según cuenta la historia, Arquímedes descubrió su principio (estando en la bañera) cuando intentaba resolver el problema que le planteó el rey de Siracusa. De hecho, el rey creía que una parte del oro que había dado para hacer la corona se había sustituido por plata. Si el peso de la corona en el aire era de 9.8 N y bajo el agua 9.2 N, ¿cuál era la composición de la corona? <em>Observación</em>: Admite que el volumen de una aleación es la suma de los volúmenes de los componentes."
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>FIGURA 10.42</strong>  Ludión de Descartes (véase el problema 10.52)."
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
       "html": "<strong>El ludión de Descartes.</strong>"
      },
      {
       "mota": "testua",
       "html": "En una botella de agua de plástico flota un sobrecito de kétchup, como se ve en la fotografía 10.42. Tras poner el tapón, si se aprieta la pared de la botella, el sobrecito se sumerge hasta llegar al fondo. ¿Cómo puede explicarse este fenómeno?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Un tronco está sobre el agua como se muestra en la figura. ¿Cuál es la densidad relativa de la madera?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/0600c3c44b422a14.svg",
           "zabalera": 174
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hay una barca en una piscina. Al echar al agua una piedra grande que estaba dentro, ¿qué le ocurrirá al nivel del agua: subirá, bajará o quedará igual?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Se ha introducido verticalmente en el agua un trozo de longitud <math display=\"inline\"><mi>L</mi></math> de un tubo ligero de radio <math display=\"inline\"><mi>r</mi></math>. En el extremo inferior se ha puesto un disco de densidad específica <math display=\"inline\"><mi>ρ</mi></math>, para que el agua no entre en el tubo. ¿Cuál es el valor mínimo de <math display=\"inline\"><mi>L</mi></math> para ello? Si el agua empieza a verterse en el tubo, ¿cuál puede ser la altura máxima <math display=\"inline\"><mi>h</mi></math> para que el disco se quede en su sitio?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/812d55d4c5bf5419.svg",
           "zabalera": 173
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "El volumen de las dos esferas de la figura es de 10 cm<sup>3</sup> y la de arriba flota, aunque la mitad de la de abajo esté sumergida. La masa de la esfera de abajo es el triple que la de arriba. Halla la tensión del hilo que une las dos esferas. ¿Cuál es la masa de cada esfera?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/6486f303ba378edd.svg",
           "zabalera": 139
          }
         ]
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
       "html": "Una pompa de jabón se ha llenado de helio y flota en el aire. ¿Cuál es mayor, la masa del jabón o la del helio?"
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>smallcaps[Fluidos ideales]</strong>"
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
       "html": "Si bajo el ala de un avión la velocidad del aire es <math display=\"inline\"><mrow><mn>90</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>, ¿cuál debe ser la velocidad sobre el ala para que la sustentación sea de <math display=\"inline\"><mrow><mn>1000</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> N m</mtext></mrow><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math>? <em>Observación</em>: Aunque la explicación real de la sustentación no es tan sencilla, usa el teorema de Bernoulli para validar la velocidad."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "En el venturímetro de la figura el caudal del fluido ideal incompresible es <math display=\"inline\"><mi>Q</mi></math>. ¿Cuál será la altura <math display=\"inline\"><mi>h</mi></math>? <em>Observación</em>: Haz aproximaciones."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/56fedf9fcf5112b6.svg",
           "zabalera": 173
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "La sección del tubo de la figura es de 36 cm<sup>2</sup> en la sección <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y de 9 cm<sup>2</sup> en <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math>. En 5 s se vierten 27 litros de agua. Calcula las magnitudes siguientes: (a) La velocidad mayor y la menor del fluido. (b) La diferencia entre las presiones en los puntos <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math>. (c) La diferencia entre las alturas de las columnas de mercurio."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/5a3101aa95f9a1fe.svg",
           "zabalera": 173
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "El área de la sección normal del tubo es de 500 cm<sup>2</sup> en el punto 1 y de 250 cm<sup>2</sup> en el 2. Calcula la presión manométrica medida en el punto 1 y el caudal."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/4d177f4fe8e118c6.svg",
           "zabalera": 202
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<strong>El tubo de Prandtl.</strong>"
          },
          {
           "mota": "testua",
           "html": "En el tubito de la figura puede entrar aire por la boca de la izquierda y por el orificio de arriba. Dentro hay mercurio. ¿Cómo puede usarse el aparato para medir la velocidad respecto del aire?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/2b92c381ca8dfbe9.svg",
           "zabalera": 173
          }
         ]
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
       "html": "Valida la fuerza total que ejerce un huracán de 100 km/h sobre el techo plano horizontal de 70 m<sup>2</sup> de un edificio."
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
       "html": "La presión del aire sobre el agua de una cámara grande es de 2 atm. El coeficiente de caudal del orificio de 10 cm<sup>2</sup> hecho en la pared, a un metro bajo la superficie del agua, es 0.62. ¿Cuál es la velocidad del chorro de agua que sale? Calcula la fuerza horizontal ejercida en la cámara."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>El efecto Magnus.</strong>"
      },
      {
       "mota": "testua",
       "html": "Estudiemos el flujo ideal incompresible irrotacional que rodea a un cilindro que gira con velocidad angular constante alrededor de su eje fijo (véase la figura 10.28). Demuestra que una solución"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>φ</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>φ</mi><mo>=</mo><mi>−</mi><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><mi>r</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "es, si se eligen las coordenadas cilíndricas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> alrededor del eje del cilindro."
      },
      {
       "mota": "testua",
       "html": "Comprueba que"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mi>β</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><mi>r</mi><mi>a</mi></mfrac><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "es solución y deduce que la suma de ambas también es solución. ¿Qué condiciones de contorno se cumplen? Si se usa la suma de las dos soluciones, ¿cuál es la fuerza total que sufre el cilindro? Calcula la circulación del campo de velocidades."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "El diámetro del émbolo del pulverizador de insecticida de la figura es <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>60</mn></mrow></math> mm y el del tubo de entrada <math display=\"inline\"><mi>S</mi></math> es <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>2</mn></mrow></math> mm. Si la altura de este último, medida desde la superficie del insecticida, es <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>90</mn></mrow></math> mm, valida la velocidad mínima del émbolo para que el aire que sale por el otro extremo arrastre el insecticida."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/be7e5e871a9b5b59.svg",
           "zabalera": 160
          }
         ]
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
       "html": "En un flujo estacionario el vector velocidad es constante en cada punto. ¿Puede ser acelerado el movimiento de las partículas del fluido?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En una cisterna de agua cerrada la altura del agua es de <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>1</mn></mrow></math> m y en su superficie la presión manométrica es de <math display=\"inline\"><mrow><msub><mi>p</mi><mi>m</mi></msub><mo>=</mo><mn>1</mn></mrow></math> atm. La base de la cisterna está a <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mn>2</mn></mrow></math> m del suelo y en la pared vertical, a la altura de la base, se hace un orificio circular de área <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math> cm<sup>2</sup>. (a) ¿Dónde golpea el suelo el chorro de agua? (b) ¿Cuál es la fuerza vertical que el chorro ejerce sobre el suelo? (c) ¿Y la fuerza horizontal ejercida sobre la cisterna?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "En la cisterna de agua de la figura, cuando un pistón se mueve con velocidad constante <math display=\"inline\"><mi>v</mi></math> en el tubo horizontal de área <math display=\"inline\"><mi>S</mi></math>, sale agua por el tubo vertical de área <math display=\"inline\"><mi>A</mi></math> hasta la altura que se muestra. Calcula la velocidad <math display=\"inline\"><mi>v</mi></math> y la fuerza <math display=\"inline\"><mi>F</mi></math> que hay que aplicar al pistón (si el rozamiento es despreciable). ¿Cómo hay que elegir el área <math display=\"inline\"><mi>A</mi></math>, sin cambiar <math display=\"inline\"><mi>S</mi></math>, <math display=\"inline\"><msub><mi>h</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>h</mi><mn>2</mn></msub></math>, para que la potencia que hay que hacer en el pistón sea mínima? ¿Y para que sea máxima? Si las áreas <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>S</mi></math> y la altura total <math display=\"inline\"><mrow><msub><mi>h</mi><mn>1</mn></msub><mo>+</mo><msub><mi>h</mi><mn>2</mn></msub></mrow></math> no cambian, ¿cómo hay que elegir el valor de <math display=\"inline\"><msub><mi>h</mi><mn>1</mn></msub></math> para lograr la potencia máxima y la mínima mencionadas?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/772ac5a7584ad30f.svg",
           "zabalera": 153
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "En la pared de la cisterna de agua de la figura se hace un pequeño orificio. ¿Cuál debe ser la altura del orificio para que el alcance horizontal del chorro en el suelo sea máximo? ¿Cuál es el valor de este último? Si se hacen tres orificios, la figura está mal. ¿Por qué? ¿Cuál es la figura real? <em>Observación</em>: Haz hipótesis de simplificación adecuadas (como que la altura <math display=\"inline\"><mi>h</mi></math> del agua cambia muy despacio)."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/0538528a0eb94c50.svg",
           "zabalera": 167
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<strong>El sifón.</strong>"
          },
          {
           "mota": "testua",
           "html": "Este aparato se usa para sacar el líquido de un recipiente sin inclinarlo. Si inicialmente el tubo está lleno de líquido y se mete en el recipiente como se muestra en la figura, el líquido saldrá por el punto <math display=\"inline\"><mi>C</mi></math>, que está más abajo que el extremo <math display=\"inline\"><mi>A</mi></math>. La densidad del líquido es <math display=\"inline\"><mi>ρ</mi></math> y la viscosidad despreciable. ¿Cuál es la velocidad del fluido en el punto <math display=\"inline\"><mi>C</mi></math>? ¿Y la presión en el punto más alto <math display=\"inline\"><mi>B</mi></math>? ¿Cuál es el mayor valor de la altura <math display=\"inline\"><msub><mi>h</mi><mn>1</mn></msub></math> para verter el líquido desde <math display=\"inline\"><mi>C</mi></math>, para los valores conocidos <math display=\"inline\"><mi>d</mi></math> y <math display=\"inline\"><msub><mi>h</mi><mn>2</mn></msub></math>?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/94a1fb6fdc67f446.svg",
           "zabalera": 106
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "La profundidad del amplio estanque de la figura es muy pequeña y se está vaciando poco a poco por el orificio que se muestra. Cuando al arreciar el viento el agua no se vierte, ¿cuál es la velocidad mínima del viento? ¿Qué ocurre si el sentido del viento es el contrario?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/8735a684b0142002.svg",
           "zabalera": 211
          }
         ]
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
       "html": "Cuando no hay viento, ¿cuánto tiempo hace falta para vaciar el estanque del problema 10.72, si su área es <math display=\"inline\"><mi>S</mi></math>, la del orificio <math display=\"inline\"><mi>A</mi></math> y el coeficiente de caudal <math display=\"inline\"><mi>C</mi></math>?"
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
       "html": "El área de la base de un recipiente cilíndrico es <math display=\"inline\"><mi>S</mi></math>. Después de llenarlo de agua, si en la base se hace un orificio pequeño de área <math display=\"inline\"><mi>A</mi></math>, ¿cómo cambiará la velocidad de la superficie del agua? ¿Irá aumentando o disminuyendo? ¿Cuál es el módulo de su aceleración? ¿Por qué hay que admitir que <math display=\"inline\"><mrow><mi>A</mi><mo>≪</mo><mi>S</mi></mrow></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Por los tubos horizontales de la figura fluye un fluido ideal. El caudal es <math display=\"inline\"><mi>Q</mi></math>, la densidad <math display=\"inline\"><mi>ρ</mi></math>, la presión <math display=\"inline\"><mi>p</mi></math> y el área de la sección transversal <math display=\"inline\"><mi>S</mi></math>. Si se desprecia la gravedad, ¿cuáles son las fuerzas que el fluido ejerce en los codos <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math>?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/03f8a587070e9101.svg",
           "zabalera": 193
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "En los dos tubos verticales de la figura la altura del agua es distinta al principio, a causa del diafragma cerrado del punto <math display=\"inline\"><mi>C</mi></math>. En un momento se perfora el diafragma. Aplica el teorema de Bernoulli entre los puntos <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math> y demuestra que se llega a una contradicción. ¿Por qué?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/52d0e62c7e553acb.svg",
           "zabalera": 146
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Tras verter mercurio en el tubo de la figura se le hace girar con velocidad angular constante. La presión atmosférica es <math display=\"inline\"><msub><mi>p</mi><mn>0</mn></msub></math> y la densidad del mercurio <math display=\"inline\"><mi>ρ</mi></math>. El diámetro del tubo es constante y mucho menor que <math display=\"inline\"><mi>L</mi></math>. Cuando se ha logrado el equilibrio relativo, ¿cuáles serán las alturas de las columnas? ¿Y la presión en la abscisa <math display=\"inline\"><mi>x</mi></math>? ¿Puede aplicarse el teorema de Bernoulli entre los puntos 1 y 2? ¿Por qué?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/4f68e78be888bdce.svg",
           "zabalera": 234
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Mientras la cisterna de agua de la figura se vacía por un tubo estrecho, se está llenando por un grifo que tiene arriba. Así, la altura <math display=\"inline\"><mi>h</mi></math> del agua medida desde el tubo no cambia. La masa total de la cisterna, la plataforma y las ruedas es <math display=\"inline\"><mi>m</mi></math>. Calcula el caudal <math display=\"inline\"><mi>Q</mi></math> del grifo y la tensión <math display=\"inline\"><mi>T</mi></math> del cable que une la cisterna a la pared. Si en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> se corta el cable, ¿cuál será la velocidad de la cisterna en los instantes <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math>? <em>Observaciones</em>: Desprecia el rozamiento y supón que el flujo es ideal. La densidad del agua es <math display=\"inline\"><mi>ρ</mi></math>."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/c8b6822274dedf52.svg",
           "zabalera": 160
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "El tubo de la figura tiene simetría cilíndrica pero su radio"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><mrow><mi>d</mi><mi>z</mi></mrow></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ktea</mtext></mrow><mi>.</mi></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "cambia según la ley en coordenadas cilíndricas alrededor del eje de simetría. Comprueba que la solución de las ecuaciones (10.204)–(10.205) es la siguiente:"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mfrac><mrow><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ρ</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ρ</mi><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>r</mi><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>≤</mo><mi>ρ</mi><mo>≤</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "donde <math display=\"inline\"><mi>C</mi></math> es una constante. ¿Qué condición de contorno se cumple en la pared <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mi>r</mi></mrow></math>? ¿Cuál es el caudal?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/00e7b6d853015470.svg",
           "zabalera": 178
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "El depósito de agua de la figura se está vaciando muy despacio por un tubo estrecho vertical. El área de la sección normal del tubo es <math display=\"inline\"><mi>A</mi></math> y la del depósito <math display=\"inline\"><mi>S</mi></math>."
          },
          {
           "mota": "testua",
           "html": "(a) Usa <math display=\"inline\"><mrow><mi>A</mi><mo>≪</mo><mi>S</mi></mrow></math> para calcular la velocidad del agua en el extremo libre del tubo. (b) Valiéndote del resultado anterior, halla la velocidad de la superficie del agua. (c) ¿Cuál será en cada instante la altura máxima de las gotas del chorro? (b) Si inicialmente <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>h</mi></mrow></math>, ¿cuánto tiempo hará falta para que termine el vertido de agua?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/ff6b0f3d0f78a150.svg",
           "zabalera": 149
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Si el chorro de agua que sale de un grifo es estacionario y laminar, ¿cómo es la dependencia <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> entre el radio y la altura <math display=\"inline\"><mi>x</mi></math>, si en la boca del grifo la velocidad del agua es <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>? Con una regla, ¿cómo pueden calcularse <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> y el caudal?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/8397f7cdf37b8290.svg",
           "zabalera": 56
          }
         ]
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
       "html": "<strong>El cubo de Newton (II).</strong>"
      },
      {
       "mota": "testua",
       "html": "Calcula la vorticidad en el caso del recipiente giratorio del problema 10.48."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<strong>El cubo de Newton (III).</strong>"
          },
          {
           "mota": "testua",
           "html": "En el caso del recipiente giratorio de los problemas 2.55 y 10.48, ¿puede aplicarse el teorema de Bernoulli entre los puntos <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math> de la superficie del agua? ¿Por qué?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/e8adf0a2ab2a556b.svg",
           "zabalera": 122
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "El recipiente cilíndrico de la figura está abierto y fijado a una plataforma que puede moverse sin rozamiento sobre el suelo horizontal. El área de la base del recipiente es <math display=\"inline\"><mi>S</mi></math>. La plataforma está unida a la pared mediante una barra elástica horizontal. El módulo de Young de esta es <math display=\"inline\"><mi>E</mi></math> y el área de su sección normal <math display=\"inline\"><mi mathvariant=\"normal\">Σ</mi></math>. El recipiente se está vaciando despacio sobre el suelo por un tubo horizontal de sección normal de área <math display=\"inline\"><mrow><mi>A</mi><mo>≪</mo><mi>S</mi></mrow></math>."
          },
          {
           "mota": "testua",
           "html": "Al poner en marcha el cronómetro, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, la superficie del agua está a la altura <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>h</mi></mrow></math> del tubo de descarga y la plataforma a la distancia <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>d</mi></mrow></math> de la pared. (a) Calcula la velocidad del agua en la boca del tubo, la reacción horizontal ejercida en el recipiente y la distancia <math display=\"inline\"><mi>x</mi></math> entre la pared y la plataforma, en función de los datos <math display=\"inline\"><mi>h</mi></math>, <math display=\"inline\"><mi>d</mi></math>, <math display=\"inline\"><mi>S</mi></math>, <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi mathvariant=\"normal\">Σ</mi></math>, de la densidad <math display=\"inline\"><mi>ρ</mi></math> del agua y de la altura <math display=\"inline\"><mi>y</mi></math>. (b) Calcula las evoluciones temporales <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <em>Observación</em>: Haz aproximaciones razonables."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/873fedb4cc85923e.svg",
           "zabalera": 184
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "En el depósito de la figura se aplica la fuerza constante <math display=\"inline\"><mi>F</mi></math> al pistón de sección <math display=\"inline\"><mi>S</mi></math>. El agua sale por el tubo de sección transversal <math display=\"inline\"><mrow><mi>A</mi><mo>≪</mo><mi>S</mi></mrow></math>. El depósito puede moverse sin rozamiento sobre el suelo horizontal y está unido a la pared rígida mediante una barra. La sección transversal de la barra es <math display=\"inline\"><mi mathvariant=\"normal\">Σ</mi></math>, su longitud <math display=\"inline\"><mi>L</mi></math>, su módulo de Young <math display=\"inline\"><mi>E</mi></math> y su coeficiente de Poisson <math display=\"inline\"><mi>σ</mi></math>. Calcula el esfuerzo que sufre la barra. ¿Es tracción o compresión? ¿Cómo se deforma la barra a partir del estado de equilibrio anterior a la aplicación de <math display=\"inline\"><mi>F</mi></math>? ¿Cómo cambia el volumen? Haz aproximaciones."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/397ec39c5574f2e0.svg",
           "zabalera": 200
          }
         ]
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
       "html": "Un recipiente cilíndrico tiene un orificio en el fondo y un grifo arriba. Si está vacío, con el orificio cerrado y el grifo abierto, necesita un tiempo <math display=\"inline\"><msub><mi>T</mi><mn>1</mn></msub></math> para llenarse. Si está lleno, con el grifo cerrado y el orificio abierto, necesita un tiempo <math display=\"inline\"><msub><mi>T</mi><mn>2</mn></msub></math> para vaciarse. Si la altura del recipiente es <math display=\"inline\"><mi>h</mi></math>, ¿cómo y cuándo puede lograrse una situación estacionaria?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "El reloj de agua (clepsidra) de la figura tiene simetría de revolución alrededor del eje vertical. ¿Cómo debe cambiar la anchura con la altura para que el cambio con el tiempo de la altura del nivel del agua en la mitad de arriba sea uniforme?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/ff378596ede977dd.svg",
           "zabalera": 105
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
       "mota": "testua",
       "html": "<strong>smallcaps[Fluidos viscosos]</strong>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "En el viscosímetro de la figura, <math display=\"inline\"><mrow><mi>h</mi><mo>≪</mo><mi>R</mi></mrow></math> es y se mide el momento de fuerza <math display=\"inline\"><mi>N</mi></math> que hay que aplicar para mantener constante la velocidad angular <math display=\"inline\"><mi>ω</mi></math> del cono de masa <math display=\"inline\"><mi>m</mi></math>. Haciendo hipótesis de simplificación adecuadas, calcula el coeficiente de viscosidad <math display=\"inline\"><mi>η</mi></math> del fluido."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/00cef832bd274ae1.svg",
           "zabalera": 194
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Un fluido viscoso fluye, bajo la acción de la gravedad, entre dos láminas verticales paralelas de gran longitud, como se muestra en la figura. La densidad del fluido es <math display=\"inline\"><mi>ρ</mi></math> y el coeficiente de viscosidad <math display=\"inline\"><mi>η</mi></math>. El flujo es estacionario y laminar. (a) Escribe la ecuación del movimiento de la capa vertical centrada de grosor <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi></mrow></math>, teniendo en cuenta el peso y las fuerzas de viscosidad aplicadas a los dos lados (en los extremos de arriba y de abajo la presión es la atmosférica). Usa condiciones de contorno adecuadas para demostrar que la velocidad del fluido a la distancia <math display=\"inline\"><mi>x</mi></math> del plano medio entre las láminas es esta:"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mi>ρ</mi><mi>g</mi></mrow><mrow><mn>2</mn><mi>η</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "(b) Calcula el caudal que fluye por la superficie horizontal de longitud <math display=\"inline\"><mi>L</mi></math> y grosor <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math>."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/3b89e75d8608eb47.svg",
           "zabalera": 184
          }
         ]
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
       "html": "<strong>La velocidad límite.</strong>"
      },
      {
       "mota": "testua",
       "html": "Considera una pequeña esfera rígida que se mueve en un fluido bajo la acción de la gravedad, y supón que <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℛ</mi><mo>&lt;</mo><mn>0.2</mn></mrow></math>. Demuestra que la velocidad de la esfera tiende a un valor límite que debes calcular. Si consideramos rígidas las gotas de agua de la lluvia, ¿cómo pueden ser para poder aplicar el estudio anterior?"
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
       "html": "<strong>El experimento de Millikan.</strong>"
      },
      {
       "mota": "testua",
       "html": "Usa el problema 10.90 para sustituir por la velocidad límite el radio <math display=\"inline\"><mi>a</mi></math> de la gota en la expresión (10.261) de la carga medida en el experimento de Millikan."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usemos la ecuación de Navier y Stokes en el caso de la figura 10.32. (a) Elige coordenadas polares cilíndricas alrededor del eje de simetría del tubo. (b) Usa la simetría del problema y que el fluido es incompresible, para hallar la estructura del campo de velocidades cuando el flujo es estacionario. (c) Usa la expresión (B.46) para escribir las componentes de la ecuación de Navier y Stokes. (d) Demuestra que <math display=\"inline\"><mrow><mi>∂</mi><mi>p</mi><mi>/</mi><mi>∂</mi><mi>ρ</mi><mo>=</mo><mn>0</mn></mrow></math> y que <math display=\"inline\"><mrow><mi>d</mi><mi>p</mi><mi>/</mi><mi>d</mi><mi>z</mi></mrow></math> es constante. (e) Integra la ecuación de la velocidad y, usando condiciones de regularidad y de contorno adecuadas, recupera la ley de Poiseuille."
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
       "html": "<strong>La viscoelasticidad.</strong>"
      },
      {
       "mota": "testua",
       "html": "Para entender el comportamiento de las rocas sometidas a tensión, Kelvin propuso en 1890 el primer modelo de deformación viscoelástica, uniendo las características de los sólidos elásticos y de los fluidos viscosos. En dos lados opuestos de una roca homogénea paralelepipédica sin deformar empieza a aplicarse el esfuerzo de tracción constante <math display=\"inline\"><mi>τ</mi></math> en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>. En cada instante esa tensión se usa de dos maneras: para mantener la deformación lograda hasta entonces y para vencer la resistencia viscosa (para que la deformación pueda aumentar). Por tanto, si la deformación unitaria es <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la ecuación de evolución del proceso se escribe así (si el módulo de Young es <math display=\"inline\"><mi>E</mi></math> y el coeficiente de viscosidad <math display=\"inline\"><mi>η</mi></math>):"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>τ</mi><mo>=</mo><mi>E</mi><mi>u</mi><mo>+</mo><mi>η</mi><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Halla <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, describe la evolución de la deformación y discute el significado del cociente <math display=\"inline\"><mrow><mi>η</mi><mi>/</mi><mi>E</mi></mrow></math>. Comenta los resultados."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "En un recipiente ancho hay aceite de profundidad <math display=\"inline\"><mi>h</mi></math>. El disco de radio <math display=\"inline\"><mi>R</mi></math> toca la superficie del aceite y gira con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math>. Si la densidad del aceite es <math display=\"inline\"><mi>ρ</mi></math> y el coeficiente de viscosidad <math display=\"inline\"><mi>η</mi></math>, ¿cuál es el momento de fuerza ejercido por el motor? ¿Y la potencia?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/494297eff9e188f8.svg",
           "zabalera": 194
          }
         ]
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
       "html": "Cuando llueve, ¿cuáles caen más deprisa, las gotas grandes o las pequeñas?"
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>smallcaps[Tensión superficial]</strong>"
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
       "html": "El extremo inferior de un capilar está a 10 cm bajo la superficie del agua y dentro el agua ha subido 4 cm. ¿Qué presión hay que aplicar en el extremo superior para formar una burbuja hemisférica en el de abajo?"
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
       "html": "Si se meten en un líquido dos láminas grandes paralelas verticales, ¿cuál es la distancia entre las superficies del líquido interior y exterior? (La distancia entre las láminas es <math display=\"inline\"><mi>d</mi></math> y la densidad del líquido, la tensión superficial y el ángulo de contacto <math display=\"inline\"><mi>ρ</mi></math>, <math display=\"inline\"><mi>γ</mi></math> y <math display=\"inline\"><mi>θ</mi></math>, respectivamente.)"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El grosor del charco que se forma al verter mercurio sobre una superficie plana de vidrio es uniforme y no cambia con el tamaño del charco. Calcula ese grosor."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "En los dos extremos de un tubo se han formado pompas de jabón de radios distintos. Discute cuál de las posibilidades siguientes será la que ocurra: (a) La pompa grande se reducirá hasta que las dos sean iguales. (b) La grande se vaciará hasta desaparecer. (c) La pequeña se vaciará hasta desaparecer. (d) Se quedarán como están. (e) Los radios de las dos empezarán a oscilar."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/a646c297febc853d.svg",
           "zabalera": 150
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Entre dos láminas de vidrio paralelas hay un disco de agua de diámetro <math display=\"inline\"><mi>D</mi></math>. Si la distancia entre las láminas es <math display=\"inline\"><mrow><mi>d</mi><mo>≪</mo><mi>D</mi></mrow></math>, ¿cuál es la fuerza perpendicular que hay que hacer para separar las láminas?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/1ef3a95b33720421.svg",
           "zabalera": 182
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Se pone un lazo de goma en una película líquida. Cuando se rompe la película interior, el lazo se alarga hasta formar una circunferencia de radio <math display=\"inline\"><mi>R</mi></math>. La longitud propia del lazo es <math display=\"inline\"><mi>L</mi></math>, el área de la sección transversal <math display=\"inline\"><mi>S</mi></math> y el módulo de Young <math display=\"inline\"><mi>E</mi></math>. ¿Cuál es la tensión superficial del líquido?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/909227d8ff235ceb.svg",
           "zabalera": 131
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Cuando se mete un capilar vertical en agua a profundidad <math display=\"inline\"><mi>l</mi></math>, la altura de la columna de agua es <math display=\"inline\"><mi>h</mi></math>, como se ve en la figura. Tras tapar el extremo inferior, se saca el capilar del agua. Si ahora se abre de nuevo, ¿cuál será la altura de la columna que quedará <math display=\"inline\"><mi>h</mi></math>?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/feddc3fb525f5d43.svg",
           "zabalera": 199
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Un cubo de hierro, engrasado con parafina, está sobre el agua, con el lado de arriba a la altura de la superficie del agua, como se muestra en la figura. ¿Cuál es la longitud de las aristas del cubo?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/13de16462d1a5158.svg",
           "zabalera": 173
          }
         ]
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
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Se meten en un líquido dos láminas cuadradas verticales paralelas de lado <math display=\"inline\"><mi>a</mi></math>. La densidad de este es <math display=\"inline\"><mi>ρ</mi></math> y la tensión superficial <math display=\"inline\"><mi>γ</mi></math>. Si el ángulo de contacto es <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi></mrow></math>, ¿cuál es la fuerza de atracción entre las placas?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/1d38eb0607da44dd.svg",
           "zabalera": 141
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
       "mota": "testua",
       "html": "<strong>smallcaps[Miscelánea]</strong>"
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
       "html": "Se sumerge un cubo de goma de 20 cm de lado del problema 10.4 en la fosa oceánica más profunda, cerca de las islas Marianas. ¿Cuál será el volumen del cubo a 11000 m? ¿Puede colgarse el cubo de un cable de acero? ¿Por qué?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa la mecánica para resolver esta ecuación en derivadas parciales:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi>a</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>b</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>+</mo><mi>c</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<em>Observación</em>"
      },
      {
       "mota": "testua",
       "html": ": en este caso particular de la <strong>ecuación de advección</strong>, <math display=\"inline\"><mi>a</mi></math>, <math display=\"inline\"><mi>b</mi></math> y <math display=\"inline\"><mi>c</mi></math> son constantes."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa la mecánica para resolver esta ecuación en derivadas parciales:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>v</mi><mi>i</mi></msub><msub><mi>v</mi><mi>j</mi></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mi>i</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstanteak dira.</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "¿Cuál es la diferencia entre esta ecuación de ondas y la habitual (9.5)?"
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
       "html": "Una burbuja de aire de radio <math display=\"inline\"><mi>R</mi></math> parte del reposo hacia la superficie del agua, desde la profundidad <math display=\"inline\"><mrow><mi>H</mi><mo>≫</mo><mi>R</mi></mrow></math>. Valida el calor que se libera en el proceso."
      }
     ]
    }
   ]
  }
 ]
};
