/* JAKINA · kapitulua «B1 - Logika, klaseak eta multzoak» (00aa_02logika), desde edicion2/kapituluak/00aa_02logika/00aa_02logika.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["00aa_02logika"] = {
 "gakoa": "00aa_02logika",
 "titulua": "JAKINA - B1 - Logika, klaseak eta multzoak",
 "azala": "B1 - Logika, klaseak eta multzoak",
 "azpititulua": "I. aroa - Tresnak",
 "iturburua": "kapituluak/00aa_02logika/00aa_02logika.typ",
 "sarrera": [
  {
   "mota": "atala",
   "izenburua": "Logika, klaseak eta multzoak",
   "deskribapena": [
    {
     "mota": "testua",
     "html": "Fisikak zerbait esan aurretik, esateko modua behar da. Bloke honek arrazoibidearen egitura formala jartzen du mahai gainean: zer den ondorio bat premisetatik ateratzea, zer den klase bat eta multzo bat, zer den funtzio bat eta zergatik den indukzioa froga-tresna zilegia. Hemendik aurrerako guztia —limitea, deribatua, Newtonen legea, Maxwellen ekuazioak— hizkuntza honetan idatzita dago."
    }
   ],
   "edukia": [
    "Logika sinbolikoa: dedukzio naturala eta kuantifikazioa",
    "Multzoak, erlazioak eta aplikazioak",
    "Zenbaki naturalak eta indukzio-printzipioa"
   ]
  },
  {
   "mota": "modulua",
   "kodea": "M01",
   "izenburua": "Logika sinbolikoa",
   "maila": "TRESNAK"
  },
  {
   "mota": "helburuak",
   "elementuak": [
    "Formula ondo eratuak ezagutu eta interpretatu.",
    "Dedukzio naturaleko frogak eraiki.",
    "Kuantifikatzaileekin arrazoitu."
   ]
  },
  {
   "mota": "aurrebaldintzak",
   "elementuak": [
    "Bat ere ez: hemen hasten da ikastaroa."
   ]
  },
  {
   "mota": "iturria",
   "proiektua": "def_log_ds_v8.typ",
   "xehetasuna": "erabiltzaileak idatzia (%100 berea): proposizioa, klaseak, Venn, silogismoak, Kant — euskaratzeke",
   "hizkuntza": "es"
  },
  {
   "mota": "oharra",
   "titulua": "Gero integratzeko materiala",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Logikaren testua gorputz nagusitik bereizi da. Ikus <code>materialak_gero_integratzeko/logika.typ</code>."
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
   "izenburua": "Lehen mailako logika: hizkuntzatik dedukziora",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Lehenengo ibilbide honek hizkuntza formal baten beharretik abiatzen du irakurlea, haren sintaxi errekurtsiboa zehazten du, eta inferentzia-erregela primitibo nahiz eratorrietara eramaten du. Helburua ez da definizio-zerrenda labur bat ematea: kontzeptu bakoitza eraikitzen, erabiltzen eta frogapenetan kontrolatzen ikastea baizik."
    },
    {
     "mota": "iturria",
     "proiektua": "Mosterín, Jesús — Lógica de primer orden, 2. arg., Ariel, 1976",
     "xehetasuna": "Sarrera §§1–13; 13.–28. or. inprimatuak; L01 egokitzapen euskaratua",
     "hizkuntza": "es"
    },
    {
     "mota": "oharra",
     "titulua": "Notazioari buruzko irizpidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Mosterínen jatorrizko testuak <math display=\"inline\"><mi mathvariant=\"normal\">Λ</mi></math> erabiltzen du kuantifikatzaile orokorrerako eta <math display=\"inline\"><mi>V</mi></math> existentzialerako. Lote honetan gaur egungo <math display=\"inline\"><mo>∀</mo></math> eta <math display=\"inline\"><mo>∃</mo></math> erabiliko ditugu, hurrenez hurren. Era berean, jatorrizko idazkera aurrizkidun trinkoa irakurgarriago egingo dugu parentesi eta komen bidez: adibidez, <math display=\"inline\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>b</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> idatziko dugu <math display=\"inline\"><mrow><mi>R</mi><mi>f</mi><mi>a</mi><mi>b</mi></mrow></math> motako katearen ordez. Aldaketa horiek aurkezpenekoak dira; egitura logikoa bera gordetzen da."
      }
     ]
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "1. Izenak eta izendatzaileak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hizketa-soinua edo idatzizko testua zatitan bana daiteke, baina zati guztiek ez dute zerbait seinalatzen. Zati batek objektu, pertsona, leku edo bestelako banako bati erreferentzia egiten dionean, <strong>izendatzaile</strong> deituko diogu. Izendatzaile guztien artean izenak dira kasurik sinpleenetakoak: normalean laburrak dira, testuinguruarekiko nahiko independenteak eta erreferentzia egonkorra emateko erabiltzen dira."
    },
    {
     "mota": "testua",
     "html": "Zenbakien izenak —<math display=\"inline\"><mn>1</mn></math>, <math display=\"inline\"><mn>2</mn></math>, <math display=\"inline\"><mn>3</mn></math>, …—, hirien izenak, pertsonenak edo erakundeen siglak izendatzaileak dira. Aldiz, “ni” edo “hau” bezalako adierazpenek ere zerbait izenda dezakete, baina haien erreferentzia aldatu egiten da hiztuna, unea edo egoera aldatzean. Horrek lehen bereizketa bat uzten du agerian: adierazpen baten luzera ez da garrantzitsuena; erreferentzia nola finkatzen duen da kontua."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "“Ni gaur goiz jaiki naiz” esaldiko “ni” hiztunaren arabera aldatzen da. “Ane gaur goiz jaiki da” esaldiko “Ane”, ordea, testuinguruarekiko askoz ere egonkorragoa da. Biak izan daitezke izendatzaile, baina ez dute modu berean funtzionatzen."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Formalizatzen hasteko, hizkuntza arrunteko izen desberdinei letra xehe desberdinak esleituko dizkiegu: <math display=\"inline\"><mi>a</mi></math>, <math display=\"inline\"><mi>b</mi></math>, <math display=\"inline\"><mi>c</mi></math>, …; behar denean, azpiindizeak erabil daitezke, hala nola <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math>, <math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>a</mi><mn>2</mn></msub></math>. Esleipena ez da objektuaren ezaugarri bat: hitzarmen bat da, eta formalizazio osoan koherentziaz mantendu behar da."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "“June Bilbon bizi da, eta Bilbo Bizkaiko hiriburua da” aztertzean, “June” <math display=\"inline\"><mi>a</mi></math> bidez, “Bilbo” <math display=\"inline\"><mi>b</mi></math> bidez eta “Bizkaia” <math display=\"inline\"><mi>c</mi></math> bidez adieraz ditzakegu. Oraindik ez dugu esaldi osoa formalizatu; haren izendatzaileak identifikatu eta izendatu besterik ez dugu egin."
      }
     ]
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "2. Funtoreak eta izendatzaile konposatuak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Izen bat izendatzaile sinplea izan daiteke, baina izendatzaile asko konposatuak dira. “Frantziako hiriburua zeharkatzen duen ibaia” adierazpenak ibai bat izendatzen du, eta haren barruan “Frantziako hiriburua” beste izendatzaile bat dago. Horrelako egituretan, adierazpen-zati batek izendatzaile bat edo batzuk hartu eta izendatzaile berri bat sortzen du."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Funtorea eta aritatea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Funtorea</strong> izendatzaile kopuru jakin bati aplikatuta izendatzaile berria eratzen duen adierazpen-eredua da. Behar duen argumentu kopuruari <strong>aritate</strong> deitzen zaio:"
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
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "“...-ren ama” pertsonen gaineko funtore unarioa da. “Ane” izendatzaileari aplikatuta “Aneren ama” izendatzailea lortzen da. Zenbaki naturaletan, “...-ren hurrengoa” ere unarioa da; “... eta ... zenbakien zatitzaile komun handiena”, berriz, bitarra."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Funtoreak <math display=\"inline\"><mi>f</mi></math>, <math display=\"inline\"><mi>g</mi></math>, <math display=\"inline\"><mi>h</mi></math>, … letren bidez adieraziko ditugu. Aritatea zalantzazkoa izan badaiteke, goi-indizez zehaztuko dugu: <math display=\"inline\"><msup><mi>f</mi><mn>1</mn></msup></math>, <math display=\"inline\"><msup><mi>g</mi><mn>2</mn></msup></math>, <math display=\"inline\"><msup><mi>h</mi><mn>3</mn></msup></math>. Funtorea argumentuen aurretik jartzea da Mosterínen oinarrizko hitzarmena; hemen, irakurketa errazteko, ohiko <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idazkerak ere erabiliko ditugu."
    },
    {
     "mota": "oharra",
     "titulua": "Izena eta deskribapen konposatua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izenak objektua zuzenean seinalatzen du, baina funtorez osatutako izendatzaileak objektua beste objektuekiko harreman baten bidez aurkezten du. <math display=\"inline\"><mn>9</mn></math> izenak zenbaki bat izendatzen du; <math display=\"inline\"><msup><mn>3</mn><mn>2</mn></msup></math> adierazpenak objektu bera izendatzen du, baina <math display=\"inline\"><mn>3</mn></math>-ren karratua dela erakutsiz. Erreferentzia bera izan arren, informazio-egitura ez da bera."
      }
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "3. Sententziak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Izendatzaile bati buruz ez du zentzurik “egia ala gezurra da?” galdetzeak. “Sena ibaia” ez da egiazkoa edo faltsua: zerbait izendatzen du. Beste adierazpen batzuek, ordea, egia-balioa izan dezakete. Horiek <strong>sententziak</strong> dira."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Sententzia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sententzia egiazkoa edo faltsua izan daitekeen hizkuntza-adierazpena da, unean unean haren egia-balioa zein den ez badakigu ere. “Paris Frantziako hiriburua da” eta “<math display=\"inline\"><mrow><mn>5</mn><mo>+</mo><mn>5</mn><mo>=</mo><mn>12</mn></mrow></math>” biak sententziak dira: lehenengoa egiazkoa da eta bigarrena faltsua."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hizkuntza arrunteko sententzia askoren egia-balioa testuinguruaren mende dago. “Atzo zinemara joan nintzen” esaldia ezin da ebaluatu hiztuna eta eguna zein diren jakin gabe. Formalizazioan, ahal den neurrian, testuinguruarekiko independenteagoak diren sententziak bilatuko ditugu; datak, izenak edo beste zehaztapen batzuk gehitzeak anbiguotasuna murrizten du."
    },
    {
     "mota": "testua",
     "html": "<strong>Izendapena eta baieztapena.</strong> Izendatzaile baten eta objektu baten artean erreferentzia-erlazioa dago. Sententzia baten kasuan, berriz, baieztapen oso bat dugu. Intuizio klasikoan, sententzia egiazkoa da deskribatzen duen egoera gertatzen bada, eta faltsua bestela. Geroago semantikak intuizio hori modu zehatzean formulatuko du; oraingoz, bi adierazpen mota ez nahastea da helburua."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "4. Erlatzaileak edo predikatu-sinboloak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Funtore batek izendatzaileetatik izendatzaile berri bat sortzen du. Beste adierazpen-eredu batzuek, aldiz, izendatzaileak hartu eta sententzia bat sortzen dute. Mosterínek <strong>erlatzaile</strong> deitzen die; gaur egun maiz <strong>predikatu-sinbolo</strong> edo <strong>erlazio-sinbolo</strong> esaten zaie."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Erlatzailea eta aritatea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erlatzaile baten aritatea sententzia osatzeko behar dituen izendatzaileen kopurua da. “... gaixo dago” unarioa da; “...-k ... maite du” bitarra; eta “... ... eta ... artean dago” hirutarra. Oro har, <math display=\"inline\"><mi>n</mi></math> izendatzaile behar dituen erlatzailea <math display=\"inline\"><mi>n</mi></math>-adikoa da."
      },
      {
       "mota": "testua",
       "html": "Erlatzaileak <math display=\"inline\"><mi>P</mi></math>, <math display=\"inline\"><mi>Q</mi></math>, <math display=\"inline\"><mi>R</mi></math>, <math display=\"inline\"><mi>S</mi></math>, … letra larriz adieraziko ditugu, eta aritatea behar denean goi-indizez: <math display=\"inline\"><msup><mi>P</mi><mn>1</mn></msup></math>, <math display=\"inline\"><msup><mi>R</mi><mn>2</mn></msup></math>, <math display=\"inline\"><msup><mi>S</mi><mn>3</mn></msup></math>. Erlatzailearen argumentuen ordena datu logikoa da: <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ez dira, oro har, sententzia bera."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Har ditzagun <math display=\"inline\"><mi>a</mi></math> = “Jon”, <math display=\"inline\"><mi>b</mi></math> = “Leire”, <math display=\"inline\"><mi>f</mi></math> = “...-ren ama”, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = “<math display=\"inline\"><mi>x</mi></math>-ek <math display=\"inline\"><mi>y</mi></math> maite du” eta <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = “<math display=\"inline\"><mi>x</mi></math>-ek <math display=\"inline\"><mi>y</mi></math> jasaten du”. “Jonek bere ama maite du, baina Leire ez du jasaten” esaldiaren osagai predikatiboak <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dira. Konektoreak gehitu arte, bi sententzia sinple identifikatu ditugu."
      }
     ]
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "5. Konektoreak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "“Ez”, “eta”, “edo”, “baldin ... orduan ...” eta “baldin eta soilik baldin” bezalako partikulek sententzia sinpleetatik sententzia konposatuak eratzen dituzte. Konektoreen alderdi logiko nagusia da emaitzaren egia-balioa osagaien egia-balioek zehazten dutela."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Bost konektore nagusiak",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><mo>¬</mo><mi>A</mi></mrow></math> egiazkoa da <math display=\"inline\"><mi>A</mi></math> faltsua denean, eta faltsua <math display=\"inline\"><mi>A</mi></math> egiazkoa denean.",
        "<math display=\"inline\"><mrow><mi>A</mi><mo>∧</mo><mi>B</mi></mrow></math> egiazkoa da bi osagaiak egiazkoak direnean bakarrik.",
        "<math display=\"inline\"><mrow><mi>A</mi><mo>∨</mo><mi>B</mi></mrow></math>-n “edo” inklusiboa da: faltsua da bi osagaiak faltsuak direnean bakarrik.",
        "<math display=\"inline\"><mrow><mi>A</mi><mo>→</mo><mi>B</mi></mrow></math> faltsua da <math display=\"inline\"><mi>A</mi></math> egiazkoa eta <math display=\"inline\"><mi>B</mi></math> faltsua den kasuan bakarrik.",
        "<math display=\"inline\"><mrow><mi>A</mi><mo>↔</mo><mi>B</mi></mrow></math> egiazkoa da bi osagaiek egia-balio bera dutenean."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hizkuntza arrunteko partikulek ñabardura erretorikoak izan ditzakete. “Baina” hitzak kontrastea iradokitzen du, baina egia-baldintzei dagokienez “eta” bezala joka dezake. Formalizazioak ñabardura guztiak ez ditu jasotzen; aztertu nahi den egitura logikoa hautatzen du."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurreko ataleko esaldia honela bil daiteke: <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. “Baina”ren kontrastea ez da formula horretan ageri; baieztapen bien baterako egia-baldintza bai."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Edo inklusiboa.</strong> Hizkuntza arrunteko “edo” batzuetan baztertzailea da eta beste batzuetan inklusiboa. Hemen <math display=\"inline\"><mi>∨</mi></math> inklusiboa izango da: <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> biak egiazkoak direnean, <math display=\"inline\"><mrow><mi>A</mi><mo>∨</mo><mi>B</mi></mrow></math> ere egiazkoa da. “Bietako bat, baina ez biak” adierazi nahi denean, baldintza gehigarria formalizatu behar da."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "6. Aldagaiak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Matematikak aldagaiak erabiltzen ditu baieztapen orokorrak egiteko. Adibidez, <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mi>y</mi><mo>+</mo><mi>x</mi></mrow></math> idaztean ez da bi zenbaki jakinez hitz egiten; zenbaki egokiak haien ordez jar daitezkeen tokiak markatzen dira. Hizkuntza arrunteko izenordainek ere antzeko eginkizuna izan dezakete: “hark egin du” esateak erreferentzia zehaztu gabeko leku bat uzten du."
    },
    {
     "mota": "testua",
     "html": "Aldagaiak <math display=\"inline\"><mi>u</mi></math>, <math display=\"inline\"><mi>v</mi></math>, <math display=\"inline\"><mi>w</mi></math>, <math display=\"inline\"><mi>x</mi></math>, <math display=\"inline\"><mi>y</mi></math>, <math display=\"inline\"><mi>z</mi></math>, … letren bidez adieraziko ditugu; behar denean, <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>, <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math>, … azpiindizeak erabiliko dira. Aldagaiak ez du berez objektu jakin bat izendatzen. Haren funtzioa formulen egituran leku bat uztea da, gero ordezkapenak edo kuantifikazioak zehaztu ahal izateko."
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "7. Terminoak eta formulak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sententzia batean izendatzaile bat aldagai batez ordezkatzen badugu, egia edo gezurra izateko oraindik osatu gabe dagoen adierazpena lor dezakegu. Horri <strong>formula irekia</strong> esango diogu sarrera intuitibo honetan. Era berean, izendatzaile baten barruko izendatzaile bat aldagai batez ordezkatzean <strong>termino irekia</strong> lortzen dugu."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "“Jonek bere lehengusina maite du” sententziatik “Jonek” izendatzailea <math display=\"inline\"><mi>x</mi></math> aldagaiaz ordezkatuz, “<math display=\"inline\"><mi>x</mi></math>-ek bere lehengusina maite du” formula irekia lortzen da. “<math display=\"inline\"><mrow><mn>5</mn><mo>+</mo><mn>7</mn><mo>&gt;</mo><mn>10</mn></mrow></math>” sententziatik bi zenbakiak ordezkatuz, <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>&gt;</mo><mn>10</mn></mrow></math> lortzen da. Azken hori ez da berez egiazkoa edo faltsua: <math display=\"inline\"><mi>x</mi></math>-ri eta <math display=\"inline\"><mi>y</mi></math>-ri emandako balioen mende dago."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "“Aneren ama” izendatzailean “Ane” <math display=\"inline\"><mi>x</mi></math> aldagaiaz ordezkatuz, “<math display=\"inline\"><mi>x</mi></math>-ren ama” termino irekia lortzen da. “Aneren ama” pertsona bati erreferentzia egiteko erabil daiteke; “<math display=\"inline\"><mi>x</mi></math>-ren ama”k, <math display=\"inline\"><mi>x</mi></math> zehaztu gabe, ez du pertsona bakar bat izendatzen."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Sarrerako sailkapen intuitiboa",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Termino</strong> hitzak designatzaileak eta termino irekiak biltzen ditu.",
        "<strong>Formula</strong> hitzak sententziak eta formula irekiak biltzen ditu.",
        "Designatzaileak objektu bat izendatzen du; termino irekiak ez du oraindik erreferentzia bakarra.",
        "Sententziak egia-balioa du; formula irekiak ez du egia-balio finkorik."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Sailkapen hau orientaziozkoa da. Hurrengo lotean termino eta formulen eraketa zehatza arau errekurtsiboen bidez emango da; orduan ez gara hizkuntza arrunteko intuizio hutsaren mende egongo."
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "8. Kuantifikatzaileak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Formula ireki batetik sententzia bat eraikitzeko bide nagusietako bat kuantifikazioa da. Kuantifikatzaile orokorrak klase bateko objektu guztiei buruzko baieztapena egiten du; existentzialak, gutxienez objektu batek baldintza betetzen duela."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Kuantifikatzaile orokorra eta existentziala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>φ</mi></mrow></math> formulak dio dagokion eremuko <math display=\"inline\"><mi>x</mi></math> guztiek <math display=\"inline\"><mi>φ</mi></math> betetzen dutela. <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>φ</mi></mrow></math> formulak dio eremuan badela gutxienez <math display=\"inline\"><mi>x</mi></math> bat <math display=\"inline\"><mi>φ</mi></math> betetzen duena. Kuantifikatzailearen ondoko aldagaia <strong>kuantifikatutako aldagaia</strong> da."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = “<math display=\"inline\"><mi>x</mi></math> nire laguna da” eta <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = “<math display=\"inline\"><mi>x</mi></math> fidagarria da” hartuta, “nire lagun guztiak fidagarriak dira” honela formalizatzen da: <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Klase finitua bada, kuantifikazioaren eta konektore errepikatuen arteko antzekotasuna ikus daiteke. Klub batek hiru kide baino ez baditu, <math display=\"inline\"><mi>a</mi></math>, <math display=\"inline\"><mi>b</mi></math> eta <math display=\"inline\"><mi>c</mi></math>, orduan “kide guztiak zintzoak dira” baieztapena <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> konjuntzioarekin azal daiteke; “kideren bat lapurra da”, berriz, <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> disjuntzioarekin."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (eremu finitua: </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>↔</mo><mspace width=\"1.0em\"></mspace><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Antzekotasuna ez da ordezkapen orokorra. Eremua infinitua bada, ezin dugu konjuntzio edo disjuntzio infinitu bat formula finitu arrunt batean idatzi. Zenbaki natural guztiek <math display=\"inline\"><mi>P</mi></math> propietatea dutela adierazteko <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> behar dugu; <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>…</mi></mrow></math> kateak ez luke inoiz amaituko."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "9. Deskribapenak eta deskriptorea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Batzuetan objektu bat haren ezaugarri bakar baten bidez izendatzen dugu: “baldintza hau betetzen duen objektu bakarra”. Horrelako adierazpenari <strong>deskribapen</strong> deituko diogu. Deskribapena izendatzaile berezia da, formula ireki batetik abiatuta banako bat hautatu nahi duelako."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Deskriptorea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>φ</mi></mrow></math> terminoak “<math display=\"inline\"><mi>φ</mi></math> betetzen duen <math display=\"inline\"><mi>x</mi></math>” adierazten du, baldintza hori betetzen duen banakoa bakarra denean. Mosterínek iota grekoa erabiltzen du eta kuantifikatzaile baten antzera aldagai baten aurrean jartzen du, baina emaitza ez da formula bat: <strong>termino bat</strong> da."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = “<math display=\"inline\"><mi>x</mi></math>-ek <math display=\"inline\"><mi>k</mi></math> hil zuen” hartuta, eta <math display=\"inline\"><mi>k</mi></math> izenak Robert Kennedy adierazten badu, “Robert Kennedy hil zuen pertsona” honela idatz daiteke: <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Deskribapenak pertsona bat izendatuko du baldin eta baldintza betetzen duen pertsona bakarra badago."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = “<math display=\"inline\"><mi>x</mi></math> Bartzelonako biztanlea da” eta <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = “<math display=\"inline\"><mi>y</mi></math> <math display=\"inline\"><mi>x</mi></math> baino zaharragoa da” hartuta, “Bartzelonako biztanlerik zaharrena” honela azal daiteke: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Zenbakien artean ere deskribapenak erabil daitezke. <math display=\"inline\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k “<math display=\"inline\"><mi>x</mi></math> <math display=\"inline\"><mi>n</mi></math>-ren zatitzailea da” eta <math display=\"inline\"><mrow><mi>x</mi><mo>≤</mo><mi>y</mi></mrow></math>-k ohiko ordena adierazten badute, <math display=\"inline\"><mi>n</mi></math> eta <math display=\"inline\"><mi>m</mi></math>-ren zatitzaile komun handiena baldintza hau betetzen duen <math display=\"inline\"><mi>x</mi></math> gisa aurkez daiteke:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ι</mi><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>y</mi><mo>≤</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Deskribapen guztiak ez dira <strong>propioak</strong>. <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mo>∀</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>≤</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> terminoak zenbaki natural txikiena hautatzen du; <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mo>∀</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>≤</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> terminoak, ordea, handiena hautatu nahi du, baina zenbaki natural handienik ez dago. Azken hori deskribapen inpropioa da."
    },
    {
     "mota": "oharra",
     "titulua": "Deskribapen inpropioen tratamendua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi aukera klasiko daude. Batetik, erreferentzia bakarra bermatzen ez duten deskribapenak hizkuntzatik kanpo utz daitezke. Bestetik, deskribapen inpropio guztiei interpretazio bakoitzean aurrez finkatutako objektu bera eslei dakieke. Mosterínek bigarren bidea aukeratzen du, Frege eta Carnapen ildotik, formalizazio eta metateoria teknikoak arintzeko. Hautua artifiziala dirudi, baina ondorio zehatzak ditu eta gero semantikan berriro azaldu beharko da."
      }
     ]
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "10. Parentesiak eta irismena",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hitz berak ordena berean emanda ere, pausak edo puntuazioa aldatzeak egitura alda dezake. Logikan parentesiek egiten dute ahozko pausen eta idatzizko puntuazioaren lana: konektore batek, kuantifikatzaile batek edo deskriptoreak zein zatiri eragiten dion zehazten dute."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Har ditzagun <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = “Jonek frantsesez egiten du”, <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = “Jonek ingelesez egiten du” eta <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = “Pedrok Joni ulertzen dio”. Bi egitura hauek ez dira berdinak:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: frantsesez egiten badu, ulermenari buruz ez da ezer behartzen; ingelesez egiten badu, Pedrok ez dio ulertzen.",
        "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: bi hizkuntzetako edozeinetan eginda ere, Pedrok ez dio ulertzen."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Matematikan gertatzen den gauza bera da: <math display=\"inline\"><mrow><mn>8</mn><mo>+</mo><mn>7</mn><mo>⋅</mo><mn>5</mn><mo>=</mo><mn>43</mn></mrow></math>, baina <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>8</mn><mo>+</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mn>5</mn><mo>=</mo><mn>75</mn></mrow></math>. Parentesiek eragiketen taldekatzea aldatzen dute, eta horrekin emaitza."
    },
    {
     "mota": "testua",
     "html": "Kuantifikatzailearen irismena ere parentesiek finkatzen dute. <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> formula irekia da, azken <math display=\"inline\"><mi>x</mi></math> ez baitago lehen kuantifikatzailearen irismenaren barruan. <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, aldiz, sententzia izan daiteke: <math display=\"inline\"><mi>x</mi></math>-ren bi agerraldiak kuantifikatuta daude."
    },
    {
     "mota": "testua",
     "html": "Deskribapenetan taldekatzea are kritikoagoa da. <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> termino bat da: bi baldintzak betetzen dituen objektua hautatzen du. <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> kateak, ordea, termino bat eta formula bat konektatu nahi ditu; beraz, ez dago behar bezala eratuta."
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "11. Formalizazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Formalizatzea ez da hitz bakoitza automatikoki ikur batez ordezkatzea. Lehenik, adierazpen arrunta aztertu behar da: zer izendatzaile, sententzia, funtore eta erlatzaile dituen, eta osagai horiek nola lotzen diren. Ondoren, izen eta sinbolo desberdinak modu koherentean esleitzen dira. Azkenik, konektore, kuantifikatzaile, deskriptore, aldagai eta parentesien bidez adierazpenaren egitura berreraikitzen da."
    },
    {
     "mota": "testua",
     "html": "<strong>Formalizatzeko lan-sekuentzia:</strong>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Adierazpenaren mota eta osagaiak identifikatu.",
      "Izen, funtore eta erlatzaile desberdinak bereizi.",
      "Bakoitzari sinbolo bakarra eta aritate egokia esleitu.",
      "Konektore eta kuantifikatzaileen irismena zehaztu.",
      "Formula edo terminoa idatzi, parentesiak behar bezala erabiliz.",
      "Azken irakurketa egin: formulak jatorrizko egitura logikoa gordetzen al du?"
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Har dezagun zenbaki naturalen eremua. <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = “<math display=\"inline\"><mi>x</mi></math> bikoitia da”, <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = “<math display=\"inline\"><mi>x</mi></math> bakoitia da”, <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mi>y</mi></mrow></math> ohiko ordena eta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = “<math display=\"inline\"><mi>x</mi></math>-ren hurrengoa”. Orduan:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "“hiru baino txikiagoa den zenbaki bikoitiren bat dago”: <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>x</mi><mo>&lt;</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>;",
        "“hiru baino txikiagoa den zenbaki bikoiti bat dago gehienez”: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>x</mi><mo>&lt;</mo><mn>3</mn><mo>∧</mo><mi>y</mi><mo>&lt;</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>;",
        "“hiru baino txikiagoa den zenbaki bikoiti bakarra dago”: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>x</mi><mo>&lt;</mo><mn>3</mn><mo>∧</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>y</mi><mo>&lt;</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>y</mi><mo>=</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>;",
        "“zenbaki bikoiti baten hurrengoa bakoitia da”: <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>;",
        "“lauren hurrengoa bost da”: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>5</mn></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Adibide horiek erakusten dute “gutxienez bat”, “gehienez bat” eta “bakarra” ez direla baliokideak. Existentziak lekuko bat eskatzen du; bakartasunak, berriz, bi hautagai badaude berdinak izan behar dutela. “Bakarra” esateko bi osagaiak behar dira."
    },
    {
     "mota": "testua",
     "html": "Aristotelesen silogistikako lau sententzia-mota klasikoek ere lehen mailako notazioan egitura argia hartzen dute. <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> predikatu unarioak badira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mtext mathvariant=\"normal\">a: </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mrow><mtext mathvariant=\"normal\">i: </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mrow><mtext mathvariant=\"normal\">e: </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mrow><mtext mathvariant=\"normal\">o: </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hurrenez hurren adierazten dute: A guztiak B direla; A den B bat badagoela; A bakar bat ere ez dela B; eta A den baina B ez den zerbait badagoela. Egitura horiek izen konkretuetatik independenteak dira: “greziar”, “europar” eta “hilkor” jar daitezke, baina molde logikoak berdin jarraitzen du."
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "12. Formalismoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Formalizazioak hizkuntza arruntetik formula jakin batera eraman gaitzake. Baina beste galdera bat ere egin daiteke: zein kate eraiki daitezke alfabeto eta arau jakin batzuetatik, aurretik inolako esanahirik eman gabe? Galdera horrek <strong>formalismoa</strong> jartzen du erdigunean."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Formalismoa eta hizkuntza formala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Formalismoa zeinu multzo batek eta zeinu horiek konbinatzeko arauek osatzen dute. Berez, zeinu-joko horrek ez du esanahirik. Zeinuei objektuak, funtzioak eta erlazioak esleitzen zaizkienean, formalismoa <strong>interpretatu</strong> egiten da; orduan, interpretatutako formalismoak hizkuntza formal gisa jarduten du."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Lehen mailako formalismoek zenbait osagai komun dituzte: aldagaiak, konektoreak, kuantifikatzaileak, deskriptorea eta berdintasuna. Beste osagai batzuek formalismo bat bestetik bereizten dute: konstante indibidualek, funtoreek eta erlatzaileek, bakoitza bere aritatearekin."
    },
    {
     "mota": "testua",
     "html": "Adibidez, sinbolo berak dituen formalismo batean <math display=\"inline\"><mi>a</mi></math> konstantea, <math display=\"inline\"><mi>f</mi></math> funtore unarioa eta <math display=\"inline\"><mi>R</mi></math> erlatzaile bitarra egon daitezke. Interpretazio batean <math display=\"inline\"><mi>a</mi></math> zenbaki bat, <math display=\"inline\"><mi>f</mi></math> hurrengoaren funtzioa eta <math display=\"inline\"><mi>R</mi></math> “txikiagoa da” erlazioa izan daitezke. Beste interpretazio batean <math display=\"inline\"><mi>a</mi></math> pertsona bat, <math display=\"inline\"><mi>f</mi></math> haren ama eta <math display=\"inline\"><mi>R</mi></math> “maite du” erlazioa izan daitezke. Kate sintaktikoak berdinak dira; esanahia ez."
    },
    {
     "mota": "testua",
     "html": "Bereizketa horrek sintaxiaren eta semantikaren arteko muga ezartzen du. Sintaxiak zeinuak eta haien eraketa-arauak aztertzen ditu, interpretaziorik gabe. Semantikak interpretazioak eta egia-baldintzak aztertuko ditu. Ordena didaktikoak ere badu arrazoia: lehenik zer dagoen ongi eratuta jakin behar da, gero ongi eratutako horri zer esanahi eman dakiokeen aztertzeko."
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "13. Objektu-hizkuntza eta metahizkuntza",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hizkuntza bat aztertzeko beste hizkuntza bat erabiltzen dugu. Euskara erabil dezakegu latinaren esaldi bati buruz hitz egiteko; kasu horretan latina da <strong>objektu-hizkuntza</strong> eta euskara <strong>metahizkuntza</strong>. Logikan gauza bera gertatzen da: formalismoaren formulak dira aztergai, eta haiei buruzko definizioak, azalpenak eta frogak beste hizkuntza batean ematen dira."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Erabiltzea eta aipatzea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Objektu-hizkuntzako formula bat erabiltzean, formalismoaren barruan jarduten dugu. Formula horrek zenbat ikur dituen, nola eraiki den edo zer aldagai duen esatean, formula <strong>aipatu</strong> eta metahizkuntzan jarduten dugu. Mailak nahasteak definizio zirkularrak eta anbiguotasunak sor ditzake."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "JAKINAn, aztertutako lehen mailako notazioa objektu-hizkuntza izango da. Euskara, notazio matematiko osagarria eta azalpenetan sartzen diren metaikurrak metahizkuntza izango dira. Adibidez, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> formula objektu-hizkuntzakoa izan daiteke; “<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> formula atomikoa da” esaldia, berriz, metahizkuntzakoa da."
    },
    {
     "mota": "oharra",
     "titulua": "Sarrera honen izaera",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hemen aurkeztutako kontzeptuak lehen hurbilketa intuitiboa dira. Izen, funtore, formula, kuantifikatzaile eta deskribapenek dagoeneko norabidea ematen dute, baina definizio sintaktiko zehatzak hurrengo zatian etorriko dira. Sarreraren eginkizuna hiztegia eta arazoak prestatzea da; gramatika errekurtsiboak finkatuko du gero zein zeinu-kate diren benetako termino edo formula."
      }
     ]
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "I.1. Formalismo guztien zeinu komunak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Formalismo baten sintaxia aztertzean, lehen urratsa ez da zeinuei esanahia ematea, zein zeinu erabil daitezkeen eta nola elkartu daitezkeen zehaztea baizik. Alfabeto bakoitzak bi osagai ditu: formalismo guztietan errepikatzen diren zeinu komunak eta formalismo jakin horren zeinu bereziak."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Aldagaiak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aldagaiek zeinu desberdinen multzo infinitu baina errekurtsiboki zenbakigarri bat osatzen dute. Horrek esan nahi du aldagai bakoitzari zenbaki arrunt bana eslei dakiokeela, haren <strong>indizea</strong>, eta zenbaki arrunt bakoitzari aldagai bana. Metahizkuntzan <math display=\"inline\"><mrow><mi>u</mi><mo>,</mo><mi>v</mi><mo>,</mo><mi>w</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi></mrow></math> eta, behar denean, azpiindizeak erabiliko ditugu aldagai arbitrarioak aipatzeko."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Indizeak ez du aldagaiaren esanahia finkatzen. Aldagaiak zirkulu, marra edo bestelako irudi bidez idatz litezke; sintaxiarentzat axola duena zeinuak elkarren desberdinak izatea eta modu eraginkorrean zerrendatu ahal izatea da. JAKINAn ohiko letra latinoak erabiliko ditugu, irakurketari laguntzen diotelako."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Zeinu logikoak eta berdintza",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Oinarrizko lehen mailako hizkuntzan bost konektibo, bi kuantifikatzaile eta deskriptore bat bereizten dira:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "ezeztapena: <math display=\"inline\"><mo>¬</mo></math>;",
        "konjuntzioa, disjuntzioa, baldintza eta baliokidetasuna: <math display=\"inline\"><mi>∧</mi></math>, <math display=\"inline\"><mi>∨</mi></math>, <math display=\"inline\"><mo>→</mo></math> eta <math display=\"block\"><mo>↔</mo></math>;",
        "kuantifikatzaile unibertsala eta existentziala: <math display=\"inline\"><mo>∀</mo></math> eta <math display=\"inline\"><mo>∃</mo></math>;",
        "deskriptorea: <math display=\"inline\"><mi>ι</mi></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "Horiez gain, berdintza dago, <math display=\"inline\"><mo>=</mo></math>, formalismo guztietan agertzen den predikatu bitar berezia. Familia horiek eta aldagaien familia elkarrengandik disjuntuak dira: zeinu batek ezin ditu bi eginkizun sintaktiko izan aldi berean."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Objektu-hizkuntza eta metahizkuntza",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zeinu grafiko horiek formalismoko zeinuen <strong>izen metalinguistiko</strong> gisa erabiltzen ditugu. Objektu-hizkuntzako adierazpenak eraikitzen ditugu haien bidez, baina adierazpen horiei buruz euskaraz egiten dugun azalpena metahizkuntzakoa da. Bi mailak bereizteak saihesten du zeinu bat eta zeinu horren izena gauza bera balira bezala tratatzea."
      }
     ]
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "I.2. Formalismo baten zeinu bereziak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Formalismo desberdinek zeinu logiko berak parteka ditzakete, baina aztertzen duten arloaren arabera aldatzen dira haien konstante, funtzio eta predikatuak. Horregatik sinadura batek ez du derrigorrez familia bakoitzeko zeinurik izan behar, eta izan ditzake zeinu bat, finituki asko edo zenbakigarriro infinitu."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Sinaduraren zeinu ez-logikoak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Formalismo baten zeinu bereziak hauek dira:"
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
       "html": "Goiko <math display=\"inline\"><mi>n</mi></math>-k aritatea adierazten du; beheko indize batek, berriz, aritate bereko zeinuen zerrendan zein tokitan dagoen. Familia guztiak elkarren artean eta zeinu komunen familiekin disjuntuak dira."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Berdintza salbuespen antolatu bat da: formalismo guztietan gutxienez predikatu bitar bat dago, berdintza bera. Gainerako predikatu bitarrak, konstanteak edo funtzioak formalismoaren sinadurak erabakitzen ditu."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Bi sinadura",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ordenari buruzko hizkuntza batek <math display=\"inline\"><mo>&lt;</mo></math> predikatu bitarra izan dezake eta konstante berezirik ez. Aritmetikarako sinadura batek, ordea, <math display=\"inline\"><mn>0</mn></math> konstantea, <math display=\"inline\"><mi>s</mi></math> funtzio unarioa eta <math display=\"inline\"><mi>+</mi></math> zein <math display=\"inline\"><mi>⋅</mi></math> funtzio bitarrak izan ditzake. Zeinu logikoak bi hizkuntzetan berak dira; zeinu bereziek bereizten dituzte."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Alfabetoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Formalismo baten <strong>alfabetoa</strong> haren zeinu komunen eta zeinu berezien bilduma da. Alfabetoak zein piezarekin lan egin daitekeen esaten du; oraindik ez du esaten zein pieza-segida den termino edo formula."
      }
     ]
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "I.3. Zeinu-kateak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Alfabeto bateko zeinuak bata bestearen ondoren idatz daitezke, errepikapenak onartuz. Horrela lortzen den edozein segida ez da automatikoki adierazpen zuzena. Gramatikak bereizi behar ditu ongi eratutako segidak eta zeinu-pilaketa hutsak."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Kate, luzera eta kateatzea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Zeinu-katea</strong> alfabeto bateko zeinuen segida finitu eta ez-hutsa da. <math display=\"inline\"><mi>ξ</mi></math> katearen luzera, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">long</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, haren zeinu kopurua da."
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
       "html": "Bi kate berdinak dira luzera bera badute eta posizio bakoitzean zeinu bera badute. Berdintasun metalinguistikoa erabiltzen dugu identitate sintaktiko hori adierazteko."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sinadurak <math display=\"inline\"><mi>a</mi></math>, <math display=\"inline\"><msup><mi>f</mi><mn>1</mn></msup></math> eta <math display=\"inline\"><msup><mi>R</mi><mn>2</mn></msup></math> baditu, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>a</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo></mrow></math> denak dira alfabeto bereko kate finituak. Lehenengoa termino bihurtuko da eta bigarrena formula; hirugarrena ez da adierazpena, eraketa- araurik ez duelako betetzen."
      }
     ]
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "I.4. Terminoen eta formulen gramatika errekurtsiboa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Termino eta formula kopurua infinitua denez, ezin dira banan-banan zerrendatu. Definizio eraikitzaile batek oinarrizko kasuak ematen ditu eta, ondoren, adierazpen berriak aurrekoetatik nola sortzen diren zehazten du. Definizioa <strong>bateratua</strong> da: formulek terminoak erabiltzen dituzte, eta Mosterinen jatorrizko sisteman deskriptoreak formula batetik termino bat sortzen du."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Zortzi eraketa-klausulak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sinadura finko batean terminoak eta formulak arau hauen bidez eta soilik arau hauen bidez eratzen dira:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Aldagai oro terminoa da.",
        "Konstante indibidual oro terminoa da.",
        "<math display=\"inline\"><msup><mi>f</mi><mi>n</mi></msup></math> <math display=\"inline\"><mi>n</mi></math>-adiko funtzio-sinboloa bada eta <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub></mrow></math> terminoak badira, <math display=\"inline\"><msup><mi>f</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math> terminoa da.",
        "<math display=\"inline\"><msup><mi>P</mi><mi>n</mi></msup></math> <math display=\"inline\"><mi>n</mi></math>-adiko predikatu-sinboloa bada eta <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub></mrow></math> terminoak badira, <math display=\"inline\"><msup><mi>P</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math> formula da. Bereziki, <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math> formula atomikoa da.",
        "<math display=\"inline\"><mi>φ</mi></math> formula bada, <math display=\"inline\"><mrow><mo>¬</mo><mi>φ</mi></mrow></math> formula da.",
        "<math display=\"inline\"><mi>φ</mi></math> eta <math display=\"inline\"><mi>ψ</mi></math> formulak badira, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∨</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>→</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>↔</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> formulak dira.",
        "<math display=\"inline\"><mi>φ</mi></math> formula bada eta <math display=\"inline\"><mi>x</mi></math> aldagaia bada, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>φ</mi></mrow></math> eta <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>φ</mi></mrow></math> formulak dira.",
        "<math display=\"inline\"><mi>φ</mi></math> formula bada eta <math display=\"inline\"><mi>x</mi></math> aldagaia bada, <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>φ</mi></mrow></math> terminoa da."
       ]
      },
      {
       "mota": "testua",
       "html": "Termino eta formulak zortzi klausula horiek sortzen dituzten multzorik txikienak dira. Beraz, klausulen aplikazio finitu batez eraiki ezin den zeinu-katea ez da ez termino ez formula."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Deskriptorearekiko fideltasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zortzigarren klausula Mosterinen formalismoaren parte da: <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>φ</mi></mrow></math>-k <math display=\"inline\"><mi>φ</mi></math> propietatea betetzen duen objektu bakarra deskribatzeko terminoa eratzen du. JAKINAren M01eko oinarrizko azpihizkuntzak deskriptorerik gabe lan egin dezake ondorengo adibide askotan; hori tokiko murrizketa da, ez jatorrizko gramatikaren klausula ezabatzea. L02 honetan klausula eta hari dagozkion indukzio-, askatasun- eta ordezkapen-kasuak esplizituki gordetzen dira."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Terminoa ez da formula"
    },
    {
     "mota": "testua",
     "html": "Termino baten eginkizun sintaktikoa objektu baten tokia betetzea da. Formula baten eginkizun sintaktikoa, berriz, predikazio edo baieztapen baten egitura izatea da. Bereizketa ez da oraindik egia edo erreferentzia aztertzea; eraikuntza- zuhaitzaren erroak zein klausula erabiltzen duen begiratzea nahikoa da."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Sailkapena kanpoko eraikitzailearen bidez",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>a</mi></math> termino sinpleak dira.",
        "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> termino funtzionala da.",
        "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> deskribapena da, eta terminoa da.",
        "<math display=\"inline\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> predikazio bat da, beraz formula.",
        "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi></mrow></math> ekuazioa da, berdintza baita haren kanpoko predikatua.",
        "<math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> ezeztapena da.",
        "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> orokorpena da."
       ]
      },
      {
       "mota": "testua",
       "html": "Hortaz, ezin zaio <math display=\"inline\"><mo>¬</mo></math> zuzenean termino bati aplikatu, ezta funtzio arrunt baten argumentu gisa formula bat jarri ere. Deskriptorearen klausulak bakarrik egiten du formula batetik termino baterako jauzi sintaktikoa."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Eraikuntza-zuhaitza"
    },
    {
     "mota": "testua",
     "html": "Adierazpen baten zuhaitza kanpotik barrura irakurtzen da. Erroak azken eraketa-klausula adierazten du; haren semeek klausula horren berehalako osagaiak erakusten dituzte. Hostoetara iristean aldagaiak eta konstanteak aurkitzen dira."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Zuhaitz bat urratsez urrats",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Har dezagun"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>y</mi><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Eraikuntza honela irakurtzen da:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Erroa <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi></mrow></math> da; haren osagaia baldintza bat da.",
        "Baldintzaren ezkerrean <math display=\"inline\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> atomo bat dago, eta eskuinean <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.",
        "Ezkerreko atomoaren argumentuak <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mi>a</mi></math> terminoak dira; <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eraikitzeko, lehenik <math display=\"inline\"><mi>x</mi></math> terminoa hartu eta <math display=\"inline\"><mi>f</mi></math> aplikatzen zaio.",
        "Eskuineko existentzialaren gorputza <math display=\"inline\"><mrow><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> atomo bat da; <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> terminoa <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>y</mi></math> oinarrizko terminoetatik eraikitzen da."
       ]
      },
      {
       "mota": "testua",
       "html": "Alderantziz, hostoetatik errotik gora irakurrita, urrats bakoitza zortzi klausula horietako baten aplikazio justifikatua da. Kate batek halako zuhaitz finiturik ez badu, ez dago ongi eratuta."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Termino eta formula kopurua"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposizioa",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Zenbakigarritasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Formalismo bakoitzean terminoen eta formulen multzoak infinitu zenbakigarriak dira."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Terminoak gutxienez zenbakigarriro infinituak dira, aldagai guztiak terminoak direlako. Gehienez zenbakigarriak dira, ordea: alfabetoa zenbakigarria da eta termino oro alfabeto horretako kate finitu bat da; luzera bakoitzeko kateak eta luzera guztien bildura zenbakigarriak dira. Formuletarako goiko muga bera balio du. Beheko muga berdintzak ematen du: aldagai bakoitzeko <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>x</mi></mrow></math> formula bat eraiki daiteke. Beraz, bi multzoak infinitu zenbakigarriak dira."
      }
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "I.5. Indukzio semiotikoa edo egitura-indukzioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Zenbaki arruntei buruzko baieztapen bat banan-banan frogatu ezin den bezala, ezin dira termino eta formula guztiak banaka aztertu. Haien eraikuntza errekurtsiboak, ordea, froga-eskema bat eskaintzen du: propietatea oinarrizko kasuetan egiaztatu eta eraikitzaile bakoitzak gordetzen duela erakutsi."
    },
    {
     "mota": "ingurunea",
     "izena": "Proposizioa",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Indukzio semiotikoaren teorema",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>T</mi></msub></math> terminoei buruzko propietatea eta <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>F</mi></msub></math> formulei buruzkoa. Baldintza hauek betetzen badira:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "aldagai guztiek <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>T</mi></msub></math> dute;",
        "konstante guztiek <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>T</mi></msub></math> dute;",
        "<math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub></mrow></math>-k <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>T</mi></msub></math> badute, <math display=\"inline\"><msup><mi>f</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math>-k ere bai;",
        "<math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub></mrow></math>-k <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>T</mi></msub></math> badute, <math display=\"inline\"><msup><mi>P</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math>-k <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>F</mi></msub></math> du;",
        "<math display=\"inline\"><mi>φ</mi></math>-k <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>F</mi></msub></math> badu, <math display=\"inline\"><mrow><mo>¬</mo><mi>φ</mi></mrow></math>-k ere bai;",
        "<math display=\"inline\"><mi>φ</mi></math>-k eta <math display=\"inline\"><mi>ψ</mi></math>-k <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>F</mi></msub></math> badute, lau konektibo bitarrekin eraikitako formulek ere bai;",
        "<math display=\"inline\"><mi>x</mi></math>-k <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>T</mi></msub></math> eta <math display=\"inline\"><mi>φ</mi></math>-k <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>F</mi></msub></math> badute, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>φ</mi></mrow></math>-k eta <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>φ</mi></mrow></math>-k <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>F</mi></msub></math> dute;",
        "<math display=\"inline\"><mi>x</mi></math>-k <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>T</mi></msub></math> eta <math display=\"inline\"><mi>φ</mi></math>-k <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>F</mi></msub></math> badute, <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>φ</mi></mrow></math>-k <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>T</mi></msub></math> du;"
       ]
      },
      {
       "mota": "testua",
       "html": "orduan termino guztiek <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>T</mi></msub></math> dute eta formula guztiek <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>F</mi></msub></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Adierazpenaren luzeraren gaineko indukzio sendoa erabiliko dugu. Har bedi <math display=\"inline\"><mi>E</mi></math> luzera <math display=\"inline\"><mi>m</mi></math> duen termino edo formula, eta suposa dezagun tesia egia dela <math display=\"inline\"><mi>m</mi></math> baino luzera txikiagoko adierazpen guztientzat."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>E</mi></math> aldagaia edo konstantea bada, lehen bi baldintzek ematen dute emaitza. <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi>f</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math> edo <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math> bada, argumentu guztiak <math display=\"inline\"><mi>E</mi></math> baino laburragoak dira; indukzio-hipotesia eta hirugarren edo laugarren baldintza aplikatzen dira. Ezeztapenean eta kuantifikazioan gorputza baino luzeagoa da adierazpen osoa; konektibo bitarrean bi osagaiak dira laburragoak. Azkenik, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>φ</mi></mrow></math> bada, bai <math display=\"inline\"><mi>x</mi></math> bai <math display=\"inline\"><mi>φ</mi></math> laburragoak dira, eta zortzigarren baldintzak terminoa estaltzen du. Eraketa-klausulek ez dutenez beste kasurik uzten, indukzio sendoak termino eta formula guztiak estaltzen ditu."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Indukzio semiotikoak ez du soilik teoremak frogatzeko balio. Kontzeptu edo funtzio bat adierazpen guztientzat <strong>definitzeko</strong> ere erabil daiteke: oinarrizko kasuetako balioa eman eta eraikitzaile bakoitzean aurreko osagaien balioetatik nola kalkulatu adierazi behar da."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Adibide landua: eraikuntza-altuera",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Defini dezagun batera terminoen <math display=\"inline\"><msub><mi>h</mi><mi>T</mi></msub></math> eta formulen <math display=\"inline\"><msub><mi>h</mi><mi>F</mi></msub></math> altuera:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><msub><mi>h</mi><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>h</mi><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>;",
        "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>h</mi><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>f</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>=</mo><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>h</mi><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>h</mi><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>;",
        "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>h</mi><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>P</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>=</mo><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>h</mi><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>h</mi><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>;",
        "<math display=\"inline\"><mrow><msub><mi>h</mi><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>¬</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>1</mn><mo>+</mo><msub><mi>h</mi><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>;",
        "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>h</mi><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>○</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>h</mi><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>,</mo><msub><mi>h</mi><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, non <math display=\"inline\"><mi>○</mi></math> lau konektibo bitarretako edozein den;",
        "<math display=\"inline\"><mrow><msub><mi>h</mi><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>h</mi><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>1</mn><mo>+</mo><msub><mi>h</mi><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>;",
        "<math display=\"inline\"><mrow><msub><mi>h</mi><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>1</mn><mo>+</mo><msub><mi>h</mi><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "Klausula bakoitzak zenbaki arrunt bat ematen du osagaien altuerak zenbaki arruntak direnean. Indukzio semiotikoaren bidez, beraz, termino eta formula orok altuera finitu eta ongi definitua du."
      },
      {
       "mota": "testua",
       "html": "Aurreko <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>y</mi><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> formularako: <math display=\"inline\"><mrow><msub><mi>h</mi><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>h</mi><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>h</mi><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>; hortik <math display=\"inline\"><mrow><msub><mi>h</mi><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>=</mo><msub><mi>h</mi><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>=</mo><mn>1</mn></mrow></math>; bi atomoen altuera <math display=\"inline\"><mn>2</mn></math> da; existentzialarena <math display=\"inline\"><mn>3</mn></math>; baldintzarena <math display=\"inline\"><mn>4</mn></math>; eta kanpoko kuantifikatzailea gehituta formula osoaren altuera <math display=\"inline\"><mn>5</mn></math> da."
      }
     ]
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "I.6. Aldagai baten agerraldi askea eta lotua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kuantifikatzaileak eta deskriptorea <strong>lotzaileak</strong> dira: aldagai bat daramate ondoan, eta lotzailearen irismeneko aldagai egokiak lotzen dituzte. Ideia bera agertzen da ohiko matematikan ere. Adibidez, <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mfrac><mn>1</mn><msup><mi>n</mi><mn>2</mn></msup></mfrac></mrow></math> adierazpenean <math display=\"inline\"><mi>n</mi></math> batukari-indizeak lotzen du, eta <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> adierazpenean integrazio-zeinuak <math display=\"inline\"><mi>x</mi></math> lotzen du. Hala ere, intuizioa ez da nahikoa formula konplexuetan; askatasuna eta lotura egituraren gainean definitu behar dira."
    },
    {
     "mota": "testua",
     "html": "Hemen, Mosterinen erabilerari jarraituz, &quot;<math display=\"inline\"><mi>x</mi></math> aske dago <math display=\"inline\"><mi>E</mi></math>-n&quot; eta &quot;<math display=\"inline\"><mi>x</mi></math> lotuta dago <math display=\"inline\"><mi>E</mi></math>-n&quot; esango dugu. Horrek ez du esan nahi agerraldi guztiak mota berekoak direnik: aldagai bera aske eta lotuta egon daiteke adierazpen berean."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Askatasuna, kasu errekurtsibo guztietan",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>x</mi></math> aldagaia <math display=\"inline\"><mi>E</mi></math> adierazpenean aske dagoen honela erabakitzen da:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Aldagai batean: <math display=\"inline\"><mi>x</mi></math> aske dago <math display=\"inline\"><mi>z</mi></math>-n baldin eta soilik baldin <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>z</mi></mrow></math>.",
        "Konstante batean: <math display=\"inline\"><mi>x</mi></math> ez dago inoiz aske <math display=\"inline\"><mi>a</mi></math>-n.",
        "Termino funtzionalean: <math display=\"inline\"><mi>x</mi></math> aske dago <math display=\"inline\"><msup><mi>f</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math>-n baldin eta argumentuetako batean, gutxienez, aske badago.",
        "Atomo batean: <math display=\"inline\"><mi>x</mi></math> aske dago <math display=\"inline\"><msup><mi>P</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math>-n baldin eta argumentuetako batean aske badago. Berdintzarako, <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math>-n aske dago baldin eta <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math>-en edo <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math>-n aske badago.",
        "Ezeztapenean: <math display=\"inline\"><mi>x</mi></math> aske dago <math display=\"inline\"><mrow><mo>¬</mo><mi>φ</mi></mrow></math>-n baldin eta <math display=\"inline\"><mi>φ</mi></math>-n aske badago.",
        "Konektibo bitarrean: <math display=\"inline\"><mi>x</mi></math> aske dago <math display=\"inline\"><mrow><mi>φ</mi><mo>○</mo><mi>ψ</mi></mrow></math>-n baldin eta <math display=\"inline\"><mi>φ</mi></math>-n edo <math display=\"inline\"><mi>ψ</mi></math>-n aske badago.",
        "Kuantifikazioan: <math display=\"inline\"><mi>x</mi></math> aske dago <math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi><mi>φ</mi></mrow></math>-n edo <math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mi>φ</mi></mrow></math>-n baldin eta <math display=\"inline\"><mi>φ</mi></math>-n aske badago eta <math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mi>z</mi></mrow></math> bada.",
        "Deskribapenean: <math display=\"inline\"><mi>x</mi></math> aske dago <math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi><mi>φ</mi></mrow></math>-n baldin eta <math display=\"inline\"><mi>φ</mi></math>-n aske badago eta <math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mi>z</mi></mrow></math> bada."
       ]
      },
      {
       "mota": "testua",
       "html": "Hemen <math display=\"inline\"><mi>○</mi></math> ikurrak lau konektibo bitarretako edozein ordezkatzen du."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Azken bi klausulek lotzailearen lana erakusten dute. <math display=\"inline\"><mi>z</mi></math>-ren agerraldi askeak <math display=\"inline\"><mi>φ</mi></math> barruan egon daitezke, baina <math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi></mrow></math>, <math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi></mrow></math> edo <math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi></mrow></math> aurrean jartzean ez dira adierazpen osoan aske geratzen."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Lotura, kasu errekurtsibo guztietan",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>x</mi></math> aldagaia <math display=\"inline\"><mi>E</mi></math> adierazpenean lotuta dagoen honela erabakitzen da:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Aldagai bakarrean eta konstante bakarrean, <math display=\"inline\"><mi>x</mi></math> ez dago inoiz lotuta.",
        "<math display=\"inline\"><msup><mi>f</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math> terminoan, argumentuetako batean lotuta badago eta soilik orduan dago lotuta.",
        "<math display=\"inline\"><msup><mi>P</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math> atomoan, argumentuetako batean lotuta badago eta soilik orduan dago lotuta; berdintzarako gauza bera bi terminoekin.",
        "<math display=\"inline\"><mrow><mo>¬</mo><mi>φ</mi></mrow></math>-n, <math display=\"inline\"><mi>φ</mi></math>-n lotuta badago eta soilik orduan.",
        "<math display=\"inline\"><mrow><mi>φ</mi><mo>○</mo><mi>ψ</mi></mrow></math>-n, osagaietako batean lotuta badago eta soilik orduan.",
        "<math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi><mi>φ</mi></mrow></math>-n eta <math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mi>φ</mi></mrow></math>-n, <math display=\"inline\"><mi>φ</mi></math>-n lotuta badago <strong>edo</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>z</mi></mrow></math> bada.",
        "<math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi><mi>φ</mi></mrow></math>-n, <math display=\"inline\"><mi>φ</mi></math>-n lotuta badago <strong>edo</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>z</mi></mrow></math> bada."
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
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Aldagai bera aske eta lotuta",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Har dezagun"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mo>∀</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mi>u</mi></math> lotuta dago: kanpoko <math display=\"inline\"><mrow><mo>∀</mo><mi>u</mi></mrow></math> lotzailea da eta <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> haren irismenaren barruan dago.",
        "<math display=\"inline\"><mi>z</mi></math> aske dago <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> atomoan, eta ez dago <math display=\"inline\"><mi>z</mi></math> lotzen duen zeinurik.",
        "<math display=\"inline\"><mi>x</mi></math> aske dago <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n, baina lotuta <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n. Beraz, <math display=\"inline\"><mi>x</mi></math> aldi berean aske eta lotuta dago <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math>-n.",
        "<math display=\"inline\"><mi>y</mi></math> eta <math display=\"inline\"><mi>w</mi></math> ez daude <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math>-n."
       ]
      },
      {
       "mota": "testua",
       "html": "Ondorioz, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">FV</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Proposizioa",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Lau aukera baztertzaileak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>x</mi></math> aldagai eta <math display=\"inline\"><mi>E</mi></math> adierazpen bakoitzerako lau egoera hauetako bat eta bakarra gertatzen da: <math display=\"inline\"><mi>x</mi></math> ez dago <math display=\"inline\"><mi>E</mi></math>-n; aske baina ez lotuta dago; lotuta baina ez aske dago; edo aske eta lotuta dago. Zein egoera den erabakigarria da."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Askatasunaren eta loturaren definizioak egitura-errekurtsiboak dira. <math display=\"inline\"><mi>E</mi></math>-ren eraikuntza-zuhaitza finitua denez, hostoetatik hasita klausula egokia aplika daiteke nodo bakoitzean. Urrats bakoitzean konparazio finituak egiten dira"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "adibidez, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>z</mi></mrow></math> den edo osagai finituren batean dagoen -, eta horrek erabaki-prozedura amaikorra ematen du."
       ]
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Designatzaileak, sententziak eta adierazpen irekiak",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Designatzailea</strong> aldagai askerik ez duen terminoa da.",
        "<strong>Sententzia</strong> aldagai askerik ez duen formula da.",
        "<strong>Termino irekia</strong> designatzailea ez den terminoa da.",
        "<strong>Formula irekia</strong> sententzia ez den formula da."
       ]
      },
      {
       "mota": "testua",
       "html": "Aldagairik gabeko terminoa designatzailea da eta aldagairik gabeko formula sententzia, baina alderantzizkoa ez da beharrezkoa: aldagaiak ager daitezke guztiak lotuta egonez gero."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hortaz, zeinu-kate bat ez-adierazkorra izan daiteke edo adierazpena. Adierazpena terminoa edo formula da; terminoa irekia edo designatzailea, eta formula irekia edo sententzia. Sailkapen hori sintaktikoa da guztiz."
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "I.7. Aldagai bat termino batez ordeztea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ordezkapenak aldagai <math display=\"inline\"><mi>x</mi></math>, termino <math display=\"inline\"><mi>t</mi></math> eta adierazpen <math display=\"inline\"><mi>E</mi></math> hartzen ditu, eta beste adierazpen bat ematen du. Mosterinek <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>E</mi></mrow></math> idazten du; hemen, baliokide moderno gisa, <math display=\"inline\"><mrow><mi>E</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> ere erabiliko dugu. Helburua ez da testuan letra bat itsu-itsuan aldatzea: ordezkatutako terminoaren aldagai askeek aske jarraitu behar dute."
    },
    {
     "mota": "abisua",
     "titulua": "Aldagai-harrapaketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> formulan <math display=\"inline\"><mi>x</mi></math> zuzenean <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-z ordezkatuz gero, <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> litzateke emaitza. Baina <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ko <math display=\"inline\"><mi>y</mi></math> askea kanpoko kuantifikatzaileak harrapatu du. Lotura hori ez zegoen jatorrizko terminoan, eta ordezkapen zuzenak ez du sortu behar."
      },
      {
       "mota": "testua",
       "html": "Lehenik, lotutako <math display=\"inline\"><mi>y</mi></math> aldagai fresko batez berrizendatzen da: <math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Orain ordezkapena egin daiteke: <math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ko <math display=\"inline\"><mi>y</mi></math> aske mantendu da."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oinarrizko eta konposiziozko kasuak"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
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
        "Aldagaia: <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>z</mi><mo>=</mo><mi>t</mi></mrow></math> baldin <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>z</mi></mrow></math>, eta <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>z</mi><mo>=</mo><mi>z</mi></mrow></math> baldin <math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mi>z</mi></mrow></math>.",
        "Konstantea: <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>a</mi><mo>=</mo><mi>a</mi></mrow></math>.",
        "Funtzioa: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><msup><mi>f</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><msup><mi>f</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math></span>.",
        "Predikatua: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><msup><mi>P</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><msup><mi>P</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math></span>. Bereziki, <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mrow><mi>t</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.",
        "Ezeztapena: <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>¬</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>=</mo><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "Konektibo bitarrak: <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>○</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>○</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kasu horietan ordezkapena eraikuntza-zuhaitzeko osagaietara jaisten da. Lotzaile baten kasuan, ordea, hiru aukera bereizi behar dira."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lotzaileen hiru kasuak"
    },
    {
     "mota": "testua",
     "html": "Izan bedi <math display=\"inline\"><mrow><mi>Q</mi><mi>z</mi><mi>φ</mi></mrow></math> adierazpena, non <math display=\"inline\"><mi>Q</mi></math> hauetako bat den: <math display=\"inline\"><mo>∀</mo></math>, <math display=\"inline\"><mo>∃</mo></math> edo <math display=\"inline\"><mi>ι</mi></math>. Lehen bi aukeretan emaitza formula da; hirugarrenean, deskribapen-terminoa."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Ordezkapen totala lotzaile baten azpian",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msubsup><mi>S</mi><mi>x</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>Q</mi><mi>z</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup></math> honela definitzen da:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<strong>Ez dago zer ordeztu.</strong> <math display=\"inline\"><mi>x</mi></math> ez badago aske <math display=\"inline\"><mrow><mi>Q</mi><mi>z</mi><mi>φ</mi></mrow></math>-n, <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>Q</mi><mi>z</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>=</mo><mi>Q</mi><mi>z</mi><mi>φ</mi></mrow></math>.",
        "<strong>Ez dago harrapaketa-arriskurik.</strong> <math display=\"inline\"><mi>x</mi></math> aske badago <math display=\"inline\"><mrow><mi>Q</mi><mi>z</mi><mi>φ</mi></mrow></math>-n baina <math display=\"inline\"><mi>z</mi></math> ez badago aske <math display=\"inline\"><mi>t</mi></math>-n, <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>Q</mi><mi>z</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>=</mo><mi>Q</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.",
        "<strong>Harrapaketa-arriskua dago.</strong> <math display=\"inline\"><mi>x</mi></math> aske badago <math display=\"inline\"><mrow><mi>Q</mi><mi>z</mi><mi>φ</mi></mrow></math>-n eta <math display=\"inline\"><mi>z</mi></math> aske badago <math display=\"inline\"><mi>t</mi></math>-n, aukeratu <math display=\"inline\"><mi>v</mi></math> aldagai freskoa, <math display=\"inline\"><mrow><mi>Q</mi><mi>z</mi><mi>φ</mi></mrow></math>-n eta <math display=\"inline\"><mi>t</mi></math>-n inon agertzen ez den indize txikieneko aldagaia. Orduan"
       ]
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>S</mi><mi>x</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>Q</mi><mi>z</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>=</mo><mi>Q</mi><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mrow><mi>t</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>z</mi><mi>v</mi></msubsup><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Hau da: lehenik <math display=\"inline\"><mi>z</mi></math> lotua <math display=\"inline\"><mi>v</mi></math>-z berrizendatzen da, eta gero <math display=\"inline\"><mi>x</mi></math>-ren ordez <math display=\"inline\"><mi>t</mi></math> sartzen da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "&quot;Indize txikieneko&quot; baldintzak ez du emaitzaren esanahi logikoa aldatzen; ordezkapena benetako funtzio bakar bihurtzen du. &quot;Edozein aldagai fresko&quot; esango bagenu, emaitza equivalencia alfa arte bakarrik legoke zehaztuta."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Hiru kasuak formula berean",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> hartuta:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi>E</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>a</mi><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>E</mi></mrow></math>, <math display=\"inline\"><mi>z</mi></math> ez baitago aske <math display=\"inline\"><mi>E</mi></math>-n.",
        "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>E</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, <math display=\"inline\"><mi>y</mi></math> ez baitago aske <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n.",
        "<math display=\"inline\"><mrow><mi>E</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> kalkulatzeko, <math display=\"inline\"><mi>y</mi></math> lotua <math display=\"inline\"><mi>w</mi></math> freskoaz berrizendatu behar da: <math display=\"inline\"><mrow><mi>E</mi><mo>≡</mo><mo>∀</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; beraz, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>E</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo>∀</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>."
       ]
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Proposizioa",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Ordezkapenaren totala eta bakartasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>x</mi></math> aldagai, <math display=\"inline\"><mi>t</mi></math> termino eta <math display=\"inline\"><mi>E</mi></math> adierazpen bakoitzerako badago adierazpen bakar bat, <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>E</mi></mrow></math>, aurreko klausulek emana. Gainera, emaitza terminoa da <math display=\"inline\"><mi>E</mi></math> terminoa bada, eta formula <math display=\"inline\"><mi>E</mi></math> formula bada."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>E</mi></math>-ren gaineko indukzio semiotikoa egiten da. Aldagai eta konstanteen kasuak esplizituak dira. Funtzio, predikatu eta konektiboetan, indukzio-hipotesiak osagai bakoitzaren emaitza bakarra ematen du, eta kanpoko eraikitzaileak kategoria gordetzen du. Lotzaile batean hiru baldintzak elkar baztertzen dute eta aukera guztiak agortzen dituzte. Hirugarren kasuko aldagai freskoa ere bakarra da indize txikienekoaren arauagatik. Deskriptoreak formula-gorputza hartu eta terminoa itzultzen du; gainerako lotzaileek formula itzultzen dute."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ordezkapenaren ondorio erabilgarriak"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposizioa",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Zazpi propietate",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Edozein <math display=\"inline\"><mi>E</mi></math>, <math display=\"inline\"><mi>x</mi></math>, <math display=\"inline\"><mi>z</mi></math> eta <math display=\"inline\"><mi>t</mi></math>-rako:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>x</mi></msubsup><mi>E</mi><mo>=</mo><mi>E</mi></mrow></math>.",
        "<math display=\"inline\"><mi>x</mi></math> ez badago aske <math display=\"inline\"><mi>E</mi></math>-n, <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>E</mi><mo>=</mo><mi>E</mi></mrow></math>.",
        "<math display=\"inline\"><mi>x</mi></math> aske badago <math display=\"inline\"><mi>E</mi></math>-n, <math display=\"inline\"><mi>t</mi></math> emaitzan agertzen da eta <math display=\"inline\"><mi>t</mi></math>-n aske dagoen aldagai orok aske jarraitzen du <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>E</mi></mrow></math>-n.",
        "<math display=\"inline\"><mi>z</mi></math> ez badago <math display=\"inline\"><mi>E</mi></math>-n, <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>z</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mi>z</mi></msubsup><mi>E</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msubsup><mo>=</mo><mi>E</mi></mrow></math>.",
        "<math display=\"inline\"><mi>x</mi></math> ez badago aske <math display=\"inline\"><mi>t</mi></math>-n, <math display=\"inline\"><mi>x</mi></math> ez dago aske <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>E</mi></mrow></math>-n.",
        "<math display=\"inline\"><mi>z</mi></math> aske dago <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>z</mi></msubsup><mi>E</mi></mrow></math>-n baldin eta soilik baldin <math display=\"inline\"><mi>x</mi></math> aske badago <math display=\"inline\"><mi>E</mi></math>-n edo <math display=\"inline\"><mi>z</mi></math> aske badago <math display=\"inline\"><mi>E</mi></math>-n.",
        "<math display=\"inline\"><mi>z</mi></math> aske dago <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>E</mi></mrow></math>-n baldin eta soilik baldin gutxienez hauetako bat gertatzen bada: (a) <math display=\"inline\"><mi>z</mi></math> aske dago <math display=\"inline\"><mi>E</mi></math>-n eta <math display=\"inline\"><mrow><mi>z</mi><mo>≠</mo><mi>x</mi></mrow></math>; (b) <math display=\"inline\"><mi>x</mi></math> aske dago <math display=\"inline\"><mi>E</mi></math>-n eta <math display=\"inline\"><mi>z</mi></math> aske dago <math display=\"inline\"><mi>t</mi></math>-n."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Propietate bakoitza aldi berean termino eta formuletarako frogatzen da, indukzio semiotikoaren zortzi kasuak erabiliz. Lotzailerik gabeko kasuetan baieztapena osagaietara zuzenean jaisten da. <math display=\"inline\"><mrow><mi>Q</mi><mi>y</mi><mi>φ</mi></mrow></math> kasuan, <math display=\"inline\"><mi>x</mi></math> aske ez badago, ordezkapena identitatea da; <math display=\"inline\"><mi>y</mi></math> ez badago aske <math display=\"inline\"><mi>t</mi></math>-n, indukzio- hipotesia gorputzean aplikatzen da; eta <math display=\"inline\"><mi>y</mi></math> aske badago <math display=\"inline\"><mi>t</mi></math>-n, aldagai freskoa sartzeak zehazki eragozten du <math display=\"inline\"><mi>t</mi></math>-ko aldagai aske bat lotuta geratzea. Hirugarren propietatea da azken baldintza horren arrazoia, eta zazpigarrenak emaitzako aldagai askeen bi jatorri posibleak bereizten ditu."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Eraikuntza-zuhaitza, aldagai-indizeen zerrenda eta klausula bakoitzeko baldintza finituak direnez, erabakigarria da emandako <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>,</mo><msub><mi>E</mi><mn>2</mn></msub><mo>,</mo><mi>x</mi><mo>,</mo><mi>t</mi></mrow></math>-rako <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><msub><mi>E</mi><mn>2</mn></msub></mrow></math> den ala ez."
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "I.8. Konbentzio notazionalak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Mosterinen definizio ofizialak aurrizki-notazio abstraktua erabiltzen du: eraikitzailea osagaien aurrean idazten da eta ez da parentesirik behar. Irakurketa arruntean, ordea, metahizkuntzako izen erosoagoak erabil daitezke. L02 honetan hasieratik erabili dugu notazio moderno hori; hemen zehazten da zein laburdurari dagokion."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Aurrizkitik ohiko idazkerara",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Honako izen metalinguistikoak erabiliko ditugu:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math> aurrizkiko berdintza-predikatuaren ordez;",
        "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∨</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>→</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>↔</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eraikitzailea bi formulen artean idatzita;",
        "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, erabilerak finkatutako funtzio eta predikatu bitarren notaziorako."
       ]
      },
      {
       "mota": "testua",
       "html": "Parentesiak metahizkuntzako irakurketa argitzeko dira. Ez dira jatorrizko aurrizki-formalismo abstraktuaren zeinu berriak."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Parentesiak aurrezteko arauak",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Kanpoko parentesiak kendu daitezke: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ordez <math display=\"inline\"><mrow><mi>φ</mi><mo>∧</mo><mi>ψ</mi></mrow></math> idatz daiteke.",
        "<math display=\"inline\"><mo>→</mo></math> eta <math display=\"block\"><mo>↔</mo></math> konektiboek <math display=\"inline\"><mi>∧</mi></math> eta <math display=\"inline\"><mi>∨</mi></math> baino irismen zabalagoa dute. Hortaz, <math display=\"inline\"><mrow><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo>→</mo><mi>χ</mi></mrow></math> idazkera <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>χ</mi></mrow></math> da, eta <math display=\"inline\"><mrow><mi>φ</mi><mo>→</mo><mi>ψ</mi><mo>∨</mo><mi>χ</mi></mrow></math> idazkera <math display=\"inline\"><mrow><mi>φ</mi><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ψ</mi><mo>∨</mo><mi>χ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "Ezkerretik iteratutako konjuntzio eta disjuntzioetan barne-parentesiak ezaba daitezke. Adibidez, <math display=\"inline\"><mrow><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo>∧</mo><mi>χ</mi><mo>∧</mo><mi>δ</mi></mrow></math> idazkerak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>χ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>δ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> laburtzen du.",
        "Zalantzarik egonez gero, parentesiak mantendu behar dira. Laburdurak ez du egitura anbiguoa justifikatzen."
       ]
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Irismenaren irakurketa",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo>→</mo><mi>χ</mi></mrow></math> hau da: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>χ</mi></mrow></math>.",
        "<math display=\"inline\"><mrow><mi>φ</mi><mo>→</mo><mi>ψ</mi><mo>∨</mo><mi>χ</mi></mrow></math> hau da: <math display=\"inline\"><mrow><mi>φ</mi><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ψ</mi><mo>∨</mo><mi>χ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "<math display=\"inline\"><mrow><mi>φ</mi><mo>∨</mo><mi>ψ</mi><mo>→</mo><mi>χ</mi><mo>∧</mo><mi>δ</mi></mrow></math> hau da: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∨</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>χ</mi><mo>∧</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "<math display=\"inline\"><mrow><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>¬</mo><mi>φ</mi><mo>∨</mo><mo>¬</mo><mi>ψ</mi></mrow></math> hau da: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>¬</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>¬</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kuantifikatzaile mota bereko segida ere labur daiteke: <math display=\"inline\"><mrow><mo>∀</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mi>φ</mi></mrow></math> idazkerak <math display=\"inline\"><mrow><mo>∀</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><mo>∀</mo><msub><mi>x</mi><mi>n</mi></msub><mi>φ</mi></mrow></math> esan nahi du, eta berdin existentzialekin. Laburdura horiek adierazpenen izen metalinguistikoei dagozkie; gramatika ofizialeko eraketa-zuhaitza ez dute aldatzen."
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "I.9. Ordezkapenaren adibide landuak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Atal honetako adibide guztiek formula bera erabiltzen dute:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mo>∀</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>w</mi></mrow></math> elkarren desberdinak direla suposatuko dugu. <math display=\"inline\"><mi>u</mi></math> lotuta dago, <math display=\"inline\"><mi>z</mi></math> aske, <math display=\"inline\"><mi>x</mi></math> aske eta lotuta, eta <math display=\"inline\"><mi>y</mi></math> zein <math display=\"inline\"><mi>w</mi></math> ez dira formulan agertzen. Horri esker, ordezkapenaren klausula bakoitza formula beraren gainean ikus daiteke."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "1. Ez dago ordezkatu beharreko agerraldi askerik",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kanpoko <math display=\"inline\"><mi>u</mi></math> eta barneko <math display=\"inline\"><mi>x</mi></math> lotuak ez dira ordezkatzen, eta formulan ez dauden aldagaiek ere ez dute aldaketarik eragiten:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>u</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi mathvariant=\"normal\">Φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>y</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi mathvariant=\"normal\">Φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>w</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi mathvariant=\"normal\">Φ</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "edozein <math display=\"inline\"><mi>t</mi></math> terminotarako. Kontuz: <math display=\"inline\"><mi>x</mi></math>-k agerraldi aske bat ere badu <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n; horregatik <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> ez da, oro har, identitatea."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "2. Ordezkapen zuzena, harrapaketarik gabe",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>x</mi></math>-ren agerraldi askea <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n bakarrik dago. Terminoak kanpoko <math display=\"inline\"><mi>u</mi></math> askea ez badu, ordezkapena zuzenean jaisten da:"
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
       "html": "Azken terminoan <math display=\"inline\"><mi>y</mi></math> deskriptoreak lotzen du; beraz, ez dago <math display=\"inline\"><mi>y</mi></math> askea harrapatzeko arriskurik."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "3. Kanpoko kuantifikatzailea berrizendatzea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>x</mi></math> <math display=\"inline\"><mi>u</mi></math>-z edo <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-z ordeztu nahi bada, termino berriko <math display=\"inline\"><mi>u</mi></math> askea <math display=\"inline\"><mrow><mo>∀</mo><mi>u</mi></mrow></math>-k harrapatuko luke. <math display=\"inline\"><mi>y</mi></math> freskoa hartuta:"
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
       "html": "Antzera, <math display=\"inline\"><mi>z</mi></math> <math display=\"inline\"><mi>u</mi></math>-z ordezteko kanpoko lotzailea berrizendatzen da:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "4. Barneko kuantifikatzailea berrizendatzea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>z</mi></math> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-z ordeztean, termino berriko <math display=\"inline\"><mi>x</mi></math> askea barneko <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi></mrow></math>-ek harrapatuko luke. <math display=\"inline\"><mi>y</mi></math> freskoa erabiliz:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo>∀</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>y</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Aldiz, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k ez du aldagai askerik eta ez da berrizendatzerik behar:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo>∀</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>x</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Gauza bera gertatzen da <math display=\"inline\"><mrow><mi>ι</mi><mi>y</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> designatzailearekin:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>ι</mi><mi>y</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo>∀</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>x</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>ι</mi><mi>y</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "5. Identitatea eta elkarren segidako ordezkapenak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Identitate-kasuak <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>z</mi><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi mathvariant=\"normal\">Φ</mi></mrow></math> ematen du. Bi ordezkapen bata bestearen ondoren egiten direnean, ordena esplizituki irakurri behar da: barrukoena lehenik aplikatzen da. Adibidez,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>S</mi><mi>z</mi><mrow><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msubsup><mo>=</mo><mo>∀</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Beste adibide batean, lehen <math display=\"inline\"><mi>z</mi></math> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-z ordezteak barneko <math display=\"inline\"><mi>x</mi></math> lotua berrizendatzera behartzen du, baina <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ko <math display=\"inline\"><mi>x</mi></math> askea bere horretan uzten du:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>S</mi><mi>z</mi><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mo>∀</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>y</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Ondorengo ordezkapen batek <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ko agerraldi askea alda dezake, baina <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi></mrow></math>-k lotutako <math display=\"inline\"><mi>y</mi></math> ez du ukitzen. Horregatik ordezkapenen konposizioa ez da letra-aldaketa simultaneo eta ordenagabea."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Atalaren ondorioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Adibideek hiru kontrol erakusten dituzte: ordezkatu nahi den aldagaia aske dagoen egiaztatzea, termino ordezkatzaileko aldagai askeak identifikatzea eta bidean aurkitutako lotzaile gatazkatsuak aldagai freskoz berrizendatzea. Hiru urratsak definizio errekurtsibo bakarrean bilduta daudenez, ordezkapena totala, erabakigarria eta aldagai-harrapaketarik gabea da."
      }
     ]
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Mosterinen notaziotik JAKINAko irakurketara",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "Mosterin, Jesus - Logica de primer orden, 2. arg., Ariel, 1976",
     "xehetasuna": "II.1-II.4; 49.-87. or. inprimatuak; TND 55. or.; euskarazko egokitzapen didaktikoa",
     "hizkuntza": "es"
    },
    {
     "mota": "testua",
     "html": "1976ko testuak gaur ere zehatza den kalkulua erabiltzen du, baina haren tipografia eta frogapen-markak ez datoz bat L03-L05 loteetan erabilitako idazkera modernoarekin. Ondoko taulak ez du formalismoa aldatzen: zeinu bera nola berridazten den, zer mailatan irakurri behar den eta zein baldintza ezin den galdu erakusten du."
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
     "titulua": "Bi ondorio-zeinuak ez nahastu",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math> baieztapena dedukzioaren barrukoa da: lerro-segida arautua erakutsi behar da. <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi></mrow></math> baieztapena eredu eta interpretazioei buruzkoa da. L04-L05eko ariketek lehenengo erlazioa eraikitzen dute. Kalkuluaren zuzentasunak gero <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math>-tik <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi></mrow></math> igarotzea justifika dezake, baina urrats metateoriko hori ez dago dedukzio-taularen barruan."
      }
     ]
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "L04-L05eko dedukzio zenbakituak irakurtzeko irizpide uniformea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "L04k irismena hitzez azaltzen du; L05ek, berriz, <strong>L.</strong>, <strong>M</strong>, <strong>Formula</strong> eta <strong>Just.</strong> zutabeetan trinkotzen du. Bi aurkezpenek pila-egitura bera kodetzen dute. Irakurketa fidela egiteko, ordena hau erabil daiteke dedukzio guztietan:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Sekuentzia identifikatu.</strong> Enuntziatutik bereizi premisak <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>α</mi><mi>n</mi></msub></mrow></math> eta azken helburua <math display=\"inline\"><mi>β</mi></math>. Taularen esanahia <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>α</mi><mi>n</mi></msub><mo>⊢</mo><mi>β</mi></mrow></math> da; premisarik ez badago, <math display=\"inline\"><mrow><mo>⊢</mo><mi>β</mi></mrow></math>.",
      "<strong>Lehen helburua ireki.</strong> <math display=\"inline\"><mrow><mi>?</mi><mi>β</mi></mrow></math> lerroak zeregina adierazten du, ez lortutako formula bat. L04n gauza bera <strong>helburua</strong> hitzak adierazten du.",
      "<strong>Irismen-pila jarraitu.</strong> L05eko <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>0</mn></mrow></math> kanpoko maila da; <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> balioek barrurago irekitako azpihelburuak edo hipotesiak adierazten dituzte. Maila jaisteak azken barruti irekia itxi dela esan nahi du. L04n itxiera hori ebazpenaren azken esaldiek azaltzen dute.",
      "<strong>Lerroaren mota erabaki.</strong> Lerro bat premisa, aldi baterako hipotesia, inferentzia edo helburua izan daiteke. <code>prem.</code> ez da inferentzia-erregela; <code>?</code> ez da konektiboa; hipotesia ez da kanpoko teorema.",
      "<strong>Justifikazioa ezkerretik eskuinera berreraiki.</strong> <code>MP, 10, 4</code> irakurtzean, lehenik 10. eta 4. lerroak aurkitu, biak erabilgarriak direla egiaztatu, eta MPren eskemak oraingo formula ematen duela konprobatu. Ordena kronologikoa beti goranzkoa da: etorkizuneko lerroa ezin da aipatu.",
      "<strong>Ordezkapena egiaztatu.</strong> EG, IP, II, EI, DP edo DI agertzen denean, idatzi zein aldagai ordezkatu den eta zein termino jarri den haren lekuan. Ondoren egiaztatu agerraldi libreak bakarrik aldatu direla eta ez dela aldagairik harrapatu.",
      "<strong>Freskotasuna bereiz egiaztatu.</strong> EP edo GEP lerro batean, <math display=\"inline\"><mi>u</mi></math> edo <math display=\"inline\"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>u</mi><mi>n</mi></msub></mrow></math> ez da aurreko lerroetan agertu behar. Baldintza hori ez dago formularen barruan: dedukzio osoaren historiari buruzko alboko baldintza da.",
      "<strong>Helburua nola ixten den esan.</strong> Zuzeneko itxieran helburuaren formula bera lortzen da; kontraesanezkoan <math display=\"inline\"><mi>δ</mi></math> eta <math display=\"inline\"><mrow><mo>¬</mo><mi>δ</mi></mrow></math>; baldintzazkoan aurrekari-hipotesitik ondorengoa; orokortzean kasu arbitrarioa, aldagaia kanpoko lerroetan libre ez dagoela. Itxitako emaitza maila batean gora erabilgarri bihurtzen da; barruko hipotesiak ez.",
      "<strong>Azken maila egiaztatu.</strong> Dedukzio osoan lehen helburua itxita geratu behar da, eta emaitza ez da aldi baterako hipotesi edo aldagai kritiko debekatu baten menpe geratu behar. Orduan bakarrik irakur daiteke azken <math display=\"inline\"><mo>⊢</mo></math> baieztapena."
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "L05eko taula batean <code>M = 3</code> duen lerro batek <code>M = 0,1,2</code> mailetako lerro erabilgarriak aipa ditzake, baita <code>M = 3</code> mailan lehenago lortutakoak ere. <code>M = 2</code>ra itzultzen denean, ordea, <code>M = 3</code>ko aldi baterako hipotesia ez dago jada erabilgarri. Haren ordez, itxitako azpihelburuaren emaitza dago. L04ko &quot;5. eta 6. lerroek 4. helburua ixten dute&quot; esaldiak trantsizio berbera hitzez adierazten du."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lerro bakoitzerako bost galderako kontrola"
    },
    {
     "mota": "testua",
     "html": "Dedukzio bat berrikustean nahikoa da lerro bakoitzean bost galdera hauek ordenan erantzutea:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Zer mota du lerroak: helburua, premisa, hipotesia ala inferentzia?",
      "Zein irismenetan dago, eta zer lerro daude irismen horretan erabilgarri?",
      "Justifikazioak aipatzen dituen lerroak aurrekoak eta erabilgarriak al dira?",
      "Arauaren formula-eskema eta alboko baldintzak bete al dira?",
      "Lerroak helburu bat ixten badu, zein mailatara itzultzen da emaitza?"
     ]
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "TNDren bistaratze estrukturala Frederic-ekin",
   "blokeak": [
    {
     "mota": "testua",
     "html": "TNDk, <math display=\"inline\"><mrow><mi>α</mi><mo>∨</mo><mo>¬</mo><mi>α</mi></mrow></math>, ez du premisarik. Bere justifikazioak bi kontraesanezko barruti garbi eta habiaratu ditu: kanpoan disjuntzioaren ezeztapena suposatzen da; barruan <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> suposatzen da. Egitura hori Frederic-en <code>subproof</code>, <code>assume</code> eta <code>step</code> osagaiekin informaziorik galdu gabe adieraz daiteke."
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/c3a6fb7ffd11b85b.svg",
     "zabalera": 286
    },
    {
     "mota": "testua",
     "html": "<code>RAA 2-4</code> eta <code>RAA 1-7</code> etiketek ez dute erregela primitibo berri bat eransten. Mosterinen eraikuntza-erregelak baimentzen duen kontraesanezko helburu-itxiera bistaratzen dute: barruko kontraesanetik <math display=\"inline\"><mi>α</mi></math>, eta kanpoko kontraesanetik <math display=\"inline\"><mrow><mi>α</mi><mo>∨</mo><mo>¬</mo><mi>α</mi></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Frederic-en erabilera dedukzioetan",
     "blokeak": [
      {
       "mota": "testua",
       "html": "TNDren prototipoaz gain, II.4ko hogeita hamabost ariketen dedukzioak ere Frederic 0.1.0 bidez bistaratzen dira, bakoitza bere enuntziatuaren ondoko ebazpenean eta teoriaren jatorrizko kokalekuan. Frederic-en azpifrogak irismena erakusten du; Mosterinen <code>?</code> helburu esplizituak, <strong>M</strong> mailak, premisa berrerabiliak eta EP/GEPko aldagai kritikoen freskotasun-baldintzak ohar eta etiketa osagarrietan gordetzen dira. Jatorrizko azalpen zenbakituak eta <strong>M/Just.</strong> taulak ere mantendu dira, egitura berriak ez baititu ordezten."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "L09ren erabilera",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Atal hau L03-L05 irakurri aurretik edo haien ondoko erreferentzia gisa jar daiteke. Ez du dedukziorik ordezkatzen: notazio zaharra eta modernoa lotzen ditu, eta lerro bakoitza berrikusteko irizpide bera ematen du."
      }
     ]
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "II.1. Inferentzia-erregela primitiboak",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "Mosterin, Jesus - Logica de primer orden, 2. arg., Ariel, 1976",
     "xehetasuna": "II.1-II.3; 49.-56. or. inprimatuak; euskarazko parafrasia",
     "hizkuntza": "es"
    },
    {
     "mota": "testua",
     "html": "<strong>Kalkulu deduktiboa</strong> erregela multzo bat da. Erregelak formalismo bateko formulei aplikatzean, formula batzuk beste batzuetatik inferi daitezkeen eta dedukzio bat nola eraiki daitekeen zehazten da. Bi maila bereizi behar dira: <strong>inferentzia-erregelek</strong> formula erabilgarri bat edo bi hartuta formula berri bat ematen dute; <strong>eraikuntza-erregelek</strong>, berriz, lerro horiek dedukzio edo erdidedukzio batean noiz eta nola idatz daitezkeen arautzen dute."
    },
    {
     "mota": "oharra",
     "titulua": "Notazio modernoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Mosterinen <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Λ</mi><mi>x</mi><mi>α</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>V</mi><mi>x</mi><mi>α</mi></mrow></math> notazioak hemen, hurrenez hurren, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math> eta <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math> dira. Haren <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>α</mi></mrow></math> adierazpena <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> gisa idatziko dugu: <math display=\"inline\"><mi>α</mi></math>-n <math display=\"inline\"><mi>x</mi></math>-ren agerraldi libreak <math display=\"inline\"><mi>t</mi></math>-z ordezkatzea, aldagai-harrapaketarik gabe. <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>α</mi></mrow></math> deskribatzaileari eusten diogu."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Inferentzia-eskema batean marraren gaineko formulak premisak dira, eta azpikoa formula inferitua. <math display=\"inline\"><mrow><mi>α</mi><mo>,</mo><mi>β</mi></mrow></math> formulen metaalda-gaiak dira; <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>u</mi></mrow></math> aldagaiak eta <math display=\"inline\"><mi>t</mi></math> terminoa metahizkuntzako parametroak dira."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "R, MP, MT eta DN",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Errepikapena (R):</strong> <math display=\"inline\"><mfrac><mi>α</mi><mi>α</mi></mfrac></math>.",
        "<strong>Modus ponens (MP):</strong> <math display=\"inline\"><mfrac><mrow><mi>α</mi><mo>→</mo><mi>β</mi><mspace width=\"1.0em\"></mspace><mi>α</mi></mrow><mi>β</mi></mfrac></math>.",
        "<strong>Modus tollens (MT):</strong> <math display=\"inline\"><mfrac><mrow><mi>α</mi><mo>→</mo><mi>β</mi><mspace width=\"1.0em\"></mspace><mo>¬</mo><mi>β</mi></mrow><mrow><mo>¬</mo><mi>α</mi></mrow></mfrac></math>.",
        "<strong>Ezeztapen bikoitza (DN):</strong> bi noranzkoak baimentzen dira, <math display=\"inline\"><mfrac><mrow><mo>¬</mo><mo>¬</mo><mi>α</mi></mrow><mi>α</mi></mfrac></math> eta <math display=\"inline\"><mfrac><mi>α</mi><mrow><mo>¬</mo><mo>¬</mo><mi>α</mi></mrow></mfrac></math>."
       ]
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Konektiboen erregelak",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Konjuntorearen sarrera (IC):</strong> <math display=\"inline\"><mfrac><mrow><mi>α</mi><mspace width=\"1.0em\"></mspace><mi>β</mi></mrow><mrow><mi>α</mi><mo>∧</mo><mi>β</mi></mrow></mfrac></math>.",
        "<strong>Konjuntorearen ezabapena (EC):</strong> <math display=\"inline\"><mfrac><mrow><mi>α</mi><mo>∧</mo><mi>β</mi></mrow><mi>α</mi></mfrac></math> eta <math display=\"inline\"><mfrac><mrow><mi>α</mi><mo>∧</mo><mi>β</mi></mrow><mi>β</mi></mfrac></math>.",
        "<strong>Disjuntorearen sarrera (ID):</strong> <math display=\"inline\"><mfrac><mi>α</mi><mrow><mi>α</mi><mo>∨</mo><mi>β</mi></mrow></mfrac></math> eta <math display=\"inline\"><mfrac><mi>α</mi><mrow><mi>β</mi><mo>∨</mo><mi>α</mi></mrow></mfrac></math>.",
        "<strong>Disjuntorearen ezabapena (ED):</strong> <math display=\"inline\"><mfrac><mrow><mi>α</mi><mo>∨</mo><mi>β</mi><mspace width=\"1.0em\"></mspace><mo>¬</mo><mi>α</mi></mrow><mi>β</mi></mfrac></math> eta <math display=\"inline\"><mfrac><mrow><mi>α</mi><mo>∨</mo><mi>β</mi><mspace width=\"1.0em\"></mspace><mo>¬</mo><mi>β</mi></mrow><mi>α</mi></mfrac></math>.",
        "<strong>Bikondizionalaren sarrera (IB):</strong> <math display=\"inline\"><mfrac><mrow><mi>α</mi><mo>→</mo><mi>β</mi><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>→</mo><mi>α</mi></mrow><mrow><mi>α</mi><mo>↔</mo><mi>β</mi></mrow></mfrac></math>.",
        "<strong>Bikondizionalaren ezabapena (EB):</strong> <math display=\"inline\"><mfrac><mrow><mi>α</mi><mo>↔</mo><mi>β</mi></mrow><mrow><mi>α</mi><mo>→</mo><mi>β</mi></mrow></mfrac></math> eta <math display=\"inline\"><mfrac><mrow><mi>α</mi><mo>↔</mo><mi>β</mi></mrow><mrow><mi>β</mi><mo>→</mo><mi>α</mi></mrow></mfrac></math>."
       ]
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Kuantifikatzaileen erregelak",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Partikularizatzailearen sarrera (IP):</strong> <math display=\"inline\"><mfrac><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></mfrac></math>.",
        "<strong>Orokortzailearen ezabapena (EG):</strong> <math display=\"inline\"><mfrac><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac></math>.",
        "<strong>Partikularizatzailearen ezabapen kritikoa (EP):</strong> <math display=\"inline\"><mfrac><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac></math>, non <math display=\"inline\"><mi>u</mi></math> aldagai bat den."
       ]
      },
      {
       "mota": "testua",
       "html": "EGn <math display=\"inline\"><mi>t</mi></math> edozein termino izan daiteke. EPn, aldiz, ordezkoa aldagai hutsa da; dedukzio batean erabili ahal izateko, <math display=\"inline\"><mi>u</mi></math> <strong>aldagai kritikoa</strong> berria izan behar da, aurreko lerroetan agertu gabea. EP ez beste inferentzia-erregela guztiak <strong>normalak</strong> dira; EP da erregela kritikoa."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Berdintasunaren eta deskribapenen erregelak",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berdintzailearen sarrera (II):</strong> <math display=\"inline\"><mfrac><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>t</mi><mo>→</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></math>, betiere <math display=\"inline\"><mi>x</mi></math> ez bada libre <math display=\"inline\"><mi>t</mi></math>-n.",
        "<strong>Berdintzailearen ezabapena (EI):</strong> <math display=\"inline\"><mfrac><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>t</mi><mo>→</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac></math>, baldintza berarekin.",
        "<strong>Deskribapen propioa (DP):</strong> <math display=\"inline\"><mfrac><mrow><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>ι</mi><mi>x</mi><mi>α</mi></mrow><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac></math>, non <math display=\"inline\"><mi>y</mi></math> ez den libre <math display=\"inline\"><mi>α</mi></math>-n.",
        "<strong>Deskribapen inpropioa (DI):</strong> <math display=\"inline\"><mfrac><mrow><mo>¬</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>ι</mi><mi>x</mi><mi>α</mi><mo>=</mo><mi>ι</mi><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>=</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></math>, non <math display=\"inline\"><mi>y</mi></math> ez den libre <math display=\"inline\"><mi>α</mi></math>-n."
       ]
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erregelen aplikazioak ez du interpretaziorik erabiltzen; egitura sintaktikoa baino ez:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-tik <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> inferitzen da IDz.",
        "<math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-tik <math display=\"inline\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> inferitzen da EGz, <math display=\"inline\"><mi>y</mi></math>-ren ordez <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> jarriz.",
        "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><msub><mi>c</mi><mn>2</mn></msub><mo>→</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>1</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>1</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-tik <math display=\"inline\"><mrow><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><msub><mi>c</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> inferitzen da MTz.",
        "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>-tik <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> inferitzen da IBz.",
        "<math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>a</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-tik <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> inferitzen da EDz.",
        "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>c</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>x</mi><mo>=</mo><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-tik <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>c</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>k</mi></mrow></math> inferitzen da EIz.",
        "<math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-tik <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ι</mi><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>=</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> inferitzen da DIz."
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "II.2. Erdidedukzioak eta dedukzioak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Eguneroko frogapenaren lau mugimenduak - zuzeneko inferentzia, kontraesanezko froga, baldintzazko froga eta elementu arbitrario baten bidezko orokortzea - lerroen gaineko eraikuntza-erregela bakar batean antolatzen ditu kalkuluak."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Hiru lerro mota",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Lerro erabilgarria:</strong> formula hutsa, edo jada itxitako helburu bati dagokion galdera-ikur ezabatua daraman formula.",
        "<strong>Lerro markatua:</strong> lerro erabilgarri baten aurrean gutxienez irismen-marka bat duen lerroa; markek zein helburu edo hipotesiren barruan dagoen erakusten dute.",
        "<strong>Lerro galdetua:</strong> ezabatu gabeko <math display=\"inline\"><mrow><mi>?</mi><mi>α</mi></mrow></math> helburua."
       ]
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>λ</mi></math> metaalda-gaia edozein motatako lerroa izendatzeko erabil daiteke."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Erdidedukzioaren zazpi eraikuntza-erregelak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> formalismoko sententzien multzo bat. <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-tik abiatutako erdidedukzioa honako erregelen bidez lortutako lerro-segida finitua da:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Edozein <math display=\"inline\"><mi>α</mi></math> formularentzat <math display=\"inline\"><mrow><mi>?</mi><mi>α</mi></mrow></math> helburu-lerroa ireki daiteke.",
        "<math display=\"inline\"><mrow><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> bada, <math display=\"inline\"><mi>α</mi></math> premisa gisa idatz daiteke.",
        "<math display=\"inline\"><mrow><mi>?</mi><mi>α</mi></mrow></math> idatzita badago, haren hurrengo lerroan <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> idatz daiteke: helburua kontraesanez frogatzeko aldi baterako hipotesia da.",
        "<math display=\"inline\"><mrow><mi>?</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idatzita badago, haren hurrengo lerroan <math display=\"inline\"><mi>α</mi></math> idatz daiteke: baldintzazko frogaren aurrekari-hipotesia da.",
        "Aurreko lerro erabilgarrietatik erregela normal baten bidez <math display=\"inline\"><mi>α</mi></math> inferitzen bada, <math display=\"inline\"><mi>α</mi></math> lerro berria idatz daiteke.",
        "EPren bidez <math display=\"inline\"><mi>α</mi></math> inferitzen bada, lerro berria idatz daiteke soilik aldagai kritikoa aurreko lerro bakar batean ere agertzen ez bada.",
        "<math display=\"inline\"><mrow><mi>?</mi><mi>α</mi></mrow></math> irekitako azken helburua itxi, haren galdera-ikurra ezabatu eta ondoko lerro guztiak maila horretan marka daitezke lau egoeretako batean: (i) ondoko lerro erabilgarrietako bat <math display=\"inline\"><mi>α</mi></math> bera da; (ii) ondoko bi lerro erabilgarri elkarren ezeztapenak dira; (iii) <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>→</mo><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta ondoko lerro erabilgarrietako bat <math display=\"inline\"><mi>γ</mi></math> da; edo (iv) <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mo>∀</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mi>β</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub></mrow></math> ez dira libre helburua baino lehenagoko lerro erabilgarrietan, eta ondoko lerro erabilgarrietako bat <math display=\"inline\"><mi>β</mi></math> da."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Lehen lau erregelek frogapenaren asmoa lerro bihurtzen dute; azken hirurek, berriz, inferentzia zilegiak eta helburuen itxiera kontrolatzen dituzte. Formula bat 2. erregelaz sartzen denean, <strong>premisa</strong> deritzo. Praktikan, lerroak ezkerrean zenbakitzen dira eta eskuinean erabilitako erregelaren laburdura eta haren sarrera-lerroen zenbakiak idazten dira."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Dedukzioa, deduzigarritasuna eta teorema logikoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-tik <math display=\"inline\"><mi>α</mi></math>-ren <strong>dedukzioa</strong> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-tik abiatutako erdidedukzio bat da, lehen lerroa <math display=\"inline\"><mrow><mi>?</mi><mi>α</mi></mrow></math> duena eta gainerako lerro guztiak markatuta dituena. Horrelako dedukzio bat badago, <math display=\"inline\"><mi>α</mi></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-tik deduzigarria da: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Premisarik gabeko dedukzioa duen formula <strong>teorema logikoa</strong> da; hori <math display=\"inline\"><mrow><mo>⊢</mo><mi>α</mi></mrow></math> bidez adierazten da. Zeinu hau erlazio sintaktikoa da: atal honetan ez da oraindik egia semantikorik edo eredu guztietako ondoriorik baieztatzen."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Proposizioa",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Deduzigarritasunaren finitudea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math> baldin eta soilik baldin badago <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-ren azpimultzo finitu bat, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊆</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>, halakoa non <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊢</mo><mi>α</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dedukzio oro lerro-segida finitua denez, bertan benetan erabilitako premisak ere finituki asko dira; haiek osatzen duten <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> azpimultzoak dedukzio bera baimentzen du. Alderantziz, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊆</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> bada, <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math>-ko premisa oro <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-koa ere bada, eta dedukzio bera <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-tik irakur daiteke."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Proposizioa",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Oinarrizko lau ondorio metadeduktibo",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊢</mo><mi>α</mi></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊆</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> badira, orduan <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math>.",
        "<math display=\"inline\"><mrow><mi>α</mi><mo>⊢</mo><mi>β</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>β</mi><mo>⊢</mo><mi>γ</mi></mrow></math> badira, orduan <math display=\"inline\"><mrow><mi>α</mi><mo>⊢</mo><mi>γ</mi></mrow></math>.",
        "<math display=\"inline\"><mrow><mo>⊢</mo><mi>α</mi></mrow></math> bada, orduan <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math> edozein <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-rentzat.",
        "<math display=\"inline\"><mrow><msub><mi>γ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>γ</mi><mi>n</mi></msub><mo>⊢</mo><mi>α</mi></mrow></math> bada, orduan <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>γ</mi><mn>1</mn></msub><mo>∧</mo><mi>…</mi><mo>∧</mo><msub><mi>γ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⊢</mo><mi>α</mi></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lehenengoa premisen monotoniatik dator; bigarrena bi dedukzioak bata bestearen ondoren jarriz lortzen da; hirugarrenean premisa-multzo hutsa edozein <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-ren azpimultzoa da. Laugarrenean, konjuntzio bakarra premisa gisa sartzen da, EC behin eta berriz aplikatuz <math display=\"inline\"><mrow><msub><mi>γ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>γ</mi><mi>n</mi></msub></mrow></math> lerroak berreskuratzen dira, eta jatorrizko dedukzioaren gainerakoa errepikatzen da. Jatorriz premisa gisa sartzen zen <math display=\"inline\"><msub><mi>γ</mi><mi>i</mi></msub></math> bakoitza, orain, dagokion lerro berreskuratuaren errepikapen gisa sartzen da."
      }
     ]
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "II.3. Inferentzia-erregela eratorriak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Erregela eratorri batek ez du aurretik deduziezina zen ezer ahalbidetzen. Erregela primitiboen bidez hainbat urratsetan egin zitekeen bidea urrats bakar batez laburtzen du. Beraz, erregela eratorri bat <strong>justifikatzea</strong> haren ondorioa premisetatik erregela primitiboekin eraiki daitekeela erakustea da."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "NCC: baldintzaren ezeztapenetik konjuntziora",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>β</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (NCC)</mtext></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hartu premisatzat eta ireki <math display=\"inline\"><mrow><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>β</mi></mrow></math> helburua. Kontraesanezko frogaren arabera, suposatu <math display=\"inline\"><mrow><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Ondoren ireki <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>β</mi></mrow></math>: suposatu <math display=\"inline\"><mi>α</mi></math> eta, <math display=\"inline\"><mi>β</mi></math> frogatzeko, suposatu <math display=\"inline\"><mrow><mo>¬</mo><mi>β</mi></mrow></math>. ICz <math display=\"inline\"><mrow><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>β</mi></mrow></math> lortzen da, kanpoko hipotesiaren kontra. Horrek <math display=\"inline\"><mi>β</mi></math> azpihelburua ixten du, gero <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>β</mi></mrow></math> baldintzazko helburua, eta azken formula horrek hasierako premisarekin talka egiten du. Beraz, <math display=\"inline\"><mrow><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>β</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "TND: hirugarren aukerarik eza",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>α</mi><mo>∨</mo><mo>¬</mo><mi>α</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (TND; premisarik gabe)</mtext></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ireki <math display=\"inline\"><mrow><mi>α</mi><mo>∨</mo><mo>¬</mo><mi>α</mi></mrow></math> helburua eta suposatu haren ezeztapena. Barruan, ireki <math display=\"inline\"><mi>α</mi></math> helburua eta suposatu <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math>; IDz <math display=\"inline\"><mrow><mi>α</mi><mo>∨</mo><mo>¬</mo><mi>α</mi></mrow></math> lortzen da, lehen hipotesiaren kontra, eta horrela <math display=\"inline\"><mi>α</mi></math> azpihelburua ixten da. ID berriz aplikatuta <math display=\"inline\"><mrow><mi>α</mi><mo>∨</mo><mo>¬</mo><mi>α</mi></mrow></math> lortzen da; kanpoko hipotesiarekin bigarren kontraesana eratzen du eta hasierako helburua ixten du. Ez da premisarik erabili."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "IDA: disjuntorea aurrekarian sartzea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>α</mi><mo>→</mo><mi>β</mi><mspace width=\"1.0em\"></mspace><mi>γ</mi><mo>→</mo><mi>β</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>∨</mo><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>β</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (IDA)</mtext></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hartu <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>β</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>γ</mi><mo>→</mo><mi>β</mi></mrow></math> premisak. Baldintzazko frogaren barruan suposatu <math display=\"inline\"><mrow><mi>α</mi><mo>∨</mo><mi>γ</mi></mrow></math>, eta <math display=\"inline\"><mi>β</mi></math> frogatzeko suposatu <math display=\"inline\"><mrow><mo>¬</mo><mi>β</mi></mrow></math>. MTz, lehen premisatik <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> eta bigarrenetik <math display=\"inline\"><mrow><mo>¬</mo><mi>γ</mi></mrow></math> ateratzen dira. EDk <math display=\"inline\"><mrow><mi>α</mi><mo>∨</mo><mi>γ</mi></mrow></math> eta <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math>-tik <math display=\"inline\"><mi>γ</mi></math> ematen du; horrek <math display=\"inline\"><mrow><mo>¬</mo><mi>γ</mi></mrow></math>-rekin kontraesana sortzen du. Hortaz <math display=\"inline\"><mi>β</mi></math>, eta ondoren <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>∨</mo><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>β</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "I: berdintasunaren erreflexibotasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>t</mi><mo>=</mo><mi>t</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (I; premisarik gabe)</mtext></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aukeratu <math display=\"inline\"><mi>t</mi></math>-n agertzen ez den <math display=\"inline\"><mi>x</mi></math> aldagai berria. <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>t</mi></mrow></math> suposatuta, Rz <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>t</mi></mrow></math> errepika daiteke eta, baldintzazko froga itxita, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>t</mi><mo>→</mo><mi>x</mi><mo>=</mo><mi>t</mi></mrow></math> lortzen da. <math display=\"inline\"><mi>x</mi></math> beste lerro erabilgarrietan libre ez dagoenez, orokortu: <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>t</mi><mo>→</mo><mi>x</mi><mo>=</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. EI aplikatuta <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>t</mi></mrow></math> lortzen da."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "SI: berdintasunaren simetria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (SI)</mtext></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math> premisarekin, I erregelaz <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math> dugu. Aukeratu <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math>-n agertzen ez den <math display=\"inline\"><mi>x</mi></math>: IIz <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>→</mo><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> lortzen da. EGz, <math display=\"inline\"><mi>x</mi></math>-ren ordez <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> jarrita, <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>→</mo><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub></mrow></math>; MPz eta premisaz, <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "TI: berdintasunaren trantsitibitatea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Oinarrizko eskema <math display=\"inline\"><mfrac><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></mfrac></math> da. Simetria esplizituki erabili gabe idatzitako beste hiru orientazioak ere TI izenpean hartzen dira: <math display=\"inline\"><mfrac><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mn>3</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></mfrac></math>, <math display=\"inline\"><mfrac><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></mfrac></math> eta <math display=\"inline\"><mfrac><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mn>3</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></mfrac></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lehen eskemarako, hartu <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></math>. Bigarren premisari II aplikatuta, <math display=\"inline\"><mi>x</mi></math> <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math>-n agertzen ez dela, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>→</mo><mi>x</mi><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> lortzen da. EGz <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>→</mo><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></math>, eta MPz <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></math>. Beste hiru orientazioak modu berean justifikatzen dira, behar den berdintasunaren aldea SIz iraulita."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "NG: orokortzailearen ezeztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi noranzkoetako erregela eratorriak dira: <math display=\"inline\"><mfrac><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></mfrac></math> eta <math display=\"inline\"><mfrac><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></mfrac></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lehen noranzkoan, suposatu <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math> eta ireki <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math> helburua. Haren ezeztapena suposatuta, hartu <math display=\"inline\"><mi>x</mi></math> arbitrarioa eta ireki <math display=\"inline\"><mi>α</mi></math> helburua. <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> suposatuz, IPz <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math> lortzen da, kanpoko hipotesiaren kontra; beraz <math display=\"inline\"><mi>α</mi></math>. <math display=\"inline\"><mi>x</mi></math> arbitrarioa denez, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>, hasierako premisaren kontra. Hortaz, <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Bigarren noranzkoan, hartu <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math> eta suposatu <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>. DNz <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>. EPz, aurreko lerroetan agertzen ez den <math display=\"inline\"><mi>u</mi></math> kritikoarekin, <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>; EGz, <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. Kontraesanak <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math> helburua ixten du."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "NP: partikularizatzailearen ezeztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi noranzkoetako erregela eratorriak dira: <math display=\"inline\"><mfrac><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>α</mi></mrow><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></mfrac></math> eta <math display=\"inline\"><mfrac><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></mfrac></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lehen noranzkoan, <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math> premisatik <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math> frogatzeko hartu <math display=\"inline\"><mi>x</mi></math> arbitrarioa. <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> helburuan <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mi>α</mi></mrow></math> suposatuz gero, DNz <math display=\"inline\"><mi>α</mi></math> eta IPz <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math> lortzen dira; premisaren kontraesana dela eta, <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> eta gero <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Alderantziz, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math> premisatik <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math> frogatzeko, suposatu <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math>. DNz <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math>; EPz, <math display=\"inline\"><mi>u</mi></math> kritiko berriarekin, <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>; EGz premisa unibertsaletik <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. Kontraesanak helburua ixten du."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "L03ren muga",
     "blokeak": [
      {
       "mota": "testua",
       "html": "56. orrialde inprimatua NP erregelen justifikazioekin amaitzen da. II.3ren hurrengo laburdura handiak - GIC, GEG, GIP, GEP eta GNP - 57. orrialdean hasten dira eta, planeko orrialde-mugaren arabera, hurrengo loteari dagozkio."
      }
     ]
    }
   ]
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Erregela handi eratorriak",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "Mosterin, Jesus - Logica de primer orden, 2. arg., Ariel, 1976",
     "xehetasuna": "II.4; 57.-72. or. inprimatuak; euskarazko parafrasia",
     "hizkuntza": "es"
    },
    {
     "mota": "testua",
     "html": "L03n landutako inferentzia-erregela eratorriek urrats bakarreko eskema orokorrak laburtzen dituzte. Atal honen hasieran, Mosterinek kuantifikatzaile bat baino gehiago batera tratatzen dituzten bost bertsio handi ematen ditu. <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub></mrow></math> aldagai desberdinak dira, eta ordezkapen guztiak aldagai-harrapaketarik gabe ulertu behar dira."
    },
    {
     "mota": "oharra",
     "titulua": "Notazioa eta laburdurak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jatorrizko <math display=\"inline\"><mi mathvariant=\"normal\">Λ</mi></math> eta <math display=\"inline\"><mi>V</mi></math> zeinuak hemen <math display=\"inline\"><mo>∀</mo></math> eta <math display=\"inline\"><mo>∃</mo></math> gisa ematen dira. GIC, GEG, GIP, GEP eta GNP laburdurak jatorrizkoak dira. GEPn <math display=\"inline\"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>u</mi><mi>n</mi></msub></mrow></math> aldagai kritikoek elkarrekiko desberdinak izan behar dute, eta ezin dira aurreko lerroetan agertu. Ondoko ariketetan, lerro bakoitzaren zenbakia eta jatorrizko dedukzioaren ordena gorde dira; &quot;helburua&quot;, &quot;hipotesia&quot; eta &quot;premisa&quot; hitzek jatorrizko irismen-markak azaltzen dituzte."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "GIC: konjuntzio handiaren sarrera",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><msub><mi>α</mi><mn>1</mn></msub><mspace width=\"1.0em\"></mspace><mi>…</mi><mspace width=\"1.0em\"></mspace><msub><mi>α</mi><mi>n</mi></msub></mrow><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>∧</mo><mi>…</mi><mo>∧</mo><msub><mi>α</mi><mi>n</mi></msub></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (GIC)</mtext></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Aurretik erabilgarri dauden <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>α</mi><mi>n</mi></msub></mrow></math> formulak konjuntzio bakarrean biltzen ditu."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "GEG: orokortzaile handiaren ezabapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mo>∀</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mi>α</mi></mrow><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msub><mi>t</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub></mfrac><mo>,</mo><mi>…</mi><mo>,</mo><mfrac><msub><mi>t</mi><mi>n</mi></msub><msub><mi>x</mi><mi>n</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (GEG)</mtext></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Orokortzaile sorta aldi berean instantziatzen da, <math display=\"inline\"><msub><mi>x</mi><mi>i</mi></msub></math> bakoitzaren ordez dagokion <math display=\"inline\"><msub><mi>t</mi><mi>i</mi></msub></math> terminoa jarriz."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "GIP: partikularizatzaile handiaren sarrera",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msub><mi>t</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub></mfrac><mo>,</mo><mi>…</mi><mo>,</mo><mfrac><msub><mi>t</mi><mi>n</mi></msub><msub><mi>x</mi><mi>n</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><mrow><mo>∃</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mi>α</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (GIP)</mtext></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Instantzia bakar batetik existentzial sorta batera igarotzen da."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "GEP: partikularizatzaile handiaren ezabapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mo>∃</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mi>α</mi></mrow><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msub><mi>u</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub></mfrac><mo>,</mo><mi>…</mi><mo>,</mo><mfrac><msub><mi>u</mi><mi>n</mi></msub><msub><mi>x</mi><mi>n</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (GEP)</mtext></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>u</mi><mi>n</mi></msub></mrow></math> aldagai kritiko berriak eta elkarren artean desberdinak dira. Baldintza horrek existentzialen lekukoak ez identifikatzea eta aurreko informaziorik ez eranstea bermatzen du."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "GNP: kuantifikatzailearen ezeztapen handia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi noranzkoak erregela eratorri gisa erabil daitezke:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mo>¬</mo><mo>∃</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mi>α</mi></mrow><mrow><mo>∀</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo>¬</mo><mi>α</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (GNP)</mtext></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mo>∀</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo>¬</mo><mi>α</mi></mrow><mrow><mo>¬</mo><mo>∃</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mi>α</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (GNP)</mtext></mrow></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "II.4. Dedukzio-ariketak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Atalak, guztira, hogeita hamabost ariketa proposatzen ditu. Produktu honetan ariketa guztien enuntziatuak eta dedukzioak jasotzen dira; dedukzio bakoitzak Frederic egitura eta jatorrizko azalpen zenbakitua edo <strong>M/Just.</strong> taula ditu. Dedukzio bakoitza irakurri aurretik, komeni da helburua zein eraikuntza-mugimendurekin irekiko litzatekeen erabakitzea: kontraesana, baldintzazko froga, orokortzea edo zuzeneko inferentzia."
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "1.-5. ariketak",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1. ariketa.</strong> Izan bedi <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Frogatu <math display=\"inline\"><mrow><mo>⊢</mo><msub><mi>α</mi><mn>1</mn></msub></mrow></math>. Hemen <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> ez da formula bakar baten izena, formula guztietarako baliagarria den eskema baizik."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>1. ariketaren dedukzioa.</strong> Lerroen ordena:"
      },
      {
       "mota": "testua",
       "html": "<code>?</code> markek Mosterinen eraikuntza-helburuak adierazten dituzte: 1. lerroko orokorra, eta 2. lerroko baldintza. 3. lerroko hipotesia 4. lerroan errepikatzeak betetzen du tokiko helburua."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/53aef43a6db9d618.svg",
       "zabalera": 332
      },
      {
       "mota": "testua",
       "html": "4. lerroarekin 2. helburua ixten da; baldintzazko frogaren ondoren, <math display=\"inline\"><mi>x</mi></math> ez dago kanpoko premisetan libre, eta 1. lerroa orokortuz ixten da."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>α</mi></mrow></math> — elementu arbitrario baten instantziari dagokion azpihelburua.",
        "<strong>3.</strong> <math display=\"inline\"><mi>α</mi></math> — 2. lerroko baldintzaren aurrekaria, hipotesi gisa.",
        "<strong>4.</strong> <math display=\"inline\"><mi>α</mi></math> — R, 3."
       ]
      },
      {
       "mota": "testua",
       "html": "4. lerroak 2. lerroko baldintzazko helburua ixten du; <math display=\"inline\"><mi>x</mi></math> arbitrarioa denez, emaitza orokortu eta 1. lerroa ixten da. Ez da premisarik erabili."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>2. ariketa.</strong> <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>2</mn></msub></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>2. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "1. eta 4. lerroak <code>?</code> helburuak dira. 5.-6. lerroetako azpifroga kontraesanezkoa da; amaitzean <math display=\"inline\"><mi>x</mi></math> arbitrarioaren emaitza orokortzen da."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/9b27b5fdd49dd0e3.svg",
       "zabalera": 415
      },
      {
       "mota": "testua",
       "html": "5. eta 6. lerroen kontraesanak 4. helburua ixten du; orokortzeak 1.a."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEG, 2.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua, <math display=\"inline\"><mi>x</mi></math> arbitrarioarentzat.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — 4. lerroko kontraesanezko hipotesia.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — ED, 3 eta 5."
       ]
      },
      {
       "mota": "testua",
       "html": "5. eta 6. lerroek 4. helburua ixten dute; gero <math display=\"inline\"><mi>x</mi></math>-rekiko orokortzeak 1. lerroa ematen du."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>3. ariketa.</strong> <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∃</mo><mi>x</mi><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>2</mn></msub></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>3. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<code>u</code> aldagai kritiko berria da 3. lerroko EP aplikazioan: ez dago ondorioan eta ez dago azpifrogatik kanpo erabilitako formula ireki batean libre."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/b245ad21b991479f.svg",
       "zabalera": 324
      },
      {
       "mota": "testua",
       "html": "2.-7. lerroen esparrua ixtean 1. lerroko baldintza lortzen da; <code>u</code> ez da ondoriora esportatzen."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∃</mo><mi>x</mi><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — baldintzazko hipotesia.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 2; <math display=\"inline\"><mi>u</mi></math> aldagai kritiko berria da.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 4.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 5 eta 3.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IP, 6."
       ]
      },
      {
       "mota": "testua",
       "html": "7. lerroak 1. lerroko baldintzazko helburua ixten du."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>4. ariketa.</strong> Frogatu teorema logikoa dela <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>4. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "1., 4. eta 7. lerroetako <code>?</code> ikurrak helburuak dira. 2. lerroak kanpoko kontraesanezko esparrua irekitzen du; 5.-6. eta 8.-9. lerroek bi orokortzeen kasu arbitrarioak erakusten dituzte."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/ae27098e9a7395f2.svg",
       "zabalera": 436
      },
      {
       "mota": "testua",
       "html": "5.-6. lerroek 4. helburua eta 8.-9. lerroek 7.a ixten dituzte. 7. eta 11. lerroen kontraesanak 2. hipotesia baztertzen du eta 1. helburua ixten du."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — helburua.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — kontraesanezko hipotesia.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — NP, 2.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — helburua.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 3.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — NCC, 5.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 4.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 4.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 10."
       ]
      },
      {
       "mota": "testua",
       "html": "5.-6. lerroek 4. orokortzea ixten dute; 8.-9. lerroek 7. orokortzea. 7. eta 11. lerroen kontraesanarekin 2. hipotesia baztertzen da, eta 1. helburua geratzen da."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>5. ariketa.</strong> Frogatu teorema logikoa dela <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>5. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<code>z</code> 7. lerroko EPren aldagai kritiko berria da. 8. lerroko <code>?</code> helburua baldintzazkoa da; jatorrizko dedukzioak 9. lerroko errepikapenarekin ixten du."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/f72b2bf2a804183d.svg",
       "zabalera": 434
      },
      {
       "mota": "testua",
       "html": "10. lerroak 2. hipotesiaren aurkakoa ematen du; <code>z</code> ez da azken formula existentzialetik kanpo agertzen."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — helburua.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — kontraesanezko hipotesia.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — NP, 2.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 3.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — NCC, 4.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 5.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 6; <math display=\"inline\"><mi>z</mi></math> aldagai kritikoa da.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — R, 7.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 8."
       ]
      },
      {
       "mota": "testua",
       "html": "9. lerroak 8. baldintza ixten du. 10. lerroak 2. hipotesiaren aurkakoa ematen du eta hasierako helburua ixten du."
      }
     ]
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "6.-10. ariketak",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>6. ariketa.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>2</mn></msub></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>6. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "1., 2. eta 5. lerroak Mosterinen <code>?</code> helburuak dira. <code>u</code> 8. lerroko EPren aldagai kritiko berria da eta 5. helburua itxi ondoren ez da erabiltzen."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/f252f47d32d1630f.svg",
       "zabalera": 623
      },
      {
       "mota": "testua",
       "html": "9.-10. lerroek 5. helburua ixten dute; 3. eta 13. lerroek 2.a, eta azken orokortzeak 1.a. Esparru-itxierak <code>u</code> lekukoa kanpoan erabiltzea eragozten du."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — <math display=\"inline\"><mi>x</mi></math> arbitrarioarentzako helburua.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — kontraesanezko hipotesia.",
        "<strong>4.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — azpihelburua.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — kontraesanezko hipotesia.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — DN, 6.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 7; <math display=\"inline\"><mi>u</mi></math> kritikoa.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 8.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — ED, 4 eta 5.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEG, 11.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — ED, 12 eta 3."
       ]
      },
      {
       "mota": "testua",
       "html": "9. eta 10. lerroek 5. helburua ixten dute; 3. eta 13. lerroek 2.a; azken orokortzeak 1. lerroa ematen du."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>7. ariketa.</strong> Honako formulak emanda,"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>,"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>u</mi><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>7. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<code>x_0</code> 3. lerroko EPren aldagai kritiko berria da. <code>w</code> 5. lerroko existentziala sartzeko aukeratutako terminoa da; 14.-19. lerroetan <math display=\"inline\"><mi>y</mi></math> arbitrarioa da. <code>?</code> markak 1., 5., 14. eta 15. lerroetako helburuak dira."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/99ad7c9305f53db7.svg",
       "zabalera": 657
      },
      {
       "mota": "testua",
       "html": "19. lerroak 15. baldintza eta 14. orokortzea ixten ditu. 13. lerroaren eta 14. helburu itxiaren kontraesanak 5. baldintza ixten du; 20. lerroak 1.a."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>u</mi><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — helburua.",
        "<strong>2.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
        "<strong>3.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> — EP, 2; <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> kritikoa.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 3.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>u</mi><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — baldintzazko hipotesia.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — ID, 6.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 4 eta 7.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IC, 6 eta 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 9.",
        "<strong>11.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>12.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> — EG, 11.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 12 eta 10.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — helburua.",
        "<strong>15.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — <math display=\"inline\"><mi>y</mi></math> arbitrarioarentzako helburua.",
        "<strong>16.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — baldintzazko hipotesia.",
        "<strong>17.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — ID, 16.",
        "<strong>18.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 3.",
        "<strong>19.</strong> <math display=\"inline\"><mrow><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 18 eta 17.",
        "<strong>20.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>u</mi><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 5."
       ]
      },
      {
       "mota": "testua",
       "html": "19. lerroak 15. baldintza eta gero 14. orokortzea ixten ditu. 13. eta 14. lerroen kontraesanak 5. baldintza ixten du; 20. lerroak hasierako helburua betetzen du."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>8. ariketa.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>8. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "1. eta 2. lerroak <code>?</code> helburu orokorra eta baldintzazkoa dira. <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi></mrow></math> arbitrarioak dira; <code>w</code> 8. lerroko EPren aldagai kritiko berria da."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/9eaabddb00f67690.svg",
       "zabalera": 476
      },
      {
       "mota": "testua",
       "html": "22. lerroak 2. baldintza ixten du. <code>w</code> ez da ondorioan agertzen; <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi></mrow></math> arbitrarioen orokortzeak 1. helburua ematen du."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> — helburua.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — baldintzazko hipotesia.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 3.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 3.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 6.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 7; <math display=\"inline\"><mi>w</mi></math> kritikoa.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — R, 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 8 eta 9.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 10.",
        "<strong>12.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEG, 12.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 13 eta 11.",
        "<strong>15.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 14 eta 5.",
        "<strong>16.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 15.",
        "<strong>17.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEG, 12.",
        "<strong>18.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 17 eta 16.",
        "<strong>19.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 4 eta 18.",
        "<strong>20.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 19.",
        "<strong>21.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEG, 12.",
        "<strong>22.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 21 eta 20."
       ]
      },
      {
       "mota": "testua",
       "html": "22. lerroak 2. baldintza ixten du; <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi></mrow></math> arbitrarioak direnez, 1. lerroa orokortzen da."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>9. ariketa.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esanahi intuitiboan, <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ek Carlosek <math display=\"inline\"><mi>x</mi></math> bizarra kentzen diola eta <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ek <math display=\"inline\"><mi>x</mi></math> Sitgesko biztanlea dela esan dezakete. Premisek Carlos bere buruari bizarra kentzen dion galdetzea paradoxa moduan erabiltzen dute, inori kentzen ez diola ondorioztatzeko."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>9. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "1. eta 7. lerroak <code>?</code> helburuak dira. 8.-10. lerroetako azpifroga kontraesanezkoak <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ematen du; emaitza kanpoko 11.-12. lerroetan erabiltzen da, jatorrizko irismenaren arabera."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/063cf9d793c5e32e.svg",
       "zabalera": 487
      },
      {
       "mota": "testua",
       "html": "8. eta 10. lerroek 7. helburua ixten dute; 7. eta 12. lerroen kontraesanak 1. helburu existentzial ezeztatua ixten du."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 2.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EB, 4.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EB, 4.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — azpihelburua.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — kontraesanezko hipotesia.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 3 eta 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 6 eta 9.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 5 eta 7.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 11."
       ]
      },
      {
       "mota": "testua",
       "html": "8. eta 10. lerroek 7. helburua ixten dute. 7. eta 12. lerroen kontraesanak, berriz, hasierako existentzial ezeztatua ixten du."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>10. ariketa.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Irakurketa intuitibo batean, <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k <math display=\"inline\"><mi>x</mi></math>-ek <math display=\"inline\"><mi>y</mi></math> mespretxatzen duela, <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k <math display=\"inline\"><mi>y</mi></math> fanatikoa dela eta <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k politikaria dela esan dezakete. Dedukzioak baldintza unibertsalen ezeztapenak lekuko zehatz bihurtzen ditu."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>10. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<code>w,u</code> 4. lerroko GEPren bi aldagai kritiko berriak eta desberdinak dira; <code>y_0</code> 15. lerroko EPren aldagai kritiko berria da. 1. eta 6. lerroak <code>?</code> helburuak dira."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/942154a771f97283.svg",
       "zabalera": 606
      },
      {
       "mota": "testua",
       "html": "11.-12. lerroen kontraesanak 6. helburua ixten du. Hiru aldagai kritikoak beren esparru-baldintzak betez desagertzen dira 22. lerroko ondoriotik."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — helburua.",
        "<strong>2.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEP, 3; <math display=\"inline\"><mrow><mi>w</mi><mo>,</mo><mi>u</mi></mrow></math> aldagai kritikoak eta desberdinak.",
        "<strong>5.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> — EG, 2.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — helburua.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — kontraesanezko hipotesia.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — DN, 7.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 4.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 9 eta 10.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 4.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MT, 5 eta 6.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — NG, 13.",
        "<strong>15.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EP, 14; <math display=\"inline\"><msub><mi>y</mi><mn>0</mn></msub></math> kritikoa.",
        "<strong>16.</strong> <math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — NCC, 15.",
        "<strong>17.</strong> <math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 16.",
        "<strong>18.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 16.",
        "<strong>19.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 18.",
        "<strong>20.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — NG, 19.",
        "<strong>21.</strong> <math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IC, 17 eta 20.",
        "<strong>22.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 21."
       ]
      },
      {
       "mota": "testua",
       "html": "11. eta 12. lerroek 6. helburua ixten dute. 22. lerroak 1. helburua betetzen du."
      }
     ]
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "11.-15. ariketak",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>11. ariketa.</strong> Frogatu teorema logikoa dela"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>11. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "Idatz dezagun <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. <code>?</code> helburuak 1., 2., 4., 5., 14., 16., 18., 20. eta 21. lerroetan daude. <code>u</code> eta <code>w</code> 22.-23. lerroetako EP aplikazioen aldagai kritiko berri eta desberdinak dira."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/62fc4ffcda7e611a.svg",
       "zabalera": 516
      },
      {
       "mota": "testua",
       "html": "13. lerroak 5., 4. eta 2. helburuak ixten ditu. 26. lerroak 21. eta 20. orokortzeak, 18. eta 16. baldintzak eta 14. noranzkoa ixten ditu; IBk bi noranzkoak 27. lerroan elkartzen ditu. <code>u,w</code> ez dira ondorioan esportatzen. Jar dezagun <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Jatorrizko 27 urratsak:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mi>A</mi><mo>↔</mo><mi>B</mi></mrow></math> — helburua.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mi>A</mi><mo>→</mo><mi>B</mi></mrow></math> — lehen noranzkoaren helburua.",
        "<strong>3.</strong> <math display=\"inline\"><mi>A</mi></math> — baldintzazko hipotesia.",
        "<strong>4.</strong> <math display=\"inline\"><mi>B</mi></math> — helburua.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi></mrow></math> arbitrarioentzako helburua.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — baldintzazko hipotesia.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 6.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IP, 7.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 3 eta 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 6.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IP, 10.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 9 eta 11.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 12.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mi>B</mi><mo>→</mo><mi>A</mi></mrow></math> — bigarren noranzkoaren helburua.",
        "<strong>15.</strong> <math display=\"inline\"><mi>B</mi></math> — baldintzazko hipotesia.",
        "<strong>16.</strong> <math display=\"inline\"><mi>A</mi></math> — helburua.",
        "<strong>17.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — baldintzazko hipotesia.",
        "<strong>18.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
        "<strong>19.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — baldintzazko hipotesia.",
        "<strong>20.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
        "<strong>21.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — <math display=\"inline\"><mi>x</mi></math> arbitrarioarentzako helburua.",
        "<strong>22.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 17; <math display=\"inline\"><mi>u</mi></math> kritikoa.",
        "<strong>23.</strong> <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 19; <math display=\"inline\"><mi>w</mi></math> kritikoa eta <math display=\"inline\"><mi>u</mi></math>-tik desberdina.",
        "<strong>24.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 22 eta 23.",
        "<strong>25.</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEG, 15.",
        "<strong>26.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 25 eta 24.",
        "<strong>27.</strong> <math display=\"inline\"><mrow><mi>A</mi><mo>↔</mo><mi>B</mi></mrow></math> — IB, 2 eta 14."
       ]
      },
      {
       "mota": "testua",
       "html": "13. lerroak 5. baldintza eta 4. orokortzea ixten ditu; horrela 2. noranzkoa lortzen da. 26. lerrotik 21. eta 20. orokortzeak, 18. eta 16. baldintzak eta azkenik 14. noranzkoa ixten dira. IBk bi noranzkoak 27. lerroan elkartzen ditu."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>12. ariketa.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>4</mn></msub></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>12. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "1. lerroa <code>?</code> helburua da. 2. lerroak haren kontraesanezko esparrua irekitzen du; premisak jatorrizko 5., 7. eta 9. lerroetan sartzen dira."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/46cbc99e8377bf3a.svg",
       "zabalera": 547
      },
      {
       "mota": "testua",
       "html": "11. eta 12. lerroen kontraesanak 2. hipotesia baztertzen du eta 1. helburua ixten du."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — kontraesanezko hipotesia.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — DN, 2.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 3.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 5.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 6 eta 7.",
        "<strong>9.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 9.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 10.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 8 eta 4."
       ]
      },
      {
       "mota": "testua",
       "html": "11. eta 12. lerroen kontraesanak hasierako helburua ixten du."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>13. ariketa.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>¬</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>a</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>13. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<span>Frederic egitura - 13. ariketa</span>"
      },
      {
       "mota": "testua",
       "html": "Jatorrizko 1. eta 4. lerroetako <code>?</code> ikurrak helburua eta azpihelburua dira, ez premisa berriak. Diagraman bi lerroak <code>helburua (?)</code> gisa ageri dira eta 4.-11. lerroen barrutia barra bertikalaz mantentzen da."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/51fe508927c33492.svg",
       "zabalera": 419
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>x</mi></math> arbitrarioa da 6.-16. lerroetan; 11. lerroak 4. azpihelburua ixten du, eta 16. lerroaren orokortzeak 1. helburua ematen du."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>a</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — azpihelburua.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>a</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — NP, 2.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>a</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 5.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>a</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — NCC, 6.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>a</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 7.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EI, 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 7.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 9 eta 10.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — DN, 4.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MT, 3 eta 12.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — NP, 13.",
        "<strong>15.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 14.",
        "<strong>16.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — DN, 15."
       ]
      },
      {
       "mota": "testua",
       "html": "11. lerroak 4. orokortzea ixten du. 13.-16. urratsek <math display=\"inline\"><mi>x</mi></math> arbitrarioarentzat <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ematen dute, eta azken orokortzeak 1. helburua ixten du."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>14. ariketa.</strong> Extensionalitatearen premisatik,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>y</mi><mo>↔</mo><mi>x</mi><mo>∈</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>y</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "frogatu"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>u</mi><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>14. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<span>Frederic egitura - 14. ariketa</span>"
      },
      {
       "mota": "testua",
       "html": "Jatorrizko <code>?</code> markak 1., 2., 6., 7., 14. eta 18. lerroetan mantendu dira <code>helburua (?)</code> etiketarekin. 3., 15. eta 19. lerroak dira baldintzazko hipotesiak; <math display=\"inline\"><mrow><mi>u</mi><mo>,</mo><mi>w</mi><mo>,</mo><mi>x</mi></mrow></math> arbitrarioen barrutiak azpifrogen habiaratzeak erakusten ditu."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/b7606e5f994e747f.svg",
       "zabalera": 641
      },
      {
       "mota": "testua",
       "html": "17. eta 21. lerroek bi baldintzazko adarrak ixten dituzte; IBk 22. lerroa, <math display=\"inline\"><mi>x</mi></math>-ren orokortzeak 6.a eta extensionalitateak 25. lerroa ematen ditu."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>u</mi><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> — helburua.",
        "<strong>2.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math></span> — helburua.",
        "<strong>3.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> — baldintzazko hipotesia.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 3.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 3.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>x</mi><mo>∈</mo><mi>w</mi></mrow></math> — <math display=\"inline\"><mi>x</mi></math> arbitrarioarentzako helburua.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi></mrow></math> — EG, 4.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>w</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi></mrow></math> — EG, 5.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi></mrow></math> — EB, 8.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo>→</mo><mi>x</mi><mo>∈</mo><mi>u</mi></mrow></math> — EB, 8.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>w</mi><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi></mrow></math> — EB, 9.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo>→</mo><mi>x</mi><mo>∈</mo><mi>w</mi></mrow></math> — EB, 9.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi><mo>→</mo><mi>x</mi><mo>∈</mo><mi>w</mi></mrow></math> — helburua.",
        "<strong>15.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi></mrow></math> — baldintzazko hipotesia.",
        "<strong>16.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi></mrow></math> — MP, 10 eta 15.",
        "<strong>17.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>w</mi></mrow></math> — MP, 13 eta 16.",
        "<strong>18.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>w</mi><mo>→</mo><mi>x</mi><mo>∈</mo><mi>u</mi></mrow></math> — helburua.",
        "<strong>19.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>w</mi></mrow></math> — baldintzazko hipotesia.",
        "<strong>20.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi></mrow></math> — MP, 12 eta 19.",
        "<strong>21.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi></mrow></math> — MP, 11 eta 20.",
        "<strong>22.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>x</mi><mo>∈</mo><mi>w</mi></mrow></math> — IB, 14 eta 18.",
        "<strong>23.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>y</mi><mo>↔</mo><mi>x</mi><mo>∈</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>y</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>24.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> — GEG, 23.",
        "<strong>25.</strong> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> — MP, 24 eta 6."
       ]
      },
      {
       "mota": "testua",
       "html": "17. eta 21. lerroek bi noranzkoak ixten dituzte; 22. lerroak 7. helburua eta gero 6. orokortzea ematen ditu. 25. lerroak 2. baldintza ixten du, eta <math display=\"inline\"><mrow><mi>u</mi><mo>,</mo><mi>w</mi></mrow></math> arbitrarioen orokortzeak 1. lerroa."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>15. ariketa.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>4</mn></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "15. ariketako idazkera",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jatorrizkoak terminoak kateatuta idazten ditu: <math display=\"inline\"><mrow><mi>h</mi><mi>f</mi><mi>c</mi><mi>c</mi></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mi>c</mi><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>h</mi><mi>c</mi></mrow></math>. Hemen funtzio-aplikazioaren egitura parentesiekin esplizitatu da: <math display=\"inline\"><mrow><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Ez da eduki logikoa aldatu."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>15. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<span>Frederic egitura - 15. ariketa</span>"
      },
      {
       "mota": "testua",
       "html": "1. lerroko <code>?</code> markak dedukzio osoaren helburua adierazten du. Jatorriz bezala, aurrekaria ez da erabili behar: 2.-10. lerroek zuzenean <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> frogatzen dute."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/04ff9d0c8a48d068.svg",
       "zabalera": 363
      },
      {
       "mota": "testua",
       "html": "Funtzio-aplikazioa parentesiekin idatzi da, baina jatorrizko <math display=\"inline\"><mrow><mi>h</mi><mi>f</mi><mi>c</mi><mi>c</mi></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mi>c</mi><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>h</mi><mi>c</mi></mrow></math> terminoen egitura eta erregela-zenbakiak ez dira aldatu."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>c</mi></mrow></math> — EG, 3.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>c</mi><mo>→</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — II, 4.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>c</mi><mo>→</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 6.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 7 eta 5.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — ED, 2 eta 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 9."
       ]
      },
      {
       "mota": "testua",
       "html": "10. lerroak 1. baldintzazko helburua ixten du; aurrekari hipotetikoa ez da inferentziarako erabili behar izan."
      }
     ]
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "16.-20. ariketak",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>16. ariketa.</strong> Frogatu teorema logikoa dela"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>16. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<span>Frederic egitura - 16. ariketa</span>"
      },
      {
       "mota": "testua",
       "html": "1., 3. eta 7. lerroetako <code>?</code> ikurrak helburuak dira. 2. lerroa baldintzazko hipotesia da; 4. eta 8. lerroek bi kontraesanezko azpifroga independente irekitzen dituzte."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/4fca5411ddd823d0.svg",
       "zabalera": 523
      },
      {
       "mota": "testua",
       "html": "5.-6. eta 9.-10. lerroetako kontraesanek hurrenez hurren 3. eta 7. azpihelburuak ixten dituzte; 14. lerroak 2. hipotesiaren barrutia ixten du."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> — helburua.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — baldintzazko hipotesia.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — azpihelburua.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — kontraesanezko hipotesia.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — ID, 4.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — R, 2.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — azpihelburua.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — kontraesanezko hipotesia.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — ID, 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — R, 2.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — II, 7.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 11.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — SI, 3.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 12 eta 13."
       ]
      },
      {
       "mota": "testua",
       "html": "5. eta 6. lerroek 3. helburua ixten dute; 9. eta 10. lerroek 7.a. Berdintasunaren simetria eta ordezkapen-eskema erabilita, 14. lerroak hasierako baldintza ixten du."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>17. ariketa.</strong> Frogatu teorema logikoa dela <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>17. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<span>Frederic egitura - 17. ariketa</span>"
      },
      {
       "mota": "testua",
       "html": "1., 2. eta 7. lerroetako <code>?</code> markak helburuak dira; 3. eta 8. lerroak bi noranzkoetako baldintzazko hipotesiak dira. 9. lerroko EPn <math display=\"inline\"><mi>u</mi></math> aldagai kritiko berria da eta 8. lerroko existentzialaren barrutian bakarrik erabiltzen da."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/5cda2ddc74a7c6e7.svg",
       "zabalera": 358
      },
      {
       "mota": "testua",
       "html": "6. eta 14. lerroek bi noranzkoetako barrutiak ixten dituzte; 15. lerroko IBk bi emaitzak lotzen ditu."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — helburua.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — lehen noranzkoaren helburua.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — baldintzazko hipotesia.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>a</mi></mrow></math> — I.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>a</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 4 eta 3.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 5.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — bigarren noranzkoaren helburua.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — baldintzazko hipotesia.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>u</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 8; <math display=\"inline\"><mi>u</mi></math> kritikoa.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 9.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>u</mi></mrow></math> — EC, 9.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>u</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — II, 10.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>u</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 12.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 13 eta 11.",
        "<strong>15.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IB, 2 eta 7."
       ]
      },
      {
       "mota": "testua",
       "html": "6. eta 14. lerroek bi baldintzak ixten dituzte; IBk 15. lerroko bikondizionala ematen du."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>18. ariketa.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>c</mi><mo>↔</mo><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>18. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<span>Frederic egitura - 18. ariketa</span>"
      },
      {
       "mota": "testua",
       "html": "1. lerroko <code>?</code> helburua kontraesanez frogatzen da: 2. lerroan haren ezeztapen bikoitza irekitzen da. 11. lerroko EPn <math display=\"inline\"><mi>u</mi></math> kritikoa berria da eta ez da existentzialaren kanpoan orokortzen."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/d84dd69f5dacde28.svg",
       "zabalera": 479
      },
      {
       "mota": "testua",
       "html": "7. eta 17. lerroek aurkako formulak ematen dituzte; kontraesanak 2. hipotesia baztertu eta 1. helburua ixten du."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — kontraesanezko hipotesia.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>c</mi><mo>↔</mo><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mi>c</mi><mo>↔</mo><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 3.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mi>c</mi><mo>→</mo><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EB, 4.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mi>c</mi></mrow></math> — I.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 5 eta 6.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 8 eta 2.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — NG, 9.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EP, 10; <math display=\"inline\"><mi>u</mi></math> kritikoa.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — NCC, 11.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 12.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 12.",
        "<strong>15.</strong> <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — DN, 13.",
        "<strong>16.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 14 eta 15.",
        "<strong>17.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 16."
       ]
      },
      {
       "mota": "testua",
       "html": "7. eta 17. lerroak elkarren ezeztapenak dira; beraz 2. hipotesia baztertu eta 1. helburua ixten da."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>19. ariketa.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>y</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> izanik, frogatu"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>19. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<span>Frederic egitura - 19. ariketa</span>"
      },
      {
       "mota": "testua",
       "html": "1., 7. eta 12. lerroetako <code>?</code> markek helburu habiaratuak adierazten dituzte. 2. eta 13. lerroak dira baldintzazko hipotesiak; <math display=\"inline\"><mi>x</mi></math> arbitrarioa da 8.-17. lerroen barrutian, eta 15. lerroko <math display=\"inline\"><mi>v</mi></math> existentzialki sartzeko lekuko librea da."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/097f38dc63d48297.svg",
       "zabalera": 624
      },
      {
       "mota": "testua",
       "html": "17. lerroak 12. baldintza ixten du; <math display=\"inline\"><mi>x</mi></math>-ren orokortzeak 7. lerroa ematen du, eta 18. lerroak 2. hipotesiaren barrutia ixten du."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math></span> — helburua.",
        "<strong>2.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> — baldintzazko hipotesia.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 2.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 2.",
        "<strong>5.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>y</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> — GEG, 5.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — azpihelburua.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 3.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EB, 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 4.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EB, 10.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — <math display=\"inline\"><mi>x</mi></math> arbitrarioarentzako helburua.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — baldintzazko hipotesia.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 9 eta 13.",
        "<strong>15.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 14.",
        "<strong>16.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IP, 15.",
        "<strong>17.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 11 eta 16.",
        "<strong>18.</strong> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> — MP, 6 eta 7."
       ]
      },
      {
       "mota": "testua",
       "html": "17. lerroak 12. baldintza ixten du eta <math display=\"inline\"><mi>x</mi></math>-rekiko orokortzeak 7. lerroa ematen du. 18. lerroak hasierako baldintza ixten du."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>20. ariketa.</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mi>u</mi><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>∧</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>∧</mo><mo>∃</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>↔</mo><mi>w</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Testuinguru aljebraikoan, <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>-ek ezkerreko biderkadurarekiko eskuin-ezeztapena adierazten du; <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>-k elementu baten existentzia eta alderantzizkoen antzeko baldintza bat biltzen ditu; <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>-k eskuineko elementu neutro bakarra dagoela formalizatzen du."
      },
      {
       "mota": "testua",
       "html": "<strong>Muga (L04/L05):</strong> 20.aren enuntziatua 72. orrialde inprimatuan amaitzen da; dedukzioa 73.ean hasten da eta L05i dagokio. Ez da hemen bikoizten."
      }
     ]
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "II.4. Dedukzio-ariketak B: 20.-35. ariketak",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Lote-muga eta notazioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "20. ariketaren enuntziatua 72. orrialde inprimatuan hasten eta amaitzen da; horregatik L04n geratzen da eta hemen ez da bikoizten. Hemen haren 24 lerroko dedukzioa hasten da, 73. orrialdean bezala. Ondoren 21.-35. ariketak enuntziatu eta ebazpen osoarekin datoz."
      },
      {
       "mota": "testua",
       "html": "Mosterinen aurrizki trinkoa irakurterraz modernizatu da: <math display=\"inline\"><mrow><mi>f</mi><mi>x</mi><mi>y</mi></mrow></math> ordez <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>P</mi><mi>x</mi><mi>y</mi></mrow></math> ordez <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Λ</mi><mo>,</mo><mi>V</mi><mo>,</mo><mi>ι</mi></mrow></math> ordez <math display=\"inline\"><mrow><mo>∀</mo><mo>,</mo><mo>∃</mo><mo>,</mo><mi>ι</mi></mrow></math> idazten dira. Erregela-laburdurak iturrian bezala gordetzen dira: <code>prem.</code>, <code>EG</code>, <code>EP</code>, <code>GEG</code>, <code>MP</code>, <code>IC</code>, <code>EC</code>, <code>IB</code>, <code>EB</code>, <code>II</code>, <code>IP</code>, <code>TI</code>, <code>SI</code>, <code>DN</code>, <code>DP</code>, <code>DI</code>, <code>R</code>, <code>MT</code> eta <code>GEP</code>. Dedukzio-tauletako <strong>M</strong> zutabeak irismen-maila erakusten du; <math display=\"inline\"><mrow><mi>?</mi><mi>φ</mi></mrow></math> lerroak frogatu beharreko azpihelburuak dira."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "20. ariketa - dedukzioa"
    },
    {
     "mota": "testua",
     "html": "L04ko 20. ariketako <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> eta <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> notazioa mantentzen da; hemen <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math> dedukzioa soilik dator."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span>Frederic egitura - 20. ariketa</span>"
      },
      {
       "mota": "testua",
       "html": "Jatorrizko 1., 4., 5., 7. eta 13. lerroetako <code>?</code> helburu-markak etiketan mantendu dira. 3. lerroko EPn <math display=\"inline\"><msub><mi>z</mi><mn>0</mn></msub></math> kritikoa berria da; 4.-23. lerroen barruti osoan lekuko bera da, eta 24. lerroan IPz kanporatzen da."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/89fb4ebb085ac970.svg",
       "zabalera": 519
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>w</mi></math> arbitrarioen barrutiak 4.-23. lerroetako barren bidez ikusten dira; 5. eta 13. noranzkoak IBz elkartu ondoren bakarrik askatzen da <math display=\"inline\"><msub><mi>z</mi><mn>0</mn></msub></math>."
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>∧</mo><mo>∃</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>"
        ],
        [
         "3",
         "0",
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi><mo>∧</mo><mo>∃</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo>,</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>∧</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
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
       "html": "<math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>-k emandako <math display=\"inline\"><msub><mi>z</mi><mn>0</mn></msub></math> eskuin-identitatea dela erakusten da lehenik. <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>-en bakartasun-klausulak beste edozein <math display=\"inline\"><mi>w</mi></math> harekin identifikatzen du; bi norabideak IBz lotu eta <math display=\"inline\"><msub><mi>z</mi><mn>0</mn></msub></math> existentzialki sartzen da."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "21. ariketa"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>. Frogatu: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>4</mn></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Talde-teoriako irakurketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math> talde-teoriaren axiomatizazio posible bat dira. <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math>-k eskuineko zatidura beti existitzen dela adierazten du."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span>Frederic egitura - 21. ariketa</span>"
      },
      {
       "mota": "testua",
       "html": "1. lerroko <code>?</code> markak helburu orokorra adierazten du. 5.-13. lerroetako barra <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi></mrow></math> arbitrarioen barrutia da; ez da hipotesi gehigarri bat. Ez dago EP/GEPko aldagai kritikorik dedukzio honetan."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/555bab062cbf3b20.svg",
       "zabalera": 381
      },
      {
       "mota": "testua",
       "html": "13. lerroko IPren lekukoa <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da. Ondoren <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi></mrow></math>-ren orokortze inplizituak 1. lerroko helburua ixten du, jatorrizko barruti-markak adierazten duen bezala."
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
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
       "html": "Elkartze-legeak <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> terminoa <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> bihurtzen du. <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math> erabilita, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lekukoak helburua betetzen du."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "22. ariketa"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math> eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>∧</mo><mo>∃</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>. Frogatu: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>4</mn></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Hamiltonen axiomen irakurketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lehen hiru formulak Hamiltonen talde-axiomak dira. Ondorioak elementu neutro bat dagoela eta elementu bakoitzak alderantzizko bat duela adierazten du."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span>Frederic egitura - 22. ariketa</span>"
      },
      {
       "mota": "testua",
       "html": "1. eta 5. lerroetako <code>?</code> markak helburuak dira. 4. lerroko EPn <math display=\"inline\"><mi>u</mi></math>, 8.ekoan <math display=\"inline\"><mi>w</mi></math> eta 20.ekoan <math display=\"inline\"><msub><mi>z</mi><mn>0</mn></msub></math> aldagai kritiko berriak dira; hirurak beren existentzialen ondoren aukeratzen dira eta ez dira premisa aske bihurtzen."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/de4045e53ef1fc50.svg",
       "zabalera": 421
      },
      {
       "mota": "testua",
       "html": "22. lerroak 5. helburuko matrizea ematen du; <math display=\"inline\"><mi>x</mi></math>-ren orokortzea egin eta 4. lerroko <math display=\"inline\"><mi>u</mi></math> lekukoa 23. lerroan existentzialki sartzen da."
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>?</mi><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>∧</mo><mo>∃</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>∧</mo><mo>∃</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
         "IP, 5"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Lehenik <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math> duen <math display=\"inline\"><mi>u</mi></math> aukeratzen da. Ezker eta eskuineko zatidurak elkartze-legearekin konbinatuz, <math display=\"inline\"><mi>u</mi></math> elementu guztientzat eskuin-neutro dela lortzen da; <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>-k, gainera, <math display=\"inline\"><mi>u</mi></math>-ra eramaten duen eskuin-alderantzizkoa ematen du."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "23. ariketa"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math> eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo>,</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>∧</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>. Frogatu: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>4</mn></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Hamiltonen axiomen beste ondorio bat",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math>-k bi elementuren biderkadura-ekuazioak gehienez soluzio bat duela adierazten du; iturriak talde-eragiketaren bakartasunarekin lotzen du."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span>Frederic egitura - 23. ariketa</span>"
      },
      {
       "mota": "testua",
       "html": "1. eta 2. lerroetako <code>?</code> markek helburu orokorra eta haren matrize baldintzatua adierazten dituzte. 3. lerroa da hipotesi bakarra. 9., 11. eta 14. lerroetako EPek hurrenez hurren <math display=\"inline\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub></mrow></math> aldagai kritiko berriak hautatzen dituzte; izenak eta erabilera-barrutia jatorrizkoak dira."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/e7e294c5c742c7c4.svg",
       "zabalera": 493
      },
      {
       "mota": "testua",
       "html": "Elkartze-legearen GEG instantziek berdintasun-katea garraiatzen dute; 38. eta 14. lerroen TIak <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> ematen du eta 3. hipotesia ixten du."
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo>,</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>∧</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>z</mi><mn>1</mn></msub><mo>→</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math></span>",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>"
        ],
        [
         "19",
         "2",
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math></span>",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>w</mi><mo>→</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math></span>",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
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
       "html": "Froga luzeak ezker- eta eskuin-zatiketak behin eta berriz aukeratzen ditu. Elkartze-legeak parentesiak lekuz aldatzen ditu, eta TI bidez kateatutako berdintzek <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>w</mi></mrow></math> elkartuz <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> ematen dute."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "24. ariketa"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>y</mi><mo>=</mo><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>x</mi><mo>=</mo><mi>r</mi><mo>→</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>5</mn></msub><mo>=</mo><mo>¬</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Frogatu: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>5</mn></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Argumentuaren formalizazioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sofista bakar batek irakasten du doan, eta Sokrates da. Sokratesek dio beste sofistarik ez dagoela. Platonek doan irakasten duen sofista batek baino hobeto argudiatzen du. Norbaitek beste batek baino hobeto argudiatzen badu, bigarrenak ez du lehenak baino hobeto argudiatzen. Ondorioa: Platon ez da sofista."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span>Frederic egitura - 24. ariketa</span>"
      },
      {
       "mota": "testua",
       "html": "1. eta 23. lerroetako <code>?</code> markak helburuak dira. 2. eta 24. lerroak kontraesanezko hipotesiak dira. 5. lerroko EPn <math display=\"inline\"><mi>u</mi></math> eta 7. lerroko EPn <math display=\"inline\"><mi>w</mi></math> aldagai kritiko berriak dira; beren existentzialen barrutian soilik erabiltzen dira."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/8e34dbe1e4568e05.svg",
       "zabalera": 491
      },
      {
       "mota": "testua",
       "html": "28. eta 30. lerroek 24. hipotesia kontraesanean jartzen dute; horrek 23. helburua ematen du. 32. eta 33. lerroetako azken kontraesanak 2. hipotesia baztertu eta 1. helburua ixten du."
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>y</mi><mo>=</mo><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
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
       "html": "<math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>-ek doan irakasten duen sofista <math display=\"inline\"><mi>r</mi></math> dela identifikatzen du; <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>-k Platonek haren gain duen erlazioa ematen du. <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math>-ren asimetriak <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ukatzen du, eta <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> suposizioak <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> bidez kontrakoa behartzen du."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "25. ariketa"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>. Frogatu: <math display=\"inline\"><mrow><mo>⊢</mo><msub><mi>α</mi><mn>1</mn></msub></mrow></math>."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Frederic egitura - 25. ariketa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburua:</strong> 1. lerroko <math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi></mrow></math>. <strong>Irismena:</strong> 1. lerroa <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>; 2-7 lerroak <math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math>. <strong>Freskotasuna:</strong> ez dago EP edo GEP aplikaziorik."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/25b513b0c7248688.svg",
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
       "html": "Premisak <math display=\"inline\"><mi>P</mi></math> betetzen duen objektu bakarra <math display=\"inline\"><mi>a</mi></math> dela dio. DPk deskribatutako objektuak <math display=\"inline\"><mi>P</mi></math> betetzen duela ematen du, eta bakartasun-baldintzak <math display=\"inline\"><mi>a</mi></math>-rekin berdintzen du."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "26. ariketa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>α</mi><mo>→</mo><mi>ι</mi><mi>x</mi><mi>α</mi><mo>=</mo><mi>ι</mi><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Frogatu: <math display=\"inline\"><mrow><mo>⊢</mo><msub><mi>α</mi><mn>1</mn></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Aldagaiaren baldintza",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dedukzioko <math display=\"inline\"><mi>y</mi></math> ez dago aske <math display=\"inline\"><mi>α</mi></math> formulan. Baldintza hori funtsezkoa da bakartasun-formula osatzean aldagai-harrapaketa saihesteko."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Frederic egitura - 26. ariketa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburuak:</strong> 1. lerroko <math display=\"inline\"><mrow><mi>?</mi><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>α</mi><mo>→</mo><mi>ι</mi><mi>x</mi><mi>α</mi><mo>=</mo><mi>ι</mi><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta 3. lerroko <math display=\"inline\"><mrow><mi>?</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <strong>Irismena:</strong> 1. lerroa <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>; 2 eta 9 lerroak <math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math>; 3. lerroa <math display=\"inline\"><msub><mi>M</mi><mn>2</mn></msub></math>; 4-8 lerroak <math display=\"inline\"><msub><mi>M</mi><mn>3</mn></msub></math>. <strong>Freskotasuna:</strong> <math display=\"inline\"><mi>y</mi></math> ez dago aske <math display=\"inline\"><mi>α</mi></math> formulan; baldintza horrek aldagai-harrapaketa eragozten du."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/b5f61d86a064eb52.svg",
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
       "html": "<math display=\"inline\"><mi>α</mi></math>-k lekukorik ez badu, ezin du objektu bakarra karakterizatu. DI erregelak deskribapen hutsaren balioa <math display=\"inline\"><mrow><mi>ι</mi><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> termino lehenetsiarekin identifikatzen du."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "27. ariketa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>x</mi><mo>=</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Frogatu: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Frederic egitura - 27. ariketa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburuak:</strong> 1. lerroko <math display=\"inline\"><mrow><mi>?</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta 5. lerroko <math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mi>x</mi><mo>=</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. <strong>Irismena:</strong> 1-4 eta 9-10 lerroak <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>; 5-8 lerroak <math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math>. <strong>Freskotasuna:</strong> ez dago EP edo GEP aplikaziorik."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/0578efc375427511.svg",
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
       "html": "Bi premisek <math display=\"inline\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> propietatea betetzen duen objektu bakarra <math display=\"inline\"><mi>c</mi></math> dela ematen dute. DPk deskribapenaren instantzia zuzenean ondorioztatzen du."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "28. ariketa"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>. Frogatu: <math display=\"inline\"><mrow><mo>⊢</mo><msub><mi>α</mi><mn>1</mn></msub></mrow></math>."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Frederic egitura - 28. ariketa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburua:</strong> 1. lerroko <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>?</mi><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>. <strong>Irismena:</strong> 1. lerroa <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>; 2-13 lerroak <math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math>. <strong>Freskotasuna:</strong> 3. lerroko EPn <math display=\"inline\"><mi>u</mi></math> lekuko berria da, aurreko lerroetan agertzen ez dena."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/8f5fc1c6ef3c2145.svg",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>?</mi><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
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
       "html": "Existenteak <math display=\"inline\"><mi>H</mi></math> betetzen duen objektu bakarra <math display=\"inline\"><mi>u</mi></math> dela eta <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dela ematen du. Deskribapena <math display=\"inline\"><mi>u</mi></math>-rekin identifikatuta, berdinen ordezkapenak <math display=\"inline\"><mrow><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> ematen du."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "29. ariketa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>y</mi></math> ez dago aske <math display=\"inline\"><mi>α</mi></math>-n, eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>. Frogatu: <math display=\"inline\"><mrow><mo>⊢</mo><msub><mi>α</mi><mn>1</mn></msub></mrow></math>."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Frederic egitura - 29. ariketa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburua:</strong> 1. lerroko <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>?</mi><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. <strong>Irismena:</strong> 1. lerroa <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>; 2-13 lerroak <math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math>. <strong>Freskotasuna:</strong> <math display=\"inline\"><mi>y</mi></math> ez dago aske <math display=\"inline\"><mi>α</mi></math> formulan; 3. lerroko EPn <math display=\"inline\"><mi>u</mi></math> lekuko berria da."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/b488eacfa9ce2219.svg",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>?</mi><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>",
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
       "html": "28. ariketaren eskema orokortzen da: <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> atomoaren ordez edozein <math display=\"inline\"><mi>α</mi></math> formula erabiltzen da, ordezkapena <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mrow><mi>ι</mi><mi>x</mi><mi>α</mi></mrow></msubsup><mi>α</mi></mrow></math> esplizituki erakutsiz."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "30. ariketa"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>. Frogatu: <math display=\"inline\"><mrow><mo>⊢</mo><msub><mi>α</mi><mn>1</mn></msub></mrow></math>."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Frederic egitura - 30. ariketa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburuak:</strong> 1. lerroko baliokidetasuna; 2. lerroko ezkerretik eskuinerako inplikazioa; eta 5. lerroko eskuinetik ezkerrerako inplikazioa. <strong>Irismena:</strong> 1 eta 15 lerroak <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>; 2 eta 5 lerroak <math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math>; 3-4 eta 6-14 lerroak <math display=\"inline\"><msub><mi>M</mi><mn>2</mn></msub></math>. <strong>Freskotasuna:</strong> 7. lerroko EPn <math display=\"inline\"><mi>u</mi></math> lekuko berria da."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/688b4ab997e7f808.svg",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
         ""
        ],
        [
         "2",
         "1",
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>?</mi><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo>→</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
         "IB, 2, 5"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Ezkerretik eskuinera deskribapen bera existentzialaren lekuko da. Eskuinetik ezkerrera, DPk deskribatutako objektuak <math display=\"inline\"><mi>P</mi></math> betetzen duela ematen du, eta bakartasunak aukeratutako <math display=\"inline\"><mi>u</mi></math>-rekin identifikatzen du."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "31. ariketa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>p</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>5</mn></msub><mo>=</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>p</mi></mrow></math>. Frogatu: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>5</mn></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Maria, Apolonia eta Pituso",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Mariak gizon bakar bat maite du. Mariak maite duen gizona Apoloniak maite duena da. Pituso da Apoloniak maite duen gizona. Mariak Apolonia maite duen gizona maite du. Ondorioz, Apolonia maite duen gizona Pituso da."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Frederic egitura - 31. ariketa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburua:</strong> 1. lerroko <math display=\"inline\"><mrow><mi>?</mi><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>p</mi></mrow></math>. <strong>Irismena:</strong> 1-16 lerro guztiak <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math> mailan daude. <strong>Freskotasuna:</strong> 5. lerroko EPn <math display=\"inline\"><mi>u</mi></math> lekuko berria da."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/950a88f0b30dfbdd.svg",
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
       "html": "Lehen bakartasun-premisak Mariak maite dituen bi deskribapenak <math display=\"inline\"><mi>u</mi></math> berarekin berdintzen ditu. Ondoren, TIren bidez <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> eta <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> kateatzen dira."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "32. ariketa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mi>t</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>¬</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>5</mn></msub><mo>=</mo><mi>t</mi><mo>=</mo><mi>r</mi></mrow></math>. Frogatu: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>5</mn></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Toribio, Clotilde, Roberto eta Carina",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Toribio da Clotilde maite duen gizona. Robertok ez du Carinarekiko sinpatiarik. Carinarekiko sinpatiarik ez duen orok Clotilde maite du. Clotilde pertsona bakar batek maite du. Ondorioz, Toribio eta Roberto pertsona bera dira."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Frederic egitura - 32. ariketa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburua:</strong> 1. lerroko <math display=\"inline\"><mrow><mi>?</mi><mi>t</mi><mo>=</mo><mi>r</mi></mrow></math>. <strong>Irismena:</strong> 1-17 lerro guztiak <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math> mailan daude. <strong>Freskotasuna:</strong> 8. lerroko EPn <math display=\"inline\"><mi>u</mi></math> lekuko berria da."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/a4ed75dd826e72e7.svg",
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
       "html": "Robertok <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> betetzen duela ondorioztatzen da, eta <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math>-ren bakartasunak Roberto deskribatutako objektuarekin berdintzen du. <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>-ek azken identitatea Toribiora eramaten du."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "33. ariketa"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ι</mi><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>=</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>. Frogatu: <math display=\"inline\"><mrow><mo>⊢</mo><msub><mi>α</mi><mn>1</mn></msub></mrow></math>."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Frederic egitura - 33. ariketa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburuak:</strong> 1. lerroko inplikazioa eta 4. lerroko <math display=\"inline\"><mrow><mi>?</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. <strong>Irismena:</strong> 1. lerroa <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>; 2-3 eta 18 lerroak <math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math>; 4. lerroa <math display=\"inline\"><msub><mi>M</mi><mn>2</mn></msub></math>; 5-17 lerroak <math display=\"inline\"><msub><mi>M</mi><mn>3</mn></msub></math>. <strong>Freskotasuna:</strong> 3. lerroko GEPn <math display=\"inline\"><mi>u</mi></math> eta <math display=\"inline\"><mi>w</mi></math> aldagai berriak dira; 7. lerroko EPn <math display=\"inline\"><mi>v</mi></math> lekuko berria da."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/d06c2195346bfb48.svg",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ι</mi><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>=</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>",
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
       "html": "Bi objektu desberdinek <math display=\"inline\"><mi>P</mi></math> betetzen badute, <math display=\"inline\"><mi>P</mi></math>-k ezin du objektu bakarra definitu. DIren arabera, deskribapen ez-bakarra termino lehenetsiarekin berdintzen da."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "34. ariketa"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>5</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∃</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>. Frogatu: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>5</mn></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Argumentu ontologikoaren formalizazioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>d</mi></math> pentsa daitekeen izakirik handiena da. <math display=\"inline\"><mi>d</mi></math> pentsa daiteke; pentsa daitekeen eta existitzen den izakiren bat dago; eta pentsa daitekeen izaki existitu oro handiagoa da pentsa daitekeen baina existitzen ez den edozein izaki baino. Beraz, <math display=\"inline\"><mi>d</mi></math> existitzen ez bada, pentsa daitekeen izaki bat dago <math display=\"inline\"><mi>d</mi></math> baino handiagoa dena. Formalizazio honetan existentzia <math display=\"inline\"><mi>E</mi></math> predikatua da, ez kuantifikatzailea."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Frederic egitura - 34. ariketa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburua:</strong> 1. lerroko <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>?</mi><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∃</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>. <strong>Irismena:</strong> 1. lerroa <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>; 2-18 lerroak <math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math>. <strong>Freskotasuna:</strong> 4. lerroko EPn <math display=\"inline\"><mi>u</mi></math> lekuko berria da eta ez da azken ondorioan aske geratzen."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/855b9405fa8ee8e3.svg",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>?</mi><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∃</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math>"
        ],
        [
         "6",
         "1",
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi><mo>→</mo><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
         "IC, 16, 15"
        ],
        [
         "18",
         "1",
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
         "IP, 17"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>-ren lekuko existentearen eta <math display=\"inline\"><mi>d</mi></math> existitzen ez delako hipotesiaren artean <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lortzen da. <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>-ek <math display=\"inline\"><mi>d</mi></math> deskribapenarekin ordezten du, eta <math display=\"inline\"><mi>u</mi></math> existentzialki sartzen da."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "35. ariketa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo>,</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>∧</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>ι</mi><mi>y</mi><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi></mrow></math>. Frogatu: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Frederic egitura - 35. ariketa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburuak (?)</strong>: 1, 4, 5, 6 eta 14 lerroak. <strong>Irismena:</strong> 1-3 eta 20-21 lerroak <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>; 4. lerroa <math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math>; 5 eta 19 lerroak <math display=\"inline\"><msub><mi>M</mi><mn>2</mn></msub></math>; 6 eta 14 lerroak <math display=\"inline\"><msub><mi>M</mi><mn>3</mn></msub></math>; 7-13 eta 15-18 lerroak <math display=\"inline\"><msub><mi>M</mi><mn>4</mn></msub></math>. <strong>Freskotasuna:</strong> 3. lerroko EPn <math display=\"inline\"><msub><mi>z</mi><mn>0</mn></msub></math> berria da; 4-19 azpidedukzioan <math display=\"inline\"><mi>y</mi></math> arbitrarioa da."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/cd49c491573e7c01.svg",
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
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo>,</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>∧</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>",
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
       "html": "<math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>-ek eskuin-identitate bat ematen du; <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>-k bakarra dela frogatzen du. Horrenbestez, <math display=\"inline\"><mrow><mi>ι</mi><mi>y</mi><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> deskribapenak identitate hori izendatzen du eta <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> ondorioztatzen da."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "L05en amaiera",
     "blokeak": [
      {
       "mota": "testua",
       "html": "35. ariketaren 21. lerroarekin amaitzen da 87. orrialde inprimatua. Hurrengo orrialdean II.5 hasten da; ez da L05 honetan sartu."
      }
     ]
    }
   ]
  },
  {
   "id": "a37",
   "maila": 2,
   "izenburua": "II.5. Deduzigarritasunari buruzko teorema sintaktikoak",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "Mosterín, Jesús - Lógica de primer orden, 2. arg., Ariel, 1976",
     "xehetasuna": "II.5-II.8; 88.-104. or. inprimatuak; euskarazko parafrasia",
     "hizkuntza": "es"
    },
    {
     "mota": "oharra",
     "titulua": "Maila sintaktikoa eta notazioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Atal honetan <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math> idazkerak dedukzio formal bat badagoela adierazten du; ez da oraindik eredu guztietako ondorio semantikoa. Formalismoa azpimarratu behar denean <math display=\"inline\"><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder></math> idatziko dugu. Mosterinen <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Λ</mi><mi>x</mi><mi>α</mi></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mi>x</mi><mi>α</mi></mrow></math> eta <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>α</mi></mrow></math> notazioak, hurrenez hurren, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>, <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> izango dira hemen."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "5.1. Dedukzioaren lehen teorema",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>α</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko sententzia bada eta <math display=\"inline\"><mrow><mi>α</mi><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>β</mi></mrow></math>, orduan <math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒟</mi><mn>1</mn></msub></math> <math display=\"inline\"><mi>α</mi></math> premisatik <math display=\"inline\"><mi>β</mi></math> deduzitzen duen <math display=\"inline\"><mi>n</mi></math> lerroko dedukzioa. Eraiki <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒟</mi><mn>2</mn></msub></math> honela: ireki <math display=\"inline\"><mrow><mi>?</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; hurrengo lerroan suposatu <math display=\"inline\"><mi>α</mi></math>; ondoren ireki <math display=\"inline\"><mrow><mi>?</mi><mi>β</mi></mrow></math> eta kopiatu <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒟</mi><mn>1</mn></msub></math>-eko lerro guztiak irismen-marka bat gehiagoz. <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒟</mi><mn>1</mn></msub></math>-en <math display=\"inline\"><mi>α</mi></math> premisa gisa sartzen zen bakoitzean, <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒟</mi><mn>2</mn></msub></math>-n bigarren lerroko <math display=\"inline\"><mi>α</mi></math> R erregelaz errepikatzen da. Gainerako inferentziek bere horretan jarraitzen dute. Horrela, kopiatutako zatiak <math display=\"inline\"><mi>β</mi></math> ematen du, baldintzazko helburua ixten da eta ez da premisarik gelditzen. Beraz, <math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "5.2. Dedukzioaren bigarren teorema",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> sententzia multzoa bada eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>, orduan badira <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-ko formula finituki asko, <math display=\"inline\"><mrow><msub><mi>γ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>γ</mi><mi>n</mi></msub></mrow></math>, halakoak non <math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>γ</mi><mn>1</mn></msub><mo>∧</mo><mi>…</mi><mo>∧</mo><msub><mi>γ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dedukzioaren finitude-teoremak dio benetan erabilitako premisek <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-ren azpimultzo finitu bat osatzen dutela; hortaz, <math display=\"inline\"><mrow><msub><mi>γ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>γ</mi><mi>n</mi></msub><mo>⊢</mo><mi>α</mi></mrow></math>. Konjuntzioa premisa bakar bihurtzeko propietateak <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>γ</mi><mn>1</mn></msub><mo>∧</mo><mi>…</mi><mo>∧</mo><msub><mi>γ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⊢</mo><mi>α</mi></mrow></math> ematen du. Azkenik, 5.1 aplikatuta konjuntzio hori baldintzaren aurrekarira pasatzen da."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "5.3. Premisa kontrakoa ezabatzea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mi>α</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko sententzia."
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊢</mo><mo>¬</mo><mi>α</mi></mrow></math> bada, orduan <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mo>¬</mo><mi>α</mi></mrow></math>.",
        "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊢</mo><mi>α</mi></mrow></math> bada, orduan <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lehen kasuan, hartu <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>-tik <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math>-ren dedukzio bat. <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-tik <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> frogatzeko ireki helburua eta suposatu <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mi>α</mi></mrow></math>; DNz <math display=\"inline\"><mi>α</mi></math> lortzen da. Jatorrizko dedukzio osoa irismen- marka bat gehiagoz kopiatu, baina jatorrizko <math display=\"inline\"><mi>α</mi></math> premisa bakoitza lortu berri den <math display=\"inline\"><mi>α</mi></math> lerroaren errepikapenaz ordezkatu. Kopiaren premisa bakarrak <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-tik datoz eta amaieran <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> lortzen da; horrek irekitako helburua ixten du. Bigarren baieztapena simetrikoki frogatzen da, <math display=\"inline\"><mi>α</mi></math> eta <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> trukatuz."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "5.4. Berdintasunaren lekuko existentziala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>t</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko terminoa bada, orduan <math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo>∃</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ireki <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> helburua eta suposatu haren ezeztapena. NPz <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; EGz, <math display=\"inline\"><mi>x</mi></math>-ren ordez <math display=\"inline\"><mi>t</mi></math> jarriz, <math display=\"inline\"><mrow><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>=</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Baina I erregela eratorriak <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>t</mi></mrow></math> ematen du premisarik gabe. Kontraesanak helburua ixten du."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "5.5. Orokortzea baldintzaren ondorioan",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>x</mi></math> ez bada libre <math display=\"inline\"><mi>α</mi></math>-n eta <math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, orduan <math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mo>∀</mo><mi>x</mi><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ireki <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mo>∀</mo><mi>x</mi><mi>β</mi></mrow></math> eta suposatu <math display=\"inline\"><mi>α</mi></math>. Premisarik gabeko <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>β</mi></mrow></math> teorema erabilgarri da; MPz <math display=\"inline\"><mi>β</mi></math> lortzen da. <math display=\"inline\"><mi>x</mi></math> ez da libre <math display=\"inline\"><mi>α</mi></math> hipotesian, ezta aurreko beste premisaren batean ere; beraz, elementu arbitrarioaren eraikuntza-erregelaz <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>β</mi></mrow></math> helburua itxi daiteke. Baldintzazko froga ixtean emaitza premisarik gabekoa da."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "5.6. Terminoak aldagai eta existentzialen <br> bidez deskonposatzea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bitez <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><msub><mi>t</mi><mn>2</mn></msub><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko terminoak eta <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> formula. Aukeratu <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub></mrow></math> aldagai freskoak, termino horietan libre ez daudenak. Orduan:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>⊢</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mo>∃</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub><mo>∧</mo><mi>…</mi><mo>∧</mo><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><msub><mi>t</mi><mi>n</mi></msub><mo>∧</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>.",
        "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>⊢</mo><mi>x</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mo>∃</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub><mo>∧</mo><mi>…</mi><mo>∧</mo><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><msub><mi>t</mi><mi>n</mi></msub><mo>∧</mo><mi>x</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>.",
        "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>⊢</mo><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>↔</mo><mo>∃</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub><mo>∧</mo><mi>y</mi><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>∧</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hirugarren baliokidetasuna garatuko dugu. Ezkerretik eskuinera, <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math> suposatu. I erregelaz <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math> ditugu; ICz hirurak elkartu eta GIPz <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi></mrow></math> existentzialak sartu: <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub><mo>∧</mo><mi>y</mi><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>∧</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Alderantziz, existentziala suposatu. GEPz bi aldagai kritiko berri hartu, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub><mo>∧</mo><mi>w</mi><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>∧</mo><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> lortzeko. ECz hiru osagaiak bereizi. TIren bidez <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math>-tik <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><mi>w</mi></mrow></math>, eta gero <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math>-rekin <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math>. Bi baldintzazko dedukzioak IBz elkartzen dira. Lehen bi baieztapenetan urrats bera egiten da argumentu bakoitzerako: identitateak gehitu, predikatu edo funtzioaren aldagai-bertsioa eraiki, eta existentzialak sartu edo ezabatu."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "5.7. Baliokidetasuna kuantifikatzaile orokorraren azpian",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Edozein <math display=\"inline\"><mrow><mi>α</mi><mo>,</mo><mi>β</mi></mrow></math> formulatarako, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>α</mi><mo>↔</mo><mo>∀</mo><mi>x</mi><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hartu <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> premisa. Lehen noranzkoan, suposatu <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>; EGz <math display=\"inline\"><mi>α</mi></math> eta <math display=\"inline\"><mrow><mi>α</mi><mo>↔</mo><mi>β</mi></mrow></math>, EBz <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>β</mi></mrow></math> eta MPz <math display=\"inline\"><mi>β</mi></math>. <math display=\"inline\"><mi>x</mi></math> arbitrarioa denez, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>β</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Itzulerako noranzkoan, suposatu <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>β</mi></mrow></math> eta ireki <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>. Kontraesanez, suposatu <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>; NGz <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math>. EPz hartu <math display=\"inline\"><mi>u</mi></math> kritiko freskoa eta lortu <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. Premisa unibertsaletik EGz <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>↔</mo><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, EBz <math display=\"inline\"><mrow><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>→</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> eta MTz <math display=\"inline\"><mrow><mo>¬</mo><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. Baina <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>β</mi></mrow></math>-tik EGz <math display=\"inline\"><mrow><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, kontraesana. Bi noranzkoak IBz elkartzen dira."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "5.8 adierazteko, erabil dezagun metahizkuntzako laburdura hau: <math display=\"inline\"><mrow><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>≡</mo><mo>∀</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>z</mi><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Horrek dio <math display=\"inline\"><mi>a</mi></math> dela <math display=\"inline\"><mi>α</mi></math> betetzen duen objektu bakarra. Halaber, <math display=\"inline\"><mrow><msub><mi>d</mi><mn>0</mn></msub><mo>≡</mo><mi>ι</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da deskribapen inpropio guztietarako hautatutako termino lehenetsia."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "5.8. Deskribapen baten karakterizazio sintaktikoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>w</mi></math> ez badago <math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi><mi>α</mi></mrow></math> terminoan, orduan <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>x</mi><mo>=</mo><mi>ι</mi><mi>z</mi><mi>α</mi><mo>↔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>∨</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mo>∃</mo><mi>w</mi><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>∧</mo><mi>x</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ezkerretik eskuinera.</strong> Suposatu <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>ι</mi><mi>z</mi><mi>α</mi></mrow></math>. Bi kasu bereizi TNDz. Ez badago <math display=\"inline\"><mi>α</mi></math>-ren objektu bakarrik, DI erregelak <math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi><mi>α</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub></mrow></math> ematen du; TIz <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub></mrow></math>, ICz bigarren disjuntua eta IDz disjuntzio osoa."
      },
      {
       "mota": "testua",
       "html": "Badago objektu bakarra, EPz hartu <math display=\"inline\"><mi>u</mi></math> freskoa eta izan <math display=\"inline\"><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math>. DPz <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>ι</mi><mi>z</mi><mi>α</mi></mrow><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>; <math display=\"inline\"><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math>-tik EG eta EB erabiliz <math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi><mi>α</mi><mo>=</mo><mi>u</mi></mrow></math>. Premisarekin TI aplikatuta <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi></mrow></math>. Berdintasunaren sarrera eta ezabapenaren bidez <math display=\"inline\"><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math>-ko parametroa <math display=\"inline\"><mi>x</mi></math>-z ordezkatzen da, eta <math display=\"inline\"><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math> lortzen da. IDz lehen disjuntua sartzen da. IDA eta TND erabilita bi kasuek ondorio bera ematen dute."
      },
      {
       "mota": "testua",
       "html": "<strong>Eskuinetik ezkerrera.</strong> <math display=\"inline\"><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math> suposatuta, IPz <math display=\"inline\"><mrow><mo>∃</mo><mi>w</mi><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>, DPz <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>ι</mi><mi>z</mi><mi>α</mi></mrow><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, eta <math display=\"inline\"><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math>-ren instantziaz <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>ι</mi><mi>z</mi><mi>α</mi></mrow><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>↔</mo><mi>ι</mi><mi>z</mi><mi>α</mi><mo>=</mo><mi>x</mi></mrow></math>. MPz eta SIz <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>ι</mi><mi>z</mi><mi>α</mi></mrow></math>. Beste disjuntuan, <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>w</mi><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>-tik DIz <math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi><mi>α</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub></mrow></math>; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub></mrow></math>-rekin TI aplikatuta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>ι</mi><mi>z</mi><mi>α</mi></mrow></math>. IDAk bi adarrak bateratzen ditu, eta IBk bi noranzkoak."
      }
     ]
    }
   ]
  },
  {
   "id": "a38",
   "maila": 2,
   "izenburua": "II.6. Deskribatzaileen kuasiezabapena",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Gutxienez konstante indibidual bat duen hizkuntza batean deskribatzaileak formula deskribatzailerik gabeetara itzul daitezke, baina ez huts-hutsean: konstante finko bat, <math display=\"inline\"><mi>c</mi></math>, deskribapen inpropioaren termino lehenetsiarekin identifikatu behar da, <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub></mrow></math>. Horregatik da emaitza <strong>kuasi</strong>-ezabapena."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "6.1. Kuasiezabapenaren teorema",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mi>c</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko konstante indibiduala."
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko formula bakoitzerako, <math display=\"inline\"><mi>α</mi></math>, badago deskribatzailerik gabeko <math display=\"inline\"><msup><mi>α</mi><mo>′</mo></msup></math> formula bat, <math display=\"inline\"><mi>α</mi></math>-ren aldagai libre berberekin, halakoa non <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><msup><mi>α</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "<math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko <math display=\"inline\"><mi>t</mi></math> termino bakoitzerako eta <math display=\"inline\"><mi>t</mi></math>-n agertzen ez den <math display=\"inline\"><mi>x</mi></math> aldagairako, badago deskribatzailerik gabeko <math display=\"inline\"><mi>φ</mi></math> formula bat, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>t</mi></mrow></math>-ren aldagai libre berberekin, halakoa non <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>t</mi><mo>↔</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga formula eta terminoen egituraren gaineko aldi bereko indukzioz egiten da."
      },
      {
       "mota": "testua",
       "html": "<strong>Terminoen oinarriak.</strong> <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>v</mi></mrow></math> aldagaia bada, hartu <math display=\"inline\"><mrow><mi>φ</mi><mo>≡</mo><mi>x</mi><mo>=</mo><mi>v</mi></mrow></math>; <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>a</mi></mrow></math> konstantea bada, hartu <math display=\"inline\"><mrow><mi>φ</mi><mo>≡</mo><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math>. Bi kasuetan baliokidetasuna identikoa da, deskribatzailerik ez dago eta aldagai libreak gordetzen dira."
      },
      {
       "mota": "testua",
       "html": "<strong>Funtzioz eratutako terminoa.</strong> <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> bada, aukeratu <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub></mrow></math> aldagai freskoak. Indukzio-hipotesiak formula deskribatzailerik gabeak ematen ditu, <math display=\"inline\"><msub><mi>φ</mi><mi>i</mi></msub></math>, bakoitza <math display=\"inline\"><mrow><msub><mi>x</mi><mi>i</mi></msub><mo>=</mo><msub><mi>t</mi><mi>i</mi></msub></mrow></math>-ren baliokidea <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub></mrow></math> premisapean. 5.6(b) erabilita eta baliokideak ordezkatuta, hartu <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>φ</mi><mo>≡</mo><mo>∃</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>1</mn></msub><mo>∧</mo><mi>…</mi><mo>∧</mo><msub><mi>φ</mi><mi>n</mi></msub><mo>∧</mo><mi>x</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "<strong>Formula atomikoa.</strong> <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> bada, terminoen hipotesi berak eta 5.6(a) erabilita hartu <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>α</mi><mo>′</mo></msup><mo>≡</mo><mo>∃</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>1</mn></msub><mo>∧</mo><mi>…</mi><mo>∧</mo><msub><mi>φ</mi><mi>n</mi></msub><mo>∧</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "<strong>Konektiboak.</strong> <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mo>¬</mo><mi>β</mi></mrow></math> bada, indukzioak emandako <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>-rekin hartu <math display=\"inline\"><mrow><msup><mi>α</mi><mo>′</mo></msup><mo>=</mo><mo>¬</mo><msup><mi>β</mi><mo>′</mo></msup></mrow></math>. Era berean, <math display=\"inline\"><mrow><mi>β</mi><mo>∧</mo><mi>γ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>β</mi><mo>∨</mo><mi>γ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mi>γ</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>β</mi><mo>↔</mo><mi>γ</mi></mrow></math> kasuetan konektibo bera aplikatzen zaie <math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>,</mo><msup><mi>γ</mi><mo>′</mo></msup></mrow></math> formulei."
      },
      {
       "mota": "testua",
       "html": "<strong>Kuantifikatzaileak.</strong> <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mo>∀</mo><mi>x</mi><mi>β</mi></mrow></math> bada, indukzio-hipotesiko baliokidetasuna 5.1 eta 5.5 bidez orokortu, eta 5.7 erabilita hartu <math display=\"inline\"><mrow><msup><mi>α</mi><mo>′</mo></msup><mo>=</mo><mo>∀</mo><mi>x</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></math>. <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>β</mi></mrow></math> kasua modu berean lortzen da, kuantifikatzaile existentzialaren baliokidetasun eratorriak erabiliz."
      },
      {
       "mota": "testua",
       "html": "<strong>Deskribatutako terminoa.</strong> <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>ι</mi><mi>z</mi><mi>α</mi></mrow></math> bada, hartu <math display=\"inline\"><mi>x</mi></math> terminoan agertzen ez den aldagai gisa eta <math display=\"inline\"><mi>w</mi></math> freskoa. Indukzioz badago deskribatzailerik gabeko <math display=\"inline\"><msup><mi>α</mi><mo>′</mo></msup></math> formula, <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub></mrow></math> pean <math display=\"inline\"><mrow><mi>α</mi><mo>↔</mo><msup><mi>α</mi><mo>′</mo></msup></mrow></math> betetzen duena. 5.8ren karakterizazioan baliokide hori eta <math display=\"inline\"><mrow><msub><mi>d</mi><mn>0</mn></msub><mo>=</mo><mi>c</mi></mrow></math> ordezkatuz, hartu <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>φ</mi><mo>≡</mo><mo>∀</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>α</mi><mo>′</mo></msup><mo>↔</mo><mi>z</mi><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mo>∃</mo><mi>w</mi><mo>∀</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>α</mi><mo>′</mo></msup><mo>↔</mo><mi>z</mi><mo>=</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>x</mi><mo>=</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>. Formula horrek ez du deskribatzailerik, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>ι</mi><mi>z</mi><mi>α</mi></mrow></math>-ren aldagai libre berak ditu, eta eskatutako baliokidetasuna betetzen du. Horrekin aldi bereko indukzioaren kasu guztiak itxi dira."
      }
     ]
    }
   ]
  },
  {
   "id": "a39",
   "maila": 2,
   "izenburua": "II.7. Konsistentzia eta kontraesana",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kontraesan sintaktikoa ez da bi formula aurkitzea besterik: kalkuluan edozein formula deduzigarri bihurtzen duen egoera da. Horrek azaltzen du zergatik baztertzen den teoria kontraesankor bat: <math display=\"inline\"><mi>β</mi></math> nahiz <math display=\"inline\"><mrow><mo>¬</mo><mi>β</mi></mrow></math> ondoriozta ditzake, edozein <math display=\"inline\"><mi>β</mi></math>-rentzat."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "7.1. Kontraesankortasuna eta konsistentzia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko formula multzoa <strong>kontraesankorra</strong> da baldin eta soilik baldin <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko formula oro <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-tik deduzigarria bada. <strong>Konsistentea</strong> da kontraesankorra ez bada; baliokidetasunez, badago gutxienez formula bat <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-tik deduzigarria ez dena. Formula bakar bat kontraesankorra edo konsistentea dela esateak haren singleton multzoaz hitz egitea da."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "7.2. Inklusioarekiko monotonia",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> konsistentea eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊆</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> badira, <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> konsistentea da.",
        "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> kontraesankorra eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊆</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math> badira, <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> kontraesankorra da."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lehen kasuan, <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> kontraesankorra balitz, formula oro deduzituko luke; premisen monotoniagatik <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-k ere bai, hipotesiaren kontra. Bigarrenean, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-tik formula oro deduzitzen denez, premisa gehiago dituen <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math>-tik ere deduzitzen da."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "7.3. Kontraesan bakar baten irizpidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> kontraesankorra da baldin eta soilik baldin badago <math display=\"inline\"><mi>α</mi></math> formula bat halakoa non <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> kontraesankorra bada, definizioz formula oro deduzitzen du, bereziki <math display=\"inline\"><mrow><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>α</mi></mrow></math>. Alderantziz, konjuntzio kontraesankorra deduzitzen bada, haren bi osagaiak ECz lortzen dira. Edozein <math display=\"inline\"><mi>β</mi></math> helburutarako, <math display=\"inline\"><mi>α</mi></math> eta <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> lerro erabilgarriek kontraesanezko helburua ixten dute; beraz <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>β</mi></mrow></math> edozein <math display=\"inline\"><mi>β</mi></math>-rentzat."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "7.4. Sententzia baten ezeztapena eta teoremagarritasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>α</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko sententzia bada:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> kontraesankorra da baldin eta soilik baldin <math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>.",
        "<math display=\"inline\"><mi>α</mi></math> kontraesankorra da baldin eta soilik baldin <math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo>¬</mo><mi>α</mi></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> kontraesankorra bada, bereziki <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi><mo>⊢</mo><mi>α</mi></mrow></math>; 5.3ren lehen zatia, premisa-multzo hutsarekin, aplikatuta <math display=\"inline\"><mrow><mo>⊢</mo><mi>α</mi></mrow></math>. Alderantziz, <math display=\"inline\"><mrow><mo>⊢</mo><mi>α</mi></mrow></math> bada, <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> premisatik edozein <math display=\"inline\"><mi>β</mi></math> frogatzeko erabili <math display=\"inline\"><mi>α</mi></math> teorema eta <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> premisa; kontraesanak helburua ixten du. Bigarren baliokidetasuna berdin frogatzen da."
      },
      {
       "mota": "testua",
       "html": "Sententzia izateko murrizketa beharrezkoa da kontraesankortasunetik teoremara doan noranzkoan, 5.3 sententziei mugatuta baitago. Alderantzizko noranzkoak ez du murrizketa hori behar: edozein formula teorema bada, haren ezeztapena kontraesankorra da, eta alderantziz."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> idazkerak <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> formalismoari <math display=\"inline\"><mi>c</mi></math> konstante indibidual berria gehitzea adieraziko du."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "7.5. Konstante berriaren ezabapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>c</mi></math> ez badago <math display=\"inline\"><mi>α</mi></math> formulan eta <math display=\"inline\"><mrow><munder><mo>⊢</mo><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></munder><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>c</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, orduan <math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Frogaren egoera",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Mosterinek emaitza hau frogatu gabe erabiltzen du hurrengo teoreman. Hemen ere ez zaio jatorrian ez dagoen frogapenik eransten: konstante berri baten bidezko instantzia formalismo hedatuan teorema bada, konstante hori ezabatuta formula jatorrizko formalismoan teorema dela da erabilitako edukia."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "7.6. Lekuko-konstante freskoa gehitzeak <br> konsistentzia gordetzen du",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>∃</mo><mi>x</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> konsistentea bada <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-n eta <math display=\"inline\"><mi>c</mi></math> ez bada <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>∃</mo><mi>x</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> multzoan agertzen, orduan <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>∃</mo><mi>x</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>c</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> konsistentea da <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> formalismoan."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kontraesanez, suposatu multzo hedatua kontraesankorra dela. 5.3 erabilita <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>c</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> premisa ezabatzen da eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>∃</mo><mi>x</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><munder><mo>⊢</mo><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></munder><mo>¬</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>c</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> lortzen da. Aukeratu <math display=\"inline\"><mi>u</mi></math> aldagai freskoa. Dedukzioaren bigarren teoremak premisa finituki asko konjuntzio batean biltzen ditu; <math display=\"inline\"><mi>c</mi></math> <math display=\"inline\"><mi>u</mi></math>-z ordezkatu eta 7.5 aplikatuta, konstante berria ezabatu daiteke. Ondorioz, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>∃</mo><mi>x</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo>¬</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Baina <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math> premisari EP aplikatuta, <math display=\"inline\"><mi>u</mi></math> kritiko freskoarekin, <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> lortzen da. Beraz multzo horrek <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>∧</mo><mo>¬</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> deduzitzen du eta 7.3ren arabera kontraesankorra litzateke, hasierako konsistentzia-hipotesiaren kontra."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "7.7. Deskribapen inpropioaren konstantea gehitzea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-n konsistentea bada eta <math display=\"inline\"><mi>c</mi></math> ez bada <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-koa, orduan <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> konsistentea da <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>-n."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Suposatu kontrakoa. 5.3z <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub></mrow></math> premisa ezabatuta, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊢</mo><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></munder><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. 5.2z, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-ko premisa finituki asko, <math display=\"inline\"><mrow><msub><mi>γ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>γ</mi><mi>n</mi></msub></mrow></math>, biltzen dira baldintza batean. Aukeratu horietan agertzen ez den <math display=\"inline\"><mi>u</mi></math>; <math display=\"inline\"><mi>c</mi></math> <math display=\"inline\"><mi>u</mi></math>-z ordezkatu eta 7.5 aplikatuta, <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-n <math display=\"inline\"><mrow><mo>⊢</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>γ</mi><mn>1</mn></msub><mo>∧</mo><mi>…</mi><mo>∧</mo><msub><mi>γ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. 5.5z <math display=\"inline\"><mi>u</mi></math> orokortuta eta premisak berreskuratuta, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mo>∀</mo><mi>u</mi><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Bestalde, <math display=\"inline\"><mrow><mo>⊢</mo><mo>¬</mo><mo>∀</mo><mi>u</mi><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Izan ere, haren ezeztapen bikoitza suposatuta DNz <math display=\"inline\"><mrow><mo>∀</mo><mi>u</mi><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; EGz <math display=\"inline\"><mrow><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>d</mi><mn>0</mn></msub><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, I erregelaren <math display=\"inline\"><mrow><msub><mi>d</mi><mn>0</mn></msub><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub></mrow></math> teoremaren kontra. Hortaz <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-k formula unibertsala eta haren ezeztapena deduzituko lituzke; 7.3z kontraesankorra litzateke. Beraz, hedapena konsistentea da."
      }
     ]
    }
   ]
  },
  {
   "id": "a40",
   "maila": 2,
   "izenburua": "II.8. Konsistentzia maximala eta exenplifikazioa",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "8.1. Maximalki konsistentea eta exenplifikatua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko sententzia multzoa <strong>maximalki konsistentea</strong> da baldin eta konsistentea bada eta, <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko edozein <math display=\"inline\"><mi>α</mi></math> sententziarentzat, <math display=\"inline\"><mi>α</mi></math> ez badago <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> kontraesankorra bada."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> <strong>exenplifikatua</strong> da baldin eta, <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math> sententzia <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dagoen bakoitzean, badago <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko <math display=\"inline\"><mi>t</mi></math> designatzaile bat halakoa non <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> ere <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dagoen."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.2. Multzo maximalki konsistente baten itxiera",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko sententzien multzo maximalki konsistentea bada, orduan edozein <math display=\"inline\"><mrow><mi>α</mi><mo>,</mo><mi>β</mi></mrow></math> sententziatarako:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math> bada, <math display=\"inline\"><mi>α</mi></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dago.",
        "<math display=\"inline\"><mrow><mo>⊢</mo><mi>α</mi></mrow></math> bada, <math display=\"inline\"><mi>α</mi></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dago.",
        "<math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dago baldin eta soilik baldin <math display=\"inline\"><mi>α</mi></math> ez badago <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n.",
        "<math display=\"inline\"><mrow><mi>α</mi><mo>∧</mo><mi>β</mi></mrow></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dago baldin eta soilik baldin <math display=\"inline\"><mi>α</mi></math> eta <math display=\"inline\"><mi>β</mi></math> biak <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n badaude.",
        "<math display=\"inline\"><mrow><mi>α</mi><mo>∨</mo><mi>β</mi></mrow></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dago baldin eta soilik baldin <math display=\"inline\"><mi>α</mi></math> edo <math display=\"inline\"><mi>β</mi></math> gutxienez bat <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n badago.",
        "<math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>β</mi></mrow></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dago baldin eta soilik baldin <math display=\"inline\"><mi>α</mi></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n egoteak <math display=\"inline\"><mi>β</mi></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n egotea badakar.",
        "<math display=\"inline\"><mrow><mi>α</mi><mo>↔</mo><mi>β</mi></mrow></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dago baldin eta soilik baldin <math display=\"inline\"><mi>α</mi></math> eta <math display=\"inline\"><mi>β</mi></math> aldi berean badaude edo aldi berean ez badaude <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(1).</strong> Demagun <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math> baina <math display=\"inline\"><mi>α</mi></math> ez dagoela <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n. Maximalitatez <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> kontraesankorra da; bereziki <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊢</mo><mo>¬</mo><mi>α</mi></mrow></math>. 5.3z <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mo>¬</mo><mi>α</mi></mrow></math>. Hipotesiarekin IC aplikatuta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>α</mi></mrow></math>, eta 7.3z <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> kontraesankorra litzateke. Beraz <math display=\"inline\"><mi>α</mi></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dago."
      },
      {
       "mota": "testua",
       "html": "<strong>(2).</strong> <math display=\"inline\"><mrow><mo>⊢</mo><mi>α</mi></mrow></math> bada, premisen monotoniagatik <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math>; (1)ez <math display=\"inline\"><mi>α</mi></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dago."
      },
      {
       "mota": "testua",
       "html": "<strong>(3).</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> eta <math display=\"inline\"><mi>α</mi></math> biak <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n baleude, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> kontraesankorra litzateke. Alderantziz, <math display=\"inline\"><mi>α</mi></math> ez badago <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n eta <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> ere ez, maximalitatez <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> kontraesankorra; 5.3z <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math> eta (1)ez <math display=\"inline\"><mi>α</mi></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n, kontraesana. Hortaz <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dago."
      },
      {
       "mota": "testua",
       "html": "<strong>(4).</strong> Konjuntzioa <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n badago, ECz bi osagaiak deduzitzen dira eta (1)ez biak <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n daude. Alderantziz, bi osagaiak <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n badaude, ICz konjuntzioa deduzitzen da eta (1)ez <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dago. Disjuntzioaren, baldintzaren eta bikondizionalaren kasuak modu berean frogatzen dira, erregela primitiboak, (1) eta (3) erabiliz."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.3. Kuantifikatzaileak multzo maximalki konsistente <br> eta exenplifikatu batean",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> maximalki konsistentea eta exenplifikatua bada, eta <math display=\"inline\"><mi>α</mi></math>-n gehienez <math display=\"inline\"><mi>x</mi></math> aldagaia badago libre, orduan:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dago baldin eta soilik baldin badago <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko <math display=\"inline\"><mi>t</mi></math> designatzaile bat halakoa non <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dagoen.",
        "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dago baldin eta soilik baldin <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko designatzaile ororentzat <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dagoen."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lehen baliokidetasunaren ezker-eskuin noranzkoa exenplifikazioaren definizioa da. Alderantziz, <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n badago, IPz <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math>, eta 8.2(1)ez existentziala <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dago."
      },
      {
       "mota": "testua",
       "html": "Bigarrenean, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n badago, EGz instantzia bakoitza deduzitzen da eta 8.2(1)ez <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dago. Alderantziz, demagun designatzaile guztien instantziak <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n daudela. Orduan ez dago <math display=\"inline\"><mi>t</mi></math> designatzailerik <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n duenik, 8.2(3) dela eta. Lehen baliokidetasuna <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> formulari aplikatuta, <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math> ez dago <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n; 8.2(3)z <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math> bai. NPz formula horretatik <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math> deduzitzen da, eta 8.2(1)ez <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dago."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.4. Hedapen maximalki konsistente eta exenplifikatua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko deskribatzailerik gabeko sententzien multzo konsistentea bada, badago <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math> deskribatzailerik gabeko sententzien multzo maximalki konsistente eta exenplifikatu bat <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mi mathvariant=\"script\">𝒞</mi></mrow></math> hizkuntzan, non <math display=\"inline\"><mi mathvariant=\"script\">𝒞</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-rekiko disjuntua den konstante indibidualen klase zenbakarri bat den eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊆</mo><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aukeratu <math display=\"inline\"><mi mathvariant=\"script\">𝒞</mi></math> konstante berrien multzo infinitu zenbakarria, <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-rekiko disjuntua, eta zenbakitu haren konstanteak. Zenbakitu ere <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mi mathvariant=\"script\">𝒞</mi></mrow></math> hizkuntzako deskribatzailerik gabeko sententzia guztiak: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>0</mn></msub><mo>,</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi></mrow></math>. Defini indukzio aritmetikoz: <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mn>0</mn></msub><mo>=</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>, eta etapa bakoitzean"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mi>j</mi></msub><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> kontraesankorra bada, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mrow><mi>j</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi mathvariant=\"normal\">Γ</mi><mi>j</mi></msub></mrow></math>;",
        "hedapena konsistentea bada eta <math display=\"inline\"><msub><mi>α</mi><mi>j</mi></msub></math> ez bada existentziala, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mrow><mi>j</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi mathvariant=\"normal\">Γ</mi><mi>j</mi></msub><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>;",
        "hedapena konsistentea bada eta <math display=\"inline\"><mrow><msub><mi>α</mi><mi>j</mi></msub><mo>=</mo><mo>∃</mo><mi>x</mi><msubsup><mi>α</mi><mi>j</mi><mo>′</mo></msubsup></mrow></math>, hartu <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mi>j</mi></msub><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>-n agertzen ez den indize txikieneko <math display=\"inline\"><mi>c</mi></math> konstante berria, eta jarri <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mrow><mi>j</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi mathvariant=\"normal\">Γ</mi><mi>j</mi></msub><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msubsup><mi>α</mi><mi>j</mi><mo>′</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>c</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "Azkenik, <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup><mo>≡</mo><msubsup><mo>∪</mo><mrow><mi>j</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi mathvariant=\"normal\">Γ</mi><mi>j</mi></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>(a) Hedapena.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>=</mo><msub><mi mathvariant=\"normal\">Γ</mi><mn>0</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mn>0</mn></msub><mo>⊆</mo><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></mrow></math>; beraz <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊆</mo><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>(b) Etapa bakoitzaren konsistentzia.</strong> Indukzioz. <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mn>0</mn></msub></math> konsistentea da hipotesiz. Lehen kasuan ez da ezer gehitzen; bigarrenean multzo konsistentea aukeratzen da; hirugarrenean <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mi>j</mi></msub><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>∃</mo><mi>x</mi><msubsup><mi>α</mi><mi>j</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> konsistentea da eta <math display=\"inline\"><mi>c</mi></math> freskoa, beraz 7.6k lekuko-instantzia gehitu ondoren ere konsistentzia gordetzen dela dio."
      },
      {
       "mota": "testua",
       "html": "<strong>(c) Batasunaren konsistentzia.</strong> <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math> kontraesankorra balitz, 7.3z <math display=\"inline\"><mrow><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>α</mi></mrow></math> baten dedukzioa legoke. Finitudez, dedukzioak <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math>-ko finituki premisa baino ez lituzke erabiliko; guztiak etapa bereko <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mi>k</mi></msub></math> batean egongo lirateke. Orduan <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mi>k</mi></msub></math> kontraesankorra litzateke, (b)-ren kontra."
      },
      {
       "mota": "testua",
       "html": "<strong>(d) Maximalitaterako osotasuna.</strong> <math display=\"inline\"><mi>α</mi></math> sententzia ez badago <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math>-n, zenbaketaren <math display=\"inline\"><msub><mi>α</mi><mi>j</mi></msub></math> bat da. <math display=\"inline\"><msub><mi>α</mi><mi>j</mi></msub></math> ez zen <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mrow><mi>j</mi><mo>+</mo><mn>1</mn></mrow></msub></math>-en sartu; eraikuntzaren lehen kasua gertatu zen, eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mi>j</mi></msub><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> kontraesankorra da. 7.2(b)z haren gaineko <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> ere kontraesankorra da."
      },
      {
       "mota": "testua",
       "html": "<strong>(e) Maximalitatea.</strong> (c)-ren konsistentzia eta (d)-ren propietatea 8.1eko definizioa dira."
      },
      {
       "mota": "testua",
       "html": "<strong>(f) Exenplifikazioa.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi><mo>=</mo><msub><mi>α</mi><mi>j</mi></msub></mrow></math> <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math>-n badago, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mi>j</mi></msub><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> konsistentea da, <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math> konsistentearen azpimultzoa baita. Beraz hirugarren eraikuntza-kasua aplikatu zen, eta <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>c</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> lekuko-instantzia <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mrow><mi>j</mi><mo>+</mo><mn>1</mn></mrow></msub></math>-en, eta hortaz <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math>-n, sartu zen. Eraikuntzak ez du deskribatzailerik gehitzen. Ondorioz, <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math> eskatutako hedapen maximalki konsistente, exenplifikatu eta deskribatzailerik gabea da."
      }
     ]
    }
   ]
  },
  {
   "id": "a41",
   "maila": 2,
   "izenburua": "III.1. Interpretazioak",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "Mosterin, Jesus - Logica de primer orden, 2. arg., Ariel, 1976",
     "xehetasuna": "III.1-III.6; 107.-126. or. inprimatuak eta 127. orrialdeko III.6ren jarraipena; euskarazko parafrasia",
     "hizkuntza": "es"
    },
    {
     "mota": "testua",
     "html": "Orain arte formalismoaren zeinuekin egin dugu lan: zeinu-ilarak, terminoak, formulak, lerroak, erdidedukzioak eta dedukzioak eraiki ditugu, eta formulen arteko deduzigarritasun erlazioa definitu dugu. Maila hori guztiz sintaktikoa da. Interpretazio bat ematean, ordea, zeinu-jokoak erreferentzia hartzen du eta formalismoa hizkuntza formal bihurtzen da."
    },
    {
     "mota": "testua",
     "html": "Interpretatzea ez da formulen itxura aldatzea. Zeinuek zeri egiten dioten erreferentzia zehaztea da: aldagaiek zein objektu-eremutan hartzen dituzten balioak, konstante bakoitzak zein objektu izendatzen duen, funtore bakoitzak zein funtzio adierazten duen eta erlatzaile bakoitzak zein erlazio adierazten duen. Deskribapen inpropioek ere objekturen bat denotatu behar dutenez, interpretazioak objektu lehenetsi bat hautatzen du haientzat."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "1.1. Interpretazioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> formalismoaren interpretazioa hiruko bat da: <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒰</mi><mo>,</mo><mi mathvariant=\"script\">ℋ</mi><mo>,</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, non:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>≠</mo><mi>∅</mi></mrow></math> interpretazioaren unibertsoa den.",
        "<math display=\"inline\"><mi mathvariant=\"script\">ℋ</mi></math> esleipenak konstante indibidual bakoitzari <math display=\"inline\"><mi mathvariant=\"script\">𝒰</mi></math>-ko objektu bat, <math display=\"inline\"><mi>n</mi></math>-adiko funtore bakoitzari <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒰</mi><mi>n</mi></msup><mo>→</mo><mi mathvariant=\"script\">𝒰</mi></mrow></math> funtzio bat, <math display=\"inline\"><mi>n</mi></math>-adiko erlatzaile bakoitzari <math display=\"inline\"><msup><mi mathvariant=\"script\">𝒰</mi><mi>n</mi></msup></math>-ren azpimultzo bat eta aldagai bakoitzari <math display=\"inline\"><mi mathvariant=\"script\">𝒰</mi></math>-ko objektu bat esleitzen dizkion.",
        "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi></mrow></math> deskribapen inpropioen erreferentzia komuna den."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hemendik aurrera <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℋ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℋ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> edo <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℋ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idatzi beharrean <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idatziko dugu. Idazkera berak interpretazio osoa eta haren esleipen-osagaiak adieraziko ditu, testuinguruak bi mailak bereizten dituelako."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "1.3. Aldagai baten balioa aldatzea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi></mrow></math> bada, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> interpretazioak <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math>-rekin bat egiten du osagai guztietan, <math display=\"inline\"><mi>x</mi></math> aldagaiari emandako balioan izan ezik:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>z</mi><mo>≠</mo><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>z</mi><mo>=</mo><mi>x</mi><mi>.</mi></mtd></mtr></mtable></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Aldaketak segidan idatz daitezke: <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>y</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> lehenik <math display=\"inline\"><mi>x</mi></math>-en balioa <math display=\"inline\"><mi>u</mi></math> bihurtu eta gero <math display=\"inline\"><mi>y</mi></math>-rena <math display=\"inline\"><mi>v</mi></math> bihurtzen duen interpretazioa da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esleipen-aldaketen bi propietate erabiliko ditugu etengabe:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mi>z</mi></mrow></math> bada, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>.",
      "Aldagai bera bi aldiz aldatzean azken balioa nagusitzen da: <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Objektu-hizkuntza eta metahizkuntza",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>t</mi><mo>,</mo><mi>α</mi></mrow></math> objektu-hizkuntzako adierazpenak dira. <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math>, <math display=\"inline\"><mi mathvariant=\"script\">𝒰</mi></math>, denotazioa, asetasuna eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> aldaketa metahizkuntzako tresnak dira. Bereizketa hori funtsezkoa da: formula batek ez du berez objektu bat denotatzen edo egia-balio bat hartzen; interpretazio baten barruan egiten du."
      }
     ]
    }
   ]
  },
  {
   "id": "a42",
   "maila": 2,
   "izenburua": "III.2. Denotazioa eta asetasuna",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Interpretazio bat finkatuta, termino bakoitzak unibertsoko objektu bat denotatzen du, eta formula bakoitza interpretazioak asetzen du edo ez du asetzen. <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math> idazkerak <math display=\"inline\"><mi>t</mi></math> terminoak <math display=\"inline\"><mi>u</mi></math> denotatzen duela adierazten du; <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi></mrow></math> idazkerak, berriz, <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math>-k <math display=\"inline\"><mi>α</mi></math> asetzen duela. Azken hori Mosterinen &quot;<math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> sat <math display=\"inline\"><mi>α</mi></math>&quot; idazkeraren bertsio modernoa da."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "2.2. Denotazioa eta asetasuna, aldi bereko indukzioz",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒰</mi><mo>,</mo><mi mathvariant=\"script\">ℋ</mi><mo>,</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ren interpretazioa. Terminoen denotazioa eta formulen asetasuna egitura sintaktikoaren gaineko aldi bereko indukzioz definitzen dira:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">ℋ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">ℋ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Bereziki, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>↔</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Konektiboetarako:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>¬</mo><mi>α</mi><mo>↔</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>∧</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>β</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>∨</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>β</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bada, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mo>↔</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Kuantifikatzaileetarako:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>∀</mo><mi>x</mi><mi>α</mi><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> u guztietarako </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>u</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi><mo>:</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>∃</mo><mi>x</mi><mi>α</mi><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> u baterako </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>u</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi><mo>:</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Deskriptoreetarako:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin u bakarra badago, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>u</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> non </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>a</mi><mn>0</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> halako u bakarra ez badago. </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr></mtable></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Azken klausulak bi egoera biltzen ditu deskribapen inpropio gisa: ez dago <math display=\"inline\"><mi>α</mi></math> asetzen duen objekturik, edo bat baino gehiago dago. Bi kasuetan terminoak <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math> denotatzen du. Horrela, termino oro denotatzailea da eta semantika totala izaten jarraitzen du."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "2.3. Egia interpretazio batean",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>α</mi></math> sententzia bada, <math display=\"inline\"><mi>α</mi></math> egiazkoa da <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> interpretazioan baldin eta soilik baldin <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi></mrow></math>. Sententzia batean ez dago aldagai askerik; beraz, egia-balioa ez dago aldagaiei hasieran emandako balioen mende."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "2.4. Aldagai libre ezarekiko aldaezintasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>x</mi></math> ez bada libre <math display=\"inline\"><mi>t</mi></math> terminoan, orduan, <math display=\"inline\"><mrow><mi>u</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi></mrow></math> guztietarako, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>x</mi></math> ez bada libre <math display=\"inline\"><mi>α</mi></math> formulan, orduan, <math display=\"inline\"><mrow><mi>u</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi></mrow></math> guztietarako, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi><mo>↔</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Terminoen denotaziorako eta formulen asetasunerako aldi bereko indukzio semiotikoa egiten da. Urrats bakoitzean <math display=\"inline\"><mi>x</mi></math> ez dela aztertutako adierazpenean libre suposatzen dugu."
      },
      {
       "mota": "testua",
       "html": "<strong>Oinarrizko terminoak.</strong> Terminoa <math display=\"inline\"><mi>z</mi></math> aldagaia bada, <math display=\"inline\"><mi>x</mi></math> libre ez egoteak <math display=\"inline\"><mrow><mi>z</mi><mo>≠</mo><mi>x</mi></mrow></math> dakar; beraz, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Konstante baten balioa ere ez du aldagai baten esleipenak aldatzen: <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Termino konposatua.</strong> <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> bada, <math display=\"inline\"><mi>x</mi></math> ez da libre <math display=\"inline\"><msub><mi>t</mi><mi>i</mi></msub></math> bakar batean ere. Indukzio-hipotesia argumentu guztiei aplikatuz,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>…</mi><mo>,</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> <math display=\"inline\"><mrow><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Formula atomikoak.</strong> Aurreko berdintasunak berehala ematen du <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren kasua, argumentuen <math display=\"inline\"><mi>n</mi></math>-kote bera erlazio berean dagoelako edo ez dagoelako. Berdintasun atomikoan ere bi terminoek denotazio berak gordetzen dituzte."
      },
      {
       "mota": "testua",
       "html": "<strong>Konektiboak.</strong> Adibidez,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mo>¬</mo><mi>α</mi></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>¬</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Konjuntzioan indukzio-hipotesia bi osagaiei aplikatzen zaie; disjuntzio, baldintza eta bibaldintzarako arrazoibidea bera da, haien egia-baldintzak osagaien asetasunaren bidez soilik definitzen baitira."
      },
      {
       "mota": "testua",
       "html": "<strong>Kuantifikatzaile orokorra.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi><mi>α</mi></mrow></math> aztertzean bi kasu daude. <math display=\"inline\"><mrow><mi>z</mi><mo>≠</mo><mi>x</mi></mrow></math> bada, esleipen-aldaketak trukatu daitezke:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mo>∀</mo><mi>z</mi><mi>α</mi></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> v guztietarako </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>v</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi><mo>:</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> v guztietarako </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>v</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi><mo>:</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> v guztietarako </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>v</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi><mo>:</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>∀</mo><mi>z</mi><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Hirugarren baliokidetasunean indukzio-hipotesia erabili da. <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi></mrow></math> bada, bigarren aldaketak lehenengoa ezabatzen du: <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>; hortaz, bi interpretazioek <math display=\"inline\"><mi>v</mi></math> guztien gaineko baldintza bera egiaztatzen dute. <math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mi>α</mi></mrow></math>-ren froga bera da, &quot;guztietarako&quot; ordez &quot;baterako&quot; erabilita."
      },
      {
       "mota": "testua",
       "html": "<strong>Deskribapena.</strong> <math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi><mi>α</mi></mrow></math>-rako berriro <math display=\"inline\"><mrow><mi>z</mi><mo>≠</mo><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi></mrow></math> bereizten dira. Lehen kasuan, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> interpretazio bera dira; indukzio-hipotesiak dio <math display=\"inline\"><mi>α</mi></math> asetzen duten <math display=\"inline\"><mi>v</mi></math> objektuen multzoa ez dela aldatzen. Bigarren kasuan, <math display=\"inline\"><mi>z</mi></math>-ri emandako <math display=\"inline\"><mi>v</mi></math> balioak <math display=\"inline\"><mi>x</mi></math>-en aurreko balioa ordezten du; berriro hautagai berak lortzen dira. Bi kasuetan azpikasu bi daude: hautagai bakarra badago, bi interpretazioek objektu bakar bera denotatzen dute; ez badago hautagai bakarra, biek <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math> denotatzen dute. Horrek indukzio simultaneoa osatzen du."
      }
     ]
    }
   ]
  },
  {
   "id": "a43",
   "maila": 2,
   "izenburua": "III.3. Interpretazioa eta ordezkapena",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sintaxian <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>e</mi></mrow></math> idazkerak <math display=\"inline\"><mi>e</mi></math> adierazpenean <math display=\"inline\"><mi>x</mi></math>-en agerraldi askeak <math display=\"inline\"><mi>t</mi></math> terminoaz ordeztea adierazten zuen, harrapaketa saihestuz. Hemen <math display=\"inline\"><mrow><mi>e</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> idazkera modernoa erabiliko dugu. Semantikoki, ordezkapen hori eta interpretazioan <math display=\"inline\"><mi>x</mi></math>-ri <math display=\"inline\"><mi>t</mi></math>-ren denotazioa esleitzea gauza bera dira."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "3.1. Ordezkapenaren lema semantikoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Edozein <math display=\"inline\"><msub><mi>t</mi><mn>0</mn></msub></math> terminotarako: <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Edozein <math display=\"inline\"><mi>α</mi></math> formulatarako: <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>⊨</mo><mi>α</mi><mo>↔</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Adierazpenaren luzeraren gaineko indukzio aritmetikoa egiten da. Froga honek sintaxiko ordezkapenaren hiru klausulak eta 2.4 teorema lotzen ditu."
      },
      {
       "mota": "testua",
       "html": "<strong>Luzera bateko adierazpenak.</strong> <math display=\"inline\"><mrow><msub><mi>t</mi><mn>0</mn></msub><mo>=</mo><mi>z</mi></mrow></math> bada eta <math display=\"inline\"><mrow><mi>z</mi><mo>≠</mo><mi>x</mi></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi></mrow></math> bada, ezkerreko aldea <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da eta eskuinekoa ere bai, <math display=\"inline\"><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>t</mi></mrow></math> delako. Konstante baterako bi aldeak <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dira."
      },
      {
       "mota": "testua",
       "html": "<strong>Funtoreak eta formula atomikoak.</strong> Indukzio-hipotesia azpitermino guztiei aplikatuz,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> <math display=\"inline\"><mrow><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Erlatzaile baten argumentu-koteak bi aldeetan balio bera duenez, asetasun-baldintza bera da; berdintasun atomikoan bi denotazioak konparatzen dira. Ezeztapenean eta gainerako konektiboetan indukzio- hipotesia osagai bakoitzari aplikatzen zaio, eta konektiboaren egia-klausula berreraikitzen da."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi><mi>α</mi></mrow></math> kuantifikatzailea.</strong> Hiru kasu daude."
      },
      {
       "mota": "testua",
       "html": "1. <math display=\"inline\"><mi>x</mi></math> ez bada libre <math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi><mi>α</mi></mrow></math>-n, sintaxiko ordezkapenak formula bere horretan uzten du. 2.4 teoremak ezkerreko esleipen-aldaketa semantikoki alferrikakoa dela dio. 2. <math display=\"inline\"><mi>x</mi></math> libre bada baina <math display=\"inline\"><mi>z</mi></math> ez bada <math display=\"inline\"><mi>t</mi></math>-n agertzen, <math display=\"inline\"><mi>x</mi></math>-en eta <math display=\"inline\"><mi>z</mi></math>-ren esleipenak trukatzen dira; gainera 2.4k <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ematen du. Hortaz,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>⊨</mo><mo>∀</mo><mi>z</mi><mi>α</mi></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> v guztietarako </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>v</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi><mo>:</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>⊨</mo><mi>α</mi></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> v guztietarako </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>v</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi><mo>:</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>∀</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Azken formula hori da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∀</mo><mi>z</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. 3. <math display=\"inline\"><mi>x</mi></math> libre bada eta <math display=\"inline\"><mi>z</mi></math> <math display=\"inline\"><mi>t</mi></math>-n agertzen bada, ordezkapenaren definizioak aldagai fresko bat, <math display=\"inline\"><mi>v</mi></math>, aukeratzen du, <math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi><mi>α</mi></mrow></math>-n eta <math display=\"inline\"><mi>t</mi></math>-n agertzen ez dena. Lehenik lotzailea alfa-berrizendatzen da eta gero ordezkapena egiten da: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∀</mo><mi>z</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo>∀</mo><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>v</mi><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>. <math display=\"inline\"><mi>v</mi></math> freskoa denez, 2.4, esleipen-aldaketen trukaketa eta indukzio- hipotesia jarraian aplikatuta bi aldeek unibertsoko balio berberak aztertzen dituzte. Horrek harrapaketa saihestearen baldintza semantikoki justifikatzen du."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mi>α</mi></mrow></math>-ren froga paraleloa da: urrats berdinak egiten dira, baina balio guztien ordez lekuko baten existentzia egiaztatzen da."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi><mi>α</mi></mrow></math> deskribapena.</strong> Hiru kasu sintaktiko berak erabiltzen dira. <math display=\"inline\"><mi>x</mi></math> libre ez bada, 2.4k denotazioa bere horretan uzten du. <math display=\"inline\"><mi>x</mi></math> libre bada eta <math display=\"inline\"><mi>z</mi></math> ez bada <math display=\"inline\"><mi>t</mi></math>-n agertzen, esleipenak trukatu eta indukzio-hipotesia aplikatzean bi aldeek <math display=\"inline\"><mi>α</mi></math> asetzen duen <math display=\"inline\"><mi>z</mi></math> bakar bera bilatzen dute. <math display=\"inline\"><mi>z</mi></math> <math display=\"inline\"><mi>t</mi></math>-n agertzen bada, <math display=\"inline\"><mi>v</mi></math> freskoaz alfa-berrizendatzen da: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ι</mi><mi>z</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>ι</mi><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>v</mi><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "Azken bi kasuetan bi azpikasu egiaztatu behar dira. Objektu bakarra badago, indukzio-hipotesiak hautagai bera identifikatzen du eta bi terminoek hura denotatzen dute. Objektu bakarrik ez badago, bi deskribapenak inpropioak dira eta biek <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math> denotatzen dute. Horrela amaitzen da terminoen eta formulen indukzioa."
      }
     ]
    }
   ]
  },
  {
   "id": "a44",
   "maila": 2,
   "izenburua": "III.4. Asetasuna, baliozkotasuna eta ondorioa",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "4.1. Formula multzo baten asetasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math>-k <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> formula multzoa asetzen du baldin eta soilik baldin <math display=\"inline\"><mrow><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> guztietarako <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Interpretazio orok multzo hutsa asetzen du. Izan ere, &quot;<math display=\"inline\"><mrow><mi>α</mi><mo>∈</mo><mi>∅</mi></mrow></math> bada, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi></mrow></math>&quot; baldintzak ez du aurrekaria betetzen duen <math display=\"inline\"><mi>α</mi></math>-rik; hortaz, hutsean egiazkoa da."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "4.2. Asetasuna, baliozkotasuna eta ondorio semantikoa",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mi>α</mi></math> formula <strong>asegarria</strong> da interpretazioren batek asetzen badu; <strong>aseezina</strong>, interpretaziorik batek ere asetzen ez badu.",
        "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> formula multzoa <strong>asegarria</strong> da interpretazio berak haren formula guztiak asetzen baditu; <strong>aseezina</strong>, halako interpretaziorik ez badago.",
        "<math display=\"inline\"><mi>α</mi></math> <strong>logikoki baliozkoa</strong> da formalismoaren interpretazio guztiek asetzen badute.",
        "<math display=\"inline\"><mi>α</mi></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-ren <strong>ondorio semantikoa</strong> da baldin eta <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asetzen duen interpretazio orok <math display=\"inline\"><mi>α</mi></math> ere asetzen badu."
       ]
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "4.3. Ondorioaren idazkera",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math> idazkerak formalismoa esplizitatzen du; testuingurua argia denean <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi></mrow></math> erabiliko dugu. <math display=\"inline\"><mrow><mi>α</mi><mo>⊨</mo><mi>β</mi></mrow></math> laburdura <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊨</mo><mi>β</mi></mrow></math> da, eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>α</mi><mi>n</mi></msub><mo>⊨</mo><mi>β</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>α</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊨</mo><mi>β</mi></mrow></math>-rena. Azkenik, <math display=\"inline\"><mrow><mo>⊨</mo><mi>α</mi></mrow></math> idazkerak <math display=\"inline\"><mrow><mi>∅</mi><mo>⊨</mo><mi>α</mi></mrow></math> esan nahi du."
      },
      {
       "mota": "testua",
       "html": "Ez nahasi <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi></mrow></math>: lehena kalkulu baten erregelen araberako deduzigarritasun sintaktikoa da; bigarrena interpretazio guztien gaineko ondorio semantikoa."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "4.4. Asegaiztasunaren eta ondorioaren bost baliokidetasun",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><mo>⊨</mo><mi>α</mi></mrow></math> baldin eta soilik baldin <math display=\"inline\"><mi>α</mi></math> logikoki baliozkoa den.",
        "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi></mrow></math> baldin eta soilik baldin <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> asezina den.",
        "<math display=\"inline\"><mrow><mo>⊨</mo><mi>α</mi></mrow></math> baldin eta soilik baldin <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> asezina den.",
        "<math display=\"inline\"><mi>α</mi></math> logikoki baliozkoa da baldin eta soilik baldin <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> asezina den.",
        "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asezina da baldin eta soilik baldin hizkuntza bereko formula baterako, <math display=\"inline\"><mi>β</mi></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>∧</mo><mo>¬</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Lehen baliokidetasuna.</strong> <math display=\"inline\"><mrow><mo>⊨</mo><mi>α</mi></mrow></math> definizioz <math display=\"inline\"><mrow><mi>∅</mi><mo>⊨</mo><mi>α</mi></mrow></math> da. Interpretazio orok <math display=\"inline\"><mi>∅</mi></math> asetzen duenez, baldintza hau interpretazio orok <math display=\"inline\"><mi>α</mi></math> asetzen duela esatearen baliokidea da; hori da baliozkotasun logikoa."
      },
      {
       "mota": "testua",
       "html": "<strong>Bigarren baliokidetasuna.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi></mrow></math>-k dio <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asetzen duen interpretazio orok <math display=\"inline\"><mi>α</mi></math> asetzen duela. Kontraposizioz, <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> asetzen duen interpretazio batek ezin du <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> ase. Beraz, ez dago aldi berean <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> eta <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> asetzen dituen interpretaziorik; hau da, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> asezina da. Urrats guztiak alderantziz ere balio dute."
      },
      {
       "mota": "testua",
       "html": "<strong>Hirugarren eta laugarren baliokidetasunak.</strong> Hirugarrena bigarrenetik dator <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>=</mo><mi>∅</mi></mrow></math> hartuta. Laugarrena lehenengoa eta hirugarrena elkartuz lortzen da."
      },
      {
       "mota": "testua",
       "html": "<strong>Bosgarren baliokidetasuna.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>∧</mo><mo>¬</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bada, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asetzen duen edozein <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math>-k <math display=\"inline\"><mi>β</mi></math> eta <math display=\"inline\"><mrow><mo>¬</mo><mi>β</mi></mrow></math> ase beharko lituzke aldi berean, ezinezkoa dena. Hortaz, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asezina da. Alderantziz, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asetzen duen interpretaziorik ez badago, &quot;interpretazio batek <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asetzen badu, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>∧</mo><mo>¬</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ere asetzen du&quot; baldintza hutsean egiazkoa da, edozein <math display=\"inline\"><mi>β</mi></math> aukeratuta."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "4.5. Hizkuntza zabalago batetik erreduzitzea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi mathvariant=\"script\">ℒ</mi><mn>1</mn></msub></math>-eko zeinu ez-logiko guztiak <math display=\"inline\"><msub><mi mathvariant=\"script\">ℒ</mi><mn>2</mn></msub></math>-koak ere badira, <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mn>1</mn></msub></math> <math display=\"inline\"><msub><mi mathvariant=\"script\">ℒ</mi><mn>1</mn></msub></math>-eko formula multzoa bada, <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mn>2</mn></msub></math> <math display=\"inline\"><msub><mi mathvariant=\"script\">ℒ</mi><mn>2</mn></msub></math>-koa bada, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi mathvariant=\"normal\">Γ</mi><mn>2</mn></msub></mrow></math> bada, eta <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mn>2</mn></msub></math> <math display=\"inline\"><mi mathvariant=\"script\">𝒰</mi></math> unibertsoaren gainean asegarria bada, orduan <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mn>1</mn></msub></math> ere <math display=\"inline\"><mi mathvariant=\"script\">𝒰</mi></math> beraren gainean asegarria da."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mn>2</mn></msub></math> asegarria denez, bada <math display=\"inline\"><msub><mi mathvariant=\"script\">ℒ</mi><mn>2</mn></msub></math>-ren <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> interpretazio bat <math display=\"inline\"><mi mathvariant=\"script\">𝒰</mi></math> gainean, <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mn>2</mn></msub></math>-ko formula guztiak asetzen dituena. Inklusioz, <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mn>1</mn></msub></math>-eko formula guztiak ere asetzen ditu."
      },
      {
       "mota": "testua",
       "html": "Eraiki <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒰</mi><mo>,</mo><msup><mi mathvariant=\"script\">ℋ</mi><mo>′</mo></msup><mo>,</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, non <math display=\"inline\"><msup><mi mathvariant=\"script\">ℋ</mi><mo>′</mo></msup></math> <math display=\"inline\"><mi mathvariant=\"script\">ℋ</mi></math>-ren murrizketa den <math display=\"inline\"><msub><mi mathvariant=\"script\">ℒ</mi><mn>1</mn></msub></math>-eko zeinuetara. <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> eta <math display=\"inline\"><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup></math> soilik <math display=\"inline\"><msub><mi mathvariant=\"script\">ℒ</mi><mn>1</mn></msub></math>-en ez dauden zeinuetan bereizten dira; beraz, <math display=\"inline\"><msub><mi mathvariant=\"script\">ℒ</mi><mn>1</mn></msub></math>-eko termino eta formulak berdin interpretatzen dituzte. Ondorioz, <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup><mo>⊨</mo><msub><mi mathvariant=\"normal\">Γ</mi><mn>1</mn></msub></mrow></math>. Gainera, <math display=\"inline\"><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup></math> <math display=\"inline\"><msub><mi mathvariant=\"script\">ℒ</mi><mn>1</mn></msub></math>-ren interpretazioa da <math display=\"inline\"><mi mathvariant=\"script\">𝒰</mi></math> unibertso berean, eta horrek tesia frogatzen du."
      }
     ]
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "III.5. Independentzia",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "5.1-5.2. Sententzia baten independentzia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>α</mi></math> sententzia <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> sententzia multzoarekiko independentea da baldin eta soilik baldin <math display=\"inline\"><mi>α</mi></math> ez den <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-ren ondorio semantikoa: <math display=\"inline\"><mrow><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Baliokideki, bada <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> interpretazio bat halakoa non <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> baina <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Interpretazio hori <math display=\"inline\"><mi>α</mi></math>-ren independentziaren <strong>kontraeredua</strong> edo <strong>independentzia-froga</strong> da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kontraeredua emateko ez da interpretazioaren xehetasun oro zerrendatu behar. Nahikoa da unibertsoa eta <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n edo <math display=\"inline\"><mi>α</mi></math>-n agertzen diren zeinu ez-logikoen interpretazioa adieraztea. Deskriptoreak agertzen badira, deskribapen inpropioetarako <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math> objektua ere zehaztu behar da."
    },
    {
     "mota": "testua",
     "html": "Eguneroko, merkataritzako, politikako edo auzitegietako argumentu batean, ondorio bat premisetatik ateratzen da. Argumentua zuzena edo baliozkoa da ondorioa premisen ondorio semantikoa bada; okerra edo baliogabea da ondorioa premisekiko independentea bada. Hizkuntza arrunteko argumentua kontrolatzeko, premisak eta ondorioa formalizatu behar dira. Baliozkotasuna dedukzio batez erakusten saiatzen da; baliogabetasuna, premisak egiazko eta ondorioa faltsu egiten dituen interpretazio batez."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "5.4-5.5. Sententzia multzo independentea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> sententzia multzoa independentea da baldin eta soilik baldin haren elementu bakoitza gainerakoekiko independentea den:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo>∀</mo><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi><mo>:</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Γ</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⊨</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Beraz, ez dago <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-ko sententziarik beste guztien ondorio semantikoa denik."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>α</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> finitua bada, independentzia frogatzeko <math display=\"inline\"><mi>n</mi></math> interpretazio eman behar dira: <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒥</mi><mi>j</mi></msub></math> bakoitzak <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> asetu eta <math display=\"inline\"><msub><mi>α</mi><mi>j</mi></msub></math> ez du asetu behar. Interpretazio bakoitzean unibertsoa, erabilitako zeinu ez-logikoak eta, beharrezkoa bada, deskribapen inpropioen <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math> balioa ematea aski da."
    }
   ]
  },
  {
   "id": "a46",
   "maila": 2,
   "izenburua": "III.6. Independentzia frogatzeko ariketak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Dedukzioak egiten ikasteko definizioa ezagutzea nahikoa ez den bezala, independentzia frogatzeko kontraereduak eraikitzen trebatu behar da. Argumentu bat zuzena dela susmatzen badugu, ondorioaren dedukzioa bilatzen dugu; okerra dela susmatzen badugu, premisak asetzen dituen baina ondorioa asetzen ez duen interpretazioa bilatzen dugu. Ondoko ebazpenak ez dira bakarrak: independentzia dagoenean, oro har, kontraeredu desberdin asko dago."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "1. ariketa"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bitez <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>¬</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Frogatu <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> independentea dela <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> multzoarekiko."
      },
      {
       "mota": "testua",
       "html": "Ariketak argumentu honen akatsa formalizatzen du: &quot;Problema hau ebazteko gai den oro matematikaria da; Antoniok ezin du problema ebatzi; beraz, Antonio ez da matematikaria&quot;. Aurrekari bat ez betetzeak ez du ondorioaren ezeztapena ematen."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>S</mi></math> hutsa denez, <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> baldintza egiazkoa da unibertsoko objektu bakarrarentzat, eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><msub><mi>α</mi><mn>1</mn></msub></mrow></math>. Halaber, <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; beraz, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>¬</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><msub><mi>α</mi><mn>2</mn></msub></mrow></math>. Baina <math display=\"inline\"><mrow><mn>0</mn><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> denez, <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; hau da, <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><msub><mi>α</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Interpretazio bakar horrek bi premisak eta ondorioaren porrota batera erakusten ditu."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "2. ariketa"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bitez <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Frogatu <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> independentea dela <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> multzoarekiko."
      },
      {
       "mota": "testua",
       "html": "Irakurketa arruntean: &quot;justu guztiek begirunea mereziko balute, Coriolanok bere patua mereziko luke; magnanimoek eta haiek bakarrik merezi dute begirunea; magnanimo oro justua da; beraz, Coriolanok bere patua merezi du&quot;."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Aukeratu <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> faltsua da, <math display=\"inline\"><mn>0</mn></math> <math display=\"inline\"><mi>I</mi></math>-n baitago baina ez <math display=\"inline\"><mi>R</mi></math>-n; horregatik <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> baldintza osoa egiazkoa da. <math display=\"inline\"><mi>R</mi></math> eta <math display=\"inline\"><mi>M</mi></math> biak hutsak direnez, <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> egiazkoa da; <math display=\"inline\"><mi>M</mi></math> hutsa denez, <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> ere bai. Aldiz, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, eta, ondorioz, <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Beraz, <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> ez da lehen hiruren ondorioa."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "3. ariketa"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bitez"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "Frogatu:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> independentea dela <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>-rekiko;",
        "<math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> independentea dela <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>-rekiko."
       ]
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> ez da beste biekiko independentea: iturriko 8. dedukzio-ariketan <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math> frogatu zen."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>-ren independentzia.</strong> Hartu <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. <math display=\"inline\"><mi>R</mi></math>-katearik eta bi objekturen ondorengo komunik ez dagoenez, <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> hutsean egiazkoak dira. Baina <math display=\"inline\"><mn>0</mn></math>-k ez du <math display=\"inline\"><mi>R</mi></math>-ondorengorik; hortaz, <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo>⊨</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>-ren independentzia.</strong> Hartu <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Objektu bakoitzak <math display=\"inline\"><mn>0</mn></math> ondorengoa du; beraz, <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> egiazkoa da. Erlazioak ez du bi urratseko kate batek eskatzen duen gezi berririk falta, eta <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> ere egiazkoa da. Hala ere, <math display=\"inline\"><mn>0</mn></math> eta <math display=\"inline\"><mn>1</mn></math> objektuek <math display=\"inline\"><mn>0</mn></math> ondorengo komuna dute, baina <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; horregatik <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> faltsua da."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "4. ariketa"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bitez:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>¬</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∀</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>5</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>≠</mo><mi>y</mi><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>6</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>7</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>≠</mo><mi>y</mi><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>8</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Frogatu <math display=\"inline\"><msub><mi>α</mi><mn>7</mn></msub></math> eta <math display=\"inline\"><msub><mi>α</mi><mn>8</mn></msub></math> biak independenteak direla <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo>,</mo><msub><mi>α</mi><mn>5</mn></msub><mo>,</mo><msub><mi>α</mi><mn>6</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> multzoarekiko."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Bi independentziak interpretazio berarekin ikus daitezke. Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mi>ω</mi></mrow></math>, zenbaki naturalen multzoa, eta ezarri:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mn>0</mn></math> ez da ondorengo funtzioaren balioa eta funtzioa injektiboa da; beraz, <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> egiazkoak dira. <math display=\"inline\"><mi>P</mi></math> hutsa denez, <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>-ren aurrekaria faltsua da eta <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> ere hutsean betetzen da. <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> pareak <math display=\"inline\"><msub><mi>α</mi><mn>5</mn></msub></math> asetzen du. Ez dago <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> parerik; hortaz, <math display=\"inline\"><msub><mi>α</mi><mn>6</mn></msub></math>-ren aurrekari guztiak faltsuak dira. Beraz, lehen sei formulak egiazkoak dira."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>α</mi><mn>7</mn></msub></math> faltsua da: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> hartuta ez dago <math display=\"inline\"><mi>y</mi></math>-rik <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> betetzen duenik. <math display=\"inline\"><msub><mi>α</mi><mn>8</mn></msub></math> ere faltsua da: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> hartuta ez da <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> betetzen eta <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ere ez. Interpretazio berak bi ondorioen independentzia frogatzen du."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "5. ariketa"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bitez:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>5</mn></msub><mo>=</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Frogatu <math display=\"inline\"><msub><mi>α</mi><mn>5</mn></msub></math> independentea dela <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> multzoarekiko."
      },
      {
       "mota": "testua",
       "html": "Formulek Anselmoren argumentu ontologikoaren bertsio bat kodetzen dute: <math display=\"inline\"><mi>d</mi></math> pentsa daitekeen handiena da; <math display=\"inline\"><mi>d</mi></math> pentsa daiteke; zerbait pentsa daiteke eta existitzen da; existitzen den objektu pentsagarri oro existitzen ez den edozein objektu pentsagarri baino handiagoa da; ondorio gisa, <math display=\"inline\"><mi>d</mi></math> existitzen dela aldarrikatzen da."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, deskribapen inpropioen balioa <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, eta:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> zein <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> hartuta, bada <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> non <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; hortaz, ez dago <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> betetzen duen objekturik. Deskribapena inpropioa da, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> denotatzen du, eta hori <math display=\"inline\"><mi>d</mi></math>-ren balioa denez, <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> egiazkoa da. <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ere egiazkoa da. <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>-k <math display=\"inline\"><mn>1</mn></math> lekukoa du. <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math>-n existitzen den objektu pentsagarria <math display=\"inline\"><mn>1</mn></math> da, eta existitzen ez den objektu pentsagarria <math display=\"inline\"><mn>0</mn></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k baldintza betetzen du. Baina <math display=\"inline\"><mi>d</mi></math>-k <math display=\"inline\"><mn>0</mn></math> denotatzen du eta <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; beraz, <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Kontraereduak erakusten du argumentua baliogabea dela, existentzia predikatu gisa tratatuta ere. Horrek ez du esan nahi premisetatik ezer ateratzen ez denik: iturriko 34. dedukzio-ariketak beste ondorio baldintzatu bat ematen du. Han ere ikusten da &quot;pentsa daitekeen handiena&quot; esapidea interpretazio honetan deskribapen inpropioa dela."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "6. ariketa"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bitez baliokidetasun-erlazioaren hiru axioma hauek:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>,"
      },
      {
       "mota": "testua",
       "html": "eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Frogatu <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> independentea dela."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Formula bakoitzarentzat beste biak gordetzen dituen kontraeredu bana behar dugu."
      },
      {
       "mota": "testua",
       "html": "<strong>Erreflexibotasuna kenduz.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. Erlazioa simetrikoa eta iragankorra da hutsean, baina <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faltsua; beraz, <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> independentea da."
      },
      {
       "mota": "testua",
       "html": "<strong>Simetria kenduz.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span>. Erlazioa erreflexiboa eta iragankorra da, baina <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> egia eta <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> gezurra; beraz, <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> independentea da."
      },
      {
       "mota": "testua",
       "html": "<strong>Iragankortasuna kenduz.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span>. Erlazioa erreflexiboa eta simetrikoa da. Hala ere, <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> egiazkoak dira, baina <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faltsua; ondorioz, <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> independentea da. Hiru interpretazioek <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-ko axioma bakoitza gainerakoetatik ezin dela ondorioztatu frogatzen dute."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "7. ariketa"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bitez:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Frogatu <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> independentea dela."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>-en kontraeredua.</strong> Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span>. Erlazioa antisimetikoa eta totala da: objektu desberdinen pare bakoitzean norabideetako bat agertzen da, eta ez dira bi norabideak batera agertzen. Baina <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> egiazkoak dira, <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ez; beraz, ez da iragankorra."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>-ren kontraeredua.</strong> Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span>. Erlazio unibertsala iragankorra eta totala da, baina <math display=\"inline\"><mrow><mn>0</mn><mo>≠</mo><mn>1</mn></mrow></math> izan arren bi norabideak betetzen ditu; hortaz, ez da antisimetikoa."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>-ren kontraeredua.</strong> Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. Erlazioa iragankorra eta antisimetikoa da hutsean, baina <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faltsua da; beraz, ez da totala."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "8. ariketa"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>P</mi></math> &quot;puntua&quot;, <math display=\"inline\"><mi>R</mi></math> &quot;zuzena&quot; eta <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> &quot;<math display=\"inline\"><mi>x</mi></math> puntua <math display=\"inline\"><mi>z</mi></math> zuzenean dago&quot; gisa irakurrita, izan bitez:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>≠</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo>,</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>≠</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∃</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>≠</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>≠</mo><mi>y</mi><mo>∧</mo><mi>y</mi><mo>≠</mo><mi>z</mi><mo>∧</mo><mi>x</mi><mo>≠</mo><mi>z</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> bada, frogatu <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> independentea dela. Formulek Hilberten geometria euklidearraren lehen lotura-axiomak adierazten dituzte: bi puntu desberdinek zuzen bat dute; zuzen hori bakarra da; zuzen bakoitzak bi puntu desberdin ditu; eta badira zuzen berean ez dauden hiru puntu."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>-en kontraeredua.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. Ez dago zuzenik; beraz, bakartasun-axioma eta zuzen bakoitzeko bi puntuen axioma hutsean betetzen dira. Hiru puntuak desberdinak eta ez-kolinealak dira, baina edozein bi puntu lotuko dituen zuzenik ez dago; <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> faltsua da."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>-ren kontraeredua.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, eta"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "Puntu-pare bakoitzak gutxienez zuzen bat du, zuzen bakoitzak gutxienez bi puntu ditu, eta ez dago hiru puntuak batera dituen zuzenik. Baina <math display=\"inline\"><mn>1</mn></math> eta <math display=\"inline\"><mn>2</mn></math> puntuak <math display=\"inline\"><mn>5</mn></math> zein <math display=\"inline\"><mn>6</mn></math> zuzenetan daude; beraz, lotura-zuzena ez da bakarra eta <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> faltsua da."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>-ren kontraeredua.</strong> Unibertso, puntu eta zuzen multzo berak hartu, baina:"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "Puntu-pare bakoitzak zuzen bakarra du: <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math> bikoteak <math display=\"inline\"><mn>4</mn></math>; <math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math> bikoteak <math display=\"inline\"><mn>5</mn></math>; <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>2</mn></mrow></math> bikoteak <math display=\"inline\"><mn>3</mn></math>. Hiru puntuak ez daude zuzen berean. Hala ere, <math display=\"inline\"><mn>6</mn></math> zuzenak ez du punturik; beraz, <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> faltsua da."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math>-ren kontraeredua.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. Ez dago bi puntu desberdinik edo zuzenik, eta lehen hiru axiomak hutsean egiazkoak dira. Baina ezin dira hiru puntu desberdin aukeratu; hortaz, <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> faltsua da."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "9. ariketa"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bitez:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>y</mi><mo>=</mo><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>x</mi><mo>≠</mo><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Frogatu <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> independentea dela."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>-en kontraeredua.</strong> Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>G</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. <math display=\"inline\"><mi>r</mi></math>-tik beste <math display=\"inline\"><mi>S</mi></math> objekturako <math display=\"inline\"><mi>A</mi></math> erlazioa dago, <math display=\"inline\"><mi>p</mi></math>-k <math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><mi>G</mi></math> den <math display=\"inline\"><mn>1</mn></math> objektuarekin erlazioa du, eta <math display=\"inline\"><mi>A</mi></math> asimetrikoa da. Hala ere, <math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><mi>G</mi></math> biak betetzen dituen objektu bakarra <math display=\"inline\"><mn>1</mn></math> da, ez <math display=\"inline\"><mi>r</mi></math>-k denotatzen duen <math display=\"inline\"><mn>0</mn></math>; beraz, <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> faltsua da."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>-ren kontraeredua.</strong> Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>G</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. <math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><mi>G</mi></math> objektu bakarra <math display=\"inline\"><mrow><mn>0</mn><mo>=</mo><mi>r</mi></mrow></math> da; <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>1</mn></mrow></math>-ek harekin <math display=\"inline\"><mi>A</mi></math> erlazioa du; eta erlazioa asimetrikoa da. Baina <math display=\"inline\"><mn>1</mn></math> <math display=\"inline\"><mi>S</mi></math> da eta <math display=\"inline\"><mrow><mn>1</mn><mo>≠</mo><mi>r</mi></mrow></math>, nahiz eta <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faltsua izan. Horregatik <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> independentea da."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>-ren kontraeredua.</strong> Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>G</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> egiazkoa da, eta <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> hutsean egiazkoa da, ez baitago <math display=\"inline\"><mi>r</mi></math>-tik desberdina den <math display=\"inline\"><mi>S</mi></math> objekturik. <math display=\"inline\"><mi>A</mi></math> hutsa asimetrikoa da. Baina ez dago <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> betetzen duen lekukorik; beraz, <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> faltsua da."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math>-ren kontraeredua.</strong> Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>G</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Lehen formula egiazkoa da; bigarrena hutsean betetzen da; eta hirugarrenak <math display=\"inline\"><mn>0</mn></math> lekukoa du. Aldiz, <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> egiazkoa izanik, <math display=\"inline\"><mrow><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faltsua da; hortaz, <math display=\"inline\"><mi>A</mi></math> ez da asimetrikoa eta <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> faltsua da."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "L07/L08 muga dokumentala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "9. ariketaren enuntziatua eta lehen bi kontraereduak 126. orrialde inprimatuan hasten dira. Hirugarren eta laugarren kontraereduak 127. orrialdearen goialdean amaitzen dira, baina oraindik III.6 atalekoak dira; horregatik L07n sartu dira. L07 hemen amaitzen da. Orrialde bereko &quot;III.7. Correccion semantica&quot; izenburua eta haren 7.0 paragrafoa ez dira sartu: L08ren hasiera zehatza dira."
      }
     ]
    }
   ]
  },
  {
   "id": "a47",
   "maila": 2,
   "izenburua": "III.7. Zuzenkotasun semantikoa",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "Mosterin, Jesus - Logica de primer orden, 2. arg., Ariel, 1976",
     "xehetasuna": "III.7-III.9 eta bibliografia; 127.-139. or. inprimatuak; euskarazko parafrasia",
     "hizkuntza": "es"
    },
    {
     "mota": "oharra",
     "titulua": "L07/L08 muga dokumentala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "127. orrialde inprimatuaren goialdean III.6ko 9. ariketaren independentzia- frogaren 3. eta 4. kontraereduak amaitzen dira. Haiek L07n daude, ariketaren jarraitasuna gordetzeko. L08 ez da orrialde fisikoaren lehen lerroan hasten, baizik eta orrialde bereko <strong>III.7. Zuzenkotasun semantikoa</strong> errotuluan."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "7.0. Dedukzioaren eta ondorioaren arteko bermea"
    },
    {
     "mota": "testua",
     "html": "Argumentazio edo froga bat <strong>zuzena</strong>, <strong>baliozkoa</strong> edo <strong>ondorio-emailea</strong> dela esaten dugu ondorioa premisen ondorio semantikoa denean. Orain arte bi tresna desberdin eraiki ditugu hori kontrolatzeko. Alde batetik, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math> erlazioa daukagu: kalkuluko erregelen bidez <math display=\"inline\"><mi>α</mi></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-tik deduzitzen dela dio, eta guztiz sintaktikoa da. Bestetik, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math> erlazioak dio <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asetzen duen interpretazio orok <math display=\"inline\"><mi>α</mi></math> ere asetzen duela; hori nozio semantikoa da."
    },
    {
     "mota": "testua",
     "html": "Bi erlazioek ez dute definizioz bat egiten. Kalkulu batek premisetatik haien ondorioa ez den sententzia bat ateratzen utziko balu, kalkulu horrek ez luke frogak edo argumentazioak kontrolatzeko balio. Horregatik behar da <strong>zuzenkotasun semantikoa</strong>: deduzigarritasunak ondorio semantikoa bermatu behar du."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "7.1. Kalkulu semantikoki zuzena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkulu deduktibo bat <strong>semantikoki zuzena</strong> da baldin eta soilik baldin, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> sententzien edozein multzo eta <math display=\"inline\"><mi>α</mi></math> edozein sententzia izanik,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Formalismoa adierazi behar denean: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi><mo>⇒</mo><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "7.2. Kalkuluaren zuzenkotasun semantikoaren teorema",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko sententzien edozein multzo eta <math display=\"inline\"><mi>α</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko edozein sententzia badira,"
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
       "html": "Teorema osoa frogatzeko, kalkuluko inferentzia- eta eraikuntza-erregela guztiek ondorio semantikoa gordetzen dutela egiaztatu beharko litzateke. Erregela arruntetan egiaztapena zuzena da; arreta berezia eskatzen duen inferentzia bakarra EP da, aldagai kritiko berri bat sartzen duelako. Hurrengo 7.3 teoremak haren urrats semantiko erabakigarria justifikatzen du."
      },
      {
       "mota": "testua",
       "html": "Iturriak ez du 7.2ren indukziozko froga osoa garatzen. Espresuki R. Montague eta D. Kalishen 1957ko <strong>Remarks on Descriptions and Natural Deduction</strong> artikulura igortzen du. Beraz, hemen ere ez dugu falta den froga xehea asmatu edo jatorrizkoak baino osatuagotzat aurkezten: emaitza, frogaren beharrezko kontrola eta EPren lema ematen dira, iturriaren muga epistemikoa gordez."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "7.3. Aldagai kritikoaren lema semantikoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>u</mi></math> ez bada <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, <math display=\"inline\"><mi>α</mi></math> edo <math display=\"inline\"><mi>β</mi></math>-n agertzen, eta <math display=\"inline\"><mrow><mi>u</mi><mo>≠</mo><mi>x</mi></mrow></math> bada, honako bi hipotesietatik"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊨</mo><mi>β</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "eta"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "ondorioztatzen da <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>β</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Har dezagun <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asetzen duen <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> interpretazio arbitrario bat. Bigarren hipotesiagatik, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>. Kuantifikatzaile orokorraren definizioz, unibertsoko edozein <math display=\"inline\"><mi>d</mi></math> objekturentzat <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi></mrow></math>. Bereziki, <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aukeratuta,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>⊨</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Ordezkapenaren lema semantikoak - III.3.1ek - hori honela berridazten du:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math>-k <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> ere asetzen duenez, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Lehen hipotesia aplikatuta, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>β</mi></mrow></math>. <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-ren edozein eredu izan denez, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>β</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Jatorrizko frogak urrats bera interpretazioaren aldagai-balioak txandakatuz idazten du, III.2.4, III.1.4 eta III.3.1 erabiliz. <math display=\"inline\"><mi>u</mi></math>-ren freskotasunak bermatzen du <math display=\"inline\"><mi>u</mi></math>-ren balioa aldatzeak ez duela <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, <math display=\"inline\"><mi>α</mi></math> edo <math display=\"inline\"><mi>β</mi></math>- ren asetasuna nahi gabe aldatzen. Baldintza hori da EPren aldagai kritikoaren murriztapen sintaktikoaren ordain semantikoa."
      }
     ]
    }
   ]
  },
  {
   "id": "a48",
   "maila": 2,
   "izenburua": "III.8. Konsistentzia eta asegarritasuna",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "8.0. Bi nozio eta programa bat"
    },
    {
     "mota": "testua",
     "html": "<strong>Konsistentzia</strong> nozio sintaktikoa da: kalkuluaren deduzigarritasun-erregelen arabera definitzen da. <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> konsistentea da formula guztiak handik deduzigarriak ez badira; baliokidetzaz, ez dago <math display=\"inline\"><mi>α</mi></math> formularik halakoa non <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>α</mi></mrow></math>. <strong>Asegarritasuna</strong>, aldiz, semantikoa da: <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asegarria da gutxienez interpretazio batek haren sententzia guztiak asetzen baditu."
    },
    {
     "mota": "testua",
     "html": "Atalaren norabide erraza da multzo asegarria konsistentea dela. Norabide sakonak, berriz, multzo konsistente bakoitzari eredu bat eraikitzen dio. Lehenik deskribatzailerik gabeko multzo maximalki konsistente eta exenplifikatu batetik eredu kanonikoa eraikiko dugu; gero emaitza edozein multzo konsistentetara zabalduko dugu, deskribatzaileak dituzten multzoak ere barne. Hortik etorriko dira konsistentzia/asegarritasun baliokidetza, trinkotasuna eta Skolemen zenbakarritasun-teorema."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.1. Eredu kanoniko zenbakarria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko deskribatzailerik gabeko sententzien multzo maximalki konsistente eta exenplifikatua bada, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asegarria da unibertso zenbakarria duen <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ren interpretazio batean."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1. Terminoen arteko baliokidetasuna.</strong> Izan bedi <math display=\"inline\"><msub><mi>T</mi><mi mathvariant=\"script\">ℒ</mi></msub></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko deskribatzailerik gabeko terminoen multzoa. Definitu <math display=\"inline\"><mo>≈</mo></math> erlazioa:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>t</mi><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Erlazioa erreflexiboa da, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>t</mi></mrow></math> berdintasun logikoa delako eta multzo maximalki konsistenteak bere teorema guztiak barne hartzen dituelako. Simetrikoa da: <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n badago, SIz <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub></mrow></math> deduzitzen da eta itxitura deduktiboagatik hori ere <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dago. Iragankorra da era berean: <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n badaude, TIz <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></math> deduzitzen da. Beraz, <math display=\"inline\"><mo>≈</mo></math> baliokidetasun-erlazioa da. <math display=\"inline\"><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover></math>-k <math display=\"inline\"><mi>t</mi></math> duen baliokidetasun-klasea adieraziko du."
      },
      {
       "mota": "testua",
       "html": "<strong>2. Interpretazio kanonikoa.</strong> Definitu <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> interpretazioaren unibertsoa terminoen zatidura gisa:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mfrac><msub><mi>T</mi><mi mathvariant=\"script\">ℒ</mi></msub><mo>≈</mo></mfrac></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>P</mi></math> <math display=\"inline\"><mi>n</mi></math>-adiko erlatzailea bada, jarri"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><msub><mi>t</mi><mn>1</mn></msub><mo accent=\"true\">¯</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>t</mi><mi>n</mi></msub><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>:</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>f</mi></math> <math display=\"inline\"><mi>n</mi></math>-adiko funtorea bada, definitu"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><msub><mi>t</mi><mn>1</mn></msub><mo accent=\"true\">¯</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>t</mi><mi>n</mi></msub><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mo accent=\"true\">¯</mo></mover></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "Aldagai eta konstante bakoitzari bere termino-klasea ematen zaio: <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>a</mi><mo accent=\"true\">¯</mo></mover></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Definizio horiek ordezkariaren hautaketarekiko independenteak dira. Izan ere, <math display=\"inline\"><mrow><msub><mi>t</mi><mi>i</mi></msub><mo>≈</mo><msubsup><mi>t</mi><mi>i</mi><mo>′</mo></msubsup></mrow></math> bada <math display=\"inline\"><mi>i</mi></math> guztientzat, <math display=\"inline\"><mrow><msub><mi>t</mi><mi>i</mi></msub><mo>=</mo><msubsup><mi>t</mi><mi>i</mi><mo>′</mo></msubsup></mrow></math> berdintasunak <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n daude. II.8.2(1)eko berdintasun-itxiturak dio <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dagoela baldin eta soilik baldin <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>t</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>t</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n dagoen; funtoreentzat ere <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>t</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>t</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> lortzen da. Hortaz, klaseei egindako esleipena ondo definituta dago."
      },
      {
       "mota": "testua",
       "html": "<strong>3. Terminoen balioa.</strong> Deskribatzailerik gabeko termino ororentzat,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Terminoaren luzeraren gaineko indukzioz frogatzen da. Aldagai eta konstanteen kasuak definizioak dira. <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> bada, indukzio-hipotesiz <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><msub><mi>t</mi><mi>i</mi></msub><mo accent=\"true\">¯</mo></mover></mrow></math> eta, funtorearen definizioz,"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><msub><mi>t</mi><mn>1</mn></msub><mo accent=\"true\">¯</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>t</mi><mi>n</mi></msub><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mo accent=\"true\">¯</mo></mover></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "<strong>4. Egiaren lema.</strong> Deskribatzailerik gabeko <math display=\"inline\"><mi>α</mi></math> sententzia ororentzat,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Froga <math display=\"inline\"><mi>α</mi></math>-ko zeinu logikoen kopuruaren gaineko indukzioa da. Atomo erlazionalean, terminoen emaitza eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren definizioa kateatuz,"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "Berdintasun-atomoan,"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>⇔</mo><mover><msub><mi>t</mi><mn>1</mn></msub><mo accent=\"true\">¯</mo></mover><mo>=</mo><mover><msub><mi>t</mi><mn>2</mn></msub><mo accent=\"true\">¯</mo></mover><mo>⇔</mo><msub><mi>t</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>t</mi><mn>2</mn></msub><mo>⇔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "Ezeztapenean, indukzio-hipotesiak eta maximalitatearen II.8.2(3) propietateak honako katea ematen dute:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>¬</mo><mi>α</mi><mo>⇔</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇔</mo><mi>α</mi><mo>¬</mo><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi><mo>⇔</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Konjuntzioan,"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mo>∧</mo><mi>β</mi><mo>⇔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>β</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇔</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>∧</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math></span>,"
      },
      {
       "mota": "testua",
       "html": "II.8.2(4) erabilita. Disjuntzioa II.8.2(5)ez tratatzen da; inplikazioa eta bikondizionala modu berean, dagozkien itxitura-propietateekin."
      },
      {
       "mota": "testua",
       "html": "Kuantifikatzaile orokorrarentzat, <math display=\"inline\"><mi mathvariant=\"script\">𝒰</mi></math>-ko objektu oro termino baten klasea denez,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "baldin eta soilik baldin, <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko designatzaile bakoitzerako, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>⊨</mo><mi>α</mi></mrow></math>. Ordezkapen-lemak hori <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> bihurtzen du; indukzio-hipotesiz, <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>. II.8.3(2)ren arabera, instantzia guztiak <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-n egotea <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> izatearen baliokidea da."
      },
      {
       "mota": "testua",
       "html": "Existentzialarentzat, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math> baldin eta soilik baldin badago <math display=\"inline\"><mrow><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi></mrow></math> lekuko bat halakoa non <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>⊨</mo><mi>α</mi></mrow></math>. Ordezkapen-lemak eta indukzio-hipotesiak <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> ematen dute; II.8.3(1)eko exenplifikazio-propietateak dio hori <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> izatearen baliokidea dela. Horrela amaitzen da egiaren lemaren indukzioa."
      },
      {
       "mota": "testua",
       "html": "<strong>5. Asegarritasuna eta zenbakarritasuna.</strong> <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-ko elementuak deskribatzailerik gabeko sententziak dira; egiaren lemaren arabera, <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math>-k denak asetzen ditu. Beraz, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>. <math display=\"inline\"><msub><mi>T</mi><mi mathvariant=\"script\">ℒ</mi></msub></math> terminoen multzoa zenbakarria denez, haren zatidura <math display=\"inline\"><mfrac><msub><mi>T</mi><mi mathvariant=\"script\">ℒ</mi></msub><mo>≈</mo></mfrac></math> ere gehienez zenbakarria da. Hortaz, eraikitako eredua zenbakarria da, eta teorema frogatuta dago."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.2. Deskribatzailerik gabeko multzo <br> konsistenteen asegarritasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko deskribatzailerik gabeko sententzien multzo konsistente oro asegarria da <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ren unibertso zenbakarriko interpretazio batean."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> halako multzo konsistente bat. II.8.4ren arabera, badago konstante berri zenbakarrien <math display=\"inline\"><mi mathvariant=\"script\">𝒞</mi></math> klase bat eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mi mathvariant=\"script\">𝒞</mi></mrow></math> hizkuntzako <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math> multzo maximalki konsistente, exenplifikatu eta deskribatzailerik gabea, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊆</mo><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></mrow></math> duena."
      },
      {
       "mota": "testua",
       "html": "8.1 teoremak <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math> asetzen duen unibertso zenbakarriko interpretazio bat ematen du. Interpretazioa jatorrizko <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> hizkuntzara mugatuta, unibertsoa ez da aldatzen eta <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-ko formula guztiak asetzen jarraitzen du, III.4.5eko hizkuntza-murrizketaren propietateagatik. Beraz, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asegarria da unibertso zenbakarri batean."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.3. Multzo konsistente ororen asegarritasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko sententzien multzo konsistente oro - deskribatzaileak izan ala ez - asegarria da <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ren unibertso zenbakarriko interpretazio batean."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko sententzien multzo konsistentea. Aukeratu <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-koa ez den <math display=\"inline\"><mi>c</mi></math> konstante indibidual berria, eta jarri"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>δ</mi><mo>≡</mo><mi>c</mi><mo>=</mo><mi>ι</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "II.7.7ren arabera, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>δ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> konsistentea da <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> hizkuntzan. Orain deskribatzaileak ezabatzeko itzulpenen multzoa definituko dugu:"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msup><mi>α</mi><mo>′</mo></msup><mo>:</mo><mo>∃</mo><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi><mo>,</mo><mi>δ</mi><munder><mo>⊢</mo><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><msup><mi>α</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span>,"
      },
      {
       "mota": "testua",
       "html": "non <math display=\"inline\"><msup><mi>α</mi><mo>′</mo></msup></math> deskribatzailerik gabeko formula den eta <math display=\"inline\"><mi>α</mi></math>-ren aldagai libre berak dituen. <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-ko formulak sententziak direnez, <math display=\"inline\"><mi>A</mi></math>-koak ere sententziak dira. II.6.1(a) emaitzak bermatzen du <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-ko <math display=\"inline\"><mi>α</mi></math> bakoitzarentzat gutxienez halako <math display=\"inline\"><msup><mi>α</mi><mo>′</mo></msup></math> bat badagoela."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mi>A</mi></math> konsistentea da.</strong> <math display=\"inline\"><mrow><msup><mi>α</mi><mo>′</mo></msup><mo>∈</mo><mi>A</mi></mrow></math> bakoitzarentzat badago <math display=\"inline\"><mrow><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> halakoa non <math display=\"inline\"><mrow><mi>δ</mi><mo>⊢</mo><mi>α</mi><mo>↔</mo><msup><mi>α</mi><mo>′</mo></msup></mrow></math>. EBz <math display=\"inline\"><mrow><mi>δ</mi><mo>⊢</mo><mi>α</mi><mo>→</mo><msup><mi>α</mi><mo>′</mo></msup></mrow></math>; hortaz, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>δ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊢</mo><msup><mi>α</mi><mo>′</mo></msup></mrow></math>, <math display=\"inline\"><mi>α</mi></math> premisa gisa erabil daitekeelako. Beraz, <math display=\"inline\"><mi>A</mi></math>-ko formula guztiak <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>δ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>-tik deduzigarriak dira. <math display=\"inline\"><mi>A</mi></math> kontraesankorra balitz, deduzigarritasunaren iragankortasunak <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>δ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> ere kontraesankor bihurtuko luke, aurreko konsistentziaren kontra. Ondorioz, <math display=\"inline\"><mi>A</mi></math> konsistentea da."
      },
      {
       "mota": "testua",
       "html": "8.2 teorema aplikatuta, badago <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> hizkuntzaren unibertso zenbakarriko <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> interpretazio bat halakoa non <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>A</mi></mrow></math>. Idatz dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒰</mi><mo>,</mo><mi mathvariant=\"script\">ℋ</mi><mo>,</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Eraiki <math display=\"inline\"><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup></math> interpretazioa <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math>-ren berdina izanik sinbolo guztien interpretazioan, baina deskribapen inpropioen balio lehenetsia <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math> izan beharrean <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hartuta:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒰</mi><mo>,</mo><mi mathvariant=\"script\">ℋ</mi><mo>,</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Frogatu behar da <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup><mo>⊨</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>. Har dezagun <math display=\"inline\"><mrow><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>. II.6.1(a)z aukeratu deskribatzailerik gabeko <math display=\"inline\"><msup><mi>α</mi><mo>′</mo></msup></math> bat, aldagai libre berak dituena, halakoa non"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>δ</mi><munder><mo>⊢</mo><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><msup><mi>α</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "7.2ren zuzenkotasun semantikoagatik, <math display=\"inline\"><mrow><mi>δ</mi><mo>⊨</mo><mi>α</mi><mo>↔</mo><msup><mi>α</mi><mo>′</mo></msup></mrow></math>. <math display=\"inline\"><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup></math>-n <math display=\"inline\"><mrow><mi>ι</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> deskribapen inpropioaren balioa <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da; beraz, <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup><mo>⊨</mo><mi>δ</mi></mrow></math>, eta ondorioz <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup><mo>⊨</mo><mi>α</mi><mo>↔</mo><msup><mi>α</mi><mo>′</mo></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Bestalde, <math display=\"inline\"><mrow><msup><mi>α</mi><mo>′</mo></msup><mo>∈</mo><mi>A</mi></mrow></math> denez, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><msup><mi>α</mi><mo>′</mo></msup></mrow></math>. <math display=\"inline\"><msup><mi>α</mi><mo>′</mo></msup></math>-k ez du deskribatzailerik eta <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> eta <math display=\"inline\"><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup></math> deskribapen inpropioen balioan baino ez dira bereizten; hortaz, <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup><mo>⊨</mo><msup><mi>α</mi><mo>′</mo></msup></mrow></math> ere bai. Aurreko bikondizionalarekin, <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup><mo>⊨</mo><mi>α</mi></mrow></math>. <math display=\"inline\"><mi>α</mi></math> arbitrarioa zenez, <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup><mo>⊨</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Azkenik, kendu <math display=\"inline\"><mi>c</mi></math> konstante berria interpretazioaren sinaduratik. Lortutako <math display=\"inline\"><msup><mi mathvariant=\"script\">𝒥</mi><mo>″</mo></msup></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ren interpretazioak <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asetzen jarraitzen du, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-k ez baitu <math display=\"inline\"><mi>c</mi></math> erabiltzen; unibertsoa <math display=\"inline\"><mi mathvariant=\"script\">𝒰</mi></math> bera da eta zenbakarria. Horrek teorema frogatzen du."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.4. Asegarritasunak konsistentzia dakar",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko sententzien multzo asegarria konsistentea da <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-n."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asegarria. Badago <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> interpretazio bat, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>. <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> inkonsistentea balitz, II.7.3ren arabera formula bat legoke, <math display=\"inline\"><mi>β</mi></math>, halakoa non"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>∧</mo><mo>¬</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "7.2ren zuzenkotasun semantikoak <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>β</mi><mo>∧</mo><mo>¬</mo><mi>β</mi></mrow></math> emango luke; hortaz, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>β</mi><mo>∧</mo><mo>¬</mo><mi>β</mi></mrow></math>. Horrek batera eskatzen du <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>β</mi></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>¬</mo><mi>β</mi></mrow></math>, hau da, <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math>-k <math display=\"inline\"><mi>β</mi></math> asetzea eta ez asetzea. Ezinezkoa denez, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> konsistentea da."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.5. Asegarritasunaren eta konsistentziaren baliokidetza",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko sententzien multzoa bada,"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> asegarria da </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"script\">ℒ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -n </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Γ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konsistentea da </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"script\">ℒ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -n</mtext></mrow></mrow></math></span>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "8.3 teoremak eskuin-ezker noranzkoa ematen du; 8.4 teoremak, berriz, ezker-eskuin noranzkoa. Baliokidetzak nozio sintaktikoa eta semantikoa lotzen ditu, baina lotura hori frogatutako teorema da, ez definiziozko identitatea."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.6. Asegarritasunaren finitudea edo trinkotasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko sententzien multzoa bada, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asegarria da baldin eta soilik baldin haren azpimultzo finitu oro asegarria den."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demagun lehenik <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asegarria dela. <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asetzen duen interpretazioak haren edozein <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊆</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> azpimultzo ere asetzen du; beraz, azpimultzo finitu guztiak asegarriak dira."
      },
      {
       "mota": "testua",
       "html": "Alderantziz, demagun <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-ren azpimultzo finitu oro asegarria dela. <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asegarria ez balitz, 8.5en arabera inkonsistentea litzateke. Orduan, II.7.3z, badago <math display=\"inline\"><mi>α</mi></math> formula bat halakoa non <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>α</mi></mrow></math>. Dedukzioaren finitudez - II.2.8 -, badago <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊆</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> azpimultzo finitu bat halakoa non <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊢</mo><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>α</mi></mrow></math>. <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> inkonsistentea litzateke eta, 8.5 berriz aplikatuta, ez asegarria. Horrek hipotesia kontraesaten du. Beraz, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asegarria da."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.7. Skolemen asegarritasun zenbakarriaren teorema",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko sententzien multzo asegarria bada, badago unibertso zenbakarria duen <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ren interpretazio bat <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asetzen duena."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asegarria denez, 8.4ren arabera konsistentea da. 8.3k multzo konsistente orori unibertso zenbakarriko eredu bat eraikitzen dio. Beraz, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-k badu eredu zenbakarria, nahiz eta hasieran ezagutzen genuen eredua zenbakaitza izan zitekeen."
      }
     ]
    }
   ]
  },
  {
   "id": "a49",
   "maila": 2,
   "izenburua": "III.9. Osotasun semantikoa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "9.0. Lehen mailako logikaren berezitasuna"
    },
    {
     "mota": "testua",
     "html": "Kalkulua semantikoki zuzena izateak esan nahi du ezin duela ondorio semantikoa ez den ezer deduzitu. Baina horrek bakarrik ez du ziurtatzen ondorio semantiko guztiak deduzitzeko gai denik. Bigarren mailako formalismoetan - banakoez gain propietate eta erlazioen gaineko aldagai lotuak dituztenetan - ez dago ondorio semantiko guztiak harrapatzen dituen kalkulu eraginkorrik. Mosterinek emaitza hori Gödelen 1931ko osotasun-ezaren teoremarekin lotzen du."
    },
    {
     "mota": "testua",
     "html": "Lehen mailako logikan egoera bestelakoa da. Gödelek 1930ean erakutsi zuen lehen mailako formalismoetarako ondorio semantiko guztiak deduzitzen dituen kalkulu bat eraiki daitekeela. Hemen aurkezten den froga ez doa Gödelen jatorrizko bidetik: Henkin-ek 1949an emandako eredu-eraikuntzan eta Hasenjaeger-ek 1953an findutako metodoan oinarritzen da. 8.5ean konsistentziaren eta asegarritasunaren arteko zubia ezarri ondoren, deduzigarritasunaren eta ondorioaren artekoa ezartzea geratzen da."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "9.1. Kalkulu semantikoki osoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkulu deduktibo bat <strong>semantikoki osoa</strong> da baldin eta soilik baldin, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> sententzien edozein multzo eta <math display=\"inline\"><mi>α</mi></math> edozein sententzia izanik,"
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
     "titulua": "9.2. Osotasun semantikoaren edo Gödelen teorema",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko sententzien edozein multzo eta <math display=\"inline\"><mi>α</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko edozein sententzia badira,"
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
       "html": "Demagun <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>. Horrek esan nahi du ez dagoela <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> asetu eta <math display=\"inline\"><mi>α</mi></math> asetzen ez duen <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ren interpretaziorik. Baliokidetzaz, ez dago <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> asetzen duen interpretaziorik. Beraz,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> ez da asegarria."
      },
      {
       "mota": "testua",
       "html": "8.3 teoremak dio multzo konsistente oro asegarria dela; kontraposizioz, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> inkonsistentea da. Multzo inkonsistente batetik formula oro deduzitzen denez,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊢</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "DNz,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊢</mo><mo>¬</mo><mo>¬</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "II.5.3ko kontraesanezko dedukzioaren emaitzak kanpoko <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> hipotesia kentzen du:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mo>¬</mo><mo>¬</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "DN berriz erabilita, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math>. Horrela, ondorio semantikoa zen <math display=\"inline\"><mi>α</mi></math> kalkuluan deduzigarria dela frogatu da."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "9.3. Deduzigarritasunaren eta ondorioaren baliokidetza",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko sententzien multzoa eta <math display=\"inline\"><mi>α</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko sententzia badira,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "7.2k deduzigarritasunetik ondorio semantikora eramaten du; 9.2k alderantzizko bidea egiten du. <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>=</mo><mi>∅</mi></mrow></math> hartuta, honako kasu berezia lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Hau da, sententzia bat logikoki baliozkoa da baldin eta soilik baldin teorema logikoa den."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "9.4. Ondorioaren finitudea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko sententzien multzoa eta <math display=\"inline\"><mi>α</mi></math> <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>-ko sententzia badira,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "baldin eta soilik baldin badago <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊆</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> azpimultzo finitu bat halakoa non <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "9.3ren arabera, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math> baliokideak dira. II.2.8ko dedukzioaren finitudeak dio azken hori gertatzen dela baldin eta soilik baldin badago <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊆</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> finitu bat, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊢</mo><mi>α</mi></mrow></math> duena. 9.3 berriz aplikatuta, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊨</mo><mi>α</mi></mrow></math>. Alderantzizko noranzkoa ondorio semantikoaren monotoniatik ere berehala dator."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "9.5. Henkin, Skolem, trinkotasuna eta eredu-teoria"
    },
    {
     "mota": "testua",
     "html": "8.3 emaitzari - multzo konsistente orok unibertso zenbakarriko eredua duela dioenari - <strong>Henkinen teorema</strong> deitu ohi zaio, Leon Henkin izan baitzen hemen erabilitakoaren antzeko froga eman zuen lehena. Eraikuntza horretatik korolario labur gisa ateratzen dira Gödelen osotasun semantikoa (9.2), Skolemen asegarritasun zenbakarria (8.7) eta asegarritasunaren finitudea edo <strong>compactness theorem</strong> delakoa (8.6)."
    },
    {
     "mota": "testua",
     "html": "Skolemen teoremak ondorio filosofiko nabarmena du: unibertso zenbakaitz bat karakterizatzeko pentsatutako lehen mailako teoria formal batek eredu zenbakarriak ere baditu, baldin ereduren bat badu. Horregatik, zenbakaitza den egitura baten izaera ezin da lehen mailako axiomen bidez kategorikoki finkatu. Emaitzak multzo-teoriaren metateorian ere aplikazio sakonak ditu."
    },
    {
     "mota": "testua",
     "html": "Trinkotasunaren teoremak, berriz, aritmetikaren eredu ez-estandarrak lortzeko aukera ematen du: zenbaki naturalen egiturarekin isomorfoak ez diren sistemek ere lehen mailako aritmetikaren axioma guztiak bete ditzakete. Skolemen eta trinkotasunaren teoremek eredu-teoriaren oinarria osatzen dute."
    },
    {
     "mota": "testua",
     "html": "Iturriak azpimarratzen du bi emaitzak kalkulu deduktiborik gabe ere froga daitezkeela eredu-teoriaren barruan. Trinkotasuna ultrabiderkadura egokien bidez lor daiteke, eta Skolemen teorema zuzenean trinkotasunetik. Garapen horietarako Bell eta Slomson, Chang eta Keisler, eta Schwabhäuser aipatzen ditu. Ohar horrekin amaitzen da III.9 eta liburuaren gorputz teorikoa."
    },
    {
     "mota": "oharra",
     "titulua": "Ariketen presentzia tarte honetan",
     "blokeak": [
      {
       "mota": "testua",
       "html": "III.7-III.9 atalek ez dute ariketa edo soluzio zenbakiturik. Tarteko eduki zenbakitu osoa 7.1-7.3, 8.1-8.7 eta 9.1-9.5 emaitzek eta haien iturrian emandako frogapenek osatzen dute."
      }
     ]
    }
   ]
  },
  {
   "id": "a50",
   "maila": 2,
   "izenburua": "Bibliografia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Liburuak aipatutako lanak, jatorrizko ordenan:"
    },
    {
     "mota": "testua",
     "html": "<strong>Bell, J. eta Slomson, A.</strong> <strong>Models and Ultraproducts</strong>. Amsterdam, 1971."
    },
    {
     "mota": "testua",
     "html": "<strong>Carnap, R.</strong> <strong>Meaning and Necessity, a Study in Semantics and Modal Logic</strong>. Chicago, 1947."
    },
    {
     "mota": "testua",
     "html": "<strong>Chang, C. eta Keisler, H. J.</strong> <strong>Model Theory</strong>. Amsterdam, 1973."
    },
    {
     "mota": "testua",
     "html": "<strong>Frege, G.</strong> <strong>Begriffsschrift, eine der arithmetischen nachgebildeten Formelsprache des reinen Denkens</strong>. Halle, 1879."
    },
    {
     "mota": "testua",
     "html": "<strong>Frege, G.</strong> “Ueber Sinn und Bedeutung”. <strong>Zeitschrift für Philosophie und philosophische Kritik</strong>, 100. lib., 1892."
    },
    {
     "mota": "testua",
     "html": "<strong>Gentzen, G.</strong> “Untersuchungen über das Logische Schliessen”. <strong>Mathematische Zeitschrift</strong>, 39. lib., 1934."
    },
    {
     "mota": "testua",
     "html": "<strong>Gödel, K.</strong> “Die Vollständigkeit der Axiome des logischen Funktionenkalküls”. <strong>Monatshefte für Mathematik und Physik</strong>, 37. lib., 1930."
    },
    {
     "mota": "testua",
     "html": "<strong>Gödel, K.</strong> “Ueber formal unentscheidbare Sätze der <strong>Principia Mathematica</strong> und verwandter Systeme”. <strong>Monatshefte für Mathematik und Physik</strong>, 38. lib., 1931."
    },
    {
     "mota": "testua",
     "html": "<strong>Hasenjaeger, G.</strong> “Eine Bemerkung zu Henkins Beweis für die Vollständigkeit des Prädikatenkalküls der ersten Stufe”. <strong>Journal of Symbolic Logic</strong>, 18. lib., 1953."
    },
    {
     "mota": "testua",
     "html": "<strong>Henkin, L.</strong> “The completeness of the first-order functional calculus”. <strong>Journal of Symbolic Logic</strong>, 14. lib., 1949."
    },
    {
     "mota": "testua",
     "html": "<strong>Hermes, H.</strong> <strong>Einführung in die mathematische Logik</strong>. Stuttgart, 1963."
    },
    {
     "mota": "testua",
     "html": "<strong>Hilbert, D. eta Ackermann, W.</strong> <strong>Grundzüge der theoretischen Logik</strong>. Berlin, 1928."
    },
    {
     "mota": "testua",
     "html": "<strong>Kalish, D. eta Montague, R.</strong> “Remarks on descriptions and natural deduction”. <strong>Archiv für mathematische Logik und Grundlagenforschung</strong>, 3. lib., 1957."
    },
    {
     "mota": "testua",
     "html": "<strong>Kalish, D. eta Montague, R.</strong> <strong>Logic. Techniques of Formal Reasoning</strong>. New York, 1964."
    },
    {
     "mota": "testua",
     "html": "<strong>Peano, G.</strong> <strong>Notation de logique mathématique</strong>. Turin, 1894."
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
     "izenburua": "Multzoak, erlazioak eta aplikazioak",
     "maila": "TRESNAK"
    },
    {
     "mota": "helburuak",
     "elementuak": [
      "Multzo-eragiketak eta haien propietateak menderatu.",
      "Baliokidetasun-erlazioak eta zatidura-multzoak ulertu.",
      "Aplikazio injektibo, surjektibo eta bijektiboak bereizi."
     ]
    },
    {
     "mota": "aurrebaldintzak",
     "elementuak": [
      "M01 — Logika sinbolikoa"
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
     "izenburua": "Zenbaki naturalak eta indukzioa",
     "maila": "TRESNAK"
    },
    {
     "mota": "helburuak",
     "elementuak": [
      "Indukzio bidezko frogapenak egin.",
      "Multzo finitu eta zenbakigarriak bereizi.",
      "Egitura aljebraikoen lehen nozioak eskuratu."
     ]
    },
    {
     "mota": "aurrebaldintzak",
     "elementuak": [
      "M02 — Multzoak, erlazioak eta aplikazioak"
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
