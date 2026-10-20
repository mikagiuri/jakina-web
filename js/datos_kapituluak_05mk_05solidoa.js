/* JAKINA · kapitulua «B9.5 - Solido zurruna» (05mk_05solidoa), desde edicion2/kapituluak/05mk_05solidoa/05mk_05solidoa.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["05mk_05solidoa"] = {
 "gakoa": "05mk_05solidoa",
 "titulua": "JAKINA - B9 - Mekanika klasikoa - 5/10",
 "azala": "B9.5 - Solido zurruna",
 "azpititulua": "III. aroa - L2",
 "iturburua": "kapituluak/05mk_05solidoa/05mk_05solidoa.typ",
 "sarrera": [],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Solido zurruna",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Solido zurruna partikula-sistema errazenetakoa dugu<span class=\"j-oin\">[Euler hasi zen solido zurrunaren azterketa sistematikoa (xafla lauak kontsideratu zituen Descartesek lehenago).]</span>. Definizioak (hau da, puntuen arteko distantziak konstanteak izateak) ondorio baliagarria du: solidoaren higidura orokorra translazio baten eta biraketa baten konposizioa da. Hasteko, ardatz finko baten inguruko higidura erraza berrikusiko dugu. Zinematika aztertzean inertzia-tentsorearen kontzeptua sartu eta aztertu beharko dugu: fisikan tentsoreek duten erabilgarritasunaren adibiderik errazena da hau. Dinamika egiteko Eulerren ekuazioak oso baliagarriak izango dira, solidoaren sisteman inertzia-tentsorea konstantea baita (eta inertzia-matrizea diagonala)."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Definizioa eta higidura-ekuazioak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Partikula-sistema bat solido zurruna dela esaten da bere partikulen arteko distantziak aldatzen ez badira: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo></mrow></math> konstantea. Azter ditzagun definizio-baldintza honek dituen zenbait ondorio."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Askatasun-graduak"
    },
    {
     "mota": "testua",
     "html": "Solido zurrunaren askatasun-graduak (hau da, solidoaren puntu guztien posizioa zehazteko ezagutu behar diren magnitudeen kopurua) gehienez 6 direla ikusteko, kontsidera dezagun solidoarekin batera higitzen eta biratzen den erreferentzia-sistema bat. Sistema horretan, solidoaren definizioaren ondorioz, partikula bakoitzaren posizio-bektorea eta bere osagaiak konstanteak dira higiduran zehar. Beraz, sistemaren konfigurazioa beste erreferentzia-sistema batean ezagutzeko nahikoa da horretan solidoaren sisteman posizio eta orientazio erlatiboak ezagutzea, 2.3 atalean frogatu genuenez, horretarako aski dira 6 koordenatu: adibidez, jatorriaren posizioa zehazten duten 3 koordenatu kartesiarrak eta orientazio erlatiboa ematen duten Eulerren 3 angeluak."
    },
    {
     "mota": "irudia",
     "oina": "Solido zurrunaren konfigurazioa ezagutzeko metodoa.",
     "src": "media/irudiak/693a219b88fed822.svg",
     "zabalera": 160
    },
    {
     "mota": "testua",
     "html": "Zuzenean zen, ...ikus dezakegu nola eman daitezken (aldiune batean) solidoaren puntu guztien posizioak."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<math display=\"inline\"><mi>P</mi></math> puntu baten posizioa ezagutzeko, erreferentzia-sistema batean neurtutako <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mover><mrow><mi>O</mi><mi>P</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math> posizio-bektorearen hiru osagai independenteak behar dira."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Bigarren puntu baten posizioa ezagutzeko nahikoa da bi koordenatu gehiagorekin, aurreko puntutik neurtutako distantzia konstantea baita. Izan ere, bigarren puntua <math display=\"inline\"><msup><mi>P</mi><mo>′</mo></msup></math> bada, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>P</mi><msup><mi>P</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> distantzia ezaguta, <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mo>′</mo></msup></mrow></math> zuzenaren norabidea eta noranzkoa zehaztu behar dugu bakarrik, eta horretarako <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mover><mrow><mi>P</mi><msup><mi>P</mi><mo>′</mo></msup></mrow><mo accent=\"true\">→</mo></mover><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>P</mi><msup><mi>P</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> bektore unitarioaren bi osagai behar dira: hirugarrena <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><msubsup><mi>e</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>e</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>e</mi><mi>z</mi><mn>2</mn></msubsup><mo>=</mo><mn>1</mn></mrow></math> baldintzak emandakoa izango da."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Bi punturen posizioak ezagunak badira, puntu horiek definituriko zuzenaren inguruko biraketei dagokiena da geratzen den askatasun-gradu bakarra, eta biraketa horren balioa angelu bakarraren bidez deskribatzen da."
     ]
    },
    {
     "mota": "irudia",
     "oina": "Solido zurruna eta bi erreferentzia-sistemak.",
     "src": "media/irudiak/02a193d7f0564b04.svg",
     "zabalera": 230
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Abiadura-eremua"
    },
    {
     "mota": "testua",
     "html": "Kontsidera ditzagun solidoaren bi partikula edo solidorekin batera higitzen diren bi puntu geometriko<span class=\"j-oin\">[Adibidez, masa-zentroa solidoarekin batera higitzen da, jakina, baina ez du zertan solidoaren partikula baten posizioan egon. Gogoratu non dagoen masa-zentroa esfera huts baten kasuan.]</span>. Solidoarekin batera higitzen eta biratzen den <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> sisteman puntu horien <math display=\"inline\"><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn><mo>′</mo></msubsup></math> eta <math display=\"inline\"><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn><mo>′</mo></msubsup></math> bektoreak konstanteak dira: <math display=\"inline\"><mrow><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mo>′</mo></msubsup><mo>=</mo><mn>0</mn></mrow></math>. Beste <math display=\"inline\"><mi>S</mi></math> erreferentzia-sistema batean hauxe dugu, (2.74) eta (2.75) emaitzen arabera: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>+</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>+</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn><mo>′</mo></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mo>′</mo></msubsup><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mo>′</mo></msubsup><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn><mo>′</mo></msubsup><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn><mo>′</mo></msubsup><mo>,</mo></mrow></math> non <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> bektoreek <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> sistemaren <math display=\"inline\"><mi>S</mi></math> sistemarekiko posizioa eta abiadura angeluarra ematen dituzten. Ekuazio horien ondorio zuzenak dira honako hauek: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>=</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn><mo>′</mo></msubsup><mo>−</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><mover><mrow><msub><mi>P</mi><mn>1</mn></msub><msub><mi>P</mi><mn>2</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>−</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn><mo>′</mo></msubsup><mo>−</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Azken emaitzak lau gauza frogatzen ditu:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<em>Solidoaren edozein bi punturen arteko higidura erlatiboa biraketa hutsa da</em>. Izan ere, hau ez da harrigarria: posizio erlatiboaren modulua, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> distantzia, konstantea denez, alda daitekeen gauza bakarra posizio erlatiboaren orientazioa da."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Newtonen hirugarren legearen ondorioz, <em>solido zurrunean barne-indarrek ez dute lanik egiten</em>, akzio-erreakzio bikote bakoitzaren potentzia <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>−</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> baita, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo>∥</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo>⟂</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>−</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub></mrow></math> delako."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Solidoaren edozein bi punturen arteko abiadura angeluar erlatiboa berbera da: <em>solidoaren abiadura angeluarra</em>. Hau ez da hain nabaria, pentsa genezake (5.6) emaitzan agertzen den abiadura angeluarra aukeraturiko puntu bikotearen menpekoa dela, baina frogatu dugu ez dela horrelakoa. Gainera <math display=\"inline\"><mi>′</mi></math> guztiak desagertu dira: <math display=\"inline\"><mi>S</mi></math>-rekiko abiadura angeluarra ez da erabili dugun tarteko solidoaren <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> sistemaren menpekoa."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Honela kalkulatzen da solidoaren puntu baten abiadura bigarren puntu batena ezagutzen bada:"
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ondorioz, <em>solidoaren higidura orokorra translazio baten eta biraketa baten konposizioa da</em>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Nolakoak dira 1 puntuaren abiadura angeluarra 2-ren inguruan eta azken honen abiadura angeluarra 1-en inguruan?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Marraztu mahai horizontal batean, labaindu gabe, higitzen ari den disko baten abiadura-eremua."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Higidura-ekuazioak"
    },
    {
     "mota": "testua",
     "html": "Ohi bezala, Newtonen hirugarren legea betetzen dela onartzen badugu, partikula-sistema honen eboluzio-ekuazio kolektiboetan ez dira barne-indarrak agertzen eta, beraz, hauexek dira momentu lineal eta angeluar osoen deribatuak:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑷</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>≡</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑵</mi><mo>≡</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑵</mi></math> kanpo-indar osoa eta kanpo-indarren momentu osoa diren. Notazio hau erabiliko dugu gai osoan, ez da barne-indarrik inondik agertuko eta, hortaz, ez da beharrezkoa behin eta berriro <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math> eta <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝑵</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math> idaztea. Solidoaren askatasun-graduak 6 direnez, (5.8)–(5.9) ekuazioak nahikoak dira, printzipioz, solido zurrunaren higidura osoa kalkulatzeko, hastapen-baldintzak ezagutzen badira. (Hori ez da egia izango askatasun-gradu gehiagoko partikula-sistemetan.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Masa-zentroaren sistema"
    },
    {
     "mota": "testua",
     "html": "Orain arte inplizituki onartu dugu solidoa erreferentzia-sistema inertzial batean aztertzen genuela; baina, dakigunez, partikula-sistemen kasuan masa-zentroarena oso erabilgarria da. Izan ere, (5.8) ekuazioak masa-zentroaren translazio-higidura ematen du. Hortaz, solidoaren masa <math display=\"inline\"><mi>M</mi></math> bada eta masa-zentroaren posizio-bektorea <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math>, masa-zentroaren higidura-ekuazioa (1.153) da<span class=\"j-oin\">[Baina gogoratu 35. orrialdeko oin-oharrean esandakoa: <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> kalkulatzeko nahikoa izan behar du masa-zentroari buruzko informazioak, (5.10) ekuazioa ebatzi nahi bada, (5.9) —edota (5.11)— ebatzi gabe.]</span>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>M</mi><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Masa-zentroaren sisteman momentu lineal osoa zero da, <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑷</mi><mo>*</mo></msup><mo>=</mo><mn>0</mn></mrow></math>, eta, translazio-higidura kenduta, masa-zentroaren inguruko biraketa geratzen da bakarrik. Higidura horrek 3 askatasun-gradu ditu (gehienez) eta dagokion eboluzio-ekuazioa (2.11)  da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑵</mi><mo>*</mo></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Gogoratu bestelako erreferentzia-sistema ez inertzialetan inertzia-indarren momentua ere kontuan hartu behar dela. Masa-zentroaren sistemaren kasuan, ordea, inertzia-indarren momentua (hau da, atoi-indarren momentua) zero da eta bakarrik geratzen da sistema inertzialetan neurtzen diren kanpo-indarren momentua: <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑵</mi><mo>*</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi><mo>*</mo></msubsup><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Ardatz finko baten inguruko biraketa.",
     "src": "media/irudiak/e61126a0ea5a248e.svg",
     "zabalera": 116
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Ardatz finko baten inguruko higidura",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Eman dezagun solido zurrunak ardatz finko bat duela eta, hortaz, egin dezakeen higidura bakarra ardatzaren inguruko biraketa dela. Analisia errazteko, biraketa-ardatzean aukeratuko dugu erreferentzia-sistemako <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatza. Solidoaren partikula baten posizioa, koordenatu zilindrikoetan, <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>ρ</mi><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>z</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> izango da eta abiadura (B.2 taulan esandakoaren arabera) <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>ρ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> Baina zurruna denez, partikula eta ardatzaren arteko <math display=\"inline\"><mi>ρ</mi></math> distantzia konstantea da, eta gauza bera gertatzen da <math display=\"inline\"><mi>z</mi></math> koordenatuarekin. Bestalde, <math display=\"inline\"><mi>φ</mi></math> angelua partikularen menpekoa izan arren, bere deribatua <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> ez da aldatzen puntu batetik bestera (baina bai, oro har, denborarekin) partikula guztiak batera biratzen ari direlako. Puntu baten abiadura, beraz, hauxe da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ρ</mi><mi>ω</mi><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "non <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>≡</mo><mi>ω</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> bektorea solidoaren abiadura angeluarra den. Ageri denez, (5.15) emaitza (5.6) adierazpen orokorraren kasu partikularra da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Momentu angeluarra eta inertzia-momentua"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> posizioan dagoen «partikula», puntu horren inguruko elementu infinitesimal bat izango da, <math display=\"inline\"><mrow><mi>d</mi><mi>V</mi></mrow></math> bolumena eta <math display=\"inline\"><mrow><mi>d</mi><mi>m</mi></mrow></math> masa dituena. (Puntu horretan masa-dentsitatea <math display=\"inline\"><mi>ρ</mi></math> bada<span class=\"j-oin\">[Ez nahastu <math display=\"inline\"><mi>ρ</mi></math> koordenatu zilindrikoa eta <math display=\"inline\"><mi>ρ</mi></math> masa-dentsitatea.]</span>, <math display=\"inline\"><mrow><mi>d</mi><mi>m</mi><mo>=</mo><mi>ρ</mi><mi>d</mi><mi>V</mi></mrow></math> dugu, noski.) Elementu honen momentu angeluarra hauxe da: <math display=\"block\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi>d</mi><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ω</mi><msup><mi>ρ</mi><mn>2</mn></msup><mi>d</mi><mi>m</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>−</mo><mi>ω</mi><mi>ρ</mi><mi>z</mi><mi>d</mi><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover></mrow></math> da eta <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover></math> bektorea, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒌</mi></math> ez bezala, puntuaren menpekoa denez, solidoarena <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mo>∫</mo><mi>V</mi></msub><msup><mi>ρ</mi><mn>2</mn></msup><mi>d</mi><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>−</mo><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>z</mi><mi>ρ</mi><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mi>d</mi><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Lehen batugaian mako artean agertzen den"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>I</mi><mo>≡</mo><msub><mo>∫</mo><mi>V</mi></msub><msup><mi>ρ</mi><mn>2</mn></msup><mi>d</mi><mi>m</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "magnitudea <strong>ardatzarekiko inertzia-momentua</strong> dela esaten da: ez da <math display=\"inline\"><mi>O</mi></math> puntuaren menpekoa (puntua ardatzean badago behintzat), definizioan bakarrik agertzen baita ardatzetik neurtutako distantzia. Bestalde, <math display=\"inline\"><mrow><mi>ρ</mi><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>y</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> denez, <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi>I</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>−</mo><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>x</mi><mi>z</mi><mi>d</mi><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>−</mo><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>y</mi><mi>z</mi><mi>d</mi><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> dugu eta, ondorioz, <em>momentu angeluarra ez da, oro har, abiadura angeluarrarekiko paraleloa</em>: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>≠</mo><mi>I</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>L</mi><mi>z</mi></msub><mo>=</mo><mi>I</mi><mi>ω</mi><mo>=</mo><mi>I</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Jakina, kasu berezi batzuetan (simetriagatik edo) gerta daiteke (5.20) adierazpeneko azken bi gaietako integralak zero izatea eta, ondorioz, momentu eta abiadura angeluarrak elkarrekiko paraleloak. Horixe gertatuko da ardatzaren inguruko biraketa-simetria badu gorputzak, zeren orduan <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> posizioko elementu bakoitzak simetriko berdin bat baitu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntuan. Baina, oro har, ez da hori gertatuko. Ikus dezagun adibide bat."
    },
    {
     "mota": "irudia",
     "oina": "Hagatxo birakaria.",
     "src": "media/irudiak/3f6b05b1ced02bb0.svg",
     "zabalera": 171
    },
    {
     "mota": "testua",
     "html": "5.5 irudiko hagatxoa masa gabekoa da eta ardatz bertikalaren inguruan biratzen ari da <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> abiadura angeluarraz. Problema honek duen simetria ez da lehen aipatu duguna, zentroaren inguruko inbertsioa baizik: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo>,</mo><mi>−</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Zentro horretan kokaturiko erreferentzia-sisteman bi partikulen posizio-bektoreak elkarren kontrakoak izango dira eta goikoaren koordenatu zilindrikoak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>l</mi><mi>/</mi><mn>2</mn><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>l</mi><mi>/</mi><mn>2</mn><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> badira, bestearenak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>l</mi><mi>/</mi><mn>2</mn><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>,</mo><mi>φ</mi><mo>+</mo><mi>π</mi><mo>,</mo><mi>−</mi><mi>l</mi><mi>/</mi><mn>2</mn><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> dituzte."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu problema honetan hurrengo balioak ditugula: <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi>I</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msub><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo></msub><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>y</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> goiko partikulari dagokiona den. Biraketa-ardatzaren inguruko simetrikoak diren <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> kasuetan izan ezik, beraz, momentu angeluarra ez da abiadura angeluarrarekiko paraleloa."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Indar-momentua"
    },
    {
     "mota": "testua",
     "html": "<em>Ardatza erreferentzia-sistema inertzial batean edo masa-zentroaren sisteman finko badago</em>"
    },
    {
     "mota": "testua",
     "html": ", momentu angeluarraren eboluzio-ekuazioa (5.9)-tik lortzen dugu: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>≠</mo><mi>I</mi><mover><mi mathvariant=\"bold-italic\">𝝎</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>N</mi><mi>z</mi></msub><mo>=</mo><msub><mover><mi>L</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub><mo>=</mo><mi>I</mi><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>I</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mi>.</mi></mrow></math> Abiadura angeluarra konstantea bada, <math display=\"inline\"><mrow><msub><mi>N</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math> izango da; baina, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi>I</mi><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math> kasu berezian izan ezik, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>≠</mo><mn>0</mn></mrow></math> da eta sistemak kanpo-momentu bat pairatzen du. <br> Goiko hagatxoaren adibidean, <math display=\"inline\"><mi>ω</mi></math> konstantea denean ere, biraketa-ardatzak eta hagatxoak definituriko planoan dago momentu angeluarra eta, ondorioz, hagatxoarekin batera biratzen ari da: ez da konstantea. Adibidez, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> eta <math display=\"inline\"><mi>θ</mi></math> konstanteak badira, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> modulua ez da aldatzen, baina bai bere norabidea: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mo>⟂</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mi>.</mi></mrow></math> Beraz, sistemaren gainean ardatzak (edo, nahiago bada, honen gainean bere euskarriak) indar-momentu bat egiten du, hagatxoak oreka egonkorreko posizio horizontalerantz joateko joeraren kontrakoa: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msub><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mi>y</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>x</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu azken emaitza."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Biraketa-erradioa"
    },
    {
     "mota": "testua",
     "html": "Solidoaren biraketa-erradioaren definizioa <math display=\"inline\"><mrow><mi>K</mi><mo>≡</mo><msqrt><mrow><mi>I</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> da, <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><msup><mi>ρ</mi><mn>2</mn></msup><mi>d</mi><mi>m</mi><mo>=</mo><mi>m</mi><msup><mi>K</mi><mn>2</mn></msup></mrow></math> betetzeko moduan. Hau da, problema baliokide batean inertzia-momentua solidoarenarena izateko, <math display=\"inline\"><mi>m</mi></math> masa puntual bat non kokatu behar den neurtzen du biraketa-erradioak."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zein da 5.5 irudiko hagatxo birakariaren biraketa-erradioa?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Energia zinetikoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>d</mi><mi>m</mi></mrow></math> elementuaren energia zinetikoa <math display=\"block\"><mrow><mi>d</mi><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>d</mi><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>d</mi><mi>m</mi><msup><mi>ρ</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> denez, solidoarena hauxe da: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>d</mi><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mo>∫</mo><mi>V</mi></msub><msup><mi>ρ</mi><mn>2</mn></msup><mi>d</mi><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>I</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>K</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝑳</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mi>.</mi></mrow></math> Geroago ikusiko dugun bezala, (5.30) adierazpena ez da beteko kasu orokorrean, baina bai (5.32)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zein da 5.5 irudiko hagatxo birakariaren energia zinetikoa?"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Pendulu fisikoa.",
     "src": "media/irudiak/16cb3462ac5876b3.svg",
     "zabalera": 234
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Pendulu fisikoa"
    },
    {
     "mota": "testua",
     "html": "Adibidez, kanpo-indarra pisua bada eta ardatz finkoa horizontala, 5.6 irudiko <strong>pendulu fisikoa</strong> da gure solido zurruna<span class=\"j-oin\">[Huygensek lortu zituen lehenengo emaitza orokorrak testuinguru honetan, 1673ko <em>Horologium oscillatorium</em> lan famatuan, pendulu-erlojuak hobetzeko asmoz. Besteak beste, <strong>oszilazio-zentroaren</strong> problema, hau da, pendulu baliokidearen luzeraren problema, ebatzi zuen: ikus [112].]</span>. Momentu angeluarrak eta indar-momentuak ardatzaren norabidean dituzten proiekzioak erraz kalkulatzen dira, <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatza bertikalean eta beherantz aukeratuz: <math display=\"block\"><mrow><msub><mi>L</mi><mi>z</mi></msub><mo>=</mo><mi>I</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>m</mi><msup><mi>K</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>N</mi><mi>z</mi></msub><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> non <math display=\"inline\"><mi>a</mi></math> delakoa ardatzaren eta masa-zentroaren arteko <strong>esekidura-distantzia</strong> den. Hortaz, <math display=\"inline\"><mrow><msub><mi>N</mi><mi>z</mi></msub><mo>=</mo><msub><mover><mi>L</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub></mrow></math> higidura-ekuazioa honela idazten da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mi>g</mi><mi>a</mi></mrow><msup><mi>K</mi><mn>2</mn></msup></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Pendulu matematiko baliokidearen luzera, beraz, <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><msup><mi>K</mi><mn>2</mn></msup><mi>/</mi><mi>a</mi></mrow></math> da. Jakina, adierazpen hauetan agertzen den <math display=\"inline\"><mi>K</mi></math> biraketa-erradioa esekidura-ardatzarekiko definitua da. Biraketa-ardatzaren eta masa-zentroaren inguruko biraketa-erradioen arteko erlazioa hurrengoa dela frogatuko dugu 5.6.2 problheman: <math display=\"block\"><mrow><msup><mi>K</mi><mn>2</mn></msup><mo>=</mo><msup><mi>K</mi><mrow><mi>*</mi><mn>2</mn></mrow></msup><mo>+</mo><msup><mi>a</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Solidoaren higidura bere puntu baten inguruan.",
     "src": "media/irudiak/22e8be86c26b189c.svg",
     "zabalera": 148
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Inertzia-tentsorea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Lehenago ikusi dugunez, kasu berezietan izan ezik, momentu eta abiadura angeluarrak ez dira elkarrekiko proportzionalak. Atal honetan, aipaturiko magnitudeen arteko erlazioa argitzeko, solidoarekin batera higitzen den <math display=\"inline\"><mi>O</mi></math> puntu bat aukeratuko dugu. Adibidez, solidoaren puntu finko bat izan daiteke, edo puntu geometriko bat, hala nola masa-zentroa. 5.1.2 atalean ikusi genuenez, beste edozein puntu, solidoaren <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> abiadura angeluarraz ari da biratzen aukeratu dugunaren inguruan eta azken honetatik neurtutako haren posizio-bektorea <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> bada, bere abiadura erlatiboa <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> izango da. Solidoaren elementu infinitesimal baten momentu angeluarra aipaturiko puntuarekiko <math display=\"block\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi>d</mi><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>m</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>r</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝝎</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>m</mi></mrow></math> denez, solidoarena hauxe dugu: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>r</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝝎</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>m</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> ez dira, oro har, elkarrekiko paraleloak baina haien arteko erlazioa lineala da, tentsore baten bidez emandakoa. Hau ikusteko, aukera dezagun puntu berean triedro bat (kalkulu aldiune batean egingo dugunez, berdin da aipaturiko triedro erreferentzia-sistema inertzial batekoa den edo ez ez). 2.2 ataleko notazioa erabiliz, posizio-bektorea <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></msubsup><msub><mi>x</mi><mi>j</mi></msub><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>j</mi></msub></mrow></math> da eta momentu angeluarraren osagaiak hurrengoak: <math display=\"block\"><mrow><msub><mi>L</mi><mi>i</mi></msub><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>d</mi><msub><mi>L</mi><mi>i</mi></msub><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>r</mi><mn>2</mn></msup><msub><mi>ω</mi><mi>i</mi></msub><mo>−</mo><msub><mi>x</mi><mi>i</mi></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>x</mi><mi>j</mi></msub><msub><mi>ω</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>m</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>ω</mi><mi>j</mi></msub><mo>,</mo></mrow></math> non Kroneckerren delta erabili dugun. Emaitza hau modu honetan ere idazten da: <math display=\"block\"><mrow><msub><mi>L</mi><mi>i</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>ω</mi><mi>j</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>≡</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi><mi>.</mi></mrow></math> <math display=\"inline\"><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> elementuekin <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math>  <strong>inertzia-matrizea</strong> defini daiteke, aurreko emaitza"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "modu laburrean edo <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>L</mi><mi>x</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>L</mi><mi>y</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>L</mi><mi>z</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>x</mi><mi>y</mi><mi>d</mi><mi>m</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>x</mi><mi>z</mi><mi>d</mi><mi>m</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>x</mi><mi>y</mi><mi>d</mi><mi>m</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>y</mi><mi>z</mi><mi>d</mi><mi>m</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>x</mi><mi>z</mi><mi>d</mi><mi>m</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>y</mi><mi>z</mi><mi>d</mi><mi>m</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ω</mi><mi>x</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ω</mi><mi>y</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ω</mi><mi>z</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> modu esplizituan idazteko. Inertzia-matrizearen diagonaleko elementuak ardatz kartesiarrekiko inertzia-momentuak dira, jakina, eta diagonalaren kanpokoak <strong>inertzia-biderkadurak</strong> deitzen dira. (5.40) adierazpenean ikusten dugunez, momentu eta abiadura angeluarraren arteko erlazioa proportzionaltasun hutsa ez bada ere, badu azken honen funtsezko propietate bat: lineala da, hau da, abiadura angeluarra, konstante batekin biderkatzen bada, gauza bera gertatzen zaio momentu angeluarrari, eta bi abiadura angeluarren baturarekin batugaiei dagozkien momentu angeluarren batura lortzen da. Elementu infinitesimalaren energia zinetikoa <math display=\"block\"><mrow><mi>d</mi><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>d</mi><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>d</mi><mi>m</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>m</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>,</mo></mrow></math> denez, solidoarena honela idazten da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝑳</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>ω</mi><mi>i</mi></msub><msub><mi>ω</mi><mi>j</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝝎</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Matrizeak ordezkatzean, ezkerreko <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math>-ren ordez <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math>-ri dagokion zutabe matrizearen iraulia, hau da, errenkada matrize bat, jarri beharko da azken gaian.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Tentsoreak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑰</mi></math> inertzia-«matrizea» dela esan dugu, baina triedro guztietan betetzen da goiko adierazpena oro. Bektore baten kasuan, triedro bakoitzean osagai batzuk lortuko dira, eta hauen bidez zutabe matrize bat eraiki daiteke, baina bektorea bera triedroaren independentea da. Orobat, (5.42) adierazpenean, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> bektoreez gain, beste objektu matematiko bat dugu: triedroaren independentea den <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑰</mi></math> tentsorea. Triedro bakoitzean inertzia-tentsore horrek 9 osagai ditu; baina, gehienez, 6 izango dira desberdinak, inertzia-tentsorea simetrikoa baita: <math display=\"inline\"><mrow><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub></mrow></math>. Triedroa aldatzean bektoreen eta tentsorearen osagaiak aldatu egiten dira, baina ez edonola, orain ikusiko dugun modu zehatzean baizik. Eman dezagun <math display=\"inline\"><msup><mi>S</mi><mo>*</mo></msup></math> eta <math display=\"inline\"><mi>S</mi></math> triedroen oinarrietako bektore unitarioak <math display=\"inline\"><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>*</mo></msubsup></math> eta <math display=\"inline\"><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi></msub></math> direla, hurrenez hurren. 2.2 atalean ikusi genuenez, lehen sistematik bigarrenera joateko <math display=\"inline\"><mrow><msub><mi>R</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>≡</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi></msub><mo>⋅</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>j</mi><mo>*</mo></msubsup></mrow></math> elementuak dituen <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> biraketa-matrizea erabili behar da eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math> bektore bati dagozkion matrizeak <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mo>*</mo></msup></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑼</mi></math> badira, euren arteko erlazioa <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mo>*</mo></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi></mrow></math> edota <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑼</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>⋅</mo><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mo>*</mo></msup></mrow></math> da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ondorioztatu inertzia-tentsorearen matrizeen arteko erlazioa hurrengo antzekotasun-transformazioa dela: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mi>.</mi></mrow></math> Zein da alderantzizko transformazioa?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Inertzia-ardatz nagusiak"
    },
    {
     "mota": "testua",
     "html": "Askotan esan dugunez, momentu eta abiadura angeluarrak ez dira paraleloak, oro har; baina paraleloak diren kasu berezietan bektore horiek kasu horretan definitzen duten norabidea <strong>inertzia-ardatz nagusia</strong> (edo <strong>inertzia-norabide nagusia</strong>) deitzen da. Bete behar den <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>∝</mo><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math> baldintza <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>∝</mo><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math> denez, ardatz nagusirik existitzen den jakiteko ebatzi behar den problema inertzia-matrizearen balio eta bektore propioen problema da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Balio propioen problema"
    },
    {
     "mota": "testua",
     "html": "Gogora dezagun nola ebazten den <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑰</mi></math> tentsore simetriko baten <math display=\"inline\"><mi>λ</mi></math> balioen eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math> bektore propioen problema: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>u</mi><mi>j</mi></msub><mo>=</mo><mi>λ</mi><msub><mi>u</mi><mi>i</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Hasteko, hurrengo <strong>ekuazio karakteristikoaren</strong>  <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>,</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math> eta <math display=\"inline\"><msub><mi>λ</mi><mn>3</mn></msub></math> soluzioak, <strong>balio propioak</strong> alegia, aurkitu behar dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑰</mi><mo>−</mo><mi>λ</mi><mn mathvariant=\"bold\">𝟏</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>11</mn></msub><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>13</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>21</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>22</mn></msub><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>23</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>31</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>32</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>33</mn></msub><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Balio propioak errealak dira eta"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><msub><mi>λ</mi><mi>i</mi></msub><mi mathvariant=\"bold-italic\">𝒖</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>11</mn></msub><mo>−</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>u</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>12</mn></msub><msub><mi>u</mi><mn>2</mn></msub><mo>+</mo><msub><mi>I</mi><mn>13</mn></msub><msub><mi>u</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>I</mi><mn>21</mn></msub><msub><mi>u</mi><mn>1</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>22</mn></msub><mo>−</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>u</mi><mn>2</mn></msub><mo>+</mo><msub><mi>I</mi><mn>23</mn></msub><msub><mi>u</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>I</mi><mn>31</mn></msub><msub><mi>u</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>32</mn></msub><msub><mi>u</mi><mn>2</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>33</mn></msub><mo>−</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>u</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "sistema linealean ordezkatzen badira, hiru bektore propio ortonormal (<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub></mrow></math> eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>3</mn></msub></math>) aurki daitezke: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>11</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>21</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>31</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>22</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>32</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>13</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>23</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>33</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>j</mi></msub><mo>=</mo><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msubsup><mi mathvariant=\"bold-italic\">𝑼</mi><mi>i</mi><mi>⊤</mi></msubsup><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mi>j</mi></msub><mo>=</mo><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>,</mo></mrow></math> non <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mi>i</mi></msub></math> zutabe matrizea <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></msubsup><msub><mi>R</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>j</mi></msub></mrow></math> bektoreari dagokiona den. Bektore propioen osagaiekin honako <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> matrize ortogonal hau osatzen da: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>13</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>21</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>22</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>23</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>31</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>32</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>33</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>⋅</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>=</mo><mn mathvariant=\"bold\">𝟏</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>R</mi><mrow><mi>k</mi><mi>i</mi></mrow></msub><msub><mi>R</mi><mrow><mi>k</mi><mi>j</mi></mrow></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>R</mi><mrow><mi>i</mi><mi>k</mi></mrow></msub><msub><mi>R</mi><mrow><mi>j</mi><mi>k</mi></mrow></msub><mo>=</mo><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>.</mi></mrow></math> Ondoko biraketa hau eginez, <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mo>*</mo></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>u</mi><mi>i</mi><mo>*</mo></msubsup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>R</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><msub><mi>u</mi><mi>j</mi></msub><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>*</mo></msubsup><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub></mrow></math> bektore propio unitarioek definituriko erreferentzia-sistema lortzen dugu eta bertan <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑰</mi></math> tentsorea diagonala da, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑰</mi></math> tentsorea erdidefinitu positiboa bada, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mi>⊤</mi></msup><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mrow><mi>*</mi><mi>⊤</mi></mrow></msup><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mo>*</mo></msup><mo>≥</mo><mn>0</mn><mo>,</mo><mo>∀</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, balio propio guztiak positiboak edo nuluak dira."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Inertzia-momentu nagusiak"
    },
    {
     "mota": "testua",
     "html": "Inertzia-matrizea simetrikoa denez, hiru bektore propio ortogonal ditu. Jakina, bektore propioarekiko proportzionalak diren beste guztiak ere propioak izango dira eta denak daude norabide nagusi batean. Beraz, norabide hori adierazteko, dagokion <math display=\"inline\"><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>*</mo></msubsup></math> bektore unitarioa aukeratzen bada, <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>*</mo></msubsup><mo>=</mo><msub><mi>I</mi><mi>i</mi></msub><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>*</mo></msubsup></mrow></math> dugu, eta <math display=\"inline\"><msub><mi>I</mi><mi>i</mi></msub></math> balio propioa <strong>inertzia-momentu nagusia</strong> deitzen da. Lehenago ere esan dugun bezala,"
    },
    {
     "mota": "testua",
     "html": "<em>momentu eta abiadura angeluarrak elkarrekiko paraleloak izango dira baldin eta soilik baldin\nsolidoaren norabide nagusi batean badaude eta orduan <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><msub><mi>I</mi><mi>i</mi></msub><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math></em>"
    },
    {
     "mota": "testua",
     "html": ". 5.3.3 atalean gogoratu dugunez, triedroa aldatzen badugu orain ardatzak nagusiak izateko, hau da,"
    },
    {
     "mota": "testua",
     "html": "<strong>triedro nagusia</strong>"
    },
    {
     "mota": "testua",
     "html": "deitzen den <math display=\"inline\"><msup><mi>S</mi><mo>*</mo></msup></math> triedro berria eraikitzeko ardatz kartesiarrak <math display=\"inline\"><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>*</mo></msubsup></math> bektore propioen norabideetan aukeratzen baditugu, han inertzia-matrizea diagonala da,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "eta momentu angeluarraren eta energia zinetikoaren adierazpenak erraztu egiten dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>L</mi><mi>i</mi><mo>*</mo></msubsup><mo>=</mo><msub><mi>I</mi><mi>i</mi></msub><msubsup><mi>ω</mi><mi>i</mi><mo>*</mo></msubsup><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><msup><mi>T</mi><mo>*</mo></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>I</mi><mi>i</mi></msub><msubsup><mi>ω</mi><mi>i</mi><mrow><mi>*</mi><mn>2</mn></mrow></msubsup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hasierako triedrotik nagusira joateko erabili behar den matrizea <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup></math> da. Bestalde, (5.58) adierazpenean ikusten dugu zer diren inertzia-momentu nagusiak: ardatz nagusiekiko inertzia-momentuak alegia."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Hiru balio propioak bakanak direnean, hiru inertzia-momentu nagusi desberdinak daude eta hiru norabide nagusiak modu bakarrean daude definiturik, zeren, zeinuak alde batera utzita, bektore propio ortonormalak aukeratzeko modu bakarra baitago."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Balio propio bat bikoitza denean, bi inertzia-momentu berdinak dira: <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math>, adibidez. Dagozkien bi bektore propioren konbinazio lineal guztiak ere propioak dira eta definitzen duten <strong>inertzia-plano nagusian</strong> dagoen edozein norabide nagusia da. Kasu horretan solidoa <strong>ziba simetrikoa</strong> dela esaten da, eta aipaturiko jostailua da adibiderik ezagunena. Nahikoa da <math display=\"inline\"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>≠</mo><msub><mi>I</mi><mn>1</mn></msub><mo>,</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math> balio propio bakanari dagokion norabide nagusia kalkulatzea, berarekiko perpendikular guztiak balio propio bikoitzari dagozkien norabide nagusiak baitira."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Hiru inertzia-momentu nagusiak berdinak badira, hau da, <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub><mo>≡</mo><mi>I</mi></mrow></math> balio propio hirukoitza dugunean, bektore guztiak propioak dira eta norabide guztiak nagusiak. Solidoa <strong>ziba esferikoa</strong> dela esaten da eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi>I</mi><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>I</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> adierazpen errazak betetzen dira beti."
     ]
    },
    {
     "mota": "irudia",
     "oina": "Hagatxo arin batez loturiko bi masa.",
     "src": "media/irudiak/272f7c2713eb7581.svg",
     "zabalera": 178
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibidea"
    },
    {
     "mota": "testua",
     "html": "Azter dezagun, adibide moduan, 5.8 irudiko sistema <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi><mi>Z</mi></mrow></math> triedroan. Masa osoa <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>±</mi><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math> puntuetan dagoenez, inertzia-matrizea zuzenean kalkulatzen da: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑰</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Ekuazio karakteristikoa, <math display=\"inline\"><mrow><mi>a</mi><mo>≡</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></math> definizioarekin, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math> da eta inertzia-momentu nagusiak <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></math>. Ziba simetrikoa da, beraz, solido hau."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu bektore propio unitarioak, norabide nagusiak ematen dituztenak, hurrengo moduan aukera daitezkeela: <math display=\"block\"><mrow><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn><mo>*</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn><mo>*</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>3</mn><mo>*</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Ondorioz, ardatz nagusitzat irudiko <math display=\"inline\"><mrow><mi>O</mi><msup><mi>X</mi><mo>*</mo></msup><mo>,</mo><mi>O</mi><msup><mi>Y</mi><mo>*</mo></msup></mrow></math> eta <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> aukera daitezke. Izan ere, ziba simetrikoa denez, <math display=\"inline\"><mrow><mi>O</mi><msup><mi>Y</mi><mo>*</mo></msup><mi>Z</mi></mrow></math> planoa nagusia da eta bertako edozein norabide, nagusia da (zentrotik pasatzen bada)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkulatu triedro nagusira pasatzeko biraketa-matrizea eta egiaztatu han inertzia-tentsorea diagonala dela."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Simetriak eta ardatz nagusiak"
    },
    {
     "mota": "testua",
     "html": "Ardatz nagusiak aurkitzeko inertzia-tentsorearen balio eta bektore propioen problema ebatzi behar da (ikus 5.3.3 atala), baina goiko adibidea bezalako kasu erraz askotan informazio interesgarria lor daiteke problemaren simetriaz baliatuz, solidoa homogeneoa (hau da, dentsitate uniformekoa)  denean:"
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi><mi>Z</mi></mrow></math> simetria-planoa da eta <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> simetria-ardatza.",
     "src": "media/irudiak/ee6739119ef8a36a.svg",
     "zabalera": 178
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Kontsideratzen dugun puntutik pasatzen den <em>simetria-plano oro ardatz nagusi batekiko perpendikularra da</em>. Beraz, badakigu plano baten inguruko inbertsioarekiko aldaezina bada solidoa, planoarekiko perpendikularra norabide nagusia dela."
     ]
    },
    {
     "mota": "testua",
     "html": "Izan ere, simetria-planoa <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi><mi>Z</mi></mrow></math> izateko moduan aukeratzen badugu erreferentzia-sistema (5.9 irudian bezala), aipaturiko simetria honela idazten da <math display=\"inline\"><mi>ρ</mi></math> masa-dentsitateaz<span class=\"j-oin\">[240. orrialdean esan genuen bezala, <math display=\"inline\"><mi>ρ</mi></math> koordenatu zilindrikoa da eta <math display=\"inline\"><mi>ρ</mi></math> dentsitatea.]</span>  baliatuz: <math display=\"block\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta, ondorioz, <math display=\"block\"><mrow><msub><mi>I</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi>y</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>x</mi><mi>y</mi><mi>d</mi><mi>m</mi><mo>=</mo><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>x</mi><mi>y</mi><mi>ρ</mi><mi>d</mi><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math> integrakizuna <math display=\"inline\"><mi>x</mi></math>-rekiko bakoitia baita. Arrazoi beragatik <math display=\"inline\"><mrow><msub><mi>I</mi><mrow><mi>x</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi>z</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> dugu eta, beraz, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>y</mi><mi>z</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>y</mi><mi>z</mi></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>z</mi><mi>z</mi></mrow></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Argi dago <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒊</mi></math> bektorea eta <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatza (simetria-planoarekiko perpendikularrak direnak) nagusiak direla."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Kontsideratzen dugun puntutik pasatzen den <em>simetria-ardatz oro nagusia da</em>. Gainera, simetria-ardatzaren <em>ordena 3 edo handiagoa bada, plano perpendikularreko norabide guztiak ere nagusiak dira: ziba simetrikoa da</em>. Beraz, solidoa ardatz baten inguruan biratzean bi posizio baliokide baditu aipaturiko ardatza nagusia da. Posizio baliokideak hiru edo gehiago (edo infinitu) badira, ardatza eta bere plano perpendikularra nagusiak dira."
     ]
    },
    {
     "mota": "testua",
     "html": "Hau frogatzeko har dezagun <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatza simetria-ardatzean (ikus 5.9 irudia). Simetria-ardatzaren ordena <math display=\"inline\"><mi>n</mi></math> bada, hauxe dugu koordenatu polar zilindrikoetan: <math display=\"block\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo>+</mo><mi>α</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>α</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>n</mi></mfrac><mi>.</mi></mrow></math> Hortaz, <math display=\"block\"><mrow><msub><mi>I</mi><mrow><mi>x</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi>z</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>x</mi><mi>z</mi><mi>d</mi><mi>m</mi><mo>=</mo><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>x</mi><mi>z</mi><mi>ρ</mi><mi>d</mi><mi>V</mi><mo>=</mo><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>ρ</mi><mn>2</mn></msup><mi>z</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>d</mi><mi>ρ</mi><mi>d</mi><mi>φ</mi><mi>d</mi><mi>z</mi></mrow></math> dugu eta <math display=\"inline\"><mi>φ</mi></math>-rekiko integrala egitean <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>d</mi><mi>φ</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mo>∫</mo><mn>0</mn><mi>α</mi></msubsup><mo>+</mo><msubsup><mo>∫</mo><mi>α</mi><mrow><mn>2</mn><mi>α</mi></mrow></msubsup><mo>+</mo><mi>⋯</mi><mo>+</mo><msubsup><mo>∫</mo><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>α</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>d</mi><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>α</mi></msubsup><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"prefix\">{</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>+</mo><mn>2</mn><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>⋯</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>φ</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"false\" form=\"postfix\">}</mo></mtd></mtr></mtable></mrow><mi>d</mi><mi>φ</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></math> dugu, (B.108) emaitzaren ondorioz. Arrazoi beragatik <math display=\"inline\"><mrow><msub><mi>I</mi><mrow><mi>y</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi>z</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> dugu eta, beraz, <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatza nagusia da: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>y</mi><mi>z</mi></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>z</mi><mi>z</mi></mrow></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eman dezagun orain simetria-ordena hiru edo handiagoa dela. Aukera ditzagun plano perpendikularreko ardatz nagusi bat eta honetatik simetria-ardatzaren inguruko <math display=\"inline\"><mi>α</mi></math> anguluko biraketaz lortzen dena. Simetria dela eta, bigarren ardatza ere nagusia izango da eta biren inertzia-momentu nagusiak berdinak: solidoa ziba simetrikoa izango da, beraz. (Simetria-ordena infinitua bada, nolanahi aukera daiteke aurreko arrazoibidean <math display=\"inline\"><mi>α</mi></math> angelua.)  <br> Adibidez, 5.9 irudiko kasuan <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi><mi>Z</mi></mrow></math> planoa simetriazkoa denez, <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatza nagusia da. <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatza nagusia da 2 ordenako simetria-ardatz delako. <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> ardatza ere nagusia da beste bien ortogonala delako (edo, nahiago bada, <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Z</mi></mrow></math> simetria-planoarekiko perpendikularra delako)."
    },
    {
     "mota": "testua",
     "html": "Kontsidera dezagun orain paralelepipedo angeluzuzen baten (edo 5.16 irudiko tenis-erraketaren) ardatzeko puntu batekiko inertzia-tentsorea. Bi simetria-plano pasatzen dira handik eta beraz, bakoitzarekiko perpendikularra den (eta bestean dagoen) norabide nagusi bat dago. Hirugarren ardatz nagusia aurrekoekiko perpendikularra da: bi simetria-planoen ebakiduran dago. Azken emaitza hau goiko bigarren araua erabiliz ere lortzen da, simetria-planoen arteko ebakidura simetria-ardatza baita. <br> Bestalde, nahikoa da paralelepipedoaren oinarria triangelu aldekidea (edo karratua…) izatea, ardatzarekiko perpendikularra den plano bat nagusia izateko: ez da beharrezkoa oinarria zirkularra izatea. Era berean esfera homogeneoak eta simetria esferikoa duten bestelako gorputzak (hala nola esfera hutsak) ez dira ziba esferiko bakarrak: horrelakoak dira, adibidez, kubo homogeneo guztiak, euren zentrotik pasatzen diren ardatz guztiekiko inertzia-momentuak berdinak baitira. (Azken baieztapena frogatzeko, nahikoa da kontuan hartzea hiru simetria-ardatzak baliokideak direla.)"
    },
    {
     "mota": "testua",
     "html": "639. orrialdeko A.6 taulan erakusten dira solido homogeneo batzuen masa-zentroarekiko ardatz eta inertzia-momentu nagusiak. Beste puntuen inguruko inertzia-momentu nagusiak aurkitzeko, 5.6.1 ariketako ardatz paraleloen teorema erabil daiteke."
    },
    {
     "mota": "irudia",
     "oina": "Inertzia-momentua ardatz orokor baten inguruan.",
     "src": "media/irudiak/951d939b57bff549.svg",
     "zabalera": 136
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Inertzia-momentua ardatz orokor baten inguruan"
    },
    {
     "mota": "testua",
     "html": "Eman dezagun solido baten <math display=\"inline\"><mi>O</mi></math> puntuaren inguruko inertzia-tentsorea <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑰</mi></math> dela. Kontsidera dezagun <math display=\"inline\"><mi>O</mi></math> puntutik <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover></math> bektore unitarioaren norabidean pasatzen den ardatza (ikus 5.10 irudia). Azken honen inguruko inertzia-momentua kalkulatzeko, definizioa erabiliko dugu: <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><msup><mi>ρ</mi><mn>2</mn></msup><mi>d</mi><mi>m</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>d</mi><mi>m</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>m</mi><mi>.</mi></mrow></math> Hemen (5.41) inertzia-matrizea eta <math display=\"block\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msubsup><mi>x</mi><mi>k</mi><mn>2</mn></msubsup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>x</mi><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub></mrow></math> emaitzak erabiltzen badira, honela geratzen zaigu ardatz orokor horren inguruko inertzia-momentua:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>n</mi><mi>i</mi></msub><msub><mi>n</mi><mi>j</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Ziba simetrikoaren prezesioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kontsidera dezagun puntu finko bat duen solido zurrun bat: puntu horren inguruko ziba simetrikoa da eta higitzen ari da grabitatearen eraginpean, 5.11 irudian erakusten den moduan."
    },
    {
     "mota": "testua",
     "html": "Azterketa errazteko, demagun simetria-ardatzaren (edo, hobeki esan, inertzia-momentu nagusi bakunari dagokion norabide nagusiaren) inguruan oso arin biratzen ari dela (6.7 atalean aztertuko dugu zer gertatzen den hipotesi hau egiten ez denean). Hortaz, abiadura angeluar osoa <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatz nagusiarekiko paraleloa da hurbilketa onean: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi>L</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><msub><mi>I</mi><mi>z</mi></msub><mi>ω</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><msub><mi>I</mi><mi>z</mi></msub><mi mathvariant=\"bold-italic\">𝝎</mi><mo>∥</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>,</mo></mrow></math> non <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> masa-zentroaren posizio-bektorea den eta, irudian bezala, aipaturiko <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatzean dagoela emango dugu."
    },
    {
     "mota": "irudia",
     "oina": "Ziba simetriko arina grabitate-eremuan.",
     "src": "media/irudiak/bf6c6d703dac59ea.svg",
     "zabalera": 172
    },
    {
     "mota": "testua",
     "html": "Kanpoko <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> sistema inertzialean, (5.81) higidura-ekuazioa <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>×</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝒈</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi mathvariant=\"bold-italic\">𝒈</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>m</mi><mi>R</mi><mi mathvariant=\"bold-italic\">𝒈</mi></mrow><mi>L</mi></mfrac><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover></mrow></math> edota <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover></mrow></math> moduan idatz daiteke. Momentu angeluarra, beraz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold\">𝛀</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>m</mi><mi>R</mi><mi mathvariant=\"bold-italic\">𝒈</mi></mrow><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mi>R</mi></mrow><mrow><msub><mi>I</mi><mi>z</mi></msub><mi>ω</mi></mrow></mfrac><msup><mi mathvariant=\"bold-italic\">𝒌</mi><mo>′</mo></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "abiadura angeluar konstantez ari da biratzen, ardatz bertikalaren inguruan, bere modulua aldatu gabe:"
    },
    {
     "mota": "testua",
     "html": "<strong>prezesioa</strong>"
    },
    {
     "mota": "testua",
     "html": "deritzo horrelako higidura bati. Jakina, modu bertsuan higituko da momentu angeluarrarekiko proportzionala den abiadura angeluarra: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝝎</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mi>.</mi></mrow></math> Aurreko adierazpenetan <math display=\"inline\"><mi>L</mi></math> eta <math display=\"inline\"><mi>ω</mi></math> momentu eta abiadura angeluarrek <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatzaren norabidean dituzten osagaiak dira, ez moduluak: <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> abiadurak <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math>-ren inguruan duen noranzkoa izango da prezesioaren noranzkoa <math display=\"inline\"><mrow><mi>O</mi><msup><mi>Z</mi><mo>′</mo></msup></mrow></math> ardatzaren ingurun. Ohar zaitez <math display=\"inline\"><mi mathvariant=\"bold\">𝛀</mi></math> ez dela <math display=\"inline\"><mi>θ</mi></math> angeluaren menpekoa. <br> Gogoratu behar da hemen <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>≪</mo><mi>ω</mi></mrow></math> hipotesia egin dela: izan ere, (5.79) adierazpenean ikusten dugunez, <math display=\"inline\"><mi>ω</mi></math> oso handia denean <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> txikia da. Hemengo hipotesia ez da egiten (baina bai beste bat) 5.6.5 problheman. Kasu orokorrean higidura aztertzeko, 5.5 ataleko Eulerren ekuazioez baliatu behar da. Adibidez, benetako ziba batean erraz ikusten da <strong>nutazioa</strong><span class=\"j-oin\">[Ikus  animazioa.]</span>: <math display=\"inline\"><mi>θ</mi></math> angeluak, konstantea izan beharrean, oszilatu egiten du (ikus 6.7 atala)."
    },
    {
     "mota": "testua",
     "html": "Lurra guztiz esferikoa ez denez, Eguzkiak eta Ilargiak indar-momentu txiki bat eragiten diote. Ondorioz, Lurraren ardatza ez dago beti norabide berean: astiro-astiro prezesatzen ari da, 26 000 urteko periodoarekin, <math display=\"inline\"><mrow><mn>23</mn><msup><mi></mi><mo>∘</mo></msup><msup><mn>26</mn><mo>′</mo></msup></mrow></math>-ko zabalera angeluarreko kono batean barrena. Prezesio-higidura honek ondorio neurgarriak ditu, hala nola ekinozioen prezesioa<span class=\"j-oin\">[Dirudienez, Hiparkok deskribatu zuen ekinozioen prezesioa.]</span>  (konstelazioen posizioak aldatzen ari dira, astrologiaren funsgabetasuna aldatu gabe). Horrela, gaur egun Polaris da iparrizarra; baina piramideak eraiki zirenean, orain dela 4 500 urte edo, Thuban (Alpha Draconis) erabiltzen zuten egiptoarrek. Gainera, urtaro desberdinetan Lurraren eta Eguzkiaren arteko distantzia aldatuz doa, apurka-apurka, eta honek eragina du eguraldian eta, beraz, erregistro geologikoan<span class=\"j-oin\">[Hauetan eragina izan dezaketen beste zikloak ondokoak omen dira: 100 000 urteko periodoko eszentrikotasunaren aldaketa, Lurraren ardatzaren eta orbitaren planoaren arteko angeluaren aldaketa, 41 000 urteko periodoa duena, eta 11 urteko periodoko eguzki-orbanen zikloa.]</span>. Honez gain, Ilargiaren higidura oso irregularra denez, <math display=\"inline\"><msup><mn>9</mn><mo>″</mo></msup></math>-ko nutazio txiki bat dago, 18.6 urteko periodoarekin<span class=\"j-oin\">[Ikus, adibidez, [12, 60, 67] eta Lurraren higidura konplexua etengabe neurtzen duen <em>Tererraren biraketaren zerbitzua</em> delakoaren orrialdea: .]</span>."
    },
    {
     "mota": "irudia",
     "oina": "Laborategiko, espazioaren eta solidoaren sistemak.",
     "src": "media/irudiak/ee4977d59336dbdf.svg",
     "zabalera": 259
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Eulerren ekuazioak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Atal honetan, berriro ere, puntu finko baten inguruko solidoaren higidura aztertuko dugu, baina orain aukeratutako <math display=\"inline\"><mi>O</mi></math> puntua <em>puntu finko bat</em> edo <em>masa-zentroa</em> izango da. Lehen kasuan puntuaren higidura ezaguna da (geldi dago) eta bestean (1.153) higidura-ekuazioa ebatziz lor daiteke, printzipioz. Hasteko, <math display=\"inline\"><mi>O</mi></math> puntuaren inguruko dinamika aztertzeko, bertan kokaturiko <math display=\"inline\"><msup><mi>S</mi><mo>*</mo></msup></math> erreferentzia-sistema bat aukeratuko dugu eta bere ardatzak ez dira biratuko sistema inertzialetan: <strong>espazioaren sistema</strong> deitzen da hau. Puntua finkoa bada, <math display=\"inline\"><msup><mi>S</mi><mo>*</mo></msup></math> inertziala izango da, baina ez nahitaez masa-zentroa denean. Hala ere, bi kasuetan espazioaren <math display=\"inline\"><msup><mi>S</mi><mo>*</mo></msup></math> sistema honetan higidura-ekuazioa <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover></mrow></math> da, non <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑵</mi></math> bektoreak <math display=\"inline\"><mi>O</mi></math> puntuarekiko momentu angeluarra eta kanpo-indarren momentua diren. Hemen, (5.42) ordezkatzen badugu, <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑰</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝝎</mi><mo accent=\"true\">̇</mo></mover></mrow></math> geratzen da: <math display=\"inline\"><msup><mi>S</mi><mo>*</mo></msup></math> sisteman solidoa biratzen ari denez, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑰</mi></math> inertzia-tentsorea aldakorra izango da, oro har. <br> Hau ez da oso erosoa kalkuluak egiteko eta, aldaketa hori saihesteko, solidoarekin batera biratzen den <math display=\"inline\"><mi>S</mi></math> sistema bat aukeratuko dugu: <strong>solidoaren sistema</strong>. Han inertzia-tentsorea konstantea izango da, baina Coriolisen (2.56) teorema erabiliz, <math display=\"block\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>S</mi><mo>*</mo></msup></msub><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>S</mi></msub><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi></mrow></math> lortzen da eta, beraz, (5.81) ekuazioa"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "moduan idatzi behar da solidoaren <math display=\"inline\"><mi>S</mi></math> sisteman. Gainera, azken sistema honen ardatzak <em>nagusiak izateko moduan aukeratuko ditugu</em>  (beti egin daiteke hori puntu batekiko inertzia-tentsoreak hiru norabide nagusi perpendikular onartzen baititu). Azpimarratu behar da (5.84) ekuazioko momentu angeluarra espazioaren sisteman neurtzen dena dela (solidoaren sisteman dena dago geldi eta ez dago momentu angeluarrik). (5.81) eta (5.84) ekuazioak baliokideak dira, bietan agertzen dira magnitude berdinak, baina puntuaren esangura desberdina da: lehenengoan espazioaren sisteman kalkulatutako deribatua adierazten du eta bigarrenean solidoaren sisteman kalkulatutakoa. Solidoaren sistema ez da erabiltzen magnitudeak definitzeko, une bakoitzean haien osagaiak (inertzia-matrizearen elementuak eta momentu eta abiadura angeluarraren proiekzioak) kalkulatzeko baizik. <br> Aukeratu dugun solidoaren <math display=\"inline\"><mi>S</mi></math> sistema nagusian inertzia-tentsorea diagonala eta konstantea izango da, eta beraz, (5.59)-ren ondorioz, <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>x</mi></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>I</mi><mi>y</mi></msub><msub><mi>ω</mi><mi>y</mi></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><msub><mi>I</mi><mi>z</mi></msub><msub><mi>ω</mi><mi>z</mi></msub><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> momentua angeluarraren deribatua <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>x</mi></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>I</mi><mi>y</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>y</mi></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><msub><mi>I</mi><mi>z</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> izango da. Azken bi adierazpen hauek (5.84) ekuazioaren osagaietan ordezkatuz, Eulerren solidoaren higidura-ekuazioak lortzen dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>N</mi><mi>x</mi></msub><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>x</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>y</mi></msub><msub><mi>ω</mi><mi>z</mi></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>N</mi><mi>y</mi></msub><mo>=</mo><msub><mi>I</mi><mi>y</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>y</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>x</mi></msub><mo>−</mo><msub><mi>I</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>z</mi></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>N</mi><mi>z</mi></msub><mo>=</mo><msub><mi>I</mi><mi>z</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>y</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>y</mi></msub><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu azken ekuazioak (5.84)-ren baliokideak direla."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Adibidez, 5.4 ataleko kasuan, kalkuluak <math display=\"inline\"><mrow><msup><mi>O</mi><mo>′</mo></msup><msup><mi>X</mi><mo>′</mo></msup><msup><mi>Y</mi><mo>′</mo></msup><msup><mi>Z</mi><mo>′</mo></msup></mrow></math> sistema inertzialean egin dira. Ikus dezagun zer gertatzen den solidoarekin batera biratzen ari den <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi><mi>Z</mi></mrow></math> sistema ez-inertzialean. (Simetria kontuan hartuz, berdin da nola aukeratzen diren <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> ardatzak <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math> plano nagusian.) Sistema hau inertziala ez denez, inertzia-indarren momentua hartu behar da kontuan eta higidura-ekuazioa ez da <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover></mrow></math>. Izan ere solidoaren abiadura angeluar osoa <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>+</mo><mi mathvariant=\"bold\">𝛀</mi></mrow></math> da eta sistema honetan <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math>  (eta ez bakarrik euren moduluak) konstanteak dira (lehen hurbilketan) eta <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>+</mo><mi mathvariant=\"bold\">𝛀</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi></mrow></math> higidura-ekuazioan <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>≈</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>ω</mi><mo>≪</mo><mi mathvariant=\"normal\">Ω</mi></mrow></math> erabiltzen badira, (5.78) berreskuratzen da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Higidura askea"
    },
    {
     "mota": "testua",
     "html": "Kontsidera dezagun orain kanpo-indarren momenturik pairatzen ez duen solidoaren higidura (<math display=\"inline\"><mi>O</mi></math>-ren inguruan). Hori gerta daiteke kanpo-indarrik ez dagoenean edo, adibidez, eremu grabitatorio homogeneo batean erortzen ari den solidoaren higidura bere masa-zentroan kokaturiko solidoaren sisteman aztertzen dugulako. Eulerren ekuazioak kasu horretan hauexek ditugu: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>I</mi><mi>x</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>x</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>y</mi></msub><msub><mi>ω</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>I</mi><mi>y</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>y</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>x</mi></msub><mo>−</mo><msub><mi>I</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>I</mi><mi>z</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>y</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> Dakigunez, solidoaren sisteman ekuazio hauek,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "adierazpenaren osagaiak dira. Hortaz, <em>solidoaren sisteman momentu angeluarra <math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math> abiadura angeluarraz ari da biratzen, bere modulua aldatu gabe</em>. Bestalde, espazioaren sisteman momentu angeluarra konstantea da eta abiadura angeluarra ari da biratzen bere ingurun<span class=\"j-oin\">[Ikus  animazioa.]</span>. <br> Ezezagunak <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>i</mi></msub><msub><mi>ω</mi><mi>j</mi></msub></mrow></math> gai koadratikoetan agertzen direnez, (5.91)–(5.93) ekuazioak ez dira linealak. Hemen, hortaz, bakarrik aztertuko dira bi kasu berezi erraz. Lehengoan solidoaren simetria handiagoa izango da eta bigarrenean soluzio errazak (konstanteak) eta euren egonkortasuna aztertuko dira."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ziba simetriko askea"
    },
    {
     "mota": "testua",
     "html": "Ziba simetrikoa bada eta berdinak diren inertzia-momentu nagusiak <math display=\"inline\"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>=</mo><msub><mi>I</mi><mi>y</mi></msub></mrow></math>, hauexek dira higidura-ekuazioak: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>I</mi><mi>x</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>x</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>y</mi></msub><msub><mi>ω</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>I</mi><mi>x</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>y</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>x</mi></msub><mo>−</mo><msub><mi>I</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>I</mi><mi>z</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> Azken ekuazioan <math display=\"inline\"><msub><mi>ω</mi><mi>z</mi></msub></math> osagaia higidura-konstantea dela ikusten dugu eta <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>≡</mo><mfrac><mrow><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub></mrow><msub><mi>I</mi><mi>x</mi></msub></mfrac><msub><mi>ω</mi><mi>z</mi></msub></mrow></math> magnitude eskalarra eta <math display=\"block\"><mrow><mi mathvariant=\"bold\">𝛀</mi><mo>≡</mo><mi mathvariant=\"normal\">Ω</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mfrac><mrow><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub></mrow><msub><mi>I</mi><mi>x</mi></msub></mfrac><msub><mi>ω</mi><mi>z</mi></msub><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> bektorea ere higidura-konstanteak izango dira. Baina azken hau erabiliz, (5.95)–(5.97) ekuazioak"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝝎</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "moduan idazten dira: <em>solidoaren sisteman <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> abiadura angeluarra <math display=\"inline\"><mi mathvariant=\"bold\">𝛀</mi></math> abiadura angeluarraz ari da biratzen inertzia-plano nagusiarekiko perpendikularra den <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatz nagusiaren inguruan</em>. Biraketa-higidura honen ondorioz, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> bektoreak kono bat sortuko du <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatz nagusiaren inguruan: <strong>solidoaren konoa</strong>. Abiadura angeluarraren <math display=\"inline\"><mi>ω</mi></math> modulua eta biraketa-ardatzean eta norabide perpendikularrean dituen <math display=\"inline\"><msub><mi>ω</mi><mi>z</mi></msub></math> eta <math display=\"inline\"><msqrt><mrow><msubsup><mi>ω</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>ω</mi><mi>y</mi><mn>2</mn></msubsup></mrow></msqrt></math> proiekzioak ez dira aldatuko higiduran."
    },
    {
     "mota": "irudia",
     "oina": "Solidoaren eta espazioaren konoak <math display=\"inline\"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>&gt;</mo><msub><mi>I</mi><mi>z</mi></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>&lt;</mo><msub><mi>I</mi><mi>z</mi></msub></mrow></math> kasuetan.",
     "src": "media/irudiak/c6614f8fb5125c39.svg",
     "zabalera": 271
    },
    {
     "mota": "testua",
     "html": "Emaitza hauek esplizituki egiazta daitezke, kasu honetan Eulerren ekuazioak erraz ebazten baitira. Izan ere, <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>-ren definizioarekin, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>x</mi></msub><mo>+</mo><mi mathvariant=\"normal\">Ω</mi><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>y</mi></msub><mo>−</mo><mi mathvariant=\"normal\">Ω</mi><msub><mi>ω</mi><mi>x</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> moduan idazten dira, eta bigarrenaren deribatuan lehenengoa ordezkatuz, oszilador harmonikoaren ekuazioa lortzen dugu: <math display=\"block\"><mrow><msub><mover><mi>ω</mi><mo accent=\"true\">̈</mo></mover><mi>y</mi></msub><mo>−</mo><mi mathvariant=\"normal\">Ω</mi><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>x</mi></msub><mo>=</mo><msub><mover><mi>ω</mi><mo accent=\"true\">̈</mo></mover><mi>y</mi></msub><mo>+</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Ekuazio honen <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> soluzio ezaguna —gogoratu (1.112) emaitza— (5.102) ekuazioan ordezkatuz, <math display=\"inline\"><msub><mi>ω</mi><mi>x</mi></msub></math> kalkulatzen da. Hauexek dira, hortaz, Eulerren ekuazioen soluzioak: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>ω</mi><mi>x</mi></msub><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>ω</mi><mi>z</mi></msub><mo>=</mo><mi>C</mi><mo>,</mo></mtd></mtr></mtable></math> non <math display=\"inline\"><mrow><mi>A</mi><mo>,</mo><msub><mi>φ</mi><mn>0</mn></msub></mrow></math> eta <math display=\"inline\"><mi>C</mi></math> integrazio-konstanteak diren. <math display=\"inline\"><mrow><msubsup><mi>ω</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>ω</mi><mi>y</mi><mn>2</mn></msubsup><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup></mrow></math> dugu, beraz. <br> Bestalde, solido aske orokorraren kasuan bezala, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> momentu angeluarra <math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math> abiadura angeluarraz ari da biratzen. Gainera, <math display=\"inline\"><mrow><mi mathvariant=\"bold\">𝛀</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> bektoreak plano batean daude beti: <math display=\"block\"><mrow><mi mathvariant=\"bold\">𝛀</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi mathvariant=\"normal\">Ω</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ω</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ω</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ω</mi><mi>z</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>L</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>L</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>L</mi><mi>z</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi mathvariant=\"normal\">Ω</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ω</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ω</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ω</mi><mi>z</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>z</mi></msub><msub><mi>ω</mi><mi>z</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Beraz, hiru bektoreak elkarrekin biratzen dira."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu solidoaren sisteman modu honetan higitzen dela momentu angeluarra: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Espazioaren sisteman, berriz, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> konstantea da eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> bere ingurun biratzen da. Gainera, abiadura angeluarraren <math display=\"inline\"><mi>ω</mi></math> modulua eta momentu angeluarraren norabidean duen <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><msubsup><mi>ω</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msub><mi>I</mi><mi>x</mi></msub><msubsup><mi>ω</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msub><mi>I</mi><mi>z</mi></msub><msubsup><mi>ω</mi><mi>z</mi><mn>2</mn></msubsup><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><msup><mi>A</mi><mn>2</mn></msup><mo>+</mo><msub><mi>I</mi><mi>z</mi></msub><msubsup><mi>ω</mi><mi>z</mi><mn>2</mn></msubsup></mrow></math> proiekzioa konstanteak direnez, biraketa horretan <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> bektoreak kono bat sortuko du <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math>-ren ingurun: <strong>espazioaren konoa</strong>. Espazioaren sisteman solidoaren konoa espazioaren konoaren gainazal geldian zehar biratzen da labaindu gabe, 5.13 irudian erakusten den bezala<span class=\"j-oin\">[Ikus  animazioa.]</span>."
    },
    {
     "mota": "irudia",
     "oina": "Espazioaren eta solidoaren triedroen arteko Eulerren angeluak.",
     "src": "media/irudiak/c08657f45e24dc73.svg",
     "zabalera": 173
    },
    {
     "mota": "testua",
     "html": "Izan ere, 5.14 irudiko notazioa erabiliz, espazioaren sistemako <math display=\"inline\"><mrow><mi>O</mi><msup><mi>Z</mi><mo>′</mo></msup></mrow></math> ardatza momentu angeluar konstantearen norabidean eta noranzkoan aukeratuko dugu. Ziba simetrikoa denez, beti aukera dezakegu, interesatzen zaigun unean, solidoaren <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatza nodo-lerroan, <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><mn>0</mn></mrow></math> izateko moduan. Horrela, (2.61) adierazpenaren ondorioz, hauxe dugu une horretan solidoaren sisteman: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mn>0</mn><mo>=</mo><msub><mi>L</mi><mi>x</mi></msub><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>x</mi></msub><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>L</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><msub><mi>L</mi><mi>y</mi></msub><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>L</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><msub><mi>L</mi><mi>z</mi></msub><mo>=</mo><msub><mi>I</mi><mi>z</mi></msub><msub><mi>ω</mi><mi>z</mi></msub><mo>=</mo><msub><mi>I</mi><mi>z</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Momentu eta abiadura angeluarren arteko <math display=\"inline\"><mi>θ</mi></math> angelua konstantea dela berreskuratzen dugu lehenengo ekuaziotik. Solidoaren <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatza <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>L</mi><mi>/</mi><msub><mi>I</mi><mi>x</mi></msub></mrow></math> prezesio-abiadura konstantez biratzen ari dela momentu angeluarraren ingurun ikusten dugu (5.112) emaitzan."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Higidura askea ardatz nagusi baten inguruan"
    },
    {
     "mota": "testua",
     "html": "Atal honetan ez dugu eskatuko solidoa ziba simetrikoa izateko, baina bai ardatz nagusi baten inguruan higitzen dela. Hirugarren ardatzaren inguruan biratzen bada, <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>x</mi></msub><mo>=</mo><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math> izango dugu eta, (5.93) ekuazioaren ondorioz, <math display=\"inline\"><msub><mi>ω</mi><mi>z</mi></msub></math> konstantea da. Honek esan nahi du <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ktea.</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> guztiak (5.91)—(5.93) sistemaren soluzio konstanteak direla, oreka-puntuak, beraz<span class=\"j-oin\">[Oreka dinamikoa dugu hemen: solidoa biratzen ari da eta masa-zentroa azeleraturik egon daiteke.]</span>. <br> Horixe lortu zuen Léon Foucaultek, 1852an giroskopioa asmatzean, Cardan esekidura bat erabiliz (ikus 5.15 irudiko argazkia). Horrela biraketa-ardatza finko zegoen sistema inertzialean eta Lurrarekiko astiro-astiro biratzen zen, mikroskopio baten bidez ikusten zen bezala. Horrela Lurraren biraketa-higidura frogatu zuen, Lurrean egindako esperimentu baten bidez, lehenago penduluaz baliatuz egina zuen bezala. Cardan esekiduraren erdia kentzen bada, 5.103 problemako iparrorratz giroskopikoa lor daiteke. Biraketa-ardatzaren mutur batean kokatzen bada, 5.4 ataleko prezesioa (eta nutazioa) lortzen da, 5.1 irudian eta 6.7 atalean ikusten den bezala."
    },
    {
     "mota": "testua",
     "html": "Higidura aske honen egonkortasuna aztertzeko, eman dezagun perturbazio txiki baten ondorioz, orain <math display=\"inline\"><msub><mi>ω</mi><mi>x</mi></msub></math> eta <math display=\"inline\"><msub><mi>ω</mi><mi>y</mi></msub></math> ez direla zero, baina bai oso txikiak, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>ω</mi><mi>x</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>ω</mi><mi>y</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≪</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>ω</mi><mi>z</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>. (5.93) ekuazioan <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>y</mi></msub></mrow></math> biderkadura arbuiatzen bada, <math display=\"inline\"><msub><mi>ω</mi><mi>z</mi></msub></math>  (ia) konstantea dela ikusten dugu. Gainera, (5.92) ekuazioaren deribatuan (5.91) ordezkatu ondoren, <math display=\"block\"><mrow><mi>α</mi><mo>≡</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>x</mi></msub><mo>−</mo><msub><mi>I</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>y</mi></msub><mo>−</mo><msub><mi>I</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><msub><mi>I</mi><mi>x</mi></msub><msub><mi>I</mi><mi>y</mi></msub></mrow></mfrac><msubsup><mi>ω</mi><mi>z</mi><mn>2</mn></msubsup></mrow></math> konstantea definitzen bada, ondoko era baliokidean idazten (5.91)–(5.93) ekuazioak dira: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>ω</mi><mo accent=\"true\">̈</mo></mover><mi>y</mi></msub><mo>+</mo><mi>α</mi><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>ω</mi><mi>x</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>I</mi><mi>y</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>y</mi></msub></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>z</mi></msub></mrow></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> Bi kasu ditugu, beraz."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Biraketa-ardatzarekiko <math display=\"inline\"><msub><mi>I</mi><mi>z</mi></msub></math> inertzia-momentua handiena (<math display=\"inline\"><mrow><msub><mi>I</mi><mi>z</mi></msub><mo>&gt;</mo><msub><mi>I</mi><mi>x</mi></msub><mo>,</mo><msub><mi>I</mi><mi>y</mi></msub></mrow></math>) —giroskopioaren kasuan bezala— edo txikiena (<math display=\"inline\"><mrow><msub><mi>I</mi><mi>z</mi></msub><mo>&lt;</mo><msub><mi>I</mi><mi>x</mi></msub><mo>,</mo><msub><mi>I</mi><mi>y</mi></msub></mrow></math>) bada, <math display=\"inline\"><mrow><mi>α</mi><mo>&gt;</mo><mn>0</mn></mrow></math> da eta (5.115) ekuazioa <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>≡</mo><msqrt><mi>α</mi></msqrt></mrow></math> pultsazioa duen oszilador harmonikoaren ekuazioa: <math display=\"block\"><mrow><msub><mover><mi>ω</mi><mo accent=\"true\">̈</mo></mover><mi>y</mi></msub><mo>+</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math> Honen soluzioa eta (5.116) erabiliz, hauxe dugu: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>ω</mi><mi>x</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>I</mi><mi>y</mi></msub><mi>A</mi><mi mathvariant=\"normal\">Ω</mi></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>z</mi></msub></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math> Ondorioz, hasieran <math display=\"inline\"><msub><mi>ω</mi><mi>x</mi></msub></math> eta <math display=\"inline\"><msub><mi>ω</mi><mi>y</mi></msub></math> txikiak baziren, horrelakoak izango dira betiko: <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><mi>/</mi><mi mathvariant=\"normal\">Ω</mi></mrow></math> periodoarekin biratuko da <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> ardatz nagusiaren ingurun. <br> Ekinozioen prezesioa sortzen duen indar-momentu txikia (ikus 252. orrialdea) alde batera utzita, Lurraren higidura asketzat kontsidera dezakegu hurbilketa onean. Esferoide oblatua denez, <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatza Lurraren ardatza bada, <math display=\"inline\"><mrow><msub><mi>I</mi><mi>z</mi></msub><mo>&gt;</mo><msub><mi>I</mi><mi>x</mi></msub><mo>=</mo><msub><mi>I</mi><mi>y</mi></msub></mrow></math> dugu eta, zehazkiago, honako hau: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mfrac><mrow><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub></mrow><msub><mi>I</mi><mi>x</mi></msub></mfrac><msub><mi>ω</mi><mi>z</mi></msub><mo>≈</mo><mfrac><msub><mi>ω</mi><mi>z</mi></msub><mrow><mn>300</mn><mi>.</mi></mrow></mfrac></mrow></math> Ondorioz, Eulerrek aurresan zuen bezala, Lurraren ardatza 300 eguneko periodoarekin prezesatzea espero genuke; baina Lurra ez da zurruna eta biskositateak indargetuko luke horrelako higidura bat. Hala ere, lurrikarek eta urtaroen aldaketak sortutako prezesio irregular txiki bat gertatzen da. Seth Carlo Chandlerrek neurtu zuen lehenengoz<span class=\"j-oin\">[Badirudi Küstnerrek gauza bera aurkitu zuela Berlinen 1884an, 40 urte lehenago Besselek egindako iradokizunari jarraituz.]</span> fenomeno hau 1891n, Harvardeko latitudea sistematikoki aldatzen zela frogatzean: poloan biraketa- eta simetria-ardatzen arteko distantzia beti da 20 m baino txikiagoa. Higidura irregular honen batez besteko periodoa, <strong>Chandlerren periodoa</strong>, ez da 300 egunekoa, 440 egun ingurukoa baizik. Diferentzia honen azalpen partziala Lurraren zurruntasunik eza da, Simon Newcombek azaldu zuenez<span class=\"j-oin\">[Ikus [7] liburuko 7.9 atala, [12] testuko 8.6 atala eta 252. orrialdeko oin-oharra.]</span>."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<math display=\"inline\"><msub><mi>I</mi><mi>z</mi></msub></math> inertzia-momentua tartekoa bada (<math display=\"inline\"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>&lt;</mo><msub><mi>I</mi><mi>z</mi></msub><mo>&lt;</mo><msub><mi>I</mi><mi>y</mi></msub></mrow></math> edo <math display=\"inline\"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>&gt;</mo><msub><mi>I</mi><mi>z</mi></msub><mo>&gt;</mo><msub><mi>I</mi><mi>y</mi></msub></mrow></math>), ordea, <math display=\"inline\"><mrow><mi>λ</mi><mo>≡</mo><msqrt><mrow><mi>−</mi><mi>α</mi></mrow></msqrt></mrow></math> definizioarekin, (5.115) ekuazioa <math display=\"block\"><mrow><msub><mover><mi>ω</mi><mo accent=\"true\">̈</mo></mover><mi>y</mi></msub><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math> da, eta honen soluzioa erraz aurkitzen da 1.4.4 ataleko metodoa erabiliz <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> integrazio-konstanteen bidez: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>λ</mi><mi>t</mi></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>λ</mi><mi>t</mi></mrow></msup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>ω</mi><mi>x</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>I</mi><mi>y</mi></msub><mi>λ</mi></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>z</mi></msub></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>λ</mi><mi>t</mi></mrow></msup><mo>−</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>λ</mi><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Beraz, hasieran oso txikiak izan arren, <math display=\"inline\"><msub><mi>ω</mi><mi>x</mi></msub></math> eta <math display=\"inline\"><msub><mi>ω</mi><mi>y</mi></msub></math> handituz joango dira: ardatz horren inguruko biraketa ezegonkorra da."
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu (5.122) ekuazioaren soluzioa dela (5.123)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Emaitza hau <strong>tenis-erraketaren teorema</strong> deitzen da eta horrelako tresna (edo paralelepipedo batekin) oso erraz egiaztatzen da esperimentalki: inertzia-momentu handieneko eta txikieneko ardatz nagusien inguruan biraraztea oso erraza den arren, hirugarrenaren inguruko biraketa ezegonkorra da<span class=\"j-oin\">[Ikus  animazioa.]</span>."
    },
    {
     "mota": "irudia",
     "oina": "Tenis-erraketaren ardatz nagusiak.",
     "src": "media/irudiak/bdd2d9e87b510cbd.svg",
     "zabalera": 289
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tenis-erraketaren kasuan, zein ardatz nagusirekiko inertzia-momentua da handiena? Zeini dagokio txikiena? Zergatik?"
      }
     ]
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Problema ebatziak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ardatz paraleloen teorema"
    },
    {
     "mota": "testua",
     "html": "<em><math display=\"inline\"><mi>S</mi></math> erreferentzia-sistemaren eta masa-zentroaren <math display=\"inline\"><msup><mi>S</mi><mo>*</mo></msup></math> sistemaren ardatzak elkarrekiko paraleloak\ndira. Masa-zentroaren posizio-bektorea <math display=\"inline\"><mrow><mover><mrow><mi>O</mi><msup><mi>O</mi><mo>*</mo></msup></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></msubsup><msub><mi>X</mi><mi>k</mi></msub><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>k</mi></msub><mo>=</mo><mi>X</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>Y</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi>Z</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> bada, froga ezazu bi sistemetan neurturiko inertzia-matrizeen arteko erlazioa\nhonako hau dela:\n<math display=\"block\"><mrow><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><msubsup><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>*</mo></msubsup><mo>+</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>X</mi><mi>i</mi></msub><msub><mi>X</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math></em>"
    },
    {
     "mota": "testua",
     "html": "37. orrialdeko Königen teoremaren antzekoa da emaitza hau: <em>triedro batean neurturiko inertzia-matrizea, masa-zentroaren sistemako triedro paraleloan neurtzen den inertzia-matrizea eta sistemaren masa osoa izanik masa-zentroarekin batera higitzen den alegiazko partikularena gehituz lortzen da</em>. Kalkuluak egiterakoan, ondoko matrize-adierazpen baliokidea izan daiteke erabilgarriena: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑰</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑰</mi><mo>*</mo></msup><mo>+</mo><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mn mathvariant=\"bold\">𝟏</mn><mo>−</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>X</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>X</mi><mi>Y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>X</mi><mi>Z</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>X</mi><mi>Y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>Y</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>Y</mi><mi>Z</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>X</mi><mi>Z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>Y</mi><mi>Z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>Z</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/2dcd353f68c8f618.svg",
     "zabalera": 267
    },
    {
     "mota": "testua",
     "html": "Galileoren transformazioen arabera, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>*</mo></msup><mo>+</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><msup><mi>r</mi><mrow><mi>*</mi><mn>2</mn></mrow></msup><mo>+</mo><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>*</mo></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>x</mi><mi>i</mi></msub><mo>=</mo><msubsup><mi>x</mi><mi>i</mi><mo>*</mo></msubsup><mo>+</mo><msub><mi>X</mi><mi>i</mi></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo>=</mo><msubsup><mi>x</mi><mi>i</mi><mo>*</mo></msubsup><msubsup><mi>x</mi><mi>j</mi><mo>*</mo></msubsup><mo>+</mo><msub><mi>X</mi><mi>i</mi></msub><msub><mi>X</mi><mi>j</mi></msub><mo>+</mo><msubsup><mi>x</mi><mi>i</mi><mo>*</mo></msubsup><msub><mi>X</mi><mi>j</mi></msub><mo>+</mo><msubsup><mi>x</mi><mi>j</mi><mo>*</mo></msubsup><msub><mi>X</mi><mi>i</mi></msub><mo>,</mo></mtd></mtr></mtable></math> dugu eta, hortaz, inertzia-matrizearen osagaiak honako hauek dira: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mrow><mi>*</mi><mn>2</mn></mrow></msup><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msubsup><mi>x</mi><mi>i</mi><mo>*</mo></msubsup><msubsup><mi>x</mi><mi>j</mi><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi><mo>+</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>X</mi><mi>i</mi></msub><msub><mi>X</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mo>+</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>*</mo></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑹</mi><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msubsup><mi>x</mi><mi>i</mi><mo>*</mo></msubsup><msub><mi>X</mi><mi>j</mi></msub><mo>−</mo><msub><mi>X</mi><mi>i</mi></msub><msubsup><mi>x</mi><mi>j</mi><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi><mi>.</mi></mtd></mtr></mtable></math> Adierazpen honetako lehen integrala <math display=\"inline\"><msubsup><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>*</mo></msubsup></math> da; bigarrenean integrakizuna konstantea da eta emaitzaren bigarren gaia berreskuratzen da, <math display=\"inline\"><mrow><msub><mo>∫</mo><mi>V</mi></msub><mi>d</mi><mi>m</mi><mo>=</mo><mi>m</mi></mrow></math> erabiliz. Azken integrala nulua da, masa-zentroaren definizioaren ondorioz, masa-zentroaren sisteman masa-momentua zero baita: <math display=\"block\"><mrow><mi>m</mi><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mo>*</mo></msup><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>*</mo></msup><mi>d</mi><mi>m</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>m</mi><msubsup><mi>X</mi><mi>i</mi><mo>*</mo></msubsup><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><msubsup><mi>x</mi><mi>i</mi><mo>*</mo></msubsup><mi>d</mi><mi>m</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Steinerren teorema"
    },
    {
     "mota": "testua",
     "html": "<em><math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><msup><mi>A</mi><mo>*</mo></msup></math> ardatz paraleloen arteko distantzia <math display=\"inline\"><mi>a</mi></math> da eta <math display=\"inline\"><msup><mi>A</mi><mo>*</mo></msup></math> delakoa masa-zentrotik pasatzen da.\nFroga ezazu ardatz hauekiko inertzia-momentuek <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><msup><mi>I</mi><mo>*</mo></msup><mo>+</mo><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math> erlazioa betetzen dutela. Zein da\nbiraketa-erradioen arteko erlazioa?</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatz kartesiarra <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><msup><mi>A</mi><mo>*</mo></msup></math>-rekiko paraleloa izateko moduan aukeraturik, biekiko perpendikularra dena <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> bada, aurreko problemaren notazioan <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi>a</mi><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>X</mi><mn>1</mn></msub><mo>=</mo><mi>a</mi><mo>,</mo><msub><mi>X</mi><mn>2</mn></msub><mo>=</mo><msub><mi>X</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> dugu. Gainera, aukera horrekin <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><msup><mi>A</mi><mo>*</mo></msup></math> ardatzekiko inertzia-momentuak <math display=\"inline\"><msub><mi>I</mi><mn>33</mn></msub></math> eta <math display=\"inline\"><msubsup><mi>I</mi><mn>33</mn><mo>*</mo></msubsup></math> dira, hurrenez hurren. Beraz, ardatz paraleloen teoremaren ondorioz, honako hau geratzen zaigu: <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msub><mi>I</mi><mn>33</mn></msub><mo>=</mo><msubsup><mi>I</mi><mn>33</mn><mo>*</mo></msubsup><mo>+</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><msub><mi>δ</mi><mn>33</mn></msub><mo>−</mo><msub><mi>X</mi><mn>3</mn></msub><msub><mi>X</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>I</mi><mo>*</mo></msup><mo>+</mo><mi>m</mi><msup><mi>a</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Emaitza hau <math display=\"inline\"><mi>m</mi></math>-rekin zatituz, hauxe lortzen da: <math display=\"block\"><mrow><msup><mi>K</mi><mn>2</mn></msup><mo>=</mo><msup><mi>K</mi><mrow><mi>*</mi><mn>2</mn></mrow></msup><mo>+</mo><msup><mi>a</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Eraztuna"
    },
    {
     "mota": "testua",
     "html": "<em>Eraztun baten masa <math display=\"inline\"><mi>m</mi></math> da eta erradioa <math display=\"inline\"><mi>a</mi></math>. Haren zentroa <math display=\"inline\"><mrow><mi>R</mi><mo>≫</mo><mi>a</mi></mrow></math> erradioko zirkunferentzia batean\nzehar <math display=\"inline\"><mi>v</mi></math> abiadura eskalar konstantez higitzen ari da. Ez dago labainketarik eta <math display=\"inline\"><mi>α</mi></math> angelua konstantea\nda. Froga ezazu <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>≪</mo><mi>ω</mi></mrow></math> dela. Aurki ezazu zoruak eragindako indarra. Eraztunaren\nmasa-zentroarekiko momentu angeluarra <math display=\"inline\"><mi>ω</mi></math> abiadura angeluarrari dagokiona dela (eta, beraz, <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>\nprezesioari dagokiona arbuiagarria) jorik, froga ezazu hurrengo erlazioa betetzen dela:\n<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>v</mi><mn>2</mn></msup></mrow><mi>g</mi></mfrac><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mi>α</mi><mi>.</mi></mrow></math></em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/e6fa3acf3499551e.svg",
     "zabalera": 154
    },
    {
     "mota": "testua",
     "html": "Labaindu gabe higitzen denez, masa-zentroaren abiadura hauxe da: <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mi mathvariant=\"normal\">Ω</mi><mi>R</mi><mo>=</mo><mi>ω</mi><mi>a</mi><mi>.</mi></mrow></math> Beraz, <math display=\"inline\"><mrow><mi>R</mi><mo>≫</mo><mi>a</mi></mrow></math> baldintzatik <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>≪</mo><mi>ω</mi></mrow></math> dela lortzen dugu. Zoruak eragindako indarra <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> bada, masa-zentroaren higidura-ekuazioa hurrengoa izango da ardatz bertikalaren inguruko koordenatu zilindrikoetan: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>−</mo><mi>m</mi><mi>g</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mi>−</mi><mi>m</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>R</mi></mfrac><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math> eta, beraz, <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>m</mi><mi>g</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>−</mo><mi>m</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>R</mi></mfrac><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math> Prezesioari dagokion ekarpena arbuiatuz, honela adierazten da masa-zentroarekiko momentu angeluarra: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mi>m</mi><mi>a</mi><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mover><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Ω</mi><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover></mrow></math> dela kontuan hartuz, zera lortzen dugu: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Ω</mi><mi>m</mi><mi>a</mi><mi>v</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mfrac><mrow><mi>m</mi><mi>a</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><mi>R</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math> Bestaldetik, masa-zentroaren sisteman <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> indarraren aplikazio-puntua <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dela kontuan hartuz, indar-momentu osoa hauxe da: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>m</mi><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>R</mi></mfrac><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>−</mo><mi>g</mi><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math> Momentu angeluarraren higidura-ekuazioa <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover></mrow></math> denez, zuzenean ikusten da <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>2</mn><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> erlazioa bete behar dela aztertutako higiduran."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hemisferio hutsa"
    },
    {
     "mota": "testua",
     "html": "<em>Kalkula itzazu hemisferio huts batek hurrengo hiru puntuen inguruan dituen inertzia-tentsorea eta\nmomentu nagusiak: <br>\n(a)  <math display=\"inline\"><mi>O</mi></math> zentroa. <br>\n(b) Masa-zentroa. <br>\n(c) Mugako <math display=\"inline\"><mi>P</mi></math> puntua.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/d54b22ab36cad619.svg",
     "zabalera": 227
    },
    {
     "mota": "testua",
     "html": "(a) Irudiko koordenatu esferikoetan <math display=\"inline\"><mi>θ</mi></math> eta <math display=\"inline\"><mrow><mi>θ</mi><mo>+</mo><mi>d</mi><mi>θ</mi></mrow></math> bitarteko eraztun zirkularraren erradioa <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> da, esferaren erradioa <math display=\"inline\"><mi>a</mi></math> bada. Beraz, <math display=\"inline\"><mi>φ</mi></math> eta <math display=\"inline\"><mrow><mi>φ</mi><mo>+</mo><mi>d</mi><mi>φ</mi></mrow></math> bitarteko elementu infinitesimalaren oinarria, altuera eta azalera <math display=\"inline\"><mrow><mi>r</mi><mi>d</mi><mi>φ</mi><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>φ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>a</mi><mi>d</mi><mi>θ</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>d</mi><mi>S</mi><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><mi>d</mi><mi>φ</mi></mrow></math> dira, hurrenez hurren. Masa, hortaz, hauxe dugu: <math display=\"block\"><mrow><mi>d</mi><mi>m</mi><mo>=</mo><mfrac><mi>m</mi><mrow><mn>2</mn><mi>π</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>S</mi><mo>=</mo><mfrac><mi>m</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><mi>d</mi><mi>φ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/45bbfbf909be6048.svg",
     "zabalera": 241
    },
    {
     "mota": "testua",
     "html": "Inertzia-matrizea <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi mathvariant=\"bold-italic\">𝑰</mi><mi>O</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>x</mi><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>x</mi><mi>z</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>x</mi><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>y</mi><mi>z</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>x</mi><mi>z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>y</mi><mi>z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>d</mi><mi>φ</mi><mo>×</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></math> da eta <math display=\"inline\"><mi>φ</mi></math>-rekiko integrala egiteko <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>d</mi><mi>φ</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>d</mi><mi>φ</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>d</mi><mi>φ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>φ</mi><mi>d</mi><mi>φ</mi><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mi>d</mi><mi>φ</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mi>d</mi><mi>φ</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mfrac><mrow><mn>1</mn><mo>±</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>φ</mi></mrow><mn>2</mn></mfrac><mi>d</mi><mi>φ</mi><mo>=</mo><mi>π</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>d</mi><mi>φ</mi><mo>=</mo><mn>2</mn><mi>π</mi></mtd></mtr></mtable></math> emaitza erabilgarriez baliatzen bagara, honako hau lortzen da: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑰</mi><mi>O</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><mi>.</mi></mrow></math> Orain, <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mfrac><mrow><mn>3</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn><mi>θ</mi></mrow><mn>4</mn></mfrac><mi>d</mi><mi>θ</mi><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math> integralak erabiliz, hauxe dugu: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑰</mi><mi>O</mi></msub><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Ziba esferikoa da, beraz, <math display=\"inline\"><mi>O</mi></math> zentroaren inguruan. <br> Integrala egin gabe ere erraz kalkula zitekeen hau, <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math> masako esfera hutsaren inertzia-matrizean bi erdien ekarpenak guztiz berdinak baitira. Bestalde, eraztunaren inertzia-momentuak, ardatz paraleloen teorema eta simetria erabiliz ere egin daiteke (errazago) kalkulua. <br> (b) Masa-zentroaren posizioa zuzenean kalkulatzen da: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑹</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>X</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>X</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>X</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi><mo>=</mo><mfrac><mi>a</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>d</mi><mi>φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>a</mi><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>/</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Orain ardatz paraleloen teoremaz baliatuz: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi mathvariant=\"bold-italic\">𝑰</mi><mo>*</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑰</mi><mi>O</mi></msub><mo>−</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>X</mi><mi>i</mi></msub><msub><mi>X</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mfrac><msup><mi>a</mi><mn>2</mn></msup><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "(c)  <math display=\"inline\"><mi>P</mi></math> puntuko triedroaren <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> ardatza norabide erradial horizontalean eta kanporantz aukeratzen bada, eta <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> bertikalean eta beherantz, <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>Y</mi><mo>=</mo><mi>−</mi><mi>a</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math> erabili behar dira ardatz paraleloen teoreman: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi mathvariant=\"bold-italic\">𝑰</mi><mi>P</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑰</mi><mo>*</mo></msup><mo>+</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>X</mi><mi>i</mi></msub><msub><mi>X</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>5</mn><mn>4</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>4</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Erraz frogatzen da inertzia-momentu nagusiak <math display=\"block\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>5</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>I</mi><mrow><mn>2</mn><mo>,</mo><mn>3</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn>7</mn><mo>±</mo><mn>3</mn><msqrt><mn>2</mn></msqrt></mrow><mn>6</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math> direla eta norabide nagusiak <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒊</mi></math>, eta <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>∓</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒋</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> bektoreenak."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Eulerren ekuazio aldatuak"
    },
    {
     "mota": "testua",
     "html": "<em>Irudiko esfera homogeneoaren erradioa <math display=\"inline\"><mi>a</mi></math> da eta <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez ari da biratzen\nsimetria-ardatz baten inguruan, azken hau <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> abiadura konstantez ardatz bertikalaren inguruan biratzen\ndelarik. <math display=\"inline\"><mi>O</mi></math> puntua finkoa da. Marruskadura guztiak arbuiagarriak badira, zein da <math display=\"inline\"><mi>θ</mi></math> angelu konstantea?\n<math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> baino handiagoa izan daiteke? <br>  Oharra: Ebatzi problema Eulerren ekuazioen aldaera\negokia erabiliz.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/38d627e4861d313b.svg",
     "zabalera": 118
    },
    {
     "mota": "testua",
     "html": "Kanpo-indarren momentua konstantea izateko, solidoaren sistema baino egokiagoa izango da irudikoa: <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> abiaduraz ari da biratzen, <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Z</mi></mrow></math> planoa bi abiadura angeluarrek definiturikoa izateko moduan, baina ez da biratzen simetria-ardatzaren inguruan. Triedro hau nagusia da eta bertan <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>,</mo><mi mathvariant=\"bold\">𝛀</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝑰</mi></mrow></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> higidura-konstanteak dira eta Coriolisen teorema erabiliz hauxe dugu: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>≠</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold\">𝛀</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/18cff9c5c7b27ef7.svg",
     "zabalera": 149
    },
    {
     "mota": "testua",
     "html": "Triedro horretan <math display=\"inline\"><msub><mi>ω</mi><mi>i</mi></msub></math> guztiak konstanteak direnez, <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> da. Beraz, <math display=\"inline\"><mi>O</mi></math> puntuaren eta esferaren zentroaren arteko distantzia <math display=\"inline\"><mi>R</mi></math> bada, solidoaren abiadura angeluar osoa <math display=\"inline\"><mrow><mi mathvariant=\"bold\">𝛀</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math> dela kontuan hartuz, hauxe dugu: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>N</mi><mi>y</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>z</mi></msub><msub><mi>L</mi><mi>x</mi></msub><mo>−</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>x</mi></msub><msub><mi>L</mi><mi>z</mi></msub><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>z</mi></msub><msub><mi>I</mi><mi>x</mi></msub><msub><mi mathvariant=\"normal\">Ω</mi><mi>x</mi></msub><mo>−</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>x</mi></msub><msub><mi>I</mi><mi>z</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>z</mi></msub><mo>+</mo><mi>ω</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>x</mi></msub><msub><mi mathvariant=\"normal\">Ω</mi><mi>z</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>x</mi></msub><mo>−</mo><msub><mi>I</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>x</mi></msub><mi>ω</mi><msub><mi>I</mi><mi>z</mi></msub></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>x</mi></msub><mo>−</mo><msub><mi>I</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><msub><mi>I</mi><mi>z</mi></msub><mi mathvariant=\"normal\">Ω</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mtd></mtr></mtable></math> Orain <math display=\"inline\"><mrow><msub><mi>I</mi><mi>z</mi></msub><mo>=</mo><msup><mi>I</mi><mo>*</mo></msup></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>=</mo><msup><mi>I</mi><mo>*</mo></msup><mo>+</mo><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> direnez, <math display=\"block\"><mrow><mi>−</mi><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><msup><mi>I</mi><mo>*</mo></msup><mi mathvariant=\"normal\">Ω</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> baldintza lortzen dugu eta <math display=\"inline\"><mi>θ</mi></math>-ren balioak hurrengoak izango dira: <math display=\"block\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>π</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>θ</mi><mn>0</mn></msub><mo>≡</mo><mrow><mi mathvariant=\"normal\">arccos</mi><mo>&#8289;</mo></mrow><mfrac><mrow><msup><mi>I</mi><mo>*</mo></msup><mi mathvariant=\"normal\">Ω</mi><mi>ω</mi><mo>−</mo><mi>m</mi><mi>g</mi><mi>R</mi></mrow><mrow><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Jakina, azken balioa bakarrik existitzen da honako hau betetzen denean: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><msup><mi>I</mi><mo>*</mo></msup><mi mathvariant=\"normal\">Ω</mi><mi>ω</mi><mo>−</mo><mi>m</mi><mi>g</mi><mi>R</mi></mrow><mrow><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mn>1</mn><mi>.</mi></mrow></math> Argi dago, bestaldetik, <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>&gt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> izango dela <math display=\"inline\"><mrow><mi>m</mi><mi>g</mi><mi>R</mi><mo>&gt;</mo><msup><mi>I</mi><mo>*</mo></msup><mi mathvariant=\"normal\">Ω</mi><mi>ω</mi></mrow></math> denean. (Ikus, gainera, 6.113 problema.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oszilazio txikiak"
    },
    {
     "mota": "testua",
     "html": "<em>Irudiko gorputza esferaerdi betea edo hutsa edo zilindroerdi betea edo hutsa izan daiteke. Erradioa\n<math display=\"inline\"><mi>R</mi></math> da, <math display=\"inline\"><mi>O</mi></math> zentroaren inguruko biraketa-erradioa <math display=\"inline\"><mi>K</mi></math> eta <math display=\"inline\"><mi>O</mi></math>-ren eta masa-zentroaren arteko distantzia\n<math display=\"inline\"><mi>a</mi></math><span class=\"j-oin\">[<math display=\"inline\"><mrow><msup><mi>K</mi><mn>2</mn></msup><mi>/</mi><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mn>2</mn><mi>/</mi><mn>5</mn><mo>,</mo><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>a</mi><mi>/</mi><mi>R</mi><mo>=</mo><mn>3</mn><mi>/</mi><mn>8</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>4</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mn>2</mn><mi>/</mi><mi>π</mi></mrow></math>.]</span>. Gorputza ez da labaintzen mahai horizontalean. Zein da oszilazio txikien\nmaiztasuna?</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/45d5177d9ec385a0.svg",
     "zabalera": 169
    },
    {
     "mota": "testua",
     "html": "Aukera dezagun triedroa <math display=\"inline\"><mi>O</mi></math> zentroaren oreka-posizioan, irudian ikusten den bezala. Labainketarik ez badago, <math display=\"inline\"><mi>O</mi></math>-ren abiadura <math display=\"inline\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>O</mi></msub><mo>=</mo><mi>−</mi><mi>R</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> da eta posizioa <math display=\"inline\"><mrow><msub><mi>x</mi><mi>O</mi></msub><mo>=</mo><mi>−</mi><mi>R</mi><mi>θ</mi></mrow></math>. (Nahiago bada, labainketarik gabe ukipen-puntuan higidura erlatiborik ez dagoenez, gorputzeko eta mahaiko ukipen-puntuen multzoen luzerak berdinak dira: arkuaren <math display=\"inline\"><mrow><mi>R</mi><mi>θ</mi></mrow></math> baliokoa.) Beraz, <math display=\"inline\"><mi>Z</mi></math> masa-zentroaren posizioa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>−</mo><mi>R</mi><mi>θ</mi><mo>,</mo><mi>−</mi><mi>a</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izango da. Hemendik, zuzenean lortzen da masa-zentroaren abiadura eta (Königen teorema eta masa-zentroaren inguruko <math display=\"inline\"><msqrt><mrow><msup><mi>K</mi><mn>2</mn></msup><mo>−</mo><msup><mi>a</mi><mn>2</mn></msup></mrow></msqrt></math> biraketa-erradioa erabiliz) energia mekanikoa: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><mi>R</mi><mo>,</mo><mi>a</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>E</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>K</mi><mn>2</mn></msup><mo>−</mo><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>K</mi><mn>2</mn></msup><mo>+</mo><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>a</mi><mi>R</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/22b3055b7e4a368f.svg",
     "zabalera": 148
    },
    {
     "mota": "testua",
     "html": "Oszilazioak txikiak badira, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≪</mo><mn>1</mn><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≪</mo><mn>1</mn><mo>,</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mn>1</mn><mo>−</mo><msup><mi>θ</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></math> dira eta, ondorioz, <math display=\"block\"><mrow><mi>E</mi><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>K</mi><mn>2</mn></msup><mo>+</mo><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>a</mi><mi>R</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>a</mi><msup><mi>θ</mi><mn>2</mn></msup><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ktea. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> Energia mekaniko konstante hori denborarekiko deribatzen badugu higidura-ekuazioa (oszilazio txikien hurbilketan) oszilador harmonikoarena dela ikusten dugu: <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>ν</mi><mo>=</mo><msqrt><mfrac><mrow><mi>g</mi><mi>a</mi></mrow><mrow><msup><mi>K</mi><mn>2</mn></msup><mo>+</mo><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>a</mi><mi>R</mi></mrow></mfrac></msqrt><mi>.</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Zinematika])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Abiadura angeluarren batuketa</span>"
      },
      {
       "mota": "testua",
       "html": ". Solido zurrun baten abiadura angeluarra <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝝎</mi><mn>1</mn></msub></math> da <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> triedroan eta <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> triedroaren abiadura angeluarra <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝝎</mi><mn>2</mn></msub></math> da <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> triedroan. Frogatu solidoaren abiadura angeluarra <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> triedroan <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝝎</mi><mn>1</mn></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝝎</mi><mn>2</mn></msub></mrow></math> dela."
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
       "html": "Irudiko hagatxo homogeneoaren muturren abiadurak <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub></math> dira une batean (eta, oro har, ez daude plano berean). Kalkulatu <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> abiadura-eremua eta integratu emaitza energia zinetiko osoa ondokoa dela frogatzeko: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Zeintzuk dira masa-zentroaren translazioari eta biraketari dagozkien ekarpenak?"
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
       "html": "Zer esan daiteke 5.2 problemako abiadura angeluarrari buruz, muturren posizio erlatiboa <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>=</mo><mi>L</mi><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover></mrow></math> denean?"
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
       "html": "Irudiko txirriaren erdiko zilindroa abiadura konstantez ari da higitzen, labaindu gabe, gainazal horizontal batean. Erabili programa egokiren bat <math display=\"inline\"><mrow><mi>A</mi><mo>,</mo><mi>B</mi></mrow></math> eta <math display=\"inline\"><mi>C</mi></math> puntuen ibilbideak marrazteko."
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
       "html": "Abiadura angeluar konstantez biratzen ari diren zilindroen arteko esferak ez dira labaintzen irudiko kojinetean. Barruko zilindroaren erradioa <math display=\"inline\"><mi>r</mi></math> da eta kanpokoarena <math display=\"inline\"><mi>R</mi></math>. Kalkulatu esfera bakoitzaren abiadura angeluarra eta bere masa-zentroaren abiadura eskalarra.  "
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
       "html": "Irudiko zilindro handia hutsa da eta labaindu gabe higitzen da, <math display=\"inline\"><mi>V</mi></math> abiaduraz, plano horizontalean. Barruan duen zilindroa ez da labaintzen. Kalkulatu azken honen abiadura angeluarra eta bere masa-zentroaren abiadura, adierazten den triedroan, <math display=\"inline\"><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eboluzioak ezagunak badira."
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
       "html": "Solido zurrun bateko bi punturen abiadurak berdinak badira, zer dakigu abiadura angeluarrari buruz?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Pendulu fisikoa])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Katerren pendulua</span>"
      },
      {
       "mota": "testua",
       "html": "(1817). Eman dezagun masa-zentrotik <math display=\"inline\"><mi>a</mi></math> eta <math display=\"inline\"><mi>b</mi></math> distantzia desberdinetara dauden bi puntutatik pendulu fisiko bat esekitzean oszilazio-periodo berdinak neurtzen dituela. Froga ezazu pendulu matematiko baliokidearen luzera <math display=\"inline\"><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow></math> dela."
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
       "html": "Irudiko hagatxoaren muturrak zirkunferentzia bertikal finko batean zehar higi daitezke marruskadurarik gabe grabitatearen eraginpean. Hagatxoaren masa <math display=\"inline\"><mi>m</mi></math> bada, zein izango da oszilazio txikien maiztasuna?    "
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
       "html": "Irudiko kamioia geldirik dago eta atzeko atea irudian erakusten den posizioan. <math display=\"inline\"><mi>a</mi></math> azelerazio konstantez abiatzen bada, zenbat denbora beharko du ateak ixteko? Zein izango da bere abiadura une horretan? <br>  <em>Oharra</em>: Erabili hurrengo integral eliptikoa (ikus B.5 atala): <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mfrac><mrow><mi>d</mi><mi>φ</mi></mrow><msqrt><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></msqrt></mfrac><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mfrac><mrow><mi>d</mi><mi>θ</mi></mrow><msqrt><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></msqrt></mfrac><mo>=</mo><msqrt><mn>2</mn></msqrt><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>2.62</mn><mi>.</mi></mrow></math>"
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
       "html": "Irudiko xafla homogeneoa plano bertikal batean oszilatzen ari da <math display=\"inline\"><mi>A</mi></math> ertzetik pasatzen den ardatz perpendikularraren inguruan. <br> (a) Kalkulatu oszilazio txikien maiztasuna. <br> (b) Zeintzuk dira periodo luzeena eta laburrena <math display=\"inline\"><mi>b</mi></math> aldatzean, <math display=\"inline\"><mi>a</mi></math> aldatu gabe? <br> (c) Zeintzuk dira periodo luzeena eta laburrena <math display=\"inline\"><mi>a</mi></math> aldatzean, <math display=\"inline\"><mi>b</mi></math> aldatu gabe? <br> (d) Nola aukeratu behar dira <math display=\"inline\"><mrow><mi>a</mi><mo>≠</mo><mi>b</mi></mrow></math> balioak, <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> ertzen erdien inguruko oszilazio txikien maiztasunak berdinak izateko?    "
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
       "html": "Karratu mehe homogeneo bat ardatz horizontal perpendikular baten inguruan bira daiteke, plano bertikalean. Ardatza leuna bada, irudiko zein kasutan lortzen dira oszilazio txiki arinenak? Eta geldoenak? Nondik eseki behar da maiztasuna maximoa izateko?    "
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
       "html": "Hagatxo homogeneo bat Lurreko eremu grabitatorio homogeneoan oszilatzen da, plano bertikal batean, ardatz leun horizontal baten inguruan. Hagatxoko zein puntutatik pasatu behar du ardatzak, oszilazio txikien periodoa minimoa izateko? Eta maximoa izateko?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Inertzia-momentuak eta -tentsorea])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Solido lau mehea</span>"
      },
      {
       "mota": "testua",
       "html": ".<span class=\"j-oin\">[<strong>Ardatz perpendikularren teorema</strong> deitzen zaio emaitza honi zenbait testulibrutan, baina gogoratu ardatz paraleloen teorema askoz orokorragoa dela, azken honetan ez baita eskatzen solidoa laua eta mehea izateko.]</span> Eman dezagun solidoa <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math> planoan egoteko moduan aukeratzen dugula erreferentzia-sistema. Froga ezazu solidoarekiko perpendikularra den <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> norabidea nagusia dela eta dagokion inertzia-momentua beste bien batura: <math display=\"inline\"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><msub><mi>I</mi><mrow><mi>z</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>I</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub></mrow></math>. Beste bi inertzia-momentu nagusiak <math display=\"inline\"><msub><mi>I</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>I</mi><mn>2</mn></msub></math> badira, egia al da <math display=\"inline\"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math> dela?"
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
       "html": "Kalkulatu 639. orrialdeko taulan agertzen diren inertzia-momentuak."
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
       "html": "<math display=\"inline\"><mi>a</mi></math> erradioko disko mehe homogeneo batean <math display=\"inline\"><mi>b</mi></math> erradioko zulo zirkularra egiten da zentroan. Geratzen den solidoaren masa <math display=\"inline\"><mi>m</mi></math> da. Kalkulatu, integralik egin gabe, zentro geometrikoaren inguruko norabide eta inertzia-momentu nagusiak.    "
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
       "html": "Kalkula ezazu kubo uniforme baten hurrengo puntuekiko inertzia-momentu eta norabide nagusiak: <br> (a) Ertz baten erdiko puntua. <br> (b) Erpin bat."
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
       "html": "Kono homogeneo bete baten altuera <math display=\"inline\"><mi>h</mi></math> da eta bere oinarriaren erradioa <math display=\"inline\"><mi>r</mi></math>. Kalkula itzazu erpinarekiko inertzia-momentu nagusiak. Nolakoa izan behar du <math display=\"inline\"><mrow><mi>h</mi><mi>/</mi><mi>r</mi></mrow></math> zatidurak erpinetik pasatzen diren ardatz guztiak nagusiak izateko?"
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
       "html": "Froga ezazu antzekotasun-transformazioek ez dutela matrizeen aztarna aldatzen. <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Oharra</em>"
      },
      {
       "mota": "testua",
       "html": ": Gogoratu <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizearen aztarna honela definitzen dela: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>a</mi><mrow><mi>k</mi><mi>k</mi></mrow></msub><mi>.</mi></mrow></math>"
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
       "html": "<math display=\"inline\"><mi>S</mi></math> erreferentzia-sisteman solido baten inertzia-tentsorearen osagaiak honako hauek dira: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>A</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>C</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>C</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>B</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>A</mi><mo>+</mo><mi>B</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Zeintzuk dira inertzia-momentu eta ardatz nagusiak? Zein da inertzia-tentsorea diagonalizatzen duen antzekotasun-transformazioa?"
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
       "html": "<span class=\"j-smallcaps\">Inertzia-tentsorea</span>"
      },
      {
       "mota": "testua",
       "html": ". Froga ezazu bi inertzia-momentu nagusiren batura ez dela inoiz ere hirugarren momentu nagusia baino txikiagoa. Noiz gertatuko da berdintasuna?"
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
       "html": "Erabili inertzia-tentsorea 5.2 problheman, biraketari dagozkion energia zinetikoa zuzenean aurkitzeko."
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
       "html": "Xafla mehe uniforme laukizuzen baten aldeen luzerak <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> eta <math display=\"inline\"><mi>a</mi></math> dira. Erpin finko baten ingurua biratzen ari da diagonaleko norabidea duen <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> abiadura angeluarraz. Kalkulatu diagonal baten inguruko inertzia-momentua, erpin finkoarekiko momentu angeluarra eta energia zinetikoa. Zeintzuk dira erpinarekiko inertzia-momentu nagusiak? Nola aukeratu behar da abiadura angeluarra, momentu angeluarrarekiko paraleloa izan dadin?"
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
       "html": "Dakigunez, abiadura angeluarra eta momentu angeluarra ez dira beti paraleloak; hala ere, ezin izan daitezke antiparaleloak."
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
       "html": "Solido zurrun baten momentu eta abiadura angeluarrak elkarzutak izan daitezke, azkena zero ez bada?"
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
       "html": "Solido baten abiadura eta momentu angeluarren arteko angelua <math display=\"inline\"><mi>α</mi></math> da. Badakigu, oro har, <math display=\"inline\"><mi>α</mi></math> ez dela zero; baina, egon daiteke <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tartean? (Ikus, gainera, 5.123 problema.)"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Masa-zentroa eta oreka])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Non dago esferaerdi bete homogeneo baten masa-zentroa?"
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
       "html": "Non dago zilindroerdi bete homogeneo baten masa-zentroa?"
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
       "html": "Material desberdinetako bi esferaerdi bete homogeneoz egin da irudiko esfera. Erakusten den moduan jartzen da plano aldapatsu batean, hemisferioen arteko muga irudiarekiko perpendikularra den <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> planoa delarik. Froga ezazu materialak era egokian aukeratuz, esfera orekan egon daitekeela, <math display=\"inline\"><mi>α</mi></math> angelua eta marruskadura estatikoaren <math display=\"inline\"><mi>μ</mi></math> koefizientea tarte egokietan badaude. Zeintzuk dira tarte horiek? Esferaerdien dentsitateak <math display=\"inline\"><msub><mi>ρ</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>ρ</mi><mn>2</mn></msub></math> badira, zein da <math display=\"inline\"><mi>β</mi></math> angelua orekan? Zein da handiagoa, <math display=\"inline\"><msub><mi>ρ</mi><mn>1</mn></msub></math> ala <math display=\"inline\"><msub><mi>ρ</mi><mn>2</mn></msub></math>?    "
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
       "html": "Zoru horizontalean dagoen esferaerdi homogeneo baten erradioa <math display=\"inline\"><mi>R</mi></math> da eta masa <math display=\"inline\"><mi>M</mi></math>. Oinarri lauaren erditik gora doa aluminiozko haga arin bat. Akrobata bat hagatik igotzen hasten bada, noiz hasi beharko du akrobaziak egiten, ez erortzeko? <br>  <em>Oharra</em>: Arbuiatu akrobataren dimentsioak.    "
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
       "html": "Mahai horizontal baten gainean <math display=\"inline\"><mi>m</mi></math> masako kubo bat dago. Bi gorputzen arteko marruskadura estatikoaren koefizientea <math display=\"inline\"><mi>μ</mi></math> da. Zein da goiko ertzean aplikatu behar zaion <math display=\"inline\"><mi>F</mi></math> indar minimoa, kuboa iraultzeko labaindu gabe? Zein da <math display=\"inline\"><mi>α</mi></math> angelua kasu horretan?  "
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
       "html": "Hagatxo baten mutur bat zoruan dago eta bestea sabaitik esekita, masa gabeko soka baten bidez. Hagatxoaren eta sokaren luzerak berdinak dira. Nolakoa izan behar du hagatxoaren eta zoruaren arteko marruskadura estatikoaren koefizienteak, hagatxoa irudian erakusten den posizioan orekan egoteko?  "
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
       "html": "Irudiko xaflaren ertzeko zirkunferentzia-arkuen erradioak <math display=\"inline\"><mi>a</mi></math> eta <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> dira. Xafla orekan dago, soka batez lotuta, grabitatearen eraginpean, irudiko posizioan. Kalkulatu <math display=\"inline\"><mi>d</mi></math> distantzia.  "
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
       "html": "Liburu berdinak pilatzen dira mahai baten ertzean, irudian ikusten den eran. Zenbat liburu behar dira azkenaren puntu guztien bertikalak mahaitik kanpo egoteko, erori gabe? Liburuen kopurua handitzean, zein da ertzetik lor daitekeen distantzia horizontalik handiena? <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Oharra</em>"
      },
      {
       "mota": "testua",
       "html": ": Arbuiatu marruskadura.    "
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
       "html": "Hiru liburu berdin jarri dira mahai batean, irudian erakusten den moduan. Astiro-astiro bultzatzen badira, zein izango da ertzetik kanpo dagoen eskuineko liburuaren zatirik luzeena liburua erori baino lehenago, marruskadura guztiak arbuiagarriak badira? Luzeagoa ala laburragoa izango da marruskadura badago?    "
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
       "html": "Mahai horizontal batean ahoz behera jarritako ontzi zilindriko baten barruan bi bola berdin daude. Ontziaren masa eta erradioa <math display=\"inline\"><mi>M</mi></math> eta <math display=\"inline\"><mi>R</mi></math> dira eta bolenak <math display=\"inline\"><mi>m</mi></math> eta <math display=\"inline\"><mi>r</mi></math>. Marruskadura guztiak arbuiagarriak badira, nolako baldintza bete behar da sistema orekan egoteko irudiko konfigurazioan?"
      },
      {
       "mota": "testua",
       "html": "<em>Oharra</em>: <math display=\"inline\"><mrow><mi>r</mi><mo>&lt;</mo><mi>R</mi><mo>&lt;</mo><mn>2</mn><mi>r</mi></mrow></math>.    "
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
       "html": "Irudiko esfera homogeneoa orekan dago, hormaren kontra, hormatik <math display=\"inline\"><mi>L</mi></math> puntuan soka batez lotuta. <math display=\"inline\"><mi>L</mi></math> puntua esferaren zentroaren bertikalean dago. Nolakoa da hormaren eta esferaren arteko marruskadura estatikoaren koefizientea?    "
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
       "html": "Irudiko esferaren masa <math display=\"inline\"><mi>m</mi></math> da eta orekan dago bi plano leunen artean. Kalkulatu planoek eragindako erreakzioak.<span class=\"j-oin\">[Leibnizen 1768ko <em>Opera Omnia</em> lan-bilduman agertu zen problema hau.]</span>"
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
       "html": "Mahai dotore (?) bat egiteko, hiru hanka bertikal berdinen gainean jarri da beirazko triangelu irregular bat. Beirazko lodiera uniformea da. Frogatu hiru hankek eragindako erreakzioak berdinak direla.    "
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Kontserbazio-legeak])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Disko horizontal bat bere zentrotik pasatzen den ardatz bertikal leun baten inguruan ari da biratzen. Hasieran ertzean pausagunean zegoen euli bat zentrorantz abiatzen bada astiro-astiro, nolakoa izango da sistemaren energia zinetikoa: hasieran zuena baino handiagoa, txikiagoa ala berdina?"
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
       "html": "<math display=\"inline\"><mi>a</mi></math> erradioko bola <math display=\"inline\"><mi>v</mi></math> abiaduraz higitzen da, labaindu gabe, <math display=\"inline\"><mrow><mi>h</mi><mo>&lt;</mo><mi>a</mi></mrow></math> altuerako mailarekin topo egin arte. <math display=\"inline\"><mi>O</mi></math> jotze-puntuan labainketarik ez badago, zein izan behar du <math display=\"inline\"><mi>v</mi></math>-ren balio minimoak maila igotzeko?    "
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
       "html": "<span class=\"j-smallcaps\">Bi hagatxo</span>"
      },
      {
       "mota": "testua",
       "html": ". Bertikalean geldi dagoen hagatxo bat jausten hasten da marruskadurarik gabe. Zein izango da masa-zentroaren abiadura hagatxoa horizontalean dagoenean? Nolakoa da muturren ibilbidea? Nola aldatzen da erantzuna orain hagatxoaren mutur bat zoruan loturik badago, ardatz leun baten bidez? Zein kasutan helduko da lehenago posizio horizontalera?  "
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
       "html": "<span class=\"j-smallcaps\">Bi hagatxo</span>"
      },
      {
       "mota": "testua",
       "html": "(berriro). Kontuan hartu duzu, 5.42 problemako lehen kasuan, agian beheko muturra zorutik urruntzen hasiko dela unaren batean?"
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
       "html": "Irudiko xafla mehearen masa <math display=\"inline\"><mrow><mn>3</mn><mi>m</mi></mrow></math> da eta ardatz bertikalaren inguruan bira daiteke marruskadurarik gabe. Hasieran geldirik dago, baina norabide perpendikularrean datorren <math display=\"inline\"><mi>m</mi></math> masako partikulak jotzen du irudian erakusten den puntuan. Talka ondoren partikula norabide berean higitzen da. Kalkulatu partikularen abiadura talka ondoren, azken hau elastikoa izan dela jorik. Norantz higitzen da orain partikula? Grabitatea arbuiagarria bada, zer gertatuko litzateke ardatzik ez balego?  "
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
       "html": "Kalkulatu 5.44 problemako xaflaren higidura talka ondoren, orain partikula itsatsita geratzen bada jotze-puntuan. Zer gertatuko litzateke grabitaterik gabe ardatzik ez balego?"
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
       "html": "<math display=\"inline\"><mi>m</mi></math> masako hagatxo horizontala <math display=\"inline\"><mi>A</mi></math> ardatz bertikalaren inguruan bira daiteke marruskadurarik gabe eta <math display=\"inline\"><mi>m</mi></math> masako bolatxo bat du mutur batean, irudian erakusten den moduan. Norabide horizontal perpendikularrean datorren <math display=\"inline\"><mi>m</mi></math> masako partikularen eta hagatxoaren arteko talka elastiko bat gertatzen da. Talka ondoren, partikula norabide berean higitzen da. Nola aukeratu behar da <math display=\"inline\"><mi>d</mi></math> distantzia hagatxoaren abiadura angeluarra maximoa izateko? Eta minimoa izateko? Zeintzuk izango dira aipaturiko balio maximoa eta minimoa? Noiz etorriko da atzera partikula? Gerta daiteke talkan ardatzaren erreakzioa nulua izatea? Zer aldatzen da zure erantzunetan bolatxoa beste muturrean badago? Eta partikula hagatxoan itsatsita geratzen bada?    "
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
       "html": "Irudiko eraztunak eta disko homogeneoak masa eta erradio berdinak dituzte eta une berean altuera beretik askatzen dira pausagunetik. Plano aldapatsuan behera labaindu gabe badoaz, zein helduko da lehenago zorura?    "
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
       "html": "Plano aldapatsu batean behera, garaiera berdinetatik, lau gorputz askatzen dira: esfera huts bat, zilindro huts bat, esfera bete bat eta zilindro bete bat. Lau solidoak biraketa-simetriaren ardatz horizontalaren inguruan biratzen dira labaindu gabe. Zein izango da arinena? Eta bigarrena? Eta azkena? Gorputzen masen eta dimentsioen menpekoa da erantzuna?"
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
       "html": "<math display=\"inline\"><mi>L</mi></math> aldeko kubo homogeneo bat <math display=\"inline\"><mi>v</mi></math> abiaduraz labaintzen ari da mahai leun horizontal batean. Azken honetako ertzean dagoen koska txiki batekin topo egitean, bere inguruan biratzen hasten da. Zein izan behar du <math display=\"inline\"><mi>v</mi></math> abiaduraren balio minimoak, kuboa mahaitik eror dadin?  "
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
       "html": "Irudiko bi hagatxoak berdinak dira eta artikulazioa eta zorua leunak. <math display=\"inline\"><mrow><mi>φ</mi><mo>≈</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> posizio bertikaletik askatzen dira <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean. Idatzi, integral baten bidez, <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> soluzioa. Zeintzuk dira <math display=\"inline\"><mi>B</mi></math> eta <math display=\"inline\"><mi>C</mi></math> muturren abiaduren norabideak eta moduluak, sistema <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math> konfigurazio horizontalera iristen denean? Zein da orduan momentu lineal osoa?  "
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
       "html": "<span class=\"j-smallcaps\">Hagatxoaren erorketa</span>"
      },
      {
       "mota": "testua",
       "html": ". 1.5 problemako horma eta zorua leunak badira, non apurtzen da hagatxoaren eta hormaren arteko ukipena? Zein da makilaren abiadura posizio horizontalera iristen denean? <br>  <em>Oharra</em>: Ikus"
      },
      {
       "mota": "ezezaguna",
       "izena": "link"
      },
      {
       "mota": "testua",
       "html": "simulazioa."
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
       "html": "Irudiko partikula eta hagatxo artikulatuaren <math display=\"inline\"><mi>A</mi></math> muturra <math display=\"inline\"><mi>h</mi></math> altuera beretik askatzen dira. Kalkulatu partikularen eta <math display=\"inline\"><mi>A</mi></math>-ren abiadura bertikalak zorutik neurtutako <math display=\"inline\"><mi>z</mi></math> altuera guztietarako. Aurkitu zein den <math display=\"inline\"><mi>h</mi></math>-ren balio maximoa <math display=\"inline\"><mi>z</mi></math> garaiera guztietan <math display=\"inline\"><mi>A</mi></math> muturraren abiadura bertikala partikularena baino handiagoa izateko. <br>  <em>Oharra</em>: Arbuiatu marruskadura eta airearen eragina.    "
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
       "html": "<math display=\"inline\"><mi>g</mi></math>  <span class=\"j-smallcaps\">baino arinago</span>. Xafla mehe bateko zuloan bolatxo bat jartzen da eta handik hurbil ontzi txiki bat, 5.17 irudian erakusten den moduan. Mutur bat ertz batean jarri ondoren, bestea altxatzen da apur bat. Irudian erakutsitako posiziotik sistema askatzen bada, bolatxoa ontzian sartzen da. Erabili 5.52 problema esperimentu hau azaltzeko."
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
       "html": "Zein da <math display=\"inline\"><mi>h</mi></math> altuera maximoa 5.52 problemako <math display=\"inline\"><mi>A</mi></math> muturraren azelerazio bertikalaren modulua <math display=\"inline\"><mi>g</mi></math> baino handiagoa izateko <math display=\"inline\"><mi>z</mi></math> garaiera guztietan? Zergatik ez dira berdinak bi problemetako <em>galderak</em>?"
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
       "html": "Zein da <math display=\"inline\"><mi>h</mi></math> altuera maximoa 5.52 problemako hagatxoa partikula baino lehenago heltzeko zorura?"
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
       "html": "Mahai horizontal leun batean geldi dagoen eraztun baten masa eta erradioa <math display=\"inline\"><mi>M</mi></math> eta <math display=\"inline\"><mi>a</mi></math> dira, hurrenez hurren. Bertara hurbiltzen da <math display=\"inline\"><mi>m</mi></math> masako partikula, <math display=\"inline\"><mrow><mi>−</mi><mi>v</mi><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math> abiaduraz, ibilbide tangente batean. Talka ondoren partikula eta eraztuna itsatsita geratzen dira. Kalkulatu nola higitzen den gorputz berria talka ondoren.    "
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
       "html": "<math display=\"inline\"><mrow><mn>6</mn><mi>m</mi></mrow></math> masako hagatxoa erdiko ardatz perpendikularraren inguruan bira daiteke oztoporik gabe eta mutur batean <math display=\"inline\"><mi>m</mi></math> masako partikula puntual bat dauka itsatsita. Hagatxoarekiko eta ardatzarekiko perpendikularrean <math display=\"inline\"><mi>v</mi></math> abiaduraz datorren bigarren partikula berdin batek beste muturra jotzen du. Talka elastikoa bada, zeintzuk dira partikularen abiadura eta hagatxoaren abiadura angeluarra talka ondoren? Zein da talkan ardatzak eragindako bulkada? Zer aldatzen da zure erantzunetan partikulak beste muturra jotzen badu? Eta itsatsita geratzen bada?    "
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
       "html": "Irudiko hagatxo homogeneoaren masa eta luzera <math display=\"inline\"><mi>m</mi></math> eta <math display=\"inline\"><mi>a</mi></math> dira, hurrenez hurren. Hasieran masa-zentro geldiaren inguruan ari da biratzen <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> abiadura angeluar konstantez, irudian erakusten den moduan. <math display=\"inline\"><mi>A</mi></math> ardatz leunarekin topo egitean, katigatuta geratzen da eta <math display=\"inline\"><mi>A</mi></math>-ren inguruan biratzen hasten da. Kalkulatu <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar berria eta <math display=\"inline\"><mi>A</mi></math> ardatzak <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean eragindako bulkadaren modulua, norabidea eta noranzkoa. <br>  <em>Oharra</em>: Ez dago grabitaterik.  "
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
       "html": "Irudiko bola homogeneoa <math display=\"inline\"><mrow><mn>2</mn><mi>d</mi></mrow></math> distantziara dauden errailen gainean higitzen da labaindu gabe. Errailen eta horizontalaren arteko angelua <math display=\"inline\"><mi>α</mi></math> da eta bolaren erradioa <math display=\"inline\"><mi>a</mi></math>. Azken hau pausagunetik askatzen bada, zein da bere abiadura angeluarra <math display=\"inline\"><mi>L</mi></math> distantzia egin duenean? Zein da masa-zentroaren abiadura une horretan? Zer gertatzen da <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>0</mn></mrow></math> denean?"
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
       "html": "Zer aldatzen da 1.154 problheman, eraztunaren eta ertzaren arteko marruskadura nahikoa bada talkan labainketa saihesteko?"
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
       "html": "Zilindro baten masa eta erradioa <math display=\"inline\"><mi>M</mi></math> eta <math display=\"inline\"><mi>R</mi></math> dira, hurrenez hurren. Lur leun batean geldi dagoenean, norabide horizontalean (zeharkako simetria-planoan) datorren balak jotzen du eta barruan geratzen da. Nola higitzen da orain zilindroa? Energia zinetikoaren zer proportzio galtzen da talkan? Nola aukeratu behar da <math display=\"inline\"><mi>h</mi></math> distantzia, amaierako energia zinetikoa ahalik handiena izateko? Eta ahalik txikiena izateko? <br>  <em>Oharra</em>: Erabili <math display=\"inline\"><mrow><mi>m</mi><mo>≪</mo><mi>M</mi></mrow></math> dela kalkulu guztietan, gehienez <math display=\"inline\"><mrow><mi>m</mi><mi>/</mi><mi>M</mi></mrow></math> zatidurarekiko gai linealak gordetzeko.    "
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
       "html": "Irudiko barra homogeneoaren masa <math display=\"inline\"><mi>m</mi></math> da eta luzera <math display=\"inline\"><mi>L</mi></math>. Horizontaletik askatzen da eta bertikalera iristen denean, mahai horizontal leunean dagoen <math display=\"inline\"><mi>m</mi></math> masako partikula jotzen du. Partikula itsatsita geratzen da. Kalkulatu barraren artikulazio leunak talkan eragiten duen erreakzioa. Zein da hortik aurrera barraren eta bertikalaren arteko angelu maximoa?    "
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Higidura-ekuazioak])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Jotze-zentroa</span>"
      },
      {
       "mota": "testua",
       "html": ". Irudiko hagatxo uniformea <math display=\"inline\"><mi>O</mi></math> puntuaren inguruan bira daiteke. Zein da pendulu matematiko baliokidearen luzera? Posizio bertikalean pausagunean dagoenean <math display=\"inline\"><mi>J</mi></math> bulkada horizontala aplikatzen bada, zein izango da hasierako abiadura angeluarra? Non aplikatu behar da <math display=\"inline\"><mi>J</mi></math> bulkada <math display=\"inline\"><mi>O</mi></math> puntuan erreakziorik ez izateko? Zeren berdina da <math display=\"inline\"><mi>a</mi></math> azken kasu horretan?  "
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
       "html": "Irudiko txirrikaren kanpo- eta barne-erradioak <math display=\"inline\"><mi>R</mi></math> eta <math display=\"inline\"><mi>a</mi></math> dira, hurrenez hurren. Barne-zilindroan biribilkaturik dagoen soka bati <math display=\"inline\"><mi>F</mi></math> indarraz tiratzen badiogu, norantz higituko da txirrika mahai horizontalean labaindu gabe (a) eta (b) kasuetan? Nolako baldintzak bete behar dira (c) kasuan txirrika ez mugitzeko? <br>  <em>Oharra</em>: Ikus, gainera, 6.35 problema.  "
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
       "html": "<span class=\"j-smallcaps\">Txanpona</span>"
      },
      {
       "mota": "testua",
       "html": ". Simetria-ardatz horizontalaren inguruan <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> abiadura angeluarraz biratzen ari den <math display=\"inline\"><mi>a</mi></math> erradioko zilindro mehe bat zoruan jartzen da. Argi dago hasieran labainduko dela, baina marruskaduraren eraginez higitzen hasiko da. Idatzi zilindroaren higidura-ekuazioak eta kalkulatu abiadura linealaren eta angeluarraren arteko erlazioa. Frogatu une batean marruskadura desagertzen dela eta hortik aurrera abiadura konstantez higitzen dela. Zein da abiadura hori? <br> Kalkulatu berriro amaierako abiadura konstantea kontserbazio-printzipio egoki bat erabiliz. Zilindro huts bat eta zilindro bete bat masa eta erradio berekoak badira, zein higituko da arinago? Zer gertatzen da masak desberdinak badira? Zein da marruskadura-indarrak egindako lan osoa? Hasierako energiaren zein zati erabili da beroa sortzeko? Zer da <math display=\"inline\"><mi>μ</mi></math> marruskadura dinamikoaren koefizientearen menpekoa zure erantzunetan? <br>  <em>Oharrak</em>: Ikus"
      },
      {
       "mota": "ezezaguna",
       "izena": "link"
      },
      {
       "mota": "testua",
       "html": "simulazioa. Zilindroaren masa <math display=\"inline\"><mi>m</mi></math> da."
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
       "html": "<span class=\"j-smallcaps\">Marruskadura eta labainketa</span>"
      },
      {
       "mota": "testua",
       "html": ". Billar bola bat <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiaduraz higitzen da, mahai horizontal batean, labaindu gabe, geldi dagoen beste bola berdin batekin buruz buru topo egin arte. Bolen arteko marruskadura arbuiagarria denez, hasieran lehen bola talka-puntuan geratzen da biratzen eta bestea <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiaduraz abiatzen da biratu gabe (hau da, momentu lineal osoa besteari eman arren, momentu angeluar intrintseko osoa gordetzen du lehen bolak); baina, zoruarekiko marruskadura dela eta, higidura horiek aldatuz joango dira eta azkenean labaindu gabe higituko dira bi bolak. Kalkulatu amaierako abiadurak, momentu lineal osoa eta galdutako energiaren proportzioa. Nola aldatzen da bolen arteko distantzia? Kontserbatzen al da ezein punturekiko momentu angeluarra? Eta momentu angeluar intrintsekoa? Zein da emaitza horien artean, zein da marruskadura-koefizientearen menpekoa? Iruzkina egin emaitzei."
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
       "html": "Irudiko sokak puntu finko bat eta hagatxoaren mutur bat lotzen ditu. Froga ezazu soka eta hagatxoa ezin egon daitezkeela higidura osoan lerro zuzen berean (hagatxo bakar baten antzera) grabitatearen eragin hutsaren menpean. <br>  <em>Iradokizuna</em>: Eman higidura hori gerta daitekeela eta azter ezazu nolakoa den sokak eragindako indarra.    "
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
       "html": "Bere simetria-ardatzaren inguruan <math display=\"inline\"><mi>ω</mi></math> abiadura angeluarraz biratzen ari den zilindro huts bat bazterrean jartzen da, irudian erakusten den bezala. Horma eta zorua material berekoak dira eta zilindroarekin duten marruskadura dinamikoaren koefizientea <math display=\"inline\"><mi>μ</mi></math> da. Zenbat denbora beharko du zilindroak geldi geratzeko? Zenbat bira egingo ditu?    "
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
       "html": "Irudiko disko homogeneoaren eta mahai horizontalaren arteko marruskadura estatikoaren koefizientea <math display=\"inline\"><mi>μ</mi></math> da. Nolakoa izan behar du <math display=\"inline\"><mi>M</mi></math> masak diskoa labaindu gabe higi dadin? <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Oharra</em>"
      },
      {
       "mota": "testua",
       "html": ": Egin erraztasun-hipotesi egokiak.    "
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
       "html": "Irudiko kuboa eta zilindroa masa berekoak dira eta soka eta txirrikaren masak arbuiagarriak. Kuboaren eta plano horizontalaren arteko marruskadura dinamikoaren koefizientea <math display=\"inline\"><mrow><msub><mi>μ</mi><mi>B</mi></msub><mo>&lt;</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> bada, zein da zilindroaren eta plano aldapatsuaren arteko marruskadura estatikoaren koefizientearen balio minimoa hura labaindu gabe joan dadin planoan behera?    "
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
       "html": "Irudiko diskoa erortzen ari da plano bertikal batean grabitatearen eraginpean. Mahai horizontala leuna da. Blokea eta diskoa azken honetan biribilkaturik dagoen soka baten bidez daude loturik. Diskoaren masa-zentroa norabide bertikalean jausten da. Nolako baldintza bete behar da azken hau egia izateko? Kalkulatu blokearen eta diskoaren higidurak. Arinago eroriko litzateke diskoa sokaren beste muturra txirrikan loturik balego?    "
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
       "html": "Non jo behar du makila horizontalak billar-bola labaindu gabe abia dadin?"
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
       "html": "Irudiko bi diskoak ardatz bertikalen inguruan bira daitezke marruskadurarik gabe. Hasieran <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> masakoa <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> abiadura angeluarraz ari da biratzen eta <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> masakoa geldi. Elkar ukitzen jartzen direnean, ezkerrekoak bestea mugiaraziko du, bien arteko marruskadura dela eta. Zein izango da disko bakoitzaren abiadura angeluarra bukaeran, ukipen-puntuan labainketa desagertzen denean? <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Oharra</em>"
      },
      {
       "mota": "testua",
       "html": ": Diskoen inertzia-momentuak <math display=\"inline\"><msub><mi>I</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>I</mi><mn>2</mn></msub></math> dira.    "
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
       "html": "Mahai horizontal luze batean dagoen eraztun bat, <math display=\"inline\"><mi>ω</mi></math> abiadura angeluarraz biratzeaz gain, <math display=\"inline\"><mi>v</mi></math> abiadura linealaz higitzen ari da. Noiz egingo du bide luzeagoa, hasieran <math display=\"inline\"><mrow><mi>ω</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bada ala une guztietan <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>0</mn></mrow></math> denean? (Hasierako abiadura lineala berdina da kasu bietan.)  <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Iradokizuna</em>"
      },
      {
       "mota": "testua",
       "html": ": Ondoko integralaren deribatuaren zeinua erraz kalkulatzen da integral eliptikoa ebatzi gabe: <math display=\"block\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mfrac><mrow><mn>1</mn><mo>−</mo><mi>λ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>λ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></msqrt></mfrac><mi>d</mi><mi>φ</mi><mi>.</mi></mrow></math>"
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
       "html": "Hagatxo uniforme bat artikulazio leun baten inguruan bira daiteke plano bertikalean. Posizio bertikaletik askatzen bada, zeintzuk dira artikulazioak eragindako erreakzioaren <math display=\"inline\"><msub><mi>F</mi><mi>x</mi></msub></math> osagai horizontala eta <math display=\"inline\"><msub><mi>F</mi><mi>y</mi></msub></math> osagai bertikala? Bata edo bestea zero izan daitezke uneren batean? Euren zeinua alda daiteke? Noiz izango da maximoa (minimoa)  <math display=\"inline\"><msub><mi>F</mi><mi>y</mi></msub></math>?    "
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
       "html": "Paralelepipedo baten ertzen luzerak <math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mi>b</mi><mo>&lt;</mo><mi>c</mi></mrow></math> dira. <br> (a) Plano batean jartzen da irudiko ezkerraldean erakusten den moduan eta planoaren inklinazioa apurka-apurka handitzean, une batean blokea labaintzen hasten da. <br> (b) Eskuineko posizioan jartzen bada, ordea, inklinazioa handitzean blokea irauli egiten da, labaintzen hasi baino lehenago. <br> Informazio horrekin, zer esan dezakegu planoaren eta blokearen arteko marruskadura estatikoaren koefizienteari buruz?    "
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
       "html": "<span class=\"j-smallcaps\">Plataforma azeleratua</span>"
      },
      {
       "mota": "testua",
       "html": ". Plataforma horizontal bat <math display=\"inline\"><mi>a</mi></math> azelerazio konstantez higitzen ari da, gainean duen <math display=\"inline\"><mi>r</mi></math> erradioko zilindro homogeneoaren biraketa-ardatzarekiko perpendikularrean, irudian erakusten den moduan. Zilindroa ez da labaintzen plataforman. <br> Nola idazten da, une bakoitzean, zilindroaren abiadura angeluarra plataformaren eta zilindroaren masa-zentroaren abiadurak erabiliz? Kalkulatu zilindroaren masa-zentroaren azelerazioa (laborategian eta plataformaren sisteman). Nolakoa da marruskadura estatikoaren koefizientea? Zer aldatzen da zure erantzunetan zilindroaren ordez esfera bete bat erabiltzen bada?    "
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
       "html": "<math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> erradioko disko homogeneotik <math display=\"inline\"><mi>a</mi></math> erradioko diskoa ebaki da, irudian erakusten den bezala. Kalkulatu non dagoen masa-zentroa eta zein den handik pasatzen den ardatz perpendikularrarekiko inertzia-momentua. Non aplikatu behar da <math display=\"inline\"><mi>J</mi></math> bulkada horizontala, diskoa labaindu gabe abia dadin?  "
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
       "html": "Irudiko giroskopioko barruko diskoa arin ari da biratzen plano bertikalean, erakusten den moduan. Zer gertatuko da ardatz bertikala birarazten bada irudiko noranzkoan?"
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
       "html": "Irudiko bi zilindroen zentroak hagatxo arin baten bidez lotuta daude. Zilindroen masak eta erradioak berdinak dira, <math display=\"inline\"><mi>m</mi></math> eta <math display=\"inline\"><mi>R</mi></math>, baina goikoa hutsa da eta behekoa betea. Labaindu gabe higitzen badira irudiko plano aldapatsuan, zein da masa-zentroaren azelerazioa? Nolakoa da tentsioa hagatxoan: konpresioa ala trakzioa? Zein da haren balioa? Nola aldatzen dira erantzunak goiko zilindroa betea bada eta behekoa hutsa?    "
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
       "html": "Irudiko disko homogeneoa planoaren beheko puntutik askatzen da, <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> abiadura angeluarraz biratzen ari denean. Diskoaren eta planoaren arteko marruskadura dinamikoaren koefizientea <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msqrt><mn>3</mn></msqrt></mrow></math> da eta <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. <br> (a) Noiz eta non amaitzen da diskoaren labainketa? <br> (b) Noiz eta non lortzen du garaiera maximoa? <br> (c) Noiz heltzen da berriro hasierako puntura? <br> (d) Zein da bidaian galdutako energia zinetikoaren proportzioa?  "
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
       "html": "Irudiko zilindro berdin paraleloak <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar berdinez biratzen dira, ardatz bertikal leunen inguruan. Astiro-astiro hurbildu ondoren, elkarri ukitzen jartzen badira, zeintzuk izango dira, egoera egonkorrera heltzen direnean, zilindroen abiadura angeluarrak? Energia zinetikoaren zer proportzio galtzen da prozesu osoan?    "
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
       "html": "Irudiko hagatxoa, goiko ardatz leunaren inguruan plano bertikal batean bira daitekeena, orekan dago, norabide perpendikularrean datorren bolatxoak jo arte. Talka elastikoa da eta ondoren partikula norabide berean higitzen da. Kalkulatu zeintzuk diren bolatxoaren abiadura eta hagatxoaren abiadura angeluarra talka ondoren. Aurrera joan daiteke bolatxoa talka ondoren? Nola aukeratu behar da <math display=\"inline\"><mi>v</mi></math> abiadura hagatxoa posizio horizontaleraino hel dadin? Zein da talkan artikulazioak pairatzen duen bulkada? Nola aukeratu behar da <math display=\"inline\"><mi>d</mi></math> distantzia aipatutako bulkada nulua izateko?    "
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
       "html": "Puntu batetik lotuta dagoen masa gabeko soka irudiko planoarekiko paraleloa da eta diskoaren ekuatoreko kanal estuan biribilkatzen da. Diskoaren eta planoaren arteko marruskadura estatikoaren eta dinamikoaren koefizienteak <math display=\"inline\"><mrow><msub><mi>μ</mi><mi>e</mi></msub><mo>&gt;</mo><msub><mi>μ</mi><mi>d</mi></msub></mrow></math> dira. Planoaren <math display=\"inline\"><mi>α</mi></math> inklinazioa astiro-astiro handitzean, noiz hasiko da labaintzen diskoa? Zein izango da orduan masa-zentroaren azelerazioa? <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Oharra</em>"
      },
      {
       "mota": "testua",
       "html": ": Arbuiatu diskoaren lodiera.    "
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
       "html": "Irudiko xafla karratua ertzeko artikulazio leunaren inguruan bira daiteke. Hasieran horizontalean dago geldi eta gainean bloke bat jarri da. Blokearen eta xaflaren arteko marruskadura estatikoaren koefizientea <math display=\"inline\"><mi>μ</mi></math> da. <br> Sistema konfigurazio horretatik askatzen bada, zer (eta noiz) gertatuko da lehenago: blokea atzean geratuko dela ala xaflan barrena labaintzen hasiko dela?  "
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
       "html": "Nolakoa izan behar du marruskadura estatikoaren koefizienteak, labainketa ekiditeko irudiko gorputz higikorra bada <br> (a) zilindro huts bat, <br> (b) zilindro bete homogeneo bat, <br> (c) esfera huts bat, <br> (d) esfera bete homogeneo bat. <br> (e) Gorputzaren erradioaren menpekoak dira erantzunak?    "
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
       "html": "Irudiko gorputza disko mehe homogeneo bat edo esfera homogeneo bat izan daiteke. Gorputzaren zentroa hormatik lotuta dago <math display=\"inline\"><mi>k</mi></math> konstanteko malgukiaren bidez. Gorputzaren eta zoruaren arteko marruskadura estatikoaren koefizientea <math display=\"inline\"><mi>μ</mi></math> da. Zein da, kasu bakoitzean, oszilazioen anplitude maximoa gorputza labaindu ez dadin?    "
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
       "html": "Irudiko bi zilindro homogeneoak berdinak dira eta gainean duten barra ere masa berekoa da. Kalkulatu zilindroen zentroen eta barraren azelerazioak, irudiko konfigurazioan, labainketarik ez dagoenean. Barraren eta planoaren materialak berdinak dira. Orain sistema pausagunetik abiatzen da, <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math> konfiguraziotik. Angelu hori astiro-astiro handitzean, zein hasiko da labaintzen lehenago, barra zilindroekiko ala zilindroak planoarekiko? <br>  <em>Oharra</em>: Prozesu osoan sistema plano aldapatsuan dago, zoru horizontalera heldu gabe.    "
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
       "html": "Irudiko hagatxoaren luzera <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> da eta geldi dago mahai horizontal leun batean. Irudian erakusten den <math display=\"inline\"><mi>J</mi></math> bulkada horizontal perpendikularra aplikatzen zaio. Nolakoa izan behar du <math display=\"inline\"><mi>d</mi></math> distantziak, bulkada aplikatu bezain laster, hagatxoaren puntu guztiak bulkadaren noranzkoan higitzeko?  "
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
       "html": "(Euler, 1781). Irudiko disko mehearen <math display=\"inline\"><mi>Z</mi></math> masa-zentroa <math display=\"inline\"><mi>O</mi></math> zentro geometrikotik <math display=\"inline\"><mrow><mi>R</mi><mi>/</mi><mn>2</mn></mrow></math> distantziara dago. Masa-zentroaren inguruko biraketa-erradioa <math display=\"inline\"><mrow><msup><mi>K</mi><mo>*</mo></msup><mo>=</mo><mi>R</mi><mi>/</mi><mn>2</mn></mrow></math> da. Diskoa bere plano bertikalean higitzen da, labaindu gabe, zoru horizontalean. Irudiko konfigurazioan diskoaren abiadura angeluarra <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> bada, zein izango da abiadura angeluarra, aipaturiko konfiguraziotik neurtutako biraketa-angelua <math display=\"inline\"><mi>φ</mi></math> denean? Zein da <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>-ren balio minimoa <math display=\"inline\"><mi>O</mi></math> zentroa beti noranzko berean higi dadin? Aldatuko al da <math display=\"inline\"><mi>Z</mi></math> puntuaren abiadura horizontalaren noranzkoa, <math display=\"inline\"><mi>O</mi></math>-rena aldatzen ez bada? <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> txikia bada, zein izango da oszilazio txikien maiztasuna?    "
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
       "html": "Irudiko bi zilindro homogeneo biraketa-ardatz komuna dute. Barrukoa <math display=\"inline\"><mi>m</mi></math> masakoa da, bere erradioa <math display=\"inline\"><mi>R</mi></math>, eta marruskadurarik gabe bira daiteke simetria-ardatzaren inguruan. Kanpoko zilindroaren masa <math display=\"inline\"><mi>m</mi></math> da eta barne- eta kanpo-erradioak <math display=\"inline\"><mi>R</mi></math> eta <math display=\"inline\"><mrow><mn>2</mn><mi>R</mi></mrow></math>, hurrenez hurren. Kanpoko zilindroa labaindu gabe biratzen da zoru horizontalean. Bi zilindroak lotzen dituzten malgukiak <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>α</mi></mrow></math> indar-momentua eragiten du, zilindroen orientazio erlatiboen arteko angelua <math display=\"inline\"><mi>α</mi></math> denean. Askatu higidura-ekuazioak, hasieran bi zilindroak geldi badaude, baina barrukoa <math display=\"inline\"><msub><mi>α</mi><mn>0</mn></msub></math> angeluaz biratuta badago kanpokoarekiko."
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
       "html": "<span class=\"j-smallcaps\">Tximinia</span>"
      },
      {
       "mota": "testua",
       "html": ". Azter dezagun tximinia baten erorketa, erraztasun-hipotesi asko erabiliz.<span class=\"j-oin\">[Azterketa sakonagoa ikusteko: [116] eta [77] artikuluak.]</span> Tximinia homogeneoa eta estua da. Masa, luzera eta erradioak <math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mi>L</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>r</mi><mo>≪</mo><mi>L</mi></mrow></math> dira, hurrenez hurren. Erortzean <math display=\"inline\"><mi>O</mi></math> oinarria geldi dago eta han pairatutako indar-momentua arbuiagarria da. Beheko zatiak, <math display=\"inline\"><mrow><mi>γ</mi><mi>L</mi></mrow></math> luzerako goiko zatian eragindako indarrak irudikoak dira. Kalkulatu <math display=\"inline\"><mrow><msub><mi>T</mi><mn>1</mn></msub><mo>,</mo><msub><mi>T</mi><mn>2</mn></msub></mrow></math> eta <math display=\"inline\"><mi>N</mi></math>. Erabili <math display=\"inline\"><mrow><mi>r</mi><mo>≪</mo><mi>L</mi></mrow></math> dela tximinia oinarritik <math display=\"inline\"><mrow><mi>d</mi><mo>≈</mo><mi>L</mi><mi>/</mi><mn>3</mn></mrow></math> distantziara apurtuko dela ondorioztatzeko.    "
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Eulerren ekuazioak])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Energia zinetiko intrintsekoa higidura askean</span>"
      },
      {
       "mota": "testua",
       "html": ". Eman dezagun solido zurrun bat higidura askean ari dela, hau da, kanpo-indarrek eragindako momentu osoa zero dela. Frogatu masa-zentroaren inguruko biraketari dagokion energia zinetikoa higidura-konstantea dela."
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
       "html": "Irudiko xafla meheak <math display=\"inline\"><mi>m</mi></math> masa du eta <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez ari da biratzen <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> ardatzaren inguruan. Aurki ezazu <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> euskarriek eragiten dioten indar-momentua.  "
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
       "html": "Irudiko sistema lauan hagatxoen masak arbuiagarriak dira. Abiadura angeluar konstantez biratzen bada, zein da <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> euskarri leunek eragindako indar-momentua? Euskarriak kentzen badira, zein norabideren inguruan bira daiteke abiadura angeluar konstantez inolako indar-momenturik pairatu gabe?"
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
       "html": "Irudiko diskoaren masa, erradioa eta lodiera <math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mi>R</mi></mrow></math> eta <math display=\"inline\"><mi>d</mi></math> dira, hurrenez hurren. Diskoa <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez biratzen ari da, perpendikularrarekin <math display=\"inline\"><mi>α</mi></math> angelua osatzen duen ardatz finko baten inguruan. Kalkulatu diskoaren momentu angeluarra eta ardatzak eragindako indar-momentua."
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
       "html": "Irudiko disko mehearen erradioa <math display=\"inline\"><mi>R</mi></math> da eta <math display=\"inline\"><msub><mi>ω</mi><mn>1</mn></msub></math> abiadura angeluar konstantez ari da biratzen simetria-ardatz horizontalaren inguruan. Ardatza bera <math display=\"inline\"><msub><mi>ω</mi><mn>2</mn></msub></math> abiadura angeluar konstantez biratzen da bertikalaren inguruan. Aukeratu triedro egokia eta kalkulatu diskoaren momentu angeluarra eta euskarriek eragindako indar-momentua.    "
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
       "html": "<span class=\"j-smallcaps\">Higidura-konstanteak</span>"
      },
      {
       "mota": "testua",
       "html": ". Kontsideratu Eulerren ekuazioak higidura askearen kasuan (gogoratu 5.5.1 atala). Frogatu ondoko bi magnitudeak higidura-konstanteak direla: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>F</mi><mn>1</mn></msub><mo>≡</mo><msub><mi>I</mi><mi>x</mi></msub><msubsup><mi>ω</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msub><mi>I</mi><mi>y</mi></msub><msubsup><mi>ω</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msub><mi>I</mi><mi>z</mi></msub><msubsup><mi>ω</mi><mi>z</mi><mn>2</mn></msubsup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>F</mi><mn>2</mn></msub><mo>≡</mo><msubsup><mi>I</mi><mi>x</mi><mn>2</mn></msubsup><msubsup><mi>ω</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>I</mi><mi>y</mi><mn>2</mn></msubsup><msubsup><mi>ω</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>I</mi><mi>z</mi><mn>2</mn></msubsup><msubsup><mi>ω</mi><mi>z</mi><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mtd></mtr></mtable></math> Zein da magnitude hauen esanahi fisikoa? Azaldu nola erabil daitezkeen higidura askearen soluzioa lortzeko, koadratura baten bidez."
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
       "html": "Irudiko xafla karratuaren masa <math display=\"inline\"><mi>m</mi></math> da eta erpin batean dauka itsatsita <math display=\"inline\"><mi>m</mi></math> masa puntuala. Ardatz bertikalaren inguruan <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez biratzen bada, zein da <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> euskarriek eragindako indar-momentua? Ardatza kentzen badugu eta sistema geldi badago espazioan (hau da grabitaterik gabe), non jo behar da xafla norabide perpendikularrean, biratu gabe abia dadin? Nola higituko da sistema, xaflaren zentro geometrikoan <math display=\"inline\"><mi>J</mi></math> bulkada perpendikularra aplikatzen bazaio?  "
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
       "html": "Irudiko markoaren lau alde berdinen masa eta luzera <math display=\"inline\"><mi>m</mi></math> eta <math display=\"inline\"><mi>a</mi></math> dira, hurrenez hurren. Erpin batean <math display=\"inline\"><mi>M</mi></math> masako partikula bat dago itsatsita eta sistema <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> ardatz bertikalaren inguruan ari da biratzen <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez. Kalkulatu zeintzuk diren markoaren <math display=\"inline\"><mi>O</mi></math> zentro geometrikoaren inguruan solido osoaren norabide eta inertzia-momentu nagusiak. Zein da <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> ardatzak eragindako indar-momentua?    "
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
       "html": "Irudiko xafla mehea <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez ari da biratzen ardatz bertikalaren inguruan. <br> (a) Aurkitu <math display=\"inline\"><mi>O</mi></math> puntuan kokatutako solidoaren erreferentzia-sistema, simetriak erabiliz. <br> (b) Kalkulatu <math display=\"inline\"><mi>O</mi></math>-ren inguruko inertzia-momentu nagusiak, <em>inolako integralik egin gabe</em>. Idatzi inertzia-matrizea <math display=\"inline\"><mi>O</mi></math> puntuko solidoaren sisteman. <br> (c) Zein da ardatzak eragindako indar-momentu osoa?    "
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
       "html": "<math display=\"inline\"><mi>d</mi></math> luzerako hagatxo arina <math display=\"inline\"><mi>O</mi></math> artikulazio leunaren inguruan bira daiteke, norabide guztietan, oztoporik gabe. Aztertzen ari garen higidura berezi honetan, hagatxoa plano horizontalean ari da biratzen <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> abiadura angeluar konstantez. Gainera, mutur askean duen <math display=\"inline\"><mi>m</mi></math> masako disko homogeneoa <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez biratzen da bere simetria-ardatzaren inguruan. Diskoaren erradioa <math display=\"inline\"><mi>r</mi></math> da eta lodiera arbuiagarria. Frogatu <math display=\"inline\"><mrow><mn>2</mn><mi>g</mi><mi>d</mi><mo>=</mo><mi>ω</mi><mi mathvariant=\"normal\">Ω</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> erlazioa bete behar dela, higidura berezi hori gerta dadin.    "
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
       "html": "<span class=\"j-smallcaps\">Foucaulten iparrorratz giroskopikoa</span>"
      },
      {
       "mota": "testua",
       "html": ". Disko astun bat biratzen ari da <em>oso arin</em> bere simetria-ardatzaren inguruan. Diskoaren ardatza beti dago plano horizontalean, baina ardatz bertikalaren inguruan bira daiteke oztoporik gabe. Eman dezagun <math display=\"inline\"><mi>θ</mi></math> dela simetria-ardatzaren eta meridianoaren arteko angelua. Aukeratu erreferentzia-sistema egokia eta idatzi <math display=\"inline\"><mi>θ</mi></math>-ren higidura-ekuazioa, Lurraren (2.97) abiadura angeluarra kontuan hartuz. Egin hurbilketa egokia eta frogatu ardatzak meridianoaren inguruan oszilatzen duela. Zein da periodoa oszilazioak txikiak badira? Nola erabil daiteke sistema hau iparrorratz magnetikoaren ordez? Zer gertatzen da poloan? Zertarako erabili behar da <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> oso handia dela?    "
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
       "html": "Xafla mehe eliptiko bat oztoporik gabe bira daiteke bere zentro geometrikoaren inguruan. Ardatzerdi nagusiaren luzera <math display=\"inline\"><mi>a</mi></math> da eta bestearena <math display=\"inline\"><mi>b</mi></math>. Aukera dezagun irudian erakusten den solidoaren sistema. Hasieran <math display=\"inline\"><mi>A</mi></math> puntuaren abiadura <math display=\"inline\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>A</mi></msub><mo>=</mo><mi>c</mi><mi>μ</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> zen eta <math display=\"inline\"><mi>B</mi></math> puntuaren abiaduraren osagai normala <math display=\"inline\"><mrow><msub><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mi>B</mi></msub><mo>=</mo><mi>b</mi><mi>d</mi><mi>μ</mi><mi>/</mi><mi>a</mi></mrow></math>, non <math display=\"inline\"><mi>μ</mi></math> konstantea positiboa den, <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msqrt><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> eta <math display=\"inline\"><mrow><mi>d</mi><mo>≡</mo><msqrt><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>. Xaflaren masa <math display=\"inline\"><mi>m</mi></math> da eta lodiera arbuiagarria. Frogatu hauexek direla inertzia-momentu nagusiak: <math display=\"block\"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>b</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>I</mi><mi>y</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>I</mi><mi>z</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Idatzi Eulerren ekuazioak. Erabili bi higidura-konstante eta hastapen-baldintzak <math display=\"inline\"><msub><mi>ω</mi><mi>z</mi></msub></math> osagaiaren eboluzio-ekuazioa aurkitzeko. Integratu eboluzio-ekuazio hori eta kalkulatu abiadura angeluarraren beste bi osagaiak. Nolakoa izango da xaflaren higidura denbora-tarte luze bat pasatu ondoren?  "
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
       "html": "Irudiko hagatxoaren luzera eta masa <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> eta <math display=\"inline\"><mi>m</mi></math> dira eta <math display=\"inline\"><mi>O</mi></math> ardatz horizontalaren inguruan bira daiteke, plano bertikal batean. Gainera, hagatxoa eta aipaturiko ardatza, <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> ardatz bertikalaren inguruan bira daitezke. Azken honetatik loturik daude hagatxoaren muturrak, masa gabeko soken eta eraztunen bidez, irudian erakusten den moduan. Marruskadura guztiak arbuiagarriak dira."
      },
      {
       "mota": "testua",
       "html": "(a) Frogatu <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez bira daitekeela irudiko konfigurazioan. Kalkulatu soken tentsioak. (b) Zer gertatzen da soka bat apurtzen bada? (c) Eta bestea apurtzen denean? (Ikus 7.71 problema.)     "
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
       "html": "Kontsidera dezagun xafla mehe aske bat. Frogatu abiadura angeluarrak xaflaren planoan duen proiekzioaren modulua beti dela higidura-konstantea. Nolako baldintza bete behar da beste osagaia (normala) ere beti izateko higidura-konstantea?"
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
       "html": "Irudiko barra <math display=\"inline\"><mi>A</mi></math> artikulazioaren inguruan bira daiteke plano bertikalean, marruskadurarik gabe. Beheko muturra <math display=\"inline\"><mi>S</mi></math> sokaren eta <math display=\"inline\"><mi>E</mi></math> eraztunaren bidez dago loturik ardatz bertikal leunetik. Sistema martxan jarri ondoren, <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez biratzen da bertikalaren inguruan: ardatzaren eta barraren arteko angelu konstantea <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>α</mi><mo>&lt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> da eta <math display=\"inline\"><mi>S</mi></math> soka horizontalean dago, irudian erakusten den bezala. Kalkulatu soken tentsioa eta <math display=\"inline\"><mi>A</mi></math> artikulazioak eragindako erreakzio-indarra. Zein da <math display=\"inline\"><mi>ω</mi></math>-ren balio minimoa <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>α</mi><mo>&lt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> izateko? Eta, orduan, zeintzuk izan daitezke <math display=\"inline\"><mi>α</mi></math>-ren balioak?    "
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
       "html": "Irudiko sistemako hagatxoak arinak dira eta biratzen ari dira, ardatz bertikalaren inguruan, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mi>α</mi><mi>t</mi></mrow></math> abiadura angeluarraz (<math display=\"inline\"><mi>α</mi></math> azelerazio angeluarra konstantea da). Kalkulatu sistemaren gainean eragindako indar-momentua.    "
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
       "html": "Irudiko barra homogeneoa <math display=\"inline\"><mi>ω</mi></math> abiadura konstantez ari da biratzen bertikalaren inguruan. Gainera, <math display=\"inline\"><mi>A</mi></math> artikulazio leunaren inguruan bira daiteke plano bertikalean. Erabili gorputzaren erreferentzia-sistema lagrangearra idazteko eta higidura-ekuazioa (edo kontserbazio-legeren bat)  <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>&lt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> anguluko oreka erlatiboaren konfigurazioaren existentzia eta egonkortasuna aztertzeko. Kalkulatu oreka erlatibo egonkor horren inguruko oszilazio txikien maiztasuna.  "
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
       "html": "Irudiko marko karratua <math display=\"inline\"><mi>m</mi></math> masakoa da eta marruskadurarik gabe bira daiteke simetria-ardatz horizontalaren inguruan. Gainera, <math display=\"inline\"><mi>m</mi></math> masa puntuala du erpin batean, irudian erakusten den bezala. (a) Kalkulatu <math display=\"inline\"><mrow><mi>α</mi><mo>≪</mo><mn>1</mn></mrow></math> anplitudeko oszilazio txikien maiztasuna. Zein da <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> euskarriek eragindako indar-momentua oszilazio txikietan masa puntuala (b) puntu baxuenean eta (c) altuenean dagoenean?"
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
       "html": "Solido zurrun baten abiadura angeluarra konstantea da espazioaren sisteman. Konstantea al da beti momentu angeluarra espazioaren sisteman? Eta gorputzaren sisteman?"
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
       "html": "Ziba simetriko baten plano nagusia <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math> da eta pairatzen duen indar-momentu bakarra, suziri txiki batzuek eragina, <math display=\"inline\"><mrow><mi>N</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> da, gorputzaren triedroan, <math display=\"inline\"><mi>N</mi></math> konstantearekin. Askatu Eulerren ekuazioak eta ondorioztatu abiadura angeluarraren modulua handituz doala eta plano nagusian duen proiekzioaren puntaren ibilbidea eliptikoa dela. <br>  <em>Iradokizuna</em>: <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>u</mi><mo>≡</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></math> aldagai-aldaketa erabilgarria izan daiteke."
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
       "html": "Zilindro homogeneo bat marruskadurarik gabe bira daiteke bere zentrotik pasatzen den <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> ardatz perpendikular horizontalaren inguruan. Ardatza <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> abiadura angeluar bertikal konstantez birarazten da. Zilindroaren luzera <math display=\"inline\"><mi>l</mi></math> da eta erradioa <math display=\"inline\"><mi>r</mi></math>. Zilindroaren eta horizontalaren arteko angelua <math display=\"inline\"><mi>θ</mi></math> da. Idatzi <math display=\"inline\"><mi>θ</mi></math>-ren eboluzio-ekuazioa. Kalkulatu oreka erlatiboaren konfigurazioak eta aztertu euren egonkortasuna. Kalkulatu oreka erlatibo egonkorraren inguruko oszilazio txikien maiztasuna. Zein da <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> ardatzaren erreakzioa oreka erlatiboaren konfigurazioetan?    "
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
       "html": "Irudiko eraztunaren masa <math display=\"inline\"><mi>M</mi></math> da eta erradioa <math display=\"inline\"><mi>R</mi></math>. Irudian erakutsitako posizioan finko dagoen diametro arbuiagarriko bolatxoaren masa <math display=\"inline\"><mi>m</mi></math> da. Sistema eraztunaren diametro bertikalaren inguruan birarazten da <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez. Nola aukeratu behar da <math display=\"inline\"><mrow><mi>θ</mi><mo>≠</mo><mn>0</mn><mo>,</mo><mi>π</mi></mrow></math> angelua ardatzak pairatutako <math display=\"inline\"><mi>O</mi></math>-rekiko indar-momentua zero izan dadin? Beti egin daiteke aukera hori? Zein da orduan ardatzak eragindako erreakzio-indarra?    "
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Denetarik])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Ziba simetrikoa</span>"
      },
      {
       "mota": "testua",
       "html": ". Azter dezagun 5.11 irudiko ziba simetrikoa. Simetria-ardatzaren norabideko bektore unitarioa <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒏</mi><mo>≡</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mi>/</mi><mi>R</mi></mrow></math> da. Frogatu <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒏</mi></mrow></math> betetzen dela eta, ondorioz, beti idatz daitekeela abiadura angeluarra ondoko eran, <math display=\"inline\"><mrow><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzio egokiaren funtzioan: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒏</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒏</mi><mi>.</mi></mrow></math>"
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
       "html": "Bira daiteke solido zurrun bat abiadura angeluar konstantez, nagusia ez den ardatz baten inguruan, <em>kanpo-indarren eraginpean</em>? Eta solidoa <em>askea</em> bada?"
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
       "html": "Sotora jaisteko tranpa zabaldu behar du (astiro-astiro) Peruk. Hiru metodo bururatu zaizkio: mutur askeari <em>beti</em> tiratzea (a) bertikalean, (b) tranparekiko perpendikularrean eta (c) horizontalean. Zein kasutan egin beharko du indarrik handiena (txikiena) hasieran? Eta amaieran? Denera, nola egingo du lan minimoa?    "
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
       "html": "Gerta liteke solido zurrun baten momentu angeluarra <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>≠</mo><mn>0</mn></mrow></math> izatea laborategian eta <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑳</mi><mo>*</mo></msup><mo>=</mo><mn>0</mn></mrow></math> masa-zentroaren sisteman?"
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
       "html": "Irudiko bi esfera bete homogeneo berdinak biratzen ari dira <math display=\"inline\"><mi>ω</mi></math> abiadura angeluarraz, erakusten diren norabide elkarzutetan. Astiro-astiro hurbiltzen dira, aurkako abiadura txikiekin, eta elkar ukitzean loturik geratzen dira. Nola higitzen da gorputz berria? Energia zinetikoaren zein frakzio galdu da prozesuan? <br>  <em>Oharra</em>: Grabitatea arbuiagarria da.  "
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
       "html": "Irudiko xafla karratu homogeneoaren masa <math display=\"inline\"><mrow><mn>3</mn><mi>m</mi></mrow></math> da eta aldeen luzera <math display=\"inline\"><mi>a</mi></math>. <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> artikulazioen inguruan bira daiteke, marruskadurarik gabe. Hasieran geldi dago, baina norabide perpendikularrean <math display=\"inline\"><mi>v</mi></math> abiaduraz hurbiltzen den <math display=\"inline\"><mi>m</mi></math> masako partikula batek xaflaren erpin bat jotzen du eta itsatsita geratzen da. Aurkitu xaflaren abiadura angeluarra, talka ondoren, eta artikulazioek eragindako erreakzioa.    "
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
       "html": "Irudiko eraztuna oztoporik gabe bira daiteke <math display=\"inline\"><mi>X</mi></math> ardatz horizontalaren inguruan. Eraztunaren masa eta erradioa <math display=\"inline\"><mi>m</mi></math> eta <math display=\"inline\"><mrow><msqrt><mn>2</mn></msqrt><mi>R</mi></mrow></math> dira, hurrenez hurren, eta itsatsita du <math display=\"inline\"><mi>m</mi></math> masako partikula, erakusten den posizioan. Hasieran eraztuna geldi dago irudiko posizioan, baina norabide perpendikularrean <math display=\"inline\"><mi>v</mi></math> abiaduraz datorren <math display=\"inline\"><mi>m</mi></math> masako partikulak eraztunari itsatsita dagoena jotzen duenean bi partikulak loturik geratzen dira. <br> Kalkulatu talkan ardatzak eragindako bulkada lineala eta angeluarra. Zein da sistemaren oszilazioen anplitudea talka ondoren. Nolako baldintza bete behar da aipaturiko anplitudea txikia izateko? Zein da orduan oszilazio txikien periodoa? <br>  <em>Oharra</em>: Erabili irudiko triedro kalkulua errazteko.    "
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
       "html": "Xafla karratu mehe bat geldi dago espazioan, grabitaterik gabe. Xaflaren masa <math display=\"inline\"><mrow><mn>3</mn><mi>m</mi></mrow></math> da eta aldeen luzera <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math>. Norabide perpendikularrean datorren <math display=\"inline\"><mi>m</mi></math> masako partikulak xaflako erpin bat jo ondoren, itsatsita geratzen da. Partikularen abiadura <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> bazen, nola higitzen da sistema talka ondoren?    "
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
       "html": "<span class=\"j-smallcaps\">Ziba simetrikoa</span>"
      },
      {
       "mota": "testua",
       "html": ". Frogatu 5.5.2 ataleko ziba simetrikoaren abiadura eta momentu angeluarraren arteko angelua <math display=\"block\"><mrow><mi>θ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><msub><mi>I</mi><mi>z</mi></msub><mo>+</mo><msub><mi>I</mi><mi>x</mi></msub><msup><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac></mrow></math> dela, simetria-ardatzaren eta abiadura angeluarraren artekoa <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>α</mi><mo>≤</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> bada. Frogatu <math display=\"inline\"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>&gt;</mo><msub><mi>I</mi><mi>z</mi></msub></mrow></math> denean <math display=\"inline\"><mi>θ</mi></math> angelua <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> tartean dagoela, baina <math display=\"inline\"><mrow><msub><mi>I</mi><mi>z</mi></msub><mo>&gt;</mo><msub><mi>I</mi><mi>x</mi></msub></mrow></math> denean balio maximo bat duela. Zeintzuk dira balio maximo hori eta dagozkion <math display=\"inline\"><mi>α</mi></math> angelua eta <math display=\"inline\"><mrow><msub><mi>I</mi><mi>z</mi></msub><mi>/</mi><msub><mi>I</mi><mi>x</mi></msub></mrow></math> zatidura?"
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
       "html": "Irudiko xafla karratu mehea oztoporik gabe bira daiteke <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> ardatz horizontalaren inguruan. Xaflaren masa <math display=\"inline\"><mi>m</mi></math> da eta aldeen luzera <math display=\"inline\"><mi>a</mi></math>. Hasieran oreka egonkorreko posizio bertikalean dago geldi, baina norabide perpendikularrean datorren masa bereko partikulak erpin bat jotzen du eta itsatsita geratzen da. Talka ondoren sistema posizio bertikal ezegonkorreraino doa eta han geratzen da (une batez, behintzat). Kalkulatu partikularen hasierako abiadura, talkan galdutako energia zinetikoaren proportzioa eta ardatzak (talkan) eragindako bulkada lineala eta angeluarra.    "
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "EHU 2000, ISBN 84-8373-295-5",
     "xehetasuna": "Azterketak ebatziak (1996-2000), mk:5",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bi bola puntual berdin, <math display=\"inline\"><mi>M</mi></math> masakoak, masa arbuiagarria eta <math display=\"inline\"><mi>a</mi></math> luzera duen hagaxka zurrun baten bidez lotuta daude. Hutsean, sistemak bere masa-zentroa zeharkatzen duen ardatz baten inguruan biratzen du <math display=\"inline\"><mi>ω</mi></math> abiadura angeluarraz. Une jakin batean, bolak beste bola batekin talka egiten du, geldirik eta puntuala dena, baita <math display=\"inline\"><mi>M</mi></math> masakoa ere, lehenengoari itsatsita geratzen dena. a) Kalkulatu hiru partikulako sistema osoaren masa-zentroaren posizioa eta abiadura talkaren aurreko unean. b) Zein da hiru partikulako sistemaren momentu angeluarra bere masa-zentroarekiko talkaren aurreko unean? Eta berehala ondorengo unean? c) Zein da sistemaren abiadura angeluarra masa-zentroarekiko talkaren ondoren? d) Zein dira hasierako eta azken energia zinetikoak?"
    },
    {
     "mota": "testua",
     "html": "[Figura: bi ardatz kartesiarren diagrama (<math display=\"inline\"><mi>z</mi></math> bertikala, <math display=\"inline\"><mi>x</mi></math> behatzailearengana, <math display=\"inline\"><mi>y</mi></math> horizontala eskuinera). Ezkerra (hasierako egoera, talka baino justu lehenago): <math display=\"inline\"><mi>y</mi></math> ardatzaren gainean, 1 masa hagaxkaren ezkerreko muturrean, O eta G puntuak zentrotik gertu (O = hagaxkaren zentroa, G pixka bat eskuinera), 2 masa beste muturrean, eta 3 masa (bola geldikorra) 2aren ondoan gezi txiki batekin; <math display=\"inline\"><mi>ω</mi></math> bektorea bertikala Oren gainean. Eskuina (azken egoera, talka baino justu ondoren): 1 masa ezkerrean, O eta G zentroan, eta &quot;2+3&quot; baturiko masa eskuinean gezirekin; <math display=\"inline\"><msup><mi>ω</mi><mo>′</mo></msup></math> bektorea bertikala Oren gainean.]"
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Ebazpena (egileak ebatzita eta iruzkinduta)",
   "blokeak": [
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
     "html": "Irudian bi egoerak erakusten dira, hasierakoa eta azkena, eskuineko bi masen talka eta fusioa baino justu lehenago, eta hau gertatu eta justu ondoren. Era berean, hagaxkaren bidez loturiko bi masen multzoaren masa-zentroak (O puntua) eta hiru masen multzoarenak (G puntua) irudikatzen dira."
    },
    {
     "mota": "testua",
     "html": "<strong>a)</strong>"
    },
    {
     "mota": "testua",
     "html": "G masa-zentroaren posizioa masa-zentroaren definizioa aplikatuz lortzen da. Talka baino justu lehenagoko unean hagaxka eta masak jarri ditugun posizioan, honen <math display=\"inline\"><mi>y</mi></math> koordenatua bakarrik interesatzen zaigu, beste biak, jakina, nuluak baitira. Problemaren datuetatik abiatuta, koordenatu hau izango da:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/e63cece34740be96.svg\" alt=\"y_(upright(G)) = frac(sum_i m_i y_i, sum_i m_i) = frac(M dot.op 0 + M dot.op a + M dot.op a, 3 M) = frac(2 a, 3) #h(2em) arrow.r #h(2em) upright(bold(r))_(upright(G)) = (0 \\, med frac(2 a, 3) \\, med 0)\" style=\"width:37.061em;height:3.388em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "G masa-zentroaren abiadurari dagokionez, aurrekoaren baliokidea den erlazioa aplikatuko dugu. 1 eta 2 masen abiadurak beharko ditugu; hauek, dakigunez, Oren inguruko biraketa-higidura deskribatzen dute <math display=\"inline\"><mi>ω</mi></math> abiadura angeluarraz. Beraz, eta adierazitako posizioetan, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub></mrow></math>. <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mi>ω</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> kontuan hartuta, bi lehen masen abiaduren balioak honako hauek dira: <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mi>ω</mi><mi>a</mi></mrow><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>ω</mi><mi>a</mi></mrow><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math>. Honek hona eramaten gaitu:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/fe2b2859068f1fbb.svg\" alt=\"dot(x)_(upright(G)) = frac(sum_i m_i dot(x)_i, sum_i m_i) = frac(M dot.op omega a \\/ 2 + M dot.op \\( - omega a \\/ 2 \\) + M dot.op 0, 3 M) = 0 #h(2em) arrow.r #h(2em) upright(bold(v))_(upright(G)) = \\( 0 \\, 0 \\, 0 \\)\" style=\"width:40.535em;height:3.388em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "non hasieran nulua ez den osagai bakarra kalkulatzera mugatu garen (nahiz eta azkenean, ikusten denez, hau ere nulua den). <em>Hiru partikulen multzoaren G masa-zentroaren abiadura talka baino justu lehenago nulua da.</em>"
    },
    {
     "mota": "testua",
     "html": "<strong>b)</strong>"
    },
    {
     "mota": "testua",
     "html": "Hiru partikulen sistemaren momentu angeluarraren adierazpena, sistemaren masa-zentroarekiko, G, talka baino justu lehenago, honakoa izango da <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mrow><mi mathvariant=\"normal\">G</mi><mo mathvariant=\"normal\">,</mo><mi mathvariant=\"normal\">a</mi><mi mathvariant=\"normal\">n</mi><mi mathvariant=\"normal\">t</mi></mrow></msub><mo>=</mo><msub><mo>∑</mo><mi>i</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>×</mo><msub><mi>m</mi><mi>i</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>i</mi></msub></mrow></math>. Eraginez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mrow><mi mathvariant=\"normal\">G</mi><mo mathvariant=\"normal\">,</mo><mi mathvariant=\"normal\">a</mi><mi mathvariant=\"normal\">n</mi><mi mathvariant=\"normal\">t</mi></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>a</mi></mrow><mn>3</mn></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo>×</mo><mi>M</mi><mo>⋅</mo><mfrac><mrow><mi>ω</mi><mi>a</mi></mrow><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mfrac><mi>a</mi><mn>3</mn></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo>×</mo><mi>M</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mrow><mi>ω</mi><mi>a</mi></mrow><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mi>a</mi><mn>3</mn></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo>×</mo><mi>M</mi><mo>⋅</mo><mn>0</mn><mo>=</mo><mfrac><mrow><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><mi>ω</mi></mrow><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Adierazpen honen kalkuluan kontuan hartu dugu partikulen abiadurak Grekikoak berdinak direla erreferentzia-sistema <em>kanpoko</em> batekikoak (ardatzak margotuta dauden tokian), <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi mathvariant=\"normal\">G</mi></msub><mo>=</mo><mn>0</mn></mrow></math> baita."
    },
    {
     "mota": "testua",
     "html": "Talkan parte hartzen duten indarrak sistemarekiko <em>barnekoak</em> dira, beraz ez dute momentu linealik ez angeluarrik aldatuko. Hortaz, G masa-zentroaren abiadura nulua izaten jarraituko du (geldirik jarraituko du) eta momentu angeluarra kalkulatu berri duguna izaten jarraituko du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mrow><mi mathvariant=\"normal\">G</mi><mo mathvariant=\"normal\">,</mo><mi mathvariant=\"normal\">d</mi><mi mathvariant=\"normal\">e</mi><mi mathvariant=\"normal\">s</mi><mi mathvariant=\"normal\">p</mi></mrow></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mrow><mi mathvariant=\"normal\">G</mi><mo mathvariant=\"normal\">,</mo><mi mathvariant=\"normal\">a</mi><mi mathvariant=\"normal\">n</mi><mi mathvariant=\"normal\">t</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><mi>ω</mi></mrow><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>c)</strong>"
    },
    {
     "mota": "testua",
     "html": "Azken erlazio honetatik, eta G masa-zentroa biraketaren zentro instataneoa (eta, kasu honetan, iraunkorra) dela kontuan hartuta, sistemaren abiadura angeluar berria <math display=\"inline\"><msup><mi>ω</mi><mo>′</mo></msup></math> lor dezakegu. Problemaren simetriagatik, hau ere <math display=\"inline\"><mi>z</mi></math> ardatzaren norabidekoa izango da, beraz honela idatziko dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mrow><mi mathvariant=\"normal\">G</mi><mo mathvariant=\"normal\">,</mo><mi mathvariant=\"normal\">d</mi><mi mathvariant=\"normal\">e</mi><mi mathvariant=\"normal\">s</mi><mi mathvariant=\"normal\">p</mi></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>a</mi></mrow><mn>3</mn></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo>×</mo><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>ω</mi><mo>′</mo></msup><mi mathvariant=\"bold-italic\">𝒌</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>a</mi></mrow><mn>3</mn></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mfrac><mi>a</mi><mn>3</mn></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo>×</mo><mn>2</mn><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>ω</mi><mo>′</mo></msup><mi mathvariant=\"bold-italic\">𝒌</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>a</mi><mn>3</mn></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><mi>ω</mi></mrow><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eraginez eta gaiak berdinduz, azkenean hona iritsi gara:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>ω</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>3</mn><mi>ω</mi></mrow><mn>4</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>d)</strong>"
    },
    {
     "mota": "testua",
     "html": "Talkaren aurreko eta ondorengo energia zinetikoak partikula-sistema baterako energia zinetikoaren adierazpena aplikatuz baino ez dira lortzen, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>m</mi><mi>i</mi></msub><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math>. Hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>T</mi><mrow><mi mathvariant=\"normal\">a</mi><mi mathvariant=\"normal\">n</mi><mi mathvariant=\"normal\">t</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>ω</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>T</mi><mrow><mi mathvariant=\"normal\">d</mi><mi mathvariant=\"normal\">e</mi><mi mathvariant=\"normal\">s</mi><mi mathvariant=\"normal\">p</mi></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>a</mi><msup><mi>ω</mi><mo>′</mo></msup></mrow><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mn>2</mn><mi>M</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><msup><mi>ω</mi><mo>′</mo></msup></mrow><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>3</mn><mn>16</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non partikulen abiadurak balio absolutuan adierazi diren, karratuan agertzen baitira. Ikusten da <math display=\"inline\"><mrow><msub><mi>T</mi><mrow><mi mathvariant=\"normal\">d</mi><mi mathvariant=\"normal\">e</mi><mi mathvariant=\"normal\">s</mi><mi mathvariant=\"normal\">p</mi></mrow></msub><mo>&lt;</mo><msub><mi>T</mi><mrow><mi mathvariant=\"normal\">a</mi><mi mathvariant=\"normal\">n</mi><mi mathvariant=\"normal\">t</mi></mrow></msub></mrow></math> dela, behar bezala, talka inelastikoa baita eta bertan energia galtzen baita."
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>R</mi></math> erradioko esfera trinko bat dugu, <math display=\"inline\"><mi>r</mi></math> erradioko zulo esferiko bat duena, zentrotik <math display=\"inline\"><mi>a</mi></math> distantziara kokatua. Irudian adierazitako ardatzaren inguruan biratzen duela suposatuz (<math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>), kalkulatu <math display=\"inline\"><mi>ω</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> bektoreek osatzen duten angelua."
    },
    {
     "mota": "testua",
     "html": "[Figura (bi diagrama): - Ezkerra: <math display=\"inline\"><mi>R</mi></math> erradioko esfera trinkoa <math display=\"inline\"><mi>O</mi></math> zentroarekin; ardatz bertikala (eten-puntuz) <math display=\"inline\"><mrow><mi>z</mi><mo>≡</mo><mn>3</mn></mrow></math> gisa etiketatua gorantz; ardatz horizontala (eten-puntuz) <math display=\"inline\"><mn>1</mn></math> gisa etiketatua eskuinera, <math display=\"inline\"><mi>R</mi></math> markatuta <math display=\"inline\"><mi>O</mi></math> eta <math display=\"inline\"><mn>1</mn></math> puntuaren artean. <math display=\"inline\"><mi>r</mi></math> erradioko zulo esferiko txikia <math display=\"inline\"><mrow><mi>z</mi><mo>≡</mo><mn>3</mn></mrow></math> ardatzaren gainean, <math display=\"inline\"><mi>O</mi></math>ren gainetik, <math display=\"inline\"><mi>O</mi></math>tik <math display=\"inline\"><mi>a</mi></math> distantziara (eten-puntuzko segmentu bertikala <math display=\"inline\"><mi>a</mi></math> gisa etiketatua). Biraketa-ardatza <math display=\"inline\"><mi>e</mi></math> makurtua <math display=\"inline\"><mi>O</mi></math>tik pasatzen dena, <math display=\"inline\"><mi>ω</mi></math> bektorea gainean; <math display=\"inline\"><mrow><mi>z</mi><mo>≡</mo><mn>3</mn></mrow></math> ardatzaren eta <math display=\"inline\"><mi>e</mi></math> ardatzaren (<math display=\"inline\"><mi>ω</mi></math>ren norabidea) arteko angelua <math display=\"inline\"><mi>α</mi></math> gisa etiketatua. - Eskuina: erpin batetik, ardatz bertikala <math display=\"inline\"><mrow><mi>z</mi><mo>≡</mo><mn>3</mn></mrow></math> gisa etiketatua eta ardatz horizontala <math display=\"inline\"><mn>1</mn></math> gisa etiketatua; <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> eta <math display=\"inline\"><mi>ω</mi></math> bektoreak marrazten dira. <math display=\"inline\"><mrow><mi>z</mi><mo>≡</mo><mn>3</mn></mrow></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> arteko angelua <math display=\"inline\"><mi>β</mi></math> gisa etiketatua; <math display=\"inline\"><mrow><mi>z</mi><mo>≡</mo><mn>3</mn></mrow></math> eta <math display=\"inline\"><mi>ω</mi></math> arteko angelua <math display=\"inline\"><mi>α</mi></math> gisa etiketatua.]"
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Ebazpena (egileak ebatzita eta iruzkinduta)",
   "blokeak": [
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
     "html": "Irudian esfera zulo esferikoarekin irudikatu dugu, O3 ardatza (ardatz nagusia dena, jakina) zulo esferikoaren zentrotik pasatzeko moduan. O3 ardatz honen inguruko biraketa-simetria duen solido zurruna da, beraz beste bi ardatz nagusiak elkarren arteko perpendikularrak eta O3 ardatzarekiko perpendikularrak aukeratu ahal izango ditugu, honen edozein puntutatik. Hemen esfera handiaren zentroan kokatzea erabaki dugu, O1 ardatza paperaren planoan (une horretan) eta O2 ardatza (irudikatu gabea) plano honen perpendikularra eta atzerantz."
    },
    {
     "mota": "testua",
     "html": "Deskribatutako gorputzaren inertzia-tentsorea bi inertzia-tentsoreren kenketa gisa lor daiteke, bata <math display=\"inline\"><mi>R</mi></math> erradioko esfera trinkoari dagokiona, eta bestea adierazitako zulo esferikoaren tokia beteko lukeen <math display=\"inline\"><mi>r</mi></math> erradioko esfera trinkoari dagokiona. Bi inertzia-tentsoreak adierazitako O123 ardatz-sistemarekiko definituta egongo lirateke, sistema hori gorputz bakoitzaren eta osoaren ardatz nagusien sistemarekin bat datorrena. Beraz, bi tentsoreak diagonalak dira."
    },
    {
     "mota": "testua",
     "html": "Suposatuko dugu ezagutzen dugula esfera baten inertzia-momentua bere zentrotik pasatzen den ardatzarekiko, eta <math display=\"inline\"><mrow><mfrac><mn>2</mn><mn>5</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> dela, <math display=\"inline\"><mi>M</mi></math> <math display=\"inline\"><mi>R</mi></math> erradioko esfera <em>trinkoaren</em> masa izanik. Beraz, honela idatziko dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mrow><mn>1</mn><mo>,</mo><mi>M</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mn>2</mn><mo>,</mo><mi>M</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mn>3</mn><mo>,</mo><mi>M</mi></mrow></msub><mo>=</mo><mfrac><mn>2</mn><mn>5</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Handiaren zuloaren tokia betetzen duen esfera txikiaren inertzia-momentu nagusiak kalkulatzeko, kontuan hartuko dugu O3 ardatzarekiko handiaren adierazpen formal bera izango duela, hau da, <math display=\"inline\"><mrow><mfrac><mn>2</mn><mn>5</mn></mfrac><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> (non <math display=\"inline\"><mi>m</mi></math> zuloaren tokia betetzen duen esfera <em>trinkoaren</em> masa den), beste bi ardatzekiko, berriz, Steinerren teorema erabili beharko dugu, O1 eta O2 ardatzak esfera txikiaren simetria-ardatzetik <math display=\"inline\"><mi>a</mi></math> distantziara baitaude. Beraz, honela idatziko dugu:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/5abcbe2dd9ad2fdb.svg\" alt=\"I_(1 \\, m) = I_(2 \\, m) = 2 / 5 m r^2 + m a^2 #h(2em) I_(3 \\, m) = 2 / 5 m r^2\" style=\"width:22.733em;height:2.585em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Beraz, zuloa duen gorputz esferikoaren inertzia-momentu nagusiak hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/b2d341d834203091.svg\" alt=\"I_1 = I_2 = 2 / 5 \\( M R^2 - m r^2 \\) - m a^2 #h(2em) I_3 = 2 / 5 \\( M R^2 - m r^2 \\)\" style=\"width:29.424em;height:2.585em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Abiadura angeluarra ardatz nagusien araberako osagaietan adieraztea geratzen zaigu. Honela idatziko dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>,</mo><msub><mi>ω</mi><mn>2</mn></msub><mo>,</mo><msub><mi>ω</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Deskribatutako gorputzaren momentu angeluarra ardatz nagusien sisteman honela adieraziko da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>1</mn></msub><msub><mi>ω</mi><mn>1</mn></msub><mo>,</mo><msub><mi>I</mi><mn>2</mn></msub><msub><mi>ω</mi><mn>2</mn></msub><mo>,</mo><msub><mi>I</mi><mn>3</mn></msub><msub><mi>ω</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>1</mn></msub><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>I</mi><mn>3</mn></msub><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non, idazketa-ekonomiaren ondorioz, inertzia-momentuak <math display=\"inline\"><msub><mi>I</mi><mi>i</mi></msub></math> notazioaz izendatzen jarraituko dugun. Ikusten denez, O2 ardatzaren araberako osagaia nulua da, eta horrek esan nahi du Orekiko momentu angeluar bektorea <math display=\"inline\"><mi>ω</mi></math> bektoreak eta O3 ardatzak osatutako planoan dagoela. Berehala lor dezakegu momentu angeluar bektoreak <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> O3 ardatzarekin osatzen duen angelua, <math display=\"inline\"><mi>β</mi></math> deituko dioguna, eta hemendik, <math display=\"inline\"><mi>ω</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> arteko angelua, <math display=\"inline\"><mrow><mi>α</mi><mo>−</mo><mi>β</mi></mrow></math> izango dena. Ikusten denez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>=</mo><mfrac><msub><mi>L</mi><mn>1</mn></msub><msub><mi>L</mi><mn>3</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>3</mn></msub></mfrac><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Erlazio trigonometriko ezagun bat erabiliz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow><mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>3</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mn>1</mn><mo>+</mo><mfrac><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>3</mn></msub></mfrac><msup><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mn>30</mn><msup><mi></mi><mo>∘</mo></msup><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mn>3</mn></msqrt></mrow></math> dela kontuan hartuta, aurrekoa honela geratuko zaigu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msqrt><mn>3</mn></msqrt><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>3</mn></msub><mo>−</mo><msub><mi>I</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><msub><mi>I</mi><mn>3</mn></msub><mo>+</mo><msub><mi>I</mi><mn>1</mn></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><msqrt><mn>3</mn></msqrt><mspace width=\"0.167em\"></mspace><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>3</mn><msub><mi>I</mi><mn>3</mn></msub><mo>+</mo><msub><mi>I</mi><mn>1</mn></msub></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aurreko azken adierazpenak esaten digu <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> beti positiboa dela, zatikizuna eta izendatzailea positiboak baitira (inertzia-momentuak <em>beti</em> positiboak dira). Hau da, <math display=\"inline\"><mrow><mi>α</mi><mo>−</mo><mi>β</mi><mo>≤</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Kanpoko esferaren eta barruko zulo esferikoaren dimentsio geometrikoen notazioa erabiltzen badugu, erraza da ikustea aurreko adierazpena honela geratzen dela:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mfrac><mn>8</mn><mn>5</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>r</mi><mn>3</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mfrac><mn>8</mn><mn>5</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>5</mn></msup><mo>−</mo><msup><mi>r</mi><mn>5</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>r</mi><mn>3</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi>M</mi></math> eta <math display=\"inline\"><mi>m</mi></math> masak solidoaren <math display=\"inline\"><mi>ρ</mi></math> dentsitatearen eta dimentsio geometrikoen funtzioan ordezkatu ditugun. Notazio honetan, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>ren izaera positiboa erabat ezkutatuta geratzen da, eta horregatik nahiago da aurreko notazioa."
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kotxe baten gurpila, 25 cm-ko diametrokoa, 10 kg-ko masakoa eta 10 cm-ko lodierakoa, orekatuta dago (ardatzaren gaineko indar-bikote espurioak saihesteko) bi berun-zati txiki jarriz, bakoitza 20 g-ko masakoa, bere periferian, bat gurpilaren barruko aurpegian eta bestea kanpoko aurpegian, diametralki aurkako puntuetan. Kalkulatu bi zatien momentu angeluarrak biraketa-ardatzarekin osatzen duen angelua eta egin hiru bektore hauen kokapenaren eskema kualitatiboa gurpila biratzen denean: zatien momentu angeluarra, gurpilaren gainerakoaren momentu angeluarra eta abiadura angeluarra."
    },
    {
     "mota": "testua",
     "html": "[Enuntziatuaren figura — bi zati: - Ezkerra: gurpila ertzetik ikusita laukizuzen gisa, bere altuera (lodiera) &quot;10 cm&quot; gisa akotatuta ezkerreko aldean; bere O zentroan ardatz txikien hirukote bat (z gorantz, x behatzailearengana, y eskuinera). Bi puntu lodi (berun-zatiak) laukizuzenaren diametralki aurkako izkinetan (bat goi-ezkerrean, bestea behe-eskuinean), Oren bidez pasatzen diren eten-puntuzko lerroez lotuta; bakoitza aurpegian. Azpian, zirkulu bat (gurpilaren aurpegia) diametro horizontal &quot;25 cm&quot; gisa akotatuta. - Eskuina: bektoreen diagrama O jatorriarekin eta z (gora), x (behatzailearengana), y (eskuinera) ardatzekin. Hiru bektore ateratzen dira O-tik gorantz: J_rst (ezkerrera makurtua), ω (bertikala, zren arabera) eta J_trz (eskuinera makurtua), θ angelua markatuta ω eta J_trzren artean.]"
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Ebazpena (egileak ebatzita eta iruzkinduta)",
   "blokeak": [
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
     "html": "Kontsidera dezagun une jakin batean gurpila eta masak irudiaren posizioan daudela, non masak Oyz planoan dauden eta abiadura angeluar bektorea ω = ωk den. Ezkerreko masaren posizio-bektoreari r deitzen badiogu, eskuinekoarena −r izango da, eta lehenengoaren abiadura v = ω × r bada (masak ω abiadura angeluarraz higidura zirkularra deskribatzen du), bigarrenaren abiadura, berehala egiaztatu daitekeenez, −v izango da. Momentu angeluarraren definizioaren arabera, masa bakoitzak modu berean laguntzen du bi zatien momentu angeluarrean O puntuarekiko. Hau da, bi zatien multzoaren momentu angeluarra horietako baten momentu angeluarraren bikoitza da. Adierazitako posizioan r = −0.05(5j − k) dela kontuan hartuta, v = 0.25ωi izanda, honela idatzi ahal izango dugu:"
    },
    {
     "mota": "testua",
     "html": "J_trz = 2r × mv = 0.025mω(j + 5k)"
    },
    {
     "mota": "testua",
     "html": "Berehalakoa da egiaztatzea J_trz bektorea r-rekiko perpendikularra dela (biderkadura eskalarra r · J_trz = 0) eta Oyz planoan ere badagoela. Zatien momentu angeluarrak abiadura angeluarraren bektorearekin osatzen duen angelua erraz zehaztu daiteke bi prozeduratan:"
    },
    {
     "mota": "testua",
     "html": "cos θ = (ω · J_trz) / (|ω||J_trz|) = 0.125mω² / (ω · 0.025mω√26) = 5/√26"
    },
    {
     "mota": "testua",
     "html": "Edo are errazago: gurpilaren eta masen irudi bertatik, θ angelua r bektoreak Oy ardatzaren noranzko negatiboarekin osatzen duen angeluaren berdina izango da. Hau da:"
    },
    {
     "mota": "testua",
     "html": "tan θ = 1/5 → θ = 11°18&#x27;36&#x27;&#x27;"
    },
    {
     "mota": "testua",
     "html": "Eskuineko irudian zatien eta gurpilaren gainerako zatiaren momentu angeluarren kokapena adierazten da. Beruneko bi zatiak gehitu gabe, momentu angeluar osoak ez luke biraketa-ardatzaren norabidea izango (hau da, biraketa-ardatza ez litzateke inertzia-ardatz nagusia izango), gertaera horrek biraketaren higiduraren gainean dituen ondorio kaltegarriekin batera (bibrazioak, energia-galerak etab.). Bi masa horien faltan, beraz, gainerakoaren momentu angeluarrak, J_rst, abiadura angeluarraren bektorearen inguruan kono bat deskribatuko luke, eta, ondorioz, masak kokapen estrategikoetan jarriz gehitzen joan beharko zaizkio, momentu angeluar osoa biraketaren ardatzaren norabidean egon dadin."
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Irudiko sistemak sektore zilindriko homogeneo bat du, <math display=\"inline\"><mi>α</mi></math> irekidura, <math display=\"inline\"><mi>a</mi></math> erradio eta <math display=\"inline\"><mi>M</mi></math> masakoa, eta haren masa-zentrotik luzera <math display=\"inline\"><mi>l</mi></math> eta masa <math display=\"inline\"><mi>m</mi></math> dituen pendulu bat zintzilik, zilindroaren ardatzaren perpendikularki den planoan bakarrik higitu daitekeena (oso ildosko bat aprobetxatuz). Kalkulatu O puntuarekiko — zilindroaren ardatzari dagokiona — inertzia- momentua, eta masa-zentro G-rekiko inertzia-momentua aurrekoari paraleloa den ardatzarentzat. Idatzi sistemaren lagrangearra eremu grabitatorio bertikal uniforme baten presentzian."
    },
    {
     "mota": "testua",
     "html": "[Ezkerreko irudia: sektore zilindrikoak (edozeleak) O puntutik zintzilik daude; O, z (gorantz) eta x (eskuinerantz) ardatzak. Bertikalarekin osatzen duen <math display=\"inline\"><mi>φ</mi></math> angelua, O-tik masa-zentro G-ra doan <math display=\"inline\"><mi>d</mi></math> distantzia, G puntua, sektorearen <math display=\"inline\"><mi>M</mi></math> masa, eta G-tik zintzilik dagoen pendulua (<math display=\"inline\"><mi>θ</mi></math> angeluarekin, <math display=\"inline\"><mi>l</mi></math> luzera eta <math display=\"inline\"><mi>m</mi></math> masa) adierazten dira.]"
    },
    {
     "mota": "testua",
     "html": "[Eskuineko irudia: sektorea x ardatzarekiko simetrikoki zabaldua, O erpinean; z (gorantz) eta x (eskuinerantz) ardatzak. <math display=\"inline\"><mi>r</mi></math> erradioan eta <math display=\"inline\"><mi>γ</mi></math> angeluan dagoen azalerako elementua erakusten da, <math display=\"inline\"><mrow><mi>d</mi><mi>r</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>d</mi><mi>γ</mi></mrow></math> diferentzialekin eta <math display=\"inline\"><mrow><mi>r</mi><mi>d</mi><mi>γ</mi></mrow></math> elementuarekin; <math display=\"inline\"><mi>x</mi></math> ardatzaren azpiko <math display=\"inline\"><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></math> angelu-erdia; <math display=\"inline\"><mi>M</mi></math> masa.]"
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Ebazpena (egileak ebatzita eta iruzkinduta)",
   "blokeak": [
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
     "html": "Kalkula dezagun lehenik sektore zilindrikoaren masa-zentro G-ren kokapena, horretarako eskuineko irudia erabiliz. Erabilitako ardatz-sistema hautaketarekin, eta sektorearen lodiera beste dimentsioekin alderatuta baztergarria dela suposatuz, koordenatu polar erabiltzea komeni zaigu, eta, beraz, azalerako elementua zuzenean koordenatu hauen funtzioan irudikatuko dugu. Gainera, simetriagatik, evidentzia da masa-zentroaren <math display=\"inline\"><msub><mi>z</mi><mi>G</mi></msub></math> koordenatua nulua izan behar dela, <math display=\"inline\"><mi>σ</mi></math> dentsitatea konstantea suposatzen baita. Hau da, masa-zentroa sektore zilindrikoaren ardatz geometrikoan egongo da, ezkerreko irudian erakusten den bezala. Beraz, masa-zentroaren <math display=\"inline\"><msub><mi>x</mi><mi>G</mi></msub></math> koordenatuaren kalkulura mugatuko gara. Honela:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mi>G</mi></msub><mo>=</mo><mfrac><mrow><mo>∫</mo><mi>x</mi><mi>d</mi><mi>m</mi></mrow><mrow><mo>∫</mo><mi>d</mi><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><mi>σ</mi><mi>M</mi></mfrac><mo>∫</mo><mi>x</mi><mi>d</mi><mi>A</mi><mo>=</mo><mfrac><mi>σ</mi><mi>M</mi></mfrac><mo>∫</mo><mi>x</mi><mspace width=\"0.167em\"></mspace><mi>r</mi><mi>d</mi><mi>r</mi><mi>d</mi><mi>γ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><mi>d</mi><mi>m</mi><mo>=</mo><mi>σ</mi><mi>d</mi><mi>A</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>d</mi><mi>A</mi><mo>=</mo><mi>r</mi><mi>d</mi><mi>r</mi><mi>d</mi><mi>γ</mi></mrow></math> egin dugun. Gainera, <math display=\"inline\"><mi>α</mi></math> angeluko sektore zilindrikoak <math display=\"inline\"><mi>M</mi></math> masa badu, masaren dentsitate superfiziala <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>2</mn><mi>M</mi><mi>/</mi><mi>α</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math> moduan idatz daiteke, disko osoaren masa erreferentzia gisa erabiliz erraz ondoriozta daitekeen bezala. Azkenik, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>γ</mi></mrow></math> kontuan hartuta, hona iritsiko gara:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mi>G</mi></msub><mo>=</mo><mfrac><mn>2</mn><mrow><mi>α</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><msup><mi>r</mi><mn>2</mn></msup><mi>d</mi><mi>r</mi><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>α</mi><mi>/</mi><mn>2</mn></mrow><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>γ</mi><mi>d</mi><mi>γ</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>a</mi></mrow><mrow><mn>3</mn><mi>α</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi>α</mi><mn>2</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sektore zilindrikoaren inertzia-momentuaren kalkulurako, kontuan hartuko dugu O-tik igarotzen den biraketa-ardatzarekiko masa-banaketa disko oso bati dagokion berdina dela eta, beraz, inertzia-momentuaren adierazpena formalki bera izan behar dela. Beste bide bat da <math display=\"inline\"><mi>α</mi></math> irekidurako sektorea <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><mi>M</mi><mi>/</mi><mi>α</mi></mrow></math> masako disko baten <math display=\"inline\"><mrow><mi>α</mi><mi>/</mi><mn>2</mn><mi>π</mi></mrow></math>-garren zatitzat hartzea; orduan haren inertzia-momentua disko osoaren <math display=\"inline\"><mrow><mi>α</mi><mi>/</mi><mn>2</mn><mi>π</mi></mrow></math>-garrena izango da. Honela eginez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mi>O</mi></msub><mo>=</mo><mfrac><mi>α</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>M</mi></mrow><mi>α</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>a</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Masazentro G-tik igarotzen den eta aurrekoari paraleloa den ardatzarekiko sektorearen inertzia-momentua Steinerren teorema zuzenean aplikatuz lortzen da. Bi ardatzen arteko distantzia <math display=\"inline\"><mrow><msub><mi>x</mi><mi>G</mi></msub><mo>=</mo><mi>d</mi></mrow></math> denez, honela idatziko dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mi>G</mi></msub><mo>=</mo><msub><mi>I</mi><mi>O</mi></msub><mo>−</mo><mi>M</mi><msup><mi>d</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mfrac><mn>32</mn><mrow><mn>9</mn><msup><mi>α</mi><mn>2</mn></msup></mrow></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>α</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "[Kontuan har bedi masa-zentrotik igarotzen den ardatzarekiko inertzia-momentua beti dela txikiena hari paraleloa den edozein ardatzarekiko alderatuta. Hortik Steinerren teoremaren bigarren kideko <math display=\"inline\"><mi>−</mi></math> zeinua]."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Sistemaren funtzio lagrangearra.</em> Har dezagun multzoa edozein <math display=\"inline\"><mi>t</mi></math> denbora-unetan, ezkerreko irudian irudikatzen den bezala. Eremu grabitatorio uniformeak bertikalki eta beheranzko noranzkoan eragiten duela suposatuko dugu, <math display=\"inline\"><mi>g</mi></math> intensitatearekin. Sektore zilindrikoaren higiduraren kasuan, honek O-tik igarotzen den ardatzaren inguruko biraketa hutsa egiten du, eta, beraz, energia zinetikoa biraketako energia zinetikoaren gai bakarrarekin idatz dezakegu. Sektorearen energia potentzialari dagokionez, energia potentzialen zero-maila O puntuan badago, <math display=\"inline\"><mrow><mi>−</mi><mi>M</mi><mi>g</mi><mi>d</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></math> izango da."
     ]
    },
    {
     "mota": "testua",
     "html": "Penduluari dagokionez, haren koordenatuak eta abiadurak koordenatu eta abiadura orokortuen funtzioan honela idatziko dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/642577bd65f7b446.svg\" alt=\"{x = d sin phi + l sin theta\\\\ z = - \\( d cos phi + l cos theta \\) #h(2em) {dot(x) = d dot(phi) cos phi + l dot(theta) cos theta\\\\ dot(z) = d dot(phi) sin phi + l dot(theta) sin theta\" style=\"width:48.754em;height:1.579em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "eta, beraz, abiaduraren karratua honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><msup><mi>d</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>l</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>l</mi><mi>d</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>−</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ordezkatu eta sinplifikatu ondoren, funtzio lagrangearra honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>M</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>d</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>l</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>l</mi><mi>d</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>−</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>M</mi><mi>g</mi><mi>d</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>+</mo><mi>m</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>+</mo><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><msub><mi>x</mi><mi>G</mi></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mi>a</mi></mrow><mrow><mn>3</mn><mi>α</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi>α</mi><mn>2</mn></mfrac></mrow></math>."
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>m</mi></math> masakoa eta <math display=\"inline\"><mi>l</mi></math> luzerakoa den barra uniforme baten muturra marruskadurarik gabeko ardatz bertikal batean zehar higitzera behartuta dago. Beste muturra plano horizontal batean zehar irristatzen da, marruskadurarik gabe hori ere. Hasierako <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean, barra <math display=\"inline\"><mrow><mi>O</mi><mi>z</mi></mrow></math> ardatzaren ingurukan biratzen ari da <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> abiadura angeluarraz. Gainera, hasierako unean horretan, <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. Barrak planoarekin kontaktua mantentzen badu, aurkitu <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> eta <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>-ren balioak <math display=\"inline\"><mi>θ</mi></math>-ren funtzioan."
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Ebazpena (egileak ebatzita eta iruzkinduta)",
   "blokeak": [
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
     "html": "Barrari ardatz nagusien sistema bat esleitzen diogu, masa-zentro G-n jatorria duena, ardatzen norabideak honako hauek izan daitezen: G3, barraren norabide longitudinalean; G1 eta G2, aurrekoaren perpendikularrak eta G2 betirako <math display=\"inline\"><mrow><mi>O</mi><mi>x</mi><mi>y</mi></mrow></math> planoaren paraleloa izan dadin, eta G1k hiruko zuzena osatzen du irudian adierazitako norabidean."
    },
    {
     "mota": "testua",
     "html": "[Irudia: barra, masa-zentro G duela, x, y, z ardatzeko (bertikala) hiruko batean kokatuta. theta angeluak (barra/G ardatza eta z ardatzaren artekoa) eta phi angeluak ( plano horizontaleko azimuta) agertzen dira, omega abiadura angeluarra, psi prezesio-ardatza z-ren arabera, eta barraren gainean 1, 2, 3 zenbakiz etiketatutako ardatz nagusien norabideak, G O-ren eta goiko puntuaren artean kokatuta.]"
    },
    {
     "mota": "testua",
     "html": "Problema formalismo lagrangearra erabiliz ebatziko dugu, eta, horretarako, aldagai orokortuak identifikatu beharko ditugu (<math display=\"inline\"><mi>θ</mi></math> eta <math display=\"inline\"><mi>φ</mi></math>). Barraren energia zinetikoa masa-zentroan kokatutako barraren masaren translazioko energia zinetikoen eta masa-zentro horretatik igarotzen den ardatz baten inguruko biraketako energia zinetikoaren batura da. Hasierako masa-zentroaren koordenatuak <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta dagozkion abiadurak idatziko ditugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">{</mo><mi>x</mi><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>y</mi><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>z</mi><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">{</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo>−</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>+</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mfrac><mi>l</mi><mn>2</mn></mfrac><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> abiadura angeluarra ardatz nagusien sisteman adieraziko dugu. Iruditik ondorioztaten da sistema honetan honela idatz ahal izango dugula:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi mathvariant=\"bold-italic\">𝜽</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub><mo>+</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub><mo>−</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>3</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Barraren masa-zentroko ardatz nagusiekiko inertzia-momentuak <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> direla kontuan hartuta, energia zinetiko osoa, eragiketa egokiak egin eta sinplifikatu ondoren, honakoa da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>1</mn></msub><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>I</mi><mn>3</mn></msub><msubsup><mi>ω</mi><mn>3</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Energia potentziala, bestalde, honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>m</mi><mi>g</mi><mi>z</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Azkenik, funtzio lagrangearra honela idatz daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Idatz ditzagun bi aldagai orokortuentzako higiduraren ekuazioak:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/6161c74063684f4d.svg\" alt=\"frac(partial L, partial dot(theta)) = 1 / 3 m l^2 dot(theta) #h(2em) #h(2em) frac(partial L, partial theta) = 1 / 3 m l^2 dot(phi)^2 sin theta cos theta + 1 / 2 m g l sin theta\" style=\"width:29.983em;height:2.805em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/e42f5f7d04dede30.svg\" alt=\"frac(partial L, partial dot(phi)) = 1 / 3 m l^2 dot(phi) sin^2 theta #h(2em) #h(2em) frac(partial L, partial phi) = 0\" style=\"width:18.274em;height:2.870em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Hau da, sinplifikatu ondoren:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mrow><mn>2</mn><mi>l</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext><mo>=</mo><mfrac><msub><mi>ω</mi><mn>0</mn></msub><mn>2</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bigarrenean problemaren testuak ematen dizkigun muga-baldintzak erabili ditugu: <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>. Bigarrenetik <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> askatzen dugu <math display=\"inline\"><mi>θ</mi></math>-ren funtzioan eta lehenengoan ordezkatzen dugu, eta honakoa geratzen zaigu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>4</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mrow><mn>2</mn><mi>l</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau da <math display=\"inline\"><mi>θ</mi></math> koordenaturako higiduraren ekuazio diferentziala, erraz integratzen dena. <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>z biderkatzearekin bakarrik, berehalako integralak agertzen dira, eta emaitza honakoa da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mi>−</mi><mfrac><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mn>4</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mi>l</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mi>C</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Integrazio-konstantearen balioa zehazteko hasierako baldintzak berriro erabiltzen ditugu. <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> izanik, hortik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mfrac><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mn>2</mn></mfrac><mo>+</mo><mfrac><mrow><mn>3</mn><msqrt><mn>2</mn></msqrt><mspace width=\"0.167em\"></mspace><mi>g</mi></mrow><mrow><mn>2</mn><mi>l</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Goiko adierazpenean ordezkatuta, <math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lortzen dugu. Jarraian eskatutako bi balioak idazten ditugu:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/872dceaa4f59dc60.svg\" alt=\"dot(theta)^2 = omega_0^2 / 2 [1 - frac(1, 2 sin^2 theta)] + frac(3 g, 2 l) [sqrt(2) - 2 cos theta] #h(2em) #h(2em) dot(phi) = frac(omega_0^2, 2 sin^2 theta)\" style=\"width:31.687em;height:2.888em\" loading=\"lazy\">"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Beste metodo bat:</strong> Emaitza berdietara iristeko bi kontserbazio-printzipio erabiliko ditugu. Lehenik eta behin, sistema kontserbatzailea da eta, beraz, energia mekaniko osoa kontserbatuko da. Aurreko ataleko kalkuluen arabera, energia mekanikoa honela idazten da:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mfrac><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non energia hau hasierako unean ebaluatu dugun. Sinplifikatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mn>2</mn></mfrac><mo>−</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mrow><mn>2</mn><mi>l</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msqrt><mn>2</mn></msqrt><mo>−</mo><mn>2</mn><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Gainera, ez dago indarrik <math display=\"inline\"><mrow><mi>O</mi><mi>z</mi></mrow></math> ardatzaren norabide perpendikularraren kontra, eta, beraz, ardatz honen norabideko momentu angeluarra kontserbatuko da. Horrek bi gai izango ditu: masa-zentro G-n kontzentratutako barraren masa osoaren momentu angeluarra (masa-zentroaren abiaduraz higitzen dena) eta G-tik igarotzen den biraketa-ardatzaren inguruko biraketari dagokion momentu angeluarra. Lehenengoan, interesatzen zaigun osagaia bakarrik erabiliko dugu. Eragiketak egin ondoren, honekoa da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>J</mi><mrow><mi>G</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>G</mi></msub><mo>×</mo><mi>m</mi><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>G</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>z</mi></msub><mo>=</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>y</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow><mn>4</mn></mfrac><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bigarren gaia lehenik ardatz nagusien sisteman adierazten dugu, eta gero espazioko <math display=\"inline\"><mrow><mi>O</mi><mi>z</mi></mrow></math> ardatzaren arabera kalkulatzen dugu haren osagaia. Honela:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑱</mi><mo>*</mo></msup><mo>=</mo><msub><mi>I</mi><mn>1</mn></msub><msub><mi>ω</mi><mn>1</mn></msub><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><msub><mi>ω</mi><mn>2</mn></msub><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub><mo>+</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> baita. Eta bektore honen <math display=\"inline\"><mrow><mi>O</mi><mi>z</mi></mrow></math> ardatzaren gaineko proiekzioa honakoa da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>J</mi><mi>z</mi><mo>*</mo></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub><mo>+</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow><mn>12</mn></mfrac><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub><mo>⟂</mo><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> eta <math display=\"inline\"><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒌</mi></math> angelu bat osatzen dutelako, <math display=\"inline\"><mrow><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>−</mo><mi>θ</mi></mrow></math> baliokoa. Beraz, momentu angeluarraren <math display=\"inline\"><mrow><mi>O</mi><mi>z</mi></mrow></math> ardatzaren norabideko osagaia honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>J</mi><mi>z</mi></msub><mo>=</mo><msub><mi>J</mi><mrow><mi>G</mi><mi>z</mi></mrow></msub><mo>+</mo><msubsup><mi>J</mi><mi>z</mi><mo>*</mo></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msub><mi>ω</mi><mn>0</mn></msub><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> askatuz aurreko ataleko emaitza lortzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><msub><mi>ω</mi><mn>0</mn></msub><mrow><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta emaitza hau energiaren kontserbazioaren aplikaziotik lortutako adierazpenera eramanez, aurreko bezala, hona iristen gara:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mrow><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mrow><mn>2</mn><mi>l</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msqrt><mn>2</mn></msqrt><mo>−</mo><mn>2</mn><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Izan bedi kono homogeneo bat, erpineko angelu-erdia <math display=\"inline\"><mi>α</mi></math>, garaiera <math display=\"inline\"><mi>h</mi></math> eta masa <math display=\"inline\"><mi>M</mi></math> dituena, plano batean irristatu gabe biratzen duena. Planoa plano horizontalarekiko <math display=\"inline\"><mi>β</mi></math> angeluz makurtzen bada, aurkitu konoaren oszilazio txikien maiztasuna bere oreka-egoera egonkorraren inguruan."
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Ebazpena (egileak ebatzita eta iruzkinduta)",
   "blokeak": [
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
     "html": "<strong>[a.]</strong>"
    },
    {
     "mota": "testua",
     "html": "Kalkulatuko dugu lehenik konoaren energia zinetikoa plano horizontal batean irristatu gabe biratzen duen kasuan. O erpina, egoera hauetan, finkoa da. Irudian agertzen den ardatz nagusien sistema erabiliko dugu. Momentu nagusiak honako hauek dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/891395c66e766b3a.svg\" alt=\"I_1 = I_3 = 3 / 20 M \\[ R^2 + 4 h^2 \\] #h(2em) #h(2em) I_2 = 3 / 10 M R^2\" style=\"width:24.372em;height:2.585em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>h</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>. [Problema garatzen den bitartean, <math display=\"inline\"><msub><mi>I</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>I</mi><mn>3</mn></msub></math> erabiliko ditugu, haien balioak amaieran ordezkatuz]."
    },
    {
     "mota": "testua",
     "html": "Konoaren higidura honelakoa da: konoaren eta planoaren arteko ukitze-sortzailea <math display=\"inline\"><mover><mrow><mi>O</mi><mi>A</mi></mrow><mo accent=\"true\">¯</mo></mover></math> <em>biraketaren ardatz bat da</em>, bere puntu guztiak une bakoitzeko atsoden baitaude. Beraz, konoaren higidura sortzaile horren inguruko biraketa hutsatzat har daiteke, <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> abiadura angeluarraz."
    },
    {
     "mota": "testua",
     "html": "G masa-zentroak higidura zirkularra deskribatzen du biratze-plantoren paraleloa den plano batean, haren gaineko <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> garaieran, <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> erradioarekin, izanik <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>3</mn><mi>h</mi><mi>/</mi><mn>4</mn></mrow></math>. Beraz, haren abiadura bi forma hauetako batean adieraz daiteke: biraketaren ardatz unekoaren inguruan <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> abiadura angeluarraz eta <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> erradioaz biraketa hutsa egiten duen puntu baten abiadura gisa, edo <math display=\"inline\"><mrow><mi>O</mi><mi>z</mi></mrow></math> ardatzaren inguruan <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> abiadura angeluarraz eta <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> erradioaz biraketa egiten duen puntu baten abiadura gisa, masa-zentroaren posizio angeluarra <math display=\"inline\"><mi>θ</mi></math> angelu berak zehazten baitu OA ukitze-sortzailearen planoarekiko <math display=\"inline\"><mrow><mi>O</mi><mi>x</mi></mrow></math> ardatzaren arabera duen posizio angeluarra. Idatz dezagun:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>G</mi></msub><mo>=</mo><mi mathvariant=\"normal\">Ω</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Konoaren energia zinetikoa biraketaren ardatz unekoaren inguruko biraketa hutstzat hartuz, honela idatz dezakegu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mrow><mi>O</mi><mi>A</mi></mrow></msub><mspace width=\"0.167em\"></mspace><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>I</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>ω</mi><mn>3</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <em>Poinsoten teorema</em> erabili dugun adierazpenetako azkena idazteko, izanik <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>,</mo><msub><mi>ω</mi><mn>2</mn></msub><mo>,</mo><msub><mi>ω</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Iruditik abiatuta, erraza da hau zehaztea:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/aa1957418c0e037b.svg\" alt=\"omega_1 = 0 #h(2em) omega_2 = Omega cos alpha #h(2em) omega_3 = - Omega sin alpha\" style=\"width:21.590em;height:1.329em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Beraz, balio hauek energiaren zinetikoaren aurreko adierazpenean ordezkatuz, lortutako <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> eta <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>-ren arteko erlazioarekin batera, zailtasunik gabe iristen gara honako emaitza honetara, konoaren <math display=\"inline\"><mi>h</mi></math> garaieraren eta erpineko <math display=\"inline\"><mi>α</mi></math> angelu-erdiaren funtzioan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>3</mn><mn>40</mn></mfrac><mi>M</mi><msup><mi>h</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mn>5</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>[b.]</strong>"
    },
    {
     "mota": "testua",
     "html": "Suposa dezagun orain biratze-planoa <math display=\"inline\"><mi>β</mi></math> angeluz makurtzen dugula horizontalarekiko. Espazioko <math display=\"inline\"><mrow><mi>O</mi><mi>z</mi></mrow></math> ardatzaren norabide gisa erabiliko dugu erpina dagoen puntutik planoarekiko perpendikularki den ardatza, <math display=\"inline\"><mrow><mi>O</mi><mi>x</mi></mrow></math> ardatz gisa plano inklinatuaren eta plano horizontalaren arteko elkarketa-ertza eta ertz horren alderako norabidea, eta <math display=\"inline\"><mrow><mi>O</mi><mi>y</mi></mrow></math> ardatz gisa ertzaren paraleloa konoaren O erpinetik pasatzen dena. Evidentea denez, konoaren erpina geldi mantentzen da higiduran zehar. <math display=\"inline\"><mi>θ</mi></math> angelua aurreko atalean bezala neurtzen badugu, energia zinetikoa ardatz hauetan dagoeneko lortutakoaren adierazpena da."
    },
    {
     "mota": "testua",
     "html": "[Irudia: plano inklinatuaren gainean eutsita dagoen konoaren bi eskema; V, z, x, y ardatzak; <math display=\"inline\"><mi>α</mi></math>, <math display=\"inline\"><mi>β</mi></math>, <math display=\"inline\"><mi>θ</mi></math> angeluak; O, G, G<math display=\"inline\"><msub><mrow></mrow><mn>0</mn></msub></math>, A puntuak; <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> abiadura angeluarra; eta <math display=\"inline\"><mrow><msub><mi>z</mi><mi>G</mi></msub><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mi>G</mi></msub><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> erlazioak]"
    },
    {
     "mota": "testua",
     "html": "Energia potentziala, bestalde, konoaren G masa-zentroaren garaierak zehaztuko du, erreferentziazko plano horizontal batekiko. Horrek O erpinitik pasatzen bada, aipatutako garaiera <math display=\"inline\"><mi>α</mi></math>, <math display=\"inline\"><mi>β</mi></math> eta <math display=\"inline\"><mi>θ</mi></math> angelu hiruren funtzioa izango da. Irudian masa-zentroaren ibilbidea agertzen da, <math display=\"inline\"><msub><mi>G</mi><mn>0</mn></msub></math> oreka-posiziotik ukitze-sortzailea <math display=\"inline\"><mi>θ</mi></math> angeluz desbideratu den uneko G punturaino, eta haren proiekzioa <math display=\"inline\"><mrow><mi>O</mi><mi>z</mi></mrow></math> ardatzaren arabera plano inklinatuaren gainean (kurba puntukatua). OV norabidea plano horizontalarekiko perpendikularra da eta <math display=\"inline\"><mi>β</mi></math> angelua osatuko du <math display=\"inline\"><mrow><mi>O</mi><mi>z</mi></mrow></math> ardatzarekin. A puntua konoaren oinarrizko puntua da, plano okituarekin kontaktuan dagoena, eta, beraz, biraketaren ardatz unekoaren puntuetako bat da, zeinaren inguruan konoak <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> abiadura angeluarraz biraketa bat egiten duen uneoro. Ez da zaila frogatzea, bi irudien laguntzaz, bilatzen dugun masa-zentroaren garai eta honi lotutako energia potentziala honela adierazten direla:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>z</mi><mi>G</mi></msub><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>O</mi><mi>V</mi></mrow></msub><mo>=</mo><msub><mi>x</mi><mi>G</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup><mo>+</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>z</mi><mi>G</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>=</mo><mi>−</mi><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>M</mi><mi>g</mi><mspace width=\"0.167em\"></mspace><msub><mi>z</mi><mi>G</mi></msub><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>O</mi><mi>V</mi></mrow></msub><mo>=</mo><mi>−</mi><mi>M</mi><mi>g</mi><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Funtzio lagrangearra, beraz, honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>3</mn><mn>40</mn></mfrac><mi>M</mi><msup><mi>h</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mn>5</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>M</mi><mi>g</mi><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi>a</mi></math> jada bere balioagatik ordezkatu dugun <math display=\"inline\"><mi>h</mi></math>-ren funtzioan. Funtzio hau aldagai orokortu bakarraren menpekoa da, <math display=\"inline\"><mi>θ</mi></math>, eta hari lotutako higiduraren ekuazioa ohiko eran lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>3</mn><mn>20</mn></mfrac><mi>M</mi><msup><mi>h</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mn>5</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>M</mi><mi>g</mi><mi>h</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">}</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi>A</mi></math> konstantea honela definitu dugun:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mfrac><mrow><mn>5</mn><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mn>5</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></mfrac><mo>&gt;</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>A</mi></math> konstante hau positiboa da, bai <math display=\"inline\"><mi>α</mi></math> bai <math display=\"inline\"><mi>β</mi></math> <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> baino txikiagoko balioekin suposatzen baitira. Ondoriozko higiduraren ekuazioa, oszilazio txikien hurbilpenean, beraz, <math display=\"inline\"><msqrt><mi>A</mi></msqrt></math> palazioko oszilatzaile harmonikoaren ekuazioaren berdina den ekuazio bat da."
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Masarik gabeko bi hagaxka bere zentroan soldatuta daude, α angelu bat osatuz. Haietako batek, 2a luzerakoa, m masa puntualak ditu bi muturretan, eta besteak, biraketa-ardatzaren eginkizuna duenak, l luzera du eta marruskadurarik gabeko kojinete biren gainean dago eutsita. Grabitaziorik ez dagoela, kalkulatu euskarrietako erreakzioak multzoa ω abiadura angeluar konstantez birarazten denean. Zein izan behar du α angeluak euskarrietan erreakziorik ez izateko?"
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Ebazpena (egileak ebatzita eta iruzkinduta)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "[Irudia (ebazpenaren buruan): AB ardatz horizontalarekin, A euskarria ezkerrean eta B euskarria eskuinean. Erdian, ⊗ ikurrekin eta «1» etiketarekin markatutako puntua, bi hagaxkak gurutzatzen diren lekuan. Masak dituen hagaxkak α angelua osatzen du AB ardatzarekin; mutur bakoitzean, zentrotik a distantziara, m masa puntual bat. Ardatz nagusiak etiketatuta: «1» (zentroan, planetik ateratzen dena), «2» (gezia gora- ezkerrera) eta «3» (gezia gora-eskuinera, goiko m masa pasaagatik doan hagaxkaren norabidean). ω abiadura angeluarra AB-ren inguruko gezi zirkularrarekin adierazten da. A euskarrian −F indarrak eragiten du (gorantz) eta B euskarrian F indarrak (beherantz). Euskarrien arteko bereizketa, l, akotazio eten batez markatzen da beheko aldean.]"
    },
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "Hartu dezagun solidoari lotutako erreferentzia-sistema gisa masa-zentroan jatorria duen 1, 2 eta 3 ardatz nagusiek osatutakoa. Evidentea denez, inertzia-momentu nagusiak honako hauek dira: I₁ = I₂ = 2ma², I₃ = 0. Abiadura angeluarraren bektorea AB ardatzaren norabidekoa dela suposatzen badugu, haren osagaiak ardatz nagusien sisteman honako hauek izango dira: ω(0, −ω sin α, ω cos α). Momentu angeluarraren adierazpena, beraz, honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <strong>I</strong> inertzia-tentsorea erabili dugun. Beraz, solidoaren sisteman, momentu angeluarra 2 ardatzaren norabideko bektore konstantea da (hau da, masak eta biraketa-ardatzak osatutako planoan). Higidura hau mantentzeko behar den indar-momentua honako adierazpenetik lor daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mtext mathvariant=\"normal\">esp</mtext></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mtext mathvariant=\"normal\">cuerpo</mtext></msub><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta hori ez da Coriolisen teoremaren adierazpena besterik, espazioan finko dagoen sistema bateko eta aurrekoarekiko ω abiadura angeluarraz biratzen duen beste bateko bektore baten denbora-deribatuak lotzen dizkiguena. Gure kasuan, eta aipatu berri dugun bezala, <strong>L</strong> konstantea da solidoaren sisteman, eta, beraz, haren denbora-deribatua sistema honen arabera nulua da. Beraz, indarren momentuak honako balioa hartuko du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>3</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau da, 1 ardatz nagusiaren norabidea duen bektorea da, ardatzaren eta masen planoarekiko perpendikularra. Bestalde, grabitaziorik ez dagoela eta masa-zentroa biraketa-ardatzean dagoela kontuan hartuta, biraketa- ardatzaren gainean eragiten duten indar bakarrak A eta B euskarrietan sortzen dira; gainera, erraz frogatzen da berdinak direla, aurkako norabidekoak, biraketa-ardatzarekiko perpendikularrak eta ardatza–masak planoan daudela (hau da, N = Fl momentuko indar-bikote bat da). Modulu bakoitzean, bikote hau kalkulatzen ari garenaren berdina da:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/5851da28b276e81d.svg\" alt=\"N = F l = 2 m a^2 omega^2 sin alpha cos alpha #h(2em) arrow.r #h(2em) F = frac(2 m a^2 omega^2 sin alpha cos alpha, l)\" style=\"width:32.495em;height:2.760em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Euskarrietako erreakzio hauek kasu biotan izango dira nuluak: α = 0 denerako eta α = π/2 denerako."
    },
    {
     "mota": "testua",
     "html": "Problema ebazteko beste bide bat solido zurrunaren Eulerren ekuazioak erabiltzea da, ardatz nagusien sistema batean adierazita honela idazten direnak: Iᵢ ω̇ᵢ + εᵢⱼₖ ωⱼ Lₖ = Nᵢ, i, j, k = 1..3, non εᵢⱼₖ Levi- Civitaren tentsorea den eta Lₖ = Iₖ ωₖ (k-n batuketarik ez)."
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "99Jun04. Solido zurrun bat <math display=\"inline\"><mi>M</mi></math> masako eta <math display=\"inline\"><mi>a</mi></math> aldeko orrombo-formako xaflaz (angelu zorrotza 60°-koa da) eta aurkako bi erpinetan, B eta D, itsatsita dauden <math display=\"inline\"><mi>m</mi></math> masa puntual bitz osatuta dago. Sistema <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez biratzen da EF ardatzaren inguruan. Kalkulatu: a) sistemaren energia zinetikoa; b) abiadura angeluarra konstante mantentzeko beharrezkoa den indar-bikotearen momentua, eta c) momentu angeluarra eta abiadura angeluarra paraleloak izan daitezen behar den <math display=\"inline\"><mrow><mi>m</mi><mi>/</mi><mi>M</mi></mrow></math> erlazioa."
    },
    {
     "mota": "testua",
     "html": "[Irudia: ABCD romboa marraztuta, B (goiko ezkerreko erpina), C (goiko eskuineko erpina), A (beheko ezkerreko erpina) eta D (beheko eskuineko erpina) izanda. <math display=\"inline\"><mi>m</mi></math> masa puntualak B eta D erpinetan daude itsatsita. <math display=\"inline\"><mi>M</mi></math> masako xafak romboa hartzen du. O zentroa diagonalen ebakiduran. EF ardatza horizontala da, O-tik pasatzen da (E ezkerrean, F eskuinean) eta romboaren oinarriaren (AD/BC aldea) paraleloa da; EZ dator bat AC diagonalarekin (hau da <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub></math> ardatz nagusia, EFren gainean 30°-ra makurtua). Bertsoreak marraztuta: <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub></math> AC ardatzaren norabidean (C-rantz, gora-eskuinera), <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub></math> DB ardatzaren norabidean (B-rantz, gora-ezkerrera), <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>3</mn></msub></math> planoarekiko perpendikularra O-n (behatzailearengana). Diagonalen arteko 90° angelua markatzen da O-n. A erpinean AC diagonalak angelu zorrotza bitan banatzen du, 30° eta 30° bi angelu markatuz. <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub></math> bektorea O-tik ateratzen da gora-eskuinerantz. F-n <math display=\"inline\"><mi>ω</mi></math> abiadura angeluarrez biraketa adierazten da.]"
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Ebazpena (egileak ebatzita eta iruzkinduta)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "R. a. Simetriagatik, sistemaren inertzia-ardatz nagusiak eta hiei lotutako bertsoreak honako hauek dira: <math display=\"inline\"><mover><mrow><mi>A</mi><mi>C</mi></mrow><mo accent=\"true\">¯</mo></mover></math> ardatza (<math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub></math>), <math display=\"inline\"><mover><mrow><mi>D</mi><mi>B</mi></mrow><mo accent=\"true\">¯</mo></mover></math> ardatza (<math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub></math>) eta bien artean perpendikularra den hirugarren bat, irudian paperaren planoarekiko perpendikularra (hartzen ari den unean romboaren planoaren berdina dela suposatuz) eta gure alderanzkoa (<math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>3</mn></msub></math>). Sistemaren <math display=\"inline\"><mi>T</mi></math> energia zinetikoa forma sinpleenaren bidez adieraz dezakegu: <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>1</mn></msub><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>I</mi><mn>3</mn></msub><msubsup><mi>ω</mi><mn>3</mn><mn>2</mn></msubsup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>e</mi></msub><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>, non azpiindizedun <math display=\"inline\"><msub><mi>I</mi><mi>i</mi></msub></math> eta <math display=\"inline\"><msub><mi>ω</mi><mi>i</mi></msub></math> kantitateek, hurrenez hurren, inertzia-momentu nagusiak eta abiadura angeluarraren osagaiak adierazten baitituzte ardatz nagusietan, eta <math display=\"inline\"><msub><mi>I</mi><mi>e</mi></msub></math> romboaren inertzia-momentua baita <math display=\"inline\"><mover><mrow><mi>E</mi><mi>F</mi></mrow><mo accent=\"true\">¯</mo></mover></math> ardatzarekiko."
    },
    {
     "mota": "testua",
     "html": "Kasu honetan, erraz frogatzen da rombo (edo romboide) baten inertzia-momentua bere oinarriaren paraleloa eta zentrotik pasatzen den <math display=\"inline\"><mover><mrow><mi>E</mi><mi>F</mi></mrow><mo accent=\"true\">¯</mo></mover></math> bezalako ardatz baten inguruan oinarri berdina eta alde okertuen oinarriarekiko perpendikularraren gaineko proiekzioaren balio berdineko garaiera duen laukizuzen batenaren berdina dela. Kasu honetan, baliokide laukizuzenaren garaiera honakoa izango litzateke: <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>60</mn><msup><mi></mi><mo>∘</mo></msup><mo>=</mo><msqrt><mn>3</mn></msqrt><mspace width=\"0.167em\"></mspace><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math>. Laukizuzen baten ardatz horrekiko inertzia-momentua ezaguna denez —<math display=\"inline\"><mrow><msub><mi>I</mi><mrow><mi>e</mi><mo>,</mo><mi>M</mi></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>M</mi><msup><mi>h</mi><mn>2</mn></msup></mrow></math> baliokoa—, gure kasuan inertzia-momentu honek <math display=\"inline\"><mrow><msub><mi>I</mi><mrow><mi>e</mi><mo>,</mo><mi>M</mi></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>16</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math> balio izango du. Bestalde, ardatzetik <math display=\"inline\"><mrow><msqrt><mn>3</mn></msqrt><mspace width=\"0.167em\"></mspace><mi>a</mi><mi>/</mi><mn>4</mn></mrow></math> distantziara dauden bi <math display=\"inline\"><mi>m</mi></math> masen inertzia-momentuak <math display=\"inline\"><mrow><msub><mi>I</mi><mrow><mi>e</mi><mo>,</mo><mi>m</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>⋅</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><msqrt><mn>3</mn></msqrt><mspace width=\"0.167em\"></mspace><mi>a</mi><mi>/</mi><mn>4</mn><msup><mo stretchy=\"false\" form=\"postfix\">]</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>3</mn><mn>8</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math> balio izango du. Beraz, inertzia-momentu osoak honakoa balio izango du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mi>e</mi></msub><mo>=</mo><msub><mi>I</mi><mrow><mi>e</mi><mo>,</mo><mi>M</mi></mrow></msub><mo>+</mo><msub><mi>I</mi><mrow><mi>e</mi><mo>,</mo><mi>m</mi></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>16</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>M</mi><mo>+</mo><mn>6</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><msup><mi>a</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beste prozedurak sistemaren inertzia-momentu nagusien kalkulua behar du. Romboaren triangeluetan deskonposizioa kontuan hartuta, ez da zaila honako adierazpen hauetara iristea:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo>⋅</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mfrac><mi>M</mi><mn>2</mn></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo>⋅</mo><mi>m</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>24</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>M</mi><mo>+</mo><mn>12</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><msup><mi>a</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mo>⋅</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mfrac><mi>M</mi><mn>2</mn></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msqrt><mn>3</mn></msqrt><mspace width=\"0.167em\"></mspace><mi>a</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>8</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>M</mi><mo>+</mo><mn>3</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><msup><mi>a</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Azken adierazpena baliozkoa da plano-formako irudia delako. Gainera, inertzia-ardatz nagusietan <math display=\"inline\"><mi>ω</mi></math> abiadura angeluarrak, <math display=\"inline\"><mover><mrow><mi>E</mi><mi>F</mi></mrow><mo accent=\"true\">¯</mo></mover></math> norabidean zuzendua, <math display=\"inline\"><mrow><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mi>ω</mi><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ω</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> osagaiak ditu, eta, beraz, bai prozedura baten bidez bai bestearen bidez, sistemaren energia zinetikoa, eragiketa eta sinplifikazio egokiak egin ondoren, honakoa da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>32</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>M</mi><mo>+</mo><mn>6</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<math display=\"inline\"><mi>ω</mi></math> abiadura angeluarraren eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub></math> momentu angeluarraren bektoreak, oro har, ez dira paraleloak, biraketa-ardatzaren norabidea ardatz nagusi batearenarekin bat etor ezean. Honek, hurrengo atalean ikusiko dugun bezala, <math display=\"inline\"><mi>M</mi></math> eta <math display=\"inline\"><mi>m</mi></math> masen arteko erlazioaren menpe egongo da. Nolanahi ere, sistemaren kanpoko behatzaile inertzial batetik begiratuta, <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub></math> bektorea biratzen duen sistemari solidarioki lotuta biratzen egongo da, <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar berarekin, eta, beraz, biraketaren dinamika gobernatzen duten ekuazioak kontuan hartuta, higidura hori mantentzeko beharrezkoa den <math display=\"inline\"><mi>τ</mi></math> indar-momentu ez-nulu bat egongo da. Bi erreferentzia- sistemetatik (kanpoko inertziala eta sistemaren abiadura angeluar bera duen biratzailea) egindako neurriak lotzeko Coriolisen teorema erabiliz, honela idatziko dugu:"
     ],
     "etiketak": [
      "2."
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>τ</mi><mo>=</mo><mfrac><mrow><mi>d</mi><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>I</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>N</mi><mi>I</mi></mrow></msub><mo>+</mo><mi>ω</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub><mo>=</mo><mi>ω</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>ω</mi><mn>2</mn></msub><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>1</mn></msub><msub><mi>ω</mi><mn>1</mn></msub><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><msub><mi>ω</mi><mn>2</mn></msub><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>48</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>M</mi><mo>+</mo><mn>6</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>3</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non &quot;I&quot; eta &quot;NI&quot; azpiindizeak erabili ditugun, hurrenez hurren, sistema inertziala eta ez-inertziala zehazteko. Gainera, <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub></math> bektorea NIren aldeko finkoa denez, haren denbora-deribatua nulua da. Bestalde, <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> den faktua erabili dugu abiadura angeluarra eta momentu angeluarra forma laburragoan idazteko. <math display=\"inline\"><mi>τ</mi></math>-ren emaitzak adierazten du, nahiz eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub></math> romboaren planoan dagoen bektorea izan (<math display=\"inline\"><mrow><msub><mi>ω</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> baita), indar-momentua betirako plano horrekiko perpendikularra dela."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Aurretik aipatu dugun bezala, oro har <math display=\"inline\"><mi>ω</mi></math> eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub></math> ez dira paraleloak izango. Paraleloak izan zitezen, <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub></math> bertsoreen koefizienteak proportzionalak izan beharko lirateke, eta horrek zuzenean <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math> betetzearen baldintzara garamatza:"
     ],
     "etiketak": [
      "3."
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>M</mi><mo>=</mo><mn>6</mn><mi>m</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Erlazio hau betetzen bada, sistema ardatz nagusi baten inguruan biratzen da eta, ondorioz, higidura mantentzeko behar den momentua deuseztatuko litzateke: <math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><mn>0</mn></mrow></math>. Bestelako indarrik ez badago, sistema behin betiko biratuko litzateke <math display=\"inline\"><mi>ω</mi></math> abiadura horrekin."
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": ""
    },
    {
     "mota": "testua",
     "html": "<strong>99Set04.</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>m</mi></math> masakoa eta <math display=\"inline\"><mi>R</mi></math> erradiokoa den esfera solido homogeneo bat irristatu gabe biratzen da <math display=\"inline\"><mi>d</mi></math> distantziara bereizita dauden bi errailen artean <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstanteaz."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Zein da masa-zentroaren abiaduraren eta abiadura angeluarraren arteko erlazioa?"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Aurreko esfera plano inklinatu batetik jaisten da, berriro ere irristatu gabe. Atseden-etatik abiatzen den hasierako garaiera <math display=\"inline\"><mi>h</mi></math> da. Frogatu esferaren masa-zentroaren abiadura <math display=\"inline\"><msqrt><mrow><mn>10</mn><mi>g</mi><mi>h</mi><mi>/</mi><mn>7</mn></mrow></msqrt></math> dela behera iristen denean."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Plano inklinatua errailez ordezkatuz, zein izango litzateke esferaren masa-zentroaren abiadura azkena?"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Zer gertatzen da a) eta c) ataletako kasuetan <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>0</mn></mrow></math> denean? Eta <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>2</mn><mi>R</mi></mrow></math>-rentzat? Zergatik?"
     ]
    },
    {
     "mota": "testua",
     "html": "<em>[Irudia: errailen gaineko esferaren irudikapen eskematikoa hiru\nikuspegitan — albokoa (R, C, P, V_CM eta ukitze-zuzenarekin),\ngoikoa (errailen arteko d bereizketa erakutsiz) eta aurrekoa (C, R eta\nd distantziara bereizita dauden P₁ eta P₂ ukitze-puntuekin, P erdiko\npuntuan izanda).]</em>"
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Ebazpena (egileak ebatzita eta iruzkinduta)",
   "blokeak": [
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
     "html": "a) Irudian esfera errailen gainean &quot;birakaari&quot; (irristatzen ez baitu) buruzko irudikapen eskematiko bat ikusten da, hiru posizio bereizgarrietatik: alboko ikuspegia, goikoa eta aurrekoa. Un jakin batean esferaren eta errailen arteko bi ukitze-puntuak lotzen dituen zuzenari <math display=\"inline\"><mover><mrow><msub><mi>P</mi><mn>1</mn></msub><msub><mi>P</mi><mn>2</mn></msub></mrow><mo accent=\"true\">¯</mo></mover></math> deitzen badiegu, zuzen hori solido zurrun horren biraketaren ardatz bihurtzen da. Teoriatik badakigu biraketaren ardatz unekoaren edozein puntutan atsedenean dagoela uneoro. Atseden horretako bi puntu dira <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math>. Solido zurrunaren abiadura- eremuaren adierazpena erabiliz, honela idatziko dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>C</mi></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><msub><mi>P</mi><mn>1</mn></msub></msub><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mover><mrow><msub><mi>P</mi><mn>1</mn></msub><mi>C</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>ω</mi></math> bektorea paperaren planoarekiko perpendikularra da <math display=\"inline\"><mi>P</mi></math> puntuan lehen irudietan (eta barrurantz), hau da, <math display=\"inline\"><mover><mrow><msub><mi>P</mi><mn>1</mn></msub><msub><mi>P</mi><mn>2</mn></msub></mrow><mo accent=\"true\">¯</mo></mover></math> zuzenaren norabidea du (eta bere noranzkoa hurrenkeraren antzekoa dela suposatuko dugu). Bestalde, <math display=\"inline\"><mover><mrow><msub><mi>P</mi><mn>1</mn></msub><mi>C</mi></mrow><mo accent=\"true\">→</mo></mover></math> bektorea (hirugarren irudian ere paperaren planoan) angelu bat osatzen du <math display=\"inline\"><mi>ω</mi></math>-rekin, zeinaren sinua honakoa den: <img class=\"formula\" src=\"media/formulak/28a882d41289e96d.svg\" alt=\"sin alpha = overline(P C) \\/ R = sqrt(R^2 - d^2 \\/ 4) thin #scale(x: 120%, y: 120%)[\\/] thin R\" style=\"width:17.150em;height:1.001em\" loading=\"lazy\">."
    },
    {
     "mota": "testua",
     "html": "Aipatu dugun bezala, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><msub><mi>P</mi><mn>1</mn></msub></msub><mo>=</mo><mn>0</mn></mrow></math>, eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mover><mrow><msub><mi>P</mi><mn>1</mn></msub><mi>C</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math> biderkadura bektorialak hirugarren irudiko paperaren planoarekiko norabide perpendikularra izango du, kanporantz. Haren modulua —interesatzen zaiguna— honela idatziko da, beraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>C</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mover><mrow><msub><mi>P</mi><mn>1</mn></msub><mi>C</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>ω</mi><mo>⋅</mo><mi>R</mi><mo>⋅</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mi>ω</mi><msqrt><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><msup><mi>d</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>[Irudia: plano inklinatua esfera birakaariarekin; V_CM eta h\ngarai adierazten dira.]</em>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Hasierako garaiera <math display=\"inline\"><mi>h</mi></math> dela esaten dugunean, adierazi nahi dugu, egitatean, planoaren amaieran masa-zentroaren jaitsiera osoa benetan <math display=\"inline\"><mi>h</mi></math> dela (suposatuko dugu plano inklinatuak norabide bereko luzapen bat duela, eta ez horizontala). Atseden-etatik abiatzen bada, kontuan hartuko dugu planoa zeharkatu ondoren masa-zentroaren azken abiadura <math display=\"inline\"><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub></math> dela. Sistemaren gainean ez dago indar disipatziborik eragiten eta energia mekanikoa kontserbatzen da. Idatz dezagun hau bi muturreko puntuei aplikatuta:"
     ],
     "etiketak": [
      "2."
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mi>g</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>C</mi></msub><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hasieran energia guztia potentziala baita eta amaieran soilik zinetikoa baita, bi gai izango baititu: masa guztia masa-zentroan kontzentratuta balego eta haren abiaduraz higitzen ari balitz izango lukeen energia zinetikoa, eta masa-zentro horretatik pasatzen den ardatz baten inguruko biraketako energia zinetikoa (alternatiba bat da higidura biraketaren ardatz unekoaren inguruko biraketa hutstzat hartzea, eta, orduan, bigarren kidea soilik <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>P</mi></msub><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> litzateke)."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>I</mi><mi>C</mi></msub><mo>=</mo><mfrac><mn>2</mn><mn>5</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> dela eta atal honetan <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>0</mn></mrow></math> balitz bezala dela kontuan hartuta, a) ataleko <math display=\"inline\"><mi>ω</mi></math> eta <math display=\"inline\"><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub></math>-ren arteko erlazioa erabiliz, hona iritsiko gara:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mi>g</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mn>2</mn><mn>5</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub><mi>R</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "handik erraza da <math display=\"inline\"><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub></math> askatzea hona iristeko:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub><mo>=</mo><msqrt><mfrac><mrow><mn>10</mn><mi>g</mi><mi>h</mi></mrow><mn>7</mn></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "frogatu nahi genuen bezala."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>d</mi><mo>≠</mo><mn>0</mn></mrow></math> bada, energia mekanikoaren kontserbazio-printzipioa aplikatzen jarraitzen da, baina orain <math display=\"inline\"><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub></math>-ren adierazpen osoa erabiliz, <math display=\"inline\"><mi>ω</mi></math> eta <math display=\"inline\"><mi>d</mi></math>-ren funtzioan. Beraz:"
     ],
     "etiketak": [
      "3."
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mi>g</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mn>2</mn><mn>5</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub><msqrt><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><msup><mi>d</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn></mrow></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Berriro ere, sinplifikatu ondoren, zailtasunik gabe irits gaitezke adierazpen honetara:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub><mo>=</mo><msqrt><mfrac><mrow><mn>10</mn><mi>g</mi><mi>h</mi></mrow><mrow><mn>5</mn><mo>+</mo><mfrac><mn>2</mn><mrow><mn>1</mn><mo>−</mo><msup><mi>d</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>R</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>0</mn></mrow></math> denerako, a) kasuan soilik <math display=\"inline\"><mrow><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub><mo>=</mo><mi>ω</mi><mi>R</mi></mrow></math> da, eta c) atala b) arekin bat dator. <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>2</mn><mi>R</mi></mrow></math> bada, ordea, errailek ez dute esfera eutsiko jada eta <math display=\"inline\"><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub></math> abiadura nulua izango da, abiadura angeluarra nulua izan beharrik gabe (a) kasua), eta c) kasuak ez du zentzurik."
     ],
     "etiketak": [
      "4."
     ]
    }
   ]
  }
 ]
};
