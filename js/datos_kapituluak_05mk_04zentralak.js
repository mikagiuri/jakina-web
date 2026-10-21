/* JAKINA · kapitulua «B9.4 - Indar zentralak» (05mk_04zentralak), desde edicion2/kapituluak/05mk_04zentralak/05mk_04zentralak.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["05mk_04zentralak"] = {
 "gakoa": "05mk_04zentralak",
 "titulua": "JAKINA - B9 - Mekanika klasikoa - 4/10",
 "azala": "B9.4 - Indar zentralak",
 "azpititulua": "III. aroa - L2",
 "iturburua": "kapituluak/05mk_04zentralak/05mk_04zentralak.typ",
 "sarrera": [],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Indar zentralak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aparteko garrantzia izan dute fisikaren historian indar zentralek: nahikoa da Newtonek bere grabitazio unibertsalaren legea eguzki-sistemari aplikatzean izan zuen arrakasta (Halleyek orain bere izena duen kometa itzuliko zela aurresatean<span class=\"j-oin\">[Alexis Clairaut, Jérôme Lalande eta Nicole-Reine Lepaute astronomoek kalkulatu zuten kometa berriro ikusiko zela 1759 urtean.]</span>, adibidez) gogoratzea. Fisika kuantikoan ere lehenago aztertu ziren problemen artean izan zen indar zentralen menpeko higidura, hidrogeno atomoaren kasuan. Aitortu behar da oso mesedegarria izan zela funtsezko problema horietan agertzen diren indarrak zentralak izatea, zeren horrelakoak oso bereziak baitira. Izan ere, oso propietate bereziak betetzen dituzte, energia mekanikoaren eta momentu angeluarraren kontserbazio-legeekin hasita. Areago, aipaturiko problemetan indar newtondarrak agertzen dira eta hauek (harmonikoekin batera) indar-eremu zentral errazenak dira. Errazenak eta bereziegiak esan beharko genuke, horrelakoek dituzten propietate batzuk ez baitira betetzen indar zentral orokorrekin (ikus Bertranden teorema 184. orrialdean)."
    },
    {
     "mota": "testua",
     "html": "Kontsidera ditzagun hurrengo bi problemak:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Indar-eremu zentral batean higitzen den <math display=\"inline\"><mi>m</mi></math> masako partikula bakarra. Erreferentzia-sistema inertzialaren jatorria indar-poloan aukeratzen badugu (1.3.5 atalean egin genuen bezala) eta partikularen posizio-bektorea <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> bada, honelakoa da indarra:"
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mi>r</mi></mfrac><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Higidura-ekuazioa beraz, hauxe da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Bi gorputzen sistema bakartu bat non partikula bakoitzak bestearen gainean eragiten duen indarra zentrala den: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo>=</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "1.5.6 atalean egin genuen bezala, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>≡</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub></mrow></math> posizio erlatiboaren ekuazioa idazten badugu, (4.2) berreskuratzen dugu, <math display=\"inline\"><mi>m</mi></math> masa laburbilduaren eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>12</mn></msub><mo>=</mo><mi>−</mi><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>21</mn></msub></mrow></math> indarraren funtzioan."
    },
    {
     "mota": "irudia",
     "oina": "Partikula bat indar-eremu zentral batean eta bi partikulen problema.",
     "src": "media/irudiak/8e93599b33ac6041.svg",
     "zabalera": 358
    },
    {
     "mota": "testua",
     "html": "Bi problema hauek, beraz, baliokideak dira ikuspuntu matematikotik eta biak aztertuko ditugu aldi berean. Gogoan eduki behar da, hala ere, lehen kasuan (4.2) ekuazioko <math display=\"inline\"><mi>m</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> magnitudeak partikula bakarraren masa eta posizioa direla eta bigarrenean sistemaren masa laburbildua eta bi partikulen arteko posizio erlatiboa."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Higidura-konstanteak eta soluzioak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Momentu angeluarraren kontserbazioa"
    },
    {
     "mota": "testua",
     "html": "Indarra zentrala denez, 1.11 ariketan frogatu genuen poloarekiko (hau da, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mn>0</mn></mrow></math> puntuarekiko) momentu angeluarra higidura-konstantea dela eta, ondorioz, polotik pasatuz momentu angeluarrarekiko perpendikularra den plano batean higitzen dela partikula. Analisia errazteko, <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math> plano koordenatua higidurarena izateko moduan aukeratzen badugu eta bertan koordenatu polarrak erabiltzen badira, momentu angeluarra <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> da (ikus 1.10 ariketa)."
    },
    {
     "mota": "irudia",
     "oina": "Momentu angeluarra eta koordenatu polarrak higidura-planoan.",
     "src": "media/irudiak/fe45ef79c94ae8b3.svg",
     "zabalera": 367
    },
    {
     "mota": "testua",
     "html": "Gainera, (1.59) azalera-abiadura <math display=\"block\"><mrow><msub><mi>v</mi><mi>a</mi></msub><mo>=</mo><mover><mi>S</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mi>L</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>r</mi><mn>2</mn></msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> da eta, higidura-konstantea denez, <strong>Keplerren bigarren legea</strong> betetzen da: <em>Eguzkia eta planeta bat lotzen dituen segmentuak azalera berdinak estaltzen ditu denbora-tarte berdinetan</em>. Hauxe dugu, bada, Keplerren legerik orokorrena, eguzki-sisteman ez ezik, indar-eremu zentral guztietan ere betetzen baita, «Eguzki» eta «planeta» hitzak aldatu ondoren. (Gainera, beste biak baino lehenago aurkitu zuen Keplerrek lege hau.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Energia mekanikoaren kontserbazioa"
    },
    {
     "mota": "testua",
     "html": "Bestalde, badakigu indar-eremu zentralak kontserbatzaileak direla beti (gogoratu 1.3.5 atala eta B.25 ariketa): <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mo>∫</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>r</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Posizio-bektoreak <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math> tartean estalitako azalera.",
     "src": "media/irudiak/d4a7bf82503c7bdc.svg",
     "zabalera": 114
    },
    {
     "mota": "testua",
     "html": "Beraz, higidura lauaren ekuazioek bi higidura-konstante onartzen dituzte, (4.4) momentu angeluarraren <math display=\"inline\"><mi>z</mi></math> osagaia eta (4.6) energia potentzialari dagokion energia mekanikoa, alegia:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> ardatz positiboa momentu angeluarraren noranzkoan aukeratzen badugu, (4.4) adierazpenaren ondorioz, <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo>≥</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo>≥</mo><mn>0</mn></mrow></math> dugu beti. Une batean <math display=\"inline\"><mrow><mi>L</mi><mo>∝</mo><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> bada, beti izango da horrelakoa eta dimentsio bakarreko higidurari dagokion kasu berezian gaude; bestela, beti dugu <math display=\"inline\"><mrow><mi>L</mi><mo>∝</mo><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu higidura-ekuazioak honako hauek direla koordenatu polarretan:"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dimentsio bakarreko higidura"
    },
    {
     "mota": "testua",
     "html": "Une batean <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>0</mn></mrow></math> bada, horrelakoa izango da une guztietan eta, <math display=\"inline\"><mi>ϕ</mi></math> konstantea izango denez, indar-polotik pasatzen den zuzen batean gertatuko da higidura: abiadura eta posizio-bektoreak beti izango dira paraleloak eta honela idazten dira (4.10) higidura-ekuazioa eta (4.8)  kontserbazio-legea: <math display=\"block\"><mrow><mi>m</mi><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Ekuazio hauek eta (1.104)–(1.105) egitura berekoak dira eta era berean ebazten dira: 1.4.3 ataleko aldagaien banantzearen metodoaren bidez. Izan ere (4.13)-tik <math display=\"inline\"><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></math> abiadura askatu ondoren <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math>-rekin biderkatzen bada, <math display=\"block\"><mrow><mi>d</mi><mi>r</mi><mo>=</mo><mi>±</mi><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt><mi>d</mi><mi>t</mi></mrow></math> lortzen da eta hemendik, aldagaiak bananduz, <math display=\"block\"><mrow><mi>d</mi><mi>t</mi><mo>=</mo><mi>±</mi><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mfrac><mi>.</mi></mrow></math> Printzipioz, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math> unean distantzia polarra <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math> bada, aurreko ekuazio diferentziala zuzenean ebazten da integral baten bidez: <math display=\"block\"><mrow><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mo>±</mo><msubsup><mo>∫</mo><msub><mi>r</mi><mn>0</mn></msub><mi>r</mi></msubsup><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mfrac><mi>.</mi></mrow></math> Praktikan, integral hori zailegia izan daiteke era zehatzean egiteko eta, askotan, hurbilketak edo zenbakizko metodoak erabili beharko dira integrala ebazteko eta hortik lortzen den <math display=\"inline\"><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> emaitzatik <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> soluziora heltzeko."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dimentsio bakarreko problema baliokidea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math> denean, momentu angeluarraren (4.7) kontserbazio-legetik <math display=\"block\"><mrow><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mi>L</mi><mrow><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> abiadura angeluarra askatuz, honela idazten da higidura erradialaren (4.10)  ekuazioa: <math display=\"block\"><mrow><mi>m</mi><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>m</mi><mi>r</mi><msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><mi>r</mi></mrow></mfrac><mo>+</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><msup><mi>r</mi><mn>3</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>d</mi><mrow><mi>d</mi><mi>r</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zergatik deitzen zaio <strong>indar zentrifugoa</strong>"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      },
      {
       "mota": "testua",
       "html": "gaiari?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Orain, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren eta <math display=\"inline\"><mrow><msup><mi>L</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> energia potentzial zentrifugoaren baturari <strong>energia potentzial eraginkorra</strong> deitzen badiogu,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "honela idazten da higidura erradialaren (4.18)  ekuazioa:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msubsup><mi>V</mi><mi>e</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Egitura matematikoaren aldetik ekuazio hau eta (1.104) —edo (4.12)— guztiz berdinak dira. Beraz, <math display=\"inline\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> potentzialean (eta ez jatorrizko <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> delakoan) eta lerro zuzen batean higitzen ari den partikularen eboluzioa ere deskribatzen du (4.21) ekuazioak. (Diferentzia txiki bat dago: distantzia bat denez, <math display=\"inline\"><mi>r</mi></math> ezin izan daiteke negatiboa hasierako probleman.)"
    },
    {
     "mota": "testua",
     "html": "Eman dezagun <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math> aldiunean partikula <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo>,</mo><msub><mi>ϕ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> puntuan zegoela. Beste une guztietan non dagoen jakiteko bi pausotan ebatziko ditugu higidura-ekuazioak."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Higidura erradiala"
    },
    {
     "mota": "testua",
     "html": "Dimentsio bakarreko problema baliokidea ebazten badugu, jatorrizko problema lauaren higidura erradiala ezaguna izango da. Horretarako problema baliokidearen energia mekanikoaren kontserbazioz baliatuko gara:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Jakina, azken hau (4.8) energia mekanikoa da, abiadura angeluarra (4.7) kontserbazio-legearen bidez ezabatu ondoren. Orain, 1.4.3 ataleko aldagaien banantzearen metodoa erabiltzen badugu, higidura erradialaren ekuazioa <math display=\"block\"><mrow><mi>d</mi><mi>t</mi><mo>=</mo><mi>±</mi><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mfrac><mo>=</mo><mi>±</mi><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mfrac></mrow></math> da —gogoratu (1.109)—. Honen soluzioa, (1.111)-ri dagokiona, integral bat eta <math display=\"inline\"><mrow><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math> hastapen-baldintza erabiliz lortzen da: <math display=\"block\"><mrow><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo>=</mo><mi>±</mi><msubsup><mo>∫</mo><msub><mi>r</mi><mn>0</mn></msub><mi>r</mi></msubsup><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mfrac><mi>.</mi></mrow></math> Integral hau ebazten badugu <math display=\"inline\"><mi>t</mi></math> denbora <math display=\"inline\"><mi>r</mi></math> distantziaren menpean ezagutuko dugu eta, funtzio hori alderantzikatuz, <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> soluzioa. Jakina, bi eragiketa matematiko horiek egiteko, askotan metodo hurbildutara (agian, zenbakizko metodo egoki batera<span class=\"j-oin\">[Ikus `http://tp.lc.ehu.eus/jma/mekanika/zentralak/zentrala.html` orrialdea.]</span>) jo beharko da, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> potentzial gehienen kasuan era zehatzean egitea zaila edo ezinezkoa baita."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Higidura angeluarra"
    },
    {
     "mota": "testua",
     "html": "Higidura erradialaren <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> soluzioa ezaguna denean, (4.17) ekuazioan aldagaiak banantzen baditugu, <math display=\"block\"><mrow><mi>d</mi><mi>ϕ</mi><mo>=</mo><mfrac><mi>L</mi><mrow><mi>m</mi><msup><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>t</mi><mo>,</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>ϕ</mi><mn>0</mn></msub></mrow></math> hastapen-baldintza erabiltzen bada, higidura angeluarraren soluzioa lortzen da: <math display=\"block\"><mrow><mi>ϕ</mi><mo>−</mo><msub><mi>ϕ</mi><mn>0</mn></msub><mo>=</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>0</mn></msub><mi>t</mi></msubsup><mfrac><mi>L</mi><mrow><mi>m</mi><msup><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math> Integrala (agian era hurbilduan) ebazten badugu, <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> angelu polarra ezaguna izango da eta higidura-ekuazioen soluzioa <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Orbitaren ekuazioa"
    },
    {
     "mota": "testua",
     "html": "Esan dugunez, partikularen posizioa aldiune guztietan ezagutzeko (4.24) eta (4.26) integralak ebatzi behar dira. Horretarako sarri askotan metodo hurbildutara jo behar denez, informazio partziala baina interesgarria ematen duten bestelako metodoak erabilgarriak izan daitezke. Haietariko bat orbitaren ekuazioa —hau da, partikularen ibilbidearen ekuazioa— kalkulatzea da: horrela partikula nondik dabilen jakingo dugu, aldiune bakoitzean orbitako zein puntutan dagoen ezagutu ez arren."
    },
    {
     "mota": "testua",
     "html": "Orbitaren ekuazioa higidura-ekuazioetan denbora ezabatuz lortzen da, eta hau erraz egiten da (4.25) delakoan (4.23)-tik lortzen den <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> ordezkatzen badugu: <math display=\"block\"><mrow><mi>d</mi><mi>ϕ</mi><mo>=</mo><mi>±</mi><mfrac><mi>L</mi><mrow><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>ϕ</mi><mn>0</mn></msub></mrow></math> hastapen-baldintzak erabiliz, bada, honela idazten da orbitaren ekuazioa: <math display=\"block\"><mrow><mi>ϕ</mi><mo>−</mo><msub><mi>ϕ</mi><mn>0</mn></msub><mo>=</mo><mi>±</mi><msubsup><mo>∫</mo><msub><mi>r</mi><mn>0</mn></msub><mi>r</mi></msubsup><mfrac><mrow><mi>L</mi><mi>d</mi><mi>r</mi></mrow><mrow><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mrow></mfrac><mi>.</mi></mrow></math> Integrala ebatzi ondoren lortutako <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioa (edo alderantzizko <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> delakoa) orbitaren ekuazioa da. Zoritxarrez, integral hori ere ez da beti erraza eta, apur bat aztertzeko, egin dezagun gai honetan batzuetan erabilgarria den hurrengo aldagai-aldaketa: <math display=\"block\"><mrow><mi>u</mi><mo>≡</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili <math display=\"inline\"><mrow><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ϕ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math> hastapen-baldintza eta <math display=\"inline\"><mi>δ</mi></math> integrazio-konstantea, orbitaren ekuazioa hurrengo bi modu baliokideetara idazten dela frogatzeko:"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Adibidez, kontsidera ditzagun <math display=\"block\"><mrow><mi>V</mi><mo>∝</mo><msup><mi>u</mi><mi>n</mi></msup><mo>=</mo><mfrac><mn>1</mn><msup><mi>r</mi><mi>n</mi></msup></mfrac><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>F</mi><mo>∝</mo><msup><mi>u</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>=</mo><mfrac><mn>1</mn><msup><mi>r</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mfrac><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>≠</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> moduko energia potentzialak eta indarrak. Orbitaren (4.30) ekuazioa funtzio trigonometriko zirkularren eta hiperbolikoen bidez ebatz daiteke <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math> kasuetan eta integral eliptikoak (ikus B.5 atala) erabiliz <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mn>6</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>6</mn></mrow></math> denean. Gainera, oinarrizko funtzioen bidez ebatz daiteke beste zenbait kasutan; baina, problema batzuetan ikusiko dugunez, bakarrik energia mekanikoaren balio berezi batzuetarako."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math> kasuetan (4.30)–(4.31) integralak hurrengoa erabiliz ebatz daitezkeela (parentesi arteko baldintzak betetzen badira):"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bineten formula"
    },
    {
     "mota": "testua",
     "html": "Orbitaren (4.31) ekuazioa <math display=\"inline\"><mi>ϕ</mi></math>-rekiko deribatuz, honela idazten da <math display=\"inline\"><mi>L</mi></math> eta <math display=\"inline\"><mi>E</mi></math> balioetako orbitaren ekuazioa, <math display=\"inline\"><mi>ϕ</mi></math> angeluarekiko deribatua <math display=\"inline\"><mrow><mi>′</mi><mo>≡</mo><mi>d</mi><mi>/</mi><mi>d</mi><mi>ϕ</mi></mrow></math> notazioa erabiliz: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>u</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mi>L</mi></math> bati dagozkion energia guztietako orbiten ekuazioa lortzeko, nahikoa da (4.34) emaitza <math display=\"inline\"><mi>ϕ</mi></math> aldagaiarekiko deribatzea eta, ondorioz, honela geratzen da orbitaren ekuazioa <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> indarra <math display=\"inline\"><mi>u</mi></math> aldagaiaren bidez idazten bada:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>u</mi><mo>″</mo></msup><mo>+</mo><mi>u</mi><mo>=</mo><mi>−</mi><mfrac><mi>m</mi><mrow><msup><mi>L</mi><mn>2</mn></msup><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>u</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kasu batzuetan ekuazio hau ebatz daiteke orbita aurkitzeko eta, alderantziz, orbitaren <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ekuazioa ezaguna bada hemendik lor daiteke indar-legea: <math display=\"block\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>u</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mfrac><msup><mi>L</mi><mn>2</mn></msup><mi>m</mi></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>u</mi><mo>″</mo></msup><mo>+</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>u</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> (Ikus, gainera, 4.136 problema.)"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eman dezagun <math display=\"inline\"><mi>A</mi></math>, <math display=\"inline\"><mi>ε</mi></math> eta <math display=\"inline\"><mi>δ</mi></math> konstanteak direla. Froga ezazu orbitaren ekuazioa <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ε</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>±</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> bada (hau da, geroago ikusiko dugunez, fokutzat indar-poloa duten kurba konikoetako bat bada), indarra newtondarra dela: <math display=\"inline\"><mrow><mi>F</mi><mo>∝</mo><mi>∓</mi><msup><mi>u</mi><mn>2</mn></msup><mo>=</mo><mi>∓</mi><mn>1</mn><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Orbita zirkularren egonkortasuna"
    },
    {
     "mota": "testua",
     "html": "Energia potentzial eraginkorraren erabilgarritasuna ikusteko, azter dezagun noiz egon daitezkeen orbita zirkularrak<span class=\"j-oin\">[Orbita zirkular hauen zentroa indar-poloa da; baina bestelakoak ere egon daitezke: ikus 4.7 problema.]</span> indar-eremu zentraletan eta noiz diren egonkorrak."
    },
    {
     "mota": "testua",
     "html": "Dimentsio bakarreko problema baliokidean soluziorik errazenak <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> oreka-puntuak dira, baina hauek jatorrizko probleman orbita zirkularrak dira (baina zentroa indar-poloan ez duten orbita zirkularrak ere egon daitezke, 4.7 probleman ikusiko dugun bezala). Dimentsio bakarreko problema baliokideetan 1.4.6 atalean ikasi duguna erabil dezakegu, beraz, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math> soluzioa aurkitzeko, energia potentzial eraginkorraren mutur-puntuetan gertatuko baita: <math display=\"block\"><mrow><msubsup><mi>V</mi><mi>e</mi><mo>′</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><msubsup><mi>r</mi><mn>0</mn><mn>3</mn></msubsup></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><msubsup><mi>r</mi><mn>0</mn><mn>3</mn></msubsup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu indar zentralen menpeko orbita zirkularretan azelerazio tangentea zero dela. Egiaztatu (4.37) ekuazioak adierazten duela higidura zirkular uniforme horietan indarra eta masa bider azelerazio zentripetoa berdinak direla."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(4.37) ekuazioaren erro (positibo) bakoitzeko, dimentsio bakarreko problemaren oreka-puntu bat dago, hor indarra zero baita; problema lauan orbita zirkular bat dugu eta <math display=\"inline\"><mrow><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></mrow></math> indarra indar zentrifugoaren kontrakoa da, hau da, masa bider azelerazio zentripetoa. Soluzio horiek egonkorrak izango dira mutur-puntua minimo erlatibo bat denean, hau da, (4.37) eta hurrengoa betetzen direnean<span class=\"j-oin\">[Egia esan, hemen bakarrik frogatu dugu momentu angeluarra aldatzen ez duten perturbazio erradialekiko egonkortasuna; baina, 4.19 probleman ikusiko dugunez, emaitza zuzena da perturbazio txiki guztietarako.]</span>: <math display=\"block\"><mrow><msubsup><mi>V</mi><mi>e</mi><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mrow><mn>3</mn><msup><mi>L</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msubsup><mi>r</mi><mn>0</mn><mn>4</mn></msubsup></mrow></mfrac><mo>&gt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mi>r</mi><mn>0</mn></msub><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>3</mn><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aplikazio moduan, kontsidera dezagun <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><msup><mi>r</mi><mi>n</mi></msup></mrow></math> egitura errazeko potentzial zentralak. Orbita zirkularren erradioa (4.37) baldintzak emandakoa da: <math display=\"block\"><mrow><mfrac><mrow><mi>n</mi><mi>k</mi></mrow><msubsup><mi>r</mi><mn>0</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msubsup></mfrac><mo>−</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><msubsup><mi>r</mi><mn>0</mn><mn>3</mn></msubsup></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mi>r</mi><mn>0</mn></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>k</mi><mi>m</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math> Beraz, <math display=\"inline\"><mrow><mi>n</mi><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>n</mi><mo>≠</mo><mn>2</mn></mrow></math> bada, momentu angeluarraren <math display=\"inline\"><mi>L</mi></math> balio bakoitzeko orbita zirkular bat dago."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zein da <math display=\"inline\"><mrow><mi>n</mi><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math> baldintzaren esangura fisikoa?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Orbita zirkularra egonkorra izateko bete behar den (4.38) baldintza honela geratzen da: <math display=\"block\"><mrow><msubsup><mi>V</mi><mi>e</mi><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>n</mi><mi>k</mi></mrow><msubsup><mi>r</mi><mn>0</mn><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msubsup></mfrac><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math> Ondorioz, <em><math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><msup><mi>r</mi><mi>n</mi></msup></mrow></math> egiturako energia potentzial zentraletan <math display=\"inline\"><mrow><mi>k</mi><mi>n</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bada, orbita zirkularrak egonkorrak dira <math display=\"inline\"><mrow><mi>n</mi><mo>&lt;</mo><mn>2</mn></mrow></math> denean</em>."
    },
    {
     "mota": "testua",
     "html": "Demagun, orain, orbita zirkular egonkor batean ari denean bulkada erradial txiki bat aplikatzen zaiola partikulari. Energia mekanikoaren kontserbazioa orbita zirkularraren inguruan garatzen badugu, <math display=\"block\"><mrow><mi>E</mi><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mi>e</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msubsup><mi>V</mi><mi>e</mi><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> lortzen da eta denborarekiko deribatua izango da higidura erradialaren ekuazio hurbildua: <math display=\"block\"><mrow><mi>m</mi><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>V</mi><mi>e</mi><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Hemen <math display=\"inline\"><mrow><mi>q</mi><mo>≡</mo><mi>r</mi><mo>−</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math> egiten badugu, orbita zirkularraren inguruko oszilazio erradial txikiak harmonikoak direla ikusten dugu eta higidura horren pultsazioa ondoko emaitza honetan agertzen dena: <math display=\"block\"><mrow><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup><mi>q</mi><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>ω</mi><mi>r</mi></msub><mo>=</mo><msqrt><mfrac><mrow><msubsup><mi>V</mi><mi>e</mi><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>m</mi></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>=</mo><msqrt><mfrac><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></mrow><mrow><mi>m</mi><msubsup><mi>r</mi><mn>0</mn><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msubsup></mrow></mfrac></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> (Ikus, gainera, 4.20 eta 4.139 problemak.)"
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Indar newtondarrak: Keplerren problema",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Indar-eremu zentralen artean, fisikan garrantzi handienekoak newtondarrak dira, haien artean grabitatorioak eta elektrostatikoak baitaude. Goian esan dugunez, indarra newtondarra da distantziaren karratuarekiko alderantzizko proportzionala bada: <math display=\"inline\"><mrow><mi>F</mi><mo>∝</mo><mi>∓</mi><mn>1</mn><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>. Beraz, (4.6) erlazioaren ondorioz, indar-eremu zentral bat newtondarra izango da (1.83) energia potentziala ondoko egiturakoa bada:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>k</mi></math> proportzionaltasun-konstantearen zeinuaren arabera, bi motatako indar newtondarrak ditugu:"
    },
    {
     "mota": "ezezaguna",
     "izena": "par"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mi>G</mi><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ezezaguna",
     "izena": "par"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>q</mi><mn>1</mn></msub><msub><mi>q</mi><mn>2</mn></msub></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac></mrow></math> konstantea negatiboa da bi karga zeinu berekoak badira."
    },
    {
     "mota": "irudia",
     "oina": "Energia potentzial eraginkorra. (a) Indar erakarlea. (b) Indar aldaratzailea<span class=\"j-oin\">[Ikus\n    `.../kepler.html` eta\n    `.../erlatiboa.html` animazioak.]</span>",
     "src": "media/irudiak/d2aa3f02abac063f.svg",
     "zabalera": 466
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Energia potentzial eraginkorra"
    },
    {
     "mota": "testua",
     "html": "Indar newtondarren kasuan (4.20) energia potentzial eraginkorra"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac><mo>+</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "da. Argi dago bi ardatzak asintotak direla, <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>r</mi><mo>→</mo><mn>0</mn><mo>+</mo></mrow></munder><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>+</mi><mi>∞</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>r</mi><mo>→</mo><mi>+</mi><mi>∞</mi></mrow></munder><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> eta, muturrak aurkitzeko, kalkula dezagun non den zero deribatua: <math display=\"block\"><mrow><msubsup><mi>V</mi><mi>e</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><msup><mi>r</mi><mn>3</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub><mo>≡</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><mi>k</mi></mrow></mfrac><mi>.</mi></mrow></math> Distantziak negatiboak ez direnez, argi dago, bi kasu ditugula."
    },
    {
     "mota": "testua",
     "html": "Indar erakarleen kasuan, energia potentzial eraginkorrak minimo bat du <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math> puntuan hurrengo balioarekin: <math display=\"block\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mo>≡</mo><mi>−</mi><mfrac><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><msub><mi>r</mi><mn>0</mn></msub></mrow></mfrac><mo>&lt;</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math> puntuan energia potentzial eraginkorraren minimo bat dagoela eta ondorioztatu bere grafikoa 4.5 irudiko ezkerraldean agertzen dena dela."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Indarra aldaratzailea bada, <math display=\"inline\"><mrow><mi>k</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, energia potentzial eraginkorra positiboa (<math display=\"inline\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn></mrow></math>) eta monotono beherakorra (<math display=\"inline\"><mrow><msubsup><mi>V</mi><mi>e</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mn>0</mn></mrow></math>) da, 4.5 irudiko eskuinaldean erakusten den legez."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Orbitaren ekuazioa"
    },
    {
     "mota": "testua",
     "html": "Indar newtondarren kasuan orbitaren ekuazioa modu erraz askotara ebatz daiteke (ikus, adibidez, [46] eta 4.34 problema). Hemen (4.33) integrala erabiliko dugu (4.30) kalkulatzeko. Hasteko, energia potentzial eraginkorrak <math display=\"block\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> desberdintza betetzen du beti: indarra erakarlea denean, <math display=\"inline\"><msub><mi>E</mi><mn>0</mn></msub></math> da energia potentzial eraginkorraren balio minimoa, eta, indarra aldaratzailea bada, <math display=\"inline\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn><mo>&gt;</mo><msub><mi>E</mi><mn>0</mn></msub></mrow></math> desberdintza hertsiagoa betetzen da. Energia mekanikoaren kasuan <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> dugu, eta, beraz, (4.33) integraleko konstanteak hurrengoak izango dira aplikazio honetan: <math display=\"block\"><mrow><mi>a</mi><mo>≡</mo><mi>−</mi><mn>1</mn><mo>&lt;</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>k</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>c</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mo>≡</mo><mfrac><mrow><mn>4</mn><msup><mi>m</mi><mn>2</mn></msup><msup><mi>k</mi><mn>2</mn></msup></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mn>2</mn><msup><mi>L</mi><mn>2</mn></msup><mi>E</mi></mrow><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math> Beraz, honela idazten da (4.31): <math display=\"block\"><mrow><mi>ϕ</mi><mo>−</mo><mi>δ</mi><mo>=</mo><mi>±</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arccos </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>u</mi><mo>−</mo><mfrac><mrow><mi>m</mi><mi>k</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac></mrow><mrow><mfrac><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><msqrt><mrow><mn>1</mn><mo>+</mo><mfrac><mrow><mn>2</mn><msup><mi>L</mi><mn>2</mn></msup><mi>E</mi></mrow><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac></mrow></msqrt></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Adierazpen hau errazteko, orbitaren bi parametro definituko ditugu: <math display=\"block\"><mrow><mi>ε</mi><mo>≡</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mfrac><mrow><mn>2</mn><msup><mi>L</mi><mn>2</mn></msup><mi>E</mi></mrow><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac></mrow></msqrt><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mi>E</mi><msub><mi>E</mi><mn>0</mn></msub></mfrac></mrow></msqrt></mrow></math> <strong>eszentrikotasuna</strong> eta <math display=\"block\"><mrow><mi>p</mi><mo>≡</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac></mrow></math> <strong>foku-parametroa</strong>, astronomian <em>semi-latus rectum</em> izenarekin ezagutzen dena."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu <math display=\"inline\"><mi>ε</mi></math> eszentrikotasuna erreala dela beti eta indarra erakarlea denean <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math> dugula."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kosinu funtzioa bikoitia dela gogoratuz, (4.54) emaitza <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mi>p</mi></mfrac></mrow></math> moduan idazten da eta <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> aldagai-aldaketa deseginez, <math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><mi>P</mi></math> perizentroaren posizioa (4.58) eta (4.59) aukerekin.",
     "src": "media/irudiak/bfb3777a53757850.svg",
     "zabalera": 363
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>ε</mi></math> eta <math display=\"inline\"><mi>p</mi></math> parametroak ez-negatiboak direnez, <math display=\"inline\"><mi>r</mi></math> distantziaren baliorik txikiena (geroago ikusiko dugunez, perizentroan gertatzen dena)  <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> denean —hau da <math display=\"inline\"><mrow><mi>ϕ</mi><mo>=</mo><mi>δ</mi></mrow></math> norabidean— lortzen da. Ondorioz, gure <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatza aipaturiko perizentrotik pasatzeko moduan aukeratzen badugu, bertan <math display=\"inline\"><mrow><mi>ϕ</mi><mo>=</mo><mi>δ</mi><mo>=</mo><mn>0</mn></mrow></math> izango dugu eta orbitaren ekuazioa"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>±</mo><mn>1</mn></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "izango da, non <math display=\"inline\"><mrow><mi>+</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zeinua indar erakarlearen (aldaratzailearen) kasuan aukeratu behar den."
    },
    {
     "mota": "testua",
     "html": "Ekuazioa koordenatu kartesiarretan idazteko, (1.4)–(1.5) transformazio-ekuazioak erabiliko ditugu <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>ε</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>±</mo><mi>r</mi><mo>=</mo><mi>ε</mi><mi>x</mi><mo>±</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> adierazpen baliokidetik erro karratua ezabatzeko: <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>−</mo><mi>ε</mi><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>, edota <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>ε</mi><mi>p</mi><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>p</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili Bineten formularen (4.35) eta (4.34) adierazpenak, orbitaren (4.57) ekuazioa berriro lortzeko."
      }
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Keplerren orbitak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Energia negatiboa denean, orbita newtondarrak bornaturik daude. Are gehiago, orbita horiek itxiak eta periodikoak dira, jarraian ikusiko dugun bezala. Horrelakoak dira, hurbilketa on batean, planeten orbitak, Keplerren legeetan deskribatutakoak."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Orbita zirkularrak"
    },
    {
     "mota": "testua",
     "html": "(4.52) adierazpenaren arabera energia mekanikoaren energiarik txikiena <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mo>&lt;</mo><mn>0</mn></mrow></math> da. Hori bakarrik gerta daiteke indarra erakarlea (<math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math>) bada eta <math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> denean. Dimentsio bakarreko problema baliokidean partikula pausagunean dago <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math> oreka-puntuan, 4.5 irudiko ezkerraldean ikusten den bezala. Bestalde, (4.55) eszentrikotasuna zero da (<math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>) eta jatorrizko problema lauan (4.59)-tik edota (4.60)-tik ere lortzen den <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub><mo>=</mo><mi>p</mi></mrow></math> orbita zirkularra (eta, beraz, itxia eta periodikoa) dugu. Gainera, 4.1.9 atalean frogatu genuen egonkorra dela orbita zirkular hau."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bakarra al da orbita zirkularra?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Orbita eliptikoak"
    },
    {
     "mota": "testua",
     "html": "Energia mekanikoa negatiboa baina minimoa baino handiagoa bada, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>&lt;</mo><mi>E</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, eszentrikotasunak <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>ε</mi><mo>&lt;</mo><mn>1</mn></mrow></math> baldintza betetzen du. Indarra erakarlea da nahitaez (<math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math>) eta orbitaren ekuazioa honako hau:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>+</mo><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Orbita bornatuak.",
     "src": "media/irudiak/2dcc34a161f3e8aa.svg",
     "zabalera": 228
    },
    {
     "mota": "testua",
     "html": "Energia mekanikoa energia potentzial eraginkorra baino txikiagoa ez denez, 4.7 irudian ikusten dugu orbita bornatua dela. <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mo>±</mo></msub></mrow></math> puntuetan <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>V</mi><mi>e</mi></msub></mrow></math> dugunez, dimentsio bakarreko problema baliokidean <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> energia zinetikoa zero da: 1.4.6 atalean ikusi genuenez, atzerapen-puntuak dira horrelakoak eta bertan abiadura zero da (<math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>), balio positiboetatik negatiboetara (edo alderantziz) joatean atzera egiten baitu partikulak."
    },
    {
     "mota": "testua",
     "html": "Problema lauan puntu horietan energia zinetikoa eta abiadura ez dira nuluak, baina bertan ditugu distantziaren muturrak (<math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>). Hori gertatzen den puntuak <strong>absideak</strong> deitzen dira astronomian. (4.61) adierazpenean ikusten dugu distantziaren minimoa <math display=\"block\"><mrow><msub><mi>r</mi><mo>−</mo></msub><mo>=</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>+</mo><mi>ε</mi></mrow></mfrac></mrow></math> dela eta dagokion puntua orbitaren <strong>perizentroa</strong> deitzen da edo, astronomian, <strong>periastroa</strong>  (eta orbita Eguzkiaren ingurukoa bada, <strong>perihelioa</strong>; Lurraren ingurukoa denean, <strong>perigeoa</strong>; eta abar). Distantziaren maximoa <math display=\"block\"><mrow><msub><mi>r</mi><mo>+</mo></msub><mo>=</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>−</mo><mi>ε</mi></mrow></mfrac></mrow></math> dugu eta gertatzen deneko puntua <strong>apozentroa</strong> deitzen da edo, astronomian, <strong>apoastroa</strong>  (Eguzkiaren inguruko orbitaren kasuan <strong>afelioa</strong>; Lurraren ingurukoa denean, <strong>apogeoa</strong>; eta abar)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu absideak posizio-bektorea eta abiadura elkarzutak izateko baldintzak definiturikoak direla preseski: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⟂</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Orbita nolakoa den ikusteko, bere ekuazioa koordenatu kartesiarretan aztertuko dugu."
    },
    {
     "mota": "irudia",
     "oina": "Orbita eliptikoa.",
     "src": "media/irudiak/81cde9b19ba16fb5.svg",
     "zabalera": 214
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Osatu karratuak (4.60) ekuazioan modu honetan idazteko:"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ondorioz, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>a</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≡</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>ε</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>r</mi><mo>−</mo></msub><mo>+</mo><msub><mi>r</mi><mo>+</mo></msub></mrow><mn>2</mn></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><mi>E</mi></mrow></mfrac><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>b</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≡</mo><mfrac><mi>p</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>ε</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><msqrt><mrow><mi>p</mi><mi>a</mi></mrow></msqrt><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>c</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≡</mo><mfrac><mrow><mi>ε</mi><mi>p</mi></mrow><mrow><mn>1</mn><mo>−</mo><msup><mi>ε</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>a</mi><mo>−</mo><msub><mi>r</mi><mo>−</mo></msub></mtd></mtr></mtable></math> parametroak definitzen baditugu, orbitaren ekuazioa hauxe dugu: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mi>c</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>y</mi><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu honako propietate hauek betetzen direla:"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Orbita, beraz, elipse bat da: ardatzerdi nagusia <math display=\"inline\"><mi>a</mi></math> da, ardatzerdi txikia <math display=\"inline\"><mi>b</mi></math>, eta foku-parametroa <math display=\"inline\"><mi>c</mi></math>. Gainera, elipsearen zentroa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>c</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntuan dago eta, hortaz, jatorria (hau da, indar-poloa) elipsearen fokuan. <strong>Keplerren lehen legea</strong> frogatu dugu: <em>planeten orbitak elipseak dira, foku batean Eguzkia dutenak</em>. Bigarren lege hau indar newtondar guztiekin betetzen da (energia negatiboa denean), baina ez bestelako indar-eremu zentralekin, 4.5 ariketan ikusi genuen bezala."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi gorputzen probleman energia mekanikoa negatiboa bada, nolakoa da gorputz bakoitzaren masa-zentroaren inguruko orbita?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Keplerren hirugarren legea"
    },
    {
     "mota": "testua",
     "html": "Argi dago orbita zirkularren kasua, hemengoaren kasu berezi bat baino ez dela, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>  (edota <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub></mrow></math>) eginez lortzen dena, hain zuzen. Kasu zirkular eta eliptiko guztietan orbitak bornatuak eta itxiak dira eta, beraz, periodikoak. Erabil ditzagun elipsearen <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>π</mi><mi>a</mi><mi>b</mi></mrow></math> azalera eta orbitaren <math display=\"inline\"><mi>T</mi></math> periodoa (1.59) azalera-abiaduraren modulua kalkulatzeko: <math display=\"block\"><mrow><msub><mi>v</mi><mi>a</mi></msub><mo>=</mo><mfrac><mrow><mi>π</mi><mi>a</mi><mi>b</mi></mrow><mi>T</mi></mfrac><mo>=</mo><mfrac><mi>L</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math> Hemendik periodoa askatuta, (4.56) eta (4.66) erabiltzen bada, hauxe lortzen da: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>m</mi><mi>a</mi><mi>b</mi></mrow><mi>L</mi></mfrac><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>m</mi><mi>k</mi></mfrac></msqrt><msup><mi>a</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> Beraz, honela idazten da periodoaren eta ardatzerdi nagusiaren arteko erlazioa: <math display=\"block\"><mrow><mfrac><msup><mi>T</mi><mn>2</mn></msup><msup><mi>a</mi><mn>3</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup><mi>m</mi></mrow><mi>k</mi></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mi>M</mi></math> masako planeta baten kasuan <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>G</mi><msub><mi>M</mi><mo>⊙</mo></msub><mi>M</mi></mrow></math>, <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><msub><mi>M</mi><mo>⊙</mo></msub><mi>M</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><mo>⊙</mo></msub><mo>+</mo><mi>M</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dugu, <math display=\"inline\"><msub><mi>M</mi><mo>⊙</mo></msub></math> delakoa Eguzkiaren masa bada (ikus A.4 taulan astronomian erabiltzen diren ikur batzuk). Ondorioz, <math display=\"block\"><mrow><mfrac><msup><mi>T</mi><mn>2</mn></msup><msup><mi>a</mi><mn>3</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mi>G</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><mo>⊙</mo></msub><mo>+</mo><mi>M</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math> Baina Eguzkiaren masa askoz ere handiagoa denez (<math display=\"inline\"><mrow><mi>M</mi><mo>≪</mo><msub><mi>M</mi><mo>⊙</mo></msub></mrow></math>),"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><msup><mi>T</mi><mn>2</mn></msup><msup><mi>a</mi><mn>3</mn></msup></mfrac><mo>≈</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mi>G</mi><msub><mi>M</mi><mo>⊙</mo></msub></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "oso hurbilketa ona da eta planetaren masa ez da hemen agertzen. Keplerren hirugarren legea frogatu dugu:"
    },
    {
     "mota": "testua",
     "html": "periodoaren karratuaren eta orbitaren ardatz nagusiaren luzeraren kuboaren arteko zatidura berdina da planeta guztietarako"
    },
    {
     "mota": "testua",
     "html": ". Ikusi dugunez, lege hau ez da zehatza, hurbildua baizik, eta eguzki-sisteman (edo antzeko sistemetan) bakarrik betetzen da; hortaz, Keplerren legerik mugatuena dugu hau. (Ikus, halaber, 4.68 problema.)"
    },
    {
     "mota": "irudia",
     "oina": "Potentzial eraginkorra eta absideen prezesioa <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>k</mi><mi>r</mi></mrow></math> kasuan.",
     "src": "media/irudiak/0dc1f76f548f5140.svg",
     "zabalera": 331
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bertranden teorema"
    },
    {
     "mota": "testua",
     "html": "Ez da pentsatu behar indar-eremu zentraletan orbita bornatuak itxiak eta periodikoak izaten direla: izan ere, hori salbuespena da kasu orokorra baino areago. Bertranden teoremaren arabera, orbita bornatu guztiak itxiak badira, indar-eremu zentrala newtondarra (<math display=\"inline\"><mrow><mi>F</mi><mo>∝</mo><mi>−</mi><mn>1</mn><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>) edo harmonikoa (<math display=\"inline\"><mrow><mi>F</mi><mo>∝</mo><mi>−</mi><mi>r</mi></mrow></math>) da (ikus C eranskina). Kasu orokorretan absideak ez dira beti gertatzen norabide angeluar berean: <strong>prezesatzen</strong> ari direla esaten da eta, hastapen-baldintza batzuekin gertatzen diren kasu berezietan izan ezik, orbitak ez dira periodikoak."
    },
    {
     "mota": "testua",
     "html": "Adibide moduan kontsidera dezagun <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>k</mi><mi>r</mi></mrow></math> energia potentzial erakarlea<span class=\"j-oin\">[Newtonek ebatzi zuen problema hau grafikoki 1679an, Hookeri idatzitako gutun batean eta honek erantzun zion antzeko dela 6.11.4 problema. 6.110 problema ere honen baliokidea da.]</span>. 4.9 irudiko ezkerraldean marraztu da energia potentzial eraginkorraren grafikoa. Argi dago orbita guztiak bornatuak direla, baina gehienak ez dira periodikoak izango. Irudi bereko eskuinaldean erakusten da non agertzen diren orduz ondoko absideak orbita batean. Orbita gehienak, ondorioz, irekiak dira eta, adibidez, 4.10 irudiko ezkerrean agertzen dena <math display=\"inline\"><msub><mi>r</mi><mo>−</mo></msub></math> eta <math display=\"inline\"><msub><mi>r</mi><mo>+</mo></msub></math> erradioko zirkunferentzien arteko puntu bakoitzetik nahi bezain hurbil pasatuko da uneren batean (horrexegatik bakarrik marraztu da orbitaren zati bat). Eskuineko orbita, ordea, itxia da, baina periodikotasun hori desagertzen da hastapen-baldintzak nahi bezain gutxi aldatzean: orbita periodikoak salbuespenak dira. Adibide kuantitatibo bat aztertuko dugu 4.7.5 probleman."
    },
    {
     "mota": "irudia",
     "oina": "Bi orbita <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>k</mi><mi>r</mi></mrow></math> kasuan.",
     "src": "media/irudiak/e659d9b68feb4c41.svg",
     "zabalera": 360
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Keplerren ekuazioa"
    },
    {
     "mota": "testua",
     "html": "Orbita ezagutzea nahikoa ez bada, partikularen posizioa une guztietan aurkitzeko, (4.24) integrala kalkulatu behar da; baina, oinarrizko funtzioen bidez adierazten bada ere, <math display=\"inline\"><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> emaitza transzendentetik ezin da alderantzizko <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioa oinarrizko funtzioen bidez askatzea, geroago (4.26) integrala eginez <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lortzeko. Jakina, gaur egun zenbakizko kalkulua erabil daiteke horretarako, baina Keplerrek proposatu zuen metodo geometrikoagoa ikusiko dugu hemen. Partikularen posizioa zehazteko <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> koordenatu kartesiarrak edo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> polarrak erabil daitezke. Astronomian, <math display=\"inline\"><mi>ϕ</mi></math> angelu polarrari <strong>benetako anomalia</strong> deritzo, eta perizentrotik neurturiko desbideratzea neurtzen du, zentroa fokuan duen angelu baten bidez. Aipaturiko desbideratzea neurtzeko, elipsearen <math display=\"inline\"><mi>C</mi></math> zentroan aukera daiteke angelu bat, 4.11 irudian erakusten den moduan. Orbitako <math display=\"inline\"><mi>P</mi></math> puntu bakoitzean <math display=\"inline\"><mrow><mi>P</mi><mi>Q</mi></mrow></math> altuera eraikitzen da eta honek <math display=\"inline\"><mi>R</mi></math> puntuan ebakitzen du elipsearen zentroan kokaturiko <math display=\"inline\"><mi>a</mi></math> erradioko zirkunferentzia. Zentrotik neurturiko <math display=\"inline\"><mi>R</mi></math> puntuaren <math display=\"inline\"><mi>ψ</mi></math> posizio angeluarra <strong>anomalia eszentrikoa</strong> da."
    },
    {
     "mota": "irudia",
     "oina": "Anomalia eszentrikoa eta benetakoa.",
     "src": "media/irudiak/b31faf81ba4abe88.svg",
     "zabalera": 231
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>P</mi></math> puntuko <math display=\"inline\"><mi>x</mi></math> abzisa honako hau da: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mover><mrow><mi>C</mi><mi>Q</mi></mrow><mo accent=\"true\">¯</mo></mover><mo>−</mo><mover><mrow><mi>O</mi><mi>C</mi></mrow><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mo>−</mo><mi>c</mi><mo>=</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo>−</mo><mi>ε</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Bestalde, elipsearen (4.68) ekuazioaz baliatuz, hauxe dugu: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><mi>b</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mi>c</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mi>±</mi><mi>b</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>ψ</mi></mrow></msqrt><mo>=</mo><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mi>.</mi></mrow></math> (Azken emaitzaren zeinua irudia erabiliz aurkitzen da, jakina.) Beraz, honela kalkulatzen dira koordenatu kartesiarrak anomalia eszentrikoaren bidez: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo>−</mo><mi>ε</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu koordenatu polarrak hurrengo adierazpenek emandakoak direla:"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Planetaren periodoa <math display=\"inline\"><mi>T</mi></math> bada, Keplerren bigarren legearen arabera azalera-abiadura modu honetan kalkulatzen dugu: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>v</mi><mi>a</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>π</mi><mi>a</mi><mi>b</mi></mrow><mi>T</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>y</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mfrac><mrow><mi>a</mi><mi>b</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo>−</mo><mi>ε</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>a</mi><mi>b</mi></mrow><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>ε</mi><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mtd></mtr></mtable></math> Bestalde, bi anomalien batez besteko balioa <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>n</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>T</mi></mfrac></mrow></math> <strong>batez besteko anomalia</strong> da eta honela idazten da (4.81): <math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>ε</mi><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Ondorioz, planeta <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math> aldiunean <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><mi>ϕ</mi><mo>=</mo><mn>0</mn></mrow></math> periheliotik pasatu bada, hauxe dugu <math display=\"inline\"><mi>t</mi></math>  unean: <math display=\"block\"><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>ψ</mi><mo>−</mo><mi>ε</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mi>.</mi></mrow></math> Keplerren ekuazio transzendente honetatik <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  (modu hurbilean edo zenbakizkoan) askatuz gero, planetaren posizioa ezagutzen da (4.77)–(4.78) —edota (4.79)–(4.80)— erabiliz."
    },
    {
     "mota": "irudia",
     "oina": "Anomalia eszentrikoaren eboluzioa.",
     "src": "media/irudiak/4b3549d08b26420d.svg",
     "zabalera": 191
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Energia mekanikoa eta ardatz nagusia"
    },
    {
     "mota": "testua",
     "html": "Orbita newtondar bornatuen beste propietate interesgarria da (4.65) ekuaziotik lortzen dena: orbitaren energia ardatz nagusiaren menpeko hutsa da, hau da, ardatz nagusi berbera duten orbita guztien energia"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "da, ardatz txikia (eta eszentrikotasuna) edonolakoa izanik ere. Alderantziz ere esan dezakegu: orbitaren ardatz nagusia energia mekanikoaren menpeko hutsa da, baina ardatz txikia eta eszentrikotasuna kalkulatzeko momentu angeluarra ere ezagutu behar dugu."
    },
    {
     "mota": "testua",
     "html": "(4.83)-ren bidez oso erraz kalkula daiteke energia potentzialaren batez besteko balioa: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>≡</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>V</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mfrac><mi>k</mi><mrow><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>ε</mi><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>ε</mi><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>ψ</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>a</mi></mfrac><mi>.</mi></mrow></math> Bestalde, (4.85) erabiliz, hauxe dugu: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>E</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mn>2</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>2</mn><mi>E</mi><mi>.</mi></mrow></math> Emaitza hau partikula-sistemetara eta bestelako indarretara hedatzean lortzen dena (ikus 4.137 problema eta [40])  <strong>Clausiusen birialaren teorema</strong> deitzen da eta oso erabilgarria izaten da gasen teoria zinetikoan eta astronomian. Materia iluna (hau da, teleskopioan ikusten ez dena) dagoela ondorioztatzeko erabili da, adibidez (ikus [8])."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Orbita irekiak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "4.5 irudian ikusten denez, indar-eremu newtondarra erakarlea bada eta energia mekanikoa positiboa edo zero, orbitak irekiak izango dira, distantzia minimo bat egon arren ez baitago distantzia maximorik. Orbita irekia izateko <math display=\"inline\"><mrow><mi>E</mi><mo>≥</mo><mn>0</mn></mrow></math> baldintza, abiaduraren bidez ere idatz daiteke: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>−</mo><mfrac><mi>k</mi><mi>r</mi></mfrac><mo>≥</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>≥</mo><msub><mi>v</mi><mi>i</mi></msub><mo>≡</mo><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mrow><mi>m</mi><mi>r</mi></mrow></mfrac></msqrt><mi>.</mi></mrow></math> Hortaz, <em>indar-eremu newtondar erakarle batean, orbita irekia izango da baldin eta partikula <math display=\"inline\"><mi>r</mi></math> distantziara dagoenean bere abiadura (4.88) adierazpenean definituriko <math display=\"inline\"><msub><mi>v</mi><mi>i</mi></msub></math>  <strong>ihes-abiadura</strong> baino handiagoa (edo berdina) bada</em>. Abiadura minimo bat behar da, beraz, partikula infinitura joan ahal izateko."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu hauxe dela suziri bati Lurreko azalean eman behar zaion abiadurarik txikiena, infiniturantz alde egiteko gai izan dadin:"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Indar-eremu newtondarra aldaratzailea bada, berriz, orbita guztiak irekiak izango dira, une batean abiadura zero bada ere. Kasu horretan energia mekanikoa positiboa da beti (<math display=\"inline\"><mrow><mi>E</mi><mo>&gt;</mo><mn>0</mn></mrow></math>) eta <math display=\"inline\"><mi>r</mi></math> distantzia polarrak ez du goi-mugarik (ikus 4.5 irudia): orbita ez da inoiz bornatua eta partikula infiniturantz joango da nahitaez."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Orbita parabolikoak"
    },
    {
     "mota": "testua",
     "html": "Eman dezagun partikularen energia mekanikoa nulua dela: <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0</mn></mrow></math>. Indarra erakarlea da (<math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math>), (4.55) eszentrikotasuna <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math>, eta abiadura ihes-abiaduraren berdina puntu guztietan. Orbitaren (4.59) ekuazioa"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Orbita parabolikoa.",
     "src": "media/irudiak/02630d1903f81b93.svg",
     "zabalera": 205
    },
    {
     "mota": "testua",
     "html": "da, edo (4.60) ekuazioan <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math> eginez, <math display=\"block\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>p</mi><mi>x</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatzeko parabola da, beraz. Lehen esan bezala, ez dago distantzia maximorik, <math display=\"inline\"><mi>r</mi></math> infinitua baitoa <math display=\"inline\"><mrow><mi>ϕ</mi><mo>→</mo><mi>±</mi><mi>π</mi></mrow></math>  limiteetan: partikula infinitutik dator hara itzultzeko."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Orbita hiperbolikoak"
    },
    {
     "mota": "testua",
     "html": "Energia positiboa bada, <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>1</mn></mrow></math> dugu eta orbitaren ekuazioa honako hau:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>±</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ekuazio hau koordenatu kartesiarretan lortzeko, karratuak osa daitezke (4.60) ekuazioan edo, hobe, (4.64) emaitza hurrengo moduan idatz daiteke, <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>1</mn></mrow></math> dela kontuan hartuz: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><mi>p</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mrow><mi>ε</mi><mi>p</mi></mrow><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mfrac><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><msup><mi>p</mi><mn>2</mn></msup></mfrac><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math> Ondorioz, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>a</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≡</mo><mfrac><mi>p</mi><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><mi>E</mi></mrow></mfrac><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>b</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≡</mo><mfrac><mi>p</mi><msqrt><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></msqrt></mfrac><mo>=</mo><msqrt><mrow><mi>p</mi><mi>a</mi></mrow></msqrt><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>c</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≡</mo><mfrac><mrow><mi>ε</mi><mi>p</mi></mrow><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mtd></mtr></mtable></math> parametroak definitzen baditugu, orbitaren ekuazioa hauxe dugu: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>c</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>y</mi><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Orbita hiperbolikoak.",
     "src": "media/irudiak/281ba7bad2d76d72.svg",
     "zabalera": 175
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu hurrengo propietateak betetzen direla:"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Orbita, beraz, hiperbola-adar bat da: ardatzerdi nagusia <math display=\"inline\"><mi>a</mi></math> da, ardatzerdi txikia <math display=\"inline\"><mi>b</mi></math>, eta foku-parametroa <math display=\"inline\"><mi>c</mi></math>. Gainera, hiperbolaren zentroa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntuan dago eta, hortaz, jatorria (hau da, indar-poloa) hiperbolaren fokuetako batean. Hiperbolak bi adar dituenez, bi orbita adierazten dira (4.93) ekuazioan:"
    },
    {
     "mota": "ezezaguna",
     "izena": "par"
    },
    {
     "mota": "ezezaguna",
     "izena": "par"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zergatik aukeratu behar dira hiperbolaren adarrak goian esandako moduan?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Orbita bornatuen kasuan bezalaxe, energia mekanikoa ardatz nagusiaren menpeko hutsa da, zeren eta (4.94) ekuazioaren ondorioz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "baitugu. (Jakina, indar erakarleen kasuan balio absolutua ezaba daiteke aurreko ekuazioan.)"
    },
    {
     "mota": "testua",
     "html": "Hiperbolaren adarrek asintotak dituzte eta asintoten norabideek angelu polarren balio minimoak eta maximoak definitzen dituzte. Izan ere, (4.92) ekuazioaren izendatzailea zerora doanean distantzia polarra infinitura doa eta, limite horretan, partikula infinituan higitzen da asintota batean zehar. Beti bezala perizentroa <math display=\"inline\"><mrow><mi>ϕ</mi><mo>=</mo><mn>0</mn></mrow></math> norabidean badago, indar erakarleen kasuan hauexek dira, bada, angelu polarrak izan ditzakeen balioak: <math display=\"block\"><mrow><mi>−</mi><mi>π</mi><mo>&lt;</mo><mi>−</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arccos</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mi>ε</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mi>ϕ</mi><mo>&lt;</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arccos</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mi>ε</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mi>π</mi><mi>.</mi></mrow></math> Indarra aldaratzailea bada, berriz, honako hau dugu: <math display=\"block\"><mrow><mi>−</mi><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>&lt;</mo><mi>−</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arccos</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mi>ϕ</mi><mo>&lt;</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arccos</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "taula-kutxa",
     "oina": "Orbita newtondarrak.",
     "blokeak": [
      {
       "mota": "testua",
       "html": "block(width: 100%)["
      },
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "sarea",
           "zutabeak": "auto auto",
           "zelulak": [
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "Energia potentziala:"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "<math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>=</mo><mi>G</mi><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"0.167em\"></mspace><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>1</mn></msub><msub><mi>q</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "Energia potentzial eraginkorra:"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "<math display=\"inline\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac><mo>+</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo>≥</mo><msub><mi>E</mi><mn>0</mn></msub></mrow></math>"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "Energia mekanikoa:"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mi>e</mi></msub><mo>≥</mo><msub><mi>E</mi><mn>0</mn></msub></mrow></math>"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "Energia minimoa:"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "<math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "Eszentrikotasuna:"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "<math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mi>E</mi><msub><mi>E</mi><mn>0</mn></msub></mfrac></mrow></msqrt><mo>=</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mfrac><mrow><mn>2</mn><msup><mi>L</mi><mn>2</mn></msup><mi>E</mi></mrow><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac></mrow></msqrt></mrow></math>"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "Foku-parametroa:"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><msub><mi>E</mi><mn>0</mn></msub></mrow></mfrac></mrow></math>"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "Orbitaren ekuazioa:"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac></mrow></math>"
              }
             ]
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
           "src": "media/irudiak/f3f2e0ebac2618e9.svg",
           "zabalera": 174
          }
         ]
        }
       ]
      },
      {
       "mota": "taula",
       "goiburua": [
        "<strong>Kasua</strong>",
        "<strong>Ekuazioa</strong>",
        "<strong>Parametroak</strong>",
        "<strong>Orbita</strong>"
       ],
       "lerroak": [
        [
         "<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub></mrow></math> <br><math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math> <br><span><math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math></span>",
         "<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>p</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><msub><mi>E</mi><mn>0</mn></msub></mrow></mfrac></mrow></math> <br><math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>ϕ</mi><mo>≤</mo><mn>2</mn><mi>π</mi></mrow></math> <br><math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><mi>r</mi></mrow></mfrac></mrow></math>",
         "",
         "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup></mrow></math> zirkunferentzia <br>Itxia eta periodikoa: irudiko (1)"
        ],
        [
         "<math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>&lt;</mo><mi>E</mi><mo>&lt;</mo><mn>0</mn></mrow></math> <br><math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>ε</mi><mo>&lt;</mo><mn>1</mn></mrow></math> <br><span><math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math></span>",
         "<math display=\"inline\"><mrow><mfrac><mi>p</mi><mrow><mn>1</mn><mo>+</mo><mi>ε</mi></mrow></mfrac><mo>≤</mo><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>+</mo><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mrow></mfrac><mo>≤</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>−</mo><mi>ε</mi></mrow></mfrac></mrow></math> <br><math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>ϕ</mi><mo>≤</mo><mn>2</mn><mi>π</mi></mrow></math> <br><math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mrow></math>",
         "<math display=\"inline\"><mrow><mn>2</mn><mi>a</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>+</mo><mi>ε</mi></mrow></mfrac><mo>+</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>−</mo><mi>ε</mi></mrow></mfrac></mrow></math> <br><math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>ε</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><mi>E</mi></mrow></mfrac></mrow></math> <br><math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mi>ε</mi><mi>a</mi><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>=</mo><msqrt><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>",
         "<math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mi>c</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>y</mi><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> elipsea <br>Itxia eta periodikoa: irudiko (2) <br><math display=\"inline\"><mrow><mfrac><msup><mi>T</mi><mn>2</mn></msup><msup><mi>a</mi><mn>3</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup><mi>m</mi></mrow><mi>k</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mi>G</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        ],
        [
         "<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0</mn></mrow></math> <br><math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math> <br><span><math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math></span>",
         "<math display=\"inline\"><mrow><mfrac><mi>p</mi><mn>2</mn></mfrac><mo>≤</mo><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mrow></mfrac><mo>&lt;</mo><mi>∞</mi></mrow></math> <br><math display=\"inline\"><mrow><mi>−</mi><mi>π</mi><mo>&lt;</mo><mi>ϕ</mi><mo>&lt;</mo><mi>π</mi></mrow></math> <br><math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>=</mo><msub><mi>v</mi><mi>i</mi></msub><mo>≡</mo><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mrow><mi>m</mi><mi>r</mi></mrow></mfrac></msqrt></mrow></math>",
         "",
         "<math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>p</mi><mi>x</mi><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup></mrow></math> parabola <br>Irekia: irudiko (3)"
        ],
        [
         "<math display=\"inline\"><mrow><mi>E</mi><mo>&gt;</mo><mn>0</mn></mrow></math> <br><math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>1</mn></mrow></math> <br><span><math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math></span>",
         "<math display=\"inline\"><mrow><mfrac><mi>p</mi><mrow><mi>ε</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>≤</mo><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>&lt;</mo><mi>∞</mi></mrow></math> <br><math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arccos</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mi>ε</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mi>π</mi></mrow></math> <br><math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mi>k</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>&gt;</mo><msub><mi>v</mi><mi>i</mi></msub></mrow></math>",
         "<math display=\"inline\"><mrow><mn>2</mn><mi>a</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math> <br><math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>p</mi><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mi>k</mi><mrow><mn>2</mn><mi>E</mi></mrow></mfrac></mrow></math> <br><math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mi>ε</mi><mi>a</mi><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>=</mo><msqrt><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>a</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>",
         "<math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>c</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>y</mi><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> hiperbola <br>Irekia: irudiko (4), <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mi>c</mi></mrow></math> adarra"
        ],
        [
         "<math display=\"inline\"><mrow><mi>E</mi><mo>&gt;</mo><mn>0</mn></mrow></math> <br><math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>1</mn></mrow></math> <br><span><math display=\"inline\"><mrow><mi>k</mi><mo>&lt;</mo><mn>0</mn></mrow></math></span>",
         "<math display=\"inline\"><mrow><mfrac><mi>p</mi><mrow><mi>ε</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>≤</mo><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>&lt;</mo><mi>∞</mi></mrow></math> <br><math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arccos</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow></math> <br><math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>≥</mo><mn>0</mn></mrow></math>",
         "<math display=\"inline\"><mrow><mn>2</mn><mi>a</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math> <br><math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>p</mi><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><mi>E</mi></mrow></mfrac></mrow></math> <br><math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mi>ε</mi><mi>a</mi><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>=</mo><msqrt><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>a</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>",
         "<math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>c</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>y</mi><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> hiperbola <br>Irekia: irudiko (4), <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mi>c</mi></mrow></math> adarra"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "]"
      }
     ]
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Sakabanatze newtondarra",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kontsidera dezagun fisikan askotan egiten den esperimentu mota bat. Finko dagoen <math display=\"inline\"><mi>O</mi></math> jomuga baten kontra <math display=\"inline\"><mi>m</mi></math> masako partikula bat jaurtitzen da oso distantzia handitik <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiadurarekin. Analisia errazteko, demagun jomuga finko dagoela (agian oso astuna delako), baita jomuga jaurtigaiaren gainean eragindako indarra newtondarra eta aldaratzailea dela (adibidez, biak zeinu bereko kargak direlako). Hasieran distantzia oso handia zenez, partikularen higidura uniformea zen eta energia mekanikoa hasierako energia zinetikoaren berdina: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mn>0</mn><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math> <strong>Jotze-parametroa</strong> partikularen hasierako norabidearen eta jomugaren arteko <math display=\"inline\"><mi>b</mi></math> distantzia da eta jomugarekiko momentu angeluar konstantea neurtzeko erabil daiteke: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>m</mi><mi>b</mi><msub><mi>v</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Sakabanatze newtondarra ardatzen bi aukera desberdinekin.",
     "src": "media/irudiak/3c22757cc1a0b98a.svg",
     "zabalera": 376
    },
    {
     "mota": "testua",
     "html": "Jomugak eragindako indarraren eraginez, jaurtigaiaren norabidea aldatu egiten da eta distantzia berriro oso handia denean higidura uniformea izango da. Norabidearen aldaketa osoari, hau da, bi zuzen asintotikoen arteko angeluari, <strong>sakabanatze-angelua</strong> deritzo. 4.15 irudiko eskuinaldean ikusten denez, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>+</mo><mn>2</mn><mi>α</mi><mo>=</mo><mi>π</mi></mrow></math> dugu, <math display=\"inline\"><mi>α</mi></math> angelua <math display=\"inline\"><mi>ϕ</mi></math>-ren balio maximoa izanik. (4.101) emaitzaren ondorioz, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>ε</mi></mrow></math> da eta, beraz, (4.55) erabiliz, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>−</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi>α</mi><mi mathvariant=\"normal\">cos</mi></mfrac><mi>α</mi><mo>=</mo><mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></msqrt><mi mathvariant=\"normal\">cos</mi></mfrac><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msqrt><mrow><mfrac><mn>1</mn><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mo>−</mo><mn>1</mn></mrow></msqrt><mo>=</mo><msqrt><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></msqrt><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>E</mi><msup><mi>L</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>b</mi><mn>2</mn></msup><msubsup><mi>v</mi><mn>0</mn><mn>4</mn></msubsup></mrow><msup><mi>k</mi><mn>2</mn></msup></mfrac></msqrt></mtd></mtr></mtable></math> lortzen dugu. Hauxe da, bada, indar newtondarren kasuan sakabanatze-angelua ematen duen formula<span class=\"j-oin\">[4.121 probleman laburtzen dira erlazio erabilgarriak, indarra aldaratzailea denean eta erakarlea denean erabil daitezkeenak.]</span>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><mi>b</mi><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>b</mi><mi>E</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zer aldatzen da aurreko emaitzan indarra erakarlea bada?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sekzio eragilea"
    },
    {
     "mota": "testua",
     "html": "Orain arte partikula bakarra kontsideratu dugu, baina benetako esperimentuetan hainbat partikula jaurtitzen dira jomugaren kontra. Kontsidera dezagun 4.16 irudian marraztutako esperimentua. <math display=\"inline\"><mi>R</mi></math> erradioko esfera zurrun finko baten kontra bidaltzen da partikula puntualen sorta uniforme bat. Partikula baten <math display=\"inline\"><mi>b</mi></math> jotze-parametroa <math display=\"inline\"><mi>R</mi></math> baino txikiago bada, esferarekin topo egin ondoren, partikularen norabidea aldatuko da. Argi dago hori bakarrik gertatuko dela hasierako irudiko zilindroaren barrutik badoa, hau da, <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> azalerako sekzio normala zeharkatzen badu. Ondorioz, sortaren <strong>intentsitatea</strong>, hau da, sekzio normalaren azalera-unitatetik denbora-unitatean pasatzen diren partikulen kopurua, <math display=\"inline\"><mi>I</mi></math> bada, denbora-unitatean sakabanatutako partikulen kopurua <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>I</mi><mi>σ</mi><mo>=</mo><mi>π</mi><mi>I</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> izango da. Sortaren norabide perpendikularrean <math display=\"inline\"><mrow><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> azalerako disko bat jartzen bada, honekin denbora-unitatean topo egingo duten partikulen kopurua berdina izango da. Ikuspuntu horretatik, sortak diskoa eta esfera modu berean «ikusten» ditu, bi oztopoen zeharkako sekzioen azalerak berdinak baitira."
    },
    {
     "mota": "irudia",
     "oina": "Esfera finko batek sakabanatutako partikulak.",
     "src": "media/irudiak/34197fab08b4b354.svg",
     "zabalera": 331
    },
    {
     "mota": "testua",
     "html": "Esferaren erradioa <math display=\"inline\"><msub><mi>R</mi><mn>1</mn></msub></math> bada eta jaurtigaiena <math display=\"inline\"><msub><mi>R</mi><mn>2</mn></msub></math>, talka gertatzeko partikula <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mi>π</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> azalerako sekziotik pasatu behar da, 4.16 irudiko eskuinaldean erakusten den bezala. Hortaz, denbora-unitatean <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>I</mi><mi>σ</mi><mo>=</mo><mi>π</mi><mi>I</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> partikula sakabanatuko dira."
    },
    {
     "mota": "irudia",
     "oina": "Lurra erasotzen duten meteoritoak.",
     "src": "media/irudiak/07fec8e8963f5766.svg",
     "zabalera": 167
    },
    {
     "mota": "testua",
     "html": "Orain arte kalkulatutako sekzio eragileek jatorri geometriko zuzena zuten, baina gehienetan, prozesu fisiko baten dinamika ere hartu behar da kontuan sekzio eragilean. Adibide erraz bat erakusten da 4.17 irudian. Distantzia handira abiadura paralelo berdinez higitzen ziren meteoritoak hurbiltzen dira Lurrerantz. Energia mekanikoa positiboa denez, orbitak hiperbolikoak dira, baina Lurrean amaituko dira haren azala zeharkatzen dutenak, eta hauek izango dira 4.110 probleman kalkulatuko dugun <math display=\"inline\"><mrow><msup><mi>R</mi><mo>′</mo></msup><mo>&gt;</mo><mi>R</mi></mrow></math> erradioko diskotik pasatu direnak. Sekzio eragilea, hortaz, <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mi>π</mi><msup><mi>R</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup></mrow></math> izango da, <math display=\"inline\"><mrow><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> sekzio geometrikoa baino zabalagoa: denbora-unitatean <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>I</mi><mi>σ</mi><mo>=</mo><mi>π</mi><mi>I</mi><msup><mi>R</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup></mrow></math> meteorito eroriko dira Lurrean. Ageri denez, aurreko bi adibideetan <strong>sakabanatze-sekzio eragilea</strong> kalkulatu dugu eta honetan <strong>harrapatze-sekzio eragilea</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sekzio eragile diferentziala"
    },
    {
     "mota": "testua",
     "html": "Eman dezagun sorta uniforme bat bidaltzen dela eta <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatza sortaren norabidean eta jomugan zehar aukeratzen dugula. Partikula guztien hasierako abiadura <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> da eta energia mekanikoa <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math>; baina <math display=\"inline\"><mi>b</mi></math> jotze-parametroak (eta, beraz, momentu angeluarrak) aldatu egiten dira sortako puntu batetik bestera, noski. Sortak pairatutako indarra aldaratzailea eta ardatzaren inguruan simetrikoa dela emango dugu. Prozesu osoak simetria bera badu, indarra zentrala delako edo, orduan oso distantzia handira <math display=\"inline\"><mi>b</mi></math> erradioko zirkunferentzian zeuden partikula guztiak <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> anguluko konoan higituko dira etorkizuneko infinituan, 4.18 irudian erakusten den bezala. Ohi bezala, indarra (eta, beraz, desbideratzea) distantziarekin txikituz badoa eta jotze-parametroa aurreko <math display=\"inline\"><mi>b</mi></math> baino handiagoa (txikiagoa) bada, partikulak aipaturiko konoak definitzen duen <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> angelu solidoaren barruan (kanpoan) agertuko dira sakabanatu ondoren."
    },
    {
     "mota": "irudia",
     "oina": "Sorta baten sakabanatzea.",
     "src": "media/irudiak/01eacd01c83429b1.svg",
     "zabalera": 370
    },
    {
     "mota": "testua",
     "html": "Kontsidera ditzagun iraganeko infinituan sortarekiko perpendikularra den plano batetik eta <math display=\"inline\"><mi>b</mi></math> eta <math display=\"inline\"><mrow><mi>b</mi><mo>+</mo><mi>d</mi><mi>b</mi></mrow></math> balioen arteko jotze-parametroekin denbora-unitatean pasatu ziren <math display=\"inline\"><mrow><mi>d</mi><mi>N</mi></mrow></math> jaurtigaiak. Sekzio normalaren azalera-unitatetik denbora-unitatean pasatu ziren partikulen kopurua da sortaren intentsitatea: <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mi>d</mi><mi>N</mi><mi>/</mi><mi>d</mi><mi>S</mi></mrow></math>. Partikula horien sakabanatze-angeluak <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>+</mo><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></math> balioen artean egongo dira eta etorkizuneko infinituan sortarekiko <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></math> angelu solidoaren barruan agertuko dira partikulak. Berriro ere, indar newtondar aldaratzaileekin gertatzen den bezala, indarra eta, ondorioz, desbideratzea distantziarekin txikitzen direla emango dugu. Beraz, <math display=\"inline\"><mrow><mi>d</mi><mi>b</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bada, <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Φ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> izango dugu."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>b</mi></math> eta <math display=\"inline\"><mrow><mi>b</mi><mo>+</mo><mi>d</mi><mi>b</mi></mrow></math> erradioen arteko eraztun lauaren azalera <math display=\"inline\"><mrow><mi>d</mi><mi>S</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>b</mi><mi>d</mi><mi>b</mi></mrow></math> denez, sakabanatzea gertatu baino lehen denbora-unitatean handik pasatzen diren partikulen kopurua <math display=\"block\"><mrow><mi>d</mi><mi>N</mi><mo>=</mo><mi>I</mi><mi>d</mi><mi>S</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>I</mi><mi>b</mi><mi>d</mi><mi>b</mi></mrow></math> da. Kontsidera dezagun orain zentroa konoen erpinean duen <math display=\"inline\"><mi>R</mi></math> erradio handiko gainazal esferiko bat. Gainazalak eta konoek irudiko <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Σ</mi></mrow></math> eraztun esferikoa definitzen dute."
    },
    {
     "mota": "testua",
     "html": "Sakabanatu ondoren (detektagailuan)  <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Σ</mi></mrow></math> gainazaletik denbora unitatean pasatu diren <math display=\"inline\"><mrow><mi>d</mi><mi>N</mi></mrow></math> partikulen kopurua intentsitatearekiko proportzionala izango da, jakina, eta informazio ezagun hori kenduta geratzen zaigun <math display=\"inline\"><mrow><mi>d</mi><mi>σ</mi><mo>≡</mo><mi>d</mi><mi>N</mi><mi>/</mi><mi>I</mi></mrow></math> magnitudea <strong>sekzio eragile diferentziala</strong>  da: denbora unitatean <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Σ</mi></mrow></math> gainazaletik pasatzen diren jaurtigaien kopuruaren eta intentsitatearen zatidura. Argi dago, (4.106) emaitzaren ondorioz, <math display=\"block\"><mrow><mi>d</mi><mi>σ</mi><mo>=</mo><mi>d</mi><mi>S</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>b</mi><mi>d</mi><mi>b</mi></mrow></math> dela<span class=\"j-oin\">[Azalera bat denez SI unitatea m<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math> da, baina nukleoen eta partikulen fisikan, hura handiegia denez, <strong>barn</strong> izenekoa erabiltzen da: 1 barn <math display=\"inline\"><mrow><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>28</mn></mrow></msup></mrow></math> m<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math>.]</span>; baina esperimentu batean ez da zuzenean neurtzen partikula bakoitzaren <math display=\"inline\"><mi>b</mi></math> jotze-parametroa, zein norabidetan agertzen den baizik. Beraz, nolabait <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> sakabanatze-angeluaren menpean idatzi behar dugu <math display=\"inline\"><mrow><mi>d</mi><mi>σ</mi></mrow></math> sekzioa."
    },
    {
     "mota": "testua",
     "html": "Gainera badakigu <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Σ</mi></mrow></math>  (edo <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></math>) balioaren menpekoa izango dela <math display=\"inline\"><mrow><mi>d</mi><mi>σ</mi></mrow></math> eta, hortaz, <math display=\"inline\"><mrow><mi>d</mi><mi>σ</mi><mi>/</mi><mi>d</mi><mi mathvariant=\"normal\">Σ</mi></mrow></math> edo, hobe, <math display=\"inline\"><mrow><mi>d</mi><mi>σ</mi><mi>/</mi><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></math> kalkulatu behar dugu. <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Σ</mi><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></math> azalera erradioaren menpekoa denez, naturalagoa da bere ordez erradioaren independentea den <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></math> erabiltzea. Sekzio eragile diferentziala angelu solidoarekin nola aldatzen den ikusteko, kalkula dezagun eraztun esferikoaren <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Σ</mi></mrow></math> azalera infinitesimala."
    },
    {
     "mota": "testua",
     "html": "Bere oinarria <math display=\"inline\"><mrow><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mrow></math> erradioko zirkunferentzia da, <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mrow></math> luzera duena. Eraztunaren altuera <math display=\"inline\"><mi>R</mi></math> erradioko zirkunferentziaren <math display=\"inline\"><mrow><mi>−</mi><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></math> arkua denez, bere luzera <math display=\"inline\"><mrow><mi>−</mi><mi>R</mi><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></math> da (gogoratu <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></math> negatiboa dela). Eraztunaren azalera, beraz, <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Σ</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></math> da eta definitzen duen angelu solidoa <math display=\"block\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"normal\">Σ</mi></mrow><msup><mi>R</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mi>π</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi><mi>d</mi><mi mathvariant=\"normal\">Φ</mi><mi>.</mi></mrow></math> Ondorioz, hauxe dugu:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>b</mi><mi>d</mi><mi>b</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Esfera leun tinkoa eta partikulen sakabanatzea.",
     "src": "media/irudiak/4386e2a964cd8519.svg",
     "zabalera": 198
    },
    {
     "mota": "testua",
     "html": "Orain arte sorta uniformea eta indarra simetrikoa dela eman dugu (baita, indarra distantziarekin txikitzen dela; hauxe egia ez bada, <math display=\"inline\"><mi>−</mi></math> zeinua kendu behar da aurreko adierazpenetatik); baina aurrera egiteko indarraren adierazpen esplizitua ezagutu behar dugu, <math display=\"inline\"><mrow><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioa kalkulatzeko. Adibide moduan, kontsidera dezagun partikula puntualak esfera leun finko baten kontra bidaltzen direla. Esfera leuna bada ez dago ukipen-indar tangenterik eta gainazal esferikoarekiko tangentea den abiaduraren osagaia ez da aldatuko. Talka elastikoa bada, abiaduraren modulua eta, beraz, abiadura erradialarena ez dira aldatuko (gogoratu 1.6.4 problema): eraso- eta islapen-angeluak berdinak dira eta talkaren geometria 4.19 irudikoa. Sakabanatze-angelua <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>π</mi><mo>−</mo><mn>2</mn><mi>β</mi></mrow></math> izango da eta, <math display=\"inline\"><mrow><mi>b</mi><mo>≤</mo><mi>R</mi></mrow></math> denean, hauxe dugu: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>−</mo><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mi>b</mi><mi>R</mi></mfrac><mi>.</mi></mrow></math> Hemendik zuzenean lortzen da sekzio eragile diferentziala: <math display=\"block\"><mrow><mi>b</mi><mo>=</mo><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>b</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>R</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>b</mi><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>b</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>b</mi><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>b</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>R</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>.</mi></mrow></mfrac></mrow></math> Kasu erraz honetan <math display=\"inline\"><mrow><mi>d</mi><mi>σ</mi><mi>/</mi><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></math> konstantea da eta sakabanatzea isotropoa: angelu solidoaren unitatean zehar igorotako partikulen kopurua berdina izango da norabide guztietan."
    },
    {
     "mota": "testua",
     "html": "Indar newtondarren kasuan, (4.105) emaitzaren diferentziala <math display=\"block\"><mrow><mfrac><mrow><mn>2</mn><mi>E</mi><mi>d</mi><mi>b</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cot</mi><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mrow><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></mfrac></mrow></math> da eta, hemendik lortzen den <math display=\"inline\"><mrow><mi>d</mi><mi>b</mi></mrow></math> eta (4.105) berriro erabiliz, hauxe dugu: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>k</mi><mn>2</mn></msup><mrow><mn>16</mn><msup><mi>E</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mn>1</mn><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Geiger eta Marsdenen esperimentuaren eskema.",
     "src": "media/irudiak/3c4ce987af7d6495.svg",
     "zabalera": 275
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Rutherford sakabanatzea"
    },
    {
     "mota": "testua",
     "html": "XX. mendearen hasieran materiaren oinarrizko osagai ezagun bakarra elektroia zen. Azken honen aurkitzailea izan zen J. J. Thomsonen<span class=\"j-oin\">[Joseph John Thomsonek 1906ko Nobel saria eskuratu zuen.]</span> ustez<span class=\"j-oin\">[Badirudi William Thomson (Lord Kelvin) fisikariaren ideia izan zela.]</span>, elektroi negatiboak materia-banaketa jarraitu positibo batean sartuta, budin batean mahaspasak bezala. Materiaren benetako egitura aztertzeko, 1908ko Kimikako Nobel sariduna zen Ernest Rutherfordek Manchesterren zuzendutako laborategian esperimentu batzuk egin ziren 1909 inguruan. Urrezko xafla meheak (0.6 nm lodierakoak)  <math display=\"inline\"><mi>α</mi></math> partikulez bonbardatu zituzten, azken hauen kopurua norabide batzuetan neurtzeko. Partikula gehienak ia ez ziren desbideratzen, baina bakan batzuk atzera (hau da, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>&gt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> sakabanatze-angeluekin) irteten ziren. Oso harrigarria izan zen hori, «paperezko orri bat bonbardatzen bala batzuk atzera irtengo balira bezala». Rutherfordek orduan materia ia hutsik dagoela ondorioztatu zuen<span class=\"j-oin\">[Antzeko eredua proposatu zuen, 1904an, Hantaro Nagaokak, baina asmo eta oinarri desberdinekin.]</span>: elektroiez gain karga positiboa dago, baina oso gune txikietan, nukleoetan, bildurik. <math display=\"inline\"><mi>α</mi></math> partikulak elektroiak baino askoz astunagoak direnez, neurtzen ziren desbideratzeak ulertzeko, nukleoen eragina aztertu behar zen."
    },
    {
     "mota": "testua",
     "html": "Jaurtigaia eta jomuga nukleoak badira, <math display=\"inline\"><msub><mi>Z</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>Z</mi><mn>2</mn></msub></math> zenbaki atomikoak dituztenak, <math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>q</mi><mn>1</mn></msub><msub><mi>q</mi><mn>2</mn></msub></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>Z</mi><mn>1</mn></msub><msub><mi>Z</mi><mn>2</mn></msub><msup><mi>e</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac></mrow></math> dugu eta (4.115) emaitzatik 1911ko <strong>Rutherforden sakabanatze-formula</strong> lortzen da<span class=\"j-oin\">[Gregor Wentzelek 1926an eta, batez ere, Nevill Mottek 1928an frogatu zuten mekanika kuantikoan emaitza bera lortzen dela <math display=\"inline\"><mrow><mi>V</mi><mo>∝</mo><mi>−</mi><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> potentzialaren kasu berezian.]</span>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mi>n</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>Z</mi><mn>1</mn></msub><msub><mi>Z</mi><mn>2</mn></msub><msup><mi>e</mi><mn>2</mn></msup></mrow><mrow><mn>16</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>E</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mfrac><mn>1</mn><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></mfrac><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi>n</mi></math> zenbakia laginean dauden nukleoen kopurua den (eta <math display=\"inline\"><mi>e</mi></math> oinarrizko karga). Izan ere, benetako esperimentu batean kontuan hartu behar da sakabanatze-zentro asko daudela: partikula bat norabide batean agertzeko arrazoia edozein jomugaren eraginaren ondorioa izan daiteke. Hemen eman da partikula baten desbideratzea nukleo bakarrarekin duen elkarrekintzaren ondorioa dela, eta egia da lagina mehea denean (ikus, halaber, 4.5.6 atala). Demagun, gainera, lagina detektagailua baino askoz txikiagoa dela, behatzaileak neurturiko angelua sakabanatze-zentroaren menpekoa ez izateko."
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><mi>α</mi></math> partikulen sakabanatzea (a) Thomsonen ereduan eta (b) Rutherfordenean.",
     "src": "media/irudiak/d4bf4fd07f33670a.svg",
     "zabalera": 318
    },
    {
     "mota": "testua",
     "html": "Ikusten dugunez, sekzio eragile diferentzialaren sakabanatze-angeluarekiko menpekotasuna oso handia da. Zorionez, denbora hartan egin gabe zegoen mekanika kuantikoan emaitza berbera lortzen da indar newtondarren kasuan, eta menpekotasun hori Geigerrek eta Marsdenek egiaztatu zuten, nukleo astunak <math display=\"inline\"><mrow><mi>E</mi><mo>≈</mo><mn>5</mn></mrow></math> MeV-eko <math display=\"inline\"><mi>α</mi></math> partikulekin bonbardatzean. Esperimentu eta azalpen teoriko hauekin oso urrats handia egin zen atomoen egitura ulertzeko."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sekzio eragile osoa"
    },
    {
     "mota": "testua",
     "html": "Sekzio eragile diferentziala integratzen badugu, sekzio eragile osoa —hau da norabide guztietan denbora-unitatean agertzen diren partikula sakabanatuen kopuruaren eta intentsitatearen zatidura— lortzen da. Esfera leun gogor baten kasuan, (4.113) konstantea denez, <math display=\"block\"><mrow><mi>σ</mi><mo>=</mo><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mfrac><msup><mi>R</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo>∫</mo><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> dugu, 4.5.1 atalean ikusi genuen bezala: sakabanatzen diren partikulen zeharkako azalera esferarena da, <math display=\"inline\"><mrow><mi>b</mi><mo>&gt;</mo><mi>R</mi></mrow></math> jotze-parametroen kasuan ez baitago sakabanatzerik."
    },
    {
     "mota": "testua",
     "html": "Sakabanatze newtondarrean, (4.115) emaitzatik honela kalkulatzen da sekzio eragile osoa: <math display=\"block\"><mrow><mi>σ</mi><mo>=</mo><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mfrac><msup><mi>k</mi><mn>2</mn></msup><mrow><mn>16</mn><msup><mi>E</mi><mn>2</mn></msup></mrow></mfrac><msubsup><mo>∫</mo><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">min</mi></msub><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">max</mi></msub></msubsup><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi></mrow><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></mfrac><mi>d</mi><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>π</mi><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><msup><mi>E</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mn>1</mn><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></mfrac><msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">min</mi></msub><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">max</mi></msub></msubsup><mi>.</mi></mrow></math> Sorta uniformearen zeharkako sekzioa infinitua bada, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">min</mi></msub><mo>=</mo><mn>0</mn></mrow></math> lortzen da <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mi>∞</mi></mrow></math> denean eta, jakina, sekzio osoa infinitua da. Benetako esperimentu batean, elektroien kargak nukleoen kontrakoak direnez, jotze-parametroa atomoaren erradioa baino handiagoa bada, jaurtigaia (ia) ez da desbideratuko; beraz, desbideratzen den sortaren zatiaren <math display=\"inline\"><mi>σ</mi></math> azalera finitua (eta oso txikia) izango da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Perizentroa eta nukleoen dimentsioa"
    },
    {
     "mota": "testua",
     "html": "Bestaldetik, jomuga puntuala dela eman dugu; beraz, ezin erabil daiteke (4.115) jotze-parametroaren balioa nukleoaren erradioaren parekoa edo txikiagoa bada. Izan ere, jomuga eta jaurtigaiaren arteko distantziarik txikiena <math display=\"block\"><mrow><msub><mi>r</mi><mo>−</mo></msub><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mi>p</mi><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><mi>E</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da eta <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>−</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac><mi>.</mi></mrow></math> Hortaz, <math display=\"block\"><mrow><msub><mi>r</mi><mo>−</mo></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><mi>E</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">csc</mi><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dugu eta sakabanatze-esperimentu batean «ikus» daitezkeen distantzia txikienak, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>π</mi></mrow></math> balioari dagozkion buruz buruko talketako <math display=\"block\"><mrow><msub><mi>r</mi><mi mathvariant=\"normal\">min</mi></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mi>E</mi></mfrac></mrow></math> baliokoak edo izango dira. Rutherfordek bere legea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>/</mi><mi>E</mi><mo>&gt;</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>14</mn></mrow></msup></mrow></math> m energiekin bakarrik betetzen zela ikustean, nukleoaren dimentsioa <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>14</mn></mrow></msup></math> m ingurukoa (eta ez atomoaren <math display=\"inline\"><mrow><mi>d</mi><mo>∼</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup></mrow></math> m diametroa) zela ondorioztatu zuen. Materia ia-ia hutsik dago: «euli bat katedral batean bezala» dago nukleoa atomoan."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Batez besteko ibilbide askea"
    },
    {
     "mota": "testua",
     "html": "Sekzio eragile osoaz balia gaitezke partikula-sorta bat materian zehar higitzen nola ahultzen den deskribatzeko. Azter dezagun, hasteko, bolumen-unitatean <math display=\"inline\"><mi>N</mi></math> atomo dituen material batean higitzen den sortako partikula bat. Partikularen eta atomo baten arteko sekzio eragile osoa <math display=\"inline\"><mi>σ</mi></math> bada, bien arteko talka gertatzeko, partikularen ibilbidea ardaztzat duen <math display=\"inline\"><mi>σ</mi></math> zeharkako sekzioko zilindroan egon behar du atomoak. Ondorioz, <math display=\"inline\"><mi>x</mi></math> distantzia egitean, zilindroan dauden <math display=\"inline\"><mrow><mi>N</mi><mi>σ</mi><mi>x</mi></mrow></math> atomoen eragina pairatuko du partikulak eta talken artean egindako batez besteko bidea, batez besteko ibilbide askea deitzen dena, hauxe izango da: <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>N</mi><mi>σ</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Ibilbide askea eta partikula-sortaren intentsitatea.",
     "src": "media/irudiak/55404dcb336c8fd4.svg",
     "zabalera": 259
    },
    {
     "mota": "testua",
     "html": "Eman dezagun partikula-sorta materialaren azalarekiko perpendikularra dela eta bere intentsitatea azalean <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta <math display=\"inline\"><mi>x</mi></math> sakoneran atomoekin talka egin gabe (eta, beraz, desbideratu gabe) higitzen diren partikulen intentsitatea <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Beraz <math display=\"inline\"><mi>x</mi></math> distantziara dagoen <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> lodierako xafla bat kontsideratzen badugu, barruan <math display=\"inline\"><mrow><mi>N</mi><mi>A</mi><mi>d</mi><mi>x</mi></mrow></math> atomo daude eta denbora-unitatean <math display=\"inline\"><mrow><mi>N</mi><mi>A</mi><mi>σ</mi><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> talka gertatuko dira. Xaflan denbora-unitatean sartzen diren partikulak <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi></mrow></math> direnez, talkarik egin gabe irteten direnak honako hauek ditugu: <math display=\"block\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><mo>=</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><mo>−</mo><mi>N</mi><mi>A</mi><mi>σ</mi><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Hemen <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>I</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> garapena eginez, <math display=\"inline\"><mrow><msup><mi>I</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>N</mi><mi>σ</mi><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lortzen dugu eta hau, <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hastapen-baldintza gogoratuz, hurrengo modu baliokidean idazten da, 1.4.3 ataleko aldagaien banantzearen metodoa erabiltzen badugu: <math display=\"block\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>N</mi><mi>σ</mi><mi>x</mi></mrow></msup><mo>=</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi><mi>/</mi><mi>λ</mi></mrow></msup><mi>.</mi></mrow></math> Laginaren lodiera <math display=\"inline\"><mi>d</mi></math> bada, denbora unitatean gertatzen diren talkak <math display=\"block\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>d</mi><mi>/</mi><mi>λ</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi></mrow></math> izango dira. Lagina oso mehea bada, hau da, <math display=\"inline\"><mrow><mi>d</mi><mo>≪</mo><mi>λ</mi></mrow></math> badugu, <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>d</mi><mi>/</mi><mi>λ</mi></mrow></msup><mo>≈</mo><mn>1</mn><mo>−</mo><mi>d</mi><mi>/</mi><mi>λ</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>N</mi><mi>σ</mi><mi>d</mi></mrow></math> garapena erabil dezakegu eta talken kopurua <math display=\"inline\"><mrow><mi>N</mi><mi>σ</mi><mi>d</mi><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi></mrow></math> izango da: atomo batekin gertatzen diren <math display=\"inline\"><mrow><mi>σ</mi><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> talken eta lagineko <math display=\"inline\"><mrow><mi>N</mi><mi>A</mi><mi>d</mi></mrow></math> atomoen kopuruen biderkadura, hain zuzen. Arrazoi beragatik, lagina oso mehea denean, talka anizkunik ez badago, sekzio eragile diferentziala partikula bakarrari dagokiona nukleoen kopuruaz biderkatuz lortzen da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sekzio eragileak masa-zentroan eta laborategian"
    },
    {
     "mota": "testua",
     "html": "Orain arte, gauzak errazteko, indar-poloa finkotzat hartu dugu, baina hori ez da beti egia izango. Eman dezagun laborategian hasieran geldi dauden jomuga aske berdinen kontra igortzen direla jaurtigaiak. (Horrelako prozesu fisiko bat dugu (ia) geldi dauden protoiak energia handiko protoiekin bonbardatzean, adibidez.) Oro har, partikulen arteko talkak errazago aztertzen dira masa-zentroaren sisteman, 1.5.7 atalean ikusi genuen bezala (ikus, halaber, 4.108 problema); baina neurketak laborategiko sisteman egiten dira."
    },
    {
     "mota": "testua",
     "html": "Eman dezagun, masa-zentroaren sisteman <math display=\"inline\"><mi>b</mi></math> jotze-parametroaren eta <math display=\"inline\"><msup><mi>θ</mi><mo>*</mo></msup></math> sakabanatze-angeluaren arteko erlazioa kalkulatu dela eta, ondorioz, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><msup><mi mathvariant=\"normal\">Ω</mi><mo>*</mo></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>b</mi><mi>d</mi><mi>b</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mi>d</mi><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow></mfrac></mrow></math> ezaguna dela. Izan ere, higidura erlatiboan eta masa-zentroan neurtutako sakabanatze-angeluak berdinak dira, (1.165) proportzionaltasunaren ondorioz, norabideak berdinak baitira. Gainera infinituan jaurtigaiak zituen abiadura eta energia modu berean neurtzen dira laborategiko sisteman eta higidura erlatiboan, hasieran jomuga geldi bazegoen. Beraz, sakabanatzea newtondarra denean, Rutherforden emaitzak erabil daitezke masa-zentroan, jaurtigaiaren masaren ordez sistemaren masa laburbildua erabiltzen bada."
    },
    {
     "mota": "testua",
     "html": "Kono infinitesimal batean sakabanatzen diren partikulen kopurua berdina izango masa-zentroan eta laborategiko sisteman, jakina: <math display=\"block\"><mrow><mi>d</mi><mi>σ</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><msup><mi mathvariant=\"normal\">Ω</mi><mo>*</mo></msup></mrow></mfrac><mi>d</mi><msup><mi mathvariant=\"normal\">Ω</mi><mo>*</mo></msup><mo>=</mo><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mi>.</mi></mrow></math> Hortaz, (4.108) adierazpena eta masa-zentroan dagokiona erabiliz, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><msup><mi mathvariant=\"normal\">Ω</mi><mo>*</mo></msup></mrow></mfrac></mrow></math> lortzen da. Bi sistemetako sakabanatze-angeluen arteko erlazioa ematen duen (1.185) emaitza erabili behar da adierazpen esplizitu orokorra kalkulatzeko; baina, ez dugu hemen kalkulu orokorra egingo (4.107 probleman aztertuko dugu kasu berezi bat)."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Hiru gorputzen problema",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Orain arte aztertu dugun problema, barne-indar zentralen eraginez higitzen diren bi gorputzen higidura erlatiboa, hain zuzen, oso berezia da. Printzipioz, horrelako higidura batean sei hastapen-baldintza eman behar dira: hasierako posizio erlatiboaren hiru osagaiak eta abiaduraren hiruak. Energia mekanikoaren eta momentu angeluarraren kontserbazio-legeak<span class=\"j-oin\">[Indarra zentrala eta newtondarra bada, beste higidura-konstante bat dago: Laplace, Runge eta Lenzen bektorea (ikus 4.35 problema).]</span> erabiliz, higidura-ekuazioak (4.24) eta (4.26) integraletara laburtu ditugu. Energia mekanikoa, momentu angeluarra eta bi hastapen-baldintza, <math display=\"inline\"><mrow><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, emanda badira, higidura kalkula daiteke, aipaturiko integralak ebazteko gai bagara behintzat. Azken hau ez da askotan gertatzen (metodo hurbilduetara jo gabe), baina hiru gorputzen kasuan problema integraletara laburtzea ere ezinezkoa izaten da."
    },
    {
     "mota": "testua",
     "html": "Izan ere, hiru gorputzen problema orokorrean energia mekanikoa izaten da higidura-konstante bakarra masa-zentroaren sisteman eta hastapen-baldintzak hamabi. Gauzak nolabait errazteko (ez dira batere errazak, baina) hipotesi gehiago egingo ditugu hemendik aurrera."
    },
    {
     "mota": "irudia",
     "oina": "Bi gorputzen problema murriztu zirkularraren orbita bat sistema birakarian eta masa-zentroarenean.",
     "src": "media/irudiak/667d5edb647deff9.svg",
     "zabalera": 320
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hiru gorputzen problema murriztu zirkularra"
    },
    {
     "mota": "testua",
     "html": "Eman dezagun hiru gorputzetako batek, <strong>planetoidea</strong> deitu ohi denak, oso masa txikia duela, beste bien higiduran duen eragina arbuiagarria izateko moduan. Beste biak, <strong>primarioak</strong> deitutakoak, orbita zirkularretan higitzen dira elkarren inguruan eta, ondorioz, masa-zentroaren inguruan. (Adibidez, primarioak Eguzkia eta Jupiter izan daitezke eta planetoidea asteroide bat.) Gainera, planetoidea primarioen orbitaren planoan higitzen da; problema laua dugu eta hastapen-baldintzak lau izango dira (bat energia mekanikoa izan daiteke). Planetoidearen higidura aztertzeko, erreferentzia-sistemaren jatorria masa-zentroan aukeratuko dugu eta ardatz koordenatuak primarioekin batera biratuko dira; primarioak, beraz, <math display=\"inline\"><mi>X</mi></math> ardatzean pausagune erlatiboan egongo dira. Sistema birakari hau ez da inertziala eta, bi primarioen erakarpen grabitatorioez gain indar zentrifugoa eta Coriolisena agertuko dira higidura-ekuazioan (ikus 2.7.3 problema). Egindako hipotesi guztiekin ere problema oso zaila da. Adibide moduan, 4.23 irudian agertzen da orbita baten zati bat; ezkerraldean goian definituriko sistema birakarian eta eskuinean puntu berean kokaturiko masa-zentroaren sistema inertzialean. Adibide horretan bi primarioen masak berdinak badira ere (masa-zentroaren inguruko orbita zirkularreko kontrako bi puntutan egongo dira beti bi primarioak), orbita ez da orain arte ikusi ditugunak bezain erraza."
    },
    {
     "mota": "irudia",
     "oina": "Puntu lagrangearrak eta bi orbita Lurraren eta Ilargiaren sisteman.",
     "src": "media/irudiak/412779484269beaa.svg",
     "zabalera": 318
    },
    {
     "mota": "azpititulua",
     "testua": "Lagrangeren puntuak"
    },
    {
     "mota": "testua",
     "html": "Orbita gehienak oso korapilatsuak izateak ez du esan nahi orbita errazagorik ez dagoela. Izan ere, higidura errazena oreka da eta Lagrangek frogatu zuenez, sistema birakarian bost oreka-puntu daude (ikus 2.7.4 problema). Lehenengo hiruak (<math display=\"inline\"><msub><mi>L</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>L</mi><mn>2</mn></msub></math> eta <math display=\"inline\"><msub><mi>L</mi><mn>3</mn></msub></math>) primarioak lotzen dituen zuzenean daude eta beti dira ezegonkorrak (ikus [16] eta [19]). Ondorioz, horrelako puntu baten inguruan satelite bat iraunarazteko motorrak erabili behar dira; baina, batzuetan, beste abantaila batzuk kontuan hartuta, erabilgarriak izan daitezke. Horrela, Eguzkiaren eta Lurraren <math display=\"inline\"><msub><mi>L</mi><mn>1</mn></msub></math> puntuan dago <em>Solar and Heliospheric Observatory Satellite</em>  (SOHO) izeneko satelitea, bertatik beti ikusten baita Eguzkia. Eguzkiaren interferentzia ekiditeko, <math display=\"inline\"><msub><mi>L</mi><mn>2</mn></msub></math> puntuan daude <em>Wilkinson Microwave Anisotropy Probe</em> (WMAP) eta Planck sateliteak, mikrouhinen hondo-erradiazio kosmikoa aztertzen dutenak."
    },
    {
     "mota": "testua",
     "html": "Bestalde, bi primarioekin batera triangelu aldekideak definitzen duten <math display=\"inline\"><msub><mi>L</mi><mn>4</mn></msub></math> eta <math display=\"inline\"><msub><mi>L</mi><mn>5</mn></msub></math> puntuak egonkorrak dira primarioen masek hurrengo baldintzak betetzen badituzte<span class=\"j-oin\">[Ikus, adibidez, [16], [19] eta [71]]</span>.: <math display=\"block\"><mrow><mi>μ</mi><mo>≡</mo><mfrac><msub><mi>m</mi><mn>2</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mo>&lt;</mo><mfrac><mrow><mn>9</mn><mo>−</mo><msqrt><mn>69</mn></msqrt></mrow><mn>18</mn></mfrac><mo>≈</mo><mn>0.0385</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>μ</mi><mo>≠</mo><mn>0.0109</mn><mi>…</mi><mo>,</mo><mn>0.0135</mn><mi>…</mi><mo>,</mo><mn>0.0242</mn><mi>…</mi></mrow></math> Primarioak Eguzkia eta planeta bat edo Lurra eta Ilargia badira baldintza horiek betetzen dira. Azpimarratu behar da soluzio hauek oreka erlatiboaren puntuak direla, sistema birakarian bakarrik baitaude geldi, masa-zentroaren sisteman primarioekin batera biratzen dira, baina <math display=\"inline\"><mrow><mn>60</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-ko aurrerapen edo atzerapen konstantearekin, 4.24 irudian ikusten den bezala."
    },
    {
     "mota": "irudia",
     "oina": "Arenstorfen orbita bat sistema birakarian eta masa-zentroarenean.",
     "src": "media/irudiak/eff8f21c4cd3a6f0.svg",
     "zabalera": 337
    },
    {
     "mota": "testua",
     "html": "Lagrangeren puntuak bitxikeria matematikotzat hartzen ziren, baina 1906 urtetik aurrera Jupiterren <math display=\"inline\"><msub><mi>L</mi><mn>4</mn></msub></math> eta <math display=\"inline\"><msub><mi>L</mi><mn>5</mn></msub></math> puntuen inguruan asteroideak aurkitzen hasi ziren: Akiles, Patroklo, Hektor, Nestor, Priamo, Agamemnon eta abar. Gaur egun mila baino gehiago ezagutzen dira (ia bi heren <math display=\"inline\"><msub><mi>L</mi><mn>4</mn></msub></math> puntuaren inguruan) eta <strong>troiarrak</strong> deitzen dira. Marteren lehen troiarra, Eureka, 1990ean aurkitu zen. 2012an troiarren ordezko kuantikoak lortu ziren laborategian, Rydberg atomoetan (hau da, oso energia maila altuan dauden atomo handietan)."
    },
    {
     "mota": "testua",
     "html": "Primariotzat Lurra eta Ilargia dituen sisteman ez dago gorputz handirik <math display=\"inline\"><msub><mi>L</mi><mn>4</mn></msub></math> eta <math display=\"inline\"><msub><mi>L</mi><mn>5</mn></msub></math> puntuen inguruan, baina bai 1956an lehenengoz aurkitu ziren gorputz txikiz osaturiko hodei zabalak."
    },
    {
     "mota": "irudia",
     "oina": "Arenstorfen beste bi orbita sistema birakarian.",
     "src": "media/irudiak/5a84a0350dc93088.svg",
     "zabalera": 347
    },
    {
     "mota": "testua",
     "html": "Badaude, gainera, orbita periodiko ezegonkorrak, hala nola Arenstorfek aurkituak (4.25 eta 4.26 irudietan erakusten dira horietako batzuk)."
    },
    {
     "mota": "testua",
     "html": "1999an bestelako soluzio mota bat aurkitu zen, Eguzkiaren eta Lurraren sistemaren <math display=\"inline\"><msub><mi>L</mi><mn>3</mn></msub></math>, <math display=\"inline\"><msub><mi>L</mi><mn>4</mn></msub></math> eta <math display=\"inline\"><msub><mi>L</mi><mn>5</mn></msub></math> puntuak lotzen dituen orbitak eta, besteak beste, 5 km-ko diametroa duen Cruithne<span class=\"j-oin\">[Ikus `burtleburtle.net/bob/physics/cruithne.html` orrialdeko simulazioa.]</span> asteroidea horrelako batean higitzen da eta, kalkuluen arabera, bertan egongo da 5000 urtez."
    },
    {
     "mota": "testua",
     "html": "4.24 irudian erakusten den bezala, planetoide bat <math display=\"inline\"><msub><mi>L</mi><mn>4</mn></msub></math> edo <math display=\"inline\"><msub><mi>L</mi><mn>5</mn></msub></math> puntuan badago, hiru gorputzak (bi primarioak eta planetoidea) triangelu aldekide birakari baten erpinetan daude beti: solido zurrun baten antzera biratzen dira euren masa-zentroaren inguruan, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mi>G</mi><mi>M</mi><mi>/</mi><msup><mi>a</mi><mn>3</mn></msup></mrow></msqrt></mrow></math> abiadura angeluarraz, hiru gorputzen masa osoa <math display=\"inline\"><mi>M</mi></math> bada eta triangeluaren aldeen luzera <math display=\"inline\"><mi>a</mi></math>. Lagrangek berak frogatu zuen planetoidearen masa arbuiagarria ez zenean ere soluzio triangeluar hau existitzen dela: hiru gorputzen problema <em>orokorraren</em> soluzioa da<span class=\"j-oin\">[Ikus, adibidez, [114].]</span>."
    },
    {
     "mota": "irudia",
     "oina": "Mooreren orbita periodiko egonkorra.",
     "src": "media/irudiak/ffc09aa709723b6a.svg",
     "zabalera": 193
    },
    {
     "mota": "testua",
     "html": "Bestalde, azken urteetan <math display=\"inline\"><mi>n</mi></math> gorputzen problema orokorragoen beste soluzio periodiko asko aurkitu dira. Agian C. Moorek 1993an aurkitu zuena da harrigarriena, <em>egonkorra</em>  baita: hiru partikula berdinak 4.27 irudiko orbita berean higitzen dira eta momentu angeluar osoa zero da."
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Problema ebatziak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Newtonen problema"
    },
    {
     "mota": "testua",
     "html": "<em>Demagun Newtonen grabitazio-legea ez dela ezaguna: Keplerren legeak aukeratuko dira abiapuntutzat.\n<br>\n(a) Froga ezazu Keplerren lehen eta bigarren legeetatik planeta batek jasaten duen indarraren\nzentraltasuna ondorioztatzen dela. <br>\n(b) Emaitza horretaz eta Keplerren lehen legeaz baliaturik, nola froga daiteke Eguzkiaren eta planetaren\narteko distantziaren karratuarekiko alderantzizko proportzionala dela indarra? <br>\n(c) Erabili aurreko bi puntuetako emaitzak eta Keplerren hirugarren legea, indarra planetaren masarekiko\nproportzionala dela ondorioztatzeko.</em>"
    },
    {
     "mota": "testua",
     "html": "(a) Lehen legearen ondorioz, orbita eliptikoaren fokuarekiko momentu angeluarraren norabidea, elipsearen planoarekiko perpendikularra eta, hortaz, konstantea da. Momentuaren modulua eta noranzkoa ere konstanteak dira, bigarren legearen ondorioz. Beraz, momentu angeluarra konstantea denez, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mn>0</mn></mrow></math> dugu."
    },
    {
     "mota": "testua",
     "html": "(b) Orbita eliptikoa denez, koordenatu polarretan bere ekuazioa <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ε</mi><mi mathvariant=\"normal\">cos</mi><mi>ϕ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>p</mi></mrow></math> da eta Bineten formula erabiliz zera dugu: <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>L</mi><mn>2</mn></msup><mi>m</mi></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>u</mi><mo>″</mo></msup><mo>+</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>u</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><mi>p</mi></mrow></mfrac><msup><mi>u</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>=</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><mi>p</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(c) Aurreko bi puntuetan indar-eremua newtondarra dela frogatu dugunez, hauxe dugu: <math display=\"block\"><mrow><mfrac><msup><mi>T</mi><mn>2</mn></msup><msup><mi>a</mi><mn>3</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup><mi>m</mi></mrow><mi>k</mi></mfrac><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>∝</mo><mi>m</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Nola froga daiteke Eguzkiaren masarekiko proportzionala dela indarra?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kurba konikoak"
    },
    {
     "mota": "testua",
     "html": "<em>Eman dezagun puntu bat eta lerro zuzen bat aukeratzen ditugula. Puntua <strong>fokua</strong> deituko dugu\neta lerro zuzena <strong>zuzentzailea</strong>. Fokutik eta zuzentzailetik neurturiko puntu baten distantzien arteko\nzatidura <strong>eszentrikotasuna</strong> da. Definizioz, <math display=\"inline\"><mi>ε</mi></math> eszentrikotasun konstanteko puntuen leku\ngeometrikoak dira kurba konikoak. Zuzentzailearen norabidean neurturiko kurbaren eta fokuaren arteko <math display=\"inline\"><mi>p</mi></math>\ndistantzia <strong>foku-parametroa</strong> deitzen da. Aukeratu jatorria fokuan eta <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatza zuzentzailearekiko\nperpendikularrean. Froga ezazu koordenatu polarretan kurba konikoen ekuazioa</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>±</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>dela eta ondorioztatu kurba konikoak (geometria klasikoan gainazal konikoen eta planoen arteko\nebakidura gisa ere definitzen zirenak) zirkunferentziak, elipseak, parabolak edo hiperbolak direla.</em>"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Irudian ikusten den bezala, <math display=\"block\"><mrow><mi>ε</mi><mo>=</mo><mfrac><mi>p</mi><mi>D</mi></mfrac><mo>=</mo><mfrac><mi>r</mi><mi>d</mi></mfrac><mo>=</mo><mfrac><msup><mi>r</mi><mo>′</mo></msup><msup><mi>d</mi><mo>′</mo></msup></mfrac><mi>.</mi></mrow></math> Bestalde, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mi>d</mi><mo>=</mo><msup><mi>r</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>ϕ</mi><mo>′</mo></msup><mo>−</mo><msup><mi>d</mi><mo>′</mo></msup></mrow></math> eta hemen <math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mfrac><mi>p</mi><mi>ε</mi></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>d</mi><mo>=</mo><mfrac><mi>r</mi><mi>ε</mi></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msup><mi>d</mi><mo>′</mo></msup><mo>=</mo><mfrac><msup><mi>r</mi><mo>′</mo></msup><mi>ε</mi></mfrac></mrow></math>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "media/irudiak/b465bc1cbbd19adc.svg",
         "zabalera": 135
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "eginez hauxe dugu: <math display=\"block\"><mrow><mfrac><mi>p</mi><mi>ε</mi></mfrac><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mfrac><mi>r</mi><mi>ε</mi></mfrac><mo>=</mo><msup><mi>r</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>ϕ</mi><mo>′</mo></msup><mo>−</mo><mfrac><msup><mi>r</mi><mo>′</mo></msup><mi>ε</mi></mfrac><mi>.</mi></mrow></math> 4.3.1, 4.3.2, 4.4.1 eta 4.4.2 ataletan frogatu dugunez, horrelako ekuazio batek emandako kurba zirkunferentzia, elipsea, parabola edo hiperbolaren adar bat da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sateliteak"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<em>Pisu gabeko hagatxo batez eta <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>20</mn></mrow></math> kg-ko bi masa esferikoz osaturiko satelitea orbita\n    zirkular batean higitzen ari da, irudian erakusten den moduan. Higidura osoan zehar <math display=\"inline\"><mrow><mi>l</mi><mo>≪</mo><msub><mi>R</mi><mo>⊕</mo></msub></mrow></math>\n    luzerako hagatxoa norabide erradialean dago inolako esfortzurik jasan gabe. Kalkula ezazu <math display=\"inline\"><mi>l</mi></math> distantzia.</em>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "media/irudiak/69bcb978c65a65dd.svg",
         "zabalera": 155
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hagatxoak ez badu inolako indarrik eragiten, Lurrak eragindako ekarpena eta masen artekoa izango dira indarrak eta, ondorioz, bi masen higidura-ekuazioak hurrengoak: <math display=\"block\"><mrow><mfrac><mrow><mi>G</mi><mi>m</mi><msub><mi>M</mi><mo>⊕</mo></msub></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><msub><mi>R</mi><mo>⊕</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mrow><mi>G</mi><msup><mi>m</mi><mn>2</mn></msup></mrow><msup><mi>l</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><msub><mi>R</mi><mo>⊕</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>G</mi><mi>m</mi><msub><mi>M</mi><mo>⊕</mo></msub></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><msub><mi>R</mi><mo>⊕</mo></msub><mo>+</mo><mi>l</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><mi>G</mi><msup><mi>m</mi><mn>2</mn></msup></mrow><msup><mi>l</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><msub><mi>R</mi><mo>⊕</mo></msub><mo>+</mo><mi>l</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Batzuetan kalkuluak errazteko dimentsio gabeko aldagaiak oso erabilgarriak izaten dira, tarteko adierazpenak laburtzeko (baina kalkulu-akatsak aurkitzeko hain erabilgarria den dimentsioen egiaztapena galtzen da). Kasu honetan, <math display=\"block\"><mrow><mi>d</mi><mo>≡</mo><mfrac><mi>l</mi><mrow><mn>5</mn><msub><mi>R</mi><mo>⊕</mo></msub></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>μ</mi><mo>≡</mo><mfrac><mi>m</mi><msub><mi>M</mi><mo>⊕</mo></msub></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>Q</mi><mo>≡</mo><mfrac><mrow><mn>125</mn><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>R</mi><mo>⊕</mo><mn>3</mn></msubsup></mrow><mrow><mi>G</mi><msub><mi>M</mi><mo>⊕</mo></msub></mrow></mfrac></mrow></math> aldagaiak erabiltzen baditugu, honela agertzen zaizkigu higidura-ekuazioak: <math display=\"block\"><mrow><mn>1</mn><mo>−</mo><mfrac><mi>μ</mi><msup><mi>d</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>Q</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>d</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mi>μ</mi><msup><mi>d</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Lehen ekuazioa bigarrenean ordezkatuz zera lortzen da: <math display=\"block\"><mrow><mi>μ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mn>5</mn><mi>d</mi><mo>+</mo><mn>4</mn><msup><mi>d</mi><mn>2</mn></msup><mo>+</mo><msup><mi>d</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>d</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mo>+</mo><mn>3</mn><mi>d</mi><mo>+</mo><msup><mi>d</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Beraz, <math display=\"inline\"><mrow><mi>d</mi><mo>≪</mo><mn>1</mn></mrow></math> dela erabiliz, parentesietan bakarrik gorde behar da lehen gaia: <math display=\"block\"><mrow><mn>2</mn><mi>μ</mi><mo>≈</mo><mn>3</mn><msup><mi>d</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math> Nahiago bada, Taylorren garapenaren ondorioz, hauxe dugu: <math display=\"block\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>d</mi><mn>3</mn></msup><mfrac><mrow><mn>3</mn><mo>+</mo><mn>3</mn><mi>d</mi><mo>+</mo><msup><mi>d</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mo>+</mo><mn>5</mn><mi>d</mi><mo>+</mo><mn>4</mn><msup><mi>d</mi><mn>2</mn></msup><mo>+</mo><msup><mi>d</mi><mn>3</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><msup><mi>d</mi><mn>3</mn></msup><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>d</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Edozein kasutan, <math display=\"block\"><mrow><mi>l</mi><mo>≈</mo><mn>5</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mfrac><mi>m</mi><mrow><mn>3</mn><msub><mi>M</mi><mo>⊕</mo></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mn>3</mn></mfrac></msup><msub><mi>R</mi><mo>⊕</mo></msub><mo>≈</mo><mn>0.42</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hohmannen orbita"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<em>Satelite bat orbita zirkular batetik beste batera joateko bi zirkunferentziekiko tangentea den\n    orbita eliptikoa erabil daiteke. Noiz piztu behar da motorra? Nola aldatuko da abiadura motorra\n    erabiltzean? Motorrak igorritako gasen abiadura <math display=\"inline\"><mi>u</mi></math> bada, zein da bidaia egiteko erabiliko den gasaren\n    masa osoa?</em>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "media/irudiak/9939103427ec3c99.svg",
         "zabalera": 131
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hiru orbitetan higidura grabitatearen eraginez gertatzen denez, motorra orbita aldatzeko erabili behar da soilik: <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math> puntuetan hain zuzen. Puntu horietan orbitak tangenteak direnez, abiaduraren norabidea ez da aldatuko. Abiaduren moduluak kalkulatzeko, orbita itxieen energia mekanikoa <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>m</mi><msub><mi>M</mi><mo>⊕</mo></msub></mrow><mi>r</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>m</mi><msub><mi>M</mi><mo>⊕</mo></msub></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mrow></math> dela erabiliko dugu: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><msub><mi>m</mi><mn>1</mn></msub><msub><mi>M</mi><mo>⊕</mo></msub></mrow><msub><mi>r</mi><mn>1</mn></msub></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><msub><mi>m</mi><mn>1</mn></msub><msub><mi>M</mi><mo>⊕</mo></msub></mrow><mrow><mn>2</mn><msub><mi>r</mi><mn>1</mn></msub></mrow></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>m</mi><mo>′</mo></msup><msubsup><mi>v</mi><msup><mn>1</mn><mo>′</mo></msup><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><msup><mi>m</mi><mo>′</mo></msup><msub><mi>M</mi><mo>⊕</mo></msub></mrow><msub><mi>r</mi><mn>1</mn></msub></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><msup><mi>m</mi><mo>′</mo></msup><msub><mi>M</mi><mo>⊕</mo></msub></mrow><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>+</mo><msub><mi>r</mi><mn>2</mn></msub></mrow></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>m</mi><mo>′</mo></msup><msubsup><mi>v</mi><msup><mn>2</mn><mo>′</mo></msup><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><msup><mi>m</mi><mo>′</mo></msup><msub><mi>M</mi><mo>⊕</mo></msub></mrow><msub><mi>r</mi><mn>2</mn></msub></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><msup><mi>m</mi><mo>′</mo></msup><msub><mi>M</mi><mo>⊕</mo></msub></mrow><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>+</mo><msub><mi>r</mi><mn>2</mn></msub></mrow></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><msub><mi>m</mi><mn>2</mn></msub><msub><mi>M</mi><mo>⊕</mo></msub></mrow><msub><mi>r</mi><mn>2</mn></msub></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><msub><mi>m</mi><mn>2</mn></msub><msub><mi>M</mi><mo>⊕</mo></msub></mrow><mrow><mn>2</mn><msub><mi>r</mi><mn>2</mn></msub></mrow></mfrac><mi>.</mi></mtd></mtr></mtable></math> Hemendik abiaduraren aldaketak honako hauek direla ondorioztatzen da: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>v</mi><mn>1</mn></msub><mo>≡</mo><msub><mi>v</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>−</mo><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mi>G</mi><msub><mi>M</mi><mo>⊕</mo></msub></mrow><msub><mi>r</mi><mn>1</mn></msub></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msqrt><mfrac><mrow><mn>2</mn><msub><mi>r</mi><mn>2</mn></msub></mrow><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>+</mo><msub><mi>r</mi><mn>2</mn></msub></mrow></mfrac></msqrt><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>v</mi><mn>2</mn></msub><mo>≡</mo><msub><mi>v</mi><mn>2</mn></msub><mo>−</mo><msub><mi>v</mi><msup><mn>2</mn><mo>′</mo></msup></msub><mo>=</mo><msqrt><mfrac><mrow><mi>G</mi><msub><mi>M</mi><mo>⊕</mo></msub></mrow><msub><mi>r</mi><mn>2</mn></msub></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><msqrt><mfrac><mrow><mn>2</mn><msub><mi>r</mi><mn>1</mn></msub></mrow><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>+</mo><msub><mi>r</mi><mn>2</mn></msub></mrow></mfrac></msqrt><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Gasaz eta suziriaz osaturiko sistemaren momentu lineal osoa <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math> puntuetako bakoitzean ez dela aldatzen erabil daiteke masa-aldaketak kalkulatzeko. <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> tartean suziriaren abiaduraren aldaketa <math display=\"inline\"><mrow><mi>d</mi><mi>v</mi></mrow></math> bada eta masarena <math display=\"inline\"><mrow><mi>d</mi><mi>m</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, tarte horretan igorritako gasen masa <math display=\"inline\"><mrow><mi>−</mi><mi>d</mi><mi>m</mi></mrow></math> da eta honela idazten da kontserbazio-legea: <math display=\"block\"><mrow><mi>m</mi><mi>v</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>d</mi><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>+</mo><mi>d</mi><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>d</mi><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> edota (bigarren ordenako <math display=\"inline\"><mrow><mi>d</mi><mi>m</mi><mi>d</mi><mi>v</mi></mrow></math> gaia arbuiatuz) <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>m</mi></mrow><mi>m</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mi>u</mi></mfrac><mi>.</mi></mrow></math> (Hauxe da masa aldakorraren higidura-ekuazioa. Ikus 1.91 problema.) Ekuazio hau <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math> puntuetako bakoitzaren inguruan integratuz, zera lortzen dugu: <math display=\"block\"><mrow><msup><mi>m</mi><mo>′</mo></msup><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><msub><mi>v</mi><mn>1</mn></msub><mi>/</mi><mi>u</mi></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><msup><mi>m</mi><mo>′</mo></msup><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><msub><mi>v</mi><mn>2</mn></msub><mi>/</mi><mi>u</mi></mrow></msup><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>u</mi></mrow></msup><mi>.</mi></mrow></math> Hortaz, gasen masa osoa hurrengoa da: <math display=\"block\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mo>−</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>u</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Orbita bornatu irekiak"
    },
    {
     "mota": "testua",
     "html": "<em>Bertranden teoremaren esangura hobeto ulertzeko, azter dezagun</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac><mo>+</mo><mfrac><mi>C</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>energia potentzial zentrala, ondoko baldintza betetzen denean:</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>σ</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>C</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo>&gt;</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(a) Marraztu energia potentzial eraginkorra. <br>\n(b) Zein da energia mekanikoak bete behar duen baldintza orbita bornatua izateko, indarra erakarlea denean\n(<math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math>)? <br>\n(c) Ebatzi orbitaren ekuazioa. <br>\n(d) Eztabaidatu noiz gertatzen diren orbita periodikoak. Egiaztatu perizentroa (eta apozentroa) prezesatzen\nari dela, oro har, orbita bornatuetan. <br>\n(e) Kalkulatu hurrenez hurrengo bi perizentroren arteko distantzia angeluarra. <br>\n(f) Kalkulatu prezesio-abiadura, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>σ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≪</mo><mn>1</mn></mrow></math> den kasuan.</em>"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Energia potentzial eraginkorra <math display=\"block\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac><mo>+</mo><mfrac><mi>C</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac><mo>+</mo><mfrac><mrow><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> denez, azterketa grafikoa egiteko nahikoa da (4.47) kasuan <math display=\"inline\"><msup><mi>L</mi><mn>2</mn></msup></math>-ren ordez <math display=\"inline\"><mrow><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> jartzea. Horrela, grafikoa indar newtondarretakoaren antzekoa da (ondoan dago <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>0.9</mn></mrow></math> parametroen kasuari dagokiona) eta bakarrik egongo dira orbita bornatuak <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bada eta ondokoa betetzen denean: <math display=\"block\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>≤</mo><mi>E</mi><mo>&lt;</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>E</mi><mn>0</mn></msub><mo>≡</mo><mi>−</mi><mfrac><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "media/irudiak/dcfac4358250bf5f.svg",
         "zabalera": 188
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Orbitaren ekuazioa (4.31) adierazpenak emandakoa izango da: <math display=\"block\"><mrow><mi>ϕ</mi><mo>−</mo><mi>δ</mi><mo>=</mo><mi>∓</mi><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><msqrt><mrow><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>u</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mi>∓</mi><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><msqrt><mrow><mfrac><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>k</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math> Azken hau erraz kalkulatzen da (4.33) integralean ondoko parametroak erabiliz: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>a</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>b</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>k</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>c</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"normal\">Δ</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi><mo>=</mo><msup><mi>b</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mi>E</mi><msub><mi>E</mi><mn>0</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> Horrela, <math display=\"block\"><mrow><mi>ε</mi><mo>≡</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mi>E</mi><msub><mi>E</mi><mn>0</mn></msub></mfrac></mrow></msqrt><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>p</mi><mo>≡</mo><mfrac><mrow><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>ω</mi><mi>r</mi></msub><mo>≡</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow></msqrt></mrow></math> definizioekin, orbitaren ekuazioa ondokora laburtzen da (ikus, gainera, 4.133 problema): <math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>k</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math> Indar newtondarren kasuko (4.58) konikoekiko diferentzia handiena <math display=\"inline\"><msub><mi>ω</mi><mi>r</mi></msub></math> agertzea da."
    },
    {
     "mota": "testua",
     "html": "Jakina, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub></mrow></math> kasuetan orbitak zirkularrak dira (<math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>) eta, ondorioz, itxiak eta periodikoak. Baina beste orbita bornatuetan <math display=\"inline\"><mi>r</mi></math>-ren balioak errepikatuko dira kosinuaren balioekin batera, hau da, <math display=\"inline\"><mi>ϕ</mi></math> angeluaren aldaketa ondoko baldintzak emandakoa denean: <math display=\"block\"><mrow><msub><mi>ω</mi><mi>r</mi></msub><mi mathvariant=\"normal\">Δ</mi><mi>ϕ</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>n</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> Distantziaren periodoak, beraz, <math display=\"block\"><mrow><msub><mi>T</mi><mi>r</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow><msub><mi>ω</mi><mi>r</mi></msub></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> dira eta norabidearenak <math display=\"block\"><mrow><msub><mi>T</mi><mi>ϕ</mi></msub><mo>=</mo><mn>2</mn><mi>π</mi><mi>l</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>l</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> Orbita periodikoa izango da bi periodoak elkarneurgarriak badira, hau da, distantziak eta angeluak periodo komun bat badaukate: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow><msub><mi>ω</mi><mi>r</mi></msub></mfrac><mo>=</mo><mn>2</mn><mi>π</mi><mi>l</mi></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi>l</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bikote oso egokiarekin. Ondorioz, orbita periodikoa izango da <math display=\"inline\"><msub><mi>ω</mi><mi>r</mi></msub></math> parametroa arrazionala izateko modukoa bada hastapen-baldintzei dagokien momentu angeluarra: <math display=\"block\"><mrow><msub><mi>ω</mi><mi>r</mi></msub><mo>=</mo><mfrac><mi>n</mi><mi>l</mi></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>n</mi><mo>,</mo><mi>l</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> <math display=\"inline\"><mrow><mi>n</mi><mi>/</mi><mi>l</mi></mrow></math> zatikia laburtezina bada, periodo batean posizio-bektoreak <math display=\"inline\"><mi>l</mi></math> bira egingo ditu eta <math display=\"inline\"><mi>n</mi></math> perizentro (eta <math display=\"inline\"><mi>n</mi></math> apozentro) egongo dira. Hiru adibide ikus daitezke 4.28 irudian."
    },
    {
     "mota": "testua",
     "html": "Zenbaki arrazionalak infinituak direnez, infinitu orbita periodiko daude; baina zenbaki irrazionalak askoz gehiago direnez, orbita bornatu irekiak askoz gehiago izango dira itxiak baino: azken hauek salbuespena izango dira<span class=\"j-oin\">[Ikuspuntu praktikotik, <math display=\"inline\"><mi>n</mi></math> eta <math display=\"inline\"><mi>l</mi></math> ez badira txikiak, oso orbita luzea marraztu beharko da periodo bat ikusteko. Gainera, beti existitzen dira <math display=\"inline\"><mrow><mi>n</mi><mi>/</mi><mi>l</mi></mrow></math>-tik nahi bezain hurbil dauden <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>r</mi></msub><mo>=</mo><mi>q</mi></mrow></math> balio irrazionalak eta horietako bati dagokion orbitaren zati bat marrazten bada ez da diferentziarik nabarituko (gainera, gogoratu marrazteko programak zenbaki arrazionalak erabiltzen dituela).]</span>."
    },
    {
     "mota": "testua",
     "html": "Ondoz ondoko bi perizentroren arteko distantzia angeluarra <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>r</mi></msub><mi mathvariant=\"normal\">Δ</mi><msub><mi>ϕ</mi><mo>−</mo></msub><mo>=</mo><mn>2</mn><mi>π</mi></mrow></math> baldintzak emandakoa izango da: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>ϕ</mi><mo>−</mo></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><msub><mi>ω</mi><mi>r</mi></msub></mfrac><mi>.</mi></mrow></math> Hortaz, bira batean egindako prezesioa honako hau dugu: <math display=\"block\"><mrow><mi>δ</mi><msub><mi>ϕ</mi><mo>−</mo></msub><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><msub><mi>ϕ</mi><mo>−</mo></msub><mo>−</mo><mn>2</mn><mi>π</mi><mo>=</mo><mn>2</mn><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mi>r</mi><mrow><mi>−</mi><mn>1</mn></mrow></msubsup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow></msqrt></mfrac><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>σ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≪</mo><mn>1</mn></mrow></math> kasuan, azken emaitzan Newtonen binomioa erabiltzen bada, honako hurbilketa hau lortzen dugu: <math display=\"block\"><mrow><mi>δ</mi><msub><mi>ϕ</mi><mo>−</mo></msub><mo>≈</mo><mi>−</mi><mi>π</mi><mi>σ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Orbita baten zati bat <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><mi>r</mi><mo>+</mo><mi>C</mi><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> energia potentzialean <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>0.1</mn></mrow></math> denean. Besteak\n  lortzen dira <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mi>−</mi><mn>3</mn><mi>/</mi><mn>4</mn><mo>,</mo><mspace width=\"0.167em\"></mspace><mo>−</mo><mn>16</mn><mi>/</mi><mn>25</mn><mo>,</mo><mspace width=\"0.167em\"></mspace><mn>3</mn></mrow></math> denean, hau da, <math display=\"inline\"><mrow><mi>n</mi><mi>/</mi><mi>l</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mspace width=\"0.167em\"></mspace><mn>3</mn><mi>/</mi><mn>5</mn><mo>,</mo><mspace width=\"0.167em\"></mspace><mn>2</mn></mrow></math> balioetarako.",
     "src": "media/irudiak/22672bc79f10f39e.svg",
     "zabalera": 360
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Potentzial-putzu angeluzuzena"
    },
    {
     "mota": "testua",
     "html": "<em>Ondoko energia potentzial zentrala erabiltzen da fisika nuklearrean:</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><msub><mi>V</mi><mn>0</mn></msub><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>r</mi><mo>&lt;</mo><mi>a</mi><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>r</mi><mo>&gt;</mo><mi>a</mi><mo>;</mo></mtd></mtr></mtable></mrow><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>Frogatu potentzial horretan <math display=\"inline\"><mi>E</mi></math> energiako partikula baten sakabanatzea, hurrengo errefrakzio-indize\nerlatiboko <math display=\"inline\"><mi>a</mi></math> erradioko esfera batek sortutako argiaren errefrakzioaren baliokidea dela:</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mfrac><msub><mi>V</mi><mn>0</mn></msub><mi>E</mi></mfrac></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>Egiaztatu sekzio eragile diferentziala ondokoa dela:</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></mfrac><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">cos</mi><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>n</mi><mi mathvariant=\"normal\">cos</mi><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>≤</mo><mi mathvariant=\"normal\">Φ</mi><mo>≤</mo><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>≡</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arccos </mtext><mspace width=\"0.333em\"></mspace></mrow><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi mathvariant=\"normal\">Φ</mi><mo>&gt;</mo><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">max</mi></msub><mi>.</mi></mtd></mtr></mtable></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>Zein da sakabanatze-sekzio osoa?</em>"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Energia potentziala etena denez, bulkada zentral bat pairatzen du partikulak, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>a</mi></mrow></math> muga zeharkatzean. Abiaduraren <math display=\"inline\"><mrow><msub><mi>v</mi><mi>ϕ</mi></msub><mo>=</mo><mi>r</mi><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> osagai azimutala ez da aldatuko, baina bai <math display=\"inline\"><mrow><msub><mi>v</mi><mi>r</mi></msub><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></mrow></math> osagai erradiala eta, ondorioz, abiadura eskalarra. Azken honen aldaketa erraz kalkulatzen da energia mekanikoaren kontserbazio-legea erabiliz: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><mo>−</mo><msub><mi>V</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math> Irudian ikusten denez, <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mfrac><msub><mi>v</mi><mi>ϕ</mi></msub><mi>v</mi></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>=</mo><msup><mfrac><msub><mi>v</mi><mi>ϕ</mi></msub><mi>v</mi></mfrac><mo>′</mo></msup></mrow></math> dugu eta, ondorioz, <math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>v</mi><mo>′</mo></msup><mi>v</mi></mfrac><mo>=</mo><msqrt><mfrac><mrow><mi>m</mi><msup><mi>v</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mi>E</mi><mo>+</mo><msub><mi>V</mi><mn>0</mn></msub></mrow><mi>E</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "media/irudiak/62257f2de8df9e3e.svg",
         "zabalera": 175
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Jotze-parametroaren eta sakabanatze-angeluaren arteko erlazioa, honela aurkitzen da, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mi>/</mi><mn>2</mn><mo>=</mo><mi>α</mi><mo>−</mo><mi>β</mi></mrow></math> dela kontuan hartuz: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>b</mi><mi>a</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></msqrt><mo>=</mo><mfrac><msqrt><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></msqrt><mi>a</mi></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>b</mi><mrow><mi>n</mi><mi>a</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></msqrt><mo>=</mo><mfrac><msqrt><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></msqrt><mrow><mi>n</mi><mi>a</mi></mrow></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msqrt><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mrow><mrow><mi>n</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>b</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>a</mi><mi>n</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>n</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></msqrt></mfrac><mi>.</mi></mtd></mtr></mtable></math> Hemen ikusten da <math display=\"inline\"><mi>b</mi></math> parametroa <math display=\"inline\"><mn>0</mn></math>-tik <math display=\"inline\"><mi>a</mi></math>-ra handitzean, <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> angelua doala <math display=\"inline\"><mn>0</mn></math>-tik <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>≡</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arccos </mtext><mspace width=\"0.333em\"></mspace></mrow><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></math> balio maximora."
    },
    {
     "mota": "testua",
     "html": "Sekzio eragile diferentziala kalkulatzean, <math display=\"inline\"><mi>b</mi></math> handitzean <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> handituz doala hartu behar da kontuan, (4.109) emaitzaren balio absolutua erabiltzeko: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>b</mi><mi>d</mi><mi>b</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></mfrac><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">cos</mi><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>n</mi><mi mathvariant=\"normal\">cos</mi><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sekzio osoa, <math display=\"inline\"><mrow><mi>π</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math> azalera geometrikoa da, jakina. Erraz egiazta daiteke hori, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></math> aldagai-aldaketaren bidez: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>σ</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><msubsup><mo>∫</mo><mn>0</mn><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">max</mi></msub></msubsup><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi><mi>d</mi><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>π</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi>I</mi><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>I</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≡</mo><msubsup><mo>∫</mo><mn>1</mn><mrow><mn>1</mn><mi>/</mi><mi>n</mi></mrow></msubsup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>u</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>n</mi><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mi>d</mi><mi>u</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><msup><mi>n</mi><mn>4</mn></msup><mo>−</mo><mn>2</mn><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>u</mi><mo>+</mo><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup><msup><mi>u</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>n</mi><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>1</mn><mrow><mn>1</mn><mi>/</mi><mi>n</mi></mrow></msubsup><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>σ</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>π</mi><msup><mi>a</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mtd></mtr></mtable></math>"
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Higidura-ekuazioak eta kontserbazio-printzipioak</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Satelite baten orbitaren erradioa atmosfera ukitu gabe izan dezakeen txikiena bada, zein da periodoa? <br>  <em>Oharra</em>: Zenbakizko emaitza lortzeko ez erabili taularik, buruz dakizkizun balioak baizik."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Bi gorputzen problemaren energia zinetikoa eta momentu angeluarra",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Gai honetan, honela definitu ditugu energia zinetikoa eta momentu angeluarra: <math display=\"block\"><mrow><mi>T</mi><mo>≡</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi mathvariant=\"bold-italic\">𝑳</mi><mo>≡</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Argi dago horiexek direla erabili behar diren definizioak eremu-zentral batean higitzen ari den partikula bakarraren kasuan. Baina bi gorputzen higidura erlatiboan <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> bektorea posizio erlatiboa da eta <math display=\"inline\"><mi>m</mi></math> konstantea masa laburbildua: zein da orduan goiko definizioen esanahi fisikoa masa-zentroaren sisteman? Eta zer da <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑷</mi><mo>=</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math> masa-zentroaren sisteman?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Dimentsio bakarreko higidura (I)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>m</mi></math> masako partikula bat <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>R</mi></mrow></math> koordenatutik askatzen da <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><mi>r</mi></mrow></math> potentzial newtondarrean. Kalkulatu indar-poloraino heltzeko behar duen denbora."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Dimentsio bakarreko higidura (II)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azter ezazu potentzial newtondar batean gertatzen den dimentsio bakarreko higidura. Kalkulatu <math display=\"inline\"><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> soluzioa. Froga ezazu energia mekanikoa negatiboa denean denbora finituan iristen dela nahitaez indar-poloraino."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Energia potentzial elastiko isotropoa (Newton, <em>Principia</em>)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili koordenatu kartesiarrak <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mspace width=\"0.167em\"></mspace><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> energia potentzialaren kasuan, <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math> denean (ikus 7.78 problema), orbitak aurkitzeko. Nolako legeak erabil daitezke kasu honetan Keplerren legeen ordez? (Simetria bat dago bi problema hauen artean: ikus, adibidez, [88].)  <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Iradokizuna</em>"
      },
      {
       "mota": "testua",
       "html": ": Ikus 7.5.2 ataleko Lissajousen irudiak eta hurrengo simulazioa:"
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
     "mota": "problema",
     "izena": "Energia potentzial elastiko isotropoa (II)",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili koordenatu polarrak 4.5 problemako orbiten forma geometrikoa berriro aurkitzeko. Zer aldatzen da <math display=\"inline\"><mrow><mi>k</mi><mo>&lt;</mo><mn>0</mn></mrow></math> bada?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Energia potentzialaren kalkulua (Newton, <em>Principia</em>)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Indar-eremu zentral baten eraginpean higitzen den partikula baten orbita zirkularra da eta <math display=\"inline\"><mi>O</mi></math> indar-poloa orbitan dago. Aurki ezazu orbitaren <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ekuazioa eta froga ezazu energia potentziala <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>r</mi><mn>4</mn></msup></mfrac></mrow></math> egiturakoa dela."
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
       "html": "Zeintzuk dira 4.7 problemako partikularen energia mekanikoa eta momentu angeluarra?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Indar-eremu zentral batean higitzen ari den partikula baten orbita zirkularra da. Egon daiteke indar-poloa orbitak ingurutatuko zirkulutik kanpo?"
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
       "html": "Izar batek planeta bat duela susmatzen da. Planeta ez da zuzenean ikusten, baina astronomoen neurketen arabera izarra <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>1</mn></mrow></math>  km/s-ko abiadura konstantez higitzen da zirkunferentzia batean <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>1</mn></mrow></math> urteko periodoarekin. Bestalde, izarraren masa <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>30</mn></msup></mrow></math> kg dela aurkitu dute. Kalkulatu planetaren <math display=\"inline\"><mi>m</mi></math> masa. <br>  <em>Iradokizuna</em>: Kalkuluaren azken pausoan geratzen den ekuazioan hurrenez hurreneko hurbilketak erabil daitezke soluzioa lortzeko."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Satelitearen paradoxa",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azter ezazu <math display=\"inline\"><mrow><mi>−</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></mrow></math> indar-eremu zentral erakarlea eta <math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><mi>γ</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math> marruskadura pairatzen dituen partikularen higidura. Aurkitu eta ebatzi momentu angeluarraren eboluzio-ekuazioa. Plano finko batean daude orbita bakoitzeko puntu guztiak? Zergatik? Hemendik aurrera, indar zentrala newtondarra izango da (<math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>k</mi><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>) eta marruskadura nahiko txikia, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>γ</mi></mrow></math> orbitarena periodoa baino askoz handiagoa izateko moduan. Kasu horretan orbita ia zirkularra izan daiteke. Zergatik? Kalkulatu nola aldatzen diren, gutxi gorabehera, horrelako orbita baten erradioa eta abiadura. Frogatu abiadura handituz doala, nahiz eta marruskadura egon. Nondik dator horretarako behar den energia?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zer aldatuko litzateke indar zentralen definizioan bakarrik eskatuko balitz indarraren aplikazio-lerroa puntu finko batetik pasatzeko, moduluan inolako baldintzarik ezarri gabe? Azaldu erantzuna adibide egoki batekin."
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
       "html": "Eztabaidatu orbita zirkularren existentzia eta egonkortasuna indar-eremu zentrala Yukawaren energia potentzialari dagokiona denean: <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>r</mi><mi>/</mi><mi>a</mi></mrow></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>,</mo><mi>a</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Nolakoa da indar-zentral baten energia potentziala, indar-poloan zentratutako"
      },
      {
       "mota": "testua",
       "html": "<em>orbita zirkularretan</em>"
      },
      {
       "mota": "testua",
       "html": "abiadura ez bada erradioaren menpekoa? Eta erradioaren menpekoa ez dena abiadura angeluarra bada? Eta momentu angeluarra ez bada erradioaren menpekoa?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi satelite berdin <math display=\"inline\"><mrow><mn>3</mn><msub><mi>R</mi><mo>⊕</mo></msub></mrow></math> eta <math display=\"inline\"><mrow><mn>4</mn><msub><mi>R</mi><mo>⊕</mo></msub></mrow></math> erradioetako<span class=\"j-oin\">[Gogoratu <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math> delakoa Lurraren erradioa dela. (Ikus 637 or.)]</span> orbita zirkularretan higitzen ari dira plano berean, <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math> luzerako hari arin batez loturik daudela. Aurkitu sateliteen periodoa eta harian dagoen tentsioa. <br>  <em>Oharra</em>: Sateliteen <math display=\"inline\"><mi>m</mi></math> masa, Lurraren <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math> erradioa eta <math display=\"inline\"><mi>g</mi></math> grabitazio-azelerazio estandarra dira datuak."
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
       "html": "Partikula puntual bat hurbiltzen ari da, oso distantzia handitik, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><msup><mi>r</mi><mn>4</mn></msup></mrow></math> energia potentzialaren indar-polora, <math display=\"inline\"><mi>b</mi></math> jotze-parametroarekin eta hurrengo abiadurarekin: <math display=\"block\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mn>8</mn><mi>k</mi></mrow><mrow><mi>m</mi><msup><mi>b</mi><mn>4</mn></msup></mrow></mfrac></msqrt><mi>.</mi></mrow></math> Marraztu energia potentzial eraginkorra eta orbitari dagokion energia-maila. Erabili informazio hori orbitaren zirriborroa marrazteko. Kalkulatu orbitaren ekuazioa."
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
       "html": "Erabili gai honetan ikasitakoa 2.4 problemako ibilbidearen forma geometrikoa aurkitzeko."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Testuliburu on batean ondoko irudia erabiltzen zen indar-eremu zentral baten menpeko orbita bornatu orokorraren forma geometrikoa azaltzeko (<math display=\"inline\"><msub><mi>r</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>r</mi><mn>2</mn></msub></math> perizentroaren eta apozentroaren distantziak dira). Zoritxarrez, orbita hori ezinezkoa da. Azaldu zergatik<span class=\"j-oin\">[José Luis Arias irakasle bikainak proposatu zigun problema hau 1970ean, bigarren mailako mekanikan. Urte askotan testuan agertu ondoren, 2004an edo zuzendu zen aipatutako liburuan irudi hori.]</span>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Orbita zirkularren egonkortasuna",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Perturbazio txiki orokorren kasuan frogatu nahi dugu 4.1.9 ataleko emaitzak problema honetan. Kontsideratu <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math> ekuazioko orbita zirkularra, <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><msub><mi>L</mi><mn>0</mn></msub></mrow></math> momentu angeluarra duena, eta <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> orbita hurbila, <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><msub><mi>L</mi><mn>0</mn></msub><mo>+</mo><mi>η</mi></mrow></math> momentu angeluarrekoa. Garatu bigarren orbitaren higidura erradialaren ekuazioa orbita zirkularraren inguruan eta gorde bakarrik <math display=\"inline\"><mi>ε</mi></math> eta <math display=\"inline\"><mi>η</mi></math> aldagaiekiko linealak diren gaiak. Aztertu geratzen den hurbilketa lineala eta ondorioztatu egonkortasun-baldintza (4.38) dela."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Absideen arteko angelua orbita ia zirkularretan",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Indar zentralen menpeko orbita zirkular egonkor batek perturbazio erradial <em>txiki</em> bat pairatzen badu, orbita berria ia zirkularra izango da eta eta oszilazio erradial txikien maiztasuna (4.43) emaitzakoa. Lehen hurbilketan, momentu angeluarra aldatu ez denez, abiadura angeluarra konstantetzat har dezakegu. Oszilazio erradial txikien periodoa <math display=\"inline\"><msub><mi>T</mi><mi>r</mi></msub></math> bada, ondoz ondoko absideen arteko angelua <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>ϕ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>T</mi><mi>r</mi></msub><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> da."
      },
      {
       "mota": "testua",
       "html": "(a) Zergatik? <br> (b) Frogatu honela idazten dela angelu hori: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>ϕ</mi><mo>=</mo><mi>π</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mo>+</mo><mfrac><mrow><msub><mi>r</mi><mn>0</mn></msub><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> (c) Aurkitu <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><msup><mi>r</mi><mi>n</mi></msup></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>n</mi><mo>&lt;</mo><mn>2</mn></mrow></math> dugunean geratzen den adierazpen erraza. <br> (d) Egiaztatu hurrengo hiru kasuetan (eszentrikotasuna txikia ez denean era betetzen diren) emaitza ezagunak berreskuratzen direla: (i) indar newtondar erakarlea, (ii) 4.6 problemako indar harmonikoa eta (iii) 4.7.5 problema ebatziko indarra. <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Oharra</em>"
      },
      {
       "mota": "testua",
       "html": ": 4.49 probleman aztertzen da ia zirkularrak ez diren orbita bornatuen kasua."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Orbita newtondar erlatibistak",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Partikula erlatibista bat <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><mi>r</mi></mrow></math> energia potentzial newtondarrean higitzen ari da. <br> (a) Froga ezazu poloarekiko <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒑</mi></mrow></math> momentu angeluar erlatibista higidura-konstantea dela. <br> (b) Idatzi orbita zirkularren higidura-ekuazioa eta frogatu <math display=\"inline\"><mrow><mi>v</mi><mi>L</mi></mrow></math> biderkadura, aurkitu behar duzun konstante baten berdina dela. (Abiadura eskalarra da <math display=\"inline\"><mi>v</mi></math>.)  <br> (c) Ondorioztatu, Keplerren probleman ez bezala, ez dela existitzen orbita zirkular bat <math display=\"inline\"><mrow><mi>L</mi><mo>&gt;</mo><mn>0</mn></mrow></math> balio bakoitzeko. <br> (d) Zer gertatzen da azken emaitzarekin limite galilearrean?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Dimentsio bakarreko problema baliokidea erlatibitate berezian",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azter dezagun partikula baten higidura erlatibista laua <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> energia potentzial zentralean. Froga ezazu momentu angeluarra <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>m</mi><mi>γ</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>γ</mi><mo>≡</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>,</mo></mrow></math> moduan idazten dela. Ondorioztatu hauxe dugula: <math display=\"block\"><mrow><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>L</mi><mi>α</mi></mrow><mrow><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><msub><mi>γ</mi><mi>r</mi></msub></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>γ</mi><mi>r</mi></msub><mo>≡</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mn>0</mn><mo>&lt;</mo><mi>α</mi><mo>≡</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>&lt;</mo><mn>1</mn><mi>.</mi></mrow></math> Erabili emaitza hau <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>m</mi><mi>γ</mi><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> energia mekaniko kontserbatuaren deribatuan, higidura erradialaren ekuazio erlatibista honako hau dela frogatzeko: <math display=\"block\"><mrow><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mfrac><mrow><mi>α</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>m</mi><msubsup><mi>γ</mi><mi>r</mi><mn>3</mn></msubsup></mrow></mfrac><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>α</mi><mn>2</mn></msup></mrow><mrow><msubsup><mi>γ</mi><mi>r</mi><mn>2</mn></msubsup><mi>r</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Orbita zirkular erlatibisten egonkortasuna",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egin 4.19 problemako azterketa 4.22 problemako kasuan, indar-poloan zentratutako orbita zirkular erlatibista batek bete behar duen baldintza aurkitzeko. Iruzkina egin emaitzari."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Energia potentzial homogeneoak eta orbita homotetikoak",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eman dezagun <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> energia potentzial zentrala <math display=\"inline\"><mi>n</mi></math> mailako funtzio homogeneoa dela, <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>α</mi><mi>n</mi></msup><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo>∀</mo><mi>α</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> orbita bat. Froga ezazu <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>α</mi><msub><mi>r</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> kurba homotetikoa ere orbita bat dela. Zein da bi orbitei dagozkien higidura-konstanteen arteko erlazioa? Eta bi orbiten periodoen artekoa, orbitak itxiak direnean? Erabili azken emaitza Keplerren hirugarren legea ondorioztatzeko eta energia potentzial elastiko isotropoan (hau da, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mspace width=\"0.167em\"></mspace><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> denean, <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math> konstantearekin) orbita guztiak isokronoak direla frogatzeko."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Energia nuluko orbitak",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zenbait kasutan energia mekaniko nuluko orbitak erraz kalkulatzen dira. Erabili <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><mrow><mi>u</mi><msqrt><mrow><mi>a</mi><msup><mi>u</mi><mi>n</mi></msup><mo>−</mo><mn>1</mn></mrow></msqrt></mrow></mfrac><mo>=</mo><mfrac><mn>2</mn><mi>n</mi></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arctan </mtext><mspace width=\"0.333em\"></mspace></mrow><msqrt><mrow><mi>a</mi><msup><mi>u</mi><mi>n</mi></msup><mo>−</mo><mn>1</mn></mrow></msqrt></mrow></math> integrala, <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>r</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msup></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> potentzial erakarleetan gertatzen diren energia nuluko orbiten ekuazioak kalkulatzeko. Bornatuak dira? Periodikoak dira? Zirriborratu orbita batzuk. Zer gertatzen da <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> kasuan?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko bi masa berdin malguki baten bidez lotuta daude eta <math display=\"inline\"><mi>R</mi></math> erradioko orbita zirkular berean ari dira higitzen. Malgukiaren berezko luzera <math display=\"inline\"><mi>L</mi></math> da eta konstante berreskuratzailea <math display=\"inline\"><mi>k</mi></math>. Ez dago grabitaterik. Zein da higiduraren periodoa? Era <math display=\"inline\"><mi>R</mi></math> erradioaren balio minimoa? Egonkorra al da orbita?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi masa berdin malguki baten bidez lotuta daude, mahai horizontal leun baten gainean. Hasieran geldi daude <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>±</mi><mi>a</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntuetan eta malgukia deformatu gabe. Beste masa berdin bat hurbiltzen zaie <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatzean barrena eta <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean ezkerreko masa jotzen du. Talka elastikoa da eta talka ondoren ere hiru partikulak <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatzean geratzen dira. Kalkulatu hiru partikulen higidura <math display=\"inline\"><mrow><mi>t</mi><mo>≥</mo><mn>0</mn></mrow></math> tartean."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>m</mi></math> masako partikula bat <math display=\"inline\"><mi>L</mi></math> momentu angeluarraz higitzen da <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>/</mi><msup><mi>r</mi><mn>3</mn></msup></mrow></math> indar zentralean. <math display=\"inline\"><mi>k</mi></math> konstantea positiboa zein negatiboa izan daiteke. Integratu Bineten formula, orbitaren ekuazioa lortzeko. Nolako baldintzak bete behar dira partikula distantzia infinitura joan ahal izateko eta zeintzuk higidura bornatua izateko? Orbita zirkularrik al dago? Noiz? Egin berriro aurreko azterketa potentzial eraginkorra erabiliz."
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
       "html": "Indar-eremu zentral batean higitzen den partikula baten orbita zirkularraren zentroa ez dago indar-poloan. Nolakoa izan behar du indar-legeak horretarako?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aztertu <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>r</mi><mn>3</mn></msup></mfrac><mo>−</mo><mfrac><mi>ε</mi><msup><mi>r</mi><mn>4</mn></msup></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> energia potentzial zentralean higitzen diren partikulen energia mekaniko nuluko orbitak. Frogatu itxiak direla eta marraztu batzuk."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Indar zentral batean higitzen ari den partikula bat, bi perizentrotatik pasa daiteke periodo batean? Eta bi perizentrotik eta apozentro batetik?"
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
       "html": "<math display=\"inline\"><mi>m</mi></math> masako partikula puntuala <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msup><mi>α</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><msup><mi>r</mi><mn>4</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> energia potentzial zentralean higitzen da. (Adierazpen horretan <math display=\"inline\"><mi>k</mi></math>, <math display=\"inline\"><mi>α</mi></math> eta <math display=\"inline\"><mi>a</mi></math> konstanteak positiboak dira.) Partikula <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntuan dagoenean, bere abiadura hauxe da: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi><msup><mi>α</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac></msqrt><mover><mi mathvariant=\"bold-italic\">𝝓</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math> Aurkitu orbitaren ekuazioa eta egiaztatu indar-polora doala partikula. Zenbat denbora behar du haraino iristeko? Erabili programaren bat orbita <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mn>5</mn></mrow></math> kasuetan marrazteko."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Energia potentzialaren kalkulua (Newton, <em>Principia</em>)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> potentzial zentral batean higitzen den partikula baten posizio-bektorearen eta abiaduraren arteko angelua konstantea da: <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>α</mi><mo>&lt;</mo><mi>π</mi></mrow></math>. Erabili kontserbazio-printzipioak hauxe egiteko: <br> (a) Froga ezazu posizio-bektorearen eta abiaduraren moduluen <math display=\"inline\"><mrow><mi>r</mi><mi>v</mi></mrow></math> biderkadura konstantea dela. <br> (b) Idatzi energia osoa <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> potentzialaren funtzioan eta erabili azken emaitza <math display=\"inline\"><mi>v</mi></math> abiadura ezabatzeko."
      },
      {
       "mota": "testua",
       "html": "(c) Erabili aurreko emaitza <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> energia potentziala aurkitzeko. <br> (d) Kalkulatu higiduraren <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioak. <br> (e) Noiz iristen da partikula indar-polora <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean hastapen-baldintzak <math display=\"inline\"><mrow><msub><mi>r</mi><mn>0</mn></msub><mo>=</mo><mn>1000</mn></mrow></math> m, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>=</mo><mn>10</mn></mrow></math> m s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> eta <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>135</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> badira?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Orbitaren ekuazioa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu orbitaren ekuazioa 4.33 problemaren kasuan."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Laplace, Runge eta Lenzen bektorea",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Partikula puntual bat <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><mi>r</mi></mrow></math> eremu newtondarrean ari da higitzen. Froga ezazu honako bektore hau higidura-konstantea dela: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mo>−</mo><mi>m</mi><mi>k</mi><mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mi>r</mi></mfrac><mi>.</mi></mrow></math> Kalkula ezazu <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> bi modu desberdinetara (biderketa eskalarraren definizioa erabiliz eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>-ren definizioaz baliatuz), orbitaren ekuazioa berreskuratzeko. Zenbat higidura-konstante berri lortzen dira bektore honen bidez?"
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
       "html": "Partikula puntual bat indar-eremu newtondar batean higitzen da. Egiaztatu <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>≡</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mfrac><mi>k</mi><mi>L</mi></mfrac><mover><mi mathvariant=\"bold-italic\">𝝓</mi><mo accent=\"true\">̂</mo></mover></mrow></math> <strong>Hamiltonen bektorea</strong> eta <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝜺</mi><mo>≡</mo><mfrac><mi>L</mi><mi>k</mi></mfrac><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mover><mi mathvariant=\"bold-italic\">𝝓</mi><mo accent=\"true\">̂</mo></mover></mrow></math> <strong>eszentrikotasun-bektorea</strong> higidura-konstanteak direla. Ondorioztatu <strong>hodografoa</strong> —hau da, une guztietako abiadura bektoreak puntu berean jarrita euren puntek marraztutako leku geometrikoa— zirkunferentzia bat dela. Kalkulatu <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝝓</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝜺</mi></mrow></math> biderkadura orbitaren ekuazioa berreskuratzeko. Aurkitu bektore hauen eta 4.35 problemako Laplace, Runge eta Lenzen bektorearen arteko erlazioa."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>m</mi></math> masako satelite baten orbita zirkularraren erradioa <math display=\"inline\"><mrow><mn>2</mn><msub><mi>R</mi><mo>⊕</mo></msub></mrow></math> da. Aldiune batean, <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>a</mi><mi>m</mi><mi>g</mi></mrow></math> moduluko konstanteko indarra aplikatzen hasten da. <math display=\"inline\"><mi>a</mi></math> konstantea da eta <math display=\"inline\"><mi>g</mi></math> grabitate-eremuaren intentsitatea Lurraren azalean. Indarraren norabidea eta noranzkoa Lurraren zentroranzkoak dira beti. Satelitearen masa aldaketa arbuiagarria bada, zein da <math display=\"inline\"><mi>a</mi></math> konstantearen balioa, orbita berria Lurraren azalarekiko tangentea bada? Zein da satelitearen abiadura azken aldiune honetan?"
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
       "html": "Bi sateliteren masak <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><mi>m</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>λ</mi><mi>m</mi></mrow></math> dira. Biak higitzen ari dira <math display=\"inline\"><mi>R</mi></math> erradioko orbita zirkular berean, baina aurkako noranzkoetan. Elkarrekin topo egitean loturik geratzen dira. Nolakoa izan beharko du <math display=\"inline\"><mi>R</mi></math> erradioak Lurraren gainean eror ez daitezen? Zer gertatzen da <math display=\"inline\"><mrow><mi>λ</mi><mo>→</mo><mn>1</mn><mi>/</mi><mi>λ</mi></mrow></math> egiten bada? Eta <math display=\"inline\"><mrow><mi>λ</mi><mo>→</mo><mn>1</mn></mrow></math> limitean? Eta <math display=\"inline\"><mrow><mi>λ</mi><mo>→</mo><mn>0</mn></mrow></math> limitean? <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Iradokizuna</em>"
      },
      {
       "mota": "testua",
       "html": ": Emaitzan <math display=\"inline\"><mi>λ</mi></math>, <math display=\"inline\"><mi>R</mi></math> eta <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math> soilik agertzen dira."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>m</mi></math> masako partikula <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> luzera propioko malguki baten bidez dago loturik puntu finko batetik, mahai horizontal leun baten gainean. Partikularen abiadura hasieran irudian erakusten dena da eta malgukiaren luzera maximoa <math display=\"inline\"><mrow><mn>2</mn><msub><mi>l</mi><mn>0</mn></msub></mrow></math>. Aurki ezazu malgukiaren <math display=\"inline\"><mi>k</mi></math> konstante berreskuratzailea <math display=\"inline\"><mi>m</mi></math>, <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> datuen funtzioan. Zirriborratu masaren orbita."
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
       "html": "<math display=\"inline\"><mi>m</mi></math> masako satelite baten abiadura bere orbita zirkularrean <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> da. Bat-batean <math display=\"inline\"><mrow><mi>λ</mi><mi>m</mi></mrow></math> masa jaurtitzen du atzerantz <math display=\"inline\"><mrow><mi>−</mi><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>0</mn></msub></mrow></math> abiadura erlatiboarekin. Kalkulatu orbita berriaren forma, eszentrikotasuna, apogeoa eta perigeoa <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>λ</mi><mo>&lt;</mo><mn>1</mn></mrow></math> balioetarako. Zein da satelitearen garaiera bere posizio angeluarra, orbita berria hasi zen puntutik neurtua, <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> denean?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>m</mi><mi>/</mi><msup><mi>r</mi><mn>3</mn></msup></mrow></math> moduluko indar zentralak <math display=\"inline\"><mi>O</mi></math> puntu finkorantz erakartzen du <math display=\"inline\"><mi>m</mi></math> masa. Irudiko posizioan partikularen abiadura <math display=\"inline\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>=</mo><msqrt><mi>k</mi></msqrt><mi>/</mi><mi>a</mi></mrow></math> da. Erabili kontserbazio-printzipioak partikularen ibilbidea kalkulatzeko. Aurkitu partikularen posizioa denboraren menpean."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudikoetakoren bat izan daiteke indar-eremu zentral batean higitzen den partikula baten orbita?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Partikula bat orbita zirkular batean higitzen da indar-eremu zentral batean. Aldakorra izan daiteke indar-poloaren inguruko abiadura angeluarra?"
      },
      {
       "mota": "irudia",
       "oina": "4.44 problemaren orbitak.",
       "src": "media/irudiak/ff876af02d49a8cc.svg",
       "zabalera": 321
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Partikula puntuala indar-eremu zentral batean higitzen bada, 4.29 irudiko orbiten arteko batzuk ezinezkoak: zeintzuk? Azaldu erantzuna. <br>  <em>Oharra</em>: Kasu bakoitzean indar-poloa puntu lodi baten bidez adierazi da."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>m</mi></math> masako partikula puntual bat <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> potentzial harmoniko isotropoan higitzen ari da <math display=\"inline\"><mi>a</mi></math> erradioko zirkunferentzia batean barrena. Kalkulatu partikularen <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiadura. Une batean, abiadurarekin <math display=\"inline\"><mi>α</mi></math> balioko angelua osatzen duen <math display=\"inline\"><mrow><mi>m</mi><msub><mi>v</mi><mn>0</mn></msub></mrow></math> bulkada bat aplikatzen zaio. Froga ezazu indar-polotik neurturiko distantzia maximoa eta minimoa hauexek direla higidura berrian: <math display=\"block\"><mrow><msub><mi>r</mi><mo>±</mo></msub><mo>=</mo><mfrac><mrow><msqrt><mrow><mn>5</mn><mo>+</mo><mn>4</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></msqrt><mo>±</mo><mn>1</mn></mrow><mn>2</mn></mfrac><mi>a</mi><mi>.</mi></mrow></math> Zeintzuk dira abiadurak distantzia horietara? Azaldu ikuspuntu fisikotik <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>π</mi></mrow></math> limiteetan gertatzen dena."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>m</mi></math> masako partikula bat plano horizontal leun batean higitzen da, planoko <math display=\"inline\"><mi>O</mi></math> puntu finkorantz erakartzen duen indar baten eraginpean. Indarraren modulua <math display=\"inline\"><mrow><mi>k</mi><mi>r</mi></mrow></math> da, <math display=\"inline\"><mi>O</mi></math>-tik neurtutako distantzia <math display=\"inline\"><mi>r</mi></math> denean. Partikula <math display=\"inline\"><mi>P</mi></math> puntuan dagoenean, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>O</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>2</mn><mi>a</mi></mrow></math> da eta abiadura <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑶</mi><mi mathvariant=\"bold-italic\">𝑷</mi></mrow></math> bektorearekiko perpendikularra eta <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>a</mi><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> modulukoa. Aurkitu partikularen eta <math display=\"inline\"><mi>O</mi></math> puntuaren arteko distantzia minimoa orbitan barrena. Mota honetako indar-eremuen menpeko higidurari buruz ikusitakoa erabiliz, kalkulatu orbitaren eszentrikotasuna."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko masa berdinak hagatxo arin leunean barrena higi daitezke, malguki baten bidez loturik daudela. Sistema hutsean dago, grabitaziorik gabe. Malgukiaren konstante berreskuratzailea <math display=\"inline\"><mi>k</mi></math> da eta luzera propioa <math display=\"inline\"><mi>L</mi></math>. Irudian erakusten den unean malgukia deformatu gabe dago. Higiduran malgukiak duen luzera maximoa <math display=\"inline\"><mrow><mn>5</mn><mi>L</mi></mrow></math> bada, zeintzuk dira <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> eta partikulen abiadura minimoak? Zirriborratu masen orbitak."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Partikula bat indar-eremu zentral (ez-newtondar) batean higitzen ari da, orbita zirkular batean barrena. Egon daiteke indar-poloa orbitak ingurutatuko zirkulutik kanpo?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Absideen arteko tartea eta angelua",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>m</mi></math> masako partikula orbita bornatu batean higitzen ari da <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> energia potentzial zentralean. Partikularen energia mekanikoa <math display=\"inline\"><mi>E</mi></math> da, momentu angeluarra <math display=\"inline\"><mrow><mi>L</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, apozentroen distantzia <math display=\"inline\"><mrow><msub><mi>r</mi><mo>+</mo></msub><mo>=</mo><mn>1</mn><mi>/</mi><msub><mi>u</mi><mn>1</mn></msub></mrow></math> eta perizentroena <math display=\"inline\"><mrow><msub><mi>r</mi><mo>−</mo></msub><mo>=</mo><mn>1</mn><mi>/</mi><msub><mi>u</mi><mn>2</mn></msub></mrow></math>. Egiaztatu <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> dugula, honako definizio hau egiten bada: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><msup><mi>u</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Frogatu ondoz ondoko bi perizentroren (edo bi apozentroren) arteko denbora-tartea eta distantzia angeluarra honako hauek direla: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><mn>2</mn><mfrac><mi>m</mi><mi>L</mi></mfrac><msubsup><mo>∫</mo><msub><mi>u</mi><mn>1</mn></msub><msub><mi>u</mi><mn>2</mn></msub></msubsup><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><mrow><msup><mi>u</mi><mn>2</mn></msup><msqrt><mrow><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi mathvariant=\"normal\">Δ</mi><mi>ϕ</mi><mo>=</mo><mn>2</mn><msubsup><mo>∫</mo><msub><mi>u</mi><mn>1</mn></msub><msub><mi>u</mi><mn>2</mn></msub></msubsup><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><msqrt><mrow><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<em>Oharra</em>"
      },
      {
       "mota": "testua",
       "html": ": Sakonago aztertzen da angelu hau C eranskinean."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Esfera homogeneoaren eremu grabitatorioa",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Galaxia esferikoen eredu sinplifikatu bat egiteko, azter dezagun <math display=\"inline\"><mi>a</mi></math> erradioko eta <math display=\"inline\"><mi>M</mi></math> masako esfera homogeneo batek sortutako eremu grabitatorioa. Egiaztatu eremu horretan, oztoporik gabe higitzen den <math display=\"inline\"><mi>m</mi></math> masako partikula batek pairatutako indar erakarlearen osagai erradiala honako hau dela: <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>k</mi><mi>r</mi><mi>/</mi><msup><mi>a</mi><mn>3</mn></msup><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>r</mi><mo>≤</mo><mi>a</mi><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>k</mi><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>r</mi><mo>≥</mo><mi>a</mi><mo>;</mo></mtd></mtr></mtable></mrow><mtext mathvariant=\"normal\">  </mtext><mi>k</mi><mo>≡</mo><mi>G</mi><mi>M</mi><mi>m</mi><mi>.</mi></mrow></math> Kontsidera dezagun <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msqrt><mrow><mi>m</mi><mi>k</mi><mi>a</mi></mrow></msqrt></mrow></math> momentu angeluarraz higitzen ari den partikula bat. <br> (a) Egiaztatu energia mekanikoa <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><mn>2</mn><mi>a</mi></mrow></math> denean orbita periodikoa dela. Marraztu orbita eta kalkulatu periodoa. Zenbat periastro daude orbitan? Zenbat bira egiten ditu periodo batean? <br> (b) Aurki dezakezu bestelako orbita periodikorik? <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Iradokizuna</em>"
      },
      {
       "mota": "testua",
       "html": ": Erabili 4.49 problema eta <math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>v</mi><mn>1</mn></msub><msub><mi>v</mi><mn>2</mn></msub></msubsup><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><msqrt><mrow><mi>−</mi><mn>4</mn><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>7</mn><mn>12</mn></mfrac><mi>π</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msubsup><mo>∫</mo><msub><mi>v</mi><mn>1</mn></msub><msub><mi>v</mi><mn>2</mn></msub></msubsup><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><msup><mi>v</mi><mn>2</mn></msup><msqrt><mrow><mi>−</mi><mn>4</mn><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><msqrt><mn>3</mn></msqrt><mo>+</mo><mn>3</mn><mi>π</mi></mrow><mn>8</mn></mfrac></mrow></math> integralak, non hauxe dugun: <math display=\"block\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>≡</mo><mn>4</mn><mo>−</mo><mn>2</mn><msqrt><mn>3</mn></msqrt><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>v</mi><mn>2</mn></msub><mo>≡</mo><mn>1</mn><mo>+</mo><msqrt><mn>3</mn></msqrt><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>4</mn><msup><mi>v</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup><mo>−</mo><mn>12</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>v</mi><mo>≥</mo><mn>1</mn><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>8</mn><mi>u</mi><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>v</mi><mo>≤</mo><mn>1</mn><mi>.</mi></mtd></mtr></mtable></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Potentzial isokronoa",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Galaxia esferiko baten masa-dentsitatea ia uniformea bada zentroaren inguruan eta zerora badoa distantzia handira, eredu erraztu bat egin daiteke ondoko potentzial grabitatorioaz<span class=\"j-oin\">[Gogoratu <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> potentzial grabitatorioan dagoen <math display=\"inline\"><mi>m</mi></math> masako partikularen energia potentziala <math display=\"inline\"><mrow><mi>m</mi><mi mathvariant=\"normal\">Φ</mi></mrow></math> dela.]</span>  baliatuz: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><mrow><mi>a</mi><mo>+</mo><msqrt><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mo>,</mo></mrow></math> non <math display=\"inline\"><mi>M</mi></math> galaxiaren masa den eta <math display=\"inline\"><mi>a</mi></math> distantzia-eskala bat. Kalkulatu orbita bornatuen higidura erradialaren periodoa —hau da, ondoz ondoko bi periastroren (edo bi apoastroren) arteko denbora-tartea— energia mekanikoaren funtzioan kalkulatzeko. (Ikus 4.96 problema.) Egiaztatu ez dela momentu angeluarraren menpekoa: hortik dator izena. Zein da periastroen prezesioa? <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Iradokizuna</em>"
      },
      {
       "mota": "testua",
       "html": ": Erabili ekuazio koadratikoen propietateak, <math display=\"inline\"><mrow><mi>s</mi><mo>≡</mo><mn>1</mn><mo>+</mo><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><mi>/</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> aldagaia eta ondoko integralak (<math display=\"inline\"><mrow><msub><mi>s</mi><mn>2</mn></msub><mo>&gt;</mo><msub><mi>s</mi><mn>1</mn></msub><mo>&gt;</mo><mn>2</mn></mrow></math>): <math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>s</mi><mn>1</mn></msub><msub><mi>s</mi><mn>2</mn></msub></msubsup><mfrac><mrow><mi>s</mi><mo>−</mo><mn>1</mn></mrow><msqrt><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>s</mi><mn>2</mn></msub><mo>−</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>s</mi><mo>−</mo><msub><mi>s</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mfrac><mi>d</mi><mi>s</mi><mo>=</mo><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>s</mi><mn>1</mn></msub><mo>+</mo><msub><mi>s</mi><mn>2</mn></msub></mrow><mn>2</mn></mfrac><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>s</mi><mn>1</mn></msub><msub><mi>s</mi><mn>2</mn></msub></msubsup><mfrac><mrow><mi>s</mi><mo>−</mo><mn>1</mn></mrow><mrow><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>s</mi><mn>2</mn></msub><mo>−</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>s</mi><mo>−</mo><msub><mi>s</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow></mfrac><mi>d</mi><mi>s</mi><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msqrt><mrow><mn>4</mn><mo>−</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>s</mi><mn>1</mn></msub><mo>+</mo><msub><mi>s</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>s</mi><mn>1</mn></msub><msub><mi>s</mi><mn>2</mn></msub></mrow></msqrt></mfrac><mo>+</mo><mfrac><mn>1</mn><msqrt><mrow><msub><mi>s</mi><mn>1</mn></msub><msub><mi>s</mi><mn>2</mn></msub></mrow></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>m</mi></math> masako partikula bat ondoko indar-eremu zentralean higitzen da: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mi>λ</mi><mrow><mn>2</mn><mi>r</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>,</mo><mi>λ</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Une batean, indar-poloaren eta partikularen arteko distantzia <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>a</mi></mrow></math> denean, partikularen abiadura posizio-bektorearekiko perpendikularra da eta <math display=\"inline\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mi>k</mi><mi>λ</mi></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac></msqrt></mrow></math> modulukoa. Idatzi eta ebatzi orbitaren ekuazioa. Zeintzuk dira indar-polotik neurtutako distantzia maximoa eta minimoa? Erabili programaren bat orbita marrazteko. Zer aldatuko litzateke <math display=\"inline\"><mrow><mi>k</mi><mo>,</mo><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> balira?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Mahai leun batean dauden bi bloke malguki baten bidez loturik daude eta barra horizontal leun batean barrena higi daitezke. Une batean irudian erakusten den konfigurazioan daude, masa-zentroaren sisteman. Higiduran blokeen arteko distantzia maximoa <math display=\"inline\"><mrow><mn>2</mn><mi>L</mi></mrow></math> da. Nola idazten dira <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math> abiadurak <math display=\"inline\"><mi>k</mi></math>, <math display=\"inline\"><mi>L</mi></math> eta <math display=\"inline\"><mi>M</mi></math> parametroen funtzioan? <br>  <em>Oharra</em>: Malgukiaren luzera propioa <math display=\"inline\"><mi>L</mi></math> da, bere konstante berreskuratzailea <math display=\"inline\"><mi>k</mi></math>, blokeen masak irudikoak, eta malgukiarena eta barrarena arbuiagarriak."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "(Riccati, 1757)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Indar-eremu zentral batean higitzen den partikula baten abiadura eskalarra indar-polotik neurtutako distantziarekiko alderantzizko proportzionala da: <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>a</mi><mi>/</mi><mi>r</mi></mrow></math>. Erabili <math display=\"inline\"><mi>E</mi></math> energia mekanikoaren kontserbazioa eta <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>r</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> dela <math display=\"inline\"><mi>E</mi></math> eta <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aurkitzeko. Kalkulatu orbitaren ekuazioa, momentu angeluarraren funtzioan, eta zirriborratu orbita."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Orbita newtondarrak</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eguzkiaren eta kometa baten arteko distantziarik laburrena Lurraren orbitaren erradioaren erdia da, eta aldiune horretan Lurraren abiadura kometarenaren erdia da. Zeintzuk izango dira kometaren posizioa, abiadura eta norabidea, Lurraren orbita zeharkatzean? Nolakoa izango da kometaren orbita? Zuzena al da irudia? <br>  <em>Oharra</em>: Arbuia ezazu Lurraren orbitaren eszentrikotasuna."
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
       "html": "Kometa baten orbita parabolikoa Lurraren orbitaren planoan dago eta bere perihelioaren distantzia <math display=\"inline\"><mi>h</mi></math> da. Froga ezazu Lurraren orbitaren barruan ematen duen denbora honako hau dela: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><mfrac><msqrt><mn>2</mn></msqrt><mrow><mn>3</mn><mi>π</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mn>2</mn><mi>h</mi></mrow><mi>R</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mi>h</mi><mi>R</mi></mfrac></mrow></msqrt><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> urte</mtext></mrow><mi>.</mi></mrow></math> Zein da <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math>-ren baliorik handiena? Balio maximo hori gertatzen denean, zein da kometaren abiadura eskalarra Lurraren orbita zeharkatzean? Eta <math display=\"inline\"><mi>h</mi></math>-ren beste balioekin? <br>  <em>Oharra</em>: Ondoko integraletako bat erabil daiteke: <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>r</mi><mi>d</mi><mi>r</mi></mrow><msqrt><mrow><mi>r</mi><mo>−</mo><mi>h</mi></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mn>2</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mrow><mi>r</mi><mo>−</mo><mi>h</mi></mrow></msqrt><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>ϕ</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>ϕ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>ϕ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>3</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>ϕ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Meteorito bat <math display=\"inline\"><mrow><msub><mi>v</mi><mi>∞</mi></msub><mo>=</mo><msqrt><mrow><mi>g</mi><msub><mi>R</mi><mo>⊕</mo></msub></mrow></msqrt></mrow></math> abiaduraz hurbiltzen da Lurrerantz oso distantzia handi batetik, Lurreko zentrotik <math display=\"inline\"><mi>b</mi></math> distantziara dagoen lerro zuzen batean zehar. Nolakoa izan behar du <math display=\"inline\"><mi>b</mi></math> balioak orbita Lurraren gainazalarekiko tangentea izateko? Zein da orbitaren eszentrikotasuna? Marraztu orbita eta kalkulatu non ukitzen duen Lurra. Zein da sakabanatze-angelua? Zeintzuk dira abiadura eskalarra eta jotze-parametroa amaieran, berriro distantzia handira dagoenean? Zein da Lurrak kometaren gainean egindako lan osoa? Eta bulkada osoaren modulua?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "4.57 problema Lurraren erreferentzia-sistema erabili da. Zer aldatzen da Eguzkiaren sisteman?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eman dezagun <math display=\"inline\"><mi>m</mi></math> masako partikula bat <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><mi>r</mi></mrow></math> potentzial newtondarrean higitzen dela. Froga ezazu bere abiadura orbita eliptiko batean honako hau dela: <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mfrac><mi>k</mi><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>r</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>.</mi></mrow></math> Balia zaitez emaitza honetaz abiadura maximoaren eta minimoaren zatidura adierazteko orbitaren eszentrikotasunaren menpean. Zeintzuk dira orbita zirkularrei, parabolikoei eta hiperbolikoei dagozkien adierazpenak? Erabili azken hauek partikularen abiadura infinituan kalkulatzeko, orbita paraboliko eta hiperbolikoen kasuan."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aldiune batean irudiko satelitearen garaiera (Lurraren gainazaletik neurtua) <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math> da eta bere abiadura <math display=\"block\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mi>G</mi><msub><mi>M</mi><mo>⊕</mo></msub></mrow><mrow><mn>2</mn><msub><mi>R</mi><mo>⊕</mo></msub></mrow></mfrac></msqrt><mi>.</mi></mrow></math> Abiadura eta bertikalaren arteko angelua <math display=\"inline\"><mi>α</mi></math> da. <br> (a) Nolakoa da orbita <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> bada? <br> (b) Nola aukeratu behar da <math display=\"inline\"><mi>α</mi></math> angelua satelitearen apogeoa ahalik eta handiena izateko (Lurraren gainean erori gabe, noski)?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Satelite artifizial bat <math display=\"inline\"><mrow><mn>2</mn><msub><mi>R</mi><mo>⊕</mo></msub></mrow></math> erradioko orbita zirkular egonkorrean higitzen da. Aldiune batean norabide erradialean bulkada bat ematen dion suziri bat pizten da. Ondorioz, satelitearen orbita berria parabolikoa da. Kalkulatu suziriak emandako abiadura erradiala eta orbita parabolikoaren eta Lurraren arteko distantziarik txikiena."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izar baten inguruko orbita zirkularrean higitzen den planeta baten energia, momentu angeluarra eta abiadura <math display=\"inline\"><msub><mi>E</mi><mn>0</mn></msub></math>, <math display=\"inline\"><msub><mi>L</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> dira, hurrenez hurren. Kometa batekin topo egitean orbita elipse bihurtzen da, periastroa aldatu gabe, baina apoastro berria bost aldiz handiagoa da. Kalkulatu orbita berrian planetak dituen energia, momentu angeluarra, eta periastroko eta apoastroko abiadurak. Marraztu planetaren bi orbitak irudi berean."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko satelitearen orbita parabolikoa da eta bere perigeoa <math display=\"inline\"><mi>P</mi></math> puntuan dago. <math display=\"inline\"><msup><mi>P</mi><mo>′</mo></msup></math> puntura iristean, motorrak pizten dira eta denbora-tarte arbuiagarri batean satelitearen abiaduraren noranzkoa alderantzikatzen da eta bere modulua erdira murrizten. <br> (a) Kalkulatu <math display=\"inline\"><mi>v</mi></math> eta <math display=\"inline\"><msup><mi>v</mi><mo>′</mo></msup></math> abiadurak, <math display=\"inline\"><mrow><mi>O</mi><msup><mi>P</mi><mo>′</mo></msup></mrow></math> distantzia eta <math display=\"inline\"><mi>α</mi></math> angelua. <br> (b) Begi bistan dago orbita berria ez dela parabolikoa izango; kalkulurik egin gabe: nolako orbita izango da halabeharrez? <br> (c) Lurraren gainean eroriko al da satelitea?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "«Irudiko orbita newtondar guztien ardatz nagusiak berdinak direnez, energia mekanikoak ere berdinak dituk» dio Aitorrek. «Bai zera! Orbita zirkularraren energia, minimoa duk» erantzuten dio Mikelek. Zer uste duzu zuk?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Planeta baten orbitaren ardatzerdi nagusia <math display=\"inline\"><mi>a</mi></math> da eta periodoa <math display=\"inline\"><mi>T</mi></math>. Froga ezazu perihelioan eta afelioan dituen abiaduren biderkadura <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>a</mi></mrow><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></math> dela."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Planeta bat <math display=\"inline\"><mi>M</mi></math> masako izar baten inguruan higitzen da orbita zirkular batean. Izarra lehertzen denean kanpoko geruza jaurtitzen du oso abiadura handiarekin, masa-galera denbora-tarte arbuiagarri batean gertatzeko moduan. Geratzen den izarrak duen <math display=\"inline\"><msup><mi>M</mi><mo>′</mo></msup></math> masa planetarena baino askoz handiagoa da. Leherketan planetak pairatutako indarra arbuiatzen bada, zein da planetaren orbitaren eszentrikotasun berria? Zein da bete behar den baldintza planeta izarretik ihes egiteko?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lehen satelite artifiziala, Sputnik deitzen zena, 1957an jaurti zen. Perigeoan haren garaiera eta abiadura 227 km (kontuz, nondik neurtzen da hau?) eta <math display=\"inline\"><mn>8</mn></math>  km/s baliokoak ziren hurrenez hurren. (a) Kalkulatu apogeoan zituen altuera eta abiadura. (b) Zein zen orbitaren periodoa?"
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
       "html": "Keplerren lanetan hirugarren legea ez da 4.3.3 atalekoa, honako hau baizik: «Periodoaren karratuaren eta Eguzkiaren eta planetaren arteko batez besteko distantziaren kuboaren arteko zatidura berdina da planeta guztietarako». Kalkulatu ardatzerdi nagusiaren luzeraren eta batez besteko distantziaren arteko erlazioa. Nola definitzen da «batez besteko distantzia» hori? Iruzkina egin emaitzari."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Orbita geoegonkor batean higitzen ari da satelite bat (beraz, beti dago ekuatoreko puntu finko baten gainean, altuera berean). Une batean satelitearen motorra erabiltzen da, higiduraren norabidean, Lurrarekiko tangentea den orbita berri batean jartzeko. Zein da abiadura orbita berriaren hasieran eta amaieran? Zenbat denbora behar du Lurrera heltzeko?"
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
       "html": "Satelite batek bulkada bat pairatzen du bere orbita zirkularraren norabidean. Kontsidera dezagun energia zinetikoaren aldaketa erlatiboa, hau da, <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>T</mi><mo>−</mo><msub><mi>T</mi><mn>0</mn></msub></mrow><msub><mi>T</mi><mn>0</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>,</mo></mrow></math> non bulkada aplikatu baino lehenago eta ondoren energia zinetikoak <math display=\"inline\"><msub><mi>T</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><mi>T</mi></math> diren, hurrenez hurren. Kalkulatu <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> balioa bi orbiten ardatzerdi nagusien luzeren funtzioan. Froga ezazu orbita berriaren eszentrikotasunaren menpeko hutsa den formula erraz baten bidez idazten dela <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> aldaketa kasu guztietan, hau da, orbita eliptikoa, parabolikoa zein hiperbolikoa denean."
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
       "html": "Baliatu 1842an Jacobik latinez argitaratuko metodoaz, orbita newtondarren ekuazioa berriro integratzeko. <br> (a) Aukera itzazu, ohi bezala, koordenatu polar lauak orbitaren planoan, <math display=\"inline\"><mrow><mi>ϕ</mi><mo>=</mo><mn>0</mn></mrow></math> ardatza perizentrotik pasatzeko moduan. <br> (b) Erabili momentu angeluarraren kontserbazioa <math display=\"block\"><mrow><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒗</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></mrow></math> ekuazioan, denborarekiko deribatua <math display=\"inline\"><mi>ϕ</mi></math> angeluarekiko deribatuarekin ordezkatzeko. <br> (c) Integratu horrela lortutako ekuazioa <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> abiadura lortzeko. <br> (d) Frogatu 4.36 problemako hodografoa zirkunferentzia bat dela. <br> (e) Noiz dago abiadura nulua hodografotik kanpo eta noiz barruan? <br> (f) Ordezkatu (c) emaitza momentu angeluarraren <math display=\"inline\"><mrow><mi>L</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> definizioan eta askatu <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
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
       "html": "Atlantis transbordadore espazialeko astronautek orbita zirkularrean ipini behar dute satelite bat. Norabidearekin asmatzen badute ere, abiadura eskalarrean huts <em>txiki</em> bat egiten dute: <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> balio zuzena eman beharrean, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> abiadura ematen diote. <br> (a) Zein da orbitaren eszentrikotasuna, <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>ε</mi><mo>&lt;</mo><mn>0</mn></mrow></math> kasuetan? <br> (b) Lurretik 300 km-ra jarri bazuten eta abiaduran egindako akats osoa 1 ms<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>-ekoa bada, zein izango da benetako altueren tartea? <br>  <em>Iradokizuna</em>: Erabili <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≪</mo><mn>1</mn></mrow></math> dela kalkulu guztietan hurbilketa egokiak egiteko."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sistema bikoitz bateko izarren masak <math display=\"inline\"><mrow><mi>p</mi><msub><mi>M</mi><mo>⊙</mo></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>q</mi><msub><mi>M</mi><mo>⊙</mo></msub></mrow></math> dira. Izarrak <math display=\"inline\"><mi>k</mi></math> urteko periodoko orbita zirkularretan higitzen ari dira. Kalkulatu izarren arteko distantzia unitate astronomikoetan. <br>  <em>Iradokizuna</em>: Gogoratu Eguzkiaren eta Lurraren arteko batez besteko distantzia dela unitate astronomikoa."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>R</mi></math> erradioko orbita zirkular batean higitzen ari den satelite bat geldiarazten da, bere norabidea aldatu gabe, Lurraren azalarekiko tangentea den orbita batean jartzeko. Frogatu une horretatik Lurra ukitzen duen arte igarotzen den denbora honako hau dela: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><mi>π</mi><msqrt><mfrac><msub><mi>R</mi><mo>⊕</mo></msub><mrow><mn>8</mn><mi>g</mi></mrow></mfrac></msqrt><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mi>R</mi><msub><mi>R</mi><mo>⊕</mo></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> Zein da orbita berriaren eszentrikotasuna?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Satelite bat orbita zirkular batean higitzen ari da, Lurraren azaletik <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math> distantziara. Nolakoak izan behar dute <math display=\"inline\"><mi>m</mi></math> masako beste satelite baten motorrak eragindako indarraren moduluak eta noranzkoak, orbita berean abiadura bikoitzaz higi dadin?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zein izango litzateke urtearen iraupena Lurraren masa Eguzkiarenaren berdina balitz, bi astroen arteko distantzia aldatu gabe?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Geldi dagoen partikularantz abiatzen da, oso distantzia handitik, partikula berdin bat. Hasieran, azken honen abiadura eta jotze-parametroa <math display=\"inline\"><mi>v</mi></math> eta <math display=\"inline\"><mi>b</mi></math> dira, hurrenez hurren. Partikula bien arteko elkarrekintza grabitatorioa da. Zirriborratu partikula bakoitzaren ibilbidea masa-zentroaren sisteman. Zein da bi partikulen arteko distantzia minimoa? Zer gertatzen da <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>0</mn></mrow></math> bada? Eta <math display=\"inline\"><mrow><mi>v</mi><mo>→</mo><mn>0</mn></mrow></math> limitean?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Satelite bat <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiaduraz higitzen ari da <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math> erradioko orbita zirkular batean. <math display=\"inline\"><mi>A</mi></math> puntuan dagoenean, bere abiaduraren norabidea aldatzen da, bere modulua eta orbitaren planoa aldatu gabe. Lurraren zentrotik <math display=\"inline\"><mrow><msub><mi>r</mi><mn>0</mn></msub><mi>/</mi><mn>5</mn></mrow></math> distantziara dago orbita berriaren <math display=\"inline\"><mi>B</mi></math> perigeoa. Aurkitu (<math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>-ren funtzioan) zein den abiadura perigeoan eta orbita berriaren eszentrikotasuna. Marraztu orbita zaharra eta berria eta kalkulatu nola aldatu den abiaduraren norabidea <math display=\"inline\"><mi>A</mi></math> puntuan. Zein da Lurraren zentrotik neurturiko <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math>-ren arteko distantzia angeluarra?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Indar newtondarren poloa <math display=\"inline\"><mi>O</mi></math> puntuan badago, irudiko kurba sorten artean zein(tzuk) izan daite(zk)e orbitak?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bat-batean Lurrak Eguzkiaren inguruko abiadura galduko balu, noiz eroriko litzateke Eguzkian?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lurraren atmosfera arbuiatzen badugu, izan daiteke irudiko orbita satelite batena?"
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
       "html": "Sistema bikoitz batean, izar baten masa <math display=\"inline\"><mi>m</mi></math> da eta bestearena <math display=\"inline\"><mrow><mi>m</mi><mi>/</mi><mn>2</mn></mrow></math>. Izar astunaren abiadura maximoa <math display=\"inline\"><mi>v</mi></math> da (masa-zentroaren sisteman) eta bere orbitaren eszentrikotasuna <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>. Kalkulatu izar bakoitzaren abiadura maximoa eta minimoa, orbitaren eszentrikotasuna, ardatz nagusiaren luzera eta periodoa."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Masa bereko bi satelite plano eta noranzko berean higitzen ari dira. Orbita bat zirkularra da eta bestea <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>ε</mi><mo>&lt;</mo><mn>1</mn></mrow></math> eszentrikotasunekoa. Azken honen perigeora une berean heltzen direnean, loturik geratzen dira bi sateliteak. Irekia izan daiteke satelite berriaren orbita? Zergatik? Zein da orbita berriaren eszentrikotasuna?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "4.15 problemako haria apurtzen da une batean. Nolakoak izango dira bi sateliteen orbita berriak? Kalkulatu haien perigeoaren eta apogeoaren distantziak eta eszentrikotasunak. Elkar zeharkatuko dute bi orbita berriek? Lurrean eroriko al da sateliteren bat?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mn>7</mn><msub><mi>R</mi><mo>⊕</mo></msub></mrow></math> erradioko orbita zirkular batean higitzen ari den <math display=\"inline\"><mi>m</mi></math> masako satelite bat berreskuratzeko, irudiko metodoaz baliatu dira. Satelitea <math display=\"inline\"><mi>A</mi></math> puntuan zegoenean, Lurreko <math display=\"inline\"><mi>B</mi></math> puntutik bidali zen <math display=\"inline\"><mi>M</mi></math> masako bigarren satelite bat. Azken honek bakarrik erabili zuen motorra hasieran, tarte laburrean, orbitan jartzeko; gero pisuaren eraginez higitzen zen. Bi sateliteek <math display=\"inline\"><mi>C</mi></math> puntuan elkarrekin topo egitean, loturik geratu ziren eta satelite berria zuzenean erori zen Lurrera, erakusten den moduan. Zein zen bigarren satelitearen abiadura <math display=\"inline\"><mi>B</mi></math> puntuan? Eta amaierako satelitearena Lurrera heltzean? Kalkulatu bigarren satelitearen <math display=\"inline\"><mi>M</mi></math> masa eta noiz igorri zen neurtzen duen <math display=\"inline\"><mi>α</mi></math> angelua."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>R</mi></math> erradioko orbita zirkular berean (baina kontrako noranzkoetan) higitzen ari diren bi sateliteen masak <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><mi>m</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mi>m</mi></mrow></math> dira. Elkarrekin topo egitean talka elastikoa gertatzen da baina sateliteen norabideak ez dira aldatzen. Aurkitu orbita berrien ezaugarriak (forma, eszentrikotasuna eta absideen distantziak). Nolakoa izan behar du <math display=\"inline\"><mrow><mi>R</mi><mi>/</mi><msub><mi>R</mi><mo>⊕</mo></msub></mrow></math> zatidurak sateliteetako bat Lurrean erortzeko?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili elipsearen (4.61) ekuazioa, bi fokuetatik elipsearen puntuetarako distantzien batura konstante bat dela frogatzeko. Zein da konstante hori? Propietate hau erabil daiteke elipsea definitzeko; zein da hiperbolari dagokiona?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Masa-zentro komunaren inguruan biratzen ari dira bi izar. Lurretik, teleskopioaren bidez, bi orbitak eliptikoak eta ardatzerdi nagusiak <math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>a</mi><mn>2</mn></msub></math> direla neurtzen da. Zein da izarren masen zatidura? Orbiten periodoa <math display=\"inline\"><mi>T</mi></math> bada, zein da bakoitzaren masa?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Satelite baten orbita zirkularraren erradioa Lurrarenaren bikoitza da. Bat-batean satelitearen abiaduraren norabidea aldatzen da, modulua aldatu gabe, irudian erakusten den bezala. Nola aukeratu behar da <math display=\"inline\"><mi>δ</mi></math> angelua orbita berria Lurraren azalaren tangentea izan dadin? Kalkulatu orbita berriaren eszentrikotasuna eta hasierako puntuaren eta perigeoaren arteko distantzia angeluarra."
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
       "html": "Kalkulatu orbita newtondar bateko zein puntutan den maximoa eta minimoa abiaduraren osagai erradiala eta zeintzuk diren balio maximoa eta minimoa."
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
       "html": "Satelite bat <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> eszentrikotasuneko orbita batean ari da higitzen. Perigeoan satelitearen altuera <math display=\"inline\"><mrow><msub><mi>R</mi><mo>⊕</mo></msub><mi>/</mi><mn>6</mn></mrow></math> da. Masa bereko bigarren satelite bat bidaltzen da, Lurraren azaletik, norabide erradialean, <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiaduraz. Bi sateliteek elkarrekin egiten dute topo lehenengoaren abiaduraren osagai erradiala minimoa denean (hau da, distantzia erradialaren txikitzea maximoa denean). Bi sateliteak loturik geratzen dira eta puntu hori orbita berriko abside bat da. Kalkulatu <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiadura. Lurrean eroriko al da satelite berria?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sistema bikoitz bateko bi izarren orbitak tangenteak dira masa-zentroaren sisteman. Orbiten eszentrikotasuna <math display=\"inline\"><mi>ε</mi></math> bada, zein da izarren masen zatidura?"
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
       "html": "Lurraren eremu magnetikoa aztertzeko, satelite bat bidali nahi da polotik ekuatorera. Motorra hasierako unean bakarrik erabiltzen bada, nola jaurti behar da, erabili behar den energia minimoa izateko? Zein da orduan satelitearen orbitaren eszentrikotasuna? Eta haren garaiera maximoa?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mn>3</mn><msub><mi>R</mi><mo>⊕</mo></msub></mrow></math>  <em>alturako</em> orbita zirkularrean higitzen ari den masa arbuiagarriko teleskopio bat berreskuratzeko, <math display=\"inline\"><mi>m</mi></math> masako satelite bat jaurtitzen da, ipar polotik norabide azimutalean (hau da, Lurraren azalarekiko tangentean). <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math>  <em>alturako</em> apogeoan dagoenean motorra erabiltzen da, denbora-tarte labur batean, orbita berri batean jartzeko. Apogeo berrian harrapatzen du teleskopioa, norabide eta noranzko berean higitzen ari denean, eta berriro erabiltzen da motorra Lurrarekiko tangentea den orbitan jartzeko. Zirriborratu hiru orbitak. Kalkulatu motorren bi bulkadak, orbiten eszentrikotasunak eta bakoitzean emandako denbora. Non lurreratzen da (hau da, non da berriro Lurraren azalarekiko tangentea) satelitea? <br>  <em>Oharra</em>: Soluzioan bakarrik ager daitezke zenbakiak, <math display=\"inline\"><mi>g</mi></math> eta <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lurraren azaletik, norabide erradialean jaurtitzen da satelite bat, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>=</mo><msqrt><mrow><mn>3</mn><mi>G</mi><msub><mi>M</mi><mo>⊕</mo></msub><mi>/</mi><mn>2</mn><msub><mi>R</mi><mo>⊕</mo></msub></mrow></msqrt></mrow></math> abiaduraz. <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math> alturara iristen denean, satelitearen norabidea aldatzen da, abiadura eskalarra aldatu gabe. Une horretan abiadura berriaren eta zaharraren arteko angelua <math display=\"inline\"><mi>α</mi></math> da. Irekia izan daiteke orbita berria? Kalkulatu azkenaren eszentrikotasuna eta perigeoaren eta apogeoaren altuerak, <math display=\"inline\"><mi>α</mi></math> angeluaren funtzioan. Zeintzuk dira magnitude horien balio maximoak eta minimoak, Lurrean erori gabe? Zirkularra izan daiteke orbita berria?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu <math display=\"inline\"><mi>M</mi></math> masaren eremu grabitatorio esferikoan higitzen den <math display=\"inline\"><mrow><mi>m</mi><mo>≪</mo><mi>M</mi></mrow></math> masako partikularen orbita bornatuen periodoa honako hau dela: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>G</mi><mi>M</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>E</mi></mrow><mi>m</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> (Gogoratu 4.51 problema.)"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Habaila efektua</span>"
      },
      {
       "mota": "testua",
       "html": ".<span class=\"j-oin\">[Ikus, adibidez, .]</span> Satelite bat Eguzkitik urruntzen da norabide erradialean ihes-abiadurarekin. Jupiterren orbita irudian ikusten den puntuan zeharkatzean, planeta honen eraginez, satelitearen abiaduraren norabideak <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> balioko biraketa pairatzen du, Jupiterren orbitaren tangentea izateko moduan. Jupiterren eraginaren iraupena oso laburra (planetaren orbitaren periodoa baino askoz txikiagoa) bada eta talka horretan Eguzkiaren eragina arbuiatzen bada, froga ezazu satelitearen masa unitateko energiaren aldaketa hauxe izan dela: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mi>m</mi></mfrac><mo>≈</mo><mn>468.6</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J/kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>.</mi></mrow></math> Nolakoa da orbita berria: zirkularra, eliptikoa, parabolikoa ala hiperbolikoa?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sistema bikoitz bateko bi izarrak irudiko egoeran daude, une batean, masa-zentroaren sisteman. Higiduran barrena izarren arteko distantziaren handiena <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> bada, zeintzuk dira irudiko <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math> abiadurak?    "
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Satelite bat orbita zirkular batean ari da higitzen, baina atmosferaren eraginaren ondorioz energia mekanikoa txikitzen da astiro-astiro. Nola aldatzen da satelitearen abiadura: txikitzen da ala handitzen da?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Satelite bat Ipar Polotik bidaltzen da, Lurraren azalarekiko tangentean. Lehen apogeoan, <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math> alturan, motorra erabiltzen da, denbora-tarte labur batean, orbita zirkularrean jartzeko. Ahal bezain laster erabiltzen da berriro motorra, une batez eta higiduraren norabidean, orbita Ekuatorean Lurraren azalarekiko tangentea izateko. Marraztu orbitak. Ohiko hipotesiez baliatuz, kalkulatu motorrak eragindako bulkadak (moduluak, norabideak eta noranzkoak) eta bidaiaren iraupena. <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Oharra</em>"
      },
      {
       "mota": "testua",
       "html": ": Soluzioan bakarrik ager daitezke satelitearen <math display=\"inline\"><mi>m</mi></math> masa, <math display=\"inline\"><mi>g</mi></math>, <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math> eta zenbakiak."
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
       "html": "<span class=\"j-smallcaps\">Zirkunzentroa</span>"
      },
      {
       "mota": "testua",
       "html": "(Newton, <em>Principia</em>). Kometa baten orbita parabolikoa da. Une bakoitzean zirkunferentzia bakar bat pasatzen da kometatik, Eguzkitik eta kometaren periheliotik. Frogatu zirkunferentziaren zentro geometrikoa abiadura konstantez higitzen dela."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sistema bikoitz bateko bi izarrak irudiko egoeran daude une batean eta <math display=\"inline\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>=</mo><msqrt><mrow><mi>G</mi><mi>M</mi><mi>/</mi><msub><mi>r</mi><mn>0</mn></msub></mrow></msqrt></mrow></math> da. Marraztu, ahal den ondoren, orbitak masa-zentroaren sisteman. Kalkulatu orbiten eszentrikotasuna eta izarren arteko distantzia maximoa eta minimoa. Zeintzuk dira masa-zentroaren sisteman neurtutako izarren abiadura maximoak eta minimoak?    "
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Satelite artifizial batean bakarrik geratzen da erregai apur bat. Non eta nola (norantz) erabili behar da motorra (denbora-tarte infinitesimal batean), orbitaren energiaren aldaketa ahalik handiena izateko?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kometa bat orbita hiperboliko batean ari da higitzen eta Eguzkiaren inguruan igarotzean <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-ko desbiderapena pairatzen du. Kometaren jotze-parametroa <math display=\"inline\"><mi>b</mi></math> da eta infinituko abiadura <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>. Frogatu hurrengo erlazioa: <math display=\"block\"><mrow><mi>b</mi><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mi>G</mi><msub><mi>M</mi><mo>⊙</mo></msub><mi>.</mi></mrow></math> Kalkulatu orbitaren eszentrikotasuna eta perihelioaren distantzia eta abiadura."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Masa-zentroaren sisteman, <math display=\"inline\"><mi>m</mi></math> masako bi izar esferiko berdinen abiadurak irudikoak dira, distantzia handira daudenean. <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mi>G</mi><mi>m</mi></mrow><mrow><mn>2</mn><mi>b</mi></mrow></mfrac></msqrt></mrow></math> da. Kalkulatu zein den izar bakoitzaren norabidearen aldaketa osoa. Nolakoa izan behar du izarren erradioak izarrek elkar jo ez dezaten?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Sakabanatzea eta sekzio eragilea</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mn>4</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> keV</mtext></mrow></mrow></math>-eko <math display=\"inline\"><mi>α</mi></math> partikulen sorta baten intentsitatea <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mrow><mi>−</mi><mn>2</mn></mrow></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> da. <math display=\"inline\"><mrow><mn>50</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> mg</mtext></mrow></mrow></math>-ko aluminiozko jomugatik <math display=\"inline\"><mn>0.6</mn></math> m-ra, <math display=\"inline\"><mrow><mn>400</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> mm</mtext></mrow><mn>2</mn></msup></mrow></math>-ko sekzioa duen detektagailu bat kokatzen da. Detektagailuaren norabidea eta sortarena elkarzutak dira. Zenbat <math display=\"inline\"><mi>α</mi></math> partikula iritsiko dira detektagailura segundo batean? <br>  <em>Datuak</em>: <math display=\"inline\"><mrow><msub><mi>Z</mi><mrow><mtext mathvariant=\"normal\">Al </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>13</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">Al </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>27</mn></mrow></math> u."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Sekzio eragilea</span>"
      },
      {
       "mota": "testua",
       "html": ". Zein da masa-zentroaren sisteman eta laborategian neurtutako sekzio eragileen arteko erlazioa jaurtigaiak eta jomugak berdinak direnean?"
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
       "html": "Hasieran laborategiko sisteman geldi dauden esfera leun gogorren kontra beste esfera leun gogorrak bidaltzen dira. Kalkulatu sekzio eragile diferentziala eta osoa masa-zentroaren sisteman eta, esfera guztiak berdinak diren kasu berezian, laborategian."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Neutroi geldoak xurgapen-prozesuan, <math display=\"inline\"><mrow><msubsup><mrow></mrow><mn>48</mn><mn>113</mn></msubsup><mrow><mi mathvariant=\"normal\">C</mi><mi mathvariant=\"normal\">d</mi></mrow></mrow></math> isotopoaren sekzio eragilea <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>4</mn></msup></mrow></math> b da, sekzio geometrikoa baino lau magnitude-ordenaz handiagoa. Horrexegatik, Fermiren lehen erreaktorearekin hasita, larrialdietan erreakzio nuklearrak geldiarazteko kontrol-barrak kadmioz egin ohi dira. <br> Eman dezagun neutroi geldoen sorta bat kadmiozko xafla batean zehar igarotzen dela. Azkenean honetan <math display=\"inline\"><mrow><msubsup><mrow></mrow><mn>48</mn><mn>113</mn></msubsup><mrow><mi mathvariant=\"normal\">C</mi><mi mathvariant=\"normal\">d</mi></mrow></mrow></math> isotopoaren zenbaki-dentsitatea <math display=\"inline\"><mrow><mn>6</mn><mo>×</mo><msup><mn>10</mn><mn>27</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math> bada, zein da xaflaren lodiera minimoa sorta 100 aldiz moteltzeko?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Oso distantzia handira zeudenean <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>∞</mi></msub></math> abiaduraz higitzen ziren meteoritoen sorta zabal batean sartzen da Lurra. Nolakoa izan behar du meteorito baten jotze-parametroak Lurrean erortzeko? Kalkulatu Lurraren harrapatze-sekzio eragile osoa, hau da, Lurrean eroriko diren meteoritoen sortaren zeharkako sekzioaren azalera oso urrun zeudenean. Zenbat meteorito eroriko dira egun batean? <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Datuak</em>"
      },
      {
       "mota": "testua",
       "html": ": <math display=\"inline\"><mrow><msub><mi>v</mi><mi>∞</mi></msub><mo>=</mo><mn>20</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> km s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> eta sortaren intentsitatea <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>18</mn></mrow></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mrow><mi>−</mi><mn>2</mn></mrow></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Sakabanatze-angelua</span>"
      },
      {
       "mota": "testua",
       "html": ". Azter dezagun sakabanatzea <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> energia potentzialari dagokion indar-eremu zentral aldatzailearen kasuan. Perizentroan gertatzen den <math display=\"inline\"><mrow><mi>u</mi><mo>≡</mo><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> aldagaiaren <math display=\"inline\"><msub><mi>u</mi><mtext mathvariant=\"normal\">max</mtext></msub></math> balio maximoa <math display=\"inline\"><mi>b</mi></math> jotze-parametroaren eta <math display=\"inline\"><mi>E</mi></math> energia mekanikoaren menpekoa da. Erabili (4.28)  <em>edo</em>  (4.31) ekuazioa eta 4.15 irudiari dagokiona, sakabanatze-angelua ondoko adierazpenak emandakoa dela frogatzeko: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>π</mi><mo>−</mo><mn>2</mn><mi>b</mi><msubsup><mo>∫</mo><mn>0</mn><msub><mi>u</mi><mtext mathvariant=\"normal\">max</mtext></msub></msubsup><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mi>E</mi></mfrac><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>u</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msup><mi>b</mi><mn>2</mn></msup><msup><mi>u</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math> (Ohar zaitez errokizunaren zero positiboa dela <math display=\"inline\"><msub><mi>u</mi><mtext mathvariant=\"normal\">max</mtext></msub></math>.)"
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
       "html": "Erabili 4.111 problema <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>κ</mi><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>  (<math display=\"inline\"><mrow><mi>κ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>) energia potentzialean sekzio eragile diferentziala honako hau dela frogatzeko: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>κ</mi><msup><mi>π</mi><mn>2</mn></msup></mrow><mi>E</mi></mfrac><mfrac><mrow><mi>π</mi><mo>−</mo><mi mathvariant=\"normal\">Φ</mi></mrow><mrow><msup><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mo>−</mo><mi mathvariant=\"normal\">Φ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zein da 4.112 problemako indar-eremuan atzera egiteko (hau da <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>&gt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> sakabanatze-anguluen) sekzio eragilea?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>29</mn></msup></mrow></math> atomo <math display=\"inline\"><msup><mi>m</mi><mrow><mi>−</mi><mn>3</mn></mrow></msup></math> dituen horma bat partikula-sorta batez erasotzen da. Jaurtigaien ikus-puntutik, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math> m-ko erradioko esfera zurrunak dira atomoak. Zein da hormaren lodiera partikulen erdiak igarotzen badira sakabanatu gabe? Nolako lodiera behar du partikulen milioi bat partikuletatik bakar bat geratzeko sakabanatu gabe?"
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
       "html": "<math display=\"inline\"><mi>E</mi></math> energiako sorta zabal baten partikula guztiak norabide berean, baina jotze-parametro desberdinekin, hurbiltzen dira indar newtondar aldatzaile baten polora. Zein da eskualde helezina, hau da, sortak ukitzen ez duen puntuen multzoa? <br>  <em>Iradokizuna</em>: Eskualde helezinaren muga ibilbide guztien inguratzailea izango da (ikus [46])."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Geiger eta Marsdenen esperimentua</span>"
      },
      {
       "mota": "testua",
       "html": ". Kalkulatu zein den alfa partikulak atzera (hau da, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>&gt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> norabideetan) sakabanatzeko sekzio eragile osoa. Esperimentu batean, lagina platinozko xafla bat zen, <math display=\"inline\"><mrow><mi>d</mi><mo>≈</mo><mn>3</mn><mi>μ</mi></mrow></math>m-ko lodierakoa, eta alfa partikulen energia <math display=\"inline\"><mrow><mn>7.8</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> MeV</mtext></mrow></mrow></math>-koa. Geiger eta Marsdenek neurtu zuten 8000 partikuletatik bat zetorrela atzera, gutxi gorabehera. Bat al dator emaitza esperimental hau zure kalkuluarekin? <br>  <em>Oharra</em>: Platinoaren zenbaki eta masa atomikoak <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mn>78</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>195</mn></mrow></math> dira eta dentsitatea <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mn>21.4</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> g/cm</mtext></mrow><mn>3</mn></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Meteorito sorta paralelo bat <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiaduraz hurbiltzen da <math display=\"inline\"><mi>R</mi></math> erradioko planeta batera. Planetaren azalean ihes-abiadura <math display=\"inline\"><msub><mi>v</mi><mi>i</mi></msub></math> da. Kalkulatu talka-sekzio eragile osoa. Zer gertatzen da <math display=\"inline\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>→</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>→</mo><mi>∞</mi></mrow></math> limiteetan? Frogatu sakabanatze-angelu maximoa ondokoa dela: <math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mfrac><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup><mrow><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Atomo baten eta ioi baten arteko elkarrekintzaren energia potentziala ondokoa da: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mfrac><mi>C</mi><msup><mi>r</mi><mn>4</mn></msup></mfrac><mi>.</mi></mrow></math> (<math display=\"inline\"><mi>C</mi></math> konstante positiboa ioiaren kargaren eta atomoaren polarizagarritasunaren konbinazio egokia da eta <math display=\"inline\"><mi>r</mi></math> bi gorputzen arteko distantzia.) Ioiaren masa <math display=\"inline\"><mi>m</mi></math> da eta atomoarena askoz handiagoa. Ioia atomoaren kontra bidaltzen da distantzia handitik, <math display=\"inline\"><mi>E</mi></math> energiarekin eta <math display=\"inline\"><mi>b</mi></math> jotze-parametroarekin. <br> (a) Zirriborratu energia potentzial eraginkorra. <br> (b) Kalkulatu orbita zirkularraren erradioa eta frogatu ezegonkorra dela. <br> (c) Kalkulatu zein den, <math display=\"inline\"><mi>E</mi></math>-ren balio bakoitzeko, <math display=\"inline\"><mi>b</mi></math>-ren balio maximoa ioia atomoaren nukleoraino heltzeko gai izan dadin. <br> (d) Zein da, beraz, harrapatze-sekzio eragile osoa <math display=\"inline\"><mi>E</mi></math> energiarekin?"
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
       "html": "Irudiko biraketa-elipsoide leun finkoaren ekuazioa hauxe da: <math display=\"block\"><mrow><mfrac><msup><mi>x</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow><msup><mi>b</mi><mn>2</mn></msup></mfrac><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math> Partikula puntualak bidaltzen dira elipsoidearen kontra, <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatzaren norabidean. Talkak elastikoak dira. Kalkulatu sakabanatze-sekzio eragile diferentziala eta osoa.    "
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Sakabanatze-angelua eta eszentrikotasuna</span>"
      },
      {
       "mota": "testua",
       "html": ". Frogatu orbita hiperboliko newtondarretan sakabanatze-angeluaren eta eszentrikotasunaren artean <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac></mrow></math> erlazioa betetzen dela, indarra erakarlea bada eta baita aldatzailea denean ere. Betetzen al da erlazio hori orbita newtondarra parabolikoa bada?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Sakabanatze newtondarra</span>"
      },
      {
       "mota": "testua",
       "html": ". <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><mi>r</mi></mrow></math> energia potentzialean higitzen den partikularen orbita hiperbolikoaren jotze-parametroa <math display=\"inline\"><mi>b</mi></math> da, energia mekanikoa <math display=\"inline\"><mi>E</mi></math>, eszentrikotasuna <math display=\"inline\"><mi>ε</mi></math>, sakabanatze-angelua <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> eta indar-polotik neurtutako distantzia minimoa <math display=\"inline\"><msub><mi>r</mi><mo>−</mo></msub></math>. Egiaztatu ondoko erlazioak dituela (ohi bezala, goiko zeinua aukeratu behar da <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math> denean eta behekoa <math display=\"inline\"><mrow><mi>k</mi><mo>&lt;</mo><mn>0</mn></mrow></math> bada): <math display=\"block\"><mrow><mi>b</mi><mo>=</mo><msub><mi>r</mi><mo>−</mo></msub><msqrt><mrow><mn>1</mn><mo>+</mo><mfrac><mi>k</mi><mrow><msub><mi>r</mi><mo>−</mo></msub><mi>E</mi></mrow></mfrac></mrow></msqrt><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>ε</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mfrac><mrow><mn>4</mn><msup><mi>b</mi><mn>2</mn></msup><msup><mi>E</mi><mn>2</mn></msup></mrow><msup><mi>k</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mo>=</mo><mfrac><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msubsup><mi>r</mi><mo>−</mo><mn>2</mn></msubsup></mrow><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>r</mi><mo>−</mo><mn>2</mn></msubsup></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>b</mi><mi>E</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>r</mi><mo>−</mo></msub><mo>=</mo><msqrt><mrow><mfrac><msup><mi>k</mi><mn>2</mn></msup><mrow><mn>4</mn><msup><mi>E</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></msqrt><mo>−</mo><mfrac><mi>k</mi><mrow><mn>2</mn><mi>E</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><mi>E</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">csc</mi><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>∓</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><mi>E</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo>∓</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>R</mi></math> erradioko esfera tinko baten azalean <math display=\"inline\"><mi>V</mi></math> potentzial elektrostatikoa uniformea eta konstantea da. Distantzia handitik bidaltzen da partikula bat, <math display=\"inline\"><mi>T</mi></math> energia zinetikoarekin. Partikularen masa <math display=\"inline\"><mi>m</mi></math> da eta karga <math display=\"inline\"><mi>q</mi></math>. Nola aukeratu behar da <math display=\"inline\"><mi>b</mi></math> jotze-parametroa partikularen ibilbidea esferaren azalarekiko tangentea izateko? Kalkulatu talka-sekzio eragile osoa. Noiz da maximoa eta noiz minimoa (a) <math display=\"inline\"><mrow><mi>q</mi><mi>V</mi><mo>&gt;</mo><mn>0</mn></mrow></math> denean eta (b)  <math display=\"inline\"><mrow><mi>q</mi><mi>V</mi><mo>&lt;</mo><mn>0</mn></mrow></math> denean, <math display=\"inline\"><mi>T</mi></math> aldatzean? Zeintzuk dira balio maximo eta minimo horiek? Eta esfera jotzen duten ibilbideen eszentrikotasunak?"
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
       "html": "<span class=\"j-smallcaps\">Potentzial-langa angeluzuzena</span>"
      },
      {
       "mota": "testua",
       "html": ". Partikula puntual bat ondoko potentzial zentralean higitzen da: <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mi>r</mi><mo>&lt;</mo><mi>a</mi><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mi>r</mi><mo>&gt;</mo><mi>a</mi><mi>.</mi></mtd></mtr></mtable></mrow></mrow></math> (<math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> abiaduraren dimentsioak dituen parametro positiboa da.) Partikula bat <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiaduraz eta <math display=\"inline\"><mi>b</mi></math> jotze-parametroaz hurbiltzen bada indar-polora, zein da sakabanatze-angelua?"
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
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Egia ala gezurra?</span>"
      },
      {
       "mota": "testua",
       "html": "Azaldu zergatik den egia edo gezurra hurrengo baieztapen bakoitza. <br> (a) Orbita zirkular batean higitzen ari den satelite baten motorra oso denbora-tarte labur batean erabiltzen bada irudian erakusten den bulkada emateko, orbita berria ez da izango A motakoa, B itxurakoa baizik."
      },
      {
       "mota": "testua",
       "html": "(b) Indar-eremu zentral batean higitzen den partikula batek pairatutako indarra izan daiteke erakarlea puntu batzuetan eta aldaratzailea orbita bereko beste puntu batzuetan. <br> (c) Keplerren orbita bateko perizentroan indarra eta abiadura elkarzutak direnez, indarra zentripetoa da eta honako hau betetzen da: <math display=\"block\"><mrow><mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>m</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>r</mi></mfrac><mi>.</mi></mrow></math>"
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
       "html": "Kalkulatu Lurraren eta Eguzkiaren batez besteko dentsitateen zatidura, hurrengo magnitudeak eta zenbakizko konstanteak erabiliz: <br> 1. Lurretik neurtutako Eguzkiaren diametro angeluarra: <math display=\"inline\"><mi>θ</mi></math>  (<math display=\"inline\"><mrow><mo>≈</mo><mn>0.53</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>). <br> 2. Ekuatorearen luzera: <math display=\"inline\"><mi>L</mi></math>. <br> 3. Urtearen iraupena: <math display=\"inline\"><mi>T</mi></math>. <br> 4. Grabitate-azelerazioa: <math display=\"inline\"><mi>g</mi></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kontsidera dezagun <math display=\"inline\"><mi>ρ</mi></math> dentsitate konstanteko planeta esferiko bat. Froga ezazu planeta desegingo dela, indar erakarle bakarra grabitatorioa denean, arinegi biratzen bada. Aurkitu biraketa-periodo minimoa hori ez gertatzeko. Zein izango litzateke periodo minimo hori planetaren masa eta diametroa Lurrarenak balira?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Objektu esferiko homogeneo bat <math display=\"inline\"><mi>ω</mi></math> abiadura angeluarraz biratzen da. Indar zentripeto bakarra grabitatorioa bada, nolakoa da objektuaren dentsitatea? PSR0531+121 pultsarra<span class=\"j-oin\">[ 1054an Txinan ikusitako supernobaren hondakina da Karramarro nebulosako pultsar hau.]</span> 30 aldiz biratzen da segundo batean: zein da bere dentsitate minimoa?"
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
       "html": "<span class=\"j-smallcaps\">Rocheren limitea</span>"
      },
      {
       "mota": "testua",
       "html": ". Satelite handi bat planetatik hurbilegi badago, marea-indarrek, hau da, puntu desberdinetan aplikatutako erakarpen-indarren diferentziek, satelitea apur dezakete. (Saturnoren eraztunak, adibidez, horrela apurtutako sateliteren baten hondarrak izan litezke.) Édouard Rochek posibilitate hau aztertu zuen 1848an eta satelitearen orbitaren erradioak honako baldintza hau betetzean hautsez egindako satelite bat apurtuko zela ondorioztatu zuen: <math display=\"block\"><mrow><mi>r</mi><mo>≤</mo><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>ρ</mi><mi>p</mi></msub><msub><mi>ρ</mi><mi>s</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></msup><mi>R</mi><mo>,</mo></mrow></math> non <math display=\"inline\"><mi>R</mi></math> balioa planetaren erradioa den eta <math display=\"inline\"><msub><mi>ρ</mi><mi>s</mi></msub></math> eta <math display=\"inline\"><msub><mi>ρ</mi><mi>p</mi></msub></math> direlakoak satelitearen eta planetaren batez besteko dentsitateak. <math display=\"inline\"><mrow><mi>k</mi><mo>≈</mo><mn>2.4</mn></mrow></math> konstantea lortzeko marea-indarrek sortutako deformazioa hartu behar da kontuan, baina hemen kalkulu erraztu bat egingo dugu, ideia kualitatiboa lortzeko. <br> Eman dezagun satelitea esferikoa dela eta planetatik hurbilen (urrunen) dagoen puntuan harritxo bat dagoela satelitearen azalean. Kalkulatu zein den <math display=\"inline\"><mi>k</mi></math> konstantearen balioa harritxoa satelitetik ez urruntzeko."
      },
      {
       "mota": "testua",
       "html": "<em>Iradokizuna</em>: Erabili satelitearen erradioa <math display=\"inline\"><mrow><mi>a</mi><mo>≪</mo><mi>r</mi></mrow></math> dela hurbilketak egiteko."
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
       "html": "Partikula bat eremu zentral (ez-newtondar) batean higitzen ari da. Indar-poloa <math display=\"inline\"><mi>O</mi></math> puntuan dago. Frogatu irudikoa ezin izan daitekeela orbitaren zati bat.  "
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Partikula baten orbita laua da. Nahikoa da hori, partikulak pairatutako indar osoa zentrala dela esateko?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Partikula baten orbita eliptikoa da. Nahikoa da hori, partikulak pairatutako indar osoa newtondarra dela ondorioztatzeko?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Partikula bat indar-eremu zentral batean ari da higitzen, orbita periodiko ez-zirkular batean. Periodo batean pasa daiteke bi perizentrotatik? Eta indarra newtondarra bada?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Problema baliokidea</span>"
      },
      {
       "mota": "testua",
       "html": ". Egiaztatu 4.7.5 problema ebatziko sistema, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aldagaietan, eta problema newtondarra <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mover><mi>φ</mi><mo accent=\"true\">̃</mo></mover><mo>,</mo><mover><mi>L</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> aldagaietan baliokideak direla ondoko definizioak erabiltzen badira: <math display=\"block\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><mi>ω</mi><mi>φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>L</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><mi>ω</mi><mi>L</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mo>≡</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>C</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Erabili baliokidetasuna orbitaren ekuazioa zuzenean idazteko."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Planeta esferiko baten masa <math display=\"inline\"><mi>M</mi></math> da eta erradioa <math display=\"inline\"><mi>R</mi></math>. <math display=\"inline\"><mrow><mn>2</mn><mi>R</mi></mrow></math> luzerako soka bat orbitan jarri da, beti norabide erradialean, <math display=\"inline\"><mi>R</mi></math> eta <math display=\"inline\"><mrow><mn>3</mn><mi>R</mi></mrow></math> erradioen artean, egoteko moduan (10.32 problheman egiaztatuko dugu hala egin daitekeela, horretarako egokia den materiala badago). Kalkulatu orbitaren periodoa."
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
       "html": "Poligono erregular baten <math display=\"inline\"><mi>N</mi></math> erpinetan jartzen dira, zentrotik <math display=\"inline\"><mi>R</mi></math> distantziara, <math display=\"inline\"><mi>m</mi></math> masako <math display=\"inline\"><mi>N</mi></math> partikula berdin. Elkarren arteko erakarpen grabitatorioaren ondorioz higitzen hasten badira, zenbat denbora beharko dute poligonoaren zentroan elkarrekin topo egiteko? <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Oharra</em>"
      },
      {
       "mota": "testua",
       "html": ": Idatzi soluzioa ondoko balioa erabiliz: <math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Λ</mi><mi>N</mi></msub><mo>≡</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></munderover><mfrac><mn>1</mn><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>k</mi><mi>π</mi></mrow><mi>N</mi></mfrac></mrow></mfrac><mi>.</mi></mrow></math>"
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
       "html": "<span class=\"j-smallcaps\">Bineten formula</span>"
      },
      {
       "mota": "testua",
       "html": ". Partikula puntual bat <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math> planoan higitzen da, ondoko indar-eremu ez-zentralean: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math> Frogatu orbitaren ekuazio diferentziala Bineten (4.35) formula dela eta ebatzi ekuazioa ondoko kasuan: <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mi>k</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Birialaren teorema</span>"
      },
      {
       "mota": "testua",
       "html": ".<span class=\"j-oin\">[Teorema hau zuzenean hedatzen da partikula-sistemetara eta garrantzia handikoa da mekanika estatistikoan.]</span> Eman dezagun partikula baten higiduran posizioak eta abiadurak bornatuak direla eta pairatzen duen indar osoa <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math>. Defini dezagun <math display=\"inline\"><mrow><mi>G</mi><mo>≡</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> magnitudea eta aldagai baten batez besteko balio ondoko formularen bidez: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mn>1</mn><mi>t</mi></mfrac><msubsup><mo>∫</mo><msub><mi>t</mi><mn>0</mn></msub><mi>t</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mi>.</mi></mrow></math> Kalkulatu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> eta ondorioztatu <math display=\"block\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math> Ezkerreko gaia <em>vis viva</em>-ren batez besteko balioa da (gogoratu 1.130 problema) eta eskuinekoa Clausiusen biriala. <br> Orain, partikula <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>k</mi><msup><mi>r</mi><mi>n</mi></msup></mrow></math> energia potentzial erakarlean (<math display=\"inline\"><mrow><mi>k</mi><mi>n</mi><mo>&gt;</mo><mn>0</mn></mrow></math>) higitzen bada (eta orbita bornatua bada), egiaztatu honela idazten dela teorema: <math display=\"block\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math> Gainera, indarra newtondarra bada eta orbita bornatua, (4.87) eran idazten da: <math display=\"inline\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. Jakina, kasu honetan <em>eta orbita periodikoa den guztietan</em> batez bestekoa <math display=\"inline\"><mi>T</mi></math> periodo batean kalkula daiteke: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math>"
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
       "html": "<span class=\"j-smallcaps\">Orbita hurbilduak</span>"
      },
      {
       "mota": "testua",
       "html": ". Merkurio (eta Pluton) alde batera utzita, planeten orbiten eszentrikotasunak txikiak dira (ikus A.5 taula). Hori dela eta, egin ditzagun hurrengo kalkuluak <math display=\"inline\"><mi>ε</mi></math>-kiko lehen ordenaraino. Frogatu (a) planeta baten orbita zirkunferentzia bat dela, baina (b) bere zentroa, Eguzkian egon beharrean, elipsearen zentroan dagoela eta (c) Eguzkia ez dagoen fokutik neurtutako planetaren abiadura angeluarra konstantea dela. <br>  <em>Oharra</em>: Hemengo zirkunferentzia, zentroa eta bigarren fokua, Ptolomeoren sistema geozentrikoko deferentea, eszentrikoa eta ekuantea dira, baina Kopernikoren sistema heliozentrikoan. Planeta bakoitzeko horrelako hirukote bat (eta hainbat epiziklo) behar ziren sistema horietan: sinplifikazio aparta izan zen Keplerren sistema!"
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
       "html": "<span class=\"j-smallcaps\">Planeten perihelioaren prezesioa erlatibitate orokorrean</span>"
      },
      {
       "mota": "testua",
       "html": ". <math display=\"inline\"><mi>M</mi></math> masako izar bat biratzen ez bada eta simetria esferikoa badu, bere inguruan biratzen ari den planeta baten eboluzio erradialaren ekuazioa hauxe da erlatibitate orokorrean, planetaren denbora propioa <math display=\"inline\"><mi>τ</mi></math> bada (ikus 6.86 problema): <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>r</mi></mrow><mrow><mi>d</mi><msup><mi>τ</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><msup><mi>r</mi><mn>3</mn></msup></mfrac><mo>−</mo><mfrac><mrow><mn>3</mn><msup><mi>h</mi><mn>2</mn></msup><mi>G</mi><mi>M</mi></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><msup><mi>r</mi><mn>4</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>h</mi><mo>≡</mo><msup><mi>r</mi><mn>2</mn></msup><mfrac><mrow><mi>d</mi><mi>φ</mi></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mi>.</mi></mrow></math> Eguzki sistemako planeten kasuan, <math display=\"inline\"><mrow><mi>η</mi><mo>≡</mo><mfrac><mrow><mi>G</mi><mi>M</mi><msup><mi>h</mi><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></math> oso txikia da. Gainera, Merkurio (eta Pluton) alde batera utzita, eszentrikotasunak oso txikiak dira eta 4.20 problema erabil daiteke <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac><mo>−</mo><mfrac><mi>η</mi><msup><mi>r</mi><mn>3</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>≡</mo><mi>G</mi><mi>M</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>m</mi><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>L</mi><mo>=</mo><mi>h</mi></mrow></math> jartzen badira. Kalkulatu ondoz ondoko absideen arteko angelua, <math display=\"inline\"><mi>η</mi></math>-ren lehen ordenaraino. Ondorioztatu bira batean perihelioaren aurrerapena hauxe dela: <math display=\"block\"><mrow><mi>δ</mi><mi>φ</mi><mo>=</mo><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>φ</mi><mo>−</mo><mn>2</mn><mi>π</mi><mo>=</mo><mfrac><mrow><mn>6</mn><mi>π</mi><mi>G</mi><mi>M</mi></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><msub><mi>r</mi><mn>0</mn></msub></mrow></mfrac><mi>.</mi></mrow></math> Horixe da erlatibitate orokorraren emaitza (eta teoria horren lehen arrakasta). (Orbita eliptikoen kasuan, <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math> ordez, orbitaren <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><msup><mi>h</mi><mn>2</mn></msup><mi>/</mi><mi>G</mi><mi>M</mi></mrow></math>  <em>semi-latus rectum</em> newtondarra jarri behar da, 4.49 problemaz baliatuz froga daitekeen bezala: ikus 672. orrialdeko C.1 ariketa.)"
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
       "html": "Satelite bat orbita zirkular batean ari da higitzen, <math display=\"inline\"><mi>ω</mi></math> abiadura angeluarrarekin. Aukera dezagun erreferentzia-sistema bat honela: zentroa satelitean, <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> ardatza kanporanzko norabide erradialean eta <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> ardatza orbitaren norabidean eta noranzkoan. Frogatu partikula"
      },
      {
       "mota": "testua",
       "html": "<em>hurbil</em>"
      },
      {
       "mota": "testua",
       "html": "baten higidura-ekuazioak honela idazten direla sistema horretan: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>3</mn><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>+</mo><mn>2</mn><mi>ω</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mn>2</mn><mi>ω</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>z</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Egiaztatu partikularen orbita eliptikoa izan daitekeela, aipaturiko sisteman. Zeintzuk dira orduan elipsearen ardatzak, periodoa eta eszentrikotasuna? Nola askatu behar da partikula, geldi gera dadin?"
      },
      {
       "mota": "testua",
       "html": "<em>Oharra</em>: Arbuiatu satelitearen eta partikularen arteko elkarrekintza grabitatorioa eta Lurraren esferikotasunik eza eta anisotropia."
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
       "html": "<span class=\"j-smallcaps\">Kolapso grabitatorio esferikoa</span>"
      },
      {
       "mota": "testua",
       "html": ". Demagun hautsezko esfera baten dentsitatea <math display=\"inline\"><msub><mi>ρ</mi><mn>0</mn></msub></math> konstantea dela partikula guztiak geldi dauden unean. Partikulen arteko talkak eta presioa arbuiagarriak badira, zenbat denbora iraungo du kolapso grabitatorioak aipatutako unetik? Baliozta ezazu emaitza <math display=\"inline\"><msub><mi>ρ</mi><mn>0</mn></msub></math> dentsitatea Lurraren batez besteko dentsitatea denean. <br>  <em>Oharra</em>: Jakina, kolapsoa aurrera joan ahala, talkei eta presioari buruzko hipotesiak gero eta desegokiagoak izango dira eta kolapsoa ez da osoa izango fisika newtondarrean, baina baliospen bat egin nahi da soilik."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "EHU 2000, ISBN 84-8373-295-5",
     "xehetasuna": "Examenes resueltos (1996-2000), mk:4",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>m</mi></math> masako partikula bat malguki baten muturrera lotuta dago, berezko luzera <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> eta berreskuratze-konstantea <math display=\"inline\"><mi>k</mi></math> dituena. Malgukiaren beste muturra O puntu finko batera lotuta dago. Hasieran, malgukiaren luzera zehazki <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> da eta partikula <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiadurarekin higitzen ari da irudian adierazten den noranzkoan. Ondorengo higidura halakoa da non malgukiak <math display=\"inline\"><mrow><mn>2</mn><msub><mi>l</mi><mn>0</mn></msub></mrow></math> gehieneko luzera lortzen duen. Lortu <math display=\"inline\"><mi>k</mi></math> konstantearen balioa <math display=\"inline\"><mi>m</mi></math>, <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>-ren funtzioan. Zein izango da malgukiak lortuko duen gutxieneko luzera?"
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Ebazpena (egileak ebatzita eta iruzkinduta)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Irudian hasierako egoera eta edozein uneko <math display=\"inline\"><mi>t</mi></math> egoera erakusten dira, partikularen abiadura <math display=\"inline\"><mi>v</mi></math> delarik (beti ibilbidearekiko ukitzailea) eta O-tik <math display=\"inline\"><mi>r</mi></math> distantziara egonik. Enuntziatuan idatzi gabeko hipotesia da malgukia luzetarako noranzkoan soilik deforma daitekeela (bestela ez luke zentzurik)."
    },
    {
     "mota": "testua",
     "html": "[Irudia: O puntu finkoa ezkerrean; malgukia (zig-zag formako malgukia) <math display=\"inline\"><mrow><mi>k</mi><mo>,</mo><msub><mi>l</mi><mn>0</mn></msub></mrow></math> etiketatua O-tik abiatuta. Bi posizio marrazten dira: hasierakoa, <math display=\"inline\"><mi>m</mi></math> partikula eta malgukia bere <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> luzera naturalean horizontalean dituela, eta <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> hasierako abiadurak 45° osatzen duelarik horizontalarekin (ibilbidearekiko ukitzailea, gora-eskuinera zuzendua); eta edozein uneko <math display=\"inline\"><mi>t</mi></math>, malgukia <math display=\"inline\"><mi>r</mi></math> distantziaraino luzatuta (<math display=\"inline\"><mi>r</mi></math> etiketa malgukiaren zehar), <math display=\"inline\"><mi>θ</mi></math> angelua osatuz horizontalarekin, eta <math display=\"inline\"><mi>v</mi></math> abiadura ibilbidearekiko ukitzailea. Kurba batek partikularen ibilbidea irudikatzen du, hasierako posiziotik gora igotzen dena.]"
    },
    {
     "mota": "testua",
     "html": "Problema partikula baten dinamikako problematzat har dezakegu, bere norabidea beti puntu beretik (kasu honetan O-tik) pasatzen duen indar baten eraginpean dagoena. Gainera, indarra malguki batek egiten duenez eta halako indarrak kontserbatzaileak direla badakigunez, bi kontserbazio-printzipio erabil ditzakegu ariketa erabat ebazteko."
    },
    {
     "mota": "testua",
     "html": "Lehenik eta behin, indar kontserbatzailea denez, sistemaren energia mekanikoa konstante mantenduko da, kasu honetan energia zinetikoaren eta energia potentzial elastikoaren batura izango dena (grabitateak ez du eragiten). Koordenatu polar lauak erabiltzen baditugu, honela idatziko dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><msub><mi>l</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "izan ere, edozein unetan <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> da eta, gainera, hasierako unean energia bakarra zinetikoa da, malgukiak une horretan bere <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> luzera naturala baitu."
    },
    {
     "mota": "testua",
     "html": "Bigarrenik, eragiten duen indarra <em>zentrala</em> motakoa denez, partikularen momentu angeluarra ere konstante mantenduko da, <math display=\"inline\"><mrow><mi>d</mi><mi>J</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>τ</mi><mo>=</mo><mn>0</mn></mrow></math> adierazpenetik (<math display=\"inline\"><mi>τ</mi></math> indarraren momentua da O-rekiko eta, jakina, nulua da) berehala ondorioztatzen baita <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext></mrow></math>. Moduluarekin lan egitea nahikoa izango zaigu, hau ere konstantea izango baita. Beraz, honela idatziko dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>J</mi><mo>=</mo><mi>r</mi><mo>⋅</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>l</mi><mn>0</mn></msub><mo>⋅</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><msub><mi>v</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "izan ere, alde batetik <math display=\"inline\"><mrow><msub><mi>v</mi><mi>θ</mi></msub><mo>=</mo><mi>r</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> dela badakigu, eta hasierako unean dagokion zeharkako abiadura honakoa dela: <math display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>θ</mi><mn>0</mn></mrow></msub><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>45</mn><msup><mi></mi><mo>∘</mo></msup><mo>=</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><msub><mi>v</mi><mn>0</mn></msub></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Bi ekuazio hauetatik <math display=\"inline\"><mi>r</mi></math>-ren edo <math display=\"inline\"><mi>θ</mi></math>-ren lehen ordenako ekuazio diferentziala lor dezakegu, eta hemendik integrazioz dagozkion higidura-ekuazioak ondorioztatuko lirateke, ibilbidearen ekuazioarekin batera, operatiboki konplikatua izan daitekeena. Nolanahi ere, ez da kezkatu behar dugun zerbait, galderak ibilbidearen atzerapen-puntuei baitagozkie, hau da, abiadura erradiala zeinua aldatzen duen puntuei (edo, gauza bera dena, abiadura erradiala nulua den puntuei: <math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "Bigarren berdintasunetik, hau lortzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><msqrt><mn>2</mn></msqrt><mspace width=\"0.167em\"></mspace><msub><mi>l</mi><mn>0</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow><mrow><mn>2</mn><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau lehenengoan ordezka dezakegu, atzerapen-puntuetarako (<math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>), sinplifikatu ondoren honela idazteko:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>m</mi><msubsup><mi>l</mi><mn>0</mn><mn>2</mn></msubsup><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>+</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><msub><mi>l</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>2</mn><mi>m</mi><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "adierazpen horrek, garatu ondoren, ebatzi ezingo genukeen laugarren mailako ekuazio polinomikora eramango gintuzke. Hala ere, atzerapen-puntuetako bat ezagutzen dugu problemaren enuntziatutik: <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>2</mn><msub><mi>l</mi><mn>0</mn></msub></mrow></math>. Horrek malgukiaren konstante elastikoaren <math display=\"inline\"><mi>k</mi></math> balioa zehazteko aukera emango digu, planteatutako lehen galderari horrela erantzunez. Ez dago inolako zailtasunik, ordezkapenaren eta ondorengo sinplifikazioaren ondoren, hona iristeko:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mfrac><mrow><mn>7</mn><mi>m</mi><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mrow><mrow><mn>8</mn><msubsup><mi>l</mi><mn>0</mn><mn>2</mn></msubsup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orain <math display=\"inline\"><mi>k</mi></math>-ren balio hau atzerapen-puntuak ematen dizkigun laugarren mailako ekuazio polinomikoan erabiltzen badugu, sinplifikatu ondoren hona iristen gara:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>7</mn><msup><mi>r</mi><mn>4</mn></msup><mo>−</mo><mn>14</mn><msub><mi>l</mi><mn>0</mn></msub><msup><mi>r</mi><mn>3</mn></msup><mo>−</mo><msubsup><mi>l</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn><msubsup><mi>l</mi><mn>0</mn><mn>4</mn></msubsup><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ekuazio horretatik haren erroetako bat ezagutzen dugu jada: <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>2</mn><msub><mi>l</mi><mn>0</mn></msub></mrow></math>. Ruffiniren erregelak beste atzerapen-puntuak (O-tik distantzia minimokoa) bete beharko duen hirugarren mailako ekuazio polinomikoa lortzeko aukera ematen digu. Hau izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>7</mn><msup><mi>r</mi><mn>3</mn></msup><mo>−</mo><msubsup><mi>l</mi><mn>0</mn><mn>2</mn></msubsup><mi>r</mi><mo>−</mo><mn>2</mn><msubsup><mi>l</mi><mn>0</mn><mn>3</mn></msubsup><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ekuazio hau prozedura zenbakizkoen bidez ebatzi dezakegu, erro erreal bakarra lortuz: <math display=\"inline\"><mrow><mi>r</mi><mo>≃</mo><mn>0.73067452</mn><mspace width=\"0.167em\"></mspace><msub><mi>l</mi><mn>0</mn></msub></mrow></math>."
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>30</mn></msup></mrow></math> Kg masako izar baten inguruan planeta bat orbitatzen duela susmatzen da. Hori baieztatzeko, izarraren higiduraren neurketak egiten dira, eta higidura zirkularra egiten duela aurkitzen da, <math display=\"inline\"><mrow><msub><mi>v</mi><mi>e</mi></msub><mo>=</mo><mn>1</mn></mrow></math> km/s abiadurarekin eta <math display=\"inline\"><mrow><msub><mi>τ</mi><mi>e</mi></msub><mo>=</mo><mn>1</mn></mrow></math> urte periodorekin. Kalkulatu planetaren <math display=\"inline\"><mi>m</mi></math> masa. (Azken pausoan, baina ez lehenago, <math display=\"inline\"><mrow><mi>m</mi><mo>≪</mo><mi>M</mi></mrow></math> dela suposa daiteke.)"
    },
    {
     "mota": "testua",
     "html": "[Irudia: ESTRELLA-n (ardatz horizontalean zulo-zirkulu bat) zentraturiko trazu jarraituzko zirkunferentzia handia; haren eskuinean, <math display=\"inline\"><msub><mi>r</mi><mi>e</mi></msub></math> distantziara, <math display=\"inline\"><mi>O</mi></math> masa-zentroa (&quot;O&quot; etiketatutako puntu betea), <math display=\"inline\"><msub><mi>r</mi><mi>e</mi></msub></math> segmentu laburrak lotuta; <math display=\"inline\"><mi>O</mi></math>-n zentraturiko eta <math display=\"inline\"><msub><mi>r</mi><mi>e</mi></msub></math> erradioko bigarren zirkunferentzia trazu etendunezkoa (izarretik pasatzen dena), izarraren <math display=\"inline\"><mi>O</mi></math>-ren inguruko orbita irudikatzen duena; ardatza eskuinerantz jarraitzen du <math display=\"inline\"><mrow><mi>O</mi><mo>→</mo></mrow></math>planeta segmentuarekin, <math display=\"inline\"><msub><mi>r</mi><mi>p</mi></msub></math> etiketatua, planetaren sinboloan amaitzen delarik (puntu zentrala duen zirkulua); beheko aldean, <math display=\"inline\"><mi>r</mi></math> etiketatutako trazu-akotazio bat izarraren eta planetaren arteko distantzia osoa hartzen duena (<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mi>e</mi></msub><mo>+</mo><msub><mi>r</mi><mi>p</mi></msub></mrow></math>).]"
    }
   ]
  },
  {
   "id": "a13",
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
     "html": "Kalkula dezagun, lehenik eta behin, O masa-zentroaren posizioa. Izarraren zentroan sistema inertzial batean jartzen bagara, O puntuaren posizioa <math display=\"inline\"><msub><mi>r</mi><mi>e</mi></msub></math> balioarekin bat dator. Izarraren eta planetaren arteko distantzia <math display=\"inline\"><mi>r</mi></math> denez, hau izango dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>r</mi><mi>e</mi></msub><mo>=</mo><mfrac><mrow><mi>m</mi><mi>r</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mi>e</mi></msub><mo>=</mo><mfrac><mrow><mi>m</mi><mi>v</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lortu dugun bigarren balioa, <math display=\"inline\"><msub><mi>v</mi><mi>e</mi></msub></math>, O-ren abiadura da izarraren zentroarekiko unean-unean geldirik dagoen sistema inertzial batekiko. Alderantziz, izarraren masa-zentroaren abiadura ere izango da sistemaren masa-zentroarekiko, O-rekiko."
    },
    {
     "mota": "testua",
     "html": "Sistema bakartua denez eta sistemarekiko kanpoko indarrik ez dagoenez, masa-zentroaren sisteman momentu lineal osoa nulua da. Beraz, bertan jartzen bagara, izarrak zein planetak O-ren inguruko orbita zirkularrak deskribatzen dituztela ikusiko dugu, izarrak <math display=\"inline\"><msub><mi>r</mi><mi>e</mi></msub></math> erradioa eta <math display=\"inline\"><msub><mi>v</mi><mi>e</mi></msub></math> abiadura dituela, eta planetak <math display=\"inline\"><msub><mi>r</mi><mi>p</mi></msub></math> erradioa. Bi kasuetan, higidura zirkular hori sortzen duen indarra elkarrekiko erakarpen-indarra da."
    },
    {
     "mota": "testua",
     "html": "Izarrak deskribatzen duen higidura zirkularra denez, haren ibilbidearen zentrora, O-ra, zuzentzen den indar normala erakarpen-indarraren berdina dela idatz dezakegu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>M</mi><mfrac><msubsup><mi>v</mi><mi>e</mi><mn>2</mn></msubsup><msub><mi>r</mi><mi>e</mi></msub></mfrac><mo>=</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>G</mi></math> grabitazio unibertsalaren konstantea delarik. <math display=\"inline\"><mi>r</mi></math> bere <math display=\"inline\"><msub><mi>r</mi><mi>e</mi></msub></math>-ren funzioko balioaz ordezkatuz, eta <math display=\"inline\"><mrow><msub><mi>r</mi><mi>e</mi></msub><mo>=</mo><msub><mi>v</mi><mi>e</mi></msub><msub><mi>τ</mi><mi>e</mi></msub><mi>/</mi><mn>2</mn><mi>π</mi></mrow></math> dela kontuan hartuta, <math display=\"inline\"><msub><mi>τ</mi><mi>e</mi></msub></math> izarraren O masa-zentroarekiko bira-periodoa delarik, aurreko adierazpena honela idatziko da, sinplifikatu ondoren:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msup><mi>m</mi><mn>3</mn></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msubsup><mi>v</mi><mi>e</mi><mn>3</mn></msubsup><msub><mi>τ</mi><mi>e</mi></msub></mrow><mrow><mn>2</mn><mi>π</mi><mi>G</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orain <math display=\"inline\"><mrow><mi>M</mi><mo>+</mo><mi>m</mi><mo>≈</mo><mi>M</mi></mrow></math> hurbilketa egiteko baldintzetan gaude, eta horrek <math display=\"inline\"><mi>m</mi></math> problemak emandako datuen funtzioan askatzeko aukera emango digu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mo>≈</mo><msub><mi>v</mi><mi>e</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><msup><mi>M</mi><mn>2</mn></msup><msub><mi>τ</mi><mi>e</mi></msub></mrow><mrow><mn>2</mn><mi>π</mi><mi>G</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></msup><mo>=</mo><mn>6.7</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg</mtext></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "[<em>Oharra</em>: Sistemaren O masa-zentroa beti puntu berean geratzen da, eta horregatik izarra eta planeta beti lerrokatuta egongo dira harekin. Horrek esan nahi du, izarraren O masa-zentroarekiko bira-periodoa urte bat bada, planetaren O-rekiko bira-periodoa ere izarrarenaren berdina izango dela]."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Beste metodo bat</em>: Gorputz bakarreko problema baliokideak esaten digu sistemaren higidura azter dezakegula masa laburbilduaren berdina den masa duen gorputz bat balitz bezala, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>M</mi><mi>m</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, elkarrekintza-indarraren berdina den indar zentral baten eraginpean higitzen. Gure kasuan, eta O masa-zentroaren eta izarraren arteko distantzia konstante mantentzen denez (azken honek O-rekiko ibilbide zirkularra deskribatzen du), O-tik planetarako distantzia ere konstante mantenduko da, eta horrela <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mi>e</mi></msub><mo>+</mo><msub><mi>r</mi><mi>p</mi></msub></mrow></math> ere konstantea izango da, eta gorputz laburbilduak zentro fiktizio horrekiko <math display=\"inline\"><mi>r</mi></math> erradioko orbita zirkularra deskribatuko du. Orbita zirkularraren baldintza idatziz, hau izango dugu:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>μ</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>r</mi></mfrac><mo>=</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Erlazio honetatik abiatuta, <math display=\"inline\"><mi>r</mi></math> eta <math display=\"inline\"><mi>v</mi></math> balioak <math display=\"inline\"><msub><mi>r</mi><mi>e</mi></msub></math> eta <math display=\"inline\"><msub><mi>v</mi><mi>e</mi></msub></math>-ren funzioko dagozkien balioez ordezkatuz, goian idatzitako adierazpena berreskuratzen dugu."
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Planeta batek izar baten inguruko orbita zirkularra deskribatzen du, <math display=\"inline\"><msub><mi>E</mi><mn>0</mn></msub></math> energiarekin, <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> momentu angeluarrarekin eta <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiadurarekin. Kometa batekin izandako talka batek orbita elipse bihurtzen du, periastro bera duena, baina afastroa izarretik bost aldiz urrunago kokatuta. Marraztu orbitak eta kalkulatu <math display=\"inline\"><msub><mi>E</mi><mi>f</mi></msub></math> energia, <math display=\"inline\"><msub><mi>l</mi><mi>f</mi></msub></math> momentu angeluarra, eta planetaren abiadurak periastroan eta afastroan."
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Ebazpena (egileak ebatzita eta iruzkinduta)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "[Irudia: ezkerretik eskuinera hiru egoerak irudikatzen dira. (1) Orbita zirkularra, izarra (puntua) zentroan eta planeta ezkerreko P puntuan dituela; azpian, C kometa bere <math display=\"inline\"><msub><mi>v</mi><mi>C</mi></msub></math> abiadurarekin (eskuinerako gezia) hurbiltzen. (2) Talkaren unea: trazu-zirkunferentzia bat eta trazu-elipse bat, beheko periastroa partekatzen dutenak, izarra (puntua) barruan dutela; azpian C P etiketak (kometa eta periastroa bat datoz). (3) Orbita eliptikoa (trazu jarraitua), izarra (puntua) foku batean eta planeta eskuineko P puntuan dituela; azpian, C kometa bere <math display=\"inline\"><msubsup><mi>v</mi><mi>C</mi><mo>′</mo></msubsup></math> abiadurarekin (eskuinerako gezia).]"
    },
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "Irudian testuan adierazitako hiru egoerak erakusten dira: talkaren aurreko une bat, talkaren unea, eta talkaren ondorengo une bat. Planeta soilik kontuan hartuta, haren energia osoa, energia zinetikoaren eta potentzialaren batura, gainera, <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>/</mi><mn>2</mn><mi>a</mi></mrow></math> da, <math display=\"inline\"><mi>k</mi></math> indar-eremuaren konstantea delarik (hemen <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>G</mi><mi>M</mi><mi>m</mi></mrow></math>, non <math display=\"inline\"><mi>G</mi></math> grabitazio unibertsalaren konstantea den, <math display=\"inline\"><mi>M</mi></math> izarraren masa eta <math display=\"inline\"><mi>m</mi></math> planetaren masa) eta <math display=\"inline\"><mi>a</mi></math> orbitaren ardatzerdi nagusia (hemen, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>R</mi></mrow></math>), distantziaren karratuarekiko alderantziz proportzionala den indar-eremu bateko orbita itxien kasurako teoriak dioen bezala. Erlazio honek, aldi berean, orbita zirkularreko <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiaduraren balioak haren erradioaren funtzioan zehazteko aukera emango digu, <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> momentu angeluarra bezalaxe:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mi>R</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><mi>R</mi></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>l</mi><mn>0</mn></msub><mo>=</mo><mi>m</mi><msub><mi>v</mi><mn>0</mn></msub><mi>R</mi><mo>=</mo><mi>m</mi><msqrt><mrow><mi>G</mi><mi>M</mi><mi>R</mi></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Talkaren ondoren, planetak bere ibilbidea aldatzen du aurreko orbita zirkularraren erradioaren bost aldizko afastroa duen elipse bihurtu arte. Gainera, planetak bere masa aldatzen ez duela suposatuko dugu (kometak talkaren ondoren bere ibilbidea jarraitzen du, abiadura desberdin batekin). Orbita berria itxia izaten jarraitzen du, eta aurreko kasurako bezalako erlazio bera aplika diezaiokegu. Hau da, energia osoa orbita berriaren ardatzerdi nagusiaren funtzioa da, <math display=\"inline\"><mrow><msup><mi>a</mi><mo>′</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>+</mo><mn>5</mn><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn><mo>=</mo><mn>3</mn><mi>R</mi></mrow></math>. Beraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mi>f</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mi>r</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><msup><mi>a</mi><mo>′</mo></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mrow><mn>6</mn><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><msub><mi>E</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "orbita berriko edozein puntutan konstantea den balioa. Bereziki, periastroari eta afastroari aplikatzen badiegu, planeta horien abiadura lor dezakegu puntu horietan eta, ondorioz, momentu angeluar berria. Puntu horietako abiadurei <math display=\"inline\"><msub><mi>v</mi><mi>p</mi></msub></math> eta <math display=\"inline\"><msub><mi>v</mi><mi>a</mi></msub></math> deituz:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/88060ca777b4c213.svg\" alt=\"v_p = v #scale(x: 120%, y: 120%)[\\|]_(r = R) = sqrt(frac(5 G M, 3 R)) = sqrt(5 / 3) thin v_0\" style=\"width:16.056em;height:3.069em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/33a4ec9f28ceb3c9.svg\" alt=\"v_a = v #scale(x: 120%, y: 120%)[\\|]_(r = 5 R) = sqrt(frac(G M, 15 R)) = 1 / sqrt(15) thin v_0\" style=\"width:16.349em;height:3.251em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>l</mi><mi>f</mi></msub><mo>=</mo><mi>m</mi><msub><mi>v</mi><mi>p</mi></msub><mi>R</mi><mo>=</mo><mi>m</mi><msub><mi>v</mi><mi>a</mi></msub><mn>5</mn><mi>R</mi><mo>=</mo><msqrt><mfrac><mn>5</mn><mn>3</mn></mfrac></msqrt><mspace width=\"0.167em\"></mspace><msub><mi>l</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Talka gertatzeko modura itzuliz, suposatu dugu bultzada planetak periastroan higitzen den noranzko berean gertatzen dela eta, beraz, talkaren ondoren periastroa bera izaten jarraitzen duela. Kometaren ondorengo higidurari dagokionez, emandako datuekin ezin izango dugu haren ondorengo ibilbidea zehatzago mugatu (ez dakigu talkaren"
    },
    {
     "mota": "testua",
     "html": "<em>inelastikotasun</em>"
    },
    {
     "mota": "testua",
     "html": "maila, eta horregatik ez dakigu kometak aurrera jarraitzen duen ala atzera errebotatzen duen)."
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>m</mi></math> masako satelite batek <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiadurarekin <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math> erradioko orbita zirkularra deskribatzen du, O puntu batean finkatuta dagoen <math display=\"inline\"><mi>M</mi></math> masa baten indar grabitatorioaren eraginpean. Orbitaren B puntu batean, satelitearen higiduraren norabidea bat-batean aldatzen da <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiaduraren modulua konstante mantenduz. Horren ondorioz, satelitea orbita eliptiko batera pasatzen da. Orbita eliptiko horretan, satelitea O puntu finkotik aurkitzen den distantzia minimoa <math display=\"inline\"><mrow><msub><mi>r</mi><mn>0</mn></msub><mi>/</mi><mn>5</mn></mrow></math> da. a) Zein da puntu horretan satelitearen abiadura <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>-ren funtzioan? b) Zein da B puntuan abiadura biratu zen <math display=\"inline\"><mi>α</mi></math> angelua?"
    },
    {
     "mota": "testua",
     "html": "[Irudia: O-n zentraturiko zirkunferentzia (<math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math> erradioko orbita zirkularra). Goiko aldean, B puntua; B-tik <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> etiketatutako trazu-gezi horizontal bat abiatzen da (jatorrizko abiadura, orbitarekiko ukitzailea) eta, harekin <math display=\"inline\"><mi>α</mi></math> angelua osatuz, <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> etiketatutako gezi bete bat behera-eskuinera zuzendua (norabide-aldaketaren ondorengo abiadura). Erradio horizontala <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math> etiketatua dago; zentrotik P puntura <math display=\"inline\"><mrow><msub><mi>r</mi><mn>0</mn></msub><mi>/</mi><mn>5</mn></mrow></math> etiketatzen da. Zirkunferentziaren beheko eskuineko aldean P puntua (perigeoa) dago, B-tik eta P-tik pasatzen den orbita eliptikoaren muturra.]"
    }
   ]
  },
  {
   "id": "a17",
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
     "html": "<math display=\"inline\"><mi>M</mi></math> masa baten eragin grabitatorioaren pean <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math> distantzian <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiadurarekin orbita zirkularra izateko baldintzak <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> beste magnitude batzuen funtzioan adierazteko aukera ematen digu. Beraz, erakarpen grabitatorioaren indarra indar zentripetuaren berdintzat jarriz, hona iristen gara:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>G</mi><mfrac><mrow><mi>M</mi><mi>m</mi></mrow><msubsup><mi>r</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><mo>=</mo><mi>m</mi><mfrac><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><msub><mi>r</mi><mn>0</mn></msub></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><msub><mi>r</mi><mn>0</mn></msub></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Abiadurari norabide-aldaketa hori eman zaionean, modulua aldatu gabe, B puntuko energia osoa konstante mantentzen da, ez baita aldatzen ez energia zinetikoa ez potentziala. Energiaren kontserbazio-printzipioa erabiliz ibilbide berri honetan, P puntuan (perigeoa, gehieneko hurbilketa-puntua), non <math display=\"inline\"><mrow><msub><mi>r</mi><mi>P</mi></msub><mo>=</mo><msub><mi>r</mi><mi>m</mi></msub><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub><mi>/</mi><mn>5</mn></mrow></math> den (<math display=\"inline\"><mrow><msub><mi>r</mi><mi>m</mi></msub><mo>=</mo></mrow></math> distantzia minimoa), eta B puntuan, non bultzada jasotzen duen, honela idatziko dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><msub><mi>r</mi><mn>0</mn></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mi>P</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mrow><msub><mi>r</mi><mn>0</mn></msub><mi>/</mi><mn>5</mn></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mi>P</mi></msub><mo>=</mo><mn>3</mn><msqrt><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><msub><mi>r</mi><mn>0</mn></msub></mfrac></msqrt><mo>=</mo><mn>3</mn><msub><mi>v</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "B puntuan momentu angeluarra ez bada ere kontserbatzen bultzadaren aurreko eta ondorengoaren artean, behin jasota, momentu angeluar berria ibilbide osoan zehar kontserbatzen da. Ibilbide berriko bi puntuei aplikatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>r</mi><mn>0</mn></msub><mo>⋅</mo><mi>m</mi><msub><mi>v</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mfrac><msub><mi>r</mi><mn>0</mn></msub><mn>5</mn></mfrac><mi>m</mi><msub><mi>v</mi><mi>P</mi></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>m</mi><msub><mi>r</mi><mn>0</mn></msub><msub><mi>v</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><mi>m</mi><msub><mi>r</mi><mn>0</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>α</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mfrac><mn>3</mn><mn>5</mn></mfrac><mo>=</mo><mn>53</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>"
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Indar zentral baten eraginpean, partikula batek <math display=\"inline\"><mi>R</mi></math> erradioko orbita zirkularra deskribatzen du, indar-zentroa zirkunferentziaren puntu batean egonik. Aurkitu orbitaren ekuazio polarra <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta energia potentziala <math display=\"inline\"><mi>V</mi></math>. Komenta dezakezu laburki problema?"
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Ebazpena (egileak ebatzita eta iruzkinduta)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "[Irudia: jatorritik <math display=\"inline\"><mi>O</mi></math> pasatzen den zirkunferentzia (orbita); ardatz kartesiarrak <math display=\"inline\"><mi>x</mi></math> (horizontala, eskuinerantz, ardatz polarra) eta <math display=\"inline\"><mi>y</mi></math> (bertikala) <math display=\"inline\"><mi>O</mi></math> jatorriarekin, zeina zirkunferentzia beraren gainean kokatutako indar-zentroa den. <math display=\"inline\"><mi>O</mi></math>-tik <math display=\"inline\"><mi>r</mi></math> bektorea abiatzen da zirkunferentzian dagoen <math display=\"inline\"><mi>m</mi></math> partikularaino, <math display=\"inline\"><mi>θ</mi></math> angelu polarra osatuz <math display=\"inline\"><mi>x</mi></math> ardatzarekin; segmentu horren gainean, <math display=\"inline\"><mi>m</mi></math>-ren ondoan, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> indarra markatzen da. <math display=\"inline\"><mi>R</mi></math> erradioa da, zirkunferentziaren zentrotik abiatzen den segmentu horizontal gisa adierazita (<math display=\"inline\"><mi>x</mi></math> ardatzaren gaineko trazu-proiekzioarekin).]"
    },
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "Irudian, ardatz polarraren norabidea indar-zentroaren <math display=\"inline\"><mi>O</mi></math> jatorriari dagokion orbita zirkularraren diametroarekin bat etorrarazi dugu. Egoera horretan, orbitaren ekuazioa koordenatu polarretan honakoa da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mn>2</mn><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Problema hainbat modutan jarrai dezakegu. Lehenik eta behin prozedura orokorrena erabiliko dugu. Indarra zentrala denez, indar osoa indar erradialarekin bat etorriko da, zeinak, koordenatu polarretan adierazita, honako balioa izango duen:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><msub><mi>F</mi><mi>r</mi></msub><mo>=</mo><mi>m</mi><msub><mi>a</mi><mi>r</mi></msub><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>r</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Zeharkako indarra nulua izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>F</mi><mi>θ</mi></msub><mo>=</mo><mi>m</mi><msub><mi>a</mi><mi>θ</mi></msub><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>r</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>m</mi><mi>r</mi></mfrac><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext><mo>=</mo><mfrac><mi>l</mi><mi>m</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mi>l</mi><mrow><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Konstantearen balio gisa bi konstanteen zatidura erabili dugu, <math display=\"inline\"><mfrac><mi>l</mi><mi>m</mi></mfrac></math>, non <math display=\"inline\"><mi>l</mi></math> <em>momentu angeluar</em> gisa ezagutzen dugunarekin identifikatzen dugun, magnitude hori ere, beraz, era berean konstantea izango delarik. Kontu handiz egingo dugu lan <math display=\"inline\"><msub><mi>a</mi><mi>r</mi></msub></math> azelerazio erradiala osatzen duten bi terminoak kalkulatzeko. Beraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mn>2</mn><mi>R</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>R</mi><mi>l</mi></mrow><mi>m</mi></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>R</mi><mi>l</mi></mrow><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>r</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><msup><mi>r</mi><mn>3</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>−</mi><mfrac><msup><mi>l</mi><mn>2</mn></msup><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>r</mi><mn>3</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mrow><mn>8</mn><msup><mi>l</mi><mn>2</mn></msup><msup><mi>R</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>r</mi><mn>5</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non agertzen zihoazen <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> eta <math display=\"inline\"><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></math> balioak segidan ordezkatzen joan garen. Beraz, azelerazio erradialaren balioa honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>r</mi></msub><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>r</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mi>−</mi><mfrac><msup><mi>l</mi><mn>2</mn></msup><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>r</mi><mn>3</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mrow><mn>8</mn><msup><mi>l</mi><mn>2</mn></msup><msup><mi>R</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>r</mi><mn>5</mn></msup></mrow></mfrac><mo>−</mo><mfrac><msup><mi>l</mi><mn>2</mn></msup><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>r</mi><mn>3</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mn>8</mn><msup><mi>l</mi><mn>2</mn></msup><msup><mi>R</mi><mn>2</mn></msup></mrow><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>r</mi><mn>5</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau da:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/0f1a0682bc38418a.svg\" alt=\"F = F_r = m a_r = - frac(8 l^2 R^2, m) 1 / r^5 = - k / r^5 #h(2em) \\[ k &gt; 0 \\]\" style=\"width:23.754em;height:2.760em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Beraz, indar zentral erakarlea da (izan ere <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math>), indar-zentrorako distantziaren bosgarren potentziarekiko alderantziz proportzionala. Dagokion energia potentziala eremu kontserbatzaile batean potentzialaren eta indarraren arteko erlaziotik lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mo>∫</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>r</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>4</mn><msup><mi>r</mi><mn>4</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><msup><mi>l</mi><mn>2</mn></msup><msup><mi>R</mi><mn>2</mn></msup></mrow><mi>m</mi></mfrac><mfrac><mn>1</mn><msup><mi>r</mi><mn>4</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Beste metodo bat</em>: Abia gaitezen zuzenean orbitaren ekuazio diferentzialetik, haren bi modalitateetako edozeinetan: bigarren kidea indar-legearen funtzioa delarik, edo energia potentzialaren funtzioa. Gogoratuz:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><msup><mi>l</mi><mn>2</mn></msup><msup><mi>u</mi><mn>2</mn></msup></mrow><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>d</mi><msup><mi>θ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>r</mi></mfrac></mrow></math> den eta <math display=\"inline\"><mi>l</mi></math> aurreko atalean bezalako esanahia duen. Kalkulatu behar dugu, beraz, <math display=\"inline\"><mi>u</mi></math>-ren bigarren deribatua <math display=\"inline\"><mi>θ</mi></math> angelu polarrarekiko eta kortxetean adierazitako eragiketa egin:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/b034770ba8d40590.svg\" alt=\"u = frac(1, 2 R) sec theta #h(2em) frac(dif u, dif theta) = frac(1, 2 R) frac(sin theta, cos^2 theta) #h(2em) frac(d^2 u, dif theta^2) = frac(1, 2 R) frac(1 + sin^2 theta, cos^3 theta)\" style=\"width:29.291em;height:2.773em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>d</mi><msup><mi>θ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mn>1</mn><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mi>R</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>8</mn><msup><mi>R</mi><mn>2</mn></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></mfrac><mo>=</mo><mn>8</mn><msup><mi>R</mi><mn>2</mn></msup><msup><mi>u</mi><mn>3</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mn>8</mn><msup><mi>R</mi><mn>2</mn></msup><msup><mi>l</mi><mn>2</mn></msup><msup><mi>u</mi><mn>5</mn></msup></mrow><mi>m</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mn>8</mn><msup><mi>R</mi><mn>2</mn></msup><msup><mi>l</mi><mn>2</mn></msup></mrow><mi>m</mi></mfrac><mfrac><mn>1</mn><msup><mi>r</mi><mn>5</mn></msup></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>r</mi><mn>5</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "lehen bezala. Metodo hau, ikus daitekeenez, aurrekoa baino askoz eraginkorragoa da eta azken emaitzara inolako zailtasunik gabe iristeko aukera ematen du."
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "(verbatim)"
    },
    {
     "mota": "testua",
     "html": "Bi satelite, bakoitza <math display=\"inline\"><mi>m</mi></math> masakoa, Lurraren inguruan higitzen dira orbita zirkular koplanarioetan. Barneko orbitaren erradioa <math display=\"inline\"><mrow><mn>3</mn><mi>R</mi></mrow></math> da eta kanpokoarena <math display=\"inline\"><mrow><mn>4</mn><mi>R</mi></mrow></math>, <math display=\"inline\"><mi>R</mi></math> Lurraren erradioa delarik. <math display=\"inline\"><mi>R</mi></math> luzerako hari batek bi sateliteak lotzen ditu eta elkarrekin higiarazten ditu Lurraren inguruan, aipatutako orbitetan irauten duten bitartean. Aurkitu sateliteen periodo komuna eta lotura-hariak jasaten duen indarra."
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Ebazpena (egileak ebatzita eta iruzkinduta)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "(verbatim, con ecuaciones)"
    },
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "Satelite bakoitzaren gainean eragiten duten indarrak bigarren irudian erakusten direnak dira, lehenengoan egoera orokorra ikusten delarik. <math display=\"inline\"><msub><mi>F</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>F</mi><mn>2</mn></msub></math> izendatutakoak Lurrak, zeinaren zentroa barneko masatik <math display=\"inline\"><mrow><mn>3</mn><mi>R</mi></mrow></math> distantziara baitago, biei egiten dizkien indar grabitatorioak dira, eta <math display=\"inline\"><mi>T</mi></math> deiturikoak, moduluan, zeinua kontrakoa bada ere, bi masak <math display=\"inline\"><mi>R</mi></math> distantzia konstantean mantentzen dituen hariaren tentsioa da. Ez dugu kontuan hartzen bi masen arteko elkarrekintza grabitatorioa, haien arteko distantzia handia dela eta (Lurraren erradio bat), hariaren tentsioarekin alderatuta garrantzirik gabea izango bailitzateke. Bi partikulen gaineko indar grabitatorioen balioak, balio absolutuan, honakoak dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/0fb76a9be8757fd8.svg\" alt=\"F_1 = G frac(M m, 9 R^2) #h(2em) F_2 = G frac(M m, 16 R^2)\" style=\"width:15.033em;height:2.605em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Aplika diezaiogun masa bakoitzari Newtonen bigarren legea, bakoitzaren higidura zirkular uniformea dela kontuan hartuta, eta horregatik azelerazio normala soilik duela, gainera Lurraren inguruko biraketaren abiadura angeluarra bera dela ezarriz:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/6e516b7b9621a0b9.svg\" alt=\"F_1 - T = m omega^2 dot.op 3 R #h(2em) F_2 + T = m omega^2 dot.op 4 R\" style=\"width:21.620em;height:1.455em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Bien baturaretik, <math display=\"inline\"><mi>T</mi></math> ezabatzen dugu, eta horrek lehen unean Lurrarekiko biraketaren periodo bateratua kalkulatzeko aukera ematen digu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>F</mi><mn>1</mn></msub><mo>+</mo><msub><mi>F</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>25</mn><mn>144</mn></mfrac><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><msup><mi>R</mi><mn>2</mn></msup></mfrac><mo>=</mo><mn>7</mn><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>R</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>25</mn><mn>1008</mn></mfrac><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><msup><mi>R</mi><mn>3</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup></mrow><msup><mi>τ</mi><mn>2</mn></msup></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>τ</mi><mo>=</mo><mfrac><mrow><mn>24</mn><mi>π</mi></mrow><mn>5</mn></mfrac><msqrt><mfrac><mrow><mn>7</mn><msup><mi>R</mi><mn>3</mn></msup></mrow><mrow><mi>G</mi><mi>M</mi></mrow></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Newtonen bigarren legeak emandako bi higidura-ekuazioetako edozeinetan lortutako <math display=\"inline\"><mi>ω</mi></math> balioa ordezkatuz, hariaren tentsioaren balioa lortuko dugu. Adibidez, lehenengoetik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msub><mi>F</mi><mn>1</mn></msub><mo>−</mo><mn>3</mn><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>R</mi><mo>=</mo><mfrac><mn>37</mn><mn>1008</mn></mfrac><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><msup><mi>R</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "line(start: (25%,0%), end: (75%,0%))"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Figuras (deskribapena; jatorrizkoak marrazkiak dira)"
    },
    {
     "mota": "testua",
     "html": ""
    },
    {
     "mota": "testua",
     "html": "<strong>1. irudia (egoera orokorra).</strong>"
    },
    {
     "mota": "testua",
     "html": "Lurra <math display=\"inline\"><mi>R</mi></math> erradioko zirkulu gisa marraztuta (zentroa markatuta, &quot;<math display=\"inline\"><mi>R</mi></math>&quot; etiketa eta &quot;<math display=\"inline\"><mi>T</mi></math>&quot; etiketa). Bertatik, &quot;<math display=\"inline\"><mrow><mn>2</mn><mi>R</mi></mrow></math>&quot; etiketatutako erradial-lerro etendun bat barneko &quot;<math display=\"inline\"><mi>m</mi></math>&quot; masaraino iristen da; hemendik &quot;<math display=\"inline\"><mi>R</mi></math>&quot; etiketatutako segmentu labur bat (haria) kanpoko &quot;<math display=\"inline\"><mi>m</mi></math>&quot; masaraino iristen da. Arku etendunek bi orbitak irudikatzen dituzte."
    },
    {
     "mota": "testua",
     "html": "<strong>2. irudia (indarrak).</strong>"
    },
    {
     "mota": "testua",
     "html": "Bi &quot;<math display=\"inline\"><mi>m</mi></math>&quot; masak erradial-lerro etendun berean, orbitak arku etendun gisa eta &quot;<math display=\"inline\"><mrow><mn>3</mn><mi>R</mi></mrow></math>&quot; (barneko masaraino) eta &quot;<math display=\"inline\"><mi>R</mi></math>&quot; (bi masen artean) distantziak markatuta. Barneko masaren gainean: <math display=\"inline\"><msub><mi>F</mi><mn>1</mn></msub></math> (grabitatorioa, Lurrerantz) eta <math display=\"inline\"><mi>T</mi></math> (tentsioa, kanpoko masarantz). Kanpoko masaren gainean: <math display=\"inline\"><msub><mi>F</mi><mn>2</mn></msub></math> (grabitatorioa, Lurrerantz) eta <math display=\"inline\"><mi>T</mi></math> (tentsioa, barneko masarantz)."
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "(verbatim)"
    },
    {
     "mota": "testua",
     "html": "<strong>98Jun02.</strong>"
    },
    {
     "mota": "testua",
     "html": "Masa bereko <math display=\"inline\"><mi>m</mi></math> bi satelite bi orbita koplanariotan higitzen dira, noranzko berean, Lurraren inguruan. Orbitetako bat <math display=\"inline\"><mi>R</mi></math> erradioko zirkularra da eta bestea eliptikoa, apogeo eta perigeo distantziak <math display=\"inline\"><mrow><mn>8</mn><mi>R</mi></mrow></math> eta <math display=\"inline\"><mi>R</mi></math> dituelarik, hurrenez hurren. Bi sateliteak haien orbiten ukipen-puntuan, P perigeoan, bat datoz, eta elkarri akoplatzen zaizkio elkarrekin lotuta higitzen jarraitzeko. Aurkitu orbita berriaren ezaugarriak."
    },
    {
     "mota": "testua",
     "html": "<em>(Irudia: elipse bat, perigeoan ukitzailea den barneko\nzirkunferentzia batekin. Ezkerretik eskuinera, ardatzaren gainean: A\n(apogeoa, elipsearen ezkerreko muturra), <math display=\"inline\"><mrow><mn>8</mn><mi>R</mi></mrow></math> etiketatutako segmentua,\n&quot;Tierra&quot; etiketatutako O zentroa, <math display=\"inline\"><mi>R</mi></math> etiketatutako segmentua, eta P\n(perigeoa, eskuineko muturra). Ibilbideen gaineko gezi batek\nbira-noranzkoa adierazten du, bi orbitentzat komuna.)</em>"
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Ebazpena (egileak ebatzita eta iruzkinduta)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "(verbatim, con ecuaciones)"
    },
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "Lehen pauso gisa bi sateliteen abiaduren balioak jakin behar ditugu perigeoan, orbiten datuetatik abiatuta. 1 azpiindizearekin orbita zirkularra eta 2 azpiindizearekin eliptikoa zehazten baditugu, aipatutako abiadurak, hurrenez hurren, <math display=\"inline\"><msub><mi>v</mi><mrow><mn>1</mn><mi>P</mi></mrow></msub></math> eta <math display=\"inline\"><msub><mi>v</mi><mrow><mn>2</mn><mi>P</mi></mrow></msub></math> izango dira. Orbita zirkularrean, virialaren teorema erabil dezakegu <math display=\"inline\"><msub><mi>v</mi><mrow><mn>1</mn><mi>P</mi></mrow></msub></math> kalkulatzeko, gainera kasu honetan orbita batean zehar energia zinetikoaren eta potentzialaren batez besteko balioak unean-unekoekin bat baitatoz. Hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>V</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>v</mi><mrow><mn>1</mn><mi>P</mi></mrow><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mrow><mn>1</mn><mi>P</mi></mrow></msub><mo>=</mo><msqrt><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><mi>R</mi></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>M</mi></math> Lurraren masa delarik. Orbita eliptikorako energiaren eta momentu angeluarraren kontserbazio-printzipioak erabiliko ditugu ibilbidearen mutur-puntuetan <math display=\"inline\"><msub><mi>v</mi><mrow><mn>2</mn><mi>P</mi></mrow></msub></math> kalkulatzeko. Beraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">{</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>v</mi><mrow><mn>2</mn><mi>P</mi></mrow><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mi>R</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>v</mi><mrow><mn>2</mn><mi>A</mi></mrow><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mrow><mn>8</mn><mi>R</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>R</mi><mo>⋅</mo><mi>m</mi><mspace width=\"0.167em\"></mspace><msub><mi>v</mi><mrow><mn>2</mn><mi>P</mi></mrow></msub><mo>=</mo><mn>8</mn><mi>R</mi><mo>⋅</mo><mi>m</mi><mspace width=\"0.167em\"></mspace><msub><mi>v</mi><mrow><mn>2</mn><mi>A</mi></mrow></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mrow><mn>2</mn><mi>P</mi></mrow></msub><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><msqrt><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><mi>R</mi></mfrac></msqrt><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><msub><mi>v</mi><mrow><mn>1</mn><mi>P</mi></mrow></msub></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "P-ko talka erabat inelastikoa da, izan ere ondoren bi sateliteak elkarrekin aterako baitira <math display=\"inline\"><msub><mi>v</mi><mi>P</mi></msub></math> abiadurarekin, momentu linealaren kontserbaziotik zehaztu daitekeena:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mspace width=\"0.167em\"></mspace><msub><mi>v</mi><mrow><mn>1</mn><mi>P</mi></mrow></msub><mo>+</mo><mi>m</mi><mspace width=\"0.167em\"></mspace><msub><mi>v</mi><mrow><mn>2</mn><mi>P</mi></mrow></msub><mo>=</mo><mn>2</mn><mi>m</mi><mspace width=\"0.167em\"></mspace><msub><mi>v</mi><mi>P</mi></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mi>P</mi></msub><mo>=</mo><mfrac><mn>7</mn><mn>6</mn></mfrac><msub><mi>v</mi><mrow><mn>1</mn><mi>P</mi></mrow></msub><mo>=</mo><mfrac><mn>7</mn><mn>6</mn></mfrac><msqrt><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><mi>R</mi></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Talkaren puntua orain orbita berriaren atzerapen-puntuetako bat da, multzoaren ondoriozko abiadurak P puntu horretan sarrerako bien norabide bera izango duelako eta, biak P-n erradio-bektorearekiko perpendikularrak zirenez, <math display=\"inline\"><msub><mi>v</mi><mi>P</mi></msub></math> ere <math display=\"inline\"><msub><mi>r</mi><mi>P</mi></msub></math>-rekiko perpendikularra izango delako eta puntu horretan ez baitago abiadura erradialik. P-ko energia mekanikoaren balioak esango digu orbita eliptikoa ala irekia den. Kalkula dezagun:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><mn>2</mn><mi>m</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>v</mi><mi>P</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mo>⋅</mo><mn>2</mn><mi>m</mi></mrow><mi>R</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>23</mn><mn>36</mn></mfrac><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mi>R</mi></mfrac><mo>&lt;</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Balio hori negatiboa denez, orbita itxia da (eliptikoa). <math display=\"inline\"><msub><mi>r</mi><mi>A</mi></msub></math> deitzen badiogu apogeorako distantziari, non haren abiadura <math display=\"inline\"><msub><mi>v</mi><mi>A</mi></msub></math> den, indar zentralen problemetan ohikoak diren bi kontserbazio-printzipioak erabiliz datuak lor ditzakegu ibilbide berriaren ezaugarriak zehazteko:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">{</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><mn>2</mn><mi>m</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>v</mi><mi>P</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mo>⋅</mo><mn>2</mn><mi>m</mi></mrow><mi>R</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><mn>2</mn><mi>m</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>v</mi><mi>A</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mo>⋅</mo><mn>2</mn><mi>m</mi></mrow><msub><mi>r</mi><mi>A</mi></msub></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>R</mi><mo>⋅</mo><mn>2</mn><mi>m</mi><mspace width=\"0.167em\"></mspace><msub><mi>v</mi><mi>P</mi></msub><mo>=</mo><msub><mi>r</mi><mi>A</mi></msub><mo>⋅</mo><mn>2</mn><mi>m</mi><mspace width=\"0.167em\"></mspace><msub><mi>v</mi><mi>A</mi></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mi>r</mi><mi>A</mi></msub><mo>=</mo><mfrac><mn>49</mn><mn>23</mn></mfrac><mi>R</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>v</mi><mi>A</mi></msub><mo>=</mo><mfrac><mn>23</mn><mn>42</mn></mfrac><msqrt><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><mi>R</mi></mfrac></msqrt></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Orbitaren ezaugarri gehigarri gisa, esango dugu ardatzerdi nagusiak, foku-distantzia erdiak eta eszentrikotasunak, hurrenez hurren, honako balioak dituztela:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/fd058969849537e4.svg\" alt=\"a = frac(r_P + r_A, 2) = 36 / 23 R #h(2em) c = a - r_P = 13 / 23 R #h(2em) epsilon = c / a = 13 / 36\" style=\"width:30.145em;height:2.585em\" loading=\"lazy\">"
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>m</mi></math> masako partikula bat <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac></mrow></math> formako potentzial zentral batean higitzen da. Froga ezazu orbita eliptiko bateko abiadura honakoak ematen duela:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mfrac><mi>k</mi><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>r</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta erabil ezazu adierazpen hori abiadura maximoaren eta minimoaren zatidura eszentrikotasunaren funtzioan aurkitzeko. Zein dira orbita zirkular eta parabolikoetarako dagozkien adierazpenak?"
    }
   ]
  },
  {
   "id": "a25",
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
     "html": "Teoriaren arabera, orbitaren ekuazioa koordenatu polarretan honakoa da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>α</mi><mrow><mn>1</mn><mo>+</mo><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi>α</mi></math> konstante bat den, zeinaren balioa orbitaren ekuazio diferentzialaren ebazpenetik zehazten den, eta momentu angeluar konstantearen funtzioa den. Distantziaren balio minimo eta maximoak <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi></mrow></math> balioei dagozkie. Beraz:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/eff6819b957a2207.svg\" alt=\"r_min = a \\( 1 - epsilon \\) = frac(alpha, 1 + epsilon) #h(2em) r_max = a \\( 1 + epsilon \\) = frac(alpha, 1 - epsilon)\" style=\"width:26.362em;height:2.397em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Bien erdi-batura ardatzerdi nagusiaren <math display=\"inline\"><mi>a</mi></math> berdina da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mrow><msub><mi>r</mi><mi mathvariant=\"normal\">min</mi></msub><mo>+</mo><msub><mi>r</mi><mi mathvariant=\"normal\">max</mi></msub></mrow><mn>2</mn></mfrac><mo>=</mo><mfrac><mi>α</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>ε</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>α</mi></math> eta <math display=\"inline\"><mi>ε</mi></math> balioak <math display=\"inline\"><mi>l</mi></math> momentu angeluarraren eta <math display=\"inline\"><mi>E</mi></math> energiaren funtzioak dira. Zehazki, kantitate horiek honako balioak dituzte:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/ea94675aa9ab8621.svg\" alt=\"alpha = frac(l^2, m k) #h(2em) epsilon^2 = 1 + frac(2 E l^2, m k^2)\" style=\"width:13.883em;height:2.760em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "horrela:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><mi>E</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>E</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Energia kontserbatzen denez, orbitako edozein unetarako honela idatz dezakegu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>−</mo><mfrac><mi>k</mi><mi>r</mi></mfrac><mo>=</mo><mi>E</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>=</mo><msqrt><mrow><mfrac><mi>k</mi><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>r</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Abiaduraren balio minimo eta maximoak <math display=\"inline\"><mrow><msub><mi>r</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>r</mi><mi mathvariant=\"normal\">min</mi></msub><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rako ematen dira, hurrenez hurren. Beraz:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/69726e4eb3f68300.svg\" alt=\"v_min = sqrt(frac(k, m a) [frac(2, 1 + epsilon) - 1]) #h(2em) v_max = sqrt(frac(k, m a) [frac(2, 1 - epsilon) - 1])\" style=\"width:27.595em;height:3.046em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "eta kideka zatituz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>v</mi><mi mathvariant=\"normal\">max</mi></msub><msub><mi>v</mi><mi mathvariant=\"normal\">min</mi></msub></mfrac><mo>=</mo><msqrt><mfrac><mrow><mfrac><mn>2</mn><mrow><mn>1</mn><mo>−</mo><mi>ε</mi></mrow></mfrac><mo>−</mo><mn>1</mn></mrow><mrow><mfrac><mn>2</mn><mrow><mn>1</mn><mo>+</mo><mi>ε</mi></mrow></mfrac><mo>−</mo><mn>1</mn></mrow></mfrac></msqrt><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>ε</mi></mrow><mrow><mn>1</mn><mo>−</mo><mi>ε</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Orbita zirkularra.</em> Kasu honetan, abiadura maximoa minimoarekin bat dator, eta ardatzerdi nagusia erradioarekin: <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>R</mi><mo>=</mo><mi>a</mi></mrow></math>. Beraz:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">min</mi></msub><mo>=</mo><msub><mi>v</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><msqrt><mfrac><mrow><mi>k</mi><mi>m</mi></mrow><mi>a</mi></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mi>k</mi><mi>m</mi></mrow><mi>R</mi></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Orbita parabolikoa.</em> Kasu honetan, ardatzerdi nagusia infinitura jotzen du (energia osoa nulua da) eta abiaduraren adierazpena honakoa da:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>a</mi><mo>→</mo><mi>∞</mi></mrow></munder><msqrt><mrow><mfrac><mi>k</mi><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>r</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mrow><mi>m</mi><mi>r</mi></mrow></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Argi dagoenez, <math display=\"inline\"><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">min</mi></msub><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>r</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>v</mi><mo>=</mo><mn>0</mn></mrow></math>."
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Partikula bat Lurrera hurbiltzen da distantzia handi batetik <math display=\"inline\"><mrow><msub><mi>v</mi><mi>∞</mi></msub><mo>=</mo><msub><mi>v</mi><mi mathvariant=\"normal\">T</mi></msub></mrow></math> hasierako abiadurarekin (Lurraren gainazalaren gainean zuzenean kokatutako orbita zirkularraren abiadura) eta Lurraren zentrotik <math display=\"inline\"><mi>b</mi></math> distantziara dagoen noranzko batean. Zein balio izan behar du <math display=\"inline\"><mi>b</mi></math>-k orbita Lurraren gainazalarekiko ukitzailea izateko? Zein da haren eszentrikotasuna?"
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Ebazpena (egileak ebatzita eta iruzkinduta)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "[Irudia (97. or.): partikularen ibilbidea. <math display=\"inline\"><mrow><msub><mi>v</mi><mi>∞</mi></msub><mo>=</mo><msub><mi>v</mi><mi mathvariant=\"normal\">T</mi></msub></mrow></math> etiketatutako sarrera-lerro horizontala; lerro horretatik zentrotik pasatuko litzatekeen norabideraino dagoen <math display=\"inline\"><mi>b</mi></math> distantzia bertikala (talka-parametroa); <math display=\"inline\"><mi>O</mi></math> zentroko eta <math display=\"inline\"><mi>R</mi></math> erradioko zirkunferentzia; zirkunferentziaren gaineko <math display=\"inline\"><mi>P</mi></math> puntua (gehieneko hurbilketa), zeinetik ibilbidea igarotzen baita, <math display=\"inline\"><mi>O</mi></math>-ren inguruan kurbatuz.]"
    },
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "<em>Virialaren teorema</em> edo <em>Newtonen bigarren legea</em> erabil ditzakegu, lehenik eta behin, <math display=\"inline\"><msub><mi>v</mi><mi mathvariant=\"normal\">T</mi></msub></math> balioa jakiteko. Egin dezagun lehen bidearen bidez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mover><mi>V</mi><mo accent=\"true\">¯</mo></mover><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>V</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mi mathvariant=\"normal\">T</mi><mn>2</mn></msubsup><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mi>R</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "izan ere, orbita zirkularra denez, energia zinetikoaren eta potentzialaren batez besteko balioak unean-uneko balioekin bat datoz. Adierazpen honetan, <math display=\"inline\"><mi>M</mi></math> Lurraren masa da eta <math display=\"inline\"><mi>m</mi></math> partikularena. Beraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">T</mi></msub><mo>=</mo><msqrt><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><mi>R</mi></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Irudian partikularen ibilbidea erakusten da, zeinaren jatorrizko norabidea Lurraren zentrotik pasatuko lukeen norabidetik <math display=\"inline\"><mi>b</mi></math> distantziara baitago (distantzia horri <math display=\"inline\"><mi>b</mi></math> normalean <em>talka-parametro</em> deitzen zaio). Gainera, suposatuko dugu partikula hori, lurreko eremu grabitatorioak desbideratuta, gainazala igurtziz pasatzera iristen dela. Esan behar dugu partikulak deskribatzen duen orbita hiperbola bat dela, haren energia positiboa baita, eta haren higidurari, indar zentral kontserbatzaileen problemen gainerako kasuetan bezala, bi kontserbazio-printzipio aplikatzen zaizkio: energiarena eta momentu angeluarrarena. Egin dezagun P puntuan (gehieneko hurbilketa-puntua) eta infinituan:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/5539e1f7c15755ba.svg\" alt=\"E = 1 / 2 m v_oo^2 = 1 / 2 m v_(upright(P))^2 - frac(G M m, R) #h(2em) l = b dot.op m v_oo = R dot.op m v_(upright(P))\" style=\"width:29.157em;height:2.631em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>v</mi><mi>∞</mi></msub><mo>=</mo><msub><mi>v</mi><mi mathvariant=\"normal\">T</mi></msub></mrow></math> balioa ordezkatuz eta bi ekuazio eta bi ezezaguneko sistema ebatziz, hona iritsiko gara:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/b6be812e493637da.svg\" alt=\"v_(upright(P)) = sqrt(3) thin v_(upright(T)) #h(2em) b = sqrt(3) thin R\" style=\"width:13.044em;height:1.617em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Orbitaren eszentrikotasuna energia mekanikoaren <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mi mathvariant=\"normal\">T</mi><mn>2</mn></msubsup></mrow></math>, momentu angeluarraren <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><msqrt><mn>3</mn></msqrt><mspace width=\"0.167em\"></mspace><mi>m</mi><mi>R</mi><msub><mi>v</mi><mi mathvariant=\"normal\">T</mi></msub></mrow></math> eta eremuaren indar-konstantearen <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>G</mi><mi>M</mi><mi>m</mi></mrow></math> funtzioan adierazten da honela:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ε</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mfrac><mrow><mn>2</mn><mi>E</mi><msup><mi>l</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac></mrow></msqrt><mo>=</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mfrac><mrow><mn>2</mn><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mi mathvariant=\"normal\">T</mi><mn>2</mn></msubsup><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mn>3</mn></msqrt><mspace width=\"0.167em\"></mspace><mi>m</mi><mi>R</mi><msub><mi>v</mi><mi mathvariant=\"normal\">T</mi></msub><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>G</mi><mi>M</mi><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac></mrow></msqrt><mo>=</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mn>3</mn></mrow></msqrt><mo>=</mo><mn>2</mn></mrow></math>"
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Satelite artifizial bat Lurraren zentroaren inguruko orbita zirkularra deskribatzen ari da <math display=\"inline\"><mrow><mn>2</mn><mi>R</mi></mrow></math> distantzian. Une jakin batean, kohete baten bidez abiadura-bultzada erradial bat komunikatzen zaio bat-batean. Horren ondorioz, satelitea orbita paraboliko bat deskribatzera pasatzen da. Zehaztu koheteak emandako abiadura-bultzadaren magnitudea eta orbita paraboliko berriaren Lurrerako gutxieneko distantzia (perigeoa)."
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Ebazpena (egileak ebatzita eta iruzkinduta)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "[irudia: Lurra <math display=\"inline\"><mi>O</mi></math>-n zentraturiko <math display=\"inline\"><mi>R</mi></math> erradioko zirkulu gisa irudikatuta, <math display=\"inline\"><mi>M</mi></math> masa barruan eta &quot;Tierra&quot; etiketa duela. <math display=\"inline\"><mi>O</mi></math>-tik bi erradio abiatzen dira: bat <math display=\"inline\"><mrow><mn>2</mn><mi>R</mi></mrow></math> luzerakoa <math display=\"inline\"><mi>P</mi></math> punturaino (non satelitearen <math display=\"inline\"><mi>m</mi></math> masa dagoen), eta beste bat <math display=\"inline\"><msub><mi>r</mi><mi mathvariant=\"normal\">m</mi></msub></math> luzerakoa <math display=\"inline\"><mi>Q</mi></math> punturaino. Ibilbide parabolikoa <math display=\"inline\"><mi>Q</mi></math>-tik eta <math display=\"inline\"><mi>P</mi></math>-tik pasatzen da. <math display=\"inline\"><mi>Q</mi></math>-n <math display=\"inline\"><msub><mi>v</mi><mi>Q</mi></msub></math> abiadura-bektorea marrazten da (ukitzailea, gora-ezkerra). <math display=\"inline\"><mi>P</mi></math>-n trazu etenduneko bektoreen triangelu/paralelogramo bat marrazten da: <math display=\"inline\"><msub><mi>v</mi><mi>c</mi></msub></math> abiadura zirkularra (ukitzailea, behera-eskuinera), <math display=\"inline\"><mi>A</mi></math> bultzada erradiala (erradioaren zehar, kanporantz) eta <math display=\"inline\"><msub><mi>v</mi><mi>P</mi></msub></math> ondoriozko abiadura; <math display=\"inline\"><msub><mi>v</mi><mi>c</mi></msub></math> eta <math display=\"inline\"><msub><mi>v</mi><mi>P</mi></msub></math> artean <math display=\"inline\"><mi>α</mi></math> angelua markatuta agertzen da.]"
    },
    {
     "mota": "testua",
     "html": "<strong>[R.]</strong>"
    },
    {
     "mota": "testua",
     "html": "Satelitea bere ibilbide zirkularraren P puntuan dago <math display=\"inline\"><mi>A</mi></math> gisa kuantifikatuko dugun abiadura-bultzada erradiala jasotzen duenean. Horrek abiadurak, bere moduluan aldaketa bat izateaz gain, <math display=\"inline\"><msub><mi>v</mi><mi>c</mi></msub></math>-tik <math display=\"inline\"><msub><mi>v</mi><mi>P</mi></msub></math>-ra pasatuz, norabidean ere aldaketa bat izatea eragiten du, <math display=\"inline\"><mi>α</mi></math> angelu batez kanporantz okertuz."
    },
    {
     "mota": "testua",
     "html": "Sateliteak orbita zirkular horretan duen abiadura eta energia hainbat prozeduraren bidez kalkula ditzakegu. Sinpleena erakarpen-indarra indar zentripetuaren berdintzat jartzea da. Moduluan, honela idatz dezakegu:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/1b505e56991e08b0.svg\" alt=\"frac(G M m, \\( 2 R \\)^2) = m thin frac(v_c^2, 2 R) #h(2em) arrow.r #h(2em) v_c^2 = frac(G M, 2 R)\" style=\"width:18.898em;height:3.034em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Eta energia mekaniko osoari dagokionez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><mi>m</mi><msubsup><mi>v</mi><mi>c</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mrow><mn>4</mn><mi>R</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>A</mi></math> magnitudeako abiadura-bultzada erradialaren bidez orbita parabolikora pasatzean, energia zinetikoa aldatzen da (eta harekin batera energia osoa), baina momentu angeluarra ez da aldatzen. Orbita parabolikoaren baldintza haren energia mekanikoa nulua izatea denez, energia zinetikoaren gehikuntza zehazki honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/28ba95295303b025.svg\" alt=\"E + Delta E = 0 = 1 / 2 thin m \\( v_c^2 + A^2 \\) - frac(G M m, 2 R) #h(2em) arrow.r #h(2em) A = sqrt(frac(G M, 2 R))\" style=\"width:31.481em;height:3.046em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "satelitearen abiadurarekin orbita zirkularrean zehazki bat datorrena. Beraz, beste emaitza berehalako bat abiadura-bultzada horrek sateliteari ematen dion <math display=\"inline\"><mi>α</mi></math> desbideratze-angelua da:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/913fd36133937faa.svg\" alt=\"tan alpha = A / v_c = 1 #h(2em) arrow.r #h(2em) alpha = pi / 4 med upright(&quot;rad&quot;) = 45 degree\" style=\"width:21.832em;height:2.912em\" loading=\"lazy\">"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Gehieneko hurbilketaren distantzia.</em> Lehen esan dugun bezala, bultzada erradialak ez du momentu angeluarra aldatzen. Energiaren (orbita berrian) eta momentu angeluarraren kontserbazio-printzipioak P eta Q puntuetan aplikatzen baditugu, honela idatziko dugu:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><mi>m</mi><msubsup><mi>v</mi><mi>Q</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><msub><mi>r</mi><mi mathvariant=\"normal\">m</mi></msub></mfrac><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>r</mi><mi mathvariant=\"normal\">m</mi></msub><mo>⋅</mo><mi>m</mi><msub><mi>v</mi><mi>Q</mi></msub><mo>=</mo><mn>2</mn><mi>R</mi><mo>⋅</mo><mi>m</mi><msub><mi>v</mi><mi>P</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>2</mn><mi>R</mi><mo>⋅</mo><mi>m</mi><msub><mi>v</mi><mi>c</mi></msub><mo>=</mo><mi>m</mi><msqrt><mrow><mn>2</mn><mi>G</mi><mi>M</mi><mi>R</mi></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bigarrenean <math display=\"inline\"><msub><mi>v</mi><mi>Q</mi></msub></math> askatuz eta lehenengora eramanez, sinplifikatu ondoren honela geratzen da:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/ad26177266254bfb.svg\" alt=\"v_Q = sqrt(2 G M R) / r_(upright(m)) #h(2em) arrow.r #h(2em) r_(upright(m)) = R\" style=\"width:17.532em;height:3.161em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Hau da, orbita berria Lurrarekiko ukitzailea dela gertatzen da perigeoan."
    }
   ]
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>m</mi></math> masako satelite batek <math display=\"inline\"><mrow><mn>2</mn><mi>R</mi></mrow></math> erradioko orbita zirkularra deskribatzen du Lurraren inguruan (<math display=\"inline\"><mi>R</mi></math> erradioa). Une batean, <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>a</mi><mi>m</mi><msub><mi>g</mi><mn>0</mn></msub></mrow></math> magnitude konstantea duen indar bat aplikatzen hasten zaio, non <math display=\"inline\"><mi>a</mi></math> konstante bat den eta <math display=\"inline\"><msub><mi>g</mi><mn>0</mn></msub></math> lurreko gainazaleko eremu grabitatorioaren balioa, beti Lurraren zentrorantz zuzendua. Satelitearen masa konstante mantentzen dela kontuan hartuta, aurkitu <math display=\"inline\"><mi>a</mi></math> balioa orbita berria Lurraren gainazala igurtziz pasatzeko. Zein izango da haren abiadura une horretan?"
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "Ebazpena (egileak ebatzita eta iruzkinduta)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Lehenik eta behin, satelitearen abiadura kalkulatuko dugu aipatutako orbitan. Horretarako, orbita zirkularraren baldintzarako prozedurarik sinpleena erabiliko dugu: eragiten duen indarra (soilik grabitatorioa) indar zentripetuaren berdina da:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/0e49ad35b71982d0.svg\" alt=\"frac(G M m, \\( 2 R \\)^2) = m thin frac(v^2, 2 R) quad arrow.r quad v = sqrt(frac(g_0 R, 2)) #h(2em) [thin g_0 = frac(G M, R^2) thin]\" style=\"width:25.977em;height:3.260em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "non kortxetean adierazten den erlazioa erabili dugun Lurraren gainazaleko eremu grabitatorioaren intentsitatearen eta <math display=\"inline\"><mi>G</mi></math> konstante fisikoaren eta Lurraren <math display=\"inline\"><mi>M</mi></math> eta <math display=\"inline\"><mi>R</mi></math> datuen artean. Une horretatik aurrera, indar zentral konstante bat hasten da eragiten aldakorra den indar zentral grabitatorioaren gainean. Honela adieraz dezakegu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>−</mo><mi>a</mi><mi>m</mi><msub><mi>g</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Indar zentral horri (kontserbatzailea izango dena) lotutako <math display=\"inline\"><mi>V</mi></math> energia potentziala definizio beretik lor daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>d</mi><mi>V</mi></mrow><mrow><mi>d</mi><mi>r</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo>=</mo><mi>−</mi><mo>∫</mo><mi>F</mi><mi>d</mi><mi>r</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mi>r</mi></mfrac><mo>+</mo><mi>a</mi><mi>m</mi><msub><mi>g</mi><mn>0</mn></msub><mi>r</mi><mo>+</mo><mi>K</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Konstante gehigarria ez dugu oraingoz ebaluatzen (kontuan har bedi, eremu grabitatorioarentzat infinituan nulua egin genezakeen arren, gainjarritako magnitude konstantea duen eremu erradialarentzat esleipen horrek ez lukeela zentzurik). Nolanahi ere, egindako lana kontuan hartutako bi puntuen arteko energia potentzialaren aldakuntza gisa idatz daitekeenez, aldakuntza horren kalkuluan <math display=\"inline\"><mi>K</mi></math> konstantea desagertuko da."
    },
    {
     "mota": "testua",
     "html": "Kontuan har ditzagun orain satelitearen ibilbidearen bi puntu indar-eremu berrian. Gainjarritako eremurik ez dagoenean bezala, orain ere energia osoa eta momentu angeluarra kontserbatuko dira. P-rekin adierazten badugu magnitude konstantea duen eremua gainjartzen den hasierako orbita zirkularraren puntua eta Q-rekin orbita berriaren Lurrarekin ukitze-puntua, hau da, <math display=\"inline\"><mrow><msub><mi>r</mi><mi>Q</mi></msub><mo>=</mo><mi>R</mi></mrow></math> (zeina, aldi berean, atzerapen-puntua izango den, hau da, <math display=\"inline\"><mrow><msub><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>Q</mi></msub><mo>=</mo><mn>0</mn></mrow></math>), kontserbazio-printzipioak honela idatz ditzakegu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mi>P</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><msub><mi>r</mi><mi>P</mi></msub></mfrac><mo>+</mo><mi>a</mi><mi>m</mi><msub><mi>g</mi><mn>0</mn></msub><msub><mi>r</mi><mi>P</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mi>Q</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><msub><mi>r</mi><mi>Q</mi></msub></mfrac><mo>+</mo><mi>a</mi><mi>m</mi><msub><mi>g</mi><mn>0</mn></msub><msub><mi>r</mi><mi>Q</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>l</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>P</mi></msub><mo>×</mo><mi>m</mi><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>P</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><msub><mi>r</mi><mi>Q</mi></msub><mo>⋅</mo><mi>m</mi><msub><mi>v</mi><mi>Q</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hala ere, P-n eremua gainjartzearen unean, abiadurak gainjarri aurretik zeukan balio bera mantentzen du (hau da, osagai erradial nulua izaten jarraitzen du: <math display=\"inline\"><mrow><msub><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>P</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>P</mi></msub></math> abiadura osoa zeharkakoa izango da eta lehenago kalkulatutako orbita zirkularreko abiaduraren berdina). Beste hitz batzuetan, satelitea eremu zentral berria gainjartzearen unean zegoen P puntua ere atzerapen-puntua da orbita berrirako. Beraz, berridatzi dezakegu <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>P</mi></msub><mo>×</mo><mi>m</mi><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>P</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><msub><mi>r</mi><mi>P</mi></msub><mo>⋅</mo><mi>m</mi><msub><mi>v</mi><mi>P</mi></msub><mo>=</mo><mn>2</mn><mi>R</mi><mo>⋅</mo><mi>m</mi><msqrt><mrow><msub><mi>g</mi><mn>0</mn></msub><mi>R</mi><mi>/</mi><mn>2</mn></mrow></msqrt></mrow></math> (kontuan har dezagun eremu zentral berria aplikatzean ez dela aldatuko sateliteak orbita zirkularrean zeukan momentu angeluarra). Balio hori bigarren erlazioetan ordezkatuz, <math display=\"inline\"><msub><mi>v</mi><mi>Q</mi></msub></math> <math display=\"inline\"><msub><mi>r</mi><mi>Q</mi></msub></math>-ren funtzioan honela askatu ahal izango dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>Q</mi></msub><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><msub><mi>g</mi><mn>0</mn></msub><msup><mi>R</mi><mn>3</mn></msup></mrow></msqrt><msub><mi>r</mi><mi>Q</mi></msub></mfrac><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><msub><mi>g</mi><mn>0</mn></msub><msup><mi>R</mi><mn>3</mn></msup></mrow></msqrt><mi>R</mi></mfrac><mo>=</mo><msqrt><mrow><mn>2</mn><msub><mi>g</mi><mn>0</mn></msub><mi>R</mi></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "energiaren kontserbazioaren adierazpenera eramanda, <math display=\"inline\"><mrow><msub><mi>r</mi><mi>P</mi></msub><mo>=</mo><mn>2</mn><mi>R</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>v</mi><mi>P</mi></msub><mo>=</mo><msqrt><mrow><msub><mi>g</mi><mn>0</mn></msub><mi>R</mi><mi>/</mi><mn>2</mn></mrow></msqrt></mrow></math> direla kontuan hartuta, hona eramango gaitu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mfrac><mrow><msub><mi>g</mi><mn>0</mn></msub><mi>R</mi></mrow><mn>2</mn></mfrac><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mo>+</mo><mi>a</mi><mi>m</mi><msub><mi>g</mi><mn>0</mn></msub><mn>2</mn><mi>R</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mspace width=\"0.167em\"></mspace><mn>2</mn><msub><mi>g</mi><mn>0</mn></msub><mi>R</mi><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mi>R</mi></mfrac><mo>+</mo><mi>a</mi><mi>m</mi><msub><mi>g</mi><mn>0</mn></msub><mi>R</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Adierazpen hau sinplifikatu dezakegu <math display=\"inline\"><mrow><mi>G</mi><mi>M</mi><mo>=</mo><msub><mi>g</mi><mn>0</mn></msub><msup><mi>R</mi><mn>2</mn></msup></mrow></math> dela kontuan hartuta, eta horrela, eragiketak eta sinplifikazioa egin ondoren, <math display=\"inline\"><mi>a</mi></math> balioa emango digu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>"
    }
   ]
  }
 ]
};
