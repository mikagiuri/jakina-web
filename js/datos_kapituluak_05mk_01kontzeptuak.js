/* JAKINA · kapitulua «B9.1 - Oinarrizko kontzeptuak» (05mk_01kontzeptuak), desde edicion2/kapituluak/05mk_01kontzeptuak/05mk_01kontzeptuak.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["05mk_01kontzeptuak"] = {
 "gakoa": "05mk_01kontzeptuak",
 "titulua": "JAKINA - B9 - Mekanika klasikoa - 1/10",
 "azala": "B9.1 - Oinarrizko kontzeptuak",
 "azpititulua": "III. aroa - L2",
 "iturburua": "kapituluak/05mk_01kontzeptuak/05mk_01kontzeptuak.typ",
 "sarrera": [
  {
   "mota": "atala",
   "izenburua": "Mekanika klasikoa",
   "deskribapena": [
    {
     "mota": "testua",
     "html": "Fisikaren bigarren pasea: Newtonen legeetatik abiatuta, erreferentzia-sistema erlatiboetara, erlatibitate berezira, indar zentraletara eta solido zurrunera; eta gero mekanika analitikoa —Lagrange eta Hamilton—, fisika osoa printzipio bakar batetik berreraikitzen duena. Hamilton-en formalismoa da fisika kuantikoaren atea: horregatik dago blokea IV. aroaren atarian."
    }
   ],
   "edukia": [
    "Oinarrizko kontzeptuak eta higidura erlatiboa",
    "Erlatibitate berezia",
    "Indar zentralak eta solido zurruna",
    "Mekanika analitikoa: Lagrange eta Hamilton",
    "Oszilazio txikiak eta kaos determinista",
    "Uhinak eta ingurune jarraituak"
   ]
  },
  {
   "mota": "modulua",
   "kodea": "M25",
   "izenburua": "Mekanika klasikoa — I. zatia",
   "maila": "L2"
  },
  {
   "mota": "helburuak",
   "elementuak": [
    "Newtonen legeak erreferentzia-sistema orokorretan aplikatu.",
    "Erlatibitate bereziaren oinarriak menderatu.",
    "Lagrange-ren eta Hamilton-en formalismoak erabili.",
    "Oszilazio normalak eta sistema kaotikoak aztertu."
   ]
  },
  {
   "mota": "aurrebaldintzak",
   "elementuak": [
    "M20 — Ekuazio diferentzialak; M15 — Kalkulu bektoriala; M11 — Diagonalizazioa (modu normalak); M16 — Fisika orokorra (lehen pasea)"
   ]
  },
  {
   "mota": "iturria",
   "proiektua": "fullmekanika",
   "xehetasuna": "1.–10. kapituluak (Aguirregabiria)",
   "hizkuntza": "eu"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Oinarrizko kontzeptuak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Lehen gai honetan mekanikari buruzko oinarrizko kontzeptu batzuk berrikusten dira gehienbat. Fisika orokorrari buruzko ikastaroetan ikasten den mekanika eta kalkulu bektoriala ondo menperatzen direla emango dugu. Zure kasuan egia ez bada, irakurle hori, jo ezazu lehen mailako testu batera. Arrazoi beragatik, emaitza batzuen frogapen ezagunak ez dira hemen berriro egingo."
    },
    {
     "mota": "testua",
     "html": "Gai honetan erabiliko dugun formalismoa, batzuetan <strong>mekanika bektoriala</strong> edo <strong>mekanika newtondarra</strong> deitzen dena, ikuspuntu batetik mekanika klasikoan dagoen zaharrena da Newtonekin hasiz. 6. gaian ikusiko dugun bezala, badaude mekanika klasikoa egiteko beste forma batzuk, kalkuluak egiteko eta fisika modernoan erabiltzen diren kontzeptu batzuk ulertzeko askoz ere erabilgarriagoak direnak."
    },
    {
     "mota": "testua",
     "html": "Hasteko, zinematika aztertuko dugu, geroago mekanikaren legeak eta printzipio nagusiak gogoratzeko. Energia-diagramen erabilgarritasuna oreka eta higiduraren propietate kualitatiboak aztertzean ikusi ondoren, partikula-sistemen dinamikari ekingo diogu. Amaitzeko, talkak aztertuko dira."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Partikula puntualaren zinematika",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Partikula baten higidura deskribatzen duen zinematika (eta, geroago, haren zergatia azaltzen duen dinamika) egiteko <strong>erreferentzia-sistema</strong> bat aukeratuko dugu. Kontzeptu honen osagaiak —triedro kartesiarra, erregela eta erlojua— erabiliko ditugu magnitude zinematikoak banan banan definitzeko."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Geometria euklidearra"
    },
    {
     "mota": "testua",
     "html": "Mekanika klasikoan zinematika egitean, geometria erabiltzen da abiapuntutzat: geometria euklidearra hain zuzen, bestelako geometrien posibilitatea bera ere XIX. mendean bakarrik kontsideratu baitzen. Newtonen ikuspuntutik mekanika klasikoaren espazioa absolutua da, naturan gertatzen diren fenomeno guztien jokaleku aldaezina, <em>a priori</em> emandakoa."
    },
    {
     "mota": "testua",
     "html": "Geometria egiteko, eta erreferentzia-sistema osatzen hasteko, triedro kartesiar zuzen bat (hala nola 1.2 irudiko <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi><mi>Z</mi></mrow></math> delakoa) aukeratuko dugu. Ardatz kartesiarren norabidea eta noranzkoa adierazten dituzten bektore unitarioak <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒊</mi></math>, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒋</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒌</mi></math>  dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝒊</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝒊</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Posizioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>P</mi></math> puntu baten —edo partikula puntual baten— posizioa adierazteko <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>≡</mo><mover><mrow><mi>O</mi><mi>P</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>  <strong>posizio-bektoreaz</strong> baliatuko gara. Posizio-bektorearen <strong>osagaiak</strong>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>z</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo></mrow></math> &lt;eq:osagaiak&gt;"
    },
    {
     "mota": "testua",
     "html": "hau da, posizio-bektoreak ardatz kartesiarren norabidean dituen proiekzioak, puntuaren <strong>koordenatu kartesiarrak</strong>  dira: <math display=\"inline\"><mi>x</mi></math>  <strong>abzisa</strong>, <math display=\"inline\"><mi>y</mi></math>  <strong>ordenatua</strong> eta <math display=\"inline\"><mi>z</mi></math>  <strong>garaiera</strong>."
    },
    {
     "mota": "testua",
     "html": "Honela garatzen da posizio-bektorea, bektore unitarioek osaturiko bektore-oinarrian:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>y</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi>z</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Posizio-bektorearen osagaiak erreferentzia-sistema batean.",
     "src": "media/irudiak/dbf1c041f853f2da.svg",
     "zabalera": 245
    },
    {
     "mota": "testua",
     "html": "Jakina, zinematikan, geometrian ez bezala, posizio-bektoreak eta osagaiak magnitudeak dira eta, zenbaki errealez gain, unitateak behar dira haiek neurtzeko. Sistema Internazionalean luzera-unitatea <strong>metroa</strong> da."
    },
    {
     "mota": "azpititulua",
     "testua": "Koordenatu polar lauak"
    },
    {
     "mota": "testua",
     "html": "Adibide moduan, demagun <math display=\"inline\"><mi>P</mi></math> puntua <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math> plano kartesiarrean dagoela, hau da, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math> dugula. Kasu horretan, posizioa adierazteko <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>y</mi></math> koordenatu kartesiarrak erabil daitezke, baina baita hurrengo ekuazioek emandako polarrak ere:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Posizioa zehazteko erabil daitezkeen magnitude ez-kartesiarrak <strong>koordenatu orokortuak</strong> deituko dira eta, aldagai-aldaketa ematen dutenak, <strong>transformazio-ekuazioak</strong>. Haien alderantzizkoak hurrengoak dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>φ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mfrac><mi>y</mi><mi>x</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math> planoko puntu baten koordenatu polarrak.",
     "src": "media/irudiak/b44e96ff744a5863.svg",
     "zabalera": 205
    },
    {
     "mota": "testua",
     "html": "Honela adierazten da posizio-bektorea koordenatu kartesiarretan eta polarretan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>y</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>=</mo><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Baina batzuetan komenigarriagoak dira koordenatu polarrek definituriko <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></math> eta <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover></math> bektore unitarioak:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>≡</mo><mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mi>r</mi></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>≡</mo><mfrac><mrow><mi>d</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></mrow><mrow><mi>d</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu puntu bakoitzean <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> delakoa oinarri ortonormal zuzena dela: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> Ondorioztatu <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> posizio-bektoreak osagai bakarra duela kasu berezi honetan: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>r</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Denbora"
    },
    {
     "mota": "testua",
     "html": "Newtonen beste kontzeptu absolutua den denbora neurtzeko, erlojuak behar dira erreferentzia-sistema osatzeko. Sistema Internazionalean denbora-unitatea <strong>segundoa</strong> da."
    },
    {
     "mota": "testua",
     "html": "Denbora aldatzean partikularen posizioa aldatuz joango da <strong>ibilbidean</strong> barrena eta, beraz, <math display=\"inline\"><mi>t</mi></math> aldiune bati dagokiola hartu behar dugu kontuan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Abiadura"
    },
    {
     "mota": "testua",
     "html": "Lehen magnitude eratorria abiadura da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>≡</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(Hemendik aurrera, mekanikan egin ohi den bezala, Newtonen <math display=\"inline\"><mover><mspace width=\"0.222em\"></mspace><mo accent=\"true\">̇</mo></mover></math> notazio laburtua erabiliko dugu gehienetan Leibnizen notazioan <math display=\"inline\"><mrow><mi>d</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math> era esplizituagoan idazten den denborarekiko deribatua adierazteko.) Abiaduraren osagai kartesiarrak zuzenean kalkulatzen dira <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math>  adierazpenetik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Abiaduraren definizioa.",
     "src": "media/irudiak/529c22d630d19a58.svg",
     "zabalera": 237
    },
    {
     "mota": "testua",
     "html": "Puntu bakoitzean ibilbidearekiko norabide tangentea eta higiduraren noranzkoa adierazten dituen <strong>bektore unitario tangentea</strong>, abiadura bere moduluarekin zatituz lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>≡</mo><mfrac><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Notazioa.</strong> Eskalarrak letra etzanetan idazten dira (hala nola <math display=\"inline\"><mi>x</mi></math> koordenatuaren kasuan) eta bektore gehienak letra lodi zuzenean (<math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> posizio-bektorearen kasuan). Bektore baten modulua idazteko, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math> moduko notazio zehatza erabili beharrean, letra bera baina etzana erabiltzen dugu: <math display=\"inline\"><mrow><mi>r</mi><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>. Egia al da <math display=\"inline\"><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></math> abiaduraren modulua <math display=\"inline\"><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></math> dela? Zergatik?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Abiaduraren modulua, <strong>abiadura eskalarra</strong> deitzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><msqrt><mrow><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></msqrt><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Abzisa lerromakurra eta arkua.",
     "src": "media/irudiak/88e8c627851dd5c6.svg",
     "zabalera": 237
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>0</mn></msub><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> puntu batetik eta higiduraren noranzkoan neurtutako arkuaren luzera den <math display=\"inline\"><mrow><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  <strong>abzisa lerromakurraren</strong> da eta bere deribatua abiaduraren modulua:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>s</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Honela laburbiltzen dira abiaduraren esanahi geometrikoa eta zinematikoa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Arku infinitesimalaren eta finituaren luzerak kalkulatzeko, honen modulua erabil dezakegu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mi>s</mi><mo>=</mo><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mi>d</mi><mi>t</mi><mo>=</mo><mi>v</mi><mi>d</mi><mi>t</mi><mo>=</mo><msqrt><mrow><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></msqrt><mi>d</mi><mi>t</mi><mo>=</mo><msqrt><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>d</mi><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>d</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><msub><mi>P</mi><mn>0</mn></msub><mi>P</mi></msubsup><mi>d</mi><mi>s</mi><mo>=</mo><msubsup><mo>∫</mo><msub><mi>P</mi><mn>0</mn></msub><mi>P</mi></msubsup><msqrt><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>d</mi><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>d</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Notazioa (berri).</strong>  (1.17) berdintzen segidan <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> ikur bikotea lau gauza desberdin adierazteko erabili da. Azaldu lauak. Zergatik desagertzen da urrats batzuetan aipaturiko bikotea?"
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "Higidura laua"
    },
    {
     "mota": "testua",
     "html": "Higidura laua bada, komeni zaigu <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math> plano kartesiarra higidura-planoa izateko moduan aukeratzea, bertan koordenatu polarrak erabili ahal izateko. Abiadura kalkulatzeko <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>r</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></mrow></math> adierazpeneko eskuineko gaiko bi osagaiak deribatu behar ditugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>r</mi><mover><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></math> bektore deribatzean bektore perpendikular bat, <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover></math>-ren norabidekoa, aurkitzen dugu,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></msup><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ondorioz, higidura lauaren kasuan,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "abiaduraren osagaiak <math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math>  <strong>abiadura erradiala</strong> eta <math display=\"inline\"><mrow><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math> dira. Abiaduraren <math display=\"inline\"><mrow><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> osagai angeluarra, beraz, erradioa bider <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math>  <strong>abiadura angeluarra</strong> da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Azelerazioa"
    },
    {
     "mota": "testua",
     "html": "Abiadura deribatuz azelerazioa lortzen da. Hauexek dira osagai kartesiarrak:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒗</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orain, <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub></mrow></math> adierazpena deribatzeko, <math display=\"inline\"><msub><mover><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mo accent=\"true\">̇</mo></mover><mi>t</mi></msub></math> kalkulatu behar da. Deribazio-aldagaia abzisa lerromakurra bada, lortzen den bektorea <math display=\"inline\"><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub></math>-rekiko perpendikularra izango da, baina, oro har, ez da unitarioa izango. Beraz, definizioz, bere modulua <math display=\"inline\"><mi>κ</mi></math>  <strong>kurbadura</strong> da eta honen alderantzizkoa <math display=\"inline\"><mi>ρ</mi></math>  <strong>kurbadura-erradioa</strong>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>κ</mi><mo>≡</mo><mfrac><mn>1</mn><mi>ρ</mi></mfrac><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>d</mi><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub></mrow><mrow><mi>d</mi><mi>s</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Dagokion <strong>bektore unitario normala</strong>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>≡</mo><mfrac><mn>1</mn><mi>κ</mi></mfrac><mfrac><mrow><mi>d</mi><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub></mrow><mrow><mi>d</mi><mi>s</mi></mrow></mfrac><mo>=</mo><mi>ρ</mi><mfrac><mrow><mi>d</mi><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub></mrow><mrow><mi>d</mi><mi>s</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub></math>-rekiko perpendikularra da eta, definizioz, <strong>normal nagusiaren</strong> norabidea definitzen du. Hortaz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mo accent=\"true\">̇</mo></mover><mi>t</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub></mrow><mrow><mi>d</mi><mi>s</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>s</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mi>ρ</mi></mfrac><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "erabiliz, azelerazioa honela idazten dela ikusten dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>+</mo><mfrac><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi>ρ</mi></mfrac><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Triedro intrintsekoa.",
     "src": "media/irudiak/cd442a841acb3d7a.svg",
     "zabalera": 245
    },
    {
     "mota": "azpititulua",
     "testua": "Binormala"
    },
    {
     "mota": "testua",
     "html": "Binormala honela definitzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mo>≡</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>×</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ibilbideko puntu bakoitzean <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>,</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>,</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> oinarri ortonormal bat dugu, puntuaren eta denboraren menpeko den <strong>triedro intrintsekoa</strong> definitzen duena:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>×</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ibilbideak berak definituriko triedro natural honetan, abiadurak osagai bakarra du: <math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>v</mi><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math> abiadura eskalarra. Azelerazioak, berriz, bi ditu: <math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mover><mi>v</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover></mrow></math>  <strong>azelerazio tangentea</strong> eta <math display=\"inline\"><mrow><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi>/</mi><mi>ρ</mi><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover></mrow></math>  <strong>azelerazio normala</strong>."
    },
    {
     "mota": "azpititulua",
     "testua": "Higidura laua"
    },
    {
     "mota": "testua",
     "html": "Higidura lauaren kasuan triedro kartesiarra, intrintsekoa eta koordenatu polarrek definiturikoa kontsideratzen ditugu."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu higidura lauaren kasuan <math display=\"block\"><mrow><mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></mrow></math> betetzen dela eta, beraz, hauxe dela azelerazioa koordenatu polarretan: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>r</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "Higidura zirkularra"
    },
    {
     "mota": "testua",
     "html": "Demagun ibilbidea <math display=\"inline\"><mi>R</mi></math> erradioko zirkunferentzia bat dela. Higidura laua da eta, kalkuluak errazteko, zirkunferentziaren zentroan aukeratuko dugu koordenatu polarren jatorria, ibilbidearen ekuazioa <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>R</mi></mrow></math> izateko moduan. Beraz, <math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> da. Defini ditzagun abiadura eta azelerazio angeluarren bektoreak modu honetan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>≡</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"bold-italic\">𝒌</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝝎</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>R</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝝎</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>R</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi>R</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>R</mi></mfrac><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>R</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover></mrow></math> betetzen dela eta, hortaz, abiadura eskalarra erradioa bider abiadura angeluarra dela, azelerazio normala <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><mi>r</mi></mrow></math> balioko <strong>azelerazio zentripetoa</strong>, eta azelerazio tangentea erradioa bider <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover></math> <strong>azelerazio angeluarra</strong>. Ondorioztatu triedro intrintsekoa hauxe dela: <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>=</mo><mi>±</mi><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>=</mo><mi>−</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mo>=</mo><mi>±</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>,</mo></mrow></math> non goiko (beheko) zeinua aukeratu behar den <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> positiboa (negatiboa) denean."
      }
     ]
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Partikula puntualaren dinamika",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ondotxo dakigunez, higiduraren kausa aztertzeko dinamikaren lehenengo formulazio osoa, Newtonek bere <em>Principia Mathematica Philosophiae Naturalis</em> maisulanean aurkeztu zuena izan zen. <strong>Newtonen legeak</strong> aztertuko dira atal honetan, baita oinarrizko printzipio eta kontzeptu osagarri batzuk ere."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Galileoren inertziaren legea"
    },
    {
     "mota": "testua",
     "html": "Newtonen lehen lege honetan bi kontzeptu berri eta hauen arteko erlazioa sartzen dira: <em>partikula aske oro abiadura konstantez higitzen da erreferentzia-sistema inertzial guztietan</em>. Alde batetik, <strong>partikula askeak erreferentzia-sistema inertzial</strong> guztietan abiadura konstantez higitzen direnak dira eta, bestetik, erreferentzia-sistema bat inertziala da bertan partikula aske guztiak abiadura konstantez higitzen badira."
    },
    {
     "mota": "azpititulua",
     "testua": "Galileoren transformazioa"
    },
    {
     "mota": "testua",
     "html": "Newtonen lehen lege honetan erreferentzia-sistema inertzialen hurrengo hiru propietateak ere sartuko ditugu, postulatu moduan:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Erreferentzia-sistema inertzial guztietan mekanikaren oinarrizko lege guztiak modu berean azaltzen dira. Sistema inertzial guztiak baliokideak dira mekanika egiteko."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Erreferentzia-sistema inertzial bat abiadura konstantez eta ardatzak biratu gabe higitzen da beste edozein sistema inertzialekiko."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Bi erreferentzia-sistema inertzial desberdinetan egindako neurketa zinematikoen arteko erlazioa beheko Galileoren transformazioak emandakoa da."
     ]
    },
    {
     "mota": "irudia",
     "oina": "Bi erreferentzia-sistema inertzial.",
     "src": "media/irudiak/ffb0c6900fdc94c8.svg",
     "zabalera": 265
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>S</mi></math> sistemaren triedroa <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi><mi>Z</mi></mrow></math> da eta <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> delakoari <math display=\"inline\"><mrow><msup><mi>O</mi><mo>′</mo></msup><msup><mi>X</mi><mo>′</mo></msup><msup><mi>Y</mi><mo>′</mo></msup><msup><mi>Z</mi><mo>′</mo></msup></mrow></math> dagokio. <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>≡</mo><mover><mrow><mi>O</mi><msup><mi>O</mi><mo>′</mo></msup></mrow><mo accent=\"true\">→</mo></mover></mrow></math> bektorearen <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover></math> deribatua bigarren sistemaren abiadura lehenarekiko adierazten du eta konstantea da. <math display=\"inline\"><mi>S</mi></math> sistemaren ikuspuntutik <math display=\"inline\"><mi>t</mi></math> aldiunean <math display=\"inline\"><mi>P</mi></math> partikularen posizioa <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> dela eta <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> sisteman <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup></math>, denbora absolutua dela onartzen badugu eta posizioen arteko erlazioa <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>+</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup></mrow></math> dela ikusten badugu, Galileoren transformazioak lortzen ditugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>t</mi><mo>=</mo><msup><mi>t</mi><mo>′</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>+</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><mo>+</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>′</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Azken ekuazioan ikusten dugu gerta daitekeela —partikula askearen kasuan— sistema bietan neurturiko azelerazioa zero izatea. Azelerazioa, abiadura eta posizioa ez bezala, ez da aldatzen sistema inertzial batetik bestera: absolutua da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egia al da <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>+</mo><mi mathvariant=\"bold-italic\">𝑹</mi></mrow></math> transformazioaren arabera, bi erreferentzia-sistema inertzialetan neurturiko abzisen arteko erlazioa <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>x</mi><mo>′</mo></msup><mo>+</mo><mi>X</mi></mrow></math> dela?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Newtonen bigarren legea"
    },
    {
     "mota": "testua",
     "html": "Hauxe dugu (Einsteinen <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math> delakoa alde batera utzita) fisikaren legerik ezagunena: <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>m</mi><mi>a</mi></mrow></math> edo, zehazkiago, <em>partikula batek pairatzen duen indar osoa bere masaren eta azelerazioaren biderkadura da</em>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "azpititulua",
     "testua": "Masa inertziala"
    },
    {
     "mota": "testua",
     "html": "Hasteko, masa inertziala definitzen da lege honetan. Azelerazioa indar osoarekiko proportzionala da beti eta, proportzionaltasun-konstante hori, masa inertziala hain zuzen, partikularen beraren ezaugarri bat da, pairatzen duen indarren izaeraren menpekoa ez dena. Partikularen masa denborarekin ez dela aldatzen onartuko dugu gehienetan, baina gerta daiteke aldakorra izatea."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mo>=</mo><msup><mi>m</mi><mo>′</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "azpititulua",
     "testua": "Indar osoa"
    },
    {
     "mota": "testua",
     "html": "Ez da pentsatu behar <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover></mrow></math> ekuazioak indarraren definizio hutsa denik. Mekanikaren oinarrizko higidura-ekuazioak bigarren ordenako ekuazio diferentzial arruntak dira. Esaterako, koordenatu kartesiarretan formularen osagaiak kalkulatuz lortzen dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msub><mi>F</mi><mi>x</mi></msub><mo>≡</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>m</mi><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msub><mi>F</mi><mi>y</mi></msub><mo>≡</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>m</mi><mover><mi>z</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msub><mi>F</mi><mi>z</mi></msub><mo>≡</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kanpo-eragin desberdin batzuk badaude, <strong>gainezarmenaren printzipioa</strong> erabiliko dugu indar osoa eragin guztiek sorturiko indar partzialen batezkotzat hartzeko."
    },
    {
     "mota": "testua",
     "html": "Adibide moduan kontsidera dezagun 1.8 irudiko pendulua. Azterketa errazteko higidura plano batean gertatzen dela onartuko dugu, baita pairatzen dituen indarrak <math display=\"inline\"><mrow><mi>m</mi><mi mathvariant=\"bold-italic\">𝒈</mi></mrow></math> pisua, sokak eragindako <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑵</mi></math> ukipen-indarra eta airearen <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math> marruskadura-indarra direla ere."
    },
    {
     "mota": "irudia",
     "oina": "Pendulu matematikoa.",
     "src": "media/irudiak/b48bec9605cda319.svg",
     "zabalera": 146
    },
    {
     "mota": "testua",
     "html": "Aukeratu dugun erreferentzia-sistema, bere <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> ardatzak masaren ibilbide zirkularrarekiko norabide tangentean eta normalean daudelarik, 1.8 irudian adierazten den moduan."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aukeratu dugun erreferentzia-sistema kontuan hartuz, froga ezazu Newtonen bigarren legearen <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>y</mi></math> osagaiak honako hauek direla: <math display=\"block\"><mrow><mi>−</mi><mi>k</mi><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>m</mi><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>N</mi><mo>−</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>m</mi><mi>l</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Bigarren ekuazioa <math display=\"inline\"><mi>N</mi></math> kalkulatzeko erabil daiteke, baina horretarako, <math display=\"block\"><mrow><mi>ω</mi><mo>≡</mo><msqrt><mfrac><mi>g</mi><mi>l</mi></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>γ</mi><mo>≡</mo><mfrac><mi>k</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac></mrow></math> definizioak egin ondoren geratzen zaigun ekuazioa ebatzi behar da: <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ukipen-indarra eta tentsioa.</strong> Aurreko adibideko ukipen-indarra sokaren tentsioa al da? Zergatik?"
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "Momentu lineala"
    },
    {
     "mota": "testua",
     "html": "Partikularen <math display=\"inline\"><mi>m</mi></math> masa eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> posizio-bektorea biderkatuz, <math display=\"inline\"><mrow><mi>m</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> <strong>masa-momentua</strong> definitzen da eta honen deribatua (masa konstantea dela jorik) partikularen <strong>momentu lineala</strong>  da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo>≡</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Berriro ere masa konstantea dela onartuz, Newtonen bigarren legea hurrengo modu baliokidean idatz daitekeela ikusten dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Indar osoa zero bada —partikula askea delako, adibidez—, momentu lineala higidura-konstantea da."
    },
    {
     "mota": "azpititulua",
     "testua": "Momentu angeluarra eta indar-momentua"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>P</mi></math> puntuan dagoen partikularen <math display=\"inline\"><mi>Q</mi></math> puntuarekiko momentu angeluarra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑳</mi><mi>Q</mi></msub><mo>=</mo><mover><mrow><mi>Q</mi><mi>P</mi></mrow><mo accent=\"true\">→</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝒑</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da eta partikulan aplikaturik dagoen <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> indar baten momentua"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑵</mi><mi>Q</mi></msub><mo>=</mo><mover><mrow><mi>Q</mi><mi>P</mi></mrow><mo accent=\"true\">→</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu hauxe dela momentu angeluarraren eboluzio-ekuazioa, indar-momentu <em>osoa</em>, hau da indar guztien momentuen batura <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑵</mi><mi>Q</mi></msub></math>  bada: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑵</mi><mi>Q</mi></msub><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mi>Q</mi></msub><mi>.</mi></mrow></math> Zergatik eskatu behar da eboluzio-ekuazioan <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑵</mi><mi>Q</mi></msub></math> momentua osoa izatea?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Gehienetan, baina ez beti, koordenatu-sistemaren jatorriarekiko momentuak kalkulatuko ditugu. Horrelako kasuetan ez dugu esplizituki idatziko <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>O</mi></mrow></math> azpindizea:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Higidura laua.</strong> Kalkulatu koordenatu polarretan jatorriarekiko momentu angeluarra higidura lauaren adibidean."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Momentu angeluarraren kontserbazio-printzipioa.</strong> Zer-nolako baldintzak bete behar dira partikula baten momentu angeluarra higidura-konstantea izateko? Nolakoa da higidura kasu horretan? Ondorioztatu indar osoa <strong>zentrala</strong> bada (hau da, bere aplikazio-lerroa beti pasatzen bada <strong>poloa</strong> deitutako puntu finko batetik), indar-poloarekiko momentu angeluarra higidura-konstantea dela."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Posizio-bektoreak estalitako azalera infinitesimala.",
     "src": "media/irudiak/4f0b4106088040f5.svg",
     "zabalera": 223
    },
    {
     "mota": "testua",
     "html": "Momentu angeluarraren parekoa dugu <strong>azalera-abiadura</strong>, hau da, posizio-bektoreak denbora-unitatean estalitako azalera. <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> denbora-tarte infinitesimalean estalitako azalera, 1.9 irudiko <math display=\"inline\"><mrow><mi>O</mi><mi>P</mi><mi>Q</mi></mrow></math> triangeluarena da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mi>S</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>r</mi><mi>d</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>r</mi><mi>d</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, irudiko azalera infinitesimala adierazteko"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "bektorea erabil dezakegu eta, hortaz, honela idatz daiteke azalera-abiadura:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>a</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mi mathvariant=\"bold-italic\">𝑳</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zer adierazten dute azalera-abiaduraren norabideak eta noranzkoak?"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Akzioa eta erreakzioa.",
     "src": "media/irudiak/fd630994c083feaf.svg",
     "zabalera": 230
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Akzio eta erreakzioaren printzipioa"
    },
    {
     "mota": "testua",
     "html": "Orain arte partikula bakarra kontsideratu dugu, baina Newtonen hirugarren lege honetan bi hartuko dira kontuan. Nolabait, indarrak sortzerakoan biak baliokideak direla diosku printzipio honek: <em>partikula batek beste baten gainean eragiten duen <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>12</mn></msub></math> indarra, azken partikulak lehenengoaren gainean eragindako <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>21</mn></msub></math> indarraren aurkakoa da</em>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>12</mn></msub><mo>=</mo><mi>−</mi><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>21</mn></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta, gainera, <em>aipaturiko bi indarren norabidea partikulak lotzen dituen zuzenarena da</em>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>12</mn></msub><mo>∥</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>21</mn></msub><mo>∥</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Newtonen lege hau mugatuena da eta fisika klasikoan ere gerta daiteke ez betetzea (indar elektromagnetikoekin, adibidez)."
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Bulkada, lana eta energia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Magnitude berriak definitzean deribatuaz baliatu gara batzuetan; orain, integralak erabiliko ditugu. Hasteko, indarra denborarekiko integratuko dugu, geroago integral lerromakurraz arduratzeko."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bulkada"
    },
    {
     "mota": "testua",
     "html": "Ibilbideko 1 eta 2 puntuetan <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math> uneetan badago partikula, aldiune horien arteko <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> indarraren <strong>bulkada</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mn>12</mn></msub><mo>≡</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>d</mi><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "integrala da, definizioz. Hemen indar <em>osoa</em> ordezkatzen badugu, Newtonen bigarren legearen adierazpen integrala lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mn>12</mn></msub><mo>=</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̇</mo></mover><mi>d</mi><mi>t</mi><mo>=</mo><msubsup><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "bulkada osoa momentu linealaren aldaketaren berdina da"
    },
    {
     "mota": "testua",
     "html": "."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Defini ezazu modu egokian indar baten <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑴</mi></math>  <strong>bulkada angeluarra</strong> eta ondorioztatu <em>bulkada angeluar osoa momentu angeluarraren aldaketaren berdina dela</em>. Egiaztatu <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑱</mi></math> bulkada <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> puntuan aplikatzen bada denbora-tarte arbuiagarri batean, dagokion bulkada angeluarra <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑴</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑱</mi></mrow></math> dela."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Potentzia eta energia zinetikoa"
    },
    {
     "mota": "testua",
     "html": "Definizioz, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> indarrak partikula baten gainean egiten duen <strong>potentzia</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝒫</mi><mo>≡</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da eta partikularen <strong>energia zinetikoa</strong>  hauxe:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>≡</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Notazioa.</strong> Froga ezazu energia zinetikoaren hurrengo adierazpenak baliokideak direla: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math> Idatz al daiteke <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>? Zergatik?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Energia zinetikoaren denborarekiko deribatua,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>T</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "potentziaren definizioa eta indar osoarena erabiliz, <em>indar osoak egindako potentzia energia zinetikoaren deribatuaren berdina dela</em> frogatzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>T</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"script\">𝒫</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "azpititulua",
     "testua": "Lana"
    },
    {
     "mota": "testua",
     "html": "Potentzia bi aldiuneren artean integratuz <strong>lana</strong> lortzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>W</mi><mn>12</mn></msub><mo>≡</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mi mathvariant=\"script\">𝒫</mi><mi>d</mi><mi>t</mi><mo>=</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>d</mi><mi>t</mi><mo>=</mo><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Desplazamendu infinitesimala eta indarra.",
     "src": "media/irudiak/7923d54314d409e4.svg",
     "zabalera": 232
    },
    {
     "mota": "testua",
     "html": "Hemen, <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> denbora-tartean ibilbidean barrena egindako <strong>desplazamendu infinitesimala</strong> hauxe dela erabili dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>d</mi><mi>t</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi mathvariant=\"script\">𝒫</mi></math> emaitza ibilbideko <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math> puntuen artean integratuz,"
    },
    {
     "mota": "testua",
     "html": "indar osoaren lana energia zinetikoaren aldaketaren berdina dela"
    },
    {
     "mota": "testua",
     "html": "ikusten dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>W</mi><mn>12</mn></msub><mo>=</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mi mathvariant=\"script\">𝒫</mi><mi>d</mi><mi>t</mi><mo>=</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mover><mi>T</mi><mo accent=\"true\">̇</mo></mover><mi>d</mi><mi>t</mi><mo>=</mo><msubsup><mrow><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><msub><mi>T</mi><mi>i</mi></msub><mo>≡</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> notazioa erabili dugun."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Indar kontserbatzaileak eta energia potentziala"
    },
    {
     "mota": "testua",
     "html": "Puntu bakoitzean indarraren balio bat definiturik dagoenean, hau da, indarra eremu bektoriala denean, <strong>indar-eremua</strong> dugula esaten da. Adibidez, Lurrak <math display=\"inline\"><mi>m</mi></math> masako satelite batean eragiten duen erakarpen-indarra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi>G</mi><mfrac><mrow><msub><mi>M</mi><mo>⊕</mo></msub><mi>m</mi></mrow><msup><mi>r</mi><mn>3</mn></msup></mfrac><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "moduan idatz daiteke hurbilketa on batean. Hemen <math display=\"inline\"><mi>G</mi></math> Newtonen grabitazio-konstantea da eta <math display=\"inline\"><msub><mi>M</mi><mo>⊕</mo></msub></math> Lurraren masa."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> indar-eremua <strong>kontserbatzailea</strong> da baldin eta <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eremu eskalar egoki baten gradientearen alderantzizkoaren berdina bada:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></mfrac><mo>≡</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eremu eskalarra <strong>energia potentziala</strong> deitzen da eta ez da bakarra, argi baitago <math display=\"inline\"><mi>∇</mi></math> eragile diferentziala aplikatzean indar-eremu berbera lortzen dela konstante bat gehitzen badiogu."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu zuzenean emaitza erabilgarri hauek: <math display=\"block\"><mrow><mi>∇</mi><mi>r</mi><mo>=</mo><mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mi>r</mi></mfrac><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>∇</mi><mfrac><mn>1</mn><mi>r</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><msup><mi>r</mi><mn>3</mn></msup></mfrac><mo>=</mo><mi>−</mi><mfrac><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><msup><mi>r</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mfrac></mrow></math> Ondorioztatu erakarpen-indarrari dagokion energia potentzialtzat <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>G</mi><mfrac><mrow><msub><mi>M</mi><mo>⊕</mo></msub><mi>m</mi></mrow><mi>r</mi></mfrac></mrow></math> aukera daitekeela."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Indar-eremu bat kontserbatzailea denetz jakiteko irizpide praktikoa hauxe da:"
    },
    {
     "mota": "testua",
     "html": "indar-eremua kontserbatzailea da baldin eta soilik baldin irrotazionala bada"
    },
    {
     "mota": "testua",
     "html": ", hau da, bere errotazionala nulua bada:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>F</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><msub><mi>F</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>F</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><msub><mi>F</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>F</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><msub><mi>F</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi></mrow></math> hipotesitik errotazionala nulua dela ondorioztatzen dela."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Indar kontserbatzaile baten integral lerromakurra (lana) integrazio-muturren menpekoa da eta ez integrazio-bidearena (ibilbidearena). Izan ere, honela aldatzen da energia potentziala desplazamendu infinitesimal batean:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mi>V</mi><mo>≡</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>d</mi><mi>x</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mi>d</mi><mi>y</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mi>d</mi><mi>z</mi><mo>=</mo><mi>∇</mi><mi>V</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta, beraz, hauxe da indarraren integrala:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>−</mi><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi>∇</mi><mi>V</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>−</mi><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi>d</mi><mi>V</mi><mo>=</mo><mi>−</mi><msubsup><mrow><mi>V</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>1</mn><mn>2</mn></msubsup><mo>=</mo><msub><mi>V</mi><mn>1</mn></msub><mo>−</mo><msub><mi>V</mi><mn>2</mn></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><msub><mi>V</mi><mi>i</mi></msub><mo>≡</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> notazioa erabili dugun."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu emaitza <math display=\"block\"><mrow><mover><mi>V</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>∇</mi><mi>V</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math> moduan ere idatz daitekeela."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> indar-eremuaren integral lerromakurra ez bada ibilbidearen menpekoa, emaitzaz balia gaitezke energia potentziala eraikitzeko eta, beraz, indar-eremua kontserbatzailea dela frogatzeko. Izan ere, <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub></math> puntua orain hautazko <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> bada eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub></math>-en kasuan puntu finko bat aukeratzen badugu, honela idatz daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>V</mi><mn>1</mn></msub><mo>−</mo><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hautazko <math display=\"inline\"><mrow><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> konstantea aukeratuz gero, integrazio-bidearen menpekoa ez den azken emaitzak energia potentziala modu bakarrean definitzen digu puntu guztietan eta froga daiteke integralaren gradientea <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> indarra dela."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu indar-eremu bat kontserbatzailea dela baldin eta soilik baldin bere integral lerromakurra nulua bada integrazio-bide itxi guztietan."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Emaitza hau erabiliz, erraz ikusten da marruskadura-indarra ez dela kontserbatzailea, marruskadura lehor dinamikoaren kasuan (ikus 1.3.9 atala). Marruskadura desplazamenduaren aurkakoa denez, bere lana negatiboa da eta, ondorioz, ezin izan daiteke nulua, ibilbidea itxia bada ere. Indar kontserbatzaileen bi kasu ezagun aztertzen ditugu jarraian."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Indar-eremu zentralak"
    },
    {
     "mota": "testua",
     "html": "1.11 ariketan ikusi genuen bezala, indarra zentrala bada, bere aplikazio-lerroa beti pasatzen da <strong>polotik</strong> eta, ondorioz, poloarekiko indar-momentua nulua da. Analisia errazteko erreferentzia-sistemaren jatorria poloan aukeratzen badugu, indarra posizio-bektorearekiko paraleloa eta, beraz, proportzionala izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>F</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hemen, ohi bezala, <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>≡</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mi>/</mi><mi>r</mi></mrow></math> bektore unitarioa erabili dugu."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Indar zentralaren modulua al da <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>F</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></mrow></math> adierazpeneko <math display=\"inline\"><mi>F</mi></math> delakoa?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Eman dezagun orain indarra <strong>indar-eremua</strong> dela, hau da, posizioaren menpekoa: <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Gainera, <strong>indar-eremu zentrala</strong> dela esango dugu, indarraren norabidea posizio-bektorearena izateaz gain, bere modulua eta noranzkoa posizio-bektorearen moduluaren menpeko hutsa badira, hau da, polotik neurturiko distantziaren menpekoak eta ez norabidearenak:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Indar-eremu zentralak beti dira kontserbatzaileak eta dagokien energia potentziala honako hau (hautazko integrazio-konstante inplizitua ahazten ez badugu, behintzat):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mo>∫</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>r</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><mi>r</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Izan ere, funtzio konposatuen teorema eta (1.74) erabiliz, hauxe dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mi>∇</mi><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><mi>r</mi></mrow></mfrac><mi>∇</mi><mi>r</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> adierazpena (1.72) indarraren (1.75) energia potentziala berreskuratzeko."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dimentsio bakarreko indar-eremua"
    },
    {
     "mota": "testua",
     "html": "Indar-eremua dimentsio bakarrekoa bada, indarraren norabidea konstantea da. Kalkuluak errazteko, aipaturiko norabidean aukeratuko dugu gure erreferentzia-sistemaren <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatza. Honela idazten da indar-eremua sistema horretan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hemen, dimentsio bakarreko indar-eremuaren definizioaren partea den hipotesi bat esplizituki idatzi dugu: indarra <math display=\"inline\"><mi>x</mi></math> osagaiaren menpeko hutsa da; <math display=\"inline\"><mi>y</mi></math> eta <math display=\"inline\"><mi>z</mi></math> ez dira agertzen."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Indarraren modulua al da <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math> adierazpeneko <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> delakoa?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Dimentsio bakarreko indar-eremuak beti dira kontserbatzaileak eta dagokien energia potentziala honako hau:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mo>∫</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Izan ere, hauxe dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mi>∇</mi><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>∫</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Osziladore harmonikoa"
    },
    {
     "mota": "testua",
     "html": "Beharbada, dimentsio bakarreko indar-eremuaren adibiderik ezagunena indar elastikoarena da. Eman dezagun 1.12 irudiko malgukiaren luzera naturala <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> dela eta konstante berreskuratzailea <math display=\"inline\"><mi>k</mi></math>. Hookeren legearen arabera, malgukiaren deformazioa <math display=\"inline\"><mi>x</mi></math> denean, <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>x</mi></mrow></math> indar berreskuratzailea eragiten du masaren gainean, eta beste indar horizontal guztiak arbuiagarriak badira, hauxe dugu higidura-ekuazioa aipaturiko norabidean:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>k</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Malgukiaren deformazioa.",
     "src": "media/irudiak/e5965758b63644b5.svg",
     "zabalera": 177
    },
    {
     "mota": "testua",
     "html": "(1.86) integrala eginez, energia elastikoa lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hemen integrazio-konstantea zerotzat aukeratu dugu; horrela, malgukia deformatu gabe badago energia elastikoa nulua da, eta positiboa beste kasu guztietan. Malgukiaren <math display=\"inline\"><mrow><mi>ω</mi><mo>≡</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> pultsazio naturala erabiliz, osziladore harmonikoaren ekuazioa lortzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Gainera, abiadurarekiko proportzionala den <math display=\"inline\"><mrow><mi>−</mi><mi>C</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> marruskadura-indarra ere pairatzen badu masak eta <math display=\"inline\"><mrow><mi>γ</mi><mo>≡</mo><mi>C</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  <strong>indargetze-koefizientea</strong> definitzen bada, osziladore harmoniko indargetuaren ekuazioa dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Energia mekanikoa"
    },
    {
     "mota": "testua",
     "html": "Kontsidera ditzagun modu honetan idazten diren (1.68), (1.71), (1.79) eta (1.78) emaitzak:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>T</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mover><mi>V</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msub><mi>V</mi><mn>1</mn></msub><mo>−</mo><msub><mi>V</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lerro bakoitzean agertzen direnak elkarren baliokideak dira: ezkerrekoa potentzia da eta eskuinekoa lana. Goiko adierazpenak betetzen dira <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> indarra <em>osoa</em> denean, baina berdin da kontserbatzailea den edo ez. Behekoak, berriz, indarra kontserbatzailea denean betetzen dira, baina osoa zein partziala izan daiteke indarra."
    },
    {
     "mota": "testua",
     "html": "Biak betetzen badira, hau da, indar osoa kontserbatzailea bada, hauxe dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>+</mo><mi>V</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></msup><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mn>1</mn></msub><mo>+</mo><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>+</mo><msub><mi>V</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Emaitza honetan agertzen den magnitudea, energia zinetikoaren eta potentzialaren batura, <strong>energia mekanikoa</strong> da eta frogatu duguna <strong>energia mekanikoaren kontserbazio-printzipioa</strong>: <em>partikula baten gainean eragiten duen indar osoa kontserbatzailea bada, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi></mrow></math> energia mekanikoa higidura-konstantea da</em>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eman dezagun partikularen gainean eragiten duten indarrak bitan banantzen ditugula. Froga ezazu indar kontserbatzaile guztien <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> batura kontserbatzailea dela eta dagokion <math display=\"inline\"><mi>V</mi></math> energia potentziala indar kontserbatzaile partzialen energia potentzialen batura. Kontserbatzaileak ez diren indarren batura <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> bada, frogatu energia mekanikoaren eboluzio-ekuazioa hauxe dela: <math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi mathvariant=\"bold-italic\">𝑹</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Marruskadura"
    },
    {
     "mota": "testua",
     "html": "Partikula fluido batean higitzen bada, abiadura txikia den bitartean, marruskadura-indarra abiadura erlatiboarekiko proportzionala eta kontrakoa da: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi>−</mi><mi>C</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi>C</mi><mo>&gt;</mo><mn>0</mn></mrow></math>. Egiten duen lana, beraz, negatiboa da, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>C</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>&lt;</mo><mn>0</mn></mrow></math> baita."
    },
    {
     "mota": "testua",
     "html": "Elkar ukitzen duten bi gainazal higidura erlatiboan badaude, ukipen-indarraren osagai tangentea da marruskadura-indarra. Kasu askotan hurrengo lege fenomenologikoak betetzen ditu <strong>marruskadura dinamiko</strong>  honek:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Amontonsen lehen legea</strong>: Marruskadura indarra normalarekiko proportzionala da. Proportzionaltasun-konstantea <strong>marruskadura dinamikoaren koefizientea</strong> da eta horrela idazten da legea: <math display=\"block\"><mrow><mi>R</mi><mo>=</mo><msub><mi>μ</mi><mi>d</mi></msub><mi>N</mi><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Amontonsen bigarren legea</strong>: Marruskadura indarra ez da ukipen-azalera nabarmenaren menpekoa."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Coulomben legea</strong>: Marruskadura-indarra ez da gainazalen arteko abiadura erlatiboaren menpekoa."
     ]
    },
    {
     "mota": "testua",
     "html": "Gainazalak pausagune erlatiboan egon arren, higidura erlatiboa agertzeko joera dagoenean, <strong>marruskadura estatikoa</strong> dugu eta marruskadura-indarrak Amontonsen bigarren legea betetzen du, baina ez lehenengoa. Bere modulua problema dinamiko osoa ebatziz kalkulatzen da, baina indar normalaren menpeko balio maximo bat du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>≤</mo><msub><mi>μ</mi><mi>e</mi></msub><mi>N</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><msub><mi>μ</mi><mi>e</mi></msub></math> konstantea <strong>marruskadura estatikoaren koefizientea</strong> den. Oro har <math display=\"inline\"><mrow><msub><mi>μ</mi><mi>e</mi></msub><mo>&gt;</mo><msub><mi>μ</mi><mi>d</mi></msub></mrow></math> dugu."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Ebazpen-metodoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Indarrak ezagutuz gero, abiadura eta posizioa lortzeko, Newtonen bigarren legea ebatzi behar da. Koordenatu kartesiarretan, adibidez, (1.44)–(1.46) ekuazio diferentzialen sistema askatu behar da. Problema matematiko honen teoria orokorra ekuazio diferentzial arrunten teoria da. Hemen kasu erraz berezi batzuk aztertzera mugatuko gara."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Denboraren menpeko indarra"
    },
    {
     "mota": "testua",
     "html": "Lehenago aipatu dugunez, salbuespena bada ere, gerta daiteke ezaguna izatea partikulak pairatzen duen <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> indar osoaren denborarekiko menpekotasuna. Kasu horretan, <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mi>/</mi><mi>m</mi></mrow></math> azelerazioaren menpekotasuna ere ezaguna da. Gainera, «hasierako» <math display=\"inline\"><msub><mi>t</mi><mn>0</mn></msub></math> aldiunean <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>0</mn></msub><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> posizioa eta <math display=\"inline\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> abiadura ezagutzen badira, (1.42) ekuazioa <math display=\"inline\"><msub><mi>t</mi><mn>0</mn></msub></math>-ren eta <math display=\"inline\"><mi>t</mi></math> aldiune generikoaren artean integratuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>+</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>0</mn></msub><mi>t</mi></msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mi>d</mi><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "abiadura lortzen da eta, berriro integratuz, posizioa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>0</mn></msub><mo>+</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>0</mn></msub><mi>t</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>0</mn></msub><mi>t</mi></msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mi>d</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Higidura uniformeki azeleratua.</strong> Frogatu hurrengoak direla partikularen abiadura eta posizioa, partikulak pairatzen duen indar osoa konstantea denean: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>+</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>0</mn></msub><mo>+</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Higidura uniformea.</strong> Egiaztatu partikulak pairatzen duen indar osoa zero denean (agian partikula askea delako), abiadura konstantea dela, <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>,</mo></mrow></math> eta ibilbidea hurrengo ekuazioak emandako lerro zuzena: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>0</mn></msub><mo>+</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Higidura-konstanteak"
    },
    {
     "mota": "testua",
     "html": "Kontserbazio-printzipioek emandako higidura-konstanteak oso lagungarriak izaten dira higidura-ekuazioen ebazpenean aurrera egiteko. Izan ere, integrazioa egiten laguntzen digutenez, <strong>lehen integralak</strong> ere deitzen dira."
    },
    {
     "mota": "azpititulua",
     "testua": "Dimentsio bakarreko problema kontserbatzailea"
    },
    {
     "mota": "testua",
     "html": "Adibide moduan, kontsidera dezagun (1.86) dimentsio bakarreko indar-eremuaren eraginpean higitzen den partikula. Energia mekanikoa kontserbatzen denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "bigarren ordenako ekuazio diferentzialaren ordez, lehen ordenako energiaren ekuazioaz balia gaitezke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Energia mekanikoaren <math display=\"inline\"><mi>E</mi></math> balioa hasierako posizioa eta abiadura erabiliz kalkula daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn><mn>2</mn></msubsup><mo>+</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orain, deribatua askatuko dugu, lehen ordenako ekuazio diferentziala lortzeko:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>±</mi><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu (1.104) higidura-ekuazioa <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> abiaduraz biderkatuz ere lor daitekeela (1.105) kontserbazio-legea."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aldagaien banantzea"
    },
    {
     "mota": "testua",
     "html": "(1.107) ekuazioan ezin ditugu bi gaiak denborarekiko integratu, eskuineko atalean <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> menpekotasuna ezezaguna baita: horixe bera kalkulatu nahi dugu! Zorionez, aipaturiko ekuazioan <math display=\"inline\"><mi>t</mi></math> denbora ez da esplizituki agertzen, bakarrik dago inplizituki <math display=\"inline\"><mi>x</mi></math> posizioan eta <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> abiaduran. Hori gertatzen denean, orain azalduko dugun prozedura saia daiteke. Hasteko, denbora esplizituki sartzen dugu ekuazioa <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> diferentzialaz biderkatuz; horrela, <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi><mo>=</mo><mi>d</mi><mi>x</mi><mi>/</mi><mi>d</mi><mi>t</mi><mi>d</mi><mi>t</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>d</mi><mi>t</mi></mrow></math> dela gogoratuz, hauxe dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mi>x</mi><mo>=</mo><mi>±</mi><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oraindik ezin dugu eskuineko gaia zuzenean integratu, baina aldagaiak banantzen baditugu, hau da, atal batean <math display=\"inline\"><mi>x</mi></math> duten gai guztiak biltzen baditugu bestean <math display=\"inline\"><mi>t</mi></math> soilik utziz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mfrac><mo>=</mo><mi>±</mi><mi>d</mi><mi>t</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "integrala zuzenean egin daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mfrac><mo>=</mo><mi>±</mi><mi>t</mi><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu hauxe dugula, <math display=\"inline\"><mi>C</mi></math> integrazio-konstantea kentzeko hasierako posizioa (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>≡</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) erabiltzen bada: <math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mfrac><mo>=</mo><mi>±</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Adibidez, (1.88) malgukiaren kasuan, energia potentzial elastikoa, <math display=\"inline\"><mrow><mi>A</mi><mo>≡</mo><msqrt><mrow><mn>2</mn><mi>E</mi><mi>/</mi><mi>k</mi></mrow></msqrt></mrow></math>  <strong>anplitudea</strong> eta <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><msub><mi>φ</mi><mn>0</mn></msub><mi>/</mi><mi>ω</mi></mrow></math> integrazio-konstantea erabiliz, osziladore harmonikoaren soluzioa lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mi>ω</mi></mfrac><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mfrac><mi>x</mi><mi>A</mi></mfrac><mo>=</mo><mi>t</mi><mo>+</mo><mi>C</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Anplitudearen esangura agerian dago hemen: deformazioaren (elongazioaren) baliorik handiena da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Beharrezkoa al da <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> soluzioa kontuan hartzea? Froga ezazu osziladore harmonikoaren soluzioa modu honetan ere idatz daitekeela: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Erabil daiteke (1.112) soluzioa (1.90) osziladore harmoniko guztiekin, nahiz eta jatorrizko problema (1.88) malgukiarena ez izan? Zergatik?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Koefiziente konstanteetako ekuazio diferentzial linealak"
    },
    {
     "mota": "testua",
     "html": "Ikuspuntu matematikotik (1.90) osziladore harmonikoa oso ekuazio diferentzial erraza da, koefiziente konstanteetako lineala baita: <math display=\"inline\"><mi>x</mi></math> ezezaguna eta bere deribatuak koefiziente konstanteetako konbinazio linealean agertzen dira. Horrelako ekuazioak modu zuzenean ebatz daitezke <math display=\"inline\"><mrow><mi>A</mi><msup><mi>e</mi><mrow><mi>α</mi><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> moduko soluzio saiatuak eta gainezarmenaren printzipioa erabiliz: soluzioen batura soluzioa da."
    },
    {
     "mota": "azpititulua",
     "testua": "Osziladore harmoniko indargetua"
    },
    {
     "mota": "testua",
     "html": "Saia dezagun osziladore harmoniko indargetuaren (1.91) ekuazioan <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>α</mi><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  soluzioa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>α</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>+</mo><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>β</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>α</mi><mn>2</mn></msup><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>α</mi><mi>γ</mi><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> orekari dagokion <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math> soluzioa alde batera utzita, aurreko ekuazioa <math display=\"inline\"><mi>t</mi></math> aldiune guztietan betetzeko sinuaren eta kosinuaren koefizienteek zero izan behar dute. <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>+</mo><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>β</mi></mrow></math> biderkadura nulua izateko bi posibilitate daude:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>α</mi><mo>=</mo><mi>−</mi><mi>γ</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>=</mo><mi>±</mi><msub><mi>ω</mi><mi>γ</mi></msub><mo>≡</mo><mi>±</mi><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>α</mi><mo>=</mo><mi>−</mi><msub><mi>λ</mi><mo>±</mo></msub><mo>≡</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>γ</mi><mo>±</mo><msqrt><mrow><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ageri denez, lehen kasuan erro karratua erreala izateko <math display=\"inline\"><mrow><mi>γ</mi><mo>≤</mo><mi>ω</mi></mrow></math> bete behar da eta bigarrenean <math display=\"inline\"><mrow><mi>γ</mi><mo>≥</mo><mi>ω</mi></mrow></math>. Azter ditzagun banan-banan kasu horiek, eta <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mi>ω</mi></mrow></math> kasu berezia."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>γ</mi><mo>&lt;</mo><mi>ω</mi></mrow></math>. Kasu honetan <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>γ</mi></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> soluzioan bi zati desberdin daude. Azkena sinusoidala eta, beraz, periodikoa da. Baina, <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> denez, oszilazioaren <math display=\"inline\"><mrow><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup></mrow></math> anplitudea monotono beherakorra da: oszilazioak moteltzen joango dira."
     ]
    },
    {
     "mota": "irudia",
     "oina": "Oszilazio indargetua.",
     "src": "media/irudiak/1b97be2640430f14.svg",
     "zabalera": 271
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mi>ω</mi></mrow></math>. Bi soluzio daude, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>λ</mi><mo>±</mo></msub><mi>t</mi></mrow></msup></mrow></math>. Orain, <math display=\"inline\"><mrow><mi>C</mi><mo>≡</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>0</mn></msub></mrow></math> konstantea hautazkoa dela kontuan hartuz, soluzioa <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>λ</mi><mo>+</mo></msub><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>λ</mi><mo>−</mo></msub><mi>t</mi></mrow></msup></mrow></math> moduan idatz daiteke, gainezarmenaren printzipioaren ondorioz. <math display=\"inline\"><mrow><msub><mi>λ</mi><mo>±</mo></msub><mo>&gt;</mo><mn>0</mn></mrow></math> direnez, bi gaiak monotono beherakorrak dira. Ez dago gai periodikorik eta osziladorea <strong>gainindargetua</strong> dela esaten dugu."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mi>ω</mi></mrow></math>. <strong>Indargetze kritikoaren</strong> kasu hau aurreko bien arteko muga da. Soluzioa honako hau da: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>C</mi><mo>+</mo><mi>D</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ω</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(a) Egiaztatu goiko soluzio egokian <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math> eginez lortzen dena osziladore harmonikoaren (1.112) soluzioa dela. (b) Kalkulatu noiz pasatzen den <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> oreka-puntutik osziladore harmoniko indargetua. (c) Marraztu soluzioren bat. (d) Egiaztatu osziladore kritikoaren soluzioa (1.119) dela. (e) Oszilaziorik al dago indargetze kritikoaren kasuan?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hurbilketak"
    },
    {
     "mota": "testua",
     "html": "Hurbilketak dira, agian, fisikariaren tresnarik garrantzitsuenak. Eredu fisiko guztiak hurbilduak dira, nahitaez. Higidura-ekuazioak ebaztean ere erabilgarriak (eta, askotan, behar-beharrezkoak) dira hurbilketak. Testuan gehienetan erabiliko duguna aztertuko dugu hemen."
    },
    {
     "mota": "azpititulua",
     "testua": "Oszilazio txikiak"
    },
    {
     "mota": "testua",
     "html": "Penduluaren (1.50) ekuazioan, marruskadura arbuiagarria dela (<math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math>) onartzen badugu, energiaren kontserbazio-legea eta aldagaien banantzearen metodoa erabil ditzakegu, baina agertzen den integrala eliptikoa da. Zorionez, askotan nahikoa da jakitea zer gertatzen da penduluaren oszilazioak txikiak direnean. Orduan <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>θ</mi></mrow></math> hurbilketa linela egiten badugu, (1.50) ekuazioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "bihurtzen da. Baina, azken hau osziladore harmoniko indargetuaren ekuazioa da. Ikuspuntu matematikotik egitura berekoak dira (1.91) eta (1.120)  ekuazioak: bi <strong>problema baliokide</strong> dira malgukiarena eta penduluarena, hurbilketa lineala egokia izateko behar diren deformazio eta angelu txikiak kontsideratzen badira."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Metodo kualitatiboak: energia-diagramak"
    },
    {
     "mota": "testua",
     "html": "Batzuetan higidura-ekuazioak ebatzi gabe informazio kualitatibo interesgarria lor daiteke haien soluzioei buruz. Izan ere, soluzioak kalkula daitezkeenean ere, informazio kualitatibo hori lortzea errazagoa izan daiteke hemen aztertuko ditugun metodoak erabiliz."
    },
    {
     "mota": "azpititulua",
     "testua": "Oreka-puntuak"
    },
    {
     "mota": "testua",
     "html": "Hasteko ikusiko dugu nola aurkitu eta aztertu soluziorik errazenak, <strong>oreka</strong> deskribatzen duten soluzio konstanteak, alegia. Partikula bat orekan egoteko bi baldintza bete behar dira. Lehena dinamikoa da: partikulak pairatutako indar osoak nulua izan behar du. Bigarrena zinematikoa da: aldiune batean (hasieran) abiadurak nulua izan behar du."
    },
    {
     "mota": "testua",
     "html": "Eman dezagun, partikula dimentsio bakarreko indar-eremu batean higitzen dela. 1.3.6 atalean ikusi genuenez, problema kontserbatzailea da eta hau eta indarra <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> moduan idatz daiteke. Horrez gain, abiadurarekiko proportzionala den <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> marruskadura-indarra pairatzen badu, higidura-ekuazioa hauxe da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>k</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oreka-baldintza <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> abiadura eta <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> indar osoa nuluak izatea da. Argi dago bi baldintza horiek <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> direlakoen baliokideak direla. Oreka-baldintza horien esanahi bikoitza agerian dago:"
    },
    {
     "mota": "testua",
     "html": "orekan egoteko, partikulak pausagunean (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>) egon behar du energia potentzialaren mutur-puntu bati dagokion posizioan (<math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "."
    },
    {
     "mota": "irudia",
     "oina": "Energia-diagrama.",
     "src": "media/irudiak/02fb8e5844e90eda.svg",
     "zabalera": 320
    },
    {
     "mota": "testua",
     "html": "Oreka-posizioen kokapenak aurkitzeko, beraz, <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> ekuazioa ebatzi behar dugu hasteko. Energia potentzialaren grafikoa egiten badugu, 1.14 irudian bezala, oreka-puntuak erraz aurkitzen dira: energia potentzialaren maximo, minimo eta inflexio-puntuei dagozkien posizioak dira."
    },
    {
     "mota": "azpititulua",
     "testua": "Atzerapen-puntuak"
    },
    {
     "mota": "testua",
     "html": "Energia zinetikoa negatiboa ez denez, energia mekanikoak potentziala baino handiagoa (edo berdina) izan behar du beti. Beraz, <math display=\"inline\"><mi>E</mi></math> energia mekanikoa ezaguna bada <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mi>E</mi></mrow></math> baldintza betetzen duten puntuak debekaturik daude. Energia mekanikoaren eta potentzialaren grafikoen arteko ebakidura-puntuetan biak berdinak dira: energia zinetikoa eta abiadura, beraz, nuluak. <strong>Atzerapen-puntuak</strong> dira horiek: bertan partikulak atzera egiten du, bere abiaduraren zeinua aldatzen baita."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eman orain <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> marruskadura-indarra ez dela arbuiagarria. Frogatu energia mekanikoaren eboluzio-ekuazioa honako hau dela: <math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>k</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>≤</mo><mn>0</mn><mi>.</mi></mrow></math> Ondorioztatu, energia mekanikoa gutxituz doala oreka-puntu batera (edo <math display=\"inline\"><mrow><mi>−</mi><mi>∞</mi></mrow></math>-ra) iritsi arte."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Energia potentzial elastikoa.",
     "src": "media/irudiak/8ecf8642f279104c.svg",
     "zabalera": 252
    },
    {
     "mota": "testua",
     "html": "Adibide moduan, kontsidera dezagun, berriro ere, (1.88) malgukia. Dagokion energia potentzialaren grafikoa <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math> parabola izango da. Marruskadura arbuiagarria bada,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "energia mekanikoa ez da higiduran zehar aldatuko eta bere grafikoa segmentu horizontala da. Atzerapen-puntuak, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> baldintza baliokideek definiturikoak dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mi>A</mi><mo>≡</mo><mi>±</mi><msqrt><mfrac><mrow><mn>2</mn><mi>E</mi></mrow><mi>k</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Jakina, elongazio maximoa den <math display=\"inline\"><mi>A</mi></math> anplitudea berreskuratzen dugu hemen. Marruskadura badago, energia mekanikoa txikituz doa eta minimorantz jotzen du, 1.16 irudian erakusten den bezala."
    },
    {
     "mota": "irudia",
     "oina": "Energia elastikoaren eboluzioa marruskadura dagoenean.",
     "src": "media/irudiak/ca934cdb29f30449.svg",
     "zabalera": 252
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azaldu atzerapen-puntuen inguruan irudiko <math display=\"inline\"><mi>E</mi></math>-ren grafikoak duen tankera."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "Oreka egonkorra eta ezegonkorra"
    },
    {
     "mota": "testua",
     "html": "Energia-diagrametan ikusitako higidura-tarteak nolakoak diren kontuan hartuz, oreka-puntuak oso desberdinak izan daitezkeela frogatuko dugu. Minimoei dagozkien oreka-puntuak <strong>egonkorrak</strong>  dira: perturbazio txiki batek oreka apurtzen badu, partikula ez da urruntzen oreka-puntuaren ingurune txiki batetik."
    },
    {
     "mota": "irudia",
     "oina": "Indarraren noranzkoa oreka-puntuen inguruan.",
     "src": "media/irudiak/239cecc8ef2d7cd1.svg",
     "zabalera": 310
    },
    {
     "mota": "testua",
     "html": "Maximoak eta inflexio-puntuak, ordea, oso bestelakoak dira. Inguruko orbitek ez daude potentzial putzu batean eta ez dute zertan oreka-puntuaren inguruan geratu. Hasieran perturbazio oso txikia bada ere, oreka-puntutik abiatuz gero, ez dago inolako oztoporik handik alde egiteko: oreka <strong>ezegonkorra da</strong>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Oreka-puntuen egonkortasuna dimentsio bakarreko problemetan aztertzeko, deribatuaren esangura geometrikoa erabil daiteke: <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> indarra energia potentzialarekiko tangentearen maldaren kontrakoa da. Marraztu 1.14 irudiko kasuan oreka-puntu batetik hurbil dagoen partikulak pairatzen duen indarraren noranzkoa."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "Oszilazio txikiak eta osziladore harmonikoa"
    },
    {
     "mota": "testua",
     "html": "Eman dezagun energia potentzialak minimo koadratiko bat duela <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math>  puntuan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oreka-puntuaren oso hurbil higidura nolakoa den ikusteko, energia potentziala minimoaren inguruan garatuko dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mi>⋯</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Hurbilketa parabolikoa energia potentzialaren minimo baten inguruan.",
     "src": "media/irudiak/9ee332d42a2d21c9.svg",
     "zabalera": 275
    },
    {
     "mota": "testua",
     "html": "Taylorren garapen honen lehen gaia konstantea da, eta bere balioa jatorrizko energia potentzialari kenduz nulua izatea lor dezakegu. Bigarren gaia nulua da, <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> puntuan minimo bat dagoelako; eta arrazoi berberagatik bigarren gaiaren koefizientea positiboa da <math display=\"inline\"><mrow><mi>k</mi><mo>≡</mo><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn></mrow></math>. Minimoaren inguruko oszilazioak txikiak badira, hurrengo gai guztiak arbuiagarriak izango dira eta, beraz, oso hurbilketa onean energia potentziala koadratikoa dela jo dezakegu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Abzisaren jatorria <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> puntura eramaten badugu, (1.89) energia potentziala berreskuratzen dugu eta hango problema baliokidearen osziladore harmonikoarena izango da partikularen higidura. Horrexegatik esaten da askotan fisikan osziladore harmonikoarena dela higidurarik garrantzitsuena: <em>energia-potentzialaren minimo koadratiko bati dagokion oreka-puntu egonkorraren inguruko higidura deskribatzen du osziladore harmonikoak</em>. Minimoaren inguruan energia potentziala (1.127) parabola koadratikoarekin ordezkatzen dugu eta indarra bere hurbilketa linealarekin (hauxe da Hookeren legea):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>−</mi><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Partikula-sistemak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Orain arte, Newtonen hirugarren legea enuntziatzean izan ezik, partikula puntual bakarraren zinematika eta dinamika aztertu ditugu. Has gaitezen ikusten partikula gehiago daudenean erabil daitezkeen kontzeptuak eta emaitzak. Sisteman <math display=\"inline\"><mi>N</mi></math> partikula puntual egongo dira eta <math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>N</mi></mrow></math> azpindizea erabiliko da partikulak zenbatzeko. Adibidez, <math display=\"inline\"><mi>i</mi></math> partikularen posizio-bektorea <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub></math> izango da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Magnitude kolektiboak"
    },
    {
     "mota": "testua",
     "html": "Sistema osoari dagozkion magnitude zinematikoak partikula guztienak batuz definitzen dira:"
    },
    {
     "mota": "ezezaguna",
     "izena": "kolektibo-taula"
    },
    {
     "mota": "testua",
     "html": "Indar eta indar-momentu osoen kasuan sinplifikazio bat gertatzen da Newtonen hirugarren legearen ondorioz. Hau ikusteko, <math display=\"inline\"><mi>i</mi></math> partikulak pairatzen dituen indarrak sailkatu egingo ditugu. Alde batetik, sistemako beste partikulek eragindakoak <strong>barne-indarrak</strong> izango dira: <math display=\"inline\"><mi>j</mi></math> partikulak <math display=\"inline\"><mi>i</mi></math> partikulan eragindakoari <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub></math> deitu diogu. Bestalde, <math display=\"inline\"><mi>i</mi></math> partikulak pairatutako <math display=\"inline\"><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup></math>  <strong>kanpo-indarra</strong>, jatorria sistematik at duten eragin guztien ondorioa da. Gainezarmenaren printzipioaren ondorioz, honela idazten da <math display=\"inline\"><mi>i</mi></math> partikularen gainean aplikaturiko indar osoa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi></msub><mo>=</mo><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>+</mo><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orain, sistemak pairatzen duen indar osoan akzio-erreakzio bikote bakoitzeko <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub></math> eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> bildu ondoren, elkarren kontrakoak direla (<math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>) kontuan hartzen badugu,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>+</mo><munder><mo>∑</mo><mrow><mn>1</mn><mo>≤</mo><mi>i</mi><mo>&lt;</mo><mi>j</mi><mo>≤</mo><mi>N</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "lortzen da. Beraz, <em>sistemak pairatzen duen indar osoa kanpo-indar osoaren berdina da</em>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>≡</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "barne-indarren batura zero baita. Antzeko gauza bat gertatzen da barne-indarren momentuekin:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>+</mo><munder><mo>∑</mo><mrow><mn>1</mn><mo>≤</mo><mi>i</mi><mo>&lt;</mo><mi>j</mi><mo>≤</mo><mi>N</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Hemen, zera erabili dugu: akzio eta erreakzioaren printzipioaren ondorioz, <math display=\"inline\"><mi>i</mi></math> partikulak <math display=\"inline\"><mi>j</mi></math> delakoaren gainean eragiten duen <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> indarra bi partikulak lotzen dituen lerro zuzenarekiko paraleloa da. Ondorioz,"
    },
    {
     "mota": "testua",
     "html": "sistemak pairatzen duen indar-momentu osoa kanpo-indarren momentu osoaren berdina da"
    },
    {
     "mota": "testua",
     "html": ":"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑵</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>≡</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Potentziarekin (eta lanarekin), berriz, ez da horrelakorik gertatzen. Barne-indarren potentzia osoa ez da beti nulua. Askotan barne-indarrek lan egiten dute eta, hortaz, potentzia eta lan osoak bi zati egongo dira, oro har:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝒫</mi><mo>=</mo><msup><mi mathvariant=\"script\">𝒫</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msup><mi mathvariant=\"script\">𝒫</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>≡</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Eboluzio-ekuazio kolektiboak"
    },
    {
     "mota": "testua",
     "html": "Sistemaren eboluzio-ekuazio kolektiboak zuzenean lortzen dira magnitude kolektiboen definizioa eta Newtonen hirugarren legeak ekarritako sinplifikazioak kontuan hartuz:"
    },
    {
     "mota": "ezezaguna",
     "izena": "kolektibo-taula"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kontserbazio-printzipioak"
    },
    {
     "mota": "testua",
     "html": "Lortu ditugun eboluzio-ekuazioak kontuan hartuz, argi dago sistemaren momentu lineal (angeluar) osoa higidura-konstantea izango da baldin eta soilik baldin kanpo-indarren (kanpo-indarren momentuen) batura nulua bada. Bestalde, sistema <strong>bakartua</strong> bada, hau da, ez badu inolako kanpo-eraginik pairatzen, argi dago kanpo-indar osoa eta kanpo-indarren momentu osoa nuluak direla eta, ondorioz, momentu lineala eta angeluarra kontserbatu egiten direla. Hauexek dira, bada, <strong>momentu linealaren eta angeluarraren kontserbazio-printzipioak</strong>: <em>partikula-sistema bakartu baten momentu lineal eta angeluar osoak higidura-konstanteak dira</em>."
    },
    {
     "mota": "testua",
     "html": "Kontuan hartu <em>sistema bakartuetan energia zinetikoa ez dela beti higidura-konstantea</em>, nahiz eta kanpo-indarren potentzia nulua izan. Barne-indarrek lan egiten badute, energia zinetikoa aldakorra izango da."
    },
    {
     "mota": "testua",
     "html": "Badago esplizituki gutxitan aipatzen den beste kontserbazio-printzipio bat: masa osoarena. 3. gaian ikusiko dugun bezala, ez da beti betetzen fisika erlatibistan, baina bai mekanika newtondarrean: <em>sistema bakartu baten masa osoa ez da aldatzen denborarekin</em>, sistemako partikulen kopurua edota masa aldatzen bada ere."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Talkak"
    },
    {
     "mota": "testua",
     "html": "Talka oso prozesu orokorra da, fisikan garrantzi handia duena. Elkarrekintzak arbuiagarriak ez diren bitartean, sistema bakartu bateko partikulen momentu lineala, angeluarra eta energia zinetikoa aldatu egiten dira, partikulek elkarren gainean eragiten dituzten barne-indarren ondorioz. Baina sistema bakartua denez, momentu lineala eta angeluarra kontserbatzen dira eta ez dago kanpo-indarren lanik. Beraz, partikulen arteko elkarrekintza hasi aurretik eta ondoren sistemaren magnitudeek dituzten balioak 1 eta 2 azpindizeekin bereizten baditugu, hurrenez hurren, hauexek dira talka deskribatzen duten lege kolektiboak:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑷</mi><mn>2</mn></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑷</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑳</mi><mn>2</mn></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑳</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub><mo>+</mo><mi>Q</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi>Q</mi></math>  <strong>faktorea</strong> prozesu osoan barne-indarrek egindako lana den:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>Q</mi><mo>≡</mo><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><msup><mi mathvariant=\"script\">𝒫</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>d</mi><mi>t</mi><mo>=</mo><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Barne-indarren lana nolakoa den arabera, honela sailkatzen dira talkak:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Talka endoenergetikoa.</strong> Barne-indarren lana negatiboa da (<math display=\"inline\"><mrow><mi>Q</mi><mo>&lt;</mo><mn>0</mn></mrow></math>): energia zinetikoa galtzen da, <math display=\"inline\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math>."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Talka exoenergetikoa.</strong> Barne-indarren lana positiboa da (<math display=\"inline\"><mrow><mi>Q</mi><mo>&gt;</mo><mn>0</mn></mrow></math>) eta bestelako energia erabiltzen da energia zinetikoa handitzeko: <math display=\"inline\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>&gt;</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math>."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Talka elastikoa.</strong> Barne-indarrek ez dute lanik egiten (<math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>0</mn></mrow></math>) eta, ondorioz, energia zinetikoa kontserbatu egiten da: <math display=\"inline\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math>."
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu bi partikulak elkarrekin topo egitean loturik geratzen badira, talka ezin dela elastikoa izan."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Masa-zentroa"
    },
    {
     "mota": "testua",
     "html": "Partikula-sistema baten masa-zentroa hurrengo posizio-bektoreak definituriko puntu geometrikoa da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>≡</mo><mfrac><mi mathvariant=\"bold-italic\">𝑮</mi><mi>M</mi></mfrac><mo>=</mo><mfrac><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>i</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub></mrow><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>i</mi></msub></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "1.5.1 eta 1.5.2 ataletako definizioak eta eboluzio-ekuazioak kontuan hartuz, hauxe lortzen dugu goiko ekuaziotik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑮</mi><mo>=</mo><mi>M</mi><mi mathvariant=\"bold-italic\">𝑹</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑷</mi><mo>=</mo><mi>M</mi><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑷</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>M</mi><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau da, <em>sistemaren masa osoa izanik kanpo-indar osoa pairatuko lukeen alegiazko partikula bat bezalaxe higitzen da masa-zentroa</em>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egia al da alegiazko partikula baliokide horren momentu angeluarraren deribatua sistemak pairatutako kanpo-indarren momentu osoaren berdina dela? Zergatik?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Gai honetan, inplizituki, <strong>laborategiko sistema</strong> erabili dugu kalkulu guztiak egiteko. Definizioz, <strong>masa-zentroaren sistema</strong> hurrengo bi baldintzak betetzen dituena da:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Jatorria masa-zentroan dago beti."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Ardatzak ez dira biratzen: laborategiko sisteman (eta, beraz, sistema inertzial guztietan) duten orientazioa konstantea da."
     ]
    },
    {
     "mota": "testua",
     "html": "Masa-zentroaren higidura-ekuazioaren ondorioz, argi dago gehienetan masa-zentroa azeleraturik dagoela eta, hortaz, masa-zentroaren sistema ez dela inertziala."
    },
    {
     "mota": "irudia",
     "oina": "Masa-zentroaren sistema.",
     "src": "media/irudiak/9616981cef2be732.svg",
     "zabalera": 265
    },
    {
     "mota": "testua",
     "html": "Ardatzen orientazio erlatiboa aldatzen ez denez, laborategiko eta masa-zentroaren sistemen arteko transformazioak hurrengoak direla onartuko dugu, praktikak ondo frogatu baitu horrela gertatzen dela abiadurak ez badira oso handiak:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>t</mi><mo>=</mo><msup><mi>t</mi><mo>*</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>=</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi><mo>*</mo></msubsup><mo>+</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi><mo>*</mo></msubsup><mo>+</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mi>i</mi></msub><mo>=</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mi>i</mi><mo>*</mo></msubsup><mo>+</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>m</mi><mi>i</mi></msub><mo>=</mo><msubsup><mi>m</mi><mi>i</mi><mo>*</mo></msubsup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Transformazio hauek eta masa-zentroaren definizioa erabiliz, masa-zentroarekiko masa-momentua nulua dela ikusten dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑮</mi><mo>*</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msubsup><mi>m</mi><mi>i</mi><mo>*</mo></msubsup><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi><mo>*</mo></msubsup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>i</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑮</mi><mo>−</mo><mi>M</mi><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Propietate hau ez da harrigarria, masa-zentroa bere sistemako jatorrian dago eta. Baina propietate hau zuzenean deribatuz —edo, (1.152) erabiliz— lortzen den"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑷</mi><mo>*</mo></msup><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "emaitza interesgarriagoa da: <em>masa-zentroaren sisteman momentu lineal osoa nulua da</em>. Izan ere, propietate hau masa-zentroaren sistemaren definiziotzat har dezakegu."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu <em>laborategiko sisteman neurturiko momentu angeluarra (energia zinetikoa), masa-zentroaren sisteman neurtzen den momentu angeluar (energia zinetiko)  <strong>intrintsekoa</strong> eta sistemaren masa osoa izanik masa-zentroarekin batera higitzen den alegiazko partikularena gehituz lortzen dela</em>. Ondorioz, hauxe dugu: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑷</mi><mo>=</mo><mi>M</mi><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑳</mi><mo>*</mo></msup><mo>+</mo><mi>M</mi><mi mathvariant=\"bold-italic\">𝑹</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑳</mi><mo>*</mo></msup><mo>+</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑷</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msup><mi>T</mi><mo>*</mo></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><msup><mi>T</mi><mo>*</mo></msup><mo>+</mo><mfrac><msup><mi mathvariant=\"bold-italic\">𝑷</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>M</mi></mrow></mfrac><mi>.</mi></mrow></math> Testuliburu batzuetan <strong>Königen teorema</strong> deitzen zaio azken emaitzari."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bi gorputzen problema"
    },
    {
     "mota": "testua",
     "html": "Partikula-sistemarik errazena bi partikula puntualez osaturiko sistema bakartua da. Masa-zentroa, beraz, abiadura konstantez eta lerro zuzen batean higitzen da."
    },
    {
     "mota": "irudia",
     "oina": "Bi gorputzen problemaren geometria.",
     "src": "media/irudiak/b6f40055c25b1086.svg",
     "zabalera": 306
    },
    {
     "mota": "testua",
     "html": "Masa-zentroaren sistema inertziala denez, ezin egokiagoa da higidura aztertzeko, baina kasu berezi honetan beste posibilitate bat dago, zeren masa-zentroaren sisteman neurtutako <math display=\"inline\"><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi><mo>*</mo></msubsup></math> posizio-bektoreak eta partikulen arteko posizio erlatiboa neurtzen duen"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>≡</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>=</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn><mo>*</mo></msubsup><mo>−</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn><mo>*</mo></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "bektorea (edo <math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>≡</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>=</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn><mo>*</mo></msubsup><mo>−</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn><mo>*</mo></msubsup></mrow></math> delakoa) elkarrekiko proportzionalak, hau da, paraleloak baitira."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu masa-zentroan neurtutako posizio-bektoreen eta posizio erlatiboaren arteko erlazioa hauxe dela: <math display=\"block\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn><mo>*</mo></msubsup><mo>=</mo><mi>−</mi><mfrac><msub><mi>m</mi><mn>2</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn><mo>*</mo></msubsup><mo>=</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ondorioz, partikula bakoitzaren masa-zentroarekiko higiduraren problema eta higidura erlatiboarena (ia) baliokideak dira, eta azken hau erraz planteatzen da, edozein sistema inertzialetan, jarraian ikusiko dugun moduan."
    },
    {
     "mota": "testua",
     "html": "Newtonen hirugarren legearen ondorioz, 1 partikulak 2-ren gainean eragiten duen indarra <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>≡</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>12</mn></msub></mrow></math> bada, berak pairatzen duena <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>21</mn></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝑭</mi></mrow></math> eta, beraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>−</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>=</mo><mfrac><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>12</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><mo>−</mo><mfrac><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>21</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msub><mi>m</mi><mn>2</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>m</mi><mn>1</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sistemaren <math display=\"inline\"><mi>m</mi></math>  <strong>masa laburbildua</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mo>≡</mo><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mi>m</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><msub><mi>m</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>m</mi><mn>2</mn></msub></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "moduan definitzen badugu, higidura erlatiboaren ekuazioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da: <em>higidura erlatiboaren problema eta erreferentzia-sistema inertzial batean higitzen den <math display=\"inline\"><mi>m</mi></math> masako partikula batena baliokideak dira</em>. Sistemaren masa laburbildua duen partikula baliokide egokiaren problemara laburtzen da bi gorputzen higidura erlatiboarena."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Talka elastikoak bi gorputzen probleman"
    },
    {
     "mota": "testua",
     "html": "Bi gorputzen problemaren kasu berezi interesgarri bat, esperimentu askotan gertatzen dena, kontsideratuko dugu atal honetan: 1 partikula <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub></math> momentu linealarekin bidaltzen da pausagunean dagoen 2-ren kontra. Lehen partikula <strong>jaurtigaia</strong> da eta bigarrena <strong>jomuga</strong>. Talkan izan ezik, bi partikulak askeak dira eta euren momentu linealak konstanteak. Talka ondoren partikulen momentu linealak <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>2</mn></msub></math> dira, hurrenez hurren. Jaurtigaiaren desbideratzea neurtzen duen <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> angelua <strong>sakabanatze-angelua</strong> deitzen da eta jomugaren norabidea ematen duen <math display=\"inline\"><mi>α</mi></math> delakoa (ikus 1.21 irudia) <strong>atzerapen-angelua</strong>."
    },
    {
     "mota": "azpititulua",
     "testua": "Masa-zentroaren sistema"
    },
    {
     "mota": "testua",
     "html": "Talka aztertzeko masa-zentroaren sistemaz baliatuko gara, bertan dena baita askoz errazagoa. Hasteko, momentu lineal osoa nulua denez, <math display=\"inline\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn><mo>*</mo></msubsup><mo>+</mo><msubsup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>2</mn><mo>*</mo></msubsup><mo>=</mo><msubsup><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn><mo>*</mo></msubsup><mo>+</mo><msubsup><mi mathvariant=\"bold-italic\">𝒒</mi><mn>2</mn><mo>*</mo></msubsup><mo>=</mo><mn>0</mn></mrow></math>, talka aurretik lehen partikularena <math display=\"inline\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn><mo>*</mo></msubsup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup></mrow></math> bada bestearena <math display=\"inline\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>2</mn><mo>*</mo></msubsup><mo>=</mo><mi>−</mi><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup></mrow></math> izango da; modu berean, talka ondoren momentuak elkarren kontrakoak dira eta modu honetan idazten da momentu linealaren kontserbazio-printzipioa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn><mo>*</mo></msubsup><mo>=</mo><mi>−</mi><msubsup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>2</mn><mo>*</mo></msubsup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msubsup><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn><mo>*</mo></msubsup><mo>=</mo><mi>−</mi><msubsup><mi mathvariant=\"bold-italic\">𝒒</mi><mn>2</mn><mo>*</mo></msubsup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒒</mi><mo>*</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Jaurtigaia eta jomuga talka aurretik (ezkerraldean) eta ondoren (eskuinean).",
     "src": "media/irudiak/40ca10f3fda845e1.svg",
     "zabalera": 288
    },
    {
     "mota": "testua",
     "html": "Gainera, talka elastikoa denez, energia zinetikoa kontserbatu egingo da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><msubsup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn><msup><mo>*</mo><mn>2</mn></msup></msubsup><mrow><mn>2</mn><msub><mi>m</mi><mn>1</mn></msub></mrow></mfrac><mo>+</mo><mfrac><msubsup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>2</mn><msup><mo>*</mo><mn>2</mn></msup></msubsup><mrow><mn>2</mn><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mo>=</mo><mfrac><msup><mi mathvariant=\"bold-italic\">𝒑</mi><msup><mo>*</mo><mn>2</mn></msup></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><msubsup><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn><msup><mo>*</mo><mn>2</mn></msup></msubsup><mrow><mn>2</mn><msub><mi>m</mi><mn>1</mn></msub></mrow></mfrac><mo>+</mo><mfrac><msubsup><mi mathvariant=\"bold-italic\">𝒒</mi><mn>2</mn><msup><mo>*</mo><mn>2</mn></msup></msubsup><mrow><mn>2</mn><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mo>=</mo><mfrac><msup><mi mathvariant=\"bold-italic\">𝒒</mi><msup><mo>*</mo><mn>2</mn></msup></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi>m</mi></math> sistemaren masa laburbildua den. Hemen ikusten dugunez, energia zinetikoaren kontserbazioa <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup></math> eta <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝒒</mi><mo>*</mo></msup></math> bektoreen moduluak berdinak izatearen baliokidea da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>p</mi><mo>*</mo></msup><mo>=</mo><msup><mi>q</mi><mo>*</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Talka elastikoa masa-zentroaren sisteman.",
     "src": "media/irudiak/5c023b74b894e8a0.svg",
     "zabalera": 266
    },
    {
     "mota": "testua",
     "html": "Masa-zentroaren sisteman talka oso erraza dela dioskute (1.169) eta (1.171) kontserbazio-printzipioek: bi partikulen momentuak elkarren kontrakoak dira talka aurretik eta ondoren, euren moduluak ez dira aldatzen, biraketa hutsa egiten dute. Azpimarratu behar da kontserbazio-printzipioak soilik erabiliz ezin aurki daitekeela zein izan den aipaturiko biraketa eta, beste informaziorik ezean, sakabanatze-angelua edonolakoa izan daitekeela: <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mo>≤</mo><mi>π</mi></mrow></math>. Baina argi dago sakabanatze-angelua ezagutuz gero atzerapen-angelua zuzenean lortzen dela:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>α</mi><mo>*</mo></msup><mo>=</mo><mi>π</mi><mo>−</mo><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "azpititulua",
     "testua": "Laborategiko sistema"
    },
    {
     "mota": "testua",
     "html": "Laborategiko sisteman, ordea, posibilitate gehiago daude eta hemen ikusiko dugu nola adierazten diren datuen eta <math display=\"inline\"><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></math> parametroaren funtzioan. Hasteko, (1.152) ondorioz masa-zentroaren abiadura"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "dela erabiliko dugu laborategiaren eta masa-zentroaren arteko (1.156) transformaziotik momentu linealen arteko hurrengo erlazioa lortzeko:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><mfrac><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn></msub><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒒</mi><mo>*</mo></msup><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><mfrac><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lehen ekuaziotik <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub></math> askatuz lortzen dena,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow><msub><mi>m</mi><mn>2</mn></msub></mfrac><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "aurreko ekuazio bietan sartuz hurrengo adierazpenak geratzen zaizkigu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup><mo>+</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn></msub><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒒</mi><mo>*</mo></msup><mo>+</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Laborategiaren eta masa-zentroaren arteko transformazioak.",
     "src": "media/irudiak/d6e006a9c75d2199.svg",
     "zabalera": 340
    },
    {
     "mota": "irudia",
     "oina": "Laborategiko sisteman egindako azterketa.",
     "src": "media/irudiak/c781034ed74e227c.svg",
     "zabalera": 221
    },
    {
     "mota": "testua",
     "html": "Atal honetako beste kalkulu guztiak era analitiko hutsean egin badaitezke ere, beraien adierazpen grafikoa lagungarria izango da magnitudeen arteko erlazioak hobeto ikusteko eta kalkuluak errazteko. Hasteko, 1.23 irudian ikusten ditugu (1.176)–(1.177) transformazio-ekuazioak. Gero, 1.24 irudian erakusten dira sakabanatze- eta atzerapen-angeluen definizioak eta laborategian neurtzen den momentu linealaren kontserbazio-legea:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Talka elastikoaren grafiko osoa.",
     "src": "media/irudiak/764bd854d9592d28.svg",
     "zabalera": 212
    },
    {
     "mota": "testua",
     "html": "Orain, aurreko bi irudiak batean bilduz, 1.25 lortzen da. Gainera, bertan masa-zentroaren sisteman neurtutako <math display=\"inline\"><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></math> sakabanatze-angelua ere marraztu da."
    },
    {
     "mota": "testua",
     "html": "Energia zinetikoaren kontserbazioa adierazten duen <math display=\"inline\"><mrow><msup><mi>p</mi><mo>*</mo></msup><mo>=</mo><msup><mi>q</mi><mo>*</mo></msup></mrow></math> erlazioaz baliatuz, eskuineko triangelua isoszelea dela ikusten dugu eta, beraz, honela adierazten dira laborategian neurturiko jomugaren ezaugarriak talka ondoren:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>α</mi><mo>=</mo><mfrac><mrow><mi>π</mi><mo>−</mo><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mo>+</mo><mn>2</mn><mi>α</mi><mo>=</mo><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>q</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><msup><mi>p</mi><mo>*</mo></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mi>/</mi><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lehenago esan bezala, masa-zentroaren sisteman partikula bakoitzaren energia zinetikoa kontserbatzen da, baina laborategian gauzak oso bestelakoak dira: hasieran"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><msubsup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn><mn>2</mn></msubsup><mrow><mn>2</mn><msub><mi>m</mi><mn>1</mn></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>p</mi><mrow><mi>*</mi><mn>2</mn></mrow></msup></mrow><mrow><mn>2</mn><msub><mi>m</mi><mn>1</mn></msub><msubsup><mi>m</mi><mn>2</mn><mn>2</mn></msubsup></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "energia zinetiko osoa jaurtigaiarena ba ere, talkan jomuga higitzen hasten da eta energia zinetikoa xurgatzen du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><mfrac><msubsup><mi mathvariant=\"bold-italic\">𝒒</mi><mn>2</mn><mn>2</mn></msubsup><mrow><mn>2</mn><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>p</mi><mrow><mi>*</mi><mn>2</mn></mrow></msup></mrow><msub><mi>m</mi><mn>2</mn></msub></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mi>/</mi><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Jomugak xurgatutako energia zinetikoaren proportzioa,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>T</mi><mn>2</mn></msub><mi>T</mi></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mi>/</mi><mn>2</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "maximoa da <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mo>=</mo><mi>π</mi></mrow></math> denean, hau da, buruz buruko talketan. Horrelako talka errazetan gertatzen den energia zinetikoaren transferentzia maximoa,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>≡</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>T</mi><mn>2</mn></msub><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mfrac><mrow><mn>4</mn><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msub><mi>m</mi><mn>1</mn></msub><mi>/</mi><msub><mi>m</mi><mn>2</mn></msub></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><mi>/</mi><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "bi partikulen masen zatiduraren menpekoa da, 1.26 irudian erakusten den legez."
    },
    {
     "mota": "irudia",
     "oina": "Energia zinetikoaren transferentzia maximoa.",
     "src": "media/irudiak/595a0f121ef92bcb.svg",
     "zabalera": 280
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Jaurtigaia jomuga baino askoz arinagoa bada, <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≪</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, azken honen momentu linealaren aldaketa txikia izango da. Jaurtigaiaren energia zinetikoa berdintsua izango da, baina abiadura kontrakoa, gutxi gorabehera."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Jaurtigaia jomuga baino askoz astunagoa bada, <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≫</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, bere momentu linealaren aldaketa txikia izango da: bere energia zinetikoa eta abiadurak ia ez dira aldatuko."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Jaurtigaiaren eta jomugaren masak berdinak direnean, <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, buruz buruko talkan energia zinetikoaren transferentzia maximoa izango da: jaurtigaia geldi geratuko da eta jomugak energia zinetiko osoa eramango du."
     ]
    },
    {
     "mota": "irudia",
     "oina": "Sakabanatze-angeluen arteko erlazioa.",
     "src": "media/irudiak/bc344814997904ae.svg",
     "zabalera": 163
    },
    {
     "mota": "testua",
     "html": "Laborategian eta masa-zentroan neurtutako sakabanatze-angeluen arteko erlazioa aurkitzeko, 1.27 irudiaz eta (1.171) emaitzaz balia gaitezke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><msup><mi>p</mi><mo>*</mo></msup><mo>+</mo><mi>d</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>q</mi><mo>*</mo></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow><mrow><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><msup><mi>p</mi><mo>*</mo></msup><mo>+</mo><msup><mi>q</mi><mo>*</mo></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow><mrow><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Emaitza honen ondorioak ulertzeko trigonometria erabil badaiteke ere, azterketa erraz egiten da modu grafikoan, 1.28 irudiaz baliatuz, jarraian ikusten den bezala."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Jaurtigaia jomuga arinagoa bada, <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>&lt;</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, lehenengoa da gehien desbideratzen dena. Ondorioz, <math display=\"inline\"><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></math> 0-tik <math display=\"inline\"><mi>π</mi></math>-ra doan heinean, gauza bera egiten du laborategian neurtutako sakabanatze-angeluak, balio guztiak eduki baititzake: <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi mathvariant=\"normal\">Φ</mi><mo>≤</mo><mi>π</mi></mrow></math>."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Jaurtigai eta jomugaren masak berdinak direnean, <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, bi sistemetan neurturiko sakabanatze-angeluen arteko erlazioa erraza da: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow><mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mi>/</mi><mn>2</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mi>/</mi><mn>2</mn><mi>.</mi></mrow></math> Beraz, <math display=\"inline\"><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></math> angelua 0-tik <math display=\"inline\"><mi>π</mi></math>-ra doan bitartean <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> delakoa 0-tik <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>-ra joango da. Gainera, (1.179) emaitzaren ondorioz, talka ostean bi partikulak norabide elkarzutetan higitzen dira: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>+</mo><mi>α</mi><mo>=</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
     ]
    },
    {
     "mota": "irudia",
     "oina": "Sakabanatze-angelua laborategian eta masa-zentroaren sisteman.",
     "src": "media/irudiak/1721d0dfd3de5cd1.svg",
     "zabalera": 159
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Jaurtigaia jomuga baino astunagoa bada, <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>&gt;</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></math> handitzean <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> angelua ere handituz doa <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn></msub></math> bektorea <math display=\"inline\"><msup><mi>q</mi><mo>*</mo></msup></math> erradioko zirkunferentziarekiko tangentea izan arte; gero txikituz doa, <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mo>=</mo><mi>π</mi></mrow></math> denean <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mn>0</mn></mrow></math> berriro izan arte. <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> angelua maximoa denean <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mi>/</mi><msub><mi>m</mi><mn>2</mn></msub><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup></mrow></math>, <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝒒</mi><mo>*</mo></msup></math> eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn></msub></math> bektoreek osaturiko triangelua zuzena denez, hauxe dugu: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><msup><mi>q</mi><mo>*</mo></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><msup><mi>p</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac><mo>&lt;</mo><mn>1</mn><mi>.</mi></mrow></math> Jakina, zenbat eta astunagoa jaurtigaia, hainbat eta txikiagoa bere desbideratzea."
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lortu zuzenean 1.28 iruditik (1.186) emaitza."
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
     "testua": "Muga-abiadura"
    },
    {
     "mota": "testua",
     "html": "<em>Partikula bat norabide bertikalean higitzen ari da. Grabitateaz gain,\nabiadurarekiko proportzionala den marruskadura-indar bat pairatzen du:\n<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi>−</mi><mi>γ</mi><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math>. Froga ezazu denbora handituz doanean abiadurak\nmuga-balio batera jotzen duela. Zein da muga-balio hori?</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatz bertikala <em>beherantz</em> aukeratu ondoren,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>v</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>γ</mi><mi>m</mi><mi>v</mi><mo>+</mo><mi>m</mi><mi>g</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "higidura-ekuazioan aldagaiak banantzen baditugu (gogoratu 1.4.3 atala),"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>g</mi><mo>−</mo><mi>γ</mi><mi>v</mi></mrow></mfrac><mo>=</mo><mi>d</mi><mi>t</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "integrazio baten bidez hauxe lortzen dugu (marruskadura-indarraren <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> dela kontuan hartuz):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>v</mi><mn>0</mn></msub><mi>v</mi></msubsup><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>g</mi><mo>−</mo><mi>γ</mi><mi>v</mi></mrow></mfrac><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>t</mi></msubsup><mi>d</mi><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mn>0</mn></msub><mo>≡</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>−</mi><mfrac><mn>1</mn><mi>γ</mi></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>g</mi><mo>−</mo><mi>γ</mi><mi>v</mi></mrow><mrow><mi>g</mi><mo>−</mo><mi>γ</mi><msub><mi>v</mi><mn>0</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>t</mi><mo>,</mo></mrow></math> <img class=\"formula formula-d\" src=\"media/formulak/50a898858de79c5f.svg\" alt=\"v = g/gamma + (v_0 - g/gamma) e^(-gamma t) quad #math.attach(sym.arrow.r.long, t: $t -&gt; oo$) quad g/gamma.\" style=\"width:17.455em;height:2.980em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Muga-abiadura konstantea denez, higidura-ekuazioan <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> eginez ere lor daiteke zuzenean; baina soluzio guztiek horra jotzen dutela frogatzeko, higidura-ekuazioa integratu behar da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bulkada"
    },
    {
     "mota": "testua",
     "html": "<em>Irudian agertzen diren bi masak geldi daude mahai leun baten gainean,\nhagatxo arin batez loturik. Hagatxoak <math display=\"inline\"><mi>I</mi></math> bulkada horizontala pairatzen badu\nerakusten den moduan, nolakoa da sistemaren higidura?</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/bb05ff7a376cda35.svg",
     "zabalera": 219
    },
    {
     "mota": "testua",
     "html": "Masa-zentroaren eta <math display=\"inline\"><mi>M</mi></math>-ren arteko <math display=\"inline\"><mi>X</mi></math> distantzia honela kalkulatzen da (1.159) erabiliz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>M</mi><mi>X</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>−</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>X</mi><mo>=</mo><mfrac><mi>m</mi><mrow><mi>m</mi><mo>+</mo><mi>M</mi></mrow></mfrac><mi>L</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eman dezagun talka ondoren masa-zentroaren abiadura <math display=\"inline\"><mi>V</mi></math> dela (<math display=\"inline\"><mi>I</mi></math> bulkadaren norabidean egongo da, noski) eta hagatxoaren abiadura angeluarra <math display=\"inline\"><mi>ω</mi></math>. Momentu lineal berria momentu linealaren aldaketaren eta bulkadaren berdina izango da (ikus 1.3.1 atala):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>V</mi><mo>=</mo><mi>I</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo>=</mo><mfrac><mi>I</mi><mrow><mi>m</mi><mo>+</mo><mi>M</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Era berean, 1.13 ariketaren ondorioz, masa-zentroaren inguruko <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bulkada angeluarra momentu angeluarraren aldaketaren eta, beraz, momentu angeluar berriaren berdina da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>M</mi><msup><mi>X</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>X</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>ω</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>M</mi></mrow><mrow><mi>m</mi><mo>+</mo><mi>M</mi></mrow></mfrac><msup><mi>L</mi><mn>2</mn></msup><mi>ω</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>L</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>m</mi><mi>M</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mi>I</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oreka erlatiboa eta adarkatzea"
    },
    {
     "mota": "testua",
     "html": "<em>Irudiko zirkunferentzia <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez ari da biratzen\ndiametro bertikalaren inguruan eta <math display=\"inline\"><mi>m</mi></math> masako partikula puntuala zirkunferentzian\nbarrena higi daiteke marruskadurarik gabe. Non egon daiteke partikula\nzirkunferentziarekiko pausagune erlatiboan? Noiz da egonkorra oreka erlatibo hori?</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/d013b2ecadf85ed8.svg",
     "zabalera": 114
    },
    {
     "mota": "testua",
     "html": "Irudiko koordenatu polar esferikoak erabiliz, azelerazioaren osagai tangentea (B.8) emaitzan <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>R</mi></mrow></math> eta <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ω</mi></mrow></math> eginez lortzen da, eta higidura tangentearen ekuazioa hauxe da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>m</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "edota"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>m</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><mfrac><mi>g</mi><mi>R</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da. Higidura-ekuazio hau"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>g</mi><mi>R</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "moduan idazten denez, <math display=\"inline\"><mi>θ</mi></math> angeluaren dimentsioak ahaztuta, zuzen batean"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>g</mi><mi>R</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "potentzialean higitzen den partikularen problema baliokidearen oreka azter dezakegu."
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioaren grafikoa abiadura angeluarra aldatzean.",
     "src": "media/irudiak/b11ac1bdfac6c5ae.svg",
     "zabalera": 259
    },
    {
     "mota": "testua",
     "html": "Oreka-puntuak <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> mutur-puntuetan, hau da, hariarekin batera biratzen den sistema ez-inertzialean indar tangentea nulua denean, gertatzen dira: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> baldintza betetzen denean, hau da, beheko <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> eta goiko <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi></mrow></math> puntuetan, edo <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mi>g</mi><mi>/</mi><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math> dugunean; baina azken hau bakarrik gerta daiteke zenbait kasutan, kosinuaren balio absolutua ez baita inoiz 1 baino handiagoa."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>g</mi><mi>R</mi></mfrac><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mn>2</mn><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "adierazpenak frogatzen duenez, goiko puntuan maximo bat dago,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>g</mi><mi>R</mi></mfrac><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta oreka ezegonkorra da; beheko puntuan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>g</mi><mi>R</mi></mfrac><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "minimoa (maximoa) dago <math display=\"inline\"><mrow><mi>ω</mi><mo>&lt;</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>  (<math display=\"inline\"><mrow><mi>ω</mi><mo>&gt;</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>) betetzen bada hurrengo definizioarekin:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>≡</mo><msqrt><mfrac><mi>g</mi><mi>R</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, abiadura angeluarra txikia bada, beheko puntua da egonkorra, espero bezala; baina, <math display=\"inline\"><mi>ω</mi></math> handitzean, ezegonkor bihurtzen da <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> balioan. Gainera, balio berean sortzen diren"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>θ</mi><mo>±</mo></msub><mo>=</mo><mi>±</mi><mrow><mi mathvariant=\"normal\">arccos</mi><mo>&#8289;</mo></mrow><mfrac><mi>g</mi><mrow><mi>R</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>±</mi><mrow><mi mathvariant=\"normal\">arccos</mi><mo>&#8289;</mo></mrow><mfrac><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "oreka-puntu simetrikoak egonkorrak dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mo>±</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>4</mn></msup><mo>−</mo><mfrac><msup><mi>g</mi><mn>2</mn></msup><msup><mi>R</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>4</mn></msup><mo>−</mo><msubsup><mi>ω</mi><mn>0</mn><mn>4</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hemen bezala, oreka-puntuen kopurua edota egonkortasuna aldatzen denean, <strong>adarkatze</strong> bat gertatu dela esaten da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Talka elastikoa"
    },
    {
     "mota": "testua",
     "html": "<em>Zergatik onartzen dugu horma edo zoruaren kontrako talka perpendikular\nelastiko batean partikularen abiadura alderantzikatzen dela modulua aldatu gabe?</em>"
    },
    {
     "mota": "testua",
     "html": "Esan genezake, horma higitzen ez denez, bere energia zinetikoa nulua dela beti eta, ondorioz, kontserbatzen den energia zinetiko osoa partikularena dela; baina kontuz ibili behar da: hormaren abiadura nulua da bere masa infinitutzat hartu dugulako eta, orduan, definitu gabe dagoen <math display=\"inline\"><mrow><mn>0</mn><mo>×</mo><mi>∞</mi></mrow></math> biderkadura da energia zinetikoa. Problema hobeto aztertzeko, eman dezagun talka aurretik <math display=\"inline\"><mi>m</mi></math> masako partikularen abiadura <math display=\"inline\"><mi>u</mi></math> dela eta ondoren <math display=\"inline\"><mi>v</mi></math>. Hormaren masa <math display=\"inline\"><mi>M</mi></math> bada eta talka ondoren duen abiadura <math display=\"inline\"><mi>V</mi></math>, hauexek dira momentu linealaren eta energia zinetikoaren kontserbazio-printzipioak talka elastikoa denean (gogoratu 1.5.4 atala):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mi>u</mi><mo>=</mo><mi>m</mi><mi>v</mi><mo>+</mo><mi>M</mi><mi>V</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>u</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>V</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hemendik erraz kalkulatzen dira abiadurak kasu orokorrean eta interesatzen zaigun <math display=\"inline\"><mrow><mi>m</mi><mi>/</mi><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math>  limitean:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/c866f27d80b392fc.svg\" alt=\"v = (m - M)/(m + M) u quad #math.attach(sym.arrow.r.long, t: $m slash M -&gt; 0$) quad -u,\" style=\"width:14.543em;height:2.739em\" loading=\"lazy\"> <img class=\"formula formula-d\" src=\"media/formulak/dcc6ca611825ee98.svg\" alt=\"V = (2m)/(m + M) u quad #math.attach(sym.arrow.r.long, t: $m slash M -&gt; 0$) quad 0.\" style=\"width:13.907em;height:2.739em\" loading=\"lazy\">"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Soluzio triangeluarrak"
    },
    {
     "mota": "testua",
     "html": "<em>Eman dezagun hiru partikulez osaturiko sistema batean partikulen arteko\nindarrak zentralak eta erakarleak izateaz gain, masen proportzionalak direla:</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo>=</mo><mi>−</mi><msub><mi>m</mi><mi>i</mi></msub><msub><mi>m</mi><mi>j</mi></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(Kasu interesgarriena grabitazio-erakarpenari dagokiona da: <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>G</mi><mi>/</mi><msup><mi>r</mi><mn>3</mn></msup></mrow></math>.)\nFroga ezazu hiru partikulak triangelu aldekide baten erpinetan oreka erlatiboan\negon daitezkeela, triangelua bere planoarekiko perpendikularra den abiadura\nangeluar konstante egokiz biratzen bada partikula-sistemaren masa-zentroaren\ninguruan. Zein da abiadura angeluarraren balioa?</em>"
    },
    {
     "mota": "testua",
     "html": "Aukera dezagun masa-zentroaren sistema:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>m</mi><mi>i</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sistema horretan partikula bakoitzaren higidura zirkularra eta uniformea denez, azelerazioa zentripetoa da: <math display=\"inline\"><mrow><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub></mrow></math>. Triangeluaren aldeen luzera <math display=\"inline\"><mi>a</mi></math> bada, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>a</mi></mrow></math> dugu eta higidura-ekuazioa hauxe da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><msub><mi>m</mi><mi>i</mi></msub><msup><mi>ω</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>=</mo><mi>−</mi><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msub><mi>m</mi><mi>i</mi></msub><msub><mi>m</mi><mi>j</mi></msub><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hemendik,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msub><mi>m</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msub><mi>m</mi><mi>j</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "lortzen da, eta masa-zentroaren sisteman masa-momentua nulua denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msub><mi>m</mi><mi>j</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo>=</mo><mi>−</mi><msub><mi>m</mi><mi>i</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "dugu eta, ondorioz, masa osoa <math display=\"inline\"><mrow><mi>M</mi><mo>≡</mo><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></msubsup><msub><mi>m</mi><mi>i</mi></msub></mrow></math> bada,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msub><mi>m</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>+</mo><msub><mi>m</mi><mi>i</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>=</mo><mi>M</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hortaz, higidura-ekuazioak betetzen dira abiadura angeluarra <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mi>M</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mrow></math> bada. Azpimarratu behar da horrelako soluzioa ez dela beti egonkorra izango. Soluzio triangeluar interesgarri bat aztertuko dugu berriro 2.7.4 probleman."
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
     "izena": "Triedro intrintsekoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu triedro intrintsekoa honela ere kalkula daitekeela: <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>=</mo><mfrac><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mo>=</mo><mfrac><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math> Iruzkina egin emaitzari."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Kurbadura-erradioa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu honela kalkula daitekeela partikula baten ibilbidearen kurbadura-erradioa: <math display=\"block\"><mrow><mi>ρ</mi><mo>=</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Higidura laua",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu higidura lauaren kasuan koordenatu polarrak erabiltzen badira, hauexek direla triedro intrintsekoaren bektore unitarioak: <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>=</mo><mfrac><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover></mrow><msqrt><mrow><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>=</mo><mi>ε</mi><mfrac><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></mrow><msqrt><mrow><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mo>=</mo><mi>ε</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math> hurrengo magnitudearen zeinua den: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>r</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> (Ibilbidea norantz kurbatzen den neurtzen du abiadura eta azelerazioaren arteko orientazio erlatibo honek.)"
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
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>B</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> eremu magnetiko konstante eta uniformean higitzen den elektroiaren ibilbidea hurrengo helizea da: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi>b</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> (<math display=\"inline\"><mi>a</mi></math>, <math display=\"inline\"><mi>b</mi></math> eta <math display=\"inline\"><mi>ω</mi></math> konstanteak dira.) Kalkulatu azelerazioaren osagaiak, triedro intrintsekoa eta kurbadura-erradioa."
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
       "html": "Makila bat pausagunean dago hormaren kontra (eta lurraren gainean, noski). Plano bertikal batean labaintzen hasten bada, nolakoak izango dira puntuen ibilbideak, horma bertikalaren eta makilaren arteko ukipena apurtu arte?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/cda55b1bb6231ef3.svg",
       "zabalera": 131
      },
      {
       "mota": "testua",
       "html": "<em>Oharra</em>"
      },
      {
       "mota": "testua",
       "html": ": Ikus <code>http://tp.lc.ehu.eus/jma/mekanika/analitikoa/hagatxoa.html</code> simulazioa."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Zenonen paradoxa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "«Akilesek dortokak baino bi aldiz arinago egiten du lasterketa. Hasieran haien arteko distantzia estadio batekoa bazen, Akilesek estadio hori egin duenerako dortokak beste estadio erdi bat egin du. Akiles azken distantzia honen zehar ibiltzen denean, dortokak estadio laurden bat egiten du. Prozesu hau behin eta berriro errepikatzen denez, korrikalarien arteko distantzia, gero eta txikiagoa izan arren, ez da inoiz ere nulua izango. Beraz, Akilesek ez du dortoka harrapatuko». Zer uste duzu zuk honetaz?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Jazarpen-kurbak",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hiru inurri higitzen ari dira mahai batean. Hasieran <math display=\"inline\"><mi>L</mi></math> aldeko triangelu aldekide baten erpinetan zeuden eta hiruren abiadura eskalarra <math display=\"inline\"><mi>v</mi></math> da. Oso arin aldatzen dute higidura-norabidea baina ez dira oso azkarrak. Lehen inurriak bigarrena harrapatu nahi duenez, beti higitzen da zuzenean une bakoitzean azken hau dagoen punturantz. Gauza bera egiten du bigarrenak hirugarrenarekin eta azken honek lehenarekin. Erabili simetria eta koordenatu polar lauak inurri baten <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> koordenatuen eboluzioa kalkulatzeko. Frogatu azkenean elkar harrapatuko dutela. Kalkulatu horretarako behar duten denbora. Ezabatu denbora distantziaren eta angelu polarraren eboluzio-ekuazioetatik ibilbidearen ekuazioa lortzeko. Nolakoa da ibilbidea? <math display=\"inline\"><mi>v</mi></math>-ren menpekoa al da? Zer gertatzen da <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mn>3</mn></mrow></math> inurriren kasuan, poligono erregular baten erpinetatik abiatzen badira?"
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
       "html": "Arrain migratzaile batzuk ibaietara doaz errutera. Geldi daudenean <math display=\"inline\"><mi>α</mi></math> energia erretzen dute denbora-unitatean eta <math display=\"inline\"><mi>v</mi></math> abiaduraz higitzen badira <math display=\"inline\"><mrow><mi>β</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math> da gastu gehigarria denbora-unitatean. Ibaian jaten ez badute, zein da abiadura egokiena errute-gunera iristeko galdutako energia minimoa izateko?"
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
       "html": "Automobil bat abiadura konstantez urruntzen da horma luze batetik irudian erakusten den norabidean. Hormatik <math display=\"inline\"><mi>d</mi></math> distantziara dagoenean gidariak klaxona jotzen badu, zer distantzia egingo du oihartzuna entzun arte?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/c26cc7fd2f523e7a.svg",
       "zabalera": 144
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
       "html": "Bi barra mahai horizontal batean higitzen ari dira, <math display=\"inline\"><mi>v</mi></math> abiadura eskalar konstante berdinez, bakoitza bere norabidearekiko perpendikularrean, irudian erakusten den bezala. Barren arteko angelu txikiena <math display=\"inline\"><mrow><mn>2</mn><mi>α</mi></mrow></math> badira, zein da <math display=\"inline\"><mi>P</mi></math> gurutzagunearen abiadura? Zer gertatzen da <math display=\"inline\"><mrow><mn>2</mn><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> limiteetan?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/aa889de1752c930f.svg",
       "zabalera": 196
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
       "html": "Bizikleta bakarra dute hiru pertsonek, <math display=\"inline\"><mi>L</mi></math> distantziara joateko. Bi pertsona bizikletaz doazen bitartean, hirugarrena ibiltzen hasten da. Une batean, pertsona bat bizikletatik jaisten da, oinez jarraitzeko, eta bestea hirugarrenaren bila abiatzen da bizikletaz ekartzeko. Oinezkoen abiadura <math display=\"inline\"><msub><mi>v</mi><mi>o</mi></msub></math> bada eta bizikletarena <math display=\"inline\"><msub><mi>v</mi><mi>b</mi></msub></math>, nola aukeratu behar da aipaturiko unea, hirurak lehenbailehen helbidera heltzeko? Zein da bidaia horrela egiteko behar den denbora minimoa?"
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
       "html": "Bi xafla lau berdin erdiko <math display=\"inline\"><mi>O</mi></math> puntuan giltzatzen dira, irudian erakusten den eran. Ixten hasten badira, artazien modura, <math display=\"inline\"><mrow><mi>ω</mi><mo>≡</mo><mi>−</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> abiadura angeluar konstantez, zein da <math display=\"inline\"><mi>E</mi></math> ebakidura-puntu geometrikoaren <math display=\"inline\"><msub><mi>v</mi><mi>E</mi></msub></math> abiadura? Eta, une bakoitzean, bertan dagoen materialaren <math display=\"inline\"><msub><mi>v</mi><mi>m</mi></msub></math> abiadura? Iruzkina egin emaitzari."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/6956d1002bb65de9.svg",
       "zabalera": 215
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Galileoren lehen saioa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Naturaren legeak ahalik sinpleenak direlakoan, partikula baten abiadura, abiatu zenetik egindako distantziarekiko proportzionala dela pentsatu zuen Galileok hasieran. Azkenean konturatu zen horrelako lege baten arabera higidura ezinezkoa dela! Planteatu eta ebatzi problema dimentsio batean ondorio bera lortzeko."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Doppler efektua",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Iturri geldi batetik <math display=\"inline\"><mrow><mi>d</mi><mi>N</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math> partikula bidaltzen dira, norabide batean, denbora unitatean. Partikulak <math display=\"inline\"><mi>v</mi></math> abiaduraz higitzen dira. Zenbat detektatzen dira, denbora unitatean, norabide berean <math display=\"inline\"><mrow><mi>u</mi><mo>&lt;</mo><mi>v</mi></mrow></math> abiaduraz higitzen den detektagailuan? Zer gertatzen da detektagailua, urrundu beharrean, hurbiltzen bada?"
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
       "html": "Euritako busti baten ertz horizontala <math display=\"inline\"><mi>h</mi></math> altueran dago eta <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez ari da biratzen. Eman dezagun aipatutako ertza <math display=\"inline\"><mi>R</mi></math> erradioko zirkunferentzia bat dela, hurbilketa onean. Kalkulatu ertzetik isurtzen diren tantek lurrean marrazten duten zirkunferentziaren erradioa."
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
       "html": "Irudiko partikularen ibilbidea <math display=\"inline\"><mi>R</mi></math> erradioko zirkunferentzia da. Ibilbideko puntu batetik neurtutako <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> posizio-bektorea <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez biratzen da. Kalkulatu partikularen abiadura eskalarra eta azelerazio-bektorea."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/f264b883ab54b085.svg",
       "zabalera": 114
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
       "html": "Lurraren eremu grabitatorioan higitzen diren bi partikula puntu berean zeuden une batean, euren abiadurak, <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub></math>, horizontalak eta kontrako noranzkokoak zirenean. Kalkulatu partikulen arteko distantzia euren abiadurak perpendikularrak direnean."
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
       "html": "John von Neumann matematikari handiak oso arin kalkulatzen zuen buruz. Lagun batek hurrengo problema planteatu zion: «Bi txirrindulari une berean abiatzen dira elkarren bila, bide zuzen batean barrena, 10 km/h abiadura konstantez, 20 km-ko distantziatik. Une berean euli bat txirrindulari baten sudurretik doa bestearen sudurreraino 15 km/h abiaduraz. Heldu bezain laster atzera egiten du eta lehen txirrindulariarenganaino doa. Bidaia behin eta berriro egiten badu, zein da egiten duen distantzia osoa txirrindulariak elkartu arte?» Von Neumannek berehala lortu zuen erantzun zuzena. «A!, trikimailua ezagutzen zenuen» esan zion lagunak. «Zer trikimailu? Serie infinitua batu dut» erantzun zion von Neumannek. Aurkituko al duzu erantzuna serierik batu gabe?"
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
       "html": "Bi partikula abiatzen dira irudiko konfiguraziotik, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean, <math display=\"inline\"><mi>a</mi></math> moduluko azelerazio perpendikular konstantez. Noiz da minimoa partikulen arteko distantzia? Eta maximoa? Zeintzuk dira distantziaren balio minimoak eta maximoak?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/f566219923413a73.svg",
       "zabalera": 173
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
       "html": "Bi txakurrek lerari tira egiten diote. Une batean, txakurren abiadurak soken norabideetan daude eta haien moduluak <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math> dira. Une berean, soken arteko angelua <math display=\"inline\"><mi>α</mi></math> da. Zein da une horretan leraren abiadura eskalarra? Zer gertatzen da zure erantzunean <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mn>0</mn></mrow></math> limitean? Eta <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>π</mi></mrow></math> limitean?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/b3d60bfa365bc284.svg",
       "zabalera": 183
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
       "html": "Pertsona batek ikusten du <math display=\"inline\"><mi>d</mi></math> distantziara dagoen autobus bat hasten dela urruntzen <math display=\"inline\"><mi>a</mi></math> azelerazio konstantez. Zein da pertsonak, une horretatik aurrera, erabili behar duen abiadura konstantea, autobuseko atzeko ate zabaletik <em>erraz</em> sartzeko?"
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
       "html": "Espazio-ontzi bat <math display=\"inline\"><mi>v</mi></math> abiadura eskalar konstantez higitzen ari da eta <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean radar-sistema baten paretik pasatzen da. Geroago, une batean, radarrak pultsu bat igortzen du eta ontzian islatzen den pultsua <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math> denbora-tartea pasatu ondoren detektatzen du. Bi pultsuak <math display=\"inline\"><mi>c</mi></math> abiadura eskalarraz hedatzen dira. Kalkulatu noiz igorri den pultsua, noiz islatzen den, noiz detektatzen den islatua eta non dagoen ontzia pultsua igortzen denean, islatzen denean eta islatua detektatzen denean."
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
       "html": "Irudiko diskoaren erradioa <math display=\"inline\"><mi>R</mi></math> da eta <math display=\"inline\"><mi>A</mi></math> ardatz eszentrikoaren inguruan biratzen da, <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez. Diskoaren <math display=\"inline\"><mi>O</mi></math> zentroaren eta <math display=\"inline\"><mi>A</mi></math> ardatzaren arteko distantzia <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>O</mi><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>a</mi></mrow></math> da. Frogatu <math display=\"inline\"><mi>P</mi></math> pistoiaren higidura harmonikoa dela eta aurkitu bere abiadura eta azelerazio maximoak."
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
       "html": "<math display=\"inline\"><mrow><mi>O</mi><mi>A</mi></mrow></math> hagatxoa <math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ω</mi></mrow></math> abiadura angeluar konstantez biratzen da, <math display=\"inline\"><mi>O</mi></math>-ren inguruan. <math display=\"inline\"><mrow><mi>O</mi><mi>A</mi></mrow></math> hagatxoaren luzera <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>O</mi><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>a</mi></mrow></math> da eta <math display=\"inline\"><mrow><mi>A</mi><mi>P</mi></mrow></math>-rena <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>A</mi><mi>P</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>b</mi></mrow></math>. Kalkulatu <math display=\"inline\"><mrow><mi>x</mi><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>O</mi><mi>P</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math> distantzia. Erabili <math display=\"inline\"><mrow><mi>a</mi><mo>≪</mo><mi>b</mi></mrow></math> dela aipaturiko distantzia modu honetan idazteko: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><mrow><mn>2</mn><msup><mi>b</mi><mn>2</mn></msup></mrow></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><msup><mi>a</mi><mn>4</mn></msup><msup><mi>b</mi><mn>4</mn></msup></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Kalkulatu <math display=\"inline\"><mi>P</mi></math> pistoiaren azelerazio maximoa, hurbilketa horretan."
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
       "html": "Erortzen ari diren ur-tanten arteko distantzia denborarekin handituz doala erabili zuen Estraton-ek higidura azeleratua dela ondorioztatzeko. Frogatu, bestelako hipotesirik erabili gabe, distantzia horren handitzea denborarekiko lineala bada, azelerazioa konstantea dela."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Batez besteko abiaduraren teorema",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "«Azelerazio konstanteko higiduran egindako distantzia, abiadura konstanteko higiduran egindakoaren berdina da, azken honetan abiadura higidura azeleratuaren batez besteko abiaduraren berdina bada, hau da, lehen kasuko hasierako eta amaierako abiaduren batez bestekoa bada». Frogatu emaitza hau."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Partikula puntualaren dinamika])"
    },
    {
     "mota": "problema",
     "izena": "Tiro parabolikoa (I)",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Nolakoa izan daiteke <math display=\"inline\"><mi>α</mi></math> angelua irudiko tiro parabolikoan, partikula puntualaren eta <math display=\"inline\"><mi>O</mi></math> puntuaren arteko distantzia gorakorra izateko ibilbide osoan barrena? <em>Oharra</em>: Arbuiatu airearekiko marruskadura."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/ebca6d51bfe486f2.svg",
       "zabalera": 230
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Tiro parabolikoa (II)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko partikula <math display=\"inline\"><mi>u</mi></math> abiaduraz eta horizontalarekiko <math display=\"inline\"><mi>φ</mi></math> angeluaz jaurti da. Zein izan behar du <math display=\"inline\"><mi>φ</mi></math> angeluaren balioak, plano aldapatsuan zehar neurtutako <math display=\"inline\"><mi>R</mi></math> irispidea maximoa izateko?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/84dfb28ded5e9df0.svg",
       "zabalera": 206
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Tiro parabolikoa (III)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Suziri batek lehertzean zatiak norabide guztietan abiatzen dira <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiadura eskalar berdinez. Aurkitu zatien ibilbideetako altuera handieneko puntuen leku geometrikoa."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Tiro parabolikoa (IV)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zein da 1.29 problemako zatiek ukitutako puntuen multzoa? <em>Iradokizuna</em>: Eskualde horren muga ibilbide guztien inguratzailea izango da."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/f57dab7dd0f14086.svg",
       "zabalera": 193
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Tiro parabolikoa (V)",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Nola aukeratu behar da tiro parabolikoan hasierako abiaduraren eta horizontalaren arteko <math display=\"inline\"><mi>α</mi></math> angelua, partikulak ibilbidean barrena egindako distantzia maximoa izateko?"
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
       "html": "Hemisferio bateko punturik gorenean pausagunean dagoen partikula bat labaintzen hasten da. Marruskadura arbuiagarria bada, non apurtuko da partikula eta hemisferioaren arteko ukipena? Zein izango da abiadura aldiune horretan?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/e171f988d0ecbec2.svg",
       "zabalera": 207
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
       "html": "Hidrogeno atomoaren eredu bakun (eta oker) batean <math display=\"inline\"><mi>m</mi></math> masako elektroia <math display=\"inline\"><mi>a</mi></math> erradioko zirkunferentzia batean higitzen da pausagunean dagoen nukleoaren inguruan. Energia potentziala <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>/</mi><mi>r</mi></mrow></math> bada, zeintzuk dira elektroiaren energia zinetikoa eta momentu angeluarra? Zein da energiaren fotoia, elektroiak hura xurgatzean erradio bikoitzaren orbitara joan dadin? Eta atomoa ionizatzeko?"
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
       "html": "Kanpoko trenbidetik barnekora igarotzean motorra pizten ez bada eta airearen eragina arbuiagarria bada, nolakoa izango da azkenean irudiko trenaren abiadura: hasierakoa baino handiagoa, txikiagoa ala berdina? Zergatik?"
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
       "html": "Partikula bat <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatzean higitzen da, <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math> indarraren eraginpean. Jatorrian energia potentziala nulua bada, zein da beste puntu guztietan? Aurkitu oreka-puntuak eta eztabaidatu euren egonkortasuna. Azter ezazu higidura energia mekanikoaren hurrengo balioetarako: <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>4</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>8</mn><mo>,</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mn>1</mn></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Amontonsen legeak",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Gainean bloke bat duen plano aldapatsu baten angelua handituz doanean, zer gertatzen da?"
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
       "html": "Bloke bat askatzen da irudiko planoan. Marruskadura dinamikoaren koefizientea <math display=\"inline\"><mi>μ</mi></math> da. Nola aukeratu behar da <math display=\"inline\"><mi>α</mi></math> angelua blokearen abiadura horizontala ahalik handiena izateko?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/9c348eccf29bc64e.svg",
       "zabalera": 177
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
       "html": "<math display=\"inline\"><mi>m</mi></math> masako idunekoa hari leun batean zehar higitzen da grabitatearen eraginpean. Nolakoa izan behar du hariak, partikulak pairatzen duen ukipen-indarra nulua izateko?"
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
       "html": "Partikula baten masa <math display=\"inline\"><mi>m</mi></math> da eta <math display=\"inline\"><mi>a</mi></math> erradioko zirkunferentzia batean ari da higitzen, <math display=\"inline\"><mrow><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></math> potentzial harmonikoaren eraginpean. Kalkula ezazu partikularen <math display=\"inline\"><mi>v</mi></math> abiadura. Bat-batean <math display=\"inline\"><mrow><mi>m</mi><mi>v</mi></mrow></math> balioko bulkada bat aplikatzen zaio partikulari, azken honek zuen abiaduraren eta bulkadaren arteko angelua <math display=\"inline\"><mi>α</mi></math> izateko moduan. Erabil itzazu kontserbazio-legeak zentroaren eta partikularen arteko distantzia handiena eta txikiena kalkulatzeko. Azal itzazu ikuspuntu fisikotik <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mi>π</mi></mrow></math> kasu berezietan lortzen diren emaitzak."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Newtonen paradoxa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "«Zaldiak orgaren gainean eragiten duen indarra orgak zaldiaren gainean eragindakoaren kontrakoa bada, Newtonen hirugarren legearen arabera, sistemak ez du jakingo aurrera ala atzera higitu behar duen. Praktikan horrelako problemarik ez dagoenez, akzio eta erreakzioaren printzipioa ez da zuzena.» Zer uste duzu zuk?"
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
       "html": "Nolako indarra egin behar dio <math display=\"inline\"><mi>M</mi></math> masako pertsonak sokari, <math display=\"inline\"><mi>m</mi></math> masako aldamioa orekan mantentzeko, soken eta txirrikaren masak arbuiagarriak badira?"
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
       "html": "Objektu txiki bat geldi dago mahai horizontal batean. Bulkada baten bidez abiarazten da eta 4 metrotara dagoen ertzetik erortzen da 2 segundo beranduago. Gurpilak al dauzka?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Magdeburg-eko hemisferioak",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Esperimentu honetan bi hemisferioren arteko espazioan hutsa egiten da, biak banantzea oso zaila dela ikustean, presio atmosferikoaren existentzia eta balioa frogatzeko. Otto von Guericke 1657an Magdeburgen egindako esperimentu klasikoan, zaldiak uztartu ziren bi hemisferioetan loturiko soketan. Helburua hemisferioak banantzea bazen, ez al zegoen zaldiak erabiltzeko metodo hoberik?"
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
       "html": "Zer indarra neurtzen du irudiko dinamometroak, txirrikaren masa arbuiagarria bada?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Katenaria",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi puntutatik esekitako kate (edo soka) malgu baten forma geometrikoa da katenaria (eta horrelaxe deitzen dira tren elektrikoei indar elektrikoa emateko erabiltzen diren kableak). Kontsidera dezagun grabitatearen eraginpean orekan dagoen sokaren elementu infinitesimal bat (ikus 9.12 irudia). Aukera ditzagun <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatza horizontalean eta <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> ardatza bertikalean, sokaren forma, aurkitu nahi dugun <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzio baten bidez adierazteko. <br>(a) Idatzi elementuaren oreka-baldintzak, (9.97)–(9.98) ekuazioen aldaera egokiak direnak. <br>(b) Erabili <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioaren deribatuak (ikus (9.96) erlazioa), horizontalarekiko <math display=\"inline\"><mi>α</mi></math> angelua problematik ezabatzeko. <br>(c) Integratu oreka horizontalaren baldintza, tentsioa hauxe dela frogatzeko: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msub><mi>T</mi><mn>0</mn></msub><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math> non <math display=\"inline\"><msub><mi>T</mi><mn>0</mn></msub></math> integrazio-konstante bat den. Zein da azken honen esanahia? <br>(d) Ordezkatu azken emaitza oreka bertikalaren ekuazioan eta integratu ekuazio diferentziala katenariaren ekuazioa <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><msub><mi>y</mi><mn>0</mn></msub></math> integrazio-konstanteen bidez lortzeko: <math display=\"block\"><mrow><mi>y</mi><mo>−</mo><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub></mrow><mi>a</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>a</mi><mo>≡</mo><mfrac><msub><mi>T</mi><mn>0</mn></msub><mrow><mi>m</mi><mi>g</mi></mrow></mfrac><mi>L</mi><mo>,</mo></mrow></math> non <math display=\"inline\"><mi>m</mi></math> eta <math display=\"inline\"><mi>L</mi></math> sokaren masa eta luzera diren, hurrenez hurren."
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
       "html": "Partikula puntual bat irudiko plano aldapatsuan barrena higitzen da grabitatearen eraginpean. Bien arteko marruskadura dinamikoaren koefizientea <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> da. <br>(a) Idatzi abiaduraren osagaien eta moduluaren eboluzio-ekuazioak. Ondorioztatu <math display=\"inline\"><mrow><msub><mi>v</mi><mi>x</mi></msub><mo>+</mo><mi>v</mi></mrow></math> higidura-konstantea dela. <br>(b) Planoa oso luzea bada eta hasierako abiadura horizontala, irudian ikusten den bezala, zeintzuk dira amaieran abiaduraren osagaiak? \\"
      },
      {
       "mota": "testua",
       "html": "<em>Iradokizuna</em>"
      },
      {
       "mota": "testua",
       "html": ": Gogoratu, planoa geldi dagoenean, marruskadura-indarra abiaduraren kontrakoa dela: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi>−</mi><mi>R</mi><mfrac><mi mathvariant=\"bold-italic\">𝒗</mi><mi>v</mi></mfrac><mi>.</mi></mrow></math>"
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
       "html": "Arinegi bazoaz, zer komeni zaizu irudiko egoeran, aurreko horma eta irristada saihesteko: aurrera egitea automobila balaztatuz ala, balazta ukitu gabe, ibilbide zirkularra aukeratzea? Zergatik? <em>Iradokizuna</em>: Egin hurbilketak."
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
       "html": "Irudiko <math display=\"inline\"><mi>O</mi></math> puntutik pasatzen diren hagatxo finkoak leunak dira eta plano bertikal batean daude. <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean beira-aleak askatzen dira handik. Froga ezazu <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math> unean aleak irudiko zirkunferentzian egongo direla. Zein da zirkunferentziaren diametroa?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/3c1af7316551a6f7.svg",
       "zabalera": 163
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
       "html": "Irudiko xaflaren eta zoru horizontalaren arteko marruskadura-koefizientea <math display=\"inline\"><mi>μ</mi></math> da. Xaflaren <math display=\"inline\"><mi>S</mi></math> azalerako zati bat partikula-sorta batez bonbardatzen da. Sortaren masa-dentsitatea <math display=\"inline\"><mi>ρ</mi></math> da eta partikulen abiadura <math display=\"inline\"><mi>v</mi></math> erakusten den norabidean. Partikulak xaflan atxikirik geratzen badira, zein da xaflaren abiadura egoera egonkorrean? <em>Iradokizuna</em>: Erabili 10.7.4 ataleko fluxuaren kontzeptua eta aplikatu bulkadaren (1.63) teorema <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> tarte infinitesimal batean."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Eulerren formula",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko sokak zutoin baten <math display=\"inline\"><mi>α</mi></math> balioko angelua besarkatzen du (<math display=\"inline\"><mrow><mi>α</mi><mo>≥</mo><mn>2</mn><mi>π</mi></mrow></math> ere izan daiteke). Sokaren eta zutoinaren arteko marruskadura estatikoaren koefizientea <math display=\"inline\"><mi>μ</mi></math> da. Sokaren mutur batean <math display=\"inline\"><msub><mi>T</mi><mn>0</mn></msub></math> balioko tentsioa aplikatzen honen noranzkoan higitzen hasten da. Frogatu hurrengo ekuazioaren arabera aldatzen dela sokaren tentsioa <math display=\"inline\"><mi>α</mi></math> angeluaren funtzioan, sokaren masa arbuiatzen badugu: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msub><mi>T</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>μ</mi><mi>α</mi></mrow></msup><mi>.</mi></mrow></math> Berriro <math display=\"inline\"><msub><mi>T</mi><mn>0</mn></msub></math> aplikatzean, nolakoa izan behar du beste muturrean aplikatutakoak oreka mantentzeko?"
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
       "html": "Automobil baten gurpilen eta bidearen arteko marruskadura-koefizientea <math display=\"inline\"><mi>μ</mi></math> da. Pausagunetik abiatzen denean, motorrak beti egiten du <math display=\"inline\"><mi>W</mi></math> potentzia osoa gurpil guztien ardatzetan. Kalkulatu abiadura denboraren funtzioan."
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
       "html": "Irudiko bi bloke berdinak mahai horizontal leun batean daude, hagatxo zurrun arin batez loturik. Azken honek paira dezakeen tentsiorik handiena <math display=\"inline\"><msub><mi>T</mi><mi mathvariant=\"normal\">max</mi></msub></math> da. <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean <math display=\"inline\"><mrow><msub><mi>F</mi><mn>1</mn></msub><mo>=</mo><mi>C</mi><mi>t</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>F</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mi>C</mi><mi>t</mi></mrow></math> indar horizontalak aplikatzen hasten dira. Noiz apurtuko da hagatxoa?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/ea32ebb412dd3985.svg",
       "zabalera": 321
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Denboraren menpeko energia potentziala",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Indar kontserbatzaileak 1.3.4 atalean definitzean eman dugu <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> energia potentziala ez dela denboraren esplizituki menpekoa; baina hori ez da beti horrela. Adibidez, esfera kargatu eroale isolatu baten karga apurka-apurka txikituko da, airearen hezetasunaren ondorioz. Eman dezagun <math display=\"inline\"><mi>t</mi></math> unean <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dela. Esferaren zentrotik neurtutako <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> posizioan dagoenean <math display=\"inline\"><mi>q</mi></math> karga puntualak pairatuko duen indarra, Coulomben legeak emandakoa izango da: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>q</mi><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>3</mn></msup></mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mi>.</mi></mrow></math> Froga ezazu kargaren energia potentziala ondokoa izango dela: <math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>q</mi><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>r</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Kontsidera dezagun orain <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> energia potentzial orokorrean higitzen den partikula puntual bat, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> indarra pairatzen duena. Kontserbatuko al da bere energia mekanikoa?"
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
       "html": "Partikula bat <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>0</mn></msub></math> hastapen-abiaduraz abiatzen da ingurune batean eta pairatzen duen indar bakarra <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi>a</mi><mi>m</mi><msqrt><mi>v</mi></msqrt><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> marruskadura da, abiadura <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> denean. Zenbat denbora behar du geldi geratzeko? Zein izango da orduraino egindako bide osoa?"
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
       "html": "Partikula bat <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatzean barrena higitzen da <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>x</mi></mrow></math> indarraren eraginpean. Hasieran <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> puntuan dago <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiadurarekin. <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bada, nola aukeratu behar da <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>, partikula distantzia infinitura joan ez dadin?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Egia ala gezurra?",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "«Irudiko pendulu esferikoa bertikalaren inguruan biratzen ari da, sokaren eta pisuaren eraginpean, <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez. Masaren orbita zirkularraren erradioa <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>L</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> da eta pairatzen duen indar zentripetoa, sokak eragindako <math display=\"inline\"><mi>T</mi></math> ukipen-indarraren <math display=\"inline\"><mrow><msub><mi>F</mi><mi>z</mi></msub><mo>=</mo><mi>T</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> osagai horizontala. Higidura zirkularraren ekuazioa <math display=\"inline\"><mrow><msub><mi>F</mi><mi>z</mi></msub><mo>=</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>R</mi></mrow></math> da eta, hemen aurreko balioak ordezkatu ondoren, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> komuna ezabatzen bada, hauxe dugu: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>L</mi><mi>.</mi></mrow></math> Ondorioz, <math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mn>0</mn></mrow></math> limitean <math display=\"inline\"><mrow><mi>T</mi><mo>→</mo><mn>0</mn></mrow></math> dugu.»"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/028248c8cb8b6c85.svg",
       "zabalera": 100
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
       "html": "Egiaztatu 1.4 problemako ibilbidea eta aurkitu konstanteen balioak."
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
       "html": "Irudiko plano aldapatsuan dagoen blokeari pisuaren berdina den indar horizontala aplikatzen zaio. Blokearen eta planoaren arteko marruskadura estatikoaren koefizientea <math display=\"inline\"><mi>μ</mi></math> da. Nola aukeratu behar da <math display=\"inline\"><mi>α</mi></math> angelua blokea orekan egoteko, <math display=\"inline\"><mrow><mi>μ</mi><mo>&lt;</mo><mn>1</mn></mrow></math> bada eta <math display=\"inline\"><mrow><mi>μ</mi><mo>≥</mo><mn>1</mn></mrow></math> bada? Zer gertatzen da <math display=\"inline\"><mrow><mi>μ</mi><mo>≪</mo><mn>1</mn></mrow></math> denean?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/63cddde8c517d102.svg",
       "zabalera": 177
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
       "html": "Irudiko blokearen eta planoaren arteko marruskadura estatikoaren koefizientea <math display=\"inline\"><mi>μ</mi></math> da. Planoa <math display=\"inline\"><mi>a</mi></math> azelerazio horizontal konstantez mugiarazten da. (<math display=\"inline\"><mi>a</mi></math> positiboa zein negatiboa izan daiteke.) Nola aukeratu behar da <math display=\"inline\"><mi>a</mi></math>, blokea planoan barrena higi ez dadin?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/305f4a1b3e650116.svg",
       "zabalera": 203
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
       "html": "Pertsona batek zubitik ibaira egiten du salto, orkatila zubitik soka elastiko baten bidez lotuta. Burua uraren azala doi-doi ukitzeko moduan kalkulatu da sokaren luzera. Oszilazioak amaitzean, buruak uraren azaletik <math display=\"inline\"><mi>d</mi></math> distantziara geratzen da. Zubiaren eta uraren arteko distantzia <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mn>25</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow></mrow></math> da, pertsonaren garaiera <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>8</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow></mrow></math>. Kalkulatu sokaren luzera propioa."
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
       "html": "Partikula bat irudiko planotik <math display=\"inline\"><mi>h</mi></math> distantziatik askatzen da. Boteak guztiz elastikoak badira, zeintzuk dira ondoz ondokoen arteko distantziak?"
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
       "html": "<math display=\"inline\"><mi>R</mi></math> erradioko disko horizontal baten periferian tinko lotu da <math display=\"inline\"><mi>m</mi></math> masako soka mehe bat. Diskoa <math display=\"inline\"><mi>ω</mi></math> abiadura angeluarraz biratzen bada, zein da tentsioa sokan?"
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
       "html": "Irudiko pista leuneko hiru zatiak hauexek dira: <math display=\"inline\"><mi>α</mi></math> maldako planoa, <math display=\"inline\"><mi>R</mi></math> erradioko arkua eta plano bertikala. Nondik askatu behar da gorputz txikia pistatik bereiz dadin?"
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
       "html": "Irudiko planoaren eta blokearen arteko marruskadura dinamikoaren koefizientea <math display=\"inline\"><mi>μ</mi></math> da. Nola aukeratu behar da <math display=\"inline\"><mi>α</mi></math> angelua, ertzerainoko <math display=\"inline\"><mi>l</mi></math> distantzia horizontala ahalik denbora laburrenean egiteko, distantzia horretatik askatzen bada? Zer tartetan dago <math display=\"inline\"><mi>α</mi></math> balio hori <math display=\"inline\"><mrow><mi>μ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> aldatzean?"
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
       "html": "Pendulu matematiko baten azelerazioaren modulua berdina da puntu gorenean eta baxuenean. Zein da penduluaren anplitudea?"
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
       "html": "Pausagunetik abiatzen den auto baten <math display=\"inline\"><mi>r</mi></math> erradioko ibilbide zirkularrean <math display=\"inline\"><mi>a</mi></math> azelerazio tangentea konstantea da. Marruskadura estatikoaren koefizientea <math display=\"inline\"><mi>μ</mi></math> da. Kalkulatu egiten duen bidea labaintzen hasi arte."
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
       "html": "Irudiko gorputzaren eta pistaren arteko marruskadura-koefizientea <math display=\"inline\"><mi>μ</mi></math> da. Kalkulatu gorputza <math display=\"inline\"><mi>A</mi></math> puntutik <math display=\"inline\"><mi>B</mi></math>-ra, pistan barrena, eramateko egin behar den lana, gorputzaren masa <math display=\"inline\"><mi>m</mi></math> bada."
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
       "html": "Soka arin batetik esekitako pendulu matematiko bat orekan dago punturik baxuenean. Penduluaren luzera <math display=\"inline\"><mi>l</mi></math> da. Nolako abiadura horizontala eman behar zaio posizio horretan, ibilbide zirkular osoa egin dezan?"
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
       "html": "Irudiko pista leuneko azken zatia horizontala da. Pistako goiko puntutik askatzen da gorputz bat, biratu gabe higitzen dena. Nola aukeratu behar da <math display=\"inline\"><mi>d</mi></math> altuera gorputzak, pistatik askatu ondoren, egiten duen <math display=\"inline\"><mi>l</mi></math> distantzia horizontala ahalik luzeena izateko?"
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
       "html": "Irudiko barren arteko <math display=\"inline\"><mi>α</mi></math> angelua konstantea da eta sistema <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez biratzen ari da barra bertikalaren inguruan. Beste barraren eta <math display=\"inline\"><mi>m</mi></math> masako bola txikiaren arteko marruskadura estatikoaren koefizientea <math display=\"inline\"><mi>μ</mi></math> da. Kalkulatu <math display=\"inline\"><mi>r</mi></math> distantzia bolatxoa oreka erlatiboan dagoenean."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/40a1d0516fd12e7a.svg",
       "zabalera": 117
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Itzultze-koefizientea (I)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Pilota baten itzultze-koefizientea <math display=\"inline\"><mi>ε</mi></math> da, hau da, gainazal zurrun bat jo aurretik abiaduraren osagai <em>normala</em>  <math display=\"inline\"><mi>v</mi></math> bada eta talka ondoren <math display=\"inline\"><msup><mi>v</mi><mo>′</mo></msup></math> hauxe dugu, <strong>Newtonen itzultze-legearen</strong>  arabera: <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msup><mi>v</mi><mo>′</mo></msup><mi>/</mi><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>. Pilota <math display=\"inline\"><mi>h</mi></math> altueratik askatzen da. Kalkulatu geratu arte egiten duen distantzia osoa eta behar duen denbora-tarte osoa. <em>Oharra</em>: Egin ohiko hipotesiak: airearen eragina eta pilotaren diametroa arbuiagarriak direla eta ibilbidea beti bertikala."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Itzultze-koefizientea (II)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Pilota bat gainazal lau tinko bat jotzen du, irudian erakusten den moduan. Gainazala zurruna eta leuna da eta itzultze-koefizientea <math display=\"inline\"><mi>ε</mi></math>. Kalkulatu <math display=\"inline\"><msub><mi>θ</mi><mi>i</mi></msub></math> islapen-angelua eta energia zinetikoaren galera erlatiboa <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>−</mo><msup><mi>T</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><msub><mi>θ</mi><mi>e</mi></msub></math> eraso-angeluaren funtzioan. Zer gertatzen da talka-elastikoa bada?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Pendulu konikoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Pendulu matematiko baten masa plano horizontal batean higitzen da, zirkunferentzia batean barrena, irudian erakusten den bezala. Kalkulatu higiduraren periodoa."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/34b630cfbad1e97b.svg",
       "zabalera": 108
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
       "html": "Irudiko barra masa gabekoa da eta marruskadurarik gabe bira daiteke <math display=\"inline\"><mi>A</mi></math> puntuaren inguruan. Mutur askean <math display=\"inline\"><mi>m</mi></math> masako partikula bat dago. Barraren luzera <math display=\"inline\"><mi>l</mi></math> da. Barra pausagunetik askatzen da <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>α</mi><mo>&lt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> denean. Idatzi higidura-ekuazioak eta energia mekanikoaren kontserbazio-legea. Aztertu barrako esfortzua noiz den konpresioa eta noiz tentsioa higiduran barrena."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Tiro parabolikoa (VII)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bola txiki bat askatzen da eta irudiko plano aldapatsuan <math display=\"inline\"><mi>l</mi></math> distantzia egin ondoren, talka elastiko baten ondorioz, ibilbide parabolikoan abiatzen da. Nola aukeratu behar da <math display=\"inline\"><mi>α</mi></math> angelua <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> irispidea ahalik luzeena izateko?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/7e33c95fe30b36b8.svg",
       "zabalera": 233
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Stokesen legea (I)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Partikula bat gorantz jaurtitzen da, <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiadura eskalarraz, fluido batean. Biskositateak eragindako arraste-indarra abiadurarekiko proportzionala da, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi>γ</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, Stokesen legearen arabera. Kalkulatu zenbat denbora behar duen aurkitu behar duzun <math display=\"inline\"><mi>h</mi></math> altuera maximora heltzeko. Egiaztatu emaitza ezagunak berreskuratzen direla <math display=\"inline\"><mrow><mi>γ</mi><mo>→</mo><mn>0</mn></mrow></math> limitean. <em>Iradokizuna</em>: Erabili 1.4.3 ataleko aldagaien banantzearen metodoa abiadura kalkulatzeko."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Stokesen legea (II)",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili B.6 ataleko Lamberten <math display=\"inline\"><mi>W</mi></math> funtzioa, 1.76 problemako partikulak zorura itzultzeko behar duen denbora kalkulatzeko. Zein da orduan abiadura eskalarra?"
      },
      {
       "mota": "testua",
       "html": "<em>Iradokizuna</em>"
      },
      {
       "mota": "testua",
       "html": ": Erabili dimentsio gabeko <math display=\"inline\"><mrow><mi>λ</mi><mo>≡</mo><mn>1</mn><mo>+</mo><mi>γ</mi><msub><mi>v</mi><mn>0</mn></msub><mi>/</mi><mi>g</mi></mrow></math> parametroa."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Newtonen legea (I)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Partikula bat fluido batean askatzen da. Biskositateak eragindako arraste-indarra abiaduraren karratuarekiko proportzionala da, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, Newtonen legearen arabera. Kalkulatu partikularen muga-abiadura."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Newtonen legea (II)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Orain gorantz jaurtitzen da, <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiadura eskalarraz, 1.78 problemako partikula. Frogatu hasierako posiziora itzultzean partikularen abiadura eskalarra <math display=\"block\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mfrac><msub><mi>v</mi><mn>0</mn></msub><msqrt><mrow><mn>1</mn><mo>+</mo><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mi>/</mi><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup></mrow></msqrt></mfrac></mrow></math> dela, 1.78 problemako <math display=\"inline\"><msub><mi>v</mi><mi>m</mi></msub></math> muga-abiaduraren funtzioan."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Newtonen legea (III)",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Berriro jaurtitzen da gorantz, <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiadura eskalarraz, 1.78 problemako partikula. Kalkulatu zenbat denbora (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>t</mi><mn>1</mn></msub></mrow></math>), behar duen aurkitu behar duzun <math display=\"inline\"><mi>h</mi></math> altuera maximora heltzeko. Zenbat denbora behar du handik zorura itzultzeko? Zein da orduan partikularen abiadura eskalarra? <em>Iradokizuna</em>: Erabili <math display=\"inline\"><mrow><mi>τ</mi><mo>≡</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mi>k</mi><mi>g</mi></mrow></msqrt></mrow></math> denbora, dimentsio gabeko <math display=\"inline\"><mrow><mi>λ</mi><mo>≡</mo><mi>k</mi><msub><mi>v</mi><mn>0</mn></msub><mi>τ</mi></mrow></math> parametroa eta 1.4.3 ataleko aldagaien banantzearen metodoa, bi zatitan ebatzi behar den higidura-ekuazioan."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "(Euler, 1736)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi>k</mi><msup><mi>x</mi><mi>λ</mi></msup><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math> indar erakarlea pairatzen du <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatzean barrena higitzen den partikula batek. <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math> puntuan dagoenean partikularen abiadura <math display=\"inline\"><mi>v</mi></math> da. Nondik askatu da (abiadurarik gabe)? Zer gertatzen da <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> denean?"
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
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>x</mi><mn>3</mn></msup></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math> indar erakarlea pairatzen du <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatzean barrena higitzen den partikula batek. <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math> puntutik askatzen bada (abiadurarik gabe). Zenbat denbora behar du <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> punturaino heltzeko?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erorketa-denbora (Galileo)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko zirkunferentzia bertikaleko <math display=\"inline\"><mi>A</mi></math> gailurra eta <math display=\"inline\"><mi>B</mi></math> puntua lotzen dituen barra leuna da. <math display=\"inline\"><mi>A</mi></math> puntutik askatzen da (abiadurarik gabe) iduneko bat. Frogatu <math display=\"inline\"><mi>B</mi></math>-raino heltzeko behar duen denbora berdina dela zirkunferentziako <math display=\"inline\"><mi>B</mi></math> puntu guztietarako."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/4eb4fa83dc2d3b06.svg",
       "zabalera": 163
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erorketa-denbora",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azter dezagun 1.83 problema marruskadura kontuan hartuta. Nola lortzen da erorketa-denbora luzeena? Eta laburrena? Zeintzuk dira balio maximoa eta minimoa?"
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
       "html": "Disko horizontal bateko zentrotik <math display=\"inline\"><mi>a</mi></math> distantziara jartzen da txanpon bat eta azken honen gainean beste txanpon berdin bat. Diskoaren eta txanponaren arteko marruskadura estatikoaren koefizientea <math display=\"inline\"><msub><mi>μ</mi><mn>1</mn></msub></math> da eta txanponen artekoa <math display=\"inline\"><msub><mi>μ</mi><mn>2</mn></msub></math>. Diskoa hasten da biratzen, zentroaren inguruan, eta abiadura angeluarra astiro-astiro handitzen da. Zer hasiko da labaintzen: goiko diskoa bakarrik, behekoa bakarrik edo biak batera? <em>Oharra</em>: Arbuiatu txanponen erradioa."
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
       "html": "Barra arin batek <math display=\"inline\"><mi>m</mi></math> masako esfera txiki bat du mutur batean. Beste muturra zoruan jarri ondoren, posizio bertikaletik askatzen da barra. Zer angelutan desagertzen da zoruaren erreakzioa, bitartean barra labaindu ez bada? Nolakoa izan behar du horretarako marruskadura estatikoaren koefizienteak? Non joko du zorua esferak?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/d9cd51dfc247489d.svg",
       "zabalera": 122
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
       "html": "<math display=\"inline\"><mi>A</mi></math> partikularen masa <math display=\"inline\"><mi>m</mi></math> da eta <math display=\"inline\"><mi>B</mi></math>-rena <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math>. Bien energia zinetikoak berdinak badira, zein higitzen da arinago? Eta zeinek du momentu linealik handiena?"
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
       "html": "<math display=\"inline\"><mi>O</mi></math> puntutik eseki <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> luzerako pendulu matematiko bat. Soka masa gabekoa, luzaezina eta guztiz malgua da. <math display=\"inline\"><mi>O</mi></math>-ren bertikalean, <math display=\"inline\"><mi>a</mi></math> distantziara <math display=\"inline\"><mi>I</mi></math> iltzea dago, irudian ikusten den bezala. Pendulua bertikaletik <math display=\"inline\"><mi>α</mi></math> distantzia angeluarretik askatzen da. Nola aukeratu behar da <math display=\"inline\"><mi>α</mi></math> angelua, masak iltzea jo dezan?"
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
       "html": "<math display=\"inline\"><mi>O</mi></math> puntutik esekitako soka arin bat <math display=\"inline\"><mi>E</mi></math> eraztun estu leunetik pasatzen da eta mutur askean <math display=\"inline\"><mi>m</mi></math> masako partikula bat du, pendulu koniko baten modura higitzen dena. Penduluaren luzera <math display=\"inline\"><mi>a</mi></math> da eta bertikalarekiko angelua <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>60</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, irudian erakusten den moduan. Orain <math display=\"inline\"><mi>O</mi></math> muturra astiro-astiro jaisten da, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> anguluko pendulu konikoa lortu arte. Zein da orain penduluaren <math display=\"inline\"><mi>b</mi></math> luzera?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Partikula-sistemak])"
    },
    {
     "mota": "problema",
     "izena": "Newtonen bigarren legea eta masa aldakorra",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Orain arte partikulen masak konstanteak izan dira. Kasu batzuetan, ordea, gorputz baten masa aldatu egiten da, masa zati bat igortzen duelako edo inguruko masa xurgatzen duelako. Gorputzaren masa <math display=\"inline\"><mi>m</mi></math> bada, abiadura <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> eta pairatzen duen indar osoa <em>ezin da erabili (1.52)</em> <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒗</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi>m</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math>  <em>idazteko</em>. Izan ere, adierazpen hori ezin da bete erreferentzia-sistema inertzial guztietan, masa eta indarra ez bezala, abiadura aldatu egiten baita sistema aldatzean."
      },
      {
       "mota": "testua",
       "html": "Hala ere, partikula-sistema osoa kontsideratzen bada, (1.143) eboluzio-ekuazioa erabil daiteke. Egin hori, gorputzaren higidura-ekuazioa hauxe dela ondorioztatzeko:"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      },
      {
       "mota": "testua",
       "html": "non <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> indar osoa den eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math> igorritako edo xurgatutako masaren abiadura (gorputzaren sisteman neurtutakoa)."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Masa aldakorra (I)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Suziri baten egitura-masa <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> da eta erregaiarena <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>. Motorrak denbora-unitatean <math display=\"inline\"><mi>k</mi></math> masako gasak botatzen ditu, (suzirian neurtutako) <math display=\"inline\"><mrow><mi>u</mi><mo>&gt;</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mi>/</mi><mi>k</mi></mrow></math> abiadurarekin. Lurraren azaletik abiatzen bada, norabide bertikalean, zein da suziriaren higidura-ekuazioaren soluzioa? Aurki ezazu (gorantz) abiadura maximoa. Zein da une horretan suziriaren altuera?"
      },
      {
       "mota": "testua",
       "html": "<em>Oharra</em>"
      },
      {
       "mota": "testua",
       "html": ": Ibilbidean zehar grabitate-azelerazioa konstantea da eta airearen eragina arbuiagarria."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Masa aldakorra (II)",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sistema inertzial batean geldi dagoen espazio-ontzi baten masa <math display=\"inline\"><msub><mi>m</mi><mn>0</mn></msub></math> da. Une batean gasak atzerantz jaurtitzen hasten da. Gasen abiadura eskalar konstantea <math display=\"inline\"><mi>u</mi></math> da, <em>ontziaren sisteman</em>. <br>(a) Egiaztatu ontziaren masa, bere abiadura <math display=\"inline\"><mi>v</mi></math> denean, <strong>Tsiolkovskyren ekuazioak</strong> emandakoa dela: <math display=\"block\"><mrow><mi>m</mi><mo>=</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>v</mi><mi>/</mi><mi>u</mi></mrow></msup><mi>.</mi></mrow></math> (Ohar zaitez ez dela zehazten zenbat masa jaurtitzen den denbora unitatean, ezta masa kopuru berdinak igortzen diren tarte berdinetan.) <br>(b) Zein da goiko adierazpenaren ordezkoa gasen abiadura <math display=\"inline\"><mi>u</mi></math> bada <em>hasierako sisteman</em>? <br>(c)  <math display=\"inline\"><mrow><msub><mi>m</mi><mn>0</mn></msub><mo>−</mo><mi>m</mi></mrow></math> masako gasak hasierako <em>une batean</em> jaurtitzen badira, zein da <math display=\"inline\"><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> erlazioa? <br>(d) Iruzkina egin emaitzari."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Masa aldakorra (III)",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sistema inertzial batean geldi dagoen espazio-ontzi baten masa <math display=\"inline\"><msub><mi>m</mi><mn>0</mn></msub></math> da. Une batean gasak atzerantz jaurtitzen hasten da. Gasen abiadura eskalar konstantea <math display=\"inline\"><mi>u</mi></math> da, <em>ontziaren sisteman</em>, eta amaieran ontzia <math display=\"inline\"><mi>v</mi></math> abiaduraz higi dadin (hasierako sisteman) nahi da. Nola aukeratu behar da <math display=\"inline\"><mi>u</mi></math> abiadura eraginkortasuna maximoa izateko, hau da, gasak igortzeko erabiltzen den energiaren zatirik handiena ontziaren energia zinetikoan erabiltzeko? Zein da eraginkortasun maximo hori? Eta igorritako gasen masa osoa?"
      },
      {
       "mota": "testua",
       "html": "<em>Iradokizuna</em>"
      },
      {
       "mota": "testua",
       "html": ": Idatzi <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>a</mi><mi>u</mi></mrow></math> eta erabili <math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mi>a</mi></msup><mo>=</mo><mn>0</mn></mrow></math> ekuazioaren soluzio erreal ez-nulua <math display=\"inline\"><mrow><mi>a</mi><mo>≈</mo><mn>1.59</mn></mrow></math> dela."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Euri tanta (I)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lainoan barrena erortzean, euri tanta baten masa handituz doa, inguruko ura xurgatzen baitu. Demagun handitze hori tantaren azalaren azalerarekiko proportzionala dela. Erabili hipotesi hori <math display=\"inline\"><mrow><mover><mi>m</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>λ</mi><msup><mi>m</mi><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></math> idazteko. Gainera, <math display=\"inline\"><mi>λ</mi></math> konstantea dela eta xurgatutako masa geldi zegoela onartuko dugu. Frogatu tantaren azelerazioa <math display=\"inline\"><mrow><mi>g</mi><mi>/</mi><mn>4</mn></mrow></math> dela, hasierako une batean tantaren masa eta abiadura arbuiagarriak baziren."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Euri tanta (II)",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demagun, orain, 1.94 problemako tantaren masaren handitzea, ekortzen duen uraren bolumenarekiko proportzionala dela: <math display=\"inline\"><mrow><mover><mi>m</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>λ</mi><msup><mi>m</mi><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><mi>v</mi></mrow></math>. Zein da tantaren azelerazioa? <em>Iradokizuna</em>: Hasieran erabili <math display=\"inline\"><mi>m</mi></math> masa aldagai independentetzat: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>m</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>m</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>w</mi><mo>≡</mo><msup><mi>v</mi><mn>2</mn></msup></mrow></math> aldagai-aldaketa ere, erabilgarria izan daiteke."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Masa aldakorra (IV)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Marruskadurarik gabe zuzen batean higitzen den bagoneta baten gainean pertsona bat dago. Bagonetaren masa <math display=\"inline\"><mi>M</mi></math> da eta pertsonarena <math display=\"inline\"><mi>m</mi></math>. Sistema <math display=\"inline\"><mi>v</mi></math> abiaduraz higitzen denean, pertsona korrika hasten da, atzerantz, eta bagonetarekiko <math display=\"inline\"><mi>u</mi></math> abiaduraz higitzen denean bagonetaren atzeko muturretik erortzen da. Zein da amaieran bagonetaren abiadura?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/c32ddcbbdf45f20d.svg",
       "zabalera": 249
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
       "html": "Alfonbra baten ertz bat irudian erakusten den moduan, <math display=\"inline\"><mi>v</mi></math> abiadura konstantez, mugiarazten da. Kalkulatu horretarako erabili behar den indarrik txikiena, alfonbraren masa <math display=\"inline\"><mi>m</mi></math> bada eta luzera <math display=\"inline\"><mi>L</mi></math>."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/9d69be6f02283573.svg",
       "zabalera": 258
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
       "html": "Irudiko toberak <math display=\"inline\"><mi>n</mi></math> kilogramo harea jartzen ditu zinta garraiatzailean segundo bakoitzean. Nolako potentzia egin behar du motorrak zinta <math display=\"inline\"><mi>v</mi></math> abiadura konstante mantentzeko? Zenbat potentzia bihurtzen da bero?"
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
       "html": "Motor baten eraginez, irudiko zilindro horizontalak abiadura angeluar konstante berdinez biratzen direnean, barra astun bat jartzen zaie gainean. Jakina, bi zilindroak noranzko berean biratzen badira, barra ere hasiko da higitzen noranzko horretan, erori arte. Zer gertatuko da bi zilindroen biraketa-noranzkoak kontrakoak badira?"
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
       "html": "Txalupa hasieran pausagunean badago eta marinela brankatik astiro-astiro txoparaino badoa, zein da txalupak kaiarekiko egiten duen distantzia?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erreferentzia-puntua",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demagun <math display=\"inline\"><mi>O</mi></math> eta <math display=\"inline\"><msup><mi>O</mi><mo>′</mo></msup></math> puntuak finko daudela. Egiaztatu puntu horiekiko momentu angeluar osoen eta kanpo-indarren indar-momentu osoen arteko erlazioak hauexek direla, momentu lineal osoa <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑷</mi></math> bada eta kanpo-indar osoa <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math>:"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      },
      {
       "mota": "testua",
       "html": "Ondorioztatu <em>momentu angeluar (indar-momentu) osoa ez dela erreferentzia-puntuaren menpekoa baldin eta soilik baldin momentu lineal (kanpo-indar) osoa nulua bada</em>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Masaren kontserbazioa",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kontsidera dezagun partikulen arteko talka bat. Froga ezazu momentu linealaren kontserbazio-legea erreferentzia-sistema inertzial guztietan betetzen denez, masa osoa kontserbatzen dela, partikulen kopurua edota masak aldatzen badira ere."
      },
      {
       "mota": "testua",
       "html": "<em>Oharra</em>"
      },
      {
       "mota": "testua",
       "html": ": 3.9 atalean (eta 3.95 probleman) ikusiko dugunez, erlatibitatea berezian masa osoa ez da kontserbatzen talka ez bada elastikoa, nahiz eta momentu lineala sistema inertzial guztietan bete."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Talka elastikoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Talka elastikoaren definizioa behatzailearen menpekoa ez dela egiaztatzeko, frogatu <em>momentu lineala eta energia zinetikoa erreferentzia-sistema inertzial batean kontserbatzen badira, beste sistema inertzial guztietan ere higidura-konstanteak direla</em>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Talka superelastikoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudian erakusten den posiziotik bi bolatxo txiki askatzen dira. Zer gertatuko da, <math display=\"inline\"><mrow><mi>M</mi><mo>&gt;</mo><mi>m</mi><mi>/</mi><mn>3</mn></mrow></math> denean, lurra jo ondoren, talka elastikoa bada? Eztabaidatu, bereziki, <math display=\"inline\"><mrow><mi>m</mi><mo>≪</mo><mi>M</mi></mrow></math> kasua. Zertarako erabili behar da <math display=\"inline\"><mrow><mi>M</mi><mo>&gt;</mo><mi>m</mi><mi>/</mi><mn>3</mn></mrow></math> baldintza?"
      },
      {
       "mota": "testua",
       "html": "<em>Iradokizuna</em>"
      },
      {
       "mota": "testua",
       "html": ": Azterketa egiteko, eman beheko masak zoruarekin topo egin ondoren, gorantz abiatzen den une berean oraindik beherantz datorren goiko partikula aurkitzen duela."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/c3e74bef11d218a0.svg",
       "zabalera": 122
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
       "html": "Egiaztatu zuzenean kalkulu bektorialaren bidez, irudirik erabili gabe, (1.179) eta (1.180) emaitzak."
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
       "html": "Eman dezagun <math display=\"inline\"><mi>α</mi></math> partikulak erabiltzen direla protoiak bonbardatzeko. Egiaztatu sakabanatze-angelu maximoa <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>≈</mo><mn>14.58</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> dela. Zer gertatzen da protoiekin elektroiak erasotzen direnean? (<math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>≈</mo><mn>0.03</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> lortu zuten Rutherfordek eta Marsdenek 1909an egindako esperimentuetan.)"
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
       "html": "Pausagunean dagoen nukleo baten eraginez, protoi baten norabideak <math display=\"inline\"><mrow><mn>56</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> balioko desbideratzea pairatzen du, nukleoaren atzerapen-angelua <math display=\"inline\"><mrow><mn>60</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> delarik. Zeintzuk dira nukleoaren masa atomikoa eta eraman duen energia zinetikoaren frakzioa?"
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
       "html": "Nolakoak dira norabide elkarzutetan higitzen ari diren bi partikulen masak, elkarrekin talka elastiko bat egin ondoren haietako bat geldi geratzen bada?"
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
       "html": "Nolakoak dira higitzen ari diren masa bereko bi partikulen norabideak, elkarrekin talka elastiko bat egin ondoren haietako bat geldi geratzen bada?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Talka guztiz inelastikoa (I)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Horrela deitzen da talka, ondoren partikulak loturik geratzen badira. Froga ezazu aipaturiko kasuan energia zinetikoaren galera maximoa dela (masa osoa kontserbatzen bada, behintzat). <em>Iradokizuna</em>: Gogoratu masa-zentroaren sistemaren erabilgarritasuna."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Talka elastikoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko partikularen eta hormaren abiadurak <math display=\"inline\"><mi>v</mi></math> eta <math display=\"inline\"><mi>V</mi></math> dira, hurrenez hurren. Talka elastikoaren ondorengo partikularen abiadura hiru modu desberdinetara kalkula daiteke. <br>1. Egin kalkulua masa-zentroaren (hormaren) sisteman eta erabili Galileoren transformazioa laborategian neurturiko abiadura aurkitzeko. <br>2. Eman hormaren <math display=\"inline\"><mi>M</mi></math> masa finitua dela, egin kalkulua laborategiko sisteman, eta aurkitu <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mi>∞</mi></mrow></math> limitea. <br>3. Ebatzi problema zuzenean laborategiko sisteman, hormak egindako lana kalkulatuz."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/ddb7f3d96cc0ef14.svg",
       "zabalera": 234
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
       "html": "Aurreko problemaren soluzioa asmatu baduzu, azter dezagun nola dabiltzan lurrin-trenak. Ez al dira kontrakoak izango bielaren eraginak irudiko bi kasuetan? Zergatik doa beti aurrera gurpila?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Abiadura erlatiboa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kontsidera dezagun 1.5.7 atalean aztertu ditugun bi partikulen arteko talka elastikoetako bat. Froga ezazu, inolako kalkulurik egin gabe, bi partikulen arteko abiadura erlatiboa biratu egiten dela, modulua aldatu gabe."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Grabitate-zentroa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Solido zurrun bateko puntu guztiak erakartzen ditu Lurrak eta, ondorioz, pisu bat eta posizio-bektore bat dagozkio puntu bakoitzari. Hala ere, solidoan eragindako kanpo-indarren batura eta momentu osoa kalkulatzean (gai honetako problema batean, adibidez, 5. gaian pendulu fisikoa eta zibaren prezesioa aztertzean), pisu osoa masa-zentroan aplikatuta balego bezala egiten dugu kalkula. Zergatik da egokia hori egitea?"
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
       "html": "Egia al da partikula-sistema baten energia potentziala partikulen energia potentzialen batura dela?"
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
       "html": "Mahai horizontal leun batean pausagunean dauden bi partikula berdin lotzen dituen malgukia deformatu gabe dago, irudian ikusten den bezala. Hirugarren partikula berdin batek <math display=\"inline\"><mi>v</mi></math> abiaduraz aurrekoetako bat jotzen du, loturik geratzen dira biak. Nola higitzen da sistemaren masa-zentroa talka ondoren? Zein da malgukiaren deformazio maximoa?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/e64a2b7e83e332c8.svg",
       "zabalera": 196
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Newtonen sehaska",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko jostailuan, zenbait bolatxo berdin esekitzen dira bi hagatxo horizontaletatik, pausagune bertikalean ondoz ondoko bolatxoek elkar ukitzen dutelarik. Mutur bateko bolatxoa besteetatik aldendu ondoren askatzen bada, zer gertatzen da? Zergatik? <em>Oharra</em>: Sistema honen azterketa sakona ez da erraza, hemen bakarrik eskatzen da azalpen kualitatibo bat."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Higidura erlatiboa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kontsidera dezagun bi partikulez osaturiko sistema mekaniko bat. Defini ditzagun masa-zentroarekin batera eta sistemaren masa osoarekin higitzen den alegiazko partikularen energia zinetikoa eta momentu angeluarra, masa-zentroren translazioari dagozkionak: <math display=\"block\"><mrow><msub><mi>T</mi><mtext mathvariant=\"normal\">MZ</mtext></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><msup><mi mathvariant=\"bold-italic\">𝑷</mi><mn>2</mn></msup><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑳</mi><mtext mathvariant=\"normal\">MZ</mtext></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Bestalde, masa laburbilduaren higidura erlatiboari dagozkionak ere kontsideratuko ditugu: <math display=\"block\"><mrow><msub><mi>T</mi><mtext mathvariant=\"normal\">erl</mtext></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>−</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑳</mi><mtext mathvariant=\"normal\">erl</mtext></msub><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>−</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Froga ezazu sistemaren energia zinetiko osoa eta momentu angeluar osoa modu honetan idatz daitezkeela: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msub><mi>T</mi><mtext mathvariant=\"normal\">MZ</mtext></msub><mo>+</mo><msub><mi>T</mi><mtext mathvariant=\"normal\">erl</mtext></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑳</mi><mtext mathvariant=\"normal\">MZ</mtext></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝑳</mi><mtext mathvariant=\"normal\">erl</mtext></msub><mi>.</mi></mrow></math> Ondorioztatu masa-zentroaren sisteman neurtutako energia zinetikoa eta momentu angeluarra <math display=\"inline\"><mrow><msup><mi>T</mi><mo>*</mo></msup><mo>=</mo><msub><mi>T</mi><mtext mathvariant=\"normal\">erl</mtext></msub></mrow></math> eta <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑳</mi><mo>*</mo></msup><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑳</mi><mtext mathvariant=\"normal\">erl</mtext></msub></mrow></math> direla."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Talka guztiz inelastikoa (II)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi partikula askeren masak <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> dira eta abiadurak <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub></math>. Elkarrekin topo egitean loturik geratzen dira. Frogatu talkan galdutako energia zinetikoa honako hau dela: <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
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
       "html": "Ontzi itxi bateko hondoan euli bat dago. Ontzia orekan dago irudiko balantzan. Zer gertatzen da eulia hegan egiten hasten bada? <em>Oharra</em>: Erantzun kualitatiboa eskatzen da."
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
       "html": "Bi partikula-sorta uniformeren abiadurak kontrakoak dira ioi-azeleragailu batean. Sorta bateko partikulak <math display=\"inline\"><mrow><msubsup><mrow></mrow><mn>3</mn><mn>7</mn></msubsup><mtext mathvariant=\"normal\">Li</mtext></mrow></math> atomoen ioiak dira eta beste sortarekin elkarrekin topo egitean pairatzen duten desbideratze maximoa <math display=\"inline\"><mrow><mn>23.6</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> da. Zer dira beste sortako partikulak?"
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
       "html": "Harea-erloju bat orekan dago balantza batean. Zer gertatzen da, balbula zabaltzen bada? <em>Oharra</em>: Erantzun kualitatiboa eskatzen da."
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
       "html": "Motorrari esker, tren-makina baten azelerazioa konstantea da. Pausagunetik abiatzen da eta <math display=\"inline\"><mi>τ</mi></math> denbora-tartea pasatu ondoren geldi dagoen bagoi batekin egiten du topo. Makinaren eta bagoiaren masak berdinak dira eta talka elastikoa. Marruskadura guztiak arbuiatzen badira, noiz gertatuko dira hurrengo talkak?"
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
       "html": "Irudiko soka orekan badago, zein da bere masa? Marraztu irudian masa-zentroaren posizioa."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/360484bb9c93bf70.svg",
       "zabalera": 216
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
       "html": "Irudiko bi blokeak material berekoak dira eta euren artean <math display=\"inline\"><mi>O</mi></math> lehergailua jarri da. Azken honek eztanda egin ondoren, ezkerreko blokeak <math display=\"inline\"><mi>d</mi></math> distantzia egiten badu geratu arte, zein da eskuinekoak egindako distantzia?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/1d1d2480e85dcdde.svg",
       "zabalera": 258
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
       "html": "Irudiko bi bloke berdinak gainazal horizontal leun baten gainean daude, malguki baten bidez loturik. Hasieran ezkerrekoa hormaren kontra dago eta malgukia deformatu gabe. Oreka-posizio horretatik neurtzen dira bi blokeen <math display=\"inline\"><mi>y</mi></math> eta <math display=\"inline\"><mi>x</mi></math> abzisak. Eskuineko blokea apurka-apurka bultzatzen da <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math> posizioraino eta handik askatzen da. Kalkulatu bi blokeen higidura."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/8fdc7d8981e352f3.svg",
       "zabalera": 275
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Masa-zentroaren higidura",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko bi blokeak mahai horizontal lau batean daude eta eskuinekoaren gainean <math display=\"inline\"><mi>F</mi></math> kanpo-indar konstantea aplikatzen da. Bi gorputzen sistema bat osatzen dute blokeek (erdiko malgukiarekin batera). Aurkitu masa-zentroaren eboluzio-ekuazioa eta frogatu ezin ebatz daitekeela berez (hau da, higidura erlatiboaren ekuazioa ebatzi gabe). Kalkulatu masa-zentroaren posizioa oreka-konfigurazioan eta frogatu barne-indarren menpekoa dela. Iruzkina egin emaitzari."
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
       "html": "<math display=\"inline\"><mi>m</mi></math> masako soka homogeneoa irudiko txirrika leun txikian labaintzen da. Hasieran ia posizio simetrikotik (<math display=\"inline\"><mrow><mi>x</mi><mo>≈</mo><mn>0</mn></mrow></math>) askatzen bada, zein da gero sokaren abiadura eta azelerazioa? Kalkulatu txirrikak eragindako erreakzioa eta frogatu <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi><mi>/</mi><msqrt><mn>8</mn></msqrt></mrow></math> denean sokak txirrika uzten duela. Emandako datuekin jakin daiteke noiz gertatzen den hori?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/00a0d66c2ab4eab6.svg",
       "zabalera": 127
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
       "html": "Demagun 1.5 problemako horma leuna dela eta makilaren eta zoruaren arteko marruskadura estatikoaren koefizientea <math display=\"inline\"><mi>μ</mi></math>. (a) Nolakoa izan behar du <math display=\"inline\"><msub><mi>θ</mi><mn>0</mn></msub></math> angeluak, makila labaintzen has ez dadin? (b) Zer gertatzen da zorua leuna bada eta <math display=\"inline\"><mi>μ</mi></math> hormaren eta makilaren arteko marruskadura estatikoaren koefizientea?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "(Huygens, 1669)",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(a) Irudiko <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> masa puntuala geldi dagoen <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>-ren kontra jaurtitzen da. Talka elastikoa eta buruz-burukoa da. Kalkulatu <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> masak amaieran duen abiadura. <br>(b) Orain, bitartean jartzen da <math display=\"inline\"><msub><mi>m</mi><mn>3</mn></msub></math> partikula puntuala. Talkak elastikoak eta buruz-burukoak badira, zein da <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> masak amaieran duen abiadura?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/e5b7e85b5617d8ab.svg",
       "zabalera": 209
      },
      {
       "mota": "testua",
       "html": "Frogatu bigarren kasuko amaierako abiadura hori beti dela lehen kasukoa baino handiagoa, <math display=\"inline\"><msub><mi>m</mi><mn>3</mn></msub></math> beste bien bitartekoa bada (<math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>&lt;</mo><msub><mi>m</mi><mn>3</mn></msub><mo>&lt;</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math> edo <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>&gt;</mo><msub><mi>m</mi><mn>3</mn></msub><mo>&gt;</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>), eta maximoa <math display=\"inline\"><msqrt><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow></msqrt></math> batezbesteko geometrikoa denean. Aurkitu balio maximo hori."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "EHU 2000, ISBN 84-8373-295-5",
     "xehetasuna": "Examenes resueltos (1996-2000), mk:1",
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
     "html": "Partikula bat <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext></mrow></math> abiaduraz higitzen da <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ekuazioko <em>kardioide</em> bat zehar. Frogatu azelerazioaren osagai erradiala konstantea dela. Frogatu halaber azelerazio totalaren magnitudea zein abiadura angeluarra <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msqrt><mi>r</mi></msqrt></mrow></math>-rekiko proportzionalak direla. [<em>Oharra</em>: Aurreko ariketa gisa, azelerazioaren osagaien espresioak koordenatu polarretan deduzi itzazu]."
    },
    {
     "mota": "testua",
     "html": "[Irudia: jatorria <math display=\"inline\"><mi>O</mi></math> duen ardatz kartesiarren sistema, <math display=\"inline\"><mi>x</mi></math> (horizontala) eta <math display=\"inline\"><mi>y</mi></math> (bertikala); <math display=\"inline\"><mi>O</mi></math>-tik pasatzen den kurba bat (kardioidea irudikatzen duen zirkunferentzia) zeinean <math display=\"inline\"><mi>P</mi></math> puntua kokatzen den; <math display=\"inline\"><mi>r</mi></math> erradio-bektorea <math display=\"inline\"><mi>O</mi></math>-tik <math display=\"inline\"><mi>P</mi></math>-ra doa, <math display=\"inline\"><mi>x</mi></math> ardatzarekin <math display=\"inline\"><mi>θ</mi></math> angelua osatuz.]"
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
     "html": "Koordenatu polarrak erabiliz, adieraz ditzagun erradio-bektore eta zeharkako bertsoreak espazioan finkoak diren <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒊</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒋</mi></math> bertsore unitarioen funtzioan. Era berean, bertsore horien denbora-deribatuak arazorik gabe lortzen dira. Honela:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>r</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒋</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>θ</mi></msub><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒋</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mover><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mo accent=\"true\">̇</mo></mover><mi>r</mi></msub><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>θ</mi></msub></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mo accent=\"true\">̇</mo></mover><mi>θ</mi></msub><mo>=</mo><mi>−</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>r</mi></msub></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Kontuan hartuta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>r</mi><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>r</mi></msub></mrow></math> dela, erraza da abiaduraren eta azelerazioaren espresioak osagai erradial eta zeharkakoetan lortzea:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>r</mi></msub><mo>+</mo><mi>r</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>θ</mi></msub></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒗</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>r</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>r</mi></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>r</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>θ</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>v</mi></math> abiaduraren konstantearen baldintzatik, honako erlazioa atera dezakegu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext><mo>=</mo><mi>A</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Gainera, ibilbidearen ekuaziotik, denborarekiko ondoko deribazioen bidez, honako erlazioak lor ditzakegu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>k</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>r</mi></math> eta <math display=\"inline\"><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></math> <math display=\"inline\"><mi>θ</mi></math>-ren eta <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>-ren funtzioan abiaduraren konstantearen espresioan ordezkatuz, hona iritsiko gara:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mi>k</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mi>A</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> askatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mi>v</mi><msqrt><mrow><mn>2</mn><msup><mi>k</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mfrac><mo>=</mo><mfrac><mi>v</mi><msqrt><mrow><mn>2</mn><mi>k</mi><mi>r</mi></mrow></msqrt></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Azelerazioaren osagai erradialaren espresiorako, <math display=\"inline\"><mrow><msub><mi>a</mi><mi>r</mi></msub><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>r</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>, deribatu dezagun lehenik abiaduraren konstantea denborarekiko. Honela:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>r</mi><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>r</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mrow><msup><mi>r</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover></mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Gainera, aurretik lortutako <math display=\"inline\"><mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mi>k</mi><mi>r</mi></mrow></math> erlazioa denborarekiko deribatuz, <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mi>A</mi><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext></mrow></math> dela kontuan hartuta, espresio hau lor dezakegu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Erlazio hauek azelerazio erradialaren <math display=\"inline\"><msub><mi>a</mi><mi>r</mi></msub></math> espresioan ordezkatuta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>r</mi></msub><mo>=</mo><mi>−</mi><mn>2</mn><mi>r</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mrow><msup><mi>r</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover></mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></mfrac><mo>=</mo><mi>−</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>k</mi></mfrac><mo>+</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>k</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mn>3</mn><msup><mi>v</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>k</mi></mrow></mfrac><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Azelerazioaren moduluaren kalkulurako, lehenago zeharkako osagaiaren balioa lortu behar dugu, eta horretarako beharrezko terminoak jada kalkulatu ditugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>θ</mi></msub><mo>=</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>r</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mn>2</mn><mi>k</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>k</mi><mi>r</mi></mrow></mfrac><mfrac><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mfrac></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mi>−</mi><mn>2</mn><mi>k</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>k</mi><mi>r</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>k</mi><mi>r</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>k</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mn>3</mn><msup><mi>v</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>r</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, azelerazio totalaren modulua honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><msqrt><mrow><msubsup><mi>a</mi><mi>r</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>a</mi><mi>θ</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><mfrac><mrow><mn>3</mn><msup><mi>v</mi><mn>2</mn></msup></mrow><mn>4</mn></mfrac><msqrt><mrow><mfrac><mn>1</mn><msup><mi>k</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mo>=</mo><mfrac><mrow><mn>3</mn><msup><mi>v</mi><mn>2</mn></msup></mrow><mn>4</mn></mfrac><msqrt><mfrac><mn>2</mn><mrow><mi>k</mi><mi>r</mi></mrow></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><mfrac><mn>1</mn><mi>k</mi></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac></mrow></math> ordezkapena egin dugun."
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
     "html": "A blokea B blokearekiko irrista daiteke, eta B, bere aldetik, lur erabat leun eta horizontalean irrista daiteke. A eta B blokeen artean <math display=\"inline\"><mi>μ</mi></math> koefizienteak karakterizatutako marruskadura dago. Hasierako abiadurak <math display=\"inline\"><mrow><msub><mi>v</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> badira, aurkitu bi blokeen azken abiadurak eta A-k B-ren gainean egiten duen distantzia. Zein da sistemaren energia zinetikoaren galera?"
    },
    {
     "mota": "testua",
     "html": "[Enuntziatuaren irudia: higiduraren bi une. Hasierako unea (ezkerra): A blokea (masa <math display=\"inline\"><mi>m</mi></math>) B blokearen gainean (masa <math display=\"inline\"><mi>m</mi></math>), lur marradunaren gainean; <math display=\"inline\"><mi>μ</mi></math> koefizientea bi blokeen artean adierazita; A blokea <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiaduraz higitzen da eskuinerantz. Azken unea (eskuina): A (masa <math display=\"inline\"><mi>m</mi></math>) B-ren gainean (masa <math display=\"inline\"><mi>m</mi></math>); A-k B-ren gainean egindako <math display=\"inline\"><mi>d</mi></math> distantzia markatzen da; bi blokeak <math display=\"inline\"><mi>v</mi></math> abiaduraz higitzen dira eskuinerantz.]"
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
     "html": "Goiko irudian bi une agertzen dira, hasierakoa eta azkena, sistemaren higiduran zehar. Sistema osotasun gisa hartuta, bi blokeen artean marruskadura badago ere, ez da horrela gertatzen beheko blokearen eta lurraren artean, eta, beraz, higiduraren norabidean bi blokeen multzoaren gaineko indarren erresultantea nulua da (A blokeak B-ren gainean eta B blokeak A-ren gainean egiten dituzten marruskadura-indarrak elkar deuseztatzen dira akzio-erreakzioaren legea betetzen dutelako). Egoera horietan, sistemaren momentu lineala konstante mantenduko da higiduraren norabidean. Ikuspuntu kualitatibotik, A blokea moteltzen hasten da bere higiduraren aurkako noranzkoan eragiten dion marruskadura-indarra dela eta, B blokea, berriz, A blokeak beraren gainean egiten dion eta eskuinerantz tiratzen duen marruskadura-indarrak azeleratzen du. Noiz arte? Bi blokeen abiadurak berdindu eta erlatiboki geldi dauden arte. Une horretan, <math display=\"inline\"><mi>v</mi></math> abiaduraz higitzen ari izango dira, A-k B-arekiko <math display=\"inline\"><mi>d</mi></math> distantzia bat desplazatu ondoren. Beraz, momentu linealaren kontserbazio-printzipioa sistemari aplikatuz, honela idatziko dugu:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/fd4c54756182c76d.svg\" alt=\"m v_0 = 2 m v #h(2em) arrow.r #h(2em) v = v_0 / 2\" style=\"width:15.256em;height:2.301em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Beraz, sistema abiadura uniformez higitzen amaituko da mahaiaren gainean, bi blokeak bat bakarrik balira bezala higituz."
    },
    {
     "mota": "testua",
     "html": "A-k B-ren gainean egindako <math display=\"inline\"><mi>d</mi></math> distantziaren kalkulua erraz egin daiteke energiaren teorema kontuan hartuta: sistemaren energia zinetikoaren aldaketa marruskadurak egindako lanaren berdina da:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/54aa225a430efc80.svg\" alt=\"Delta T = 1 / 2 \\( 2 m \\) (v_0 / 2)^2 - 1 / 2 m v_0^2 = \\( - mu m g \\) thin d #h(2em) arrow.r #h(2em) d = frac(v_0^2, 4 mu g)\" style=\"width:30.963em;height:3.006em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "[Kontuan har bedi marruskadurak desplazamenduaren aurkako noranzkoan eragiten duela, eta horregatik dela negatiboa berak egindako lanaren zeinua]."
    },
    {
     "mota": "testua",
     "html": "[Irudia: A blokea (masa <math display=\"inline\"><mi>m</mi></math>) B blokearen gainean (masa <math display=\"inline\"><mi>m</mi></math>), lur marradunaren gainean; goiko blokearen gainean <math display=\"inline\"><mrow><mi>−</mi><mi>μ</mi><mi>m</mi><mi>g</mi></mrow></math> marruskadura- indarra ezkerralderantz adierazten da eta beheko blokearen gainean <math display=\"inline\"><mrow><mi>+</mi><mi>μ</mi><mi>m</mi><mi>g</mi></mrow></math> eskuinalderantz.]"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Beste metodo bat</em>: Erabil dezagun formalismo bektoriala problema ebazteko, bi gorputz bakoitzaren gainean eragiten duen indar-multzoa aztertuz eta higiduraren baldintzak ezarriz. Goiko irudian ikusten da analisi hori. Bertan, goiko eta beheko masen gainean horizontalki eragiten duten indarrak baino ez ditugu adierazi, haien balioak zuzenean emanez marruskadura-koefizientearen <math display=\"inline\"><mi>μ</mi></math> funtzioan. Dagozkion higidura-ekuazioak Newtonen bigarren legearen aplikazio zuzenetik lortzen dira:"
     ]
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/1b6cf413a00064da.svg\" alt=\"m dot.double(x)_A = - mu m g #h(2em) arrow.r #h(2em) dot.double(x)_A = - mu g #h(2em) arrow.r #h(2em) dot(x)_A = - mu g t + C\" style=\"width:32.012em;height:1.313em\" loading=\"lazy\"> <img class=\"formula formula-d\" src=\"media/formulak/f633d8b25dde4e28.svg\" alt=\"m dot.double(x)_B = + mu m g #h(2em) arrow.r #h(2em) dot.double(x)_B = + mu g #h(2em) arrow.r #h(2em) dot(x)_B = + mu g t + D\" style=\"width:32.073em;height:1.287em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>C</mi></math> eta <math display=\"inline\"><mi>D</mi></math> konstanteak hasierako baldintzetatik lortzen dira: <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo>→</mo><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mrow><mi>A</mi><mn>0</mn></mrow></msub><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mrow><mi>B</mi><mn>0</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, hortik: <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math>. Beraz:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/bfe3eadf2c483af6.svg\" alt=\"dot(x)_A = v_0 - mu g t #h(2em) arrow.r #h(2em) x_A = v_0 t - 1 / 2 mu g t^2 + C&#x27;\" style=\"width:24.813em;height:2.560em\" loading=\"lazy\"> <img class=\"formula formula-d\" src=\"media/formulak/4b9e569142ef04b2.svg\" alt=\"dot(x)_B = + mu g t #h(2em) arrow.r #h(2em) x_B = + 1 / 2 mu g t^2 + D&#x27;\" style=\"width:21.248em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Berriro ere, <math display=\"inline\"><msup><mi>C</mi><mo>′</mo></msup></math> eta <math display=\"inline\"><msup><mi>D</mi><mo>′</mo></msup></math> konstanteak muga-baldintzetatik lortzen dira: <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>x</mi><mrow><mi>A</mi><mn>0</mn></mrow></msub><mo>=</mo><msub><mi>x</mi><mrow><mi>B</mi><mn>0</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, hortik: <math display=\"inline\"><mrow><msup><mi>C</mi><mo>′</mo></msup><mo>=</mo><msup><mi>D</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>. Hau da:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/528732e6f11d3098.svg\" alt=\"x_A = v_0 t - 1 / 2 mu g t^2 #h(2em) #h(2em) x_B = + 1 / 2 mu g t^2\" style=\"width:20.670em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Teorian, higidura-ekuazio hauek partikula bakoitzaren abiadura eta posizioaren balioetara eramango gintuzkete, denbora oso handietarako, <math display=\"inline\"><mrow><mi>−</mi><mi>∞</mi></mrow></math>ra jotzen baitute goiko masaren kasuan eta <math display=\"inline\"><mrow><mi>+</mi><mi>∞</mi></mrow></math>ra behekoaren kasuan, eta hori faltsua da. Oraindik ezarri beharreko beste baldintza bat falta zaigu, problemaren analisi kualitatibotik datorrena: blokeak elkarrekiko higitzen ari izango dira erlatiboki geldi dauden arte, une horretan desagertzen baita marruskadura-indarra eta blokeek elkarrekin jarraitzen baitute, abiadura jada aldatu gabe, beheko blokearen eta lurraren artean marruskadurarik ez baitago. Aurreko baldintza honela islatzen da:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/f09124fbaeac07fe.svg\" alt=\"dot(x)_A = dot(x)_B #h(2em) arrow.r #h(2em) v_0 - mu g t = mu g t #h(2em) arrow.r #h(2em) t = frac(v_0, 2 mu g)\" style=\"width:27.678em;height:2.551em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Hau da, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mfrac><msub><mi>v</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>μ</mi><mi>g</mi></mrow></mfrac></mrow></math> denbora igaro ondoren, abiadurak berdindu egiten dira, honako balio honetara iritsiz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>A</mi></msub><mo>=</mo><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>B</mi></msub><mo>=</mo><mfrac><msub><mi>v</mi><mn>0</mn></msub><mn>2</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau da, aurretik lortu dugun abiadura. Era berean, balio hori ordura arte bi blokeek egindako distantzien espresioetan ordezkatuz, aurretik lortutako espresiora iristen gara:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mo>=</mo><msub><mi>x</mi><mi>A</mi></msub><mo>−</mo><msub><mi>x</mi><mi>B</mi></msub><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi>t</mi><mo>−</mo><mi>μ</mi><mi>g</mi><msup><mi>t</mi><mn>2</mn></msup><mo>=</mo><mfrac><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mn>4</mn><mi>μ</mi><mi>g</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "[Irudia: <math display=\"inline\"><mi>x</mi></math>-<math display=\"inline\"><mi>y</mi></math> ardatz-sistema <math display=\"inline\"><mi>O</mi></math> jatorriarekin. A blokea (masa <math display=\"inline\"><mi>m</mi></math>) B blokearen gainean (masa <math display=\"inline\"><mi>m</mi></math>); A-ren ezkerreko muturraren posizioa <math display=\"inline\"><msub><mi>x</mi><mi>A</mi></msub></math> da eta B-ren ezkerreko muturrarena <math display=\"inline\"><msub><mi>x</mi><mi>B</mi></msub></math> (<math display=\"inline\"><mi>y</mi></math> ardatzean puntu bidezko lerroekin neurtuta). A-ren gainean <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>A</mi></msub></math> indarra eragiten du ezkerralderantz eta B-ren gainean <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>B</mi></msub></math> indarra eskuinalderantz.]"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Beste metodo bat gehiago</em>: Erabil dezagun formalismo lagrangearra higidura-ekuazio berberetara iristeko. Sistemak bi askatasun-gradu ditu, <math display=\"inline\"><msub><mi>x</mi><mi>A</mi></msub></math> eta <math display=\"inline\"><msub><mi>x</mi><mi>B</mi></msub></math>, goiko irudian agertzen direnak. Gorputz bakoitzaren gainean norabide horizontalean eragiten duen indarra honako hau da:"
     ]
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/f8aeb192c18b9ab0.svg\" alt=\"upright(bold(F))_A = - mu m g thin upright(bold(i)) #h(2em) #h(2em) upright(bold(F))_B = mu m g thin upright(bold(i))\" style=\"width:17.333em;height:1.290em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Norabide bertikalean ez dago higidurarik, eta, beraz, ez dugu aldagai hori kontuan hartuko. Lagrange-ren ekuazioak honela idatz daitezke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>T</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>T</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><msub><mi>Q</mi><mi>j</mi></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi></msub><mo>⋅</mo><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Gure kasuan, bigarren gaia marruskadura-indarrek osatzen dute soilik, konstanteak direnak (eta ez aldagai orokortuen funtzioak, eta horrek bide honetatik jarraitzea eragotziko zigukeen). Hasierako baldintza gisa, honako hauek ezarriko ditugu:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/def9522fcd8a5f69.svg\" alt=\"x_(A 0) = 0 #h(2em) #h(2em) dot(x)_(A 0) = v_0\" style=\"width:13.366em;height:1.297em\" loading=\"lazy\"> <img class=\"formula formula-d\" src=\"media/formulak/8fb8e8c3275d1a69.svg\" alt=\"x_(B 0) = 0 #h(2em) #h(2em) dot(x)_(B 0) = 0\" style=\"width:12.864em;height:1.297em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Bi masen ezkerreko muturren erradio-bektoreak honako hauek dira: <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>A</mi></msub><mo>=</mo><msub><mi>x</mi><mi>A</mi></msub><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>B</mi></msub><mo>=</mo><msub><mi>x</mi><mi>B</mi></msub><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math>, eta, beraz, koordenatu orokortu bakoitzerako bigarren gaiko indar orokortuak honako hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>Q</mi><mi>A</mi></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>A</mi></msub><mo>⋅</mo><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>A</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>A</mi></msub></mrow></mfrac><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>B</mi></msub><mo>⋅</mo><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>B</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>A</mi></msub></mrow></mfrac><mo>=</mo><mi>−</mi><mi>μ</mi><mi>m</mi><mi>g</mi></mrow></math> <math display=\"block\"><mrow><msub><mi>Q</mi><mi>B</mi></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>A</mi></msub><mo>⋅</mo><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>A</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>B</mi></msub></mrow></mfrac><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>B</mi></msub><mo>⋅</mo><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>B</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>B</mi></msub></mrow></mfrac><mo>=</mo><mi>+</mi><mi>μ</mi><mi>m</mi><mi>g</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Azkenik, sistemaren energia zinetikoa, erraz ikusten den bezala, honako hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>A</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>B</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hortik, Lagrange-ren ekuazioen lehenengo gaiak berehala kalkulatzen dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/cac81be6c589da51.svg\" alt=\"frac(partial T, partial dot(x)_A) = m dot(x)_A #h(2em) #h(2em) frac(partial T, partial x_A) = 0\" style=\"width:15.635em;height:2.904em\" loading=\"lazy\"> <img class=\"formula formula-d\" src=\"media/formulak/0110093345101557.svg\" alt=\"frac(partial T, partial dot(x)_B) = m dot(x)_B #h(2em) #h(2em) frac(partial T, partial x_B) = 0\" style=\"width:15.645em;height:2.904em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "eta azkenik:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/943642d260edc444.svg\" alt=\"m dot.double(x)_A = - mu m g #h(2em) arrow.r #h(2em) dot.double(x)_A = - mu g\" style=\"width:18.329em;height:1.275em\" loading=\"lazy\"> <img class=\"formula formula-d\" src=\"media/formulak/22e834ea7d0ae8cc.svg\" alt=\"m dot.double(x)_B = + mu m g #h(2em) arrow.r #h(2em) dot.double(x)_B = + mu g\" style=\"width:18.335em;height:1.275em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "jada ezagunak diren ekuazioak, eta, beraz, emaitza berberetara eramaten gaituztenak."
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
     "html": "<math display=\"inline\"><mi>m</mi></math> masako pertsona bat <math display=\"inline\"><mi>L</mi></math> distantzia jaisten da igogailu batean. Distantziaren lehenengo herenean, jaitsieraren azelerazioa konstantea da; bigarren herenean, abiadura konstante mantentzen da; eta azken herenean, igogailuak eragile konstantea den indar geldiarazle bat jasaten du. Jaitsiera osoaren denbora partikula batek erorketa askean <math display=\"inline\"><mrow><mn>4</mn><mi>L</mi></mrow></math> distantzia egiteko behar duenaren berdina bada, zein izango da pertsonak igogailuaren gainean egiten duen indarra jaitsieraren lehen tartean? [<em>Oharra</em>: Igogailua geldirik abiatzen da eta geldirik amaitzen da]."
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
     "html": "Izan bedi <math display=\"inline\"><mi>a</mi></math> lehen tartean jaitsieraren azelerazio konstantea, <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> iraupena duela suposatuko duguna. Denbora horretan, igogailuak <math display=\"inline\"><mrow><mi>L</mi><mi>/</mi><mn>3</mn></mrow></math> distantzia egiten du eta <math display=\"inline\"><mi>v</mi></math> abiadura lortzen du. <math display=\"inline\"><mrow><mi>L</mi><mi>/</mi><mn>3</mn></mrow></math> luzerako bigarren tartea <math display=\"inline\"><mi>v</mi></math> abiadura konstantez egiten du, <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math> iraupenarekin. Azken tartean, aurrekoen luzera berekoa, geldiarazte- indar konstante bat jasaten du, honek berdin-berdin konstantea den dezeleraizio bat eragiten diona, <math display=\"inline\"><msup><mi>a</mi><mo>′</mo></msup></math> deituko dioguna. Baina tarte dezeleraizatzailearen luzera lehen tarte azeleratzailearen berdina denez eta muga-baldintzak berdinak direnez, nahiz eta alderantzizkoak, <math display=\"inline\"><msup><mi>a</mi><mo>′</mo></msup></math> azelerazio honek (moduluan) lehen tartearen <math display=\"inline\"><mi>a</mi></math> azelerazioarekin bat egin beharko du: <math display=\"inline\"><mrow><msup><mi>a</mi><mo>′</mo></msup><mo>=</mo><mi>a</mi></mrow></math>, eta, beraz, bi tarteen iraupenak ere bat egingo dute."
    },
    {
     "mota": "testua",
     "html": "Lehen tarterako honela idatziko dugu:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/5a0e153e28e0ea98.svg\" alt=\"L / 3 = 1 / 2 a t_1^2 #h(2em) v = a t_1\" style=\"width:11.133em;height:2.606em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Bigarren tarterako:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>L</mi><mn>3</mn></mfrac><mo>=</mo><mi>v</mi><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><mi>a</mi><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ekuazio-multzo bien artean <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math>-ren arteko erlazio bat lor dezakegu. Hau da emaitza:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><msub><mi>t</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hirugarren tartean lehenengoaren erlazio bera betetzen da. Beraz, hiru tarteen ibilbideak adierazten dituzten ekuazioak batzen baditugu, hona iritsiko gara:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>a</mi><msubsup><mi>t</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mi>a</mi><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><mn>6</mn><mi>a</mi><msubsup><mi>t</mi><mn>2</mn><mn>2</mn></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Testuan adierazitako baldintza, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>2</mn><msub><mi>t</mi><mn>1</mn></msub><mo>+</mo><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><mn>5</mn><msub><mi>t</mi><mn>2</mn></msub></mrow></math> izanik, honela idazten da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>4</mn><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>25</mn><mn>2</mn></mfrac><mi>g</mi><msubsup><mi>t</mi><mn>2</mn><mn>2</mn></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Azken bi erlazio horietatik berehala lortzen da <math display=\"inline\"><mi>a</mi></math> azelerazioaren balioa grabitatearen <math display=\"inline\"><mi>g</mi></math> azelerazioaren funtzioan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mn>25</mn><mn>48</mn></mfrac><mi>g</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Igogailuan doan pertsonaren gainean, grabitatearen indarraz gain (beherantz zuzendua), igogailuaren zoruak beraren gainean egiten duen erreakzioa eragiten du, moduluan <math display=\"inline\"><mi>N</mi></math> deituko dioguna, eta gorantz eragiten duena. Newtonen bigarren legea aplikatuz, honako hau lortuko dugu:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/01f64726d05391ad.svg\" alt=\"m g - N = m a = 25 / 48 m g #h(2em) arrow.r #h(2em) N = 23 / 48 m g\" style=\"width:23.355em;height:2.585em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Erreakzio-indar honen <math display=\"inline\"><mi>N</mi></math> balioa moduluan bat dator pertsonak igogailuaren gainean egiten duen indarrarekin."
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
     "html": ""
    },
    {
     "mota": "testua",
     "html": "Mahai horizontal leun baten gainean geldirik dago <math display=\"inline\"><mi>m</mi></math> masako bi partikulaz osatutako sistema bat, <math display=\"inline\"><mi>k</mi></math> konstantea eta luzera naturalaren berdina den <math display=\"inline\"><mi>l</mi></math> luzera duen malguki batez lotuta. Irudian adierazten den bezala, ezkerreko partikularen gainean eragiten du beste <math display=\"inline\"><mi>m</mi></math> masa bereko partikula batek, <math display=\"inline\"><mi>v</mi></math> abiaduraz higituz. Talkaren ondoren, bi partikulak (jaurtigai eta helburu) elkarrekin lotuta geratzen dira eta sistema higitzen hasten da. Prozesu osoa zuzen beraren gainean gertatzen dela suposatuta, Mekanikaren kontserbazio-printzipioak erabili honako hauek jakiteko: a) sistemaren masa-zentroaren <math display=\"inline\"><mi>V</mi></math> abiadura, eta b) malgukiaren <math display=\"inline\"><msub><mi>x</mi><mi mathvariant=\"normal\">max</mi></msub></math> gehieneko deformazioa higiduran zehar."
    },
    {
     "mota": "testua",
     "html": "<strong>Irudia:</strong>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>t</mi><mo>≤</mo><mn>0</mn></mrow></math> egoera: <math display=\"inline\"><mi>m</mi></math> partikula bat <math display=\"inline\"><mi>v</mi></math> abiadura-"
     ]
    },
    {
     "mota": "testua",
     "html": "bektorearekin (eskuinerantz doan gezia); haren eskuinean, beste <math display=\"inline\"><mi>m</mi></math> partikula bat malguki baten bidez (rotulatua <math display=\"inline\"><mrow><mi>k</mi><mo>,</mo><mi>l</mi></mrow></math>) hirugarren <math display=\"inline\"><mi>m</mi></math> partikula batera lotuta. - <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math> egoera: <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math> partikula bat (puntu betea) <math display=\"inline\"><msub><mi>v</mi><mn>12</mn></msub></math> abiadura-bektorearekin (eskuinerantz doan gezia), malguki baten bidez (deformazioa rotulatua <math display=\"inline\"><mi>x</mi></math>) <math display=\"inline\"><msub><mi>v</mi><mn>3</mn></msub></math> abiadura-bektorea duen <math display=\"inline\"><mi>m</mi></math> partikula batera lotuta (eskuinerantz doan gezia)."
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
     "html": "Goiko irudian sistemaren bi egoera agertzen dira, talkaren aurrekoa eta hau gertatu ondorengoa, ondorengo edozein denbora-unetan. Bertan, <math display=\"inline\"><mi>x</mi></math> luzerak malgukiaren deformazioa adierazten du bere luzera naturaletik abiatuta. Malgukiak bere muturretan dauden partikulen gainean egiten dituen indarrek akzio-erreakzioaren legea betetzen dutenez eta talkan zehar gertatzen diren indarrek lege bera betetzen dutenez, sistema osoa sistema isolatu bat da, eta, beraz, sistemarekiko kanpoko indarrik ez dagoenez, momentu lineal osoa konstante mantenduko da. Kontserbazio-printzipio hau, talkaren aurreko eta ondorengo uneetara aplikatuta, honela idatz daiteke:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/24a992f5bb130482.svg\" alt=\"m v = \\( 2 m \\) v_12 = \\( 3 m \\) V #h(2em) arrow.r #h(2em) v_12 = v / 2 #h(2em) V = v / 3\" style=\"width:27.640em;height:2.326em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><msub><mi>v</mi><mn>12</mn></msub></math> talkaren ondoren bi partikulen (jaurtigai eta helburu) abiadura bateratua den eta <math display=\"inline\"><mi>V</mi></math> sistemaren masa-zentroaren abiadura. Talkaren deskribapena honakoa da: talka berehala gertatzen dela suposatuta, malgukiaren eskuineko partikula talkaren ondoren oraindik geldirik dago, <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math> masa bateratua <math display=\"inline\"><msub><mi>v</mi><mn>12</mn></msub></math> abiadura eskuratzen duen bitartean, malgukiaren <math display=\"inline\"><mi>l</mi></math> luzera mantenduz. Denbora igaro ahala, partikulen abiadura aldatuko da, ezkerrekoa motelduz eta eskuinekoa azeleratuz, malgukiak egiten dituen indar berdin eta aurkako noranzkoko indarrak direla eta, lehen fase batean uzkurtzen joango dena. Uzkurdura hori <math display=\"inline\"><msub><mi>x</mi><mi mathvariant=\"normal\">max</mi></msub></math> gehieneko deformazioa lortu arte jarraituko du, une horretan sistemaren bi partikulak abiadura berberaz higituko direlarik (masa- zentroaren abiadurarekin bat egingo duena) eta, handik aurrera, malgukia luzatzen hasiko da aurkako zeinuko baina balio bereko <math display=\"inline\"><msub><mi>x</mi><mi mathvariant=\"normal\">max</mi></msub></math> gehieneko deformazioa lortu arte, eta zikloa etengabe errepikatzen jarraituko du."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math> masako partikularen eraketara eramaten duen talka guztiz inelastikoan, momentu lineala kontserbatzen da baina energia ez. Baina talkaren prozesua amaitutakoan, energia mekanikoa konstante mantenduko da, eragiten duten indar bakarrak malgukiak sortutako indar kontserbatzaileak izango baitira. Aplika dezagun kontserbazio-printzipio hau hiru egoeratan: talkaren ondorengo <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unea, ondorengo edozein une, malgukiaren deformazioa <math display=\"inline\"><mi>x</mi></math> denean, eta <math display=\"inline\"><msub><mi>x</mi><mi mathvariant=\"normal\">max</mi></msub></math> gehieneko deformazioa lortu den unea, muturretako bi partikulak abiadura berberaz higitzen diren unea, hau da, masa-zentroaren abiaduraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>v</mi><mn>12</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>V</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>v</mi><mn>12</mn><mo>′</mo></msubsup><msup><mspace width=\"0.222em\"></mspace><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>v</mi><mn>3</mn><mo>′</mo></msubsup><msup><mspace width=\"0.222em\"></mspace><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>V</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>x</mi><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mn>2</mn></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aurreko espresioan, <math display=\"inline\"><msubsup><mi>v</mi><mn>12</mn><mo>′</mo></msubsup></math> eta <math display=\"inline\"><msubsup><mi>v</mi><mn>3</mn><mo>′</mo></msubsup></math> balioek masa-zentroarekiko partikulen abiadurak adierazten dituzte, interesatuko ez zaizkigun balioak, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> uneari dagozkion erlazioak eta <math display=\"inline\"><msub><mi>x</mi><mi mathvariant=\"normal\">max</mi></msub></math> gehieneko deformazioa gertatzen denean dagokiona baino ez baititugu erabiliko. Balioak ordezkatuz:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/6c4c7f969da1463e.svg\" alt=\"1 / 2 \\( 2 m \\) (v / 2)^2 = 1 / 2 \\( 3 m \\) (v / 3)^2 + 1 / 2 k thin x_max^2 #h(2em) arrow.r #h(2em) x_max = sqrt(frac(m, 6 k)) thin v\" style=\"width:32.160em;height:3.046em\" loading=\"lazy\">"
    }
   ]
  }
 ]
};
