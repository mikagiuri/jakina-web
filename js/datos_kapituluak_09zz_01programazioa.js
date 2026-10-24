/* JAKINA · kapitulua «B10.3 - M28 Programazioa eta algoritmoak» (09zz_01programazioa), desde edicion2/kapituluak/09zz_01programazioa/09zz_01programazioa.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["09zz_01programazioa"] = {
 "gakoa": "09zz_01programazioa",
 "titulua": "JAKINA - B10.3 - M28 Programazioa eta algoritmoak",
 "azala": "B10.3 - M28 Programazioa eta algoritmoak",
 "azpititulua": "IV. aroa - TRESNAK",
 "iturburua": "kapituluak/09zz_01programazioa/09zz_01programazioa.typ",
 "sarrera": [
  {
   "mota": "modulua",
   "kodea": "M28",
   "izenburua": "Programazioa eta algoritmoak",
   "maila": "TRESNAK"
  },
  {
   "mota": "helburuak",
   "elementuak": [
    "Oinarrizko algoritmoak sasikodean/Pythonen irakurri eta idatzi.",
    "Zenbaki-teoriako algoritmo klasikoak inplementatu (zatitzaileak, lehenak, oinarri-aldaketa).",
    "Kateen gaineko prozesamendu sinplea egin."
   ]
  },
  {
   "mota": "aurrebaldintzak",
   "elementuak": [
    "M03 — Zenbaki naturalak eta indukzioa"
   ]
  },
  {
   "mota": "oharra",
   "titulua": "Modulu berria (2026-07-30)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Modulu hau erabiltzailearen erabakiz sortu da, landeta2 koadernoko KONPUTAZIOA orrialdeek JAKINAn hartzailerik ez zutelako. Zenbakia (<code>M28</code>) azkena da nahita: ez da lehendik dagoen numeraziorik berrantolatu, erreferentziak ez hausteko. Oraingoz eskuzko iturriz osatuta dago; teoria-corpus propioa gerora eransteko dago."
    }
   ]
  },
  {
   "mota": "iturria",
   "proiektua": "diario landeta 2 ene 2013, IMG_2026_07_28_01_43_34S.jpg eta IMG_2026_07_28_01_43_40S.jpg (ezker orria)",
   "xehetasuna": "KONPUTAZIOA LANDETA (landeta2), 34.-36. orrialdeak, 2013/01/04 (azterketa): zenbaki adiskideak eta zatitzaileak, lehentasun-testa, lehenen batura, hamartar→bitar bihurketa, eta kateetako hitzen agerpen-portzentajea — v3 transkripzio literalak, algoritmoak egiaztatuta",
   "hizkuntza": "es"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Zenbaki adiskideak, lehenak eta hamartar→bitar bihurketa (Python sasikodea)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Azterketa-kodea Python-antzeko sasikodean: zatitzaileen batura eta zenbaki adiskideak, zenbaki lehenak, eta hamartarra bitarrera bihurtzea zatiketa hurrenkeraz."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Zenbaki adiskideak",
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
   "izenburua": "Zenbaki lehenak",
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
   "izenburua": "Hamartarra → bitarra (zatiketa hurrenkerak)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Eskuzko adibideak: <math display=\"inline\"><mrow><mn>7</mn><mo>→</mo><mn>111</mn></mrow></math>, <math display=\"inline\"><mrow><mn>6</mn><mo>→</mo><mn>110</mn></mrow></math> (zatiketa hurrenkerak <math display=\"inline\"><mn>2</mn></math>-z, hondarrak alderantziz irakurrita)."
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def convierte(n):\n    s = ''\n    while n &gt; 0:\n        s = str(n % 2) + s\n        n = n // 2\n    return s\n\nnum = int(input(\"Sartu zenbaki oso positibo bat\"))\nif num &lt;= 0:\n    print(\"Zenbakia ez da positiboa\")\nelse:\n    print(num, \"--&gt;\", convierte(num))</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — zuzenketak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kodea zuzen jasota. ⚠ <strong>Zuzenketak (mahairatuak):</strong> (1) <code>sumadivisores</code>-en <code>suma = suma + 1</code> zatitzaileak <strong>zenbatzen</strong> ditu, ez batzen — zenbaki adiskideentzat (bakoitza bestearen zatitzaile propioen baturaren berdina) <code>suma = suma + i</code> behar da; hala idatzita, <code>sonamigos</code>-ek zenbaketak konparatuko lituzke eta emaitza okerrak emango (adib. 220 eta 284 <strong>ez</strong> lirateke adiskide aterako). Berdin <code>sumaprimos</code>-en (<code>+ 1</code> lehenak zenbatzen ditu; errotulu gorriak «suma» eskatzen du). Jatorrizkoan egilearen «1» grafiaren (<math display=\"inline\"><mi mathvariant=\"normal\">Λ</mi></math>) eta «i»-ren antzekotasunagatik, «+ i» ere izan liteke; kapa literalean visible dena gorde da. (2) <code>esprimo</code>-k <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> (eta <math display=\"inline\"><mn>0</mn></math>) <code>True</code> ematen du, <math display=\"inline\"><mn>1</mn></math> lehena ez den arren; <code>sumaprimos</code>-en <code>range(1, n+1)</code>-ekin <math display=\"inline\"><mn>1</mn></math> espurio hori sartuko litzateke. Bihurketa bitarra <strong>zuzena</strong> da (adibideak <math display=\"inline\"><mrow><mn>7</mn><mo>→</mo><mn>111</mn></mrow></math>, <math display=\"inline\"><mrow><mn>6</mn><mo>→</mo><mn>110</mn></mrow></math> zuzenak; <code>convierte</code> algoritmo bera). <strong>Iturri berria:</strong> «COMPUTACIÓN LANDETA» azterketa (ez dago konputazio-modulu finkatu bat JAKINAn). Ikus"
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
   "izenburua": "Hitzen agerpen-portzentajea bilaketa batean (Python sasikodea)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bilaketa-kate bateko hitzak erreferentzia-kate batekin konparatu eta bakoitzaren agerpen-portzentajea kalkulatzen duen programa."
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">busqueda = input(\"Sartu bilaketa-katea\")\ncadena   = input(\"Sartu erreferentzia-katea\")\nlbus    = busqueda.split()\nlcadena = cadena.split()\ntamano  = len(lcadena)\nfor pbus in lbus:\n    por = 0\n    for pcad in lcadena:\n        if pbus == pcad:\n            por = por + 1\n    print(\"«\", pbus, \"» hitza agertzen da\", 100*por/tamano, \"%\")</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — Python errealeko xehetasunak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Programaren logika zuzena da sasikode gisa: bilaketako hitz bakoitzaren agerpenak erreferentzian zenbatu eta portzentaje gisa adierazi (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tamaño </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo></mrow></math> erreferentziako hitz-kopurua). ⚠ <strong>Python errealean huts egingo luketen xehetasunak:</strong> (1) jatorrizkoak <code>BÚSQUEDA</code> deklaratzen du baina <code>BUS.SPLIT()</code> erabiltzen — <strong>izen inkoherentzia</strong> (hemen <code>busqueda</code>-rekin bateratua); (2) <code>print</code> barne-begiztatik <strong>kanpo</strong> dago (kanpoko <code>for</code>-aren barnean), beraz bilaketako hitz bakoitzeko lerro bat inprimatzen du — helburuarekin koherentea; (3) Python 2-n <code>100*por/tamano</code> zatiketa osoa litzateke. Jasota zuzendu gabe kapa literalean. Azken lerroa ertzak moztuta zegoen jatorrizkoan (formatu zehatza ezin finkatu). Nota berde bat («PRESIÓN <math display=\"inline\"><mrow><mi>d</mi><mi>/</mi><mi>d</mi><mi>x</mi></mrow></math>») programarekin loturarik gabekoa dirudi. Ikus"
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
     "xehetasuna": "KONPUTAZIOA (landeta2), 68.-69. eta 82.-83. orrialdeak, 2013/01/14-17: fitxategiak (r/w/a), bokalen zenbaketa hiztegiz, zatitzaileen zerrenda, SCILAB, fitxategien lerroak txandakatzea eta zenbakia asmatzeko jokoa (random) — v3 transkripzio literalak",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Fitxategiak, hiztegiak, zerrendak eta Scilab (Python sasikodea)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Fitxategiekin lan egitea (ireki-moduak), bokalak zenbatzeko programa hiztegi batekin, zatitzaileen zerrenda, eta Scilab-en lehen aginduak."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ireki-moduak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -r (read): irakurri</mtext></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -w (write): gainidatzi</mtext></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -a (append): amaieran idatzi. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bokalak zenbatzea (hiztegia)"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def vocales(nombre):\n    f = open(nombre, \"r\")\n    linea = f.readline()\n    dic = {}                 # jatorrizkoan [ ]; hiztegia behar da\n    while linea != \"\":       # jatorrizkoan \" \"; hutsa \"\" behar da\n        for letra in linea:\n            if letra == 'a' or letra == 'e' or ...:   # (etc.)\n                if letra in dic:\n                    dic[letra] += 1\n                else:\n                    dic[letra] = 1\n        linea = f.readline()\n    return dic\n\nnombre = input(\"Sartu fitxategiaren izena: \")\ndiccionario = vocales(nombre)\nfor elemento in diccionario:\n    print(\"«\", elemento, \"» bokala agertzen da\", diccionario[elemento], \"aldiz\")\nprint(\"Fitxategiak\", len(diccionario), \"bokal ditu\")</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Zatitzaileen zerrenda"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def lista_divisores(num):\n    l = []\n    for i in range(1, num):    # zenbakia bera sartzeko: range(1, num+1)\n        if num % i == 0:\n            l.append(i)\n    return l\n\nnumero = int(input(\"Sartu zenbaki bat: \"))\nlis = lista_divisores(numero)\nprint(lis)\nprint(lis[2])                  # hirugarren zatitzailea (indizeak 0-tik)</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Scilab (lehen aginduak)"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-scilab j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">x = 1:100    // 1..100 osoen bektorea\ny = x        // kopia\nplot(x, y)   // y = x zuzena marraztu</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — Python errealeko xehetasunak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Algoritmoak zuzenak dira sasikode gisa. ⚠ <strong>Python errealean huts egingo luketen xehetasunak (jasota):</strong> (1) <code>dic = [ ]</code> zerrenda sortzen du; letraz indexatzeko <code>{}</code> (hiztegia) behar da; (2) gelditze-baldintza <code>while linea != &quot; &quot;</code> zuriunearekin konparatzen du, fitxategi-amaierak kate hutsa <code>&quot;&quot;</code> itzultzen duenean; (3) <code>(etc.)</code> eta letra xeheak egileak laburtu zuela adierazten dute; (4) <code>range(1, numero)</code>-k <math display=\"inline\"><mrow><mn>1</mn><mi>.</mi><mi>.</mi></mrow></math>numero<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> zeharkatzen du, beraz zenbakia bera <strong>ez</strong> da bere zatitzaileen artean agertzen (<code>range(1, numero+1)</code> beharko luke). <code>lis[2]</code> hirugarren zatitzailea da (indizeak <math display=\"inline\"><mn>0</mn></math>-tik). Scilab: <code>x = 1:100</code>, <code>y = x</code>, <code>plot</code> zuzenak (Scilab-en <code>plot(x,y)</code> litzateke). <strong>Iturri berria:</strong> «COMPUTACIÓN» (goiburuan irakaslerik gabe, 34-36. orrietan ez bezala); M28 modulura doa. Ikus <code>koadernoa_landeta2_comput_p068.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Bitarra, bi fitxategiren txandakatzea eta asmatzeko jokoa (Python sasikodea)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hiru programa: hamartar→bitar bihurketa, bi fitxategiren lerroak txandaka hirugarren batean, eta zenbaki aleatorioa asmatzeko jokoa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bitarrera bihurtzea"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def convertir(n):\n    s = ''             # jatorrizkoan ' ' (zuriunea); '' behar da\n    while n != 0:\n        s = str(n % 2) + s\n        n = n // 2\n    return s\nprint(convertir(n))</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bi fitxategiren lerroak txandakatzea"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">f1 = open(\"fich.txt\", \"r\")\nf2 = open(\"fich2.txt\", \"r\")\nlinea1 = f1.readline()\nlinea2 = f2.readline()\nf3 = open(\"destino.txt\", \"w\")     # jatorrizkoan OPEN falta\n\nwhile linea1 != \"\" and linea2 != \"\":\n    f3.write(linea1)\n    f3.write(linea2)\n    linea1 = f1.readline()\n    linea2 = f2.readline()\n\nwhile linea1 != \"\":               # f1-eko soberakina\n    f3.write(linea1)\n    linea1 = f1.readline()\nwhile linea2 != \"\":               # f2-eko soberakina\n    f3.write(linea2)\n    linea2 = f2.readline()\nf3.close()</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Asmatzeko jokoa"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">import random\nnum = int(100 * random.random())\ncont = 1\nprint(\"Zenbaki bat pentsatu dut, asmatu ezazu\")\nop = int(input(\"Sartu zure erantzuna: \"))\nwhile op != num:\n    print(\"Zenbaki okerra\")\n    cont = cont + 1\n    if op &gt; num:\n        print(\"Zenbaki txikiago bat pentsatu dut\")\n    else:\n        print(\"Zenbaki handiago bat pentsatu dut\")\n    op = int(input(\"Sartu zure erantzuna: \"))\nprint(\"Zuzena!\")\nprint(\"\", cont, \"saiakera erabili dituzu\")</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — Python errealeko xehetasunak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Algoritmoak zuzenak dira. ⚠ <strong>Xehetasunak (jasota):</strong> (1) <code>convertir</code>-en <code>s = &#x27; &#x27;</code> zuriunez hasten da (<code>&#x27;&#x27;</code> behar du, bestela zuriune bat geratuko litzateke aurrean); (2) txandakatzean fitxategi-amaieraren baldintza <code>!= &quot; &quot;</code> (zuriunea) da, <code>!= &quot;&quot;</code> (hutsa) beharrean; (3) <code>f3</code>-ren esleipenean <code>open</code> falta da jatorrizkoan; (4) moduak maiuskula/minuskula nahasita (&quot;r&quot;/&quot;R&quot;). Txandakatze-algoritmoa zuzena: begizta bateratua biek lerroak dituzten bitartean, gero bi begizta luzeenaren soberakina isurtzeko, <code>close()</code> amaieran. Asmatzeko jokoa zuzena (pistak ondo alderantzikatuta — erantzuna handiagoa bada, pentsatutakoa txikiagoa —, <code>cont</code> <math display=\"inline\"><mn>1</mn></math>-etik hasi eta huts bakoitzean gehituz, saiakera guztiak islatuz; <code>random</code> moduluak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>99</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> arteko zenbakia sortzen du). <code>print(convertir(S))</code>-n argumentua <code>S</code> irakurtzen da, zenbaki bat izan behar duena; jasota. Ikus"
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
   "izenburua": "Newton-en metodoa, serieak, faktorialak eta Fibonacci (Python sasikodea)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bost programa: erro karratua Newton-en metodoz (iterazio finkoduna eta tolerantziaduna), serie txandakatua, faktoriala hiru bertsiotan, eta Fibonacci."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Erro karratua Newton-en metodoz"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def raiz(num, ite):\n    x = 1\n    for i in range(ite):\n        x = x - ((x**2) - num) / (2*x)\n    return x\nprint(raiz(27, 10))   # adibidea\n\ndef raiz2(num):\n    x = 1\n    xn = x - ((x**2) - num) / (2*x)\n    cont = 1\n    while abs(xn - x) &gt; 0.000001:\n        x = xn\n        xn = xn - ((xn**2) - num) / (2*xn)   # jatorrizkoan 2*x\n        cont += 1\n    print(cont)\n    return xn</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Serie bikoiti/bakoitien arabera"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def serie(t1, ite):\n    l = [t1]\n    for i in range(1, ite):\n        if i % 2 == 0:\n            l.append(l[i-1] // 2)\n        else:\n            l.append((l[i-1] * 3) + 1)\n    return l\n# t1=7: [7, 22, 11, 34, 17, 52, 26, 79, 39, 118]</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Faktoriala (hiru bertsio)"
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
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: <code>raiz</code> = Newton-Raphson <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> num</mtext></mrow></mrow></math>-ri aplikatua (<math display=\"inline\"><mrow><mi>x</mi><mo>←</mo><mi>x</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> num</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), koadratikoki konbergitzen du <math display=\"inline\"><msqrt><mtext mathvariant=\"normal\">num</mtext></msqrt></math>-ra; <code>raiz2</code> tolerantzia-irizpidearekin (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>x</mi><mi>n</mi></msub><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&gt;</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow></math>) eta kontagailuarekin. ⚠ <code>raiz2</code>-ren eguneratze-lerroan izendatzailea <code>2*x</code> da, <code>2*xn</code> izan behar duenean (balio berria); konbergentzia hondatzen da, begiztak hurbildu arren; jasota. <code>serie</code>-ren araua <strong>indizearen paritatearen</strong> mende dago (<code>i%2</code>), ez balioaren; birkalkuluz <code>t1 = 7</code>-rako <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>7</mn><mo>,</mo><mn>22</mn><mo>,</mo><mn>11</mn><mo>,</mo><mn>34</mn><mo>,</mo><mn>17</mn><mo>,</mo><mn>52</mn><mo>,</mo><mn>26</mn><mo>,</mo><mn>79</mn><mo>,</mo><mn>39</mn><mo>,</mo><mn>118</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math></span> — kodea eta adibidea bat datoz (jatorrizkoan lehen bi zifrak gaizki irakurtzen ziren, birkalkuluz zuzenduak). Hiru faktorialak zuzenak (<code>while</code>, <code>for</code>, errekurtsiboa oinarri-kasu <math display=\"inline\"><mrow><mi>n</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>n</mi><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math>); glosa gorria («bere buruari deitzen diona») zehatza. Fibonacci zuzena (<code>L = [0,1]</code>, <code>L[i] = L[i-2] + L[i-1]</code>); <code>mostrar_fibonacci</code>-ren aldagai laguntzailedun trukea zuzena. Ikus <code>koadernoa_landeta2_comput_p090.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Fibonacci errekurtsiboa (deien zuhaitza) eta zenbaki lehenak (Python sasikodea)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Fibonacci errekurtsiboa bere deien zuhaitzarekin, eta zenbaki lehenen detekzioa (test-a eta bi sorkuntza-begizta)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fibonacci errekurtsiboa"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def fibonacci_r(ite):\n    if ite == 0:\n        return 0\n    else:\n        if ite == 1:\n            return 1\n        else:\n            return fibonacci_r(ite-1) + fibonacci_r(ite-2)</code>"
    },
    {
     "mota": "testua",
     "html": "<strong>Deien zuhaitza</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rako:"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-text j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">                 F(4) = 3\n                /        \\\n           F(3)=2    +   F(2)=1\n          /     \\         /    \\\n    F(2)=1  +  F(1)=1  F(1)=1 + F(0)=0\n     /   \\\nF(1)=1 + F(0)=0</code>"
    },
    {
     "mota": "testua",
     "html": "Indizeak: <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn></mrow></math>; balioak: <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn></mrow></math>. (<math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hiru aldiz agertzeak bertsio hau iteratiboa baino eraginkortasun txikiagokoa dela erakusten du.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Zenbaki lehenak"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def esprimo(n):\n    pr = True\n    i = 2\n    while i &lt; n and pr == True:\n        if n % i == 0:\n            pr = False\n        i += 1\n    return pr\n\nfor i in range(100):        # 100 arteko lehenak\n    if esprimo(i):\n        print(i)\n\ni = 1                       # lehen 1000 lehenak\nnp = 0\nwhile np &lt; 1000:\n    if esprimo(i):\n        print(i)\n        np += 1\n    i += 1</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: <code>fibonacci_r</code> errekurtsioa (oinarri-kasuak <math display=\"inline\"><mrow><mn>0</mn><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mn>1</mn><mo>→</mo><mn>1</mn></mrow></math>; errekurtsio-kasua <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>); deien zuhaitza <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rako <strong>zehatza</strong> (<math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>, indizeak <math display=\"inline\"><mrow><mn>0</mn><mi>.</mi><mn>.4</mn></mrow></math> eta balioak <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn></mrow></math>; zuhaitzak azpi-deien errepikapena erakusten du — <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hiru aldiz —, bertsio hau 91. orriko iteratiboa baino eraginkortasun txikiagokoa). <code>esprimo</code> zuzena <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>2</mn></mrow></math>-rako (bandera + irteera goiztiarra). ⚠ <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>-erako <code>True</code> ematen du (begizta ez da exekutatzen), beraz lehen begiztak (<math display=\"inline\"><mn>1</mn></math>-etik) <math display=\"inline\"><mn>0</mn></math> eta <math display=\"inline\"><mn>1</mn></math> lehentzat inprimatuko lituzke — lehen espurioa; jasota zuzendu gabe. Bi begiztak ondo diseinatuak (balio-mugaraino / lehen-kopururaino). Azterketa-oharra zuzena: <code>random()</code>-k <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> arteko zenbaki uniforme bat itzultzen du (Montecarlo-ren oinarria). Ikus <code>koadernoa_landeta2_comput_p092.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Polinomioen batuketa/kenketa zerrenda gisa; urte bisustua (Python sasikodea)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Polinomioak koefiziente-zerrenda gisa (batuketa eta kenketa) eta urte bisustua bi bertsiotan (baldintza habiaratuak eta adierazpen logiko bakarra)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Polinomioen batuketa eta kenketa"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def sumapoli(p1, p2):\n    if len(p2) &gt; len(p1):      # p1 luzeena izan dadin\n        aux = p1; p1 = p2; p2 = aux\n    rgt = []\n    for i in range(0, len(p2)):\n        rgt.append(p1[i] + p2[i])\n    for i in range(len(p2), len(p1)):\n        rgt.append(p1[i])\n    return rgt\n\ndef restapoli(p1, p2):\n    correccion = 1\n    if len(p2) &gt; len(p1):\n        aux = p1; p1 = p2; p2 = aux\n        correccion = -1        # trukatzean, p1-p2 lortzeko\n    rgt = []\n    for i in range(len(p2)):\n        rgt.append((p1[i] - p2[i]) * correccion)\n    for i in range(len(p2), len(p1)):\n        rgt.append(p1[i] * correccion)\n    return rgt</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Urte bisustua (baldintza habiaratuak)"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def es_bisiesto(num):\n    if num % 4 == 0:\n        if num % 100 != 0:\n            return True\n        else:\n            return False\n    else:\n        return False</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Urte bisustua (adierazpen logiko bakarra)"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def es_bisiesto(num):\n    if (num % 4 == 0 and num % 100 != 0) or (num % 400 == 0):\n        return True    # jatorrizkoan % 1; % 100 behar da eta 2. klausula sinplifikatu\n    else:\n        return False</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — zuzenketak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<code>sumapoli</code> eta <code>restapoli</code> zuzenak: hasierako trukeak <code>p1</code> luzeena bermatzen du, lehen begiztak koefizientez koefiziente batzen/kentzen du eta bigarrenak luzeenaren isatsa kopiatzen; <code>restapoli</code>-n <code>correccion = -1</code> faktoreak, trukea egon bada, <code>p2-p1</code>-etik <code>p1-p2</code> berreskuratzen du (isatsa ere biderkatuta) — zuzena. ⚠ <strong>Urte bisustua, zuzenketak (jasota):</strong> (1) <strong>bertsio habiaratuan</strong> egilearen <code>else</code> adarrak (4-z zatigarri ez direnak) kasu ezinezkoak irekitzen ditu eta <code>if num % 400:</code> hondarra baldintza gisa erabiltzen du (400-en multiploa <strong>ez</strong> denean <code>True</code> emango luke — alderantziz); egileak flecha eta «NO»-rekin markatu zuen ustez; hemen adar soberakina kendu da (4-z zatigarri ez ⇒ ez bisustua). (2) <strong>bertsio konpaktuan</strong> jatorrizkoak <code>% 1</code> idazten du (beti <math display=\"inline\"><mn>0</mn></math>, baldintza faltsua): <code>% 100</code> behar da; eta bigarren klausula <code>(% 100 == 0 and % 400 == 0)</code> <code>(% 400 == 0)</code>-ra sinplifikatzen da (400-en multiplo oro 100-ena da). Egutegi gregoriarraren araua: <code>(% 4 == 0 and % 100 != 0) or (% 400 == 0)</code>. Ikus <code>koadernoa_landeta2_comput_p100.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Cesar zifraketa: ord/chr eta ASCII (Python sasikodea)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Azterketaren 2. ariketa (Cesar zifraketa): <code>ord()</code> eta <code>chr()</code> funtzioak, ASCII taula, letra-tartea egiaztatzeko baldintza, eta sarrera/irteera fitxategiak."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "ord / chr eta ASCII"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">ord('a')   # -&gt; 97   (kodea karakteretik)\nchr(97)    # -&gt; 'a'  (karakterea kodetik)\n# ord('A') = 65,  ord('a') = 97</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Letra-tartearen baldintza"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">if letra &gt;= \"A\" and letra &lt;= \"b\":   # jatorrizkoan; ikus oharra\n    ...\n# minuskulak: letra &gt;= 'a' and letra &lt;= 'z'\n# maiuskulak: letra &gt;= 'A' and letra &lt;= 'Z'</code>"
    },
    {
     "mota": "testua",
     "html": "Sarrera/irteera fitxategiak: <code>texto.txt</code> (zifratzeko), <code>texto_codificado.txt</code> (deszifratzeko)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — azterketa-oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<code>ord()</code>/<code>chr()</code> karaktere↔ASCII-kode funtzio alderantzizkoak dira: <code>chr(97) = &#x27;a&#x27;</code> zuzena; <code>ord(&#x27;A&#x27;) = 65</code>, <code>ord(&#x27;a&#x27;) = 97</code>. ⚠ <strong>Jatorrizkoak <code>ord(&#x27;A&#x27;)</code> ondoan <code>97</code> idazten du</strong>, baina <math display=\"inline\"><mn>97</mn></math> <code>&#x27;a&#x27;</code> <strong>minuskularen</strong> kodea da (<code>&#x27;A&#x27;</code> = 65); ondoan <code>chr(97)</code>"
      },
      {
       "mota": "izenburua",
       "maila": 1,
       "testua": "a<code> idazteak iradokitzen du lehen lerroa </code>ord(&#x27;a&#x27;)<code> dela; jasota. ⚠ *Tarte-</code>"
      },
      {
       "mota": "testua",
       "html": "baldintza:* letra minuskula bat egiaztatzeko <code>letra &gt;= &#x27;a&#x27; and letra &lt;= &#x27;z&#x27;</code> behar da (edo <code>&#x27;A&#x27;</code>/<code>&#x27;Z&#x27;</code> maiuskuletarako); idatzita dagoen bezala (<code>&gt;= &quot;A&quot;</code> eta <code>&lt;= &quot;b&quot;</code>), <math display=\"inline\"><mn>65</mn></math>-tik <math display=\"inline\"><mn>98</mn></math>-ra arteko karaktere guztiak sartuko lituzke (maiuskula osoak, kortxeteak, eta minuskuletatik <code>a</code> eta <code>b</code> bakarrik) — ez du alfabetoa mugatzen; jasota (azterketa-oharrak direnez, laburtzapena izan liteke). Cesar zifraketak letra bakoitza <math display=\"inline\"><mi>k</mi></math> posizio lekualdatzen du <math display=\"inline\"><mn>26</mn></math> modulu, ord/chr erabiliz eta alfabetoaren amaieran hasierara itzuliz; orri honek piezak bakarrik jasotzen ditu (begiztarik gabe). Ikus <code>koadernoa_landeta2_comput_p112.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "p220_mk.typ",
     "xehetasuna": "KONPUTAZIOA (landeta1), 198-221 orrialdeak, 2012/12/28-31: hiztegiak Python-en (hitz-histograma, hitzkop, hiztegia alderantzikatzea) eta fitxategiak (organizar, kalkopurua, organitu) — logika egiaztatua; orri mistoen konputazio erdiak",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a12",
   "maila": 1,
   "izenburua": "Hiztegiak Python-en: hitz-histograma eta <code>hitzkop</code>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Hiztegiak</strong> (<code>{ }</code>, giltza <math display=\"inline\"><mo>→</mo></math> balio) sartzen dira datu-egitura berri gisa. Lehen aplikazioa: <strong>hitz-histograma</strong> (hitz bakoitzaren maiztasuna), eta <strong>balio jakin bat duten giltzak</strong> itzultzeko funtzioa."
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "<code>histograma()</code>: hitzen maiztasuna",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Fitxategia lerroz lerro irakurri, hitzetan banatu, eta hiztegian <strong>kontatu</strong>. Adibidez, &quot;hola qué tal hola&quot; <math display=\"inline\"><mo>→</mo></math> <code>{hola: 2, qué: 1, tal: 1}</code>."
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
   "izenburua": "<code>hitzkop(h, n)</code>: balio jakin bat duten giltzak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Histograma (<code>h</code>) eta zenbaki bat (<code>n</code>) emanik, <strong>maiztasuna <math display=\"inline\"><mi>n</mi></math> duten hitzen</strong> zerrenda itzultzen du:"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def hitzkop(h, n):\n    lista = []\n    for clave in h:\n        if h[clave] == n:\n            lista.append(clave)\n    return lista</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Orri mistoaren (<code>LANDETA1_0100</code>) <strong>konputazio erdia</strong> (p.199, &quot;COMPUTACIÓN LANDETA&quot;). Logika <strong>zuzena</strong> da: <code>histograma</code>-k maiztasunak zenbatzen ditu hiztegian; <code>hitzkop</code>-ek maiztasun jakin bat duten giltzak itzultzen ditu (<code>p200</code>-n erabilia). <strong>Fisika erdia</strong> (p.198, presio hidrostatikoaren dedukzioa <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>ρ</mi><mi>g</mi><mi>h</mi></mrow></math>) <code>p112</code>/05_01 atalean dago jada (errepikapena, ez da bikoiztu). Konputazio-modulua finkaturik ez dagoenez, <code>13_03</code> (M28) atalean kokatzen da. Zuzenketarik ez. Ikus <code>koadernoa_landeta1_konp_p198.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Hitz-histograma eta hiztegia alderantzikatzea (Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Fitxategi bateko <strong>hitzen histograma</strong> egiten duen programa (hitz bakoitza zenbat aldiz agertzen den), eta gero <strong>hiztegia alderantzikatzea</strong> (maiztasun bakoitzari hitz-zerrenda elkartuz)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Histograma"
    },
    {
     "mota": "testua",
     "html": "<strong>Espezifikazioa:</strong> fitxategia irakurketa-moduan ireki, hiztegi hutsa sortu, edukia hitzetan banatu, eta hitz bakoitza hiztegian kontatu."
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def histograma():\n    f = open(\"texto.txt\", \"r\")\n    dic = {}\n    texto = f.read()\n    for palabra in texto.split():\n        if palabra in dic:\n            dic[palabra] = dic[palabra] + 1   # jatorrizkoan dic(palabra); zuzena: []\n        else:\n            dic[palabra] = 1\n    return dic</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hiztegia alderantzikatzea"
    },
    {
     "mota": "testua",
     "html": "Histogramatik (<code>{hitza: maiztasuna}</code>) beste hiztegi bat eraikitzen da (<code>{maiztasuna: [hitzak]}</code>): maiztasun bakoitzari maiztasun hori duten hitzen <strong>zerrenda</strong> elkartzen zaio."
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">dic1 = histograma()\ndic2 = {}\nfor llave in dic1:\n    if dic1[llave] in dic2:\n        dic2[dic1[llave]].append(llave)\n    else:\n        dic2[dic1[llave]] = [llave]</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Zuzenketak eta oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>LANDETA1_0110</code>, 218-219 orriak; &quot;COMPUTACIÓN LANDETA&quot;). Logika <strong>zuzena</strong> da. ⚠ <strong>Zuzenketa (mahairatua):</strong> jatorrizko orriak hiztegi-atzipena <strong>parentesiz</strong> idazten du (<code>dic(palabra)</code>); Python-en <strong>kortxeteak</strong> behar dira (<code>dic[palabra]</code>). Kodean zuzenduta. <code>0100</code>/<code>p200</code>-ko histogramaren <strong>bertsio zehatza</strong> da. Konputazio-modulu finkaturik ez dagoenez JAKINAn, <code>13_03</code> (M28) atalean kokatzen da. Ikus <code>koadernoa_landeta1_konp_p218.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Fitxategiak: taldekatzea, karaktere-kontaketa eta bilaketa (Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Fitxategiekin lan egiteko hiru programa: lerroak <strong>lehen hiru hitzen arabera taldekatu</strong>, <strong>karaktereak zenbatu</strong> (bi bertsio) eta <strong>hitz bat bilatu</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<code>organizar2()</code>: lehen hiru hitzen arabera taldekatu"
    },
    {
     "mota": "testua",
     "html": "Fitxategia (<code>noticias.txt</code>) <strong>lerroz lerro</strong> irakurri; lerro bakoitzeko <strong>lehen hiru hitzak</strong> giltza, eta <strong>gainerako hitzak</strong> balio-zerrenda."
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def organizar2():\n    f = open(\"noticias.txt\", \"r\")\n    dic = {}\n    for linea in f.readlines():\n        palabras = linea.split()\n        key = palabras[0] + \" \" + palabras[1] + \" \" + palabras[2]\n        dic[key] = []\n        for i in range(3, len(palabras)):\n            dic[key].append(palabras[i])\n    return dic</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<code>kalkopurua()</code>: karaktere kopurua (bi bertsio)"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def kalkopurua():          # 1. bertsioa: begiztaz\n    f = open(\"texto.txt\", \"r\")\n    datos = f.read()\n    kop = 0\n    for karakter in datos:\n        kop = kop + 1\n    return kop\n\ndef kalkopurua():          # 2. bertsioa: len()\n    f = open(\"texto.txt\", \"r\")\n    datos = f.read()\n    return len(datos)</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<code>organitu(fich, palabra)</code>: hitza fitxategian bilatu"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def organitu(fich, palabra):\n    f = open(fich, \"r\")\n    datos = f.read()\n    palabras = datos.split()\n    if palabra in palabras:\n        return True\n    else:\n        return False</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>LANDETA1_0111</code>, 220-221 orriak; &quot;COMPUTACIÓN LANDETA&quot;). Logika <strong>zuzena</strong> da: <code>organizar2</code> lerroen lehen hiru hitzez taldekatzen du; <code>kalkopurua</code>-ren bi bertsioek karaktere kopurua ematen dute (begiztaz eta <code>len()</code>-ez); <code>organitu</code>-k hitza fitxategian dagoen egiaztatzen du. Konputazio-modulu finkaturik ez dagoenez JAKINAn, <code>13_03</code> (M28) atalean kokatzen da. Zuzenketarik ez. Ikus <code>koadernoa_landeta1_konp_p220.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "p148_mk.typ",
     "xehetasuna": "KONPUTAZIOA (newton2), 140-149 orrialdeak, 2013/2-3: Python programak — prezio-kalkulua (sarrera-kontrola), bilaketa lineala eta ehunekoak, karaktere debekatuak eta matrizeak, itsas-borrokaren jokoa (random), eta lee_coordenada (refactoring, isdigit); logika egiaztatua",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a17",
   "maila": 1,
   "izenburua": "Aulki-prezioen kalkulua (Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Azterketa-programa: aulki-eskaera baten <strong>prezioa</strong> kalkulatzen du <strong>modeloaren</strong> eta <strong>kopuruaren</strong> arabera, <strong>sarrera-baliozkotzearekin</strong>."
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">numsillas = int(input(\"Introduce el número de sillas\"))\nmodelo = input(\"Introduce el modelo\")\nwhile modelo != \"AAA\" and modelo != \"ISAAA\" and modelo != \"GYAYS\":\n    modelo = input(\"Modelo no encontrado. Introduce el modelo\")\n\nif modelo == \"AAA\":\n    precio = numsillas * 35\nelif modelo == \"ISAAA\":\n    precio = numsillas * 43\nelif modelo == \"GYAYS\":\n    precio = numsillas * 54\nelse:\n    precio = numsillas * 67          # heltezina: while-k modeloa baliozkotzen du\n\nif numsillas &gt;= 4:\n    precio = precio * 0.9\nelif numsillas &gt;= 6:                 # heltezina: &gt;=4-k jada harrapatzen du\n    precio = precio * 0.85\nelif numsillas &gt;= 8:\n    precio = precio * 0.80\nelif numsillas &gt;= 10:\n    precio = precio * 0.75\n\nprint(numsillas, \"sillas del modelo\", modelo, \"cuestan\", precio)</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Zuzenketak eta oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0071</code>, 141. orria; &quot;COMPUTACIÓN&quot;, EXAMEN). <strong>Sarrera-kontrolaren adibide ona</strong> (<code>while</code>-k modelo baliodun bat behartzen du). ⚠ <strong>Bi kode-akats (mahairatuak):</strong> (1) <strong>deskontu-katea</strong> ordena <strong>gorakorrean</strong> dago (<code>&gt;= 4</code> lehenengo), beraz <math display=\"inline\"><mn>4</mn></math> baino gehiagoko edozein kopururentzat <strong>lehen adarrak</strong> (<math display=\"inline\"><mn>0.9</mn></math>) harrapatzen du eta gainerako <code>elif</code>-ak (<code>0.85/0.80/0.75</code>) <strong>heltezinak</strong> dira; ordena <strong>beherakorra</strong> behar da (<code>&gt;= 10</code> lehenengo). (2) <code>else: precio = numsillas * 67</code> <strong>heltezina</strong> da, <code>while</code>-k jada hiru modeloetako bat bermatzen duelako. Logika-egitura ondo dago; akatsak aipatuak. Konputazio-modulua (M28) finkaturik ez dagoenez, <code>13_03</code> atalean. Ikus <code>koadernoa_newton2_konp_p140.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Bilaketa lineala, ehunekoak eta fitxategiak (Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Lau programa: <strong>bilaketa lineala</strong> bektore batean, <strong>zerrenda bat zerrenda-zerrendetan</strong> bilatzea (hasita), <strong><code>e</code> letra</strong> duten hitzen <strong>ehunekoa</strong> fitxategi batean, eta <strong>karaktere debekatuen</strong> iragazkia (hasita, <code>p144</code>-n osatzen dena)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<code>posicion(vector, elemento)</code>: bilaketa lineala"
    },
    {
     "mota": "testua",
     "html": "Elementuaren <strong>indizea</strong> itzultzen du, edo <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> ez badago. Bektorea <strong>ordenatua</strong> dela suposatuz, <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> lehenago itzultzen du elementua gainditzean:"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def posicion(vector, elemento):\n    for i in range(len(vector)):\n        if elemento == vector[i]:\n            return i\n        elif elemento &lt; vector[i]:\n            return -1\n    return -1</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<code>e</code> letra duten hitzen ehunekoa"
    },
    {
     "mota": "testua",
     "html": "Fitxategi bat irakurri, hitzetan banatu, eta <strong><code>e</code> duten hitzen ehunekoa</strong> kalkulatu:"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">f = open(\"fich.txt\", \"r\")\nd = f.read()\nlista_palabras = d.split(\" \")\ncontador = 0\nfor palabra in lista_palabras:\n    if 'e' in palabra:\n        contador = contador + 1\nprint(\"El porcentaje de palabras con la letra e es:\",\n      100 * contador / len(lista_palabras))</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Beste bi programa (hasita)"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<code>esta_en_matriz(A, C)</code>: zerrenda <code>A</code> zerrenda-zerrenden <code>C</code> barruan dagoen (<math display=\"inline\"><mrow><mi>A</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> in </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>C</mi></mrow></math>). Jatorrian <strong>osatu gabe</strong> geratzen da.",
      "<strong>Karaktere debekatuak:</strong> sarrerako fitxategitik irakurri, karaktere debekaturik gabeko lerroak irteerako fitxategira idatzi. Hemen hasten da (<code>open</code> r/w, lerroak zenbatu) eta <code>p144</code>-n <strong>osatzen</strong>."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0072</code>, 142-143 orriak; &quot;COMPUTACIÓN&quot;). Bi programa osoen logika <strong>zuzena</strong> da (bilaketa lineala ordenatuan; ehuneko-kalkulua). <code>esta_en_matriz</code> eta karaktere debekatuen programak <strong>osatu gabe</strong> daude (azkena <code>p144</code>-n jarraitzen). Fitxategi- eta katea-eragiketak lehen aldiz: <code>open</code>, <code>read</code>, <code>split</code>, <code>in</code>. <code>13_03</code> atalean (M28). Ikus <code>koadernoa_newton2_konp_p142.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Karaktere debekatuen itxiera eta matrizeak (Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<code>p142</code>ko <strong>karaktere debekatuen</strong> programaren <strong>itxiera</strong>, eta gai berri bat: <strong>matrizeak zerrenda-zerrenden bidez</strong> (eraiki eta inprimatu)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Karaktere debekatuen programaren itxiera"
    },
    {
     "mota": "testua",
     "html": "Hitz bakoitzeko, <strong>karaktere debekatuak</strong> (<code>cadena</code>) hitzean dauden begiratu; garbia bada, lerroari gehitu eta irteerako fitxategira idatzi:"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">    while i &lt; len(cadena) and correcta:\n        if cadena[i] in palabra:\n            correcta = False\n        i = i + 1\n    if correcta:\n        linea_w = linea_w + palabra + \" \"\n    fl.write(linea_w + \"\\n\")\n    numlinea = numlinea + 1\nfe.close()\nfl.close()</code>"
    },
    {
     "mota": "testua",
     "html": "(«Karaktere baimenduak» gaia <strong>etxean egiteko</strong> uzten da.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matrizeak zerrenda-zerrenden bidez"
    },
    {
     "mota": "testua",
     "html": "<strong>Eraikuntza:</strong> <math display=\"inline\"><mrow><mi>N</mi><mo>×</mo><mi>M</mi></mrow></math> matrizea, elementuak banan-banan eskatuz (<code>for i</code> / <code>for j</code> habiaratuak; <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">matriz</mtext><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>i</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>j</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> indexazioa):"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">n = 4\nm = 4\nmatriz = []\nfor i in range(n):\n    fila = []\n    for j in range(m):\n        elemento = int(input(\"Introduce el elemento [\" + str(i+1) + \",\" + str(j+1) + \"]\"))\n        fila.append(elemento)\n    matriz.append(fila)\nprint(matriz)</code>"
    },
    {
     "mota": "testua",
     "html": "<strong>Inprimatze formateatua</strong> (lerroz lerro):"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">for i in range(n):\n    linea = \" \"\n    for j in range(m):\n        linea = linea + str(matriz[i][j]) + \" \"\n    print(linea)</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0073</code>, 144-145 orriak; &quot;COMPUTACIÓN&quot;). <code>p142</code>ko karaktere debekatuen programa <strong>osatzen</strong> du (barne-begizta + idazketa + <code>close</code>). Matrizeak <strong>zerrenda-zerrenden</strong> bidez irudikatzen dira: eraikuntza (<code>for i</code>/<code>for j</code> habiaratuak, <code>matriz[i][j]</code> indexazio bikoitza marrazkiekin azaldua) eta inprimatze formateatua. Logika <strong>zuzena</strong> da. <code>13_03</code> atalean (M28). Ikus <code>koadernoa_newton2_konp_p144.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Itsas-borrokaren jokoa (Python)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Barkuen</strong> jokoa: <math display=\"inline\"><mrow><mn>10</mn><mo>×</mo><mn>10</mn></mrow></math> matrize bat <strong>zeroz</strong> bete, <strong>barku bat ausaz</strong> kokatu (<code>random</code>), eta <strong>tiro-begizta</strong> bat exekutatu koordenatuak baliozkotuz, barkuak jo arte."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hasieraketa: matrizea eta barku ausazkoa"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">import random\n\nn = 10\nm = 10\nmatriz = []\nfor i in range(n):\n    fila = []\n    for j in range(m):\n        fila.append(0)\n    matriz.append(fila)\n\nxa1 = int(random.random() * 9.9)\nya1 = int(random.random() * 9.9)\nmatriz[xa1][ya1] = 1</code>"
    },
    {
     "mota": "testua",
     "html": "<strong>Balioen kodeketa:</strong> <code>0</code> markatu gabe, <code>1</code> barkua markatu gabe, <code>10</code> ura, <code>11</code> jota."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Jokoaren logika: tiroak"
    },
    {
     "mota": "testua",
     "html": "Koordenatuak eskatu eta <strong>baliozkotu</strong> (<code>1</code>-etik <code>10</code>-era; programak <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> kentzen die, matrizea <math display=\"inline\"><mn>0</mn></math>-tik <math display=\"inline\"><mn>9</mn></math>-ra indexatzen delako), barkua jo den begiratu, eta <strong>hondoratzea</strong> konprobatu:"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">fin = False\nwhile fin == False:\n    coordx = int(input(\"X:\")) - 1\n    while coordx &lt; 0 or coordx &gt; 9:\n        print(\"Introduce un número del 1 al 10\")\n        coordx = int(input(\"X:\")) - 1\n    coordy = int(input(\"Y:\")) - 1\n    while coordy &lt; 0 or coordy &gt; 9:\n        print(\"Introduce un número del 1 al 10\")\n        coordy = int(input(\"Y:\")) - 1\n    if matriz[coordx][coordy] == 1:\n        matriz[coordx][coordy] = 11\n        print(\"Hundido\")\n        fin = True\n        for i in range(n):\n            for j in range(m):\n                if matriz[i][j] == 1:\n                    fin = False</code>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0074</code>, 146-147 orriak; &quot;COMPUTACIÓN&quot;). <strong>Ausazkotasunaren</strong> sarrera (<code>random.random() * 9.9</code> osotu bihurtuta <math display=\"inline\"><mn>0</mn></math>–<math display=\"inline\"><mn>9</mn></math> koordenatua). Gakoa: <strong>erabiltzaile-indizea</strong> (<math display=\"inline\"><mn>1</mn></math>–<math display=\"inline\"><mn>10</mn></math>) vs <strong>programa-indizea</strong> (<math display=\"inline\"><mn>0</mn></math>–<math display=\"inline\"><mn>9</mn></math>), <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> kenketaz. Barku bakarra dagoenez, lehen kolpeak hondoratzen du (hondoratze-egiaztapena orokorra da barku gehiagorako). Ur-kasua (<code>matriz == 0</code> edo <code>10</code>) <code>else</code> adarrean legoke. Logika <strong>zuzena</strong> da. <code>13_03</code> atalean (M28). Ikus <code>koadernoa_newton2_konp_p146.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "<code>lee_coordenada</code>: koordenatuen baliozkotzea (refactoring)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko itsas-borrokan koordenatuen baliozkotzea <strong>bitan</strong> errepikatzen zen (<code>x</code> eta <code>y</code>). Hemen logika hori <strong>funtzio bakar batean</strong> biltzen da, <strong>mezua parametro</strong> gisa hartuta: <strong>berrerabilgarritasuna</strong>."
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def lee_coordenada(mensaje):\n    valido = False\n    while not valido:\n        dato = input(mensaje)\n        if not dato.isdigit():\n            print(\"Debes introducir un número\")\n        else:\n            coord = int(dato) - 1\n            if coord &lt; 0 or coord &gt; 9:\n                print(\"Introduce un número del 1 al 10\")\n            else:\n                return coord</code>"
    },
    {
     "mota": "testua",
     "html": "Funtzioak <strong>bi baliozkotze</strong> egiten ditu: (1) sarrera <strong>digitu hutsez</strong> osatuta dagoen (<code>isdigit()</code>), eta (2) <strong>tartean</strong> dagoen (<math display=\"inline\"><mn>1</mn></math>–<math display=\"inline\"><mn>10</mn></math>, <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> kenketaz <math display=\"inline\"><mn>0</mn></math>–<math display=\"inline\"><mn>9</mn></math> bihurtuta)."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  <code>isdigit()</code> metodoak <strong>baliozkotze sendoagoa</strong> ematen du: <code>int()</code>-ek zuzenean <strong>huts egingo luke</strong>\n  (errorea) zenbakia ez den sarrera batekin; <code>isdigit()</code>-ekin lehenik egiaztatzen da.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0075</code>, 148. orria; &quot;COMPUTACIÓN&quot;). <strong>Kode-berrantolaketaren (refactoring)</strong> adibide ona: baliozkotze bikoitza (<code>isdigit()</code> + tartea) funtzio berrerabilgarri batean. <code>isdigit()</code> lehen aldiz agertzen da. (<code>valido</code> aldagaia soberan dago —<code>return</code>-ek irteten du—, baina logika zuzena da.) <code>13_03</code> atalean (M28). Zuzenketarik ez. Ikus <code>koadernoa_newton2_konp_p148.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a22",
   "maila": 1,
   "izenburua": "Bokal-kontagailua (hiztegiak) eta polinomioen ebaluazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bi algoritmo: esaldi bateko <strong>bokalak zenbatzea</strong> hiztegi batez, eta <strong>polinomio baten ebaluazioa</strong> hainbat puntutan."
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Bokal-kontagailua hiztegiz",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">FRASE = input()\nDIC = {}\nfor LETRA in FRASE:\n    if LETRA in \"aeiou\":\n        if LETRA in DIC:\n            DIC[LETRA] += 1\n        else:\n            DIC[LETRA] = 1</code>"
    },
    {
     "mota": "testua",
     "html": "<strong>Hiztegia</strong> (<code>DIC</code>) letra bakoitzeko agerpen-kopurua gordetzen du; gakoa letra, balioa kontagailua."
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Polinomioaren ebaluazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Polinomio bat (adib. <math display=\"inline\"><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>5</mn></mrow></math>) <strong>puntu multzo</strong> batean ebaluatzen da (adib. <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>), koefizienteak array/bektore batean gordeta (indizeak <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>LANDETA1_0072</code>, 146-147 orriak; &quot;COMPU LANDETA&quot;, 2012/12/21). <strong>Konputazio-erdia</strong>: bokal-kontagailua <strong>hiztegiz</strong> (<code>DIC[letra] += 1</code>) eta <strong>polinomioaren ebaluazioa</strong> puntutan (array bidez). Orri honen <strong>kalkulu-erdia</strong> (jarraitutasuna/deribagarritasuna, alboko limiteak) <code>04</code> atalera doa. Egiaztatua. Zuzenketarik ez. Ikus <code>koadernoa_landeta_compu_p146.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_compu_p162_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; landeta1 konputazioa (algoritmoak, pseudokodea)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Polinomioen biderketa, erakuspena eta ebaluazioa (pseudokodea)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Polinomioekin lan egiteko <strong>hiru funtzio</strong>: biderketa, erakuspena eta ebaluazioa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Biderketa: <code>BiderPoli(p1, p2)</code>"
    },
    {
     "mota": "testua",
     "html": "Koefiziente-zerrenda hutsetik hasita, <strong>for begizta bikoitzez</strong> koefizienteak konbinatzen dira:"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">def BiderPoli(p1, p2):\n    BID = [0] * (len(p1) + len(p2) - 1)\n    for i in range(len(p1)):\n        for j in range(len(p2)):\n            BID[i + j] += p1[i] * p2[j]\n    return BID</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Erakuspena eta ebaluazioa"
    },
    {
     "mota": "testua",
     "html": "<code>MostrarPoli(p)</code>: koefiziente-zerrenda (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>) <strong>kate</strong> gisa erakusten du («<math display=\"inline\"><mrow><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>9</mn></mrow></math>»), <strong>kasu bereziak</strong> zainduz (koefiziente <math display=\"inline\"><mn>0</mn></math> ez erakutsi)."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Ebaluazioa: <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mi>m</mi><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msup><mi>x</mi><mi>k</mi></msup></mrow></math> metodoz, koefiziente bakoitza dagokion berreturaz biderkatuz batzen da.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>LANDETA1_0080</code>, 162-163 orriak; &quot;COMPU LANDETA&quot;, 2012/12/24). <strong>Polinomioen</strong> hiru funtzio: <strong>biderketa</strong> (<code>BiderPoli</code>, for bikoitza), <strong>erakuspena</strong> (<code>MostrarPoli</code>, katez, koefiziente <math display=\"inline\"><mn>0</mn></math> zainduz) eta <strong>ebaluazioa</strong> (<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mi>m</mi><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>k</mi></msup></mrow></math>). Egiaztatua. Zuzenketarik ez. Ikus <code>koadernoa_landeta_compu_p162.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_compu_p164_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; landeta1 konputazioa (algoritmoak, pseudokodea)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Esaldiak alderatzea eta fitxategiekin lan egitea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bi algoritmo: bi esaldi <strong>hitzez hitz alderatzea</strong> eta <strong>fitxategiekin</strong> lan egitea."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Esaldiak alderatzea"
    },
    {
     "mota": "testua",
     "html": "<code>split()</code>-ez esaldiak hitz-zerrendetan banatu, eta <strong>begizta habiaratuez</strong> hitz baten agerpenak zenbatu:"
    },
    {
     "mota": "testua",
     "html": "<code class=\"language-python j-kodea\" style=\"display:block;white-space:pre;overflow-x:auto;tab-size:4\">LFRASE = FRASE.split()\nLBUS = BUS.split()\nkont = 0\nfor PALABRA in LBUS:\n    for j in LFRASE:\n        if PALABRA == j:\n            kont += 1\nportzentaia = 100 * kont / len(LFRASE)</code>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fitxategiekin lan egitea"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Fitxategi-moduak: <code>open(&quot;...&quot;, &quot;r&quot;)</code> <strong>irakurri</strong>, <code>&quot;w&quot;</code> <strong>idatzi</strong> (gainidatzi), <code>&quot;a&quot;</code> <strong>erantsi</strong>. Adibidea:\n  fitxategi bat lerroz lerro irakurri (<code>f.read()</code>, zerrenda batera <code>append</code>), itxi (<code>f.close()</code>), eta beste\n  batean <code>write</code> moduan elementu bakoitza idatzi begizta batez.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>LANDETA1_0081</code>, 164-165 orriak; &quot;COMPUTACIÓN LANDETA&quot;, 2012/12/24). <strong>Esaldiak alderatzea</strong> (<code>split()</code>, begizta habiaratuak, agerpen-kopurua eta portzentaia) eta <strong>fitxategiekin lan egitea</strong> (<code>open</code> moduak <code>r</code>/<code>w</code>/<code>a</code>; lerroz lerro irakurri/idatzi, <code>read</code>/<code>write</code>/<code>append</code>/<code>close</code>). Egiaztatua. Zuzenketarik ez. Ikus <code>koadernoa_landeta_compu_p164.typ</code>."
      }
     ]
    },
    {
     "mota": "hutsunea",
     "izenburua": "Programazioa: corpus teorikoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Modulu honek eskuzko iturriak baino ez ditu oraingoz (landeta2ko konputazio-orrialdeak). Falta dira: datu-egiturak, konplexutasunaren oinarriak eta fisikari begirako kalkulu numerikoa (metodo numerikoak M20rekin lotuta). Beste koadernoetako konputazio-orrialdeak (landeta1 0110-0111, newton2 0070-0075) hona etorriko dira transkribatu ahala."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_compu_p146_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; landeta1 konputazioa (algoritmoak, pseudokodea)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a27",
   "maila": 1,
   "izenburua": "Programazio eta algoritmoen ikus-atlasa",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Aportazio editorial bereizia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Fluxu-diagrama, zuhaitz eta egoera-irudi hauek kodearen kontrol-fluxua ikusgarri bihurtzen dute. Koadernoetako sasikodea eta zuzenketak osorik mantentzen dira."
      }
     ]
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "Oinarri-aldaketa, errekurtsioa eta iterazioa",
   "blokeak": [
    {
     "mota": "irudia",
     "oina": "editoriala([Hamartarretik bitarrera bihurtzeko, bi bidezko zatiketen hondarrak pilatu eta alderantziz irakurtzen dira.])",
     "src": "media/irudiak/5004f8e7660b7f32.svg",
     "zabalera": 278
    },
    {
     "mota": "irudia",
     "oina": "editoriala([Fibonacci-ren errekurtsio-zuhaitzak azpiproblema berak behin eta berriz kalkulatzen direla erakusten du; memoizazioak bikoiztasuna ezabatzen du.])",
     "src": "media/irudiak/9ec8bd1046f0ee23.svg",
     "zabalera": 312
    },
    {
     "mota": "irudia",
     "oina": "editoriala([Newton-en metodoak uneko puntuko zuzen ukitzailearen zeroa erabiltzen du hurrengo hurbilketa eraikitzeko.])",
     "src": "media/irudiak/95e03c4a95d07012.svg",
     "zabalera": 264
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Erabakiak, datu-egiturak eta egoerak",
   "blokeak": [
    {
     "mota": "irudia",
     "oina": "editoriala([Bisurtearen erabaki-zuhaitzak baldintzen lehentasuna erakusten du: 400, 100 eta 4 zatigarritasun-probak ezin dira ordenarik gabe ebaluatu.])",
     "src": "media/irudiak/a3b9ee5053f07163.svg",
     "zabalera": 301
    },
    {
     "mota": "irudia",
     "oina": "editoriala([Hiztegiaren alderantzikatzeak balio bakoitza hura zuten gakoen zerrendarekin lotzen du; histograma eta maiztasun-mapak egitura bera erabiltzen dute.])",
     "src": "media/irudiak/d5fca53dd30dc78b.svg",
     "zabalera": 284
    },
    {
     "mota": "irudia",
     "oina": "editoriala([Itsas-borrokan sareta datu-egitura da eta jokaldia egoera-makina: koordenatua irakurri, baliozkotu eta taula eguneratu.])",
     "src": "media/irudiak/f1e2004a9ab5aa6a.svg",
     "zabalera": 332
    }
   ]
  }
 ]
};
