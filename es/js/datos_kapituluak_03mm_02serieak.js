/* JAKINA · kapitulua «B6.4 - Serieen bidezko ebazpena eta metodo hurbilduak (6.-7. gaiak)» (03mm_02serieak), desde edicion2/kapituluak/03mm_02serieak/03mm_02serieak.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["03mm_02serieak"] = {
 "gakoa": "03mm_02serieak",
 "titulua": "JAKINA - B6 - Métodos matemáticos - 4/9",
 "azala": "B6.4 - Resolución mediante series y métodos aproximados (temas 6-7)",
 "azpititulua": "Era I - Herramientas",
 "iturburua": "kapituluak/03mm_02serieak/03mm_02serieak.typ",
 "sarrera": [
  {
   "mota": "iturria",
   "proiektua": "edf_eus",
   "xehetasuna": "Capítulos 6–7 (series, métodos aproximados)",
   "hizkuntza": "eu"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Solución por series de ecuaciones lineales",
   "blokeak": [
    {
     "mota": "ezezaguna",
     "izena": "epigrafea"
    },
    {
     "mota": "testua",
     "html": "En el análisis de un gran número de problemas de física se tiene en algún momento necesidad de resolver —o de analizar las propiedades de las soluciones de— una ecuación lineal de segundo orden. Como vimos en el capítulo 3, la mayor dificultad estriba en hallar una solución particular de la homogénea, ya que a partir de ella es posible escribir las soluciones generales de la homogénea y de la completa mediante cuadraturas. Vimos allí algunos cambios de variables que pueden intentarse, pero no debe esperarse que siempre funcionen, ni mucho menos que la solución pueda escribirse en términos de funciones elementales. De hecho, las ecuaciones lineales homogéneas de segundo orden definen a menudo funciones especiales. En este capítulo veremos cómo pueden hallarse las soluciones de ecuaciones homogéneas de segundo orden en términos de series de potencias, cuya suma es en numerosas ocasiones una función especial."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Repaso de series de potencias",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Por conveniencia, recogemos sin demostración las conocidas propiedades de las series de potencias. Dada la serie de potencias <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup></mrow></math>, si el límite <math display=\"block\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><msub><mi>a</mi><mi>n</mi></msub><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>,</mo></mrow></math> existe o es <math display=\"inline\"><mrow><mi>+</mi><mi>∞</mi></mrow></math>, su valor es el <strong>radio de convergencia</strong> de la serie, de forma que la misma converge absoluta y uniformemente en <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ρ</mi></mrow></math> y diverge para <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&gt;</mo><mi>ρ</mi></mrow></math>. Si <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mn>0</mn></mrow></math> la serie no converge en ningún punto, excepto, quizás, en <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>, y si <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mi>+</mi><mi>∞</mi></mrow></math> converge por doquier."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Puede dar alguna otra expresión para calcular el radio de convergencia?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Sean dos series <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup></mrow></math> y <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>b</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup></mrow></math> que convergen para <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ρ</mi></mrow></math> (podemos elegir <math display=\"inline\"><mi>ρ</mi></math> como el mínimo de sus radios de convergencia). Entonces, para <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ρ</mi></mrow></math>:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Toda serie construida mediante combinaciones lineales con coeficientes constantes <math display=\"inline\"><mi>α</mi></math> y <math display=\"inline\"><mi>β</mi></math> de los coeficientes <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> y <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math> de ambas series converge a la correspondiente combinación de las sumas: <math display=\"block\"><mrow><mi>α</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>β</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><msub><mi>a</mi><mi>n</mi></msub><mo>+</mo><mi>β</mi><msub><mi>b</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mi>.</mi></mrow></math> En particular, las series pueden sumarse y restarse término a término."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "El producto formal de las series converge al producto de las sumas: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>b</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mi>k</mi></msub><msub><mi>b</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> También puede calcularse la serie del cociente, si <math display=\"inline\"><mrow><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≠</mo><mn>0</mn></mrow></math>, pero el cálculo de los coeficientes no es tan simple y la serie resultante puede tener un radio de convergencia inferior a <math display=\"inline\"><mi>ρ</mi></math>."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "La serie es indefinidamente derivable en <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ρ</mi></mrow></math> y sus derivadas pueden calcularse derivando las series término a término: <math display=\"block\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msub><mi>a</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mi>.</mi></mrow></math> Además, los coeficientes de la serie son <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y, por tanto, la serie es su propia serie de Taylor: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Dos series son iguales <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> si y solo si los coeficientes de potencias iguales coinciden: <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>b</mi><mi>n</mi></msub></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "Recordemos también que si <math display=\"inline\"><mrow><mi>ρ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es analítica alrededor de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> y que, como consecuencia de las propiedades que acabamos de revisar, si <math display=\"inline\"><mi>f</mi></math> y <math display=\"inline\"><mi>g</mi></math> son analíticas alrededor de <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>, también lo son <math display=\"inline\"><mrow><mi>α</mi><mi>f</mi><mo>+</mo><mi>β</mi><mi>g</mi></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mi>g</mi></mrow></math> y <math display=\"inline\"><mrow><mi>f</mi><mi>/</mi><mi>g</mi></mrow></math> (con tal de que, en el último caso, <math display=\"inline\"><mrow><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≠</mo><mn>0</mn></mrow></math>). Obviamente, los polinomios son analíticos alrededor de cualquier punto, como lo son <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>. Por el contrario, los radios de convergencia de las series de Taylor de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ν</mi></msup></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> alrededor del origen son finitos (<math display=\"inline\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>). (El lector debería ser capaz de escribir y reconocer sin vacilar las series de potencias de todas estas funciones elementales.)"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle el radio de convergencia y la suma de las siguientes series de potencias: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>f</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>x</mi><mo>−</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mn>4</mn></mfrac><mo>+</mo><mi>⋯</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>f</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mo>−</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>!</mi></mrow></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mrow><mn>6</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mi>⋯</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>f</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>⋯</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>f</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>x</mi><mn>6</mn></msup><mo>+</mo><mfrac><mn>5</mn><mn>16</mn></mfrac><msup><mi>x</mi><mn>8</mn></msup><mo>+</mo><mfrac><mn>3</mn><mn>16</mn></mfrac><msup><mi>x</mi><mn>10</mn></msup><mo>+</mo><mi>⋯</mi></mtd></mtr></mtable></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Soluciones en forma de series",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En el resto del capítulo vamos a considerar el problema de hallar las soluciones de la ecuación <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> en forma de una serie de potencias ordinaria, <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>,</mo></mrow></math> o de una <strong>serie de Frobenius</strong> (26-10-1849, Berlín, Prusia; 3-08-1917, Berlín). Este discípulo de Weierstrass es recordado, aparte de sus trabajos sobre funciones elípticas y ecuaciones diferenciales, por sus importantes contribuciones a la teoría de grupos, incluyendo la teoría de representaciones de grupos finitos, que jugó después un importante papel en mecánica cuántica. alrededor de un cierto punto <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>, que por definición es el producto <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>λ</mi></msup></math> de una serie de potencias por una potencia <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>λ</mi></msup><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>c</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn><mo>,</mo></mrow></math> cuyo exponente <math display=\"inline\"><mi>λ</mi></math> se llama <strong>índice</strong> y puede ser complejo o real, entero o no, positivo, negativo o nulo<span class=\"j-oin\">[Si queremos soluciones reales y <math display=\"inline\"><mi>λ</mi></math> no es un entero, habrá que sustituir <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>λ</mi></msup></math> por <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>λ</mi></msup></math>.]</span>. La introducción del factor <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>λ</mi></msup></math> viene motivada por la experiencia con ecuaciones de Cauchy-Euler como la (3.185), cuyas soluciones <math display=\"inline\"><msup><mi>x</mi><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup></math> y <math display=\"inline\"><msup><mi>x</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup></math> no admiten desarrollos en series de Taylor alrededor de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, pero son series de Frobenius (finitas, en este sencillo caso). Para decidir el tipo de serie que debemos utilizar hay que analizar la naturaleza del punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntos ordinarios y singulares"
    },
    {
     "mota": "testua",
     "html": "Diremos que el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> alrededor del cual quiere hallarse la solución es un <strong>punto ordinario</strong>, si las funciones <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (con el coeficiente de <math display=\"inline\"><msup><mi>y</mi><mo>″</mo></msup></math> puesto igual a la unidad como en (6.11)) son analíticas alrededor de <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>. En caso contrario, <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> es un <strong>punto singular</strong>. Si el punto es singular pero las funciones <math display=\"block\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son analíticas alrededor de <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> (es decir, si <math display=\"inline\"><mi>P</mi></math> y <math display=\"inline\"><mi>Q</mi></math> tienen a lo sumo un polo de primer y segundo orden, respectivamente) el punto se llama <strong>singular regular</strong>. Si ni siquiera esto es cierto, porque <math display=\"inline\"><mi>P</mi></math> o <math display=\"inline\"><mi>Q</mi></math> tienen un polo de orden más alto, el punto es <strong>singular irregular</strong>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Clasifique los puntos singulares de <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para simplificar la notación, supondremos siempre que buscamos una solución alrededor de <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, lo que puede lograrse mediante una traslación trivial (o, si estamos interesados en desarrollos alrededor del punto del infinito, con el cambio de variable independiente <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>t</mi></mrow></math>)."
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Puntos ordinarios",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En este caso los coeficientes <math display=\"inline\"><mi>P</mi></math> y <math display=\"inline\"><mi>Q</mi></math> de la ecuación (6.11) son analíticos alrededor del origen y, por tanto, los desarrollos <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>P</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>Q</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math> son convergentes para <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>ρ</mi></mrow></math> con un <math display=\"inline\"><mrow><mi>ρ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> apropiado. Consideremos la serie (6.12) y sus derivadas: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mrow></math> donde se han hecho dos corrimientos de índices, <math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>n</mi><mo>+</mo><mn>2</mn></mrow></math>, para lograr que las series vuelvan a empezar por <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>. Si se ensayan dichas series en la ecuación (6.11) y se tienen en cuenta los desarrollos (6.16) y la propiedad (6.3) se obtiene lo siguiente:"
    },
    {
     "mota": "testua",
     "html": "Q y &amp;= sum_(n=0)^infinity [sum_(k=0)^n Q_(n-k) c_k] x^n, <br>P y&#x27; &amp;= sum_(n=0)^infinity [sum_(k=0)^n (k+1) P_(n-k) c_(k+1)] x^n, <br>y&#x27;&#x27; &amp;= sum_(n=0)^infinity (n+2)(n+1) c_(n+2) x^n, <code class=\"formula-ez\"></code>"
    },
    {
     "mota": "zentratua",
     "blokeak": []
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>P</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>Q</mi><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>P</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><msub><mi>c</mi><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>Q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><msub><mi>c</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><msup><mi>x</mi><mi>n</mi></msup><mi>.</mi></mrow></math> Por tanto, para que la ecuación se satisfaga, deben cumplirse las siguientes condiciones para los valores <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>P</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><msub><mi>c</mi><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>Q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><msub><mi>c</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> y, en consecuencia, tras elegir como se quiera las constantes <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> y <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math>, todas las otras pueden calcularse a una usando la última expresión. En efecto, si ya conocemos <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>,</mo><msub><mi>c</mi><mn>1</mn></msub><mo>,</mo><msub><mi>c</mi><mn>2</mn></msub><mi>…</mi><mo>,</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></mrow></math>, el siguiente coeficiente es <math display=\"block\"><mrow><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>P</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><msub><mi>c</mi><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>Q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><msub><mi>c</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Nótese que en el término de la derecha solo aparecen coeficientes conocidos con anterioridad. Aunque aquí no lo demostremos (véase, por ejemplo, [4]), la serie así construida es convergente para <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>ρ</mi></mrow></math> y, puesto que contiene las constantes arbitrarias <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> y <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math>, es la solución general de la ecuación (6.11)."
    },
    {
     "mota": "testua",
     "html": "En resumen, si el origen es un punto ordinario, la solución general puede expresarse en forma de la serie de potencias ordinaria (6.17), donde <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> y <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math> son constantes arbitrarias y el resto de los coeficientes vienen dados por la recurrencia (6.22). La serie converge en los puntos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>ρ</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "El ejemplo más sencillo es el del oscilador armónico, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, para el que todos los puntos son ordinarios. Podríamos usar las expresiones que acabamos de obtener, pero basta recordar simplemente que la solución viene dada por una serie de potencias ordinaria (6.17). Sustituyendo (6.17) y (6.19) en la ecuación del oscilador obtenemos que el coeficiente de <math display=\"inline\"><msup><mi>x</mi><mi>n</mi></msup></math> es <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>…</mi></mrow></math> Por tanto, podemos elegir <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> y <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math> sin restricciones y <math display=\"block\"><mrow><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>c</mi><mi>n</mi></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>…</mi></mrow></math> Como en esta recurrencia aparecen <math display=\"inline\"><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub></math> y <math display=\"inline\"><msub><mi>c</mi><mi>n</mi></msub></math>, pero no falta <math display=\"inline\"><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></math>, los términos pares, <math display=\"inline\"><mrow><mi>n</mi><mo>+</mo><mn>2</mn><mo>=</mo><mn>2</mn><mi>k</mi></mrow></math>, e impares, <math display=\"inline\"><mrow><mi>n</mi><mo>+</mo><mn>2</mn><mo>=</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></math>, se separan naturalmente y las correspondientes recurrencias se deshacen fácilmente: <math display=\"block\"><mrow><msub><mi>c</mi><mrow><mn>2</mn><mi>k</mi></mrow></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>c</mi><mrow><mn>2</mn><mi>k</mi><mo>−</mo><mn>2</mn></mrow></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><msub><mi>c</mi><mrow><mn>2</mn><mi>k</mi><mo>−</mo><mn>4</mn></mrow></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>⋯</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><mfrac><msub><mi>c</mi><mn>0</mn></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>c</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>c</mi><mrow><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><msub><mi>c</mi><mrow><mn>2</mn><mi>k</mi><mo>−</mo><mn>3</mn></mrow></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>⋯</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><mfrac><msub><mi>c</mi><mn>1</mn></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math> Sustituyendo estos valores obtenemos la solución esperada <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>c</mi><mn>0</mn></msub><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi></mrow></msup><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>=</mo><msub><mi>c</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo></mrow></math>, ya que las series son las del coseno y el seno."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle por el método de series la solución de <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Compruebe el resultado usando la transformación de Liouville del ejercicio 3.22."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación de Hermite"
    },
    {
     "mota": "testua",
     "html": "Para estudiar la ecuación de Schrödinger del oscilador armónico <math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>ψ</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mi>ψ</mi><mo>=</mo><mi>E</mi><mi>ψ</mi><mo>,</mo></mrow></math> conviene utilizar las siguientes variables adimensionales: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><mfrac><mi>x</mi><msub><mi>x</mi><mn>0</mn></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mn>0</mn></msub><mo>≡</mo><msqrt><mfrac><mi>ħ</mi><mrow><mi>m</mi><mi>ω</mi></mrow></mfrac></msqrt><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>ε</mi><mo>=</mo><mfrac><mi>E</mi><msub><mi>E</mi><mn>0</mn></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>E</mi><mn>0</mn></msub><mo>≡</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>x</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ħ</mi><mi>ω</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que con estas variables la ecuación del oscilador se escribe como <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>ψ</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ε</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ψ</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>, donde hemos simplificado la notación eliminando la tilde sobre la <math display=\"inline\"><mi>x</mi></math>. Ensaye una serie de potencias para <math display=\"inline\"><mi>ψ</mi></math> y demuestre que los coeficientes deben satisfacer la recurrencia: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mi>ε</mi><msub><mi>c</mi><mi>n</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mi>ε</mi><msub><mi>c</mi><mi>n</mi></msub><mo>−</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mi>n</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esta recurrencia, a diferencia de las que hemos encontrado hasta ahora, es de tres puntos, ya que el coeficiente <math display=\"inline\"><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub></math> depende no de uno sino de dos coeficientes anteriores. En general, es más difícil deshacer este tipo de recurrencias que las que son de dos puntos, aunque veremos en el problema 6.13 un caso en que puede hacerse con relativa facilidad. En la práctica, las recurrencias de tres puntos aparecen, a veces, cuando el punto del infinito <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> es singular irregular, como en este caso, y factorizando el comportamiento en el infinito puede suceder que la nueva recurrencia sea de dos puntos. En este ejemplo, para valores muy grandes de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> el comportamiento asintótico de las soluciones es del tipo <math display=\"inline\"><mrow><mi>ψ</mi><mo>∼</mo><msup><mi>e</mi><mrow><mi>±</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>, ya que si sustituimos esto en la ecuación obtenemos <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>±</mo><mn>1</mn><mo>+</mo><mi>ε</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>±</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> y los términos dominantes (proporcionales a <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>±</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>) se cancelan. Esto sugiere que la mayor parte de las soluciones se comportarán como <math display=\"inline\"><mrow><mi>ψ</mi><mo>∼</mo><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> (lo que da lugar a soluciones inaceptables como funciones de onda, que deben tender a cero en el infinito), pero que puede haber casos en que sean como <math display=\"inline\"><mrow><mi>ψ</mi><mo>∼</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>. Para explorar con más detalle esta posibilidad, el cambio evidente <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es útil."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que haciendo el cambio de variables <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>y</mi></mrow></math> y usando el nuevo parámetro <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>ε</mi><mo>−</mo><mn>1</mn></mrow></math> la ecuación del oscilador armónico cuántico se reduce a la ecuación de Hermite (24-12-1822, Dieuze, Francia; 14-01-1901, París). A él se debe la primera prueba de que $e$ es trascendente. También trabajó en funciones elípticas y la ecuación de quinto grado. Llevan su nombre una ecuación diferencial, unos polinomios, un método de interpolación y un tipo de matrices. Los polinomios de Hermite y las matrices hermíticas resultaron después de capital importancia en mecánica cuántica.: <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como los coeficientes de <math display=\"inline\"><msup><mi>y</mi><mo>′</mo></msup></math> e <math display=\"inline\"><mi>y</mi></math> son polinómicos, todos los puntos (y en particular el origen) son ordinarios. Al sustituir la serie de potencias (6.17) y sus derivadas (6.18)–(6.19) e igualar los coeficientes de <math display=\"inline\"><msup><mi>x</mi><mi>n</mi></msup></math> obtenemos <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>−</mo><mn>2</mn><mi>n</mi><msub><mi>c</mi><mi>n</mi></msub><mo>+</mo><mi>λ</mi><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>…</mi></mrow></math> Como esperábamos, <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> y <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math> pueden elegirse sin condiciones y los demás coeficientes vienen dados por <math display=\"block\"><mrow><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>n</mi><mo>−</mo><mi>λ</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>c</mi><mi>n</mi></msub><mi>.</mi></mrow></math> De nuevo se separan las potencias pares e impares y se obtiene <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>c</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mfrac><mi>λ</mi><mn>2</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mfrac><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>4</mn><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><mfrac><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>8</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>6</mn><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mn>6</mn></msup><mo>−</mo><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>+</mo><mfrac><mrow><mn>2</mn><mo>−</mo><mi>λ</mi></mrow><mrow><mn>3</mn><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>5</mn><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mn>5</mn></msup><mo>+</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>10</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>7</mn><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mn>7</mn></msup><mo>+</mo><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> que puede escribirse en forma más compacta usando la función gamma de Euler descrita en el apartado D.5, con la que se obtiene que la solución es <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>c</mi><mn>0</mn></msub><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mi>λ</mi><mn>4</mn></mfrac><mo>,</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub><mi>x</mi><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mo>−</mo><mi>λ</mi></mrow><mn>4</mn></mfrac><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> en términos de las funciones de Kummer del problema 6.22 y el apartado D.10."
    },
    {
     "mota": "testua",
     "html": "Para valores grandes de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> los términos más importantes serán los correspondientes a valores altos de <math display=\"inline\"><mi>n</mi></math>, para los que se tiene que la recurrencia (6.38) <math display=\"block\"><mrow><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>≈</mo><mfrac><mn>2</mn><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></mfrac><msub><mi>c</mi><mi>n</mi></msub><mo>≈</mo><mfrac><mn>2</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><msub><mi>c</mi><mi>n</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>→</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> cuya solución para los índices pares es <math display=\"inline\"><mrow><msub><mi>c</mi><mrow><mn>2</mn><mi>k</mi></mrow></msub><mo>=</mo><msub><mi>c</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi>/</mi><mi>k</mi><mo>=</mo><msub><mi>c</mi><mn>0</mn></msub><mi>/</mi><mi>k</mi><mi>!</mi></mrow></math> y corresponde a <math display=\"inline\"><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que algo parecido ocurre con los coeficientes impares para <math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto, tal y como esperábamos, el comportamiento asintótico de la mayoría de las soluciones es <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>y</mi><mo>∼</mo><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> y para que la función de onda, <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>y</mi></mrow></math>, no diverja en el infinito y sea de cuadrado sumable hay que limitarse a considerar las soluciones polinómicas que se obtendrán cuando una de las series de arriba se corte y se elija el coeficiente <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> o <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math> de la otra igual a 0. Vemos que eso solo es posible cuando"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>,    <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>,    <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>c</mi><mn>0</mn></msub></mrow></math>,"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>,    <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>,    <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><mi>x</mi></mrow></math>,"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>4</mn></mrow></math>,    <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>,    <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>c</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>6</mn></mrow></math>,    <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>,    <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "etc."
     ]
    },
    {
     "mota": "testua",
     "html": "La existencia de soluciones aceptables solo para valores discretos del parámetro <math display=\"inline\"><mi>λ</mi></math> es la razón matemática de la cuantización de la energía del oscilador."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿A qué valores de la energía <math display=\"inline\"><mi>E</mi></math> corresponden las soluciones polinómicas de la ecuación de Hermite?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Eligiendo adecuadamente los coeficientes en las soluciones polinómicas, se obtienen los <strong>polinomios de Hermite</strong>, que vienen dados por la relación de recurrencia <math display=\"block\"><mrow><msub><mi>H</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>H</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>H</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>,</mo></mrow></math> o por la fórmula de Rodrigues (1794-1851). La única contribución de importancia a las matemáticas de este banquero francés, más interesado por la organización científica de la sociedad, fue la fórmula de Rodrigues para los polinomios de Legendre, aunque por extensión se aplica el mismo nombre a fórmulas similares. del apartado D.12.2. Otras interesantes propiedades de estos polinomios pueden hallarse, por ejemplo, en las tablas de Abramowitz y Stegun [35]."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Ecuación de Bessel",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Tras separar variables en muchas ecuaciones diferenciales en derivadas parciales de problemas físicos con simetría cilíndrica, aparece la ecuación de Bessel (22-07-1784, Minden, Westfalia; 17-03-1846, Königsberg, Prusia, Kaliningrad en la Rusia actual). Destacó tanto por su labor de observación en astronomía (fue el primero en determinar la distancia de una estrella fija y demostró que Sirio tiene una compañera oscura) como por sus contribuciones teóricas a la mecánica celeste. Introdujo las funciones que llevan su nombre ---aunque en casos particulares habían sido utilizadas antes por Jacob y Daniel Bernoulli, Euler y Lagrange--- en el estudio perturbativo del problema de tres cuerpos. <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Supongamos que ensayamos la serie de potencias (6.17): <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>−</mi><msup><mi>ν</mi><mn>2</mn></msup><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi>ν</mi><mn>2</mn></msup><msub><mi>c</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mtd></mtr></mtable></math>"
    },
    {
     "mota": "zentratua",
     "blokeak": []
    },
    {
     "mota": "testua",
     "html": "&amp;quad sum_(n=2)^infinity [(n^2 - nu^2) c_n + c_(n-2)] x^n. <code class=\"formula-ez\"></code>"
    },
    {
     "mota": "testua",
     "html": "Para que se cumpla la ecuación tienen que anularse los coeficientes de todas las potencias <math display=\"inline\"><msup><mi>x</mi><mi>n</mi></msup></math>: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>−</mi><msup><mi>ν</mi><mn>2</mn></msup><msub><mi>c</mi><mn>0</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>c</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>c</mi><mi>n</mi></msub><mo>+</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi></mtd></mtr></mtable></math> La discusión de este resultado es sencilla. En primer lugar, en el caso <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> es arbitraria, pero hay que elegir <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> y solo logramos una solución. Cuando <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math> hay que hacer <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math> es arbitraria. Igualmente, si <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mi>±</mi><mi>k</mi><mo>≡</mo><mi>±</mi><mn>2</mn><mo>,</mo><mi>±</mi><mn>3</mn><mo>,</mo><mi>…</mi></mrow></math> hay que tomar <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mi>⋯</mi><mo>=</mo><msub><mi>c</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><msub><mi>c</mi><mi>k</mi></msub></math> será arbitraria. Por tanto, si <math display=\"inline\"><mi>ν</mi></math> es entero se encuentra una solución (y no dos) ensayando una serie de potencias. Pero si <math display=\"inline\"><mi>ν</mi></math> no es entero, obtenemos solo la solución nula <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mi>⋯</mi><mo>=</mo><mn>0</mn></mrow></math>. En consecuencia, ensayando una serie de potencias no encontraremos ninguna solución en la mayor parte de los casos."
    },
    {
     "mota": "testua",
     "html": "La razón del fracaso del método de la serie de potencias estriba en que el origen no es un punto ordinario, sino singular regular. Hay, por tanto, que ensayar una serie de Frobenius y sus derivadas: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> Usando estas series obtenemos <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>−</mi><msup><mi>ν</mi><mn>2</mn></msup><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi>ν</mi><mn>2</mn></msup><msub><mi>c</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mtd></mtr></mtable></math>"
    },
    {
     "mota": "zentratua",
     "blokeak": []
    },
    {
     "mota": "testua",
     "html": "&amp;quad sum_(n=2)^infinity {[(lambda + n)^2 - nu^2] c_n + c_(n-2)} x^(lambda + n). <code class=\"formula-ez\"></code>"
    },
    {
     "mota": "testua",
     "html": "En consecuencia, los coeficientes de <math display=\"inline\"><msup><mi>x</mi><mi>λ</mi></msup></math>, <math display=\"inline\"><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mn>1</mn></mrow></msup></math> y <math display=\"inline\"><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup></math> de la solución son, respectivamente: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>c</mi><mn>0</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>c</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>c</mi><mi>n</mi></msub><mo>+</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi></mtd></mtr></mtable></math> La primera de estas condiciones es la <strong>ecuación indicial</strong>, <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>=</mo><msup><mi>ν</mi><mn>2</mn></msup></mrow></math>, y nos da los <strong>índices</strong> <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>ν</mi></mrow></math>, que son los únicos valores de <math display=\"inline\"><mi>λ</mi></math> para los que la serie de Frobenius es solución de la ecuación de Bessel. Si sustituimos esta ecuación indicial en la segunda de las anteriores condiciones, obtenemos al desarrollar el cuadrado del binomio <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, que nos dice que <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. Nótese que en el caso <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mi>−</mi><mi>λ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> el coeficiente <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math> es arbitrario, por lo que nada impide elegirlo nulo. Además, este caso particularmente sencillo fue completamente resuelto en términos de funciones elementales en el problema 3.22 y será abordado de nuevo en el 6.5. Finalmente, la tercera condición es <math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo></mrow></math>, lo que junto a <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> nos dice que todos los coeficientes impares son nulos, <math display=\"inline\"><mrow><msub><mi>c</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, mientras que los pares satisfacen una recurrencia que se resuelve sin dificultad usando (D.53): <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>c</mi><mrow><mn>2</mn><mi>k</mi></mrow></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mfrac><msub><mi>c</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mrow><mn>4</mn><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><msub><mi>c</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mrow><msup><mn>4</mn><mn>2</mn></msup><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>⋯</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><mfrac><msub><mi>c</mi><mn>0</mn></msub><mrow><msup><mn>4</mn><mi>k</mi></msup><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>⋯</mi><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>⋯</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><mfrac><msub><mi>c</mi><mn>0</mn></msub><mrow><msup><mn>2</mn><mrow><mn>2</mn><mi>k</mi></mrow></msup><mi>k</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msub></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><msub><mi>c</mi><mn>0</mn></msub><mrow><msup><mn>2</mn><mrow><mn>2</mn><mi>k</mi></mrow></msup><mi>k</mi><mi>!</mi><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Multiplicando y dividiendo este resultado por <math display=\"inline\"><msup><mn>2</mn><mi>λ</mi></msup></math> e insertándolo en (6.48) obtenemos la solución <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mn>2</mn><mi>λ</mi></msup><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mn>0</mn></msub><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup></mrow><mrow><mi>k</mi><mi>!</mi><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>λ</mi><mo>+</mo><mn>2</mn><mi>k</mi></mrow></msup><mo>,</mo></mrow></math> que, salvo por el coeficiente constante fuera del sumatorio, define la <strong>función de Bessel de primera especie de orden <math display=\"inline\"><mi>λ</mi></math></strong>: <math display=\"block\"><mrow><msub><mi>J</mi><mi>λ</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup></mrow><mrow><mi>k</mi><mi>!</mi><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>λ</mi><mo>+</mo><mn>2</mn><mi>k</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ezezaguna",
     "oina": "Algunas funciones de Bessel <math display=\"inline\"><msub><mi>J</mi><mi>n</mi></msub></math> de orden entero",
     "izena": "irudia (ez da konpilatu)"
    },
    {
     "mota": "testua",
     "html": "Vemos, por tanto, que la ecuación de Bessel de orden <math display=\"inline\"><mi>ν</mi></math> admite como soluciones <math display=\"inline\"><mrow><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. La <strong>función de Bessel de segunda especie</strong> de orden <math display=\"inline\"><mi>ν</mi></math> —también llamada función de Newmann o función de Weber y denotada a veces como <math display=\"inline\"><msub><mi>N</mi><mi>ν</mi></msub></math>— se define como la siguiente combinación lineal con coeficientes constantes: <math display=\"block\"><mrow><msub><mi>Y</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo></mrow></math> y es, en consecuencia, solución de la ecuación. Como puede verse, por ejemplo, en [15], el wronskiano de <math display=\"inline\"><msub><mi>J</mi><mi>ν</mi></msub></math> y <math display=\"inline\"><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub></math> es <math display=\"block\"><mrow><mi>W</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>J</mi><mi>ν</mi></msub><mo>,</mo><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>π</mi><mi>x</mi></mrow></mfrac><mo>,</mo></mrow></math>, por lo que tenemos dos casos. Si <math display=\"inline\"><mi>ν</mi></math> no es entero, la solución general puede escribirse como <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><msub><mi>J</mi><mi>ν</mi></msub><mo>+</mo><mi>B</mi><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub></mrow></math>, ya que <math display=\"inline\"><msub><mi>J</mi><mi>ν</mi></msub></math> y <math display=\"inline\"><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub></math> son linealmente independientes porque sus series empiezan en distintas potencias de <math display=\"inline\"><mi>x</mi></math>. Sin embargo, si <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>…</mi></mrow></math> el wronskiano se anula y las dos funciones de primera especie son linealmente dependientes. De hecho, cuando <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>0</mn></mrow></math> tenemos un único índice (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>) y, por tanto, una única solución dada por (6.58). Además, la constante <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que hemos eliminado al pasar de (6.57) a (6.58) es infinita para los valores <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mi>n</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>…</mi></mrow></math> cuando <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>, y la función <math display=\"inline\"><msub><mi>J</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub></math> restante es igual u opuesta a <math display=\"inline\"><msub><mi>J</mi><mi>n</mi></msub></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que también cuando <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> puede usarse la expresión (6.58), que se cumple la relación <math display=\"block\"><mrow><msub><mi>J</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msub><mi>J</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>J</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> y que, por tanto, la función <math display=\"inline\"><msub><mi>J</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub></math> definida por la fórmula (6.58) es solución de la ecuación de Bessel, aunque no sea linealmente independiente de <math display=\"inline\"><msub><mi>J</mi><mi>n</mi></msub></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "No hay en este caso dos soluciones independientes en forma de serie de Frobenius, y veremos más adelante que esto sucede siempre que hay un solo índice (cuando <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>0</mn></mrow></math> en este caso) y puede también pasar cuando la diferencia entre los índices es un entero (aquí ocurre si <math display=\"inline\"><mi>ν</mi></math> es un entero, pero no si es semientero, aunque la diferencia <math display=\"inline\"><mrow><mn>2</mn><mi>ν</mi></mrow></math> sea entonces entera). Discutiremos en las siguientes secciones cómo puede abordarse este problema en el caso general, pero con la ecuación de Bessel es mejor usar el siguiente hecho."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que <math display=\"block\"><mrow><mi>W</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>J</mi><mi>ν</mi></msub><mo>,</mo><msub><mi>Y</mi><mi>ν</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mn>2</mn><mrow><mi>π</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto, <math display=\"inline\"><msub><mi>J</mi><mi>ν</mi></msub></math> y <math display=\"inline\"><msub><mi>Y</mi><mi>ν</mi></msub></math> son siempre linealmente independientes, incluso cuando <math display=\"inline\"><mi>ν</mi></math> es un entero, en cuyo caso se define como <math display=\"block\"><mrow><msub><mi>Y</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>ν</mi><mo>→</mo><mi>n</mi></mrow></munder><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math> En consecuencia, la solución general de la ecuación de Bessel puede escribirse como <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msub><mi>J</mi><mi>ν</mi></msub><mo>+</mo><mi>D</mi><msub><mi>Y</mi><mi>ν</mi></msub></mrow></math> tanto si <math display=\"inline\"><mi>ν</mi></math> es entero como si no lo es."
    },
    {
     "mota": "ezezaguna",
     "oina": "Algunas funciones de Bessel <math display=\"inline\"><msub><mi>Y</mi><mi>n</mi></msub></math> de orden entero",
     "izena": "irudia (ez da konpilatu)"
    },
    {
     "mota": "testua",
     "html": "De entre las muchas propiedades de las funciones de Bessel que pueden encontrarse en las tablas, algunas útiles relaciones de recurrencia se demostrarán en el problema 6.4. Nos limitaremos aquí a señalar que, como puede verse de la propia definición o en la figura 6.1, <math display=\"inline\"><mrow><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>⋯</mi><mo>=</mo><mn>0</mn></mrow></math>, mientras que las <math display=\"inline\"><msub><mi>Y</mi><mi>n</mi></msub></math> divergen en el origen, como se aprecia en la figura 6.2. Veremos en el siguiente apartado que esto sucede a menudo con la solución correspondiente al índice pequeño cuando la diferencia entre índices es un entero, incluso si el mismo no es negativo."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Utilice los resultados de este apartado y el ejercicio D.12 para recuperar la solución en términos de funciones elementales de la ecuación de Bessel de orden <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> que se halló en el problema 3.22."
      }
     ]
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Método de Frobenius",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En este apartado enunciamos y demostramos el resultado general para un punto ordinario o singular regular que hemos trasladado al origen. El cálculo es más cómodo si multiplicamos la ecuación por <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math> y usamos la notación (6.14): <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> También supondremos que el origen es un punto ordinario o singular regular, es decir, que <math display=\"inline\"><mi>p</mi></math> y <math display=\"inline\"><mi>q</mi></math> admiten desarrollos en series de potencias <math display=\"block\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>p</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>q</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mrow></math> convergentes para <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>ρ</mi></mrow></math> con <math display=\"inline\"><mrow><mi>ρ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que el origen será un punto ordinario si y solo si <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><msub><mi>q</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Con las hipótesis que acabamos de enunciar, el método de Frobenius consiste en ensayar en la ecuación (6.64) una serie de Frobenius <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>c</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn><mo>,</mo></mrow></math> que será convergente, al menos, para <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>ρ</mi></mrow></math>. Nótese que la linealidad y homogeneidad de la ecuación conducen a que <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> sea arbitrario, si la solución existe."
    },
    {
     "mota": "testua",
     "html": "Si derivamos la serie (6.67) término a término dos veces y multiplicamos la primera y segunda derivadas por <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math> respectivamente obtenemos <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mrow></math> y, usando (6.3), (6.65) y (6.66), <math display=\"block\"><mrow><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><msub><mi>q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><msub><mi>c</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>x</mi><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><msub><mi>p</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mi>.</mi></mrow></math> Si sustituimos estas dos expresiones y (6.69) en (6.64) e igualamos los coeficientes de cada potencia obtenemos, para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>…</mi></mrow></math>, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>c</mi><mi>k</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> que, introduciendo la <strong>función indicial</strong> de la ecuación <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>p</mi><mn>0</mn></msub><mi>u</mi><mo>+</mo><msub><mi>q</mi><mn>0</mn></msub><mo>,</mo></mrow></math>, se escribe en forma más conveniente como <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>c</mi><mi>k</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> (Nótese que ahora el sumatorio acaba en <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math>.)"
    },
    {
     "mota": "testua",
     "html": "El coeficiente de la potencia más baja se obtiene tomando <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> en la última expresión, lo que da <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. Puesto que <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn></mrow></math> —ya que elegir <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> correspondería a redefinir <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>1</mn></msub><mo>,</mo><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>0</mn></msub><mo>,</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>— para que (6.67) sea una solución de (6.64), tiene que cumplirse la <strong>ecuación indicial</strong> <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>p</mi><mn>0</mn></msub><mi>λ</mi><mo>+</mo><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Las dos raíces de esta ecuación cuadrática, <math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>λ</mi><mn>2</mn></msub></math>, se llaman los <strong>índices</strong> de la ecuación diferencial y corresponden, con las excepciones que discutiremos luego, a las dos soluciones linealmente independientes que nos hacen falta para construir la solución general. El procedimiento parece claro: para cada índice <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> es arbitrario, <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math> puede calcularse despejándolo de (6.74) con <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"block\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><msub><mi>q</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>c</mi><mn>0</mn></msub><mo>,</mo></mrow></math> y el resto de los coeficientes pueden calcularse de forma recurrente, ya que una vez conocidos <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math>, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub></mrow></math> el siguiente coeficiente, <math display=\"inline\"><msub><mi>c</mi><mi>n</mi></msub></math>, viene dado por <math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>c</mi><mi>k</mi></msub><mo>,</mo></mrow></math> cuyo miembro derecho solo depende de los coeficientes ya calculados. El único obstáculo de principio a este método es la posibilidad de que el denominador de la expresión (6.77) se anule para un cierto <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, lo que solo puede ocurrir si <math display=\"inline\"><mrow><mi>λ</mi><mo>+</mo><mi>N</mi></mrow></math> es el otro índice, <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, es decir, si la diferencia entre ambos índices es un entero <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>. Por otro lado, si los dos índices resultan ser iguales —es decir, si hay un único índice doble— el procedimiento solo proporciona una solución. Estos casos serán tratados más adelante, ya que aunque el índice mayor (o con mayor parte real, o el índice único) dará sin problemas una solución, la segunda puede contener un término logarítmico no descrito por una serie del tipo (6.67)."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Frobenius",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> un punto ordinario o singular regular de la ecuación <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> de forma que las funciones <math display=\"inline\"><mi>p</mi></math> y <math display=\"inline\"><mi>q</mi></math> admiten desarrollos, <math display=\"block\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>p</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>q</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mrow></math> convergentes para <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>ρ</mi></mrow></math>, con <math display=\"inline\"><mrow><mi>ρ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>. Si <math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>λ</mi><mn>2</mn></msub></math> son las dos raíces de la ecuación indicial <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>p</mi><mn>0</mn></msub><mi>λ</mi><mo>+</mo><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> con <math display=\"inline\"><mrow><mi>N</mi><mo>≡</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math> (siendo <math display=\"inline\"><mrow><mi>N</mi><mo>≥</mo><mn>0</mn></mrow></math> o <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">Re</mi><mo>&#8289;</mo></mrow><mi>N</mi><mo>≥</mo><mn>0</mn></mrow></math>), y definimos recurrentemente las funciones <math display=\"block\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mn>1</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>a</mi><mi>k</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo></mrow></math> entonces la ecuación (6.78) tiene dos soluciones, <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math> e <math display=\"inline\"><msub><mi>y</mi><mn>2</mn></msub></math>, que son linealmente independientes en <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>ρ</mi></mrow></math>. La primera se puede obtener siempre como <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mrow></math> mientras que la segunda puede ser:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "si <math display=\"inline\"><mrow><mi>N</mi><mo>≠</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>, <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mrow></math>",
        "si <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>b</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mrow></math> con <math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>≡</mo><msub><mi>a</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>λ</mi></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>",
        "si <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>, <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>A</mi><msub><mi>y</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mrow></math> con <math display=\"block\"><mrow><mi>A</mi><mo>≡</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>λ</mi><mo>→</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>a</mi><mi>N</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>≡</mo><mn>1</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>≡</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>λ</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>"
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Demostración del teorema"
    },
    {
     "mota": "testua",
     "html": "La demostración de que las soluciones tienen la mencionada forma consiste en ensayar una solución del tipo <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup></mrow></math> en la ecuación <math display=\"block\"><mrow><mi mathvariant=\"sans-serif\">𝖫</mi><mi>y</mi><mo>≡</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> lo que, por el mismo argumento utilizado en las expresiones (6.68)–(6.74), da para el miembro de la izquierda <math display=\"block\"><mrow><mi mathvariant=\"sans-serif\">𝖫</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>c</mi><mi>k</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mrow></math> que exigiendo que se cumpla <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>c</mi><mi>k</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo></mrow></math> se reduce a <math display=\"block\"><mrow><mi mathvariant=\"sans-serif\">𝖫</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>λ</mi></msup><mi>.</mi></mrow></math> El miembro de la derecha de esta ecuación se anula para los índices, <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, por lo que obtenemos las soluciones (6.83) y (6.84) sin más que tomar en (6.91), con <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math> respectivamente, el valor particular <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> que hace que (6.94) se reduzca a (6.82)."
    },
    {
     "mota": "testua",
     "html": "Si el índice es doble, <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo></mrow></math> (6.83) y (6.84) coinciden, pero podemos obtener una segunda solución haciendo <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, derivando (6.95) y usando (6.96) y la linealidad del operador L, para ver que <math display=\"block\"><mrow><mi mathvariant=\"sans-serif\">𝖫</mi><mfrac><mrow><mi>∂</mi><mi>y</mi></mrow><mrow><mi>∂</mi><mi>λ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mi>λ</mi></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>x</mi><mi>λ</mi></msup><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo></mrow></math> que se anula para <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub></mrow></math>. Por tanto, otra solución se obtiene derivando (6.91) en <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>y</mi></mrow><mrow><mi>∂</mi><mi>λ</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo></mrow></math> que no es otra cosa que (6.85)."
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>+</mo><mi>N</mi></mrow></math> con <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>, la dificultad al hallar la segunda solución proviene de que el coeficiente de <math display=\"inline\"><mrow><msub><mi>c</mi><mi>N</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en (6.94) para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi></mrow></math> es <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>N</mi><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>N</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>N</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y se anula para <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>. Ahora bien, si elegimos <math display=\"block\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>,</mo></mrow></math> como consecuencia de (6.94) también <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>c</mi><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tendrán un factor <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, por lo que ese factor aparecerá en todos los sumandos de (6.94) para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi></mrow></math>, que, por tanto, se satisfará cuando <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>. La ecuación (6.95) será <math display=\"block\"><mrow><mi mathvariant=\"sans-serif\">𝖫</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>x</mi><mi>λ</mi></msup><mo>,</mo></mrow></math> que se anula para <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>, por lo que una solución es <math display=\"block\"><mrow><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>N</mi></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mrow><mi>N</mi><mo>+</mo><mi>n</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mo>=</mo><mi>A</mi><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo></mrow></math> con los valores definidos en (6.83) y (6.88), ya que los primeros <math display=\"inline\"><mi>N</mi></math> sumandos se anularán debido a que los coeficientes contienen el factor <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> mientras que el siguiente término será <math display=\"inline\"><mrow><msub><mi>c</mi><mi>N</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>+</mo><mi>N</mi></mrow></msup><mo>=</mo><mi>A</mi><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>+</mo><mi>N</mi></mrow></msup><mo>=</mo><mi>A</mi><msup><mi>x</mi><msub><mi>λ</mi><mn>1</mn></msub></msup></mrow></math>. Para obtener la segunda solución procederemos como antes derivando (6.100), <math display=\"block\"><mrow><mi mathvariant=\"sans-serif\">𝖫</mi><mfrac><mrow><mi>∂</mi><mi>y</mi></mrow><mrow><mi>∂</mi><mi>λ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>x</mi><mi>λ</mi></msup><mo>+</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mi>λ</mi></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>x</mi><mi>λ</mi></msup><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo></mrow></math> que también se anula para <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>, por lo que una solución será <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>y</mi></mrow><mrow><mi>∂</mi><mi>λ</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo></mrow></math> que coincide con (6.87) si tenemos en cuenta (6.101) y la elección (6.99). (La demostración de que el dominio de convergencia contiene los puntos <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>ρ</mi></mrow></math> puede hallarse en el libro [21].)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Notas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si solo quieren calcularse algunos términos de la solución puede ser más fácil ensayar directamente el tipo de serie que se sabe que va a aparecer y calcular los coeficientes correspondientes."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si se ha conseguido sumar la serie de la primera solución <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math>, el método más conveniente para hallar la segunda solución es a menudo la reducción de orden (3.68)."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La posible aparición de términos logarítmicos no debería sorprendernos a la vista de la experiencia con las ecuaciones de Cauchy-Euler estudiadas en el apartado 3.12."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si solo hay un índice, <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>, la segunda solución contiene necesariamente un término logarítmico."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si la diferencia entre los índices es un entero no nulo <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>, la ecuación (6.94) para el coeficiente <math display=\"inline\"><mrow><msub><mi>c</mi><mi>N</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> tiene la forma <math display=\"block\"><mrow><mn>0</mn><mo>⋅</mo><msub><mi>c</mi><mi>N</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mrow><mi>N</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>q</mi><mrow><mi>N</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>c</mi><mi>k</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> por lo que existen dos posibilidades:",
      "Si debido a la estructura de la ecuación resulta que <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mrow><mi>N</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>q</mi><mrow><mi>N</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>c</mi><mi>k</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> entonces <math display=\"inline\"><mrow><msub><mi>c</mi><mi>N</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es arbitrario, por lo que <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math> y la solución correspondiente al índice pequeño, <math display=\"inline\"><msub><mi>λ</mi><mn>2</mn></msub></math>, no tiene término logarítmico. Además, como en esa solución habrá dos constantes arbitrarias, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>c</mi><mi>N</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, la misma será la solución general y contendrá, en particular, la correspondiente al índice mayor, <math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math>, que se recupera tomando <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>c</mi><mi>N</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>. De hecho, esto sucede siempre que el punto es ordinario, con las ecuaciones de Bessel de orden semientero o en distintos ejemplos que veremos en problemas.",
      "Si no se cumple (6.105), la condición (6.104) no tiene solución para <math display=\"inline\"><mrow><msub><mi>c</mi><mi>N</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, por lo que la solución correspondiente a <math display=\"inline\"><msub><mi>λ</mi><mn>2</mn></msub></math> tendrá un término logarítmico y <math display=\"inline\"><mrow><mi>A</mi><mo>≠</mo><mn>0</mn></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "Dedicaremos el resto del capítulo a distintos ejemplos de aplicación de este teorema."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Un ejemplo con índice doble"
    },
    {
     "mota": "testua",
     "html": "Sea la ecuación <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> en donde la sustitución <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup></mrow></math> e identificación de coeficientes conduce a <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>λ</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>a</mi><mi>n</mi></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> La primera de estas ecuaciones nos dice que el índice <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> es doble y la segunda nos da la recurrencia <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><munderover><mo>∏</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mn>1</mn><mrow><mi>λ</mi><mo>+</mo><mi>k</mi></mrow></mfrac><mo>,</mo></mrow></math> con <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>. Una solución se obtiene tomando <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> en la última expresión <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>,</mo></mrow></math> con lo que <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mi>.</mi></mrow></math> Para hallar la segunda solución mediante (6.85)–(6.86) es conveniente utilizar la derivada logarítmica: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>λ</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></msub><mo>=</mo><mfrac><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mfrac><mi>d</mi><mrow><mi>d</mi><mi>λ</mi></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mn>1</mn><mrow><mi>λ</mi><mo>+</mo><mi>k</mi></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></msub><mo>=</mo><mfrac><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msub><mi mathvariant=\"normal\">Ω</mi><mi>n</mi></msub><mo>,</mo></mtd></mtr></mtable></math> donde hemos utilizado los números armónicos <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mi>n</mi></msub><mo>=</mo><mn>1</mn><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>+</mo><mn>1</mn><mi>/</mi><mn>3</mn><mo>+</mo><mi>⋯</mi><mo>+</mo><mn>1</mn><mi>/</mi><mi>n</mi></mrow></math> (véase la página 287). La solución general de la ecuación será, por tanto, <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo>−</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msub><mi mathvariant=\"normal\">Ω</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que también puede hallarse <math display=\"inline\"><msub><mi>y</mi><mn>2</mn></msub></math> ensayando la solución <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>b</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que usando <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math> y (3.68) se obtiene como solución general <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>A</mi><mo>+</mo><mi>B</mi><mi mathvariant=\"normal\">Ei</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mi>.</mi></mrow></math> Compruebe que se trata de la misma solución utilizando (6.111), (D.64) y (D.66)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Un ejemplo con término logarítmico"
    },
    {
     "mota": "testua",
     "html": "Sea <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> en donde la sustitución <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup></mrow></math> lleva a <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>a</mi><mi>n</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> La primera ecuación nos da los índices <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>, cuya diferencia <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>1</mn></mrow></math> es entera, mientras que la segunda nos da la recurrencia <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que, para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>, <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El índice mayor <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math> nos da siempre una solución que en este caso es <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>x</mi></mrow></math>, ya que <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math> siempre y vemos en (6.121) que <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Claro está que en este simple ejemplo, esta solución podía haberse hallado por inspección usando la observación hecha en la página 52 con respecto a las ecuaciones del tipo (3.67). En este caso la solución general puede hallarse fácilmente mediante la reducción de orden <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>∫</mo><mi>u</mi><mi>d</mi><mi>x</mi></mrow></math>, pero queremos ilustrar la aplicación del teorema de Frobenius. Como <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, tenemos <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>λ</mi><mo>→</mo><mn>0</mn></mrow></munder><mi>λ</mi><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>λ</mi><mo>→</mo><mn>0</mn></mrow></munder><mi>λ</mi><mfrac><msup><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>λ</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math> Por otro lado, <math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>λ</mi></mrow></mfrac><mi>λ</mi><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></msub><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>λ</mi></mrow></mfrac><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></msub><mo>,</mo></mrow></math> que, debido a que <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> es una raíz doble del numerador, se anulará para todo <math display=\"inline\"><mi>n</mi></math> excepto para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>, en que el término <math display=\"inline\"><msup><mi>λ</mi><mn>2</mn></msup></math> está también en el denominador, por lo que se tiene <math display=\"block\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mfrac><mi>d</mi><mrow><mi>d</mi><mi>λ</mi></mrow></mfrac><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mrow><mi>λ</mi><mo>+</mo><mn>1</mn></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></msub><mo>=</mo><mn>3</mn><mo>,</mo></mrow></math> con lo que la solución general de la ecuación es <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo>+</mo><mn>1</mn><mo>+</mo><mn>3</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> o, equivalentemente, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, con <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math> arbitrarios."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Un ejemplo sin término logarítmico"
    },
    {
     "mota": "testua",
     "html": "Como ya se ha dicho (y hemos comprobado en el anterior ejemplo), cuando la diferencia entre los índices es un entero no nulo puede resultar que solo haya una solución en forma de serie de Frobenius y que la segunda solución contenga un término logarítmico. Sin embargo, esto no es necesariamente cierto. Puede suceder que el término logarítmico esté ausente y que haya dos soluciones en forma de serie de Frobenius, como pasaba en el caso de las ecuaciones de Bessel de orden semientero, e incluso en forma de serie de potencias ordinarias, como sucedía cuando el punto era ordinario. En este último caso los coeficientes <math display=\"inline\"><mi>P</mi></math> y <math display=\"inline\"><mi>Q</mi></math> de la ecuación (6.11) son analíticos alrededor del origen y, por tanto, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><msub><mi>q</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>P</mi><mi>n</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>q</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>Q</mi><mi>n</mi></msub></mrow></math>, con lo que la ecuación indicial es siempre <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y los índices son <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>. Aunque en este caso la diferencia entre los índices es un entero, <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>1</mn></mrow></math>, veremos que usar el índice pequeño no solo no acarrea problemas, sino que proporciona directamente todas las soluciones. En efecto, tomemos <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> en la recurrencia (6.74) con <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>, que corresponden, respectivamente, a la ecuación indicial y al valor <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi><mo>=</mo><mn>1</mn></mrow></math> que podía ocasionar problemas. Usando <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>q</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> obtenemos: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mn>0</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> Vemos que, como <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, tanto <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> como <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math> pueden elegirse arbitrariamente en la serie correspondiente al índice menor (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>). Como hay dos constantes arbitrarias esto proporciona todas las soluciones. Las soluciones correspondientes al índice mayor (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>) se recuperan con la elección <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>≠</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Veamos otro ejemplo sin término logarítmico. Ensayando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup></mrow></math> en <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>5</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>, cuyo origen es singular regular, obtenemos que la función indicial es <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mn>5</mn><mi>/</mi><mn>4</mn><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> con lo que los índices son <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>, cuya diferencia es <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>3</mn></mrow></math>. Además, la recurrencia de coeficientes va de dos en dos en la forma <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>a</mi><mi>n</mi></msub><mo>−</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> de donde se sigue que <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, puesto que <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Como siempre, una solución viene dada por el índice mayor <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math>, para el que como consecuencia de la anulación de <math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math> solo habrá coeficientes pares: <math display=\"block\"><mrow><msub><mi>a</mi><mrow><mn>2</mn><mi>k</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msub><mi>a</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mi>/</mi><mn>2</mn><mo>+</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><msub><mi>a</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mrow><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Deshaga la recurrencia y complete factoriales para demostrar que <math display=\"block\"><mrow><msub><mi>a</mi><mrow><mn>2</mn><mi>k</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>,</mo></mrow></math> y, como consecuencia, <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Puesto que <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>, el coeficiente del término logarítmico será <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>λ</mi><mo>→</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>λ</mi><mo>→</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>λ</mi><mo>→</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></munder><mfrac><mrow><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>λ</mi><mo>+</mo><mn>7</mn><mi>/</mi><mn>2</mn></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>, ya que <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y el denominador no se anula. Como ya sucediera con los puntos ordinarios, vemos una vez más que puede ocurrir que el término logarítmico no aparezca aunque la diferencia de índices sea un entero no nulo. En este caso particular, la razón estriba en que la ecuación (6.132) para <math display=\"inline\"><msub><mi>a</mi><mn>3</mn></msub></math>, que es la que podría dejar <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi><mo>=</mo><mn>3</mn></mrow></math> indefinido, resulta ser <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mn>3</mn></msub><mo>−</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> que se satisface para todo <math display=\"inline\"><msub><mi>a</mi><mn>3</mn></msub></math> cuando <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>, ya que tanto <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> como <math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math> se anulan. No solo no hay problema con el índice pequeño, sino que, como sucede siempre que <math display=\"inline\"><mi>A</mi></math> resulta ser nulo, nos da directamente la solución general al contener una constante arbitraria adicional. En este caso, los términos impares están desacoplados de los pares, admiten como factor común al <math display=\"inline\"><msub><mi>a</mi><mn>3</mn></msub></math> arbitrario y, por tanto, empiezan realmente por <math display=\"inline\"><mrow><msup><mi>x</mi><mrow><mn>3</mn><mo>−</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>=</mo><msup><mi>x</mi><mrow><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>, es decir, reproducen exactamente la solución <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math> (en otros casos, la solución correspondiente al índice mayor puede aparecer en forma de una combinación lineal con la otra solución). Los términos pares nos proporcionan otra solución linealmente independiente: <math display=\"block\"><mrow><msub><mi>a</mi><mrow><mn>2</mn><mi>k</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msub><mi>a</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><msub><mi>a</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mrow><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que esta solución es <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Suma de las series"
    },
    {
     "mota": "testua",
     "html": "Como se dijo en el prólogo, no deberíamos conformarnos con dejar los resultados en forma de series sin intentar sumarlas. A falta de unas buenas tablas o un programa de cálculo algebraico (véase el apartado B.4.5), no es ésta empresa fácil salvo en casos sencillos, pero nada excusa perder unos minutos examinando la estructura de la serie para ver si la podemos identificar o puede transformarse en una o varias series conocidas. Una regla que <em>puede</em> funcionar en ejemplos simples cuyo coeficiente general contenga solo combinaciones algebraicas del índice y factoriales o funciones gamma, es como sigue:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si en el denominador del coeficiente general no hay factoriales, sino solo combinaciones algebraicas, puede ser útil recordar las series de funciones logarítmicas, incluyendo las funciones hiperbólicas inversas."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si en el denominador del coeficiente general aparece un único factorial, puede intentar transformarse en una o varias de las series que tienen esta estructura, es decir, la serie de la exponencial y sus combinaciones: seno, coseno, seno hiperbólico y coseno hiperbólico. También pueden considerarse las series de la función error (D.39) y de la integral exponencial (D.64)."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si en el denominador aparecen dos factoriales, o un factorial y una gamma, el candidato obvio son las funciones de Bessel (6.58) (o, más en general, las funciones hipergeométricas confluentes de Kummer (D.91) discutidas en el problema 6.22 y el apartado D.10)."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si en el denominador aparecen dos factoriales, o un factorial y una gamma, y en el numerador hay otra gamma, puede probar a compararse con la serie binómica (D.55) o, más en general, con la <strong>función hipergeométrica de Gauss</strong> (30-04-1777, Brunswick, hoy día Alemania; 23-02-1855, Gotinga, Hanover). En su tesis proporcionó la primera demostración satisfactoria del teorema fundamental del álgebra. Aunque es, quizás, más conocido por sus contribuciones a la geometría diferencial, realizó observaciones astronómicas hasta avanzada edad y, además de otras contribuciones prácticas, escribió numerosos trabajos sobre mecánica celeste, magnetismo, ecuaciones diferenciales, teoría de aproximaciones y probabilidad. Tuvo una enorme influencia en muchas áreas del conocimiento científico y técnico., que está definida por <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>,</mo><mi>β</mi><mo>;</mo><mi>γ</mi><mo>;</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>⋯</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>⋯</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>γ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>⋯</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>γ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>γ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>,</mo></mtd></mtr></mtable></math> e incluye muchas otras funciones, como se discute en el apartado D.11."
     ]
    },
    {
     "mota": "testua",
     "html": "En el caso de las series (6.135) y (6.139) reconocemos series de tipo exponencial que pueden escribirse como <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>x</mi></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn></mrow></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>−</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>x</mi></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>2</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>−</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>x</mi></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>−</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow><msqrt><mi>x</mi></msqrt></mfrac><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow><msqrt><mi>x</mi></msqrt></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva la ecuación <math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "problema",
     "izena": "Ecuación de Legendre (18-09-1752, París; 10-01-1833, París). Introdujo los polinomios que llevan su nombre calculando el campo gravitatorio generado por ciertos cuerpos con simetría de revolución. Su estudio las funciones e integrales elípticas son, probablemente, su mayor contribución. También proporcionó una prueba simplificada de que $pi$ es irracional.",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Considere la siguiente ecuación, que aparece al resolver la ecuación de Laplace en coordenadas esféricas: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Halle sus soluciones por series alrededor de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "¿Cuáles de estas soluciones son polinomios?",
        "Determine algunos de los <strong>polinomios de Legendre</strong>, que son las soluciones polinómicas que satisfacen la condición inicial <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>"
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ecuación de Chébichev (16-05-1821, Okatovo, Rusia; 8-12-1894, San Petersburgo). Aunque es especialmente recordado por su contribución a la teoría de números, escribió sobre muchos otros temas, incluyendo mecánica, teoría de probabilidades e integración. (o Tchebycheff, o Chebyshev…)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle las soluciones en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la ecuación <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><msup><mi>ν</mi><mn>2</mn></msup><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Determine sus soluciones polinómicas y, en particular, las que satisfacen <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> (y reciben el nombre de <strong>polinomios de Chébichev</strong>)."
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
       "html": "Calcule, hasta sexto orden, la solución de <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Funciones de Bessel",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre las siguientes propiedades de las funciones de Bessel:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>x</mi><mi>ν</mi></msup><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>k</mi><msup><mi>x</mi><mi>ν</mi></msup><msub><mi>J</mi><mrow><mi>ν</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "<math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>x</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msup><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>−</mi><mi>k</mi><msup><mi>x</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msup><msub><mi>J</mi><mrow><mi>ν</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "<math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>k</mi><msub><mi>J</mi><mrow><mi>ν</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mi>ν</mi><mi>x</mi></mfrac><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "<math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>−</mi><mi>k</mi><msub><mi>J</mi><mrow><mi>ν</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mi>ν</mi><mi>x</mi></mfrac><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "<math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mi>k</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>J</mi><mrow><mi>ν</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>J</mi><mrow><mi>ν</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>.",
        "<math display=\"inline\"><mrow><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>k</mi><mi>x</mi></mrow><mrow><mn>2</mn><mi>ν</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>J</mi><mrow><mi>ν</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>J</mi><mrow><mi>ν</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "¿Se cumplen propiedades parecidas con las funciones de segunda especie <math display=\"inline\"><msub><mi>Y</mi><mi>ν</mi></msub></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ecuación de Bessel de orden <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle la ecuación que se obtiene a partir de la de Bessel si se hace el cambio de variables <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Utilice este resultado para obtener la solución de la ecuación de Bessel de orden <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "La ecuación de Bessel de orden <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> es <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> o, dividiendo por <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mi>/</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. Ensayando la serie de Frobenius, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>r</mi><mo>+</mo><mi>n</mi></mrow></msup></mrow></math> (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mi>r</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mi>r</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup></mrow></math>), y sustituyendo en la ecuación multiplicada por <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>: <math display=\"block\"><mrow><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mi>r</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>+</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mi>r</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>+</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>r</mi><mo>+</mo><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msup><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>r</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>=</mo><mn>0</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>:</strong>  <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>r</mi><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>r</mi><mo>=</mo><mi>±</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>:</strong>  <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>r</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>a</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Recurrencia general (<math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>2</mn></mrow></math>): <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Rama <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>.</strong> <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>2</mn><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. Y <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, luego <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>6</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>1</mn></msub><mi>/</mi><mn>12</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>2</mn></msub><mi>/</mi><mn>20</mn><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>120</mn></mrow></math>, y en general <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mn>2</mn><mi>n</mi></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Rama <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>.</strong> Por una recurrencia análoga, ahora valen <math display=\"inline\"><msub><mi>a</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub></math> y <math display=\"inline\"><msub><mi>a</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></math> como coeficientes independientes: <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mn>2</mn><mi>n</mi></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "La solución general es <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub></mrow></math>. Teniendo en cuenta que se trata de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math>, puede verse que <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>A</mi><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo>+</mo><mi>B</mi><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>, es decir, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> en el cambio de variable original <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
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
       "html": "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "<math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "<math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>4</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "<math display=\"inline\"><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mfrac><mn>4</mn><mi>x</mi></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "<math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ecuación de Laguerre (9-04-1834, Bar-le-Duc, Francia; 14-08-1886, Bar-le-Duc). Aunque es especialmente recordado por la ecuación y los polinomios que llevan su nombre, trabajó en otras áreas del análisis, la geometría y los métodos de aproximación.",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle una solución en <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>0</mn></mrow></math> de <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>+</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>ν</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>≥</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Discuta las soluciones polinómicas, que son (salvo una constante multiplicativa) los polinomios generalizados de Laguerre."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ecuación de Bessel",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que la ecuación <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>c</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>b</mi><mn>2</mn></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>b</mi></mrow></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><msup><mi>b</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> se convierte en una de Bessel con el cambio <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con <math display=\"inline\"><mrow><mi>t</mi><mo>≡</mo><mi>a</mi><msup><mi>x</mi><mi>b</mi></msup></mrow></math> y <math display=\"inline\"><mrow><mi>u</mi><mo>≡</mo><msup><mi>x</mi><mi>c</mi></msup><mi>y</mi></mrow></math>."
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
       "html": "Halle por el método de series la solución de <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> es un punto ordinario de la ecuación (los coeficientes son analíticos en él, en forma normalizada <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>). Ensayando la serie ordinaria, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math>, sin introducir el factor <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> e igualando directamente los coeficientes:"
      },
      {
       "mota": "testua",
       "html": "<strong>Coeficiente de <math display=\"inline\"><msup><mi>x</mi><mn>0</mn></msup></math>.</strong> <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Coeficiente de <math display=\"inline\"><msup><mi>x</mi><mn>1</mn></msup></math>.</strong> <math display=\"inline\"><mrow><mn>2</mn><msub><mi>a</mi><mn>2</mn></msub><mo>−</mo><mn>6</mn><msub><mi>a</mi><mn>3</mn></msub><mo>−</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>; tomando <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> (elección que impone la propia estructura de la ecuación, véase la recurrencia general) resulta <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><msub><mi>a</mi><mn>2</mn></msub><mi>/</mi><mn>3</mn><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>6</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Coeficiente general de <math display=\"inline\"><msup><mi>x</mi><mi>n</mi></msup></math>.</strong> <math display=\"block\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>−</mo><mi>n</mi><msub><mi>a</mi><mi>n</mi></msub><mo>+</mo><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Los coeficientes, con <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><mn>6</mn><msub><mi>a</mi><mn>3</mn></msub></mrow><mn>12</mn></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mo>+</mo><msub><mi>a</mi><mn>0</mn></msub></mrow><mn>12</mn></mfrac><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>24</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>5</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mn>2</mn><msub><mi>a</mi><mn>3</mn></msub><mo>+</mo><mn>12</mn><msub><mi>a</mi><mn>4</mn></msub></mrow><mn>20</mn></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>3</mn><mo>+</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow><mn>20</mn></mfrac><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>120</mn></mfrac></mrow></math>"
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
       "html": "Halle los primeros términos de la solución por series de <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
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
       "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>‴</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>9</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>18</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>6</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "A veces, las series de potencias y las de Frobenius pueden usarse también para calcular una solución particular de la ecuación completa. Consideremos, por ejemplo, la siguiente ecuación: <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Resuelva la ecuación homogénea y use una serie adecuada para calcular una solución particular de la completa. Compare el resultado con el obtenido mediante el método de variación de constantes."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ecuación hipergeométrica de Gauss",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Considere la ecuación <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>γ</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>α</mi><mo>+</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>α</mi><mi>β</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Halle sus soluciones alrededor de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> cuando <math display=\"inline\"><mrow><mi>γ</mi><mo>≠</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>. Escriba la solución usando la <strong>función hipergeométrica de Gauss</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>,</mo><mi>β</mi><mo>;</mo><mi>γ</mi><mo>;</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, que es precisamente la solución que satisface la condición inicial <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>,</mo><mi>β</mi><mo>;</mo><mi>γ</mi><mo>;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>. <em>Sugerencia</em>: Use el cambio <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mrow><mn>1</mn><mo>−</mo><mi>γ</mi></mrow></msup></mrow></math> para hallar la segunda solución."
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
       "html": "Demuestre que <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>,</mo><mi>β</mi><mo>;</mo><mi>γ</mi><mo>;</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>,</mo><mi>α</mi><mo>;</mo><mi>γ</mi><mo>;</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y halle <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>β</mi><mo>;</mo><mi>β</mi><mo>;</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>,</mo><mi>β</mi><mo>;</mo><mi>β</mi><mo>;</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ecuación hipergeométrica confluente",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Encuentra la solución correspondiente al índice nulo que satisface <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> bajo la hipótesis <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>α</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>ν</mi><mo>≠</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>. Esa función recibe el nombre de <strong>función hipergeométrica confluente</strong> o <strong>función de Kummer</strong>(1810-01-29, Sorau, Prusia; 1893-05-14, Berlín). Trabajando en el último teorema de Fermat descubrió el concepto de ideal. Además de la superficie que lleva su nombre, se le recuerda también por sus trabajos sobre las series hipergeométricas, que ampliaron los de Gauss. y suele expresarse como <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>,</mo><mi>ν</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> o <math display=\"inline\"><mrow><mrow><msub><mrow></mrow><mn>1</mn></msub><msub><mi>F</mi><mn>1</mn></msub></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">(α)</mtext><mo>,</mo><mtext mathvariant=\"normal\">(ν)</mtext><mo>,</mo><mtext mathvariant=\"normal\">(x)</mtext><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Estudia el caso que se reduce a un polinomio y algún otro caso en el que se recuperan funciones elementales. Calcula la segunda solución linealmente independiente <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mrow><mn>1</mn><mo>−</mo><mi>ν</mi></mrow></msup><mi>z</mi></mrow></math> mediante un cambio de variable. Estudia la relación entre esta ecuación y la hipergeométrica de Gauss y úsala para recuperar los resultados de los apartados anteriores. (<em>Sugerencia</em>: Toma el cambio <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>β</mi><mi>x</mi></mrow></math> en la ecuación de Gauss). Comenta la restricción impuesta a los valores de <math display=\"inline\"><mi>ν</mi></math>."
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
       "html": "Halle la solución general de la ecuación <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
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
       "html": "Halle todas las soluciones de <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
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
       "html": "Halle la solución general de la siguiente ecuación en términos de funciones elementales: <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>3</mn><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> es un punto singular regular. Ensayando la serie de Frobenius, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup></mrow></math>, y desarrollando por <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la ecuación indicial (coeficiente de <math display=\"inline\"><msup><mi>x</mi><mi>λ</mi></msup></math>) es: <math display=\"block\"><mrow><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>3</mn><mi>λ</mi><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>λ</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mn>4</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "La recurrencia general (alineando con el índice <math display=\"inline\"><mi>m</mi></math>) da: <math display=\"block\"><mrow><msub><mi>a</mi><mi>m</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msub><mfrac><mrow><mi>m</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>3</mn></mrow><mrow><mi>m</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>4</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Rama <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>4</mn></mrow></math>.</strong> <math display=\"inline\"><mrow><msub><mi>a</mi><mi>m</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>m</mi></mrow></math>, es decir, <math display=\"block\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mfrac><mn>5</mn><mn>4</mn></mfrac><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>5</mn><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>…</mi><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mi>m</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math> Serie cerrada, usando <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>4</mn></mrow></msup><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><msup><mi>x</mi><mn>4</mn></msup><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mfrac><msup><mi>x</mi><mn>4</mn></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></mfrac></mrow></math>"
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
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle la solución general de la ecuación <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
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
       "html": "Resuelva la siguiente ecuación diferencial: <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
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
       "html": "Resuelva por el método de Frobenius alrededor del punto singular regular <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Ensayando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup></mrow></math>: <math display=\"block\"><mrow><mn>4</mn><munder><mo>∑</mo><mi>n</mi></munder><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>n</mi></msup><mo>+</mo><mn>2</mn><munder><mo>∑</mo><mi>n</mi></munder><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>n</mi></msup><mo>−</mo><mn>2</mn><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></munder><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>n</mi></msup><mo>−</mo><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></munder><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mn>0</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Ecuación indicial</strong> (coeficiente de <math display=\"inline\"><msup><mi>x</mi><mn>0</mn></msup></math>): <math display=\"block\"><mrow><mn>4</mn><msub><mi>a</mi><mn>0</mn></msub><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>λ</mi><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><mn>4</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>λ</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Recurrencia general:</strong> <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>1</mn></mrow><mrow><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Caso <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>:</strong> <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, luego <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>2</mn><mi>n</mi></msup><mi>n</mi><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>/</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Caso <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>:</strong> <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, luego <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mi>!</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><msup><mi>x</mi><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><msub><mo>∑</mo><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mi>!</mi></mrow></math>."
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
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><mi>B</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> erf</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "Resuelva por el método de Frobenius alrededor del punto singular regular <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Haciendo el cambio de variable <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> se obtiene <math display=\"inline\"><mrow><mi>z</mi><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> y, multiplicando por <math display=\"inline\"><mi>z</mi></math>: <math display=\"block\"><mrow><msup><mi>z</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>z</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>z</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Ensayando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>a</mi><mi>n</mi></msub><msup><mi>z</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup></mrow></math>: <strong>Ecuación indicial</strong> (<math display=\"inline\"><msup><mi>z</mi><mn>0</mn></msup></math>): <math display=\"block\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><msub><mi>a</mi><mn>0</mn></msub><mi>λ</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mi>λ</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Recurrencia:</strong> <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mrow><mi>n</mi><mo>+</mo><mi>λ</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>:</strong> <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math>, luego <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mi>z</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mi>z</mi></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>:</strong> <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math>, luego <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mfrac><msup><mi>e</mi><mi>z</mi></msup><mi>z</mi></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Solución general</strong>, redefiniendo las constantes:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mfrac><msup><mi>e</mi><mi>x</mi></msup><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>+</mo><mover><mi>B</mi><mo accent=\"true\">̃</mo></mover><mfrac><mn>1</mn><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
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
       "html": "Resuelva por series alrededor del punto ordinario <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y luego por Frobenius alrededor del punto singular regular <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      },
      {
       "mota": "testua",
       "html": "<strong>Alrededor del punto ordinario <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>.</strong> Escrita <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mfrac><mrow><mn>4</mn><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mn>2</mn><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, es analítica en <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, no analítica en <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math> (puntos singulares). Ensayando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math>, desde los términos de grado bajo: <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub></mrow></math>, y la recurrencia general <math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>4</mn><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math> Todos los coeficientes se repiten, y separando pares e impares <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mrow><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi></mrow><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math> son series geométricas que exigen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Frobenius alrededor de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>.</strong> Haciendo <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> y ensayando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>a</mi><mi>n</mi></msub><msup><mi>μ</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup></mrow></math>, la ecuación se convierte en <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>μ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>μ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>μ</mi><mo>+</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. Ecuación indicial (coeficiente de <math display=\"inline\"><msup><mi>μ</mi><mrow><mi>λ</mi><mo>−</mo><mn>1</mn></mrow></msup></math>): <math display=\"block\"><mrow><mn>2</mn><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Caso <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>.</strong> Resulta la recurrencia <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mi>n</mi></msub><mi>/</mi><mn>2</mn></mrow></math>, luego <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mfrac><mi>μ</mi><mn>2</mn></mfrac><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>μ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>a</mi><mn>0</mn></msub></mrow><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>La segunda, por d&#x27;Alembert</strong> (<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn><mi>x</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>−</mi><mo>∫</mo><mi>P</mi><mi>d</mi><mi>x</mi></mrow></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math>): <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>2</mn></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
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
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><msub><mi>A</mi><mn>1</mn></msub><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mrow><msub><mi>A</mi><mn>2</mn></msub><mi>x</mi></mrow><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
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
       "html": "Resuelva por series alrededor del punto ordinario <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      },
      {
       "mota": "testua",
       "html": "Ensayando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math> y reuniendo todos los órdenes:"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msup><mi>x</mi><mn>0</mn></msup></math>:</strong>  <math display=\"inline\"><mrow><mn>2</mn><msub><mi>a</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>0</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msup><mi>x</mi><mn>1</mn></msup></math>:</strong>  <math display=\"inline\"><mrow><mn>6</mn><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>0</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>:</strong>  <math display=\"inline\"><mrow><mn>12</mn><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mn>2</mn><msub><mi>a</mi><mn>2</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Caso (A):</strong> tomando <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, y de ahí en adelante todos son cero: <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>=</mo><mn>1</mn><mo>+</mo><mi>x</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Caso (B):</strong> tomando <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><msub><mi>a</mi><mn>2</mn></msub><mi>/</mi><mn>6</mn></mrow></math>, ...: <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>2</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mrow><mn>3</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mi>…</mi><mo>=</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mrow><mn>3</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mi>x</mi></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mspace width=\"0.167em\"></mspace><mi>x</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mi>x</mi></msup></mrow></math>"
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
       "html": "¿Para qué valores del parámetro <math display=\"inline\"><mi>β</mi></math> admite la ecuación soluciones polinómicas? <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>β</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>?</mi></mrow></math> Para cada uno de esos valores, halle la solución general, siendo una de las soluciones un polinomio de orden dos como máximo."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Ensayando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math>: <math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>n</mi><mo>+</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Primeros términos: <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mi>β</mi><mn>2</mn></mfrac><msub><mi>a</mi><mn>0</mn></msub></mrow></math>; <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mo>−</mo><mi>β</mi></mrow><mn>6</mn></mfrac><msub><mi>a</mi><mn>1</mn></msub></mrow></math>; <math display=\"inline\"><mrow><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mfrac><mrow><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>24</mn></mfrac><msub><mi>a</mi><mn>0</mn></msub></mrow></math>; <math display=\"inline\"><mrow><msub><mi>a</mi><mn>5</mn></msub><mo>=</mo><mfrac><mrow><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>120</mn></mfrac><msub><mi>a</mi><mn>1</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Soluciones polinómicas.</strong> Para cortar la serie se necesita <math display=\"inline\"><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>n</mi><mo>+</mo><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math> para algún <math display=\"inline\"><mi>n</mi></math> entero: <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>3</mn></mrow></math>) o <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>)."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math>:</strong> <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mi>/</mi><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><msub><mi>a</mi><mn>5</mn></msub><mo>=</mo><mi>…</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (constante y cúbica, ambas polinómicas)."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>2</mn></mrow></math>:</strong> <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mi>…</mi><mo>=</mo><mn>0</mn></mrow></math>. Tomando <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>x</mi></mrow></math>; tomando <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> (una es un polinomio de orden 2 como máximo, como se pedía):"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mn>2</mn><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>A</mi><mspace width=\"0.167em\"></mspace><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>;</mo><mtext mathvariant=\"normal\">  </mtext><mi>β</mi><mo>=</mo><mn>0</mn><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "Resuelva por series de Frobenius (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> punto singular regular) y por variación de constantes: <math display=\"block\"><mrow><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mn>5</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>6</mn><mi>x</mi><mo>+</mo><mfrac><mrow><mn>5</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Ecuación indicial de la homogénea.</strong> Ensayando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup></mrow></math> y multiplicando la ecuación por <math display=\"inline\"><mi>x</mi></math> para adaptarla a la forma canónica de Frobenius, el coeficiente de <math display=\"inline\"><msup><mi>x</mi><mi>λ</mi></msup></math> da"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mn>4</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>λ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Para los dos índices se obtiene la misma recurrencia, <math display=\"inline\"><mrow><msub><mi>a</mi><mi>m</mi></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mrow><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msub><mi>/</mi><mn>2</mn></mrow></math>, y por tanto series geométricas cerradas: <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>a</mi><mn>0</mn></msub></mrow><mrow><mn>2</mn><mo>+</mo><mi>x</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>b</mi><mn>0</mn></msub><msqrt><mi>x</mi></msqrt></mrow><mrow><mn>2</mn><mo>+</mo><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Variación de constantes, para buscar la solución particular.</strong> Convirtiendo <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>b</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en funciones e imponiendo la condición estándar <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>b</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, se obtiene el sistema: <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>2</mn><mo>+</mo><mi>x</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>+</mo><mfrac><msqrt><mi>x</mi></msqrt><mrow><mn>2</mn><mo>+</mo><mi>x</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>b</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>−</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>+</mo><mfrac><mrow><mn>2</mn><mo>−</mo><mi>x</mi></mrow><mrow><mn>2</mn><msup><mrow><msqrt><mi>x</mi></msqrt><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>b</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>12</mn><mi>x</mi><mo>+</mo><msqrt><mn>5</mn></msqrt><mo>+</mo><mn>5</mn></mrow><mrow><mn>4</mn><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "De la primera ecuación <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>−</mi><msqrt><mi>x</mi></msqrt><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>b</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup></mrow></math>, y sustituyendo en la segunda y simplificando: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>b</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>12</mn><msqrt><mi>x</mi></msqrt><mo>+</mo><mfrac><mrow><msqrt><mn>5</mn></msqrt><mo>+</mo><mn>5</mn></mrow><msqrt><mi>x</mi></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><msub><mi>b</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><msup><mi>x</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><mo>+</mo><msqrt><mn>5</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>12</mn><mi>x</mi><mo>+</mo><msqrt><mn>5</mn></msqrt><mo>+</mo><mn>5</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>6</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>5</mn></msqrt><mo>+</mo><mn>5</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Solución particular</strong>, <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><msub><mi>b</mi><mn>0</mn></msub></mrow></math>: <math display=\"block\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>5</mn></msqrt><mo>+</mo><mn>5</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi></mrow><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      },
      {
       "mota": "testua",
       "html": "<strong>Solución general</strong> (homogénea + particular):"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mi>C</mi><mo>+</mo><mi>D</mi><msqrt><mi>x</mi></msqrt><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>5</mn></msqrt><mo>+</mo><mn>5</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi></mrow><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>"
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
       "html": "Resuelva por series de Frobenius (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> punto singular regular): <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "En forma canónica, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. Sustituyendo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup></mrow></math>:"
      },
      {
       "mota": "testua",
       "html": "<strong>Ecuación indicial</strong> (<math display=\"inline\"><msup><mi>x</mi><mi>λ</mi></msup></math>): <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> o <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Tomando <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>, coeficiente de <math display=\"inline\"><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mn>1</mn></mrow></msup></math>:</strong> <math display=\"inline\"><mrow><mn>2</mn><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Recurrencia general:</strong> <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mi>/</mi><mi>n</mi></mrow></math>, luego <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math> y <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Segunda solución, por d&#x27;Alembert</strong> (dividiendo por <math display=\"inline\"><mi>x</mi></math> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mi>/</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo>∫</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><msup><mi>x</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Integrando por partes (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>v</mi><mo>=</mo><mi>d</mi><mi>x</mi><mi>/</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mi>x</mi></mrow></math>): <math display=\"block\"><mrow><mo>∫</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><msup><mi>x</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>e</mi><mi>x</mi></msup><mi>x</mi></mfrac><mo>+</mo><mo>∫</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><mi>x</mi></mfrac><mi>d</mi><mi>x</mi><mo>,</mo></mrow></math> donde <math display=\"inline\"><mrow><mo>∫</mo><msup><mi>e</mi><mi>x</mi></msup><mi>/</mi><mi>x</mi><mi>d</mi><mi>x</mi></mrow></math> no es expresable en funciones elementales (integral exponencial, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Ei</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>):"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mo>+</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ei</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Solución general:</strong>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mspace width=\"0.167em\"></mspace><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>+</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ei</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
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
       "html": "Dado el sistema <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>z</mi><mi>/</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>y</mi></mrow></math>, deduzca la ecuación de Bessel para <math display=\"inline\"><mi>y</mi></math> y escriba la solución general."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "De la primera ecuación, multiplicando por <math display=\"inline\"><mi>x</mi></math>: <math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>z</mi></mrow></math>. Derivando: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><msup><mi>z</mi><mo>′</mo></msup></mrow></math>. Sustituyendo la segunda ecuación (<math display=\"inline\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>y</mi></mrow></math>): <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>y</mi><mo>⇒</mo><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> o, multiplicando por <math display=\"inline\"><mi>x</mi></math>, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: caso <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>0</mn></mrow></math> de la ecuación de Bessel general (<math display=\"inline\"><mrow><msup><mi>ν</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>)."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><msub><mi>Y</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "donde <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math> y <math display=\"inline\"><msub><mi>Y</mi><mn>0</mn></msub></math> son las funciones de Bessel de primera y segunda especie, de orden nulo."
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
       "html": "Resuelva por el método de Frobenius alrededor del punto singular regular doble <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Multiplicando la ecuación por <math display=\"inline\"><mi>x</mi></math>, en forma polinómica pura: <math display=\"block\"><mrow><msup><mi>x</mi><mn>3</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>6</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>−</mo><mn>6</mn><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Sustituyendo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup></mrow></math>, <strong>ecuación indicial</strong> (coeficiente de <math display=\"inline\"><msup><mi>x</mi><mi>λ</mi></msup></math>): <math display=\"block\"><mrow><mi>−</mi><mn>3</mn><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>6</mn><mi>λ</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>9</mn><mo>−</mo><mn>3</mn><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mn>3</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Rama <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>3</mn></mrow></math>.</strong> La recurrencia general tiene el factor <math display=\"inline\"><mrow><mi>λ</mi><mo>−</mo><mn>3</mn></mrow></math> en el numerador de todos los coeficientes, luego <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>) en esta rama: <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><msup><mi>x</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Rama <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>.</strong> Resulta una recurrencia general de tres puntos (dependiente de <math display=\"inline\"><msub><mi>a</mi><mrow><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msub></math> y <math display=\"inline\"><msub><mi>a</mi><mrow><mi>m</mi><mo>−</mo><mn>2</mn></mrow></msub></math>); calculado hasta <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow></math>, se pasa a la fórmula de d&#x27;Alembert para obtener la segunda solución (<math display=\"inline\"><msub><mi>y</mi><mn>2</mn></msub></math>): <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>∫</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mo>∫</mo><mi>p</mi><mi>d</mi><mi>x</mi></mrow></msup><msubsup><mi>y</mi><mn>1</mn><mn>2</mn></msubsup></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>∫</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>4</mn></msup></mfrac><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Mediante la división (<math display=\"inline\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) y fracciones parciales, al simplificar la integral solo queda <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>"
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
       "html": "Intuya (o halle, mediante series) las soluciones de las siguientes ecuaciones elementales: (A) <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; (B) <math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; (C) <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. Compruebe el caso (C) mediante los coeficientes, usando el método de series (no por soluciones intuidas)."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>(A)</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math>: la solución se intuye de inmediato, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>(B)</strong> <math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: la solución es <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mi>x</mi></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mi>A</mi><mi>x</mi><mo>−</mo><mi>A</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>)."
      },
      {
       "mota": "testua",
       "html": "<strong>(C), solución intuida.</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mi>y</mi></mrow></math>: la solución es <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>(C), por series.</strong> Ensayando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math>: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>−</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>−</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Recurrencia: <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Separando pares e impares: <math display=\"block\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mrow><mn>4</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mrow><mn>3</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mrow><mn>5</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>"
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
   "id": "a8",
   "maila": 2,
   "izenburua": "Series y método de Frobenius",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Complemento de nivel de examen del capítulo 6 de edf (y del capítulo de series de funciones del cálculo) — página completa:"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle las soluciones de la ecuación <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> desarrollando en series de potencias alrededor del punto singular regular."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle las soluciones de la ecuación <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>3</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> desarrollando alrededor de un punto singular regular."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle la solución general de la ecuación <math display=\"inline\"><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle la solución general: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. ¿Cuáles son los puntos singulares y de qué tipo?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>6</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle la solución general de la ecuación <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mn>5</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>5</mn><mo>+</mo><mfrac><msqrt><mn>5</mn></msqrt><mn>2</mn></mfrac></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>3</mn><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>8</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle la solución general de la ecuación <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva por el método de series de potencias: <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Determine para qué valores de <math display=\"inline\"><mi>β</mi></math> admite la ecuación <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>β</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> soluciones polinómicas, y halle la solución general cuando una de las soluciones sea un polinomio de primer orden. <span>(El dosier de resoluciones del curso, CG-01, cierra el caso <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>6</mn></mrow></math>: la recurrencia da <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.)</span>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>25</mn><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>10</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>25</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>25</mn><mi>x</mi><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Obtenga la solución general de la ecuación <math display=\"inline\"><mrow><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> como serie de potencias alrededor de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(Del dosier: ecuación indicial <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>; ramas <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>... con una corrección: los sumandos sumados mediante el cambio <math display=\"inline\"><mrow><mi>x</mi><mi>/</mi><mn>2</mn><mo>=</mo><mi>t</mi></mrow></math> dan <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>, y la segunda, por d&#x27;Alembert.)"
      }
     ]
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Del cuaderno (CNmetodosx) — series: Legendre, Hermite y Bessel",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntos ordinarios y solución en series de potencias"
    },
    {
     "mota": "testua",
     "html": "Ejemplos de analiticidad, definición de punto ordinario, teorema de las soluciones en series de potencias y ejemplo de recurrencia de coeficientes."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplos de analiticidad"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 55:</strong> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math> (analítica <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi></mrow></math>). <strong>56:</strong> las funciones polinómicas <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> son analíticas en todo el dominio. <strong>57:</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn></mrow></mfrac></mrow></math> analítica salvo en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math> (los que anulan el denominador)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Punto ordinario y teorema"
    },
    {
     "mota": "testua",
     "html": "Dada <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msub><mi>p</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>:"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Punto ordinario / singular",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> es un <strong>punto ordinario</strong> si <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub></mrow></math> son analíticas en <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>; en caso contrario, <strong>punto singular</strong>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Soluciones en series de potencias",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> es un punto ordinario, la ecuación tiene dos soluciones no triviales y l.i., de la forma <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msubsup><mi>C</mi><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>k</mi></msubsup></mrow></math>, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>R</mi></mrow></math> (<math display=\"inline\"><mrow><mi>R</mi><mo>&gt;</mo><mn>0</mn></mrow></math>) convergentes en el intervalo."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 58: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn></mrow></math> (analíticas); <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mi>k</mi></msup></mrow></math>: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mrow><mi>k</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>k</mi><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mi>k</mi></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mrow><mi>k</mi><mo>+</mo><mn>2</mn></mrow></msup><mo>+</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mi>k</mi></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Con los desplazamientos de índices (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>k</mi><mo>−</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>k</mi></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>k</mi><mo>+</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>k</mi></mrow></math>) e igualando términos: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>6</mn><msub><mi>C</mi><mn>3</mn></msub><mo>+</mo><mn>3</mn><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Por tanto: <math display=\"block\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>C</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>C</mi><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math> Por recurrencia: <math display=\"block\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><msub><mi>C</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>12</mn></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mi>C</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>C</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>12</mn></mfrac><mo>=</mo><mfrac><msub><mi>C</mi><mn>0</mn></msub><mn>4</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><msub><mi>C</mi><mn>3</mn></msub><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>20</mn></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mi>C</mi><mn>1</mn></msub><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>20</mn></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><msub><mi>C</mi><mn>1</mn></msub></mrow><mrow><mn>40</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math>; polinomios y funciones racionales (la última salvo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math>); criterio de punto ordinario (coeficiente principal uno, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub></mrow></math> analíticas en <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>); teorema. Ejemplo 58: <math display=\"inline\"><mrow><mn>2</mn><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mn>6</mn><msub><mi>C</mi><mn>3</mn></msub><mo>+</mo><mn>3</mn><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, y para <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>2</mn></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>; desplazamientos de índices y recurrencia correctos; <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>C</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><msub><mi>C</mi><mn>1</mn></msub><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mn>3</mn><msub><mi>C</mi><mn>1</mn></msub><mi>/</mi><mn>40</mn></mrow></math> (todos correctos). Se conserva la paridad: los términos pares dependen de <math display=\"inline\"><msub><mi>C</mi><mn>0</mn></msub></math>, los impares de <math display=\"inline\"><msub><mi>C</mi><mn>1</mn></msub></math>, construyendo las dos soluciones l.i. que asegura el teorema. En el enunciado del teorema puede leerse <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, pero se necesita <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (de acuerdo con la definición); recogido. Comprobación interna:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/03_serieak.typ</code>"
      },
      {
       "mota": "testua",
       "html": ". Véase <code>koadernoa_metodo_n_p036.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Series de potencias: dos soluciones, valores iniciales y cambio de centro"
    },
    {
     "mota": "testua",
     "html": "Las dos series independientes del ejemplo 58, un problema de valores iniciales (59) y la serie centrada en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> mediante el cambio <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> (60)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Final del ejemplo 58"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mi>x</mi><mo>−</mo><msub><mi>C</mi><mn>0</mn></msub><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>C</mi><mn>1</mn></msub><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><msub><mi>C</mi><mn>0</mn></msub><mn>4</mn></mfrac><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mfrac><mn>3</mn><mn>40</mn></mfrac><msub><mi>C</mi><mn>1</mn></msub><msup><mi>x</mi><mn>5</mn></msup><mo>+</mo><mi>⋯</mi><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><mn>3</mn><mn>40</mn></mfrac><msup><mi>x</mi><mn>5</mn></msup><mo>+</mo><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> (Dos soluciones linealmente independientes.)"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 59: problema de valores iniciales"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>3</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>6</mn></mrow></math>. Dividiendo por <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub></mrow></math> analíticas salvo en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. Sustituyendo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mi>k</mi></msup></mrow></math> e igualando índices: <math display=\"block\"><mrow><mi>−</mi><mn>2</mn><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>6</mn><msub><mi>C</mi><mn>3</mn></msub><mo>+</mo><mn>3</mn><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>3</mn><mi>n</mi><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"block\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mfrac><mrow><mn>3</mn><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>0</mn></msub></mrow><mrow><mn>6</mn><mi>.</mi></mrow></mfrac></mrow></math> Recurrencia (<math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>3</mn><mi>n</mi><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Condiciones iniciales: <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>6</mn></mrow></math>, luego <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>18</mn><mo>+</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>6</mn><mo>=</mo><mn>11</mn><mi>/</mi><mn>3</mn></mrow></math>: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>4</mn><mo>+</mo><mn>6</mn><mi>x</mi><mo>+</mo><mfrac><mn>11</mn><mn>3</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>⋯</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mfrac><mn>11</mn><mn>4</mn></mfrac><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 60: cambio de centro (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msubsup><mi>C</mi><mrow><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>k</mi></msubsup></mrow></math>; cambio <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>t</mi><mo>+</mo><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>C</mi><mi>k</mi></msub><msup><mi>t</mi><mi>k</mi></msup><mi>.</mi></mrow></math> (El desarrollo continúa en la página siguiente.)"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — corrección de la recurrencia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: las dos series del ejemplo 58 (<math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>4</mn></msup><mi>/</mi><mn>4</mn><mo>+</mo><mi>⋯</mi></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>2</mn><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>5</mn></msup><mi>/</mi><mn>40</mn><mo>+</mo><mi>⋯</mi></mrow></math>); en el 59, al dividir por <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math> aparecen las singularidades <math display=\"inline\"><mrow><mi>±</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>6</mn></mrow></math>; ⚠ <strong>corrección (llevada a la mesa):</strong> antes de agrupar, el original tiene <math display=\"inline\"><mrow><mi>+</mi><mn>3</mn><mi>n</mi><msub><mi>C</mi><mi>n</mi></msub></mrow></math> (correcto), pero después escribe <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>3</mn><mi>n</mi><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; lo correcto es <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>3</mn><mi>n</mi><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, por lo que la recurrencia es <math display=\"inline\"><mrow><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Los coeficientes aislados son correctos (<math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mn>11</mn><mi>/</mi><mn>3</mn></mrow></math>, luego <math display=\"inline\"><mrow><mn>4</mn><mo>+</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>11</mn><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></math>); con la recurrencia correcta <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mn>11</mn><mi>/</mi><mn>4</mn></mrow></math> (la suma <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del original no satisface la EDO a partir de esos órdenes). Ejemplo 60: <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> lleva la ecuación a <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (derivadas sin cambiar, serie centrada en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>). Comprobación interna: <code>euskara_osoa/kapituluak/edf/03_serieak.typ</code>. Véase <code>koadernoa_metodo_n_p038.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cambio de centro (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>) y PVI en series de potencias (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Desarrollo completo del ejemplo 60 alrededor del centro <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>, y comienzo de un problema de valores iniciales (61) alrededor de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 60: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>C</mi><mi>k</mi></msub><msup><mi>t</mi><mi>k</mi></msup></mrow></math> e igualando índices: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mi>n</mi><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>t</mi><mi>n</mi></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"block\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><msub><mi>C</mi><mn>0</mn></msub><mo>−</mo><msub><mi>C</mi><mn>1</mn></msub></mrow><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mi>.</mi></mrow></math> Por recurrencia: <math display=\"block\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>3</mn></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>1</mn></msub><mo>−</mo><msub><mi>C</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>6</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>3</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>4</mn></mfrac><mo>=</mo><mfrac><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mn>1</mn></msub></mrow><mn>12</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>4</mn></msub><mo>+</mo><msub><mi>C</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>5</mn></mfrac><mo>=</mo><mi>−</mi><mfrac><msub><mi>C</mi><mn>0</mn></msub><mrow><mn>20</mn><mi>.</mi></mrow></mfrac></mrow></math> Solución (<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><msup><mi>t</mi><mn>3</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><msup><mi>t</mi><mn>4</mn></msup><mo>+</mo><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><msup><mi>t</mi><mn>3</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><msup><mi>t</mi><mn>4</mn></msup><mo>+</mo><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 61: PVI <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>6</mn></mrow></math>. Cambio <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>t</mi><mo>+</mo><mn>2</mn></mrow></math>): <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Sustituyendo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>C</mi><mi>k</mi></msub><msup><mi>t</mi><mi>k</mi></msup></mrow></math>, igualando índices: <math display=\"block\"><mrow><mn>2</mn><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>t</mi><mi>n</mi></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> (La recurrencia y los coeficientes, en la página siguiente; con <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>6</mn></mrow></math> se esperan <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>7</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math>.)"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: ejemplo 60 (<math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>0</mn></msub><mo>−</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>6</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>12</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mi>−</mi><msub><mi>C</mi><mn>0</mn></msub><mi>/</mi><mn>20</mn></mrow></math>; coincide con el recálculo). <strong>Control interno:</strong> tomando <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, la serie es <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>t</mi><mo>+</mo><msup><mi>t</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mo>−</mo><msup><mi>t</mi><mn>4</mn></msup><mi>/</mi><mn>12</mn><mo>−</mo><mi>⋯</mi></mrow></math>, que coincide con <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>t</mi><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></math> (es decir, <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></math> normalizada en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>). Ejemplo 61: <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>2</mn></mrow></math> centra bien el PVI (<math display=\"inline\"><mrow><mi>x</mi><mi>y</mi><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi></mrow></math>); para <math display=\"inline\"><mrow><mn>2</mn><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn></mrow></math>, con <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>6</mn></mrow></math> se espera <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>7</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math> (se comprobará en la página siguiente). Comprobación interna:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/03_serieak.typ</code>"
      },
      {
       "mota": "testua",
       "html": ". Véase <code>koadernoa_metodo_n_p040.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Final del PVI y método de Frobenius"
    },
    {
     "mota": "testua",
     "html": "Final del PVI del ejemplo 61, y método de Frobenius alrededor de puntos singulares regulares (definición, teorema y ejemplos)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 61: final"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>C</mi><mn>1</mn></msub><mi>/</mi><mn>2</mn><mo>−</mo><msub><mi>C</mi><mn>0</mn></msub></mrow></math> y la recurrencia <math display=\"inline\"><mrow><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. Coeficientes: <math display=\"block\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>−</mo><msub><mi>C</mi><mn>1</mn></msub></mrow><mn>6</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mfrac><mrow><mn>3</mn><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub></mrow><mn>24</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><mn>4</mn><msub><mi>C</mi><mn>1</mn></msub></mrow><mrow><mn>120</mn><mi>.</mi></mrow></mfrac></mrow></math> <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>6</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>7</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mn>7</mn><mi>/</mi><mn>30</mn></mrow></math>. <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo>+</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup><mo>+</mo><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mn>6</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Frobenius: punto singular regular"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Punto singular regular",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> es un punto singular de <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msub><mi>p</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, y <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>p</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son analíticas en <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>, entonces <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> es un <strong>punto singular regular</strong> (en caso contrario, <strong>irregular</strong>)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 62:</strong> <math display=\"inline\"><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. Dividiendo <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> singular. <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mi>x</mi><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mn>5</mn></mrow><mn>2</mn></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">analitikoak </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mtext mathvariant=\"normal\">-n</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Por tanto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> es un <strong>punto singular regular</strong>."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Frobenius",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> es un punto singular regular, la ecuación tiene una solución no trivial: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>r</mi></msup><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>C</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>&lt;</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>R</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 63:</strong> <math display=\"inline\"><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> p.s.r.). <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>C</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>r</mi></mrow></msup></mrow></math>: <math display=\"block\"><mrow><mn>2</mn><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>r</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>r</mi></mrow></msup><mo>−</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>r</mi></mrow></msup><mo>+</mo><mo>∑</mo><msub><mi>C</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>r</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>5</mn><mo>∑</mo><msub><mi>C</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>r</mi></mrow></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> (La ecuación indicial y la recurrencia, en la página siguiente.)"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — corrección de $C_4$",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: la recurrencia del ejemplo 61 es correcta; <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>6</mn></mrow></math> con <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>7</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math> (confirma el control de la página 41). ⚠ <strong>Corrección (llevada a la mesa):</strong> el numerador interior de <math display=\"inline\"><msub><mi>C</mi><mn>4</mn></msub></math> es <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><msub><mi>C</mi><mn>0</mn></msub><mo>−</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math> y el signo exterior lo cambia, por lo que <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>24</mn></mrow></math> (no <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msub><mi>C</mi><mn>0</mn></msub><mo>−</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>24</mn></mrow></math>); con los datos <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>4</mn></mrow></math>, no <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>4</mn></mrow></math>; aquí corregido. <math display=\"inline\"><mrow><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><mn>4</mn><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>120</mn><mo>=</mo><mn>7</mn><mi>/</mi><mn>30</mn></mrow></math> correcto (la serie falla en el original solo a partir de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup></mrow></math>). Frobenius: ejemplo 62 (<math display=\"inline\"><mrow><mi>x</mi><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math> analíticas ⇒ p.s.r.; la no aparición de <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> no cambia la clasificación); teorema (al menos una solución a cada lado); ejemplo 63 planteado. Comprobación interna:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/03_serieak.typ</code>"
      },
      {
       "mota": "testua",
       "html": "(Frobenius, ecuación indicial). Véase <code>koadernoa_metodo_n_p042.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Método de Frobenius: ecuación indicial y las dos raíces"
    },
    {
     "mota": "testua",
     "html": "Final del ejemplo 63 (ecuación indicial, <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> y las dos recurrencias) y comienzo del ejemplo 64."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 63: ecuación indicial"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mrow><mi>k</mi><mo>+</mo><mi>r</mi></mrow></msup></mrow></math>, el coeficiente de <math display=\"inline\"><msup><mi>x</mi><mi>r</mi></msup></math>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>r</mi><mo>−</mo><mn>5</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>r</mi><mo>−</mo><mn>5</mn><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>±</mo><msqrt><mrow><mn>9</mn><mo>+</mo><mn>40</mn></mrow></msqrt></mrow><mn>4</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math>:</strong> <math display=\"inline\"><mrow><mi>k</mi><mo>≥</mo><mn>1</mn></mrow></math> para <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>k</mi><mn>2</mn></msup><mo>+</mo><mn>7</mn><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>C</mi><mi>k</mi></msub><mo>=</mo><mi>−</mi><msub><mi>C</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub></mrow></math>, luego: <math display=\"block\"><mrow><msub><mi>C</mi><mi>k</mi></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mi>k</mi></msup><mi>.</mi></mrow></math> <strong><math display=\"inline\"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>:</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>k</mi><mn>2</mn></msup><mo>−</mo><mn>7</mn><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>C</mi><mi>k</mi></msub><mo>=</mo><mi>−</mi><msub><mi>C</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub></mrow></math>, luego (llamando <math display=\"inline\"><msub><mi>D</mi><mi>k</mi></msub></math>): <math display=\"block\"><mrow><msub><mi>D</mi><mi>k</mi></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>D</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>D</mi><mi>k</mi></msub><msup><mi>x</mi><mi>k</mi></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mn>7</mn><mi>/</mi><mn>2</mn></mrow></math> (no entero): las dos series son l.i., sin resonancia. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 64: <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> punto singular regular. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mrow><mi>k</mi><mo>+</mo><mi>r</mi></mrow></msup></mrow></math>; del coeficiente de <math display=\"inline\"><msup><mi>x</mi><mi>r</mi></msup></math>, la ecuación indicial: <math display=\"block\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>r</mi><mo>−</mo><mfrac><mn>5</mn><mn>4</mn></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>r</mi><mo>−</mo><mfrac><mn>5</mn><mn>4</mn></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>r</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mo>±</mo><mn>3</mn></mrow><mn>2</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math> <strong><math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math>:</strong> el coeficiente de <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> es <math display=\"inline\"><mn>4</mn></math>, luego <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. Para <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>5</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mi>.</mi></mrow></math> (Continúa en la página siguiente.)"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: ejemplo 63 (ecuación indicial <math display=\"inline\"><mrow><mn>2</mn><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>r</mi><mo>−</mo><mn>5</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>; para <math display=\"inline\"><msub><mi>r</mi><mn>1</mn></msub></math> <math display=\"inline\"><mrow><msub><mi>C</mi><mi>k</mi></msub><mo>=</mo><mi>−</mi><msub><mi>C</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, para <math display=\"inline\"><msub><mi>r</mi><mn>2</mn></msub></math> <math display=\"inline\"><mrow><msub><mi>D</mi><mi>k</mi></msub><mo>=</mo><mi>−</mi><msub><mi>D</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mn>7</mn><mi>/</mi><mn>2</mn></mrow></math> no entero ⇒ las dos series son l.i.); ejemplo 64 (ecuación indicial <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>r</mi><mo>−</mo><mn>5</mn><mi>/</mi><mn>4</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>; para <math display=\"inline\"><msub><mi>r</mi><mn>1</mn></msub></math> <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow></math>). ⚠ <strong>Nota de redacción:</strong> en las soluciones de la página 44 la suma empieza en <code>k=0</code> puesta como coeficiente en la recurrencia correcta, y en <code>k=0</code> aparecen <math display=\"inline\"><msub><mi>C</mi><mrow><mi>−</mi><mn>1</mn></mrow></msub></math>/ <math display=\"inline\"><msub><mi>D</mi><mrow><mi>−</mi><mn>1</mn></mrow></msub></math> y un denominador nulo; la forma bien definida deja libres <math display=\"inline\"><msub><mi>C</mi><mn>0</mn></msub></math>, <math display=\"inline\"><msub><mi>D</mi><mn>0</mn></msub></math> y aplica la recurrencia solo para <math display=\"inline\"><mrow><mi>k</mi><mo>≥</mo><mn>1</mn></mrow></math>. Comprobación interna: <code>euskara_osoa/kapituluak/edf/03_serieak.typ</code>. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n_p044.typ</code>"
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
     "testua": "Final de Frobenius (resonancia) y definiciones básicas"
    },
    {
     "mota": "testua",
     "html": "Final del desarrollo de Frobenius del ejemplo 64 (las dos raíces y el caso de resonancia) y definiciones básicas de las ecuaciones diferenciales."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 64: rama <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>; como <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <strong>todos los impares son <math display=\"inline\"><mn>0</mn></math></strong>: <math display=\"block\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mfrac><msub><mi>C</mi><mn>0</mn></msub><mn>10</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mfrac><msub><mi>C</mi><mn>2</mn></msub><mn>28</mn></mfrac><mo>=</mo><mfrac><msub><mi>C</mi><mn>0</mn></msub><mn>280</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 64: rama <math display=\"inline\"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> (resonancia)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow></math>, es decir <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>."
    },
    {
     "mota": "abisua",
     "titulua": "Cuidado",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Atención:</strong> en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mi>/</mi><mn>0</mn></mrow></math> es una <strong>indeterminación</strong>. Escrita la recurrencia como <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>−</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> <math display=\"inline\"><mrow><mn>0</mn><mo>⋅</mo><msub><mi>C</mi><mn>3</mn></msub><mo>−</mo><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> (cierto para <math display=\"inline\"><mrow><mo>∀</mo><msub><mi>C</mi><mn>3</mn></msub></mrow></math>): <strong><math display=\"inline\"><msub><mi>C</mi><mn>3</mn></msub></math> es libre</strong> (resonancia)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mfrac><msub><mi>C</mi><mn>3</mn></msub><mrow><mn>5</mn><mo>⋅</mo><mn>2</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>7</mn></msub><mo>=</mo><mfrac><msub><mi>C</mi><mn>5</mn></msub><mrow><mn>7</mn><mo>⋅</mo><mn>4</mn></mrow></mfrac><mo>=</mo><mfrac><msub><mi>C</mi><mn>3</mn></msub><mrow><mn>7</mn><mo>⋅</mo><mn>5</mn><mo>⋅</mo><mn>4</mn><mo>⋅</mo><mn>2</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>⋯</mi></mrow></math> La rama <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup></mrow></math> de <math display=\"inline\"><msub><mi>y</mi><mn>2</mn></msub></math> empieza en la potencia <math display=\"inline\"><msup><mi>x</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup></math>: <strong>coincide</strong> con la solución de la raíz mayor."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Definiciones básicas (11/9/2013)"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Ejemplo 1:</strong> <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> → <strong>ecuación finita</strong> (no diferencial).",
      "<strong>Ejemplo 2:</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> → <strong>diferencial</strong> (EDO / ODE).",
      "<strong>Ejemplo 3:</strong> <math display=\"inline\"><mrow><msup><mi>d</mi><mn>2</mn></msup><mover><mi>r</mi><mo accent=\"true\">→</mo></mover><mi>/</mi><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mi>/</mi><msup><mi>r</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>r</mi><mo accent=\"true\">→</mo></mover></mrow></math> (gravitación).",
      "<strong>Orden:</strong> mayor orden de derivada. <strong>Ejemplo 4:</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>‴</mo></msup><mo>=</mo><mi>x</mi></mrow></math> (orden 3).",
      "<strong>Ecuación lineal:</strong> <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>a</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi>y</mi><mo>=</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <strong>Ejemplo 5:</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>‴</mo></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mspace width=\"0.167em\"></mspace><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mspace width=\"0.167em\"></mspace><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (lineal).",
      "<strong>Solución explícita.</strong> <strong>Ejemplo 6:</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>, solución <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>): <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mi>/</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> ✓, <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — resonancia bien detectada",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: ejemplo 64, rama <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, impares <math display=\"inline\"><mn>0</mn></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mi>/</mi><mn>10</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mi>/</mi><mn>280</mn></mrow></math>); ⭐ rama <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow></math>; en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> <math display=\"inline\"><mrow><mn>0</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><msub><mi>C</mi><mn>3</mn></msub></math> libre — el autor <strong>detecta bien la resonancia</strong>, aunque en la línea intermedia escribió <code>0 - C_3 = 0</code>, donde corresponde <math display=\"inline\"><mrow><mn>0</mn><mo>−</mo><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>). <math display=\"inline\"><mrow><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><msub><mi>C</mi><mn>3</mn></msub><mi>/</mi><mn>10</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>7</mn></msub><mo>=</mo><msub><mi>C</mi><mn>3</mn></msub><mi>/</mi><mn>280</mn></mrow></math> correctos. ⚠ El producto compacto final no rehace <math display=\"inline\"><msub><mi>C</mi><mn>5</mn></msub></math> (en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>⋅</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>⋅</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>120</mn></mrow></math>, no <math display=\"inline\"><mn>10</mn></math>); la recurrencia comprobada es válida. ⭐⭐ <strong>Actualización (en la página 50):</strong> <code>koadernoa_metodo_n_p050.typ</code> reindexa la rama <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><msup><mi>x</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup></mrow></math> y demuestra que coincide con la solución de la raíz mayor — la aparente tercera constante queda resuelta: solo dos soluciones independientes (EDO de orden 2). Las definiciones básicas son correctas. Comprobación interna:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/03_serieak.typ</code>"
      },
      {
       "mota": "testua",
       "html": ". Véase <code>koadernoa_metodo_n_p046.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resonancia de Frobenius y radio de convergencia de las series de potencias"
    },
    {
     "mota": "testua",
     "html": "Reorganización del caso de resonancia del ejemplo 64 (de las tres constantes aparentes solo dos son independientes) y radio de convergencia de las series de potencias."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Resonancia del ejemplo 64: solo dos soluciones"
    },
    {
     "mota": "testua",
     "html": "Reindexando la rama que empieza en <math display=\"inline\"><msub><mi>C</mi><mn>3</mn></msub></math> (<math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><msup><mi>x</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mo>∑</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>) (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math>), es <strong>la misma serie de <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></strong> (la de la raíz mayor). Por tanto la solución general: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>k</mi><mn>1</mn></msub><msub><mi>C</mi><mn>0</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mo>∑</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>+</mo><msub><mi>C</mi><mn>3</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub><msub><mi>C</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub><msub><mi>C</mi><mn>1</mn></msub><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mo>∑</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mspace width=\"0.167em\"></mspace><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mspace width=\"0.167em\"></mspace><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mo>∑</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mi>.</mi></mrow></math> <strong>Solo dos constantes independientes</strong> (EDO de orden 2; la tercera aparente coincide con <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math>). Comprobación por coeficientes: <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mi>/</mi><mn>10</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mi>/</mi><mn>280</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Radio de convergencia de las series de potencias"
    },
    {
     "mota": "testua",
     "html": "Si la solución <math display=\"inline\"><mrow><mo>∑</mo><msubsup><mi>C</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>n</mi></msubsup></mrow></math> converge en el intervalo <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>R</mi></mrow></math>, <math display=\"inline\"><mi>R</mi></math> = <strong>radio de convergencia</strong>. Cálculo:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mroot><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>n</mi></mroot><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 65:</strong> <math display=\"inline\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mo>∑</mo><msup><mi>x</mi><mi>n</mi></msup><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><mn>1</mn><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math>: <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mi>n</mi><mi>!</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mn>1</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mo>=</mo><mi>+</mi><mi>∞</mi><mi>.</mi></mrow></math> <strong>Ejemplo 66:</strong> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math>: <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>k</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>k</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mo>=</mo><mi>+</mi><mi>∞</mi><mi>.</mi></mrow></math> <strong>Ejemplo 67:</strong> <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><msup><mi>x</mi><mi>k</mi></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mi>k</mi></msub><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>k</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mn>1</mn><mn>1</mn></mfrac><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — resonancia resuelta",
     "blokeak": [
      {
       "mota": "testua",
       "html": "⭐ <strong>Resonancia del ejemplo 64 resuelta:</strong> reindexando la rama que empieza en <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><msup><mi>x</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup></mrow></math> (página 46) se demuestra que es la misma serie <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math> de la raíz mayor; por tanto no añade una tercera solución independiente, y <math display=\"inline\"><mrow><mi>A</mi><mo>,</mo><mi>B</mi></mrow></math> la reducción a dos constantes es correcta (EDO de orden 2). Los coeficientes lo confirman (<math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mi>/</mi><mn>10</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mi>/</mi><mn>280</mn></mrow></math>; <math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>10</mn><mo>+</mo><msup><mi>x</mi><mn>4</mn></msup><mi>/</mi><mn>280</mn><mo>+</mo><mi>⋯</mi></mrow></math>). La solución de la raíz menor es <math display=\"inline\"><mrow><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>−</mo><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; ambas forman una base de dimensión 2. La nota roja del autor dice «grado», pero la propiedad utilizada es el <strong>orden</strong> de la ecuación. Radio de convergencia: la fórmula operativa es <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>R</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">limsup</mi><mo>&#8289;</mo></mrow><mroot><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>n</mi></mroot></mrow></math> y (si existe) <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>R</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mi>/</mi><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>; los ejemplos son correctos (<math display=\"inline\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>,</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>: <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>∞</mi></mrow></math>; geométrica: <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>1</mn></mrow></math>). Comprobación interna: <code>euskara_osoa/kapituluak/edf/03_serieak.typ</code>. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n_p050.typ</code>"
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
     "testua": "Operaciones con series de potencias y ecuación exacta"
    },
    {
     "mota": "testua",
     "html": "Las series de potencias pueden derivarse/integrarse dentro del radio de convergencia; coeficientes de la serie de Taylor, suma y producto de funciones analíticas, y un ejercicio de ecuación exacta."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Derivación e integración"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><msubsup><mi>C</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>n</mi></msubsup></mrow></math> (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>R</mi></mrow></math>) es analítica: continua, <strong>derivable e integrable</strong> en <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>R</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 68:</strong> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></mfrac><mo>=</mo><mo>∫</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 69:</strong> <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>k</mi><msup><mi>x</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow><mrow><mi>k</mi><mi>!</mi></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Serie de Taylor"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msubsup><mi>C</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>n</mi></msubsup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math> <strong>Ejemplo 70:</strong> <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math>, en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mi>n</mi></mrow></math>, luego <math display=\"inline\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mo>∑</mo><msup><mi>x</mi><mi>n</mi></msup><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejercicio: ecuación exacta (ejemplo 18)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><msub><mi>M</mi><mi>y</mi></msub><mo>=</mo><mn>1</mn><mo>=</mo><msub><mi>N</mi><mi>x</mi></msub></mrow></math> (exacta). <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>F</mi><mi>y</mi></msub><mo>=</mo><mi>x</mi><mo>+</mo><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mo>⇒</mo><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><msup><mi>y</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>C</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>F</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>x</mi><mi>y</mi><mo>+</mo><mi>x</mi><mo>−</mo><mfrac><msup><mi>y</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Operaciones con funciones analíticas"
    },
    {
     "mota": "testua",
     "html": "<strong>(i) La suma</strong> es analítica. <strong>Ejemplo 71:</strong> <math display=\"inline\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mn>2</mn><mo>+</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>6</mn><mo>+</mo><msup><mi>x</mi><mn>4</mn></msup><mi>/</mi><mn>12</mn><mo>+</mo><msup><mi>x</mi><mn>5</mn></msup><mi>/</mi><mn>120</mn><mo>+</mo><mi>⋯</mi></mrow></math> (<math display=\"inline\"><mrow><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>+</mo><mo>∑</mo><msub><mi>b</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mo>+</mo><msub><mi>b</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>n</mi></msup></mrow></math>). <strong>(ii) El producto</strong> es analítico. <strong>Ejemplo 72:</strong> <math display=\"inline\"><msup><mi>e</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math>, mediante el producto de Cauchy: <math display=\"block\"><mrow><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>5</mn><mn>3</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><mn>17</mn><mn>24</mn></mfrac><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mi>⋯</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — correcciones",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: derivación/integración término a término dentro del radio; ejemplo 69 (derivada de <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math> reindexando <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math>); Taylor <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math>; ejemplo 71 (<math display=\"inline\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>); ejemplo 72 (mediante el producto de Cauchy <math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>5</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>5</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>17</mn><mi>/</mi><mn>24</mn></mrow></math>; <math display=\"inline\"><mrow><mn>10</mn><mi>/</mi><mn>6</mn><mo>=</mo><mn>5</mn><mi>/</mi><mn>3</mn></mrow></math> del original). ⚠ <strong>Correcciones (llevadas a la mesa):</strong> (1) ejemplo 68 — <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; el original escribe <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, que cambia el signo global (el primer término sería <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi></mrow></math>); (2) ejemplo 18 — en la línea de la derivada el original escribe <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><mn>3</mn></mrow></math>, que debe ser <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn></mrow></math> (de acuerdo con el enunciado y el resto de los cálculos; aquí corregido; el potencial <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>+</mo><mi>x</mi><mi>y</mi><mo>+</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>C</mi></mrow></math> es correcto). (3) el autor escribe «SERIE DE FOURIER» en el ejemplo 70, que es <strong>Taylor</strong> (Maclaurin). El problema <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> no tiene solución clásica en el intervalo alrededor de <math display=\"inline\"><mn>0</mn></math> (el lado derecho no está definido en <math display=\"inline\"><mn>0</mn></math>). Comprobación interna:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/03_serieak.typ</code>"
      },
      {
       "mota": "testua",
       "html": ". Véase <code>koadernoa_metodo_n_p052.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Series de potencias: Legendre y Hermite"
    },
    {
     "mota": "testua",
     "html": "Se exponen dos propiedades de las funciones analíticas y las soluciones en series de las ecuaciones de Legendre y de Hermite."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Propiedades de las funciones analíticas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mfrac><mi>f</mi><mi>g</mi></mfrac></math> es analítica en <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> si <math display=\"inline\"><mi>f</mi></math> y <math display=\"inline\"><mi>g</mi></math> son analíticas y <math display=\"inline\"><mrow><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≠</mo><mn>0</mn></mrow></math>.",
      "Si <math display=\"inline\"><mi>f</mi></math> es analítica en <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> y <math display=\"inline\"><mi>g</mi></math> es analítica en <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>g</mi><mo>∘</mo><mi>f</mi></mrow></math> es analítica en <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ecuación de Legendre"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><mi>x</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Sustituyendo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>C</mi><mi>k</mi></msub><msup><mi>t</mi><mi>k</mi></msup></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mi>λ</mi><mn>2</mn></mfrac><msub><mi>C</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mo>−</mo><mi>λ</mi></mrow><mn>6</mn></mfrac><msub><mi>C</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>λ</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>C</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La cadena par es <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>,</mo><msub><mi>C</mi><mn>2</mn></msub><mo>,</mo><msub><mi>C</mi><mn>4</mn></msub><mo>,</mo><mi>…</mi></mrow></math>, y la impar <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>,</mo><msub><mi>C</mi><mn>3</mn></msub><mo>,</mo><msub><mi>C</mi><mn>5</mn></msub><mo>,</mo><mi>…</mi></mrow></math>. Por ejemplo, <math display=\"block\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mfrac><mrow><mn>6</mn><mo>−</mo><mi>λ</mi></mrow><mrow><mn>4</mn><mo>⋅</mo><mn>3</mn></mrow></mfrac><msub><mi>C</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mfrac><mrow><mn>12</mn><mo>−</mo><mi>λ</mi></mrow><mrow><mn>5</mn><mo>⋅</mo><mn>4</mn></mrow></mfrac><msub><mi>C</mi><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la cadena de paridad correspondiente termina en el grado <math display=\"inline\"><mi>N</mi></math> y, tras una normalización, da el polinomio de Legendre <math display=\"inline\"><msub><mi>P</mi><mi>N</mi></msub></math>."
    },
    {
     "mota": "testua",
     "html": "En el caso <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> la cadena par es constante; la impar es <math display=\"inline\"><mrow><mi>t</mi><mo>+</mo><mfrac><msup><mi>t</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mfrac><msup><mi>t</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>+</mo><mi>…</mi><mo>=</mo><mtext mathvariant=\"normal\">artanh</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math>. [CORREGIDO: el papel llama «polinomio de Legendre» a la expresión completa; solo la rama constante <math display=\"inline\"><msub><mi>P</mi><mn>0</mn></msub></math> es un polinomio.]"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ecuación de Hermite"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><mi>x</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Sustituyendo la misma serie, <math display=\"block\"><mrow><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>n</mi><mo>−</mo><mi>λ</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>C</mi><mi>n</mi></msub><mo>,</mo></mrow></math> y los coeficientes inferiores son los mismos que en el cálculo de Legendre: <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mi>λ</mi><mfrac><msub><mi>C</mi><mn>0</mn></msub><mn>2</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><msub><mi>C</mi><mn>1</mn></msub><mn>6</mn></mfrac></mrow></math>. Si <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn><mi>N</mi></mrow></math>, la cadena de paridad de <math display=\"inline\"><mi>N</mi></math> termina y da el polinomio de Hermite."
    },
    {
     "mota": "oharra",
     "titulua": "Notación de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la serie de Legendre el autor cambia de <math display=\"inline\"><mi>t</mi></math> a <math display=\"inline\"><mi>x</mi></math> en la última línea. Las dos variables se han documentado como en la fotografía; aquí se ha usado <math display=\"inline\"><mi>t</mi></math> por coherencia."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Método de Frobenius: Bessel y función gamma"
    },
    {
     "mota": "testua",
     "html": "Se resuelve la ecuación de Bessel por Frobenius; se obtienen las raíces indiciales <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>±</mi><mi>p</mi></mrow></math>, la recurrencia de los coeficientes y la normalización mediante la función gamma de Euler."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ecuación de Bessel"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>p</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Tomando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mrow><mi>k</mi><mo>+</mo><mi>r</mi></mrow></msup></mrow></math>. El coeficiente de <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> da <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msup><mi>p</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>; como <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>±</mi><mi>p</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "En la rama <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>p</mi></mrow></math>, si <math display=\"inline\"><mrow><mi>p</mi><mo>≠</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, y <math display=\"block\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>≥</mo><mn>2</mn><mi>.</mi></mrow></math> Por tanto los coeficientes impares son nulos y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msub><mi>C</mi><mn>0</mn></msub><mrow><msup><mn>2</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>…</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En consecuencia, <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><msup><mi>x</mi><mi>p</mi></msup><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><msup><mn>2</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>…</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Función gamma de Euler"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Función gamma",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mi>t</mi></mrow></msup><msup><mi>t</mi><mrow><mi>s</mi><mo>−</mo><mn>1</mn></mrow></msup><mi>d</mi><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>s</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>s</mi><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. [CORREGIDO: en el papel el exponente del integrando es <math display=\"inline\"><msup><mi>t</mi><mi>s</mi></msup></math>; la definición compatible con la recurrencia exige <math display=\"inline\"><msup><mi>t</mi><mrow><mi>s</mi><mo>−</mo><mn>1</mn></mrow></msup></math>.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mi>!</mi></mrow></math> y <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>p</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>…</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eligiendo <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><msup><mn>2</mn><mi>p</mi></msup><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>J</mi><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>p</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mi>p</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "[CORREGIDO: en la última definición del papel el exponente es <math display=\"inline\"><mrow><mn>2</mn><mi>n</mi></mrow></math>; el factor anterior <math display=\"inline\"><mfrac><msup><mi>x</mi><mi>p</mi></msup><msup><mn>2</mn><mi>p</mi></msup></mfrac></math> muestra que debe ser <math display=\"inline\"><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mi>p</mi></mrow></math>.]"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Rama <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mi>p</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msub><mi>C</mi><mn>0</mn></msub><mrow><msup><mn>2</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>…</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> y las potencias son <math display=\"inline\"><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>−</mo><mi>p</mi></mrow></msup></math>. Cuando <math display=\"inline\"><mrow><mn>2</mn><mi>p</mi></mrow></math> es entero las dos raíces pueden dar resonancia; la segunda solución puede necesitar términos logarítmicos."
    },
    {
     "mota": "oharra",
     "titulua": "Lecturas dudosas",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el desarrollo algebraico previo a la recurrencia los términos están superpuestos, pero la recurrencia final es clara. La nota junto a <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> se ha leído como «si siempre es positivo»."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación de Bessel: rama de Frobenius de orden negativo"
    },
    {
     "mota": "testua",
     "html": "Se normaliza la rama <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mi>p</mi></mrow></math> de la ecuación de Bessel, se escribe la serie <math display=\"inline\"><msub><mi>J</mi><mrow><mi>−</mi><mi>p</mi></mrow></msub></math> y se precisa la condición de independencia lineal de las funciones <math display=\"inline\"><msub><mi>J</mi><mi>p</mi></msub></math> y <math display=\"inline\"><msub><mi>J</mi><mrow><mi>−</mi><mi>p</mi></mrow></msub></math>. La página 69 está en blanco."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Normalización de la rama <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mi>p</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Tomando"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><msup><mn>2</mn><mi>p</mi></msup><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Entonces,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>J</mi><mrow><mi>−</mi><mi>p</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>t</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>n</mi><mo>−</mo><mi>p</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Independencia lineal y especie"
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mi>p</mi></math> no es entero, <math display=\"inline\"><msub><mi>J</mi><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math> y <math display=\"inline\"><mrow><msub><mi>J</mi><mrow><mi>−</mi><mi>p</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son linealmente independientes. En cambio, cuando <math display=\"inline\"><mi>p</mi></math> es entero, <math display=\"inline\"><mrow><msub><mi>J</mi><mrow><mi>−</mi><mi>p</mi></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>p</mi></msup><msub><mi>J</mi><mi>p</mi></msub></mrow></math>, y la segunda solución independiente viene dada por la función <math display=\"inline\"><msub><mi>Y</mi><mi>p</mi></msub></math> de segunda especie."
    },
    {
     "mota": "oharra",
     "titulua": "Nota marginal del autor",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El autor escribe «las dos funciones de Bessel de segunda especie, de orden <math display=\"inline\"><mi>p</mi></math>». Las dos series son de primera especie, de órdenes <math display=\"inline\"><mi>p</mi></math> y <math display=\"inline\"><mrow><mi>−</mi><mi>p</mi></mrow></math>. [CORREGIDO: en el papel figura «de segunda especie»; lo correcto es «de primera especie».]"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Lecturas dudosas",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La palabra «de segunda especie» al margen está cortada, pero es la lectura más próxima a la fotografía. En la serie se usa <math display=\"inline\"><mi>t</mi></math> y en la última línea <math display=\"inline\"><mi>x</mi></math>; se han conservado las dos variables del autor."
      }
     ]
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Del cuaderno (CG-01) — series y Frobenius",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, hoja 5 (METMATCG01_0005, IMG_2025_07_06_20_14_58S.jpg; hoja de examen UPV/EHU ZTF-FCT, 8/1/2015, a nombre del usuario): x²(x+2)y''-4xy'+4y=(3/4)√x mediante series + forma normalizada. VERIFICACIÓN CRUZADA: soluciones de la homogénea = y1,y2 de la unidad 0002 (residuo 0); oráculo y_p=√x/(x+2) (SymPy). Álgebra en s y Laplace L[tf]=-F' verificados. Subíndices ilegibles declarados. Confianza alta",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ensayo en series de una EDO y oráculo (hoja de examen UPV/EHU)"
    },
    {
     "mota": "testua",
     "html": "Hoja de examen oficial UPV/EHU ZTF-FCT (8/1/2015, «Física»). Tema:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>4</mn><mi>y</mi><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><msqrt><mi>x</mi></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ensayo de serie de potencias"
    },
    {
     "mota": "testua",
     "html": "La hoja introduce <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math> y reindexa (<math display=\"inline\"><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><msup><mi>x</mi><mi>k</mi></msup></mrow></math>, comprobado); algunos subíndices intermedios son ilegibles (declarado) y el camino no se cierra en la propia hoja."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Forma normalizada y ecuación del recuadro"
    },
    {
     "mota": "testua",
     "html": "Dividiendo, la hoja recoge en un recuadro:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mfrac><mrow><mn>4</mn><mi>x</mi></mrow><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mn>4</mn><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mi>y</mi><mo>=</mo><mfrac><mrow><mn>3</mn><msqrt><mi>x</mi></msqrt></mrow><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "y al margen la forma totalmente normalizada (con <math display=\"inline\"><msup><mi>y</mi><mo>″</mo></msup></math> solo)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Oráculo (verificación cruzada con la unidad 0002)"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Las soluciones de la homogénea son <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac></mrow></math> y <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>x</mi><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac></mrow></math> (SymPy, residuo 0) — <strong>el origen del ejercicio del wronskiano de la unidad 0002 es esta hoja</strong>. 0002 usó <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mi>x</mi></msqrt></mrow></math> SIN normalizar; para esta EDO el sistema correcto exige <math display=\"inline\"><mi>r</mi></math> de la forma normalizada.</em>"
    },
    {
     "mota": "testua",
     "html": "Por variación de parámetros (<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mi>x</mi></msqrt><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>2</mn><msup><mi>x</mi><mfrac><mn>3</mn><mn>2</mn></mfrac></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>3</mn><mrow><mn>2</mn><msqrt><mi>x</mi></msqrt></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mfrac><msqrt><mi>x</mi></msqrt><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "y <math display=\"inline\"><msub><mi>y</mi><mi>p</mi></msub></math> satisface la EDO completa (residuo 0). <strong>Este es el oráculo del ejercicio.</strong>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Notas sueltas al pie"
    },
    {
     "mota": "testua",
     "html": "Una ecuación de tipo Bessel (<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>8</mn><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>λ</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, nota), álgebra en <math display=\"inline\"><mi>s</mi></math> correcta (<math display=\"inline\"><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>+</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>s</mi><mo>−</mo><mn>16</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) y propiedad de Laplace, verificadas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">ℒ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>F</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><mi>s</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0005</code>, hoja de examen UPV/EHU ZTF-FCT, 8/1/2015; <code>IMG_2025_07_06_20_14_58S.jpg</code>; nombre del usuario en el encabezado — autoría completa). La reindexación principal de la serie, las dos soluciones de la homogénea, el oráculo <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><msqrt><mi>x</mi></msqrt><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el álgebra en <math display=\"inline\"><mi>s</mi></math> y Laplace, verificados con SymPy. Subíndices ilegibles y datos borrosos declarados como dudas; NINGUNA corrección. ⭐ Referencia cruzada: el ejercicio de la unidad 0002 procede de esta hoja (nota de retorno en 0002). Véase <code>koadernoa_metmatcg01_p005.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, hoja 6 (METMATCG01_0006, IMG_2025_07_06_20_15_09S.jpg): hoja de trabajo ligera — comienzo de un sistema lineal (matriz (-1 1;-1 -1), autovalores -1±i, foco estable) y ANÁLISIS INDICIAL (Frobenius) de la EDO de 0005: p0=-2, q0=2, raíces indiciales 1,2 = exponentes principales de y1,y2. Verificado con SymPy; error de coeficiente (-4λ vs -2λ) corregido por el autor en la factorización. Tercera referencia cruzada con la cadena 0005/0002. Confianza alta",
     "hizkuntza": "es"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Análisis indicial (Frobenius) y comienzo de un sistema lineal"
    },
    {
     "mota": "testua",
     "html": "Hoja de trabajo ligera, con los comienzos de dos ejercicios."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Sistema lineal no homogéneo"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La matriz de la parte lineal es <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>: polinomio característico <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>λ</mi><mo>+</mo><mn>2</mn></mrow></math>, autovalores <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>±</mo><mi>i</mi></mrow></math> — <strong>foco (espiral) estable</strong>. (El ejercicio no se desarrolla en la hoja.)"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Análisis indicial de la EDO de 0005"
    },
    {
     "mota": "testua",
     "html": "Para la ecuación <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>4</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (la homogénea de 0005), en forma normalizada <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>−</mi><mn>4</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>4</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; punto singular regular en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><mi>x</mi><mi>P</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><msup><mi>x</mi><mn>2</mn></msup><mi>Q</mi><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ecuación indicial:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>p</mi><mn>0</mn></msub><mi>λ</mi><mo>+</mo><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>λ</mi><mo>+</mo><mn>2</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">La fuente escribió en una línea <math display=\"inline\"><mrow><mi>−</mi><mn>4</mn><mi>λ</mi></mrow></math> en lugar de <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>λ</mi></mrow></math> (<math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>5</mn><mi>λ</mi></mrow></math> erróneo), pero <strong>su propia factorización lo corrige</strong>: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>s</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>s</mi><mo>+</mo><mn>2</mn></mrow></math>, confirmado por la división de Ruffini (resto 0). Aquí corregido.</em>"
    },
    {
     "mota": "testua",
     "html": "⭐ <strong>Verificación cruzada con 0005:</strong> las raíces indiciales son <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>, justamente los exponentes principales de las soluciones de 0005: <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> y <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>x</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><mi>x</mi></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></math>). Frobenius cierra el círculo: 0005 dio las soluciones, 0006 confirma sus exponentes."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0006</code>, hoja suelta, sin fecha;"
      },
      {
       "mota": "testua",
       "html": "<code>IMG_2025_07_06_20_15_09S.jpg</code>"
      },
      {
       "mota": "testua",
       "html": "). <strong>Peso: ligero</strong> (media hoja vacía). Comienzos de dos ejercicios: sistema lineal (<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>±</mo><mi>i</mi></mrow></math>, foco estable) y análisis indicial de la EDO de 0005 (raíces 1, 2). Todo verificado con SymPy."
      },
      {
       "mota": "testua",
       "html": "<span>⚠ Error de coeficiente, con mención</span>"
      },
      {
       "mota": "testua",
       "html": "(<math display=\"inline\"><mrow><mi>−</mi><mn>4</mn><mi>λ</mi></mrow></math> vs <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>λ</mi></mrow></math>), corregido por el propio autor en la factorización. Dudas de lectura (x+4 vs x+2, √8 vs √x) declaradas. ⭐ Tercera referencia cruzada con la cadena 0005/0002. Véase <code>koadernoa_metmatcg01_p006.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 117 (METMATCG01_0117, IMG_2025_07_12_12_26_03S.jpg; «12/12/2011», ejercicio 17): método de Frobenius para la ecuación 4x^2 y''+2x(1-x)y'-xy=0 — ecuación indicial 4lambda^2-2lambda=0 (lambda=0,1/2), recurrencia a_n=a_(n-1)/(2(n+lambda)); lambda=0 -> a_n=a_0/(2^n n!) -> y1=e^{x/2}; lambda=1/2 -> a_n=a_0/(2n+1)!! -> y2=e^{x/2} erf(sqrt(x/2)). Verificado con SymPy (y1,y2 residuo 0; dsolve lo confirma). Confianza alta",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Método de Frobenius: <math display=\"inline\"><mrow><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Alrededor del punto singular regular <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, ensayando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></msub><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ecuación indicial y recurrencia"
    },
    {
     "mota": "testua",
     "html": "Igualando los términos de grado <math display=\"inline\"><msup><mi>x</mi><mi>λ</mi></msup></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>4</mn><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>λ</mi><mo>=</mo><mn>4</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>λ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Recurrencia general:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Primera solución (<math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>2</mn><mi>n</mi></msup><mi>n</mi><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, luego"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></munder><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><msup><mn>2</mn><mi>n</mi></msup><mi>n</mi><mi>!</mi></mrow></mfrac><mo>=</mo><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></munder><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>/</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Segunda solución (<math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mi>!</mi></mrow></math> (producto de los impares <math display=\"inline\"><mrow><mn>1</mn><mo>⋅</mo><mn>3</mn><mo>⋅</mo><mn>5</mn><mi>…</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), luego <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msqrt><mi>x</mi></msqrt><msub><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></msub><msup><mi>x</mi><mi>n</mi></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mi>!</mi></mrow></math>, en forma cerrada:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> erf</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Solución general: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> erf</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. La convergencia de las series se comprueba con el criterio de D&#x27;Alembert (radio infinito)."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Ecuación indicial, recurrencia y las dos soluciones verificadas con SymPy: <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> y <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mtext mathvariant=\"normal\">erf</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dan ambas residuo 0 en la EDO.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0117</code>, <code>IMG_2025_07_12_12_26_03S.jpg</code>; lote «MÉTODO M.», «12/12/2011», ejercicio 17). Solución completa de Frobenius, con la forma cerrada de la segunda solución (función error). Verificado con SymPy; sin correcciones. Véase <code>koadernoa_metmatcg01_p117.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 118 (METMATCG01_0118, IMG_2025_07_12_12_26_11S.jpg): Frobenius y''(x-1)-y'(x-3)-y=0 (= ejercicio 17 del boletín «Otros Ejercicios III»). Con el cambio z=x-1, z^2 y''-z^2 y'+2z y'-z y=0; ecuación indicial lambda^2+lambda=0 (lambda=0,-1), recurrencia a_n=a_(n-1)/(n+lambda+1); lambda=0 -> y=(a0/z)(e^z-1), lambda=-1 -> y=(a0/z)e^z; solución general y=A e^x/(x-1)+B/(x-1). Verificado con SymPy (las dos bases y la general dan residuo 0). Confianza alta",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Método de Frobenius: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ejercicio 17 del boletín «Otros Ejercicios III». <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> es un punto singular; se aplica Frobenius mediante el cambio <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Cambio y ecuación indicial"
    },
    {
     "mota": "testua",
     "html": "Haciendo <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mn>3</mn><mo>=</mo><mi>z</mi><mo>−</mo><mn>2</mn></mrow></math>) y multiplicando por <math display=\"inline\"><mi>z</mi></math>: <math display=\"inline\"><mrow><msup><mi>z</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>z</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>z</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. Luego"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>λ</mi><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mi>λ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mrow><mi>n</mi><mo>+</mo><mi>λ</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Las dos soluciones"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math>, luego <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><msub><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></msub><msup><mi>z</mi><mi>n</mi></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>z</mi></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math>, luego <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>z</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msub><mi>a</mi><mn>0</mn></msub><msub><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></msub><msup><mi>z</mi><mi>n</mi></msup><mi>/</mi><mi>n</mi><mi>!</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mi>z</mi></msup></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Solución general"
    },
    {
     "mota": "testua",
     "html": "Combinando y restableciendo <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><msup><mi>e</mi><mi>z</mi></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow></math>, redenominando las constantes):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mfrac><msup><mi>e</mi><mi>x</mi></msup><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>+</mo><mover><mi>B</mi><mo accent=\"true\">̃</mo></mover><mfrac><mn>1</mn><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Ecuación indicial, recurrencias y solución verificadas con SymPy: las soluciones base <math display=\"inline\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (y la combinación general) dan residuo 0 en la EDO.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0118</code>, <code>IMG_2025_07_12_12_26_11S.jpg</code>; lote «MÉTODO M.»). Solución completa de Frobenius del ejercicio 17 del boletín «Otros Ejercicios III» (boletín impreso en 0111/0112). Verificado con SymPy; sin correcciones. Véase <code>koadernoa_metmatcg01_p118.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 132 (METMATCG01_0132, IMG_2025_07_12_12_28_48S.jpg; «M. METHODS 25/11/2015»): descomposición de función par/impar (f=impar+par; serie par/impar) + Frobenius (x^2-1)y''+4xy'+2y=0 en x=1 (u=x-1, u(u+2)y''+4(u+1)y'+2y=0, índice 2lambda(lambda+1)=0 -> lambda=0,-1) + serie geométrica 1/(1-x^2)=sum x^{2n}. Verificado con SymPy. Confianza alta",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Funciones pares/impares, Frobenius y serie geométrica"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Descomposición par/impar"
    },
    {
     "mota": "testua",
     "html": "Cualquier función puede dividirse en parte impar y par:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><munder><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo accent=\"true\">⏟</mo></munder><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bakoitia</mtext></mrow></munder><mo>+</mo><munder><munder><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo accent=\"true\">⏟</mo></munder><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bikoitia</mtext></mrow></munder><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Impar: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, <math display=\"inline\"><msup><mi>x</mi><mn>3</mn></msup></math>); par: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>). En forma de serie: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mo>∑</mo><mi>k</mi></msub><msub><mi>a</mi><mrow><mn>2</mn><mi>k</mi></mrow></msub><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi></mrow></msup><mo>+</mo><msub><mo>∑</mo><mi>k</mi></msub><msub><mi>a</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow></math> (par + impar)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Frobenius: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (alrededor de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Haciendo <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mn>4</mn><mi>x</mi><mo>=</mo><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> indizea: </mtext><mspace width=\"0.333em\"></mspace></mrow><mn>2</mn><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>→</mo><mi>λ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> es un punto singular regular; esta hoja llega hasta la ecuación indicial.)"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Serie geométrica"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></munder><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></mfrac><mo>=</mo><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></munder><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">La descomposición par/impar, la transformación de Frobenius y la ecuación indicial (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math>), y la serie geométrica, verificadas con SymPy.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0132</code>, <code>IMG_2025_07_12_12_28_48S.jpg</code>; lote «MÉTODO M.», «25/11/2015»). Par/impar + Frobenius (hasta el índice) + serie geométrica. Verificado con SymPy; sin correcciones. Véase <code>koadernoa_metmatcg01_p132.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 133 (METMATCG01_0133, IMG_2025_07_12_12_28_57S.jpg; continuación de 0132): solución en serie de (x^2-1)y''+4xy'+2y=0 en x=0 (punto ordinario; x=+-1 singulares). Recurrencia a_{n+2}=a_n (n(n-1)+4n+2=(n+1)(n+2)) -> los pares a0, los impares a1; solución y=(A1+A2 x)/(1-x^2) (|x|<1). Abajo, Frobenius en x=1 (desde 0132). Verificado con SymPy (las dos bases dan residuo 0). Confianza alta",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Solución en serie: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> en el punto ordinario)"
    },
    {
     "mota": "testua",
     "html": "Continuación de 0132. <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> es un punto ordinario; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math> singulares. Se resuelve en series de potencias en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Recurrencia"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math>, de los órdenes <math display=\"inline\"><msup><mi>x</mi><mn>0</mn></msup></math> y <math display=\"inline\"><msup><mi>x</mi><mn>1</mn></msup></math> resulta <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub></mrow></math>; en el resto:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>4</mn><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto todos los términos pares son <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math> y todos los impares <math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Solución"
    },
    {
     "mota": "testua",
     "html": "Usando series geométricas (<math display=\"inline\"><mrow><mo>∑</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mo>∑</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>=</mo><mi>x</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></munder><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></munder><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>=</mo><mfrac><msub><mi>A</mi><mn>1</mn></msub><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub><mfrac><mi>x</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Convergencia: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math> (salvo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>). Alrededor del singular <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> se aplica Frobenius (véase 0132; índice <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">La recurrencia <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub></mrow></math>, las soluciones base <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, y la solución general verificadas con SymPy (residuo 0). La ecuación se resuelve junto con la unidad 0132.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0133</code>, <code>IMG_2025_07_12_12_28_57S.jpg</code>; lote «MÉTODO M.», «25/11/2015»). Solución en serie de <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> (continuación de 0132, donde <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> se plantea por Frobenius). Verificado con SymPy; sin correcciones. Véase <code>koadernoa_metmatcg01_p133.typ</code> y <code>koadernoa_metmatcg01_p132.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 134 (METMATCG01_0134, IMG_2025_07_12_12_29_05S.jpg; final de 0132-0133): resolución de (x^2-1)y''+4xy'+2y=0 en x=1. Frobenius lambda=0: a_{n+1}=-1/2 a_n -> y1=2/(x+1); por D'Alembert (P=4x/(x^2-1), int P=2ln|x^2-1|) y2=1/(2(1-x^2)); solución general y=(A1+A2 x)/(1-x^2). Verificado con SymPy (y1,y2 residuo 0). Confianza alta",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: resolución en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> (Frobenius + D&#x27;Alembert)"
    },
    {
     "mota": "testua",
     "html": "Final de las unidades 0132-0133: en el punto singular <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> se aplica Frobenius y la segunda solución se obtiene por D&#x27;Alembert (reducción de orden)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Frobenius (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>) y primera solución"
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math>, la recurrencia:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>a</mi><mi>n</mi></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math> y"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></munder><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mi>u</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mi>u</mi><mi>/</mi><mn>2</mn></mrow></mfrac><mo>=</mo><mfrac><mn>2</mn><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Segunda solución (D&#x27;Alembert)"
    },
    {
     "mota": "testua",
     "html": "Como las raíces indiciales difieren en un entero, la segunda por reducción de orden. <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>4</mn><mi>x</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mo>∫</mo><mi>P</mi><mi>d</mi><mi>x</mi><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>∫</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mo>∫</mo><mi>P</mi><mi>d</mi><mi>x</mi></mrow></msup><msubsup><mi>y</mi><mn>1</mn><mn>2</mn></msubsup></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>−</mi><mn>2</mn></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Solución general"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><msub><mi>A</mi><mn>1</mn></msub><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub><mfrac><mi>x</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En acuerdo con el resultado de 0133 (obtenido desde el punto ordinario <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">La recurrencia <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> de D&#x27;Alembert y la solución general verificados con SymPy (residuo 0). Método: <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>&gt;</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>→</mo><msub><mi>y</mi><mn>1</mn></msub></mrow></math> Frobenius, luego D&#x27;Alembert <math display=\"inline\"><mrow><mo>→</mo><msub><mi>y</mi><mn>2</mn></msub></mrow></math>.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0134</code>, <code>IMG_2025_07_12_12_29_05S.jpg</code>; lote «MÉTODO M.»). Resolución de <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> (final de 0132-0133). Verificado con SymPy; sin correcciones. Véase <code>koadernoa_metmatcg01_p134.typ</code>,"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p133.typ</code>"
      },
      {
       "mota": "testua",
       "html": "y <code>koadernoa_metmatcg01_p132.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 145 (METMATCG01_0145, IMG_2025_07_12_12_30_53S.jpg; en euskera): resolución por series, para qué beta la ecuación (1+x^2)y''-2xy'+beta·y=0 tiene soluciones polinómicas. Recurrencia a_{n+2}=-(n^2-3n+beta)/((n+1)(n+2))·a_n; se corta cuando beta=n(3-n). beta=0 → y=A+B(x+x^3/3); beta=2 → y=Ax+B(1-x^2). Verificado con SymPy (denom. de a5=120). Confianza alta",
     "hizkuntza": "eu/es"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resolución por series: soluciones polinómicas (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>β</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<strong>Pregunta:</strong> ¿para qué <math display=\"inline\"><mi>β</mi></math> admite la ecuación <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>β</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> soluciones <strong>polinómicas</strong>? Sustituyendo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></msub><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math> e igualando <math display=\"inline\"><msup><mi>x</mi><mi>n</mi></msup></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>n</mi><mo>+</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>n</mi><mo>+</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Primeros coeficientes: <math display=\"block\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mi>β</mi><mn>2</mn></mfrac><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mo>−</mo><mi>β</mi></mrow><mn>6</mn></mfrac><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mfrac><mrow><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>24</mn></mfrac><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>5</mn></msub><mo>=</mo><mfrac><mrow><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>120</mn></mfrac><msub><mi>a</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Condición polinómica"
    },
    {
     "mota": "testua",
     "html": "La serie se corta si se cumple <math display=\"inline\"><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>n</mi><mo>+</mo><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math>, es decir <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En los casos <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>2</mn></mrow></math> <strong>las dos</strong> soluciones son polinómicas:"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<math display=\"inline\"><mi>β</mi></math>",
      "koefizienteak",
      "<strong>soluzio orokorra</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mn>0</mn></math>",
       "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mi>/</mi><mn>3</mn><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><msub><mi>a</mi><mn>5</mn></msub><mo>=</mo><mn>0</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      ],
      [
       "<math display=\"inline\"><mn>2</mn></math>",
       "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><msub><mi>a</mi><mn>5</mn></msub><mo>=</mo><mn>0</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto, para <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>2</mn></mrow></math> la solución general es <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mtext mathvariant=\"normal\">SOL </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Recurrencia, coeficientes y soluciones polinómicas (<math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>2</mn></mrow></math>) verificados con SymPy, sin correcciones. La condición <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> admite también otros valores (p. ej. <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>−</mi><mn>4</mn><mo>→</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>), pero en ellos solo una solución es polinómica; <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>2</mn></mrow></math> son los que tienen polinómica toda la solución general.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0145</code>, <code>IMG_2025_07_12_12_30_53S.jpg</code>). Resolución por series (en euskera): <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>β</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, soluciones polinómicas para <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>2</mn></mrow></math>. Verificado con SymPy. Véase <code>koadernoa_metmatcg01_p145.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 157 (METMATCG01_0157, IMG_2025_07_12_12_32_41S.jpg; «METODO MATEMATIKOAK», 3/12/2014): EDO lineal de orden 2 (x^2-3x+2)y'' - 2(3-2x)y' + 2y = 1. Singularidades de FROBENIUS: puntos singulares regulares x=1, x=2 (p0=2, q0=0). RESOLUCIÓN CORRECTA: EDO exacta mediante el cambio de variable u=(x^2-3x+2)y -> u''=1 -> u=x^2/2+Ax+B -> solución general cerrada y(x)=(Ax+B)/(x^2-3x+2) + 1/2. Comportamiento gráfico de las curvas solución. ⚠ Pequeña corrección: lapsus 5-2x del manuscrito corregido a 3-2x. Verificado con SymPy. Confianza alta",
     "hizkuntza": "eu/es"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "EDO exacta y singularidades de Frobenius"
    },
    {
     "mota": "testua",
     "html": "Ecuación diferencial lineal no homogénea de segundo orden:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Puntos singulares y método de Frobenius"
    },
    {
     "mota": "testua",
     "html": "Escrita en forma normalizada (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>): <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En las raíces del denominador (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn></mrow></math>) los coeficientes son singulares:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>1</mn></mrow></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>&lt;</mo><mi>∞</mi></mrow></math> y <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>1</mn></mrow></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>&lt;</mo><mi>∞</mi></mrow></math>: <math display=\"inline\"><mrow><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> es un <strong>punto singular regular</strong>.",
      "<math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>2</mn></mrow></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>&lt;</mo><mi>∞</mi></mrow></math> y <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>2</mn></mrow></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>&lt;</mo><mi>∞</mi></mrow></math>: <math display=\"inline\"><mrow><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>2</mn></mrow></math> es un <strong>punto singular regular</strong>."
     ]
    },
    {
     "mota": "testua",
     "html": "En torno a esos puntos puede aplicarse el método de las series de potencias generalizadas (<strong>Frobenius</strong>) (con el cambio <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> o <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>2</mn></mrow></math>). En torno a cualquier punto ordinario <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>∉</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, en cambio, puede usarse la serie de Taylor ordinaria."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Resolución correcta: EDO exacta y cambio de variable"
    },
    {
     "mota": "testua",
     "html": "Sin recurrir a desarrollos en serie de Frobenius, la ecuación tiene estructura <strong>exacta</strong>. Definiendo la función auxiliar <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>u</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>y</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Teniendo en cuenta <math display=\"inline\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el lado izquierdo es exactamente igual a <math display=\"inline\"><mrow><msup><mi>u</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Por tanto:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>u</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Integrando directamente dos veces: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>+</mo><mi>A</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Solución general"
    },
    {
     "mota": "testua",
     "html": "Despejando <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>A</mi><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mo>+</mo><mfrac><mi>B</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Descomponiendo la parte particular: <math display=\"block\"><mrow><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mrow><mn>3</mn><mi>x</mi><mo>−</mo><mn>2</mn></mrow><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math> Como el término <math display=\"inline\"><mfrac><mrow><mn>3</mn><mi>x</mi><mo>−</mo><mn>2</mn></mrow><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></math> se integra en la parte homogénea (mediante la redefinición de las constantes <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math>), la solución general queda en la forma cerrada más simple:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Comportamiento de las curvas solución"
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Aunque la ecuación tiene puntos singulares regulares para el método de Frobenius (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>), la estructura diferencial es <strong>exacta</strong>: eligiendo <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>u</mi><mo>″</mo></msup><mo>=</mo><mn>1</mn></mrow></math> se convierte en una ecuación ordinaria integrable, que da la solución algebraica cerrada completa sin series infinitas. Todo verificado con SymPy.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0157</code>, <code>IMG_2025_07_12_12_32_41S.jpg</code>). Fecha: 3-12-2014. Tema: EDO de segundo orden, puntos singulares regulares (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>) y resolución exacta mediante cambio de variable (<math display=\"inline\"><mrow><msup><mi>u</mi><mo>″</mo></msup><mo>=</mo><mn>1</mn></mrow></math>). Erratas: el lapsus <math display=\"inline\"><mrow><mn>5</mn><mo>−</mo><mn>2</mn><mi>x</mi></mrow></math> del manuscrito se corrigió con el coeficiente <math display=\"inline\"><mrow><mn>3</mn><mo>−</mo><mn>2</mn><mi>x</mi></mrow></math>. Verificado con SymPy. Véase <code>koadernoa_metmatcg01_p157.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 159 (METMATCG01_0159, IMG_2025_07_12_12_34_24S.jpg): serie de Taylor de sin x y desarrollo de Frobenius/Puiseux de x^(-1/2) sin x. Sin errores; verificado con SymPy. Confianza alta",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Serie de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> y desarrollo con exponente semientero"
    },
    {
     "mota": "testua",
     "html": "Serie de Maclaurin del seno:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mi>x</mi><mo>−</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mrow><mn>3</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mrow><mn>5</mn><mi>!</mi></mrow></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>7</mn></msup><mrow><mn>7</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mi>⋯</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Multiplicando por el factor <math display=\"inline\"><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup></math>, cada exponente disminuye en <math display=\"inline\"><mfrac><mn>1</mn><mn>2</mn></mfrac></math> unidades:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><msup><mi>x</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></msup><mo>−</mo><mfrac><msup><mi>x</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup><mrow><mn>3</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mfrac><mn>9</mn><mn>2</mn></mfrac></msup><mrow><mn>5</mn><mi>!</mi></mrow></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mfrac><mn>13</mn><mn>2</mn></mfrac></msup><mrow><mn>7</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mi>⋯</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En general:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El primer exponente del desarrollo es <math display=\"inline\"><mfrac><mn>1</mn><mn>2</mn></mfrac></math>; por tanto, no es una serie de Taylor ordinaria alrededor de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, sino una <strong>serie generalizada de tipo Frobenius/Puiseux</strong>. En los reales se toma la rama <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Todos los términos del manuscrito son correctos. Las expresiones finitas de la derecha son el comienzo de la serie infinita; el siguiente término es <math display=\"inline\"><mrow><mi>−</mi><mfrac><msup><mi>x</mi><mfrac><mn>13</mn><mn>2</mn></mfrac></msup><mrow><mn>7</mn><mi>!</mi></mrow></mfrac></mrow></math>.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<code>METMATCG01_0159 / IMG_2025_07_12_12_34_24S.jpg</code>"
      },
      {
       "mota": "testua",
       "html": ". Página casi en blanco; las dos líneas superiores izquierdas se han transcrito íntegramente. Verificado con SymPy; edición crítica:"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p159.typ</code>"
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
   "id": "a11",
   "maila": 2,
   "izenburua": "Del cuaderno (CNmet3) — series, Frobenius y Bessel",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, páginas 9–12 (3 fragmentos): rótulo 'METODO MATEMATIKOAK' y 'SERIEEN BIDEZKO SOLUZIOAK' (20/XI/2013) - comienzo de la resolución por series",
     "hizkuntza": "eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resolución de EDO mediante series de potencias"
    },
    {
     "mota": "testua",
     "html": "Algunas series útiles alrededor de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> son: <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mfrac><msup><mi>x</mi><mi>n</mi></msup><mi>n</mi></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>k</mi></msub><msup><mi>x</mi><mi>k</mi></msup></mrow></math>, <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>k</mi><mo>+</mo><mn>2</mn></mrow></msub><msup><mi>x</mi><mi>k</mi></msup><mi>.</mi></mrow></math> Haciendo cero el coeficiente de cada potencia,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>k</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>a</mi><mi>k</mi></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La recurrencia da dos subsucesiones independientes: <math display=\"block\"><mrow><msub><mi>a</mi><mrow><mn>2</mn><mi>m</mi></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>m</mi></msup><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mrow><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>m</mi></msup><mfrac><msub><mi>a</mi><mn>1</mn></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math> Por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Corrección de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El papel enumera los términos no nulos del seno y del coseno con un índice compacto. En la notación <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>k</mi></msub><msup><mi>x</mi><mi>k</mi></msup></mrow></math>, en cambio, los coeficientes de la otra paridad son cero; las dos fórmulas anteriores dejan claro el índice real. Véase <code>koadernoa_metodo_n3_p009.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Soluciones en serie y producto de Cauchy"
    },
    {
     "mota": "testua",
     "html": "La recurrencia de la ecuación <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> da dos soluciones independientes: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>. Ambas series tienen radio de convergencia infinito. La serie geométrica, en cambio, tiene el desarrollo <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mi>x</mi><mi>n</mi></msup></mrow></math> cuando <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math>; la singularidad más próxima es <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ecuación lineal general"
    },
    {
     "mota": "testua",
     "html": "Supongamos <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mo>∑</mo><msub><mi>p</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mo>∑</mo><msub><mi>q</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math>. El producto de Cauchy da el coeficiente de <math display=\"inline\"><msup><mi>x</mi><mi>n</mi></msup></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>p</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><msub><mi>a</mi><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><msub><mi>q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><msub><mi>a</mi><mi>k</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo"
    },
    {
     "mota": "testua",
     "html": "Reuniendo los coeficientes en la ecuación <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> resulta <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub></mrow></math>. Por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mfrac><mi>x</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Composición de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El cuaderno inicia correctamente los dos productos de Cauchy y deja el último ejemplo antes de sumar los coeficientes. Aquí se han completado la recurrencia y las dos ramas; la hoja siguiente confirma <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub></mrow></math>. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n3_p010.typ</code>"
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
     "testua": "Solución en serie de una EDO con coeficientes polinómicos"
    },
    {
     "mota": "testua",
     "html": "En la ecuación <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, sustituyendo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math>, los términos de la misma potencia dan <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>. Por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Separando los coeficientes pares e impares, <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mi>…</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>x</mi><mn>5</mn></msup><mo>+</mo><mi>…</mi><mo>=</mo><mfrac><mi>x</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> En consecuencia,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>A</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>B</mi><mfrac><mi>x</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El radio de convergencia es <math display=\"inline\"><mn>1</mn></math>, porque las singularidades más próximas son <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El cuaderno cierra correctamente la recurrencia, las dos ramas y su suma geométrica. La última ecuación aislada de abajo no tiene equivalencia comprobable con el ejercicio anterior. Véase <code>koadernoa_metodo_n3_p012.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, páginas 13–21 (7 fragmentos): FROBENIUS y series de potencias (21/XI - 29/XI/2013) - rótulos bilingües ('METODO MATEMATIKOAK / FROBENIUS', 'ECUACIONES DIFERENCIALES / SERIES DE POTENCIAS'), incluidos los puntos singulares",
     "hizkuntza": "eu/es"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Método de Frobenius en un punto singular regular"
    },
    {
     "mota": "testua",
     "html": "Estudiemos <math display=\"block\"><mrow><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Al dividir por <math display=\"inline\"><mrow><mn>4</mn><mi>x</mi></mrow></math> se obtienen <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>x</mi></mrow></mfrac></mrow></math> y <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>x</mi></mrow></mfrac></mrow></math>. Como <math display=\"inline\"><mrow><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> y <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>x</mi><mn>4</mn></mfrac></mrow></math> son analíticas, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> es un punto singular regular."
    },
    {
     "mota": "testua",
     "html": "Sustituyendo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mi>λ</mi></msup><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math>, la ecuación indicial es <math display=\"block\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>λ</mi><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>; las raíces son <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Primera rama de Frobenius"
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>, eligiendo <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mrow><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math> se obtiene <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math>. Por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo>≠</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>x</mi></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Continuación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La segunda raíz da la rama de <math display=\"inline\"><msup><mi>x</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></msup></math>; se desarrolla en la unidad siguiente y se obtiene <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>x</mi></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n3_p013.typ</code>"
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
     "testua": "Frobenius: segunda rama y diferencia entera de las raíces"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mrow><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: rama <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La recurrencia de Frobenius es <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mrow><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>. Eligiendo <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math> resulta <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math>, y"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msup><mi>x</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></msup><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>x</mi></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La reducción de orden da el mismo resultado: usando <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>x</mi></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>x</mi></mrow></mfrac></mrow></math>, <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>∫</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mo>∫</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msubsup><mi>y</mi><mn>1</mn><mn>2</mn></msubsup></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>x</mi></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Diferencia entera de las raíces"
    },
    {
     "mota": "testua",
     "html": "En la ecuación <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>3</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> es singular regular y la ecuación indicial da <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>0</mn></mrow></math>. En la rama <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math> <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math>, por tanto"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>x</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La serie pura en <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> obliga a <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>; la segunda solución necesita un término logarítmico. Por reducción de orden,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Composición de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El papel desarrolla correctamente la segunda rama de la primera ecuación y la reducción de orden. En el segundo ejemplo la nota <code>NO SALE</code> recoge el fracaso de la serie pura de la raíz menor; aquí se ha completado la solución logarítmica que falta. Véase <code>koadernoa_metodo_n3_p014.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Raíces enteras de Frobenius: resonancia sin logaritmo"
    },
    {
     "mota": "testua",
     "html": "Estudiemos"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>3</mn><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la ecuación alrededor de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>. En forma normal,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mfrac><mn>3</mn><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mfrac><mn>2</mn><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "con <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mfrac></mrow></math> y <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mfrac></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>3</mn><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>x</mi></mrow><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "son analíticas alrededor de cero. Por tanto, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> es un punto singular regular y puede usarse el método de Frobenius."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ecuación indicial"
    },
    {
     "mota": "testua",
     "html": "Tomemos"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Entonces,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>2</mn></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Al sustituir en la ecuación, la potencia menor es <math display=\"inline\"><msup><mi>x</mi><mrow><mi>λ</mi><mo>−</mo><mn>1</mn></mrow></msup></math>. Su coeficiente debe ser nulo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>3</mn><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>4</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Recurrencia general"
    },
    {
     "mota": "testua",
     "html": "Reuniendo los coeficientes de la potencia <math display=\"inline\"><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>a</mi><mi>n</mi></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>n</mi><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, en los índices donde el denominador no es nulo,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>2</mn></mrow><mrow><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>3</mn></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Rama <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>4</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En este caso"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Tomando <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>4</mn></mrow></math> y, en general, <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math>. En consecuencia,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Rama <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ahora,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow><mrow><mi>n</mi><mo>−</mo><mn>3</mn></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eligiendo <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. En el índice <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> la recurrencia no determina <math display=\"inline\"><msub><mi>a</mi><mn>4</mn></msub></math>: dejar libre ese coeficiente añade un múltiplo de la primera solución. Para obtener una segunda solución pura tomamos <math display=\"inline\"><mrow><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn></mrow></math> y los siguientes iguales a cero:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las dos soluciones se comprueban sustituyendo directamente en la ecuación original. Aunque la diferencia entre las raíces es <math display=\"inline\"><mn>4</mn></math>, aquí la resonancia no obliga a un logaritmo. La solución general es"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mfrac><msup><mi>x</mi><mn>4</mn></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Series de potencias en un punto ordinario"
    },
    {
     "mota": "testua",
     "html": "Si los coeficientes de una EDO lineal de segundo orden son analíticos alrededor de un punto, la solución puede buscarse como serie de potencias alrededor de ese punto. Veremos el procedimiento completo en este ejemplo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Comprobación del punto ordinario"
    },
    {
     "mota": "testua",
     "html": "Pasando a la forma normal,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mfrac><mrow><mn>2</mn><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mfrac><mn>2</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los dos coeficientes son analíticos alrededor de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>; por tanto, cero es un punto ordinario. Escribamos"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las derivadas son:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Sustitución y desplazamiento de índices"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo en la ecuación,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>+</mo><mn>2</mn><mi>x</mi><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La primera suma se divide en dos partes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En la primera parte, haciendo el cambio <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>n</mi><mo>−</mo><mn>2</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>k</mi><mo>+</mo><mn>2</mn></mrow></msub><msup><mi>x</mi><mi>k</mi></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "se obtiene. Llamando de nuevo <math display=\"inline\"><mi>n</mi></math> al índice mudo, las cuatro sumas tienen la misma potencia:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><mo>+</mo><mn>2</mn><mi>n</mi><msub><mi>a</mi><mi>n</mi></msub><mo>−</mo><mn>2</mn><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para que una serie de potencias sea idénticamente nula, cada coeficiente debe ser nulo. Por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Recurrencia"
    },
    {
     "mota": "testua",
     "html": "Aislando el nuevo coeficiente,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mi>n</mi><mo>−</mo><mn>2</mn></mrow><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>n</mi><mo>+</mo><mn>2</mn></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La recurrencia liga <math display=\"inline\"><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub></math> y <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math>; por tanto, los coeficientes pares se generan a partir de <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math> y los impares de <math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math>. En cuanto a la ecuación de segundo orden, <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math> y <math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math> son los dos parámetros libres. El siguiente paso es calcular las dos ramas por separado e identificar las series con funciones conocidas."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Las dos ramas de una serie de potencias"
    },
    {
     "mota": "testua",
     "html": "En el cálculo anterior"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "se ha obtenido la recurrencia para la ecuación <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. El salto de dos índices hace que los coeficientes pares e impares sean independientes entre sí."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Rama par"
    },
    {
     "mota": "testua",
     "html": "Para la primera solución elegiremos <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. Aplicando la recurrencia en los índices pares,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>:</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>−</mi><mn>1</mn></mrow><mn>1</mn></mfrac><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo>:</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mn>4</mn><mo>:</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>6</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>3</mn><mn>5</mn></mfrac><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>5</mn></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mn>6</mn><mo>:</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>8</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>5</mn><mn>7</mn></mfrac><msub><mi>a</mi><mn>6</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>7</mn></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En general, si <math display=\"inline\"><mrow><mi>k</mi><mo>≥</mo><mn>1</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mn>2</mn><mi>k</mi></mrow></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y todos los coeficientes impares son cero. La serie es, por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mn>3</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>6</mn></msup><mn>5</mn></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>8</mn></msup><mn>7</mn></mfrac><mo>+</mo><mi>…</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Serie de Maclaurin del arco tangente"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>−</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>7</mn></msup><mn>7</mn></mfrac><mo>+</mo><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "al ser así,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>+</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Rama impar"
    },
    {
     "mota": "testua",
     "html": "Para la segunda solución tomaremos <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>. Poniendo <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>0</mn><mn>2</mn></mfrac><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "A partir de ahí, la recurrencia hace cero todos los coeficientes impares. Los coeficientes pares también son cero porque <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. Por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Independencia y solución general"
    },
    {
     "mota": "testua",
     "html": "En el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><msup><mn>2</mn><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, el wronskiano es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>W</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><msup><mn>2</mn><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y las dos soluciones son linealmente independientes. Solución general:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mi mathvariant=\"normal\">arctan</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El resultado puede comprobarse también sustituyéndolo en la ecuación original. El radio de convergencia de esta serie de potencias alrededor de cero es <math display=\"inline\"><mn>1</mn></math>, porque las singularidades complejas más próximas de los coeficientes normalizados son <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Punto singular regular y método de Frobenius"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Definición"
    },
    {
     "mota": "testua",
     "html": "Si la ecuación lineal de segundo orden está escrita en forma normal,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El punto <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> es ordinario si <math display=\"inline\"><mi>P</mi></math> y <math display=\"inline\"><mi>Q</mi></math> son analíticas. En caso contrario, puede ser un punto singular. La singularidad es <strong>regular</strong> si"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "son analíticas en <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>. Esa condición permite buscar soluciones de la forma de Frobenius:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>m</mi></msup><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo: clasificación de la singularidad"
    },
    {
     "mota": "testua",
     "html": "Estudiemos"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la ecuación alrededor de cero. Dividiendo por <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow><mrow><mn>2</mn><mi>x</mi></mrow></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>x</mi></mrow></mfrac><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow><mrow><mn>2</mn><mi>x</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>2</mn><mi>x</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mi>x</mi><mn>2</mn></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las dos últimas funciones son analíticas en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>. En consecuencia, cero es un punto singular regular."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Sustitución de Frobenius"
    },
    {
     "mota": "testua",
     "html": "Tomemos"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>m</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Derivadas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>2</mn></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo en la ecuación original,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>2</mn><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>+</mo><mn>3</mn><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow></math> <math display=\"block\"><mrow><mi>−</mi><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>m</mi></mrow></msup><mo>−</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>m</mi></mrow></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ecuación indicial"
    },
    {
     "mota": "testua",
     "html": "La potencia menor es <math display=\"inline\"><msup><mi>x</mi><mrow><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msup></math>. Su coeficiente es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>3</mn><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Recurrencia y las dos ramas"
    },
    {
     "mota": "testua",
     "html": "Para igualar las demás potencias, en las primeras sumas se juntan <math display=\"inline\"><mi>n</mi></math> y en las últimas <math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math>. Para <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Quitando el factor común,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><msub><mi>a</mi><mi>n</mi></msub><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>3</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En la rama <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><mn>3</mn><mo>⋅</mo><mn>5</mn><mo>⋅</mo><mn>7</mn><mi>…</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y la solución es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mi>x</mi><mn>3</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>15</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>105</mn></mfrac><mo>+</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En la rama <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><msub><mi>a</mi><mi>n</mi></msub><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><msup><mn>2</mn><mi>n</mi></msup><mi>n</mi><mi>!</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y la serie puede sumarse en forma cerrada:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><msup><mi>e</mi><mfrac><mi>x</mi><mn>2</mn></mfrac></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La diferencia entre las raíces es <math display=\"inline\"><mfrac><mn>1</mn><mn>2</mn></mfrac></math>; no es un número entero, y las dos ramas independientes de Frobenius se obtienen directamente."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dos ejemplos de Frobenius y reducción de orden"
    },
    {
     "mota": "testua",
     "html": "Cuando la diferencia entre las raíces indiciales es un número entero, la serie correspondiente a la raíz menor puede fallar. Eso no significa que siempre aparezca un logaritmo: los coeficientes de la ecuación deciden lo que ocurre. Los dos ejemplos muestran posibilidades distintas."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 1: cuando la serie se bloquea"
    },
    {
     "mota": "testua",
     "html": "Tomemos"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En forma normal es <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>=</mo><mn>0</mn></mrow></math>; cero es un punto singular regular, porque <math display=\"inline\"><mrow><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> son analíticas."
    },
    {
     "mota": "testua",
     "html": "Usaremos la forma de Frobenius:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo las derivadas,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow></math> <math display=\"block\"><mrow><mi>+</mi><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El coeficiente de la potencia menor da la ecuación indicial:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Igualando los índices en los demás términos,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y, si el divisor no es nulo,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>a</mi><mi>n</mi></msub><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Rama <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Poniendo <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>!</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><mn>3</mn><mi>!</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><mi>n</mi><mi>!</mi></mrow></mfrac></mrow></math> y"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>x</mi><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Rama <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> y reducción de orden"
    },
    {
     "mota": "testua",
     "html": "Al poner la raíz menor, el primer paso exigiría <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>0</mn></mfrac></mrow></math>. Este no es un coeficiente ordinario: la recurrencia de Frobenius se ha bloqueado. Como conocemos la primera solución, podemos usar la fórmula de D&#x27;Alembert en la ecuación <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>∫</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mo>∫</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></msup><msubsup><mi>y</mi><mn>1</mn><mn>2</mn></msubsup></mfrac><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aquí, como <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo>∫</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>x</mi></mrow></msup></mrow></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo>∫</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><msup><mi>x</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Integrando por partes,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>∫</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><msup><mi>x</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>e</mi><mi>x</mi></msup><mi>x</mi></mfrac><mo>+</mo><mo>∫</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><mi>x</mi></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>e</mi><mi>x</mi></msup><mi>x</mi></mfrac><mo>+</mo><mrow><mi mathvariant=\"normal\">Ei</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mo>+</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mrow><mi mathvariant=\"normal\">Ei</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La solución general de la primera ecuación es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>+</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mi mathvariant=\"normal\">Ei</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El comportamiento logarítmico de la segunda solución está en el desarrollo alrededor de cero de la función <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">Ei</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 2: dos series ordinarias"
    },
    {
     "mota": "testua",
     "html": "Estudiemos ahora"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>3</mn><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En forma normal,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mfrac><mn>3</mn><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mfrac><mn>2</mn><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> es un punto singular regular. La sustitución de Frobenius da"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la ecuación indicial y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>2</mn></mrow><mrow><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>3</mn></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la recurrencia."
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Rama <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>4</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>4</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Tomando <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math>. Por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Rama <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow><mrow><mi>n</mi><mo>−</mo><mn>3</mn></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eligiendo <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>3</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el índice <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> queda libre un múltiplo de <math display=\"inline\"><msup><mi>x</mi><mn>4</mn></msup></math> de la primera rama. Eligiendo nula la contribución de esa rama, la serie termina en un polinomio:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mfrac><msup><mi>x</mi><mn>4</mn></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Equivalencia de otra base"
    },
    {
     "mota": "testua",
     "html": "La reducción de orden da también esta otra segunda solución:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>3</mn></msub><mo>=</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mn>4</mn><mi>x</mi></mrow><mrow><mn>12</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "No es una tercera solución independiente. Usando esta identidad,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>3</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "se obtiene"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mo>=</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mn>12</mn><mfrac><mrow><mn>3</mn><mo>−</mo><mn>4</mn><mi>x</mi></mrow><mrow><mn>12</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, las bases <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math> generan el mismo espacio de soluciones de dimensión dos. Aunque en este ejemplo la diferencia entre las raíces es entera, las dos soluciones independientes se obtienen sin logaritmo."
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, páginas 22–23 (unidad 0012, hoja mixta): ecuación de Bessel y funciones especiales + inicio de la teoría de estabilidad (potenciales y espacios de fases, vectorizados con CeTZ) y ecuación indicial / casos de Frobenius; confianza media",
     "hizkuntza": "eu/es"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación de Bessel y comienzos de la estabilidad"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ecuación de Bessel y funciones"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Ecuación de Bessel",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup></mrow><msup><mi>x</mi><mn>2</mn></msup></mfrac><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> es un punto singular regular. Haciendo el desarrollo de Frobenius <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mi>λ</mi></msup><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math>, la ecuación indicial da <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>ν</mi></mrow></math>, y la recurrencia de los coeficientes"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>−</mi><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Función de Bessel de primera especie:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup></mrow><mrow><mi>k</mi><mi>!</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo>+</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mi>ν</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Función gamma",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> extiende el factorial: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>!</mi><mo>=</mo><mn>6</mn></mrow></math>. Para argumentos no enteros, por ejemplo <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3.5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, no existe un factorial entero ordinario, pero <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> da un valor finito."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para orden no entero (<math display=\"inline\"><mrow><mi>ν</mi><mo>∉</mo><mi mathvariant=\"double-struck\">ℤ</mi></mrow></math>), <math display=\"inline\"><msub><mi>J</mi><mi>ν</mi></msub></math> y <math display=\"inline\"><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub></math> son independientes, como muestra el wronskiano:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>W</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>J</mi><mi>ν</mi></msub><mo>,</mo><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>π</mi><mi>x</mi></mrow></mfrac><mo>≠</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo>∉</mo><mi mathvariant=\"double-struck\">ℤ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La función de Bessel de segunda especie (función de Neumann o de Weber) forma siempre un par independiente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>Y</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>W</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>J</mi><mi>ν</mi></msub><mo>,</mo><msub><mi>Y</mi><mi>ν</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>≠</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∀</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Caso <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>0</mn></mrow></math>",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>Y</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math> empieza con el valor <math display=\"inline\"><mrow><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> y oscila amortiguándose; <math display=\"inline\"><msub><mi>Y</mi><mn>0</mn></msub></math> tiene una divergencia logarítmica cuando <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><msup><mn>0</mn><mo>+</mo></msup></mrow></math>. De acuerdo con el canon del libro, la función de primera especie se representa con línea continua y la de segunda con línea discontinua."
      },
      {
       "mota": "ezezaguna",
       "izena": "figure"
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
        "<strong>Cruzado con EDF:</strong> las matemáticas concuerdan con el canon del libro (<code>06_series.typ</code>, sección de Bessel): la recurrencia <math display=\"inline\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, la serie <math display=\"inline\"><msub><mi>J</mi><mi>ν</mi></msub></math>, la definición <math display=\"inline\"><msub><mi>Y</mi><mi>ν</mi></msub></math> y el wronskiano son idénticos. La notación se ha adaptado a <math display=\"inline\"><mi>ν</mi></math> y <math display=\"inline\"><msub><mi>c</mi><mi>n</mi></msub></math> (el manuscrito usaba <math display=\"inline\"><mi>μ</mi></math> y <math display=\"inline\"><msub><mi>C</mi><mi>n</mi></msub></math>). El ejemplo <math display=\"inline\"><mfrac><msub><mi>J</mi><mn>0</mn></msub><msub><mi>Y</mi><mn>0</mn></msub></mfrac></math> aparece también en <code>04_sistemas.typ</code>.",
        "<strong>Recurrencia:</strong> la hoja original no tiene una barra de división clara; el canon exige una división, y así se ha recogido.",
        "<strong>Independencia:</strong> como <math display=\"inline\"><mrow><mi>W</mi><mo>≠</mo><mn>0</mn></mrow></math>, las funciones son <strong>linealmente independientes</strong>; la etiqueta <code>lin. dep</code> del papel está incompleta.",
        "<strong>Curvas:</strong> <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math> y <math display=\"inline\"><msub><mi>Y</mi><mn>0</mn></msub></math> se han calculado con scipy (no es un boceto a mano); el primer cero de <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math> está en <math display=\"inline\"><mrow><mi>x</mi><mo>≈</mo><mn>2.405</mn></mrow></math>, de acuerdo con la curva <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math> del EDF.",
        "<strong>Espacios de fases:</strong> retrato canónico del pozo doble de Duffing (dos centros, una silla y la separatriz en forma de ocho). Los originales son bocetos cualitativos; no están a escala exacta, porque <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no se da numéricamente. Véase"
       ]
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n3_p022.typ</code>"
      },
      {
       "mota": "testua",
       "html": ". La hoja se aceptó con confianza media."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación indicial y casos de Frobenius"
    },
    {
     "mota": "testua",
     "html": "En un punto singular regular, la ecuación indicial determina los exponentes <math display=\"inline\"><mi>λ</mi></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>p</mi><mn>0</mn></msub><mi>λ</mi><mo>+</mo><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><msup><mi>x</mi><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "<math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En forma normal <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>=</mo><mn>0</mn></mrow></math>, luego <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math>. Entonces <math display=\"block\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><mi>x</mi><mo>⋅</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><msup><mi>x</mi><mn>2</mn></msup><mo>⋅</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> La ecuación indicial es <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, y las raíces <math display=\"block\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n3_p020.typ</code>"
      },
      {
       "mota": "testua",
       "html": "— la página desarrolla el mismo ejemplo y obtiene las soluciones <math display=\"inline\"><mrow><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></mrow></math> y <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>+</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ei</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Los dos casos de Frobenius",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Siendo las raíces reales, la estructura de la segunda solución depende de <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Si <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>∈</mo><mi mathvariant=\"double-struck\">ℤ</mi></mrow></math>, la segunda serie puede fallar; para obtener <math display=\"inline\"><msub><mi>y</mi><mn>2</mn></msub></math> se usa la reducción de orden de D&#x27;Alembert.",
        "Si <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>∉</mo><mi mathvariant=\"double-struck\">ℤ</mi></mrow></math>, cada raíz suele generar una serie independiente, y una puede obtenerse de la otra."
       ]
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Nota de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La hoja se aceptó con confianza media. El carácter <code>2</code> de la frase <code>PARA 2 TENGA SOLUCIÓN FROBENIUS</code> es una lectura dudosa; la formulación compacta del papel <code>sacar una de la otra</code> no se ha extendido como teorema estándar. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n3_p023.typ</code>"
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
   "id": "a12",
   "maila": 2,
   "izenburua": "Del cuaderno (CAx) — series y función de Green",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "CAx cuaderno amarillo metmat probabilidad ingles",
     "xehetasuna": "CAx, páginas 26–27 (unidad 0015, hoja doble; #CAxp26/#CAxp27): resolución por series y función de Green. De nuevo en euskera (alternancia confirmada). Ejercicio de examen: (a) (1+x^2)y''-2xy'+beta y=0 por series, recurrencia a_(n+2)=-(n^2-3n+beta)/((n+2)(n+1)) a_n, truncamiento beta=n(3-n) -> beta=0 (y=1, y=x+x^3/3) y beta=2 (y=x, y=1-x^2); (b) función de Green del problema inhomogéneo, y(1)=2y(0), y'(1)=2y'(0) -> solo la trivial -> existe Green. ⭐⭐ TRES ERRORES documentados: 1 inocuo (A=B vs A=2B, mismo resultado) y 2 GRAVES (salto (1+z^2)^2 -> correcto 1/(1+z^2); error de signo en la continuidad -> B=D falso). La Green FINAL del manuscrito es INCORRECTA. Se ha aplicado la RESOLUCIÓN CORRECTA (Comprobacion) MENCIONANDO los errores: A=z/(1+z^2)^2, B=(1+z-z^2)/(2(1+z^2)^2), C=2B, D=(1-z-z^2)/(2(1+z^2)^2). (a) enteramente correcto. Verificado con SymPy (recurrencia, 4 soluciones, continuidad+salto de la Green correcta). Sin dibujos. Confianza alta en la resolución matemática",
     "hizkuntza": "eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resolución por series y función de Green (tres errores documentados)"
    },
    {
     "mota": "testua",
     "html": "Hoja doble 26–27 del cuaderno amarillo CAx, de nuevo <strong>en euskera</strong> (<math display=\"inline\"><mn>22</mn></math>-<math display=\"inline\"><mn>25</mn></math> en inglés): alternancia confirmada. Un ejercicio de examen de dos apartados, de ecuaciones diferenciales. El apartado (a) es <strong>enteramente correcto</strong>; en el apartado (b) hay <strong>tres errores</strong> —uno inocuo y dos graves—, y aquí se da la <strong>resolución correcta</strong>, mencionando los errores uno por uno."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "(a) Resolución por series: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>β</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Enunciado (en euskera):</strong> determine para qué valores del parámetro <math display=\"inline\"><mi>β</mi></math> la ecuación tiene solución polinómica. Por series, sustituyendo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math> y reuniendo los coeficientes de <math display=\"inline\"><msup><mi>x</mi><mi>n</mi></msup></math>: <math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>a</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mi>n</mi><mo>+</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>n</mi><mo>+</mo><mi>β</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math> La serie se convierte en un <strong>polinomio</strong> cuando el corchete <math display=\"inline\"><mi>n</mi></math> se anula para algún valor, es decir <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: los valores de grado bajo son <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>3</mn></mrow></math>) y <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>)."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>=</mo><mn>2</mn><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Cuatro soluciones polinómicas, por tanto: para <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac></mrow></math>; para <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>2</mn></mrow></math> <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>. La solución homogénea general de <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>2</mn></mrow></math> es <math display=\"inline\"><mrow><msub><mi>y</mi><mi>h</mi></msub><mo>=</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (para el apartado siguiente)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "(b) Función de Green: existencia y resolución"
    },
    {
     "mota": "testua",
     "html": "<strong>Enunciado (en euskera):</strong> a partir de los valores <math display=\"inline\"><mi>β</mi></math> anteriores, obtenga la función de Green del problema si existe; en caso contrario, explique por qué. Problema: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Existencia.</strong> La homogénea (<math display=\"inline\"><mrow><msub><mi>y</mi><mi>h</mi></msub><mo>=</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) debe satisfacer las condiciones de contorno: <math display=\"inline\"><mrow><msub><mi>y</mi><mi>h</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>=</mo><mn>2</mn><msub><mi>y</mi><mi>h</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>B</mi></mrow></math> y <math display=\"inline\"><mrow><msubsup><mi>y</mi><mi>h</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>B</mi><mo>=</mo><mn>2</mn><msubsup><mi>y</mi><mi>h</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>A</mi></mrow></math>. El sistema (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>2</mn><mi>B</mi></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>B</mi></mrow></math>) admite <strong>solo la solución trivial</strong> <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>; por tanto la función de Green <strong>existe</strong>."
    },
    {
     "mota": "testua",
     "html": "<strong>Resolución de la función de Green.</strong> Busquemos <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>G</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>G</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>G</mi><mo>=</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>z</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>+</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>z</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Se imponen tres condiciones:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Contorno:</strong> <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⇒</mo><mi>C</mi><mo>=</mo><mn>2</mn><mi>B</mi></mrow></math>; y <math display=\"inline\"><mrow><msup><mi>G</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msup><mi>G</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⇒</mo><mi>C</mi><mo>−</mo><mn>2</mn><mi>D</mi><mo>=</mo><mn>2</mn><mi>A</mi></mrow></math>, es decir <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>B</mi><mo>−</mo><mi>D</mi></mrow></math>.",
      "<strong>Continuidad</strong> en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>z</mi></mrow></math>: <math display=\"inline\"><mrow><mi>A</mi><mi>z</mi><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>C</mi><mi>z</mi><mo>+</mo><mi>D</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, es decir <math display=\"inline\"><mrow><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>D</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.",
      "<strong>Salto de la derivada:</strong> integrando la ecuación en un entorno de <math display=\"inline\"><mi>z</mi></math> y, como <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> es continua, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><msup><mi>G</mi><mo>′</mo></msup><msubsup><mo stretchy=\"false\" form=\"postfix\">]</mo><msup><mi>z</mi><mo>−</mo></msup><msup><mi>z</mi><mo>+</mo></msup></msubsup><mo>=</mo><mn>1</mn></mrow></math>, luego <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><msup><mi>G</mi><mo>′</mo></msup><msubsup><mo stretchy=\"false\" form=\"postfix\">]</mo><msup><mi>z</mi><mo>−</mo></msup><msup><mi>z</mi><mo>+</mo></msup></msubsup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>. Desarrollando los corchetes, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo>+</mo><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo>−</mo><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "De la continuidad <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>k</mi><mi>D</mi></mrow></math> (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>−</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>) y sustituyendo en la ecuación del salto: <math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><mi>B</mi><mo>−</mo><mi>D</mi><mo>=</mo><mfrac><mi>z</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>C</mi><mo>=</mo><mn>2</mn><mi>B</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mfrac></mrow></math> Por tanto, función de Green <strong>correcta</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>z</mi><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>z</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>z</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Tres errores documentados (la Green final del manuscrito es incorrecta)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El manuscrito <strong>plantea</strong> bien (b) —las tres condiciones y la existencia son correctas— pero tiene <strong>tres errores</strong> en el álgebra; la resolución correcta es la de arriba."
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<strong>Error 1 (p. <math display=\"inline\"><mn>26</mn></math>, inocuo):</strong> escribe <math display=\"inline\"><mrow><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi></mrow></math> (en lugar de <math display=\"inline\"><mrow><mn>2</mn><mi>B</mi></mrow></math>), y deduce <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>B</mi></mrow></math> (en lugar de <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>2</mn><mi>B</mi></mrow></math>). <strong>El resultado no cambia</strong>: tanto los sistemas (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>2</mn><mi>B</mi></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>B</mi></mrow></math>) como (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>B</mi></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>B</mi></mrow></math>) tienen como única solución <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>, por lo que la conclusión de que la función de Green existe es correcta.",
        "<strong>Error 2 (p. <math display=\"inline\"><mn>27</mn></math>, grave) — el valor del salto:</strong> define <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mi>/</mi><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y toma <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>p</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> como salto. Lo correcto es <math display=\"inline\"><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac></math> (integrando la ecuación, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><msup><mi>G</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn></mrow></math>). Al mezclar el factor integrante (<math display=\"inline\"><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></math>, de forma Sturm-Liouville) y la división por <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math> <strong>en una sola letra</strong> (<math display=\"inline\"><mi>p</mi></math>), los dos efectos se acumulan en lugar de cancelarse.",
        "<strong>Error 3 (p. <math display=\"inline\"><mn>27</mn></math>, grave) — el signo en la continuidad:</strong> al pasar de la línea <math display=\"inline\"><mrow><mi>B</mi><mi>z</mi><mo>−</mo><mi>D</mi><mi>z</mi><mo>+</mo><mi>B</mi><mo>−</mo><mi>B</mi><msup><mi>z</mi><mn>2</mn></msup><mo>=</mo><mn>2</mn><mi>B</mi><mi>z</mi><mo>+</mo><mi>D</mi><mo>−</mo><mi>D</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></math> (correcta) a <math display=\"inline\"><mrow><mi>−</mi><mi>B</mi><mi>z</mi><mo>+</mo><mi>B</mi><mo>−</mo><mi>B</mi><msup><mi>z</mi><mn>2</mn></msup><mo>=</mo><mi>D</mi><mo>−</mo><mi>D</mi><mi>z</mi><mo>−</mo><mi>D</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></math>, al llevar <math display=\"inline\"><mrow><mi>−</mi><mi>D</mi><mi>z</mi></mrow></math> al segundo término debía quedar <math display=\"inline\"><mrow><mi>+</mi><mi>D</mi><mi>z</mi></mrow></math>; dejando <math display=\"inline\"><mrow><mi>−</mi><mi>D</mi><mi>z</mi></mrow></math>, ambos lados comparten el factor <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y se «deduce» <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>D</mi></mrow></math> (y <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math>). Lo correcto es <math display=\"inline\"><mrow><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>D</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: los paréntesis <strong>no</strong> son iguales, por lo que <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>D</mi></mrow></math> es falso."
       ]
      },
      {
       "mota": "testua",
       "html": "A causa de los dos errores graves, la <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></math> del manuscrito y la Green final son incorrectas (la correcta lleva <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></math> <strong>en el denominador</strong>). Con SymPy: tomando <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>D</mi></mrow></math>, <math display=\"inline\"><mi>G</mi></math> <strong>no sería continua</strong> en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>z</mi></mrow></math> (si no <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math>)."
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
        "<strong>Recomprobado (SymPy):</strong> (a) <strong>enteramente correcto</strong>. Recurrencia <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>n</mi><mo>+</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub></mrow></math>; condición de truncamiento <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>2</mn></mrow></math> en grado bajo). Las cuatro soluciones (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>) sustituidas en la ecuación dan <math display=\"inline\"><mn>0</mn></math>. (b) Green correcta: <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>2</mn><mi>B</mi></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>B</mi><mo>−</mo><mi>D</mi></mrow></math>, se cumplen la continuidad (en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>z</mi></mrow></math> la diferencia es <math display=\"inline\"><mn>0</mn></math>) y el salto (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><msup><mi>G</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>), todo comprobado. (No está en el corpus de probabilidad; verificado con SymPy.)",
        "<strong>⭐⭐ Tres errores (nota anterior), CON mención:</strong> (a) bien; el planteamiento de (b) bien, en la ejecución <strong>un error inocuo y dos graves</strong>. La resolución correcta se ha dado completa (aplicando los pasos de Comprobación); la Green final del manuscrito es incorrecta. No es la primera vez en el corpus: el planteamiento se sostiene, lo que se rompe es el álgebra intermedia.",
        "<strong>No se ha tocado (grafía/dudas):</strong> en la página <math display=\"inline\"><mn>26</mn></math>, la nota marginal superior derecha (seis líneas) es la única ilegible (parece un recordatorio de la ortogonalización, pero no se ha confirmado); «<math display=\"inline\"><mtext mathvariant=\"normal\">BENAZ</mtext></math>» (<math display=\"inline\"><mo>→</mo></math> «luego») y «<math display=\"inline\"><mtext mathvariant=\"normal\">SOUERO</mtext></math>» son dudas de grafía, no de cálculo. Las notas marginales se han <strong>transcrito</strong>, no corregido.",
        "<strong>Fidelidad (confianza alta en la resolución matemática):</strong> fuente en euskera; (a) seguido palabra por palabra, dada la <strong>resolución correcta</strong> de (b) mencionando los errores (el desarrollo erróneo no se ha reescrito en la capa literal, pero el resultado correcto está aquí). Dos etiquetas canónicas: <code>#CAxp26</code>, <code>#CAxp27</code>. Véase <code>koadernoa_cax_p026.typ</code>."
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a13",
   "maila": 1,
   "izenburua": "Métodos aproximados",
   "blokeak": [
    {
     "mota": "ezezaguna",
     "izena": "epigrafea"
    },
    {
     "mota": "testua",
     "html": "Puesto que, en realidad, son muy pocas las integrales que somos capaces de resolver de forma exacta o las ecuaciones finitas para las que conocemos métodos de resolución sin aproximaciones (recordemos, por ejemplo, los problemas que suscitan las ecuaciones que contienen funciones trascendentes e, incluso, las polinómicas de orden superior al cuarto), no debería sorprendernos que la mayor parte de las ecuaciones diferenciales resistan nuestros esfuerzos de solución explícita exacta. En la mayor parte de los casos prácticos hay que recurrir a algún tipo de aproximación. Incluso si la ecuación tiene una solución exacta, ésta puede ser tan complicada que resulte de escasa o nula utilidad, especialmente si el objetivo que nos guía es de orden práctico y lo que pretendemos es calcular el valor (aproximado) de la solución en una serie de casos interesantes. (En un contexto más familiar podemos recordar lo poco útiles que, en general, resultan las soluciones de las ecuaciones algebraicas de tercer y cuarto grado obtenidas por los métodos de Cardano (24-09-1501, Pavía, Ducado de Milán; 21-09-1576, Roma). Este médico y matemático es conocido también por su nombre en latín e inglés: Cardan. Su obra maestra, #emph[Ars Magna] (1545), supuso la publicación de los métodos de solución por radicales de las ecuaciones cúbica y cuártica, que eran debidos esencialmente a Scipione del Ferro y Tartaglia, en el primer caso, y a Ferrari, en el caso de la ecuación de cuarto grado. y Ferrari (2-02-1522, Bolonia, Estados Pontificios; 5-10-1565, Bolonia). Cardano le cedió su puesto cuando este discípulo tenía dieciocho años. Halló el método de solución por radicales de la ecuación cuártica, pero no pudo ser publicado hasta que Cardano descubrió que la solución de la cúbica (que era usada por él de Ferrari y que Tartaglia había comunicado confidencialmente a Cardano) se encontraba también entre los papeles (anteriores) de Ferro.)"
    },
    {
     "mota": "testua",
     "html": "Adelantemos que un único capítulo no puede hacer justicia a la importancia que los métodos aproximados tienen en la práctica real de la física. También ignoraremos por completo los métodos gráficos que suelen recogerse en los textos (las isoclinas, etc.) porque, aun cuando conservan su importancia para analizar propiedades cualitativas (como veremos, en un contexto restringido, en el capítulo 8), como métodos aproximados de resolución han sido sustituidos casi por completo por los potentes métodos numéricos que tenemos a nuestra disposición. Comenzaremos viendo algunos métodos clásicos elementales de aproximación analítica, incluyendo un atisbo de la teoría de perturbaciones que, aunque necesariamente limitado, puede estimular el interés del lector por esta técnica, cuya importancia en física es difícil sobrevalorar. Los métodos numéricos son hoy día tan importantes en la práctica que merecen asignatura aparte, pero al menos discutiremos los aspectos más elementales para descorrer parcialmente la cortina que oculta la «magia» de las eficaces rutinas que están cada día más al alcance de todos (véase la bibliografía a partir de la página 321)."
    },
    {
     "mota": "testua",
     "html": "El nivel elemental del capítulo hará que consideremos muchas veces tan solo el caso de una única ecuación diferencial de primer (o segundo) orden, para evitar innecesarias complicaciones técnicas (e, incluso, de notación). No obstante, la mayor parte de lo dicho puede extenderse con facilidad a ecuaciones de orden superior y sistemas de ecuaciones: a menudo basta añadir un índice para enumerar las variables dependientes o las derivadas de la incógnita."
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Símbolo de orden de magnitud",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Diremos que la función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <strong>del orden de magnitud de</strong> <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <strong>cuando</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> y escribiremos <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> si el cociente <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se mantiene acotado cuando <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math>, lo que sucede en particular si <math display=\"inline\"><mrow><msub><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mi>x</mi><mo>→</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></msub><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> existe y es finito."
    },
    {
     "mota": "testua",
     "html": "La «<math display=\"inline\"><mi>O</mi></math>» recibe el nombre de <strong>símbolo de Landau</strong> o de Bachmann-Landau y es muy utilizada como abreviatura en cálculos aproximados. A menudo se omite la mención explícita del límite <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> si el valor de <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> (normalmente <math display=\"inline\"><mn>0</mn></math> ó <math display=\"inline\"><mi>∞</mi></math>) se infiere del contexto."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que, para <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> a determinar, se cumple <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. ¿Es cierto que <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>? ¿Y que <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre las siguientes relaciones: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>+</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que cuando <math display=\"inline\"><mrow><mi>ε</mi><mo>→</mo><mn>0</mn></mrow></math> las funciones (a) <math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><msqrt><mrow><mn>3</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi></mrow></msup></mrow></msqrt></mrow></math>, (b) <math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, (c) <math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y (d) <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son equivalentes módulo <math display=\"inline\"><mrow><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. ¿Qué sucede cuando <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>?"
      }
     ]
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Series de potencias",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Debido a lo dicho en el apartado 1.4, un método aproximado casi obvio consiste en construir una serie de potencias <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup></mrow></math> para la solución de un problema de condiciones iniciales de la forma <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>′</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>y</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mtd></mtr></mtable></math> Nótese que el planteamiento es distinto al hecho en el capítulo 6, ya que allí se trataba de hallar <em>todas</em> las soluciones de una ecuación <em>lineal</em>, mientras que ahora queremos una solución <em>particular</em> de una ecuación <em>no necesariamente lineal</em>. Además, en aquel capítulo se calculaban todos los términos de las series, que podían, a veces, sumarse o definían funciones especiales, mientras que ahora pocas veces podrá pasarse del cálculo de los primeros términos de la serie. La serie truncada aproximará de forma razonable la solución para <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math> «suficientemente pequeño», aunque hacer más preciso este enunciado resulta casi siempre imposible en la práctica, en la que rara vez se puede demostrar realmente la calidad de las aproximaciones realizadas. Un criterio muy usado en la práctica de métodos aproximados —aunque en rigor no demuestre absolutamente nada— consiste en calcular una aproximación más fina (un término más de la serie, por ejemplo) y comprobar que las predicciones en el rango que interesen no varían por encima del margen de error que no se quiera rebasar."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Método de la serie de Taylor"
    },
    {
     "mota": "testua",
     "html": "Para construir la serie de Taylor (18-08-1685, Edmonton, Inglaterra; 29-12-1731, Londres). Inventó el cálculo de diferencias finitas, la integración por partes y la fórmula que lleva su nombre. También trabajó en teoría de aproximaciones, mecánica y magnetismo, y estableció las bases de la perspectiva. de la solución alrededor del punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> podemos usar el hecho de que los coeficientes <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>,</mo></mrow></math>, es decir, las derivadas en <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>, pueden hallarse sistemáticamente como consecuencia de la ecuación y sus derivadas, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>′</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>″</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "junto con la condición inicial y los valores que se obtienen sustituyéndola en las anteriores expresiones: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Consideremos como ejemplo la ecuación <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>,</mo></mrow></math> que fue estudiada por John Bernoulli en 1694 y por Riccati (es «la» ecuación de Riccati) en 1724."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que toda solución de la ecuación de Riccati satisface: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>″</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>‴</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>″</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>y</mi><mo>′</mo></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>‴</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math>"
      },
      {
       "mota": "testua",
       "html": "y halle la solución correspondiente a la condición inicial <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que la solución de esta ecuación de Riccati para <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, que James Bernoulli estudió en 1703, es <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>63</mn></mfrac><msup><mi>x</mi><mn>7</mn></msup><mo>+</mo><mfrac><mn>2</mn><mn>2079</mn></mfrac><msup><mi>x</mi><mn>11</mn></msup><mo>+</mo><mfrac><mn>13</mn><mn>218295</mn></mfrac><msup><mi>x</mi><mn>15</mn></msup><mo>+</mo><mfrac><mn>46</mn><mn>12442815</mn></mfrac><msup><mi>x</mi><mn>19</mn></msup></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mo>+</mo><mfrac><mn>15178</mn><mn>66108676095</mn></mfrac><msup><mi>x</mi><mn>23</mn></msup><mo>+</mo><mfrac><mn>404</mn><mn>28332289755</mn></mfrac><msup><mi>x</mi><mn>27</mn></msup></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mo>+</mo><mfrac><mn>190571</mn><mn>215183740689225</mn></mfrac><msup><mi>x</mi><mn>31</mn></msup><mo>+</mo><mfrac><mn>5858822</mn><mn>106515951641166375</mn></mfrac><msup><mi>x</mi><mn>35</mn></msup><mo>+</mo><mi>⋯</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Método de coeficientes indeterminados"
    },
    {
     "mota": "testua",
     "html": "En muchos casos —en especial si no es fácil calcular las derivadas de <math display=\"inline\"><mi>f</mi></math>— es más eficaz ensayar una serie truncada con coeficientes que se determinarán igualando los de cada potencia de la variable independiente. Por ejemplo, en el caso de la ecuación de Riccati con <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> sabemos que la serie empieza por <math display=\"inline\"><mrow><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math> y ensayamos, por ejemplo, <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msub><mi>c</mi><mn>3</mn></msub><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msub><mi>c</mi><mn>4</mn></msub><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>5</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y su derivada y cuadrado <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>′</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>c</mi><mn>2</mn></msub><mi>x</mi><mo>+</mo><mn>3</mn><msub><mi>c</mi><mn>3</mn></msub><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn><msub><mi>c</mi><mn>4</mn></msub><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mn>2</mn></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><msub><mi>c</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>c</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mi>c</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>c</mi><mn>3</mn></msub><mo>+</mo><mn>2</mn><msub><mi>c</mi><mn>1</mn></msub><msub><mi>c</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> que sustituidos en la ecuación proporcionan, sucesivamente: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>1</mn><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>:</mo><mspace width=\"1.0em\"></mspace><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo>⇒</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>:</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><msub><mi>c</mi><mn>1</mn></msub><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo>⇒</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>x</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>:</mo><mspace width=\"1.0em\"></mspace><mn>3</mn><msub><mi>c</mi><mn>3</mn></msub><mo>=</mo><mn>1</mn><mo>+</mo><msubsup><mi>c</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mi>c</mi><mn>2</mn></msub><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo>⇒</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>c</mi><mn>3</mn></msub><mo>=</mo><mn>4</mn><mi>/</mi><mn>3</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mi>⋮</mi></mtd></mtr></mtable></math> de acuerdo con los resultados del ejercicio 7.4."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>3</mn></msup></mrow></math>, la solución aproximada de <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Método de Picard de aproximaciones sucesivas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La idea del método de Picard (24-07-1856, París; 11-12-1941, París). Además de este método que permite demostrar la existencia y unicidad de soluciones de ecuaciones diferenciales, se le recuerda por el llamado gran teorema de Picard sobre los valores de una función analítica cerca de una singularidad esencial. También publicó importantes trabajos en análisis y geometría, así como en elasticidad, termodinámica y electricidad. es resolver el problema de condiciones iniciales <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>′</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub></mtd></mtr></mtable></math> mediante aproximaciones sucesivas que se construyen partiendo de una aproximación de orden cero <math display=\"block\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> que puede venir dada por (casi) cualquier función <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, aunque una elección frecuente, por obvia, es <math display=\"inline\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub></mrow></math>. Ahora se procede de forma iterativa: tras obtener cada aproximación <math display=\"inline\"><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup></math> se construye la siguiente sustituyendo esta última en el miembro de la derecha de la ecuación diferencial, para tener así una ecuación de variables separadas <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>′</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>,</mo><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub></mtd></mtr></mtable></math> que se resuelve directamente por cuadraturas: <math display=\"block\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub><mo>+</mo><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>u</mi><mo>,</mo><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>u</mi><mi>.</mi></mrow></math> Al probar el teorema de existencia y unicidad en el apartado A.1 demostraremos que, bajo condiciones apropiadas, la sucesión <math display=\"inline\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> converge, cuando <math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></math>, a la solución <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del problema de condiciones iniciales, que es completamente equivalente a la ecuación integro-diferencial que se obtiene en el límite <math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></math>: <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub><mo>+</mo><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>u</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>u</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que el problema de condiciones iniciales (7.22)–(7.23) y la ecuación integro-diferencial (7.28) son efectivamente equivalentes."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como ejemplo consideremos la ecuación de Riccati <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> con la condición inicial <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> y elijamos <math display=\"inline\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo>=</mo><mn>1</mn></mrow></math>. La primera aproximación es, por tanto, <math display=\"block\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><msubsup><mo>∫</mo><mn>0</mn><mi>x</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>u</mi><mo>=</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><msup><mi>x</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que las siguientes aproximaciones son: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mfrac><mn>2</mn><mn>15</mn></mfrac><msup><mi>x</mi><mn>5</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>63</mn></mfrac><msup><mi>x</mi><mrow><mn>7</mn><mi>.</mi></mrow></msup></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><mn>5</mn><mn>6</mn></mfrac><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mfrac><mn>8</mn><mn>15</mn></mfrac><msup><mi>x</mi><mn>5</mn></msup><mo>+</mo><mfrac><mn>29</mn><mn>90</mn></mfrac><msup><mi>x</mi><mn>6</mn></msup></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mo>+</mo><mfrac><mn>47</mn><mn>315</mn></mfrac><msup><mi>x</mi><mn>7</mn></msup><mo>+</mo><mfrac><mn>41</mn><mn>630</mn></mfrac><msup><mi>x</mi><mn>8</mn></msup><mo>+</mo><mfrac><mn>299</mn><mn>11340</mn></mfrac><msup><mi>x</mi><mn>9</mn></msup><mo>+</mo><mfrac><mn>4</mn><mn>525</mn></mfrac><msup><mi>x</mi><mn>10</mn></msup></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mo>+</mo><mfrac><mn>184</mn><mn>51975</mn></mfrac><msup><mi>x</mi><mn>11</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2268</mn></mfrac><msup><mi>x</mi><mn>12</mn></msup><mo>+</mo><mfrac><mn>4</mn><mn>12285</mn></mfrac><msup><mi>x</mi><mn>13</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>59535</mn></mfrac><msup><mi>x</mi><mn>15</mn></msup><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La rapidez con que crecen las aproximaciones en este sencillísimo caso, en que no hay más que polinomios, y la dificultad de realizar las integrales en casos más realistas hacen que el interés de este método para cálculos analíticos sea muy limitado, en acusado contraste con su enorme importancia teórica (ya que, por ejemplo, proporciona una de las pruebas estándar del crucial teorema de existencia y unicidad, como veremos en el apartado A.1) y su potencialidad en métodos numéricos, en los cuales las integrales pueden realizarse eficazmente."
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "Métodos perturbativos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En muchos problemas de física existe un parámetro pequeño, una <strong>perturbación</strong>, que hace que el desarrollo natural no sea en potencias de la variable independiente (la posición <math display=\"inline\"><mi>x</mi></math> o el tiempo <math display=\"inline\"><mi>t</mi></math>, por ejemplo), sino en términos de aquel parámetro, partiendo como aproximación de orden cero de la que se obtiene al anular el mismo (o darle otro valor particular) y que corresponde a menudo a un caso en que se conoce la solución del problema y que, por ello, constituye un buen punto de partida para construir aproximaciones sucesivas. La teoría de perturbaciones es una de las herramientas básicas del físico experimentado, pero, ¡ay!, ¡una vez más!, nos vemos obligados a limitarnos a presentar una introducción que solo pretende despertar el interés por el problema y describir las ideas más elementales<span class=\"j-oin\">[El lector interesado en aprender más puede encontrar una breve y accesible introducción en el texto de Strogatz [28] y un tratamiento sistemático en el de Holmes [20].]</span> (casi deberíamos decir triviales). Empezaremos con un ejemplo muy sencillo y luego veremos un caso más realista e interesante."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Perturbación regular"
    },
    {
     "mota": "testua",
     "html": "Supongamos que queremos hallar las posibles soluciones periódicas del oscilador no lineal <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>+</mo><mi>ε</mi><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo></mrow></math> para <math display=\"inline\"><mi>ε</mi></math> pequeño. Cuando <math display=\"inline\"><mi>ε</mi></math> es nulo tenemos un oscilador lineal elemental."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que la única solución periódica de <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math> es <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El caso no lineal es bastante más complicado. Buscaremos una solución perturbada de la forma <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>+</mo><mi>ε</mi><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> que satisfaga la ecuación hasta primer orden en <math display=\"inline\"><mi>ε</mi></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que sustituyendo (7.33) en (7.32) se obtiene <math display=\"block\"><mrow><mi>ε</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>t</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Resuelva la ecuación para <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> hallando la única solución periódica."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle el siguiente orden en el desarrollo perturbativo."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El oscilador de van der Pol"
    },
    {
     "mota": "testua",
     "html": "Consideremos la siguiente ecuación, que describe una válvula electrónica hoy día en desuso, pero que ocupa un lugar de honor en la historia de las ecuaciones diferenciales no lineales: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>ε</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>x</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Si el parámetro <math display=\"inline\"><mi>ε</mi></math> es positivo, cuando <math display=\"inline\"><mi>x</mi></math> es muy pequeño el término <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> es despreciable y tenemos, debido al término <math display=\"inline\"><mrow><mi>−</mi><mi>ε</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, un oscilador antiamortiguado que recibe energía del entorno en vez de perderla, por lo que esperamos que la amplitud de la oscilación crezca sin cesar. Sin embargo, cuando dicha amplitud se hace comparable a la unidad, el término <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> empieza a ser importante y juega el papel de un término disipativo, que hace perder energía mecánica. No es de extrañar, pues, que para un amplio rango del parámetro <math display=\"inline\"><mi>ε</mi></math> se establezca un equilibrio dinámico que haga que la oscilación ni crezca ni disminuya, en promedio. Pero ¿cómo comprobar esta intuición? Veamos qué puede decirnos la teoría de perturbaciones, que partirá de la aproximación correspondiente a <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>, que no es sino el oscilador armónico <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> cuya solución puede escribirse como <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La siguiente aproximación será <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que sustituida esta aproximación en la ecuación de van der Pol el primer orden en <math display=\"inline\"><mi>ε</mi></math> resulta ser <math display=\"block\"><mrow><mi>ε</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mfrac><msup><mi>A</mi><mn>3</mn></msup><mn>4</mn></mfrac><mi mathvariant=\"normal\">sin</mi><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>A</mi><mn>3</mn></msup><mn>4</mn></mfrac><mo>−</mo><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ezezaguna",
     "oina": "Aproximación con términos seculares",
     "izena": "irudia (ez da konpilatu)"
    },
    {
     "mota": "testua",
     "html": "Se trata, de nuevo, de un oscilador armónico, pero ahora hay un término inhomogéneo, es decir, una fuerza externa. Esto no plantea excesivas dificultades, y la solución puede hallarse fácilmente (véase el apartado B.3.3), pero no hace falta hacerlo para darse cuenta de que el último término inhomogéneo, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mfrac><msup><mi>A</mi><mn>3</mn></msup><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> corresponde a los mismos exponentes característicos <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math> (en el lenguaje de la mecánica, a la misma frecuencia <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>1</mn></mrow></math>) que tiene la ecuación homogénea (el oscilador libre), es decir, hay <strong>resonancia</strong>. Como vimos en el capítulo 3, esto hace que la solución particular correspondiente sea del tipo <math display=\"inline\"><mrow><mi>ε</mi><mi>t</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>α</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>β</mi><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, con constantes <math display=\"inline\"><mi>α</mi></math> y <math display=\"inline\"><mi>β</mi></math> adecuadas. Los términos trigonométricos están acotados, pero no pasa lo mismo con el factor <math display=\"inline\"><mrow><mi>ε</mi><mi>t</mi></mrow></math> que crece tristemente. Este es un tipo de obstáculo que apareció por primera vez en mecánica celeste, se dice que se trata de un <strong>término secular</strong> y es uno de los problemas que aparecen fácilmente cuando se intentan métodos ingenuos de perturbaciones, como el que estamos usando. En efecto, la hipótesis básica del desarrollo perturbativo es que la corrección <math display=\"inline\"><mrow><mi>ε</mi><msub><mi>x</mi><mn>1</mn></msub></mrow></math> es pequeña comparada con el término sin perturbar, pero como éste está acotado, dicha hipótesis será cierta mientras <math display=\"inline\"><mrow><mi>ε</mi><mi>t</mi></mrow></math> sea pequeño (es decir, durante un tiempo relativamente grande, <math display=\"inline\"><mrow><mi>t</mi><mo>≲</mo><mn>1</mn><mi>/</mi><mi>ε</mi></mrow></math>), pero luego la hipótesis dejará de ser cierta y la aproximación de ser válida. Podemos comprobar esto de forma gráfica en la figura 7.1 donde puede verse en línea continua una solución numérica para <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0.1</mn></mrow></math> junto con la predicción de la aproximación con términos seculares en línea discontinua. Aunque al principio las dos soluciones son casi iguales, mientras que la solución numérica tiende a oscilaciones periódicas, la amplitud de la aproximación crece sin cesar."
    },
    {
     "mota": "testua",
     "html": "La forma de intentar arreglar este tipo de problemas es recordar que las aproximaciones no son únicas, ni mucho menos, como pudimos comprobar en el ejemplo 7.3. Como aproximación de orden cero hemos elegido antes la solución exacta <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> de la ecuación de orden cero <math display=\"inline\"><mrow><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, pero nada impide elegir cualquier función, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, que difiera de ella en términos de orden <math display=\"inline\"><mi>ε</mi></math>, ya que seguirá satisfaciendo la ecuación de orden cero, aunque ya no de forma exacta sino solo cuando despreciamos los términos de orden <math display=\"inline\"><mi>ε</mi></math> o superior. Entre las infinitas elecciones del orden cero, conviene seleccionar una que tenga la propiedad de hacer desaparecer los términos resonantes de la ecuación que debe satisfacer la siguiente aproximación, ya que esto evitará la aparición de los términos seculares. En este caso vemos que los términos resonantes son proporcionales a <math display=\"inline\"><mrow><mi>ε</mi><mi>t</mi></mrow></math>, por lo que parece conveniente modificar el orden cero por términos que dependen no ya de <math display=\"inline\"><mi>ε</mi></math> sino de <math display=\"inline\"><mrow><mi>ε</mi><mi>t</mi></mrow></math>. Como veremos, basta en este caso suponer que la amplitud <math display=\"inline\"><mi>A</mi></math> y la fase <math display=\"inline\"><mi>φ</mi></math> no son constantes, sino función de <math display=\"inline\"><mrow><mi>ε</mi><mi>t</mi></mrow></math>, como <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mi>t</mi><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mi>t</mi><msup><mi>φ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Se dice que <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>φ</mi></math> dependen de un <strong>tiempo lento</strong> (<math display=\"inline\"><mrow><mi>ε</mi><mi>t</mi></mrow></math>) y por ello este método recibe el nombre de <strong>método de los dos tiempos</strong> o <strong>de las múltiples escalas</strong>. Un tiempo viene marcado por el período del oscilador libre y otro por el tiempo característico de crecimiento de los términos seculares."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que sustituida la aproximación <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>ε</mi><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mi>t</mi><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mi>t</mi><msup><mi>φ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>ε</mi><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></math> en la ecuación de van der Pol, el primer orden en <math display=\"inline\"><mi>ε</mi></math> resulta ser <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mn>4</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mn>4</mn></mfrac><mo>−</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mo>+</mo><mn>2</mn><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>φ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El último término resonante se elimina sin más que tomar <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y para evitar el término resonante anteriormente existente hay que exigir que su coeficiente se anule, <math display=\"block\"><mrow><mn>2</mn><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mn>4</mn></mfrac><mo>−</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> mas no deberíamos pensar que basta despejar de esta ecuación <math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y sustituirlo en la última expresión de (7.39), ya que si así lo hiciéramos la propia solución ensayada tendría un término secular: el primero, que crecería sin límite. Lo que necesitamos es una solución del tipo <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> con una amplitud <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que satisfaga (7.41), pero que no crezca de forma ilimitada con <math display=\"inline\"><mi>t</mi></math>. En este caso, eso puede lograrse simplemente suponiendo que la condición (7.41) no solo se satisface en <math display=\"inline\"><mrow><mi>ε</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> sino en todos los puntos y es, por tanto, la ecuación diferencial que debe satisfacer la amplitud: <math display=\"block\"><mrow><mn>2</mn><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mn>4</mn></mfrac><mo>−</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que la solución de (7.43) es <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><msqrt><mrow><mn>1</mn><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>4</mn><msubsup><mi>A</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>t</mi></mrow></msup></mrow></msqrt></mfrac><mo>,</mo></mrow></math> con <math display=\"inline\"><mrow><msub><mi>A</mi><mn>0</mn></msub><mo>≡</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Concluya que la solución de la ecuación de van der Pol puede escribirse como <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><msqrt><mrow><mn>1</mn><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>4</mn><msubsup><mi>A</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>t</mi></mrow></msup></mrow></msqrt></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mi>ε</mi><mn>32</mn></mfrac><msubsup><mi>A</mi><mn>0</mn><mn>3</mn></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> o, con el mismo grado de aproximación, como <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><msqrt><mrow><mn>1</mn><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>4</mn><msubsup><mi>A</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>t</mi></mrow></msup></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mi>ε</mi><mn>32</mn></mfrac><msubsup><mi>A</mi><mn>0</mn><mn>3</mn></msubsup><mi mathvariant=\"normal\">sin</mi><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Demuestre que, independientemente de las condiciones iniciales, todas las soluciones aproximadas (menos una: ¿cuál?) tienden hacia una órbita periódica, aislada que es llamada <strong>ciclo límite</strong>, como veremos en el capítulo 8."
      }
     ]
    },
    {
     "mota": "ezezaguna",
     "oina": "Aproximación sin términos seculares",
     "izena": "irudia (ez da konpilatu)"
    },
    {
     "mota": "testua",
     "html": "En la figura 7.2 podemos ver cómo cuando <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0.1</mn></mrow></math> esta aproximación reproduce de forma excelente el comportamiento de la ecuación de van der Pol y permite calcular en buena aproximación su ciclo límite. A la resolución de la figura las gráficas obtenidas por integración numérica y usando la aproximación (7.46) son prácticamente indistinguibles. También vemos en (7.46) que, mientras que el tiempo rápido <math display=\"inline\"><mi>t</mi></math> interviene en la parte periódica de la solución, el lento <math display=\"inline\"><mrow><mi>ε</mi><mi>t</mi></mrow></math> aparece en la amplitud lentamente variable y, por tanto, en el proceso de acercamiento al ciclo límite."
    },
    {
     "mota": "testua",
     "html": "No debería pensarse que siempre basta con permitir que la amplitud de la oscilación sea una función del tiempo lento. En general hay que hacer también la misma hipótesis para la otra constante de integración: la fase inicial <math display=\"inline\"><mi>φ</mi></math>. También puede ser necesario suponer la existencia de un tiempo <strong>superlento</strong>: <math display=\"inline\"><mrow><msup><mi>ε</mi><mn>2</mn></msup><mi>t</mi></mrow></math> o (<math display=\"inline\"><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>ε</mi></mrow></math>) <math display=\"inline\"><mi>t</mi></math>, por ejemplo."
    },
    {
     "mota": "testua",
     "html": "En el caso particular de un oscilador sin término disipativo como el del problema 7.9, sabemos de antemano que la solución será periódica, por lo que bastará suponer que la frecuencia —y, por ello, el período— depende de <math display=\"inline\"><mi>ε</mi></math>, ensayando algo del tipo <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>ε</mi><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> con <math display=\"inline\"><mrow><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mi>ε</mi><msub><mi>ω</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi></mrow></math>, lo que implica suponer que solo la fase inicial depende del tiempo lento mientras que la amplitud es constante: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>ε</mi><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> con <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>φ</mi><mo>+</mo><mi>ε</mi><mi>t</mi><msub><mi>ω</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi></mrow></math>. Al utilizar esta hipótesis simplificada estamos usando, en un caso particular, el <strong>método de Poincaré-Lindstedt</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El método WKB"
    },
    {
     "mota": "testua",
     "html": "En la mayoría de los casos hay que recurrir a métodos aproximados para resolver la ecuación de Schrödinger para una partícula de masa <math display=\"inline\"><mi>m</mi></math> que se mueve en un potencial <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>ψ</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ψ</mi><mo>=</mo><mi>E</mi><mi>ψ</mi><mi>.</mi></mrow></math> En la aproximación semiclásica se considera que <math display=\"inline\"><mi>ħ</mi></math> es pequeña y puede utilizarse el método de Wentzel, Kramers y Brillouin, que también puede aplicarse a cualquier ecuación del tipo <math display=\"block\"><mrow><msup><mi>ε</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>ε</mi></math> es un parámetro pequeño. Usemos como guía el caso en que <math display=\"inline\"><mrow><mi>a</mi><mo>≡</mo><msqrt><mrow><mi>−</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mrow></math> es constante, de forma que la solución es la combinación lineal de dos exponenciales (reales o complejas): <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>a</mi><mi>x</mi><mi>/</mi><mi>ε</mi></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>a</mi><mi>x</mi><mi>/</mi><mi>ε</mi></mrow></msup><mi>.</mi></mrow></math> Notemos que todas las soluciones, excepto la nula, divergen cuando <math display=\"inline\"><mrow><mi>ε</mi><mo>→</mo><mn>0</mn></mrow></math>, lo que corresponde al hecho de que la ecuación 7.50 es singular, porque su orden se reduce (a cero) en ese límite. (En el problema 2.35 vimos otra ecuación singular, pero allí, en el marco de una teoría clásica, nos interesaba la única solución regular en el límite apropiado, mientras que en mecánica cuántica el límite <math display=\"inline\"><mrow><mi>ħ</mi><mo>→</mo><mn>0</mn></mrow></math> es singular). Basados en la forma de la solución para el caso en que <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es constante, parece razonable ensayar un cambio de variable dependiente de tipo exponencial <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>ε</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><msub><mi>u</mi><mn>0</mn></msub><mo>+</mo><mi>ε</mi><msub><mi>u</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi></mrow><mi>ε</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> En la aproximación WKB se desprecian todos los términos del desarrollo de <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> excepto <math display=\"inline\"><msub><mi>u</mi><mn>0</mn></msub></math> y <math display=\"inline\"><msub><mi>u</mi><mn>1</mn></msub></math>, que son hallados fácilmente: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≈</mo><msup><mi>e</mi><mrow><mfrac><mn>1</mn><mi>ε</mi></mfrac><msub><mi>u</mi><mn>0</mn></msub><mo>+</mo><msub><mi>u</mi><mn>1</mn></msub></mrow></msup><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>′</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac><msub><mi>u</mi><msup><mn>0</mn><mo>′</mo></msup></msub><mo>+</mo><msub><mi>u</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>″</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><msup><mi>ε</mi><mn>2</mn></msup></mfrac><msubsup><mi>u</mi><msup><mn>0</mn><mo>′</mo></msup><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><msup><mn>0</mn><mo>″</mo></msup></msub><mo>+</mo><mn>2</mn><msub><mi>u</mi><msup><mn>0</mn><mo>′</mo></msup></msub><msub><mi>u</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>u</mi><msup><mn>1</mn><mo>″</mo></msup></msub><mo>+</mo><msubsup><mi>u</mi><msup><mn>1</mn><mo>′</mo></msup><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>y</mi><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que para que (7.52) sea solución de (7.50) debe cumplirse <math display=\"block\"><mrow><msub><mi>u</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>±</mo><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><msqrt><mrow><mi>−</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt><mi>d</mi><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>u</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En consecuencia, la solución aproximada se escribirá, en término de dos constantes arbitrarias (reales o complejas) como <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>4</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>C</mi><mo>+</mo></msub><mi mathvariant=\"normal\">exp</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><msqrt><mrow><mi>−</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt><mi>d</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><msub><mi>C</mi><mo>−</mo></msub><mi mathvariant=\"normal\">exp</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mfrac><mn>1</mn><mi>ε</mi></mfrac><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><msqrt><mrow><mi>−</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt><mi>d</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math> No discutiremos aquí en detalle el difícil problema de la validez de la aproximación WKB, pero al menos está claro que la misma falla cerca de los puntos en que <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Desafortunadamente, esos puntos pueden ser de gran importancia. En el caso de la partícula en un potencial son los <strong>puntos de retroceso</strong>, definidos por la condición <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En el problema clásico asociado esos puntos limitan el movimiento, ya que debe cumplirse <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>≥</mo><mn>0</mn></mrow></math>, pero en el problema cuántico (7.49) simplemente separan las zonas en las que la solución es de tipo oscilatorio (cuando <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn></mrow></math>) de aquellas en las que es exponencial (con <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mn>0</mn></mrow></math>) debido a la atenuación de la función de onda al penetrar en la barrera de potencial. Se plantea por ello el importante problema de empalmar las soluciones en esas dos regiones, para lo que puede recurrirse a las <strong>fórmulas de enlace</strong> que se discuten en los textos de mecánica cuántica y en [25]."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva por el método WKB la ecuación <math display=\"inline\"><mrow><msup><mi>ε</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Métodos numéricos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Los métodos numéricos son, con gran diferencia, los más usados para resolver ecuaciones diferenciales, gracias a su amplia difusión a través de potentes y eficaces rutinas incluidas en librerías numéricas, en sistemas integrados de cálculo matemático o en programas dedicados exclusivamente a su solución (véase la bibliografía de la página 323). Vamos a analizar someramente algunos de los métodos elementales, con objeto de entender un poco la forma en que pueden diseñarse rutinas de integración de ecuaciones diferenciales. No recomendamos, sin embargo, usar directamente los métodos estudiados en este capítulo, excepto a modo de prueba para comprenderlos mejor. <em>Para trabajo serio deberían usarse rutinas avanzadas o uno de los sistemas o programas indicados en la bibliografía de la página 323, u otros alternativos</em>. Los esfuerzos de algunos (incluso investigadores serios) en programar directamente un Runge-Kutta resultan tan patéticos como ver a alguien construirse un ábaco para realizar una larga sucesión de operaciones aritméticas en vez de utilizar la calculadora. Para ampliar conocimientos sobre métodos numéricos en general, recomendamos el clásico texto de Stoer y Bulirsch [34] y para los relativos a la resolución de ecuaciones diferenciales el de Hairer, Norsett y Wanner [32]. Métodos numéricos prácticos listos para ser usados en FORTRAN y C pueden hallarse en la última referencia, así como en [33] y en [31]."
    },
    {
     "mota": "testua",
     "html": "Para resolver un problema de condiciones iniciales <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub><mo>,</mo></mrow></math> los métodos numéricos comienzan por discretizar el mismo: en vez de intentar obtener una aproximación a la solución en todos los puntos, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se intenta obtener, en una serie de puntos <math display=\"inline\"><msub><mi>x</mi><mi>n</mi></msub></math>, aproximaciones a los valores <math display=\"inline\"><mrow><msub><mi>y</mi><mi>n</mi></msub><mo>=</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> Si hace falta conocer los valores en puntos intermedios se usa interpolación (que es automáticamente proporcionada por algunos métodos avanzados). Los métodos se aplican paso a paso: a partir de la condición inicial, que nos da el punto de partida <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, se calcula el siguiente punto <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y, más en general, una vez obtenido el punto <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> se calcula el siguiente <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>. La distancia que se avanza cada vez, <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>x</mi><mi>n</mi></msub></mrow></math>, se llama <strong>paso de integración</strong> del método y se mantiene constante en métodos elementales, pero se hace variar de forma automática en métodos avanzados, para mantener el nivel de error deseado con el mínimo esfuerzo de cálculo."
    },
    {
     "mota": "testua",
     "html": "Nótese que si <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no depende de <math display=\"inline\"><mi>y</mi></math> tenemos un problema de cuadratura numérica <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi></mrow></math> que puede, por tanto, resolverse usando uno de los métodos discutidos en este capítulo, aunque también hay métodos diseñados expresamente para este tipo de problema más restringido, que no serán vistos aquí."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Método de Euler"
    },
    {
     "mota": "testua",
     "html": "El más simple de los métodos, llamado también <strong>método del polígono</strong>, consiste en invertir la aproximación de orden más bajo para la derivada <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo>≈</mo><mfrac><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>y</mi><mi>n</mi></msub></mrow><mi>h</mi></mfrac><mo>+</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> para obtener <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>h</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Como se ve en la figura 7.3, el método consiste en aproximar la solución entre <math display=\"inline\"><msub><mi>x</mi><mi>n</mi></msub></math> y <math display=\"inline\"><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></math> por"
    },
    {
     "mota": "ezezaguna",
     "oina": "Método de Euler",
     "izena": "irudia (ez da konpilatu)"
    },
    {
     "mota": "testua",
     "html": "el segmento tangente a la solución que pasa por <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "También podemos entender el método como el uso de un desarrollo en serie de Taylor truncado al orden lineal. El error cometido en la aproximación —que se suele llamar <strong>error de aproximación</strong>, <strong>error de truncamiento</strong> o <strong>error de discretización</strong>— es, por tanto, de segundo orden en <math display=\"inline\"><mi>h</mi></math>, ya que se retienen solo términos de primer orden en el desarrollo. Se dice que el método es de primer <strong>orden</strong>. Nótese que hasta ahora hemos considerado el error que se cometía al avanzar un solo paso, por lo que se trataba del <strong>error local</strong>. Como el error se acumula paso tras paso, y para avanzar una distancia <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> predeterminada hace falta dar un número de pasos que crece con <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>h</mi></mrow></math>, el <strong>error global</strong> será del orden de <math display=\"inline\"><mrow><msup><mi>h</mi><mn>2</mn></msup><mo>×</mo><mn>1</mn><mi>/</mi><mi>h</mi><mo>=</mo><mi>h</mi></mrow></math>. Al disminuir el paso, el error de truncamiento disminuye, a costa de un mayor esfuerzo de cálculo al tener que hallarse más puntos. Además, el paso no puede hacerse arbitrariamente pequeño, ya que por debajo de cierto umbral (dependiente del método y del sistema usado) aumentan los <strong>errores de redondeo</strong> inducidos por la aritmética con un número finito de dígitos que utilizan en la práctica todos los ordenadores y que es responsable, por ejemplo, de las dificultades inherentes asociadas a la substracción y derivación numéricas."
    },
    {
     "mota": "testua",
     "html": "En el caso de cuadratura numérica, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> el método consiste en sustituir el área bajo la curva por la del rectángulo que se muestra en la figura 7.4: <math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>x</mi><mi>n</mi></msub><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>y</mi><mi>n</mi></msub><mo>≈</mo><mi>h</mi><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ezezaguna",
     "oina": "Método de Euler para cuadratura numérica",
     "izena": "irudia (ez da konpilatu)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Método de Heun"
    },
    {
     "mota": "testua",
     "html": "Para mejorar el método de Euler —y obtener así un método llamado también de <strong>Euler mejorado</strong>— puede utilizarse un paso de tipo Euler para calcular un valor auxiliar <math display=\"block\"><mrow><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>*</mo></msubsup><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>, calcular la tangente a la solución que pasa por ese punto y aproximar la solución por el segmento que pasa por <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y tiene como pendiente el promedio de las correspondientes a las tangentes en los puntos <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mfrac><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mo>,</mo></mrow></math> como se ve en la figura 7.5. En resumen: <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>h</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ezezaguna",
     "oina": "Método de Heun",
     "izena": "irudia (ez da konpilatu)"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Use un desarrollo en serie de Taylor para comprobar que el error de truncamiento del método de Heun es proporcional a <math display=\"inline\"><msup><mi>h</mi><mn>3</mn></msup></math> y se trata, por tanto, de un método de segundo orden."
      }
     ]
    },
    {
     "mota": "ezezaguna",
     "oina": "Método de los trapecios",
     "izena": "irudia (ez da konpilatu)"
    },
    {
     "mota": "testua",
     "html": "En el caso de cuadratura numérica, se recupera el <strong>método de los trapecios</strong>, como se muestra en la figura 7.5: <math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>x</mi><mi>n</mi></msub><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>y</mi><mi>n</mi></msub><mo>≈</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Método del punto medio"
    },
    {
     "mota": "testua",
     "html": "Este método, también llamado de <strong>Euler modificado</strong> o <strong>método mejorado del polígono</strong>, es una variante del anterior: en vez de avanzar un paso entero y usar el promedio de las pendientes en los dos extremos, se avanza solo medio paso, <math display=\"block\"><mrow><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow><mo>*</mo></msubsup><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> y se aproxima la solución por el segmento que pasa por <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y tiene como pendiente la de la tangente en ese punto intermedio:"
    },
    {
     "mota": "ezezaguna",
     "oina": "Método del punto medio",
     "izena": "irudia (ez da konpilatu)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msub><mo>,</mo><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> es decir, <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>h</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el caso de cuadratura numérica, se recupera el método que se muestra a la derecha en la figura 7.7: <math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>x</mi><mi>n</mi></msub><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>y</mi><mi>n</mi></msub><mo>≈</mo><mi>h</mi><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ezezaguna",
     "oina": "Método del punto medio en cuadratura numérica",
     "izena": "irudia (ez da konpilatu)"
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Métodos de Runge-Kutta",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Se trata de una extensa familia de métodos de todos los órdenes y que incluye, en particular, los métodos de segundo orden vistos hasta ahora. La idea general del método consiste en evaluar pendientes en varios puntos (extremos e intermedios) y en avanzar con un paso de tipo Euler con una pendiente promediada adecuadamente. Por ejemplo, la familia general de segundo orden evalúa dos pendientes, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>k</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>k</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><msub><mi>k</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> y usa el siguiente promedio: <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>k</mi><mn>1</mn></msub><mo>+</mo><mi>a</mi><msub><mi>k</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>h</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que todos estos métodos son de segundo orden."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> se recupera el método de Heun, con <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> el del punto medio y <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>2</mn><mi>/</mi><mn>3</mn></mrow></math> proporciona el método con la mínima cota para el coeficiente de los términos de orden <math display=\"inline\"><msup><mi>h</mi><mn>3</mn></msup></math> despreciados."
    },
    {
     "mota": "testua",
     "html": "El método de Runge (30-08-1856, Bremen, Alemania; 3-01-1927, Gotinga, Alemania). Además de sus contribuciones a la teoría de aproximaciones, la geometría diferencial, las ecuaciones diofánticas y otras ramas de la matemática, realizó abundante trabajo experimental en espectroscopia, en especial sobre el efecto Zeeman.-Kutta (3-11-1867, Pitschen, Silesia ---hoy se llama Byczyna y está en Polonia---; 25-12-1944, Fürstenfeldbruck, Alemania). Además de su método para resolver ecuaciones diferenciales, que fue dado a conocer por Runge, es recordado por sus contribuciones a la aerodinámica. por antonomasia es el método de cuarto orden en que se calculan las pendientes <math display=\"block\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>k</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><msub><mi>k</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>k</mi><mn>3</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><msub><mi>k</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>k</mi><mn>4</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><msub><mi>k</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> y se usa la siguiente aproximación (véase el apartado B.4.6): <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>6</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>k</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>k</mi><mn>3</mn></msub><mo>+</mo><msub><mi>k</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>h</mi><mn>5</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> En el caso de cuadratura, se recupera la clásica <strong>fórmula de las parábolas de Simpson</strong> (20-08-1710, Market Bosworth, Inglaterra; 14-05-1761, Market Bosworth). Estudió teoría de probabilidades basándose en trabajos debidos a de Moivre y publicó en 1740 #emph[The Nature and Laws of Chance]. Es, sin embargo, más recordado por sus fórmulas de interpolación y cuadratura numérica y publicó en 1750 #emph[The Doctrine and Application of Fluxions]: <math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>x</mi><mi>n</mi></msub><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>y</mi><mi>n</mi></msub><mo>≈</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mfrac><mi>h</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>4</mn><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Es éste un método estable y muy fiable, pero lento. No es raro verlo citado incluso en trabajos de investigación. Hoy día, sin embargo, no hay demasiada excusa para usarlo en perjuicio de métodos de Runge-Kutta más potentes, como son los sofisticados métodos embebidos de Dormand y Prince que, con órdenes 5 y 8, proporcionan control automático del paso en función del error estimado, así como salida continua, ya que con un esfuerzo adicional mínimo dan también los coeficientes de un polinomio que interpola la solución entre los extremos de cada paso. Puede verse una buena descripción y algoritmos listos para ser usados en [32]."
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Métodos de varios pasos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Todos los métodos discutidos hasta este momento son métodos de un paso, porque cada paso es completamente independiente de los demás y se realiza utilizando información correspondiente exclusivamente a ese paso. Esto significa que no se aprovecha la información que sobre la solución se ha obtenido en pasos previos, que como vamos a ver a continuación puede ser utilizada para ahorrar esfuerzo de cálculo."
    },
    {
     "mota": "testua",
     "html": "Supongamos que los pasos están todos igualmente espaciados (<math display=\"inline\"><mrow><msub><mi>x</mi><mrow><mi>n</mi><mo>±</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>x</mi><mi>n</mi></msub><mo>±</mo><mi>h</mi></mrow></math>), usemos la notación abreviada <math display=\"inline\"><mrow><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y veamos cómo podemos construir un método de segundo orden que proporcione alrededor de <math display=\"inline\"><msub><mi>x</mi><mi>n</mi></msub></math> una aproximación del tipo <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> que, si evitamos escribir la magnitud del error, conduce a <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>a</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msubsup><mi>y</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mo>′</mo></msubsup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>a</mi><mo>−</mo><mn>2</mn><mi>b</mi><mi>h</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>a</mi><mi>h</mi><mo>+</mo><mi>b</mi><msup><mi>h</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mtd></mtr></mtable></math> Si multiplicamos por <math display=\"inline\"><mrow><mi>−</mi><mi>h</mi><mi>/</mi><mn>2</mn></mrow></math> la primera ecuación, por <math display=\"inline\"><mrow><mi>h</mi><mi>/</mi><mn>2</mn></mrow></math> la segunda y las sumamos a la tercera, obtenemos <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo>−</mo><msubsup><mi>y</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>h</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo>+</mo><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>h</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Un método de varios pasos de segundo orden que puede construirse con estos resultados es el prototipo de los métodos del tipo <strong>pronosticador-corrector</strong>, en los que se procede como sigue:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "En un paso pronosticado se usa extrapolación polinómica para evaluar una primera aproximación al siguiente punto: <math display=\"block\"><mrow><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>*</mo></msubsup><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo>−</mo><msubsup><mi>y</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>",
      "Se evalúa una aproximación a la derivada en el punto siguiente <math display=\"block\"><mrow><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>′</mo></msubsup><msup><mi></mi><mo>*</mo></msup><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>",
      "Se usa un corrector polinómico para hallar una segunda aproximación: <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo>+</mo><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>′</mo></msubsup><msup><mi></mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>",
      "Se evalúa la derivada en el punto siguiente: <math display=\"block\"><mrow><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>′</mo></msubsup><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "En métodos sofisticados pueden utilizarse varios correctores en serie o aplicar uno repetidas veces. Si, como en el ejemplo que acabamos de describir, los pronosticadores y correctores son polinomios en las derivadas se dice que se usa un <strong>método de Adams</strong> (5-06-1819, Laneast, Inglaterra; 21-01-1892, Cambridge, Inglaterra). Dedicó un gran esfuerzo al problema del movimiento de la Luna, del que dio una descripción más detallada que la de Laplace, pero su nombre es especialmente recordado como codescubridor de Neptuno al estudiar las irregularidades del movimiento de Urano. La información detallada de la posición de Neptuno que dio en septiembre de 1845 fue ignorada por el observatorio de Cambridge, y la posterior predicción de Urbain Le Verrier fue publicada antes y guió el descubrimiento del nuevo planeta realizado por Galle en el observatorio de Berlín el 23-09-1846. y el correspondiente pronosticador recibe el nombre de <strong>Adams-Bashforth</strong> mientras que el corrector es el de <strong>Adams-Moulton</strong>."
    },
    {
     "mota": "testua",
     "html": "El método de Adams-Bashforth-Moulton clásico es de cuarto orden y usa las siguientes expresiones: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>*</mo></msubsup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>24</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>55</mn><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo>−</mo><mn>59</mn><msubsup><mi>y</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mo>′</mo></msubsup><mo>+</mo><mn>37</mn><msubsup><mi>y</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow><mo>′</mo></msubsup><mo>−</mo><mn>9</mn><msubsup><mi>y</mi><mrow><mi>n</mi><mo>−</mo><mn>3</mn></mrow><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>24</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>9</mn><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>′</mo></msubsup><msup><mi></mi><mo>*</mo></msup><mo>+</mo><mn>19</mn><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo>−</mo><mn>5</mn><msubsup><mi>y</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mo>′</mo></msubsup><mo>+</mo><msubsup><mi>y</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Una de las ventajas de este tipo de método es que, en general, requiere menos cálculo que uno de Runge-Kutta del mismo orden. Por ejemplo, en el método de Adams de cuarto orden solo se evalúan dos derivadas por paso, mientras que en el Runge-Kutta correspondiente se necesitan cuatro. Por ello, estos métodos suelen ser más eficaces. Otra ventaja es que, al ofrecer más de una aproximación para el nuevo valor <math display=\"inline\"><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></math>, comparando dichas aproximaciones puede estimarse con poco esfuerzo el error cometido. Las dos principales desventajas de este tipo de método están relacionadas entre sí:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "los métodos no pueden empezar por sí solos, ya que la información a un paso que dan las condiciones iniciales no es suficiente,"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "cuando se cambia la longitud del paso como consecuencia del control de errores, la información necesaria para el siguiente paso no está, en general, disponible."
     ]
    },
    {
     "mota": "testua",
     "html": "Estos problemas pueden superarse (usando un Runge-Kutta con paso pequeño para comenzar, dividiendo el paso por 2 o multiplicándolo por 2 y usando interpolación, etc.), pero hacen que la programación de uno de estos métodos sea más complicada que la de los Runge-Kutta. Por otro lado, tienden a ser bastantes más rápidos, mientras que los Runge-Kutta son más estables. De hecho, se han desarrollado métodos de tipo pronosticador-corrector muy eficaces y sofisticados, aunque parece que van siendo sustituidos progresivamente por los llamados métodos de extrapolación, que describimos a continuación."
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Métodos de extrapolación",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Estos métodos suelen ser muy rápidos y precisos (en un cierto sentido son de orden infinito), aunque exigen soluciones muy regulares y fallan, por ello, más a menudo que los de tipo de Runge-Kutta. El más conocido de todos se basa en el <strong>método de Gragg</strong>, también llamado del <strong>punto medio modificado</strong>, en el que para avanzar entre <math display=\"inline\"><mi>x</mi></math> e <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>H</mi></mrow></math> una distancia <math display=\"inline\"><mi>H</mi></math> no necesariamente pequeña se usan <math display=\"inline\"><mi>n</mi></math> pasos de longitud <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mi>H</mi><mi>/</mi><mi>n</mi></mrow></math> y se calculan los siguientes valores intermedios: <math display=\"block\"><mrow><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub><mo>+</mo><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub><mo>+</mo><mn>2</mn><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>h</mi><mo>,</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mn>2</mn><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>k</mi><mi>h</mi><mo>,</mo><msub><mi>y</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> y se define la aproximación para <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> como <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>H</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><msub><mi>y</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>H</mi><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> El método por sí mismo es, por tanto, de orden bajo, pero Gragg demostró que en la expresión del error de truncamiento cometido en este método solo aparecen potencias pares de la magnitud del paso: <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>H</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>k</mi></msub><msup><mi>h</mi><mrow><mn>2</mn><mi>k</mi></mrow></msup><mi>.</mi></mrow></math> Ahora bien, cuando faltan las potencias impares del error, una potente idea —conocida, según autores y contextos, con los nombres de <strong>aproximación diferida al límite</strong>, <strong>extrapolación de Richardson</strong> (11-10-1881, Newcastle upon Tyne, Inglaterra; 30-09-1953, Kilmun, Escocia). Su trabajo como físico, químico y meteorólogo, incluye contribuciones al cálculo y a la teoría de la difusión y aplicó la matemática al estudio de las causas de la guerra, pero es más recordado por haber sido el primero en usar la matemática —el método de diferencias finitas— para la predicción del tiempo en #emph[Weather Prediction by Numerical Process] (1922)., <strong>racional</strong> o de <strong>Neville</strong>— permite mejorar eficazmente la calidad de la aproximación repitiendo el cálculo con otro (u otros) valor de <math display=\"inline\"><mi>h</mi></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que el error comienza por <math display=\"inline\"><msup><mi>h</mi><mn>4</mn></msup></math> si se usa la aproximación <math display=\"inline\"><mrow><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>H</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>H</mi><mo>,</mo><mi>n</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Este resultado puede extenderse sin dificultad para obtener una aproximación de orden tan grande como se quiera. En la práctica suelen elegirse <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>8</mn><mo>,</mo><mn>12</mn><mo>,</mo><mn>16</mn><mo>,</mo><mn>24</mn><mo>,</mo><mi>…</mi></mrow></math> (en el conocido método de Bulirsch-Stoer por ejemplo) o <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>8</mn><mo>,</mo><mi>…</mi></mrow></math>. Para más detalles sobre la programación práctica de este tipo de métodos remitimos al lector a los textos [34], [32] y [33]. (En los dos últimos pueden hallarse algoritmos listos para usar). La extrapolación de Richardson es también muy útil para calcular derivadas numéricas y en cuadratura numérica, donde da lugar al método de Romberg."
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Métodos implícitos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos el sistema <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mn>501</mn><mi>x</mi><mo>+</mo><mn>499</mn><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>499</mn><mi>x</mi><mo>−</mo><mn>501</mn><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> cuya solución general es <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>1000</mn><mi>t</mi></mrow></msup><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup><mo>−</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>1000</mn><mi>t</mi></mrow></msup><mo>,</mo></mtd></mtr></mtable></math>, que obviamente tiende a <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> cuando <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>. Veamos si este comportamiento asintótico puede observarse si lo resolvemos por el método de Euler."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que las aproximaciones obtenidas por el método de Euler son <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>x</mi><mi>n</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>+</mo><msup><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>1000</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mi>n</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>−</mo><msup><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>1000</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por consiguiente, el método hallará que todas las soluciones convergen al origen si y solo si <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>h</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>1</mn><mo>−</mo><mn>1000</mn><mi>h</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mn>1</mn></mrow></math>. Por tanto, aunque el término <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mn>1000</mn><mi>t</mi></mrow></msup></math> prácticamente no va a contribuir a la solución, su mera presencia impone un severo límite al paso de integración (<math display=\"inline\"><mrow><mi>h</mi><mo>&lt;</mo><mn>0.002</mn></mrow></math>), ya que en caso contrario ese término, que debería ser despreciable, dominaría la solución numérica y haría que la misma fuera al infinito en vez de converger a cero. Este tipo de comportamiento (y otros relacionados que aparecen en las llamadas ecuaciones <strong>rígidas</strong>, con las que, no solo el método de Euler, sino todos los métodos que hemos visto antes, incluso los más sofisticados, resultan inadecuados) puede ser tratado adecuadamente por medio de los <strong>métodos implícitos</strong>, de los que no veremos sino el más elemental, pudiendo encontrarse otros realmente prácticos en [32], [33] y [31]."
    },
    {
     "mota": "testua",
     "html": "En el <strong>método de Euler implícito</strong> se usa la pendiente en el punto final del intervalo, en vez de usar la correspondiente al punto inicial: <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>h</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Ésta es una ecuación de la que hay que obtener <math display=\"inline\"><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></math>, lo que puede hacerse numéricamente por un método iterativo, que no nos interesa en este momento."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que las aproximaciones obtenidas por el método de Euler implícito son <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>x</mi><mi>n</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mi>n</mi></mrow></msup><mo>+</mo><msup><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>1000</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mi>n</mi></mrow></msup><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mi>n</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mi>n</mi></mrow></msup><mo>−</mo><msup><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>1000</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mi>n</mi></mrow></msup><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Vemos que el método implícito predice la convergencia hacia el origen para todo <math display=\"inline\"><mrow><mi>h</mi><mo>&gt;</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Antes de terminar, queremos hacer notar que la práctica del cálculo numérico es, como tantas otras, una disciplina que tiene algo de arte y que hace falta mucha experiencia antes de estar seguro de dominarla, ya que está llena de trampas y sutilezas."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Qué cree que pasaría al resolver numéricamente el problema de condiciones iniciales <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mn>10000</mn><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>100</mn><mo>,</mo></mrow></math> cuya solución es <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>100</mn><mi>x</mi></mrow></msup></mrow></math>?"
      }
     ]
    }
   ]
  },
  {
   "id": "a23",
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
       "html": "Use la regla de l&#x27;Hôpital (1661, París; 2-02-1704, París). Este discípulo de Johann Bernoulli, Jacob Bernoulli y Leibniz escribió en 1692 el primer texto de cálculo, #emph[Analyse des infiniment petits pour l&#x27;intelligence des lignes courbes], que contiene su famosa regla. Resolvió, al mismo tiempo que Newton, Leibniz y Jacob Bernoulli, el problema de la braquistocrona. para demostrar que <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></math> decrece más rápidamente que toda potencia negativa de <math display=\"inline\"><mi>x</mi></math>, es decir, que <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo>=</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> cuando <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>∞</mi></mrow></math> para <math display=\"inline\"><mi>n</mi></math> arbitrariamente grande."
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
       "html": "Demuestre que para <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>∞</mi></mrow></math>) el logaritmo diverge más lentamente que cualquier potencia negativa (positiva) de <math display=\"inline\"><mi>x</mi></math>, es decir, que <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mrow><mi>−</mi><mi>ε</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mi>ε</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) para <math display=\"inline\"><mi>ε</mi></math> tan pequeño como se quiera."
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
       "html": "Halle los valores de <math display=\"inline\"><mi>α</mi></math> para los que sea cierto que <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mi>α</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> cuando <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></math> si (a) <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math>, (b) <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y (c) <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ecuación de Riccati",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "De acuerdo con el problema 3.27, la ecuación de Riccati <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> es equivalente a la ecuación lineal homogénea <math display=\"inline\"><mrow><msup><mi>u</mi><mo>″</mo></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> si <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><msup><mi>u</mi><mo>′</mo></msup><mi>/</mi><mi>u</mi></mrow></math>. Calcule la solución aproximada de esta última ecuación que corresponde a <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> y compruebe que se recobra la solución del ejercicio 7.4."
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
       "html": "Halle aproximaciones a la solución de <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> por medio de una serie de potencias y del método de Picard. Compare los resultados."
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
       "html": "Compare las sucesivas aproximaciones obtenidas por el método de Picard aplicado al problema de valores iniciales <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> partiendo de <math display=\"inline\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y de <math display=\"inline\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>x</mi></mrow></math>. Comente el resultado."
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
       "html": "En la obra <em>Methodus Fluxionum et Serierum Infinitarum</em> de 1671, Newton probó que la solución del problema <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> es <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>30</mn></mfrac><msup><mi>x</mi><mn>5</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>45</mn></mfrac><msup><mi>x</mi><mn>6</mn></msup><mo>+</mo><mi>⋯</mi></mrow></math> Obtenga el resultado mediante dos métodos distintos."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Oscilador amortiguado",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva el problema <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>ε</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mo>,</mo></mrow></math> (a) hallando la solución analítica, (b) usando perturbación regular, (c) por medio del método de los dos tiempos. Compare y comente los resultados."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Oscilador cuasiarmónico",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Considere la ecuación <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>ε</mi><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>ε</mi></math> es un parámetro pequeño y <math display=\"inline\"><mi>ω</mi></math> la frecuencia natural del oscilador en ausencia del término perturbativo. Intente resolver esta ecuación por el método del parámetro pequeño. ¿Aparecen términos seculares? Sustituya la expresión aproximada de la solución perturbativa a primer orden en la expresión de la energía mecánica y estudie su comportamiento. Utilice el método de Poincaré-Lindstedt para hallar una solución aproximada. ¿Por qué otro método podría calcularse aproximadamente el período?"
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
       "html": "Resuelva por el método WKB <math display=\"inline\"><mrow><msup><mi>ε</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>y</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Precesión del perihelio de Mercurio",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Al estudiar el problema de Kepler (27-12-1571, Weil der Stadt, Sacro Imperio Romano; 15-11-1630, Regensburg en la actual Alemania). Introducido por su maestro Maestlin a la astronomía heliocéntrica de Copérnico, publicó una supuesta explicación matemática de la misma en términos de poliedros regulares. Fue ayudante de Tycho Brahe durante el año que precedió a la muerte de éste y usó sus observaciones para establecer las famosas tres leyes sobre el movimiento de los planetas alrededor del Sol. Trabajó sobre logaritmos y óptica, donde demostró que la visión se debe a la recepción de rayos de luz por el ojo y perfeccionó el telescopio. También escribió sobre la supernova de 1604, que ahora lleva su nombre. en relatividad general usando coordenadas polares <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> la ecuación de la órbita puede escribirse en la forma <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>d</mi><msup><mi>φ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>p</mi></mfrac><mo>+</mo><mi>ε</mi><mi>p</mi><msup><mi>u</mi><mn>2</mn></msup><mo>,</mo></mrow></math> siendo <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math>. Cuando <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math> se recupera la ecuación (2.124). Por otro lado, la órbita de Mercurio alrededor del Sol es descrita por esta ecuación con <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>3</mn><mi>M</mi><mi>G</mi><mi>/</mi><mi>p</mi><msup><mi>c</mi><mn>2</mn></msup><mo>≈</mo><mn>8</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup></mrow></math> Utilice teoría de perturbaciones a primer orden para calcular la órbita de Mercurio. (Asegúrese de eliminar los términos seculares). Calcule el ángulo que separa dos perihelios sucesivos (es decir, dos máximos consecutivos de <math display=\"inline\"><mi>u</mi></math>) y compruebe que no es exactamente <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi></mrow></math>, por lo que el perihelio está precesando. Demuestre que, puesto que Mercurio efectúa 415 revoluciones alrededor del Sol en un siglo, la relatividad general predice una precesión de su perihelio igual a <math display=\"inline\"><mrow><mn>43</mn><mo>,</mo><msup><mn>03</mn><mo>″</mo></msup></mrow></math> por siglo, en buen acuerdo con el valor observado de <math display=\"inline\"><mrow><mn>43</mn><mo>,</mo><mn>11</mn><mo>±</mo><mn>0</mn><mo>,</mo><msup><mn>45</mn><mo>″</mo></msup></mrow></math> por siglo."
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
       "html": "Resuelva mediante perturbaciones <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>ε</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>3</mn></msup><mo>+</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y use el resultado para discutir la estabilidad del punto de equilibrio, para pequeños valores positivos y negativos de <math display=\"inline\"><mi>ε</mi></math>."
      }
     ]
    },
    {
     "mota": "problema-gaia",
     "testua": "Problemas numéricos"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-oin\">[En los restantes problemas debe usarse alguno de los métodos vistos en este capítulo para realizar la integración numérica. Las ecuaciones de segundo orden que aparecen son autónomas, por lo que puede hallarse la ecuación de primer orden equivalente mediante el método del apartado 3.4.2. Análogamente, los sistemas compuestos por dos ecuaciones serán autónomos y solo es necesario resolver la ecuación de las trayectorias de fases del apartado 4.1.1. La solución numérica de la mayor parte de los siguientes problemas será utilizada en el capítulo 8, donde pueden verse los dibujos correspondientes.]</span>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dibuje el espacio <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de las soluciones de la ecuación <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> del problema 2.6."
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
       "html": "Analice la ecuación de Newton del problema 7.7: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi></mrow></math>. ¿Cómo debe elegirse <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub></mrow></math> para que la solución vaya a <math display=\"inline\"><mrow><mi>±</mi><mi>∞</mi></mrow></math> cuando <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>∞</mi></mrow></math>?"
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
       "html": "Las soluciones de la ecuación <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>t</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> se convierten en <math display=\"inline\"><mrow><mi>x</mi><mo>≃</mo><msqrt><mi>t</mi></msqrt></mrow></math> al crecer <math display=\"inline\"><mi>t</mi></math>. ¿Qué sucede al emplear los distintos métodos de integración en el intervalo <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>t</mi><mo>≤</mo><mn>10000</mn></mrow></math>?"
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
       "html": "¿Qué pasa al usar distintos métodos numéricos para resolver el sistema (7.98)–(7.99)?"
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
       "html": "Utilice diferentes métodos numéricos para tratar de obtener una buena aproximación a la solución exacta del problema del ejercicio 7.23."
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
       "html": "Dibuje el espacio de fases del sistema <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>ε</mi><mi>x</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>r</mi><mo>+</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>ε</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></math> cuando <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math> para los siguientes valores de los otros parámetros:"
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "taula",
         "goiburua": [],
         "lerroak": [
          [
           "<math display=\"inline\"><mi>d</mi></math>",
           "<math display=\"inline\"><mn>1</mn></math>",
           "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>",
           "<math display=\"inline\"><mn>3</mn></math>",
           "<math display=\"inline\"><mn>1</mn></math>",
           "<math display=\"inline\"><mn>1</mn></math>"
          ],
          [
           "<math display=\"inline\"><mi>r</mi></math>",
           "<math display=\"inline\"><mrow><mi>−</mi><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math>",
           "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>",
           "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>",
           "<math display=\"inline\"><mn>0</mn></math>",
           "<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn></mrow></math>"
          ]
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
       "html": "Dibuje el espacio de fases <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del siguiente sistema para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>3</mn></mrow></math>: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mi>n</mi></msup><mi>.</mi></mtd></mtr></mtable></math>"
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
       "html": "Halle el espacio de fases del siguiente sistema en los casos <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>ε</mi><mi>x</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mi>ε</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>?</mi></mtd></mtr></mtable></math>"
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
       "html": "Dibuje el espacio de fases <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> de la ecuación <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> cuando <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>."
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
       "html": "Dibuje el espacio de fases del siguiente sistema: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mn>2</mn><mi>x</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mtd></mtr></mtable></math>"
      }
     ]
    }
   ]
  }
 ]
};
