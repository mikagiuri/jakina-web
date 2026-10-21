/* JAKINA · kapitulua «B9.6 - Mekanika analitikoa eta Lagrange-dispositiboak» (05mk_06analitikoa), desde edicion2/kapituluak/05mk_06analitikoa/05mk_06analitikoa.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["05mk_06analitikoa"] = {
 "gakoa": "05mk_06analitikoa",
 "titulua": "JAKINA - B9 - Mekanika klasikoa - 6/10",
 "azala": "B9.6 - Mekanika analitikoa eta Lagrange-dispositiboak",
 "azpititulua": "III. aroa - L2",
 "iturburua": "kapituluak/05mk_06analitikoa/05mk_06analitikoa.typ",
 "sarrera": [],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Mekanika analitikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "1788an agertu zen Lagrangeren <em>Mécanique Analytique</em>  liburua: lehenago egindakoa biltzeaz gain, mekanika egiteko formalismo berria sortu zen han, geroago Laplace, Hamilton, Jacobi eta beste batzuen lanei esker, XIX. mendeko mekanika analitikoa izango zena. Mekanika analitikoa oso dotorea da matematikaren aldetik<span class=\"j-oin\">[<em>Matematikako Shakespeare-ren poema zientifikoa</em>, Hamiltonen ustez.]</span>  (matematikari batzuek uste omen dute matematikaren arloa dela<span class=\"j-oin\">[Aipaturiko liburuko hitzaurrean hauxe dio Lagrangek: <em>Ez da irudirik aurkituko lan honetan. Bertan azaltzen ditudan metodoek ez dute eraikuntza edo arrazoibide geometriko zein mekanikorik behar, eragiketa aljebraikoak baizik, prozedura erregular eta uniforme bati lotuak. Analisia maite dutenek atseginez ikusiko dute Mekanika haren adar berri bihurtzen, eta haren eremua zabaldu izana eskertuko didate.</em>]</span>) baina fisikarion ikuspuntutik bestelako abantailak ditu. Kalkuluak egiteko oso egokia da, hasteko: problemari ondoen egokitzen zaizkion koordenatuak era naturalean erabil daitezke; nahi izanez gero, lotura-indarrak ia ezer egin gabe desagertzen dira (aitortu behar da, baina, marruskadura lehor dinamikoa, elkar ukitzen duten gainazalen artean higidura erlatiboa dagoenean sortzen dena, ez dela hain erraz sartzen formalismoan<span class=\"j-oin\">[Hala ere, batzuetan erraz egin daiteke: ikus 6.83 problema.]</span>); inertzia-indarrak automatikoki agertzen dira, eta abar. Gainera, mekanika analitikoan erabilitako hainbat kontzeptu (lagrangearra, hamiltondarra, aldakuntza-printzipioak, simetrien eta kontserbazio-legeen arteko erlazioa, eta abar), behar bezala hedatu eta egokitu ondoren, egungo fisika teorikoaren oinarrizko ideiak dira."
    },
    {
     "mota": "testua",
     "html": "Koordenatu orokortuak eta loturak aztertu ondoren, estatika lagrangearra aztertuko dugu. Aldakuntzen kalkuluak mekanika egiteko beste modu bat<span class=\"j-oin\">[Formalismo honen eta mekanika bektorialaren arteko baliokidetasuna D eranskinean aztertzen da.]</span> —Hamiltonen printzipio dotorea— ahalbidetzen du eta hortik mekanika lagrangearra lortuko dugu. Legendreren transformazioaren bidez hirugarren formalismo bat aztertuko dugu: Hamiltonen ekuazio kanonikoak. Zoritxarrez, testu honen maila kontuan harturik, ez dugu ikusiko mekanika kuantikoaren sorreran hain eragin handia izan zuen Hamilton eta Jacobiren teoria."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Koordenatu orokortuak eta loturak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Atal honetan kontzeptu eta izen berriak apurka-apurka sartuko ditugu adibideen bidez, errazenetik zailenera joatean ideiak hobeki uler ditzagun."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema mekaniko batzuk"
    },
    {
     "mota": "testua",
     "html": "Partikula puntuala"
    },
    {
     "mota": "testua",
     "html": "Kontsidera dezagun espazioan zehar higi daitekeen partikula puntual batez osaturiko sistema mekanikoa. Aldiune bakoitzean sistemaren <strong>konfigurazioa</strong>, hau da, partikula bakarraren posizioa, ezagutzeko, partikularen <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> posizio-bektorea erabil dezakegu<span class=\"j-oin\">[Sistema mekaniko bakoitza aztertzeko erreferentzia-sistema inertzial egoki bat aukeratu dugula emango dugu beti gai honetan, esplizituki hala esaten ez bada ere.]</span>, jakina; baina ikusiko dugunez, mekanika analitikoan azkenean bektoreak desagertu egingo dira eta funtzio eskalarrak erabiliko ditugu. Badakigu nola egin hori kasu honetan: posizio-bektorearen ordez, bere hiru osagaiak diren partikularen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> koordenatu kartesiarrak erabil ditzakegu: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>y</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi>z</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> Bestalde, koordenatu kartesiarrak errazak izan arren, ez dira beti egokienak problemaren simetriak kontuan hartzeko eta, ondorioz, ebazpen matematikoa errazteko. Nahiz eta koordenatu-sistemak infinituak izan, testu honetan B.1 atalean aztertzen direnak —eta euren aldaera nabari batzuk— erabiliko ditugu gehienetan: kartesiarrak, zilindrikoak eta esferikoak. <br> Hemengo sistema mekanikoaren konfigurazioa zehazteko partikularen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> koordenatu zilindrikoak erabiltzen baditugu, horiek dira aukeratu ditugun"
    },
    {
     "mota": "testua",
     "html": "<strong>koordenatu orokortuak</strong>"
    },
    {
     "mota": "testua",
     "html": ". «Orokortu» hitzarekin adierazi nahi da koordenatua ez dela nahitaez kartesiarra izango (baina horrelakoa izango da kasu batzuetan, hala nola <math display=\"inline\"><mi>z</mi></math> koordenatua aipaturiko aukeran). Izan ere, dimentsioen aldetik edozein gauza izan daitezke: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>L</mi></mrow></math>, baina <math display=\"inline\"><mi>φ</mi></math> angelua dimentsio gabekoa da. Koordenatu orokortuen eta kartesiarren arteko erlazioa <strong>transformazio-ekuazioek</strong> emandakoa da: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>ρ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>ρ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>z</mi><mi>.</mi></mrow></math> Ekuazio bektorial bakarraren bidez idatz daitezke hauek, noski: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>ρ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>ρ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi>z</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> Koordenatu orokortutzat <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> polarrak aukeratzen baditugu, transformazio-ekuazioak <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> dira edo, nahiago bada, ondokoa: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> Aukera guztiekin gauza bat ez da aldatu, konfigurazioa adierazteko behar diren koordenatu orokortuen kopurua,"
    },
    {
     "mota": "testua",
     "html": "<strong>askatasun-graduen kopurua</strong>"
    },
    {
     "mota": "testua",
     "html": "deitzen dena: <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> kasu honetan, zeren partikula espazioan inolako oztoporik gabe higi daitekeela eta, beraz, hiru koordenatu orokortu independenteak direla jo baitugu inplizituki. Honekin esan nahi da hiru koordenatuetako bakoitza, besteen balioak kontuan hartu gabe, nahi den moduan aukera dezakegula (hastapen-baldintzak ematean, adibidez) sistemaren definizioa aldatu gabe (gero, noski, mekanikaren lege dinamikoen arabera aldatuko dira denboran zehar; baina hori partikulak pairatzen dituen indarrak jakin ondoren higidura-ekuazioetan aztertu beharko da, eta ez konfigurazioaren definizioan)."
    },
    {
     "mota": "testua",
     "html": "Partikula-sistema"
    },
    {
     "mota": "testua",
     "html": "Gure sistema mekanikoa orain <math display=\"inline\"><mi>N</mi></math> partikula puntualez osaturikoa bada, konfigurazioa ezagutzeko <math display=\"inline\"><mi>N</mi></math> partikulen posizioak zehazteko <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mi>N</mi></mrow></math> koordenatu orokortu aukeratu behar dira; hortaz, askatasun-graduak <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mi>N</mi></mrow></math> dira. <br> Adibidez, <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>3</mn></mrow></math> partikula badira eta lehen partikularen posizioa adierazteko bere koordenatu esferikoak aukeratzen baditugu, bigarrenaren kasuan kartesiarrak eta hirugarrenarenean zilindrikoak, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><msub><mi>q</mi><mn>2</mn></msub><mo>,</mo><msub><mi>q</mi><mn>3</mn></msub><mo>,</mo><msub><mi>q</mi><mn>4</mn></msub><mo>,</mo><msub><mi>q</mi><mn>5</mn></msub><mo>,</mo><msub><mi>q</mi><mn>6</mn></msub><mo>,</mo><msub><mi>q</mi><mn>7</mn></msub><mo>,</mo><msub><mi>q</mi><mn>8</mn></msub><mo>,</mo><msub><mi>q</mi><mn>9</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>1</mn></msub><mo>,</mo><msub><mi>θ</mi><mn>1</mn></msub><mo>,</mo><msub><mi>φ</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo>,</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><msub><mi>ρ</mi><mn>3</mn></msub><mo>,</mo><msub><mi>φ</mi><mn>3</mn></msub><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dira koordenatu orokortuak eta transformazio-ekuazioak <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>r</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><msub><mi>r</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>1</mn></msub><mi mathvariant=\"bold-italic\">𝒌</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><msub><mi>z</mi><mn>2</mn></msub><mi mathvariant=\"bold-italic\">𝒌</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>3</mn></msub><mo>=</mo><msub><mi>ρ</mi><mn>3</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>3</mn></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>ρ</mi><mn>3</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>3</mn></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><msub><mi>z</mi><mn>3</mn></msub><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> edota hurrengoak: <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>y</mi><mn>2</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>2</mn></msub><mo>=</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><msub><mi>ρ</mi><mn>3</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>3</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>y</mi><mn>3</mn></msub><mo>=</mo><msub><mi>ρ</mi><mn>3</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>3</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>3</mn></msub><mo>=</mo><msub><mi>z</mi><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Pendulu esferikoa"
    },
    {
     "mota": "testua",
     "html": "Kontsidera dezagun masa gabeko soka baten bidez <math display=\"inline\"><mi>O</mi></math> puntu finkotik esekitako <math display=\"inline\"><mi>m</mi></math> masa puntuala. Azken honen eta esekidura-puntuaren arteko <math display=\"inline\"><mi>l</mi></math> distantzia konstantea izatea da mekanikan pendulu esferikoaren definizioa. Sistemaren definizioan, beraz, partikularen konfigurazioari baldintza bat, <strong>lotura</strong> bat, ezartzen diogu. Baldintza hori betetzen ez bada —soka luzatzen, apurtzen edo tolesten delako—, sistema mekanikoa bestelakoa da, ez pendulu esferikoa."
    },
    {
     "mota": "irudia",
     "oina": "Pendulu esferikoa.",
     "src": "media/irudiak/db1defcf3021531e.svg",
     "zabalera": 66
    },
    {
     "mota": "testua",
     "html": "Kasu honetan bete behar den baldintza adierazten duen <strong>lotura-ekuazioa</strong> honela idazten da, koordenatu kartesiarretan erreferentzia-sistemaren jatorria <math display=\"inline\"><mi>O</mi></math> esekidura-puntuan aukeratzen bada: <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo>=</mo><msup><mi>l</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Ekuazio honetan ikusten dugu hiru koordenatu kartesiarrak ez direla elkarren independenteak: haietariko bi (<math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>y</mi></math>, adibidez) nahi bezala aukera daitezke eta, beraz, koordenatu orokortutzat har ditzakegu; baina hori egin ondoren, hirugarrena (<math display=\"inline\"><mi>z</mi></math>) ezin da edozein modutan aukeratu, (6.22) lotura-ekuazioak emandakoetako bat baita. Egia esan, koordenatu kartesiarrak ez dira egokienak pendulu esferikoa aztertzeko. Honen simetria hobeto errespetatzen dute koordenatu polar esferikoek. Izan ere, koordenatu esferikoetan lotura-ekuazioa oso erraza da: <math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mi>l</mi><mi>.</mi></mrow></math> Beraz, <math display=\"inline\"><mi>θ</mi></math> eta <math display=\"inline\"><mi>φ</mi></math> angeluek ez dute inolako baldintzarik bete behar, nahi bezala aukera daitezke eta, ondorioz, bi koordenatu orokortu egoki dira: sistemaren konfigurazioa definitzeko nahikoa da sokaren norabidea eta noranzkoa ezagutzea, eta hori egiteko modu egokia aipaturiko bi angeluak erabiltzea da. Transformazio-ekuazioak <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> dira. Jakina, ondoko moduan ere idatz daitezke: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>l</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Idatzi lotura- eta transformazio-ekuazioak koordenatu zilindrikoetan."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bi koordenatu nahikoak dira sistemaren konfigurazio osoa deskribatzeko; beraz, sistemak <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mi>N</mi><mo>−</mo><mi>L</mi><mo>=</mo><mn>2</mn></mrow></math> askatasun-gradu ditu, partikulen kopurua <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>1</mn></mrow></math> baita eta lotura-ekuazioena <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>1</mn></mrow></math>. <br> Bestalde, badakigu zein den sokaren eragin dinamikoa: ukipen-indar bat eragiten du <math display=\"inline\"><mi>m</mi></math> partikularen gainean. Lotura gordetzeko sortzen diren indarrak <strong>lotura-indarrak</strong> dira. Kasu honetan lotura-indarra ibilbidearekiko perpendikularra denez ez du lanik egiten."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Pendulu matematikoa</span>"
      },
      {
       "mota": "testua",
       "html": ". Orain pendulua plano batean higitzen dela (soka batez lotu beharrean, planoarekiko perpendikularra den ardatz batetik hagatxo arin baten bidez esekitzen dugulako, edo hasierako abiadura esekidura-puntutik pasatzen den plano bertikal batean aukeratzen delako) pendulu matematikoa dugu. <br> (a) Nola adierazten da bigarren lotura hau, oszilazio-planoa <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi><mi>Z</mi></mrow></math> izateko moduan aukeratzen badugu erreferentzia-sistema? <br> (b) Zenbat askatasun-gradu ditu sistemak? <br> (c) Aukeratu koordenatu orokortu egokia(k) eta idatzi transformazio-ekuazioak."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Pendulu matematikoa ardatz batetik esekita badago, marruskadura arbuiagarria dela —eta, ondorioz, lotura-indarrak ez duela lanik egiten— joko dugu beti gai honetan, elkar ukitzen duten gainazalen arteko marruskadura lehor dinamikoa (baina ez estatikoa) beti arbuiatuko baitugu<span class=\"j-oin\">[Baina gogoratu 290. orrialdeko 3 oin-oharrean esandakoa.]</span>."
    },
    {
     "mota": "irudia",
     "oina": "Abiadura angeluar konstantez biratzen ari den hari erdizirkularra.",
     "src": "media/irudiak/6f0100274fd6e104.svg",
     "zabalera": 88
    },
    {
     "mota": "testua",
     "html": "Hari erdizirkular birakaria"
    },
    {
     "mota": "testua",
     "html": "6.3 irudiko burdin hari leun erdizirkularra <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez ari da biratzen ardatz bertikalaren inguruan. Pendulu esferikoaren kasuko erreferentzia-sistema bera aukeratuz, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>R</mi></mrow></math> lotura-ekuazioaz gain, <math display=\"block\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ω</mi></mrow></math> dugu forma diferentzialean. Hau integratuz bigarren lotura lortzen dugu, hautazko <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math> integrazio-konstantearen bidez: <math display=\"block\"><mrow><mi>φ</mi><mo>=</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math> Transformazio-ekuazioak <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> edota <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> dira. Kasu honetan <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>L</mi><mo>=</mo><mn>2</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mi>N</mi><mo>−</mo><mi>L</mi><mo>=</mo><mn>1</mn></mrow></math> dugu."
    },
    {
     "mota": "testua",
     "html": "Solido zurruna"
    },
    {
     "mota": "testua",
     "html": "Dakigunez, puntuen arteko distantziak konstanteak izatea da solido zurrunaren definizioa mekanikan. Solidoan <math display=\"inline\"><mrow><mi>N</mi><mo>≫</mo><mn>1</mn></mrow></math> partikula badaude, bikoteen kopurua <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math> da, eta bakoitzeko <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><msub><mi>C</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></mrow></math> moduko lotura bat dugu, <math display=\"inline\"><msub><mi>C</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> konstante egokiarekin; baina ez da pentsatu behar denak independenteak direnik, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mi>N</mi><mo>−</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math> negatiboa baita <math display=\"inline\"><mi>N</mi></math> handia denean. Lotura-ekuazio independenteak zenbatu beharrean, 5.1.1 atalean zuzenean frogatu genuen askatasun-graduak <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>6</mn></mrow></math> direla, oro har. Jakina, goian adibide batzuetan egin denez, bestelako loturak ezartzen bazaizkio solidoari (hala nola ardatz finko baten inguruan biratzea, soka baten bidez esekita egotea, gainazal baten gainean edo plano batean higitzea, eta abar), askatasun-gradu gutxiago geratuko dira."
    },
    {
     "mota": "testua",
     "html": "Atwooden makina"
    },
    {
     "mota": "testua",
     "html": "Erreferentzia-sistema 6.4 irudian erakusten den moduan aukeratuz, blokeen higidurak bertikalak direlako hipotesia hurrengo lau lotura-ekuazioen bidez adierazten da, <math display=\"inline\"><msub><mi>C</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>C</mi><mn>2</mn></msub></math> konstanteen bidez: <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Gainera, soka luzatu ezinezkoa izatea honako lotura hau da: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>+</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>+</mi><mi>π</mi><mi>R</mi><mo>=</mo><mi>l</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Atwooden makina.",
     "src": "media/irudiak/18a85eff82e9f06c.svg",
     "zabalera": 89
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi>l</mi></math> eta <math display=\"inline\"><mi>R</mi></math> sokaren luzera eta txirrikaren erradioa diren. <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>2</mn></mrow></math> partikula dira eta <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>5</mn></mrow></math> lotura; beraz, askatasun-gradu bakarra geratzen zaigu: <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mi>N</mi><mo>−</mo><mi>L</mi><mo>=</mo><mn>1</mn></mrow></math>. Koordenatu orokortutzat irudiko <math display=\"inline\"><mi>q</mi></math> aukeratuz, honela idazten dira transformazio-ekuazioak: <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi>q</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>q</mi><mo>+</mo><mi>π</mi><mi>R</mi><mo>−</mo><mi>l</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Ikusiko dugunez, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>,</mo><msub><mi>C</mi><mn>2</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>π</mi><mi>R</mi><mo>−</mo><mi>l</mi></mrow></math> konstanteak garrantzi gabekoak dira."
    },
    {
     "mota": "testua",
     "html": "Plano aldapatsua"
    },
    {
     "mota": "testua",
     "html": "6.5 irudiko kasuan blokea beti plano bertikal batean egotea da aurreneko lotura. Higidura-planoa <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math> izateko moduan aukeratzen badugu gure erreferentzia-sistema, lotura-ekuazioa <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>  (edo beste konstanteren bat) izango da. Bigarren lotura, partikula beti 6.3 irudiko plano aldapatsuan egotea da, ardatz koordenatuak modu egokian aukeraturik <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> moduan idatz daitekeena."
    },
    {
     "mota": "irudia",
     "oina": "Plano aldapatsua.",
     "src": "media/irudiak/99e99e5e56b06b07.svg",
     "zabalera": 142
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Nola idatziko litzateke bigarren lotura-ekuazioa <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> ardatza norabide bertikalean aukeratuko bagenu?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Egia izan, planoan zehar higitzen dena ez da inoiz puntuala izango, partikula-sistema bat baizik; baina askatasun-gradu bakarreko sistema dela da hemen interesatzen zaiguna: nahikoa da koordenatu orokortu bakarrarekin (masa-zentroaren <math display=\"inline\"><mi>x</mi></math> koordenatua edo, nahiago bada, bere altuera, adibidez) konfigurazioa (sistemako puntu guztien posizioa) ezagutzeko. Lotura-indarra ukipen-indarra da eta, kasu orokorrean bi osagai ditu. Osagai perpendikularrak, normalak, ez du lanik egingo eta osagai tangentea, marruskadura, arbuiagarria dela onartuko dugu."
    },
    {
     "mota": "testua",
     "html": "Higidura-planoan dagoena disko edo eraztun bat bada, hiru posibilitate ditugu. Kasu orokorrean eraztuna biratu eta labaindu egingo da. Bere puntu guztietako posizioa eta, beraz, sistemaren konfigurazioa zehazteko, bi koordenatu orokortu behar ditugu: <math display=\"inline\"><mi>x</mi></math> erabil dezakegu masa-zentroaren posizioa ezagutzeko eta <math display=\"inline\"><mi>φ</mi></math> angelua zentroaren inguruko orientazioa emateko. Labainketa badago, lotura-indarra normala dela emango dugu berriro."
    },
    {
     "mota": "irudia",
     "oina": "Eraztun bat plano aldapatsuan.",
     "src": "media/irudiak/e113765cf0cca1bc.svg",
     "zabalera": 156
    },
    {
     "mota": "testua",
     "html": "Eraztuna biratu gabe jaisten bada, beste lotura bat dugu, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo></mrow></math> konstantea, eta askatasun-gradu bakarra geratzen zaigu. Gauza bera gertatzen da eraztuna labaintzen ez bada. Izan ere, labainketarik ez egotea ukipen-puntua (unetik unera aldatzen dena) geldirik egotea da. Eraztunaren masa-zentroaren <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> abiadura, beraz, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>R</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> izango da (gogoratu (5.6) abiadura-eremua). Ondorioz, lotura-ekuazioa <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>R</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> forma diferentzialean edo, hau integratuz, <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>φ</mi><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> forma finituan idatz daiteke, <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>φ</mi></math> koordenatuen jatorrien arteko erlazioa ematen duen <math display=\"inline\"><mrow><mi>−</mi><mi>R</mi><msub><mi>φ</mi><mn>0</mn></msub></mrow></math> integrazio-konstantea erabiliz. Beraz, koordenatu orokortu (independente) bakarra dugu (<math display=\"inline\"><mi>φ</mi></math>, adibidez) eta hauexek dira transformazio-ekuazioak: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>φ</mi><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea</mtext></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Dakigunez, labainketarik ez egoteko, marruskadura-indarra behar-beharrezkoa da, baina ukipen-puntua pausagunean dagoenez, lotura-indarrak ez du lanik egingo."
    },
    {
     "mota": "testua",
     "html": "Plano aldapatsu higikorra"
    },
    {
     "mota": "testua",
     "html": "Azter dezagun 6.7 irudiko sistema, horizontalean marruskadurarik gabe higi daitekeen kasuan. Koordenatu orokortutzat 6.7 irudiko <math display=\"inline\"><mi>r</mi></math> eta <math display=\"inline\"><mi>s</mi></math> aukeratzen baditugu, honela idazten dira transformazio-ekuazioak, 1 eta 2 azpindizeekin prisma eta blokea hurrenez hurren izendatzen baditugu: <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>r</mi><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>r</mi><mo>+</mo><mi>s</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>+</mo><msub><mi>C</mi><mn>3</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>C</mi><mn>4</mn></msub><mo>−</mo><mi>s</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Plano aldapatsu higikorra.",
     "src": "media/irudiak/e45a0b8f752f9aea.svg",
     "zabalera": 156
    },
    {
     "mota": "testua",
     "html": "edota <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>s</mi><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>+</mo><msub><mi>C</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>4</mn></msub><mo>−</mo><mi>s</mi><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒋</mi><mi>.</mi></mrow></math> Hemen, <math display=\"inline\"><msub><mi>C</mi><mi>i</mi></msub></math> konstanteak solidoen masa-zentroen kokapen zehatza adierazteko erabili ditugu, baina horrelako konstanteak ez dira higidura-ekuazioetan agertuko eta hasieratik arbuiatuko ditugu hurrengo adibide guztietan."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aukeratu koordenatu orokortu egokiak 6.8 irudiko pendulu bikoitzaren kasuan, higidura plano bertikal batean gertatzen den kasuan. Idatzi transformazio-ekuazioak."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Pendulu bikoitza.",
     "src": "media/irudiak/82ef47c3d96f992d.svg",
     "zabalera": 78
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lotura holonomoak"
    },
    {
     "mota": "testua",
     "html": "Aurreko adibideetan aztertu ditugun lotura guztietan, eskuineko gaia ezkerraldera eramanez, lotura-ekuazioa beti idatz zitekeen <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>N</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> moduan, <math display=\"inline\"><mi>f</mi></math> funtzio egokiarekin. Lotura-ekuazioa aipaturiko eran edo, bektoreen osagaiak erabiliz, <math display=\"block\"><mrow><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>N</mi></msub><mo>,</mo><msub><mi>y</mi><mi>N</mi></msub><mo>,</mo><msub><mi>z</mi><mi>N</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> modu baliokidean, idatz daitekeenean, lotura <strong>holonomoa</strong> dela esaten da. Lotura-ekuazioa bestelakoa bada —<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>,</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> edo <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>,</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≥</mo><mn>0</mn></mrow></math>, adibidez—, lotura ez da holonomoa; baina <em>gai honetan lotura guztiak holonomoak direla onartuko dugu beti.</em>  <br> Lotura-ekuazioan denbora ez bada esplizituki agertzen, <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>N</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> edo <math display=\"block\"><mrow><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>N</mi></msub><mo>,</mo><msub><mi>y</mi><mi>N</mi></msub><mo>,</mo><msub><mi>z</mi><mi>N</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> moduan idazten da eta lotura holonomoa <strong>eskleronomoa</strong> edo <strong>egonkorra</strong> dela esango dugu. Bestela, lotura <strong>erreonomoa</strong> edo <strong>higikorra</strong> da. Aurreko adibide guztietan loturak holonomoak eta egonkorrak izan dira, salbuespen batean izan ezik: 294. orriko hari leun birakarian (6.29) lotura higikorra zen."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lotura-indarrak"
    },
    {
     "mota": "testua",
     "html": "Loturetan indarrak aplikatzen dira sistema mekanikoaren gainean. Lotura-indarrak oso ezagunak ditugu: sokak penduluaren masan eragindako ukipen-indarra —sokaren masa arbuiagarria denean tentsioaren berdina dena—, bi gainazalek elkar ukitzen dutenean agertzen diren normala eta marruskadura, eta abar. Hemendik aurrera beti onartuko dugu higidura erlatiboan dauden bi gainazalen arteko marruskadura arbuiagarria dela, indar hori ez baita hain erraz sartzen ikusiko dugun formalismoan (baina marruskadura estatikoa ez da beti nulua izango). Ikusiko dugunez, lotura-indarrak ez dira inondik agertuko mekanika lagrangearrean<span class=\"j-oin\">[ Kalkulatu nahi badira Lagrangeren biderkatzaileen metodoa erabil daiteke (ikus, adibidez, [10]).]</span>: izan ere, hau da kalkuluak egiteko formalismo honek duen abantaila nagusia. <br> Lotura-indarrak ez direnak"
    },
    {
     "mota": "testua",
     "html": "<strong>indar eragileak</strong>"
    },
    {
     "mota": "testua",
     "html": "deitzen dira. Adibide ezagunen artean honako hauek aipa daitezke: pisua (eta erakarpen grabitatorio orokorra), malguki batek muturrean jarritako masan eragindako indarra eta eremu elektrostatiko batek karga baten gainean egindakoa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Konfigurazio-espazioa"
    },
    {
     "mota": "testua",
     "html": "Orain badauzkagu gai honetan aztertuko ditugun sistema mekanikoen definizio zehatza emateko hiztegia eta kontzeptuak. Gure hipotesiak honako hauek izango dira beti:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Sisteman <math display=\"inline\"><mi>N</mi></math> partikula puntual daude. Erreferentzia-sistema inertzial batean euren posizioak <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></math> bektoreek emandakoak dira, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>N</mi></mrow></math> izanik."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<math display=\"inline\"><mi>L</mi></math> lotura holonomo independente bete behar dira:"
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>l</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>N</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Kasu berezietan <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>0</mn></mrow></math> izan daiteke.)"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Loturak <strong>idealak</strong>  dira: elkar ukitzen duten gainazalen arteko higidura erlatiboan marruskadura lehor dinamikoa arbuiagarria da<span class=\"j-oin\">[Baina gogoratu 290. orrialdeko 3 oin-oharrean esandakoa.]</span>. Marruskadura estatikoak, aldiz, ez du zertan arbuiagarria izan."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Askatasun-graduak <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mi>N</mi><mo>−</mo><mi>L</mi></mrow></math> dira eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>q</mi><mi>i</mi></msub><mo>:</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> koordenatu orokortuak aukeratu ondoren, transformazio-ekuazioen bidez lortzen dira kartesiarrak:"
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><msub><mi>q</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Jakina, lotura guztiak egonkorrak badira, denbora ez da esplizituki agertuko (6.63) transformazio-ekuazioetan, <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> baina, kasu orokorragoetan, loturak higikorrak izan daitezke. Koordenatu orokortuen balioen <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> multzo bakoitzak sistemaren konfigurazio bat definitzen du eta konfigurazio guztien multzoak espazio abstraktu bat: <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> koordenatuak onartzen dituen <strong>konfigurazio-espazioa</strong>. Adibidez, pendulu esferikoaren kasuan <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bikote bakoitzak konfigurazio bat definitzen du. Konfigurazio-espazioa penduluaren orientazio posible guztien multzoa da eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bikote guztien espazio matematikoaren bidez aztertuko dugu."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>k</mi></msub></math> indar eragile guztiak kontserbatzaileak dira eta, beraz, sistemaren energia potentzial osoa <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>N</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> bada, honela idazten dira:"
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>k</mi></msub><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>k</mi></msub></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><msub><mi>y</mi><mi>k</mi></msub></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><msub><mi>z</mi><mi>k</mi></msub></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(D.2.2 atalean ikusiko dugu, adibide berezi interesgarri batean, indar kontserbatzaile orokortuen kasuko energia potentzial orokortua.)"
    },
    {
     "mota": "testua",
     "html": "Higiduran zehar konfigurazioa nola aldatzen den aztertuko da hurrengo orrietan. Mekanika analitikoan sistema adierazten duen puntua konfigurazio-espazio abstraktuan higitzen da, baina gero transformazio-ekuazioak erabil daitezke ohiko espazioan higidura nolakoa den ezagutzeko. Pendulu esferikoaren kasuan, adibidez, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> eboluzioa ezagutu ondoren, (6.24)–(6.26) transformazio-ekuazioen bidez kalkula daiteke partikularen posizioa une orotan."
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Estatika analitikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hasteko, azter dezagun sistema orekan egoteko bete behar den baldintza, hau da, noiz egongo diren partikula guztiak pausagunean (edo noiz higituko diren abiadura konstantez). Mekanika analitikoan, D.3 atalean frogatzen denez, oreka-baldintzak (D.55)  dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Energia potentzialaren minimo, maximo edo bestelako mutur-puntuetan gertatzen da preseski oreka. Oreka\negonkorra energia potentzialaren minimoetan gertatuko da</em>"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-oin\">[<strong>Lagrangeren teorema</strong> deitzen den emaitza honen frogapena Dirichletena omen da (ikus [37]).]</span>. Baina, gogoratu kalkuluak koordenatu orokortuetan egiten direla: lotura-ekuazioak betetzen dituzten konfigurazioak kontsideratzen dira soilik aipaturiko minimoa kalkulatzean. <br> Kasu berezi interesgarri bat aipatu behar dugu. Indar eragileak pisuak badira, energia potentziala grabitatorioa izango da. <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatza norabide bertikalean eta gorantz aukeratzen bada, energia potentziala masa-zentroaren <math display=\"inline\"><mi>Z</mi></math> altuerarekiko proportzionala da, <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>k</mi></msub><mi>g</mi><msub><mi>z</mi><mi>k</mi></msub><mo>=</mo><mi>g</mi><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>k</mi></msub><msub><mi>z</mi><mi>k</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mi>Z</mi><mo>,</mo></mrow></math> eta oreka masa-zentroaren altueraren mutur-puntuetan gertatzen da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>Z</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ondorioz, <em>masa-zentroak loturak apurtu gabe izan dezakeen posiziorik baxuenean lortzen da oreka egonkorra</em>. <strong>Torricelliren printzipioa</strong> deritzo emaitza honi."
    },
    {
     "mota": "irudia",
     "oina": "Hagatxoaren oreka.",
     "src": "media/irudiak/c139248bf82a928f.svg",
     "zabalera": 126
    },
    {
     "mota": "testua",
     "html": "Adibide moduan kontsidera dezagun 6.9 irudiko hagatxo homogeneoaren oreka. Mahai eta hormaren artean dago plano bertikalean. Marruskadura arbuiagarria bada, Torricelliren printzipioa aplika dezakegu. Argi dago askatasun-gradu bakarra dagoela eta koordenatu orokortutzat <math display=\"inline\"><mi>α</mi></math> angelua aukeratuko dugu. Masa-zentroaren <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mi>h</mi><mo>−</mo><mi>d</mi></mrow></math> altuera kalkulatzeko, oinarrizko trigonometriaz baliatuko gara koordenatu orokortuen bidez <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mi>l</mi><mi>/</mi><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> lortzeko. Beraz, <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><mi>h</mi><mo>−</mo><mi>d</mi><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>−</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> dugu eta oreka-baldintza <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>Z</mi></mrow><mrow><mi>d</mi><mi>α</mi></mrow></mfrac><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>−</mo><mfrac><mi>a</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup></mfrac><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math> da. Oreka-posizioa, beraz, <math display=\"block\"><mrow><mi>α</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arccos</mi><mo>&#8289;</mo></mrow><mroot><mfrac><mrow><mn>2</mn><mi>a</mi></mrow><mi>l</mi></mfrac><mn>3</mn></mroot></mrow></math> da. Jakina, kosinuak 1 edo txikiagoa izan behar duenez, <math display=\"inline\"><mrow><mi>l</mi><mo>≥</mo><mn>2</mn><mi>a</mi></mrow></math> baldintza bete behar da oreka gertatu ahal izateko. Irudian argi dago zein den baldintza horren esanahia: masa-zentroa mahaiaren ertza baino altuago kokatu behar da orekan."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egonkorra al da oreka-posizioa?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ikusi dugunez, mahaiak eta hormak eragindako ukipen-indar normalak, ez zaizkigu agertu: lotura-indarrak dira. Mekanika bektorialean, ordea, azken hauek kontuan hartu behar dira eta hiru ezezagun egongo dira: normalen moduluak eta oreka-angelua. Horretarako hiru oreka-baldintza daude problema lau honetan: indar osoa zero izateari dagozkion biak eta indar-momentu osoaren bakarra. Estatika analitikoan, interesatzen ez zaizkigun normalak ez dira agertzen eta ezezagun bakarra lortzeko oreka-ekuazio bakarra ebatzi behar da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili mekanika bektoriala oreka-posizioa lortzeko."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Disko desorekatua malda batean: oreka, egonkortasuna eta oszilazioak"
    },
    {
     "mota": "testua",
     "html": "<em><math display=\"inline\"><mi>R</mi></math> erradioko eta <math display=\"inline\"><mi>M</mi></math> masako disko homogeneo batek <math display=\"inline\"><mi>β</mi></math> angeluko malda finko baten gainean\nerrodatzen du, labaintzen gabe (marruskadura estatiko nahikoa dago). Diskoaren ertzean <math display=\"inline\"><mi>m</mi></math> masako\npartikula puntual bat dago tinko finkatuta.<span class=\"j-oin\">[Hazia: Ecenarro, <em>Mecánica y Ondas: Problemas de\nExamen Resueltos y Comentados</em>, 97Feb02 (13. or.), non bi varillaren gainean bermatutako disko baten\noreka-angelua bilatzen zen masa-zentroaren altueraren balio geldikorra eztabaidatuz. Hemen metodo hori\nbera gorde da, baina beste dispositibo batera eramanda —malda batean errodatzen duen disko desorekatura—,\neta egonkortasuna, oszilazio txikiak eta <math display=\"inline\"><msub><mi>β</mi><mi>c</mi></msub></math> adarkatze-atalasea erantsi zaizkio.]</span> Grabitatea baino ez\ndu eragiten. Izan bedi <math display=\"inline\"><mi>θ</mi></math> diskoaren zentrotik partikularako erradioak bertikal beherakorrarekin\nosatzen duen angelua (aldapan gorako aldera positiboa). <br>\n<strong>(a)</strong> Masa-zentroaren altueraren metodo analitikoaz (haziko bera), lortu orekaren baldintza eta frogatu\noreka-orientazioa <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> dela. <strong>(b)</strong> Ekuazio diferentzialik ebatzi\ngabe, aztertu egonkortasuna: bereizi adar egonkorra eta ezegonkorra, eta aurkitu <math display=\"inline\"><msub><mi>β</mi><mi>c</mi></msub></math> malda kritikoa,\nzeinetik gora orekarik ez dagoen. <strong>(c)</strong> Lortu oreka egonkorraren inguruko oszilazio txikien maiztasuna.\n<strong>(d)</strong> Aztertu <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><msub><mi>β</mi><mi>c</mi></msub></mrow></math> muga-kasuak. <strong>(e)</strong> Zenbatekoa da diskoak labaindu\nez dezan behar den marruskadura-koefiziente estatikoaren gutxieneko balioa?</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/be6552a52b7861af.svg",
     "zabalera": 335
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Disko homogeneoa (<math display=\"inline\"><mrow><mi>R</mi><mo>,</mo><mi>M</mi></mrow></math>) <math display=\"inline\"><mi>β</mi></math> maldan labaindu gabe errodatzen da; <math display=\"inline\"><mi>m</mi></math> ertzeko masak aldaparen goiko aldean orekatzen du. <math display=\"inline\"><mi>θ</mi></math> bertikal beherakorretik neurtzen da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Sistemak askatasun-gradu bakarra du, errodatze-loturak diskoaren biraketa eta zentroaren lekualdaketa lotzen baititu. Har dezagun <math display=\"inline\"><mi>θ</mi></math> koordenatu orokortu gisa. Errodatzeak <math display=\"inline\"><mrow><mi>R</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> berdintzen du zentroak malda-noranzkoan egiten duen lekualdaketarekin; beraz, zentroa aldapan behera <math display=\"inline\"><mrow><mi>R</mi><mi>θ</mi></mrow></math> ibiltzen da eta bere altuera <math display=\"inline\"><mrow><msub><mi>z</mi><mi>C</mi></msub><mo>=</mo><mi>−</mi><mi>R</mi><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> da. Partikula zentrotik <math display=\"inline\"><mi>R</mi></math> distantziara dago, bertikal beherakorrarekiko <math display=\"inline\"><mi>θ</mi></math> angeluan; hortaz, <math display=\"inline\"><mrow><msub><mi>z</mi><mi>m</mi></msub><mo>=</mo><msub><mi>z</mi><mi>C</mi></msub><mo>−</mo><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Indar aktibo bakarra grabitatea denez, orekak masa-zentroaren altuera geldikorra izatea eskatzen du —hori da haziko metodoa—. Sistemaren energia potentziala hau da: <math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>M</mi><mi>g</mi><msub><mi>z</mi><mi>C</mi></msub><mo>+</mo><mi>m</mi><mi>g</mi><msub><mi>z</mi><mi>m</mi></msub><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>R</mi><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>−</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math> non masa-zentroaren altuera <math display=\"inline\"><mrow><msub><mi>z</mi><mi>G</mi></msub><mo>=</mo><mi>U</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> den. Deribatua anulatuz lortzen da oreka: <math display=\"block\"><mrow><msup><mi>U</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>+</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>=</mo><mfrac><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow><mi>m</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mi>.</mi></mrow></math> Emaitzak irakurketa geometriko garbia du: oreka masa-zentroa ukipen-puntuaren bertikal berean geratzen denean gertatzen da —hain zuzen ere, errodatze-higidurak <math display=\"inline\"><msub><mi>z</mi><mi>G</mi></msub></math> geldikor egiten duen konfigurazioa da hori—. Partikula aldaparen goiko aldean kokatzen da, bere pisuak ukipen-puntuarekiko sortzen duen momentuak diskoa behera errodatzeari aurre egin diezaion."
    },
    {
     "mota": "testua",
     "html": "Egonkortasuna bigarren deribatuak erabakitzen du, ekuazio diferentzialik ebatzi gabe: <math display=\"block\"><mrow><msup><mi>U</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> tartean bi oreka daude. Batetik, <math display=\"inline\"><mrow><msubsup><mi>θ</mi><mi>s</mi><mo>*</mo></msubsup><mo>=</mo><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">sin</mi><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, non <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>&gt;</mo><mn>0</mn></mrow></math> eta, beraz, <math display=\"inline\"><mrow><msup><mi>U</mi><mo>″</mo></msup><mo>&gt;</mo><mn>0</mn></mrow></math> —altueraren minimoa, oreka <strong>egonkorra</strong>—. Bestetik, <math display=\"inline\"><mrow><msubsup><mi>θ</mi><mi>u</mi><mo>*</mo></msubsup><mo>=</mo><mi>π</mi><mo>−</mo><msubsup><mi>θ</mi><mi>s</mi><mo>*</mo></msubsup></mrow></math>, non <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>&lt;</mo><mn>0</mn></mrow></math> —maximoa, oreka <strong>ezegonkorra</strong>—. Oreka existitzeko, ordea, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>≤</mo><mn>1</mn></mrow></math> bete behar da, hots, <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>≤</mo><mfrac><mi>m</mi><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>≤</mo><msub><mi>β</mi><mi>c</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mfrac><mi>m</mi><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><msub><mi>β</mi><mi>c</mi></msub></mrow></math> denean bi orekak bat egiten dute (<math display=\"inline\"><mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>): korapilo-adarkatzea (saddle-node) da, non <math display=\"inline\"><mrow><msup><mi>U</mi><mo>″</mo></msup><mo>=</mo><mn>0</mn></mrow></math> eta oreka egonkorra eta ezegonkorra elkarrekin desagertzen diren. <math display=\"inline\"><mrow><mi>β</mi><mo>&gt;</mo><msub><mi>β</mi><mi>c</mi></msub></mrow></math> bada, orekarik ez dago inolako <math display=\"inline\"><mi>θ</mi></math>-tarako eta diskoak aldapan behera ihes egiten du, etengabe azeleratuz: ertzeko masaren momentuak ezin dio jada grabitateari eutsi."
    },
    {
     "mota": "testua",
     "html": "Oszilazio txikietarako energia zinetikoa behar dugu. Zentroaren abiadura <math display=\"inline\"><mrow><msub><mi>v</mi><mi>C</mi></msub><mo>=</mo><mi>R</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> da, diskoaren biraketa <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> (errodatzez), eta bere inertzia-momentua <math display=\"inline\"><mrow><msub><mi>I</mi><mi>C</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>. Partikularen abiaduraren karratua, erreferentzia-sistema finkoan eta errodatze-lotura erabilita, <math display=\"block\"><mrow><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup><mo>=</mo><mn>2</mn><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> da; partikula ukipen-puntuan dagoenean (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>β</mi></mrow></math>) anulatu egiten da, espero bezala. Energia zinetiko osoa honela laburtzen da: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>≡</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Oreka egonkorraren inguruan linealizatuz —<math display=\"inline\"><mrow><msup><mi>U</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>θ</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> denez, <math display=\"inline\"><mi>A</mi></math>-ren aldakuntzak ez du lehen ordenean eragiten—, oszilazio txikien maiztasuna hau da: <math display=\"block\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><msup><mi>U</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>θ</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>θ</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup></mrow><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>θ</mi><mo>*</mo></msup><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Muga-kasuek emaitza egiaztatzen dute. <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mn>0</mn></mrow></math> denean, <math display=\"inline\"><mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>→</mo><mn>0</mn></mrow></math> (partikula beheko puntuan, ukipenean) eta <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>M</mi><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: lur lauean errodatuz kulunkatzen den disko kargatua berreskuratzen da. <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math> limitean, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>→</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math>, hots <math display=\"inline\"><mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>→</mo><mi>β</mi></mrow></math>: partikula astunak zuzenean ukipen-puntuan jartzen du bere burua (bere ziklodearen punturik baxuena), eta <math display=\"inline\"><mrow><msub><mi>β</mi><mi>c</mi></msub><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> (edozein maldatan orekatzen da). <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><msubsup><mi>β</mi><mi>c</mi><mo>−</mo></msubsup></mrow></math> denean, berriz, <math display=\"inline\"><mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>→</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mn>0</mn></mrow></math>: modua bigundu egiten da adarkatze-puntuan, korapilo-adarkatzeari dagokion bezala. Alderantziz, <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mi>∞</mi></mrow></math> denean <math display=\"inline\"><mrow><msub><mi>β</mi><mi>c</mi></msub><mo>→</mo><mn>0</mn></mrow></math>: disko astun homogeneo bat ezin da inolako maldatan orekatu ertzeko masa arin batez."
    },
    {
     "mota": "testua",
     "html": "Azkenik, orekan sistema estatikoa da eta indar-balantzeak ematen ditu ukipen-erreakzioak. Ukipen-puntuarekiko grabitateak baino ez du momenturik egiten (<math display=\"inline\"><mi>N</mi></math> eta <math display=\"inline\"><mi>f</mi></math> bertan aplikatzen baitira), eta momentu hori anulatzea da, hain zuzen, (a)-ko baldintza; indarren batuketak, berriz, malda-noranzkoan <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> (gorantz) eta normalean <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> ematen ditu. Diskoak labaindu ez dezan, <math display=\"inline\"><mrow><mi>f</mi><mo>≤</mo><msub><mi>μ</mi><mi>s</mi></msub><mi>N</mi></mrow></math> bete behar da: <math display=\"block\"><mrow><msub><mi>μ</mi><mi>s</mi></msub><mo>≥</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>β</mi><mi>.</mi></mrow></math> Emaitza aipagarria da: labaintze-atalasea maldan behera irristatzen den bloke soil batena bera da, masen eta erradioaren guztiz independentea —kargak orekaren <strong>existentzia</strong> erabakitzen du (<math display=\"inline\"><msub><mi>β</mi><mi>c</mi></msub></math>-ren bidez), ez ordea behar den atxikidura—. Oreka posible den malda handienera eramanda (<math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><msub><mi>β</mi><mi>c</mi></msub></mrow></math>), behar den baliorik handiena <math display=\"inline\"><mrow><msub><mi>μ</mi><mi>s</mi></msub><mo>≥</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><msub><mi>β</mi><mi>c</mi></msub><mo>=</mo><mi>m</mi><mi>/</mi><msqrt><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mrow></math> da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Erdi-disko kargatuaren kulunka: oreka, egonkortasuna eta modu normala"
    },
    {
     "mota": "testua",
     "html": "<em><math display=\"inline\"><mi>R</mi></math> erradioko eta <math display=\"inline\"><mi>M</mi></math> masako erdi-disko homogeneo bat plano bertikal batean dago, mahai horizontal\nbaten gainean bere ertz kurbatuan bermaturik; irristatu gabe errodatu (kulunkatu) dezake mahaian. Bere\ndiametroaren mutur batean <math display=\"inline\"><mi>m</mi></math> masako partikula bat dago itsatsita.<span class=\"j-oin\">[Hazia: Ecenarro, <em>Mecánica y\nOndas: Problemas de Examen Resueltos y Comentados</em>, 97Jun01 (Ekaina 1997), non erdi-diskoa eta partikula masa\nberekoak (<math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mi>m</mi></mrow></math>) ziren eta oreka-posizioa (estatika) baino ez zen eskatzen. Hemen masak orokortu (<math display=\"inline\"><mrow><mi>M</mi><mo>≠</mo><mi>m</mi></mrow></math>)\neta dinamika osoa erantsi zaizkio: egonkortasuna, modu normalaren maiztasuna eta muga-kasuak.]</span> <br>\n<strong>(a)</strong> Aurkitu multzoaren masa-zentroa (<math display=\"inline\"><mi>O</mi></math> diametroaren erdiguneari dagokionez). <strong>(b)</strong> Lortu diametroak\nhorizontalarekin osatzen duen <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">or</mtext></msub></math> oreka-angelua; frogatu masa-erlazioaren mende soilik dagoela eta\naztertu <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mn>0</mn></mrow></math> zein <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mi>∞</mi></mrow></math> limiteak. <strong>(c)</strong> Frogatu oreka hori beti egonkorra dela eta multzoa ezin\ndela inoiz irauli, partikula edozein astun izanik ere. <strong>(d)</strong> Aurkitu oreka horren inguruko kulunka-oszilazio\ntxikien <math display=\"inline\"><mi>ω</mi></math> maiztasun angeluarra. <strong>(e)</strong> Egiaztatu muga-kasuak: berreskuratu erdi-disko hutsaren maiztasuna\n<math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mn>0</mn></mrow></math> denean, eta interpretatu <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mi>∞</mi></mrow></math>.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/cd5039f151432cbe.svg",
     "zabalera": 319
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erdi-diskoa (masa <math display=\"inline\"><mi>M</mi></math>) ertz kurbatuan kulunkatzen da mahai gainean; <math display=\"inline\"><mi>m</mi></math> partikula diametroaren muturrean. Orekan, masa-zentroa (<math display=\"inline\"><mi>G</mi></math>) <math display=\"inline\"><mi>O</mi></math>-ren azpian dago bertikalean; ha- la, diametroa <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">or</mtext></msub></math> okertzen da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Gorputz zurruna <math display=\"inline\"><mi>O</mi></math> puntuaren inguruan deskribatuko dugu, non <math display=\"inline\"><mi>O</mi></math> diametroaren erdigunea eta, aldi berean, ertz kurbatuaren (erradio <math display=\"inline\"><mi>R</mi></math>-ko zirkunferentzia-arkuaren) zentroa den; beraz <math display=\"inline\"><mi>O</mi></math> gorputzaren puntu finkoa da. Arkuak mahaian irristatu gabe errodatzen duenez, <math display=\"inline\"><mi>O</mi></math> beti <math display=\"inline\"><mi>R</mi></math> altueran dago eta horizontalean soilik higitzen da: <math display=\"inline\"><mi>ψ</mi></math> biraketa-angelua eginda, <math display=\"inline\"><mi>O</mi></math>-ren desplazamendu horizontala <math display=\"inline\"><mrow><mi>R</mi><mi>ψ</mi></mrow></math> da eta ukipen-puntua <math display=\"inline\"><mi>O</mi></math>-ren azpian dago zuzenean."
    },
    {
     "mota": "testua",
     "html": "Has gaitezen masa-zentroaz. Lehenik erdi-diskoaren zentroidea behar dugu: simetriaz, diametroarekiko elkarzut den ardatzean dago; <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>2</mn><mi>M</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> azalera-dentsitatea eta koordenatu polarrak hartuta, <math display=\"inline\"><mi>O</mi></math>-tik neurtutako distantzia hau da: <math display=\"block\"><mrow><msub><mi>d</mi><mi>s</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>M</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow><mi>R</mi></msubsup><msubsup><mo>∫</mo><mrow><mi>φ</mi><mo>=</mo><mn>0</mn></mrow><mi>π</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.222em\"></mspace><mi>σ</mi><mspace width=\"0.222em\"></mspace><mi>r</mi><mi>d</mi><mi>φ</mi><mi>d</mi><mi>r</mi><mo>=</mo><mfrac><mi>σ</mi><mi>M</mi></mfrac><mo>⋅</mo><mfrac><msup><mi>R</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>⋅</mo><mn>2</mn><mo>=</mo><mfrac><mrow><mn>4</mn><mi>R</mi></mrow><mrow><mn>3</mn><mi>π</mi></mrow></mfrac><mi>.</mi></mrow></math> Multzoaren masa-zentroa lortzeko, gorputzari lotutako ardatzak hartuko ditugu: jatorria <math display=\"inline\"><mi>O</mi></math>-n, <math display=\"inline\"><mi>ξ</mi></math> ardatza diametroan zehar (partikularantz) eta <math display=\"inline\"><mi>η</mi></math> ardatza diametroarekiko elkarzut, erdi-diskoaren barrualderantz. Orduan erdi-diskoaren zentroidea <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><msub><mi>d</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>-n dago eta partikula <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n; hortaz: <math display=\"block\"><mrow><msub><mi>ξ</mi><mi>G</mi></msub><mo>=</mo><mfrac><mrow><mi>m</mi><mi>R</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>η</mi><mi>G</mi></msub><mo>=</mo><mfrac><mrow><mi>M</mi><msub><mi>d</mi><mi>s</mi></msub></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><mi>M</mi><mi>R</mi></mrow><mrow><mn>3</mn><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo></mrow></math> eta <math display=\"inline\"><mi>O</mi></math>-tik masa-zentrora bitarteko distantzia: <math display=\"block\"><mrow><mi>ρ</mi><mo>=</mo><msqrt><mrow><msubsup><mi>ξ</mi><mi>G</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>η</mi><mi>G</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><mfrac><mi>R</mi><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><msqrt><mrow><msup><mi>m</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>4</mn><mi>M</mi></mrow><mrow><mn>3</mn><mi>π</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Gorputza errodatzen ari denez, indar eragile bakarrak grabitatea (<math display=\"inline\"><mi>G</mi></math>-tik) eta mahaiaren erreakzioa (<math display=\"inline\"><mi>O</mi></math>-ren azpiko ukipen-puntutik) dira. Izan bedi <math display=\"inline\"><mi>ψ</mi></math> kulunka-angelua, <math display=\"inline\"><mi>G</mi></math> zuzenean <math display=\"inline\"><mi>O</mi></math>-ren azpian dagoen konfiguraziotik neurtua. Orduan <math display=\"inline\"><mi>G</mi></math>-ren altuera <math display=\"inline\"><mrow><msub><mi>y</mi><mi>G</mi></msub><mo>=</mo><mi>R</mi><mo>−</mo><mi>ρ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mrow></math> da eta energia potentziala: <math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>ρ</mi><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mi>U</mi></math> minimoa <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><mn>0</mn></mrow></math>-n da: oreka <math display=\"inline\"><mi>G</mi></math> bertikalean <math display=\"inline\"><mi>O</mi></math>-ren azpian dagoenean gertatzen da. Geometrikoki, gorputza <math display=\"inline\"><mrow><mi>O</mi><mi>G</mi></mrow></math> lerroa bertikal jarri arte okertzen da; <math display=\"inline\"><mrow><mi>O</mi><mi>G</mi></mrow></math>-k <math display=\"inline\"><mi>η</mi></math> ardatzarekin <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ξ</mi><mi>G</mi></msub><mi>/</mi><msub><mi>η</mi><mi>G</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> angelua osatzen duenez, orekan <math display=\"inline\"><mi>η</mi></math> ardatza bertikaletik angelu horretan geratzen da okertuta eta, ondorioz, diametroa (<math display=\"inline\"><mi>ξ</mi></math> ardatza) horizontaletik angelu berean: <math display=\"block\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><msub><mi>ξ</mi><mi>G</mi></msub><msub><mi>η</mi><mi>G</mi></msub></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>π</mi><mi>m</mi></mrow><mrow><mn>4</mn><mi>M</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Emaitza masa-erlazioaren mende soilik dago —ez <math display=\"inline\"><mi>R</mi></math>-ren, ez <math display=\"inline\"><mi>g</mi></math>-ren—. <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mn>0</mn></mrow></math> bada, <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>→</mo><mn>0</mn></mrow></math> (erdi-disko simetrikoa, diametroa horizontala); <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mi>∞</mi></mrow></math> bada, <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> (diametroa bertikala, partikula <math display=\"inline\"><mi>O</mi></math>-ren azpian zuzenean, mahaia ukitzeraino, bere distantzia <math display=\"inline\"><mi>O</mi></math>-tik <math display=\"inline\"><mi>R</mi></math> baita). Masa berdinetan (<math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mi>m</mi></mrow></math>), <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>67</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Egonkortasuna berehalakoa da. <math display=\"inline\"><mrow><msup><mi>U</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>ρ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mrow></math> denez, <math display=\"block\"><mrow><msup><mi>U</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>ρ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> beti da, <math display=\"inline\"><mrow><mi>ρ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> baita <math display=\"inline\"><mi>m</mi></math> finitu ororentzat. Beraz <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><mn>0</mn></mrow></math> beti minimo egonkorra da, eta ez dago beste orekarik kulunka-tartean. Ondorioa aipagarria da: erdi-disko kargatua <strong>ezin da inoiz irauli</strong>, partikula edozein astun izanik ere; kargak oreka-okertzea handitu baino ez du egiten, <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>&lt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> balio finiturantz. Arrazoia <math display=\"inline\"><mi>O</mi></math>-ren rolean datza: arku-zentroa beti <math display=\"inline\"><mi>R</mi></math> altueran mantentzen da, eta diametroan —hots, <math display=\"inline\"><mi>O</mi></math>-ren mailatik gora inoiz igotzen ez den leku batean— itsatsitako masak <math display=\"inline\"><mi>G</mi></math> beti <math display=\"inline\"><mi>O</mi></math>-ren azpitik uzten du. Aldiz, masa <math display=\"inline\"><mi>O</mi></math>-ren gainetik jarriko balitz (adibidez, masta batean), <math display=\"inline\"><mi>G</mi></math> <math display=\"inline\"><mi>O</mi></math>-ren gainetik igo liteke eta gorputza kritikoki iraul liteke (metazentroaren efektua); hemen, diametroko kargarekin, hori ezinezkoa da."
    },
    {
     "mota": "testua",
     "html": "Oszilazio-maiztasuna lortzeko energia zinetikoa behar dugu. Errodadura-loturak <math display=\"inline\"><mi>O</mi></math>-ren posizio horizontala <math display=\"inline\"><mrow><mi>R</mi><mi>ψ</mi></mrow></math> ematen duenez, <math display=\"inline\"><mrow><mi>G</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mi>ψ</mi><mo>−</mo><mi>ρ</mi><mi mathvariant=\"normal\">sin</mi><mi>ψ</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>R</mi><mo>−</mo><mi>ρ</mi><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da eta <math display=\"block\"><mrow><msubsup><mi>v</mi><mi>G</mi><mn>2</mn></msubsup><mo>=</mo><msup><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><msup><mi>ρ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>R</mi><mi>ρ</mi><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Beraz <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>v</mi><mi>G</mi><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>G</mi></msub><msup><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>, non <math display=\"inline\"><msub><mi>I</mi><mi>G</mi></msub></math> multzoaren inertzia-momentua den bere masa-zentroaren inguruan. Orekan (<math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><mn>0</mn></mrow></math>) koefizientea ukipen-puntuaren inguruko inertzia-momentu bihurtzen da: <math display=\"block\"><mrow><msub><mi>A</mi><mn>0</mn></msub><mo>=</mo><msub><mi>I</mi><mi>G</mi></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>ρ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msub><mi>I</mi><mi>C</mi></msub><mi>.</mi></mrow></math> <math display=\"inline\"><msub><mi>I</mi><mi>C</mi></msub></math> zuzenean kalkulatzeko, <math display=\"inline\"><mi>O</mi></math> gorputzaren puntu finkoa denez, komeni da lehenik <math display=\"inline\"><msub><mi>I</mi><mi>O</mi></msub></math> lortzea: erdi-diskoak <math display=\"inline\"><mi>O</mi></math>-ren inguruan (plano-ardatza) <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> dauka —disko osoaren erdia—, eta partikulak <math display=\"inline\"><mrow><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>; hortaz <math display=\"inline\"><mrow><msub><mi>I</mi><mi>O</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>. Ardatz paraleloen teoremaz, <math display=\"block\"><mrow><msub><mi>I</mi><mi>C</mi></msub><mo>=</mo><msub><mi>I</mi><mi>O</mi></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>R</mi><mi>ρ</mi><mi>.</mi></mrow></math> Izan bedi <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msqrt><mrow><msup><mi>m</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>M</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow></math>, zeinarekin <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ρ</mi><mo>=</mo><mi>R</mi><mi>S</mi></mrow></math>; orduan izendatzailea eta maiztasuna itxura garbian geratzen dira: <math display=\"block\"><mrow><msub><mi>I</mi><mi>C</mi></msub><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo>−</mo><mn>2</mn><mi>S</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><msup><mi>U</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msub><mi>A</mi><mn>0</mn></msub></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>ρ</mi></mrow><msub><mi>I</mi><mi>C</mi></msub></mfrac><mo>=</mo><mfrac><mrow><mi>g</mi><mspace width=\"0.222em\"></mspace><mi>S</mi></mrow><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo>−</mo><mn>2</mn><mi>S</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math> Izendatzailea beti positiboa da (<math display=\"inline\"><mrow><mn>3</mn><mi>M</mi><mi>/</mi><mn>2</mn><mo>+</mo><mn>2</mn><mi>m</mi><mo>&gt;</mo><mn>2</mn><mi>S</mi></mrow></math> betetzen da masa guztietarako), eta horrek <math display=\"inline\"><mi>ω</mi></math> erreala bermatzen du, egonkortasunarekin bat."
    },
    {
     "mota": "testua",
     "html": "Muga-kasuek emaitza berresten dute. <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mn>0</mn></mrow></math> denean <math display=\"inline\"><mrow><mi>S</mi><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>/</mi><mn>3</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>M</mi></mrow></math> eta <math display=\"block\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>→</mo><mfrac><mrow><mn>8</mn><mi>g</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>9</mn><mi>π</mi><mo>−</mo><mn>16</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>R</mi></mrow></mfrac><mo>,</mo></mrow></math> hots, mahaian kulunkatzen den erdi-disko hutsaren maiztasuna —egiaztapen garbia—. <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mi>∞</mi></mrow></math> denean, berriz, <math display=\"inline\"><mrow><mi>S</mi><mo>→</mo><mi>m</mi></mrow></math> eta <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi><mo>−</mo><mn>2</mn><mi>S</mi><mo>→</mo><mn>0</mn></mrow></math>, beraz <math display=\"inline\"><mrow><msub><mi>I</mi><mi>C</mi></msub><mo>→</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>: partikula astuna ukipen-puntuan bertan kokatzen da eta ez du ia inertziarik ekartzen <math display=\"inline\"><mi>C</mi></math>-ren inguruan; zurruntasun grabitatorioa (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>ρ</mi><mo>→</mo><mi>m</mi><mi>g</mi><mi>R</mi></mrow></math>), aldiz, mugarik gabe hazten da, eta ondorioz <math display=\"block\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>≈</mo><mfrac><mrow><mn>2</mn><mi>g</mi><mi>m</mi></mrow><mrow><mn>3</mn><mi>M</mi><mi>R</mi></mrow></mfrac><mo>→</mo><mi>∞</mi><mi>.</mi></mrow></math> Hori da benetako harribitxia: karga handituz, oszilazioa gero eta <strong>azkarragoa</strong> da, ez geldoagoa —maiztasuna dibergitu egiten da—, zurruntasunak <math display=\"inline\"><mi>m</mi></math> bezala gora egiten baitu kulunka-inertzia diskoak finkatutako <math display=\"inline\"><mrow><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> balioan geldi dagoen bitartean (oszilazio-anplitude erabilgarria, ordea, txikitu egiten da partikula mahaira hurbildu ahala). Masa berdinen kasu zehatzean, <math display=\"inline\"><mrow><mi>ω</mi><mo>≈</mo><mn>0.905</mn><msqrt><mrow><mi>g</mi><mi>/</mi><mi>R</mi></mrow></msqrt></mrow></math> eta <math display=\"inline\"><mrow><mi>T</mi><mo>≈</mo><mn>6.95</mn><msqrt><mrow><mi>R</mi><mi>/</mi><mi>g</mi></mrow></msqrt></mrow></math>."
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Hamiltonen printzipioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ikus dezagun orain nola egin daitekeen mekanika analitikoa guztiz desberdina den beste abiapuntu batetik. Ikuspuntu hau, behar bezala egokitu ondoren, oso emankorra izaten da fisika modernoan eremuen teoriak eraikitzean."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lagrangearra eta ekintza"
    },
    {
     "mota": "testua",
     "html": "Hasteko, defini dezagun sistemaren <strong>lagrangearra</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>L</mi><mo>≡</mo><mi>T</mi><mo>−</mo><mi>V</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ikusiko dugunez, mekanika analitikoaren kontzeptu nagusietako bat izango da."
    },
    {
     "mota": "irudia",
     "oina": "Ekintza kalkulatzeko bi bide.",
     "src": "media/irudiak/09c41e15ca3ef570.svg",
     "zabalera": 173
    },
    {
     "mota": "testua",
     "html": "Eman dezagun <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math> aldiuneak hautatu ondoren dagozkien bi konfigurazio aukeratzen ditugula: <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn></msub><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>q</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>…</mi><msub><mi>q</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>2</mn></msub><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>q</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>…</mi><msub><mi>q</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Aipaturiko aldiuneak eta konfigurazioak ez dira aldatuko, baina beste <math display=\"inline\"><mi>t</mi></math> bakoitzeko <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒒</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>q</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> konfigurazio bat aukeratzen dugu, <math display=\"inline\"><mrow><msub><mi>q</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioak erregularrak<span class=\"j-oin\">[Funtzio bat <strong>erregularra</strong> izateko, berak eta bere deribatuak «erregular» adjektiboa agertzen den enuntziatua bermatzeko jarraitutasun-baldintzak bete behar dituzte. Aipaturiko baldintza beharrezkoak, puntu (edo leku geometriko) berezi batzuetan izan ezik, bete egiten direla onartzen dugu beti testu honetan. Puntu <strong>singular</strong> horiek, hala ere, garrantzi handikoak izaten dira fisikan (bertan dago, adibidez, grabitazio-eremurik errazena sortzen duen masa puntuala).]</span> izateko baldintza bakarra betetzeko moduan. Azpimarratu behar da, konfigurazioak aukeratu ditugunez, <math display=\"inline\"><mi>t</mi></math> aldiune bakoitzean loturak bete behar direla; baina, oro har, higidura-ekuazioak ez dira beteko aipaturiko aukeretan. <math display=\"inline\"><mi>t</mi></math> aldatzean <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math> aldiunetan aukeraturiko konfigurazioak lotzen dituen kurba erregular bat lortzen da <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> koordenatuetako konfigurazio-espazio abstraktuan. <br> Konfigurazio-bide horri dagokion sistema mekanikoaren"
    },
    {
     "mota": "testua",
     "html": "<strong>ekintza</strong>"
    },
    {
     "mota": "testua",
     "html": ", definizioz, hurrengo integralaren balioa da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>≡</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>t</mi><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo>,</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> funtzioa sistemaren lagrangearra den."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu ekintza eta Plancken <math display=\"inline\"><mi>h</mi></math> konstantea dimentsio berekoak direla. Bestelako zer magnitude fisiko ezagunen dimentsioak dira ekintzarenak?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ekintza minimoaren printzipioa<span class=\"j-oin\">[Horrela deitu zion Lagrangek mekanikaren oinarritzat har zezakeen beste aldakuntza-printzipio bati, lehenago agertu ziren Maupertuisen ideia kualitatiboetan eta Eulerren lanetan oinarriturik. Hemen, Hamiltonen eran ikusiko dugu, horixe baita gaur egun mekanikan eta fisikaren beste arloetan (behar den bezala egokitu ondoren) erabiltzen dena.]</span>"
    },
    {
     "mota": "testua",
     "html": "Ekintza kalkulatzeko integrazio-bidea, konfigurazio-espazioko bi puntu lotzen dituen edozein kurba izan daiteke; loturak beteko dira, beraz, baina ez beti higidura-ekuazioak. Integrazio-bidea aldatzean ekintza bera ere aldatuko da eta minimoa izango da preseski benetako higidurari dagokion kurban barrena."
    },
    {
     "mota": "testua",
     "html": "<em>Eman dezagun sistema mekaniko batean lotura guztiak holonomoak eta idealak direla eta indar eragileak\nkontserbatzaileak (edo potentzial orokortu batetik lortzen direnak). Bi konfigurazio ezagun lotzen dituzten\nibilbide guztien artean, higidurari dagokiona muturrekoa da</em>"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-oin\">[Ikus aldakuntzen kalkulua B.8 atalean.]</span><em>, hau da, ekintza egonkorra izateko aukeratu behar dena</em>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>δ</mi><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>t</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kasu interesgarri gehienetan (bi konfigurazioak behar bezain hurbil badaude, adibidez) higidurari dagokion konfigurazio-espazioko ibilbidean ekintza minimoa bada ere, zela-puntu bat izatea ere gerta daiteke<span class=\"j-oin\">[ Ikus, adibidez, [82] artikulua.]</span>. Baina hemen ez gara horrelako ñabardurez arduratuko. <br> Printzipio honen garrantzia teorikoa da, gaur egungo fisikan ere hainbat fenomenoren deskribapenaren funtsezko abiapuntutzat hartzen baita. Baina praktikan, higidura-ekuazioak idazteko, ikuspuntu matematikotik baliokideak diren Euler eta Lagrangeren (B.166) ekuazioak edo Lagrangeren (6.83) ekuazioak erabiltzen dira."
    },
    {
     "mota": "testua",
     "html": "Oszilador harmonikoa"
    },
    {
     "mota": "testua",
     "html": "Adibide moduan kontsidera dezagun 1.12 irudiko oszilador harmonikoa. Bere lagrangearra <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><mo>≡</mo><mfrac><mi>k</mi><mi>m</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da eta (1.90) higidura-ekuazioaren soluzioa (1.112). Aukera ditzagun <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn><mi>ω</mi></mrow></math> uneetan hurrengo bi konfigurazioak: <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>ω</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Oszilladore harmonikoaren bi konfigurazio lotzen dituzten bide batzuk.",
     "src": "media/irudiak/877fe6f61bf1b483.svg",
     "zabalera": 142
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu (6.76) baldintzak betetzen dituen soluzio bakarra honako hau dela: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Aipaturiko bi konfigurazioak lotzen dituzten kurben multzoa handiegia da esplizituki aztertzeko. Horren ordez, oso familia txikia (baina infinitua) kontsideratuko dugu hemen: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>ω</mi><mi>t</mi><mi>.</mi></mrow></math> Argi dago <math display=\"inline\"><mi>a</mi></math> parametroaren balio bakoitzeko lortzen den kurba aipaturiko konfigurazioetatik pasatzen dela, (6.76) baldintzak betetzen baitira. Honela idazten da lagrangearraren balioa aipaturiko familiaren kurba batean: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">cos</mi><mn>2</mn><mi>ω</mi><mi>t</mi><mo>+</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>ω</mi><mi>t</mi><mo>+</mo><mn>3</mn><mi mathvariant=\"normal\">cos</mi><mn>3</mn><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mo>+</mo><mn>5</mn><mi mathvariant=\"normal\">cos</mi><mn>4</mn><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Ekintza erraz kalkulatzen da: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>I</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn><mi>ω</mi></mrow></msubsup><mi>L</mi><mi>d</mi><mi>t</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>m</mi><mi>ω</mi><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">sin</mi><mn>2</mn><mi>ω</mi><mi>t</mi><mo>+</mo><mn>4</mn><mi>a</mi><mi mathvariant=\"normal\">sin</mi><mi>ω</mi><mi>t</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>ω</mi><mi>t</mi><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>12</mn><mi>ω</mi><mi>t</mi><mo>+</mo><mn>5</mn><mi mathvariant=\"normal\">sin</mi><mn>4</mn><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn><mi>ω</mi></mrow></msubsup></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>3</mn><mn>8</mn></mfrac><msup><mi>a</mi><mn>2</mn></msup><mi>m</mi><mi>π</mi><mi>ω</mi><mi>.</mi></mtd></mtr></mtable></math> Ekintzaren aldakuntza, beraz, <math display=\"block\"><mrow><mi>δ</mi><mi>I</mi><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>a</mi><mi>m</mi><mi>π</mi><mi>ω</mi><mi>δ</mi><mi>a</mi></mrow></math> eta zero da higidura deskribatzen duen kurban: <math display=\"block\"><mrow><mi>δ</mi><mi>I</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>a</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Izan ere, kasu horretan ekintzaren minimoa dugula zuzenean ikusten da (6.80) emaitzan. <br> Hemen aukeratu dugun familia oso murriztua izan da, baina familia orokorrenean ere gauza bera gertatuko dela bermatzen du aldakuntzen kalkuluak eta ondoko zenbakizko simulazioan egiazta daiteke:"
    },
    {
     "mota": "ezezaguna",
     "izena": "link"
    },
    {
     "mota": "testua",
     "html": "."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Lagrangeren ekuazioak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Funtzio baten minimoak kalkulatzeko, ez gara hasten balioak saiatzen; horren ordez analisira jotzen dugu eta deribatu partzialak zerorekin berdinduz geratzen diren ekuazioak aztertzen dira. Era berean, ekintzaren minimoa non gertatzen den jakiteko, aldakuntzen kalkuluak emandako baldintza diferentzialak ditugu: Euler eta Lagrangeren (B.166) ekuazioak, hain zuzen. Mekanikaren testuinguruan aipaturiko baldintzak <strong>Lagrangeren ekuazioak</strong> deitzen dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Formalismo lagrangearrean hauexek dira higidura-ekuazioak eta, D eranskinean frogatzen denez, Newtonen bigarren legearen baliokideak dira, ekintza minimoaren printzipioaren hipotesiak betetzen direnean."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problemen ebazpena mekanika analitikoan"
    },
    {
     "mota": "testua",
     "html": "Orain arte ikusitakoa laburbilduz, mekanika analitikoan problema mekaniko bat ebazteko hurrengo metodoa erabili behar dela azpimarratu nahi dugu."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Kalkulatu zenbat diren loturak edota konfigurazioa zehazteko behar diren aldagai independenteak, askatasun-graduen kopurua jakiteko."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Aukeratu koordenatu orokortu egokiak (problemaren simetriak gordetzeko moduan, adibidez)."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Idatzi (6.63) transformazio-ekuazioak eta kalkulatu abiadurak aurrekoak deribatuz: <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>k</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mi>.</mi></mrow></math> (Urrats hau ez da guztiz beharrezkoa problema errazetan.)"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Idatzi sistemaren energia zinetiko osoa koordenatu orokortuetan."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Idatzi sistemaren energia potentzial osoa koordenatu orokortuetan."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Kalkulatu (6.72) lagrangearra eta Lagrangeren (6.83) ekuazioak. Lagrangearrean <math display=\"inline\"><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></math> abiadura orokortuak agertzen direnez, denborarekiko deribatua egitean <math display=\"inline\"><msub><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mi>i</mi></msub></math> azelerazio orokortuak agertuko dira. Lagrangeren ekuazioak, beraz, bigarren ordenako <math display=\"inline\"><mi>n</mi></math> ekuazio diferentzial arrunt izango dira."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Aztertu (eta, ahal delarik, ebatzi) higidura-ekuazioak (agian, geroago ikusiko ditugun kontserbazio-printzipioez baliatuz)."
     ]
    },
    {
     "mota": "testua",
     "html": "Ikus ditzagun adibide erraz batzuk."
    },
    {
     "mota": "testua",
     "html": "Loturarik gabeko partikula koordenatu kartesiarretan"
    },
    {
     "mota": "testua",
     "html": "Partikularen masa <math display=\"inline\"><mi>m</mi></math> bada eta koordenatu orokortuak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> kartesiarrak badira, honela idazten da energia zinetikoa: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Energia potentziala <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bada, lagrangearra <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izango da eta Lagrangeren ekuazioak hurrengoak: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mover><mi>z</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Argi dago <math display=\"inline\"><mrow><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝜵</mi><mi>V</mi></mrow></math> higidura-ekuazioaren osagai kartesiarrak direla aurrekoak."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aztertu berriro sistema mekaniko hau koordenatu polar esferikoetan."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Atwooden makina"
    },
    {
     "mota": "testua",
     "html": "Askatasun-gradu bakarra dugu eta 6.4 irudiko <math display=\"inline\"><mi>q</mi></math> koordenatu orokortua erabiliz, partikulen energia zinetikoak eta osoa erraz kalkulatzen dira: <math display=\"block\"><mrow><msub><mi>T</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msup><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msup><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub><mo>+</mo><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Era berean, <math display=\"block\"><mrow><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mi>q</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>V</mi><mn>2</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mi>q</mi><mo>+</mo><mi>K</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo>=</mo><msub><mi>V</mi><mn>1</mn></msub><mo>+</mo><msub><mi>V</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>2</mn></msub><mo>−</mo><msub><mi>m</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mi>q</mi><mo>+</mo><mi>K</mi></mrow></math> energia potentziala eta <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>2</mn></msub><mo>−</mo><msub><mi>m</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mi>q</mi><mo>−</mo><mi>K</mi></mrow></math> lagrangearra erraz lortzen dira. Goiko adierazpenetan <math display=\"inline\"><mrow><mi>K</mi><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>R</mi><mo>−</mo><mi>l</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idatzi dugu. Badakigu horrelako konstante gehigarriek (energia potentzialaren jatorriaren aukera bakarra ez izatearen ondorioak direnek) ez dutela indarra aldatzen, gradientea kalkulatzean desagertzen baitira. Antzeko gauza bat gertatzen da Lagrangeren ekuazioetan deribatuak kalkulatzean: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>q</mi></mrow></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>2</mn></msub><mo>−</mo><msub><mi>m</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Azelerazio orokortua erraz askatzen da hemendik, <math display=\"block\"><mrow><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>−</mo><msub><mi>m</mi><mn>2</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi>g</mi><mo>,</mo></mrow></math> eta partikulen azelerazioak hurrengo konstanteak dira: <math display=\"block\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>=</mo><mi>−</mi><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>−</mo><msub><mi>m</mi><mn>1</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi>g</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>=</mo><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>−</mo><msub><mi>m</mi><mn>2</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi>g</mi><mi>.</mi></mrow></math> (Azelerazio hauek konstanteak direnez, erraz kalkulatzen da orain <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> soluzioa.)"
    },
    {
     "mota": "testua",
     "html": "Pendulu esferikoa"
    },
    {
     "mota": "testua",
     "html": "Kasu honetan <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math> askatasun-gradu daude eta, 293. orrian egin genuenez, 6.2 irudian definituriko <math display=\"inline\"><mrow><msub><mi>q</mi><mn>1</mn></msub><mo>=</mo><mi>θ</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>q</mi><mn>2</mn></msub><mo>=</mo><mi>φ</mi></mrow></math> angeluak koordenatu orokortutzat aukeratuz, energia mekanikoa honako hau dela ikus daiteke, (6.24)–(6.26) transformazio-ekuazioetatik edo, errazago, B.1.3 atalean emaitzetan <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>l</mi></mrow></math> lotura-ekuazioa ordezkatuz: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatza beherantz aukeratu dugunez, energia potentziala <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>z</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> da eta lagrangearra: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> Lagrangeren ekuazioak, beraz, hurrengoak dira: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mi>l</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>l</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mi>g</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Ez dugu azken ekuazioan deribatu osoa kalkulatu, dagoen moduan errazago ikusten delako higidura-konstantea: momentu angeluarraren <math display=\"inline\"><mi>z</mi></math> osagaia."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Pendulu matematikoa</span>"
      },
      {
       "mota": "testua",
       "html": ". Idatzi Lagrangeren ekuazioa pendulu matematikoaren kasuan."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Erreferentzia-sistema birakaria"
    },
    {
     "mota": "testua",
     "html": "Eman dezagun 6.12 irudiko <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>O</mi><mi>X</mi><mi>Y</mi><mi>Z</mi></mrow></math> sistema <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mi>ω</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> abiadura angeluar konstantez biratzen dela <math display=\"inline\"><mrow><msup><mi>S</mi><mo>′</mo></msup><mo>=</mo><mi>O</mi><msup><mi>X</mi><mo>′</mo></msup><msup><mi>Y</mi><mo>′</mo></msup><mi>Z</mi></mrow></math> sistema inertzialean eta sistema birakarian aztertu nahi dugula partikula puntual baten higidura laua. Horretarako horko <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> koordenatu kartesiarrak aukeratuko ditugu koordenatu orokortutzat; baina, inertzia-indarren eragina esplizituki ez sartzeko, energia zinetikoa <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> sistema inertzialean kalkulatuko dugu, nahiz eta <math display=\"inline\"><mi>S</mi></math> sistemako koordenatuez baliatu. Coriolisen teoremaren arabera, <math display=\"inline\"><mi>S</mi></math> sisteman partikularen abiadura <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></math> bada, <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> delakoan <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> izango da: <math display=\"block\"><mrow><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>ω</mi><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><mo>=</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>ω</mi><mi>x</mi><mi>.</mi></mrow></math> Beraz, energia zinetikoa eta lagrangearra honela idazten dira: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>y</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>y</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Erreferentzia-sistema birakaria.",
     "src": "media/irudiak/9e66620db2393d5e.svg",
     "zabalera": 129
    },
    {
     "mota": "testua",
     "html": "Hemendik zuzenean kalkulatzen dira higidura-ekuazioak: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mn>2</mn><mi>ω</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>ω</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Hauek ondoko forma baliokideetan idatziz, erraz ikusten da Coriolisen indarra eta zentrifugoa agertu direla: <math display=\"block\"><mrow><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝜵</mi><mi>V</mi><mo>−</mo><mn>2</mn><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝜵</mi><mi>V</mi><mo>−</mo><mn>2</mn><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Plano aldapatsu higikorra"
    },
    {
     "mota": "testua",
     "html": "6.7 irudiko sistemaren kasuan, (6.56)–(6.57) transformazio-ekuazioak deribatuz kalkulatzen diren <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"bold-italic\">𝒊</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>−</mo><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> abiadurekin lortzen da energia zinetikoa: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>+</mo><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Bestalde, energia potentziala hauxe da: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>M</mi><mi>g</mi><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mi>m</mi><mi>g</mi><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>s</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mi>g</mi><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><mi>m</mi><mi>g</mi><msub><mi>C</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> Hortaz, lagrangearra <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>+</mo><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><mi>g</mi><mi>s</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> da (garrantzi gabeko konstanteak arbuiaturik) eta Lagrangeren ekuazioak hurrengoak: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>r</mi></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>m</mi><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>s</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>+</mo><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu 6.3 irudiko sistemaren lagrangearra <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> dela eta aurkitu higidura-ekuazioa."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Indar zentralak</span>"
      },
      {
       "mota": "testua",
       "html": ". Aurkitu indar zentralen menpeko higidura-ekuazioak atal honetako formalismoaren bidez. (Ikus 4.1 ariketa.)"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ziri higikorra: atzera egiten duen planoa"
    },
    {
     "mota": "testua",
     "html": "<em>Zoru horizontal leun batean <math display=\"inline\"><mi>M</mi></math> masako eta <math display=\"inline\"><mi>α</mi></math> angeluko ziri bat dago; bere aurpegi inklinatuan\n<math display=\"inline\"><mi>m</mi></math> masako blokea labain daiteke. Blokea pausagunetik askatzen da.<span class=\"j-oin\">[Hazia: Ecenarro,\n<em>Mecánica y Ondas: Problemas de Examen Resueltos y Comentados</em>, 97Mar03 (23. or.), non ziria isoszelea\n(<math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>) eta marruskadurarik gabea zen. Hemen <math display=\"inline\"><mrow><mi>α</mi><mo>,</mo><mi>M</mi><mo>,</mo><mi>m</mi></mrow></math> orokorrak hartu, marruskadura gehitu\neta momentu bidezko irakurketa erantsi zaizkio.]</span> <br>\n<strong>(a)</strong> Formalismo lagrangearra erabiliz, lortu higidura-ekuazioak eta <math display=\"inline\"><mi>s</mi></math>-ren zein <math display=\"inline\"><mi>X</mi></math>-ren azelerazioak,\ngainazal guztiak leunak izanik; aztertu <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mi>∞</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math> limiteak. <strong>(b)</strong> Lagrangeren biderkatzaile\nbaten bidez, lortu aurpegiak blokearen gainean egiten duen <math display=\"inline\"><mi>N</mi></math> indar normala. <strong>(c)</strong> Ekuazio diferentzialik\nebatzi gabe, lortu ziriaren <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>X</mi></mrow></math> desplazamendua blokeak aurpegian <math display=\"inline\"><mi>ℓ</mi></math> luzera egin duenean. <strong>(d)</strong> Orain\nmarruskadura (<math display=\"inline\"><mi>μ</mi></math>) dago blokearen eta aurpegiaren artean (zorua leun): frogatu blokeak labaintzen duela\nbaldin eta soilik baldin <math display=\"inline\"><mrow><mi>μ</mi><mo>&lt;</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> bada.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/d484a7447224de9b.svg",
     "zabalera": 398
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>m</mi></math> blokea aurpegi leunean labaintzen da eta <math display=\"inline\"><mi>M</mi></math> ziriak atzera egiten du."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ziriak atzera egiten du. Izan bedi <math display=\"inline\"><mi>X</mi></math> ziriaren posizio horizontala (eskuinera positiboa) eta <math display=\"inline\"><mi>s</mi></math> blokeak aurpegian behera egindako ibilbidea, ziriarekiko. Blokearen posizio absolutua <math display=\"inline\"><mrow><msub><mi>x</mi><mi>b</mi></msub><mo>=</mo><mi>X</mi><mo>−</mo><mi>s</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>y</mi><mi>b</mi></msub><mo>=</mo><msub><mi>h</mi><mn>0</mn></msub><mo>−</mo><mi>s</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> da, eta bere abiaduraren karratua <math display=\"inline\"><mrow><msubsup><mi>v</mi><mi>b</mi><mn>2</mn></msubsup><mo>=</mo><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mn>2</mn><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>+</mo><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>. Ziriaren <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> gaia gehituz, honela geratzen da lagrangearra: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>m</mi><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>s</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mi>X</mi></math> koordenatua ziklikoa da; beraz, dagokion momentu kanonikoa higidura-konstantea da eta, pausagunetik hasita, zero balio du (hau da, momentu lineal horizontala kontserbatzen da): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>m</mi><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><mi>m</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mi>.</mi></mrow></math> <math display=\"inline\"><mi>s</mi></math>-ren Euler-Lagrange ekuazioa, berriz, <math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> da. Biak konbinatuz, azelerazioak lortzen dira: <math display=\"block\"><mrow><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mi>∞</mi></mrow></math> limitean <math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>→</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> eta <math display=\"inline\"><mrow><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mo>→</mo><mn>0</mn></mrow></math> berreskuratzen dira (plano finkoa); <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math> limitean, aldiz, blokearen azelerazio bertikala <math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>→</mo><mi>g</mi></mrow></math> da (erorketa askea), ziri arinak ihes egiten duen bitartean."
    },
    {
     "mota": "testua",
     "html": "Indar normala lortzeko, ukipen-lotura berreskuratzen dugu: <math display=\"inline\"><mi>n</mi></math> koordenatua sartzen dugu (aurpegirako distantzia, <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mo>,</mo><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> normalarekin neurtua) eta <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> lotura Lagrangeren biderkatzaile baten bidez inposatzen dugu. <math display=\"inline\"><mi>n</mi></math>-ren ekuazioak, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> eginda, biderkatzailea indar normalaren berdina dela erakusten du: <math display=\"block\"><mrow><mi>N</mi><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>−</mo><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>M</mi><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>N</mi><mo>&gt;</mo><mn>0</mn></mrow></math> da beti: blokea ez da inoiz aurpegitik askatzen. <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mi>∞</mi></mrow></math> denean <math display=\"inline\"><mrow><mi>N</mi><mo>→</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>, plano finkoaren normal ezaguna."
    },
    {
     "mota": "testua",
     "html": "Emaitza horiek dinamikatik atera ditugu, baina ziriaren desplazamendua ekuazio diferentzialik ebatzi gabe ere kalkula dezakegu. <math display=\"inline\"><mi>X</mi></math> ziklikoa denez eta sistema pausagunetik abiatzen denez, masa-zentroa ez da horizontalean higitzen. Blokeak aurpegian <math display=\"inline\"><mi>ℓ</mi></math> egiten duenean, bere desplazamendu horizontala ziriarekiko <math display=\"inline\"><mrow><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> da; masa-zentroaren geldotasunak berehala ematen du emaitza: <math display=\"block\"><mrow><mi>M</mi><mi mathvariant=\"normal\">Δ</mi><mi>X</mi><mo>+</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>X</mi><mo>−</mo><mi>ℓ</mi><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>X</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math> Momentu-balantze hutsa da —ez da <math display=\"inline\"><mi>g</mi></math> agertzen, ezta dinamikaren xehetasunik ere—, eta aurreko emaitzen egiaztapen independentea."
    },
    {
     "mota": "testua",
     "html": "Azkenik, gehi diezaiogun marruskadura (<math display=\"inline\"><mi>μ</mi></math>) blokearen eta aurpegiaren artean (zorua leun mantenduz). Marruskadura sistemaren barneko indarra denez, momentu horizontala kontserbatzen da oraindik eta <math display=\"inline\"><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover></math>-ren erlazioak balio du; normalak ere forma bera dauka, ukitzailea baita. <math display=\"inline\"><mi>s</mi></math>-ren ekuazioan <math display=\"inline\"><mrow><mi>−</mi><mi>μ</mi><mi>N</mi></mrow></math> indar orokortua sartuz —jaitsierari aurka— eta <math display=\"inline\"><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover></math> zein <math display=\"inline\"><mi>N</mi></math> ordezkatuz: <math display=\"block\"><mrow><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mo>−</mo><mi>μ</mi><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo>−</mo><mi>μ</mi><mi>m</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></mfrac><mi>.</mi></mrow></math> Izendatzailea positiboa da beti; beraz, blokea abiatuko da (<math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>) baldin eta soilik baldin <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>&gt;</mo><mi>μ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>, hots, <math display=\"inline\"><mrow><mi>μ</mi><mo>&lt;</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>. Emaitza aipagarria da: labaintze-atalasea plano finkoaren berbera da, <math display=\"inline\"><mi>M</mi></math>-ren eta <math display=\"inline\"><mi>m</mi></math>-ren guztiz independentea —ziriaren atzera-egiteak azelerazioaren balioa aldatzen du, baina ez labaintzearen baldintza—. <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math> eginda, aurreko emaitzak berreskuratzen dira."
    },
    {
     "mota": "testua",
     "html": "Fisikoki, ziriaren erreferentzia-sistema ez-inertzialean <math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover></mrow></math> inertzia-indarra sortzen da blokearen gainean; bere proiekzioak aurpegian grabitate eragilea murrizten du, eta horrek azaltzen du zergatik den <math display=\"inline\"><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover></math> plano finkoarena baino txikiagoa (kasu mugatzailean izan ezik). Energiari dagokionez, zorua eta aurpegia leunak direnean sistema kontserbakorra da: blokeak galtzen duen energia potentzial guztia bere eta ziriaren energia zinetikoen artean banatzen da, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>X</mi></mrow></math>-k finkatzen duen proportzioan; marruskadurarekin, berriz, aldea <math display=\"inline\"><mrow><mi>μ</mi><mi>N</mi><mi>s</mi></mrow></math> moduan disipatzen da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Malgukia, horma eta bi masa: lotura-indarra eta askapena"
    },
    {
     "mota": "testua",
     "html": "<em>Zoru horizontal leun batean, ezkerrean horma bertikal bat dago. <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> masako bi partikula\npuntual <math display=\"inline\"><mi>k</mi></math> konstanteko eta <math display=\"inline\"><mi>l</mi></math> luzera propioko malguki ideal batez lotuta daude. Hasieran, hari batek\nmalgukia <math display=\"inline\"><mi>δ</mi></math> luzeraz konprimatuta mantentzen du (haren luzera <math display=\"inline\"><mrow><mi>l</mi><mo>−</mo><mi>δ</mi></mrow></math> da, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>δ</mi><mo>≤</mo><mi>l</mi></mrow></math>), eta <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>\npartikula hormaren kontra dago, geldi. Une batean, haria mozten da eta sistema askatzen da.<span class=\"j-oin\">[Hazia:\nEcenarro, <em>Mecánica y Ondas: Problemas de Examen Resueltos y Comentados</em>, 98Set01 (1998ko iraila).\nJatorrizkoak bi masa berdin eta erabat konprimatutako malgukia zituen, eta eskuineko partikularen abiadura\nbakarra eskatzen zuen ukipena galtzean, Lagrangeren biderkatzaileen bidez. Hemen masak desberdin bihurtu,\nkonpresioa oro har (<math display=\"inline\"><mi>δ</mi></math>) hartu, eta lotura-indarraren denborazko bilakaera osoa, askapen ondorengo bi\ngorputzen higidura askea eta muga-kasuak erantsi zaizkio.]</span> Higidura guztia lerro zuzen berean gertatzen da.\n<br>\n<strong>(a)</strong> Idatzi sistemaren lagrangearra hormaren ukipen-lotura barne, eta Lagrangeren biderkatzaile baten bidez\nlortu hormak <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>-en gainean egiten duen <math display=\"inline\"><mi>N</mi></math> lotura-indarra, denboraren funtzio esplizitu gisa, ukipenak\ndirauen bitartean. <strong>(b)</strong> Aurkitu <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> hormatik askatzen den unea eta <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>-ren abiadura orduan; frogatu <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>\nmasarekiko independentea dela. <strong>(c)</strong> Askapenaren ondoren bi gorputzak askeak dira: laburtu masa-zentroaren eta\nkoordenatu erlatiboaren problemara, eta eman bi masen abiadurak eta barne-oszilazioaren maiztasuna. <strong>(d)</strong>\nFrogatu <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> ez dela inoiz hormara itzultzen, nahiz eta malgukia berriz konprimatu; deskribatu haren higidura.\n<strong>(e)</strong> Aztertu energiaren banaketa masa-zentroaren eta barne-oszilazioaren artean, eta <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>→</mo><mi>∞</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>→</mo><mn>0</mn></mrow></math> muga-kasuak.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/6e927890dcaeeacd.svg",
     "zabalera": 432
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Malgukia <math display=\"inline\"><mrow><mi>l</mi><mo>−</mo><mi>δ</mi></mrow></math> luzeraz konprimatuta dago (luzera propioa <math display=\"inline\"><mi>l</mi></math>), hariak eutsita; hormak <math display=\"inline\"><mi>N</mi></math> indarra egiten dio <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>-i. Haria moztean sistema askatzen da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Har dezagun <math display=\"inline\"><mi>x</mi></math> ardatza hormatik eskuinera, eta izan bitez <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math> bi masen posizioak. Malgukiaren luzapena <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mi>l</mi></mrow></math> da eta energia potentzial elastikoa <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>s</mi><mn>2</mn></msup></mrow></math>. Ukipenak dirauen bitartean hormak <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> lotura inposatzen du; hori Lagrangeren <math display=\"inline\"><mi>λ</mi></math> biderkatzaile batez askatzen badugu, lagrangearra <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mi>l</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> da, eta <math display=\"inline\"><mrow><mi>g</mi><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> lotura biderkatzaileak inposatzen du. <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math>-en Euler-Lagrange ekuazioak <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>−</mo><mi>k</mi><mi>s</mi><mo>=</mo><mi>λ</mi></mrow></math> ematen du. Ukipenean <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> (beraz <math display=\"inline\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>) denez, biderkatzailea zuzenean hormaren indarra da: <math display=\"block\"><mrow><mi>N</mi><mo>=</mo><mi>λ</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>s</mi><mi>.</mi></mrow></math> <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math>-rena, loturarik gabe, <math display=\"inline\"><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>+</mo><mi>k</mi><mi>s</mi><mo>=</mo><mn>0</mn></mrow></math> da. <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> finkoa denez, <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mi>l</mi></mrow></math> eta ekuazioa <math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>s</mi><mo>=</mo><mn>0</mn></mrow></math> bihurtzen da, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><msub><mi>m</mi><mn>2</mn></msub></mrow></msqrt></mrow></math>-rekin: <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> masaren higidura harmoniko soila, malgukia horma finko bati ainguratuta balego bezala. Hasierako baldintzekin (<math display=\"inline\"><mrow><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>δ</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>δ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>k</mi><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>δ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mi>.</mi></mrow></math> Lotura-indarra <math display=\"inline\"><mrow><mi>k</mi><mi>δ</mi></mrow></math>-tik abiatzen da eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math> moduan txikitzen doa. Horma-ukipena aldebakarrekoa da —hormak bultza dezake, ez tira—, hots <math display=\"inline\"><mrow><mi>N</mi><mo>≥</mo><mn>0</mn></mrow></math> izan behar da; beraz <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>0</mn></mrow></math> egiten den unean bertan askatzen da <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>0</mn></mrow></math> baldintzak <math display=\"inline\"><mrow><mi>ω</mi><mi>t</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> ematen du, hau da, ukipenak <math display=\"inline\"><mrow><msub><mi>t</mi><mo>*</mo></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mrow><msub><mi>m</mi><mn>2</mn></msub><mi>/</mi><mi>k</mi></mrow></msqrt></mrow></math> irauten du: malgukiak bere luzera propioa (<math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mn>0</mn></mrow></math>) berreskuratzen duen une bera. Orduan <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>-ren abiadura maximoa da, <math display=\"block\"><mrow><msub><mi>v</mi><mo>*</mo></msub><mo>=</mo><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mo>*</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>δ</mi><mi>ω</mi><mo>=</mo><mi>δ</mi><msqrt><mrow><mi>k</mi><mi>/</mi><msub><mi>m</mi><mn>2</mn></msub></mrow></msqrt><mo>,</mo></mrow></math> eta <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> oraindik geldi dago. Emaitza <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> masarekiko <strong>guztiz independentea</strong> da: ukipenak dirauen bitartean hormak <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> perfektuki geldi mantentzen du, eta beraz fase horretako dinamikan <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>-en inertzia ez da inoiz agertzen —<math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> masa bakarraren higidura harmonikoa da—. Energia aldetik, hasierako <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>δ</mi><mn>2</mn></msup></mrow></math> potentzial elastiko osoa <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>-ren zinetiko bihurtu da, <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msubsup><mi>v</mi><mo>*</mo><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>δ</mi><mn>2</mn></msup></mrow></math>, hormak lanik egin gabe (bere indarra <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> puntu finkoan aritzen baita)."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>t</mi><mo>*</mo></msub></math>-tik aurrera bi masak askeak dira eta sistema itxia da: momentu lineala kontserbatzen da. Askapenean <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> geldi eta <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> <math display=\"inline\"><msub><mi>v</mi><mo>*</mo></msub></math> abiaduraz doazenez, momentu osoa <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mo>*</mo></msub></mrow></math> da eta masa-zentroaren abiadura konstantea: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mi>P</mi><mi>M</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mo>*</mo></msub></mrow><mi>M</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>M</mi><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> Koordenatu erlatiboa berrerabiliz (<math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mi>l</mi></mrow></math>), bi gorputzen problema masa laburtuaren higidura harmoniko batera laburtzen da: <math display=\"inline\"><mrow><mi>μ</mi><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>k</mi><mi>s</mi></mrow></math>, non <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub><mi>/</mi><mi>M</mi></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>μ</mi></mrow></msqrt></mrow></math> diren. Askapenean <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>v</mi><mo>*</mo></msub><mo>−</mo><mn>0</mn><mo>=</mo><msub><mi>v</mi><mo>*</mo></msub></mrow></math> direnez, <math display=\"block\"><mrow><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>v</mi><mo>*</mo></msub><mi mathvariant=\"normal\">Ω</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>τ</mi><mo>=</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mo>*</mo></msub><mi>.</mi></mrow></math> Masen abiadurak <math display=\"inline\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><mi>V</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>2</mn></msub><mi>/</mi><mi>M</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover></mrow></math> eta <math display=\"inline\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><mi>V</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mi>/</mi><mi>M</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover></mrow></math> deskonposaketatik lortzen dira: <math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mo>*</mo></msub></mrow><mi>M</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mo>*</mo></msub></mrow><mi>M</mi></mfrac><mo>+</mo><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>v</mi><mo>*</mo></msub></mrow><mi>M</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mi>.</mi></mrow></math> Masa-zentroak <math display=\"inline\"><mi>V</mi></math> abiadura konstantez ihes egiten du hormatik, eta bi masek <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> maiztasunez oszilatzen dute haren inguruan."
    },
    {
     "mota": "testua",
     "html": "Emaitza dotore bat agertzen da <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>-en higiduran. Bere abiadura <math display=\"inline\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mo>*</mo></msub><mi>/</mi><mi>M</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da, eta <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo>≥</mo><mn>0</mn></mrow></math> denez, <strong>inoiz ez da negatiboa</strong>: <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> eskuinera bakarrik higitzen da, unean-unean gelditzen da (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>n</mi></mrow></math> puntuetan) baina ez du inoiz atzera egiten. Integratuz, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> -tik abiatuta, <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mo>*</mo></msub></mrow><mrow><mi>M</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> hots, zikloide baten ekuazioa. <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo>≥</mo><mn>0</mn></mrow></math> denez beti, <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> ez da inoiz hormara itzultzen: askapena behin betikoa da. Are gehiago, malgukia berriz konprimatzen da <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tartean (<math display=\"inline\"><mrow><mi>s</mi><mo>&lt;</mo><mn>0</mn></mrow></math>), eta orduan <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>-en gainean hormaranzko indarra egiten du; hala ere, aurreko luzapen-fasean irabazitako momentuak fase osoan zehar aurrera darama <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>, moteldu bai baina alderantzikatu gabe. Masa-zentroaren jitoak zehazki konpentsatzen du malgukiaren atzera-bultzada."
    },
    {
     "mota": "testua",
     "html": "Azkenik, energia osoa (<math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>δ</mi><mn>2</mn></msup></mrow></math>) bi zatitan banatzen da: masa-zentroaren translazioa, <math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">mz </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>V</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>m</mi><mn>2</mn><mn>2</mn></msubsup><msubsup><mi>v</mi><mo>*</mo><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>M</mi></mrow></math>, eta barne-oszilazioa, <math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">barn </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>μ</mi><msubsup><mi>v</mi><mo>*</mo><mn>2</mn></msubsup></mrow></math>. <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msubsup><mi>v</mi><mo>*</mo><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>δ</mi><mn>2</mn></msup></mrow></math> dela erabiliz, <math display=\"block\"><mrow><mfrac><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">mz </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>E</mi></mfrac><mo>=</mo><mfrac><msub><mi>m</mi><mn>2</mn></msub><mi>M</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mfrac><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">barn </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>E</mi></mfrac><mo>=</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><mi>M</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">mz </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>:</mo><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">barn </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mo>:</mo><msub><mi>m</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math> Muga-kasuek irudia osatzen dute. <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi></mrow></math> (hazia): <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><msub><mi>v</mi><mo>*</mo></msub><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> eta energia erdi-erdi banatzen da —kasu simetrikoa berreskuratzen da, eta hazian erabateko konpresioa (<math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>l</mi></mrow></math>) hartuz gero <math display=\"inline\"><mrow><msub><mi>v</mi><mo>*</mo></msub><mo>=</mo><mi>l</mi><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>—. <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>→</mo><mi>∞</mi></mrow></math>: <math display=\"inline\"><mrow><mi>V</mi><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>→</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><mi>ω</mi></mrow></math>; <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> geldi geratzen da eta <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>-k luzera propioaren inguruan oszilatzen jarraitzen du, malgukia horma finko bati ainguratuta balego bezala —energia guztia barnekoa da (<math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">barn </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>/</mi><mi>E</mi><mo>→</mo><mn>1</mn></mrow></math>) eta hormaren papera <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> astunak hartzen du—. <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>→</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>V</mi><mo>→</mo><msub><mi>v</mi><mo>*</mo></msub></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><mi>∞</mi></mrow></math> eta anplitudea <math display=\"inline\"><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mo>*</mo></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> arinak maiztasun handiz eta anplitude ttipiz dardaratzen du <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>-ren jitoaren gainean, momentu eta energia ia guztia <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>-k daramala (<math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">barn </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>/</mi><mi>E</mi><mo>→</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "Sintesi gisa, Lagrangeren biderkatzailea ez da hemen kalkulu-tresna hutsa, lotura-indar fisikoaren neurri zuzena baizik, eta haren zeinu-aldaketak markatzen du aldebakarreko loturaren muga. <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>δ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math> funtzioak fase biak josten ditu: <math display=\"inline\"><mrow><mi>N</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bitartean sistema behartua da (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>), eta <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>0</mn></mrow></math>-k askapena zein ondorengo bi gorputzen higidura askea abiarazten ditu. Horrela, ukipen-problema oso bat —behartutik askera— biderkatzaile bakar baten bilakaeraz jorratzen da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kate astuna polean: oreka ezegonkorra eta ihes esponentziala"
    },
    {
     "mota": "testua",
     "html": "<em><math display=\"inline\"><mi>L</mi></math> luzerako eta <math display=\"inline\"><mi>m</mi></math> masako kate homogeneo bat (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>m</mi><mi>/</mi><mi>L</mi></mrow></math> dentsitate lineala)\npolea txiki, leun eta masagabe batetik pasatzen da; bi adarrak bertikalean zintzilik daude.\nEskuineko adarraren muturrean <math display=\"inline\"><mi>M</mi></math> masako gorputz puntual bat lotu da; ezkerreko adarra askea da.\nSistema pausagunetik askatzen da.<span class=\"j-oin\">[Hazia: Ecenarro, <em>Mecánica y Ondas: Problemas de\nExamen Resueltos y Comentados</em>, 97Set02 (46. or.), non soka masadun batek bi bloke lotzen zituen\nmahai-ertzeko polea batetik igarota, eta lagrangearra, hamiltondarra eta abiadura bat eskatzen\nziren. Hemen dispositiboa aldatu da —kate osoa bi adarretan zintzilik, mutur batean <math display=\"inline\"><mi>M</mi></math> gorputza—\neta oreka-posizioa, egonkortasun-azterketa, ekuazio diferentzialaren ebazpen esplizitua eta\n<math display=\"inline\"><mrow><mi>M</mi><mo>≤</mo><mi>m</mi></mrow></math> atalasea erantsi zaizkio.]</span> <br>\n<strong>(a)</strong> Idatzi sistemaren lagrangearra eta hamiltondarra, eta egiaztatu hamiltondarra energia\nmekanikoa dela eta higidura-konstantea dela. <strong>(b)</strong> Lortu higidura-ekuazioa eta aurkitu\noreka-posizioa; frogatu <math display=\"inline\"><mrow><mi>M</mi><mo>≤</mo><mi>m</mi></mrow></math> bada baino ez dela existitzen, eta interpretatu emaitza.\n<strong>(c)</strong> Aztertu orekaren egonkortasuna eta, ekuazio diferentziala ebatziz, lortu higidura pausagunetik\n<math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> posiziotik abiatuta; eman ihes-tasa <math display=\"inline\"><mi>ω</mi></math> eta denbora karakteristikoa. <strong>(d)</strong> Energia-metodoa\nerabiliz, aurkitu katea poleatik askatzen den uneko abiadura. <strong>(e)</strong> Aztertu <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math> muga-kasua eta\niruzkindu emaitza aipagarriak.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/57196eebd8142f42.svg",
     "zabalera": 293
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kate homogeneoa (<math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mi>L</mi></mrow></math>) polea leun eta masagabetik zintzilik; eskuineko muturrean <math display=\"inline\"><mi>M</mi></math> gorputza. <math display=\"inline\"><mi>x</mi></math> da ezkerreko adarraren luzera."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kate osoa luzaezina denez, adar biek, poleako arkuak eta <math display=\"inline\"><mi>M</mi></math> gorputzak abiadura-modulu bera daukate, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math>, non <math display=\"inline\"><mi>x</mi></math> ezkerreko adarraren luzera den (eta <math display=\"inline\"><mrow><mi>L</mi><mo>−</mo><mi>x</mi></mrow></math> eskuinekoarena). Beraz energia zinetikoa masa mugikor osoari dagokio, <math display=\"inline\"><mrow><mi>m</mi><mo>+</mo><mi>M</mi></mrow></math>, abiadura bakarrarekin. Energia potentzialerako, polearen ardatza hartuko dugu maila nulutzat (behera negatiboa). Ezkerreko adarraren masa <math display=\"inline\"><mrow><mi>λ</mi><mi>x</mi></mrow></math> da eta bere masa-zentroa <math display=\"inline\"><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></math> beheititik dago; eskuinekoarena <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math> beheititik; eta <math display=\"inline\"><mi>M</mi></math> gorputza <math display=\"inline\"><mrow><mi>L</mi><mo>−</mo><mi>x</mi></mrow></math> sakoneran dago. Hortaz, <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><mi>M</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> eta lagrangearra: <math display=\"block\"><mrow><msub><mi>L</mi><mrow><mtext mathvariant=\"normal\">agr </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mrow><mi>λ</mi><mi>g</mi></mrow><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>M</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Momentu kanonikoa <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>∂</mi><msub><mi>L</mi><mrow><mtext mathvariant=\"normal\">agr </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>/</mi><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> denez, hamiltondarra Legendre-ren transformatuaz eraikitzen da: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mi>p</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><msub><mi>L</mi><mrow><mtext mathvariant=\"normal\">agr </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mi>.</mi></mrow></math> Energia zinetikoa <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math>-ren forma koadratiko homogeneoa da eta <math display=\"inline\"><msub><mi>L</mi><mtext mathvariant=\"normal\">agr</mtext></msub></math> ez da <math display=\"inline\"><mi>t</mi></math>-ren mendekoa esplizituki; ondorioz <math display=\"inline\"><mi>H</mi></math> energia mekaniko osoa da eta higidura-konstantea —(d) ataleko energia-balantzearen oinarria—."
    },
    {
     "mota": "testua",
     "html": "Higidura-ekuazioa Euler-Lagrangeren bidez, <math display=\"inline\"><mi>x</mi></math> koordenatu bakarrarekin, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da. Deribatua eginda, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>λ</mi><mi>g</mi><mi>x</mi><mo>−</mo><mi>λ</mi><mi>g</mi><mi>L</mi><mo>−</mo><mi>M</mi><mi>g</mi><mo>=</mo><mn>2</mn><mi>λ</mi><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mi>M</mi><mi>m</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub></math> oreka-posizioa da (<math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>). Fisikoki adar biek luzera ez-negatiboa behar dute, <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>L</mi></mrow></math>; <math display=\"inline\"><mrow><msub><mi>x</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≥</mo><mi>L</mi><mi>/</mi><mn>2</mn><mo>&gt;</mo><mn>0</mn></mrow></math> beti denez, existentzia goiko mugak baldintzatzen du: <math display=\"block\"><mrow><msub><mi>x</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≤</mo><mi>L</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mi>L</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mi>M</mi><mi>m</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≤</mo><mi>L</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>M</mi><mo>≤</mo><mi>m</mi><mi>.</mi></mrow></math> Interpretazio garbia du: orekan ezkerreko adarra eskuinekoa baino luzeagoa da, eta luzera-aldea <math display=\"inline\"><mrow><mn>2</mn><msub><mi>x</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><mi>L</mi><mo>=</mo><mi>M</mi><mi>/</mi><mi>λ</mi><mo>=</mo><mi>M</mi><mi>L</mi><mi>/</mi><mi>m</mi></mrow></math> da. Soberako kate horren pisua <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo>=</mo><mi>M</mi><mi>g</mi></mrow></math> da, hain zuzen ere eskuineko <math display=\"inline\"><mi>M</mi></math> gorputza orekatzen duena. Soberakin hori ezin da kate osoa baino handiagoa izan (<math display=\"inline\"><mrow><mi>M</mi><mi>/</mi><mi>λ</mi><mo>≤</mo><mi>L</mi></mrow></math>), eta hortik dator <math display=\"inline\"><mrow><mi>M</mi><mo>≤</mo><mi>m</mi></mrow></math> atalasea: kateak berak <math display=\"inline\"><mi>M</mi></math> gorputz bat oreka dezake bere pisuaren bidez, baina soilik gorputzaren masa katearen masa osoa baino handiagoa ez bada."
    },
    {
     "mota": "testua",
     "html": "Orekaren izaera <math display=\"inline\"><mi>V</mi></math>-ren bigarren deribatuak erabakitzen du: <math display=\"block\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mi>λ</mi><mi>g</mi><mo>&lt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> guztietarako</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Beti negatiboa denez, <math display=\"inline\"><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub></math> potentzialaren <em>maximoa</em> da: oreka —existitzen denean— beti ezegonkorra da. Ez da harritzekoa, atzeraelikadura positiboa baitago: adar bat zerbait luzatzen bada, astunagoa bihurtzen da eta gehiago luzatzen da. Oreka inguruan <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub></mrow></math> definituz, higidura-ekuazioa alderantzizko osziladore batena da, <math display=\"block\"><mrow><mover><mi>u</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>u</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>λ</mi><mi>g</mi></mrow><mrow><mi>m</mi><mo>+</mo><mi>M</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>g</mi></mrow><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo></mrow></math> zeinaren soluzioa hiperbolikoa den (esponentzial hazkorra), ez oszilakorra. Pausagunetik <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> posiziotik askatuta (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub><mo>−</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub></mrow></math>), <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>x</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>−</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>−</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ω</mi><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Desbideratzeak <math display=\"inline\"><mi>e</mi></math> aldiz handitzen dira denbora-tarte bakoitzean <math display=\"block\"><mrow><mi>τ</mi><mo>=</mo><mfrac><mn>1</mn><mi>ω</mi></mfrac><mo>=</mo><msqrt><mfrac><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>m</mi><mi>g</mi></mrow></mfrac></msqrt><mo>,</mo></mrow></math> sistemaren denbora karakteristikoa. Hazia ez bezala —zeinak ekuazio diferentziala ebatzi gabe uzten zuen—, hemen ihesaren legea esplizituki dugu: <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>&gt;</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub></mrow></math> bada, ezkerreko adarrak irabazten du eta <math display=\"inline\"><mi>x</mi></math> hazi egiten da <math display=\"inline\"><mi>L</mi></math>-raino; <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>&lt;</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub></mrow></math> bada, eskuinekoak irabazten du eta <math display=\"inline\"><mi>x</mi></math> zerora doa."
    },
    {
     "mota": "testua",
     "html": "Abiadura, askatze-unean, energia-metodoak berehala ematen du, sistema kontserbakorra baita (gainazal guztiak leunak, polea masagabea). Demagun <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>&gt;</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub></mrow></math>: kate osoa ezkerrean geratzen den unean (<math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>L</mi></mrow></math>, eskuineko adarra desagertuta) hasten da askatzen. Pausagunetik abiatuz, <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mi>g</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math> <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> ordezkatu eta laburtuz (hemen <math display=\"inline\"><mrow><msup><mi>L</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>x</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>2</mn><msub><mi>x</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> identitatea erabilita), <math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><msub><mi>x</mi><mn>0</mn></msub><mo>−</mo><mi>M</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><msub><mi>x</mi><mn>0</mn></msub><mo>−</mo><mi>M</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>m</mi><mo>+</mo><mi>M</mi></mrow></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mi>m</mi><mi>/</mi><mi>L</mi><mi>.</mi></mrow></math> Erroaren barrukoa positiboa da <math display=\"inline\"><mrow><mi>λ</mi><msub><mi>x</mi><mn>0</mn></msub><mo>&gt;</mo><mi>M</mi></mrow></math> denean, hots <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>&gt;</mo><mi>M</mi><mi>/</mi><mi>λ</mi></mrow></math>; hori <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>&gt;</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub></mrow></math> hipotesiak bermatzen du (<math display=\"inline\"><mrow><mi>M</mi><mo>&lt;</mo><mi>m</mi></mrow></math> denean <math display=\"inline\"><mrow><mi>M</mi><mi>/</mi><mi>λ</mi><mo>&lt;</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub></mrow></math> baita). Emaitza bat dator (c) ataleko dinamikarekin: azelerazioa integratzeak abiadura bera eman behar du, eta hala egiten du."
    },
    {
     "mota": "testua",
     "html": "Azkenik, muga-kasuek irudia biribiltzen dute. <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math> eginda, kate simetriko hutsa geratzen da: oreka-posizioa erdira lerratzen da (<math display=\"inline\"><mrow><msub><mi>x</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>→</mo><mi>L</mi><mi>/</mi><mn>2</mn></mrow></math>), ihes-tasa <math display=\"block\"><mrow><mi>ω</mi><mo>→</mo><msqrt><mrow><mn>2</mn><mi>g</mi><mi>/</mi><mi>L</mi></mrow></msqrt></mrow></math> bihurtzen da eta askatze-abiadura <math display=\"inline\"><mrow><mi>v</mi><mo>→</mo><msqrt><mrow><mn>2</mn><mi>g</mi><msub><mi>x</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>L</mi></mrow></msqrt></mrow></math>. Emaitza hau da harribitxia: ihes-erritmoa katearen masaren guztiz independentea da —kate astun batek eta arin batek, luzera bera badute, erloju berean egiten dute ihes, <math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><msqrt><mrow><mi>L</mi><mi>/</mi><mn>2</mn><mi>g</mi></mrow></msqrt></mrow></math>—. Arrazoia analitikoa da: &quot;malgutasun efektiboa&quot; <math display=\"inline\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mo>=</mo><mi>−</mi><mn>2</mn><mi>λ</mi><mi>g</mi></mrow></math> da eta inertzia <math display=\"inline\"><mrow><mi>m</mi><mo>+</mo><mi>M</mi></mrow></math>; <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>0</mn></mrow></math> denean biak <math display=\"inline\"><mi>λ</mi></math>-rekiko proportzionalak dira eta <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msup><mi>V</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>-tik masa desagertzen da, penduluaren periodoan masa desagertzen den bezalaxe. Bestalde, <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mi>m</mi></mrow></math> atalasean <math display=\"inline\"><mrow><msub><mi>x</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>→</mo><mi>L</mi></mrow></math>: oreka kate osoa alde batean dagoen konfigurazio degeneratura lerratzen da, eta <math display=\"inline\"><mrow><mi>M</mi><mo>&gt;</mo><mi>m</mi></mrow></math>-rako oreka guztiz desagertzen da (gorputzak beti irabazten du). Bi ondorio hauek —masarekiko independentea den ihes-erloju bat, eta kate batek gorputz bat oreka dezakeela baina inoiz ez egonkorki, <math display=\"inline\"><mrow><mi>M</mi><mo>≤</mo><mi>m</mi></mrow></math> atalasearekin— mekanika analitikoak potentzial efektibo bakar batean zenbat informazio biltzen duen erakusten dute."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Guraize elastikoa: adarkatzea eta modu normala"
    },
    {
     "mota": "testua",
     "html": "<em>Bi barra zurrun eta masagabek, bakoitza <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> luzerakoa, beren erdian\nartikulatuta guraize bat osatzen dute plano bertikalean. Lau muturretan masa\npuntualak daude: goiko biak <math display=\"inline\"><mi>M</mi></math> masakoak, beheko biak <math display=\"inline\"><mi>m</mi></math> masakoak. Beheko bi\nmasak zoru horizontal leunean bermatzen dira eta marruskadurarik gabe labain\ndaitezke; <math display=\"inline\"><mi>k</mi></math> konstanteko malguki batek —luzera natural nulukoak— lotzen ditu,\nhots, beheko masa bakoitzari ardatzetiko distantziarekiko proportzionala den\nindar berreskuratzailea eragiten dio.<span class=\"j-oin\">[Hazia: Ecenarro, <em>Mecánica y\nOndas: Problemas de Examen Resueltos y Comentados</em>, 00Feb02 (Otsaila 2000), non\nlau masa berdineko guraizea, malgukirik gabe, pausagunetik zabaltzen zen zorura\nerortzeraino. Hemen masak bereizi dira (<math display=\"inline\"><mi>M</mi></math> goian, <math display=\"inline\"><mi>m</mi></math> behean), oinarrian\nmalguki elastikoa erantsi da, eta erorketaren ordez oreka, egonkortasuna,\nadarkatzea eta oszilazio-modua eskatzen dira.]</span> Izan bedi <math display=\"inline\"><mi>θ</mi></math> barrek\nbertikalarekin osatzen duten angelua; sistemak plano bertikalean eta simetrikoki\nhigitzen dela onartuko dugu. <br>\n<strong>(a)</strong> Formalismo lagrangearra erabiliz, lortu <math display=\"inline\"><mi>θ</mi></math>-ren higidura-ekuazio\nzehatza (ez-lineala). <strong>(b)</strong> Aurkitu orekak eta frogatu guraize itxia (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>) egonkorra dela baldin eta soilik baldin <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><msub><mi>k</mi><mi>c</mi></msub></mrow></math> bada, non <math display=\"inline\"><mrow><msub><mi>k</mi><mi>c</mi></msub><mo>=</mo><mi>M</mi><mi>g</mi><mi>/</mi><mi>a</mi></mrow></math> zurruntasun kritikoa den; identifikatu adarkatzea (buckling) eta lortu oreka\nmakurtua. <strong>(c)</strong> Kalkulatu <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> inguruko oszilazio txikien maiztasuna;\naztertu <math display=\"inline\"><mrow><mi>k</mi><mo>→</mo><msub><mi>k</mi><mi>c</mi></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math> mugak. <strong>(d)</strong> Frogatu adarkatzea azpikritikoa\ndela (kolpe-irekitzea): lortu <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> babesten duen energia-langa, erakutsi\nmaiztasunarekin batera itzaltzen dela <math display=\"inline\"><msub><mi>k</mi><mi>c</mi></msub></math>-n, eta iruzkindu <math display=\"inline\"><mi>m</mi></math>-ren papera.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/b82a19c9855fe923.svg",
     "zabalera": 296
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Guraize elastikoa: bi barra artikulatu, goian <math display=\"inline\"><mi>M</mi></math> masak, behean <math display=\"inline\"><mi>m</mi></math> masak zoru leunean; <math display=\"inline\"><mi>k</mi></math> malgukiak oinarria lotzen du. <math display=\"inline\"><mi>θ</mi></math> bertikaletik neurtzen da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Simetriaz, artikulazioa ardatz bertikalean geratzen da, beheko masen erdibidean. Beso bakoitzak <math display=\"inline\"><mi>a</mi></math> luze duenez, artikulazioa <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> altueran dago; beheko masak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>±</mi><mi>a</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> puntuetan daude eta goiko masak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>±</mi><mi>a</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>,</mo><mn>2</mn><mi>a</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> puntuetan. Koordenatu orokortu bakarra <math display=\"inline\"><mi>θ</mi></math> da. Beheko masen abiadura horizontala <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> da; goiko masek osagai horizontal bera dute, gehi <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> osagai bertikala. Bi masa mota bakoitzeko biren ekarpena batuz, energia zinetikoa honela geratzen da: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mn>4</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Energia potentzialak bi ekarpen ditu: grabitatea, goiko masen gainean soilik (beheko masak <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> altueran daude beti), eta malgukia, zeinaren luzapena beheko masen arteko <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> tartea baita. Beraz, <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn><mi>M</mi><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>,</mo></mrow></math> eta lagrangearra <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi></mrow></math> da. Nabarmentzekoa da <math display=\"inline\"><mi>m</mi></math> masak <math display=\"inline\"><mi>T</mi></math>-n bakarrik agertzen direla: potentzialak ez daki ezer beheko masez, hauek zoruan bermatzen baitira eta ez baitute energia potentzialik ekartzen."
    },
    {
     "mota": "testua",
     "html": "Euler-Lagrange ekuazioa lortzeko, komeni da inertzia orokortua <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mn>4</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> izendatzea, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> izan dadin. Orduan <math display=\"inline\"><mrow><mi>A</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> da, eta <math display=\"inline\"><mrow><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup></mrow></math>-z zatituz higidura-ekuazioa hau da: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mn>4</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>M</mi><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>θ</mi><mspace width=\"0.167em\"></mspace><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>k</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>θ</mi><mo>−</mo><mfrac><mrow><mn>2</mn><mi>M</mi><mi>g</mi></mrow><mi>a</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Lehen gaia inertzia da (<math display=\"inline\"><mi>θ</mi></math>-ren mende, guraizearen forma aldatzean masen banaketa efektiboa aldatzen delako); bigarrena indar zentrifugo-antzeko gai geometrikoa da; azken biak potentzialetik datoz. Ohartu, berriz ere, potentzial-gaiek (<math display=\"inline\"><mi>k</mi></math> eta <math display=\"inline\"><mi>M</mi></math>) ez dutela <math display=\"inline\"><mi>m</mi></math> masarik: hori izango da gakoa."
    },
    {
     "mota": "testua",
     "html": "Orekak <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> ezarriz lortzen dira. <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>4</mn><mi>M</mi><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>θ</mi><mo>=</mo><mn>4</mn><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><mi>M</mi><mi>g</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> denez, <math display=\"block\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>=</mo><mfrac><mrow><mi>M</mi><mi>g</mi></mrow><mrow><mi>k</mi><mi>a</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>λ</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>≡</mo><mfrac><mrow><mi>k</mi><mi>a</mi></mrow><mrow><mi>M</mi><mi>g</mi></mrow></mfrac><mo>=</mo><mfrac><mi>k</mi><msub><mi>k</mi><mi>c</mi></msub></mfrac><mi>.</mi></mrow></math> Bigarren oreka —guraize makurtua— existitzen da soilik <math display=\"inline\"><mrow><mi>λ</mi><mo>≥</mo><mn>1</mn></mrow></math> bada, hots, malgukia nahikoa gogorra denean. Egonkortasuna <math display=\"inline\"><msup><mi>V</mi><mo>″</mo></msup></math>-k erabakitzen du. Itxian, <math display=\"inline\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>4</mn><mi>M</mi><mi>g</mi><mi>a</mi><mo>+</mo><mn>4</mn><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup><mo>=</mo><mn>4</mn><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo>−</mo><mi>M</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, beraz <math display=\"block\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>&gt;</mo><msub><mi>k</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><mi>M</mi><mi>g</mi></mrow><mi>a</mi></mfrac><mi>.</mi></mrow></math> Malguki ahulez (<math display=\"inline\"><mrow><mi>k</mi><mo>&lt;</mo><msub><mi>k</mi><mi>c</mi></msub></mrow></math>), <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> maximoa da: guraize itxia ezegonkorra da eta zabaldu egiten da —hazi-problemaren erorketa librea da hori. Malguki gogorrez (<math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><msub><mi>k</mi><mi>c</mi></msub></mrow></math>), aldiz, <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> minimoa da (egonkorra) eta oreka makurtua <math display=\"inline\"><msup><mi>θ</mi><mo>*</mo></msup></math> maximo bihurtzen da: bi egoeren arteko energia-langa da. <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><msub><mi>k</mi><mi>c</mi></msub></mrow></math> atalasean egonkortasuna galtzen da: mekanikoki, Euler-en makurdura (buckling) baten parekoa da, non zutabe zuzena karga kritikoan okertzen den. Hemen &quot;karga&quot; grabitatea da eta <math display=\"inline\"><mrow><msub><mi>k</mi><mi>c</mi></msub><mo>=</mo><mi>M</mi><mi>g</mi><mi>/</mi><mi>a</mi></mrow></math> atalasea goiko masek soilik finkatzen dute."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> inguruko oszilazio txikietarako, higidura-ekuazioa linealizatzen dugu (<math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>→</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>θ</mi><mo>→</mo><mn>2</mn><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>→</mo><mi>θ</mi></mrow></math>, eta <math display=\"inline\"><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></math> gaia bigarren ordenakoa denez baztertzen da): <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>M</mi><mi>g</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>. Modu normalaren maiztasuna, beraz, <math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo>−</mo><mi>M</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mrow><mi>m</mi><mo>+</mo><mi>M</mi></mrow></mfrac></msqrt><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mi>λ</mi></mfrac></mrow></msqrt><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>k</mi><mo>→</mo><msubsup><mi>k</mi><mi>c</mi><mo>+</mo></msubsup></mrow></math> denean <math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mn>0</mn></mrow></math>: modu biguna, adarkatzearen seinale ezaugarria (dardara geldoa, egonkortasuna galtzear). Muga bakoitza esanguratsua da. <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math> bada, <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>→</mo><mn>2</mn><mi>k</mi><mi>/</mi><mi>m</mi></mrow></math>: goiko masarik gabe, sistema <math display=\"inline\"><mi>m</mi></math> masako bi gorputz besterik ez da, <math display=\"inline\"><mi>k</mi></math> malgukiak lotuta, eta hori da hain zuzen bi masaren modu erlatiboaren maiztasuna (<math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mi>k</mi><mi>/</mi><mi>μ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>m</mi><mi>/</mi><mn>2</mn></mrow></math>). <math display=\"inline\"><mrow><mi>k</mi><mo>≫</mo><msub><mi>k</mi><mi>c</mi></msub></mrow></math> bada, <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>→</mo><mn>2</mn><mi>k</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, malguki hutsaren erregimena. Eta, erabakigarria: <math display=\"inline\"><mi>m</mi></math> masak <math display=\"inline\"><mi>ω</mi></math>-n agertzen dira (inertzian) baina ez <math display=\"inline\"><msub><mi>k</mi><mi>c</mi></msub></math>-n: beheko masek dardararen abiadura doitzen dute, ez ordea egonkortasunaren atalasea."
    },
    {
     "mota": "testua",
     "html": "Azkenik, adarkatzearen izaerak emaitza dotore bat ezkutatzen du. Malguki gogorrez (<math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><msub><mi>k</mi><mi>c</mi></msub></mrow></math>) guraize itxia babesten duen energia-langa <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>θ</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da; <math display=\"inline\"><mi>V</mi></math>-ren adierazpen trinkoa (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>-rekin, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>4</mn><mi>M</mi><mi>g</mi><mi>a</mi><mspace width=\"0.167em\"></mspace><mi>u</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) erabiliz, <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>θ</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo>−</mo><mi>M</mi><mi>g</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mi>k</mi></mfrac><mo>=</mo><mn>2</mn><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mi>λ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Langa <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mi>c</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></math> bezala itzaltzen da <math display=\"inline\"><msub><mi>k</mi><mi>c</mi></msub></math>-n, maiztasuna <math display=\"inline\"><msqrt><mrow><mi>k</mi><mo>−</mo><msub><mi>k</mi><mi>c</mi></msub></mrow></msqrt></math> bezala itzaltzen den bitartean: biak batera desagertzen dira atalasean. Are gehiago, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><msub><mi>k</mi><mi>c</mi></msub></mrow></math>-n bertan potentziala kuartikoa da eta ez koadratikoa; izan ere, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>4</mn><mi>M</mi><mi>g</mi><mi>a</mi><mo>−</mo><mn>2</mn><mi>M</mi><mi>g</mi><mi>a</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> denez atalasean, <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>4</mn><mi>M</mi><mi>g</mi><mi>a</mi><mo>−</mo><mfrac><mrow><mi>M</mi><mi>g</mi><mi>a</mi></mrow><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><msup><mi>θ</mi><mn>4</mn></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>=</mo><msub><mi>k</mi><mi>c</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> kuartiko alderantzikatua: <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> ezegonkorra da doi-doi <math display=\"inline\"><msub><mi>k</mi><mi>c</mi></msub></math>-n ere. Horrek esan nahi du adarkatzea <strong>azpikritikoa</strong> dela —Euler-en makurdura klasikoa, aldiz, superkritikoa da—: ez dago tarteko oreka makurtu egonkorrik. Ondorioz, malgukia <math display=\"inline\"><msub><mi>k</mi><mi>c</mi></msub></math> azpira ahultzean, guraizeak ez du pixkanaka makurtzen hasten; <math display=\"inline\"><msub><mi>k</mi><mi>c</mi></msub></math>-raino zurrun eusten dio itxiari eta gero <strong>kolpean</strong> zabaltzen da erabat. Hau da problemaren joya: beheko masek modua eta erorketaren erritmoa doitzen dituzte, baina atalasea (<math display=\"inline\"><mrow><msub><mi>k</mi><mi>c</mi></msub><mo>=</mo><mi>M</mi><mi>g</mi><mi>/</mi><mi>a</mi></mrow></math>) eta makurdura-mota goiko masek bakarrik agintzen dituzte —estatika itsua da labaintzen diren masen aurrean, haien lotura-indarra bertikala baita eta ez baitu lanik egiten <math display=\"inline\"><mi>θ</mi></math>-ren gainean."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Abiadura konstantez laburtzen den pendulua"
    },
    {
     "mota": "testua",
     "html": "<em><math display=\"inline\"><mi>m</mi></math> masako pendulu bat <math display=\"inline\"><mi>O</mi></math> eraztun finko batetik zintzilik dago; sokaren goiko muturra gora\ntiratzen da, luzera <math display=\"inline\"><mi>u</mi></math> abiadura konstantez laburtuz, <math display=\"inline\"><mrow><mi>ℓ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>ℓ</mi><mn>0</mn></msub><mo>−</mo><mi>u</mi><mi>t</mi></mrow></math> eran (<math display=\"inline\"><mrow><mi>u</mi><mo>&gt;</mo><mn>0</mn></mrow></math>; hasieran\n<math display=\"inline\"><mrow><mi>ℓ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>ℓ</mi><mn>0</mn></msub></mrow></math>). Masa plano bertikalean kulunkatzen da, <math display=\"inline\"><mi>θ</mi></math> angeluarekin.<span class=\"j-oin\">[Hazia: Ecenarro,\n<em>Mecánica y Ondas: Problemas de Examen Resueltos y Comentados</em>, 97Jun02 (33. or.), non pendulu baten\nluzera abiadura konstantez aldatzen zen eta <math display=\"inline\"><mi>L</mi></math>, <math display=\"inline\"><mi>H</mi></math> eta higidura-ekuazioak eskatzen ziren (<math display=\"inline\"><mi>H</mi></math> eta <math display=\"inline\"><mi>E</mi></math>\nkontserbatzen ote diren galdetuz). Hemen tentsioaren bidezko energia-balantzea (<math display=\"inline\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>u</mi><mi>T</mi></mrow></math>), oszilazio\ntxikien maiztasun aldakorra eta inbariante adiabatikoaren bidezko anplitude-hazkundea erantsi zaizkio.]</span>\n<br>\n<strong>(a)</strong> Idatzi <math display=\"inline\"><mrow><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> lagrangearra eta lortu <math display=\"inline\"><mi>θ</mi></math>-ren higidura-ekuazioa; azaldu zergatik\nden sistema reonomoa. <strong>(b)</strong> Idatzi <math display=\"inline\"><mi>H</mi></math> hamiltondarra. <math display=\"inline\"><mi>H</mi></math> higidura-konstantea al da? Eta <math display=\"inline\"><mi>E</mi></math> energia\nmekanikoa? Lortu sokaren <math display=\"inline\"><mi>T</mi></math> tentsioa eta frogatu <math display=\"inline\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>u</mi><mi>T</mi></mrow></math>; interpretatu emaitza. <strong>(c)</strong> Oszilazio\ntxikietarako, laburtu problema maiztasun aldakorreko oszilatzaile baten ekuaziora eta identifikatu bere\n&quot;damping&quot;-aren zeinua. <strong>(d)</strong> Laburtze geldoaren limitean (<math display=\"inline\"><mrow><mi>u</mi><mo>≪</mo><msqrt><mrow><mi>g</mi><mi>ℓ</mi></mrow></msqrt></mrow></math>), <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">osz </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>/</mi><mi>ω</mi></mrow></math>\ninbariante adiabatikoa erabiliz, aurkitu nola aldatzen den <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">max</mtext></msub></math> anplitude angeluarra <math display=\"inline\"><mi>ℓ</mi></math> txikitu\nahala, eta alderatu kulunkaren zeharkako zabalerarekin. Aztertu <math display=\"inline\"><mrow><mi>u</mi><mo>→</mo><mn>0</mn></mrow></math> muga.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/11b68d7bb2ddf792.svg",
     "zabalera": 264
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>O</mi></math> eraztunetik pasatzen den soka gora jasotzen da <math display=\"inline\"><mi>u</mi></math> abiadura konstantez; penduluaren luzera <math display=\"inline\"><mrow><mi>ℓ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>ℓ</mi><mn>0</mn></msub><mo>−</mo><mi>u</mi><mi>t</mi></mrow></math> da (lotura reonomoa) eta <math display=\"inline\"><mi>θ</mi></math> bertikal beheranzkotik neurtzen da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Koordenatu orokortu bakarra <math display=\"inline\"><mi>θ</mi></math> da (bertikal beheranzkotik neurtua), zeren penduluaren luzera ez baita askatasun-gradu bat: kanpoko mekanismo batek <math display=\"inline\"><mrow><mi>ℓ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>ℓ</mi><mn>0</mn></msub><mo>−</mo><mi>u</mi><mi>t</mi></mrow></math> balio finkora behartzen du, non <math display=\"inline\"><mrow><mi>u</mi><mo>&gt;</mo><mn>0</mn></mrow></math> laburtze-abiadura konstantea den. Lotura hori denboraren menpekoa da esplizituki —sistema reonomoa da—, eta hortxe datza problemaren mami guztia. Masaren posizioa koordenatu polarretan idatzita, <math display=\"inline\"><mrow><mover><mi>ℓ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>u</mi></mrow></math> izanik, bere abiaduraren karratua <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> da. Lagrangearra, beraz: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><mi>g</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> <math display=\"inline\"><msup><mi>u</mi><mn>2</mn></msup></math> gaia konstantea da (ez du dinamikan eragiten), baina <math display=\"inline\"><mrow><mi>ℓ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren denbora-menpekotasunak <math display=\"inline\"><mi>t</mi></math> esplizituki sartzen du <math display=\"inline\"><mi>L</mi></math>-n. Euler-Lagrange ekuazioak, <math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><mi>g</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>, higidura-ekuazioa ematen du: <math display=\"block\"><mrow><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mover><mi>ℓ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mn>2</mn><mi>u</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Koefiziente aldakorreko ekuazio ez-lineala da; ez dugu ebatziko, baina bere egiturak esango digu ondorengo guztia."
    },
    {
     "mota": "testua",
     "html": "Momentu kanonikoa <math display=\"inline\"><mrow><msub><mi>p</mi><mi>θ</mi></msub><mo>=</mo><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> da, eta hamiltondarra <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><msub><mi>p</mi><mi>θ</mi></msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>L</mi></mrow></math> eraikitzean: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>u</mi><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> Bi galdera funtsezko. Lehena: <math display=\"inline\"><mi>H</mi></math> higidura-konstantea al da? Ez, <math display=\"inline\"><mrow><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>≠</mo><mn>0</mn></mrow></math> baita; zuzenean, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>H</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mi>u</mi><mspace width=\"0.167em\"></mspace><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mi>ℓ</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math> Bigarrena: eta <math display=\"inline\"><mi>E</mi></math> energia mekanikoa? Kasu honetan <math display=\"inline\"><mi>T</mi></math> energia zinetikoa ez da <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>-ren forma koadratiko homogeneoa —<math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>u</mi><mn>2</mn></msup></mrow></math> gaia <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>-rekiko independentea da—, eta horrek <math display=\"inline\"><mrow><mi>H</mi><mo>≠</mo><mi>E</mi></mrow></math> dakar. Zehazki, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mi>g</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> denez, <math display=\"block\"><mrow><mi>E</mi><mo>−</mo><mi>H</mi><mo>=</mo><mi>m</mi><msup><mi>u</mi><mn>2</mn></msup><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea</mtext></mrow><mo>,</mo></mrow></math> beraz <math display=\"inline\"><mi>E</mi></math>-ren eta <math display=\"inline\"><mi>H</mi></math>-ren aldaketa-tasa berdina da eta <math display=\"inline\"><mi>E</mi></math> ere ez da kontserbatzen. Hori seinalatzea ohikoa da; harago joan gaitezke, ordea, eta <math display=\"inline\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math> hori zerk elikatzen duen zehaztu. Norabide erradialean Newtonen ekuazioak —<math display=\"inline\"><mrow><mover><mi>ℓ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math> delarik— sokaren <math display=\"inline\"><mi>T</mi></math> tentsioa ematen digu: <math display=\"block\"><mrow><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>ℓ</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>ℓ</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mi>T</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mi>ℓ</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Konparaketa berehalakoa da: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>E</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>u</mi><mspace width=\"0.167em\"></mspace><mi>T</mi><mi>.</mi></mrow></math> Emaitza gardena da: energiaren irabazi-tasa sokaren tentsioa bider laburtze-abiadura da, hots, mekanismoak soka barrurantz tiratzean garatzen duen potentzia. Horra hor zergatik ez den energia kontserbatzen —eta zenbat—: ez da misterio bat, kanpoko agentearen lana baizik. (<math display=\"inline\"><mrow><mi>u</mi><mo>→</mo><mn>0</mn></mrow></math> eginda, <math display=\"inline\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>→</mo><mn>0</mn></mrow></math> eta pendulu arruntaren energia-kontserbazioa berreskuratzen da.)"
    },
    {
     "mota": "testua",
     "html": "Sakon dezagun higidura bera. Oszilazio txikietarako (<math display=\"inline\"><mrow><mi>θ</mi><mo>≪</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>θ</mi></mrow></math>), higidura-ekuazioa honela geratzen da: <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mfrac><mrow><mn>2</mn><mi>u</mi></mrow><mi>ℓ</mi></mfrac><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><mi>g</mi><mi>ℓ</mi></mfrac><mi>θ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Bi ezaugarri nabarmen. Bata: bere buruko maiztasuna <math display=\"inline\"><mrow><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>ℓ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mrow></math> da, denborarekin handituz doana <math display=\"inline\"><mi>ℓ</mi></math> txikitu ahala. Bestea: lehen deribatuaren gaiaren zeinua negatiboa da (<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>u</mi><mi>/</mi><mi>ℓ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>), marruskadura-antzeko gai bat baina alderantzizko zeinuarekin —&quot;damping negatiboa&quot;—: oszilazioak ez dira itzaltzen, hazi egiten dira. Hori bat dator aurreko <math display=\"inline\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>-rekin: mekanismoak etengabe injektatzen du energia oszilazioan."
    },
    {
     "mota": "testua",
     "html": "Zenbat hazten dira, zehazki? Laburtze-abiadura maiztasunaren aldean geldoa denean (<math display=\"inline\"><mrow><mi>u</mi><mo>≪</mo><msqrt><mrow><mi>g</mi><mi>ℓ</mi></mrow></msqrt></mrow></math>, hots <math display=\"inline\"><mrow><mi>ℓ</mi><mo>≫</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><mi>g</mi></mrow></math>), oszilatzaile baten parametroak astiro aldatzean kontserbatzen den magnitudea balia dezakegu: <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">osz </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>/</mi><mi>ω</mi></mrow></math> inbariante adiabatikoa. Uneko oszilatzailea <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><mtext mathvariant=\"normal\">ef </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup></mrow></math> masa eraginkorreko eta <math display=\"inline\"><mrow><mi>κ</mi><mo>=</mo><mi>m</mi><mi>g</mi><mi>ℓ</mi></mrow></math> zurruntasuneko higidura harmoniko sinplea da (<math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mi>κ</mi><mi>/</mi><msub><mi>M</mi><mtext mathvariant=\"normal\">ef</mtext></msub></mrow></msqrt><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>ℓ</mi></mrow></msqrt></mrow></math>), eta bere energia <math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">osz </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>κ</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>θ</mi><mtext mathvariant=\"normal\">max</mtext><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>ℓ</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>θ</mi><mtext mathvariant=\"normal\">max</mtext><mn>2</mn></msubsup></mrow></math>. Beraz: <math display=\"block\"><mrow><mi>J</mi><mo>=</mo><mfrac><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">osz </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>ω</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msqrt><mi>g</mi></msqrt><mspace width=\"0.167em\"></mspace><msup><mi>ℓ</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mspace width=\"0.167em\"></mspace><msubsup><mi>θ</mi><mtext mathvariant=\"normal\">max</mtext><mn>2</mn></msubsup><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>∝</mo><msup><mi>ℓ</mi><mrow><mi>−</mi><mn>3</mn><mi>/</mi><mn>4</mn></mrow></msup><mi>.</mi></mrow></math> Hementxe dago problemaren joya. <math display=\"inline\"><mrow><mi>ℓ</mi><mo>→</mo><mn>0</mn></mrow></math> doanean anplitude angeluarra <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>∝</mo><msup><mi>ℓ</mi><mrow><mi>−</mi><mn>3</mn><mi>/</mi><mn>4</mn></mrow></msup></mrow></math> bezala dibergitzen da —pendulua gero eta angelu zabalagoan kulunkatzen da—; aldiz, kulunkaren zeharkako zabalera fisikoa (arku-erdi-anplitudea) <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>ℓ</mi><mspace width=\"0.167em\"></mspace><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>∝</mo><msup><mi>ℓ</mi><mrow><mn>1</mn><mi>/</mi><mn>4</mn></mrow></msup></mrow></math> da, hots, gero eta ESTUAGOA. Bi joerak batera: soka jaso ahala, angelua zabaltzen da baina kulunka-tartea uzkurtu. Eta oszilazio-energia <math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">osz </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>ℓ</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>θ</mi><mtext mathvariant=\"normal\">max</mtext><mn>2</mn></msubsup><mo>∝</mo><msup><mi>ℓ</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> bezala hazten da —<math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">osz </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>∝</mo><mi>ω</mi></mrow></math>—, (b) atalean neurtutako potentziak elikatuta. Pendulu-luzera geldo aldatzearen emaitza klasikoa da hau (Landau)."
    },
    {
     "mota": "testua",
     "html": "Azkenik, muga-kasuak. <math display=\"inline\"><mrow><mi>u</mi><mo>→</mo><mn>0</mn></mrow></math> eginda, <math display=\"inline\"><mrow><mi>ℓ</mi><mo>=</mo><msub><mi>ℓ</mi><mn>0</mn></msub></mrow></math> finkoa da, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><msub><mi>ℓ</mi><mn>0</mn></msub></mrow></msqrt></mrow></math> konstantea, <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">max</mtext></msub></math> konstantea eta <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>E</mi></mrow></math> (biak kontserbatuak): pendulu arrunta berreskuratzen da. Beste muturrean, <math display=\"inline\"><mrow><mi>ℓ</mi><mo>≈</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><mi>g</mi></mrow></math> inguruan hurbilketa adiabatikoak huts egiten du (eta angelu txikiaren hipotesiak ere bai); beraz <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>∝</mo><msup><mi>ℓ</mi><mrow><mi>−</mi><mn>3</mn><mi>/</mi><mn>4</mn></mrow></msup></mrow></math> legeak ez du literalki infinitura eramaten, baina joera —soka jaso ahala kulunka gero eta biziagoa— fidagarria da tarte adiabatiko osoan. Soka guztiz jasotzeko denbora <math display=\"inline\"><mrow><msub><mi>t</mi><mo>*</mo></msub><mo>=</mo><msub><mi>ℓ</mi><mn>0</mn></msub><mi>/</mi><mi>u</mi></mrow></math> da. Sistema reonomo honek, hortaz, hiru irakaspen biltzen ditu: <math display=\"inline\"><mrow><mi>H</mi><mo>≠</mo><mi>E</mi></mrow></math> lotura denbora-menpekoetan, ez-kontserbazioaren jatorri mekaniko zehatza (<math display=\"inline\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>u</mi><mi>T</mi></mrow></math>), eta parametro geldoen azpian agertzen den inbariante adiabatikoaren indarra."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Enuntziatua"
    },
    {
     "mota": "testua",
     "html": ""
    },
    {
     "mota": "testua",
     "html": "<strong>00Feb01</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>m</mi></math> masako eta <math display=\"inline\"><mi>l</mi></math> luzerako hagaxka baten muturrak marruskadurarik gabeko lur horizontal baten gainean eta, era berean, marruskadurarik gabeko horma bertikal baten kontra daude eutsita, hasieran honekin <math display=\"inline\"><msub><mi>θ</mi><mn>0</mn></msub></math> angelua osatuz. Hagaxka grabitatearen eraginpean utzita, erortzen hasten da, plano bertikala gordez. a) Idatzi lagrangear eta hamiltondar funtzioak. b) Lortu higidura-ekuazioak eta higidura-konstanteak (baldin badago). c) Kalkulatu <math display=\"inline\"><mi>θ</mi></math> angelua, horma bertikalean eutsita dagoen hagaxkaren muturrak horma hori uzten duen angelua."
    },
    {
     "mota": "testua",
     "html": "<em>(Irudia: <math display=\"inline\"><mi>z</mi></math> ardatza bertikala eta <math display=\"inline\"><mi>x</mi></math> ardatza horizontala.\nHagaxka, bere goiko muturra A horma bertikalean eta beheko muturra B\nlurrean eutsita, bere hasierako posizioan —eten-marraz— marrazten\nda, hormarekin <math display=\"inline\"><msub><mi>θ</mi><mn>0</mn></msub></math> angelua osatuz, eta edozein unetan —marra\njarraitua— hormarekin <math display=\"inline\"><mi>θ</mi></math> angelua osatuz. G masa-zentroa da;\nhagaxkan <math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mspace width=\"0.167em\"></mspace><mi>l</mi></mrow></math> idazten da.)</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ebazpena (egileak ebatzita eta iruzkinduta)"
    },
    {
     "mota": "testua",
     "html": ""
    },
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "Irudian hasierako posizioa eta edozein uneko posizioa erakusten dira, hagaxkaren eta hormaren arteko angelua <math display=\"inline\"><mi>θ</mi></math> denean. Hagaxkak hormarekin kontaktua mantentzen duen bitartean bere posizioa definitzen duen koordenatu orokortu bakarra <math display=\"inline\"><mi>θ</mi></math> da. G masa-zentroaren posizioaren eta abiaduraren osagaiak honako adierazpenek emango dituzte:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">{</mo><mi>x</mi><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>z</mi><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">{</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mfrac><mrow><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Hagaxkaren energia zinetikoa honela adieraz daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>G</mi></msub><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "izan ere, <math display=\"inline\"><mrow><msub><mi>I</mi><mi>G</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></math>. Energia potentziala <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>m</mi><mi>g</mi><msub><mi>z</mi><mi>G</mi></msub></mrow></math> denez, lagrangear funtzioa honela idatz daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>H</mi></math> hamiltondar funtzioa lortzeko, koordenatu orokortu bakarraren momentu konjugatua behar dugu aldez aurretik. Hau izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>p</mi><mi>θ</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mn>3</mn><msub><mi>p</mi><mi>θ</mi></msub></mrow><mrow><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "beraz, <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>p</mi><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>−</mo><mi>L</mi></mrow></math> honela izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>H</mi><mo>=</mo><msub><mi>p</mi><mi>θ</mi></msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>L</mi><mo>=</mo><mfrac><mrow><mn>3</mn><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Balio hori zuzenean lortu ahal izango genukeen kontuan hartu izan bagenu sistema kontserbatzailea dela eta transformazio-ekuazioek ez dutela denbora esplizituki barne hartzen. Baldintza horietan, hamiltondar funtzioa energia osoarekin <math display=\"inline\"><mi>E</mi></math> bat dator, hain zuzen ere idatzi berri dugun adierazpena dena, baina <math display=\"inline\"><msub><mi>p</mi><mi>θ</mi></msub></math>-ren funtzioan idatzia <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>-ren funtzioan beharrean. Teoriaren arabera, <math display=\"inline\"><mi>H</mi></math> funtzioa higidura-konstante bat da, eta bere balioa sistemaren energia mekanikoa da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mi>E</mi><mo>=</mo><msub><mi>p</mi><mi>θ</mi></msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>L</mi><mo>=</mo><mfrac><mrow><mn>3</mn><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Erabil dezagun formalismo lagrangearra higidura-ekuazio bakarra lortzeko:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">{</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "eta sinplifikatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mrow><mn>2</mn><mi>l</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ekuazio diferentziala, zeinaren integrazioak (<math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>-rekin biderkatu ondoren eta hasierako baldintzak kontuan harturik: <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo>→</mo><mi>θ</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>) hona garamatzan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mi>l</mi></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "adierazpen horretara modu zuzenagoan iritsi ahal izango ginatekeen goian aipatutako energiaren kontserbazio-printzipioa erabili izan bagenu."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>θ</mi></math>-ren balioa kalkulatzeko, hagaxka ezkerreko hormatik askatzen den angelua, hainbat metodo jarrai ditzakegu. Horietako bat"
    },
    {
     "mota": "testua",
     "html": "<em>Lagrangeren biderkatzaile indeterminatuena</em>"
    },
    {
     "mota": "testua",
     "html": "da. Beste bat, kasu honetan sinpleagoa, Newtonen metodo zuzena da. Hagaxkaren higidura aztertzen badugu, bere gainean eragiten duten indarren erlazioa, G masa-zentroaren higidura <math display=\"inline\"><mi>x</mi></math> ardatzaren zehar horma bertikalak A puntuan hagaxkan eragindako erreakzio-indar normalak sortzen du soilik. <math display=\"inline\"><mi>N</mi></math> deitzen badiogu erreakzio-indar horri eta Newtonen bigarren legea aplikatzen badugu <math display=\"inline\"><mi>x</mi></math> ardatz honen zeharreko higidurarako, honela idatziko dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>N</mi><mo>=</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>l</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover></math> <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math>-tik lortu dugun eta <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover></math> eta <math display=\"inline\"><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></math> goian idatzitako <math display=\"inline\"><mi>θ</mi></math> eta <math display=\"inline\"><msub><mi>θ</mi><mn>0</mn></msub></math>-ren funtzioetan dauden balioengatik ordezkatu ditugun. Hagaxka horma bertikaletik askatuko da erreakzio-indar normala nulua denean, hau da, <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>0</mn></mrow></math> denean, eta horrek hona garamatza:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>θ</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Momentu kanoniko konjugatuak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Definizioz, <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> koordenatu orokortuari dagokion momentu kanoniko konjugatua honako hau da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>p</mi><mi>i</mi></msub><mo>≡</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu <math display=\"inline\"><mrow><msub><mi>p</mi><mi>i</mi></msub><msub><mi>q</mi><mi>i</mi></msub></mrow></math> biderkaduraren dimentsioak ekintzarenak direla: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mi>i</mi></msub><msub><mi>q</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Plano aldapatsu higikorra"
    },
    {
     "mota": "testua",
     "html": "6.7 irudiko sistemaren kasuan hauexek ditugu (6.112) lagrangearretik lortzen diren momentu kanonikoak: <math display=\"block\"><mrow><msub><mi>p</mi><mi>r</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>p</mi><mi>s</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>+</mo><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Momentu linealaren dimentsioak dituzte hauek; baina, (F.22) gogoratuz, pendulu matematikoaren momentu kanonikoa momentu angeluarra dela ikusten dugu: <math display=\"block\"><mrow><mi>p</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Horrexegatik momentu hauek, koordenatuak bezala, «orokortuak» dira: edonolakoak izan daitezke dimentsioen aldetik."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Koordenatu ziklikoak eta kontserbazio-printzipioak"
    },
    {
     "mota": "testua",
     "html": "Momentu kanonikoen definizioarekin, Lagrangeren ekuazioak <math display=\"block\"><mrow><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eran idazten dira. Bestalde, <math display=\"inline\"><msub><mi>q</mi><mi>j</mi></msub></math> koordenatu orokortua <strong>ziklikoa</strong> edo <strong>ahanzgarria</strong> dela esan dugu lagrangearrean esplizituki agertzen ez bada: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Definizio hau eta (6.119) erabiliz, kontserbazio-printzipio bat frogatu dugu:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "hau da, <em>koordenatu zikliko bati dagokion momentu kanoniko konjugatua higidura-konstantea da</em>. Emaitza honek simetrien eta kontserbazio-legeen arteko erlazio estua dagoela frogatzen du. Izan ere, koordenatu bat aldatzean lagrangearra ez dela aldatzen adierazten du koordenatua ziklikoa izateak. Halako simetria bat dugu kasu horretan eta, ondorioz, dagokion kontserbazio-lege bat (ikus 6.118 problema). <br> Ikus dezagun adibide batzuetan momentu kanonikoen eta kontserbazio-printzipio honen esanahia."
    },
    {
     "mota": "testua",
     "html": "Loturarik gabeko partikula koordenatu kartesiarretan"
    },
    {
     "mota": "testua",
     "html": "Eman dezagun partikula bat <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> potentzialean higitzen dela: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Definizioa aplikatuz, momentu kanonikoak momentu linealaren osagaiak direla ikusten dugu: <math display=\"block\"><mrow><msub><mi>p</mi><mi>x</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>p</mi><mi>y</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mi>m</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>p</mi><mi>z</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mi>m</mi><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Eman dezagun orain gure problemak <math display=\"inline\"><mi>x</mi></math> ardatzaren norabidean egindako translazioekiko simetria duela, hau da, <math display=\"inline\"><mi>x</mi></math> abzisaren balio guztietarako gauza bera dugula eta, beraz, <math display=\"inline\"><mi>L</mi></math> ez dela aldatzen <math display=\"inline\"><mi>x</mi></math>  aldatzean: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Kasu horretan, <math display=\"inline\"><msub><mi>p</mi><mi>x</mi></msub></math> higidura-konstantea da. Mekanika newtondarrean emaitza bera lortzen da norabide horretan indarrak duen proiekzioa nulua baita: <math display=\"block\"><mrow><msub><mi>F</mi><mi>x</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Translazio-simetria bati, momentu linealaren osagai baten kontserbazioa dagokiola ikusten dugu."
    },
    {
     "mota": "testua",
     "html": "Loturarik gabeko partikula koordenatu zilindrikoetan"
    },
    {
     "mota": "testua",
     "html": "Aurreko partikula koordenatu zilindrikoetan aztertzen badugu, lagrangearra hauxe izango da: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ρ</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Definizioa aplikatuz, momentu kanonikoetako bi, momentu linealaren osagaiak izan arren, hirugarrena momentu angeluarraren osagaia dela ikusten dugu: <math display=\"block\"><mrow><msub><mi>p</mi><mi>ρ</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mi>m</mi><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>p</mi><mi>φ</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mi>m</mi><msup><mi>ρ</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>p</mi><mi>z</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mi>m</mi><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Gure problemak <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatzaren inguruko biraketekiko simetria badu, hau da, <math display=\"inline\"><mi>φ</mi></math> angeluaren balio guztiak baliokideak badira, <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"inline\"><msub><mi>p</mi><mi>φ</mi></msub></math> kontserbatu egiten da. Mekanika newtondarrean emaitza bera lortzen da aipaturiko norabidean indar-momentuak duen proiekzioa zero baita: <math display=\"block\"><mrow><msub><mi>Q</mi><mi>φ</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>z</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> (Adierazpen hau ulertzeko (D.34) eta (D.40) erabili behar dira.) Biraketa-simetria bati, momentu angeluarraren osagai baten kontserbazioa dagokio."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aztertu adibide hau koordenatu esferikoetan."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Plano aldapatsu higikorra"
    },
    {
     "mota": "testua",
     "html": "6.7 irudiko sistemaren kasuan, <math display=\"inline\"><mi>r</mi></math> ez da agertzen (6.112) lagrangearrean; beraz, (6.117) momentu kanoniko konjugatua, higidura-konstantea da. Abiaduren (6.108)–(6.109) adierazpenak gogoratuz, erraz ikusten da momentu kanoniko hau momentu lineal osoaren osagai horizontala dela: <math display=\"block\"><mrow><msub><mi>p</mi><mi>r</mi></msub><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>+</mo><mi>m</mi><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi></msub><mi>.</mi></mrow></math> Momentu hori ez da aldatzen higiduran zehar norabide horizontalean kanpo-indar osoa zero delako edo, nahiago bada, norabide horretan translazio-simetria dagoelako."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Indar zentralak</span>"
      },
      {
       "mota": "testua",
       "html": ". Aztertu koordenatu ziklikoei dagozkien kontserbazio-legeak indar zentralen menpeko higiduran. (Ikus 6.12 ariketa.)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu koordenatu ziklikoak eta dagozkien kontserbazio-legeak pendulu esferikoaren kasuan."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Momentu linealaren eta angeluarraren kontserbazio-printzipioen orokorpenak aztertu ditugu atal honetan. Energia mekanikoari dagokiona ikusteko, magnitude berri bat definitu beharko dugu."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Malgukiz lotutako partikula hodi birakari askean"
    },
    {
     "mota": "testua",
     "html": "<em>Plano horizontal batean, <math display=\"inline\"><mi>O</mi></math> puntu finkotik igarotzen den ardatz bertikal baten inguruan\nmarruskadurarik gabe bira dezakeen hodi zuzen zurrun bat dago; hodiak, biratzen den euskarri osoarekin\nbatera, <math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math> inertzia-momentua du ardatz horrekiko. Hodiaren barnean <math display=\"inline\"><mi>m</mi></math> masako partikula bat labaintzen da\nmarruskadurarik gabe, <math display=\"inline\"><mi>k</mi></math> konstanteko eta berezko luzera nuluko malguki batez <math display=\"inline\"><mi>O</mi></math>-ra lotua (grabitatea\nplanoaren perpendikularra da: ez du eragiten). Hasieran hodiak <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> abiadura angeluarra du eta partikula\n<math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math> distantziara dago, hodiarekiko geldi.<span class=\"j-oin\">[Hazia: Ecenarro, <em>Mecánica y Ondas: Problemas de\nExamen Resueltos y Comentados</em>, 98Feb01 (1998ko otsaila), non hodi arina eta bere barneko barra libreki\nirristatzen ziren, momentu angeluarraren eta energiaren kontserbazioz aztertuta (partikulak infinitura ihes\negiten zuen). Hemen malguki lotzailea, hodiaren <math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math> inertzia finitua, oreka-analisia, modu erradiala,\norbitaren itxiera eta kasu bultzatuarekiko alderaketa erantsi zaizkio, &quot;ihes librea&quot; higidura lotu eta\noszilakor bihurtuz.]</span> <br>\n<strong>(a)</strong> Idatzi sistemaren lagrangearra <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> koordenatu orokortuetan, identifikatu koordenatu ziklikoa eta\nlortu bi higidura-konstanteak: <math display=\"inline\"><mi>O</mi></math>-rekiko momentu angeluarra <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math> eta energia <math display=\"inline\"><mi>E</mi></math>. <strong>(b)</strong> <math display=\"inline\"><mi>φ</mi></math> ezabatuz,\neraiki <math display=\"inline\"><mi>r</mi></math>-rako potentzial eragilea eta aurkitu orbita zirkularraren <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math> erradioa; frogatu bertan hodiaren\nabiadura angeluarra <math display=\"inline\"><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></math> dela zehazki. Zein baldintza bete behar du <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math>-k oreka hori finitua\nizateko, eta zer gertatzen zaio <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> orekari atalase hori gainditzean? <strong>(c)</strong> Kalkulatu <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math> inguruko\noszilazio erradial txikien maiztasuna. <strong>(d)</strong> JOYA: Aztertu partikularen ibilbidearen itxiera. Frogatu hodi\narinaren limitean (<math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>→</mo><mn>0</mn></mrow></math>) ibilbidea <math display=\"inline\"><mi>O</mi></math>-n zentratutako elipse itxia dela, eta <math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn></mrow></math> denean orbitak\nprezesionatu egiten duela; eman apside-angelua. <strong>(e)</strong> Alderatu motor batek <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Ω</mi></mrow></math> konstante\nmantenduko lukeen kasuarekin.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/9ae1a36785c021a7.svg",
     "zabalera": 412
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hodi birakaria goitik ikusita: <math display=\"inline\"><mi>m</mi></math> partikula <math display=\"inline\"><mi>k</mi></math> malgukiaz lotua dago <math display=\"inline\"><mi>O</mi></math> ardatzera; hodiak (birakariak) <math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math> inertzia-momentua du eta <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> abiaduraz biratzen da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bi koordenatu orokortu hartzen ditugu: <math display=\"inline\"><mi>r</mi></math>, partikularen distantzia <math display=\"inline\"><mi>O</mi></math> ardatzera (hodian neurtua), eta <math display=\"inline\"><mi>φ</mi></math>, hodiaren biraketa-angelua norabide finko batekiko. Partikularen abiaduraren karratua, osagai erradiala (<math display=\"inline\"><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></math>) eta biraketak eragindako tangentziala (<math display=\"inline\"><mrow><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>) elkarzutak direnez, <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> da. Hodiaren energia zinetikoa (<math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mn>0</mn></msub><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>) gehituz eta malgukiaren energia potentziala (<math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>) kenduz, lagrangearra hau da: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> <math display=\"inline\"><mi>φ</mi></math> ez da esplizituki agertzen: koordenatu ziklikoa da, eta dagokion momentu kanonikoa —ardatzarekiko momentu angeluar osoa— higidura-konstantea da: <math display=\"block\"><mrow><msub><mi>p</mi><mi>φ</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>L</mi><mi>z</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msubsup><mi>r</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math> Sistema naturala izanik eta denbora esplizituki agertzen ez denez, energia mekanikoa ere kontserbatzen da: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>L</mi><mi>z</mi></msub><msub><mi>ω</mi><mn>0</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msubsup><mi>r</mi><mn>0</mn><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math> Bi higidura-konstante horiek nahikoa dira problema ebazteko, hazian bezala; malgukiak, ordea, ihes librea higidura mugatu bihurtzen du."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> askatuz (<math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>L</mi><mi>z</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) eta energian ordezkatuz, <math display=\"inline\"><mi>r</mi></math>-rako dimentsio bakarreko problema baliokidea geratzen da: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Lehen gaia biraketaren gai zentrifugoa da (hemen <math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> inertzia osoarekin, ez <math display=\"inline\"><mrow><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> hutsarekin), eta bigarrena malgukiaren putzua. Higidura erradialaren ekuazioa <math display=\"inline\"><mrow><mi>m</mi><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>m</mi><mi>r</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>k</mi><mi>r</mi></mrow></math> da, azelerazio zentripetuaren eskakizuna eta malgukiaren indarra parez pare jartzen dituena. Orbita zirkularra (<math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mo>*</mo></msub></mrow></math>) <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>-ren minimoan gertatzen da; <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>d</mi><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>r</mi><mo>−</mo><mi>m</mi><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mi>r</mi><mi>/</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math> ezarrita: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mi>m</mi><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup></mrow><mi>k</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>=</mo><msub><mi>L</mi><mi>z</mi></msub><msqrt><mfrac><mi>m</mi><mi>k</mi></mfrac></msqrt><mi>.</mi></mrow></math> Ondorio dotorea berehalakoa da: orbita zirkularrean hodiaren abiadura angeluarra <math display=\"block\"><mrow><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo></msub><mo>=</mo><mfrac><msub><mi>L</mi><mi>z</mi></msub><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup></mrow></mfrac><mo>=</mo><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt></mrow></math> da zehazki, <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math>-ren, <math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math>-ren eta <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math>-ren guztiz independentea —malguki-masaren berezko maiztasuna—. Zentzu fisikoa gardena da: orbita zirkularra indar zentrifugoak (<math display=\"inline\"><mrow><mi>m</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi>r</mi></mrow></math>) eta malgukiak (<math display=\"inline\"><mrow><mi>k</mi><mi>r</mi></mrow></math>) orekatzen duten egoera da, <math display=\"inline\"><mrow><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mi>k</mi><mi>/</mi><mi>m</mi></mrow></math> ematen duena."
    },
    {
     "mota": "testua",
     "html": "Oreka finitu horrek baldintza bat eskatzen du: <math display=\"inline\"><mrow><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>=</mo><msub><mi>L</mi><mi>z</mi></msub><msqrt><mrow><mi>m</mi><mi>/</mi><mi>k</mi></mrow></msqrt><mo>−</mo><msub><mi>I</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn></mrow></math>, hots, <math display=\"inline\"><mrow><msub><mi>L</mi><mi>z</mi></msub><mo>&gt;</mo><msub><mi>L</mi><mi>c</mi></msub></mrow></math>, non <math display=\"inline\"><mrow><msub><mi>L</mi><mi>c</mi></msub><mo>=</mo><msub><mi>I</mi><mn>0</mn></msub><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> den. Atalase horren azpitik <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> da oreka bakarra —partikula ardatzean, malgukiak biraketari irabazten diolarik—. Izan ere, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> beti da <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>-ren puntu kritikoa, eta bertan bigarren deribatua <math display=\"inline\"><mrow><mi>k</mi><mo>−</mo><mi>m</mi><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mi>/</mi><msubsup><mi>I</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math> da: positiboa (<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> egonkorra) <math display=\"inline\"><mrow><msub><mi>L</mi><mi>z</mi></msub><mo>&lt;</mo><msub><mi>L</mi><mi>c</mi></msub></mrow></math> bada, negatiboa (ezegonkorra) <math display=\"inline\"><mrow><msub><mi>L</mi><mi>z</mi></msub><mo>&gt;</mo><msub><mi>L</mi><mi>c</mi></msub></mrow></math> bada. Beraz <math display=\"inline\"><mrow><msub><mi>L</mi><mi>z</mi></msub><mo>=</mo><msub><mi>L</mi><mi>c</mi></msub></mrow></math>-n adarkatze bat (pitchfork) gertatzen da: momentu angeluarrak atalasea gainditzean, zentroko oreka ezegonkortu eta erradio finituko oreka egonkor bat sortzen da. Nabarmentzekoa da kontrol-parametroa <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math> dela —higidura-konstante bat—, ez kanpotik ezarritako bultzada bat."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math> inguruko oszilazio txikietan, energia baliokidearen gai zinetikoa <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> denez, masa eragilea <math display=\"inline\"><mi>m</mi></math> da, eta <math display=\"inline\"><mrow><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>d</mi><mn>2</mn></msup><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>/</mi><mi>d</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>m</mi></mrow></math> orekan ebaluatuta. Bigarren deribatua kalkulatuz eta oreka-baldintza (<math display=\"inline\"><mrow><mi>m</mi><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mo>=</mo><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>) ordezkatuz, <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></mrow><mrow><mi>d</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>k</mi><mo>−</mo><mi>m</mi><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mfrac><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>−</mo><mn>3</mn><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><mi>k</mi><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup></mrow><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup></mrow></mfrac><mo>,</mo></mrow></math> zeina beti positiboa den: oreka beti egonkorra da. Partikulari dagokion inertzia-momentuaren zatikia <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> definituz (<math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>μ</mi><mo>&lt;</mo><mn>1</mn></mrow></math>), maiztasunak forma trinkoa hartzen du: <math display=\"block\"><mrow><msub><mi>ω</mi><mi>r</mi></msub><mo>=</mo><mn>2</mn><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><msqrt><mi>μ</mi></msqrt><mo>=</mo><mn>2</mn><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo></msub><msqrt><mi>μ</mi></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hemen dago emaitzarik dotoreena. Hodi arinaren limitean (<math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>→</mo><mn>0</mn></mrow></math>, beraz <math display=\"inline\"><mrow><mi>μ</mi><mo>→</mo><mn>1</mn></mrow></math>), oszilazio erradiala orbita-biraren maiztasunaren zehazki bikoitza da: <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>r</mi></msub><mo>=</mo><mn>2</mn><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo></msub></mrow></math>. <math display=\"inline\"><mrow><mn>2</mn><mo>:</mo><mn>1</mn></mrow></math> erlazio zehatzak orbita ixten du, eta partikulak <math display=\"inline\"><mi>O</mi></math>-n zentratutako elipse bat marrazten du (bira bakoitzeko bi perihelio eta bi afelio, <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>-ra bananduta). Ez da kasualitatea: <math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> denean sistema <math display=\"inline\"><mrow><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> potentzial zentraleko oszilatzaile isotropo hutsa da, eta Bertranden teoremaren arabera potentzial harmonikoak —eta Kepler-en <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math>-k soilik, beste inork ez— ixten ditu orbita mugatu guztiak. Hodiaren inertziak (<math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn></mrow></math>) itxiera hori hausten du: orduan gai zentrifugoa <math display=\"inline\"><mrow><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mi>/</mi><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da, ez <math display=\"inline\"><mrow><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mi>/</mi><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> hutsa, sistema jada ez da partikula bakarraren indar zentraleko problema baten baliokidea, eta Bertranden itxiera galtzen da. Perihelioaren eta hurrengo afelioaren artean <math display=\"inline\"><mi>φ</mi></math>-k egiten duen apside-angelua <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo></msub><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><msub><mi>ω</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da, hots, <math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mfrac><mi>π</mi><mrow><mn>2</mn><msqrt><mi>μ</mi></msqrt></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn></mrow></math>-n (<math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>) <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> da eta orbita ixten da; <math display=\"inline\"><mrow><mi>μ</mi><mo>&lt;</mo><mn>1</mn></mrow></math> denean <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>&gt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, eta elipseak biraketaren noranzkoan prezesionatzen du. Zenbat eta hodi astunagoa (<math display=\"inline\"><mi>μ</mi></math> txikiagoa), orduan eta prezesio biziagoa; muturreko limitean (<math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>→</mo><mi>∞</mi></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>→</mo><mn>0</mn></mrow></math>) <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>r</mi></msub><mo>→</mo><mn>0</mn></mrow></math>: hodiak ozta-ozta aldatzen du bere abiadura, partikulak bira asko ematen ditu arnasketa erradial geldo bakoitzeko, eta higidura ia-bultzatuaren mugara hurbiltzen da."
    },
    {
     "mota": "testua",
     "html": "Argigarria da kasu askea motorrez gidatutakoarekin alderatzea. Motor batek <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Ω</mi></mrow></math> konstante behartuko balu, <math display=\"inline\"><mi>φ</mi></math> ez litzateke koordenatu askea izango, eta energia ez litzateke kontserbatuko (motorrak lan egiten baitu). Orduan partikularen higidura erradiala potentzial eragile honek gobernatuko luke: <math display=\"block\"><mrow><msubsup><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext><mrow><mtext mathvariant=\"normal\">bult </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup><mo>,</mo></mrow></math> parabola soil bat. <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>&lt;</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> bada, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> egonkorra da eta partikulak zentroaren inguruan oszilatzen du; baina <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>&gt;</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> bada, parabola alderantzikatzen da, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> ezegonkor bihurtzen da eta partikulak esponentzialki ihes egiten du, oreka finiturik gabe: hondamen katastrofikoa <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> atalasean. Kasu askean hori ezinezkoa da: partikula kanporantz doanean, <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math> finkoa izanik, hodia moteldu egiten da (<math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>L</mi><mi>z</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> txikitzen baita) eta orekan abiadura beti <math display=\"inline\"><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></math>-ra egokitzen da. Bi higidura-konstantek (<math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math> eta <math display=\"inline\"><mi>E</mi></math>) higidura mugatzen dute eta beti oreka egonkor batera daramate —autoerregulazioa—; motorrak, energia mugagabea injektatuz, hausten du babes hori. Bata bultzatua, bestea askea: mekanika analitikoak zein garbi bereizten dituen adibide ederra."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Eraztun errodatzailea mahai gainean eta kontu ensartatua: zein momentu kontserbatzen den"
    },
    {
     "mota": "testua",
     "html": "<em><math display=\"inline\"><mi>M</mi></math> masako eta <math display=\"inline\"><mi>R</mi></math> erradioko eraztun homogeneo bat plano bertikal batean dago, mahai horizontal\nbaten gainean labaindu gabe errodatuz. <math display=\"inline\"><mi>m</mi></math> masako partikula bat (kontua) eraztunean ensartatuta dago eta\nmarruskadurarik gabe irrista daiteke haren gainean; bere posizioa <math display=\"inline\"><mi>φ</mi></math> angeluaz ematen da, eraztunaren\nbeheko puntutik neurtua.<span class=\"j-oin\">[Hazia: Ecenarro, <em>Mecánica y Ondas: Problemas de Examen Resueltos y\nComentados</em>, 99Jun01 (1999ko ekaina); jatorrizkoak bi higidura-konstante identifikatzea eta beheko puntuko\nabiadura kalkulatzea baino ez zituen eskatzen. Hemen <math display=\"inline\"><mrow><mi>M</mi><mo>,</mo><mi>m</mi><mo>,</mo><mi>R</mi></mrow></math> orokorrak mantenduta, eraztunaren posizioaren\nemaitza itxia, mahaiaren marruskadura-indarra eta oreka-inguruko oszilazio txikiak erantsi zaizkio.]</span> <br>\n<strong>(a)</strong> Idatzi sistemaren lagrangearra, askatasun-graduak zuzen bereiziz: eraztunaren errodadura-biraketa\n(<math display=\"inline\"><mi>θ</mi></math>, non <math display=\"inline\"><mrow><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>R</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>) eta kontuaren <math display=\"inline\"><mi>φ</mi></math> posizioa ez dira gauza bera. <strong>(b)</strong> Aurkitu bi\nhigidura-konstante. Horietako bat momentu lineal horizontala al da? Zergatik bai ala ez? <strong>(c)</strong> Kontua <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math>\nangeluan pausagunetik askatzen bada, aurkitu eraztunaren zentroaren <math display=\"inline\"><mi>X</mi></math> posizioa <math display=\"inline\"><mi>φ</mi></math>-ren funtzio esplizitu\ngisa (ekuazio diferentzialik ebatzi gabe), eta aldera ezazu masa-zentroaren argudio naif batek emango\nlukeenarekin. <strong>(d)</strong> Aurkitu mahaiak eraztunari egiten dion marruskadura-indar horizontala. <strong>(e)</strong> Aurkitu\nkontuaren oszilazio txikien maiztasuna beheko orekaren inguruan eta aztertu <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mi>∞</mi></mrow></math> limitea.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/eb00d8c6b4f2d1ea.svg",
     "zabalera": 358
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eraztuna mahaian labaindu gabe errodatzen da; kontua (<math display=\"inline\"><mi>m</mi></math>) marruskadurarik gabe irristatzen da haren gainean; <math display=\"inline\"><mi>φ</mi></math> beheko puntutik neurtzen da eta <math display=\"inline\"><mi>f</mi></math> mahaiaren marruskadura da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Sistemak bi askatasun-gradu ditu. Bata <math display=\"inline\"><mi>X</mi></math> da, eraztunaren zentroaren posizio horizontala. Labaindu gabeko errodadurak <math display=\"inline\"><mrow><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>R</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> lotura ezartzen du, non <math display=\"inline\"><mi>θ</mi></math> eraztunaren biraketa materiala den; lotura hori holonomoa eta integragarria denez, <math display=\"inline\"><mi>θ</mi></math> hasieratik ezaba dezakegu. Bestea <math display=\"inline\"><mi>φ</mi></math> da, kontuaren posizioa eraztunean. Funtsezkoa da ohartzea <math display=\"inline\"><mi>φ</mi></math> ez dagoela <math display=\"inline\"><mi>θ</mi></math>-rekin lotuta: kontua askatasunez irristatzen da, eta beraz bere angelua eraztunaren biraketa materialetik independentea da —hori da haziak azpimarratzen duen puntu sotila—. Eraztunaren energia zinetikoa translazioa gehi errodadura da; eraztun homogeneoaren inertzia-momentua bere ardatzaren inguruan <math display=\"inline\"><mrow><msub><mi>I</mi><mi>C</mi></msub><mo>=</mo><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> denez, <math display=\"block\"><mrow><msub><mi>T</mi><mrow><mtext mathvariant=\"normal\">er </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mi>/</mi><mi>R</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>M</mi><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>,</mo></mrow></math> hots, errodadurak eraztunaren inertzia eraginkorra bikoiztu egiten du. Kontuaren posizioa <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>X</mi><mo>+</mo><mi>R</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>R</mi><mo>−</mo><mi>R</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> da eta bere abiaduraren karratua <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mspace width=\"0.167em\"></mspace><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>. Lagrangearra, beraz: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>M</mi><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>R</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mspace width=\"0.167em\"></mspace><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>X</mi></math> koordenatua ziklikoa da (ez da esplizituki <math display=\"inline\"><mi>L</mi></math>-n agertzen); dagokion momentu kanonikoa higidura-konstantea da: <math display=\"block\"><mrow><msub><mi>p</mi><mi>X</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>M</mi><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte</mtext></mrow><mi>.</mi></mrow></math> Bigarren konstantea energia mekanikoa da: <math display=\"inline\"><mi>L</mi></math>-k ez du <math display=\"inline\"><mi>t</mi></math> esplizituki eta sistema naturala da, beraz <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi></mrow></math> kontserbatzen da. Baina —eta hau da galderaren gakoa— <math display=\"inline\"><msub><mi>p</mi><mi>X</mi></msub></math> <strong>ez da</strong> momentu lineal horizontala. Sistemaren momentu horizontal osoa <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mi>M</mi><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>m</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>p</mi><mi>X</mi></msub><mo>−</mo><mi>M</mi><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover></mrow></math> da, eta ez da kontserbatzen, <math display=\"inline\"><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover></math> denboran aldatu egiten baita. Arrazoi fisikoa: errodadura mantentzeko, mahaiak marruskadura-indar horizontal bat egiten du ukipen-puntuan, eta indar hori sistemarentzat kanpokoa da. Energia, ordea, kontserbatu egiten da: errodadura-marruskadura estatikoak ez du lanik egiten (ukipen-puntua uneoro geldi baitago) eta kontua leuna da. Hortaz, bi higidura-konstanteak <math display=\"inline\"><mi>E</mi></math> eta <math display=\"inline\"><msub><mi>p</mi><mi>X</mi></msub></math> dira, ez momentu lineala; <math display=\"inline\"><msub><mi>p</mi><mi>X</mi></msub></math>-k eraztunaren errodadura-momentu angeluarra ere biltzen du, eta horrek bereizten du momentu linealetik."
    },
    {
     "mota": "testua",
     "html": "Demagun kontua <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math> angeluan pausagunetik askatzen dela. Hasieran dena geldi dago, beraz <math display=\"inline\"><mrow><msub><mi>p</mi><mi>X</mi></msub><mo>=</mo><mn>0</mn></mrow></math>. Kontserbazio horrek <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>m</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>m</mi><mi>R</mi><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> ematen du, eta zuzenean integra daiteke —<math display=\"inline\"><mi>g</mi></math> agertu gabe, dinamikaren xehetasunik gabe—: <math display=\"block\"><mrow><mi>X</mi><mo>−</mo><msub><mi>X</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>m</mi><mi>R</mi></mrow><mrow><mn>2</mn><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>−</mo><mi mathvariant=\"normal\">sin</mi><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Emaitza itxi eta dotorea da: eraztunaren zentroaren posizioa kontuaren angeluaren funtzio esplizitua da, ez da ezer integratu behar. Alderatu dezagun masa-zentroaren argudio naif batekin. Norbaitek pentsa lezake, kanpoko indar horizontalik ez balego bezala, masa-zentro horizontala finko dagoela, hots <math display=\"inline\"><mrow><mi>M</mi><mi>X</mi><mo>+</mo><mi>m</mi><msub><mi>x</mi><mi>m</mi></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte</mtext></mrow></mrow></math>, zeinak <math display=\"inline\"><mrow><mi>X</mi><mo>−</mo><msub><mi>X</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>−</mo><mi mathvariant=\"normal\">sin</mi><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> emango lukeen. Baina hori <strong>okerra</strong> da: izendatzailea <math display=\"inline\"><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></math> izan beharrean <math display=\"inline\"><mrow><mn>2</mn><mi>M</mi><mo>+</mo><mi>m</mi></mrow></math> da. Aldearen jatorria errodadura-inertziak dakarren <math display=\"inline\"><mi>M</mi></math> gehigarria da eta, sakonago, mahaiaren marruskadurak masa-zentroa mugitzen duela erakusten du —horregatik ezin da masa-zentroaren kontserbazioa erabili—. Emaitzaz, eraztunak argudio naifak iragarritakoa baino <strong>gutxiago</strong> higitzen da."
    },
    {
     "mota": "testua",
     "html": "Marruskadura-indarra berreskura dezakegu orain. Norabide horizontalean, kanpoko indar bakarra mahaiaren marruskadura <math display=\"inline\"><mi>f</mi></math> da (grabitatea eta indar normala bertikalak dira), beraz <math display=\"inline\"><mrow><mover><mi>P</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>f</mi></mrow></math>. <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>p</mi><mi>X</mi></msub><mo>−</mo><mi>M</mi><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover></mrow></math> eta <math display=\"inline\"><msub><mi>p</mi><mi>X</mi></msub></math> konstantea direnez, <math display=\"block\"><mrow><mi>f</mi><mo>=</mo><mover><mi>P</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>M</mi><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mi>.</mi></mrow></math> Marruskadura eraztunaren zentroaren azelerazioaren proportzionala da, aurkako zentzuan. Egiaztapena: <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mn>0</mn></mrow></math> eginez gero eraztuna ez da higitzen (<math display=\"inline\"><mrow><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mo>→</mo><mn>0</mn></mrow></math>) eta <math display=\"inline\"><mrow><mi>f</mi><mo>→</mo><mn>0</mn></mrow></math>, espero bezala; eta <math display=\"inline\"><mi>m</mi></math> txikirako <math display=\"inline\"><mrow><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mo>∼</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>/</mi><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> denez, <math display=\"inline\"><mrow><mi>f</mi><mo>∼</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> finitua da <math display=\"inline\"><mi>M</mi></math> handitzean ere."
    },
    {
     "mota": "testua",
     "html": "Azkenik, oszilazio txikiak azter ditzagun beheko orekaren (<math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math>) inguruan. Berriro ere <math display=\"inline\"><mrow><msub><mi>p</mi><mi>X</mi></msub><mo>=</mo><mn>0</mn></mrow></math> hartuta, <math display=\"inline\"><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover></math> energiatik ezabatzen dugu eta <math display=\"inline\"><mi>φ</mi></math>-rako problema baliokide bat lortzen: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mfrac><mrow><mn>2</mn><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi></mrow><mrow><mn>2</mn><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math>-ren inguruan <math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>V</mi><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>R</mi><msup><mi>φ</mi><mn>2</mn></msup></mrow></math> direnez, higidura harmonikoa da, maiztasun honekin: <math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mfrac><mi>g</mi><mi>R</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mi>m</mi><mrow><mn>2</mn><mi>M</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>.</mi></mrow></math> Kontua eraztun finkoan baino <strong>azkarrago</strong> oszilatzen da —plano finkoko pendulu sinplea <math display=\"inline\"><msqrt><mrow><mi>g</mi><mi>/</mi><mi>R</mi></mrow></msqrt></math> litzateke—: errodadurak eragindako eraztunaren atzera-egiteak inertzia eraginkorra murrizten du, eta beraz maiztasuna handitu egiten da. Zuzenketaren <math display=\"inline\"><mrow><mi>m</mi><mi>/</mi><mn>2</mn><mi>M</mi></mrow></math> formako <math display=\"inline\"><mn>2</mn></math> faktorea errodaduraren sinadura da (eraztunaren inertzia eraginkorra <math display=\"inline\"><mrow><mn>2</mn><mi>M</mi></mrow></math> da, ez <math display=\"inline\"><mi>M</mi></math>). <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mi>∞</mi></mrow></math> limitean <math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>R</mi></mrow></msqrt></mrow></math> berreskuratzen da, eraztun finkoaren pendulua, eta atzera-egite guztiak desagertzen dira; <math display=\"inline\"><mrow><mi>m</mi><mi>/</mi><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math> limite berean <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ataleko eraztunaren desplazamendua ere zerora doa. Emaitza guztiek muga-kasu horretan bat egiten dute, sistemaren koherentziaren egiaztapen gisa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bi ale malgukiz kateatuak hari birakari batean"
    },
    {
     "mota": "testua",
     "html": "<em>Hari zuzen bat, masagabea, ardatz bertikal batekin <math display=\"inline\"><mi>β</mi></math> angelu finkoa osatuz, ardatz horren\ninguruan biratzen da motor batek eraginda, <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> abiadura angeluar konstantez; hariaren erpina, <math display=\"inline\"><mi>O</mi></math>,\nardatzaren gainean dago. <math display=\"inline\"><mi>m</mi></math> masako bi ale (bakoitza) hari zehar marruskadurarik gabe labain daitezke:\nlehen alea <math display=\"inline\"><mi>O</mi></math> erpinari lotua dago <math display=\"inline\"><mi>k</mi></math> konstanteko malguki batez, eta bigarrena lehenengoari <math display=\"inline\"><mi>k</mi></math>\nkonstanteko malguki berdin batez; bi malgukiek <math display=\"inline\"><msub><mi>ℓ</mi><mn>0</mn></msub></math> luzera naturala dute. Grabitatea (<math display=\"inline\"><mi>g</mi></math>) behera.\nIzan bitez <math display=\"inline\"><msub><mi>r</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>r</mi><mn>2</mn></msub></math> aleen <math display=\"inline\"><mi>O</mi></math>-rekiko distantziak hari zehar.<span class=\"j-oin\">[Hazia: Ecenarro,\n<em>Mecánica y Ondas: Problemas de Examen Resueltos y Comentados</em>, 96Set02 (Setiembre 1996), non ale\nbakar bat labaintzen zen <math display=\"inline\"><mrow><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-ko triangelu isoszele birakari baten hipotenusan, luzera naturalik\ngabeko malguki batez lotua, eta orbita zirkular egonkorraren erradioa baino ez zen eskatzen. Hemen bigarren\nalea eta bigarren malgukia erantsi dira, angelua eta luzera naturala sinbolo bihurtu, eta oreka <math display=\"inline\"><mo>→</mo></math>\negonkortasuna <math display=\"inline\"><mo>→</mo></math> modu normalak <math display=\"inline\"><mo>→</mo></math> motorraren energia-balantzea eskatu.]</span> <br>\n<strong>(a)</strong> Idatzi lagrangearra <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>,</mo><msub><mi>r</mi><mn>2</mn></msub></mrow></math> koordenatu orokortuekin, eta identifikatu hariaren biraketa behartuak\nsortzen duen potentzial eragilea. <strong>(b)</strong> Aurkitu orbita zirkularrei dagozkien oreka-distantziak <math display=\"inline\"><mrow><msubsup><mi>r</mi><mn>1</mn><mn>0</mn></msubsup><mo>,</mo><msubsup><mi>r</mi><mn>2</mn><mn>0</mn></msubsup></mrow></math>; zein <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>-tarterako dira finituak eta positiboak? <strong>(c)</strong> Linealizatu orekaren inguruan eta lortu\nerradio-oszilazioen bi modu normalen maiztasunak; frogatu <math display=\"inline\"><mrow><msubsup><mi>ω</mi><mo>±</mo><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mn>3</mn><mo>±</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>⋅</mo><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>−</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></math> dela, eta interpretatu urrezko proportzioaren agerpena. <strong>(d)</strong> Egonkortasuna\neta abiadura kritikoak: aurkitu zein <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>-tan bihurtzen den ezegonkorra orbita (modu biguna), frogatu bi\nmoduen biguntze-abiaduren arteko erlazioa urrezko proportzioaren karratua dela, eta <math display=\"inline\"><mrow><msubsup><mi>ω</mi><mo>+</mo><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>ω</mi><mo>−</mo><mn>2</mn></msubsup></mrow></math>\naldea <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>-rekiko independentea dela. <strong>(e)</strong> Energia-balantzea: frogatu Jacobiren energia-funtzioa\nkontserbatzen dela baina energia mekanikoa <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi></mrow></math> ez; kalkulatu motorrak <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> eusteko eman behar\nduen potentzia, eta erakutsi orbita egonkorrean zero dela baina oszilazioetan ez. Aztertu <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mn>0</mn></mrow></math> eta\n<math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> limiteak.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/24ef825ea4ab83c7.svg",
     "zabalera": 289
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Haria <math display=\"inline\"><mi>β</mi></math> angeluan <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> konstantez biratzen da; bi aleak <math display=\"inline\"><msub><mi>r</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>r</mi><mn>2</mn></msub></math> erradioetan labaintzen dira, bi malgukiz kateatuak. Marra etena: bigarren alearen orbita zirkularra."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>(a)</strong> Ale bakoitza ardatzetik <math display=\"inline\"><mrow><msub><mi>r</mi><mi>i</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> distantziara dago eta <math display=\"inline\"><mi>O</mi></math>-tik <math display=\"inline\"><mrow><msub><mi>r</mi><mi>i</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> beherago; biek hariaren azimut bera dute, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></math>. Hari zeharreko <math display=\"inline\"><msub><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></math> osagaia eta biraketak eragindako <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><msub><mi>r</mi><mi>i</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> osagaia elkarzutak direnez, <math display=\"inline\"><mrow><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup><mo>=</mo><msubsup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi><mn>2</mn></msubsup><mo>+</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>r</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math> da. Energia zinetikoa eta potentziala honela idazten dira: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>r</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>r</mi><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ℓ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ℓ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>1</mn></msub><mo>+</mo><msub><mi>r</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Biraketa behartua denez (<math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></math> inposatua), <math display=\"inline\"><mi>T</mi></math>-ren bigarren gaia abiaduretatik independentea da eta potentzial baten gisa jokatzen du. Lagrangearra <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi></mrow></math> delarik, aleen erradio-dinamika osoa potentzial eragile honek gobernatzen du, <math display=\"block\"><mrow><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ℓ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ℓ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>r</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>r</mi><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>1</mn></msub><mo>+</mo><msub><mi>r</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> zeinaren hirugarren gaia &quot;indar zentrifugoaren&quot; potentziala den (beti negatiboa, erradioarekin hazten dena). Coriolisen indarra hari zeharreko norabidean ez da proiektatzen —hariaren lotura-indarrak orekatzen du—, beraz ez da <math display=\"inline\"><msub><mi>r</mi><mi>i</mi></msub></math>-ren ekuazioetan sartzen. Idazkera arintzeko, definitu <math display=\"inline\"><mrow><mi>κ</mi><mo>≡</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></math> (zurruntasun zentrifugoa, <math display=\"inline\"><mi>k</mi></math>-ren dimentsio berekoa) eta <math display=\"inline\"><mrow><mi>G</mi><mo>≡</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> (hari zeharreko grabitate-osagaia)."
    },
    {
     "mota": "testua",
     "html": "<strong>(b)</strong> Orbita zirkularra (<math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>,</mo><msub><mi>r</mi><mn>2</mn></msub></mrow></math> konstante) <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>-en gradientea anulatzean lortzen da: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mi>κ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><mi>k</mi><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>G</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo>−</mo><mi>k</mi><msub><mi>r</mi><mn>1</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>κ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>G</mi><mo>+</mo><mi>k</mi><msub><mi>ℓ</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math> Sistema honen matrizea <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑲</mi><mo>−</mo><mi>κ</mi><mi mathvariant=\"bold-italic\">𝑰</mi></mrow></math> da, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑲</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanik, eta determinantea <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mi>κ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>κ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>k</mi><mn>2</mn></msup><mo>=</mo><msup><mi>κ</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>k</mi><mi>κ</mi><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup></mrow></math>. Ebazpena: <math display=\"block\"><mrow><msubsup><mi>r</mi><mn>1</mn><mn>0</mn></msubsup><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mi>κ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>G</mi><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><msub><mi>ℓ</mi><mn>0</mn></msub></mrow><mi>D</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msubsup><mi>r</mi><mn>2</mn><mn>0</mn></msubsup><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>k</mi><mo>−</mo><mi>κ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>G</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mi>κ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>ℓ</mi><mn>0</mn></msub></mrow><mi>D</mi></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math> egiten duten balioak <math display=\"inline\"><mrow><mi>κ</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>±</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><mi>k</mi></mrow></math> dira. Erradioak finitu eta positibo dira <math display=\"inline\"><mrow><mi>κ</mi><mo>&lt;</mo><mfrac><mrow><mn>3</mn><mo>−</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><mi>k</mi></mrow></math> bitartean; muga horretara hurbiltzean <math display=\"inline\"><mrow><mi>D</mi><mo>→</mo><msup><mn>0</mn><mo>+</mo></msup></mrow></math> eta erradioak infiniturantz doaz (orbita erpinetik urruntzen da, mugarik gabe). Baldintza, beraz, <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>&lt;</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub><mo>≡</mo><mfrac><mn>1</mn><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></mfrac><msqrt><mrow><mfrac><mrow><mn>3</mn><mo>−</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>⋅</mo><mfrac><mi>k</mi><mi>m</mi></mfrac></mrow></msqrt><mi>.</mi></mrow></math> Egiaztapena: <math display=\"inline\"><mrow><mi>κ</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>ℓ</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> eginda, <math display=\"inline\"><mrow><msubsup><mi>r</mi><mn>1</mn><mn>0</mn></msubsup><mo>=</mo><mn>2</mn><mi>G</mi><mi>/</mi><mi>k</mi></mrow></math> eta <math display=\"inline\"><mrow><msubsup><mi>r</mi><mn>2</mn><mn>0</mn></msubsup><mo>=</mo><mn>3</mn><mi>G</mi><mi>/</mi><mi>k</mi></mrow></math> —malguki bakoitzak azpian dituen aleen pisu-osagaia eusten duen kate estatiko arrunta."
    },
    {
     "mota": "testua",
     "html": "<strong>(c)</strong> <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math> zehazki koadratikoa denez <math display=\"inline\"><msub><mi>r</mi><mi>i</mi></msub></math>-etan, bere Hessiar-matrizea (zurruntasun-matrizea) konstantea da —posizioaz, <math display=\"inline\"><mi>G</mi></math>-z eta <math display=\"inline\"><msub><mi>ℓ</mi><mn>0</mn></msub></math>-z independentea—: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑲</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi mathvariant=\"bold-italic\">𝑲</mi><mo>−</mo><mi>κ</mi><mi mathvariant=\"bold-italic\">𝑰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>k</mi><mo>−</mo><mi>κ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi><mo>−</mo><mi>κ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Energia zinetikoak gurutze-gairik ez duenez, masa-matrizea <math display=\"inline\"><mrow><mi>m</mi><mi mathvariant=\"bold-italic\">𝑰</mi></mrow></math> da, eta modu normalak <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝑲</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑰</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>-tik datoz. <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑲</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>-en balio propioak <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑲</mi></math>-renak ken <math display=\"inline\"><mi>κ</mi></math> dira, eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑲</mi></math>-renak <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>k</mi><mi>λ</mi><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>-ren erroak, hots <math display=\"inline\"><mrow><msub><mi>λ</mi><mo>±</mo></msub><mo>=</mo><mfrac><mrow><mn>3</mn><mo>±</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><mi>k</mi></mrow></math>. Beraz <math display=\"inline\"><mrow><mi>m</mi><msubsup><mi>ω</mi><mo>±</mo><mn>2</mn></msubsup><mo>=</mo><msub><mi>λ</mi><mo>±</mo></msub><mo>−</mo><mi>κ</mi></mrow></math>, hau da, <math display=\"block\"><mrow><msubsup><mi>ω</mi><mo>±</mo><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mn>3</mn><mo>±</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>⋅</mo><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>−</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mfrac><mrow><mn>3</mn><mo>±</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><msup><mi>φ</mi><mrow><mi>±</mi><mn>2</mn></mrow></msup></mrow></math> denez, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac></mrow></math> urrezko proportzioa izanik, <math display=\"block\"><mrow><msubsup><mi>ω</mi><mo>+</mo><mn>2</mn></msubsup><mo>=</mo><msup><mi>φ</mi><mn>2</mn></msup><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>−</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msubsup><mi>ω</mi><mo>−</mo><mn>2</mn></msubsup><mo>=</mo><msup><mi>φ</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>−</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mi>.</mi></mrow></math> Modu-formak <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑲</mi></math>-renak dira (<math display=\"inline\"><mi>κ</mi></math>-ren desplazamendu uniformeak ez ditu aldatzen): modu bigunean (<math display=\"inline\"><msub><mi>ω</mi><mo>−</mo></msub></math>) bi aleak fasean higitzen dira, <math display=\"inline\"><msub><mi>r</mi><mn>2</mn></msub></math>-ren anplitudea <math display=\"inline\"><msub><mi>r</mi><mn>1</mn></msub></math>-ena baino <math display=\"inline\"><mi>φ</mi></math> aldiz handiagoa delarik; modu zurrunean (<math display=\"inline\"><msub><mi>ω</mi><mo>+</mo></msub></math>) kontrafasean, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>φ</mi></mrow></math> erlazioaz. Urrezko proportzioak, beraz, maiztasunak (<math display=\"inline\"><msup><mi>φ</mi><mrow><mi>±</mi><mn>2</mn></mrow></msup></math>) zein anplitude-erlazioak (<math display=\"inline\"><mrow><mi>φ</mi><mo>,</mo><mn>1</mn><mi>/</mi><mi>φ</mi></mrow></math>) agintzen ditu. Gainera, <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math> zehazki koadratikoa denez —ez bigarren ordenara hurbilduta—, oszilazio hauek anplitude orotan dira zehatzak, ez soilik infinitesimaletan: hari birakariko kate malgutsua bi moduko oszilatzaile harmoniko zehatz bat da, eta bere maiztasunak <math display=\"inline\"><mi>g</mi></math>-z eta <math display=\"inline\"><msub><mi>ℓ</mi><mn>0</mn></msub></math>-z independenteak dira (horiek oreka-puntua baino ez dute lekualdatzen)."
    },
    {
     "mota": "testua",
     "html": "<strong>(d)</strong> <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> handitu ahala (<math display=\"inline\"><mi>κ</mi></math> handituz) bi maiztasunak biguntzen dira. Modu biguna lehenengo anulatzen da: <math display=\"block\"><mrow><msubsup><mi>ω</mi><mo>−</mo><mn>2</mn></msubsup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mi>c</mi><mn>1</mn><mspace width=\"0.222em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></mfrac><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mo>,</mo></mrow></math> eta hori da ezegonkortasunaren atalasea —<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ataleko erradio-dibergentzia bera—. Modu zurruna geroago anulatuko litzateke, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mi>c</mi><mn>2</mn><mspace width=\"0.222em\"></mspace></mrow></msub><mo>=</mo><mfrac><mi>φ</mi><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></mfrac><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt></mrow></math>-n, baina sistema jada ezegonkorra da <math display=\"inline\"><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mi>c</mi><mn>1</mn></mrow></msub></math>-en; beraz <math display=\"inline\"><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mi>c</mi><mn>1</mn></mrow></msub></math> da atalase fisikoa. Bien arteko erlazioa <math display=\"block\"><mrow><mfrac><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mi>c</mi><mn>2</mn><mspace width=\"0.222em\"></mspace></mrow></msub><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mi>c</mi><mn>1</mn><mspace width=\"0.222em\"></mspace></mrow></msub></mfrac><mo>=</mo><msup><mi>φ</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>3</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>≈</mo><mn>2.618</mn><mo>,</mo></mrow></math> urrezko proportzioaren karratua da. Bestalde, moduen arteko aldea <math display=\"block\"><mrow><msubsup><mi>ω</mi><mo>+</mo><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>ω</mi><mo>−</mo><mn>2</mn></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>φ</mi><mn>2</mn></msup><mo>−</mo><msup><mi>φ</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>=</mo><msqrt><mn>5</mn></msqrt><mspace width=\"0.167em\"></mspace><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>,</mo></mrow></math> <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>-rekiko guztiz independentea da: biraketak bi moduak neurri berean biguntzen ditu, haien banaketa ukitu gabe."
    },
    {
     "mota": "testua",
     "html": "<strong>(e)</strong> <math display=\"inline\"><mi>L</mi></math>-k ez du <math display=\"inline\"><mi>t</mi></math> esplizituki (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>,</mo><mi>β</mi></mrow></math> konstante); beraz Jacobiren energia-funtzioa kontserbatzen da. <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>+</mo><msub><mi>T</mi><mn>0</mn></msub></mrow></math> izanik (<math display=\"inline\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msub><mo>∑</mo><mi>i</mi></msub><msubsup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi><mn>2</mn></msubsup></mrow></math> abiaduretan koadratikoa, <math display=\"inline\"><mrow><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>κ</mi><msub><mo>∑</mo><mi>i</mi></msub><msubsup><mi>r</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math> abiaduretatik independentea, eta <math display=\"inline\"><mrow><msub><mi>T</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>), <math display=\"block\"><mrow><mi>h</mi><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msub><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mi>L</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>0</mn></msub><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><munder><mo>∑</mo><mi>i</mi></munder><msubsup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi><mn>2</mn></msubsup><mo>+</mo><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub><mo>,</mo></mrow></math> hots, erradio-problema laburtuaren &quot;energia&quot;. Egiazko energia mekanikoa, aldiz, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mi>h</mi><mo>+</mo><mn>2</mn><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mi>h</mi><mo>+</mo><mi>κ</mi><msub><mo>∑</mo><mi>i</mi></msub><msubsup><mi>r</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math> da: <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msubsup><mi>r</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math> oszilazioan aldatzen denez, <math display=\"inline\"><mi>E</mi></math> ez da kontserbatzen; aldea motorrak ematen du. Aleen ardatz-inguruko momentu angeluarra <math display=\"inline\"><mrow><msub><mi>L</mi><mi>z</mi></msub><mo>=</mo><mi>m</mi><mi mathvariant=\"normal\">Ω</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><msub><mo>∑</mo><mi>i</mi></msub><msubsup><mi>r</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math> da; <math display=\"inline\"><msub><mi>r</mi><mi>i</mi></msub></math>-k aldatzean <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math> aldatzen da, eta motorrak <math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><msub><mover><mi>L</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub></mrow></math> indar-momentua egin behar du <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> eusteko. Bere potentzia <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mi>τ</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>r</mi><mi>i</mi></msub><msub><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> hain zuzen <math display=\"inline\"><mrow><mi>κ</mi><msub><mo>∑</mo><mi>i</mi></msub><msubsup><mi>r</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math>-ren denbora-deribatua, <math display=\"inline\"><mi>E</mi></math>-ren aldaketarekin bat datorrena. Orbita egonkorrean (<math display=\"inline\"><mrow><msub><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mn>0</mn></mrow></math>) <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>0</mn></mrow></math>: motorrak ez du lanik egiten orbitari eusteko, indar zentripetua erradiala baita eta hariak ematen baitu. Oszilazioetan <math display=\"inline\"><mrow><mi>P</mi><mo>≠</mo><mn>0</mn></mrow></math> da unez une, baina batez besteko zero periodo batean (<math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msubsup><mi>r</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math> itzuli egiten baita): motorrak energia sartu eta ateratzen du, aleen erradio-oszilazioarekin sinkronoki —&quot;falta den&quot; energia motorrarena da, itzulgarriki trukatua—."
    },
    {
     "mota": "testua",
     "html": "Limiteak. <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mn>0</mn></mrow></math> (haria ardatzarekin lerrokatua): <math display=\"inline\"><mrow><mi>κ</mi><mo>→</mo><mn>0</mn></mrow></math>, indar zentrifugorik ez, eta <math display=\"inline\"><mrow><mi>G</mi><mo>→</mo><mi>m</mi><mi>g</mi></mrow></math> osoa; orbitak beti egonkorrak dira (<math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub><mo>→</mo><mi>∞</mi></mrow></math>), <math display=\"inline\"><mrow><msubsup><mi>ω</mi><mo>±</mo><mn>2</mn></msubsup><mo>→</mo><msup><mi>φ</mi><mrow><mi>±</mi><mn>2</mn></mrow></msup><mi>k</mi><mi>/</mi><mi>m</mi></mrow></math>, eta <math display=\"inline\"><mrow><msub><mi>L</mi><mi>z</mi></msub><mo>→</mo><mn>0</mn></mrow></math> denez motorrak ez du potentziarik behar —kate bertikal higikor arrunta—. <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> (haria horizontala): <math display=\"inline\"><mrow><mi>G</mi><mo>→</mo><mn>0</mn></mrow></math> (grabitateak ez du hari zeharreko osagairik, orbitak plano horizontalean), <math display=\"inline\"><mrow><mi>κ</mi><mo>=</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></math> maximoa; <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub><mo>=</mo><msup><mi>φ</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> txikiena da —biraketarekiko sistemarik sentikorrena—, eta oreka-erradioak <math display=\"inline\"><msub><mi>ℓ</mi><mn>0</mn></msub></math>-k finkatzen ditu nagusiki."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bi partikula hodi berean: modu normalak eta taupadak"
    },
    {
     "mota": "testua",
     "html": "<em><math display=\"inline\"><mi>M</mi></math> masako blokea <math display=\"inline\"><mi>a</mi></math> erradioko hodi zirkular leun eta masagabe bati zurrunki lotuta dago; multzoa\nmarruskadurarik gabeko mahai horizontal baten gainean dago eta hodia plano bertikalean. Hodiaren barnean <math display=\"inline\"><mi>m</mi></math>\nmasa bereko bi partikula labaintzen dira marruskadurarik gabe, elkarrekiko independenteki. Izan bitez <math display=\"inline\"><msub><mi>θ</mi><mn>1</mn></msub></math>\neta <math display=\"inline\"><msub><mi>θ</mi><mn>2</mn></msub></math> partikula bakoitzaren posizioa hodian, beheko puntutik neurtua.<span class=\"j-oin\">[Hazia: Ecenarro,\n<em>Mecánica y Ondas: Problemas de Examen Resueltos y Comentados</em>, 99Set01 (Setiembre 1999), non hodian\npartikula BAT baino ez zegoen eta oszilazio txikietako <math display=\"inline\"><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> soilik eskatzen zen. Hemen bigarren partikula\nbat erantsi zaio, problema modu normaletara eraman da, eta karro askearen bidezko akoplamendua —taupadak—\naztertu da.]</span> <br>\n<strong>(a)</strong> Lortu sistemaren lagrangearra (hiru askatasun-gradu: <math display=\"inline\"><mi>X</mi></math>, <math display=\"inline\"><msub><mi>θ</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>θ</mi><mn>2</mn></msub></math>) eta identifikatu\nkoordenatu ziklikoa. <strong>(b)</strong> Oszilazio txikietan, linealizatu higidura-ekuazioak masa-zentroaren\nerreferentzian. <strong>(c)</strong> Aurkitu bi modu normalak (maiztasunak eta formak). <strong>(d)</strong> Frogatu modu antisimetrikoaren\nmaiztasuna euskarri finkoko pendulu batena dela zehazki, <math display=\"inline\"><mi>M</mi></math>-ren eta <math display=\"inline\"><mi>m</mi></math>-ren guztiz independentea, eta\ninterpretatu. <strong>(e)</strong> Partikula bat bakarrik desplazatuz askatzen bada, deskribatu sortzen den higidura eta\naztertu <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mi>∞</mi></mrow></math> limitea.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/f51634b61db4da3e.svg",
     "zabalera": 433
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bloke-hodi multzoa mahai leunean labaintzen da (<math display=\"inline\"><mi>X</mi></math>); bi partikulek (<math display=\"inline\"><mi>m</mi></math> bakoitzak) hodian oszilatzen dute, <math display=\"inline\"><msub><mi>θ</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>θ</mi><mn>2</mn></msub></math> beheko puntutik neurtuta."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Har ditzagun hiru koordenatu orokortu: <math display=\"inline\"><mi>X</mi></math> (multzoaren —bloke gehi hodi— posizio horizontala) eta <math display=\"inline\"><msub><mi>θ</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>θ</mi><mn>2</mn></msub></math> (partikula bakoitzaren posizioa hodian, beheko puntutik neurtua). Hodiaren zentroa <math display=\"inline\"><mi>C</mi></math> hartuz jatorri gisa, <math display=\"inline\"><mi>i</mi></math> partikularen posizioa eta abiadura hauek dira: <math display=\"block\"><mrow><msub><mi>x</mi><mi>i</mi></msub><mo>=</mo><mi>X</mi><mo>+</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mi>i</mi></msub><mo>=</mo><mi>−</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>a</mi><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mi>a</mi><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>,</mo></mrow></math> eta <math display=\"inline\"><mrow><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup><mo>=</mo><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>a</mi><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi><mn>2</mn></msubsup></mrow></math>. Hodia masagabea denez, multzo higikorraren masa <math display=\"inline\"><mi>M</mi></math> da (blokea) eta bere abiadura <math display=\"inline\"><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover></math>. Bi partikulen energia zinetikoa eta karroarena batuz, eta potentziala grabitatetik hartuz, <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>a</mi><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>1</mn></msub><mo>+</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>1</mn></msub><mo>+</mo><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> eta lagrangearra <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi></mrow></math> da: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>a</mi><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>1</mn></msub><mo>+</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><mi>g</mi><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>1</mn></msub><mo>+</mo><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>X</mi></math> ez da esplizituki agertzen <math display=\"inline\"><mi>L</mi></math>-n: koordenatu ziklikoa da, eta dagokion momentu kanonikoa —sistemaren momentu lineal horizontal osoa— higidura-konstantea da: <math display=\"block\"><mrow><msub><mi>p</mi><mi>X</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>1</mn></msub><mo>+</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> Masa-zentroaren erreferentzian (<math display=\"inline\"><mrow><msub><mi>p</mi><mi>X</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, hots dena pausagunetik) kokatuz, <math display=\"block\"><mrow><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mfrac><mrow><mi>m</mi><mi>a</mi></mrow><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>1</mn></msub><mo>+</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Karroa partikulen atzera-eraginez soilik higitzen da: berez ez du inolako bultzadarik."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>θ</mi><mi>i</mi></msub></math>-ren Euler-Lagrange ekuazioa garatuz —kate-erregelako gaiek elkar deuseztatzen dute— forma sinplea geratzen da, koordenatu bakoitzarentzat berdina: <math display=\"block\"><mrow><mi>a</mi><msub><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi>i</mi></msub><mo>+</mo><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>+</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo></mrow></math> non <math display=\"inline\"><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover></math> karroaren azelerazioa den, aurreko momentu-erlaziotik lortua. Bikoteak partikula bakoitzaren oszilazioa eta karroaren atzera-egitea lotzen ditu."
    },
    {
     "mota": "testua",
     "html": "Oszilazio txikietan (<math display=\"inline\"><msub><mi>θ</mi><mi>i</mi></msub></math> txikiak) <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>≈</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>≈</mo><msub><mi>θ</mi><mi>i</mi></msub></mrow></math> dira, eta <math display=\"inline\"><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover></math> lehen ordenako txikia da; beraz <math display=\"inline\"><mrow><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mo>≈</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Ordezkatuz eta <math display=\"inline\"><mi>a</mi></math>-z zatituz, ekuazio linealak lortzen dira: <math display=\"block\"><mrow><msub><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi>i</mi></msub><mo>−</mo><mfrac><mi>m</mi><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mi>g</mi><mi>a</mi></mfrac><mspace width=\"0.167em\"></mspace><msub><mi>θ</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mi>.</mi></mrow></math> Bi ekuazio akoplatu dira: akoplamendua karroaren atzera-egiteak sortzen du (parentesiko gaia), eta bi partikulei berdin eragiten die."
    },
    {
     "mota": "testua",
     "html": "Ekuazioak deskoplatzeko, koordenatu normalak sartzen ditugu: batura <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>θ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>θ</mi><mn>2</mn></msub></mrow></math> eta kendura <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><msub><mi>θ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>θ</mi><mn>2</mn></msub></mrow></math>. Bi ekuazioak <strong>batuz</strong>, akoplamendu-gaia bikoiztu egiten da eta <math display=\"inline\"><mi>S</mi></math> soilik geratzen da: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>S</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>g</mi><mi>a</mi></mfrac><mi>S</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hots, </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mfrac><mi>M</mi><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></mfrac><mover><mi>S</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>g</mi><mi>a</mi></mfrac><mi>S</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>S</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mi>S</mi><mn>2</mn></msubsup><mi>S</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msubsup><mi>ω</mi><mi>S</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>M</mi><mi>a</mi></mrow></mfrac><mi>.</mi></mrow></math> Bi ekuazioak <strong>kenduz</strong>, aldiz, akoplamendu-gaia guztiz ezabatzen da (parentesikoa berdina baita bietan): <math display=\"block\"><mrow><mover><mi>D</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mi>A</mi><mn>2</mn></msubsup><mi>D</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msubsup><mi>ω</mi><mi>A</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mi>g</mi><mi>a</mi></mfrac><mi>.</mi></mrow></math> Beraz bi modu normalak hauek dira:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Modu simetrikoa</strong> (<math display=\"inline\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>θ</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math>): bi partikulak fasean oszilatzen dira; maiztasuna <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>S</mi></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mrow></math>.",
      "<strong>Modu antisimetrikoa</strong> (<math display=\"inline\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>θ</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mn>0</mn></mrow></math>): partikulak aurkako fasean oszilatzen dira; maiztasuna <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>A</mi></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mi>S</mi><mo accent=\"true\">̇</mo></mover></mrow></math> denez, modu antisimetrikoan (<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mn>0</mn></mrow></math>) karroa erabat geldi dago une oro; modu simetrikoan, berriz, atzera egiten du, <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi><mi>a</mi><msub><mi>θ</mi><mn>0</mn></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> anplitudez (partikulen anplitudea <math display=\"inline\"><msub><mi>θ</mi><mn>0</mn></msub></math> izanik)."
    },
    {
     "mota": "testua",
     "html": "Hemen dago emaitzarik dotoreena. Modu antisimetrikoaren maiztasuna, <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>A</mi></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></mrow></math>, euskarri <strong>finko</strong> bateko pendulu baten berbera da zehazki —<math display=\"inline\"><mi>M</mi></math>-ren zein <math display=\"inline\"><mi>m</mi></math>-ren guztiz independentea—. Arrazoia gardena da: bi partikulek aurkako fasean oszilatzen dutenean, bakoitzak karroari ematen dion momentu horizontala bestearenak zehazki deuseztatzen du; karroak ez du atzera egiteko arrazoirik, geldi geratzen da, eta partikula bakoitzak euskarri finko baten gainean bezala oszilatzen du. Karroa <strong>gardena</strong> da modu horrentzat. Modu simetrikoa, aldiz, hazi originalaren emaitza da, baina bi partikulak <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math> masako gorputz bakar gisa jokatuz: <math display=\"inline\"><mrow><msubsup><mi>ω</mi><mi>S</mi><mn>2</mn></msubsup><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da, hots, <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mn>2</mn><mi>m</mi></mrow></math> ordezkapena hazian (<math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). Kasu honetan bi partikulek batera bultzatzen dute karroa, honek atzera egiten du, eta atzera-egite horrek oszilazioa zurruntzen du: <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>S</mi></msub><mo>&gt;</mo><msub><mi>ω</mi><mi>A</mi></msub></mrow></math> beti. Karro askeak, beraz, ez ditu bi moduak berdin tratatzen: simetrikoa igo egiten du, antisimetrikoa ukitu gabe uzten."
    },
    {
     "mota": "testua",
     "html": "Azkenik, demagun partikula <strong>bat</strong> bakarrik desplazatzen dugula (<math display=\"inline\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>) eta biak geldirik askatzen ditugula. Modu normaletan, hasierako baldintzak <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>D</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> dira; beraz <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mi>S</mi></msub><mi>t</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mi>A</mi></msub><mi>t</mi></mrow></math>, eta partikula bakoitzaren higidura bi maiztasunen gainezarmena da: <math display=\"block\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>S</mi></msub><mo>−</mo><msub><mi>ω</mi><mi>A</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>S</mi></msub><mo>+</mo><msub><mi>ω</mi><mi>A</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>θ</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>S</mi></msub><mo>−</mo><msub><mi>ω</mi><mi>A</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>S</mi></msub><mo>+</mo><msub><mi>ω</mi><mi>A</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Hau <strong>taupaden</strong> fenomenoa da: energia partikula batetik bestera pasatzen da eta itzultzen, <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>S</mi></msub><mo>−</mo><msub><mi>ω</mi><mi>A</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> periodoarekin. Lehen partikula geldirik dagoen unean, bigarrena da anplitude osoz oszilatzen duena. Funtsezkoena: energia-transferentzia hori karroak bakarrik bideratzen du —bera baita bi partikulak akoplatzen dituen bide bakarra—. Hori argi ikusten da <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mi>∞</mi></mrow></math> limitean: orduan <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>S</mi></msub><mo>→</mo><msub><mi>ω</mi><mi>A</mi></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></mrow></math>, taupaden periodoa infinitura doa eta transferentzia desagertzen da; karro astunak ezin du atzera egin, ezin du momenturik garraiatu partikulen artean, eta biak pendulu independente bihurtzen dira, <math display=\"inline\"><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></math> maiztasun berean. <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mn>0</mn></mrow></math> limiteak gauza bera ematen du beste muturretik: partikula arinek ez dute karroa mugitzen, akoplamendua ahultzen da eta bi maiztasunak <math display=\"inline\"><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></math>-ra biltzen dira. Alderantziz, <math display=\"inline\"><mi>M</mi></math> zenbat eta txikiagoa, akoplamendua handiagoa eta taupadak azkarragoak."
    },
    {
     "mota": "testua",
     "html": "Bi masak berdinak izateak egiten du deskoplamendua zehatza; desberdinak balira, modu propioek <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>θ</mi><mn>2</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>θ</mi><mn>2</mn></msub></mrow></math> formak galduko lituzkete eta nahastuko lirateke, baina akoplamenduaren izaera —karroaren atzera-egitea— berbera litzateke. Dimentsioen aldetik, bi maiztasunak <math display=\"inline\"><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></math> eskalakoak dira, oszilazio grabitatorio bati dagokion bezala."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Hamiltondarra",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema mekanikoaren <strong>hamiltondarra</strong> energiaren dimentsioak dituen hurrengo magnitudea da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>H</mi><mo>≡</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><msub><mi>p</mi><mi>i</mi></msub><mo>−</mo><mi>L</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mi>L</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Loturarik gabeko partikula koordenatu kartesiarretan"
    },
    {
     "mota": "testua",
     "html": "Adibidez, (6.123) lagrangearraren kasuan hauxe dugu (6.124) emaitzen ondorioz: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>H</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><msub><mi>p</mi><mi>x</mi></msub><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><msub><mi>p</mi><mi>y</mi></msub><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><msub><mi>p</mi><mi>z</mi></msub><mo>−</mo><mi>L</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mi>E</mi><mi>.</mi></mtd></mtr></mtable></math> Hamiltondarra energia mekanikoaren berdina da <em>kasu honetan</em>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu gauza bera gertatzen dela koordenatu zilindrikoetan eta esferikoetan."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Baina <em>hamiltondarra ez da beti energia mekanikoa.</em>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu 6.3 irudiko sistemaren hamiltondarra <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> dela eta, beraz, <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> energia mekanikoaren desberdina."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hamiltondarra eta energia mekanikoa"
    },
    {
     "mota": "testua",
     "html": "Hamiltondarra energia mekanikoaren berdina izateko baldintza nahikoak emango ditugu jarraian. Horretarako, sistema mekaniko bat <strong>naturala</strong> dela esango dugu (loturak holonomoak eta idealak izateaz gain)"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "indar eragileak kontserbatzaileak badira, <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "eta denbora ez bada esplizituki agertzen (6.63) transformazio-ekuazioetan (lotura guztiak egonkorrak direlako edo): <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><msub><mi>q</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "Definizio honekin, hauxe dugu hamiltondarraren esanahia: <em>sistema mekaniko naturalen hamiltondarra energia mekanikoaren berdina da</em>: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mi>.</mi></mrow></math> Izan ere, (6.63) transformazio-ekuazioetan denbora esplizituki agertzen ez bada, (6.84) abiadurak modu honetan adierazten dira koordenatu orokortuetan: <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>k</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mi>.</mi></mrow></math> Energia mekanikoa honelakoa da kasu honetan: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>k</mi></msub><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>k</mi></msub><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>k</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><munderover><mo>∑</mo><mrow><mi>j</mi><mo>,</mo><mi>l</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>m</mi><mi>k</mi></msub><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>⋅</mo><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>l</mi></msub></mrow></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>l</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>j</mi><mo>,</mo><mi>l</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mrow><mi>j</mi><mi>l</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>l</mi></msub><mo>,</mo></mrow></math> non forma koadratiko honen koefiziente simetrikoak honela definitzen diren: <math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>j</mi><mi>l</mi></mrow></msub><mo>≡</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>k</mi></msub><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>⋅</mo><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>l</mi></msub></mrow></mfrac><mo>=</mo><msub><mi>a</mi><mrow><mi>l</mi><mi>j</mi></mrow></msub><mi>.</mi></mrow></math> Koefiziente hauek <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> koordenatu orokortuen menpekoak izan arren, <math display=\"inline\"><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></math> abiadura orokortuen independenteak dira eta, batura-indize mutuen izenak aldatuz, <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>T</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>l</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mrow><mi>i</mi><mi>l</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>l</mi></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub></mrow></math> lortzen dugu, eta hortik <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><mi>T</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>=</mo><mn>2</mn><mi>T</mi><mi>.</mi></mrow></math> Funtzio homogeneoen Eulerren teorema ezagunaren kasu berezia den emaitza hau, hamiltondarraren (6.132) definizioa eta (6.136) erabiliz, teoremaren frogapena amaitzen dugu: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mi>L</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><mi>T</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mi>L</mi><mo>=</mo><mn>2</mn><mi>T</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mi>E</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Plano aldapatsu higikorra"
    },
    {
     "mota": "testua",
     "html": "6.7 irudiko sistema naturala denez, (6.110) energia mekanikoa da eta (6.111) energia potentziala erabiliz, zuzenean idatz dezakegu hamiltondarra: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>+</mo><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mi>g</mi><mi>s</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu pendulu matematikoaren hamiltondarra honako hau dela: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hamiltondarraren kontserbazio-printzipioa: Jacobiren integrala<span class=\"j-oin\">[Painlevéren integrala ere esaten zaio higidura-konstante honi.]</span>"
    },
    {
     "mota": "testua",
     "html": "Hamiltondarraren (6.132) definizioa denborarekiko deribatuz, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mi>L</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mtd></mtr></mtable></math> Denborarekiko deribatu osoa higiduran zehar kalkulatzen denez, azken baturako parentesiak nuluak dira, Lagrangeren ekuazioen ondorioz. Hortaz, <em>higiduran zehar</em>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>H</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "betetzen dela frogatu dugu. (Deribatu osoen eta partzialen arteko desberdintasuna azpimarratzeko ez dugu hemen erabili <math display=\"inline\"><mrow><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> notazio baliokide laburra.)  <br> Badakigu orain noiz kontserbatzen den hamiltondarra: <em>hamiltondarra higidura-konstantea da baldin eta soilik baldin denbora ez bada esplizituki agertzen lagrangearrean, hau da, lagrangearra denbora-translazioekiko aldaezina denean</em>. 6.5.1 atalean (eta 6.118 problheman) bezala, simetria bati kontserbazio-lege bat dagokio. <br> Argi geratu beharko litzateke emaitza hau eta 6.6.1 ataleko biak guztiz independenteak direla."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Batzuetan sistema mekanikoa naturala da eta lagrangearra denboraren independentea: bi emaitzak beteko dira eta hamiltondarra energia mekanikoaren berdina eta higidura-konstantea izango da. Horrela gertatzen da, adibidez, plano aldapatsu higikorraren (6.145) hamiltondarrarekin eta pendulu matematikoaren (6.146) delakoarekin."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Sistema naturala ez bada, gerta daiteke hamiltondarra energia mekanikoa izan ez arren higidura-konstantea izatea, denbora lagrangearrean esplizituki agertzen ez delako. Adibidez, 6.3 irudiko sisteman lotura higikorra da —(6.30)–(6.31) lotura ekuazioetan denbora esplizituki agertzen da— eta, 6.18 ariketan ikusi genuenez, hamiltondarra ez da energia mekanikoa. Hala ere, kontserbatu egiten da. Energia mekanikoa, ordea, ez da higidura-konstantea, <math display=\"inline\"><mi>ω</mi></math> abiadura angeluarra konstantea izateko lan egiten duen kanpo-eraginen bat (motor batek egindakoa, agian) behar da eta."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Alderantziz ere gerta daiteke eta, sistema naturala izan arren, energia mekanikoaren berdina den hamiltondarra ez kontserbatzea. Esaterako, horixe gertatuko litzateke (6.123) sisteman <math display=\"inline\"><mrow><mi>∂</mi><mi>V</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>≠</mo><mn>0</mn></mrow></math> balitz (gogoratu 1.53 problema)."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Jakina, badago laugarren kasua: gerta daiteke hamiltondarra energia mekanikoaren desberdina eta aldakorra izatea. Nahikoa da, adibidez, 6.18 ariketako sisteman <math display=\"inline\"><mi>ω</mi></math> abiadura aldakorra izatea (<math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mi>α</mi><mi>t</mi></mrow></math> modukoa bada edo bestelako lege ezagun baten arabera aldatzen denean)."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Barra birakari behartua: hamiltondarra eta motorraren potentzia"
    },
    {
     "mota": "testua",
     "html": "<em><math display=\"inline\"><mi>ℓ</mi></math> luzerako barra zurrun eta masagabe baten muturrean <math display=\"inline\"><mi>m</mi></math> masako partikula bat dago; beste muturra\nardatz bertikal bateko <math display=\"inline\"><mi>O</mi></math> puntu finkoan dago giltzatua (marruskadurarik gabe). Kanpoko motor batek barra\ndagoen plano bertikala ardatzaren inguruan biraka behartzen du <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> abiadura angeluar konstantez. Plano\nhorren barruan barrak aske kulunka dezake; izan bedi <math display=\"inline\"><mi>θ</mi></math> barrak beheko bertikalarekin osatzen duen\nangelua.<span class=\"j-oin\">[Hazia: Ecenarro, <em>Mecánica y Ondas: Problemas de Examen Resueltos y Comentados</em>,\n97Feb04 (16.–17. or.), non <math display=\"inline\"><mi>M</mi></math> masa bat malguki batekin (<math display=\"inline\"><mi>k</mi></math>) inklinazio finkoko barra birakari batean\nlabaintzen zen eta hamiltondarra energia mekanikoarekin bat datorren galdetzen zen. Hemen dispositiboa aldatu\nda (barra zurruna; askatasun-gradua <math display=\"inline\"><mi>θ</mi></math> angelua da; malgukirik gabe), eta motorraren indar-momentua eta\npotentzia, <math display=\"inline\"><mrow><mi>E</mi><mo>−</mo><mi>H</mi></mrow></math> berdintza zehatza eta modu normalak erantsi dira.]</span> <br>\n<strong>(a)</strong> Formalismo lagrangearra erabiliz, lortu <math display=\"inline\"><mi>θ</mi></math>-ren higidura-ekuazioa eta laburtu problema dimentsio\nbakarreko baliokide batera, potentzial eragilea <math display=\"inline\"><mrow><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idatziz. <strong>(b)</strong> Pasa hamiltondarrera: definitu\n<math display=\"inline\"><msub><mi>p</mi><mi>θ</mi></msub></math> momentu konjokatua, idatzi <math display=\"inline\"><mrow><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><msub><mi>p</mi><mi>θ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta Hamiltonen ekuazioak; <math display=\"inline\"><mi>H</mi></math> higidura-konstantea al\nda? <strong>(c)</strong> <math display=\"inline\"><mi>H</mi></math> bat al dator energia mekanikoarekin <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi></mrow></math>? Kalkulatu <math display=\"inline\"><mrow><mi>E</mi><mo>−</mo><mi>H</mi></mrow></math>, interpretatu eta erakutsi <math display=\"inline\"><mi>E</mi></math>\nez dela kontserbatzen. <strong>(d)</strong> Aurkitu motorrak <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> mantentzeko ardatzaren inguruan egin behar duen <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>\nindar-momentua eta ematen duen <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> potentzia; egiaztatu <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover></mrow></math> (egiaztapen independentea) eta frogatu\n<math display=\"inline\"><mi>θ</mi></math>-ren kulunka oso batean motorraren lan garbia zero dela. <strong>(e)</strong> Aztertu oreka erlatiboak (<math display=\"inline\"><mi>θ</mi></math>\nkonstante) eta haien egonkortasuna; lortu oreka egonkorren inguruko oszilazio-maiztasunak, identifikatu\n<math display=\"inline\"><msub><mi>ω</mi><mi>c</mi></msub></math> abiadura kritikoa eta aztertu <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>→</mo><mn>0</mn></mrow></math> zein <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>→</mo><mi>∞</mi></mrow></math> limiteak.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/210761bcb2443976.svg",
     "zabalera": 222
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Barra zurruna (<math display=\"inline\"><mi>m</mi></math> masa muturrean) bere planoan aske kulunkatzen da, motorrak <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> konstantez ardatz bertikalaren inguruan behartzen duen bitartean; <math display=\"inline\"><mi>θ</mi></math> beheko bertikaletik neurtzen da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Askatasun-gradu bakarra <math display=\"inline\"><mi>θ</mi></math> da: <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub><mi>t</mi></mrow></math> biraketa motorrak behartzen du (lotura erreonomoa). Partikula ardatzetik <math display=\"inline\"><mrow><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> distantziara dago eta bere altuera <math display=\"inline\"><mrow><mi>−</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> da; abiaduraren karratua, planoan zeharreko <math display=\"inline\"><mrow><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> osagaia eta biraketak eragindako <math display=\"inline\"><mrow><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> osagaia elkarzutak direnez, <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mi>ℓ</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da. Lagrangearra, beraz: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mi>m</mi><mi>g</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mi>θ</mi></math>-ren Euler-Lagrange ekuazioak <math display=\"block\"><mrow><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ℓ</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><mi>g</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> ematen du. Ekuazio hori <math display=\"inline\"><mrow><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> gisa irakur daiteke, non potentzial eragilea <math display=\"block\"><mrow><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math> den: grabitatearen potentziala ken indar zentrifugoaren potentziala. Sistema, hortaz, <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>-en higitzen den masa bakar baten gisa deskribatzen da, dimentsio bakarreko problema baliokide gisa."
    },
    {
     "mota": "testua",
     "html": "Hamiltondarrera pasatzeko, momentu konjokatua <math display=\"inline\"><mrow><msub><mi>p</mi><mi>θ</mi></msub><mo>=</mo><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> da, eta Legendreren transformatuak <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><msub><mi>p</mi><mi>θ</mi></msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>L</mi><mo>=</mo><mfrac><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>−</mo><mi>m</mi><mi>g</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> ematen du. Hamiltonen ekuazioak honela geratzen dira: <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>∂</mi><mi>H</mi><mi>/</mi><mi>∂</mi><msub><mi>p</mi><mi>θ</mi></msub><mo>=</mo><mfrac><msub><mi>p</mi><mi>θ</mi></msub><mrow><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>θ</mi></msub><mo>=</mo><mi>−</mi><mi>∂</mi><mi>H</mi><mi>/</mi><mi>∂</mi><mi>θ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><mi>m</mi><mi>g</mi><mi>ℓ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math> eta bigarrenak <math display=\"inline\"><msub><mi>p</mi><mi>θ</mi></msub></math>-ren definizioarekin higidura-ekuazioa berreskuratzen du. <math display=\"inline\"><mi>L</mi></math>-k (eta <math display=\"inline\"><mi>H</mi></math>-k) ez dute <math display=\"inline\"><mi>t</mi></math> esplizituki agertzen; beraz <math display=\"inline\"><mrow><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mi>H</mi></math> higidura-konstantea da. Hau Jacobiren integrala da, biraketa behartua egon arren existitzen den kontserbazio-legea."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>H</mi></math> ez da, ordea, energia mekanikoa. Energia zinetikoak bi zati ditu, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>+</mo><msub><mi>T</mi><mn>0</mn></msub></mrow></math>, non <math display=\"inline\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> (<math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>-ren karratuan) eta <math display=\"inline\"><mrow><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math> (abiadura orokortuaren independentea) diren. Hamiltondarrean <math display=\"inline\"><msub><mi>T</mi><mn>0</mn></msub></math> zeinu negatiboz sartzen da (<math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>0</mn></msub><mo>+</mo><mi>V</mi></mrow></math>), baina energia mekanikoan positiboz (<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>+</mo><msub><mi>T</mi><mn>0</mn></msub><mo>+</mo><mi>V</mi></mrow></math>); beraz, <math display=\"block\"><mrow><mi>E</mi><mo>−</mo><mi>H</mi><mo>=</mo><mn>2</mn><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>.</mi></mrow></math> Biak <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> denean bakarrik datoz bat (partikula ardatzean, goian edo behean). <math display=\"inline\"><mi>H</mi></math> konstantea denez baina <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math> higidurarekin aldatzen denez, <math display=\"inline\"><mi>E</mi></math> ez da kontserbatzen: <math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Interpretazioa gardena da: <math display=\"inline\"><mi>H</mi></math> da erreferentzia birakariko energia osoa —kulunkaren energia zinetikoa gehi grabitatearen eta indar zentrifugoaren potentzialak—, zeina kontserbatzen den Coriolisen indarrak lanik egiten ez duelako; <math display=\"inline\"><mi>E</mi></math>, aldiz, laborategiko energia da, eta motorrak partikularekin trukatzen duen lanaren kausaz pultsatzen du."
    },
    {
     "mota": "testua",
     "html": "Motorraren eragina zuzenean kuantifika dezakegu, eta hori da problemaren gakoa. Ardatz bertikalaren inguruko momentu angeluarra <math display=\"inline\"><mrow><msub><mi>L</mi><mi>z</mi></msub><mo>=</mo><mi>m</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> da. Grabitateak (bertikala) eta <math display=\"inline\"><mi>O</mi></math>-ko giltzaren erreakzioak (ardatzean bertan) ez dute ardatzaren inguruko indar-momenturik egiten; beraz motorrak eman behar duen indar-momentua <math display=\"block\"><mrow><mi>N</mi><mo>=</mo><msub><mover><mi>L</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msub><mi>ω</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msub><mi>ω</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> da, eta ematen duen potentzia <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>N</mi><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>. Emaitza hau <math display=\"inline\"><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover></math>-rekin zehazki bat dator: motorra da <math display=\"inline\"><mi>E</mi></math> aldarazten duen agente bakarra —giltzak ez du lanik egiten (puntu finkoa) eta grabitatea <math display=\"inline\"><mi>V</mi></math>-n dago jasota—, espero bezala. Are gehiago: <math display=\"inline\"><mi>θ</mi></math> bi itzulguneen artean kulunkatzen denean higidura periodikoa da, eta <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>H</mi><mo>+</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math> faseko puntuaren funtzio bakuna denez, periodo oso batean <math display=\"inline\"><mi>E</mi></math>-ren aldaketa zero da, <math display=\"block\"><mrow><msub><mi>W</mi><mrow><mtext mathvariant=\"normal\">motor </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mo>∮</mo><mi>P</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">d</mi><mi>t</mi><mo>=</mo><mo>∮</mo><mi mathvariant=\"normal\">d</mi><mi>E</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Motorrak potentzia positiboa ematen dio partikulari kulunkaren zati batean eta negatiboa besteetan (frenatuz), baina lan garbia zero da periodo bakoitzean, marruskadurarik ez dagoelako. Intuizioaren aurkakoa da: biraketa behartzen duen motorrak ez du batez besteko lanik egiten, nahiz eta uneoro energia trukatu partikularekin —<math display=\"inline\"><mi>E</mi></math> pultsatu egiten da, baina <math display=\"inline\"><mi>H</mi></math> (rotazio-sistemako energia) zehazki finkoa da."
    },
    {
     "mota": "testua",
     "html": "Azkenik, oreka erlatiboak <math display=\"inline\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo>−</mo><mi>ℓ</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>-tik datoz: <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> (behean), <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi></mrow></math> (goian) eta, <math display=\"inline\"><mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>≥</mo><mi>g</mi><mi>/</mi><mi>ℓ</mi></mrow></math> bada, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mo>*</mo></msub><mo>=</mo><mi>g</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ℓ</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> inklinazio bat. Egonkortasuna <math display=\"inline\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mi>ℓ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>g</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><mi>ℓ</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>-k erabakitzen du. Beheko puntuan <math display=\"block\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mi>/</mi><mi>ℓ</mi><mo>−</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da, positiboa (egonkorra) <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>&lt;</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math> bada, non <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>c</mi></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>ℓ</mi></mrow></msqrt></mrow></math> abiadura kritikoa den; oszilazio txikien maiztasuna <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>=</mo><mi>g</mi><mi>/</mi><mi>ℓ</mi><mo>−</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math> da. <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>→</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math> hurbiltzean <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><mn>0</mn></mrow></math>: modua bigundu egiten da (moteltze kritikoa), indar zentrifugoak grabitatearen berreskuratze-efektua ezeztatzen baitu. <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>&gt;</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math> denean beheko puntua ezegonkorra da eta partikula <math display=\"inline\"><msub><mi>θ</mi><mo>*</mo></msub></math> inklinaziora igotzen da; bertan <math display=\"block\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mo>*</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msub><mi>θ</mi><mo>*</mo></msub><mo>&gt;</mo><mn>0</mn></mrow></math> da beti (kalkulua <math display=\"inline\"><mrow><mi>g</mi><mo>=</mo><mi>ℓ</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mo>*</mo></msub></mrow></math> ordezkatuz ateratzen da), hots, inklinazio-oreka beti egonkorra da existitzen denean, eta bere inguruko maiztasuna <math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mo>*</mo></msub><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mo>*</mo></msub></mrow></math> da. Emaitza dotorea da: bai <math display=\"inline\"><msub><mi>θ</mi><mo>*</mo></msub></math> angelua (erregulatzaile zentrifugoaren legea, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mo>*</mo></msub><mo>=</mo><mi>g</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ℓ</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) bai <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mo>*</mo></msub><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mo>*</mo></msub></mrow></math> maiztasuna <math display=\"inline\"><mi>m</mi></math> masaren guztiz independenteak dira —geometriak eta <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>-k soilik finkatzen dituzte—. Limiteek koadroa osatzen dute: <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>→</mo><mn>0</mn></mrow></math> denean <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>ℓ</mi></mrow></msqrt></mrow></math> berreskuratzen da, hots, pendulu arruntaren maiztasuna; <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>→</mo><mi>∞</mi></mrow></math> denean <math display=\"inline\"><mrow><msub><mi>θ</mi><mo>*</mo></msub><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> (barra ia horizontala) eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mo>*</mo></msub><mo>→</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>. <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math>-n bi adarrak elkartzen dira: beheko orekak egonkortasuna galtzen du eta inklinazio-adarra jaiotzen zaio (adarkatze jarraitua), <math display=\"inline\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> den puntuan, non oszilazioak anharmoniko bihurtzen diren. Horrela, hamiltondarrak eta motorraren balantzeak elkarrekin erakusten dute mekanika analitikoaren muina: sistema behartu batek —bere energia mekanikoa kontserbatzen ez duenak— kontserbazio-lege zehatza izan dezake oraindik, eta bera biraka behartzen duen motorrak, harrigarriro, ez du lan garbirik egiten kulunka bakoitzean."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hodi birakaria, malgukia eta abiadura kritikoa"
    },
    {
     "mota": "testua",
     "html": "<em><math display=\"inline\"><mi>O</mi></math> puntu finko batean gozne bat dago, eta bertan hodi zuzen mehe bat lotua, ardatz\nbertikalarekiko <math display=\"inline\"><mi>α</mi></math> angelu konstantea eratuz; hodiak ardatz horren inguruan bira dezake eta beherantz\nzein kanporantz zabaltzen da <math display=\"inline\"><mi>O</mi></math>-tik. Hodiaren barnean <math display=\"inline\"><mi>m</mi></math> masako partikula bat labain daiteke\nmarruskadurarik gabe, <math display=\"inline\"><mi>k</mi></math> konstanteko malguki batez <math display=\"inline\"><mi>O</mi></math>-ra lotua (luzera naturala arbuiagarria: malgukiak\n<math display=\"inline\"><mi>O</mi></math> aldera <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>s</mi></mrow></math> indarra egiten dio, <math display=\"inline\"><mi>s</mi></math> izanik partikularen distantzia <math display=\"inline\"><mi>O</mi></math>-tik hodian zehar). Grabitatea\nbeherantz.<span class=\"j-oin\">[Hazia: Ecenarro, <em>Mecánica y Ondas: Problemas de Examen Resueltos y Comentados</em>,\n97Mar04 (26.–27. or.), non hodia masagabea zen, angelua finkoa (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>) eta, kolpe lehor\nbatez emandako hasierako <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> baten ondoren, partikula muturretik irteteko behar zen <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>\nminimoa eskatzen zuen. Hemen angelua (<math display=\"inline\"><mi>α</mi></math>) orokortu, malguki bat erantsi, geometria konikora eraman\n(goitik esekia) eta formalismo hamiltondarraren galdera berriak sartu dira: Jacobiren integrala, oreka,\negonkortasuna eta modu normala, abiadura kritikoa, eta hodi bultzatuaren zein askearen arteko aldea.]</span>\n<br>\n<strong>(a)</strong> Motor batek <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Ω</mi></mrow></math> abiadura angeluar konstantea mantentzen du. Formalismo hamiltondarra\nerabiliz, lortu <math display=\"inline\"><mi>s</mi></math> koordenatuaren higidura-ekuazioa; frogatu energia mekanikoa EZ dela kontserbatzen\n(motorrak lan egiten baitu) baina Jacobiren integrala bai, eta identifikatu <math display=\"inline\"><mrow><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> potentzial\neragilea. <strong>(b)</strong> Aurkitu <math display=\"inline\"><msup><mi>s</mi><mo>*</mo></msup></math> oreka-posizioa eta frogatu badela <math display=\"inline\"><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></math> abiadura angeluar kritiko bat,\nzeinetik gora orekarik ez dagoen. <strong>(c)</strong> Aztertu <math display=\"inline\"><msup><mi>s</mi><mo>*</mo></msup></math>-ren egonkortasuna eta lortu oszilazio txikien <math display=\"inline\"><mi>ω</mi></math>\nmaiztasuna; frogatu <math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mn>0</mn></mrow></math> dela <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></mrow></math> denean (modu biguna). <strong>(d)</strong> Interpretatu\n<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></mrow></math> atalasea. <strong>(e)</strong> Itzali motorra: orain hodia (masagabea) aske biratzen da eta ardatzaren\ninguruko <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math> momentu angeluarra kontserbatzen da; frogatu oreka egonkorra dela <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math> ORORENTZAT\n(atalaserik gabe) eta azaldu hodi bultzatuaren eta askearen arteko alde kualitatiboa.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/8fe830a14529b5bd.svg",
     "zabalera": 216
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hodia <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> abiaduraz biratzen da ardatz bertikalaren inguruan; <math display=\"inline\"><mi>s</mi></math> partikularen posizioa da <math display=\"inline\"><mi>O</mi></math>-tik hodian zehar, eta puntu-lerroak bere biraketa-ibilbidea."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bi koordenatu orokortu erabiliko ditugu: <math display=\"inline\"><mi>s</mi></math> (partikularen distantzia <math display=\"inline\"><mi>O</mi></math>-tik hodian zehar) eta <math display=\"inline\"><mi>φ</mi></math> (hodiaren biraketa-angelua ardatz bertikalaren inguruan). Hodiak <math display=\"inline\"><mi>α</mi></math> angelu finkoa eratzen duenez, partikula ardatzetik <math display=\"inline\"><mrow><mi>s</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> distantziara dago eta <math display=\"inline\"><mi>O</mi></math>-ren azpitik <math display=\"inline\"><mrow><mi>s</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> sakoneran. Bere abiadurak bi osagai elkarzut ditu —hodian zeharreko <math display=\"inline\"><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover></math> eta biraketak eragindako <math display=\"inline\"><mrow><mi>s</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>—, beraz <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>s</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>. Grabitateak <math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mspace width=\"0.167em\"></mspace><mi>s</mi></mrow></math> potentziala ematen du (partikula beherago, energia potentzial txikiago) eta malgukiak <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>s</mi><mn>2</mn></msup></mrow></math>; lagrangearra, hortaz: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>s</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mspace width=\"0.167em\"></mspace><mi>s</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>s</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Momentu kanonikoak <math display=\"inline\"><mrow><msub><mi>p</mi><mi>s</mi></msub><mo>=</mo><mi>m</mi><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>p</mi><mi>φ</mi></msub><mo>=</mo><mi>m</mi><msup><mi>s</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> dira; azkena ardatzaren inguruko momentu angeluarra da, <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math>. Legendre-ren transformazioaz, funtzio hamiltondarra lortzen dugu: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><msubsup><mi>p</mi><mi>s</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>+</mo><mfrac><msubsup><mi>p</mi><mi>φ</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mi>m</mi><msup><mi>s</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>s</mi><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mspace width=\"0.167em\"></mspace><mi>s</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Motorrak <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Ω</mi></mrow></math> ezartzen duenean, <math display=\"inline\"><mi>φ</mi></math> ez da koordenatu askea: hori ordezkatuz, <math display=\"inline\"><mi>s</mi></math>-ren lagrangear murriztua geratzen zaigu, <math display=\"block\"><mrow><mover><mi>L</mi><mo accent=\"true\">¯</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><msup><mi>s</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mspace width=\"0.167em\"></mspace><mi>s</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>s</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> <math display=\"inline\"><mover><mi>L</mi><mo accent=\"true\">¯</mo></mover></math>-k ez du <math display=\"inline\"><mi>t</mi></math> esplizituki agertzen (<math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> konstantea), beraz Jacobiren energia-funtzioa kontserbatzen da: <math display=\"block\"><mrow><mi>h</mi><mo>=</mo><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mfrac><mrow><mi>∂</mi><mover><mi>L</mi><mo accent=\"true\">¯</mo></mover></mrow><mrow><mi>∂</mi><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mover><mi>L</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>s</mi><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mspace width=\"0.167em\"></mspace><mi>s</mi><mi>.</mi></mrow></math> Higidura-ekuazioa, beraz, <math display=\"block\"><mrow><mi>m</mi><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>s</mi><mo>+</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mi>.</mi></mrow></math> Ohartu <math display=\"inline\"><mi>h</mi></math> ez dela energia mekanikoa: <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mi>h</mi><mo>+</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><msup><mi>s</mi><mn>2</mn></msup></mrow></math> da, eta <math display=\"inline\"><mi>E</mi></math> ez da kontserbatzen. Aldea motorraren lanak azaltzen du: <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Ω</mi></mrow></math> mantentzeko, motorrak <math display=\"inline\"><mrow><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>φ</mi></msub><mo>=</mo><mn>2</mn><mi>m</mi><mi mathvariant=\"normal\">Ω</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><mi>s</mi><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover></mrow></math> momentua eman behar du, eta bere potentzia <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>φ</mi></msub><mo>=</mo><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover></mrow></math> da zehazki. Sistema errheonomoan Jacobiren integrala da kontserbatzen den magnitudea, ez energia."
    },
    {
     "mota": "testua",
     "html": "Oreka <math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math> betetzen den lekuan dago, hots, <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>-ren estremuan: <math display=\"block\"><mrow><msup><mi>s</mi><mo>*</mo></msup><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><msup><mi>s</mi><mo>*</mo></msup><mo>&gt;</mo><mn>0</mn></mrow></math> da <math display=\"inline\"><mrow><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo>&gt;</mo><mn>0</mn></mrow></math> den bitartean. Malgukiaren zurruntasun eraginkorra —<math display=\"inline\"><mrow><msub><mi>k</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></math>— desagertu egiten da abiadura angeluar kritiko batean: <math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></mfrac><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>≥</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></mrow></math> bada, <math display=\"inline\"><mrow><msub><mi>k</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≤</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>-k ez du minimorik <math display=\"inline\"><mrow><mi>s</mi><mo>&gt;</mo><mn>0</mn></mrow></math>-rentzat, indarra beti kanporakoa da eta partikula hoditik kanporatzen da. Aipagarria da <math display=\"inline\"><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></math> ez dela grabitatearen (<math display=\"inline\"><mi>g</mi></math>) ez malgukiaren luzera naturalaren mendekoa: <math display=\"inline\"><mi>k</mi></math>, <math display=\"inline\"><mi>m</mi></math> eta <math display=\"inline\"><mi>α</mi></math> soilik agertzen dira, kurbadura elastikoa eta zentrifugoa berdintzen baititu, hasierako tentsioa edo pisua edozein direla ere."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>&lt;</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></mrow></math> denean, <math display=\"inline\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mo>=</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo>&gt;</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><msup><mi>s</mi><mo>*</mo></msup></math> oreka egonkorra da. Bere inguruko oszilazio txikien maiztasuna <math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mfrac><mrow><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow><mi>m</mi></mfrac></msqrt><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>/</mi><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mo>,</mo></mrow></math> non <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> birarik gabeko oszilazio-maiztasuna den. <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></mrow></math> hurbildu ahala, <math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mn>0</mn></mrow></math>: modua bigundu egiten da (soft mode), eta aldi berean <math display=\"inline\"><mrow><msup><mi>s</mi><mo>*</mo></msup><mo>→</mo><mi>∞</mi></mrow></math>. Biraketak malgukia &quot;bigundu&quot; egiten du, harik eta <math display=\"inline\"><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></math>-n zurruntasuna guztiz indargabetu arte."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></mrow></math> atalasea instabilitate errotazional baten muga da. Bertan indar berreskuratzaile elastikoa eta indar zentrifugoa zehazki deuseztatzen dira, eta partikula grabitatearen osagai konstanteak soilik higiarazten du: <math display=\"inline\"><mrow><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mspace width=\"0.167em\"></mspace><mi>s</mi></mrow></math>, minimorik gabe. Modu biguna (<math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>0</mn></mrow></math>) eta oreka-erradioaren dibergentzia (<math display=\"inline\"><mrow><msup><mi>s</mi><mo>*</mo></msup><mo>→</mo><mi>∞</mi></mrow></math>) fenomeno beraren bi aurpegiak dira: sistemak perturbazio infinitesimal baten aurrean berreskuratzeko gaitasuna galtzen du. <math display=\"inline\"><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></math> gainditzean, partikula esponentzialki urruntzen da eta hoditik irteten da —haziaren oihartzuna, non biraketak ere partikula kanporatzen zuen; baina hemen atalasea malgukiak finkatzen du, ez geometria hutsak."
    },
    {
     "mota": "testua",
     "html": "Itzal dezagun motorra. Hodia masagabea denez, ardatzaren inguruko momentu angeluar osoa partikularena da eta <math display=\"inline\"><mrow><msub><mi>p</mi><mi>φ</mi></msub><mo>=</mo><mi>m</mi><msup><mi>s</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>L</mi><mi>z</mi></msub></mrow></math> kontserbatzen da; gainera, orain <math display=\"inline\"><mi>H</mi></math>-k ez du <math display=\"inline\"><mi>t</mi></math> esplizituki, beraz <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>E</mi></mrow></math> kontserbatzen da (motorrik ez, lanik ez). <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>L</mi><mi>z</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>s</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> ezabatuz, <math display=\"inline\"><mi>s</mi></math>-rako potentzial eragileak beste itxura bat hartzen du: <math display=\"block\"><mrow><msub><mi>U</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><msup><mi>s</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>s</mi><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mspace width=\"0.167em\"></mspace><mi>s</mi><mi>.</mi></mrow></math> Orain gai zentrifugoa <math display=\"inline\"><mrow><mi>+</mi><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><msup><mi>s</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da —hesi positibo bat, <math display=\"inline\"><mrow><mi>s</mi><mo>→</mo><mn>0</mn></mrow></math>-n dibergentea—, eta ez lehengo <math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><msup><mi>s</mi><mn>2</mn></msup></mrow></math> gai negatiboa. <math display=\"inline\"><mrow><msubsup><mi>U</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mo>=</mo><mn>3</mn><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><msup><mi>s</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math> da beti: oreka egonkorra da <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math> balio <strong>ororentzat</strong>, atalaserik gabe. Alde kualitatiboa zeinu-aldaketa horretan datza. <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> finkoan, biraketaren energia zinetikoa <math display=\"inline\"><mi>s</mi></math>-ren funtzio ezaguna da eta potentzial eragilean kentzen da (indar zentrifugo destabilizatzailea, motorrak elikatua); <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math> finkoan, aldiz, kanporantz joateak biraketa moteltzera behartzen du (patinatzaile batek besoak zabaltzean moteltzen den bezala) eta hesi zentrifugo egonkortzaile bat sortzen du. Motor batek energia mugagabea sar dezake sisteman; biraketa askeak, ordea, momentu angeluar finko bat erradioaren truke banatzen du. Horra mekanika analitikoak sistema bultzatuak eta askeak zein garbi bereizten dituen erakusgarri bat."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Malguki batez egonkortutako alea errail birakari batean"
    },
    {
     "mota": "testua",
     "html": "<em><math display=\"inline\"><mi>O</mi></math> puntu finkotik igarotzen den errail zuzen zurrun bat <math display=\"inline\"><mi>e</mi></math> ardatz bertikalarekiko <math display=\"inline\"><mi>β</mi></math> angelu\nkonstantea osatuz dago, eta kanpo-motor batek <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez bira arazten du ardatzaren\ninguruan. Errailean <math display=\"inline\"><mi>m</mi></math> masako alea marruskadurarik gabe labain daiteke, eta <math display=\"inline\"><mi>O</mi></math> puntura malguki ideal batez\nlotuta dago (konstantea <math display=\"inline\"><mi>k</mi></math>, luzera natural arbuiagarrikoa; hots, indarra <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>r</mi></mrow></math> errailean zehar).<span class=\"j-oin\">[Hazia:\nEcenarro, <em>Mecánica y Ondas: Problemas de Examen Resueltos y Comentados</em>, 98Feb03 (61. or.), non <math display=\"inline\"><mi>a</mi></math>\naldeko karratu birakari baten <math display=\"inline\"><mrow><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-ko diagonalean ale bat labaintzen zen, malgukirik gabe, eta orbita\nzirkular egonkorrik EZ zegoela erakusten zen. Hemen angelua <math display=\"inline\"><mi>β</mi></math> orokortu, malguki bat erantsi —orbita\negonkortu ahal izateko— eta egonkortasunaren, oszilazio-maiztasunaren zein muga-kasuen azterketa gehitu zaizkio.]</span>\nBadago grabitatea; errailak masarik ez du eta ez dago marruskadurarik. <br>\n<strong>(a)</strong> Idatzi sistemaren lagrangearra eta lortu alearen <math display=\"inline\"><mi>r</mi></math> posiziorako (errailean zehar, <math display=\"inline\"><mi>O</mi></math>-tik neurtua)\nhigidura-ekuazioa. <strong>(b)</strong> Kontserbatzen al da energia mekanikoa? Lortu hamiltondarra eta esan energia\nmekanikoarekin bat datorren. <strong>(c)</strong> Idatzi potentzial eragilea eta aurkitu orbita zirkularraren <math display=\"inline\"><msup><mi>r</mi><mo>*</mo></msup></math> posizioa\n(alea <math display=\"inline\"><mi>O</mi></math>-tik distantzia finkora, biraka). <strong>(d)</strong> Aztertu orbitaren egonkortasuna: frogatu egonkorra dela baldin\neta soilik baldin <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></math> bada —atalase hori grabitatearekiko independentea da— eta lortu\noszilazio txikien <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> maiztasuna. <strong>(e)</strong> Berreskuratu malgukirik gabeko kasua (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow></math>) eta lotu haziaren\nemaitzarekin; aztertu muga-kasuak (<math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mn>0</mn></mrow></math>) eta atalaseko jokaera.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/4d273fdad96c50c9.svg",
     "zabalera": 204
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Errail zurruna <math display=\"inline\"><mi>e</mi></math> ardatzaren inguruan <math display=\"inline\"><mi>ω</mi></math>-z biratzen da, <math display=\"inline\"><mi>β</mi></math> angelu finkoan; <math display=\"inline\"><mi>m</mi></math> alea malguki batez (<math display=\"inline\"><mi>k</mi></math>) lotuta labaintzen da errailean, <math display=\"inline\"><mi>O</mi></math>-tik <math display=\"inline\"><mi>r</mi></math> distantziara. Alea <math display=\"inline\"><mi>O</mi></math>-ren azpian marraztu da (orekaren kokapen egonkorra)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Koordenatu orokortu bakarra <math display=\"inline\"><mi>r</mi></math> da: alearen posizioa errailean zehar, <math display=\"inline\"><mi>O</mi></math>-tik neurtua (gora positibo). Errailak <math display=\"inline\"><mi>e</mi></math> ardatzarekiko <math display=\"inline\"><mi>β</mi></math> osatzen duenez, alearen altuera <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> da eta ardatzerainoko distantzia <math display=\"inline\"><mrow><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math>. Abiaduraren karratuak bi osagai elkarzut ditu —errailean zeharreko <math display=\"inline\"><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></math> eta biraketak eragindako <math display=\"inline\"><mrow><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mspace width=\"0.167em\"></mspace><mi>ω</mi></mrow></math>—, beraz <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></math>. Malgukiaren energia potentziala <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> da (luzera naturala arbuiagarria) eta grabitatearena <math display=\"inline\"><mrow><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math>; horrela, lagrangearra honela geratzen da: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mspace width=\"0.167em\"></mspace><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mi>r</mi></math>-ren Euler-Lagrange ekuaziotik higidura-ekuazioa dator: <math display=\"block\"><mrow><mi>m</mi><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>r</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mi>.</mi></mrow></math> Biraketak <math display=\"inline\"><mrow><mi>+</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mspace width=\"0.167em\"></mspace><mi>r</mi></mrow></math> &quot;indar zentrifugo&quot; gai bat eransten dio malgukiaren <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>r</mi></mrow></math> berreskuratzaileari: efektu garbia <math display=\"inline\"><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>r</mi></mrow></math> zurruntasun eragile bat da, eta hor dago problema osoaren gakoa."
    },
    {
     "mota": "testua",
     "html": "Motorrak <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ω</mi></mrow></math> konstante mantentzen duenez, biraketa denbora-menpeko lotura da (reonomoa) eta motorrak lan egiten du; ondorioz, energia mekanikoa EZ da kontserbatzen. Arrazoi formala hau da: energia zinetikoa ez da <math display=\"inline\"><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></math>-ren funtzio koadratiko homogeneoa, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>+</mo><msub><mi>T</mi><mn>0</mn></msub></mrow></math> baizik, non <math display=\"inline\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mspace width=\"0.167em\"></mspace><msup><mi>r</mi><mn>2</mn></msup></mrow></math> biraketatik datorren gaia den. <math display=\"inline\"><mi>L</mi></math>-k <math display=\"inline\"><mi>t</mi></math> esplizituki ez daukanez, ordea, Jacobiren energia-funtzioa kontserbatzen da: <math display=\"block\"><mrow><mi>h</mi><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konst. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> Momentu kanonikoan idatzita (<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></mrow></math>), hamiltondarra berdin-berdina da eta kontserbatu egiten da: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mi>.</mi></mrow></math> Baina EZ dator bat energia mekanikoarekin. Hura kalkulatuz, <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>U</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>E</mi><mo>−</mo><mi>H</mi><mo>=</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mspace width=\"0.167em\"></mspace><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mn>2</mn><msub><mi>T</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math> Hau da haziaren ii-iii galderen muina, orain malgukiarekin aberastua: <math display=\"inline\"><mi>H</mi></math> kontserbatzen da (eta higiduraren zaindari egokia da), baina <math display=\"inline\"><mi>E</mi></math>-rekiko <math display=\"inline\"><mrow><mn>2</mn><msub><mi>T</mi><mn>0</mn></msub></mrow></math>-n aldentzen da —hain zuzen, motorrak sistemari sartu edo kendu behar dion energia, biraketa konstante mantentzeko—."
    },
    {
     "mota": "testua",
     "html": "Higidura ulertzeko, <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idazten dugu, non potentzial eragilea agertzen den: <math display=\"block\"><mrow><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mi>.</mi></mrow></math> Orbita zirkularrak <math display=\"inline\"><mi>r</mi></math> konstante eskatzen du (<math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>-ren oreka-puntua da, <math display=\"inline\"><mrow><msubsup><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext><mo>′</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> betetzen duena: <math display=\"block\"><mrow><msup><mi>r</mi><mo>*</mo></msup><mo>=</mo><mi>−</mi><mfrac><mrow><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow><mrow><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></mfrac><mi>.</mi></mrow></math> Ale hori <math display=\"inline\"><mi>O</mi></math>-tik <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msup><mi>r</mi><mo>*</mo></msup><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> distantzia finkora dago eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msup><mi>r</mi><mo>*</mo></msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> erradioko zirkunferentzia horizontal bat marrazten du <math display=\"inline\"><mi>ω</mi></math> abiaduraz —horra orbita zirkularra—. <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></math> denean <math display=\"inline\"><mrow><msup><mi>r</mi><mo>*</mo></msup><mo>&lt;</mo><mn>0</mn></mrow></math>: alea <math display=\"inline\"><mi>O</mi></math>-ren azpian kokatzen da, grabitateak behera eramanda."
    },
    {
     "mota": "testua",
     "html": "Egonkortasuna <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>-ren kurbadura-zeinuak erabakitzen du, <math display=\"inline\"><mrow><msubsup><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext><mo>″</mo></msubsup><mo>=</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></math>. Beraz, orbita zirkularra egonkorra da baldin eta soilik baldin <math display=\"block\"><mrow><mi>k</mi><mo>&gt;</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mi>.</mi></mrow></math> Emaitza aipagarria da: atalase hori grabitatearekiko <strong>erabat independentea</strong> da. Grabitateak orbitaren kokapena baino ez du finkatzen (<math display=\"inline\"><msup><mi>r</mi><mo>*</mo></msup></math>), inola ere ez bere egonkortasuna; malgukiaren eta &quot;indar zentrifugoaren&quot; arteko lehia hutsak erabakitzen du dena. Egonkorra denean, <math display=\"inline\"><msup><mi>r</mi><mo>*</mo></msup></math>-ren inguruko oszilazio txikiek (<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msup><mi>r</mi><mo>*</mo></msup><mo>+</mo><mi>η</mi></mrow></math>) <math display=\"inline\"><mrow><mi>m</mi><mover><mi>η</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>η</mi></mrow></math> betetzen dute, hots, maiztasun bakarreko modu normal bat: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msqrt><mfrac><mrow><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow><mi>m</mi></mfrac></msqrt><mo>=</mo><msqrt><mrow><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></msqrt><mi>.</mi></mrow></math> Malgukiaren <math display=\"inline\"><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></math> maiztasun propioa biraketak &quot;bigundu&quot; egiten du: nahikoa azkar biratuz gero (<math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><msub><mi>ω</mi><mi>c</mi></msub><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt><mi>/</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math>), <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><mn>0</mn></mrow></math> eta egonkortasuna galtzen da."
    },
    {
     "mota": "testua",
     "html": "Muga-kasuek irudia osatzen dute. <strong>(i)</strong> Malgukirik gabe (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"inline\"><mrow><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mspace width=\"0.167em\"></mspace><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> alderantzizko parabola da, beti maximo bakarra duena <math display=\"inline\"><mrow><msubsup><mi>r</mi><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo>*</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mi mathvariant=\"normal\">cos</mi><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-n; orbita zirkularra <strong>badago</strong>, baina beti <strong>ezegonkorra</strong>. <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-n <math display=\"inline\"><mrow><msubsup><mi>r</mi><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo>*</mo></msubsup><mo>=</mo><msqrt><mn>2</mn></msqrt><mspace width=\"0.167em\"></mspace><mi>g</mi><mi>/</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> ateratzen da —haziaren karratu birakariaren diagonaleko emaitza bera, alearena—: hura da, hain zuzen, gure sistemaren <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow></math> muga. Malgukia da haziaren gailuari orbita egonkor bat izateko falta zitzaion osagaia. <strong>(ii)</strong> <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mn>0</mn></mrow></math> (erraila ardatzarekin lerrokatua): <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>→</mo><mn>0</mn></mrow></math>, biraketak ez du errailean eragiten eta sistema beti egonkorra da (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>); alea ardatzean zehar oszilatzen da soilik. <strong>(iii)</strong> <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> (errail horizontala): biguntze zentrifugoa gehienezkoa da eta <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> behar da. <strong>(iv)</strong> <math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mn>0</mn></mrow></math> (motorra geldi): <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>r</mi><mo>*</mo></msup><mo>→</mo><mi>−</mi><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mi>/</mi><mi>k</mi></mrow></math>, malgukiak grabitatepean hartzen duen luzapen estatikoa. <strong>(v)</strong> Atalasean bertan (<math display=\"inline\"><mrow><mi>k</mi><mo>→</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo></msup></mrow></math>): <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msup><mi>r</mi><mo>*</mo></msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>→</mo><mi>∞</mi></mrow></math> —oreka-puntua infinitura ihes egiten du eta alea errailetik kanporatzen da—; adarkatze garbi bat da, indar zentrifugoak malgukia gainditzen duen unea."
    },
    {
     "mota": "testua",
     "html": "Laburbilduz, gailu bultzatu honek haziaren ideia bere muturreraino darama. Errail birakari huts batean (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow></math>) &quot;indar zentrifugoaren&quot; <math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mspace width=\"0.167em\"></mspace><msup><mi>r</mi><mn>2</mn></msup></mrow></math> potentzialak gailur bat baino ez du (maximo bat), eta orbita oro ezegonkor bihurtzen du; malguki batek <math display=\"inline\"><mrow><mi>+</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> gai berreskuratzailea gehitzen dio, eta <math display=\"inline\"><mi>k</mi></math>-k zentrifugoa gainditzen duenean potentzial-putzu egonkor bat sortzen da. Erreferentzia birakari ez-inertzialean irakurketa gardena da: alearen gainean <math display=\"inline\"><mrow><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> indar zentrifugoak (ardatzetik kanpora) eragiten du, zeinaren errail-osagaia <math display=\"inline\"><mrow><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>r</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></math> den, eta hori malgukiaren <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>r</mi></mrow></math> indarraren aurka lehiatzen den errailean zehar; grabitateak oreka lekualdatu baino ez du egiten. <math display=\"inline\"><mi>H</mi></math> (Jacobi) beti kontserbatzen da, <math display=\"inline\"><mi>E</mi></math> ez den arren; horrek erakusten du zergatik den <math display=\"inline\"><mi>H</mi></math> —eta ez <math display=\"inline\"><mi>E</mi></math>— higidura egonkorraren neurgailu zuzena sistema bultzatu hauetan."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aro birakari askea eta partikula"
    },
    {
     "mota": "testua",
     "html": "<em><math display=\"inline\"><mi>M</mi></math> masako eta <math display=\"inline\"><mi>a</mi></math> erradioko aro zirkular leun bat bere diametro bertikalaren inguruan marruskadurarik\ngabe bira daiteke. Aroaren abiadura angeluarra <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> den unean, <math display=\"inline\"><mi>m</mi></math> masako partikula bat pausagunetik\n(aroarekiko) hasten da labaintzen aroaren goiko puntutik.<span class=\"j-oin\">[Hazia: Ecenarro, <em>Mecánica y Ondas:\nProblemas de Examen Resueltos y Comentados</em>, 98Jun01 (65. or.); jatorrizkoak (a) eta (b) baino ez zituen\neskatzen. Hemen potentzial eragilearen laburpena, beheko puntuko emaitza eta aro bultzatuarekiko alderaketa\nerantsi zaizkio.]</span> <br>\n<strong>(a)</strong> Mekanika lagrangearra erabiliz, aurkitu aroaren <math display=\"inline\"><mi>ω</mi></math> abiadura angeluarra partikula diametro\nhorizontalaren muturretik pasatzean. <strong>(b)</strong> Aurkitu partikularen abiadura aroarekiko une horretan. <strong>(c)</strong> Idatzi\n<math display=\"inline\"><mi>θ</mi></math>-rako dimentsio bakarreko problema baliokidea (potentzial eragilea). <strong>(d)</strong> Frogatu partikula aroaren\nbeheko punturaino iristen dela <math display=\"inline\"><mrow><mn>2</mn><msqrt><mrow><mi>g</mi><mi>a</mi></mrow></msqrt></mrow></math> abiadurarekin (aroarekiko), <math display=\"inline\"><mi>M</mi></math>-ren eta <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>-ren\nindependentea. <strong>(e)</strong> Alderatu aroa <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> konstantez bultzatuko balitz gertatuko litzatekeenarekin.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/cde785f8a6d7d2c0.svg",
     "zabalera": 224
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aroa <math display=\"inline\"><mi>ω</mi></math> abiaduraz biratzen da bere diametro bertikalaren inguruan; <math display=\"inline\"><mi>θ</mi></math> goiko puntutik neurtzen da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bi koordenatu orokortu hartzen ditugu: <math display=\"inline\"><mi>φ</mi></math> (aroaren biraketa ardatz bertikalaren inguruan) eta <math display=\"inline\"><mi>θ</mi></math> (partikularen posizioa aroan, goiko puntutik neurtua). Partikula ardatzetik <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> distantziara dago eta bere altuera <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> da; bere abiaduraren karratua, aroan zeharreko <math display=\"inline\"><mrow><mi>a</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> osagaia eta biraketak eragindako <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> osagaia elkarzutak direnez, <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mspace width=\"0.167em\"></mspace><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da. Aroaren inertzia-momentua bere diametroaren inguruan <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math> da. Lagrangearra, beraz: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mspace width=\"0.167em\"></mspace><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mi>φ</mi></math> ziklikoa da: dagokion momentu kanonikoa (ardatzaren inguruko momentu angeluar osoa) higidura-konstantea da. Hasieran <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> (goian, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>) eta <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> direnez, <math display=\"block\"><mrow><msup><mi>a</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><msub><mi>ω</mi><mn>0</mn></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>M</mi><msub><mi>ω</mi><mn>0</mn></msub></mrow><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></mfrac><mi>.</mi></mrow></math> Diametro horizontalean (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>), aroaren abiadura angeluarra hau da: <math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>M</mi><msub><mi>ω</mi><mn>0</mn></msub></mrow><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math> Sistema naturala denez eta <math display=\"inline\"><mi>t</mi></math> esplizituki agertzen ez denez, energia mekanikoa kontserbatzen da. Hasierako balioa <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>+</mo><mi>m</mi><mi>g</mi><mi>a</mi></mrow></math> da (goian, partikula geldi eta ardatzean). <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>-n energia-berdintzatik <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> askatuz, partikularen abiadura aroarekiko —hots, <math display=\"inline\"><mrow><mi>a</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>—: <math display=\"block\"><mrow><msub><mi>v</mi><mrow><mtext mathvariant=\"normal\">erl </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>a</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msqrt><mrow><mfrac><mrow><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mrow><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></mfrac><mo>+</mo><mn>2</mn><mi>g</mi><mi>a</mi></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Higidura hobeto ulertzeko, <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> ezaba dezakegu momentu angeluarraren bidez eta <math display=\"inline\"><mi>θ</mi></math>-rako dimentsio bakarreko problema baliokidea lortu. Energia honela idazten da, <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msup><mi>M</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mrow><mrow><mn>4</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>+</mo><mi>m</mi><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math> non lehen gaia aro askearen inertziatik datorren &quot;indar zentrifugoaren&quot; potentziala den. Partikula <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math> potentzialean higitzen den masa bakar baten gisa deskriba daiteke orain."
    },
    {
     "mota": "testua",
     "html": "Emaitza dotore bat ateratzen da beheko puntuan. Bertan (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi></mrow></math>) berriro <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> da, beraz <math display=\"inline\"><mrow><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><mi>m</mi><mi>g</mi><mi>a</mi></mrow></math>, eta <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mi>E</mi><mo>−</mo><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>2</mn><mi>m</mi><mi>g</mi><mi>a</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>a</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><msqrt><mrow><mi>g</mi><mi>a</mi></mrow></msqrt><mi>.</mi></mrow></math> Partikula beheko punturaino <math display=\"inline\"><mrow><mn>2</mn><msqrt><mrow><mi>g</mi><mi>a</mi></mrow></msqrt></mrow></math> abiaduraz iristen da (aroarekiko), <math display=\"inline\"><mi>M</mi></math>-ren eta <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>-ren <strong>guztiz independentea</strong>. Arrazoia gardena da: goian eta behean partikula ardatzean dago (<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math>) eta ez du momentu angeluarrik garraiatzen; hortaz, aroa <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>-ra itzultzen da bi puntuetan, &quot;indar zentrifugoaren&quot; potentziala berdina da eta grabitateak askatutako <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi><mi>g</mi><mi>a</mi></mrow></math> energia osoa partikularen higidurara doa —<math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> altuera-jauziko erorketa baten baliokidea—."
    },
    {
     "mota": "testua",
     "html": "Azkenik, argigarria da aro <strong>askearen</strong> kasua aro <strong>bultzatuarenarekin</strong> alderatzea. Motor batek <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Ω</mi></mrow></math> konstante mantenduko balu, <math display=\"inline\"><mi>φ</mi></math> ez litzateke koordenatu askea izango: energia mekanikoa ez litzateke kontserbatuko (motorrak lan egiten baitu) eta partikularen potentzial eragilea <math display=\"inline\"><mrow><msubsup><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext><mrow><mtext mathvariant=\"normal\">bult </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mi>m</mi><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> litzateke, zeinak <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></mrow></math>-n adarkatzea (pitchfork) erakusten duen: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>&gt;</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></mrow></math> bada, beheko orekaz gain, ardatzetik kanpoko oreka egonkor berriak agertzen dira. Aro askean, ordea, bi higidura-konstante ditugu (<math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math> eta <math display=\"inline\"><mi>E</mi></math>) eta motorrik ez: aroa moteldu egiten da partikulak <math display=\"inline\"><mi>r</mi></math> handiagoa duenean, momentu angeluarra bien artean banatuz. Bi sistemen arteko aldea —bata bultzatua, bestea askea— mekanika analitikoak zein garbi bereizten dituen adibide bikaina da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bola-erregulatzailea: oreka erlatiboaren egonkortasuna eta modu normalak"
    },
    {
     "mota": "testua",
     "html": "<em>Bola-erregulatzaile bat (irudia) ardatz bertikal finko baten inguruan biratzen da, motor batek\nezarritako <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez. Lau barrak masagabeak dira eta <math display=\"inline\"><mi>l</mi></math> luzera berekoak: goiko\nbiek <math display=\"inline\"><mi>m</mi></math> masako bi bola eusten dituzte (bata bestearen aurrez aurre) eta beheko biek <math display=\"inline\"><mi>M</mi></math> masako gorputza,\nzeina ardatzean zehar marruskadurarik gabe labain baitaiteke. Barrek ardatz bertikalarekiko osatzen duten\n<math display=\"inline\"><mi>θ</mi></math> angelua da koordenatu orokortu bakarra.<span class=\"j-oin\">[Hazia: Ecenarro, <em>Mecánica y Ondas: Problemas\nde Examen Resueltos y Comentados</em>, 99Feb04 (94. or.). Jatorrizkoak higidura-ekuazioa eta oreka-posizioak baino\nez zituen eskatzen; hemen egonkortasuna, modu normalak, adarkatzea eta energia mekanikoaren zein Jacobiren\nintegralaren arteko bereizketa erantsi zaizkio.]</span> <br>\n<strong>(a)</strong> Formalismo lagrangearra erabiliz, lortu <math display=\"inline\"><mi>θ</mi></math>-ren higidura-ekuazioa eta identifikatu potentzial\neragile bat <math display=\"inline\"><mrow><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> haren dinamikarako. <strong>(b)</strong> Aurkitu oreka erlatiboaren posizioak eta frogatu oreka\nmakurra <math display=\"inline\"><mrow><mi>ω</mi><mo>≥</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math> denean baino ez dela existitzen; zehaztu <math display=\"inline\"><msub><mi>ω</mi><mi>c</mi></msub></math>. <strong>(c)</strong> Aztertu oreka bakoitzaren\negonkortasuna eta lortu oszilazio txikien maiztasunak (modu normalak). <strong>(d)</strong> Deskribatu <math display=\"inline\"><msub><mi>ω</mi><mi>c</mi></msub></math>-n gertatzen\nden adarkatzea (pitchfork). <strong>(e)</strong> Formalismo hamiltondarrean, erakutsi energia mekanikoa EZ dela kontserbatzen\nbaina Jacobiren integrala BAI; kalkulatu bien arteko aldea eta motorrak garatzen duen potentzia.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/23ebe7ab344e5928.svg",
     "zabalera": 165
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bola-erregulatzailea <math display=\"inline\"><mi>ω</mi></math> abiaduraz biratzen da ardatz bertikalaren inguruan; <math display=\"inline\"><mi>θ</mi></math> barrek ardatzarekiko osatzen duten angelua da, eta <math display=\"inline\"><mi>M</mi></math> gorputza ardatzean zehar bertikalki labaintzen da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Koordenatu orokortu bakartzat <math display=\"inline\"><mi>θ</mi></math> hartzen dugu; <math display=\"inline\"><mi>φ</mi></math> azimuta motorrak <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ω</mi></mrow></math> konstantera behartzen du. Bola bakoitza ardatzetik <math display=\"inline\"><mrow><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> distantziara dago, <math display=\"inline\"><mrow><mi>−</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> altueran, eta <math display=\"inline\"><mi>M</mi></math> gorputza ardatzean bertan, <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> altueran (haren kota <math display=\"inline\"><mi>θ</mi></math>-ren mende dago soilik). Bi bolen abiaduraren karratuak <math display=\"inline\"><mrow><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> ematen du, eta <math display=\"inline\"><mi>M</mi></math>-renak <math display=\"inline\"><mrow><mn>4</mn><msup><mi>l</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mspace width=\"0.167em\"></mspace><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>. Energia zinetikoa eta potentziala, beraz: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>2</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>V</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> Komeni da <math display=\"inline\"><mi>T</mi></math> bi zatitan banatzea, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>+</mo><msub><mi>T</mi><mn>0</mn></msub></mrow></math>, non <math display=\"inline\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>2</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> (<math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>-n koadratikoa) eta <math display=\"inline\"><mrow><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math> (<math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>-rekiko independentea) diren; bereizketa hori giltzarria izango da (e) atalean."
    },
    {
     "mota": "testua",
     "html": "<strong>(a)</strong> Lagrangearra <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi></mrow></math> da, eta <math display=\"inline\"><mi>θ</mi></math>-ren Euler–Lagrange ekuazioak, deribatuak eginda, honako hau ematen du: <math display=\"block\"><mrow><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>2</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>M</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>-rekiko independenteak diren gaiak potentzial eragile batean bil daitezke: <math display=\"inline\"><mi>θ</mi></math>-ren higidura <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><msup><mi>l</mi><mn>2</mn></msup><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> forma baliokidearen menpe dago, non <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mo>+</mo><mn>2</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>-ren lehen gaia —biraketaren indar zentrifugoari dagokiona, <math display=\"inline\"><mi>θ</mi></math> handitzean beheratzen dena— eta grabitatearena —<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>-n minimoa— lehian daude: hor dago problemaren mamia."
    },
    {
     "mota": "testua",
     "html": "<strong>(b)</strong> Oreka erlatiboak <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>-ren puntu estazionarioak dira: <math display=\"block\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>l</mi><mo>−</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Bi adar agertzen dira: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> (posizio bertikala, <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>) eta <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi></mrow><mrow><mi>m</mi><mi>l</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msubsup><mi>ω</mi><mi>c</mi><mn>2</mn></msubsup><msup><mi>ω</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mi>c</mi></msub><mo>=</mo><msqrt><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi></mrow><mrow><mi>m</mi><mi>l</mi></mrow></mfrac></msqrt><mi>.</mi></mrow></math> Oreka makurra (<math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn></mrow></math>) <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>≤</mo><mn>1</mn></mrow></math> betetzen denean baino ez da existitzen, hots, <math display=\"inline\"><mrow><mi>ω</mi><mo>≥</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math> denean. <math display=\"inline\"><msub><mi>ω</mi><mi>c</mi></msub></math> da, beraz, erregulatzailea &quot;irekitzen&quot; hasten den atalase-abiadura."
    },
    {
     "mota": "testua",
     "html": "<strong>(c)</strong> Egonkortasuna <math display=\"inline\"><msubsup><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext><mo>″</mo></msubsup></math>-k erabakitzen du. Oreka baten inguruan <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><msub><mi>θ</mi><mo>*</mo></msub><mo>+</mo><mi>η</mi></mrow></math> jarrita eta gai ez-linealak baztertuz, <math display=\"inline\"><mrow><mn>2</mn><msup><mi>l</mi><mn>2</mn></msup><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mo>*</mo></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>η</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mo>*</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.167em\"></mspace><mi>η</mi></mrow></math> geratzen da: oszilatzaile harmoniko bat, <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>=</mo><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mo>*</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>l</mi><mn>2</mn></msup><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mo>*</mo></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> maiztasun-karratuarekin. Bigarren deribatua <math display=\"block\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>l</mi><mo>−</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>.</mi></mrow></math> Posizio bertikalean (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo>=</mo><mi>m</mi></mrow></math>), <math display=\"inline\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mi>c</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da, eta hortik maiztasuna: <math display=\"block\"><mrow><msubsup><mi mathvariant=\"normal\">Ω</mi><mtext mathvariant=\"normal\">bert</mtext><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msubsup><mi>ω</mi><mi>c</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Emaitza dotorea da: biratzeak posizio bertikalaren modua &quot;biguntzen&quot; du, eta oszilazioa zehazki <math display=\"inline\"><msub><mi>ω</mi><mi>c</mi></msub></math>-n itzaltzen da. <math display=\"inline\"><mrow><mi>ω</mi><mo>&lt;</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math> bada oreka egonkorra da; <math display=\"inline\"><mrow><mi>ω</mi><mo>&gt;</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math> bada <math display=\"inline\"><mrow><msubsup><mi mathvariant=\"normal\">Ω</mi><mtext mathvariant=\"normal\">bert</mtext><mn>2</mn></msubsup><mo>&lt;</mo><mn>0</mn></mrow></math> eta bertikala ezegonkor bihurtzen da (potentzialaren maximoa). Oreka makurrean, ordea, oreka-baldintzak lehen kortxetea ezeztatzen du, eta <math display=\"block\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msub><mi>θ</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msubsup><mi mathvariant=\"normal\">Ω</mi><mtext mathvariant=\"normal\">mak</mtext><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msub><mi>θ</mi><mn>0</mn></msub></mrow><mrow><mi>m</mi><mo>+</mo><mn>2</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msub><mi>θ</mi><mn>0</mn></msub></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>c</mi></msub><mi>/</mi><mi>ω</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>4</mn></msup></mrow></math> izanik. Existitzen den eremu osoan positiboa da: oreka makurra egonkorra da beti."
    },
    {
     "mota": "testua",
     "html": "<strong>(d)</strong> Hiru emaitzok argazki bakarrean biltzen dira. <math display=\"inline\"><mrow><mi>ω</mi><mo>&lt;</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math> denean oreka bakarra dago —bertikala, egonkorra—, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mtext mathvariant=\"normal\">bert </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msqrt><mrow><msubsup><mi>ω</mi><mi>c</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> maiztasunez oszilatzen duena. <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math>-n modua guztiz biguntzen da (<math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mtext mathvariant=\"normal\">bert </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>→</mo><mn>0</mn></mrow></math>) eta bertikala ezegonkortu egiten da; aldi berean <math display=\"inline\"><mrow><mi>±</mi><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>-ko bi adar makur egonkor jaiotzen dira. Adarkatze horrek —sistemaren <math display=\"inline\"><mrow><mi>θ</mi><mo>→</mo><mi>−</mi><mi>θ</mi></mrow></math> simetriak babestua— pitchfork itxura klasikoa dauka: oreka egonkorren kopurua batetik bira pasatzen da <math display=\"inline\"><msub><mi>ω</mi><mi>c</mi></msub></math> zeharkatzean, eta atalasetik gertu <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>≈</mo><mn>2</mn><msqrt><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mo>−</mo><msub><mi>ω</mi><mi>c</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msub><mi>ω</mi><mi>c</mi></msub></mrow></msqrt></mrow></math> moduan hazten da (erro karratuko legea). <math display=\"inline\"><mrow><mi>ω</mi><mo>≫</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math> mugan, aldiz, <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> eta <math display=\"inline\"><mrow><msubsup><mi mathvariant=\"normal\">Ω</mi><mtext mathvariant=\"normal\">mak</mtext><mn>2</mn></msubsup><mo>→</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>2</mn><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: modu makurra <math display=\"inline\"><mi>ω</mi></math>-rekin gogortzen da."
    },
    {
     "mota": "testua",
     "html": "<strong>(e)</strong> Formalismo hamiltondarrean, <math display=\"inline\"><mi>θ</mi></math>-ren momentu kanonikoa <math display=\"inline\"><mrow><msub><mi>p</mi><mi>θ</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>2</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> da, eta hamiltondarra <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><msub><mi>p</mi><mi>θ</mi></msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>L</mi><mo>=</mo><mfrac><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup><mrow><mn>4</mn><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>2</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>+</mo><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"inline\"><mi>L</mi></math>-k ez du <math display=\"inline\"><mi>t</mi></math> esplizituki agertzen (motorrak <math display=\"inline\"><mi>ω</mi></math> konstante mantentzen baitu behartuta), beraz <math display=\"inline\"><mi>H</mi></math> higidura-konstantea da. Baina <math display=\"inline\"><mi>H</mi></math> EZ da energia mekanikoa. <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>+</mo><msub><mi>T</mi><mn>0</mn></msub></mrow></math> banaketa erabiliz, <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>0</mn></msub><mo>+</mo><mi>V</mi></mrow></math> da, energia mekanikoa <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>+</mo><msub><mi>T</mi><mn>0</mn></msub><mo>+</mo><mi>V</mi></mrow></math> den bitartean; hortaz <math display=\"block\"><mrow><mi>E</mi><mo>−</mo><mi>H</mi><mo>=</mo><mn>2</mn><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>.</mi></mrow></math> Energia mekanikoa, beraz, EZ da kontserbatzen: <math display=\"inline\"><mi>θ</mi></math> aldatzean <math display=\"inline\"><mi>E</mi></math> aldatu egiten da, <math display=\"inline\"><mi>H</mi></math> konstante dirauen bitartean. Arrazoia fisikoa da: motorrak momentu bat egin behar du <math display=\"inline\"><mi>ω</mi></math> eusteko. Momentu hori <math display=\"inline\"><mrow><msub><mi>p</mi><mi>φ</mi></msub><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mi>ω</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math> momentuaren denbora-deribatua da (<math display=\"inline\"><mi>M</mi></math> ardatzean egoteak ez du ekarpenik egiten), eta motorrak garatzen duen potentzia <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mi>τ</mi><mspace width=\"0.167em\"></mspace><mi>ω</mi><mo>=</mo><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>φ</mi></msub><mspace width=\"0.167em\"></mspace><mi>ω</mi><mo>=</mo><mn>4</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Horra hazian planteatzen den galderaren erantzuna: energia mekanikoa ez da kontserbatzen, eta benetan kontserbatzen den magnitudea Jacobiren integrala <math display=\"inline\"><mi>H</mi></math> da, ez <math display=\"inline\"><mi>E</mi></math>; bien arteko aldea, <math display=\"inline\"><mrow><mn>2</mn><msub><mi>T</mi><mn>0</mn></msub></mrow></math>, motorrak biraketan trukatzen duen energia da. Sistema askea balitz (motorrik gabe), <math display=\"inline\"><msub><mi>p</mi><mi>φ</mi></msub></math> litzateke higidura-konstantea eta orduan <math display=\"inline\"><mi>E</mi></math> kontserbatuko litzateke; bultzatuan, aldiz, <math display=\"inline\"><msub><mi>p</mi><mi>φ</mi></msub></math> ez da finkoa —motorrak aldatzen du— baina <math display=\"inline\"><mi>H</mi></math> bai."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hodi birakari askea eta malgukiz lotutako barra"
    },
    {
     "mota": "testua",
     "html": "<em>Masa arbuiagarriko hodi huts luze bat bere erdiko puntuan dagoen pibot bati lotuta dago, plano\nhorizontal batean marruskadurarik gabe bira dezan (grabitateak ez du planoan eragiten). Hodiaren barnean\n<math display=\"inline\"><mi>m</mi></math> masako eta <math display=\"inline\"><mi>ℓ</mi></math> luzerako barra mehe bat labain daiteke marruskadurarik gabe. Barraren erdigunea\npibotarekin lotzen du <math display=\"inline\"><mi>k</mi></math> konstanteko malguki ideal batek (luzera naturala arbuiagarria), hodiaren\nardatzean zehar; beraz, erdigunea pibotetik <math display=\"inline\"><mi>r</mi></math> distantziara dagoenean, barrak <math display=\"inline\"><mrow><mi>k</mi><mi>r</mi></mrow></math> indar zentripetoa\njasaten du. Hasieran hodia <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> abiadura angeluarrez biratzen ari da eta barraren erdigunea <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math>\nerradioan dago, hodiarekiko geldi.<span class=\"j-oin\">[Hazia: Ecenarro, <em>Mecánica y Ondas: Problemas de Examen\nResueltos y Comentados</em>, 00Jun01 (2000ko ekaineko azterketa), non barra hodi askean labaintzen zen\nmalgukirik eta grabitaterik gabe, eta erdiko oreka ezegonkorretik ihes egiten zuen. Hemen malgukia gehitu,\nkonstanteak sinbolo bihurtu, eta oreka erlatiboa, egonkortasuna eta modu normala eskatu dira.]</span> <br>\n<strong>(a)</strong> Mekanika lagrangearra erabiliz, idatzi lagrangearra eta higidura-ekuazioak; identifikatu koordenatu\nziklikoa eta dagokion higidura-konstantea. <strong>(b)</strong> Ezabatu biraketa momentu angeluarraren bidez eta idatzi\n<math display=\"inline\"><mi>r</mi></math>-rako dimentsio bakarreko problema baliokidea (potentzial eragilea); aurkitu oreka erlatiboaren <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math>\nerradioa —barra erradio finkoan, hodia uniformeki biraka— eta frogatu orduan hodiak <math display=\"inline\"><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></math>\nabiaduraz biratzen duela, momentu angeluarraren <strong>balioaz beregaina</strong>. <strong>(c)</strong> Frogatu <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math> egonkorra dela\neta lortu erradiozko oszilazio txikien <math display=\"inline\"><msub><mi>ω</mi><mi>b</mi></msub></math> maiztasuna. <strong>(d)</strong> Aztertu erdiko posizioaren (<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math>)\negonkortasuna: frogatu <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>&lt;</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> bada egonkorra dela eta <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>&gt;</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>\nbada ezegonkorra, ardatzetik kanpoko oreka-bikote simetriko bat agertuz; egiaztatu <math display=\"inline\"><mrow><mi>k</mi><mo>→</mo><mn>0</mn></mrow></math> limiteak\nhaziaren ihesa berreskuratzen duela. <strong>(e)</strong> Aurkitu <math display=\"inline\"><msub><mi>ω</mi><mi>b</mi></msub></math> momentu angeluar handiaren limitean.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/3c0019ee1a5b617a.svg",
     "zabalera": 345
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mi>ℓ</mi></mrow></math> barra hodi birakari askean labaintzen da, <math display=\"inline\"><mi>k</mi></math> malguki batek pibotari lotua; <math display=\"inline\"><mi>r</mi></math> erdigunearen erradioa da eta <math display=\"inline\"><mi>θ</mi></math> hodiaren angelua."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bi koordenatu orokortu hartzen ditugu: <math display=\"inline\"><mi>r</mi></math> (barraren erdigunearen posizioa hodian, pibotetik neurtua) eta <math display=\"inline\"><mi>θ</mi></math> (hodiaren angelua). Barra hodiarekin lerrokatuta dagoenez, bere abiadura angeluarra <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> da eta erdiguneaz duen inertzia-momentua <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mi>/</mi><mn>12</mn></mrow></math>. Erdigunearen abiaduraren karratua <math display=\"inline\"><mrow><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> da; barraren biraketa propioa gehituz, energia zinetikoa <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>I</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> da. Malgukiaren energia potentziala <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> izanik, lagrangearra hau da: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>I</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup></mrow><mrow><mn>12</mn><mi>.</mi></mrow></mfrac></mrow></math> <math display=\"inline\"><mi>θ</mi></math> ez da esplizituki agertzen: koordenatu ziklikoa da, eta dagokion momentu kanonikoa —pibotaren inguruko momentu angeluar osoa— higidura-konstantea da: <math display=\"block\"><mrow><msub><mi>p</mi><mi>θ</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> Hasierako baldintzek <math display=\"inline\"><mrow><msub><mi>p</mi><mi>θ</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msubsup><mi>r</mi><mn>0</mn><mn>2</mn></msubsup><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> finkatzen dute. <math display=\"inline\"><mi>r</mi></math>-ren Euler-Lagrange ekuazioa, berriz, honela geratzen da <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> ordezkatuz: <math display=\"block\"><mrow><mi>m</mi><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>m</mi><mi>r</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>k</mi><mi>r</mi><mo>=</mo><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>−</mo><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Indar zentrifugoak (kanporantz) eta malgukiak (barrurantz) lehiatzen dute."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> ezabatuz, <math display=\"inline\"><mi>r</mi></math>-ren higidura potentzial eragile batean higitzen den masa bakar batena bezala idatz daiteke. Sistema itxia eta <math display=\"inline\"><mi>t</mi></math>-rekiko independentea denez, energia mekanikoa kontserbatzen da: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup><mo>,</mo></mrow></math> non lehen gaia sistemaren biraketaren inertziatik datorren &quot;indar zentrifugoaren&quot; potentziala den. Oreka erlatiboan barra erradio finkoan dago (<math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math>) eta hodia uniformeki biratzen da; <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>-ren minimoak ematen du, <math display=\"inline\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>′</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mo>*</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>+</mo><mi>I</mi><mo>=</mo><msub><mi>p</mi><mi>θ</mi></msub><msqrt><mfrac><mi>m</mi><mi>k</mi></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hots, </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>=</mo><mfrac><msub><mi>p</mi><mi>θ</mi></msub><msqrt><mrow><mi>m</mi><mi>k</mi></mrow></msqrt></mfrac><mo>−</mo><mfrac><mi>I</mi><mi>m</mi></mfrac><mi>.</mi></mrow></math> Emaitza dotorea orekako biraketa-abiaduran dago. <math display=\"inline\"><mrow><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo></msub><mo>=</mo><msub><mi>p</mi><mi>θ</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> denez eta orekak <math display=\"inline\"><mrow><mi>m</mi><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo><mn>2</mn></msubsup><mo>=</mo><mi>k</mi></mrow></math> eskatzen duenez (indar zentrifugoak <math display=\"inline\"><mrow><mi>m</mi><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo><mn>2</mn></msubsup><msub><mi>r</mi><mo>*</mo></msub></mrow></math> eta malgukiak <math display=\"inline\"><mrow><mi>k</mi><msub><mi>r</mi><mo>*</mo></msub></mrow></math> berdinduz), <math display=\"block\"><mrow><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo></msub><mo>=</mo><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mi>.</mi></mrow></math> Hodiak beti <math display=\"inline\"><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></math> abiaduraz biratzen du orekan, barraren momentu angeluarra, <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math> erradioa edo <math display=\"inline\"><mi>ℓ</mi></math> luzera edozein direla ere: bi indarrak <math display=\"inline\"><mi>r</mi></math>-rekin linealak direnez, edozein erradiotan orekatzen dira abiadura &quot;magiko&quot; horretan. Momentu angeluar handiagoak <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math> handiagoa besterik ez du ematen, ez biraketa azkarragoa."
    },
    {
     "mota": "testua",
     "html": "Egonkortasuna <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>-ren bigarren deribatuak erabakitzen du. Zuzenean deribatuz eta orekan ordezkatuz (<math display=\"inline\"><mrow><mi>m</mi><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup><mo>=</mo><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> erabiliz), gai gehienak bertan behera erortzen dira: <math display=\"block\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mo>*</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>4</mn><mi>k</mi><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup></mrow><mrow><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>+</mo><mi>I</mi></mrow></mfrac><mo>&gt;</mo><mn>0</mn><mo>,</mo></mrow></math> beti positiboa: <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math> oreka egonkorra da. Erradiozko oszilazio txikien maiztasuna —barraren &quot;arnas-modua&quot;, hodian barrurantz eta kanporantz— hau da: <math display=\"block\"><mrow><msub><mi>ω</mi><mi>b</mi></msub><mo>=</mo><msqrt><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mfrac><msub><mi>r</mi><mo>*</mo></msub><mi>m</mi></mfrac></mrow></msqrt><mo>=</mo><mn>2</mn><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><msqrt><mfrac><mrow><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup></mrow><mrow><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>+</mo><mi>I</mi></mrow></mfrac></msqrt><mi>.</mi></mrow></math> Barrak <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math> inguruan oszilatzen du, eta ziklo bakoitzean hodia bizkortu (barra barrurantz) eta moteldu (kanporantz) egiten da, <math display=\"inline\"><msub><mi>p</mi><mi>θ</mi></msub></math> gordez."
    },
    {
     "mota": "testua",
     "html": "Ardatzetik kanpoko oreka existitzeko, <math display=\"inline\"><mrow><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>&gt;</mo><mn>0</mn></mrow></math> behar da, hots, <math display=\"inline\"><mrow><msub><mi>p</mi><mi>θ</mi></msub><mo>&gt;</mo><mi>I</mi><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>. Barra hasieran erdigunetik hurbil badago (<math display=\"inline\"><mrow><msub><mi>p</mi><mi>θ</mi></msub><mo>≈</mo><mi>I</mi><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>), baldintza <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>&gt;</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> bihurtzen da. Hain zuzen, erdiko posizioaren egonkortasuna bertako kurbadurak erabakitzen du: <math display=\"block\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mo>−</mo><mfrac><mrow><mi>m</mi><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup></mrow><msup><mi>I</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>k</mi><mo>−</mo><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>,</mo></mrow></math> positiboa dena <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>&lt;</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> bada (zentroa egonkorra: barra erditik oszilatzen da, alde batetik bestera) eta negatiboa <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>&gt;</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> bada (zentroa ezegonkorra). Atalasea gaindituz gero, erdiko oreka desegonkortu eta <math display=\"inline\"><mrow><mi>±</mi><msub><mi>r</mi><mo>*</mo></msub></mrow></math> oreka-bikote egonkor simetrikoa sortzen da: barrak alde bat hautatzen du. Atalaseko abiadura <math display=\"inline\"><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></math> da berriro —abiadura magiko berak finkatzen ditu bai orekako biraketa, bai zentroaren egonkortasun-muga—. <math display=\"inline\"><mrow><mi>k</mi><mo>→</mo><mn>0</mn></mrow></math> eginez gero, atalasea zerora doa eta <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math> infinitura: malgukirik gabe zentroa beti ezegonkorra da eta barrak ihes egiten du, haziaren emaitza zehazki. Malgukiak, beraz, ezegonkortasunaren atalasea <math display=\"inline\"><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></math>-ra igotzen du eta, hortik gora, haziaren ihes librea <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math> inguruko oszilazio lotu bihurtzen du."
    },
    {
     "mota": "testua",
     "html": "Azkenik, momentu angeluarra handia denean (edo barra motza, <math display=\"inline\"><mrow><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup></mrow></math> inertzia <math display=\"inline\"><mi>I</mi></math> baino askoz handiagoa izanik), <math display=\"inline\"><mrow><msqrt><mrow><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mo>→</mo><mn>1</mn></mrow></math> eta <math display=\"block\"><mrow><msub><mi>ω</mi><mi>b</mi></msub><mo>→</mo><mn>2</mn><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mo>=</mo><mn>2</mn><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo></msub><mi>.</mi></mrow></math> Barraren arnas-modua orbita-biraketaren maiztasunaren bikoitza da limitean: kanporen dagoenean hodia gehien moteldu da, eta itzuleran bizkortu, eta erritmo hori orbitako bi aldiz errepikatzen da. Atalasetik hurbil (<math display=\"inline\"><mrow><msub><mi>r</mi><mo>*</mo></msub><mo>→</mo><mn>0</mn></mrow></math>), aldiz, modua bigundu egiten da, <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>b</mi></msub><mo>→</mo><mn>0</mn></mrow></math>, adarkatze-puntuko modu leuna. Sistema osoa bi higidura-konstantek gobernatzen dute, <math display=\"inline\"><msub><mi>p</mi><mi>θ</mi></msub></math> eta <math display=\"inline\"><mi>E</mi></math>; motorrik ez dagoenez, energia barraren erradiozko higiduraren eta hodiaren biraketaren artean joan-etorrian dabil, inoiz galdu gabe. Malguki bakar batek bereizten ditu haziaren ihes librea eta hemen sortzen den oreka biratzaile egonkorra."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lagrangear denboraren menpekoa: osziladore motelduaren higidura-konstante ezkutua"
    },
    {
     "mota": "testua",
     "html": "<em><math display=\"inline\"><mi>m</mi></math> masako partikula bat lerro zuzen batean higitzen da, esplizituki denboraren menpe dagoen\nlagrangear honen arabera:\n<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>\nnon <math display=\"inline\"><mi>m</mi></math>, <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><mi>γ</mi></math> konstante positiboak diren.<span class=\"j-oin\">[Hazia: Ecenarro, <em>Mecánica y Ondas:\nProblemas de Examen Resueltos y Comentados</em>, 00Set01 (177. or.); jatorrizkoak Hamiltonen ekuazioak eskatzen\nzituen eta <math display=\"inline\"><mi>H</mi></math> zein energia kontserbatzen ote diren galdetzen zuen, hitzez. Hemen erregimenen sailkapena,\ndisipazio-tasa esplizitua, higidura-konstante zehatz baten eraikuntza (aldagai &quot;jantziaren&quot; bidez) eta\nfase-espazioaren geometria —Liouville kanonikoa vs. uzkurdura fisikoa— erantsi zaizkio.]</span> <br>\n<strong>(a)</strong> Lortu higidura-ekuazioa formalismo lagrangearretik; identifikatu zein sistema fisiko deskribatzen duen\neta sailkatu higidura-erregimenak <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><mi>γ</mi></math>-ren arabera. <strong>(b)</strong> Eraiki <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>p</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hamiltondarra.\nHigidura-konstantea al da? Erlazionatu energia mekaniko fisikoarekin <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi></mrow></math> eta lortu <math display=\"inline\"><mi>E</mi></math>-ren\ndisipazio-tasa esplizitua. <strong>(c)</strong> Aurkitu higidura-konstante ZEHATZ bat: erakutsi <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>q</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>\naldaketak osziladore ez-moteldu batera eramaten duela, idatzi <math display=\"inline\"><mi>I</mi></math> konstantea <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>-ren funtzioan eta\negiaztatu <math display=\"inline\"><mrow><mover><mi>I</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> zuzenean. <strong>(d)</strong> Interpretatu emaitza fase-espazioan: frogatu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aldagai\nkanonikoetan azalera kontserbatzen dela (Liouville), baina <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> aldagai fisikoetan <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup></math>\nbezala uzkurtzen dela; zein da bien arteko lotura? <strong>(e)</strong> Aztertu <math display=\"inline\"><mrow><mi>γ</mi><mo>→</mo><mn>0</mn></mrow></math> limitea eta erregimen\nkritiko zein gaindimoteldua.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/1c1539282e8afd59.svg",
     "zabalera": 722
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ezkerrean, osziladore motelduaren ibilbidea fase-espazio fisikoan: barrurantz doan espirala, azalera <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup></math> bezala uzkurtuz. Eskuinean, <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mi>x</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> aldagai jantzian ibilbide bera elipse itxi bihurtzen da: <math display=\"inline\"><mi>I</mi></math> higidura-konstantearen maila-kurba."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Lagrangearrak <math display=\"inline\"><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup></math> faktore esponentziala darama; horrek denboraren jatorria hausten du eta, ikusiko dugunez, marruskadura biskosoa &quot;kamuflatzeko&quot; era dotorea da. Has gaitezen higidura-ekuazioarekin."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math>-ri dagokion momentu kanonikoa <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup></mrow></math> da. Euler-Lagrangeren ekuazioak, <math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, honako hau ematen du: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mo>&gt;</mo><mn>0</mn></mrow></math> denez sinplifikatuta, <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Marruskadura biskoso lineala duen osziladore harmoniko moteldua da: <math display=\"inline\"><mi>γ</mi></math> da moteltze-koefizientea (dimentsioz <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>T</mi></mrow></math>) eta <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> maiztasun propioa. Soluzio orokorra <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mi mathvariant=\"normal\">cos</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>B</mi><mi mathvariant=\"normal\">sin</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da, non <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msqrt><mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi>γ</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn></mrow></msqrt></mrow></math>. Hortik hiru erregimen bereizten dira: <math display=\"inline\"><mrow><mi>γ</mi><mo>&lt;</mo><mn>2</mn><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> bada, <strong>azpimoteldua</strong> (<math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> erreala, oszilazio beheranzkoa); <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>2</mn><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> bada, <strong>kritikoa</strong> (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>0</mn></mrow></math>); eta <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>2</mn><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> bada, <strong>gaindimoteldua</strong> (<math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> irudikaria, oszilaziorik gabeko itzulera)."
    },
    {
     "mota": "testua",
     "html": "Hamiltondarra eraikitzeko, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>/</mi><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup></mrow></math> askatu eta <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>p</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>L</mi></mrow></math> osatzen dugu: <math display=\"block\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>p</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mi>t</mi></math> esplizituki agertzen denez, <math display=\"inline\"><mi>H</mi></math> ez da higidura-konstantea. <math display=\"inline\"><mi>H</mi></math>-k bere buruarekiko Poisson kortxetea zero denez, <math display=\"inline\"><mrow><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>∂</mi><mi>H</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>, hots, <math display=\"block\"><mrow><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo>−</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mo>,</mo></mrow></math> oro har ez-nulua. Orain, definitu energia mekaniko fisikoa <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>x</mi><mn>2</mn></msup></mrow></math>. <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup></mrow></math> ordezkatuz berehala ikusten da erlazio gardena: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mo>=</mo><mi>E</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math> Hau da, hamiltondarra ez da energia fisikoa: energia fisikoa bider <math display=\"inline\"><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup></math> pisu-faktorea baizik. <math display=\"inline\"><mi>E</mi></math>-ren bilakaera zuzenean kalkulatuz, higidura-ekuazioa (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi></mrow></math>) baliatuz, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>E</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mi>γ</mi><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>≤</mo><mn>0</mn><mi>.</mi></mrow></math> Energia beti murrizten da (edo geldi geratzen, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> denean): <math display=\"inline\"><mrow><mi>γ</mi><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> potentziako disipazioa da. Ez <math display=\"inline\"><mi>H</mi></math> ez <math display=\"inline\"><mi>E</mi></math> ez dira kontserbatzen; baina bien ez-kontserbazioak jatorri desberdina du: <math display=\"inline\"><mi>H</mi></math>-rena <math display=\"inline\"><mrow><mi>∂</mi><mi>H</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>≠</mo><mn>0</mn></mrow></math>-ren ondorio formala da, <math display=\"inline\"><mi>E</mi></math>-rena disipazio fisiko hutsarena. Egiaztapen gurutzatua: <math display=\"inline\"><mrow><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>γ</mi><mi>E</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>γ</mi><mi>T</mi><mo>+</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo>−</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup></mrow></math>, gorago lortutakoarekin bat."
    },
    {
     "mota": "testua",
     "html": "Nahiz eta <math display=\"inline\"><mi>H</mi></math> ez izan, badago higidura-konstante zehatz bat, eta hura da problema honen bihotza. Egin <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> aldagai-aldaketa. Deribatuz, <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mfrac><mi>γ</mi><mn>2</mn></mfrac><mi>q</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>γ</mi><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><msup><mi>γ</mi><mn>2</mn></msup><mn>4</mn></mfrac><mi>q</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Hauek <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n sartu eta <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup></math> sinplifikatuz, <math display=\"inline\"><mi>γ</mi></math>-ren gai linealak zehatz-mehatz ezeztatzen dira eta osziladore <strong>ez-moteldua</strong> geratzen da: <math display=\"block\"><mrow><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><mfrac><msup><mi>γ</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>q</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mi>q</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup></math> &quot;jantziak&quot; moteltze osoa irensten du: <math display=\"inline\"><mi>q</mi></math> osziladore harmoniko puru bat da, <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> maiztasunekoa. Osziladore ez-motelduak energia kontserbatzen duenez, <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mi>q</mi><mn>2</mn></msup></mrow></math> konstantea da. <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mi>x</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> eta <math display=\"inline\"><mrow><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><mi>γ</mi><mn>2</mn></mfrac><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> itzuliz, eta <math display=\"inline\"><mrow><mfrac><msup><mi>γ</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo>+</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>=</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math> dela erabiliz, higidura-konstantea jatorrizko aldagaietan honela geratzen da: <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>γ</mi><mspace width=\"0.167em\"></mspace><mi>x</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>H</mi><mo>+</mo><mfrac><mi>γ</mi><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><mi>x</mi><mi>p</mi><mi>.</mi></mrow></math> Egiaztapen zuzena, transformaziorik gabe: deribatu <math display=\"inline\"><mi>I</mi></math> eta ordezkatu <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi></mrow></math>; <math display=\"inline\"><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></math>, <math display=\"inline\"><mrow><mi>x</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> eta <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math> gaien koefiziente guztiak banan-banan ezeztatzen dira, beraz <math display=\"inline\"><mrow><mover><mi>I</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> zehazki. Hona bitxikeria: sistema disipatiboa izanik ere —energia etengabe galtzen duena—, badu magnitude kontserbatu zehatz bat; ez da <math display=\"inline\"><mi>E</mi></math>, &quot;jantzitako&quot; osziladorearen energia baizik, <math display=\"inline\"><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup></math> pisuak denboran zehar leheneratua."
    },
    {
     "mota": "testua",
     "html": "Zergatik da hori posible? Fase-espazioaren geometriak argitzen du. Hamiltonen fluxua kanonikoa denez, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aldagaietan azalera kontserbatzen da: Liouvilleren teorema edozein hamiltondarrentzat betetzen da, <math display=\"inline\"><mi>t</mi></math>-ren menpekoa izanda ere. Aldagai fisikoetan, ordea, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> non <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, fluxua <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>v</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>γ</mi><mi>v</mi><mo>−</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi></mrow></math> da, eta bere dibergentzia <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mover><mi>v</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>v</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>γ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> negatiboa: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> azalera <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup></math> bezala uzkurtzen da, irudiko espiralak erakusten duen moduan. Bi ikuspegiak bateragarriak dira <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup></mrow></math> delako; <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aldaketaren jakobiarra <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mi>m</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mi>x</mi><mspace width=\"0.167em\"></mspace><mi>d</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup><mfrac><mrow><mi>d</mi><mi>x</mi><mspace width=\"0.167em\"></mspace><mi>d</mi><mi>p</mi></mrow><mi>m</mi></mfrac><mi>.</mi></mrow></math> Fase-espazio fisikoaren uzkurdura eta fase-espazio kanonikoaren kontserbazioa, beraz, fenomeno beraren bi aurpegi dira: <math display=\"inline\"><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup></math> faktorea da disipazioa &quot;integratzen&quot; duena eta bolumen kanonikoa leheneratzen duena —ideia bera dago <math display=\"inline\"><mi>I</mi></math> konstantearen atzean ere—. Irudian, uzkurtzen den espirala (fisikoa, gorria) eta elipse itxia (jantzia, urdina) transformazio horrek lotzen ditu."
    },
    {
     "mota": "testua",
     "html": "Azkenik, muga-kasuak. <math display=\"inline\"><mrow><mi>γ</mi><mo>→</mo><mn>0</mn></mrow></math> limitean <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>I</mi><mo>→</mo><mi>E</mi><mo>=</mo><mi>H</mi></mrow></math>: hiru magnitudeak bat datoz eta osziladore kontserbakor arrunta berreskuratzen da, non energia baita higidura-konstantea. <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>2</mn><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> kasu kritikoan <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>0</mn></mrow></math>: aldagai jantziak <math display=\"inline\"><mrow><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math> betetzen du (higidura uniformea) eta <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>; oszilazioa desagertzen da. <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>2</mn><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> denean <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>&lt;</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mi>q</mi></math> ez da oszilatzen, baina <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ω</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msup><mi>q</mi><mn>2</mn></msup></mrow></math> forma koadratikoa kontserbatu egiten da oraindik (potentzial &quot;alderantzikatu&quot; baten energia hiperbolikoa). <math display=\"inline\"><mi>I</mi></math> higidura-konstantea, hortaz, hiru erregimenetan da baliozkoa: emaitza aljebraiko sendo bat da, azpimoteldu izatetik harago —eta hori da lagrangear denboraren-menpeko batek gordetzen zuen altxorra."
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Lagrangeren ziba",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Adibide moduan, kontsidera dezagun <math display=\"inline\"><mi>O</mi></math> puntu finko baten inguruan biratzen ari den ziba astun simetrikoaren higidura (gogoratu 5.11 irudia). 5.4 atalean aztertu genuen problema hau, simetria-ardatzaren inguruan oso arin biratzen denean egin daitekeen hurbilketa batez baliatuz. Hemen ez dugu hipotesi hori egingo."
    },
    {
     "mota": "testua",
     "html": "Inertzia-indarrak ez erabiltzeko, <math display=\"inline\"><mrow><mi>O</mi><msup><mi>X</mi><mo>′</mo></msup><msup><mi>Y</mi><mo>′</mo></msup><msup><mi>Z</mi><mo>′</mo></msup></mrow></math> laborategiko sistema erabiliko dugu magnitudeak definitzeko. Hala ere, adierazpenak errazteko, puntu finkoan aukeratuko dugu triedro nagusi bat, solidoarekin batera biratzen dena, 6.13 irudian erakusten den moduan. Triedro horretaz bailatuko gara une bakoitzean proiekzioak egiteko, zeren <math display=\"inline\"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>=</mo><msub><mi>I</mi><mi>y</mi></msub></mrow></math> direnez, horrela idazten baita energia mekanikoa aipaturiko sisteman: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>x</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>ω</mi><mi>y</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>z</mi></msub><msubsup><mi>ω</mi><mi>z</mi><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Triedro nagusia eta Eulerren angeluak.",
     "src": "media/irudiak/05964a3f34322d64.svg",
     "zabalera": 168
    },
    {
     "mota": "testua",
     "html": "Solidoaren sistemaren orientazioa emateko, laborategiko sisteman neurtutako Eulerren angeluak erabiliko ditugu; horrela abiadura angeluarraren osagaiak (2.61) ekuaziokoak dira: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>x</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>z</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Bestalde, masa-zentroaren posizio-bektorea <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> bada, energia potentziala <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> da eta lagrangearra <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>x</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>z</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mi>φ</mi></math> eta <math display=\"inline\"><mi>ψ</mi></math> angeluak ziklikoak direnez, dagozkien momentu kanoniko konjugatuak higidura-konstanteak dira: <math display=\"block\"><mrow><msub><mi>p</mi><mi>φ</mi></msub><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msub><mi>I</mi><mi>z</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msub><mi>p</mi><mi>ψ</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>p</mi><mi>ψ</mi></msub><mo>=</mo><msub><mi>I</mi><mi>z</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Kanpo-indarraren momentua <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>O</mi><msup><mi>Z</mi><mo>′</mo></msup></mrow></math> ardatzekiko perpendikularra den nodo-lerroan dagoenez, <math display=\"inline\"><msub><mi>p</mi><mi>θ</mi></msub></math> da momentu kanoniko aldakor bakarra. <br> Lagrangearrean denbora esplizituki agertzen ez denez, sistema natural honen hamiltondarra energia mekaniko kontserbatua da: <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>x</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>z</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>E</mi><mi>.</mi></mrow></math> Kontserbazio-lege honetan aurreko biak erabiltzen badira <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> eta <math display=\"inline\"><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover></math> abiadurak ezabatzeko, dimentsio bakarreko problema baliokide bat lortzen dugu: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>x</mi></msub><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>φ</mi></msub><mo>−</mo><msub><mi>p</mi><mi>ψ</mi></msub><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mn>2</mn><msub><mi>I</mi><mi>x</mi></msub><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></mfrac><mo>+</mo><mfrac><msubsup><mi>p</mi><mi>ψ</mi><mn>2</mn></msubsup><mrow><mn>2</mn><msub><mi>I</mi><mi>z</mi></msub></mrow></mfrac><mo>+</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioaren grafikoa.",
     "src": "media/irudiak/aac94aec54b7e4fb.svg",
     "zabalera": 224
    },
    {
     "mota": "testua",
     "html": "1.4.3 atalean ikusi genuenez, aldagaien banantzearen metodoaz ebatz daiteke problema hau. Izan ere, <math display=\"block\"><mrow><mi>α</mi><mo>≡</mo><mfrac><mn>2</mn><msub><mi>I</mi><mi>x</mi></msub></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>−</mo><mfrac><msubsup><mi>p</mi><mi>ψ</mi><mn>2</mn></msubsup><mrow><mn>2</mn><msub><mi>I</mi><mi>z</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>g</mi><mi>R</mi></mrow><msub><mi>I</mi><mi>x</mi></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>a</mi><mo>≡</mo><mfrac><msub><mi>p</mi><mi>φ</mi></msub><msub><mi>I</mi><mi>x</mi></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>≡</mo><mfrac><msub><mi>p</mi><mi>ψ</mi></msub><msub><mi>I</mi><mi>x</mi></msub></mfrac></mrow></math> konstanteak eta <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><mi>β</mi><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mi>u</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> funtzioa definitzen badira, honela idazten da (6.156) kontserbazio-legea, aldagaitzat <math display=\"inline\"><mrow><mi>u</mi><mo>≡</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>  erabiliz: <math display=\"block\"><mrow><msup><mover><mi>u</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Hemendik lortzen den <math display=\"block\"><mrow><mi>t</mi><mo>=</mo><mi>±</mi><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><msqrt><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mfrac><mo>+</mo><mi>C</mi></mrow></math> integrala, integral eliptikoen bidez ebatz daiteke eta hortik, printzipioz, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lortzen dira. Hauekin, (6.153) kontserbazio-legetik <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta, integral baten bidez, <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lortzen dira eta (6.154) emaitzatik <math display=\"inline\"><mrow><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Problema, beraz, koadraturetara laburtzen da; baina informazio interesgarria lor daiteke integralik egin gabe. <br>  <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioaren grafikoa kubikoa da eta, <math display=\"inline\"><mrow><mi>u</mi><mo>→</mo><mi>±</mi><mi>∞</mi></mrow></math> limiteetan <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>β</mi><msup><mi>u</mi><mn>3</mn></msup></mrow></math> dugunez, 6.14 irudiko itxurakoa. Parametroen arabera, erro errealak bat edo hiru izango dira; baina <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mn>0</mn></mrow></math> denez, interesatzen zaigun <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>≤</mo><mi>u</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≤</mo><mn>1</mn></mrow></math> tartean erroak bi edo zero izango dira. Gainera, (6.160) ekuazioaren ondorioz, higidura bakarrik gerta daiteke <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><mn>0</mn></mrow></math> denean, hau da <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>≤</mo><mi>u</mi><mo>≤</mo><mn>1</mn></mrow></math> tartean bi erro daudenean. Higidura, bi erro horien artean gertatu da, hau da, <math display=\"inline\"><mi>θ</mi></math> angeluak tarte batean oszilatuko du, <strong>nutazioa</strong> deritzon higiduran."
    },
    {
     "mota": "irudia",
     "oina": "Lagrangeren ziba baten simetria-ardatzaren eboluzio batzuk.",
     "src": "media/irudiak/c8124cb5dc1d873f.svg",
     "zabalera": 309
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> simetria-ardatzaren eboluzioa azaltzeko, unitate-erradioko esferarekin duen ebakidura marraztu da 6.15 irudian, hiru kasu partikularretan. Prezesioaren <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> abiaduraren zeinua alda daiteke, baina batez beste noranzko batean biratuko da zibaren ardatza <math display=\"inline\"><mrow><mi>O</mi><msup><mi>Z</mi><mo>′</mo></msup></mrow></math> ardatz bertikalaren inguruan. Goian esan bezala, bi ardatzen arteko <math display=\"inline\"><mi>θ</mi></math> angelua ere aldatuko da<span class=\"j-oin\">[<math display=\"inline\"><mi>u</mi></math>-ren erroa bikoitza den kasu partikularretan <math display=\"inline\"><mi>θ</mi></math> konstantea da eta prezesio hutsa daukagu, 5.4 atalean bezala.]</span> eta, gainera, ziba simetria-ardatzaren inguruan biratzen ari da <math display=\"inline\"><mi>ψ</mi></math> aldatzean (<strong>espina</strong> deitzen da batzuetan biraketa hau). Gerta daitezkeen kasu guztien eztabaida sakonagoa ikusteko, [10] testuliburua erabil daiteke, adibidez."
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Legendreren transformazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Lagrangeren (6.83) ekuazioetan oinarrizko aldagai independenteak <math display=\"inline\"><mi>t</mi></math> denbora, <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> koordenatu orokortuak eta <math display=\"inline\"><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></math> abiadura orokortuak dira. Bestalde, momentu kanonikoak aipaturiko aldagaien menpean adierazten dira (6.116)  definizioan: <math display=\"block\"><mrow><msub><mi>p</mi><mi>i</mi></msub><mo>≡</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo>,</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Alderantzizkoak kalkulatuz, <math display=\"inline\"><mi>n</mi></math> definizio hauetatik <math display=\"inline\"><mi>n</mi></math> abiadura orokortuak aska daitezke <math display=\"inline\"><mi>t</mi></math> denbora, <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> koordenatu orokortu eta <math display=\"inline\"><msub><mi>p</mi><mi>i</mi></msub></math> momentu orokortuen funtzioan: <math display=\"block\"><mrow><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>p</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Hauxe da Legendreren transformazioa eta hemendik aurrera honetaz baliatuko gara magnitude fisiko guztiak oinarrizko aldagai independente berriak diren <math display=\"inline\"><mi>t</mi></math> denboraren, <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> koordenatu orokortuen eta <math display=\"inline\"><msub><mi>p</mi><mi>i</mi></msub></math> momentu orokortuen menpean idazteko. Adierazpenak arintzeko, <math display=\"inline\"><mi>n</mi></math> dimentsioko espazio abstraktuetako <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒒</mi><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>p</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> bektore-notazio laburtua erabiliko dugu askotan. Honela idazten da aipaturiko transformazioa, beraz: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Loturarik gabeko partikula koordenatu kartesiarretan"
    },
    {
     "mota": "testua",
     "html": "Kasu honetako (6.124) momentuak erabiliz, hauexek ditugu Legendreren transformazioak: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><msub><mi>p</mi><mi>x</mi></msub><mi>m</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><msub><mi>p</mi><mi>y</mi></msub><mi>m</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><msub><mi>p</mi><mi>z</mi></msub><mi>m</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Plano aldapatsu higikorra"
    },
    {
     "mota": "testua",
     "html": "6.7 irudiko sistemaren (6.117)–(6.118) momentuetatik honela askatzen dira abiadura orokortuak: <math display=\"block\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><msub><mi>p</mi><mi>r</mi></msub><mo>−</mo><msub><mi>p</mi><mi>s</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>p</mi><mi>s</mi></msub><mo>−</mo><mi>m</mi><msub><mi>p</mi><mi>r</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zein da Legendreren transformazioa pendulu matematikoaren kasuan?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hamiltondarra"
    },
    {
     "mota": "testua",
     "html": "Hemendik aurrera hamiltondarra, (6.132) barik,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>p</mi><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "izango da, non <math display=\"inline\"><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></math> abiadura orokortuak Legendreren (6.163) transformazioa erabiliz ezabatu ditugun."
    },
    {
     "mota": "testua",
     "html": "Loturarik gabeko partikula koordenatu kartesiarretan"
    },
    {
     "mota": "testua",
     "html": "(6.133) hamiltondarrean (6.165) transformazioa egiten bada, hauxe dugu: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>p</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>p</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>p</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Plano aldapatsu higikorra"
    },
    {
     "mota": "testua",
     "html": "6.7 irudiko sistemaren (6.145) hamiltondarrean (6.166)–(6.167) transformazioa eginez hauxe lortzen da: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msubsup><mi>p</mi><mi>r</mi><mn>2</mn></msubsup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>p</mi><mi>s</mi><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><mi>m</mi><msub><mi>p</mi><mi>r</mi></msub><msub><mi>p</mi><mi>s</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>−</mo><mi>m</mi><mi>g</mi><mi>s</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili Legendreren transformazioa pendulu matematikoaren kasuan."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kalkula ditzagun (6.168) hamiltondarraren deribatuak oinarrizko aldagai berri hauetan, momentuen (6.116) definizioa erabiliz: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>p</mi><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mfrac><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>p</mi><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mfrac><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>p</mi><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>j</mi></msub></mrow></mfrac><mo>−</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mfrac><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Hamiltonen ekuazio kanonikoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Lagrangeren (6.120) ekuazioak honela idazten dira (6.172) deribatuaren bidez: <math display=\"block\"><mrow><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mi>.</mi></mrow></math> Baina <math display=\"inline\"><mi>n</mi></math> ekuazio hauek momentuen eboluzioa ematen dute, baina ez koordenatuena, honetarako (6.173) ekuazioak behar baitira. Hamiltonen formalismoan higidura-ekuazioak, Lagrangeren (6.83) ekuazioen baliokideak diren ekuazio kanonikoak, honela idazten dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>i</mi></msub></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Loturarik gabeko partikula koordenatu kartesiarretan"
    },
    {
     "mota": "testua",
     "html": "(6.169) hamiltondarrari dagozkion ekuazio kanonikoak hauexek dira: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>x</mi></msub></mrow></mfrac><mo>=</mo><mfrac><msub><mi>p</mi><mi>x</mi></msub><mi>m</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>y</mi></msub></mrow></mfrac><mo>=</mo><mfrac><msub><mi>p</mi><mi>y</mi></msub><mi>m</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>z</mi></msub></mrow></mfrac><mo>=</mo><mfrac><msub><mi>p</mi><mi>z</mi></msub><mi>m</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mi mathvariant=\"bold-italic\">𝒑</mi><mi>m</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>x</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>y</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝜵</mi><mi>V</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu (6.177)–(6.178) ekuazioetatik momentuak ezabatzean <math display=\"inline\"><mrow><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝜵</mi><mi>V</mi></mrow></math> lortzen dela."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Plano aldapatsu higikorra"
    },
    {
     "mota": "testua",
     "html": "6.7 irudiko sistemaren (6.170) hamiltondarraren ekuazio kanonikoak honako hauek dira: <math display=\"block\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>r</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>p</mi><mi>r</mi></msub><mo>−</mo><msub><mi>p</mi><mi>s</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>s</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>p</mi><mi>s</mi></msub><mo>−</mo><mi>m</mi><msub><mi>p</mi><mi>r</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>r</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>r</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>s</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>s</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu Hamiltonen ekuazioak pendulu matematikoaren kasuan."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-espazioa"
    },
    {
     "mota": "testua",
     "html": "Lagrangeren formalismoan (6.83) higidura-ekuazioak bigarren ordenako <math display=\"inline\"><mi>n</mi></math> ekuazio diferentzial arrunt dira. Aldagai independentea <math display=\"inline\"><mi>t</mi></math> denbora da eta menpekoak <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> koordenatu orokortuak. Ekuazio diferentzialak ebatziz gero, <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> koordenatu orokortuen eta <math display=\"inline\"><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></math> abiadura orokortuen hastapen-baldintzen multzo bakoitzeko soluzio bat dugu, <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> koordenatu orokortuek konfigurazio-espazioan duten eboluzioa ematen duena. Adibidez, pendulu matematikoaren <math display=\"inline\"><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eboluzioa konfigurazio-espazioan kalkulatzeko, (F.23) ekuazioa ebatzi behar da hasierako <math display=\"inline\"><mi>θ</mi></math> posizioa eta <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> abiadura erabiliz. <br> Hamiltonen formalismoan (6.175)–(6.176) higidura-ekuazioak lehen ordenakoak dira, baina <math display=\"inline\"><mrow><mn>2</mn><mi>n</mi></mrow></math> denetara. Aldagai independentea <math display=\"inline\"><mi>t</mi></math> denbora da eta menpekoak <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> koordenatuak eta <math display=\"inline\"><msub><mi>p</mi><mi>i</mi></msub></math> momentu orokortuak. Eboluzioa, beraz, fase-espazioa deritzon <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>p</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> koordenatuen espazio abstraktuan gertatzen da. Hastapen-baldintzak, berriro ere, <math display=\"inline\"><mrow><mn>2</mn><mi>n</mi></mrow></math>  dira: hasierako koordenatuak eta momentuak."
    },
    {
     "mota": "irudia",
     "oina": "Pendulu matematikoaren fase-espazioa.",
     "src": "media/irudiak/63d105c36c8fc112.svg",
     "zabalera": 232
    },
    {
     "mota": "testua",
     "html": "Adibidez, pendulu matematikoaren kasuan, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> fase-espazioan sistema adierazten duen puntuaren eboluzioa ematen dute ekuazio kanonikoek. 6.16 irudian erakusten dira fase-ibilbide batzuk. <br> (6.175) ekuazioak Legendreren transformazioak dira, <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioak ematen baitizkigute. Hortik, alderantzizko <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioak askatu ondoren (6.176) ekuazioetan ordezkatzen badira, Lagrangeren bigarren ordenako <math display=\"inline\"><mi>n</mi></math> ekuazio diferentzialak berreskuratzen dira, jakina."
    },
    {
     "mota": "testua",
     "html": "Plano aldapatsu higikorra"
    },
    {
     "mota": "testua",
     "html": "6.7 irudiko sistemaren (6.179) ekuazioetatik momentuak askatzen badira, (6.117)–(6.118) berreskuratzen dira eta azken hauek (6.180) ekuazioetan ordezkatuz (6.113)–(6.114) higidura-ekuazioak."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu esplizituki pendulu matematikoaren ekuazio kanonikoetatik momentua ezabatzen bada ohiko higidura-ekuazioa berreskuratzen dela."
      }
     ]
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Aldagai dinamikoak fase-espazioan",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hamiltonen formalismoan oinarrizko aldagaien <math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>p</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> funtzio bati aldagai dinamikoa deritzo. Aldagai dinamikoen arteko kasu bereziak dira <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> koordenatuak, <math display=\"inline\"><msub><mi>p</mi><mi>i</mi></msub></math> momentuak eta <math display=\"inline\"><mi>H</mi></math> hamiltondarra, besteak beste."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Koordenatu ziklikoak eta kontserbazio-printzipioak"
    },
    {
     "mota": "testua",
     "html": "Formalismo lagrangearrean koordenatu bat ziklikoa dela esaten da lagrangearrean esplizituki agertzen ez bada, baina (6.172) erabiliz argi dago koordenatua hamiltondarrean ez agertzea dela ziklikoa izateko baldintza beharrezkoa eta nahikoa: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Horrelako kasuetan lagrangearrak eta hamiltondarrak duten simetria honi dagokion kontserbazio-printzipioa (6.119) ekuaziotik lortzen zen han eta horren ordezkoa den (6.176) ekuazioaren ondorio zuzena da hemen:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Plano aldapatsu higikorra"
    },
    {
     "mota": "testua",
     "html": "6.7 irudiko sisteman <math display=\"inline\"><mi>r</mi></math> koordenatua ziklikoa da eta, 310. orrian ere esan bezala, dagokion (6.117) momentu kanoniko konjugatua higidura-konstantea da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hamiltondarraren kontserbazio-printzipioa"
    },
    {
     "mota": "testua",
     "html": "Hamiltondarraren kontserbazio-legea ikusi baino lehenago, azter dezagun aldagai dinamiko baten eboluzio-ekuazioa: <math display=\"block\"><mrow><mover><mi>F</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>i</mi></msub></mrow></mfrac><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>i</mi></msub></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Adierazpen honetan <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>H</mi></mrow></math> egiten badugu, <math display=\"block\"><mrow><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mrow></math> lortzen dugu eta, (6.171)  gogoratuz: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>H</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math> Ondorioz, <em>hamiltondarra higidura-konstantea da baldin eta soilik baldin denboraren funtzio esplizitua ez bada edo, gauza bera dena, denbora ez bada esplizituki agertzen lagrangearrean</em>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Penduluaren kasuan hamiltondarra higidura-konstantea eta energia mekanikoaren berdina da: <math display=\"block\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>E</mi><mi>.</mi></mrow></math> Kontserbazio-printzipio honek fase-espazioko <math display=\"inline\"><mi>θ</mi></math> eta <math display=\"inline\"><mi>p</mi></math> aldagaien arteko erlazio bat ematen duenez, 6.16 irudiko fase-orbiten ekuazioa da. Oszilazio txikien kasuan <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>θ</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow></math> dugu eta hurbilketa honetan berreskuratzen den oszilador harmonikoaren fase-orbitak, fase-ibilbideak ere deitzen direnak, elipseak direla ikusten dugu: <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac><msup><mi>p</mi><mn>2</mn></msup><mo>+</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mi>l</mi></mrow><mn>2</mn></mfrac><msup><mi>θ</mi><mn>2</mn></msup><mo>=</mo><mi>E</mi><mo>+</mo><mi>m</mi><mi>g</mi><mi>l</mi><mi>.</mi></mrow></math> Horixe bera ikusten da 6.16 irudiko jatorriaren ingurun."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kontserbatzen al da 6.7 irudiko sistemaren hamiltondarra?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Poissonen makoak"
    },
    {
     "mota": "testua",
     "html": "(6.183) ekuazioaren batukarian oinarritzen gara <math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>G</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> aldagai dinamikoen Poissonen makoa (edo parentesia)  definitzeko:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>F</mi><mo>,</mo><mi>G</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>≡</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>G</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>i</mi></msub></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>G</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga itzazu Poissonen makoen hurrengo propietateak: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>F</mi><mo>,</mo><mi>F</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>G</mi><mo>,</mo><mi>F</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>F</mi><mo>,</mo><mi>G</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">antisimetria</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <img class=\"formula formula-d\" src=\"media/formulak/52af496d89446ec8.svg\" alt=\"[F, [G, K]] + [G, [K, F]] + [K, [F, G]] = 0, quad (#strong[Jacobiren identitatea]),\" style=\"width:35.747em;height:1.368em\" loading=\"lazy\"> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>q</mi><mi>i</mi></msub><mo>,</mo><msub><mi>q</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mi>i</mi></msub><mo>,</mo><msub><mi>p</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>q</mi><mi>i</mi></msub><mo>,</mo><msub><mi>p</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>.</mi></mrow></math> (Baliokide kuantikoak diren trukatzaileek ere propietate hauek betetzen dituzte, azken emaitzan <math display=\"inline\"><mrow><mi>i</mi><mi>h</mi></mrow></math> bat sartzen bada Kroneckerren deltaren aurrean.)"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Aldagai dinamiko baten (6.183) eboluzio-ekuazioa, honela idazten da, beraz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>F</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>F</mi><mo>,</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Adierazpen honetan <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>H</mi></mrow></math> egiten badugu, (6.191)-ren ondorioz (6.184) berreskuratzen dugu. Bestalde, <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><msub><mi>q</mi><mi>i</mi></msub><mo>,</mo><msub><mi>p</mi><mi>i</mi></msub></mrow></math> eginez, Hamiltonen ekuazio kanonikoak era baliokide honetan idazten dira: <math display=\"block\"><mrow><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>q</mi><mi>i</mi></msub><mo>,</mo><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mi>i</mi></msub><mo>,</mo><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Azken ekuazioan, <math display=\"inline\"><msub><mi>p</mi><mi>i</mi></msub></math> momentu kanonikoa higidura-konstantea izateko bete behar den baldintza, hamiltondarrarekin duen makoa zero izatea dela ikusten dugu:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mi>j</mi></msub><mo>,</mo><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Orokorki, denboraren menpekotasun esplizpiturik gabeko <math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> aldagai dinamikoaren eboluzio-ekuazioa <math display=\"block\"><mrow><mover><mi>F</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>F</mi><mo>,</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> denez, <em><math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> higidura-konstantea izango da baldin eta soilik baldin hamiltondarrarekin duen makoa zero bada</em>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aztertu hurrengo aldagai dinamikoa higidura-konstantea den 6.7 irudiko sisteman: <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>M</mi><msubsup><mi>p</mi><mi>s</mi><mn>2</mn></msubsup><mo>+</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mi>p</mi><mi>s</mi><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>p</mi><mi>r</mi></msub><msub><mi>p</mi><mi>s</mi></msub><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>−</mo><mn>2</mn><mi>m</mi><mi>g</mi><mi>s</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Liouvilleren teorema"
    },
    {
     "mota": "testua",
     "html": "Kalkuluak errazteko, eman dezagun sistema mekanikoak askatasun-gradu bakarra duela; fase-espazioaren dimentsioa 2 izango da, beraz. Kasu berezi honetako fase-planoaren azaleraren (eta kasu orokorrean, fase-espazioaren hipertumenaren) eboluzioa aztertzeko, ikus dezagun nola aldatzen den higiduran zehar 6.17 irudiko <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eremu bat<span class=\"j-oin\">[Ikus  simulazioa.]</span>. <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntua <math display=\"inline\"><msup><mi>t</mi><mo>′</mo></msup></math> aldiunean <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>q</mi><mo>′</mo></msup><mo>,</mo><msup><mi>p</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> puntuan egongo da, baldin eta <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioek sistemaren soluzio bat osatzen badute: <math display=\"block\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>p</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>q</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>q</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>p</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Fase-espazioko eremu baten eboluzioa.",
     "src": "media/irudiak/2706f2ac548fbceb.svg",
     "zabalera": 165
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi>t</mi><mo>′</mo></msup></math> aldiunean <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eremuko puntuak <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> delakoan egongo dira, eta azken honen azalera hurrengoa izango da: <math display=\"block\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mo>∫</mo><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi>d</mi><msup><mi>q</mi><mo>′</mo></msup><mi>d</mi><msup><mi>p</mi><mo>′</mo></msup><mo>=</mo><msub><mo>∫</mo><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mfrac><mrow><mi>∂</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>q</mi><mi>d</mi><mi>p</mi><mi>.</mi></mrow></math> Integrala <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> koordenatu konstanteen bidez adierazteko, aldagai-aldaketa egokia egin dugu bigarren integralean; horrela, <math display=\"inline\"><msup><mi>t</mi><mo>′</mo></msup></math> aldagaiarekiko menpekotasuna integrazio-eremutik integrakizunera igarotzen da eta bertan errazago deribatzen da, azaleraren aldaketa kalkulatzeko: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>S</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><msup><mi>t</mi><mo>′</mo></msup></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></msub><mo>=</mo><msub><mo>∫</mo><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>q</mi><mi>d</mi><mi>p</mi><mo>,</mo></mrow></math> non integrakizuna jacobiarraren deribatua den, <math display=\"block\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><msup><mi>t</mi><mo>′</mo></msup></mrow></mfrac><mfrac><mrow><mi>∂</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></msub><mi>.</mi></mrow></math> Hau erraz kalkulatzen da (6.203) eta (6.204)  erabiliz: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><msup><mi>t</mi><mo>′</mo></msup></mrow></mfrac><msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>q</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>p</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>ψ</mi></mrow><mrow><mi>∂</mi><mi>q</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>ψ</mi></mrow><mrow><mi>∂</mi><mi>p</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></msub><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>q</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>p</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>ψ</mi></mrow><mrow><mi>∂</mi><mi>q</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>ψ</mi></mrow><mrow><mi>∂</mi><mi>p</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></msub><mo>+</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>q</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>p</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>q</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>p</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>H</mi></mrow><mrow><mi>∂</mi><mi>q</mi><mi>∂</mi><mi>p</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>H</mi></mrow><mrow><mi>∂</mi><msup><mi>p</mi><mn>2</mn></msup></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>H</mi></mrow><mrow><mi>∂</mi><msup><mi>q</mi><mn>2</mn></msup></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>H</mi></mrow><mrow><mi>∂</mi><mi>p</mi><mi>∂</mi><mi>q</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>H</mi></mrow><mrow><mi>∂</mi><mi>q</mi><mi>∂</mi><mi>p</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>H</mi></mrow><mrow><mi>∂</mi><mi>p</mi><mi>∂</mi><mi>q</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> Askatasun-gradu guztietarako betetzen den emaitza honen orokorpena, mekanika estatistikoan garrantzi handia duen Liouvilleren teorema da: <em>fase-espazioaren hipertumena higidura-konstantea da</em>. Hastapen-baldintza desberdinei dagozkien fase-espazioko puntuak, 10.7.1 ataleko fluido konprimaezinen antzera higitzen dira: horrexegatik, jario hamiltondarra deitzen da higidura (abstraktu) hau batzuetan."
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Problema ebatziak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Pendulu baliokidea"
    },
    {
     "mota": "testua",
     "html": "<em>Irudiko esfera gainazal hemisferiko batean ari da higitzen labainketarik gabe, plano bertikal batean.\nKalkulatu higidura lauaren ekuazioa(k) eta oszilazio txikien maiztasuna.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/e03da5b54547b154.svg",
     "zabalera": 239
    },
    {
     "mota": "testua",
     "html": "Irudiko <math display=\"inline\"><mi>θ</mi></math> eta <math display=\"inline\"><mi>φ</mi></math> angeluen arteko erlazioa ikusteko labainketarik ez dagoela erabili behar da bolatxoaren zentroaren abiadura esferaren erditik eta ukipen-puntu gelditik kalkulatzeko: <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mi>a</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Hau eta <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>2</mn><mn>5</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math> inertzia-momentua erabiliz, honela planteatzen da problema, koordenatu orokortutzat <math display=\"inline\"><mi>φ</mi></math>  aukeratuz: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>I</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>5</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mn>7</mn><mn>10</mn></mfrac><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>7</mn><mn>10</mn></mfrac><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mn>5</mn><mi>g</mi></mrow><mrow><mn>7</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Higidura-ekuazioa, hortaz, <math display=\"inline\"><mrow><mi>l</mi><mo>≡</mo><mfrac><mn>7</mn><mn>5</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> luzerako pendulu matematikoarena da, eta problema baliokide honetaz dakiguna erabil dezakegu. Adibidez, oszilazioak txikiak badira, oszilador harmoniko bat berreskuratzen dugu eta maiztasuna honako hau da: <math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msqrt><mfrac><mi>g</mi><mi>l</mi></mfrac></msqrt><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msqrt><mfrac><mrow><mn>5</mn><mi>g</mi></mrow><mrow><mn>7</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Higidura-konstanteak"
    },
    {
     "mota": "testua",
     "html": "<em>Irudiko sisteman blokearen eta zoruaren arteko marruskadura arbuiagarria da eta bi masak berdinak\ndira. Hasierako aldiunean hagatxoa bertikalean zegoen eta sistema pausagunean. Aurki itzazu\nhigidura-ekuazioak eta, kontserbazio-printzipioak erabiliz, adieraz ezazu <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> abiadura <math display=\"inline\"><mi>θ</mi></math>\nangeluaren menpean. Nolakoak izango dira abiadurak <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> denean?</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/6bbbe511262ff67f.svg",
     "zabalera": 148
    },
    {
     "mota": "testua",
     "html": "Blokearen zentroaren abzisa <math display=\"inline\"><mi>x</mi></math> bada, hagatxoaren masa-zentroaren koordenatuak honako hauek dira: <math display=\"block\"><mrow><mi>X</mi><mo>=</mo><mi>x</mi><mo>+</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>Y</mi><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> Hagatxoaren energia zinetikoan bi gai agertzen zaizkigu: masa-zentroaren translazioari dagokion <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>Y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> gaia eta <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>24</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> biraketa-energia. Ondorioz, honela adierazten da lagrangearra: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>l</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> Lagrangeren ekuazioak hurrengoak dira: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>m</mi><mi>l</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mi>x</mi></math> koordenatua ziklikoa denez, dagokion momentu kanonikoa, <math display=\"inline\"><mrow><msub><mi>p</mi><mi>x</mi></msub><mo>=</mo><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, higidura-konstantea izango da. Sistema naturala izateaz gain, lagrangearrean denbora esplizituki agertzen ez denez, energia mekanikoa hamiltondarraren berdina eta higidura-konstantea da. Bi higidura-konstante hauen balioak hastapen-baldintzen bidez kalkulatzen badira, honela idazten dira bi kontserbazio-legeak: <math display=\"block\"><mrow><mn>2</mn><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>l</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mi>.</mi></mrow></math> (Masa-zentroaren abzisa ez dela aldatuko adierazten du lehenengo ekuazioak.) Hemendik erraz askatzen dira abiadurak: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mfrac><mi>l</mi><mn>4</mn></mfrac><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><munder><mo>→</mo><mrow><mi>θ</mi><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></munder><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msqrt><mrow><mfrac><mrow><mn>24</mn><mi>g</mi></mrow><mi>l</mi></mfrac><mfrac><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>8</mn><mo>−</mo><mn>3</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></mfrac></mrow></msqrt><munder><mo>→</mo><mrow><mi>θ</mi><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></munder><msqrt><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mi>l</mi></mfrac></msqrt><mi>.</mi></mrow></math> Hagatxoaren zentroaren abiadura <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> denean hurrengoa da: <math display=\"block\"><mrow><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>Y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msqrt><mrow><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>g</mi><mi>l</mi></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oreka erlatiboa"
    },
    {
     "mota": "testua",
     "html": "<em>Irudiko zirkunferentzia <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez ari da biratzen bere diametro\nbertikalaren inguruan. Demagun partikula puntual bat zirkunferentzian zehar higi daitekeela marruskadurarik\ngabe. Aurki bedi dagokion higidura-ekuazioa. Konstantea al da partikularen energia? Zein puntutan egon\ndaiteke oreka erlatiboan? Egonkorra al da aipaturiko oreka? Zein da oreka erlatibo egonkorreko puntuen\ninguruko oszilazio txikien maiztasuna?</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/eb87e6622bc12cd3.svg",
     "zabalera": 88
    },
    {
     "mota": "testua",
     "html": "Koordenatu orokortutzat beheko puntutik neurturiko angelua aukeratzen badugu, honela idazten dira lagrangearra eta higidura-ekuazioa: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>R</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>m</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>m</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><mfrac><mi>g</mi><mi>R</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> eta 1.6.3 problema berreskuratzen da. <br> Higidura-ekuazioa <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub></mrow></math> oreka-puntuaren inguruan garatzen badugu, <math display=\"block\"><mrow><mi>m</mi><mover><mi>ψ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ψ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ψ</mi><mo>≡</mo><mi>θ</mi><mo>−</mo><msub><mi>θ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> geratzen da hurbilketa linealean eta, oszilador harmonikoaren (1.90) ekuazioarekin alderatuz, oszilazio txikien maiztasuna ondokoa dela ikusten dugu: <math display=\"block\"><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msqrt><mrow><msup><mi>V</mi><mo>″</mo></msup><mfrac><msub><mi>θ</mi><mn>0</mn></msub><mi>m</mi></mfrac></mrow></msqrt><mi>.</mi></mrow></math> Gure kasuan, 1.6.3 problheman aurkitu genituen oreka egonkorraren konfigurazioen inguruko maiztasunak hurrengoak dira: <math display=\"block\"><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msqrt><mrow><msup><mi>V</mi><mo>″</mo></msup><mfrac><mn>0</mn><mi>m</mi></mfrac></mrow></msqrt><mo>=</mo><mfrac><msub><mi>ω</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mfrac></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mo>&lt;</mo><msub><mi>ω</mi><mn>0</mn></msub><mo>≡</mo><msqrt><mfrac><mi>g</mi><mi>R</mi></mfrac></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mo>±</mo></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msqrt><mrow><msup><mi>V</mi><mo>″</mo></msup><mfrac><msub><mi>θ</mi><mo>±</mo></msub><mi>m</mi></mfrac></mrow></msqrt><mo>=</mo><mfrac><mi>ω</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msubsup><mi>ω</mi><mn>0</mn><mn>4</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mfrac></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mo>&gt;</mo><msub><mi>ω</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ω</mi><mo>⇔</mo><mi>φ</mi><mo>=</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub></mrow></math> lotura higikorra denez, sistema ez da naturala eta hamiltondarra ez da energia mekanikoa: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><msup><mi>R</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>E</mi><mo>−</mo><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>.</mi></mrow></math> Hamiltondarra kontserbatzen da (<math display=\"inline\"><mrow><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>), baina energia mekanikoa ez, oro har, <math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> ez baita zero. Energia aldatu egingo da, kanpoko motor bat behar delako <math display=\"inline\"><mi>ω</mi></math> konstante mantentzeko."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema baliokideak"
    },
    {
     "mota": "testua",
     "html": "<em>Partikula puntual bat irudiko kono bertikalaren barruko gainazal leunean ari da higitzen grabitatearen\neraginpean. Aurkitu higidura-konstanteak. Planteatu dimentsio bakarreko problema baliokidea eta horren bidez\ndeskribatu kualitatiboki partikularen higidura.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/c52caf68bbb7c12b.svg",
     "zabalera": 173
    },
    {
     "mota": "testua",
     "html": "Koordenatu esferikoetan lotura <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>α</mi></mrow></math> denez, honela idazten da lagrangearra: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>,</mo></mrow></math> <math display=\"inline\"><mi>φ</mi></math> ziklikoa da eta dagokion momentu kanonikoa (ardatz bertikalaren inguruko momentu angeluarra) higidura-konstantea: <math display=\"block\"><mrow><msub><mi>p</mi><mi>φ</mi></msub><mo>=</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><msub><mi>p</mi><mi>φ</mi></msub><mrow><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mi>.</mi></mrow></math> Bestalde sistema naturala da eta lagrangearrean <math display=\"inline\"><mi>t</mi></math> ez da esplizituki agertzen; beraz, energia mekanikoa hamiltondarraren berdina eta higidura-konstantea da: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mi>.</mi></mrow></math> Momentu angeluarraren bidez <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> ezabatzen badugu, dimentsio bakarreko problema lortzen da: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>+</mo><mfrac><msubsup><mi>p</mi><mi>φ</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>k</mi><mo>≡</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>L</mi><mo>≡</mo><msub><mi>p</mi><mi>φ</mi></msub><mi>/</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> definizioekin, 4.3.4 atalean aztertu genuen problema elastikoaren eboluzio erradiala berreskuratzen dugu (eboluzio azimutalean konstante bat egongo da, <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> abiaduraren eta momentu angeluarraren arteko erlazioak desberdinak baitira) eta, ondorioz, oraingo azterketa berdina da. Dimentsio bakarreko problheman higidura bi atzerapen-puntuen arteko oszilazioa izango da eta jatorrizko problheman partikula <math display=\"inline\"><mrow><msub><mi>r</mi><mo>±</mo></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> erradioko zirkunferentzia horizontalen artean higituko da konoan. Gainera, energia potentzial eraginkorraren minimoan dugun dimentsio bakarreko problemaren oreka-puntu egonkorra, orbita zirkular horizontal egonkorrari dagokion jatorrizko problemari."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<em>Gauge</em> aldaezintasuna"
    },
    {
     "mota": "testua",
     "html": "<em>Dakigunez, energia potentzialari konstante bat batzen bazaio, indar-eremua ez da aldatzen. Lagrangeren\nekuazioek, honez gain, askoz ere zabalagoa eta garrantzitsuagoa den aldaezintasun bat erakusten dute:\nlagrangearrari <math display=\"inline\"><mrow><mi>G</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><msub><mi>q</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> egiturako edozein funtzioren deribatu osoa batzen bazaio,\nLagrangeren ekuazioak ez dira aldatzen. Froga ezazu zuzenean Lagrangeren higidura-ekuazio berberak lortzen\ndirela <math display=\"inline\"><mi>L</mi></math> eta <math display=\"inline\"><mrow><mi>L</mi><mo>+</mo><mi>d</mi><mi>G</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math> lagrangearretatik. Frogatu berriro emaitza Hamiltonen printzipioaren\nbidez.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/853b8a06811db6b4.svg",
     "zabalera": 163
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "6.18 IRUDIA   Energia potentzial eraginkorra eta orbita bat."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Deribatu osoaren definizioaren ondorioz, hauxe dugu: <math display=\"block\"><mrow><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>G</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><mi>∂</mi><mi>G</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>G</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>G</mi></mrow><mrow><mi>∂</mi><mi>t</mi><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>G</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>G</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>G</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Hortaz, Lagrangeren ekuazioetan <math display=\"inline\"><mi>L</mi></math> eta <math display=\"inline\"><mrow><mi>L</mi><mo>+</mo><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover></mrow></math> erabiliz gauza bera lortuko da: bi lagrangearrak baliokideak dira. <br> Bestalde, Hamiltonen printzipioaz baliatuz, frogapena errazagoa da. Newton eta Barrowen erregela eta muturrak aldatzen ez direla erabiliz, <math display=\"block\"><mrow><mi>δ</mi><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo>+</mo><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mo>=</mo><mi>δ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>G</mi><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>t</mi><mn>2</mn></msub></msub><mo>−</mo><mi>G</mi><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>t</mi><mn>1</mn></msub></msub><mo>+</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mi>L</mi><mi>d</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>δ</mi><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mi>L</mi><mi>d</mi><mi>t</mi></mrow></math> dugu, <math display=\"inline\"><mrow><mi>δ</mi><mi>G</mi><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>t</mi><mn>1</mn></msub></msub><mo>=</mo><mi>δ</mi><mi>G</mi><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>t</mi><mn>2</mn></msub></msub><mo>=</mo><mn>0</mn></mrow></math> baitira. Ondorioz, <math display=\"inline\"><mi>L</mi></math> eta <math display=\"inline\"><mrow><mi>L</mi><mo>+</mo><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover></mrow></math> lagrangearretatik higidura-ekuazio berberak lortuko dira. (Ikus, halaber, 6.91 problema.)"
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Loturak eta koordenatu orokortuak</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Koordenatu orokortuak aztertu ondoren, errazagoa al da 1.5 problema?"
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
       "html": "Elipseak marrazteko erabiltzen zen XIX. mendean 6.19 irudiko ezkerreko tresna. Hagatxoak arkatz bat du punta batean eta bi torloju jartzen dira punta horretatik <math display=\"inline\"><mi>a</mi></math> eta <math display=\"inline\"><mi>b</mi></math> distantzietara. Torlojuak bi kanal elkarzuten barrena higi daitezke. Aukeratu koordenatu orokortu egokia eta frogatu arkatzaren ibilbidea eliptikoa dela. Zein da elipsearen eszentrikotasuna?"
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
       "html": "Nolako kurbak marrazten ziren 6.19 irudiko eskuineko tresnaren bidez?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Estatika analitikoa</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko hagatxoa hemisferio leun batean dago. Zeintzuk dira hagatxoaren oreka-posizio egonkorrak? Eztabaidatu <math display=\"inline\"><mrow><mi>l</mi><mi>/</mi><mi>R</mi></mrow></math> zatidura aldatzean gertatzen dena.  "
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
       "html": "Irudiko katilu hemisferikoan hagatxo bat jartzen dugu. Katiluak eta hagatxoak masa berdinak badituzte eta marruskadura arbuiagarria bada, zein da sistemaren oreka-posizioa?  "
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
       "html": "Irudiko bi masak hagatxo arin batez loturik daude. Sistema hemisferio huts batean kokatzen bada, zein izango da oreka-posizioa? Egonkorra al da?    "
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
       "html": "Hagatxo bat marruskadurarik gabe higi daiteke plano bertikalean irudiko zulo simetrikoan. Hiru oreka-posizio daude. Froga ezazu oreka-posizio horizontala ezegonkorra dela, beste biak egonkorrak badira.    "
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
       "html": "Hagatxo bat marruskadurarik gabe higi daiteke plano bertikalean irudiko zulo parabolikoan. Hagatxoaren luzera <math display=\"inline\"><mi>l</mi></math> da eta zuloaren ekuazioa <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mi>a</mi></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Froga ezazu ukipen-puntuen abzisak honako hauek direla, koordenatu orokortutzat horizontalaren eta hagatxoaren arteko <math display=\"inline\"><mi>θ</mi></math> angelua aukeratzen bada: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>∓</mo><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math> Eztabaidatu oreka egonkorraren eta ezegonkorraren konfigurazioak. Iruzkina egin 6.7 problemari hemengo testuinguruan.    "
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
       "html": "Ebatzi 5.29 problema mekanika analitikoa erabiliz. Eztabaidatu oreka-puntuen egonkortasuna. <br>  <em>Oharra</em>: Ez dago labainketarik."
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
       "html": "Zilindroerdi homogeneo bat jartzen da plano aldapatsu batean, irudian erakusten den moduan. <br> (a) Zilindroerdia labaindu gabe higitzeko behar den bezain handia bada planoarekiko marruskadura estatikoa, zein da zilindroerdiaren simetria-ardatzaren eta bertikalaren arteko <math display=\"inline\"><mi>φ</mi></math> angelua orekan? <br> (b) Zer gertatuko da, <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math> horizontalean dagoen orekatik hasita, planoaren malda astiro-astiro handitzean, marruskadura estatikoaren koefizientea <math display=\"inline\"><mi>μ</mi></math> bada? <br>  <em>Iradokizuna</em>: Kalkulatu nola higitzen den <math display=\"inline\"><mi>P</mi></math> ukipen-zuzena <math display=\"inline\"><mi>φ</mi></math> aldatzean. Gogoratu 5.28 problema.  "
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
       "html": "Ebatzi 5.30 problema Torricelliren printzipioaren bidez."
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
       "html": "Bi hagatxo homogeneo elkarzut berdinez osaturiko konpas baten punta bat soka baten bidez esekitzen da, irudian erakusten den bezala. Kalkulatu oreka-posizioak eta aztertu euren egonkortasuna."
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
       "html": "Irudiko txirrika bere zentrotik pasatzen den ardatz perpendikular horizontalaren inguruan bira daiteke oztoporik gabe. Perimetroan <math display=\"inline\"><mi>M</mi></math> masako partikula bat itsatsi da eta hari mehe arin bat biribilkatu da. Hariaren mutur askean <math display=\"inline\"><mi>m</mi></math> masa eseki da. Aztertu noiz egon daitekeen orekan sistema hau. Kalkulatu oreka-posizioa(k) eta eztabaidatu bere(n) egonkortasuna. Zer aldatzen da zure erantzunetan txirrikaren masa kontuan hartzen bada?    "
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
       "html": "Irudiko bi barra plano bertikal berean higi daitezke altuera berdinetan jarritako artikulazioen inguruan. <math display=\"inline\"><mi>L</mi></math> luzerako barra astuna <math display=\"inline\"><mi>d</mi></math> luzerako hagatxo arinaren mutur askearen gainean dago. Marruskadura arbuiagarria da barren artean eta artikulazioetan. Marraztu oreka-konfigurazioa(k) eta eztabaidatu bere(n) egonkortasuna. <br>  <em>Oharra</em>: <math display=\"inline\"><mrow><mi>L</mi><mo>&gt;</mo><mi>a</mi><mo>+</mo><mi>d</mi></mrow></math> da.  "
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
       "html": "Irudiko txirrika homogeneoan biribilkatuta dagoen soka batetik eseki da <math display=\"inline\"><mi>m</mi></math> masako blokea. Plano aldapatsuarekiko marruskadurari esker, sistema orekan dago. Zein da <math display=\"inline\"><mi>θ</mi></math> angelua? Nolakoa da oreka?"
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
       "html": "Irudiko artikulazioak leunak dira eta sistema orekan dago grabitazioaren eta <math display=\"inline\"><mi>F</mi></math> indar horizontalaren eraginpean. <br> (a) Aurkitu bi anguluen balioak. <br> (b) Egonkorra al da oreka? <br> (c) Nola aukeratu behar da <math display=\"inline\"><mi>F</mi></math>, bi hagatxoen arteko angelua maximoa izateko? <br> (d) Zein da balio maximo hori?    "
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
       "html": "Irudiko <math display=\"inline\"><mi>m</mi></math> masako bola ardatz bertikal leunean barrena higi daiteke eta <math display=\"inline\"><mi>M</mi></math> masarekin loturik dago, masa gabeko soka eta txirrikaren bidez. Aurkitu oreka-konfigurazioa. Noiz dago horrelakorik eta noiz da egonkorra? <br>  <em>Oharra</em>: Arbuiatu bolaren eta txirrikaren erradioak.  "
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
       "html": "<math display=\"inline\"><mi>M</mi></math> masako disko bati <math display=\"inline\"><mi>m</mi></math> masa puntuala atxiki zaio, zentrotik <math display=\"inline\"><mrow><mi>r</mi><mo>≤</mo><mi>R</mi></mrow></math> distantziara, eta irudiko plano aldapatsuan jarri da. Marruskadura estatikoaren koefizientea <math display=\"inline\"><mrow><mi>μ</mi><mo>&gt;</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> da. Aurkitu eta eztabaidatu oreka-konfigurazioak. Nola erabil daiteke emaitza barraskilo bolaren higidura azaltzeko, barruan likido biskatsu bat eta beste bola bat dituela jakinda?    "
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
       "html": "Irudiko eraztun bertikala plano aldapatsuan barrena higi daiteke eta periferian masa bereko partikula bat du itsatsita. Eraztunaren eta planoaren arteko marruskadura estatikoaren koefizientea <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> baino handiagoa da. (Zertarako behar da baldintza hau?) Frogatu aurkitu behar duzun baldintza bat betetzen denean bi oreka-konfigurazio daudela. Aztertu haien egonkortasuna.  "
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
       "html": "Irudiko soka arinaren ezkerreko muturra finko dago eta bestean, goiko eraztun leunetik pasatu ondoren, <math display=\"inline\"><mi>m</mi></math> masako blokea dago itsatsita. Erdian, beste eraztun leun batetik eseki da <math display=\"inline\"><mi>M</mi></math> masa. Noiz egon daiteke orekan sistema? Zein da orduan oreka-konfigurazioa? Egonkorra al da oreka hori?"
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
       "html": "<span class=\"j-smallcaps\">Robervalen balantza</span>"
      },
      {
       "mota": "testua",
       "html": ". Irudian (eta 6.1 argazkian) ikusten da balantza honen ideia. Bi pisuak berdinak badira, balantza orekan dago, pisuen posizio eta altuera guztietan. Erabili estatika analitikoa propietate hori azaltzeko.    "
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Aldakuntzen kalkulua eta Hamiltonen printzipioa</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Brakistokronoa</span>"
      },
      {
       "mota": "testua",
       "html": ".<span class=\"j-oin\">[Johann Bernoullik problema hau 1696an proposatu zuenean, Jacob Bernoullik, Leibnizek, Newtonek eta l&#x27;Hôpitalek ebatzi zuten.]</span> Partikula puntual bat burdinazko hari leun batean barrena higitzen da grabitatearen eraginpean bi puntu finkoren artean (ikus azaleko irudian antzeko sistema bat). Pausagunetik askatzen bada, nolakoa izan behar du hariaren formak, bidea egiteko behar den denbora minimoa izateko? <br>  <em>Iradokizuna</em>: Eman hariaren forma <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ekuazioak emandakoa dela. Erabili energia mekanikoaren kontserbazio-printzipioa abiadura kalkulatzeko. Adierazi bidea egiteko behar den denbora integral baten moduan eta balia zaitez aldakuntzaren kalkuluaz denboraren minimoa aurkitzeko."
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
       "html": "Dakigunez, irudiko tiro parabolikoaren ibilbide dinamikoa hurrengo ekuazioek emandakoa da: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Kalkula ezazu hurrengo ibilbide aldatu bakoitzari dagokion ekintza: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>+</mo><mi>ε</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>π</mi><mi>t</mi></mrow><mi>T</mi></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Zein kasutan lortzen da balio minimoa? Zer da <math display=\"inline\"><mi>T</mi></math>?    "
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Lagrangeren ekuazioak</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurki bitez puntu materialaren azelerazioaren osagai zilindrikoak, Lagrangeren ekuazioen bidez."
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
       "html": "<math display=\"inline\"><mi>S</mi></math> sistema ez-inertziala azeleraturik dago inertzia-sistema batean, baina sistema bien arteko orientazioa konstantea da. Aurki bitez puntu materialaren higidura-ekuazioak koordenatu orokortutzat <math display=\"inline\"><mi>S</mi></math> sistemako kartesiarrak erabiliz. Iruzkina egin emaitzari."
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
       "html": "<span class=\"j-smallcaps\">Atwooden makina</span>"
      },
      {
       "mota": "testua",
       "html": ". Zein da irudiko sistemaren higidura-ekuazioa, txirrikaren masa arbuiatzen ez badugu? <br>  <em>Oharra</em>: Soka ez da labaintzen txirrikan eta azken honen erradioa <math display=\"inline\"><mi>R</mi></math> da eta inertzia-momentua <math display=\"inline\"><mi>I</mi></math>.    "
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
       "html": "Zuzen leun batean higitzen da irudiko partikula. Zuzena plano bertikalean eta <math display=\"inline\"><mi>O</mi></math> puntuaren inguruan ari da biratzen, <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez. Lortu eta ebatzi higidura-ekuazioak. Deskribatu nolakoa den higidura <br> (a) kasu orokorrean eta <br> (b) hastapen-baldintzak <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean aukeratzen badira koordenatu polarretan <math display=\"inline\"><mrow><mn>2</mn><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><msub><mi>r</mi><mn>0</mn></msub><mo>+</mo><msub><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>g</mi></mrow></math> baldintza betetzeko moduan.    "
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
       "html": "Txirrikak eta sokak masa gabekoak badira, zeintzuk dira irudian agertzen den sistemaren higidura-ekuazioak?    "
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
       "html": "Irudian agertzen diren plano aldapatsuak leunak dira. Bi gurpilez osaturiko txirrikak eta sokek ez dute masarik. Gurpil baten erradioa bestearenaren erdia bada, lor ezazu <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> masaren higidura-ekuazioa.    "
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
       "html": "<span class=\"j-smallcaps\">Pendulu bikoitza</span>"
      },
      {
       "mota": "testua",
       "html": ". Aurki bitez irudiko pendulu bikoitzaren higidura lauaren ekuazioak.<span class=\"j-oin\">[ simulazioan ikus daitezke higidura-ekuazioen soluzioak.]</span>     "
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
       "html": "Ebatzi 2.42 problema mekanika analitikoa erabiliz."
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
       "html": "Partikula bat irudiko helize leun bertikalean zehar higitzen da, grabitatearen eraginpean. Helizearen ekuazioa <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi>k</mi><mi>φ</mi><mi>/</mi><mn>2</mn><mi>π</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> bada, zein da partikularen lagrangearra? Aurki ezazu higidura-ekuazioaren soluzioa.    "
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
       "html": "Ebatzi 5.71 problema mekanika analitikoaren bidez."
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
       "html": "<math display=\"inline\"><mi>O</mi></math> puntu finkotik lotuta dagoen hari mehe arin bat biribilkatu da disko homogeneo baten periferian. Sistema yo-yo baten antzera higitzen da plano batean eta haria beti dago tentsiopean. Aurkitu higidura-ekuazioak. Egiaztatu <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math> izan daitekeela une guztietan soluzio partikular batean. Zein da arrazoi fisikoa? Nola higitzen da diskoa kasu berezi horretan?    "
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
       "html": "Irudiko txirrikaren biraketa-erradioa <math display=\"inline\"><mi>K</mi></math> da eta barruko <math display=\"inline\"><mi>r</mi></math> erradioko zilindroan biribilkatzen den sokak <math display=\"inline\"><mi>m</mi></math> masako blokeari eusten dio, masa gabeko txirrika txikiaren bidez. <br> (a) Txirrika handia labaintzen ez bada, zeintzuk dira <math display=\"inline\"><mrow><mi>X</mi><mo>,</mo><mi>θ</mi></mrow></math> eta <math display=\"inline\"><mi>z</mi></math> aldagaiek betetzen dituzten lotura-ekuazioak? Idatzi lagrangearra eta higidura-ekuazioen soluzioa. Sistema pausagunetik askatzen bada irudiko konfiguraziotik, nola higitzen da txirrika, hau da, nolakoak dira <math display=\"inline\"><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover></math> eta <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>, biak positiboak, biak negatiboak…? <br> (b) Zer aldatzen da zure erantzunetan mahai horizontala leuna bada?    "
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
       "html": "Irudiko hagatxo arina oztoporik gabe bira daiteke <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatz bertikalaren inguruan eta <math display=\"inline\"><mi>m</mi></math> masako idunekoa marruskadurarik gabe higitzen da hagatxoan barrena. <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean irudiko konfigurazioa dugu. Idatzi lagrangearra eta, inolako kalkulurik egin gabe, higidura-ekuazioen soluzioa. Iruzkina egin emaitzari."
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
       "html": "Irudiko sistema plano bertikal batean dago. Malgukiaren luzera propioa <math display=\"inline\"><mi>a</mi></math> da eta konstante berreskuratzailea <math display=\"inline\"><mi>k</mi></math>. Gainazal horizontal leunean higi daiteke <math display=\"inline\"><mi>m</mi></math> masako xafla eta gainean duen disko homogeneoa ez da labaintzen. Diskoaren masa <math display=\"inline\"><mi>M</mi></math> da eta erradioa <math display=\"inline\"><mi>R</mi></math>. Aurkitu higidura-ekuazioak. Sistema pausagunetik askatzen da, diskoaren zentroa geldi zegoen <math display=\"inline\"><mi>A</mi></math> puntuaren gainean eta malgukiaren luzapena <math display=\"inline\"><mi>a</mi></math> zen. Nola higitzen da ondoren sistema? Zein da <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> luzera minimoa, diskoa xaflatik irten ez dadin?  "
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
       "html": "Irudiko diskoa labaindu gabe higitzen da planoan egindako kanalean barrena eta bi malguki berdinen konstante berreskuratzailea <math display=\"inline\"><mi>k</mi></math> da. Malgukiak beti daude luzatuta eta diskoaren masa <math display=\"inline\"><mi>m</mi></math> da. Aurkitu sistemaren lagrangearra, oszilazioen maiztasuna eta higidura-ekuazioaren soluzio orokorra. Diskoa pausagunetik askatzen bada, malgukien luzapena <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math> denean, nola aukeratu behar da <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math> hastapen-baldintza malgukiak beti luzatuta egoteko? <br>  <em>Oharra</em>: Arbuiatu diskoaren lodiera.  "
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
       "html": "Irudiko diskoa labaindu gabe bira daiteke plataformaren gainean eta hormari loturik dago malguki baten bidez. Sistema irudiko planoan higitzen da. Aurkitu diskoaren eta plataformaren azelerazioen arteko erlazioa. Kalkulatu sistemaren oszilazioen maiztasuna. Hasierako unean sistema pausagunean badago eta malgukiaren luzera <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub></mrow></math> bada, nola higitzen dira bi gorputzak geroago? <br>  <em>Oharrak</em>: Malgukiaren konstante berreskuratzailea <math display=\"inline\"><mi>k</mi></math> da eta luzera naturala <math display=\"inline\"><msub><mi>X</mi><mn>0</mn></msub></math>. Diskoaren masa <math display=\"inline\"><mi>m</mi></math> da eta erradioa <math display=\"inline\"><mi>R</mi></math>. Plataformaren masa <math display=\"inline\"><mi>M</mi></math> da.    "
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
       "html": "<math display=\"inline\"><mi>M</mi></math> masako ziria mahai horizontal leunean higi daiteke eta <math display=\"inline\"><mi>m</mi></math> masako hagatxoa norabide bertikalean, marruskadurarik gabe, beheko muturra ziriaren goiko planoan bermatzen delarik. Aurkitu higidura-ekuazioa(k) eta higidura-konstantea(k). Hasieran sistema geldi zegoen eta hagatxoaren beheko muturra <math display=\"inline\"><mi>h</mi></math> garaieran. Kalkulatu ziriaren amaierako abiadura eta noiz lortzen den.    "
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
       "html": "Irudiko sisteman <math display=\"inline\"><mi>m</mi></math> masako blokea bertikalean higitzen da eta <math display=\"inline\"><mi>M</mi></math> masako yo-yoa plano leunaren gainean. Yo-yoaren (simetria-ardatzaren inguruko) inertzia-momentua <math display=\"inline\"><mi>I</mi></math> da. Goiko txirrikaren eta sokaren masak arbuiagarriak dira. Idatzi sistemaren lagrangearra eta higidura-ekuazioak. Nola aukeratu behar da <math display=\"inline\"><mi>α</mi></math> angelua yo-yoa askatzean bere zentroa higi ez dadin? Beti egin daiteke aukera hori?  "
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
       "html": "Irudiko zilindro homogeneoa simetria-ardatz horizontalaren inguruan bira daiteke, marruskadurarik gabe. Zilindroaren masa <math display=\"inline\"><mi>M</mi></math> da eta erradioa <math display=\"inline\"><mi>R</mi></math>. Zilindroan biribilkatuta dagoen soka mehearen masa <math display=\"inline\"><mi>m</mi></math> da eta luzera <math display=\"inline\"><mi>l</mi></math>. Sistema pausagunetik askatzen da <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>l</mi><mn>0</mn></msub></mrow></math> denean. Kalkulatu <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> soluzioa (soka labaintzen hasi arte). <br>  <em>Oharra</em>: Egin erraztasun-hipotesiak.    "
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Kontserbazio-legeak</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko prisma isoszelea gainazal leun horizontal batean zehar higi daiteke. Hasieran prisma eta partikula puntuala pausagunean daude eta partikula <math display=\"inline\"><mi>A</mi></math> puntuan. Marruskadura arbuiagarria bada, noiz iritsiko da partikula gainazal horizontalera? Aurkitu bi higidura-konstante.    "
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
       "html": "Irudiko bi gorputzak pausagunetik hasten dira labaintzen: <math display=\"inline\"><mi>m</mi></math> masa plano aldapatsuan zehar jaisten da eta azken hau gainazal horizontalean higitzen da. Marruskadura guztiak arbuiagarriak badira, zeintzuk izango dira masen abiadurak <math display=\"inline\"><mi>m</mi></math> partikula zorura heltzen denean?    "
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
       "html": "<math display=\"inline\"><mi>m</mi></math> masako partikula marruskadurarik gabe higi daiteke irudiko penduluaren hagatxoan zehar."
      },
      {
       "mota": "testua",
       "html": "(a) Aurki itzazu sistema honen lagrangearra, higidura-ekuazioak, hamiltondarra eta energia mekanikoa. Konstante iraungo al du azken honek? <br> (b) Motor baten eraginez hagatxoa abiadura angeluar konstantez higituko balitz, nola aldatuko lirateke zure erantzunak?    "
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
       "html": "Irudiko eraztunak <math display=\"inline\"><mi>M</mi></math> masa du eta bere diametro bertikalaren inguruan bira daiteke. <math display=\"inline\"><mi>m</mi></math> masako partikula eraztunean zehar higi daiteke marruskadurarik gabe, eta eraztunaren abiadura angeluarra <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> denean goiko <math display=\"inline\"><mi>A</mi></math> puntuan pausagunean dagoela, labaintzen hasten da. <br> (a) Zein da sistemaren lagrangearra? <br> (b) Idatz itzazu higidura-ekuazioak. <br> (c) Aurki itzazu bi higidura-konstante. <br> (d) Zein da eraztunaren abiadura angeluarra partikula <math display=\"inline\"><mi>B</mi></math> puntuan dagoenean? <br> (e) Zein da partikularen abiadura erlatiboa aldiune berean?    "
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
       "html": "Irudiko sisteman <math display=\"inline\"><mi>m</mi></math> masako sokaren <math display=\"inline\"><mi>l</mi></math> luzera txirrikaren erradioa baino askoz handiagoa da eta marruskadura arbuiagarria. Kalkulatu sistemaren lagrangearra eta hamiltondarra. Zein(tzuk) d(ir)a higidura-ekuazioa(k)? Hasieran eskuineko masa txirrikaren parean pausagunean bazegoen, zein izango da bere abiadura beste masa txirrikara iristen denean?    "
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
       "html": "Irudian erakusten den posizioan geldirik dagoen hagatxoa erortzen hasten da plano bertikalean, marruskadurarik gabe. Idatzi sistemaren lagrangearra eta hamiltondarra. Kalkulatu Lagrangeren higidura-ekuazioa(k) eta higidura-konstantea(k). Idatzi masa-zentroaren abzisaren higidura-ekuazioa eta aurkitu non amaitzen den hagatxoaren eta horma bertikalaren arteko ukipena.<span class=\"j-oin\">[Ikus  simulazioa.]</span>     "
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
       "html": "Pendulu lau baten luzera <math display=\"inline\"><mi>α</mi></math> abiadura konstantez aldatzen da: <math display=\"inline\"><mrow><mover><mi>l</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>α</mi></mrow></math>. Aurki itzazu sistemaren lagrangearra, hamiltondarra eta higidura-ekuazioa. Hamiltondarra higidura-konstantea al da? Eta energia? Zergatik?"
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
       "html": "Eraztun bertikal leun batean higitzen den partikula beheko puntuarekin loturik dago malguki baten bidez, irudian erakusten den bezala. Goiko puntutik abiadura arbuiagarriarekin askatzen bada, zein izango da partikularen abiadura behean? <br>  <em>Oharra</em>: Kalkuluak errazteko malgukiaren luzera propioa arbuia dezakezu.    "
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
       "html": "<math display=\"inline\"><mi>M</mi></math> masako eraztuna mahai baten gainean bira daiteke plano bertikalean labaindu gabe, irudian erakusten den bezala. <math display=\"inline\"><mi>m</mi></math> masako partikula puntuala eraztunean zehar higi daiteke marruskadurarik gabe. Hasieran eraztuna geldirik dago eta partikula goiko puntutik abiatzen da <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiaduraz. Aurkitu eta kalkulatu bi higidura-konstante. Konstanteak al dira momentu linealaren osagai horizontala eta energia mekanikoa? Zergatik? Zein da partikularen abiadura (mahaiaren sisteman) beheko puntuan dagoenean? Sinplifikatu emaitza <math display=\"inline\"><mrow><mi>m</mi><mi>/</mi><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>M</mi><mi>/</mi><mi>m</mi><mo>→</mo><mn>0</mn></mrow></math> limiteetan.    "
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
       "html": "Irudiko bi hagatxoak masa gabekoak dira, <math display=\"inline\"><mi>l</mi></math> luzerakoak, eta zentroan dagoen artikulazio leun baten bidez loturik daude. Mutur bakoitzean <math display=\"inline\"><mi>m</mi></math> masako partikula bat dago, beheko biak mahai horizontalean marruskadurarik gabe higi daitezkeela. Artikulazioa bakarrik higitzen da norabide bertikalean eta masak plano bertikal komunean. Aurkitu <math display=\"inline\"><mi>θ</mi></math> angeluak betetzen duen ekuazio diferentziala. Perturbazio txiki baten eraginez, <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> pausaguneko posizio bertikaletik abiatzen da sistema. Zein da partikula bakoitzaren abiadura goiko biak mahaira heltzen direnean?    "
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
       "html": "Irudiko pendulu matematikoaren <math display=\"inline\"><mi>E</mi></math> esekidura-puntua norabide bertikalean higitzen da <math display=\"inline\"><mi>O</mi></math> puntu finkoarekiko, <math display=\"inline\"><mrow><mi>O</mi><mi>E</mi><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> legearen arabera. Kalkulatu sistemaren lagrangearra eta hamiltondarra. Higidura-konstantea al du azken honek? Eta energia mekanikoa? Froga ezazu <math display=\"inline\"><mi>E</mi></math> puntuaren <math display=\"inline\"><mrow><mover><mi>γ</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> azelerazioak higidura-ekuazioan duen eragina grabitazio-eremu aldakor baten baliokidea dela. Zer gertatzen da <math display=\"inline\"><mrow><mover><mi>γ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math> denean?    "
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
       "html": "Irudiko hagatxo homogeneoaren mutur bat <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatz bertikalean barrena higi daiteke eta beste muturra <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math> plano horizontalean. Marruskadura arbuiagarria da eta hagatxoaren masa eta luzera, <math display=\"inline\"><mi>m</mi></math> eta <math display=\"inline\"><mi>l</mi></math>, hurrenez hurren. Erabili bi angelu koordenatu orokortutzat. Aukeratu triedro nagusi egoki bat abiadura angeluarraren osagaiak eta (Königen teoremaren laguntzaz) energia zinetikoa eta lagrangearra idazteko. Idatzi Lagrangeren ekuazioak eta aurkitu sistemaren higidura-konstanteak.    "
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
       "html": "<math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiadura konstantez higitzen den gurdian oszilador harmoniko bat ipini da, irudian erakusten den moduan. Aukera ezazu malgukiaren <math display=\"inline\"><mi>x</mi></math> deformazioa koordenatu orokortutzat. <br> (a) Idatzi <math display=\"inline\"><msub><mi>L</mi><mn>1</mn></msub></math> lagrangearra eta <math display=\"inline\"><msub><mi>H</mi><mn>1</mn></msub></math> hamiltondarra laborategiko (zoruko) sisteman. <br> (b) Idatzi <math display=\"inline\"><msub><mi>L</mi><mn>2</mn></msub></math> lagrangearra eta <math display=\"inline\"><msub><mi>H</mi><mn>2</mn></msub></math> hamiltondarra gurdiaren sisteman. <br> (c) Froga ezazu sistema bietan aurkitzen diren Lagrangeren ekuazioak baliokideak direla. <br> (d) Energia mekanikoaren berdina al du <math display=\"inline\"><msub><mi>H</mi><mn>1</mn></msub></math>? Eta <math display=\"inline\"><msub><mi>H</mi><mn>2</mn></msub></math>? Zergatik? <br> (e) Higidura-konstantea al du <math display=\"inline\"><msub><mi>H</mi><mn>1</mn></msub></math>? Eta <math display=\"inline\"><msub><mi>H</mi><mn>2</mn></msub></math>? Zergatik? <br> (f) Kontserbatzen al da energia mekanikoa laborategiko sisteman? Eta gurdiaren sisteman? Zergatik? <br> (g) Zein da <math display=\"inline\"><msub><mi>L</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>L</mi><mn>2</mn></msub></math>-ren arteko erlazioa?    "
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
       "html": "Gerta daiteke hamiltondarra eta energia mekanikoa higidura-konstanteak izatea, nahiz eta desberdinak izan?"
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
       "html": "<math display=\"inline\"><mi>q</mi></math> karga puntual bat dipolo elektriko finko baten eremu elektrostatikoan higitzen da. Beraz, dipoloa jatorrian egoteko eta momentu dipolarra <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo>=</mo><mi>p</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> izateko moduan aukeratzen badira koordenatu polar esferikoak, energia potentziala honako hau da: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mrow><mi>q</mi><mi>p</mi></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><msup><mi>r</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mfrac></mrow></math> Aurkitu partikularen higidura-ekuazioak eta kontserbazio-legeak. Eman dezagun orain <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean <math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math> izateko moduan aukeratzen direla hastapen-baldintzak. Egiaztatu karga aurrera eta atzera higitzen dela zirkunferentzia-arku batean. Non dago kokaturik arku hori? Zein da bere luzera?"
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
       "html": "Bi enbor zilindriko berdinen gainean higitzen da irudiko plataforma. Ez dago inolako labainketarik enborretan. Plataformaren gainean <math display=\"inline\"><mi>m</mi></math> masako blokea higi daiteke, marruskadurarik gabe, malgukiaren eraginez. Kalkulatu sistemaren lagrangearra, hamiltondarra, higidura-ekuazioak eta azken hauen soluzioak. Deskribatu kualitatiboki higidura. Aurkitu higidura-konstanteak. Kontserbatzen al da energia mekanikoa? Kalkulatu (lerro bitan) zoruak eragindako marruskadura osoa.    "
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
       "html": "<math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> luzerako <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>B</mi><mi>C</mi></mrow></math> hagatxo uniformeen masak <math display=\"inline\"><mi>m</mi></math> eta <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math> dira. Hagatxoak <math display=\"inline\"><mi>B</mi></math> artikulazio leunaren bidez lotu dira eta plano bertikal batean higi daitezke, <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>C</mi></math> muturrak mahai horizontal leun batean daudela. Hasieran hagatxoak geldi zeuden, horizontalarekiko <math display=\"inline\"><mrow><mi>θ</mi><mo>≈</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> inklinazioarekin. Idatzi Lagrangeren ekuazioa(k) eta aurkitu higidura-konstantea(k). Kalkulatu <math display=\"inline\"><mrow><mi>A</mi><mo>,</mo><mi>C</mi></mrow></math> eta <math display=\"inline\"><mi>B</mi></math> puntuen abiadurak azkena zorura heltzen denean.    "
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
       "html": "<span class=\"j-smallcaps\">Labainketa eta biraketa</span>"
      },
      {
       "mota": "testua",
       "html": ". Irudiko diskoaren masa eta erradioa <math display=\"inline\"><mi>m</mi></math> eta <math display=\"inline\"><mi>a</mi></math> dira, hurrenez hurren, eta <math display=\"inline\"><mi>m</mi></math> masako partikula puntuala du itsatsita perimetroko puntu batean. Hasieran sistema orekan zegoen eta partikula punturik gorenean; baina higitzen hasten da, diskoaren planoan, perturbazio txiki baten ondorioz. Bi kasu kontsideratu behar dira: (a) diskoa labaindu gabe higitzen da zoruan eta (b) zorua guztiz leuna da. Kasu bakoitzean, <br> (1) Aurkitu Lagrangeren higidura-ekuazioa(k). <br> (2) Idatzi kontserbazio-legea(k). <br> (3) Kalkulatu masa-zentroaren eta partikularen abiadurak azkena (a)  <math display=\"inline\"><mi>O</mi></math> zentroren altueran eta (b) punturik baxuenean dagoenean.    "
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
       "html": "Nolako sistema mekanikoa deskribatzen du <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi></mrow></math> lagrangearrak? Hamiltondarra kontserbatzen al da? Eta energia mekanikoa? Berdinak al dira bi magnitude horiek?"
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
       "html": "Irudiko diskoak plano bertikal berean higitzen dira, soka arin bateko mutur bana biribilkatuta dutelarik. Disko handia mahai horizontalean higitzen da, labaindu gabe, eta bestearen masa-zentroa bakarrik higitzen da bertikalean. Txirrikaren masa arbuiagarria da. Erabili sokaren abiadura, diskoen masa-zentroen eta abiadura angeluarren arteko erlazioak aurkitzeko. Zer kontserbatzen da higiduran? Kalkulatu diskoen masa-zentroen azelerazioak.    "
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
       "html": "Partikula aske bat <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatzean barrena higitzen da. Aukeratu <math display=\"inline\"><mrow><mi>q</mi><mo>≡</mo><mi>x</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>a</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math> koordenatu orokortutzat, <math display=\"inline\"><mi>a</mi></math> konstantearekin. Idatzi lagrangearra. Kontserbatzen da hamiltondarra? Eta energia mekanikoa? Iruzkina egin emaitzei."
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
       "html": "Hasieran irudiko zilindroa eta plataforma geldi daude, baina <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean plataforma <math display=\"inline\"><mi>a</mi></math> azelerazio horizontal konstantez hasten da higitzen. Zilindroaren masa, erradioa eta <math display=\"inline\"><mi>O</mi></math> masa-zentroarekiko biraketa-erradioa <math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mi>R</mi></mrow></math> eta <math display=\"inline\"><mi>K</mi></math> dira, hurrenez hurren. Zilindroa ez da labaintzen eta marruskadura estatikoaren koefizientea <math display=\"inline\"><mi>μ</mi></math> da. <br> (a) Aurkitu zilindroaren masa-zentroaren <math display=\"inline\"><mi>V</mi></math> abiaduraren, denboraren eta <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> abiadura angeluarraren arteko erlazioa. <br> (b) Idatzi lagrangearra eta higidura-ekuazioa. Ebatzi azkena. <br> (c) Norantz higitzen da zilindroa laborategian eta plataforman? <br> (d) Zein izan daiteke <math display=\"inline\"><mi>a</mi></math> azelerazioaren balio maximoa, zilindroa labaintzen has ez dadin? <br> (e) Zer kontserbatzen da eta zer ez?    "
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
       "html": "Askatasun-gradu bakarrarekin, noiz dira berdinak lagrangearra eta hamiltondarra?"
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
       "html": "<span class=\"j-smallcaps\">Isokronoa</span>"
      },
      {
       "mota": "testua",
       "html": ".<span class=\"j-oin\">[Leibnizek proposatu zuen problema hau 1687an. Urte berean argitaratu zuten soluzioa Huygensek eta Leibnizek 1689an.]</span> Plano bertikal bateko kurba leun batean barrena erortzen den partikula batek altuera berdinak egiten ditu denbora berdinetan. Zein da kurbaren ekuazioa?"
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
       "html": "Irudiko pendulu matematiko esferikoaren <math display=\"inline\"><mi>m</mi></math> masa oztoporik gabe higi daiteke <math display=\"inline\"><mi>L</mi></math> erradioko gainazal esferikoan. Une batean hauxe dugu: <math display=\"block\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>g</mi></mrow><mi>L</mi></mfrac></msqrt><mi>.</mi></mrow></math> Frogatu orbitan <math display=\"inline\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>≤</mo><mi>z</mi><mo>≤</mo><msub><mi>z</mi><mn>2</mn></msub></mrow></math> dugula. Aurkitu <math display=\"inline\"><msub><mi>z</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>z</mi><mn>2</mn></msub></math>. <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> bertikaletik pasatzen da?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Hurbilketa lineala</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko hodi zirkular bertikala eta <math display=\"inline\"><mi>M</mi></math> masa loturik daude eta marruskadurarik gabe higi daitezke elkarrekin mahai horizontal batean. Era berean, <math display=\"inline\"><mi>m</mi></math> masako partikula puntuala hodi leunean zehar higi daiteke. <br> (a) Idatzi lagrangearra. <br> (b) Kalkulatu higidura-ekuazioak. <br> (c) Angelu txikien limitean, ebatzi higidura-ekuazioak, <math display=\"inline\"><mi>θ</mi></math> angelua denboraren funtzioan aurkitzeko."
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
       "html": "Irudiko malgukia norabide bertikalean higitzen da eta hagatxoa plano bertikal batean. Idatz ezazu sistemaren lagrangearra, malgukiaren <math display=\"inline\"><mi>x</mi></math> deformazioa eta <math display=\"inline\"><mi>θ</mi></math> angelua erabiliz. Kalkula itzazu higidura-ekuazioak eta higidura-konstanteak. Zer gertatzen da oreka egonkorraren posiziotik neurturiko desplazamenduak oso txikiak direnean?    "
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
       "html": "Irudiko <math display=\"inline\"><mi>m</mi></math> masako eraztuna labaindu gabe higi daiteke zoruaren gainean plano bertikal batean, masa bereko partikula bat atxikirik duela. (a) Aurkitu sistemaren lagrangearra. (b) Kalkulatu higidura-ekuazioa. (c) Sistema geldi dagoenean irudiko posizioan askatzen bada, zeintzuk izango dira eraztunaren eta partikularen abiadurak azken hau zorura iristen denean? (d) Orain sistemak oszilazio txikiak egiten baditu partikula beheko puntuan dagoen konfigurazioaren ingurun, zein izango da higidura honen periodoa?    "
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
       "html": "Horizontalarekin <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>α</mi><mo>&lt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> angelua osatzen duen errail leun batean barrena higi daiteke hagatxo baten artikulazioa. Azken honen masa eta luzera <math display=\"inline\"><mi>m</mi></math> eta <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mn>2</mn><mi>a</mi></mrow></math> dira, hurrenez hurren. Aurkitu higidura-ekuazioak eta translazio hutsa (hau da, <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub></mrow></math> balio konstante bati dagokion higidura) deskribatzen duten soluzioak. Zer gertatzen zaie soluzio partikular horiei perturbazio txiki bat pairatzen badute? <br>  <em>Iradokizuna</em>: Azken galderari erantzuteko, garatu higidura-ekuazioak <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> puntuaren ingurun.  "
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Problema baliokideak</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hodi huts luze baten masa arbuiagarria da eta erdian duen gontz baten inguruan bira daiteke plano horizontalean, inolako oztoporik gabe. Hodiaren barruan marruskadurarik gabe higi daitekeen hagatxo baten masa eta luzera <math display=\"inline\"><mi>m</mi></math> eta <math display=\"inline\"><mi>l</mi></math> dira, hurrenez hurren. <br> (a) Aurkitu hagatxoaren higidura-ekuazioak, grabitatearen eragina arbuiatuz. <br> (b) Hasieran hagatxoa hodiaren erdian zegoen pausagunean eta hodiaren abiadura angeluarra <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> zen. Froga ezazu konfigurazio honetan sistema oreka erlatibo ezegonkorrean dagoela. <br> (c) Perturbazio txiki baten eraginez, hagatxoa apur bat mugitzen bada zentrotik, zein izango da bere abiadura jatorritik <math display=\"inline\"><mi>r</mi></math> distantziara dagoenean? Zer gertatuko da <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> limitean hodiaren luzera infinitua dela jotzen badugu?    "
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
       "html": "Ebatzi 5.6.5 problema mekanika analitikoaren bidez. <br>  <em>Oharra</em>: Kontsideratu <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> eta <math display=\"inline\"><mi>ω</mi></math> konstanteak izan arren <math display=\"inline\"><mi>θ</mi></math> aldakorra dela eta kalkulatu azken honen balio konstanteak."
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
       "html": "<math display=\"inline\"><mi>m</mi></math> masako partikula marruskadurarik gabe higi daiteke <math display=\"inline\"><mi>R</mi></math> erradioko eraztun batean barrena plano horizontalean. Eraztuna <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> abiadura angeluar konstantez biratzen da zentrotik <math display=\"inline\"><mi>L</mi></math> distantziara dagoen <math display=\"inline\"><mi>O</mi></math> puntu finkoaren inguruan. Aurkitu sistemaren lagrangearra, higidura-ekuazioa eta oreka erlatibo egonkorren eta ezegonkorren konfigurazioak. Nolako sistema ezagunen baliokidea da hau?  "
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
       "html": "<span class=\"j-smallcaps\">Egia ala gezurra?</span>"
      },
      {
       "mota": "testua",
       "html": "Plano batean <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> energia potentzial zentralean higitzen den <math display=\"inline\"><mi>m</mi></math> masako partikularen lagrangearra koordenatu polarretan hauxe da: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Dimentsio bakarreko problema baliokidea lortzeko, <math display=\"inline\"><mi>φ</mi></math> koordenatu ziklikoari dagokion momentu kontserbatua erabil daiteke <math display=\"inline\"><mrow><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> lagrangearretik <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> ezabatzeko, <math display=\"block\"><mrow><msub><mi>p</mi><mi>φ</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><msub><mi>p</mi><mi>φ</mi></msub><mrow><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math> eta dimentsio bakarreko <math display=\"inline\"><mrow><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> lagrangear baliokidea lortzeko."
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
       "html": "Irudiko tresna oztoporik gabe bira daiteke ardatz bertikalaren inguruan eta hodi horizontalean marruskadura arbuiagarria da. <br> (a) Zer kontserbatzen da? <br> (b) Existitzen al da <math display=\"inline\"><mi>m</mi></math> masaren oreka erlatiboaren posizio egonkorrik? <br> (c) Zer aldatzen da zure erantzunetan orain ardatz bertikalaren inguruko abiadura angeluarra konstante mantentzen bada? <br>  <em>Iradokizuna</em>: Grafikoa eginez, erraz ikusten da <math display=\"inline\"><mrow><mi>A</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bakoitzeko <math display=\"inline\"><mrow><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math> ekuazioak soluzio positibo bakarra duela eta, gainera, 1 baino handiagoa dela: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>x</mi><mo>*</mo></msup><mo>&gt;</mo><mn>1</mn></mrow></math>."
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
       "html": "Irudiko <math display=\"inline\"><mi>m</mi></math> masa mahai horizontal batean higitzen ari da eta <math display=\"inline\"><mi>M</mi></math> masarekin loturik dago, zulo batetik igarotzen den soka arin baten bidez. <math display=\"inline\"><mi>M</mi></math> masa bertikalean higitzen da beti. Marruskadura guztiak arbuiagarriak dira. Aurkitu higidura-ekuazioa(k) eta higidura-konstantea(k). Erabili azken hauek dimentsio bakarreko problema baliokidea lortzeko. Izan daiteke zirkularra <math display=\"inline\"><mi>m</mi></math>-ren ibilbidea? Erantzuna baiezkoa bada, egonkorra al da orbita zirkularra?    "
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
       "html": "Irudiko mahai horizontal leuneko zulotik pasatzen da bi masa berdin lotzen dituen soka arina. Masa bat bertikalean higitzen da eta bestea mahai gainean. Zuloaren eta sokaren arteko marruskadura arbuiagarria da. Hasieran esekitako masa geldi dago eta bestea zulotik <math display=\"inline\"><mi>a</mi></math> distantziara eta <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiadura eskalarraz abiatzen da sokarekiko perpendikularrean. <br> (a) Aurkitu eta kalkulatu bi higidura-konstante. <br> (b) Planteatu dimentsio bakarreko problema baliokidea. <br> (c) Frogatu bi zirkunferentziaren artean higitzen dela mahai gaineko masa. Kalkulatu zirkunferentzia horien erradioak. <br> (d) Noiz da zuloaren eta masa horren arteko distantzia minimoa (maximoa)  <math display=\"inline\"><mi>a</mi></math>-ren berdina? <br> (e) Noiz da zirkularra masa horren ibilbidea?    "
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
       "html": "Pendulu matematiko bat <math display=\"inline\"><mi>a</mi></math> azelerazio konstantez higitzen den gurdi batean eseki da. Idatzi lagrangearra eta higidura-ekuazio(ak). Kalkulatu oreka-konfigurazioak eta oreka egonkorreko konfigurazioaren inguruko oszilazio txikien maiztasuna.    "
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
       "html": "Barra arin bat mutur batetik pasatzen den ardatz bertikalaren inguruan bira daiteke, plano horizontalean. Barran barrena higi daitekeen <math display=\"inline\"><mi>m</mi></math> masako partikula bat biraketa-ardatzetik loturik dago, malguki baten bidez. Malgukiaren konstante berreskuratzailea <math display=\"inline\"><mi>k</mi></math> da, luzera propioa <math display=\"inline\"><mi>l</mi></math>, eta marruskadura guztiak arbuiagarriak. Noiz izango da bornatua ibilbidea? Noiz existitzen da orbita zirkular bat? Noiz da egonkorra? <br>  <em>Oharra</em>: Ez da eskatzen orbita zirkularrak aurkitzeko, bakarrik beren existentzia eta egonkortasuna aztertzeko.    "
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
       "html": "Irudiko ardatz bertikala <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> abiadura angeluar konstantez ari da biratzen eta beheko barra <math display=\"inline\"><mi>A</mi></math> artikulazio leunaren inguruan bira daiteke, ardatzarekin batera biratzen den plano bertikalean. Erabili triedro nagusi bat sistemaren lagrangearra idazteko. Balia zaitez kontserbazio-lege batez, problema baliokide bat idazteko eta oreka erlatiboaren konfigurazioen existentzia eta egonkortasuna aztertzeko. Zein da <math display=\"inline\"><mi>A</mi></math> artikulazioaren erreakzioa (indarra eta indar-momentua) oreka erlatiboan? Kalkulatu oreka erlatibo egonkorreko konfigurazioen inguruko oszilazio txikien maiztasuna.    "
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
       "html": "Hodi horizontal leun bat <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> abiadura angeluar konstantez ari da biratzen ardatz bertikal baten inguruan. Barruan dauden bi masa berdinak malguki arin baten bidez daude lotuta. Partikulen masa <math display=\"inline\"><mi>m</mi></math> da, malgukiaren konstante berreskuratzailea <math display=\"inline\"><mi>k</mi></math> eta luzera propioa <math display=\"inline\"><mi>l</mi></math>. Aurkitu eta ebatzi higidura-ekuazioak. Aztertu orbita zirkularren existentzia eta egonkortasuna. <br>  <em>Oharra</em>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>&lt;</mo><msqrt><mrow><mn>2</mn><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> da.    "
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
       "html": "<span class=\"j-smallcaps\">Marruskadura dinamikoaren ordezko indar kontserbatzailea</span>"
      },
      {
       "mota": "testua",
       "html": ". Gai honetako teorian kanpoan utzi dugu marruskadura lehor dinamikoa, ez baita kontserbatzailea. Hala ere, ariketa batzuetan, marruskadura-indarra datuen eta koordenatu orokortuen funtzioan aldez aurretik ezagutzen bada, indar kontserbatzaile baliokide batez ordezka daiteke, mekanika analitikoa erabiltzeko. Adibide moduan, kontsidera dezagun 5.70 problema. Eman dezagun, kuboaren ezkerreranzko abzisa <math display=\"inline\"><mi>x</mi></math> dela. <em>Sistema orekatik askatzen bada</em>, kuboaren eta planoaren arteko marruskadura-indarra <math display=\"inline\"><mrow><mi>−</mi><msub><mi>μ</mi><mi>B</mi></msub><mi>m</mi><mi>g</mi><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math> izango da eta problema baliokide bat lortzen dugu hura <math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"bold-italic\">𝜵</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>μ</mi><mi>B</mi></msub><mi>m</mi><mi>g</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> indar kontserbatzaileaz ordezkatuz. Egiaztatu azelerazio berdina lortzen dela horrela."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Lagrangear ez-estandarrak</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azter dezagun 1906an Max Planckek proposatutako lagrangearra: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>−</mi><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Aurki itzazu dagozkion Lagrangeren ekuazioak, koordenatu kartesiarrak erabiliz. Zer deskribatzen du lagrangear honek? Iruzkina egin emaitzari."
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
       "html": "<span class=\"j-smallcaps\">Bikien paradoxa</span>"
      },
      {
       "mota": "testua",
       "html": ". Kontsidera ditzagun, sistema inertzial batean, <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> unean <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub></math> posizioan eta <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math> denean <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub></math> delakoan dauden behatzaile erlatibista guztiak. (Bi posizio horien artean edonola higi daitezke. Jakina, bi gertaera horien arteko espazio-denborako tartea denbora motakoa da.) Erabili 6.84 problema eta Hamiltonen printzipioa hauxe frogatzeko: <em>Bi konfigurazioen artean higitzen diren behatzaileen artean, behatzaile inertzialak</em>  (hau da, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>2</mn></msub><mo>−</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> abiadura konstantez higitzen denak)  <em>neurtzen du denbora propio maximoa</em>."
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
       "html": "<span class=\"j-smallcaps\">Lagrangearra erlatibitate orokorrean</span>"
      },
      {
       "mota": "testua",
       "html": ". <math display=\"inline\"><mi>M</mi></math> masako izar batek sortzen duen grabitazio-eremu esferiko estatikoan higitzen den partikula (planeta) baten higidura laua deskribatzeko, ondoko lagrangearra erabil daiteke, erlatibitate orokorrean: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msub><mi>r</mi><mi>S</mi></msub><mi>r</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>c</mi><mn>2</mn></msup><msup><mover><mi>t</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msub><mi>r</mi><mi>S</mi></msub><mi>r</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>r</mi><mi>S</mi></msub><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>G</mi><mi>M</mi></mrow><msup><mi>c</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mfrac></mrow></math> Hemen Schwarzschilden erradioada <math display=\"inline\"><msub><mi>r</mi><mi>S</mi></msub></math> parametroa, koordenatu orokortuak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta aldagai independentea <math display=\"inline\"><mi>τ</mi></math> denbora propioa. Denbora propioarekiko deribatua adierazten du puntuak. Hamiltondarra <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>L</mi><mo>=</mo><mi>−</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math> higidura-konstantea da. Erabili hori eta beste bi higidura-konstante, higidura erradialaren ekuazioa 4.139 problemako eran idazteko: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>r</mi></mrow><mrow><mi>d</mi><msup><mi>τ</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><msup><mi>r</mi><mn>3</mn></msup></mfrac><mo>−</mo><mfrac><mrow><mn>3</mn><msup><mi>h</mi><mn>2</mn></msup><mi>G</mi><mi>M</mi></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><msup><mi>r</mi><mn>4</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>h</mi><mo>≡</mo><msup><mi>r</mi><mn>2</mn></msup><mfrac><mrow><mi>d</mi><mi>φ</mi></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mi>.</mi></mrow></math> Egiaztatu <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> aldaketaz baliatuz honela idazten dela orbitaren ekuazioa: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>d</mi><msup><mi>φ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>p</mi></mfrac><mo>+</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><msub><mi>r</mi><mi>S</mi></msub><msup><mi>u</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Alderatu ekuazio hori 4.1.8 ataleko Bineten formularekin. Zein da <math display=\"inline\"><mi>p</mi></math> parametroaren esanahi fisikoa? Eta ekuazioaren azken gaiarena?"
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
       "html": "Partikula bat lerro zuzen batean zehar higi daiteke eta bere lagrangearra honako hau da: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>γ</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mi>ω</mi></mrow></math> eta <math display=\"inline\"><mi>γ</mi></math> konstanteak positiboak dira.)  <br> (a) Idatzi Hamiltonen ekuazioak. <br> (b) Nolako sistema mekanikoari dagokio aipaturiko lagrangearra? Iruzkina egin erantzunari. <br> (c) Higidura-konstantea al da hamiltondarra? Zergatik? <br> (d) Konstantea al da energia mekanikoa? Zergatik?"
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
       "html": "Erabili <math display=\"inline\"><mrow><mi>q</mi><mo>≡</mo><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mi>x</mi></mrow></math> koordenatu orokortua 6.87 problheman, higidura-konstante bat aurkitzeko."
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
       "html": "Kontsidera dezagun <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><msup><mi>m</mi><mn>2</mn></msup><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>4</mn></msup><mo>+</mo><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>V</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lagrangearra, non <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> delakoa <math display=\"inline\"><mi>x</mi></math> koordenatu orokortuaren funtzioa den. Aurkitu higidura-ekuazioa eta hamiltondarra. Nolako sistema mekanikoa deskribatzen du lagrangear honek? Iruzkina egin emaitzari."
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
       "html": "Sistema baten koordenatu orokortuak <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>y</mi></math> badira, zer da harritzekoa <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>k</mi><mi>x</mi><mi>y</mi></mrow></math> lagrangearrean?"
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
       "html": "<math display=\"inline\"><mi>L</mi></math> lagrangearrarekin eta <math display=\"block\"><mrow><msup><mi>L</mi><mo>′</mo></msup><mo>≡</mo><mi>L</mi><mo>+</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>G</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><msub><mi>q</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> delakoarekin higidura-ekuazio berberak lortzen dira, 6.11.5 problheman frogatu genuen bezala. Zer gertatzen da momentu kanonikoekin, hamiltondarrarekin eta Jacobiren integralarekin?"
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
       "html": "Partikula puntual bat <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝜵</mi><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> indar-eremuan higitzen ari da, loturarik gabe. Egiaztatu zuzenean higidura-ekuazioak ondoko bi lagrangearretatik lor daitezkeela: <math display=\"block\"><mrow><msub><mi>L</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>L</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> non ondoko potentzial orokortua erabili den: <math display=\"block\"><mrow><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≡</mo><mi>t</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi>t</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝜵</mi><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Frogatu 6.91 problemaren emaitzaren ondorioz ere lor daitezkeela higidura-ekuazioak berdinak direla bi lagrangearrak erabiliz. Nola idazten da <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> indarra <math display=\"inline\"><mi>U</mi></math> potentzial orokortua erabiliz?"
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
       "html": "Testuinguru batzuetan azelerazio orokortuak ere agertzen dira lagrangearrean. Orduan, Hamiltonen printzipiotik, aldakuntzen kalkuluen bitartez, lortzen diren Euler eta Lagrangeren ekuazioak honela idazten dira: <math display=\"block\"><mrow><mfrac><msup><mi>d</mi><mn>2</mn></msup><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Egiaztatu formalismo honetan honela ere idazten dela oszilador harmonikoaren lagrangearra: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>q</mi><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>q</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Formalismo hamiltondarra</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurki ezazu hurrengo lagrangearrari dagokion hamiltondarra: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>x</mi><mo>+</mo><mi>β</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> (<math display=\"inline\"><mi>α</mi></math> eta <math display=\"inline\"><mi>β</mi></math> konstanteak dira.) Zeintzuk dira Hamiltonen ekuazioak? Energia mekanikoa, higidura-konstantea al da? Ba al dago higiduran zehar konstante dirauen momentu linealaren osagairik?"
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
       "html": "Demagun eremu kontserbatzaile batean higitzen den partikula bat. Zein da hamiltondarra koordenatu zilindrikoetan?"
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
       "html": "Erantzun 6.95 ariketako galdera berari, baina koordenatu esferikoak erabiliz."
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
       "html": "Lor ezazu fase-ibilbidean ekuazioa oszilador harmonikoaren kasuan."
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
       "html": "Eman dezagun partikula baten higidura, abiadura angeluar konstantez biratzen ari den sistema batetik aztertzen dugula. Zeintzuk dira dagozkion lagrangearra eta hamiltondarra?"
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
       "html": "Bi askatasun-gradu dituen sistema mekaniko baten hamiltondarra honako hau da: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><msub><mi>q</mi><mn>1</mn></msub><msub><mi>p</mi><mn>1</mn></msub><mo>−</mo><msub><mi>q</mi><mn>2</mn></msub><msub><mi>p</mi><mn>2</mn></msub><mo>−</mo><mi>a</mi><msubsup><mi>q</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mi>b</mi><msubsup><mi>q</mi><mn>2</mn><mn>2</mn></msubsup><mo>,</mo></mrow></math> non <math display=\"inline\"><mi>a</mi></math> eta <math display=\"inline\"><mi>b</mi></math> konstanteak diren. Froga ezazu hurrengo hiru aldagai dinamikoak higidura-konstanteak direla: <math display=\"block\"><mrow><mfrac><mrow><msub><mi>p</mi><mn>2</mn></msub><mo>−</mo><mi>b</mi><msub><mi>q</mi><mn>2</mn></msub></mrow><msub><mi>q</mi><mn>1</mn></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>q</mi><mn>1</mn></msub><msub><mi>q</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>q</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math> Ba al dago bestelako higidura-konstanterik?"
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
       "html": "Irudiko tresna abiadura angeluar konstantez higitzen da ardatz bertikalaren inguruan eta marruskadura arbuiagarria da. Aurki ezazu <math display=\"inline\"><mi>m</mi></math> masaren oreka erlatiboaren posizioa eta eztabaidatu bere egonkortasuna. Idatz itzazu Hamiltonen ekuazioak. Higidura-konstantea al du hamiltondarrak? Eta energia mekanikoa? Zergatik?    "
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
       "html": "Irudiko malgukiaren berezko luzera <math display=\"inline\"><mi>l</mi></math> da. Hasierako aldiunean masak pausagunean daude eta malgukiaren luzera <math display=\"inline\"><mi>l</mi></math> da. Aurkitu sistemaren Hamiltondarra eta frogatu <math display=\"inline\"><mi>x</mi></math> koordenatua ziklikoa dela. Zein simetriari dagokio propietate hau? Ebatzi ekuazio kanonikoak.    "
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
       "html": "Aurkitu 6.84 problemako lagrangearrari dagozkion hamiltondarra eta ekuazio kanonikoak (Max Planckek 1906an aurkitutakoak). Zer da hamiltondarra? Iruzkina egin emaitzari."
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
       "html": "<span class=\"j-smallcaps\">Momentu angeluarra eta Poissonen makoak</span>"
      },
      {
       "mota": "testua",
       "html": ". Partikula puntual bat loturarik gabe higitzen da. Egiaztatu, koordenatu kartesiarretan, ondoko emaitzak (eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> permutazio ziklikoak eginez lortzen direnak) betetzen direla: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>,</mo><msub><mi>L</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mi>x</mi></msub><mo>,</mo><msub><mi>L</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>L</mi><mi>x</mi></msub><mo>,</mo><msub><mi>L</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>,</mo><msub><mi>L</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>z</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mi>x</mi></msub><mo>,</mo><msub><mi>L</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msub><mi>p</mi><mi>z</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>L</mi><mi>x</mi></msub><mo>,</mo><msub><mi>L</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msub><mi>L</mi><mi>z</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi mathvariant=\"bold-italic\">𝑳</mi><mn>2</mn></msup><mo>,</mo><msub><mi>L</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
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
       "html": "Partikula aske baten higidura lauan koordenatu polarrak erabiltzen badira, energia zinetikoa <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da. Egiaztatu formalismo lagrangearrean <math display=\"inline\"><mrow><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>r</mi></msub><mo>=</mo><mi>∂</mi><mi>T</mi><mi>/</mi><mi>∂</mi><mi>r</mi></mrow></math> dela eta formalismo hamiltondarrean <math display=\"inline\"><mrow><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>r</mi></msub><mo>=</mo><mi>−</mi><mi>∂</mi><mi>T</mi><mi>/</mi><mi>∂</mi><mi>r</mi></mrow></math>. Azaldu aurkako zeinuen zergatikoa."
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
       "html": "Erabili (6.197) emaitza eta Poissonen makoen propietateak, <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math> oszilador harmonikoan ondoko aldagai dinamikoa higidura-konstantea dela frogatzeko: <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>+</mo><mi>i</mi><mi>m</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><mo>≡</mo><mfrac><mi>k</mi><mi>m</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Denetarik</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko karratua <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez biratzen ari da <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> ardatz bertikalaren inguruan. Bestaldetik, karratuaren diagonalean zehar higi daiteke <math display=\"inline\"><mi>m</mi></math> masako partikula, marruskadurarik gabe. (a) Idatzi sistemaren lagrangearra. (b) Lagrangearra aztertuz erabaki zer kontserbatzen den higiduran zehar. (c) Aurkitu partikularen orbita zirkularrak eta aztertu euren egonkortasuna. (d) Idatzi sistemaren hamiltondarra eta ekuazio kanonikoak. (e) Berdinak al dira energia mekanikoa eta hamiltondarra? Azaldu zure erantzuna. (f) Ebatzi higidura-ekuazioak eta deskribatu higidura.    "
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
       "html": "Eman dezagun orain 6.106 problemako karratua oztoporik gabe bira daitekeela <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> ardatz bertikalaren inguruan. (a) Zer kontserbatzen da higiduran? (c) Erabili higidura-konstante bat dimentsio bakarreko problema baliokidea idazteko. (d) Aurkitu partikularen orbita zirkularrak eta aztertu euren egonkortasuna. (f) Berdinak al dira energia mekanikoa eta hamiltondarra? (e) Deskribatu kualitatiboki higidura."
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
       "html": "Irudiko erreguladorea <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez biratzen da ardatz bertikalaren inguruan. Hagatxoak berdinak eta masa gabekoak dira. <math display=\"inline\"><mi>M</mi></math> masa ardatzean zehar higi daiteke marruskadurarik gabe eta honen ondorioz <math display=\"inline\"><mi>m</mi></math> masen posizio erlatiboak ere aldatzen dira. Idatzi sistemaren Lagrangeren eta Hamiltonen ekuazioak. Aztertu higidura-konstanteak eta oreka erlatiboaren posizioen existentzia eta egonkortasuna. Energia mekanikoa konstantea al da? <br>  <em>Oharra</em>: Arbuiatu masen erradioak."
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
       "html": "Irudiko hari zirkular homogeneoaren masa <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math> da eta ardatz bertikalaren inguruan bira daiteke oztoporik gabe. <math display=\"inline\"><mi>m</mi></math> masako partikula harian zehar higi daiteke marruskadurarik gabe. Irudiko <math display=\"inline\"><mi>φ</mi></math> eta <math display=\"inline\"><mi>θ</mi></math> angeluak formalismo hamiltondarrean erabiliz, (a) kalkulatu sistemaren <math display=\"inline\"><mi>H</mi></math> hamiltondarra, eta (b) aurkitu ekuazio kanonikoak. (c) Higidura-konstantea al da <math display=\"inline\"><mi>H</mi></math>? Sistemaren energia mekaniko osoaren berdina al da? Azaldu erantzunak. (d) Froga ezazu <math display=\"inline\"><mi>ω</mi></math> eta <math display=\"inline\"><mi>α</mi></math> konstanteak aurki daitezkeela <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ω</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>α</mi></mrow></math> ekuazioek emandakoa soluzioa izateko moduan.    "
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
       "html": "Zulo leun batetik pasatzen den soka luze arin baten bidez lotu dira irudiko bi partikulak. Goikoa mahai horizontal leunaren gainean higitzen da eta behekoa bertikalean. Azken hau geldi dagoenean, mahaikoa abiarazten da zulotik <math display=\"inline\"><mi>a</mi></math> distantziatik, sokarekiko perpendikularrean, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>=</mo><msqrt><mrow><mn>8</mn><mi>a</mi><mi>g</mi></mrow></msqrt></mrow></math> abiaduraz. (a) Zein da <math display=\"inline\"><mi>k</mi></math>-ren balio limitea mahaiko partikula zulotik urruntzen has dadin? (b) Zulotik neurturiko distantzia maximoa <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> bada, zein da <math display=\"inline\"><mi>k</mi></math>? (c) Nola aukeratu behar da <math display=\"inline\"><mi>k</mi></math> konstantea, <math display=\"inline\"><mi>m</mi></math> masako partikula zuloraino joan dadin?    "
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
       "html": "<span class=\"j-smallcaps\">Bi gorputzen problemaren lagrangearra</span>"
      },
      {
       "mota": "testua",
       "html": ". Kontsidera dezagun bi gorputzen problema erreferentzia-sistema inertzial batean. 2. partikulak pairatutako indarra kontserbatzailea da: <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>12</mn></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝜵</mi><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, non <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>≡</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub></mrow></math> delakoa posizio erlatiboaren bektorea den. Sistemaren masa osoa <math display=\"inline\"><mrow><mi>M</mi><mo>≡</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math> da, masa laburbildua <math display=\"inline\"><mi>m</mi></math>, eta masa-zentroaren posizioa <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math>. Froga ezazu sistemaren lagrangearra ondokoa dela eta atera ondorio fisikoak: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
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
       "html": "Muturretan bi masa desberdin dituen irudiko hagatxoa, oztoporik gabe bira daiteke ardatz bertikalean dagoen <math display=\"inline\"><mi>A</mi></math> artikulazio leunaren inguruan, plano bertikal batean. Ardatza <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez biratzen ari da. Kalkulatu higidura-ekuazioa(k) eta higidura-konstantea(k). Kontserbatzen al da energia mekanikoa? Aurkitu oreka erlatiboaren konfigurazioak (hau da, <math display=\"inline\"><mi>α</mi></math> konstanteko soluzioak) eta aztertu beren egonkortasuna. <br>  <em>Oharra</em>: <math display=\"inline\"><mrow><mi>M</mi><mo>&gt;</mo><mi>m</mi></mrow></math> dugu.    "
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
       "html": "<span class=\"j-smallcaps\">Lagrangeren ziba</span>"
      },
      {
       "mota": "testua",
       "html": ". Kontsidera dezagun 6.7 ataleko ziba simetriko astuna. Nolako baldintza bete behar da <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>≡</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> prezesioaren, <math display=\"inline\"><mrow><mi>ω</mi><mo>≡</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> espinaren eta <math display=\"inline\"><mi>θ</mi></math> angeluaren artean, ziba nutaziorik gabe ibil dadin?"
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
       "html": "<span class=\"j-smallcaps\">Lagrangeren ziba</span>"
      },
      {
       "mota": "testua",
       "html": "(II). Eman dezagun ziba simetriko astuna ia-ia bertikalean (<math display=\"inline\"><mrow><mi>θ</mi><mo>≈</mo><mn>0</mn></mrow></math>) dagoela hasieran. Froga ezazu ondoko baldintza bete behar dela «lotan» irauteko, hau da, aurrerantzean ere <math display=\"inline\"><mrow><mi>θ</mi><mo>≈</mo><mn>0</mn></mrow></math>  izateko: <math display=\"block\"><mrow><msubsup><mi>I</mi><mi>z</mi><mn>2</mn></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>+</mo><msub><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>&gt;</mo><mn>4</mn><msub><mi>I</mi><mi>x</mi></msub><mi>m</mi><mi>g</mi><mi>R</mi><mi>.</mi></mrow></math>"
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
       "html": "<span class=\"j-smallcaps\">Nielsen-en ekuazioak</span>"
      },
      {
       "mota": "testua",
       "html": ". Froga ezazu Lagrangeren ekuazioak ondoko era baliokidean idatz daitezkeela: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mover><mi>L</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mn>2</mn><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
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
       "html": "<span class=\"j-smallcaps\">Rayleighen barreiatze-funtzioa</span>"
      },
      {
       "mota": "testua",
       "html": ". Partikula puntual batek bi indar pairatzen ditu: <math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"bold-italic\">𝜵</mi><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> indar kontserbatzailea eta <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math> indar barreiatzailea. Egiaztatu higidura-ekuazioak <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>R</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mi>i</mi></msub><mo>=</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> direla, <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> bada eta <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>."
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
       "html": "<span class=\"j-smallcaps\">Lorentzen indarra</span>"
      },
      {
       "mota": "testua",
       "html": ". Eman dezagun <math display=\"inline\"><mi>q</mi></math> karga bat higitzen den eremu elektromagnetikoaren potentzial eskalarra <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dela eta potentzial bektoriala <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Egiaztatu Lorentzen indarra berreskuratzen dela Lagrangeren ekuazioetatik, lagrangearra <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>U</mi></mrow></math> bada eta <math display=\"inline\"><mi>U</mi></math> potentzial orokortua honako hau: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>V</mi><mo>−</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
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
       "html": "<span class=\"j-smallcaps\">Noetheren teorema</span>"
      },
      {
       "mota": "testua",
       "html": ". Simetrien eta kontserbazio-legeen arteko erlazioa deskribatzen du teorema erabilgarri honek. Demagun koordenatu orokortuen transformazio infinitesimal bat, <math display=\"block\"><mrow><msub><mi>q</mi><mi>i</mi></msub><mo>→</mo><msub><mi>q</mi><mi>i</mi></msub><mo>+</mo><mi>ε</mi><msub><mi>K</mi><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>L</mi><mo>→</mo><msup><mi>L</mi><mo>′</mo></msup><mo>=</mo><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>+</mo><mi>ε</mi><msub><mi>K</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo>+</mo><mi>ε</mi><msub><mi>K</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> simetria bat dela, hau da, lagrangearra aldatu gabe uzten duela (<math display=\"inline\"><mi>ε</mi></math> parametro infinitesimalarekiko lehen ordenaraino): <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msup><mi>L</mi><mo>′</mo></msup></mrow><mrow><mi>d</mi><mi>ε</mi></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Frogatu, hori gertatzen bada, hurrengo magnitudea higidura-konstantea dela, hau da, ez dela aldatzen"
      },
      {
       "mota": "testua",
       "html": "<em>higiduran barrena</em>"
      },
      {
       "mota": "testua",
       "html": ": <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>K</mi><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mi>.</mi></mrow></math> Zer gertatzen da <math display=\"inline\"><mrow><msub><mi>K</mi><mi>i</mi></msub><mo>=</mo><msub><mi>q</mi><mi>i</mi></msub><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></mrow></math> aukerarekin lagrangearrak simetria bat duenean?"
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "Lagrange Season (2023-11): egilearen koadernoa, fitxak eta bideo-azterketak",
     "xehetasuna": "argazkietatik zuzeneko transkripzioa, itzulpena eta edizio kritikoa; mekanika lagrangearra bektorerik gabe",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a14",
   "maila": 1,
   "izenburua": "Lagrange-dispositiboak: bektorerik gabe pentsatzen ikasi",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kapitulu honek egilearen <strong>Lagrange Season</strong>-a jasotzen du (2023ko azaroaren 22-29): mekanika lagrangearra menderatzen ari zela egiaztatzeko berak diseinatutako dispositiboak, bere eskuzko ebazpenak eta bideoen gaineko azterketa-oharrak. Balio pertsonaleko materiala da, proiektuaren muina: problema bat <strong>bektorerik gabe</strong> planteatzeko gai izatearen proba."
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Metodologia: bederatzi pausoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Egilearen gida (jatorrizkoa gaztelaniaz, koadernotik):"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Koordenatuak aukeratu.</strong> Arrisku ohikoenak: koordenatuak independenteak ala mendekoak diren ez argitzea, eta sistema-mota (kartesiarra, polarra, esferikoa) komeni denean ez erabiltzea.",
      "<strong>Koordenatuen balioak eta deribatuak astiro idatzi.</strong> Osagaiak lehenengo deribatu eta GERO karratura eraman, banan-banan, eta orduan sartu formulan. Akats gehienak eragiketetakoak dira: gaizki deribatu, zeinuak nahastu, parametroren bat jan.",
      "<strong>Energia zinetikoaren formulan sartu.</strong>",
      "<strong>Potentziala ondo pentsatu</strong>, batez ere zeinua: positiboa ala negatiboa den deskribapenaren arabera — hor erne.",
      "<strong>Lagrangearra idatzi</strong> eta gogoratu higidura-ekuazioak (Euler-Lagrange) aldagai BAKOITZERAKO egiten direla.",
      "<strong>Loturak (constraints) sartu</strong>, halakorik badago.",
      "<strong>Emaitzak interpretatu.</strong> Askotan emaitzak ez dira lehen begiratuan ulertzen: funtsezkoa da kasu bakoitzaren higidura-ekuazio kanonikoak buruan izatea (pendulua, malgukia, erorketa askea...).",
      "<strong>Ekuazioa tratagaitza bada, hurbilketak</strong>: oszilazio txikietan <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>→</mo><mi>θ</mi></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>→</mo><mn>1</mn></mrow></math>.",
      "<strong>Ekuazio sinplifikatutik soluzio harmonikora.</strong> <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> motako ekuazioa agertzen denean, soluzioa trigonometrikoa da: koefizienteak identifikatu, <math display=\"inline\"><mi>ω</mi></math> zehaztu, eta hastapen-baldintzekin posizio-ekuazioa eraiki."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Van Biezen-en oinarriak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egileak Michael Van Biezen aipatzen du &quot;Lagrange Season-aren benetako eragile&quot; gisa. Haren bideoetatik jasotako arauak (egilearen fitxa): deribatu trigonometrikoetan <strong>sinuak ez du zeinua aldatzen, kosinuak bai</strong> (<math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo>′</mo></msup><mo>=</mo><mi mathvariant=\"normal\">cos</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">sin</mi></mrow></math>); horregatik, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioan <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> probatuz <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ateratzen da eta dena koadratzen da. Malgukian <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> jartzen dugu (hasieran luzatuta askatzen delako), penduluan <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Funtsezkoa: formula ez da aldatzen aldagaiari beste izen bat emanda — <math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>q</mi></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math> edozein koordenatu orokorturekin."
      }
     ]
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Dispositibo nagusia: pendulutik zintzilikatutako polea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Egilearen lehen dispositibo handia (koadernoko bi orri, azaroak 22-29): <math display=\"inline\"><mi>ℓ</mi></math> luzerako pendulu batetik polea bat zintzilik, eta poleatik bi masa (<math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>) soka batez lotuta. Aldagai independenteak: <math display=\"inline\"><mi>θ</mi></math> (penduluaren angelua) eta <math display=\"inline\"><mi>y</mi></math> (soka poleatik zenbat mugitu den)."
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/24d5742d3293ad47.svg",
     "zabalera": 204
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dispositibo nagusia: pendulutik zintzilikatutako polea, bi masekin."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Posizioak eta abiadurak</strong> (bertikala beherantz):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>z</mi><msub><mi>m</mi><mn>1</mn></msub></msub><mo>=</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><msub><mi>m</mi><mn>1</mn></msub></msub><mo>=</mo><mi>−</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>z</mi><msub><mi>m</mi><mn>2</mn></msub></msub><mo>=</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><msub><mi>m</mi><mn>2</mn></msub></msub><mo>=</mo><mi>−</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><msub><mi>m</mi><mi>i</mi></msub></msub><mo>=</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><msub><mi>m</mi><mi>i</mi></msub></msub><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Energia zinetikoa</strong> (garapen osoa koadernoan; emaitza):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mi>ℓ</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mspace width=\"0.167em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mi>ℓ</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mspace width=\"0.167em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Potentziala</strong>: <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ℓ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ℓ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, eta <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mi>θ</mi></math>-ren ekuazioa</strong> (Euler-Lagrange, gai gurutzatuak ezabatu ondoren):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><msup><mi>ℓ</mi><mn>2</mn></msup><mo>−</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><mi>g</mi><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><msup><mi>ℓ</mi><mn>2</mn></msup><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><mi>g</mi><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oszilazio oso txikietan (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>→</mo><mi>θ</mi></mrow></math>, gai gurutzatuak arbuiatuz): <math display=\"inline\"><mrow><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Interpretazioa (egilearena)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "&quot;Hau ez dago gaizki: angelu-aldaketarik ez badago, ez dago azelerazio angeluarrik — grabitateak ez du eraginik sistemaren multzoan <math display=\"inline\"><mi>θ</mi></math> aldagaiari dagokionez. Masa bat behera mugitzeak ez du <math display=\"inline\"><mi>θ</mi></math> aldatzen.&quot; Eta indarrak aztertuta: alde bakoitzean indar bera badago, <math display=\"inline\"><mrow><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> nulua da — ondo: <math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Masa berdinekin</strong> (<math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>), <math display=\"inline\"><mi>θ</mi></math>-ren ekuazioak forma hau hartzen du:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><msup><mi>ℓ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>g</mi><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>g</mi><mi>ℓ</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Egilearen oharra, koadernoan letra handiz: <strong>&quot;pendulu-formula madarikatua itzuli da!&quot;</strong> — dispositiboak pendulu sinplea berreskuratzen du limite egokian."
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mi>y</mi></math>-ren ekuazioa</strong>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>−</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi>ℓ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><mi>g</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi>ℓ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mi>g</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Masa berdinekin: <math display=\"inline\"><mrow><mn>2</mn><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math> — &quot;ez dago aldaketarik alturan, PERFEKTU&quot;. Eta angeluak arbuiatuta (penduluak zintzilik baina geldi):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>−</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Atwood-en makina, berretsia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "UPVko formularioaren arabera, poleak inertzia-momentua duenean <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo>+</mo><mi>I</mi><mi>/</mi><msup><mi>R</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>−</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi></mrow></math> da; polea arina bada, egilearen emaitza bera. Koadernoan: &quot;BERRETSIA ATWOOD-EN MAKINA. DE PUTA MADRE&quot; (orri osoko sinadurarekin). Dispositiboak bi limite klasikoak berreskuratzen ditu: pendulu sinplea eta Atwood — horixe zen proba."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Hagatxo artikulatuaren saiakera",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Gidan kontatzen duenez, egileak beste murrizketa bat gehitu zion dispositiboari: bi masak lotzen dituen hagatxo artikulatu bat, masen arteko distantzia finkatzeko. Distantzia-murrizketa hori <math display=\"inline\"><mrow><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mi>d</mi></mrow></math> eran idatzi behar da — osagaiak angelu independenteen bidez adierazi, karratuak egin, eta hori guztia Euler-Lagrangera eraman: &quot;café para cafeteros&quot;. Ez zuen ekuazioak sinplifikatzen lagundu (asko korapilatu zituen), baina murrizketak idazten ikasteko ariketa bikaina izan zen. Hiru aldagai independente zituen bertsioa ebatzi gabe geratu zen (bideoetan ere ez zuen antzeko problemarik aurkitu)."
      }
     ]
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "97Feb03 azterketa: malgukia eta pendulua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "UPV/EHUko azterketa-liburuko problema (1997ko otsaila, 3.a; liburua: <code>fuentes_originales/LAGRANGIANO/LG péndulos/LG 97 feb 03...</code>), egilearen dispositiboaren &quot;senide akademikoa&quot; — berak esana: &quot;konturatu gabe, berdina egin nuen baina malguki batekin&quot;."
    },
    {
     "mota": "testua",
     "html": "<strong>Enuntziatua</strong> (laburtuta): <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> masa malguki bertikal batetik (<math display=\"inline\"><mi>k</mi></math>) zintzilik, mugimendu bertikala soilik (<math display=\"inline\"><mi>y</mi></math>); <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>-etik masarik gabeko <math display=\"inline\"><mi>a</mi></math> hagatxoa <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>-rekin (<math display=\"inline\"><mi>θ</mi></math>). Lagrangearra idatzi, higidura-ekuazioak atera, desplazamendu txikien hurbilketa egin eta interpretatu; <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi></mrow></math> eginda, limiteak: a) <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>, b) <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo></mrow></math> kte, c) <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>∞</mi></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/1d6f8ae1c9a830ac.svg",
     "zabalera": 156
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "97Feb03: malguki bertikala (<math display=\"inline\"><mi>k</mi></math>), <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> masa eta masarik gabeko <math display=\"inline\"><mi>a</mi></math> hagatxoa <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>-rekin."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Egilearen ebazpena</strong> (hiru fitxa, transkripzio zuzena):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><msub><mi>m</mi><mn>1</mn></msub></msub><mo>=</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><msub><mi>m</mi><mn>2</mn></msub></msub><mo>=</mo><mi>−</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><msub><mi>m</mi><mn>2</mn></msub></msub><mo>=</mo><mi>y</mi><mo>−</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>a</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mi>y</mi><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>a</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(fitxaren goiburuan, azpimarratuta: &quot;erne potentzialen zeinuen aukeraketarekin&quot;)."
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mi>y</mi></math>-ren ekuazioa</strong> (fitxan koadro batean):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>a</mi><msub><mi>m</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mo>+</mo><mi>k</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mi>θ</mi></math>-ren ekuazioa</strong> (fitxan koadro batean):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>m</mi><mn>2</mn></msub><msup><mi>a</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>a</mi><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>g</mi></mrow><mi>a</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Liburuaren aurkako egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Liburuaren ebazpen ofizialak (16. or.), <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi></mrow></math> eginda eta txikietan: <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>k</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi>y</mi><mo>=</mo><mi>−</mi><mi>g</mi></mrow></math> (oszilazio bertikala, <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mn>2</mn><mi>m</mi></mrow></msqrt></mrow></math>, oreka <math display=\"inline\"><mrow><msub><mi>y</mi><mrow><mtext mathvariant=\"normal\">eq </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>−</mi><mn>2</mn><mi>m</mi><mi>g</mi><mi>/</mi><mi>k</mi></mrow></math>) eta <math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>g</mi><mi>a</mi></mfrac><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></mrow></math>) — bi higidura harmoniko <strong>desakoplatu</strong>, intuizioaren aurka. Limiteak: <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>-k bertikala uzten du, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo></mrow></math> kte-k pendulua, eta <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>∞</mi></mrow></math>-k <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> dakar (aurrekoaren baliokidea). Egilearen ekuazio orokorrak liburukoekin bat datoz hurbilketa aplikatuta."
      }
     ]
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Oxford-eko diskoa: polea masaduna, malgukia eta masa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Test-problema (azaroak 23an ebatzia — &quot;gaur egin dudana aurkitu berri dut&quot;): <math display=\"inline\"><mi>k</mi></math> malgukia eta <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> masa, <math display=\"inline\"><mi>a</mi></math> erradioko polea-disko masadun batez (<math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>) lotuta; diskoa altuera finkoan biratzen da. Lau aukera ematen dira <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover></math>-ren ekuaziorako."
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/1b2ebf9f06db1894.svg",
     "zabalera": 173
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Oxford-eko diskoa: polea masaduna (<math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>, <math display=\"inline\"><mi>a</mi></math> erradioa), malgukia lurrera eta <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> zintzilik."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Egilearen ebazpena</strong> (hiru fitxa): <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>r</mi><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>I</mi><mrow><mtext mathvariant=\"normal\">disko </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msup><mi>r</mi><mn>2</mn></msup></mrow></math>;"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo>=</mo><mi>−</mi><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>+</mo><mi>r</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup><msup><mi>θ</mi><mn>2</mn></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Euler-Lagrange:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mi>r</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Limiteen azterketa</strong> (fitxetan):"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≫</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>: <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo>−</mo><mi>r</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mi>k</mi><mi>r</mi><mi>θ</mi></mrow></math> — &quot;grabitatearen indarraren eta diskoa kontrako noranzkoan mugitzen duen indarraren arteko aldea malgukiari zor zaio&quot; (<math display=\"inline\"><mrow><mi>r</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>a</mi></mrow></math>).",
      "<math display=\"inline\"><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>≫</mo><msub><mi>m</mi><mn>1</mn></msub></mrow></math>: <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>r</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><msub><mi>m</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> — &quot;grabitatea desagertzen da: diskoaren edozein mugimendu malgukiari zor zaio&quot;.",
      "&quot;Ariketa integrala&quot;: diskoak masaren laukoitza badu (<math display=\"inline\"><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><msub><mi>m</mi><mn>1</mn></msub></mrow></math>), <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn><msub><mi>m</mi><mn>1</mn></msub></mrow></math> eta ekuazioa <math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mfrac><mi>g</mi><mrow><mn>3</mn><mi>a</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mrow><mn>3</mn><msub><mi>m</mi><mn>1</mn></msub></mrow></mfrac><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> bihurtzen da — test-aukeren formakoa. Oharra fitxan: &quot;garrantzitsua: grabitatea eta malgukiaren azelerazioa kontrako zeinuekin; eta bigarren gaia <math display=\"inline\"><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac></math>-tik dator&quot;."
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Bideo-azterketen katalogoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ebatzitako bideo-problemak, egilearen ohar metodologikoekin (jatorriak karpetaka gordeta; estekak <code>.md</code> fitxategietan):"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Aldapa higikorra gainean blokea</strong> — koordenatu orokortuak <math display=\"inline\"><msub><mi>q</mi><mn>1</mn></msub></math> (aldapan gora) eta <math display=\"inline\"><mrow><msub><mi>q</mi><mn>2</mn></msub><mo>=</mo><mi>X</mi></mrow></math> (aldapa bera); abisua: <math display=\"inline\"><msub><mi>q</mi><mn>1</mn></msub></math> <strong>ez da inertziala</strong>, loturak esplizituki idatzi behar dira.",
      "<strong>Masa bertikala vs masa aldapan (polea eta marruskadura)</strong> — gakoa: <math display=\"inline\"><mi>x</mi></math> aldapan zehar har daiteke (ez bertikalean); soka poleatik <strong>azpitik</strong> pasatzen denez <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mi>/</mi><mn>2</mn></mrow></math>; eta <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> denez <math display=\"inline\"><mi>θ</mi></math> ez da koordenatu berri bat (konstantea da).",
      "<strong>Masa hagatxo birakari batetik behera</strong> — koordenatu naturalak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
      "<strong>Pendulua bagoi azeleratuan</strong> — lotura <strong>behartua</strong> denboraren menpe: <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>a</mi><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></math>; metodologiaren 8 pausoen adibide kanonikoa (egilearen 9 pausoen iturria).",
      "<strong>Pendulua oinarri aske baten gainean</strong> — &quot;bideo osoa: integrazioa eta iruzkina barne&quot;; egileak dio konturatu gabe berak berdina egin zuela malgukiarekin (97Feb03!).",
      "<strong>Pendulua horizontalki mugitua</strong> — EBAZPEN OSOA: hurbilketak, ekuazio- sistema nola ebatzi eta nola integratu.",
      "<strong>Pendulua 3D-n</strong> — bola baten barruan pilotatxo gisa (43:22-tik).",
      "<strong>Partikula kono batean behera (koordenatu zilindrikoak)</strong> — ondorioa: <math display=\"inline\"><mi>θ</mi></math>-rekiko higidura-ekuazioak <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> konstantea dela dio: edozein alturatan, bira bakoitzeko denbora bera.",
      "<strong>Pilota gainazal batetik banantzen da (loturak)</strong> — lotura-indarra (normala) noiz zerora jaisten den aztertzeko teknika.",
      "<strong>Haga horma batean behera irristatzen</strong> — &quot;problema hau modu askotan gaizki planteatu nuen, polarretan pentsatuta ere&quot;; ikasitakoa: loturek hormak egiten duen indar normala adierazten laguntzen dute, eta <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi></mrow></math> ez dira hasieratik angelura murriztu behar — formulak osatu ondoren baizik. Zalantza irekia: hagak horma noiz uzten duen kalkulatzen duen azken pausoa."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkietatik zuzenean transkribatua eta itzulia (INGESTA tanda LAGRANGIANOS, 2026-08-25). Jatorria: <code>fuentes_originales/LAGRANGIANO/</code> (37 fitxategi: 17 irudi + gai-karpetak + oharrak) eta egilearen gida (<code>0 Lagrangianos. Una guía para mí....md</code>). Lagrange Season: 2023ko azaroaren 22-29. Transkribatutakoa: dispositibo nagusia (koadernoko bi orriak, osorik), 97Feb03ren hiru fitxak, Oxford-diskoaren hiru fitxak eta gidako metodologia. Bideo-kapturak (Van Biezen, PHYI-SI, PhyShell...) ez dira kopiatu: katalogoan estekaz aipatzen dira, egilearen oharrekin. Azterketa-liburuaren ebazpena (97Feb03) ez da erreproduzitu: emaitza nagusiak egiaztapen gisa aipatu dira soilik. Egilearen gidako hitzak: &quot;cuando volvamos a lagrangianoar lo primero sería pasar los ejercicios a LaTeX&quot; — horixe da kapitulu hau, Typst-en. Eta koadernoko azken oharra, poleadun penduluaz: <strong>&quot;Lo conseguí sacar :)&quot;</strong>."
      }
     ]
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Tornua, haga irristakorra eta pendulu bikia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hiru dispositibo gehiago, bakoitza bere enuntziatu, irudi eta ebazpen osoarekin. Hirurek gauza bera erakusten dute, angelu banatatik: nola loturek eta koordenatu ondo aukeratuek problema &quot;bektorial&quot; itxurakoak kalkulu huts bihurtzen dituzten."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Tornua: aldapa, balantzina eta pendulua"
    },
    {
     "mota": "problema",
     "izena": "Tornua",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zutoin baten gaineko ardatz horizontal finko baten inguruan barra birakari bat dago (<math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>; inertzia-momentua ardatzarekiko <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msup><mi>r</mi><mn>2</mn></msup></mrow></math>; muturrak ardatzetik <math display=\"inline\"><mi>r</mi></math>-ra). Ezkerreko muturretik <math display=\"inline\"><msub><mi>m</mi><mn>3</mn></msub></math> pendulua dago zintzilik, <math display=\"inline\"><mi>ℓ</mi></math> luzerako hagatxo arinarekin. Eskuineko muturrari soka bat lotu zaio: zoruko polea batetik behera eta aldaparen gailurreko beste batetik gora pasata, <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> blokeari aldapari paraleloki tira egiten dio (<math display=\"inline\"><mi>β</mi></math> malda). Biraketa-tarte txikietan muturren higidura bertikaltzat har daiteke: <math display=\"inline\"><mrow><mi>+</mi><mi>φ</mi></mrow></math> biratzean eskuineko muturra <math display=\"inline\"><mrow><mi>r</mi><mi>φ</mi></mrow></math> jaisten da — blokeak aldapan behera <math display=\"inline\"><mrow><mi>r</mi><mi>φ</mi></mrow></math> irristatuz soka askatzen du — eta ezkerrekoa, penduluaren esekidura, <math display=\"inline\"><mrow><mi>r</mi><mi>φ</mi></mrow></math> igotzen. Idatzi higidura-ekuazioak, egiaztatu limiteak, eta aztertu oszilazio txikiak bigarren ordenaraino."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/6971752b259973df.svg",
     "zabalera": 450
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tornua: balantzinaren ezker muturretik pendulua zintzilik; eskuineko muturreko soka, zoruko polean behera eta gailurreko polean gora, blokeari aldapari paralelo lotzen zaio. Blokeak behera egitean pendulua igo egiten da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Koordenatuak eta posizioak.</strong> Bi askatasun-gradu: <math display=\"inline\"><mi>φ</mi></math> (balantzinaren biraketa) eta <math display=\"inline\"><mi>θ</mi></math> (penduluaren angelua). Soka luzaezina denez, <math display=\"inline\"><mrow><mi>+</mi><mi>φ</mi></mrow></math> biratzean eskuineko muturrak <math display=\"inline\"><mrow><mi>r</mi><mi>φ</mi></mrow></math> jaitsi eta soka horrenbeste askatzen du; polea biek norabidea baino ez dute aldatzen. Ardatzak: <math display=\"inline\"><mi>y</mi></math> gorantz, jatorria balantzinaren ardatzean."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Blokea: aldapan zehar <math display=\"inline\"><mrow><mi>r</mi><mi>φ</mi></mrow></math> jaisten da, beraz altuera <math display=\"block\"><mrow><mi>h</mi><mo>=</mo><mi>c</mi><mo>−</mo><mi>r</mi><mi>φ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>h</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>,</mo></mrow></math> eta abiadura, aldapari paralelo, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>.",
      "Balantzina: <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msup><mi>r</mi><mn>2</mn></msup></mrow></math> emandako inertzia-momentua.",
      "Penduluaren esekidura (ezkerreko muturra): <math display=\"inline\"><mrow><msub><mi>y</mi><mi>e</mi></msub><mo>=</mo><mi>+</mi><mi>r</mi><mi>φ</mi></mrow></math> (<strong>gorantz</strong> <math display=\"inline\"><mrow><mi>+</mi><mi>φ</mi></mrow></math>-rekin). Bola, esekiduratik <math display=\"inline\"><mi>ℓ</mi></math>-ra: <math display=\"block\"><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><msub><mi>x</mi><mi>e</mi></msub><mo>+</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mn>3</mn></msub><mo>=</mo><mi>r</mi><mi>φ</mi><mo>−</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Abiadurak, osagaika.</strong> Deribatu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>3</mn></msub><mo>=</mo><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>3</mn></msub><mo>=</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta karratuak batu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>v</mi><mn>3</mn><mn>2</mn></msubsup><mo>=</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>3</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>3</mn><mn>2</mn></msubsup><mo>=</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>r</mi><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>=</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>r</mi><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Lagrangearra.</strong> Hiru zatiak batuta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>I</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>3</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>r</mi><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><mo>−</mo><mi>r</mi><mi>φ</mi><mi mathvariant=\"normal\">sin</mi><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mi>φ</mi><mo>−</mo><mi>ℓ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>24</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>3</mn></msub><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mi>V</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi pisuak <strong>lehian</strong> daude: blokeak <math display=\"inline\"><mi>φ</mi></math> handitu nahi du (behera irristatu), penduluaren masak txikitu (bere aldea jaitsi) — balantzina kontrapisu-makina bat da."
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mi>θ</mi></math>-ren ekuazioa.</strong> Hiru zatiak banan-banan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><msub><mi>m</mi><mn>3</mn></msub><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>m</mi><mn>3</mn></msub><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><msub><mi>m</mi><mn>3</mn></msub><mi>g</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kenketan <math display=\"inline\"><mrow><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> gaiak <strong>elkar ezabatzen dira</strong> — beti da seinale ona — eta <math display=\"inline\"><mrow><msub><mi>m</mi><mn>3</mn></msub><mi>ℓ</mi></mrow></math>-rekin zatituta:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>r</mi><mi>ℓ</mi></mfrac><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mfrac><mi>g</mi><mi>ℓ</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mi>φ</mi></math>-ren ekuazioa.</strong> Berdin, <math display=\"inline\"><mrow><mi>M</mi><mo>≔</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub></mrow></math> laburduraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>M</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>M</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>−</mo><msub><mi>m</mi><mn>3</mn></msub><mi>g</mi><mi>r</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>M</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mi mathvariant=\"normal\">sin</mi><mi>β</mi><mo>−</mo><msub><mi>m</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mi>r</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Egiaztapenak.</strong> Bost limite, ekuazioetatik zuzenean:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Balantzina geldi</strong> (<math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math>; adibidez <math display=\"inline\"><mrow><mi>I</mi><mo>→</mo><mi>∞</mi></mrow></math>): <math display=\"inline\"><mi>θ</mi></math>-ren ekuazioa <math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mi>/</mi><mi>ℓ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> bihurtzen da — pendulu arrunta.",
      "<strong>Oreka</strong>: <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>=</mo><msub><mi>m</mi><mn>3</mn></msub></mrow></math> bada, eskuineko aldeko tira (<math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math>, sokan zehar) eta ezkerrekoa (<math display=\"inline\"><mrow><msub><mi>m</mi><mn>3</mn></msub><mi>g</mi></mrow></math>) berdinduta daude: <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math> eta pendulua arrunta da. Kontrapisuaren baldintza zehatza.",
      "<strong>Blokeak agintzen du</strong> (<math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≫</mo><msub><mi>m</mi><mn>2</mn></msub><mo>,</mo><msub><mi>m</mi><mn>3</mn></msub></mrow></math>): <math display=\"inline\"><mrow><mi>M</mi><mo>≈</mo><msub><mi>m</mi><mn>1</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> — aldapan beherako irristatze askea, sokak ia eragotzi gabe.",
      "<strong>Penduluak agintzen du</strong> (<math display=\"inline\"><mrow><msub><mi>m</mi><mn>3</mn></msub><mo>≫</mo><msub><mi>m</mi><mn>1</mn></msub><mo>,</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>): <math display=\"inline\"><mrow><mi>M</mi><mo>≈</mo><msub><mi>m</mi><mn>3</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>g</mi></mrow></math> — <strong>kontrako zeinuarekin</strong>: orain penduluaren aldea da erortzen dena, balantzina bestaldera biraka. Esekidura erorketa askean, beraz; eta hori <math display=\"inline\"><mi>θ</mi></math>-ren ekuazioan sartuta: <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mfrac><mi>g</mi><mi>ℓ</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mfrac><mi>g</mi><mi>ℓ</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math> — erorketa askeko penduluak ez du kulunkarik: <strong>baliokidetasun-printzipioa</strong>, ekuazioek doan emana.",
      "<strong>Balantzin zabala</strong> (<math display=\"inline\"><mi>r</mi></math> handia): <math display=\"inline\"><mrow><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover></mrow></math> finkoa geratzen denez <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>∝</mo><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> — beso erraldoiek ia biratu gabe ordaintzen dute soka."
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Oszilazio txikiak, lehen ordena.</strong> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mn>1</mn></mrow></math> eginda, <math display=\"inline\"><mi>φ</mi></math>-ren ekuazioko gurutze-gaiak (<math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi>θ</mi></mrow></math>, <math display=\"inline\"><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></math>) bigarren ordenakoak dira eta lehen hurbilketan erortzen dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>M</mi><msup><mi>r</mi><mn>2</mn></msup><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mi mathvariant=\"normal\">sin</mi><mi>β</mi><mo>−</mo><msub><mi>m</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mi>r</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>r</mi><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>b</mi><mi mathvariant=\"normal\">sin</mi><mi>β</mi><mo>−</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>a</mi><mo>≔</mo><mfrac><msub><mi>m</mi><mn>3</mn></msub><mi>M</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>≔</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><mi>M</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Balantzina <strong>azelerazio konstantez</strong> abiatzen da: blokeak agintzen badu (<math display=\"inline\"><mrow><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>&gt;</mo><mi>a</mi></mrow></math>), esekidura gorantz. <math display=\"inline\"><mi>θ</mi></math>-ren ekuazioan <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub></mrow></math> sartuta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mi>g</mi><mo>+</mo><mi>r</mi><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub></mrow><mi>ℓ</mi></mfrac><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>g</mi><mo>+</mo><mi>r</mi><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub><mo>=</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>a</mi><mo>+</mo><mi>b</mi><mi mathvariant=\"normal\">sin</mi><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>a</mi><mo>+</mo><mi>b</mi><mi mathvariant=\"normal\">sin</mi><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mi>g</mi><mi>ℓ</mi></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "— penduluak <strong>grabitate eraginkorra</strong> sentitzen du: <math display=\"inline\"><mi>g</mi></math> gehi esekiduraren goranzko azelerazioa. Blokeak esekidura goratzen duenean kulunka <strong>zurrundu</strong> egiten da; penduluaren aldea erortzen ari bada (<math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math>), berriz, moteldu. Soluzioa, zabal eta geldi abiatuta: <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Bigarren ordena: balantzinak penduluaren taupada entzuten du.</strong> <math display=\"inline\"><mi>φ</mi></math>-ren ekuazioan gurutze-gaiak gordeta (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mn>1</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>M</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mi mathvariant=\"normal\">sin</mi><mi>β</mi><mo>−</mo><msub><mi>m</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mi>r</mi><mo>−</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Parentesi hori deribatu oso bat da — hau da pausorik politena:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>θ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math> sartuta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>θ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>ω</mi><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>ω</mi><mi>t</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo>=</mo><mi mathvariant=\"normal\">sin</mi><mn>2</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>θ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>ω</mi><mi>t</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>r</mi><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub><mo>+</mo><mi>a</mi><mi>ℓ</mi><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>ω</mi><mi>t</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Integratu</strong>, <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> hastapenekin. Behin:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>r</mi><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub><mi>t</mi><mo>+</mo><mfrac><mrow><mi>a</mi><mi>ℓ</mi><mi>ω</mi><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>t</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ordezkatuta </mtext><mspace width=\"0.333em\"></mspace></mrow><mn>0</mn><mo>=</mo><mn>0</mn><mo>+</mo><mn>0</mn><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Berriz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mi>φ</mi><mo>=</mo><mi>r</mi><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub><mfrac><msup><mi>t</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mfrac><mrow><mi>a</mi><mi>ℓ</mi><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup></mrow><mn>4</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>t</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ordezkatuta </mtext><mspace width=\"0.333em\"></mspace></mrow><mn>0</mn><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mi>ℓ</mi><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>4</mn></mfrac><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mi>a</mi><mi>ℓ</mi><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup></mrow><mrow><mn>4</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>r</mi><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><munder><mrow><mi>r</mi><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub><mfrac><msup><mi>t</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> gai sekularra</mtext></mrow></munder><mo>+</mo><munder><munder><mrow><mfrac><mrow><mi>a</mi><mi>ℓ</mi><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup></mrow><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mn>2</mn><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mn>2</mn><mi>ω</mi><mtext mathvariant=\"normal\">-ko harmonikoa</mtext></mrow></munder></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Atzera <math display=\"inline\"><mi>θ</mi></math>-ren ekuazioan.</strong> Grabitate eraginkorra orain aldakorra da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>g</mi><mo>+</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>g</mi><mo>+</mo><mi>r</mi><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub><mo>+</mo><mi>a</mi><mi>ℓ</mi><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>ω</mi><mi>t</mi><mo>=</mo><mi>ℓ</mi><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>a</mi><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mi mathvariant=\"normal\">cos</mi><mn>2</mn><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta <math display=\"inline\"><mi>θ</mi></math>-ren ekuazioa, <math display=\"inline\"><mi>ℓ</mi></math>-rekin zatituta:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>a</mi><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mi mathvariant=\"normal\">cos</mi><mn>2</mn><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "— <strong>Mathieu-ren ekuazioa</strong>, kitzikapen parametrikoa <math display=\"inline\"><mrow><mn>2</mn><mi>ω</mi></mrow></math>-n: erresonantzia parametrikoaren baldintza zehatza. Penduluaren kulunkak balantzina astintzen du bere maiztasun bikoitzean, eta balantzinak kulunka elikatzen du bueltan — zabuan hankak biltzearen fisika bera. Ekuazio-familia honen azterketa osoa III. blokekoa da (<code>03mm_08dinamikoak</code>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Haga hormaren kontra irristaka"
    },
    {
     "mota": "problema",
     "izena": "Haga irristakorra",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>ℓ</mi></math> luzerako haga homogeneoa (<math display=\"inline\"><mi>m</mi></math>, <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup></mrow></math> masa-zentroarekiko) horma bertikalaren kontra dago, <math display=\"inline\"><msub><mi>θ</mi><mn>0</mn></msub></math> angeluan zoruarekiko, eta geldi askatzen da. Dena marruskadurarik gabe. Idatzi higidura-ekuazioa Lagrange biderkatzaileekin, aurkitu hormaren eta zoruaren indar normalak, eta kalkulatu zein angelutan uzten duen hagak horma."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/467fffdbfd79e060.svg",
     "zabalera": 216
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Haga hormaren kontra: <math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>λ</mi><mn>2</mn></msub></math> biderkatzaileak hormaren eta zoruaren indar normalak dira, ez gehiago eta ez gutxiago."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Koordenatuak eta loturak.</strong> Masa-zentroa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta angelua <math display=\"inline\"><mi>θ</mi></math> — hiru koordenatu, bi lotura:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mo>=</mo><mi>x</mi><mo>−</mo><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (muturra horman)</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>G</mi><mn>2</mn></msub><mo>=</mo><mi>y</mi><mo>−</mo><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (muturra zoruan)</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Deribatu partzialak, gero beharko ditugunak:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><msub><mi>G</mi><mn>1</mn></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><msub><mi>G</mi><mn>1</mn></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><msub><mi>G</mi><mn>1</mn></msub></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><msub><mi>G</mi><mn>2</mn></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><msub><mi>G</mi><mn>2</mn></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><msub><mi>G</mi><mn>2</mn></msub></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Lagrangearra eta ekuazioak.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>I</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>y</mi></mrow></math>, eta biderkatzaileekin, <math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><msub><mo>∑</mo><mi>k</mi></msub><msub><mi>λ</mi><mi>k</mi></msub><mfrac><mrow><mi>∂</mi><msub><mi>G</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>m</mi><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>m</mi><mi>g</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>I</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "— <strong><math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math> hormaren indar normala da, eta <math display=\"inline\"><msub><mi>λ</mi><mn>2</mn></msub></math> zoruarena.</strong> Egiaztapena: haga geldi badago, <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi><mi>g</mi></mrow></math>, behar bezala."
    },
    {
     "mota": "testua",
     "html": "<strong>Loturak deribatu.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ℓ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ℓ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> direnez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Dena <math display=\"inline\"><mi>θ</mi></math>-ren ekuazioan.</strong> <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>m</mi><mi>g</mi></mrow></math> ordezkatu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>m</mi><mfrac><msup><mi>ℓ</mi><mn>2</mn></msup><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mi>m</mi><mfrac><msup><mi>ℓ</mi><mn>2</mn></msup><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mi>ℓ</mi></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>=</mo><mi>−</mi><mi>m</mi><mfrac><msup><mi>ℓ</mi><mn>2</mn></msup><mn>4</mn></mfrac><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>−</mo><mi>m</mi><mfrac><msup><mi>ℓ</mi><mn>2</mn></msup><mn>4</mn></mfrac><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mi>m</mi><mfrac><msup><mi>ℓ</mi><mn>2</mn></msup><mn>4</mn></mfrac><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mi>m</mi><mfrac><msup><mi>ℓ</mi><mn>2</mn></msup><mn>4</mn></mfrac><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mi>ℓ</mi></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></math>-dun biak <strong>elkar ezabatzen dira</strong>, eta <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mn>1</mn></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>I</mi><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><mi>ℓ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> sartuta</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mn>12</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>ℓ</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "— eskailera irristakorraren ekuazio klasikoa."
    },
    {
     "mota": "testua",
     "html": "<strong>Energia.</strong> <math display=\"inline\"><mrow><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><msup><mi>ℓ</mi><mn>2</mn></msup><mn>4</mn></mfrac><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msup><mi>ℓ</mi><mn>2</mn></msup><mn>4</mn></mfrac><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>, beraz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>I</mi><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Geldi abiatuta (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mi>m</mi><mi>g</mi><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mi>ℓ</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Hormaren normala, esplizituki.</strong> Orain dena dugu <math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math> idazteko:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>m</mi><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta bi zatiak ordezkatu, banan-banan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>ℓ</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mi>ℓ</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mi>ℓ</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><mi mathvariant=\"normal\">sin</mi><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mi>ℓ</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>m</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hasieran, <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>: parentesia <math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>&lt;</mo><mn>0</mn></mrow></math> da eta <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn></mrow></math> — hormak bultza egiten du, behar bezala. Haga jaitsi ahala parentesia hazi egiten da, eta zero egiten den unean hormak ez du jada zer bultzatu. Hormak ezin duenez <strong>tira</strong> egin, hor uzten du hagak horma:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ia bertikaletik abiatuta (<math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>→</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>): <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>=</mo><mn>2</mn><mi>/</mi><mn>3</mn></mrow></math>, hots <math display=\"inline\"><mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>≈</mo><mn>41.8</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. Handik aurrera zoruko muturra bakarrik dago lotuta, eta problema berri (errazago) bat hasten da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Pendulu bikia polea batean"
    },
    {
     "mota": "problema",
     "izena": "Pendulu bikia polean",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sabaiko polea batetik soka luzaezina pasatzen da, eta muturretatik bi pendulu berdin zintzilikatzen dira (<math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> bolak, biak <math display=\"inline\"><mi>ℓ</mi></math> luzerako haga arinekin). Sokak esekidura-puntuen altuerak trukatzen ditu: batak <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math> igotzen badu, besteak <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math> jaitsi. Idatzi higidura-ekuazioak biderkatzailearekin eta koordenatu murriztuetan, eta ebatzi oszilazio txikien kasua."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/871fe15f7540d589.svg",
     "zabalera": 292
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Pendulu bikia polean: sokak esekiduren altuerak trukatzen ditu (<math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>), eta <math display=\"inline\"><mi>λ</mi></math> biderkatzailea sokaren tentsioa da. Hau da koadernoetako dispositibo nagusia."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Koordenatuak, posizioak eta lotura.</strong> Lau koordenatu <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo>,</mo><mi>θ</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> — esekiduren altuerak eta bi angeluak — eta lotura bakarra, soka:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>G</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>G</mi></mrow><mrow><mi>∂</mi><msub><mi>y</mi><mn>1</mn></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>G</mi></mrow><mrow><mi>∂</mi><msub><mi>y</mi><mn>2</mn></msub></mrow></mfrac><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>G</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>G</mi></mrow><mrow><mi>∂</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Azken bi horiek gauza garrantzitsua diote: <strong>loturak ez ditu angeluak ukitzen</strong>, beraz <math display=\"inline\"><mi>θ</mi></math> eta <math display=\"inline\"><mi>φ</mi></math>-ren ekuazioetan ez da biderkatzailerik agertuko. Esekidurak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>c</mi><mi>/</mi><mn>2</mn><mo>,</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><mi>/</mi><mn>2</mn><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> puntuetan daude; bolak:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mfrac><mi>c</mi><mn>2</mn></mfrac><mo>−</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>y</mi><mo accent=\"true\">̃</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mfrac><mi>c</mi><mn>2</mn></mfrac><mo>+</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>y</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mi>y</mi><mn>2</mn></msub><mo>−</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Abiadurak, osagaika.</strong> Lehenengo pendulua:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mover><mi>y</mi><mo accent=\"true\">̃</mo></mover><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>+</mo><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>=</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msubsup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>=</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msubsup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta simetriaz, bigarrena:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msubsup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Lagrangearra.</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msubsup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msubsup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><mi>ℓ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>2</mn></msub><mo>−</mo><mi>ℓ</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Esekiduren ekuazioak, biderkatzailearekin.</strong> <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math>-arentzat:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub></mrow></mfrac><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><mi>ℓ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>y</mi><mn>1</mn></msub></mrow></mfrac><mo>=</mo><mi>−</mi><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><mi>ℓ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mo>=</mo><mi>λ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>m</mi><mn>2</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>ℓ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>+</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mo>=</mo><mi>λ</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "— <strong><math display=\"inline\"><mi>λ</mi></math> sokaren tentsioa da</strong>, bi muturretan bera. Egiaztapena: angeluak izoztuta (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math> finko) Atwood-en makinaren ekuazioak dira, hitzez hitz."
    },
    {
     "mota": "testua",
     "html": "<strong>Angeluen ekuazioak, koordenatu murriztuetan.</strong> <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>y</mi><mn>1</mn></msub></mrow></math> zuzenean ordezkatuta (<math display=\"inline\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub></mrow></math>), hiru koordenatu geratzen dira <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>. <math display=\"inline\"><mi>θ</mi></math>-rena, pausoz pauso:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kenketan <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> gaiak elkar ezabatzen dira — berriz ere — eta <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mi>ℓ</mi></mrow></math>-rekin zatituta, <math display=\"inline\"><mi>φ</mi></math>-renarekin batera (kalkulu berbera, <math display=\"inline\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub></mrow></math> dela):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mi>g</mi><mo>+</mo><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub></mrow><mi>ℓ</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mi>g</mi><mo>−</mo><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub></mrow><mi>ℓ</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Irakurketa fisikoa, zuzenean: pendulu bakoitzak <strong>grabitate eraginkorra</strong> sentitzen du — <math display=\"inline\"><mi>g</mi></math> gehi bere esekiduraren goranzko azelerazioa. Esekidura erorketa askean balego (<math display=\"inline\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi>g</mi></mrow></math>), lehenengo ekuazioa <math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math> litzateke: pendulua ez litzateke kulunkatuko. Baliokidetasun-printzipioa, berriz ere doan."
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math>-en ekuazioa murriztuta.</strong> Bi tentsio-ekuazioak kendu (<math display=\"inline\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><mi>ℓ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msub><mi>m</mi><mn>2</mn></msub><mi>ℓ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>+</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>−</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Oszilazio txikiak.</strong> <math display=\"inline\"><mrow><mi>θ</mi><mo>,</mo><mi>φ</mi><mo>≪</mo><mn>1</mn></mrow></math> eginda, goiko ekuazioko gai angeluar guztiak bigarren ordenakoak dira (<math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>∼</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi>θ</mi></mrow></math>, e.a.), eta lehen ordenan:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>−</mo><msub><mi>m</mi><mn>1</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi>g</mi><mo>≕</mo><msub><mi>a</mi><mi>A</mi></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "— <strong>Atwood-en azelerazioa</strong>, konstantea: alde astunak arina igotzen du. Tentsioa ere Atwood-ena da: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo>+</mo><msub><mi>a</mi><mi>A</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi>g</mi></mrow></math>. Horrekin bi angeluen ekuazioak koefiziente konstantekoak dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mi>θ</mi><mn>2</mn></msubsup><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>ω</mi><mi>θ</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mi>g</mi><mo>+</mo><msub><mi>a</mi><mi>A</mi></msub></mrow><mi>ℓ</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>m</mi><mn>2</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mfrac><mi>g</mi><mi>ℓ</mi></mfrac><mo>;</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mi>φ</mi><mn>2</mn></msubsup><mi>φ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>ω</mi><mi>φ</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mi>g</mi><mo>−</mo><msub><mi>a</mi><mi>A</mi></msub></mrow><mi>ℓ</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>m</mi><mn>1</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mfrac><mi>g</mi><mi>ℓ</mi></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Pendulu bakoitzaren maiztasunean <strong>bestearen</strong> masa agertzen da: <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> astunak <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>-en esekidura gorantz azeleratzen du, eta horrek haren kulunka zurrundu. Sistema, beraz, guztiz desakoplatzen da ordena honetan: Atwood bat gehi bi pendulu aske, grabitate eraginkorrekin."
    },
    {
     "mota": "testua",
     "html": "Eta kasu berezi argigarriena: <strong><math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math> bada, <math display=\"inline\"><mrow><msub><mi>a</mi><mi>A</mi></msub><mo>=</mo><mn>0</mn></mrow></math></strong> — esekidurak geldi geratzen dira eta bi penduluak arruntak dira, biak <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mi>g</mi><mi>/</mi><mi>ℓ</mi></mrow></math>-rekin. Horregatik eskatzen zuen 97Feb03 azterketak (14.-16. or.), azken pausoan, &quot;masak berdinak&quot; izatea: orekan sistema osoa desakoplatu egiten da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Hagatxo artikulatua.</strong> Aldaera honetan bi bolak <math display=\"inline\"><mrow><mn>2</mn><mi>ℓ</mi></mrow></math> luzerako haga zurrun arin batekin lotzen dira, artikulazioz. Posizioak goikoak dira; egiaztatu (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> kasuekin) eta idatzi hagaren distantzia-lotura, <math display=\"block\"><mrow><msub><mi>G</mi><mn>2</mn></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>y</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msub><mo>−</mo><msub><mover><mi>y</mi><mo accent=\"true\">̃</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>4</mn><msup><mi>ℓ</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> gero <math display=\"inline\"><mrow><mi>∂</mi><msub><mi>G</mi><mn>2</mn></msub><mi>/</mi><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></math> deribatuak kalkulatu eta biderkatzailearen ekuazioak planteatu. Zein da <math display=\"inline\"><msub><mi>λ</mi><mn>2</mn></msub></math>-ren esanahi fisikoa?"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hiru problema hauek egilearen fitxa-bildumakoak dira (<code>fuentes_originales/problemas lagrange/</code>, 2026-08-25): tornua 10 fitxatan, haga 4tan, pendulu bikia 8tan, aurkibide bisual batekin. Ebazpenak fitxen bideari jarraitzen dio; zeinu- eta koefiziente-akats txikiak isilean zuzendu dira, eta jatorrizkoak argazkietan eta erregistroan daude (<code>REGISTRO_INGESTA_LAGRANGIANOS_2026-08-25.csv</code>, 0006. lerroa)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "Problemas De Mecanica Clasica Kotkin Serbo (Ed.Mir).pdf, § 4 (or. 20-27) eta § 10 (or. 58-61)",
     "xehetasuna": "Track L: mekanika analitikoaren problema aurreratuak — Lagrangianoa, kontserbazio-printzipioak, Hamiltondarra, Poisson korronteak",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra — Track L (Kotkin-Serbo)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kotkin eta Serboren <strong>Problemas de Mecanica Clasica</strong> (ed. MIR) liburutik ateratako problema aurreratuak. § 4-ko problemak Lagrangiar formalismoari buruzkoak dira (ekintza minimoa, kobariantza, Noether-en teorema, Galileoren transformazioa, loturak); § 10-ekoak Hamiltondar formalismoari buruzkoak (Poisson-en korronteak, gorputz simetrikoaren Hamiltondarra, erresonantzia magnetikoa). Jatorrizko testua gaztelaniaz; euskaratuta. Aguirregabiriaren <strong>Mekanika Klasikoa</strong>-ren (fullmekanika) osagarri dira."
      }
     ]
    },
    {
     "mota": "problema-gaia",
     "testua": "Kotkin-Serbo — § 4. Ekuazioak eta kontserbazio-printzipioak (Lagrangianoa)"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Partikula bat <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>F</mi><mi>x</mi></mrow></math> eremuan <math display=\"inline\"><mi>τ</mi></math> denboran <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-tik <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math>-ra mugitzen da. Aurkitu higiduraren legea, <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mi>B</mi><mi>t</mi><mo>+</mo><mi>C</mi></mrow></math> formakoa dela suposatuz eta <math display=\"inline\"><mi>A</mi></math>, <math display=\"inline\"><mi>B</mi></math>, <math display=\"inline\"><mi>C</mi></math> parametroak ekintza minimo izan dezan aukeratuz."
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
       "html": "Zuzenean kalkulatuz, frogatu Lagrangeren ekuazioen kobariantza <math display=\"inline\"><mrow><msub><mi>q</mi><mi>i</mi></msub><mo>=</mo><msub><mi>q</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>Q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>Q</mi><mi>s</mi></msub><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub></mrow></math> koordenatu-transformazioekiko."
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
       "html": "Aurkitu energiaren eta momentu orokortuaren transformazio-legeak <math display=\"inline\"><mrow><msub><mi>q</mi><mi>i</mi></msub><mo>=</mo><msub><mi>f</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>Q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>Q</mi><mi>s</mi></msub><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub></mrow></math> koordenatu-transformazioarekiko."
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
       "html": "Aurkitu energiaren eta momentu orokortuaren transformazio-legeak, <math display=\"inline\"><mi>z</mi></math> ardatzaren inguruan <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> abiadura angeluarrarekin biratzen den erreferentzi-sistemara pasatzean: a) <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><msup><mi>φ</mi><mo>′</mo></msup><mo>+</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msup><mi>r</mi><mo>′</mo></msup></mrow></math>; b) koordenatu kartesiarretan."
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
       "html": "Aurkitu energiaren eta momentuaren transformazio-legeak <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math> abiadurarekin mugitzen den erreferentzi-sistemara pasatzean."
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
       "html": "Transformazio infinitesimalean <math display=\"inline\"><mrow><msub><mi>q</mi><msup><mi>i</mi><mo>′</mo></msup></msub><mo>=</mo><msub><mi>q</mi><mi>i</mi></msub><mo>+</mo><mi>ε</mi><msub><mi mathvariant=\"normal\">Ψ</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi><mo>+</mo><mi>ε</mi><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ekintza kontserbatzen bada, frogatu <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mfrac><mi>L</mi><mi>∂</mi></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mi>X</mi><mo>−</mo><msub><mi mathvariant=\"normal\">Ψ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>L</mi><mi>X</mi></mrow></math> mugimendu-integrala dela. (Noether-en teorema)"
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
       "html": "Aurkitu mugimendu-integralak ekintza mota aldatzen ez bada: a) desplazamendu espazialean, b) biraketan, c) denbora-jatorriaren desplazamenduan, d) desplazamendu espiralean."
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
       "html": "Aurkitu mugimendu-integralak partikula bat mugitzen bada: a) <math display=\"inline\"><mrow><mi>U</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> eremu uniformean; b) <math display=\"inline\"><mrow><mi>U</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> homogeneoa bada <math display=\"inline\"><mrow><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>α</mi><mi>n</mi></msup><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; c) uhi progresiboaren eremuan <math display=\"inline\"><mrow><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
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
       "html": "Aurkitu Galileoren transformazioari dagokion mugimendu-integrala."
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
       "html": "Idatzi higidura-ekuazioak Lagrangeren funtzioa: a) <math display=\"inline\"><mrow><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></msup><mo>+</mo><mn>2</mn><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><msubsup><mo>∫</mo><mn>0</mn><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></msubsup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>y</mi></mrow></math>; b) <math display=\"inline\"><mrow><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mi>α</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> duten sistemarentzat."
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
       "html": "Lortu partikula baten higidura-ekuazioak grabitazio-eremuan, Lagrangeren multiplikadoreen metodoa erabilita, higidura-muga hauek direla: a) plano bertikaleko parabola; b) plano bertikaleko <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>l</mi></mrow></math> erradioko zirkunferentzia. Adierazi lotura-erreakzio-indarrak."
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
       "html": "Partikula grabitazio-eremuan plano bertikalean uniformeki biratzen den zuzen batean mugitzen da. Idatzi higidura-ekuazioak eta aurkitu lotura-erreakzio-indarraren momentua."
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
       "html": "Loturen eta marruskaduraren eragina sarrerako <math display=\"inline\"><msub><mi>R</mi><mi>i</mi></msub></math> indar orokortuekin deskriba daiteke: <math display=\"inline\"><mrow><mfrac><mi>d</mi><mi>d</mi></mfrac><mi>t</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mfrac><mi>L</mi><mi>∂</mi></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>∂</mi><mfrac><mi>L</mi><mi>∂</mi></mfrac><msub><mi>q</mi><mi>i</mi></msub><mo>=</mo><msub><mi>R</mi><mi>i</mi></msub></mrow></math>. a) Nola aldatzen da energia denborarekiko? b) Nola transformatu <math display=\"inline\"><msub><mi>R</mi><mi>i</mi></msub></math> koordenatu orokortu berrietara?"
      }
     ]
    },
    {
     "mota": "problema-gaia",
     "testua": "Kotkin-Serbo — § 10. Hamiltonen ekuazioak. Poisson-en korronteak"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Partikula-sistema baten Hamiltondarra <math display=\"inline\"><mi>H</mi></math> ez bada aldatzen desplazamendu infinitesimal (biraketa) batean, ondorioztatu momentuaren (momentu angeluarraren) kontserbazio-legea."
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
       "html": "Aurkitu libreki mugitzen den ziba simetriko baten Hamiltondarra, Euler-en <math display=\"inline\"><mi>θ</mi></math>, <math display=\"inline\"><mi>φ</mi></math>, <math display=\"inline\"><mi>ψ</mi></math> angeluak koordenatu hartuta."
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
       "html": "Aurkitu osziladore anarmoniko baten Hamiltondarra, non <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mfrac><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mi>α</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>β</mi><mi>x</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>."
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
       "html": "Aurkitu partikula baten higidura-legea, Hamiltondarra: a) <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>λ</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>; b) <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msqrt><mi>p</mi></msqrt><mo>−</mo><mi>x</mi><mi>F</mi></mrow></math>."
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
       "html": "Aurkitu partikula baten higidura-ekuazioak, Hamiltondarra <math display=\"inline\"><mrow><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>c</mi><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math> bada (argi-izpi bat). Aurkitu trajektoria <math display=\"inline\"><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>a</mi><mi>x</mi></mrow></math> bada."
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
       "html": "Aurkitu Lagrangeren funtzioa, Hamiltondarra: a) <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mfrac><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>−</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒂</mi></mrow></math> (<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konst</mtext></mrow></mrow></math>); b) <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>c</mi><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math>."
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
       "html": "Aurkitu karga duen partikula baten higidura-legea eremu magnetiko uniforme konstantean, Hamiltonen ekuazioak ebatziz. Hartu <math display=\"inline\"><mrow><msub><mi>A</mi><mi>y</mi></msub><mo>=</mo><mi>H</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>A</mi><mi>x</mi></msub><mo>=</mo><msub><mi>A</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "Kalkulatu Poisson-en korronteak: a) <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>M</mi><mi>i</mi></msub><mo>,</mo><msub><mi>x</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>M</mi><mi>i</mi></msub><mo>,</mo><msub><mi>p</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>M</mi><mi>i</mi></msub><mo>,</mo><msub><mi>M</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>; b) <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒃</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑴</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒃</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>; c) <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi mathvariant=\"bold-italic\">𝑴</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo>,</mo><msup><mi>r</mi><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>. Hemen <math display=\"inline\"><msub><mi>x</mi><mi>i</mi></msub></math>, <math display=\"inline\"><msub><mi>p</mi><mi>i</mi></msub></math>, <math display=\"inline\"><msub><mi>M</mi><mi>i</mi></msub></math> osagai kartesiarrak dira eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒂</mi></math>, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒃</mi></math> bektore konstanteak."
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
       "html": "Frogatu <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>M</mi><mi>z</mi></msub><mo>,</mo><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, non <math display=\"inline\"><mi>φ</mi></math> funtzio eskalarra den (koordenatuen edo momentuen funtzioa). Frogatu <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>M</mi><mi>z</mi></msub><mo>,</mo><mi mathvariant=\"bold-italic\">𝒇</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"bold-italic\">𝒏</mi><mi mathvariant=\"bold-italic\">𝒇</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, non <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒇</mi></math> funtzio bektoriala den eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒏</mi></math> <math display=\"inline\"><mi>z</mi></math> ardatzeko bektore unitarioa."
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
       "html": "Aurkitu <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>M</mi><mi>ζ</mi></msub><mo>,</mo><msub><mi>M</mi><mi>ξ</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>, non <math display=\"inline\"><msub><mi>M</mi><mi>ζ</mi></msub></math>, <math display=\"inline\"><msub><mi>M</mi><mi>ξ</mi></msub></math> gorputzari lotutako ardetzetan momentu angeluarraren proiekzioak diren."
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
       "html": "Idatzi <math display=\"inline\"><msub><mi>M</mi><mi>α</mi></msub></math> momentu angeluarraren proiekzioaren higidura-ekuazioak, gorputzari lotutako ardetzetan. Hamiltondarra <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mo>∑</mo><mrow><mi>α</mi><mo>,</mo><mi>β</mi></mrow></msub><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>I</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>α</mi><mi>β</mi></mrow></msub><msub><mi>M</mi><mi>α</mi></msub><msub><mi>M</mi><mi>β</mi></msub></mrow></math>."
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
       "html": "Esfera imantatu baten Hamiltondarra eremu magnetiko uniformean: <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mfrac><msup><mi>M</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>I</mi></mrow></mfrac><mo>−</mo><mi>γ</mi><mi mathvariant=\"bold-italic\">𝑴</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑯</mi></mrow></math>. Idatzi <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑴</mi></math> momentu angeluarraren higidura-ekuazioak eta aurkitu higidura-legea: a) <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑯</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><msub><mi>H</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; b) <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑯</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>H</mi><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>H</mi><mn>1</mn></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>H</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta hasieran <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑴</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><msub><mi>M</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. (Erresonantzia magnetikoa)"
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
       "html": "Frogatu edozein <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> funtzioaren balioa <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean <math display=\"inline\"><mi>p</mi></math> eta <math display=\"inline\"><mi>q</mi></math>-ren balioen funtzioan adierazi daitekeela: <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mo>+</mo><mfrac><mi>t</mi><mrow><mn>1</mn><mi>!</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>H</mi><mo>,</mo><mi>f</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>+</mo><mfrac><msup><mi>t</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>!</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>H</mi><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>H</mi><mo>,</mo><mi>f</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>+</mo><mi>…</mi></mrow></math>, non <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "EHU 2000, ISBN 84-8373-295-5",
     "xehetasuna": "Ebatzitako azterketak (1996-2000), mk:6",
     "hizkuntza": "eu"
    }
   ]
  }
 ]
};
