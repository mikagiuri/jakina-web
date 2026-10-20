/* JAKINA · kapitulua «B10.2 - M27 Fisika estatistikoa» (07fe_01estatistikoa), desde edicion2/kapituluak/07fe_01estatistikoa/07fe_01estatistikoa.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["07fe_01estatistikoa"] = {
 "gakoa": "07fe_01estatistikoa",
 "titulua": "JAKINA - B10.2 - M27 Fisika estatistikoa",
 "azala": "B10.2 - M27 Fisika estatistikoa",
 "azpititulua": "IV. aroa - L2",
 "iturburua": "kapituluak/07fe_01estatistikoa/07fe_01estatistikoa.typ",
 "sarrera": [
  {
   "mota": "modulua",
   "kodea": "M27",
   "izenburua": "Fisika estatistikoa",
   "maila": "L2"
  },
  {
   "mota": "aurrebaldintzak",
   "elementuak": [
    "M22 — Termodinamika; M21 — Probabilitatea eta estatistika"
   ]
  },
  {
   "mota": "iturria",
   "proiektua": "_historico/espazio-ontzia/10_fisika_modernoa/fisika_modernoa/AAA_TEXES_fismotex/FismoTex SEGUNDO BLOQUE/FismoTex SEGUNDO BLOQUE.pdf",
   "xehetasuna": "Mikel Aguirre, erabiltzailearena %100; mikroegoerak/makroegoerak, postulatu funtsezkoa eta Einstein-en solidoa",
   "hizkuntza": "es"
  },
  {
   "mota": "iturria",
   "proiektua": "_historico/espazio-ontzia/10_fisika_modernoa/fismoderna_analizaryextraer/cuaderno fismo/",
   "xehetasuna": "Mikel Aguirre, erabiltzailearena %100; 2. Blokea: Mekanika Estatistikoa (Boltzmann-en banaketa, estatistika kuantikoak, elektroi askeen gasa)",
   "hizkuntza": "es"
  },
  {
   "mota": "iturria",
   "proiektua": "_historico/espazio-ontzia/10_fisika_modernoa/fismoderna_analizaryextraer/fismo_2bloque_teoria/",
   "xehetasuna": "Mikel Aguirre, erabiltzailearena %100; 2. Blokea osoa (11.-16. gaiak): gas ideal klasikoa (14. gaia) eta rotor zurruna/molekula diatomikoa (15. gaia) batez ere, gainerakoa dagoeneko landutakoaren errepikapena/hobekuntza",
   "hizkuntza": "es"
  },
  {
   "mota": "iturria",
   "proiektua": "_historico/espazio-ontzia/10_fisika_modernoa/fismoderna_analizaryextraer/fismo_2bloque_ejercicios/",
   "xehetasuna": "Fisika Modernoa, ZTF-UPV/EHU. Boletin ofiziala inprimatua, gaiaka (11.-16.), Emaitzak orriarekin eta ebazpen eskuzkribatuarekin",
   "hizkuntza": "eu"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Mekanika estatistikoaren oinarriak",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kapitulu honek erabiltzailearen beraren (Mikel Aguirre) apunteak erreproduzitu eta garatzen ditu — haietako batzuk LaTeXez tipografiatuta daude jada (<code>FismoTex SEGUNDO BLOQUE.pdf</code>) eta beste batzuk eskuz idatzita, haren fisika modernoko koadernoan (&quot;2. Blokea: Mekanika Estatistikoa&quot;). Ez da hirugarren baten liburua: horrexegatik, askatasun berarekin erreproduzitzen da. Einsteinen solidoaren deribazio orokorra azalpen propio estandar bat da, koadernoan agertzen den zenbakizko ariketa zehatzean (<math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>10</mn></mrow></math>, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mn>6</mn><mi>ε</mi></mrow></math>) oinarritua."
      }
     ]
    }
   ]
  },
  {
   "id": "a2",
   "maila": 1,
   "izenburua": "Mikroegoerak eta makroegoerak: txanponaren adibidea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema fisikoez aritu baino lehen, komeni da hiztegia finkatzea adibide konbinatorio huts batekin. Demagun txanpon bat dugula: alde bat gorria da eta bestea urdina. Lau aldiz jaurtitzen dugu. Zein dira konbinazio posible guztiak?"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mn>2</mn><mn>4</mn></msup><mo>=</mo><mn>16</mn></mrow></math> emaitza posible daude, bakoitza lau koloreren sekuentzia zehatz bat (adibidez, gorri-gorri-urdin-gorri). Emaitza horietako bakoitzari —sistemaren deskribapen oso eta xehea— <strong>mikroegoera</strong> deitzen diogu. Txanpona <math display=\"inline\"><mi>N</mi></math> aldiz jaurtitzen badugu, mikroegoera posibleen kopuru totala hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>W</mi><mo>=</mo><msup><mn>2</mn><mi>N</mi></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>N</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℕ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Lehen postulatua.</strong> Mikroegoera batean, saiakera guztiak independenteak dira eta txanponak ez du tranparik; beraz, mikroegoera guztiek gertatzeko probabilitate bera dute:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">emandako mikroegoera bat</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><msup><mn>2</mn><mi>N</mi></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Baina sekuentzia zehatza axola ez bazaigu, soilik <strong>zenbat</strong> aurpegi gorri eta zenbat urdin atera diren baizik, galdera aldatu egiten da. <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>4</mn></mrow></math> kasuan, emaitza bakoitzari zenbat mikroegoera dagozkion kontatuz:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "4 gorri eta 0 urdin: konbinazio bat.",
      "3 gorri eta urdin bat: 4 konbinazio.",
      "2 gorri eta 2 urdin: 6 konbinazio.",
      "gorri bat eta 3 urdin: 4 konbinazio.",
      "0 gorri eta 4 urdin: konbinazio bat."
     ]
    },
    {
     "mota": "testua",
     "html": "Multzokatutako emaitza horietako bakoitzari —mota bakoitzeko <strong>zenbat</strong> dauden soilik kontuan hartuta definitua, ez ordena— <strong>makroegoera</strong> deitzen diogu. Makroegoera batek, oro har, mikroegoera desberdin asko biltzen ditu."
    },
    {
     "mota": "testua",
     "html": "<strong>Bigarren postulatua.</strong> Mikroegoera gehien elkarturik dituen makroegoera da probableena. Makroegoera jakin bati —aurpegi gorri <math display=\"inline\"><mi>n</mi></math> eta urdin <math display=\"inline\"><mrow><mi>N</mi><mo>−</mo><mi>n</mi></mrow></math>, edozein ordenatan— zenbat mikroegoera dagozkion kontatzeko, konbinatoria erabiltzen dugu: zein <math display=\"inline\"><mi>n</mi></math> jaurtiketa izan ziren gorriak aukeratzeko moduen kopurua da, <math display=\"inline\"><mi>N</mi></math> jaurtiketen artean,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mi>N</mi><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>4</mn></mrow></math> kasuan, formula honek goiko zenbakiak zehatz-mehatz erreproduzitzen ditu: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>6</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>."
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Makroegoerarik probableena",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Ariketa.</strong> Froga ezazu, <math display=\"inline\"><mi>N</mi></math> bikoitia denean, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hazi egiten dela <math display=\"inline\"><mrow><mi>n</mi><mo>&lt;</mo><mfrac><mi>N</mi><mn>2</mn></mfrac></mrow></math> den bitartean eta txikitu egiten dela <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mfrac><mi>N</mi><mn>2</mn></mfrac></mrow></math> denean; eta, <math display=\"inline\"><mi>N</mi></math> bakoitia denean, maximoa <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mfrac><mrow><mi>N</mi><mo>±</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mrow></math> balioan gertatzen dela."
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> Kontsidera dezagun ondoz ondoko balioen arteko zatidura:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo>−</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mi>n</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Zatidura hori 1 baino handiagoa da —hau da, <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> hazten ari da— zehazki <math display=\"inline\"><mrow><mi>N</mi><mo>−</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo>&gt;</mo><mi>n</mi></mrow></math> denean, hots, <math display=\"inline\"><mrow><mi>n</mi><mo>&lt;</mo><mfrac><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mrow></math> denean. <math display=\"inline\"><mi>N</mi></math> bikoitia bada, hori eta <math display=\"inline\"><mrow><mi>n</mi><mo>≤</mo><mfrac><mi>N</mi><mn>2</mn></mfrac></mrow></math> baliokideak dira; <math display=\"inline\"><mi>N</mi></math> bakoitia bada, <math display=\"inline\"><mrow><mi>n</mi><mo>≤</mo><mfrac><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mrow></math>-rekin. Simetriagatik (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mi>n</mi></math> gorri aukeratzea eta <math display=\"inline\"><mrow><mi>N</mi><mo>−</mo><mi>n</mi></mrow></math> urdin aukeratzea gauza bera dira), bigarren erdiko portaera beherakorra lehenengoko gorakorraren isla da. Maximoa, beraz, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mfrac><mi>N</mi><mn>2</mn></mfrac></mrow></math> balioan lortzen da <math display=\"inline\"><mi>N</mi></math> bikoitia bada, eta erdiko bi balioetako edozeinetan, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mfrac><mrow><mi>N</mi><mo>±</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mrow></math>, <math display=\"inline\"><mi>N</mi></math> bakoitia bada (biek <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> bera ematen dute, simetria beragatik)."
    },
    {
     "mota": "testua",
     "html": "<strong>Zein zorrotza da maximo hori?</strong> <math display=\"inline\"><mi>N</mi></math> oso handia denean —Avogadroren zenbakiaren ordenakoa, edozein sistema fisiko errealetan bezala— froga daiteke (faktorialen gainean Stirlingen hurbilketa erabiliz) banaketak maximoaren inguruan duen zabalera erlatiboa <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msqrt><mi>N</mi></msqrt></mrow></math> bezala estutzen dela: <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><msup><mn>10</mn><mn>24</mn></msup></mrow></math> denean, sistema <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mfrac><mi>N</mi><mn>2</mn></mfrac></mrow></math> banaketatik era nabarmenean aldentzeko probabilitatea astronomikoki txikia da. Horixe da arrazoi sakona orekan dagoen sistema makroskopiko bat multiplizitate maximoko makroegoeratik inoiz ere, era hautemangarrian, ez aldentzeko: kontua ez da gainerako konfigurazioak ezinezkoak direla, baizik eta <strong>estatistikoki</strong> garrantzirik gabeak direla, oreka-konfigurazioak duen mikroegoera-kopuru erraldoiaren aldean."
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Mekanika estatistikoaren oinarrizko postulatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Txanponaren adibidea zuzenean orokortzen da edozein sistema fisiko isolatutara. Sistema fisiko batek —gas batek, solido batek, spin-multzo batek— <math display=\"inline\"><mi>U</mi></math> energia oso jakin baterako, energia horrekin bateragarri diren konfigurazio mikroskopikoen kopuru izugarria du (bere partikula guztien posizioak eta momentuak, edo okupatutako egoera kuantikoak). Horietako bakoitzari sistemaren mikroegoera deitzen diogu."
    },
    {
     "mota": "oharra",
     "titulua": "Oinarrizko postulatua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Orekan dagoen sistema isolatu batek, <math display=\"inline\"><mi>U</mi></math> energia osoa finkoa izanik, probabilitate bera du bere mikroegoera eskuragarrietako edozeinetan egoteko."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Lehen bezala, sistemaren konfigurazio makroskopiko desberdinek (aldagai behagarriek definituak, ez mikroegoera zehatzak) mikroegoera-kopuru oso desberdinak izango dituzte elkarturik, oro har. Makroegoera baten <strong>multiplizitatea</strong>, <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>, hari dagozkion mikroegoeren kopurua da. Oreka-makroegoera, lehengo argudio beragatik, multiplizitate maximokoa da: gainerako guztien gainetik erabat nagusitzen dena, sistemak partikula-kopuru itzela duenean."
    },
    {
     "mota": "testua",
     "html": "Ideia hau —oreka termodinamikoa, mikroskopikoki, makroegoerarik probableena <strong>dela</strong>— mekanikaren (mikroegoerak deskribatzen ditu) eta termodinamikaren (makroegoerak deskribatzen ditu) arteko zubia da. Entropiarekiko lotura zehatza, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi></mrow></math>, hurrengo kapituluan ezartzen da."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Zergatik <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mfrac><mn>1</mn><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac></mrow></math>? Bi azpisistema kontaktuan",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hurrengo kapituluak Boltzmannen banaketa sartzen du, eta harekin Lagrangeren biderkatzailea, <math display=\"inline\"><mi>β</mi></math>, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-rekin identifikatua &quot;termodinamikarekin konparatuz&quot;. Identifikazio hori zorrotz oinarri daiteke, inolako zalantzarik gabe, kontaktu termikoan dauden bi azpisistema desberdin kontuan hartuz."
    },
    {
     "mota": "irudia",
     "oina": "Bi azpisistema, <math display=\"inline\"><mi>N</mi></math> eta <math display=\"inline\"><mi>M</mi></math> partikularekin hurrenez hurren (eta\n  energia-maila desberdinekin, <math display=\"inline\"><msub><mi>ε</mi><mi>i</mi></msub></math> eta <math display=\"inline\"><msubsup><mi>ε</mi><mi>i</mi><mo>′</mo></msubsup></math>), kontaktu\n  termikoan, sistema bateratu isolatu baten barruan: energia batetik\n  bestera joan daiteke, baina partikulak ezin dira batetik bestera\n  pasa; bakoitzaren partikula-kopurua eta energia osoa finkoak\n  dira.",
     "src": "media/irudiak/46dd99d77640ece8.svg",
     "zabalera": 224
    },
    {
     "mota": "testua",
     "html": "Izan bedi <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> <math display=\"inline\"><mi>N</mi></math> azpisistemaren mailen okupazioa, eta <math display=\"inline\"><msub><mi>m</mi><mi>i</mi></msub></math> <math display=\"inline\"><mi>M</mi></math> azpisistemaren mailena. Sistema bateratuaren multiplizitatea biderkadura da, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mn>1</mn></msub><msub><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msub><mo>=</mo><mi>N</mi><mi>!</mi><mi>/</mi><msub><mo>∏</mo><mi>i</mi></msub><msub><mi>n</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><mo>×</mo><mi>M</mi><mi>!</mi><mi>/</mi><msub><mo>∏</mo><mi>i</mi></msub><msub><mi>m</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub></mrow></math>, eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi></mrow></math> maximizatu behar da <strong>hiru</strong> baldintzaren pean: <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mi>N</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>m</mi><mi>i</mi></msub><mo>=</mo><mi>M</mi></mrow></math> (azpisistema bakoitzaren partikula-kopurua bereiz kontserbatzen da), eta energia <strong>osoa</strong>, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><msub><mi>ε</mi><mi>i</mi></msub><mo>+</mo><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>m</mi><mi>i</mi></msub><msubsup><mi>ε</mi><mi>i</mi><mo>′</mo></msubsup></mrow></math>, finkoa (baina ez azpisistema bakoitzaren energia bereiz: energia truka dezakete). Hiru biderkatzaile sartuz, <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> (bana, <strong>partikula-baldintza bakoitzeko</strong>) eta bakar bat, <math display=\"inline\"><mi>β</mi></math>, energia-baldintza bateraturako, eta betiko Lagrange + Stirling prozedura <math display=\"inline\"><msub><mi>n</mi><mi>j</mi></msub></math> eta <math display=\"inline\"><msub><mi>m</mi><mi>j</mi></msub></math> bakoitzaren gainean bereiz errepikatuz, honako hau lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>n</mi><mi>j</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>α</mi><mn>1</mn></msub></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mi>j</mi></msub></mrow></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>m</mi><mi>j</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>α</mi><mn>2</mn></msub></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msubsup><mi>ε</mi><mi>j</mi><mo>′</mo></msubsup></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Funtsezko puntua: <math display=\"inline\"><mi>β</mi></math> bera agertzen da bi formuletan.</strong> Hau ez da kasualitatea, ezta komenientziazko aukera bat ere: sistema bateratuaren energia <strong>totalaren</strong> gainean baldintza bakar bat ezarri izanaren ondorio zuzena da (azpisistema bakoitzaren energiarako baldintza bereizi bana ezarri beharrean): matematikoki, Lagrangeren biderkatzaile bakar bat egon daiteke murrizketa bakar baterako. Fisikoki, <math display=\"inline\"><mi>β</mi></math> oreka termikoan dauden sistema-bikoteek <strong>partekatzen</strong> duten propietatea da orduan — horixe da, hain zuzen ere, termodinamikako tenperaturaren definizio operatiboa (bi gorputzek oreka termikoa lortzen dutenean berdintzen den magnitudea). Horrek <math display=\"inline\"><mi>β</mi></math> bien tenperatura komunaren funtzio gisa identifikatzen du, <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, nahiz eta oraindik ez duen haren forma zehatza finkatzen."
    },
    {
     "mota": "testua",
     "html": "<strong>Zergatik <math display=\"inline\"><mrow><mi>S</mi><mo>∝</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi></mrow></math> (eta ez beste funtzio bat).</strong> Entropiak magnitude <strong>estentsiboa</strong> izan behar du: sistema bateratuarena bere zatien entropien batura izan behar da, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>. Baina sistema bateratuaren multiplizitatea multiplizitateen <strong>biderkadura</strong> da, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mn>1</mn></msub><msub><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msub></mrow></math> (<math display=\"inline\"><mi>N</mi></math>-ren mikroegoera bakoitza <math display=\"inline\"><mi>M</mi></math>-ren edozein mikroegoerarekin konbina daiteke). <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>-ren menpeko kantitate bat, <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> biderkakorra izanik, gehigarria izateko modu bakarra <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi></mrow></math> da: <math display=\"inline\"><mrow><mi>S</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"normal\">Ω</mi><mn>1</mn></msub><msub><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>S</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"normal\">Ω</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>S</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> betetzen da <math display=\"inline\"><mrow><mi>S</mi><mo>∝</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi></mrow></math> bada (logaritmoaren ekuazio funtzionala da). Identifikazio termodinamikoarekin batera, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>S</mi><mi>/</mi><mi>∂</mi><mi>U</mi><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>N</mi><mo>,</mo><mi>V</mi></mrow></msub></mrow></math>, horrek proportzionaltasun-konstantea <math display=\"inline\"><msub><mi>k</mi><mi>B</mi></msub></math> dela finkatzen du eta zirkulua ixten du: <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi></mrow></math>, <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, elkarren artean eta termodinamika klasikoarekin koherenteak."
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Einsteinen solidoa: energia kuantizatua duen adibide bat",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kontsidera dezagun solidoaren eredu sinple bat: <math display=\"inline\"><mi>N</mi></math> atomo, bakoitza osziladore harmoniko kuantiko independente gisa bibratzen ari dela, denak maiztasun berekoak, <math display=\"inline\"><mi>ν</mi></math>, energia-mailak <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mi>h</mi><mi>ν</mi></mrow></math> izanik (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>, energia zero-puntutik neurtuta). Solidoak <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>q</mi><mi>h</mi><mi>ν</mi></mrow></math> energia osoa badu, <math display=\"inline\"><mi>q</mi></math> zenbaki osoa izanik, problema hau da: <math display=\"inline\"><mi>q</mi></math> energia-&quot;kuantu&quot; bereizezin banatzea <math display=\"inline\"><mi>N</mi></math> osziladoreen artean (bereizgarriak, bakoitzak sareko posizio finko bat betetzen duelako)."
    },
    {
     "mota": "testua",
     "html": "Problema konbinatorio klasikoa da —&quot;bolak kutxetan&quot;—: zenbat modutan bana daitezke <math display=\"inline\"><mi>q</mi></math> objektu bereizezin <math display=\"inline\"><mi>N</mi></math> kutxa bereizgarriren artean (osziladore bakoitzak edozein kuantu-kopuru jaso dezake, 0-tik <math display=\"inline\"><mi>q</mi></math>-ra)? Erantzuna hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mrow><mi>N</mi><mo>+</mo><mi>q</mi><mo>−</mo><mn>1</mn></mrow><mi>q</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mi>q</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow><mrow><mi>q</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(ohiko argumentua —&quot;izarrak eta barrak&quot;— honako hau da: <math display=\"inline\"><mi>q</mi></math> kuantuak eta kutxen arteko <math display=\"inline\"><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></math> bereizleak ilara batean lerrokatzea, eta zenbat modutan tarteka daitezkeen kontatzea; <math display=\"inline\"><mrow><mi>N</mi><mo>+</mo><mi>q</mi><mo>−</mo><mn>1</mn></mrow></math> posizio daude guztira, eta horietatik aukeratu behar da zein <math display=\"inline\"><mi>q</mi></math> diren kuantuak)."
    },
    {
     "mota": "testua",
     "html": "<strong>Zenbakizko adibidea.</strong> <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>10</mn></mrow></math> osziladorerentzat, energia osoa <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mn>6</mn><mi>h</mi><mi>ν</mi></mrow></math> izanik (hau da, <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mn>6</mn></mrow></math> kuantu), multiplizitate totala hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>10</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mn>15</mn><mn>6</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>15</mn><mi>!</mi></mrow><mrow><mn>6</mn><mi>!</mi><mspace width=\"0.167em\"></mspace><mn>9</mn><mi>!</mi></mrow></mfrac><mo>=</mo><mn>5005</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "5005 mikroegoera horietako bakoitza 6 kuantuak 10 osziladoreen artean banatzeko modu desberdin bati dagokio (adibidez: osziladore bat 6 kuantuekin eta beste 9ak geldi; edo sei osziladore desberdin kuantu banarekin eta beste lauak geldi; edo tarteko edozein banaketa) — eta, oinarrizko postulatuaren arabera, 5005ak berdin probableak dira."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 1,
   "izenburua": "Boltzmannen banaketa",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kapitulu honek erabiltzaileak (Mikel Aguirre) bere fisika modernoko koadernoan idatzitako oharrak erreproduzitu eta garatzen ditu (&quot;2. blokea: Mekanika Estatistikoa&quot;). Ez da hirugarren batzuen liburua — gainerako MASTERFISMOtex-en askatasun berarekin erreproduzitzen da. Deribazio orokorra era estandarrean aurkezten da (Lagrangeren biderkatzaileak aniztasunaren gainean), koadernoko garapenean oinarrituta."
      }
     ]
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Oreka-banaketaren deribazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Har ditzagun <math display=\"inline\"><mi>N</mi></math> partikula berdin, bereizgarri (adibidez, sare bateko posizioagatik) eta elkarren arteko elkarrekintzarik gabeak; horietako bakoitzak <math display=\"inline\"><msub><mi>ε</mi><mi>i</mi></msub></math> energia-mailen multzo bateko edozein maila okupa dezake. Makroegoera bat <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> okupazio-zenbakiek definitzen dute (<math display=\"inline\"><msub><mi>ε</mi><mi>i</mi></msub></math> mailan zenbat partikula dauden), sistema finkatzen duten bi baldintzen mende:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mi>N</mi><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (número total de partículas) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <math display=\"block\"><mrow><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>n</mi><mi>i</mi></msub><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mi>U</mi><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (energía total) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Makroegoeraren aniztasuna <math display=\"inline\"><mi>N</mi></math> partikula bereizgarriak <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> okupazio-taldeetan banatzeko modu-kopurua da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><munder><mo>∏</mo><mi>i</mi></munder><msub><mi>n</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oreka-makroegoera bilatzen dugu: aurreko bi baldintzen mende <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> (edo, baliokidea dena, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi></mrow></math>, erabiltzeko erosoagoa) maximizatzen duena. Bi baldintzetarako <math display=\"inline\"><mi>α</mi></math> eta <math display=\"inline\"><mi>β</mi></math> Lagrangeren biderkatzaileak erabiliz, eta Stirlingen hurbilketa (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>!</mi><mo>≈</mo><mi>n</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>n</mi><mo>−</mo><mi>n</mi></mrow></math>) <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi></mrow></math> delakoa <math display=\"inline\"><mi>N</mi></math> handiarekin tratatzeko:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>N</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mo>−</mo><mi>N</mi><mo>−</mo><munder><mo>∑</mo><mi>i</mi></munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mi>i</mi></msub><mi mathvariant=\"normal\">ln</mi><msub><mi>n</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mo>−</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><mo>−</mo><mi>N</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><msub><mi>ε</mi><mi>i</mi></msub><mo>−</mo><mi>U</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> maximizatzen dugu <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> bakoitzarekiko:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"script\">ℒ</mi></mrow><mrow><mi>∂</mi><msub><mi>n</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>n</mi><mi>i</mi></msub><mo>−</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo>−</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mi>−</mi><mi>α</mi><mo>−</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi></mrow></msup></math> konstantea <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mi>N</mi></mrow></math> baldintzarekin finkatzen da. <strong>Partizio-funtzioa</strong> definituz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi></mrow></msup><mo>=</mo><mi>N</mi><mi>/</mi><mi>z</mi></mrow></math> lortzen da, eta emaitza oreka-banaketa da (<strong>Boltzmannen banaketa</strong>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mfrac><mi>N</mi><mi>z</mi></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mi>β</mi></math>-ren identifikazioa.</strong> <math display=\"inline\"><mi>β</mi></math> biderkatzailea <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dela ateratzen da: egiazta daiteke (tenperaturaren definizio termodinamikoa, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>T</mi><mo>=</mo><mi>∂</mi><mi>S</mi><mi>/</mi><mi>∂</mi><mi>U</mi></mrow></math>, jarraian ematen den entropiaren adierazpen estatistikoarekin alderatuz) identifikazio horrekin bakarrik erreproduzitzen dutela mekanika estatistikoaren formulek termodinamika arrunta."
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Magnitude termodinamikoak <math display=\"inline\"><mi>z</mi></math>-tik abiatuta",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-rekin, sistemaren magnitude termodinamiko guztiak <math display=\"inline\"><mi>z</mi></math> partizio-funtziotik lortzen dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>U</mi><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>n</mi><mi>i</mi></msub><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mi>/</mi><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>U</mi><mi>/</mi><mi>T</mi><mo>+</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(azken hau oreka-banaketa <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi></mrow></math>-n ordezkatuz eta Stirling erabiliz lortzen da; konstante batukorra hitzarmenaren araberakoa da, eta kasu askotan —<math display=\"inline\"><mi>z</mi></math>-ren birdefinizio batean xurga daitekeenean— <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo>+</mo><mi>U</mi><mi>/</mi><mi>T</mi></mrow></math> idazten da, besterik gabe). Eta Helmholtzen energia askea:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>U</mi><mo>−</mo><mi>T</mi><mi>S</mi><mo>=</mo><mi>−</mi><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hiru formula hauek dira mekanika estatistiko klasiko osoaren tresna-kutxa: aski da sistema jakin baterako <math display=\"inline\"><mi>z</mi></math> kalkulatzea —batura bat (edo integral bat, kasu jarraituan) haren energia-maila eskuragarrien gainean— <math display=\"inline\"><mi>U</mi></math>, <math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><mi>F</mi></math> lortzeko, eta hortik beste edozein magnitude termodinamiko."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Adibidea: bi mailako sistema",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Har ditzagun bi energia-maila besterik okupatu ezin duten <math display=\"inline\"><mi>N</mi></math> partikula, <math display=\"inline\"><msub><mi>ε</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>ε</mi><mn>2</mn></msub></math> mailak, <math display=\"inline\"><msub><mi>n</mi><mn>1</mn></msub></math> partikula 1. mailan eta <math display=\"inline\"><mrow><mi>N</mi><mo>−</mo><msub><mi>n</mi><mn>1</mn></msub></mrow></math> 2. mailan daudela."
    },
    {
     "mota": "testua",
     "html": "<strong>Entropiaren egiaztapen gurutzatua.</strong> Partikula bat 1. mailatik 2. mailara pasatzean (1. mailan <math display=\"inline\"><msub><mi>n</mi><mn>1</mn></msub></math> partikula izatetik <math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><mn>1</mn></mrow></math> izatera pasatuz) gertatzen den entropia-aldaketa bi bide independentetatik kalkula dezakegu, eta bat datozela egiaztatu."
    },
    {
     "mota": "testua",
     "html": "<strong>Bide termodinamikoa</strong>, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo>+</mo><mi>U</mi><mi>/</mi><mi>T</mi></mrow></math> erabiliz (<math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>=</mo><msub><mi>n</mi><mn>1</mn></msub><msub><mi>ε</mi><mn>1</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><msub><mi>n</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ε</mi><mn>2</mn></msub></mrow></math> aldaketaren aurretik, <math display=\"inline\"><mrow><msub><mi>U</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><msub><mi>n</mi><mn>1</mn></msub><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ε</mi><mn>2</mn></msub></mrow></math> ondoren, eta <math display=\"inline\"><mi>z</mi></math> bera bi kasuetan, sistema ez baita aldatu, okupazioa baino):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><msub><mi>S</mi><mn>2</mn></msub><mo>−</mo><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>U</mi><mn>2</mn></msub><mo>−</mo><msub><mi>U</mi><mn>1</mn></msub></mrow><mi>T</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ε</mi><mn>2</mn></msub></mrow><mi>T</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Bide estatistikoa</strong>, makroegoera bakoitzaren aniztasuna zuzenean zenbatuz, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>N</mi><mi>!</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mi>!</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><msub><mi>n</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><msub><mi>n</mi><mn>1</mn></msub><mi>!</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><msub><mi>n</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><msub><mi>n</mi><mn>1</mn></msub><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><mn>1</mn></mrow><mrow><mi>N</mi><mo>−</mo><msub><mi>n</mi><mn>1</mn></msub></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi></mrow></math>-ren bi adierazpenak lehen begiratuan desberdinak badirudite ere, kantitate bera dira, bi eratara kalkulatua: bata, dagoeneko ordezkatutako oreka-banaketatik (<math display=\"inline\"><msub><mi>n</mi><mn>1</mn></msub></math> delakoa <math display=\"inline\"><msub><mi>ε</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>ε</mi><mn>2</mn></msub></math> eta <math display=\"inline\"><mi>T</mi></math>-rekin lotzen duena); bestea, zuzenean konbinatoriatik — mekanika estatistikoak eta termodinamikak sistema bera deskribatzen dutela bermatzen duen koherentzia da."
    },
    {
     "mota": "testua",
     "html": "<strong>Populazio erlatiboak.</strong> Boltzmannen banaketatik, bi mailen arteko populazio-arrazoia, besterik gabe, hauxe da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>n</mi><mn>1</mn></msub><msub><mi>n</mi><mn>2</mn></msub></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ε</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Zenbakizko adibidea.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math> eV-eko tartea duten bi mailatarako, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>300</mn></mrow></math> K-ean:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>n</mi><mn>1</mn></msub><msub><mi>n</mi><mn>2</mn></msub></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>ε</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>8.617</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV/K </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mn>300</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>≈</mo><msup><mi>e</mi><mn>38.7</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "zenbaki izugarri handia: giro-tenperaturan, ia partikula guztiak energia txikieneko mailan daude, tartea elektronvoltaren ordenakoa denean (tenperatura horretan <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≈</mo><mn>0.026</mn></mrow></math> eV baino askoz handiagoa)."
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Bero espezifikoa: Schottkyren anomalia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Har dezagun orain bi mailako sistema bera, baina energia-jatorriaren inguruan simetrikoki zentratua: <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><mi>+</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math> (<math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> izanik mailen arteko tartearen erdia). Partikula baten partizio-funtzioa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mn>1</mn></msub></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mn>2</mn></msub></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi mathvariant=\"normal\">Δ</mi><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Partikulako batez besteko energia:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><munder><mo>∑</mo><mi>j</mi></munder><msub><mi>ε</mi><mi>j</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mi>j</mi></msub></mrow></msup></mrow><mrow><munder><mo>∑</mo><mi>j</mi></munder><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mi>j</mi></msub></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"normal\">ln</mi><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>β</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mfrac><mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta <math display=\"inline\"><mi>N</mi></math> partikulako sistemaren barne-energia:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi mathvariant=\"normal\">Δ</mi><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> barne-energia <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren funtzioan (edo, baliokidea dena, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>T</mi></mrow></math>-ren funtzioan): 0-rantz jotzen du tenperatura altuetan (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>≪</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>, populazioak ia berdinak) eta <math display=\"inline\"><mrow><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>-rantz tenperatura baxuetan (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>≫</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>, partikula guztiak oinarrizko egoeran).",
     "src": "media/irudiak/3f47a998a70fde42.svg",
     "zabalera": 352
    },
    {
     "mota": "testua",
     "html": "Populazio erlatiboek modu koherentean jokatzen dute limite honekin:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mtext mathvariant=\"normal\">Prob</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mtext mathvariant=\"normal\">Prob</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mn>2</mn></msub></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mn>1</mn></msub></mrow></msup></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi mathvariant=\"normal\">Δ</mi><mo>≫</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">T bajas</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mo>→</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi mathvariant=\"normal\">Δ</mi><mo>≪</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">T altas</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mo>→</mo><mn>1</mn></mtd></mtr></mtable></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Zenbakizko adibidea.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mn>1</mn></mrow></math> eV eta <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>1000</mn></mrow></math> K hartuta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi mathvariant=\"normal\">Δ</mi><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0.025</mn><mtext mathvariant=\"normal\">eV</mtext><mi>/</mi><mn>300</mn><mi>K</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mn>1000</mn><mi>K</mi></mrow></mfrac><mo>=</mo><mfrac><mn>0.3</mn><mn>0.025</mn></mfrac><mo>=</mo><mn>12</mn><mo>≫</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "— argi eta garbi tenperatura baxuen erregimenean gaude (problema honen zentzuan: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>≫</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>, ez <math display=\"inline\"><mi>T</mi></math> hitzez hitz baxua)."
    },
    {
     "mota": "testua",
     "html": "<strong>Bero espezifikoa.</strong> <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tenperaturarekiko deribatuz, <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mi>/</mi><msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi></mrow></math> erabiliz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mrow><mi>d</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><msup><mi mathvariant=\"normal\">Δ</mi><mn>2</mn></msup></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mn>1</mn><mrow><msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Tenperaturaren bi limiteetan, <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>0</mn></mrow></math> dugu, arrazoi desberdinengatik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi mathvariant=\"normal\">Δ</mi><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo>≪</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">T altas</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mspace width=\"1.0em\"></mspace><msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><mfrac><mrow><mi>N</mi><msup><mi mathvariant=\"normal\">Δ</mi><mn>2</mn></msup></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup></mrow></mfrac><mo>→</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi mathvariant=\"normal\">Δ</mi><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo>≫</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">T bajas</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mspace width=\"1.0em\"></mspace><msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><mfrac><mrow><mi>N</mi><msup><mi mathvariant=\"normal\">Δ</mi><mn>2</mn></msup></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup></mrow></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>→</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Schottkyren <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bero espezifikoa: nulua bi limiteetan (T baxua: kuantizazioak &quot;izoztua&quot;, hondamendi ultramorearekin eta Einsteinen solidoarekin ikusi genuen bezalaxe; T altua: sistemak, energia osoa <math display=\"inline\"><mrow><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>N</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math> artean bornatua duenez, ezin du energia mugagabe xurgatzen jarraitu), maximo nabarmen bat duela <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>∼</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math> eskalan, eta tenperatura altuetan <math display=\"inline\"><msup><mi>T</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup></math> gisa jaisten den isatsa.",
     "src": "media/irudiak/67baa5abd63bb3bf.svg",
     "zabalera": 288
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren forma hau —bi muturretan nulua, tarteko maximo batekin— energia osoa bornatua duen edozein sistemaren sinadura bereizgarria da (gas ideal klasikoa ez bezala, adibidez, zeinaren bero espezifikoa ez baita <math display=\"inline\"><mi>T</mi></math>-ren menpekoa): energia-espektro diskretu eta bornatu bat dagoen bakoitzean agertzen da, eta <strong>Schottkyren anomalia</strong> gisa ezagutzen da."
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Adibidea: paramagnetismoa eta Curieren legea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Har ditzagun <math display=\"inline\"><mi>N</mi></math> atomo, <math display=\"inline\"><mrow><mi>j</mi><mo>=</mo><mi>ħ</mi></mrow></math> momentu angeluarra dutenak (<math display=\"inline\"><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow></math> zenbaki kuantikoa), kanpoko <math display=\"inline\"><mi>B</mi></math> eremu magnetiko batean. Zeeman efektuak eragindako mailen banatzearen ondorioz, atomo bakoitzak hiru energia-maila posible ditu, bere <math display=\"inline\"><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>−</mi><mi>ħ</mi><mo>,</mo><mn>0</mn><mo>,</mo><mi>ħ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> proiekzioaren arabera:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ε</mi><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>=</mo><mi>ħ</mi></mrow></msub><mo>=</mo><msub><mi>g</mi><mi>j</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mo>−</mo><mi mathvariant=\"normal\">Δ</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>ε</mi><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>ε</mi><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>=</mo><mi>−</mi><mi>ħ</mi></mrow></msub><mo>=</mo><mi>−</mi><msub><mi>g</mi><mi>j</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mo>−</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><msub><mi>μ</mi><mi>B</mi></msub></math> Bohrren magnetoia den, <math display=\"inline\"><msub><mi>g</mi><mi>j</mi></msub></math> faktore giromagnetikoa, eta <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> hiru mailen desplazamendu komun bat (ondorengo ezertan eraginik ez duena, beti energia-diferentzietan agertzen baita). Atomo bakar baten partizio-funtzioa hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>1</mn></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>2</mn></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>3</mn></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>g</mi><mi>j</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Magnetizazioa eta suszeptibilitatea.</strong> Magnetizazioa energia asketik lortzen da, <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mi>−</mi><mi>∂</mi><mi>F</mi><mi>/</mi><mi>∂</mi><mi>B</mi></mrow></math>, eta suszeptibilitate magnetikoa <math display=\"inline\"><mrow><mi>χ</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>M</mi><mi>/</mi><mi>B</mi></mrow></math> adierazpenetik. <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi></mrow></math> delakoa <math display=\"inline\"><mi>B</mi></math>-rekiko deribatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>M</mi><mo>=</mo><mn>2</mn><mi>N</mi><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>j</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>g</mi><mi>j</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mi mathvariant=\"normal\">cosh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>g</mi><mi>j</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Curieren legea.</strong> Tenperatura altuko edo eremu ahuleko limitean, <math display=\"inline\"><mrow><msub><mi>g</mi><mi>j</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mo>≪</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> (praktikan, alde handiz, erregimen esanguratsuena dena: giro-tenperaturan eta laborategiko eremuekin, Zeeman energia <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> baino askoz ere txikiagoa da), <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>≈</mo><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>≈</mo><mn>1</mn></mrow></math> hurbilketak egin ditzakegu, eta suszeptibilitatea honetara sinplifikatzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>χ</mi><mo>∝</mo><mfrac><mn>1</mn><mi>T</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Curieren lege</strong> ezaguna: material baten suszeptibilitate paramagnetikoa tenperaturarekiko alderantziz proportzionala da. Fisikoki: tenperatura igotzean, asaldura termikoak gero eta gehiago nahasten ditu momentu magnetiko indibidualak eremu aplikatuaren aurrean, eta materiala gutxiago magnetizatzen da emandako eremu baterako."
    },
    {
     "mota": "irudia",
     "oina": "Curieren legea, <math display=\"inline\"><mrow><mi>χ</mi><mo>∝</mo><mn>1</mn><mi>/</mi><mi>T</mi></mrow></math>: suszeptibilitate paramagnetikoa tenperaturarekin gutxitzen da, asaldura termikoak momentu magnetikoak eremu aplikatuaren aurrean nahasten dituelako.",
     "src": "media/irudiak/d8ba9006771a292b.svg",
     "zabalera": 288
    }
   ]
  },
  {
   "id": "a13",
   "maila": 1,
   "izenburua": "Estatistika kuantikoak",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kapitulu honek erabiltzaileak (Mikel Aguirre) bere fisika modernoko koadernoan (&quot;2. blokea: Mekanika Estatistikoa&quot;) egindako oharrak erreproduzitu eta garatzen ditu, euskarara itzulita. Ez da hirugarren batzuen liburua — MASTERFISMOtex-en gainerakoaren askatasun berarekin erreproduzitzen da."
      }
     ]
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Partikula bereizgarriak eta bereiztezinak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko kapituluko Boltzmannen banaketak partikula <strong>bereizgarriak</strong> suposatzen ditu: bakoitza identifikagarria da (sare bateko bere posizioagatik, adibidez), eta, beraz, bi partikula bi maila desberdinen artean trukatzeak mikroegoera berri bat sortzen du. Zentzuzkoa da hori solido batean finkatutako atomoentzat, baina ez partikula berdin eta askeentzat —elektroiak metal batean, gas bateko atomoak—, non bi partikula elkarren artean trukatzeak <strong>ez</strong> baitu egoera fisikoki desberdinik sortzen: ez dago modurik &quot;A elektroia 1 egoeran eta B elektroia 2 egoeran&quot; eta &quot;B elektroia 1 egoeran eta A elektroia 2 egoeran&quot; bereizteko, elektroiak hitzez hitz berdinak direlako."
    },
    {
     "mota": "testua",
     "html": "Mekanika kuantikoak, gainera, funtsezko bereizketa bat gehitzen du bi partikula-familiaren artean, bi partikula trukatzean haien uhin-funtzio bateratuak duen portaeraren arabera:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fermioiak</strong> (espin erdiosoa: elektroiak, protoiak, neutroiak, ³He...): uhin-funtzioa antisimetrikoa da trukearekiko, eta horrek —<strong>Pauliren esklusio-printzipioa</strong>— bi fermioi berdinek egoera kuantiko bera inoiz ez okupatzea dakar. Energia-maila bakoitzak, bere <math display=\"inline\"><msub><mi>g</mi><mi>i</mi></msub></math> endekapenarekin, gehienez <math display=\"inline\"><msub><mi>g</mi><mi>i</mi></msub></math> fermioi onartzen ditu (bat egoera bakoitzeko).",
      "<strong>Bosoiak</strong> (espin osoa: fotoiak, ⁴He...): uhin-funtzioa simetrikoa da, eta ez dago inolako murrizketarik zenbat bosoik parteka dezaketen egoera kuantiko bera."
     ]
    },
    {
     "mota": "testua",
     "html": "Bereizketa horrek makroegoera bat kontatzeko konbinatoria aldatzen du, eta, beraz, aniztasuna maximizatzean lortzen den oreka-banaketa ere aldatzen du."
    },
    {
     "mota": "problema",
     "izena": "2012ko maiatza, IEM/Fisika Modernoa, 3. arazoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "a) Azaldu Maxwell-Boltzmannen, Bose-Einsteinen eta Fermi-Diracen estatistikak oinarritzen dituzten hipotesien arteko funtsezko desberdintasunak."
      },
      {
       "mota": "testua",
       "html": "b) Deskribatu aurreko estatistika bakoitza aplikagarri litzaiekeen hiru sistema mota zehatz. Sistema horietan, zein baldintzatan aplikatuko litzateke M-B-ren estatistika?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <strong>Maxwell-Boltzmann</strong>: partikula bereizgarriak (edo, baliokideki, partikula bereiztezinak erregimen diluituan, non egoera bakoitzaren batez besteko okupazioa txikia baita — aurreko kapituluan jada eztabaidatutako &quot;muga-kasua&quot;). <strong>Bose-Einstein</strong>: partikula bereiztezinak, egoera beraren okupazioari buruzko murrizketarik gabe (bosoiak). <strong>Fermi-Dirac</strong>: partikula bereiztezinak, Pauliren esklusio-printzipioaren mende (fermioiak), gehienez bat egoera bakoitzeko."
      },
      {
       "mota": "testua",
       "html": "b) Gas ideal bat giro-tenperaturan eta ohiko presioan (M-B, dentsitate txikia egoera eskuragarrien kopuruaren aldean); <math display=\"inline\"><msup><mrow></mrow><mn>4</mn></msup></math>He atomoak (0 espina, bosoiak) tenperatura oso baxuan, non Bose-Einsteinen kondentsazioa agertzen baita (5. kapitulua); metal baten kondukzio-elektroiak (F-D, beherago kapitulu honetan bertan). Kasu bosonikoa nahiz fermionikoa M-B-ren estatistikara murrizten dira tenperatura handiko edo dentsitate txikiko mugan — hau da, egoera bakoitzaren batez besteko okupazioa 1 baino askoz txikiagoa denean, beherago &quot;Muga-kasua: Maxwell-Boltzmann&quot; koadroan ikusiko den bezala."
      }
     ]
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Fermi-Diracen banaketaren deribazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Har dezagun energia-mailen multzo bat, <math display=\"inline\"><msub><mi>ε</mi><mi>i</mi></msub></math>, bakoitza bere endekapenarekin, <math display=\"inline\"><msub><mi>g</mi><mi>i</mi></msub></math> (energia hori duten egoera kuantiko desberdinen kopurua), eta haiek okupatzen dituzten <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> fermioirekin (<math display=\"inline\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>≤</mo><msub><mi>g</mi><mi>i</mi></msub></mrow></math>, esklusio-printzipioagatik). <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> fermioi bereiztezin dagozkien <math display=\"inline\"><msub><mi>g</mi><mi>i</mi></msub></math> egoera erabilgarrietan kokatzeko moduen kopurua, <math display=\"inline\"><mi>i</mi></math> maila bakoitzean (egoera bakoitza, hutsik zein beteta), koefiziente binomial bat da, eta makroegoeraren aniztasun osoa maila guztien gaineko biderkadura da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mtext mathvariant=\"normal\">FD </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><munder><mo>∏</mo><mi>i</mi></munder><mfrac><msub><mi>g</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><mrow><msub><mi>n</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aurreko kapituluan bezala, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi mathvariant=\"normal\">Ω</mi><mtext mathvariant=\"normal\">FD</mtext></msub></mrow></math> maximizatzen dugu <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mi>N</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mi>U</mi></mrow></math> baldintzen mende, <math display=\"inline\"><mi>α</mi></math>, <math display=\"inline\"><mi>β</mi></math> Lagrangeren biderkatzaileekin. Stirling erabiliz hiru faktorialetako bakoitzean:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mtext mathvariant=\"normal\">FD </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><munder><mo>∑</mo><mi>i</mi></munder><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>g</mi><mi>i</mi></msub><mi mathvariant=\"normal\">ln</mi><msub><mi>g</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub><mi mathvariant=\"normal\">ln</mi><msub><mi>n</mi><mi>i</mi></msub><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(Stirlingen gai linealak, <math display=\"inline\"><mrow><mi>−</mi><msub><mi>g</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>i</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, zehatz-mehatz ezeztatzen dira). Lagrangearra, <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mtext mathvariant=\"normal\">FD </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><mo>−</mo><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><msub><mi>ε</mi><mi>i</mi></msub><mo>−</mo><mi>U</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math>-rekiko deribatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"script\">ℒ</mi></mrow><mrow><mi>∂</mi><msub><mi>n</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>n</mi><mi>i</mi></msub><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>α</mi><mo>−</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><mrow><msub><mi>g</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub></mrow><msub><mi>n</mi><mi>i</mi></msub></mfrac><mo>=</mo><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub><mo>⇒</mo><mfrac><msub><mi>g</mi><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub></mfrac><mo>−</mo><mn>1</mn><mo>=</mo><msup><mi>e</mi><mrow><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta <math display=\"inline\"><mi>i</mi></math> mailaren okupazio erlatiboa askatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>n</mi><mi>i</mi></msub><msub><mi>g</mi><mi>i</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><msup><mi>e</mi><mrow><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau da <strong>Fermi-Diracen banaketa</strong>. <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> hartuta (kasu klasikoko identifikazio bera) eta <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mi>−</mi><msub><mi>ε</mi><mi>F</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> idatzita (berehala ikusiko da zergatik den naturala aukera hori), eskuarki honela idazten da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>n</mi><mi>i</mi></msub><msub><mi>g</mi><mi>i</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><msup><mi>e</mi><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mi>i</mi></msub><mo>−</mo><msub><mi>ε</mi><mi>F</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Bose-Einsteinen banaketaren deribazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bosoientzat ez dago mugarik zenbatek parteka dezaketen egoera bera; beraz, zenbaketa konbinatorioa desberdina da: <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> bosoi bereiztezin <math display=\"inline\"><msub><mi>g</mi><mi>i</mi></msub></math> egoeratan banatzeko moduen kopurua da (okupazio-murrizketarik gabe), eta horrek hau ematen du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mtext mathvariant=\"normal\">BE </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><munder><mo>∏</mo><mi>i</mi></munder><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi></mrow><mrow><msub><mi>n</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><mspace width=\"0.167em\"></mspace><msub><mi>g</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Prozedura berak —Stirling, Lagrange, <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math>-rekiko deribatzea— honakoa ematen du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mtext mathvariant=\"normal\">BE </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><munder><mo>∑</mo><mi>i</mi></munder><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub><mi mathvariant=\"normal\">ln</mi><msub><mi>n</mi><mi>i</mi></msub><mo>−</mo><msub><mi>g</mi><mi>i</mi></msub><mi mathvariant=\"normal\">ln</mi><msub><mi>g</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"script\">ℒ</mi></mrow><mrow><mi>∂</mi><msub><mi>n</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>n</mi><mi>i</mi></msub><mo>−</mo><mi>α</mi><mo>−</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><mfrac><mrow><msub><mi>g</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>i</mi></msub></mrow><msub><mi>n</mi><mi>i</mi></msub></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>n</mi><mi>i</mi></msub><msub><mi>g</mi><mi>i</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><msup><mi>e</mi><mrow><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Bose-Einsteinen banaketa</strong>: Fermi-Diracenaren berdin-berdina, izendatzaileko <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>-en zeinuan izan ezik —alde txiki-txikia formulan, ondorio fisiko izugarriekin (besteak beste, Bose-Einsteinen kondentsazioa tenperatura baxuetan, energia-mailarik baxuena sistemako partikula guztien zati makroskopiko bat metatzen hasten denean)."
    },
    {
     "mota": "oharra",
     "titulua": "Muga-kasua: Maxwell-Boltzmann",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Maila bakoitzaren okupazioa txikia denean (<math display=\"inline\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mi>/</mi><msub><mi>g</mi><mi>i</mi></msub><mo>≪</mo><mn>1</mn></mrow></math>, hau da, <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup><mo>≫</mo><mn>1</mn></mrow></math>), izendatzaileko <math display=\"inline\"><mrow><mi>±</mi><mn>1</mn></mrow></math> arbuiagarria da esponentzialaren aldean, eta bi banaketa kuantikoak forma berera murrizten dira: <math display=\"inline\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mi>/</mi><msub><mi>g</mi><mi>i</mi></msub><mo>≈</mo><msup><mi>e</mi><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>, aurreko kapituluko Boltzmannen banaketa. Gasak &quot;klasikoki&quot; jokatzen duen erregimena da: partikulak baino askoz egoera erabilgarri gehiago daudenean, bi partikulak egoera bera parteka ote dezaketen auziak ez du garrantzirik praktikan."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Hiru estatistikak alderatuta: batez besteko okupazioa, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo>−</mo><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren aurrean. Fermi-Dirac (urdina)\n   ez da inoiz 1etik gora igotzen (Pauli); Bose-Einstein (gorria)\n   dibergentea da <math display=\"inline\"><mrow><mi>ε</mi><mo>→</mo><mi>μ</mi></mrow></math> egitean (kondentsazioaren hazia);\n   eta energia handietan hirurak Maxwell-Boltzmannen esponentzialean\n   biltzen dira (berdea, etena): erregimen klasikoa.",
     "src": "media/irudiak/5c79ba0a632ae8db.svg",
     "zabalera": 330
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "Elektroi askeen gasa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Fermi-Diracen estatistikaren aplikazio nagusi gisa, har ditzagun <math display=\"inline\"><mi>N</mi></math> elektroi aske (elkarrekin elkarrekintzarik gabeak), <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><msup><mi>a</mi><mn>3</mn></msup></mrow></math> bolumeneko kutxa kubiko batean konfinatuta —eredu sinplifikatua, baina nabarmen eraginkorra, metal baten kondukzio-elektroientzat."
    },
    {
     "mota": "testua",
     "html": "<strong>Energia-mailak.</strong> Partikula aske baten Schrödingerren ekuazioa horma infinituko kutxa kubiko batean ebatziz (Schrödingerren kapituluko potentzial-putzu infinitua, orain hiru dimentsiotan), baimendutako energia-mailak hauek dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ε</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>y</mi></msub><mo>,</mo><msub><mi>n</mi><mi>z</mi></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Egoeren dentsitatea.</strong> Emandako <math display=\"inline\"><mi>ε</mi></math> balioa baino energia txikiagoko zenbat egoera dauden kontatzeko, errazagoa da <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>y</mi></msub><mo>,</mo><msub><mi>n</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> zenbaki kuantikoen espazioan pentsatzea: <math display=\"inline\"><mrow><msub><mi>ε</mi><mi>n</mi></msub><mo>≤</mo><mi>ε</mi></mrow></math> baldintzak erradio honetako esfera baten barrualdea definitzen du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mi>ε</mi></mrow><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac></msqrt><mo>=</mo><mfrac><mrow><mn>2</mn><mi>a</mi><msqrt><mrow><mn>2</mn><mi>m</mi><mi>ε</mi></mrow></msqrt></mrow><mi>h</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>y</mi></msub><mo>,</mo><msub><mi>n</mi><mi>z</mi></msub></mrow></math> guztiak positiboak direnez, esfera horren oktante bat baino ez da kontatu behar. <math display=\"inline\"><mi>ε</mi></math> baino energia txikiagoko egoeren kopurua, beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>8</mn></mfrac><mo>⋅</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>π</mi><msup><mi>R</mi><mn>3</mn></msup><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>π</mi><mi>V</mi><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mi>ε</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></msup></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da (<math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><msup><mi>a</mi><mn>3</mn></msup></mrow></math> erabiliz). <math display=\"inline\"><mi>ε</mi></math>-rekiko deribatuz <strong>egoeren dentsitatea</strong> lortzen da, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mi>G</mi><mi>/</mi><mi>d</mi><mi>ε</mi></mrow></math> —egoera kopurua energia-unitateko—, eta hari 2 faktorea gehitu behar zaio, egoera espazial bakoitzak kontrako espineko bi elektroi onartzen dituelako:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn><mi>π</mi><mi>V</mi><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></msup></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><msqrt><mi>ε</mi></msqrt></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Elektroi askeen gasaren egoeren dentsitatea, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msqrt><mi>ε</mi></msqrt></mrow></math>. <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>-n, egoera guztiak beteta daude Fermiren energiaraino, <math display=\"inline\"><msub><mi>ε</mi><mi>F</mi></msub></math> (itzaleztatutako azalera, erakusten ez bada ere), eta hutsik horren gainetik.",
     "src": "media/irudiak/5197c746ccad1715.svg",
     "zabalera": 278
    },
    {
     "mota": "testua",
     "html": "<strong>Fermiren energia.</strong> Zero tenperaturan, elektroiek eskuragarri dauden energia txikieneko egoerak okupatzen dituzte, bat egoera bakoitzeko (Pauli), <math display=\"inline\"><mi>N</mi></math> elektroiak agortu arte: maila guztiak betetzen dira gehienezko energia bateraino, <math display=\"inline\"><msub><mi>ε</mi><mi>F</mi></msub></math>, <strong>Fermiren energia</strong>, eta bat ere ez horren gainetik. Egoeren dentsitatea <math display=\"inline\"><msub><mi>ε</mi><mi>F</mi></msub></math>-raino integratuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>N</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><msub><mi>ε</mi><mi>F</mi></msub></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><mn>4</mn><mi>π</mi><mi>V</mi><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></msup></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo>⋅</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msubsup><mi>ε</mi><mi>F</mi><mfrac><mn>3</mn><mn>2</mn></mfrac></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta askatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ε</mi><mi>F</mi></msub><mo>=</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>N</mi></mrow><mrow><mn>8</mn><mi>π</mi><mi>V</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>2</mn><mn>3</mn></mfrac></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Elektroien dentsitatearen, <math display=\"inline\"><mrow><mi>N</mi><mi>/</mi><mi>V</mi></mrow></math>, mende baino ez dago: zenbat eta estuago egon elektroiak, orduan eta handiagoa da Fermiren energia (esklusio-printzipioak gero eta energia handiagoko egoerak okupatzera behartzen ditu)."
    },
    {
     "mota": "irudia",
     "oina": "Fermiren okupazio-funtzioa: <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>-n eskaloi bat da (dena beteta\n   <math display=\"inline\"><msub><mi>ε</mi><mi>F</mi></msub></math>-raino, dena hutsik gainetik); <math display=\"inline\"><mrow><mi>T</mi><mo>&gt;</mo><mn>0</mn></mrow></math>-n eskaloia\n   <math display=\"inline\"><mrow><mo>∼</mo><mi>k</mi><mi>T</mi></mrow></math> zabalerako zerrenda batean leuntzen da,\n   <math display=\"inline\"><msub><mi>ε</mi><mi>F</mi></msub></math>-ren inguruan — zerrenda horretako elektroiek soilik\n   parte hartzen dute kondukzioan eta bero espezifikoan.",
     "src": "media/irudiak/0133852c4547d4d3.svg",
     "zabalera": 301
    },
    {
     "mota": "testua",
     "html": "<strong>Batez besteko energia <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>-n.</strong> Gasaren energia osoa <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>-n <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><msub><mi>ε</mi><mi>F</mi></msub></msubsup><mi>ε</mi><mspace width=\"0.167em\"></mspace><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi></mrow></math> da, eta horrek <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>N</mi><msub><mi>ε</mi><mi>F</mi></msub></mrow></math> ematen du; beraz, elektroi bakoitzeko batez besteko energia hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>ε</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mi>U</mi><mi>N</mi></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><msub><mi>ε</mi><mi>F</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ohar bedi hori ondorio erabat kuantikoa dela (esklusio-printzipioarena): <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>-n, gas <strong>klasiko</strong> batek energia zinetiko nulua izango luke (partikula guztiak geldi), baina elektroi-gas batek batez besteko energia nabarmena du zero absolutuan ere, Paulik debekatu egiten dielako guztiak energia minimoko egoeran pilatzea."
    },
    {
     "mota": "testua",
     "html": "<strong>Zenbakizko adibidea.</strong> Sodio metalikoaren kasuan, atomo bakoitzeko kondukzio-elektroi batekin eta dentsitate ezagunarekin, Fermiren energia <math display=\"inline\"><mrow><msub><mi>ε</mi><mi>F</mi></msub><mo>≈</mo><mn>3.1</mn></mrow></math> eV ateratzen da — metal baten balio tipikoa, giro-tenperaturako <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> baino askoz ere handiagoa (<math display=\"inline\"><mrow><mo>≈</mo><mn>0.026</mn></mrow></math> eV). Horregatik, gas klasiko batean ez bezala, metal bateko elektroi-gasaren energia ia ez da aldatzen giro-tenperaturarekin: <math display=\"inline\"><msub><mi>ε</mi><mi>F</mi></msub></math>-tik oso hurbil dauden elektroiek soilik (guztien zati txiki batek, <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mi>/</mi><msub><mi>ε</mi><mi>F</mi></msub></mrow></math> ordenakoak) dituzte egoera huts eskuragarriak justu gainetik; gehien-gehienak, aldiz, &quot;harrapatuta&quot; daude <math display=\"inline\"><msub><mi>ε</mi><mi>F</mi></msub></math>-tik askoz beherago, dagoeneko okupatutako egoerez inguratuta."
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Fotoien gasa: Plancken legea beste bide batetik",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Atal honek erabiltzailearen (Mikel Aguirre) fisika modernoko koadernoko ohar propioak erreproduzitzen ditu, euskarara itzulita (&quot;2. blokea: Mekanika Estatistikoa&quot;, 16. gaia). Ez da hirugarren batzuen liburua."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Fotoiak bosoiak dira (1 espina); beraz, printzipioz, goragoko Bose-Einsteinen banaketak gobernatzen ditu: <math display=\"inline\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mi>/</mi><msub><mi>g</mi><mi>i</mi></msub><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Baina bada funtsezko alde bat elektroi- edo atomo-gasaren aldean: <strong>fotoi kopurua ez da kontserbatzen</strong> — horma batek fotoiak libreki xurgatu edo igorri ditzake, <math display=\"inline\"><mi>N</mi></math> inolako murrizketa fisikorik gabe aldatuz. <math display=\"inline\"><mi>α</mi></math> biderkatzailea, hain zuzen, baldintza hau ezartzen zuena zenez —<math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mi>N</mi></mrow></math> <strong>finkoa</strong>—, eta hemen baldintza hori ez dagoenez, Lagrangeren prozedurak ez du gai hori barne hartzen: <strong>fotoientzat, <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math></strong> (baliokideki, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math> potentzial kimikoa), eta <math display=\"inline\"><mi>ν</mi></math> maiztasuneko modu baten okupazio-banaketa honetara murrizten da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>n</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hori, hain zuzen, Fisika Modernoko 1. kapituluko Plancken osziladorearen batez besteko energiaren adierazpen bera da (<math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi></mrow></math> unitateetan) — eta ez kasualitatez: <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> modu bateko fotoien batez besteko kopurua da, eta fotoi bakoitzak <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi></mrow></math> energia dakar; beraz, <math display=\"inline\"><mi>ν</mi></math> maiztasuneko modu baten batez besteko energia <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mi>h</mi><mi>ν</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da, Plancken osziladore kuantikoaren <math display=\"inline\"><mover><mi mathvariant=\"script\">ℰ</mi><mo accent=\"true\">¯</mo></mover></math>-ren berdina. Gauza bera kontatzeko bi modu dira: &quot;tarte berdineko mailak dituen osziladorea, <math display=\"inline\"><mrow><mi>n</mi><mi>h</mi><mi>ν</mi></mrow></math>&quot; (Plancken bidea, 1900) eta &quot;fotoi berdinen edozein kopuru ostatatu dezakeen modu elektromagnetikoa, bakoitza <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi></mrow></math> energiakoa&quot; (Bose-Einsteinen bidea, 1924): fisika bera ematen dute."
    },
    {
     "mota": "testua",
     "html": "<strong>Plancken legea berreraikitzen.</strong> Barrunbe bateko modu elektromagnetikoen dentsitatea, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ν</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>8</mn><mi>π</mi><msup><mi>ν</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>ν</mi></mrow></math>, Fisika Modernoko 1. kapituluan ezarri zen jada (argiaren bi polarizazioen 2 faktorea dagoeneko sartuta; hemen elektroi-gasaren egoeren dentsitateko 2 espin-faktorearen paper bera jokatzen du). Modu-dentsitate hori modu bakoitzaren batez besteko energiaz biderkatuz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ν</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mover><mi>n</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>h</mi><mi>ν</mi><mi>d</mi><mi>ν</mi><mo>=</mo><mfrac><mrow><mn>8</mn><mi>π</mi><mi>h</mi></mrow><msup><mi>c</mi><mn>3</mn></msup></mfrac><mfrac><msup><mi>ν</mi><mn>3</mn></msup><mrow><msup><mi>e</mi><mrow><mi>h</mi><mi>ν</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>d</mi><mi>ν</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Plancken erradiazio-legea da hau berriro ere — 1. kapituluan osziladore bakar baten kuantizazioa sartuz atera zen formula bera, orain Bose-Einsteinen estatistikaren kasu partikular gisa lortua, potentzial kimiko nuluarekin. Maiztasun guztien gainean integratuz, era berean, Stefan-Boltzmannen legea berreskuratzen da, <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msup><mi>T</mi><mn>4</mn></msup></mrow></math>, han egiaztatu zen bezalaxe."
    },
    {
     "mota": "oharra",
     "titulua": "Zergatik den garrantzitsua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hain deribazio desberdinak diren biak —bata osziladore kuantizatu bakar batean zentratua, bestea kopurua kontserbatzen ez duen partikula-gas baten estatistikan— formula berean bat etortzea egiturazko baieztapen sendoa da: gorputz beltzaren erradiazioa ez dago eredu mikroskopiko zehatzaren xehetasunen mende; aski da energia elektromagnetikoa <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi></mrow></math> paketetan kuantizatuta egotea. Bose-Einsteinen <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math> kasua, gainera, kopurua kontserbatzen ez duen edozein bosoi-gasen prototipoa da (fonoiak solido batean, adibidez) — hurrengo kapituluko bosoi <strong>masiboen</strong> gasaren aldean, non <math display=\"inline\"><mi>N</mi></math> finkoa den eta <math display=\"inline\"><mi>μ</mi></math> zerotik desberdina izan daitekeen (eta, izan ere, zerora behetik hurbildu behar den Bose-Einsteinen kondentsazioa gertatzeko)."
      }
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 1,
   "izenburua": "Einsteinen solidoa: bero espezifikoa",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "1. kapituluak Einsteinen solidoa adibide konbinatorio gisa bakarrik sartu zuen (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zenbatzea, energia osoa finko dela). Hemen tratamendu kanonikoak osatzen du: partizio-funtzioari esker, <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><msub><mi>C</mi><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math> tenperaturaren funtzio jarraitu gisa eskura daitezke. Azalpen propioa da (ez dago zati honetarako erabiltzailearen eskuizkribu-iturririk), baina liburu honetan dagoeneko ezarritako bi emaitza berrerabiltzen ditu zuzenean: osziladore kuantiko baten batez besteko energia (Planckek gorputz beltzerako egindako kalkuluaren berdina, Fisika Modernoko 1. kapitulua) eta <math display=\"inline\"><mrow><mi>U</mi><mo>,</mo><mi>S</mi><mo>,</mo><mi>F</mi></mrow></math> tresna-kutxa <math display=\"inline\"><mi>z</mi></math>-tik abiatuta (aurreko kapitulua)."
      }
     ]
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Eredua: <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi></mrow></math> osziladore independente",
   "blokeak": [
    {
     "mota": "testua",
     "html": "1. kapituluko eredu konbinatorioak atomo bakoitza osziladore bakar gisa tratatzen zuen. Benetako solido bat modu egokian erreproduzitzeko doikuntza txiki baina garrantzitsu bat behar da: atomo bakoitzak espazioko <strong>hiru</strong> norabideetan bibra dezake; beraz, <math display=\"inline\"><mi>N</mi></math> atomoko solido bat, hurbilketa honetan, <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi></mrow></math> osziladore harmoniko kuantiko independenteren baliokidea da, guztiak <math display=\"inline\"><mi>ν</mi></math> maiztasun berekoak (Einsteinen hipotesi sinplifikatzailea: solido batean atomo bakoitzak bere bizilagunekin akoplatuta bibratzen du, maiztasun posibleen espektro oso batekin, baina Einsteinek erakutsi zuen maiztasun eraginkor bakar batek dagoeneko funtsezko ezaugarri kualitatiboa erreproduzitzen duela, ikusiko den bezala)."
    },
    {
     "mota": "testua",
     "html": "Osziladore bakoitzak <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mi>h</mi><mi>ν</mi></mrow></math> energia-mailak ditu (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>), eta bere partizio-funtzioa —serie geometriko bat, Fisika Modernoko 1. kapituluan Plancken osziladorerako kalkulatutako batuketa bera— honako hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi>n</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta bere batez besteko energia, orduko kalkulu beraren bidez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Barne-energia eta bero espezifikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>3</mn><mi>N</mi></mrow></math> osziladore independente izanik, solidoaren barne-energia osziladore baten batez besteko energiaren <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi></mrow></math> halakoa da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>N</mi><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><msup><mi>e</mi><mrow><mi>h</mi><mi>ν</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Komeni da <strong>Einsteinen tenperatura</strong> <math display=\"inline\"><mrow><msub><mi>θ</mi><mi>E</mi></msub><mo>=</mo><mi>h</mi><mi>ν</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> definitzea (materialaren berezko tenperatura bat, haren bibrazio-maiztasunak finkatua); horrekin,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mfrac><msub><mi>θ</mi><mi>E</mi></msub><mrow><msup><mi>e</mi><mrow><msub><mi>θ</mi><mi>E</mi></msub><mi>/</mi><mi>T</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>T</mi></math>-rekiko deribatuz, bolumen konstanteko bero espezifikoa lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mi>V</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mrow><mi>d</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mn>3</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>θ</mi><mi>E</mi></msub><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mfrac><msup><mi>e</mi><mrow><msub><mi>θ</mi><mi>E</mi></msub><mi>/</mi><mi>T</mi></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><msub><mi>θ</mi><mi>E</mi></msub><mi>/</mi><mi>T</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": " Einsteinen bero espezifikoa, <math display=\"inline\"><mrow><msub><mi>C</mi><mi>V</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,\n  <math display=\"inline\"><mrow><mi>T</mi><mi>/</mi><msub><mi>θ</mi><mi>E</mi></msub></mrow></math>-ren funtzioan: Dulong-Petiten konstante klasikora (<math display=\"inline\"><mrow><mo>=</mo><mn>1</mn></mrow></math>)\n  jotzen du tenperatura altuetan, eta esponentzialki zerora\n  tenperatura baxuetan — kuantizatutako askatasun-graduen &quot;izozte&quot;\n  bera, hondamendi ultramorean (1. kapitulua) eta Schottkyren\n  anomalian (aurreko kapitulua) jadanik ikusi duguna.",
     "src": "media/irudiak/c0b4799a57a886a7.svg",
     "zabalera": 310
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Tenperatura altuen limitea: Dulong-Petiten legea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mi>E</mi></msub></mrow></math> denean (edo, baliokide gisa, <math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>≪</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>: bibrazio-kuantua txikia da energia termikoaren aldean), <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><msub><mi>θ</mi><mi>E</mi></msub><mi>/</mi><mi>T</mi></mrow></msup><mo>≈</mo><mn>1</mn><mo>+</mo><msub><mi>θ</mi><mi>E</mi></msub><mi>/</mi><mi>T</mi></mrow></math> hurbil dezakegu, eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mi>V</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>3</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>θ</mi><mi>E</mi></msub><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mfrac><mn>1</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mi>E</mi></msub><mi>/</mi><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>=</mo><mn>3</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Dulong-Petiten legea</strong> da, 1819tik esperimentalki ezaguna —mekanika kuantikoa baino askoz lehenagotik— giro-tenperaturan dauden ia solido guztientzat: solido baten bero espezifiko molarrak <math display=\"inline\"><mrow><mn>3</mn><mi>R</mi></mrow></math>-ra jotzen du (<math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><msub><mi>N</mi><mi>A</mi></msub><msub><mi>k</mi><mi>B</mi></msub></mrow></math> gasen konstantea izanik), materiala edozein dela ere. Horixe iragarriko luke, zehazki, fisika klasiko hutsak: ekipartizioaren teoremaren arabera, <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi></mrow></math> osziladore harmoniko klasikoetako bakoitzak <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> batez besteko energia metatzen du (erdia zinetikoa, erdia potentziala); beraz, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mn>3</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>C</mi><mi>V</mi></msub><mo>=</mo><mn>3</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>, <math display=\"inline\"><mi>T</mi></math>-rekiko inolako mendekotasunik gabe."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Tenperatura baxuen limitea: izozte kuantikoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>T</mi><mo>≪</mo><msub><mi>θ</mi><mi>E</mi></msub></mrow></math> denean, <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><msub><mi>θ</mi><mi>E</mi></msub><mi>/</mi><mi>T</mi></mrow></msup><mo>≫</mo><mn>1</mn></mrow></math> nagusitzen da izendatzailean, eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mi>V</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>3</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>θ</mi><mi>E</mi></msub><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>θ</mi><mi>E</mi></msub><mi>/</mi><mi>T</mi></mrow></msup><mo>→</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>→</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> denean </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hauxe izan zen Einsteinen ereduaren (1907) arrakasta historiko handia: fisika klasikoak, Dulong-Petiten legearen bitartez, <math display=\"inline\"><msub><mi>C</mi><mi>V</mi></msub></math>-k <strong>edozein</strong> tenperaturatan <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> balioan konstante iraun beharko lukeela iragartzen du, <math display=\"inline\"><mrow><mi>T</mi><mo>→</mo><mn>0</mn></mrow></math> barne. Esperimentalki, hala ere, ikusten zen solidoen bero espezifikoa zerora jaisten zela hoztean — klasikoki azaldu ezin den portaera. Einsteinen eredua izan zen hori azaldu zuen lehena: bibrazio-energia kuantizatzeak —Planckek zazpi urte lehenago erradiaziorako sartu zuen ideia berak— problema hau ere ebazten du: tenperatura baxuetan ez dago energia termiko nahikorik eskuragarri (<math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≪</mo><mi>h</mi><mi>ν</mi></mrow></math>) oinarrizko mailaren gaineko lehen bibrazio-maila bera ere kitzikatzeko; beraz, osziladoreak, izatez, &quot;izoztuta&quot; geratzen dira eta ezin dute gehiago berorik xurgatu."
    },
    {
     "mota": "oharra",
     "titulua": "Tenperatura baxuetako beherakadaren benetako forma",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Einsteinen ereduak <math display=\"inline\"><msub><mi>C</mi><mi>V</mi></msub></math>-ren beherakada <strong>esponentziala</strong> iragartzen du tenperatura baxuetan. Neurketa esperimentalek, aldiz, beherakada dezente motelagoa erakusten dute, <math display=\"inline\"><msup><mi>T</mi><mn>3</mn></msup></math> gisakoa (Debyeren legea). Desadostasuna ereduaren hipotesi sinplifikatzaileari zor zaio: benetako solido batean atomoek ez dute modu independentean bibratzen <math display=\"inline\"><mi>ν</mi></math> maiztasun bakarrarekin, elkarri akoplatuta baizik, eta horrek modu normalen (fonoien) espektro jarraitu oso bat sortzen du, gehienezko maiztasun bateraino. Debyeren ereduak, espektro oso hori kontuan hartzen duenak, xehetasun hau zuzentzen du tenperatura baxuetan, tenperatura altuetan Dulong-Petiten limitea mantentzen duen bitartean (kapitulu honen irismenetik kanpo geratzen da)."
      }
     ]
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Lotura 1. kapituluko zenbaketa konbinatorioarekin",
   "blokeak": [
    {
     "mota": "testua",
     "html": "1. kapituluko zenbakizko adibidea (<math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>10</mn></mrow></math> osziladore, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mn>6</mn><mi>h</mi><mi>ν</mi></mrow></math> energia osoa, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>10</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>5005</mn></mrow></math> multiplizitatea), izatez, sistema fisiko bera da, oinarrizko postulatutik ikusia —energia finkoan eskuragarri dauden mikroestatuak zuzenean zenbatuz—, tenperatura finkoan lan egiten duen partizio-funtziotik ikusi beharrean —energia posible guztien gainean batuz, bakoitza bere Boltzmannen pisuarekin—. Bi ikuspegiek (hurrenez hurren, kolektibitate mikrokanoniko eta kolektibitate kanoniko deituek) fisika bera eman behar dute sistema handia den limitean: aurreko kapituluan beste era batera egiaztatu genuen baliokidetasun bera da, han ikusi baikenuen <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi></mrow></math> bat zetorrela bi bide desberdinetatik kalkulatuta, bi mailatako sisteman."
    },
    {
     "mota": "problema",
     "izena": "Fisika Modernoa (12.-13. gaiak), 5. arazoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sistema batean, <math display=\"inline\"><mi>ν</mi></math> maiztasuneko <math display=\"inline\"><mi>N</mi></math> osziladore bereizgarri daude (<math display=\"inline\"><mrow><mn>3</mn><mi>N</mi></mrow></math> osziladore harmoniko isotropoen eredua, hau da, Einsteinen solidoaren ereduko atomo bakoitza hiru dimentsiotan bibratzen ari da). Tenperatura <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> da. Kalkulatu osziladore jakin bat hartuta, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math> energia-mailan egoteko probabilitatea."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Osziladore bakoitza, izatez, <strong>hiru dimentsiokoa</strong> da, isotropoa, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>+</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><msub><mi>n</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>h</mi><mi>ν</mi></mrow></math> energiarekin (<math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>,</mo><msub><mi>n</mi><mn>2</mn></msub><mo>,</mo><msub><mi>n</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> norabide bakoitzeko hiru zenbaki kuantiko independenteak). Energia osoaren arabera taldekatuz, <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>h</mi><mi>ν</mi></mrow></math> <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><msub><mi>n</mi><mn>3</mn></msub></mrow></math>-rekin, <math display=\"inline\"><mi>n</mi></math> mailak degenerazio hau du: <math display=\"block\"><mrow><msub><mi>g</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mn>2</mn></mfrac></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><msub><mi>n</mi><mn>3</mn></msub></mrow></math> zenbaki oso ez-negatiboekin idazteko moduen kopurua): <math display=\"inline\"><mrow><msub><mi>g</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>g</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>g</mi><mn>2</mn></msub><mo>=</mo><mn>6</mn></mrow></math>, etab."
      },
      {
       "mota": "testua",
       "html": "3D osziladorearen partizio-funtzioa, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanik, kapitulu honetan dagoeneko erabilitako 1D partizio-funtzioaren kuboa besterik ez da (hiru norabide independente, <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mn>3</mn><mi>D</mi><mspace width=\"0.222em\"></mspace></mrow></msub><mo>=</mo><msub><mi>z</mi><mi>x</mi></msub><msub><mi>z</mi><mi>y</mi></msub><msub><mi>z</mi><mi>z</mi></msub><mo>=</mo><msup><mi>z</mi><mn>3</mn></msup></mrow></math> ): <math display=\"block\"><mrow><msub><mi>z</mi><mrow><mn>3</mn><mi>D</mi><mspace width=\"0.222em\"></mspace></mrow></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mrow><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mn>3</mn><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac></mrow></math> Egiazta daiteke hau bat datorrela maila degeneratuen gainean zuzenean batzearekin, <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mn>3</mn><mi>D</mi><mspace width=\"0.222em\"></mspace></mrow></msub><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>g</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi></mrow></msup></mrow></math>. Bi bideek emaitza bera ematen dute — beste egiaztapen gurutzatu bat, aurreko kapituluetakoak bezalakoa."
      },
      {
       "mota": "testua",
       "html": "Osziladore bat <math display=\"inline\"><mi>n</mi></math> mailan egoteko probabilitatea <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>g</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi></mrow></msup><mi>/</mi><msub><mi>z</mi><mrow><mn>3</mn><mi>D</mi><mspace width=\"0.222em\"></mspace></mrow></msub><mo>=</mo><msub><mi>g</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mrow></math> da. Enuntziatuan emandako <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>-rekin, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>, eta <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>-rako (<math display=\"inline\"><mrow><msub><mi>g</mi><mn>2</mn></msub><mo>=</mo><mn>6</mn></mrow></math>):"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>6</mn><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo>≈</mo><mn>6</mn><mo>×</mo><mn>0.1353</mn><mo>×</mo><mn>0.2525</mn><mo>≈</mo><mn>0.205</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "hau da, gutxi gorabehera <math display=\"inline\"><mrow><mn>20</mn><mi>%</mi></mrow></math> — oso bestelakoa da degeneraziorik gabeko 1D osziladore batek emango lukeen emaitza (<math display=\"inline\"><mrow><mo>≈</mo><mn>8.6</mn><mi>%</mi></mrow></math>): <math display=\"inline\"><mrow><msub><mi>g</mi><mn>2</mn></msub><mo>=</mo><mn>6</mn></mrow></math> degenerazioak energiaren zigor esponentzialak baino gehiago pisatzen du."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "2013ko maiatza, IEM/Fisika Modernoa, 4. arazoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kontuan hartu hiru dimentsioko osziladore harmonikoen multzo batez osatutako sistema bat, zeinen energia-mailak honela ematen diren: <math display=\"block\"><mrow><msub><mi>ε</mi><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>,</mo><msub><mi>n</mi><mn>2</mn></msub><mo>,</mo><msub><mi>n</mi><mn>3</mn></msub></mrow></msub><mo>=</mo><mi>ħ</mi><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>+</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><msub><mi>n</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>,</mo><msub><mi>n</mi><mn>2</mn></msub><mo>,</mo><msub><mi>n</mi><mn>3</mn></msub></mrow></math> zenbaki osoak diren, <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "a) Kalkulatu energia-maila hauen degenerazioa: <math display=\"inline\"><mrow><mn>7</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math> eta <math display=\"inline\"><mrow><mn>9</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Osziladore-sistema <math display=\"inline\"><mi>T</mi></math> tenperaturako bainu batekin kontaktu termikoan badago, zein tenperaturatan dago <math display=\"inline\"><mrow><mn>9</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math> energia-maila <math display=\"inline\"><mrow><mn>7</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math>-koa baino jendeztatuago? Kalkulatu tenperatura horren zenbakizko balioa <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>6</mn><mo>×</mo><msup><mn>10</mn><mn>13</mn></msup></mrow></math> s <math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> maiztasuneko osziladoreentzat."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Goian jadanik ezarritako degenerazio-formularekin, <math display=\"inline\"><mrow><msub><mi>g</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>: <math display=\"inline\"><mrow><mn>7</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math> maila <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>-ri dagokio, <math display=\"inline\"><mrow><msub><mi>g</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn><mo>=</mo><mn>6</mn></mrow></math>; <math display=\"inline\"><mrow><mn>9</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math> maila <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>-ri dagokio, <math display=\"inline\"><mrow><msub><mi>g</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn><mo>=</mo><mn>10</mn></mrow></math> (egiazta daiteke, halaber, 2 edo 3 batzen duten <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>,</mo><msub><mi>n</mi><mn>2</mn></msub><mo>,</mo><msub><mi>n</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> hirukoteak zuzenean zerrendatuz)."
      },
      {
       "mota": "testua",
       "html": "b) Maila bakoitzaren populazioa <math display=\"inline\"><mrow><msub><mi>g</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mi>n</mi></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math>-rekiko proportzionala da: <math display=\"block\"><mrow><mfrac><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>9</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>6</mn><msup><mi>e</mi><mrow><mi>−</mi><mn>7</mn><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow><mrow><mn>10</mn><msup><mi>e</mi><mrow><mi>−</mi><mn>9</mn><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><msup><mi>e</mi><mrow><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math> Goiko maila jendeztatuago egon dadin, <math display=\"inline\"><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>9</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, behar da <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>5</mn><mo>&lt;</mo><msup><mi>e</mi><mrow><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>, hau da, <math display=\"block\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>&gt;</mo><mfrac><mrow><mi>ħ</mi><mi>ω</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math> <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>6</mn><mo>×</mo><msup><mn>10</mn><mn>13</mn></msup></mrow></math> s <math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> ordezkatuz: <math display=\"inline\"><mrow><mi>T</mi><mo>≈</mo><mn>894</mn></mrow></math> K — tenperatura oso altua, eta koherentea honekin: tenperatura baxuetan beti energia txikieneko maila nagusitzen da (degenerazio txikiagoa izan arren), eta tenperatura altuetan bakarrik konpentsa dezake goiko mailaren degenerazio handiagoak bere energia-desabantaila."
      }
     ]
    }
   ]
  },
  {
   "id": "a23",
   "maila": 1,
   "izenburua": "Bose-Einsteinen kondentsazioa",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kapitulu hau azalpen propioa da (ez dago garapen hau jasotzen duen eskuizkribu-iturririk), testu-liburu gehienetako forma estandarrean aurkeztua: liburu honetako beste &quot;zubi&quot;-atal batzuetan (adibidez, Fisika Modernoko Rayleigh-Jeansen ereduan edo korrespondentzia-printzipioan) dagoeneko aplikatutako aipamen-irizpide bera. Zuzenean berrartzen ditu estatistika kuantikoen ataleko Bose-Einsteinen banaketa eta egoeren dentsitatearen kalkulua."
      }
     ]
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Problema: partikula gehiegi, egoera gutxiegirentzat",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Gogora dezagun aurreko kapituluko Bose-Einsteinen banaketa, orain <strong>potentzial kimikoaren</strong> bidez idatzita, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>−</mi><mi>α</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> (<math display=\"inline\"><mi>α</mi></math> normalizazio-konstantea idazteko ohiko era bat, energia-unitatetan emana):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>n</mi><mi>i</mi></msub><msub><mi>g</mi><mi>i</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><msup><mi>e</mi><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mi>i</mi></msub><mo>−</mo><mi>μ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Edozein mailaren <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> okupazioa positiboa eta finitua izan dadin, izendatzaileak positiboa izan behar du, eta horrek <math display=\"inline\"><mrow><mi>μ</mi><mo>&lt;</mo><msub><mi>ε</mi><mi>i</mi></msub></mrow></math> eskatzen du maila eskuragarri <strong>guztietarako</strong>; bereziki, oinarrizko energia-mailarako ( <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> ) betetzen denez, bosoi-gas baten potentzial kimikoak beti bete behar du <math display=\"inline\"><mrow><mi>μ</mi><mo>≤</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Kontsidera ditzagun <math display=\"inline\"><mi>N</mi></math> bosoi (adibidez, gas baten atomoak, espin osokoak) <math display=\"inline\"><mi>V</mi></math> bolumeneko kutxa batean, beraien arteko elkarrekintzarik gabe. Potentzial kimikoa, <math display=\"inline\"><mi>μ</mi></math>, tenperaturaren funtzioa da, oro har, partikula-kopuru osoa <math display=\"inline\"><mi>N</mi></math> izateko baldintzak finkatua. Tenperatura altuan, <math display=\"inline\"><mi>μ</mi></math> oso negatiboa da (gasak ia klasikoki jokatzen du, aurreko kapituluan ikusi genuenez). Tenperatura jaistean, partikula-kopuru bera, <math display=\"inline\"><mi>N</mi></math>, maila eskuragarrien artean banatuta mantentzeko, <math display=\"inline\"><mi>μ</mi></math>-k hazi egin behar du, 0ra hurbilduz. Kapitulu honen galdera nagusia hauxe da: <strong>zer gertatzen da <math display=\"inline\"><mi>μ</mi></math>-k jada gora egiten jarraitu ezin duenean?</strong>"
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Egoera kitzikatuen okupazio maximoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Elektroi askeen gasean bezala (aurreko kapituluan), kutxa kubiko handi bateko gas batentzat energia-mailak hain hurbil daude, non jarraitu gisa trata baititzakegu, egoeren dentsitate honekin:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>π</mi><mi>V</mi><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></msup></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><msqrt><mi>ε</mi></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(elektroientzako formula bera, baina espinaren 2 faktorerik gabe: hemen 0 espineko bosoiak kontsideratzen ditugu). Egoera <strong>kitzikatuetan</strong> ( <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math> ) dagoen partikula-kopurua, <math display=\"inline\"><mi>T</mi></math> tenperaturan eta <math display=\"inline\"><mi>μ</mi></math> potentzial kimikoarekin, hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>N</mi><mrow><mtext mathvariant=\"normal\">exc </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mfrac><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>e</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo>−</mo><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>d</mi><mi>ε</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hona hemen puntu erabakigarria, eta guztiz matematikoa da: <math display=\"inline\"><mi>μ</mi></math>-ren funtzio gisa, integral hau <strong>hazi</strong> egiten da <math display=\"inline\"><mi>μ</mi></math> 0rantz igotzean (izendatzailea txikiagoa egiten da tarte osoan), baina <strong>finitua</strong> izaten jarraitzen du <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math> muga-kasuan ere:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>N</mi><mtext mathvariant=\"normal\">exc</mtext><mrow><mtext mathvariant=\"normal\">máx </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mfrac><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>d</mi><mi>ε</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>V</mi><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>3</mn><mn>2</mn></mfrac></msup><msup><mi>h</mi><mn>3</mn></msup></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mfrac><msqrt><mi>x</mi></msqrt><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>ε</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> aldagai-aldaketa eginda. Geratzen den integrala, zenbaki huts bat, Boseren integralen kasu berezi bat da; horrelakoak sistematikoki agertzen dira era honetako kalkuluetan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mfrac><msqrt><mi>x</mi></msqrt><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ζ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>2.612</mn><mo>×</mo><mfrac><msqrt><mi>π</mi></msqrt><mn>2</mn></mfrac><mo>≈</mo><mn>2.315</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> gamma funtzioa izanik eta <math display=\"inline\"><mi>ζ</mi></math> Riemannen zeta funtzioa; hurrengorako haren zenbakizko balioa baino ez dugu behar). Horrela,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>N</mi><mtext mathvariant=\"normal\">exc</mtext><mrow><mtext mathvariant=\"normal\">máx </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2.612</mn><mspace width=\"0.222em\"></mspace><mi>V</mi><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>3</mn><mn>2</mn></mfrac></msup><msup><mi>h</mi><mn>3</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hori da egoera kitzikatuek <math display=\"inline\"><mi>T</mi></math> tenperaturan har dezaketen partikula-kopuru <strong>maximoa</strong> — eta <math display=\"inline\"><mi>T</mi></math>-rekin hazi egiten da, tenperatura altuagoan egoera termiko eskuragarri gehiago daudelako."
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Tenperatura kritikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Baldin <math display=\"inline\"><mi>N</mi></math> gasaren partikula-kopuru osoa (finkoa) bada, aurreko ekuazioak ondorio saihestezin bat du: <math display=\"inline\"><mrow><msubsup><mi>N</mi><mtext mathvariant=\"normal\">exc</mtext><mrow><mtext mathvariant=\"normal\">máx </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> gasa hoztean txikitzen denez, badago tenperatura bat, <math display=\"inline\"><msub><mi>T</mi><mi>c</mi></msub></math> — <strong>tenperatura kritikoa</strong>—, zeinaren azpitik <math display=\"inline\"><mrow><msubsup><mi>N</mi><mtext mathvariant=\"normal\">exc</mtext><mrow><mtext mathvariant=\"normal\">máx </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mi>N</mi></mrow></math> baita: egoera kitzikatuek, nahiz eta ahalik eta gehien okupatuta egon (<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math>), ezin dituzte jada gasaren partikula guztiak hartu."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>N</mi><mo>=</mo><msubsup><mi>N</mi><mtext mathvariant=\"normal\">exc</mtext><mrow><mtext mathvariant=\"normal\">máx </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mi>c</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mi>c</mi></msub><mo>=</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>π</mi><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mrow><mn>2.612</mn><mspace width=\"0.222em\"></mspace><mi>V</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>2</mn><mn>3</mn></mfrac></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Zer gertatzen da orduan &quot;soberako&quot; partikulekin? Ezin dira egoera kitzikatu batean ere egon (<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math>-k onartzen duen maximoraino beteta daude denak dagoeneko), eta, beraz, <strong>oinarrizko egoeran</strong> (<math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>) pilatzen dira; horren okupazioa —edozein egoera kitzikatu indibidualarena ez bezala— ez dago egoeren dentsitate jarraitu batek mugatuta: egoera kuantiko bakar bat da, eta sistemaren partikula guztien zatiki <strong>makroskopiko</strong> bat har dezake. Fenomeno hori da <strong>Bose-Einsteinen kondentsazioa</strong>."
    },
    {
     "mota": "irudia",
     "oina": "Kondentsatuko partikula-zatikia, <math display=\"inline\"><mrow><msub><mi>N</mi><mn>0</mn></msub><mi>/</mi><mi>N</mi><mo>=</mo><mn>1</mn><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>T</mi><mi>/</mi><msub><mi>T</mi><mi>c</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>,\n  <math display=\"inline\"><mrow><mi>T</mi><mo>&lt;</mo><msub><mi>T</mi><mi>c</mi></msub></mrow></math>-rako: <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>-an, gas osoa oinarrizko egoeran dago;\n  <math display=\"inline\"><msub><mi>T</mi><mi>c</mi></msub></math>-ra hurbiltzean, zatiki kondentsatua zerora erortzen da.\n  <math display=\"inline\"><msub><mi>T</mi><mi>c</mi></msub></math>-ren gainetik ez dago kondentsaturik (<math display=\"inline\"><mrow><msub><mi>N</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>): partikula\n  guztiak egoera kitzikatuetan sartzen dira. ",
     "src": "media/irudiak/ca682c2efcffffb5.svg",
     "zabalera": 299
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>T</mi><mi>c</mi></msub></math>-ren azpitik, kondentsatutako partikula-kopurua, besterik gabe, egoera kitzikatuak maximoraino bete ondoren soberan geratzen dena da: <math display=\"inline\"><mrow><msub><mi>N</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><mo>−</mo><msubsup><mi>N</mi><mtext mathvariant=\"normal\">exc</mtext><mrow><mtext mathvariant=\"normal\">máx </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; eta, gainera, <math display=\"inline\"><mrow><msubsup><mi>N</mi><mtext mathvariant=\"normal\">exc</mtext><mrow><mtext mathvariant=\"normal\">máx </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msup><mi>T</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> dela erabiliz (goiko formulatik), <math display=\"inline\"><msub><mi>T</mi><mi>c</mi></msub></math>-ren definizioarekin batera:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>N</mi><mn>0</mn></msub><mi>N</mi></mfrac><mo>=</mo><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>T</mi><msub><mi>T</mi><mi>c</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>&lt;</mo><msub><mi>T</mi><mi>c</mi></msub></mrow></math>"
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Magnitude-ordenaren estimazioarekiko konparazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Fenomeno hori bera agertua zen jada liburu honetan, era askoz hurbilduagoan tratatuta, 2007ko ekaineko azterketako 2. problemaren b) atal gisa (Azterketak kapituluan): han tenperatura estimatzen zen De Broglieren uhin-luzera, <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>B</mi></msub><mo>=</mo><mi>h</mi><mi>/</mi><msqrt><mrow><mn>3</mn><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msqrt></mrow></math>, atomoen arteko distantzia tipikoarekin, <math display=\"inline\"><mrow><mi>d</mi><mo>≈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mi>/</mi><mi>N</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></math>, berdinduz. Estimazio horrek hau ematen du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>T</mi><mtext mathvariant=\"normal\">B-E</mtext><mrow><mtext mathvariant=\"normal\">aprox </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo>≈</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><mrow><mn>3</mn><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mi>V</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Horrek <math display=\"inline\"><mrow><mi>N</mi><mi>/</mi><mi>V</mi></mrow></math>-rekiko eta oinarrizko konstanteekiko mendekotasun <strong>berbera</strong> du goian lortutako <math display=\"inline\"><msub><mi>T</mi><mi>c</mi></msub></math>-ren formula zorrotzak bezalaxe, eta zenbaki-faktorean bakarrik bereizten da (<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mspace width=\"0.222em\"></mspace><msup><mn>2.612</mn><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≈</mo><mn>0.19</mn></mrow></math>, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zehatzaren aldean, biak orden berekoak): &quot;uhin-luzera termikoa partikulen arteko distantziaren parekoa bihurtzen denean&quot; estimazio kualitatiboak zuzen harrapatzen du fenomenoaren funtsezko fisika, eta Boseren integrala erabiltzen duen kalkulu osoak estimazioaren zenbakizko konstantea fintzea besterik ez du egiten."
    },
    {
     "mota": "oharra",
     "titulua": "Benetan kuantikoa den fenomenoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bose-Einsteinen kondentsazioak ez du inolako analogo klasikorik: gas klasiko batek, hozten denean, bere partikulen energia zinetikoa murrizten du, baina partikula bakar batek ere ez du egoera bera bereziki &quot;aukeratzen&quot;. Hemen, ordea, partikulen zatiki makroskopiko batek egoera kuantiko bera okupatzen du, hitzez hitz — eta hori posible da soilik bosoiak Pauliren esklusio-printzipioaren mende ez daudelako (aurreko kapituluko fermioiak ez bezala, non egoera bakoitzak gehienez partikula bakarra onartzen baitu)—. Einsteinek iragarri zuen 1924-1925ean, Bosek fotoien estatistikari buruz egindako lanetik abiatuta, baina kondentsazioa ez zen gas atomiko batean esperimentalki behatu 1995era arte (Cornell eta Wieman, nanokelvin ordenako tenperaturetaraino hoztutako rubidio-atomoekin) — iragarpen teorikoa baino zazpi hamarkada geroago."
      }
     ]
    }
   ]
  },
  {
   "id": "a28",
   "maila": 1,
   "izenburua": "Gas ideal klasikoa",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kapitulu honek erabiltzailearen (Mikel Aguirre) apunte propioak erreproduzitu eta garatzen ditu — fisika modernoko koadernoa, &quot;2. Blokea: Mekanika Estatistikoa&quot;, 14. gaia. Ez da hirugarren batzuen liburu bat — gainerakoaren askatasun berarekin erreproduzitzen da. Gas ideal monoatomiko klasikoaren tratamendu osoa da, Maxwell-Boltzmannen banaketaren bidez: orain arte liburu honek gas kuantikoak baino ez zituen aztertzen (elektroiak, estatistika kuantikoen kapitulua)."
      }
     ]
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Partikula bereizgarriak eta <math display=\"inline\"><mfrac><mn>1</mn><mrow><mi>N</mi><mi>!</mi></mrow></mfrac></math> faktorea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kontsidera dezagun <math display=\"inline\"><mi>N</mi></math> partikula berdinez osatutako gas bat, partikulak askeak eta <math display=\"inline\"><mi>V</mi></math> bolumen batean konfinatuak izanik. 1. kapituluko solidoan ez bezala (han atomo bakoitzak posizio finko bat betetzen du sarean eta, beraz, bere auzokideengandik bereizgarria da posizioagatik), gas bateko partikulak aske higitzen dira eta elkarren artean bereizezinak dira."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>N</mi></math> partikulen sistema osoa partikula bakarraren <math display=\"inline\"><mi>z</mi></math> partizio-funtzioaz tratatzen badugu, bi aukera daude, partikulak bereizgarriak diren ala ez:"
    },
    {
     "mota": "taula-kutxa",
     "oina": "<math display=\"inline\"><mi>N</mi></math> partikulen sistema osoaren partizio-funtzioa, partikulak bereizgarriak diren ala ez.",
     "blokeak": [
      {
       "mota": "testua",
       "html": "table( columns: 2, align: center, [Partikula <strong>bereizgarriak</strong>], [Partikula <strong>bereizezinak</strong>], [<math display=\"block\"><mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><msup><mi>z</mi><mi>N</mi></msup></mrow></math>], [<math display=\"block\"><mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><mfrac><msup><mi>z</mi><mi>N</mi></msup><mrow><mi>N</mi><mi>!</mi></mrow></mfrac></mrow></math>], )"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mfrac><mn>1</mn><mrow><mi>N</mi><mi>!</mi></mrow></mfrac></math> faktoreak mikroegoeren gainkontaketa zuzentzen du: sistema osoa partikulek etiketa bana eramango balute bezala kontatzean, konfigurazio fisiko berdin bakoitza <math display=\"inline\"><mrow><mi>N</mi><mi>!</mi></mrow></math> aldiz kontatzen da (hau da, <math display=\"inline\"><mi>N</mi></math> partikula berdinak okupatutako banakako egoera berberen artean banatzeko modu guztiak). Faktore hori —2. kapituluko (Boltzmann) tratamenduan agertzen ez zena, han partikulak sareko posizioagatik bereizgarriak baitziren— ezinbestekoa da gas batentzat, eta haren ausentzia da, hain zuzen ere, kapitulu hau ixten duen Gibbsen paradoxaren jatorria."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>Z</mi><mi>N</mi></msub></math>-tik abiatuta, magnitude termodinamikoak beti bezala lortzen dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>U</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>+</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>F</mi><mo>=</mo><mi>−</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta, partikula bereizezinen kasuan (<math display=\"inline\"><mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><mfrac><msup><mi>z</mi><mi>N</mi></msup><mrow><mi>N</mi><mi>!</mi></mrow></mfrac></mrow></math>, Stirlingen formula <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mi>!</mi></mrow></math>-rako erabiliz), honetara laburtzen dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>S</mi><mo>=</mo><mfrac><mi>U</mi><mi>T</mi></mfrac><mo>+</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo>−</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mi>!</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>F</mi><mo>=</mo><mi>−</mi><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo>+</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mi>!</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Partikula aske baten egoeren dentsitatea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Estatistika kuantikoen kapituluan bezala (elektroi-gasa), <math display=\"inline\"><mi>m</mi></math> masako partikula aske batek, <math display=\"inline\"><mi>L</mi></math> aldeko kutxa kubiko batean (<math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><msup><mi>L</mi><mn>3</mn></msup></mrow></math>), energia-maila hauek ditu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ε</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msup><mi>π</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>y</mi></msub><mo>,</mo><msub><mi>n</mi><mi>z</mi></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Zenbaki kuantikoen espazioan <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><mi>ε</mi></mrow></msqrt><mrow><mi>π</mi><mi>ħ</mi></mrow></mfrac></mrow></math> erradioko esfera baten barruko egoerak kontatuz (oktante bat, <math display=\"inline\"><mrow><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>y</mi></msub><mo>,</mo><msub><mi>n</mi><mi>z</mi></msub><mo>&gt;</mo><mn>0</mn></mrow></math> baitira), <math display=\"inline\"><mi>ε</mi></math> baino energia txikiagoko egoeren kopuru metatua lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>V</mi><mrow><mn>6</mn><msup><mi>π</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>3</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mi>ε</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(elektroi-gasean ez bezala, hemen <strong>ez</strong> dago spinaren 2 faktorerik: gas klasiko bateko atomo edo molekula batek ez du endekapen hori). Egoeren dentsitatea deribatua da, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mi>G</mi><mi>/</mi><mi>d</mi><mi>ε</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>V</mi><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>3</mn></msup></mrow></mfrac><msup><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mn>3</mn></msup><msqrt><mi>ε</mi></msqrt></mrow></math>"
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "Maxwell-Boltzmannen banaketa eta partizio-funtzioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Boltzmannen banaketa jarraitua aplikatuz, <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mi>d</mi><mi>ε</mi></mrow></math>, partikula bakarraren partizio-funtzioa <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math>-ren integrala da energia guztien gainean. <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> aldagai-aldaketarekin eta <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><msqrt><mi>π</mi></msqrt><mi>/</mi><mn>4</mn></mrow></math> erabiliz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mi>d</mi><mi>ε</mi><mo>=</mo><mi>V</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><msup><mi>h</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(Plancken <math display=\"inline\"><mi>h</mi></math> konstantea modu naturalean agertzen da <math display=\"inline\"><mi>ħ</mi></math> eta <math display=\"inline\"><mi>π</mi></math>-ren berreturak sinplifikatzean). Ondoriozko energia-banaketa,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>N</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><msqrt><mi>ε</mi></msqrt><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mi>d</mi><mi>ε</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "gas monoatomiko baten energiarako <strong>Maxwell-Boltzmannen banaketa</strong> da."
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "Gas idealaren ekuazio termodinamikoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>z</mi></math> jadanik kalkulatuta dugula, <math display=\"inline\"><mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><msup><mi>z</mi><mi>N</mi></msup><mi>/</mi><mi>N</mi><mi>!</mi></mrow></math>, eta aurreko ataleko formula orokorrak erabiliz:"
    },
    {
     "mota": "testua",
     "html": "<strong>Barne-energia.</strong> <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>n</mi><mi>R</mi><mi>T</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi><mi>/</mi><msub><mi>N</mi><mi>A</mi></msub></mrow></math> mol erabiliz, <math display=\"inline\"><mrow><msub><mi>N</mi><mi>A</mi></msub><msub><mi>k</mi><mi>B</mi></msub><mo>=</mo><mi>R</mi></mrow></math>) — gas monoatomiko baterako ekipartizioaren emaitza klasikoa: <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> partikula bakoitzeko, erdi bana translazioko 3 askatasun-graduetako bakoitzeko."
    },
    {
     "mota": "testua",
     "html": "<strong>Bero espezifikoa.</strong> <math display=\"block\"><mrow><msub><mi>C</mi><mi>V</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>n</mi><mi>R</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Energia askea eta egoera-ekuazioa.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>F</mi><mi>/</mi><mi>∂</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>T</mi></msub></mrow></math> erabiliz (<math display=\"inline\"><mrow><mi>N</mi><mo>,</mo><mi>T</mi></mrow></math> finko izanik, <math display=\"inline\"><mrow><mi>z</mi><mo>∝</mo><mi>V</mi></mrow></math> baino ez da <math display=\"inline\"><mi>V</mi></math>-ren menpekoa):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>F</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>V</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mi>V</mi></mfrac><mo>=</mo><mfrac><mrow><mi>n</mi><msub><mi>N</mi><mi>A</mi></msub><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mi>V</mi></mfrac><mo>=</mo><mfrac><mrow><mi>n</mi><mi>R</mi><mi>T</mi></mrow><mi>V</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mi>V</mi><mo>=</mo><mi>n</mi><mi>R</mi><mi>T</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "gas idealaren egoera-ekuazioa, hemen printzipio estatistikoetatik eratorria, eta ez postulatu gisa aurkeztua, termodinamika klasikoan ohikoa den bezala."
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "Entropia eta Sackur-Tetroderen formula",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>z</mi></math> ordezkatuz <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>U</mi><mi>/</mi><mi>T</mi><mo>+</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo>−</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mi>!</mi></mrow></math> adierazpenean, eta Stirlingen formula erabiliz (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mi>!</mi><mo>≈</mo><mi>N</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mo>−</mo><mi>N</mi></mrow></math>), <strong>Sackur-Tetroderen ekuazioa</strong> lortzen da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><msup><mi>T</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi mathvariant=\"normal\">ln</mi><mfrac><mrow><mn>2</mn><mi>π</mi><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub></mrow><msup><mi>h</mi><mn>2</mn></msup></mfrac><mo>−</mo><mi mathvariant=\"normal\">ln</mi><mi>N</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Gas ideal baten entropiaren lehen adierazpena da oso-osorik mekanika estatistikotik lortua (ez integral <math display=\"inline\"><mrow><mi>d</mi><mi>S</mi><mo>=</mo><mi>d</mi><mi>Q</mi><mi>/</mi><mi>T</mi></mrow></math> mugagabe gisa, baizik eta gehitze-konstantea erabat determinatuta duela)."
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Aplikazioa: prozesu adiabatiko itzulgarriak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Prozesu adiabatiko itzulgarri batean sistema isolatuta dago; beraz, <math display=\"inline\"><mi>S</mi></math> konstante mantentzen da. Sackur-Tetroderen formulatik, <math display=\"inline\"><mi>N</mi></math> finkoan, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo></mrow></math> kte izateak <math display=\"inline\"><mrow><mi>V</mi><msup><mi>T</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>=</mo></mrow></math> kte eskatzen du (gainerako terminoak ez baitira <math display=\"inline\"><mi>V</mi></math>-ren ez <math display=\"inline\"><mi>T</mi></math>-ren menpekoak). Hasierako egoera <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mi>a</mi></msub><mo>,</mo><msub><mi>T</mi><mi>a</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> baten eta amaierako <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mi>b</mi></msub><mo>,</mo><msub><mi>T</mi><mi>b</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> baten artean:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mi>a</mi></msub><msubsup><mi>T</mi><mi>a</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msubsup><mo>=</mo><msub><mi>V</mi><mi>b</mi></msub><msubsup><mi>T</mi><mi>b</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msubsup><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mi>b</mi></msub><mo>=</mo><msub><mi>T</mi><mi>a</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>V</mi><mi>a</mi></msub><msub><mi>V</mi><mi>b</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta gas idealaren egoera-ekuazioarekin konbinatuz, presioetarako erlazio baliokidea lortzen da,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mi>b</mi></msub><mo>=</mo><msub><mi>P</mi><mi>a</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>V</mi><mi>a</mi></msub><msub><mi>V</mi><mi>b</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>5</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "— gas monoatomiko baten adiabatiken <math display=\"inline\"><mrow><mi>P</mi><msup><mi>V</mi><mi>γ</mi></msup><mo>=</mo></mrow></math> kte erlazio ezaguna (<math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>5</mn><mi>/</mi><mn>3</mn></mrow></math>), hemen Sackur-Tetroderen formulatik zuzenean lortua, aparteko postulatu gisa aurkeztu beharrean."
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "Maxwellen abiadura-banaketa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Energia-banaketa abiaduraren arabera berridatziz (<math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>ε</mi><mo>=</mo><mi>m</mi><mi>v</mi><mi>d</mi><mi>v</mi></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi><mo>=</mo><mn>4</mn><mi>π</mi><mi>N</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>m</mi><mrow><mn>2</mn><mi>π</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><msup><mi>v</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>d</mi><mi>v</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Maxwellen abiadura-banaketa <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: asimetrikoa da, maximoa\n  (abiadura probableena) <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> batez besteko\n  abiaduraren apur bat azpitik dagoela, eta azken hori, bere aldetik,\n  batez besteko abiadura koadratikoaren azpitik gelditzen da.",
     "src": "media/irudiak/f70c1bdaf6caf438.svg",
     "zabalera": 304
    },
    {
     "mota": "testua",
     "html": "Banaketa horretatik hiru abiadura berezi ondorioztatzen dira, bakoitza testuinguru desberdin batean erabilgarria:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mi>N</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>v</mi><mspace width=\"0.222em\"></mspace><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi><mo>=</mo><msqrt><mfrac><mrow><mn>8</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mrow><mi>π</mi><mi>m</mi></mrow></mfrac></msqrt><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (batez besteko abiadura) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mrow><mtext mathvariant=\"normal\">pro </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mi>m</mi></mfrac></msqrt><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (abiadura probableena, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -ren maximoa) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>r</mi></msub><mo>=</mo><msqrt><mfrac><mrow><mn>3</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mi>m</mi></mfrac></msqrt><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (batez besteko abiadura koadratikoa, </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -tik) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ohar zaitez <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>3</mn><mi>/</mi><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> bat datorrela goian partizio-funtzioaren bidez jadanik lortutako <math display=\"inline\"><mrow><mi>U</mi><mi>/</mi><mi>N</mi></mrow></math>-rekin: fisika bera dira, bi modu desberdinetan kalkulatua — 2. kapituluarekiko egiaztapen gurutzatu bat."
    },
    {
     "mota": "oharra",
     "titulua": "Magnitude tipikoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Giro-tenperaturako gas batentzat (<math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>∼</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>21</mn></mrow></msup></mrow></math> J), masa tipikoa <math display=\"inline\"><mrow><mi>m</mi><mo>∼</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> - <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>26</mn></mrow></msup></math> kg duten molekulekin, abiadura horiek <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>∼</mo><msup><mn>10</mn><mn>3</mn></msup></mrow></math> m/s ordenakoak dira — ehunka metro segundoko, aireko soinuaren abiaduraren parekoak."
      }
     ]
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "Formula barometrikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Energia zinetikoaz gain, partikulek grabitazio-energia potentziala ere badute (<math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>z</mi></mrow></math>; atmosfera isotermoa, tenperatura uniformea altuerarekin), eta Boltzmannen <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></math> faktorea bitan faktorizatzen da: zati zinetiko bat (<math display=\"inline\"><mi>z</mi></math>-ren menpekoa ez dena) eta menpekoa den beste bat:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>n</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>m</mi><mi>g</mi><mi>z</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau da <strong>formula barometrikoa</strong>: partikulen dentsitateak esponentzialki egiten du behera altuerarekin, <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> gainbehera-eskalarekin — zenbat eta arinagoa izan molekula eta altuagoa tenperatura, orduan eta handiagoa. Egitura matematikoa 2. kapituluko energia-maila diskretuen arteko Boltzmannen banaketarena bera da, orain energia potentzialaren &quot;maila&quot; jarraitu bati aplikatua."
    }
   ]
  },
  {
   "id": "a37",
   "maila": 2,
   "izenburua": "Gibbsen paradoxa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kontsidera ditzagun bi konpartimentu berdin, bakoitza gas baten <math display=\"inline\"><mi>N</mi></math> partikularekin, tenperatura <math display=\"inline\"><mi>T</mi></math> eta bolumen <math display=\"inline\"><mi>V</mi></math> berean, horma batez bereizita. Horma kentzean, gas bakoitzarentzat eskuragarri dagoen bolumena bikoiztu egiten da (<math display=\"inline\"><mrow><mi>V</mi><mo>→</mo><mn>2</mn><mi>V</mi></mrow></math>); sistemaren entropia-aldaketa Sackur-Tetroderen formularekin kalkulatuko dugu, bi kasutan."
    },
    {
     "mota": "testua",
     "html": "<strong>Gas desberdinak (<math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≠</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>).</strong> Horma kendu aurretik, <math display=\"inline\"><mrow><msubsup><mi>S</mi><mtext mathvariant=\"normal\">total</mtext><mi>h</mi></msubsup><mo>=</mo><msubsup><mi>S</mi><mn>1</mn><mi>h</mi></msubsup><mo>+</mo><msubsup><mi>S</mi><mn>2</mn><mi>h</mi></msubsup></mrow></math> (gas bakoitza bere <math display=\"inline\"><mi>V</mi></math> bolumenean); ondoren, <math display=\"inline\"><mrow><msubsup><mi>S</mi><mtext mathvariant=\"normal\">total</mtext><mi>b</mi></msubsup><mo>=</mo><msubsup><mi>S</mi><mn>1</mn><mi>b</mi></msubsup><mo>+</mo><msubsup><mi>S</mi><mn>2</mn><mi>b</mi></msubsup></mrow></math> (gas bakoitza <math display=\"inline\"><mrow><mn>2</mn><mi>V</mi></mrow></math>-ra hedatuta, bestearekin nahastuta, baina horrek ez dio haren entropiari eragiten, espezie desberdinak baitira). Aldaketa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><msubsup><mi>S</mi><mtext mathvariant=\"normal\">total</mtext><mi>b</mi></msubsup><mo>−</mo><msubsup><mi>S</mi><mtext mathvariant=\"normal\">total</mtext><mi>h</mi></msubsup><mo>=</mo><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "emaitza fisikoki zentzuzkoa: nahaste-entropia handitu egiten da, gas bakoitza bolumen handiago batera hedatu delako (tartean beste gasik dagoen ala ez gorabehera) — hauxe da, hain zuzen ere, hedapen askearen formula termodinamiko elementalak emango lukeen <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi></mrow></math> bera, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>V</mi><mi>f</mi></msub><mi>/</mi><msub><mi>V</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> gas bakoitzeko."
    },
    {
     "mota": "testua",
     "html": "<strong>Gas bera (<math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi></mrow></math>), <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>N</mi><mi>!</mi></mrow></math> faktorerik gabe.</strong> Kalkulua <math display=\"inline\"><mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><msup><mi>z</mi><mi>N</mi></msup></mrow></math> erabiliz errepikatuta (partikula &quot;bereizgarriak&quot;), gas desberdinen kasuko <strong>berbera den</strong> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math> lortzen da. Hor dago paradoxa: bi konpartimentuek gas bera badute, horma kentzeak ez luke ezer aldatu behar fisikoki (egoera makroskopikoa bera da, partikulak elkarren artean bereizezinak baitira) — entropia ez litzateke inola ere handitu behar. Baina kalkulu &quot;bereizgarriak&quot; gasak desberdinak balira bezalako igoera bera aurresaten du."
    },
    {
     "mota": "testua",
     "html": "<strong>Ebazpena: <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>N</mi><mi>!</mi></mrow></math> faktorea.</strong> Kalkulua <math display=\"inline\"><mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><msup><mi>z</mi><mi>N</mi></msup><mi>/</mi><mi>N</mi><mi>!</mi></mrow></math> erabiliz errepikatuta (partikula bereizezinak) gas beraren kasurako, <math display=\"inline\"><mrow><mi>−</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mi>!</mi></mrow></math> terminoak ez dira jadanik berdin baliogabetzen, eta bi egoeren artean:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><msup><mi>S</mi><mi>b</mi></msup><mo>−</mo><msup><mi>S</mi><mi>h</mi></msup><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Gibbsen paradoxak zera erakusten du: <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>N</mi><mi>!</mi></mrow></math> faktorea ez da normalizazio-xehetasun huts bat: <strong>beharrezkoa</strong> da mekanika estatistiko klasikoak partikula bereizezinekin emaitza fisikoki zentzuzkoak eman ditzan, eta (jadanik testuinguru klasiko huts-hutsean) mekanika kuantikoak geroago egingo duen fermioi/bosoi bereizketa aurreratzen du."
    }
   ]
  },
  {
   "id": "a38",
   "maila": 1,
   "izenburua": "Errotore zurruna eta molekula diatomikoa",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kapitulu honek erabiltzailearen beraren (Mikel Aguirre) oharrak erreproduzitu eta garatzen ditu — fisika modernoko koadernoa, &quot;2. Blokea: Mekanika Estatistikoa&quot;, 15. gaia. Ez da hirugarren batzuen liburua. Aurreko kapituluko gas ideala (<strong>gas monoatomiko</strong> baterako baliozkoa, energia-era bakarra translazioa delarik) molekula <strong>diatomikoaren</strong> kasura hedatzen du; molekula horrek, gainera, biratu eta bibratu egin dezake."
      }
     ]
    }
   ]
  },
  {
   "id": "a39",
   "maila": 2,
   "izenburua": "Hiru energia-era",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Atomo isolatu batentzat, energia posible bakarra translaziokoa da: <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><msub><mi>ε</mi><mi>t</mi></msub></mrow></math>. Molekula diatomiko batek —<math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> masako bi atomo, <math display=\"inline\"><mi>d</mi></math> distantziaz bereizita— beste bi energia-era ditu gainera: <strong>biraketa</strong>rena (<math display=\"inline\"><msub><mi>ε</mi><mtext mathvariant=\"normal\">rot</mtext></msub></math>), masa-zentroaren ingurukoa, eta loturaren <strong>bibrazioa</strong>rena (<math display=\"inline\"><msub><mi>ε</mi><mtext mathvariant=\"normal\">vib</mtext></msub></math>); azken horrek <math display=\"inline\"><mi>d</mi></math> luzera aldakorreko osziladore harmoniko baten gisa jokatzen du. Molekularen energia osoa hiruren batura da, elkarrekiko independenteak izanik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ε</mi><mo>=</mo><msub><mi>ε</mi><mi>t</mi></msub><mo>+</mo><msub><mi>ε</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>+</mo><msub><mi>ε</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Askatasun-graduak zenbatuz: 3 translaziokoak, 2 biraketakoak (molekularen ardatza orientatzen duten bi angeluak; ardatzaren beraren inguruko biraketa ez da kontatzen, simetriagatik), eta 1 bibraziokoa (harmonikoa denez, birritan kontatzen dena: energia zinetikoa eta potentziala). 6 guztira, molekula osatzen duten 2 atomoetako bakoitzaren 3 askatasun-graduekin koherentea."
    },
    {
     "mota": "testua",
     "html": "Hiru energiak independenteak direnez, molekula bakar baten partizio-funtzioa faktorizatu egiten da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><msub><mi>z</mi><mi>t</mi></msub><mo>×</mo><msub><mi>z</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>×</mo><msub><mi>z</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "eta faktore bakoitza bereiz kalkula daiteke. <math display=\"inline\"><msub><mi>z</mi><mi>t</mi></msub></math> aurreko kapituluan kalkulatu zen jada, <math display=\"inline\"><mrow><msub><mi>z</mi><mi>t</mi></msub><mo>=</mo><msup><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mi>/</mi><msup><mi>h</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>, eta hortik betiko <math display=\"inline\"><mrow><msub><mi>U</mi><mi>t</mi></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mi>t</mi></mrow></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> ateratzen dira."
    }
   ]
  },
  {
   "id": "a40",
   "maila": 2,
   "izenburua": "Biraketa: errotore zurruna",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Errotore zurrun gisa tratatutako molekula baten momentu angeluarra kuantizatuta dago, <math display=\"inline\"><mrow><msup><mi>J</mi><mn>2</mn></msup><mo>=</mo><msup><mi>ħ</mi><mn>2</mn></msup><mi>j</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>j</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik, <math display=\"inline\"><mrow><mi>j</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> (momentu angeluar orbitalaren zenbaki kuantikoa), eta <math display=\"inline\"><mi>j</mi></math> maila bakoitzak <math display=\"inline\"><mrow><msub><mi>g</mi><mi>j</mi></msub><mo>=</mo><mn>2</mn><mi>j</mi><mo>+</mo><mn>1</mn></mrow></math> endekapena du (<math display=\"inline\"><mrow><mn>2</mn><mi>j</mi><mo>+</mo><mn>1</mn></mrow></math> balio posible baititu <math display=\"inline\"><mrow><msub><mi>J</mi><mi>z</mi></msub><mo>=</mo><mi>m</mi><mi>ħ</mi></mrow></math> osagaiak, <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mi>−</mi><mi>j</mi><mo>,</mo><mi>…</mi><mo>,</mo><mi>j</mi></mrow></math>). Dagokion biraketa-energia honako hau da"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ε</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><msup><mi>J</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>I</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>I</mi></mrow></mfrac><mi>j</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>j</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi>I</mi></math> molekularen inertzia-momentua baita. Biraketaren partizio-funtzioa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>z</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>j</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>ħ</mi><mn>2</mn></msup><mi>j</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>j</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>I</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Biraketa-tenperatura ezaugarria</strong> definituz, <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msup><mi>ħ</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>I</mi><msub><mi>k</mi><mi>B</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, batukaria integral batez hurbil daiteke <math display=\"inline\"><mrow><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">rot</mtext></msub></mrow></math> denean (giro-tenperaturako ohiko kasua, ikusiko denez), <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>j</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>j</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mi>d</mi><mi>x</mi><mo>≈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>j</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>j</mi></mrow></math> aldaketarekin:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>z</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mn>2</mn><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mi>T</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mi>T</mi><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta hortik, ohiko formulekin <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>d</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub></mrow><mrow><mi>d</mi><mi>T</mi></mrow></mfrac></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>U</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mtext mathvariant=\"normal\">rot</mtext></mrow></msub><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Zenbakizko adibidea.</strong> N₂ molekularako (<math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1.1</mn></mrow></math> Å, masa murriztua <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>m</mi><mi>/</mi><mn>2</mn><mo>≈</mo><mn>7</mn><mo>×</mo><mn>1.66</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg, <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mi>μ</mi><msup><mi>d</mi><mn>2</mn></msup><mo>≈</mo><mn>1.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>46</mn></mrow></msup></mrow></math> kg m<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math>): <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>2.9</mn></mrow></math> K. H₂ molekularako (askoz arinagoa): <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>86</mn></mrow></math> K. Bi kasuetan, <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≪</mo><msub><mi>T</mi><mrow><mtext mathvariant=\"normal\">giroa </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>300</mn></mrow></math> K; beraz, hurbilketa integrala (<math display=\"inline\"><mrow><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">rot</mtext></msub></mrow></math>) bikaina da giro-tenperaturan ia edozein molekula diatomiko arrunterako."
    }
   ]
  },
  {
   "id": "a41",
   "maila": 2,
   "izenburua": "Bibrazioa: loturaren osziladore harmonikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Lotura <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>μ</mi></mrow></msqrt></mrow></math> maiztasuneko osziladore harmoniko kuantiko gisa modelatzen da (<math display=\"inline\"><mi>k</mi></math> loturaren konstante elastiko eraginkorra eta <math display=\"inline\"><mi>μ</mi></math> masa murriztua dira), honako energia-mailekin: <math display=\"inline\"><mrow><msub><mi>ε</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>h</mi><mi>ν</mi></mrow></math>. Einstein-en solidoan eta Fisika Modernoko Planck-en osziladorean agertu den osziladore mota bera da. <strong>Bibrazio-tenperatura</strong> <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>h</mi><mi>ν</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> definituz, partizio-funtzioa (ohiko serie geometriko bera) eta barne-energia honako hauek dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>z</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mn>2</mn><mi>T</mi></mrow></msup><mrow><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mi>T</mi></mrow></msup></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>U</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mfrac><mrow><msup><mi>e</mi><mrow><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mi>T</mi></mrow></msup><mo>+</mo><mn>1</mn></mrow><mrow><msup><mi>e</mi><mrow><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mi>T</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta bibraziozko bero espezifikoa,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mtext mathvariant=\"normal\">vib</mtext></mrow></msub><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mfrac><msup><mi>e</mi><mrow><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mi>T</mi></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mi>T</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau, <strong>zehatz-mehatz</strong>, Einsteinen solidoaren (4. kapitulua) bero espezifikoaren adierazpen funtzional berbera da — ez da kasualitatea: bi kasuetan osziladore harmoniko kuantiko independenteak ditugu, eta tenperatura baxuetako &quot;izoztearen&quot; fisika berbera da."
    },
    {
     "mota": "testua",
     "html": "<strong>Zenbakizko adibidea.</strong> <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub></math>(H₂)<math display=\"inline\"><mrow><mo>≈</mo><mn>6210</mn></mrow></math> K, <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub></math>(N₂)<math display=\"inline\"><mrow><mo>≈</mo><mn>3340</mn></mrow></math> K — bi kasuetan <math display=\"inline\"><msub><mi>T</mi><mtext mathvariant=\"normal\">giro</mtext></msub></math> baino askoz ere handiagoa: biraketaren justu kontrako kasua."
    }
   ]
  },
  {
   "id": "a42",
   "maila": 2,
   "izenburua": "Bero espezifikoaren zapaldak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hiru limiteak laburbilduz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mi>t</mi></mrow></msub><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (beti)</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mtext mathvariant=\"normal\">rot</mtext></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">rot</mtext></msub></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>T</mi><mo>≪</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">rot</mtext></msub></mtd></mtr></mtable></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mtext mathvariant=\"normal\">vib</mtext></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>T</mi><mo>≪</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub></mtd></mtr></mtable></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><msub><mi>C</mi><mi>V</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mi>t</mi></mrow></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mtext mathvariant=\"normal\">rot</mtext></mrow></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mtext mathvariant=\"normal\">vib</mtext></mrow></msub></mrow></math> baita. Molekula diatomiko arrunt gehienetarako <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≪</mo><msub><mi>T</mi><mrow><mtext mathvariant=\"normal\">giro </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≪</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub></mrow></math> denez, gas diatomiko baten bero espezifikoak hiru erregimen edo &quot;zapalda&quot; erakusten ditu tenperaturaren arabera:"
    },
    {
     "mota": "irudia",
     "oina": "Molekula diatomiko baten bero espezifikoa <math display=\"inline\"><mi>T</mi></math>-ren funtzioan (eskala\n  logaritmikoa): hiru zapalda, <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> (translazioa bakarrik, <math display=\"inline\"><mrow><mi>T</mi><mo>≪</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">rot</mtext></msub></mrow></math>),\n  <math display=\"inline\"><mrow><mn>5</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> (translazioa + biraketa, <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≪</mo><mi>T</mi><mo>≪</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub></mrow></math>)\n  eta <math display=\"inline\"><mrow><mn>7</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> (hirurak, <math display=\"inline\"><mrow><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub></mrow></math>) — bibrazioa\n  biraketa baino askoz beranduago &quot;aktibatzen&quot; da, <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≫</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">rot</mtext></msub></mrow></math> delako,\n  ia edozein molekula diatomiko arruntetan.",
     "src": "media/irudiak/da1df6e27436068d.svg",
     "zabalera": 390
    },
    {
     "mota": "testua",
     "html": "Askatasun-graduen &quot;izozte kuantiko&quot; bera da hau, Einsteinen solidoarekin (4. kapitulua) jadanik ikusi genuena: askatasun-gradu bakoitzak bero espezifikoari ekarpena egiten dio —bere ekipartizio-balio klasikoarekin— soilik <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>-k askatasun-gradu horren energia-kuantu ezaugarria gainditzen duenean (<math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi></mrow></math> bibraziorako, <math display=\"inline\"><mrow><msup><mi>ħ</mi><mn>2</mn></msup><mi>/</mi><mi>I</mi></mrow></math> biraketarako)."
    },
    {
     "mota": "oharra",
     "titulua": "O₂-aren kasua giro-tenperaturan",
     "blokeak": [
      {
       "mota": "testua",
       "html": "O₂-arentzat (<math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>2.1</mn></mrow></math> K, <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>2200</mn></mrow></math> K), <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>298</mn></mrow></math> K garbi dago tarteko zapaldan: <math display=\"inline\"><mrow><msub><mi>C</mi><mi>V</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mi>t</mi></mrow></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mtext mathvariant=\"normal\">rot</mtext></mrow></msub><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>, bibrazio-ekarpena balio horren <math display=\"inline\"><mn>1</mn></math> - <math display=\"inline\"><mrow><mn>2</mn><mi>%</mi></mrow></math> baten ordenakoa izanik — ia erabat izoztuta, <math display=\"inline\"><mrow><mi>T</mi><mi>/</mi><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>0.14</mn><mo>≪</mo><mn>1</mn></mrow></math> delako."
      }
     ]
    }
   ]
  },
  {
   "id": "a43",
   "maila": 1,
   "izenburua": "Ariketa ofizialak (UPV/EHU)",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "espazio-ontzia/10_fisika_modernoa/fismoderna_analizaryextraer/fismo_2bloque_ejercicios",
     "xehetasuna": "Fisika Modernoa, Fisikako Gradua/Ingeniaritza Elektronikoko Gradua, ZTF-UPV/EHU. Boletin ofiziala, gaiaka (11.-16. gaiak), Emaitzak orriarekin eta ebazpen eskuzkribatuarekin.",
     "hizkuntza": "eu"
    },
    {
     "mota": "oharra",
     "titulua": "Transkripzio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Buletin hauek enuntziatuarekin <strong>eta</strong> ebazpen ofizialarekin sartu dira, Fisika Modernoko azterketa-kapituluetan bezala. Problema batzuk bloke honetako 1-7 kapituluetako teoriaz estalita daude jadanik (adierazita daude); hala ere, hemen oso-osorik transkribatzen dira, iturriarekiko leialtasunagatik. Ebazpena jatorrizko dokumentuan garatuta ez dagoenean, argi eta garbi adierazten da, asmatzen ibili beharrean."
      }
     ]
    }
   ]
  },
  {
   "id": "a44",
   "maila": 2,
   "izenburua": "11. gaia",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Emaitza-orririk gabeko buletina",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hurrengo buletinek ez bezala, honek ez du &quot;Emaitzak&quot; orri argazkiraturik — baina bai ebazpen eskuizkribatu osoa hiru problemetarako."
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
       "html": "Txanpon gorri-urdin bat <math display=\"inline\"><mi>N</mi></math> aldiz jaurtitzen da; <math display=\"inline\"><mi>n</mi></math> gorri eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> urdin lortzeko probabilitatea banaketa-funtzio honek ematen du: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mn>2</mn><mi>N</mi></msup></mfrac><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mi>N</mi></math> bikoitia bada, frogatu <math display=\"inline\"><mrow><mi>n</mi><mo>&lt;</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>-rako <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> banaketa-funtzioa gorakorra dela, hau da, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"inline\"><mi>N</mi></math> bikoitia bada, frogatu <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>-rako <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> banaketa-funtzioa beherakorra dela, hau da, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "c) Aurreko bi atalak kontuan hartuta, frogatu <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> banaketa-funtzioa maximoa dela <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>-n."
      },
      {
       "mota": "testua",
       "html": "d) <math display=\"inline\"><mi>N</mi></math> bakoitia bada, frogatu <math display=\"inline\"><mrow><mi>n</mi><mo>&lt;</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>-rako <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> banaketa-funtzioa gorakorra dela, hau da, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "e) <math display=\"inline\"><mi>N</mi></math> bakoitia bada, frogatu <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>-rako <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> banaketa-funtzioa beherakorra dela, hau da, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "f) Aurreko bi atalak kontuan hartuta, frogatu <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> banaketa-funtzioaren maximoa <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>±</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>-n dagoela."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mi>/</mi><msup><mn>2</mn><mi>N</mi></msup><mspace width=\"0.222em\"></mspace><mi>N</mi><mi>!</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mi>/</mi><msup><mn>2</mn><mi>N</mi></msup><mspace width=\"0.222em\"></mspace><mi>N</mi><mi>!</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo>−</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mi>n</mi></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>n</mi><mo>&lt;</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>-rako: <math display=\"block\"><mrow><mfrac><mrow><mi>N</mi><mo>−</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mi>n</mi></mfrac><mo>&gt;</mo><mfrac><mrow><mi>N</mi><mo>−</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>+</mo><mn>1</mn></mrow><mrow><mi>N</mi><mi>/</mi><mn>2</mn></mrow></mfrac><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><mn>2</mn><mi>N</mi></mfrac><mo>&gt;</mo><mn>1</mn><mi>.</mi></mrow></math> Zatidura 1 baino handiagoa denez, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: funtzioa gorakorra da."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo>−</mo><mi>n</mi></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>-rako: <math display=\"block\"><mrow><mfrac><mrow><mi>N</mi><mo>−</mo><mi>n</mi></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>&lt;</mo><mfrac><mrow><mi>N</mi><mo>−</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow><mrow><mi>N</mi><mi>/</mi><mn>2</mn><mo>+</mo><mn>1</mn></mrow></mfrac><mo>&lt;</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mi>N</mi></mfrac><mo>&lt;</mo><mn>1</mn><mi>.</mi></mrow></math> Zatidura 1 baino txikiagoa denez, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: funtzioa beherakorra da."
      },
      {
       "mota": "testua",
       "html": "c) (a) eta (b)-tik: <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> gorakorra da <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>-raino, eta handik aurrera beherakorra; beraz, maximoa <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>-n dago."
      },
      {
       "mota": "testua",
       "html": "d) (a)-n bezala, <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow><mi>n</mi></mfrac><mo>−</mo><mn>1</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>n</mi><mo>&lt;</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>-rako: <math display=\"block\"><mrow><mfrac><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow><mi>n</mi></mfrac><mo>−</mo><mn>1</mn><mo>&gt;</mo><mfrac><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></mfrac><mo>−</mo><mn>1</mn><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo>+</mo><mn>3</mn></mrow><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>&gt;</mo><mn>1</mn><mo>,</mo></mrow></math> beraz, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: gorakorra."
      },
      {
       "mota": "testua",
       "html": "e) (b)-n bezala, <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mn>1</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>-rako: <math display=\"block\"><mrow><mfrac><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mn>1</mn><mo>&lt;</mo><mfrac><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn><mo>+</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mn>1</mn><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>N</mi><mo>+</mo><mn>3</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow><mrow><mi>N</mi><mo>+</mo><mn>3</mn></mrow></mfrac><mo>&lt;</mo><mn>1</mn><mo>,</mo></mrow></math> beraz, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: beherakorra."
      },
      {
       "mota": "testua",
       "html": "f) (d) eta (e)-tik: <math display=\"inline\"><mi>N</mi></math> bakoitirako, <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> gorakorra da <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>-raino eta beherakorra <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>-tik aurrera; zuzenean egiaztatuz <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dela (zentroarekiko simetrikoak dira), bi balioak probabilitate bereko maximoak dira — <math display=\"inline\"><mi>N</mi></math> bikoitiaren kasuan ez bezala, non maximoa bakarra baita."
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
       "html": "Txanpon gorri/urdin bat <math display=\"inline\"><mi>N</mi></math> aldiz jaurtitzean, <math display=\"inline\"><mrow><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math> gorri eta <math display=\"inline\"><mrow><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math> urdin lortzeko probabilitatea da posible guztietan handiena, <math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mi>N</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mfrac></mrow></math> <math display=\"inline\"><mi>N</mi></math> oso handia izanik, egoera horretatik desbideratzeko probabilitatea oso txikia dela egiaztatzeko: kalkulatu zein den <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lortzeko probabilitateen arteko zatidura, hurrenez hurren, eta, ondoren, kalkulatu zein den <math display=\"inline\"><mi>m</mi></math>-ren balioa zatidura hori maximoaren erdia izateko. Egiaztatu <math display=\"inline\"><mrow><mi>m</mi><mo>∼</mo><msqrt><mi>N</mi></msqrt></mrow></math> dela; beraz, desbiderapen erlatiboa <math display=\"inline\"><mrow><mi>m</mi><mi>/</mi><mi>N</mi><mo>≪</mo><mn>1</mn></mrow></math> da. Adibidez, <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><msup><mn>10</mn><mn>24</mn></msup></mrow></math>-rako, egiaztatu <math display=\"inline\"><msup><mn>10</mn><mn>12</mn></msup></math> txanponetik bat orekatik desbideratzeko probabilitatea probabilitate maximoaren erdia dela. <strong>Laguntza:</strong> idatzi berdintasuna, hartu logaritmoak eta erabili Stirlingen hurbilketa."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Eskatutako zatidura, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>/</mi><msup><mn>2</mn><mi>N</mi></msup><mspace width=\"0.222em\"></mspace><mi>N</mi><mi>!</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> erabiliz: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math> (<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mn>2</mn><mi>N</mi></msup><mi>N</mi><mi>!</mi></mrow></math> faktoreak sinplifikatu egiten dira). Ondoren, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren balioa <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> maximoaren erdiarekin berdinduz: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo>=</mo><mn>2</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mrow><mn>2</mn><mi>!</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> Logaritmoak hartuz eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>a</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>b</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>a</mi><mi>b</mi></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>b</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>a</mi></mrow></math> erabiliz: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mrow><mn>2</mn><mi>!</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> Stirlingen <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>!</mi><mo>=</mo><mi>n</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>n</mi><mo>−</mo><mi>n</mi></mrow></math> hurbilketarekin faktorial bakoitza garatuz (termino linealak, <math display=\"inline\"><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>N</mi></mrow></math>, eskuineko aldeko <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>N</mi></mrow></math>-rekin ezabatzen dira): <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mo>+</mo><mi>N</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo>+</mo><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo>−</mo><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>2</mn><mi>m</mi><mi>/</mi><mi>N</mi></mrow></math> aldaketarekin (hau da, <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mi>α</mi><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>), eta <math display=\"inline\"><mrow><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>-z zatituz: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mi>N</mi></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math> <math display=\"inline\"><mrow><mi>N</mi><mo>≫</mo><mn>1</mn></mrow></math> denean, eskuineko aldea oso txikia da; beraz, <math display=\"inline\"><mrow><mi>α</mi><mo>≪</mo><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>±</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>±</mi><mi>α</mi><mo>−</mo><msup><mi>α</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></math> garatuz eta ordezkatuz, termino linealak eta kubikoak ezabatu egiten dira, eta bigarren ordenean geratzen da: <math display=\"block\"><mrow><msup><mi>α</mi><mn>2</mn></msup><mo>≈</mo><mfrac><mn>2</mn><mi>N</mi></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>α</mi><mo>≈</mo><msqrt><mfrac><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow><mi>N</mi></mfrac></msqrt></mrow></math> eta, beraz, <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mi>α</mi><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>-rekin: <math display=\"block\"><mrow><mi>m</mi><mo>≈</mo><msqrt><mfrac><mrow><mi>N</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow><mn>2</mn></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mi>m</mi><mi>N</mi></mfrac><mo>≈</mo><msqrt><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><mn>2</mn><mrow><mn>2</mn><mi>N</mi></mrow></mfrac></mrow></msqrt><mo>∼</mo><mfrac><mn>1</mn><msqrt><mi>N</mi></msqrt></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Honekin, orekako <math display=\"inline\"><mrow><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>-<math display=\"inline\"><mrow><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math> banaketarekiko desbiderapen erlatiboa <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msqrt><mi>N</mi></msqrt></mrow></math> bezala jaisten da: <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><msup><mn>10</mn><mn>24</mn></msup></mrow></math>-rako, <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup></math> ordenakoa — enuntziatuarekin bat, hark egiaztatzeko eskatzen baitu <math display=\"inline\"><msup><mn>10</mn><mn>12</mn></msup></math> txanponetik bateko desbiderapenak probabilitatea maximoaren erdira jaisten duela jada."
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
       "html": "Kalkulatu aurreko emaitza zehatzago. Erabili honako erlazio hau: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>N</mi></munderover><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><msup><mn>2</mn><mi>N</mi></msup><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "a) Frogatu <math display=\"inline\"><mi>n</mi></math>-ren batezbestekoa hau dela: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>N</mi></munderover><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>N</mi></munderover><mi>n</mi><mfrac><mn>1</mn><msup><mn>2</mn><mi>N</mi></msup></mfrac><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mi>N</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Frogatu <math display=\"inline\"><msup><mi>n</mi><mn>2</mn></msup></math> magnitudearen batezbestekoa hau dela: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>N</mi></munderover><msup><mi>n</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>N</mi></munderover><msup><mi>n</mi><mn>2</mn></msup><mfrac><mn>1</mn><msup><mn>2</mn><mi>N</mi></msup></mfrac><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>4</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) Frogatu desbiderapen estandarra hau dela: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>n</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mfrac><msqrt><mi>N</mi></msqrt><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mrow><mi>n</mi><mi>/</mi><mi>n</mi><mi>!</mi><mo>=</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math>-rekin eta <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math>-rekin, <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mi>N</mi><mo>−</mo><mn>1</mn></mrow></math>-rekin: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><mfrac><mi>n</mi><msup><mn>2</mn><mi>N</mi></msup></mfrac><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mn>2</mn><mi>N</mi></msup></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mi>N</mi><msup><mn>2</mn><mi>N</mi></msup></mfrac><munderover><mo>∑</mo><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow><mi>M</mi></munderover><mfrac><mrow><mi>M</mi><mi>!</mi></mrow><mrow><mi>m</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mi>N</mi><msup><mn>2</mn><mi>N</mi></msup></mfrac><msup><mn>2</mn><mi>M</mi></msup><mo>=</mo><mfrac><mi>N</mi><msup><mn>2</mn><mi>N</mi></msup></mfrac><msup><mn>2</mn><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>=</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo>,</mo></mrow></math> enuntziatuko <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>m</mi></msub><mi>M</mi><mi>!</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mn>2</mn><mi>M</mi></msup></mrow></math> erlazioa erabiliz."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"inline\"><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>n</mi></mrow></math> banatuz: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> Lehen terminorako, <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>n</mi><mi>!</mi><mo>=</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math>-rekin eta <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mi>n</mi><mo>−</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mi>N</mi><mo>−</mo><mn>2</mn></mrow></math> aldaketarekin: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mi>N</mi></munderover><mfrac><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mn>2</mn><mi>N</mi></msup></mfrac><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mn>2</mn><mi>N</mi></msup></mfrac><munderover><mo>∑</mo><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow><mi>M</mi></munderover><mfrac><mrow><mi>M</mi><mi>!</mi></mrow><mrow><mi>m</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mn>2</mn><mi>N</mi></msup></mfrac><msup><mn>2</mn><mi>M</mi></msup><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>4</mn><mi>.</mi></mrow></mfrac></mrow></math> Bigarren terminoa batuz, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math> ((a) atalekoa): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>4</mn></mfrac><mo>+</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><msup><mi>N</mi><mn>2</mn></msup><mo>−</mo><mi>N</mi><mo>+</mo><mn>2</mn><mi>N</mi></mrow><mn>4</mn></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>4</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"normal\">Δ</mi><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>4</mn></mfrac><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mrow><msup><mi>N</mi><mn>2</mn></msup><mo>+</mo><mi>N</mi><mo>−</mo><msup><mi>N</mi><mn>2</mn></msup></mrow><mn>4</mn></mfrac><mo>=</mo><mfrac><mi>N</mi><mn>4</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>n</mi><mo>=</mo><mfrac><msqrt><mi>N</mi></msqrt><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math> Eta desbiderapen <strong>erlatiboa</strong>: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>n</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><msqrt><mi>N</mi></msqrt><mi>/</mi><mn>2</mn></mrow><mrow><mi>N</mi><mi>/</mi><mn>2</mn></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>N</mi></msqrt></mfrac><mo>,</mo></mrow></math> zeina <math display=\"inline\"><mrow><mo>→</mo><mn>0</mn></mrow></math> baita <math display=\"inline\"><mrow><mi>N</mi><mo>→</mo><mi>∞</mi></mrow></math> limitean: zenbat eta handiagoa izan sistema, orduan eta estuagoa da (erlatiboki) <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren gailurra <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>-ren inguruan — 1. kapituluak frogatu gabe baieztatzen duen &quot;zabalera erlatiboa <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msqrt><mi>N</mi></msqrt></mrow></math> bezala jaisten da&quot; zenbatespen kualitatiboaren bertsio zehatz eta zorrotza da, eta 2. problemaren emaitzaren ordena berekoa."
      }
     ]
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "12. eta 13. gaiak",
   "blokeak": [
    {
     "mota": "problema",
     "izena": "[1. kapituluan estalia: Einsteinen solidoa]",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sistema batean energia-mailak honako hauek dira, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>ε</mi><mo>,</mo><mn>2</mn><mi>ε</mi><mo>,</mo><mn>3</mn><mi>ε</mi><mo>,</mo><mi>…</mi></mrow></math> Demagun sistemak 10 partikula dituela eta barneko energia <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mn>6</mn><mi>ε</mi></mrow></math> dela. Kalkulatu zein izan daitezkeen sistemaren makroegoera guztiak. Kalkulatu makroegoera bakoitzaren mikroegoera kopurua. Zeinek dauka kopururik handiena? Ariketa egiteko, saiatu <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>-ren adierazpen orokorra ez erabiltzen."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Energia osoa (10 partikula, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mn>6</mn><mi>ε</mi></mrow></math>) banatzeko modu guztiak zerrendatuz, eta bakoitzaren <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> koefiziente multinomialaren bidez kalkulatuz:"
      },
      {
       "mota": "taula-kutxa",
       "oina": "<math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mn>6</mn><mi>ε</mi></mrow></math> energia osoko 11 makroegoerak (10 osziladore\n    bereizgarri): errenkada bakoitzak adierazten du zenbat osziladore\n    dauden energia-maila bakoitzean (<math display=\"inline\"><mi>ε</mi></math> unitateetan), eta bere\n     <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> aniztasuna. Bi makroegoera desberdinek partekatzen dute\n    aniztasunik handiena, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>1260</mn></mrow></math>.",
       "blokeak": [
        {
         "mota": "testua",
         "html": "table( columns: 2, align: (left, center), [10 osziladoreen banaketa (maila: zenbat)], [<math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>], [<math display=\"inline\"><mrow><mn>6</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>9</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>!</mi><mn>9</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>10</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>5</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>8</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>!</mi><mn>1</mn><mi>!</mi><mn>8</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>90</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>4</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>8</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>!</mi><mn>1</mn><mi>!</mi><mn>8</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>90</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>4</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>:</mo><mn>2</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>7</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>!</mi><mn>2</mn><mi>!</mi><mn>7</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>360</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>3</mn><mo>:</mo><mn>2</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>8</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>!</mi><mn>8</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>45</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>3</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>7</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>!</mi><mn>1</mn><mi>!</mi><mn>1</mn><mi>!</mi><mn>7</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>720</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>3</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>:</mo><mn>3</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>6</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>!</mi><mn>3</mn><mi>!</mi><mn>6</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>840</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>2</mn><mo>:</mo><mn>3</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>7</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>!</mi><mn>7</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>120</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>2</mn><mo>:</mo><mn>2</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>:</mo><mn>2</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>6</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>!</mi><mn>2</mn><mi>!</mi><mn>6</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1260</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>2</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>:</mo><mn>4</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>5</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>!</mi><mn>4</mn><mi>!</mi><mn>5</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1260</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>1</mn><mo>:</mo><mn>6</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>4</mn></mrow></math>], [<math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>!</mi><mn>4</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>210</mn></mrow></math>], )"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "11 makroegoera daude guztira, eta aniztasun guztiak batuz <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>10</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>10</mn><mo>+</mo><mn>90</mn><mo>+</mo><mn>90</mn><mo>+</mo><mn>360</mn><mo>+</mo><mn>45</mn><mo>+</mo><mn>720</mn><mo>+</mo><mn>840</mn><mo>+</mo><mn>120</mn><mo>+</mo><mn>1260</mn><mo>+</mo><mn>1260</mn><mo>+</mo><mn>210</mn><mo>=</mo><mn>5005</mn></mrow></math> berreskuratzen da — 1. kapituluan jadanik erabilitako <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mrow><mi>N</mi><mo>+</mo><mi>q</mi><mo>−</mo><mn>1</mn></mrow><mi>q</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> formula konbinatorioak zuzenean ematen duen emaitza bera, hemen banaketa posible bakoitzaren zerrenda esplizituaren bidez lortua, formula itxiaren ordez."
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
       "html": "Atomoetan, elektroien energia-mailen arteko aldearen magnitude-ordena elektroi-volta da. Sistema batean, atomoek izan ditzaketen energiaren balioak bi dira, bi energien arteko aldea <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>1</mn></mrow></math> eV izanik. Baldintza arruntetan, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>300</mn></mrow></math> K-etan, zein da bi mailen partikula-kopuruen arteko zatidura? <strong>Emaitza:</strong> <math display=\"inline\"><mrow><mo>∼</mo><msup><mi>e</mi><mn>38</mn></msup></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mi>N</mi><mi>/</mi><mi>z</mi><mspace width=\"0.222em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mi>i</mi></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math>-rekin, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>=</mo><mn>1</mn></mrow></math> eV-ez bereizitako bi mailen arteko zatidura <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>300</mn></mrow></math> K-etan: <math display=\"block\"><mrow><mfrac><msub><mi>n</mi><mn>2</mn></msub><msub><mi>n</mi><mn>1</mn></msub></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>≈</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>39</mn></mrow></msup><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>17</mn></mrow></msup><mi>.</mi></mrow></math> Kalkulu mota bera hidrogeno atomoaren mailei aplikatuta (<math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mn>13.6</mn><mi>/</mi><msup><mi>n</mi><mn>2</mn></msup></mrow></math> eV), elkarren segidako maila altuen artean <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>≈</mo><mn>1</mn></mrow></math> eV izanik: <math display=\"block\"><mrow><mfrac><msub><mi>n</mi><mn>3</mn></msub><msub><mi>n</mi><mn>1</mn></msub></mfrac><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>17</mn></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><msub><mi>n</mi><mn>3</mn></msub><msub><mi>n</mi><mn>2</mn></msub></mfrac><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "[2. kapituluan estalia: entropiaren egiaztapen gurutzatua]",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sistema batean dauden <math display=\"inline\"><mi>N</mi></math> partikulen energiaren balio posibleak bi dira, <math display=\"inline\"><msub><mi>ε</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>ε</mi><mn>2</mn></msub></math>. Partikulak bereizgarriak dira. Sistema, kanpoko sistema batekin dago kontaktuan, tenperatura konstantea izanik. Energia-maila bakoitzean dagoen partikula-kopurua <math display=\"inline\"><msub><mi>n</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><mrow><msub><mi>n</mi><mn>2</mn></msub><mo>=</mo><mi>N</mi><mo>−</mo><msub><mi>n</mi><mn>1</mn></msub></mrow></math> dira. Prozesu kuantiko batean, partikulak maila batetik bestera pasatu daitezke, hau da, <math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>→</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>n</mi><mn>2</mn></msub><mo>→</mo><msub><mi>n</mi><mn>2</mn></msub><mo>−</mo><mn>1</mn></mrow></math>. Prozesu horren ondorioz, energia trukatu egiten da kanpoko sistemarekin. Kalkulatu sistemaren entropia-aldaketa prozesu kuantiko hori gertatzen denean."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Bide makroskopikoa:</strong> <math display=\"inline\"><mrow><mi>d</mi><mi>U</mi><mo>=</mo><mi>T</mi><mi>d</mi><mi>S</mi><mo>−</mo><mi>P</mi><mi>d</mi><mi>V</mi></mrow></math>-tik (bolumen konstantean), <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>U</mi></mrow><mi>T</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>−</mo><msub><mi>ε</mi><mn>1</mn></msub></mrow><mi>T</mi></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>ε</mi></mrow><mi>T</mi></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Bide mikroskopikoa:</strong> aldaketaren aurretik <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>!</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mi>!</mi><msub><mi>n</mi><mn>2</mn></msub><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta ondoren <math display=\"inline\"><mrow><msup><mi>S</mi><mo>′</mo></msup><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>!</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><msup><mi>S</mi><mo>′</mo></msup><mo>−</mo><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><mrow><msub><mi>n</mi><mn>1</mn></msub><mi>!</mi><msub><mi>n</mi><mn>2</mn></msub><mi>!</mi></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi></mrow></mfrac><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><msub><mi>n</mi><mn>1</mn></msub><mrow><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><mn>1</mn></mrow></mfrac><mo>≈</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><msub><mi>n</mi><mn>1</mn></msub><msub><mi>n</mi><mn>2</mn></msub></mfrac></mrow></math> (<math display=\"inline\"><mrow><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><mn>1</mn><mo>≈</mo><msub><mi>n</mi><mn>2</mn></msub></mrow></math> hurbilduz, <math display=\"inline\"><mrow><msub><mi>n</mi><mn>2</mn></msub><mo>≫</mo><mn>1</mn></mrow></math> denean). Orekako banaketaren <math display=\"inline\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>∝</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mi>i</mi></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math> ordezkatuz: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msup><mi>e</mi><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>2</mn></msub><mo>−</mo><msub><mi>ε</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>=</mo><mfrac><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>−</mo><msub><mi>ε</mi><mn>1</mn></msub></mrow><mi>T</mi></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>ε</mi></mrow><mi>T</mi></mfrac><mo>,</mo></mrow></math> bide makroskopikoaren emaitza bera, zehazki — bloke honetako 2. kapituluan dagoeneko aurkeztutako egiaztapen gurutzatua (§ &quot;Adibidea: bi mailako sistema&quot;), notazio baliokidearekin."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "[2. kapituluan estalia: paramagnetismoa eta Curieren legea]",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Solido batean ioien momentu angeluarra <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mi>ħ</mi></mrow></math> da. Ioi bakoitza hiru egoera desberdinetan egon daiteke, momentu angeluarraren <math display=\"inline\"><mi>z</mi></math> osagaia, <math display=\"inline\"><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>=</mo><mi>−</mi><mi>ħ</mi><mo>,</mo><mn>0</mn><mo>,</mo><mi>ħ</mi></mrow></math> izanik kasu bakoitzean. Efektu elektrikoak direla eta, <math display=\"inline\"><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>=</mo><mi>±</mi><mi>ħ</mi></mrow></math> egoerek, <math display=\"inline\"><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math> egoerak baino <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> energia txikiagoa dute. Horrez gain, <math display=\"inline\"><mi>z</mi></math> ardatzaren norabidean jarritako <math display=\"inline\"><mi>B</mi></math> eremu magnetikoari esker, egoerek <math display=\"inline\"><mrow><msub><mi>E</mi><mi>B</mi></msub><mo>=</mo><msub><mi>j</mi><mi>z</mi></msub><mi>/</mi><mi>ħ</mi><mspace width=\"0.222em\"></mspace><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow></math> energia magnetikoa dute."
      },
      {
       "mota": "testua",
       "html": "a) Energiaren jatorria ondo aukeratuz, egiaztatu hiru egoeren energiak honako hauek direla, <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mo>+</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mo>−</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Lortu partizio-funtzioa eta suszeptibilitatea, <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>m</mi></msub><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>M</mi><mi>/</mi><mi>B</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "c) Curie-ren legearen arabera, material paramagnetikoaren suszeptibilitatea, tenperaturaren alderantzizko proportzionala da (<math display=\"inline\"><mi>B</mi></math> eremua oso txikia denean, hau da, <math display=\"inline\"><mrow><mi>B</mi><mo>→</mo><mn>0</mn></mrow></math> limitean). Egiaztatu, Curie-ren legea <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≪</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≫</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math> bi mugetan betetzen dela, baina ez <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>∼</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math> denean."
      },
      {
       "mota": "testua",
       "html": "d) Bi muga horietan, egiaztatu ezazu suszeptibilitateen arteko zatidura <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></math> dela."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math> egoeraren energia jatorritzat hartuz: efektu elektrikoak <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> kentzen du (<math display=\"inline\"><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math> egoera <math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>-n geratzen da, ez <math display=\"inline\"><mn>0</mn></math>-n; ikus taula), eta <math display=\"inline\"><mrow><msub><mi>E</mi><mi>B</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>j</mi><mi>z</mi></msub><mi>/</mi><mi>ħ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow></math> energia magnetikoa gehitzen da:"
      },
      {
       "mota": "taula-kutxa",
       "oina": "Hiru egoeren energiak. Jatorria desplazatuta dago,\n    <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> balioa <math display=\"inline\"><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math> egoerari dagokiola: <math display=\"inline\"><msub><mi>ε</mi><mn>2</mn></msub></math> eta\n    <math display=\"inline\"><msub><mi>ε</mi><mn>3</mn></msub></math> lortzen dira &quot;Energia osoa&quot; zutabeari <math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>\n    kenduz.",
       "blokeak": [
        {
         "mota": "testua",
         "html": "table( columns: 4, align: center, [<math display=\"inline\"><msub><mi>j</mi><mi>z</mi></msub></math>], [<math display=\"inline\"><msub><mi>E</mi><mi>B</mi></msub></math>], [En. elektrikoa], [Energia osoa], [<math display=\"inline\"><mi>ħ</mi></math>], [<math display=\"inline\"><mrow><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow></math>], [<math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>], [<math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mo>+</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow></math>], [<math display=\"inline\"><mn>0</mn></math>], [<math display=\"inline\"><mn>0</mn></math>], [<math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>], [<math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math> (erreferentzia)], [<math display=\"inline\"><mrow><mi>−</mi><mi>ħ</mi></mrow></math>], [<math display=\"inline\"><mrow><mi>−</mi><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow></math>], [<math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>], [<math display=\"inline\"><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mo>+</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>], )"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "b) Ioi baten partizio-funtzioa: <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mi>i</mi></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mo>−</mo><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Momentu magnetiko totala, <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><msub><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>F</mi><mi>/</mi><mi>∂</mi><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>T</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi></mrow></math>-rekin: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mfrac><mi>T</mi><mi>z</mi></mfrac><mfrac><mrow><mi>∂</mi><mi>z</mi></mrow><mrow><mi>∂</mi><mi>B</mi></mrow></mfrac><mo>=</mo><mi>N</mi><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mfrac><mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mi>/</mi><mn>2</mn><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math> eta suszeptibilitatea, <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>m</mi></msub><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>H</mi><mi>/</mi><mi>B</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>χ</mi><mi>m</mi></msub><mo>=</mo><mfrac><mrow><mi>N</mi><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><msub><mi>μ</mi><mn>0</mn></msub></mrow><mi>B</mi></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mi>/</mi><mn>2</mn><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"inline\"><mrow><mi>B</mi><mo>→</mo><mn>0</mn></mrow></math> limiterako (Curieren limitea), <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>≈</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>≈</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><msub><mi>χ</mi><mi>m</mi></msub><mo>≈</mo><mfrac><mrow><mi>N</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mfrac><mn>1</mn><mrow><mn>1</mn><mi>/</mi><mn>2</mn><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math> <strong><math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≪</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math> limitea</strong> (<math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>→</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><msub><mi>χ</mi><mi>m</mi></msub><mo>≈</mo><mfrac><msup><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac></mrow></math> <strong><math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≫</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math> limitea</strong> (<math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>→</mo><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><msub><mi>χ</mi><mi>m</mi></msub><mo>≈</mo><mfrac><msup><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math> Bi limiteetan, <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>m</mi></msub><mo>∝</mo><mn>1</mn><mi>/</mi><mi>T</mi></mrow></math>: Curieren legea; tarteko <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>∼</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math> erregimenean, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> faktorea <math display=\"inline\"><mi>T</mi></math>-rekin era ez-tribialean aldatzen da, eta Curieren legea ez da bere forma sinplean betetzen."
      },
      {
       "mota": "testua",
       "html": "d) (c) ataleko bi limiteen arteko zatidura, hain zuzen ere, <math display=\"block\"><mrow><mfrac><msubsup><mi>χ</mi><mi>m</mi><mrow><mi>T</mi><mo>≫</mo><mi mathvariant=\"normal\">Δ</mi></mrow></msubsup><msubsup><mi>χ</mi><mi>m</mi><mrow><mi>T</mi><mo>≪</mo><mi mathvariant=\"normal\">Δ</mi></mrow></msubsup></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math> da — edo, beste noranzkoan, <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></math>: eskatutako emaitza. Hau, funtsean, bloke honetako 2. kapituluko deribazio bera da (§ &quot;Adibidea: paramagnetismoa eta Curieren legea&quot;), hemen endekapena/banatzea urratsez urrats esplizitu eginda, eta <math display=\"inline\"><msub><mi>χ</mi><mi>m</mi></msub></math>-ren bi limiteak numerikoki alderatuta."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "[4. kapituluan ebatzia: Einsteinen solidoa]",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sistema batean, <math display=\"inline\"><mi>ν</mi></math> maiztasuneko <math display=\"inline\"><mi>N</mi></math> osziladore bereizgarri daude. Tenperatura <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> da. Kalkulatu osziladore jakin bat hartuta, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math> energia-mailan egoteko probabilitatea."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Problema hau zehatz-mehatz ebatzita dago bloke honetako 4. kapituluan (Einsteinen solidoa): osziladore bakoitza, egiaz, <strong>hiru dimentsiokoa</strong> eta isotropoa da (3 osziladore 1D atomoko, Einsteinen ereduak ezartzen duen bezala), maila endekatuekin: <math display=\"inline\"><mrow><msub><mi>g</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>. Emaitza <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>6</mn><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo>≈</mo><mn>20</mn><mi>%</mi></mrow></math> da."
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
       "html": "Sistema batean <math display=\"inline\"><mi>ω</mi></math> maiztasun angeluarreko <math display=\"inline\"><mi>N</mi></math> osziladore daude (osziladore harmoniko isotropo tridimentsionalak, <math display=\"inline\"><mrow><msub><mi>ε</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ħ</mi><mi>ω</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>g</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math> endekapenarekin)."
      },
      {
       "mota": "testua",
       "html": "a) Demagun, aldiune jakin batean, osziladore guztiak <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> energia-mailan daudela. Kalkulatu sistemaren energia osoa. Egoera hori ezin da oreka-egoera izan. Zergatik?"
      },
      {
       "mota": "testua",
       "html": "b) Sistema isolatuta dago, beraz, energia osoa konstantea da. Sistema bilakatu egingo da, oreka termodinamikoa lortu arte. Oreka-egoera lortzean, zein da sistemaren tenperatura?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Osziladore guztiak <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> mailan daudela, energia osoa <math display=\"inline\"><mrow><msub><mi>U</mi><mn>0</mn></msub><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ħ</mi><mi>ω</mi><mo>=</mo><mn>9</mn><mi>/</mi><mn>2</mn><mi>N</mi><mi>ħ</mi><mi>ω</mi></mrow></math> da. Ezin da oreka-egoera izan, mikroegoera posible bakar bati baitagokio (osziladore guztiak maila berean, beste inola banatu gabe): bere aniztasuna <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>1</mn></mrow></math> da, txikiena posiblea — orekako makroegoeraren guztiz kontrakoa, hura baita, oinarrizko postulatuaren arabera, aniztasun <strong>maximokoa</strong>."
      },
      {
       "mota": "testua",
       "html": "b) <strong>Bide makroskopikoa</strong>, 5. probleman jadanik kalkulatutako partizio-funtzioa erabiliz (<math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mn>3</mn><mi>D</mi><mspace width=\"0.222em\"></mspace></mrow></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>3</mn><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mi>/</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>ħ</mi><mi>ω</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>): <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>z</mi><mrow><mn>3</mn><mi>D</mi></mrow></msub></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mi>N</mi></mrow><mn>2</mn></mfrac><mi>ħ</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">coth</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><msub><mi>U</mi><mn>0</mn></msub><mo>=</mo><mn>9</mn><mi>/</mi><mn>2</mn><mi>N</mi><mi>ħ</mi><mi>ω</mi></mrow></math>-rekin berdinduz: <math display=\"block\"><mrow><mfrac><mrow><mn>3</mn><mi>N</mi></mrow><mn>2</mn></mfrac><mi>ħ</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">coth</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>9</mn><mn>2</mn></mfrac><mi>N</mi><mi>ħ</mi><mi>ω</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">coth</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mn>2</mn><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arcoth </mtext><mspace width=\"0.333em\"></mspace></mrow><mn>3</mn></mrow></math> eta, beraz, <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mi>ħ</mi><mi>ω</mi></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>ħ</mi><mi>ω</mi></mrow><mrow><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arcoth</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Bide mikroskopikoa</strong>, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><msub><mi>ε</mi><mi>i</mi></msub></mrow></math> zuzenean batuz, <math display=\"inline\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mi>N</mi><mi>/</mi><msub><mi>z</mi><mrow><mn>3</mn><mi>D</mi><mspace width=\"0.222em\"></mspace></mrow></msub><mspace width=\"0.222em\"></mspace><msub><mi>g</mi><mi>i</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mi>i</mi></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math>-rekin, maila endekatuen gainean: seriearen garapenaren ondoren, zehazki emaitza berera iristen da, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>N</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ħ</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">coth</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: bi bideak (kanonikoa eta mikrokanonikoa) koherenteak dira, aurreko kapituluetan beste era batzuetan egiaztatu zen bezala."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Ebatzi gabe",
     "blokeak": [
      {
       "mota": "testua",
       "html": "1. problemaren galdera batek (11 makroegoeretatik zeinek duen aniztasun handiena adieraztea — 1. problemaren taularen irakurketa besterik ez da, ez du kalkulu gehigarririk eskatzen) ez du garapen esplizitorik eskuragarri dauden argazkietan."
      }
     ]
    }
   ]
  },
  {
   "id": "a46",
   "maila": 2,
   "izenburua": "14. gaia",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sistema batean 8 partikula daude. Hiru partikularen abiadura 10 m/s-koa da, eta gainontzeko partikulen abiadura 20 m/s-koa da. Lor itzazu <math display=\"inline\"><mrow><msub><mi>v</mi><mi>r</mi></msub><mo>=</mo><msqrt><mover><msup><mi>v</mi><mn>2</mn></msup><mo accent=\"true\">¯</mo></mover></msqrt></mrow></math> eta <math display=\"inline\"><mover><mi>v</mi><mo accent=\"true\">¯</mo></mover></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>v</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mrow><mn>3</mn><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mn>5</mn><msub><mi>v</mi><mn>2</mn></msub></mrow><mi>N</mi></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>10</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>5</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>20</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>8</mn></mfrac><mo>=</mo><mn>16.25</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <math display=\"block\"><mrow><mover><msup><mi>v</mi><mn>2</mn></msup><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mrow><mn>3</mn><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mn>5</mn><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup></mrow><mi>N</mi></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>100</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>5</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>400</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>8</mn></mfrac><mo>=</mo><mn>287.5</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mn>2</mn></msup><mi>/</mi><msup><mi>s</mi><mn>2</mn></msup></mrow></math> <math display=\"block\"><mrow><msub><mi>v</mi><mi>r</mi></msub><mo>=</mo><msqrt><mover><msup><mi>v</mi><mn>2</mn></msup><mo accent=\"true\">¯</mo></mover></msqrt><mo>=</mo><mn>16.95</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
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
       "html": "Lor itzazu <math display=\"inline\"><mn>300</mn></math> K-etan dagoen oxigeno gasari dagozkion <math display=\"inline\"><mover><mi>v</mi><mo accent=\"true\">¯</mo></mover></math>, <math display=\"inline\"><msub><mi>v</mi><mi>r</mi></msub></math> eta abiadurarik probableena."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Maxwellen banaketatik abiatuta, <math display=\"block\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi><mo>=</mo><mn>4</mn><mi>π</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>m</mi><mrow><mn>2</mn><mi>π</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>N</mi><msup><mi>v</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mi>d</mi><mi>v</mi><mo>,</mo></mrow></math> hiru abiadura bereizgarriak (bloke honetako 6. kapituluko formula berberak, § &quot;Maxwellen abiadura-banaketa&quot;), <math display=\"inline\"><msub><mi>O</mi><mn>2</mn></msub></math>-ari <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>300</mn></mrow></math> K-etan aplikatuta: <math display=\"block\"><mrow><mover><mi>v</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mn>1</mn><mi>N</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>v</mi><mspace width=\"0.222em\"></mspace><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi><mo>=</mo><msqrt><mfrac><mrow><mn>8</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mrow><mi>π</mi><mi>m</mi></mrow></mfrac></msqrt><mo>≈</mo><mn>445</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <math display=\"block\"><mrow><msub><mi>v</mi><mi>r</mi></msub><mo>=</mo><msqrt><mover><msup><mi>v</mi><mn>2</mn></msup><mo accent=\"true\">¯</mo></mover></msqrt><mo>=</mo><msqrt><mfrac><mrow><mn>3</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mi>m</mi></mfrac></msqrt><mo>≈</mo><mn>484</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <math display=\"block\"><mrow><msub><mi>v</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mi>m</mi></mfrac></msqrt><mo>≈</mo><mn>395</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
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
       "html": "Solido batean, partikulak gainazalean higitu daitezke, soilik. Potentziala, <math display=\"inline\"><mi>a</mi></math> aldeko bi dimentsioko potentzial-osin infinitua eta karratua da. Idatz ezazu energiaren adierazpena. Zein dira <math display=\"inline\"><mi>ε</mi></math> baino energia txikiagoa duten egoerak? Kalkulatu aurreko egoera-kopurua, <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Hortik abiatuz, kalkulatu <math display=\"inline\"><mi>ε</mi></math> eta <math display=\"inline\"><mrow><mi>ε</mi><mo>+</mo><mi>d</mi><mi>ε</mi></mrow></math> tartean dauden egoeren dentsitatea, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi></mrow></math>. Bukatzeko, kalkulatu bi dimentsioko sistema honen partizio-funtzioa eta barneko energia."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Bi dimentsiotan higitzera mugatutako partikula batentzat (<math display=\"inline\"><mi>L</mi></math> aldeko gainazal karratua, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msup><mi>L</mi><mn>2</mn></msup></mrow></math>), Schrödingerren ekuazioak <math display=\"block\"><mrow><mi>ε</mi><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>y</mi></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi></mrow></math> ematen du. <math display=\"inline\"><mi>ε</mi></math> baino energia txikiagoko egoerek hau betetzen dute: <math display=\"block\"><mrow><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><mo>≤</mo><mfrac><mrow><mn>2</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><mi>ε</mi><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup></mrow></math> (<math display=\"inline\"><mi>R</mi></math> erradioko zirkulu-laurden baten barnealdea <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> espazioan, bi zenbaki kuantikoak positiboak baitira). <math display=\"inline\"><mi>ε</mi></math> baino energia txikiagoko egoeren kopurua: <math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>π</mi><mfrac><mrow><mn>2</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><mi>ε</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>S</mi></mrow><mrow><mn>2</mn><mi>π</mi><msup><mi>ħ</mi><mn>2</mn></msup></mrow></mfrac><mi>ε</mi></mrow></math> (<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msup><mi>L</mi><mn>2</mn></msup></mrow></math> azalera izanik). Egoeren dentsitatea: <math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>d</mi><mi>G</mi></mrow><mrow><mi>d</mi><mi>ε</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><mi>S</mi></mrow><mrow><mn>2</mn><mi>π</mi><msup><mi>ħ</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> — konstantea, 3D kasuan ez bezala (non <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msqrt><mi>ε</mi></msqrt></mrow></math> baita, estatistika kuantikoen kapitulua) — bi dimentsioko sistemen berezitasun bereizgarria. Partikula baten partizio-funtzioa: <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>S</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mrow><mn>2</mn><mi>π</mi><msup><mi>ħ</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> eta <math display=\"inline\"><mi>N</mi></math> partikula bereiztezineko sistema osorako, <math display=\"block\"><mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><mfrac><msup><mi>z</mi><mi>N</mi></msup><mrow><mi>N</mi><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>N</mi><mi>!</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><mi>S</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mrow><mn>2</mn><mi>π</mi><msup><mi>ħ</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>N</mi></msup><mo>,</mo></mrow></math> barneko energia hau izanik: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> 3D kasuan bezala, baina orain translazio-askatasunaren 2 gradu besterik ez daudela, 3-ren ordez (hemen <math display=\"inline\"><mrow><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> ematen du, 3D kasuko <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>-ren ordez, eta <math display=\"inline\"><mrow><mi>z</mi><mo>∝</mo><msup><mi>T</mi><mn>1</mn></msup></mrow></math>, <math display=\"inline\"><msup><mi>T</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></math>-ren ordez, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> konstantea izateagatik, <math display=\"inline\"><mrow><mo>∝</mo><msqrt><mi>ε</mi></msqrt></mrow></math>-en ordez)."
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
       "html": "Itsas-mailan eta baldintza arruntetan (<math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>273</mn></mrow></math> K, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>1</mn></mrow></math> atm) airearen konposizioa (bolumenaren ehunekotan) honako hau da, <math display=\"inline\"><msub><mi>N</mi><mn>2</mn></msub></math> (78.084), <math display=\"inline\"><msub><mi>O</mi><mn>2</mn></msub></math> (20.946), Ar (0.934), Ne (0.0018), He (0.000524) eta <math display=\"inline\"><msub><mi>H</mi><mn>2</mn></msub></math> (0.00005). Airea gas ideala dela eta tenperatura konstantea dela joko dugu."
      },
      {
       "mota": "testua",
       "html": "a) Kalkulatu airearen dentsitatea itsas-mailan."
      },
      {
       "mota": "testua",
       "html": "b) Kalkulatu airearen masa-konposizioa itsas-mailan."
      },
      {
       "mota": "testua",
       "html": "c) Kalkulatu airearen konposizioa (masa-proportzioak) La Paz-en (altuera<math display=\"inline\"><mrow><mo>=</mo><mn>3.632</mn></mrow></math> m) eta Everest-eko gailurrean (altuera<math display=\"inline\"><mrow><mo>=</mo><mn>8.848</mn></mrow></math> m)."
      },
      {
       "mota": "testua",
       "html": "d) Itsas mailan eta minutu batean pertsona batek 15 aldiz hartzen du arnasa. Oxigeno kopuru berbera hartzeko, zenbat aldiz hartu behar du arnasa bai La Paz-en, baita Everest-en ere?"
      },
      {
       "mota": "testua",
       "html": "e) Mendizale batek egin dezakeen lana, hartutako oxigeno kopuruaren proportzionala dela joko dugu. Itsas mailan, sei minututan 100 m-ko altuera-aldea egiteko gai bada, zenbat denbora behar izango du altuera-alde berbera egiteko zortzi mila metroko altueratan?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Itsas mailako partikula-dentsitatea <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≈</mo><mn>2.69</mn><mo>×</mo><msup><mn>10</mn><mn>25</mn></msup></mrow></math> partikula/m<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math> izanik, eta bloke honetako 6. kapituluko formula barometrikoa, <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>n</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>m</mi><mi>g</mi><mi>z</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math>, <strong>osagaiz osagai</strong> aplikatuta (nahasteko gas bakoitzak bere masa molekularra du, eta, beraz, altuerarekin erritmo desberdinean urritzen da: gas astunagoak, <math display=\"inline\"><msub><mi>N</mi><mn>2</mn></msub></math> eta <math display=\"inline\"><msub><mi>O</mi><mn>2</mn></msub></math> adibidez, azkarrago urritzen dira <math display=\"inline\"><msub><mi>H</mi><mn>2</mn></msub></math> edo He baino):"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Transkripzio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "a)-c) atalek zenbakizko taula luzeak eskatzen dituzte (partikula-dentsitatea, masa-dentsitatea eta nahasteko 6 gasetako bakoitzaren proportzioa, hiru altitude desberdinetan), eta ez dira hemen lerroz lerro erreproduzitzen, espazio-ekonomiagatik; osorik daude iturri eskuizkribatuan. Azken emaitzak, &quot;Emaitzak&quot; orriaren arabera:"
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "d) Oxigeno kantitate bera hartzeko arnasa hartu beharreko aldi kopurua alderantziz proportzionala da altitude horretako aireak duen <math display=\"inline\"><msub><mi>O</mi><mn>2</mn></msub></math> proportzioarekiko: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> La Paz</mtext></mrow><mo>:</mo><mn>25</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> veces/min</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Everest</mtext></mrow><mo>:</mo><mn>50</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> veces/min </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "e) Arrazoiketa berarekin, egin daitekeen lanari aplikatuta, <math display=\"block\"><mrow><mi>t</mi><mo>≈</mo><mn>20</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> minutos </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> Everesteko altueran 100 metroko desnibel bera egiteko."
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
       "html": "Gas baten partizio-funtzioa honako hau da, <math display=\"block\"><mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>V</mi><mo>−</mo><mi>N</mi><mi>b</mi></mrow><mi>N</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>N</mi></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mrow><mn>2</mn><mi>π</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>N</mi><mi>/</mi><mn>2</mn></mrow></msup><msup><mi>e</mi><mrow><msup><mi>N</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>V</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math> non <math display=\"inline\"><mrow><mi>a</mi><mo>,</mo><mi>b</mi></mrow></math> eta <math display=\"inline\"><mi>c</mi></math> konstanteak diren. Egiaztatu presioaren adierazpena Van der Waals-en ekuazioa dela. Kalkulatu barneko energia."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Logaritmoak hartuz, <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><mi>N</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>V</mi><mo>−</mo><mi>N</mi><mi>b</mi></mrow><mi>N</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mn>3</mn><mi>N</mi></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mrow><mn>2</mn><mi>π</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><msup><mi>N</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mi>V</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac></mrow></math> Presioa, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>F</mi><mi>/</mi><mi>∂</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>T</mi></msub><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"normal\">ln</mi><msub><mi>Z</mi><mi>N</mi></msub><mi>/</mi><mi>∂</mi><mi>V</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msub></mrow></math>: <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>N</mi><mrow><mi>V</mi><mo>−</mo><mi>N</mi><mi>b</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><msup><mi>N</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><msup><mi>V</mi><mn>2</mn></msup><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mrow><mi>V</mi><mo>−</mo><mi>N</mi><mi>b</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><msup><mi>N</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><msup><mi>V</mi><mn>2</mn></msup></mfrac></mrow></math> Berrantolatuz, Van der Waalsen ekuazioa lortzen da, zehazki: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo>+</mo><mfrac><mrow><msup><mi>N</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><msup><mi>V</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo>−</mo><mi>N</mi><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> (<math display=\"inline\"><mrow><msup><mi>N</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi>/</mi><msup><mi>V</mi><mn>2</mn></msup></mrow></math> terminoak presioa zuzentzen du, partikulen arteko erakarpenagatik, eta <math display=\"inline\"><mrow><mi>N</mi><mi>b</mi></mrow></math>-k bolumen erabilgarria zuzentzen du, partikulen tamaina finituagatik — 6. kapituluko gas idealak, ordea, ez du bi zuzenketa horietako bat ere)."
      },
      {
       "mota": "testua",
       "html": "Barneko energia, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"normal\">ln</mi><msub><mi>Z</mi><mi>N</mi></msub><mi>/</mi><mi>∂</mi><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>V</mi></msub></mrow></math> (<math display=\"inline\"><mi>T</mi></math>-ren menpeko terminoak soilik deribatuz): <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mn>3</mn><mi>N</mi></mrow><mrow><mn>2</mn><mi>T</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><msup><mi>N</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mi>V</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>−</mo><mfrac><mrow><msup><mi>N</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mi>V</mi></mfrac></mrow></math> Bigarren terminoa, negatiboa, partikulen arteko erakarpenari zor zaion barneko energiaren zuzenketa da (gas idealean ez dago, harentzat <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mn>3</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> baita zehazki): bere zentzu fisikoa <math display=\"inline\"><mi>U</mi></math> murriztea da, partikulak, batez beste, elkarri pixka bat loturik daudelako."
      }
     ]
    }
   ]
  },
  {
   "id": "a47",
   "maila": 2,
   "izenburua": "15. gaia",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>N</mi></math> partikulak osatutako sisteman, energia mailak <math display=\"inline\"><mrow><msub><mi>E</mi><mi>l</mi></msub><mo>=</mo><mi>α</mi><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dira, non <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> Maila bakoitzaren endekapena <math display=\"inline\"><mrow><msub><mi>g</mi><mi>l</mi></msub><mo>=</mo><mn>2</mn><mi>l</mi><mo>+</mo><mn>1</mn></mrow></math> da."
      },
      {
       "mota": "testua",
       "html": "a) Demagun <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0.1</mn></mrow></math> eV-koa dela. Energia mailen endekapena kontuan hartuta, zein izan behar da tenperaturaren balioa lehenengo bi mailen partikula-kopuruak berdinak izateko?"
      },
      {
       "mota": "testua",
       "html": "b) Sistema oreka termodinamikoan dagoenean, eta <math display=\"inline\"><mi>α</mi></math> eta <math display=\"inline\"><mi>T</mi></math> arbitrarioak izanda, kalkulatu <math display=\"inline\"><mrow><msub><mi>n</mi><mi>l</mi></msub><mi>/</mi><msub><mi>n</mi><mn>0</mn></msub></mrow></math> zatiduraren balioa, non <math display=\"inline\"><msub><mi>n</mi><mi>l</mi></msub></math>, <math display=\"inline\"><mi>l</mi></math> mailari dagokion partikula-kopurua den."
      },
      {
       "mota": "testua",
       "html": "c) Kalkulatu <math display=\"inline\"><mi>Z</mi></math> partizio-funtzioa (<math display=\"inline\"><mi>l</mi></math>-rekiko batuera moduan utzi)."
      },
      {
       "mota": "testua",
       "html": "d) Batuera egiteko, honako adierazpen hau erabili: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> batuera integral bihurtzeko. Integrala egin ondoren, kalkulatu <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> barneko energia eta <math display=\"inline\"><mrow><msub><mi>C</mi><mi>v</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bero ahalmena. Lortutako emaitza zein kasutan da zuzena, <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≪</mo><mi>α</mi></mrow></math> denean ala <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≫</mo><mi>α</mi></mrow></math> denean?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mrow><msub><mi>n</mi><mi>l</mi></msub><mo>=</mo><mi>N</mi><mi>/</mi><mi>z</mi><mspace width=\"0.222em\"></mspace><msub><mi>g</mi><mi>l</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mi>l</mi></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math>-rekin, <math display=\"inline\"><mrow><msub><mi>ε</mi><mi>l</mi></msub><mo>=</mo><mi>α</mi><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>g</mi><mi>l</mi></msub><mo>=</mo><mn>2</mn><mi>l</mi><mo>+</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><mn>1</mn><mo>=</mo><mfrac><msub><mi>n</mi><mn>1</mn></msub><msub><mi>n</mi><mn>0</mn></msub></mfrac><mo>=</mo><mfrac><mrow><msub><mi>g</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>1</mn></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow><mrow><msub><mi>g</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>α</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow><mn>1</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mi>e</mi><mrow><mn>2</mn><mi>α</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>=</mo><mn>3</mn></mrow></math> <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>α</mi></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>3</mn></mrow></mfrac><mo>≈</mo><mn>2113</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> (<math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0.1</mn></mrow></math> eV <math display=\"inline\"><mrow><mo>=</mo><mn>1.602</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>20</mn></mrow></msup></mrow></math> J izanik)."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mfrac><msub><mi>n</mi><mi>l</mi></msub><msub><mi>n</mi><mn>0</mn></msub></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>l</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>g</mi><mi>l</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mi>l</mi></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>l</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "d) <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>l</mi><mn>2</mn></msup><mo>+</mo><mi>l</mi></mrow></math> aldaketarekin, <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>l</mi></mrow></math>, integrala zuzenekoa da: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mi>d</mi><mi>l</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><mi>t</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mi>α</mi></mfrac></mrow></math> Beraz, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mi>/</mi><mi>α</mi></mrow></math> (partikula bakarrerako), eta <math display=\"inline\"><mi>N</mi></math> partikula bereiztezinetarako, <math display=\"inline\"><mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><mn>1</mn><mi>/</mi><mi>N</mi><mi>!</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mi>/</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>N</mi></msup></mrow></math>. Barneko energia: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>N</mi><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>N</mi><mi mathvariant=\"normal\">ln</mi><mi>α</mi><mo>−</mo><mi mathvariant=\"normal\">ln</mi><mi>N</mi><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> eta bero-ahalmena, <math display=\"inline\"><mrow><msub><mi>C</mi><mi>v</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>U</mi><mi>/</mi><mi>∂</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Batura integral batez ordezkatzeko hurbilketak balio du mailak, <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>-rekin alderatuta, hain hurbil daudenean non jarraitutzat har baitaitezke — hau da, <math display=\"inline\"><mrow><mi>α</mi><mo>≪</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> denean (tenperatura altuak). <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≪</mo><mi>α</mi></mrow></math> denean, batura termino gutxi batzuek menderatzen dute, eta hurbilketa integrala ez da baliozkoa."
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
       "html": "Demagun molekula diatomiko bat <math display=\"inline\"><mrow><mi>T</mi><mo>≫</mo><mi>h</mi><mi>ν</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> tenperaturan dagoela, non <math display=\"inline\"><mi>ν</mi></math> bibrazio-maiztasuna den. Egiaztatu partizio-funtzioa honelakoa dela, <math display=\"block\"><mrow><mi>Z</mi><mo>∝</mo><mi>V</mi><msup><mi>T</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> (ez ahaztu biraketa). Prozesu batean entropia konstantea mantentzen bada, orduan prozesu horretan <math display=\"inline\"><mrow><mi>V</mi><msup><mi>T</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> faktorea konstantea da."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Partizio-funtzioa faktorizatu egiten da, <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><msub><mi>Z</mi><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>×</mo><msub><mi>Z</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>×</mo><msub><mi>Z</mi><mtext mathvariant=\"normal\">vib</mtext></msub></mrow></math> (bloke honetako 7. kapitulua): <math display=\"block\"><mrow><msub><mi>Z</mi><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>V</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><msup><mi>h</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>∝</mo><mi>V</mi><msup><mi>T</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> <math display=\"block\"><mrow><msub><mi>Z</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mi>T</mi><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mfrac><mo>∝</mo><mi>T</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (régimen clásico, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <math display=\"block\"><mrow><msub><mi>Z</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mn>2</mn><mi>T</mi></mrow></msup><mrow><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mi>T</mi></mrow></msup></mrow></mfrac><mo>∝</mo><mi>T</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (régimen clásico, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>h</mi><mi>ν</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> , el caso de este enunciado) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> hirurak biderkatuz: <math display=\"block\"><mrow><mi>Z</mi><mo>∝</mo><mi>V</mi><msup><mi>T</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>×</mo><mi>T</mi><mo>×</mo><mi>T</mi><mo>=</mo><mi>V</mi><msup><mi>T</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>1</mn></mrow></msup><mo>=</mo><mi>V</mi><msup><mi>T</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>α</mi><mo>+</mo><mn>7</mn><mi>/</mi><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>+</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><msup><mi>T</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rekin (<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>U</mi><mi>/</mi><mi>T</mi><mo>+</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub></mrow></math>-tik), prozesu batean <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo></mrow></math> kte bada, eta <math display=\"inline\"><mi>T</mi></math> (<math display=\"inline\"><mi>U</mi></math>-ren bidez) zehaztuta geratzen bada, <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><msup><mi>T</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> terminoak konstante iraun behar du, hau da, <math display=\"inline\"><mrow><mi>V</mi><msup><mi>T</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>=</mo></mrow></math> kte — gas diatomiko baten erlazio adiabatikoa (7 &quot;askatasun-gradu&quot; efektiborekin: 3 translazio + 2 errotazio + 2 bibrazio, <math display=\"inline\"><mrow><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub></mrow></math> erregimenean), gas monoatomikoaren <math display=\"inline\"><mrow><mi>V</mi><msup><mi>T</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>=</mo></mrow></math> kte erlazioaren analogoa (6. kapitulua)."
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
       "html": "Oxigeno molekulan, bi atomoen arteko oreka-distantzia <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1.2</mn></mrow></math> Å-ekoa da."
      },
      {
       "mota": "testua",
       "html": "a) Kalkulatu molekula horren <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">bir</mtext></msub></math> biraketa-tenperatura."
      },
      {
       "mota": "testua",
       "html": "b) Oxigeno molekularen <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">bib</mtext></msub></math> Einstein-en tenperatura <math display=\"inline\"><mn>2200</mn></math> K-ekoa da. Giro tenperaturan, kalkulatu bibrazioen ekarpen erlatiboa bero-ahalmenari."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mi>d</mi></math> distantziara dauden bi atomo berdinentzat, masa-zentroarekiko inertzia-momentua <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mi>m</mi><msup><mi>d</mi><mn>2</mn></msup></mrow></math> da (atomo bakoitza zentrotik <math display=\"inline\"><mrow><mi>d</mi><mi>/</mi><mn>2</mn></mrow></math> distantziara): <math display=\"block\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>I</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></mfrac><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mi>m</mi><msup><mi>d</mi><mn>2</mn></msup><msub><mi>k</mi><mi>B</mi></msub></mrow></mfrac><mo>≈</mo><mn>2.1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Bero-ahalmen osoa hiru ekarpenen batura da, <math display=\"inline\"><mrow><msub><mi>C</mi><mi>v</mi></msub><mo>=</mo><msubsup><mi>C</mi><mi>v</mi><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo>+</mo><msubsup><mi>C</mi><mi>v</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo>+</mo><msubsup><mi>C</mi><mi>v</mi><mtext mathvariant=\"normal\">vib</mtext></msubsup></mrow></math>. Lehen biak beren erregimen klasikoan daude giro-tenperaturan (<math display=\"inline\"><mrow><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">rot</mtext></msub></mrow></math>): <math display=\"block\"><mrow><msubsup><mi>C</mi><mi>v</mi><mtext mathvariant=\"normal\">tr</mtext></msubsup><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>C</mi><mi>v</mi><mtext mathvariant=\"normal\">rot</mtext></msubsup><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>C</mi><mi>v</mi><mrow><mtext mathvariant=\"normal\">tr</mtext><mo>+</mo><mtext mathvariant=\"normal\">rot</mtext></mrow></msubsup><mo>=</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> Bibraziorako, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mi>T</mi></mrow></math>-rekin: <math display=\"block\"><mrow><msubsup><mi>C</mi><mi>v</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>x</mi><mn>2</mn></msup><mfrac><msup><mi>e</mi><mi>x</mi></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac></mrow></math> Giro-tenperaturan (<math display=\"inline\"><mrow><mi>T</mi><mo>≈</mo><mn>330</mn></mrow></math> K kalkulu honetan), <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mi>T</mi><mo>=</mo><mn>2200</mn><mi>/</mi><mn>330</mn><mo>≈</mo><mn>6.7</mn></mrow></math> (ez batere txikia; beraz, bibrazioa <strong>ez</strong> dago bere erregimen klasikoan): <math display=\"block\"><mrow><mfrac><msubsup><mi>C</mi><mi>v</mi><mtext mathvariant=\"normal\">vib</mtext></msubsup><msubsup><mi>C</mi><mi>v</mi><mrow><mtext mathvariant=\"normal\">tr</mtext><mo>+</mo><mtext mathvariant=\"normal\">rot</mtext></mrow></msubsup></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mi>/</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow><mrow><mn>5</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>5</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mfrac><msup><mi>e</mi><mi>x</mi></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>≈</mo><mn>0.014</mn></mrow></math> hau da, bibrazioak <math display=\"inline\"><mrow><mn>1.4</mn><mi>%</mi></mrow></math> baino ez dio ekartzen bero-ahalmen osoari: ia izoztuta dago. Beraz, <math display=\"block\"><mrow><msub><mi>C</mi><mi>v</mi></msub><mo>=</mo><msubsup><mi>C</mi><mi>v</mi><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo>+</mo><msubsup><mi>C</mi><mi>v</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo>=</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> (bibrazio-ekarpena arbuiagarria da praktikan) — bloke honetako 7. kapituluan adibide gisa erabilitako emaitza bera."
      }
     ]
    }
   ]
  },
  {
   "id": "a48",
   "maila": 2,
   "izenburua": "16. gaia",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Transkripzio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Buletin honetako 1., 2. eta 5. problemek eskatzen dute, zehazki, bloke honetako 3. kapituluan jadanik ezarritakoa deribatzea (Bose-Einstein eta Fermi-Dirac banaketak Lagrangeren bidez, eta elektroi-gasaren batez besteko energia, <math display=\"inline\"><mrow><mover><mi>ε</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>3</mn><mi>/</mi><mn>5</mn><msub><mi>E</mi><mi>F</mi></msub></mrow></math>) — osotasunagatik enuntziatzen dira, deribazioa errepikatu gabe. 4., 6. eta 7. problemek <code>cuaderno fismo/</code>-n jadanik ebatzita agertzen diren zenbakizko datu berberak dituzte (④, ⑥ eta ⑦ problema gisa katalogatuak <code>CATALOGO.md</code>-n); hemen berriro ebazten dira, modu independentean, egiaztapen gurutzatu gisa."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "[3. kapituluan estalia: Bose-Einsteinen banaketa]",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sistema batean <math display=\"inline\"><mi>N</mi></math> bosoi bereiztezin daude. <math display=\"inline\"><msub><mi>ε</mi><mi>i</mi></msub></math> energiako <math display=\"inline\"><msub><mi>g</mi><mi>i</mi></msub></math> egoera badaude; <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> partikula egoera horietan kokatzeko modu desberdinak <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><msub><mi>g</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dira. Maximizatu <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msub><mo>∏</mo><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><msub><mi>g</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mi>U</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mi>N</mi></mrow></math> baldintzapean. Egiaztatu <math display=\"inline\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><msub><mi>g</mi><mi>i</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dela."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "[3. kapituluan estalia: Fermi-Diracen banaketa]",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sistema batean <math display=\"inline\"><mi>N</mi></math> fermioi bereiztezin daude. <math display=\"inline\"><msub><mi>ε</mi><mi>i</mi></msub></math> energiako <math display=\"inline\"><msub><mi>g</mi><mi>i</mi></msub></math> egoera badaude; <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> partikula egoera horietan kokatzeko modu desberdinak <math display=\"inline\"><mrow><msub><mi>g</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dira. Maximizatu antzeko baldintzapean. Egiaztatu <math display=\"inline\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><msub><mi>g</mi><mi>i</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dela."
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
       "html": "<math display=\"inline\"><mi>V</mi></math> bolumeneko sodiozko (<math display=\"inline\"><mrow><mi>+</mi><mn>1</mn></mrow></math> balentzia) metalean dauden kondukzio-elektroiak gasa osatzen dutela onartu daiteke."
      },
      {
       "mota": "testua",
       "html": "a) Eskema baten bidez deskriba ezazu kondukzio-elektroien energia mailen okupazio-probabilitatea oso <math display=\"inline\"><mi>T</mi></math> txikietan. Laburrean azaldu ezaugarri nagusiak."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> K denean, lor ezazu <math display=\"inline\"><msub><mi>E</mi><mi>F</mi></msub></math> Fermi-energiaren adierazpen orokorra (<math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mi>V</mi><mo>,</mo><mi>N</mi></mrow></math>-ren funtzioan). Sodio-ren kasuan, zein da Fermiren energiaren balioa? Kasu honetan, zein da tenperaturaren balioa non energia termikoa Fermi-energiaren parekoa den?"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> K denean, froga ezazu elektroien energiaren batezbestekoak ondoko erlazioa betetzen duela: <math display=\"inline\"><mrow><mover><mi>ε</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>3</mn><msub><mi>E</mi><mi>F</mi></msub><mi>/</mi><mn>5</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Datuak: <math display=\"inline\"><mrow><msub><mi>ρ</mi><mrow><mtext mathvariant=\"normal\">Na </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>968</mn></mrow></math> kg/m<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>, <math display=\"inline\"><mrow><msub><mi>M</mi><mtext mathvariant=\"normal\">Na</mtext></msub><mo>=</mo><mn>23</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>1.66</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg, <math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>=</mo><mn>9.1</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup></mrow></math> kg, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><msqrt><mi>ε</mi></msqrt><mi>d</mi><mi>ε</mi></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Problema hau 3. kapituluan jadanik aurkeztutako &quot;elektroi askeen gasaren&quot; garapen bera da (egoeren dentsitatea, Fermiren energia <math display=\"inline\"><mrow><msub><mi>E</mi><mi>F</mi></msub><mo>=</mo><msup><mi>h</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>N</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>8</mn><mi>π</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></math>, batez besteko energia <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>5</mn><msub><mi>E</mi><mi>F</mi></msub></mrow></math>). Sodioari numerikoki aplikatuta (kondukzio-elektroi bat atomoko, <math display=\"inline\"><msub><mi>ρ</mi><mtext mathvariant=\"normal\">Na</mtext></msub></math> dentsitatea), han jadanik aipatutako emaitza bera ematen du, <math display=\"inline\"><mrow><msub><mi>E</mi><mi>F</mi></msub><mo>≈</mo><mn>3.1</mn></mrow></math> eV, lotutako Fermiren tenperatura <math display=\"inline\"><mrow><msub><mi>T</mi><mi>F</mi></msub><mo>=</mo><msub><mi>E</mi><mi>F</mi></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mn>3.7</mn><mo>×</mo><msup><mn>10</mn><mn>4</mn></msup></mrow></math> K ordenakoa, izanik — giro-tenperatura baino askoz gorago; horregatik jokatzen du metal bateko elektroi-gasak gas klasiko batetik hain desberdin."
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
       "html": "Sistema batean, 3 energia-maila eta 2 partikula daude. Adieraz ezazu zein diren sistemaren mikroegoerak ondoko hiru kasu hauetan:"
      },
      {
       "mota": "testua",
       "html": "a) Partikulak bereizgarriak direnean."
      },
      {
       "mota": "testua",
       "html": "b) Partikulak bosoi bereiztezinak direnean."
      },
      {
       "mota": "testua",
       "html": "c) Partikulak fermioi bereiztezinak direnean."
      },
      {
       "mota": "testua",
       "html": "d) Parametro hau definituz, <math display=\"block\"><mrow><mi>α</mi><mo>=</mo><mfrac><mrow><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mi>g</mi><mi>o</mi><mi>e</mi><mi>r</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mi>b</mi><mi>e</mi><mi>r</mi><mi>e</mi><mi>a</mi><mi>n</mi><mspace width=\"0.222em\"></mspace><mn>2</mn><mspace width=\"0.222em\"></mspace><mi>p</mi><mi>a</mi><mi>r</mi><mi>t</mi><mi>i</mi><mi>k</mi><mi>u</mi><mi>l</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mi>e</mi><mi>g</mi><mi>o</mi><mi>t</mi><mi>e</mi><mi>k</mi><mi>o</mi><mspace width=\"0.222em\"></mspace><mi>p</mi><mi>r</mi><mi>o</mi><mi>b</mi><mi>a</mi><mi>b</mi><mi>i</mi><mi>l</mi><mi>i</mi><mi>t</mi><mi>a</mi><mi>t</mi><mi>e</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mspace width=\"0.222em\"></mspace><mi>p</mi><mi>a</mi><mi>r</mi><mi>t</mi><mi>i</mi><mi>k</mi><mi>u</mi><mi>l</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mi>e</mi><mi>g</mi><mi>o</mi><mi>e</mi><mi>r</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mi>d</mi><mi>e</mi><mi>s</mi><mi>b</mi><mi>e</mi><mi>r</mi><mi>d</mi><mi>i</mi><mi>n</mi><mi>e</mi><mi>t</mi><mi>a</mi><mi>n</mi><mspace width=\"0.222em\"></mspace><mi>e</mi><mi>g</mi><mi>o</mi><mi>t</mi><mi>e</mi><mi>k</mi><mi>o</mi><mspace width=\"0.222em\"></mspace><mi>p</mi><mi>r</mi><mi>o</mi><mi>b</mi><mi>a</mi><mi>b</mi><mi>i</mi><mi>l</mi><mi>i</mi><mi>t</mi><mi>a</mi><mi>t</mi><mi>e</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace></mrow></mfrac></mrow></math> Zein da <math display=\"inline\"><mi>α</mi></math> parametroaren balioa aurreko hiru kasuetan?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Partikula bereizgarriak (A, B): bakoitza 3 mailetako edozeinetan egon daiteke, bestea gorabehera; <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn><mo>=</mo><mn>9</mn></mrow></math> mikroegoera: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>9</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Bosoi bereiztezinak: mikroegoerak 3 mailetako 2 partikulen errepikapenezko konbinazioak dira, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mrow><mn>3</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mn>4</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>6</mn></mrow></math>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>6</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "c) Fermioi bereiztezinak (esklusio-printzipioa: gehienez partikula bat mailako): <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>3</mn></mrow></math>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>3</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d) Kasu bakoitzean zenbatuz aurreko mikroegoeretatik zenbatek dituzten bi partikulak maila berean, eta zenbatek maila desberdinetan:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Bereizgarriak: 3 mikroegoera biak maila berean dituztela (AA hiru mailetako bakoitzean <math display=\"inline\"><mi>×</mi></math> ordena bakarra <math display=\"inline\"><mrow><mo>=</mo><mn>3</mn></mrow></math>, 9tik), eta 6 maila desberdinetan <math display=\"inline\"><mrow><mo>→</mo><mi>α</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mi>/</mi><mn>9</mn></mrow><mrow><mn>6</mn><mi>/</mi><mn>9</mn></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>.",
        "Bosoiak: 3 mikroegoera biak maila berean dituztela, eta 3 maila desberdinetan <math display=\"inline\"><mrow><mo>→</mo><mi>α</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mi>/</mi><mn>6</mn></mrow><mrow><mn>3</mn><mi>/</mi><mn>6</mn></mrow></mfrac><mo>=</mo><mn>1</mn></mrow></math>.",
        "Fermioiak: 0 mikroegoera biak maila berean dituztela (debekatua), eta 3 maila desberdinetan <math display=\"inline\"><mrow><mo>→</mo><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "Fermioiek elkar &quot;saihestu&quot; egiten dute (<math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math>, Pauliren esklusioa), eta bosoiek elkar &quot;nahiago&quot; dute (<math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>1</mn></mrow></math>, kasu bereizgarriaren <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> baino handiagoa) — hiru estatistiken arteko alde kualitatiboa bistaratzeko modu oso zuzena."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "[3. kapituluan estalia: Fermi-gasaren batez besteko energia]",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>V</mi></math> bolumena eta <math display=\"inline\"><mi>N</mi></math> elektroi gasa <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> tenperaturan dago. Kalkulatu elektroien batez besteko energia, Fermi-ren energiaren funtzioan."
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
       "html": "Eguzkia bezalako izarren erregaia bukatzen denean, hoztu, kolapsatu eta nano zuri bihurtzen dira. Grabitazio-presioa eta elektroi-gasaren presioa berdindu egiten dira."
      },
      {
       "mota": "testua",
       "html": "a) Demagun nano zuri baten masa eta erradioa <math display=\"inline\"><mi>M</mi></math> eta <math display=\"inline\"><mi>R</mi></math> direla. Ia masa osoa protoien masa da. Izarraren karga elektrikoa nulua denez, zenbat elektroi daude izar horretan? Zein da elektroi-gasaren elektroi-dentsitatea?"
      },
      {
       "mota": "testua",
       "html": "b) Izarraren tenperatura <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> dela onartuko da. Egiaztatu elektroi gasaren energia zinetikoa honako hau dela, <math display=\"block\"><mrow><msub><mi>E</mi><mi>e</mi></msub><mo>=</mo><mfrac><mrow><mn>3</mn><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mrow><mn>10</mn><msub><mi>m</mi><mi>e</mi></msub><msup><mi>R</mi><mn>2</mn></msup></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>9</mn><mi>π</mi></mrow><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>M</mi><msub><mi>m</mi><mi>p</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>5</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) Energia potentzial grabitatorioa honako hau da, <math display=\"block\"><mrow><msub><mi>E</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>G</mi><msup><mi>M</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>5</mn><mi>R</mi></mrow></mfrac></mrow></math> eta energia osoa <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>E</mi><mi>e</mi></msub><mo>+</mo><msub><mi>E</mi><mi>p</mi></msub></mrow></math> da. Energia hori minimizatuz, izarraren oreka-erradioa honako hau dela egiaztatu: <math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mi>G</mi><msub><mi>m</mi><mi>e</mi></msub></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>81</mn><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>16</mn><msubsup><mi>m</mi><mi>p</mi><mn>5</mn></msubsup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></msup><msup><mi>M</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "d) Nano zuri bihurtu eta gero, kalkulatu Eguzkiak izango duen erradioa. Alderatu balio hori eta gaur egungo balioa. Datuak: Eguzkiaren gaur egungo diametroa <math display=\"inline\"><mrow><mn>2</mn><mi>R</mi><mo>=</mo><mn>1.4</mn><mo>×</mo><msup><mn>10</mn><mn>9</mn></msup></mrow></math> m; Eguzkiaren <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>2.0</mn><mo>×</mo><msup><mn>10</mn><mn>30</mn></msup></mrow></math> kg masa."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Protoi bakoitzak <math display=\"inline\"><mrow><mi>+</mi><mi>e</mi></mrow></math> karga dakarrenez, eta hari elkartutako elektroiak <math display=\"inline\"><mrow><mi>−</mi><mi>e</mi></mrow></math>, elektroi kopurua protoienaren berdina da, <math display=\"inline\"><mrow><msub><mi>N</mi><mi>e</mi></msub><mo>=</mo><mi>M</mi><mi>/</mi><msub><mi>m</mi><mi>p</mi></msub></mrow></math>, eta elektroi-dentsitatea <math display=\"inline\"><mrow><msub><mi>n</mi><mi>e</mi></msub><mo>=</mo><msub><mi>N</mi><mi>e</mi></msub><mi>/</mi><mi>V</mi><mo>=</mo><mn>3</mn><mi>M</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msub><mi>m</mi><mi>p</mi></msub><msup><mi>R</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"inline\"><mrow><msub><mi>E</mi><mi>F</mi></msub><mo>=</mo><msup><mi>ħ</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>m</mi><mi>e</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>π</mi><mn>2</mn></msup><msub><mi>n</mi><mi>e</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>E</mi><mi>e</mi></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>5</mn><msub><mi>N</mi><mi>e</mi></msub><msub><mi>E</mi><mi>F</mi></msub></mrow></math> erabiliz (elektroi-gasaren batez besteko energia <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>-n, 3. problema), (a) ataleko <math display=\"inline\"><msub><mi>n</mi><mi>e</mi></msub></math> eta <math display=\"inline\"><msub><mi>N</mi><mi>e</mi></msub></math> ordezkatuz eta <math display=\"inline\"><mi>π</mi></math>-ren berreturak sinplifikatuz, emandako adierazpena lortzen da, zehazki."
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>E</mi><mrow><mi>e</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>+</mo><msub><mi>E</mi><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math> minimizatuz <math display=\"inline\"><mi>R</mi></math>-rekiko (<math display=\"inline\"><mrow><mi>d</mi><mi>E</mi><mi>/</mi><mi>d</mi><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math>; izan ere, <math display=\"inline\"><mrow><msub><mi>E</mi><mi>e</mi></msub><mo>∝</mo><msup><mi>R</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>E</mi><mi>p</mi></msub><mo>∝</mo><msup><mi>R</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> kontrako zeinuekin lehiatzen dira), <math display=\"inline\"><mi>R</mi></math> askatzen da, eta nano zuriaren oreka-erradioaren formula lortzen da — elektroien endekapen-presioa (kolapsoari aurre egiten diona) grabitatearekin orekatzearen emaitza."
      },
      {
       "mota": "testua",
       "html": "d) <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>2.0</mn><mo>×</mo><msup><mn>10</mn><mn>30</mn></msup></mrow></math> kg ordezkatuz: <math display=\"block\"><mrow><mi>R</mi><mo>≈</mo><mn>2.3</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≈</mo><mn>0.033</mn><msub><mi>R</mi><mrow><mtext mathvariant=\"normal\">Sol,actual </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mrow></math> Eguzkiak, nano zuri bihurtuta, gaur egungo erradioa baino 30 bat aldiz txikiagoa den erradioa izango luke (Lurraren erradioaren ordenakoa)."
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
       "html": "<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>He helio likidoa helio-isotopoa da. Spin osoa <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> da, beraz, fermioia da."
      },
      {
       "mota": "testua",
       "html": "a) Sistema fermioi-gas moduan hartuta, kalkulatu <math display=\"inline\"><msub><mi>E</mi><mi>F</mi></msub></math> Fermi-ren energia. Likidoaren dentsitatea <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mn>0.081</mn></mrow></math> g/cm<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>-koa dela hartu kontuan."
      },
      {
       "mota": "testua",
       "html": "b) Zein da <math display=\"inline\"><msub><mi>T</mi><mi>F</mi></msub></math>, hau da, Fermiren energiari dagokion tenperatura? Tenperatura horretan, efektu kuantikoak garrantzitsuak izaten hasten dira."
      },
      {
       "mota": "testua",
       "html": "c) Kalkulatu bero-ahalmena <math display=\"inline\"><mrow><mi>T</mi><mo>≪</mo><msub><mi>T</mi><mi>F</mi></msub></mrow></math> tenperaturatan."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mi>n</mi></math> izanik <math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>He atomoen dentsitatea (<math display=\"inline\"><mi>ρ</mi></math>-tik eta masa atomikotik abiatuta): <math display=\"block\"><mrow><msub><mi>E</mi><mi>F</mi></msub><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>π</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><msup><mi>n</mi><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><mo>≈</mo><mn>6.8</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>23</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>0.42</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> meV </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><msub><mi>T</mi><mi>F</mi></msub><mo>=</mo><mfrac><msub><mi>E</mi><mi>F</mi></msub><msub><mi>k</mi><mi>B</mi></msub></mfrac><mo>≈</mo><mn>4.9</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"inline\"><msub><mi>T</mi><mi>F</mi></msub></math>-ren oso azpitik, Fermiren mailatik gertu dauden fermioiak baino ezin dira termikoki kitzikatu (guztizkoaren <math display=\"inline\"><mrow><mi>T</mi><mi>/</mi><msub><mi>T</mi><mi>F</mi></msub></mrow></math> ordenako frakzioa, 3. kapituluan metal bateko elektroi-gasarentzat kualitatiboki eztabaidatu zen bezala); horrek <math display=\"inline\"><mi>T</mi></math>-rekiko bero espezifiko lineala ematen du, <math display=\"block\"><mrow><msub><mi>c</mi><mi>v</mi></msub><mo>≈</mo><mfrac><mrow><mi>N</mi><msubsup><mi>k</mi><mi>B</mi><mn>2</mn></msubsup></mrow><msub><mi>E</mi><mi>F</mi></msub></mfrac><mi>T</mi></mrow></math> — gas klasiko batek iragarriko lukeen bero espezifiko konstantetik (<math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>) oso desberdina, eta metal bateko elektroi-gasa menderatzen duen endekapen kuantikoaren fisika beraren beste adierazpen bat."
      }
     ]
    },
    {
     "mota": "hutsunea",
     "izenburua": "Fisika estatistikoa: kolektibitate kanonikoaren formalismo abstraktua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Banaketa nagusiak (Boltzmann, Fermi-Dirac, Bose-Einstein), elektroi askeen gasa, Einstein-en solidoaren berotasun espezifikoa, gas ideal klasikoa (Maxwell-Boltzmann, Sackur-Tetrode, Gibbs-en paradoxa), rotor zurruna/molekula diatomikoa eta Bose-Einstein kondentsazioa badaude gainean, bakoitza bere azterketa/ariketa ofizialekin (8. kapitulua). Falta da oraindik: kolektibitate kanoniko eta handiaren tratamendu formal abstraktua (sistema osoaren funtzio banatzailea <math display=\"inline\"><mi>Z</mi></math> egoera mikroskopiko guztien baturatzat, partikula bakarraren <math display=\"inline\"><mi>z</mi></math>-tik bereizia; fluktuazioak; potentzial kimikoa modu orokorrean)."
      }
     ]
    }
   ]
  }
 ]
};
