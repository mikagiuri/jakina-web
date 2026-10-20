/* JAKINA · kapitulua «B9.10 - Ingurune jarraituak» (05mk_10jarraituak), desde edicion2/kapituluak/05mk_10jarraituak/05mk_10jarraituak.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["05mk_10jarraituak"] = {
 "gakoa": "05mk_10jarraituak",
 "titulua": "JAKINA - B9 - Mekanika klasikoa - 10/10",
 "azala": "B9.10 - Ingurune jarraituak",
 "azpititulua": "III. aroa - L2",
 "iturburua": "kapituluak/05mk_10jarraituak/05mk_10jarraituak.typ",
 "sarrera": [
  {
   "mota": "testua",
   "html": ".update(9)"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Ingurune jarraituak",
   "blokeak": [
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 10pt)[<strong>10.1 IRUDIA</strong> Gainazal-tentsioaren ondorio ikusgarria.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ingurune jarraituen oinarrizko kontzeptuak aztertuko dira gai honetan: elastikotasuna hasteko, eta fluidoen mekanika geroago."
    },
    {
     "mota": "testua",
     "html": "Izenak berak dioenez, solidoak, likidoak eta gasak jarraitutzat kontsideratuko dira gai honetan, euren molekula-egitura alde batera utzita. Horrela «elementu infinitesimalak» (edo «partikulak») oso txikiak izango dira ikuspuntu makroskopikotik, baina oso handiak euren osagai mikroskopikoen aldean (azpian dagoen egitura osoa kontuan hartzen ez dutenez, teoria eraginkorrak direla esaten da). Hurbilketa emankor horri ezker, magnitudeak eremu jarraituak dira eta kalkulu diferentzialaren tresnak erabil daitezke."
    },
    {
     "mota": "testua",
     "html": "Ingurune jarraituen problema orokorra ez dagokio maila honetako liburu bati, eta funtsezko propietateak eta problema erraztuak ikusiko dira soilik. (Adibidez, alde batera utziko dugu hemen fenomenoen alderdi termodinamikoa, funtsezkoa bada ere.)"
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Elastikotasuna",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Denok ezagutzen ditugu gorputz elastikoak: gomazkoak dira eredua, baina solido guztiak dira elastikoak, muga batzuen barruan behintzat. Gorputz elastikoek kanpo-indarrak pairatzen dituztenean deformatu egiten dira, eta indarrak desagertzean hasierako itxura berreskuratzeko joera dute. 10.2 irudian erakusten da portaera hori eskematikoki, hemen aztertuko ditugun gorputz elastiko arrunten kasuan. Kanpo-indarrak txikiak direnean, gorputzak pairatutako indarra eta deformazioa elkarrekiko proportzionalak dira. Hookeren lege hau indarren eta deformazioen balioak handitzen betetzen da, baina bakarrik <strong>proportzionaltasun-muga</strong> deituriko punturaino heldu arte. Handik aurrera deformazio eta indarra ez dira proportzionalak baina gorputzaren portaera oraindik <strong>elastikoa</strong>  da: deformazioa iragankorra da eta ezabatu egiten da indarra desagertzean. <strong>Elastikotasun-mugatik</strong> harantz portaera <strong>plastiko</strong> bihurtzen da eta deformazioa iraunkorra da: kanpo indarra desagertu arren deformazioa ez da guztiz desagertzen. Azkenean, <strong>haustura-mugara</strong> heltzean, gorputzak ez dio eusten indarrari eta apurtu egiten da."
    },
    {
     "mota": "irudia",
     "oina": "Gorputz elastikoen portaera eskematikoa.",
     "src": "media/irudiak/c13efe3f77a04a9c.svg",
     "zabalera": 255
    },
    {
     "mota": "testua",
     "html": "Hemen Hookeren legearen proportzionaltasuna betetzen den kasuetara mugatuko gara eta, gainera, deformazioak txikiak direla emango dugu. Azken hipotesi hau ez da guztiz beharrezkoa Hookeren legea erabiltzeko (batzuetan deformazio handiekin ere betetzen baita), baina kalkuluak egiten lagunduko digu, hurbilketak egiteko aukera emanez."
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Solido elastiko homogeneo isotropoen oreka",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kontsidera dezagun 10.3 irudiko barra elastikoa, hasieran <math display=\"inline\"><mi>l</mi></math> luzera propioa duena eta kontrako kanpo-indarrak pairatzean deformatzen dena. Berriro orekan dagoenean bere luzera <math display=\"inline\"><mrow><mi>l</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow></math> izango da."
    },
    {
     "mota": "irudia",
     "oina": "Barra elastikoa deformatzen da <math display=\"inline\"><mi>F</mi></math> indarrak pairatzean.",
     "src": "media/irudiak/7240d70324d3d532.svg",
     "zabalera": 505
    },
    {
     "mota": "testua",
     "html": "Hookeren legearen arabera, <math display=\"inline\"><mrow><mi>F</mi><mo>∝</mo><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow></math> dugu, baina indarraren eta deformazioaren arteko erlazioan beste magnitude batzuk sartzen dira modu errazean, buru-esperimentu pare bat eginez ikusiko dugun bezala. 10.3 irudian goiko eskuinaldean erakusten diren bi erdiak kontsideratzen baditugu, hauek ere orekan daudela eta Newtonen hirugarren legea erabiltzen badira, argi dago irudiko indarrak dituztela. Barra osoaren luzera eta deformazioa, bi erdien luzeren eta deformazioen baturak direnez, <math display=\"inline\"><mi>F</mi></math> indar bakoitzeko <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow></math> deformazioa barraren <math display=\"inline\"><mi>l</mi></math> luzerarekiko proportzionala da: <math display=\"inline\"><mrow><mi>F</mi><mo>∝</mo><mi mathvariant=\"normal\">Δ</mi><mi>l</mi><mi>/</mi><mi>l</mi></mrow></math>. Bide bertsutik, beheko eskuinaldeko erdiak kontsideratuz, argi dago indarra zeharkako <math display=\"inline\"><mi>A</mi></math> azalerarekiko proportzionala dela: <math display=\"inline\"><mrow><mi>F</mi><mo>∝</mo><mi>A</mi><mi mathvariant=\"normal\">Δ</mi><mi>l</mi><mi>/</mi><mi>l</mi></mrow></math>. Emaitza honetan agertzen den proportzionaltasun-konstantea, hau da, elastikotasun-modulua, <strong>Youngen modulua</strong> deitzen da eta <math display=\"inline\"><mi>E</mi></math> letraz adierazten dugu. Honela idazten da, bada, Hookeren legea kasu honetan:"
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
     "html": "Zeharkako sekzioaren azalera-unitateko indarrari <strong>esfortzua</strong>  (edo <strong>tentsioa</strong>) deritzo. Kasu honetan, zeharkako sekzioarekiko perpendikularra denez, <strong>esfortzu normala</strong> dela esaten da. Irudiko kasuan <strong>trakzio-esfortzua</strong> da, baina kontrako noranzkoa balu, <strong>konpresio-esfortzua</strong> izango litzateke. Bestalde, luzera unitateko <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi><mi>/</mi><mi>l</mi></mrow></math> deformazioa <strong>deformazio unitarioa</strong> deitzen da eta gehienetan hau interesatzen zaigu, laburtzeagatik «deformazioa» («unitario» adjektiboa ahaztuta) esaten badugu ere. Hookeren legeak, beraz, <em>esfortzuaren eta deformazio unitarioaren arteko proportzionaltasuna</em> adierazten du."
    },
    {
     "mota": "testua",
     "html": "Deformazio unitarioa dimentsio gabekoa da eta esfortzuaren eta Youngen moduluaren unitatea presioarena da; SI sisteman pascala: <math display=\"inline\"><mn>1</mn></math> Pa <math display=\"inline\"><mrow><mo>=</mo><mn>1</mn></mrow></math> N m<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>2</mn></mrow></msup></math>. Youngen modulua materialaren (eta honen prestaketaren) ezaugarria da (ikus A.9 taula). Material askotan Youngen modulua berbera da trakzioan eta konpresioan, baina ez beti: hezurrak dira kontradibide ezaguna. Barrak paira dezakeen esfortzurik handiena apurtu gabe <strong>erresistentzia</strong> deitzen da eta oso ezaguna da hormigoiaren <strong>konpresioarekiko erresistentzia trakzioarekiko erresistentzia</strong> baino askoz handiagoa dela (ikus A.9 taula). nalak (eta kontrakoak)  dira:"
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
     "html": "Hemengo proportzionaltasun-konstantea, materialaren ezaugarria dena, <strong>Poissonen koefizientea</strong> deritzo, eta horrela agertuko da Hookeren legean: <math display=\"block\"><mrow><mfrac><mi>F</mi><mi>A</mi></mfrac><mo>=</mo><mi>E</mi><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>E</mi><mi>σ</mi></mfrac><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>h</mi></mrow><mi>h</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>E</mi><mi>σ</mi></mfrac><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>z</mi></mrow><mi>z</mi></mfrac><mi>.</mi></mrow></math> Geroago ikusiko dugunez, Poissonen koefizientea <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> baino txikiagoa da beti eta material arruntetan <math display=\"inline\"><mrow><mi>σ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>; beraz, beti dugu <math display=\"block\"><mrow><mn>0</mn><mo>&lt;</mo><mi>σ</mi><mo>&lt;</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math> Hookeren legearen lineraltasuna dela eta, solido elastiko homogeneo isotropoen oreka elastikoa aztertzeko nahikoa da Youngen modulua eta Poissonen koefizientea, gainezarmenaren printzipioarekin batera, erabiltzea. Hurrengo ataletan ikusiko dugu nola erabil daitezkeen kontzeptu hauek zenbait adibide erraz interesgarri aztertzeko."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bolumenaren deformazioa"
    },
    {
     "mota": "testua",
     "html": "Eman dezagun barra elastiko bat <math display=\"inline\"><mi>p</mi></math> presio hidrostatiko uniformea pairatzen duela, hau da, alde guztietan <math display=\"inline\"><mrow><mi>−</mi><mi>p</mi></mrow></math> balioko esfortzu normala aplikatzen zaiola."
    },
    {
     "mota": "irudia",
     "oina": "Barra elastikoa presio hidrostatiko uniformearen menpean.",
     "src": "media/irudiak/04c872f5cc1369cf.svg",
     "zabalera": 203
    },
    {
     "mota": "testua",
     "html": "Norabide bakoitzeko deformazioak hiru jatorri izango ditu: (10.1)-ren ondorioz norabide berean aplikaturiko esfortzua eta, (10.2) legearen arabera, zeharkako norabideetan aplikaturikoak. Beraz, <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>h</mi></mrow><mi>h</mi></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>z</mi></mrow><mi>z</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mi>E</mi></mfrac><mi>p</mi><mo>+</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><mi>p</mi><mo>+</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><mi>p</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>E</mi></mfrac><mi>p</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu deformazioak txikiak direnean barraren bolumenaren deformazio unitarioa hauxe dela: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi></mrow><mi>V</mi></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mo>+</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>h</mi></mrow><mi>h</mi></mfrac><mo>+</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>z</mi></mrow><mi>z</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Deformazio txikien kasuan, honela idazten da Hookeren legea (10.5) eta (10.6) ekuazioen ondorioz:"
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
     "html": "Hemengo elastikotasun-modulua, <strong>bolumen-modulua</strong>  (edo <strong>konprimagarritasun-modulua</strong>) deitzen da, eta Youngen moduluaren eta Poissonen koefizientearen bidez honela idazten da:"
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
     "html": "Taula askotan (ikus A.9 eta A.10 taulak) Youngen modulua eta Poissonen koefizientea eman beharrean, <math display=\"inline\"><mi>E</mi></math> eta <math display=\"inline\"><mi>B</mi></math> ematen dira, baina horiekin erraz berreskuratzen da <math display=\"inline\"><mi>σ</mi></math>: <math display=\"block\"><mrow><mi>σ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>−</mo><mfrac><mi>E</mi><mrow><mn>6</mn><mi>B</mi></mrow></mfrac><mi>.</mi></mrow></math> Bolumen-modulua positiboa da, bestela presioa aplikatzean solidoa zabaltzen hasiko litzateke eta presioak lan negatiboa egingo luke: energia ateratzeko bide ederra izango litzateke; baina hori bakarrik gerta daiteke aldez aurretik barra oreka ezegonkorrean badago eta presioa aplikatzean barran metaturiko energia elastikoa askatzen bada. Baina <math display=\"inline\"><mrow><mi>B</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bada, (10.9)-ren ondorioz, lehen aipatu dugun <math display=\"inline\"><mrow><mi>σ</mi><mo>&lt;</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> propietatea lortzen da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Zeharkako deformazio nulua"
    },
    {
     "mota": "testua",
     "html": "Norabide batean esfortzuak aplikatzean, norabide perpendikularretan ere gertatzen dira deformazioak. Nolako baldintzak bete behar dira deformazioak norabide bakar batean gertatzeko? Praktikan nahiko erraz lortzen da hori: altzairuzko hodi bat gomaz betetzen bada, azken honen muturretan presioa aplikatzean goma laburtuko da, baina (ia) ez da zabalduko, altzairuzko hormaren zurruntasun handiari esker."
    },
    {
     "mota": "irudia",
     "oina": "Zeharkako deformazio nulua.",
     "src": "media/irudiak/41741f3ca2111e18.svg",
     "zabalera": 198
    },
    {
     "mota": "testua",
     "html": "Kontsidera dezagun 10.5 irudiko paralelepipedoa. Norabide bakoitzean gertatzen diren deformazioak erraz kalkulatzen dira (10.3) legea eta gainezarmenaren printzipioa kontuan hartuz: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>E</mi></mfrac><mi>τ</mi><mo>−</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><msub><mi>τ</mi><mi>h</mi></msub><mo>−</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><msub><mi>τ</mi><mi>z</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>h</mi></mrow><mi>h</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>E</mi></mfrac><msub><mi>τ</mi><mi>h</mi></msub><mo>−</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><msub><mi>τ</mi><mi>z</mi></msub><mo>−</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><mi>τ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>z</mi></mrow><mi>z</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>E</mi></mfrac><msub><mi>τ</mi><mi>z</mi></msub><mo>−</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><msub><mi>τ</mi><mi>h</mi></msub><mo>−</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><mi>τ</mi><mi>.</mi></mrow></math> Azken bi ekuazioetan <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>h</mi><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math> egin ondoren emaitzak lehenengoan ordezkatzen badira, hauxe lortzen da: <math display=\"block\"><mrow><msub><mi>τ</mi><mi>h</mi></msub><mo>=</mo><msub><mi>τ</mi><mi>z</mi></msub><mo>=</mo><mfrac><mi>σ</mi><mrow><mn>1</mn><mo>−</mo><mi>σ</mi></mrow></mfrac><mi>τ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>τ</mi><mo>=</mo><msup><mi>E</mi><mo>′</mo></msup><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>E</mi><mo>′</mo></msup><mo>≡</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>σ</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>E</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu (10.13)–(10.15) emaitzak eta frogatu desberdintza hau:"
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
     "html": "Hortaz, zeharkako deformazioa nulua denean, Hookeren legean erabili behar den luzetarako modulua, Youngenaren ordez, (10.15) ekuazioko <math display=\"inline\"><msup><mi>E</mi><mo>′</mo></msup></math> da eta, ondorioz, horrela deformazio jakin bat lortzeko, esfortzu handiagoa behar da. Emaitzaren interesa ikusteko, kontsidera dezagun luzetarako hedapena gorputz <em>handietan</em>, hau da, gorputzaren dimentsioak uhin-luzera baino askoz handiagoak direnean (horixe gertatzen da, adibidez, uhin sismikoak Lurraren barruan hedatzen direnean). Barra batean hedatzen badira, fase-abiadura <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mi>E</mi><mi>ρ</mi></mfrac></msqrt></mrow></math> da, 9.6 atalean frogatu genuen bezala. Baina gorputz handi batean uhina joaten den eremuaren mugan ez da deformaziorik egongo eta, beraz, <math display=\"inline\"><msup><mi>E</mi><mo>′</mo></msup></math> erabili beharko da: soinuaren abiadura"
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
     "html": "izango da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kontrako esfortzuak"
    },
    {
     "mota": "testua",
     "html": "Kontsidera dezagun 10.6 irudiko paralelepipedoa, bi norabide elkarzutetan kontrako esfortzuak pairatzen dituena. Erraz kalkulatzen dira geroago erabiliko ditugun deformazioak: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>E</mi></mfrac><mi>τ</mi><mo>+</mo><mfrac><mi>σ</mi><mi>E</mi></mfrac><mi>τ</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow><mi>E</mi></mfrac><mi>τ</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>h</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Kontrako esfortzuak.",
     "src": "media/irudiak/4ba7e1450bd3ee0e.svg",
     "zabalera": 215
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ebakidura-esfortzuak"
    },
    {
     "mota": "testua",
     "html": "Esfortzua, aplikatzen den gainazalarekiko paraleloa denean, <strong>ebakidura-esfortzua</strong> deitzen da. 10.7 irudiko adibidean, kubo homogeneo bateko lau aldetan ebakidura-esfortzu berdinak aplikatu dira adierazten diren norabideetan. Lau indar horiek beharrezkoak dira kuboa orekan egoteko, indar eta momentu osoak nuluak izateko, alegia."
    },
    {
     "mota": "irudia",
     "oina": "Ebakidura-esfortzuak kubo batean.",
     "src": "media/irudiak/940ea7df4923998f.svg",
     "zabalera": 408
    },
    {
     "mota": "testua",
     "html": "Deformazioa neurtzeko dimentsio gabeko magnitude egokia, irudiko <math display=\"inline\"><mi>θ</mi></math> angelua da. Horrela, deformazioak txikiak direnean, hauexek dira <math display=\"inline\"><mi>P</mi></math> puntutik neurtutako <math display=\"inline\"><mi>Q</mi></math>-ren koordenatuak eta diagonal berria: <math display=\"block\"><mrow><mi>x</mi><mo>≈</mo><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>l</mi><mi>θ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>≈</mo><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>l</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>d</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>d</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>≈</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>θ</mi><mo>≈</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>d</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu azken hurbilketa."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hookeren legea aplikatzeko, irudiko eskuinaldean agertzen den problema aztertuko dugu. Argi dago lerro etenaz marraztutako kuboaren esfortzu- eta deformazio-egoerak hasierako problemarenak direla (kontsideratu <math display=\"inline\"><mrow><mi>U</mi><mi>R</mi><mi>S</mi></mrow></math> prisma triangeluarraren oreka); baina problema berri hau 10.2.3 atalekoa da: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>d</mi></mrow><mi>d</mi></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>E</mi></mfrac><mfrac><mrow><msqrt><mn>2</mn></msqrt><mi>F</mi></mrow><mrow><msqrt><mn>2</mn></msqrt><mi>A</mi></mrow></mfrac><mo>,</mo></mrow></math> zeren, kuboaren aldeen azalera <math display=\"inline\"><mi>A</mi></math> bada, problema honetako gorputzaren aldeena <math display=\"inline\"><mrow><msqrt><mn>2</mn></msqrt><mi>A</mi></mrow></math> baita. (10.22) eta (10.23) emaitzen ondorioz, <math display=\"inline\"><mrow><mi>F</mi><mi>/</mi><mi>A</mi></mrow></math> ebakidura-esfortzuaren eta <math display=\"inline\"><mi>θ</mi></math> deformazioaren arteko erlazioa"
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
     "html": "da eta <strong>ebakidura-modulua</strong>  (edo <strong>zurruntasun-modulua</strong>) honako hau:"
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
     "html": "(10.4)-ren ondorioz, <math display=\"inline\"><mi>G</mi></math>-ren mugak hauexek dira: <math display=\"block\"><mrow><mfrac><mi>E</mi><mn>3</mn></mfrac><mo>&lt;</mo><mi>G</mi><mo>&lt;</mo><mfrac><mi>E</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Zeharkako uhinak barra batean"
    },
    {
     "mota": "testua",
     "html": "9.6 atalean barra batean barrena hedatzen diren luzetarako uhinak aztertu ditugu. Han esfortzuak normalak ziren. Orain zeharkako uhinak kontsideratzen baditugu, esfortzuak tangenteak izango dira."
    },
    {
     "mota": "irudia",
     "oina": "Zeharkako uhinak barra batean.",
     "src": "media/irudiak/a079b7012d00d92e.svg",
     "zabalera": 281
    },
    {
     "mota": "testua",
     "html": "Azter dezagun pausagunean <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi></mrow></math> puntuen artean dagoen elementu infinitesimalaren higidura. Bi oinarrietan aplikaturiko ebakidura-indarrek kontrako noranzko positiboak dituzte, kasu batean gainazalaren eskuinean dagoen zatiak ezkerrekoaren gainean egindakoa baita, bestean ezkerreko zatiak eskuinekoaren gainekoa izanik. Deformazio-eremua pausagunetik neurturiko zeharkako distantzia izango da, irudian erakusten den <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> alegia. Deformazioak txikiak badira, <math display=\"block\"><mrow><mi>θ</mi><mo>≈</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math> dugu eta Hookeren (10.24) legea <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mi>G</mi><mi>θ</mi><mo>=</mo><mi>A</mi><mi>G</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math> Elementu infinitesimalak pairatutako indar osoa, beraz, <math display=\"block\"><mrow><mi>d</mi><mi>F</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mi>A</mi><mi>G</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>x</mi></mrow></math> da eta Newtonen bigarren legea <math display=\"block\"><mrow><mi>d</mi><mi>F</mi><mo>=</mo><mi>d</mi><mi>m</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>ρ</mi><mi>A</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Desplazamendu-eremuaren eboluzio-ekuazioa, ondorioz, (9.5) uhin-ekuazioa da, <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> eta fase-abiadura"
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
     "html": "hots, zeharkako uhinak luzetarakoak baino astiroago hedatzen dira. Abiaduren diferentzia hau lurrikaren gunearen distantzia neurtzeko erabil daiteke: sismografoetara lehenago iristen dira luzetarako <strong>p uhinak</strong> zeharkako <strong>s uhinak</strong> baino."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bihurdura-uhinak barra batean"
    },
    {
     "mota": "testua",
     "html": "Barra elastikoa zilindrikoa bada, muturretan kontrako indar-momentuak aplikatzean bihurdura bat sortuko da, 10.9 irudian erakusten den moduan."
    },
    {
     "mota": "irudia",
     "oina": "Bihurdura barra batean.",
     "src": "media/irudiak/89ffc75eec4375dc.svg",
     "zabalera": 277
    },
    {
     "mota": "testua",
     "html": "Barraren oreka berria aztertzeko, kontsidera dezagun <math display=\"inline\"><mi>r</mi></math> eta <math display=\"inline\"><mrow><mi>r</mi><mo>+</mo><mi>d</mi><mi>r</mi></mrow></math> erradioen arteko eraztun zilindrikoa. Barra osoaren bihurdura-angelua <math display=\"inline\"><mi>φ</mi></math> bada, eta eraztunarena <math display=\"inline\"><mi>θ</mi></math>, zera dugu: <math display=\"block\"><mrow><mi>L</mi><mi>θ</mi><mo>=</mo><mi>r</mi><mi>φ</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>θ</mi><mo>=</mo><mfrac><mi>r</mi><mi>L</mi></mfrac><mi>φ</mi><mi>.</mi></mrow></math> Eraztunaren elementu laukizuzen baten azterketa 10.2.4 atalekoa da: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>F</mi></mrow><mrow><mi>d</mi><mi>l</mi><mi>d</mi><mi>r</mi></mrow></mfrac><mo>=</mo><mi>G</mi><mi>θ</mi><mo>=</mo><mfrac><mrow><mi>G</mi><mi>r</mi><mi>φ</mi></mrow><mi>L</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mi>F</mi><mo>=</mo><mfrac><mrow><mi>G</mi><mi>φ</mi></mrow><mi>L</mi></mfrac><mi>r</mi><mi>d</mi><mi>r</mi><mi>d</mi><mi>l</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>d</mi><mi>l</mi></mrow></math>-rekiko integrala eginez, eraztunak pairatutako indar-momentua lortzen da: <math display=\"block\"><mrow><mi>d</mi><mi>N</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></msubsup><mi>r</mi><mi>d</mi><mi>F</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>G</mi><mi>φ</mi></mrow><mi>L</mi></mfrac><msup><mi>r</mi><mn>3</mn></msup><mi>d</mi><mi>r</mi><mi>.</mi></mrow></math> Hortaz, barrak jasandako indar-momentu osoa hauxe dugu: <math display=\"block\"><mrow><mi>N</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>R</mi></msubsup><mi>d</mi><mi>N</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>π</mi><mi>G</mi><msup><mi>R</mi><mn>4</mn></msup><mfrac><mi>φ</mi><mi>L</mi></mfrac><mi>.</mi></mrow></math> Azpimarratu behar da bihurdura jakin bat lortzeko aplikatu behar den indar-momentua barraren erradioaren laugarren berreturarekin handitzen dela."
    },
    {
     "mota": "irudia",
     "oina": "Barraren elementu infinitesimala.",
     "src": "media/irudiak/060e29ab12006a4f.svg",
     "zabalera": 372
    },
    {
     "mota": "testua",
     "html": "Orekan egon beharrean, barran perturbazio bat sortu ondoren uhin bat hedatzen bada, barraren <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> luzerako elementu infinitesimal baten <math display=\"inline\"><mrow><mi>d</mi><mi>φ</mi></mrow></math> bihurdura-angelu diferentziala aztertu beharko da: 10.10 irudiko kasuan, <math display=\"inline\"><mrow><mi>φ</mi><mi>/</mi><mi>L</mi></mrow></math> zatidura globalaren ordez, <math display=\"block\"><mrow><mfrac><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>≈</mo><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math> erabili beharko da: <math display=\"block\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>π</mi><mi>G</mi><msup><mi>R</mi><mn>4</mn></msup><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math> Elementu infinitesimalaren higidura norabide nagusi batean gertatzen denez, higidura-ekuazioa <math display=\"inline\"><mrow><mi>d</mi><mi>N</mi><mo>=</mo><mi>d</mi><mi>I</mi><msup><mi>∂</mi><mn>2</mn></msup><mi>φ</mi><mi>/</mi><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math> izango da, elementuaren <math display=\"inline\"><mrow><mi>d</mi><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>d</mi><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> inertzia-momentua eta <math display=\"inline\"><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>φ</mi><mi>/</mi><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math> azelerazio angeluarra erabiliz: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>d</mi><mi>N</mi><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>N</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>π</mi><mi>G</mi><msup><mi>R</mi><mn>4</mn></msup><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>φ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ρ</mi><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>R</mi><mn>2</mn></msup><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>φ</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mtd></mtr></mtable></math> Hortaz, <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>φ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>φ</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> uhin-ekuazioa dugu eta bihurdura-uhinen fase-abiadura zeharkako uhinena da:"
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
   "izenburua": "Deformazio-tentsorea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Deformazio orokorrak eta dinamika aztertzeko, gorputz elastikoaren deformazioa puntu batetik bestera alda daitekeela hartu behar da kontuan: elementu infinitesimalen deformazioa deskribatu behar dugu."
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒅</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> elementu infinitesimalaren deformazio orokorra.",
     "src": "media/irudiak/f680a6f86ef664d1.svg",
     "zabalera": 228
    },
    {
     "mota": "testua",
     "html": "Kontsidera dezagun deformaziorik gabe <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> posizioan dagoen <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> puntuan kokaturiko <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> elementu infinitesimal bat, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> posizioko <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math> puntu hurbilaren posizio erlatiboa ematen duena. Bi puntuen arteko distantziaren karratua"
    },
    {
     "mota": "testua",
     "html": "izango da, baldin eta, notazioa laburtzeko, 2.2 atalean egin genuenaren antzera, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>y</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mi>z</mi></mrow></math> idazten badugu."
    },
    {
     "mota": "testua",
     "html": "Deformazio-eremua <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> denean, lehen puntuko materiala <math display=\"inline\"><msubsup><mi>P</mi><mn>1</mn><mo>*</mo></msubsup></math> puntuan egongo da, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> posizioan, eta bigarren puntukoa <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> posizioko <math display=\"inline\"><msubsup><mi>P</mi><mn>2</mn><mo>*</mo></msubsup></math> puntuan. Posizio erlatibo berria, beraz, <math display=\"block\"><mrow><mi>d</mi><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>*</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>d</mi><msubsup><mi>x</mi><mi>i</mi><mo>*</mo></msubsup><mo>=</mo><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub><mo>+</mo><msub><mi>u</mi><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msub><mi>u</mi><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mi>d</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></math> izango da, esan bezala deformazioak txikiak direla ematen baitugu. (Notazioa apur bat arintzeko, atal honetan ez dugu idazten denborarekiko menpekotasuna.) Puntuen arteko distantzia berria <math display=\"block\"><mrow><mi>d</mi><msup><mi>l</mi><mrow><mi>*</mi><mn>2</mn></mrow></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>d</mi><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mi>d</mi><msubsup><mi>x</mi><mi>i</mi><mrow><mi>*</mi><mn>2</mn></mrow></msubsup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mi>d</mi><msubsup><mi>x</mi><mi>i</mi><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub><mi>d</mi><msub><mi>x</mi><mi>j</mi></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mi>d</mi><msub><mi>x</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup></mrow></math> adierazpenak emandakoa izango da; baina hemen azken gaia deformazioarekiko koadratikoa da eta, beraz, arbuiagarria. Bigarren gaian agertzen diren <math display=\"inline\"><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub><mi>/</mi><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></math> deribatuarekin <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> matrize karratu bat era daiteke eta, matrize karratu guztiak bezala, era bakarrean deskonposatzen da matrize simetriko baten eta antisimetriko baten batura moduan: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>j</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>j</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Argi dago osagai antisimetrikoak <math display=\"inline\"><mrow><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub><mi>d</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></math> faktore simetrikoarekin biderkatzean lortzen den batura zero dela. Definizioz, deformazio-tentsorearen osagaiak"
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
     "html": "dira eta, hortaz, <math display=\"block\"><mrow><mi>d</mi><msup><mi>l</mi><mrow><mi>*</mi><mn>2</mn></mrow></msup><mo>=</mo><mi>d</mi><msup><mi>l</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub><mi>d</mi><msub><mi>x</mi><mi>j</mi></msub><mo>=</mo><mi>d</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mfrac><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub><mi>d</mi><msub><mi>x</mi><mi>j</mi></msub></mrow><mrow><mi>d</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>d</mi><msup><mi>l</mi><mo>*</mo></msup><mo>=</mo><mi>d</mi><mi>l</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub><mi>d</mi><msub><mi>x</mi><mi>j</mi></msub></mrow><mrow><mi>d</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dugu, Newtonen binomioaren ondorioz. Hauxe frogatu dugu, bada: <em>hurrengo adierazpenaren bidez deformazio-tentsoreak emandakoa da deformazio unitarioa <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> puntuan eta <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> norabidean</em>: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msup><mi>l</mi><mo>*</mo></msup><mo>−</mo><mi>d</mi><mi>l</mi></mrow><mrow><mi>d</mi><mi>l</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>d</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub><mi>d</mi><msub><mi>x</mi><mi>j</mi></msub><mi>.</mi></mrow></math> Ondorioz, kontsideratzen dugun puntuan, <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>≡</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow><mrow><mi>d</mi><mi>l</mi></mrow></mfrac></mrow></math> bektore unitarioaren norabidean, deformazio unitarioa hauxe da:"
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
     "html": "Argi dago deformazio-tentsorea, deformazio unitarioaren orokorpena dena, simetrikoa (eta beraz, gehienez, 6 osagai desberdin ditu) eta dimentsio gabekoa dela. (10.49) ezkerreko gaia eskalarra da eta triedro kartesiar guztietan balio bera izango du eta, ondorioz, gauza bera gertatu behar da eskuinean agertzen den konbinazioarekin, elementu bakoitzarekin hala gertatzen ez bada ere. Izan ere, <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> bektorea triedroaren menpekoa izan ez arren, <math display=\"inline\"><mrow><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></math> aldagaiak aldatu egingo dira triedroa aldatzean; era berean <math display=\"inline\"><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> osagaiak triedroaren menpekoak izango dira, baina deformazio-tentsorea bera triedroaren independentea da. Gogoratu antzeko gauza bat esan genuela inertzia-tentsoreari buruz 5.3.1 atalean. Azpimarratu behar da oso diferentzia garrantzitsu bat dagoela inertzia- eta deformazio-tentsoreen artean, biak 2 heineko tentsore simetrikoak izan arren: lehenengoa solidoaren propietate globala da, balio bakarra duena; deformazio-tentsorea, berriz, propietate lokala da, puntu bakoitzean balio bat duena. Deformazio-tentsorea eremu tentsoriala da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Luzetarako deformazioak"
    },
    {
     "mota": "testua",
     "html": "Adibidez, <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>d</mi><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math> bada, <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>=</mo><mi>d</mi><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>l</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>d</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math> eta hauxe dugu:"
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
     "html": "(Azken emaitzan ez da balio absoluturik erabili behar, (10.43)-ren ondorio zuzena delako.) Emaitza honen kasu partikularra zen (9.54). Ageri denez, <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> desplazamendua ardatz baten norabidean aukeratzen bada, <em>deformazio-tentsorearen diagonaleko elementuak, ardatz kartesiarren norabideetan neurtutako luzetarako deformazio unitarioak dira</em>."
    },
    {
     "mota": "irudia",
     "oina": "Tentsiopeko kuboa.",
     "src": "media/irudiak/ccbb48f58485f186.svg",
     "zabalera": 232
    },
    {
     "mota": "testua",
     "html": "Adibidez, 10.12 irudiko kubo homogeneo isotropoaren orekaren kasuan, hurrengoak dira deformazio-tentsorearen osagaiak <em>puntu guztietan</em>, (10.2) emaitzaren ondorioz: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>x</mi></msub><mi>/</mi><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>y</mi></msub><mi>/</mi><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>z</mi></msub><mi>/</mi><mi>a</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>y</mi></msub></mrow><mi>a</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>σ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>σ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> (Kuboaren aldeen berezko luzera da <math display=\"inline\"><mi>a</mi></math> eta, 10.3.2 atalean ikusiko dugunez, adibide honetan diagonaletik kanpoko elementuak zero dira.)"
    },
    {
     "mota": "testua",
     "html": "Ardatz kartesiarrekiko paraleloak ez diren norabideetan gertatzen diren luzetarako deformazioak, erraz kalkulatzen dira (10.51) emaitza erabiliz: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mfrac><mrow><mi>d</mi><msup><mi>l</mi><mo>*</mo></msup><mo>−</mo><mi>d</mi><mi>l</mi></mrow><mrow><mi>d</mi><mi>l</mi></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>n</mi><mi>i</mi></msub><msub><mi>n</mi><mi>j</mi></msub><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>y</mi></msub></mrow><mi>a</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>n</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>n</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>n</mi><mi>z</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>σ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>σ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>n</mi><mi>x</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>n</mi><mi>y</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>n</mi><mi>z</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>y</mi></msub></mrow><mi>a</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><mo>−</mo><mi>σ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Adibidez, diagonal nagusien norabideak <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>±</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>±</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msqrt><mn>3</mn></msqrt></mrow></math> bektore unitarioenak direnez, <math display=\"inline\"><mrow><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><mo>=</mo><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><mo>=</mo><msubsup><mi>n</mi><mi>z</mi><mn>2</mn></msubsup><mo>=</mo><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math> dugu eta <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><msqrt><mn>3</mn></msqrt><mi>a</mi></mrow></math> luzerako diagonal nagusi guztiak deformatzen dira modu berean kasu honetan: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>d</mi></mrow><mi>d</mi></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi></mrow><mn>3</mn></mfrac><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>y</mi></msub></mrow><mi>a</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ebakidura-deformazioak"
    },
    {
     "mota": "testua",
     "html": "Diagonaletik kanpoko elementuen esangura aztertzeko eta, bidenabar, (10.46) definizioan <math display=\"inline\"><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub><mi>/</mi><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></math> deribatuen konbinazio simetrikoa aukeratzeko arrazoia hobeto ulertzeko, kontsidera dezagun 10.13 irudian adierazten diren elementu infinitesimal baten bi deformazioak."
    },
    {
     "mota": "irudia",
     "oina": "Ebakidura-deformazioa eta biraketa.",
     "src": "media/irudiak/d6d7d346e05682dc.svg",
     "zabalera": 369
    },
    {
     "mota": "testua",
     "html": "Ezkerreko kasuan, ebakidura-deformazioa dugu eta erraz kalkula dezakegu bi zati txikitan banandu dugun <math display=\"inline\"><mi>θ</mi></math> angelua. Horizontalarekiko <math display=\"inline\"><mi>α</mi></math>-ren kalkulua hauxe da: <math display=\"block\"><mrow><mi>δ</mi><mo>=</mo><msub><mi>u</mi><mi>y</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>u</mi><mi>y</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>d</mi><mi>x</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>α</mi><mo>≈</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mfrac><mi>δ</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>≈</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math> Modu berean, <math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mrow></math> da eta ebakidura-deformazioaren erdia hauxe:"
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
     "html": "Deformazio-tentsorearen osagaiak, aukeratutako triedroan hauexek dira, beraz: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>θ</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Hauxe da, bada, diagonaletik kanpoko elementuen esanahia: <em><math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>,</mo><msub><mi>x</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> planoan dagoen ebakidura-deformazioaren erdiaren berdinak dira <math display=\"inline\"><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> eta <math display=\"inline\"><msub><mi>u</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub></math> elementuak</em>  (<math display=\"inline\"><mrow><mi>i</mi><mo>≠</mo><mi>j</mi></mrow></math> denean). Hemengoaren kasu partikularra da (10.27) emaitza."
    },
    {
     "mota": "testua",
     "html": "10.13 irudiko eskuineko kasuan elementu infinitesimala (transladatu eta) biratu da, deformatu gabe, eta <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatzaren inguruko biraketa-angelua hauxe dugu: <math display=\"block\"><mrow><mi>φ</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><msub><mi>u</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Hots, deformaziorik gabeko biraketak adierazteko <math display=\"block\"><mrow><msub><mi>α</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mi>−</mi><msub><mi>α</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>j</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> tentsore antisimetrikoa erabili behar da. Gehienez 3 osagai desberdinak izango ditu: biraketa infinitesimal bat bektore baten bidez adierazteko behar direnak: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝜶</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><msub><mi>α</mi><mrow><mi>y</mi><mi>z</mi></mrow></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>α</mi><mrow><mi>z</mi><mi>x</mi></mrow></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><msub><mi>α</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> Hortaz, deformazio-eremua irrotazionala bada, <math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> (ikus B.3.6 atala) elementu infinitesimalak ez dira biratzen (puntuak biratzen badira ere): <math display=\"inline\"><mrow><msub><mi>α</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Gainera, (10.44) kalkuluan egindako (10.45) deskonposizioa <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>j</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>+</mo><msub><mi>α</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></mrow></math> moduan idazten da eta han deformazioa kalkulatzean ez da agertzen <math display=\"inline\"><msub><mi>α</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math>, deformazio gabeko biraketa hutsa adierazten du eta. (Translazio hutsean ere ez dago deformaziorik, <math display=\"inline\"><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub><mi>/</mi><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub><mo>=</mo><mn>0</mn></mrow></math> baita kasu horretan.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bolumenaren deformazioa"
    },
    {
     "mota": "testua",
     "html": "Bolumenaren aldaketa infinitesimala kalkulatzeko, kontsidera ditzagun, deformazioa nulua denean, hiru ardatz kartesiarretako norabideetan eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> puntuan definituriko hurrengo hiru bektore: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub><mo>=</mo><mi>d</mi><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub><mo>=</mo><mi>d</mi><mi>y</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>3</mn></msub><mo>=</mo><mi>d</mi><mi>z</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> deformazio-eremuarekin, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntuan egongo dira: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msubsup><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn><mo>*</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>d</mi><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo>=</mo><mi>d</mi><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>d</mi><mi>x</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn><mo>*</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn><mo>*</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒗</mi><mn>3</mn><mo>*</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>z</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Bolumenaren aldaketa infinitesimala.",
     "src": "media/irudiak/3dee06a58b1ce09f.svg",
     "zabalera": 361
    },
    {
     "mota": "testua",
     "html": "Deformazioa gertatu aurretik hiru bektoreek definituriko paralelepipedo infinitesimalaren bolumena <math display=\"block\"><mrow><mi>d</mi><mi>V</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mi>d</mi><mi>z</mi></mrow></math> da eta deformazioarekin <math display=\"block\"><mrow><mi>d</mi><msup><mi>V</mi><mo>*</mo></msup><mo>=</mo><msubsup><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn><mo>*</mo></msubsup><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn><mo>*</mo></msubsup><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝒗</mi><mn>3</mn><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mi>d</mi><mi>z</mi></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>V</mi><mi>.</mi></mrow></math> Hots, (10.6) emaitzaren orokorpena dugu: <em>bolumenaren deformazio unitarioa deformazio-eremuaren dibergentziaren (ikus B.3.4 atala) eta deformazio-tentsorearen aztarnaren berdina da</em>,"
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
     "html": "Hortaz, deformazio-eremua solenoidala bada, <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> elementu infinitesimalen bolumena ez da aldatzen."
    },
    {
     "mota": "testua",
     "html": "Kasu orokorrean, Helmholtzen teoremaren arabera, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math> deformazio-eremua eremu irrotazional baten eta solenoidal baten batura moduan idazten da (ikus B.3.8 atala): <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>Biraketarik gabeko deformazio baten eta bolumen aldaketarik gabeko beste baten konposizioa da deformazio infinitesimal orokorra</em>"
    },
    {
     "mota": "testua",
     "html": ", beraz."
    },
    {
     "mota": "testua",
     "html": "Adibide moduan, (10.53) kasuan <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi></mrow><mi>V</mi></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>x</mi></msub></mrow><mi>a</mi></mfrac><mo>+</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>y</mi></msub></mrow><mi>a</mi></mfrac><mo>+</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>z</mi></msub></mrow><mi>a</mi></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>a</mi><mi>y</mi></msub></mrow><mi>a</mi></mfrac></mrow></math> dugu eta (10.60) kasuan <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Esfortzu-tentsorea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Solido elastiko bateko elementu infinitesimal bakoitzak albokoaren gainean, bien arteko gainazalean, eragindako ukipen-indarrak dira indar elastikoak."
    },
    {
     "mota": "irudia",
     "oina": "Gainazal infinitesimal bat.",
     "src": "media/irudiak/b8f8f8122732aa67.svg",
     "zabalera": 140
    },
    {
     "mota": "testua",
     "html": "Kontsidera dezagun 10.15 irudiko gainazal-elementu infinitesimala. <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatzarekiko perpendikularra da eta bere azalera <math display=\"inline\"><mrow><mi>d</mi><mi>S</mi><mo>=</mo><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi></mrow></math> da. Elementuaren adierazpen bektoriala <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> da. Elementuaren gainean (hau da, <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math>-ren noranzko positiboak definituriko aldean) dagoen materialak, behean dagoenari, gainazaleren bitartez, eragindako indar elastikoa <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi></mrow></math> izango da. Esfortzu normala"
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
     "html": "izango da baina ebakidura-esfortzuak bi osagai ditu, <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> ardatzen norabideetan:"
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
     "html": "Oro har, <math display=\"inline\"><mi>j</mi></math> ardatzarekiko perpendikularra den elementu infinitesimalean, noranzko positiboan dagoen materialak bestearen gainean eragiten duen esfortzuaren <math display=\"inline\"><mi>i</mi></math> osagaia <math display=\"inline\"><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> izango da. <math display=\"inline\"><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> esfortzuen bilduma esfortzu-tentsorea da. <strong>Tentsio-tentsorea</strong> ere deitzen da; izan ere, kasu berezi honetatik dator «tentsore» hitza. Argi dago, oro har, deformazio-tentsorea bezala, esfortzu-tentsorea ere eremu tentsoriala dela: puntu bakoitzean tentsore bat dugu."
    },
    {
     "mota": "testua",
     "html": "Esfortzu-tentsorearen dimentsioak esfortzuarenak dira eta, deformazio-tentsorea bezala, simetrikoa da: gehienez 6 osagai desberdin ditu. (10.6.3 atalean frogatuko dugunez, momentu angeluarraren eboluzio-ekuazioaren ondorioa da propietate hau.)"
    },
    {
     "mota": "irudia",
     "oina": "Esfortzuak elementu infinitesimal batzuetan.",
     "src": "media/irudiak/e98f088142d8828a.svg",
     "zabalera": 334
    },
    {
     "mota": "testua",
     "html": "Definizioa erabiliz, erraz kalkulatzen da ardatz kartesiar batekiko perpendikularra den gainazal infinitesimalean aplikatutako indar elastikoa; baina gauza bera egin daiteke edozein norabidetako gainazal infinitesimalean. 10.16 irudiko eskuinaldeko elementuaren kasuan, dimentsioak zerora doazen limitean masa eta, beraz, indar osoa zero dira. Adibidez, higidura-ekuazioaren <math display=\"inline\"><mi>x</mi></math> osagaia hauxe da: <math display=\"block\"><mrow><mi>d</mi><msub><mi>F</mi><mi>x</mi></msub><mo>−</mo><msub><mi>τ</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mi>d</mi><mi>x</mi><mi>d</mi><mi>z</mi><mo>−</mo><msub><mi>τ</mi><mrow><mi>x</mi><mi>z</mi></mrow></msub><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>τ</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo></mrow><mrow><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi></mrow></msub><mi>d</mi><mi>y</mi><mi>d</mi><mi>z</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>τ</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo></mrow><mi>x</mi></msub><mi>d</mi><mi>y</mi><mi>d</mi><mi>z</mi><mo>=</mo><mi>ρ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>V</mi><mo>,</mo></mrow></math> non elementuaren bolumen infinitesimala <math display=\"block\"><mrow><mi>d</mi><mi>V</mi><mo>≡</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mi>d</mi><mi>z</mi></mrow></math> den. Argi dago <math display=\"inline\"><mrow><mi>d</mi><mi>V</mi><mo>→</mo><mn>0</mn></mrow></math> limitean esfortzu guztiak puntu berean aplikatzen direla eta, ondorioz, (10.85) adierazpenaren ezkerraldean agertzen diren azken bi gaiek elkar deuseztatzen dutela. Gainazal infinitesimalaren azalera eta dagokion bektore unitario normala honako hauek ditugu: <math display=\"block\"><mrow><mi>d</mi><mi>S</mi><mo>=</mo><mi>d</mi><mi>x</mi><msqrt><mrow><mi>d</mi><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>d</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><msqrt><mrow><mi>d</mi><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>d</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><msqrt><mrow><mi>d</mi><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>d</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> Beraz, <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mi>d</mi><mi>S</mi><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover></mrow></math> elementuaren alde positiboan aplikaturiko esfortzuaren <math display=\"inline\"><mi>x</mi></math> osagaia hauxe dela ikusten dugu: <img class=\"formula formula-d\" src=\"media/formulak/88f95adde9816b15.svg\" alt=\"(d F_x) / (dif S) = tau_(x y) n_y + tau_(x z) n_z + 1 / 2 rho (partial^2 u_x) / (partial t^2) n_y n_z sqrt(dif y^2 + dif z^2) attach(arrow.r.long, t: #text(size: 10pt)[$dif V -&gt; 0$]) tau_(x y) n_y + tau_(x z) n_z.\" style=\"width:35.004em;height:2.773em\" loading=\"lazy\"> Oro har, <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mi>d</mi><mi>S</mi><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover></mrow></math> elementuaren kasuan esfortzua <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msub><mi>F</mi><mi>i</mi></msub></mrow><mrow><mi>d</mi><mi>S</mi></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>n</mi><mi>j</mi></msub></mrow></math> da eta indarra"
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
     "html": "Bi gaiak bektoreen osagaiak dira; eskuinekoa tentsore baten eta bektore baten biderkadura eskalarra. Osagaiak desberdinak izango dira triedro desberdinetan, baina bektoreak eta tentsoreak intrintsekoak dira, triedroaren independenteak:"
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
     "oina": "Orekan dagoen kubo bat.",
     "src": "media/irudiak/41340a103aa58d80.svg",
     "zabalera": 197
    },
    {
     "mota": "testua",
     "html": "Adibide moduan, kontsidera dezagun orekan dagoen 10.17 irudiko kuboa. Aukeratu diren ardatzetan, honela idazten da esfortzu-tentsorea: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>τ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Bestalde, (10.3) emaitzen ondorioz, hauexek ditugu luzetarako deformazio unitarioak: <math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>z</mi><mi>z</mi></mrow></msub><mo>=</mo><mi>−</mi><mi>σ</mi><mfrac><mi>τ</mi><mi>E</mi></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mfrac><mi>τ</mi><mi>E</mi></mfrac><mi>.</mi></mrow></math> (10.24) adierazpena erabiliz, zuzenean kalkulatzen dira ebakidura-deformazioak: <math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>y</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>y</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>z</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>z</mi><mi>x</mi></mrow></msub><mo>=</mo><mfrac><mi>θ</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mi>τ</mi><mrow><mn>2</mn><mi>G</mi></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>τ</mi><mi>E</mi></mfrac><mi>.</mi></mrow></math> Ondorioz, hauxe dugu deformazio-tentsorea: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>τ</mi><mi>E</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>σ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><mi>σ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><mi>σ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>σ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Bi gainazal kuboaren barruan.",
     "src": "media/irudiak/253f5197170b1b4b.svg",
     "zabalera": 368
    },
    {
     "mota": "testua",
     "html": "Bolumenaren deformazio unitarioa, beraz, honako hau da: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi></mrow><mi>V</mi></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>k</mi><mi>k</mi></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>τ</mi><mi>E</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kalkula dezagun orain 10.18 irudiko <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> gainazalean aplikatutako esfortzua. Dagokion bektore unitarioa <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒋</mi></mrow><msqrt><mn>2</mn></msqrt></mfrac></mrow></math> denez, (10.92) emaitzaren arabera, hauxe dugu: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi></mrow><mrow><mi>d</mi><mi>S</mi></mrow></mfrac><mo>=</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mfrac><mi>τ</mi><msqrt><mn>2</mn></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>τ</mi><msqrt><mn>2</mn></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>τ</mi><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒌</mi></mrow><msqrt><mn>2</mn></msqrt></mfrac><mi>.</mi></mrow></math> Esfortzu normala eta tangentea (hau da, ebakidura-esfortzua) zuzenean kalkulatzen dira orain: <math display=\"block\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi></mrow><mrow><mi>d</mi><mi>S</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi></mrow><mrow><mi>d</mi><mi>S</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>τ</mi><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒋</mi></mrow><mrow><mn>2</mn><msqrt><mn>2</mn></msqrt></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi></mrow><mrow><mi>d</mi><mi>S</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∥</mo></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi></mrow><mrow><mi>d</mi><mi>S</mi></mrow></mfrac><mo>−</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi></mrow><mrow><mi>d</mi><mi>S</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msub><mo>=</mo><mi>τ</mi><mfrac><mrow><mi>−</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝒌</mi></mrow><mrow><mn>2</mn><msqrt><mn>2</mn></msqrt></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkulatu esfortzuaren bi osagaiak 10.18 irudiko <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> gainazalean."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kontsideratu orekan dauden 10.3 eta 10.7 irudietako solidoak. Eman dezagun irudi bakoitzean erakutsitako planoa <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math> dela, <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatza horizontala eta <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> ardatza bertikala. Froga ezazu dagozkien esfortzu-tentsoreak hauexek direla, hurrenez hurren: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>F</mi><mi>A</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>F</mi><msup><mi>l</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Presioa"
    },
    {
     "mota": "testua",
     "html": "Esfortzu-tentsorerik errazena identitatearekiko proportzionala dena da:"
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
     "html": "Presioa deskribatzen du honek, edozein gainazal infinitesimalarekiko perpendikularra eta barru-ranzkoa baita (ikus, 590. orrialdean, Pascalen legea):"
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
   "izenburua": "Elastikotasun-tentsorea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kasu orokorrean ere Hookeren legeak esfortzu- eta deformazio-tentsoreen arteko erlazio lineala adierazten du, baina —(10.93) eta (10.98) tentsoreen adibidean ikusten denez— ez da proportzionaltasun-konstante batek emandakoa, ondoko egitura orokorragoa baizik:"
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
     "html": "Elastikotasun-tentsorearen osagaiak <math display=\"inline\"><msub><mi>C</mi><mrow><mi>i</mi><mi>j</mi><mi>k</mi><mi>l</mi></mrow></msub></math> elastikotasun-moduluak dira eta gorputza homogeneoa bada, konstanteak dira."
    },
    {
     "mota": "testua",
     "html": "Esfortzu- eta deformazio-tentsoreak simetrikoak direnez, bakoitzak gehienez 6 osagai desberdin ditu; elastikotasun-tentsoreak, ondorioz, gehienez 36 osagai desberdin izango ditu, baina askotan askoz ere gutxiago dira. Kristal kubiko baten kasuan 21 dira, gehienez."
    },
    {
     "mota": "testua",
     "html": "Bestalde, (1.89)-ren orokorpen moduan, energia elastikoaren dentsitatea honako hau da: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mi>j</mi><mi>k</mi><mi>l</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>C</mi><mrow><mi>i</mi><mi>j</mi><mi>k</mi><mi>l</mi></mrow></msub><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>u</mi><mrow><mi>k</mi><mi>l</mi></mrow></msub><mi>.</mi></mrow></math> (10.6 eta 10.7 problemetan aztertzen da erlazio hau bi kasu errazetan.) Bestelako indarrik ez badago, <math display=\"inline\"><mrow><mo>∫</mo><mi>U</mi><mi>d</mi><mi>V</mi></mrow></math> energia elastiko osoaren minimoetan gertatuko da oreka."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Gorputz homogeneo isotropoa"
    },
    {
     "mota": "testua",
     "html": "Kasu berezi honetan, elastikotasun-tentsoreak bi osagai independente besterik ez ditu, simetrien ondorioz, eta esfortzu- eta deformazio-tentsoreen arteko erlazioa beti idatz daiteke era honetan<span class=\"j-oin\">[Ikus, halaber, 10.13 problema.]</span>: <math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mn>2</mn><mi>μ</mi><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>+</mo><mi>λ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>k</mi><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>.</mi></mrow></math> Honek esan nahi du elastikotasun-tentsorearen osagaiak <math display=\"block\"><mrow><msub><mi>C</mi><mrow><mi>i</mi><mi>j</mi><mi>k</mi><mi>l</mi></mrow></msub><mo>=</mo><mi>λ</mi><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>δ</mi><mrow><mi>k</mi><mi>l</mi></mrow></msub><mo>+</mo><mi>μ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>δ</mi><mrow><mi>i</mi><mi>k</mi></mrow></msub><msub><mi>δ</mi><mrow><mi>j</mi><mi>l</mi></mrow></msub><mo>+</mo><msub><mi>δ</mi><mrow><mi>i</mi><mi>l</mi></mrow></msub><msub><mi>δ</mi><mrow><mi>j</mi><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> edota <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>C</mi><mrow><mi>x</mi><mi>x</mi><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>y</mi><mi>y</mi><mi>z</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>z</mi><mi>z</mi><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>y</mi><mi>y</mi><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>⋯</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>μ</mi><mo>=</mo><msub><mi>C</mi><mrow><mi>x</mi><mi>y</mi><mi>x</mi><mi>y</mi></mrow></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>x</mi><mi>z</mi><mi>x</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>y</mi><mi>x</mi><mi>y</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>⋯</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mn>2</mn><mi>μ</mi><mo>+</mo><mi>λ</mi><mo>=</mo><msub><mi>C</mi><mrow><mi>x</mi><mi>x</mi><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>y</mi><mi>y</mi><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>z</mi><mi>z</mi><mi>z</mi><mi>z</mi></mrow></msub><mi>.</mi></mrow></math> direla. Erabili ditugun <math display=\"inline\"><mi>μ</mi></math> eta <math display=\"inline\"><mi>λ</mi></math> parametroak <strong>Laméren konstante elastikoak</strong> dira. Kontsidera dezagun orekan dagoen 10.3 irudiko barraren elementu bat. Hookeren (10.3) legea, (10.53) deformazio-tentsorea, (10.104) esfortzu-tentsorea eta (10.110) adierazpena erabiliz, hauxe dugu: <math display=\"block\"><mrow><mi>E</mi><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mo>=</mo><mi>τ</mi><mo>=</mo><msub><mi>τ</mi><mn>11</mn></msub><mo>=</mo><mn>2</mn><mi>μ</mi><msub><mi>u</mi><mn>11</mn></msub><mo>+</mo><mi>λ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>11</mn></msub><mo>+</mo><msub><mi>u</mi><mn>22</mn></msub><mo>+</mo><msub><mi>u</mi><mn>33</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mi>μ</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mn>0</mn><mo>=</mo><msub><mi>τ</mi><mn>22</mn></msub><mo>=</mo><mn>2</mn><mi>μ</mi><msub><mi>u</mi><mn>22</mn></msub><mo>+</mo><mi>λ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>11</mn></msub><mo>+</mo><msub><mi>u</mi><mn>22</mn></msub><mo>+</mo><msub><mi>u</mi><mn>33</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mn>2</mn><mi>σ</mi><mi>μ</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mi>.</mi></mrow></math> Hemendik zuzenean lortzen da lehenago ikusi ditugun elastikotasun-moduluen konbinazio moduan idatz daitezkeela Laméren konstanteak: <math display=\"block\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mi>E</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>E</mi><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow></mfrac><mfrac><mi>σ</mi><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi></mrow></mfrac><mi>.</mi></mrow></math> Ageri denez, (10.25) ebakidura-modulua <math display=\"inline\"><mrow><mi>G</mi><mo>=</mo><mi>μ</mi></mrow></math> da eta (10.15) luzetarako modulua <math display=\"inline\"><mrow><msup><mi>E</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>μ</mi><mo>+</mo><mi>λ</mi></mrow></math>. 10.17 irudiko kuboaren kasuan, (10.98) eta (10.99) erabiliz, (10.93) berreskuratzen da: <math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>2</mn><mi>μ</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mi>λ</mi><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>k</mi><mi>k</mi></mrow></msub><mo>=</mo><mfrac><mi>τ</mi><mi>E</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>σ</mi><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow></mfrac><mo>+</mo><mfrac><mi>E</mi><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow></mfrac><mfrac><mi>σ</mi><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>2</mn><mi>μ</mi><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>λ</mi><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>k</mi><mi>k</mi></mrow></msub><mo>=</mo><mfrac><mi>τ</mi><mi>E</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>E</mi><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow></mfrac><mo>+</mo><mfrac><mi>E</mi><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow></mfrac><mfrac><mi>σ</mi><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>τ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>2</mn><mi>μ</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>x</mi><mi>z</mi></mrow></msub><mo>=</mo><mn>2</mn><mi>μ</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>z</mi></mrow></msub><mo>=</mo><mfrac><mi>E</mi><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow></mfrac><mfrac><mi>τ</mi><mi>E</mi></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>τ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kontsideratu orekan dagoen 10.13 irudiko elementua. Erabili (10.60) deformazio-tentsorea, (10.105) esfortzu-tentsorea eta (10.24) legea, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>G</mi></mrow></math> berriro egiaztatzeko."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Gorputz elastiko homogeneo eta isotropoen kasuan, 10.13 probleman frogatuko ditugun ondoko adierazpen baliokideak ere erabil daitezke:"
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
   "izenburua": "Gorputz elastikoaren higidura-ekuazioak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Gorputz elastikoetan eragiten duten kanpo-indar batzuk bolumenarekiko proportzionalak dira, hau da indar-dentsitate baten bidez adierazten dira: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>V</mi></msub><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mi>d</mi><mi>V</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Gorputz elastiko baten barruko bolumen bat.",
     "src": "media/irudiak/0669b644ce2526fb.svg",
     "zabalera": 190
    },
    {
     "mota": "testua",
     "html": "<strong>Bolumen-indarrak</strong> deitzen dira horrelakoak eta ezagunena pisua da eta dagokion indar-dentsitatea honako hau: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mo>=</mo><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒈</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>V</mi></msub><mo>=</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝒈</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beste kanpo-indar batzuk <strong>gainazal-indarrak</strong> izan daitezke, gorputzaren azalean bakarrik eragiten badute. Horrelakoak izan dira 10.3 irudikoak, adibidez. Hemen, gauzak errazteko, kanpoko gainazal-indarrak nuluak direla emango dugu. Hori gerta daiteke horrelakoek deformazio-eremu bat sortu ondoren kendu direlako edo kanpo-indar bakarra bolumenekoa izan delako."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Indar elastikoen dentsitatea"
    },
    {
     "mota": "testua",
     "html": "Barne-indarrak, indar elastikoak hain zuzen, elementu infinitesimalen arteko gainazaletan aplikatzen dira, baina bolumenekotzat ere kontsidera ditzakegu. Izan ere, indar elastikoen dentsitatea erraz defini daiteke. <math display=\"inline\"><mi>S</mi></math> gainazal itxi batean egindako indar elastiko osoa, (10.92)-ren ondorioz, <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>e</mi></msub><mo>=</mo><msub><mo>∮</mo><mi>S</mi></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><msub><mo>∮</mo><mi>S</mi></msub><mi mathvariant=\"bold-italic\">𝝉</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math> da. Gogora gaitezen orain Gaussen teoremaren arabera (ikus B.3.4 atala), eremu bektorial batek gainazal itxi batean zehar duen kanporanzko fluxua, gainazalak inguratutako bolumenean kalkulaturiko eremuaren dibergentziaren integralaren berdina dela: <math display=\"block\"><mrow><msub><mo>∮</mo><mi>S</mi></msub><mi mathvariant=\"bold-italic\">𝑬</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mi>d</mi><mi>V</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mo>∮</mo><mi>S</mi></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>E</mi><mi>j</mi></msub><mi>d</mi><msub><mi>S</mi><mi>j</mi></msub><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>E</mi><mi>j</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mi>d</mi><mi>V</mi><mi>.</mi></mrow></math> Modu berean, hurrengo orokorpena froga daiteke (azken batez, <math display=\"inline\"><mi>i</mi></math> indizearen balio bakoitzeko Gaussen teorema da): <math display=\"block\"><mrow><msub><mo>∮</mo><mi>S</mi></msub><mi mathvariant=\"bold-italic\">𝝉</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mi>d</mi><mi>V</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mo>∮</mo><mi>S</mi></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msub><mi>S</mi><mi>j</mi></msub><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mi>d</mi><mi>V</mi><mi>.</mi></mrow></math> Baina horrek esan nahi du <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>e</mi></msub><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mi>d</mi><mi>V</mi></mrow></math> dela eta, beraz, indar-elastikoaren dentsitatea"
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
       "html": "Froga ezazu presioari dagokion (10.106) esfortzu-tentsoreak definituriko indar-dentsitatea hauxe dela:"
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
     "testua": "Eboluzio-ekuazioak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>d</mi><mi>V</mi></mrow></math> elementu infinitesimal baten masa eta azelerazioa <math display=\"inline\"><mrow><mi>d</mi><mi>m</mi><mo>=</mo><mi>ρ</mi><mi>d</mi><mi>V</mi></mrow></math> eta <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒖</mi><mi>/</mi><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math> dira, hurrenez hurren, eta Newtonen bigarren legea <math display=\"inline\"><mrow><mi>d</mi><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>e</mi></msub><mi>d</mi><mi>V</mi><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mi>d</mi><mi>V</mi></mrow></math>, hau da, solido elastikoak pairatzen dituen indarrak bolumeneko kanpo-indarrak eta elastikoak badira, higidura-ekuazioa honako hau da:"
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
     "html": "Elementuaren momentu angeluarraren eboluzio-ekuazioa Newtonen bigarren lege honen ondorio zuzena da: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi>d</mi><mi>m</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>V</mi><mi>.</mi></mrow></math> Beraz, momentu angeluarraren deribatua indar-momentuaren berdina denez, indar elastikoen momentuen dentsitatea hauxe da: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msub><mi mathvariant=\"bold-italic\">𝑵</mi><mi>e</mi></msub></mrow><mrow><mi>d</mi><mi>V</mi></mrow></mfrac><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>e</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Indar elastikoen momentuen dentsitatea"
    },
    {
     "mota": "testua",
     "html": "Baina, bestalde, zuzenean kalkula dezakegu 10.19 irudiko <math display=\"inline\"><mi>V</mi></math> bolumenean aplikaturiko indar elastikoen momentua: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑵</mi><mi>e</mi></msub><mo>=</mo><msub><mo>∮</mo><mi>S</mi></msub><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><msub><mo>∮</mo><mi>S</mi></msub><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>.</mi></mrow></math> Kalkula dezagun honen <math display=\"inline\"><mi>z</mi></math> osagaia Gaussen teorema erabiliz: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>N</mi><mrow><mi>e</mi><mn>3</mn></mrow></msub><mo>=</mo><msub><mo>∮</mo><mi>S</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>d</mi><msub><mi>F</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mi>d</mi><msub><mi>F</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mo>∮</mo><mi>S</mi></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>τ</mi><mrow><mn>2</mn><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><msub><mi>τ</mi><mrow><mn>1</mn><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><msub><mi>S</mi><mi>j</mi></msub></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mi>∂</mi><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>τ</mi><mrow><mn>2</mn><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><msub><mi>τ</mi><mrow><mn>1</mn><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>V</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>τ</mi><mrow><mn>2</mn><mi>j</mi></mrow></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>τ</mi><mrow><mn>1</mn><mi>j</mi></mrow></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>+</mo><msub><mi>τ</mi><mn>21</mn></msub><mo>−</mo><msub><mi>τ</mi><mn>12</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>V</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>f</mi><mrow><mi>e</mi><mn>2</mn></mrow></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><msub><mi>f</mi><mrow><mi>e</mi><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>τ</mi><mn>21</mn></msub><mo>−</mo><msub><mi>τ</mi><mn>12</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>V</mi><mi>.</mi></mtd></mtr></mtable></math> Emaitza hau <math display=\"inline\"><mi>V</mi></math> guztietarako betetzen denez, indar elastikoen momentuaren <math display=\"inline\"><mi>z</mi></math> osagaia <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msub><mi>N</mi><mrow><mi>e</mi><mn>3</mn></mrow></msub></mrow><mrow><mi>d</mi><mi>V</mi></mrow></mfrac><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>f</mi><mrow><mi>e</mi><mn>2</mn></mrow></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><msub><mi>f</mi><mrow><mi>e</mi><mn>1</mn></mrow></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>τ</mi><mn>21</mn></msub><mo>−</mo><msub><mi>τ</mi><mn>12</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da; baina (10.135) adierazpenaren 3. osagaian ez da agertzen azken gaia: <math display=\"inline\"><mrow><msub><mi>τ</mi><mn>21</mn></msub><mo>=</mo><msub><mi>τ</mi><mn>12</mn></msub></mrow></math> bete behar da, hortaz. Argi dago propietate bera betetzen dutela beste osagaiek: <math display=\"inline\"><mrow><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><msub><mi>τ</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub></mrow></math> dugu eta <em>esfortzu-tentsorea simetrikoa da</em>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Solido homogeneo isotropoa"
    },
    {
     "mota": "testua",
     "html": "Solidoa homogeneoa eta isotropoa bada, (10.46) eta (10.110) adierazpenetatik <math display=\"block\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>i</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mi>μ</mi><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msubsup><mi>x</mi><mi>j</mi><mn>2</mn></msubsup></mrow></mfrac><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>j</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝉</mi><mo>=</mo><mi>μ</mi><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒖</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>∇</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> lortzen da eta (10.133) higidura-ekuazioa <strong>Cauchy eta Navierren ekuaziora</strong> laburtzen da:"
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
     "testua": "Uhin elastikoak mugagabeko ingurune homogeneo isotropoetan"
    },
    {
     "mota": "testua",
     "html": "Kanpo-indarrik ez badago, hau da, gorputza deformazio-egoera batean jarri ondoren desagertzen bada, gorputz homogeneo isotropoaren eboluzioa esfortzu elastikoen menpean gertatuko da, hurrengo ekuazioaren arabera: <math display=\"block\"><mrow><mi>ρ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>μ</mi><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒖</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>∇</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Azken gaia ez balego, uhin-ekuazioa dela esango genuke. Uhin-ekuazio desberdin bat dela ikusteko, saia dezagun <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> egiturako soluzioa. <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> betetzen denez, (10.142) ekuazioaren osagaiak honako hauek dira: <math display=\"block\"><mrow><mi>ρ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>μ</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>ρ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>μ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>ρ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>μ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>u</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Soluzioa, beraz, <math display=\"inline\"><mi>x</mi></math> norabidean hedatzen den uhina da. <math display=\"inline\"><msub><mi>u</mi><mi>x</mi></msub></math> osagaia luzetarako uhina da eta bere fase-abiadura (10.18):"
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
     "html": "<math display=\"inline\"><msub><mi>u</mi><mi>y</mi></msub></math> eta <math display=\"inline\"><msub><mi>u</mi><mi>z</mi></msub></math> osagaiak, berriz, zeharkako uhinak dira eta (10.32) fase-abiadura txikiagoz hedatzen dira:"
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
     "html": "Frogatu dugu, beraz, (10.142) uhin-ekuazio bat dela, eta orain ikusiko dugu modu orokorragoan nola deskonposatzen den bi uhin-ekuazio arruntetan. Hasteko, <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msubsup><mi>v</mi><mo>⟂</mo><mn>2</mn></msubsup><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒖</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>v</mi><mo>∥</mo><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>v</mi><mo>⟂</mo><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>∇</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> modu baliokidean idatziko dugu, (10.150)–(10.151) abiadurez baliatuz. Orain Helmholtzen teoremaren arabera, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math> deformazio-eremua (10.78)–(10.80) moduan idazten badugu, <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msubsup><mi>v</mi><mo>⟂</mo><mn>2</mn></msubsup><msup><mi>∇</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo>+</mo><msubsup><mi>v</mi><mo>⟂</mo><mn>2</mn></msubsup><msup><mi>∇</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>v</mi><mo>∥</mo><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>v</mi><mo>⟂</mo><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>∇</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dugu eta, (10.80) eta eragile diferentzialak, deribatu partzialak bezala, elkarrekin trukatzen direla erabiliz, honen dibergentzia honela geratzen da: <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mi>v</mi><mo>∥</mo><mn>2</mn></msubsup><msup><mi>∇</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo>−</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Bestalde, (10.79)-ren ondorioz <math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mi>v</mi><mo>∥</mo><mn>2</mn></msubsup><msup><mi>∇</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo>−</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> dugu eta, errotazional eta dibergentzia nuluak dituen eremu bektoriala nulua dela (ikus B.3.8 atala) erabiliz, <math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo>−</mo><mfrac><mn>1</mn><msubsup><mi>v</mi><mo>∥</mo><mn>2</mn></msubsup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Elementu infinitesimalen biraketarik gabeko uhin harmoniko guztiak (<math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn></mrow></math>) hedatzen dira (10.150) fase-abiaduraz."
    },
    {
     "mota": "testua",
     "html": "Orain, (10.153)-ren errotazionala, <math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mi>v</mi><mo>⟂</mo><mn>2</mn></msubsup><msup><mi>∇</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub><mo>−</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> eta (10.80)-ren ondorioa den <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mi>v</mi><mo>⟂</mo><mn>2</mn></msubsup><msup><mi>∇</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub><mo>−</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> erabiliz, <math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub><mo>−</mo><mfrac><mn>1</mn><msubsup><mi>v</mi><mo>⟂</mo><mn>2</mn></msubsup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math> dugu: bolumena aldatu gabe (<math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>s</mi></msub><mo>=</mo><mn>0</mn></mrow></math>) hedatzen diren uhin elastikoen fase-abiadura (10.151) da."
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Fluidoak eta abiadura-eremua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Denok dakigu zer diren likido eta gas arruntak (hemen ez ditugu tarteko kasu interesgarriak kontsideratuko): berezko forma eduki beharrean ontziarena hartzen dute. Kontsidera dezagun 10.20 irudiko inbutuan orekan dagoen diskoa. Argi dago hori posible dela diskoa solidoa bada eta ezinezkoa ura, edo bestelako likidoa bada. Baina, erdiko zilindroaren oreka aztertzen badugu, orekan egoteko, hau da, pisuaren kontrakoa den <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mo>∥</mo></msub></math> indar elastiko tangentea sortzeko, inguruko materialak diskoaren alboko azalean eragindako indar elastikoak ebakidura-esfortzu bat egin behar du. Eta oreka hori fluidoen kasuan ezinezkoa denez, zera esan dezakegu: <em>fluidoak ezin egon daitezke orekan ebakidura-esfortzuak pairatzen dituzten bitartean</em>. Ebakidura-esfortzua txikia izan arren, deformazioa ez da nahitaez txikia: handitzen da esfortzua desagertu arte. Horixe erabiliko dugu testu honetan fluidoen definiziotzat."
    },
    {
     "mota": "irudia",
     "oina": "Uraren oreka ezinezkoa inbutu batean.",
     "src": "media/irudiak/857c3bd096985696.svg",
     "zabalera": 374
    },
    {
     "mota": "testua",
     "html": "Orain arte, partikula-sistemetan eta ingurune elastiko jarraituetan, partikulek edo elementu infinitesimalek euren ibilbidetan zehar dituzten magnitudeen balioak (posizioa, abiadura eta abar) izan dira sistema mekanikoen oinarrizko aztergaiak: <strong>aldagai lagrangearrak</strong> direla esaten da, mekanika analitikoa egiteko egokiak baitira. Baina fluidoen kasuan askotan egokiagoak dira <strong>aldagai eulertarrak</strong>: partikula bakoitzak une bakoitzean dituen posizioa eta abiadura kontsideratu beharrean, <math display=\"inline\"><mi>t</mi></math> aldiune bakoitzean <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> puntu bakoitzean une horretan bertan dagoen partikularen abiadura kontsideratuko dugu. Horrela, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioa definitzen da une eta puntu guztietan: eremu bektorial bat dugu, abiadura-eremua, hain zuzen. Nolabait esateko, orain arte partikula izan da azterketa-gunea, baina orain puntua izango da."
    },
    {
     "mota": "testua",
     "html": "Modu berean definituko dira beste eremu eskalar eta bektorial batzuk, hala nola dentsitatea eta presioa. Dentsitatea, adibidez, une bakoitzean puntu bakoitzean dagoen elementu infinitesimalaren masaren eta bolumenaren arteko zatidura izango da: <math display=\"inline\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mi>m</mi><mi>/</mi><mi>d</mi><mi>V</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Korronte-lerroak"
    },
    {
     "mota": "testua",
     "html": "Ikuspuntu honetatik, partikulen ibilbideen ordez, korronte-lerroak —hau da, une bakoitzean puntu orotan abiadura-eremuarekiko tangenteak diren kurbak— kontsideratu behar ditugu: <math display=\"block\"><mrow><mi>δ</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>∥</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>δ</mi><mi>x</mi></mrow><msub><mi>v</mi><mi>x</mi></msub></mfrac><mo>=</mo><mfrac><mrow><mi>δ</mi><mi>y</mi></mrow><msub><mi>v</mi><mi>y</mi></msub></mfrac><mo>=</mo><mfrac><mrow><mi>δ</mi><mi>z</mi></mrow><msub><mi>v</mi><mi>z</mi></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>δ</mi><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> (D.0.1 ataleko desplazamendu birtualen notazioa erabili dugu hemen, <math display=\"inline\"><mi>d</mi></math>-ren ordez, diferentzialak adierazteko, une finko bat kontsideratu baitugu.) Oro har, abiadura-eremua denboraren menpekoa denez, horrelakoak izango dira korronte-lerroak eta, ondorioz, ibilbideen desberdinak: ibilbide batean partikula batek une guztietan dituen abiadurak kontsideratzen dira eta korronte-lerro batean une bakar batean hainbat partikulak dituzten abiadurak."
    },
    {
     "mota": "irudia",
     "oina": "Korronte-lerroak une batean eta bi une hurbiletan.",
     "src": "media/irudiak/36399a4fb57151d4.svg",
     "zabalera": 301
    },
    {
     "mota": "testua",
     "html": "Fluidoen kasuan, oro har, deformazioak ez dira txikiak izango eta, hortaz, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> deformazio-eremuaren ordez, denbora-unitateko deformazioa neurtzen duen <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> abiadura-eremua izango da funtsezko aldagai zinematikoa. Argi dago, bi kontzeptuen artean erlazio zuzena eta estua dagoela, eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>t</mi><mo>+</mo><mi>d</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tarte infinitesimalean deformazioa <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi></mrow></math> dela. Adibidez, (10.76)-ren ondorioz, <em>fluidoarekin batera higitzen den elementu infinitesimalaren bolumenaren deribatu logaritmikoa, zabaltze-abiadura deitzen den abiadura-eremuaren dibergentziaren berdina da</em>:"
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
     "html": "Ondorioz, fluidoarekin batera higitzen den elementu infinitesimalaren bolumena kontserbatuko da abiadura-eremua solenoidala denean: <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bortizitatea"
    },
    {
     "mota": "testua",
     "html": "Helmholtzen teoremaren arabera (ikus B.3.8 atala) bere dibergentziak eta errotazionalak (mugalde-baldintza egokiekin batera) zehazten dute eremu bektorial bat. Abiadura-eremuaren errotazionala <strong>bortizitatea</strong> deitzen da:"
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
     "html": "(10.63)-ren ondorioz, <em>fluidoarekin batera higitzen den elementu infinitesimalaren abiadura angeluarra bortizitatearen erdia da</em>."
    },
    {
     "mota": "irudia",
     "oina": "Kurba itxia eta mugatzen duen gainazal orientatua.",
     "src": "media/irudiak/e03962e4cf6a25a4.svg",
     "zabalera": 191
    },
    {
     "mota": "testua",
     "html": "zeharreko bortizitatearen fluxuaren berdina izango da (abiadura-eremua erregularra bada eta zulorik ez badago <math display=\"inline\"><mi>S</mi></math> gainazalean): <math display=\"block\"><mrow><msub><mo>∮</mo><mi>C</mi></msub><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msub><mo>∫</mo><mi>S</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><msub><mo>∫</mo><mi>S</mi></msub><mi mathvariant=\"bold\">𝛀</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Denborarekiko deribatuak"
    },
    {
     "mota": "testua",
     "html": "Azelerazio-eremua une bakoitzean puntu bakoitzean dagoen partikularen azelerazioa izango da, noski; baina partikula baten azelerazioa bere abiaduraren deribatua bada, nola deribatu behar da abiadura-eremua azelerazioa aurkitzeko? <math display=\"inline\"><mi>t</mi></math> unean partikula <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> puntuan badago, bere abiadura <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izango da eta, <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> tartean <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi></mrow></math> bidea egin duenez, <math display=\"inline\"><mrow><mi>t</mi><mo>+</mo><mi>d</mi><mi>t</mi></mrow></math> unean bere abiadura <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>+</mo><mi>d</mi><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><msub><mi>v</mi><mi>x</mi></msub><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><msub><mi>v</mi><mi>y</mi></msub><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><msub><mi>v</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi></mrow></math> izango da. (Azken ekuazioaren eskuineko gaiaren elementu guztiak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> balioetan kalkulatzen dira, horien inguruan egin baita Taylorren garapena.) Azelerazioa beraz, <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>+</mo><mi>d</mi><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><msub><mi>v</mi><mi>x</mi></msub><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><msub><mi>v</mi><mi>y</mi></msub><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><msub><mi>v</mi><mi>z</mi></msub></mrow></math> izango da eta, eremu eskalarrekin eta bektorialekin erabiltzen den"
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
     "html": "definizioaz baliatuz, honela idatziko dugu, berriro <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> argumentuak esplizituki jarri gabe:"
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
     "html": "Jakina antzeko formula bat erabili beharko da beste eremu (eskalar edo bektorial) guztien deribatua kalkulatzeko. Adibidez, hauexek ditugu dentsitatearen eta presioaren deribatuak:"
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
     "html": "(Ohar zaitez nabla eragilearekin biderkatzen dena beti dela abiadura-eremua.) Testu batzuetan <math display=\"inline\"><mrow><mi>d</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math> deribatu osoa <strong>substantzia-deribatua</strong> dela esaten da, substantziaren higidurak sortzen baitu. <math display=\"inline\"><mrow><mi>∂</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> deribatu partziala <strong>deribatu lokala</strong> da eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi></mrow></math> delakoa <strong>konbekzio-deribatua</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fluxua"
    },
    {
     "mota": "testua",
     "html": "Kontsidera dezagun <math display=\"inline\"><mi>S</mi></math> gainazal <em>finko</em> bat. Denbora unitatean <math display=\"inline\"><mi>S</mi></math> zeharkatzen duen masa, fluxua deritzo. Has gaitezen <math display=\"inline\"><mrow><mi>d</mi><mi>S</mi></mrow></math> elementu infinitesimal batean zeharreko fluxuarekin. Han fluidoaren abiadura <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> denez, <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> tartean <math display=\"inline\"><mrow><mi>d</mi><mi>S</mi></mrow></math> zeharkatuko duen masa irudiko paralelepipedo infinitesimalean dagoena da: <math display=\"inline\"><mrow><mi>ρ</mi><mi>d</mi><mi>V</mi></mrow></math>. Paralelepipedoaren oinarriaren azalera <math display=\"inline\"><mrow><mi>d</mi><mi>S</mi></mrow></math> da eta altuera <math display=\"inline\"><mrow><mi>d</mi><mi>h</mi><mo>=</mo><mi>v</mi><mi>d</mi><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> eta <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math> bektoreen arteko angelua <math display=\"inline\"><mi>θ</mi></math> bada. Paralelepipedoaren bolumena <math display=\"block\"><mrow><mi>d</mi><mi>V</mi><mo>=</mo><mi>v</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>S</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>d</mi><mi>t</mi></mrow></math> da eta fluxu infinitesimala <math display=\"block\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mfrac><mrow><mi>ρ</mi><mi>d</mi><mi>V</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Gainazal bat eta bere elementu infinitesimal bat.",
     "src": "media/irudiak/4d6175fed685e5ab.svg",
     "zabalera": 358
    },
    {
     "mota": "testua",
     "html": "Azken adierazpenean agertzen den <math display=\"inline\"><mrow><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> eremu bektoriala <strong>korronte-dentsitatea</strong>  da: bere norabidea eta noranzkoa fluidoarenak (hau da, abiadura-eremuarenak) dira eta bere modulua denbora-unitatean azalera-unitateko sekzio normala zeharkatzen duen masa. Izan ere, elementu infinitesimala normala bada, <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>∥</mo><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> dugu eta azalera-unitateko fluxua <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Φ</mi><mi>/</mi><mi>d</mi><mi>S</mi><mo>=</mo><mi>ρ</mi><mi>v</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Fluxu osoa, (10.172)-ren ondorioz, hauxe dugu:"
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
     "html": "Denbora-unitatean gainazala zeharkatzen duen materiaren bolumena <strong>emaria</strong> deitzen da eta, ageri denez, honela kalkulatzen da:"
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
     "html": "Uraren kasuan, askotan m<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math> s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> unitatea erabili beharran, l s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>-etan neurtzen da eta, uraren dentsitatea konstantetzat har badezakegu, argi dago fluxua eta emaria proportzionalak direla kasu honetan."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Jarraitutasun-ekuazioa"
    },
    {
     "mota": "testua",
     "html": "Kontsidera ditzagun orain <math display=\"inline\"><mi>S</mi></math> gainazal geldi itxi bat eta inguratzen duen <math display=\"inline\"><mi>V</mi></math> bolumena (ikus 10.24 irudia). Gaussen (B.30) teoremari ezker, <math display=\"inline\"><mi>S</mi></math> gainazal itxian zeharreko emaria (abiadura-eremua erregularra bada eta ez badago zulorik) abiadura-eremuaren dibergentziaz baliatuz kalkula daiteke: <math display=\"block\"><mrow><mi>Q</mi><mo>=</mo><msub><mo>∮</mo><mi>S</mi></msub><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>d</mi><mi>V</mi><mo>,</mo></mrow></math> non <math display=\"inline\"><mi>V</mi></math> bolumena <math display=\"inline\"><mi>S</mi></math> gainazalak inguratutakoa den. Arrazoi beragatik, hauxe dugu kanporanzko fluxua: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><msub><mo>∮</mo><mi>S</mi></msub><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>∇</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>V</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Gainazal itxia eta inguratzen duen bolumena.",
     "src": "media/irudiak/cfdfc7455448a836.svg",
     "zabalera": 190
    },
    {
     "mota": "testua",
     "html": "Bestalde, masaren kontserbazioaren printzipioa dela eta, barruan dagoen masaren aldaketa, sartzen den masaren berdina izango da, hau da, barruko masaren denborarekiko deribatua barruranzko fluxuaren berdina —eta kanporanzko fluxuaren kontrakoa— izango da: <math display=\"block\"><mrow><mover><mi>m</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Φ</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><msub><mo>∫</mo><mi>V</mi></msub><mi>ρ</mi><mi>d</mi><mi>V</mi><mo>=</mo><mi>−</mi><msub><mo>∮</mo><mi>S</mi></msub><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>.</mi></mrow></math> (10.176) emaitzaren ondorioz, masaren kontserbazioa <math display=\"block\"><mrow><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>∂</mi><mi>ρ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi>∇</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math> moduan idazten da edo, hau <math display=\"inline\"><mi>V</mi></math> guztietarako bete behar denez, (10.161), (10.169) eta (B.33)-ren ondorioz, lau era baliokide hauetan:"
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
     "html": "Azken adierazpenen ikusten dugu masaren kontserbazioa hurrengo modu baliokidean ere uler daitekeela: <em>fluidoarekin batera higitzen den <math display=\"inline\"><mrow><mi>d</mi><mi>V</mi></mrow></math> elementu infinitesimal baten <math display=\"inline\"><mrow><mi>ρ</mi><mi>d</mi><mi>V</mi></mrow></math> masa konstantea da jarioan barrena</em>: <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>. Hauxe izango litzateke masaren kontserbazioa «partikulen» ikuspuntutik eta (10.177) adierazpena Eulerren deskribapenean egindakoa."
    },
    {
     "mota": "testua",
     "html": "Jarioa <strong>egonkorra</strong> dela esango dugu eremu fisikoak ez badira denboraren esplizituki menpekoak: <math display=\"inline\"><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>∂</mi><mi>ρ</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, eta abar. Kasu honetan, korronte-lerroak egonkorrak eta elementu infinitesimalen ibilbideen berdinak izango dira eta jarraitutasun-ekuazioa hurrengora laburtzen da: <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fluido konprimaezinak"
    },
    {
     "mota": "testua",
     "html": "Fluidoak aztertzeko euren egoera-ekuazioa ezagutu behar da, <math display=\"inline\"><mi>ρ</mi></math> dentsitatea presioarekin (eta tenperaturarekin, adibidez) nola aldatzen den jakiteko. Zerbait esan genuen horretaz 9.7.1 atalean, soinuaren abiadura gas idealetan aztertzean. Hala ere, uhinak alde batera utzita, kasu interesgarri askotan <math display=\"inline\"><mi>ρ</mi></math> konstantetzat har dezakegu. Horrela gertatzen da gehienetan urarekin, baina baita airearekin ere (Mach zenbakia —airearen eta soinuaren abiaduren zatidura dena— 1 baino askoz txikiagoa denean). Dentsitatea puntu eta une guztietan berdina delako hurbilketa hori egiten denean, fluidoa konprimaezina dela esaten da eta, orduan, jarraitutasun-ekuazioa bolumenaren kontserbazioa adierazten duen (10.162) baldintzara laburtzen da: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>ρ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>∇</mi><mi>ρ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mi>V</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ktea</mtext></mrow><mi>.</mi></mrow></math> Kasu horretan jarioa solenoidala da, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math> moduan idatz daiteke (ikus B.3.7 atala), eta gainazal itxi batean zeharreko emari osoa zero da eta, (10.175)-ren ondorioz: <math display=\"block\"><mrow><msub><mo>∮</mo><mi>S</mi></msub><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> hau da, ez dago ez iturririk ezta hustubiderik ere."
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Hidrostatika",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Fluidoen definizioaren ondorioz, estatikan ez dago ebakidura-esfortzurik eta esfortzu elastikoak normalak izango dira, presioaren ondorio zuzena:"
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
     "oina": "Prisma baten oreka hidrostatikan.",
     "src": "media/irudiak/20b525f1ec81cd78.svg",
     "zabalera": 312
    },
    {
     "mota": "testua",
     "html": "Azter dezagun 10.25 irudiko prismaren oreka: <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mi>d</mi><mi>z</mi><mo>→</mo><mn>0</mn></mrow></math> limitean hiru presioak puntu berean aplikatzen dira, baina norabide desberdinetan. <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> ardatzaren norabidean indar osoa zero izateko hauxe behar dugu: <math display=\"block\"><mrow><msub><mi>p</mi><mi>y</mi></msub><mi>d</mi><mi>x</mi><mi>d</mi><mi>z</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mi>d</mi><mi>x</mi><msqrt><mrow><mi>d</mi><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>d</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>p</mi><mi>d</mi><mi>x</mi><mi>d</mi><mi>z</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mo>=</mo><msub><mi>p</mi><mi>y</mi></msub><mi>.</mi></mrow></math> Era berean, <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><msub><mi>p</mi><mi>y</mi></msub><mo>=</mo><msub><mi>p</mi><mi>z</mi></msub></mrow></math> eta, prismaren orientazioa aldatuz, hidrostatikan presioa, aplikatzen den gainazalarekiko perpendikularra izateaz gain, azken honen orientazioaren independentea dela ikusten dugu<span class=\"j-oin\">[<strong>Pascalen legea</strong> deitzen da batzuetan emaitza hau.]</span>."
    },
    {
     "mota": "testua",
     "html": "(10.132) emaitzan frogatu genuenez, presioari dagokion indar-dentsitatea <math display=\"inline\"><mrow><mi>−</mi><mi>∇</mi><mi>p</mi></mrow></math> da. Horrez gain, fluidoak pairatzen duen kanpo-indar bakarra pisua bada, dagokion indar-dentsitatea <math display=\"inline\"><mrow><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒈</mi></mrow></math> da. Hortaz, oreka-baldintza <math display=\"block\"><mrow><mi>−</mi><mi>∇</mi><mi>p</mi><mo>+</mo><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒈</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>p</mi><mo>−</mo><mi>ρ</mi><mi>∇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> moduan idazten da, zero maila batetik eta gorantz neurtutako altuera <math display=\"inline\"><mi>h</mi></math> bada. Gainera, demagun fluidoa konprimaezina dela (10.14.2 probleman aztertuko dugu zer gertatzen da hipotesi hau egiten ez bada). Beraz, <math display=\"block\"><mrow><mi>−</mi><mi>∇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>+</mo><mi>ρ</mi><mi>g</mi><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> beteko da eta, estatikan magnitude guztiak denboraren independenteak direnez,"
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
     "html": "Hauxe dugu hidrostatikaren oinarrizko legea, orekan dauden fluido konprimaezin guztietan betetzen dena (eta ez bakarrik uraren kasuan)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Manometroa"
    },
    {
     "mota": "testua",
     "html": "Aplikazio moduan ikus ditzagun manometro eta barometroaren oinarriak. 10.26 irudiko ezkerraldean dugu hodi zabaleko manometroaren eskema, ontzian dagoen gasaren presioa neurtzeko erabil daitekeena. Presioa berdintsua izango da puntu guztietan gasaren dentsitatea eta ontziaren dimentsioak ez badira oso handiak. Hodi kurbatuan <math display=\"inline\"><mi>ρ</mi></math> dentsitateko likido astun bat (merkurioa, adibidez) dago. Gasaren presioa manometroaren likidoaren 1 muturrean dagoena da: <math display=\"inline\"><mi>p</mi></math>. Likido hori orekan dagoenez, 2 puntuan (10.190) magnitudearen balioa berdina izango da, baina han presio atmosferikoa dugu: <math display=\"block\"><mrow><mi>p</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mi>ρ</mi><mi>g</mi><mi>h</mi><mi>.</mi></mrow></math> Hortaz, ontzi gasaren <strong>presio manometrikoa</strong>, hau da, presio atmosferikoa zero mailatzat aukeratuz neurtzen dena, <math display=\"inline\"><mi>h</mi></math> altuerarekiko proportzionala da: <math display=\"block\"><mrow><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mi>ρ</mi><mi>g</mi><mi>h</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Manometroa eta barometroa.",
     "src": "media/irudiak/39a5544f3ab00e3d.svg",
     "zabalera": 364
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Barometroa"
    },
    {
     "mota": "testua",
     "html": "Torricellik proposatu zuen lehenengo barometroen eskema, 10.26 irudiko eskuinaldean erakusten dena: merkurioz beteriko probeta bat merkurioan sartzen da. Ontziaren gainazalean presioa atmosferikoa da: <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math>. Bestalde, probetaren barruan, merkurioaren gainean hutsa egin da eta presioa, zero da. Honela idazten da, bada, (10.190) 1 eta 2 puntuetan: <math display=\"block\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mi>ρ</mi><mi>g</mi><mi>h</mi><mi>.</mi></mrow></math> Hauxe da presioaren unitatetzat merkurio-milimetroa aspaldian aukeratzeko arrazoia: manometroaren likidoa, askotan bezala, merkurioa bada, bere altuera <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>1</mn></mrow></math> mm denean presio manometrikoa 1 mm Hg da. Torricelliren omenez, <strong>torr</strong> ere deitzen da unitate hori: 1 torr <math display=\"inline\"><mrow><mo>=</mo><mn>1</mn></mrow></math> mm Hg <math display=\"inline\"><mrow><mo>=</mo><mn>133.322</mn></mrow></math> Pa. Beste batzuetan presio atmosferikoa neurtzeko, halako batez besteko balioa den <strong>atmosfera (estandarra)</strong> erabiltzen da: 1 atm <math display=\"inline\"><mrow><mo>=</mo><mn>760</mn></mrow></math> torr <math display=\"inline\"><mrow><mo>=</mo><mn>101</mn><mspace width=\"0.167em\"></mspace><mn>325</mn></mrow></math> Pa. Bestalde, <strong>bar</strong> izeneko unitatea (edo bere azpimultiplo den milibarra) ere erabiltzen da: 1 bar <math display=\"inline\"><mrow><mo>=</mo><msup><mn>10</mn><mn>5</mn></msup></mrow></math> Pa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Arkimedesen printzipioa"
    },
    {
     "mota": "testua",
     "html": "Kontsidera dezagun 10.27 irudiko gorputza: fluido batean dago orekan (fluidoa baino astunagoa izanik, puntu batetik soka baten bidez eseki delako edo). Presioaren ondorioz, gorputzaren <math display=\"inline\"><mi>S</mi></math> azalean fluidoak eragiten duen indarra hauxe dugu: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>e</mi></msub><mo>=</mo><mi>−</mi><msub><mo>∮</mo><mi>S</mi></msub><mi>p</mi><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Arkimedesen printzipioa.",
     "src": "media/irudiak/720cd8c574e7435a.svg",
     "zabalera": 292
    },
    {
     "mota": "testua",
     "html": "Orain, buruan, gorputza likidoarekin ordezkatzen badugu, argi dago presioa ez dela aldatuko gainazalean eta kanpoan; baina orain (10.132) indar-dentsitatea eta (10.188) erabiliz, <math display=\"inline\"><mi>S</mi></math> gainazalak inguratutako <math display=\"inline\"><mi>V</mi></math> bolumenean kalkula dezakegu (10.194) integrala, fluidoaren dentsitatearen bidez: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>e</mi></msub><mo>=</mo><mi>−</mi><msub><mo>∮</mo><mi>S</mi></msub><mi>p</mi><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>∇</mi><mi>p</mi><mi>d</mi><mi>V</mi><mo>=</mo><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒈</mi><mi>d</mi><mi>V</mi><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>ρ</mi><mi>d</mi><mi>V</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi mathvariant=\"bold-italic\">𝒈</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>Ordezkatzen duen uraren pisuaren kontrako bultzada hidrostatikoa pairatzen du gorputz urperatu batek</em>"
    },
    {
     "mota": "testua",
     "html": ". Enuntziatu klasiko honetan uraren kasua aipatzen bada ere, argi dago fluido guztietara hedatzen dela <em>mutatis mutandi</em>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aplika daiteke Arkimedesen printzipioa fluidoa konprimagarria bada edo gorputz osoa ez badago ur-azalaren azpian?"
      }
     ]
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Fluido idealak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Definizioz, fluido ideal baten elementu batek albokoaren gainean, bien arteko mugan, eragiten duen indarra, aipaturiko mugarekiko perpendikularra izango da, hau da, presioaren ondorio hutsa:"
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
     "html": "Azpimarratu behar da baldintza hau orekan fluido guztietan betetzen den arren, dinamikan bakarrik betetzen dela fluido idealetan (eta inoiz ez benetako fluidoetan). Badakigu presioari dagokion esfortzu-tentsorea (10.106) dela eta, (10.132) emaitzan frogatu genuenez, indar-dentsitatea <math display=\"inline\"><mrow><mi>−</mi><mi>∇</mi><mi>p</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Barne-indar horrez gain, kanpo-indarrak badaude, <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub></math> dentsitatearen bidez adierazten direnak, honela idazten da Newtonen bigarren legea fluidoarekin batera higitzen den <math display=\"inline\"><mrow><mi>d</mi><mi>V</mi></mrow></math> elementu infinitesimalaren kasuan: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>∇</mi><mi>p</mi><mi>d</mi><mi>V</mi><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mi>d</mi><mi>V</mi><mi>.</mi></mrow></math> Hortaz, fluido idealaren higidura-ekuazioa hurrengo modu baliokideetara idazten da:"
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
     "html": "<strong>Eulerren ekuazioa</strong> deritzo honi. Askotan kanpo-indarra pisua izango da eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub></math> indar-dentsitatea (10.126) adierazpenekoa. Ohar zaitez eboluzio-ekuazio hau, ingurune jarraituetan gertatzen den bezala, deribatu partzialetako ekuazioa dela. Zoritxarrez, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> gaia dela eta, ekuazioa ez da lineala: den-dena izan daiteke zailagoa eta, oro har, ez da beteko gainezarmenaren printzipioa (baina bai kasu partikularretan, 10.9.1 atalean ikusiko dugun bezala)."
    },
    {
     "mota": "testua",
     "html": "Bestalde, aitortu behar da fluido idealen hurbilketa ez dela oso ona: fluido guztietan agertzen dira (10.106) esfortzu-tentsoreak ez dituen ebakidura-esfortzuak. Horrexegatik, John von Neumannek esaten zuen hurbilketa honetan «ur lehorra» aztertzen zela<span class=\"j-oin\">[Baina, azken urteetan egindako esperimentuen arabera, badirudi quark eta gluoien plasma fluido (erlatibista) ideal baten antzera higitzen dela.]</span>. Hala ere, ikuspuntu kualitatibotik behintzat, lehen azterketa bat egiteko baliagarria izan daiteke."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bortizitatearen eboluzioa"
    },
    {
     "mota": "testua",
     "html": "Bortizitatearen (10.163) definizioa eta (B.49) erabiliz, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>∇</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math> dugu eta Eulerren ekuazioa honela idazten da: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>∇</mi><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mi>ρ</mi></mfrac><mi>∇</mi><mi>p</mi><mo>+</mo><mfrac><mn>1</mn><mi>ρ</mi></mfrac><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mi>.</mi></mrow></math> Eman dezagun fluidoa konprimaezina dela: (B.22)-ren ondorioz <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>ρ</mi></mfrac><mi>∇</mi><mi>p</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mi>ρ</mi></mfrac><mi>∇</mi><mo>×</mo><mi>∇</mi><mi>p</mi><mo>=</mo><mn>0</mn></mrow></math> dugu. Gainera, <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>ρ</mi></mfrac><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> betetzen dela (adibidez, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mo>=</mo><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒈</mi></mrow></math> delako) onartuko dugu. Hipotesi horiekin eta (B.22) berriro erabiliz, honela geratzen dira (10.201) ekuazioaren errotazionala eta bolumenaren kontserbazioa adierazten duen (10.162): <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold\">𝛀</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Ekuazio hauetan <math display=\"inline\"><mi>ρ</mi></math> dentsitatea, <math display=\"inline\"><mi>p</mi></math> presioa eta kanpo-indarra desagertu dira: bakarrik geratzen da abiadura-eremua. Nahikoa dira bi ekuazio hauek, mugalde-baldintza egokiekin, abiadura-eremua printzipioz kalkulatzeko."
    },
    {
     "mota": "testua",
     "html": "Adibidez, bortizitatea beti eta leku guztietan zero bada, <math display=\"inline\"><mrow><mi mathvariant=\"bold\">𝛀</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, (10.202) ekuazioa betetzen da eta mugalde-baldintzekin batera ebatzi behar diren ekuazioak hurrengoak ditugu: <math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Baina <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>-ren ordez eremu elektrikoa (magnetikoa) idazten badugu, ekuazio hauek elektrostatikarenak (magnetostatikarenak) dira, kargatatik (korrontetatik) at egoera egonkorrean betetzen direnak. Ondorioz, elektrostatikan bezala, <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math> Laplaceren ekuazioa<span class=\"j-oin\">[Izan ere, Eulerrek eta Lagrangek erabili zuten ekuazio hau fluidoen higidura aztertzeko, Laplacek eremu grabitatorioaren kasuan idatzi baino lehenago.]</span> betetzen duen <math display=\"inline\"><mi>φ</mi></math> potentzial batetik lor daiteke abiadura-eremua kasu honetan: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>φ</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Kontsidera dezagun, adibidez, fluidoan zilindro infinitu bat sartzen dugula. Eman dezagun zilindroaren ardatza <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatz kartesiarra dela. Distantzia infinitura abiadura-eremua homogeneoa eta uniformea bada, <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> norabidean, 10.28 irudiko ezkerraldean dagoenaren antzeko bat espero dugu. Baina horrelako soluzioa elektrostatikaren bi soluzio ezagunak (eremu elektriko uniformea eta dipolo batena) batuz lortzen da. Izan ere, 10.65 probleman frogatuko dugunez, <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi>∇</mi><mi>φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>φ</mi><mo>=</mo><mi>−</mi><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ρ</mi><mo>+</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><mi>ρ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eremuak (10.204)–(10.205) ekuazioak eta <math display=\"block\"><mrow><msub><mi>v</mi><mi>ρ</mi></msub><msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo></mrow><mrow><mi>ρ</mi><mo>=</mo><mi>a</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> mugalde-baldintza betetzen ditu <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatzaren inguruko <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> koordenatu zilindrikoetan."
    },
    {
     "mota": "testua",
     "html": "Fluidoa hasieran geldi badago eta zilindroa bere ardatzaren inguruan biratzen, orain arte arbuiatu dugun biskositatearen ondorioz, egoera egonkorrean fluidoa zilindroaren inguruan biratuko da, 10.28 irudiko erdialdean erakusten den moduan. Baina horrelako soluzioa oso ezaguna da magnetostatikan, korronte zuzen infinitu batek sorturikoa baita: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mi>β</mi><mrow><mn>2</mn><mi>π</mi><mi>ρ</mi></mrow></mfrac><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Zilindro luze bat jario konprimaezin irrotazionalean.",
     "src": "media/irudiak/c4b885830992280d.svg",
     "zabalera": 488
    },
    {
     "mota": "testua",
     "html": "Badakigu, Ampèreren legearen ondorioz, eremu magnetikoaren zirkulazioa, integrazio-lerroak inguratzen duen intentsitate osoaren berdina dela; hortaz, nahiz eta (10.204) ekuazioa zilindrotik kanpo bete, zilindroaren inguruko zirkulazioa hauxe da: <math display=\"block\"><mrow><mo>∮</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>−</mi><mi>β</mi><mi>.</mi></mrow></math> (10.204)–(10.205) ekuazioak linealak direnez, soluzioen batura soluzioa da: jario uniforme batean sartutako zilindro birakari baten kasuan soluzioa, 10.28 irudiko eskuineko <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub></mrow></math> izan daiteke. Gainera, 10.65 probleman frogatuko dugu oraingo jario ez-uniformeak zilindroaren luzera-unitatean <math display=\"block\"><mrow><mfrac><mi mathvariant=\"bold-italic\">𝑭</mi><mi>L</mi></mfrac><mo>=</mo><mi>α</mi><mi>β</mi><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> indarra eragiten duela. <strong>Magnus efektua</strong> deritzo honi eta bestelako geometriekin ere gertatzen da, noski."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bernoulliren teorema"
    },
    {
     "mota": "testua",
     "html": "Kontsidera dezagun hurrengo baldintzak betetzen dituen fluido baten higidura:"
    },
    {
     "mota": "sarea",
     "zutabeak": "auto minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Fluidoa ideala da:"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>ρ</mi><mi>d</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>p</mi><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mi>.</mi></mrow></math>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Fluidoa konprimaezina da:"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Grabitatearen eraginpean higitzen da:"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mo>=</mo><mi>−</mi><mi>ρ</mi><mi>∇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Jarioa egonkorra da:"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mi>∂</mi><mi>p</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Energiaren eboluzio-ekuazioa aurkitzeko, Eulerren (10.198) ekuazioa abiadurarekin biderkatzen badugu, <math display=\"block\"><mrow><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>p</mi><mo>−</mo><mi>ρ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lortzen da eta, (10.168) eta (10.170) erabiltzen baditugu, <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mi>ρ</mi><mi>g</mi><mi>h</mi><mo>+</mo><mi>p</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Beraz, <em>korronte-lerro batean barrena</em>  (gogoratu jario egonkorra denez korronte-lerroak partikulen ibilbideak direla)  <em>honako magnitude hau konstantea da</em><span class=\"j-oin\">[Daniel Bernoullik frogatu zuen teorema hau, 1734an osatu zuen <em>Hydrodynamica</em> liburuan.]</span>:"
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
     "html": "Lehen gaia energia zinetikoaren dentsitatea da, bigarrena energia potentzial grabitatorioarena eta presioak eragindako lanari dagokion gaia. Energiaren mekanikoaren kontserbazioa adierazten du Bernoulliren teorema honek eta, higidura-konstante guztiekin gertatzen den bezala, (10.213) magnitudearen balioa konstantea da korronte-lerro bakoitzean barrena, baina alda daiteke lerro batetik bestera."
    },
    {
     "mota": "testua",
     "html": "Hala ere, jarioa irrotazionala bada, <math display=\"inline\"><mrow><mi mathvariant=\"bold\">𝛀</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn></mrow></math> dugu eta, Eulerren (10.201) ekuazioa ondoko moduan geratzen da: <math display=\"block\"><mrow><mi>∇</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mi>ρ</mi><mi>g</mi><mi>h</mi><mo>+</mo><mi>p</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Hortaz, kasu honetan (10.213)-ren balioa berdina da une eta puntu guztietan. Bernoulliren teoreman azken gaia presioa denez, batzuetan <math display=\"inline\"><mrow><mi>p</mi><mo>+</mo><mi>ρ</mi><mi>g</mi><mi>h</mi></mrow></math> magnitudea <strong>presio estatikoa</strong> dela esaten da (horixe baita hidrostatikako (10.190) magnitudea) eta <math display=\"inline\"><mrow><mi>p</mi><mo>+</mo><mi>ρ</mi><mi>g</mi><mi>h</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math> higidura-konstantea <strong>presio dinamikoa</strong>."
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 11pt)[Torricelliren teorema]"
    },
    {
     "mota": "testua",
     "html": "Aplikazio moduan, azter dezagun 10.29 irudiko hustea zulo estu baten bidez. Zuloa oso txikia bada (<math display=\"inline\"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo>≪</mo><msub><mi>S</mi><mn>1</mn></msub></mrow></math>), gainazalaren abiadura oso txikia izango da (<math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>≪</mo><mi>v</mi><mo>≡</mo><msub><mi>v</mi><mn>2</mn></msub></mrow></math>) eta 1 eta 2 puntuetan presioa atmosferikoaren berdina denez, honela idazten da presio dinamikoa bi puntu horietan, altuera 2 puntutik neurtuz: <math display=\"block\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mi>ρ</mi><mi>g</mi><mi>h</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msup><mi>v</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Ondorioz, fluidoaren abiadura zuloan gainazaletik hara jausi den partikula batena<span class=\"j-oin\">[Praktikan, likidoak idealak ez direnez, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>φ</mi><msqrt><mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow></msqrt></mrow></math> moduan idazten da emaitza. Uraren kasuan, marruskadura-koefizientea <math display=\"inline\"><mrow><mi>φ</mi><mo>≈</mo><mn>0.97</mn></mrow></math> da.]</span>  da:"
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
     "html": "Emaitza ez da hain harrigarria; azken batez, kasu bietan energia zinetikoa energia potentzial grabitatoriotik atera da. Badago beste soluzio bat bi problema hauetan, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>−</mi><msqrt><mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow></msqrt></mrow></math>  alegia: partikula gorantz jaurtitzean altuera berdinera edo ura presio atmosferikoan zulotik <math display=\"inline\"><mi>v</mi></math> abiaduraz sartzen bada lortzen da hau."
    },
    {
     "mota": "irudia",
     "oina": "Ontzi baten hustea.",
     "src": "media/irudiak/6617c13bc224b297.svg",
     "zabalera": 411
    },
    {
     "mota": "testua",
     "html": "Ez da pentsatu behar zuloan neurtzen den emaria <math display=\"inline\"><mrow><mi>v</mi><msub><mi>S</mi><mn>2</mn></msub></mrow></math> denik. Izan ere, zuloaren inguruan korronte-lerroak hurbiltzaileak dira eta zorrotada uzkurtu egiten da: zeharkako sekzio eragilea txikiagoa da (eta gainera, energia apur bat galtzen da beti). Emaria, beraz, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>C</mi><mi>v</mi><msub><mi>S</mi><mn>2</mn></msub></mrow></math> izango da, non <math display=\"inline\"><mi>C</mi></math> konstantea zuloaren <strong>emari-koefizientea</strong> den. Adibidez, irudiko motako zulo zirkular mehe baten kasuan <math display=\"inline\"><mrow><mi>C</mi><mo>≈</mo><mn>0.62</mn></mrow></math> dugu eta ertza, zorrotza izan beharrean, biribildua bada <math display=\"inline\"><mrow><mi>C</mi><mo>≈</mo><mn>0.97</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 11pt)[Venturi efektua]"
    },
    {
     "mota": "testua",
     "html": "Kontsidera dezagun orain zeharkako sekzio aldakorreko hodi horizontal bat. <math display=\"inline\"><mi>h</mi></math> altuera puntu guztietan berdina dela onartzen badugu (eta horrelakoa da zehazki erdiko korronte-lerroan eta era hurbilduan besteetan), honela idazten da Bernoulliren teorema 1 eta 2 puntuetan: <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>p</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> Fluidoa konprimaezina denez, emaria berdina izango da 1 eta 2 puntuetan eta horrela idazten da (10.185): <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><msub><mi>v</mi><mn>2</mn></msub><msub><mi>S</mi><mn>2</mn></msub></mrow></math>. Baina, <math display=\"inline\"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>S</mi><mn>1</mn></msub></mrow></math> denez, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>&gt;</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></math> dugu, eta (10.217)-ren ondorioz, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>p</mi><mn>1</mn></msub></mrow></math>: <em>presioa txikiagoa (eta abiadura handiagoa) da hodia estuagoa den puntuetan</em>."
    },
    {
     "mota": "irudia",
     "oina": "Hodi horizontala.",
     "src": "media/irudiak/ebd14e6705f6b1cb.svg",
     "zabalera": 258
    },
    {
     "mota": "testua",
     "html": "Efektu honek azaltzen du zergatik apurtzen diren, askotan, ur-hodi lodiak. Motorren karburagailuetan gasolina sartzeko erabiltzen da efektu hau, baita tximinietatik kea irteten laguntzeko eta lainoztagailuetan perfume-tanta txiki-txikiak airearekin nahasteko ere. Gainera, problemetan ikusiko dugunez, fenomeno honetaz balia gaitezke venturimetroetan emaria neurtzeko, eta 10.58 probleman hegazkinen hegoen euste aerodinamikoa balioztatzeko erabiliko dugu. Baina azken problema eta praktikan askotan agertzen diren beste asko ez dira hain erraz azaltzen era zuzenean. Hala ere, gauzak nolabait ulertzeko, Venturi efektuaren beste azalpen kualitatibo bat erabilgarria izan daiteke. <math display=\"inline\"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>&gt;</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></math> dugunez, 1 eta 2 puntuen artean eskuineranzko azelerazio bat pairatu behar du (adibidez) erdiko korronte-lerroan barrena higitzen den partikulak eta azelerazio hori presio-gradiente batek sor dezake bakarrik: presioa handiagoa da 1 puntuan. Oro har, abiadura-eremuaren moduluaren edota norabidearen aldaketak (hala nola korronte-lerroen kurbadura) sortzen dituzten presio-gradienteak fenomeno batzuk ulertzeko erabil daitezke, nahiz eta Bernoulliren edo Venturiren emaitzak aplikatzen ez diren."
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Fluido biskatsuak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Orekan horrelakorik ez badago ere, dinamikan ebakidura-esfortzuak agertzen dira beti benetako fluidoetan. Kontsidera dezagun 10.31 irudiko esperimentua. Bi plano infinituren artean fluido bat dugu. Beheko planoa geldi dago eta goikoa abiadura konstantez higitzen da, erakusten den norabidean. Plano horren eta ondoan dagoen fluido-geruzen arteko indarrak bi osagai ditu: normala, presioaren ondorioa dena, eta tangentea. Azken honen ondorioz, planoak fluidoa eramaten du: planoa ukitzen duen geruza mehe bat pausagune erlatiboan dago eta planoarekin batera higitzen da; hori da esperimentuetan ikusten dena. Arrazoi beragatik, beheko geruza geldi dago eta tartekoak bitarteko abiaduraz higitzen dira, bakoitzak ondokoaren gainean marruskadura-indar bat (hau da, indar tangente bat) eragiten baitu. <strong>Biskositatea</strong> deitzen da fenomeno hau, fluido guztietan gertatzen dena."
    },
    {
     "mota": "irudia",
     "oina": "Fluido bat abiadura erlatiboa duten bi plano infinituren artean.",
     "src": "media/irudiak/7cf96f9413dba2d2.svg",
     "zabalera": 247
    },
    {
     "mota": "testua",
     "html": "Gainera, <strong>Newtonen biskositate-legearen</strong> arabera, planoen arteko abiadura erlatiboa mantentzeko aplikatu behar den esfortzua abiaduren diferentziarekiko proportzionala da eta planoen arteko distantziarekiko alderantzizko proportzionala: <math display=\"block\"><mrow><mfrac><mi>F</mi><mi>A</mi></mfrac><mo>=</mo><mi>η</mi><mfrac><mi>v</mi><mi>d</mi></mfrac><mi>.</mi></mrow></math> Proportzionaltasun-konstantea <strong>biskositate dinamikoaren koefizientea</strong>  (edo <strong>biskositate-koefizientea</strong>) deitzen da eta SI sisteman dagokion unitatea 1 Pa s da. A.10 taulan bildu dira zenbait fluidoren biskositate-koefizienteak."
    },
    {
     "mota": "testua",
     "html": "Higidurarekiko perpendikularra den norabidean <math display=\"inline\"><mi>x</mi></math> koordenatua aukeratzen badugu, honela adierazten da irudiko bi plano paralelo hurbilen abiaduren diferentziak sortutako biskositatearen ebakidura-esfortzua: <math display=\"block\"><mrow><mfrac><mi>F</mi><mi>A</mi></mfrac><mo>=</mo><mi>η</mi><mfrac><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math> Beraz, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>→</mo><mn>0</mn></mrow></math> limitean, hauxe dugu <math display=\"inline\"><mi>x</mi></math> distantziara higiduraren norabidean dagoen elementu batek albokoaren gainean eragiten duen ebakidura-esfortzua biskositatearen ondorioz:"
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
     "testua": "Poiseuilleren legea"
    },
    {
     "mota": "testua",
     "html": "Hodi baten zeharkako sekzioan emaria kalkulatzeko, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>v</mi><mi>S</mi></mrow></math> formula erabili dugu lehenago, abiadura sekzioaren puntu guztietan berdina balitz bezala. Baina badakigu hori ezinezkoa dela, horman fluidoaren abiadura nulua baita."
    },
    {
     "mota": "testua",
     "html": "Kontsidera dezagun 10.32 irudiko hodi horizontal luzea. Jarioa egonkorra bada, abiadura-banaketa denboraren independentea izango da eta <math display=\"inline\"><mi>r</mi></math> erradioko zilindroan aplikaturiko indar osoa nulua izango da. Alboko fluidoak eragindako biskositate-indarra kalkulatzeko, <math display=\"inline\"><mi>x</mi></math> koordenatuaren ordez, <math display=\"inline\"><mi>r</mi></math> erabili beharko da (10.220) legean. Ondorioz, hauxe dugu indarren oreka (<math display=\"inline\"><mrow><mi>d</mi><mi>v</mi><mi>/</mi><mi>d</mi><mi>r</mi><mo>&lt;</mo><mn>0</mn></mrow></math> dela kontuan hartuz): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>−</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>η</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>r</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>r</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Fluidoaren abiadura hodi horizontal batean.",
     "src": "media/irudiak/d62579dd455a7480.svg",
     "zabalera": 477
    },
    {
     "mota": "testua",
     "html": "Hemendik erraz lortzen da abiadura-banaketa integral baten bidez: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>r</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>−</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>2</mn><mi>η</mi><mi>L</mi></mrow></mfrac><mi>r</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>−</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>η</mi><mi>L</mi></mrow></mfrac><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math> Integrazio-konstantea kalkulatzeko, horman fluidoa geldi dagoela adierazten duen <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> mugalde-baldintza erabiltzen bada, hauxe da abiadura zentrotik <math display=\"inline\"><mi>r</mi></math>  distantziara: <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>−</mo><msub><mi>p</mi><mn>2</mn></msub></mrow><mrow><mn>4</mn><mi>η</mi><mi>L</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Bestalde, <math display=\"inline\"><mi>r</mi></math> eta <math display=\"inline\"><mrow><mi>r</mi><mo>+</mo><mi>d</mi><mi>r</mi></mrow></math> erradioen arteko eraztun infinitesimalean zehar denbora-unitatean igarotzen den fluidoaren bolumena kontuan hartuz, erraz kalkulatzen da emaria: <math display=\"block\"><mrow><mi>Q</mi><mo>=</mo><msub><mo>∫</mo><msub><mi>S</mi><mo>⟂</mo></msub></msub><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mfrac><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>−</mo><msub><mi>p</mi><mn>2</mn></msub></mrow><mrow><mn>4</mn><mi>η</mi><mi>L</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>R</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn><mi>π</mi><mi>r</mi><mi>d</mi><mi>r</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>Q</mi><mo>=</mo><mfrac><mrow><mi>π</mi><msup><mi>R</mi><mn>4</mn></msup></mrow><mrow><mn>8</mn><mi>η</mi></mrow></mfrac><mfrac><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>−</mo><msub><mi>p</mi><mn>2</mn></msub></mrow><mi>L</mi></mfrac><mi>.</mi></mrow></math> Azken adierazpenean, presioa luzera-unitatean nola txikitzen den neurtzen du azken gaiak:"
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
     "html": "Biskositateak eragindako galerak direla eta, presioa txikituz doa hodian barrena. Azpimarratzekoa da erradioaren laugarren berreturaren menpekotasuna: presio galera askoz ere txikiagoa izango da hodi zabaletan estuetan baino. Fenomeno asko argitzen ditu menpekotasun horrek, legea guztiz zuena ez denean ere. Arteriosklerosiaren ondorioz arteria koronarioaren diametroa laburtzean asko txikitzen da odolaren fluxua eta antzeko problema bat gertatzen da uretran prostata handitzean. Gorputzaren tenperatura kontrolatzeko ere erabiltzen da, basokonstrikzioaren eta basodilatazioaren bidez."
    },
    {
     "mota": "testua",
     "html": "(10.227) erabiliz honela geratzen da (10.224)  abiadura-eremua:"
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
     "html": "Ikusten dugu, bada, abiadura-banaketa parabolikoa dela, 10.32 (a) irudian erakusten den bezala (10.11 atalean aipatzen den turbulentzia badago, (b) irudiak hobeto deskribatzen du kualitatiboki gertatzen dena)."
    },
    {
     "mota": "irudia",
     "oina": "Fluido (a) ideal (b) biskatsu baten hustea hodi horizontal batean barrena.",
     "src": "media/irudiak/6f233be490a32297.svg",
     "zabalera": 360
    },
    {
     "mota": "testua",
     "html": "10.33 irudian erakusten dira presioaren txikitze horren ondorioak hodi horizontal mehe batean. Ezkerrean agertzen den fluido idealaren kasuan, presioa txikitzen da azelerazioaren ondorioz, Venturi efektuaren arabera; baina eskuinean dagoen fluido biskatsuaren kasuan, badago gainera (10.227) galera, hodi meheagoetan arinagoa dena. Fluido idealaren kasuan, azken manometroan ia ez dago presio manometrikorik, bertan presioa atmosferikoaren berdintsua baita. Fluido biskatsuaren kasuan hango presioa handiagoa izango da, hodiaren ahoraino bide bat egin behar baitu oraindik."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Navier eta Stokesen ekuazioa"
    },
    {
     "mota": "testua",
     "html": "Oro har, fluido biskatsu baten esfortzu-tentsoreak, presioari dagokion (10.106) ekarpenaz gain, solido elastiko homogeneo isotropo baten kasurako ikusi genuen (10.110) tentsorearen egitura bereko beste osagai bat du: <math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mi>−</mi><mi>p</mi><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>+</mo><msubsup><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>′</mo></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>′</mo></msubsup><mo>=</mo><mi>η</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>v</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>v</mi><mi>j</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ζ</mi><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>η</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>v</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>k</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>.</mi></mrow></math> Bigarren konstante bat behar da fluido batzuen kasuan: <strong>bigarren biskositate-koefizientea</strong>  (edo <strong>bolumen-biskositatearen koefizientea</strong>) deituriko <math display=\"inline\"><mi>ζ</mi></math> delakoa. Koefiziente hau ez da agertzen fluido konprimaezinetan, <math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> zabaltze-abiadura biderkatzen baitu. Fluido orokorrean, beraz, presioari dagokion <math display=\"inline\"><mrow><mi>−</mi><mi>∇</mi><mi>p</mi></mrow></math> indar-dentsitateaz gain, biskositate-indarraren dentsitatea agertuko da: <math display=\"block\"><mrow><msub><mi>f</mi><mrow><mi>B</mi><mi>i</mi></mrow></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msubsup><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>′</mo></msubsup></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mi>η</mi><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>v</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msubsup><mi>x</mi><mi>j</mi><mn>2</mn></msubsup></mrow></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>η</mi><mo>+</mo><mi>ζ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><mi>∂</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>B</mi></msub><mo>=</mo><mi>η</mi><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>η</mi><mo>+</mo><mi>ζ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>∇</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Azken indar-dentsitatea Eulerren (10.199) ekuazioaren bigarren gaiari gehitzen badiogu, fluido biskatsuen higidura-ekuazioa, Navier eta Stokesen ekuazioa deitzen dena, lortzen dugu:"
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
     "html": "text(weight: &quot;bold&quot;, size: 10.5pt)[Biskositate zinematikoaren koefizientea]"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ν</mi><mo>≡</mo><mfrac><mi>η</mi><mi>ρ</mi></mfrac></mrow></math> moduan definitzen badugu, hurrengo formara laburtzen da Navier eta Stokesen ekuazioa fluido konprimaezinen kasuan:"
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
     "html": "Navier eta Stokesen ekuazioa, ez da lineala —<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> gaia koadratikoa da— eta kasu gutxitan aska daiteke esplizituki. 10.14.4 probleman aztertuko dugu bat."
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Reynolds zenbakia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Eman dezagun fluidoa konprimaezina dela (<math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn></mrow></math>) eta kanpo-indarraren dentsitatea kontserbatzailea (<math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝒇</mi><mi>V</mi></msub><mo>=</mo><mn>0</mn></mrow></math>). Horrela, (10.200) emaitzaren ondorioz, <math display=\"inline\"><mrow><mi mathvariant=\"bold\">𝛀</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> bortizitatearen eboluzio-ekuazioa da Navier eta Stokesen (10.235) ekuazioaren errotazionala: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold\">𝛀</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>η</mi><mi>ρ</mi></mfrac><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold\">𝛀</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> (10.236) ekuazioan (10.202)-an ez zegoen biskositatearen menpeko gai berri bat agertzen da. Ondorioz, bortizitatearen ekuazioak aldatu egiten dira. Adibidez, (10.236) delakoan <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> gaia ez balego, difusio-ekuazioa (eroale batean beroaren hedapena deskribatzen duena) izango litzateke: bortizitatea nonbait sortzen bada, beste puntuetara heda daitekeela espero dugu, beraz."
    },
    {
     "mota": "testua",
     "html": "Eman dezagun, 10.28 irudiko ezkerraldean bezala, zilindro infinitu bat sartzen dugula distantzia handira <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>0</mn></msub><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math> abiadura konstantez higitzen den fluido batean. Abiadura-eremua aurkitzeko, (10.236)–(10.237) ekuazioak hurrengo mugalde-baldintzekin batera ebatzi behar dira: <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>ρ</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo></mrow><mrow><mi>ρ</mi><mo>=</mo><mi>a</mi></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Problema aztertzeko, luzera-unitatetzat <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> diametroa eta denbora-unitatetzat <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi><mi>/</mi><msub><mi>v</mi><mn>0</mn></msub></mrow></math> aukeratuko ditugu, hau da, dimentsio gabeko aldagai hauek erabiliko dira: <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>=</mo><mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mfrac><msub><mi>v</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mi>t</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu hasierako aldagaien eta dimentsio gabekoen arteko erlazioaren ondorioz hauxe dugula: <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒗</mi><mo>′</mo></msup><mo>=</mo><mfrac><mi mathvariant=\"bold-italic\">𝒗</mi><msub><mi>v</mi><mn>0</mn></msub></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>∇</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>a</mi><mi>∇</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mi>∂</mi><mrow><mi>∂</mi><msup><mi>t</mi><mo>′</mo></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>a</mi></mrow><msub><mi>v</mi><mn>0</mn></msub></mfrac><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>a</mi></mrow><msub><mi>v</mi><mn>0</mn></msub></mfrac><mi mathvariant=\"bold\">𝛀</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mo>′</mo></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>a</mi><mn>2</mn></msup></mrow><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold\">𝛀</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>∇</mi><mo>′</mo></msup><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒗</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>a</mi><mn>2</mn></msup></mrow><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>∇</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>8</mn><msup><mi>a</mi><mn>3</mn></msup></mrow><msub><mi>v</mi><mn>0</mn></msub></mfrac><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold\">𝛀</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mn>4</mn><msup><mi>a</mi><mn>2</mn></msup></mrow><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold\">𝛀</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mi>η</mi><mi>ρ</mi></mfrac><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold\">𝛀</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mi>∂</mi><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mo>′</mo></msup></mrow></mfrac><mo>+</mo><msup><mi>∇</mi><mo>′</mo></msup><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒗</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mi mathvariant=\"script\">ℛ</mi></mfrac><msup><mi>∇</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"script\">ℛ</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>ρ</mi><mi>a</mi><msub><mi>v</mi><mn>0</mn></msub></mrow><mi>η</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Azken ekuazioan definitu dugun dimentsio gabeko"
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
     "html": "magnitudea, problemaren <strong>Reynolds zenbakia</strong> da eta ebatzi behar den problema, primak kenduta, honela idazten dela frogatu dugu: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold\">𝛀</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mi mathvariant=\"script\">ℛ</mi></mfrac><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold\">𝛀</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>ρ</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo></mrow><mrow><mi>ρ</mi><mo>=</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Baina hemen geratu den parametro bakarra <math display=\"inline\"><mi mathvariant=\"script\">ℛ</mi></math> da. Honek esan nahi du bi problematan, <math display=\"inline\"><mi>a</mi></math>, <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>, <math display=\"inline\"><mi>ρ</mi></math> edo <math display=\"inline\"><mi>η</mi></math> desberdinak izan arren, Reynolds zenbakia berdina bada, biak izango direla <strong>antzekoak</strong>, hau da, baliokideak ikuspuntu matematikotik: nahikoa izango da bat aztertzea bestea ulertzeko. <strong>Antzekotasunaren lege</strong> hau garrantzi praktiko handikoa da. Esaterako, hegazkinak diseinatzeko, nahikoa da eskala txikiko eredu bat haize-tunel batean aztertzea. (Egia esan, airea konprimaezina delako hipotesia mantentzeko, Mach zenbakia txikia ez bada, bi problematan berdina izan behar du hauek antzekoak izateko.)"
    },
    {
     "mota": "testua",
     "html": "Ebatzi behar den problema matematikoa oso zaila da eta hurbilketak edo zenbakizko metodoak erabili ebatzi behar dira. Reynolds zenbakia oso txikia denean (<math display=\"inline\"><mrow><mi mathvariant=\"script\">ℛ</mi><mo>≲</mo><mn>1</mn></mrow></math>), soluzioa 10.28 irudiko ezkerraldean ikusi genuenaren antzekoa da. <math display=\"inline\"><mi mathvariant=\"script\">ℛ</mi></math> handitzean, zilindroaren atzean zurrunbiloak sortzen dira: zirkulazioa ez da, beraz, zero; baina higidura oso erregularra eta egonkorra da. <math display=\"inline\"><mi mathvariant=\"script\">ℛ</mi></math> handiagoekin zurrunbiloak askatzen dira eta euren ordez beste batzuk sortzen dira etengabe; higidura erregularra da baina ez egonkorra, periodikoa baizik. Azkenean, higidura irregularra, kaotikoa, hasten da: <strong>turbulentzia</strong> sortzen da. biderkatzen duen bigarren ordenako deribatuak oso handiak izan baitaitezke: fluido idealen hurbilketak fluidoen funtsezko ezaugarri bat ahazten du (hala ere, erabilgarria da jarioa laminarra denean bortizitaterik ez badago)."
    },
    {
     "mota": "testua",
     "html": "Esperimentu askotan ikusi da hodi zuzen horizontal batean higitzen den fluidoaren kasuan, Reynolds zenbakia<span class=\"j-oin\">[Kasu horretan (10.251) definizioan hodiaren diametroa erabili behar da <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math>-ren ordez eta <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>-ren ordez fluidoaren abiaduraren batez besteko balioa.]</span> 2000 baino txikiagoa denean jarioa erregularra, <strong>laminarra</strong> izan ohi dela, baina 4000 baino handiagoa denerako ia beti turbulentzia agertu dela."
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Stokesen eta Newtonen legeak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Biskositatearen ondorioz, fluidoetan <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> abiaduraz higitzen diren gorputzek arraste-indar bat pairatzen dute, (10.195) bultzada hidrostatikoaz gain. Arraste-indarra adierazteko, dimentsio gabeko <math display=\"inline\"><msub><mi>C</mi><mi>D</mi></msub></math>  <strong>arraste-koefizientea</strong> erabili ohi da:"
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
     "html": "non <math display=\"inline\"><msub><mi>S</mi><mo>⟂</mo></msub></math> delakoa <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>-rekiko perpendikularra den planoan gorputzak duen proiekzioaren azalera den."
    },
    {
     "mota": "testua",
     "html": "Eman dezagun <math display=\"inline\"><mi>a</mi></math> erradioko esfera zurrun bat (<math display=\"inline\"><mrow><msub><mi>S</mi><mo>⟂</mo></msub><mo>=</mo><mi>π</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>) fluido batean barrena <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> abiaduraz higitzen dela. Jarioa konprimaezina bada eta problema honen Reynolds zenbakia oso txikia bada, <math display=\"block\"><mrow><mi mathvariant=\"script\">ℛ</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>ρ</mi><mi>a</mi><mi>v</mi></mrow><mi>η</mi></mfrac><mo>≲</mo><mn>0.2</mn><mo>,</mo></mrow></math> arraste-koefizientea <math display=\"block\"><mrow><msub><mi>C</mi><mi>D</mi></msub><mo>=</mo><mfrac><mn>24</mn><mi mathvariant=\"script\">ℛ</mi></mfrac></mrow></math> da eta arraste-indarra Stokesen legeak emandakoa:"
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
     "html": "(Aintzira batean astiro hondoratzen den harri-kokor bati aplika dakioke hau, baita uretan dagoen mikroorganismo bati edo aireko hautsari.)"
    },
    {
     "mota": "irudia",
     "oina": "Arraste-koefizientea Reynolds zenbakiaren funtzioan.",
     "src": "media/irudiak/aaba0dbe9682c078.svg",
     "zabalera": 269
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi mathvariant=\"script\">ℛ</mi></math> handitzean <math display=\"inline\"><mrow><msub><mi>C</mi><mi>D</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aldatzen da, baina <math display=\"inline\"><mrow><mn>1000</mn><mo>≲</mo><mi mathvariant=\"script\">ℛ</mi><mo>≲</mo><msup><mn>10</mn><mn>5</mn></msup></mrow></math> tartean ia konstantea da, <math display=\"block\"><mrow><msub><mi>C</mi><mi>D</mi></msub><mo>≈</mo><mn>0.44</mn><mo>,</mo></mrow></math> eta (10.256) arraste-indarrak Newtonen legea betetzen du: abiaduraren karratuarekiko proportzionala da. (Hauxe da Pisako dorretik askatutako harriak edo paraxutista batek pairatzen duen airearen arrastea.)"
    },
    {
     "mota": "testua",
     "html": "Stokesen legearen aldaera bat erabili zen XX. mendeko esperimentu famatu eta garrantzitsu batean. 1897an J. J. Thomsonek elektroia aurkitu zuen. 1909–1913 tartean Millikanek<span class=\"j-oin\">[Esperimentu hauengatik eta efektu fotoelektrikoari buruz egindakoengatik eskuratu zuen Robert Andrews Millikanek 1923ko Nobel saria.]</span> egindako esperimentuetan elektroiaren <math display=\"inline\"><mrow><mi>−</mi><mi>e</mi></mrow></math> karga neurtu zen doitasun handiz eta kargaren kuantizazioa, hau da, karga guztiak oinarrizko kargaren multiploak direla, frogatu zen."
    },
    {
     "mota": "irudia",
     "oina": "Millikanen esperimentuaren eskema.",
     "src": "media/irudiak/b41385e6d3d7412d.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "Esperimentuaren eskema 10.35 irudian erakusten da. Lainoztagailu baten bidez olio-tanta txikiak barreiatzen dira goiko xaflaren gainean eta honek duen zulo txikian zehar igarotzen diren tantak izpi horizontal batez argitzen dira, teleskopioaren bidez ikusi ahal izateko. Tantak X izpiez edo bestelako erradiazio ionizatzaileaz kargatzen dira. Xafla metalikoen arteko <math display=\"inline\"><mi>V</mi></math> potentzial-diferentzia aldatuz, tanta bat airean geldi geratzea lor daiteke. Hori gertatzen denean, tantan aplikatutako pisuaren, indar elektrostatikoaren eta bultzada hidrostatikoaren batura nulua da: <math display=\"block\"><mrow><mi>−</mi><mi>q</mi><mi>E</mi><mo>−</mo><mi>m</mi><mi>g</mi><mo>+</mo><mfrac><msub><mi>ρ</mi><mtext mathvariant=\"normal\">airea</mtext></msub><msub><mi>ρ</mi><mtext mathvariant=\"normal\">olioa</mtext></msub></mfrac><mi>m</mi><mi>g</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>q</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ρ</mi><mrow><mtext mathvariant=\"normal\">olioa </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><msub><mi>ρ</mi><mtext mathvariant=\"normal\">airea</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>a</mi><mn>3</mn></msup><mi>g</mi><mi>L</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>3</mn><mi>V</mi></mrow></mfrac><mo>,</mo></mrow></math> non, xaflen arteko <math display=\"inline\"><mi>L</mi></math> distantzia bada, eremu elektrostatikoa <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>V</mi><mi>/</mi><mi>L</mi></mrow></math> dela erabili dugun. Lorturiko (10.261) adierazpenean tantaren <math display=\"inline\"><mi>a</mi></math> erradioa oso txikia zen (<math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup></math> cm ingurukoa) eta, zuzenean neurtu beharrean, Stokesen legea erabiltzen zen eremu elektrostatikoa kentzean tanten abiadura neurtzeko: 10.91 probleman frogatuko dugunez, neur daitekeen balio batera jotzen du tantaren abiadurak eta horren bidez <math display=\"inline\"><mi>a</mi></math> erradioa kalkula daiteke. (Egia esan, tanta hain txikiak izanik, airea ezin da ingurune jarraitutzat kontsideratu eta Stokesen legearen aldaera bat erabili behar da.) Tanten kargak beti ziren balio baten multiploak: horrela frogatu zen naturan kargak beti direla <math display=\"inline\"><mi>e</mi></math> balio baten multiplo osoak (aske agertzen ez diren quarken kasuan, kargak <math display=\"inline\"><mrow><mi>e</mi><mi>/</mi><mn>3</mn></mrow></math>-ren multiplo osoak dira)."
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Gainazal-tentsioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Zergatik dira esferikoak xaboi-burbuilak eta ur-tantak? Nola dabiltza ur gainetik zapatariak?<span class=\"j-oin\">[Horrela deitzen dira <em>gerris sp.</em> intsektuak.]</span> Fenomeno hauen eta beste askoren zergatia gainazal-tentsioa da. Fluidoen arteko gainazalean dauden molekulek oso ingurune anisotropoa ikusten dute; adibidez, alde batetik, uraren molekulak dituzte eta bestetik airearenak (lurrunarenekin batera). Ondorioz, inguruneen arteko molekula batzuetako lodierako geruzen zatien artean gainazalarekiko tangenteak diren indarrak agertzen dira: gainazal-indarrak."
    },
    {
     "mota": "irudia",
     "oina": "Xaboi-uraren mintza.",
     "src": "media/irudiak/6e09919738c83351.svg",
     "zabalera": 162
    },
    {
     "mota": "testua",
     "html": "Gainazal-indarra neurtzeko 10.36 irudiko esperimentua egin daiteke. Burdin hari batekin u bat egiten da eta hari zuzen arin higikor batekin laukizuzen bat osatzen da. Xaboi-uretan sartu ondoren kontuz ateratzen bada, mintz mehe batek betetzen du laukizuzena eta beheko haria goikora erakartzen du, indar egoki bat aplikatzen ez bazaio. Beheko hariaren pisuaren eta orekan mantentzeko aplikatutako indarra neurtzen da. Harrigarria bada ere, <math display=\"inline\"><mi>F</mi></math> indarra ez da azaleraren menpekoa: ez da aldatzen <math display=\"inline\"><mi>z</mi></math>-rekin. Honen azalpena mintzaren egitura mikroskopikoan datza. Nahiz eta oso mehea izan, lodiera oso handia da molekulen dimentsioen alde: molekula batzuetako lodiera duten bi gainazal-geruzek mugatutako bolumena da. Azalera handitzean, barruan zeuden molekula batzuk gainazalera mugitzen dira, gainazal-geruzen azalera handiagotzeko. Portaera hori gomazko mintz batenaren guztiz desberdina da eta indarra ez da deformazioaren menpekoa."
    },
    {
     "mota": "testua",
     "html": "Esperimentuetan ikusten dena hauxe da: <em>gainazal-tentsioa, aplikatzen den lerroaren luzerarekiko proportzionala da</em>. 10.36 irudiko esperimentuan mintzak bi alde dituenez, luzera osoa <math display=\"inline\"><mrow><mn>2</mn><mi>l</mi></mrow></math> da eta neurtzen den indarra <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mn>2</mn><mi>γ</mi><mi>l</mi><mo>,</mo></mrow></math> non, definizioz, luzera-unitateko gainazal-indarra <math display=\"inline\"><mi>γ</mi></math> gainazal-tentsioa den:"
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
     "html": "A.10 taulan bildu dira zenbait fluidoren gainazal-tentsioak. Magnitude honen unitatea SI sisteman <math display=\"inline\"><mn>1</mn></math>  N/m  <math display=\"inline\"><mrow><mo>=</mo><mn>1</mn></mrow></math>  W/m<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math> da. Unitateen arteko erlazio erraz hau beste modu batean ulertzeko, kalkula dezagun <math display=\"inline\"><mi>z</mi></math> aldatzean (hau da, mintzaren azaleran aldatzean) gainazal-tentsioaren kontra egindako lana: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>W</mi><mo>=</mo><mi>F</mi><mi mathvariant=\"normal\">Δ</mi><mi>z</mi><mo>=</mo><mn>2</mn><mi>γ</mi><mi>l</mi><mi mathvariant=\"normal\">Δ</mi><mi>z</mi><mi>.</mi></mrow></math> Azalera osoaren aldaketa <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><mn>2</mn><mi>l</mi><mi mathvariant=\"normal\">Δ</mi><mi>z</mi></mrow></math> denez, azaleraren aldaketaren unitateko lana gainazal-tentsioaren berdina da: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>W</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi></mrow></mfrac><mo>=</mo><mi>γ</mi><mi>.</mi></mrow></math> Baina, egin berri dugun kalkulua zuzena izateko, kontuan hartu behar dugu gainazal-tentsioak tenperaturaren menpekotasun handia duela eta hau handitzean gainazal-tentsioa txikitzen dela: <math display=\"inline\"><mrow><mi>d</mi><mi>γ</mi><mi>/</mi><mi>d</mi><mi>T</mi><mo>&lt;</mo><mn>0</mn></mrow></math>. Beraz, beroa eman behar zaio mintzari bere tenperatura konstantea izateko prozesuan. Ondorioz, ezin dugu esan, indar eta energia elastikoen kasuan 10.6 probleman egingo dugunaren antzera, gainazal-tentsioak egindako lana mintzaren energiaren aldaketaren berdina denik."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Mintz esferiko baten bi aldeetako presioen diferentzia"
    },
    {
     "mota": "testua",
     "html": "Kontsidera dezagun xaboi-urez egindako burbuila bat eta azter dezagun mintzaren oreka. Burbuilaren erdiak pairatzen dituen indarrak (pisua ahaztuta) kanpoko eta barruko presioek eragindakoak eta bi gainazaletan aplikaturiko gainazal-indarrak dira. 10.37 geometrian erraz kalkulatzen da azkena: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>γ</mi></msub><mo>=</mo><mi>−</mi><mn>2</mn><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mi>−</mi><mn>4</mn><mi>γ</mi><mi>π</mi><mi>R</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Xaboi-burbuila baten erdia.",
     "src": "media/irudiak/6af42f44b0908bf2.svg",
     "zabalera": 297
    },
    {
     "mota": "testua",
     "html": "Bestalde, altuera arbuiatu dugunez, presioak homogeneoak izango dira eta eragindako indarra hurrengoa: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>p</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo>∫</mo><mi>S</mi></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> Hemen <math display=\"inline\"><mrow><msub><mo>∫</mo><mi>S</mi></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math> integrala mugaren menpeko hutsa dela erabili dugu (ikus 10.14.5 problema) hemisferioan kalkulatu beharrean, oinarritzat duen zirkuluan zuzenean aurkitzeko: <math display=\"inline\"><mrow><msub><mo>∫</mo><mi>S</mi></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>. Oreka-baldintza <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>p</mi></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>γ</mi></msub><mo>=</mo><mn>0</mn></mrow></math> denez, hauxe dugu presioen diferentzia: <math display=\"block\"><mrow><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mi>γ</mi></mrow><mi>R</mi></mfrac><mi>.</mi></mrow></math> Diferentzia handiagoa da burbuilaren erradioa txikiagoa denean."
    },
    {
     "mota": "testua",
     "html": "Ur-tanta baten kasuan gainazal bakarra dugunez, aurrekoaren erdia da emaitza<span class=\"j-oin\">[<strong>Laplaceren ekuazioa</strong> deritzon emaitzaren kasu partikularra da hau. 1806an aurkitu zuen Laplacek aipaturiko ekuazioa, oreka mekanikoaren azterketa baten bidez.]</span>: <math display=\"block\"><mrow><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>γ</mi></mrow><mi>R</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ukipen-angelua"
    },
    {
     "mota": "testua",
     "html": "Eman dezagun likido bat dugula ontzi batean. Likidoaren gainazalak ontziaren horma ukitzen duen puntuetan hiru ingurune ditugu: solidoa (beira, adibidez), likidoa (ura) eta gasa (airea edo, hobeki esan, lurruna). Hortaz, inguruneen arteko hiru geruza eta dagozkien hiru gainazal-tentsioak egongo dira, geruzak mugatzen dituen inguruneen izenen lehen letraz izendatuko ditugunak: <math display=\"inline\"><msub><mi>γ</mi><mrow><mi>s</mi><mi>l</mi></mrow></msub></math>, <math display=\"inline\"><msub><mi>γ</mi><mrow><mi>l</mi><mi>g</mi></mrow></msub></math> eta <math display=\"inline\"><msub><mi>γ</mi><mrow><mi>s</mi><mi>g</mi></mrow></msub></math>. Aurreko ataletan bakarrik kontsideratu dugu <math display=\"inline\"><mrow><mi>γ</mi><mo>≡</mo><msub><mi>γ</mi><mrow><mi>l</mi><mi>g</mi></mrow></msub></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Solido, likido eta gasaren arteko geruzak.",
     "src": "media/irudiak/473fd47d8ab10063.svg",
     "zabalera": 519
    },
    {
     "mota": "testua",
     "html": "Solidoaren hormaren eta likidoaren gainazalaren arteko angelua ukipen-puntuetan <strong>ukipen-angelua</strong> deritzo. Hiru geruzek elkar ebakitzen dute lerroan (zirkunferentzia batean ontzia zilindrikoa bada), 10.38 irudian ikusten denez, ukipen-angelua <math display=\"inline\"><mn>0</mn></math> edo <math display=\"inline\"><mi>π</mi></math> ez bada, laugarren indar bat behar da ebakidura hori orekan egoteko: <strong>itsaspen-indarra</strong> deritzo hormak eragindako indar horri. Ebakiduraren luzera-unitatearen oreka-baldintzak honela idazten dira:"
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
     "html": "Lehen emaitza <strong>Youngen ekuazioa</strong> deitzen da eta ukipen-angelua inguruneen ezaugarrien menpekoa dela diosku. Bigarrenak luzera-unitateko <math display=\"inline\"><mi>I</mi></math> itsaspen-indarra ematen digu."
    },
    {
     "mota": "testua",
     "html": "Ukipen-angelua <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>θ</mi><mo>&lt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> denean, likidoak solidoa <strong>busti egiten duela</strong> esaten da. Horrela gertatzen da, adibidez, urak, alkoholak, eterrak eta beste likido batzuek mota askotako beira ukitzen dutenean: kasu hauetan <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> dugu, gainera. Bestalde, uraren eta zilarraren artean <math display=\"inline\"><mrow><mi>θ</mi><mo>≈</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> da, uraren eta parafinaren artean <math display=\"inline\"><mrow><mi>θ</mi><mo>≈</mo><mn>107</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> eta merkurio eta beiraren artean <math display=\"inline\"><mrow><mi>θ</mi><mo>≈</mo><mn>140</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. Likidoak ez duela solidoa bustitzen esaten da azken bi kasuetan eta <math display=\"inline\"><mrow><mi>θ</mi><mo>&gt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> den bakoitzean."
    },
    {
     "mota": "testua",
     "html": "Gainazal-tentsioa likidoaren ezpurutasunen menpekoa denez, eragile hezegarri baten bidez ukipen-angelua txiki daiteke: horixe da detergenteen zereginetako bat."
    },
    {
     "mota": "irudia",
     "oina": "Detergentearen eragina olio-tanta batean.",
     "src": "media/irudiak/0c9c682d2af65676.svg",
     "zabalera": 462
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kapilaritatea"
    },
    {
     "mota": "testua",
     "html": "Gainazal-tentsioa dela eta, oso hodi mehe bat likido batean sartzen bada, uraren gainazalaren garaiera handiagoa edo txikiagoa da hodiaren kanpoan baino. Arrazoia 10.40 irudian erakusten da, likidoak hodia bustitzen duenean ezkerrean eta kontrako kasuan eskuinean."
    },
    {
     "mota": "irudia",
     "oina": "Kapilaritatea.",
     "src": "media/irudiak/6324337201eedc53.svg",
     "zabalera": 292
    },
    {
     "mota": "testua",
     "html": "Kanpoko gainazalaren gaineko ur-zutabearen oreka, bere pisuaren eta gainazal-indarraren osagai bertikalaren batura nulua denean gertatzen da: <math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><mi>g</mi><mo>+</mo><msub><mi>F</mi><mi>γ</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>. Barruko uraren gainazal kurbatua <strong>meniskoa</strong> deitzen da eta bere kurbadura arbuiatzen badugu, zutabearen bolumena <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup><mi>h</mi></mrow></math> da, kapilarraren erradioa <math display=\"inline\"><mi>R</mi></math> bada. Beraz, hauxe dugu oreka-baldintza:"
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
     "html": "<strong>Jurinen legea</strong> deitzen den emaitza honen arabera, fenomenoa ikusgarriagoa da hodi meheetan. Argi dago emaitza honetan likidoak horma bustitzen ez badu, (<math display=\"inline\"><mrow><mi>θ</mi><mo>&gt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>), barneko likidoaren altuera txikiagoa dela: <math display=\"inline\"><mrow><mi>h</mi><mo>&lt;</mo><mn>0</mn></mrow></math>. Garrantzi handikoa da kapilaritatea, adibidez, euriaren ura zoruko partikulen arteko zirrituetan gordetzeko, landareek handik har dezaten."
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Problema ebatziak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Deformazio-tentsorearen balio eta bektore propioak"
    },
    {
     "mota": "testua",
     "html": "<em>Kontsidera dezagun solido elastiko bateko puntu batean zentraturiko alegiazko gainazal esferiko infinitesimal bat. Froga ezazu gorputzak deformazio txiki bat pairatzen duenean gainazala elipsoide bihurtzen dela. Nola aurki daitezke elipsoidearen forma eta orientazioa? Egin azken kalkulua deformazioa aipaturiko puntuan hurrengo hau den kasuan:</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Gainazalaren zentroa 10.11 irudiko <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> puntua bada eta gainazaleko puntu generikoa <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math>, deformazioa gertatu baino lehen esferaren erradio infinitesimala <math display=\"inline\"><mrow><mi>d</mi><mi>l</mi></mrow></math> izango da. Deformatu denean, (10.47)-ren ondorioz, distantzia honela idazten da deformazioak txikiak direla kontuan hartuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><msup><mi>l</mi><mn>2</mn></msup><mo>=</mo><mi>d</mi><msup><mi>l</mi><mrow><mi>*</mi><mn>2</mn></mrow></msup><mo>−</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msubsup><mi>x</mi><mi>i</mi><mo>*</mo></msubsup><mi>d</mi><msubsup><mi>x</mi><mi>j</mi><mo>*</mo></msubsup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Forma koadratiko hau honela idazten da <math display=\"inline\"><mn mathvariant=\"bold\">𝟏</mn></math> identitate matrizea eta deformazio-tentsorearen osagaiekin eraikitako <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑼</mi><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> deformazio-matrizea erabiliz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><msup><mi>l</mi><mn>2</mn></msup><mo>≈</mo><msup><mi mathvariant=\"bold-italic\">𝑿</mi><mi>⊤</mi></msup><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn mathvariant=\"bold\">𝟏</mn><mo>−</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝑼</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑿</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi mathvariant=\"bold-italic\">𝑿</mi><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>d</mi><msubsup><mi>x</mi><mn>1</mn><mo>*</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>d</mi><msubsup><mi>x</mi><mn>2</mn><mo>*</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>d</mi><msubsup><mi>x</mi><mn>3</mn><mo>*</mo></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn mathvariant=\"bold\">𝟏</mn><mo>−</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝑼</mi></mrow></math> matrizearen balio eta bektore propioen problema,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn mathvariant=\"bold\">𝟏</mn><mo>−</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝑼</mi><mo>−</mo><mi>λ</mi><mn mathvariant=\"bold\">𝟏</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hurrengoaren baliokidea da, <math display=\"inline\"><mrow><mi>λ</mi><mo>≡</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>ε</mi></mrow></math> egiten bada:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑼</mi><mo>−</mo><mi>ε</mi><mn mathvariant=\"bold\">𝟏</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Deformazio-tentsorea (eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑼</mi></math> matrizea) simetrikoa denez, beti onartzen ditu <math display=\"inline\"><msub><mi>ε</mi><mi>i</mi></msub></math> balio propioei dagozkien hiru bektore propio ortonormal eta hauek oinarritzat aukeratzen badira, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑼</mi></math> eta <math display=\"inline\"><mrow><mn mathvariant=\"bold\">𝟏</mn><mo>−</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝑼</mi></mrow></math> diagonal bihurtzen dira. Ondorioz, gainazal deformatuaren ekuazioa honela idazten da triedro propio horretan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><msup><mi>l</mi><mn>2</mn></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><msub><mi>ε</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><msubsup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>i</mi><mn>2</mn></msubsup><mo>≈</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><msub><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>i</mi></msub></mrow><mrow><mn>1</mn><mo>+</mo><msub><mi>ε</mi><mi>i</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Elipsoide baten ekuazioa da hau, noski, eta ardatz nagusien luzerak <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msub><mi>ε</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>l</mi></mrow></math> dira. Ardatz horien norabidean, hau da, deformazio-tentsorearen bektore propioen norabidean, deformazioa luzetarakoa da, zeharkako osagairik gabekoa, eta deformazio unitarioa dagokion <math display=\"inline\"><msub><mi>ε</mi><mi>i</mi></msub></math> balore propioa."
    },
    {
     "mota": "testua",
     "html": "Hauexek ditugu deformazio-tentsorearen balio propioak eta bektore propio ortonormalak adibidean:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mn>0.024427</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mn>0.0012333</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mn>0.033194</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>i</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0.91189</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>0.40368</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>0.074169</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"0.222em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0.40645</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0.86302</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0.30001</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"0.222em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>0.057097</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>0.30372</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0.95105</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Uraren konprimagarritasuna"
    },
    {
     "mota": "testua",
     "html": "<em>Nola aldatzen da hidrostatikaren oinarrizko legea, uraren konprimagarritasuna arbuiatzen ez bada? Oharra: Ahaztu gazitasunaren eta tenperaturaren aldaketak.</em>"
    },
    {
     "mota": "testua",
     "html": "Kontsidera dezagun <math display=\"inline\"><mrow><mi>d</mi><mi>z</mi></mrow></math> altuerako kubo bertikal infinitesimal bat. Uraren azalean, hau da, <math display=\"inline\"><msub><mi>p</mi><mn>0</mn></msub></math> presio atmosferikoan, uraren dentsitatea <math display=\"inline\"><msub><mi>ρ</mi><mn>0</mn></msub></math> bada, <math display=\"inline\"><mi>z</mi></math> sakoneran <math display=\"inline\"><mi>p</mi></math> presioaren eta <math display=\"inline\"><mi>ρ</mi></math> dentsitatearen arteko erlazioa, konprimagarritasun moduluaren (10.7) definizioak emandakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mi>B</mi><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi></mrow><mi>V</mi></mfrac><mo>=</mo><mi>B</mi><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>ρ</mi></mrow><mi>ρ</mi></mfrac><mo>=</mo><mi>B</mi><mfrac><mrow><mi>ρ</mi><mo>−</mo><msub><mi>ρ</mi><mn>0</mn></msub></mrow><msub><mi>ρ</mi><mn>0</mn></msub></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>ρ</mi><mo>=</mo><msub><mi>ρ</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub></mrow><mi>B</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non kuboaren <math display=\"inline\"><mrow><mi>d</mi><mi>m</mi><mo>=</mo><mi>ρ</mi><mi>V</mi><mo>=</mo><mi>ρ</mi><mi>d</mi><mi>S</mi><mi>d</mi><mi>z</mi></mrow></math> masa aldatzen ez denez, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>ρ</mi><mspace width=\"0.222em\"></mspace><mi>V</mi><mo>+</mo><mi>ρ</mi><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math> dela erabili dugun. Hidrostatikaren legea, kuboaren oreka-ekuazioa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mi>d</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>S</mi><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>S</mi><mo>−</mo><mi>d</mi><mi>m</mi><mspace width=\"0.222em\"></mspace><mi>g</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>d</mi><mi>p</mi><mo>=</mo><mi>ρ</mi><mi>g</mi><mi>d</mi><mi>z</mi><mo>=</mo><msub><mi>ρ</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub></mrow><mi>B</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mi>d</mi><mi>z</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Koefiziente konstanteetako ekuazio diferentzial lineal hau zuzenean integratzen da (ikus, adibidez, [46]), <math display=\"inline\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math> hastapen-baldintza erabiliz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>p</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><msub><mi>ρ</mi><mn>0</mn></msub><mi>g</mi><mi>z</mi><mi>/</mi><mi>B</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><msub><mi>ρ</mi><mn>0</mn></msub><mi>g</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mfrac><mrow><msub><mi>ρ</mi><mn>0</mn></msub><mi>g</mi><mi>z</mi></mrow><mrow><mn>2</mn><mi>B</mi></mrow></mfrac><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>B</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>ρ</mi><mo>=</mo><msub><mi>ρ</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mfrac><mrow><msub><mi>ρ</mi><mn>0</mn></msub><mi>g</mi><mi>z</mi></mrow><mi>B</mi></mfrac><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>B</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Pitoten hodia"
    },
    {
     "mota": "testua",
     "html": "<em>Hegazkin baten abiadura neurtzeko irudian eskematikoki erakusten den Pitoten hodi bat jar daiteke fuselajean. Kanpoko hodiaren zuloetatik airearen <math display=\"inline\"><msub><mi>p</mi><mn>1</mn></msub></math> presioa neurtzen da eta barnekoaren muturra gelditze-puntua da, bertan airearen abiadura erlatiboa nulua baita. Nola kalkula daiteke hegazkinaren abiadura bi presioen diferentziaz baliatuz?</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/a2489ec876048930.svg",
     "zabalera": 139
    },
    {
     "mota": "testua",
     "html": "Goiko zuloetatik neurtzen den <math display=\"inline\"><msub><mi>p</mi><mn>1</mn></msub></math> presioa (hegazkinaren sisteman)  <math display=\"inline\"><mi>v</mi></math> abiaduraz higitzen den airearena da. <math display=\"inline\"><msub><mi>p</mi><mn>2</mn></msub></math> neurtzeko hodiaren ahoan, berriz, airea geldi dago. Bernoulliren teorema bi puntu horien artean (nahiago bada, hodiaren aurrean distantzia handira dagoen bitarteko puntu bat erabil daiteke) aplikatzen badugu (bestelako informaziorik ezean, demagun teoremaren hipotesiak betetzen direla),"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msub><mi>p</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "lortzen da eta hortik <math display=\"inline\"><mi>v</mi></math> abiadura askatzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mfrac><mrow><msub><mi>p</mi><mn>2</mn></msub><mo>−</mo><msub><mi>p</mi><mn>1</mn></msub></mrow><mi>ρ</mi></mfrac></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Biskosimetroa"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/dabb48892f5b5fa0.svg",
     "zabalera": 211
    },
    {
     "mota": "testua",
     "html": "<em>Irudiko zilindro luzeak <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatz komunaren inguruan biratzen ari dira erakutsitako abiadura angeluarrez. Bien artean fluido bat dago. Kalkulatu abiadura-eremua eta zilindroen abiadura angeluarra konstantea izateko haietan aplikatu behar diren indar-momentuak (hauek neurtuz, fluidoaren biskositate dinamikoaren koefizientea kalkula daiteke). Eman jarioa egonkorra dela.</em>"
    },
    {
     "mota": "testua",
     "html": "Azken hipotesiari esker, argi dago simetriaren ondorioz <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover></mrow></math> dugula koordenatu zilindrikoak erabiltzen badira. Fluidoaren azelerazioa zentripetoa da, noski:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>ρ</mi></mfrac><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Nahiago bada, (B.18), (B.31), (B.46) eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover></mrow><mrow><mi>d</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover></mrow><mrow><mi>d</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "emaitzak erabil daitezke aurreko azelerazioa <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mi>∇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> adierazpenaren bidez lortzeko. Gainera, hurrengoak zuzenean egiaztatzen dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mi>p</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>ρ</mi></mrow></mfrac><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>v</mi></mrow><mrow><mi>d</mi><msup><mi>ρ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>ρ</mi></mrow></mfrac><mo>−</mo><mfrac><mi>v</mi><msup><mi>ρ</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kasu erraz honetan, hortaz, fluidoa konprimaezintzat har dezakegu eta (10.235) ekuazioa hurrengora laburtzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mi>ρ</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>ρ</mi></mfrac><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><mi>ρ</mi></mrow></mfrac><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>η</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>v</mi></mrow><mrow><mi>d</mi><msup><mi>ρ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>ρ</mi></mrow></mfrac><mo>−</mo><mfrac><mi>v</mi><msup><mi>ρ</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ekuazio honen bi osagaiak honela idazten dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>ρ</mi></mrow></mfrac><mo>=</mo><mi>ρ</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>ρ</mi></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>v</mi></mrow><mrow><mi>d</mi><msup><mi>ρ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>ρ</mi></mrow></mfrac><mo>−</mo><mfrac><mi>v</mi><msup><mi>ρ</mi><mn>2</mn></msup></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Cauchy eta Eulerren ekuazioa da azkena (ikus, adibidez, [46]) eta soluzioak <math display=\"inline\"><mrow><mi>v</mi><mo>∝</mo><msup><mi>ρ</mi><mi>λ</mi></msup></mrow></math> erakoak. Zuzenean ikusten da kasu honetan ekuazio lineal honen soluzio orokorra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mi>A</mi><mi>ρ</mi><mo>+</mo><mfrac><mi>B</mi><mi>ρ</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "dela. Integrazio-konstanteak aurkitzeko, zilindroen hormetan fluidoa pausagune erlatiboan dagoela adierazten duten <math display=\"inline\"><mrow><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>R</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>ω</mi><mn>1</mn></msub><msub><mi>R</mi><mn>1</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>R</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>ω</mi><mn>2</mn></msub><msub><mi>R</mi><mn>2</mn></msub></mrow></math> mugalde-baldintzak erabiltzen badira, hauxe lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mfrac><mrow><msub><mi>ω</mi><mn>2</mn></msub><msubsup><mi>R</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msub><mi>ω</mi><mn>1</mn></msub><msubsup><mi>R</mi><mn>1</mn><mn>2</mn></msubsup></mrow><mrow><msubsup><mi>R</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>R</mi><mn>1</mn><mn>2</mn></msubsup></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>B</mi><mo>=</mo><mfrac><mrow><msubsup><mi>R</mi><mn>1</mn><mn>2</mn></msubsup><msubsup><mi>R</mi><mn>2</mn><mn>2</mn></msubsup></mrow><mrow><msubsup><mi>R</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>R</mi><mn>1</mn><mn>2</mn></msubsup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orain, presioaren deribatua ematen duen ekuazio erradialaren integralak presioa ematen digu. Ohar zaitez bi zilindroen abiadura angeluarrak berdinak direnean fluidoa ere modu berean higitzen dela, sistema osoa solido zurrun bat balitz bezala."
    },
    {
     "mota": "testua",
     "html": "Azter dezagun orain fluidoak zilindro bakoitzaren gainean eragiten duen indar-momentua. Hasteko, aurki dezagun ebakidura-esfortzua <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>R</mi><mn>1</mn></msub><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> puntuan. Horretarako <math display=\"inline\"><msub><mi>τ</mi><mrow><mi>y</mi><mi>x</mi></mrow></msub></math> kalkulatu behar dugu puntu horretan. Abiadura-eremua koordenatu kartesiarretan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>x</mi></msub><mo>=</mo><mi>−</mi><mi>v</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mi>−</mi><mi>ω</mi><mi>y</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>v</mi><mi>y</mi></msub><mo>=</mo><mi>v</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mi>ω</mi><mi>x</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>ω</mi><mo>≡</mo><mfrac><mi>v</mi><mi>ρ</mi></mfrac><mo>=</mo><mi>A</mi><mo>+</mo><mfrac><mi>B</mi><msup><mi>ρ</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "moduan idazten da. Ondorioz, (10.229)–(10.230) eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntuan <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>ρ</mi></mrow></math> dela erabiliz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>y</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>η</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>v</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>v</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>η</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mfrac><mrow><mi>∂</mi><mi>ω</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mi>y</mi><mfrac><mrow><mi>∂</mi><mi>ω</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mrow><msub><mi>τ</mi><mrow><mi>y</mi><mi>x</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></msub><mo>=</mo><mi>η</mi><mi>x</mi><mfrac><mrow><mi>∂</mi><mi>ω</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo></mrow><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></msub><mo>=</mo><mi>η</mi><mi>ρ</mi><mfrac><mrow><mi>∂</mi><mi>ω</mi></mrow><mrow><mi>∂</mi><mi>ρ</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mi>η</mi><mfrac><mi>B</mi><msup><mi>ρ</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>τ</mi><mo>≡</mo><msub><mi>τ</mi><mrow><mi>y</mi><mi>x</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>R</mi><mn>1</mn></msub><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>2</mn><mi>η</mi><mfrac><mi>B</mi><msubsup><mi>R</mi><mn>1</mn><mn>2</mn></msubsup></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Zilindroko puntu guztietan ebakidura-esfortzuaren modulua berdina denez, <math display=\"inline\"><mi>L</mi></math> luzeran eragindako indar-momentu osoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>N</mi><mn>1</mn></msub><mo>=</mo><mi>τ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><msub><mi>R</mi><mn>1</mn></msub><mi>L</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>4</mn><mi>π</mi><mi>η</mi><mi>L</mi><mi>B</mi><mo>=</mo><mi>−</mi><mn>4</mn><mi>π</mi><mi>η</mi><mi>L</mi><mfrac><mrow><msubsup><mi>R</mi><mn>1</mn><mn>2</mn></msubsup><msubsup><mi>R</mi><mn>2</mn><mn>2</mn></msubsup></mrow><mrow><msubsup><mi>R</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>R</mi><mn>1</mn><mn>2</mn></msubsup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Modu berean, erraz frogatzen da kanpoko zilindroan eragindako indar-momentua <math display=\"inline\"><mrow><msub><mi>N</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>N</mi><mn>1</mn></msub></mrow></math> dela. (Jakina, <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow></math> denean ez dago inolako indar-momenturik.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Azalera osoaren bektorea"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/7da7fc22f249a363.svg",
     "zabalera": 161
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub></mrow></math> integrala integrazio-mugen menpeko hutsa den bezala, <math display=\"inline\"><mrow><msub><mo>∫</mo><mi>S</mi></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math> integrala <math display=\"inline\"><mi>S</mi></math> gainazalaren mugaren menpeko hutsa da. Frogatu <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> gainazalek <math display=\"inline\"><mi>C</mi></math> kurba itxi berbera mugatzat badute eta orientazio berdinekoak badira, honako hau betetzen dela:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mo>∫</mo><msub><mi>S</mi><mn>1</mn></msub></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><msub><mo>∫</mo><msub><mi>S</mi><mn>2</mn></msub></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Gainazal baten orientazioa alderantziz jarriz gainazal itxia lortzen denez, emaitza hau"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mo>∮</mo><mi>S</mi></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "moduan ere adieraz daiteke, <math display=\"inline\"><mi>S</mi></math> gainazal itxi guztietarako. Modu honetan frogatzeko, Gaussen teoremaren (10.129) adierazpena erabil daiteke <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝉</mi></math> tentsorea identitatea (eta, beraz, konstantea)  bada:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>τ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msub><mi>S</mi><mi>j</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msub><mi>S</mi><mi>j</mi></msub><mo>=</mo><mi>d</mi><msub><mi>S</mi><mi>i</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mo>∮</mo><mi>S</mi></msub><mi>d</mi><msub><mi>S</mi><mi>i</mi></msub><mo>=</mo><msub><mo>∮</mo><mi>S</mi></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>d</mi><msub><mi>S</mi><mi>j</mi></msub><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi>∂</mi><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mi>d</mi><mi>V</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Zenbait testuliburutan Gaussen teorema frogatzeko erabiltzen diren proiekzioez ere balia gintezke beste frogapen bat emateko."
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
       "html": "<strong>smallcaps[Elastikotasuna]</strong>"
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
       "html": "Zein da altzairuzko kable baten luzera maximoa, mutur batetik esekitzean bere pisuaren eraginez apur ez dadin?"
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
       "html": "Zein izango litzateke material konprimaezin baten Poissonen koefizientea?"
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
           "html": "Irudiko hagatxo arina 105 cm luze da eta <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> harien bidez eseki da sabaitik. Harien deformazioak txikiak badira, nondik eseki behar da <math display=\"inline\"><mi>M</mi></math> masa bi hariek (a) esfortzu berdinak, (b) deformazio berdinak paira ditzaten? <em>Datuak</em>: <math display=\"inline\"><mi>A</mi></math> hariaren zeharkako sekzioa 1 mm<sup>2</sup> da eta <math display=\"inline\"><mi>B</mi></math>-rena 2 mm<sup>2</sup>. Lehenengoaren Youngen modulua <math display=\"inline\"><mrow><mn>21</mn><mo>×</mo><msup><mn>10</mn><mn>3</mn></msup></mrow></math>  kp/mm<sup>2</sup> da eta <math display=\"inline\"><mi>B</mi></math>-rena <math display=\"inline\"><mrow><mn>14</mn><mo>×</mo><msup><mn>10</mn><mn>3</mn></msup></mrow></math>  kp/mm<sup>2</sup>."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/8e518b6d515ada91.svg",
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
       "html": "Gomazko barra bat 10 cm luze da eta bere sekzio karratuaren aldeen luzera 1 cm. Bere luzeraren norabidean 1000 N-eko konpresio-indarra aplikatzen zaionean 1 cm laburragoa da eta zeharkako sekzioa 1.1 cm<sup>2</sup>. Zeintzuk dira Youngen modulua eta Poissonen koefizientea? Orain barra altzairuzko matrize batean sartzen bada, zeharkako norabideetan zabal ez dadin, zein izango da laburpena konpresio berdinarekin?"
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
           "html": "Barra bat orekan dago muturretan aplikaturiko kontrako esfortzuen eraginpean. Zeintzuk dira tentsio- eta ebakidura-esfortzuak (hau da, esfortzuaren osagai normala eta tangentea) irudian erakusten den zeharkako planoan? Nola aukeratu behar da <math display=\"inline\"><mi>α</mi></math> angelua trakzio-esfortzua maximoa izateko? Eta ebakidura-esfortzua maximoa izan dadin?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/f3e6dced5c44b203.svg",
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
       "html": "Kalkulatu 10.5 problemako barraren oreka-egoerara astiro-astiro heltzeko aplikaturiko indarrak egin duen lana. Erabili emaitza energia elastikoaren dentsitatea esfortzuaren eta deformazio unitarioaren funtzioan idazteko."
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
           "html": "Irudiko kuboa orekan dago erakusten diren esfortzuen eraginpean. Deformazioa txikia da eta kuboaren aldeen luzera <math display=\"inline\"><mi>a</mi></math>. Kalkulatu egoera horretara apurka-apurka iristeko, kuboaren gainean egin behar izan den lana. Zein da energia elastikoaren dentsitatea?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/7011295a60f09294.svg",
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
       "html": "Altzairuzko barra baten bolumen-modulua <math display=\"inline\"><mi>B</mi></math> da. Muturretan <math display=\"inline\"><mi>τ</mi></math> trakzio-esfortzuak aplikatzen badira, zein da barraren dentsitatearen aldaketa unitarioa?"
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
       "html": "<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>20</mn></mrow></math> kg-ko bolatxo bat <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>3</mn></mrow></math> m-ko altzairuzko hari batetik esekitzen da. Bertikalean oszilatzean bolatxoaren maiztasuna <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>8.14</mn></mrow></math> Hz da. Hariaren diametroa <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1</mn></mrow></math> mm bada, zein da bere Youngen modulua?"
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
           "html": "Kubo bat egiteko bi bloke berdin itsasten dira irudian erakusten den moduan. Nolakoa da loturak pairatzen duen esfortzua: tentsioa, konpresioa ala ebakidura-esfortzua?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/f931924e8872a149.svg",
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
           "html": "Sodioaren bolumen-modulua neurtzeko, irudiko pistoia erabiltzen da. <math display=\"inline\"><msub><mi>V</mi><mn>1</mn></msub></math> bolumeneko sodioaren lagina olioaren <math display=\"inline\"><msub><mi>V</mi><mn>2</mn></msub></math> bolumenean sartzen da. <math display=\"inline\"><mi>F</mi></math> indar handia aplikatzean <math display=\"inline\"><mi>A</mi></math> azalerako pistoiaren desplazamendua <math display=\"inline\"><mi>d</mi></math> bada eta olioaren bolumen-modulua <math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math>, zein da sodioarena? <em>Oharra</em>: Eman pistoia eta horma ez direla deformatzen eta marruskadura arbuiagarria dela."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/7cfe13736a79fa67.svg",
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
           "html": "Altzairuzko kable baten zeharkako azalera <math display=\"inline\"><mi>A</mi></math> da eta Youngen modulua <math display=\"inline\"><mi>E</mi></math>. Hasieran bi mutur finkoren artean dago, tentsioa arbuiagarria delarik. Erditik <math display=\"inline\"><mi>m</mi></math> masako objektua esekitzean, kablea irudian erakusten den moduan geratzen da. Froga ezazu <math display=\"inline\"><mi>θ</mi></math> deformazio-angelua hurrengo ekuazio transzendenteak emandakoa dela:"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sec</mi><mi>θ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi></mrow><mrow><mi>E</mi><mi>A</mi></mrow></mfrac><mi>.</mi></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "Zein da <math display=\"inline\"><mi>θ</mi></math>-ren balioa <math display=\"inline\"><mrow><mi>m</mi><mi>g</mi><mi>/</mi><mi>E</mi><mi>A</mi><mo>=</mo><mn>0.01</mn></mrow></math> denean?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/cdd2ead209cd40f4.svg",
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
       "html": "Froga ezazu gorputz homogeneo isotropo baten kasuan bolumenaren deformazio unitarioa"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>τ</mi><mrow><mi>k</mi><mi>k</mi></mrow></msub><mo>=</mo><mn>3</mn><mi>B</mi><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi></mrow><mi>V</mi></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "erlazioak emandakoa dela eta Hookeren legea modu baliokide hauetan ere idatz daitekeela:"
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
       "html": "Ontzi esferiko baten erradioa <math display=\"inline\"><mi>R</mi></math> da eta hormaren lodiera <math display=\"inline\"><mrow><mi>d</mi><mo>≪</mo><mi>R</mi></mrow></math>. Barruko presio manometrikoa handitzean, <math display=\"inline\"><msub><mi>p</mi><mi>e</mi></msub></math> baliora heltzen denean ontziak eztanda egiten du. Zein da hormaren materialaren trakzioarekiko erresistentzia?"
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
           "html": "Irudiko kubo homogeneo isotropoa orekan dago. Erabili kuboaren aldeen <math display=\"inline\"><mi>A</mi></math> azalera, <math display=\"inline\"><mi>F</mi></math> indarra eta Youngen modulua eta Poissonen koefizientea, esfortzu- eta deformazio-tentsoreak idazteko. Zein da bolumenaren deformazioa? Eta diagonal nagusiena?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/f7463f44d18e35ce.svg",
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
       "html": "Zutabe homogeneo baten luzera, dentsitatea, Youngen modulua eta Poissonen koefizientea <math display=\"inline\"><mi>L</mi></math>, <math display=\"inline\"><mi>ρ</mi></math>, <math display=\"inline\"><mi>E</mi></math> eta <math display=\"inline\"><mi>σ</mi></math> dira, hurrenez hurren. Bertikalean jartzen bada, zenbat laburtuko da bere pisuaren eraginez? Zenbat luzatuko da mutur batetik esekitzean?"
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
       "html": "Kalkulatu esfortzu- eta deformazio-tentsoreak 10.16 problemako kasuan. Zein da bolumenaren deformazio unitarioa?"
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
           "html": "Nolakoa izan behar du beheko barraren Youngen moduluak, bi material desberdinez egindako goikoaren deformazioa pairatzeko?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/d2684850541dfa61.svg",
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
           "html": "Irudiko barra homogeneoa mutur baten inguruan ari da biratzen, plano horizontalean, <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar handi konstantez. Kalkulatu deformazio-eremua, sistema oreka erlatiboan dagoenean, hau da, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> deformazio-eremua denboraren menpekoa ez denean. Zein da barraren luzapen osoa? <em>Oharra</em>: Barraren masa, Youngen modulua eta zeharkako sekzioaren azalera, <math display=\"inline\"><mi>m</mi></math>, <math display=\"inline\"><mi>E</mi></math> eta <math display=\"inline\"><mi>A</mi></math> dira, hurrenez hurren."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/c128444fe2034e51.svg",
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
       "html": "Bi horma bertikalen arteko distantzia <math display=\"inline\"><mi>d</mi></math> da eta bien artean, norabide perpendikularrean, <math display=\"inline\"><mi>d</mi></math> luzerako barra bat jartzen da. Barraren zeharkako sekzioaren azalera <math display=\"inline\"><mi>S</mi></math> da, Youngen modulua <math display=\"inline\"><mi>E</mi></math> eta zabalkuntza termiko linealaren koefizientea <math display=\"inline\"><mi>α</mi></math>. Tenperatura handitzen bada, bere aldaketa <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>T</mi></mrow></math> denean, zein izango da barrak horma bakoitzean egindako indarra, hormak deformatzen ez badira?"
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
           "html": "Irudiko barraren Youngen modulua, dentsitatea, luzera eta sekzio normalaren azalera <math display=\"inline\"><mi>E</mi></math>, <math display=\"inline\"><mi>ρ</mi></math>, <math display=\"inline\"><mi>L</mi></math> eta <math display=\"inline\"><mi>A</mi></math> dira, hurrenez hurren, eta <math display=\"inline\"><mrow><msub><mi>F</mi><mn>2</mn></msub><mo>&gt;</mo><msub><mi>F</mi><mn>1</mn></msub></mrow></math> indarren eraginpean ari da higitzen. Sistema oreka erlatiboan dago, hau da, ez dago azelerazio erlatiborik barako puntuen artean. Kalkulatu <math display=\"inline\"><mrow><mi>τ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tentsioa, deformazio-eremua eta barraren luzapena."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/969200c21bd8bb18.svg",
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
           "html": "Azter dezagun 10.21 problemako barraren higidura orokorra (deformazio txikiekin)."
          },
          {
           "mota": "testua",
           "html": "(a) Kontsideratu <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> luzerako elementu baten higidura-ekuazioa eta frogatu <math display=\"inline\"><mi>u</mi></math> deformazio-eremuak uhin-ekuazio bat betetzen duela."
          },
          {
           "mota": "testua",
           "html": "(b) Idatzi <math display=\"inline\"><mrow><mi>τ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tentsio-eremuak betetzen dituen mugalde-baldintzak, <math display=\"inline\"><msub><mi>F</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>F</mi><mn>2</mn></msub></math> eta problemako beste datu batzuk erabiliz. Ondorioztatu zeintzuk diren <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> desplazamenduak betetako mugalde-baldintzak."
          },
          {
           "mota": "testua",
           "html": "(c) Ordezkatu uhin-ekuazioan ondoko egiturako soluzio bat:"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi><mi>t</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mrow><msub><mi>F</mi><mn>2</mn></msub><mo>−</mo><msub><mi>F</mi><mn>1</mn></msub></mrow><mrow><mi>ρ</mi><mi>A</mi><mi>L</mi></mrow></mfrac><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><msub><mi>F</mi><mn>2</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>L</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>F</mi><mn>1</mn></msub></mrow><mrow><mn>2</mn><mi>A</mi><mi>L</mi><mi>E</mi></mrow></mfrac><mo>+</mo><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "(Nahiago bada, <math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren definizioa da hau.)"
          },
          {
           "mota": "testua",
           "html": "(d) Aurkitu zeintzuk diren <math display=\"inline\"><mi>w</mi></math> funtzioak betetako eboluzio-ekuazioa eta mugalde-baldintzak. Idatzi dagokien soluzio orokorra."
          },
          {
           "mota": "testua",
           "html": "(e) Zein da <math display=\"inline\"><mi>w</mi></math>-ren esanahi fisikoa? Eta <math display=\"inline\"><mi>u</mi></math>-ren beste zatiarena? Zer dira <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> konstanteak?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/7da5c74f62c6008e.svg",
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
           "html": "Irudiko zutabe homogeneo bertikalaren masa, luzera propioa, zeharkako sekzioaren azalera eta Youngen modulua, <math display=\"inline\"><mi>m</mi></math>, <math display=\"inline\"><mi>L</mi></math>, <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>E</mi></math> dira, hurrenez hurren. Kalkulatu zein den, <math display=\"inline\"><mi>z</mi></math> garaiera bakoitzean, bere pisuak eta <math display=\"inline\"><mi>M</mi></math> zamarenak eragindako esfortzua eta deformazio-eremua. Zein da luzeraren aldaketa osoa?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/31e263640302842a.svg",
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
       "html": "Triedro kartesiar batean honela idazten da solido elastiko baten esfortzu-tentsorea (<math display=\"inline\"><mi>C</mi></math> konstantearen funtzioan):"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝝉</mi><mo>=</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><mi>x</mi><mi>z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>x</mi><mi>z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>x</mi><mi>z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>y</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "(a) Nola aukeratu behar da <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math> elementu infinitesimala <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntuan, bertan esfortzua normala izan dadin? (b) Kontsideratu orain <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msup><mi>z</mi><mn>2</mn></msup><mo>=</mo><mn>5</mn></mrow></math> ekuazioak emandako biraketa-elipsoidea. Elipsoideko zein puntutan desagertzen da ebakidura-esfortzua? (c) Eta esfortzu osoa?"
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
       "html": "<strong>Barra elastiko baten erorketa.</strong>"
      },
      {
       "mota": "testua",
       "html": "«Barra elastiko homogeneo bat mutur batetik eseki da bertikalean. Soka ebakitzen bada, berdinak izango al dira hasieran barrako puntu guztien azelerazioak?» galdetzen du irakasleak."
      },
      {
       "mota": "testua",
       "html": "«Bai jauna! —erantzuten dio Peru orojakileak—. Einsteinen baliokidetasunaren printzipioaren arabera, eremu grabitatorio homogeneo batean partikula guztiak azelerazio berberaz erortzen dira.»"
      },
      {
       "mota": "testua",
       "html": "«Baina [23] liburuko 78. problemaren soluzioan irakurri dut beheko partikulak <math display=\"inline\"><mi>g</mi></math> azelerazioaz higituko direla eta goikoak arinago» esaten du Maitanek."
      },
      {
       "mota": "testua",
       "html": "«Jakina —esaten du Eneritzek—, 10.16 problman ikusi genuenez, behean ez dago tentsiorik eta horko partikulek pisua pairatuko dute bakarrik. Goian, ordea, tentsioa maximoa da eta, hortaz, indar osoa eta azelerazioa handiagoak.»"
      },
      {
       "mota": "testua",
       "html": "Zer uste duzu zuk?"
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
           "html": "<strong>Barra elastiko baten erorketa, berriro.</strong>"
          },
          {
           "mota": "testua",
           "html": "Azter dezagun kuantitatiboki 10.25 problema. Barraren puntuak izendatzeko, barra deformatu gabe dagoenean <math display=\"inline\"><mi>P</mi></math> puntu bakoitzak duen <math display=\"inline\"><mi>x</mi></math> abszisa erabiliko dugu, irudiko a) partean adierazten den bezala. Barraren dentsitatea eta Youngen modulua <math display=\"inline\"><mi>ρ</mi></math> eta <math display=\"inline\"><mi>E</mi></math> dira, hurrenez hurren. Esekita dagoen bitartean (<math display=\"inline\"><mrow><mi>t</mi><mo>&lt;</mo><mn>0</mn></mrow></math> denean), <math display=\"inline\"><mrow><msub><mi>u</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> deformazioa 10.16 problemakoa izango da. Soka ebaki ondoren (<math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math>), azterketa errazagoa da <math display=\"inline\"><mi>g</mi></math> azelerazioz erortzen den erreferentzia-sisteman, bertan 9.6 ataleko azterketa erabil baitaiteke. Froga ezazu sistema horretan deformazio-eremua ondoko moduan idazten dela, kalkulatu behar duzun <math display=\"inline\"><mi>v</mi></math> egoki batekin, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>t</mi><mo>&lt;</mo><mi>L</mi><mi>/</mi><mi>v</mi></mrow></math>  denbora-tartean:"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><msup><mi>u</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>u</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mn>2</mn></msup><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&gt;</mo><mi>v</mi><mi>t</mi><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&lt;</mo><mi>v</mi><mi>t</mi><mo>&lt;</mo><mi>L</mi><mi>.</mi></mtd></mtr></mtable></mrow></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "Erabili bi ideia fisiko erraz, <math display=\"inline\"><mi>f</mi></math> eta <math display=\"inline\"><mi>h</mi></math> funtzioak kalkulatzeko: barra ez dela apurtzen (eta, beraz, <math display=\"inline\"><msup><mi>u</mi><mo>*</mo></msup></math> deformazioa jarraitua dela <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>v</mi><mi>t</mi></mrow></math> puntuan) eta erreferentzia-sistema horretan masa-zentroa geldi dagoela. Kalkulatu laborategian neurtutako <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> deformazio-eremua, <math display=\"inline\"><mrow><mi>τ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> esfortzu-eremua eta puntuen abiadura eta azelerazioa. Iruzkina egin partikula-sistema honek momentu lineala irabazteko erabiltzen duen metodoari."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/ca77e49bf8febd3d.svg",
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
           "html": "Irudiko kubo homogeneo eta isotropoa orekan dago, erakusten diren esfortzuen menpean. Youngen modulua eta Poissonen koefizientea <math display=\"inline\"><mi>E</mi></math> eta <math display=\"inline\"><mi>σ</mi></math> dira, hurrenez hurren."
          },
          {
           "mota": "testua",
           "html": "(a) Kalkulatu esfortzu- eta deformazio-tentsoreak, (b) bolumenaren deformazio unitarioa, (c) diagonal nagusien deformazio unitarioak. (d) Zer norabidetan da zero luzetarako deformazio unitarioa? (e) Nola aukeratu behar da <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math> elementu infinitesimala, pairatzen duen esfortzu osoa nulua izan dadin? (f) Eta pairatzen duen esfortzua normala izateko? (g) Eta pairatzen duen esfortzua tangentea izan dadin?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/30ef2e6d4aea7431.svg",
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
       "html": "Kubo homogeneo eta isotropo bat orekan dago, aldeetan aplikatutako esfortzuen menpean. Ardatz kartesiarrak kuboaren ertzen norabideetan aukeratzen badira, honela idazten da deformazio-tentsorea:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mfrac><mi>τ</mi><mi>E</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>σ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>σ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "(a) Marraztu aldeetan aplikatutako esfortzuak. (b) Kalkulatu bolumenaren deformazio unitarioa. (c) Nola aukeratu behar da <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math> elementu infinitesimala, pairatzen duen esfortzua normala izateko?"
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
       "html": "Solido homogeneo eta isotropo bat tentsioan egon daiteke puntu batean eta konpresioan beste batean? Zergatik?"
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
           "html": "Irudiko barra <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar handi konstantez ari da biratzen, plano horizontalean. Barraren bi erdi homogeneoen <math display=\"inline\"><mi>ρ</mi></math> dentsitateak eta zeharkako sekzio <math display=\"inline\"><mi>A</mi></math> azalerak berdinak dira eta Youngen moduluak <math display=\"inline\"><msub><mi>E</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>E</mi><mn>2</mn></msub></math>. Aurkitu <math display=\"inline\"><mrow><mi>τ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> esfortzua eta <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> deformazio-eremua. Noiz luzatzen da gehiago, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><msub><mi>E</mi><mn>2</mn></msub><mi>/</mi><mn>2</mn></mrow></math> denean ala <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><msub><mi>E</mi><mn>2</mn></msub></mrow></math> denean?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/098921d9d12e1611.svg",
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
           "html": "Irudiko paralelepipedoa orekan dago aplikatutako indarren eraginpean. Nolakoa izan behar du <math display=\"inline\"><mrow><msup><mi>F</mi><mo>′</mo></msup><mi>/</mi><mi>F</mi></mrow></math>, zatidurak bolumenaren deformazioa nulua izateko? Zein da orduan diagonal nagusien deformazio unitarioa?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/f4e6a285e82affbb.svg",
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
       "html": "Kalkulatu 4.134 problemako sokaren tentsioa eta egiaztatu zero dela sokaren bi muturretan. (Sokaren dentsitatea <math display=\"inline\"><mi>ρ</mi></math> da.) Non da maximoa tentsioa? Altzairuzkoa izan daiteke soka, Lurraren inguruan biratzen bada? Eta karbonozko nanohodi bat, honen dentsitatea <math display=\"inline\"><mrow><mn>1</mn><mspace width=\"0.167em\"></mspace><mn>300</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg m</mtext></mrow><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math> bada eta erresistentzia 63 GPa?"
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
       "html": "<strong>Zeruko kakoa.</strong>"
      },
      {
       "mota": "testua",
       "html": "Ekuatoreko puntu baten gainean kable uniforme bertikal bat dago, loturarik gabe, oreka erlatiboan. Zein da kablearen luzera? Non da maximoa kablearen tentsioa? Altzairuzkoa izan daiteke? Eta 10.32 problemako nanohodia?"
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>smallcaps[Fluidoen zinematika]</strong>"
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
       "html": "Fluido baten abiadura-eremua <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>z</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> moduan idazten da koordenatu kartesiarretan, <math display=\"inline\"><mi>C</mi></math> konstantearen funtzioan. Aurkitu korronte-lerroak, zabaltze-abiadura, bortizitatea eta azelerazioa."
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
       "html": "Fluido baten abiadura-eremua"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>ω</mi><mi>ρ</mi><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>ρ</mi><mo>≤</mo><mi>R</mi><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mrow><mi>ω</mi><msup><mi>R</mi><mn>2</mn></msup></mrow><mi>ρ</mi></mfrac><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>ρ</mi><mo>≥</mo><mi>R</mi></mtd></mtr></mtable></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "moduan idazten da koordenatu zilindrikoetan, <math display=\"inline\"><mi>ω</mi></math> eta <math display=\"inline\"><mi>R</mi></math> konstante positiboen funtzioan. Aurkitu korronte-lerroak, zabaltze-abiadura, bortizitatea eta azelerazioa."
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
       "html": "Fluido baten abiadura-eremua"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mfrac><mi>C</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "moduan idazten da koordenatu esferikoetan, <math display=\"inline\"><mi>C</mi></math> konstantearen funtzioan, <math display=\"inline\"><mrow><mi>r</mi><mo>&gt;</mo><mn>0</mn></mrow></math> balioetarako. Aurkitu korronte-lerroak, zabaltze-abiadura, bortizitatea eta azelerazioa."
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
           "html": "Hodi hurbiltzaile baten sekzioaren diametroaren aldaketa lineala da. Barruan isurtzen ari den fluidoa, ideala eta konprimaezina da. Emaria <math display=\"inline\"><mi>Q</mi></math> bada, zein izango da luzetarako azelerazioa diametroa aldatzen hasten den puntutik <math display=\"inline\"><mi>x</mi></math> distantziara? <em>Oharra</em>: Eman hurbilketa onean abiaduraren luzetarako osagaia ez dela zentrotik neurtutako distantziaren menpekoa: <math display=\"inline\"><mrow><mi>∂</mi><msub><mi>v</mi><mi>x</mi></msub><mi>/</mi><mi>∂</mi><mi>y</mi><mo>≈</mo><mi>∂</mi><msub><mi>v</mi><mi>x</mi></msub><mi>/</mi><mi>∂</mi><mi>z</mi><mo>≈</mo><mn>0</mn></mrow></math>. (Hurbilketa hau ona da <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>r</mi><mn>2</mn></msub><mo>≪</mo><mi>l</mi></mrow></math> denean.)"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/3bd08655199de550.svg",
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
       "html": "Patio bat zeharkatu behar duzu, ez duzu euritakorik eta euria ari du, haizerik gabe. Ahal den gutxien bustitzeko, nola joango zara, korrika eginez ala ibiliz?"
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>smallcaps[Hidrostatika]</strong>"
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
           "html": "Irudiko hodi bertikala <math display=\"inline\"><mi>ρ</mi></math> dentsitateko likidoz beteriko azelerometroa da. Adieraz ezazu <math display=\"inline\"><mi>a</mi></math> azelerazioa beste parametroen bidez, sistema oreka dinamikora heldu ondoren."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/11460e53ac7d6bfd.svg",
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
           "html": "<strong>Paradoxa hidrostatikoa.</strong>"
          },
          {
           "mota": "testua",
           "html": "«Irudiko bi ontzi itxi berdinak ur beterik daude. Bien oinarrietan, gainean duten uraren altuera berdina denez, presioa berdina da eta, beraz, ezkerrekoaren oinarri zabalagoan indar handiagoa eragiten da. Beraz, ezkerreko ontziaren pisua handiagoa da. Bestalde, hori ezinezkoa da, bi ontziak berdinak baitira. Hortaz, hidrostatikaren oinarrizko legea gaizki dago.» Zer uste duzu zuk?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/aeb0556fe79a7964.svg",
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
           "html": "Irudiko ur-andelaren balbula, masa arbuiagarriko esfera da, hondoko zulo zirkularra estaltzen duena. Esfera eta zuloaren arteko ukipen-zirkuluak bertikaletik neurtutako <math display=\"inline\"><mi>φ</mi></math> angelua definitzen du eta ur-azala esferako goiko puntutik <math display=\"inline\"><mi>h</mi></math> distantziara dago."
          },
          {
           "mota": "testua",
           "html": "(a) Kalkulatu urak esferako puntuetan eragiten duen presioa. (b) Aurkitu esferak pairatzen duen indar bertikal osoa. Arkimedesen printzipioa erabiliz kalkula daiteke? (c) Zein da indar bertikal hori <math display=\"inline\"><mrow><mi>φ</mi><mo>→</mo><mi>π</mi></mrow></math> limitean (hau da, zulorik ez dagoenean)? (d) Nolakoa izan behar du <math display=\"inline\"><mi>h</mi></math> garaierak <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>3</mn><mi>π</mi><mi>/</mi><mn>4</mn></mrow></math> denean, ura zulotik ez isurtzeko?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/0a1eff497e789ae3.svg",
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
       "html": "text(size: 10pt, fill:berdea)[<strong>10.41 IRUDIA</strong>  Buruz behera jarritako edalontzia (ikus 10.42 problema).]"
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
       "html": "Edalontzi batean ura dago eta ahoa kartoi mehe batez estaltzen da. Edalontzia buruz behera jarri ondoren, kartoia askatzen bada, ez da jausten: ura barruan geratzen da (ikus 10.41 irudiko argazkiak). Nola azal daiteke fenomeno hau?"
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
           "html": "Urez beteriko ontzia aldapan behera doa. Plano aldapatsua oso luzea bada eta planoaren eta ontziaren arteko marruskadura-koefizientea <math display=\"inline\"><mrow><mi>μ</mi><mo>&lt;</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>, zein izango da ur-azalaren eta horizontalaren arteko <math display=\"inline\"><mi>φ</mi></math> angelua?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/78b6f8e261d8d93e.svg",
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
           "html": "<strong>Egia ala gezurra?</strong>"
          },
          {
           "mota": "testua",
           "html": "«Irudiko ontzian olioa eta ura ondo nahastu ondoren, hondoko presioa neurtu da. Ontzia geldi utzita, olioa eta ura bereizi direnean hondoan neurtzen den presioa txikiagoa da.»"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/8336e4fa5776862c.svg",
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
           "html": "<strong>Izar-eredurik bakunena (I).</strong>"
          },
          {
           "mota": "testua",
           "html": "Fluido baten esfera homogeneo bat oreka hidrostatikoan dago, espazio hutsean, beste gorputz guztietatik oso urrun. Fluidoaren masa <math display=\"inline\"><mi>m</mi></math> da eta esferaren erradioa <math display=\"inline\"><mi>R</mi></math>. Presioa kalkulatzeko eskatu zitzaionean, honela erantzun zuen ikasle batek:"
          },
          {
           "mota": "testua",
           "html": "«Kontsidera dezagun <math display=\"inline\"><mi>r</mi></math> eta <math display=\"inline\"><mrow><mi>r</mi><mo>+</mo><mi>d</mi><mi>r</mi></mrow></math> erradioen arteko geruza esferiko infinitesimala. Barruko azalean kanporanzko indar elastikoa <math display=\"inline\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da eta kanpoko azalean barruranzko <math display=\"inline\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>d</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>4</mn><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>d</mi><mi>r</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. Gainera, <math display=\"inline\"><mrow><mi>ρ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mi>d</mi><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi></mrow></math> pisua dugu. Ondorioz, oreka-baldintza hauxe da:"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mn>4</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>4</mn><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>d</mi><mi>r</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>d</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>4</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mi>ρ</mi><mi>g</mi><mi>d</mi><mi>r</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "Hemen Taylorren garapena egiten badugu, eta eremu grabitatorioaren modulua <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>π</mi><mi>G</mi><mi>ρ</mi><mi>r</mi></mrow></math> dela hartzen badugu kontuan, hauxe lortzen da:"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>p</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>r</mi><mi>d</mi><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>π</mi><mi>G</mi><msup><mi>ρ</mi><mn>2</mn></msup><msup><mi>r</mi><mn>3</mn></msup><mi>d</mi><mi>r</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>r</mi><msup><mi>p</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>π</mi><mi>G</mi><msup><mi>ρ</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>π</mi><mi>G</mi><msup><mi>ρ</mi><mn>2</mn></msup><mfrac><mrow><msup><mi>R</mi><mn>4</mn></msup><mo>−</mo><msup><mi>r</mi><mn>4</mn></msup></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>ρ</mi><mo>≡</mo><mfrac><mrow><mn>3</mn><mi>m</mi></mrow><mrow><mn>4</mn><mi>π</mi><msup><mi>R</mi><mn>3</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "Cauchy eta Eulerren ekuazio diferentzial erraz bat (ikus [46]) ebatzi dugu, azalean presioa zero dela adierazten duen mugalde-baldintzarekin batera.» (a) Lortutako emaitza onartezina da. Zergatik? (b) Zer dago gaizki egindako arrazoibidean?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/9b0048616744913e.svg",
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
       "html": "<strong>Izar-eredurik bakunena (II).</strong>"
      },
      {
       "mota": "testua",
       "html": "Ebatzi 10.45 problema. Zein izango litzateke presio maximoa, esferaren masa eta erradioa Lurrarenak balira?"
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
           "html": "<math display=\"inline\"><mi>R</mi></math> erradioko ontzi zilindriko batean <math display=\"inline\"><mi>ρ</mi></math> dentsitateko fluidoa dago. Fluidoaren azaletik <math display=\"inline\"><mi>h</mi></math> sakonera dagoen zulo zirkularra <math display=\"inline\"><mi>r</mi></math> erradioko tapoi zilindriko batez itxita dago. Kalkulatu tapoia <math display=\"inline\"><mi>l</mi></math> distantziara sartzeko egin behar den lana. <em>Oharra</em>: Arbuiatu marruskadura."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/8222fac5682767ba.svg",
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
           "html": "<strong>Newtonen ontzia (I).</strong>"
          },
          {
           "mota": "testua",
           "html": "Kontsidera dezagun 2.55 problemako ontzi birakaria. Geldi dagoenean uraren sakonera <math display=\"inline\"><mi>h</mi></math> da eta uraren dentsitatea <math display=\"inline\"><mi>ρ</mi></math>. Aukeratu koordenatu polar zilindrikoak hondoko erdiaren inguruan. (a) Orokortu (10.188) legea <math display=\"inline\"><mrow><mi>ω</mi><mo>≠</mo><mn>0</mn></mrow></math> kasura. (b) Erabili (B.18) gradientea presio-eremua kalkulatzeko. (c) Berreskuratu 2.55 problemako emaitza, ur-azalaren ekuazioa kalkulatuz."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/d54d6fd70230457b.svg",
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
       "html": "<strong>smallcaps[Arkimedesen printzipioa]</strong>"
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
       "html": "Guztiz beterik dagoen edalontzi baten ur gainean izotz-kubo batzuk daude. Froga ezazu izotza urtzean ez dela tantarik ere galduko (edaten hasi ez bagara ere). Zer gertatzen da izotzean aire-burbuilak badaude? Eta harea-pikorrak badaude?"
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
       "html": "Izozmendi paralelepipediko baten garaieraren zortziren bat ur gainean badago, zein da bere dentsitatea?"
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
       "html": "Istorioak dioenez, Arkimedesek bere printzipioa aurkitu zuen (bainuontzian zegoela) Sirakusako erregeak planteatu zion problema ebazten saiatzen ari zenean. Izan ere, erregeak uste zuen koroa egiteko emandako urretik zati bat zilarrarekin ordezkatua izan zela. Koroaren pisua airean 9.8 N bazen eta ur azpian 9.2 N, zein zen koroaren konposizioa? <em>Oharra</em>: Onartu aleazio baten bolumena osagaien bolumenen batura dela."
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 10pt, fill:berdea)[<strong>10.42 IRUDIA</strong>  Descartesen urpekaria (ikus 10.52 problema).]"
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
       "html": "<strong>Descartesen urpekaria.</strong>"
      },
      {
       "mota": "testua",
       "html": "Plastikozko ur-botila batean ketchup-poltsatxo bat flotatzen ari da, 10.42 argazkian ikusten den bezala. Tapoia ipini ondoren, botilaren horma estutzen bada, poltsatxoa urperatu egiten da, hondoraino heldu arte. Nola azal daiteke fenomeno hau?"
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
           "html": "Enbor bat ur gainean dago irudian erakusten den moduan. Zein da egurraren dentsitate erlatiboa?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/0600c3c44b422a14.svg",
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
       "html": "Igerileku batean txalupa bat dago. Barruan zegoen harri handi bat uretara botatzean, zer gertatuko zaio ur-mailari: igoko da, jaitsiko da ala berdin geratuko da?"
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
           "html": "<math display=\"inline\"><mi>r</mi></math> erradioko hodi arin baten <math display=\"inline\"><mi>L</mi></math> luzerako zatia sartu da bertikalean uretan. Beheko muturrean <math display=\"inline\"><mi>ρ</mi></math> dentsitate espezifikoko disko bat jarri da, ura hodian sar ez dadin. Zein da <math display=\"inline\"><mi>L</mi></math>-ren balio minimoa horretarako? Ura hodian isurtzen hasten bada, zein izan daiteke <math display=\"inline\"><mi>h</mi></math> altuera maximoa diskoa bere lekuan geratzeko?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/812d55d4c5bf5419.svg",
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
           "html": "Irudiko bi esferen bolumena 10 cm<sup>3</sup> da eta goikoa igeri dago, beheko erdia urperatuta egon arren. Beheko esferaren masa goikoarenaren hirukoitza da. Aurkitu bi esferak lotzen dituen hariaren tentsioa. Zein da esfera bakoitzaren masa?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/6486f303ba378edd.svg",
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
       "html": "Xaboi-burbuila bat helioz bete da eta airean flotatzen du. Zeinen masa da handiena, xaboiarena ala helioarena?"
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>smallcaps[Fluido idealak]</strong>"
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
       "html": "Hegazkin-hego baten azpian airearen abiadura <math display=\"inline\"><mrow><mn>90</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> bada, zein izan beharko du abiadurak hegoaren gainean, <math display=\"inline\"><mrow><mn>1000</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> N m</mtext></mrow><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math>-ko eustea izateko? <em>Oharra</em>: Eustearen benetako azalpena hain erraza ez bada ere, erabili Bernoulliren teorema abiadura balioztatzeko."
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
           "html": "Irudiko venturimetroan fluido ideal konprimaezinaren emaria <math display=\"inline\"><mi>Q</mi></math> da. Zein izango da <math display=\"inline\"><mi>h</mi></math> altuera? <em>Oharra</em>: Egin hurbilketak."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/56fedf9fcf5112b6.svg",
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
           "html": "Irudiko hodiaren sekzioa 36 cm<sup>2</sup> da <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> sekzioan eta 9 cm<sup>2</sup>  <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math>-an. 5 s-tan 27 litro ur isurtzen dira. Kalkulatu hurrengo magnitudeak: (a) Fluidoaren abiadura handiena eta txikiena. (b)  <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> puntuetako presioen arteko kendura. (c) Merkuriozko zutabeen altueren arteko diferentzia."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/5a3101aa95f9a1fe.svg",
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
           "html": "Hodiaren sekzio normalaren azalera 500 cm<sup>2</sup> da 1 puntuan eta 250 cm<sup>2</sup> 2 delakoan. Kalkula itzazu 1 puntuan neurturiko presio manometrikoa eta emaria."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/4d177f4fe8e118c6.svg",
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
           "html": "<strong>Prandtlen hodia.</strong>"
          },
          {
           "mota": "testua",
           "html": "Irudiko tutuan airea sar daiteke ezkerreko ahotik eta goiko zulotik. Barruan merkurioa dago. Nola erabil daiteke tresna airearekiko abiadura neurtzeko?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/2b92c381ca8dfbe9.svg",
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
       "html": "Balioztatu eraikin baten 70 m<sup>2</sup>-ko sabai lau horizontalean 100 km/h-ko urakan batek eragiten duen indar osoa."
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
       "html": "Ganbera handi batean dagoen uraren gaineko airearen presioa 2 atm da. Uraren azalaren azpian, metro batera, horman egindako 10 cm<sup>2</sup>-ko zuloaren emari-koefizientea 0.62 da. Zein da irteten den ur-zorrotadaren abiadura? Kalkulatu ganberan eragindako indar horizontala."
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
       "html": "<strong>Magnus efektua.</strong>"
      },
      {
       "mota": "testua",
       "html": "Azter dezagun abiadura angeluar konstantez bere ardatz tinkoaren inguruan biratzen ari den zilindro bat inguratzen duen jario ideal konprimaezin irrotazionala (ikus 10.28 irudia). Froga ezazu soluzio bat"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>φ</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>φ</mi><mo>=</mo><mi>−</mi><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><mi>r</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "dela, zilindroaren ardatzaren inguruko <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> koordenatu zilindrikoak aukeratzen badira."
      },
      {
       "mota": "testua",
       "html": "Egiaztatu"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mi>β</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><mi>r</mi><mi>a</mi></mfrac><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "soluzioa dela eta ondorioztatu bien batura ere soluzioa dela. Nolako mugalde-baldintzak betetzen dira? Bi soluzioen batura erabiltzen bada, zein da zilindroak pairatzen duen indar osoa? Kalkulatu abiadura-eremuaren zirkulazioa."
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
           "html": "Irudiko intsektizida-lainoztagailuaren enboloaren diametroa <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>60</mn></mrow></math> mm da eta <math display=\"inline\"><mi>S</mi></math> sarrera-hodiarena <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>2</mn></mrow></math> mm. Azken honen altuera, intsektizidaren azaletik neurtua, <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>90</mn></mrow></math> mm bada, balioztatu enboloaren abiadura minimoa beste muturretik irteten den aireak intsektizida eraman dezan."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/be7e5e871a9b5b59.svg",
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
       "html": "Jario egonkor batean abiadura bektorea konstantea da puntu bakoitzean. Azeleratua izan daiteke fluidoaren partikulen higidura?"
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
       "html": "Ur-andel itxi batean uraren garaiera <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>1</mn></mrow></math> m da eta bere azalean presio manometrikoa <math display=\"inline\"><mrow><msub><mi>p</mi><mi>m</mi></msub><mo>=</mo><mn>1</mn></mrow></math> atm. Andelaren oinarria zorutik <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mn>2</mn></mrow></math> m-ra dago eta horma bertikalean, oinarriaren parean, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math> cm<sup>2</sup>-ko azalerako zulo zirkular bat egiten da. (a) Non jotzen du zorua ur-zorrotadak? (b) Zein da zorrotadak zoruan eragiten duen indar bertikala? (c) Eta andelean eragindako indar horizontala?"
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
           "html": "Irudiko ur-andelean pistoi bat <math display=\"inline\"><mi>S</mi></math> azalerako hodi horizontalean <math display=\"inline\"><mi>v</mi></math> abiadura konstantez higitzen denean, <math display=\"inline\"><mi>A</mi></math> azalerako hodi bertikaletik ura irteten da erakusten den garaieraraino. Kalkulatu <math display=\"inline\"><mi>v</mi></math> abiadura eta pistoian aplikatu behar den <math display=\"inline\"><mi>F</mi></math> indarra (marruskadura arbuiagarria bada). Nola aukeratu behar da <math display=\"inline\"><mi>A</mi></math> azalera, <math display=\"inline\"><mi>S</mi></math>, <math display=\"inline\"><msub><mi>h</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>h</mi><mn>2</mn></msub></math> aldatu gabe, pistoian egin behar den potentzia minimoa izateko? Eta maximoa izateko? <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>S</mi></math> azalerak eta <math display=\"inline\"><mrow><msub><mi>h</mi><mn>1</mn></msub><mo>+</mo><msub><mi>h</mi><mn>2</mn></msub></mrow></math> garaiera osoa aldatzen ez badira, nola aukeratu behar da <math display=\"inline\"><msub><mi>h</mi><mn>1</mn></msub></math> balioa aipaturiko potentzia maximoa eta minimoa lortzeko?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/772ac5a7584ad30f.svg",
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
           "html": "Irudiko ur-andeleko horman zulo txiki bat egiten da. Zein izan behar du zuloaren garaierak zoruan zorrotadaren irispide horizontala maximoa izan dadin? Zein da azken honen balioa? Hiru zulo egiten badira, irudia gaizki dago. Zergatik? Zein da benetako irudia? <em>Oharra</em>: Egin sinplifikazio-hipotesi egokiak (hala nola uraren <math display=\"inline\"><mi>h</mi></math> altuera oso astiro aldatzen dela)."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/0538528a0eb94c50.svg",
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
           "html": "<strong>Sifoia.</strong>"
          },
          {
           "mota": "testua",
           "html": "Ontzi batetik likidoa ateratzeko hura makurtu gabe erabiltzen da tresna hau. Hasieran hodia likidoz beterik badago eta irudian erakusten den moduan ontzian sartzen bada, <math display=\"inline\"><mi>A</mi></math> muturra baino beherago dagoen <math display=\"inline\"><mi>C</mi></math> puntutik irtengo da likidoa. Likidoaren dentsitatea <math display=\"inline\"><mi>ρ</mi></math> da eta biskositatea arbuiagarria. Zein da fluidoaren abiadura <math display=\"inline\"><mi>C</mi></math> puntuan? Eta presioa <math display=\"inline\"><mi>B</mi></math> punturik gorenean? Zein da <math display=\"inline\"><msub><mi>h</mi><mn>1</mn></msub></math> garaieraren baliorik handiena <math display=\"inline\"><mi>C</mi></math>-tik likidoa isurtzeko, <math display=\"inline\"><mi>d</mi></math> eta <math display=\"inline\"><msub><mi>h</mi><mn>2</mn></msub></math> balio ezagunetarako?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/94a1fb6fdc67f446.svg",
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
           "html": "Irudiko urmael zabalaren sakonera oso txikia da eta apurka-apurka ari da husten erakusten den zulotik. Haizea gogortzean ura isurtzen ez denean, zein da haizearen abiadura minimoa? Zer gertatzen da haizearen noranzkoa kontrakoa bada?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/8735a684b0142002.svg",
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
       "html": "Haizerik ez dabilenean, zenbat denbora behar da 10.72 problemako urmaela husteko, bere azalera <math display=\"inline\"><mi>S</mi></math> bada, zuloarena <math display=\"inline\"><mi>A</mi></math> eta emari-koefizientea <math display=\"inline\"><mi>C</mi></math>?"
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
       "html": "Ontzi zilindriko baten oinarriaren azalera <math display=\"inline\"><mi>S</mi></math> da. Urez bete ondoren, oinarrian <math display=\"inline\"><mi>A</mi></math> azalerako zulotxo bat egiten bada, nola aldatuko da ur-azalaren abiadura? Handituz ala txikituz joango da? Zein da bere azelerazioaren modulua? Zergatik onartu behar da <math display=\"inline\"><mrow><mi>A</mi><mo>≪</mo><mi>S</mi></mrow></math> dela?"
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
           "html": "Irudiko hodi horizontaletan barrena fluido ideal bat isurtzen ari da. Emaria <math display=\"inline\"><mi>Q</mi></math> da, dentsitatea <math display=\"inline\"><mi>ρ</mi></math>, presioa <math display=\"inline\"><mi>p</mi></math> eta zeharkako sekzioaren azalera <math display=\"inline\"><mi>S</mi></math>. Grabitatea arbuiatzen bada, zeintzuk dira fluidoak <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> ukondoetan eragiten dituen indarrak?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/03f8a587070e9101.svg",
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
           "html": "Irudiko bi hodi bertikaletan uraren altuera desberdina da hasieran, <math display=\"inline\"><mi>C</mi></math> puntuko diafragma itxiaren ondorioz. Une batean diafragma zulatzen da. Aplikatu Bernoulliren teorema <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> puntuen artean eta frogatu kontraesan batera heltzen dela. Zergatik?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/52d0e62c7e553acb.svg",
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
           "html": "Irudiko hodian merkurioa isuri ondoren abiadura angeluar konstantez birarazten da. Presio atmosferikoa <math display=\"inline\"><msub><mi>p</mi><mn>0</mn></msub></math> da eta merkurioaren dentsitatea <math display=\"inline\"><mi>ρ</mi></math>. Hodiaren diametroa konstantea eta <math display=\"inline\"><mi>L</mi></math> baino askoz txikiagoa da. Oreka erlatiboa lortu denean, zeintzuk izango dira zutabeen altuerak? Eta presioa <math display=\"inline\"><mi>x</mi></math> abszisan? Aplika daiteke Bernoulliren teorema 1 eta 2 puntuen artean? Zergatik?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/4f68e78be888bdce.svg",
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
           "html": "Irudiko ur-andela hodi estu baten bidez husten ari den bitartean, betetzen ari da goian duen iturri baten bidez. Horrela, hoditik neurturiko uraren <math display=\"inline\"><mi>h</mi></math> garaiera ez da aldatzen. Andelaren, plataformaren eta gurpilen masa osoa <math display=\"inline\"><mi>m</mi></math> da. Kalkulatu iturriaren <math display=\"inline\"><mi>Q</mi></math> emaria eta hormatik andela lotzen duen kablearen <math display=\"inline\"><mi>T</mi></math> tentsioa. <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean kablea ebakitzen bada, zein izango da andelaren abiadura <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math> uneetan? <em>Oharrak</em>: Arbuiatu marruskadura eta eman jarioa ideala dela. Uraren dentsitatea <math display=\"inline\"><mi>ρ</mi></math> da."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/c8b6822274dedf52.svg",
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
           "html": "Irudiko hodiak simetria zilindrikoa du baina bere erradioa"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><mrow><mi>d</mi><mi>z</mi></mrow></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ktea</mtext></mrow><mi>.</mi></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "legearen arabera aldatzen da simetria-ardatzaren inguruko koordenatu zilindrikoetan. Egiaztatu (10.204)–(10.205) ekuazioen soluzioa dela ondokoa:"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mfrac><mrow><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ρ</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ρ</mi><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>r</mi><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>≤</mo><mi>ρ</mi><mo>≤</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "non <math display=\"inline\"><mi>C</mi></math> konstantea den. Nolako mugalde-baldintza betetzen da <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mi>r</mi></mrow></math> horman? Zein da emaria?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/00e7b6d853015470.svg",
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
           "html": "Hodi estu bertikal batetik ari da husten astiro-astiro irudiko ur-tanga. Hodiaren sekzio normalaren azalera <math display=\"inline\"><mi>A</mi></math> da eta ur-tangarena <math display=\"inline\"><mi>S</mi></math>."
          },
          {
           "mota": "testua",
           "html": "(a) Erabili <math display=\"inline\"><mrow><mi>A</mi><mo>≪</mo><mi>S</mi></mrow></math> dela urak hodiaren mutur askean duen abiadura kalkulatzeko. (b) Baliatu aurreko emaitzaz ur-azalaren abiadura aurkitzeko. (c) Zein izango da une bakoitzean zorrotadako ur-tanten garaiera maximoa? (b) Hasieran <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>h</mi></mrow></math> bada, zenbat denbora beharko da ur-isuria amaitzeko?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/ff6b0f3d0f78a150.svg",
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
           "html": "Iturri batetik isurtzen den ur-zorrotada egonkorra eta laminarra bada, nolakoa da erradioaren eta <math display=\"inline\"><mi>x</mi></math> altueraren arteko <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> menpekotasuna, iturriaren ahoan uraren abiadura <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> bada? Erregela batez baliatuz, nola kalkula daitezke <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> eta emaria?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/8397f7cdf37b8290.svg",
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
       "html": "<strong>Newtonen ontzia (II).</strong>"
      },
      {
       "mota": "testua",
       "html": "Kalkulatu bortizitatea 10.48 problemako ontzi birakariaren kasuan."
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
           "html": "<strong>Newtonen ontzia (III).</strong>"
          },
          {
           "mota": "testua",
           "html": "2.55 eta 10.48 problemetako ontzi birakariaren kasuan, aplika daiteke Bernoulliren teorema ur-azaleko <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> puntuen artean? Zergatik?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/e8adf0a2ab2a556b.svg",
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
           "html": "Irudiko ontzi zilindrikoa zabalik dago eta zoru horizontalean marruskadurarik gabe higi daitekeen plataforma batean finkatua. Ontziaren oinarriaren azalera <math display=\"inline\"><mi>S</mi></math> da. Plataforma hormarekin loturik dago, barra horizontal elastiko baten bidez. Azken honen Youngen modulua <math display=\"inline\"><mi>E</mi></math> da eta sekzio normalaren azalera <math display=\"inline\"><mi mathvariant=\"normal\">Σ</mi></math>. Ontzia astiro-astiro ari da husten zoruaren gainean <math display=\"inline\"><mrow><mi>A</mi><mo>≪</mo><mi>S</mi></mrow></math> azalerako sekzio normaleko hodi horizontal batetik."
          },
          {
           "mota": "testua",
           "html": "Kronometroa martxan jartzean, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, ur-azala deskarga-hoditik <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>h</mi></mrow></math> garaierara dago eta plataforma hormatik <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>d</mi></mrow></math> distantziara. (a) Kalkulatu uraren abiadura hodiaren ahoan, ontzian eragindako erreakzio horizontala eta hormaren eta plataformaren arteko <math display=\"inline\"><mi>x</mi></math> distantzia, <math display=\"inline\"><mi>h</mi></math>, <math display=\"inline\"><mi>d</mi></math>, <math display=\"inline\"><mi>S</mi></math>, <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi mathvariant=\"normal\">Σ</mi></math> datuen, uraren <math display=\"inline\"><mi>ρ</mi></math> dentsitatearen eta <math display=\"inline\"><mi>y</mi></math> altueraren funtzioan. (b) Kalkulatu <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eboluzio denboralak. <em>Oharra</em>: Egin zentzuzko hurbilketak."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/873fedb4cc85923e.svg",
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
           "html": "Irudiko tangan <math display=\"inline\"><mi>F</mi></math> indar konstantea aplikatzen da <math display=\"inline\"><mi>S</mi></math> zeharko sekzioko pistoian. Ura <math display=\"inline\"><mrow><mi>A</mi><mo>≪</mo><mi>S</mi></mrow></math> zeharkako sekzioko hoditik isurtzen da. Tanga marruskadurarik gabe higi daiteke zoru horizontalean eta barra baten bidez dago lotuta horma zurrunari. Barraren zeharkako sekzioa <math display=\"inline\"><mi mathvariant=\"normal\">Σ</mi></math> da, luzera <math display=\"inline\"><mi>L</mi></math>, Youngen modulua <math display=\"inline\"><mi>E</mi></math> eta Poissonen koefizientea <math display=\"inline\"><mi>σ</mi></math>. Kalkulatu barrak pairatutako esfortzua. Trakzioa ala konpresioa da? Nola deformatzen da barra <math display=\"inline\"><mi>F</mi></math> aplikatu baino lehenagoko oreka-egoeratik? Nola aldatzen da bolumena? Egin hurbilketak."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/397ec39c5574f2e0.svg",
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
       "html": "Ontzi zilindriko batek zulo bat du hondoan eta iturri bat gainean. Hutsik badago, zuloa itxita eta iturria zabalik, <math display=\"inline\"><msub><mi>T</mi><mn>1</mn></msub></math> denbora behar du betetzeko. Beterik badago, iturria itxita eta zuloa zabalik <math display=\"inline\"><msub><mi>T</mi><mn>2</mn></msub></math> denbora behar du husteko. Ontziaren altuera <math display=\"inline\"><mi>h</mi></math> bada, nola eta noiz lor daiteke egoera geldikor bat?"
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
           "html": "Irudiko klepsidrak (ur-erlojuak) ardatz bertikalaren inguruko biraketa-simetria du. Nola aldatu behar du zabalerak altuerarekin, goiko erdian hango ur-mailaren altueraren denborarekiko aldaketa uniformea izateko?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/ff378596ede977dd.svg",
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
       "html": "<strong>smallcaps[Fluido biskatsuak]</strong>"
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
           "html": "Irudiko biskosimetroan, <math display=\"inline\"><mrow><mi>h</mi><mo>≪</mo><mi>R</mi></mrow></math> da eta <math display=\"inline\"><mi>m</mi></math> masako konoaren <math display=\"inline\"><mi>ω</mi></math> abiadura angeluarra konstante mantentzeko egin behar zaion <math display=\"inline\"><mi>N</mi></math> indar-momentua neurtzen da. Sinplifikazio-hipotesi egokiak eginez, kalkulatu fluidoaren <math display=\"inline\"><mi>η</mi></math> biskositate-koefizientea."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/00cef832bd274ae1.svg",
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
           "html": "Fluido biskatsu bat isurtzen ari da, grabitatearen eraginpean, luzera handiko bi xafla bertikal paraleloen artean, irudian erakusten den bezala. Fluidoaren dentsitatea <math display=\"inline\"><mi>ρ</mi></math> da eta biskositate-koefizientea <math display=\"inline\"><mi>η</mi></math>. Jarioa egonkorra eta laminarra da. (a) Idatzi <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi></mrow></math> lodierako geruza bertikal zentratuaren higidura-ekuazioa, pisua eta bi aldeetan aplikatutako biskositate-indarrak kontuan hartuz (goiko eta beheko muturretan presioa atmosferikoa da). Erabili mugalde-baldintza egokiak xaflen arteko bitarteko planotik <math display=\"inline\"><mi>x</mi></math> distantziara fluidoaren abiadura hauxe dela frogatzeko:"
          },
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mi>ρ</mi><mi>g</mi></mrow><mrow><mn>2</mn><mi>η</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "(b) Kalkulatu <math display=\"inline\"><mi>L</mi></math> luzera eta <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> lodiera dituen azalera horizontalean zehar isurtzen den emaria."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/3b89e75d8608eb47.svg",
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
       "html": "<strong>Muga-abiadura.</strong>"
      },
      {
       "mota": "testua",
       "html": "Kontsideratu fluido batean grabitatearen eraginpean higitzen ari den esfera zurrun txiki bat, eta eman <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℛ</mi><mo>&lt;</mo><mn>0.2</mn></mrow></math> dela. Frogatu esferaren abiadurak, kalkulatu behar den muga-balio batera jotzen duela. Zurruntzat jotzen baditugu euriaren ur-tantak, nolakoak izan daitezke aurreko azterketa aplikatu ahal izateko?"
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
       "html": "<strong>Millikanen esperimentua.</strong>"
      },
      {
       "mota": "testua",
       "html": "Erabili 10.90 problema Millikanen esperimentuan neurtutako (10.261) kargaren adierazpenean tantaren <math display=\"inline\"><mi>a</mi></math> erradioa muga-abiadurarekin ordezkatzeko."
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
       "html": "Erabil dezagun Navier eta Stokesen ekuazioa 10.32 irudiko kasuan. (a) Aukeratu hodiaren simetria-ardatzaren inguruko koordenatu polar zilindrikoak. (b) Erabili problemaren simetria eta fluidoa konprimaezina dela, abiadura-eremuaren egitura aurkizeko jarioa egonkorra denean. (c) Erabili (B.46) adierazpena Navier eta Stokesen ekuazioaren osagaiak idazteko. (d) Frogatu <math display=\"inline\"><mrow><mi>∂</mi><mi>p</mi><mi>/</mi><mi>∂</mi><mi>ρ</mi><mo>=</mo><mn>0</mn></mrow></math> dela eta <math display=\"inline\"><mrow><mi>d</mi><mi>p</mi><mi>/</mi><mi>d</mi><mi>z</mi></mrow></math> konstantea. (e) Integratu abiaduraren ekuazioa eta, erregulartasun- eta mugalde-baldintza egokiak erabiliz, berreskuratu Poiseuilleren legea."
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
       "html": "<strong>Biskoelastikotasuna.</strong>"
      },
      {
       "mota": "testua",
       "html": "Tentsiopeko harrien portaera ulertzeko, Kelvinek proposatu zuen 1890ean deformazio biskoelastikoaren lehen eredua, solido elastikoen eta fluido biskatsuen ezaugarriak batuz. Deformatu gabe dagoen harri homogeneo paralelepipediko baten aurkako bi aldeetan <math display=\"inline\"><mi>τ</mi></math> trakzio-esfortzu konstantea hasten da aplikatzen <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean. Aldiune bakoitzean tentsio hori bi zatiren bidez egiten da erabiltzen da: ordu arte lortutako deformazioa mantentzeko eta erresistentzia biskatsua gainditzeko (deformazioa handitu ahal izateko). Beraz, deformazio unitarioa <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bada, honela idazten da prozesuaren eboluzio-ekuazioa (Youngen modulua <math display=\"inline\"><mi>E</mi></math> bada eta biskositate-koefizientea <math display=\"inline\"><mi>η</mi></math>):"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>τ</mi><mo>=</mo><mi>E</mi><mi>u</mi><mo>+</mo><mi>η</mi><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Aurkitu <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, deskribatu deformazioaren eboluzioa eta eztabaidatu <math display=\"inline\"><mrow><mi>η</mi><mi>/</mi><mi>E</mi></mrow></math> zatiduraren esanahia. Iruzkina egin emaitzei."
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
           "html": "Ontzi zabal batean <math display=\"inline\"><mi>h</mi></math> sakonerako olioa dago. <math display=\"inline\"><mi>R</mi></math> erradioko diskoak olioaren azala ukitzen du eta <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez biratzen ari da. Olioaren dentsitatea <math display=\"inline\"><mi>ρ</mi></math> bada eta biskositate-koefizientea <math display=\"inline\"><mi>η</mi></math>, zein da motorrak eragindako indar-momentua? Eta potentzia?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/494297eff9e188f8.svg",
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
       "html": "Euria denean, zeintzuk erortzen dira arinago, tanta handiak ala txikiak?"
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>smallcaps[Gainazal-tentsioa]</strong>"
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
       "html": "Kapilar baten beheko muturra uraren azalaren azpitik dago, 10 cm-ra, eta barruan ura 4 cm-ra igo da. Nolako presioa aplikatu behar da goiko muturrean behekoan burbuila hemisferiko bat sortzeko?"
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
       "html": "Bi xafla handi paralelo bertikal likido batean sartzen badira, zein da barruko eta kanpoko likidoaren azalen arteko distantzia? (Xaflen arteko distantzia <math display=\"inline\"><mi>d</mi></math> da eta likidoaren dentsitatea, gainazal-tentsioa eta ukipen-angelua <math display=\"inline\"><mi>ρ</mi></math>, <math display=\"inline\"><mi>γ</mi></math> eta <math display=\"inline\"><mi>θ</mi></math>, hurrenez hurren.)"
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
       "html": "Merkurioa beirazko gainazal lau batean isurtzean sortzen den putzuaren lodiera uniformea da eta ez da aldatzen putzuaren tamainarekin. Kalkulatu aipaturiko lodiera."
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
           "html": "Hodi baten bi muturretan erradio desberdinetako xaboi-burbuilak sortu dira. Eztabaidatu hurrengo posibilitateen artean zein izango den gertatuko dena: (a) Burbuila handia txikituko da biak berdinak izan arte. (b) Handia hustuko da desagertu arte. (c) Txikia hustuko da desagertu arte. (d) Dauden moduan geratuko dira. (e) Bien erradioak oszilatzen hasiko dira."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/a646c297febc853d.svg",
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
           "html": "Beirazko bi xafla paraleloren artean <math display=\"inline\"><mi>D</mi></math> diametroko ur-disko bat dago. Xaflen arteko distantzia <math display=\"inline\"><mrow><mi>d</mi><mo>≪</mo><mi>D</mi></mrow></math> bada, zein da xaflak banantzeko egin behar den indar perpendikularra?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/1ef3a95b33720421.svg",
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
           "html": "Film likido batean gomazko begizta bat jartzen da. Barruko filma sastatzen denean, begizta luzatzen da, <math display=\"inline\"><mi>R</mi></math> erradioko zirkunferentzia bat osatu arte. Begiztaren luzera propioa <math display=\"inline\"><mi>L</mi></math> da, zeharkako sekzioaren azalera <math display=\"inline\"><mi>S</mi></math> eta Youngen modulua <math display=\"inline\"><mi>E</mi></math>. Zein da likidoaren gainazal-tentsioa?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/909227d8ff235ceb.svg",
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
           "html": "Kapilar bertikal bat uretan <math display=\"inline\"><mi>l</mi></math> sakoneran sartzen denean, ur-zutabearen garaiera <math display=\"inline\"><mi>h</mi></math> da, irudian ikusten den moduan. Beheko muturra estali ondoren, kapilarra uretatik ateratzen da. Orain berriro irekitzen bada, zein izango da <math display=\"inline\"><mi>h</mi></math> geratuko den zutabearen altuera?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/feddc3fb525f5d43.svg",
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
           "html": "Burdin kubo bat parafinaz koipeztatu ondoren ur gainean dago, goiko aldea ur-azalaren garaieran, irudian erakusten den bezala. Zein da kuboaren ertzen luzera?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/13de16462d1a5158.svg",
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
           "html": "<math display=\"inline\"><mi>a</mi></math> aldeko bi xafla karratu bertikal paralelo sartzen dira likido batean. Azken honen dentsitatea <math display=\"inline\"><mi>ρ</mi></math> da eta gainazal-tentsioa <math display=\"inline\"><mi>γ</mi></math>. Ukipen-angelua <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi></mrow></math> bada, zein da plaken arteko erakarpen-indarra?"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/1d38eb0607da44dd.svg",
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
       "html": "<strong>smallcaps[Denetarik]</strong>"
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
       "html": "10.4 problemako gomaz egindako 20 cm-ko aldeetako kubo bat, Mariana irletatik hurbil dagoen ozeano-fosarik sakonenean murgilarazten da. Zein izango da kuboaren bolumena 11000 m-ra? Altzairuzko kable batetik eseki daiteke kuboa? Zergatik?"
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
       "html": "Erabili mekanika deribatu partzialetako ekuazio hau ebazteko:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi>a</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>b</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>+</mo><mi>c</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<em>Oharra</em>"
      },
      {
       "mota": "testua",
       "html": ": <strong>adbekzio-ekuazioaren</strong> kasu partikular honetan, <math display=\"inline\"><mi>a</mi></math>, <math display=\"inline\"><mi>b</mi></math> eta <math display=\"inline\"><mi>c</mi></math> konstanteak dira."
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
       "html": "Erabili mekanika deribatu partzialetako ekuazio hau ebazteko:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>v</mi><mi>i</mi></msub><msub><mi>v</mi><mi>j</mi></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mi>i</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstanteak dira.</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Zein da uhin-ekuazio honen eta ohiko (9.5)-ren arteko desberdintasuna?"
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
       "html": "<math display=\"inline\"><mi>R</mi></math> erradioko aire-burbuila bat pausagunetik abiatzen da ur-azalerantz, <math display=\"inline\"><mrow><mi>H</mi><mo>≫</mo><mi>R</mi></mrow></math> sakoneratik. Balioztatu prozesuan askatzen den beroa."
      }
     ]
    }
   ]
  }
 ]
};
