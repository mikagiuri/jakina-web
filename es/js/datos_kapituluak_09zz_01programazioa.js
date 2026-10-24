/* JAKINA · kapitulua «B10.3 - M28 Programazioa eta algoritmoak» (09zz_01programazioa), desde edicion2/kapituluak/09zz_01programazioa/09zz_01programazioa.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["09zz_01programazioa"] = {
 "gakoa": "09zz_01programazioa",
 "titulua": "JAKINA - B10.3 - M28 Programación y algoritmos",
 "azala": "B10.3 - M28 Programación y algoritmos",
 "azpititulua": "Etapa IV - HERRAMIENTAS",
 "iturburua": "kapituluak/09zz_01programazioa/09zz_01programazioa.typ",
 "sarrera": [
  {
   "mota": "modulua",
   "kodea": "M28",
   "izenburua": "Programación y algoritmos",
   "maila": "HERRAMIENTAS"
  },
  {
   "mota": "helburuak",
   "elementuak": [
    "Leer y escribir algoritmos básicos en seudocódigo/Python.",
    "Implementar algoritmos clásicos de teoría de números (divisores, primos, cambio de base).",
    "Realizar un procesamiento sencillo de cadenas."
   ]
  },
  {
   "mota": "aurrebaldintzak",
   "elementuak": [
    "M03 — Números naturales e inducción"
   ]
  },
  {
   "mota": "oharra",
   "titulua": "Módulo nuevo (2026-07-30)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Este módulo se ha creado por decisión del usuario, porque las páginas de COMPUTACIÓN del cuaderno landeta2 no tenían destinatario en JAKINA. El número (<code>M28</code>) es el último a propósito: no se ha reordenado ninguna numeración existente, para no romper referencias. Por ahora está compuesto con fuentes manuscritas; el corpus teórico propio queda por añadir más adelante."
    }
   ]
  },
  {
   "mota": "iturria",
   "proiektua": "diario landeta 2 ene 2013, IMG_2026_07_28_01_43_34S.jpg eta IMG_2026_07_28_01_43_40S.jpg (ezker orria)",
   "xehetasuna": "COMPUTACIÓN LANDETA (landeta2), páginas 34-36, 2013/01/04 (examen): números amigos y divisores, test de primalidad, suma de primos, conversión decimal→binario y porcentaje de aparición de palabras en cadenas — transcripciones literales v3, algoritmos comprobados",
   "hizkuntza": "es"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Números amigos, primos y conversión decimal→binario (seudocódigo Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Código de examen en seudocódigo tipo Python: suma de divisores y números amigos, números primos, y conversión de decimal a binario mediante divisiones sucesivas."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Números amigos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def sumadivisores(num):\n    suma = 0\n    for i in range(1, (num//2)+1):\n        if num % i == 0:\n            suma = suma + 1        # jatorrizkoan; zuzena: suma + i\n    return suma\n\ndef sonamigos(n1, n2):\n    if n1 == sumadivisores(n2) and n2 == sumadivisores(n1):\n        return True\n    else:\n        return False</code>"
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Números primos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def esprimo(n):\n    primo = True\n    i = 2\n    while i &lt; n and primo == True:\n        if n % i == 0:\n            primo = False\n        i = i + 1\n    return primo\n\ndef sumaprimos(n):\n    suma = 0\n    for i in range(1, n+1):\n        if esprimo(i):\n            suma = suma + 1        # jatorrizkoan; zuzena: suma + i\n    return suma</code>"
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Decimal → binario (divisiones sucesivas)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ejemplos manuscritos: <math display=\"inline\"><mrow><mn>7</mn><mo>→</mo><mn>111</mn></mrow></math>, <math display=\"inline\"><mrow><mn>6</mn><mo>→</mo><mn>110</mn></mrow></math> (divisiones sucesivas por <math display=\"inline\"><mn>2</mn></math>, leyendo los restos al revés)."
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def convierte(n):\n    s = ''\n    while n &gt; 0:\n        s = str(n % 2) + s\n        n = n // 2\n    return s\n\nnum = int(input(\"Sartu zenbaki oso positibo bat\"))\nif num &lt;= 0:\n    print(\"Zenbakia ez da positiboa\")\nelse:\n    print(num, \"--&gt;\", convierte(num))</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — correcciones",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Código recogido tal cual. ⚠ <strong>Correcciones (puestas sobre la mesa):</strong> (1) en <code>sumadivisores</code>, <code>suma = suma + 1</code> <strong>cuenta</strong> los divisores, no los suma — para los números amigos (cada uno igual a la suma de los divisores propios del otro) hace falta <code>suma = suma + i</code>; escrito así, <code>sonamigos</code> compararía recuentos y daría resultados erróneos (p. ej. 220 y 284 <strong>no</strong> saldrían como amigos). Igual en <code>sumaprimos</code> (<code>+ 1</code> cuenta primos; el rótulo rojo pide «suma»). Por el parecido entre el «1» manuscrito del autor (<math display=\"inline\"><mi mathvariant=\"normal\">Λ</mi></math>) y la «i», en el original podría ser también «+ i»; se ha conservado lo visible en la capa literal. (2) <code>esprimo</code> devuelve <code>True</code> para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> (y <math display=\"inline\"><mn>0</mn></math>), aunque <math display=\"inline\"><mn>1</mn></math> no es primo; con <code>range(1, n+1)</code> en <code>sumaprimos</code> se colaría ese <math display=\"inline\"><mn>1</mn></math> espurio. La conversión binaria es <strong>correcta</strong> (los ejemplos <math display=\"inline\"><mrow><mn>7</mn><mo>→</mo><mn>111</mn></mrow></math>, <math display=\"inline\"><mrow><mn>6</mn><mo>→</mo><mn>110</mn></mrow></math> son correctos; <code>convierte</code> es el mismo algoritmo). <strong>Fuente nueva:</strong> examen de «COMPUTACIÓN LANDETA» (no hay un módulo de computación fijado en JAKINA). Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta2_comput_p034.typ</code>"
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
   "id": "a5",
   "maila": 2,
   "izenburua": "Porcentaje de aparición de palabras en una búsqueda (seudocódigo Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Programa que compara las palabras de una cadena de búsqueda con una cadena de referencia y calcula el porcentaje de aparición de cada una."
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">busqueda = input(\"Sartu bilaketa-katea\")\ncadena   = input(\"Sartu erreferentzia-katea\")\nlbus    = busqueda.split()\nlcadena = cadena.split()\ntamano  = len(lcadena)\nfor pbus in lbus:\n    por = 0\n    for pcad in lcadena:\n        if pbus == pcad:\n            por = por + 1\n    print(\"«\", pbus, \"» hitza agertzen da\", 100*por/tamano, \"%\")</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — detalles del Python real",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La lógica del programa es correcta como seudocódigo: contar las apariciones de cada palabra de la búsqueda en la referencia y expresarlas como porcentaje (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tamaño </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo></mrow></math> el número de palabras de la referencia). ⚠ <strong>Detalles que fallarían en Python real:</strong> (1) el original declara <code>BÚSQUEDA</code> pero usa <code>BUS.SPLIT()</code> — <strong>incoherencia de nombre</strong> (aquí unificado con <code>busqueda</code>); (2) <code>print</code> está <strong>fuera</strong> del bucle interno (dentro del <code>for</code> exterior), por lo que imprime una línea por cada palabra de la búsqueda — coherente con el objetivo; (3) en Python 2, <code>100*por/tamano</code> sería división entera. Recogido sin corregir en la capa literal. La última línea estaba cortada por el borde en el original (no se puede fijar el formato exacto). Una nota verde («PRESIÓN <math display=\"inline\"><mrow><mi>d</mi><mi>/</mi><mi>d</mi><mi>x</mi></mrow></math>») parece no tener relación con el programa. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta2_comput_p036.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "diario landeta 2 ene 2013, IMG_2026_07_28_01_46_18S.jpg eta IMG_2026_07_28_01_47_04S.jpg",
     "xehetasuna": "COMPUTACIÓN (landeta2), páginas 68-69 y 82-83, 2013/01/14-17: ficheros (r/w/a), recuento de vocales con diccionario, lista de divisores, SCILAB, alternar líneas de ficheros y juego de adivinar el número (random) — transcripciones literales v3",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Ficheros, diccionarios, listas y Scilab (seudocódigo Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Trabajar con ficheros (modos de apertura), programa para contar vocales con un diccionario, lista de divisores, y las primeras órdenes de Scilab."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Modos de apertura"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -r (read): irakurri</mtext></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -w (write): gainidatzi</mtext></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -a (append): amaieran idatzi. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Contar vocales (diccionario)"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def vocales(nombre):\n    f = open(nombre, \"r\")\n    linea = f.readline()\n    dic = {}                 # jatorrizkoan [ ]; hiztegia behar da\n    while linea != \"\":       # jatorrizkoan \" \"; hutsa \"\" behar da\n        for letra in linea:\n            if letra == 'a' or letra == 'e' or ...:   # (etc.)\n                if letra in dic:\n                    dic[letra] += 1\n                else:\n                    dic[letra] = 1\n        linea = f.readline()\n    return dic\n\nnombre = input(\"Sartu fitxategiaren izena: \")\ndiccionario = vocales(nombre)\nfor elemento in diccionario:\n    print(\"«\", elemento, \"» bokala agertzen da\", diccionario[elemento], \"aldiz\")\nprint(\"Fitxategiak\", len(diccionario), \"bokal ditu\")</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lista de divisores"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def lista_divisores(num):\n    l = []\n    for i in range(1, num):    # zenbakia bera sartzeko: range(1, num+1)\n        if num % i == 0:\n            l.append(i)\n    return l\n\nnumero = int(input(\"Sartu zenbaki bat: \"))\nlis = lista_divisores(numero)\nprint(lis)\nprint(lis[2])                  # hirugarren zatitzailea (indizeak 0-tik)</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Scilab (primeras órdenes)"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-scilab j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">x = 1:100    // 1..100 osoen bektorea\ny = x        // kopia\nplot(x, y)   // y = x zuzena marraztu</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — detalles del Python real",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los algoritmos son correctos como seudocódigo. ⚠ <strong>Detalles que fallarían en Python real (recogidos):</strong> (1) <code>dic = [ ]</code> crea una lista; para indexar por letra hace falta <code>{}</code> (un diccionario); (2) la condición de parada <code>while linea != &quot; &quot;</code> compara con un espacio, cuando el fin de fichero devuelve la cadena vacía <code>&quot;&quot;</code>; (3) <code>(etc.)</code> y las letras minúsculas indican que el autor abrevió; (4) <code>range(1, numero)</code> recorre <math display=\"inline\"><mrow><mn>1</mn><mi>.</mi><mi>.</mi></mrow></math>numero<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>, por lo que el propio número <strong>no</strong> aparece entre sus divisores (haría falta <code>range(1, numero+1)</code>). <code>lis[2]</code> es el tercer divisor (los índices empiezan en <math display=\"inline\"><mn>0</mn></math>). Scilab: <code>x = 1:100</code>, <code>y = x</code>, <code>plot</code> son correctos (en Scilab sería <code>plot(x,y)</code>). <strong>Fuente nueva:</strong> «COMPUTACIÓN» (sin profesor en el encabezado, a diferencia de las páginas 34-36); va al módulo M28. Véase <code>koadernoa_landeta2_comput_p068.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Binario, alternancia de dos ficheros y juego de adivinar (seudocódigo Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Tres programas: conversión decimal→binario, alternar las líneas de dos ficheros en un tercero, y un juego de adivinar un número aleatorio."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Conversión a binario"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def convertir(n):\n    s = ''             # jatorrizkoan ' ' (zuriunea); '' behar da\n    while n != 0:\n        s = str(n % 2) + s\n        n = n // 2\n    return s\nprint(convertir(n))</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Alternar las líneas de dos ficheros"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">f1 = open(\"fich.txt\", \"r\")\nf2 = open(\"fich2.txt\", \"r\")\nlinea1 = f1.readline()\nlinea2 = f2.readline()\nf3 = open(\"destino.txt\", \"w\")     # jatorrizkoan OPEN falta\n\nwhile linea1 != \"\" and linea2 != \"\":\n    f3.write(linea1)\n    f3.write(linea2)\n    linea1 = f1.readline()\n    linea2 = f2.readline()\n\nwhile linea1 != \"\":               # f1-eko soberakina\n    f3.write(linea1)\n    linea1 = f1.readline()\nwhile linea2 != \"\":               # f2-eko soberakina\n    f3.write(linea2)\n    linea2 = f2.readline()\nf3.close()</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Juego de adivinar"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">import random\nnum = int(100 * random.random())\ncont = 1\nprint(\"Zenbaki bat pentsatu dut, asmatu ezazu\")\nop = int(input(\"Sartu zure erantzuna: \"))\nwhile op != num:\n    print(\"Zenbaki okerra\")\n    cont = cont + 1\n    if op &gt; num:\n        print(\"Zenbaki txikiago bat pentsatu dut\")\n    else:\n        print(\"Zenbaki handiago bat pentsatu dut\")\n    op = int(input(\"Sartu zure erantzuna: \"))\nprint(\"Zuzena!\")\nprint(\"\", cont, \"saiakera erabili dituzu\")</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — detalles del Python real",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los algoritmos son correctos. ⚠ <strong>Detalles (recogidos):</strong> (1) en <code>convertir</code>, <code>s = &#x27; &#x27;</code> empieza con un espacio (debe ser <code>&#x27;&#x27;</code>, si no quedaría un espacio delante); (2) en la alternancia, la condición de fin de fichero es <code>!= &quot; &quot;</code> (espacio) en lugar de <code>!= &quot;&quot;</code> (vacío); (3) en la asignación de <code>f3</code> falta <code>open</code> en el original; (4) los modos mezclan mayúsculas y minúsculas (&quot;r&quot;/&quot;R&quot;). Algoritmo de alternancia correcto: un bucle conjunto mientras ambos tengan líneas, luego dos bucles para volcar el resto del más largo, con <code>close()</code> al final. El juego de adivinar es correcto (las pistas están bien invertidas — si la respuesta es mayor, el número pensado es menor —, <code>cont</code> empieza en <math display=\"inline\"><mn>1</mn></math> y aumenta con cada fallo, reflejando todos los intentos; el módulo <code>random</code> genera un número entre <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>99</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>). En <code>print(convertir(S))</code> el argumento que se lee es <code>S</code>, que debería ser un número; recogido. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta2_comput_p082.typ</code>"
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
   "id": "a8",
   "maila": 2,
   "izenburua": "Método de Newton, series, factoriales y Fibonacci (seudocódigo Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cinco programas: raíz cuadrada por el método de Newton (con iteraciones fijas y con tolerancia), serie alternada, factorial en tres versiones, y Fibonacci."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Raíz cuadrada por el método de Newton"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def raiz(num, ite):\n    x = 1\n    for i in range(ite):\n        x = x - ((x**2) - num) / (2*x)\n    return x\nprint(raiz(27, 10))   # adibidea\n\ndef raiz2(num):\n    x = 1\n    xn = x - ((x**2) - num) / (2*x)\n    cont = 1\n    while abs(xn - x) &gt; 0.000001:\n        x = xn\n        xn = xn - ((xn**2) - num) / (2*xn)   # jatorrizkoan 2*x\n        cont += 1\n    print(cont)\n    return xn</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Serie según pares/impares"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def serie(t1, ite):\n    l = [t1]\n    for i in range(1, ite):\n        if i % 2 == 0:\n            l.append(l[i-1] // 2)\n        else:\n            l.append((l[i-1] * 3) + 1)\n    return l\n# t1=7: [7, 22, 11, 34, 17, 52, 26, 79, 39, 118]</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Factorial (tres versiones)"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def factorial1(n):        def factorial2(n):\n    f = 1                     f = 1\n    while n &gt; 1:              for i in range(2, n+1):\n        f = f * n                 f = f * i\n        n = n - 1             return f\n    return f\n\ndef factorial_r(n):       # funtzio ERREKURTSIBOA (bere buruari deitzen diona)\n    if n == 0 or n == 1:  #   oinarri-kasua\n        return 1\n    else:                 #   errekurtsio-kasua\n        return n * factorial_r(n-1)</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fibonacci"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def fibonacci(ite):\n    l = [0, 1]\n    for i in range(2, ite+1):\n        l.append(l[i-2] + l[i-1])\n    return l\n# [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...]\n\ndef mostrar_fibonacci(ite):\n    x0 = 0\n    x1 = 1\n    s = str(x0) + ', ' + str(x1)\n    for i in range(2, ite+1):\n        aux = x1\n        x1 = x1 + x0\n        x0 = aux\n        s = s + ', ' + str(x1)\n    print(s)</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: <code>raiz</code> = Newton-Raphson aplicado a <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> num</mtext></mrow></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>←</mo><mi>x</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> num</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), converge cuadráticamente a <math display=\"inline\"><msqrt><mtext mathvariant=\"normal\">num</mtext></msqrt></math>; <code>raiz2</code> con criterio de tolerancia (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>x</mi><mi>n</mi></msub><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&gt;</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow></math>) y contador. ⚠ En la línea de actualización de <code>raiz2</code> el denominador es <code>2*x</code>, cuando debería ser <code>2*xn</code> (el valor nuevo); la convergencia se estropea, aunque el bucle se aproxime; recogido. La regla de <code>serie</code> depende de la <strong>paridad del índice</strong> (<code>i%2</code>), no del valor; recalculando, para <code>t1 = 7</code> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>7</mn><mo>,</mo><mn>22</mn><mo>,</mo><mn>11</mn><mo>,</mo><mn>34</mn><mo>,</mo><mn>17</mn><mo>,</mo><mn>52</mn><mo>,</mo><mn>26</mn><mo>,</mo><mn>79</mn><mo>,</mo><mn>39</mn><mo>,</mo><mn>118</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math></span> — el código y el ejemplo concuerdan (en el original las dos primeras cifras se leían mal, corregidas recalculando). Los tres factoriales son correctos (<code>while</code>, <code>for</code>, recursivo con caso base <math display=\"inline\"><mrow><mi>n</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>n</mi><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math>); la glosa roja («que se llama a sí misma») es exacta. Fibonacci correcto (<code>L = [0,1]</code>, <code>L[i] = L[i-2] + L[i-1]</code>); el intercambio con variable auxiliar de <code>mostrar_fibonacci</code> es correcto. Véase <code>koadernoa_landeta2_comput_p090.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Fibonacci recursivo (árbol de llamadas) y números primos (seudocódigo Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Fibonacci recursivo con su árbol de llamadas, y detección de números primos (el test y dos bucles de generación)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fibonacci recursivo"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def fibonacci_r(ite):\n    if ite == 0:\n        return 0\n    else:\n        if ite == 1:\n            return 1\n        else:\n            return fibonacci_r(ite-1) + fibonacci_r(ite-2)</code>"
    },
    {
     "mota": "testua",
     "html": "<strong>Árbol de llamadas</strong> para <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-text j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">                 F(4) = 3\n                /        \\\n           F(3)=2    +   F(2)=1\n          /     \\         /    \\\n    F(2)=1  +  F(1)=1  F(1)=1 + F(0)=0\n     /   \\\nF(1)=1 + F(0)=0</code>"
    },
    {
     "mota": "testua",
     "html": "Índices: <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn></mrow></math>; valores: <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn></mrow></math>. (El hecho de que <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aparezca tres veces muestra que esta versión es menos eficiente que la iterativa.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Números primos"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def esprimo(n):\n    pr = True\n    i = 2\n    while i &lt; n and pr == True:\n        if n % i == 0:\n            pr = False\n        i += 1\n    return pr\n\nfor i in range(100):        # 100 arteko lehenak\n    if esprimo(i):\n        print(i)\n\ni = 1                       # lehen 1000 lehenak\nnp = 0\nwhile np &lt; 1000:\n    if esprimo(i):\n        print(i)\n        np += 1\n    i += 1</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: recursión de <code>fibonacci_r</code> (casos base <math display=\"inline\"><mrow><mn>0</mn><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mn>1</mn><mo>→</mo><mn>1</mn></mrow></math>; caso recursivo <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>); el árbol de llamadas para <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <strong>exacto</strong> (<math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>, índices <math display=\"inline\"><mrow><mn>0</mn><mi>.</mi><mn>.4</mn></mrow></math> y valores <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn></mrow></math>; el árbol muestra la repetición de subllamadas — <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tres veces —, esta versión es menos eficiente que la iterativa de la página 91). <code>esprimo</code> correcto para <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>2</mn></mrow></math> (bandera + salida temprana). ⚠ Para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> devuelve <code>True</code> (el bucle no se ejecuta), por lo que el primer bucle (desde <math display=\"inline\"><mn>1</mn></math>) imprimiría <math display=\"inline\"><mn>0</mn></math> y <math display=\"inline\"><mn>1</mn></math> como primos — primer espurio; recogido sin corregir. Los dos bucles están bien diseñados (hasta un valor límite / hasta una cantidad de primos). La nota del examen es correcta: <code>random()</code> devuelve un número uniforme entre <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (base de Montecarlo). Véase <code>koadernoa_landeta2_comput_p092.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Suma/resta de polinomios como listas; año bisiesto (seudocódigo Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Polinomios como listas de coeficientes (suma y resta) y año bisiesto en dos versiones (condiciones anidadas y una única expresión lógica)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Suma y resta de polinomios"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def sumapoli(p1, p2):\n    if len(p2) &gt; len(p1):      # p1 luzeena izan dadin\n        aux = p1; p1 = p2; p2 = aux\n    rgt = []\n    for i in range(0, len(p2)):\n        rgt.append(p1[i] + p2[i])\n    for i in range(len(p2), len(p1)):\n        rgt.append(p1[i])\n    return rgt\n\ndef restapoli(p1, p2):\n    correccion = 1\n    if len(p2) &gt; len(p1):\n        aux = p1; p1 = p2; p2 = aux\n        correccion = -1        # trukatzean, p1-p2 lortzeko\n    rgt = []\n    for i in range(len(p2)):\n        rgt.append((p1[i] - p2[i]) * correccion)\n    for i in range(len(p2), len(p1)):\n        rgt.append(p1[i] * correccion)\n    return rgt</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Año bisiesto (condiciones anidadas)"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def es_bisiesto(num):\n    if num % 4 == 0:\n        if num % 100 != 0:\n            return True\n        else:\n            return False\n    else:\n        return False</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Año bisiesto (una única expresión lógica)"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def es_bisiesto(num):\n    if (num % 4 == 0 and num % 100 != 0) or (num % 400 == 0):\n        return True    # jatorrizkoan % 1; % 100 behar da eta 2. klausula sinplifikatu\n    else:\n        return False</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — correcciones",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<code>sumapoli</code> y <code>restapoli</code> son correctas: el intercambio inicial garantiza que <code>p1</code> sea el más largo, el primer bucle suma/resta coeficiente a coeficiente y el segundo copia la cola del más largo; en <code>restapoli</code>, el factor <code>correccion = -1</code> recupera <code>p1-p2</code> a partir de <code>p2-p1</code> si ha habido intercambio (multiplicando también la cola) — correcto. ⚠ <strong>Año bisiesto, correcciones (recogidas):</strong> (1) en la <strong>versión anidada</strong>, la rama <code>else</code> del autor (los no divisibles por 4) abre casos imposibles y usa el resto <code>if num % 400:</code> como condición (daría <code>True</code> cuando <strong>no</strong> es múltiplo de 400 — al revés); el autor la marcó con una flecha y «NO», supuestamente; aquí se ha quitado la rama sobrante (no divisible por 4 ⇒ no bisiesto). (2) en la <strong>versión compacta</strong> el original escribe <code>% 1</code> (siempre <math display=\"inline\"><mn>0</mn></math>, condición falsa): debe ser <code>% 100</code>; y la segunda cláusula <code>(% 100 == 0 and % 400 == 0)</code> se simplifica a <code>(% 400 == 0)</code> (todo múltiplo de 400 lo es de 100). Regla del calendario gregoriano: <code>(% 4 == 0 and % 100 != 0) or (% 400 == 0)</code>. Véase <code>koadernoa_landeta2_comput_p100.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Cifrado César: ord/chr y ASCII (seudocódigo Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ejercicio 2 del examen (cifrado César): las funciones <code>ord()</code> y <code>chr()</code>, la tabla ASCII, la condición para comprobar el intervalo de letras, y los ficheros de entrada/salida."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "ord / chr y ASCII"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">ord('a')   # -&gt; 97   (kodea karakteretik)\nchr(97)    # -&gt; 'a'  (karakterea kodetik)\n# ord('A') = 65,  ord('a') = 97</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Condición de intervalo de letras"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">if letra &gt;= \"A\" and letra &lt;= \"b\":   # jatorrizkoan; ikus oharra\n    ...\n# minuskulak: letra &gt;= 'a' and letra &lt;= 'z'\n# maiuskulak: letra &gt;= 'A' and letra &lt;= 'Z'</code>"
    },
    {
     "mota": "testua",
     "html": "Ficheros de entrada/salida: <code>texto.txt</code> (para cifrar), <code>texto_codificado.txt</code> (para descifrar)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — notas del examen",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<code>ord()</code>/<code>chr()</code> son funciones inversas carácter↔código ASCII: <code>chr(97) = &#x27;a&#x27;</code> es correcto; <code>ord(&#x27;A&#x27;) = 65</code>, <code>ord(&#x27;a&#x27;) = 97</code>. ⚠ <strong>El original escribe <code>97</code> junto a <code>ord(&#x27;A&#x27;)</code></strong>, pero <math display=\"inline\"><mn>97</mn></math> es el código de la <strong>minúscula</strong> <code>&#x27;a&#x27;</code> (<code>&#x27;A&#x27;</code> = 65); el hecho de escribir al lado <code>chr(97)</code>"
      },
      {
       "mota": "izenburua",
       "maila": 1,
       "testua": "a<code> sugiere que la primera línea es </code>ord(&#x27;a&#x27;)<code> ; recogido. ⚠ *Condición de</code>"
      },
      {
       "mota": "testua",
       "html": "intervalo:* para comprobar una letra minúscula hace falta <code>letra &gt;= &#x27;a&#x27; and letra &lt;= &#x27;z&#x27;</code> (o <code>&#x27;A&#x27;</code>/<code>&#x27;Z&#x27;</code> para mayúsculas); tal como está escrito (<code>&gt;= &quot;A&quot;</code> y <code>&lt;= &quot;b&quot;</code>), incluiría todos los caracteres de <math display=\"inline\"><mn>65</mn></math> a <math display=\"inline\"><mn>98</mn></math> (las mayúsculas enteras, los corchetes, y de las minúsculas solo <code>a</code> y <code>b</code>) — no limita el alfabeto; recogido (al ser notas de examen, podría ser una abreviatura). El cifrado César desplaza cada letra <math display=\"inline\"><mi>k</mi></math> posiciones módulo <math display=\"inline\"><mn>26</mn></math>, usando ord/chr y volviendo al principio al final del alfabeto; esta página recoge solo las piezas (sin bucles). Véase <code>koadernoa_landeta2_comput_p112.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "p220_mk.typ",
     "xehetasuna": "COMPUTACIÓN (landeta1), páginas 198-221, 2012/12/28-31: diccionarios en Python (histograma de palabras, hitzkop, invertir el diccionario) y ficheros (organizar, kalkopurua, organitu) — lógica comprobada; mitad de computación de páginas mixtas",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a12",
   "maila": 1,
   "izenburua": "Diccionarios en Python: histograma de palabras y <code>hitzkop</code>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Los <strong>diccionarios</strong> (<code>{ }</code>, clave <math display=\"inline\"><mo>→</mo></math> valor) se introducen como nueva estructura de datos. Primera aplicación: el <strong>histograma de palabras</strong> (frecuencia de cada palabra), y una función que devuelve las <strong>claves con un valor determinado</strong>."
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "<code>histograma()</code>: frecuencia de palabras",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Leer el fichero línea a línea, dividir en palabras, y <strong>contar</strong> en el diccionario. Por ejemplo, &quot;hola qué tal hola&quot; <math display=\"inline\"><mo>→</mo></math> <code>{hola: 2, qué: 1, tal: 1}</code>."
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def histograma():\n    f = open(\"fichero.txt\", \"r\")\n    h = {}\n    for linea in f:\n        palabras = linea.split()\n        for palabra in palabras:\n            if palabra in h:\n                h[palabra] = h[palabra] + 1\n            else:\n                h[palabra] = 1\n    return h</code>"
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "<code>hitzkop(h, n)</code>: claves con un valor determinado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Dados el histograma (<code>h</code>) y un número (<code>n</code>), devuelve la lista de <strong>palabras cuya frecuencia es <math display=\"inline\"><mi>n</mi></math></strong>:"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def hitzkop(h, n):\n    lista = []\n    for clave in h:\n        if h[clave] == n:\n            lista.append(clave)\n    return lista</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Mitad de computación</strong> de la página mixta (<code>LANDETA1_0100</code>) (p. 199, &quot;COMPUTACIÓN LANDETA&quot;). La lógica es <strong>correcta</strong>: <code>histograma</code> cuenta las frecuencias en el diccionario; <code>hitzkop</code> devuelve las claves con una frecuencia dada (usada en <code>p200</code>). La <strong>mitad de física</strong> (p. 198, deducción de la presión hidrostática <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>ρ</mi><mi>g</mi><mi>h</mi></mrow></math>) ya está en el apartado <code>p112</code>/05_01 (repetición, no duplicada). Como no hay un módulo de computación fijado, se sitúa en el apartado <code>13_03</code> (M28). Sin correcciones. Véase <code>koadernoa_landeta1_konp_p198.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Histograma de palabras e inversión del diccionario (Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Programa que hace el <strong>histograma de las palabras</strong> de un fichero (cuántas veces aparece cada palabra), y luego <strong>invierte el diccionario</strong> (asociando a cada frecuencia la lista de palabras)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Histograma"
    },
    {
     "mota": "testua",
     "html": "<strong>Especificación:</strong> abrir el fichero en modo lectura, crear un diccionario vacío, dividir el contenido en palabras, y contar cada palabra en el diccionario."
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def histograma():\n    f = open(\"texto.txt\", \"r\")\n    dic = {}\n    texto = f.read()\n    for palabra in texto.split():\n        if palabra in dic:\n            dic[palabra] = dic[palabra] + 1   # jatorrizkoan dic(palabra); zuzena: []\n        else:\n            dic[palabra] = 1\n    return dic</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Invertir el diccionario"
    },
    {
     "mota": "testua",
     "html": "A partir del histograma (<code>{palabra: frecuencia}</code>) se construye otro diccionario (<code>{frecuencia: [palabras]}</code>): a cada frecuencia se le asocia la <strong>lista</strong> de palabras que tienen esa frecuencia."
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">dic1 = histograma()\ndic2 = {}\nfor llave in dic1:\n    if dic1[llave] in dic2:\n        dic2[dic1[llave]].append(llave)\n    else:\n        dic2[dic1[llave]] = [llave]</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Correcciones y notas",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>LANDETA1_0110</code>, páginas 218-219; &quot;COMPUTACIÓN LANDETA&quot;). La lógica es <strong>correcta</strong>. ⚠ <strong>Corrección (puesta sobre la mesa):</strong> la página original escribe el acceso al diccionario con <strong>paréntesis</strong> (<code>dic(palabra)</code>); en Python hacen falta <strong>corchetes</strong> (<code>dic[palabra]</code>). Corregido en el código. Es la <strong>versión exacta</strong> del histograma de <code>0100</code>/<code>p200</code>. Como en JAKINA no hay un módulo de computación fijado, se sitúa en el apartado <code>13_03</code> (M28). Véase <code>koadernoa_landeta1_konp_p218.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Ficheros: agrupación, recuento de caracteres y búsqueda (Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Tres programas para trabajar con ficheros: <strong>agrupar las líneas según las tres primeras palabras</strong>, <strong>contar caracteres</strong> (dos versiones) y <strong>buscar una palabra</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<code>organizar2()</code>: agrupar según las tres primeras palabras"
    },
    {
     "mota": "testua",
     "html": "Leer el fichero (<code>noticias.txt</code>) <strong>línea a línea</strong>; las <strong>tres primeras palabras</strong> de cada línea son la clave, y las <strong>demás palabras</strong> la lista de valores."
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def organizar2():\n    f = open(\"noticias.txt\", \"r\")\n    dic = {}\n    for linea in f.readlines():\n        palabras = linea.split()\n        key = palabras[0] + \" \" + palabras[1] + \" \" + palabras[2]\n        dic[key] = []\n        for i in range(3, len(palabras)):\n            dic[key].append(palabras[i])\n    return dic</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<code>kalkopurua()</code>: número de caracteres (dos versiones)"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def kalkopurua():          # 1. bertsioa: begiztaz\n    f = open(\"texto.txt\", \"r\")\n    datos = f.read()\n    kop = 0\n    for karakter in datos:\n        kop = kop + 1\n    return kop\n\ndef kalkopurua():          # 2. bertsioa: len()\n    f = open(\"texto.txt\", \"r\")\n    datos = f.read()\n    return len(datos)</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<code>organitu(fich, palabra)</code>: buscar una palabra en el fichero"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def organitu(fich, palabra):\n    f = open(fich, \"r\")\n    datos = f.read()\n    palabras = datos.split()\n    if palabra in palabras:\n        return True\n    else:\n        return False</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>LANDETA1_0111</code>, páginas 220-221; &quot;COMPUTACIÓN LANDETA&quot;). La lógica es <strong>correcta</strong>: <code>organizar2</code> agrupa por las tres primeras palabras de las líneas; las dos versiones de <code>kalkopurua</code> dan el número de caracteres (con bucle y con <code>len()</code>); <code>organitu</code> comprueba si la palabra está en el fichero. Como en JAKINA no hay un módulo de computación fijado, se sitúa en el apartado <code>13_03</code> (M28). Sin correcciones. Véase <code>koadernoa_landeta1_konp_p220.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "p148_mk.typ",
     "xehetasuna": "COMPUTACIÓN (newton2), páginas 140-149, 2013/2-3: programas en Python — cálculo de precios (control de entrada), búsqueda lineal y porcentajes, caracteres prohibidos y matrices, juego de hundir la flota (random), y lee_coordenada (refactorización, isdigit); lógica comprobada",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a17",
   "maila": 1,
   "izenburua": "Cálculo del precio de sillas (Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Programa de examen: calcula el <strong>precio</strong> de un pedido de sillas según el <strong>modelo</strong> y la <strong>cantidad</strong>, con <strong>validación de la entrada</strong>."
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">numsillas = int(input(\"Introduce el número de sillas\"))\nmodelo = input(\"Introduce el modelo\")\nwhile modelo != \"AAA\" and modelo != \"ISAAA\" and modelo != \"GYAYS\":\n    modelo = input(\"Modelo no encontrado. Introduce el modelo\")\n\nif modelo == \"AAA\":\n    precio = numsillas * 35\nelif modelo == \"ISAAA\":\n    precio = numsillas * 43\nelif modelo == \"GYAYS\":\n    precio = numsillas * 54\nelse:\n    precio = numsillas * 67          # heltezina: while-k modeloa baliozkotzen du\n\nif numsillas &gt;= 4:\n    precio = precio * 0.9\nelif numsillas &gt;= 6:                 # heltezina: &gt;=4-k jada harrapatzen du\n    precio = precio * 0.85\nelif numsillas &gt;= 8:\n    precio = precio * 0.80\nelif numsillas &gt;= 10:\n    precio = precio * 0.75\n\nprint(numsillas, \"sillas del modelo\", modelo, \"cuestan\", precio)</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Correcciones y notas",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>NEWTON2_0071</code>, página 141; &quot;COMPUTACIÓN&quot;, EXAMEN). <strong>Buen ejemplo de control de entrada</strong> (el <code>while</code> obliga a un modelo válido). ⚠ <strong>Dos errores de código (puestos sobre la mesa):</strong> (1) la <strong>cadena de descuentos</strong> está en orden <strong>creciente</strong> (<code>&gt;= 4</code> primero), por lo que para cualquier cantidad mayor que <math display=\"inline\"><mn>4</mn></math> la captura <strong>la primera rama</strong> (<math display=\"inline\"><mn>0.9</mn></math>) y los demás <code>elif</code> (<code>0.85/0.80/0.75</code>) son <strong>inalcanzables</strong>; hace falta orden <strong>decreciente</strong> (<code>&gt;= 10</code> primero). (2) <code>else: precio = numsillas * 67</code> es <strong>inalcanzable</strong>, porque el <code>while</code> ya garantiza uno de los tres modelos. La estructura lógica está bien; los errores quedan señalados. Como no hay un módulo de computación fijado (M28), en el apartado <code>13_03</code>. Véase <code>koadernoa_newton2_konp_p140.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Búsqueda lineal, porcentajes y ficheros (Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cuatro programas: <strong>búsqueda lineal</strong> en un vector, buscar una <strong>lista dentro de listas de listas</strong> (empezado), <strong>porcentaje</strong> de palabras con la <strong>letra <code>e</code></strong> en un fichero, y el filtro de <strong>caracteres prohibidos</strong> (empezado, se completa en <code>p144</code>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<code>posicion(vector, elemento)</code>: búsqueda lineal"
    },
    {
     "mota": "testua",
     "html": "Devuelve el <strong>índice</strong> del elemento, o <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> si no está. Suponiendo que el vector está <strong>ordenado</strong>, <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> devuelve antes, al sobrepasar el elemento:"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def posicion(vector, elemento):\n    for i in range(len(vector)):\n        if elemento == vector[i]:\n            return i\n        elif elemento &lt; vector[i]:\n            return -1\n    return -1</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Porcentaje de palabras con la letra <code>e</code>"
    },
    {
     "mota": "testua",
     "html": "Leer un fichero, dividirlo en palabras, y calcular el <strong>porcentaje de palabras que contienen <code>e</code></strong>:"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">f = open(\"fich.txt\", \"r\")\nd = f.read()\nlista_palabras = d.split(\" \")\ncontador = 0\nfor palabra in lista_palabras:\n    if 'e' in palabra:\n        contador = contador + 1\nprint(\"El porcentaje de palabras con la letra e es:\",\n      100 * contador / len(lista_palabras))</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Otros dos programas (empezados)"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<code>esta_en_matriz(A, C)</code>: si la lista <code>A</code> está dentro de la lista de listas <code>C</code> (<math display=\"inline\"><mrow><mi>A</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> in </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>C</mi></mrow></math>). En el original queda <strong>sin completar</strong>.",
      "<strong>Caracteres prohibidos:</strong> leer del fichero de entrada, escribir en el fichero de salida las líneas sin caracteres prohibidos. Aquí se empieza (<code>open</code> r/w, contar líneas) y en <code>p144</code> se <strong>completa</strong>."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>NEWTON2_0072</code>, páginas 142-143; &quot;COMPUTACIÓN&quot;). La lógica de los dos programas completos es <strong>correcta</strong> (búsqueda lineal en ordenado; cálculo del porcentaje). <code>esta_en_matriz</code> y el programa de caracteres prohibidos están <strong>sin completar</strong> (el último continúa en <code>p144</code>). Operaciones con ficheros y cadenas por primera vez: <code>open</code>, <code>read</code>, <code>split</code>, <code>in</code>. En el apartado <code>13_03</code> (M28). Véase <code>koadernoa_newton2_konp_p142.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Cierre de los caracteres prohibidos y matrices (Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Cierre</strong> del programa de <strong>caracteres prohibidos</strong> de <code>p142</code>, y un tema nuevo: <strong>matrices mediante listas de listas</strong> (construir e imprimir)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cierre del programa de caracteres prohibidos"
    },
    {
     "mota": "testua",
     "html": "Para cada palabra, mirar si contiene los <strong>caracteres prohibidos</strong> (<code>cadena</code>); si está limpia, añadirla a la línea y escribirla en el fichero de salida:"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">    while i &lt; len(cadena) and correcta:\n        if cadena[i] in palabra:\n            correcta = False\n        i = i + 1\n    if correcta:\n        linea_w = linea_w + palabra + \" \"\n    fl.write(linea_w + \"\\n\")\n    numlinea = numlinea + 1\nfe.close()\nfl.close()</code>"
    },
    {
     "mota": "testua",
     "html": "(El tema «Caracteres permitidos» se deja <strong>para hacer en casa</strong>.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matrices mediante listas de listas"
    },
    {
     "mota": "testua",
     "html": "<strong>Construcción:</strong> matriz <math display=\"inline\"><mrow><mi>N</mi><mo>×</mo><mi>M</mi></mrow></math>, pidiendo los elementos uno a uno (<code>for i</code> / <code>for j</code> anidados; indexación <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">matriz</mtext><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>i</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>j</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">n = 4\nm = 4\nmatriz = []\nfor i in range(n):\n    fila = []\n    for j in range(m):\n        elemento = int(input(\"Introduce el elemento [\" + str(i+1) + \",\" + str(j+1) + \"]\"))\n        fila.append(elemento)\n    matriz.append(fila)\nprint(matriz)</code>"
    },
    {
     "mota": "testua",
     "html": "<strong>Impresión con formato</strong> (línea a línea):"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">for i in range(n):\n    linea = \" \"\n    for j in range(m):\n        linea = linea + str(matriz[i][j]) + \" \"\n    print(linea)</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>NEWTON2_0073</code>, páginas 144-145; &quot;COMPUTACIÓN&quot;). <strong>Completa</strong> el programa de caracteres prohibidos de <code>p142</code> (bucle interno + escritura + <code>close</code>). Las matrices se representan mediante <strong>listas de listas</strong>: construcción (<code>for i</code>/<code>for j</code> anidados, la doble indexación <code>matriz[i][j]</code> explicada con dibujos) e impresión con formato. La lógica es <strong>correcta</strong>. En el apartado <code>13_03</code> (M28). Véase <code>koadernoa_newton2_konp_p144.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Juego de hundir la flota (Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Juego de los <strong>barcos</strong>: rellenar una matriz <math display=\"inline\"><mrow><mn>10</mn><mo>×</mo><mn>10</mn></mrow></math> de <strong>ceros</strong>, colocar <strong>un barco al azar</strong> (<code>random</code>), y ejecutar un <strong>bucle de disparos</strong> validando las coordenadas, hasta tocar el barco."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Inicialización: matriz y barco aleatorio"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">import random\n\nn = 10\nm = 10\nmatriz = []\nfor i in range(n):\n    fila = []\n    for j in range(m):\n        fila.append(0)\n    matriz.append(fila)\n\nxa1 = int(random.random() * 9.9)\nya1 = int(random.random() * 9.9)\nmatriz[xa1][ya1] = 1</code>"
    },
    {
     "mota": "testua",
     "html": "<strong>Codificación de valores:</strong> <code>0</code> sin marcar, <code>1</code> barco sin marcar, <code>10</code> agua, <code>11</code> tocado."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lógica del juego: los disparos"
    },
    {
     "mota": "testua",
     "html": "Pedir las coordenadas y <strong>validarlas</strong> (de <code>1</code> a <code>10</code>; el programa les resta <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>, porque la matriz se indexa de <math display=\"inline\"><mn>0</mn></math> a <math display=\"inline\"><mn>9</mn></math>), comprobar si se ha tocado el barco, y verificar el <strong>hundimiento</strong>:"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">fin = False\nwhile fin == False:\n    coordx = int(input(\"X:\")) - 1\n    while coordx &lt; 0 or coordx &gt; 9:\n        print(\"Introduce un número del 1 al 10\")\n        coordx = int(input(\"X:\")) - 1\n    coordy = int(input(\"Y:\")) - 1\n    while coordy &lt; 0 or coordy &gt; 9:\n        print(\"Introduce un número del 1 al 10\")\n        coordy = int(input(\"Y:\")) - 1\n    if matriz[coordx][coordy] == 1:\n        matriz[coordx][coordy] = 11\n        print(\"Hundido\")\n        fin = True\n        for i in range(n):\n            for j in range(m):\n                if matriz[i][j] == 1:\n                    fin = False</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>NEWTON2_0074</code>, páginas 146-147; &quot;COMPUTACIÓN&quot;). Introducción de la <strong>aleatoriedad</strong> (<code>random.random() * 9.9</code> convertido a entero da la coordenada <math display=\"inline\"><mn>0</mn></math>–<math display=\"inline\"><mn>9</mn></math>). La clave: <strong>índice de usuario</strong> (<math display=\"inline\"><mn>1</mn></math>–<math display=\"inline\"><mn>10</mn></math>) frente a <strong>índice de programa</strong> (<math display=\"inline\"><mn>0</mn></math>–<math display=\"inline\"><mn>9</mn></math>), con la resta de <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>. Como solo hay un barco, el primer golpe lo hunde (la comprobación de hundimiento es general para más barcos). El caso del agua (<code>matriz == 0</code> o <code>10</code>) estaría en la rama <code>else</code>. La lógica es <strong>correcta</strong>. En el apartado <code>13_03</code> (M28). Véase <code>koadernoa_newton2_konp_p146.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "<code>lee_coordenada</code>: validación de coordenadas (refactorización)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En el hundir la flota anterior la validación de coordenadas se repetía <strong>dos veces</strong> (<code>x</code> e <code>y</code>). Aquí esa lógica se reúne en <strong>una sola función</strong>, que toma el <strong>mensaje como parámetro</strong>: <strong>reutilización</strong>."
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def lee_coordenada(mensaje):\n    valido = False\n    while not valido:\n        dato = input(mensaje)\n        if not dato.isdigit():\n            print(\"Debes introducir un número\")\n        else:\n            coord = int(dato) - 1\n            if coord &lt; 0 or coord &gt; 9:\n                print(\"Introduce un número del 1 al 10\")\n            else:\n                return coord</code>"
    },
    {
     "mota": "testua",
     "html": "La función hace <strong>dos validaciones</strong>: (1) si la entrada está formada <strong>solo por dígitos</strong> (<code>isdigit()</code>), y (2) si está <strong>dentro del intervalo</strong> (<math display=\"inline\"><mn>1</mn></math>–<math display=\"inline\"><mn>10</mn></math>, convertido con la resta de <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> en <math display=\"inline\"><mn>0</mn></math>–<math display=\"inline\"><mn>9</mn></math>)."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  El método <code>isdigit()</code> da una <strong>validación más robusta</strong>: <code>int()</code> <strong>fallaría</strong> directamente\n  (error) con una entrada que no sea un número; con <code>isdigit()</code> se comprueba primero.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>NEWTON2_0075</code>, página 148; &quot;COMPUTACIÓN&quot;). Buen ejemplo de <strong>reorganización del código (refactorización)</strong>: la doble validación (<code>isdigit()</code> + intervalo) en una función reutilizable. <code>isdigit()</code> aparece por primera vez. (La variable <code>valido</code> sobra —sale con <code>return</code>—, pero la lógica es correcta.) En el apartado <code>13_03</code> (M28). Sin correcciones. Véase <code>koadernoa_newton2_konp_p148.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a22",
   "maila": 1,
   "izenburua": "Contador de vocales (diccionarios) y evaluación de polinomios",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Dos algoritmos: <strong>contar las vocales</strong> de una frase con un diccionario, y la <strong>evaluación de un polinomio</strong> en varios puntos."
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Contador de vocales con diccionario",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">FRASE = input()\nDIC = {}\nfor LETRA in FRASE:\n    if LETRA in \"aeiou\":\n        if LETRA in DIC:\n            DIC[LETRA] += 1\n        else:\n            DIC[LETRA] = 1</code>"
    },
    {
     "mota": "testua",
     "html": "El <strong>diccionario</strong> (<code>DIC</code>) guarda el número de apariciones de cada letra; la clave es la letra, el valor el contador."
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Evaluación del polinomio",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Un polinomio (p. ej. <math display=\"inline\"><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>5</mn></mrow></math>) se evalúa en un <strong>conjunto de puntos</strong> (p. ej. <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>), con los coeficientes guardados en un array/vector (índices <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>LANDETA1_0072</code>, páginas 146-147; &quot;COMPU LANDETA&quot;, 2012/12/21). <strong>Mitad de computación</strong>: contador de vocales <strong>con diccionario</strong> (<code>DIC[letra] += 1</code>) y <strong>evaluación del polinomio</strong> en puntos (mediante array). La <strong>mitad de cálculo</strong> de esta página (continuidad/derivabilidad, límites laterales) va al apartado <code>04</code>. Comprobado. Sin correcciones. Véase <code>koadernoa_landeta_compu_p146.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_compu_p162_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; computación de landeta1 (algoritmos, seudocódigo)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Multiplicación, presentación y evaluación de polinomios (seudocódigo)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Tres funciones</strong> para trabajar con polinomios: multiplicación, presentación y evaluación."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Multiplicación: <code>BiderPoli(p1, p2)</code>"
    },
    {
     "mota": "testua",
     "html": "Partiendo de la lista de coeficientes vacía, con un <strong>doble bucle for</strong> se combinan los coeficientes:"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def BiderPoli(p1, p2):\n    BID = [0] * (len(p1) + len(p2) - 1)\n    for i in range(len(p1)):\n        for j in range(len(p2)):\n            BID[i + j] += p1[i] * p2[j]\n    return BID</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Presentación y evaluación"
    },
    {
     "mota": "testua",
     "html": "<code>MostrarPoli(p)</code>: muestra la lista de coeficientes (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>) como una <strong>cadena</strong> («<math display=\"inline\"><mrow><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>9</mn></mrow></math>»), cuidando los <strong>casos especiales</strong> (no mostrar el coeficiente <math display=\"inline\"><mn>0</mn></math>)."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Evaluación: por el método de <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mi>m</mi><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msup><mi>x</mi><mi>k</mi></msup></mrow></math>, se suma multiplicando cada coeficiente por la potencia correspondiente.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>LANDETA1_0080</code>, páginas 162-163; &quot;COMPU LANDETA&quot;, 2012/12/24). Tres funciones de <strong>polinomios</strong>: <strong>multiplicación</strong> (<code>BiderPoli</code>, doble for), <strong>presentación</strong> (<code>MostrarPoli</code>, mediante cadena, cuidando el coeficiente <math display=\"inline\"><mn>0</mn></math>) y <strong>evaluación</strong> (<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mi>m</mi><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>k</mi></msup></mrow></math>). Comprobado. Sin correcciones. Véase <code>koadernoa_landeta_compu_p162.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_compu_p164_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; computación de landeta1 (algoritmos, seudocódigo)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Comparar frases y trabajar con ficheros",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Dos algoritmos: <strong>comparar palabra por palabra</strong> dos frases y trabajar con <strong>ficheros</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Comparar frases"
    },
    {
     "mota": "testua",
     "html": "Dividir las frases en listas de palabras con <code>split()</code>, y contar las apariciones de una palabra con <strong>bucles anidados</strong>:"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">LFRASE = FRASE.split()\nLBUS = BUS.split()\nkont = 0\nfor PALABRA in LBUS:\n    for j in LFRASE:\n        if PALABRA == j:\n            kont += 1\nportzentaia = 100 * kont / len(LFRASE)</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Trabajar con ficheros"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Modos de fichero: <code>open(&quot;...&quot;, &quot;r&quot;)</code> <strong>leer</strong>, <code>&quot;w&quot;</code> <strong>escribir</strong> (sobrescribir), <code>&quot;a&quot;</code> <strong>añadir</strong>. Ejemplo:\n  leer un fichero línea a línea (<code>f.read()</code>, <code>append</code> a una lista), cerrar (<code>f.close()</code>), y en otro\n  en modo <code>write</code> escribir cada elemento con un bucle.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>LANDETA1_0081</code>, páginas 164-165; &quot;COMPUTACIÓN LANDETA&quot;, 2012/12/24). <strong>Comparar frases</strong> (<code>split()</code>, bucles anidados, recuento de apariciones y porcentaje) y <strong>trabajar con ficheros</strong> (modos de <code>open</code> <code>r</code>/<code>w</code>/<code>a</code>; leer/escribir línea a línea, <code>read</code>/<code>write</code>/<code>append</code>/<code>close</code>). Comprobado. Sin correcciones. Véase <code>koadernoa_landeta_compu_p164.typ</code>."
      }
     ]
    },
    {
     "mota": "hutsunea",
     "izenburua": "Programación: corpus teórico",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este módulo solo tiene por ahora fuentes manuscritas (las páginas de computación de landeta2). Faltan: estructuras de datos, fundamentos de complejidad y cálculo numérico de cara a la física (métodos numéricos, enlazado con M20). Las páginas de computación de otros cuadernos (landeta1 0110-0111, newton2 0070-0075) vendrán aquí conforme se transcriban."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_compu_p146_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; computación de landeta1 (algoritmos, seudocódigo)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a27",
   "maila": 1,
   "izenburua": "Atlas visual de programación y algoritmos",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Aportación editorial independiente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estos diagramas de flujo, árboles y figuras de estados hacen visible el flujo de control del código. El seudocódigo y las correcciones de los cuadernos se mantienen íntegros."
      }
     ]
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "Cambio de base, recursión e iteración",
   "blokeak": [
    {
     "mota": "irudia",
     "oina": "editoriala([Para convertir de decimal a binario, se van apilando los restos de las divisiones por dos y se leen al revés.])",
     "src": "../media/irudiak/5004f8e7660b7f32.svg",
     "zabalera": 278
    },
    {
     "mota": "irudia",
     "oina": "editoriala([El árbol de recursión de Fibonacci muestra que los mismos subproblemas se calculan una y otra vez; la memoización elimina la duplicación.])",
     "src": "../media/irudiak/9ec8bd1046f0ee23.svg",
     "zabalera": 312
    },
    {
     "mota": "irudia",
     "oina": "editoriala([El método de Newton usa el cero de la recta tangente en el punto actual para construir la siguiente aproximación.])",
     "src": "../media/irudiak/95e03c4a95d07012.svg",
     "zabalera": 264
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Decisiones, estructuras de datos y estados",
   "blokeak": [
    {
     "mota": "irudia",
     "oina": "editoriala([El árbol de decisión del año bisiesto muestra la prioridad de las condiciones: las pruebas de divisibilidad por 400, 100 y 4 no pueden evaluarse sin orden.])",
     "src": "../media/irudiak/a3b9ee5053f07163.svg",
     "zabalera": 301
    },
    {
     "mota": "irudia",
     "oina": "editoriala([Invertir el diccionario asocia cada valor con la lista de claves que lo tenían; el histograma y los mapas de frecuencias usan la misma estructura.])",
     "src": "../media/irudiak/d5fca53dd30dc78b.svg",
     "zabalera": 284
    },
    {
     "mota": "irudia",
     "oina": "editoriala([En hundir la flota la cuadrícula es una estructura de datos y la jugada una máquina de estados: leer la coordenada, validarla y actualizar la tabla.])",
     "src": "../media/irudiak/f1e2004a9ab5aa6a.svg",
     "zabalera": 332
    }
   ]
  }
 ]
};
