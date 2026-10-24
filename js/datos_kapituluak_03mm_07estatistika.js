/* JAKINA · kapitulua «B6.9 - Estatistika: laginketa, estimazioa eta hipotesiak (11. gaia)» (03mm_07estatistika), desde edicion2/kapituluak/03mm_07estatistika/03mm_07estatistika.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["03mm_07estatistika"] = {
 "gakoa": "03mm_07estatistika",
 "titulua": "JAKINA - B6 - Metodo matematikoak - 9/9",
 "azala": "B6.9 - Estatistika: laginketa, estimazioa eta hipotesiak (11. gaia)",
 "azpititulua": "I. aroa - Tresnak",
 "iturburua": "kapituluak/03mm_07estatistika/03mm_07estatistika.typ",
 "sarrera": [
  {
   "mota": "iturria",
   "proiektua": "gzm_liburua",
   "xehetasuna": "24.–25. kapituluak; probabilitate-produktutik banandua (T4 D4)",
   "hizkuntza": "eu"
  },
  {
   "mota": "oharra",
   "titulua": "Hutsune deklaratua (11. gaia)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "t-Student eta chi-karratu banaketak, p-balioa eta erregresioa oraindik jaso gabe daude (maila aurre-unibertsitarioko arkua osorik dago: laginketa, estimazioa, konfiantza-tarteak, hipotesi-kontrasteak)."
    }
   ]
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Lagin estatistikoak",
   "blokeak": []
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Gaian trebatzeko, pentsatu eta ebatzi",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Dado bat, bi edo hiru jaurtitzean eta euren emaitzak batzean lortzen ditugun probabilitateen banaketak, ondokoak dira hurrenez hurren:"
    },
    {
     "mota": "sarea",
     "zutabeak": "auto minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<strong>DADO BAT</strong>"
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
     "html": "<span>BATEZ BESTEKOA, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>3</mn><mo>,</mo><mn>5</mn></mrow></math>    DESBIDERATZE TIPIKOA, <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>71</mn></mrow></math></span>"
    },
    {
     "mota": "sarea",
     "zutabeak": "auto minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<strong>BI DADO</strong>  <br>  (BATURA)"
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
         "html": "<strong>HIRU DADO</strong>  <br>  (BATURA)"
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
     "html": "Euren adierazpen grafikoak hauek dira:"
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
         "src": "media/irudiak/d7be9757f62e8993.svg",
         "zabalera": 158
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "media/irudiak/49ed83560f8bb3d8.svg",
         "zabalera": 257
        }
       ]
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/40e1c5eea95150a9.svg",
     "zabalera": 331
    },
    {
     "mota": "testua",
     "html": "Ikusten duzun moduan, <em>dado kopurua handitzen denean euren baturen banaketak gero eta antz handiagoa dauka banaketa normal batekin.</em>"
    },
    {
     "mota": "testua",
     "html": "Dadoen emaitzak batu beharrean euren batez bestekoak kalkulatzen baditugu (hau da, emaitzen batura dado kopuruarekin zatitzen badugu), adierazpen grafikoak aurreko horien berdinak izango dira. Aldaketa bakarra barren abzisak aldatzea litzateke, hiru kasuetan 1 eta 6 bitarteko balioak hartuko lituzkete eta."
    },
    {
     "mota": "testua",
     "html": "Puntuazioen batez bestekoa kalkulatzean, banaketen batez bestekoaren eta desbideratze tipikoaren parametroak lortzen dira aurrekoetako bakoitza dado kopuruarekin zatituz. Hau lortuko dugu:"
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
     "html": "Ikusten duzun moduan, <em>dado kopurua handitzen denean, euren batez bestekoen banaketaren desbideratze tipikoa gero eta txikiagoa egiten da.</em>"
    },
    {
     "mota": "testua",
     "html": "Ariketa bera lau, bost, sei... dadorekin egiten badugu, ikusiko dugu zenbat eta dado gehiago jaurti, euren batez bestekoen banaketa:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "gero eta gehiago hurbiltzen zaiola banaketa normalari,",
      "desbideratze tipikoa gero eta txikiagoa dela."
     ]
    },
    {
     "mota": "testua",
     "html": "Lau dadoen baturaren probabilitateen banaketa ondokoa da:"
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
      "Adierazi grafikoan eta ikusi zelako antza duen banaketa normalarekin.",
      "Kalkulatu batez bestekoa eta desbideratze tipikoa. (Egin kalkuladorea erabiliz eta kontutan hartu, izendatzaileak berdinak direnez, maiztasunetan kasu bakoitzari dagokion zenbakitzaileak jar ditzakezula.)",
      "Egiaztatu emaitzen batez bestekoaren parametroak BATEZ BESTEKOA <math display=\"inline\"><mrow><mo>=</mo><mn>3</mn><mo>,</mo><mn>5</mn></mrow></math> eta DESB. TIPIKOA <math display=\"inline\"><mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>855</mn></mrow></math> direla, euren baturen parametroak zati lau eginda lortzen dira eta. Batez bestekoa aurrekoen modua izango da eta desbideratze tipikoa aurrekoena baino txikiagoa."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Gaiaren nondik norakoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lehenengo eta behin, <strong>laginen garrantzia</strong> aztertuko dugu:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Biztanleriari buruzko ideia eta ezagutza orokorra izateko <strong>oso baliagarriak</strong> direla.",
        "Zergatik erabili behar ditugun laginak kasu askotan.",
        "Zein <strong>ezaugarri</strong> izan behar dituen laginak baliagarria izateko.",
        "Laginak ateratzeko zenbait metodo."
       ]
      },
      {
       "mota": "testua",
       "html": "Arreta handiz aztertuko ditugu <em>laginen batez bestekoen banaketak</em>  (limitearen teorema zentrala) eta bi orrialde hauetan ikusi ditugun emaitzen hariari jarraituta, modu normalean banatzeko joera dutela ikusiko dugu. Horrela, esparru ezagunetan lan egiteko aukera emango digute. Helburua hori izanda, banaketa normalekin trebe eta arin lan egiteko oinarrizko prozedurak asko eta sakon landuko ditugu."
      },
      {
       "mota": "testua",
       "html": "Horrez gain, laginetan ezaugarri jakin bat betetzen duten indibiduoen <strong>proportzioak</strong> nola banatzen diren ere landuko dugu eta banaketa binomialarekin oso lotuta dagoela ikusiko dugu."
      },
      {
       "mota": "testua",
       "html": "Horregatik, <strong>banaketa binomialekin</strong> lan egiteko oinarrizko teknikak ere landuko ditugu."
      }
     ]
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Laginen betebeharra",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Komunikabideetan, sarritan aurkitzen ditugu gaurko politika edo soziologiaren barruko zenbait esparru edo alderdiri buruz egindako iritzi erlatiboko inkesten emaitzak: &quot;Zenbait lider politikoren balorazioa&quot;, &quot;Irakurketa motarik gustukoenak&quot;, ..."
    },
    {
     "mota": "testua",
     "html": "Informazio horrekin batera, egindako inkestaren &quot;fitxa teknikoa&quot; ere agertzen da, eskuinaldean ageri den horren antzekoa. Fitxa horretan gaian zehar aztertuko ditugun zenbait kontzeptu ageri dira (unibertsoa, lagina, laginketa mota, akatsaren limitea...)."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>GALDEKETAREN FITXA TEKNIKOA</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Proiektua eta zuzendaritza teknikoa:</strong> IMOP <br> <strong>Unibertsoa:</strong> 18 urtetik gorako Espainiako biztanleria. <br> <strong>Lagina:</strong> 1.278 indibiduo. <br> <strong>Laginketa mota:</strong> Zorizkoa; lurraldeka, metodo estratifikatua oinarritzat hartuta egindako galdeketa pertsonalen bitartez. <br> <strong>Akatsaren limite maximoa:</strong>  <math display=\"inline\"><mrow><mi>%</mi><mo>±</mo><mn>3</mn><mo>,</mo><mn>1</mn></mrow></math>. <br> <strong>Konfiantza maila:</strong>  <math display=\"inline\"><mrow><mi>%</mi><mn>95</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "POPULAZIOA ETA LAGINA"
    },
    {
     "mota": "testua",
     "html": "Hautesleek politiko batzuei buruz duten iritzia jakin nahi badugu, guk kontutan hartu behar dugun multzoa botoa eman dezaketen guztiena da: 18 urtetik gorakoena. Hori <strong>populazioa</strong> edo <strong>unibertsoa</strong> da."
    },
    {
     "mota": "testua",
     "html": "Ezin diegu denei galdetu (oso galdeketa garestia eta luzea izango litzateke), beraz, batzuengana bakarrik joko dugu: <strong>lagina</strong> hartuko dugu. Pertsona batzuen iritziak populazio osoak zein iritzi duen jakiteko balioko digu."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Populazioa</strong> edo <strong>unibertsoa</strong> gure ikerketaren helburu izango diren indibiduo guztiak dira."
      },
      {
       "mota": "testua",
       "html": "<strong>Lagina</strong> populaziotik aterako dugun azpimultzoa izango da. Laginaren azterketak populazio osoaren ezaugarriak ateratzeko balioko digu."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "ZERGATIK ERABILTZEN DIRA LAGINAK?"
    },
    {
     "mota": "testua",
     "html": "Praktikan, sarritan jotzen dugu laginetara populazio oso bati buruzko datuak ateratzeko, ondoko arrazoi hauengatik:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Populazioa handiegia da. (Adibidez, botoa emateko gaitasuna duten euskaldun guztiak).",
      "Populazioa kontrolatzea oso zaila edo ezinezkoa izaten da. (Adibidez, aste batean denda handi batzuetan sartzen diren pertsona guztiak).",
      "Neurketa prozesua suntsitzailea da. (Adibidez, biltegian dauden bonbillen batez besteko iraupena zein den jakin nahi badugu eta, bonbilla batek zenbat irauten duen jakiteko modu bakarra erre arte piztuta eduki eta denbora neurtzea denez, euretariko batzuekin bakarrik egin beharko dugu proba).",
      "Populazioari buruzko datu batzuk ahalik eta lasterren jakin nahi dira eta denbora gehiegi emango genuke galdeketa guztiei egiten (haustesukunde edo iritzi galdeketak)."
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Laginetik, arrazoizko ondorioak atera ditzakegu?",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Pentsa ezazu 300 000 hautesle dituen hiria dugula. Pertsona horiek iritzi politikoei buruzko ideia bat edukitzeko, zoriz aukeratu ditugun 1 200 pertsonari egingo diegu galdeketa."
    },
    {
     "mota": "testua",
     "html": "Beharbada, iruditako zaigu atera behar ditugun ondorioen akatsak oso handia izan zehar duela eta errealitateari buruzko oso bestelako irudia emango dugula, gezurretan arituko garela, laginetiko indibiduo bakoitzak populazio osoaren <img class=\"formula\" src=\"media/formulak/36b6b065264c4d6d.svg\" alt=\"300#h(2pt)000 : 1200 = 250\" style=\"width:10.457em;height:1.001em\" loading=\"lazy\"> indibiduo ordezkatu behar dituelako. Zelan liteke baina, indibiduo batek dioskunarekin 250 indibiduok pentsatzen dutenari buruzko ideia eduki ahal izatea?"
    },
    {
     "mota": "testua",
     "html": "Bada, harrigarria badirudi ere, laginetatik abiatuta, populazioari buruzko ideia ona atera dezakegu. Begiratu eta aztertu ondoko argazkiak."
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
           "src": "media/irudiak/468c9e979ec8d5c4.svg",
           "zabalera": 166
          },
          {
           "mota": "testua",
           "html": "   <span>300 000 puntuz osatutako irudia</span>"
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
           "src": "media/irudiak/d5a1022e4de934ca.svg",
           "zabalera": 166
          },
          {
           "mota": "testua",
           "html": "   <span>1 200 puntuko laginetik berreraikitakoa</span>"
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ezkerreko argazkia 300 000 puntuz osatuta dago eta errealitateari buruzko irudi argia ematen digu. Eskuinekoa aurrekotik ateratako lagina da. 1 200 laukitxotan zatitu dugu eta laukitxoetako bakoitza zoriz aukeratu den puntuetako baten kolorearekin margotu dugu. Hurbiletik begiratzen badiogu (liburuko orrialdea irakurtzeko behar dugun distantziatik), itxurarik gabeko zerbait ikusten dugu. Baina urrunago jartzen bagara, irudia argiagoa irudituko zaigu eta errealitateari buruzko nahiko ideia argia emango digu. Egizu proba: begiratu 4 edo 5 cm-ra eta argazki biak nahiko antzera ikusten dituzula egiaztatuko duzu."
    },
    {
     "mota": "testua",
     "html": "Orrialde honetan azaldu ditugun adibide biak antzekoak dira: 300 000 indibiduoko populazioari buruzko informazioa 1 200 indibiduoko laginetik abiatuta atera. Argazkien adibideak erakusten digun moduan, laginek populazioari buruzko informazio ona ematen digute."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Zelakoak izan behar dute laginek?",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Batez ere laginen bi alderdiri jarri behar diegu arreta berezia: euren <strong>tamaina</strong> eta lagina eratzen duten indibiduoen <strong>aukeraketa zelan egiten den</strong>."
    },
    {
     "mota": "testua",
     "html": "Tamainari dagokionez, argi dago lagina <em>txikiegia</em> bada ez dugula onartzeko moduko ondoriorik aterako. Baina aurreko atalean ikusi dugun moduan, nahiko lagin txikiekin errealitateari buruzko nahiko irudi onak lortu daitezke. Hurrengo gaian ikasiko dugu lagin batek zein tamaina izan behar duen (indibiduo kopurua) zehatz-mehatz lortzen."
    },
    {
     "mota": "testua",
     "html": "Ikus dezagun orain zelan aukeratzen diren lagin bateko elementuak."
    },
    {
     "mota": "azpititulua",
     "testua": "LAGINKETA"
    },
    {
     "mota": "testua",
     "html": "Populazioaren azterketaren ordez laginaren azterketa egiten dugunean, akatsak egiten ditugu. Baina aldez aurretik dakigu egongo direla eta, beraz, kontrolatu egin ditzakegu."
    },
    {
     "mota": "testua",
     "html": "Baina lagina txarto aukeratuta badago (populazioa ordezkatzen ez badu) ustegabeko eta kontrolatuta ez dauden akats gehigarriak sortzen dira (<strong>alborapenak</strong>). Lagina aukeratzeari <strong>laginketa</strong> esaten zaio. Ikus dezagun orain zelan egin behar dugun laginketa populazioaren lagin ordezkariak lortu ahal izateko."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Roosevelt-ek irabazi zituen 1936ko Estatu Batuetako hauteskundeetan, aldizkari batek boto-asmoari buruzko galdeketa egin zien lau milioi irakurle baino gehiagori eta bere ondorioak okerrak izan ziren.</strong>"
      },
      {
       "mota": "testua",
       "html": "<span>4 500 pertsonari egindako beste galdeketa batek Roosevelt-en arrakasta zehaztasun handiz igarri zuen.</span>"
      },
      {
       "mota": "testua",
       "html": "<span>Lehenengo kasuan, hartutako laginak ez zuen Amerikako gizartea ordezkatzen, guztiak ziren-eta aldizkari baten irakurleak. Bigarrenean, 4 500 pertsonek ondo ordezkatzen zituzten gizarteko estamentu eta ideologia guztiak.</span>"
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "ZORIZKO LAGINKETA"
    },
    {
     "mota": "testua",
     "html": "Lagin batek populazioaren ordezkari izateko <em>ia-ia</em> ezinbestekoa duen baldintza bat, laginketako elementuak zoriz, ausaz, aukeratuta izatea da. Aukeraketa subjetiboa bada, aukeraketa egiten duenaren aurreritziak laginaren emaitzan islatuko dira eta pertsona horrek errealitateari buruz duen ustea agertuko da."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Laginketa zorizkoa</strong> dela esaten da laginetiko indibiduo guztiak zoriz aukeratzen direnean; beraz, populazioko indibiduo guztiek dute <em>a priori</em> aukeratuak izateko probabilitate bera."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hurrengo orrialdean zorizko laginketa motak ikusiko ditugu."
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Adibideak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ikastetxe bateko 1 300 ikaslek batez beste zenbat ordu egiten duten ikasten jakin nahi dugu."
      },
      {
       "mota": "testua",
       "html": "Horretarako, 100 ikasleren lagina atera dugu."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Aukeraketa egiten duena zuzendaria edo irakasle talde bat izango balitz eta ikasle &quot;onak&quot;, &quot;erdi mailakoak&quot; eta &quot;txarrak&quot; sartuko balituzte, lagina alboratua izango litzateke, ez litzatekeelako errealitatea islatuko, zuzendariak edo irakasle taldeak errealitateari buruz duen ustea baino."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Egun jakin batean ikastetxera heldu diren lehenengo 100 ikasleak aukeratuz gero, lagina, kasu honetan ere, <em>kutsatuta</em> egon daiteke, ikastetxera garaiz etortzeak lotura handia izan dezakeelako ikasle horien ardurarekin eta, beraz, ikasteko erabiltzen duten denborarekin."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "ZORIZKO LAGINKETA BAKUNA"
    },
    {
     "mota": "testua",
     "html": "Indibiduoak zenbakitu eta zozketaz aukeratuko dira. Indibiduoak kutxan gordeta dauden torlojoak badira, esaterako, zoriz aukeratzen dira, kutxatik ateraz."
    },
    {
     "mota": "azpititulua",
     "testua": "ZORIZKO LAGINKETA SISTEMATIKOA"
    },
    {
     "mota": "testua",
     "html": "Indibiduoak zenbakitu eta zoriz aukeratutako euretariko batetik abiatuta, gainerakoak zenbaki &quot;salto&quot; berdintsuen arabera aukeratzen dira. Adibidez, lehenengoa 5.a bada eta &quot;saltoa&quot; 13koa bada, 5.a, 18.a, 31.a, 44.a, ... aukeratuko dituzu."
    },
    {
     "mota": "testua",
     "html": "&quot;Saltoari&quot;  <strong>goratze koefiziente</strong>, <math display=\"inline\"><mi>h</mi></math>, esaten zaio eta <math display=\"inline\"><mi>N</mi></math>, populazioko indibiduo kopuruaren eta <math display=\"inline\"><mi>n</mi></math>, laginetiko indibiduo kopuruaren zatidura osoa eginez lortzen da: <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mfrac><mi>N</mi><mi>n</mi></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Lehenengo elementua, <em>jatorria</em>, zoriz aukeratzen da <math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>h</mi></mrow></math> zenbakien artean."
    },
    {
     "mota": "azpititulua",
     "testua": "ZORIZKO LAGINKETA ESTRATIFIKATUA"
    },
    {
     "mota": "testua",
     "html": "Populazioa estratutan banatu ahal bada (adibidez, adinaren arabera: 18 urtetik gorakoak; 18 eta 25 urte artekoak; 35 eta 50 artekoak; 50 urtetik gorakoak), batzuetan komenigarria izaten da aldez aurretik estratu bakoitzeko indibiduo kopurua finkatuz aukeratzea lagina. Zenbaki horiek eta populazioan egindako estratuen tamaina proportzionalak direnean, laginketa <strong>estratifikatua</strong> eta banaketa <strong>proportzionalekoa</strong> dela esaten da."
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
     "html": "Estratu bakoitzaren barruan, laginaren <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> indibiduoak zoriz aukeratzen dira."
    },
    {
     "mota": "testua",
     "html": "Zorizko laginketa estratifikatua egiten da estratu batekoa edo bestekoa izateak aztertzen ari garen aldagaian eraginik baduela onartzen dugunean."
    },
    {
     "mota": "testua",
     "html": "Adibidez:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Goi mailako ikasleek gainerakoek baino gehiago ikasten dutela pentsa dezakegu.",
      "Adinak badu eraginik alderdi soziologikoen inguruan."
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurreko orrialdeko adibide berarekin jarraituz, ikus ditzagun orrialde honetan azaldutako hiru metodoak erabiliz egin ditzakegun hiru modu baliagarri:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Galdeketa egingo zaien ehun ikasleak <strong>zozketa bakunaren</strong> bitartez aukeratzen dira. (Ikastetxeko ikasle guztiei zenbaki bana eman zaiela joko dugu.)",
        "<strong>Laginketa sistematikoa:</strong> goratze koefizientea <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mfrac><mn>1300</mn><mn>100</mn></mfrac><mo>=</mo><mn>13</mn></mrow></math>. <em>Jatorria</em> 1etik 13ra bitarteko zenbaki bat zozketaz aukeratuz lortuko dugu. Pentsa ezazu 5 zenbakia lortzen dugula. Laginketa egiteko aukeratuko ditugun ikasleak hauek dira: 5, 18, 31, 44, 57, ..., 1 292.",
        "<strong>Zorizko laginketa estratifikatua:</strong> Pentsa dezagun ikastetxean 1. mailan 426 ikasle daudela, 2.enean 359, 3.enean 267, 4.enean 133, 5.enean 115. Honako hau egingo dugu:"
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
       "html": "Modu berean lortzen dira <math display=\"inline\"><mrow><msub><mi>n</mi><mn>2</mn></msub><mo>=</mo><mn>28</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>n</mi><mn>3</mn></msub><mo>=</mo><mn>20</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>n</mi><mn>4</mn></msub><mo>=</mo><mn>10</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>n</mi><mn>5</mn></msub><mo>=</mo><mn>9</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Zoriz 1. mailako 33 ikasle aukeratzen baditugu, 2.eko 28, 3.eko 20, 4.eko 10 eta 5.eko 9, lagin bat lortuko dugu <strong>laginketa estratifikatu proportzionalaren</strong> bitartez."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "POPULAZIO FINITUKO ZORIZKO LAGINKETA LORTZEKO TEKNIKAK"
    },
    {
     "mota": "testua",
     "html": "Aurreko orrialdean esan dugun moduan, zorizko lagina aukeratzeko populazioko indibiduoak &quot;zozketatu&quot; egiten dira zorian aukeratzeko zeintzuk izango diren lagina eratuko dutenak. &quot;Zozketa&quot; hori zenbait modutan egin daiteke:"
    },
    {
     "mota": "testua",
     "html": "<strong>Aukeraketa ateratze bidez</strong>"
    },
    {
     "mota": "testua",
     "html": "Kutxan populazioan dauden indibiduoen beste (<math display=\"inline\"><mi>N</mi></math>) zenbakidun bola edo papertxo sartzen dira. Paper edo bolatxo horiei aldez aurretik zenbakiak ezarri dizkiegu (<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>N</mi></mrow></math>). Papertxoak zoriz ateratzen dira, laginak izan behar dituen indibiduoen (<math display=\"inline\"><mi>n</mi></math>) beste. Modu bitan egin daiteke:"
    },
    {
     "mota": "testua",
     "html": "– <strong>Ordezkaketa barik:</strong> aldi berean edo banaka aukeratzen dira <math display=\"inline\"><mi>n</mi></math> papertxoak."
    },
    {
     "mota": "testua",
     "html": "– <strong>Ordezkaketarekin:</strong>  <math display=\"inline\"><mi>n</mi></math> papertxoak banaka aukeratzen dira, baina papertxo bakoitza atera ondoren, aukeratutako papertxoa kutxan sartzen da berriro."
    },
    {
     "mota": "testua",
     "html": "Metodo biekin lortzen dugu zorizko lagina, kasu bakoitzean populazioko elementu guztiek daukatelako, <em>a priori</em>, aukeratuak izateko probabilitate bera. Baina aukeraketa ordezkaketarekin egiten bada, indibiduoren bat birritan atera dezakegu. Kasu horretan besteren bat hartu beharko dugu. Horregatik, ateratze bidezko aukeraketa egiten denean, ordezkaketarik gabea egin behar da erosoagoa ere badelako."
    },
    {
     "mota": "testua",
     "html": "<strong>Zorizko zenbakien erabilera</strong>"
    },
    {
     "mota": "testua",
     "html": "Kalkuladoreak RAN\\# tekla dauka, <strong>zorizko zenbakien sortzailea</strong> esaten zaion tekla alegia. Tekla horrekin zoriz lortzen da 0,000 eta 0,999 bitartean dagoen zenbaki hamartar bat. Zenbaki horietako bat <math display=\"inline\"><mi>N</mi></math>-rekin (populazioko elementuen kopurua) biderkatzen badugu, zati osoa 0 eta <math display=\"inline\"><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></math> bitartean izango duen zenbaki hamartar bat lortuko dugu. Beraz, <img class=\"formula\" src=\"media/formulak/056c8c78329ce52a.svg\" alt=\"N times &quot;RAN#&quot; + 1\" style=\"width:8.227em;height:1.001em\" loading=\"lazy\"> sekuentziaren bitartez lortu dugun zenbakiaren zati osoa hartzen badugu, 1 eta <math display=\"inline\"><mi>N</mi></math> bitartean zoriz aukeraturiko zenbaki bat lortuko dugu. Prozesu hau berau <math display=\"inline\"><mi>n</mi></math> aldiz egiten badugu, <math display=\"inline\"><mi>n</mi></math> elementuko lagina lortuko dugu eta ordezkaketa bidezko ateratze bidez lortuko dugun laginaren antzekoa izango da. Eragiketa ondo egiteko errepikatzen diren elementuak (baldin badaude) kendu egin beharko ditugu eta horien ordez beste elementu batzuk lortu beharko ditugu."
    },
    {
     "mota": "testua",
     "html": "Populazio handien kasuan hau da metodorik erosoena, ez dagoelako papertxo kantitate handiak egiten ibili beharrik. Populazioak 1 000 elementutik gora badu, zorizko elementuak ordenadore bidez aukeratu beharko dira, populazioko elementu guztiak &quot;banatzeko&quot; hiru zifra hamartarreko zenbakiak beharko ditugulako."
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "423 indibiduok osatzen duten populazio batetik 5 tamainako lagin bat atera nahi dugu zorizko zenbakiak erabiliz. Honela jokatu behar dugu:"
      },
      {
       "mota": "testua",
       "html": "423     BIDERKAGAI KONSTANTEA. Orain kalkuladorea prest dago 423rekin pantailan idatzitako edozein zenbaki biderkatzeko. Eragiketaren ondoren = teklari sakatu behar diogu."
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
       "html": "Zenbaki hauek dituzten indibiduoek osatzen dute lagina."
      }
     ]
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Banaketa normala. Oinarrizko teknikan errepasoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Gai honen hasierako bi orrialdeetan ikusi eta hurrengo ataletan egiaztatuko dugun moduan, laginen batez bestekoekin aritzen garenean sarritan agertuko zaigu banaketa normala. Orain banaketa normaletan egoten diren probabilitateen kalkuluari errepasoa egingo diogu bizkor-bizkor."
    },
    {
     "mota": "azpititulua",
     "testua": "N(0, 1) TAULA NORMALAREN ERABILERA"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> banaketan, aldagaia <math display=\"inline\"><mi>z</mi></math> letraren bitartez adierazten da. Ondoren agertzen diren taulek <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> probabilitateak emango dizkigute 0 eta 4 bitarteko <math display=\"inline\"><mi>k</mi></math>-ren balioentzat, ehunenetik ehunenera. Probabilitate horiei <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> esaten zaie:"
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
         "src": "media/irudiak/b59c2e5e6236a582.svg",
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
         "html": "<math display=\"inline\"><mi>k</mi></math>-ren balioa honela aurkitzen da:"
        },
        {
         "mota": "testua",
         "html": "<strong>Unitateak eta hamarrenak</strong> ezkerreko zutabean."
        },
        {
         "mota": "testua",
         "html": "<strong>Ehunenak</strong> goiko lerroan."
        },
        {
         "mota": "testua",
         "html": "Taulak ematen digun zenbakia honen balioa da: <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "azpititulua",
         "testua": "Adibideak"
        },
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mn>0</mn><mo>,</mo><mn>45</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>45</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>6736</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>20</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>8849</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>00</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>8413</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "Modu berean, <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> probabilitatearen balioa ezagututa, <math display=\"inline\"><mi>k</mi></math>-ren balioa jakin dezakegu."
        },
        {
         "mota": "azpititulua",
         "testua": "Adibideak"
        },
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>7190</mn><mo>→</mo><mi>k</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>58</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>8643</mn><mo>→</mo><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>1</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>5560</mn><mo>→</mo><mi>k</mi><mo>≈</mo><mn>0</mn><mo>,</mo><mn>14</mn></mrow></math>"
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
     "html": "Gogoan izan aldagai jarraia duen banaketan probabilitate puntualak nuluak direla: <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>=</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn></mrow></math>. Beraz, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≤</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>&lt;</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>."
    },
    {
     "mota": "azpititulua",
     "testua": "PROBABILITATEEN KALKULUA N(0, 1) BANAKETAN"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>k</mi><mo>≥</mo><mn>0</mn></mrow></math> bada, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> probabilitateak zuzenean aurki daitezke tauletan.",
      "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≥</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>",
      "Abzisa negatiboen kasuan <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>−</mi><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≥</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
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
         "html": "Gainerako probabilitateak goiko horietatik abiatuta lortu daitezke hurrengo adibideetan ikusten den moduan."
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "media/irudiak/7d4ec69b9e422dfa.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Adibideak",
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<strong>1.</strong>  <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mn>73</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mn>73</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo></mrow></math></span>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mo>=</mo><mn>1</mn><mo>−</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>73</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>9582</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>0418</mn></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/e80cb2f9d1ae38e4.svg",
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
           "html": "<strong>2.</strong>  <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>21</mn><mo>&lt;</mo><mi>z</mi><mo>≤</mo><mn>1</mn><mo>,</mo><mn>34</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>34</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>21</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo></mrow></math></span>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>9099</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>5832</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>3267</mn></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/18acf3acf05764f6.svg",
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
           "html": "<strong>3.</strong>  <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>0</mn><mo>,</mo><mn>83</mn><mo>&lt;</mo><mi>z</mi><mo>≤</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>−</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>−</mi><mn>0</mn><mo>,</mo><mn>83</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo></mrow></math></span>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>−</mi><mn>0</mn><mo>,</mo><mn>83</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mn>83</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>83</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mo>=</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>7967</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>2033</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>0</mn><mo>,</mo><mn>83</mn><mo>&lt;</mo><mi>z</mi><mo>≤</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>0</mn><mo>,</mo><mn>2033</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>9893</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>2033</mn><mo>=</mo></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>7860</mn></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/86ce2e6923592147.svg",
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
           "html": "<strong>4.</strong>  <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>95</mn><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mn>95</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>95</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo></mrow></math></span>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>9744</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>8413</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>1331</mn></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/88f6833ec682d50c.svg",
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
     "izenburua": "Ariketak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1</strong>  Aurkitu:"
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
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
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
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
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
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
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
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
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
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>96</mn><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
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
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
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
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>96</mn><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
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
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>≤</mo><mi>z</mi><mo>≤</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
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
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>2</mn><mo>≤</mo><mi>z</mi><mo>≤</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
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
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>3</mn><mo>≤</mo><mi>z</mi><mo>≤</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
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
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>64</mn><mo>≤</mo><mi>z</mi><mo>≤</mo><mn>1</mn><mo>,</mo><mn>64</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
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
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>57</mn><mo>≤</mo><mi>z</mi><mo>≤</mo><mn>2</mn><mo>,</mo><mn>57</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "PROBABILITATEEN KALKULUA <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> BANAKETAN EDOZEIN MOTATAKO BANAKETA NORMALETAN"
    },
    {
     "mota": "testua",
     "html": "Oinarrian, banaketa normal guztiak bat bera dira. Horregatik <math display=\"inline\"><mi>x</mi></math> aldagai, <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> normal bat balio batzuen artean kokatuta ote dagoen probabilitatea zein den kalkulatzeko, nahikoa da balio horietako bakoitzak &quot;batez bestekotik zenbat desbideratze tipikoren aldea&quot; duen jakitea."
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/b4e7c624a66dd6e1.svg",
     "zabalera": 309
    },
    {
     "mota": "testua",
     "html": "Grafikoan, adierazitako tartearen ezaugarria hau da: &quot;batez bestekoaren ezkerretara dagoen desbideratze tipiko batetik batez bestekoaren eskuinetara dauden bi desbideratze tipikoraino&quot;."
    },
    {
     "mota": "testua",
     "html": "Beste era honetan adieraz daitezke errazago: &quot;(–1, 2) bitartea dagokio <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> banaketan&quot;."
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
     "html": "<math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> banaketa oro <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> banaketa da, aldagaia &quot;batez bestekotik aldentzen den desbideratze tipiko kopurutan&quot; adierazten badugu."
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
     "html": "<math display=\"inline\"><mi>x</mi></math>  <em>N</em><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aldagai batetik <math display=\"inline\"><mi>z</mi></math>  <em>N</em><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aldagai batera igarotzeko prozesu horri <strong>aldagaiaren tipifikazioa</strong> esaten zaio. Aldagai tipifikatuaren probabilitateak tauletan begiratuta kalkulatu daitezke."
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>66</mn><mo>,</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> banaketan <em>a)</em>  <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>&lt;</mo><mn>70</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, <em>b)</em>  <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>&gt;</mo><mn>80</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, <em>c)</em>  <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>70</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>80</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> kalkulatuko dugu."
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> da </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>66</mn><mo>,</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>↔</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> da </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
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
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>&lt;</mo><mn>70</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>↔</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><mn>0</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>6915</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>&lt;</mo><mn>80</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>↔</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mn>75</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>9599</mn></mrow></math>, <br>     <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><mn>1</mn><mo>,</mo><mn>75</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>0401</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>70</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>80</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>↔</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>5</mn><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mn>75</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo></mrow></math></span>  <br>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>9599</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>6915</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>2684</mn></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<span class=\"j-underline\">SOLUZIOAK</span>"
          },
          {
           "mota": "testua",
           "html": "<em>a)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>&lt;</mo><mn>70</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>6915</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<em>b)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>&gt;</mo><mn>80</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>0401</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<em>c)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>70</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>80</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>2684</mn></mrow></math>"
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
     "izenburua": "Ariketak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>2</strong>  <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>173</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> banaketa batean, aurkitu ondoko probabilitateak:"
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
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≤</mo><mn>173</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
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
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≥</mo><mn>180</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
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
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>174</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>180</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
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
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>161</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>180</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
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
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>161</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>170</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
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
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>172</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>174</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
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
   "izenburua": "Bitarte karakteristikoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Orain arte <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> probabilitatean <math display=\"inline\"><mi>z</mi></math> bitarte finitu edo infinituan dagoenean zein probabilitate duen kalkulatzen ikasi dugu. Hau da, tauletara zuzen jotzen ikasi dugu."
    },
    {
     "mota": "testua",
     "html": "Orain kontrakoa ikasiko dugu: bitarte mota eta bere probabilitatea emanda, bitartearen muturrak aurkitu beharko ditugu. Ikus ditzagun adibide batzuk."
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Adibideak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1.</strong>  <math display=\"inline\"><mi>k</mi></math>-ren zein baliorekin betetzen da <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>85</mn></mrow></math>?"
      },
      {
       "mota": "testua",
       "html": "Tauletan 0,85 balioa aurkitu eta ondoko probabilitateak aurkitzen ditugu:"
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
       "html": "Hurbilen dagoena bigarrena da, beraz, soluzio zuzenean eman daitezke horrela:"
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
       "html": "<strong>2.</strong>  <math display=\"inline\"><mi>k</mi></math>-ren zein baliorekin betetzen da <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>k</mi><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>9</mn></mrow></math>?"
      },
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Bitartearen barruan 0,9ko azalera badago, kanpoan 0,1eko egongo da. Bitartea simetrikoa denez, <em>buztan</em> bietako bakoitzaren azalera 0,05 izango da. Beraz:"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "Tauletan aurkitzen dugu <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>64</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>9495</mn></mrow></math>, <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>65</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>9505</mn></mrow></math>."
          },
          {
           "mota": "testua",
           "html": "Beraz, <math display=\"inline\"><mi>k</mi></math>-ri 1,64 eta 1,65 balioen erdiko puntua emango diogu. Hau da, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>645</mn></mrow></math>"
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
           "src": "media/irudiak/d69bdd69e249b9a7.svg",
           "zabalera": 309
          }
         ]
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>645</mn><mo>;</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> bitartea aurkitu dugu, simetrikoa 0-rekiko, eta bitarte horren barruan osotasunaren azaleraren %90 dago."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "BITARTE KARAKTERISTIKOAK N(0, 1) BANAKETETAN"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>z</mi></math> aldagaia <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi></mrow></math> eta <math display=\"inline\"><mi>k</mi></math>-ren artean egoteko probabilitatea <math display=\"inline\"><mi>p</mi></math> bada, hau da,"
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
         "src": "media/irudiak/4c4a6b8316084b9c.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "orduan esaten dugu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>k</mi><mo>,</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dela <math display=\"inline\"><mi>p</mi></math> probabilitateari dagokion <strong>bitarte karakteristikoa</strong>. Eta <math display=\"inline\"><mi>k</mi></math>-ri <strong>balio kritikoa</strong> esaten zaio."
    },
    {
     "mota": "testua",
     "html": "0,9; 0,95; 0,99 probabilitateei dagozkien balio kritikoak asko erabiltzen dira eta 1,645; 1,96; 2,575 dira hurrenez hurren."
    },
    {
     "mota": "testua",
     "html": "Normalean <math display=\"inline\"><mi>p</mi></math> probabilitatea adierazteko <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math> erabiltzen da. Adierazpen horri dagokion balio kritikoa <math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math> da eta ondoko berdintasunak ditu:"
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
     "izenburua": "Ariketak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1</strong> Kalkulatu arrazoituz 0,95 eta 0,99ren probabilitateei dagozkien balio kritikoak."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "BITARTE KARAKTERISTIKOAK EDOZEIN MOTATAKO BANAKETA NORMALETAN"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>x</mi></math> aldagaia <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aldagaia dugu eta batez bestekoan, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>−</mo><mi>k</mi><mo>,</mo><mi>μ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, gunea duen bitarte bat aurkitu nahi dugu kontuan izanda <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>−</mo><mi>k</mi><mo>,</mo><mi>μ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>p</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math> dela. Hau da, lortu nahi dugun bitartean populazioaren indibiduoen <math display=\"inline\"><mrow><mi>%</mi><mn>100</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> egongo da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>x</mi></math>  <em>N</em><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bada, orduan <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>μ</mi></mrow><mi>σ</mi></mfrac></mrow></math> izango da <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Aurreko orrialdeko emaitzak kontutan hartuta,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math> probabilitateari dagokion <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>μ</mi></mrow><mi>σ</mi></mfrac></mrow></math> aldagaiaren bitarte karakteristikoa <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>,</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> da."
    },
    {
     "mota": "testua",
     "html": "Hau da, <math display=\"inline\"><mrow><mi>−</mi><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>&lt;</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>μ</mi></mrow><mi>σ</mi></mfrac><mo>&lt;</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></mrow></math>, eta probabilitatea <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>. Edo:"
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
     "html": "Horrela lortzen dugu <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>μ</mi><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mi>σ</mi><mo>,</mo><mi>μ</mi><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mi>σ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> bitartea."
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "ingurunea",
         "izena": "Definizioa",
         "kolorea": "berdea",
         "etzana": false,
         "titulua": null,
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math> probabilitate bati dagokion bitarte karakteristikoa hau da:"
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
           "html": "Beraz:"
          },
          {
           "mota": "testua",
           "html": "%90erako, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>9</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>−</mo><mn>1</mn><mo>,</mo><mn>645</mn><mi>σ</mi><mo>,</mo><mi>μ</mi><mo>+</mo><mn>1</mn><mo>,</mo><mn>645</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>"
          },
          {
           "mota": "testua",
           "html": "%95erako, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>−</mo><mn>1</mn><mo>,</mo><mn>96</mn><mi>σ</mi><mo>,</mo><mi>μ</mi><mo>+</mo><mn>1</mn><mo>,</mo><mn>96</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>"
          },
          {
           "mota": "testua",
           "html": "%99rako, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>99</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>−</mo><mn>2</mn><mo>,</mo><mn>575</mn><mi>σ</mi><mo>,</mo><mi>μ</mi><mo>+</mo><mn>2</mn><mo>,</mo><mn>575</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>"
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
         "src": "media/irudiak/4d19452958430cd6.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>66</mn><mo>,</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> banaketan, %90, %95 eta %99 kasuetarako bitarte karakteristikoak lortuko ditugu."
      },
      {
       "mota": "testua",
       "html": "%90: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>66</mn><mo>−</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>⋅</mo><mn>8</mn><mo>;</mo><mn>66</mn><mo>+</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>⋅</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>52</mn><mo>,</mo><mn>84</mn><mo>;</mo><mn>79</mn><mo>,</mo><mn>16</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>"
      },
      {
       "mota": "testua",
       "html": "Horrek esan nahi du indibiduoen %90 bitarte horretan dagoela. Hau da:"
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
       "html": "%95: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>66</mn><mo>−</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mn>8</mn><mo>,</mo><mn>66</mn><mo>+</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>50</mn><mo>,</mo><mn>32</mn><mo>;</mo><mn>81</mn><mo>,</mo><mn>68</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>50</mn><mo>,</mo><mn>32</mn><mo>;</mo><mn>81</mn><mo>,</mo><mn>68</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math></span>"
      },
      {
       "mota": "testua",
       "html": "%99: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>66</mn><mo>−</mo><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mn>8</mn><mo>,</mo><mn>66</mn><mo>+</mo><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>45</mn><mo>,</mo><mn>4</mn><mo>;</mo><mn>86</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>45</mn><mo>,</mo><mn>4</mn><mo>;</mo><mn>86</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>99</mn></mrow></math></span>"
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "urdina",
     "izenburua": "Ariketak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>2</strong>  <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>173</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> banaketan, aurkitu bitarte karakteristikoak %90, %95 eta %99 kasuetarako."
      }
     ]
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Laginen batez bestekoen banaketa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Gogoan izan gai honetako lehenengo bi orrialdeetan lortu ditugun emaitzak. Kasu bi horietan bi, hiru edo lau dado bota ditugunean lortu ditugun puntuazioen batez bestekoa jakin nahi izan dugu."
    },
    {
     "mota": "testua",
     "html": "Dado bat botatzea populazio finitu bateko indibiduotzat har daitezke: <em>Dado bat etengabe bota</em>. Beraz, dado bat lau aldiz botatzea (edo lau dado bota) populazio horren lau tamainako lagin bat dela esan dezakegu."
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Ikuspuntu horren arabera, gaiko hasierako orrialdeetan azaldu dugun ariketa honela laburtu dezakegu:"
        },
        {
         "mota": "testua",
         "html": "&quot;Dado bat botatzean lortutako emaitza&quot; banaketatik <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo>,</mo><mi>n</mi><mo>=</mo><mn>3</mn><mo>,</mo><mi>n</mi><mo>=</mo><mn>4</mn><mo>,</mo><mi>…</mi></mrow></math> tamainako laginak ateratzen baditugu, lagin horiei dagozkien batez bestekoen banaketak banaketa normal baten antza izango du. Eta antz hori handiagoa izango da zenbat eta handiagoa izan <math display=\"inline\"><mi>n</mi></math>. Horrez gain, <math display=\"inline\"><mi>n</mi></math>  (dado kopurua) handitzen denean:"
        },
        {
         "mota": "zerrenda",
         "ordenatua": false,
         "elementuak": [
          "Batez bestekoak konstante iraungo du.",
          "Desbideratze tipikoa txikituz joango da."
         ]
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "media/irudiak/63aa0bbe66ccc607.svg",
         "zabalera": 267
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Dado bat botatzeari dagokion emaitza erlatibo hau orokortu egiten da edozein banaketaren kasuan ondoko teoremaren arabera."
    },
    {
     "mota": "azpititulua",
     "testua": "LIMITEAREN TEOREMA ZENTRALA"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Batez bestekoa <math display=\"inline\"><mi>μ</mi></math> eta desbideratze tipikoa <math display=\"inline\"><mi>σ</mi></math> duen populazio jakin bat izanda, <math display=\"inline\"><mi>n</mi></math> tamainako laginen batez bestekoen banaketak:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Populazioaren batez besteko, <math display=\"inline\"><mi>μ</mi></math>, bera izango du.",
        "Desbideratze tipikoa <math display=\"inline\"><mrow><mi>σ</mi><mi>/</mi><msqrt><mi>n</mi></msqrt></mrow></math> izango du eta, beraz, txikitu egingo da <math display=\"inline\"><mi>n</mi></math> handitzen denean.",
        "<math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>30</mn></mrow></math> denean, asko hurbilduko da banaketa normalera."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Garrantzitsua da aipatzea teorema hau baliagarria dela jatorriko populazioaren banaketa edozein dela ere, berdin dio diskretua zein jarraia izan."
    },
    {
     "mota": "testua",
     "html": "Laginen batez bestekoen banaketak banaketa normalarekiko izango duen hurbilketa, jatorrizko populazio motaren eta <math display=\"inline\"><mi>n</mi></math>-ren balioaren araberakoa izango da."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Jatorrizko populazioa normala bada, laginen batez bestekoen banaketa ere normala izango da, berdin dio <math display=\"inline\"><mi>n</mi></math>-ren balioa zein den.",
      "Jatorrizko populazioa normala izan ez arren, laginen batez bestekoen banaketa banaketa normalaren oso antzekoa izan daiteke, baita <math display=\"inline\"><mi>n</mi></math>-ren balio txikien kasuan ere (aurreko adibideetan ikusi dugun moduan). Baina <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mn>30</mn></mrow></math> kasurako ziurra da normalari asko hurbilduko zaiola, berdin dio jatorrizko banaketa zein den."
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "LIMITEAREN TEOREMA ZENTRALAREN ONDORIOAK"
    },
    {
     "mota": "testua",
     "html": "Limitearen teorema zentralari esker, laginen batez bestekoen banaketa kontrolatu dezakegu, badakigu eta <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mi>σ</mi><mi>/</mi><msqrt><mi>n</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dela <math display=\"inline\"><mi>n</mi></math> 30 baino handiagoa bada. Horri esker, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math>, laginen batez bestekoentzako probabilitate bitarteak ezarri ahal izango ditugu ondoko adibideetan ikusiko dugun moduan. Eta hori baino garrantzitsuagoa: populazio baten batez bestekoari buruzko informazio oso baliagarria lortu ahal izango dugu lagin batetik abiatuta. (Azken hori hurrengo gaian ikusiko dugu)."
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Adibideak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1.</strong>  <em>Makina batek egiten dituen azukre poltsen batez bestekoa 500 g dela eta desbideratze tipikoa 35 g dela badakigu. Poltsa horiek 100 unitateko kutxetan sartzen dira.</em>  <em>a)</em> Zelan daude banatuta kutxa bakoitzeko poltsen pisuen batez bestekoak? <em>b)</em> Aurkitu kutxa bakoitzeko poltsei dagozkien %90, %95 eta %99ko bitarte karakteristikoak."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Makinak guztira egiten dituen poltsen kopurua batez bestekoa <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>500</mn></mrow></math> duen eta desbideratze tipikoa <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>35</mn></mrow></math> duen populazioa da."
      },
      {
       "mota": "testua",
       "html": "Kutxa bakoitza 100 indibiduoko lagina da. <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>100</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Limitearen teorema zentralaren arabera, badakigu laginen batez bestekoen banaketa batez bestekoa <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>500</mn></mrow></math> eta desbideratze tipikoa <math display=\"inline\"><mrow><mi>σ</mi><mi>/</mi><msqrt><mi>n</mi></msqrt><mo>=</mo><mn>35</mn><mi>/</mi><msqrt><mn>100</mn></msqrt><mo>=</mo><mn>3</mn><mo>,</mo><mn>5</mn></mrow></math> duen banaketa normala dela."
      },
      {
       "mota": "testua",
       "html": "Hau da, kutxa bakoitzeko poltsen batez bestekoak, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math>, banatzen dira <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>500</mn><mo>;</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "%90aren kasuan <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>9</mn><mo>→</mo><mi>α</mi><mi>/</mi><mn>2</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>645</mn></mrow></math></span> denez, kasu horri dagokion bitartea <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>500</mn><mo>−</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>⋅</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>;</mo><mn>500</mn><mo>+</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>⋅</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>494</mn><mo>,</mo><mn>2</mn><mo>;</mo><mn>505</mn><mo>,</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> da."
      },
      {
       "mota": "testua",
       "html": "Horrek esan nahi du kutxen (100 poltsako kutxak) %90aren poltsen batez besteko pisua 494,2 eta 505,8 g bitartekoa dela."
      },
      {
       "mota": "testua",
       "html": "%95aren kasuan <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>→</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn><mo>→</mo><mi>α</mi><mi>/</mi><mn>2</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>025</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn></mrow></math></span>"
      },
      {
       "mota": "testua",
       "html": "Bitartea: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>500</mn><mo>±</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>493</mn><mo>,</mo><mn>1</mn><mo>;</mo><mn>506</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>"
      },
      {
       "mota": "testua",
       "html": "%99aren kasuan <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>→</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>99</mn><mo>→</mo><mi>α</mi><mi>/</mi><mn>2</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>005</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn></mrow></math></span>"
      },
      {
       "mota": "testua",
       "html": "Bitartea: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>500</mn><mo>±</mo><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>491</mn><mo>;</mo><mn>509</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>"
      },
      {
       "mota": "testua",
       "html": "<strong>2.</strong>  <em>Talde bateko soldaduen altuera, zentimetrotan, <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>173</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> populazio normala da. Errejimentuko goardiak 12 soldaduk egiten dituzte. Zoriz aukeratzen direla pentsatuta, aurkitu zein bitartetan dagoen goardiak egiten dituztenen batez besteko altueraren %95.</em>"
      },
      {
       "mota": "testua",
       "html": "Jatorrizko populazioa normala denez, laginen batez bestekoak ere normalaren arabera banatuko dira, berdin dio <math display=\"inline\"><mi>n</mi></math> zein den."
      },
      {
       "mota": "testua",
       "html": "Kasu honetan, goardia bakoitzeko soldaduen batez besteko altuerak banatzen dira <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>173</mn><mo>,</mo><mn>6</mn><mi>/</mi><msqrt><mn>12</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "%95aren kasuan <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn></mrow></math> da. Beraz, bitartea <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>173</mn><mo>±</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mfrac><mn>6</mn><msqrt><mn>12</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>169</mn><mo>,</mo><mn>6</mn><mo>;</mo><mn>176</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> da."
      },
      {
       "mota": "testua",
       "html": "Beraz, 12 soldaduen batez besteko altuera goardien %95ean 169,6 cm-tik gorakoa da eta 176,4 cm-tik beherakoa."
      }
     ]
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Banaketa binomiala. Laginketa egiteko oinarrizko tekniken errepasoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Zorizko gertaera batean <math display=\"inline\"><mi>A</mi></math> gertaera bat nabarmentzen badugu eta <math display=\"inline\"><mi>A</mi></math> edo <math display=\"inline\"><msup><mi>A</mi><mo>′</mo></msup></math>, bere kontrakoa, gertatzen ote den bakarrik ardura bazaigu, horri esperientzia dikotomiko esaten diogu. <math display=\"inline\"><mi>A</mi></math> gertaerari arrakasta esaten zaio eta <math display=\"inline\"><mi>p</mi></math> bere probabilitateari, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>p</mi></mrow></math>. Bere kontrakoaren probabilitatea <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo>=</mo><mi>q</mi></mrow></math> da."
    },
    {
     "mota": "azpititulua",
     "testua": "BANAKETA BINOMIALA"
    },
    {
     "mota": "testua",
     "html": "Esperientzia dikotomiko bat <math display=\"inline\"><mi>n</mi></math> aldiz errepikatzen da. Zein izango da <math display=\"inline\"><mi>x</mi></math>, arrakasta kopurua? <math display=\"inline\"><mi>x</mi></math> aldagaia aldagai diskretua da eta <math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi></mrow></math> balioak har ditzake."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>x</mi></math> aldagaiaren probabilitate banaketari <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  <strong>banaketa binomiala</strong> esaten zaio eta bertan:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> arrakastaren probabilitatea da esperientzia bakoitzean.",
      "<math display=\"inline\"><mi>n</mi></math> esperientzia zenbat bider errepikatzen dugun adierazten digun kopurua da."
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mi>x</mi></math> arrakasta kopuruak <math display=\"inline\"><mi>k</mi></math> balioa hartzeko duen probabilitatea hau da: <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>=</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mi>n</mi><mi>k</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>p</mi><mi>k</mi></msup><msup><mi>q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aldagai diskretua duen probabilitate banaketa honetako parametroak hauek dira:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "BATEZ BESTEKOA <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>n</mi><mi>p</mi></mrow></math>    DESBIDERATZE TIPIKOA <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><msqrt><mrow><mi>n</mi><mi>p</mi><mi>q</mi></mrow></msqrt></mrow></math>"
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "BANAKETA BINOMIALA NORMALARI HURBILTZEN ZAIO"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Banaketa binomial batek banaketa normal baten gero eta antz handiagoa izango du, zenbat eta handiagoa izan <math display=\"inline\"><mrow><mi>n</mi><mi>p</mi></mrow></math> biderkadura (edo <math display=\"inline\"><mrow><mi>n</mi><mi>q</mi></mrow></math>, <math display=\"inline\"><mrow><mi>q</mi><mo>&lt;</mo><mi>p</mi></mrow></math> bada)."
        },
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>n</mi><mi>p</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>n</mi><mi>q</mi></mrow></math>, biak, 3 baino handiagoak direnean, hurbilketa nahiko ona da. 5etik gorakoak badira, hurbilketa ia-ia osoa da."
        },
        {
         "mota": "testua",
         "html": "Jakina, <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hurbiltzen zaio <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>n</mi><mi>p</mi></mrow></math> batez besteko bera eta <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><msqrt><mrow><mi>n</mi><mi>p</mi><mi>q</mi></mrow></msqrt></mrow></math> desbideratze tipiko bera duen kurba normalari:"
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
         "html": "Bi banaketa horien hurbilketan kontutan izan behar da binomiala diskretua dela eta normala jarraia."
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "media/irudiak/3e80675dcb77fdb8.svg",
         "zabalera": 433
        }
       ]
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Makina batek torlojoak egiten ditu. Horietatik %5ek akatsen bat du. 400 torlojoko kutxak egiten dira. Azaldu &quot;kutxa bateko torlojo akastunak&quot; aldagaia."
      },
      {
       "mota": "testua",
       "html": "Torlojo bat atera eta akatsa duen begiratzen badiogu, esperientzia dikotomikoa izango da eta bertan: <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo></mrow></math>&quot;akastun torlojoa&quot;, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math>; <math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo></mrow></math>&quot;torlojoa ondo dago&quot;, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "&quot;Torlojo akastunen kopurua&quot; zoriz aukeratutako 400 torlojoko kutxetan, banaketa binomiala da <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>400</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math> izanik. Hau da, <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>400</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Euren parametroak hauek dira: <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>400</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>=</mo><mn>20</mn></mrow></math>, <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><msqrt><mrow><mn>400</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></msqrt><mo>=</mo><mn>4</mn><mo>,</mo><mn>36</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>n</mi><mi>p</mi><mo>=</mo><mn>20</mn><mo>&gt;</mo><mn>5</mn></mrow></math> denez, binomiala bere parametro berdinak dituen normalari hurbiltzen zaio:"
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
   "izenburua": "Lagin proportzioen banaketa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Populazio jakin batean, ezaugarri jakin bat duten indibiduoen proportzioa <math display=\"inline\"><mi>p</mi></math> da. Populazio batetik atera daitezkeen <math display=\"inline\"><mi>n</mi></math> tamainako lagin posible guztiak hartuko ditugu kontutan. Lagin bakoitzean ezaugarri horiek dituen indibiduoen proportzio, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, jakin bat egongo da. Nola banatzen dira <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>-ren balio posible guztiak? Ikus dezagun adibide baten bitartez."
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "18 eta 25 urte bitarteko gazteen %15ak miopia du (datu hau ez da benetakoa). 40 gazte aukeratu ditugu zoriz eta lagin horretan miopeen zein proportzio, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, dagoen aztertuko dugu."
      },
      {
       "mota": "testua",
       "html": "Lagineko (oraindik egin gabe dago) indibiduo bakoitzak miope izateko duen probabilitatea <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>15</mn></mrow></math> da."
      },
      {
       "mota": "testua",
       "html": "Laginean <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>40</mn></mrow></math> daudenez, miope kopuruak, <math display=\"inline\"><mi>x</mi></math>, banaketa binomiala izango du <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>40</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>15</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>n</mi><mi>p</mi><mo>=</mo><mn>40</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>15</mn><mo>=</mo><mn>6</mn></mrow></math> handiagoa denez 5 baino, <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi>p</mi><mo>,</mo><msqrt><mrow><mi>n</mi><mi>p</mi><mi>q</mi></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da. Beraz, lagin bakoitzean egongo den <math display=\"inline\"><mi>x</mi></math>, miope kopurua, banaketa normal bati hurbiltzen zaio:"
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
       "html": "Miopeen proportzioa lagin batean izango da <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mfrac><mtext mathvariant=\"normal\">laginako miope kopurua</mtext><mn>40</mn></mfrac><mo>=</mo><mfrac><mi>x</mi><mn>40</mn></mfrac></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "Beraz, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> da <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>6</mn><mn>40</mn></mfrac><mo>;</mo><mn>2</mn><mo>,</mo><mfrac><mn>26</mn><mn>40</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>15</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>0565</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "Ikusi dugunez, oraindik bildu ez dugun eta tamaina 40koa duen lagin bateko miopeen proportzioak, batez bestekoa <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>15</mn></mrow></math> eta desbideratze tipikoa <math display=\"inline\"><mrow><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt><mo>=</mo><mn>0</mn><mo>,</mo><mn>0565</mn></mrow></math> dituen banaketa normala du."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Lagin proportzioen banaketa.</strong> Populazio batean <math display=\"inline\"><mi>C</mi></math> ezaugarri jakin bat duten indibiduoen proportzioa <math display=\"inline\"><mi>p</mi></math> bada, <math display=\"inline\"><mi>n</mi></math> tamainako laginaren barruan ezaugarri hori duten indibiduoen proportzioak, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, batez bestekoa, <math display=\"inline\"><mi>p</mi></math>, eta desbideratze tipikoa <math display=\"inline\"><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt></math> dituen banaketa normala izango du."
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
     "html": "Hori justifikatzeko, adibideko arrazoibidea modu orokorrean egingo dugu."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>C</mi></mrow></math> ezaugarria duten lagineko indibiduoen kopurua <math display=\"inline\"><mi>…</mi></math>  <math display=\"inline\"><mi>x</mi></math> da <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mi>p</mi><mo>≥</mo><mn>5</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>n</mi><mi>q</mi><mo>≥</mo><mn>5</mn></mrow></math> badira, orduan <math display=\"inline\"><mi>…</mi></math>  <math display=\"inline\"><mi>x</mi></math> da <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi>p</mi><mo>,</mo><msqrt><mrow><mi>n</mi><mi>p</mi><mi>q</mi></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mi>C</mi></mrow></math> ezaugarria duten lagineko indibiduoen proportzioa."
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
     "html": "denez, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>-ren banaketa <math display=\"inline\"><mi>x</mi></math>-ena bezalakoa izango da, baina batez bestekoaren eta desbideratze tipikoaren parametroak <math display=\"inline\"><mi>n</mi></math>-rekin zatituta izango ditu. Beraz:"
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
     "izenburua": "Adibideak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1.</strong> Makina batek torlojoak egiten ditu. Badakigu %5ak akatsa duela. 400 torlojoko kutxak egiten ditugu. <em>a)</em> Nola dago banatuta <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, akastun torlojoen proportzioa, kutxetan? <em>b)</em> Aurkitu zein bitartetan dagoen kutxetako akastun torlojoen %90. <em>c)</em> Aurkitu zein bitartetan dagoen kutxetako akastun torlojoen %99."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Makinak egiten dituen torlojo guztien kopurua populazioa da."
      },
      {
       "mota": "testua",
       "html": "Populazio horretan akastun torlojoen proportzioa <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math> da."
      },
      {
       "mota": "testua",
       "html": "Kutxa bakoitza 400 elementuko lagina da: <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>400</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Aurreko orrialdean ikusi dugun moduan, kutxetako akastun torlojoen proportzioak banaketa normala du."
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Batez bestekoa <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math>    Desbideratze tipikoa <math display=\"inline\"><mrow><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt><mo>=</mo><msqrt><mrow><mn>0</mn><mo>,</mo><mn>05</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>95</mn><mi>/</mi><mn>400</mn></mrow></msqrt><mo>=</mo><mn>0</mn><mo>,</mo><mn>011</mn></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "%90eko probabilitateak esan nahi du: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>9</mn><mo>→</mo><mi>α</mi><mi>/</mi><mn>2</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>645</mn></mrow></math></span>"
      },
      {
       "mota": "testua",
       "html": "Dagokion bitartea hau da: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>±</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>011</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>±</mo><mn>0</mn><mo>,</mo><mn>018</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>032</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>068</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "Horrek esan nahi du kutxen %90ak 0,032 eta 0,068 kopuruen bitarteko torlojo akastunak dituela."
      },
      {
       "mota": "testua",
       "html": "<em>c)</em>"
      },
      {
       "mota": "testua",
       "html": "%99ak esan nahi du: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>99</mn><mo>→</mo><mi>α</mi><mi>/</mi><mn>2</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>005</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn></mrow></math></span>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mi>σ</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>011</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>028</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Dagokion bitartea hau da: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>028</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>+</mo><mn>0</mn><mo>,</mo><mn>028</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>022</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>078</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "<strong>2.</strong> Pentsa ezazu 18 eta 25 urte bitarteko gazteen %15 miopea dela. <em>a)</em> Nola dago banatuta miopeen proportzioa, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, 40 indibiduoko laginetan? <em>b)</em> Aurkitu lagin proportzioen bitarte karakteristikoa %80arentzat."
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
           "html": "<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>15</mn></mrow></math>; <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>40</mn></mrow></math>; batez bestekoa <math display=\"inline\"><mrow><mo>=</mo><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>15</mn></mrow></math>; desbideratze tipikoa <math display=\"inline\"><mrow><mo>=</mo><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt><mo>=</mo><mn>0</mn><mo>,</mo><mn>0565</mn></mrow></math>."
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> normala da <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>15</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>0565</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
          },
          {
           "mota": "testua",
           "html": "<em>b)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math> kasuari dagokion <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>8</mn></mrow></math> tarte kritikoa kalkulatuko dugu lehenengo."
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><msub><mi>z</mi><mrow><mn>0</mn><mo>,</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>→</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><msub><mi>z</mi><mrow><mn>0</mn><mo>,</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>9</mn><mo>→</mo><msub><mi>z</mi><mrow><mn>0</mn><mo>,</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>28</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>8</mn></mrow></math> kasuari dagokion balio kritikoa <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>28</mn></mrow></math> da."
          },
          {
           "mota": "testua",
           "html": "Beraz, bitartea <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>15</mn><mo>±</mo><mn>1</mn><mo>,</mo><mn>28</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>0565</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>078</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>222</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> da."
          },
          {
           "mota": "testua",
           "html": "Hau da, adin horretako 40 gazteko laginen %80ak 0,078 eta 0,222 bitarteko miope proportzioa du."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/e6d62ac343159a4f.svg",
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
     "izenburua": "Ariketak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1</strong> Badakigu dado bat botatzen badugu 5 zenbakia irteteko aldien proportzioa <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mover><mn>6</mn><mo accent=\"true\">¯</mo></mover></mrow></math> dela. Aurkitu &quot;bosten proportzioa&quot; kasuaren %90, %95 eta %99ari zein bitarte karakteristiko dagokien, dadoarekin 100 botaldiko txandak egiten baditugu."
      }
     ]
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "10. Ebatzitako ariketak eta problemak",
   "blokeak": [
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[1   POPULAZIOA. LAGINA]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Ondoren aipatzen ditugun kasuetako bakoitzean, aztertu dugun multzoa, populazioa ala lagina da?"
        },
        {
         "mota": "testua",
         "html": "<em>a)</em>"
        },
        {
         "mota": "testua",
         "html": "Torlojo egile batek kalitate kontrola egiteko, egun batean egindako 100 torlojotik bat hartu eta aztertu egiten du."
        },
        {
         "mota": "testua",
         "html": "<em>b)</em>"
        },
        {
         "mota": "testua",
         "html": "Denda handi batzuetan, lanean hasiberria den saltzailearen lana aztertzeko, lehenengo lan egunean izan dituen bezero guztiei saltzaile horri buruzko iritzia eskatzen zaie."
        },
        {
         "mota": "testua",
         "html": "<em>c)</em>"
        },
        {
         "mota": "testua",
         "html": "Beste denda handi batzuetan, saltzaileen lana aztertzeko, egun batean ate batetik irteten diren bezero guztien iritzia biltzen da."
        },
        {
         "mota": "testua",
         "html": "<em>d)</em>"
        },
        {
         "mota": "testua",
         "html": "Herriko hauteskundeetan boto guztiak zenbatzen dira."
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Ebazpena</em>"
    },
    {
     "mota": "testua",
     "html": "<em>a)</em>"
    },
    {
     "mota": "testua",
     "html": "Populazioa makinak egiten dituen torlojo guztien multzoa da. Egileak lagin bat hartzen du."
    },
    {
     "mota": "testua",
     "html": "<em>b)</em>"
    },
    {
     "mota": "testua",
     "html": "Saltzaileak izan dituen bezero guztiei galdetzen zaienez, populazioa da."
    },
    {
     "mota": "testua",
     "html": "<em>c)</em>"
    },
    {
     "mota": "testua",
     "html": "Lagina da, egun horretako bezeroen zati bati galdetzen zaiolako."
    },
    {
     "mota": "testua",
     "html": "<em>d)</em>"
    },
    {
     "mota": "testua",
     "html": "Hauteskunde, erreferendum eta antzekoetan populazio guztia hartzen da kontutan (erroldan dauden eta gutxieneko adina izateagatik boto emateko eskubidea duten indibiduo guztiak)."
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[2   ZERGATIK ERABILTZEN DIREN LAGINAK]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Hurrengo kasuetako bakoitzean, azaldu zergatik den ezinbestekoa –edo ia ezinbestekoa– laginak erabiltzea."
        },
        {
         "mota": "testua",
         "html": "<em>a)</em>"
        },
        {
         "mota": "testua",
         "html": "Biltegi batean beirazko 4 200 ontzi daude. Gogortasuna neurtu nahi zaie eta, horretarako, gero eta presio handiagoa ezartzen zaie apurtzen diren arte."
        },
        {
         "mota": "testua",
         "html": "<em>b)</em>"
        },
        {
         "mota": "testua",
         "html": "Substantzia batzuen erreakzio denbora aztertzeko, esperimentu egileak 25 aldiz erreakzionarazten ditu, esperimentu bakoitzean neurriak hartuz."
        },
        {
         "mota": "testua",
         "html": "<em>c)</em>"
        },
        {
         "mota": "testua",
         "html": "Ikasleek azalpenak ulertu ote dituzten jakiteko, irakasleak galderak egiten dizkie batzuei."
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Ebazpena</em>"
    },
    {
     "mota": "testua",
     "html": "<em>a)</em>"
    },
    {
     "mota": "testua",
     "html": "Neurketa prozesua suntsitzailea denez, ezinbestekoa da lagina erabiltzea eta, gainera, ondorio ziurrak ateratzeko balioko dion ahalik eta laginik txikiena erabili beharko du."
    },
    {
     "mota": "testua",
     "html": "<em>b)</em>"
    },
    {
     "mota": "testua",
     "html": "Kasu honetan, aldagai guztiak kontrolatuta badaude (erreakzioan parte hartzen duten substantzien kalitatea, substantzien purutasuna, presioa, tenperatura...), emaitza beti bat izango da."
    },
    {
     "mota": "testua",
     "html": "Baina aldagaien kontrola ez da perfektua izaten. Beraz, esperimentu bakoitzak bere emaitza izan dezake (guztiak antzekoak izango badira ere). Populazioa infinitua da, egin daitezkeen esperimentu guzti-guztiek eratuko lukete. Beraz, lagina erabili behar dugu."
    },
    {
     "mota": "testua",
     "html": "<em>c)</em>"
    },
    {
     "mota": "testua",
     "html": "Irakasleak ikasleek dakitena kontrolatzeko gelan egiten dituen galderak lagina dira. Azterketetan ere, ikasleek dakitenaren lagina baino ez dugu lortzen; ezinezkoa da guzti-guztia galdetzea."
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[3   LAGINKETA]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Herri bateko hautesleen errolda dugu. 27 800 hautesle agertzen dira. 200 indibiduoko lagina nahi dugu."
        },
        {
         "mota": "testua",
         "html": "<em>a)</em>"
        },
        {
         "mota": "testua",
         "html": "Nola egin zorizko laginketa sistematikoaren bidez?"
        },
        {
         "mota": "testua",
         "html": "<em>b)</em>"
        },
        {
         "mota": "testua",
         "html": "Nola egin zorizko laginketa bakunaren bidez?"
        },
        {
         "mota": "testua",
         "html": "Erabili kalkuladoreko RAN\\# funtzioa."
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Ebazpena</em>"
    },
    {
     "mota": "testua",
     "html": "<em>a)</em>"
    },
    {
     "mota": "testua",
     "html": "<strong>Laginketa sistematikoa</strong>"
    },
    {
     "mota": "testua",
     "html": "Goratze koefizientea: <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mfrac><mn>27800</mn><mn>200</mn></mfrac><mo>=</mo><mn>139</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Horrek esan nahi du 139 indibiduoko bat aukeratu behar dugula. Nondik hasi jakiteko, zenbaki bat aukeratuko dugu zoriz 1 eta 139 bitartean. Eragiketa hori kalkuladoreko RAN\\# funtzioa erabiliz egin dezakegu:"
    },
    {
     "mota": "testua",
     "html": "Lehenengo elementua lortu: RAN\\#  <math display=\"inline\"><mi>×</mi></math> 139 <math display=\"inline\"><mi>+</mi></math> 1 <math display=\"inline\"><mo>=</mo></math> eta zati osoa hartuko dugu."
    },
    {
     "mota": "testua",
     "html": "Adibidez: RAN\\#  <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>534</mn><mo>×</mo><mn>139</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>75</mn><mo>,</mo><mn>782</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lehenengo elementua zerrendako 75.a izango da."
    },
    {
     "mota": "testua",
     "html": "Eta hurrengoak: <math display=\"inline\"><mrow><mn>75</mn><mo>+</mo><mn>139</mn><mo>=</mo><mn>214</mn></mrow></math>, <math display=\"inline\"><mrow><mspace width=\"1.0em\"></mspace><mn>214</mn><mo>+</mo><mn>139</mn><mo>=</mo><mn>353</mn></mrow></math>, <math display=\"inline\"><mrow><mspace width=\"1.0em\"></mspace><mn>353</mn><mo>+</mo><mn>139</mn><mo>=</mo><mn>492</mn></mrow></math>, <math display=\"inline\"><mrow><mspace width=\"1.0em\"></mspace><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>b)</em>"
    },
    {
     "mota": "testua",
     "html": "<strong>Zorizko laginketa bakuna</strong>"
    },
    {
     "mota": "testua",
     "html": "RAN\\#"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>×</mi></math> 27 800 <math display=\"inline\"><mi>+</mi></math> 1 <math display=\"inline\"><mo>=</mo></math> sekuentziaren bidez, zoriz aukeratuko dugu indibiduo bat hasierako multzotik. Sekuentzia hori 200 aldiz egin behar dugu lagineko elementu guztiak hautatzeko. Zenbakiren bat birritan agertzen bada, bat kendu eta beste bat lortu beharko dugu horren lekuan."
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[4   LAGINKETA]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Pentsa ezazu informazio hau dugula aurreko populazioari buruz: %20a 18 eta 25 urte bitartean dago; %36a 36 eta 40 bitartean; %45a 40 urtetik gorakoa da."
        },
        {
         "mota": "testua",
         "html": "Nola lortuko zenuke 200 indibiduoko lagina ehuneko horien estratu proportzionalak erabiliz?"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Ebazpena</em>"
    },
    {
     "mota": "sarea",
     "zutabeak": "auto minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>%</mi><mn>20</mn><mo>⋅</mo><mn>200</mn><mo>=</mo><mn>40</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>%</mi><mn>35</mn><mo>⋅</mo><mn>200</mn><mo>=</mo><mn>70</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>%</mi><mn>45</mn><mo>⋅</mo><mn>200</mn><mo>=</mo><mn>90</mn></mrow></math>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Zoriz 40 indibiduo hartuko ditugu 18 eta 25 urte bitartekoen artean; 70 indibiduo 26-40 bitartekoen artean eta 90, azkenik, 40 urtetik gorakoen artean."
        },
        {
         "mota": "testua",
         "html": "Horretarako, erroldan indibiduoen adinek agertu behar dute."
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
         "testua": "[5   BITARTE KARAKTERISTIKOAK]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Pila elektriko jakin batzuen batez besteko iraupenaren banaketa normalak batez bestekoa 55 ordukoa du eta desbideratze tipikoa 6 ordukoa. Aurkitu zein diren <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>75</mn></mrow></math>; <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>90</mn></mrow></math>; <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math>; <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>99</mn></mrow></math> probabilitateen bitarte karakteristikoak."
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Ebazpena</em>"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>75</mn><mo>→</mo><mi>p</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>25</mn><mo>→</mo><mfrac><mi>α</mi><mn>2</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>125</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> banaketa batean:"
        },
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>125</mn><mo>→</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>875</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>15</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> batean <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>75</mn></mrow></math> probabilitateari dagokion bitarte karakteristikoa hau da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>15</mn><mo>;</mo><mn>1</mn><mo>,</mo><mn>15</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "media/irudiak/3760e986b9df3fff.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>55</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> batean, <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>75</mn></mrow></math> kasuari dagokion bitarte karakteristikoa hau da:"
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
     "html": "Pilen %75ak 48,1 ordutik gora eta 61,9 ordutik behera irauten du."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>9</mn></mrow></math>; <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math>; <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>99</mn></mrow></math> kasuetarako kontutan izan behar dugu euren <math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math> balio kritikoak ezagunak direla. Balio espezifikoak hauek dira: 1,645; 1,96; 2,575. Beraz:"
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
         "testua": "[6   LAGINEN BATEZ BESTEKOEN BANAKETA]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Ikastetxe bateko ikasleen adimen koefizientea (A.K.)  <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>110</mn><mo>,</mo><mn>15</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> banatuta dago. <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>25</mn></mrow></math> tamaina duen zorizko lagina lortu nahi dugu."
        },
        {
         "mota": "testua",
         "html": "<em>a)</em>"
        },
        {
         "mota": "testua",
         "html": "Zein da atera daitezkeen laginen batez bestekoen banaketa?"
        },
        {
         "mota": "testua",
         "html": "<em>b)</em>"
        },
        {
         "mota": "testua",
         "html": "Zein probabilitate dago lortutako lagineko 25 ikasleren A.K. 115 baino handiagoa izateko?"
        },
        {
         "mota": "testua",
         "html": "<em>c)</em>"
        },
        {
         "mota": "testua",
         "html": "Eman <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math> probabilitate bati dagozkion laginen batez bestekoen bitarte karakteristikoak."
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Ebazpena</em>"
    },
    {
     "mota": "testua",
     "html": "<em>a)</em>"
    },
    {
     "mota": "testua",
     "html": "Jatorrizko populazioa normala denez, <math display=\"inline\"><mi>n</mi></math> tamainako laginen batez bestekoak <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mi>σ</mi><mi>/</mi><msqrt><mi>n</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> banatuta dira, nahiz eta <math display=\"inline\"><mi>n</mi></math> 30 baino txikiagoa izan."
    },
    {
     "mota": "testua",
     "html": "Gure kasuan, 25eko tamaina duen lagineko osagaien A.K.-aren batez bestekoa banatuta egongo da batez bestekoa 110 eta desbideratze tipikoa <math display=\"inline\"><mrow><mfrac><mn>15</mn><msqrt><mn>25</mn></msqrt></mfrac><mo>=</mo><mn>3</mn></mrow></math> duen banaketa normal baten arabera. Hau da, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> da <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>110</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/e40db696cb898d40.svg",
     "zabalera": 547
    },
    {
     "mota": "testua",
     "html": "<em>b)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math>, esan dugun moduan, <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>110</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> denez,"
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
     "html": "Hau da, 25 ikasleko laginen %4,75ak bakarrik du 115etik gorako A.K."
    },
    {
     "mota": "testua",
     "html": "<em>c)</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math> kasuari <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn></mrow></math> balio kritikoa dagokio. Beraz, laginen batez bestekoen bitarte karakteristikoa, probabilitate honi dagokiona, hau da:"
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
         "testua": "[7   LAGINEN BATEZ BESTEKOEN BANAKETA]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "36 dado bota eta euren emaitzen batez bestekoa, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math>, kalkulatu dugu. Proba hori behin eta berriro egiten badugu:"
        },
        {
         "mota": "testua",
         "html": "<em>a)</em>"
        },
        {
         "mota": "testua",
         "html": "Zein izango da batez bestekoen, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math>, banaketa?"
        },
        {
         "mota": "testua",
         "html": "<em>b)</em>"
        },
        {
         "mota": "testua",
         "html": "Zein probabilitate dago botaldi baten batez bestekoa 4 baino handiagoa izateko?"
        },
        {
         "mota": "testua",
         "html": "<em>c)</em>"
        },
        {
         "mota": "testua",
         "html": "Aurkitu botaldien batez bestekoen %99ari dagokion batez bestekoan zentratutako bitartea."
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Ebazpena</em>"
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
         "html": "Dado bat botatzean, puntuazioen batez bestekoa <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>3</mn><mo>,</mo><mn>5</mn></mrow></math> da eta desbideratze tipikoa <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>71</mn></mrow></math>."
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "media/irudiak/04eae5c999e5015a.svg",
         "zabalera": 193
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>36</mn></mrow></math> tamainako laginak hartu ditugu kontutan."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mn>30</mn></mrow></math> denez, bere batez bestekoak, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math>, honela egongo dira banatuta:"
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
         "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>&gt;</mo><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><mfrac><mrow><mn>4</mn><mo>−</mo><mn>3</mn><mo>,</mo><mn>5</mn></mrow><mrow><mn>0</mn><mo>,</mo><mn>285</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><mn>1</mn><mo>,</mo><mn>75</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mo>=</mo><mn>1</mn><mo>−</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>75</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>9599</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>0401</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "Kasuen %4an bakarrik da 36 dadoen puntuazioen batez bestekoa 4tik gorakoa."
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "media/irudiak/e802954dcf9b2914.svg",
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
     "html": "<math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>99</mn></mrow></math> kasuari <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn></mrow></math> balio kritikoa dagokio. Beraz, probabilitate horri dagokion laginen batez bestekoen bitarte karakteristikoa hau da:"
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
     "html": "36 dadoen batez bestekoen %99a 2,77 eta 4,23 bitartean egongo da."
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[8   LAGINKETA PROPORTZIOEN BANAKETA]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Badakigu dado ona botatzean bostekoak irteteko duen aldien proportzioa <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>167</mn></mrow></math> dela. 100 dado botatzen ditugu eta &quot;bostekoen&quot; proportzioa, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, kalkulatuko dugu. Ariketa hori behin eta berriro egiten badugu, nola banatuko da <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> parametroa?"
        },
        {
         "mota": "testua",
         "html": "Aurkitu <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>9</mn></mrow></math> probabilitateari dagokion <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>-ren bitarte karakteristikoa."
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Ebazpena</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> banaketa normala da <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>167</mn></mrow></math>, <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>833</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>100</mn></mrow></math> dira."
    },
    {
     "mota": "testua",
     "html": "Hau da, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> da <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>167</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>037</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bitarte karakteristikoa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>9</mn></mrow></math> bada <math display=\"inline\"><mrow><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>645</mn></mrow></math> eta bitartea hau da:"
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
   "izenburua": "10. Proposatutako ariketak eta problemak",
   "blokeak": [
    {
     "mota": "azpititulua",
     "testua": "Trebatzeko ariketak"
    },
    {
     "mota": "ariketa",
     "izena": "1",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Orain aipatuko ditugun kasuetako bakoitzean, multzoa populazioa ala lagina da? Azaldu zergatik."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Nekazari batek 87 oilo ditu. Elikagai berri bat zelakoa den probatzeko, tratamenduak irauten dituen 30 egunak hasi baino lehen eta gero pisatzen ditu."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Nekazari batek dituen 100 oiloekin proba egiten du elikagai berria zelakoa den."
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
       "html": "Elastiko egile batek apurtzeari dioten erresistentzia aztertu nahi du. Horretarako, luzatu egiten ditu apurtzen diren arte eta apurtu arte zenbat luzatu diren idazten du."
      },
      {
       "mota": "testua",
       "html": "Egiaztapen hori populazio osoarekin egin behar du ala nahi eta nahi ez erabili beharko du lagina? Zergatik?"
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
       "html": "Hurrengo prozeduretatik batekin bakarrik lortuko dugu lagin ordezkaria. Esan zein den eta, gainerakoetan, aztertu alborapena eta bere garrantzia."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Letren maiztasun erlatiboa zein den jakiteko, ikastetxe bateko liburutegitik 20 liburu hartu ditugu zoriz eta letra bakoitza aukeratu dugun liburuetako 20. orrialdean zenbat aldiz agertzen den zenbatzen dugu."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Denda handi batzuek bezeroei ematen zaien tratua zelakoa den jakiteko, erosketa txartela dutenen artean bezero batzuk aukeratzen dira zoriz: azken urtean 100 000 pta-tik behera gastatu dutenen artean 100 pertsona, 100 000 eta 500 000 pta bitartean gastatu dutenetatik beste 100, eta 500 000 pta-tik gora gastatutakoen artean beste 100."
      },
      {
       "mota": "testua",
       "html": "<em>c)</em>"
      },
      {
       "mota": "testua",
       "html": "Gizarte Segurantzako Osasun Etxe batean kartila bakoitzeko batez beste zenbat pertsona dauden jakiteko, medikuek hilabete osoan kontsultara doazen pertsonen kartilen berri jasotzen dute."
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
       "html": "Galdeketak ematen digun informazioa baliagarria izango da, neurri handian, galdeketa ondo eginda badago."
      },
      {
       "mota": "testua",
       "html": "Galderek izan behar dituzten ezaugarri batzuk hauek dira:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Laburrak izan eta hizkera errazean idatzita egon.",
        "Zalantzarik gabeko erantzunak, orekatuak, bideratu behar dituzte.",
        "Memoriako ahaleginik ez dute eskatu behar.",
        "Erantzuleei ez die aurreiritzirik sortu behar."
       ]
      },
      {
       "mota": "testua",
       "html": "Aztertu ea ondoko galderak egokiak diren galdeketan egiteko eta zuzendu ikusten dituzun akatsak:"
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Zenbat denbora ematen duzu ikasten egunero? Asko     Gutxi     Egunaren arabera "
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Zenbat aldiz joan zara zinera aurten?"
      },
      {
       "mota": "testua",
       "html": "<em>c)</em>"
      },
      {
       "mota": "testua",
       "html": "Zein iritzi duzu alkatearen lanaren inguruan? Oso ona     Ona     Berdin dit "
      },
      {
       "mota": "testua",
       "html": "<em>d)</em>"
      },
      {
       "mota": "testua",
       "html": "Zure seme-alabek denbora alferrik galtzen dute telebistaren aurrean? Bai     Ez "
      },
      {
       "mota": "testua",
       "html": "<em>e)</em>"
      },
      {
       "mota": "testua",
       "html": "Zein uste duzu izango litzatekeela errezikilatze planta jartzearen eragina langabeziari begira eta gure hiriko osasun baldintzei begira?"
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
       "html": "Aukeratu 20ko lagina 500 pertsonako multzoan:"
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Zorizko laginketa sistematikoaren bidez."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Zorizko laginketa bakunaren bidez."
      },
      {
       "mota": "testua",
       "html": "Erabili kalkuladoreko RAN\\# tekla."
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
       "html": "1 000 txoferreko taldean:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "50ek taxia eroaten dute.",
        "75ek kamioia eroaten dute.",
        "25ek autobusa eroaten dute."
       ]
      },
      {
       "mota": "testua",
       "html": "Gainerakoak ibilgailu arruntetako txoferrak dira eta honela daude banatuta:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "250ek 20 urtetik gorako esperientzia dute.",
        "425ek 5 eta 20 urte arteko esperientzia dute.",
        "175ek 0 eta 5 urte arteko esperientzia dute."
       ]
      },
      {
       "mota": "testua",
       "html": "40 indibiduoko lagin bat egin nahi badugu zorizko laginketa estratifikatu proportzionalaren bidez, zenbat aukeratu behar ditugu sei estratuetako bakoitzetik?"
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
       "html": "Parametroak emanda dituzten banaketa normaletan, aurkitu zein den bitarte karakteristikoa aipatzen diren ondoko kasuetan:"
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
       "html": "Esan nola dauden banatuta laginen batez bestekoak ondoko kasuetan:"
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
       "html": "Aurkitu zein den beheko kasuetako bakoitzeko probabilitateari dagokion bitarte karakteristikoa, aurreko ariketako laginen batez bestekoak izanda jakinda:"
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
       "html": "Esan nola banatzen diren laginketa proportzioak, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, ondoren aipatzen diren populazio eta lagin kasuan:"
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
       "html": "Aurkitu aurreko ariketako laginketa proportzioen bitarte karakteristikoak, ondoren aipatzen ditugun probabilitateetan:"
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
     "html": "<strong>Ebazteko problemak</strong>"
    },
    {
     "mota": "ariketa",
     "izena": "12",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azterketa bateko notek banaketa normala dute, batez bestekoa <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>5</mn><mo>,</mo><mn>3</mn></mrow></math> eta desbideratze tipikoa <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>4</mn></mrow></math> izanik."
      },
      {
       "mota": "testua",
       "html": "Aurkitu zein probabilitate dagoen zoriz aukeratutako ikasle baten nota:"
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "7tik gorakoa izateko."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "5etik beherakoa izateko."
      },
      {
       "mota": "testua",
       "html": "<em>c)</em>"
      },
      {
       "mota": "testua",
       "html": "5 eta 7 bitartekoa izateko."
      },
      {
       "mota": "testua",
       "html": "Aurkitu zein probabilitate dagoen zoriz aukeratutako 16 ikasleren noten batez bestekoak:"
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "7tik gorakoa izateko."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "5etik beherakoa izateko."
      },
      {
       "mota": "testua",
       "html": "<em>c)</em>"
      },
      {
       "mota": "testua",
       "html": "5 eta 7 bitartekoa izateko."
      },
      {
       "mota": "testua",
       "html": "<em>g)</em>"
      },
      {
       "mota": "testua",
       "html": "Aurkitu zein den <math display=\"inline\"><mi>k</mi></math>, ondoko bitarteak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>3</mn><mo>−</mo><mi>k</mi><mo>;</mo><mn>5</mn><mo>,</mo><mn>3</mn><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> noten %95 har dezan."
      },
      {
       "mota": "testua",
       "html": "<em>h)</em>"
      },
      {
       "mota": "testua",
       "html": "Aurkitu zein den <math display=\"inline\"><mi>b</mi></math>, ondoko bitarteak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>3</mn><mo>−</mo><mi>b</mi><mo>;</mo><mn>5</mn><mo>,</mo><mn>3</mn><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> 16 indibiduoko laginen batez bestekoa noten %95 har dezan."
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
       "html": "Poltsa batean indaba zuriak eta gorriak nahasi ditugu erlazio honen arabera: 14 indaba zuriko, indaba gorri bat."
      },
      {
       "mota": "testua",
       "html": "100 indabako eskukada hartzen dugu."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Zein probabilitate dago indaba gorrien proportzioa 0,05 eta 0,1 bitartekoa izateko?"
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Aurkitu zein bitartetan egongo den tamaina 100ekoa duten laginketen proportzioen %99."
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
       "html": "Auzo bateko bizilagunei astialdian zer egitea gustatzen zaien aztertu nahi da. Horretarako, zoriz aukeratutako 100 indibiduori galdeketa egingo zaie."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Esan zein prozedura izango den egokiena aukeraketa egiteko: ordezkatzedun ala ordezkatze gabeko laginketa. Zergatik?"
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Adinarekin zaletasunak ere aldatu egiten direnez eta auzoan 2 500 haur, 7 000 heldu eta 500 adineko daudenez, lagina laginketa estratifikatu bidez egitea erabaki dute."
      },
      {
       "mota": "testua",
       "html": "<em>b.1.)</em> Definitu estratuak."
      },
      {
       "mota": "testua",
       "html": "<em>b.2.)</em> Esan zein den estratu bakoitzari dagokion laginketa tamaina."
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
       "html": "Badakigu unibertsitate bateko ikasleen adimen koefizientea batez bestekoa 100 eta bariantza 729 dituen lege normalaren arabera banatzen dela."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Aurkitu zein probabilitate dagoen 81 ikasleko laginak 109tik beherako adimen koefizientea izateko."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Aurkitu zein probabilitate dagoen 36 ikasleko laginak 109tik gorako adimen koefizientea izateko."
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
       "html": "Larrialdi zerbitzuan gaixoek itxaron behar izaten duten denbora, minututan, <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>14</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> normala da."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Nola dago banatuta 16 gaixoren batez besteko itxarote denbora?"
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Egun erdian 16 gaixo hartu dituzte. Zein probabilitate dago gaixo horien itxarote denboraren batez bestekoa 10 eta 15 minutu bitartekoa izateko?"
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
       "html": "Herri bateko biztanleen %42a alkatearen lanaren aurka dago eta gainerakoak alde. 64 indibiduoko lagina hartuz gero, zein probabilitate dago alkatearen aurka daudenak gehiago izateko?"
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
       "html": "Jaioberria mutikoa izateko probabilitatea 0,515 da. Ospitalean 184 ume jaio dira aste betean. Zein probabilitate dago 100 mutiko edo gehiago egoteko?"
      },
      {
       "mota": "testua",
       "html": "Aurkitu zein den mutikoen proportzioaren %95ari dagokion bitarte karakteristikoa, 184 umeko laginetan."
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
       "html": "Hiri bateko mutilen altuerak (18 eta 25 urte bitartean)  <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> banaketa du. Badakigu 81 gazteren laginen batez bestekoen %90 <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>173</mn><mo>,</mo><mn>4</mn><mo>;</mo><mn>175</mn><mo>,</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bitarte karakteristikoan dagoela. Aurkitu <math display=\"inline\"><mi>μ</mi></math> eta <math display=\"inline\"><mi>σ</mi></math>."
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
       "html": "Badakigu lurrera mota jakin bateko 100 txintxeta botaz gero, %95ean punta gora begira geratzen direnen proportzioa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1216</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>2784</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bitartean dagoela. Kalkulatu txintxeta horietako bat gora begira geratzeko dagoen <math display=\"inline\"><mi>p</mi></math> probabilitatea eta egiaztatu emandako bitartearen zabaltasuna zuzena dela."
      }
     ]
    }
   ]
  },
  {
   "id": "a13",
   "maila": 1,
   "izenburua": "Inferentzia estatistikoa",
   "blokeak": []
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Gaian trebatzeko, pentsatu eta ebatzi",
   "blokeak": [
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Aurreko gaian ikasi ditugunen artean ondoko hauek daude:"
     ]
    },
    {
     "mota": "testua",
     "html": "Populazio baten <math display=\"inline\"><mi>μ</mi></math>, batez bestekoa, eta <math display=\"inline\"><mi>σ</mi></math>, desbideratze tipikoa, ezagutzen ditugu. Bi datu horietatik abiatuta, <math display=\"inline\"><mi>n</mi></math> tamainako laginen batez bestekoak nola dauden banatuta lortzen dugu. Eta, beraz, lagin horietako batek baldintza jakin batzuk betetzeko zein probabilitate dagoen aurkitzeko gauza gara."
    },
    {
     "mota": "testua",
     "html": "Hau da, populazioari buruzko zenbait datu jakinda, laginek zein jokabide izango duten ateratzen dugu ondoriotzat."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Gai honetan kontrako urratsa egiten ikasiko dugu, hori da-eta guri interesatzen zaiguna: lagin jakin bat lortuko dugu eta, bere parametroetatik abiatuta, populazioaren parametro batzuen balioa <strong>inferitu</strong> ahal izango dugu."
     ]
    },
    {
     "mota": "testua",
     "html": "Adibidez, mota honetako ondorioak aterako ditugu:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Urte bateko soldaduen batez besteko altuera 174,3 eta 175,1 cm bitartean egongo da. Datu horren &quot;ziurtasun maila&quot; %90ekoa da.",
      "<math display=\"inline\"><mi>X</mi></math> alderdiak hurrengo hauteskundeetan izango dituen botoen ehunekoa, %38,5 eta %40,2 bitartekoa izango da. Datu horren &quot;ziurtasun maila&quot; %95ekoa da."
     ]
    },
    {
     "mota": "testua",
     "html": "Hau da, populazioaren parametro bat lagin batetik abiatuta baloratzen denean, <strong>estimazioa</strong> bitarte baten bidez egiten da. Zenbat eta zabalagoa izan bitartea, hainbat eta handiagoa izango da estimazioan egin dezakegun akatsa. Eta, gainera, estimazioa ez da ziurra izango ziurtasun maila jakin bat ez badago (%90, %95...), hau da, <strong>konfiantza maila</strong> esaten zaiona ez badago."
    },
    {
     "mota": "testua",
     "html": "Beraz, hiru aldagai daude:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Laginaren tamaina:</strong> bertatik abiatuta egiten da inferentzia.",
      "<strong>Akatsaren tartea:</strong> estimazioa egiteko erabiltzen den bitartearen luzeraren erdia da.",
      "<strong>Konfiantza maila:</strong> estimazioa zein &quot;ziurtasun mailaz&quot; egin den adierazten digu."
     ]
    },
    {
     "mota": "testua",
     "html": "Hiru aldagai horiek euren artean zelan lotzen diren ikusteko, honako problema hauek ebatziko ditugu:"
    },
    {
     "mota": "ariketa",
     "izena": "1",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "500 indibiduoko lagin batekin estimatu dugu urte bateko soldaduen batez besteko altuera 174,3 eta 175,1 cm bitartekoa dela, konfiantza maila %90ekoa izanik."
      },
      {
       "mota": "testua",
       "html": "Zentzua eta burua erabiliz, erantzun itaun hauei:"
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Laginaren tamaina txikitu eta konfiantza maila bere horretan mantentzen badugu, bitartearen luzera... handitu egingo da? Berdina izango da? Txikitu egingo da?"
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Laginaren tamaina handitu eta bitartearen luzera bere horretan mantentzen badugu, konfiantza maila... handitu egingo da? Berdina izango da? Txikitu egingo da?"
      },
      {
       "mota": "testua",
       "html": "<em>c)</em>"
      },
      {
       "mota": "testua",
       "html": "Laginaren tamaina bere horretan mantentzen badugu eta bitartearen luzera txikitzen badugu, konfiantza maila... handitu egingo da? Berdina izango da? Txikitu egingo da?"
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
       "html": "Aintzat hartu ondoko ariketa hauek:"
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Txanpon bat 10 aldiz bota eta 7 &quot;busti&quot; lortu ditugu."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Txanpon bat 100 aldiz bota eta 70 &quot;busti&quot; lortu ditugu."
      },
      {
       "mota": "testua",
       "html": "<em>c)</em>"
      },
      {
       "mota": "testua",
       "html": "Txanpon bat 1 000 aldiz bota eta 700 &quot;busti&quot; lortu ditugu."
      },
      {
       "mota": "testua",
       "html": "Ariketaren batetik txanponak akatsen bat duela atera dezakegu ondoriotzat? Zeinekin lortuko dugu ondoriorik ziurrena? (Erantzun intuizioz)."
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "GAIAREN NONDIK NORAKOA",
     "blokeak": []
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Populazio baten batez bestekoaren estimazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Populazio baten batez bestekoa ezaguna da eta zein den jakin nahi dugu. Horretarako, aurreko gaian ikasitakoak erabiliko ditugu. Gogoratu:"
    },
    {
     "mota": "testua",
     "html": "Populazio bat (<math display=\"inline\"><mi>μ</mi></math>, batez besteko eta <math display=\"inline\"><mi>σ</mi></math> desbideratze tipikoduna) izanda, <math display=\"inline\"><mi>n</mi></math> tamainako laginen batez bestekoak normal banatuta daudela dakigu: <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> da <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Beraz, laginen batez bestekoen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>%</mi><mn>100</mn></mrow></math> egongo da <math display=\"inline\"><mrow><mi>μ</mi><mo>±</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math> bitartean."
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
         "src": "media/irudiak/9dc5ca7745f3c8bc.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hau da, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren %100 egongo da <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math>-etik <math display=\"inline\"><mi>μ</mi></math> baino distantzia txikiagoan <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>μ</mi></math> ezezaguna izan arren, zoriz aukeratutako lagin baten <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math> batez bestekotik <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> baino distantzia txikiagora egoteko duen probabilitatea <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math> dela ziur esan dezakegu. Horrela, <math display=\"inline\"><mi>μ</mi></math> ezezagunaren balioa estimatu ahal izango dugu lagin baten <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> batez bestekotik abiatuta ondoko <strong>konfiantza bitarte</strong> honen bidez:"
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
     "html": "<strong>Oharrak</strong>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Aurreko arrazoibide horretan gehitu behar dugu <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>30</mn></mrow></math> dela edo jatorrizko populazioa normala dela, horrela bakarrik ziurtatu dezakegulako <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> batez bestekoek banaketa normala dutela."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Lagina atera ondoren, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> bere batez bestekoa <math display=\"inline\"><mrow><mi>μ</mi><mo>±</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math> bitartean egongo da edo ez. Baina ezin dugu esan gauza bat gertatzeko zein probabilitate dagoenik, nahiz eta <math display=\"inline\"><mi>μ</mi></math> ezezaguna izan eta guk gertatzen ote den ez jakin. Horregatik, probabilitatea aipatu beharrean esango dugu <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math> bitarte horretan egoteko <strong>konfiantza maila</strong>  <math display=\"inline\"><mi>μ</mi></math> dela."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Populazioaren <math display=\"inline\"><mi>σ</mi></math> desbideratze tipikoa ezezaguna bada, laginetik abiatuta estimatu behar da. Estimazio hori egiteko modurik zuzenena <math display=\"inline\"><mrow><msub><mi>s</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>=</mo><msqrt><mfrac><mrow><mo>∑</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac></msqrt></mrow></math> laginketa parametroa erabiltzea da (ez dugu azalduko zergatik den parametro hori egokiena <math display=\"inline\"><mi>σ</mi></math> estimatzeko). Baina <math display=\"inline\"><mi>n</mi></math>-ren nahiko balio handietarako, <math display=\"inline\"><mrow><msub><mi>s</mi><mi>n</mi></msub><mo>=</mo><mi>s</mi></mrow></math> laginaren desbideratze tipikoa erabil daiteke. Konfiantza bitartea <math display=\"inline\"><mi>μ</mi></math>-rentzat, beraz, hau litzateke:"
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
     "testua": "KONFIANTZA BITARTEA BATEZ BESTEKOARENTZAT"
    },
    {
     "mota": "testua",
     "html": "Aurreko arrazoibideak berriro aipatuko ditugu labur-labur:"
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
         "  <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math> hartzen badugu, <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>z</mi><mrow><mn>0</mn><mo>,</mo><mn>025</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn></mrow></math> da.   Beraz, hau lortuko dugu:   <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>−</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>23</mn><mo>;</mo><mi>μ</mi><mo>+</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>23</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math></span>   Hau da, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>−</mo><mn>0</mn><mo>,</mo><mn>45</mn><mo>;</mo><mi>μ</mi><mo>+</mo><mn>0</mn><mo>,</mo><mn>45</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math></span>   <span class=\"j-iz\"><img class=\"irudi-l\" src=\"media/irudiak/eaf2b35442c6a2ca.svg\" alt=\"\" style=\"width:309px\" loading=\"lazy\"></span>"
        ],
        [
         "  Horrela, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> bakoitzarekin bitarte bat lortzen dugu <math display=\"inline\"><mi>μ</mi></math>-rentzat.  "
        ],
        [
         "  <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">⟦</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>0</mn><mo>,</mo><mn>45</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math>   <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>μ</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><mn>0</mn><mo>,</mo><mn>45</mn><mo>;</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mn>0</mn><mo>,</mo><mn>45</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math></span>  "
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
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Konfiantza bitartea <math display=\"inline\"><mi>μ</mi></math> batez bestekoarentzat</strong>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>μ</mi></math> estimatu nahi badugu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>%</mi><mn>100</mn></mrow></math>-eko konfiantza maila duen <math display=\"inline\"><mi>n</mi></math> tamainako laginaren bidez, ondoko konfiantza bitartea erabiltzen da:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mi>σ</mi></math> ezaguna bada, KONFIANTZA BITARTEA da: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
       ]
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mi>σ</mi></math> ezezaguna bada, laginaren desbideratze tipikoarekin, <math display=\"inline\"><mi>s</mi></math>, ordezkatzen da."
       ]
      },
      {
       "mota": "testua",
       "html": "KONFIANTZA BITARTEA da: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>s</mi><msqrt><mi>n</mi></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>s</mi><msqrt><mi>n</mi></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Adibideak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1.</strong> Aldagai estatistiko baten desbideratze tipikoa zein den badakigu, <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>8</mn></mrow></math>; baina batez bestekoa, <math display=\"inline\"><mi>μ</mi></math>, ez dakigu zein den. Estimatzeko <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>60</mn></mrow></math> tamainako lagin bat hartuko dugu eta bere batez bestekoa kalkulatuko dugu."
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>99</mn><mo>→</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>01</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Suposa dezagun <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>37</mn></mrow></math> dela."
      },
      {
       "mota": "testua",
       "html": "Bitartearen erradioa da: <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mfrac><mn>8</mn><msqrt><mn>60</mn></msqrt></mfrac><mo>≈</mo><mn>2</mn><mo>,</mo><mn>66</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Bila gabiltzan bitartea da: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>37</mn><mo>−</mo><mn>2</mn><mo>,</mo><mn>66</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><mn>37</mn><mo>+</mo><mn>2</mn><mo>,</mo><mn>66</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>34</mn><mo>,</mo><mn>34</mn><mo>;</mo><mn>39</mn><mo>,</mo><mn>66</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "Hau da, %99ko konfiantza dugu <math display=\"inline\"><mi>μ</mi></math>, batez bestekoa, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>34</mn><mo>,</mo><mn>34</mn><mo>;</mo><mn>39</mn><mo>,</mo><mn>66</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bitartean egongo dela."
      },
      {
       "mota": "testua",
       "html": "<strong>2.</strong> Autonomia erkidego jakin bateko DBHko 4. mailako ikasleek test bat ebaztean lortuko dituzten emaitzen batez bestekoa estimatzeko, test hori zoriz aukeratutako 400 ikasleri egiten zaie."
      },
      {
       "mota": "testua",
       "html": "Lortutako emaitzak albuko taula honetan daude bilduta."
      },
      {
       "mota": "testua",
       "html": "Emaitza horietatik abiatuta, estimatu %95eko konfiantza mailaz populazioaren batez bestekoaren balioa."
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
           "html": "Aurreko taulari dagozkion parametro estatistikoak honako hauek dira: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>3</mn><mo>,</mo><mn>25</mn></mrow></math>; <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>12</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn><mo>→</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "Bitartearen erradioa da: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>s</mi><msqrt><mi>n</mi></msqrt></mfrac><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mfrac><mrow><mn>1</mn><mo>,</mo><mn>12</mn></mrow><msqrt><mn>400</mn></msqrt></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>10976</mn><mo>≈</mo><mn>0</mn><mo>,</mo><mn>11</mn></mrow></math></span>"
          },
          {
           "mota": "testua",
           "html": "Bila gabiltzan bitartea da: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>25</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>11</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><mn>3</mn><mo>,</mo><mn>25</mn><mo>+</mo><mn>0</mn><mo>,</mo><mn>11</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>14</mn><mo>;</mo><mn>3</mn><mo>,</mo><mn>36</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>."
          },
          {
           "mota": "testua",
           "html": "Beraz, %95eko konfiantza daukagu populazioaren batez besteko nota <math display=\"inline\"><mrow><mn>3</mn><mo>,</mo><mn>14</mn></mrow></math> eta <math display=\"inline\"><mrow><mn>3</mn><mo>,</mo><mn>36</mn></mrow></math> bitartean egongo dela."
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "KONFIANTZA MAILA, AKATS ONARGARRI ETA LAGINAREN TAMAINAREN ARTEKO LOTURA"
    },
    {
     "mota": "testua",
     "html": "Oraintxe ikusi dugun moduan, laginen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>%</mi><mn>100</mn></mrow></math>-ek betetzen du <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><mi>μ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math>."
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "ingurunea",
         "izena": "Definizioa",
         "kolorea": "berdea",
         "etzana": false,
         "titulua": null,
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math> balioari <strong>akats maximo onargarri</strong> esaten zaio. <math display=\"inline\"><mi>α</mi></math> eta <math display=\"inline\"><mi>n</mi></math>-ren menpekoa da, honela:"
          },
          {
           "mota": "zerrenda",
           "ordenatua": false,
           "elementuak": [
            "Zenbat eta handiagoa izan laginaren tamaina, handiagoa izango da <math display=\"inline\"><mi>E</mi></math> ere (bitartea estuagoa izango da, hau da, estimazioa zehatzago egingo dugu).",
            "Zenbat eta handiagoa izan <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>  (hau da, zenbat eta ziurrago jakin nahi gure estimazioa), handiagoa izango da <math display=\"inline\"><mi>E</mi></math>.",
            "Taulan konfiantza mailarik erabilienak adierazi ditugu."
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
         "src": "media/irudiak/243490d5a1c5f69a.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Balio horietan ikus daitekeen moduan, zenbat eta handiagoa izan <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>, handiagoa izango da <math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math> eta, beraz, handiagoa izango da <math display=\"inline\"><mi>E</mi></math> ere."
    },
    {
     "mota": "azpititulua",
     "testua": "AURKITU LAGIN BATEN TAMAINA <math display=\"inline\"><mi>E</mi></math> ETA <math display=\"inline\"><mi>α</mi></math> EMANDA"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>E</mi></math>, akats maximo onargarria, eta <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>, konfiantza maila, zehaztuta ematen badizkigute, laginak baldintza horiek betetzeko izan beharko duen gutxieneko tamaina zein den lortuko dugu <math display=\"inline\"><mi>n</mi></math> bakanduz <math display=\"inline\"><mi>E</mi></math>-ren adierazpenetik:"
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
     "html": "Ikusten duzun moduan, laginaren tamaina izango da:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Hainbat eta handiagoa, zenbat eta handiagoa izan <math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math>; edo, beste era batean esanda, zenbat eta txikiagoa izan <math display=\"inline\"><mi>α</mi></math> eta handiagoa izan <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>. Hau da, konfiantza maila handitzeko laginaren tamaina handituko dugu.",
      "Hainbat eta handiagoa, zenbat eta txikiagoa izan <math display=\"inline\"><mi>E</mi></math>. Hau da, zenbat eta txikiagoa izan <math display=\"inline\"><mi>E</mi></math>, bitartea estuagoa."
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erreakzio denborak neurtzean, psikologoak badaki neurketaren desbideratze tipikoa 0,5 segundokoa dela. Zenbat neurketa egin beharko ditu, %99ko konfiantza izanik bere estimazioaren akatsa 0,1 segundo baino handiagoa ez izateko?"
      },
      {
       "mota": "testua",
       "html": "%99ko konfiantza maila izateko, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>01</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ri dagokio <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mi>n</mi></math>  lortzeko: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mfrac><mrow><mn>0</mn><mo>,</mo><mn>5</mn></mrow><msqrt><mi>n</mi></msqrt></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msqrt><mi>n</mi></msqrt><mo>=</mo><mfrac><mrow><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>5</mn></mrow><mrow><mn>0</mn><mo>,</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mn>12</mn><mo>,</mo><mn>875</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>165</mn><mo>,</mo><mn>76</mn></mrow></math></span>"
      },
      {
       "mota": "testua",
       "html": "166 neurketa egin behar dira (165,76 baino handiagoa den zenbaki oso txikiena)."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "KONFIANTZA MAILA LORTU <math display=\"inline\"><mi>E</mi></math> ETA <math display=\"inline\"><mi>N</mi></math> EZAGUTUTA"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>E</mi></math>, akats maximo onargarria eta <math display=\"inline\"><mi>n</mi></math>, laginaren tamaina, finkatuta badaude, estimazioa lortzeko konfiantza maila honela lortzen da:"
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
         "html": "<math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math> ezagututa, kurba normalak <math display=\"inline\"><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></math>-ren balioa emango digu."
        },
        {
         "mota": "testua",
         "html": "Hortik lortzen dugu <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math> konfiantza maila."
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "media/irudiak/22ce9ff331550825.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Adibideak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1.</strong> Erreakzio denbora neurtzean, psikologo batek badaki desbideratze tipikoa 0,5 segundokoa dela. Erreakzioaren batez besteko denbora estimatu nahi du, akats maximoa 0,1 segundokoa izanik, eta horretarako 100 esperientzia egiten ditu."
      },
      {
       "mota": "testua",
       "html": "Zein konfiantza mailaz eman ahal izango du <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>;</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> bitartea?"
      },
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mrow><mn>0</mn><mo>,</mo><mn>5</mn></mrow><msqrt><mn>100</mn></msqrt></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>⋅</mo><mn>10</mn></mrow><mrow><mn>0</mn><mo>,</mo><mn>5</mn></mrow></mfrac><mo>=</mo><mn>2</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>9772</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>α</mi><mi>/</mi><mn>2</mn><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≥</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>9772</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>0228</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>0456</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mo>→</mo><mspace width=\"1.0em\"></mspace><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>9544</mn></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/10ba3f6d650e7be7.svg",
           "zabalera": 309
          }
         ]
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> bada 100 esperientziekin lortutako batez besteko denbora, %95,44ko konfiantza mailaz ziurtatu dezakegu erreakzio denbora <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math> segundoren bitartean egongo dela."
      },
      {
       "mota": "testua",
       "html": "<strong>2.</strong> Koronelak bere errejimentuko soldadu guztien batez besteko altuera estimatu nahi du 0,5 cm baino txikiagoko akatsez eta, horretarako, 30 soldaduko lagina erabiltzen du. Desbideratze tipikoa <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>5</mn><mo>,</mo><mn>3</mn></mrow></math> cm dela jakinda, zein izango da estimazioaren konfiantza maila?"
      },
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mn>0</mn><mo>,</mo><mn>5</mn><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mrow><mn>5</mn><mo>,</mo><mn>3</mn></mrow><msqrt><mn>30</mn></msqrt></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn>0</mn><mo>,</mo><mn>5</mn><mo>⋅</mo><msqrt><mn>30</mn></msqrt></mrow><mrow><mn>5</mn><mo>,</mo><mn>3</mn></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>52</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><mn>0</mn><mo>,</mo><mn>52</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>6985</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>α</mi><mi>/</mi><mn>2</mn><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mn>52</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>6985</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>3015</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>6030</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "Konfiantza maila: <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>3970</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "Konfiantza maila %39,7koa izango da. Txikiegia! Ez du merezi esperientzia egitea."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/55a48ef7c8a3bb5a.svg",
           "zabalera": 309
          }
         ]
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Konfiantza mailak hain balio txikia dauka asko oso lagin txikia erabiliz (30 indibiduo) zehaztu nahi izan delako emaitza (akatsa zentimetro erdi baino txikiagoa)."
      }
     ]
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Proportzio edo probabilitate baten estimazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ez dakigu zein den populazio baten barruan ezaugarri jakin bat duten indibiduoen <math display=\"inline\"><mi>p</mi></math> proportzioa."
    },
    {
     "mota": "testua",
     "html": "Jakin egin nahi dugu. Horretarako, aurreko gaian <math display=\"inline\"><mi>n</mi></math> tamainako laginen <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> proportzioen banaketari buruz ikasi duguna erabiliko dugu."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>n</mi></math> tamainako laginen <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> proportzioa banatuta dago <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren arabera."
    },
    {
     "mota": "testua",
     "html": "Bitarte karakteristikoak hauek dira:"
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
         "src": "media/irudiak/0faf127eb1872d46.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Berdintasun horiek beste modu honetan ere jar daitezke:"
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
       "html": "<span>(Ikusten dugun moduan, <math display=\"inline\"><mi>p</mi></math>-ren balioak bitartearen muturretan ere ageri dira)</span>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Aurreko berdintasun horrek bitarte baten bidez <math display=\"inline\"><mi>p</mi></math>-ren balioa estimatzeko balio digu."
    },
    {
     "mota": "testua",
     "html": "Akats maximo onargarriak, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt></mrow></math>, badu alde txar bat: <math display=\"inline\"><mi>p</mi></math>-ren funtziopean emanda dago."
    },
    {
     "mota": "testua",
     "html": "Beraz, lagina atera eta <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, laginen proportzioa, lortu ondoren, <math display=\"inline\"><mi>p</mi></math> eta <math display=\"inline\"><mi>q</mi></math>-ren balioak estimatuko ditugu, honela: <math display=\"inline\"><mrow><mover><mi>p</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>p</mi><mi>r</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>q</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>1</mn><mo>−</mo><mi>p</mi><mi>r</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Horrela, bada, akats maximo onargarria (<strong>akatsaren bornea</strong>)  <math display=\"inline\"><mi>p</mi></math>-ren estimaziorako, hau izango da:"
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
     "html": "Eta horrela lortzen dugu <math display=\"inline\"><mi>p</mi></math>-ren ondoko <strong>konfiantza bitartea</strong>, konfiantza maila <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>%</mi><mn>100</mn></mrow></math>-ekoa izanik:"
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
     "html": "<strong>Oharrak</strong>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Aurreko arrazoibidean esan beharra dago bai <math display=\"inline\"><mrow><mi>p</mi><mo>⋅</mo><mi>n</mi></mrow></math> bai <math display=\"inline\"><mrow><mi>q</mi><mo>⋅</mo><mi>n</mi></mrow></math> 5 baino handiagoak edo 5-en berdinak izango direla <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>-ren banaketa normala izateko."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Horrez gainera, <math display=\"inline\"><mi>p</mi></math> estimatu nahi badugu <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>-ren bidez akats maximo onargarria lortzean, laginak &quot;handia&quot; izan behar du nahi eta nahi ez (<math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>30</mn></mrow></math>)."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Gertaera baten <strong>probabilitatea</strong>  <math display=\"inline\"><mi>p</mi></math> dela esatea, eta zorizko esperientzia bat infinitu aldiz egin ondoren lortzen den populazioan gertaera horren gertatzeko <strong>proportzioa</strong>  <math display=\"inline\"><mi>p</mi></math> dela esatea gauza bera da. Beraz, probabilitatea populazio infinitu baten proportzioa dela esan dezakegu."
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Konfiantza bitartea <math display=\"inline\"><mi>p</mi></math> proportziorako</strong>"
      },
      {
       "mota": "testua",
       "html": "Baldintza jakin bat betetzen duen multzo bateko indibiduoen proportzioa estimatzeko, konfiantza maila <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>%</mi><mn>100</mn></mrow></math>-ekoa izanik, honako bitarte hau erabiltzen da:"
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
       "html": "Adierazpen horretan <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> da <math display=\"inline\"><mi>n</mi></math> indibiduoko lagin jakin batean lortutako proportzioa."
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Adibideak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1.</strong> Hiri handi batean zoriz aukeratu dugu 300 pertsonako lagin bat 15 urtetik gorakoen artean. Horietatik 104 pertsonak egunero egunkaria irakurtzen duela jakin dugu. %90eko konfiantza mailaz, hiri horretakoak direnen eta 15 urtetik gora dutenen artean, egunkari irakurleen proportzioa estimatzeko bitarte bat aurkituko dugu."
      },
      {
       "mota": "testua",
       "html": "Konfiantza maila %90ekoa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>645</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Laginen proportzioa da: <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mfrac><mn>104</mn><mn>300</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>347</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Akats maximo onargarria (akatsaren bornea) hau da:"
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
       "html": "Beraz, eskatu diguten bitartea izango da: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>347</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>045</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>,</mo><mn>347</mn><mo>+</mo><mn>0</mn><mo>,</mo><mn>045</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>302</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>392</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "<em>Ondorioa:</em>"
      },
      {
       "mota": "testua",
       "html": "%90eko konfiantza mailaz ziurtatu dezakegu multzo oso batean, egunkari irakurleen proportzioa 0,302 eta 0,392 bitartekoa dela."
      },
      {
       "mota": "testua",
       "html": "<strong>2.</strong> Aurreko problemako emaitza kontutan izanda, ariketa berriro egin nahi dugu akatsaren bornea 0,01ekoa lortzeko konfiantza maila berberaz: %90ekoaz. Zenbat indibiduo izan behar ditu laginak?"
      },
      {
       "mota": "testua",
       "html": "Akatsaren bornearen adierazpenean, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mfrac><mrow><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac></msqrt></mrow></math>, <math display=\"inline\"><mi>n</mi></math> kalkulatu behar dugu eta <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>645</mn></mrow></math>, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>01</mn></mrow></math> ezagutzen dugu."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>-ren balioa ezin dugu laginetik abiatuta lortu, oraindik ez dugu atera eta (ez ahaztu laginaren tamaina kalkulatzen ari garela). Erreferentziatzat aldez aurreko emaitzak (aurreko ariketakoak) hartuko ditugu eta <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>347</mn></mrow></math> baloratuko dugu."
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
       "html": "6 132 pertsonako lagina hartu beharko da."
      },
      {
       "mota": "testua",
       "html": "Multzo horretatik egunero egunkaria irakurtzen dutenen proportzioari, <math display=\"inline\"><mrow><mi>p</mi><msub><mi>r</mi><mn>0</mn></msub></mrow></math>, esker zehaztu ahal izango dugu <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><msub><mi>r</mi><mn>0</mn></msub><mo>−</mo><mn>0</mn><mo>,</mo><mn>01</mn><mo>;</mo><mi>p</mi><msub><mi>r</mi><mn>0</mn></msub><mo>+</mo><mn>0</mn><mo>,</mo><mn>01</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> bitartea eta bitarte horren barruan estimatzen dugu egongo dela bila gabiltzan <math display=\"inline\"><mi>p</mi></math> proportzioa, konfiantza %90ekoa izanik."
      }
     ]
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "Hipotesi estatistikoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Adibide jakin bat aztertzen hasiko gara (1. KASUA):"
    },
    {
     "mota": "testua",
     "html": "<em>Ontzat dugun dadoa daukagu. 100 aldiz bota eta 25 &quot;BOSTEKO&quot; lortzen ditugu. Ustea onargarria dela esan dezakegu (dadoa ondo eginda dago) ala zuzendu egin beharko dugu lortutako emaitzetan oinarrituta?</em>"
    },
    {
     "mota": "testua",
     "html": "Adibide honetan zalantzan jartzen dugu <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>p</mi></mrow></math> parametroak <math display=\"inline\"><mfrac><mn>1</mn><mn>6</mn></mfrac></math> balioa hartzen ote duen. Zalantza hori argitzeko <strong>test estatistikoa</strong> egin dezakegu 100 botaldietako emaitzetatik abiatuz."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Test estatistikoa</strong>, zorizko lagin esanguratsu batetik abiatuta, populazio horretan ezagutzen ez den parametro baten balioari buruz aldez aurretik egindako hipotesia onartzeko edo ukatzeko balioko digun ondorioa ateratzeko prozedura da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ikus dezagun beste adibide bat (2. KASUA):"
    },
    {
     "mota": "testua",
     "html": "<em>Orain bost urte ezagutzen proba egin zitzaien urte jakin bateko soldadu guztiei. Emaitzaren batez bestekoa <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>102</mn></mrow></math> izan zen eta desbideratze tipikoa <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>11</mn></mrow></math>. Aurten test bera egin zaio 400 soldaduko laginari eta batez bestekoa <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>101</mn></mrow></math> puntu izan da.</em>"
    },
    {
     "mota": "testua",
     "html": "<em>Bost urte hauetan soldaduen ezagutzetan aldaketarik egon ez dela eta, beraz, agertzen den aldea zorizkoa dela pentsa dezakegu?</em>"
    },
    {
     "mota": "testua",
     "html": "Adibide bietan <strong>jatorrizko hipotesia</strong> eta hipotesiaren ondorio diren laginetatik abiatuta lortu diren <strong>emaitzak</strong> agiri dira. Aldea zorizkoa ote den jakin nahi dugu."
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
     "html": "Emandako hipotesia adierazteko <math display=\"inline\"><msub><mi>H</mi><mn>0</mn></msub></math> erabiltzen da eta <strong>hipotesi nulu</strong> esaten zaio. Kontrako hipotesia adierazteko <math display=\"inline\"><msub><mi>H</mi><mn>1</mn></msub></math> erabiltzen da eta <strong>ordezko hipotesi</strong> esaten zaio."
    },
    {
     "mota": "testua",
     "html": "1 KASU (DADOA):    <math display=\"inline\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>167</mn></mrow></math>,    <math display=\"inline\"><mrow><msub><mi>H</mi><mn>1</mn></msub><mo>:</mo><mi>p</mi><mo>≠</mo><mn>0</mn><mo>,</mo><mn>167</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "2 KASUA (SOLDADUAK):    <math display=\"inline\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>μ</mi><mo>=</mo><mn>102</mn></mrow></math>,    <math display=\"inline\"><mrow><msub><mi>H</mi><mn>1</mn></msub><mo>:</mo><mi>μ</mi><mo>≠</mo><mn>102</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<span>\n    <em>OHARRA:</em> Esan beharra dago dado batean 5 ateratzeko probabilitatea <math display=\"inline\"><mfrac><mn>1</mn><mn>6</mn></mfrac></math> dela esatea eta dado bat infinitu aldiz botata lortzen den populazioan 5 zenbakiaren proportzioa <math display=\"inline\"><mfrac><mn>1</mn><mn>6</mn></mfrac></math> dela esatea gauza bera dela. Beraz, populazioko &quot;BOSTEKOEN&quot; proportzioaren balioa eta lagineko &quot;BOSTEKOEN&quot; proportzioa konparatzen dira.\n</span>"
    },
    {
     "mota": "azpititulua",
     "testua": "Hipotesia egiaztatu"
    },
    {
     "mota": "testua",
     "html": "Hipotesi estatistiko bat egia den ala ez den argitzeko, orain ikasiko ditugun urrats batzuk eman behar dira. Lehenengo eta behin, aurreko orrialdean eman ditugun adibide biak ebatziko ditugu:"
    },
    {
     "mota": "testua",
     "html": "<em>1 KASUA: 100 aldiz bota eta &quot;BOST&quot; zenbakia 25 aldiz ateratzen duen dadoa ondo eginda dago?</em>"
    },
    {
     "mota": "testua",
     "html": "Egindako hipotesia (dadoa ondo eginda ote dago), zehaztu egiten da <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>167</mn></mrow></math> esanda."
    },
    {
     "mota": "testua",
     "html": "Hipotesia egia bada, &quot;BOSTEKOEN&quot; proportzioak, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, 100 tamainako laginetan banaketa normala izango du"
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
     "html": "Kasu horretan, &quot;BOSTEKOEN&quot; laginen proportzioen %95 bitarte karakteristikoan egongo dira:"
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
     "src": "media/irudiak/352e91ce58c79e19.svg",
     "zabalera": 309
    },
    {
     "mota": "testua",
     "html": "(0,094; 0,240)  <strong>onarpen eremu</strong> esaten zaio."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>25</mn></mrow></math> laginean lortutako proportzioa bitartetik kanpo gelditzen denez, oso zaila izango da lagina banaketa horretakoa izatea (hau da, ez da sinesgarria ondo egindako dado batekin hogeita bost &quot;BOSTEKO&quot; ateratzea 100 botalditan). Beraz, <strong>hipotesia ukatu</strong> egiten da %5eko esangura mailaz."
    },
    {
     "mota": "testua",
     "html": "<em>2 KASUA. &quot;Soldaduen ezagutza&quot; aldagaiak <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>102</mn></mrow></math>, <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>11</mn></mrow></math> parametroak dituela pentsa dezakegu, 400 soldaduen batez bestekoa <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>101</mn></mrow></math> dela kontutan izanda?</em>"
    },
    {
     "mota": "testua",
     "html": "Hipotesia egia bada, jatorrizko populazioak <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>102</mn></mrow></math>, <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>11</mn></mrow></math> ditu."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>400</mn></mrow></math> tamainako laginen batez bestekoak honela daude banatuta:"
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
     "html": "Ondoko bitarte karakteristikoa lortzen da %95ean:"
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
     "html": "400eko tamaina duten laginen %95ek batez bestekoa bitarte honetan du (<strong>onarpen eremua</strong>  <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math>-rako)."
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/d202879617694a18.svg",
     "zabalera": 309
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>101</mn></mrow></math> bitartean dago. Beraz, <strong>hipotesia onartu</strong> egiten da <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math> esangura mailaz, ezinezkotzat muturreko kasuen %5 bakarrik jotzen dugu eta."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Hipotesi estatistikoak egiaztatzeko metodoak</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>1. Enuntziatu.</strong> Hipotesia enuntziatzen da, <math display=\"inline\"><msub><mi>H</mi><mn>0</mn></msub></math>. Populazio jakin bateko parametro bati balio bat ezartzen zaio. (Ikasturte honetan <math display=\"inline\"><mi>μ</mi></math> batez bestekoari eta <math display=\"inline\"><mi>p</mi></math> proportzioari buruzko hipotesiak bakarrik egingo ditugu)."
      },
      {
       "mota": "testua",
       "html": "<strong>2. Ondorioak atera.</strong> Hipotesia egia bada, laginaren parametro hori modu ezagunean egongo da banatuta. Ondorioz:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Esangura maila</strong> bat aukeratzen da. Erabilienak <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>10</mn></mrow></math>; <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math>; <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>01</mn></mrow></math> dira.",
        "<strong>Onarpen eremua</strong> eraikitzen da. Bitarte horretatik kanpo &quot;kasurik bitxienak&quot;  <math display=\"inline\"><mrow><mi>α</mi><mo>⋅</mo><mi>%</mi><mn>100</mn></mrow></math> bakarrik biltzen dira."
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>3. Egiaztatu.</strong> Aurreko urratsean erabaki den tamainako lagina hartzen da eta bertatik dagokion parametroa lortzen da."
      },
      {
       "mota": "testua",
       "html": "<strong>4. Erabaki.</strong> Laginen parametroaren balioa onarpen eremuaren barruan badago, hipotesia onartu egiten da <math display=\"inline\"><mi>α</mi></math> onarpen mailaz. Bestela ukatu egiten da."
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Adibideak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ikus dezagun nola gauzatzen diren urrats horiek aurreko orrialdean ebatzitako adibide bietan."
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
     "izenburua": "Ariketak",
     "blokeak": [
      {
       "mota": "ariketa",
       "izena": "1",
       "izar": 0,
       "blokeak": [
        {
         "mota": "testua",
         "html": "Egin berriro 1. KASUA urratsez urrats, <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>01</mn></mrow></math> esangura mailarako."
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
         "html": "Egin berriro 2. KASUA urratsez urrats, <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>10</mn></mrow></math> esangura mailarako."
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
   "izenburua": "Hipotesiak batez bestekoari begira egiaztatu",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Populazioaren batez bestekoari buruz egiten diren hipotesiak egiaztatzeko zein urrats ematen diren sistematizatuko dugu orain, kasu bi bereiziz: hipotesi nulua <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math> den kasuak, batetik, eta hipotesi nulua: <math display=\"inline\"><mrow><mi>μ</mi><mo>≥</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math> edo <math display=\"inline\"><mrow><mi>μ</mi><mo>≤</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math> motako berdintasunak onartzen dituen kasuak bestetik."
    },
    {
     "mota": "azpititulua",
     "testua": "Aldebiko egiaztapena: <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>1. urratsa. Hipotesia:</strong>  <math display=\"inline\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>μ</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hipotesi nulua populazioaren batez bestekoari balio jakin bat ematea da. Metodo hau da aurreko orrialdeetako 2. KASUAN garatu duguna."
    },
    {
     "mota": "testua",
     "html": "<strong>2. urratsa. Ondorioak atera. Onarpen eremua lortu</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>30</mn></mrow></math> denean edo <math display=\"inline\"><mi>n</mi></math>-ren beste edozein balioren kasuan, jatorrizko populazioa normala bada, laginen batez bestekoen banaketa <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mo>,</mo><msub><mi>σ</mi><mn>0</mn></msub><mi>/</mi><msqrt><mi>n</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da."
    },
    {
     "mota": "testua",
     "html": "Beraz, <math display=\"inline\"><mi>x</mi></math> esangura maila baterako onarpen eremua kasu horri dagokion bitarte karakteristikoa izango da:"
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
     "src": "media/irudiak/2119ba55b2a4ba2d.svg",
     "zabalera": 408
    },
    {
     "mota": "testua",
     "html": "Esangura maila erabilienei dagozkien <math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math> balioak gogoratuko ditugu:"
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
     "html": "<strong>3. eta 4. urratsak. Egiaztatu eta erabaki</strong>"
    },
    {
     "mota": "testua",
     "html": "Lagina atera, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> kalkulatu eta onarpen eremuaren barruan ala kanpoan dagoen egiaztatzen da."
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<em>Unibertsitate bateko ikasleen adimen koefizientearen batez bestekoa 113 dela uste da, desbideratze tipikoa 7 izanik. Hipotesia egiaztatzeko, 180 ikasleko lagina hartzen da eta euretatik lortzen dugu batez besteko adimen koefizientea 115 dela. Onar dezakegu aurreko hipotesia %5eko esangura mailaz?</em>"
      },
      {
       "mota": "testua",
       "html": "<strong>1. urratsa.</strong>  <math display=\"inline\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>μ</mi><mo>=</mo><mn>113</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>2. urratsa.</strong>  <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>180</mn></mrow></math> laginaren tamaina 30 baino handiagoa denez, laginen batez bestekoen banaketa <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>113</mn><mo>,</mo><mn>7</mn><mi>/</mi><msqrt><mn>180</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>113</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>52</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izango da (hipotesia egia bada) eta, beraz, onarpen bitartea"
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
       "html": "izango da."
      },
      {
       "mota": "testua",
       "html": "<strong>3. urratsa.</strong> Benetako esperientzia batean, orain atera beharko litzateke lagina eta bertan lortu beharko genuke <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>115</mn></mrow></math> batez bestekoaren balioa."
      },
      {
       "mota": "testua",
       "html": "<strong>4. urratsa.</strong> 115 ez dagoenez onarpen eremuaren barruan, hipotesia ukatu egiten dugu. Hau da, ezin dugu ontzat eman unibertsitate horretako ikasleen batez besteko A.K. 113 dela."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "Aldebateko egiaztapena: <math display=\"inline\"><mrow><mi>μ</mi><mo>≤</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math> edo <math display=\"inline\"><mrow><mi>μ</mi><mo>≥</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>1. urratsa. Hipotesia:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>μ</mi><mo>≤</mo><msub><mi>μ</mi><mn>0</mn></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>μ</mi><mo>≥</mo><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ordezko hipotesiak <math display=\"inline\"><mrow><mi>μ</mi><mo>&gt;</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math> edo, <math display=\"inline\"><mrow><mi>μ</mi><mo>&lt;</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math> dira, hurrenez hurren."
    },
    {
     "mota": "testua",
     "html": "<strong>2. urratsa. Onarpen eremua</strong>"
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
         "src": "media/irudiak/edf0dd0a8a97540e.svg",
         "zabalera": 309
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "media/irudiak/1d3ea37c6aeebf5e.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kasu hauetan buztan osoa (onartzen ez den edo ukatzen den bitartea) banaketaren muturretako batean dago. Eskuineko taulako balio kritikoak <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> taulatik lortzen dira zuzenean."
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Onarpen eremua hau da:"
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
     "src": "media/irudiak/bf6d17c5edefd547.svg",
     "zabalera": 319
    },
    {
     "mota": "testua",
     "html": "<strong>3. eta 4. urratsak. Egiaztatu eta erabaki</strong>"
    },
    {
     "mota": "testua",
     "html": "Lagina atera, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> kalkulatu eta onarpen eremuaren barruan ala kanpoan dagoen egiaztatzen da."
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<em>Baserri bateko oiloen pisuak batez bestekoa 2,6 kg-koa eta desbideratze tipikoa 0,5 dituen banaketa normala dugu. Beste era bateko jatekoa ematen zaie 50 txitari. Handi egiten direnean, pisatu eta lortzen dugun batez bestekoa 2,78 kg da. Populazio osoaren pisua handitzen ez dela dioen hipotesia egiaztatuko dugu, esangura maila %1 izanik.</em>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>μ</mi><mo>≤</mo><mn>2</mn><mo>,</mo><mn>6</mn></mrow></math>.   Ordezko hipotesia <math display=\"inline\"><mrow><msub><mi>H</mi><mn>1</mn></msub><mo>:</mo><mi>μ</mi><mo>&gt;</mo><mn>2</mn><mo>,</mo><mn>6</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>01</mn><mo>→</mo><msub><mi>z</mi><mi>α</mi></msub><mo>=</mo><mn>2</mn><mo>,</mo><mn>33</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Onarpen eremua:"
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
       "src": "media/irudiak/59e71ecd4ccb078f.svg",
       "zabalera": 309
      },
      {
       "mota": "testua",
       "html": "Laginaren bidez lortutako balioa, 2,78 kg, onarpen eremutik kanpo geratu da. Beraz, <math display=\"inline\"><msub><mi>H</mi><mn>0</mn></msub></math> ukatzen dugu eta <math display=\"inline\"><msub><mi>H</mi><mn>1</mn></msub></math> onartzen (populazioaren pisua handitu egingo da elikagai berria emanda) esangura maila 0,01 izanik."
      }
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Hipotesiak proportzioari begira egiaztatu",
   "blokeak": [
    {
     "mota": "azpititulua",
     "testua": "Aldebiko egiaztapena: <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hipotesi nulua ezaugarri jakin bat duten indibiduoen proportzioari edo zorizko esperientzia batean gertaera baten probabilitateari balio bat ematea da."
    },
    {
     "mota": "testua",
     "html": "<strong>1. urratsa. Hipotesia.</strong>  <math display=\"inline\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>p</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>2. urratsa. Onarpen eremua</strong>"
    },
    {
     "mota": "testua",
     "html": "Badakigu <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mi>p</mi></mrow></math> baldin bada, orduan laginen proportzioek, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, banaketa hau izango dutela <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msqrt><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub><mi>/</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Beraz, onarpen eremua <math display=\"inline\"><mi>α</mi></math> esangura mailarako, kasu horri dagokion bitarte karakteristikoa da:"
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
     "src": "media/irudiak/d421d7fe5140072a.svg",
     "zabalera": 372
    },
    {
     "mota": "testua",
     "html": "<strong>3. eta 4. urratsak. Egiaztatu eta erabaki</strong>"
    },
    {
     "mota": "testua",
     "html": "Proportzioa, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, kalkulatzen da laginean eta onarpen eremuan dagoen ala ez dagoen egiaztatzen da. (Ikusi 308 eta 309. orrialdeetako 1. KASUA)."
    },
    {
     "mota": "azpititulua",
     "testua": "Aldebateko egiaztapena: <math display=\"inline\"><mrow><mi>p</mi><mo>≤</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math> edo <math display=\"inline\"><mrow><mi>p</mi><mo>≥</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math>"
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
         "<span class=\"j-iz\"><img class=\"irudi-l\" src=\"media/irudiak/9e3ef8275824a2fc.svg\" alt=\"\" style=\"width:187px\" loading=\"lazy\"></span>   <span class=\"j-iz\"><math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>,</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><msub><mi>z</mi><mi>α</mi></msub><mo>⋅</mo><msqrt><mrow><msub><mi>p</mi><mn>0</mn></msub><mfrac><msub><mi>q</mi><mn>0</mn></msub><mi>n</mi></mfrac></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math></span>",
         "<span class=\"j-iz\"><img class=\"irudi-l\" src=\"media/irudiak/daa7ebbe37cad9ce.svg\" alt=\"\" style=\"width:187px\" loading=\"lazy\"></span>   <span class=\"j-iz\"><math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo>−</mo><msub><mi>z</mi><mi>α</mi></msub><mo>⋅</mo><msqrt><mrow><msub><mi>p</mi><mn>0</mn></msub><mfrac><msub><mi>q</mi><mn>0</mn></msub><mi>n</mi></mfrac></mrow></msqrt><mo>,</mo><mi>∞</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math></span>"
        ]
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "3. eta 4. urratsetan, beti bezala, lagina hartu behar da, bertan <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> parametroa aurkitu behar da eta onarpen eremuan ote dagoen egiaztatu."
    },
    {
     "mota": "testua",
     "html": "Gogora ditzagun <math display=\"inline\"><mi>α</mi></math>-ren balioei dagozkien <strong>balio kritiko</strong>  erabilienak:"
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
     "izenburua": "Adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<em>Hauteskunde batzuetara A, B eta C alderdiak aurkeztu dira. Komentarista politiko batek hauteskunde-banaketa hau dela esan du:</em>"
      },
      {
       "mota": "testua",
       "html": "<em>A-ren alde %40</em>"
      },
      {
       "mota": "testua",
       "html": "   <em>B-ren alde %40 edo gehiago</em>     <em>C-ren alde %40 edo gutxiago</em>"
      },
      {
       "mota": "testua",
       "html": "<em>Hipotesi horiek 250 hautesleren lagina hartuta egiaztatu nahi dira.</em>"
      },
      {
       "mota": "testua",
       "html": "<em>a) Aurkitu hipotesi bakoitzaren onarpen eremua, esangura maila %5ekoa izanik.</em>"
      },
      {
       "mota": "testua",
       "html": "<em>b) Lagina atera ondoren, A-ren alde 132 hauteslek, B-ren alde 88 eta C-ren alde 30 agertu dira. Hartu hiru hipotesi horiei buruzko erabakiak.</em>"
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
       "html": "<strong>2. urratsa.</strong> Onarpen eremuak aurkitzeko, kontutan izan behar dugu hiru kasuetan laginen proportzioen, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, banaketa <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>4</mn><mo>;</mo><msqrt><mfrac><mrow><mn>0</mn><mo>,</mo><mn>4</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>6</mn></mrow><mn>250</mn></mfrac></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>4</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>031</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> izango dela. Kasu bakoitzaren onarpen eremua hau izango da:"
      },
      {
       "mota": "sarea",
       "zutabeak": "auto minmax(0,1fr)",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<strong>A:</strong>  <span class=\"j-iz\"><img class=\"irudi-l\" src=\"media/irudiak/e2b73dac86de29cd.svg\" alt=\"\" style=\"width:309px\" loading=\"lazy\"></span>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Aldebiko egiaztapenetan (bi &quot;buztan&quot;), <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math>-ri dagokion balio karakteristikoa <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn></mrow></math> da."
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
           "html": "<strong>B:</strong>  <span class=\"j-iz\"><img class=\"irudi-l\" src=\"media/irudiak/d9f2ce527af27043.svg\" alt=\"\" style=\"width:309px\" loading=\"lazy\"></span>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Aldebateko egiaztapenetan (&quot;buztan&quot; bat), <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math>-ri dagokion balio karakteristikoa <math display=\"inline\"><mrow><msub><mi>z</mi><mi>α</mi></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>645</mn></mrow></math> da."
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
           "html": "<strong>C:</strong>  <span class=\"j-iz\"><img class=\"irudi-l\" src=\"media/irudiak/0c07e9fe1893607e.svg\" alt=\"\" style=\"width:309px\" loading=\"lazy\"></span>"
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
       "html": "<strong>b) 3. eta 4. urratsak</strong>"
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
       "html": "Harrigarria dirudi B alderdiari dagokion hipotesia onartzea (&quot;Bere boto emaileen proportzioa %40koa edo handiagoa da&quot;), guk proportzio txikiagoa lortuta (%35,2)."
      },
      {
       "mota": "testua",
       "html": "Beraz, hurrengo hipotesia ere onartu beharko genuke B-rentzat: &quot;boto emaileen proportzioa %40koa edo txikiagoa da&quot;. Azalpena erraza da: egon daitezkeen emaitzetatik %5 bakarrik ukatzen ditugu gertagaitz direlakoan. Horregatik, &quot;hipotesia onartzen da&quot; esan beharrean, egokiagoa litzateke &quot;ez dago hipotesia ukatzeko arrazoi nahikorik&quot; esatea."
      }
     ]
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Hipotesien egiaztapenean egon daitezkeen akatsak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Test estatistikoa ezartzen dugunean, bi erako akatsak egin ditzakegu:"
    },
    {
     "mota": "testua",
     "html": "<strong>I. MOTAKO AKATSA.</strong> Hipotesi nulua egia denean eta, egiaztapenaren ondorioz, ukatzen denean egiten dena."
    },
    {
     "mota": "testua",
     "html": "<strong>II. MOTAKO AKATSA.</strong> Hipotesi nulua faltsua denean eta, egiaztapenaren ondorioz, onartzen denean egiten dena."
    },
    {
     "mota": "testua",
     "html": "Jakina, testa erabiltzen dugunean ez dakigu akatsik egiten dugun. Baina ahalegindu gaitezke mota bateko eta besteko akatsa egiteko zein probabilitate dagoen ebaluatzen eta akatsa egiteko probabilitateak ahal denik eta gehien txikitzeko moduan diseinatu dezakegu esperientzia."
    },
    {
     "mota": "testua",
     "html": "Probabilitate horiek adibide batean aztertuko ditugu:"
    },
    {
     "mota": "testua",
     "html": "<em>UBIko nesken altueren batez bestekoa, 1990ean, 167 cm zen eta desbideratze tipikoa 7 cm. Batxilergoko 2. mailako aurtengo ikasleek batez beste bera dutela emango dugu hipotesitzat, <math display=\"inline\"><msub><mi>H</mi><mn>0</mn></msub></math>: Hipotesia egiaztatu egingo dugu, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>60</mn></mrow></math> tamainako lagina erabiliz eta esangura maila <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>10</mn></mrow></math> izanik.</em>"
    },
    {
     "mota": "testua",
     "html": "Onarpen eremu hau lortzen dugu: <math display=\"block\"><mrow><mn>167</mn><mo>±</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>⋅</mo><mfrac><mn>7</mn><msqrt><mn>60</mn></msqrt></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>165</mn><mo>,</mo><mn>51</mn><mo>;</mo><mn>168</mn><mo>,</mo><mn>49</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lagina hartzean <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>168</mn><mo>,</mo><mn>72</mn></mrow></math> lortzen badugu, hipotesia ukatu egingo dugu. Baina oker egon gaitezke. Hau da, I. motako akatsa egin dezakegu."
    },
    {
     "mota": "testua",
     "html": "Lagina ateratzean <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>168</mn><mo>,</mo><mn>12</mn></mrow></math> lortzen badugu, hipotesia onartu egiten dugu. Baina oker egon gaitezke eta II. motako akatsa egin dezakegu."
    },
    {
     "mota": "azpititulua",
     "testua": "Mota bateko edo besteko akatsa egiteko probabilitatea"
    },
    {
     "mota": "testua",
     "html": "<strong>I. motako akatsa</strong> egiteko probabilitatea <math display=\"inline\"><mi>α</mi></math>, esangura maila, da. Izan ere, hipotesia egia bada, laginen batez bestekoen <math display=\"inline\"><mrow><mi>α</mi><mo>⋅</mo><mi>%</mi><mn>100</mn></mrow></math> ukatuko dugu. Probabilitate hau ez da laginaren tamainaren araberakoa."
    },
    {
     "mota": "testua",
     "html": "<strong>II. motako akatsa</strong> egiteko probabilitatea <math display=\"inline\"><mi>μ</mi></math>-ren benetako balioaren eta laginaren tamainaren araberakoa da. Batez bestekoaren benetako balioa <math display=\"inline\"><mi>μ</mi></math> bada eta <math display=\"inline\"><msub><mi>μ</mi><mn>0</mn></msub></math> hipotesiaren bidez ezartzen dioguna <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>μ</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> bada, oinarrian desberdinak dira; izan ere II. motako akatsa egiten dugula jotzen dugu eta. Laginen batez bestekoen benetako banaketa kurba gorriek adierazten dutena da (<math display=\"inline\"><mi>μ</mi></math> batez bestekoa)."
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
         "src": "media/irudiak/333347798247b480.svg",
         "zabalera": 432
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "media/irudiak/d68c563346c1ebc5.svg",
         "zabalera": 475
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kurba beltzak ustezko banaketak dira (<math display=\"inline\"><msub><mi>μ</mi><mn>0</mn></msub></math> batez bestekoa). Euren gainean ezartzen dira onarpen eremuak. Azalera gorriak, kasuan kasu, <math display=\"inline\"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mi>μ</mi></mrow></math> hipotesia laginen zein proportziotan izango den onargarria adieraziko digu eta, beraz, II. motako akatsa egiteko zein probabilitate dagoen. Argi dago lagin handien kasuan probabilitate hau askoz txikiagoa dela."
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
   "izenburua": "11. Ebatzitako ariketak eta problemak",
   "blokeak": [
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[1   KONFIANTZA BITARTEA BATEZ BESTEKOARENTZAT]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Abeltzain batek bere ganaduko zezenen batez besteko pisua estimatu nahi du %95eko konfiantza mailarekin. Horretarako, 30 zezeneko lagina hartzen du eta pisatu egiten ditu. Lortzen duen batez bestekoa <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>507</mn></mrow></math> kg da eta desbideratze tipikoa <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mn>32</mn></mrow></math> kg."
        },
        {
         "mota": "testua",
         "html": "Zein izango da populazioaren <math display=\"inline\"><mi>μ</mi></math> batez bestekorako konfiantza bitartea?"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Ebazpena</em>"
    },
    {
     "mota": "testua",
     "html": "Populazioaren desbideratze tipikoa, <math display=\"inline\"><mi>σ</mi></math>, zein den ez dakigunez, laginetik, <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mn>32</mn></mrow></math>, abiatuta estimatuko dugu."
    },
    {
     "mota": "testua",
     "html": "Aurkitu nahi dugun bitartearen erradioa (akats onargarri maximoa) hau da: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>s</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math> konfiantza mailarako balio kritikoa <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn></mrow></math> da. Beraz:"
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
     "html": "Bila gabiltzan bitartea hau da: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>507</mn><mo>±</mo><mn>11</mn><mo>,</mo><mn>45</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>495</mn><mo>,</mo><mn>45</mn><mo>;</mo><mn>518</mn><mo>,</mo><mn>45</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>."
    },
    {
     "mota": "testua",
     "html": "<em>Ondorioa:</em>"
    },
    {
     "mota": "testua",
     "html": "Abeltzainak %95eko konfiantza mailaz esan dezake bere zezenen batez besteko pisua 495,45 kg-tik gorakoa eta 518,45 kg-tik beherakoa izango dela."
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[2   BATEZ BESTEKOAREN ESTIMAZIOA. KONFIANTZA MAILA]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Hiri bateko 16 urteko nesken batez besteko pisua estimatzeko, 100 neskaren zorizko lagina hartzen da. Ondoko parametroak lortzen dira: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>52</mn><mo>,</mo><mn>5</mn></mrow></math> kg, <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mn>5</mn><mo>,</mo><mn>3</mn></mrow></math> kg."
        },
        {
         "mota": "testua",
         "html": "Ondoko baieztapena egin da: hiri horretako 16 urteko nesken batez besteko pisua 51 eta 54 kg bitartekoa da. Zein konfiantza mailaz egin da baieztapena?"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Ebazpena</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math>, akats maximo onargarriaren formulan, ondoko ezagutzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mi>E</mi></math> bitartearen erdia da. Beraz, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mn>54</mn><mo>−</mo><mn>51</mn></mrow><mn>2</mn></mfrac><mo>=</mo><mn>1</mn><mo>,</mo><mn>5</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>σ</mi></math>-ren balioa <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mn>5</mn><mo>,</mo><mn>3</mn></mrow></math>-tik abiatuta estimatzen da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mn>100</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, <math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math> lortzen dugu:"
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
     "html": "<math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math> aurkituko dugu <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>2</mn><mo>,</mo><mn>83</mn></mrow></math>-tik abiatuz:"
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
     "src": "media/irudiak/487915673a141fcf.svg",
     "zabalera": 314
    },
    {
     "mota": "testua",
     "html": "Hiri horretako 16 urteko nesken batez besteko pisua 51 eta 54 kg bitartekoa dela, %99,54ko konfiantza mailaz, dago baieztatuta."
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[3   BATEZ BESTEKOA ESTIMATU. LAGINAREN TAMAINA]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Multzo jakin baten adimen koefizientearen batez bestekoa <math display=\"inline\"><mi>μ</mi></math>, ezezaguna, da eta desbideratze tipikoa <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>8</mn></mrow></math>."
        },
        {
         "mota": "testua",
         "html": "Zein tamainakoa izan behar du batez bestekoa estimatzeko hartu behar dugun laginak, konfiantza mailak %99koa izan behar badu eta akats onargarriak <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>3</mn></mrow></math>?"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Ebazpena</em>"
    },
    {
     "mota": "testua",
     "html": "Akats maximo onargarria hau da: <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math>. Adierazpen horretan honakoak ezagutzen ditugu:"
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
     "html": "Beraz: <math display=\"block\"><mrow><mn>3</mn><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mfrac><mn>8</mn><msqrt><mi>n</mi></msqrt></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msqrt><mi>n</mi></msqrt><mo>=</mo><mfrac><mrow><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mn>8</mn></mrow><mn>3</mn></mfrac><mo>=</mo><mn>6</mn><mo>,</mo><mn>87</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>47</mn><mo>,</mo><mn>15</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "48 indibiduoko lagina hartu beharko dugu."
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[4   PROBABILITATE BATEN ESTIMAZIOA]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Txanpon bat 100 aldiz bota dugu eta 62tan &quot;busti&quot; lortu dugu. Estimatu &quot;busti&quot; ateratzeko dagoen probabilitatea %90, %95 eta %99ko konfiantza bitarteen bidez."
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Ebazpena</em>"
    },
    {
     "mota": "testua",
     "html": "Populazio infinitua hartuko dugu eta populazio hori eratuko dute txanpon horrekin egindako botaldi guztiek. Populazio horren &quot;busti&quot; proportzioa, <math display=\"inline\"><mi>p</mi></math>, txanpon horrekin &quot;busti&quot; ateratzeko probabilitatea izango da."
    },
    {
     "mota": "testua",
     "html": "100 indibiduoko lagina dugu eta bere bitartez <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>62</mn></mrow></math> parametroa lortuko dugu. Hortik abiatuz estimatuko dugu <math display=\"inline\"><mi>p</mi></math>."
    },
    {
     "mota": "testua",
     "html": "Desbideratze tipikoa hau da: <math display=\"block\"><mrow><mi>s</mi><mo>=</mo><msqrt><mfrac><mrow><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mn>0</mn><mo>,</mo><mn>62</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>38</mn></mrow><mn>100</mn></mfrac></msqrt><mo>=</mo><mn>0</mn><mo>,</mo><mn>0485</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eskatu diguten konfiantza mailei dagozkien konfiantza bitarteak hauek dira:"
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
         "testua": "[5   LAGINAREN TAMAINA PROPORTZIO BAT ESTIMATZEKO]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Aurreko problema oinarritzat hartuta, &quot;busti&quot; lortzeko probabilitatea estimatu nahi dugu akatsa 0,002 baino txikiagoa eta konfiantza maila %95ekoa izanik."
        },
        {
         "mota": "testua",
         "html": "Zenbat aldiz bota beharko dugu txanpona?"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Ebazpena</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mfrac><mrow><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac></msqrt></mrow></math> akatsaren bornearen adierazpenean, honakoak ezagutzen ditugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>002</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn></mrow></math>  <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math>-ri dagokiona<math display=\"inline\"><mo stretchy=\"false\" form=\"postfix\">)</mo></math>, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>62</mn></mrow></math> aurreko ariketatik hartuta."
    },
    {
     "mota": "testua",
     "html": "Datu horiekin <math display=\"inline\"><mi>n</mi></math> bakandu dezakegu:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/580d0c37b21972db.svg\" alt=\"n = (z_(alpha\\/2)^2 dot p r(1-p r))/E^2 = (1,96^2 dot 0,62 dot 0,38)/(0,000004) = 226#h(2pt)270,24\" style=\"width:28.405em;height:3.224em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Txanpona 226 271 aldiz bota beharko dugu akatsa bi milarenekoa baino txikiagoa eta konfiantza maila %95ekoa izatea nahi badugu probabilitatea estimatzean."
    },
    {
     "mota": "testua",
     "html": "Lagin horretan lortutako &quot;busti&quot;en proportzioa, <math display=\"inline\"><mrow><mi>p</mi><msub><mi>r</mi><mn>0</mn></msub></mrow></math> bada, %95eko konfiantzaz baieztatu dezakegu &quot;busti&quot;  probabilitatea: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><msub><mi>r</mi><mn>0</mn></msub><mo>−</mo><mn>0</mn><mo>,</mo><mn>002</mn><mo>;</mo><mi>p</mi><msub><mi>r</mi><mn>0</mn></msub><mo>+</mo><mn>0</mn><mo>,</mo><mn>002</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> bitartean egongo dela."
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[6   PROPORTZIO BATEN ESTIMAZIOA]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Urmael batean dagoen arrain kopurua estimatzeko, honela jokatzen dugu: sarea erabiliz zenbait arrain hartu (349), marka jartzen diegu (badaude urarekin joaten ez diren tintak) eta berriro urmaelera botako ditugu. Handik egun batzuetara berriro hartu beste arrain mordo bat eta marka zein proportziok duen ikusten dugu. Bigarren arrantza horretan 514 arrain lortu ditugu eta euretatik 37 dira markadunak."
        },
        {
         "mota": "testua",
         "html": "<em>a)</em>"
        },
        {
         "mota": "testua",
         "html": "Aurkitu konfiantza bitarte bat, %90ekoa, urmaeleko markadun arrainen proportziorako."
        },
        {
         "mota": "testua",
         "html": "<em>b)</em>"
        },
        {
         "mota": "testua",
         "html": "Aurkitu konfiantza bitarte bat, %90ekoa, marka duten arrain guztientzat."
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Ebazpena</em>"
    },
    {
     "mota": "testua",
     "html": "<strong>a)</strong> Lagina 514 arrainek osatzen dute. Horietatik 37 dira markadunak."
    },
    {
     "mota": "testua",
     "html": "Laginean markadun arrainen proportzioa hau da: <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mfrac><mn>37</mn><mn>514</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>072</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Populazio horretan <math display=\"inline\"><mi>p</mi></math> proportziorako konfiantza bitarte bat aurkitzeko laginean lortutako <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> proportziotik abiatuta, akats maximo onargarria hau da:"
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
     "html": "Beraz, <math display=\"inline\"><mi>p</mi></math>-rentzako konfiantza bitartea, %90ekoa, hau da: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>072</mn><mo>±</mo><mn>0</mn><mo>,</mo><mn>019</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>053</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>091</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>."
    },
    {
     "mota": "testua",
     "html": "<strong>b)</strong> Urmaeleko arrain kopuru osoarentzat, <math display=\"inline\"><mi>N</mi></math>, konfiantza bitarte bat aurkitzeko, kontutan izan behar dugu markadun arrainen proportzioa <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mfrac><mn>349</mn><mi>N</mi></mfrac></mrow></math> dela."
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/8eb31e347fb6e5f7.svg\" alt=\"0,053=349/N_1 quad arrow.r quad N_1=349/(0,053) approx 6#h(2pt)585\" style=\"width:20.108em;height:2.859em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/f58093496df2edcb.svg\" alt=\"0,091=349/N_2 quad arrow.r quad N_2=349/(0,091) approx 3#h(2pt)835\" style=\"width:20.108em;height:2.859em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "%90eko konfiantza mailaz dakigu urmaeleko arrain kopurua <img class=\"formula\" src=\"media/formulak/968f85bac09bea7c.svg\" alt=\"[3#h(2pt)835, 6#h(2pt)585]\" style=\"width:6.429em;height:1.001em\" loading=\"lazy\"> bitartean dagoela."
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[7   PROBABILITATE BATI BURUZKO HIPOTESIAREN TESTA]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Pentsatu ondoko esperientzia hauetako bakoitzaren inguruan:"
        },
        {
         "mota": "testua",
         "html": "<em>a)</em>"
        },
        {
         "mota": "testua",
         "html": "Txanpon bat 10 aldiz bota eta 6 &quot;busti&quot; lortzen ditugu."
        },
        {
         "mota": "testua",
         "html": "<em>b)</em>"
        },
        {
         "mota": "testua",
         "html": "Txanpon bat 100 aldiz bota eta 60 &quot;busti&quot; lortzen ditugu."
        },
        {
         "mota": "testua",
         "html": "<em>c)</em>"
        },
        {
         "mota": "testua",
         "html": "Txanpon bat 1000 aldiz bota eta 600 &quot;busti&quot; lortzen ditugu."
        },
        {
         "mota": "testua",
         "html": "Esperientzia horietakoren batetik ondoriotzat txanponak akatsen bat duela atera dezakegu?"
        },
        {
         "mota": "testua",
         "html": "<em>(Intuizio bidez ebazteko proposatu dugu honako problema hau gaiko hasierako orrialdeetan: 299 orrialdea.)</em>"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Ebazpena</em>"
    },
    {
     "mota": "testua",
     "html": "<strong>1. urratsa. Hipotesia</strong>"
    },
    {
     "mota": "testua",
     "html": "Hiru esperientzia horietan egiaztatu nahi dugun hipotesia hau da:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>p</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>     (hau da, &quot;txanponak ez du akatsik&quot;)"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>2. urratsa: Ondorioak atera. Onarpen eremua lortu</strong>"
    },
    {
     "mota": "testua",
     "html": "Kasu guztietan <math display=\"inline\"><mrow><mi>n</mi><mi>p</mi><mo>=</mo><mi>n</mi><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>≥</mo><mn>5</mn></mrow></math> denez, laginen batez bestekoen banaketa hau izango da:"
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
     "html": "Onarpen eremuak, <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>01</mn></mrow></math> esangura maila baterako, hauek dira:"
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
     "html": "<strong>3. urratsa: Egiaztatu</strong>"
    },
    {
     "mota": "testua",
     "html": "Orain atera behar dugu lagina eta &quot;busti&quot;en proportzioa kalkulatu."
    },
    {
     "mota": "testua",
     "html": "Hiru kasuetan hau lortu dugu: <math display=\"block\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>6</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>6</mn><mn>10</mn></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mfrac><mn>60</mn><mn>100</mn></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mfrac><mn>600</mn><mn>1000</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>4. urratsa: Erabaki</strong>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/3978f53263174c7d.svg",
     "zabalera": 473
    },
    {
     "mota": "testua",
     "html": "Laginetan lortu dugun <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>-ren balioa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>r</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> onarpen eremuaren barruan dago <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>10</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>100</mn></mrow></math> kasuetan; baina onarpen eremutik kanpo dago <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1000</mn></mrow></math> kasuan."
    },
    {
     "mota": "testua",
     "html": "Txanponak akatsik ez duela dioen hipotesia c) kasuan bakarrik ukatuko dugu."
    },
    {
     "mota": "testua",
     "html": "Proba honen emaitza bat dator intuizio bidez lortzen dugunarekin: 10 botalditan 6 &quot;busti&quot; lortzen baditugu, emaitza baliokoa dela iruditzen zaigu. 10 botalditan 2 eta 8 &quot;busti&quot; bitarteko edozein emaitza lasai onartuko genuke."
    },
    {
     "mota": "testua",
     "html": "100 botalditan gehiago kostatzen zaigu <math display=\"inline\"><mfrac><mn>1</mn><mn>2</mn></mfrac></math> proportzioari buruzko zenbait desbideratze."
    },
    {
     "mota": "testua",
     "html": "Baina 1 000 botalditan, nahiz eta <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>01</mn></mrow></math> hartzeko bezain permisiboak izan, ez da onartzeko modukoa, zoriz, akatsik ez duen txanpon batekin egindako botaldien %60 &quot;busti&quot; izatea. Txanponak akatsen bat izan behar du!"
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[8   PROPORTZIORAKO HIPOTESIEN TESTA (ALDEBATEKOA)]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Azkeneko hauteskundeetan, herri bateko hautesleen %53k alkatearen alde egin du. Duela gutxi, zoriz aukeratutako 360 pertsonari galdeketa egin zaie eta 176k adierazi dute alkatearen alde daudela."
        },
        {
         "mota": "testua",
         "html": "Alkateak herrian indarra edukitzen jarraitzen duela baieztatu dezakegu %90eko esangura mailaz?"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Ebazpena</em>"
    },
    {
     "mota": "testua",
     "html": "<strong>1. urratsa: Hipotesia</strong>"
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
     "html": "Alkatearen aldeko hautesleen proportzioa azkeneko hauteskundeetakoaren bestekoa edo handiagoa da."
    },
    {
     "mota": "testua",
     "html": "<strong>2. urratsa: Onarpen eremua</strong>"
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
     "html": "<math display=\"block\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mn>53</mn></mrow></math>;    <math display=\"inline\"><mrow><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>53</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>47</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>z</mi><mi>α</mi></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>28</mn></mrow></math>;    <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>360</mn></mrow></math>"
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
     "html": "<strong>3. urratsa: Egiaztatu</strong>"
    },
    {
     "mota": "testua",
     "html": "Laginean <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mfrac><mn>176</mn><mn>360</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>489</mn></mrow></math> proportzioa lortzen dugu."
    },
    {
     "mota": "testua",
     "html": "<strong>4. urratsa: Erabaki</strong>"
    },
    {
     "mota": "testua",
     "html": "Laginean lortu dugun alkatearen aldekoen proportzioa onarpen eremutik kanpo geratzen da. Beraz, hipotesia ukatzen dugu: ezin dugu esan alkateak indar bera duenik. Hau da, alkatearen aldekoak gutxiago direla onartzen dugu."
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "11. Proposatutako ariketak eta problemak",
   "blokeak": [
    {
     "mota": "azpititulua",
     "testua": "Trebatzeko ariketak"
    },
    {
     "mota": "ariketa",
     "izena": "1",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Enpresa batek egiten dituen bonbillen iraupenak banaketa normala du, batez bestekoa ezezaguna izanik eta desbideratze tipikoa 50 ordukoa. Iraupena estimatzeko <math display=\"inline\"><mi>n</mi></math> tamainako lagin batekin egiten dira esperientziak."
      },
      {
       "mota": "testua",
       "html": "Kalkulatu zein izango den <math display=\"inline\"><mi>n</mi></math>-ren balioa, estimazioan 5 ordu baino gutxiagoko akatsa lortu ahal izateko %95eko konfiantza mailaz."
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
       "html": "350 familiari galdeketa egin zaie. Etxean ordenadorerik ote duten itaundu zaie eta 75 etxetan badagoela jakin dugu. Estimatu zein den etxean ordenadorea duten familien benetako proportzioa konfiantza maila %95ekoa izanik."
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
       "html": "500 pertsonako lagina hartu dugu Euskal Herrian zoriz. 220 pertsonak egunero egunkariren bat irakurtzen duela jakin dugu. %95eko konfiantza mailaz, kalkulatu zein bitartetan egongo den egunkaria irakurtzen dutenen benetako proportzioa eta azaldu kalkulu hori egiteko erabilitako prozesua."
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
       "html": "Zein tamainatakoa hartu beharko dugu produkzio lerro baten lagina, estimatutako proportzioa benetakotik %4 baino gehiago ez dela aldenduko jakiteko %95eko konfiantzaz? Aldez aurreko azterketa batzuen arabera, akastun produktuen proportzioa 0,05 dela badakigu."
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
       "html": "Erreakzio denborak neurtzean, psikologoak erreakzioaren desbideratze tipikoa 0,5 segundo dela estimatu du. Zenbat neurketa egin beharko ditu bere estimazioaren akatsa 0,05 segundokoa baino gehiagokoa ez dela izango jakiteko, %95eko konfiantzaz?"
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
       "html": "50 gazteko laginean astialdian egiten duten denboraren eguneko batez bestekoa 400 minutu da eta desbideratze tipikoa 63 minutu. Kalkulatu populazioaren batez bestekoaren konfiantza bitartea, konfiantza maila %95ekoa izanik."
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
       "html": "Autonomia erkidego jakin bateko Batxilergoko ikasleek ordu kopuru jakin batean egiten dute lo egunero. Ordu kopuru hori, <math display=\"inline\"><mi>μ</mi></math> batez besteko ezezaguna eta 3ko desbideratze tipikoa duen legearen arabera dago banatuta. Tamaina 30eko duen laginetik abiatuz, laginaren batez bestekoa lortu dugu: 7 ordu."
      },
      {
       "mota": "testua",
       "html": "Aurkitu %95eko konfiantza duen bitartea, <math display=\"inline\"><mi>μ</mi></math>, orduen batez bestekorako."
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
       "html": "Enpresa batek egiten dituen kojineteen diametroa neurtzean, diametro horren desbideratze tipikoa 0,05 cm dela estimatu dugu. 121 neurketa egin ditugu."
      },
      {
       "mota": "testua",
       "html": "Baieztatu dezakegu, %99ko konfiantza mailaz, neurketaren estimazioan egongo den akatsa ez dela 0,01 cm baino handiago izango?"
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
       "html": "Dentista batek baieztatu du 10 urteko umeen %40ak txantxarra duela haginetan. 100 umeko lagina hartu dugu eta 30ek txantxarra dutela ikusi dugu."
      },
      {
       "mota": "testua",
       "html": "Hurbilketa normala erabiliz, egiaztatu emaitza horren arabera dentistak esandakoa gezurtatu dezakegun, esangura maila %5ekoa izanik."
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
       "html": "Enpresa batek egiten dituen 100 watteko bonbillen iraupenak banaketa normala du, desbideratze tipikoa 120 ordukoa izanik. Batez besteko iraupena 800 ordukoa duela egiaztatzen du enpresak. Zoriz multzo bateko 50 bonbilla hartu ditugu eta, egiaztatu ondoren, batez besteko iraupena 750 ordukoa dutela ikusi dugu."
      },
      {
       "mota": "testua",
       "html": "Esangura maila 0,01ekoa izanik, multzoa atzera bota beharko genuke garantia ez betetzearren?"
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
       "html": "Lanpara elektrikoen egile bat produkzio metodo berria probatzen ari da. Ontzat emango diote metodoa lortzen dituen lanparek batez besteko iraupena 2.400 ordukoa eta desbideratze tipikoa 300ekoa duen populazio normala sortzen badute."
      },
      {
       "mota": "testua",
       "html": "Metodo horren bidez egindako lanparen artean 100 hartzen dira lagintzat eta batez besteko iraupena 2 320 ordukoa dutela lortzen dugu emaitzatzat. Ontzat eman dezakegu produkzio metodo berria baliagarria dela dioen hipotesia, %5aren pareko edo txikiagoko arriskuaz?"
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
       "html": "Farmaziarako produktuak egiten dituen enpresak iragarkietan dioenaren arabera, euren botika batek udaberriko alergiaren sintomak populazioaren %90ean txikitzen ditu. Kontsumitzaileen elkarte batek botika hori 200 kideko laginean probatu du eta iragarkian esaten dena 170 pertsonarengan bete dela ikusi du."
      },
      {
       "mota": "testua",
       "html": "Erabaki kontsumitzaileen elkarteak enpresaren baieztapena estatistikei begira ontzat eman dezakeen, esangura maila 0,05ekoa izanik."
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
       "html": "Larrialdi zerbitzu batean, gaixoa hartu arte dagoen itxarote denborak (minututan) probabilitatearen eredu normala duela ikusi da. Zerbitzu horretara joan ziren 100 pertsonako lagina hartuta, batez besteko itxarote denbora 14,25 minutukoa eta desbideratze tipikoa 2,5 minutukoa dela kalkulatu da."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Itxarote denbora larrialdi zerbitzu honetan 15 minutukoa ez dela baieztatu dezakegu, esangura maila %5ekoa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik?"
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Zein ondorio atera dezakegu esangura maila %0,1ekoa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>001</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> balitz?"
      },
      {
       "mota": "testua",
       "html": "<em>c)</em>"
      },
      {
       "mota": "testua",
       "html": "Kontrakotasunik badago egoera bien artean?"
      },
      {
       "mota": "testua",
       "html": "Justifikatu erantzunak."
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
       "html": "Xaboi pastilek 11 egun edo gehiago irauten dutela dioen hipotesia egiaztatu nahi da. Horretarako 100 galdeketa egin dira. Erantzunak hauek dira:"
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
       "html": "Hipotesia esangura maila <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math> izanik egin daiteke?"
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
       "html": "Laboratorio batek dioenez, lasaigarri batek 14 minututan kentzen du buruko mina kasu arruntetan. Informazio hori egiaztatu nahian, buruko mina duten 30 gaixo aukeratzen dira zoriz eta esperientzian aldagaitzat lasaigarria hartu denetik buruko mina kendu artean dagoen denbora hartzen da."
      },
      {
       "mota": "testua",
       "html": "Lagin horretan lortutako emaitzak hauek izan ziren: batez bestekoa 17 minutu eta desbideratze tipikoa 7 minutu. Onargarritzat jo dezakegu laboratorioaren baieztapena %95eko konfiantza mailaz?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Galdera teorikoak</strong>"
    },
    {
     "mota": "ariketa",
     "izena": "16",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "500 indibiduoko laginarekin, urte jakin bateko soldaduen batez besteko altuera 174,3 eta 175,1 cm bitartekoa dela estimatu dugu %90eko konfiantza mailaz (hasierako orrialdeko problema, 298. or.)."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Populazioaren desbideratze tipikoa ezezaguna bazen, aurkitu laginaren <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> batez bestekoa eta desbideratze tipikoa, <math display=\"inline\"><mi>s</mi></math>."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Zein izango litzateke bitartea laginaren tamaina laurdena <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>500</mn><mo>:</mo><mn>4</mn><mo>=</mo><mn>125</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izango balitz eta konfiantza maila bera izango bagenu?"
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
       "html": "Zorizko lagin batetik abiatuta, talde bateko zezenen pisua estimatu dugu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>443</mn><mo>,</mo><mn>528</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bitartearen bidez. Zein da lortutako laginaren batez bestekoa?"
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
       "html": "100 indibiduoko lagin baten bitartez, pertsona multzo baten altuera estimatzen dugu konfiantza maila %95ekoa izanik. Lortu dugun akatsa maximo onargarria <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>274</mn></mrow></math> da. Zein da lortutako laginaren desbideratze tipikoa?"
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
       "html": "Tamaina 400ekoa duen lagin batetik abiatuta, hiri handi batean egunkaria irakurtzen duten indibiduoen proportzioa estimatzen da. Lortu dugun akatsaren bornea 0,0392 da, konfiantza maila %95ekoa izanik."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Lagin berarekin estimazioaren konfiantza maila hobetu egin dezakegu? Zer gertatuko litzaioke akatsaren borneari?"
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Badakizu laginean lortutako proportzioa, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, kalkulatzen?"
      }
     ]
    }
   ]
  },
  {
   "id": "a23",
   "maila": 1,
   "izenburua": "Koadernotik (CAx) — estimazioa eta konfiantza-tarteak",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "CAx cuaderno amarillo metmat probabilidad ingles",
     "xehetasuna": "CAx, 18.-19. orrialdeak (0011 unitatea, orri bikoitza; #CAxp18/#CAxp19): Bayes hiru hornitzailerekin, oinarri-tasaren paradoxa eta neurketen estatistika. ⚠ HIZKUNTZA-ALDAKETA: koadernoa ingelesetik euskarara pasatzen da hemen (triajearen aurreikuspenaren aurkakoa); euskarazko enuntziatuak partzialki irakurgaitzak, garapena osorik irakurgarria eta egiaztatua. Lau ariketa: (1) mikrotxipak, Bayes 3 hornitzailerekin (ingelesez), Pr(X|1)=0,005/0,0094=0,532; (2) tesi-lana 4 kokapenetan, Pr(A_1|B̄)=(1-p)/(4-p), osagarria 3/(4-p); (3) Salamancako taberna, oinarri-tasaren paradoxa, Pr(D|E)=0,0107 (Bayes zuhaitza eskuizkributik berregina, CeTZ); (4) A magnitudearen 6 neurketa: batez bestekoa 32,96, s^2=62,29, Bessel sigma=8,64, %80 CI [28,445, 37,475]. Zuzenketarik ez (14 emaitza egiaztagarri, 14ak zuzenak, Python/scipy/SymPy-z). Konfiantza ertaina (euskarazko zatiak irakurgaitzak)",
     "hizkuntza": "en/eu"
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Bayes hiru hornitzailerekin, oinarri-tasaren paradoxa eta neurketen estatistika",
   "blokeak": [
    {
     "mota": "testua",
     "html": "CAx koaderno horiaren 18.-19. orri bikoitza.  Orri hauetan koadernoa *ingelesetik euskarara* pasatzen da (lehen aldiz CAx sortan). Ezkerreko goialdea ingelesez dago oraindik (mikrotxipen Bayes-en problema, hitzez hitz aipatua); behealdea eta eskuineko orri osoa *euskaraz* idatzita daude, abiadura handian, eta enuntziatuetako hainbat hitz *irakurgaitzak* dira. Garapen matematikoa, aldiz, irakurgarria da eta bere osotasunean egiaztatu da. "
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Mikrotxipak: Bayes hiru hornitzailerekin (ingelesez)"
    },
    {
     "mota": "testua",
     "html": "<strong>Enuntziatua (ingelesez):</strong> «An electronics assembly firm buys its microchips from three different suppliers: half of them are bought from firm X, whilst firms Y and Z supply <math display=\"inline\"><mrow><mn>30</mn><mi>%</mi></mrow></math> and <math display=\"inline\"><mrow><mn>20</mn><mi>%</mi></mrow></math> respectively. The percentages of defective chips are <math display=\"inline\"><mrow><mn>2</mn><mi>%</mi></mrow></math>, <math display=\"inline\"><mrow><mn>4</mn><mi>%</mi></mrow></math> and <math display=\"inline\"><mrow><mn>4</mn><mi>%</mi></mrow></math> for X, Y and Z. The probabilities that a defective chip will fail two or more assembly-line tests are <math display=\"inline\"><mrow><mn>40</mn><mi>%</mi></mrow></math>, <math display=\"inline\"><mrow><mn>60</mn><mi>%</mi></mrow></math> and <math display=\"inline\"><mrow><mn>80</mn><mi>%</mi></mrow></math>, whilst all defective chips have a <math display=\"inline\"><mrow><mn>10</mn><mi>%</mi></mrow></math> chance of escaping detection. An assembler finds a chip that fails only one test. What is the probability that it came from supplier X?»"
    },
    {
     "mota": "testua",
     "html": "Test-kopuruak (<math display=\"inline\"><mn>0</mn></math>, <math display=\"inline\"><mn>1</mn></math> edo <math display=\"inline\"><mrow><mo>≥</mo><mn>2</mn></mrow></math> huts) elkarren baztertzaileak direnez, X hornitzailearen txip batek test <strong>bakarra</strong> huts egiteko probabilitatea akastuna izatea (<math display=\"inline\"><mrow><mn>2</mn><mi>%</mi></mrow></math>) eta beste bi kasuetan ez erortzea da: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>X</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>2</mn><mn>100</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>40</mn><mn>100</mn></mfrac><mo>−</mo><mfrac><mn>10</mn><mn>100</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>02</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>50</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>01</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>4</mn><mn>100</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>60</mn><mn>100</mn></mfrac><mo>−</mo><mfrac><mn>10</mn><mn>100</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>04</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>30</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>012</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>4</mn><mn>100</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>80</mn><mn>100</mn></mfrac><mo>−</mo><mfrac><mn>10</mn><mn>100</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>04</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>10</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>004</mn><mi>.</mi></mrow></math> Bayes-en teorema (eskuizkribuko lauki gorria) hiru hipotesitara zabaltzen da, hiru hornitzaileek partizioa osatzen baitute (<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Pr</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>X</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>Y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>Z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math></span>):"
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
     "testua": "Tesi-lana lau kokapenetan: probabilitate baldintzatua (euskaraz)"
    },
    {
     "mota": "testua",
     "html": "<strong>Enuntziatua (euskaraz, partzialki irakurgaitza):</strong> gradu-amaierako lan bat lau kokapenetako batean gordeta dago, eta <math display=\"inline\"><mi>p</mi></math> probabilitatearekin gal daiteke. Kokapen batean bilatu eta <strong>aurkitu ez</strong> dugularik (<math display=\"inline\"><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover></math>), zein da lana lehen kokapenean (<math display=\"inline\"><msub><mi>A</mi><mn>1</mn></msub></math>) egoteko probabilitatea? Kokapen bakoitza berdin probablea da hasieran (<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>4</mn></mrow></math>). Probabilitate baldintzatuz: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>1</mn></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mfrac><mrow><mn>4</mn><mo>−</mo><mi>p</mi></mrow><mn>4</mn></mfrac></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>p</mi></mrow><mrow><mn>4</mn><mo>−</mo><mi>p</mi></mrow></mfrac><mi>.</mi></mrow></math> Lana kokapen horretan ez badago, beste hiruetan egoteko probabilitatea osagarria da: <math display=\"block\"><mrow><mn>1</mn><mo>−</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>p</mi></mrow><mrow><mn>4</mn><mo>−</mo><mi>p</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><mo>−</mo><mi>p</mi><mo>−</mo><mn>1</mn><mo>+</mo><mi>p</mi></mrow><mrow><mn>4</mn><mo>−</mo><mi>p</mi></mrow></mfrac><mo>=</mo><mfrac><mn>3</mn><mrow><mn>4</mn><mo>−</mo><mi>p</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Salamancako taberna: oinarri-tasaren paradoxa (Bayes zuhaitza)"
    },
    {
     "mota": "testua",
     "html": "<strong>Enuntziatua (euskaraz, partzialki irakurgaitza):</strong> Salamancako taberna batean futbol-partida bat ikusten ari dira; bezero batek Reala aipatzen du. Zein da pertsona hori <strong>donostiarra</strong> (<math display=\"inline\"><mi>D</mi></math>) izateko probabilitatea, hau jakinik: Salamancako taberna batean donostiar bat aurkitzeko probabilitatea <math display=\"inline\"><mrow><mn>15</mn><mi>/</mi><mspace width=\"0.222em\"></mspace><mn>1.000</mn><mn>.000</mn></mrow></math> da; donostiarra izanik errealzale (<math display=\"inline\"><mi>E</mi></math>) izatekoa <math display=\"inline\"><mrow><mn>72</mn><mi>%</mi></mrow></math>; eta donostiarra ez izanik errealzale izatekoa <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>1000</mn></mrow></math>. Bayes-en zuhaitza aplikatuz:"
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
     "mota": "irudia",
     "oina": "Salamancako problemaren Bayes-en zuhaitza (eskuizkribuak marraztua): <math display=\"inline\"><mi>D</mi></math> = donostiarra, <math display=\"inline\"><mi>E</mi></math> = errealzale. Urdinez, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Pr</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>E</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren zenbakitzailearen bidea (<math display=\"inline\"><mrow><mn>15</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>72</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>,</mo><mn>08</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup></mrow></math>); gorriz, izendatzailearen gai nagusia (<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>01</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math>). Oinarri-tasaren paradoxa: baldintzapeko <math display=\"inline\"><mrow><mn>72</mn><mi>%</mi></mrow></math> altua izan arren, aurreko gertaeraren urritasunak posteriora txiki uzten du (<math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>0107</mn></mrow></math>).",
     "src": "media/irudiak/1367654711da2e80.svg",
     "zabalera": 292
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mi>A</mi></math> magnitudearen neurketa: estatistika eta <math display=\"inline\"><mrow><mi>%</mi><mn>80</mn></mrow></math> konfiantza-tartea"
    },
    {
     "mota": "testua",
     "html": "<strong>Enuntziatua (euskaraz, partzialki irakurgaitza):</strong> <math display=\"inline\"><mi>A</mi></math> magnitudea zeharka neurtzen da, <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>y</mi></math> neurtuz (defini-adierazpena irakurgaitza). Laborategiko sei neurketetatik <math display=\"inline\"><mi>A</mi></math>-ren balioak (hirugarren errenkada) lortzen dira; horietatik <math display=\"inline\"><mi>A</mi></math>-ren estimazioa eta desbideratze estandar zuzendua eskatzen dira."
    },
    {
     "mota": "taula-kutxa",
     "oina": "Sei neurketen taula: <math display=\"inline\"><msub><mi>x</mi><mi>i</mi></msub></math>, <math display=\"inline\"><msub><mi>y</mi><mi>i</mi></msub></math> eta ondorioztatutako <math display=\"inline\"><msub><mi>A</mi><mi>i</mi></msub></math> balioak (hirugarren errenkada).",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [
        "<math display=\"inline\"><mi>i</mi></math>",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"
       ],
       "lerroak": [
        [
         "<math display=\"inline\"><msub><mi>x</mi><mi>i</mi></msub></math>",
         "27,2",
         "22,1",
         "26,8",
         "24,8",
         "25,6",
         "24,8"
        ],
        [
         "<math display=\"inline\"><msub><mi>y</mi><mi>i</mi></msub></math>",
         "47,8",
         "53,0",
         "34,2",
         "62,9",
         "36,9",
         "52,9"
        ],
        [
         "<math display=\"inline\"><msub><mi>A</mi><mi>i</mi></msub></math>",
         "39,72",
         "26,57",
         "29,12",
         "30,40",
         "24,82",
         "47,09"
        ]
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Batez bestekoa eta bariantza (lagin gainean): <math display=\"block\"><mrow><mover><mi>A</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>39</mn><mo>,</mo><mn>72</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>26</mn><mo>,</mo><mn>57</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>29</mn><mo>,</mo><mn>12</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>30</mn><mo>,</mo><mn>40</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>24</mn><mo>,</mo><mn>82</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>47</mn><mo>,</mo><mn>09</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>32</mn><mo>,</mo><mn>96</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>6</mn></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mi>i</mi></msub><mo>−</mo><mover><mi>A</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>45</mn><mo>,</mo><mn>70</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>40</mn><mo>,</mo><mn>83</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>14</mn><mo>,</mo><mn>74</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>6</mn><mo>,</mo><mn>55</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>66</mn><mo>,</mo><mn>26</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>199</mn><mo>,</mo><mn>66</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>373</mn><mo>,</mo><mn>74</mn></mrow><mn>6</mn></mfrac><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>62</mn><mo>,</mo><mn>29</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>s</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>7</mn><mo>,</mo><mn>89</mn><mi>.</mi></mrow></math> Populazioaren dispertsioa sei neurketatik estimatzeko, Bessel-en zuzenketa (<math display=\"inline\"><mrow><mi>N</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faktorea): <math display=\"block\"><mrow><msup><mi>σ</mi><mn>2</mn></msup><mo>=</mo><mfrac><mi>N</mi><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></mfrac><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>6</mn><mn>5</mn></mfrac><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>62</mn><mo>,</mo><mn>29</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>74</mn><mo>,</mo><mn>748</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>σ</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>8</mn><mo>,</mo><mn>64</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>%</mi><mn>80</mn></mrow></math>-ko konfiantza-tartea, bi isatsak simetrikoak izanik (<math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mi>β</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>, beraz <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>γ</mi><mo>−</mo><mi>β</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>8</mn></mrow></math>) eta <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Φ</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>,</mo><mn>28</mn></mrow></math> kuantila erabiliz:"
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
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berregiaztatua (Python/scipy, zatiki zehatzez eta SymPy-z):</strong> hamalau emaitza egiaztagarriak <strong>zuzenak</strong>, tartearen bi muturrak barne. Mikrotxipak: <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Pr</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>X</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>100</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Pr</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>3</mn><mn>250</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Pr</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>250</mn></mfrac></mrow></math>; <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Pr</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>25</mn><mn>47</mn></mfrac><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>5319</mn><mspace width=\"0.222em\"></mspace><mo>≈</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>532</mn></mrow></math></span>. Tesi-lana (SymPy): <math display=\"inline\"><mfrac><mrow><mn>1</mn><mo>−</mo><mi>p</mi></mrow><mrow><mn>4</mn><mo>−</mo><mi>p</mi></mrow></mfrac></math> eta <math display=\"inline\"><mfrac><mn>3</mn><mrow><mn>4</mn><mo>−</mo><mi>p</mi></mrow></mfrac></math>. Salamanca: <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>010685</mn><mspace width=\"0.222em\"></mspace><mo>≈</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>0107</mn></mrow></math>. Estatistika: batez bestekoa <math display=\"inline\"><mrow><mfrac><mrow><mn>197</mn><mo>,</mo><mn>72</mn></mrow><mn>6</mn></mfrac><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>32</mn><mo>,</mo><mn>953</mn></mrow></math>; sei desbideratze karratuak (<math display=\"inline\"><mrow><mn>45</mn><mo>,</mo><mn>70</mn></mrow></math>, <math display=\"inline\"><mrow><mn>40</mn><mo>,</mo><mn>83</mn></mrow></math>, <math display=\"inline\"><mrow><mn>14</mn><mo>,</mo><mn>74</mn></mrow></math>, <math display=\"inline\"><mrow><mn>6</mn><mo>,</mo><mn>55</mn></mrow></math>, <math display=\"inline\"><mrow><mn>66</mn><mo>,</mo><mn>26</mn></mrow></math>, <math display=\"inline\"><mrow><mn>199</mn><mo>,</mo><mn>66</mn></mrow></math>) <strong>banan-banan</strong> bat datoz; <math display=\"inline\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>62</mn><mo>,</mo><mn>29</mn></mrow></math>, <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>7</mn><mo>,</mo><mn>89</mn></mrow></math>; <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>8</mn><mo>,</mo><mn>646</mn></mrow></math>; <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Φ</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>,</mo><mn>2816</mn></mrow></math>; tartea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>28</mn><mo>,</mo><mn>445</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>37</mn><mo>,</mo><mn>475</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>. (Ez dago EDF corpusean; Python-ez egiaztatua.)",
        "<strong>Zuzenketarik ez:</strong> hamalau emaitzak zuzenak. Bederatzigarren CAx unitatea jarraian zuzenketarik gabe.",
        "<strong>⚠ Hizkuntza-aldaketa (triajearen aurreikuspenaren aurkakoa):</strong> triajeak «amaierako tartea ingelesez» iragartzen zuen; alderantziz gertatzen da —hemendik aurrera euskara nagusitzen da—. Gainerako CAx unitateen aurreikuspena berrikustea komeni da.",
        "<strong>Irudia (eskuizkributik berregina):</strong> Salamancako Bayes-en zuhaitza CeTZ-z. Eskuizkribuak hiru probabilitate- zuhaitz marrazten ditu; argiena eta osoena (Salamanca) berregin da, oinarri-tasaren paradoxa ikusarazteko.",
        "<strong>Ez da ukitu (zalantzak/biribiltzeak):</strong> 18. orrian <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Pr</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren izendatzailean <math display=\"inline\"><mi>t</mi></math> bat ageri da <math display=\"inline\"><mi>p</mi></math>-ren ordez (trazu isolatua; emaitzak <math display=\"inline\"><mi>p</mi></math> eskatzen du). 19. orrian <math display=\"inline\"><mi>A</mi></math>-ren defini-adierazpena irakurgaitza da eta enuntziatuetako hitz asko ere bai. Batez bestekoa: <math display=\"inline\"><mrow><mn>32</mn><mo>,</mo><mn>953</mn></mrow></math> zehazki, autoreak <math display=\"inline\"><mrow><mn>32</mn><mo>,</mo><mn>96</mn></mrow></math> erabiltzen du <strong>modu koherentean</strong> (sei karratuak <math display=\"inline\"><mrow><mn>32</mn><mo>,</mo><mn>96</mn></mrow></math>-rekin kalkulatuta bat datoz). Lehen taula-balioa <math display=\"inline\"><mrow><mn>39</mn><mo>,</mo><mn>72</mn></mrow></math> da (<math display=\"inline\"><mrow><mn>39</mn><mo>,</mo><mn>79</mn></mrow></math> ez): <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>39</mn><mo>,</mo><mn>72</mn><mspace width=\"0.222em\"></mspace><mo>−</mo><mspace width=\"0.222em\"></mspace><mn>32</mn><mo>,</mo><mn>96</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>45</mn><mo>,</mo><mn>70</mn></mrow></math> da idatzitakoa.",
        "<strong>Fidelitatea (konfiantza ertaina):</strong> iturria ingelesez hasi eta euskaraz jarraitzen du; ingelesezko enuntziatua hitzez hitz aipatuta, euskarazkoak partzialki irakurgaitzak (garapena osorik egiaztatua). Bi etiketa kanoniko: <code>#CAxp18</code>, <code>#CAxp19</code>. Ikus <code>koadernoa_cax_p018.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CAx cuaderno amarillo metmat probabilidad ingles",
     "xehetasuna": "CAx, 20.-21. orrialdeak (0012 unitatea, orri bikoitza; #CAxp20/#CAxp21): osagaien fidagarritasuna — lagina, binomiala eta Bayes, KATE BAKARRA. Euskaraz osorik (0011ko aldaketa baieztatuta). Problema bakarra lau ataletan kateatuta: (a) 10 neurketaren estatistika, batez bestekoa 6,67, s^2=3,728, Bessel sigma=2,04, %80 CI [5,84, 7,50]; (b) Bin(298;0,01), Pr(matxurarik ez)=(0,99)^298=0,05, Pr(>=1)=0,95; (c) Bin(298;1e-4), Pr(hondatu)=1-(1-1e-4)^298=0,02936, Pr(>=2)=4,32e-4; (d) Bayes (b)/(c)-ko emaitzak datu gisa, Pr(A|hondatu)=(4/10000·0,95)/(...)=0,0125~0,01. Zuzenketarik ez (emaitza finalak zuzenak). ⭐⭐ Barne-inkoherentzia dokumentatua: karratuen batura idatzia 3,74992 baina erabilitako sigma^2=4,14-k 3,728 (zuzena) eskatzen du. IRUDIA: (d)-ko Bayes zuhaitza eskuizkributik berregina (CeTZ). Oinarri-tasaren paradoxa hirugarren aldiz. Konfiantza ertaina. Python/scipy-z egiaztatua",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Osagaien fidagarritasuna: lagina, banaketa binomiala eta Bayes (kate bakarra)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "CAx koaderno horiaren 20.-21. orri bikoitza, <strong>euskaraz osorik</strong> (0011 unitatean hasitako aldaketa baieztatuz). Problema luze bakarra da, lau ataletan <strong>kateatuta</strong>: ordenagailu-osagaien bizitza-denbora eta akatsak. (d) atalak (b) eta (c)-ko emaitzak <strong>datu gisa</strong> erabiltzen ditu, beraz lau atalek kate bakarra osatzen dute."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(a) Laginaren estatistika eta <math display=\"inline\"><mrow><mi>%</mi><mn>80</mn></mrow></math> konfiantza-tartea"
    },
    {
     "mota": "testua",
     "html": "<strong>Enuntziatua (euskaraz):</strong> A hornitzailearen osagaien bizitza-denbora (urteetan) hamar aldiz neurtu da: <math display=\"inline\"><mrow><mn>3</mn><mo>,</mo><mn>9</mn></mrow></math>, <math display=\"inline\"><mrow><mn>7</mn><mo>,</mo><mn>5</mn></mrow></math>, <math display=\"inline\"><mrow><mn>6</mn><mo>,</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><mn>4</mn><mo>,</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mn>10</mn><mo>,</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mn>6</mn><mo>,</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mn>7</mn><mo>,</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mn>8</mn><mo>,</mo><mn>8</mn></mrow></math>, <math display=\"inline\"><mrow><mn>4</mn><mo>,</mo><mn>5</mn></mrow></math>, <math display=\"inline\"><mrow><mn>7</mn><mo>,</mo><mn>8</mn></mrow></math>. Lagin horrekin, populazioaren batez bestekoa eta desbideratze estandarra estimatu, eta batez bestekoaren <math display=\"inline\"><mrow><mi>%</mi><mn>80</mn></mrow></math>-ko konfiantza-tarte zentrala kalkulatu (populazioa gaussiartzat hartuz). <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mn>1</mn><mn>10</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>10</mn></munderover><msub><mi>x</mi><mi>i</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>10</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>9</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>7</mn><mo>,</mo><mn>5</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>6</mn><mo>,</mo><mn>4</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>,</mo><mn>3</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>10</mn><mo>,</mo><mn>2</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>6</mn><mo>,</mo><mn>3</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>7</mn><mo>,</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>8</mn><mo>,</mo><mn>8</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>,</mo><mn>5</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>7</mn><mo>,</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>6</mn><mo>,</mo><mn>67</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>10</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>10</mn></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>10</mn></mfrac><mrow><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>7</mn><mo>,</mo><mn>6729</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>6889</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>0729</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>5</mn><mo>,</mo><mn>6169</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>12</mn><mo>,</mo><mn>4609</mn><mspace width=\"0.222em\"></mspace></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>+</mi><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>1369</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>1089</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>,</mo><mn>5369</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>,</mo><mn>7089</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>,</mo><mn>2769</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow><mo>=</mo><mfrac><mrow><mn>37</mn><mo>,</mo><mn>281</mn></mrow><mn>10</mn></mfrac><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mo>,</mo><mn>728</mn><mi>.</mi></mrow></math> Bessel-en zuzenketaz eta <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Φ</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>,</mo><mn>28</mn></mrow></math> kuantilaz (<math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mi>β</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>γ</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>8</mn></mrow></math>): <math display=\"block\"><mrow><msup><mi>σ</mi><mn>2</mn></msup><mo>=</mo><mfrac><mi>n</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>10</mn><mn>9</mn></mfrac><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mo>,</mo><mn>728</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>,</mo><mn>14</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>σ</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mo>,</mo><mn>04</mn><mi>.</mi></mrow></math>"
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
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Barne-inkoherentzia dokumentatua: karratuen batura",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eskuizkribuak karratuen zerrenda bat idazten du (bederatzi batugai irakurgai) <math display=\"inline\"><mrow><mn>37</mn><mo>,</mo><mn>4992</mn></mrow></math> batura duena, hots <math display=\"inline\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mo>,</mo><mn>74992</mn></mrow></math>. <strong>Baina</strong> hurrengo lerroko <math display=\"inline\"><mrow><msup><mi>σ</mi><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>10</mn><mi>/</mi><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>,</mo><mn>14</mn></mrow></math> balioak <math display=\"inline\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mo>,</mo><mn>728</mn></mrow></math> eskatzen du —taulako hamar datuekin lortzen den balio <strong>zuzena</strong>—, ez <math display=\"inline\"><mrow><mn>3</mn><mo>,</mo><mn>74992</mn></mrow></math> (honek <math display=\"inline\"><mrow><mn>4</mn><mo>,</mo><mn>17</mn></mrow></math> emango luke). Beraz <strong>autoreak balio zuzena erabili zuen</strong> aurrera egiteko, eta tarteko zerrendak batugairen bat gaizki kopiatuta edo faltan du. Ezin da jakin zein, eta erabilitako emaitza zuzena denez, ez da ukitu. Gainerako guztia zuzena."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(b) Banaketa binomiala: A hornitzailea"
    },
    {
     "mota": "testua",
     "html": "<strong>Enuntziatua (euskaraz):</strong> azterketa zorrotzago batek erakusten du osagaien <math display=\"inline\"><mrow><mi>%</mi><mn>1</mn></mrow></math> akastuna dela eta lehen urtean huts egiten duela. Ordenagailu bakoitzak A hornitzailearen <math display=\"inline\"><mn>298</mn></math> osagai ditu. Zein da ordenagailu batek lehen urtean matxurarik gabe funtzionatzeko probabilitatea? Akats-kopurua <math display=\"inline\"><mrow><mi>X</mi><mo>∼</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Bin</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>298</mn><mo>;</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>01</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da (binomiala = bi kategoriako multinomiala, autoreak dioen bezala): <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>=</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mn>298</mn><mi>k</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>01</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>99</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>298</mn><mo>−</mo><mi>k</mi></mrow></msup><mi>.</mi></mrow></math> Matxurarik ez izateko, osagai <strong>guztiek</strong> akatsgabeak izan behar dute (<math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mn>298</mn><mn>0</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>01</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>0</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>99</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>298</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>99</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>298</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>05</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>≥</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>−</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>05</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>95</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(c) Banaketa binomiala: B hornitzailea"
    },
    {
     "mota": "testua",
     "html": "<strong>Enuntziatua (euskaraz):</strong> konpainiak bigarren hornitzaile bat (B) kontratatzen du, osagai akastunen tasa <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></math> duena. Zein da B-ren osagaiez eraikitako ordenagailu bat lehen urtean hondatzeko probabilitatea? Eta osagai <strong>bik edo gehiagok</strong> huts egitekoa? Orain <math display=\"inline\"><mrow><mi>X</mi><mo>∼</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Bin</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>298</mn><mo>;</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">hondatu</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mo>−</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>298</mn></msup><mo>=</mo><mn>1</mn><mo>−</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>97064</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>02936</mn><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>≥</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>−</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>02936</mn><mspace width=\"0.222em\"></mspace><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mn>298</mn><mn>1</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>297</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>02936</mn><mspace width=\"0.222em\"></mspace><mo>−</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>028928</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>,</mo><mn>32</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mi>.</mi></mrow></math> Kontrastea (b)-rekin: huts-tasa <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup></math>-tik <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></math>-ra jaitsita, matxura-probabilitatea <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math>-etik <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>029</mn></mrow></math>-ra jaisten da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(d) Bayes-en teorema: aurreko emaitzak datu gisa"
    },
    {
     "mota": "testua",
     "html": "<strong>Enuntziatua (euskaraz):</strong> dendan geratzen diren ordenagailuen <math display=\"inline\"><mrow><mn>4</mn><mi>/</mi><mspace width=\"0.222em\"></mspace><mn>10.000</mn></mrow></math> A-ren osagaiez eginda daude (gainerakoak, B-renez). Denda batean ordenagailu bat erosi eta lehen urtean huts egiten badu, zein da A-ren osagaiez egina egoteko probabilitatea? Bayes-en zuhaitzak (b)-ko <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math> eta (c)-ko <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>03</mn></mrow></math> (<math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>02936</mn></mrow></math>-tik biribilduta) erabiltzen ditu adarretan:"
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
     "mota": "irudia",
     "oina": "(d) ataleko Bayes-en zuhaitza (eskuizkributik berregina): <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> hornitzaileak (<math display=\"inline\"><mrow><mn>4</mn><mi>/</mi><mn>10.000</mn></mrow></math> eta <math display=\"inline\"><mrow><mn>9996</mn><mi>/</mi><mn>10.000</mn></mrow></math>), eta bakoitzaren matxura-probabilitatea (b) eta (c)-tik (<math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math> eta <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>03</mn></mrow></math>). Urdinez, zenbakitzailearen bidea (<math display=\"inline\"><mrow><mn>3</mn><mo>,</mo><mn>8</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></mrow></math>); gorriz, izendatzailearen gai nagusia (<math display=\"inline\"><mrow><mn>3</mn><mo>,</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math>). Oinarri-tasaren paradoxa: A askoz gehiago hondatu arren, dendan hain urria denez, hondatutako ordenagailua ziurrenik B-rena da (<math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>0125</mn></mrow></math>).",
     "src": "media/irudiak/aab98527cd2a25ce.svg",
     "zabalera": 300
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berregiaztatua (Python/scipy, banaketa binomiala barne):</strong> atal guztietako emaitza finalak <strong>zuzenak</strong>. (a) <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mrow><mspace width=\"0.222em\"></mspace><mn>66</mn><mo>,</mo><mn>7</mn></mrow><mn>10</mn></mfrac><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>6</mn><mo>,</mo><mn>67</mn></mrow></math>; hamar desbideratze karratuen batura <math display=\"inline\"><mrow><mn>37</mn><mo>,</mo><mn>281</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mo>,</mo><mn>728</mn></mrow></math>, <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mo>,</mo><mn>035</mn></mrow></math>, tartea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>5</mn><mo>,</mo><mn>84</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>7</mn><mo>,</mo><mn>50</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>. (b) <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>99</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>298</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>05004</mn><mspace width=\"0.222em\"></mspace><mo>≈</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Pr</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>≥</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math>. (c) <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>298</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>97064</mn></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Pr</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">hondatu</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>02936</mn></mrow></math>; <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Pr</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>≥</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>,</mo><mn>34</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></mrow></math> zehazki (eskuizkribuko <math display=\"inline\"><mrow><mn>4</mn><mo>,</mo><mn>32</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></mrow></math> biribildutako gaien kenketaren ondorioa da). (d) Bayes <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>0125</mn><mspace width=\"0.222em\"></mspace><mo>≈</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>01</mn></mrow></math>. (Ez dago EDF corpusean; Python-ez egiaztatua.)",
        "<strong>⭐⭐ Barne-inkoherentzia (dokumentatua, ez zuzendua):</strong> (a)-ko karratuen zerrendak <math display=\"inline\"><mrow><mn>37</mn><mo>,</mo><mn>4992</mn></mrow></math> batzen du (<math display=\"inline\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mo>,</mo><mn>74992</mn></mrow></math>), baina autoreak erabiltzen duen <math display=\"inline\"><mrow><msup><mi>σ</mi><mn>2</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>,</mo><mn>14</mn></mrow></math>-k <math display=\"inline\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mo>,</mo><mn>728</mn></mrow></math> eskatzen du (balio zuzena). Emaitza finala eta tartea zuzenak dira; tarteko zerrendan batugairen bat gaizki kopiatuta dago.",
        "<strong>⭐⭐ Lau atalen katea:</strong> (d)-k (b)-ko <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math> eta (c)-ko <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>03</mn></mrow></math> erabiltzen ditu datu gisa. Kate osoa (lagina <math display=\"inline\"><mo>→</mo></math> binomiala <math display=\"inline\"><mo>→</mo></math> binomiala <math display=\"inline\"><mo>→</mo></math> Bayes) koherentea eta egiaztatua da.",
        "<strong>Oinarri-tasaren paradoxa (hirugarren aldiz koadernoan):</strong> A-ren osagaiak askoz gehiago hondatzen dira (<math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math> vs <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>03</mn></mrow></math>), baina dendan hain urriak dira (<math display=\"inline\"><mn>4</mn></math> / <math display=\"inline\"><mn>10.000</mn></math>) non hondatutako ordenagailua ziurrenik B-rena den. Egitura bera: 2. orriko test medikoa eta 19.eko errealzalearena. Baldintzapeko tasa altua ez da nahikoa oinarri txikiaren aurrean.",
        "<strong>Irudia (eskuizkributik berregina):</strong> (d)-ko Bayes-en zuhaitza CeTZ-z.",
        "<strong>Ez da ukitu (zalantzak):</strong> lehen lerroan <math display=\"inline\"><mtext mathvariant=\"normal\">HAMALAU</mtext></math> («hamalau») irakurtzen da, baina hamar neurketa daude eta <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>10</mn></mrow></math> erabiltzen da dena; ziurrenik <math display=\"inline\"><mtext mathvariant=\"normal\">HAMAR</mtext></math> azkar idatzia. Enuntziatuak azkar idatzita, hitz batzuk irakurketa ziurgabekoak (adib. (c)-ko sarrera-lerroa).",
        "<strong>Fidelitatea (konfiantza ertaina):</strong> iturria euskaraz osorik; garapena osorik egiaztatua, enuntziatuak irakurketa hoberenean. Bi etiketa kanoniko: <code>#CAxp20</code>, <code>#CAxp21</code>. Ikus <code>koadernoa_cax_p020.typ</code>."
       ]
      }
     ]
    }
   ]
  }
 ]
};
