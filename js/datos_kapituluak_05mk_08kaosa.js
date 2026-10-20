/* JAKINA · kapitulua «B9.8 - Kaos determinista» (05mk_08kaosa), desde edicion2/kapituluak/05mk_08kaosa/05mk_08kaosa.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["05mk_08kaosa"] = {
 "gakoa": "05mk_08kaosa",
 "titulua": "JAKINA - B9 - Mekanika klasikoa - 8/10",
 "azala": "B9.8 - Kaos determinista",
 "azpititulua": "III. aroa - L2",
 "iturburua": "kapituluak/05mk_08kaosa/05mk_08kaosa.typ",
 "sarrera": [],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Kaos determinista",
   "blokeak": [
    {
     "mota": "irudia",
     "oina": "Sakabanatze kaotikoa: 8.24 irudiko problemaren 1024 orbita.",
     "src": "media/irudiak/3f4643b4ee98068d.svg",
     "zabalera": 320
    },
    {
     "mota": "testua",
     "html": "Kaos determinista mekanikan nola agertzen den aztertuko dugu hurrengo orrialdeetan. Oinarrizko kontzeptu batzuk baizik ez ditugu ikusiko eta kontuan hartu behar da kaosa mekanika klasikoan ez ezik zientziaren arlo askotan agertzen dela. Kasu gehienetan ez dakigu nola aurkitu higidura-ekuazioen soluzio zehatzak: testuliburuetan aztertzen diren kasu errazak salbuespen nagusiak dira. Beraz, zenbakizko simulaziora jo beharko dugu<span class=\"j-oin\">[[49] programaz egin dira gai honetako zenbakizko kalkulu guztiak.]</span>."
    },
    {
     "mota": "irudia",
     "oina": "Tresna mekanikoa.",
     "src": "media/irudiak/190bd44aaf6c642b.svg",
     "zabalera": 158
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Tresna mekaniko baten eredu matematiko sinplifikatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Irudiko burdin hariak bi imanen erakarpena pairatzen du eta bai aireak eragindako marruskadura ere. Geroago, <math display=\"inline\"><mi>F</mi></math> kanpo-indar harmoniko bat aplikatuko da haria eta imanak kokaturik dauden euskarrian."
    },
    {
     "mota": "irudia",
     "oina": "Tresna mekanikoaren eredua.",
     "src": "media/irudiak/1e7cea7f6b1825bb.svg",
     "zabalera": 170
    },
    {
     "mota": "testua",
     "html": "Argi denez, <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mn>0</mn></mrow></math> denean bi oreka-posizio egonkor izango ditu sistema honek, burdin hariaren mutur askea iman bakoitzaren ondoan dagoenean hain zuzen. (<strong>Biegonkortasuna</strong> dugula esaten da horrelako kasuetan.) Gainera, simetriaren ondorioz, haria pausagunean egon daiteke"
    },
    {
     "mota": "testua",
     "html": "posizio bertikalean, egoera hau ezegonkorra bada ere. Oreka-puntu hauek aztertzeko eta sistema honen eredu matematikoa egiteko, maximo bat bi minimoren artean dituen potentzial batez balia gaitezke, oraingoz marruskadura arbuiatzen badugu behintzat. Aukerarik errazena honako potentzial hau dugu<span class=\"j-oin\">[Gai honetan dimentsio gabeko aldagaiak erabiltzen ditugu, baita <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> masa.]</span>: <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu higidura-ekuazioa honako hau dela: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Orain, abiadurarekiko proportzionala den marruskadura eta kanpo-indar harmonikoa kontuan hartuz, hauxe da aztertuko dugun higidura-ekuazio osoa, <strong>Duffingen ekuazioa</strong>  deritzona: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mi>.</mi></mrow></math> Ekuazio hau sinplifikatuegia dela pentsa genezake, eta itxuraz ez zaigu hain arrotz egiten, zeinu bat eta gai kubikoa kenduta ohiko oszilador harmoniko bortxatua baita. Baina ikusiko dugunez, gai ez-lineal hori agertzeak ondorio dinamiko ikaragarriak dakartza eta ekuazio hau oso aberatsa da ikuspuntu dinamikotik."
    },
    {
     "mota": "irudia",
     "oina": "Fase-espazioa eta soluzio batzuk <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mi>f</mi><mo>=</mo><mn>0</mn></mrow></math> kasuan.",
     "src": "media/irudiak/99a013bbea815aef.svg",
     "zabalera": 472
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Oszilazio periodikoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hasteko marruskadura eta kanpo-indarra nuluak direla onartzen badugu, sistema kontserbatzailea izango da eta energia mekanikoa higidura-konstantea dela adierazten duen hurrengo adierazpena fase-ibilbideen ekuazioa da: <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>E</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu sistema honen fase-espazioa 8.4 irudikoa dela."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntuak potentzialaren minimoei dagozkienez, oreka-puntu egonkorrak dira, eta haietariko baten ondoan hasten diren ibilbideak beti daude puntuaren inguruan; ez dira handik aldentzen ezta puntura joaten ere. Oreka egonkorra izan arren ez da asintotikoki egonkorra eta puntu horiei <strong>zentroak</strong> deritze, haien inguruko ibilbideen itxuragatik."
    },
    {
     "mota": "testua",
     "html": "Potentzialaren maximoaren kasuan, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> oreka-puntua ezegonkorra daukagu eta (zela bateko zentroan utzitako bolatxo bati gertatzen zaiona kontuan harturik edo)  <strong>zela-puntua</strong> dela diogu."
    },
    {
     "mota": "testua",
     "html": "Ibilbide gehienak itxiak dira eta, beraz, oszilazio periodikoei dagozkie. Energia negatiboa bada, zentro baten inguruan oszilatzen du sistemak, orbita berdeetan ikusten den bezala. Energia positiboaren kasuan, sistema maximoaren gainetik pasatzeko gai da eta orbitak bi zentroak inguratzen ditu."
    },
    {
     "mota": "testua",
     "html": "Sistema honek askatasun-gradu bakarra duenez, aldiune bateko posizioa eta abiadura izango dira hastapen-baldintzak. Beraz, fase-espazioaren puntu bakoitza hastapen-baldintzen multzo bat eta soluzio bati dagokio: puntu bakoitzetik soluzio bat eta soilik bat igarotzen da <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Nolakoak dira (kasu berezi honetan) energia nuluko kasuari dagozkion ibilbideak? Zenbat dira? (Oreka-puntu batetik hasita bertara itzultzen diren orbitei <strong>homoklinikoak</strong> deritze.)"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Salbuespenak salbuespen, orbita gehienak oszilazio periodikoak dira eta euren periodoa anplitudearen menpekoa da. Higidura sinpleenetarikoa dugu hau, baina nahiko berezia, marruskadura txikienak ere deuseztatzen du eta."
    },
    {
     "mota": "irudia",
     "oina": "Fase-espazioa eta soluzio batzuk <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0.1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0</mn></mrow></math> kasuan.",
     "src": "media/irudiak/b6ba1310df36f4de.svg",
     "zabalera": 472
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Oszilazio indargetuak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Orain marruskadura kontuan hartzen badugu, energia mekanikoa eta oszilazioen anplitudea gutxituz joango dira eta ia orbita guztiek energia potentzialaren minimo batera joko dute. Ondorioz, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntuak asintotikoki egonkorrak izango dira orain, inguruan dauden orbitek bertara hurbiltzeko joera baitute. Orbita horien itxura geometrikoa kontuan hartuz, oreka-puntuak <strong>fokuak</strong> direla esaten da (kasu gainindargetuan"
    },
    {
     "mota": "testua",
     "html": "<strong>nodoak</strong>"
    },
    {
     "mota": "testua",
     "html": "dira: ikus [46]), eta euren inguruko orbitak erakartzen dituztenez, <strong>erakarleak</strong> deritze."
    },
    {
     "mota": "testua",
     "html": "8.5 irudian ikusten dugunez, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> jatorria zela-puntua da, berriro ere, baina handik sortzen diren orbitak oso desberdinak dira orain. Haietariko bik fokuetara jotzen dute. Orbita hauek oreka-puntuaren <em>barietate ezegonkorra</em> osatzen dute."
    },
    {
     "mota": "irudia",
     "oina": "Erakarpen-arroak <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0.1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0</mn></mrow></math> kasuan.",
     "src": "media/irudiak/5daa29064ea6692a.svg",
     "zabalera": 266
    },
    {
     "mota": "testua",
     "html": "Baina askoz ere interesgarriagoak dira <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntura doazen bi orbitak, <strong>barietate egonkorra</strong> osatzen dutenak alegia. 8.6 irudian argi eta garbi ikusten denez, ez doaz erakarle batera eta, hortaz, foku desberdinetara jotzen duten orbitak banantzen dituzte. Horregatik, orbita hauek <strong>banantzailea</strong> osatzen dutela esaten dugu. Erakarle batera doazen soluzioei dagozkien fase-puntuen leku geometrikoa, erakarlearen"
    },
    {
     "mota": "testua",
     "html": "<strong>arroa</strong>"
    },
    {
     "mota": "testua",
     "html": "da eta banantzailea erakarle desberdinen arroak banantzen ditu: <strong>arro-muga</strong> da."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Oszilazio bakartuak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kanpo-indarra badago, oreka-puntuak ezinezkoak dira, konstanteek ez baitute (8.3) higidura-ekuazioa, betetzen. Soluzio periodikoak ager daitezke; baina kasu kontserbatzailean ez bezala, ez dute osatuko anplitudearekin era jarraituan aldatzen diren periodoetako orbiten multzo infinitu bat. Orain, periodo nagusi bat dugu: kanpo-indarrarena hain zuzen. Oszilazio linealen kasuan, kanpo-indarraren periodoa duen orbita periodiko bakarra dugu eta, gainera, erakarlea da, beste orbita guztiek tarte iragankor baten ondoren soluzio periodiko bakartu horretara jotzen dute eta. Orbita periodiko bakartuei <strong>ziklo limiteak</strong> deritze."
    },
    {
     "mota": "irudia",
     "oina": "Duffingen ekuazioa <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0.1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0.23</mn></mrow></math> kasuan.",
     "src": "media/irudiak/2d63ebee94e3d268.svg",
     "zabalera": 472
    },
    {
     "mota": "testua",
     "html": "Duffingen ekuazioan <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0.23</mn></mrow></math> balioa aukeratzen badugu, antzeko eboluzioa ikusiko dugu kasu ez-lineal honetan. Desagertu diren bi erakarle puntualen ordez bi ziklo limite daude, eta asintotikoki egonkorrak, erakarleak, dira."
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Erakarleak eta Poincaréren sekzioak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Orain arte aztertu ditugun erakarleak dimentsio gabeko puntuak edo dimentsio bateko kurbak izan dira; baina dimentsio guztietarako erakarleak aurki daitezke. Adibidez, 8.8 irudiko adibidean, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo>+</mo><mi>z</mi><mo>+</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>c</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo>+</mo><mi>z</mi><mo>+</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>c</mi><mi>x</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>a</mi><mi>z</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></math> sistemaren orbita baten zati bat ikusten da, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>2.01</mn></mrow></math>, <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mn>0.25</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>0.2</mn></mrow></math> balioetarako. <math display=\"inline\"><mi>y</mi></math>, <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>z</mi></math> ardatzen norabideetan lorturiko proiekzioak irudiko (a), (b) eta (c) parteetan ikusten dira, hurrenez hurren. Lehen oktantearen erdikariaren norabideari dagokiona, ordea, (d) delakoan erakusten da. Aipaturiko kasuetan, proiekzioen bidez hiru dimentsioko sistema dinamikoaren soluzioen adierazpenak lortzen dira bi dimentsioko planoan. Gauza bera egiteko, badago beste aukera bat, <strong>Poincaréren sekzioa</strong> deitzen dena. Azken metodo honetan soluzioaren eta gainazal jakin baten arteko ebakidura-puntuak marrazten dira. Irudiko (e) zatian, adibidez, soluzioa <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> planoan dagoen bakoitzean dagozkion <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> koordenatuek definituriko puntua marraztu da. Edozein kasutan, 8.8 irudia arretaz aztertuz, portaera iragankorraren ondoren, orbita bi dimentsioko gainazal itxi batean kiribiltzen dela ikusten da. Erakarle honen forma geometrikoa <strong>toru</strong> izenaz ezagutzen da topologian, eta toruaren eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> planoaren ebakidura bi zirkunferentzia dira (zirkunferentzia topologikoak dira hauek, ohiko zirkunferentziak deformatuz, baina apurtu gabe, lor daitezkeenak). Irudiko orbitatik hasierako portaera iragankorra ezabatu da, sistema erakarlearen oso hurbil egoteko behar bezain tarte luzea pasatu dela eta ikuspuntu praktikotik erakarle barruan dagoela pentsatu ahal izateko asmoz. Hastapen-baldintzak aldatu ondoren, berriro portaera iragankorra igaro arte itxaroten bada, lortzen den orbita baliokidea da ikuspuntu kualitatibotik: ez da berdina, baina gainazal berean antzeko moduan biribiltzen da. Erakarlea toruaren azala da."
    },
    {
     "mota": "irudia",
     "oina": "Proiekzioak eta Poincaréren sekzioa.",
     "src": "media/irudiak/dfcf77c9e7796a76.svg",
     "zabalera": 165
    },
    {
     "mota": "testua",
     "html": "Denbora-tarte labur baten ondoren, orbita guztiak toruaren gainazalean daude ikuspuntu praktikotik. Horrelako bi dimentsioko erakarle baten kasuan bi periodo ditugu: toruaren bi sekzio nagusietako bakoitzaren inguruan bira bat egiteko behar den batez besteko balioak periodo bat definitzen du. Bi periodo horiek elkarneurgarriak badira (hau da, periodoak <math display=\"inline\"><mi>T</mi></math> eta <math display=\"inline\"><msup><mi>T</mi><mo>′</mo></msup></math> izanik, <math display=\"inline\"><mrow><mi>n</mi><mi>T</mi><mo>+</mo><msup><mi>n</mi><mo>′</mo></msup><msup><mi>T</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> ekuazioak, <math display=\"inline\"><mi>n</mi></math> eta <math display=\"inline\"><msup><mi>n</mi><mo>′</mo></msup></math> balioetarako soluzio oso ez-nuluak baditu) higidura iraunkorra periodikoa da eta orbita toruaren gainazalean dagoen kurba itxia izango da. Baina gehienetan ez da hori gertatuko eta higidura <strong>kuasiperiodikoa</strong>  (edo, zehazkiago, <strong>biperiodikoa</strong>) izango da. Orbitak toruaren gainazala beteko du eta higidura ez da inoiz errepikatuko; hala ere, funtsean bi periodo ditugu eta higidura iraunkorra nahiko erraza da."
    },
    {
     "mota": "testua",
     "html": "Erakarlearen dimentsioa <math display=\"inline\"><mi>n</mi></math> bada, <math display=\"inline\"><mi>n</mi></math> periodo izango ditugu kasu orokorrean. Landau fisikariak uste zuen hau izan zitekeela fluidoetan ikusten den turbulentziaren azalpena: dimentsio handiko erakarlea balego, higidura kuasiperiodikoak periodo asko izango lituzke eta kaotikotzat joko genuke. Gaur egunean badakigu kaosa egoteko ez dela beharrezkoa periodo (eta dimentsio) asko egotea. Nahikoa izan daiteke sistema dinamikoa ez-lineala izatea."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Oszilazio kaotikoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kanpo-indarraren anplitudea handitzean, eboluzioaren izaera erabat aldatzen da: orbita periodikoak desagertzen dira (horrela dirudi, behintzat) eta soluzioak etengabe ari dira oszilatzen baina ez da inolako erregulartasunik nabaritzen."
    },
    {
     "mota": "testua",
     "html": "Erregulartasunik eza beste ikuspuntu batetik aztertzeko, ikus dezagun zer gertatzen den hastapen-baldintzen pittin bat aldatzen badira. 8.10 irudian <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.4</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.40001</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hastapen-baldintzei dagozkien orbitak marraztu dira. Ikusten dugunez hastapen-baldintzen aldaketa txikerrek"
    },
    {
     "mota": "irudia",
     "oina": "Duffingen ekuazioa <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0.1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0.3</mn></mrow></math> kasuan.",
     "src": "media/irudiak/e7f11e1c65b2dda1.svg",
     "zabalera": 472
    },
    {
     "mota": "testua",
     "html": "ondorio ikaragarriak izan ditzakete: hasieran oso hurbil zeuden orbiten arteko distantzia era esponentzialean handitzen da eta denbora-tarte bat pasatu ondoren bi soluzioak guztiz desberdinak dira. Esan behar da fenomeno hau ez dela erabilitako zenbakizko metodoaren izaera hurbilduaren ondorioa, izaera horrek lortutako soluzioaren doitasunean eragina badu ere. <strong>Hastapen-baldintzekiko menpekotasun sentikor</strong> hau higidura-ekuazioaren izaera ez-linealetik dator eta kaos deterministaren ezaugarri nagusia dugu. Zientziaren arlo honen aitzindaria izan den Lorenz meteorologoak <strong>tximeleta efektu</strong> izena ezarri dio fenomeno honi, tximeleta baten hegoek sortutako perturbazioak denbora-tarte egokia igaro ondoren eguraldiaren iragarpen finenak hondatzeko gai baitirateke."
    },
    {
     "mota": "irudia",
     "oina": "Hasieran oso hurbil dauden bi orbita <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0.1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0.3</mn></mrow></math> kasuan.",
     "src": "media/irudiak/8118fd8c8d29ede1.svg",
     "zabalera": 280
    },
    {
     "mota": "testua",
     "html": "Naturan gertatzen diren hastapen-baldintzak neurtzean, erroreak egiten dira, nahitaez. Eboluzioa guztiz determinista izan arren, ikuspuntu matematikotik printzipioz doitasun osoz kalkula daitekeen soluzioak interes praktiko txikia izan dezake, hastapen-baldintzetan egindako erroreak era esponentzialean handituz badoaz. Laplaceren determinismoari ikaragarrizko oztopo praktikoak ezar diezazkioke eboluzio-ekuazio ez-lineal batzuen izaera kaotikoak. Beste aitzindari batek (Poincarék) aipatu zuenez, dadoak zoriaren iturritzat jotzen ditugu, nahiz eta haien eboluzio-ekuazioak, mekanika klasikoarenak, guztiz deterministak izan. Azpimarratu behar da hemen, fisika kuantikoan ez bezala, aurresatea eragozten duena ez dela teoria fisikoa, baizik eta ekuazioen izaera matematikoa eta haiek ebazteko erabili behar diren hastapen-baldintzetan eta metodo hurbilduetan halabeharrez egiten diren erroreak."
    },
    {
     "mota": "irudia",
     "oina": "Duffingen erakarlearen sekzio estroboskopikoa <math display=\"inline\"><mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">mod</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>π</mi><mo>=</mo><mn>0</mn></mrow></math> kasuan.",
     "src": "media/irudiak/c383b81c13b1013f.svg",
     "zabalera": 262
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Erakarle bitxiak"
    },
    {
     "mota": "testua",
     "html": "Aurreko adibidean orbitek ez zuten inolako erregulartasunik erakusten, baina bai propietate komun bat: tarte iragankor labur baten ondoren, orbita guztiak fase-espazioaren alde txiki samar batean daude. Badirudi periodikoa ez den erakarle baten aurrean gaudela, orbita guztiek bertarantz jotzen dute eta. Duffingen ekuazioan denbora esplizituki agertzen denez (hau da, <strong>autonomoa</strong> ez denez), hastapen-baldintzen benetako espazioa (matematikarien fase-espazioa) hiru dimentsiokoa da, orbita bat zehazteko hasierako posizio eta abiaduraz gain hasierako aldiunea ere aukeratu behar baita. Fase-espazio horretan ager daitezkeen erakarleak aztertzeko, Poincaréren sekzioez baliatuko gara, bi dimentsioko irudiak egiteko."
    },
    {
     "mota": "irudia",
     "oina": "Duffingen erakarlearen sekzio estroboskopikoaren bi handipen.",
     "src": "media/irudiak/f67ba93ea1013605.svg",
     "zabalera": 312
    },
    {
     "mota": "testua",
     "html": "Denbora-dimentsioa periodikotzat jo dezakegu, periodikoa den kosinu batean bakarrik agertzen da eta. Beraz, periodo berbera duen sekzio estroboskopikoa erabiltzea da aukerarik errazena. Orbita osoak aztertu beharrean, <math display=\"block\"><mrow><mi>t</mi><mo>=</mo><msub><mi>t</mi><mn>0</mn></msub><mo>+</mo><mi>n</mi><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>ω</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aldiunetako posizioa eta abiadura marraztu dira 8.11 irudian. Hau ikusita pentsa genezake lerro makur batzuek osatzen dutela sekzioa, baina goiko laukizuena handituz gero, 8.12 sekzioak lortzen dira. Ikusten dugunez, lerro horiek beste lerro batzuez osaturik daude eta azken hauek ere ez dira bakunak. Eskala guztietan errepikatzen da gauza bera: gero eta egitura gehiago agertzen da, erakarlearen <strong>autoantzekotasun</strong> geometrikoaren ondorioz. Badirudi infinitu geruzaz osaturikoa dela."
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Fraktalak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Objektu autoantzekoak XIX. mendetik ezagutzen dira matematikan. Adibidez, oso era sinplean definitzen da"
    },
    {
     "mota": "testua",
     "html": "<strong>Cantorren multzoa</strong>"
    },
    {
     "mota": "testua",
     "html": ": segmentu bat hiru zati berdinetan zatituz gero, erdikoa ezabatzen da, eta prozesu hau behin eta berriro errepikatzen da pauso bakoitzean geratzen diren segmentu guztietan. Argi dago limitean lortzen den multzoan infinitu puntu daudela (egia esan, hasierako segmentuan zeuden beste!)."
    },
    {
     "mota": "irudia",
     "oina": "Cantorren multzoa eraikiz.",
     "src": "media/irudiak/3abd54e7479bab9a.svg",
     "zabalera": 258
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu Cantorren multzoaren luzera nulua dela."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Baina badauzka hain errazak ez diren beste propietate ikaragarri batzuk ere. Adibidez, luzera gabekoa da eta bere dimentsioa <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>/</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>3</mn><mo>&lt;</mo><mn>1</mn></mrow></math>. Dimentsioa osoa ez denez, <strong>fraktala</strong> dela esaten da."
    },
    {
     "mota": "testua",
     "html": "Beste adibide famatu bat, <strong>von Kochen elur-maluta</strong>, honela eraikitzen da: triangelu bateko alde bakoitza hirutan zatitzen da eta erdiko zatia berarekin batera triangelu aldekide bat osatzen duten bi segmentuez ordezkatzen da, eta prozesu hau geratzen diren segmentu guztietan errepikatzen da."
    },
    {
     "mota": "irudia",
     "oina": "Von Kochen elur-maluta eraikiz.",
     "src": "media/irudiak/6bf44e10c1916068.svg",
     "zabalera": 556
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu von Kochen kurbaren luzera infinitua dela eta inguratzen duen azalera finitua."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Horrez gain, kurba horrek ez du tangenterik onartzen ezein puntutan: jarraitua izan arren ez da diferentziagarria."
    },
    {
     "mota": "testua",
     "html": "Adibide geometriko hauen kasuan, autoantzekotasuna zehatza da; naturan agertzen diren fraktaletan, berriz, autoantzekotasuna hurbildua izaten da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dimentsio fraktala"
    },
    {
     "mota": "testua",
     "html": "Fraktalen konplexutasuna kuantitatiboki neurtzeko, dimentsio fraktala erabil daiteke. Dimentsioaren definizio askotxo daude, baina hemen haietariko errazena, <strong>edukiera</strong>, aukeratuko dugu. <math display=\"inline\"><mi>l</mi></math> luzerako segmentu bat estaltzeko, <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mi>l</mi></mrow></math> diametroko zirkulu bakarra behar dugu, <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mi>l</mi><mi>/</mi><mn>2</mn></mrow></math> diametroko <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>2</mn></mrow></math> zirkulu, eta <math display=\"inline\"><mi>d</mi></math> diametroko <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>l</mi><mi>/</mi><mi>d</mi></mrow></math> zirkulu. Segmentuaren dimentsioa <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>1</mn></mrow></math> dela"
    },
    {
     "mota": "irudia",
     "oina": "Segmentuaren eta karratuaren estalkiak.",
     "src": "media/irudiak/bfc37cdf873fe1bc.svg",
     "zabalera": 407
    },
    {
     "mota": "testua",
     "html": "gogoratuz, honela ere idatz daiteke estalkia egiteko behar diren zirkuluen kopurua:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>K</mi><msup><mi>d</mi><mrow><mi>−</mi><mi>D</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>K</mi></math> koefizientea (kasu honetan luzera) konstante egokia da. Estali nahi duguna karratu bat bada, adierazpen berbera betetzen da, baina orain karratuaren dimentsioak bi direnez, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>2</mn></mrow></math> erabili behar da eta <math display=\"inline\"><mi>K</mi></math> karratuaren azalerarekiko proportzionala izango da. Era berean, erraz ikusten da kubo baten eta edozein multzo «arrunten» kasuan, <math display=\"inline\"><mi>d</mi></math> diametroko bolen bidez egindako estalkietan formula hori betetzen dela. Ondorioz, adierazpen hori erabiliko da kasu guztietan (eta ez bakarrik kasu arruntetan) dimentsioa definitzeko. Testuinguru honetan <math display=\"inline\"><mi>K</mi></math> konstantea interes gabekoa denez, hurrengo adierazpen baliokideaz balia gaitezke: <math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mi>−</mi><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>d</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>d</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Von Kochen kurbaren estalkiak.",
     "src": "media/irudiak/052bd6d537f5c4c6.svg",
     "zabalera": 307
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili 8.16 irudia von Kochen fraktalaren dimentsioa <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>4</mn><mi>/</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>3</mn><mo>≈</mo><mn>1.26186</mn></mrow></math> dela frogatzeko. (Ikus, halaber, 8.12.2 problema.)"
      }
     ]
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Okinaren transformazioa eta Liapunoven berretzaileak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Duffingen erakarlearen sorrera, egitura eta izaera hobeto ulertzeko, kanpo-indarraren oinarrizko periodoaren <math display=\"block\"><mrow><mi>t</mi><mo>=</mo><msub><mi>t</mi><mn>0</mn></msub><mo>+</mo><mi>n</mi><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>ω</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mn>0</mn></msub><mo>≡</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>π</mi><mrow><mn>8</mn><mi>ω</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mn>16</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aldiuneei dagozkien Poincaréren sekzio estroboskopikoez baliatuko gara 8.17 irudian. Irudi honetan erakarlearen beraren eboluzioa ikusten dugu. Erakarlea aldaezina da higiduran zehar eta bertan dauden puntuak erakarlean zehar higitzen dira, handik irten gabe. Puntu horiek transformazio bat pairatzen dute higiduran zehar; baina puntu guztien multzoa, erakarlea bera, transformazio horrekiko aldaezina da. Irudian agerian dago transformazio horrek okinaren orearekin egiten duenarekin antz handia duela eta bi osagaiz osaturikoa dela:"
    },
    {
     "mota": "irudia",
     "oina": "Okinaren transformazioa.",
     "src": "media/irudiak/7d757ba48a54113b.svg",
     "zabalera": 409
    },
    {
     "mota": "testua",
     "html": "<strong>Luzatzea</strong>"
    },
    {
     "mota": "testua",
     "html": ": Erakarlea luzatzen da periodoan zehar eta, ondorioz, aldiune batean oso hurbil zeuden puntuen arteko distantzia handituz doa. Soluzio hurbilen arteko <math display=\"inline\"><mi>d</mi></math> distantzia era esponentzialean handitzen da: <math display=\"inline\"><mrow><mi>d</mi><mo>∝</mo><msup><mi>e</mi><mrow><mi>λ</mi><mi>t</mi></mrow></msup></mrow></math> non <math display=\"inline\"><mi>λ</mi></math> magnitudea Liapunoven berretzaile handiena den. Transformazio hau da hastapen-baldintzekiko menpekotasun sentikorraren eta kaosaren zergatia."
    },
    {
     "mota": "testua",
     "html": "<strong>Tolestatzea</strong>"
    },
    {
     "mota": "testua",
     "html": ": Luzatu ahala bere gainean tolestatzen da erakarlea. Horrela, erakarlea beti dago fase-espazioaren eskualde bornatu batean. Gainera, tolestatzen den bakoitzean erakarlea osatzen duten geruzen kopurua bikoizten denez, infinitu geruza egongo dira halabeharrez. Beraz, geruzak zeharkako norabide batean ebakiz gero, Cantorren multzoaren antzeko zerbait aurkituko dugu eta erakarlea fraktala (hau da, bitxia) izango da."
    },
    {
     "mota": "testua",
     "html": "Okinaren transformazio bikoitz hau kaos deterministaren oinarrizko mekanismoen artean dago."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Arro-muga fraktalak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Duffingen ekuazioaren kasuan <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0.1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>f</mi><mo>≤</mo><mn>0.13</mn></mrow></math> balioetarako agertzen diren erakarleak ez dira kaotikoak, ziklo limiteak baizik, baina bi dira, potentzialaren minimo bana inguratzen dutenak hain zuzen ere. Aukeratzen diren hastapen-baldintzen arabera soluzioak ziklo limite batera edo bestera joko du. Arroak aztertzeko <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> aldiunean aukeratuko ditugu <math display=\"inline\"><mi>x</mi></math> posizioa eta <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> abiadura eta horrela lortzen den soluzioak eskuineko ziklora jotzen badu (hau da, eskuineko zikloaren arroan badago), <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> puntua kolore batez marraztuko dugu; ezkerreko zikloaren arroan badago, beste kolore bat erabiliko da. Horrela arroen irudia lortuko dugu."
    },
    {
     "mota": "irudia",
     "oina": "Duffingen ekuazioaren arroak <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0.1</mn></mrow></math>, <math display=\"inline\"><mn>0.15</mn></math> kasuetan.",
     "src": "media/irudiak/4fecad0b80696f24.svg",
     "zabalera": 486
    },
    {
     "mota": "testua",
     "html": "8.18 irudiko kasuetan arro-muga kurba leuna da eta higidura asintotikoa periodikoa: hurbil dauden soluzioen arteko distantzia ez da handituko era esponentzialean. Hala ere, bi ziklo limite daudenez, etorkizuna aurresateko, jakin behar da zein arrotan dauden hastapen-baldintzak. Hastapen-baldintzak kalkulatzean egiten den errorea <math display=\"inline\"><mi>d</mi></math> bada, arro-mugatik <math display=\"inline\"><mi>d</mi></math> distantziara dauden puntuekin bakarrik gerta daiteke aurresana oker egotea. Puntu horiek zenbat diren neurtzeko, <math display=\"inline\"><mi>d</mi></math> erradioko diskoez estaliko dugu arro-muga (eta zalantzako puntuak). Dakigunez, horretarako behar diren diskoen kopurua <math display=\"inline\"><mrow><msub><mi>N</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msup><mi>d</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> da eta aztertutako fase-espazioaren aldea estaltzeko <math display=\"inline\"><mrow><msub><mi>N</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msup><mi>d</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math> disko beharko dira. Ondorioz, hastapen-baldintzak <math display=\"inline\"><mi>d</mi></math> doitasunez neurtzean, zalantzan dauden puntuen proportzioa <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>N</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><msub><mi>N</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><mi>d</mi></mrow></math> da. Beraz, zalantzazko puntuen proportzioa magnitude-ordena batean gutxitu nahi bada, neurketetan egindako errorean ere magnitude-ordena bat irabazi behar da."
    },
    {
     "mota": "testua",
     "html": "Oro har, arro-mugaren dimentsioa <math display=\"inline\"><mi>D</mi></math> bada, <math display=\"inline\"><mrow><msub><mi>N</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msup><mi>d</mi><mrow><mi>−</mi><mi>D</mi></mrow></msup></mrow></math> bola beharko dira muga estaltzeko eta fase-espazioaren zatia estaltzeko <math display=\"inline\"><mrow><msub><mi>N</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msup><mi>d</mi><mrow><mi>−</mi><mi>F</mi></mrow></msup></mrow></math>, bere dimentsioa <math display=\"inline\"><mi>F</mi></math> bada. Beraz, zalantzazko hastapen-baldintzen proportzioa hauxe da: <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msup><mi>d</mi><mrow><mi>F</mi><mo>−</mo><mi>D</mi></mrow></msup><mo>≡</mo><msup><mi>d</mi><mi>z</mi></msup></mrow></math>. Hemengo <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>F</mi><mo>−</mo><mi>D</mi></mrow></math> balioa"
    },
    {
     "mota": "testua",
     "html": "<strong>ziurgabetasun-berretzailea</strong>"
    },
    {
     "mota": "testua",
     "html": "da."
    },
    {
     "mota": "irudia",
     "oina": "Duffingen ekuazioaren arroak <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0.2</mn></mrow></math>, <math display=\"inline\"><mn>0.23</mn></math> kasuetan.",
     "src": "media/irudiak/1eea113e1cb69c56.svg",
     "zabalera": 486
    },
    {
     "mota": "testua",
     "html": "Arro-muga leuna bada, bere dimentsioa <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mi>F</mi><mo>−</mo><mn>1</mn></mrow></math> izango da eta ziurgabetasun-berretzailea <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>1</mn></mrow></math>. Horrela, zalantzazko puntuen kopurua 10 aldiz txikiagoa izateko, 10 aldiz txikiagoa izan beharko du hastapen-baldintzetan egindako erroreak. Baina, zer gertatzen da arro-muga leuna izan ez beharrean fraktala bada? <math display=\"inline\"><mrow><mi>F</mi><mo>−</mo><mn>1</mn><mo>&lt;</mo><mi>D</mi><mo>&lt;</mo><mi>F</mi></mrow></math> bada, <math display=\"inline\"><mrow><mi>z</mi><mo>&lt;</mo><mn>1</mn></mrow></math> izango da eta zalantzazko hastapen-baldintzen kopurua gutxitzea zailago gertatuko da. Adibidez, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mi>F</mi><mo>−</mo><mn>0.2</mn></mrow></math> bada, proportzioa 10 aldiz txikiagoa izateko, hastapen-baldintzak neurtzean 100000 aldiz txikiagoa den errorea lortu behar da."
    },
    {
     "mota": "irudia",
     "oina": "Duffingen ekuazioaren arroen handipenak <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0.2</mn></mrow></math> kasuan.",
     "src": "media/irudiak/70cfef3e7452bd64.svg",
     "zabalera": 443
    },
    {
     "mota": "testua",
     "html": "Hau gertatzen bada, eta oraintxe ikusiko dugu horrelakoak gertatzen direla, aurresateak oztopo handia izango du, higidura kaotikoa ez bada ere. Adibidez, arro-muga fraktala dela egiaztatzeko, 8.19 irudiaren erdian marraztu den laukizuena 8.20 delakoaren ezkerraldean handitu dugu, eta azken honen beheko eskuin muturra ondoan agertzen da."
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Kaosa sistema hamiltondarretan",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema hamiltondarrak kontserbatzaileak direnez, 6.10.4 ataleko Liouvilleren teorema betetzen da eta ondorioz ez dago erakarlerik. Liapunoven berretzaileen batura zero da, baina honek ez du debekatzen berretzaileren bat positiboa izatea. Horrela gertatzen denean, kaos hamiltondarra dugu."
    },
    {
     "mota": "irudia",
     "oina": "7.91 problemako sistemaren bi eboluzio: biperiodiko bat eta kaotiko bat.",
     "src": "media/irudiak/1e861592901335cb.svg",
     "zabalera": 397
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Sakabanatze kaotikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Adibide moduan kontsidera dezagun 7.91 problemako sistema. Jatorriaren inguruko oszilazioak periodikoak dira: Lissajousen irudi itxi bat. Anplitudea handiagoa bada, oszilazioak ez dira hain errazak, baina biperiodikoak (edo, hastapen-baldintza egokiekin, periodikoak) izan daitezke, 8.21 irudiko ezkerraldean, orbitaren zati batean ikusten den moduan."
    },
    {
     "mota": "irudia",
     "oina": "7.91 problemako sistemaren Poincaréren bi sekzio osagarri.",
     "src": "media/irudiak/101168194d6e0a2a.svg",
     "zabalera": 398
    },
    {
     "mota": "testua",
     "html": "Energia mekanikoaren balioa aldatu gabe (<math display=\"inline\"><mn>8.21</mn></math> eta <math display=\"inline\"><mn>8.22</mn></math> irudietan <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>10.2</mn><msup><mi>q</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>a</mi></mrow></math> hartu da) beste hastapen-baldintza batzuk aukeratzen badira, orbita kaotikoa izan daiteke 8.21 irudiko ezkerraldean hautematen den moduan. Fenomeno hau hobeto ikusteko Poincaréren sekzioez balia gaitezke. Energia mekanikoa kontserbatzen denez, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> koordenatuetako hiru ezagutzen baditugu laugarrena energia mekanikoaren baliotik lortzen da. Bi dimentsioko irudiak egiteko, beste baldintza bat erabili da 8.22 irudian. Ezkerrean marraztu dira soluzioaren <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> koordenatuetako puntua <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> den bakoitzean. Eskuinaldean, ordea, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> koordenatuetako puntua marraztu da <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> denean. Orbita periodiko bateko puntuak lerro jarraituetan agertzen dira. Gainera, orbita kaotiko <em>bakar bateko</em> puntuak marraztu dira eta, ikusten denez, irudi bakoitzeko azalera ez-nulu bat betetzen dute."
    },
    {
     "mota": "testua",
     "html": "Kaosaren beste alderdi bat dugu hau. Sakabanatze-prozesu batean partikulak infinitura doaz eta ez dago erakarlerik. Higidura asintotikoa askea da, oso sinplea, beraz. Hala ere, etorkizuna aurresatea zaila izan daiteke. Hemen, bi dimentsiotan lau maximo dituen hurrengo energia potentziala aztertuko dugu, dimentsio gabeko aldagai egokietan: <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkula itzazu higidura-ekuazioak."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Partikula <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>10</mn><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntuan dagoenean <math display=\"inline\"><mi>x</mi></math> ardatzean zehar <math display=\"inline\"><mi>E</mi></math> energiaz higitzen bada, elkarrekintza-eskualdetik irtetean <math display=\"inline\"><mi>θ</mi></math> norabidean higituko da abiadura konstantez. Horrela <math display=\"inline\"><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  <strong>sakabanatze-funtzioa</strong> kalkula daiteke. Adibidez, 8.24 irudiko sakabanatze-funtzioa <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>1.2</mn></mrow></math> energiari"
    },
    {
     "mota": "irudia",
     "oina": "(8.12) energia potentziala eta lau orbita <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0.26</mn></mrow></math> denean.",
     "src": "media/irudiak/ad872da669d166f5.svg",
     "zabalera": 449
    },
    {
     "mota": "testua",
     "html": "dagokio. Kasu honetan partikula energiaren maximoen gainetik pasatzen da eta sakabanatze-angelua jotze-parametroaren funtzio leuna da."
    },
    {
     "mota": "irudia",
     "oina": "Sakabanatze-funtzioa <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>1.2</mn></mrow></math> denean.",
     "src": "media/irudiak/87d8655f4b2d5912.svg",
     "zabalera": 289
    },
    {
     "mota": "testua",
     "html": "Baina <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0.26</mn></mrow></math> energiari dagokion sakabanatze-funtzioa ez da jarraitua, 8.25 irudian ikus daitekeen bezala."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkula itzazu aurreko funtzioaren handitze batzuk, eten-multzoaren izaera fraktal autoantzekoa dela egiaztatzeko."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Sakabanatze-funtzioa <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0.26</mn></mrow></math> denean.",
     "src": "media/irudiak/3a701e50c2070a7e.svg",
     "zabalera": 295
    },
    {
     "mota": "testua",
     "html": "Aurreko atalean bezalaxe, erakarle kaotikorik ez badago ere, egoera asintotikoa aurresatea zaila da"
    },
    {
     "mota": "testua",
     "html": "<strong>sakabanatze kaotiko</strong>"
    },
    {
     "mota": "testua",
     "html": "hau gertatzen bada: eten-puntuen inguruan sakabanatze-angeluaren benetako balioa zalantzan egongo da. Argi dago ziurgabetasun-berretzailearen kontzeptua ia hitzez hitz aplika daitekeela kasu honetan."
    },
    {
     "mota": "testua",
     "html": "8.23 irudian <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mi>−</mi><mn>0.45939019</mn><mo>+</mo><mn>2.5</mn><mi>k</mi><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow></math>  (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn></mrow></math>) balioetarako lortzen diren orbitak marraztu dira. Ikusten dugunez, jotze-parametroaren aldaketak oso txikiak izan arren, etorkizuneko norabide asintotikoa zeharo desberdina da lau kasuotan."
    },
    {
     "mota": "irudia",
     "oina": "Sakabanatze-denbora <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0.26</mn></mrow></math> denean.",
     "src": "media/irudiak/b8b616dcbbbe9c7a.svg",
     "zabalera": 296
    },
    {
     "mota": "testua",
     "html": "Fenomeno hau hobeto ulertzeko, partikulak elkarrekintza-eskualdean ematen duen denbora 8.26 irudian agertzen da. Ikusten dugunez, funtzio hau ere etena da eta sakabanatze-denboraren eta angeluaren etenuneak puntu berberetan gertatzen dira."
    },
    {
     "mota": "testua",
     "html": "Emaitza honekin sakabanatze kaotikoaren zergatia erraz uler daiteke. Energia maximoena baina txikiagoa bada, gerta daiteke partikula potentzialaren tontor desberdinetan errebotatzea behin eta berriro. Lau tontorrekin infinitu segida periodiko desberdin osa daitekeenez, infinitu orbita periodiko daude. Jakina, orbita periodiko horiek ez dira egonkorrak izango (eta ez erakarleak ere); baina gerta daiteke sakabanatze-orbita bat orbita periodiko ezegonkor baten oso hurbil egotea aldiune batean eta azken hau gertatzen bada, elkarren hurbil egon daitezke denbora-tarte luze batez eta anitz aldiz errebotatu ondoren norabide-aldaketa handia gerta daiteke, hasieran oso hurbil zuen beste orbita bati dagokion aldaketaren oso desberdina izateko moduan."
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Problema ebatziak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Duffingen ekuazioa"
    },
    {
     "mota": "testua",
     "html": "<em>Froga ezazu marruskadura arbuiagarria denean, kanpo-indarrak aurkitu behar den baldintza betetzen badu,\nDuffingen ekuazioak <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>ω</mi><mn>3</mn></mfrac><mi>t</mi></mrow></math> soluzio periodiko zehatz bat onartzen duela.</em>"
    },
    {
     "mota": "testua",
     "html": "Duffingen <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math> ekuazioan <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>ω</mi><mn>3</mn></mfrac><mi>t</mi></mrow></math> saiatzen badugu, <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>18</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>9</mn><msup><mi>A</mi><mn>3</mn></msup><mo>+</mo><mn>18</mn><mi>f</mi><mo>−</mo><mn>2</mn><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>9</mn><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>9</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>A</mi><mn>3</mn></msup><mo>−</mo><mn>4</mn><mi>f</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>ω</mi><mn>3</mn></mfrac><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> geratzen zaigu. Argi dago ekuazio hori <math display=\"inline\"><mi>t</mi></math> une guztietarako bete dadin, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mroot><mrow><mn>4</mn><mi>f</mi></mrow><mn>3</mn></mroot></mrow></math> aukeratu behar dela. Hori eginez, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>3</mn><mi>f</mi><mo>−</mo><mroot><mrow><mn>4</mn><mi>f</mi></mrow><mn>3</mn></mroot><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><msup><mi>ω</mi><mn>2</mn></msup><mn>9</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>ω</mi><mn>3</mn></mfrac><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> baldintza geratzen zaigu. Soluzio periodiko berezia onartzeko, hortaz, <math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><mn>3</mn><msqrt><mrow><mn>3</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>f</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><mo>−</mo><mn>1</mn></mrow></msqrt></mrow></math> erlazioa bete behar da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Von Kochen elur-maluta"
    },
    {
     "mota": "testua",
     "html": "<em>Kalkulatu 8.14 irudian erakusten den von Kochen elur-malutaren dimentsioa, perimetroa eta azalera.\nIruzkina egin erantzunari.</em>"
    },
    {
     "mota": "testua",
     "html": "8.6 ariketan erabili dugun metodo zuzenaren ordez, simetriaz baliatuko gara dimentsioa kalkulatzeko. Izan ere, argi dago <math display=\"inline\"><mi>ε</mi></math> diametroko <math display=\"inline\"><mi>N</mi></math> zirkulu behar badira fraktal hau estaltzeko, <math display=\"inline\"><mrow><mi>ε</mi><mi>/</mi><mn>3</mn></mrow></math> diametroko <math display=\"inline\"><mrow><mn>4</mn><mi>N</mi></mrow></math> beharko direla, hau da, <math display=\"block\"><mrow><mn>4</mn><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Hemen, (<math display=\"inline\"><mrow><mi>ε</mi><mo>→</mo><mn>0</mn></mrow></math> limitean betetzen den)  <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msup><mi>ε</mi><mrow><mi>−</mi><mi>D</mi></mrow></msup></mrow></math> definizioa saiatzen badugu, hauxe geratzen da: <math display=\"block\"><mrow><mn>4</mn><msup><mi>ε</mi><mrow><mi>−</mi><mi>D</mi></mrow></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>−</mi><mi>D</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>4</mn><mo>=</mo><msup><mn>3</mn><mi>D</mi></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>D</mi><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>4</mn></mrow><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>3</mn></mrow></mfrac><mi>.</mi></mrow></math> Bestalde, argi dago fraktala eraikitzean pauso bakoitzean, <math display=\"inline\"><mi>L</mi></math> luzerako segmentu bakoitzaren ordez <math display=\"inline\"><mrow><mi>L</mi><mi>/</mi><mn>3</mn></mrow></math> luzerako 4 segmentu erabiltzen direnez, perimetroa aurrekoa bider <math display=\"inline\"><mrow><mn>4</mn><mi>/</mi><mn>3</mn></mrow></math> dela eta limitean infinitua."
    },
    {
     "mota": "testua",
     "html": "Hasierako triangeluaren azalera <math display=\"inline\"><mi>S</mi></math> bada, lehen pausoan <math display=\"inline\"><mrow><mi>S</mi><mi>/</mi><mn>9</mn></mrow></math> azalerako 3 triangeluren azalera gehitzen zaio; bigarrenean <math display=\"inline\"><mrow><mi>S</mi><mi>/</mi><msup><mn>9</mn><mn>2</mn></msup></mrow></math> azalerako <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>4</mn></mrow></math> triangelurena; hirugarrenean <math display=\"inline\"><mrow><mi>S</mi><mi>/</mi><msup><mn>9</mn><mn>3</mn></msup></mrow></math> azalerako <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><msup><mn>4</mn><mn>2</mn></msup></mrow></math> triangelurena; eta <math display=\"inline\"><mi>n</mi></math>.enean <math display=\"inline\"><mrow><mi>S</mi><mi>/</mi><msup><mn>9</mn><mi>n</mi></msup></mrow></math> azalerako <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><msup><mn>4</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow></math> triangelurena. Limitean, azalera osoa hauxe izango da, beraz: <math display=\"block\"><mrow><mi>S</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mfrac><mn>3</mn><mn>9</mn></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mn>4</mn><mi>n</mi></msup><msup><mn>9</mn><mi>n</mi></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mn>8</mn><mn>5</mn></mfrac><mi>S</mi><mi>.</mi></mrow></math> Bitxia badirudi ere, perimetro jarraitu infinitu batek azalera finitua ingura dezake."
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "text(fill:berdea, weight: &quot;bold&quot;, size: 10pt, smallcaps[Fraktalak])"
    },
    {
     "mota": "irudia",
     "oina": "8.1 problemako fraktala eraikitzeko lehen pausoak.",
     "src": "media/irudiak/2d14a6a3d37294cf.svg",
     "zabalera": 564
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zein da 8.27 irudiko fraktala eraikitzeko araua? Eta bere dimentsioa, azalera eta perimetroa?"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Peanoren kurba eraikitzeko metodoa.",
     "src": "media/irudiak/5f04633a12411546.svg",
     "zabalera": 539
    },
    {
     "mota": "problema",
     "izena": "Peanoren kurba.",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "1890ean Peanok aurkitu zuen karratu bat betetzen duen lehen kurba jarraitua: 8.28 irudiko prozedurak sortutako limite matematikoa. Zein da bere dimentsio fraktala?"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Hilberten kurba eraikitzeko metodoa.",
     "src": "media/irudiak/363b89f34b78b70b.svg",
     "zabalera": 539
    },
    {
     "mota": "problema",
     "izena": "Hilberten kurba.",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Karratua betetzen duen bigarren kurba jarraitua Hilbertek aurkitu zuen 1891n (ikus 8.29 irudia). Kalkulatu bere luzera eta dimentsioa."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Mandelbroten kurba eraikitzeko metodoa.",
     "src": "media/irudiak/6b8b59a801fe592f.svg",
     "zabalera": 598
    },
    {
     "mota": "problema",
     "izena": "Mandelbroten kurba.",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "8.30 irudiko fraktalak von Kochen elur-maluta betetzen du. Kalkulatu bere dimentsioa."
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
       "html": "Kalkulatu Cantorren multzoaren dimentsioa."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "8.6 problemako fraktala.",
     "src": "media/irudiak/77d8875344ef52f3.svg",
     "zabalera": 326
    },
    {
     "mota": "problema",
     "izena": "Inertzia-momentua.",
     "izar": 3,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Xafla mehe batean behin eta berriro egiten dira zuloak 8.31 irudian erakusten den moduan; baina, urrats bakoitzean, zulatu gabe geratzen materialean birbanatzen da zuloetan zegoen masa, era homogeneoan. Zein da fraktalaren dimentsioa? Kalkulatu limite matematikoan geratzen diren azalera eta masa-zentroarekiko inertzia-momentua. (Xaflaren masa <math display=\"inline\"><mi>m</mi></math> da eta aldeen luzera <math display=\"inline\"><mi>a</mi></math>.)"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:berdea, weight: &quot;bold&quot;, size: 10pt, smallcaps[Zenbakizko simulazioak])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili ekuazio diferentzialak ebazteko zenbakizko tresna egokiren bat (hala nola [49] programa) gai honetako higidura-ekuazioak aztertzeko. Egiaztatu soluzioak, edota fase-espazioa, erakusten dituzten irudiak."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Arro-mugak.",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hiru erakarle periodiko ditu Duffingen (8.3) ekuazioak <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0.15</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0.25</mn></mrow></math> balioetarako. Marraztu erakarleak eta dagozkien arro-mugak."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Sakabanatze kaotikoa.",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Mahai horizontal leun batean hiru disko finko berdin daude, <math display=\"inline\"><mn>2.5</mn></math> m-ko aldeko triangelu aldekide baten erpinetan. Diskoen erradioak 1 m luze dira. Norabide berean, baina jotze-parametro desberdinekin, partikula puntualak jaurtitzen dira diskoen kontra. Talkak elastikoak dira. Marraztu sakabanatze-funtzioa."
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
       "html": "<math display=\"inline\"><mi>L</mi></math> aldeko triangelu aldekide baten erpinetan hiru iman finko daude eta gainean soka batetik eseki da laugarrena, triangeluaren zentroaren bertikalean. Azken imanaren oszilazioak oso txikiak badira, bere higidura plano horizontal batean gertatzen da hurbilketa on batean eta higidura-ekuazioaren lehen hurbilketa ondoko izan daiteke: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>C</mi><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>3</mn></msup></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Azter ezazu higidura zenbakizko simulazioaren bidez. <em>Oharra</em>: Dimentsio gabeko aldagai egokietan <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>L</mi><mo>=</mo><mn>1</mn></mrow></math> aukera daitezke."
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
       "html": "Ageri denez, 8.10 problemako sistemak hiru oreka-puntu egonkor ditu (penduluaren imana beste baten gainean geratzen den bakoitzean). Marraztu erakarle horien arroak."
      }
     ]
    }
   ]
  }
 ]
};
