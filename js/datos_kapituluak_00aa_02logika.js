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
   "proiektua": "_historico/espazio-ontzia/def_log_ds_v8.typ",
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
   "proiektua": "_historico/espazio-ontzia/01_logica_conjuntos/logica_simbolica",
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
       "html": "Mosterínen jatorrizko testuak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0001.svg\" alt=\"Lambda\" style=\"width:1.014em;height:1.001em\" loading=\"lazy\"> erabiltzen du kuantifikatzaile orokorrerako eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0002.svg\" alt=\"V\" style=\"width:1.133em;height:1.001em\" loading=\"lazy\"> existentzialerako. Lote honetan gaur egungo <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0003.svg\" alt=\"forall\" style=\"width:0.982em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0004.svg\" alt=\"exists\" style=\"width:0.854em;height:1.001em\" loading=\"lazy\"> erabiliko ditugu, hurrenez hurren. Era berean, jatorrizko idazkera aurrizkidun trinkoa irakurgarriago egingo dugu parentesi eta komen bidez: adibidez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0005.svg\" alt=\"R(f(a),b)\" style=\"width:5.231em;height:1.001em\" loading=\"lazy\"> idatziko dugu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0006.svg\" alt=\"R f a b\" style=\"width:2.914em;height:1.001em\" loading=\"lazy\"> motako katearen ordez. Aldaketa horiek aurkezpenekoak dira; egitura logikoa bera gordetzen da."
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
     "html": "Zenbakien izenak —<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0007.svg\" alt=\"1\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0008.svg\" alt=\"2\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0009.svg\" alt=\"3\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\">, …—, hirien izenak, pertsonenak edo erakundeen siglak izendatzaileak dira. Aldiz, “ni” edo “hau” bezalako adierazpenek ere zerbait izenda dezakete, baina haien erreferentzia aldatu egiten da hiztuna, unea edo egoera aldatzean. Horrek lehen bereizketa bat uzten du agerian: adierazpen baten luzera ez da garrantzitsuena; erreferentzia nola finkatzen duen da kontua."
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
     "html": "Formalizatzen hasteko, hizkuntza arrunteko izen desberdinei letra xehe desberdinak esleituko dizkiegu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0010.svg\" alt=\"a\" style=\"width:0.823em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0011.svg\" alt=\"b\" style=\"width:0.723em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0012.svg\" alt=\"c\" style=\"width:0.741em;height:1.001em\" loading=\"lazy\">, …; behar denean, azpiindizeak erabil daitezke, hala nola <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0013.svg\" alt=\"a_0\" style=\"width:1.349em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0014.svg\" alt=\"a_1\" style=\"width:1.349em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0015.svg\" alt=\"a_2\" style=\"width:1.349em;height:1.001em\" loading=\"lazy\">. Esleipena ez da objektuaren ezaugarri bat: hitzarmen bat da, eta formalizazio osoan koherentziaz mantendu behar da."
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
       "html": "“June Bilbon bizi da, eta Bilbo Bizkaiko hiriburua da” aztertzean, “June” <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0010.svg\" alt=\"a\" style=\"width:0.823em;height:1.001em\" loading=\"lazy\"> bidez, “Bilbo” <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0011.svg\" alt=\"b\" style=\"width:0.723em;height:1.001em\" loading=\"lazy\"> bidez eta “Bizkaia” <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0012.svg\" alt=\"c\" style=\"width:0.741em;height:1.001em\" loading=\"lazy\"> bidez adieraz ditzakegu. Oraindik ez dugu esaldi osoa formalizatu; haren izendatzaileak identifikatu eta izendatu besterik ez dugu egin."
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
        "oro har, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0016.svg\" alt=\"n\" style=\"width:0.905em;height:1.001em\" loading=\"lazy\"> argumentu hartzen baditu, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0016.svg\" alt=\"n\" style=\"width:0.905em;height:1.001em\" loading=\"lazy\">-adikoa."
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
     "html": "Funtoreak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0017.svg\" alt=\"f\" style=\"width:0.882em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0018.svg\" alt=\"g\" style=\"width:0.792em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0019.svg\" alt=\"h\" style=\"width:0.877em;height:1.001em\" loading=\"lazy\">, … letren bidez adieraziko ditugu. Aritatea zalantzazkoa izan badaiteke, goi-indizez zehaztuko dugu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0020.svg\" alt=\"f^1\" style=\"width:1.408em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0021.svg\" alt=\"g^2\" style=\"width:1.318em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0022.svg\" alt=\"h^3\" style=\"width:1.404em;height:1.001em\" loading=\"lazy\">. Funtorea argumentuen aurretik jartzea da Mosterínen oinarrizko hitzarmena; hemen, irakurketa errazteko, ohiko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0023.svg\" alt=\"f(a)\" style=\"width:2.395em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0024.svg\" alt=\"g(a,b)\" style=\"width:3.333em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0025.svg\" alt=\"h(a,b,c)\" style=\"width:4.464em;height:1.001em\" loading=\"lazy\"> idazkerak ere erabiliko ditugu."
    },
    {
     "mota": "oharra",
     "titulua": "Izena eta deskribapen konposatua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izenak objektua zuzenean seinalatzen du, baina funtorez osatutako izendatzaileak objektua beste objektuekiko harreman baten bidez aurkezten du. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0026.svg\" alt=\"9\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> izenak zenbaki bat izendatzen du; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0027.svg\" alt=\"3^2\" style=\"width:1.316em;height:1.001em\" loading=\"lazy\"> adierazpenak objektu bera izendatzen du, baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0009.svg\" alt=\"3\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\">-ren karratua dela erakutsiz. Erreferentzia bera izan arren, informazio-egitura ez da bera."
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
       "html": "Sententzia egiazkoa edo faltsua izan daitekeen hizkuntza-adierazpena da, unean unean haren egia-balioa zein den ez badakigu ere. “Paris Frantziako hiriburua da” eta “<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0028.svg\" alt=\"5 + 5 = 12\" style=\"width:5.486em;height:1.001em\" loading=\"lazy\">” biak sententziak dira: lehenengoa egiazkoa da eta bigarrena faltsua."
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
       "html": "Erlatzaile baten aritatea sententzia osatzeko behar dituen izendatzaileen kopurua da. “... gaixo dago” unarioa da; “...-k ... maite du” bitarra; eta “... ... eta ... artean dago” hirutarra. Oro har, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0016.svg\" alt=\"n\" style=\"width:0.905em;height:1.001em\" loading=\"lazy\"> izendatzaile behar dituen erlatzailea <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0016.svg\" alt=\"n\" style=\"width:0.905em;height:1.001em\" loading=\"lazy\">-adikoa da."
      },
      {
       "mota": "testua",
       "html": "Erlatzaileak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0029.svg\" alt=\"P\" style=\"width:1.116em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0030.svg\" alt=\"Q\" style=\"width:1.126em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0031.svg\" alt=\"R\" style=\"width:1.117em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0032.svg\" alt=\"S\" style=\"width:0.990em;height:1.001em\" loading=\"lazy\">, … letra larriz adieraziko ditugu, eta aritatea behar denean goi-indizez: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0033.svg\" alt=\"P^1\" style=\"width:1.642em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0034.svg\" alt=\"R^2\" style=\"width:1.643em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0035.svg\" alt=\"S^3\" style=\"width:1.516em;height:1.001em\" loading=\"lazy\">. Erlatzailearen argumentuen ordena datu logikoa da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0036.svg\" alt=\"R(a,b)\" style=\"width:3.658em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0037.svg\" alt=\"R(b,a)\" style=\"width:3.658em;height:1.001em\" loading=\"lazy\"> ez dira, oro har, sententzia bera."
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
       "html": "Har ditzagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0010.svg\" alt=\"a\" style=\"width:0.823em;height:1.001em\" loading=\"lazy\"> = “Jon”, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0011.svg\" alt=\"b\" style=\"width:0.723em;height:1.001em\" loading=\"lazy\"> = “Leire”, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0017.svg\" alt=\"f\" style=\"width:0.882em;height:1.001em\" loading=\"lazy\"> = “...-ren ama”, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0038.svg\" alt=\"P(x,y)\" style=\"width:3.794em;height:1.001em\" loading=\"lazy\"> = “<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> maite du” eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0041.svg\" alt=\"Q(x,y)\" style=\"width:3.804em;height:1.001em\" loading=\"lazy\"> = “<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> jasaten du”. “Jonek bere ama maite du, baina Leire ez du jasaten” esaldiaren osagai predikatiboak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0042.svg\" alt=\"P(a,f(a))\" style=\"width:5.329em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0043.svg\" alt=\"Q(a,b)\" style=\"width:3.668em;height:1.001em\" loading=\"lazy\"> dira. Konektoreak gehitu arte, bi sententzia sinple identifikatu ditugu."
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
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0044.svg\" alt=\"not A\" style=\"width:1.851em;height:1.001em\" loading=\"lazy\"> egiazkoa da <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0045.svg\" alt=\"A\" style=\"width:1.079em;height:1.001em\" loading=\"lazy\"> faltsua denean, eta faltsua <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0045.svg\" alt=\"A\" style=\"width:1.079em;height:1.001em\" loading=\"lazy\"> egiazkoa denean.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0046.svg\" alt=\"A and B\" style=\"width:3.274em;height:1.001em\" loading=\"lazy\"> egiazkoa da bi osagaiak egiazkoak direnean bakarrik.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0047.svg\" alt=\"A or B\" style=\"width:3.274em;height:1.001em\" loading=\"lazy\">-n “edo” inklusiboa da: faltsua da bi osagaiak faltsuak direnean bakarrik.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0048.svg\" alt=\"A -&gt; B\" style=\"width:3.788em;height:1.001em\" loading=\"lazy\"> faltsua da <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0045.svg\" alt=\"A\" style=\"width:1.079em;height:1.001em\" loading=\"lazy\"> egiazkoa eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0049.svg\" alt=\"B\" style=\"width:1.118em;height:1.001em\" loading=\"lazy\"> faltsua den kasuan bakarrik.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0050.svg\" alt=\"A &lt;-&gt; B\" style=\"width:3.788em;height:1.001em\" loading=\"lazy\"> egiazkoa da bi osagaiek egia-balio bera dutenean."
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
       "html": "Aurreko ataleko esaldia honela bil daiteke: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0051.svg\" alt=\"P(a,f(a)) and not Q(a,b)\" style=\"width:10.846em;height:1.001em\" loading=\"lazy\">. “Baina”ren kontrastea ez da formula horretan ageri; baieztapen bien baterako egia-baldintza bai."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Edo inklusiboa.</strong> Hizkuntza arrunteko “edo” batzuetan baztertzailea da eta beste batzuetan inklusiboa. Hemen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0052.svg\" alt=\"or\" style=\"width:0.983em;height:1.001em\" loading=\"lazy\"> inklusiboa izango da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0045.svg\" alt=\"A\" style=\"width:1.079em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0049.svg\" alt=\"B\" style=\"width:1.118em;height:1.001em\" loading=\"lazy\"> biak egiazkoak direnean, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0047.svg\" alt=\"A or B\" style=\"width:3.274em;height:1.001em\" loading=\"lazy\"> ere egiazkoa da. “Bietako bat, baina ez biak” adierazi nahi denean, baldintza gehigarria formalizatu behar da."
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
     "html": "Matematikak aldagaiak erabiltzen ditu baieztapen orokorrak egiteko. Adibidez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0053.svg\" alt=\"x + y = y + x\" style=\"width:7.110em;height:1.001em\" loading=\"lazy\"> idaztean ez da bi zenbaki jakinez hitz egiten; zenbaki egokiak haien ordez jar daitezkeen tokiak markatzen dira. Hizkuntza arrunteko izenordainek ere antzeko eginkizuna izan dezakete: “hark egin du” esateak erreferentzia zehaztu gabeko leku bat uzten du."
    },
    {
     "mota": "testua",
     "html": "Aldagaiak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0055.svg\" alt=\"v\" style=\"width:0.785em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0056.svg\" alt=\"w\" style=\"width:1.043em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\">, … letren bidez adieraziko ditugu; behar denean, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0058.svg\" alt=\"x_0\" style=\"width:1.399em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0059.svg\" alt=\"x_1\" style=\"width:1.399em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0060.svg\" alt=\"x_2\" style=\"width:1.399em;height:1.001em\" loading=\"lazy\">, … azpiindizeak erabiliko dira. Aldagaiak ez du berez objektu jakin bat izendatzen. Haren funtzioa formulen egituran leku bat uztea da, gero ordezkapenak edo kuantifikazioak zehaztu ahal izateko."
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
       "html": "“Jonek bere lehengusina maite du” sententziatik “Jonek” izendatzailea <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aldagaiaz ordezkatuz, “<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ek bere lehengusina maite du” formula irekia lortzen da. “<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0061.svg\" alt=\"5 + 7 &gt; 10\" style=\"width:5.501em;height:1.001em\" loading=\"lazy\">” sententziatik bi zenbakiak ordezkatuz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0062.svg\" alt=\"x + y &gt; 10\" style=\"width:5.590em;height:1.001em\" loading=\"lazy\"> lortzen da. Azken hori ez da berez egiazkoa edo faltsua: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ri eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\">-ri emandako balioen mende dago."
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
       "html": "“Aneren ama” izendatzailean “Ane” <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aldagaiaz ordezkatuz, “<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ren ama” termino irekia lortzen da. “Aneren ama” pertsona bati erreferentzia egiteko erabil daiteke; “<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ren ama”k, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> zehaztu gabe, ez du pertsona bakar bat izendatzen."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0063.svg\" alt=\"forall x phi\" style=\"width:2.401em;height:1.001em\" loading=\"lazy\"> formulak dio dagokion eremuko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> guztiek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\"> betetzen dutela. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0065.svg\" alt=\"exists x phi\" style=\"width:2.274em;height:1.001em\" loading=\"lazy\"> formulak dio eremuan badela gutxienez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> bat <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\"> betetzen duena. Kuantifikatzailearen ondoko aldagaia <strong>kuantifikatutako aldagaia</strong> da."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0066.svg\" alt=\"P(x)\" style=\"width:2.679em;height:1.001em\" loading=\"lazy\"> = “<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> nire laguna da” eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0067.svg\" alt=\"Q(x)\" style=\"width:2.690em;height:1.001em\" loading=\"lazy\"> = “<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> fidagarria da” hartuta, “nire lagun guztiak fidagarriak dira” honela formalizatzen da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0068.svg\" alt=\"forall x (P(x) -&gt; Q(x))\" style=\"width:9.294em;height:1.001em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Klase finitua bada, kuantifikazioaren eta konektore errepikatuen arteko antzekotasuna ikus daiteke. Klub batek hiru kide baino ez baditu, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0010.svg\" alt=\"a\" style=\"width:0.823em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0011.svg\" alt=\"b\" style=\"width:0.723em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0012.svg\" alt=\"c\" style=\"width:0.741em;height:1.001em\" loading=\"lazy\">, orduan “kide guztiak zintzoak dira” baieztapena <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0069.svg\" alt=\"H(a) and H(b) and H(c)\" style=\"width:10.300em;height:1.001em\" loading=\"lazy\"> konjuntzioarekin azal daiteke; “kideren bat lapurra da”, berriz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0070.svg\" alt=\"L(a) or L(b) or L(c)\" style=\"width:9.508em;height:1.001em\" loading=\"lazy\"> disjuntzioarekin."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0071.svg\" alt=\"forall x H(x) quad &quot;(eremu finitua: &quot; a,b,c &quot;)&quot; quad &lt;-&gt; quad H(a) and H(b) and H(c)\" style=\"width:30.832em;height:1.001em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Antzekotasuna ez da ordezkapen orokorra. Eremua infinitua bada, ezin dugu konjuntzio edo disjuntzio infinitu bat formula finitu arrunt batean idatzi. Zenbaki natural guztiek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0029.svg\" alt=\"P\" style=\"width:1.116em;height:1.001em\" loading=\"lazy\"> propietatea dutela adierazteko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0072.svg\" alt=\"forall x P(x)\" style=\"width:4.113em;height:1.001em\" loading=\"lazy\"> behar dugu; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0073.svg\" alt=\"P(0) and P(1) and P(2) and dots\" style=\"width:12.196em;height:1.001em\" loading=\"lazy\"> kateak ez luke inoiz amaituko."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0074.svg\" alt=\"iota x phi\" style=\"width:2.040em;height:1.001em\" loading=\"lazy\"> terminoak “<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\"> betetzen duen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">” adierazten du, baldintza hori betetzen duen banakoa bakarra denean. Mosterínek iota grekoa erabiltzen du eta kuantifikatzaile baten antzera aldagai baten aurrean jartzen du, baina emaitza ez da formula bat: <strong>termino bat</strong> da."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0075.svg\" alt=\"M(x,k)\" style=\"width:4.150em;height:1.001em\" loading=\"lazy\"> = “<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0076.svg\" alt=\"k\" style=\"width:0.831em;height:1.001em\" loading=\"lazy\"> hil zuen” hartuta, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0076.svg\" alt=\"k\" style=\"width:0.831em;height:1.001em\" loading=\"lazy\"> izenak Robert Kennedy adierazten badu, “Robert Kennedy hil zuen pertsona” honela idatz daiteke: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0077.svg\" alt=\"iota x M(x,k)\" style=\"width:5.223em;height:1.001em\" loading=\"lazy\">. Deskribapenak pertsona bat izendatuko du baldin eta baldintza betetzen duen pertsona bakarra badago."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0078.svg\" alt=\"H(x)\" style=\"width:2.826em;height:1.001em\" loading=\"lazy\"> = “<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> Bartzelonako biztanlea da” eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0079.svg\" alt=\"A(y,x)\" style=\"width:3.757em;height:1.001em\" loading=\"lazy\"> = “<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> baino zaharragoa da” hartuta, “Bartzelonako biztanlerik zaharrena” honela azal daiteke: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0080.svg\" alt=\"iota x (H(x) and not exists y (H(y) and A(y,x)))\" style=\"width:16.389em;height:1.001em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Zenbakien artean ere deskribapenak erabil daitezke. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0081.svg\" alt=\"D(x,n)\" style=\"width:3.947em;height:1.001em\" loading=\"lazy\">-k “<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0016.svg\" alt=\"n\" style=\"width:0.905em;height:1.001em\" loading=\"lazy\">-ren zatitzailea da” eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0082.svg\" alt=\"x &lt;= y\" style=\"width:3.017em;height:1.001em\" loading=\"lazy\">-k ohiko ordena adierazten badute, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0016.svg\" alt=\"n\" style=\"width:0.905em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0083.svg\" alt=\"m\" style=\"width:1.227em;height:1.001em\" loading=\"lazy\">-ren zatitzaile komun handiena baldintza hau betetzen duen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> gisa aurkez daiteke:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0084.svg\" alt=\"iota x (D(x,n) and D(x,m) and forall y ((D(y,n) and D(y,m)) -&gt; y &lt;= x))\" style=\"width:29.288em;height:1.001em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Deskribapen guztiak ez dira <strong>propioak</strong>. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0085.svg\" alt=\"iota x forall y (x &lt;= y)\" style=\"width:6.361em;height:1.001em\" loading=\"lazy\"> terminoak zenbaki natural txikiena hautatzen du; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0086.svg\" alt=\"iota x forall y (y &lt;= x)\" style=\"width:6.361em;height:1.001em\" loading=\"lazy\"> terminoak, ordea, handiena hautatu nahi du, baina zenbaki natural handienik ez dago. Azken hori deskribapen inpropioa da."
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
       "html": "Har ditzagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0087.svg\" alt=\"H(a)\" style=\"width:2.776em;height:1.001em\" loading=\"lazy\"> = “Jonek frantsesez egiten du”, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0088.svg\" alt=\"N(a)\" style=\"width:2.776em;height:1.001em\" loading=\"lazy\"> = “Jonek ingelesez egiten du” eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0089.svg\" alt=\"E(b,a)\" style=\"width:3.669em;height:1.001em\" loading=\"lazy\"> = “Pedrok Joni ulertzen dio”. Bi egitura hauek ez dira berdinak:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0090.svg\" alt=\"H(a) or (N(a) and not E(b,a))\" style=\"width:13.048em;height:1.001em\" loading=\"lazy\">: frantsesez egiten badu, ulermenari buruz ez da ezer behartzen; ingelesez egiten badu, Pedrok ez dio ulertzen.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0091.svg\" alt=\"(H(a) or N(a)) and not E(b,a)\" style=\"width:13.048em;height:1.001em\" loading=\"lazy\">: bi hizkuntzetako edozeinetan eginda ere, Pedrok ez dio ulertzen."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Matematikan gertatzen den gauza bera da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0092.svg\" alt=\"8 + 7 dot 5 = 43\" style=\"width:6.916em;height:1.001em\" loading=\"lazy\">, baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0093.svg\" alt=\"(8 + 7) dot 5 = 75\" style=\"width:7.832em;height:1.001em\" loading=\"lazy\">. Parentesiek eragiketen taldekatzea aldatzen dute, eta horrekin emaitza."
    },
    {
     "mota": "testua",
     "html": "Kuantifikatzailearen irismena ere parentesiek finkatzen dute. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0094.svg\" alt=\"(forall x S(x)) -&gt; E(x)\" style=\"width:9.169em;height:1.001em\" loading=\"lazy\"> formula irekia da, azken <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> ez baitago lehen kuantifikatzailearen irismenaren barruan. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0095.svg\" alt=\"forall x (S(x) -&gt; E(x))\" style=\"width:9.169em;height:1.001em\" loading=\"lazy\">, aldiz, sententzia izan daiteke: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ren bi agerraldiak kuantifikatuta daude."
    },
    {
     "mota": "testua",
     "html": "Deskribapenetan taldekatzea are kritikoagoa da. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0096.svg\" alt=\"iota x (M(x,2) and M(0,x))\" style=\"width:11.267em;height:1.001em\" loading=\"lazy\"> termino bat da: bi baldintzak betetzen dituen objektua hautatzen du. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0097.svg\" alt=\"(iota x M(x,2)) and M(0,x)\" style=\"width:11.267em;height:1.001em\" loading=\"lazy\"> kateak, ordea, termino bat eta formula bat konektatu nahi ditu; beraz, ez dago behar bezala eratuta."
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
       "html": "Har dezagun zenbaki naturalen eremua. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0066.svg\" alt=\"P(x)\" style=\"width:2.679em;height:1.001em\" loading=\"lazy\"> = “<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> bikoitia da”, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0067.svg\" alt=\"Q(x)\" style=\"width:2.690em;height:1.001em\" loading=\"lazy\"> = “<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> bakoitia da”, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0098.svg\" alt=\"x &lt; y\" style=\"width:3.017em;height:1.001em\" loading=\"lazy\"> ohiko ordena eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0099.svg\" alt=\"f(x)\" style=\"width:2.445em;height:1.001em\" loading=\"lazy\"> = “<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ren hurrengoa”. Orduan:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "“hiru baino txikiagoa den zenbaki bikoitiren bat dago”: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0100.svg\" alt=\"exists x (P(x) and x &lt; 3)\" style=\"width:8.958em;height:1.001em\" loading=\"lazy\">;",
        "“hiru baino txikiagoa den zenbaki bikoiti bat dago gehienez”: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0101.svg\" alt=\"forall x forall y ((P(x) and P(y) and x &lt; 3 and y &lt; 3) -&gt; x = y)\" style=\"width:23.668em;height:1.001em\" loading=\"lazy\">;",
        "“hiru baino txikiagoa den zenbaki bikoiti bakarra dago”: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0102.svg\" alt=\"exists x (P(x) and x &lt; 3 and forall y ((P(y) and y &lt; 3) -&gt; y = x))\" style=\"width:24.441em;height:1.001em\" loading=\"lazy\">;",
        "“zenbaki bikoiti baten hurrengoa bakoitia da”: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0103.svg\" alt=\"forall x (P(x) -&gt; Q(f(x)))\" style=\"width:10.866em;height:1.001em\" loading=\"lazy\">;",
        "“lauren hurrengoa bost da”: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0104.svg\" alt=\"f(4) = 5\" style=\"width:4.485em;height:1.001em\" loading=\"lazy\">."
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
     "html": "Aristotelesen silogistikako lau sententzia-mota klasikoek ere lehen mailako notazioan egitura argia hartzen dute. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0105.svg\" alt=\"A(x)\" style=\"width:2.642em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0106.svg\" alt=\"B(x)\" style=\"width:2.681em;height:1.001em\" loading=\"lazy\"> predikatu unarioak badira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0107.svg\" alt=\"&quot;a:&quot; quad forall x (A(x) -&gt; B(x))\" style=\"width:11.307em;height:1.001em\" loading=\"lazy\">"
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0108.svg\" alt=\"&quot;i:&quot; quad exists x (A(x) and B(x))\" style=\"width:10.409em;height:1.001em\" loading=\"lazy\">"
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0109.svg\" alt=\"&quot;e:&quot; quad forall x (A(x) -&gt; not B(x))\" style=\"width:12.015em;height:1.001em\" loading=\"lazy\">"
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0110.svg\" alt=\"&quot;o:&quot; quad exists x (A(x) and not B(x))\" style=\"width:11.438em;height:1.001em\" loading=\"lazy\">"
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
     "html": "Adibidez, sinbolo berak dituen formalismo batean <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0010.svg\" alt=\"a\" style=\"width:0.823em;height:1.001em\" loading=\"lazy\"> konstantea, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0017.svg\" alt=\"f\" style=\"width:0.882em;height:1.001em\" loading=\"lazy\"> funtore unarioa eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0031.svg\" alt=\"R\" style=\"width:1.117em;height:1.001em\" loading=\"lazy\"> erlatzaile bitarra egon daitezke. Interpretazio batean <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0010.svg\" alt=\"a\" style=\"width:0.823em;height:1.001em\" loading=\"lazy\"> zenbaki bat, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0017.svg\" alt=\"f\" style=\"width:0.882em;height:1.001em\" loading=\"lazy\"> hurrengoaren funtzioa eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0031.svg\" alt=\"R\" style=\"width:1.117em;height:1.001em\" loading=\"lazy\"> “txikiagoa da” erlazioa izan daitezke. Beste interpretazio batean <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0010.svg\" alt=\"a\" style=\"width:0.823em;height:1.001em\" loading=\"lazy\"> pertsona bat, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0017.svg\" alt=\"f\" style=\"width:0.882em;height:1.001em\" loading=\"lazy\"> haren ama eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0031.svg\" alt=\"R\" style=\"width:1.117em;height:1.001em\" loading=\"lazy\"> “maite du” erlazioa izan daitezke. Kate sintaktikoak berdinak dira; esanahia ez."
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
     "html": "JAKINAn, aztertutako lehen mailako notazioa objektu-hizkuntza izango da. Euskara, notazio matematiko osagarria eta azalpenetan sartzen diren metaikurrak metahizkuntza izango dira. Adibidez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0111.svg\" alt=\"P(a)\" style=\"width:2.629em;height:1.001em\" loading=\"lazy\"> formula objektu-hizkuntzakoa izan daiteke; “<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0111.svg\" alt=\"P(a)\" style=\"width:2.629em;height:1.001em\" loading=\"lazy\"> formula atomikoa da” esaldia, berriz, metahizkuntzakoa da."
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
       "html": "Aldagaiek zeinu desberdinen multzo infinitu baina errekurtsiboki zenbakigarri bat osatzen dute. Horrek esan nahi du aldagai bakoitzari zenbaki arrunt bana eslei dakiokeela, haren <strong>indizea</strong>, eta zenbaki arrunt bakoitzari aldagai bana. Metahizkuntzan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0112.svg\" alt=\"u, v, w, x, y, z\" style=\"width:6.689em;height:1.001em\" loading=\"lazy\"> eta, behar denean, azpiindizeak erabiliko ditugu aldagai arbitrarioak aipatzeko."
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
        "ezeztapena: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0114.svg\" alt=\"not\" style=\"width:0.983em;height:1.001em\" loading=\"lazy\">;",
        "konjuntzioa, disjuntzioa, baldintza eta baliokidetasuna: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0115.svg\" alt=\"and\" style=\"width:0.983em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0052.svg\" alt=\"or\" style=\"width:0.983em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0116.svg\" alt=\"-&gt;\" style=\"width:1.368em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0117.svg\" alt=\"&lt;-&gt;\" style=\"width:1.368em;height:1.001em\" loading=\"lazy\">;",
        "kuantifikatzaile unibertsala eta existentziala: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0003.svg\" alt=\"forall\" style=\"width:0.982em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0004.svg\" alt=\"exists\" style=\"width:0.854em;height:1.001em\" loading=\"lazy\">;",
        "deskriptorea: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0118.svg\" alt=\"iota\" style=\"width:0.620em;height:1.001em\" loading=\"lazy\">."
       ]
      },
      {
       "mota": "testua",
       "html": "Horiez gain, berdintza dago, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0113.svg\" alt=\"=\" style=\"width:1.111em;height:1.001em\" loading=\"lazy\">, formalismo guztietan agertzen den predikatu bitar berezia. Familia horiek eta aldagaien familia elkarrengandik disjuntuak dira: zeinu batek ezin ditu bi eginkizun sintaktiko izan aldi berean."
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
        "<strong>Konstante indibidualak</strong>: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0119.svg\" alt=\"a, b, c, dots\" style=\"width:4.380em;height:1.001em\" loading=\"lazy\">; objektu bakar bat izendatzeko gai diren oinarrizko zeinuak.",
        "<strong>Funtzio-sinboloak</strong>: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0120.svg\" alt=\"f^n, g^n, h^n, dots\" style=\"width:6.555em;height:1.001em\" loading=\"lazy\">; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0016.svg\" alt=\"n\" style=\"width:0.905em;height:1.001em\" loading=\"lazy\"> argumentu hartzen dituzten eraikitzaileak, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0121.svg\" alt=\"n &gt;= 1\" style=\"width:3.028em;height:1.001em\" loading=\"lazy\">.",
        "<strong>Predikatu-sinboloak</strong>: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0122.svg\" alt=\"P^n, Q^n, R^n, dots\" style=\"width:7.364em;height:1.001em\" loading=\"lazy\">; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0016.svg\" alt=\"n\" style=\"width:0.905em;height:1.001em\" loading=\"lazy\"> argumentuko formula atomikoak eratzen dituzten zeinuak, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0121.svg\" alt=\"n &gt;= 1\" style=\"width:3.028em;height:1.001em\" loading=\"lazy\">."
       ]
      },
      {
       "mota": "testua",
       "html": "Goiko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0016.svg\" alt=\"n\" style=\"width:0.905em;height:1.001em\" loading=\"lazy\">-k aritatea adierazten du; beheko indize batek, berriz, aritate bereko zeinuen zerrendan zein tokitan dagoen. Familia guztiak elkarren artean eta zeinu komunen familiekin disjuntuak dira."
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
       "html": "Ordenari buruzko hizkuntza batek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0123.svg\" alt=\"&lt;\" style=\"width:1.111em;height:1.001em\" loading=\"lazy\"> predikatu bitarra izan dezake eta konstante berezirik ez. Aritmetikarako sinadura batek, ordea, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0124.svg\" alt=\"0\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> konstantea, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0125.svg\" alt=\"s\" style=\"width:0.754em;height:1.001em\" loading=\"lazy\"> funtzio unarioa eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0126.svg\" alt=\"+\" style=\"width:1.111em;height:1.001em\" loading=\"lazy\"> zein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0127.svg\" alt=\"dot\" style=\"width:0.532em;height:1.001em\" loading=\"lazy\"> funtzio bitarrak izan ditzake. Zeinu logikoak bi hizkuntzetan berak dira; zeinu bereziek bereizten dituzte."
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
       "html": "<strong>Zeinu-katea</strong> alfabeto bateko zeinuen segida finitu eta ez-hutsa da. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0128.svg\" alt=\"xi\" style=\"width:0.759em;height:1.001em\" loading=\"lazy\"> katearen luzera, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0129.svg\" alt=\"&quot;long&quot;(xi)\" style=\"width:3.784em;height:1.001em\" loading=\"lazy\">, haren zeinu kopurua da."
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0130.svg\" alt=\"xi_1 xi_2\" style=\"width:2.277em;height:1.001em\" loading=\"lazy\"> kateatzea <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0131.svg\" alt=\"xi_1\" style=\"width:1.244em;height:1.001em\" loading=\"lazy\">-en ondoren <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0132.svg\" alt=\"xi_2\" style=\"width:1.244em;height:1.001em\" loading=\"lazy\"> idatziz lortzen da, eta"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/00aa_02logika/f0133.svg\" alt=\"&quot;long&quot;(xi_1 xi_2) = &quot;long&quot;(xi_1) + &quot;long&quot;(xi_2).\" style=\"width:16.698em;height:1.364em\" loading=\"lazy\">"
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
       "html": "Sinadurak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0010.svg\" alt=\"a\" style=\"width:0.823em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0020.svg\" alt=\"f^1\" style=\"width:1.408em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0034.svg\" alt=\"R^2\" style=\"width:1.643em;height:1.001em\" loading=\"lazy\"> baditu, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0023.svg\" alt=\"f(a)\" style=\"width:2.395em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0134.svg\" alt=\"R(f(a),x)\" style=\"width:5.380em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0135.svg\" alt=\"R ) a f (\" style=\"width:3.302em;height:1.001em\" loading=\"lazy\"> denak dira alfabeto bereko kate finituak. Lehenengoa termino bihurtuko da eta bigarrena formula; hirugarrena ez da adierazpena, eraketa- araurik ez duelako betetzen."
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
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0136.svg\" alt=\"f^n\" style=\"width:1.519em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0016.svg\" alt=\"n\" style=\"width:0.905em;height:1.001em\" loading=\"lazy\">-adiko funtzio-sinboloa bada eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0137.svg\" alt=\"t_1, dots, t_n\" style=\"width:4.209em;height:1.001em\" loading=\"lazy\"> terminoak badira, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0138.svg\" alt=\"f^n(t_1, dots, t_n)\" style=\"width:5.073em;height:1.001em\" loading=\"lazy\"> terminoa da.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0139.svg\" alt=\"P^n\" style=\"width:1.753em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0016.svg\" alt=\"n\" style=\"width:0.905em;height:1.001em\" loading=\"lazy\">-adiko predikatu-sinboloa bada eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0137.svg\" alt=\"t_1, dots, t_n\" style=\"width:4.209em;height:1.001em\" loading=\"lazy\"> terminoak badira, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0140.svg\" alt=\"P^n(t_1, dots, t_n)\" style=\"width:5.307em;height:1.001em\" loading=\"lazy\"> formula da. Bereziki, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0141.svg\" alt=\"t_1 = t_2\" style=\"width:3.643em;height:1.001em\" loading=\"lazy\"> formula atomikoa da.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\"> formula bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0142.svg\" alt=\"not phi\" style=\"width:1.740em;height:1.001em\" loading=\"lazy\"> formula da.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0143.svg\" alt=\"psi\" style=\"width:0.978em;height:1.001em\" loading=\"lazy\"> formulak badira, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0144.svg\" alt=\"(phi and psi)\" style=\"width:3.923em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0145.svg\" alt=\"(phi or psi)\" style=\"width:3.923em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0146.svg\" alt=\"(phi -&gt; psi)\" style=\"width:4.437em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0147.svg\" alt=\"(phi &lt;-&gt; psi)\" style=\"width:4.437em;height:1.001em\" loading=\"lazy\"> formulak dira.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\"> formula bada eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aldagaia bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0063.svg\" alt=\"forall x phi\" style=\"width:2.401em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0065.svg\" alt=\"exists x phi\" style=\"width:2.274em;height:1.001em\" loading=\"lazy\"> formulak dira.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\"> formula bada eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aldagaia bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0074.svg\" alt=\"iota x phi\" style=\"width:2.040em;height:1.001em\" loading=\"lazy\"> terminoa da."
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
       "html": "Zortzigarren klausula Mosterinen formalismoaren parte da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0074.svg\" alt=\"iota x phi\" style=\"width:2.040em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\"> propietatea betetzen duen objektu bakarra deskribatzeko terminoa eratzen du. JAKINAren M01eko oinarrizko azpihizkuntzak deskriptorerik gabe lan egin dezake ondorengo adibide askotan; hori tokiko murrizketa da, ez jatorrizko gramatikaren klausula ezabatzea. L02 honetan klausula eta hari dagozkion indukzio-, askatasun- eta ordezkapen-kasuak esplizituki gordetzen dira."
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
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0010.svg\" alt=\"a\" style=\"width:0.823em;height:1.001em\" loading=\"lazy\"> termino sinpleak dira.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0099.svg\" alt=\"f(x)\" style=\"width:2.445em;height:1.001em\" loading=\"lazy\"> termino funtzionala da.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0148.svg\" alt=\"iota x P(x)\" style=\"width:3.751em;height:1.001em\" loading=\"lazy\"> deskribapena da, eta terminoa da.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0149.svg\" alt=\"R(f(x),a)\" style=\"width:5.380em;height:1.001em\" loading=\"lazy\"> predikazio bat da, beraz formula.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0150.svg\" alt=\"f(x) = a\" style=\"width:4.602em;height:1.001em\" loading=\"lazy\"> ekuazioa da, berdintza baita haren kanpoko predikatua.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0151.svg\" alt=\"not R(f(x),a)\" style=\"width:6.152em;height:1.001em\" loading=\"lazy\"> ezeztapena da.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0152.svg\" alt=\"forall x R(f(x),a)\" style=\"width:6.814em;height:1.001em\" loading=\"lazy\"> orokorpena da."
       ]
      },
      {
       "mota": "testua",
       "html": "Hortaz, ezin zaio <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0114.svg\" alt=\"not\" style=\"width:0.983em;height:1.001em\" loading=\"lazy\"> zuzenean termino bati aplikatu, ezta funtzio arrunt baten argumentu gisa formula bat jarri ere. Deskriptorearen klausulak bakarrik egiten du formula batetik termino baterako jauzi sintaktikoa."
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
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/00aa_02logika/f0153.svg\" alt=\"forall x (R(f(x), a) -&gt; exists y Q(g(x,y))).\" style=\"width:16.157em;height:1.364em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "Eraikuntza honela irakurtzen da:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Erroa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0154.svg\" alt=\"forall x\" style=\"width:1.644em;height:1.001em\" loading=\"lazy\"> da; haren osagaia baldintza bat da.",
        "Baldintzaren ezkerrean <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0149.svg\" alt=\"R(f(x),a)\" style=\"width:5.380em;height:1.001em\" loading=\"lazy\"> atomo bat dago, eta eskuinean <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0155.svg\" alt=\"exists y Q(g(x,y))\" style=\"width:6.530em;height:1.001em\" loading=\"lazy\">.",
        "Ezkerreko atomoaren argumentuak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0099.svg\" alt=\"f(x)\" style=\"width:2.445em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0010.svg\" alt=\"a\" style=\"width:0.823em;height:1.001em\" loading=\"lazy\"> terminoak dira; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0099.svg\" alt=\"f(x)\" style=\"width:2.445em;height:1.001em\" loading=\"lazy\"> eraikitzeko, lehenik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> terminoa hartu eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0017.svg\" alt=\"f\" style=\"width:0.882em;height:1.001em\" loading=\"lazy\"> aplikatzen zaio.",
        "Eskuineko existentzialaren gorputza <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0156.svg\" alt=\"Q(g(x,y))\" style=\"width:5.286em;height:1.001em\" loading=\"lazy\"> atomo bat da; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0157.svg\" alt=\"g(x,y)\" style=\"width:3.470em;height:1.001em\" loading=\"lazy\"> terminoa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> oinarrizko terminoetatik eraikitzen da."
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
       "html": "Terminoak gutxienez zenbakigarriro infinituak dira, aldagai guztiak terminoak direlako. Gehienez zenbakigarriak dira, ordea: alfabetoa zenbakigarria da eta termino oro alfabeto horretako kate finitu bat da; luzera bakoitzeko kateak eta luzera guztien bildura zenbakigarriak dira. Formuletarako goiko muga bera balio du. Beheko muga berdintzak ematen du: aldagai bakoitzeko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0158.svg\" alt=\"x = x\" style=\"width:3.079em;height:1.001em\" loading=\"lazy\"> formula bat eraiki daiteke. Beraz, bi multzoak infinitu zenbakigarriak dira."
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
       "html": "Izan bedi <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0159.svg\" alt=\"cal(P)_T\" style=\"width:1.532em;height:1.001em\" loading=\"lazy\"> terminoei buruzko propietatea eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0160.svg\" alt=\"cal(P)_F\" style=\"width:1.561em;height:1.001em\" loading=\"lazy\"> formulei buruzkoa. Baldintza hauek betetzen badira:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "aldagai guztiek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0159.svg\" alt=\"cal(P)_T\" style=\"width:1.532em;height:1.001em\" loading=\"lazy\"> dute;",
        "konstante guztiek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0159.svg\" alt=\"cal(P)_T\" style=\"width:1.532em;height:1.001em\" loading=\"lazy\"> dute;",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0137.svg\" alt=\"t_1, dots, t_n\" style=\"width:4.209em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0159.svg\" alt=\"cal(P)_T\" style=\"width:1.532em;height:1.001em\" loading=\"lazy\"> badute, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0138.svg\" alt=\"f^n(t_1, dots, t_n)\" style=\"width:5.073em;height:1.001em\" loading=\"lazy\">-k ere bai;",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0137.svg\" alt=\"t_1, dots, t_n\" style=\"width:4.209em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0159.svg\" alt=\"cal(P)_T\" style=\"width:1.532em;height:1.001em\" loading=\"lazy\"> badute, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0140.svg\" alt=\"P^n(t_1, dots, t_n)\" style=\"width:5.307em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0160.svg\" alt=\"cal(P)_F\" style=\"width:1.561em;height:1.001em\" loading=\"lazy\"> du;",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0160.svg\" alt=\"cal(P)_F\" style=\"width:1.561em;height:1.001em\" loading=\"lazy\"> badu, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0142.svg\" alt=\"not phi\" style=\"width:1.740em;height:1.001em\" loading=\"lazy\">-k ere bai;",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\">-k eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0143.svg\" alt=\"psi\" style=\"width:0.978em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0160.svg\" alt=\"cal(P)_F\" style=\"width:1.561em;height:1.001em\" loading=\"lazy\"> badute, lau konektibo bitarrekin eraikitako formulek ere bai;",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0159.svg\" alt=\"cal(P)_T\" style=\"width:1.532em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0160.svg\" alt=\"cal(P)_F\" style=\"width:1.561em;height:1.001em\" loading=\"lazy\"> badute, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0063.svg\" alt=\"forall x phi\" style=\"width:2.401em;height:1.001em\" loading=\"lazy\">-k eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0065.svg\" alt=\"exists x phi\" style=\"width:2.274em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0160.svg\" alt=\"cal(P)_F\" style=\"width:1.561em;height:1.001em\" loading=\"lazy\"> dute;",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0159.svg\" alt=\"cal(P)_T\" style=\"width:1.532em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0160.svg\" alt=\"cal(P)_F\" style=\"width:1.561em;height:1.001em\" loading=\"lazy\"> badute, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0074.svg\" alt=\"iota x phi\" style=\"width:2.040em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0159.svg\" alt=\"cal(P)_T\" style=\"width:1.532em;height:1.001em\" loading=\"lazy\"> du;"
       ]
      },
      {
       "mota": "testua",
       "html": "orduan termino guztiek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0159.svg\" alt=\"cal(P)_T\" style=\"width:1.532em;height:1.001em\" loading=\"lazy\"> dute eta formula guztiek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0160.svg\" alt=\"cal(P)_F\" style=\"width:1.561em;height:1.001em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Adierazpenaren luzeraren gaineko indukzio sendoa erabiliko dugu. Har bedi <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\"> luzera <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0083.svg\" alt=\"m\" style=\"width:1.227em;height:1.001em\" loading=\"lazy\"> duen termino edo formula, eta suposa dezagun tesia egia dela <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0083.svg\" alt=\"m\" style=\"width:1.227em;height:1.001em\" loading=\"lazy\"> baino luzera txikiagoko adierazpen guztientzat."
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\"> aldagaia edo konstantea bada, lehen bi baldintzek ematen dute emaitza. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0162.svg\" alt=\"E = f^n(t_1,dots,t_n)\" style=\"width:7.534em;height:1.001em\" loading=\"lazy\"> edo <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0163.svg\" alt=\"E = P^n(t_1,dots,t_n)\" style=\"width:7.768em;height:1.001em\" loading=\"lazy\"> bada, argumentu guztiak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\"> baino laburragoak dira; indukzio-hipotesia eta hirugarren edo laugarren baldintza aplikatzen dira. Ezeztapenean eta kuantifikazioan gorputza baino luzeagoa da adierazpen osoa; konektibo bitarrean bi osagaiak dira laburragoak. Azkenik, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0164.svg\" alt=\"E = iota x phi\" style=\"width:4.501em;height:1.001em\" loading=\"lazy\"> bada, bai <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> bai <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\"> laburragoak dira, eta zortzigarren baldintzak terminoa estaltzen du. Eraketa-klausulek ez dutenez beste kasurik uzten, indukzio sendoak termino eta formula guztiak estaltzen ditu."
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
       "html": "Defini dezagun batera terminoen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0165.svg\" alt=\"h_T\" style=\"width:1.605em;height:1.001em\" loading=\"lazy\"> eta formulen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0166.svg\" alt=\"h_F\" style=\"width:1.634em;height:1.001em\" loading=\"lazy\"> altuera:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0172.svg\" alt=\"h_T(x)=h_T(a)=0\" style=\"width:8.956em;height:1.001em\" loading=\"lazy\">;",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0173.svg\" alt=\"h_T(f^n(t_1,dots,t_n))=1+max(h_T(t_1),dots,h_T(t_n))\" style=\"width:21.296em;height:1.247em\" loading=\"lazy\">;",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0174.svg\" alt=\"h_F(P^n(t_1,dots,t_n))=1+max(h_T(t_1),dots,h_T(t_n))\" style=\"width:21.511em;height:1.247em\" loading=\"lazy\">;",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0175.svg\" alt=\"h_F(not phi)=1+h_F(phi)\" style=\"width:9.615em;height:1.001em\" loading=\"lazy\">;",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0176.svg\" alt=\"h_F(phi circle psi)=1+max(h_F(phi),h_F(psi))\" style=\"width:16.879em;height:1.021em\" loading=\"lazy\">, non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0177.svg\" alt=\"circle\" style=\"width:1.132em;height:1.001em\" loading=\"lazy\"> lau konektibo bitarretako edozein den;",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0178.svg\" alt=\"h_F(forall x phi)=h_F(exists x phi)=1+h_F(phi)\" style=\"width:15.321em;height:1.001em\" loading=\"lazy\">;",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0179.svg\" alt=\"h_T(iota x phi)=1+h_F(phi)\" style=\"width:9.914em;height:1.001em\" loading=\"lazy\">."
       ]
      },
      {
       "mota": "testua",
       "html": "Klausula bakoitzak zenbaki arrunt bat ematen du osagaien altuerak zenbaki arruntak direnean. Indukzio semiotikoaren bidez, beraz, termino eta formula orok altuera finitu eta ongi definitua du."
      },
      {
       "mota": "testua",
       "html": "Aurreko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0167.svg\" alt=\"forall x (R(f(x),a) -&gt; exists y Q(g(x,y)))\" style=\"width:15.835em;height:1.001em\" loading=\"lazy\"> formularako: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0168.svg\" alt=\"h_T(x)=h_T(y)=h_T(a)=0\" style=\"width:13.002em;height:1.001em\" loading=\"lazy\">; hortik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0169.svg\" alt=\"h_T(f(x))=h_T(g(x,y))=1\" style=\"width:11.961em;height:1.001em\" loading=\"lazy\">; bi atomoen altuera <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0008.svg\" alt=\"2\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> da; existentzialarena <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0009.svg\" alt=\"3\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\">; baldintzarena <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0170.svg\" alt=\"4\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\">; eta kanpoko kuantifikatzailea gehituta formula osoaren altuera <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0171.svg\" alt=\"5\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> da."
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
     "html": "Kuantifikatzaileak eta deskriptorea <strong>lotzaileak</strong> dira: aldagai bat daramate ondoan, eta lotzailearen irismeneko aldagai egokiak lotzen dituzte. Ideia bera agertzen da ohiko matematikan ere. Adibidez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0180.svg\" alt=\"sum_(n=0)^oo 1/n^2\" style=\"width:4.599em;height:1.012em\" loading=\"lazy\"> adierazpenean <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0016.svg\" alt=\"n\" style=\"width:0.905em;height:1.001em\" loading=\"lazy\"> batukari-indizeak lotzen du, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0181.svg\" alt=\"integral_a^b f(x) dif x\" style=\"width:5.379em;height:1.068em\" loading=\"lazy\"> adierazpenean integrazio-zeinuak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> lotzen du. Hala ere, intuizioa ez da nahikoa formula konplexuetan; askatasuna eta lotura egituraren gainean definitu behar dira."
    },
    {
     "mota": "testua",
     "html": "Hemen, Mosterinen erabilerari jarraituz, &quot;<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aske dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\">-n&quot; eta &quot;<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> lotuta dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\">-n&quot; esango dugu. Horrek ez du esan nahi agerraldi guztiak mota berekoak direnik: aldagai bera aske eta lotuta egon daiteke adierazpen berean."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aldagaia <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\"> adierazpenean aske dagoen honela erabakitzen da:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Aldagai batean: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aske dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\">-n baldin eta soilik baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0182.svg\" alt=\"x=z\" style=\"width:2.990em;height:1.001em\" loading=\"lazy\">.",
        "Konstante batean: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> ez dago inoiz aske <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0010.svg\" alt=\"a\" style=\"width:0.823em;height:1.001em\" loading=\"lazy\">-n.",
        "Termino funtzionalean: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aske dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0183.svg\" alt=\"f^n(t_1,dots,t_n)\" style=\"width:5.073em;height:1.001em\" loading=\"lazy\">-n baldin eta argumentuetako batean, gutxienez, aske badago.",
        "Atomo batean: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aske dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0184.svg\" alt=\"P^n(t_1,dots,t_n)\" style=\"width:5.307em;height:1.001em\" loading=\"lazy\">-n baldin eta argumentuetako batean aske badago. Berdintzarako, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0185.svg\" alt=\"t_1=t_2\" style=\"width:3.643em;height:1.001em\" loading=\"lazy\">-n aske dago baldin eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0186.svg\" alt=\"t_1\" style=\"width:1.155em;height:1.001em\" loading=\"lazy\">-en edo <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0187.svg\" alt=\"t_2\" style=\"width:1.155em;height:1.001em\" loading=\"lazy\">-n aske badago.",
        "Ezeztapenean: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aske dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0142.svg\" alt=\"not phi\" style=\"width:1.740em;height:1.001em\" loading=\"lazy\">-n baldin eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\">-n aske badago.",
        "Konektibo bitarrean: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aske dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0188.svg\" alt=\"phi circle psi\" style=\"width:3.172em;height:1.001em\" loading=\"lazy\">-n baldin eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\">-n edo <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0143.svg\" alt=\"psi\" style=\"width:0.978em;height:1.001em\" loading=\"lazy\">-n aske badago.",
        "Kuantifikazioan: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aske dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0189.svg\" alt=\"forall z phi\" style=\"width:2.312em;height:1.001em\" loading=\"lazy\">-n edo <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0190.svg\" alt=\"exists z phi\" style=\"width:2.185em;height:1.001em\" loading=\"lazy\">-n baldin eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\">-n aske badago eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0191.svg\" alt=\"x != z\" style=\"width:2.990em;height:1.001em\" loading=\"lazy\"> bada.",
        "Deskribapenean: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aske dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0192.svg\" alt=\"iota z phi\" style=\"width:1.951em;height:1.001em\" loading=\"lazy\">-n baldin eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\">-n aske badago eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0191.svg\" alt=\"x != z\" style=\"width:2.990em;height:1.001em\" loading=\"lazy\"> bada."
       ]
      },
      {
       "mota": "testua",
       "html": "Hemen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0177.svg\" alt=\"circle\" style=\"width:1.132em;height:1.001em\" loading=\"lazy\"> ikurrak lau konektibo bitarretako edozein ordezkatzen du."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Azken bi klausulek lotzailearen lana erakusten dute. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\">-ren agerraldi askeak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\"> barruan egon daitezke, baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0193.svg\" alt=\"forall z\" style=\"width:1.555em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0194.svg\" alt=\"exists z\" style=\"width:1.427em;height:1.001em\" loading=\"lazy\"> edo <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0195.svg\" alt=\"iota z\" style=\"width:1.194em;height:1.001em\" loading=\"lazy\"> aurrean jartzean ez dira adierazpen osoan aske geratzen."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aldagaia <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\"> adierazpenean lotuta dagoen honela erabakitzen da:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Aldagai bakarrean eta konstante bakarrean, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> ez dago inoiz lotuta.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0183.svg\" alt=\"f^n(t_1,dots,t_n)\" style=\"width:5.073em;height:1.001em\" loading=\"lazy\"> terminoan, argumentuetako batean lotuta badago eta soilik orduan dago lotuta.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0184.svg\" alt=\"P^n(t_1,dots,t_n)\" style=\"width:5.307em;height:1.001em\" loading=\"lazy\"> atomoan, argumentuetako batean lotuta badago eta soilik orduan dago lotuta; berdintzarako gauza bera bi terminoekin.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0142.svg\" alt=\"not phi\" style=\"width:1.740em;height:1.001em\" loading=\"lazy\">-n, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\">-n lotuta badago eta soilik orduan.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0188.svg\" alt=\"phi circle psi\" style=\"width:3.172em;height:1.001em\" loading=\"lazy\">-n, osagaietako batean lotuta badago eta soilik orduan.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0189.svg\" alt=\"forall z phi\" style=\"width:2.312em;height:1.001em\" loading=\"lazy\">-n eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0190.svg\" alt=\"exists z phi\" style=\"width:2.185em;height:1.001em\" loading=\"lazy\">-n, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\">-n lotuta badago <strong>edo</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0182.svg\" alt=\"x=z\" style=\"width:2.990em;height:1.001em\" loading=\"lazy\"> bada.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0192.svg\" alt=\"iota z phi\" style=\"width:1.951em;height:1.001em\" loading=\"lazy\">-n, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\">-n lotuta badago <strong>edo</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0182.svg\" alt=\"x=z\" style=\"width:2.990em;height:1.001em\" loading=\"lazy\"> bada."
       ]
      },
      {
       "mota": "testua",
       "html": "Lotzailearen indizeko aldagaia bera ere lotura-egituraren parte da; horregatik agertzen da <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0182.svg\" alt=\"x=z\" style=\"width:2.990em;height:1.001em\" loading=\"lazy\"> aukera azken bi kasuetan."
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
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/00aa_02logika/f0196.svg\" alt=\"Phi = forall u ((P(x) and H(u)) -&gt; exists x R(x,z)).\" style=\"width:19.184em;height:1.364em\" loading=\"lazy\">"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> lotuta dago: kanpoko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0198.svg\" alt=\"forall u\" style=\"width:1.644em;height:1.001em\" loading=\"lazy\"> lotzailea da eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0199.svg\" alt=\"H(u)\" style=\"width:2.826em;height:1.001em\" loading=\"lazy\"> haren irismenaren barruan dago.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> aske dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0200.svg\" alt=\"R(x,z)\" style=\"width:3.768em;height:1.001em\" loading=\"lazy\"> atomoan, eta ez dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> lotzen duen zeinurik.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aske dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0066.svg\" alt=\"P(x)\" style=\"width:2.679em;height:1.001em\" loading=\"lazy\">-n, baina lotuta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0201.svg\" alt=\"exists x R(x,z)\" style=\"width:5.074em;height:1.001em\" loading=\"lazy\">-n. Beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aldi berean aske eta lotuta dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0202.svg\" alt=\"Phi\" style=\"width:1.047em;height:1.001em\" loading=\"lazy\">-n.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0056.svg\" alt=\"w\" style=\"width:1.043em;height:1.001em\" loading=\"lazy\"> ez daude <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0202.svg\" alt=\"Phi\" style=\"width:1.047em;height:1.001em\" loading=\"lazy\">-n."
       ]
      },
      {
       "mota": "testua",
       "html": "Ondorioz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0197.svg\" alt=\"&quot;FV&quot;(Phi)={x,z}\" style=\"width:8.024em;height:1.001em\" loading=\"lazy\">."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aldagai eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\"> adierazpen bakoitzerako lau egoera hauetako bat eta bakarra gertatzen da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> ez dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\">-n; aske baina ez lotuta dago; lotuta baina ez aske dago; edo aske eta lotuta dago. Zein egoera den erabakigarria da."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Askatasunaren eta loturaren definizioak egitura-errekurtsiboak dira. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\">-ren eraikuntza-zuhaitza finitua denez, hostoetatik hasita klausula egokia aplika daiteke nodo bakoitzean. Urrats bakoitzean konparazio finituak egiten dira"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "adibidez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0182.svg\" alt=\"x=z\" style=\"width:2.990em;height:1.001em\" loading=\"lazy\"> den edo osagai finituren batean dagoen -, eta horrek erabaki-prozedura amaikorra ematen du."
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
     "html": "Ordezkapenak aldagai <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">, termino <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\"> eta adierazpen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\"> hartzen ditu, eta beste adierazpen bat ematen du. Mosterinek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0204.svg\" alt=\"S_x^t E\" style=\"width:2.427em;height:1.001em\" loading=\"lazy\"> idazten du; hemen, baliokide moderno gisa, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0205.svg\" alt=\"E[t/x]\" style=\"width:2.850em;height:1.001em\" loading=\"lazy\"> ere erabiliko dugu. Helburua ez da testuan letra bat itsu-itsuan aldatzea: ordezkatutako terminoaren aldagai askeek aske jarraitu behar dute."
    },
    {
     "mota": "abisua",
     "titulua": "Aldagai-harrapaketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0206.svg\" alt=\"forall y (P(x) or Q(y))\" style=\"width:8.654em;height:1.001em\" loading=\"lazy\"> formulan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> zuzenean <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0207.svg\" alt=\"f(y)\" style=\"width:2.383em;height:1.001em\" loading=\"lazy\">-z ordezkatuz gero, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0208.svg\" alt=\"forall y (P(f(y)) or Q(y))\" style=\"width:10.164em;height:1.001em\" loading=\"lazy\"> litzateke emaitza. Baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0207.svg\" alt=\"f(y)\" style=\"width:2.383em;height:1.001em\" loading=\"lazy\">-ko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> askea kanpoko kuantifikatzaileak harrapatu du. Lotura hori ez zegoen jatorrizko terminoan, eta ordezkapen zuzenak ez du sortu behar."
      },
      {
       "mota": "testua",
       "html": "Lehenik, lotutako <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> aldagai fresko batez berrizendatzen da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0209.svg\" alt=\"forall z (P(x) or Q(z))\" style=\"width:8.601em;height:1.001em\" loading=\"lazy\">. Orain ordezkapena egin daiteke: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0210.svg\" alt=\"forall z (P(f(y)) or Q(z))\" style=\"width:10.111em;height:1.001em\" loading=\"lazy\">. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0207.svg\" alt=\"f(y)\" style=\"width:2.383em;height:1.001em\" loading=\"lazy\">-ko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> aske mantendu da."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0204.svg\" alt=\"S_x^t E\" style=\"width:2.427em;height:1.001em\" loading=\"lazy\"> egituraren gainean definitzen da:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Aldagaia: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0211.svg\" alt=\"S_x^t z = t\" style=\"width:4.046em;height:1.001em\" loading=\"lazy\"> baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0182.svg\" alt=\"x=z\" style=\"width:2.990em;height:1.001em\" loading=\"lazy\">, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0212.svg\" alt=\"S_x^t z=z\" style=\"width:4.201em;height:1.001em\" loading=\"lazy\"> baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0191.svg\" alt=\"x != z\" style=\"width:2.990em;height:1.001em\" loading=\"lazy\">.",
        "Konstantea: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0213.svg\" alt=\"S_x^t a=a\" style=\"width:4.280em;height:1.001em\" loading=\"lazy\">.",
        "Funtzioa: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0214.svg\" alt=\"S_x^t f^n(t_1,dots,t_n)=f^n(S_x^t t_1,dots,S_x^t t_n)\" style=\"width:14.979em;height:1.001em\" loading=\"lazy\">.",
        "Predikatua: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0215.svg\" alt=\"S_x^t P^n(t_1,dots,t_n)=P^n(S_x^t t_1,dots,S_x^t t_n)\" style=\"width:15.447em;height:1.001em\" loading=\"lazy\">. Bereziki, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0216.svg\" alt=\"S_x^t(t_1=t_2)=(S_x^t t_1 = S_x^t t_2)\" style=\"width:12.799em;height:1.001em\" loading=\"lazy\">.",
        "Ezeztapena: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0217.svg\" alt=\"S_x^t(not phi)=not(S_x^t phi)\" style=\"width:8.536em;height:1.001em\" loading=\"lazy\">.",
        "Konektibo bitarrak: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0218.svg\" alt=\"S_x^t(phi circle psi)=(S_x^t phi) circle (S_x^t psi)\" style=\"width:12.962em;height:1.001em\" loading=\"lazy\">."
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
     "html": "Izan bedi <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0219.svg\" alt=\"Q z phi\" style=\"width:2.457em;height:1.001em\" loading=\"lazy\"> adierazpena, non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0030.svg\" alt=\"Q\" style=\"width:1.126em;height:1.001em\" loading=\"lazy\"> hauetako bat den: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0003.svg\" alt=\"forall\" style=\"width:0.982em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0004.svg\" alt=\"exists\" style=\"width:0.854em;height:1.001em\" loading=\"lazy\"> edo <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0118.svg\" alt=\"iota\" style=\"width:0.620em;height:1.001em\" loading=\"lazy\">. Lehen bi aukeretan emaitza formula da; hirugarrenean, deskribapen-terminoa."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0220.svg\" alt=\"S_x^t(Q z phi)\" style=\"width:3.819em;height:1.001em\" loading=\"lazy\"> honela definitzen da:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<strong>Ez dago zer ordeztu.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> ez badago aske <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0219.svg\" alt=\"Q z phi\" style=\"width:2.457em;height:1.001em\" loading=\"lazy\">-n, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0222.svg\" alt=\"S_x^t(Q z phi)=Q z phi\" style=\"width:7.609em;height:1.001em\" loading=\"lazy\">.",
        "<strong>Ez dago harrapaketa-arriskurik.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aske badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0219.svg\" alt=\"Q z phi\" style=\"width:2.457em;height:1.001em\" loading=\"lazy\">-n baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> ez badago aske <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-n, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0223.svg\" alt=\"S_x^t(Q z phi)=Q z (S_x^t phi)\" style=\"width:9.886em;height:1.001em\" loading=\"lazy\">.",
        "<strong>Harrapaketa-arriskua dago.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aske badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0219.svg\" alt=\"Q z phi\" style=\"width:2.457em;height:1.001em\" loading=\"lazy\">-n eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> aske badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-n, aukeratu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0055.svg\" alt=\"v\" style=\"width:0.785em;height:1.001em\" loading=\"lazy\"> aldagai freskoa, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0219.svg\" alt=\"Q z phi\" style=\"width:2.457em;height:1.001em\" loading=\"lazy\">-n eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-n inon agertzen ez den indize txikieneko aldagaia. Orduan"
       ]
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/00aa_02logika/f0221.svg\" alt=\"S_x^t(Q z phi) = Q v (S_x^t(S_z^v phi)).\" style=\"width:11.881em;height:1.883em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "Hau da: lehenik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> lotua <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0055.svg\" alt=\"v\" style=\"width:0.785em;height:1.001em\" loading=\"lazy\">-z berrizendatzen da, eta gero <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ren ordez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\"> sartzen da."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0224.svg\" alt=\"E=forall y (P(x,y) -&gt; R(y))\" style=\"width:12.735em;height:1.001em\" loading=\"lazy\"> hartuta:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0225.svg\" alt=\"E[a/z]=E\" style=\"width:5.289em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> ez baitago aske <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\">-n.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0226.svg\" alt=\"E[f(a)/x]=forall y (P(f(a),y) -&gt; R(y))\" style=\"width:17.163em;height:1.025em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> ez baitago aske <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0023.svg\" alt=\"f(a)\" style=\"width:2.395em;height:1.001em\" loading=\"lazy\">-n.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0227.svg\" alt=\"E[f(y)/x]\" style=\"width:4.007em;height:1.025em\" loading=\"lazy\"> kalkulatzeko, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> lotua <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0056.svg\" alt=\"w\" style=\"width:1.043em;height:1.001em\" loading=\"lazy\"> freskoaz berrizendatu behar da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0228.svg\" alt=\"E equiv forall w (P(x,w) -&gt; R(w))\" style=\"width:13.433em;height:1.001em\" loading=\"lazy\">; beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0229.svg\" alt=\"E[f(y)/x]=forall w (P(f(y),w) -&gt; R(w))\" style=\"width:17.823em;height:1.025em\" loading=\"lazy\">."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aldagai, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\"> termino eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\"> adierazpen bakoitzerako badago adierazpen bakar bat, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0204.svg\" alt=\"S_x^t E\" style=\"width:2.427em;height:1.001em\" loading=\"lazy\">, aurreko klausulek emana. Gainera, emaitza terminoa da <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\"> terminoa bada, eta formula <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\"> formula bada."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\">-ren gaineko indukzio semiotikoa egiten da. Aldagai eta konstanteen kasuak esplizituak dira. Funtzio, predikatu eta konektiboetan, indukzio-hipotesiak osagai bakoitzaren emaitza bakarra ematen du, eta kanpoko eraikitzaileak kategoria gordetzen du. Lotzaile batean hiru baldintzak elkar baztertzen dute eta aukera guztiak agortzen dituzte. Hirugarren kasuko aldagai freskoa ere bakarra da indize txikienekoaren arauagatik. Deskriptoreak formula-gorputza hartu eta terminoa itzultzen du; gainerako lotzaileek formula itzultzen dute."
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
       "html": "Edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-rako:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0230.svg\" alt=\"S_x^x E=E\" style=\"width:4.958em;height:1.001em\" loading=\"lazy\">.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> ez badago aske <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\">-n, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0231.svg\" alt=\"S_x^t E=E\" style=\"width:4.889em;height:1.001em\" loading=\"lazy\">.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aske badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\">-n, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\"> emaitzan agertzen da eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-n aske dagoen aldagai orok aske jarraitzen du <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0204.svg\" alt=\"S_x^t E\" style=\"width:2.427em;height:1.001em\" loading=\"lazy\">-n.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> ez badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\">-n, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0232.svg\" alt=\"S_z^x(S_x^z E)=E\" style=\"width:6.449em;height:1.001em\" loading=\"lazy\">.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> ez badago aske <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-n, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> ez dago aske <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0204.svg\" alt=\"S_x^t E\" style=\"width:2.427em;height:1.001em\" loading=\"lazy\">-n.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> aske dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0233.svg\" alt=\"S_x^z E\" style=\"width:2.427em;height:1.001em\" loading=\"lazy\">-n baldin eta soilik baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aske badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\">-n edo <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> aske badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\">-n.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> aske dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0204.svg\" alt=\"S_x^t E\" style=\"width:2.427em;height:1.001em\" loading=\"lazy\">-n baldin eta soilik baldin gutxienez hauetako bat gertatzen bada: (a) <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> aske dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\">-n eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0234.svg\" alt=\"z != x\" style=\"width:2.990em;height:1.001em\" loading=\"lazy\">; (b) <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aske dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\">-n eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> aske dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-n."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Propietate bakoitza aldi berean termino eta formuletarako frogatzen da, indukzio semiotikoaren zortzi kasuak erabiliz. Lotzailerik gabeko kasuetan baieztapena osagaietara zuzenean jaisten da. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0235.svg\" alt=\"Q y phi\" style=\"width:2.483em;height:1.001em\" loading=\"lazy\"> kasuan, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aske ez badago, ordezkapena identitatea da; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> ez badago aske <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-n, indukzio- hipotesia gorputzean aplikatzen da; eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> aske badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-n, aldagai freskoa sartzeak zehazki eragozten du <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-ko aldagai aske bat lotuta geratzea. Hirugarren propietatea da azken baldintza horren arrazoia, eta zazpigarrenak emaitzako aldagai askeen bi jatorri posibleak bereizten ditu."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Eraikuntza-zuhaitza, aldagai-indizeen zerrenda eta klausula bakoitzeko baldintza finituak direnez, erabakigarria da emandako <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0236.svg\" alt=\"E_1,E_2,x,t\" style=\"width:5.597em;height:1.001em\" loading=\"lazy\">-rako <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0237.svg\" alt=\"S_x^t E_1=E_2\" style=\"width:5.816em;height:1.001em\" loading=\"lazy\"> den ala ez."
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
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0185.svg\" alt=\"t_1=t_2\" style=\"width:3.643em;height:1.001em\" loading=\"lazy\"> aurrizkiko berdintza-predikatuaren ordez;",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0144.svg\" alt=\"(phi and psi)\" style=\"width:3.923em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0145.svg\" alt=\"(phi or psi)\" style=\"width:3.923em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0146.svg\" alt=\"(phi -&gt; psi)\" style=\"width:4.437em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0147.svg\" alt=\"(phi &lt;-&gt; psi)\" style=\"width:4.437em;height:1.001em\" loading=\"lazy\">, eraikitzailea bi formulen artean idatzita;",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0238.svg\" alt=\"f(t_1,t_2)\" style=\"width:4.186em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0239.svg\" alt=\"R(t_1,t_2)\" style=\"width:4.421em;height:1.001em\" loading=\"lazy\">, erabilerak finkatutako funtzio eta predikatu bitarren notaziorako."
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
        "Kanpoko parentesiak kendu daitezke: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0144.svg\" alt=\"(phi and psi)\" style=\"width:3.923em;height:1.001em\" loading=\"lazy\"> ordez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0240.svg\" alt=\"phi and psi\" style=\"width:3.022em;height:1.001em\" loading=\"lazy\"> idatz daiteke.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0116.svg\" alt=\"-&gt;\" style=\"width:1.368em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0117.svg\" alt=\"&lt;-&gt;\" style=\"width:1.368em;height:1.001em\" loading=\"lazy\"> konektiboek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0115.svg\" alt=\"and\" style=\"width:0.983em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0052.svg\" alt=\"or\" style=\"width:0.983em;height:1.001em\" loading=\"lazy\"> baino irismen zabalagoa dute. Hortaz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0241.svg\" alt=\"phi and psi -&gt; chi\" style=\"width:5.548em;height:1.001em\" loading=\"lazy\"> idazkera <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0242.svg\" alt=\"(phi and psi) -&gt; chi\" style=\"width:6.449em;height:1.001em\" loading=\"lazy\"> da, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0243.svg\" alt=\"phi -&gt; psi or chi\" style=\"width:5.548em;height:1.001em\" loading=\"lazy\"> idazkera <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0244.svg\" alt=\"phi -&gt; (psi or chi)\" style=\"width:6.449em;height:1.001em\" loading=\"lazy\">.",
        "Ezkerretik iteratutako konjuntzio eta disjuntzioetan barne-parentesiak ezaba daitezke. Adibidez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0245.svg\" alt=\"phi and psi and chi and delta\" style=\"width:6.877em;height:1.001em\" loading=\"lazy\"> idazkerak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0246.svg\" alt=\"(((phi and psi) and chi) and delta)\" style=\"width:9.579em;height:1.001em\" loading=\"lazy\"> laburtzen du.",
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
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0241.svg\" alt=\"phi and psi -&gt; chi\" style=\"width:5.548em;height:1.001em\" loading=\"lazy\"> hau da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0242.svg\" alt=\"(phi and psi) -&gt; chi\" style=\"width:6.449em;height:1.001em\" loading=\"lazy\">.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0243.svg\" alt=\"phi -&gt; psi or chi\" style=\"width:5.548em;height:1.001em\" loading=\"lazy\"> hau da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0244.svg\" alt=\"phi -&gt; (psi or chi)\" style=\"width:6.449em;height:1.001em\" loading=\"lazy\">.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0247.svg\" alt=\"phi or psi -&gt; chi and delta\" style=\"width:7.391em;height:1.001em\" loading=\"lazy\"> hau da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0248.svg\" alt=\"(phi or psi) -&gt; (chi and delta)\" style=\"width:9.193em;height:1.001em\" loading=\"lazy\">.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0249.svg\" alt=\"not(phi and psi) &lt;-&gt; not phi or not psi\" style=\"width:10.853em;height:1.001em\" loading=\"lazy\"> hau da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0250.svg\" alt=\"(not(phi and psi)) &lt;-&gt; ((not phi) or (not psi))\" style=\"width:14.457em;height:1.001em\" loading=\"lazy\">."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kuantifikatzaile mota bereko segida ere labur daiteke: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0251.svg\" alt=\"forall x_1,dots,x_n phi\" style=\"width:6.226em;height:1.001em\" loading=\"lazy\"> idazkerak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0252.svg\" alt=\"forall x_1 dots forall x_n phi\" style=\"width:5.967em;height:1.001em\" loading=\"lazy\"> esan nahi du, eta berdin existentzialekin. Laburdura horiek adierazpenen izen metalinguistikoei dagozkie; gramatika ofizialeko eraketa-zuhaitza ez dute aldatzen."
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
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/00aa_02logika/f0196.svg\" alt=\"Phi = forall u ((P(x) and H(u)) -&gt; exists x R(x,z)).\" style=\"width:19.184em;height:1.364em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0253.svg\" alt=\"u,x,y,z,w\" style=\"width:5.600em;height:1.001em\" loading=\"lazy\"> elkarren desberdinak direla suposatuko dugu. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> lotuta dago, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> aske, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aske eta lotuta, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> zein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0056.svg\" alt=\"w\" style=\"width:1.043em;height:1.001em\" loading=\"lazy\"> ez dira formulan agertzen. Horri esker, ordezkapenaren klausula bakoitza formula beraren gainean ikus daiteke."
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
       "html": "Kanpoko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> eta barneko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> lotuak ez dira ordezkatzen, eta formulan ez dauden aldagaiek ere ez dute aldaketarik eragiten:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/00aa_02logika/f0254.svg\" alt=\"Phi[t/u]=Phi, quad Phi[t/y]=Phi, quad Phi[t/w]=Phi\" style=\"width:19.142em;height:2.989em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\"> terminotarako. Kontuz: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-k agerraldi aske bat ere badu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0066.svg\" alt=\"P(x)\" style=\"width:2.679em;height:1.001em\" loading=\"lazy\">-n; horregatik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0255.svg\" alt=\"Phi[t/x]\" style=\"width:2.769em;height:1.001em\" loading=\"lazy\"> ez da, oro har, identitatea."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ren agerraldi askea <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0066.svg\" alt=\"P(x)\" style=\"width:2.679em;height:1.001em\" loading=\"lazy\">-n bakarrik dago. Terminoak kanpoko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> askea ez badu, ordezkapena zuzenean jaisten da:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/00aa_02logika/f0256.svg\" alt=\"Phi[f(x)/x] = forall u ((P(f(x)) and H(u)) -&gt; exists x R(x,z)),\" style=\"width:24.446em;height:2.989em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/00aa_02logika/f0257.svg\" alt=\"Phi[f(c)/x] = forall u ((P(f(c)) and H(u)) -&gt; exists x R(x,z)),\" style=\"width:24.182em;height:2.989em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/00aa_02logika/f0258.svg\" alt=\"Phi[(iota y P(y))/x] = forall u ((P(iota y P(y)) and H(u)) -&gt; exists x R(x,z)).\" style=\"width:26.808em;height:2.989em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "Azken terminoan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> deskriptoreak lotzen du; beraz, ez dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> askea harrapatzeko arriskurik."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-z edo <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0259.svg\" alt=\"f(u)\" style=\"width:2.445em;height:1.001em\" loading=\"lazy\">-z ordeztu nahi bada, termino berriko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> askea <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0198.svg\" alt=\"forall u\" style=\"width:1.644em;height:1.001em\" loading=\"lazy\">-k harrapatuko luke. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> freskoa hartuta:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/00aa_02logika/f0260.svg\" alt=\"Phi[u/x] = forall y ((P(u) and H(y)) -&gt; exists x R(x,z)),\" style=\"width:21.046em;height:2.349em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/00aa_02logika/f0261.svg\" alt=\"Phi[f(u)/x] = forall y ((P(f(u)) and H(y)) -&gt; exists x R(x,z)).\" style=\"width:24.320em;height:2.989em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "Antzera, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-z ordezteko kanpoko lotzailea berrizendatzen da:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/00aa_02logika/f0262.svg\" alt=\"Phi[u/z] = forall y ((P(x) and H(y)) -&gt; exists x R(x,u)).\" style=\"width:21.135em;height:2.349em\" loading=\"lazy\">"
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0099.svg\" alt=\"f(x)\" style=\"width:2.445em;height:1.001em\" loading=\"lazy\">-z ordeztean, termino berriko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> askea barneko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0263.svg\" alt=\"exists x\" style=\"width:1.517em;height:1.001em\" loading=\"lazy\">-ek harrapatuko luke. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> freskoa erabiliz:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/00aa_02logika/f0264.svg\" alt=\"Phi[f(x)/z] = forall u ((P(x) and H(u)) -&gt; exists y R(y,f(x))).\" style=\"width:24.410em;height:2.989em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "Aldiz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0265.svg\" alt=\"f(c)\" style=\"width:2.313em;height:1.001em\" loading=\"lazy\">-k ez du aldagai askerik eta ez da berrizendatzerik behar:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/00aa_02logika/f0266.svg\" alt=\"Phi[f(c)/z] = forall u ((P(x) and H(u)) -&gt; exists x R(x,f(c))).\" style=\"width:24.271em;height:2.989em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "Gauza bera gertatzen da <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0267.svg\" alt=\"iota y P(y)\" style=\"width:3.626em;height:1.001em\" loading=\"lazy\"> designatzailearekin:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/00aa_02logika/f0268.svg\" alt=\"Phi[(iota y P(y))/z] = forall u ((P(x) and H(u)) -&gt; exists x R(x,iota y P(y))).\" style=\"width:26.897em;height:2.989em\" loading=\"lazy\">"
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
       "html": "Identitate-kasuak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0269.svg\" alt=\"Phi[z/z]=Phi\" style=\"width:5.069em;height:1.001em\" loading=\"lazy\"> ematen du. Bi ordezkapen bata bestearen ondoren egiten direnean, ordena esplizituki irakurri behar da: barrukoena lehenik aplikatzen da. Adibidez,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/00aa_02logika/f0270.svg\" alt=\"S_z^c(S_x^(f(c)) Phi) = forall u ((P(f(c)) and H(u)) -&gt; exists x R(x,c)).\" style=\"width:24.409em;height:1.932em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "Beste adibide batean, lehen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0099.svg\" alt=\"f(x)\" style=\"width:2.445em;height:1.001em\" loading=\"lazy\">-z ordezteak barneko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> lotua berrizendatzera behartzen du, baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0066.svg\" alt=\"P(x)\" style=\"width:2.679em;height:1.001em\" loading=\"lazy\">-ko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> askea bere horretan uzten du:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/00aa_02logika/f0271.svg\" alt=\"S_z^(f(x)) Phi = forall u ((P(x) and H(u)) -&gt; exists y R(y,f(x))).\" style=\"width:23.233em;height:1.569em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "Ondorengo ordezkapen batek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0066.svg\" alt=\"P(x)\" style=\"width:2.679em;height:1.001em\" loading=\"lazy\">-ko agerraldi askea alda dezake, baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0272.svg\" alt=\"exists y\" style=\"width:1.454em;height:1.001em\" loading=\"lazy\">-k lotutako <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> ez du ukitzen. Horregatik ordezkapenen konposizioa ez da letra-aldaketa simultaneo eta ordenagabea."
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
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0273.svg\" alt=\"Lambda x alpha\" style=\"width:2.417em;height:1.001em\" loading=\"lazy\">",
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0274.svg\" alt=\"forall x alpha\" style=\"width:2.385em;height:1.001em\" loading=\"lazy\">",
       "Orokortzailea: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> formula <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ren balio guztietarako.",
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> lotuta geratzen da haren irismenean."
      ],
      [
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0276.svg\" alt=\"V x alpha\" style=\"width:2.537em;height:1.001em\" loading=\"lazy\">",
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0277.svg\" alt=\"exists x alpha\" style=\"width:2.258em;height:1.001em\" loading=\"lazy\">",
       "Partikularizatzailea: gutxienez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> baten kasuan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">.",
       "Lekuko bat aukeratzeak ez du izen jakin baten gaineko informazio gehigarririk ematen."
      ],
      [
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0278.svg\" alt=\"S_x^t alpha\" style=\"width:2.251em;height:1.001em\" loading=\"lazy\">",
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0279.svg\" alt=\"alpha[t/x]\" style=\"width:2.674em;height:1.001em\" loading=\"lazy\">",
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">-ko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ren agerraldi libre guztiak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\"> terminoaz ordezkatzea.",
       "Ordezkapenak aldagai-harrapaketa saihestu behar du; behar bada, aldagai lotua alfa-berrizendatu."
      ],
      [
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0280.svg\" alt=\"f x y\" style=\"width:2.144em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0281.svg\" alt=\"h x\" style=\"width:1.540em;height:1.001em\" loading=\"lazy\">; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0282.svg\" alt=\"P x y\" style=\"width:2.378em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0283.svg\" alt=\"R x y\" style=\"width:2.379em;height:1.001em\" loading=\"lazy\">",
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0284.svg\" alt=\"f(x,y)\" style=\"width:3.560em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0285.svg\" alt=\"h(x)\" style=\"width:2.441em;height:1.001em\" loading=\"lazy\">; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0038.svg\" alt=\"P(x,y)\" style=\"width:3.794em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0286.svg\" alt=\"R(x,y)\" style=\"width:3.795em;height:1.001em\" loading=\"lazy\">",
       "Funtzio- eta predikatu-aplikazio bera da; jatorrizko aurrizki trinkoa parentesiz argitzen da.",
       "Argumentuen ordena eta aritatea ez dira aldatzen. <code>fxy</code> ez da hiru sinboloren biderkadura."
      ],
      [
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0287.svg\" alt=\"iota x alpha\" style=\"width:2.024em;height:1.001em\" loading=\"lazy\">",
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0287.svg\" alt=\"iota x alpha\" style=\"width:2.024em;height:1.001em\" loading=\"lazy\">",
       "Deskribatzailea da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> betetzen duen objektu bakarra izendatzeko terminoa, ez kuantifikatzaile bat.",
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> deskribapenaren barruan lotuta dago. DP eta DI arauek soilik justifikatzen dituzte erabilera bereziak."
      ],
      [
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0288.svg\" alt=\"V y Lambda x (alpha &lt;-&gt; x=y)\" style=\"width:9.448em;height:1.001em\" loading=\"lazy\">",
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0289.svg\" alt=\"exists y forall x (alpha &lt;-&gt; x=y)\" style=\"width:9.137em;height:1.001em\" loading=\"lazy\">",
       "Existencia eta bakartasuna batera: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> betetzen duen objektua <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> bera eta bakarra da.",
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> ez da libre egon behar <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">-n DP/DI eskemetan."
      ],
      [
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0290.svg\" alt=\"iota z (z=z)\" style=\"width:4.785em;height:1.001em\" loading=\"lazy\"> deskribapen inpropioa",
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0290.svg\" alt=\"iota z (z=z)\" style=\"width:4.785em;height:1.001em\" loading=\"lazy\"> deskribapen hutserako erreferentzia",
       "DIren bidez, deskribatutako objektu bakarra ez dagoenean erabiltzen den termino lehenetsia.",
       "Ez du existentzia edo bakartasuna baieztatzen; DIren aurrebaldintza ezeztatuak egiaztatuta egon behar du."
      ],
      [
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0291.svg\" alt=\"Gamma tack alpha\" style=\"width:3.026em;height:1.001em\" loading=\"lazy\">",
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0291.svg\" alt=\"Gamma tack alpha\" style=\"width:3.026em;height:1.001em\" loading=\"lazy\">",
       "Ondorio sintaktikoa: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-ko premisetatik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">-ren dedukzio finitu bat dago.",
       "L04-L05eko lerro zenbakidunek hori frogatzen dute; ez dute, berez, semantika aipatzen."
      ],
      [
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0293.svg\" alt=\"Gamma models alpha\" style=\"width:2.834em;height:1.001em\" loading=\"lazy\">",
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0293.svg\" alt=\"Gamma models alpha\" style=\"width:2.834em;height:1.001em\" loading=\"lazy\">",
       "Ondorio semantikoa: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> egia den eredu orotan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> ere egia da.",
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0294.svg\" alt=\"tack\" style=\"width:0.918em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0295.svg\" alt=\"models\" style=\"width:0.726em;height:1.001em\" loading=\"lazy\"> ez dira trukagarriak osotasun edo zuzentasun metateorema aipatu gabe."
      ],
      [
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0296.svg\" alt=\"alpha,beta,gamma\" style=\"width:3.340em;height:1.001em\" loading=\"lazy\">; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0297.svg\" alt=\"x,y,u\" style=\"width:3.165em;height:1.001em\" loading=\"lazy\">; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">",
       "Formula-motaalda-gaiak; objektu-aldagaiak; termino-parametroa.",
       "Lehenengoek formula osoen lekuak betetzen dituzte; bigarrenak formulen barruko sinboloak dira.",
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0298.svg\" alt=\"alpha_i\" style=\"width:1.344em;height:1.001em\" loading=\"lazy\"> etiketak ariketako premisak eta helburua laburtzen ditu, baina ez dira objektu-hizkuntzako konstanteak."
      ],
      [
       "<code>prem.</code>",
       "<code>prem.</code> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0298.svg\" alt=\"alpha_i\" style=\"width:1.344em;height:1.001em\" loading=\"lazy\">",
       "Formula ez da aurreko lerroetatik inferitzen: ariketaren premisa-multzotik sartzen da.",
       "Sartutako formula eta aipatutako <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0298.svg\" alt=\"alpha_i\" style=\"width:1.344em;height:1.001em\" loading=\"lazy\"> hitzez hitz bat etorri behar dira."
      ],
      [
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0299.svg\" alt=\"? alpha\" style=\"width:1.691em;height:1.001em\" loading=\"lazy\">",
       "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0299.svg\" alt=\"? alpha\" style=\"width:1.691em;height:1.001em\" loading=\"lazy\"> edo testuan <strong>helburua</strong>",
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
       "EG/IP ordezkapenak harrapaketarik gabeak dira. EPko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> kritikoa ezin da aurreko lerro batean agertu."
      ],
      [
       "II, EI; DP, DI",
       "Berdintzailearen sarrera/ezabapena; deskribapen propioaren/inpropioaren arauak.",
       "Berdintasuna eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0118.svg\" alt=\"iota\" style=\"width:0.620em;height:1.001em\" loading=\"lazy\"> deskribatzailea gobernatzen dituzten erregela primitiboak.",
       "II/EIn <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> ez da libre <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-n; DP/DIn bakartasun-formula eta aldagai librearen baldintza kontrolatu."
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
       "GEPko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0300.svg\" alt=\"u_1,dots,u_n\" style=\"width:4.697em;height:1.001em\" loading=\"lazy\"> guztiak berriak eta elkarren artean desberdinak dira."
      ],
      [
       "Aldagai kritikoa: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">",
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0291.svg\" alt=\"Gamma tack alpha\" style=\"width:3.026em;height:1.001em\" loading=\"lazy\"> baieztapena dedukzioaren barrukoa da: lerro-segida arautua erakutsi behar da. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0293.svg\" alt=\"Gamma models alpha\" style=\"width:2.834em;height:1.001em\" loading=\"lazy\"> baieztapena eredu eta interpretazioei buruzkoa da. L04-L05eko ariketek lehenengo erlazioa eraikitzen dute. Kalkuluaren zuzentasunak gero <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0291.svg\" alt=\"Gamma tack alpha\" style=\"width:3.026em;height:1.001em\" loading=\"lazy\">-tik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0293.svg\" alt=\"Gamma models alpha\" style=\"width:2.834em;height:1.001em\" loading=\"lazy\"> igarotzea justifika dezake, baina urrats metateoriko hori ez dago dedukzio-taularen barruan."
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
      "<strong>Sekuentzia identifikatu.</strong> Enuntziatutik bereizi premisak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0301.svg\" alt=\"alpha_1,dots,alpha_n\" style=\"width:4.855em;height:1.001em\" loading=\"lazy\"> eta azken helburua <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\">. Taularen esanahia <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0303.svg\" alt=\"alpha_1,dots,alpha_n tack beta\" style=\"width:6.902em;height:1.001em\" loading=\"lazy\"> da; premisarik ez badago, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0304.svg\" alt=\"tack beta\" style=\"width:1.937em;height:1.001em\" loading=\"lazy\">.",
      "<strong>Lehen helburua ireki.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0305.svg\" alt=\"? beta\" style=\"width:1.647em;height:1.001em\" loading=\"lazy\"> lerroak zeregina adierazten du, ez lortutako formula bat. L04n gauza bera <strong>helburua</strong> hitzak adierazten du.",
      "<strong>Irismen-pila jarraitu.</strong> L05eko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0306.svg\" alt=\"M=0\" style=\"width:3.575em;height:1.001em\" loading=\"lazy\"> kanpoko maila da; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0307.svg\" alt=\"M=1,2,dots\" style=\"width:6.153em;height:1.001em\" loading=\"lazy\"> balioek barrurago irekitako azpihelburuak edo hipotesiak adierazten dituzte. Maila jaisteak azken barruti irekia itxi dela esan nahi du. L04n itxiera hori ebazpenaren azken esaldiek azaltzen dute.",
      "<strong>Lerroaren mota erabaki.</strong> Lerro bat premisa, aldi baterako hipotesia, inferentzia edo helburua izan daiteke. <code>prem.</code> ez da inferentzia-erregela; <code>?</code> ez da konektiboa; hipotesia ez da kanpoko teorema.",
      "<strong>Justifikazioa ezkerretik eskuinera berreraiki.</strong> <code>MP, 10, 4</code> irakurtzean, lehenik 10. eta 4. lerroak aurkitu, biak erabilgarriak direla egiaztatu, eta MPren eskemak oraingo formula ematen duela konprobatu. Ordena kronologikoa beti goranzkoa da: etorkizuneko lerroa ezin da aipatu.",
      "<strong>Ordezkapena egiaztatu.</strong> EG, IP, II, EI, DP edo DI agertzen denean, idatzi zein aldagai ordezkatu den eta zein termino jarri den haren lekuan. Ondoren egiaztatu agerraldi libreak bakarrik aldatu direla eta ez dela aldagairik harrapatu.",
      "<strong>Freskotasuna bereiz egiaztatu.</strong> EP edo GEP lerro batean, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> edo <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0300.svg\" alt=\"u_1,dots,u_n\" style=\"width:4.697em;height:1.001em\" loading=\"lazy\"> ez da aurreko lerroetan agertu behar. Baldintza hori ez dago formularen barruan: dedukzio osoaren historiari buruzko alboko baldintza da.",
      "<strong>Helburua nola ixten den esan.</strong> Zuzeneko itxieran helburuaren formula bera lortzen da; kontraesanezkoan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0308.svg\" alt=\"delta\" style=\"width:0.766em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0309.svg\" alt=\"not delta\" style=\"width:1.539em;height:1.001em\" loading=\"lazy\">; baldintzazkoan aurrekari-hipotesitik ondorengoa; orokortzean kasu arbitrarioa, aldagaia kanpoko lerroetan libre ez dagoela. Itxitako emaitza maila batean gora erabilgarri bihurtzen da; barruko hipotesiak ez.",
      "<strong>Azken maila egiaztatu.</strong> Dedukzio osoan lehen helburua itxita geratu behar da, eta emaitza ez da aldi baterako hipotesi edo aldagai kritiko debekatu baten menpe geratu behar. Orduan bakarrik irakur daiteke azken <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0294.svg\" alt=\"tack\" style=\"width:0.918em;height:1.001em\" loading=\"lazy\"> baieztapena."
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
     "html": "TNDk, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0310.svg\" alt=\"alpha or not alpha\" style=\"width:3.752em;height:1.001em\" loading=\"lazy\">, ez du premisarik. Bere justifikazioak bi kontraesanezko barruti garbi eta habiaratu ditu: kanpoan disjuntzioaren ezeztapena suposatzen da; barruan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> suposatzen da. Egitura hori Frederic-en <code>subproof</code>, <code>assume</code> eta <code>step</code> osagaiekin informaziorik galdu gabe adieraz daiteke."
    },
    {
     "mota": "irudia",
     "src": "media/irudiak/00aa_02logika/i001.svg",
     "oina": null,
     "zabalera": 286
    },
    {
     "mota": "testua",
     "html": "<code>RAA 2-4</code> eta <code>RAA 1-7</code> etiketek ez dute erregela primitibo berri bat eransten. Mosterinen eraikuntza-erregelak baimentzen duen kontraesanezko helburu-itxiera bistaratzen dute: barruko kontraesanetik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">, eta kanpoko kontraesanetik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0310.svg\" alt=\"alpha or not alpha\" style=\"width:3.752em;height:1.001em\" loading=\"lazy\">."
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
       "html": "Mosterinen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0273.svg\" alt=\"Lambda x alpha\" style=\"width:2.417em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0276.svg\" alt=\"V x alpha\" style=\"width:2.537em;height:1.001em\" loading=\"lazy\"> notazioak hemen, hurrenez hurren, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0274.svg\" alt=\"forall x alpha\" style=\"width:2.385em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0277.svg\" alt=\"exists x alpha\" style=\"width:2.258em;height:1.001em\" loading=\"lazy\"> dira. Haren <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0278.svg\" alt=\"S_x^t alpha\" style=\"width:2.251em;height:1.001em\" loading=\"lazy\"> adierazpena <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0279.svg\" alt=\"alpha[t/x]\" style=\"width:2.674em;height:1.001em\" loading=\"lazy\"> gisa idatziko dugu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">-n <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ren agerraldi libreak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-z ordezkatzea, aldagai-harrapaketarik gabe. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0287.svg\" alt=\"iota x alpha\" style=\"width:2.024em;height:1.001em\" loading=\"lazy\"> deskribatzaileari eusten diogu."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Inferentzia-eskema batean marraren gaineko formulak premisak dira, eta azpikoa formula inferitua. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0312.svg\" alt=\"alpha, beta\" style=\"width:2.164em;height:1.001em\" loading=\"lazy\"> formulen metaalda-gaiak dira; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0313.svg\" alt=\"x,u\" style=\"width:2.050em;height:1.001em\" loading=\"lazy\"> aldagaiak eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\"> terminoa metahizkuntzako parametroak dira."
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
        "<strong>Errepikapena (R):</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0314.svg\" alt=\"frac(alpha, alpha)\" style=\"width:1.044em;height:1.001em\" loading=\"lazy\">.",
        "<strong>Modus ponens (MP):</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0315.svg\" alt=\"frac(alpha -&gt; beta quad alpha, beta)\" style=\"width:3.803em;height:1.031em\" loading=\"lazy\">.",
        "<strong>Modus tollens (MT):</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0316.svg\" alt=\"frac(alpha -&gt; beta quad not beta, not alpha)\" style=\"width:4.276em;height:1.001em\" loading=\"lazy\">.",
        "<strong>Ezeztapen bikoitza (DN):</strong> bi noranzkoak baimentzen dira, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0317.svg\" alt=\"frac(not not alpha, alpha)\" style=\"width:2.126em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0318.svg\" alt=\"frac(alpha, not not alpha)\" style=\"width:2.126em;height:1.001em\" loading=\"lazy\">."
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
        "<strong>Konjuntorearen sarrera (IC):</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0319.svg\" alt=\"frac(alpha quad beta, alpha and beta)\" style=\"width:2.390em;height:1.031em\" loading=\"lazy\">.",
        "<strong>Konjuntorearen ezabapena (EC):</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0320.svg\" alt=\"frac(alpha and beta, alpha)\" style=\"width:2.120em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0321.svg\" alt=\"frac(alpha and beta, beta)\" style=\"width:2.120em;height:1.031em\" loading=\"lazy\">.",
        "<strong>Disjuntorearen sarrera (ID):</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0322.svg\" alt=\"frac(alpha, alpha or beta)\" style=\"width:2.120em;height:1.031em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0323.svg\" alt=\"frac(alpha, beta or alpha)\" style=\"width:2.120em;height:1.031em\" loading=\"lazy\">.",
        "<strong>Disjuntorearen ezabapena (ED):</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0324.svg\" alt=\"frac(alpha or beta quad not alpha, beta)\" style=\"width:4.073em;height:1.031em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0325.svg\" alt=\"frac(alpha or beta quad not beta, alpha)\" style=\"width:4.006em;height:1.001em\" loading=\"lazy\">.",
        "<strong>Bikondizionalaren sarrera (IB):</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0326.svg\" alt=\"frac(alpha -&gt; beta quad beta -&gt; alpha, alpha &lt;-&gt; beta)\" style=\"width:5.148em;height:1.031em\" loading=\"lazy\">.",
        "<strong>Bikondizionalaren ezabapena (EB):</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0327.svg\" alt=\"frac(alpha &lt;-&gt; beta, alpha -&gt; beta)\" style=\"width:2.390em;height:1.031em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0328.svg\" alt=\"frac(alpha &lt;-&gt; beta, beta -&gt; alpha)\" style=\"width:2.390em;height:1.031em\" loading=\"lazy\">."
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
        "<strong>Partikularizatzailearen sarrera (IP):</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0329.svg\" alt=\"frac(alpha[t/x], exists x alpha)\" style=\"width:2.341em;height:1.031em\" loading=\"lazy\">.",
        "<strong>Orokortzailearen ezabapena (EG):</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0330.svg\" alt=\"frac(forall x alpha, alpha[t/x])\" style=\"width:2.341em;height:1.243em\" loading=\"lazy\">.",
        "<strong>Partikularizatzailearen ezabapen kritikoa (EP):</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0331.svg\" alt=\"frac(exists x alpha, alpha[u/x])\" style=\"width:2.372em;height:1.243em\" loading=\"lazy\">, non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aldagai bat den."
       ]
      },
      {
       "mota": "testua",
       "html": "EGn <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\"> edozein termino izan daiteke. EPn, aldiz, ordezkoa aldagai hutsa da; dedukzio batean erabili ahal izateko, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> <strong>aldagai kritikoa</strong> berria izan behar da, aurreko lerroetan agertu gabea. EP ez beste inferentzia-erregela guztiak <strong>normalak</strong> dira; EP da erregela kritikoa."
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
        "<strong>Berdintzailearen sarrera (II):</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0332.svg\" alt=\"frac(alpha[t/x], forall x (x = t -&gt; alpha))\" style=\"width:5.056em;height:1.106em\" loading=\"lazy\">, betiere <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> ez bada libre <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-n.",
        "<strong>Berdintzailearen ezabapena (EI):</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0333.svg\" alt=\"frac(forall x (x = t -&gt; alpha), alpha[t/x])\" style=\"width:5.056em;height:1.243em\" loading=\"lazy\">, baldintza berarekin.",
        "<strong>Deskribapen propioa (DP):</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0334.svg\" alt=\"frac(exists y forall x (alpha &lt;-&gt; x = y), alpha[(iota x alpha)/x])\" style=\"width:6.110em;height:1.243em\" loading=\"lazy\">, non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> ez den libre <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">-n.",
        "<strong>Deskribapen inpropioa (DI):</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0335.svg\" alt=\"frac(not exists y forall x (alpha &lt;-&gt; x = y), iota x alpha = iota z (z = z))\" style=\"width:6.651em;height:1.076em\" loading=\"lazy\">, non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> ez den libre <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">-n."
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
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0072.svg\" alt=\"forall x P(x)\" style=\"width:4.113em;height:1.001em\" loading=\"lazy\">-tik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0336.svg\" alt=\"(forall x P(x)) or x = y\" style=\"width:9.107em;height:1.001em\" loading=\"lazy\"> inferitzen da IDz.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0337.svg\" alt=\"forall y R(y)\" style=\"width:3.989em;height:1.001em\" loading=\"lazy\">-tik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0338.svg\" alt=\"R(f(c))\" style=\"width:4.121em;height:1.001em\" loading=\"lazy\"> inferitzen da EGz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\">-ren ordez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0265.svg\" alt=\"f(c)\" style=\"width:2.313em;height:1.001em\" loading=\"lazy\"> jarriz.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0339.svg\" alt=\"(c_1 = c_2 -&gt; R(c_1,x))\" style=\"width:10.524em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0340.svg\" alt=\"not R(c_1,x)\" style=\"width:4.995em;height:1.001em\" loading=\"lazy\">-tik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0341.svg\" alt=\"not(c_1 = c_2)\" style=\"width:5.483em;height:1.001em\" loading=\"lazy\"> inferitzen da MTz.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0342.svg\" alt=\"(forall x P(x) -&gt; P(a))\" style=\"width:9.233em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0343.svg\" alt=\"(P(a) -&gt; forall x P(x))\" style=\"width:9.233em;height:1.001em\" loading=\"lazy\">-tik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0344.svg\" alt=\"(forall x P(x) &lt;-&gt; P(a))\" style=\"width:9.233em;height:1.001em\" loading=\"lazy\"> inferitzen da IBz.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0345.svg\" alt=\"R(a,a) or a = iota x R(x,a)\" style=\"width:11.871em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0346.svg\" alt=\"not R(a,a)\" style=\"width:4.530em;height:1.001em\" loading=\"lazy\">-tik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0347.svg\" alt=\"a = iota x R(x,a)\" style=\"width:7.037em;height:1.001em\" loading=\"lazy\"> inferitzen da EDz.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0348.svg\" alt=\"forall x (x = f(c_1, dots, c_n) -&gt; x = k)\" style=\"width:15.117em;height:1.001em\" loading=\"lazy\">-tik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0349.svg\" alt=\"f(c_1, dots, c_n) = k\" style=\"width:8.112em;height:1.001em\" loading=\"lazy\"> inferitzen da EIz.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0350.svg\" alt=\"not exists y forall x (G(x,k) &lt;-&gt; x = y)\" style=\"width:12.777em;height:1.001em\" loading=\"lazy\">-tik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0351.svg\" alt=\"iota x G(x,k) = iota w (w = w)\" style=\"width:11.788em;height:1.001em\" loading=\"lazy\"> inferitzen da DIz."
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
        "<strong>Lerro galdetua:</strong> ezabatu gabeko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0299.svg\" alt=\"? alpha\" style=\"width:1.691em;height:1.001em\" loading=\"lazy\"> helburua."
       ]
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0352.svg\" alt=\"lambda\" style=\"width:0.886em;height:1.001em\" loading=\"lazy\"> metaalda-gaia edozein motatako lerroa izendatzeko erabil daiteke."
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
       "html": "Izan bedi <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> formalismoko sententzien multzo bat. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-tik abiatutako erdidedukzioa honako erregelen bidez lortutako lerro-segida finitua da:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> formularentzat <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0299.svg\" alt=\"? alpha\" style=\"width:1.691em;height:1.001em\" loading=\"lazy\"> helburu-lerroa ireki daiteke.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0353.svg\" alt=\"alpha in Gamma\" style=\"width:3.091em;height:1.001em\" loading=\"lazy\"> bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> premisa gisa idatz daiteke.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0299.svg\" alt=\"? alpha\" style=\"width:1.691em;height:1.001em\" loading=\"lazy\"> idatzita badago, haren hurrengo lerroan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> idatz daiteke: helburua kontraesanez frogatzeko aldi baterako hipotesia da.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0354.svg\" alt=\"? (alpha -&gt; beta)\" style=\"width:5.090em;height:1.001em\" loading=\"lazy\"> idatzita badago, haren hurrengo lerroan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> idatz daiteke: baldintzazko frogaren aurrekari-hipotesia da.",
        "Aurreko lerro erabilgarrietatik erregela normal baten bidez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> inferitzen bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> lerro berria idatz daiteke.",
        "EPren bidez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> inferitzen bada, lerro berria idatz daiteke soilik aldagai kritikoa aurreko lerro bakar batean ere agertzen ez bada.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0299.svg\" alt=\"? alpha\" style=\"width:1.691em;height:1.001em\" loading=\"lazy\"> irekitako azken helburua itxi, haren galdera-ikurra ezabatu eta ondoko lerro guztiak maila horretan marka daitezke lau egoeretako batean: (i) ondoko lerro erabilgarrietako bat <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> bera da; (ii) ondoko bi lerro erabilgarri elkarren ezeztapenak dira; (iii) <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0355.svg\" alt=\"alpha = (beta -&gt; gamma)\" style=\"width:6.556em;height:1.001em\" loading=\"lazy\"> eta ondoko lerro erabilgarrietako bat <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0356.svg\" alt=\"gamma\" style=\"width:0.872em;height:1.001em\" loading=\"lazy\"> da; edo (iv) <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0357.svg\" alt=\"alpha = forall x_1 dots x_n beta\" style=\"width:7.421em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0358.svg\" alt=\"x_1, dots, x_n\" style=\"width:4.697em;height:1.001em\" loading=\"lazy\"> ez dira libre helburua baino lehenagoko lerro erabilgarrietan, eta ondoko lerro erabilgarrietako bat <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\"> da."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-tik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">-ren <strong>dedukzioa</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-tik abiatutako erdidedukzio bat da, lehen lerroa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0299.svg\" alt=\"? alpha\" style=\"width:1.691em;height:1.001em\" loading=\"lazy\"> duena eta gainerako lerro guztiak markatuta dituena. Horrelako dedukzio bat badago, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-tik deduzigarria da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0291.svg\" alt=\"Gamma tack alpha\" style=\"width:3.026em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Premisarik gabeko dedukzioa duen formula <strong>teorema logikoa</strong> da; hori <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0359.svg\" alt=\"tack alpha\" style=\"width:1.981em;height:1.001em\" loading=\"lazy\"> bidez adierazten da. Zeinu hau erlazio sintaktikoa da: atal honetan ez da oraindik egia semantikorik edo eredu guztietako ondoriorik baieztatzen."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0291.svg\" alt=\"Gamma tack alpha\" style=\"width:3.026em;height:1.001em\" loading=\"lazy\"> baldin eta soilik baldin badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-ren azpimultzo finitu bat, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0360.svg\" alt=\"Delta subset.eq Gamma\" style=\"width:3.443em;height:1.001em\" loading=\"lazy\">, halakoa non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0361.svg\" alt=\"Delta tack alpha\" style=\"width:3.267em;height:1.001em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dedukzio oro lerro-segida finitua denez, bertan benetan erabilitako premisak ere finituki asko dira; haiek osatzen duten <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0362.svg\" alt=\"Delta\" style=\"width:1.175em;height:1.001em\" loading=\"lazy\"> azpimultzoak dedukzio bera baimentzen du. Alderantziz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0360.svg\" alt=\"Delta subset.eq Gamma\" style=\"width:3.443em;height:1.001em\" loading=\"lazy\"> bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0362.svg\" alt=\"Delta\" style=\"width:1.175em;height:1.001em\" loading=\"lazy\">-ko premisa oro <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-koa ere bada, eta dedukzio bera <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-tik irakur daiteke."
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
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0361.svg\" alt=\"Delta tack alpha\" style=\"width:3.267em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0360.svg\" alt=\"Delta subset.eq Gamma\" style=\"width:3.443em;height:1.001em\" loading=\"lazy\"> badira, orduan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0291.svg\" alt=\"Gamma tack alpha\" style=\"width:3.026em;height:1.001em\" loading=\"lazy\">.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0363.svg\" alt=\"alpha tack beta\" style=\"width:2.999em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0364.svg\" alt=\"beta tack gamma\" style=\"width:2.919em;height:1.001em\" loading=\"lazy\"> badira, orduan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0365.svg\" alt=\"alpha tack gamma\" style=\"width:2.963em;height:1.001em\" loading=\"lazy\">.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0359.svg\" alt=\"tack alpha\" style=\"width:1.981em;height:1.001em\" loading=\"lazy\"> bada, orduan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0291.svg\" alt=\"Gamma tack alpha\" style=\"width:3.026em;height:1.001em\" loading=\"lazy\"> edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-rentzat.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0366.svg\" alt=\"gamma_1, dots, gamma_n tack alpha\" style=\"width:6.664em;height:1.001em\" loading=\"lazy\"> bada, orduan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0367.svg\" alt=\"(gamma_1 and dots and gamma_n) tack alpha\" style=\"width:9.109em;height:1.001em\" loading=\"lazy\">."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lehenengoa premisen monotoniatik dator; bigarrena bi dedukzioak bata bestearen ondoren jarriz lortzen da; hirugarrenean premisa-multzo hutsa edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-ren azpimultzoa da. Laugarrenean, konjuntzio bakarra premisa gisa sartzen da, EC behin eta berriz aplikatuz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0368.svg\" alt=\"gamma_1, dots, gamma_n\" style=\"width:4.572em;height:1.001em\" loading=\"lazy\"> lerroak berreskuratzen dira, eta jatorrizko dedukzioaren gainerakoa errepikatzen da. Jatorriz premisa gisa sartzen zen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0369.svg\" alt=\"gamma_i\" style=\"width:1.203em;height:1.001em\" loading=\"lazy\"> bakoitza, orain, dagokion lerro berreskuratuaren errepikapen gisa sartzen da."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0370.svg\" alt=\"frac(not(alpha -&gt; beta), alpha and not beta) quad &quot;(NCC)&quot;\" style=\"width:8.160em;height:1.031em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0371.svg\" alt=\"not(alpha -&gt; beta)\" style=\"width:5.123em;height:1.001em\" loading=\"lazy\"> hartu premisatzat eta ireki <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0372.svg\" alt=\"alpha and not beta\" style=\"width:3.708em;height:1.001em\" loading=\"lazy\"> helburua. Kontraesanezko frogaren arabera, suposatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0373.svg\" alt=\"not(alpha and not beta)\" style=\"width:5.381em;height:1.001em\" loading=\"lazy\">. Ondoren ireki <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0374.svg\" alt=\"alpha -&gt; beta\" style=\"width:3.450em;height:1.001em\" loading=\"lazy\">: suposatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> eta, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\"> frogatzeko, suposatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0375.svg\" alt=\"not beta\" style=\"width:1.680em;height:1.001em\" loading=\"lazy\">. ICz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0372.svg\" alt=\"alpha and not beta\" style=\"width:3.708em;height:1.001em\" loading=\"lazy\"> lortzen da, kanpoko hipotesiaren kontra. Horrek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\"> azpihelburua ixten du, gero <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0374.svg\" alt=\"alpha -&gt; beta\" style=\"width:3.450em;height:1.001em\" loading=\"lazy\"> baldintzazko helburua, eta azken formula horrek hasierako premisarekin talka egiten du. Beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0372.svg\" alt=\"alpha and not beta\" style=\"width:3.708em;height:1.001em\" loading=\"lazy\">."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0376.svg\" alt=\"alpha or not alpha quad &quot;(TND; premisarik gabe)&quot;\" style=\"width:17.127em;height:1.001em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ireki <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0310.svg\" alt=\"alpha or not alpha\" style=\"width:3.752em;height:1.001em\" loading=\"lazy\"> helburua eta suposatu haren ezeztapena. Barruan, ireki <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> helburua eta suposatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\">; IDz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0310.svg\" alt=\"alpha or not alpha\" style=\"width:3.752em;height:1.001em\" loading=\"lazy\"> lortzen da, lehen hipotesiaren kontra, eta horrela <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> azpihelburua ixten da. ID berriz aplikatuta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0310.svg\" alt=\"alpha or not alpha\" style=\"width:3.752em;height:1.001em\" loading=\"lazy\"> lortzen da; kanpoko hipotesiarekin bigarren kontraesana eratzen du eta hasierako helburua ixten du. Ez da premisarik erabili."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0377.svg\" alt=\"frac(alpha -&gt; beta quad gamma -&gt; beta, (alpha or gamma) -&gt; beta) quad &quot;(IDA)&quot;\" style=\"width:9.294em;height:1.076em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0374.svg\" alt=\"alpha -&gt; beta\" style=\"width:3.450em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0378.svg\" alt=\"gamma -&gt; beta\" style=\"width:3.370em;height:1.001em\" loading=\"lazy\"> premisak. Baldintzazko frogaren barruan suposatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0379.svg\" alt=\"alpha or gamma\" style=\"width:2.900em;height:1.001em\" loading=\"lazy\">, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\"> frogatzeko suposatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0375.svg\" alt=\"not beta\" style=\"width:1.680em;height:1.001em\" loading=\"lazy\">. MTz, lehen premisatik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> eta bigarrenetik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0380.svg\" alt=\"not gamma\" style=\"width:1.644em;height:1.001em\" loading=\"lazy\"> ateratzen dira. EDk <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0379.svg\" alt=\"alpha or gamma\" style=\"width:2.900em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\">-tik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0356.svg\" alt=\"gamma\" style=\"width:0.872em;height:1.001em\" loading=\"lazy\"> ematen du; horrek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0380.svg\" alt=\"not gamma\" style=\"width:1.644em;height:1.001em\" loading=\"lazy\">-rekin kontraesana sortzen du. Hortaz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\">, eta ondoren <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0381.svg\" alt=\"(alpha or gamma) -&gt; beta\" style=\"width:6.299em;height:1.001em\" loading=\"lazy\">."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0382.svg\" alt=\"t = t quad &quot;(I; premisarik gabe)&quot;\" style=\"width:13.794em;height:1.001em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aukeratu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-n agertzen ez den <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aldagai berria. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0383.svg\" alt=\"x=t\" style=\"width:2.835em;height:1.001em\" loading=\"lazy\"> suposatuta, Rz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0383.svg\" alt=\"x=t\" style=\"width:2.835em;height:1.001em\" loading=\"lazy\"> errepika daiteke eta, baldintzazko froga itxita, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0384.svg\" alt=\"x=t -&gt; x=t\" style=\"width:7.261em;height:1.001em\" loading=\"lazy\"> lortzen da. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> beste lerro erabilgarrietan libre ez dagoenez, orokortu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0385.svg\" alt=\"forall x (x=t -&gt; x=t)\" style=\"width:9.595em;height:1.001em\" loading=\"lazy\">. EI aplikatuta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0386.svg\" alt=\"t=t\" style=\"width:2.591em;height:1.001em\" loading=\"lazy\"> lortzen da."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0387.svg\" alt=\"frac(t_1 = t_2, t_2 = t_1) quad &quot;(SI)&quot;\" style=\"width:5.773em;height:1.074em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0185.svg\" alt=\"t_1=t_2\" style=\"width:3.643em;height:1.001em\" loading=\"lazy\"> premisarekin, I erregelaz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0388.svg\" alt=\"t_2=t_2\" style=\"width:3.643em;height:1.001em\" loading=\"lazy\"> dugu. Aukeratu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0187.svg\" alt=\"t_2\" style=\"width:1.155em;height:1.001em\" loading=\"lazy\">-n agertzen ez den <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">: IIz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0389.svg\" alt=\"forall x (x=t_2 -&gt; t_2=x)\" style=\"width:10.647em;height:1.001em\" loading=\"lazy\"> lortzen da. EGz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ren ordez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0186.svg\" alt=\"t_1\" style=\"width:1.155em;height:1.001em\" loading=\"lazy\"> jarrita, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0390.svg\" alt=\"t_1=t_2 -&gt; t_2=t_1\" style=\"width:8.876em;height:1.001em\" loading=\"lazy\">; MPz eta premisaz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0391.svg\" alt=\"t_2=t_1\" style=\"width:3.643em;height:1.001em\" loading=\"lazy\">."
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
       "html": "Oinarrizko eskema <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0392.svg\" alt=\"frac(t_1=t_2 quad t_2=t_3, t_1=t_3)\" style=\"width:5.673em;height:1.087em\" loading=\"lazy\"> da. Simetria esplizituki erabili gabe idatzitako beste hiru orientazioak ere TI izenpean hartzen dira: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0393.svg\" alt=\"frac(t_1=t_2 quad t_3=t_2, t_1=t_3)\" style=\"width:5.673em;height:1.087em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0394.svg\" alt=\"frac(t_2=t_1 quad t_2=t_3, t_1=t_3)\" style=\"width:5.673em;height:1.087em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0395.svg\" alt=\"frac(t_2=t_1 quad t_3=t_2, t_1=t_3)\" style=\"width:5.673em;height:1.087em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lehen eskemarako, hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0185.svg\" alt=\"t_1=t_2\" style=\"width:3.643em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0396.svg\" alt=\"t_2=t_3\" style=\"width:3.643em;height:1.001em\" loading=\"lazy\">. Bigarren premisari II aplikatuta, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0187.svg\" alt=\"t_2\" style=\"width:1.155em;height:1.001em\" loading=\"lazy\">-n agertzen ez dela, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0397.svg\" alt=\"forall x (x=t_2 -&gt; x=t_3)\" style=\"width:10.647em;height:1.001em\" loading=\"lazy\"> lortzen da. EGz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0398.svg\" alt=\"t_1=t_2 -&gt; t_1=t_3\" style=\"width:8.876em;height:1.001em\" loading=\"lazy\">, eta MPz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0399.svg\" alt=\"t_1=t_3\" style=\"width:3.643em;height:1.001em\" loading=\"lazy\">. Beste hiru orientazioak modu berean justifikatzen dira, behar den berdintasunaren aldea SIz iraulita."
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
       "html": "Bi noranzkoetako erregela eratorriak dira: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0400.svg\" alt=\"frac(not forall x alpha, exists x not alpha)\" style=\"width:2.650em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0401.svg\" alt=\"frac(exists x not alpha, not forall x alpha)\" style=\"width:2.650em;height:1.001em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lehen noranzkoan, suposatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0402.svg\" alt=\"not forall x alpha\" style=\"width:3.157em;height:1.001em\" loading=\"lazy\"> eta ireki <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0403.svg\" alt=\"exists x not alpha\" style=\"width:3.030em;height:1.001em\" loading=\"lazy\"> helburua. Haren ezeztapena suposatuta, hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> arbitrarioa eta ireki <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> helburua. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> suposatuz, IPz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0403.svg\" alt=\"exists x not alpha\" style=\"width:3.030em;height:1.001em\" loading=\"lazy\"> lortzen da, kanpoko hipotesiaren kontra; beraz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> arbitrarioa denez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0274.svg\" alt=\"forall x alpha\" style=\"width:2.385em;height:1.001em\" loading=\"lazy\">, hasierako premisaren kontra. Hortaz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0403.svg\" alt=\"exists x not alpha\" style=\"width:3.030em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Bigarren noranzkoan, hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0403.svg\" alt=\"exists x not alpha\" style=\"width:3.030em;height:1.001em\" loading=\"lazy\"> eta suposatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0404.svg\" alt=\"not not forall x alpha\" style=\"width:3.930em;height:1.001em\" loading=\"lazy\">. DNz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0274.svg\" alt=\"forall x alpha\" style=\"width:2.385em;height:1.001em\" loading=\"lazy\">. EPz, aurreko lerroetan agertzen ez den <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> kritikoarekin, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0405.svg\" alt=\"not alpha[u/x]\" style=\"width:3.468em;height:1.001em\" loading=\"lazy\">; EGz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0406.svg\" alt=\"alpha[u/x]\" style=\"width:2.696em;height:1.001em\" loading=\"lazy\">. Kontraesanak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0402.svg\" alt=\"not forall x alpha\" style=\"width:3.157em;height:1.001em\" loading=\"lazy\"> helburua ixten du."
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
       "html": "Bi noranzkoetako erregela eratorriak dira: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0407.svg\" alt=\"frac(not exists x alpha, forall x not alpha)\" style=\"width:2.650em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0408.svg\" alt=\"frac(forall x not alpha, not exists x alpha)\" style=\"width:2.650em;height:1.001em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lehen noranzkoan, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0409.svg\" alt=\"not exists x alpha\" style=\"width:3.030em;height:1.001em\" loading=\"lazy\"> premisatik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0410.svg\" alt=\"forall x not alpha\" style=\"width:3.157em;height:1.001em\" loading=\"lazy\"> frogatzeko hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> arbitrarioa. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> helburuan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0411.svg\" alt=\"not not alpha\" style=\"width:2.496em;height:1.001em\" loading=\"lazy\"> suposatuz gero, DNz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> eta IPz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0277.svg\" alt=\"exists x alpha\" style=\"width:2.258em;height:1.001em\" loading=\"lazy\"> lortzen dira; premisaren kontraesana dela eta, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> eta gero <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0410.svg\" alt=\"forall x not alpha\" style=\"width:3.157em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Alderantziz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0410.svg\" alt=\"forall x not alpha\" style=\"width:3.157em;height:1.001em\" loading=\"lazy\"> premisatik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0409.svg\" alt=\"not exists x alpha\" style=\"width:3.030em;height:1.001em\" loading=\"lazy\"> frogatzeko, suposatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0412.svg\" alt=\"not not exists x alpha\" style=\"width:3.802em;height:1.001em\" loading=\"lazy\">. DNz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0277.svg\" alt=\"exists x alpha\" style=\"width:2.258em;height:1.001em\" loading=\"lazy\">; EPz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> kritiko berriarekin, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0406.svg\" alt=\"alpha[u/x]\" style=\"width:2.696em;height:1.001em\" loading=\"lazy\">; EGz premisa unibertsaletik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0405.svg\" alt=\"not alpha[u/x]\" style=\"width:3.468em;height:1.001em\" loading=\"lazy\">. Kontraesanak helburua ixten du."
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
     "html": "L03n landutako inferentzia-erregela eratorriek urrats bakarreko eskema orokorrak laburtzen dituzte. Atal honen hasieran, Mosterinek kuantifikatzaile bat baino gehiago batera tratatzen dituzten bost bertsio handi ematen ditu. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0358.svg\" alt=\"x_1, dots, x_n\" style=\"width:4.697em;height:1.001em\" loading=\"lazy\"> aldagai desberdinak dira, eta ordezkapen guztiak aldagai-harrapaketarik gabe ulertu behar dira."
    },
    {
     "mota": "oharra",
     "titulua": "Notazioa eta laburdurak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jatorrizko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0001.svg\" alt=\"Lambda\" style=\"width:1.014em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0002.svg\" alt=\"V\" style=\"width:1.133em;height:1.001em\" loading=\"lazy\"> zeinuak hemen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0003.svg\" alt=\"forall\" style=\"width:0.982em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0004.svg\" alt=\"exists\" style=\"width:0.854em;height:1.001em\" loading=\"lazy\"> gisa ematen dira. GIC, GEG, GIP, GEP eta GNP laburdurak jatorrizkoak dira. GEPn <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0413.svg\" alt=\"u_1, dots, u_n\" style=\"width:4.697em;height:1.001em\" loading=\"lazy\"> aldagai kritikoek elkarrekiko desberdinak izan behar dute, eta ezin dira aurreko lerroetan agertu. Ondoko ariketetan, lerro bakoitzaren zenbakia eta jatorrizko dedukzioaren ordena gorde dira; &quot;helburua&quot;, &quot;hipotesia&quot; eta &quot;premisa&quot; hitzek jatorrizko irismen-markak azaltzen dituzte."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0414.svg\" alt=\"frac(alpha_1 quad dots quad alpha_n, alpha_1 and dots and alpha_n) quad &quot;(GIC)&quot;\" style=\"width:9.163em;height:1.081em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "Aurretik erabilgarri dauden <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0415.svg\" alt=\"alpha_1, dots, alpha_n\" style=\"width:4.855em;height:1.001em\" loading=\"lazy\"> formulak konjuntzio bakarrean biltzen ditu."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0416.svg\" alt=\"frac(forall x_1 dots x_n alpha, alpha[t_1/x_1, dots, t_n/x_n]) quad &quot;(GEG)&quot;\" style=\"width:9.913em;height:1.727em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "Orokortzaile sorta aldi berean instantziatzen da, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0417.svg\" alt=\"x_i\" style=\"width:1.265em;height:1.001em\" loading=\"lazy\"> bakoitzaren ordez dagokion <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0418.svg\" alt=\"t_i\" style=\"width:1.021em;height:1.001em\" loading=\"lazy\"> terminoa jarriz."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0419.svg\" alt=\"frac(alpha[t_1/x_1, dots, t_n/x_n], exists x_1 dots x_n alpha) quad &quot;(GIP)&quot;\" style=\"width:9.422em;height:1.595em\" loading=\"lazy\">"
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0420.svg\" alt=\"frac(exists x_1 dots x_n alpha, alpha[u_1/x_1, dots, u_n/x_n]) quad &quot;(GEP)&quot;\" style=\"width:9.855em;height:1.727em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0413.svg\" alt=\"u_1, dots, u_n\" style=\"width:4.697em;height:1.001em\" loading=\"lazy\"> aldagai kritiko berriak eta elkarren artean desberdinak dira. Baldintza horrek existentzialen lekukoak ez identifikatzea eta aurreko informaziorik ez eranstea bermatzen du."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0421.svg\" alt=\"frac(not exists x_1 dots x_n alpha, forall x_1 dots x_n not alpha) quad &quot;(GNP)&quot;\" style=\"width:9.473em;height:1.081em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0422.svg\" alt=\"frac(forall x_1 dots x_n not alpha, not exists x_1 dots x_n alpha) quad &quot;(GNP)&quot;\" style=\"width:9.473em;height:1.081em\" loading=\"lazy\">"
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
       "html": "<strong>1. ariketa.</strong> Izan bedi <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0423.svg\" alt=\"alpha_1 = forall x (alpha -&gt; alpha)\" style=\"width:8.639em;height:1.001em\" loading=\"lazy\">. Frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0424.svg\" alt=\"tack alpha_1\" style=\"width:2.507em;height:1.001em\" loading=\"lazy\">. Hemen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> ez da formula bakar baten izena, formula guztietarako baliagarria den eskema baizik."
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
       "src": "media/irudiak/00aa_02logika/i002.svg",
       "oina": null,
       "zabalera": 332
      },
      {
       "mota": "testua",
       "html": "4. lerroarekin 2. helburua ixten da; baldintzazko frogaren ondoren, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> ez dago kanpoko premisetan libre, eta 1. lerroa orokortuz ixten da."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0426.svg\" alt=\"forall x (alpha -&gt; alpha)\" style=\"width:5.828em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>2.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0427.svg\" alt=\"alpha -&gt; alpha\" style=\"width:3.494em;height:1.001em\" loading=\"lazy\"> — elementu arbitrario baten instantziari dagokion azpihelburua.",
        "<strong>3.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> — 2. lerroko baldintzaren aurrekaria, hipotesi gisa.",
        "<strong>4.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> — R, 3."
       ]
      },
      {
       "mota": "testua",
       "html": "4. lerroak 2. lerroko baldintzazko helburua ixten du; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> arbitrarioa denez, emaitza orokortu eta 1. lerroa ixten da. Ez da premisarik erabili."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>2. ariketa.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0428.svg\" alt=\"alpha_1 = forall x y (R(x,y) or R(y,x))\" style=\"width:14.412em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0429.svg\" alt=\"alpha_2 = forall x R(x,x)\" style=\"width:8.102em;height:1.001em\" loading=\"lazy\"> izanik, frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0430.svg\" alt=\"alpha_1 tack alpha_2\" style=\"width:4.095em;height:1.001em\" loading=\"lazy\">."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>2. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "1. eta 4. lerroak <code>?</code> helburuak dira. 5.-6. lerroetako azpifroga kontraesanezkoa da; amaitzean <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> arbitrarioaren emaitza orokortzen da."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i003.svg",
       "oina": null,
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
        "<strong>1.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0431.svg\" alt=\"forall x R(x,x)\" style=\"width:5.291em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>2.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0432.svg\" alt=\"forall x y (R(x,y) or R(y,x))\" style=\"width:11.600em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>3.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0433.svg\" alt=\"R(x,x) or R(x,x)\" style=\"width:8.791em;height:1.001em\" loading=\"lazy\"> — GEG, 2.",
        "<strong>4.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0434.svg\" alt=\"R(x,x)\" style=\"width:3.858em;height:1.001em\" loading=\"lazy\"> — helburua, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> arbitrarioarentzat.",
        "<strong>5.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0435.svg\" alt=\"not R(x,x)\" style=\"width:4.630em;height:1.001em\" loading=\"lazy\"> — 4. lerroko kontraesanezko hipotesia.",
        "<strong>6.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0434.svg\" alt=\"R(x,x)\" style=\"width:3.858em;height:1.001em\" loading=\"lazy\"> — ED, 3 eta 5."
       ]
      },
      {
       "mota": "testua",
       "html": "5. eta 6. lerroek 4. helburua ixten dute; gero <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-rekiko orokortzeak 1. lerroa ematen du."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>3. ariketa.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0436.svg\" alt=\"alpha_1 = forall x (P(x) -&gt; Q(x))\" style=\"width:12.105em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0437.svg\" alt=\"alpha_2 = (exists x P(x) -&gt; exists x Q(x))\" style=\"width:13.284em;height:1.001em\" loading=\"lazy\"> izanik, frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0430.svg\" alt=\"alpha_1 tack alpha_2\" style=\"width:4.095em;height:1.001em\" loading=\"lazy\">."
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
       "src": "media/irudiak/00aa_02logika/i004.svg",
       "oina": null,
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
        "<strong>1.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0438.svg\" alt=\"exists x P(x) -&gt; exists x Q(x)\" style=\"width:9.572em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>2.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0439.svg\" alt=\"exists x P(x)\" style=\"width:3.985em;height:1.001em\" loading=\"lazy\"> — baldintzazko hipotesia.",
        "<strong>3.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0440.svg\" alt=\"P(u)\" style=\"width:2.679em;height:1.001em\" loading=\"lazy\"> — EP, 2; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aldagai kritiko berria da.",
        "<strong>4.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0068.svg\" alt=\"forall x (P(x) -&gt; Q(x))\" style=\"width:9.294em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>5.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0441.svg\" alt=\"P(u) -&gt; Q(u)\" style=\"width:6.959em;height:1.001em\" loading=\"lazy\"> — EG, 4.",
        "<strong>6.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0442.svg\" alt=\"Q(u)\" style=\"width:2.690em;height:1.001em\" loading=\"lazy\"> — MP, 5 eta 3.",
        "<strong>7.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0443.svg\" alt=\"exists x Q(x)\" style=\"width:3.996em;height:1.001em\" loading=\"lazy\"> — IP, 6."
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
       "html": "<strong>4. ariketa.</strong> Frogatu teorema logikoa dela <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0444.svg\" alt=\"alpha_1 = exists y (F(y) -&gt; forall x F(x))\" style=\"width:13.264em;height:1.001em\" loading=\"lazy\">."
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
       "src": "media/irudiak/00aa_02logika/i005.svg",
       "oina": null,
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
        "<strong>1.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0445.svg\" alt=\"exists y (F(y) -&gt; forall x F(x))\" style=\"width:10.453em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>2.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0446.svg\" alt=\"not exists y (F(y) -&gt; forall x F(x))\" style=\"width:11.225em;height:1.001em\" loading=\"lazy\"> — kontraesanezko hipotesia.",
        "<strong>3.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0447.svg\" alt=\"forall y not (F(y) -&gt; forall x F(x))\" style=\"width:11.352em;height:1.001em\" loading=\"lazy\"> — NP, 2.",
        "<strong>4.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0448.svg\" alt=\"forall y (F(y) and not forall x F(x))\" style=\"width:10.838em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>5.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0449.svg\" alt=\"not (F(y) -&gt; forall x F(x))\" style=\"width:9.981em;height:1.001em\" loading=\"lazy\"> — EG, 3.",
        "<strong>6.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0450.svg\" alt=\"F(y) and not forall x F(x)\" style=\"width:8.566em;height:1.001em\" loading=\"lazy\"> — NCC, 5.",
        "<strong>7.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0451.svg\" alt=\"forall x F(x)\" style=\"width:4.107em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>8.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0452.svg\" alt=\"F(x) and not forall x F(x)\" style=\"width:8.629em;height:1.001em\" loading=\"lazy\"> — EG, 4.",
        "<strong>9.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0453.svg\" alt=\"F(x)\" style=\"width:2.673em;height:1.001em\" loading=\"lazy\"> — EC, 8.",
        "<strong>10.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0452.svg\" alt=\"F(x) and not forall x F(x)\" style=\"width:8.629em;height:1.001em\" loading=\"lazy\"> — EG, 4.",
        "<strong>11.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0454.svg\" alt=\"not forall x F(x)\" style=\"width:4.879em;height:1.001em\" loading=\"lazy\"> — EC, 10."
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
       "html": "<strong>5. ariketa.</strong> Frogatu teorema logikoa dela <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0455.svg\" alt=\"alpha_1 = exists y (exists x F(x) -&gt; F(y))\" style=\"width:13.137em;height:1.001em\" loading=\"lazy\">."
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
       "src": "media/irudiak/00aa_02logika/i006.svg",
       "oina": null,
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
        "<strong>1.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0456.svg\" alt=\"exists y (exists x F(x) -&gt; F(y))\" style=\"width:10.325em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>2.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0457.svg\" alt=\"not exists y (exists x F(x) -&gt; F(y))\" style=\"width:11.098em;height:1.001em\" loading=\"lazy\"> — kontraesanezko hipotesia.",
        "<strong>3.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0458.svg\" alt=\"forall y not (exists x F(x) -&gt; F(y))\" style=\"width:11.225em;height:1.001em\" loading=\"lazy\"> — NP, 2.",
        "<strong>4.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0459.svg\" alt=\"not (exists x F(x) -&gt; F(y))\" style=\"width:9.854em;height:1.001em\" loading=\"lazy\"> — EG, 3.",
        "<strong>5.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0460.svg\" alt=\"exists x F(x) and not F(y)\" style=\"width:8.439em;height:1.001em\" loading=\"lazy\"> — NCC, 4.",
        "<strong>6.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0461.svg\" alt=\"exists x F(x)\" style=\"width:3.979em;height:1.001em\" loading=\"lazy\"> — EC, 5.",
        "<strong>7.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0462.svg\" alt=\"F(z)\" style=\"width:2.584em;height:1.001em\" loading=\"lazy\"> — EP, 6; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> aldagai kritikoa da.",
        "<strong>8.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0463.svg\" alt=\"exists x F(x) -&gt; F(z)\" style=\"width:8.154em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>9.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0462.svg\" alt=\"F(z)\" style=\"width:2.584em;height:1.001em\" loading=\"lazy\"> — R, 7.",
        "<strong>10.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0456.svg\" alt=\"exists y (exists x F(x) -&gt; F(y))\" style=\"width:10.325em;height:1.001em\" loading=\"lazy\"> — IP, 8."
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
       "html": "<strong>6. ariketa.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0464.svg\" alt=\"alpha_1 = exists x (R(x,x) and not R(x,x)) or forall x y (R(x,y) or R(y,x))\" style=\"width:27.259em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0429.svg\" alt=\"alpha_2 = forall x R(x,x)\" style=\"width:8.102em;height:1.001em\" loading=\"lazy\"> izanik, frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0430.svg\" alt=\"alpha_1 tack alpha_2\" style=\"width:4.095em;height:1.001em\" loading=\"lazy\">."
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
       "src": "media/irudiak/00aa_02logika/i007.svg",
       "oina": null,
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
        "<strong>1.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0431.svg\" alt=\"forall x R(x,x)\" style=\"width:5.291em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>2.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0434.svg\" alt=\"R(x,x)\" style=\"width:3.858em;height:1.001em\" loading=\"lazy\"> — <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> arbitrarioarentzako helburua.",
        "<strong>3.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0435.svg\" alt=\"not R(x,x)\" style=\"width:4.630em;height:1.001em\" loading=\"lazy\"> — kontraesanezko hipotesia.",
        "<strong>4.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0465.svg\" alt=\"exists x (R(x,x) and not R(x,x)) or forall x y (R(x,y) or R(y,x))\" style=\"width:24.448em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>5.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0466.svg\" alt=\"not exists x (R(x,x) and not R(x,x))\" style=\"width:12.543em;height:1.001em\" loading=\"lazy\"> — azpihelburua.",
        "<strong>6.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0467.svg\" alt=\"not not exists x (R(x,x) and not R(x,x))\" style=\"width:13.315em;height:1.001em\" loading=\"lazy\"> — kontraesanezko hipotesia.",
        "<strong>7.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0468.svg\" alt=\"exists x (R(x,x) and not R(x,x))\" style=\"width:11.771em;height:1.001em\" loading=\"lazy\"> — DN, 6.",
        "<strong>8.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0469.svg\" alt=\"R(u,u) and not R(u,u)\" style=\"width:9.564em;height:1.001em\" loading=\"lazy\"> — EP, 7; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> kritikoa.",
        "<strong>9.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0470.svg\" alt=\"R(u,u)\" style=\"width:3.858em;height:1.001em\" loading=\"lazy\"> — EC, 8.",
        "<strong>10.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0471.svg\" alt=\"not R(u,u)\" style=\"width:4.630em;height:1.001em\" loading=\"lazy\"> — EC, 8.",
        "<strong>11.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0432.svg\" alt=\"forall x y (R(x,y) or R(y,x))\" style=\"width:11.600em;height:1.001em\" loading=\"lazy\"> — ED, 4 eta 5.",
        "<strong>12.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0433.svg\" alt=\"R(x,x) or R(x,x)\" style=\"width:8.791em;height:1.001em\" loading=\"lazy\"> — GEG, 11.",
        "<strong>13.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0434.svg\" alt=\"R(x,x)\" style=\"width:3.858em;height:1.001em\" loading=\"lazy\"> — ED, 12 eta 3."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0472.svg\" alt=\"alpha_1 = forall x (exists y (L(y,c) and C(x,y)) -&gt; not forall y (L(y,m) -&gt; C(x,y)))\" style=\"width:29.769em;height:1.001em\" loading=\"lazy\">,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0473.svg\" alt=\"alpha_2 = exists x forall y (L(y,c) or L(y,m) -&gt; C(x,y))\" style=\"width:20.433em;height:1.001em\" loading=\"lazy\">,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0474.svg\" alt=\"alpha_3 = exists y (L(y,c) -&gt; forall x exists u C(x,u))\" style=\"width:16.694em;height:1.001em\" loading=\"lazy\">,"
      },
      {
       "mota": "testua",
       "html": "frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0475.svg\" alt=\"alpha_1, alpha_2 tack alpha_3\" style=\"width:5.877em;height:1.001em\" loading=\"lazy\">."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>7. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "<code>x_0</code> 3. lerroko EPren aldagai kritiko berria da. <code>w</code> 5. lerroko existentziala sartzeko aukeratutako terminoa da; 14.-19. lerroetan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> arbitrarioa da. <code>?</code> markak 1., 5., 14. eta 15. lerroetako helburuak dira."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i008.svg",
       "oina": null,
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
        "<strong>1.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0476.svg\" alt=\"exists y (L(y,c) -&gt; forall x exists u C(x,u))\" style=\"width:13.883em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>2.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0477.svg\" alt=\"exists x forall y (L(y,c) or L(y,m) -&gt; C(x,y))\" style=\"width:17.622em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>3.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0479.svg\" alt=\"forall y (L(y,c) or L(y,m) -&gt; C(x_0,y))\" style=\"width:16.842em;height:1.001em\" loading=\"lazy\"> — EP, 2; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0058.svg\" alt=\"x_0\" style=\"width:1.399em;height:1.001em\" loading=\"lazy\"> kritikoa.",
        "<strong>4.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0480.svg\" alt=\"L(w,c) or L(w,m) -&gt; C(x_0,w)\" style=\"width:15.268em;height:1.001em\" loading=\"lazy\"> — EG, 3.",
        "<strong>5.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0481.svg\" alt=\"L(w,c) -&gt; forall x exists u C(x,u)\" style=\"width:11.971em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>6.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0482.svg\" alt=\"L(w,c)\" style=\"width:3.778em;height:1.001em\" loading=\"lazy\"> — baldintzazko hipotesia.",
        "<strong>7.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0483.svg\" alt=\"L(w,c) or L(w,m)\" style=\"width:9.118em;height:1.001em\" loading=\"lazy\"> — ID, 6.",
        "<strong>8.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0484.svg\" alt=\"C(x_0,w)\" style=\"width:4.560em;height:1.001em\" loading=\"lazy\"> — MP, 4 eta 7.",
        "<strong>9.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0485.svg\" alt=\"L(w,c) and C(x_0,w)\" style=\"width:9.414em;height:1.001em\" loading=\"lazy\"> — IC, 6 eta 8.",
        "<strong>10.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0486.svg\" alt=\"exists y (L(y,c) and C(x_0,y))\" style=\"width:11.093em;height:1.001em\" loading=\"lazy\"> — IP, 9.",
        "<strong>11.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0487.svg\" alt=\"forall x (exists y (L(y,c) and C(x,y)) -&gt; not forall y (L(y,m) -&gt; C(x,y)))\" style=\"width:26.958em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>12.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0488.svg\" alt=\"exists y (L(y,c) and C(x_0,y)) -&gt; not forall y (L(y,m) -&gt; C(x_0,y))\" style=\"width:25.676em;height:1.001em\" loading=\"lazy\"> — EG, 11.",
        "<strong>13.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0489.svg\" alt=\"not forall y (L(y,m) -&gt; C(x_0,y))\" style=\"width:12.993em;height:1.001em\" loading=\"lazy\"> — MP, 12 eta 10.",
        "<strong>14.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0490.svg\" alt=\"forall y (L(y,m) -&gt; C(x_0,y))\" style=\"width:12.220em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>15.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0491.svg\" alt=\"L(y,m) -&gt; C(x_0,y)\" style=\"width:9.949em;height:1.001em\" loading=\"lazy\"> — <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> arbitrarioarentzako helburua.",
        "<strong>16.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0492.svg\" alt=\"L(y,m)\" style=\"width:4.031em;height:1.001em\" loading=\"lazy\"> — baldintzazko hipotesia.",
        "<strong>17.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0493.svg\" alt=\"L(y,c) or L(y,m)\" style=\"width:8.652em;height:1.001em\" loading=\"lazy\"> — ID, 16.",
        "<strong>18.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0494.svg\" alt=\"L(y,c) or L(y,m) -&gt; C(x_0,y)\" style=\"width:14.570em;height:1.001em\" loading=\"lazy\"> — EG, 3.",
        "<strong>19.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0495.svg\" alt=\"C(x_0,y)\" style=\"width:4.327em;height:1.001em\" loading=\"lazy\"> — MP, 18 eta 17.",
        "<strong>20.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0476.svg\" alt=\"exists y (L(y,c) -&gt; forall x exists u C(x,u))\" style=\"width:13.883em;height:1.001em\" loading=\"lazy\"> — IP, 5."
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
       "html": "<strong>8. ariketa.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0496.svg\" alt=\"alpha_1 = forall x y (exists u (R(x,u) and R(y,u)) -&gt; R(x,y))\" style=\"width:22.067em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0497.svg\" alt=\"alpha_2 = forall x exists y R(x,y)\" style=\"width:9.283em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0498.svg\" alt=\"alpha_3 = forall x y z (R(x,y) and R(y,z) -&gt; R(x,z))\" style=\"width:20.255em;height:1.001em\" loading=\"lazy\"> izanik, frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0475.svg\" alt=\"alpha_1, alpha_2 tack alpha_3\" style=\"width:5.877em;height:1.001em\" loading=\"lazy\">."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>8. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "1. eta 2. lerroak <code>?</code> helburu orokorra eta baldintzazkoa dira. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0499.svg\" alt=\"x,y,z\" style=\"width:3.076em;height:1.001em\" loading=\"lazy\"> arbitrarioak dira; <code>w</code> 8. lerroko EPren aldagai kritiko berria da."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i009.svg",
       "oina": null,
       "zabalera": 476
      },
      {
       "mota": "testua",
       "html": "22. lerroak 2. baldintza ixten du. <code>w</code> ez da ondorioan agertzen; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0499.svg\" alt=\"x,y,z\" style=\"width:3.076em;height:1.001em\" loading=\"lazy\"> arbitrarioen orokortzeak 1. helburua ematen du."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0500.svg\" alt=\"forall x y z (R(x,y) and R(y,z) -&gt; R(x,z))\" style=\"width:17.443em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>2.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0501.svg\" alt=\"R(x,y) and R(y,z) -&gt; R(x,z)\" style=\"width:13.936em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>3.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0502.svg\" alt=\"R(x,y) and R(y,z)\" style=\"width:8.577em;height:1.001em\" loading=\"lazy\"> — baldintzazko hipotesia.",
        "<strong>4.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0286.svg\" alt=\"R(x,y)\" style=\"width:3.795em;height:1.001em\" loading=\"lazy\"> — EC, 3.",
        "<strong>5.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0503.svg\" alt=\"R(y,z)\" style=\"width:3.706em;height:1.001em\" loading=\"lazy\"> — EC, 3.",
        "<strong>6.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0504.svg\" alt=\"forall x exists y R(x,y)\" style=\"width:6.472em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>7.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0505.svg\" alt=\"exists y R(z,y)\" style=\"width:4.949em;height:1.001em\" loading=\"lazy\"> — EG, 6.",
        "<strong>8.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0506.svg\" alt=\"R(z,w)\" style=\"width:3.939em;height:1.001em\" loading=\"lazy\"> — EP, 7; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0056.svg\" alt=\"w\" style=\"width:1.043em;height:1.001em\" loading=\"lazy\"> kritikoa.",
        "<strong>9.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0506.svg\" alt=\"R(z,w)\" style=\"width:3.939em;height:1.001em\" loading=\"lazy\"> — R, 8.",
        "<strong>10.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0507.svg\" alt=\"R(z,w) and R(z,w)\" style=\"width:8.954em;height:1.001em\" loading=\"lazy\"> — IC, 8 eta 9.",
        "<strong>11.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0508.svg\" alt=\"exists u (R(z,u) and R(z,u))\" style=\"width:10.820em;height:1.001em\" loading=\"lazy\"> — IP, 10.",
        "<strong>12.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0509.svg\" alt=\"forall x y (exists u (R(x,u) and R(y,u)) -&gt; R(x,y))\" style=\"width:19.256em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>13.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0510.svg\" alt=\"exists u (R(z,u) and R(z,u)) -&gt; R(z,z)\" style=\"width:16.090em;height:1.001em\" loading=\"lazy\"> — GEG, 12.",
        "<strong>14.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0511.svg\" alt=\"R(z,z)\" style=\"width:3.679em;height:1.001em\" loading=\"lazy\"> — MP, 13 eta 11.",
        "<strong>15.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0512.svg\" alt=\"R(z,z) and R(y,z)\" style=\"width:8.461em;height:1.001em\" loading=\"lazy\"> — IC, 14 eta 5.",
        "<strong>16.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0513.svg\" alt=\"exists u (R(z,u) and R(y,u))\" style=\"width:10.847em;height:1.001em\" loading=\"lazy\"> — IP, 15.",
        "<strong>17.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0514.svg\" alt=\"exists u (R(z,u) and R(y,u)) -&gt; R(z,y)\" style=\"width:16.143em;height:1.001em\" loading=\"lazy\"> — GEG, 12.",
        "<strong>18.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0515.svg\" alt=\"R(z,y)\" style=\"width:3.706em;height:1.001em\" loading=\"lazy\"> — MP, 17 eta 16.",
        "<strong>19.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0516.svg\" alt=\"R(x,y) and R(z,y)\" style=\"width:8.577em;height:1.001em\" loading=\"lazy\"> — IC, 4 eta 18.",
        "<strong>20.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0517.svg\" alt=\"exists u (R(x,u) and R(z,u))\" style=\"width:10.909em;height:1.001em\" loading=\"lazy\"> — IP, 19.",
        "<strong>21.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0518.svg\" alt=\"exists u (R(x,u) and R(z,u)) -&gt; R(x,z)\" style=\"width:16.268em;height:1.001em\" loading=\"lazy\"> — GEG, 12.",
        "<strong>22.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0200.svg\" alt=\"R(x,z)\" style=\"width:3.768em;height:1.001em\" loading=\"lazy\"> — MP, 21 eta 20."
       ]
      },
      {
       "mota": "testua",
       "html": "22. lerroak 2. baldintza ixten du; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0499.svg\" alt=\"x,y,z\" style=\"width:3.076em;height:1.001em\" loading=\"lazy\"> arbitrarioak direnez, 1. lerroa orokortzen da."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>9. ariketa.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0519.svg\" alt=\"alpha_1 = forall x (A(c,x) &lt;-&gt; H(x) and not A(x,x))\" style=\"width:18.918em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0520.svg\" alt=\"alpha_2 = H(c)\" style=\"width:5.505em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0521.svg\" alt=\"alpha_3 = not exists x A(c,x)\" style=\"width:8.577em;height:1.001em\" loading=\"lazy\"> izanik, frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0475.svg\" alt=\"alpha_1, alpha_2 tack alpha_3\" style=\"width:5.877em;height:1.001em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esanahi intuitiboan, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0522.svg\" alt=\"A(c,x)\" style=\"width:3.687em;height:1.001em\" loading=\"lazy\">-ek Carlosek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> bizarra kentzen diola eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0078.svg\" alt=\"H(x)\" style=\"width:2.826em;height:1.001em\" loading=\"lazy\">-ek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> Sitgesko biztanlea dela esan dezakete. Premisek Carlos bere buruari bizarra kentzen dion galdetzea paradoxa moduan erabiltzen dute, inori kentzen ez diola ondorioztatzeko."
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
       "html": "1. eta 7. lerroak <code>?</code> helburuak dira. 8.-10. lerroetako azpifroga kontraesanezkoak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0523.svg\" alt=\"A(c,c)\" style=\"width:3.555em;height:1.001em\" loading=\"lazy\"> ematen du; emaitza kanpoko 11.-12. lerroetan erabiltzen da, jatorrizko irismenaren arabera."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i010.svg",
       "oina": null,
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
        "<strong>1.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0524.svg\" alt=\"not exists x A(c,x)\" style=\"width:5.766em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>2.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0525.svg\" alt=\"forall x (A(c,x) &lt;-&gt; H(x) and not A(x,x))\" style=\"width:16.106em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>3.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0526.svg\" alt=\"H(c)\" style=\"width:2.694em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>4.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0527.svg\" alt=\"A(c,c) &lt;-&gt; H(c) and not A(c,c)\" style=\"width:13.244em;height:1.001em\" loading=\"lazy\"> — EG, 2.",
        "<strong>5.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0528.svg\" alt=\"A(c,c) -&gt; H(c) and not A(c,c)\" style=\"width:13.244em;height:1.001em\" loading=\"lazy\"> — EB, 4.",
        "<strong>6.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0529.svg\" alt=\"H(c) and not A(c,c) -&gt; A(c,c)\" style=\"width:13.244em;height:1.001em\" loading=\"lazy\"> — EB, 4.",
        "<strong>7.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0523.svg\" alt=\"A(c,c)\" style=\"width:3.555em;height:1.001em\" loading=\"lazy\"> — azpihelburua.",
        "<strong>8.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0530.svg\" alt=\"not A(c,c)\" style=\"width:4.328em;height:1.001em\" loading=\"lazy\"> — kontraesanezko hipotesia.",
        "<strong>9.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0531.svg\" alt=\"H(c) and not A(c,c)\" style=\"width:8.098em;height:1.001em\" loading=\"lazy\"> — IC, 3 eta 8.",
        "<strong>10.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0523.svg\" alt=\"A(c,c)\" style=\"width:3.555em;height:1.001em\" loading=\"lazy\"> — MP, 6 eta 9.",
        "<strong>11.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0531.svg\" alt=\"H(c) and not A(c,c)\" style=\"width:8.098em;height:1.001em\" loading=\"lazy\"> — MP, 5 eta 7.",
        "<strong>12.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0530.svg\" alt=\"not A(c,c)\" style=\"width:4.328em;height:1.001em\" loading=\"lazy\"> — EC, 11."
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
       "html": "<strong>10. ariketa.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0532.svg\" alt=\"alpha_1 = forall x (forall y (F(y) -&gt; R(x,y)) -&gt; forall y (P(y) -&gt; R(x,y)))\" style=\"width:27.278em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0533.svg\" alt=\"alpha_2 = exists x y (P(y) and not R(x,y))\" style=\"width:13.878em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0534.svg\" alt=\"alpha_3 = exists y (F(y) and not forall x R(x,y))\" style=\"width:14.644em;height:1.001em\" loading=\"lazy\"> izanik, frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0475.svg\" alt=\"alpha_1, alpha_2 tack alpha_3\" style=\"width:5.877em;height:1.001em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Irakurketa intuitibo batean, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0286.svg\" alt=\"R(x,y)\" style=\"width:3.795em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> mespretxatzen duela, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0535.svg\" alt=\"F(y)\" style=\"width:2.611em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> fanatikoa dela eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0536.svg\" alt=\"P(y)\" style=\"width:2.617em;height:1.001em\" loading=\"lazy\">-k politikaria dela esan dezakete. Dedukzioak baldintza unibertsalen ezeztapenak lekuko zehatz bihurtzen ditu."
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
       "src": "media/irudiak/00aa_02logika/i011.svg",
       "oina": null,
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
        "<strong>1.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0537.svg\" alt=\"exists y (F(y) and not forall x R(x,y))\" style=\"width:11.832em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>2.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0538.svg\" alt=\"forall x (forall y (F(y) -&gt; R(x,y)) -&gt; forall y (P(y) -&gt; R(x,y)))\" style=\"width:24.467em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>3.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0539.svg\" alt=\"exists x y (P(y) and not R(x,y))\" style=\"width:11.067em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>4.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0540.svg\" alt=\"P(u) and not R(w,u)\" style=\"width:8.556em;height:1.001em\" loading=\"lazy\"> — GEP, 3; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0541.svg\" alt=\"w,u\" style=\"width:2.220em;height:1.001em\" loading=\"lazy\"> aldagai kritikoak eta desberdinak.",
        "<strong>5.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0542.svg\" alt=\"forall y (F(y) -&gt; R(w,y)) -&gt; forall y (P(y) -&gt; R(w,y))\" style=\"width:22.473em;height:1.001em\" loading=\"lazy\"> — EG, 2.",
        "<strong>6.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0543.svg\" alt=\"not forall y (P(y) -&gt; R(w,y))\" style=\"width:11.217em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>7.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0544.svg\" alt=\"not not forall y (P(y) -&gt; R(w,y))\" style=\"width:11.989em;height:1.001em\" loading=\"lazy\"> — kontraesanezko hipotesia.",
        "<strong>8.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0545.svg\" alt=\"forall y (P(y) -&gt; R(w,y))\" style=\"width:10.444em;height:1.001em\" loading=\"lazy\"> — DN, 7.",
        "<strong>9.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0546.svg\" alt=\"P(u) -&gt; R(w,u)\" style=\"width:8.298em;height:1.001em\" loading=\"lazy\"> — EG, 8.",
        "<strong>10.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0440.svg\" alt=\"P(u)\" style=\"width:2.679em;height:1.001em\" loading=\"lazy\"> — EC, 4.",
        "<strong>11.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0547.svg\" alt=\"R(w,u)\" style=\"width:4.028em;height:1.001em\" loading=\"lazy\"> — MP, 9 eta 10.",
        "<strong>12.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0548.svg\" alt=\"not R(w,u)\" style=\"width:4.800em;height:1.001em\" loading=\"lazy\"> — EC, 4.",
        "<strong>13.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0549.svg\" alt=\"not forall y (F(y) -&gt; R(w,y))\" style=\"width:11.211em;height:1.001em\" loading=\"lazy\"> — MT, 5 eta 6.",
        "<strong>14.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0550.svg\" alt=\"exists y not (F(y) -&gt; R(w,y))\" style=\"width:11.083em;height:1.001em\" loading=\"lazy\"> — NG, 13.",
        "<strong>15.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0551.svg\" alt=\"not (F(y_0) -&gt; R(w,y_0))\" style=\"width:10.827em;height:1.001em\" loading=\"lazy\"> — EP, 14; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0552.svg\" alt=\"y_0\" style=\"width:1.304em;height:1.001em\" loading=\"lazy\"> kritikoa.",
        "<strong>16.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0553.svg\" alt=\"F(y_0) and not R(w,y_0)\" style=\"width:9.412em;height:1.001em\" loading=\"lazy\"> — NCC, 15.",
        "<strong>17.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0554.svg\" alt=\"F(y_0)\" style=\"width:3.104em;height:1.001em\" loading=\"lazy\"> — EC, 16.",
        "<strong>18.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0555.svg\" alt=\"not R(w,y_0)\" style=\"width:5.231em;height:1.001em\" loading=\"lazy\"> — EC, 16.",
        "<strong>19.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0556.svg\" alt=\"exists x not R(x,y_0)\" style=\"width:6.367em;height:1.001em\" loading=\"lazy\"> — IP, 18.",
        "<strong>20.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0557.svg\" alt=\"not forall x R(x,y_0)\" style=\"width:6.494em;height:1.001em\" loading=\"lazy\"> — NG, 19.",
        "<strong>21.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0558.svg\" alt=\"F(y_0) and not forall x R(x,y_0)\" style=\"width:10.675em;height:1.001em\" loading=\"lazy\"> — IC, 17 eta 20.",
        "<strong>22.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0537.svg\" alt=\"exists y (F(y) and not forall x R(x,y))\" style=\"width:11.832em;height:1.001em\" loading=\"lazy\"> — IP, 21."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0559.svg\" alt=\"alpha_1 = ((exists x P(x) -&gt; (exists x G(x) -&gt; forall x H(x))) &lt;-&gt; forall x y z ((P(x) and G(y)) -&gt; H(z)))\" style=\"width:37.633em;height:1.001em\" loading=\"lazy\">."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>11. ariketaren dedukzioa.</strong>"
      },
      {
       "mota": "testua",
       "html": "Idatz dezagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0560.svg\" alt=\"A = (exists x P(x) -&gt; (exists x G(x) -&gt; forall x H(x)))\" style=\"width:19.630em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0561.svg\" alt=\"B = forall x y z ((P(x) and G(y)) -&gt; H(z))\" style=\"width:17.565em;height:1.001em\" loading=\"lazy\">. <code>?</code> helburuak 1., 2., 4., 5., 14., 16., 18., 20. eta 21. lerroetan daude. <code>u</code> eta <code>w</code> 22.-23. lerroetako EP aplikazioen aldagai kritiko berri eta desberdinak dira."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i012.svg",
       "oina": null,
       "zabalera": 516
      },
      {
       "mota": "testua",
       "html": "13. lerroak 5., 4. eta 2. helburuak ixten ditu. 26. lerroak 21. eta 20. orokortzeak, 18. eta 16. baldintzak eta 14. noranzkoa ixten ditu; IBk bi noranzkoak 27. lerroan elkartzen ditu. <code>u,w</code> ez dira ondorioan esportatzen. Jar dezagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0560.svg\" alt=\"A = (exists x P(x) -&gt; (exists x G(x) -&gt; forall x H(x)))\" style=\"width:19.630em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0561.svg\" alt=\"B = forall x y z ((P(x) and G(y)) -&gt; H(z))\" style=\"width:17.565em;height:1.001em\" loading=\"lazy\">. Jatorrizko 27 urratsak:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0050.svg\" alt=\"A &lt;-&gt; B\" style=\"width:3.788em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>2.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0048.svg\" alt=\"A -&gt; B\" style=\"width:3.788em;height:1.001em\" loading=\"lazy\"> — lehen noranzkoaren helburua.",
        "<strong>3.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0045.svg\" alt=\"A\" style=\"width:1.079em;height:1.001em\" loading=\"lazy\"> — baldintzazko hipotesia.",
        "<strong>4.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0049.svg\" alt=\"B\" style=\"width:1.118em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>5.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0562.svg\" alt=\"(P(x) and G(y)) -&gt; H(z)\" style=\"width:11.605em;height:1.001em\" loading=\"lazy\"> — <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0499.svg\" alt=\"x,y,z\" style=\"width:3.076em;height:1.001em\" loading=\"lazy\"> arbitrarioentzako helburua.",
        "<strong>6.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0563.svg\" alt=\"P(x) and G(y)\" style=\"width:6.377em;height:1.001em\" loading=\"lazy\"> — baldintzazko hipotesia.",
        "<strong>7.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0066.svg\" alt=\"P(x)\" style=\"width:2.679em;height:1.001em\" loading=\"lazy\"> — EC, 6.",
        "<strong>8.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0439.svg\" alt=\"exists x P(x)\" style=\"width:3.985em;height:1.001em\" loading=\"lazy\"> — IP, 7.",
        "<strong>9.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0564.svg\" alt=\"exists x G(x) -&gt; forall x H(x)\" style=\"width:9.840em;height:1.001em\" loading=\"lazy\"> — MP, 3 eta 8.",
        "<strong>10.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0565.svg\" alt=\"G(y)\" style=\"width:2.621em;height:1.001em\" loading=\"lazy\"> — EC, 6.",
        "<strong>11.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0566.svg\" alt=\"exists x G(x)\" style=\"width:3.990em;height:1.001em\" loading=\"lazy\"> — IP, 10.",
        "<strong>12.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0567.svg\" alt=\"forall x H(x)\" style=\"width:4.260em;height:1.001em\" loading=\"lazy\"> — MP, 9 eta 11.",
        "<strong>13.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0568.svg\" alt=\"H(z)\" style=\"width:2.737em;height:1.001em\" loading=\"lazy\"> — EG, 12.",
        "<strong>14.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0569.svg\" alt=\"B -&gt; A\" style=\"width:3.788em;height:1.001em\" loading=\"lazy\"> — bigarren noranzkoaren helburua.",
        "<strong>15.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0049.svg\" alt=\"B\" style=\"width:1.118em;height:1.001em\" loading=\"lazy\"> — baldintzazko hipotesia.",
        "<strong>16.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0045.svg\" alt=\"A\" style=\"width:1.079em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>17.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0439.svg\" alt=\"exists x P(x)\" style=\"width:3.985em;height:1.001em\" loading=\"lazy\"> — baldintzazko hipotesia.",
        "<strong>18.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0564.svg\" alt=\"exists x G(x) -&gt; forall x H(x)\" style=\"width:9.840em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>19.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0566.svg\" alt=\"exists x G(x)\" style=\"width:3.990em;height:1.001em\" loading=\"lazy\"> — baldintzazko hipotesia.",
        "<strong>20.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0567.svg\" alt=\"forall x H(x)\" style=\"width:4.260em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>21.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0078.svg\" alt=\"H(x)\" style=\"width:2.826em;height:1.001em\" loading=\"lazy\"> — <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> arbitrarioarentzako helburua.",
        "<strong>22.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0440.svg\" alt=\"P(u)\" style=\"width:2.679em;height:1.001em\" loading=\"lazy\"> — EP, 17; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> kritikoa.",
        "<strong>23.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0570.svg\" alt=\"G(w)\" style=\"width:2.854em;height:1.001em\" loading=\"lazy\"> — EP, 19; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0056.svg\" alt=\"w\" style=\"width:1.043em;height:1.001em\" loading=\"lazy\"> kritikoa eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-tik desberdina.",
        "<strong>24.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0571.svg\" alt=\"P(u) and G(w)\" style=\"width:6.610em;height:1.001em\" loading=\"lazy\"> — IC, 22 eta 23.",
        "<strong>25.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0572.svg\" alt=\"(P(u) and G(w)) -&gt; H(x)\" style=\"width:11.927em;height:1.001em\" loading=\"lazy\"> — GEG, 15.",
        "<strong>26.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0078.svg\" alt=\"H(x)\" style=\"width:2.826em;height:1.001em\" loading=\"lazy\"> — MP, 25 eta 24.",
        "<strong>27.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0050.svg\" alt=\"A &lt;-&gt; B\" style=\"width:3.788em;height:1.001em\" loading=\"lazy\"> — IB, 2 eta 14."
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
       "html": "<strong>12. ariketa.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0573.svg\" alt=\"alpha_1 = forall x ((B(x) or N(x)) and not (B(x) and N(x)))\" style=\"width:21.964em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0574.svg\" alt=\"alpha_2 = forall x (f(x) = a -&gt; B(x))\" style=\"width:14.020em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0575.svg\" alt=\"alpha_3 = f(a) = a\" style=\"width:7.363em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0576.svg\" alt=\"alpha_4 = not forall x N(x)\" style=\"width:7.843em;height:1.001em\" loading=\"lazy\"> izanik, frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0577.svg\" alt=\"alpha_1, alpha_2, alpha_3 tack alpha_4\" style=\"width:7.659em;height:1.001em\" loading=\"lazy\">."
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
       "src": "media/irudiak/00aa_02logika/i013.svg",
       "oina": null,
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
        "<strong>1.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0578.svg\" alt=\"not forall x N(x)\" style=\"width:5.032em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>2.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0579.svg\" alt=\"not not forall x N(x)\" style=\"width:5.804em;height:1.001em\" loading=\"lazy\"> — kontraesanezko hipotesia.",
        "<strong>3.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0580.svg\" alt=\"forall x N(x)\" style=\"width:4.260em;height:1.001em\" loading=\"lazy\"> — DN, 2.",
        "<strong>4.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0088.svg\" alt=\"N(a)\" style=\"width:2.776em;height:1.001em\" loading=\"lazy\"> — EG, 3.",
        "<strong>5.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0581.svg\" alt=\"forall x (f(x) = a -&gt; B(x))\" style=\"width:11.208em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>6.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0582.svg\" alt=\"f(a) = a -&gt; B(a)\" style=\"width:8.774em;height:1.001em\" loading=\"lazy\"> — EG, 5.",
        "<strong>7.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0583.svg\" alt=\"f(a) = a\" style=\"width:4.552em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>8.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0585.svg\" alt=\"B(a)\" style=\"width:2.632em;height:1.001em\" loading=\"lazy\"> — MP, 6 eta 7.",
        "<strong>9.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0586.svg\" alt=\"forall x ((B(x) or N(x)) and not (B(x) and N(x)))\" style=\"width:19.153em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>10.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0587.svg\" alt=\"(B(a) or N(a)) and not (B(a) and N(a))\" style=\"width:16.619em;height:1.001em\" loading=\"lazy\"> — EG, 9.",
        "<strong>11.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0588.svg\" alt=\"not (B(a) and N(a))\" style=\"width:8.158em;height:1.001em\" loading=\"lazy\"> — EC, 10.",
        "<strong>12.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0589.svg\" alt=\"B(a) and N(a)\" style=\"width:6.485em;height:1.001em\" loading=\"lazy\"> — IC, 8 eta 4."
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
       "html": "<strong>13. ariketa.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0590.svg\" alt=\"alpha_1 = not exists x (forall y (y = a -&gt; P(y)) -&gt; H(x))\" style=\"width:19.653em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0591.svg\" alt=\"alpha_2 = (exists x not H(x) -&gt; not forall x (P(a) and not H(x)))\" style=\"width:20.618em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0592.svg\" alt=\"alpha_3 = forall x H(x)\" style=\"width:7.071em;height:1.001em\" loading=\"lazy\"> izanik, frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0475.svg\" alt=\"alpha_1, alpha_2 tack alpha_3\" style=\"width:5.877em;height:1.001em\" loading=\"lazy\">."
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
       "src": "media/irudiak/00aa_02logika/i014.svg",
       "oina": null,
       "zabalera": 419
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> arbitrarioa da 6.-16. lerroetan; 11. lerroak 4. azpihelburua ixten du, eta 16. lerroaren orokortzeak 1. helburua ematen du."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0567.svg\" alt=\"forall x H(x)\" style=\"width:4.260em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>2.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0593.svg\" alt=\"not exists x (forall y (y = a -&gt; P(y)) -&gt; H(x))\" style=\"width:16.842em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>3.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0594.svg\" alt=\"exists x not H(x) -&gt; not forall x (P(a) and not H(x))\" style=\"width:16.906em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>4.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0595.svg\" alt=\"forall x (P(a) and not H(x))\" style=\"width:9.639em;height:1.001em\" loading=\"lazy\"> — azpihelburua.",
        "<strong>5.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0596.svg\" alt=\"forall x not (forall y (y = a -&gt; P(y)) -&gt; H(x))\" style=\"width:16.970em;height:1.001em\" loading=\"lazy\"> — NP, 2.",
        "<strong>6.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0597.svg\" alt=\"not (forall y (y = a -&gt; P(y)) -&gt; H(x))\" style=\"width:15.536em;height:1.001em\" loading=\"lazy\"> — EG, 5.",
        "<strong>7.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0598.svg\" alt=\"forall y (y = a -&gt; P(y)) and not H(x)\" style=\"width:14.121em;height:1.001em\" loading=\"lazy\"> — NCC, 6.",
        "<strong>8.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0599.svg\" alt=\"forall y (y = a -&gt; P(y))\" style=\"width:9.446em;height:1.001em\" loading=\"lazy\"> — EC, 7.",
        "<strong>9.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0111.svg\" alt=\"P(a)\" style=\"width:2.629em;height:1.001em\" loading=\"lazy\"> — EI, 8.",
        "<strong>10.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0600.svg\" alt=\"not H(x)\" style=\"width:3.599em;height:1.001em\" loading=\"lazy\"> — EC, 7.",
        "<strong>11.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0601.svg\" alt=\"P(a) and not H(x)\" style=\"width:7.304em;height:1.001em\" loading=\"lazy\"> — IC, 9 eta 10.",
        "<strong>12.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0602.svg\" alt=\"not not forall x (P(a) and not H(x))\" style=\"width:11.183em;height:1.001em\" loading=\"lazy\"> — DN, 4.",
        "<strong>13.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0603.svg\" alt=\"not exists x not H(x)\" style=\"width:5.677em;height:1.001em\" loading=\"lazy\"> — MT, 3 eta 12.",
        "<strong>14.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0604.svg\" alt=\"forall x not not H(x)\" style=\"width:5.804em;height:1.001em\" loading=\"lazy\"> — NP, 13.",
        "<strong>15.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0605.svg\" alt=\"not not H(x)\" style=\"width:4.371em;height:1.001em\" loading=\"lazy\"> — EG, 14.",
        "<strong>16.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0078.svg\" alt=\"H(x)\" style=\"width:2.826em;height:1.001em\" loading=\"lazy\"> — DN, 15."
       ]
      },
      {
       "mota": "testua",
       "html": "11. lerroak 4. orokortzea ixten du. 13.-16. urratsek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> arbitrarioarentzat <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0078.svg\" alt=\"H(x)\" style=\"width:2.826em;height:1.001em\" loading=\"lazy\"> ematen dute, eta azken orokortzeak 1. helburua ixten du."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0606.svg\" alt=\"alpha_1 = forall y z (forall x (x in y &lt;-&gt; x in z) -&gt; y = z)\" style=\"width:19.849em;height:1.001em\" loading=\"lazy\">,"
      },
      {
       "mota": "testua",
       "html": "frogatu"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0607.svg\" alt=\"alpha_2 = forall u w ((forall x (x in u &lt;-&gt; E(x) and alpha) and forall x (x in w &lt;-&gt; E(x) and alpha)) -&gt; u = w)\" style=\"width:36.154em;height:1.001em\" loading=\"lazy\">."
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
       "html": "Jatorrizko <code>?</code> markak 1., 2., 6., 7., 14. eta 18. lerroetan mantendu dira <code>helburua (?)</code> etiketarekin. 3., 15. eta 19. lerroak dira baldintzazko hipotesiak; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0608.svg\" alt=\"u,w,x\" style=\"width:3.397em;height:1.001em\" loading=\"lazy\"> arbitrarioen barrutiak azpifrogen habiaratzeak erakusten ditu."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i015.svg",
       "oina": null,
       "zabalera": 641
      },
      {
       "mota": "testua",
       "html": "17. eta 21. lerroek bi baldintzazko adarrak ixten dituzte; IBk 22. lerroa, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ren orokortzeak 6.a eta extensionalitateak 25. lerroa ematen ditu."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0610.svg\" alt=\"forall u w ((forall x (x in u &lt;-&gt; E(x) and alpha) and forall x (x in w &lt;-&gt; E(x) and alpha)) -&gt; u = w)\" style=\"width:33.343em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>2.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0611.svg\" alt=\"(forall x (x in u &lt;-&gt; E(x) and alpha) and forall x (x in w &lt;-&gt; E(x) and alpha)) -&gt; u = w\" style=\"width:30.176em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>3.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0612.svg\" alt=\"forall x (x in u &lt;-&gt; E(x) and alpha) and forall x (x in w &lt;-&gt; E(x) and alpha)\" style=\"width:24.435em;height:1.001em\" loading=\"lazy\"> — baldintzazko hipotesia.",
        "<strong>4.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0613.svg\" alt=\"forall x (x in u &lt;-&gt; E(x) and alpha)\" style=\"width:11.594em;height:1.001em\" loading=\"lazy\"> — EC, 3.",
        "<strong>5.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0614.svg\" alt=\"forall x (x in w &lt;-&gt; E(x) and alpha)\" style=\"width:11.765em;height:1.001em\" loading=\"lazy\"> — EC, 3.",
        "<strong>6.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0615.svg\" alt=\"forall x (x in u &lt;-&gt; x in w)\" style=\"width:9.997em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>7.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0616.svg\" alt=\"x in u &lt;-&gt; x in w\" style=\"width:7.662em;height:1.001em\" loading=\"lazy\"> — <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> arbitrarioarentzako helburua.",
        "<strong>8.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0617.svg\" alt=\"x in u &lt;-&gt; E(x) and alpha\" style=\"width:9.260em;height:1.001em\" loading=\"lazy\"> — EG, 4.",
        "<strong>9.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0618.svg\" alt=\"x in w &lt;-&gt; E(x) and alpha\" style=\"width:9.430em;height:1.001em\" loading=\"lazy\"> — EG, 5.",
        "<strong>10.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0619.svg\" alt=\"x in u -&gt; E(x) and alpha\" style=\"width:9.260em;height:1.001em\" loading=\"lazy\"> — EB, 8.",
        "<strong>11.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0620.svg\" alt=\"E(x) and alpha -&gt; x in u\" style=\"width:9.260em;height:1.001em\" loading=\"lazy\"> — EB, 8.",
        "<strong>12.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0621.svg\" alt=\"x in w -&gt; E(x) and alpha\" style=\"width:9.430em;height:1.001em\" loading=\"lazy\"> — EB, 9.",
        "<strong>13.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0622.svg\" alt=\"E(x) and alpha -&gt; x in w\" style=\"width:9.430em;height:1.001em\" loading=\"lazy\"> — EB, 9.",
        "<strong>14.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0623.svg\" alt=\"x in u -&gt; x in w\" style=\"width:7.662em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>15.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0624.svg\" alt=\"x in u\" style=\"width:2.951em;height:1.001em\" loading=\"lazy\"> — baldintzazko hipotesia.",
        "<strong>16.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0625.svg\" alt=\"E(x) and alpha\" style=\"width:4.719em;height:1.001em\" loading=\"lazy\"> — MP, 10 eta 15.",
        "<strong>17.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0626.svg\" alt=\"x in w\" style=\"width:3.121em;height:1.001em\" loading=\"lazy\"> — MP, 13 eta 16.",
        "<strong>18.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0627.svg\" alt=\"x in w -&gt; x in u\" style=\"width:7.662em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>19.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0626.svg\" alt=\"x in w\" style=\"width:3.121em;height:1.001em\" loading=\"lazy\"> — baldintzazko hipotesia.",
        "<strong>20.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0625.svg\" alt=\"E(x) and alpha\" style=\"width:4.719em;height:1.001em\" loading=\"lazy\"> — MP, 12 eta 19.",
        "<strong>21.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0624.svg\" alt=\"x in u\" style=\"width:2.951em;height:1.001em\" loading=\"lazy\"> — MP, 11 eta 20.",
        "<strong>22.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0616.svg\" alt=\"x in u &lt;-&gt; x in w\" style=\"width:7.662em;height:1.001em\" loading=\"lazy\"> — IB, 14 eta 18.",
        "<strong>23.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0628.svg\" alt=\"forall y z (forall x (x in y &lt;-&gt; x in z) -&gt; y = z)\" style=\"width:17.038em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>24.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0629.svg\" alt=\"forall x (x in u &lt;-&gt; x in w) -&gt; u = w\" style=\"width:14.837em;height:1.001em\" loading=\"lazy\"> — GEG, 23.",
        "<strong>25.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0630.svg\" alt=\"u = w\" style=\"width:3.249em;height:1.001em\" loading=\"lazy\"> — MP, 24 eta 6."
       ]
      },
      {
       "mota": "testua",
       "html": "17. eta 21. lerroek bi noranzkoak ixten dituzte; 22. lerroak 7. helburua eta gero 6. orokortzea ematen ditu. 25. lerroak 2. baldintza ixten du, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0609.svg\" alt=\"u,w\" style=\"width:2.220em;height:1.001em\" loading=\"lazy\"> arbitrarioen orokortzeak 1. lerroa."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>15. ariketa.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0631.svg\" alt=\"alpha_1 = (a = h(f(c,c)) or forall x R(x,x))\" style=\"width:17.162em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0632.svg\" alt=\"alpha_2 = forall x (f(c,x) = c)\" style=\"width:10.710em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0633.svg\" alt=\"alpha_3 = not (a = h(c))\" style=\"width:8.950em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0634.svg\" alt=\"alpha_4 = (not R(c,c) -&gt; R(c,c))\" style=\"width:13.262em;height:1.001em\" loading=\"lazy\"> izanik, frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0577.svg\" alt=\"alpha_1, alpha_2, alpha_3 tack alpha_4\" style=\"width:7.659em;height:1.001em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "15. ariketako idazkera",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jatorrizkoak terminoak kateatuta idazten ditu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0635.svg\" alt=\"h f c c\" style=\"width:2.610em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0636.svg\" alt=\"f c x\" style=\"width:2.075em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0637.svg\" alt=\"h c\" style=\"width:1.408em;height:1.001em\" loading=\"lazy\">. Hemen funtzio-aplikazioaren egitura parentesiekin esplizitatu da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0638.svg\" alt=\"h(f(c,c))\" style=\"width:4.926em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0639.svg\" alt=\"f(c,x)\" style=\"width:3.490em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0640.svg\" alt=\"h(c)\" style=\"width:2.309em;height:1.001em\" loading=\"lazy\">. Ez da eduki logikoa aldatu."
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
       "html": "1. lerroko <code>?</code> markak dedukzio osoaren helburua adierazten du. Jatorriz bezala, aurrekaria ez da erabili behar: 2.-10. lerroek zuzenean <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0641.svg\" alt=\"R(c,c)\" style=\"width:3.594em;height:1.001em\" loading=\"lazy\"> frogatzen dute."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i016.svg",
       "oina": null,
       "zabalera": 363
      },
      {
       "mota": "testua",
       "html": "Funtzio-aplikazioa parentesiekin idatzi da, baina jatorrizko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0635.svg\" alt=\"h f c c\" style=\"width:2.610em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0636.svg\" alt=\"f c x\" style=\"width:2.075em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0637.svg\" alt=\"h c\" style=\"width:1.408em;height:1.001em\" loading=\"lazy\"> terminoen egitura eta erregela-zenbakiak ez dira aldatu."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0642.svg\" alt=\"not R(c,c) -&gt; R(c,c)\" style=\"width:9.550em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>2.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0643.svg\" alt=\"a = h(f(c,c)) or forall x R(x,x)\" style=\"width:13.450em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>3.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0644.svg\" alt=\"forall x (f(c,x) = c)\" style=\"width:7.899em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>4.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0645.svg\" alt=\"not (a = h(c))\" style=\"width:6.138em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>5.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0646.svg\" alt=\"f(c,c) = c\" style=\"width:5.433em;height:1.001em\" loading=\"lazy\"> — EG, 3.",
        "<strong>6.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0647.svg\" alt=\"forall x (x = c -&gt; not (a = h(x)))\" style=\"width:13.143em;height:1.001em\" loading=\"lazy\"> — II, 4.",
        "<strong>7.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0648.svg\" alt=\"f(c,c) = c -&gt; not (a = h(f(c,c)))\" style=\"width:15.780em;height:1.001em\" loading=\"lazy\"> — EG, 6.",
        "<strong>8.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0649.svg\" alt=\"not (a = h(f(c,c)))\" style=\"width:8.756em;height:1.001em\" loading=\"lazy\"> — MP, 7 eta 5.",
        "<strong>9.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0431.svg\" alt=\"forall x R(x,x)\" style=\"width:5.291em;height:1.001em\" loading=\"lazy\"> — ED, 2 eta 8.",
        "<strong>10.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0641.svg\" alt=\"R(c,c)\" style=\"width:3.594em;height:1.001em\" loading=\"lazy\"> — EG, 9."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0650.svg\" alt=\"alpha_1 = (not (not (f(a) = f(b)) or not H(f(a))) -&gt; H(f(b)))\" style=\"width:25.121em;height:1.001em\" loading=\"lazy\">."
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
       "src": "media/irudiak/00aa_02logika/i017.svg",
       "oina": null,
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
        "<strong>1.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0651.svg\" alt=\"not (not (f(a) = f(b)) or not H(f(a))) -&gt; H(f(b))\" style=\"width:21.409em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>2.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0652.svg\" alt=\"not (not (f(a) = f(b)) or not H(f(a)))\" style=\"width:15.569em;height:1.001em\" loading=\"lazy\"> — baldintzazko hipotesia.",
        "<strong>3.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0653.svg\" alt=\"f(a) = f(b)\" style=\"width:6.025em;height:1.001em\" loading=\"lazy\"> — azpihelburua.",
        "<strong>4.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0654.svg\" alt=\"not (f(a) = f(b))\" style=\"width:7.698em;height:1.001em\" loading=\"lazy\"> — kontraesanezko hipotesia.",
        "<strong>5.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0655.svg\" alt=\"not (f(a) = f(b)) or not H(f(a))\" style=\"width:13.896em;height:1.001em\" loading=\"lazy\"> — ID, 4.",
        "<strong>6.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0652.svg\" alt=\"not (not (f(a) = f(b)) or not H(f(a)))\" style=\"width:15.569em;height:1.001em\" loading=\"lazy\"> — R, 2.",
        "<strong>7.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0656.svg\" alt=\"H(f(a))\" style=\"width:4.349em;height:1.001em\" loading=\"lazy\"> — azpihelburua.",
        "<strong>8.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0657.svg\" alt=\"not H(f(a))\" style=\"width:5.121em;height:1.001em\" loading=\"lazy\"> — kontraesanezko hipotesia.",
        "<strong>9.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0655.svg\" alt=\"not (f(a) = f(b)) or not H(f(a))\" style=\"width:13.896em;height:1.001em\" loading=\"lazy\"> — ID, 8.",
        "<strong>10.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0652.svg\" alt=\"not (not (f(a) = f(b)) or not H(f(a)))\" style=\"width:15.569em;height:1.001em\" loading=\"lazy\"> — R, 2.",
        "<strong>11.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0658.svg\" alt=\"forall x (x = f(a) -&gt; H(x))\" style=\"width:11.353em;height:1.001em\" loading=\"lazy\"> — II, 7.",
        "<strong>12.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0659.svg\" alt=\"f(b) = f(a) -&gt; H(f(b))\" style=\"width:11.865em;height:1.001em\" loading=\"lazy\"> — EG, 11.",
        "<strong>13.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0660.svg\" alt=\"f(b) = f(a)\" style=\"width:6.025em;height:1.001em\" loading=\"lazy\"> — SI, 3.",
        "<strong>14.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0661.svg\" alt=\"H(f(b))\" style=\"width:4.249em;height:1.001em\" loading=\"lazy\"> — MP, 12 eta 13."
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
       "html": "<strong>17. ariketa.</strong> Frogatu teorema logikoa dela <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0662.svg\" alt=\"alpha_1 = (P(a) &lt;-&gt; exists y (a = y and P(y)))\" style=\"width:16.736em;height:1.001em\" loading=\"lazy\">."
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
       "html": "1., 2. eta 7. lerroetako <code>?</code> markak helburuak dira; 3. eta 8. lerroak bi noranzkoetako baldintzazko hipotesiak dira. 9. lerroko EPn <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aldagai kritiko berria da eta 8. lerroko existentzialaren barrutian bakarrik erabiltzen da."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i018.svg",
       "oina": null,
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
        "<strong>1.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0663.svg\" alt=\"P(a) &lt;-&gt; exists y (a = y and P(y))\" style=\"width:13.024em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>2.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0664.svg\" alt=\"P(a) -&gt; exists y (a = y and P(y))\" style=\"width:13.024em;height:1.001em\" loading=\"lazy\"> — lehen noranzkoaren helburua.",
        "<strong>3.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0111.svg\" alt=\"P(a)\" style=\"width:2.629em;height:1.001em\" loading=\"lazy\"> — baldintzazko hipotesia.",
        "<strong>4.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0665.svg\" alt=\"a = a\" style=\"width:2.980em;height:1.001em\" loading=\"lazy\"> — I.",
        "<strong>5.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0666.svg\" alt=\"a = a and P(a)\" style=\"width:6.685em;height:1.001em\" loading=\"lazy\"> — IC, 4 eta 3.",
        "<strong>6.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0667.svg\" alt=\"exists y (a = y and P(y))\" style=\"width:8.804em;height:1.001em\" loading=\"lazy\"> — IP, 5.",
        "<strong>7.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0668.svg\" alt=\"exists y (a = y and P(y)) -&gt; P(a)\" style=\"width:13.024em;height:1.001em\" loading=\"lazy\"> — bigarren noranzkoaren helburua.",
        "<strong>8.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0667.svg\" alt=\"exists y (a = y and P(y))\" style=\"width:8.804em;height:1.001em\" loading=\"lazy\"> — baldintzazko hipotesia.",
        "<strong>9.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0669.svg\" alt=\"a = u and P(u)\" style=\"width:6.785em;height:1.001em\" loading=\"lazy\"> — EP, 8; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> kritikoa.",
        "<strong>10.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0440.svg\" alt=\"P(u)\" style=\"width:2.679em;height:1.001em\" loading=\"lazy\"> — EC, 9.",
        "<strong>11.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0670.svg\" alt=\"a = u\" style=\"width:3.029em;height:1.001em\" loading=\"lazy\"> — EC, 9.",
        "<strong>12.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0671.svg\" alt=\"forall x (x = u -&gt; P(x))\" style=\"width:9.683em;height:1.001em\" loading=\"lazy\"> — II, 10.",
        "<strong>13.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0672.svg\" alt=\"a = u -&gt; P(a)\" style=\"width:7.249em;height:1.001em\" loading=\"lazy\"> — EG, 12.",
        "<strong>14.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0111.svg\" alt=\"P(a)\" style=\"width:2.629em;height:1.001em\" loading=\"lazy\"> — MP, 13 eta 11.",
        "<strong>15.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0663.svg\" alt=\"P(a) &lt;-&gt; exists y (a = y and P(y))\" style=\"width:13.024em;height:1.001em\" loading=\"lazy\"> — IB, 2 eta 7."
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
       "html": "<strong>18. ariketa.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0673.svg\" alt=\"alpha_1 = forall x (x = c &lt;-&gt; not exists y (P(y) and M(y,x)))\" style=\"width:20.423em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0674.svg\" alt=\"alpha_2 = (not G(c) -&gt; not forall y (P(y) -&gt; not M(y,c)))\" style=\"width:20.648em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0675.svg\" alt=\"alpha_3 = G(c)\" style=\"width:5.363em;height:1.001em\" loading=\"lazy\"> izanik, frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0475.svg\" alt=\"alpha_1, alpha_2 tack alpha_3\" style=\"width:5.877em;height:1.001em\" loading=\"lazy\">."
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
       "html": "1. lerroko <code>?</code> helburua kontraesanez frogatzen da: 2. lerroan haren ezeztapen bikoitza irekitzen da. 11. lerroko EPn <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> kritikoa berria da eta ez da existentzialaren kanpoan orokortzen."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i019.svg",
       "oina": null,
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
        "<strong>1.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0676.svg\" alt=\"G(c)\" style=\"width:2.552em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>2.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0677.svg\" alt=\"not G(c)\" style=\"width:3.324em;height:1.001em\" loading=\"lazy\"> — kontraesanezko hipotesia.",
        "<strong>3.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0678.svg\" alt=\"forall x (x = c &lt;-&gt; not exists y (P(y) and M(y,x)))\" style=\"width:17.612em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>4.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0679.svg\" alt=\"c = c &lt;-&gt; not exists y (P(y) and M(y,c))\" style=\"width:15.013em;height:1.001em\" loading=\"lazy\"> — EG, 3.",
        "<strong>5.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0680.svg\" alt=\"c = c -&gt; not exists y (P(y) and M(y,c))\" style=\"width:15.013em;height:1.001em\" loading=\"lazy\"> — EB, 4.",
        "<strong>6.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0681.svg\" alt=\"c = c\" style=\"width:2.815em;height:1.001em\" loading=\"lazy\"> — I.",
        "<strong>7.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0682.svg\" alt=\"not exists y (P(y) and M(y,c))\" style=\"width:10.607em;height:1.001em\" loading=\"lazy\"> — MP, 5 eta 6.",
        "<strong>8.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0683.svg\" alt=\"not G(c) -&gt; not forall y (P(y) -&gt; not M(y,c))\" style=\"width:16.936em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>9.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0684.svg\" alt=\"not forall y (P(y) -&gt; not M(y,c))\" style=\"width:12.021em;height:1.001em\" loading=\"lazy\"> — MP, 8 eta 2.",
        "<strong>10.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0685.svg\" alt=\"exists y not (P(y) -&gt; not M(y,c))\" style=\"width:11.894em;height:1.001em\" loading=\"lazy\"> — NG, 9.",
        "<strong>11.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0686.svg\" alt=\"not (P(u) -&gt; not M(u,c))\" style=\"width:10.775em;height:1.001em\" loading=\"lazy\"> — EP, 10; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> kritikoa.",
        "<strong>12.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0687.svg\" alt=\"P(u) and not not M(u,c)\" style=\"width:9.360em;height:1.001em\" loading=\"lazy\"> — NCC, 11.",
        "<strong>13.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0688.svg\" alt=\"not not M(u,c)\" style=\"width:5.605em;height:1.001em\" loading=\"lazy\"> — EC, 12.",
        "<strong>14.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0440.svg\" alt=\"P(u)\" style=\"width:2.679em;height:1.001em\" loading=\"lazy\"> — EC, 12.",
        "<strong>15.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0689.svg\" alt=\"M(u,c)\" style=\"width:4.060em;height:1.001em\" loading=\"lazy\"> — DN, 13.",
        "<strong>16.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0690.svg\" alt=\"P(u) and M(u,c)\" style=\"width:7.816em;height:1.001em\" loading=\"lazy\"> — IC, 14 eta 15.",
        "<strong>17.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0691.svg\" alt=\"exists y (P(y) and M(y,c))\" style=\"width:9.835em;height:1.001em\" loading=\"lazy\"> — IP, 16."
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
       "html": "<strong>19. ariketa.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0692.svg\" alt=\"alpha_1 = forall y z (forall x (E(x,y) -&gt; E(x,z)) -&gt; y = z)\" style=\"width:21.684em;height:1.001em\" loading=\"lazy\"> izanik, frogatu"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0693.svg\" alt=\"alpha_2 = ((forall x (E(x,u) &lt;-&gt; forall v R(v,x)) and forall x (E(x,w) &lt;-&gt; exists y R(y,x))) -&gt; u = w)\" style=\"width:36.439em;height:1.001em\" loading=\"lazy\">."
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
       "html": "1., 7. eta 12. lerroetako <code>?</code> markek helburu habiaratuak adierazten dituzte. 2. eta 13. lerroak dira baldintzazko hipotesiak; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> arbitrarioa da 8.-17. lerroen barrutian, eta 15. lerroko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0055.svg\" alt=\"v\" style=\"width:0.785em;height:1.001em\" loading=\"lazy\"> existentzialki sartzeko lekuko librea da."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i020.svg",
       "oina": null,
       "zabalera": 624
      },
      {
       "mota": "testua",
       "html": "17. lerroak 12. baldintza ixten du; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ren orokortzeak 7. lerroa ematen du, eta 18. lerroak 2. hipotesiaren barrutia ixten du."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0694.svg\" alt=\"(forall x (E(x,u) &lt;-&gt; forall v R(v,x)) and forall x (E(x,w) &lt;-&gt; exists y R(y,x))) -&gt; u = w\" style=\"width:32.727em;height:1.001em\" loading=\"lazy\"> — helburua.",
        "<strong>2.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0695.svg\" alt=\"forall x (E(x,u) &lt;-&gt; forall v R(v,x)) and forall x (E(x,w) &lt;-&gt; exists y R(y,x))\" style=\"width:26.986em;height:1.001em\" loading=\"lazy\"> — baldintzazko hipotesia.",
        "<strong>3.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0696.svg\" alt=\"forall x (E(x,u) &lt;-&gt; forall v R(v,x))\" style=\"width:12.908em;height:1.001em\" loading=\"lazy\"> — EC, 2.",
        "<strong>4.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0697.svg\" alt=\"forall x (E(x,w) &lt;-&gt; exists y R(y,x))\" style=\"width:13.002em;height:1.001em\" loading=\"lazy\"> — EC, 2.",
        "<strong>5.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0698.svg\" alt=\"forall y z (forall x (E(x,y) -&gt; E(x,z)) -&gt; y = z)\" style=\"width:18.872em;height:1.001em\" loading=\"lazy\"> — premisa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">.",
        "<strong>6.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0699.svg\" alt=\"forall x (E(x,u) -&gt; E(x,w)) -&gt; u = w\" style=\"width:16.671em;height:1.001em\" loading=\"lazy\"> — GEG, 5.",
        "<strong>7.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0700.svg\" alt=\"forall x (E(x,u) -&gt; E(x,w))\" style=\"width:11.831em;height:1.001em\" loading=\"lazy\"> — azpihelburua.",
        "<strong>8.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0701.svg\" alt=\"E(x,u) &lt;-&gt; forall v R(v,x)\" style=\"width:10.574em;height:1.001em\" loading=\"lazy\"> — EG, 3.",
        "<strong>9.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0702.svg\" alt=\"E(x,u) -&gt; forall v R(v,x)\" style=\"width:10.574em;height:1.001em\" loading=\"lazy\"> — EB, 8.",
        "<strong>10.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0703.svg\" alt=\"E(x,w) &lt;-&gt; exists y R(y,x)\" style=\"width:10.667em;height:1.001em\" loading=\"lazy\"> — EG, 4.",
        "<strong>11.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0704.svg\" alt=\"exists y R(y,x) -&gt; E(x,w)\" style=\"width:10.667em;height:1.001em\" loading=\"lazy\"> — EB, 10.",
        "<strong>12.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0705.svg\" alt=\"E(x,u) -&gt; E(x,w)\" style=\"width:9.497em;height:1.001em\" loading=\"lazy\"> — <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> arbitrarioarentzako helburua.",
        "<strong>13.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0706.svg\" alt=\"E(x,u)\" style=\"width:3.868em;height:1.001em\" loading=\"lazy\"> — baldintzazko hipotesia.",
        "<strong>14.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0707.svg\" alt=\"forall v R(v,x)\" style=\"width:5.115em;height:1.001em\" loading=\"lazy\"> — MP, 9 eta 13.",
        "<strong>15.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0708.svg\" alt=\"R(v,x)\" style=\"width:3.770em;height:1.001em\" loading=\"lazy\"> — EG, 14.",
        "<strong>16.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0709.svg\" alt=\"exists y R(y,x)\" style=\"width:5.039em;height:1.001em\" loading=\"lazy\"> — IP, 15.",
        "<strong>17.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0710.svg\" alt=\"E(x,w)\" style=\"width:4.038em;height:1.001em\" loading=\"lazy\"> — MP, 11 eta 16.",
        "<strong>18.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0630.svg\" alt=\"u = w\" style=\"width:3.249em;height:1.001em\" loading=\"lazy\"> — MP, 6 eta 7."
       ]
      },
      {
       "mota": "testua",
       "html": "17. lerroak 12. baldintza ixten du eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-rekiko orokortzeak 7. lerroa ematen du. 18. lerroak hasierako baldintza ixten du."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>20. ariketa.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0711.svg\" alt=\"alpha_1 = forall x y u w ((f(x,u) = y and f(x,w) = y) -&gt; u = w)\" style=\"width:25.760em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0712.svg\" alt=\"alpha_2 = exists z forall x (f(x,z) = x and exists y f(x,y) = z)\" style=\"width:20.099em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0713.svg\" alt=\"alpha_3 = exists z forall w (forall x f(x,w) = x &lt;-&gt; w = z)\" style=\"width:18.716em;height:1.001em\" loading=\"lazy\"> izanik, frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0475.svg\" alt=\"alpha_1, alpha_2 tack alpha_3\" style=\"width:5.877em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Testuinguru aljebraikoan, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ek ezkerreko biderkadurarekiko eskuin-ezeztapena adierazten du; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-k elementu baten existentzia eta alderantzizkoen antzeko baldintza bat biltzen ditu; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-k eskuineko elementu neutro bakarra dagoela formalizatzen du."
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
       "html": "Mosterinen aurrizki trinkoa irakurterraz modernizatu da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0280.svg\" alt=\"f x y\" style=\"width:2.144em;height:1.001em\" loading=\"lazy\"> ordez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0284.svg\" alt=\"f(x,y)\" style=\"width:3.560em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0282.svg\" alt=\"P x y\" style=\"width:2.378em;height:1.001em\" loading=\"lazy\"> ordez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0038.svg\" alt=\"P(x,y)\" style=\"width:3.794em;height:1.001em\" loading=\"lazy\">, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0714.svg\" alt=\"Lambda,V,iota\" style=\"width:3.377em;height:1.001em\" loading=\"lazy\"> ordez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0715.svg\" alt=\"forall,exists,iota\" style=\"width:3.065em;height:1.001em\" loading=\"lazy\"> idazten dira. Erregela-laburdurak iturrian bezala gordetzen dira: <code>prem.</code>, <code>EG</code>, <code>EP</code>, <code>GEG</code>, <code>MP</code>, <code>IC</code>, <code>EC</code>, <code>IB</code>, <code>EB</code>, <code>II</code>, <code>IP</code>, <code>TI</code>, <code>SI</code>, <code>DN</code>, <code>DP</code>, <code>DI</code>, <code>R</code>, <code>MT</code> eta <code>GEP</code>. Dedukzio-tauletako <strong>M</strong> zutabeak irismen-maila erakusten du; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0716.svg\" alt=\"? phi\" style=\"width:1.707em;height:1.001em\" loading=\"lazy\"> lerroak frogatu beharreko azpihelburuak dira."
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
     "html": "L04ko 20. ariketako <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> notazioa mantentzen da; hemen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0717.svg\" alt=\"alpha_1,alpha_2 tack alpha_3\" style=\"width:5.877em;height:1.001em\" loading=\"lazy\"> dedukzioa soilik dator."
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
       "html": "Jatorrizko 1., 4., 5., 7. eta 13. lerroetako <code>?</code> helburu-markak etiketan mantendu dira. 3. lerroko EPn <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0718.svg\" alt=\"z_0\" style=\"width:1.275em;height:1.001em\" loading=\"lazy\"> kritikoa berria da; 4.-23. lerroen barruti osoan lekuko bera da, eta 24. lerroan IPz kanporatzen da."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i021.svg",
       "oina": null,
       "zabalera": 519
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0056.svg\" alt=\"w\" style=\"width:1.043em;height:1.001em\" loading=\"lazy\"> arbitrarioen barrutiak 4.-23. lerroetako barren bidez ikusten dira; 5. eta 13. noranzkoak IBz elkartu ondoren bakarrik askatzen da <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0718.svg\" alt=\"z_0\" style=\"width:1.275em;height:1.001em\" loading=\"lazy\">."
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
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0719.svg\" alt=\"? exists z forall w (forall x f(x,w)=x &lt;-&gt; w=z)\" style=\"width:16.645em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "2",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0720.svg\" alt=\"exists z forall x (f(x,z)=x and exists y f(x,y)=z)\" style=\"width:17.288em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "3",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0721.svg\" alt=\"forall x (f(x,z_0)=x and exists y f(x,y)=z_0)\" style=\"width:17.054em;height:1.001em\" loading=\"lazy\">",
         "EP, 2"
        ],
        [
         "4",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0722.svg\" alt=\"? forall w (forall x f(x,w)=x &lt;-&gt; w=z_0)\" style=\"width:15.919em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "5",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0723.svg\" alt=\"? w=z_0 -&gt; forall x f(x,w)=x\" style=\"width:13.414em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "6",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0724.svg\" alt=\"w=z_0\" style=\"width:3.652em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "7",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0725.svg\" alt=\"? forall x f(x,w)=x\" style=\"width:8.172em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "8",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0726.svg\" alt=\"f(x,z_0)=x and exists y f(x,y)=z_0\" style=\"width:14.720em;height:1.001em\" loading=\"lazy\">",
         "EG, 3"
        ],
        [
         "9",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0727.svg\" alt=\"f(x,z_0)=x\" style=\"width:6.231em;height:1.001em\" loading=\"lazy\">",
         "EC, 8"
        ],
        [
         "10",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0728.svg\" alt=\"forall u (u=z_0 -&gt; f(x,u)=x)\" style=\"width:13.235em;height:1.001em\" loading=\"lazy\">",
         "II, 9"
        ],
        [
         "11",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0729.svg\" alt=\"w=z_0 -&gt; f(x,w)=x\" style=\"width:11.241em;height:1.001em\" loading=\"lazy\">",
         "EG, 10"
        ],
        [
         "12",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0730.svg\" alt=\"f(x,w)=x\" style=\"width:5.999em;height:1.001em\" loading=\"lazy\">",
         "MP, 11, 6"
        ],
        [
         "13",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0731.svg\" alt=\"? forall x f(x,w)=x -&gt; w=z_0\" style=\"width:13.414em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "14",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0732.svg\" alt=\"forall x f(x,w)=x\" style=\"width:7.433em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "15",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0730.svg\" alt=\"f(x,w)=x\" style=\"width:5.999em;height:1.001em\" loading=\"lazy\">",
         "EG, 14"
        ],
        [
         "16",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0726.svg\" alt=\"f(x,z_0)=x and exists y f(x,y)=z_0\" style=\"width:14.720em;height:1.001em\" loading=\"lazy\">",
         "EG, 3"
        ],
        [
         "17",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0727.svg\" alt=\"f(x,z_0)=x\" style=\"width:6.231em;height:1.001em\" loading=\"lazy\">",
         "EC, 16"
        ],
        [
         "18",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0733.svg\" alt=\"forall x,y,u,w (f(x,u)=y and f(x,w)=y -&gt; u=w)\" style=\"width:23.593em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "19",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0734.svg\" alt=\"f(x,z_0)=x and f(x,w)=x -&gt; z_0=w\" style=\"width:18.549em;height:1.001em\" loading=\"lazy\">",
         "GEG, 18"
        ],
        [
         "20",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0735.svg\" alt=\"f(x,z_0)=x and f(x,w)=x\" style=\"width:13.307em;height:1.001em\" loading=\"lazy\">",
         "IC, 17, 15"
        ],
        [
         "21",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0736.svg\" alt=\"z_0=w\" style=\"width:3.652em;height:1.001em\" loading=\"lazy\">",
         "MP, 19, 20"
        ],
        [
         "22",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0724.svg\" alt=\"w=z_0\" style=\"width:3.652em;height:1.001em\" loading=\"lazy\">",
         "SI, 21"
        ],
        [
         "23",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0737.svg\" alt=\"forall x f(x,w)=x &lt;-&gt; w=z_0\" style=\"width:12.675em;height:1.001em\" loading=\"lazy\">",
         "IB, 13, 5"
        ],
        [
         "24",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0738.svg\" alt=\"exists z forall w (forall x f(x,w)=x &lt;-&gt; w=z)\" style=\"width:15.905em;height:1.001em\" loading=\"lazy\">",
         "IP, 4"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-k emandako <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0718.svg\" alt=\"z_0\" style=\"width:1.275em;height:1.001em\" loading=\"lazy\"> eskuin-identitatea dela erakusten da lehenik. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-en bakartasun-klausulak beste edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0056.svg\" alt=\"w\" style=\"width:1.043em;height:1.001em\" loading=\"lazy\"> harekin identifikatzen du; bi norabideak IBz lotu eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0718.svg\" alt=\"z_0\" style=\"width:1.275em;height:1.001em\" loading=\"lazy\"> existentzialki sartzen da."
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
     "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0739.svg\" alt=\"alpha_1=forall x,y,z f(f(x,y),z)=f(x,f(y,z))\" style=\"width:20.222em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0740.svg\" alt=\"alpha_2=forall x f(h,x)=k\" style=\"width:10.037em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0741.svg\" alt=\"alpha_3=forall x f(k,x)=x\" style=\"width:10.032em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0742.svg\" alt=\"alpha_4=forall x,y exists z f(x,z)=y\" style=\"width:12.253em;height:1.001em\" loading=\"lazy\">. Frogatu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0743.svg\" alt=\"alpha_1,alpha_2,alpha_3 tack alpha_4\" style=\"width:7.659em;height:1.001em\" loading=\"lazy\">."
    },
    {
     "mota": "oharra",
     "titulua": "Talde-teoriako irakurketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0744.svg\" alt=\"alpha_1,alpha_2,alpha_3\" style=\"width:5.042em;height:1.001em\" loading=\"lazy\"> talde-teoriaren axiomatizazio posible bat dira. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0745.svg\" alt=\"alpha_4\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-k eskuineko zatidura beti existitzen dela adierazten du."
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
       "html": "1. lerroko <code>?</code> markak helburu orokorra adierazten du. 5.-13. lerroetako barra <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0746.svg\" alt=\"x,y\" style=\"width:1.988em;height:1.001em\" loading=\"lazy\"> arbitrarioen barrutia da; ez da hipotesi gehigarri bat. Ez dago EP/GEPko aldagai kritikorik dedukzio honetan."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i022.svg",
       "oina": null,
       "zabalera": 381
      },
      {
       "mota": "testua",
       "html": "13. lerroko IPren lekukoa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0284.svg\" alt=\"f(x,y)\" style=\"width:3.560em;height:1.001em\" loading=\"lazy\"> da. Ondoren <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0746.svg\" alt=\"x,y\" style=\"width:1.988em;height:1.001em\" loading=\"lazy\">-ren orokortze inplizituak 1. lerroko helburua ixten du, jatorrizko barruti-markak adierazten duen bezala."
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
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0747.svg\" alt=\"? forall x,y exists z f(x,z)=y\" style=\"width:10.182em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "2",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0748.svg\" alt=\"forall x,y,z f(f(x,y),z)=f(x,f(y,z))\" style=\"width:17.411em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "3",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0749.svg\" alt=\"forall x f(h,x)=k\" style=\"width:7.225em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "4",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0750.svg\" alt=\"forall x f(k,x)=x\" style=\"width:7.221em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "5",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0751.svg\" alt=\"f(k,y)=y\" style=\"width:5.662em;height:1.001em\" loading=\"lazy\">",
         "EG, 4"
        ],
        [
         "6",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0752.svg\" alt=\"forall x (x=k -&gt; f(x,y)=y)\" style=\"width:12.666em;height:1.001em\" loading=\"lazy\">",
         "II, 5"
        ],
        [
         "7",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0753.svg\" alt=\"f(h,x)=k -&gt; f(f(h,x),y)=y\" style=\"width:15.841em;height:1.001em\" loading=\"lazy\">",
         "EG, 6"
        ],
        [
         "8",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0754.svg\" alt=\"f(h,x)=k\" style=\"width:5.792em;height:1.001em\" loading=\"lazy\">",
         "EG, 3"
        ],
        [
         "9",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0755.svg\" alt=\"f(f(h,x),y)=y\" style=\"width:8.458em;height:1.001em\" loading=\"lazy\">",
         "MP, 7, 8"
        ],
        [
         "10",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0756.svg\" alt=\"forall z f(f(h,x),z)=f(h,f(x,z))\" style=\"width:15.253em;height:1.001em\" loading=\"lazy\">",
         "GEG, 2"
        ],
        [
         "11",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0757.svg\" alt=\"f(f(h,x),y)=f(h,f(x,y))\" style=\"width:13.962em;height:1.001em\" loading=\"lazy\">",
         "EG, 10"
        ],
        [
         "12",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0758.svg\" alt=\"f(h,f(x,y))=y\" style=\"width:8.458em;height:1.001em\" loading=\"lazy\">",
         "TI, 9, 11"
        ],
        [
         "13",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0759.svg\" alt=\"exists z f(x,z)=y\" style=\"width:6.894em;height:1.001em\" loading=\"lazy\">",
         "IP, 12"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Elkartze-legeak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0760.svg\" alt=\"f(f(h,x),y)\" style=\"width:6.314em;height:1.001em\" loading=\"lazy\"> terminoa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0761.svg\" alt=\"f(h,f(x,y))\" style=\"width:6.314em;height:1.001em\" loading=\"lazy\"> bihurtzen du. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0754.svg\" alt=\"f(h,x)=k\" style=\"width:5.792em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0751.svg\" alt=\"f(k,y)=y\" style=\"width:5.662em;height:1.001em\" loading=\"lazy\"> erabilita, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0762.svg\" alt=\"z=f(x,y)\" style=\"width:5.677em;height:1.001em\" loading=\"lazy\"> lekukoak helburua betetzen du."
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
     "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0739.svg\" alt=\"alpha_1=forall x,y,z f(f(x,y),z)=f(x,f(y,z))\" style=\"width:20.222em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0763.svg\" alt=\"alpha_2=forall x,y exists z f(x,z)=y\" style=\"width:12.253em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0764.svg\" alt=\"alpha_3=forall x,y exists z f(z,x)=y\" style=\"width:12.253em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0765.svg\" alt=\"alpha_4=exists z forall x (f(x,z)=x and exists y f(x,y)=z)\" style=\"width:20.099em;height:1.001em\" loading=\"lazy\">. Frogatu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0743.svg\" alt=\"alpha_1,alpha_2,alpha_3 tack alpha_4\" style=\"width:7.659em;height:1.001em\" loading=\"lazy\">."
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
       "html": "1. eta 5. lerroetako <code>?</code> markak helburuak dira. 4. lerroko EPn <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">, 8.ekoan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0056.svg\" alt=\"w\" style=\"width:1.043em;height:1.001em\" loading=\"lazy\"> eta 20.ekoan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0718.svg\" alt=\"z_0\" style=\"width:1.275em;height:1.001em\" loading=\"lazy\"> aldagai kritiko berriak dira; hirurak beren existentzialen ondoren aukeratzen dira eta ez dira premisa aske bihurtzen."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i023.svg",
       "oina": null,
       "zabalera": 421
      },
      {
       "mota": "testua",
       "html": "22. lerroak 5. helburuko matrizea ematen du; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ren orokortzea egin eta 4. lerroko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> lekukoa 23. lerroan existentzialki sartzen da."
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
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0766.svg\" alt=\"? exists z forall x (f(x,z)=x and exists y f(x,y)=z)\" style=\"width:18.028em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "2",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0767.svg\" alt=\"forall x,y exists z f(x,z)=y\" style=\"width:9.442em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "3",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0768.svg\" alt=\"exists z f(y,z)=y\" style=\"width:6.832em;height:1.001em\" loading=\"lazy\">",
         "GEG, 2"
        ],
        [
         "4",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0769.svg\" alt=\"f(y,u)=y\" style=\"width:5.704em;height:1.001em\" loading=\"lazy\">",
         "EP, 3"
        ],
        [
         "5",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0770.svg\" alt=\"? forall x (f(x,u)=x and exists y f(x,y)=u)\" style=\"width:16.989em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "6",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0771.svg\" alt=\"forall x,y exists z f(z,x)=y\" style=\"width:9.442em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "7",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0772.svg\" alt=\"exists z f(z,y)=x\" style=\"width:6.894em;height:1.001em\" loading=\"lazy\">",
         "GEG, 6"
        ],
        [
         "8",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0773.svg\" alt=\"f(w,y)=x\" style=\"width:5.937em;height:1.001em\" loading=\"lazy\">",
         "EP, 7"
        ],
        [
         "9",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0774.svg\" alt=\"forall v (v=y -&gt; f(w,v)=x)\" style=\"width:12.677em;height:1.001em\" loading=\"lazy\">",
         "II, 8"
        ],
        [
         "10",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0775.svg\" alt=\"f(y,u)=y -&gt; f(w,f(y,u))=x\" style=\"width:15.981em;height:1.001em\" loading=\"lazy\">",
         "EG, 9"
        ],
        [
         "11",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0776.svg\" alt=\"f(w,f(y,u))=x\" style=\"width:8.686em;height:1.001em\" loading=\"lazy\">",
         "MP, 10, 4"
        ],
        [
         "12",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0748.svg\" alt=\"forall x,y,z f(f(x,y),z)=f(x,f(y,z))\" style=\"width:17.411em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "13",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0777.svg\" alt=\"f(w,f(y,u))=f(f(w,y),u)\" style=\"width:14.293em;height:1.001em\" loading=\"lazy\">",
         "GEG, 12"
        ],
        [
         "14",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0778.svg\" alt=\"f(f(w,y),u)=x\" style=\"width:8.686em;height:1.001em\" loading=\"lazy\">",
         "TI, 13, 11"
        ],
        [
         "15",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0779.svg\" alt=\"forall v (v=f(w,y) -&gt; f(v,u)=x)\" style=\"width:15.426em;height:1.001em\" loading=\"lazy\">",
         "II, 14"
        ],
        [
         "16",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0780.svg\" alt=\"x=f(w,y) -&gt; f(x,u)=x\" style=\"width:13.356em;height:1.001em\" loading=\"lazy\">",
         "EG, 15"
        ],
        [
         "17",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0781.svg\" alt=\"x=f(w,y)\" style=\"width:5.937em;height:1.001em\" loading=\"lazy\">",
         "SI, 8"
        ],
        [
         "18",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0782.svg\" alt=\"f(x,u)=x\" style=\"width:5.829em;height:1.001em\" loading=\"lazy\">",
         "MP, 16, 17"
        ],
        [
         "19",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0783.svg\" alt=\"exists z f(x,z)=u\" style=\"width:6.957em;height:1.001em\" loading=\"lazy\">",
         "GEG, 2"
        ],
        [
         "20",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0784.svg\" alt=\"f(x,z_0)=u\" style=\"width:6.231em;height:1.001em\" loading=\"lazy\">",
         "EP, 19"
        ],
        [
         "21",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0785.svg\" alt=\"exists y f(x,y)=u\" style=\"width:7.010em;height:1.001em\" loading=\"lazy\">",
         "IP, 20"
        ],
        [
         "22",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0786.svg\" alt=\"f(x,u)=x and exists y f(x,y)=u\" style=\"width:13.915em;height:1.001em\" loading=\"lazy\">",
         "IC, 18, 21"
        ],
        [
         "23",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0720.svg\" alt=\"exists z forall x (f(x,z)=x and exists y f(x,y)=z)\" style=\"width:17.288em;height:1.001em\" loading=\"lazy\">",
         "IP, 5"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Lehenik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0769.svg\" alt=\"f(y,u)=y\" style=\"width:5.704em;height:1.001em\" loading=\"lazy\"> duen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aukeratzen da. Ezker eta eskuineko zatidurak elkartze-legearekin konbinatuz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> elementu guztientzat eskuin-neutro dela lortzen da; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-k, gainera, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ra eramaten duen eskuin-alderantzizkoa ematen du."
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
     "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0739.svg\" alt=\"alpha_1=forall x,y,z f(f(x,y),z)=f(x,f(y,z))\" style=\"width:20.222em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0763.svg\" alt=\"alpha_2=forall x,y exists z f(x,z)=y\" style=\"width:12.253em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0764.svg\" alt=\"alpha_3=forall x,y exists z f(z,x)=y\" style=\"width:12.253em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0787.svg\" alt=\"alpha_4=forall x,y,u,w (f(x,u)=y and f(x,w)=y -&gt; u=w)\" style=\"width:26.404em;height:1.001em\" loading=\"lazy\">. Frogatu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0743.svg\" alt=\"alpha_1,alpha_2,alpha_3 tack alpha_4\" style=\"width:7.659em;height:1.001em\" loading=\"lazy\">."
    },
    {
     "mota": "oharra",
     "titulua": "Hamiltonen axiomen beste ondorio bat",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0745.svg\" alt=\"alpha_4\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-k bi elementuren biderkadura-ekuazioak gehienez soluzio bat duela adierazten du; iturriak talde-eragiketaren bakartasunarekin lotzen du."
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
       "html": "1. eta 2. lerroetako <code>?</code> markek helburu orokorra eta haren matrize baldintzatua adierazten dituzte. 3. lerroa da hipotesi bakarra. 9., 11. eta 14. lerroetako EPek hurrenez hurren <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0788.svg\" alt=\"z_1,z_2,z_3\" style=\"width:4.434em;height:1.001em\" loading=\"lazy\"> aldagai kritiko berriak hautatzen dituzte; izenak eta erabilera-barrutia jatorrizkoak dira."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i024.svg",
       "oina": null,
       "zabalera": 493
      },
      {
       "mota": "testua",
       "html": "Elkartze-legearen GEG instantziek berdintasun-katea garraiatzen dute; 38. eta 14. lerroen TIak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0789.svg\" alt=\"u=w\" style=\"width:3.249em;height:1.001em\" loading=\"lazy\"> ematen du eta 3. hipotesia ixten du."
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
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0790.svg\" alt=\"? forall x,y,u,w (f(x,u)=y and f(x,w)=y -&gt; u=w)\" style=\"width:24.333em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "2",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0791.svg\" alt=\"? f(x,u)=y and f(x,w)=y -&gt; u=w\" style=\"width:18.359em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "3",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0792.svg\" alt=\"f(x,u)=y and f(x,w)=y\" style=\"width:12.779em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "4",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0793.svg\" alt=\"f(x,u)=y\" style=\"width:5.766em;height:1.001em\" loading=\"lazy\">",
         "EC, 3"
        ],
        [
         "5",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0794.svg\" alt=\"f(x,w)=y\" style=\"width:5.937em;height:1.001em\" loading=\"lazy\">",
         "EC, 3"
        ],
        [
         "6",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0795.svg\" alt=\"f(x,w)=f(x,u)\" style=\"width:8.749em;height:1.001em\" loading=\"lazy\">",
         "TI, 5, 4"
        ],
        [
         "7",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0771.svg\" alt=\"forall x,y exists z f(z,x)=y\" style=\"width:9.442em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "8",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0796.svg\" alt=\"exists z f(z,u)=u\" style=\"width:6.957em;height:1.001em\" loading=\"lazy\">",
         "GEG, 7"
        ],
        [
         "9",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0797.svg\" alt=\"f(z_1,u)=u\" style=\"width:6.231em;height:1.001em\" loading=\"lazy\">",
         "EP, 8"
        ],
        [
         "10",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0798.svg\" alt=\"exists z f(z,x)=z_1\" style=\"width:7.359em;height:1.001em\" loading=\"lazy\">",
         "GEG, 7"
        ],
        [
         "11",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0799.svg\" alt=\"f(z_2,x)=z_1\" style=\"width:6.633em;height:1.001em\" loading=\"lazy\">",
         "EP, 10"
        ],
        [
         "12",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0767.svg\" alt=\"forall x,y exists z f(x,z)=y\" style=\"width:9.442em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "13",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0800.svg\" alt=\"exists z f(u,z)=w\" style=\"width:7.127em;height:1.001em\" loading=\"lazy\">",
         "GEG, 12"
        ],
        [
         "14",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0801.svg\" alt=\"f(u,z_3)=w\" style=\"width:6.401em;height:1.001em\" loading=\"lazy\">",
         "EP, 13"
        ],
        [
         "15",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0802.svg\" alt=\"forall v (v=z_1 -&gt; f(v,u)=u)\" style=\"width:12.971em;height:1.001em\" loading=\"lazy\">",
         "II, 9"
        ],
        [
         "16",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0803.svg\" alt=\"f(z_2,x)=z_1 -&gt; f(f(z_2,x),u)=u\" style=\"width:17.204em;height:1.001em\" loading=\"lazy\">",
         "EG, 15"
        ],
        [
         "17",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0804.svg\" alt=\"f(f(z_2,x),u)=u\" style=\"width:8.981em;height:1.001em\" loading=\"lazy\">",
         "MP, 16, 11"
        ],
        [
         "18",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0748.svg\" alt=\"forall x,y,z f(f(x,y),z)=f(x,f(y,z))\" style=\"width:17.411em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "19",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0805.svg\" alt=\"f(z_2,f(x,u))=f(f(z_2,x),u)\" style=\"width:14.882em;height:1.001em\" loading=\"lazy\">",
         "GEG, 18"
        ],
        [
         "20",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0806.svg\" alt=\"f(z_2,f(x,u))=u\" style=\"width:8.981em;height:1.001em\" loading=\"lazy\">",
         "TI, 19, 17"
        ],
        [
         "21",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0807.svg\" alt=\"forall v (v=f(x,u) -&gt; f(z_2,v)=u)\" style=\"width:15.721em;height:1.001em\" loading=\"lazy\">",
         "II, 20"
        ],
        [
         "22",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0808.svg\" alt=\"f(x,w)=f(x,u) -&gt; f(z_2,f(x,w))=u\" style=\"width:19.490em;height:1.001em\" loading=\"lazy\">",
         "EG, 21"
        ],
        [
         "23",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0809.svg\" alt=\"f(z_2,f(x,w))=u\" style=\"width:9.151em;height:1.001em\" loading=\"lazy\">",
         "MP, 22, 6"
        ],
        [
         "24",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0810.svg\" alt=\"f(z_2,f(x,w))=f(f(z_2,x),w)\" style=\"width:15.222em;height:1.001em\" loading=\"lazy\">",
         "GEG, 18"
        ],
        [
         "25",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0811.svg\" alt=\"f(f(z_2,x),w)=u\" style=\"width:9.151em;height:1.001em\" loading=\"lazy\">",
         "TI, 24, 23"
        ],
        [
         "26",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0812.svg\" alt=\"forall v (v=f(z_2,x) -&gt; f(v,w)=u)\" style=\"width:15.891em;height:1.001em\" loading=\"lazy\">",
         "II, 25"
        ],
        [
         "27",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0813.svg\" alt=\"z_1=f(z_2,x) -&gt; f(z_1,w)=u\" style=\"width:14.625em;height:1.001em\" loading=\"lazy\">",
         "EG, 26"
        ],
        [
         "28",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0814.svg\" alt=\"z_1=f(z_2,x)\" style=\"width:6.633em;height:1.001em\" loading=\"lazy\">",
         "SI, 11"
        ],
        [
         "29",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0815.svg\" alt=\"f(z_1,w)=u\" style=\"width:6.401em;height:1.001em\" loading=\"lazy\">",
         "MP, 27, 28"
        ],
        [
         "30",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0816.svg\" alt=\"forall v (v=z_1 -&gt; f(v,z_3)=u)\" style=\"width:13.373em;height:1.001em\" loading=\"lazy\">",
         "II, 29"
        ],
        [
         "31",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0817.svg\" alt=\"f(u,z_3)=w -&gt; f(z_1,f(u,z_3))=u\" style=\"width:17.375em;height:1.001em\" loading=\"lazy\">",
         "EG, 30"
        ],
        [
         "32",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0818.svg\" alt=\"f(z_1,f(u,z_3))=u\" style=\"width:9.383em;height:1.001em\" loading=\"lazy\">",
         "MP, 31, 14"
        ],
        [
         "33",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0819.svg\" alt=\"f(z_1,f(u,z_3))=f(f(z_1,u),z_3)\" style=\"width:15.686em;height:1.001em\" loading=\"lazy\">",
         "GEG, 18"
        ],
        [
         "34",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0820.svg\" alt=\"f(f(z_1,u),z_3)=u\" style=\"width:9.383em;height:1.001em\" loading=\"lazy\">",
         "TI, 32, 33"
        ],
        [
         "35",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0821.svg\" alt=\"forall v (v=f(z_1,u) -&gt; f(v,z_3)=u)\" style=\"width:16.123em;height:1.001em\" loading=\"lazy\">",
         "II, 34"
        ],
        [
         "36",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0822.svg\" alt=\"u=f(z_1,u) -&gt; f(u,z_3)=u\" style=\"width:14.053em;height:1.001em\" loading=\"lazy\">",
         "EG, 35"
        ],
        [
         "37",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0823.svg\" alt=\"u=f(z_1,u)\" style=\"width:6.231em;height:1.001em\" loading=\"lazy\">",
         "SI, 9"
        ],
        [
         "38",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0824.svg\" alt=\"f(u,z_3)=u\" style=\"width:6.231em;height:1.001em\" loading=\"lazy\">",
         "MP, 36, 37"
        ],
        [
         "39",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0789.svg\" alt=\"u=w\" style=\"width:3.249em;height:1.001em\" loading=\"lazy\">",
         "TI, 38, 14"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Froga luzeak ezker- eta eskuin-zatiketak behin eta berriz aukeratzen ditu. Elkartze-legeak parentesiak lekuz aldatzen ditu, eta TI bidez kateatutako berdintzek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0824.svg\" alt=\"f(u,z_3)=u\" style=\"width:6.231em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0801.svg\" alt=\"f(u,z_3)=w\" style=\"width:6.401em;height:1.001em\" loading=\"lazy\"> elkartuz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0789.svg\" alt=\"u=w\" style=\"width:3.249em;height:1.001em\" loading=\"lazy\"> ematen dute."
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
     "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0825.svg\" alt=\"alpha_1=exists y (forall x (S(x) and G(x) &lt;-&gt; x=y) and y=r)\" style=\"width:22.179em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0826.svg\" alt=\"alpha_2=forall x (S(x) and not x=r -&gt; A(r,x))\" style=\"width:17.786em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0827.svg\" alt=\"alpha_3=forall x (S(x) and G(x) and A(p,x))\" style=\"width:16.292em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0828.svg\" alt=\"alpha_4=forall x,y (A(x,y) -&gt; not A(y,x))\" style=\"width:16.137em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0829.svg\" alt=\"alpha_5=not S(p)\" style=\"width:6.074em;height:1.001em\" loading=\"lazy\">. Frogatu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0830.svg\" alt=\"alpha_1,alpha_2,alpha_3,alpha_4 tack alpha_5\" style=\"width:9.441em;height:1.001em\" loading=\"lazy\">."
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
       "html": "1. eta 23. lerroetako <code>?</code> markak helburuak dira. 2. eta 24. lerroak kontraesanezko hipotesiak dira. 5. lerroko EPn <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> eta 7. lerroko EPn <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0056.svg\" alt=\"w\" style=\"width:1.043em;height:1.001em\" loading=\"lazy\"> aldagai kritiko berriak dira; beren existentzialen barrutian soilik erabiltzen dira."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i025.svg",
       "oina": null,
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
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0831.svg\" alt=\"? not S(p)\" style=\"width:4.002em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "2",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0832.svg\" alt=\"not not S(p)\" style=\"width:4.035em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "3",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0833.svg\" alt=\"S(p)\" style=\"width:2.490em;height:1.001em\" loading=\"lazy\">",
         "DN, 2"
        ],
        [
         "4",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0834.svg\" alt=\"forall x (S(x) and G(x) and A(p,x))\" style=\"width:13.481em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "5",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0835.svg\" alt=\"S(u) and G(u) and A(p,u)\" style=\"width:11.146em;height:1.001em\" loading=\"lazy\">",
         "EP, 4"
        ],
        [
         "6",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0836.svg\" alt=\"exists y (forall x (S(x) and G(x) &lt;-&gt; x=y) and y=r)\" style=\"width:19.367em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "7",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0837.svg\" alt=\"forall x (S(x) and G(x) &lt;-&gt; x=w) and w=r\" style=\"width:17.688em;height:1.001em\" loading=\"lazy\">",
         "EP, 6"
        ],
        [
         "8",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0838.svg\" alt=\"forall x (S(x) and G(x) &lt;-&gt; x=w)\" style=\"width:13.488em;height:1.001em\" loading=\"lazy\">",
         "EC, 7"
        ],
        [
         "9",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0839.svg\" alt=\"S(u) and G(u) &lt;-&gt; u=w\" style=\"width:11.153em;height:1.001em\" loading=\"lazy\">",
         "EG, 8"
        ],
        [
         "10",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0840.svg\" alt=\"S(u) and G(u) -&gt; u=w\" style=\"width:11.153em;height:1.001em\" loading=\"lazy\">",
         "EB, 9"
        ],
        [
         "11",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0841.svg\" alt=\"S(u) and G(u)\" style=\"width:6.313em;height:1.001em\" loading=\"lazy\">",
         "EC, 5"
        ],
        [
         "12",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0789.svg\" alt=\"u=w\" style=\"width:3.249em;height:1.001em\" loading=\"lazy\">",
         "MP, 10, 11"
        ],
        [
         "13",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0842.svg\" alt=\"w=r\" style=\"width:3.124em;height:1.001em\" loading=\"lazy\">",
         "EC, 7"
        ],
        [
         "14",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0843.svg\" alt=\"u=r\" style=\"width:2.954em;height:1.001em\" loading=\"lazy\">",
         "TI, 13, 12"
        ],
        [
         "15",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0844.svg\" alt=\"A(p,u)\" style=\"width:3.757em;height:1.001em\" loading=\"lazy\">",
         "EC, 5"
        ],
        [
         "16",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0845.svg\" alt=\"forall x (x=u -&gt; A(p,x))\" style=\"width:10.761em;height:1.001em\" loading=\"lazy\">",
         "II, 15"
        ],
        [
         "17",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0846.svg\" alt=\"r=u -&gt; A(p,r)\" style=\"width:8.177em;height:1.001em\" loading=\"lazy\">",
         "EG, 16"
        ],
        [
         "18",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0847.svg\" alt=\"A(p,r)\" style=\"width:3.632em;height:1.001em\" loading=\"lazy\">",
         "MP, 17, 14"
        ],
        [
         "19",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0848.svg\" alt=\"forall x,y (A(x,y) -&gt; not A(y,x))\" style=\"width:13.325em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0745.svg\" alt=\"alpha_4\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "20",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0849.svg\" alt=\"A(p,r) -&gt; not A(r,p)\" style=\"width:9.626em;height:1.001em\" loading=\"lazy\">",
         "GEG, 19"
        ],
        [
         "21",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0850.svg\" alt=\"not A(r,p)\" style=\"width:4.404em;height:1.001em\" loading=\"lazy\">",
         "MP, 20, 18"
        ],
        [
         "22",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0851.svg\" alt=\"forall x (S(x) and not x=r -&gt; A(r,x))\" style=\"width:14.975em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "23",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0852.svg\" alt=\"? not p=r\" style=\"width:4.404em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "24",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0853.svg\" alt=\"not not p=r\" style=\"width:4.436em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "25",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0854.svg\" alt=\"p=r\" style=\"width:2.892em;height:1.001em\" loading=\"lazy\">",
         "DN, 24"
        ],
        [
         "26",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0855.svg\" alt=\"p=u\" style=\"width:3.017em;height:1.001em\" loading=\"lazy\">",
         "TI, 25, 14"
        ],
        [
         "27",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0856.svg\" alt=\"p=u -&gt; A(p,p)\" style=\"width:8.302em;height:1.001em\" loading=\"lazy\">",
         "EG, 16"
        ],
        [
         "28",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0857.svg\" alt=\"A(p,p)\" style=\"width:3.694em;height:1.001em\" loading=\"lazy\">",
         "MP, 27, 26"
        ],
        [
         "29",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0858.svg\" alt=\"A(p,p) -&gt; not A(p,p)\" style=\"width:9.751em;height:1.001em\" loading=\"lazy\">",
         "GEG, 19"
        ],
        [
         "30",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0859.svg\" alt=\"not A(p,p)\" style=\"width:4.467em;height:1.001em\" loading=\"lazy\">",
         "MP, 29, 28"
        ],
        [
         "31",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0860.svg\" alt=\"S(p) and not p=r -&gt; A(r,p)\" style=\"width:12.453em;height:1.001em\" loading=\"lazy\">",
         "EG, 22"
        ],
        [
         "32",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0861.svg\" alt=\"S(p) and not p=r\" style=\"width:7.231em;height:1.001em\" loading=\"lazy\">",
         "IC, 3, 23"
        ],
        [
         "33",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0862.svg\" alt=\"not (S(p) and not p=r)\" style=\"width:8.904em;height:1.001em\" loading=\"lazy\">",
         "MT, 31, 21"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ek doan irakasten duen sofista <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0863.svg\" alt=\"r\" style=\"width:0.748em;height:1.001em\" loading=\"lazy\"> dela identifikatzen du; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-k Platonek haren gain duen erlazioa ematen du. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0745.svg\" alt=\"alpha_4\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ren asimetriak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0864.svg\" alt=\"A(r,p)\" style=\"width:3.632em;height:1.001em\" loading=\"lazy\"> ukatzen du, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0833.svg\" alt=\"S(p)\" style=\"width:2.490em;height:1.001em\" loading=\"lazy\"> suposizioak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> bidez kontrakoa behartzen du."
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
     "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0865.svg\" alt=\"alpha_1=(forall x (P(x) &lt;-&gt; x=a) -&gt; iota x P(x)=a)\" style=\"width:20.844em;height:1.001em\" loading=\"lazy\">. Frogatu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0424.svg\" alt=\"tack alpha_1\" style=\"width:2.507em;height:1.001em\" loading=\"lazy\">."
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
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburua:</strong> 1. lerroko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0866.svg\" alt=\"? forall x (P(x) &lt;-&gt; x=a) -&gt; iota x P(x)=a\" style=\"width:17.872em;height:1.001em\" loading=\"lazy\">. <strong>Irismena:</strong> 1. lerroa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0867.svg\" alt=\"M_0\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">; 2-7 lerroak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0868.svg\" alt=\"M_1\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">. <strong>Freskotasuna:</strong> ez dago EP edo GEP aplikaziorik."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i026.svg",
       "oina": null,
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
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0866.svg\" alt=\"? forall x (P(x) &lt;-&gt; x=a) -&gt; iota x P(x)=a\" style=\"width:17.872em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "2",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0869.svg\" alt=\"forall x (P(x) &lt;-&gt; x=a)\" style=\"width:9.634em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "3",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0870.svg\" alt=\"exists y forall x (P(x) &lt;-&gt; x=y)\" style=\"width:10.864em;height:1.001em\" loading=\"lazy\">",
         "IP, 2"
        ],
        [
         "4",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0871.svg\" alt=\"P(iota x P(x))\" style=\"width:5.558em;height:1.001em\" loading=\"lazy\">",
         "DP, 3"
        ],
        [
         "5",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0872.svg\" alt=\"P(iota x P(x)) &lt;-&gt; iota x P(x)=a\" style=\"width:13.056em;height:1.001em\" loading=\"lazy\">",
         "EG, 2"
        ],
        [
         "6",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0873.svg\" alt=\"P(iota x P(x)) -&gt; iota x P(x)=a\" style=\"width:13.056em;height:1.001em\" loading=\"lazy\">",
         "EB, 5"
        ],
        [
         "7",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0874.svg\" alt=\"iota x P(x)=a\" style=\"width:5.908em;height:1.001em\" loading=\"lazy\">",
         "MP, 6, 4"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Premisak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0029.svg\" alt=\"P\" style=\"width:1.116em;height:1.001em\" loading=\"lazy\"> betetzen duen objektu bakarra <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0010.svg\" alt=\"a\" style=\"width:0.823em;height:1.001em\" loading=\"lazy\"> dela dio. DPk deskribatutako objektuak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0029.svg\" alt=\"P\" style=\"width:1.116em;height:1.001em\" loading=\"lazy\"> betetzen duela ematen du, eta bakartasun-baldintzak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0010.svg\" alt=\"a\" style=\"width:0.823em;height:1.001em\" loading=\"lazy\">-rekin berdintzen du."
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
     "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0875.svg\" alt=\"alpha_1=(not exists x alpha -&gt; iota x alpha=iota u (u=u))\" style=\"width:16.742em;height:1.001em\" loading=\"lazy\">. Frogatu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0424.svg\" alt=\"tack alpha_1\" style=\"width:2.507em;height:1.001em\" loading=\"lazy\">."
    },
    {
     "mota": "oharra",
     "titulua": "Aldagaiaren baldintza",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dedukzioko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> ez dago aske <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> formulan. Baldintza hori funtsezkoa da bakartasun-formula osatzean aldagai-harrapaketa saihesteko."
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
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburuak:</strong> 1. lerroko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0876.svg\" alt=\"? not exists x alpha -&gt; iota x alpha=iota u (u=u)\" style=\"width:13.770em;height:1.001em\" loading=\"lazy\"> eta 3. lerroko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0877.svg\" alt=\"? not exists y forall x (alpha &lt;-&gt; x=y)\" style=\"width:10.649em;height:1.001em\" loading=\"lazy\">. <strong>Irismena:</strong> 1. lerroa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0867.svg\" alt=\"M_0\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">; 2 eta 9 lerroak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0868.svg\" alt=\"M_1\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">; 3. lerroa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0878.svg\" alt=\"M_2\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">; 4-8 lerroak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0879.svg\" alt=\"M_3\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">. <strong>Freskotasuna:</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> ez dago aske <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> formulan; baldintza horrek aldagai-harrapaketa eragozten du."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i027.svg",
       "oina": null,
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
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0876.svg\" alt=\"? not exists x alpha -&gt; iota x alpha=iota u (u=u)\" style=\"width:13.770em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "2",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0409.svg\" alt=\"not exists x alpha\" style=\"width:3.030em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "3",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0877.svg\" alt=\"? not exists y forall x (alpha &lt;-&gt; x=y)\" style=\"width:10.649em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "4",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0880.svg\" alt=\"not not exists y forall x (alpha &lt;-&gt; x=y)\" style=\"width:10.681em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "5",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0289.svg\" alt=\"exists y forall x (alpha &lt;-&gt; x=y)\" style=\"width:9.137em;height:1.001em\" loading=\"lazy\">",
         "DN, 4"
        ],
        [
         "6",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0881.svg\" alt=\"S_x^(iota x alpha) alpha\" style=\"width:3.266em;height:1.001em\" loading=\"lazy\">",
         "DP, 5"
        ],
        [
         "7",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0277.svg\" alt=\"exists x alpha\" style=\"width:2.258em;height:1.001em\" loading=\"lazy\">",
         "IP, 6"
        ],
        [
         "8",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0409.svg\" alt=\"not exists x alpha\" style=\"width:3.030em;height:1.001em\" loading=\"lazy\">",
         "R, 2"
        ],
        [
         "9",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0882.svg\" alt=\"iota x alpha=iota u (u=u)\" style=\"width:8.410em;height:1.001em\" loading=\"lazy\">",
         "DI, 3"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">-k lekukorik ez badu, ezin du objektu bakarra karakterizatu. DI erregelak deskribapen hutsaren balioa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0883.svg\" alt=\"iota u(u=u)\" style=\"width:5.052em;height:1.001em\" loading=\"lazy\"> termino lehenetsiarekin identifikatzen du."
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
     "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0884.svg\" alt=\"alpha_1=R(c,f(a))\" style=\"width:8.059em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0885.svg\" alt=\"alpha_2=forall x (R(x,f(a)) -&gt; x=c)\" style=\"width:15.064em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0886.svg\" alt=\"alpha_3=R(iota x R(x,f(a)),f(a))\" style=\"width:13.771em;height:1.001em\" loading=\"lazy\">. Frogatu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0717.svg\" alt=\"alpha_1,alpha_2 tack alpha_3\" style=\"width:5.877em;height:1.001em\" loading=\"lazy\">."
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
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburuak:</strong> 1. lerroko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0887.svg\" alt=\"? R(iota x R(x,f(a)),f(a))\" style=\"width:11.699em;height:1.001em\" loading=\"lazy\"> eta 5. lerroko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0888.svg\" alt=\"? forall x (R(x,f(a)) &lt;-&gt; x=c)\" style=\"width:12.992em;height:1.001em\" loading=\"lazy\">. <strong>Irismena:</strong> 1-4 eta 9-10 lerroak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0867.svg\" alt=\"M_0\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">; 5-8 lerroak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0868.svg\" alt=\"M_1\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">. <strong>Freskotasuna:</strong> ez dago EP edo GEP aplikaziorik."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i028.svg",
       "oina": null,
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
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0887.svg\" alt=\"? R(iota x R(x,f(a)),f(a))\" style=\"width:11.699em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "2",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0889.svg\" alt=\"R(c,f(a))\" style=\"width:5.248em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "3",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0890.svg\" alt=\"forall x (x=c -&gt; R(x,f(a)))\" style=\"width:12.252em;height:1.001em\" loading=\"lazy\">",
         "II, 2"
        ],
        [
         "4",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0891.svg\" alt=\"forall x (R(x,f(a)) -&gt; x=c)\" style=\"width:12.252em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "5",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0888.svg\" alt=\"? forall x (R(x,f(a)) &lt;-&gt; x=c)\" style=\"width:12.992em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "6",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0892.svg\" alt=\"x=c -&gt; R(x,f(a))\" style=\"width:9.918em;height:1.001em\" loading=\"lazy\">",
         "EG, 3"
        ],
        [
         "7",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0893.svg\" alt=\"R(x,f(a)) -&gt; x=c\" style=\"width:9.918em;height:1.001em\" loading=\"lazy\">",
         "EG, 4"
        ],
        [
         "8",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0894.svg\" alt=\"R(x,f(a)) &lt;-&gt; x=c\" style=\"width:9.918em;height:1.001em\" loading=\"lazy\">",
         "IB, 6, 7"
        ],
        [
         "9",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0895.svg\" alt=\"exists y forall x (R(x,f(a)) &lt;-&gt; x=y)\" style=\"width:13.565em;height:1.001em\" loading=\"lazy\">",
         "IP, 5"
        ],
        [
         "10",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0896.svg\" alt=\"R(iota x R(x,f(a)),f(a))\" style=\"width:10.960em;height:1.001em\" loading=\"lazy\">",
         "DP, 9"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Bi premisek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0897.svg\" alt=\"R(x,f(a))\" style=\"width:5.380em;height:1.001em\" loading=\"lazy\"> propietatea betetzen duen objektu bakarra <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0012.svg\" alt=\"c\" style=\"width:0.741em;height:1.001em\" loading=\"lazy\"> dela ematen dute. DPk deskribapenaren instantzia zuzenean ondorioztatzen du."
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
     "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0898.svg\" alt=\"alpha_1=(exists y (forall x (H(x) &lt;-&gt; x=y) and B(y)) -&gt; B(iota x H(x)))\" style=\"width:26.617em;height:1.001em\" loading=\"lazy\">. Frogatu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0424.svg\" alt=\"tack alpha_1\" style=\"width:2.507em;height:1.001em\" loading=\"lazy\">."
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
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburua:</strong> 1. lerroko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0899.svg\" alt=\"? exists y (forall x (H(x) &lt;-&gt; x=y) and B(y)) -&gt; B(iota x H(x))\" style=\"width:23.645em;height:1.001em\" loading=\"lazy\">. <strong>Irismena:</strong> 1. lerroa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0867.svg\" alt=\"M_0\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">; 2-13 lerroak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0868.svg\" alt=\"M_1\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">. <strong>Freskotasuna:</strong> 3. lerroko EPn <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> lekuko berria da, aurreko lerroetan agertzen ez dena."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i029.svg",
       "oina": null,
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
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0899.svg\" alt=\"? exists y (forall x (H(x) &lt;-&gt; x=y) and B(y)) -&gt; B(iota x H(x))\" style=\"width:23.645em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "2",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0900.svg\" alt=\"exists y (forall x (H(x) &lt;-&gt; x=y) and B(y))\" style=\"width:15.608em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "3",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0901.svg\" alt=\"forall x (H(x) &lt;-&gt; x=u) and B(u)\" style=\"width:13.588em;height:1.001em\" loading=\"lazy\">",
         "EP, 2"
        ],
        [
         "4",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0902.svg\" alt=\"forall x (H(x) &lt;-&gt; x=u)\" style=\"width:9.830em;height:1.001em\" loading=\"lazy\">",
         "EC, 3"
        ],
        [
         "5",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0903.svg\" alt=\"exists y forall x (H(x) &lt;-&gt; x=y)\" style=\"width:11.011em;height:1.001em\" loading=\"lazy\">",
         "IP, 4"
        ],
        [
         "6",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0904.svg\" alt=\"H(iota x H(x))\" style=\"width:5.852em;height:1.001em\" loading=\"lazy\">",
         "DP, 5"
        ],
        [
         "7",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0905.svg\" alt=\"H(iota x H(x)) &lt;-&gt; iota x H(x)=u\" style=\"width:13.547em;height:1.001em\" loading=\"lazy\">",
         "EG, 4"
        ],
        [
         "8",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0906.svg\" alt=\"H(iota x H(x)) -&gt; iota x H(x)=u\" style=\"width:13.547em;height:1.001em\" loading=\"lazy\">",
         "EB, 7"
        ],
        [
         "9",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0907.svg\" alt=\"iota x H(x)=u\" style=\"width:6.105em;height:1.001em\" loading=\"lazy\">",
         "MP, 8, 6"
        ],
        [
         "10",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0908.svg\" alt=\"B(u)\" style=\"width:2.681em;height:1.001em\" loading=\"lazy\">",
         "EC, 3"
        ],
        [
         "11",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0909.svg\" alt=\"forall x (x=u -&gt; B(x))\" style=\"width:9.686em;height:1.001em\" loading=\"lazy\">",
         "II, 10"
        ],
        [
         "12",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0910.svg\" alt=\"iota x H(x)=u -&gt; B(iota x H(x))\" style=\"width:13.403em;height:1.001em\" loading=\"lazy\">",
         "EG, 11"
        ],
        [
         "13",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0911.svg\" alt=\"B(iota x H(x))\" style=\"width:5.707em;height:1.001em\" loading=\"lazy\">",
         "MP, 12, 9"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Existenteak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0912.svg\" alt=\"H\" style=\"width:1.263em;height:1.001em\" loading=\"lazy\"> betetzen duen objektu bakarra <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> dela eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0908.svg\" alt=\"B(u)\" style=\"width:2.681em;height:1.001em\" loading=\"lazy\"> dela ematen du. Deskribapena <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-rekin identifikatuta, berdinen ordezkapenak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0911.svg\" alt=\"B(iota x H(x))\" style=\"width:5.707em;height:1.001em\" loading=\"lazy\"> ematen du."
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
     "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> ez dago aske <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">-n, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0913.svg\" alt=\"alpha_1=(exists y (forall x (alpha &lt;-&gt; x=y) and B(y)) -&gt; B(iota x alpha))\" style=\"width:22.868em;height:1.001em\" loading=\"lazy\">. Frogatu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0424.svg\" alt=\"tack alpha_1\" style=\"width:2.507em;height:1.001em\" loading=\"lazy\">."
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
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburua:</strong> 1. lerroko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0914.svg\" alt=\"? exists y (forall x (alpha &lt;-&gt; x=y) and B(y)) -&gt; B(iota x alpha)\" style=\"width:19.896em;height:1.001em\" loading=\"lazy\">. <strong>Irismena:</strong> 1. lerroa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0867.svg\" alt=\"M_0\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">; 2-13 lerroak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0868.svg\" alt=\"M_1\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">. <strong>Freskotasuna:</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> ez dago aske <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> formulan; 3. lerroko EPn <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> lekuko berria da."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i030.svg",
       "oina": null,
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
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0914.svg\" alt=\"? exists y (forall x (alpha &lt;-&gt; x=y) and B(y)) -&gt; B(iota x alpha)\" style=\"width:19.896em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "2",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0915.svg\" alt=\"exists y (forall x (alpha &lt;-&gt; x=y) and B(y))\" style=\"width:13.733em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "3",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0916.svg\" alt=\"forall x (alpha &lt;-&gt; x=u) and B(u)\" style=\"width:11.714em;height:1.001em\" loading=\"lazy\">",
         "EP, 2"
        ],
        [
         "4",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0917.svg\" alt=\"forall x (alpha &lt;-&gt; x=u)\" style=\"width:7.956em;height:1.001em\" loading=\"lazy\">",
         "EC, 3"
        ],
        [
         "5",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0289.svg\" alt=\"exists y forall x (alpha &lt;-&gt; x=y)\" style=\"width:9.137em;height:1.001em\" loading=\"lazy\">",
         "IP, 4"
        ],
        [
         "6",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0881.svg\" alt=\"S_x^(iota x alpha) alpha\" style=\"width:3.266em;height:1.001em\" loading=\"lazy\">",
         "DP, 5"
        ],
        [
         "7",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0918.svg\" alt=\"S_x^(iota x alpha) alpha &lt;-&gt; iota x alpha=u\" style=\"width:9.087em;height:1.001em\" loading=\"lazy\">",
         "EG, 4"
        ],
        [
         "8",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0919.svg\" alt=\"S_x^(iota x alpha) alpha -&gt; iota x alpha=u\" style=\"width:9.087em;height:1.001em\" loading=\"lazy\">",
         "EB, 7"
        ],
        [
         "9",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0920.svg\" alt=\"iota x alpha=u\" style=\"width:4.230em;height:1.001em\" loading=\"lazy\">",
         "MP, 8, 6"
        ],
        [
         "10",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0908.svg\" alt=\"B(u)\" style=\"width:2.681em;height:1.001em\" loading=\"lazy\">",
         "EC, 3"
        ],
        [
         "11",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0909.svg\" alt=\"forall x (x=u -&gt; B(x))\" style=\"width:9.686em;height:1.001em\" loading=\"lazy\">",
         "II, 10"
        ],
        [
         "12",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0921.svg\" alt=\"iota x alpha=u -&gt; B(iota x alpha)\" style=\"width:9.653em;height:1.001em\" loading=\"lazy\">",
         "EG, 11"
        ],
        [
         "13",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0922.svg\" alt=\"B(iota x alpha)\" style=\"width:3.832em;height:1.001em\" loading=\"lazy\">",
         "MP, 12, 9"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "28. ariketaren eskema orokortzen da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0078.svg\" alt=\"H(x)\" style=\"width:2.826em;height:1.001em\" loading=\"lazy\"> atomoaren ordez edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> formula erabiltzen da, ordezkapena <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0881.svg\" alt=\"S_x^(iota x alpha) alpha\" style=\"width:3.266em;height:1.001em\" loading=\"lazy\"> esplizituki erakutsiz."
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
     "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0923.svg\" alt=\"alpha_1=(forall x (P(x) &lt;-&gt; x=iota x P(x)) &lt;-&gt; exists y forall x (P(x) &lt;-&gt; x=y))\" style=\"width:28.729em;height:1.001em\" loading=\"lazy\">. Frogatu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0424.svg\" alt=\"tack alpha_1\" style=\"width:2.507em;height:1.001em\" loading=\"lazy\">."
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
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburuak:</strong> 1. lerroko baliokidetasuna; 2. lerroko ezkerretik eskuinerako inplikazioa; eta 5. lerroko eskuinetik ezkerrerako inplikazioa. <strong>Irismena:</strong> 1 eta 15 lerroak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0867.svg\" alt=\"M_0\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">; 2 eta 5 lerroak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0868.svg\" alt=\"M_1\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">; 3-4 eta 6-14 lerroak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0878.svg\" alt=\"M_2\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">. <strong>Freskotasuna:</strong> 7. lerroko EPn <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> lekuko berria da."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i031.svg",
       "oina": null,
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
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0924.svg\" alt=\"? forall x (P(x) &lt;-&gt; x=iota x P(x)) &lt;-&gt; exists y forall x (P(x) &lt;-&gt; x=y)\" style=\"width:25.757em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "2",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0925.svg\" alt=\"? forall x (P(x) &lt;-&gt; x=iota x P(x)) -&gt; exists y forall x (P(x) &lt;-&gt; x=y)\" style=\"width:25.757em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "3",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0926.svg\" alt=\"forall x (P(x) &lt;-&gt; x=iota x P(x))\" style=\"width:12.562em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "4",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0870.svg\" alt=\"exists y forall x (P(x) &lt;-&gt; x=y)\" style=\"width:10.864em;height:1.001em\" loading=\"lazy\">",
         "IP, 3"
        ],
        [
         "5",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0927.svg\" alt=\"? exists y forall x (P(x) &lt;-&gt; x=y) -&gt; forall x (P(x) &lt;-&gt; x=iota x P(x))\" style=\"width:25.757em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "6",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0870.svg\" alt=\"exists y forall x (P(x) &lt;-&gt; x=y)\" style=\"width:10.864em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "7",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0928.svg\" alt=\"forall x (P(x) &lt;-&gt; x=u)\" style=\"width:9.683em;height:1.001em\" loading=\"lazy\">",
         "EP, 6"
        ],
        [
         "8",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0871.svg\" alt=\"P(iota x P(x))\" style=\"width:5.558em;height:1.001em\" loading=\"lazy\">",
         "DP, 6"
        ],
        [
         "9",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0929.svg\" alt=\"P(iota x P(x)) &lt;-&gt; iota x P(x)=u\" style=\"width:13.106em;height:1.001em\" loading=\"lazy\">",
         "EG, 7"
        ],
        [
         "10",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0930.svg\" alt=\"P(iota x P(x)) -&gt; iota x P(x)=u\" style=\"width:13.106em;height:1.001em\" loading=\"lazy\">",
         "EB, 9"
        ],
        [
         "11",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0931.svg\" alt=\"iota x P(x)=u\" style=\"width:5.958em;height:1.001em\" loading=\"lazy\">",
         "MP, 10, 8"
        ],
        [
         "12",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0932.svg\" alt=\"forall w (w=u -&gt; forall x (P(x) &lt;-&gt; x=w))\" style=\"width:17.198em;height:1.001em\" loading=\"lazy\">",
         "II, 7"
        ],
        [
         "13",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0933.svg\" alt=\"iota x P(x)=u -&gt; forall x (P(x) &lt;-&gt; x=iota x P(x))\" style=\"width:20.110em;height:1.001em\" loading=\"lazy\">",
         "EG, 12"
        ],
        [
         "14",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0926.svg\" alt=\"forall x (P(x) &lt;-&gt; x=iota x P(x))\" style=\"width:12.562em;height:1.001em\" loading=\"lazy\">",
         "MP, 13, 11"
        ],
        [
         "15",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0934.svg\" alt=\"forall x (P(x) &lt;-&gt; x=iota x P(x)) &lt;-&gt; exists y forall x (P(x) &lt;-&gt; x=y)\" style=\"width:25.017em;height:1.001em\" loading=\"lazy\">",
         "IB, 2, 5"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Ezkerretik eskuinera deskribapen bera existentzialaren lekuko da. Eskuinetik ezkerrera, DPk deskribatutako objektuak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0029.svg\" alt=\"P\" style=\"width:1.116em;height:1.001em\" loading=\"lazy\"> betetzen duela ematen du, eta bakartasunak aukeratutako <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-rekin identifikatzen du."
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
     "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0935.svg\" alt=\"alpha_1=exists y forall x (A(m,x) &lt;-&gt; x=y)\" style=\"width:15.170em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0936.svg\" alt=\"alpha_2=iota x A(m,x)=iota x A(a,x)\" style=\"width:14.232em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0937.svg\" alt=\"alpha_3=iota x A(a,x)=p\" style=\"width:9.797em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0938.svg\" alt=\"alpha_4=A(m,iota x A(x,a))\" style=\"width:10.954em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0939.svg\" alt=\"alpha_5=iota x A(x,a)=p\" style=\"width:9.797em;height:1.001em\" loading=\"lazy\">. Frogatu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0830.svg\" alt=\"alpha_1,alpha_2,alpha_3,alpha_4 tack alpha_5\" style=\"width:9.441em;height:1.001em\" loading=\"lazy\">."
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
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburua:</strong> 1. lerroko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0940.svg\" alt=\"? iota x A(x,a)=p\" style=\"width:7.725em;height:1.001em\" loading=\"lazy\">. <strong>Irismena:</strong> 1-16 lerro guztiak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0867.svg\" alt=\"M_0\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\"> mailan daude. <strong>Freskotasuna:</strong> 5. lerroko EPn <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> lekuko berria da."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i032.svg",
       "oina": null,
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
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0940.svg\" alt=\"? iota x A(x,a)=p\" style=\"width:7.725em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "2",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0941.svg\" alt=\"A(m,iota x A(x,a))\" style=\"width:8.142em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0745.svg\" alt=\"alpha_4\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "3",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0942.svg\" alt=\"exists y forall x (A(m,x) &lt;-&gt; x=y)\" style=\"width:12.359em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "4",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0943.svg\" alt=\"A(m,iota x A(m,x))\" style=\"width:8.547em;height:1.001em\" loading=\"lazy\">",
         "DP, 3"
        ],
        [
         "5",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0944.svg\" alt=\"forall x (A(m,x) &lt;-&gt; x=u)\" style=\"width:11.178em;height:1.001em\" loading=\"lazy\">",
         "EP, 3"
        ],
        [
         "6",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0945.svg\" alt=\"A(m,iota x A(m,x)) &lt;-&gt; iota x A(m,x)=u\" style=\"width:17.589em;height:1.001em\" loading=\"lazy\">",
         "EG, 5"
        ],
        [
         "7",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0946.svg\" alt=\"A(m,iota x A(m,x)) -&gt; iota x A(m,x)=u\" style=\"width:17.589em;height:1.001em\" loading=\"lazy\">",
         "EB, 6"
        ],
        [
         "8",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0947.svg\" alt=\"iota x A(m,x)=u\" style=\"width:7.452em;height:1.001em\" loading=\"lazy\">",
         "MP, 7, 4"
        ],
        [
         "9",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0948.svg\" alt=\"A(m,iota x A(x,a)) &lt;-&gt; iota x A(x,a)=u\" style=\"width:16.781em;height:1.001em\" loading=\"lazy\">",
         "EG, 5"
        ],
        [
         "10",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0949.svg\" alt=\"A(m,iota x A(x,a)) -&gt; iota x A(x,a)=u\" style=\"width:16.781em;height:1.001em\" loading=\"lazy\">",
         "EB, 9"
        ],
        [
         "11",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0950.svg\" alt=\"iota x A(x,a)=u\" style=\"width:7.048em;height:1.001em\" loading=\"lazy\">",
         "MP, 10, 2"
        ],
        [
         "12",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0951.svg\" alt=\"iota x A(m,x)=iota x A(x,a)\" style=\"width:11.421em;height:1.001em\" loading=\"lazy\">",
         "TI, 8, 11"
        ],
        [
         "13",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0952.svg\" alt=\"iota x A(m,x)=iota x A(a,x)\" style=\"width:11.421em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "14",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0953.svg\" alt=\"iota x A(x,a)=iota x A(a,x)\" style=\"width:11.017em;height:1.001em\" loading=\"lazy\">",
         "TI, 12, 13"
        ],
        [
         "15",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0954.svg\" alt=\"iota x A(a,x)=p\" style=\"width:6.986em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "16",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0955.svg\" alt=\"iota x A(x,a)=p\" style=\"width:6.986em;height:1.001em\" loading=\"lazy\">",
         "TI, 14, 15"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Lehen bakartasun-premisak Mariak maite dituen bi deskribapenak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> berarekin berdintzen ditu. Ondoren, TIren bidez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> kateatzen dira."
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
     "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0956.svg\" alt=\"alpha_1=t=iota x A(x,c)\" style=\"width:9.533em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0957.svg\" alt=\"alpha_2=not S(r,k)\" style=\"width:7.147em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0958.svg\" alt=\"alpha_3=forall x (not S(x,k) -&gt; A(x,c))\" style=\"width:14.884em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0959.svg\" alt=\"alpha_4=exists y forall x (A(x,c) &lt;-&gt; x=y)\" style=\"width:14.684em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0960.svg\" alt=\"alpha_5=t=r\" style=\"width:5.521em;height:1.001em\" loading=\"lazy\">. Frogatu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0830.svg\" alt=\"alpha_1,alpha_2,alpha_3,alpha_4 tack alpha_5\" style=\"width:9.441em;height:1.001em\" loading=\"lazy\">."
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
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburua:</strong> 1. lerroko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0961.svg\" alt=\"? t=r\" style=\"width:3.449em;height:1.001em\" loading=\"lazy\">. <strong>Irismena:</strong> 1-17 lerro guztiak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0867.svg\" alt=\"M_0\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\"> mailan daude. <strong>Freskotasuna:</strong> 8. lerroko EPn <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> lekuko berria da."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i033.svg",
       "oina": null,
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
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0961.svg\" alt=\"? t=r\" style=\"width:3.449em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "2",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0962.svg\" alt=\"forall x (not S(x,k) -&gt; A(x,c))\" style=\"width:12.073em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "3",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0963.svg\" alt=\"not S(r,k) -&gt; A(r,c)\" style=\"width:9.489em;height:1.001em\" loading=\"lazy\">",
         "EG, 2"
        ],
        [
         "4",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0964.svg\" alt=\"not S(r,k)\" style=\"width:4.336em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "5",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0965.svg\" alt=\"A(r,c)\" style=\"width:3.562em;height:1.001em\" loading=\"lazy\">",
         "MP, 3, 4"
        ],
        [
         "6",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0966.svg\" alt=\"exists y forall x (A(x,c) &lt;-&gt; x=y)\" style=\"width:11.873em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0745.svg\" alt=\"alpha_4\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "7",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0967.svg\" alt=\"A(iota x A(x,c),c)\" style=\"width:7.574em;height:1.001em\" loading=\"lazy\">",
         "DP, 6"
        ],
        [
         "8",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0968.svg\" alt=\"forall x (A(x,c) &lt;-&gt; x=u)\" style=\"width:10.692em;height:1.001em\" loading=\"lazy\">",
         "EP, 6"
        ],
        [
         "9",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0969.svg\" alt=\"A(iota x A(x,c),c) &lt;-&gt; iota x A(x,c)=u\" style=\"width:16.131em;height:1.001em\" loading=\"lazy\">",
         "EG, 8"
        ],
        [
         "10",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0970.svg\" alt=\"A(iota x A(x,c),c) -&gt; iota x A(x,c)=u\" style=\"width:16.131em;height:1.001em\" loading=\"lazy\">",
         "EB, 9"
        ],
        [
         "11",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0971.svg\" alt=\"iota x A(x,c)=u\" style=\"width:6.966em;height:1.001em\" loading=\"lazy\">",
         "MP, 10, 7"
        ],
        [
         "12",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0972.svg\" alt=\"A(r,c) &lt;-&gt; r=u\" style=\"width:8.107em;height:1.001em\" loading=\"lazy\">",
         "EG, 8"
        ],
        [
         "13",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0973.svg\" alt=\"A(r,c) -&gt; r=u\" style=\"width:8.107em;height:1.001em\" loading=\"lazy\">",
         "EB, 12"
        ],
        [
         "14",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0974.svg\" alt=\"r=u\" style=\"width:2.954em;height:1.001em\" loading=\"lazy\">",
         "MP, 13, 5"
        ],
        [
         "15",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0975.svg\" alt=\"iota x A(x,c)=r\" style=\"width:6.841em;height:1.001em\" loading=\"lazy\">",
         "TI, 11, 14"
        ],
        [
         "16",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0976.svg\" alt=\"t=iota x A(x,c)\" style=\"width:6.722em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "17",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0977.svg\" alt=\"t=r\" style=\"width:2.710em;height:1.001em\" loading=\"lazy\">",
         "TI, 16, 15"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Robertok <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0978.svg\" alt=\"A(x,c)\" style=\"width:3.687em;height:1.001em\" loading=\"lazy\"> betetzen duela ondorioztatzen da, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0745.svg\" alt=\"alpha_4\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ren bakartasunak Roberto deskribatutako objektuarekin berdintzen du. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ek azken identitatea Toribiora eramaten du."
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
     "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0979.svg\" alt=\"alpha_1=(forall x,y (P(x) and P(y) and not x=y) -&gt; iota x P(x)=iota z (z=z))\" style=\"width:29.859em;height:1.001em\" loading=\"lazy\">. Frogatu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0424.svg\" alt=\"tack alpha_1\" style=\"width:2.507em;height:1.001em\" loading=\"lazy\">."
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
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburuak:</strong> 1. lerroko inplikazioa eta 4. lerroko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0980.svg\" alt=\"? not exists y forall x (P(x) &lt;-&gt; x=y)\" style=\"width:12.376em;height:1.001em\" loading=\"lazy\">. <strong>Irismena:</strong> 1. lerroa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0867.svg\" alt=\"M_0\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">; 2-3 eta 18 lerroak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0868.svg\" alt=\"M_1\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">; 4. lerroa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0878.svg\" alt=\"M_2\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">; 5-17 lerroak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0879.svg\" alt=\"M_3\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">. <strong>Freskotasuna:</strong> 3. lerroko GEPn <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0056.svg\" alt=\"w\" style=\"width:1.043em;height:1.001em\" loading=\"lazy\"> aldagai berriak dira; 7. lerroko EPn <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0055.svg\" alt=\"v\" style=\"width:0.785em;height:1.001em\" loading=\"lazy\"> lekuko berria da."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i034.svg",
       "oina": null,
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
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0981.svg\" alt=\"? forall x,y (P(x) and P(y) and not x=y) -&gt; iota x P(x)=iota z (z=z)\" style=\"width:26.887em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "2",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0982.svg\" alt=\"forall x,y (P(x) and P(y) and not x=y)\" style=\"width:14.687em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "3",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0983.svg\" alt=\"P(u) and P(w) and not u=w\" style=\"width:11.703em;height:1.001em\" loading=\"lazy\">",
         "GEP, 2"
        ],
        [
         "4",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0980.svg\" alt=\"? not exists y forall x (P(x) &lt;-&gt; x=y)\" style=\"width:12.376em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "5",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0984.svg\" alt=\"not not exists y forall x (P(x) &lt;-&gt; x=y)\" style=\"width:12.409em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "6",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0870.svg\" alt=\"exists y forall x (P(x) &lt;-&gt; x=y)\" style=\"width:10.864em;height:1.001em\" loading=\"lazy\">",
         "DN, 5"
        ],
        [
         "7",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0985.svg\" alt=\"forall x (P(x) &lt;-&gt; x=v)\" style=\"width:9.595em;height:1.001em\" loading=\"lazy\">",
         "EP, 6"
        ],
        [
         "8",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0986.svg\" alt=\"P(u) &lt;-&gt; u=v\" style=\"width:7.261em;height:1.001em\" loading=\"lazy\">",
         "EG, 7"
        ],
        [
         "9",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0987.svg\" alt=\"P(u) -&gt; u=v\" style=\"width:7.261em;height:1.001em\" loading=\"lazy\">",
         "EB, 8"
        ],
        [
         "10",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0440.svg\" alt=\"P(u)\" style=\"width:2.679em;height:1.001em\" loading=\"lazy\">",
         "EC, 3"
        ],
        [
         "11",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0988.svg\" alt=\"u=v\" style=\"width:2.991em;height:1.001em\" loading=\"lazy\">",
         "MP, 9, 10"
        ],
        [
         "12",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0989.svg\" alt=\"P(w) &lt;-&gt; w=v\" style=\"width:7.601em;height:1.001em\" loading=\"lazy\">",
         "EG, 7"
        ],
        [
         "13",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0990.svg\" alt=\"P(w) -&gt; w=v\" style=\"width:7.601em;height:1.001em\" loading=\"lazy\">",
         "EB, 12"
        ],
        [
         "14",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0991.svg\" alt=\"P(w)\" style=\"width:2.849em;height:1.001em\" loading=\"lazy\">",
         "EC, 3"
        ],
        [
         "15",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0992.svg\" alt=\"w=v\" style=\"width:3.161em;height:1.001em\" loading=\"lazy\">",
         "MP, 13, 14"
        ],
        [
         "16",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0789.svg\" alt=\"u=w\" style=\"width:3.249em;height:1.001em\" loading=\"lazy\">",
         "TI, 11, 15"
        ],
        [
         "17",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0993.svg\" alt=\"not u=w\" style=\"width:4.022em;height:1.001em\" loading=\"lazy\">",
         "EC, 3"
        ],
        [
         "18",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0994.svg\" alt=\"iota x P(x)=iota z (z=z)\" style=\"width:9.870em;height:1.001em\" loading=\"lazy\">",
         "DI, 4"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Bi objektu desberdinek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0029.svg\" alt=\"P\" style=\"width:1.116em;height:1.001em\" loading=\"lazy\"> betetzen badute, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0029.svg\" alt=\"P\" style=\"width:1.116em;height:1.001em\" loading=\"lazy\">-k ezin du objektu bakarra definitu. DIren arabera, deskribapen ez-bakarra termino lehenetsiarekin berdintzen da."
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
     "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0995.svg\" alt=\"alpha_1=(iota x not exists y (P(y) and M(y,x))=d)\" style=\"width:17.698em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0996.svg\" alt=\"alpha_2=P(d)\" style=\"width:5.458em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0997.svg\" alt=\"alpha_3=exists x (P(x) and E(x))\" style=\"width:11.464em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0998.svg\" alt=\"alpha_4=forall x (P(x) and E(x) -&gt; forall y (P(y) and not E(y) -&gt; M(x,y)))\" style=\"width:28.268em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0999.svg\" alt=\"alpha_5=(not E(d) -&gt; exists z (P(z) and M(z,iota x not exists y (P(y) and M(y,x)))))\" style=\"width:29.559em;height:1.001em\" loading=\"lazy\">. Frogatu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0830.svg\" alt=\"alpha_1,alpha_2,alpha_3,alpha_4 tack alpha_5\" style=\"width:9.441em;height:1.001em\" loading=\"lazy\">."
    },
    {
     "mota": "oharra",
     "titulua": "Argumentu ontologikoaren formalizazioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1000.svg\" alt=\"d\" style=\"width:0.840em;height:1.001em\" loading=\"lazy\"> pentsa daitekeen izakirik handiena da. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1000.svg\" alt=\"d\" style=\"width:0.840em;height:1.001em\" loading=\"lazy\"> pentsa daiteke; pentsa daitekeen eta existitzen den izakiren bat dago; eta pentsa daitekeen izaki existitu oro handiagoa da pentsa daitekeen baina existitzen ez den edozein izaki baino. Beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1000.svg\" alt=\"d\" style=\"width:0.840em;height:1.001em\" loading=\"lazy\"> existitzen ez bada, pentsa daitekeen izaki bat dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1000.svg\" alt=\"d\" style=\"width:0.840em;height:1.001em\" loading=\"lazy\"> baino handiagoa dena. Formalizazio honetan existentzia <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0161.svg\" alt=\"E\" style=\"width:1.128em;height:1.001em\" loading=\"lazy\"> predikatua da, ez kuantifikatzailea."
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
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburua:</strong> 1. lerroko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1001.svg\" alt=\"? not E(d) -&gt; exists z (P(z) and M(z,iota x not exists y (P(y) and M(y,x))))\" style=\"width:26.587em;height:1.001em\" loading=\"lazy\">. <strong>Irismena:</strong> 1. lerroa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0867.svg\" alt=\"M_0\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">; 2-18 lerroak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0868.svg\" alt=\"M_1\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">. <strong>Freskotasuna:</strong> 4. lerroko EPn <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> lekuko berria da eta ez da azken ondorioan aske geratzen."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i035.svg",
       "oina": null,
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
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1001.svg\" alt=\"? not E(d) -&gt; exists z (P(z) and M(z,iota x not exists y (P(y) and M(y,x))))\" style=\"width:26.587em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "2",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1002.svg\" alt=\"not E(d)\" style=\"width:3.431em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "3",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1003.svg\" alt=\"exists x (P(x) and E(x))\" style=\"width:8.653em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "4",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1004.svg\" alt=\"P(u) and E(u)\" style=\"width:6.446em;height:1.001em\" loading=\"lazy\">",
         "EP, 3"
        ],
        [
         "5",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1005.svg\" alt=\"forall x (P(x) and E(x) -&gt; forall y (P(y) and not E(y) -&gt; M(x,y)))\" style=\"width:25.457em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0745.svg\" alt=\"alpha_4\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "6",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1006.svg\" alt=\"P(u) and E(u) -&gt; forall y (P(y) and not E(y) -&gt; M(u,y))\" style=\"width:23.123em;height:1.001em\" loading=\"lazy\">",
         "EG, 5"
        ],
        [
         "7",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1007.svg\" alt=\"forall y (P(y) and not E(y) -&gt; M(u,y))\" style=\"width:15.086em;height:1.001em\" loading=\"lazy\">",
         "MP, 6, 4"
        ],
        [
         "8",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1008.svg\" alt=\"P(d) and not E(d) -&gt; M(u,d)\" style=\"width:12.904em;height:1.001em\" loading=\"lazy\">",
         "EG, 7"
        ],
        [
         "9",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1009.svg\" alt=\"P(d)\" style=\"width:2.647em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "10",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1010.svg\" alt=\"P(d) and not E(d)\" style=\"width:7.154em;height:1.001em\" loading=\"lazy\">",
         "IC, 9, 2"
        ],
        [
         "11",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1011.svg\" alt=\"M(u,d)\" style=\"width:4.160em;height:1.001em\" loading=\"lazy\">",
         "MP, 8, 10"
        ],
        [
         "12",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1012.svg\" alt=\"forall w (w=d -&gt; M(u,w))\" style=\"width:11.675em;height:1.001em\" loading=\"lazy\">",
         "II, 11"
        ],
        [
         "13",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1013.svg\" alt=\"iota x not exists y (P(y) and M(y,x))=d\" style=\"width:13.986em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "14",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1014.svg\" alt=\"iota x not exists y (P(y) and M(y,x))=d -&gt; M(u,iota x not exists y (P(y) and M(y,x)))\" style=\"width:30.707em;height:1.001em\" loading=\"lazy\">",
         "EG, 12"
        ],
        [
         "15",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1015.svg\" alt=\"M(u,iota x not exists y (P(y) and M(y,x)))\" style=\"width:15.131em;height:1.001em\" loading=\"lazy\">",
         "MP, 14, 13"
        ],
        [
         "16",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0440.svg\" alt=\"P(u)\" style=\"width:2.679em;height:1.001em\" loading=\"lazy\">",
         "EC, 4"
        ],
        [
         "17",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1016.svg\" alt=\"P(u) and M(u,iota x not exists y (P(y) and M(y,x)))\" style=\"width:18.886em;height:1.001em\" loading=\"lazy\">",
         "IC, 16, 15"
        ],
        [
         "18",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1017.svg\" alt=\"exists z (P(z) and M(z,iota x not exists y (P(y) and M(y,x))))\" style=\"width:20.826em;height:1.001em\" loading=\"lazy\">",
         "IP, 17"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ren lekuko existentearen eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1000.svg\" alt=\"d\" style=\"width:0.840em;height:1.001em\" loading=\"lazy\"> existitzen ez delako hipotesiaren artean <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1011.svg\" alt=\"M(u,d)\" style=\"width:4.160em;height:1.001em\" loading=\"lazy\"> lortzen da. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1000.svg\" alt=\"d\" style=\"width:0.840em;height:1.001em\" loading=\"lazy\"> deskribapenarekin ordezten du, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> existentzialki sartzen da."
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
     "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1018.svg\" alt=\"alpha_1=exists z forall x f(x,z)=x\" style=\"width:11.201em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1019.svg\" alt=\"alpha_2=forall x,y,u,w (f(x,u)=y and f(x,w)=y -&gt; u=w)\" style=\"width:26.404em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1020.svg\" alt=\"alpha_3=forall x f(x,iota y forall x f(x,y)=x)=x\" style=\"width:17.410em;height:1.001em\" loading=\"lazy\">. Frogatu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0717.svg\" alt=\"alpha_1,alpha_2 tack alpha_3\" style=\"width:5.877em;height:1.001em\" loading=\"lazy\">."
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
       "html": "<strong>Kontrol-oharra.</strong> <strong>Helburuak (?)</strong>: 1, 4, 5, 6 eta 14 lerroak. <strong>Irismena:</strong> 1-3 eta 20-21 lerroak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0867.svg\" alt=\"M_0\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">; 4. lerroa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0868.svg\" alt=\"M_1\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">; 5 eta 19 lerroak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0878.svg\" alt=\"M_2\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">; 6 eta 14 lerroak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0879.svg\" alt=\"M_3\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">; 7-13 eta 15-18 lerroak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1021.svg\" alt=\"M_4\" style=\"width:1.860em;height:1.001em\" loading=\"lazy\">. <strong>Freskotasuna:</strong> 3. lerroko EPn <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0718.svg\" alt=\"z_0\" style=\"width:1.275em;height:1.001em\" loading=\"lazy\"> berria da; 4-19 azpidedukzioan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\"> arbitrarioa da."
      },
      {
       "mota": "irudia",
       "src": "media/irudiak/00aa_02logika/i036.svg",
       "oina": null,
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
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1022.svg\" alt=\"? forall x f(x,iota y forall x f(x,y)=x)=x\" style=\"width:15.339em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "2",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1023.svg\" alt=\"exists z forall x f(x,z)=x\" style=\"width:8.390em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "3",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1024.svg\" alt=\"forall x f(x,z_0)=x\" style=\"width:7.664em;height:1.001em\" loading=\"lazy\">",
         "EP, 2"
        ],
        [
         "4",
         "1",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1025.svg\" alt=\"? forall y (forall x f(x,y)=x &lt;-&gt; y=z_0)\" style=\"width:15.221em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "5",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1026.svg\" alt=\"? forall x f(x,y)=x &lt;-&gt; y=z_0\" style=\"width:12.949em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "6",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1027.svg\" alt=\"? forall x f(x,y)=x -&gt; y=z_0\" style=\"width:12.949em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "7",
         "4",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1028.svg\" alt=\"forall x f(x,y)=x\" style=\"width:7.200em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "8",
         "4",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1029.svg\" alt=\"f(x,y)=x\" style=\"width:5.766em;height:1.001em\" loading=\"lazy\">",
         "EG, 7"
        ],
        [
         "9",
         "4",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0727.svg\" alt=\"f(x,z_0)=x\" style=\"width:6.231em;height:1.001em\" loading=\"lazy\">",
         "EG, 3"
        ],
        [
         "10",
         "4",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0733.svg\" alt=\"forall x,y,u,w (f(x,u)=y and f(x,w)=y -&gt; u=w)\" style=\"width:23.593em;height:1.001em\" loading=\"lazy\">",
         "prem. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">"
        ],
        [
         "11",
         "4",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1030.svg\" alt=\"f(x,y)=x and f(x,z_0)=x -&gt; y=z_0\" style=\"width:18.083em;height:1.001em\" loading=\"lazy\">",
         "GEG, 10"
        ],
        [
         "12",
         "4",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1031.svg\" alt=\"f(x,y)=x and f(x,z_0)=x\" style=\"width:13.074em;height:1.001em\" loading=\"lazy\">",
         "IC, 8, 9"
        ],
        [
         "13",
         "4",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1032.svg\" alt=\"y=z_0\" style=\"width:3.419em;height:1.001em\" loading=\"lazy\">",
         "MP, 11, 12"
        ],
        [
         "14",
         "3",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1033.svg\" alt=\"? y=z_0 -&gt; forall x f(x,y)=x\" style=\"width:12.949em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "15",
         "4",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1032.svg\" alt=\"y=z_0\" style=\"width:3.419em;height:1.001em\" loading=\"lazy\">",
         ""
        ],
        [
         "16",
         "4",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1034.svg\" alt=\"forall u (u=z_0 -&gt; forall x f(x,u)=x)\" style=\"width:14.669em;height:1.001em\" loading=\"lazy\">",
         "II, 3"
        ],
        [
         "17",
         "4",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1035.svg\" alt=\"y=z_0 -&gt; forall x f(x,y)=x\" style=\"width:12.209em;height:1.001em\" loading=\"lazy\">",
         "EG, 16"
        ],
        [
         "18",
         "4",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1028.svg\" alt=\"forall x f(x,y)=x\" style=\"width:7.200em;height:1.001em\" loading=\"lazy\">",
         "MP, 17, 15"
        ],
        [
         "19",
         "2",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1036.svg\" alt=\"forall x f(x,y)=x &lt;-&gt; y=z_0\" style=\"width:12.209em;height:1.001em\" loading=\"lazy\">",
         "IB, 6, 14"
        ],
        [
         "20",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1037.svg\" alt=\"exists z forall y (forall x f(x,y)=x &lt;-&gt; y=z)\" style=\"width:15.207em;height:1.001em\" loading=\"lazy\">",
         "IP, 4"
        ],
        [
         "21",
         "0",
         "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1038.svg\" alt=\"forall x f(x,iota y forall x f(x,y)=x)=x\" style=\"width:14.599em;height:1.001em\" loading=\"lazy\">",
         "DP, 20"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ek eskuin-identitate bat ematen du; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-k bakarra dela frogatzen du. Horrenbestez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1039.svg\" alt=\"iota y forall x f(x,y)=x\" style=\"width:8.210em;height:1.001em\" loading=\"lazy\"> deskribapenak identitate hori izendatzen du eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> ondorioztatzen da."
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
       "html": "Atal honetan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0291.svg\" alt=\"Gamma tack alpha\" style=\"width:3.026em;height:1.001em\" loading=\"lazy\"> idazkerak dedukzio formal bat badagoela adierazten du; ez da oraindik eredu guztietako ondorio semantikoa. Formalismoa azpimarratu behar denean <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1040.svg\" alt=\"tack_(cal(L))\" style=\"width:0.918em;height:1.230em\" loading=\"lazy\"> idatziko dugu. Mosterinen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0273.svg\" alt=\"Lambda x alpha\" style=\"width:2.417em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0276.svg\" alt=\"V x alpha\" style=\"width:2.537em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0278.svg\" alt=\"S_x^t alpha\" style=\"width:2.251em;height:1.001em\" loading=\"lazy\"> notazioak, hurrenez hurren, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0274.svg\" alt=\"forall x alpha\" style=\"width:2.385em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0277.svg\" alt=\"exists x alpha\" style=\"width:2.258em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0279.svg\" alt=\"alpha[t/x]\" style=\"width:2.674em;height:1.001em\" loading=\"lazy\"> izango dira hemen."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko sententzia bada eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1042.svg\" alt=\"alpha tack_(cal(L)) beta\" style=\"width:2.999em;height:1.230em\" loading=\"lazy\">, orduan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1043.svg\" alt=\"tack_(cal(L)) (alpha -&gt; beta)\" style=\"width:5.380em;height:1.230em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1044.svg\" alt=\"cal(D)_1\" style=\"width:1.571em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> premisatik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\"> deduzitzen duen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0016.svg\" alt=\"n\" style=\"width:0.905em;height:1.001em\" loading=\"lazy\"> lerroko dedukzioa. Eraiki <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1045.svg\" alt=\"cal(D)_2\" style=\"width:1.571em;height:1.001em\" loading=\"lazy\"> honela: ireki <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0354.svg\" alt=\"? (alpha -&gt; beta)\" style=\"width:5.090em;height:1.001em\" loading=\"lazy\">; hurrengo lerroan suposatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">; ondoren ireki <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0305.svg\" alt=\"? beta\" style=\"width:1.647em;height:1.001em\" loading=\"lazy\"> eta kopiatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1044.svg\" alt=\"cal(D)_1\" style=\"width:1.571em;height:1.001em\" loading=\"lazy\">-eko lerro guztiak irismen-marka bat gehiagoz. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1044.svg\" alt=\"cal(D)_1\" style=\"width:1.571em;height:1.001em\" loading=\"lazy\">-en <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> premisa gisa sartzen zen bakoitzean, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1045.svg\" alt=\"cal(D)_2\" style=\"width:1.571em;height:1.001em\" loading=\"lazy\">-n bigarren lerroko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> R erregelaz errepikatzen da. Gainerako inferentziek bere horretan jarraitzen dute. Horrela, kopiatutako zatiak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\"> ematen du, baldintzazko helburua ixten da eta ez da premisarik gelditzen. Beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1043.svg\" alt=\"tack_(cal(L)) (alpha -&gt; beta)\" style=\"width:5.380em;height:1.230em\" loading=\"lazy\">."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> sententzia multzoa bada eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1046.svg\" alt=\"Gamma tack_(cal(L)) alpha\" style=\"width:3.026em;height:1.230em\" loading=\"lazy\">, orduan badira <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-ko formula finituki asko, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0368.svg\" alt=\"gamma_1, dots, gamma_n\" style=\"width:4.572em;height:1.001em\" loading=\"lazy\">, halakoak non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1047.svg\" alt=\"tack_(cal(L)) ((gamma_1 and dots and gamma_n) -&gt; alpha)\" style=\"width:11.489em;height:1.230em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dedukzioaren finitude-teoremak dio benetan erabilitako premisek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-ren azpimultzo finitu bat osatzen dutela; hortaz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0366.svg\" alt=\"gamma_1, dots, gamma_n tack alpha\" style=\"width:6.664em;height:1.001em\" loading=\"lazy\">. Konjuntzioa premisa bakar bihurtzeko propietateak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0367.svg\" alt=\"(gamma_1 and dots and gamma_n) tack alpha\" style=\"width:9.109em;height:1.001em\" loading=\"lazy\"> ematen du. Azkenik, 5.1 aplikatuta konjuntzio hori baldintzaren aurrekarira pasatzen da."
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
       "html": "Izan bedi <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko sententzia."
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1048.svg\" alt=\"Gamma union {alpha} tack not alpha\" style=\"width:6.984em;height:1.001em\" loading=\"lazy\"> bada, orduan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1049.svg\" alt=\"Gamma tack not alpha\" style=\"width:3.798em;height:1.001em\" loading=\"lazy\">.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1050.svg\" alt=\"Gamma union {not alpha} tack alpha\" style=\"width:6.984em;height:1.001em\" loading=\"lazy\"> bada, orduan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0291.svg\" alt=\"Gamma tack alpha\" style=\"width:3.026em;height:1.001em\" loading=\"lazy\">."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lehen kasuan, hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1051.svg\" alt=\"Gamma union {alpha}\" style=\"width:4.120em;height:1.001em\" loading=\"lazy\">-tik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\">-ren dedukzio bat. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-tik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> frogatzeko ireki helburua eta suposatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0411.svg\" alt=\"not not alpha\" style=\"width:2.496em;height:1.001em\" loading=\"lazy\">; DNz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> lortzen da. Jatorrizko dedukzio osoa irismen- marka bat gehiagoz kopiatu, baina jatorrizko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> premisa bakoitza lortu berri den <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> lerroaren errepikapenaz ordezkatu. Kopiaren premisa bakarrak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-tik datoz eta amaieran <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> lortzen da; horrek irekitako helburua ixten du. Bigarren baieztapena simetrikoki frogatzen da, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> trukatuz."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko terminoa bada, orduan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1052.svg\" alt=\"tack_(cal(L)) exists x (x = t)\" style=\"width:6.071em;height:1.230em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ireki <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1053.svg\" alt=\"exists x(x=t)\" style=\"width:5.042em;height:1.001em\" loading=\"lazy\"> helburua eta suposatu haren ezeztapena. NPz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1054.svg\" alt=\"forall x not(x=t)\" style=\"width:5.942em;height:1.001em\" loading=\"lazy\">; EGz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ren ordez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\"> jarriz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1055.svg\" alt=\"not(t=t)\" style=\"width:4.264em;height:1.001em\" loading=\"lazy\">. Baina I erregela eratorriak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0386.svg\" alt=\"t=t\" style=\"width:2.591em;height:1.001em\" loading=\"lazy\"> ematen du premisarik gabe. Kontraesanak helburua ixten du."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> ez bada libre <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">-n eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1043.svg\" alt=\"tack_(cal(L)) (alpha -&gt; beta)\" style=\"width:5.380em;height:1.230em\" loading=\"lazy\">, orduan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1056.svg\" alt=\"tack_(cal(L)) (alpha -&gt; forall x beta)\" style=\"width:6.813em;height:1.230em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ireki <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1057.svg\" alt=\"alpha -&gt; forall x beta\" style=\"width:4.883em;height:1.001em\" loading=\"lazy\"> eta suposatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">. Premisarik gabeko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0374.svg\" alt=\"alpha -&gt; beta\" style=\"width:3.450em;height:1.001em\" loading=\"lazy\"> teorema erabilgarri da; MPz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\"> lortzen da. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> ez da libre <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> hipotesian, ezta aurreko beste premisaren batean ere; beraz, elementu arbitrarioaren eraikuntza-erregelaz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1058.svg\" alt=\"forall x beta\" style=\"width:2.341em;height:1.001em\" loading=\"lazy\"> helburua itxi daiteke. Baldintzazko froga ixtean emaitza premisarik gabekoa da."
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
       "html": "Izan bitez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1059.svg\" alt=\"t_1,t_2,f(t_1,dots,t_n)\" style=\"width:8.699em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko terminoak eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1060.svg\" alt=\"P(t_1,dots,t_n)\" style=\"width:6.015em;height:1.001em\" loading=\"lazy\"> formula. Aukeratu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1061.svg\" alt=\"x,y,x_1,dots,x_n\" style=\"width:6.989em;height:1.001em\" loading=\"lazy\"> aldagai freskoak, termino horietan libre ez daudenak. Orduan:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1062.svg\" alt=\"tack P(t_1,dots,t_n) &lt;-&gt; exists x_1 dots x_n (x_1=t_1 and dots and x_n=t_n and P(x_1,dots,x_n))\" style=\"width:32.545em;height:1.001em\" loading=\"lazy\">.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1063.svg\" alt=\"tack x=f(t_1,dots,t_n) &lt;-&gt; exists x_1 dots x_n (x_1=t_1 and dots and x_n=t_n and x=f(x_1,dots,x_n))\" style=\"width:36.490em;height:1.001em\" loading=\"lazy\">.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1064.svg\" alt=\"tack t_1=t_2 &lt;-&gt; exists x y (x=t_1 and y=t_2 and x=y)\" style=\"width:20.898em;height:1.001em\" loading=\"lazy\">."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hirugarren baliokidetasuna garatuko dugu. Ezkerretik eskuinera, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0185.svg\" alt=\"t_1=t_2\" style=\"width:3.643em;height:1.001em\" loading=\"lazy\"> suposatu. I erregelaz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1065.svg\" alt=\"t_1=t_1\" style=\"width:3.643em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0388.svg\" alt=\"t_2=t_2\" style=\"width:3.643em;height:1.001em\" loading=\"lazy\"> ditugu; ICz hirurak elkartu eta GIPz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0746.svg\" alt=\"x,y\" style=\"width:1.988em;height:1.001em\" loading=\"lazy\"> existentzialak sartu: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1066.svg\" alt=\"exists x y(x=t_1 and y=t_2 and x=y)\" style=\"width:14.636em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Alderantziz, existentziala suposatu. GEPz bi aldagai kritiko berri hartu, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1067.svg\" alt=\"u=t_1 and w=t_2 and u=w\" style=\"width:12.294em;height:1.001em\" loading=\"lazy\"> lortzeko. ECz hiru osagaiak bereizi. TIren bidez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1068.svg\" alt=\"u=t_1\" style=\"width:3.361em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0789.svg\" alt=\"u=w\" style=\"width:3.249em;height:1.001em\" loading=\"lazy\">-tik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1069.svg\" alt=\"t_1=w\" style=\"width:3.531em;height:1.001em\" loading=\"lazy\">, eta gero <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1070.svg\" alt=\"w=t_2\" style=\"width:3.531em;height:1.001em\" loading=\"lazy\">-rekin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0185.svg\" alt=\"t_1=t_2\" style=\"width:3.643em;height:1.001em\" loading=\"lazy\">. Bi baldintzazko dedukzioak IBz elkartzen dira. Lehen bi baieztapenetan urrats bera egiten da argumentu bakoitzerako: identitateak gehitu, predikatu edo funtzioaren aldagai-bertsioa eraiki, eta existentzialak sartu edo ezabatu."
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
       "html": "Edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1071.svg\" alt=\"alpha,beta\" style=\"width:2.164em;height:1.001em\" loading=\"lazy\"> formulatarako, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1072.svg\" alt=\"forall x(alpha &lt;-&gt; beta) tack_(cal(L)) (forall x alpha &lt;-&gt; forall x beta)\" style=\"width:14.142em;height:1.230em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1073.svg\" alt=\"forall x(alpha&lt;-&gt;beta)\" style=\"width:5.784em;height:1.001em\" loading=\"lazy\"> premisa. Lehen noranzkoan, suposatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0274.svg\" alt=\"forall x alpha\" style=\"width:2.385em;height:1.001em\" loading=\"lazy\">; EGz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1074.svg\" alt=\"alpha&lt;-&gt;beta\" style=\"width:3.450em;height:1.001em\" loading=\"lazy\">, EBz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1075.svg\" alt=\"alpha-&gt;beta\" style=\"width:3.450em;height:1.001em\" loading=\"lazy\"> eta MPz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\">. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> arbitrarioa denez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1058.svg\" alt=\"forall x beta\" style=\"width:2.341em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Itzulerako noranzkoan, suposatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1058.svg\" alt=\"forall x beta\" style=\"width:2.341em;height:1.001em\" loading=\"lazy\"> eta ireki <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0274.svg\" alt=\"forall x alpha\" style=\"width:2.385em;height:1.001em\" loading=\"lazy\">. Kontraesanez, suposatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0402.svg\" alt=\"not forall x alpha\" style=\"width:3.157em;height:1.001em\" loading=\"lazy\">; NGz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0403.svg\" alt=\"exists x not alpha\" style=\"width:3.030em;height:1.001em\" loading=\"lazy\">. EPz hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> kritiko freskoa eta lortu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0405.svg\" alt=\"not alpha[u/x]\" style=\"width:3.468em;height:1.001em\" loading=\"lazy\">. Premisa unibertsaletik EGz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1076.svg\" alt=\"alpha[u/x]&lt;-&gt;beta[u/x]\" style=\"width:6.939em;height:1.001em\" loading=\"lazy\">, EBz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1077.svg\" alt=\"beta[u/x]-&gt;alpha[u/x]\" style=\"width:6.939em;height:1.001em\" loading=\"lazy\"> eta MTz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1078.svg\" alt=\"not beta[u/x]\" style=\"width:3.424em;height:1.001em\" loading=\"lazy\">. Baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1058.svg\" alt=\"forall x beta\" style=\"width:2.341em;height:1.001em\" loading=\"lazy\">-tik EGz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1079.svg\" alt=\"beta[u/x]\" style=\"width:2.652em;height:1.001em\" loading=\"lazy\">, kontraesana. Bi noranzkoak IBz elkartzen dira."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "5.8 adierazteko, erabil dezagun metahizkuntzako laburdura hau: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1080.svg\" alt=\"U_alpha(a) equiv forall z (alpha &lt;-&gt; z=a)\" style=\"width:11.793em;height:1.001em\" loading=\"lazy\">. Horrek dio <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0010.svg\" alt=\"a\" style=\"width:0.823em;height:1.001em\" loading=\"lazy\"> dela <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> betetzen duen objektu bakarra. Halaber, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1081.svg\" alt=\"d_0 equiv iota y (y=y)\" style=\"width:7.537em;height:1.001em\" loading=\"lazy\"> da deskribapen inpropio guztietarako hautatutako termino lehenetsia."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0056.svg\" alt=\"w\" style=\"width:1.043em;height:1.001em\" loading=\"lazy\"> ez badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1082.svg\" alt=\"iota z alpha\" style=\"width:1.935em;height:1.001em\" loading=\"lazy\"> terminoan, orduan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1083.svg\" alt=\"tack_(cal(L)) x=iota z alpha &lt;-&gt; (U_alpha(x) or (not exists w U_alpha(w) and x=d_0))\" style=\"width:22.783em;height:1.230em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ezkerretik eskuinera.</strong> Suposatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1084.svg\" alt=\"x=iota z alpha\" style=\"width:4.141em;height:1.001em\" loading=\"lazy\">. Bi kasu bereizi TNDz. Ez badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">-ren objektu bakarrik, DI erregelak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1085.svg\" alt=\"iota z alpha=d_0\" style=\"width:4.607em;height:1.001em\" loading=\"lazy\"> ematen du; TIz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1086.svg\" alt=\"x=d_0\" style=\"width:3.545em;height:1.001em\" loading=\"lazy\">, ICz bigarren disjuntua eta IDz disjuntzio osoa."
      },
      {
       "mota": "testua",
       "html": "Badago objektu bakarra, EPz hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> freskoa eta izan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1087.svg\" alt=\"U_alpha(u)\" style=\"width:2.777em;height:1.001em\" loading=\"lazy\">. DPz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1088.svg\" alt=\"alpha[(iota z alpha)/z]\" style=\"width:3.539em;height:1.001em\" loading=\"lazy\">; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1087.svg\" alt=\"U_alpha(u)\" style=\"width:2.777em;height:1.001em\" loading=\"lazy\">-tik EG eta EB erabiliz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1089.svg\" alt=\"iota z alpha=u\" style=\"width:4.141em;height:1.001em\" loading=\"lazy\">. Premisarekin TI aplikatuta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1090.svg\" alt=\"u=x\" style=\"width:3.079em;height:1.001em\" loading=\"lazy\">. Berdintasunaren sarrera eta ezabapenaren bidez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1087.svg\" alt=\"U_alpha(u)\" style=\"width:2.777em;height:1.001em\" loading=\"lazy\">-ko parametroa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-z ordezkatzen da, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1091.svg\" alt=\"U_alpha(x)\" style=\"width:2.755em;height:1.001em\" loading=\"lazy\"> lortzen da. IDz lehen disjuntua sartzen da. IDA eta TND erabilita bi kasuek ondorio bera ematen dute."
      },
      {
       "mota": "testua",
       "html": "<strong>Eskuinetik ezkerrera.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1091.svg\" alt=\"U_alpha(x)\" style=\"width:2.755em;height:1.001em\" loading=\"lazy\"> suposatuta, IPz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1092.svg\" alt=\"exists w U_alpha(w)\" style=\"width:4.375em;height:1.001em\" loading=\"lazy\">, DPz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1088.svg\" alt=\"alpha[(iota z alpha)/z]\" style=\"width:3.539em;height:1.001em\" loading=\"lazy\">, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1091.svg\" alt=\"U_alpha(x)\" style=\"width:2.755em;height:1.001em\" loading=\"lazy\">-ren instantziaz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1093.svg\" alt=\"alpha[(iota z alpha)/z] &lt;-&gt; iota z alpha=x\" style=\"width:9.271em;height:1.001em\" loading=\"lazy\">. MPz eta SIz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1084.svg\" alt=\"x=iota z alpha\" style=\"width:4.141em;height:1.001em\" loading=\"lazy\">. Beste disjuntuan, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1094.svg\" alt=\"not exists w U_alpha(w)\" style=\"width:5.148em;height:1.001em\" loading=\"lazy\">-tik DIz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1085.svg\" alt=\"iota z alpha=d_0\" style=\"width:4.607em;height:1.001em\" loading=\"lazy\">; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1086.svg\" alt=\"x=d_0\" style=\"width:3.545em;height:1.001em\" loading=\"lazy\">-rekin TI aplikatuta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1084.svg\" alt=\"x=iota z alpha\" style=\"width:4.141em;height:1.001em\" loading=\"lazy\">. IDAk bi adarrak bateratzen ditu, eta IBk bi noranzkoak."
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
     "html": "Gutxienez konstante indibidual bat duen hizkuntza batean deskribatzaileak formula deskribatzailerik gabeetara itzul daitezke, baina ez huts-hutsean: konstante finko bat, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0012.svg\" alt=\"c\" style=\"width:0.741em;height:1.001em\" loading=\"lazy\">, deskribapen inpropioaren termino lehenetsiarekin identifikatu behar da, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1095.svg\" alt=\"c=d_0\" style=\"width:3.413em;height:1.001em\" loading=\"lazy\">. Horregatik da emaitza <strong>kuasi</strong>-ezabapena."
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
       "html": "Izan bedi <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0012.svg\" alt=\"c\" style=\"width:0.741em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko konstante indibiduala."
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko formula bakoitzerako, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">, badago deskribatzailerik gabeko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1096.svg\" alt=\"alpha&#x27;\" style=\"width:1.346em;height:1.001em\" loading=\"lazy\"> formula bat, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">-ren aldagai libre berberekin, halakoa non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1097.svg\" alt=\"c=d_0 tack_(cal(L)) (alpha &lt;-&gt; alpha&#x27;)\" style=\"width:9.343em;height:1.230em\" loading=\"lazy\">.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\"> termino bakoitzerako eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-n agertzen ez den <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aldagairako, badago deskribatzailerik gabeko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0064.svg\" alt=\"phi\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\"> formula bat, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0383.svg\" alt=\"x=t\" style=\"width:2.835em;height:1.001em\" loading=\"lazy\">-ren aldagai libre berberekin, halakoa non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1098.svg\" alt=\"c=d_0 tack_(cal(L)) (x=t &lt;-&gt; phi)\" style=\"width:10.848em;height:1.230em\" loading=\"lazy\">."
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
       "html": "<strong>Terminoen oinarriak.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1099.svg\" alt=\"t=v\" style=\"width:2.747em;height:1.001em\" loading=\"lazy\"> aldagaia bada, hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1100.svg\" alt=\"phi equiv x=v\" style=\"width:5.293em;height:1.001em\" loading=\"lazy\">; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1101.svg\" alt=\"t=a\" style=\"width:2.785em;height:1.001em\" loading=\"lazy\"> konstantea bada, hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1102.svg\" alt=\"phi equiv x=a\" style=\"width:5.331em;height:1.001em\" loading=\"lazy\">. Bi kasuetan baliokidetasuna identikoa da, deskribatzailerik ez dago eta aldagai libreak gordetzen dira."
      },
      {
       "mota": "testua",
       "html": "<strong>Funtzioz eratutako terminoa.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1103.svg\" alt=\"t=f(t_1,dots,t_n)\" style=\"width:7.743em;height:1.001em\" loading=\"lazy\"> bada, aukeratu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1104.svg\" alt=\"x_1,dots,x_n\" style=\"width:4.697em;height:1.001em\" loading=\"lazy\"> aldagai freskoak. Indukzio-hipotesiak formula deskribatzailerik gabeak ematen ditu, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1105.svg\" alt=\"phi_i\" style=\"width:1.360em;height:1.001em\" loading=\"lazy\">, bakoitza <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1106.svg\" alt=\"x_i=t_i\" style=\"width:3.620em;height:1.001em\" loading=\"lazy\">-ren baliokidea <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1095.svg\" alt=\"c=d_0\" style=\"width:3.413em;height:1.001em\" loading=\"lazy\"> premisapean. 5.6(b) erabilita eta baliokideak ordezkatuta, hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1107.svg\" alt=\"phi equiv exists x_1 dots x_n (phi_1 and dots and phi_n and x=f(x_1,dots,x_n))\" style=\"width:23.287em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "<strong>Formula atomikoa.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1108.svg\" alt=\"alpha=P(t_1,dots,t_n)\" style=\"width:8.300em;height:1.001em\" loading=\"lazy\"> bada, terminoen hipotesi berak eta 5.6(a) erabilita hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1109.svg\" alt=\"alpha&#x27; equiv exists x_1 dots x_n (phi_1 and dots and phi_n and P(x_1,dots,x_n))\" style=\"width:21.693em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "<strong>Konektiboak.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1110.svg\" alt=\"alpha=not beta\" style=\"width:3.965em;height:1.001em\" loading=\"lazy\"> bada, indukzioak emandako <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1111.svg\" alt=\"beta&#x27;\" style=\"width:1.302em;height:1.001em\" loading=\"lazy\">-rekin hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1112.svg\" alt=\"alpha&#x27;=not beta&#x27;\" style=\"width:4.755em;height:1.001em\" loading=\"lazy\">. Era berean, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1113.svg\" alt=\"beta and gamma\" style=\"width:2.856em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1114.svg\" alt=\"beta or gamma\" style=\"width:2.856em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1115.svg\" alt=\"beta-&gt;gamma\" style=\"width:3.370em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1116.svg\" alt=\"beta&lt;-&gt;gamma\" style=\"width:3.370em;height:1.001em\" loading=\"lazy\"> kasuetan konektibo bera aplikatzen zaie <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1117.svg\" alt=\"beta&#x27;,gamma&#x27;\" style=\"width:2.873em;height:1.001em\" loading=\"lazy\"> formulei."
      },
      {
       "mota": "testua",
       "html": "<strong>Kuantifikatzaileak.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1118.svg\" alt=\"alpha=forall x beta\" style=\"width:4.626em;height:1.001em\" loading=\"lazy\"> bada, indukzio-hipotesiko baliokidetasuna 5.1 eta 5.5 bidez orokortu, eta 5.7 erabilita hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1119.svg\" alt=\"alpha&#x27;=forall x beta&#x27;\" style=\"width:5.416em;height:1.001em\" loading=\"lazy\">. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1120.svg\" alt=\"exists x beta\" style=\"width:2.214em;height:1.001em\" loading=\"lazy\"> kasua modu berean lortzen da, kuantifikatzaile existentzialaren baliokidetasun eratorriak erabiliz."
      },
      {
       "mota": "testua",
       "html": "<strong>Deskribatutako terminoa.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1121.svg\" alt=\"t=iota z alpha\" style=\"width:3.897em;height:1.001em\" loading=\"lazy\"> bada, hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> terminoan agertzen ez den aldagai gisa eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0056.svg\" alt=\"w\" style=\"width:1.043em;height:1.001em\" loading=\"lazy\"> freskoa. Indukzioz badago deskribatzailerik gabeko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1096.svg\" alt=\"alpha&#x27;\" style=\"width:1.346em;height:1.001em\" loading=\"lazy\"> formula, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1095.svg\" alt=\"c=d_0\" style=\"width:3.413em;height:1.001em\" loading=\"lazy\"> pean <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1122.svg\" alt=\"alpha&lt;-&gt;alpha&#x27;\" style=\"width:3.889em;height:1.001em\" loading=\"lazy\"> betetzen duena. 5.8ren karakterizazioan baliokide hori eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1123.svg\" alt=\"d_0=c\" style=\"width:3.413em;height:1.001em\" loading=\"lazy\"> ordezkatuz, hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1124.svg\" alt=\"phi equiv forall z(alpha&#x27;&lt;-&gt;z=x) or (not exists w forall z(alpha&#x27;&lt;-&gt;z=w) and x=c)\" style=\"width:27.066em;height:1.001em\" loading=\"lazy\">. Formula horrek ez du deskribatzailerik, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1084.svg\" alt=\"x=iota z alpha\" style=\"width:4.141em;height:1.001em\" loading=\"lazy\">-ren aldagai libre berak ditu, eta eskatutako baliokidetasuna betetzen du. Horrekin aldi bereko indukzioaren kasu guztiak itxi dira."
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
     "html": "Kontraesan sintaktikoa ez da bi formula aurkitzea besterik: kalkuluan edozein formula deduzigarri bihurtzen duen egoera da. Horrek azaltzen du zergatik baztertzen den teoria kontraesankor bat: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\"> nahiz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0375.svg\" alt=\"not beta\" style=\"width:1.680em;height:1.001em\" loading=\"lazy\"> ondoriozta ditzake, edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\">-rentzat."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko formula multzoa <strong>kontraesankorra</strong> da baldin eta soilik baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko formula oro <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-tik deduzigarria bada. <strong>Konsistentea</strong> da kontraesankorra ez bada; baliokidetasunez, badago gutxienez formula bat <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-tik deduzigarria ez dena. Formula bakar bat kontraesankorra edo konsistentea dela esateak haren singleton multzoaz hitz egitea da."
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
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> konsistentea eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0360.svg\" alt=\"Delta subset.eq Gamma\" style=\"width:3.443em;height:1.001em\" loading=\"lazy\"> badira, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0362.svg\" alt=\"Delta\" style=\"width:1.175em;height:1.001em\" loading=\"lazy\"> konsistentea da.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> kontraesankorra eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1125.svg\" alt=\"Gamma subset.eq Delta\" style=\"width:3.443em;height:1.001em\" loading=\"lazy\"> badira, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0362.svg\" alt=\"Delta\" style=\"width:1.175em;height:1.001em\" loading=\"lazy\"> kontraesankorra da."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lehen kasuan, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0362.svg\" alt=\"Delta\" style=\"width:1.175em;height:1.001em\" loading=\"lazy\"> kontraesankorra balitz, formula oro deduzituko luke; premisen monotoniagatik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-k ere bai, hipotesiaren kontra. Bigarrenean, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-tik formula oro deduzitzen denez, premisa gehiago dituen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0362.svg\" alt=\"Delta\" style=\"width:1.175em;height:1.001em\" loading=\"lazy\">-tik ere deduzitzen da."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> kontraesankorra da baldin eta soilik baldin badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> formula bat halakoa non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1126.svg\" alt=\"Gamma tack_(cal(L)) (alpha and not alpha)\" style=\"width:6.727em;height:1.230em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> kontraesankorra bada, definizioz formula oro deduzitzen du, bereziki <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1127.svg\" alt=\"alpha and not alpha\" style=\"width:3.752em;height:1.001em\" loading=\"lazy\">. Alderantziz, konjuntzio kontraesankorra deduzitzen bada, haren bi osagaiak ECz lortzen dira. Edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\"> helburutarako, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> lerro erabilgarriek kontraesanezko helburua ixten dute; beraz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1128.svg\" alt=\"Gamma tack beta\" style=\"width:2.982em;height:1.001em\" loading=\"lazy\"> edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\">-rentzat."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko sententzia bada:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> kontraesankorra da baldin eta soilik baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1129.svg\" alt=\"tack_(cal(L)) alpha\" style=\"width:1.981em;height:1.230em\" loading=\"lazy\">.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> kontraesankorra da baldin eta soilik baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1130.svg\" alt=\"tack_(cal(L)) not alpha\" style=\"width:2.753em;height:1.230em\" loading=\"lazy\">."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> kontraesankorra bada, bereziki <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1131.svg\" alt=\"not alpha tack alpha\" style=\"width:3.816em;height:1.001em\" loading=\"lazy\">; 5.3ren lehen zatia, premisa-multzo hutsarekin, aplikatuta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0359.svg\" alt=\"tack alpha\" style=\"width:1.981em;height:1.001em\" loading=\"lazy\">. Alderantziz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0359.svg\" alt=\"tack alpha\" style=\"width:1.981em;height:1.001em\" loading=\"lazy\"> bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> premisatik edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\"> frogatzeko erabili <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> teorema eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> premisa; kontraesanak helburua ixten du. Bigarren baliokidetasuna berdin frogatzen da."
      },
      {
       "mota": "testua",
       "html": "Sententzia izateko murrizketa beharrezkoa da kontraesankortasunetik teoremara doan noranzkoan, 5.3 sententziei mugatuta baitago. Alderantzizko noranzkoak ez du murrizketa hori behar: edozein formula teorema bada, haren ezeztapena kontraesankorra da, eta alderantziz."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1132.svg\" alt=\"cal(L) union {c}\" style=\"width:4.077em;height:1.001em\" loading=\"lazy\"> idazkerak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\"> formalismoari <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0012.svg\" alt=\"c\" style=\"width:0.741em;height:1.001em\" loading=\"lazy\"> konstante indibidual berria gehitzea adieraziko du."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0012.svg\" alt=\"c\" style=\"width:0.741em;height:1.001em\" loading=\"lazy\"> ez badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> formulan eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1133.svg\" alt=\"tack_(cal(L) union {c}) alpha[c/x]\" style=\"width:5.452em;height:1.478em\" loading=\"lazy\">, orduan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1129.svg\" alt=\"tack_(cal(L)) alpha\" style=\"width:1.981em;height:1.230em\" loading=\"lazy\">."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1134.svg\" alt=\"Gamma union {exists x alpha}\" style=\"width:5.426em;height:1.001em\" loading=\"lazy\"> konsistentea bada <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-n eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0012.svg\" alt=\"c\" style=\"width:0.741em;height:1.001em\" loading=\"lazy\"> ez bada <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1134.svg\" alt=\"Gamma union {exists x alpha}\" style=\"width:5.426em;height:1.001em\" loading=\"lazy\"> multzoan agertzen, orduan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1135.svg\" alt=\"Gamma union {exists x alpha} union {alpha[c/x]}\" style=\"width:10.527em;height:1.001em\" loading=\"lazy\"> konsistentea da <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1132.svg\" alt=\"cal(L) union {c}\" style=\"width:4.077em;height:1.001em\" loading=\"lazy\"> formalismoan."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kontraesanez, suposatu multzo hedatua kontraesankorra dela. 5.3 erabilita <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1136.svg\" alt=\"alpha[c/x]\" style=\"width:2.674em;height:1.001em\" loading=\"lazy\"> premisa ezabatzen da eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1137.svg\" alt=\"Gamma union {exists x alpha} tack_(cal(L) union {c}) not alpha[c/x]\" style=\"width:11.761em;height:1.478em\" loading=\"lazy\"> lortzen da. Aukeratu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aldagai freskoa. Dedukzioaren bigarren teoremak premisa finituki asko konjuntzio batean biltzen ditu; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0012.svg\" alt=\"c\" style=\"width:0.741em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-z ordezkatu eta 7.5 aplikatuta, konstante berria ezabatu daiteke. Ondorioz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1138.svg\" alt=\"Gamma union {exists x alpha} tack_(cal(L)) not alpha[u/x]\" style=\"width:10.035em;height:1.230em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0277.svg\" alt=\"exists x alpha\" style=\"width:2.258em;height:1.001em\" loading=\"lazy\"> premisari EP aplikatuta, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> kritiko freskoarekin, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0406.svg\" alt=\"alpha[u/x]\" style=\"width:2.696em;height:1.001em\" loading=\"lazy\"> lortzen da. Beraz multzo horrek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1139.svg\" alt=\"alpha[u/x] and not alpha[u/x]\" style=\"width:7.241em;height:1.001em\" loading=\"lazy\"> deduzitzen du eta 7.3ren arabera kontraesankorra litzateke, hasierako konsistentzia-hipotesiaren kontra."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-n konsistentea bada eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0012.svg\" alt=\"c\" style=\"width:0.741em;height:1.001em\" loading=\"lazy\"> ez bada <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-koa, orduan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1140.svg\" alt=\"Gamma union {c=d_0}\" style=\"width:6.582em;height:1.001em\" loading=\"lazy\"> konsistentea da <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1132.svg\" alt=\"cal(L) union {c}\" style=\"width:4.077em;height:1.001em\" loading=\"lazy\">-n."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Suposatu kontrakoa. 5.3z <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1095.svg\" alt=\"c=d_0\" style=\"width:3.413em;height:1.001em\" loading=\"lazy\"> premisa ezabatuta, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1141.svg\" alt=\"Gamma tack_(cal(L) union {c}) not(c=d_0)\" style=\"width:8.909em;height:1.478em\" loading=\"lazy\">. 5.2z, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-ko premisa finituki asko, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1142.svg\" alt=\"gamma_1,dots,gamma_n\" style=\"width:4.572em;height:1.001em\" loading=\"lazy\">, biltzen dira baldintza batean. Aukeratu horietan agertzen ez den <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0012.svg\" alt=\"c\" style=\"width:0.741em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-z ordezkatu eta 7.5 aplikatuta, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-n <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1143.svg\" alt=\"tack ((gamma_1 and dots and gamma_n) -&gt; not(u=d_0))\" style=\"width:15.756em;height:1.001em\" loading=\"lazy\">. 5.5z <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> orokortuta eta premisak berreskuratuta, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1144.svg\" alt=\"Gamma tack forall u not(u=d_0)\" style=\"width:8.726em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Bestalde, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1145.svg\" alt=\"tack not forall u not(u=d_0)\" style=\"width:8.453em;height:1.001em\" loading=\"lazy\">. Izan ere, haren ezeztapen bikoitza suposatuta DNz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1146.svg\" alt=\"forall u not(u=d_0)\" style=\"width:6.652em;height:1.001em\" loading=\"lazy\">; EGz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1147.svg\" alt=\"not(d_0=d_0)\" style=\"width:5.684em;height:1.001em\" loading=\"lazy\">, I erregelaren <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1148.svg\" alt=\"d_0=d_0\" style=\"width:4.011em;height:1.001em\" loading=\"lazy\"> teoremaren kontra. Hortaz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-k formula unibertsala eta haren ezeztapena deduzituko lituzke; 7.3z kontraesankorra litzateke. Beraz, hedapena konsistentea da."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko sententzia multzoa <strong>maximalki konsistentea</strong> da baldin eta konsistentea bada eta, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> sententziarentzat, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> ez badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1051.svg\" alt=\"Gamma union {alpha}\" style=\"width:4.120em;height:1.001em\" loading=\"lazy\"> kontraesankorra bada."
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> <strong>exenplifikatua</strong> da baldin eta, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0277.svg\" alt=\"exists x alpha\" style=\"width:2.258em;height:1.001em\" loading=\"lazy\"> sententzia <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dagoen bakoitzean, badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\"> designatzaile bat halakoa non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0279.svg\" alt=\"alpha[t/x]\" style=\"width:2.674em;height:1.001em\" loading=\"lazy\"> ere <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dagoen."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko sententzien multzo maximalki konsistentea bada, orduan edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1071.svg\" alt=\"alpha,beta\" style=\"width:2.164em;height:1.001em\" loading=\"lazy\"> sententziatarako:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0291.svg\" alt=\"Gamma tack alpha\" style=\"width:3.026em;height:1.001em\" loading=\"lazy\"> bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dago.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0359.svg\" alt=\"tack alpha\" style=\"width:1.981em;height:1.001em\" loading=\"lazy\"> bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dago.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dago baldin eta soilik baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> ez badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1149.svg\" alt=\"alpha and beta\" style=\"width:2.936em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dago baldin eta soilik baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\"> biak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n badaude.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1150.svg\" alt=\"alpha or beta\" style=\"width:2.936em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dago baldin eta soilik baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> edo <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\"> gutxienez bat <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n badago.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0374.svg\" alt=\"alpha -&gt; beta\" style=\"width:3.450em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dago baldin eta soilik baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n egoteak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n egotea badakar.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1151.svg\" alt=\"alpha &lt;-&gt; beta\" style=\"width:3.450em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dago baldin eta soilik baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\"> aldi berean badaude edo aldi berean ez badaude <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(1).</strong> Demagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0291.svg\" alt=\"Gamma tack alpha\" style=\"width:3.026em;height:1.001em\" loading=\"lazy\"> baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> ez dagoela <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n. Maximalitatez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1051.svg\" alt=\"Gamma union {alpha}\" style=\"width:4.120em;height:1.001em\" loading=\"lazy\"> kontraesankorra da; bereziki <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1048.svg\" alt=\"Gamma union {alpha} tack not alpha\" style=\"width:6.984em;height:1.001em\" loading=\"lazy\">. 5.3z <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1049.svg\" alt=\"Gamma tack not alpha\" style=\"width:3.798em;height:1.001em\" loading=\"lazy\">. Hipotesiarekin IC aplikatuta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1152.svg\" alt=\"Gamma tack alpha and not alpha\" style=\"width:5.826em;height:1.001em\" loading=\"lazy\">, eta 7.3z <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> kontraesankorra litzateke. Beraz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dago."
      },
      {
       "mota": "testua",
       "html": "<strong>(2).</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0359.svg\" alt=\"tack alpha\" style=\"width:1.981em;height:1.001em\" loading=\"lazy\"> bada, premisen monotoniagatik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0291.svg\" alt=\"Gamma tack alpha\" style=\"width:3.026em;height:1.001em\" loading=\"lazy\">; (1)ez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dago."
      },
      {
       "mota": "testua",
       "html": "<strong>(3).</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> biak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n baleude, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> kontraesankorra litzateke. Alderantziz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> ez badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> ere ez, maximalitatez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1153.svg\" alt=\"Gamma union {not alpha}\" style=\"width:4.892em;height:1.001em\" loading=\"lazy\"> kontraesankorra; 5.3z <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0291.svg\" alt=\"Gamma tack alpha\" style=\"width:3.026em;height:1.001em\" loading=\"lazy\"> eta (1)ez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n, kontraesana. Hortaz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dago."
      },
      {
       "mota": "testua",
       "html": "<strong>(4).</strong> Konjuntzioa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n badago, ECz bi osagaiak deduzitzen dira eta (1)ez biak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n daude. Alderantziz, bi osagaiak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n badaude, ICz konjuntzioa deduzitzen da eta (1)ez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dago. Disjuntzioaren, baldintzaren eta bikondizionalaren kasuak modu berean frogatzen dira, erregela primitiboak, (1) eta (3) erabiliz."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> maximalki konsistentea eta exenplifikatua bada, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">-n gehienez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aldagaia badago libre, orduan:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0277.svg\" alt=\"exists x alpha\" style=\"width:2.258em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dago baldin eta soilik baldin badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\"> designatzaile bat halakoa non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0279.svg\" alt=\"alpha[t/x]\" style=\"width:2.674em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dagoen.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0274.svg\" alt=\"forall x alpha\" style=\"width:2.385em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dago baldin eta soilik baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko designatzaile ororentzat <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0279.svg\" alt=\"alpha[t/x]\" style=\"width:2.674em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dagoen."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lehen baliokidetasunaren ezker-eskuin noranzkoa exenplifikazioaren definizioa da. Alderantziz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0279.svg\" alt=\"alpha[t/x]\" style=\"width:2.674em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n badago, IPz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1154.svg\" alt=\"Gamma tack exists x alpha\" style=\"width:4.332em;height:1.001em\" loading=\"lazy\">, eta 8.2(1)ez existentziala <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dago."
      },
      {
       "mota": "testua",
       "html": "Bigarrenean, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0274.svg\" alt=\"forall x alpha\" style=\"width:2.385em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n badago, EGz instantzia bakoitza deduzitzen da eta 8.2(1)ez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dago. Alderantziz, demagun designatzaile guztien instantziak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n daudela. Orduan ez dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\"> designatzailerik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1155.svg\" alt=\"not alpha[t/x]\" style=\"width:3.446em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n duenik, 8.2(3) dela eta. Lehen baliokidetasuna <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> formulari aplikatuta, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0403.svg\" alt=\"exists x not alpha\" style=\"width:3.030em;height:1.001em\" loading=\"lazy\"> ez dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n; 8.2(3)z <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1156.svg\" alt=\"not exists x not alpha\" style=\"width:3.802em;height:1.001em\" loading=\"lazy\"> bai. NPz formula horretatik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0274.svg\" alt=\"forall x alpha\" style=\"width:2.385em;height:1.001em\" loading=\"lazy\"> deduzitzen da, eta 8.2(1)ez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dago."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko deskribatzailerik gabeko sententzien multzo konsistentea bada, badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1157.svg\" alt=\"Gamma^star\" style=\"width:1.404em;height:1.001em\" loading=\"lazy\"> deskribatzailerik gabeko sententzien multzo maximalki konsistente eta exenplifikatu bat <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1158.svg\" alt=\"cal(L) union cal(C)\" style=\"width:3.146em;height:1.001em\" loading=\"lazy\"> hizkuntzan, non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1159.svg\" alt=\"cal(C)\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-rekiko disjuntua den konstante indibidualen klase zenbakarri bat den eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1160.svg\" alt=\"Gamma subset.eq Gamma^star\" style=\"width:3.672em;height:1.001em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aukeratu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1159.svg\" alt=\"cal(C)\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\"> konstante berrien multzo infinitu zenbakarria, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-rekiko disjuntua, eta zenbakitu haren konstanteak. Zenbakitu ere <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1158.svg\" alt=\"cal(L) union cal(C)\" style=\"width:3.146em;height:1.001em\" loading=\"lazy\"> hizkuntzako deskribatzailerik gabeko sententzia guztiak: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1161.svg\" alt=\"alpha_0,alpha_1,alpha_2,dots\" style=\"width:6.526em;height:1.001em\" loading=\"lazy\">. Defini indukzio aritmetikoz: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1162.svg\" alt=\"Gamma_0=Gamma\" style=\"width:3.520em;height:1.001em\" loading=\"lazy\">, eta etapa bakoitzean"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1171.svg\" alt=\"Gamma_j union {alpha_j}\" style=\"width:5.000em;height:1.001em\" loading=\"lazy\"> kontraesankorra bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1174.svg\" alt=\"Gamma_(j+1)=Gamma_j\" style=\"width:4.773em;height:1.001em\" loading=\"lazy\">;",
        "hedapena konsistentea bada eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1169.svg\" alt=\"alpha_j\" style=\"width:1.400em;height:1.001em\" loading=\"lazy\"> ez bada existentziala, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1175.svg\" alt=\"Gamma_(j+1)=Gamma_j union {alpha_j}\" style=\"width:8.600em;height:1.001em\" loading=\"lazy\">;",
        "hedapena konsistentea bada eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1176.svg\" alt=\"alpha_j=exists x alpha&#x27;_j\" style=\"width:5.439em;height:1.001em\" loading=\"lazy\">, hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1171.svg\" alt=\"Gamma_j union {alpha_j}\" style=\"width:5.000em;height:1.001em\" loading=\"lazy\">-n agertzen ez den indize txikieneko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0012.svg\" alt=\"c\" style=\"width:0.741em;height:1.001em\" loading=\"lazy\"> konstante berria, eta jarri <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1177.svg\" alt=\"Gamma_(j+1)=Gamma_j union {alpha_j} union {alpha&#x27;_j[c/x]}\" style=\"width:13.917em;height:1.241em\" loading=\"lazy\">."
       ]
      },
      {
       "mota": "testua",
       "html": "Azkenik, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1163.svg\" alt=\"Gamma^star equiv union_(j=0)^infinity Gamma_j\" style=\"width:6.482em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "<strong>(a) Hedapena.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1164.svg\" alt=\"Gamma=Gamma_0\" style=\"width:3.520em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1165.svg\" alt=\"Gamma_0 subset.eq Gamma^star\" style=\"width:3.990em;height:1.001em\" loading=\"lazy\">; beraz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1160.svg\" alt=\"Gamma subset.eq Gamma^star\" style=\"width:3.672em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "<strong>(b) Etapa bakoitzaren konsistentzia.</strong> Indukzioz. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1166.svg\" alt=\"Gamma_0\" style=\"width:1.252em;height:1.001em\" loading=\"lazy\"> konsistentea da hipotesiz. Lehen kasuan ez da ezer gehitzen; bigarrenean multzo konsistentea aukeratzen da; hirugarrenean <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1167.svg\" alt=\"Gamma_j union {exists x alpha&#x27;_j}\" style=\"width:6.306em;height:1.001em\" loading=\"lazy\"> konsistentea da eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0012.svg\" alt=\"c\" style=\"width:0.741em;height:1.001em\" loading=\"lazy\"> freskoa, beraz 7.6k lekuko-instantzia gehitu ondoren ere konsistentzia gordetzen dela dio."
      },
      {
       "mota": "testua",
       "html": "<strong>(c) Batasunaren konsistentzia.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1157.svg\" alt=\"Gamma^star\" style=\"width:1.404em;height:1.001em\" loading=\"lazy\"> kontraesankorra balitz, 7.3z <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1127.svg\" alt=\"alpha and not alpha\" style=\"width:3.752em;height:1.001em\" loading=\"lazy\"> baten dedukzioa legoke. Finitudez, dedukzioak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1157.svg\" alt=\"Gamma^star\" style=\"width:1.404em;height:1.001em\" loading=\"lazy\">-ko finituki premisa baino ez lituzke erabiliko; guztiak etapa bereko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1168.svg\" alt=\"Gamma_k\" style=\"width:1.283em;height:1.001em\" loading=\"lazy\"> batean egongo lirateke. Orduan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1168.svg\" alt=\"Gamma_k\" style=\"width:1.283em;height:1.001em\" loading=\"lazy\"> kontraesankorra litzateke, (b)-ren kontra."
      },
      {
       "mota": "testua",
       "html": "<strong>(d) Maximalitaterako osotasuna.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> sententzia ez badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1157.svg\" alt=\"Gamma^star\" style=\"width:1.404em;height:1.001em\" loading=\"lazy\">-n, zenbaketaren <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1169.svg\" alt=\"alpha_j\" style=\"width:1.400em;height:1.001em\" loading=\"lazy\"> bat da. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1169.svg\" alt=\"alpha_j\" style=\"width:1.400em;height:1.001em\" loading=\"lazy\"> ez zen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1170.svg\" alt=\"Gamma_(j+1)\" style=\"width:2.266em;height:1.001em\" loading=\"lazy\">-en sartu; eraikuntzaren lehen kasua gertatu zen, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1171.svg\" alt=\"Gamma_j union {alpha_j}\" style=\"width:5.000em;height:1.001em\" loading=\"lazy\"> kontraesankorra da. 7.2(b)z haren gaineko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1172.svg\" alt=\"Gamma^star union {alpha}\" style=\"width:4.590em;height:1.001em\" loading=\"lazy\"> ere kontraesankorra da."
      },
      {
       "mota": "testua",
       "html": "<strong>(e) Maximalitatea.</strong> (c)-ren konsistentzia eta (d)-ren propietatea 8.1eko definizioa dira."
      },
      {
       "mota": "testua",
       "html": "<strong>(f) Exenplifikazioa.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1173.svg\" alt=\"exists x alpha=alpha_j\" style=\"width:4.991em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1157.svg\" alt=\"Gamma^star\" style=\"width:1.404em;height:1.001em\" loading=\"lazy\">-n badago, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1171.svg\" alt=\"Gamma_j union {alpha_j}\" style=\"width:5.000em;height:1.001em\" loading=\"lazy\"> konsistentea da, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1157.svg\" alt=\"Gamma^star\" style=\"width:1.404em;height:1.001em\" loading=\"lazy\"> konsistentearen azpimultzoa baita. Beraz hirugarren eraikuntza-kasua aplikatu zen, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1136.svg\" alt=\"alpha[c/x]\" style=\"width:2.674em;height:1.001em\" loading=\"lazy\"> lekuko-instantzia <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1170.svg\" alt=\"Gamma_(j+1)\" style=\"width:2.266em;height:1.001em\" loading=\"lazy\">-en, eta hortaz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1157.svg\" alt=\"Gamma^star\" style=\"width:1.404em;height:1.001em\" loading=\"lazy\">-n, sartu zen. Eraikuntzak ez du deskribatzailerik gehitzen. Ondorioz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1157.svg\" alt=\"Gamma^star\" style=\"width:1.404em;height:1.001em\" loading=\"lazy\"> eskatutako hedapen maximalki konsistente, exenplifikatu eta deskribatzailerik gabea da."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\"> formalismoaren interpretazioa hiruko bat da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1178.svg\" alt=\"cal(J)=chevron.l cal(U),cal(H),a_0 chevron.r\" style=\"width:7.727em;height:1.001em\" loading=\"lazy\">, non:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1179.svg\" alt=\"cal(U) != emptyset\" style=\"width:3.195em;height:1.001em\" loading=\"lazy\"> interpretazioaren unibertsoa den.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1180.svg\" alt=\"cal(H)\" style=\"width:1.444em;height:1.001em\" loading=\"lazy\"> esleipenak konstante indibidual bakoitzari <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1181.svg\" alt=\"cal(U)\" style=\"width:1.072em;height:1.001em\" loading=\"lazy\">-ko objektu bat, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0016.svg\" alt=\"n\" style=\"width:0.905em;height:1.001em\" loading=\"lazy\">-adiko funtore bakoitzari <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1182.svg\" alt=\"cal(U)^n -&gt; cal(U)\" style=\"width:4.372em;height:1.001em\" loading=\"lazy\"> funtzio bat, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0016.svg\" alt=\"n\" style=\"width:0.905em;height:1.001em\" loading=\"lazy\">-adiko erlatzaile bakoitzari <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1183.svg\" alt=\"cal(U)^n\" style=\"width:1.709em;height:1.001em\" loading=\"lazy\">-ren azpimultzo bat eta aldagai bakoitzari <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1181.svg\" alt=\"cal(U)\" style=\"width:1.072em;height:1.001em\" loading=\"lazy\">-ko objektu bat esleitzen dizkion.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1184.svg\" alt=\"a_0 in cal(U)\" style=\"width:3.626em;height:1.001em\" loading=\"lazy\"> deskribapen inpropioen erreferentzia komuna den."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hemendik aurrera <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1185.svg\" alt=\"cal(H)(a)\" style=\"width:2.957em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1186.svg\" alt=\"cal(H)(f)\" style=\"width:3.016em;height:1.001em\" loading=\"lazy\"> edo <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1187.svg\" alt=\"cal(H)(P)\" style=\"width:3.250em;height:1.001em\" loading=\"lazy\"> idatzi beharrean <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1188.svg\" alt=\"cal(J)(a)\" style=\"width:2.532em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1189.svg\" alt=\"cal(J)(f)\" style=\"width:2.591em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1190.svg\" alt=\"cal(J)(P)\" style=\"width:2.825em;height:1.001em\" loading=\"lazy\"> idatziko dugu. Idazkera berak interpretazio osoa eta haren esleipen-osagaiak adieraziko ditu, testuinguruak bi mailak bereizten dituelako."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1191.svg\" alt=\"u in cal(U)\" style=\"width:3.150em;height:1.001em\" loading=\"lazy\"> bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1192.svg\" alt=\"cal(J)[x := u]\" style=\"width:4.686em;height:1.001em\" loading=\"lazy\"> interpretazioak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\">-rekin bat egiten du osagai guztietan, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> aldagaiari emandako balioan izan ezik:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1194.svg\" alt=\"cal(J)[x := u](z) = cases( cal(J)(z) &amp; &quot;baldin &quot; z != x, u &amp; &quot;baldin &quot; z = x. )\" style=\"width:15.054em;height:1.241em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "Aldaketak segidan idatz daitezke: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1195.svg\" alt=\"cal(J)[x:=u][y:=v]\" style=\"width:8.204em;height:1.001em\" loading=\"lazy\"> lehenik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-en balioa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> bihurtu eta gero <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\">-rena <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0055.svg\" alt=\"v\" style=\"width:0.785em;height:1.001em\" loading=\"lazy\"> bihurtzen duen interpretazioa da."
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
      "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0191.svg\" alt=\"x != z\" style=\"width:2.990em;height:1.001em\" loading=\"lazy\"> bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1196.svg\" alt=\"cal(J)[x:=u][z:=v] = cal(J)[z:=v][x:=u]\" style=\"width:17.688em;height:1.001em\" loading=\"lazy\">.",
      "Aldagai bera bi aldiz aldatzean azken balioa nagusitzen da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1197.svg\" alt=\"cal(J)[x:=u][x:=v] = cal(J)[x:=v]\" style=\"width:14.198em;height:1.001em\" loading=\"lazy\">."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Objektu-hizkuntza eta metahizkuntza",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1198.svg\" alt=\"x,t,alpha\" style=\"width:3.062em;height:1.001em\" loading=\"lazy\"> objektu-hizkuntzako adierazpenak dira. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1181.svg\" alt=\"cal(U)\" style=\"width:1.072em;height:1.001em\" loading=\"lazy\">, denotazioa, asetasuna eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1199.svg\" alt=\"cal(J)[x:=u]\" style=\"width:4.686em;height:1.001em\" loading=\"lazy\"> aldaketa metahizkuntzako tresnak dira. Bereizketa hori funtsezkoa da: formula batek ez du berez objektu bat denotatzen edo egia-balio bat hartzen; interpretazio baten barruan egiten du."
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
     "html": "Interpretazio bat finkatuta, termino bakoitzak unibertsoko objektu bat denotatzen du, eta formula bakoitza interpretazioak asetzen du edo ez du asetzen. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1200.svg\" alt=\"cal(J)(t)=u\" style=\"width:4.544em;height:1.001em\" loading=\"lazy\"> idazkerak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\"> terminoak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> denotatzen duela adierazten du; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1201.svg\" alt=\"cal(J) models alpha\" style=\"width:2.918em;height:1.001em\" loading=\"lazy\"> idazkerak, berriz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> asetzen duela. Azken hori Mosterinen &quot;<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\"> sat <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">&quot; idazkeraren bertsio modernoa da."
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
       "html": "Izan bedi <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1178.svg\" alt=\"cal(J)=chevron.l cal(U),cal(H),a_0 chevron.r\" style=\"width:7.727em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ren interpretazioa. Terminoen denotazioa eta formulen asetasuna egitura sintaktikoaren gaineko aldi bereko indukzioz definitzen dira:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1202.svg\" alt=\"cal(J)(x) = cal(H)(x)\" style=\"width:6.922em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1203.svg\" alt=\"cal(J)(a) = cal(H)(a)\" style=\"width:6.823em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1204.svg\" alt=\"cal(J)(f(t_1,dots,t_n)) = cal(J)(f)(cal(J)(t_1),dots,cal(J)(t_n))\" style=\"width:19.732em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1205.svg\" alt=\"cal(J) models P(t_1,dots,t_n) &lt;-&gt; (cal(J)(t_1),dots,cal(J)(t_n)) in cal(J)(P)\" style=\"width:22.130em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "Bereziki, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1206.svg\" alt=\"cal(J) models t_1=t_2 &lt;-&gt; cal(J)(t_1)=cal(J)(t_2)\" style=\"width:14.261em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Konektiboetarako:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1207.svg\" alt=\"cal(J) models not alpha &lt;-&gt; not (cal(J) models alpha)\" style=\"width:9.873em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1208.svg\" alt=\"cal(J) models (alpha and beta) &lt;-&gt; cal(J) models alpha &quot; eta &quot; cal(J) models beta\" style=\"width:16.057em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1209.svg\" alt=\"cal(J) models (alpha or beta) &lt;-&gt; cal(J) models alpha &quot; edo &quot; cal(J) models beta\" style=\"width:16.250em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1210.svg\" alt=\"cal(J) models (alpha -&gt; beta) &lt;-&gt; (cal(J) models alpha &quot; bada, &quot; cal(J) models beta)\" style=\"width:18.696em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1211.svg\" alt=\"cal(J) models (alpha &lt;-&gt; beta) &lt;-&gt; (cal(J) models alpha &lt;-&gt; cal(J) models beta)\" style=\"width:16.192em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "Kuantifikatzaileetarako:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1212.svg\" alt=\"cal(J) models forall x alpha &lt;-&gt; &quot;u guztietarako &quot; u in cal(U): cal(J)[x:=u] models alpha\" style=\"width:24.506em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1213.svg\" alt=\"cal(J) models exists x alpha &lt;-&gt; &quot;u baterako &quot; u in cal(U): cal(J)[x:=u] models alpha\" style=\"width:22.513em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "Deskriptoreetarako:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1214.svg\" alt=\"cal(J)(iota x alpha) = cases( u &amp; &quot;baldin u bakarra badago, &quot; u in cal(U), &quot; non &quot; cal(J)[x:=u] models alpha, a_0 &amp; &quot;halako u bakarra ez badago.&quot; )\" style=\"width:23.509em;height:2.631em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Azken klausulak bi egoera biltzen ditu deskribapen inpropio gisa: ez dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> asetzen duen objekturik, edo bat baino gehiago dago. Bi kasuetan terminoak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0013.svg\" alt=\"a_0\" style=\"width:1.349em;height:1.001em\" loading=\"lazy\"> denotatzen du. Horrela, termino oro denotatzailea da eta semantika totala izaten jarraitzen du."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> sententzia bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> egiazkoa da <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\"> interpretazioan baldin eta soilik baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1201.svg\" alt=\"cal(J) models alpha\" style=\"width:2.918em;height:1.001em\" loading=\"lazy\">. Sententzia batean ez dago aldagai askerik; beraz, egia-balioa ez dago aldagaiei hasieran emandako balioen mende."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> ez bada libre <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\"> terminoan, orduan, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1191.svg\" alt=\"u in cal(U)\" style=\"width:3.150em;height:1.001em\" loading=\"lazy\"> guztietarako, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1215.svg\" alt=\"cal(J)[x:=u](t)=cal(J)(t)\" style=\"width:9.676em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> ez bada libre <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> formulan, orduan, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1191.svg\" alt=\"u in cal(U)\" style=\"width:3.150em;height:1.001em\" loading=\"lazy\"> guztietarako, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1216.svg\" alt=\"cal(J)[x:=u] models alpha &lt;-&gt; cal(J) models alpha\" style=\"width:11.095em;height:1.001em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Terminoen denotaziorako eta formulen asetasunerako aldi bereko indukzio semiotikoa egiten da. Urrats bakoitzean <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> ez dela aztertutako adierazpenean libre suposatzen dugu."
      },
      {
       "mota": "testua",
       "html": "<strong>Oinarrizko terminoak.</strong> Terminoa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> aldagaia bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> libre ez egoteak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0234.svg\" alt=\"z != x\" style=\"width:2.990em;height:1.001em\" loading=\"lazy\"> dakar; beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1217.svg\" alt=\"cal(J)[x:=u](z)=cal(J)(z)\" style=\"width:9.987em;height:1.001em\" loading=\"lazy\">. Konstante baten balioa ere ez du aldagai baten esleipenak aldatzen: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1218.svg\" alt=\"cal(J)[x:=u](a)=cal(J)(a)\" style=\"width:10.065em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "<strong>Termino konposatua.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1103.svg\" alt=\"t=f(t_1,dots,t_n)\" style=\"width:7.743em;height:1.001em\" loading=\"lazy\"> bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> ez da libre <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0418.svg\" alt=\"t_i\" style=\"width:1.021em;height:1.001em\" loading=\"lazy\"> bakar batean ere. Indukzio-hipotesia argumentu guztiei aplikatuz,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1219.svg\" alt=\"cal(J)[x:=u](f(t_1,dots,t_n))\" style=\"width:11.158em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1220.svg\" alt=\"= cal(J)(f)(cal(J)[x:=u](t_1),dots,cal(J)[x:=u](t_n))\" style=\"width:19.466em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1221.svg\" alt=\"= cal(J)(f)(cal(J)(t_1),dots,cal(J)(t_n))\" style=\"width:12.131em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1222.svg\" alt=\"= cal(J)(f(t_1,dots,t_n))\" style=\"width:8.712em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "<strong>Formula atomikoak.</strong> Aurreko berdintasunak berehala ematen du <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1060.svg\" alt=\"P(t_1,dots,t_n)\" style=\"width:6.015em;height:1.001em\" loading=\"lazy\">-ren kasua, argumentuen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0016.svg\" alt=\"n\" style=\"width:0.905em;height:1.001em\" loading=\"lazy\">-kote bera erlazio berean dagoelako edo ez dagoelako. Berdintasun atomikoan ere bi terminoek denotazio berak gordetzen dituzte."
      },
      {
       "mota": "testua",
       "html": "<strong>Konektiboak.</strong> Adibidez,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1223.svg\" alt=\"cal(J)[x:=u] models not alpha\" style=\"width:7.358em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1224.svg\" alt=\"&lt;-&gt; not (cal(J)[x:=u] models alpha)\" style=\"width:9.739em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1225.svg\" alt=\"&lt;-&gt; not (cal(J) models alpha)\" style=\"width:6.071em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1226.svg\" alt=\"&lt;-&gt; cal(J) models not alpha\" style=\"width:5.170em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Konjuntzioan indukzio-hipotesia bi osagaiei aplikatzen zaie; disjuntzio, baldintza eta bibaldintzarako arrazoibidea bera da, haien egia-baldintzak osagaien asetasunaren bidez soilik definitzen baitira."
      },
      {
       "mota": "testua",
       "html": "<strong>Kuantifikatzaile orokorra.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1227.svg\" alt=\"forall z alpha\" style=\"width:2.296em;height:1.001em\" loading=\"lazy\"> aztertzean bi kasu daude. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0234.svg\" alt=\"z != x\" style=\"width:2.990em;height:1.001em\" loading=\"lazy\"> bada, esleipen-aldaketak trukatu daitezke:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1228.svg\" alt=\"cal(J)[x:=u] models forall z alpha\" style=\"width:7.930em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1229.svg\" alt=\"&lt;-&gt; &quot;v guztietarako &quot; v in cal(U): cal(J)[x:=u][z:=v] models alpha\" style=\"width:23.413em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1230.svg\" alt=\"&lt;-&gt; &quot;v guztietarako &quot; v in cal(U): cal(J)[z:=v][x:=u] models alpha\" style=\"width:23.413em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1231.svg\" alt=\"&lt;-&gt; &quot;v guztietarako &quot; v in cal(U): cal(J)[z:=v] models alpha\" style=\"width:19.745em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1232.svg\" alt=\"&lt;-&gt; cal(J) models forall z alpha\" style=\"width:5.742em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Hirugarren baliokidetasunean indukzio-hipotesia erabili da. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1233.svg\" alt=\"z=x\" style=\"width:2.990em;height:1.001em\" loading=\"lazy\"> bada, bigarren aldaketak lehenengoa ezabatzen du: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1234.svg\" alt=\"cal(J)[x:=u][x:=v]=cal(J)[x:=v]\" style=\"width:14.198em;height:1.001em\" loading=\"lazy\">; hortaz, bi interpretazioek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0055.svg\" alt=\"v\" style=\"width:0.785em;height:1.001em\" loading=\"lazy\"> guztien gaineko baldintza bera egiaztatzen dute. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1235.svg\" alt=\"exists z alpha\" style=\"width:2.169em;height:1.001em\" loading=\"lazy\">-ren froga bera da, &quot;guztietarako&quot; ordez &quot;baterako&quot; erabilita."
      },
      {
       "mota": "testua",
       "html": "<strong>Deskribapena.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1082.svg\" alt=\"iota z alpha\" style=\"width:1.935em;height:1.001em\" loading=\"lazy\">-rako berriro <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1236.svg\" alt=\"z!=x\" style=\"width:2.990em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1233.svg\" alt=\"z=x\" style=\"width:2.990em;height:1.001em\" loading=\"lazy\"> bereizten dira. Lehen kasuan, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1237.svg\" alt=\"cal(J)[x:=u][z:=v]\" style=\"width:8.177em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1238.svg\" alt=\"cal(J)[z:=v][x:=u]\" style=\"width:8.177em;height:1.001em\" loading=\"lazy\"> interpretazio bera dira; indukzio-hipotesiak dio <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> asetzen duten <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0055.svg\" alt=\"v\" style=\"width:0.785em;height:1.001em\" loading=\"lazy\"> objektuen multzoa ez dela aldatzen. Bigarren kasuan, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\">-ri emandako <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0055.svg\" alt=\"v\" style=\"width:0.785em;height:1.001em\" loading=\"lazy\"> balioak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-en aurreko balioa ordezten du; berriro hautagai berak lortzen dira. Bi kasuetan azpikasu bi daude: hautagai bakarra badago, bi interpretazioek objektu bakar bera denotatzen dute; ez badago hautagai bakarra, biek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0013.svg\" alt=\"a_0\" style=\"width:1.349em;height:1.001em\" loading=\"lazy\"> denotatzen dute. Horrek indukzio simultaneoa osatzen du."
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
     "html": "Sintaxian <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1239.svg\" alt=\"S_x^t e\" style=\"width:2.050em;height:1.001em\" loading=\"lazy\"> idazkerak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1240.svg\" alt=\"e\" style=\"width:0.750em;height:1.001em\" loading=\"lazy\"> adierazpenean <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-en agerraldi askeak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\"> terminoaz ordeztea adierazten zuen, harrapaketa saihestuz. Hemen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1241.svg\" alt=\"e[t/x]\" style=\"width:2.473em;height:1.001em\" loading=\"lazy\"> idazkera modernoa erabiliko dugu. Semantikoki, ordezkapen hori eta interpretazioan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ri <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-ren denotazioa esleitzea gauza bera dira."
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
       "html": "Edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1242.svg\" alt=\"t_0\" style=\"width:1.155em;height:1.001em\" loading=\"lazy\"> terminotarako: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1243.svg\" alt=\"cal(J)[x:=cal(J)(t)](t_0)=cal(J)(t_0[t/x])\" style=\"width:14.076em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> formulatarako: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1244.svg\" alt=\"cal(J)[x:=cal(J)(t)] models alpha &lt;-&gt; cal(J) models alpha[t/x]\" style=\"width:14.282em;height:1.001em\" loading=\"lazy\">."
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
       "html": "<strong>Luzera bateko adierazpenak.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1245.svg\" alt=\"t_0=z\" style=\"width:3.272em;height:1.001em\" loading=\"lazy\"> bada eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1236.svg\" alt=\"z!=x\" style=\"width:2.990em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1246.svg\" alt=\"cal(J)[x:=cal(J)(t)](z)=cal(J)(z)=cal(J)(z[t/x])\" style=\"width:17.160em;height:1.001em\" loading=\"lazy\">. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1233.svg\" alt=\"z=x\" style=\"width:2.990em;height:1.001em\" loading=\"lazy\"> bada, ezkerreko aldea <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1247.svg\" alt=\"cal(J)(t)\" style=\"width:2.338em;height:1.001em\" loading=\"lazy\"> da eta eskuinekoa ere bai, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1248.svg\" alt=\"x[t/x]=t\" style=\"width:4.557em;height:1.001em\" loading=\"lazy\"> delako. Konstante baterako bi aldeak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1188.svg\" alt=\"cal(J)(a)\" style=\"width:2.532em;height:1.001em\" loading=\"lazy\"> dira."
      },
      {
       "mota": "testua",
       "html": "<strong>Funtoreak eta formula atomikoak.</strong> Indukzio-hipotesia azpitermino guztiei aplikatuz,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1249.svg\" alt=\"cal(J)[x:=cal(J)(t)](f(t_1,dots,t_n))\" style=\"width:12.622em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1250.svg\" alt=\"= cal(J)(f)(cal(J)(t_1[t/x]),dots,cal(J)(t_n[t/x]))\" style=\"width:15.930em;height:1.051em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1251.svg\" alt=\"= cal(J)(f(t_1[t/x],dots,t_n[t/x]))\" style=\"width:12.352em;height:1.051em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Erlatzaile baten argumentu-koteak bi aldeetan balio bera duenez, asetasun-baldintza bera da; berdintasun atomikoan bi denotazioak konparatzen dira. Ezeztapenean eta gainerako konektiboetan indukzio- hipotesia osagai bakoitzari aplikatzen zaio, eta konektiboaren egia-klausula berreraikitzen da."
      },
      {
       "mota": "testua",
       "html": "<strong><img class=\"formula\" src=\"media/formulak/00aa_02logika/f1227.svg\" alt=\"forall z alpha\" style=\"width:2.296em;height:1.001em\" loading=\"lazy\"> kuantifikatzailea.</strong> Hiru kasu daude."
      },
      {
       "mota": "testua",
       "html": "1. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> ez bada libre <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1227.svg\" alt=\"forall z alpha\" style=\"width:2.296em;height:1.001em\" loading=\"lazy\">-n, sintaxiko ordezkapenak formula bere horretan uzten du. 2.4 teoremak ezkerreko esleipen-aldaketa semantikoki alferrikakoa dela dio. 2. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> libre bada baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> ez bada <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-n agertzen, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-en eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\">-ren esleipenak trukatzen dira; gainera 2.4k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1252.svg\" alt=\"cal(J)[z:=v](t)=cal(J)(t)\" style=\"width:9.499em;height:1.001em\" loading=\"lazy\"> ematen du. Hortaz,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1253.svg\" alt=\"cal(J)[x:=cal(J)(t)] models forall z alpha\" style=\"width:9.395em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1254.svg\" alt=\"&lt;-&gt; &quot;v guztietarako &quot; v in cal(U): cal(J)[z:=v][x:=cal(J)[z:=v](t)] models alpha\" style=\"width:28.368em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1255.svg\" alt=\"&lt;-&gt; &quot;v guztietarako &quot; v in cal(U): cal(J)[z:=v] models alpha[t/x]\" style=\"width:21.468em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1256.svg\" alt=\"&lt;-&gt; cal(J) models forall z(alpha[t/x])\" style=\"width:8.525em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Azken formula hori da <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1257.svg\" alt=\"(forall z alpha)[t/x]\" style=\"width:4.919em;height:1.001em\" loading=\"lazy\">. 3. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> libre bada eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-n agertzen bada, ordezkapenaren definizioak aldagai fresko bat, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0055.svg\" alt=\"v\" style=\"width:0.785em;height:1.001em\" loading=\"lazy\">, aukeratzen du, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1227.svg\" alt=\"forall z alpha\" style=\"width:2.296em;height:1.001em\" loading=\"lazy\">-n eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-n agertzen ez dena. Lehenik lotzailea alfa-berrizendatzen da eta gero ordezkapena egiten da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1258.svg\" alt=\"(forall z alpha)[t/x]=forall v((alpha[v/z])[t/x])\" style=\"width:14.054em;height:1.001em\" loading=\"lazy\">. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0055.svg\" alt=\"v\" style=\"width:0.785em;height:1.001em\" loading=\"lazy\"> freskoa denez, 2.4, esleipen-aldaketen trukaketa eta indukzio- hipotesia jarraian aplikatuta bi aldeek unibertsoko balio berberak aztertzen dituzte. Horrek harrapaketa saihestearen baldintza semantikoki justifikatzen du."
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1235.svg\" alt=\"exists z alpha\" style=\"width:2.169em;height:1.001em\" loading=\"lazy\">-ren froga paraleloa da: urrats berdinak egiten dira, baina balio guztien ordez lekuko baten existentzia egiaztatzen da."
      },
      {
       "mota": "testua",
       "html": "<strong><img class=\"formula\" src=\"media/formulak/00aa_02logika/f1082.svg\" alt=\"iota z alpha\" style=\"width:1.935em;height:1.001em\" loading=\"lazy\"> deskribapena.</strong> Hiru kasu sintaktiko berak erabiltzen dira. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> libre ez bada, 2.4k denotazioa bere horretan uzten du. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> libre bada eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> ez bada <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-n agertzen, esleipenak trukatu eta indukzio-hipotesia aplikatzean bi aldeek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> asetzen duen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> bakar bera bilatzen dute. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-n agertzen bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0055.svg\" alt=\"v\" style=\"width:0.785em;height:1.001em\" loading=\"lazy\"> freskoaz alfa-berrizendatzen da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1259.svg\" alt=\"(iota z alpha)[t/x]=iota v((alpha[v/z])[t/x])\" style=\"width:13.331em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Azken bi kasuetan bi azpikasu egiaztatu behar dira. Objektu bakarra badago, indukzio-hipotesiak hautagai bera identifikatzen du eta bi terminoek hura denotatzen dute. Objektu bakarrik ez badago, bi deskribapenak inpropioak dira eta biek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0013.svg\" alt=\"a_0\" style=\"width:1.349em;height:1.001em\" loading=\"lazy\"> denotatzen dute. Horrela amaitzen da terminoen eta formulen indukzioa."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> formula multzoa asetzen du baldin eta soilik baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0353.svg\" alt=\"alpha in Gamma\" style=\"width:3.091em;height:1.001em\" loading=\"lazy\"> guztietarako <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1201.svg\" alt=\"cal(J) models alpha\" style=\"width:2.918em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Interpretazio orok multzo hutsa asetzen du. Izan ere, &quot;<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1260.svg\" alt=\"alpha in emptyset\" style=\"width:2.946em;height:1.001em\" loading=\"lazy\"> bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1201.svg\" alt=\"cal(J) models alpha\" style=\"width:2.918em;height:1.001em\" loading=\"lazy\">&quot; baldintzak ez du aurrekaria betetzen duen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">-rik; hortaz, hutsean egiazkoa da."
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
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> formula <strong>asegarria</strong> da interpretazioren batek asetzen badu; <strong>aseezina</strong>, interpretaziorik batek ere asetzen ez badu.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> formula multzoa <strong>asegarria</strong> da interpretazio berak haren formula guztiak asetzen baditu; <strong>aseezina</strong>, halako interpretaziorik ez badago.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> <strong>logikoki baliozkoa</strong> da formalismoaren interpretazio guztiek asetzen badute.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-ren <strong>ondorio semantikoa</strong> da baldin eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asetzen duen interpretazio orok <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> ere asetzen badu."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1261.svg\" alt=\"Gamma models_(cal(L)) alpha\" style=\"width:2.999em;height:1.230em\" loading=\"lazy\"> idazkerak formalismoa esplizitatzen du; testuingurua argia denean <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0293.svg\" alt=\"Gamma models alpha\" style=\"width:2.834em;height:1.001em\" loading=\"lazy\"> erabiliko dugu. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1262.svg\" alt=\"alpha models beta\" style=\"width:2.807em;height:1.001em\" loading=\"lazy\"> laburdura <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1263.svg\" alt=\"{alpha} models beta\" style=\"width:3.965em;height:1.001em\" loading=\"lazy\"> da, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1264.svg\" alt=\"alpha_1,dots,alpha_n models beta\" style=\"width:6.710em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1265.svg\" alt=\"{alpha_1,dots,alpha_n} models beta\" style=\"width:7.868em;height:1.001em\" loading=\"lazy\">-rena. Azkenik, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1266.svg\" alt=\"models alpha\" style=\"width:1.788em;height:1.001em\" loading=\"lazy\"> idazkerak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1267.svg\" alt=\"emptyset models alpha\" style=\"width:2.689em;height:1.001em\" loading=\"lazy\"> esan nahi du."
      },
      {
       "mota": "testua",
       "html": "Ez nahasi <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0291.svg\" alt=\"Gamma tack alpha\" style=\"width:3.026em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0293.svg\" alt=\"Gamma models alpha\" style=\"width:2.834em;height:1.001em\" loading=\"lazy\">: lehena kalkulu baten erregelen araberako deduzigarritasun sintaktikoa da; bigarrena interpretazio guztien gaineko ondorio semantikoa."
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
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1266.svg\" alt=\"models alpha\" style=\"width:1.788em;height:1.001em\" loading=\"lazy\"> baldin eta soilik baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> logikoki baliozkoa den.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0293.svg\" alt=\"Gamma models alpha\" style=\"width:2.834em;height:1.001em\" loading=\"lazy\"> baldin eta soilik baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1153.svg\" alt=\"Gamma union {not alpha}\" style=\"width:4.892em;height:1.001em\" loading=\"lazy\"> asezina den.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1266.svg\" alt=\"models alpha\" style=\"width:1.788em;height:1.001em\" loading=\"lazy\"> baldin eta soilik baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1268.svg\" alt=\"{not alpha}\" style=\"width:2.882em;height:1.001em\" loading=\"lazy\"> asezina den.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> logikoki baliozkoa da baldin eta soilik baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> asezina den.",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asezina da baldin eta soilik baldin hizkuntza bereko formula baterako, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1269.svg\" alt=\"Gamma models (beta and not beta)\" style=\"width:6.447em;height:1.001em\" loading=\"lazy\">."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Lehen baliokidetasuna.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1266.svg\" alt=\"models alpha\" style=\"width:1.788em;height:1.001em\" loading=\"lazy\"> definizioz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1267.svg\" alt=\"emptyset models alpha\" style=\"width:2.689em;height:1.001em\" loading=\"lazy\"> da. Interpretazio orok <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1270.svg\" alt=\"emptyset\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> asetzen duenez, baldintza hau interpretazio orok <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> asetzen duela esatearen baliokidea da; hori da baliozkotasun logikoa."
      },
      {
       "mota": "testua",
       "html": "<strong>Bigarren baliokidetasuna.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0293.svg\" alt=\"Gamma models alpha\" style=\"width:2.834em;height:1.001em\" loading=\"lazy\">-k dio <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asetzen duen interpretazio orok <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> asetzen duela. Kontraposizioz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> asetzen duen interpretazio batek ezin du <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> ase. Beraz, ez dago aldi berean <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> asetzen dituen interpretaziorik; hau da, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1153.svg\" alt=\"Gamma union {not alpha}\" style=\"width:4.892em;height:1.001em\" loading=\"lazy\"> asezina da. Urrats guztiak alderantziz ere balio dute."
      },
      {
       "mota": "testua",
       "html": "<strong>Hirugarren eta laugarren baliokidetasunak.</strong> Hirugarrena bigarrenetik dator <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1271.svg\" alt=\"Gamma=emptyset\" style=\"width:3.057em;height:1.001em\" loading=\"lazy\"> hartuta. Laugarrena lehenengoa eta hirugarrena elkartuz lortzen da."
      },
      {
       "mota": "testua",
       "html": "<strong>Bosgarren baliokidetasuna.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1269.svg\" alt=\"Gamma models (beta and not beta)\" style=\"width:6.447em;height:1.001em\" loading=\"lazy\"> bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asetzen duen edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0375.svg\" alt=\"not beta\" style=\"width:1.680em;height:1.001em\" loading=\"lazy\"> ase beharko lituzke aldi berean, ezinezkoa dena. Hortaz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asezina da. Alderantziz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asetzen duen interpretaziorik ez badago, &quot;interpretazio batek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asetzen badu, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1272.svg\" alt=\"(beta and not beta)\" style=\"width:4.565em;height:1.001em\" loading=\"lazy\"> ere asetzen du&quot; baldintza hutsean egiazkoa da, edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\"> aukeratuta."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1273.svg\" alt=\"cal(L)_1\" style=\"width:1.512em;height:1.001em\" loading=\"lazy\">-eko zeinu ez-logiko guztiak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1274.svg\" alt=\"cal(L)_2\" style=\"width:1.512em;height:1.001em\" loading=\"lazy\">-koak ere badira, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1275.svg\" alt=\"Gamma_1\" style=\"width:1.252em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1273.svg\" alt=\"cal(L)_1\" style=\"width:1.512em;height:1.001em\" loading=\"lazy\">-eko formula multzoa bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1276.svg\" alt=\"Gamma_2\" style=\"width:1.252em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1274.svg\" alt=\"cal(L)_2\" style=\"width:1.512em;height:1.001em\" loading=\"lazy\">-koa bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1277.svg\" alt=\"Gamma_1 subset.eq Gamma_2\" style=\"width:3.837em;height:1.001em\" loading=\"lazy\"> bada, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1276.svg\" alt=\"Gamma_2\" style=\"width:1.252em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1181.svg\" alt=\"cal(U)\" style=\"width:1.072em;height:1.001em\" loading=\"lazy\"> unibertsoaren gainean asegarria bada, orduan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1275.svg\" alt=\"Gamma_1\" style=\"width:1.252em;height:1.001em\" loading=\"lazy\"> ere <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1181.svg\" alt=\"cal(U)\" style=\"width:1.072em;height:1.001em\" loading=\"lazy\"> beraren gainean asegarria da."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1276.svg\" alt=\"Gamma_2\" style=\"width:1.252em;height:1.001em\" loading=\"lazy\"> asegarria denez, bada <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1274.svg\" alt=\"cal(L)_2\" style=\"width:1.512em;height:1.001em\" loading=\"lazy\">-ren <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\"> interpretazio bat <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1181.svg\" alt=\"cal(U)\" style=\"width:1.072em;height:1.001em\" loading=\"lazy\"> gainean, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1276.svg\" alt=\"Gamma_2\" style=\"width:1.252em;height:1.001em\" loading=\"lazy\">-ko formula guztiak asetzen dituena. Inklusioz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1275.svg\" alt=\"Gamma_1\" style=\"width:1.252em;height:1.001em\" loading=\"lazy\">-eko formula guztiak ere asetzen ditu."
      },
      {
       "mota": "testua",
       "html": "Eraiki <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1278.svg\" alt=\"cal(J)&#x27;=chevron.l cal(U),cal(H)&#x27;,a_0 chevron.r\" style=\"width:8.516em;height:1.001em\" loading=\"lazy\">, non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1279.svg\" alt=\"cal(H)&#x27;\" style=\"width:1.838em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1180.svg\" alt=\"cal(H)\" style=\"width:1.444em;height:1.001em\" loading=\"lazy\">-ren murrizketa den <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1273.svg\" alt=\"cal(L)_1\" style=\"width:1.512em;height:1.001em\" loading=\"lazy\">-eko zeinuetara. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1280.svg\" alt=\"cal(J)&#x27;\" style=\"width:1.413em;height:1.001em\" loading=\"lazy\"> soilik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1273.svg\" alt=\"cal(L)_1\" style=\"width:1.512em;height:1.001em\" loading=\"lazy\">-en ez dauden zeinuetan bereizten dira; beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1273.svg\" alt=\"cal(L)_1\" style=\"width:1.512em;height:1.001em\" loading=\"lazy\">-eko termino eta formulak berdin interpretatzen dituzte. Ondorioz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1281.svg\" alt=\"cal(J)&#x27; models Gamma_1\" style=\"width:3.613em;height:1.001em\" loading=\"lazy\">. Gainera, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1280.svg\" alt=\"cal(J)&#x27;\" style=\"width:1.413em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1273.svg\" alt=\"cal(L)_1\" style=\"width:1.512em;height:1.001em\" loading=\"lazy\">-ren interpretazioa da <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1181.svg\" alt=\"cal(U)\" style=\"width:1.072em;height:1.001em\" loading=\"lazy\"> unibertso berean, eta horrek tesia frogatzen du."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> sententzia <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> sententzia multzoarekiko independentea da baldin eta soilik baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> ez den <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-ren ondorio semantikoa: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1282.svg\" alt=\"not (Gamma models alpha)\" style=\"width:4.507em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Baliokideki, bada <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\"> interpretazio bat halakoa non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1283.svg\" alt=\"cal(J) models Gamma\" style=\"width:2.901em;height:1.001em\" loading=\"lazy\"> baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1284.svg\" alt=\"not (cal(J) models alpha)\" style=\"width:4.591em;height:1.001em\" loading=\"lazy\">. Interpretazio hori <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">-ren independentziaren <strong>kontraeredua</strong> edo <strong>independentzia-froga</strong> da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kontraeredua emateko ez da interpretazioaren xehetasun oro zerrendatu behar. Nahikoa da unibertsoa eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n edo <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">-n agertzen diren zeinu ez-logikoen interpretazioa adieraztea. Deskriptoreak agertzen badira, deskribapen inpropioetarako <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0013.svg\" alt=\"a_0\" style=\"width:1.349em;height:1.001em\" loading=\"lazy\"> objektua ere zehaztu behar da."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> sententzia multzoa independentea da baldin eta soilik baldin haren elementu bakoitza gainerakoekiko independentea den:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1285.svg\" alt=\"forall alpha in Gamma: not ((Gamma - {alpha}) models alpha)\" style=\"width:13.339em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Beraz, ez dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-ko sententziarik beste guztien ondorio semantikoa denik."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1286.svg\" alt=\"Gamma={alpha_1,dots,alpha_n}\" style=\"width:8.280em;height:1.001em\" loading=\"lazy\"> finitua bada, independentzia frogatzeko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0016.svg\" alt=\"n\" style=\"width:0.905em;height:1.001em\" loading=\"lazy\"> interpretazio eman behar dira: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1287.svg\" alt=\"cal(J)_j\" style=\"width:1.293em;height:1.001em\" loading=\"lazy\"> bakoitzak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1288.svg\" alt=\"Gamma-{alpha_j}\" style=\"width:4.889em;height:1.001em\" loading=\"lazy\"> asetu eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1169.svg\" alt=\"alpha_j\" style=\"width:1.400em;height:1.001em\" loading=\"lazy\"> ez du asetu behar. Interpretazio bakoitzean unibertsoa, erabilitako zeinu ez-logikoak eta, beharrezkoa bada, deskribapen inpropioen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0013.svg\" alt=\"a_0\" style=\"width:1.349em;height:1.001em\" loading=\"lazy\"> balioa ematea aski da."
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
       "html": "Izan bitez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1289.svg\" alt=\"alpha_1=forall x(S(x)-&gt;M(x))\" style=\"width:12.304em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1290.svg\" alt=\"alpha_2=not S(a)\" style=\"width:6.087em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1291.svg\" alt=\"alpha_3=not M(a)\" style=\"width:6.549em;height:1.001em\" loading=\"lazy\">. Frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> independentea dela <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1292.svg\" alt=\"{alpha_1,alpha_2}\" style=\"width:4.417em;height:1.001em\" loading=\"lazy\"> multzoarekiko."
      },
      {
       "mota": "testua",
       "html": "Ariketak argumentu honen akatsa formalizatzen du: &quot;Problema hau ebazteko gai den oro matematikaria da; Antoniok ezin du problema ebatzi; beraz, Antonio ez da matematikaria&quot;. Aurrekari bat ez betetzeak ez du ondorioaren ezeztapena ematen."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Har dezagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1293.svg\" alt=\"cal(U)={0}\" style=\"width:4.353em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1294.svg\" alt=\"cal(J)(a)=0\" style=\"width:4.655em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1295.svg\" alt=\"cal(J)(S)=emptyset\" style=\"width:4.822em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1296.svg\" alt=\"cal(J)(M)={0}\" style=\"width:6.442em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0032.svg\" alt=\"S\" style=\"width:0.990em;height:1.001em\" loading=\"lazy\"> hutsa denez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1297.svg\" alt=\"S(x)-&gt;M(x)\" style=\"width:7.159em;height:1.001em\" loading=\"lazy\"> baldintza egiazkoa da unibertsoko objektu bakarrarentzat, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1298.svg\" alt=\"cal(J) models alpha_1\" style=\"width:3.444em;height:1.001em\" loading=\"lazy\">. Halaber, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1299.svg\" alt=\"not (0 in cal(J)(S))\" style=\"width:6.367em;height:1.001em\" loading=\"lazy\">; beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1300.svg\" alt=\"cal(J) models not S(a)\" style=\"width:5.242em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1301.svg\" alt=\"cal(J) models alpha_2\" style=\"width:3.444em;height:1.001em\" loading=\"lazy\">. Baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1302.svg\" alt=\"0 in cal(J)(M)\" style=\"width:5.155em;height:1.001em\" loading=\"lazy\"> denez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1303.svg\" alt=\"not (cal(J) models not M(a))\" style=\"width:7.377em;height:1.001em\" loading=\"lazy\">; hau da, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1304.svg\" alt=\"not (cal(J) models alpha_3)\" style=\"width:5.118em;height:1.001em\" loading=\"lazy\">. Interpretazio bakar horrek bi premisak eta ondorioaren porrota batera erakusten ditu."
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
       "html": "Izan bitez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1305.svg\" alt=\"alpha_1=(forall x(I(x)-&gt;R(x))) -&gt; D(c)\" style=\"width:16.895em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1306.svg\" alt=\"alpha_2=forall x(R(x)&lt;-&gt;M(x))\" style=\"width:12.431em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1307.svg\" alt=\"alpha_3=forall x(M(x)-&gt;I(x))\" style=\"width:12.133em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1308.svg\" alt=\"alpha_4=D(c)\" style=\"width:5.416em;height:1.001em\" loading=\"lazy\">. Frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0745.svg\" alt=\"alpha_4\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> independentea dela <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1309.svg\" alt=\"{alpha_1,alpha_2,alpha_3}\" style=\"width:6.199em;height:1.001em\" loading=\"lazy\"> multzoarekiko."
      },
      {
       "mota": "testua",
       "html": "Irakurketa arruntean: &quot;justu guztiek begirunea mereziko balute, Coriolanok bere patua mereziko luke; magnanimoek eta haiek bakarrik merezi dute begirunea; magnanimo oro justua da; beraz, Coriolanok bere patua merezi du&quot;."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Aukeratu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1293.svg\" alt=\"cal(U)={0}\" style=\"width:4.353em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1310.svg\" alt=\"cal(J)(c)=0\" style=\"width:4.573em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1311.svg\" alt=\"cal(J)(I)={0}\" style=\"width:5.808em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1312.svg\" alt=\"cal(J)(R)=cal(J)(D)=cal(J)(M)=emptyset\" style=\"width:13.660em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1313.svg\" alt=\"forall x(I(x)-&gt;R(x))\" style=\"width:8.987em;height:1.001em\" loading=\"lazy\"> faltsua da, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0124.svg\" alt=\"0\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1314.svg\" alt=\"I\" style=\"width:0.818em;height:1.001em\" loading=\"lazy\">-n baitago baina ez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0031.svg\" alt=\"R\" style=\"width:1.117em;height:1.001em\" loading=\"lazy\">-n; horregatik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> baldintza osoa egiazkoa da. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0031.svg\" alt=\"R\" style=\"width:1.117em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1315.svg\" alt=\"M\" style=\"width:1.452em;height:1.001em\" loading=\"lazy\"> biak hutsak direnez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> egiazkoa da; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1315.svg\" alt=\"M\" style=\"width:1.452em;height:1.001em\" loading=\"lazy\"> hutsa denez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> ere bai. Aldiz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1310.svg\" alt=\"cal(J)(c)=0\" style=\"width:4.573em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1316.svg\" alt=\"not (0 in cal(J)(D))\" style=\"width:6.551em;height:1.001em\" loading=\"lazy\">, eta, ondorioz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1317.svg\" alt=\"not (cal(J) models D(c))\" style=\"width:6.245em;height:1.001em\" loading=\"lazy\">. Beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0745.svg\" alt=\"alpha_4\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> ez da lehen hiruren ondorioa."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1318.svg\" alt=\"alpha_1=forall x,y ((exists u(R(x,u) and R(y,u))) -&gt; R(x,y))\" style=\"width:23.482em;height:1.001em\" loading=\"lazy\">,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1319.svg\" alt=\"alpha_2=forall x exists y R(x,y)\" style=\"width:9.283em;height:1.001em\" loading=\"lazy\">,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1320.svg\" alt=\"alpha_3=forall x,y,z ((R(x,y) and R(y,z)) -&gt; R(x,z))\" style=\"width:22.185em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Frogatu:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> independentea dela <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1322.svg\" alt=\"{alpha_1,alpha_3}\" style=\"width:4.417em;height:1.001em\" loading=\"lazy\">-rekiko;",
        "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> independentea dela <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1323.svg\" alt=\"{alpha_2,alpha_3}\" style=\"width:4.417em;height:1.001em\" loading=\"lazy\">-rekiko."
       ]
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> ez da beste biekiko independentea: iturriko 8. dedukzio-ariketan <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1321.svg\" alt=\"{alpha_1,alpha_2} tack alpha_3\" style=\"width:7.035em;height:1.001em\" loading=\"lazy\"> frogatu zen."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong><img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ren independentzia.</strong> Hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1293.svg\" alt=\"cal(U)={0}\" style=\"width:4.353em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1324.svg\" alt=\"cal(J)_1(R)=emptyset\" style=\"width:5.302em;height:1.001em\" loading=\"lazy\">. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0031.svg\" alt=\"R\" style=\"width:1.117em;height:1.001em\" loading=\"lazy\">-katearik eta bi objekturen ondorengo komunik ez dagoenez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> hutsean egiazkoak dira. Baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0124.svg\" alt=\"0\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\">-k ez du <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0031.svg\" alt=\"R\" style=\"width:1.117em;height:1.001em\" loading=\"lazy\">-ondorengorik; hortaz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1325.svg\" alt=\"not (cal(J)_1 models forall x exists y R(x,y))\" style=\"width:10.464em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "<strong><img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ren independentzia.</strong> Hartu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1326.svg\" alt=\"cal(U)={0,1}\" style=\"width:5.447em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1327.svg\" alt=\"cal(J)_2(R)={(0,0),(1,0)}\" style=\"width:11.543em;height:1.001em\" loading=\"lazy\">. Objektu bakoitzak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0124.svg\" alt=\"0\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> ondorengoa du; beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> egiazkoa da. Erlazioak ez du bi urratseko kate batek eskatzen duen gezi berririk falta, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> ere egiazkoa da. Hala ere, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0124.svg\" alt=\"0\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0007.svg\" alt=\"1\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> objektuek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0124.svg\" alt=\"0\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> ondorengo komuna dute, baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1328.svg\" alt=\"not ((0,1) in cal(J)_2(R))\" style=\"width:8.841em;height:1.001em\" loading=\"lazy\">; horregatik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> faltsua da."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1329.svg\" alt=\"alpha_1=not exists x(a=f(x))\" style=\"width:10.392em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1330.svg\" alt=\"alpha_2=forall x,y(f(x)=f(y)-&gt;x=y)\" style=\"width:17.029em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1331.svg\" alt=\"alpha_3=(P(a) and forall x(P(x)-&gt;P(f(x)))) -&gt; forall x P(x)\" style=\"width:23.977em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1332.svg\" alt=\"alpha_4=forall x,y((P(x) and P(y))-&gt;(R(x,y) or R(y,x)))\" style=\"width:24.691em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1333.svg\" alt=\"alpha_5=exists x,y(x!=y and R(x,y))\" style=\"width:14.021em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1334.svg\" alt=\"alpha_6=forall x(R(x,x)-&gt;forall y(R(x,y) or R(y,x)))\" style=\"width:21.532em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1335.svg\" alt=\"alpha_7=forall x exists y(x!=y and R(x,y))\" style=\"width:14.280em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1336.svg\" alt=\"alpha_8=forall x(R(a,x) or P(x))\" style=\"width:12.709em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1337.svg\" alt=\"alpha_7\" style=\"width:1.481em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1338.svg\" alt=\"alpha_8\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> biak independenteak direla <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1339.svg\" alt=\"{alpha_1,alpha_2,alpha_3,alpha_4,alpha_5,alpha_6}\" style=\"width:11.545em;height:1.001em\" loading=\"lazy\"> multzoarekiko."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Bi independentziak interpretazio berarekin ikus daitezke. Har dezagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1340.svg\" alt=\"cal(U)=omega\" style=\"width:3.348em;height:1.001em\" loading=\"lazy\">, zenbaki naturalen multzoa, eta ezarri:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1294.svg\" alt=\"cal(J)(a)=0\" style=\"width:4.655em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1341.svg\" alt=\"cal(J)(f)(n)=n+1\" style=\"width:8.420em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1342.svg\" alt=\"cal(J)(P)=emptyset\" style=\"width:4.948em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1343.svg\" alt=\"cal(J)(R)={(0,1)}\" style=\"width:8.102em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0124.svg\" alt=\"0\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> ez da ondorengo funtzioaren balioa eta funtzioa injektiboa da; beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> egiazkoak dira. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0029.svg\" alt=\"P\" style=\"width:1.116em;height:1.001em\" loading=\"lazy\"> hutsa denez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ren aurrekaria faltsua da eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0745.svg\" alt=\"alpha_4\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> ere hutsean betetzen da. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1344.svg\" alt=\"(0,1)\" style=\"width:2.784em;height:1.001em\" loading=\"lazy\"> pareak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1345.svg\" alt=\"alpha_5\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> asetzen du. Ez dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0434.svg\" alt=\"R(x,x)\" style=\"width:3.858em;height:1.001em\" loading=\"lazy\"> parerik; hortaz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1346.svg\" alt=\"alpha_6\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ren aurrekari guztiak faltsuak dira. Beraz, lehen sei formulak egiazkoak dira."
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1337.svg\" alt=\"alpha_7\" style=\"width:1.481em;height:1.001em\" loading=\"lazy\"> faltsua da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1347.svg\" alt=\"x=1\" style=\"width:2.996em;height:1.001em\" loading=\"lazy\"> hartuta ez dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0040.svg\" alt=\"y\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\">-rik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1348.svg\" alt=\"(1,y) in cal(J)(R)\" style=\"width:6.836em;height:1.001em\" loading=\"lazy\"> betetzen duenik. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1338.svg\" alt=\"alpha_8\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> ere faltsua da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1349.svg\" alt=\"x=0\" style=\"width:2.996em;height:1.001em\" loading=\"lazy\"> hartuta ez da <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1350.svg\" alt=\"R(a,0)\" style=\"width:3.724em;height:1.001em\" loading=\"lazy\"> betetzen eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1351.svg\" alt=\"P(0)\" style=\"width:2.596em;height:1.001em\" loading=\"lazy\"> ere ez. Interpretazio berak bi ondorioen independentzia frogatzen du."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1352.svg\" alt=\"alpha_1=(iota x (not exists y(P(y) and M(y,x))))=d\" style=\"width:18.598em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0996.svg\" alt=\"alpha_2=P(d)\" style=\"width:5.458em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1353.svg\" alt=\"alpha_3=exists x(P(x) and E(x))\" style=\"width:11.464em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1354.svg\" alt=\"alpha_4=forall x((P(x) and E(x)) -&gt; forall y((P(y) and not E(y))-&gt;M(x,y)))\" style=\"width:30.070em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1355.svg\" alt=\"alpha_5=E(d)\" style=\"width:5.470em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1345.svg\" alt=\"alpha_5\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> independentea dela <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1356.svg\" alt=\"{alpha_1,alpha_2,alpha_3,alpha_4}\" style=\"width:7.981em;height:1.001em\" loading=\"lazy\"> multzoarekiko."
      },
      {
       "mota": "testua",
       "html": "Formulek Anselmoren argumentu ontologikoaren bertsio bat kodetzen dute: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1000.svg\" alt=\"d\" style=\"width:0.840em;height:1.001em\" loading=\"lazy\"> pentsa daitekeen handiena da; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1000.svg\" alt=\"d\" style=\"width:0.840em;height:1.001em\" loading=\"lazy\"> pentsa daiteke; zerbait pentsa daiteke eta existitzen da; existitzen den objektu pentsagarri oro existitzen ez den edozein objektu pentsagarri baino handiagoa da; ondorio gisa, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1000.svg\" alt=\"d\" style=\"width:0.840em;height:1.001em\" loading=\"lazy\"> existitzen dela aldarrikatzen da."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Har dezagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1326.svg\" alt=\"cal(U)={0,1}\" style=\"width:5.447em;height:1.001em\" loading=\"lazy\">, deskribapen inpropioen balioa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1357.svg\" alt=\"a_0=0\" style=\"width:3.472em;height:1.001em\" loading=\"lazy\">, eta:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1358.svg\" alt=\"cal(J)(d)=0\" style=\"width:4.673em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1359.svg\" alt=\"cal(J)(P)={0,1}\" style=\"width:7.200em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1360.svg\" alt=\"cal(J)(E)={1}\" style=\"width:6.118em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1361.svg\" alt=\"cal(J)(M)={(1,0),(1,1)}\" style=\"width:11.525em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1349.svg\" alt=\"x=0\" style=\"width:2.996em;height:1.001em\" loading=\"lazy\"> zein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1347.svg\" alt=\"x=1\" style=\"width:2.996em;height:1.001em\" loading=\"lazy\"> hartuta, bada <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1362.svg\" alt=\"y=1\" style=\"width:2.933em;height:1.001em\" loading=\"lazy\"> non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0536.svg\" alt=\"P(y)\" style=\"width:2.617em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1363.svg\" alt=\"M(y,x)\" style=\"width:4.130em;height:1.001em\" loading=\"lazy\">; hortaz, ez dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1364.svg\" alt=\"not exists y(P(y) and M(y,x))\" style=\"width:10.739em;height:1.001em\" loading=\"lazy\"> betetzen duen objekturik. Deskribapena inpropioa da, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1357.svg\" alt=\"a_0=0\" style=\"width:3.472em;height:1.001em\" loading=\"lazy\"> denotatzen du, eta hori <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1000.svg\" alt=\"d\" style=\"width:0.840em;height:1.001em\" loading=\"lazy\">-ren balioa denez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> egiazkoa da. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1009.svg\" alt=\"P(d)\" style=\"width:2.647em;height:1.001em\" loading=\"lazy\"> ere egiazkoa da. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0007.svg\" alt=\"1\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> lekukoa du. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0745.svg\" alt=\"alpha_4\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-n existitzen den objektu pentsagarria <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0007.svg\" alt=\"1\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> da, eta existitzen ez den objektu pentsagarria <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0124.svg\" alt=\"0\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\">; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1365.svg\" alt=\"(1,0) in cal(J)(M)\" style=\"width:7.150em;height:1.001em\" loading=\"lazy\">-k baldintza betetzen du. Baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1000.svg\" alt=\"d\" style=\"width:0.840em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0124.svg\" alt=\"0\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> denotatzen du eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1366.svg\" alt=\"not (0 in cal(J)(E))\" style=\"width:6.504em;height:1.001em\" loading=\"lazy\">; beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1367.svg\" alt=\"not (cal(J) models E(d))\" style=\"width:6.298em;height:1.001em\" loading=\"lazy\">."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1368.svg\" alt=\"alpha_1=forall x R(x,x)\" style=\"width:8.102em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1369.svg\" alt=\"alpha_2=forall x,y(R(x,y)&lt;-&gt;R(y,x))\" style=\"width:15.441em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1370.svg\" alt=\"alpha_3=forall x,y,z((R(x,y) and R(y,z))-&gt;R(x,z))\" style=\"width:22.185em;height:1.001em\" loading=\"lazy\">,"
      },
      {
       "mota": "testua",
       "html": "eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1371.svg\" alt=\"Gamma={alpha_1,alpha_2,alpha_3}\" style=\"width:8.467em;height:1.001em\" loading=\"lazy\">. Frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> independentea dela."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Formula bakoitzarentzat beste biak gordetzen dituen kontraeredu bana behar dugu."
      },
      {
       "mota": "testua",
       "html": "<strong>Erreflexibotasuna kenduz.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1293.svg\" alt=\"cal(U)={0}\" style=\"width:4.353em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1324.svg\" alt=\"cal(J)_1(R)=emptyset\" style=\"width:5.302em;height:1.001em\" loading=\"lazy\">. Erlazioa simetrikoa eta iragankorra da hutsean, baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1372.svg\" alt=\"R(0,0)\" style=\"width:3.691em;height:1.001em\" loading=\"lazy\"> faltsua; beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> independentea da."
      },
      {
       "mota": "testua",
       "html": "<strong>Simetria kenduz.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1326.svg\" alt=\"cal(U)={0,1}\" style=\"width:5.447em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1373.svg\" alt=\"cal(J)_2(R)={(0,0),(1,1),(0,1)}\" style=\"width:14.631em;height:1.001em\" loading=\"lazy\">. Erlazioa erreflexiboa eta iragankorra da, baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1374.svg\" alt=\"R(0,1)\" style=\"width:3.691em;height:1.001em\" loading=\"lazy\"> egia eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1375.svg\" alt=\"R(1,0)\" style=\"width:3.691em;height:1.001em\" loading=\"lazy\"> gezurra; beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> independentea da."
      },
      {
       "mota": "testua",
       "html": "<strong>Iragankortasuna kenduz.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1376.svg\" alt=\"cal(U)={0,1,2}\" style=\"width:6.541em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1377.svg\" alt=\"cal(J)_3(R)={(0,0),(1,1),(2,2),(0,1),(1,0),(1,2),(2,1)}\" style=\"width:26.985em;height:1.001em\" loading=\"lazy\">. Erlazioa erreflexiboa eta simetrikoa da. Hala ere, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1374.svg\" alt=\"R(0,1)\" style=\"width:3.691em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1378.svg\" alt=\"R(1,2)\" style=\"width:3.691em;height:1.001em\" loading=\"lazy\"> egiazkoak dira, baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1379.svg\" alt=\"R(0,2)\" style=\"width:3.691em;height:1.001em\" loading=\"lazy\"> faltsua; ondorioz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> independentea da. Hiru interpretazioek <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-ko axioma bakoitza gainerakoetatik ezin dela ondorioztatu frogatzen dute."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1380.svg\" alt=\"alpha_1=forall x,y,z((R(x,y) and R(y,z))-&gt;R(x,z))\" style=\"width:22.185em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1381.svg\" alt=\"alpha_2=forall x,y((R(x,y) and R(y,x))-&gt;x=y)\" style=\"width:20.435em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1382.svg\" alt=\"alpha_3=forall x,y(R(x,y) or R(y,x))\" style=\"width:14.927em;height:1.001em\" loading=\"lazy\">,"
      },
      {
       "mota": "testua",
       "html": "eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1383.svg\" alt=\"Delta={alpha_1,alpha_2,alpha_3}\" style=\"width:8.708em;height:1.001em\" loading=\"lazy\">. Frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0362.svg\" alt=\"Delta\" style=\"width:1.175em;height:1.001em\" loading=\"lazy\"> independentea dela."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong><img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-en kontraeredua.</strong> Har dezagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1376.svg\" alt=\"cal(U)={0,1,2}\" style=\"width:6.541em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1384.svg\" alt=\"cal(J)_1(R)={(0,0),(1,1),(2,2),(0,1),(1,2),(2,0)}\" style=\"width:23.897em;height:1.001em\" loading=\"lazy\">. Erlazioa antisimetikoa eta totala da: objektu desberdinen pare bakoitzean norabideetako bat agertzen da, eta ez dira bi norabideak batera agertzen. Baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1374.svg\" alt=\"R(0,1)\" style=\"width:3.691em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1378.svg\" alt=\"R(1,2)\" style=\"width:3.691em;height:1.001em\" loading=\"lazy\"> egiazkoak dira, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1379.svg\" alt=\"R(0,2)\" style=\"width:3.691em;height:1.001em\" loading=\"lazy\"> ez; beraz, ez da iragankorra."
      },
      {
       "mota": "testua",
       "html": "<strong><img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ren kontraeredua.</strong> Har dezagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1326.svg\" alt=\"cal(U)={0,1}\" style=\"width:5.447em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1385.svg\" alt=\"cal(J)_2(R)={(0,0),(1,1),(0,1),(1,0)}\" style=\"width:17.720em;height:1.001em\" loading=\"lazy\">. Erlazio unibertsala iragankorra eta totala da, baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1386.svg\" alt=\"0!=1\" style=\"width:2.913em;height:1.001em\" loading=\"lazy\"> izan arren bi norabideak betetzen ditu; hortaz, ez da antisimetikoa."
      },
      {
       "mota": "testua",
       "html": "<strong><img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ren kontraeredua.</strong> Har dezagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1293.svg\" alt=\"cal(U)={0}\" style=\"width:4.353em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1387.svg\" alt=\"cal(J)_3(R)=emptyset\" style=\"width:5.302em;height:1.001em\" loading=\"lazy\">. Erlazioa iragankorra eta antisimetikoa da hutsean, baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1388.svg\" alt=\"R(0,0) or R(0,0)\" style=\"width:8.458em;height:1.001em\" loading=\"lazy\"> faltsua da; beraz, ez da totala."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0029.svg\" alt=\"P\" style=\"width:1.116em;height:1.001em\" loading=\"lazy\"> &quot;puntua&quot;, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0031.svg\" alt=\"R\" style=\"width:1.117em;height:1.001em\" loading=\"lazy\"> &quot;zuzena&quot; eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1389.svg\" alt=\"E(x,z)\" style=\"width:3.779em;height:1.001em\" loading=\"lazy\"> &quot;<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0039.svg\" alt=\"x\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> puntua <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0057.svg\" alt=\"z\" style=\"width:0.784em;height:1.001em\" loading=\"lazy\"> zuzenean dago&quot; gisa irakurrita, izan bitez:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1390.svg\" alt=\"alpha_1=forall x,y((x!=y and P(x) and P(y)) -&gt; exists z(R(z) and E(x,z) and E(y,z)))\" style=\"width:33.574em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1391.svg\" alt=\"alpha_2=forall x,y,u,z((x!=y and P(x) and P(y) and R(u) and R(z) and E(x,u) and E(y,u) and E(x,z) and E(y,z))-&gt;u=z)\" style=\"width:51.371em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1392.svg\" alt=\"alpha_3=forall z(R(z)-&gt;exists x,y(x!=y and P(x) and P(y) and E(x,z) and E(y,z)))\" style=\"width:32.673em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1393.svg\" alt=\"alpha_4=exists x,y,z(x!=y and y!=z and x!=z and P(x) and P(y) and P(z) and not exists u(R(u) and E(x,u) and E(y,u) and E(z,u)))\" style=\"width:50.840em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1394.svg\" alt=\"Gamma={alpha_1,alpha_2,alpha_3,alpha_4}\" style=\"width:10.249em;height:1.001em\" loading=\"lazy\"> bada, frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> independentea dela. Formulek Hilberten geometria euklidearraren lehen lotura-axiomak adierazten dituzte: bi puntu desberdinek zuzen bat dute; zuzen hori bakarra da; zuzen bakoitzak bi puntu desberdin ditu; eta badira zuzen berean ez dauden hiru puntu."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong><img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-en kontraeredua.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1376.svg\" alt=\"cal(U)={0,1,2}\" style=\"width:6.541em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1395.svg\" alt=\"cal(J)_1(P)={0,1,2}\" style=\"width:8.646em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1324.svg\" alt=\"cal(J)_1(R)=emptyset\" style=\"width:5.302em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1396.svg\" alt=\"cal(J)_1(E)=emptyset\" style=\"width:5.312em;height:1.001em\" loading=\"lazy\">. Ez dago zuzenik; beraz, bakartasun-axioma eta zuzen bakoitzeko bi puntuen axioma hutsean betetzen dira. Hiru puntuak desberdinak eta ez-kolinealak dira, baina edozein bi puntu lotuko dituen zuzenik ez dago; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> faltsua da."
      },
      {
       "mota": "testua",
       "html": "<strong><img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ren kontraeredua.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1397.svg\" alt=\"cal(U)={0,1,2,3,4,5,6}\" style=\"width:10.916em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1398.svg\" alt=\"cal(J)_2(P)={0,1,2}\" style=\"width:8.646em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1399.svg\" alt=\"cal(J)_2(R)={3,4,5,6}\" style=\"width:9.741em;height:1.001em\" loading=\"lazy\">, eta"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1400.svg\" alt=\"cal(J)_2(E)={(0,3),(0,4),(1,3),(1,5),(1,6), (2,4),(2,5),(2,6)}\" style=\"width:30.084em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Puntu-pare bakoitzak gutxienez zuzen bat du, zuzen bakoitzak gutxienez bi puntu ditu, eta ez dago hiru puntuak batera dituen zuzenik. Baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0007.svg\" alt=\"1\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0008.svg\" alt=\"2\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> puntuak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0171.svg\" alt=\"5\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> zein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1401.svg\" alt=\"6\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> zuzenetan daude; beraz, lotura-zuzena ez da bakarra eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> faltsua da."
      },
      {
       "mota": "testua",
       "html": "<strong><img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ren kontraeredua.</strong> Unibertso, puntu eta zuzen multzo berak hartu, baina:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1402.svg\" alt=\"cal(J)_3(E)={(0,3),(0,4),(1,4),(1,5),(2,5),(2,3)}\" style=\"width:23.907em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Puntu-pare bakoitzak zuzen bakarra du: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1403.svg\" alt=\"0,1\" style=\"width:1.883em;height:1.001em\" loading=\"lazy\"> bikoteak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0170.svg\" alt=\"4\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\">; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1404.svg\" alt=\"1,2\" style=\"width:1.883em;height:1.001em\" loading=\"lazy\"> bikoteak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0171.svg\" alt=\"5\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\">; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1405.svg\" alt=\"0,2\" style=\"width:1.883em;height:1.001em\" loading=\"lazy\"> bikoteak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0009.svg\" alt=\"3\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\">. Hiru puntuak ez daude zuzen berean. Hala ere, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1401.svg\" alt=\"6\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> zuzenak ez du punturik; beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> faltsua da."
      },
      {
       "mota": "testua",
       "html": "<strong><img class=\"formula\" src=\"media/formulak/00aa_02logika/f0745.svg\" alt=\"alpha_4\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ren kontraeredua.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1293.svg\" alt=\"cal(U)={0}\" style=\"width:4.353em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1406.svg\" alt=\"cal(J)_4(P)={0}\" style=\"width:6.458em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1407.svg\" alt=\"cal(J)_4(R)=cal(J)_4(E)=emptyset\" style=\"width:9.824em;height:1.001em\" loading=\"lazy\">. Ez dago bi puntu desberdinik edo zuzenik, eta lehen hiru axiomak hutsean egiazkoak dira. Baina ezin dira hiru puntu desberdin aukeratu; hortaz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0745.svg\" alt=\"alpha_4\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> faltsua da."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1408.svg\" alt=\"alpha_1=exists y((forall x((S(x) and G(x))&lt;-&gt;x=y)) and y=r)\" style=\"width:23.980em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1409.svg\" alt=\"alpha_2=forall x((S(x) and x!=r)-&gt;A(r,x))\" style=\"width:17.915em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1410.svg\" alt=\"alpha_3=exists x(S(x) and G(x) and A(p,x))\" style=\"width:16.164em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1411.svg\" alt=\"alpha_4=forall x,y(A(x,y)-&gt;not A(y,x))\" style=\"width:16.137em;height:1.001em\" loading=\"lazy\">,"
      },
      {
       "mota": "testua",
       "html": "eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1412.svg\" alt=\"Delta={alpha_1,alpha_2,alpha_3,alpha_4}\" style=\"width:10.490em;height:1.001em\" loading=\"lazy\">. Frogatu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0362.svg\" alt=\"Delta\" style=\"width:1.175em;height:1.001em\" loading=\"lazy\"> independentea dela."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong><img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-en kontraeredua.</strong> Har dezagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1326.svg\" alt=\"cal(U)={0,1}\" style=\"width:5.447em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1413.svg\" alt=\"cal(J)_1(r)=0\" style=\"width:4.932em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1414.svg\" alt=\"cal(J)_1(p)=0\" style=\"width:4.995em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1415.svg\" alt=\"cal(J)_1(S)={0,1}\" style=\"width:7.426em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1416.svg\" alt=\"cal(J)_1(G)={1}\" style=\"width:6.463em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1417.svg\" alt=\"cal(J)_1(A)={(0,1)}\" style=\"width:8.416em;height:1.001em\" loading=\"lazy\">. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0863.svg\" alt=\"r\" style=\"width:0.748em;height:1.001em\" loading=\"lazy\">-tik beste <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0032.svg\" alt=\"S\" style=\"width:0.990em;height:1.001em\" loading=\"lazy\"> objekturako <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0045.svg\" alt=\"A\" style=\"width:1.079em;height:1.001em\" loading=\"lazy\"> erlazioa dago, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1418.svg\" alt=\"p\" style=\"width:0.810em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0032.svg\" alt=\"S\" style=\"width:0.990em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1419.svg\" alt=\"G\" style=\"width:1.121em;height:1.001em\" loading=\"lazy\"> den <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0007.svg\" alt=\"1\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> objektuarekin erlazioa du, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0045.svg\" alt=\"A\" style=\"width:1.079em;height:1.001em\" loading=\"lazy\"> asimetrikoa da. Hala ere, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0032.svg\" alt=\"S\" style=\"width:0.990em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1419.svg\" alt=\"G\" style=\"width:1.121em;height:1.001em\" loading=\"lazy\"> biak betetzen dituen objektu bakarra <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0007.svg\" alt=\"1\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> da, ez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0863.svg\" alt=\"r\" style=\"width:0.748em;height:1.001em\" loading=\"lazy\">-k denotatzen duen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0124.svg\" alt=\"0\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\">; beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> faltsua da."
      },
      {
       "mota": "testua",
       "html": "<strong><img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ren kontraeredua.</strong> Har dezagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1326.svg\" alt=\"cal(U)={0,1}\" style=\"width:5.447em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1420.svg\" alt=\"cal(J)_2(r)=0\" style=\"width:4.932em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1421.svg\" alt=\"cal(J)_2(p)=1\" style=\"width:4.995em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1422.svg\" alt=\"cal(J)_2(S)={0,1}\" style=\"width:7.426em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1423.svg\" alt=\"cal(J)_2(G)={0}\" style=\"width:6.463em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1424.svg\" alt=\"cal(J)_2(A)={(1,0)}\" style=\"width:8.416em;height:1.001em\" loading=\"lazy\">. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0032.svg\" alt=\"S\" style=\"width:0.990em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1419.svg\" alt=\"G\" style=\"width:1.121em;height:1.001em\" loading=\"lazy\"> objektu bakarra <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1425.svg\" alt=\"0=r\" style=\"width:2.871em;height:1.001em\" loading=\"lazy\"> da; <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1426.svg\" alt=\"p=1\" style=\"width:2.933em;height:1.001em\" loading=\"lazy\">-ek harekin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0045.svg\" alt=\"A\" style=\"width:1.079em;height:1.001em\" loading=\"lazy\"> erlazioa du; eta erlazioa asimetrikoa da. Baina <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0007.svg\" alt=\"1\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0032.svg\" alt=\"S\" style=\"width:0.990em;height:1.001em\" loading=\"lazy\"> da eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1427.svg\" alt=\"1!=r\" style=\"width:2.871em;height:1.001em\" loading=\"lazy\">, nahiz eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1428.svg\" alt=\"A(r,1)\" style=\"width:3.611em;height:1.001em\" loading=\"lazy\"> faltsua izan. Horregatik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> independentea da."
      },
      {
       "mota": "testua",
       "html": "<strong><img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ren kontraeredua.</strong> Har dezagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1293.svg\" alt=\"cal(U)={0}\" style=\"width:4.353em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1429.svg\" alt=\"cal(J)_3(r)=cal(J)_3(p)=0\" style=\"width:9.138em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1430.svg\" alt=\"cal(J)_3(S)=cal(J)_3(G)={0}\" style=\"width:10.848em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1431.svg\" alt=\"cal(J)_3(A)=emptyset\" style=\"width:5.263em;height:1.001em\" loading=\"lazy\">. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0425.svg\" alt=\"alpha_1\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> egiazkoa da, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0478.svg\" alt=\"alpha_2\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> hutsean egiazkoa da, ez baitago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0863.svg\" alt=\"r\" style=\"width:0.748em;height:1.001em\" loading=\"lazy\">-tik desberdina den <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0032.svg\" alt=\"S\" style=\"width:0.990em;height:1.001em\" loading=\"lazy\"> objekturik. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0045.svg\" alt=\"A\" style=\"width:1.079em;height:1.001em\" loading=\"lazy\"> hutsa asimetrikoa da. Baina ez dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1432.svg\" alt=\"A(p,x)\" style=\"width:3.757em;height:1.001em\" loading=\"lazy\"> betetzen duen lekukorik; beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0584.svg\" alt=\"alpha_3\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> faltsua da."
      },
      {
       "mota": "testua",
       "html": "<strong><img class=\"formula\" src=\"media/formulak/00aa_02logika/f0745.svg\" alt=\"alpha_4\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\">-ren kontraeredua.</strong> Har dezagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1293.svg\" alt=\"cal(U)={0}\" style=\"width:4.353em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1433.svg\" alt=\"cal(J)_4(r)=cal(J)_4(p)=0\" style=\"width:9.138em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1434.svg\" alt=\"cal(J)_4(S)=cal(J)_4(G)={0}\" style=\"width:10.848em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1435.svg\" alt=\"cal(J)_4(A)={(0,0)}\" style=\"width:8.416em;height:1.001em\" loading=\"lazy\">. Lehen formula egiazkoa da; bigarrena hutsean betetzen da; eta hirugarrenak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0124.svg\" alt=\"0\" style=\"width:0.789em;height:1.001em\" loading=\"lazy\"> lekukoa du. Aldiz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1436.svg\" alt=\"A(0,0)\" style=\"width:3.653em;height:1.001em\" loading=\"lazy\"> egiazkoa izanik, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1437.svg\" alt=\"not A(0,0)\" style=\"width:4.425em;height:1.001em\" loading=\"lazy\"> faltsua da; hortaz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0045.svg\" alt=\"A\" style=\"width:1.079em;height:1.001em\" loading=\"lazy\"> ez da asimetrikoa eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0745.svg\" alt=\"alpha_4\" style=\"width:1.478em;height:1.001em\" loading=\"lazy\"> faltsua da."
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
     "html": "Argumentazio edo froga bat <strong>zuzena</strong>, <strong>baliozkoa</strong> edo <strong>ondorio-emailea</strong> dela esaten dugu ondorioa premisen ondorio semantikoa denean. Orain arte bi tresna desberdin eraiki ditugu hori kontrolatzeko. Alde batetik, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1046.svg\" alt=\"Gamma tack_(cal(L)) alpha\" style=\"width:3.026em;height:1.230em\" loading=\"lazy\"> erlazioa daukagu: kalkuluko erregelen bidez <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-tik deduzitzen dela dio, eta guztiz sintaktikoa da. Bestetik, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1261.svg\" alt=\"Gamma models_(cal(L)) alpha\" style=\"width:2.999em;height:1.230em\" loading=\"lazy\"> erlazioak dio <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asetzen duen interpretazio orok <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> ere asetzen duela; hori nozio semantikoa da."
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
       "html": "Kalkulu deduktibo bat <strong>semantikoki zuzena</strong> da baldin eta soilik baldin, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> sententzien edozein multzo eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> edozein sententzia izanik,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1438.svg\" alt=\"Gamma tack alpha quad =&gt; quad Gamma models alpha\" style=\"width:9.123em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Formalismoa adierazi behar denean: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1439.svg\" alt=\"Gamma tack_(cal(L)) alpha =&gt; Gamma models_(cal(L)) alpha\" style=\"width:7.616em;height:1.230em\" loading=\"lazy\">."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko sententzien edozein multzo eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko edozein sententzia badira,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1440.svg\" alt=\"Gamma tack_(cal(L)) alpha quad =&gt; quad Gamma models_(cal(L)) alpha\" style=\"width:9.289em;height:1.230em\" loading=\"lazy\">."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\"> ez bada <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> edo <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\">-n agertzen, eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1441.svg\" alt=\"u != x\" style=\"width:3.079em;height:1.001em\" loading=\"lazy\"> bada, honako bi hipotesietatik"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1442.svg\" alt=\"Gamma union {alpha[u/x]} models beta\" style=\"width:7.912em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "eta"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1443.svg\" alt=\"Gamma models forall x alpha\" style=\"width:4.267em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "ondorioztatzen da <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1444.svg\" alt=\"Gamma models beta\" style=\"width:2.790em;height:1.001em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Har dezagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asetzen duen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\"> interpretazio arbitrario bat. Bigarren hipotesiagatik, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1445.svg\" alt=\"cal(J) models forall x alpha\" style=\"width:4.352em;height:1.001em\" loading=\"lazy\">. Kuantifikatzaile orokorraren definizioz, unibertsoko edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1000.svg\" alt=\"d\" style=\"width:0.840em;height:1.001em\" loading=\"lazy\"> objekturentzat <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1446.svg\" alt=\"cal(J)[x:=d] models alpha\" style=\"width:6.554em;height:1.001em\" loading=\"lazy\">. Bereziki, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1447.svg\" alt=\"d=cal(J)(u)\" style=\"width:4.756em;height:1.001em\" loading=\"lazy\"> aukeratuta,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1448.svg\" alt=\"cal(J)[x:=cal(J)(u)] models alpha\" style=\"width:8.295em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Ordezkapenaren lema semantikoak - III.3.1ek - hori honela berridazten du:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1449.svg\" alt=\"cal(J) models alpha[u/x]\" style=\"width:4.663em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> ere asetzen duenez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1450.svg\" alt=\"cal(J) models Gamma union {alpha[u/x]}\" style=\"width:8.023em;height:1.001em\" loading=\"lazy\">. Lehen hipotesia aplikatuta, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1451.svg\" alt=\"cal(J) models beta\" style=\"width:2.874em;height:1.001em\" loading=\"lazy\">. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-ren edozein eredu izan denez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1444.svg\" alt=\"Gamma models beta\" style=\"width:2.790em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Jatorrizko frogak urrats bera interpretazioaren aldagai-balioak txandakatuz idazten du, III.2.4, III.1.4 eta III.3.1 erabiliz. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ren freskotasunak bermatzen du <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0054.svg\" alt=\"u\" style=\"width:0.873em;height:1.001em\" loading=\"lazy\">-ren balioa aldatzeak ez duela <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> edo <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\">- ren asetasuna nahi gabe aldatzen. Baldintza hori da EPren aldagai kritikoaren murriztapen sintaktikoaren ordain semantikoa."
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
     "html": "<strong>Konsistentzia</strong> nozio sintaktikoa da: kalkuluaren deduzigarritasun-erregelen arabera definitzen da. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> konsistentea da formula guztiak handik deduzigarriak ez badira; baliokidetzaz, ez dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> formularik halakoa non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1152.svg\" alt=\"Gamma tack alpha and not alpha\" style=\"width:5.826em;height:1.001em\" loading=\"lazy\">. <strong>Asegarritasuna</strong>, aldiz, semantikoa da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asegarria da gutxienez interpretazio batek haren sententzia guztiak asetzen baditu."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko deskribatzailerik gabeko sententzien multzo maximalki konsistente eta exenplifikatua bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asegarria da unibertso zenbakarria duen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ren interpretazio batean."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1. Terminoen arteko baliokidetasuna.</strong> Izan bedi <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1452.svg\" alt=\"T_(cal(L))\" style=\"width:1.598em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko deskribatzailerik gabeko terminoen multzoa. Definitu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1453.svg\" alt=\"approx\" style=\"width:1.106em;height:1.001em\" loading=\"lazy\"> erlazioa:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1454.svg\" alt=\"t_1 approx t_2 quad &lt;=&gt; quad (t_1=t_2) in Gamma\" style=\"width:13.583em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Erlazioa erreflexiboa da, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0386.svg\" alt=\"t=t\" style=\"width:2.591em;height:1.001em\" loading=\"lazy\"> berdintasun logikoa delako eta multzo maximalki konsistenteak bere teorema guztiak barne hartzen dituelako. Simetrikoa da: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0185.svg\" alt=\"t_1=t_2\" style=\"width:3.643em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n badago, SIz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0391.svg\" alt=\"t_2=t_1\" style=\"width:3.643em;height:1.001em\" loading=\"lazy\"> deduzitzen da eta itxitura deduktiboagatik hori ere <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dago. Iragankorra da era berean: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0185.svg\" alt=\"t_1=t_2\" style=\"width:3.643em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0396.svg\" alt=\"t_2=t_3\" style=\"width:3.643em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n badaude, TIz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0399.svg\" alt=\"t_1=t_3\" style=\"width:3.643em;height:1.001em\" loading=\"lazy\"> deduzitzen da. Beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1453.svg\" alt=\"approx\" style=\"width:1.106em;height:1.001em\" loading=\"lazy\"> baliokidetasun-erlazioa da. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1455.svg\" alt=\"overline(t)\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0203.svg\" alt=\"t\" style=\"width:0.629em;height:1.001em\" loading=\"lazy\"> duen baliokidetasun-klasea adieraziko du."
      },
      {
       "mota": "testua",
       "html": "<strong>2. Interpretazio kanonikoa.</strong> Definitu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\"> interpretazioaren unibertsoa terminoen zatidura gisa:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1456.svg\" alt=\"cal(U)=T_(cal(L))/approx\" style=\"width:3.924em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0029.svg\" alt=\"P\" style=\"width:1.116em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0016.svg\" alt=\"n\" style=\"width:0.905em;height:1.001em\" loading=\"lazy\">-adiko erlatzailea bada, jarri"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1457.svg\" alt=\"cal(J)(P)={chevron.l overline(t_1),dots,overline(t_n) chevron.r : P(t_1,dots,t_n) in Gamma}\" style=\"width:19.427em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0017.svg\" alt=\"f\" style=\"width:0.882em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0016.svg\" alt=\"n\" style=\"width:0.905em;height:1.001em\" loading=\"lazy\">-adiko funtorea bada, definitu"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1458.svg\" alt=\"cal(J)(f)(overline(t_1),dots,overline(t_n)) = overline(f(t_1,dots,t_n))\" style=\"width:14.681em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Aldagai eta konstante bakoitzari bere termino-klasea ematen zaio: <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1459.svg\" alt=\"cal(J)(x)=overline(x)\" style=\"width:4.788em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1460.svg\" alt=\"cal(J)(a)=overline(a)\" style=\"width:4.689em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Definizio horiek ordezkariaren hautaketarekiko independenteak dira. Izan ere, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1461.svg\" alt=\"t_i approx t&#x27;_i\" style=\"width:3.372em;height:1.001em\" loading=\"lazy\"> bada <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1462.svg\" alt=\"i\" style=\"width:0.610em;height:1.001em\" loading=\"lazy\"> guztientzat, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1463.svg\" alt=\"t_i=t&#x27;_i\" style=\"width:3.378em;height:1.001em\" loading=\"lazy\"> berdintasunak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n daude. II.8.2(1)eko berdintasun-itxiturak dio <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1060.svg\" alt=\"P(t_1,dots,t_n)\" style=\"width:6.015em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dagoela baldin eta soilik baldin <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1464.svg\" alt=\"P(t&#x27;_1,dots,t&#x27;_n)\" style=\"width:6.015em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n dagoen; funtoreentzat ere <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1465.svg\" alt=\"f(t_1,dots,t_n)=f(t&#x27;_1,dots,t&#x27;_n)\" style=\"width:12.896em;height:1.001em\" loading=\"lazy\"> lortzen da. Hortaz, klaseei egindako esleipena ondo definituta dago."
      },
      {
       "mota": "testua",
       "html": "<strong>3. Terminoen balioa.</strong> Deskribatzailerik gabeko termino ororentzat,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1466.svg\" alt=\"cal(J)(t)=overline(t)\" style=\"width:4.300em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Terminoaren luzeraren gaineko indukzioz frogatzen da. Aldagai eta konstanteen kasuak definizioak dira. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1103.svg\" alt=\"t=f(t_1,dots,t_n)\" style=\"width:7.743em;height:1.001em\" loading=\"lazy\"> bada, indukzio-hipotesiz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1467.svg\" alt=\"cal(J)(t_i)=overline(t_i)\" style=\"width:5.084em;height:1.001em\" loading=\"lazy\"> eta, funtorearen definizioz,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1468.svg\" alt=\"cal(J)(f)(overline(t_1),dots,overline(t_n)) =overline(f(t_1,dots,t_n))\" style=\"width:14.681em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "<strong>4. Egiaren lema.</strong> Deskribatzailerik gabeko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> sententzia ororentzat,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1469.svg\" alt=\"cal(J) models alpha quad &lt;=&gt; quad alpha in Gamma\" style=\"width:9.272em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Froga <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">-ko zeinu logikoen kopuruaren gaineko indukzioa da. Atomo erlazionalean, terminoen emaitza eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1190.svg\" alt=\"cal(J)(P)\" style=\"width:2.825em;height:1.001em\" loading=\"lazy\">-ren definizioa kateatuz,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1470.svg\" alt=\"cal(J) models P(t_1,dots,t_n) quad &lt;=&gt; quad P(t_1,dots,t_n) in Gamma\" style=\"width:19.399em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Berdintasun-atomoan,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1471.svg\" alt=\"cal(J) models t_1=t_2 &lt;=&gt; overline(t_1)=overline(t_2) &lt;=&gt; t_1 approx t_2 &lt;=&gt; (t_1=t_2) in Gamma\" style=\"width:24.344em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Ezeztapenean, indukzio-hipotesiak eta maximalitatearen II.8.2(3) propietateak honako katea ematen dute:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1472.svg\" alt=\"cal(J) models not alpha &lt;=&gt; not (cal(J) models alpha) &lt;=&gt; alpha not in Gamma &lt;=&gt; (not alpha) in Gamma\" style=\"width:21.681em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Konjuntzioan,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1473.svg\" alt=\"cal(J) models alpha and beta &lt;=&gt; (cal(J) models alpha &quot; eta &quot; cal(J) models beta) &lt;=&gt; (alpha in Gamma &quot; eta &quot; beta in Gamma) &lt;=&gt; (alpha and beta) in Gamma\" style=\"width:35.123em;height:1.001em\" loading=\"lazy\">,"
      },
      {
       "mota": "testua",
       "html": "II.8.2(4) erabilita. Disjuntzioa II.8.2(5)ez tratatzen da; inplikazioa eta bikondizionala modu berean, dagozkien itxitura-propietateekin."
      },
      {
       "mota": "testua",
       "html": "Kuantifikatzaile orokorrarentzat, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1181.svg\" alt=\"cal(U)\" style=\"width:1.072em;height:1.001em\" loading=\"lazy\">-ko objektu oro termino baten klasea denez,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1445.svg\" alt=\"cal(J) models forall x alpha\" style=\"width:4.352em;height:1.001em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "baldin eta soilik baldin, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko designatzaile bakoitzerako, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1474.svg\" alt=\"cal(J)[x:=overline(t)] models alpha\" style=\"width:6.478em;height:1.001em\" loading=\"lazy\">. Ordezkapen-lemak hori <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1475.svg\" alt=\"cal(J) models alpha[t/x]\" style=\"width:4.641em;height:1.001em\" loading=\"lazy\"> bihurtzen du; indukzio-hipotesiz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1476.svg\" alt=\"alpha[t/x] in Gamma\" style=\"width:4.813em;height:1.001em\" loading=\"lazy\">. II.8.3(2)ren arabera, instantzia guztiak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-n egotea <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1477.svg\" alt=\"forall x alpha in Gamma\" style=\"width:4.524em;height:1.001em\" loading=\"lazy\"> izatearen baliokidea da."
      },
      {
       "mota": "testua",
       "html": "Existentzialarentzat, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1478.svg\" alt=\"cal(J) models exists x alpha\" style=\"width:4.224em;height:1.001em\" loading=\"lazy\"> baldin eta soilik baldin badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1479.svg\" alt=\"overline(t) in cal(U)\" style=\"width:2.906em;height:1.001em\" loading=\"lazy\"> lekuko bat halakoa non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1474.svg\" alt=\"cal(J)[x:=overline(t)] models alpha\" style=\"width:6.478em;height:1.001em\" loading=\"lazy\">. Ordezkapen-lemak eta indukzio-hipotesiak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1476.svg\" alt=\"alpha[t/x] in Gamma\" style=\"width:4.813em;height:1.001em\" loading=\"lazy\"> ematen dute; II.8.3(1)eko exenplifikazio-propietateak dio hori <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1480.svg\" alt=\"exists x alpha in Gamma\" style=\"width:4.397em;height:1.001em\" loading=\"lazy\"> izatearen baliokidea dela. Horrela amaitzen da egiaren lemaren indukzioa."
      },
      {
       "mota": "testua",
       "html": "<strong>5. Asegarritasuna eta zenbakarritasuna.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-ko elementuak deskribatzailerik gabeko sententziak dira; egiaren lemaren arabera, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\">-k denak asetzen ditu. Beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1283.svg\" alt=\"cal(J) models Gamma\" style=\"width:2.901em;height:1.001em\" loading=\"lazy\">. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1452.svg\" alt=\"T_(cal(L))\" style=\"width:1.598em;height:1.001em\" loading=\"lazy\"> terminoen multzoa zenbakarria denez, haren zatidura <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1481.svg\" alt=\"T_(cal(L))/approx\" style=\"width:1.519em;height:1.001em\" loading=\"lazy\"> ere gehienez zenbakarria da. Hortaz, eraikitako eredua zenbakarria da, eta teorema frogatuta dago."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko deskribatzailerik gabeko sententzien multzo konsistente oro asegarria da <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ren unibertso zenbakarriko interpretazio batean."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> halako multzo konsistente bat. II.8.4ren arabera, badago konstante berri zenbakarrien <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1159.svg\" alt=\"cal(C)\" style=\"width:0.968em;height:1.001em\" loading=\"lazy\"> klase bat eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1158.svg\" alt=\"cal(L) union cal(C)\" style=\"width:3.146em;height:1.001em\" loading=\"lazy\"> hizkuntzako <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1157.svg\" alt=\"Gamma^star\" style=\"width:1.404em;height:1.001em\" loading=\"lazy\"> multzo maximalki konsistente, exenplifikatu eta deskribatzailerik gabea, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1160.svg\" alt=\"Gamma subset.eq Gamma^star\" style=\"width:3.672em;height:1.001em\" loading=\"lazy\"> duena."
      },
      {
       "mota": "testua",
       "html": "8.1 teoremak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1157.svg\" alt=\"Gamma^star\" style=\"width:1.404em;height:1.001em\" loading=\"lazy\"> asetzen duen unibertso zenbakarriko interpretazio bat ematen du. Interpretazioa jatorrizko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\"> hizkuntzara mugatuta, unibertsoa ez da aldatzen eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-ko formula guztiak asetzen jarraitzen du, III.4.5eko hizkuntza-murrizketaren propietateagatik. Beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asegarria da unibertso zenbakarri batean."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko sententzien multzo konsistente oro - deskribatzaileak izan ala ez - asegarria da <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ren unibertso zenbakarriko interpretazio batean."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko sententzien multzo konsistentea. Aukeratu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-koa ez den <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0012.svg\" alt=\"c\" style=\"width:0.741em;height:1.001em\" loading=\"lazy\"> konstante indibidual berria, eta jarri"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1482.svg\" alt=\"delta equiv c = iota y (y=y)\" style=\"width:9.039em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "II.7.7ren arabera, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1483.svg\" alt=\"Gamma union {delta}\" style=\"width:3.935em;height:1.001em\" loading=\"lazy\"> konsistentea da <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1132.svg\" alt=\"cal(L) union {c}\" style=\"width:4.077em;height:1.001em\" loading=\"lazy\"> hizkuntzan. Orain deskribatzaileak ezabatzeko itzulpenen multzoa definituko dugu:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1484.svg\" alt=\"A={alpha&#x27; : exists alpha in Gamma, delta tack_(cal(L) union {c}) (alpha &lt;-&gt; alpha&#x27;)}\" style=\"width:18.734em;height:1.936em\" loading=\"lazy\">,"
      },
      {
       "mota": "testua",
       "html": "non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1096.svg\" alt=\"alpha&#x27;\" style=\"width:1.346em;height:1.001em\" loading=\"lazy\"> deskribatzailerik gabeko formula den eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\">-ren aldagai libre berak dituen. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-ko formulak sententziak direnez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0045.svg\" alt=\"A\" style=\"width:1.079em;height:1.001em\" loading=\"lazy\">-koak ere sententziak dira. II.6.1(a) emaitzak bermatzen du <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-ko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> bakoitzarentzat gutxienez halako <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1096.svg\" alt=\"alpha&#x27;\" style=\"width:1.346em;height:1.001em\" loading=\"lazy\"> bat badagoela."
      },
      {
       "mota": "testua",
       "html": "<strong><img class=\"formula\" src=\"media/formulak/00aa_02logika/f0045.svg\" alt=\"A\" style=\"width:1.079em;height:1.001em\" loading=\"lazy\"> konsistentea da.</strong> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1485.svg\" alt=\"alpha&#x27; in A\" style=\"width:3.630em;height:1.001em\" loading=\"lazy\"> bakoitzarentzat badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0353.svg\" alt=\"alpha in Gamma\" style=\"width:3.091em;height:1.001em\" loading=\"lazy\"> halakoa non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1486.svg\" alt=\"delta tack alpha &lt;-&gt; alpha&#x27;\" style=\"width:5.795em;height:1.001em\" loading=\"lazy\">. EBz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1487.svg\" alt=\"delta tack alpha -&gt; alpha&#x27;\" style=\"width:5.795em;height:1.001em\" loading=\"lazy\">; hortaz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1488.svg\" alt=\"Gamma union {delta} tack alpha&#x27;\" style=\"width:6.421em;height:1.001em\" loading=\"lazy\">, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> premisa gisa erabil daitekeelako. Beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0045.svg\" alt=\"A\" style=\"width:1.079em;height:1.001em\" loading=\"lazy\">-ko formula guztiak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1483.svg\" alt=\"Gamma union {delta}\" style=\"width:3.935em;height:1.001em\" loading=\"lazy\">-tik deduzigarriak dira. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0045.svg\" alt=\"A\" style=\"width:1.079em;height:1.001em\" loading=\"lazy\"> kontraesankorra balitz, deduzigarritasunaren iragankortasunak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1483.svg\" alt=\"Gamma union {delta}\" style=\"width:3.935em;height:1.001em\" loading=\"lazy\"> ere kontraesankor bihurtuko luke, aurreko konsistentziaren kontra. Ondorioz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0045.svg\" alt=\"A\" style=\"width:1.079em;height:1.001em\" loading=\"lazy\"> konsistentea da."
      },
      {
       "mota": "testua",
       "html": "8.2 teorema aplikatuta, badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1132.svg\" alt=\"cal(L) union {c}\" style=\"width:4.077em;height:1.001em\" loading=\"lazy\"> hizkuntzaren unibertso zenbakarriko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\"> interpretazio bat halakoa non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1489.svg\" alt=\"cal(J) models A\" style=\"width:3.046em;height:1.001em\" loading=\"lazy\">. Idatz dezagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1178.svg\" alt=\"cal(J)=chevron.l cal(U),cal(H),a_0 chevron.r\" style=\"width:7.727em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Eraiki <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1280.svg\" alt=\"cal(J)&#x27;\" style=\"width:1.413em;height:1.001em\" loading=\"lazy\"> interpretazioa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\">-ren berdina izanik sinbolo guztien interpretazioan, baina deskribapen inpropioen balio lehenetsia <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0013.svg\" alt=\"a_0\" style=\"width:1.349em;height:1.001em\" loading=\"lazy\"> izan beharrean <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1490.svg\" alt=\"cal(J)(c)\" style=\"width:2.450em;height:1.001em\" loading=\"lazy\"> hartuta:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1491.svg\" alt=\"cal(J)&#x27;=chevron.l cal(U),cal(H),cal(J)(c) chevron.r\" style=\"width:9.222em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Frogatu behar da <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1492.svg\" alt=\"cal(J)&#x27; models Gamma\" style=\"width:3.296em;height:1.001em\" loading=\"lazy\">. Har dezagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0353.svg\" alt=\"alpha in Gamma\" style=\"width:3.091em;height:1.001em\" loading=\"lazy\">. II.6.1(a)z aukeratu deskribatzailerik gabeko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1096.svg\" alt=\"alpha&#x27;\" style=\"width:1.346em;height:1.001em\" loading=\"lazy\"> bat, aldagai libre berak dituena, halakoa non"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1493.svg\" alt=\"delta tack_(cal(L) union {c}) (alpha &lt;-&gt; alpha&#x27;)\" style=\"width:8.444em;height:1.478em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "7.2ren zuzenkotasun semantikoagatik, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1494.svg\" alt=\"delta models alpha &lt;-&gt; alpha&#x27;\" style=\"width:5.603em;height:1.001em\" loading=\"lazy\">. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1280.svg\" alt=\"cal(J)&#x27;\" style=\"width:1.413em;height:1.001em\" loading=\"lazy\">-n <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1495.svg\" alt=\"iota y(y=y)\" style=\"width:4.865em;height:1.001em\" loading=\"lazy\"> deskribapen inpropioaren balioa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1490.svg\" alt=\"cal(J)(c)\" style=\"width:2.450em;height:1.001em\" loading=\"lazy\"> da; beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1496.svg\" alt=\"cal(J)&#x27; models delta\" style=\"width:3.128em;height:1.001em\" loading=\"lazy\">, eta ondorioz <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1497.svg\" alt=\"cal(J)&#x27; models alpha &lt;-&gt; alpha&#x27;\" style=\"width:6.250em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Bestalde, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1485.svg\" alt=\"alpha&#x27; in A\" style=\"width:3.630em;height:1.001em\" loading=\"lazy\"> denez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1498.svg\" alt=\"cal(J) models alpha&#x27;\" style=\"width:3.313em;height:1.001em\" loading=\"lazy\">. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1096.svg\" alt=\"alpha&#x27;\" style=\"width:1.346em;height:1.001em\" loading=\"lazy\">-k ez du deskribatzailerik eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1280.svg\" alt=\"cal(J)&#x27;\" style=\"width:1.413em;height:1.001em\" loading=\"lazy\"> deskribapen inpropioen balioan baino ez dira bereizten; hortaz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1499.svg\" alt=\"cal(J)&#x27; models alpha&#x27;\" style=\"width:3.708em;height:1.001em\" loading=\"lazy\"> ere bai. Aurreko bikondizionalarekin, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1500.svg\" alt=\"cal(J)&#x27; models alpha\" style=\"width:3.313em;height:1.001em\" loading=\"lazy\">. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> arbitrarioa zenez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1492.svg\" alt=\"cal(J)&#x27; models Gamma\" style=\"width:3.296em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "Azkenik, kendu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0012.svg\" alt=\"c\" style=\"width:0.741em;height:1.001em\" loading=\"lazy\"> konstante berria interpretazioaren sinaduratik. Lortutako <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1501.svg\" alt=\"cal(J)&#x27;&#x27;\" style=\"width:1.608em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ren interpretazioak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asetzen jarraitzen du, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-k ez baitu <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0012.svg\" alt=\"c\" style=\"width:0.741em;height:1.001em\" loading=\"lazy\"> erabiltzen; unibertsoa <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1181.svg\" alt=\"cal(U)\" style=\"width:1.072em;height:1.001em\" loading=\"lazy\"> bera da eta zenbakarria. Horrek teorema frogatzen du."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko sententzien multzo asegarria konsistentea da <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-n."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asegarria. Badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\"> interpretazio bat, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1283.svg\" alt=\"cal(J) models Gamma\" style=\"width:2.901em;height:1.001em\" loading=\"lazy\">. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> inkonsistentea balitz, II.7.3ren arabera formula bat legoke, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\">, halakoa non"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1502.svg\" alt=\"Gamma tack_(cal(L)) (beta and not beta)\" style=\"width:6.639em;height:1.230em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "7.2ren zuzenkotasun semantikoak <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1503.svg\" alt=\"Gamma models_(cal(L)) beta and not beta\" style=\"width:5.712em;height:1.230em\" loading=\"lazy\"> emango luke; hortaz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1504.svg\" alt=\"cal(J) models beta and not beta\" style=\"width:5.631em;height:1.001em\" loading=\"lazy\">. Horrek batera eskatzen du <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1451.svg\" alt=\"cal(J) models beta\" style=\"width:2.874em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1505.svg\" alt=\"cal(J) models not beta\" style=\"width:3.647em;height:1.001em\" loading=\"lazy\">, hau da, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1193.svg\" alt=\"cal(J)\" style=\"width:1.019em;height:1.001em\" loading=\"lazy\">-k <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0302.svg\" alt=\"beta\" style=\"width:0.908em;height:1.001em\" loading=\"lazy\"> asetzea eta ez asetzea. Ezinezkoa denez, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> konsistentea da."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko sententzien multzoa bada,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1506.svg\" alt=\"Gamma &quot; asegarria da &quot; cal(L) &quot;-n&quot; quad &lt;=&gt; quad Gamma &quot; konsistentea da &quot; cal(L) &quot;-n&quot;\" style=\"width:26.768em;height:1.001em\" loading=\"lazy\">."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko sententzien multzoa bada, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asegarria da baldin eta soilik baldin haren azpimultzo finitu oro asegarria den."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demagun lehenik <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asegarria dela. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asetzen duen interpretazioak haren edozein <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0360.svg\" alt=\"Delta subset.eq Gamma\" style=\"width:3.443em;height:1.001em\" loading=\"lazy\"> azpimultzo ere asetzen du; beraz, azpimultzo finitu guztiak asegarriak dira."
      },
      {
       "mota": "testua",
       "html": "Alderantziz, demagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-ren azpimultzo finitu oro asegarria dela. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asegarria ez balitz, 8.5en arabera inkonsistentea litzateke. Orduan, II.7.3z, badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> formula bat halakoa non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1152.svg\" alt=\"Gamma tack alpha and not alpha\" style=\"width:5.826em;height:1.001em\" loading=\"lazy\">. Dedukzioaren finitudez - II.2.8 -, badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0360.svg\" alt=\"Delta subset.eq Gamma\" style=\"width:3.443em;height:1.001em\" loading=\"lazy\"> azpimultzo finitu bat halakoa non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1507.svg\" alt=\"Delta tack alpha and not alpha\" style=\"width:6.067em;height:1.001em\" loading=\"lazy\">. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0362.svg\" alt=\"Delta\" style=\"width:1.175em;height:1.001em\" loading=\"lazy\"> inkonsistentea litzateke eta, 8.5 berriz aplikatuta, ez asegarria. Horrek hipotesia kontraesaten du. Beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asegarria da."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko sententzien multzo asegarria bada, badago unibertso zenbakarria duen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ren interpretazio bat <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asetzen duena."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asegarria denez, 8.4ren arabera konsistentea da. 8.3k multzo konsistente orori unibertso zenbakarriko eredu bat eraikitzen dio. Beraz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\">-k badu eredu zenbakarria, nahiz eta hasieran ezagutzen genuen eredua zenbakaitza izan zitekeen."
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
       "html": "Kalkulu deduktibo bat <strong>semantikoki osoa</strong> da baldin eta soilik baldin, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> sententzien edozein multzo eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> edozein sententzia izanik,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1508.svg\" alt=\"Gamma models alpha quad =&gt; quad Gamma tack alpha\" style=\"width:9.123em;height:1.001em\" loading=\"lazy\">."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko sententzien edozein multzo eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko edozein sententzia badira,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1509.svg\" alt=\"Gamma models_(cal(L)) alpha quad =&gt; quad Gamma tack_(cal(L)) alpha\" style=\"width:9.289em;height:1.230em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demagun <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1261.svg\" alt=\"Gamma models_(cal(L)) alpha\" style=\"width:2.999em;height:1.230em\" loading=\"lazy\">. Horrek esan nahi du ez dagoela <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> asetu eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> asetzen ez duen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ren interpretaziorik. Baliokidetzaz, ez dago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1153.svg\" alt=\"Gamma union {not alpha}\" style=\"width:4.892em;height:1.001em\" loading=\"lazy\"> asetzen duen interpretaziorik. Beraz,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1153.svg\" alt=\"Gamma union {not alpha}\" style=\"width:4.892em;height:1.001em\" loading=\"lazy\"> ez da asegarria."
      },
      {
       "mota": "testua",
       "html": "8.3 teoremak dio multzo konsistente oro asegarria dela; kontraposizioz, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1153.svg\" alt=\"Gamma union {not alpha}\" style=\"width:4.892em;height:1.001em\" loading=\"lazy\"> inkonsistentea da. Multzo inkonsistente batetik formula oro deduzitzen denez,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1050.svg\" alt=\"Gamma union {not alpha} tack alpha\" style=\"width:6.984em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "DNz,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1510.svg\" alt=\"Gamma union {not alpha} tack not not alpha\" style=\"width:8.529em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "II.5.3ko kontraesanezko dedukzioaren emaitzak kanpoko <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0311.svg\" alt=\"not alpha\" style=\"width:1.724em;height:1.001em\" loading=\"lazy\"> hipotesia kentzen du:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1511.svg\" alt=\"Gamma tack not not alpha\" style=\"width:4.571em;height:1.001em\" loading=\"lazy\">."
      },
      {
       "mota": "testua",
       "html": "DN berriz erabilita, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0291.svg\" alt=\"Gamma tack alpha\" style=\"width:3.026em;height:1.001em\" loading=\"lazy\">. Horrela, ondorio semantikoa zen <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> kalkuluan deduzigarria dela frogatu da."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko sententzien multzoa eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko sententzia badira,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1512.svg\" alt=\"Gamma models_(cal(L)) alpha quad &lt;=&gt; quad Gamma tack_(cal(L)) alpha\" style=\"width:9.289em;height:1.230em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "7.2k deduzigarritasunetik ondorio semantikora eramaten du; 9.2k alderantzizko bidea egiten du. <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1271.svg\" alt=\"Gamma=emptyset\" style=\"width:3.057em;height:1.001em\" loading=\"lazy\"> hartuta, honako kasu berezia lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1513.svg\" alt=\"models_(cal(L)) alpha quad &lt;=&gt; quad tack_(cal(L)) alpha\" style=\"width:7.198em;height:1.230em\" loading=\"lazy\">."
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
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f0292.svg\" alt=\"Gamma\" style=\"width:0.934em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko sententzien multzoa eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0275.svg\" alt=\"alpha\" style=\"width:0.952em;height:1.001em\" loading=\"lazy\"> <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1041.svg\" alt=\"cal(L)\" style=\"width:1.102em;height:1.001em\" loading=\"lazy\">-ko sententzia badira,"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula\" src=\"media/formulak/00aa_02logika/f1261.svg\" alt=\"Gamma models_(cal(L)) alpha\" style=\"width:2.999em;height:1.230em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "baldin eta soilik baldin badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0360.svg\" alt=\"Delta subset.eq Gamma\" style=\"width:3.443em;height:1.001em\" loading=\"lazy\"> azpimultzo finitu bat halakoa non <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1514.svg\" alt=\"Delta models_(cal(L)) alpha\" style=\"width:3.240em;height:1.230em\" loading=\"lazy\">."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "9.3ren arabera, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0293.svg\" alt=\"Gamma models alpha\" style=\"width:2.834em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0291.svg\" alt=\"Gamma tack alpha\" style=\"width:3.026em;height:1.001em\" loading=\"lazy\"> baliokideak dira. II.2.8ko dedukzioaren finitudeak dio azken hori gertatzen dela baldin eta soilik baldin badago <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0360.svg\" alt=\"Delta subset.eq Gamma\" style=\"width:3.443em;height:1.001em\" loading=\"lazy\"> finitu bat, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f0361.svg\" alt=\"Delta tack alpha\" style=\"width:3.267em;height:1.001em\" loading=\"lazy\"> duena. 9.3 berriz aplikatuta, <img class=\"formula\" src=\"media/formulak/00aa_02logika/f1515.svg\" alt=\"Delta models alpha\" style=\"width:3.075em;height:1.001em\" loading=\"lazy\">. Alderantzizko noranzkoa ondorio semantikoaren monotoniatik ere berehala dator."
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
     "proiektua": "_historico/espazio-ontzia/01_logica_conjuntos/sets_relations_mappings",
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
     "proiektua": "_historico/espazio-ontzia/01_logica_conjuntos/nociones_basicas",
     "orrialdeak": "90",
     "jatorria": "es"
    }
   ]
  }
 ]
};
