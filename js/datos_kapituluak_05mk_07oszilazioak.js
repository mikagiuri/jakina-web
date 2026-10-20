/* JAKINA · kapitulua «B9.7 - Oszilazio txikiak» (05mk_07oszilazioak), desde edicion2/kapituluak/05mk_07oszilazioak/05mk_07oszilazioak.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["05mk_07oszilazioak"] = {
 "gakoa": "05mk_07oszilazioak",
 "titulua": "JAKINA - B9 - Mekanika klasikoa - 7/10",
 "azala": "B9.7 - Oszilazio txikiak",
 "azpititulua": "III. aroa - L2",
 "iturburua": "kapituluak/05mk_07oszilazioak/05mk_07oszilazioak.typ",
 "sarrera": [],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Oszilazio txikiak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Higidurarik errazena pausagunea da eta 6.2 atalean ikusi genuen hori energia potentzialaren mutur-puntuetan bakarrik gerta daitekeela. Oreka-puntua egonkorra bada, hurbil hasten diren higidurak ingurunean geratzen dira: oszilazioak dira. Energia potentzialaren minimo baten inguruko oszilazio <em>linealak</em> aztertuko ditugu gai honetan; oszilazio ez-linealak eta portaera konplexuagoak problema batzuetan eta 8. gaian aipatzen dira. Hasteko, dimentsio bakarrean ikusiko ditugu oszilazioak, erresonantziaren fenomenoa arretaz aztertuz. Dimentsio gehiago daudenean, oro har, oszilazio linealak mihiztaturik daude, baina independente bihurtzen dira koordenatu orokortu egokiak aukeratzen badira. 9. gaian aztertuko dugun uhin-ekuazioa lortzeko, tentsiopeko soka diskretuaz baliatuko gara, limite jarraitua eginez."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Oreka egonkorra eta oszilador harmonikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Eman dezagun <math display=\"inline\"><mi>m</mi></math> masako partikula <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> potentzialean higitzen dela dimentsio bakarrean. 1.4.6 atalean gogoratu genuenez, potentzialaren <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> minimo batean partikula oreka egonkorrean egon daiteke eta handik oso hurbil badago, pairatzen duen indarra Hookeren legeak emandakoa da: <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Erreferentzia-sistemaren jatorria oreka-puntuan aukeratuz, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> har dezakegu inolako murrizketarik egin gabe. Badakigu gainera, partikularen higidura-ekuazioa oszilador harmonikoarena izango dela oreka-puntuaren ingurune txiki batean:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><mi>ω</mi><mo>≡</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> osziladorearen <strong>pultsazio propioa</strong> den. <br> Azpimarratu behar da oszilador harmonikoaren kontzeptua oso orokorra dela, hurbilketa egokian eredu mekaniko askori baitagokie. Adibidez, (1.50) ekuazioan <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math> eginez lortzen den pendulu matematikoaren kasuan, oszilazio txikiak badira, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>θ</mi></mrow></math> dugu eta higidura-ekuazioa <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da, pultsazioa <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>l</mi></mrow></msqrt></mrow></math> izanik. Areago, oso erabilgarria da bestelako sistema fisikoak (eta ekonomikoak, geofisikoak, ekologikoak eta abar) aztertzeko. Horrexegatik, testuinguru matematiko orokor batean aztertuko ditugu gai honetan oszilazioak, funtsean dagoen eredu fisikoa zehaztu gabe. Testuinguru abstraktu honetan <math display=\"inline\"><mi>x</mi></math> aldagaia, edonolako dimentsioak izan ditzakeena, osziladorearen <strong>elongazioa</strong> dela esaten da."
    },
    {
     "mota": "testua",
     "html": "Osziladorearen soluzioa <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math> integrazio-konstanteen bidez idatzi genuen (1.113)"
    },
    {
     "mota": "testua",
     "html": "adierazpenean:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Oszilador harmonikoaren (7.3) soluzioa periodikoa da, horrelakoa baita kosinua. Azken honen periodoa <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "denez, osziladorearen <strong>periodoa</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>ω</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da eta <strong>maiztasuna</strong><span class=\"j-oin\">[Pultsazioaren eta maiztasunaren arteko desberdintasuna faktore konstante bat denez, lehenengoaren kasuan ere «maiztasun» izena erabiltzen da askotan (gehienetan).]</span>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><mfrac><mi>ω</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oszilazio guztien periodoak berdinak direnez, oszilazio hauek <strong>isokronoak</strong> dira<span class=\"j-oin\">[Pisako katedraleko lanparen kulunkaren periodoa bere pultsuaz neurtuz konturatu zen propietate honetaz Galileo. Horrela, penduluen oszilazio txikiak denbora neurtzeko erabil zitezkeela ondorioztatu zuen lehenengoz. Erlojuak (eta metronomoak) egiteko saio batzuk egin ziren laster, baina badirudi lehenengo diseinu praktikoa Huygensen <em>Horologium</em> liburuan deskribatutakoa izan zela.]</span>. <br> Kosinuaren <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub></mrow></math> argumentuari <strong>fasea</strong> deritzo eta <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math>-ri <strong>hasierako fasea</strong>, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean faseak duen balioa baita. Bestalde, <math display=\"inline\"><mrow><mi>A</mi><mo>≥</mo><mn>0</mn></mrow></math> koefiziente konstantea <strong>anplitudea</strong> deitzen da eta elongazioaren balio maximoa da. Jakina, elongazioa maximoa (edo minimoa) denean, <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>A</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "abiadura zero da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu hurrengo moduetara ere idatz daitekeela soluzioa: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>θ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><mfrac><msub><mi>v</mi><mn>0</mn></msub><mi>ω</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Zein da <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> konstanteen esangura? Zergatik aukera daiteke beti (7.3) soluzioan <math display=\"inline\"><mi>A</mi></math> koefizientea ez-negatiboa izateko moduan?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hookeren indarra kontserbatzailea denez, energia mekanikoa higidura-konstantea da eta, adibidez, elongazioa maximoa denean erraz kalkula daiteke anplitudearen menpean: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>A</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Testuinguru orokorrago batean, energiaren egitura antzekoa izango da,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>∝</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>A</mi><mn>2</mn></msup><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "proportzionaltasun-konstantea eredu fisikoaren menpekoa bada ere. Adibidez, pendulu matematikoaren oszilazio txikien kasuan, elongazioa <math display=\"inline\"><mi>θ</mi></math> angelua da eta energia mekanikoa <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>θ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><msub><mi>θ</mi><mn>0</mn></msub></math> anplitudea angelu maximoa den."
    },
    {
     "mota": "irudia",
     "oina": "Oszilladore harmonikoaren <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> diagrama eta fase-espazioa.",
     "src": "media/irudiak/91a681f0b8922c98.svg",
     "zabalera": 353
    },
    {
     "mota": "testua",
     "html": "Gai honetan <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> aldagaietako espazio abstraktuari <strong>fase-espazioa</strong> deritzo. Oszilador harmonikoaren <strong>fase-ibilbideak</strong>  <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mrow><mi>ω</mi><mi>A</mi></mrow></math> ardatzerdiak dituzten elipseak direla diosku (7.10)"
    },
    {
     "mota": "testua",
     "html": "kontserbazio-legeak. Jatorrian dagoen oreka-puntu egonkorra <strong>zentroa</strong> dela esaten da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fasoreak"
    },
    {
     "mota": "testua",
     "html": "Oszilazioak (eta uhinak) aztertzeko magnitude fisikoen adierazpen konplexuak errealak baino erabilgarriagoak izaten dira. Eman dezagun 1.4.4 atalean esandakoaren ildotik, (7.1) ekuazio linealaren <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>λ</mi><mi>t</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "moduko soluzioak bilatzen ditugula <math display=\"inline\"><mi>C</mi></math> eta <math display=\"inline\"><mi>λ</mi></math> konstante egokiekin. Horrelako soluzio bat ekuazioan ordezkatzean <math display=\"block\"><mrow><mi>C</mi><msup><mi>e</mi><mrow><mi>λ</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "lortzen da eta, esponentziala zero ez denez, soluzio ez-nulua izateko <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><mi>ω</mi></mrow></math> aukeratu behar dugu, baina <math display=\"inline\"><mi>C</mi></math> konstantea hautazkoa da. Ekuazioa lineala denez, <math display=\"inline\"><mi>C</mi></math> eta <math display=\"inline\"><mi>D</mi></math> hautazko konstante konplexuak badira, <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "konbinazioa soluzioa dela ikusten dugu. Gainera, adierazpen horretan soluzio guztiak daude (ikus, adibidez, [46]). Ekuazioaren koefizienteak errealak direnez, soluzio baten konplexu konjugatua ere soluzioa da —aski da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>C</mi><mo>,</mo><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> konstanteen ordez <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>D</mi><mo accent=\"true\">¯</mo></mover><mo>,</mo><mover><mi>C</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> aukeratzea— eta, ondorioz, horrelakoak dira haren parte erreala eta irudikaria. <br> Osziladoreak deskribatzen duen magnitudea erreala bada, (7.14)"
    },
    {
     "mota": "testua",
     "html": "adierazpeneko <math display=\"inline\"><mi>x</mi></math> soluzioa erreala izateko, <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>D</mi><mo>=</mo><mover><mi>C</mi><mo accent=\"true\">¯</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "bete behar da, eta orduan, <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>a</mi><mo>+</mo><mi>i</mi><mi>b</mi></mrow></math> konstantearen modulua eta argumentua <math display=\"block\"><mrow><mi>A</mi><mo>≡</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><msqrt><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>φ</mi><mn>0</mn></msub><mo>≡</mo><mrow><mi mathvariant=\"normal\">arg</mi><mo>&#8289;</mo></mrow><mi>C</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mfrac><mi>b</mi><mi>a</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "badira, <math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>φ</mi><mn>0</mn></msub></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>D</mi><mo>=</mo><mover><mi>C</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>a</mi><mo>−</mo><mi>i</mi><mi>b</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>φ</mi><mn>0</mn></msub></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "dugu. Beraz, ekuazio harmoniko askearen soluzioa hurrengo moduetara idazten da, hautazkoa dela kontuan hartuz, <math display=\"inline\"><mi>C</mi></math>-ren ordez <math display=\"inline\"><mrow><mi>C</mi><mi>/</mi><mn>2</mn></mrow></math> idazten badugu: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><mover><mi>C</mi><mo accent=\"true\">¯</mo></mover><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow><mn>2</mn></mfrac><mo>=</mo><mi>A</mi><mfrac><mrow><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow><mn>2</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>A</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Azken lerroan soluzioaren (1.113) eta (7.3) adierazpenak berreskuratzen ditugu eta (1.112) eta (7.7) direlakoak <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "parte irudikaria (goian esan dugun bezala, soluzioa dena) dira. <br> Ondorioz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "soluzio konplexua erabiltzen badugu, soluzio erreala <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>z</mi></mrow></math> da. (Askotan notazioa arintzeko <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math> edo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math> idazten da: parte erreala hartu behar dela esan gabe doa.)"
    },
    {
     "mota": "testua",
     "html": "Soluzioaren adierazpen grafikoa egiteko zenbaki konplexuen Arganden diagrama erabil dezakegu: plano konplexuan <math display=\"inline\"><mi>z</mi></math> zenbakia puntu batez edo jatorriarekin batera definitzen duen bektore baten bidez adierazten da. Bektorearen luzera zenbakiaren modulua da, soluzioaren <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>A</mi></mrow></math> anplitude konstantea, beraz. Bektorearen eta ardatz errealaren arteko angelua zenbakiaren argumentua eta soluzioaren fasea da: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">arg</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub></mrow></math>. Azken hau aldakorra denez, <math display=\"inline\"><mi>z</mi></math> bektorea <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> abiadura angeluar konstantez biratzen ari da eta <strong>fasorea</strong> dela esaten da. Fasoreak ardatz errealean duen <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>z</mi></mrow></math> proiekzioa da soluzio erreala."
    },
    {
     "mota": "irudia",
     "oina": "Elongazioa, abiadura eta dagozkien fasoreak.",
     "src": "media/irudiak/34772eb2efe88c1e.svg",
     "zabalera": 184
    },
    {
     "mota": "testua",
     "html": "Deribatuaren parte erreala parte errealaren deribatua denez, abiadura kalkulatzeko <math display=\"inline\"><mi>z</mi></math> soluzioa deriba dezakegu, eta <math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> erabiliz, honako hau lortzen da: <math display=\"block\"><mrow><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>i</mi><mi>ω</mi><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>=</mo><mi>C</mi><mi>ω</mi><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><mi>i</mi><mi>ω</mi><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><mi>A</mi><mi>ω</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>+</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(7.6) abiadura erreala lortzeko nahikoa da horren parte erreala hartzea: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>A</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>+</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>A</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, <math display=\"inline\"><mrow><mi>A</mi><mi>ω</mi></mrow></math> da abiadura adierazten duen fasorearen luzera, hau da, abiaduraren anplitudea. Gainera, elongazioari dagokion (7.20) fasorearen abiadura angeluar berberaz biratzen ari da <strong>abiadura-fasore</strong>"
    },
    {
     "mota": "testua",
     "html": "hau, baina <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> balioko aurrerapenarekin, bere fasea <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> baita."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Nolakoa da azelerazio-fasorea?"
      }
     ]
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Oszilador indargetua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Osziladorea indargeturik badago (abiadurarekiko proportzionala den marruskadura pairatzen duelako, adibidez), bere ekuazioa (1.91)  da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi>γ</mi></math> konstantea <strong>indargetze-koefizientea</strong><span class=\"j-oin\">[Liburu batzuetan hemengo <math display=\"inline\"><mrow><mn>2</mn><mi>γ</mi></mrow></math> balioari deritzo indargetze-koefizientea. Hemen <math display=\"inline\"><mi>γ</mi></math> aukeratu dugu zenbait adierazpen laburtzeko.]</span> den. Soluzioa bilatzeko, (7.12) soluzio esponentziala saiatuko dugu (7.23)  ekuazioan: <math display=\"block\"><mrow><mi>C</mi><msup><mi>e</mi><mrow><mi>λ</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>γ</mi><mi>λ</mi><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mi>−</mi><mi>γ</mi><mo>±</mo><msqrt><mrow><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, ekuazio honen soluzioak, 1.4.4 atalean ere aztertu zirenak, hiru kasu desberdinetan sailkatzen dira."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Indargetze ahula"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>γ</mi><mo>&lt;</mo><mi>ω</mi></mrow></math> denean, erro karakteristikoak <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mi>γ</mi><mo>±</mo><mi>i</mi><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> dira. Elkarren konjugatuak direnez, fasoreak erabiltzekotan nahikoa da bat aukeratzea eta berriro ere <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>φ</mi><mn>0</mn></msub></mrow></msup></mrow></math> jartzea, soluzioa <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>γ</mi><mo>+</mo><mi>i</mi><msub><mi>ω</mi><mi>γ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow></msup><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mi>γ</mi></msub><mi>t</mi></mrow></msup><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>γ</mi></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mi>γ</mi></msub><mo>≡</mo><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "edo"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mi>γ</mi></msub><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>γ</mi></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "moduan idazteko. Orain zati periodikoaren pultsazioa (hau da, fasorearen abiadura angeluarra)  <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>γ</mi></msub><mo>=</mo><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> da eta anplitudea (fasorearen modulua) monotono beherakorra: <math display=\"inline\"><mrow><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup></mrow></math>. Fase-ibilbideak, hortaz, jatorrirantz joko du eta asintotikoki egonkorra den oreka-puntua <strong>fokua</strong> dela esango dugu."
    },
    {
     "mota": "irudia",
     "oina": "Oszilladore harmoniko indargetuaren <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> diagrama eta fase-espazioa.",
     "src": "media/irudiak/699a13d9858ff69f.svg",
     "zabalera": 347
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Marraztu (7.25) fasorea eta bere puntak deskribatzen duen ibilbidea."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Indargetze-koefizientearen dimentsioak <math display=\"inline\"><msup><mi>T</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>  dira: izan ere, <strong>denbora karakteristikoa</strong> —eta, testuinguru batzuetan, <strong>lasaikuntza-denbora</strong>— deituriko <math display=\"inline\"><mrow><mi>τ</mi><mo>≡</mo><mn>1</mn><mi>/</mi><mi>γ</mi></mrow></math> balioa, anplitudea <math display=\"inline\"><mi>e</mi></math> aldiz txikiagoa izateko behar den denbora-tartearen iraupena da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu ziklo batean (hau da, zati periodikoaren <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><msub><mi>ω</mi><mi>γ</mi></msub></mrow></math> luzerako periodo batean) galdutako energia mekanikoa hurrengo adierazpenak emandakoa dela: <math display=\"block\"><mrow><mfrac><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>γ</mi><mi>T</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Gainindargetzea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mi>ω</mi></mrow></math> denean, <math display=\"inline\"><mrow><msub><mi>λ</mi><mo>±</mo></msub><mo>≡</mo><mi>γ</mi><mo>±</mo><msqrt><mrow><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow></msqrt><mo>&gt;</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "konstanteak erabiltzen badira, erro karakteristikoak <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><msub><mi>λ</mi><mo>±</mo></msub></mrow></math> dira eta, 1.28 ariketan ikusi zenez, ez dago benetako oszilaziorik soluzioa (1.118)  baita: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>λ</mi><mo>+</mo></msub><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>λ</mi><mo>−</mo></msub><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(<math display=\"inline\"><msub><mi>C</mi><mi>i</mi></msub></math> hautazko konstanteak errealak dira soluzio errealean.)  <br>  (7.28) soluzioko lehen gaia bestea baino arinago doa zerorantz <math display=\"inline\"><mi>t</mi></math> handitzean; beraz, denbora karakteristikoa <math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><mn>1</mn><mi>/</mi><msub><mi>λ</mi><mo>−</mo></msub></mrow></math> da."
    },
    {
     "mota": "irudia",
     "oina": "Oszilladore harmoniko gainindargetuaren <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> diagrama eta fase-espazioa.",
     "src": "media/irudiak/3e0a71ac02fe6e1d.svg",
     "zabalera": 352
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Indargetze kritikoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mi>ω</mi></mrow></math> denean erro karakteristiko bakarra dago: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>γ</mi><mo>=</mo><mi>ω</mi></mrow></math>. Berriro ere, ez dago oszilaziorik, eta soluzioa (1.119)  da: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>C</mi><mo>+</mo><mi>D</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ω</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kasu hau, aurreko bien muga matematikoa izan arren, garrantzi handikoa da askotan. Adibidez, neurgailuen orratzak<span class=\"j-oin\">[Gaur egun kristal likidoen pantailak erabiltzen direnez, tartean dagoen osziladorea elektronikoa da, mekanikoa izan beharrean.]</span> lehenbailehen oreka-poziziora joateko, lasaikuntza-denbora ahalik eta txikiena izatea nahi da. Eta hori indargetze kritikoarekin lortzen da, 7.6 irudian ikusten den bezala. (Fase-espazioa 7.5 irudian kasu indargetuan erakusten denaren antzekoa da.)"
    },
    {
     "mota": "irudia",
     "oina": "Oszilladore indargetuaren denbora karakteristikoa.",
     "src": "media/irudiak/e4e563e71a76c016.svg",
     "zabalera": 143
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu analitikoki denbora karakteristiko laburrena kasu kritikoarena dela."
      }
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Oszilador bortxatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Eman dezagun osziladore mekanikoaren gainean <math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi></mrow></math> indar berreskuratzailea, <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>m</mi><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "marruskadura eta <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> kanpo-indar bat aplikatzen direla. <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>m</mi></mrow></math> definitzen badugu, osziladore harmoniko bortxatuaren ekuazioa hauxe da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Jakina, testuinguru orokorragoetan, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioa bestelako magnitudea izan daiteke. Adibidez RLC zirkuituaren ekuazioa <math display=\"block\"><mrow><mi>L</mi><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>I</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>R</mi><mfrac><mrow><mi>d</mi><mi>I</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>C</mi></mfrac><mi>I</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>V</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "denez, kasu honetan elongazioa <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>I</mi></mrow></math> intentsitatea da, indargetze-koefizientea <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mi>R</mi><mi>/</mi><mn>2</mn><mi>L</mi></mrow></math>, pultsazio propioa <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mi>L</mi><mi>C</mi></mrow></msqrt></mrow></math> eta <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mover><mi>V</mi><mo accent=\"true\">̇</mo></mover><mi>/</mi><mi>L</mi></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "RLC zirkuitua.",
     "src": "media/irudiak/a72750709fa95db6.svg",
     "zabalera": 176
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Indar sinusoidala"
    },
    {
     "mota": "testua",
     "html": "Kanpo-eragina sinusoidala denean dugu kasurik errazena —eta, 7.3.6 eta 7.3.7 ataletan ikusiko dugunez, garrantzitsuena—:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><msub><mi>f</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn><mo>,</mo><mi mathvariant=\"normal\">Ω</mi><mo>≥</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>α</mi><mo>&lt;</mo><mn>2</mn><mi>π</mi></mrow></math> konstanteak diren. Ekuazio hau lineala da baina ez homogeneoa; beraz, soluzioa hurrengo moduan idazten da (ikus, adibidez, [46]):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mi>g</mi></msub><mo>+</mo><msub><mi>x</mi><mi>u</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hemen, <math display=\"inline\"><msub><mi>x</mi><mi>g</mi></msub></math> zatia <strong>soluzio iragankorra</strong> da, <math display=\"inline\"><mrow><msub><mi>f</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> eginez lortzen den osziladore askeari dagokiona, hau da, ekuazio homogeneoaren soluzio orokorra. Indargetze-koefizientearen arabera, soluzio zati hau (7.26), (7.28) edo (7.29) da; baina edozein kasutan, monotono beherakorra da (<math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> baita): denbora karakteristiko batzuk pasatu ondoren, arbuiagarria izango da eta bakarrik geratuko da <math display=\"inline\"><msub><mi>x</mi><mi>u</mi></msub></math> zatia, <strong>soluzio iraunkorra</strong>"
    },
    {
     "mota": "testua",
     "html": "deitzen dena."
    },
    {
     "mota": "irudia",
     "oina": "Oszilladore bortxatuaren kanpo-indarra, hiru soluzio eta fase-espazioa.",
     "src": "media/irudiak/aac377893fb94c72.svg",
     "zabalera": 363
    },
    {
     "mota": "testua",
     "html": "Ekuazio osoaren soluzio partikular berezi bat da azken hau. Berriro ere, fasoreak erabiliko ditugu kalkulua egiteko. Horretarako, <math display=\"inline\"><mrow><msub><mi>f</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>f</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> kanpo-indarra eta ekuazioa forma konplexuan idatziko ditugu: <math display=\"block\"><mrow><mi>f</mi><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>z</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>z</mi><mo>=</mo><mi>f</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Soluzio partikular <em>periodikoa</em> aurkitzeko, kanpo-indarraren egitura duen <math display=\"block\"><mrow><msub><mi>z</mi><mi>u</mi></msub><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "fasorea saiatuko dugu: <math display=\"block\"><mrow><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>φ</mi><mn>0</mn></msub></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>i</mi><mi>γ</mi><mi mathvariant=\"normal\">Ω</mi><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><mi>α</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(7.36) fasorea soluzioa izateko, hurrengo baldintzak bete behar direla ikusten dugu aurreko emaitzaren parte errealak eta irudikariak berdinduz: <math display=\"block\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>2</mn><mi>A</mi><mi>γ</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, soluzioz iraunkorra hauxe da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mi>u</mi></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>z</mi><mi>u</mi></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Letrak berdinak erabili arren, hemengo <math display=\"inline\"><mi>A</mi></math> anplitudea eta <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math> fasea ez dira hastapen-baldintzek emandako (7.26) soluziokoak, (7.38)–(7.39) baldintzek definiturikoak baizik:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mfrac><msub><mi>f</mi><mn>0</mn></msub><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>γ</mi><mi mathvariant=\"normal\">Ω</mi></mrow><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Azpimarratu behar da konstante hauek hastapen-baldintzen independenteak direla. Hastapen-baldintzen balioak behar dira erantzun iragankorra ezagutzeko, baina gero soluzioaren zati hau motelduz doa eta, azkenean, hastapen-baldintzen oroimena galdurik, soluzioa ia-ia (7.40)-ren berdina da. Soluzio berezi hori"
    },
    {
     "mota": "testua",
     "html": "<strong>erakarlea</strong>"
    },
    {
     "mota": "testua",
     "html": "da, soluzio guztiak erakartzen baititu."
    },
    {
     "mota": "irudia",
     "oina": "Kanpo-indarraren eta soluzio iraunkorraren fasoreak.",
     "src": "media/irudiak/76b1178c5c884d41.svg",
     "zabalera": 197
    },
    {
     "mota": "testua",
     "html": "(7.34) indarra eta (7.36) soluzio iraunkorra adierazten dituzten fasoreak <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> abiadura angeluarraz biratzen dira (eta ez soluzio iragankorraren <math display=\"inline\"><msub><mi>ω</mi><mi>γ</mi></msub></math>-rekin), baina (7.42) baldintzan ikusten dugunez, <math display=\"inline\"><msub><mi>z</mi><mi>u</mi></msub></math> soluzioa beti dago atzeraturik, 7.9 irudian <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub></mrow></math> erabiliz erakusten den moduan. (7.42) eta (7.43) adierazpenetan ikusten denez, <math display=\"inline\"><mrow><mi>α</mi><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub></mrow></math> atzerapena ez da kanpo-indarraren <math display=\"inline\"><msub><mi>f</mi><mn>0</mn></msub></math>"
    },
    {
     "mota": "testua",
     "html": "anplitudearen menpekoa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Inpedantzia"
    },
    {
     "mota": "testua",
     "html": "Demagun 7.7 irudiko zirkuituan <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><msub><mi>I</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup></mrow></math> korronte sinusoidala dabilela. Ohmen legearen arabera, erresistentziaren kasuan, potentzial-diferentzia eta korronte-intentsitatearen arteko erlazioa erresistentziak emandakoa da: <math display=\"block\"><mrow><msub><mi>V</mi><mi>R</mi></msub><mo>=</mo><mi>R</mi><mi>I</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Autoindukzioan, berriz, zera dugu: <math display=\"block\"><mrow><msub><mi>V</mi><mi>L</mi></msub><mo>=</mo><mi>L</mi><mfrac><mrow><mi>d</mi><mi>I</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>L</mi><mi>I</mi><mo>=</mo><mi mathvariant=\"normal\">Ω</mi><mi>L</mi><msub><mi>I</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Potentzial-diferentziak <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> balioko aurrerapena du eta azken emaitza Ohmen (7.44) legearen moduan idatz daiteke, <math display=\"block\"><mrow><msub><mi>V</mi><mi>L</mi></msub><mo>=</mo><msub><mi>Z</mi><mi>L</mi></msub><mi>I</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "SI sisteman ohmetan neurtzen den <math display=\"block\"><mrow><msub><mi>Z</mi><mi>L</mi></msub><mo>=</mo><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>L</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "inpedantzia definitzen badugu. Modu berean, kondentsadorean potentzial-diferentzia <math display=\"block\"><mrow><msub><mi>V</mi><mi>C</mi></msub><mo>=</mo><mfrac><mi>q</mi><mi>C</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>C</mi></mfrac><mo>∫</mo><mi>I</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>−</mi><mfrac><mi>i</mi><mrow><mi mathvariant=\"normal\">Ω</mi><mi>C</mi></mrow></mfrac><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi mathvariant=\"normal\">Ω</mi><mi>C</mi></mrow></mfrac><msub><mi>I</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>−</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "dugunez, <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> atzerapena dagoela ikusten dugu eta <math display=\"block\"><mrow><msub><mi>Z</mi><mi>C</mi></msub><mo>=</mo><mi>−</mi><mfrac><mi>i</mi><mrow><mi mathvariant=\"normal\">Ω</mi><mi>C</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "inpedantzia definitzen bada, honako hau geratzen zaigu: <math display=\"block\"><mrow><msub><mi>V</mi><mi>C</mi></msub><mo>=</mo><msub><mi>Z</mi><mi>C</mi></msub><mi>I</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "RLC zirkuituaren inpedantzia, beraz, <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><mi>R</mi><mo>+</mo><msub><mi>Z</mi><mi>L</mi></msub><mo>+</mo><msub><mi>Z</mi><mi>C</mi></msub><mo>=</mo><mi>R</mi><mo>+</mo><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>L</mi><mo>−</mo><mfrac><mn>1</mn><mrow><mi mathvariant=\"normal\">Ω</mi><mi>C</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da eta <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><msub><mi>V</mi><mi>R</mi></msub><mo>+</mo><msub><mi>V</mi><mi>L</mi></msub><mo>+</mo><msub><mi>V</mi><mi>C</mi></msub></mrow></math> potentzial-diferentzia osoa, Ohmen lege orokortuak emandakoa: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>Z</mi><mi>I</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Inpedantziaren modulua honela idazten da, <math display=\"inline\"><mi>R</mi></math> erresistentziaren eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mi>L</mi></mrow></math> eta <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"normal\">Ω</mi><mi>C</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>erreaktantzien</strong>"
    },
    {
     "mota": "testua",
     "html": "bidez: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><msqrt><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>L</mi><mo>−</mo><mfrac><mn>1</mn><mrow><mi mathvariant=\"normal\">Ω</mi><mi>C</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Potentzial-diferentziaren eta intentsitatearen arteko desfasea <math display=\"block\"><mrow><mi>δ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arg</mi><mo>&#8289;</mo></mrow><mi>Z</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mfrac><mn>1</mn><mi>R</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>L</mi><mo>−</mo><mfrac><mn>1</mn><mrow><mi mathvariant=\"normal\">Ω</mi><mi>C</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "denez, hauxe dugu: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>Z</mi><mi>I</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>I</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Inpedantziaren bi osagai hauek, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> modulua eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">arg</mi><mo>&#8289;</mo></mrow><mi>Z</mi></mrow></math> angelua, maiztasunaren menpekoak dira eta aurrenekoa minimoa da bi erreaktantziak berdinak direnean: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mi>L</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi mathvariant=\"normal\">Ω</mi><mi>C</mi></mrow></math> bada, <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mi>R</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mn>0</mn></mrow></math> dugu."
    },
    {
     "mota": "testua",
     "html": "Modu berean, <math display=\"block\"><mrow><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>F</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "osziladore mekanikoaren kasuan, abiadura <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup></mrow></math> bada, <strong>inpedantzia mekanikoa</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mi>γ</mi><mo>+</mo><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo>−</mo><mfrac><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ω</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mi>m</mi><mi mathvariant=\"normal\">Ω</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mi>γ</mi><mi mathvariant=\"normal\">Ω</mi><mo>+</mo><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eran definitzen da, indarra honako hau izateko moduan: <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>Z</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Marruskadurak erresistentziaren eginkizuna burutzen du, inertziak autoindukzioarenak eta indar berreskuratzailea sortzen duen zurruntasunak kapazitatearena."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu (7.58) emaitza. Zergatik ez da definitzen <math display=\"inline\"><mi>Z</mi></math> inpedantzia <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>Z</mi><mi>x</mi></mrow></math> izateko moduan?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hauexek ditugu, ondorioz, inpedantzia mekanikoaren modulua eta fasea: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mfrac><mi>m</mi><mi mathvariant=\"normal\">Ω</mi></mfrac><msqrt><mrow><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>δ</mi><mo>=</mo><mfrac><mrow><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow><msqrt><mrow><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>δ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>γ</mi><mi mathvariant=\"normal\">Ω</mi></mrow><msqrt><mrow><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Emaitza hauetaz balia gaitezke aurreko atalekoak berreskuratzeko, zeren <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>Z</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> integratuz, <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>i</mi><mi>F</mi></mrow><mrow><mi mathvariant=\"normal\">Ω</mi><mi>Z</mi></mrow></mfrac><mo>=</mo><mfrac><mi>F</mi><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>δ</mi><mo>+</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "lortzen baita."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu (7.59)–(7.62) emaitzak (7.36) eta (7.41)–(7.43) adierazpenen baliokideak direla."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Erresonantzia"
    },
    {
     "mota": "testua",
     "html": "Erantzun iraunkorraren <math display=\"inline\"><mi>A</mi></math> anplitudea, kanpo-eraginaren <math display=\"inline\"><msub><mi>f</mi><mn>0</mn></msub></math> intentsitatearekiko proportzionala da, baina <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> pultsazioaren menpekotasuna interesgarriagoa da. <math display=\"inline\"><mrow><mi>ω</mi><mi>/</mi><msqrt><mn>2</mn></msqrt><mo>&lt;</mo><mi>γ</mi><mo>&lt;</mo><mi>ω</mi></mrow></math> denean, anplitudeak <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>f</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "balioko maximo bat du <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>0</mn></mrow></math> denean, hau da, kanpo-indarra konstantea denean. Indargetzea <math display=\"inline\"><mrow><mi>γ</mi><mo>&lt;</mo><mi>ω</mi><mi>/</mi><msqrt><mn>2</mn></msqrt></mrow></math> baldintza betetzeko bezain ahula bada, berriz, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>0</mn></mrow></math> pultsazioan minimo bat dago."
    },
    {
     "mota": "irudia",
     "oina": "Erantzun iraunkorraren <math display=\"inline\"><mi>A</mi></math> anplitudea.",
     "src": "media/irudiak/4c090a00ca8d3869.svg",
     "zabalera": 229
    },
    {
     "mota": "testua",
     "html": "Gainera, orain"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mn>0</mn></msub><mo>≡</mo><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "puntuan <math display=\"block\"><mrow><msub><mi>A</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≡</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"normal\">Ω</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msub><mi>f</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>γ</mi><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "balioko maximo bat dago, 7.10 irudian erakusten den bezala. Azken kasu honetan <strong>anplitude-erresonantzia</strong>"
    },
    {
     "mota": "testua",
     "html": "dagoela esaten da. <br>  (7.65) anplitude maximoa infinitura doa indargetze-koefizienteak zerora jotzen duenean. Izan ere, 7.11 irudian ikusten dugunez, <math display=\"inline\"><mi>γ</mi></math> txikitzean grafikoa altuagoa eta estuagoa da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erresonantzia-kurben zabalera <math display=\"inline\"><mrow><msub><mi>A</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>/</mi><msqrt><mn>2</mn></msqrt></mrow></math> altueran neurtu ohi da. Froga ezazu hauxe dugula (7.10)-en arabera energia maximoaren erdian dagoen garai horretan: <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mfrac><msub><mi>A</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><msqrt><mn>2</mn></msqrt></mfrac><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mo>±</mo></msub><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mo>±</mo></msub><mo>=</mo><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><msup><mi>γ</mi><mn>2</mn></msup><mo>±</mo><mn>2</mn><mi>γ</mi><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt></mrow></msqrt></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mn>0</mn></msub><mo>±</mo><mi>γ</mi><mo>−</mo><mfrac><msup><mi>γ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>ω</mi></mrow></mfrac><mo>±</mo><mfrac><msup><mi>γ</mi><mn>3</mn></msup><msup><mi>ω</mi><mn>2</mn></msup></mfrac><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>4</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Hortaz, hauexek dira erresonantzia-kurbaren zabalera, anplitude maximoa eta erresonantzia-pultsazioa<span class=\"j-oin\">[ Parentesi arteko magnitudearen parekoak diren gaiak arbuiatzen direla esan nahi da <math display=\"inline\"><mi mathvariant=\"script\">𝒪</mi></math> notazioarekin. (Ikus, adibidez, [46].) Horrela, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mi>!</mi><mo>+</mo><msup><mi>x</mi><mn>5</mn></msup><mi>/</mi><mn>5</mn><mi>!</mi><mo>−</mo><mi>⋯</mi><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mi>!</mi><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>5</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dugu.]</span>: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi mathvariant=\"normal\">Ω</mi><mo>≡</mo><msub><mi mathvariant=\"normal\">Ω</mi><mo>+</mo></msub><mo>−</mo><msub><mi mathvariant=\"normal\">Ω</mi><mo>−</mo></msub><mo>=</mo><mn>2</mn><mi>γ</mi><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>3</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>A</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><msub><mi>f</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>γ</mi><mi>ω</mi></mrow></mfrac><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mn>0</mn></msub><mo>=</mo><mi>ω</mi><mo>−</mo><mfrac><msup><mi>γ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>ω</mi></mrow></mfrac><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>4</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>φ</mi><mn>0</mn></msub><mo>−</mo><mi>α</mi><mo>=</mo><mi>−</mi><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>+</mo><mfrac><mi>γ</mi><mi>ω</mi></mfrac><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>3</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Anplitudea <math display=\"inline\"><mrow><mi>γ</mi><mi>/</mi><mi>ω</mi></mrow></math> balio batzuetarako.",
     "src": "media/irudiak/70c428a46bdf479e.svg",
     "zabalera": 205
    },
    {
     "mota": "testua",
     "html": "Indargetzea txikitzean anplitudearen grafikoa estuagoa eta altuagoa da eta maximoari dagokion erresonantzia-maiztasuna hurbilago dago osziladorearen maiztasun propiotik, 7.11 irudian ikusten den bezala. Beraz, nahiz eta kanpo-eraginaren <math display=\"inline\"><msub><mi>f</mi><mn>0</mn></msub></math> anplitudea oso txikia izan, soluzio iraunkorrarena oso handia izan daiteke osziladorea oso <em>ona</em> denean (hau da, <math display=\"inline\"><mi>γ</mi></math> txikia bada), kanpo-indarraren pultsazioa <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mn>0</mn></msub><mo>=</mo><mi>ω</mi><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> balioaren berdintsua bada."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu 7.7 irudiko RLC zirkuituan <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>V</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dugunean, erresonantzia-baldintza, hau da intentsitate iraunkorra maximoa izateko baldintza, honako hau dela: <math display=\"block\"><mrow><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mi>L</mi><mi>C</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Ondorioztatu (7.53) inpedantziaren balio absolutua minimoa denean lortzen dela erresonantzia."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Energia-erresonantzia"
    },
    {
     "mota": "testua",
     "html": "Osziladorearen energia potentziala elongazioaren karratuarekiko proportzionala denez, batez besteko balioa honako hau da: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>∝</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>A</mi><mn>2</mn></msup><mfrac><mi mathvariant=\"normal\">Ω</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi><mi>/</mi><mi mathvariant=\"normal\">Ω</mi></mrow></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mi>A</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hortaz, anplitude-erresonantzian batez besteko energia potentziala maximoa da. Baina kalkula ditzagun batez besteko energia zinetikoa, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>∝</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>A</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mfrac><mi mathvariant=\"normal\">Ω</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi><mi>/</mi><mi mathvariant=\"normal\">Ω</mi></mrow></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mi>A</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta osziladoreak batez beste xurgatzen duen potentzia<span class=\"j-oin\">[Ikus, gainera, 7.41 problema.]</span>, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒫</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>F</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>∝</mo><mi>−</mi><msub><mi>f</mi><mn>0</mn></msub><mi>A</mi><mi mathvariant=\"normal\">Ω</mi><mfrac><mi mathvariant=\"normal\">Ω</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi><mi>/</mi><mi mathvariant=\"normal\">Ω</mi></mrow></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>f</mi><mn>0</mn></msub><mi>A</mi><mi mathvariant=\"normal\">Ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>γ</mi><msup><mi>A</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>=</mo><mn>4</mn><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "irudia",
     "oina": "Batez besteko energia zinetikoa eta potentzia.",
     "src": "media/irudiak/5e20d661bae58084.svg",
     "zabalera": 198
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu (7.75)–(7.76) adierazpenetako batez besteko balioak kalkulatzeko integralak."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beraz, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>γ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒫</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>∝</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mfrac><msubsup><mi>f</mi><mn>0</mn><mn>2</mn></msubsup><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo>−</mo><mfrac><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ω</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "maximoa da izendatzaileko lehen gaia minimoa, hau da, zero denean. Beraz, batez besteko energia zinetikoa eta xurgatutako potentzia maximoak dira, hau da, energia-erresonantzia dugu, kanpo-eraginaren eta osziladore askearen maiztasunak berdinak direnean: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>ω</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>γ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒫</mi><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>∝</mo><mfrac><msubsup><mi>f</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mn>16</mn><msup><mi>γ</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hemen ere, efektua askoz ere handiagoa da <math display=\"inline\"><mi>γ</mi></math> koefizientea txikia denean, eta kasu horretan bi erresonantziak oso hurbil gertatzen dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mn>0</mn></msub><mo>=</mo><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt><mo>≈</mo><mi>ω</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(7.42) adierazpenaren ondorioz, <math display=\"block\"><mrow><msub><mi>φ</mi><mn>0</mn></msub><mo>=</mo><mi>α</mi><mo>−</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "dugu: <em>erresonantzian, kanpo-eraginarekiko periodo-laurden bat atzeraturik dago hark sorturiko oszilazio iraunkorra</em> eta dagozkien fasoreak elkarzutak dira."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zergatik da nulua energia-erresonantziaren minimoa?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Erresonantzia fenomenoa garrantzi handikoa da zientzia eta teknikaren hainbat arlotan: geofisikan, fisika atomikoan eta nuklearrean, zirkuitu elektronikoen teorian eta abarretan. Irrati eta telebistaren sintonizadoreetan erabiltzen da, baita zabua bultzatzean ere; baina batzuetan saihesten da, izan ditzakeen ondorio kaltegarriak ekiditeko. Adibidez, mikrouhin-labeetan 2.45 GHz-eko maiztasuna aukeratzen da, telekomunikazioetan erabiltzen ez delako eta uraren erresonantzia-maiztasunen azpi-azpian dagoelako (ikus [14]). Uraren maiztasun normal (ikus 7.6.1 atala) baten berdina (edo antzekoa) balitz, gainazaleko ur molekulek xurgatuko lituzkete mikrouhin gehienak eta barrua ez litzateke berotuko. Bestalde, badirudi testu askotan aipatzen den Tacoma Narrows zubiaren hondamen famatuaren zergatik ez zirela izan hain errazak (ikus [70, 83])."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Gainezarmenaren printzipioa"
    },
    {
     "mota": "testua",
     "html": "Aurreko atalean indar sinusoidal bakarra kontsideratu dugu, baina zer gertatzen da kanpo-indarrak bi badira? Gai honetako (7.30) oszilazioak linealak direnez, erantzuna oso erraza da, gainezarmenaren printzipioa betetzen baita: soluzio orokorrean soluzio iragankorra berdina izango da eta <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math> funtzioak <math display=\"inline\"><msub><mi>f</mi><mn>1</mn></msub></math>"
    },
    {
     "mota": "testua",
     "html": "eta <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math> kanpo-indarrei dagozkien soluzio iraunkorrak badira eta <math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>a</mi><mn>2</mn></msub></math> konstanteak, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><msub><mi>f</mi><mn>1</mn></msub><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msub><mi>f</mi><mn>2</mn></msub></mrow></math> kanpo-indarrari dagokion soluzio iraunkorra <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub></mrow></math> konbinazioa da. Ondorioz, kanpo-indarra indar sinusoidalen konbinazio modura idazten bada, dagokion soluzioa ezagutzen dugun soluzioaren modukoen konbinazioa izango da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu gainezarmenaren printzipioa (7.30) osziladorearen kasuan."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Indar periodikoa"
    },
    {
     "mota": "testua",
     "html": "Eman dezagun (7.30) ekuazioan kanpo-eragina <math display=\"inline\"><mi>T</mi></math> periodoko funtzioa dela: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Horrelako funtzioa sinusoideen konbinazio modura idatz daiteke <strong>Fourierren serie</strong> egoki baten bidez (ikus, adibidez, [46])<span class=\"j-oin\">[Ikus  orrialdeko animazioa.]</span>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup><mi>d</mi><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu (7.81) adierazpeneko seriea (7.82) delakoaren integralean ordezkatzean <math display=\"inline\"><msub><mi>c</mi><mi>n</mi></msub></math> koefizientea berreskuratzen dela, hauxe betetzen baita: <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup><mi>d</mi><mi>t</mi><mo>=</mo><msub><mi>δ</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "non Kroneckerren delta erabili dugun."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Oszilazio angeluzuzena.",
     "src": "media/irudiak/a7da5225f3f9de83.svg",
     "zabalera": 231
    },
    {
     "mota": "testua",
     "html": "Adibide moduan kontsidera dezagun 7.13 irudiko profil angeluzuzena. Periodoa <math display=\"inline\"><mi>T</mi></math> denez, pultsazioa <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>T</mi></mrow></math> dugu eta Fourierren koefizienteak <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>c</mi><mi>n</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>a</mi><mi>T</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>T</mi><mi>/</mi><mn>2</mn></mrow></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>π</mi><mi>i</mi><mi>n</mi><mi>t</mi><mi>/</mi><mi>T</mi></mrow></msup><mi>d</mi><mi>t</mi><mo>−</mo><msubsup><mo>∫</mo><mrow><mi>T</mi><mi>/</mi><mn>2</mn></mrow><mi>T</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>π</mi><mi>i</mi><mi>n</mi><mi>t</mi><mi>/</mi><mi>T</mi></mrow></msup><mi>d</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>a</mi><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>π</mi><mi>n</mi></mrow></msup></mrow><mrow><mi>i</mi><mi>π</mi><mi>n</mi></mrow></mfrac><mo>=</mo><mi>a</mi><mfrac><mrow><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>i</mi><mi>π</mi><mi>n</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>a</mi><mrow><mi>i</mi><mi>π</mi><mi>n</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mi>±</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>±</mi><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>…</mi><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mi>±</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>±</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>…</mi></mtd></mtr></mtable></mrow></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Funtzioaren simetria-propietateak kontuan hartuz, argi dago <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> dela. Profilaren Fourierren seriea, beraz, honela idazten da <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn></mrow></math> moduan idatziz: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>4</mn><mi>a</mi></mrow><mi>π</mi></mfrac><munderover><mo>∑</mo><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><msup><mi>e</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mi>i</mi><mi>t</mi><mi>/</mi><mi>T</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mi>i</mi><mi>t</mi><mi>/</mi><mi>T</mi></mrow></msup></mrow><mrow><mn>2</mn><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><mi>a</mi></mrow><mi>π</mi></mfrac><munderover><mo>∑</mo><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mrow><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mi>t</mi></mrow><mi>T</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Funtzioa bakoitia denez, bakarrik agertzen dira sinuak eta ez kosinuak. 7.14 irudian azaltzen dira hasierako <math display=\"inline\"><mi>N</mi></math> harmonikoen baturak. Argi dago eten-puntuen ingurun konbergentzia motelagoa dela: <strong>Gibbs fenomenoa</strong>"
    },
    {
     "mota": "testua",
     "html": "deitzen da hau."
    },
    {
     "mota": "irudia",
     "oina": "Gibbs fenomenoa.",
     "src": "media/irudiak/320ff173f8e3a869.svg",
     "zabalera": 269
    },
    {
     "mota": "testua",
     "html": "(7.81) indarrari dagokion soluzioa, gainezarmenaren printzipioaz baliatuz zuzenean lortzen dena, (7.40)"
    },
    {
     "mota": "testua",
     "html": "egiturakoa da; baina, lehen bezala <math display=\"inline\"><msub><mi>x</mi><mi>g</mi></msub></math> soluzio iragankorra (7.26), (7.28) edo (7.29) bada ere, soluzio iraunkorra <math display=\"block\"><mrow><msub><mi>x</mi><mi>u</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msub><mi>c</mi><mi>n</mi></msub><msub><mi mathvariant=\"normal\">Δ</mi><mi>n</mi></msub></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da, honako definizio hauekin: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>γ</mi><mi>n</mi><mi mathvariant=\"normal\">Ω</mi></mrow><msub><mi mathvariant=\"normal\">Δ</mi><mi>n</mi></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow><msub><mi mathvariant=\"normal\">Δ</mi><mi>n</mi></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"normal\">Δ</mi><mi>n</mi></msub><mo>≡</mo><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi>n</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu hori dela soluzioa."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Soluzio errealak <math display=\"inline\"><mrow><msub><mi>c</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><mover><msub><mi>c</mi><mi>n</mi></msub><mo accent=\"true\">¯</mo></mover></mrow></math> baldintzekin berreskuratzen dira: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>b</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mi>d</mi><mi>t</mi><mo>=</mo><msub><mi>c</mi><mi>n</mi></msub><mo>+</mo><msub><mi>c</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mi>n</mi></msub><mo>−</mo><msub><mi>c</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mi>u</mi></msub><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><mn>2</mn><msup><mi>ω</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><msub><mi>a</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>b</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi>n</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Indar orokorra"
    },
    {
     "mota": "testua",
     "html": "Kanpo-eragina periodikoa ez bada ere, sinusoideen bidez adieraz daiteke <strong>Fourierren transformazioaz</strong> baliatuz (ikus, adibidez, [46]):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu (7.92) adierazpeneko integralean (7.93) delakoarena ordezkatzen bada, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> berreskuratzen dela, Diracen delta (ikus B.7 atala) honela idazten baita: <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mi>e</mi><mrow><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Gainezarmenaren printzipioaz baliatuz zuzenean lortzen da dagokion soluzioa: (7.40) egitura du. Ohi bezala, <math display=\"inline\"><msub><mi>x</mi><mi>g</mi></msub></math> soluzio iragankorra (7.26), (7.28) edo (7.29) izango da eta iraunkorra honako hau: <math display=\"block\"><mrow><msub><mi>x</mi><mi>u</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mfrac><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msup><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>γ</mi><mi mathvariant=\"normal\">Ω</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu hori dela soluzioa."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Adierazpen nabariki errealak <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">¯</mo></mover></mrow></math> eginez lortzen dira: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">sin</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>i</mi><mfrac><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mi>u</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mfrac><mrow><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Badago soluzio iraunkorraren beste adierazpen erabilgarri bat: <math display=\"block\"><mrow><msub><mi>x</mi><mi>u</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>t</mi></msubsup><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mfrac><mn>1</mn><msub><mi>ω</mi><mi>γ</mi></msub></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mi>γ</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Greenen funtzioa</strong>"
    },
    {
     "mota": "testua",
     "html": "—edo, batzuetan, <strong>hedatzailea</strong>— deitzen den."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga itzazu Greenen funtzioaren propietate hauek: <math display=\"block\"><mrow><mover><mi>G</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Azken propietate hauek erabili behar dira (7.101) soluzioa dela ikusteko: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>ω</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>x</mi><mi>u</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>t</mi></msubsup><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>2</mn><mi>γ</mi><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>u</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>t</mi></msubsup><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>1</mn><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mi>u</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>t</mi></msubsup><mover><mi>G</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mi>u</mi></msub><mo>+</mo><mn>2</mn><mi>γ</mi><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>u</mi></msub><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msub><mi>x</mi><mi>u</mi></msub><mo>=</mo><mn>0</mn><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Ondoko emaitza orokorra erabili dugu aurreko kalkuluan: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><msubsup><mo>∫</mo><mi>a</mi><mi>t</mi></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>t</mi></msubsup><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oinarrizko problema"
    },
    {
     "mota": "testua",
     "html": "Eman dezagun osziladorea geldi dagoela eta <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>a</mi></mrow></math> unean <math display=\"inline\"><msub><mi>f</mi><mn>0</mn></msub></math> balioko bulkada aplikatzen zaiola. Diracen delta erabiliz (ikus B.7 atala), honela idazten da oinarrizko problema hau: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>&lt;</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili (7.101)–(7.102), Heavisideren funtzioa, <math display=\"block\"><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mi>t</mi><mo>&gt;</mo><mi>a</mi><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mi>t</mi><mo>&lt;</mo><mi>a</mi></mtd></mtr></mtable></mrow><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "eta <math display=\"block\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "definizioa, oinarrizko problemaren soluzioa <math display=\"inline\"><mrow><msub><mi>f</mi><mn>0</mn></msub><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dela egiaztatzeko. Gero, egiaztatu zuzenean higidura-ekuazioan soluzioa dela."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Bulkada infinitesimalen batura modura uler daiteke <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> indarra.",
     "src": "media/irudiak/447885e7776f0e4b.svg",
     "zabalera": 205
    },
    {
     "mota": "testua",
     "html": "Alderantziz, indar guztiak bulkada infinitesimalen batura direnez, <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "dagokion soluzio iraunkorra oinarrizko problemaren soluzioa erabiliz lortzen da, gainezarmenaren printzipioari esker: <math display=\"block\"><mrow><msub><mi>x</mi><mi>u</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu (7.101) eta (7.112) baliokideak direla."
      }
     ]
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Taupadak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Eman dezagun puntu batean maiztasun desberdineko bi oszilazioren batura dugula (adibidez, bi soinu-nota entzuten direnean gertatzen da hau): <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>1</mn></msub><mo>+</mo><msub><mi>z</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>10</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>20</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi fasoreen arteko <math display=\"block\"><mrow><mi>δ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>20</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>10</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>20</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>10</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "angelua <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow></math> pultsazioaz aldatzen da eta, ondorioz, gauza bera gertatzen zaio <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> anplitude osoari (ikus 7.16 irudia). Horrela, <math display=\"inline\"><mrow><mi>δ</mi><mrow><mi mathvariant=\"normal\">mod</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>π</mi><mo>≈</mo><mn>0</mn></mrow></math> denean bi fasoreak fasean egongo dira eta anplitudea maximoa izango da: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≈</mo><msub><mi>A</mi><mn>1</mn></msub><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub></mrow></math>. Bestalde, <math display=\"inline\"><mrow><mi>δ</mi><mrow><mi mathvariant=\"normal\">mod</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>π</mi><mo>≈</mo><mi>π</mi></mrow></math> denean bi fasoreak kontrafasean daude eta anplitudea minimoa da: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≈</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>A</mi><mn>1</mn></msub><mo>−</mo><msub><mi>A</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Taupadak <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub></mrow></math> kasuan goian eta <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><msub><mi>A</mi><mn>2</mn></msub></mrow></math> denean behean.",
     "src": "media/irudiak/9a2748a6a02ffe80.svg",
     "zabalera": 312
    },
    {
     "mota": "testua",
     "html": "Gainera, erraz egiaztatzen da ondoko era baliokidean idazten dela (7.113) oszilazio osoa: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><msub><mi>A</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>1</mn></msub><mo>−</mo><msub><mi>A</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>10</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ε</mi><mo>≡</mo><mfrac><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>μ</mi><mo>≡</mo><mfrac><mrow><msub><mi>φ</mi><mn>10</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>20</mn></msub></mrow><mn>2</mn></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>≡</mo><mfrac><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>+</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>ξ</mi><mo>≡</mo><mfrac><mrow><msub><mi>φ</mi><mn>10</mn></msub><mo>+</mo><msub><mi>φ</mi><mn>20</mn></msub></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(Jakina, (7.115) emaitzan 1 eta 2 indizeak elkarrekin trukatuz beste adierazpen baliokide bat lortzen da.)"
    },
    {
     "mota": "testua",
     "html": "Kontsidera dezagun, hasteko, <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow></math> dugula. Kasu horretan, (7.113) oszilazioa ondokora laburtzen da: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mn>2</mn><msub><mi>A</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Astiro-astiro aldatzen den <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> anplitudeko oszilazioak (<math display=\"inline\"><mrow><mi>ω</mi><mo>≈</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "pultsazioak) dira hauek: <strong>taupadak</strong> deitzen dira. 7.16 irudian erakusten dira, goiko grafikoan, <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>/</mi><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><mn>0.9</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>10</mn></msub><mo>=</mo><msub><mi>φ</mi><mn>20</mn></msub><mo>=</mo><mn>0</mn></mrow></math> kasuan. Beheko grafikoan ikus daiteke zer gertatzen den <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>≠</mo><msub><mi>A</mi><mn>2</mn></msub></mrow></math>  denean: anplitudearen modulazioa ez da osoa. Edozein kasutan hauxe dugu taupaden maiztasuna:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>ν</mi><mi>t</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>ν</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ν</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zergatik (7.119) eta ez <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>/</mi><mn>2</mn><mi>π</mi></mrow></math>?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Adibidez, radar baten bidez automobilen abiadura neurtzeko erabil daitezke taupadak, Doppler efektuarekin batera (ikus 9.61 problema). Bestalde, diapasoi bat nota bereko piano-soka baten ondoan jartzean, taupadak entzungo dira, maiztasunak ez badira guztiz berdinak: tentsioa alda daiteke taupadak desagerrarazteko eta pianoa gozatzeko."
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Oszilladore harmoniko anisotropoa bi dimentsiotan",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kontsidera dezagun <math display=\"inline\"><mi>m</mi></math> masako partikularen higidura <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>x</mi></msub><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msub><mi>k</mi><mi>y</mi></msub><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "potentzial elastiko anisotropoan (ikus 7.76 problema). Dagokion lagrangearrean <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>y</mi></math> koordenatuak banandurik agertzen dira, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>L</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>x</mi></msub><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msub><mi>k</mi><mi>y</mi></msub><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><msubsup><mi>ω</mi><mi>x</mi><mn>2</mn></msubsup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><msubsup><mi>ω</mi><mi>y</mi><mn>2</mn></msubsup><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mi>x</mi></msub><mo>≡</mo><msqrt><mfrac><msub><mi>k</mi><mi>x</mi></msub><mi>m</mi></mfrac></msqrt><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mi>y</mi></msub><mo>≡</mo><msqrt><mfrac><msub><mi>k</mi><mi>y</mi></msub><mi>m</mi></mfrac></msqrt><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta gauza bera gertatzen da higidura-ekuazioetan: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mi>x</mi><mn>2</mn></msubsup><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mi>y</mi><mn>2</mn></msubsup><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi oszilador harmoniko <em>independente</em> ditugu. Soluzioak zuzenean idazten dira: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msub><mi>C</mi><mi>x</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mi>x</mi></msub><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><msub><mi>A</mi><mi>x</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>x</mi></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mrow><mi>x</mi><mn>0</mn></mrow></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mi>y</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mi>y</mi></msub><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><msub><mi>A</mi><mi>y</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>y</mi></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mrow><mi>y</mi><mn>0</mn></mrow></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Adibide honetan (eta, adibidez, 6.69 problemako oszilazio txikietan) jatorrizko koordenatuetan lortzen dira oszilazio independenteak, baina hori ez da beti horrela gertatzen eta oszilazio independenteak agerian jartzen dituzten koordenatuak (koordenatu normalak, hain zuzen) aurkitzeko metodoa aztertuko dugu 7.6 eta 7.7 ataletan."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Modu normalak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>A</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math> denean, <math display=\"inline\"><msub><mi>ω</mi><mi>x</mi></msub></math> pultsazioa dugu bakarrik, higidura periodikoa da eta osziladorea <strong>lehen moduan</strong> dagoela esaten da. Era berean, <math display=\"inline\"><mrow><msub><mi>A</mi><mi>x</mi></msub><mo>=</mo><mn>0</mn></mrow></math> denean, <math display=\"inline\"><msub><mi>ω</mi><mi>y</mi></msub></math> pultsazioko higidura periodikoa dugu eta bigarren moduan dago osziladorea. Beraz, <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>x</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>y</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "matrize-notazioa erabiliz, soluzioa bi modu independenteen konbinazio gisa idazten da <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><msub><mi>C</mi><mi>x</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mi>x</mi></msub><mi>t</mi></mrow></msup><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>x</mi></msub><mo>+</mo><msub><mi>C</mi><mi>y</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mi>y</mi></msub><mi>t</mi></mrow></msup><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>y</mi></msub><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><msub><mi>A</mi><mi>x</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>x</mi></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mrow><mi>x</mi><mn>0</mn></mrow></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>x</mi></msub><mo>+</mo><msub><mi>A</mi><mi>y</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>y</mi></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mrow><mi>y</mi><mn>0</mn></mrow></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Lissajousen irudiak.",
     "src": "media/irudiak/c54d365d9684a873.svg",
     "zabalera": 401
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lissajousen irudiak"
    },
    {
     "mota": "testua",
     "html": "Bi pultsazioen zatidura arrazionala bada, <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>y</mi></msub><mi>/</mi><msub><mi>ω</mi><mi>x</mi></msub><mo>=</mo><mi>p</mi><mi>/</mi><mi>q</mi></mrow></math> dugu, <math display=\"inline\"><mi>p</mi></math> eta <math display=\"inline\"><mi>q</mi></math> zenbaki natural elkarrekiko lehenak direlarik. Beraz, norabide bietako oszilazioen periodoen zatidura ere arrazionala da <math display=\"inline\"><mrow><msub><mi>T</mi><mi>y</mi></msub><mi>/</mi><msub><mi>T</mi><mi>x</mi></msub><mo>=</mo><mi>q</mi><mi>/</mi><mi>p</mi></mrow></math> eta biek onartzen dute <math display=\"inline\"><mrow><mi>T</mi><mo>≡</mo><mi>q</mi><msub><mi>T</mi><mi>x</mi></msub><mo>=</mo><mi>p</mi><msub><mi>T</mi><mi>y</mi></msub></mrow></math>  periodoa: higidura periodikoa izango da. 7.17 irudiko lehen zortzi errenkadetan orbita periodiko batzuk ikus daitezke, <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>y</mi></msub><mi>/</mi><msub><mi>ω</mi><mi>x</mi></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>δ</mi><mo>≡</mo><msub><mi>φ</mi><mrow><mi>y</mi><mn>0</mn></mrow></msub><mo>−</mo><msub><mi>φ</mi><mrow><mi>x</mi><mn>0</mn></mrow></msub></mrow></math> magnitudeen bidez sailkaturik. <br> Bi oszilazioen pultsazioak ez badira elkarneurgarriak, orbita ez da periodikoa; ez da ixten eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>−</mi><msub><mi>A</mi><mi>x</mi></msub><mo>≤</mo><mi>x</mi><mo>≤</mo><msub><mi>A</mi><mi>x</mi></msub><mo>,</mo><mi>−</mi><msub><mi>A</mi><mi>y</mi></msub><mo>≤</mo><mi>y</mi><mo>≤</mo><msub><mi>A</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> laukizuzeneko puntu bakoitzetik nahi bezain hurbil pasatzen da: aipaturiko laukizuzenean dentsoa da. 7.17 irudiko azken lerroan ikus daitezke adibide batzuetako orbiten zati luzeago bat marraztuz gero laukizuzena beterik agertuko litzateke. Higidura biperiodikoa da."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Oszilazio mihiztatuak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Azter dezagun 7.19 irudiko sistema mekanikoa. Goiko partean malgukiak deformatu gabe daude. Koordenatu orokortutzat oreka horretatik neurtutako <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math> abzisak aukeratuko ditugu. Horrela, ezkerreko eta eskuineko malgukien deformazioak <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math> dira eta erdikoarena <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub></mrow></math>. Hortaz, hauxe dugu lagrangearra: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>k</mi><mo>′</mo></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msubsup><mi>x</mi><mn>2</mn><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Oszilazio mihiztatuak.",
     "src": "media/irudiak/310af721becbf2ca.svg",
     "zabalera": 207
    },
    {
     "mota": "testua",
     "html": "Higidura-ekuazioak zuzenean kalkulatzen dira, <math display=\"block\"><mrow><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msup><mi>k</mi><mo>′</mo></msup><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>−</mo><msup><mi>k</mi><mo>′</mo></msup><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta agerian dago ez direla independenteak: mihiztaturik daude."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Modu normalak"
    },
    {
     "mota": "testua",
     "html": "Soluzio periodikoak (hau da, modu normalak) bilatzean datza soluzioak aurkitzeko metodoa. Saia dezagun (7.131)–(7.132) ekuazioetan hurrengo erako soluzio periodiko bat: <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esponentzialak sinplifikatuz hauxe lortzen dugu: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>C</mi><mn>1</mn></msub><mo>−</mo><msup><mi>k</mi><mo>′</mo></msup><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><msup><mi>k</mi><mo>′</mo></msup><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sistema lineal homogeneo honek beti onartzen du orekari dagokion soluzio nulua: <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. Bestelako soluzioak onartzeko, sistemaren determinantea zero izateko eskatu behar da: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msup><mi>k</mi><mo>′</mo></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msup><mi>k</mi><mo>′</mo></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo>+</mo><mn>2</mn><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, bi pultsazio bakarrik gerta daitezke,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mi>k</mi><mo>+</mo><mn>2</mn><msup><mi>k</mi><mo>′</mo></msup></mrow><mi>m</mi></mfrac></msqrt><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>pultsazio normalak</strong>"
    },
    {
     "mota": "testua",
     "html": "(edo <strong>maiztasun normalak</strong>), hain zuzen. <math display=\"inline\"><msub><mi>C</mi><mi>k</mi></msub></math> koefizienteak (7.133)–(7.134)"
    },
    {
     "mota": "testua",
     "html": "ekuazioetako bat (elkarrekiko proportzionalak dira biak soluzio ez-nuluak onartzen dituztenean) ebatziz lortzen dira: <math display=\"block\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><msup><mfrac><mrow><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup></mrow><mi>k</mi></mfrac><mo>′</mo></msup><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>C</mi><mn>1</mn></msub><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>=</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><msub><mi>C</mi><mn>1</mn></msub><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>=</mo><msub><mi>ω</mi><mn>2</mn></msub></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi modu normal (hau da, bi soluzio periodiko independente) ditugu, beraz. Sistemaren soluzioa <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "denean, bi partikulak fasean eta noranzko berean higitzen dira: <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub></mrow></math>. Erdiko malgukia deformatu gabe dago eta, beraz, ez balego bezala, maiztasun normala <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> da."
    },
    {
     "mota": "irudia",
     "oina": "Lehen eta bigarren modu normalak.",
     "src": "media/irudiak/32186a4c143b6087.svg",
     "zabalera": 377
    },
    {
     "mota": "testua",
     "html": "Beste moduan, berriz, malguki horrek lan egiten du, maiztasuna handiagoa da eta hauxe dugu: <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mi>D</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi partikulen arteko desfasea <math display=\"inline\"><mi>π</mi></math> baliokoa da, kontrafasean daude eta noranzko desberdinetan higitzen dira: <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>2</mn></msub></mrow></math>. <br> Gainezarmenaren printzipioa erabiliz, higidura-ekuazioen soluzio orokorra <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>+</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><mi>A</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>01</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>02</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>−</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><mi>A</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>01</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>B</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>02</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "dela ikusten dugu. Hastapen-baldintzak erabiliz kalkula daitezke lau integrazio-konstanteak: <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>C</mi><mo>,</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>C</mi><mo>,</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>D</mi></mrow></math> eta <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>D</mi></mrow></math>; edo <math display=\"inline\"><mrow><mi>A</mi><mo>,</mo><mi>B</mi><mo>,</mo><msub><mi>φ</mi><mn>01</mn></msub></mrow></math> eta <math display=\"inline\"><msub><mi>φ</mi><mn>02</mn></msub></math>. Soluzioa periodikoa izango da <math display=\"inline\"><msub><mi>ω</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>ω</mi><mn>2</mn></msub></math> elkarneurgarriak badira eta bestela biperiodikoa. Gainera, koordenatu orokortuak aukeratzeko askatasunaz baliatuz, aurreko atalean ikusi ditugun bezalako bi oszilador independenteren moduan idatz daitezke higidura-ekuazioak. Nabaria da —adibide erraz honetan— horretarako nahikoa dela (7.144) eta (7.145)"
    },
    {
     "mota": "testua",
     "html": "ekuazioen batura eta kendura kalkulatzea. Izan ere, defini ditzagun hurrengo koordenatu orokortuak, hasierako koordenatuen konbinazio linealak direnak: <math display=\"block\"><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>≡</mo><msqrt><mfrac><mi>m</mi><mn>2</mn></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>Q</mi><mn>2</mn></msub><mo>≡</mo><msqrt><mfrac><mi>m</mi><mn>2</mn></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>+</mo><msub><mi>Q</mi><mn>2</mn></msub></mrow><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>−</mo><msub><mi>Q</mi><mn>2</mn></msub></mrow><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Koordenatu normalak</strong>"
    },
    {
     "mota": "testua",
     "html": "deitzen dira hauek. Zuzenean ikusten da kasu horretan (7.144)–(7.145) soluzioa hurrengo moduan idazten dela, anplitudeak <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>≡</mo><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mi>C</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>≡</mo><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mi>D</mi></mrow></math>  (hau da, <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>≡</mo><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mi>A</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo>≡</mo><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mi>B</mi></mrow></math>) konstanteen bidez idatziz: <math display=\"block\"><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>≡</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>01</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>Q</mi><mn>2</mn></msub><mo>≡</mo><msub><mi>C</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>02</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Koordenatu normal hauen espazio abstraktuan, beraz, orbita Lissajousen irudiren bat izango da. <math display=\"inline\"><mrow><msub><mi>Q</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "denean <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>Q</mi><mn>1</mn></msub><mi>/</mi><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mrow></math> modu normala adierazten duen <math display=\"inline\"><msub><mi>Q</mi><mn>1</mn></msub></math> aldatzen da bakarrik; <math display=\"inline\"><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "bada, geratzen zaigun <math display=\"inline\"><msub><mi>Q</mi><mn>2</mn></msub></math> koordenatua <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>Q</mi><mn>2</mn></msub><mi>/</mi><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mrow></math> moduari dagokio. Oro har, bi moduek eta bi koordenatu normalek hartuko dute parte higiduran. <br> Bi koordenatu normalak banandurik agertzen dira soluzioan ez ezik, lagrangearrean eta higidura-ekuazioetan ere."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu koordenatu normaletan (7.130) lagrangearra eta (7.131)–(7.132) higidura-ekuazioak oszilador independenteen modura idazten direla: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>Q</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><msubsup><mi>Q</mi><mn>1</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>Q</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><msubsup><mi>Q</mi><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi>Q</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><msub><mi>Q</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi>Q</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>+</mo><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><msub><mi>Q</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ikusiko dugunez, oso kasu orokorrean egin daiteke hemen lortu duguna. Nahiz eta osziladoreak mihiztaturik egon, koordenatuen transformazio <em>lineal</em> egokia eginez, <em>koordenatu normalak</em> banandurik agertzen dira lagrangearrean eta higidura-ekuazioetan. Higidura orokorrean periodo bat baino gehiago egon arren, koordenatu normal bakoitzeko oszilador (abstraktu) independente bat dugu, sistemaren higidura periodiko berezi bati dagokiona. Sistemaren azterketa, beraz, ondoen ezagutzen dugun oszilador harmonikoaren kasura laburtzen da. Adibide honetan koordenatu eta maiztasun normalak aurkitzeko erabili dugun metodoa, balio eta bektore propioen problemaren ebazpenaren antzekoa da: (7.137) baldintza ekuazio karakteristikoen egiturakoa da eta (7.135)–(7.136) direlakoen modukoak izaten dira gero bektore propioen osagaiak kalkulatzeko ebatzi behar direnak. 7.7 ataletan kasu orokorra planteatuko dugu, balio eta bektore propio orokortuen problema bat ebatziz soluzioa lortzeko."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oszilazio bortxatuak"
    },
    {
     "mota": "testua",
     "html": "Aurreko adibidean marruskadura eta kanpo-indarrak nuluak direlakoan aritu gara, baina jakina kasu askotan hori ez da egia izango eta higidura-ekuazioak ebazteko problema aljebraiko korapilatsuago bat ebatzi beharko da. Sistema lineala denez, hasteko kanpo-indar nuluei dagokien problema homogeneoa ebatzi behar da <strong>soluzio iragankorra</strong> lortzeko; gero sistema osoaren soluzio partikularra den <strong>soluzio iraunkorra</strong> gehitu behar zaio."
    },
    {
     "mota": "testua",
     "html": "Adibide moduan, kontsidera dezagun aurreko kasuko ezkerreko masak <math display=\"inline\"><mrow><msub><mi>F</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> kanpo-indarra pairatzen duela. (7.131)–(7.132) higidura-ekuazioen ordez hauxe izango dugu: <math display=\"block\"><mrow><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msup><mi>k</mi><mo>′</mo></msup><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>F</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>−</mo><msup><mi>k</mi><mo>′</mo></msup><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sistema homogeneoaren soluzioa aurreko ataleko (7.144)–(7.145) izango da eta, marruskadurarik ez dagoenez, ez da iragankorra izango kasu berezi honetan, batez besteko anplitude konstantekoa baizik. Gehitu behar zaion soluzio partikularra aurkitzeko, 7.3.1 atalean ikusitakoaz baliatuko gara. Marruskadurarik ez dela eta, (7.42)"
    },
    {
     "mota": "testua",
     "html": "adierazpenaren ondorioz soluzioaren eta indarraren arteko desfasea <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>0</mn></msub><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>π</mi></mrow></math> izatea espero dugu. <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi></mrow></msup><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> denez, <math display=\"inline\"><mi>π</mi></math> balioko desfase zeinu hutsa da eta, beraz, <math display=\"inline\"><mrow><msub><mi>x</mi><mi>i</mi></msub><mo>=</mo><msub><mi>C</mi><mi>i</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "moduko soluzio partikularra saiatu dugu (7.155)–(7.156)  ekuazioetan: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>C</mi><mn>1</mn></msub><mo>−</mo><msup><mi>k</mi><mo>′</mo></msup><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><msub><mi>F</mi><mn>0</mn></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><msup><mi>k</mi><mo>′</mo></msup><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sistema hau (7.135)–(7.136) delakoaren antzekoa da: osziladoreen <math display=\"inline\"><mi>ω</mi></math>-ren ordez kanpo-indarraren <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>"
    },
    {
     "mota": "testua",
     "html": "agertzen da eta orain sistema ez-homogeneoa da eta soluzio bakarra izango du <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>≠</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>,</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "denean, hau da, erresonantziarik ez dagoenean."
    },
    {
     "mota": "testua",
     "html": "Izan ere, erraz kalkulatzen den soluzioa <math display=\"block\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mi>k</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup></mrow></mfrac><msub><mi>F</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mfrac><msup><mi>k</mi><mo>′</mo></msup><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mi>k</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup></mrow></mfrac><msub><mi>F</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "edota, (7.138) pultsazio normalak erabiliz, <math display=\"block\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mfrac><msub><mi>F</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mfrac><msub><mi>F</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da eta 7.21 irudian erakusten da <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>≡</mo><msqrt><mfrac><mrow><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup></mrow><mn>2</mn></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup></mrow><mi>m</mi></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "parametroa erabiliz."
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><msub><mi>C</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>C</mi><mn>2</mn></msub></math> koefizienteak.",
     "src": "media/irudiak/dd300aee744b611e.svg",
     "zabalera": 322
    },
    {
     "mota": "testua",
     "html": "Espero bezala, kanpo-indarraren maiztasuna eta maiztasun normal bat berdinak direnean gertatuko da erresonantzia. Marruskadura arbuiatzean erresonantzia-anplitudea infinitura doa (egia esan, limitean soluzio iraunkorra ez da periodikoa eta aurreko azterketa ez da zuzenean aplikatzen: ikus 7.53 problema). 7.21 irudian ikusten da noiz dauden fasean eta kontrafasean bi osziladoreak, eta osziladore bakoitza kanpo-indarrekiko, soluzio iraunkorrean. (Kanpo-indarrek eta indargetzeak kasu orokorrean duten eragina [37] testuan aztertzen dira.)"
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Oszilazio txikiak eta koordenatu normalak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Azter dezagun energia potentzial orokor baten minimo koadratiko bakartu baten inguruko higidura, hau da, oreka egonkorretik hurbil gertatzen diren oszilazioak. Minimoan <math display=\"inline\"><mrow><mi>∂</mi><mi>V</mi><mi>/</mi><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></math> deribatuak zero direnez, honela idazten da energia potentzialaren <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub></math> oreka-puntuaren inguruko Taylorren garapena: <math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>V</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mi>i</mi></msub><mo>−</mo><msub><mi>q</mi><mrow><mi>i</mi><mn>0</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mi>j</mi></msub><mo>−</mo><msub><mi>q</mi><mrow><mi>j</mi><mn>0</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ezer ez da aldatzen <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> konstantea zerotzat hartzen badugu, energiaren zero maila aukeratzeko askatasunaz baliatuz. Era berean, ez da ezer galtzen translazio egokiaren bidez koordenatu orokortuen jatorria oreka-puntuan aukeratzen bada, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> izateko moduan. Hemendik aurrera, notazioa laburtzeko, beti egingo ditugu bi aukera horiek eta, adibidez, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> geratuko da."
    },
    {
     "mota": "testua",
     "html": "Egindako hipotesiak betetzen badira, energia potentzialaren lehen hurbilketa interesgarria koadratikoa da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>q</mi><mi>i</mi></msub><msub><mi>q</mi><mi>j</mi></msub><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "non"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>≡</mo><msub><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>V</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>0</mn></msub><mo>=</mo><msub><mi>V</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "elementuak dituen <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math>  <strong>zurruntasun-matrizea</strong> simetrikoa eta definitu positiboa den, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "puntuan minimo bat dagoelako: <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mo>∀</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo>≥</mo><mn>0</mn><mo>,</mo><mo>∀</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>…</mi><mo>=</mo><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bestalde, <em>sistema mekanikoa naturala dela</em> onartuko dugu beti; hortaz, (6.140) emaitzaren hurbilketa honela idazten da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>≡</mo><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Energia mekanikoa negatiboa ez denez, <math display=\"inline\"><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> elementu konstanteetako <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math>  <strong>masa-matrizea</strong>"
    },
    {
     "mota": "testua",
     "html": "simetrikoa eta definitu positiboa da: <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mo>∀</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo>≥</mo><mn>0</mn><mo>,</mo><mo>∀</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>…</mi><mo>=</mo><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aztertu nahi dugun hurbilketan, lagrangearrean gai koadratikoak gordeko dira soilik:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>L</mi><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̇</mo></mover><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><msup><mi mathvariant=\"bold-italic\">𝒒</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>−</mo><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>q</mi><mi>i</mi></msub><msub><mi>q</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hemendik lortzen diren Lagrangeren ekuazioak higidura-ekuazioen hurbilketa linealak izango dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mi>j</mi></msub><mo>+</mo><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>q</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Modu eta pultsazio normalak aurkitzeko, <math display=\"inline\"><mrow><msub><mi>q</mi><mi>k</mi></msub><mo>=</mo><msub><mi>C</mi><mi>k</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><msub><mi>A</mi><mi>k</mi></msub><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> moduko soluzio periodikoak saia daitezke zuzenean; baina hurrengo emaitza aljebraikoak ematen digu kalkulua egiteko modu sistematikoa."
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Balio eta bektore propio orokortuen problema])"
    },
    {
     "mota": "testua",
     "html": "Eman dezagun bi matrize simetriko ditugula, <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑻</mi><mi>⊤</mi></msup><mo>=</mo><mi mathvariant=\"bold-italic\">𝑻</mi></mrow></math> eta <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑽</mi><mi>⊤</mi></msup><mo>=</mo><mi mathvariant=\"bold-italic\">𝑽</mi></mrow></math>, eta lehenengoa definitu positiboa dela. Ondoko <strong>ekuazio karakteristikoak</strong> dituen <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>λ</mi><mi>n</mi></msub></mrow></math> soluzioak (<strong>erro karakteristikoak</strong> edota balio propio orokortuak) errealak dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>−</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝑻</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>V</mi><mn>11</mn></msub><mo>−</mo><mi>λ</mi><msub><mi>T</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>V</mi><mn>12</mn></msub><mo>−</mo><mi>λ</mi><msub><mi>T</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>V</mi><mrow><mn>1</mn><mi>n</mi></mrow></msub><mo>−</mo><mi>λ</mi><msub><mi>T</mi><mrow><mn>1</mn><mi>n</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>V</mi><mn>21</mn></msub><mo>−</mo><mi>λ</mi><msub><mi>T</mi><mn>21</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>V</mi><mn>22</mn></msub><mo>−</mo><mi>λ</mi><msub><mi>T</mi><mn>22</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>V</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo>−</mo><mi>λ</mi><msub><mi>T</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mo>⋱</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>V</mi><mrow><mi>n</mi><mn>1</mn></mrow></msub><mo>−</mo><mi>λ</mi><msub><mi>T</mi><mrow><mi>n</mi><mn>1</mn></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>V</mi><mrow><mi>n</mi><mn>2</mn></mrow></msub><mo>−</mo><mi>λ</mi><msub><mi>T</mi><mrow><mi>n</mi><mn>2</mn></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>V</mi><mrow><mi>n</mi><mi>n</mi></mrow></msub><mo>−</mo><mi>λ</mi><msub><mi>T</mi><mrow><mi>n</mi><mi>n</mi></mrow></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>V</mi></math> forma ere definitu positiboa bada, balio propio orokortuak positiboak dira. Edozein kasutan, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mi>i</mi></msub></mrow></math> bakoitzarekin lorturiko <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑽</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi><mo>=</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi></mrow></math> edota"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/5489692b2a2f04be.svg\" alt=\"mat(delim: #none, (V_(11) - lambda T_(11)) u_1 + (V_(12) - lambda T_(12)) u_2 + ... + (V_(1 n) - lambda T_(1 n)) u_n, =, 0; (V_(21) - lambda T_(21)) u_1 + (V_(22) - lambda T_(22)) u_2 + ... + (V_(2 n) - lambda T_(2 n)) u_n, =, 0; dots.v, , ; (V_(n 1) - lambda T_(n 1)) u_1 + (V_(n 2) - lambda T_(n 2)) u_2 + ... + (V_(n n) - lambda T_(n n)) u_n, =, 0;)\" style=\"width:31.128em;height:5.539em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "sistema lineala ebatziz gero, honako baldintza hauek betetzen dituzten <math display=\"inline\"><mi>n</mi></math> bektore independente (<math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>S</mi><mrow><mi>i</mi><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>S</mi><mrow><mi>i</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mi>n</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>S</mi><mrow><mi>i</mi><mi>n</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>) lortzen dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑺</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mn mathvariant=\"bold\">𝟏</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msubsup><mi mathvariant=\"bold-italic\">𝑼</mi><mi>i</mi><mi>⊤</mi></msubsup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mi>j</mi></msub><mo>=</mo><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>k</mi><mo>,</mo><mi>l</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>T</mi><mrow><mi>k</mi><mi>l</mi></mrow></msub><msub><mi>S</mi><mrow><mi>k</mi><mi>i</mi></mrow></msub><msub><mi>S</mi><mrow><mi>l</mi><mi>j</mi></mrow></msub><mo>=</mo><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Zutabeetan bektore horiek dituen <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑺</mi></math> matrizea alderanzgarria da (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"bold-italic\">𝑺</mi><mo>≠</mo><mn>0</mn></mrow></math>) eta dagokion aldagai-aldaketa linealak (<strong>antzekotasun-transformazioak</strong>) definituriko <math display=\"inline\"><msub><mi>X</mi><mi>i</mi></msub></math> koordenatu normalak,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑿</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mi>i</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>S</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>X</mi><mi>j</mi></msub><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "eta balio propio orokortuen <math display=\"inline\"><mrow><mi mathvariant=\"bold\">𝚲</mi><mo>≡</mo><msup><mi mathvariant=\"bold-italic\">𝑺</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>λ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrize diagonala erabiltzen badira, forma koadratiko biak era normalean (diagonalizaturik) agertzen dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑿</mi><mi>⊤</mi></msup><mo>⋅</mo><mn mathvariant=\"bold\">𝟏</mn><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑿</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>X</mi><mi>k</mi><mn>2</mn></msubsup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑿</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold\">𝚲</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑿</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>λ</mi><mi>k</mi></msub><msubsup><mi>X</mi><mi>k</mi><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hemen ez ditugu emaitza hauek frogatuko; nahikoa izango da esatea balio eta bektore propio arrunten problemaren oso antzekoa dela hau: bakarrik jarri behar da zenbait lekutan <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math> matrizea, identitate matrizearen ordez. Jakina, aipaturiko probleman bezala, hemen ere balio propioak anizkoitzak izan daitezke eta, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math> matrizeak simetrikoak direnez, balio propio orokortu baten anizkoiztasuna <math display=\"inline\"><mi>m</mi></math> bada, beti aukera daitezke —infinitu modutara— dagokion bektore propioen azpiespazioan (7.173) ortogonaltasun-baldintza betetzen duten <math display=\"inline\"><mi>m</mi></math> bektore propio orokortu independente (7.7.2 atalean aztertuko dugu horrelako kasu bat)."
    },
    {
     "mota": "testua",
     "html": "Askotan aspergarria den kalkulu osoa automatikoki egin daiteke <em>Mathematica</em>  [52] sisteman hurrengo fitxategia erabiliz (ikus 7.22 irudia): <code>http://tp.lc.ehu.eus/jma/mekanika/bbpo.nb</code>"
    },
    {
     "mota": "irudia",
     "oina": "7.19 irudiko sistemaren modu normalak <em>Mathematica</em>-ren bidez.",
     "src": "media/irudiak/422710c8e3418a4e.svg",
     "zabalera": 3
    },
    {
     "mota": "testua",
     "html": "Jatorrian minimo koadratiko bakartu bat dagoenez, <math display=\"inline\"><mi>V</mi></math> forma definitu positiboa izango da eta dagozkion balio propioak <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>i</mi></msub><mo>≡</mo><msubsup><mi>ω</mi><mi>i</mi><mn>2</mn></msubsup><mo>&gt;</mo><mn>0</mn></mrow></math> eran adieraziko ditugu. Beraz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒒</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑸</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mi>q</mi><mi>i</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>S</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>Q</mi><mi>j</mi></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "ekuazioetan definituriko koordenatu normaletan energia zinetikoa eta potentziala diagonalaziturik agertzen dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̇</mo></mover><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mover><mi mathvariant=\"bold-italic\">𝑸</mi><mo accent=\"true\">̇</mo></mover><mi>⊤</mi></msup><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝑸</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mover><mi>Q</mi><mo accent=\"true\">̇</mo></mover><mi>k</mi><mn>2</mn></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi mathvariant=\"bold-italic\">𝒒</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi mathvariant=\"bold-italic\">𝑸</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold\">𝚲</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑸</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>q</mi><mi>i</mi></msub><msub><mi>q</mi><mi>j</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>ω</mi><mi>k</mi><mn>2</mn></msubsup><msubsup><mi>Q</mi><mi>k</mi><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orduan, modu normalak askatu egiten dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>L</mi><mi>i</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>L</mi><mi>i</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msubsup><mover><mi>Q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msubsup><mi>ω</mi><mi>i</mi><mn>2</mn></msubsup><msubsup><mi>Q</mi><mi>i</mi><mn>2</mn></msubsup><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑸</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi mathvariant=\"bold\">𝚲</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑸</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>Q</mi><mo accent=\"true\">̈</mo></mover><mi>i</mi></msub><mo>+</mo><msubsup><mi>ω</mi><mi>i</mi><mn>2</mn></msubsup><msub><mi>Q</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>Q</mi><mi>i</mi></msub></math> koordenatuetako espazio abstraktuan <math display=\"inline\"><mi>n</mi></math> oszilazio independente ditugu, bakoitza sistemaren soluzio periodiko bat (modu normal bat) dela."
    },
    {
     "mota": "testua",
     "html": "Hala ere, <math display=\"inline\"><mi>V</mi></math> forma ez bada definitu positiboa (minimoa bakartua ez delako edo), maiztasun propioen bat zero izan daiteke. Horrelako kasu batean, dagokion modu normala ez da periodikoa izango, (7.177) ekuazioan <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn></mrow></math> egitean <math display=\"inline\"><mrow><msub><mi>Q</mi><mi>i</mi></msub><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi><mi>t</mi></mrow></math> soluzioa lortzen baita. Hori gertatzen denean, modua nulua dela esaten da. (Ikus 7.7.3 atala.)"
    },
    {
     "mota": "irudia",
     "oina": "Pendulu mihiztatuak.",
     "src": "media/irudiak/75139186221635cc.svg",
     "zabalera": 171
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Pendulu mihiztatuak"
    },
    {
     "mota": "testua",
     "html": "Adibidez, kontsidera ditzagun 7.23 irudiko bi pendulu berdinak. Posizio bertikaletan daudenean malgukia deformatu gabe dago: oreka-posizioa da hori, beraz. Energia mekanikoa eta dagokion matrizea zuzenean idazten dira eta, koadratikoak direnez, ez da beste inolako hurbilketarik egin behar: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>T</mi><mn>11</mn></msub><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>T</mi><mn>12</mn></msub><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>T</mi><mn>22</mn></msub><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑻</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> (Energia zinetikoa diagonala denez, aukeratutako koordenatuak <strong>ortogonalak</strong> direla esaten da.)"
    },
    {
     "mota": "testua",
     "html": "Bestalde, pendulu baten energia potentzial grabitatorioa minimoa da aipaturiko posizioan; beraz, <math display=\"block\"><mrow><mi>m</mi><mi>g</mi><msub><mi>y</mi><mi>i</mi></msub><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>≈</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>l</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><msubsup><mi>θ</mi><mi>i</mi><mn>2</mn></msubsup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hurbilketa egingo dugu eta ondoriorik gabeko <math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><mi>g</mi><mi>l</mi></mrow></math> gai konstantea ahaztuko. Malgukiaren energia elastikoa kalkulatzeko, deformazioa erabili behar dugu: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>d</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>l</mi><msub><mi>θ</mi><mn>2</mn></msub><mo>−</mo><mi>l</mi><msub><mi>θ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mi>…</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu hurbilketa hau Taylorren garapenaren bidez."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Energia potentzialean deformazioaren karratua agertzen denez, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>d</mi></mrow></math>-ren hurbilketa lineala nahikoa da: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>θ</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>θ</mi><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>θ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>V</mi><mn>11</mn></msub><msubsup><mi>θ</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>V</mi><mn>12</mn></msub><msub><mi>θ</mi><mn>1</mn></msub><msub><mi>θ</mi><mn>2</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>V</mi><mn>22</mn></msub><msubsup><mi>θ</mi><mn>2</mn><mn>2</mn></msubsup></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><mi>g</mi><mi>l</mi><mo>+</mo><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><mi>g</mi><mi>l</mi><mo>+</mo><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑽</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><mi>g</mi><mi>l</mi><mo>+</mo><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><mi>g</mi><mi>l</mi><mo>+</mo><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><msup><mi>ω</mi><mn>2</mn></msup></math> balio propio orokortuak aurkitzeko, (7.171) ekuazio karakteristikoa ebatzi behar da: <img class=\"formula formula-d\" src=\"media/formulak/63bf12ab5566aee6.svg\" alt=\"0 = abs(bold(V) - omega^2 bold(T)) = mat(delim: &quot;|&quot;, m g l + k l^2 - m l^2 omega^2, -k l^2; -k l^2, m g l + k l^2 - m l^2 omega^2) #linebreak() = (m g l + k l^2 - m l^2 omega^2)^2 - (k l^2)^2 = (m g l - m l^2 omega^2) (m g l + 2 k l^2 - m l^2 omega^2).\" style=\"width:37.072em;height:5.414em\" loading=\"lazy\"> Pultsazio normalak, hortaz, hauexek ditugu:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mfrac><mi>g</mi><mi>l</mi></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mrow><mfrac><mi>g</mi><mi>l</mi></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></mrow></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Balio hauek ordezkatu behar dira (7.172) ekuazioetan bektore propio orokortuak kalkulatzeko. Kasu honetan bi ekuazioak elkarrekiko proportzionalak dira eta, adibidez, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><mi>l</mi><mo>+</mo><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup><mo>−</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>u</mi><mn>1</mn></msub><mo>−</mo><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup><msub><mi>u</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> (7.187) balioekin ebatziz, <math display=\"inline\"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><msub><mi>u</mi><mn>2</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>u</mi><mn>2</mn></msub></mrow></math> lortzen da. Balio orokortu desberdinei dagozkienez, bi bektoreak (<math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math>-rekiko) ortogonalak dira automatikoki eta normalizazioa (7.173) baldintzan <math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><mi>j</mi></mrow></math> eginez lortzen da: <math display=\"block\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝑼</mi><mi>i</mi><mi>⊤</mi></msubsup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mi>i</mi></msub><mo>=</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>u</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>u</mi><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math> Ondorioz, bektore propio normalizatuak eta antzekotasun-matrizea honela idazten dira: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Jatorrizko koordenatuen eta normalen arteko erlazioa, ondorioz, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>Q</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>Q</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> da. Hortaz, honela idazten dira jatorrizko koordenatu orokortuak koordenatu normalen bidez: <math display=\"block\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>+</mo><msub><mi>Q</mi><mn>2</mn></msub></mrow><msqrt><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>−</mo><msub><mi>Q</mi><mn>2</mn></msub></mrow><msqrt><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Pendulu mihiztatuen modu normalak.",
     "src": "media/irudiak/6fccd5163904754c.svg",
     "zabalera": 349
    },
    {
     "mota": "testua",
     "html": "Lehen modu normalean, beraz, <math display=\"block\"><mrow><msub><mi>Q</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mfrac><msub><mi>Q</mi><mn>1</mn></msub><msqrt><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup></mrow></math> dugu: bi penduluak modu berean higitzen dira euren maiztasun normalarekin, malgukia deformatu gabe, sisteman ez balego bezala. Bigarren moduan, ordea, maiztasuna handiagoa da eta bi penduluak kontrafasean daude: <math display=\"block\"><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mfrac><msub><mi>Q</mi><mn>2</mn></msub><msqrt><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Saiatu zuzenean <math display=\"inline\"><mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>=</mo><msub><mi>C</mi><mi>i</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math> moduko soluzio periodikoak, aurreko adibidearen maiztasun eta modu normalak aurkitzeko."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Soluzio orokorra hurrengo modukoa izango da: <math display=\"block\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>+</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><mi>A</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>01</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>02</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>−</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><mi>A</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>01</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>B</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>02</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Taupadak])"
    },
    {
     "mota": "testua",
     "html": "Eman dezagun, orain, eskuineko pendulua posizio bertikalean geldi dagoenean ezkerrekoa <math display=\"inline\"><mi>α</mi></math> balioko angelutik askatzen dugula. Hastapen-baldintzak <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>α</mi><mo>,</mo><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> dira eta dagokien soluzioa <math display=\"block\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>α</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>+</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow><mn>2</mn></mfrac><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>1</mn></msub></mrow><mn>2</mn></mfrac><mi>t</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mfrac><mi>α</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>α</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>+</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow><mn>2</mn></mfrac><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>1</mn></msub></mrow><mn>2</mn></mfrac><mi>t</mi><mi>.</mi></mrow></math> Hortaz, 7.4 atalean egindakoa kontuan hartuz, <math display=\"block\"><mrow><mi>ε</mi><mo>≡</mo><mfrac><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>1</mn></msub></mrow><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>≡</mo><mfrac><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>+</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow><mn>2</mn></mfrac></mrow></math> definizioekin, higidura-ekuazioen soluzioak <math display=\"block\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><mi mathvariant=\"normal\">cos</mi><mi>ε</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><mi mathvariant=\"normal\">sin</mi><mi>ε</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math> edota <math display=\"block\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>α</mi><mi mathvariant=\"normal\">cos</mi><mi>ε</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>α</mi><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo>−</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math> moduan idazten dira."
    },
    {
     "mota": "irudia",
     "oina": "Penduluen eboluzioa mihiztadura ahularen kasuan.",
     "src": "media/irudiak/4a9ceedf5da4d87a.svg",
     "zabalera": 480
    },
    {
     "mota": "testua",
     "html": "Orain mihiztadura ahula bada, <math display=\"block\"><mrow><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>≪</mo><mfrac><mi>g</mi><mi>l</mi></mfrac><mo>,</mo></mrow></math> hauxe geratzen zaigu: <math display=\"block\"><mrow><mi>ε</mi><mo>=</mo><mfrac><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>1</mn></msub></mrow><mn>2</mn></mfrac><mo>≈</mo><mfrac><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow><mrow><mn>2</mn><msqrt><mrow><mi>g</mi><mi>/</mi><mi>l</mi></mrow></msqrt></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>=</mo><mfrac><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>+</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow><mn>2</mn></mfrac><mo>≈</mo><msqrt><mfrac><mi>g</mi><mi>l</mi></mfrac></msqrt></mrow></math> eta <math display=\"inline\"><mrow><mi>ε</mi><mo>≪</mo><mi>ω</mi></mrow></math>. Beraz, bi angeluen (7.203)–(7.204) eboluzioak taupadak dira, hau da, astiro aldatzen den anplitudeko oszilazioak. Gainera, <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> balioko desfasea dago <math display=\"inline\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> maiztasun txikiarekin aldatzen diren anplitudeen artean. Hasieran pendulu baten anplitudea maximoa da eta bestearena nulua, baina lehenengoa txikituz doa bestea handitzen den heinean, maximoa izan arte. Horrela, etengabe trukatzen dituzte elkarrekin anplitudea eta energia mekanikoa."
    },
    {
     "mota": "irudia",
     "oina": "Penduluen eboluzioa <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msub><mi>θ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math> kasuan.",
     "src": "media/irudiak/8f724c71b3b8e919.svg",
     "zabalera": 418
    },
    {
     "mota": "testua",
     "html": "7.4 atalean ikusi genuen antzeko maiztasuneko bi oszilazio gainezartzen direnean, (7.196) kasuan bezala, taupadak agertzen dira<span class=\"j-oin\">[Entzun <code>http://tp.lc.ehu.eus/jma/mekanika/oszilazioak/taupadak.html</code> orrialdekoak eta ikus <code>http://tp.lc.ehu.eus/jma/mekanika/oszilazioak/normalak.html</code> simulazioa.]</span>."
    },
    {
     "mota": "testua",
     "html": "Bigarren osziladorea hasieran geldi ez badago, bere energia ez da inoiz zero: energia-transferentzia ez da osoa, 7.27 irudian erakusten den moduan."
    },
    {
     "mota": "irudia",
     "oina": "Penduluen eboluzioa luzeren arteko erlazioa <math display=\"inline\"><mrow><msub><mi>l</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><msub><mi>l</mi><mn>1</mn></msub></mrow></math> denean.",
     "src": "media/irudiak/a8600666dba753ad.svg",
     "zabalera": 418
    },
    {
     "mota": "testua",
     "html": "Azpimarratu behar da kasu honetan gertatzen diren taupadak osziladoreen (penduluen) maiztasun normalak berdinak direnean (<math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>l</mi></mrow></msqrt></mrow></math> izatearen ondorioak direla. Gauza bera gertatzen da bi maiztasun normalak ia berdinak direnean, baina oso desberdinak badira eta osziladore bat higitzen hasten bada, bi modu normalen anplitudeak oso desberdinak izango dira: bigarren osziladorea ia ez da mugituko eta lehenengoaren anplitudea ia konstantea izango da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi 7.6 ataleko adibidea hemengo metodo sistematikoaz baliatuz."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Modu normal endekatuak"
    },
    {
     "mota": "testua",
     "html": "Kontsidera dezagun 7.28 irudiko xafla homogeneoa, lau malguki berdinen gainean jarritakoa. Eman dezagun azken hauek bakarrik higi daitezkeela norabide bertikalean. Kasu horretan, koordenatu orokortu egokiak dira masa zentroaren <math display=\"inline\"><mi>z</mi></math> altuera eta —orientazioa ezagutzeko— irudiko <math display=\"inline\"><mi>φ</mi></math> eta <math display=\"inline\"><mi>θ</mi></math> angeluak. Koordenatu orokortu horietan, eta oreka-konfigurazio horizontaletik hurbil gaudela gogoratuz, honela idazten dira lau erpinen altuerak: <math display=\"block\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>=</mo><mi>z</mi><mo>−</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mi>φ</mi><mo>−</mo><mfrac><mi>b</mi><mn>2</mn></mfrac><mi>θ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>2</mn></msub><mo>=</mo><mi>z</mi><mo>+</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mi>φ</mi><mo>−</mo><mfrac><mi>b</mi><mn>2</mn></mfrac><mi>θ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>3</mn></msub><mo>=</mo><mi>z</mi><mo>+</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mi>φ</mi><mo>+</mo><mfrac><mi>b</mi><mn>2</mn></mfrac><mi>θ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>4</mn></msub><mo>=</mo><mi>z</mi><mo>−</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mi>φ</mi><mo>+</mo><mfrac><mi>b</mi><mn>2</mn></mfrac><mi>θ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Malguki batzuen gainean jarritako xafla.",
     "src": "media/irudiak/caea735751baad54.svg",
     "zabalera": 226
    },
    {
     "mota": "testua",
     "html": "Ez dugu esan nondik neurtzen diren masa-zentroaren eta erpinen altuerak. <math display=\"inline\"><msub><mi>z</mi><mi>i</mi></msub></math> koordenatuak malgukien luzapenak badira, energia potentziala hauxe da: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>m</mi><mi>g</mi><mi>z</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>4</mn></munderover><msubsup><mi>z</mi><mi>i</mi><mn>2</mn></msubsup><mo>=</mo><mi>m</mi><mi>g</mi><mi>z</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>z</mi><mn>2</mn></msup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>φ</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><msup><mi>θ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Baina, hau <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mi>g</mi><mo>+</mo><mn>4</mn><mi>k</mi><mi>z</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup><mi>φ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><mi>k</mi><msup><mi>b</mi><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> baldintzek emandako <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>0</mn></msub><mo>,</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>,</mo><msub><mi>θ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>4</mn><mi>k</mi></mrow></mfrac><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> oreka-konfigurazioaren inguruan garatu behar dugu: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><msub><mi>z</mi><mn>0</mn></msub><mo>+</mo><mn>2</mn><mi>k</mi><msubsup><mi>z</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>4</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>φ</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><msup><mi>θ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> (Adibide honetan, energia potentzialean agertzen den ordena altuena koadratikoa denez, garapen hau zehatza da, ez hurbilketa bat.) Beraz, garrantzi gabeko lehen gaia alde batera utzita, altuerak oreka-konfiguraziotik neurtzen badira (<math display=\"inline\"><mrow><mi>y</mi><mo>≡</mo><mi>z</mi><mo>−</mo><msub><mi>z</mi><mn>0</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>y</mi><mi>i</mi></msub><mo>≡</mo><msub><mi>z</mi><mi>i</mi></msub><mo>−</mo><msub><mi>z</mi><mn>0</mn></msub></mrow></math> eginez), honela geratzen da energia potentziala, gai linealik gabe: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>4</mn></munderover><msubsup><mi>y</mi><mi>i</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>φ</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><msup><mi>θ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Energia zinetikoa idazteko, solidoaren sistemako triedroa erabiliko dugu: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>24</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>24</mn></mfrac><mi>m</mi><msup><mi>b</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> (7.214) eta (7.215) energiak diagonalak direnez, balio eta bektore propioen problema ia ebatzita dago, oszilazioak independenteak baitira: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>k</mi><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mi>φ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>b</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>k</mi><msup><mi>b</mi><mn>2</mn></msup><msup><mi>θ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Hemen zuzenean ikusten da pultsazio normalak <math display=\"block\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msub><mi>ω</mi><mn>3</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mn>12</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt></mrow></math> direla eta jatorrizko koordenatuak normalekiko proportzionalak: <math display=\"block\"><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>=</mo><msqrt><mi>m</mi></msqrt><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>Q</mi><mn>2</mn></msub><mo>=</mo><msqrt><mfrac><mi>m</mi><mn>12</mn></mfrac></msqrt><mi>a</mi><mi>φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>Q</mi><mn>3</mn></msub><mo>=</mo><msqrt><mfrac><mi>m</mi><mn>12</mn></mfrac></msqrt><mi>b</mi><mi>θ</mi><mi>.</mi></mrow></math> Izan ere, erraz ikusten da honela geratzen dela lagrangearra definizio horiekin: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>Q</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><msubsup><mi>Q</mi><mn>1</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>Q</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><msubsup><mi>Q</mi><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>Q</mi><mo accent=\"true\">̇</mo></mover><mn>3</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>ω</mi><mn>3</mn><mn>2</mn></msubsup><msubsup><mi>Q</mi><mn>3</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Adibide honetan balio propio bat, pultsazio normal bat, bikoitza da eta dagozkion bi koordenatu normalen koefiziente konstanteetako konbinazio lineal normalizatu guztiak ere normalak dira, biek betetzen baitute higidura-ekuazio bera: <math display=\"block\"><mrow><msub><mover><mi>Q</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>+</mo><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><msub><mi>Q</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>Q</mi><mo accent=\"true\">̈</mo></mover><mn>3</mn></msub><mo>+</mo><msubsup><mi>ω</mi><mn>3</mn><mn>2</mn></msubsup><msub><mi>Q</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Ageri denez, <math display=\"inline\"><mrow><mi>Q</mi><mo>≡</mo><msub><mi>C</mi><mn>1</mn></msub><msub><mi>Q</mi><mn>2</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>Q</mi><mn>3</mn></msub><mo>=</mo><msub><mi>D</mi><mn>1</mn></msub><mi>φ</mi><mo>+</mo><msub><mi>D</mi><mn>2</mn></msub><mi>θ</mi></mrow></math> konbinazio guztiek ekuazio bera beteko dute: <math display=\"block\"><mrow><mover><mi>Q</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mi>Q</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Ondorioz, lehenengo moduan <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>δ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dugu eta beste guztietan <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi>D</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo>+</mo><msub><mi>δ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>E</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo>+</mo><msub><mi>δ</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Modu normal nuluak"
    },
    {
     "mota": "testua",
     "html": "Azter dezagun 7.29 irudiko sistema mekaniko lineal simetrikoaren higidura bere ardatzaren norabidean, grabitatearen eragina arbuiagarria dela jorik. Molekula lineal triatomikoen eredu bakuntzat kontsidera dezakegu sistema hau. Benetako molekulen maiztasun normalak kalkulatzeko fisika kuantikoa erabili behar bada ere, ideia kualitatibo bat lortzeko (eta simetrien ondorioak ulertzeko) nahikoa izango da hurrengo kalkulu klasikoa."
    },
    {
     "mota": "irudia",
     "oina": "Molekula lineal triatomikoaren eredu bakuna.",
     "src": "media/irudiak/b3544879a3295764.svg",
     "zabalera": 236
    },
    {
     "mota": "testua",
     "html": "Energia zinetikoa eta potentziala eta dagozkien matrizeak errazak dira pausaguneko posizioetatik neurturiko <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub></mrow></math> eta <math display=\"inline\"><msub><mi>x</mi><mn>3</mn></msub></math> desplazamenduak aukeratzen baditugu koordenatu orokortutzat (ikus 7.29 irudia): <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>3</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑻</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>M</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑽</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Bi energiak koadratikoak direnez, ez da hurbilketarik egin behar. Ekuazio karakteristikoa hauxe da: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>k</mi><mo>−</mo><mi>M</mi><msup><mi>ω</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiazta ezazu sistema honen pultsazio eta bektore propioak honako hauek direla:"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mrow><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>M</mi></mfrac></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><mi>M</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>m</mi><mi>/</mi><mi>M</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>ω</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Ondorioztatu hasierako koordenatuen eta normalen arteko erlazioak <math display=\"block\"><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>=</mo><msqrt><mfrac><mi>m</mi><mn>2</mn></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>Q</mi><mn>2</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mi>m</mi><mi>M</mi></mrow><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>Q</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>M</mi><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mi>m</mi><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> edota <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi></mrow></msqrt><msub><mi>Q</mi><mn>1</mn></msub><mo>+</mo><msqrt><mi>M</mi></msqrt><msub><mi>Q</mi><mn>2</mn></msub><mo>+</mo><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><msub><mi>Q</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><msqrt><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><msub><mi>Q</mi><mn>2</mn></msub><mo>−</mo><msqrt><mi>M</mi></msqrt><msub><mi>Q</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msqrt><mrow><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi></mrow></msqrt><msub><mi>Q</mi><mn>1</mn></msub><mo>+</mo><msqrt><mi>M</mi></msqrt><msub><mi>Q</mi><mn>2</mn></msub><mo>+</mo><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><msub><mi>Q</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> direla."
    },
    {
     "mota": "testua",
     "html": "Beraz, hiru modu normal daude:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<math display=\"inline\"><mrow><msub><mi>Q</mi><mn>2</mn></msub><mo>=</mo><msub><mi>Q</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> denean, modu simetriko bat dugu: muturretako masek zentroan geldirik dagoenaren inguruan oszilatzen dute kontrafasean: <math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mfrac><msub><mi>Q</mi><mn>1</mn></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>",
      "<math display=\"inline\"><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>=</mo><msub><mi>Q</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> denean, hiru masak higitzen dira, muturretakoak noranzko batean eta erdikoa kontrafasean: <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mfrac><mi>M</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msqrt><mfrac><mi>M</mi><mrow><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></msqrt><msub><mi>Q</mi><mn>2</mn></msub><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>",
      "<math display=\"inline\"><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>=</mo><msub><mi>Q</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> bada, aldatzen den koordenatu normala masa-zentroaren <math display=\"inline\"><mi>X</mi></math> abzisarekiko (desplazamenduarekiko) proportzionala da: <math display=\"inline\"><mrow><msub><mi>Q</mi><mn>3</mn></msub><mo>=</mo><msqrt><mrow><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi></mrow></msqrt><mi>X</mi></mrow></math>. Bestalde, <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> denez, ez dago benetako oszilaziorik, modua nulua dela esaten da eta koordenatu normalak betetzen duen ekuazioa higidura uniformeari dagokiona da: <math display=\"block\"><mrow><msub><mover><mi>Q</mi><mo accent=\"true\">̈</mo></mover><mn>3</mn></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mi>Q</mi><mn>3</mn></msub><mo>=</mo><msub><mi>C</mi><mn>3</mn></msub><mi>t</mi><mo>+</mo><msub><mi>D</mi><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math> Modu honetan hiru partikulak abiadura lineal konstante berberaz higitzen dira: <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mi>X</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi></mrow></msqrt></mfrac><msub><mi>Q</mi><mn>3</mn></msub><mo>=</mo><msub><mi>A</mi><mn>3</mn></msub><mi>t</mi><mo>+</mo><msub><mi>B</mi><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "Aurreko bi moduetan masa-zentroa pausagunean zegoen eta momentu lineala konstantea ez ezik, nulua ere zen. (Jakina, problema masa-zentroaren sisteman planteatzen bada, bakarrik daude bi askatasun-gradu eta ez da agertzen modu nulu hau.) Modu nulu honetan dagokion koordenatu normala ziklikoa da eta ez dago benetako oszilaziorik: sistema batera higitzen da abiadura konstantez norabide (abstraktu) berean. Sistemak aipaturiko norabidean simetria bat duenean, modu nuluak agertzen dira. Hemen translazio-simetria globala dago, eta <math display=\"inline\"><msub><mi>Q</mi><mn>3</mn></msub></math> koordenatuaren aldaketa translazio horri dagokio. Baina beste kasuetan, biraketarekiko edo beste edozein transformaziorekiko aldaezintasuna adieraziko du modu nuluko simetriak, horrelakoa baita koordenatu normalaren aldaketaren esangura. Egia esan, modu nulu bat dagoenean, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math> matrizea ez da definitu positiboa, norabide nulu bat baitago: (sistema linealean behintzat) jatorrian ez dago minimo bakartu bat eta norabide nuluan oreka neutroada."
    },
    {
     "mota": "irudia",
     "oina": "Formaldehidoaren bibrazio-modu normalak.",
     "src": "media/irudiak/b060e3fb7b241537.svg",
     "zabalera": 486
    },
    {
     "mota": "testua",
     "html": "Molekulak <math display=\"inline\"><mi>N</mi></math> atomo baditu, <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi></mrow></math> askatasun-gradu eta modu normal izango ditu. Espazioan 3 translazio-norabide independente daudenez, beti egongo dira 3 translazio-modu nulu. Era berean 3 biraketa-modu nulu independente daude (2 dira molekula linealen kasuan). Benetako bibrazio-moduak, beraz, <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi><mo>−</mo><mn>6</mn></mrow></math> dira (<math display=\"inline\"><mrow><mn>3</mn><mi>N</mi><mo>−</mo><mn>5</mn></mrow></math> molekula linealetan)."
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Tentsiopeko soka diskretua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>L</mi></math> luzerako soka batek <math display=\"inline\"><mi>N</mi></math> partikula berdin ditu <math display=\"inline\"><mrow><mi>a</mi><mo>≡</mo><mi>L</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> distantzia berdinetara, hau da, <math display=\"inline\"><mrow><msub><mi>x</mi><mi>s</mi></msub><mo>=</mo><mi>s</mi><mi>a</mi><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> abzisetan (7.31 irudian <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>3</mn></mrow></math> kasua marraztu da). Soka masa gabekoa da eta tentsiopean dago <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><msub><mi>x</mi><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow></msub></math> mutur finkoen artean: <math display=\"inline\"><mrow><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><msub><mi>y</mi><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>. Masak norabide perpendikularrean oszila daitezke, abzisak aldatu gabe. Demagun oszilazioen anplitudeak txikiak direla, sokaren <math display=\"inline\"><mi>T</mi></math> tentsioaren modulua ez dela aldatzen —ikus, geroago, (9.102) emaitza— eta grabitatea eta marruskadura arbuiagarriak direla."
    },
    {
     "mota": "irudia",
     "oina": "Tentsiopeko soka diskretua <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>3</mn></mrow></math> partikula berdinekin.",
     "src": "media/irudiak/edeb1bb9607fa433.svg",
     "zabalera": 325
    },
    {
     "mota": "testua",
     "html": "Koordenatu orokortzat masen <math display=\"inline\"><msub><mi>y</mi><mi>s</mi></msub></math> desplazamendu perpendikularrak aukeratzen badira, argi dago energia zinetikoa hauxe dela: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mi>…</mi><mo>+</mo><msubsup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mi>N</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Energia potentziala kalkulatzeko, kontsidera dezagun <math display=\"inline\"><mi>s</mi></math> eta <math display=\"inline\"><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></math> partikulen arteko sokaren zatia. Zatiaren luzera <math display=\"inline\"><mi>a</mi></math> da bi partikulak orekan daudenean eta oszilatzean <math display=\"block\"><mrow><mi>a</mi><mo>+</mo><mi>d</mi><msub><mi>l</mi><mi>s</mi></msub><mo>=</mo><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>x</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>y</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>=</mo><msqrt><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>y</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>≈</mo><mi>a</mi><mo>+</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>y</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>d</mi><msub><mi>l</mi><mi>s</mi></msub><mo>≈</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>y</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mi>.</mi></mrow></math> (Desplazamenduak txikiak direnez, Newtonen binomioa erabili dugu erro karratua garatzeko.) Sokaren zatiaren energia potentzialaren aldaketa sokaren <math display=\"inline\"><mi>T</mi></math> tentsioak egindako lanaren kontrakoa izango da: <math display=\"inline\"><mrow><mi>d</mi><msub><mi>V</mi><mi>s</mi></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mi>d</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>s</mi></msub><mo>=</mo><mi>T</mi><mi>d</mi><msub><mi>l</mi><mi>s</mi></msub></mrow></math>. Beraz, orekan duen energia potentzial elastiko konstantea alde batera utzita, hauxe dugu soka osoaren energia potentziala: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mi>y</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>2</mn></msub><mo>−</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mi>…</mi><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mi>N</mi></msub><mo>−</mo><msub><mi>y</mi><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msubsup><mi>y</mi><mi>N</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>0</mn></msub><mo>≡</mo><msqrt><mfrac><mi>T</mi><mrow><mi>m</mi><mi>a</mi></mrow></mfrac></msqrt><mi>.</mi></mrow></math> Indarren osagai perpendikularrak kalkulatuz ere erraz idazten dira Lagrangeren ekuazioak: <math display=\"block\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>=</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>=</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>3</mn></msub><mo>−</mo><mn>2</mn><msub><mi>y</mi><mn>2</mn></msub><mo>+</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>⋮</mi></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mi>s</mi></msub><mo>=</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>2</mn><msub><mi>y</mi><mi>s</mi></msub><mo>+</mo><msub><mi>y</mi><mrow><mi>s</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>⋮</mi></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mi>N</mi></msub><mo>=</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><msub><mi>y</mi><mi>N</mi></msub><mo>+</mo><msub><mi>y</mi><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Denak idazten dira (7.246) moduan ondoko mugalde-baldintzak betetzen direla gogoratzen bada: <math display=\"block\"><mrow><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><msub><mi>y</mi><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Modu normalak aurkitzeko <math display=\"inline\"><mrow><msub><mi>y</mi><mi>s</mi></msub><mo>=</mo><msub><mi>C</mi><mi>s</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math> soluzioa saiatzen badugu, hurrengo problema aljebraikoa ebatzi behar da: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mo>⋱</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>3</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mrow><mi>N</mi><mo>−</mo><mn>2</mn></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mi>N</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>3</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mrow><mi>N</mi><mo>−</mo><mn>2</mn></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mi>N</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>1</mn></mrow></math> denean modu normal bakarra dago: <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mn>2</mn></msqrt><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> (ikus 7.8 problema). <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>2</mn></mrow></math> kasua 7.77 problman aztertuko dugu. <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>3</mn></mrow></math> denean, ekuazio karakteristikoa <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>4</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> da eta modu normalak erraz kalkulatzen dira<span class=\"j-oin\">[Ikus <code>http://tp.lc.ehu.eus/jma/mekanika/oszilazioak/moduak1.html</code> orrialdeko animazioa.]</span>:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mspace width=\"1.0em\"></mspace><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/a30456618569a635.svg",
           "zabalera": 88
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mspace width=\"1.0em\"></mspace><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/1ed70dbd26b06669.svg",
           "zabalera": 88
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><msubsup><mi>ω</mi><mn>3</mn><mn>2</mn></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mspace width=\"1.0em\"></mspace><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "media/irudiak/0c9030807fa12078.svg",
           "zabalera": 88
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Halaber, beste kasuetan bezala, modu normal geldoena partikula guztiak fasean, hau da, noranzko berean, higitzen direnean lortzen da eta azkarrena ondoz ondoko partikulak kontrafasean higitzen. Adibide moduan, 7.32 irudiko ezkerraldean agertzen dira <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>14</mn></mrow></math> kasuko modu normalak. Problemaren simetria nabaria da modu guztietan eta goikoetan sinusoide baten itxura du sokak. Beste modu geldoetan ere gauza bera gertatzen dela erakusten da irudiko erdialdean, lerro etenen bidez. Antzeko gauza bat gertatzen da <math display=\"inline\"><mi>N</mi></math> balio guztietarako (ikus 7.93 problema) eta, beraz, <math display=\"inline\"><mrow><mi>N</mi><mo>→</mo><mi>∞</mi></mrow></math> limitean modu normalak sinusoideak izatea espero dezakegu: 7.9 atalean baieztatuko dugu horrela dela."
    },
    {
     "mota": "testua",
     "html": "Maiztasun normalen banaketak limite zehatz batera jotzen duela erakusten da 7.32 irudiko eskuinaldean (7.32 problman frogatuko dugu emaitza zehatza). Badirudi horren arabera maiztasun normalean goi-limite bat dagoela: beti gertatzen da hori partikulen kopurua finitua denean. (Ikus 9.9 atalean eta 9.31 problman nolako uhin bidaiariak hedatzen diren sokan barrena.)"
    },
    {
     "mota": "irudia",
     "oina": "Modu normalak (<math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>14</mn></mrow></math>) eta pultsazio normalak (<math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>50</mn><mo>,</mo><mn>100</mn></mrow></math>).",
     "src": "media/irudiak/7a76aaf64fabfcb7.svg",
     "zabalera": 408
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Tentsiopeko soka jarraitua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>N</mi><mo>→</mo><mi>∞</mi></mrow></math> limitean gertatzen dena aztertzeko, eman dezagun <math display=\"inline\"><mi>a</mi></math> txikitzean <math display=\"inline\"><mi>m</mi></math> ere txikitzen dela, <math display=\"block\"><mrow><mi>μ</mi><mo>≡</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>a</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mi>m</mi><mi>a</mi></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>N</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>m</mi></mrow><mi>L</mi></mfrac></mrow></math> limitea finitua (eta positiboa) izateko moduan. Aipaturiko limitean, hortaz, luzera-unitateko <math display=\"inline\"><mi>μ</mi></math> masako soka jarraitua berreskuratuko dugu."
    },
    {
     "mota": "irudia",
     "oina": "Tentsiopeko soka jarraitua.",
     "src": "media/irudiak/4867168641fa66f0.svg",
     "zabalera": 309
    },
    {
     "mota": "testua",
     "html": "Limitean <math display=\"inline\"><msub><mi>x</mi><mi>s</mi></msub></math> eta <math display=\"inline\"><msub><mi>y</mi><mrow><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math> aldagai diskretuen ordez, <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>L</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aldagai jarraituak geratuko zaizkigu, hurrengo ordezkapenen arabera: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>x</mi><mi>s</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>→</mo><mi>x</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mrow><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>→</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>x</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mrow><mi>s</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>→</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>x</mi><mi>s</mi></msub><mo>−</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>a</mi><mfrac><mrow><mi>∂</mi><mi>y</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><mn>2</mn></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>→</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>x</mi><mi>s</mi></msub><mo>+</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>a</mi><mfrac><mrow><mi>∂</mi><mi>y</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><mn>2</mn></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math> (<math display=\"inline\"><mi>a</mi></math> oso txikia denez, Taylorren garapena egin dugu azken bi adierazpenetan.) Ondorioz, partikula (puntu) baten (7.246) higidura-ekuazioa <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>T</mi><mrow><mi>μ</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>≈</mo><mfrac><mi>T</mi><mi>μ</mi></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> moduan idazten dugu, hau da,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "uhin-ekuaziora<span class=\"j-oin\">[Atal honetako ildotik aztertu zuen Lagrangek soka bibrakorraren ekuazioa.]</span> laburtzen da —ikus (9.5)— eta dagokion fase-abiadura honako hau dugu: <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mi>T</mi><mi>μ</mi></mfrac></msqrt><mi>.</mi></mrow></math> Modu normalak aurkitzeko <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math> soluzioa saiatuko dugu (7.257) ekuazioan, <math display=\"inline\"><mrow><msub><mi>y</mi><mi>s</mi></msub><mo>=</mo><msub><mi>C</mi><mi>s</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math> delakoaren ordez. Argi dago <math display=\"block\"><mrow><msup><mi>C</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> baldintza lortzen dela<span class=\"j-oin\">[Honetara laburtzen da dimentsio batean hiru dimentsioko <strong>Helmholtzen ekuazioa</strong>: <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>.]</span>, uhin-zenbakia (ikus 9.2 atala) hauxe bada: <math display=\"block\"><mrow><mi>k</mi><mo>≡</mo><mfrac><mi>ω</mi><mi>v</mi></mfrac><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math> (7.259) ekuazioa oszilador harmonikoarena denez, badakigu soluzio orokorra 25. orrialdeko <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>x</mi></mrow></math> dela. Baina kasu honetan sokaren muturrak higitzen ez direnez, ondoko bi mugalde-baldintza bete behar dira (7.248) direlakoen ordez: <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Lehenengoa betetzeko <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math> hartu behar da eta bigarrenaren ondorioz <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>L</mi><mo>=</mo><mn>0</mn></mrow></math> dugu. Azken ekuazio honen soluzio ez-nuluak <math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mi>L</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> direnez, pultsazio normalak"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>v</mi></mrow><mi>L</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "dira, hau da<span class=\"j-oin\">[<strong>Mersenneren legeak</strong> biltzen ditu (7.264) emaitzak eta lehenengoa, <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>∝</mo><mn>1</mn><mi>/</mi><mi>L</mi></mrow></math> erlazioa, <strong>Pitagorasen legea</strong> da.]</span>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mi>π</mi><mi>v</mi></mrow><mi>L</mi></mfrac><mo>=</mo><mfrac><mi>π</mi><mi>L</mi></mfrac><msqrt><mfrac><mi>T</mi><mi>μ</mi></mfrac></msqrt></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "oinarrizko pultsazioaren <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><msub><mi>ω</mi><mn>1</mn></msub></mrow></math> multiploak (<strong>harmonikoak</strong>)."
    },
    {
     "mota": "testua",
     "html": "Modu normalak, hortaz, hurrengoen parte errealak dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>A</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>π</mi><mi>v</mi><mi>t</mi><mi>/</mi><mi>L</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Lehenengo moduen anplitudearen grafikoa 7.34 irudian bildu dira. Modu bakoitza uhin geldikor bat da, <math display=\"inline\"><mrow><mn>2</mn><mi>L</mi><mi>/</mi><mi>n</mi></mrow></math> uhin-luzerakoa, eta <math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math> nodo ditu<span class=\"j-oin\">[Sturm eta Liouvilleren teoriaren ondorio orokorra da propietate hau: ikus, adibidez, [46] testuko 219. or.]</span>, hau da, <math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math> puntu (eta muturrak) beti daude geldi."
    },
    {
     "mota": "irudia",
     "oina": "Soka jarraituaren lehenengo bost modu normalen anplitudeak.",
     "src": "media/irudiak/9cfe7e7820d503fe.svg",
     "zabalera": 355
    },
    {
     "mota": "testua",
     "html": "7.8 ataleko soka diskretuaren kasuan, maiztasun normalen goi-limite bat dagoela ikusi dugu. Partikulen kopurua finitua denean hori gertatzen bada ere, limite jarraituan hauxe dugu: <math display=\"block\"><mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mi>T</mi><mrow><mi>m</mi><mi>a</mi></mrow></mfrac><mo>≈</mo><mfrac><mi>T</mi><mrow><mi>μ</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mo>→</mo><mi>∞</mi><mi>.</mi></mrow></math> Beraz, (7.263) emaitzan aurkitu dugun bezala, limite jarraituan, diskretuan ez bezala, maiztasun normal maximoa infinitua da."
    },
    {
     "mota": "testua",
     "html": "Tentsiopeko soka jarraituaren higidura orokorra modu normal guztien gainezarmena izango da, hau da, hurrengo Fourierren serieak (edo, nahiago bada, hurrengo seriearen parte errealak) emandako <math display=\"inline\"><mrow><mn>2</mn><mi>L</mi><mi>/</mi><mi>v</mi><mo>=</mo><mn>2</mn><msqrt><mrow><mi>M</mi><mi>L</mi><mi>/</mi><mi>T</mi></mrow></msqrt></mrow></math> periodoko oszilazioa<span class=\"j-oin\">[<strong>Bernoulliren soluzioa</strong> deitzen zaio batzuetan emaitza honi.]</span>: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>A</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>π</mi><mi>v</mi><mi>t</mi><mi>/</mi><mi>L</mi></mrow></msup><mi>.</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Problema ebatziak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kalitate-faktorea"
    },
    {
     "mota": "testua",
     "html": "<em>Energiaren eta fasearen 1 r-eko aldaketan galdutako energiaren arteko zatidura da oszilador indargetuaren\n<math display=\"inline\"><mi>Q</mi></math> kalitate-faktorea:</em>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>Q</mi><mo>≡</mo><mfrac><mi>E</mi><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi mathvariant=\"normal\">Δ</mi><mi>φ</mi><mo>=</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> r</mtext></mrow></mrow></msub></mrow></mfrac><mo>=</mo><mn>2</mn><mi>π</mi><mfrac><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>T</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><msub><mi>ω</mi><mi>γ</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Eman dezagun indargetzea oso ahula dela (<math display=\"inline\"><mrow><mi>γ</mi><mo>≪</mo><mi>ω</mi></mrow></math>) hau da, osziladorea oso kalitate handikoa: <math display=\"inline\"><mrow><mi>Q</mi><mo>≫</mo><mn>1</mn></mrow></math>. Froga ezazu kalitate-faktorea</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>Q</mi><mo>≈</mo><mfrac><mi>ω</mi><mrow><mn>2</mn><mi>γ</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>dela eta erresonantzia-kurbaren altuera hurrengo adierazpenak emandakoa:</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>A</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>≈</mo><mi>Q</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>Nola idazten da erresonantzia-kurbaren zabalera <math display=\"inline\"><mi>Q</mi></math>-ren bidez? Zein da RLC zirkuitu baten\nkalitate-faktorea?</em>"
    },
    {
     "mota": "testua",
     "html": "Indargetzea ahula bada, <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>γ</mi></msub><mo>≈</mo><mi>ω</mi></mrow></math> denez, honela idazten da (7.27): <math display=\"block\"><mrow><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>Q</mi></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>E</mi></mfrac><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>γ</mi><mi>T</mi></mrow></msup><mo>≈</mo><mn>2</mn><mi>γ</mi><mi>T</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>γ</mi></mrow><msub><mi>ω</mi><mi>γ</mi></msub></mfrac><mo>≈</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>γ</mi></mrow><mi>ω</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>Q</mi><mo>≈</mo><mfrac><mi>ω</mi><mrow><mn>2</mn><mi>γ</mi></mrow></mfrac><mi>.</mi></mrow></math> Hau eta Newtonen binomioa erabiliz, honela geratzen zaigu (7.65): <math display=\"block\"><mrow><mfrac><msub><mi>A</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><msup><mi>ω</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>γ</mi><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mo>=</mo><mi>Q</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mrow><mn>4</mn><msup><mi>Q</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>≈</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mrow><mn>8</mn><msup><mi>Q</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≈</mo><mi>Q</mi><mi>.</mi></mrow></math> Gainera, erresonantzia-kurbaren (7.69) zabalera hauxe da: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>2</mn><mi>γ</mi><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>3</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>ω</mi><mi>Q</mi></mfrac><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>3</mn></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da. RLC zirkuituren ekuazioa (7.31) denez, hauxe dugu: <math display=\"block\"><mrow><mi>Q</mi><mo>≈</mo><mfrac><mi>ω</mi><mrow><mn>2</mn><mi>γ</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mi>L</mi><mi>C</mi></mrow></msqrt></mfrac><mfrac><mi>L</mi><mi>R</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>R</mi></mfrac><msqrt><mfrac><mi>L</mi><mi>C</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oszilazio ez-linealen periodoa"
    },
    {
     "mota": "testua",
     "html": "<em>Indar kontserbatzaile baten eraginpean eta <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math> atzerapen-puntuen artean ari da oszilatzen\npartikula bat. Froga ezazu oszilazio-periodoa honako hau dela:</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msubsup><mo>∫</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>2</mn></msub></msubsup><msqrt><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></msqrt><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Atzerapen-puntuetan abiadura eta energia zinetikoa zero direnez, energia mekanikoaren kontserbazio-legea honela adierazten da <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math> atzerapen-puntuan duen balioa erabiliz: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>±</mi><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>&lt;</mo><msub><mi>x</mi><mn>2</mn></msub></mrow></math> bada, abiaduran <math display=\"inline\"><mi>+</mi></math> zeinua aukeratu behar da partikula <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math>-etik <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math>-ra badoa eta <math display=\"inline\"><mi>−</mi></math> zeinua alderantzizko bidaian. Bi bide horiek egiteko denbora-tarteak berdinak direnez, honela idazten da periodo osoa: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><msubsup><mo>∫</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>2</mn></msub></msubsup><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mfrac><mo>=</mo><msubsup><mo>∫</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>2</mn></msub></msubsup><msqrt><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></msqrt><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Pendulu matematikoaren periodoa"
    },
    {
     "mota": "testua",
     "html": "<em>Erabili integral eliptiko egokia pendulu matematikoaren periodoa <math display=\"inline\"><mi>α</mi></math> anplitude angeluarraren menpean\nkalkulatzeko. Nola berreskuratzen da emaitza zehatzetik, oszilazio txikien hurbilketan erabili ohi duguna?</em>"
    },
    {
     "mota": "testua",
     "html": "Aurreko ariketaren ildo beretik, anplitude angeluarra (hau da, angelu maximoa) <math display=\"inline\"><mi>α</mi></math> bada, honela idazten da energia mekanikoaren kontserbazio-printzipioa: <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mi>.</mi></mrow></math> Aldagaiak banantzen badira, hauxe dugu periodoa, energia potentziala bikoitia dela erabiliz: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>α</mi></mrow><mi>α</mi></msubsup><mfrac><mrow><mi>d</mi><mi>θ</mi></mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mfrac><mo>=</mo><mn>4</mn><msubsup><mo>∫</mo><mn>0</mn><mi>α</mi></msubsup><mfrac><mrow><mi>d</mi><mi>θ</mi></mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mfrac><mo>=</mo><msqrt><mfrac><mrow><mn>8</mn><mi>l</mi></mrow><mi>g</mi></mfrac></msqrt><msubsup><mo>∫</mo><mn>0</mn><mi>α</mi></msubsup><mfrac><mrow><mi>d</mi><mi>θ</mi></mrow><msqrt><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></msqrt></mfrac><mi>.</mi></mrow></math> Hemen <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>α</mi><mn>2</mn></mfrac><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>θ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> identitatea, <math display=\"block\"><mrow><mi>m</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>α</mi><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>θ</mi><mn>2</mn></mfrac><mo>=</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>ν</mi></mrow></math> aldagai-aldaketa eta Legendreren lehen motako integral eliptiko osoa, <math display=\"block\"><mrow><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mfrac><mi>π</mi><mn>2</mn></mfrac></msubsup><mfrac><mrow><mi>d</mi><mi>θ</mi></mrow><msqrt><mrow><mn>1</mn><mo>−</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></msqrt></mfrac><mo>,</mo></mrow></math> erabiliz (ikus B.5 atala), honako adierazpen hau lortzen da: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mn>4</mn><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><mi>K</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>α</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Azken ekuazio honetan <math display=\"inline\"><mrow><mi>k</mi><mo>≡</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mi>/</mi><mn>2</mn></mrow></math> aldagaiarekiko (B.117) Taylorren garapena eginez, penduluaren periodoa <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>α</mi><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>9</mn><mn>64</mn></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mfrac><mi>α</mi><mn>2</mn></mfrac><mo>+</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dela ikusten dugu, eta <math display=\"inline\"><mi>α</mi></math>-rekiko Taylorren garapena eginez gero, honako hau: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mn>16</mn></mfrac><msup><mi>α</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>11</mn><mn>3072</mn></mfrac><msup><mi>α</mi><mn>4</mn></msup><mo>+</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Pendulu bikoitza (Daniel Bernoulli, Euler, 1775)"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/3991c546a8e06f8e.svg",
     "zabalera": 181
    },
    {
     "mota": "testua",
     "html": "<em>Zeintzuk dira pendulu bikoitz lauaren maiztasun normalak? Kalkulatu modu normalak <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≪</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≫</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math> direneko kasu berezietan?</em>"
    },
    {
     "mota": "testua",
     "html": "Irudiko <math display=\"inline\"><msub><mi>φ</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>φ</mi><mn>2</mn></msub></math> angeluak koordenatu orokortzat aukeratuz, hauexek ditugu transformazio-ekuazio zehatzak eta hurbilduak: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>x</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>l</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>l</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>1</mn></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><msub><mi>l</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>≈</mo><mi>−</mi><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>l</mi><mn>1</mn></msub><msubsup><mi>φ</mi><mn>1</mn><mn>2</mn></msubsup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>x</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>l</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>2</mn></msub><mo>≈</mo><msub><mi>l</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><msub><mi>φ</mi><mn>2</mn></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><msub><mi>l</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>2</mn></msub><mo>≈</mo><mi>−</mi><msub><mi>l</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><msubsup><mi>φ</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><msubsup><mi>φ</mi><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Hortaz, honela idazten dira energia zinetikoa eta potentziala eta balio propio orokortuak ematen dituen ekuazio karakteristikoa: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>T</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msubsup><mi>l</mi><mn>1</mn><mn>2</mn></msubsup><msubsup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mi>l</mi><mn>1</mn><mn>2</mn></msubsup><msubsup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>l</mi><mn>2</mn><mn>2</mn></msubsup><msubsup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msubsup><mi>l</mi><mn>1</mn><mn>2</mn></msubsup><msubsup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mi>l</mi><mn>1</mn><mn>2</mn></msubsup><msubsup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>l</mi><mn>2</mn><mn>2</mn></msubsup><msubsup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>V</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><msub><mi>l</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>φ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><msub><mi>l</mi><mn>1</mn></msub><msubsup><mi>φ</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><msub><mi>l</mi><mn>2</mn></msub><msubsup><mi>φ</mi><mn>2</mn><mn>2</mn></msubsup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">+konstantea</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑻</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mi>l</mi><mn>1</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>m</mi><mn>2</mn></msub><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>m</mi><mn>2</mn></msub><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>m</mi><mn>2</mn></msub><msubsup><mi>l</mi><mn>2</mn><mn>2</mn></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑽</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>l</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>m</mi><mn>2</mn></msub><msub><mi>l</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>−</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝑻</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>l</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo>−</mo><msub><mi>l</mi><mn>1</mn></msub><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>m</mi><mn>2</mn></msub><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub><mi>λ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>m</mi><mn>2</mn></msub><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>m</mi><mn>2</mn></msub><msub><mi>l</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow><msub><mi>m</mi><mn>1</mn></msub></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>g</mi><msub><mi>l</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mi>g</mi><msub><mi>l</mi><mn>2</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>λ</mi><mo>+</mo><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow><msub><mi>m</mi><mn>1</mn></msub></mfrac><mfrac><msup><mi>g</mi><mn>2</mn></msup><mrow><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>λ</mi><mo>=</mo><msup><mi>ω</mi><mn>2</mn></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>±</mo><msqrt><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></msqrt><msqrt><mrow><msub><mi>m</mi><mn>1</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow><mrow><mn>2</mn><msub><mi>m</mi><mn>1</mn></msub></mrow></mfrac><mfrac><mi>g</mi><mrow><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><mi>.</mi></mtd></mtr></mtable></math> Kendura egitean lortzen den modu geldoan bi penduluak fasean higituko dira, eta modu azkarrean kontrafasean."
    },
    {
     "mota": "testua",
     "html": "Hurrengo kalkuluak errazteko erabil ditzagun dimentsio gabeko aldagai hauek: <math display=\"block\"><mrow><mi>μ</mi><mo>≡</mo><mfrac><msub><mi>l</mi><mn>1</mn></msub><mi>g</mi></mfrac><mi>λ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>m</mi><mo>≡</mo><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>l</mi><mo>≡</mo><mfrac><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mfrac></mrow></math> Orduan, honela idazten dira pultsazio normalak: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>μ</mi><mo>±</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>l</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>±</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>l</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>l</mi></mrow></msqrt></mrow><mn>2</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>l</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mn>1</mn><mo>±</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mrow><mn>4</mn><mi>l</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>l</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac></mrow></msqrt></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mtd></mtr></mtable></math> Bektore propio orokortuen ekuazioa <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><msub><mi>l</mi><mn>1</mn></msub></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>−</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝑻</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><mfrac><mrow><mi>l</mi><mi>μ</mi></mrow><mrow><mi>l</mi><mo>−</mo><mi>μ</mi></mrow></mfrac><mi>A</mi></mrow></math> da eta normalizazio-baldintza <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mfrac><mi>B</mi><mi>l</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math> Hortik bektore propio orokortuak lortzen dira: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑼</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>−</mo><mi>μ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>l</mi><mo>−</mo><mi>μ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>l</mi><mi>μ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(a) <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≪</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>≫</mo><mn>1</mn></mrow></math> kasuan), honela geratzen da modu normalen kalkulua: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>μ</mi><mo>±</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>l</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mn>1</mn><mo>±</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mrow><mn>4</mn><mi>l</mi></mrow><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>l</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac></mrow></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>l</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mi>l</mi><mrow><mn>1</mn><mo>+</mo><mi>l</mi></mrow></mfrac><mo>,</mo></mtd></mtr></mtable></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msubsup><mi>ω</mi><mo>+</mo><mn>2</mn></msubsup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>g</mi><msub><mi>l</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mi>g</mi><msub><mi>l</mi><mn>2</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msubsup><mi>ω</mi><mo>−</mo><mn>2</mn></msubsup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>g</mi><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑼</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>m</mi></msqrt></mfrac><mfrac><mn>1</mn><mi>l</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>l</mi><mo>−</mo><mi>μ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>l</mi><mi>μ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mo>+</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>m</mi></msqrt></mfrac><mfrac><mn>1</mn><mi>l</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>μ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>l</mi><mi>μ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msqrt><mi>m</mi></msqrt><mfrac><mrow><mn>1</mn><mo>+</mo><mi>l</mi></mrow><mi>l</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>l</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msqrt><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msub><mi>l</mi><mn>1</mn></msub></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub></mrow><msub><mi>l</mi><mn>2</mn></msub></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mo>−</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>m</mi></msqrt></mfrac><mfrac><mi>l</mi><mrow><mn>1</mn><mo>+</mo><mi>l</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msqrt><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac></msqrt><mfrac><msub><mi>l</mi><mn>1</mn></msub><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>φ</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><msqrt><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac></msqrt><mfrac><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub></mrow><msub><mi>l</mi><mn>1</mn></msub></mfrac><msub><mi>Q</mi><mo>+</mo></msub><mo>+</mo><msqrt><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac></msqrt><mfrac><msub><mi>l</mi><mn>1</mn></msub><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><msub><mi>Q</mi><mo>−</mo></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>φ</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msqrt><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac></msqrt><mfrac><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub></mrow><msub><mi>l</mi><mn>2</mn></msub></mfrac><msub><mi>Q</mi><mo>+</mo></msub><mo>+</mo><msqrt><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac></msqrt><mfrac><msub><mi>l</mi><mn>1</mn></msub><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><msub><mi>Q</mi><mo>−</mo></msub><mi>.</mi></mtd></mtr></mtable></math> Beraz,"
    },
    {
     "mota": "testua",
     "html": "(a.1) <math display=\"inline\"><mrow><msub><mi>Q</mi><mo>−</mo></msub><mo>=</mo><mn>0</mn></mrow></math> moduan: <math display=\"inline\"><mrow><msub><mi>l</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><msub><mi>φ</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> dugu, <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>-en masa txikiegia baita <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> norabide horizontalean mugiarazteko."
    },
    {
     "mota": "testua",
     "html": "(a.2) <math display=\"inline\"><mrow><msub><mi>Q</mi><mo>+</mo></msub><mo>=</mo><mn>0</mn></mrow></math> moduan: <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>φ</mi><mn>2</mn></msub></mrow></math> dugu eta <math display=\"inline\"><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></math> pendulu matematikoaren antzera higitzen da <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>, <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> ez balego bezala."
    },
    {
     "mota": "testua",
     "html": "(b) <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≫</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>≠</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>≪</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>l</mi><mo>≠</mo><mn>1</mn></mrow></math>) kasuan, hauxe dugu, berriz: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>μ</mi><mo>±</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>l</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>m</mi><mfrac><mi>l</mi><mrow><mi>l</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≈</mo><mi>l</mi><mo>,</mo></mtd></mtr></mtable></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msubsup><mi>ω</mi><mo>+</mo><mn>2</mn></msubsup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>g</mi><msub><mi>l</mi><mn>1</mn></msub></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msubsup><mi>ω</mi><mo>−</mo><mn>2</mn></msubsup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>g</mi><msub><mi>l</mi><mn>2</mn></msub></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>m</mi><mfrac><msub><mi>l</mi><mn>1</mn></msub><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≈</mo><mfrac><mi>g</mi><msub><mi>l</mi><mn>2</mn></msub></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mo>+</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mi>l</mi><mrow><mi>l</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msub><mi>l</mi><mn>1</mn></msub><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mo>−</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mi>m</mi></msqrt><mfrac><mi>l</mi><mrow><mi>l</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mi>l</mi><msqrt><mi>m</mi></msqrt></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac></msqrt><mfrac><msub><mi>l</mi><mn>1</mn></msub><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac></msqrt><mfrac><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>φ</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>Q</mi><mo>+</mo></msub><mo>−</mo><msqrt><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac></msqrt><mfrac><msub><mi>l</mi><mn>1</mn></msub><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><msub><mi>Q</mi><mo>−</mo></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>φ</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><msub><mi>l</mi><mn>1</mn></msub><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><msub><mi>Q</mi><mo>+</mo></msub><mo>+</mo><msqrt><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac></msqrt><mfrac><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub></mfrac><msub><mi>Q</mi><mo>−</mo></msub><mi>.</mi></mtd></mtr></mtable></math> Orduan,"
    },
    {
     "mota": "testua",
     "html": "(b.1) <math display=\"inline\"><mrow><msub><mi>Q</mi><mo>−</mo></msub><mo>=</mo><mn>0</mn></mrow></math> moduan fasean higitzen dira bi masak: <math display=\"inline\"><mrow><msub><mi>l</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>φ</mi><mn>2</mn></msub></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "(b.2) <math display=\"inline\"><mrow><msub><mi>Q</mi><mo>+</mo></msub><mo>=</mo><mn>0</mn></mrow></math> moduan kontrafasean higitzen dira bi masak: <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>m</mi><mn>2</mn></msub><msub><mi>l</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>2</mn></msub></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "(c) <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≫</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>=</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>≪</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mn>1</mn></mrow></math>) kasuan, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>μ</mi><mo>±</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mo>±</mo><msqrt><mi>m</mi></msqrt><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msubsup><mi>ω</mi><mo>±</mo><mn>2</mn></msubsup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>g</mi><msub><mi>l</mi><mn>1</mn></msub></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>±</mo><msqrt><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mo>+</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mo>−</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>φ</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>−</mi><msub><mi>Q</mi><mo>+</mo></msub><mo>+</mo><msub><mi>Q</mi><mo>−</mo></msub></mrow><msqrt><mn>2</mn></msqrt></mfrac><mo>,</mo></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>φ</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>Q</mi><mo>+</mo></msub><mo>+</mo><msub><mi>Q</mi><mo>−</mo></msub></mrow><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mfrac><mo>=</mo><msqrt><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac></msqrt><mfrac><mrow><msub><mi>Q</mi><mo>+</mo></msub><mo>+</mo><msub><mi>Q</mi><mo>−</mo></msub></mrow><msqrt><mn>2</mn></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(c.1) <math display=\"inline\"><mrow><msub><mi>Q</mi><mo>−</mo></msub><mo>=</mo><mn>0</mn></mrow></math> moduan <math display=\"inline\"><mrow><msqrt><msub><mi>m</mi><mn>1</mn></msub></msqrt><msub><mi>φ</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msqrt><msub><mi>m</mi><mn>2</mn></msub></msqrt><msub><mi>φ</mi><mn>2</mn></msub></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "(c.2) <math display=\"inline\"><mrow><msub><mi>Q</mi><mo>+</mo></msub><mo>=</mo><mn>0</mn></mrow></math> moduan <math display=\"inline\"><mrow><msqrt><msub><mi>m</mi><mn>1</mn></msub></msqrt><msub><mi>φ</mi><mn>1</mn></msub><mo>=</mo><msqrt><msub><mi>m</mi><mn>2</mn></msub></msqrt><msub><mi>φ</mi><mn>2</mn></msub></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oszilazio elektrikoak"
    },
    {
     "mota": "testua",
     "html": "<em>Aurki itzazu irudiko zirkuituaren modu normalak.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/08bc9119ffc9f792.svg",
     "zabalera": 188
    },
    {
     "mota": "testua",
     "html": "Korronteen noranzkoa irudiko hitzarmenaz definitzen badugu, eta RLC zirkuituaren <math display=\"block\"><mrow><mi>L</mi><mover><mi>I</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>R</mi><mover><mi>I</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><mn>1</mn><mi>C</mi></mfrac><mi>I</mi><mo>=</mo><mi>L</mi><mover><mi>I</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mn>1</mn><mi>C</mi></mfrac><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioa (edota <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>L</mi><msup><mover><mi>I</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>C</mi></mrow></mfrac><msup><mi>I</mi><mn>2</mn></msup></mrow></math> lagrangearra gogoratuz) zera dugu: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>L</mi><msub><mover><mi>I</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mi>C</mi></mfrac><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mi>C</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>L</mi><msub><mover><mi>I</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>+</mo><mfrac><mn>1</mn><mi>C</mi></mfrac><msub><mi>I</mi><mn>2</mn></msub><mo>+</mo><mfrac><mn>1</mn><mi>C</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝑰</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑰</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑻</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑽</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mi>C</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/dcdd717d5d300e3f.svg",
     "zabalera": 188
    },
    {
     "mota": "testua",
     "html": "Kalkulu zuzenak frogatzen duenez, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑻</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> ekuazioaren soluzioak <math display=\"block\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mi>L</mi><mi>C</mi></mrow></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mfrac><mn>3</mn><mrow><mi>L</mi><mi>C</mi></mrow></mfrac></msqrt></mrow></math> pultsazio normalak dira eta <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>−</mo><msubsup><mi>ω</mi><mi>i</mi><mn>2</mn></msubsup><mi mathvariant=\"bold-italic\">𝑻</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi><mo>=</mo><mn>0</mn></mrow></math> baldintzen soluzioak honako hauek: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>L</mi></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>L</mi></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Beraz, hauexek dira intentsitateen eta koordenatu normalen arteko erlazioak: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>I</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>+</mo><msub><mi>Q</mi><mn>2</mn></msub></mrow><msqrt><mrow><mn>2</mn><mi>L</mi></mrow></msqrt></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>I</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>−</mi><msub><mi>Q</mi><mn>1</mn></msub><mo>+</mo><msub><mi>Q</mi><mn>2</mn></msub></mrow><msqrt><mrow><mn>2</mn><mi>L</mi></mrow></msqrt></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>Q</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>1</mn></msub><mo>−</mo><msub><mi>I</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>Q</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Lehen modu normalean <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>I</mi><mn>2</mn></msub></mrow></math> dugu eta bi korronteak noranzko berean (erlojuaren orratzekin batera edo alderantziz) joango dira: modu geldoa da hau. Modu arinean, <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math> dugunez, bi korronteen noranzkoak kontrakoak izango dira."
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Osziladore harmonikoak, indargetuak eta bortxatuak])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Partikula baten energia potentziala hurrengo adierazpenak emandakoa da: <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>c</mi><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Kalkula itzazu oreka egonkorraren posizioa eta oszilazio txikien periodoa. Demagun oreka egonkorraren posiziotik hasten dela higitzen partikula. Nolakoa izan behar du hasierako abiadurak partikula (a) oszilatzen hasteko, (b) <math display=\"inline\"><mrow><mi>−</mi><mi>∞</mi></mrow></math>-rantz joateko, (c) <math display=\"inline\"><mrow><mi>+</mi><mi>∞</mi></mrow></math>-rantz ihes egiteko?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi malguki paraleloan edo elkarren segidan badaude, zein da konstante berreskuratzaile baliokidea, hau da, partikularen gainean indar bera eragiten duen malguki baliokidearen konstante berreskuratzailea?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/d35d779a061af1ca.svg",
       "zabalera": 111
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zein da <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math> oszilazioaren anplitudea?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Oszilador indargetu batek bere anplitudearen erdia galtzen du ziklo bakoitzean. Zenbat energia galtzen du ziklo batean? Zein da osziladorearen kalitate-faktorea?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ondoko kanpo-indarra <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> aldiunean hasten da eragiten geldirik dagoen oszilador baten gainean: <math display=\"block\"><mrow><mi>f</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>ω</mi><mi>t</mi><mi>.</mi></mrow></math> (a) Indargetze-koefizientea <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mi>ω</mi><mi>/</mi><mn>4</mn></mrow></math> bada eta osziladorearen pultsazio propioa <math display=\"inline\"><mi>ω</mi></math>, nolakoa da osziladorearen higidura? (b) Zer baldintza bete behar da <math display=\"inline\"><mrow><mn>2</mn><mi>ω</mi></mrow></math> pultsazioari dagokion oszilazioa <math display=\"inline\"><mi>ω</mi></math> delakoari dagokiona baino handiagoa izateko?"
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
       "html": "Aurkitu irudiko kanpo-indarra pairatzen duen osziladorearen soluzioa <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>ω</mi><mo>=</mo><mi>γ</mi></mrow></math> kasuan."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/9aa20c85dad23aa5.svg",
       "zabalera": 211
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
       "html": "Oszilador mekaniko batek pairatzen duen kanpo-indarra hauxe da: <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>F</mi><mn>0</mn></msub><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>t</mi><mo>&lt;</mo><msub><mi>t</mi><mn>0</mn></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bestela</mtext></mrow><mi>.</mi></mtd></mtr></mtable></mrow></mrow></math> Zein izango da osziladorearen higidura, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> aldiunean geldi badago oreka-posizioan?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azter ezazu irudiko osziladorearen zeharkako higidura, oszilazio txikien hurbilketan soka tenkatuaren <math display=\"inline\"><mi>T</mi></math> tentsioa aldatzen ez dela kontuan harturik (ikus (9.102) emaitza). Ez dago grabitaterik."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/154cc59da4847fbd.svg",
       "zabalera": 131
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Itsas handian 80 kiloko marinel baten gelaren higidura harmonikoa da, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>2</mn></mrow></math> m-ko anplitudea eta <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>8</mn></mrow></math> s-ko periodoa dituena. Balantzaren gainean paratzen bada, zeintzuk izango dira neurketa maximoa eta minimoa?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>l</mi></math> luzerako soka arin bat eta <math display=\"inline\"><mi>r</mi></math> erradioko bola homogeneo bat erabiltzen dira pendulu bat egiteko. Aurkitu oszilazio txikien periodoa kasu orokorrean eta <math display=\"inline\"><mrow><mi>r</mi><mo>≪</mo><mi>l</mi></mrow></math> hurbilketan. Nolakoa izan behar du <math display=\"inline\"><mrow><mi>r</mi><mi>/</mi><mi>l</mi></mrow></math> zatidurak bolaren dimentsioak arbuiatzean periodoan egindako errorea % 1 baino txikiagoa izateko?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>a</mi><mo>,</mo><mi>b</mi></mrow></math> eta <math display=\"inline\"><mi>c</mi></math> aldeak dituen paralelepipedo homogeneo baten urarekiko dentsitatea <math display=\"inline\"><mi>ρ</mi></math> da eta orekan dago ur gainean, <math display=\"inline\"><mi>a</mi></math> luzerako aldea norabide bertikalean duela. Norabide bertikalean sakatzen bada, zein izango da agertzen diren oszilazioen periodoa?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "K Cl molekularen energia potentziala <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mi>A</mi><mi>r</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>R</mi><mn>7</mn></msup><mrow><mn>8</mn><msup><mi>r</mi><mn>7</mn></msup></mrow></mfrac><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da, non <math display=\"inline\"><mi>r</mi></math> bi atomoen arteko distantzia den, <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>2.67</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup></mrow></math> m eta <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>2.31</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>28</mn></mrow></msup></mrow></math> J m. Aurkitu oszilazio erradial txikien maiztasuna. <em>Datuak</em>: <math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">K </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>39.10</mn></mrow></math> u eta <math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">Cl </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>34.45</mn></mrow></math> u."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkulatu zein den pendulu matematikoaren periodoaren aldaketa, grabitate-azelerazioaren aldaketa <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>g</mi></mrow></math> denean. Nola aldatzen da Quiton (2850 m-ko garaieran) ondo dabilen pendulu-erloju bat Leioan eta Everest mendian erabiltzen denean. <em>Oharra</em>: Arbuiatu latitudeen diferentziak."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "70 kg-ko pertsona bat 500 kg-ko automobilean sartzen denean, azken honen masa-zentroa 2 cm beherago geratzen da. Zein da esekidura-malgukien konstante berreskuratzailea? Nolakoa izan behar du indargetze-koefizienteak bideko zulo txikien gainean pasatzean automobila oszilatzen has ez dadin?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zein da <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>6</mn><mi>μ</mi><mi>H</mi></mrow></math>-ko harilarekin batera jarri behar den kondentsadorearen kapazitatea, 6195 kHz-eko maiztasuneko irrati-seinaleak sintonizatzeko?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Oszilador harmoniko indargetu batean <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><msub><mi>F</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> indarra aplikatzen da <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unetik aurrera. Nolako hastapen-baldintzak behar dira aldiune horretan erantzun iragankorrik ez egoteko?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Malguki bertikal baten konstante berreskuratzailea <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>3</mn></mrow></math> N/m da eta <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>0.6</mn></mrow></math> kg-ko masa bat du orekan beheko muturrean. <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mn>12</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn><mi>t</mi></mrow></math> N balioko indar bat aplikatzen hasten bada, aurkitu higidura-ekuazioen soluzioa marruskadura arbuiatuz."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>m</mi></math> masako partikula bat orekan dago <math display=\"inline\"><mi>k</mi></math> konstanteko malguki batetik esekita. <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> tartean <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><msub><mi>F</mi><mn>0</mn></msub></mrow></math> indar konstantea aplikatzen bazaio, frogatu indarra desagertzen oreka-puntutik neurtutako distantzia hauxe dela: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mfrac><msub><mi>F</mi><mn>0</mn></msub><mi>k</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">cos</mi><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><mo>≡</mo><mfrac><mi>k</mi><mi>m</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Pendulu matematiko baten luzera <math display=\"inline\"><mi>l</mi></math> da eta masa <math display=\"inline\"><mi>m</mi></math>. Inguruneak eragiten dion marruskadura-indarra <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi><msqrt><mrow><mi>g</mi><mi>l</mi></mrow></msqrt><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> bada, nolakoa da higidura?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi indar konstante bat pairatzen duen oszilador bortxatuaren higidura-ekuazioa eta iruzkina egin emaitzari."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> g-ko masa bat eta <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><msup><mn>10</mn><mn>4</mn></msup></mrow></math> dina/cm konstanteko malguki bat erabiltzen dira <math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><mn>0.5</mn></mrow></math> s-ko lasaikuntza-denbora duen oszilador bat egiteko. Kanpo-indarra <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mn>10</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>90</mn><mi>t</mi></mrow></math> dina bada, aurkitu pultsazio propioa eta oszilador indargetuarena, oszilazio bortxatu iraunkorraren anplitudea eta honen eta kanpo-indarraren arteko desfasea."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Pendulu matematiko bat 1 m luze da. Hasieran oszilazio-anplitudea 0.05 m da, baina 5 minutu beranduago erdira laburtu da. Kalkulatu indargetze-koefizientea, denbora karakteristikoa, <math display=\"inline\"><mi>Q</mi></math> faktorea eta hasieran ziklo batean galtzen duen energia, masa 0.1 kg bada."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Egia ala gezurra?",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azaldu zergatik den egia edo gezurra hurrengo baieztapen bakoitza. Gezurrezkoa bada, azaldu zein izan daitekeen aldaketarik txikiena, egia bihur dadin. (a) «Energia potentzialaren edozein minimotik oso hurbil mugitzen diren partikula guztien higidura harmonikoa da.» (b) «Oszilador harmoniko baten energia mekanikoa oreka-puntuan duen abiaduraren karratuarekiko proportzionala da.»"
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
       "html": "AM irrati baten seinalearen <math display=\"inline\"><mrow><msub><mi>ν</mi><mi>g</mi></msub><mo>=</mo><mn>1</mn></mrow></math> MHz-eko uhin garraiatzailearen anplitudea <math display=\"inline\"><mrow><msub><mi>ν</mi><mi>m</mi></msub><mo>=</mo><mn>1</mn></mrow></math> kHz-eko maiztasunaz modulatzen da. Beraz, irudian erakusten den bezala, garraiatzailearen oszilazio asko gertatzen dira anplitudea ia aldatu gabe. Irudi berean irrati-hargailu baten eskema ikus daiteke. Uhin erasotzaileak <math display=\"inline\"><mrow><msub><mi>V</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mi>g</mi></msub><mi>t</mi></mrow></msup></mrow></math> tentsio oszilakorra sortzen du antenan, <math display=\"inline\"><mrow><msub><mi>V</mi><mn>0</mn></msub><mo>≈</mo><mn>1</mn></mrow></math> mV eta <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>g</mi></msub><mo>=</mo><mn>2</mn><mi>π</mi><msub><mi>ν</mi><mi>g</mi></msub></mrow></math> izanik."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "media/irudiak/724d7307b569af2e.svg",
       "zabalera": 290
      },
      {
       "mota": "testua",
       "html": "(a) <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>300</mn></mrow></math> pF eta <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>5</mn><mi mathvariant=\"normal\">Ω</mi></mrow></math> badira, nola aukeratu behar da <math display=\"inline\"><mi>L</mi></math>, zirkuitua eta uhina erresonantzian egoteko? (b) Kalkulatu indargetze-koefizientea erantzun iragankorraren ahultzea modulazioaren aldaketa baino arinagoa dela egiaztatzeko. (Uhin erasotzailea ondo anplifikatzeko behar da hau.) (c) Aurkitu zirkuituaren anplifikazioa, hau da, kondentsadorean dagoen tentsio maximoaren eta <math display=\"inline\"><msub><mi>V</mi><mn>0</mn></msub></math>-ren arteko zatidura. (d) Beste irrati baten garraiatzailearen maiztasuna 20 kHz handiagoa bada, zein izango da bi seinaleen anplifikazioen zatidura?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Oszilador indargetu batek energiaren % 2 galtzen du ziklo bakoitzean. Zein da osziladorearen <math display=\"inline\"><mi>Q</mi></math> kalitate-faktorea? Kanpo-indar bat aplikatzen osziladorearen erresonantzia-maiztasuna 300 Hz bada, zein da erresonantzia-kurbaren zabalera?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi></mrow></math> indar harmonikoak eta <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>m</mi><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> marruskadurak eragiten dute <math display=\"inline\"><mi>m</mi></math> masako partikula baten gainean. Indargetzea ahula da eta <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean partikularen posizioa eta abiadura <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>u</mi><mo>&gt;</mo><mn>0</mn></mrow></math> dira. Kalkulatu zenbateko energia galtzen duen osziladoreak <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unetik berriro <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math> baldintzak betetzen diren arte. Ondorioztatu higidura periodikoa izango dela baldin eta aipaturiko baldintzak betetzen diren bakoitzean kalkulatutako balioko energia ematen bazaio osziladoreari, bulkada egoki baten bidez. Harmonikoa izango da higidura? Zer bulkada aplikatu behar da bakoitzean?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "«U» itxurako beirazko hodi batean 2 Kg merkurio isurtzen dira. Hodiaren zeharkako sekzioa <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math> cm<sup>2</sup> da. Oreka-posizioaren inguruko oszilazioak aztertzeko, (a) aurkitu oreka-puntutik neurtutako merkurioaren zutabearen altuera eta indar berreskuratzailea lotzen dituen <math display=\"inline\"><mi>k</mi></math> konstantea eta (b) kalkulatu oszilazioen periodoa. <em>Oharra</em>: Arbuiatu airearen biskositatea eta gainazal-tentsioa."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Zilindro birakariak eta hagatxoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eman dezagun 1.99 problemako kasuan bi zilindroak kontrako noranzkoetan biratzen direla oso arin. Zilindroen eta barraren arteko marruskadura dinamikoaren koefizientea <math display=\"inline\"><mi>μ</mi></math> bada eta zilindroen arteko distantzia <math display=\"inline\"><mi>a</mi></math>, zein da oszilazioen periodoa? <em>Oharra</em>: Arbuiatu barraren erradioa."
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
       "html": "Kalkulatu 6.8 problemako sistemaren oreka egonkorraren puntuen inguruko oszilazio txikien maiztasuna."
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
       "html": "Oszilador harmonikoaren anplitudea <math display=\"inline\"><mi>A</mi></math> bada, zein da elongazioa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> tartean aurkitzeko probabilitatea?"
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
       "html": "<math display=\"inline\"><mi>R</mi></math> erradioko jomuga zirkularra arinegi oszilatzen ari denez <math display=\"inline\"><mi>O</mi></math> puntuaren inguruan, tiratzaileak <math display=\"inline\"><mi>O</mi></math> puntuari egiten dio tiro. Oszilazioa harmonikoa bada eta <math display=\"inline\"><mi>A</mi></math> anplitudekoa, zein izango da diskoa jotzeko probabilitatea? Handiagoa izango da <math display=\"inline\"><mi>P</mi></math> puntuari egiten badio tiro?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Barra horizontal leun batean barrena higi daiteke irudiko <math display=\"inline\"><mi>m</mi></math> masa, masa gabeko soka luze baten eta erradio txikiko txirrika baten bidez <math display=\"inline\"><mi>M</mi></math> masarekin loturik dagoena. Oreka-posiziotik <math display=\"inline\"><mi>A</mi></math> distantzia txikira mugitu ondoren, <math display=\"inline\"><mi>m</mi></math> masa askatzen bada, nola higituko da? Zein izango da <math display=\"inline\"><mi>M</mi></math>-ren periodoa? Non egongo da <math display=\"inline\"><mi>m</mi></math> masa <math display=\"inline\"><mi>M</mi></math>-ren abiadura eskalarra maximoa denean?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bloke bat plataforma horizontal baten gainean dago. Azken hau norabide bertikalean hasi da higitzen, gorantz. Plataformaren higidura harmonikoa da eta bere pultsazioa eta anplitudea <math display=\"inline\"><mi>ω</mi></math> eta <math display=\"inline\"><mrow><mi>A</mi><mo>&gt;</mo><mi>g</mi><mi>/</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>, hurrenez hurren. Plataforma atzean utzi ondoren, zein izango da blokearen garaiera maximoa, hasierako posiziotik neurtua?"
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
       "html": "Plano horizontal leun batean ari da higitzen, <math display=\"inline\"><mi>v</mi></math> abiadura konstantez, irudiko barra homogeneoa. <math display=\"inline\"><mi>O</mi></math> puntutik aurrera barraren eta hagatxoaren arteko marruskadura dinamikoaren koefizientea <math display=\"inline\"><mrow><mi>μ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bada, zenbat denbora pasatuko da —eskuineko muturra <math display=\"inline\"><mi>O</mi></math> puntutik igaro ondoren— barra geratu arte? Non geldituko da barra?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Parsevalen teorema (I)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu ondoko integralak: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>m</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>δ</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>m</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>m</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>δ</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mi>.</mi></mtd></mtr></mtable></math> Oszilador harmoniko batek pairatzen duen kanpo-indarra periodikoa denez, bere soluzio iraunkorra (7.91) moduan idazten da: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>A</mi><mn>0</mn></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Froga ezazu <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>-ren batez besteko balioa ondokoa dela: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>≡</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msubsup><mi>A</mi><mn>0</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>A</mi><mi>n</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>B</mi><mi>n</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Parsevalen teorema (II)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili 7.13 ariketa, (7.81) Fourierren seriearen batez bestekoa kalkulatzeko: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>≡</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>t</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow><mo accent=\"false\">∞</mo></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>c</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><mi>T</mi><mo>≡</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi mathvariant=\"normal\">Ω</mi></mrow></math> den. Erabili emaitza hau <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> erreala den kasuan 7.35 problemakoa berreskuratzeko."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Plancherelen teorema",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili 7.15 ariketa, (7.92) Fourierren transformazioaren ondoko propietatea frogatzeko: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>t</mi><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Mahai leun horizontal batean dago geldi <math display=\"inline\"><mi>m</mi></math> masako partikula, deformatu gabe dagoen malguki baten mutur bati itsatsita. Une batean beste muturra <math display=\"inline\"><mi>v</mi></math> abiadura konstantez higiarazten da eta <math display=\"inline\"><mi>d</mi></math> distantzia egin duenean geldi geratzen da. Nola aukeratu behar da <math display=\"inline\"><mi>v</mi></math>, azken une horretan <math display=\"inline\"><mi>m</mi></math> geldi gera dadin, oszilatu gabe?"
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
       "html": "Plataforma baten gainean geldi dauden bi bloke elkarrekin lotu dira soka baten bidez eta muturretatik malguki berdinez. Blokeen eta plataformaren arteko marruskadura arbuiagarria bada ere, plataformaren eta zoruaren arteko marruskadura estatikoaren koefizientea <math display=\"inline\"><mi>μ</mi></math> da. Zein da sokaren <math display=\"inline\"><mi>T</mi></math> tentsioaren balio maximoa, soka ebaki ondoren plataforma higi ez dadin? <em>Oharra</em>: Bi kasu kontsideratu behar dira <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><mn>9</mn><msub><mi>m</mi><mn>2</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mi>/</mi><msub><mi>m</mi><mn>2</mn></msub></mrow></math> irrazionala denean."
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
       "html": "Irudiko hagatxo bertikala leuna da eta txirrikaren erradioa arbuiagarria. Nolako baldintza bete behar du sistema orekan egon ahal izateko, grabitatearen eraginpean? Zein da orduan oreka-konfigurazioa? Eta oszilazio txikien maiztasuna?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Oszilador harmoniko indargetu baten pultsazio propioa <math display=\"inline\"><mi>ω</mi></math> da eta pairatzen duen kanpo-indar harmonikoarena <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>. Kontsidera ditzagun indar horrek osziladoreari ematen dion <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>k</mi></msub></math> potentzia eta marruskadura-indarraren eraginez galtzen duena: <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>m</mi></msub></math>. Froga ezazu soluzio iraunkorrean bi magnitude horien batez bestekoak berdinak direla: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi mathvariant=\"script\">𝒫</mi><mi>k</mi></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi mathvariant=\"script\">𝒫</mi><mi>m</mi></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. Frogatu bi magnitude horiek aldiune guztietan ere direla berdinak (<math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒫</mi><mi>k</mi></msub><mo>=</mo><msub><mi mathvariant=\"script\">𝒫</mi><mi>m</mi></msub></mrow></math>), kanpo-indarraren maiztasuna eta osziladorearena berdinak direnean (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>ω</mi></mrow></math>). <em>Oharra</em>: Erabili soluzio iraunkorraren propietateak eta ez bere adierazpen esplizitua."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko eraztun horizontala <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> abiadura angeluar konstantez ari da biratzen bere zentroaren inguruan. <math display=\"inline\"><mi>m</mi></math> masako partikula diametro batean barrena higi daiteke, marruskadurarik gabe, eta malguki berdinez loturik dagoela. Malgukien luzera propioa <math display=\"inline\"><mi>L</mi></math> da eta konstante berreskuratzailea <math display=\"inline\"><mi>k</mi></math>. (a) Kalkulatu oreka erlatiboaren konfigurazioa(k). (b) Noiz izango da oszilakorra masaren higidura? Zein da orduan bere maiztasuna? Oszilakorra ez bada, nola higitzen da masa? (c) Zer aldatzen da zure erantzunetan malgukietako bat kentzen bada?"
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
       "html": "Zer dago gaizki ariketa-liburu batean aurkitu dugun problema honen soluzioan? Zein da benetako periodoa?"
      },
      {
       "mota": "testua",
       "html": "text(size: 10pt, style: &quot;italic&quot;)[ «<math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1</mn></mrow></math> m-ko luzera duen masa arbuiagarriko barra baten muturretan <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> g-ko bi esfera txiki daude lotuta. Barra giltzadura baten bidez zintzilik dago, erditik igarotzen den ardatz bertikalaren inguruan marruskadurarik gabe bira dezan. <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>20</mn></mrow></math> kg-ko bi esfera handi barraren zuzen berean daude. Esfera handiaren eta txikiaren zentroen arteko distantzia <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>16</mn></mrow></math> cm da (226. irudia). Kalkulatu pendulu birakariaren oszilazio txikien periodoa.»"
      },
      {
       "mota": "testua",
       "html": "«Muturrean esfera bat duen barraren erdi bakoitzak <math display=\"inline\"><mrow><mi>d</mi><mi>/</mi><mn>2</mn></mrow></math> luzerako pendulu sinple baten itxura du, eta esfera handiaren eremu newtondarrean oszilatzen du. Lurraren grabitazio-eremuan, pendulu sinplearen oszilazio txikien periodoa <math display=\"inline\"><mrow><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mrow><mi>l</mi><mi>/</mi><mi>g</mi></mrow></msqrt></mrow></math> da. Grabitazio unibertsalaren legearen arabera, <math display=\"inline\"><mrow><mi>m</mi><mi>g</mi><mo>=</mo><mi>γ</mi><mi>m</mi><msub><mi>M</mi><mrow><mtext mathvariant=\"normal\">Lurra </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>/</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>; beraz, <math display=\"inline\"><mrow><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mrow><mi>l</mi><msup><mi>R</mi><mn>2</mn></msup><mi>/</mi><mi>γ</mi><msub><mi>M</mi><mtext mathvariant=\"normal\">Lurra</mtext></msub></mrow></msqrt></mrow></math>, non <math display=\"inline\"><mi>γ</mi></math> grabitazio unibertsalaren konstantea den, <math display=\"inline\"><msub><mi>M</mi><mtext mathvariant=\"normal\">Lurra</mtext></msub></math> Lurraren masa den, eta <math display=\"inline\"><mi>R</mi></math> pendulutik Lurraren zentrora dagoen distantzia den. Horrela, esfera handiaren grabitazio-eremuan, <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mi>d</mi><mi>/</mi><mn>2</mn></mrow></math> luzerako pendulu sinplearen oszilazio txikien periodoa honako hau izango da: <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mrow><mi>d</mi><msup><mi>R</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mi>γ</mi><mi>M</mi></mrow></msqrt><mo>≈</mo><mn>5</mn><mo>,</mo><mn>4</mn></mrow></math> horas.» ]"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko mahaia leuna da, baina bi blokeen arteko marruskadura estatikoaren koefizientea <math display=\"inline\"><mi>μ</mi></math> da. Nolako izan behar du oszilazioen anplitudeak, goiko blokea labaintzen has ez dadin?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko plataformaren masa <math display=\"inline\"><mi>M</mi></math> da eta bi zilindro homogeneo berdinen gainean dago eta hormatik lotuta <math display=\"inline\"><mi>k</mi></math> konstante berreskuratzaileko malguki baten bidez, irudian erakusten den bezala. Zilindroen masak eta erradioak <math display=\"inline\"><mi>m</mi></math> eta <math display=\"inline\"><mi>r</mi></math> dira, hurrenez hurren. Plataforma eta zilindroak labaintzen ez badira, zein da oszilazioen maiztasuna?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> barra artikulazio leun baten inguruan bira daiteke plano bertikal batean, Plano hori, artikulazioa bezalaxe, <math display=\"inline\"><mrow><mi>C</mi><mi>D</mi></mrow></math> ardatz bertikalaren inguruan biratzen da, <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez. Barraren luzera eta masa <math display=\"inline\"><mi>a</mi></math> eta <math display=\"inline\"><mi>m</mi></math> dira, hurrenez hurren. Aukeratu barraren triedro nagusi bat energia zinetikoa idazteko. Idatzi higidura-ekuazioa eta aztertu oreka erlatiboaren puntuak, euren egonkortasuna, eta oreka egonkorreko puntuen inguruko oszilazio txikien maiztasunak. <em>Oharra</em>: Arbuiatu barraren diametroa."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko blokea mahai leunean higitzen da, hormarekiko perpendikularrean, malgukiaren eraginez. Sistema orekan dago <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><msub><mi>α</mi><mn>0</mn></msub></mrow></math> denean. Kalkulatu oszilazio txikien maiztasuna."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko barra leuna <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> abiadura angeluar konstantez ari da biratzen plano horizontal batean. Barran barrena higi daitekeen <math display=\"inline\"><mi>m</mi></math> masa biraketa-ardatzetik lotuta dago, malguki baten bidez. Malgukiaren luzera propioa <math display=\"inline\"><mi>L</mi></math> da eta konstante berreskuratzailea <math display=\"inline\"><mi>k</mi></math>. Noiz egongo da oreka erlatiboaren konfigurazioen bat? Zein izango da? Eta oreka egonkorreko konfigurazioaren inguruko oszilazio txikien maiztasuna? Zer gertatzen da oreka-konfiguraziorik ez dagoenean?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudian erakusten den ezkerreko masa mahai horizontal leunean higitzen da, <math display=\"inline\"><mi>A</mi></math> anplitudeko oszilazio lineal batean. Malgukiaren elongazioa <math display=\"inline\"><mrow><mi>A</mi><mi>/</mi><mn>2</mn></mrow></math> denean, masa berdin batekin topo egiten du eta biak loturik geratzen dira. Kalkulatu oszilazio berrien anplitudea. Zer aldatzen da zure erantzunean talka elastikoa bada?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math> eremu elektriko homogeneoan jartzen da (geldi) <math display=\"inline\"><mi>q</mi></math> karga, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean. Kalkulatu kargaren abiadura maximoa eta egiten duen biderik luzeena."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "7.51 problemako sistemak.",
     "src": "media/irudiak/0ddc5625ae20adbb.svg",
     "zabalera": 129
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kortxo bat, jostorratz bat eta bi sardexka erabiliz egiten bada 7.35 irudiko ezkerraldean agertzen den sistema, botila baten ahoan jar daiteke orekan. Sistemaren eredu erraztua egiteko, kontsidera dezagun irudiko eskuinaldean agertzen dena. Erdiko barra arina <math display=\"inline\"><mi>l</mi></math> luzerakoa da eta <math display=\"inline\"><mi>A</mi></math> puntuaren inguruan bira daiteke oztoporik gabe. <math display=\"inline\"><mi>L</mi></math> luzerako barrak ere arinak dira eta mutur askeetan <math display=\"inline\"><mi>m</mi></math> masako partikula berdinak dituzte. Hiru barrak lotuta daude, era zurrunean, <math display=\"inline\"><mi>B</mi></math> puntuan, euren arteko angelua <math display=\"inline\"><mi>α</mi></math> delarik. Kontsidera ditzagun plano bertikal batean gertatzen diren oszilazio txikiak. Kalkulatu maiztasuna eta <math display=\"inline\"><mrow><mi>l</mi><mi>/</mi><mi>L</mi></mrow></math> zatidurak bete behar duen baldintza."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu ondoko magnitudea higidura-konstantea dela oszilador harmoniko indargetuaren eboluzioan: <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>γ</mi><mi>x</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>γ</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Oszilador bortxatu baten indargetzea nulua da: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Kalkulatu soluzio orokorra eta aztertu soluzio iraunkorra. Zer gertatzen da <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>ω</mi></mrow></math> bada?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko pendulu matematiko alderantzikatua egonkortzeko, hormatik lotu da, <math display=\"inline\"><mi>d</mi></math> altueran, malguki baten bidez. Malgukia deformatu gabe dago pendulua bertikalean dagoenean. Penduluaren luzera eta masa <math display=\"inline\"><mi>L</mi></math> eta <math display=\"inline\"><mi>m</mi></math> dira. Nola aukeratu behar da malgukiaren <math display=\"inline\"><mi>k</mi></math> konstante berreskuratzailea? Zein da orduan oszilazio txikien maiztasuna?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Pendulu matematiko baten esekidura-puntua <math display=\"inline\"><mrow><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></math> legearen arabera mugiarazten da norabide horizontalean, oszilazio-planoan. Kalkulatu bertikalaren inguruko oszilazio txikien higidura-ekuazioaren soluzioa. Noiz gertatzen da erresonantzia? Zein da orduan higidura-ekuazioaren soluzioa?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Oszilador indargetu baten ekuazioa <math display=\"inline\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>m</mi><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> da eta energia mekanikoa <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow></math>. Kalkulatu <math display=\"inline\"><mrow><mi>d</mi><mi>E</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math> eta frogatu negatiboa dela une guztietan."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko txirrikak eta soka masa gabekoak dira. Soka biribilkatuta dago beheko txirrikan eta ez da labaintzen. Eskuineko masa bakarrik higitzen da bertikalean eta <math display=\"inline\"><mi>M</mi></math> masakoa finko dago txirrikako periferian. Marruskadurak arbuiagarriak dira. Nolako baldintza(k) bete behar d(ir)a sistema orekan egon ahal izateko? Aurkitu oreka egonkorreko konfigurazioa(k) eta beren inguruko oszilazio txikien maiztasuna."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erresonantzia indargetzerik gabe",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Oszilador baten indargetze-koefizientea <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math> da. Idatzi ondoko ekuazioen soluzioa: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math> Bateragarriak al dira bi soluzioak erresonantzian, hau da, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><mi>ω</mi></mrow></math> limitean?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Oszilazio ez-harmonikoak])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudian adierazten den aldiunean partikula pausagunean dago eta labaintzen hasten da. Marruskadura arbuiagarria da. Harmonikoa al da partikularen higidura? Zein da periodoa?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Oszilador koartikoa",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko bi malguki berdinen luzera propioa <math display=\"inline\"><mi>d</mi></math> da eta sistema mahai leun horizontal batean dago. Masa barra leunean barrena higi daiteke."
      },
      {
       "mota": "testua",
       "html": "(a) Zeharkako <math display=\"inline\"><mi>q</mi></math> desplazamendua <math display=\"inline\"><mi>d</mi></math> baino askoz txikiagoa dela jorik, idatzi higidura-ekuazioa eta aurkitu higidura-konstante bat."
      },
      {
       "mota": "testua",
       "html": "(b) Erabili programa egokiren bat fase-espazioa marrazteko."
      },
      {
       "mota": "testua",
       "html": "(c) Frogatu oszilazioak, txikiak badira ere, ez direla isokronoak, maiztasuna anplitudearekiko proportzionala delako."
      },
      {
       "mota": "testua",
       "html": "(d) 7.8 problman antzeko sistema bat aztertu zen, baina malgukien ordez sokak zeuden han. Berdintsuak al dira emaitzak? Zergatik?"
      },
      {
       "mota": "testua",
       "html": "(e) Zer gertatzen da malgukien luzera propioa <math display=\"inline\"><mrow><mi>l</mi><mo>&lt;</mo><mi>d</mi></mrow></math> bada?"
      },
      {
       "mota": "testua",
       "html": "(f) Eta <math display=\"inline\"><mrow><mi>l</mi><mo>&gt;</mo><mi>d</mi></mrow></math> bada (eta malgukiak zuzenak badira une orotan)?"
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
       "html": "Kalkulatu hurrengo indar-eremuan higitzen den osziladorearen periodoa, oszilazioak txikiak direnean eta kasu orokorrean: <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><msup><mi>a</mi><mn>4</mn></msup><msup><mi>x</mi><mn>3</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Pendulu zikloidala (1)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Burdin hari bertikal baten itxura zikloide batena da, hurrengo ekuazio parametrikoek emandakoa: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mo>=</mo><mi>−</mi><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>≤</mo><mi>θ</mi><mo>≤</mo><mn>2</mn><mi>π</mi><mi>.</mi></mrow></math> Marruskadurarik gabe higitzen den iduneko bat <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntutik askatzen da geldi dagoenean. Kalkulatu oszilazioen periodoa eta egiaztatu (1673an, <em>Horologium Oscillatorium</em> liburuan Huygensek egin zuen bezala) anplitudearen independentea dela."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Pendulu zikloidala (2)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurreko problemako penduluarekin jarraituz, erabili (1.20) abzisa lerromakurra koordenatu orokortzat lagrangearra idazteko eta oszilazio orokorren periodoa kalkulatzeko. Iruzkina egin emaitzari."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Pendulu zikloidala (3)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu 7.62 problemako emaitzan alderantzizkoa:"
      },
      {
       "mota": "testua",
       "html": "kurba lau batean barrena, grabitatearen eraginez, higitzen den partikularen oszilazioak isokronoak badira, ibilbidea zikloidala da."
      },
      {
       "mota": "testua",
       "html": "<em>Iradokizuna</em>: Minimotik neurtutako <math display=\"inline\"><mi>s</mi></math> abzisa lerromakurra aukeratzen bada koordenatu orokortzat, energia zinetikoa <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> izango da eta oszilazioak isokronoak izango dira baldin eta soilik baldin <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>s</mi><mn>2</mn></msup></mrow></math> egiturakoa bada."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Oszilador harmoniko bitxi bat",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hagatxo zurrun arin baten bidez daude lotuta irudiko bi masa berdinak. Norabide elkarzutetan higi daitezke, mahai horizontal leun batean. Frogatu partikula bakoitzaren higidura harmonikoa dela, baina oszilador hauek nahiko bitxiak direla, maiztasuna energia mekanikoaren (hau da, hastapen-baldintzen) menpekoa baita. Nolakoa da oszilazioen anplitudea? Eta oreka-konfigurazioa? Nolakoa da hagatxoaren zentroaren ibilbidea? Eta hagatxoaren abiadura angeluarra?"
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
       "html": "Aztertu irudiko sistemaren higidura, bloke eta azal horizontalaren arteko marruskadura arbuiatu gabe."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Pendulu matematikoaren periodoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Pendulu matematikoaren periodoa 7.10.3 problman kalkulatu genuen: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mn>4</mn><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><mi>K</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>α</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Badakigu, jakin ere, oszilazioen <math display=\"inline\"><mi>α</mi></math> anplitudea txikia denean, oszilador harmonikoa oso hurbilketa ona dela: <math display=\"inline\"><mrow><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mrow><mi>l</mi><mi>/</mi><mi>g</mi></mrow></msqrt></mrow></math>. Oszilazioak handiagoak direnean ere onak diren hurrengo hurbilketak proposatu dira [87, 92, 94, 99]: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>T</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><msqrt><mfrac><mrow><msqrt><mn>3</mn></msqrt><mi>α</mi><mi>/</mi><mn>2</mn></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mn>3</mn></msqrt><mi>α</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></msqrt><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>T</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>α</mi><mi mathvariant=\"normal\">sin</mi></mfrac><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>8</mn></mrow></msup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>T</mi><mn>3</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><mfrac><mn>1</mn><msqrt><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>α</mi><mn>2</mn></mfrac></mrow></msqrt></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>T</mi><mn>4</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">ln</mi><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mn>1</mn><mo>−</mo><mi>a</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>≡</mo><mi mathvariant=\"normal\">cos</mi><mfrac><mi>α</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>T</mi><mn>5</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><msup><mi>a</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mroot><mi>a</mi><mn>8</mn></mroot></mrow></msup><mi>.</mi></mtd></mtr></mtable></math> Konparatu <math display=\"inline\"><mrow><mi>T</mi><mo>,</mo><msub><mi>T</mi><mn>1</mn></msub><mo>,</mo><msub><mi>T</mi><mn>2</mn></msub><mo>,</mo><msub><mi>T</mi><mn>3</mn></msub></mrow></math> eta <math display=\"inline\"><msub><mi>T</mi><mn>4</mn></msub></math> adierazpenen Taylorren garapenak, grafikoak eta propietateak <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>π</mi></mrow></math> limitean. Frogatu kasu guztietan lehen hurbilketa ez-lineala <strong>Bordaren formula</strong> dela: <math display=\"block\"><mrow><mi>T</mi><mo>≈</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><msup><mi>α</mi><mn>2</mn></msup><mn>16</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Egiaztatu azken formula horren errorea % 1 baino txikiagoa dela <math display=\"inline\"><mrow><mi>α</mi><mo>≲</mo><mn>74</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> guztietarako. Nolakoa izan behar du <math display=\"inline\"><mi>α</mi></math> anplitudeak, hurbilketa linealeko <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mrow><mi>l</mi><mi>/</mi><mi>g</mi></mrow></msqrt></mrow></math> balioaren errorea % 1 baino txikiagoa izateko?"
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
       "html": "Kalkulatu ia-ia posizio bertikaletik (<math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi>π</mi><mo>−</mo><mi>ε</mi></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≪</mo><mn>1</mn></mrow></math> denean) askatutako pendulu matematikoak hasierako posizora itzultzeko behar duen denbora. Zer gertatzen da <math display=\"inline\"><mrow><mi>ε</mi><mo>→</mo><mn>0</mn></mrow></math> limitean? <em>Iradokizuna</em>: Balia zaitez 7.10.3 problema ebatziaz."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Luzera bereko pendulu matematiko bat eta mutur batetik (artikulazio leun batez bidez) esekitako barra homogeneo bat orientazio beretik askatzen dira. Kalkulatu periodoen zatidura. Hasierako orientazioaren menpekoa da emaitza? Egia da oszilazioak ez badira txikiak?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Oszilador harmoniko erlatibista",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkulatu 3.59 problemako oszilador harmoniko erlatibistaren periodoa."
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
       "html": "Kalkulatu 5.105 problman, bi sokak aldi berean apurtu ondoren, gertatzen diren oszilazioen periodoa, hurrengo integralaz baliatuz: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mi>α</mi><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mfrac><mrow><mi>d</mi><mi>θ</mi></mrow><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mi>/</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></msqrt></mfrac><mo>=</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
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
       "html": "Nola aldatzen da jatorriaren inguruko oszilazio txikien periodoa, <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow></math> potentzial harmonikoari <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>m</mi><mi>λ</mi><msup><mi>x</mi><mn>4</mn></msup></mrow></math> gai ez-harmoniko <em>txikia</em> gehitzen bazaio? <em>Oharra</em>: Gai ez-harmonikoa txikia dela esango dugu, anplitudea <math display=\"inline\"><mi>A</mi></math> denean <math display=\"inline\"><mrow><msup><mi>A</mi><mn>2</mn></msup><mi>λ</mi><mo>≪</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> baldintza betetzen bada (edo, nahiago bada, energia mekanikoa <math display=\"inline\"><mi>E</mi></math> denean <math display=\"inline\"><mrow><mi>E</mi><mi>λ</mi><mo>≪</mo><mi>m</mi><msup><mi>ω</mi><mn>4</mn></msup></mrow></math> betetzen bada)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Oszilazio mihiztatuak])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ingeniaritzan bibrazio mekanikoak ahultzeko, beste oszilador bat gehitzen zaio batzuetan sistemari. Irudiko <math display=\"inline\"><mi>M</mi></math> masaren gainean <math display=\"inline\"><mrow><msub><mi>F</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math> indar harmonikoa (motor batek plataforman eragindako bibrazioen ondorioz sortutakoa, adibidez) aplikatzen da. <math display=\"inline\"><mi>M</mi></math> plataforma bi malguki berdinen gainean dago eta, bibrazioak gutxitzeko, beste malguki batetik esekitzen da plataformatik <math display=\"inline\"><mi>m</mi></math> masa. Indargetze guztiak arbuiagarriak dira."
      },
      {
       "mota": "testua",
       "html": "(a) Marraztu <math display=\"inline\"><mi>M</mi></math> eta <math display=\"inline\"><mi>m</mi></math> masen gainean eragiten duten indarrak eta aurkitu higidura-ekuazioak."
      },
      {
       "mota": "testua",
       "html": "(b) Froga ezazu <math display=\"inline\"><mi>M</mi></math> eta <math display=\"inline\"><mi>m</mi></math> masen pisuak problematik ezaba daitezkeela. Azaldu pisu horiek soluzioan duten eragina."
      },
      {
       "mota": "testua",
       "html": "(c) Aurkitu ekuazioen soluzio iraunkorra eta frogatu plataformaren bibrazioak minimoak direla <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><msup><mi>k</mi><mo>′</mo></msup><mi>/</mi><mi>m</mi></mrow></math> baldintza betetzen denean."
      },
      {
       "mota": "testua",
       "html": "(d) Aztertu sistemaren erresonantzia-baldintza."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Hénon eta Heilesen energia potentziala",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izarren higidura galaxietan aztertzean, <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msup><mi>y</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> energia potentzialean aurkitu zuten Hénonek eta Heilesek kaos determinista hamiltondarraren adibiderik ospetsuena (ikus 8. gaia). Aurkitu oreka-puntuak eta eztabaidatu euren egonkortasuna."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Periodikoak izan daitezke sistema baten oszilazio txikiak, modu normal batean ez dagoenean?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Oszilador harmoniko anisotropoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Mahai horizontal leun batean dagoen <math display=\"inline\"><mi>m</mi></math> masa bi puntu finkotik lotuta dago, malguki berdinen bidez, irudian erakusten den bezala. Malgukien luzera propioa <math display=\"inline\"><mi>L</mi></math> da. Frogatu <math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mi>L</mi></mrow></math> denean erdiko posizioa ezegonkorra dela. Zein da arrazoi fisikoa? Egiaztatu <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mi>L</mi></mrow></math> bada, aipaturiko posizioan oreka egonkorra dela eta oszilazio txikietan energia potentziala (7.120) moduan idatz daitekeela, kalkulatu behar dituzun <math display=\"inline\"><msub><mi>k</mi><mi>x</mi></msub></math> eta <math display=\"inline\"><msub><mi>k</mi><mi>y</mi></msub></math> konstante egokiekin. Zeintzuk dira modu eta maiztasun normalak azken kasuan?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "7.8 ariketaren ildo beretik azter itzazu irudiko bi masen zeharkako oszilazio txikiak. Zeintzuk dira sistemaren modu normalak?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Oszilador harmoniko isotropoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi xafla horizontal leunen artean dagoen <math display=\"inline\"><mi>m</mi></math> masa lau puntu finkotik lotuta dago, malguki berdinen bidez, irudian erakusten den moduan. Malgukien luzera propioa <math display=\"inline\"><mi>L</mi></math> da. Noiz da oreka egonkorra erdiko puntua? Froga ezazu azken kasu horretan, oszilazioak txikiak direnean, 4.5 problemako energia potentziala berreskuratzen dela, kalkulatu behar duzun konstante berreskuratzaile egokiarekin."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudian agertzen den malgukiaren berezko luzera, penduluen esekidura-puntuen arteko <math display=\"inline\"><mi>s</mi></math> distantziaren berdina da. Aurki bitez sistemaren modu normal lauak. <em>Oharra</em>: Kalkuluak errazteko, <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>6</mn><mi>M</mi></mrow></math>, <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mn>2</mn><mi>d</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>2</mn><mi>M</mi><mi>g</mi><mi>/</mi><mi>d</mi></mrow></math> balioak aukera daitezke."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko sistemaren gainean eragiten duen kanpo-indarra <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><msub><mi>F</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></math> da. Marruskadura arbuiagarria da. Azter ezazu sistemaren higidura zuzena."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko hiru masak berdinak dira eta zirkunferentzia horizontal leun batean barrena higi daitezke. Malgukiak ere berdinak badira, zeintzuk dira sistemaren modu normalak?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azter dezagun hiru pendulu lau berdinek osaturiko sistema, haien arteko mihiztadura ahula denean. Dimentsio gabeko aldagaietan (hau da, luzera, masa eta denboraren unitateak <math display=\"inline\"><mi>l</mi></math>, <math display=\"inline\"><mi>m</mi></math> eta <math display=\"inline\"><msqrt><mrow><mi>l</mi><mi>/</mi><mi>g</mi></mrow></msqrt></math> badira, hurrenez hurren) honela adierazten da sistemaren lagrangearra: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>3</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>φ</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>φ</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>φ</mi><mn>3</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><mi>ε</mi><msub><mi>φ</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><mi>ε</mi><msub><mi>φ</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>3</mn></msub><mo>−</mo><mn>2</mn><mi>ε</mi><msub><mi>φ</mi><mn>2</mn></msub><msub><mi>φ</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Zeintzuk dira sistema honen pultsazio eta koordenatu normalak?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Marruskadura arbuiatuz, azter itzazu irudiko sistemaren oszilazio txiki lauak."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Nahiz eta oso sinplea izan, irudiko sistema automobilen eredu erabilgarria da. Kalkula itzazu dagozkion modu normalak hurrengo datuak erabiliz: Gurpilen eta ardatzen masa: <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><mn>200</mn></mrow></math> kg. Autoaren masa osoa: <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mn>1000</mn></mrow></math> kg. Pneumatikoen konstantea: <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><mn>500</mn></mrow></math> N/mm. Esekidura-malgukien konstantea: <math display=\"inline\"><mrow><msub><mi>k</mi><mn>2</mn></msub><mo>=</mo><mn>50</mn></mrow></math> N/mm."
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
       "html": "Zilindro huts bat gainazal horizontal batean ari da higitzen eta zilindro bete bat dauka barnean. Zilindro biak labaindu gabe higitzen badira, zein da oszilazio txikien periodoa? Deskribatu modu normalak."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko zirkuituen arteko elkarrindukzio-koefizientea <math display=\"inline\"><mi>M</mi></math> bada, zeintzuk dira sistemaren modu normalak?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurki itzazu irudiko sistemaren maiztasun, koordenatu eta modu normalak. Kalkuluak errazteko, aukera ezazu <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>2</mn><mi>m</mi><mi>g</mi><mi>/</mi><mi>l</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko sisteman marruskadura arbuiagarria dela jorik, aurki itzazu koordenatu, maiztasun eta modu normalak."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkula itzazu irudiko sistemaren maiztasun eta modu normalak, ziriaren higidura plano bertikal batean gertatzen bada eta masa-zentroarena norabide bertikalean."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurki itzazu irudiko sistemaren pultsazio eta modu normalak, <math display=\"inline\"><mrow><mi>k</mi><mi>/</mi><mi>m</mi><mo>=</mo><mn>6</mn><mi>g</mi><mi>/</mi><mi>l</mi></mrow></math> baldintza betetzen den kasu berezian."
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
       "html": "Irudiko lau kargak finko daude. Bosgarren partikularen karga ere <math display=\"inline\"><mi>q</mi></math> da eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> planoan higi daiteke. Idatz ezazu partikularen energia potentziala <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Taylorren garapena jatorriaren inguruan eginez, aurki ezazu potentzialaren hurbilketa koadratikoa eta froga ezazu jatorrian oreka egonkorra dela. Aurki itzazu modu normalak. Nolakoa izango da partikularen orbita jatorritik oso hurbil higitzen bada?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Froga ezazu, inolako kalkulurik egin gabe, 7.8 ataleko soka diskretuaren kasuan <math display=\"inline\"><mi>n</mi></math> bakoitia denean, pultsazio normalen artean beti egongo dela <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mn>2</mn></msqrt><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> baliokoa. Nola higituko dira partikulak kasu horretan?"
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
       "html": "Egiaztatu 7.8 ataleko soka diskretuaren kasu orokorrean maiztasun normalak <math display=\"block\"><mrow><msub><mi>ω</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><msub><mi>ω</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>N</mi></mrow></math> direla eta <math display=\"inline\"><mi>n</mi></math> bati dagokion modua <math display=\"inline\"><mrow><msub><mi>y</mi><mi>s</mi></msub><mo>=</mo><msub><mi>C</mi><mi>s</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mi>n</mi></msub><mi>t</mi></mrow></msup></mrow></math>, hurrengo koefizienteekin: <math display=\"block\"><mrow><msub><mi>C</mi><mi>s</mi></msub><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>s</mi><mi>n</mi><mi>π</mi></mrow><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>s</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>N</mi><mi>.</mi></mrow></math>"
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
       "html": "Irudiko <math display=\"inline\"><mi>N</mi></math> pendulu matematiko berdinak distantzia berdinetara eseki dira: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mo>,</mo><mn>2</mn><mi>a</mi><mo>,</mo><mi>…</mi><mi>N</mi><mi>a</mi></mrow></math>. Ondoz ondoko penduluak oreka bertikalean daudenean biak lotzen dituen malgukia deformatu gabe dago."
      },
      {
       "mota": "testua",
       "html": "Kalkulatu pendulu baten ekuazioa oszilazioak txikiak direnean eta egin <math display=\"inline\"><mrow><mi>N</mi><mo>→</mo><mi>∞</mi></mrow></math> limitea hurrengo egiturako uhin-ekuazioa betetzen dela egiaztatzeko: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>v</mi><mn>2</mn></msup></mfrac><mi>u</mi><mi>.</mi></mrow></math> Zeintzuk dira <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><mi>v</mi></math> konstanteak?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko eraztunaren masa <math display=\"inline\"><mi>M</mi></math> da eta <math display=\"inline\"><mi>P</mi></math> puntuaren inguruan oszila daiteke plano bertikal batean grabitatearen eraginpean. <math display=\"inline\"><mi>m</mi></math> masako iduneko bat eraztunean barrena higi daiteke marruskadurarik gabe."
      },
      {
       "mota": "testua",
       "html": "(a) Aurkitu oszilazio txikien maiztasun normalak eta dagozkien modu normalak."
      },
      {
       "mota": "testua",
       "html": "(b) Deskribatu kualitatiboki modu normalak."
      },
      {
       "mota": "testua",
       "html": "(c) Nolako hastapen-baldintzak aukeratu behar dira sistema modu normaletan oszilarazteko?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi masa berdin, irudiko hagatxo leun paralelo bertikaletan barrena higi daitezke eta malgukien bidez daude loturik erakusten den moduan. Hagatxoen arteko distantzia, <math display=\"inline\"><msup><mi>k</mi><mo>′</mo></msup></math> konstante berreskuratzaileko malgukiaren luzera propioaren berdina da. Aurkitu maiztasun eta koordenatu normalak. Deskribatu modu normalak."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko bi blokeen masak <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><mi>m</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>m</mi></mrow></math> dira eta mahai horizontal leun batean daude, beraien artean eta hormatik bi malguki berdinez lotuta, irudian erakusten den moduan. Oreka-posiziotik neurtutako <math display=\"inline\"><msub><mi>x</mi><mi>i</mi></msub></math> abzisak erabiltzen badira, hastapen-baldintzak <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> dira. Aurkitu higidura-ekuazioen soluzioa."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Pendulu elastikoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko hagatxo arina plano bertikal batean bira daiteke artikulazio leun baten inguruan. Gainera, <math display=\"inline\"><mi>m</mi></math> masa hagatxoan barrena higi daiteke marruskadurarik gabe eta hagatxoaren artikulaziotik loturik dago <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> luzera propioko malguki arin baten bidez. Kalkulatu maiztasun eta modu normalak. Iruzkina egin emaitzari. <em>Oharra</em>: Oszilazioak txikiak ez direnean zer gertatzen den ikusteko, erabili simulazio hau: <code>http://tp.lc.ehu.eus/jma/mekanika/oszilazioak/elastikoa.html</code>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kontsidera dezagun 7.20 irudiko sistema <math display=\"inline\"><mrow><msup><mi>k</mi><mo>′</mo></msup><mo>=</mo><mi>k</mi></mrow></math> kasu berezian. Partikula bati bere oreka-posizioan heltzen badiogu, bestearen oszilazioen periodoa <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>3</mn></mrow></math> s da. Aurkitu zein den higidura hasieran desplazamenduak 0 eta <math display=\"inline\"><mi>A</mi></math> baziren eta abiadurak nuluak. Zein da partikulen arteko energia-transferentzia neurtzen duen denbora karakteristikoa?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Indargetzea eta maiztasun normalak",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azter dezagun sistema baten oreka egonkorreko puntu baten inguruko hurbilketa koadratikoa koordenatu orokortu ortogonaletan: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>m</mi><mi>j</mi></msub><msubsup><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi><mn>2</mn></msubsup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>j</mi><mo>,</mo><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>V</mi><mrow><mi>j</mi><mi>k</mi></mrow></msub><msub><mi>q</mi><mi>j</mi></msub><msub><mi>q</mi><mi>k</mi></msub><mi>.</mi></mrow></math> Pultsazio normalak <math display=\"inline\"><msub><mi>ω</mi><mi>k</mi></msub></math> dira eta dagozkien bektore propio orokortuak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mrow><mn>1</mn><mi>k</mi></mrow></msub><mo>,</mo><msub><mi>C</mi><mrow><mn>2</mn><mi>k</mi></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>C</mi><mrow><mi>n</mi><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>. Demagun orain <math display=\"inline\"><msub><mi>q</mi><mi>j</mi></msub></math> koordenatu bakoitzak <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>γ</mi><msub><mi>m</mi><mi>j</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub></mrow></math> marruskadura ahula pairatzen duela. Froga ezazu kasu kontserbatzailean aurkitutakoaren berdina dela orain higidura, <math display=\"inline\"><msub><mi>ω</mi><mi>k</mi></msub></math> pultsazio normalen ordez <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mi>k</mi></msub><mo>=</mo><msqrt><mrow><msubsup><mi>ω</mi><mi>k</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mi>i</mi><mi>γ</mi></mrow></math> pultsazio konplexuak erabiltzen badira, soluzioa <math display=\"inline\"><mrow><msub><mi>q</mi><mi>j</mi></msub><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msub><mi>C</mi><mrow><mi>j</mi><mi>k</mi></mrow></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi mathvariant=\"normal\">Ω</mi><mi>k</mi></msub><mi>t</mi></mrow></msup></mrow></math> moduan idazteko. Iruzkina egin emaitzari."
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
       "html": "Hagatxo bat mutur batetik <math display=\"inline\"><mi>d</mi></math> distantziara dagoen artikulazio horizontal leun baten inguruan bira daiteke. Aipaturiko muturretik pendulu matematiko bat eseki da, irudian erakusten den moduan."
      },
      {
       "mota": "testua",
       "html": "(a) Aurkitu oreka-konfigurazioak eta eztabaidatu euren egonkortasuna."
      },
      {
       "mota": "testua",
       "html": "(b) Aukeratu <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>3</mn><mi>m</mi></mrow></math>, <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>3</mn><mi>d</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mn>8</mn><mi>d</mi></mrow></math> balioak eta kontsideratu oreka egonkorreko konfigurazioaren inguruko oszilazio txikiak, penduluaren eta hagatxoaren oszilazio-planoak paraleloak direnean. Kalkulatu maiztasun normalak. Idatzi higidura-ekuazioen soluzio orokorra. Deskribatu modu normalak."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko bi disko berdinen masa <math display=\"inline\"><mi>m</mi></math> da eta erradioa <math display=\"inline\"><mi>R</mi></math>. Hiru bihurdura-barra berdinen bidez daude loturik euren artean eta zoru eta sabaiarekin. 10.2.6 atalean ikusiko dugunez, bihurdura-barra batek eragindako <math display=\"inline\"><mi>N</mi></math> indar-momentu berreskuratzailea <math display=\"inline\"><mi>φ</mi></math> deformazio-angeluarekiko proportzionala da: <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>−</mi><mi>K</mi><mi>φ</mi></mrow></math>. Diskoak ardatz bertikalaren inguruan bira daitezke eta oreka-konfiguraziotik neurturiko desplazamendu angeluarrak <math display=\"inline\"><msub><mi>φ</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>φ</mi><mn>2</mn></msub></math> dira."
      },
      {
       "mota": "testua",
       "html": "(a) Kalkulatu eta deskribatu maiztasun eta modu normalak."
      },
      {
       "mota": "testua",
       "html": "(b) Hasieran diskoak oreka-posizioan zeuden, <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, baina lehenengoa geldi bazegoen ere, <math display=\"inline\"><mrow><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, bestea biratzen ari zen: <math display=\"inline\"><mrow><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"normal\">Ω</mi></mrow></math>. Deskribatu ondorengo higidura eta kalkulatu zenbat denbora behar den lehen diskoak energia zinetiko osoa irabazteko."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko sistemaren ezkerreko muturra <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></math> legearen arabera higitzen ari da, kanpo-indar egoki baten eraginez. Idatzi bi masen higidura-ekuazioak. Zein da masen desplazamendua higidura iraunkorrean? Noiz gertatzen da erresonantzia? <em>Oharra</em>: Arbuiatu marruskadura."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko plataformaren gainean kokatu da <math display=\"inline\"><mi>R</mi></math> erradioko hemisferio hutsa, erakusten den moduan bira daitekeena labaindu gabe. Plataformaren masa <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mi>m</mi><mi>/</mi><mn>2</mn></mrow></math> da. Kalkulatu maiztasun eta modu normalak eta deskribatu azken hauek. Idatzi higidura-ekuazioen soluzio orokorra. Nola higituko da sistema <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean plataforma geldi badago eta <math display=\"inline\"><mrow><mi>A</mi><mi>O</mi><mi>B</mi></mrow></math> ertza horizontalean baina <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar txikiz biratuz?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko masak marruskadurarik gabe higi daitezke zuzen horizontal batean."
      },
      {
       "mota": "testua",
       "html": "(a) <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><mi>∞</mi></mrow></math> bada, zeintzuk dira sistemaren maiztasun normalak?"
      },
      {
       "mota": "testua",
       "html": "(b) Eta <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><msub><mi>k</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> denean?"
      },
      {
       "mota": "testua",
       "html": "(c) Eta <math display=\"inline\"><mrow><msub><mi>k</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> bada?"
      },
      {
       "mota": "testua",
       "html": "<em>Iradokizuna</em>: Ia ez da kalkulurik egin behar."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko gurpila erdiko ardatz horizontal leunaren inguruan bira daiteke. Gurpilaren <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math> masa <math display=\"inline\"><mi>R</mi></math> erradioko periferian dago (hau da, eraztun baten inertzia-momentua du). Periferiako puntu batetik pendulu matematiko bat, <math display=\"inline\"><mi>m</mi></math> masa eta <math display=\"inline\"><mrow><mn>2</mn><mi>R</mi></mrow></math> luzera dituena, eseki da. Penduluaren oszilazio-planoa gurpilarena da."
      },
      {
       "mota": "testua",
       "html": "(a) Kalkulatu maiztasun eta modu normalak."
      },
      {
       "mota": "testua",
       "html": "(b) Nola aukeratu behar dira hastapen-baldintzak sistema modu bakoitzean jartzeko?"
      },
      {
       "mota": "testua",
       "html": "(c) Noiz izango da periodikoa higidura?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko bi masak norabide bertikalean higitzen dira, erdiko masan aplikatutako kanpo-indar bertikal sinusoidalaren eraginpean. Aukeratu koordenatu egokiak eta idatzi higidura-ekuazioen soluzio orokorra."
      },
      {
       "mota": "testua",
       "html": "(a) Nola aukeratu behar da kanpo-indarraren <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> pultsazioa sistema erresonantzian jartzeko?"
      },
      {
       "mota": "testua",
       "html": "(b) Kanpo-indarra kentzen bada, nola aukeratu behar dira hastapen-baldintzak higidura periodikoa izateko? <em>Oharra</em>: Arbuiatu marruskadura."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko bi masak norabide bertikalean higitzen dira, beheko masan aplikatutako kanpo-indar bertikal sinusoidalaren eraginpean. Bi malgukien luzera propioa <math display=\"inline\"><mi>ℓ</mi></math> da. Aukeratu irudiko koordenatuak eta idatzi higidura-ekuazioen soluzio orokorra. Nola aukeratu behar dira <math display=\"inline\"><msub><mi>F</mi><mn>0</mn></msub></math>, <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> eta hastapen-baldintzak (<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean), (a) sistema erresonantzian jartzeko, (b) sistema modu normal batean higitzeko? <em>Oharra</em>: Arbuiatu marruskadura."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Masa bat hagatxo leun arin batean barrena higi daiteke, hagatxoaren artikulazio leunetik malguki baten bidez loturik dagoela. Malgukiaren luzera propioa <math display=\"inline\"><mi>L</mi></math> da eta konstante berreskuratzailea <math display=\"inline\"><mi>k</mi></math>. Hasieran sistema orekan dago, posizio bertikalean, baina <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean masa bereko beste partikula batek jotzen du pendulukoa <math display=\"inline\"><mi>v</mi></math> abiadura horizontal txikiz. Bi masak loturik geratzen dira. Oreka-puntu berriaren inguruko oszilazioak txikiak badira, zeintzuk dira <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>? Nolako baldintzak bete behar dira oszilazioak txikiak izateko?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Helbideak erakusteko, irudiko kartelaren antzekoak eseki dira fakultatean. Sokak tenkatuta badaude, zenbat dira askatasun-graduak? Deskribatu kualitatiboki modu normalak."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu irudiko sistemaren oszilazio bertikalen maiztasun eta modu normalak. Nola aukeratu behar dira hastapen-baldintzak higidura periodikoa izateko?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Hiru malguki",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi masa berdin norabide elkarzutetan higi daitezke, marruskadurarik gabe, eta <math display=\"inline\"><mi>O</mi></math> puntu finkotik eta haien artean loturik daude irudiko malgukien bidez. Kalkulatu maiztasun eta modu normalak. Nola aukeratu behar dira hastapen-baldintzak sistema modu normal bakoitzean jartzeko? <em>Oharra</em>: Hiru malgukiak zuzenak dira une guztietan."
      },
      {
       "mota": "testua",
       "html": "Ikus <code>http://tp.lc.ehu.eus/jma/mekanika/oszilazioak/malgukiak.html</code>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko plataformaren masa <math display=\"inline\"><mi>m</mi></math> da eta oztoporik gabe higi daiteke horizontalean. Gainean duen <math display=\"inline\"><mi>m</mi></math> masako blokea marruskadurarik gabe higi daiteke. Plataforma eta bloke hori geldi daudela, <math display=\"inline\"><mi>v</mi></math> abiadura horizontalez higitzen den <math display=\"inline\"><mi>m</mi></math> masako bigarren blokeak plataformaren gainean dagoena jotzen du. Bi blokeak loturik geratzen badira, nola higitzen dira sistemaren elementuak talka ondoren?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko disko berdinak plano bertikal berean bira daitezke, ardatz leun horizontalen inguruan. Ez dago labainketarik diskoen artean. Diskoen periferiako puntu simetrikoetatik pendulu matematiko berdinak eseki dira. Penduluen masa eta luzera <math display=\"inline\"><mi>m</mi></math> eta <math display=\"inline\"><mi>R</mi></math> dira eta diskoen masa eta erradioa <math display=\"inline\"><mrow><mn>3</mn><mi>m</mi></mrow></math> eta <math display=\"inline\"><mi>R</mi></math>. Kalkulatu sistemaren oszilazio txikien maiztasun eta modu normalak. Nola aukeratu behar dira hastapen-baldintzak higidura periodikoa izateko?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko masak eta malgukiak zuzen berean higitzen dira. (a) Kalkulatu higidura-ekuazioen soluzio orokorra eta erresonantzia-baldintzak. (b) Nola aukeratu behar dira hastapen-baldintzak higidura periodikoa izateko? (c) Muturretako malgukiak kentzen badira, zein(tzuk) d(ir)a maiztasun normala(k)?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko <math display=\"inline\"><mi>M</mi></math> masa barra horizontal leun batean barrena higi daiteke eta <math display=\"inline\"><mi>m</mi></math> norabide bertikalean. Malgukiaren konstante berreskuratzailea <math display=\"inline\"><mi>k</mi></math> da. Demagun orekatik neurtutako malgukiaren luzapena <math display=\"inline\"><mi>y</mi></math> koordenatu orokortua dela. Kalkulatu maiztasun, koordenatu eta modu normalak. Nola aukeratu behar dira hastapen-baldintzak sistema modu normal batean jartzeko?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko barra homogeneoaren masa eta luzera <math display=\"inline\"><mi>m</mi></math> eta <math display=\"inline\"><mi>l</mi></math> dira. Mutur batean duen eraztun txikia barra horizontal leunean barrena higi daiteke. Oszilazio txikiak irudiko planoan gertatzen dira. Kalkulatu maiztasun eta modu normalak. Orekan zegoenean <math display=\"inline\"><mi>J</mi></math> bulkada horizontal txikia aplikatzen zaio eraztunetik <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>2</mn><mi>l</mi><mi>/</mi><mn>3</mn></mrow></math> distantziara. Kalkulatu barraren higidura-ekuazioen soluzioa."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>l</mi></math> luzerako soka arin baten bidez lotu dira <math display=\"inline\"><mrow><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>l</mi></mrow></math> luzerako barra homogeneo baten muturretako bat eta puntu finko bat. Kalkulatu oszilazio lau txikien maiztasun eta modu normalak. Modu normalez gain, badago bestelako soluzio periodikorik?"
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
       "html": "Eraztun bat plano horizontal batean higi daiteke, marruskadurarik gabe, irudian erakusten den eran: eraztuna bira daiteke, baina zentroa zuzen batean barrena higitzen da. Eraztunaren masa eta erradioa <math display=\"inline\"><mi>m</mi></math> eta <math display=\"inline\"><mi>r</mi></math> dira. Malguki arinen luzera propioa <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> da eta konstante berreskuratzailea <math display=\"inline\"><mi>k</mi></math>. Orekan malgukien luzera <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><msub><mi>l</mi><mn>0</mn></msub></mrow></math> da. Kalkulatu maiztasun eta modu normalak."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkulatu irudiko sistemaren maiztasun eta modu normalak, <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>2</mn><mi>m</mi></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>k</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>k</mi></mrow></math> kasuan. Noiz da periodikoa oszilazioa? <em>Oharra</em>: Marruskadura arbuiagarria da."
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
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudiko bi blokeak mahai horizontal leun batean daude eta ezkerrekoan eragiten du kanpo-indar harmonikoa. Aurkitu zein den bete behar den baldintza ezkerreko masa geldi geratu ahal dadin."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Talka inelastikoa (I)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kontsidera dezagun gorputz baten egitura elastikoaren eredu sinplista bat. <em>Gorputz</em> baten osagai <em>mikroskopikoak</em> <math display=\"inline\"><mi>m</mi></math> eta <math display=\"inline\"><mrow><mi>α</mi><mi>m</mi></mrow></math> masak dira eta haien arteko elkarrekintza, masa gabeko malguki batek eragindakoa. Malgukiaren konstante berreskuratzailea <math display=\"inline\"><mi>k</mi></math> da eta <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>α</mi><mo>≤</mo><mn>0.697</mn><mi>…</mi></mrow></math> parametroa konstantea. Horrelako bi <em>gorputz</em> higitzen ari dira, mahai horizontal leun batean."
      },
      {
       "mota": "testua",
       "html": "(a) Aurkitu <em>gorputz</em> bakoitzaren maiztasun eta modu normalak. Idatzi higidura-ekuazioen soluzio orokorra."
      },
      {
       "mota": "testua",
       "html": "(b) Kalkulatu berriro soluzio orokorra, <em>gorputz</em> bakoitzaren higidura bi gorputzen problema dela erabiliz."
      },
      {
       "mota": "testua",
       "html": "(c) Hasieran irudian erakusten den moduan higitzen ari dira, <math display=\"inline\"><mi>v</mi></math> abiadura konstantez eta malgukiak deformatu gabe. Erdiko masen arteko talka elastikoa bada (benetako <em>gorputz makroskopikoen</em> elementu <em>mikroskopikoen</em> artean gertatu ohi denez), zein da bloke bakoitzaren higidura talka ondoren?"
      },
      {
       "mota": "testua",
       "html": "(d) Talka ondoren <em>gorputz</em> bakoitzaren energia zinetikoan bi ekarpen daude: masa-zentroaren translazioari dagokiona eta intrintsekoa (masa-zentroaren sisteman neurtzen dena). Orain, ikuspuntu <em>makroskopikotik</em>, lehenengo ekarpena <em>gorputzaren</em> energia zinetikotzat interpretatzen dugu, eta bigarrena, talkak kitzikatutako barne-energia elastikotzat. Interpretazio <em>makroskopiko</em> honetan, inelastikoa da <em>gorputzen</em> arteko talka. Kalkulatu, ikuspuntu honetatik, talkan galdutako energia zinetikoaren proportzioa <math display=\"inline\"><mi>α</mi></math> parametroaren funtzioan."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Talka inelastikoa (II)",
     "izar": 3,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azter dezagun berriro 7.122 problemako talka. (a) Ebatzi <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>1</mn></mrow></math> kasua, fisikaz baliatuz."
      },
      {
       "mota": "testua",
       "html": "(b) Azaldu zergatik jarri den <math display=\"inline\"><mrow><mi>α</mi><mo>≤</mo><mn>0.697</mn><mi>…</mi></mrow></math> baldintza. (Ekuazio transzendenteen bat askatzeko kalkulagailua beharko duzu.)"
      },
      {
       "mota": "testua",
       "html": "(c) Zer gertatzen da <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn></mrow></math> denean? (Kalkulagailua eta pazientzia erabil daitezke, baina errazagoa da prozesu osoaren simulazio bat egiten bada.)"
      },
      {
       "mota": "testua",
       "html": "(d) Egin prozesuaren simulazio bat."
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
       "html": "Ioiei eusteko erabiltzen den Paul harrapagailuaren eredu mekanikoa egiteko, kontsidera dezagun zela itxurako gainazal leun batean higitzen den partikula puntual bat. Gainazalaren ekuazioa <math display=\"inline\"><mrow><mi>z</mi><mo>∝</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> bada, honela idatz daiteke energia potentzial grabitatorioa, <math display=\"inline\"><mrow><mi>ω</mi><mo>&gt;</mo><mn>0</mn></mrow></math> konstante egokia erabiliz:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Egiaztatu ez dagoela oreka egonkorreko konfiguraziorik. Orain simetria-ardatz bertikalaren inguruan birarazten da <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> abiadura angeluarraz. Zein da bete behar den baldintza oreka egonkorra (eta horren inguruko oszilazioak) gertatu ahal izateko? <em>Oharra</em>: Benetako tresna mekanikoak ikusteko, bilatu Interneten <em>rotating saddle</em>, <em>Paul trap</em> edo antzeko hitzak."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "EHU 2000, ISBN 84-8373-295-5",
     "xehetasuna": "Ebatzitako azterketak (1996-2000), mk:7",
     "hizkuntza": "eu"
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
     "html": ""
    },
    {
     "mota": "testua",
     "html": "Kalkulatu beheko irudietan erakusten diren bi sistema oszilatzaileen pultsazioak, kontuan hartuta lehen kasuan zilindroa irristatu gabe biribiltzen dela eta bigarren kasuan oszilazio txikiak soilik hartzen direla kontuan."
    },
    {
     "mota": "testua",
     "html": "[Irudia 1 (a atala) — argitalpen-deskribapena: <math display=\"inline\"><mi>m</mi></math> masako eta <math display=\"inline\"><mi>R</mi></math> erradioko zilindroa, <math display=\"inline\"><mi>O</mi></math> zentroarekin, lur horizontalaren gainean (sartua) bermatuta. <math display=\"inline\"><mi>O</mi></math> zentrotik <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>,</mo><msub><mi>l</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> malguki horizontal bat ateratzen da, eskuineko pareta bertikal finko batera lotzen dena. Goiko gezi batek zentroaren <math display=\"inline\"><mi>x</mi></math> desplazamendu horizontala markatzen du. <math display=\"inline\"><mi>θ</mi></math> angelua <math display=\"inline\"><mi>R</mi></math> erradio baten gainean neurtzen da bertikalarekiko. Zilindroa lurraren gainean irristatu gabe biribiltzen da.]"
    },
    {
     "mota": "testua",
     "html": "[Irudia 2 (b atala) — argitalpen-deskribapena: sabaia horizontala (sartua) <math display=\"inline\"><mi>O</mi></math> puntuarekin (pibotea) bere goiko eskuineko aldean. <math display=\"inline\"><mi>O</mi></math>-tik <math display=\"inline\"><mi>L</mi></math> luzerako hagaxka bat zintzilikatzen da <math display=\"inline\"><mi>θ</mi></math> angelua osatuz bertikalarekin (puntu-lerroa), <math display=\"inline\"><mi>m</mi></math> masa (zirkulu beltza) bere muturrean duela. Ezkerrean pareta bertikal bat dago (sartua). Sabaiaren gainean <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> distantzia horizontala markatzen da ezkerreko paretatik <math display=\"inline\"><mi>O</mi></math>-ra. Ezkerreko paretaren, sabaitik <math display=\"inline\"><mi>a</mi></math> distantzia bertikalean behera, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>,</mo><msub><mi>l</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> malguki horizontal bat ainguratzen da, <math display=\"inline\"><mi>O</mi></math> pibotetik <math display=\"inline\"><mi>a</mi></math> distantziara dagoen hagaxkaren puntu batera lotzen dena.]"
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
     "html": "a) Planteatutako galdera ebazteko prozedurarik errazena energiarena dela dirudi. Sistema kontserbatzailea denez, haren denbora-deribatu osoa nulua da. Beraz, energia osoaren adierazpenera iristea besterik ez da behar."
    },
    {
     "mota": "testua",
     "html": "Enuntziatuak dioen bezala zilindroa biribiltzen denez, lehen irudian erakusten diren aldagai linealaren eta angeluarraren arteko lotura bat dago: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>R</mi><mi>θ</mi></mrow></math>. Energia osoa, beraz, honela adieraz daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>O</mi></msub><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>I</mi><mi>O</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> zilindroaren inertzia-momentua izanik bere ardatzarekiko. Lotura-ekuazioa erabiliz, adierazpen hau honela geratzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mi>θ</mi><mn>2</mn></msup><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Denborarekiko deribatzen badugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>E</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>k</mi><msup><mi>R</mi><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "honek ekuazio diferenzialera eramaten gaitu zuzenean:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mrow><mn>3</mn><mi>m</mi></mrow></mfrac><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "pultsazioa honakoa duen osziladore harmonikoaren ekuazio diferentziala:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mrow><mn>3</mn><mi>m</mi></mrow></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bitxikeria gisa, aipatu behar dugu kasu honetan ez dugula oszilazio txikietarako hurbilketarik egin behar, eta lortutako higidura harmoniko sinplea oszilazio horien edozein anplitudetarako lortzen dela."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Jarrai dezagun aurreko ataleko prozedura bera. Koordenatu-ardatzak <math display=\"inline\"><mi>O</mi></math> jatorriarekin eta ardatz bertikala gora begira hartzen baditugu, penduluaren masaren koordenatuak hauek izango dira: <math display=\"inline\"><mrow><msub><mi>x</mi><mi>p</mi></msub><mo>=</mo><mi>L</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mi>−</mi><mi>L</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>. Hemendik, erraza da <math display=\"inline\"><mi>m</mi></math> masaren energia zinetikoa eta energia potentzial grabitatorioa ondorioztatzea:"
     ],
     "etiketak": [
      "2."
     ]
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/198ee2b2f8012746.svg\" alt=\"T = 1 / 2 m L^2 dot(theta)^2 #h(2em) V_g = - m g L cos theta\" style=\"width:17.552em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Malgukian gordetako energia potentzial elastikoari dagokionez, adierazpena konplikatu egiten da kalkulua zorrotz egin nahi bada. Adibidez, irudian adierazten den posizioan malgukiaren luzera, erraz egiaztatu daitekeenez, honakoa litzateke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>l</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>0</mn></msub><mo>+</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta energia potentzial elastikoa, beraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>−</mo><msub><mi>l</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "konplexutasun nabarmenekoa. Beraz, komeni da oszilazio txikietarako hurbilketak egitea (hemen bai, horien anplitudea erabakigarria da ondoriozko higiduran) eta gai esanguratsuekin geratzea. Hurbilketa hauek honela itzultzen dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/a0a313252843a4fd.svg\" alt=\"sin theta tilde.eq theta #h(2em) cos theta tilde.eq 1 - theta^2 / 2 #h(2em) \\[ theta upright(&quot; muy pequeño&quot;) \\]\" style=\"width:25.009em;height:2.747em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "(kosinua kasuan, askotan <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≃</mo><mn>1</mn></mrow></math>-ekin geratu ahal izango gara, gainerako gaien izaeraren arabera). Hurbilketa hauek <math display=\"inline\"><mi>l</mi></math> luzeraren gaiari aplikatzen badizkiogu, honela idatzi ahal izango dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>l</mi><mo>≃</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>0</mn></msub><mo>+</mo><mi>a</mi><mi>θ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>θ</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>≃</mo><msub><mi>l</mi><mn>0</mn></msub><mo>+</mo><mi>a</mi><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non bigarren hurbilketa bat erabili dugun berriro, erradikandoaren bigarren gaia (<math display=\"inline\"><msup><mi>θ</mi><mn>4</mn></msup></math>-rekiko proportzionala) arbuiatuz lehenengoaren aldean (zeinaren gai txikiena <math display=\"inline\"><msup><mi>θ</mi><mn>2</mn></msup></math>-rekiko proportzionala den). Modu honetan, energia potentzial elastikoak forma oso sinplea hartzen du, eta energia potentzial grabitatorioari, kontuan hartuko ez dugun konstante gehigarri bat salbu, gauza bera gertatzen zaio. Bien adierazpen finalak hauek dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/70832cf0da47c817.svg\" alt=\"V_g = 1 / 2 m g L theta^2 #h(2em) V_e = 1 / 2 k a^2 theta^2\" style=\"width:15.696em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Azkenik, energiaren adierazpena honakoa da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><mi>L</mi><mo>+</mo><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>θ</mi><mn>2</mn></msup><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Denborarekiko deribatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>E</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><mi>L</mi><mo>+</mo><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "higiduraren ekuazio diferenzialera eramaten gaituena:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mi>L</mi><mo>+</mo><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "pultsazio honakoa duen osziladore harmoniko sinplearen ekuazioa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mfrac><mrow><mi>m</mi><mi>g</mi><mi>L</mi><mo>+</mo><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac></msqrt></mrow></math>"
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
     "html": "Metro bateko luzera eta 0.1 kg-ko masa dituen pendulu bat 0.05 m-ko anplitudearekin oszilatzen hasten da. 5 minutu igaro ondoren, anplitudea 0.025 m-koa da. Kalkulatu: a) amortiguazio-koefizientea, b) erlaxazio-denbora, c) kalitate-faktorea <math display=\"inline\"><mi>Q</mi></math>, eta d) hasierako zikloan galdutako energia."
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
     "html": "Sistema sistema oszilatzaile amortiguatu azpikritiko bat da (oszilazioak egiten dira anplitudea gutxitzen doan bitartean). Ebazpena, beraz, honelakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi>θ</mi></math> penduluaren elongazio angeluarra den, <math display=\"inline\"><msub><mi>θ</mi><mn>0</mn></msub></math> elongazio maximoa edo anplitudea, <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> higidura amortiguatuaren pultsazioa, <math display=\"inline\"><mi>β</mi></math> amortiguazio-koefizientea eta <math display=\"inline\"><mi>δ</mi></math> hasierako fasea. Oszilazio askeen pultsazioa gure kasuan <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>l</mi></mrow></msqrt></mrow></math> da (pendulu sinplea da). Testuaren arabera, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>300</mn></mrow></math> s denbora igaro ondoren, anplitudea erdira murriztu da, eta horregatik honela idatziko dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>300</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mn>300</mn><mi>β</mi></mrow></msup><mo>=</mo><mn>2</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow><mn>300</mn></mfrac><mo>=</mo><mn>2.31</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mspace width=\"0.222em\"></mspace><msup><mi mathvariant=\"normal\">s</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bestalde, osziladore askearen pultsazio propioaren balioa honakoa izango da: <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><mn>3.13</mn><mspace width=\"0.222em\"></mspace><msup><mi mathvariant=\"normal\">s</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>, ikusten denez, <math display=\"inline\"><mi>β</mi></math>-rena baino askoz handiagoa."
    },
    {
     "mota": "testua",
     "html": "Fenomenoaren erlaxazio-denbora magnitude esanguratsua <math display=\"inline\"><mi>e</mi></math> faktore batean murrizten den denbora da. Gure kasuan, <math display=\"inline\"><msub><mi>θ</mi><mn>0</mn></msub></math> anplitude angeluarra <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mi>/</mi><mi>e</mi></mrow></math> izatera pasatzeko behar den <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math> denbora. Beraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>θ</mi><mn>0</mn></msub><mi>e</mi></mfrac><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>t</mi><mi>r</mi></msub></mrow></msup><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>r</mi><mo>=</mo><mfrac><mn>1</mn><mi>β</mi></mfrac><mo>=</mo><mn>432.9</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">s</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>Kalitate-faktorea</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>Q</mi></math> deitzen zaio erresonantzian dagoen anplitudearen <math display=\"inline\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo>=</mo><msub><mi>ω</mi><mi>R</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>0</mn></mrow></math>-rako anplitudearen arteko zatidurari. Amortiguazioa osziladore askearen pultsazio propioaren aldean txikia denean, hau da, <math display=\"inline\"><mrow><mi>β</mi><mo>≪</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> (gure kasua) denean, <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>R</mi></msub><mo>≃</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> da eta <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msub><mi>ω</mi><mi>R</mi></msub><mi>/</mi><mn>2</mn><mi>β</mi><mo>≃</mo><msub><mi>ω</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mi>β</mi></mrow></math> dela ateratzen da. Beraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>Q</mi><mo>=</mo><mfrac><msub><mi>ω</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>β</mi></mrow></mfrac><mo>=</mo><mn>677.6</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kalitate-faktorea, gainera, amortiguazio txikiaren kasuan, ziklo bakoitzeko energia-galera erlatiboarekin erlazionatuta dago, honela idatzi ahal izanez: <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mi>/</mi><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mtext mathvariant=\"normal\">ciclo</mtext></msub></mrow></math>. Lehen zikloaren hasierako energia <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>l</mi><mn>2</mn></msup><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math> da, eta, ordezkatu ondoren, honakoa izango dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><msub><mi>E</mi><mn>0</mn></msub></mrow><mi>Q</mi></mfrac><mo>=</mo><mfrac><mrow><mi>π</mi><mo>×</mo><mn>0.1</mn><mo>×</mo><mn>9.8</mn><mo>×</mo><msup><mn>1</mn><mn>2</mn></msup><mo>×</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.05</mn><mi>/</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mn>677.6</mn></mfrac><mo>=</mo><mn>1.14</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">J</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "emaitza horretara modu berean iritsi ahal izango ginatekeen osziladore amortiguatuaren energiaren adierazpen orokorra <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>β</mi><mi>t</mi></mrow></msup></mrow></math> bezala idatzita erabiliz. Lehen zikloan, energia honek <math display=\"inline\"><msub><mi>E</mi><mn>0</mn></msub></math> balio izatetik <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>β</mi><msub><mi>τ</mi><mn>1</mn></msub></mrow></msup><mo>≈</mo><msub><mi>E</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>β</mi><msub><mi>τ</mi><mn>0</mn></msub></mrow></msup></mrow></math> balio izatera pasako da. Beraz, lehen zikloan galdutako energia, lehen bezala, honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>4</mn><mi>π</mi><mi>β</mi><mi>/</mi><msub><mi>ω</mi><mn>0</mn></msub></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≃</mo><msub><mi>E</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>β</mi></mrow><msub><mi>ω</mi><mn>0</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>β</mi><msub><mi>E</mi><mn>0</mn></msub></mrow><msub><mi>ω</mi><mn>0</mn></msub></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><msub><mi>E</mi><mn>0</mn></msub></mrow><mi>Q</mi></mfrac></mrow></math>"
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
     "html": "Irudian hiru masaz osatutako sistema oszilatzaile bat erakusten da, berreskuratze-konstante berdin-berdineko k hiru malgukiz lotuta, malguki horiek R erradioko bastidore zirkular batean sartuta daudelarik. Goiko partikularen masak 2m du eta beste biek, m. Zein dira sistemaren pultsazio propioak? Zein dira modu normalak eta modu bakoitza bereiz aktibatzen duten hasierako baldintzak? [<em>Oharra</em>: Ez dago marruskadurarik malgukien eta bastidorearen artean, ezta grabitaterik ere]."
    },
    {
     "mota": "testua",
     "html": "(Figura: R erradioko bastidore zirkular bat, gainean hiru masa dituela hiru k malgukiz lotuta aroaren zehar. 2m masa goiko eskuineko aldean dago; beste bi m masak, bata ezkerrean eta bestea beheko eskuineko aldean. Zentrotik hiru masetarako norabide erradialak marrazten dira, θ_1 (goian, 2m masaren ondoan), θ_2 (behean eskuinean, beheko m masaren ondoan) eta θ_3 (ezkerrean, ezkerreko m masaren ondoan) angeluak definitzen direlarik. Hiru malguki-arkuak k konstantearekin etiketatuta daude.)"
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
     "html": "Demagun sistema bere oreka-posizioarekiko desplazatuta dagoela, desplazamendu hori θ_i, i = 1..3 koordenatuen bidez definitzen delarik. Beraz, hiru askatasun-gradu daude. Gure lehen helburua energia zinetikoaren eta energia potentzialaren adierazpenak lortzea da aldagai horien eta haien denbora-deribatuen, _i, i = 1..3, funtzioan. Malgukien l_i, i = 1..3 luzapenak aurreko aldagaien funtzioan honela adieraz daitezkeela kontuan hartuta:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> l_1 = R(θ_2 − θ_1)      l_2 = R(θ_3 − θ_2)      l_3 = R(θ_1 − θ_3) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "energia potentziala honela idatzi ahal izango dugu:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> V = (1/2) k R² [ (θ_2 − θ_1)² + (θ_3 − θ_2)² + (θ_1 − θ_3)² ] </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Energia zinetikoak, bestalde, adierazpen sinple bat du:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> T = (1/2) R² [ 2m \\dot{θ}_1² + m \\dot{θ}_2² + m \\dot{θ}_3² ] = (1/2) m R² ( 2\\dot{θ}_1² + \\dot{θ}_2² + \\dot{θ}_3² ) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Energia zinetikoaren eta potentzialaren dagozkion tentsoreak, beraz, hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> | 2  0  0 |                  |  2  −1  −1 | T = mR² | 0  1  0 |          V = kR² | −1   2  −1 | | 0  0  1 |                  | −1  −1   2 | </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Pultsazio propioak determinante karakteristikoaren |V_ij − ω²T_ij| = 0 soluzioak dira. Gu prozedura laburtua erabiliko dugu, emaitza berdinak lortuko baititugu |v_ij − λt_ij| = 0 determinantea ebatziz, v_ij = βV_ij, t_ij = αT_ij eta λ = (β/α) ω² izanik. α eta β konstanteak gure kasuan α = 1/mR², β = 1/kR² dira, eta hemendik aurrera tentsore hauekin lan egingo dugu:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> | 2  0  0 |            |  2  −1  −1 | t = | 0  1  0 |        v = | −1   2  −1 | | 0  0  1 |            | −1  −1   2 | </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Hortaz:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> | 2−2λ   −1    −1  | |  −1   2−λ    −1  | = 0     →     λ_1 = 0  →  ω_1 = 0 |  −1    −1   2−λ  |                λ_2 = 2  →  ω_2 = √(2k/m) λ_3 = 3  →  ω_3 = √(3k/m) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Horietako lehena (ω_1 = 0) aurreikusgarria zen. Modu errotazionala da, hiru partikulak angelu berdinak eta noranzko berean desplazatzen direlarik, malgukiak oreka-posizioan zeudena baino gehiago deformatu gabe."
    },
    {
     "mota": "testua",
     "html": "Modu normalak kalkulatzeko, aldez aurretik ekuazio karakteristikoaren soluzioak diren ω_r balioei lotutako bektoreak ezagutu behar ditugu. Horretarako, ω = ω_r ordezkatuko dugu ekuazio honetan eta horrela ekuazio lineal homogeneoen sistema bat lortuko dugu, zeinaren ebazpenetik a_r bektoreak lortuko ditugun. Berriro ere, metodo laburtua erabiliko dugu, lotutako bektoreak berdinak direla baitakigu:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> • λ = 0    |  2  −1  −1 | | a_11 |             →   a_11 = a_21 = a_31 | −1   2  −1 | | a_21 | = 0 | −1  −1   2 | | a_31 |</code>"
    },
    {
     "mota": "testua",
     "html": "• λ = 2    | −2  −1  −1 | | a_12 |             →   a_12 = −a_22 = −a_32 | −1   0  −1 | | a_22 | = 0 | −1  −1   0 | | a_32 |"
    },
    {
     "mota": "testua",
     "html": "• λ = 3    | −4  −1  −1 | | a_13 |             →   a_13 = 0,  a_23 = −a_33 | −1  −1  −1 | | a_23 | = 0 | −1  −1  −1 | | a_33 | <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "a_ir notazioarekin ekuazio karakteristikoaren λ_r soluzioari, hau da, ω_r pultsazioari, lotutako bektorearen i-garren osagaia adierazi nahi dugu."
    },
    {
     "mota": "testua",
     "html": "Lotutako bektoreen osagaien arteko erlazio batzuk lortu ditugu, baina indeterminazioa gainditzeko ortonormalizazio-baldintzara jo behar dugu. Hau, dakigunez, forma matrizialean honela idazten da: Ã t A = α I, non t matrize laburtua erabili dugun, A zutabe-bektoreetan oinarrituta eraikitako tentsorea izanik. Hortaz:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> | a_11   a_11   a_11 | | 2  0  0 | | a_11   a_12    0   |   | α  0  0 | | a_12  −a_12  −a_12 | | 0  1  0 | | a_11  −a_12   a_23 | = | 0  α  0 | |  0     a_23  −a_23 | | 0  0  1 | | a_11  −a_12  −a_23 |   | 0  0  α | </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Balio indeterminatuak balio hauek izatera pasatzen dira:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> a_11 = a_12 = 1/(2√m R)              a_23 = √2/(2√m R) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "a_r bektoreak, beraz, hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> | 1 |                        |  1 |                        |  0 | a_1 = ————— | 1 |        a_2 = ————— | −1 |        a_3 = ————— | 1 | 2√m R | 1 |              2√m R | −1 |             2√m R  | −1 |</code>"
    },
    {
     "mota": "testua",
     "html": "(a_1 = (1/(2√m R))·[1, 1, 1]ᵀ ;  a_2 = (1/(2√m R))·[1, −1, −1]ᵀ ;  a_3 = (√2/(2√m R))·[0, 1, −1]ᵀ) <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "eta horietatik eratorritako A matrizea:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> | 1   1    0  | A = ————— | 1  −1   √2  | 2√m R | 1  −1  −√2  | </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Hemendik aurrera, modu normalen forma adieraz dezakegu jada. Abiadura orokortuak _i(0) nuluak diren kasuan (normalean kasurik ohikoena izaten dena), honela idatzi ahal dugu:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> | η_10 | η_0 =   | η_20 |  = Ã T q_0 | η_30 | </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "non q_0 hasierako koordenatu orokortuak {q_i}_0 dituen zutabe-bektorea den. Gure kasuan, adierazitako matrizeak ordezkatuz eta eragiketak eginez, honakoa izango dugu:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> | η_10 |    mR²   | 1   1    1  | | 2  0  0 | | θ_10 |     √m R  | 2θ_10 + θ_20 + θ_30 | | η_20 | = —————  | 1  −1   −1  | | 0  1  0 | | θ_20 |  =  ————  | 2θ_10 − θ_20 − θ_30 | | η_30 |   2√m R  | 0  √2  −√2  | | 0  0  1 | | θ_30 |      2    |   √2(θ_20 − θ_30)   | </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Ez da zaila egiaztatzea modu bakoitza bereiz aktibatzeko hasierako baldintzak balio hauei egokitu behar zaizkiela:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> • 1 modua soilik aktibatuko da baldin:   θ_10 = θ_20 = θ_30 • 2 modua soilik aktibatuko da baldin:   θ_10 = −θ_20 = −θ_30 • 3 modua soilik aktibatuko da baldin:   θ_10 = 0  eta  θ_20 = −θ_30 </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Kasu orokorrena hiru oszilazio-moduen konbinazio lineal bati dagokio, honela idatzi ahal izanez: q_j = a_jr η_r, edo, forma matrizialean: q = A η."
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
     "html": "Irudiko sistema dinamikoa, <math display=\"inline\"><mi>R</mi></math> erradioko eta <math display=\"inline\"><mrow><mn>3</mn><mi>m</mi></mrow></math> masako aro batez osatua, aroaren puntu finko batetik zintzilik dago. Era berean, <math display=\"inline\"><mi>m</mi></math> masa puntual bat <math display=\"inline\"><mrow><mn>5</mn><mi>R</mi></mrow></math> luzerako masa gabeko hagaxka baten bidez zintzilikatzen da aroaren beste puntu finko batetik, zintzilikapen-puntuarekiko diametralki aurkakoa. Sistemak marruskadurarik gabe oszilatzen du plano bertikal batean. a) Idatzi sistemaren funtzio lagrangearra, eta b) Kalkulatu sistemaren oszilazio-maiztasun propioak eta modu normalak."
    },
    {
     "mota": "testua",
     "html": "[Irudia: &quot;<math display=\"inline\"><mrow><mn>3</mn><mi>m</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>R</mi></mrow></math>&quot; etiketatutako aro bat bere periferiako puntu finko batetik zintzilik; zintzilikapen-puntu horretan <math display=\"inline\"><mi>ϕ</mi></math> angelua neurtzen da (bertikalaren eta diametralki aurkako punturaino jaisten den diametroaren artean). Aurkako puntu horretatik <math display=\"inline\"><mrow><mn>5</mn><mi>R</mi></mrow></math> luzerako hagaxka bat zintzilikatzen da, <math display=\"inline\"><mi>θ</mi></math> angelua osatuz bertikalarekin, <math display=\"inline\"><mi>m</mi></math> masa puntuala bere muturrean duela.]"
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
     "html": "a) Irudian ikusten den bezala, bi askatasun-gradu ditugu, <math display=\"inline\"><mi>ϕ</mi></math> eta <math display=\"inline\"><mi>θ</mi></math> koordenatu orokortuek adierazita. Aroaren zintzilikapen-puntua koordenatu-sistemaren jatorritzat hartzen badugu, ardatz bertikala gora begira duela, beheko masaren koordenatuak eta abiaduraren osagaiak hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">{</mo><mi>x</mi><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mn>5</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>z</mi><mo>=</mo><mi>−</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mn>5</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">{</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mn>5</mn><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mn>5</mn><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Sistemaren energia zinetikoa aroaren energia zinetikoaren (bere zintzilikapen-puntuaren inguruko biraketa hutsa izango dena) eta beheko masa zintzilikariaren energia zinetikoaren batura izango da. Aroaren inertzia-momentua, bere periferiako puntu batetik igarotzen den planoarekiko perpendikularra den ardatzarekiko, Steinerren teorema erabiliz, <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>6</mn><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> izango da, eta horrela sistemaren energia zinetikoa honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mn>6</mn><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>5</mn><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>4</mn><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo>−</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Energia potentziala, era berean, aroaren eta masa zintzilikariaren energia potentzialen batura izango da. Eragiketak eginez, honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mn>5</mn><mi>m</mi><mi>g</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Azken bi adierazpen hauetatik, funtzio lagrangearra honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi><mo>=</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>5</mn><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>4</mn><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo>−</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mn>5</mn><mi>m</mi><mi>g</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Kontuan har dezagun orain sistemak egiten dituen oszilazio txikien kasua. <math display=\"inline\"><mi>ϕ</mi></math> eta <math display=\"inline\"><mi>θ</mi></math> angeluak ohiko hurbilketak egiteko bezain txikiak direla suposatuko dugu: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>≃</mo><mi>φ</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>≃</mo><mn>1</mn><mo>−</mo><msup><mi>φ</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></math>. Oszilazio txikien teoria orokorra erabiltzen badugu, energia zinetikoa eta potentziala forma koadratikoetan adierazten saiatuko gara, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>q</mi><mi>i</mi></msub><msub><mi>q</mi><mi>j</mi></msub></mrow></math>, non <math display=\"inline\"><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> eta <math display=\"inline\"><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> konstanteak diren, sistemaren osagai-elementuen ezaugarri fisikoen (masa eta dimentsioak) funtzioak."
     ],
     "etiketak": [
      "2."
     ]
    },
    {
     "mota": "testua",
     "html": "Energia zinetikoa eta energia potentziala, hurbilketen ondoren, honela idatziko dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>≃</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mn>5</mn><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>5</mn><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>4</mn><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>≃</mo><mi>−</mi><mn>10</mn><mi>m</mi><mi>g</mi><mi>R</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mn>5</mn><mi>m</mi><mi>g</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>ϕ</mi><mn>2</mn></msup><mo>+</mo><msup><mi>θ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Energia potentzialean agertzen den <math display=\"inline\"><mrow><mi>−</mi><mn>10</mn><mi>m</mi><mi>g</mi><mi>R</mi></mrow></math> gai gehigarria ez ikusi ahal dugu, energia potentzialaren maila nulua aldatze soil batek haren deuseztapenera eramango gintuzkeelako. Beraz, energia zinetikoak nahi bezala adierazita ditugu. Hurrengo pausoa energia zinetikoaren eta potentzialaren matrizeak idaztea da, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math>, baita laburtuak ere, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒕</mi><mo>=</mo><mi>α</mi><mi mathvariant=\"bold-italic\">𝑻</mi></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>β</mi><mi mathvariant=\"bold-italic\">𝑽</mi></mrow></math>. Berehala ikusten da:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/aea523c9a9fa991a.svg\" alt=\"upright(bold(T)) = 5 m R^2 mat(delim: &quot;[&quot;, 2, 2; 2, 5) med arrow.r med upright(bold(t)) = mat(delim: &quot;[&quot;, 2, 2; 2, 5) #h(2em) [alpha = frac(1, 5 m R^2)]\" style=\"width:24.379em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/e911fff55726aa2a.svg\" alt=\"upright(bold(V)) = 5 m g R mat(delim: &quot;[&quot;, 1, 0; 0, 1) med arrow.r med upright(bold(v)) = mat(delim: &quot;[&quot;, 1, 0; 0, 1) #h(2em) [beta = frac(1, 5 m g R)]\" style=\"width:24.778em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Hemendik aurrera, pultsazio propioak kalkula ditzakegu determinantearen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>v</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><mi>λ</mi><msub><mi>t</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>0</mn></mrow></math> erroen funtzio gisa, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>/</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> izanik. Gure kasuan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>2</mn><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>λ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>5</mn><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>→</mo><mspace width=\"0.222em\"></mspace><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>R</mi></mrow></msqrt></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><mn>6</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>→</mo><mspace width=\"0.222em\"></mspace><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mn>6</mn><mi>R</mi></mrow></msqrt></mtd></mtr></mtable></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Modu normalak kalkulatzeko, lehenengo pultsazio normalen <math display=\"inline\"><msub><mi>ω</mi><mi>r</mi></msub></math> lotutako bektoreak lortu behar ditugu, matrize laburtuetatik lortutako dagozkien <math display=\"inline\"><msub><mi>λ</mi><mi>r</mi></msub></math> balioei dagozkienak berdinak direnak. Beraz, adierazpen hauek erabiliko ditugu:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>21</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mo>→</mo><mspace width=\"0.222em\"></mspace><msub><mi>a</mi><mn>11</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn><msub><mi>a</mi><mn>21</mn></msub></mrow></math>",
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>6</mn></mrow></math>: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>/</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>6</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>22</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mo>→</mo><mspace width=\"0.222em\"></mspace><msub><mi>a</mi><mn>22</mn></msub><mo>=</mo><mn>2</mn><msub><mi>a</mi><mn>12</mn></msub></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>a</mi><mrow><mi>i</mi><mi>r</mi></mrow></msub></math> pultsazio bakoitzari <math display=\"inline\"><msub><mi>ω</mi><mi>r</mi></msub></math> lotutako bektore modalien osagaiak izanik."
    },
    {
     "mota": "testua",
     "html": "Aplika dezagun ortonormalizazio-baldintza indeterminazioa kentzeko. Dakigunez, matrize laburtua <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒕</mi></math> erabiliz, hau honela idazten da: <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">̃</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒕</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>α</mi><mi mathvariant=\"bold-italic\">𝑰</mi></mrow></math>. Beraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><msub><mi>a</mi><mn>21</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>21</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><msub><mi>a</mi><mn>21</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>21</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>α</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mspace width=\"0.222em\"></mspace><mo>→</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mi>a</mi><mn>21</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>5</mn><msqrt><mi>m</mi></msqrt><mspace width=\"0.167em\"></mspace><mi>R</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>a</mi><mn>12</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>5</mn><msqrt><mrow><mn>6</mn><mi>m</mi></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>R</mi></mrow></mfrac></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "horrela, <math display=\"inline\"><msub><mi>a</mi><mi>r</mi></msub></math> bektoreak eta horietatik eratorritako <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> matrizea honela adieraziko dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/247ae9045d8460f8.svg\" alt=\"a_1 = frac(1, 5 sqrt(m) thin R) mat(delim: &quot;[&quot;, - 2; 1) #h(2em) a_2 = frac(1, 5 sqrt(6 m) thin R) mat(delim: &quot;[&quot;, 1; 2) quad arrow.r quad upright(bold(A)) = frac(1, 5 sqrt(6 m) thin R) mat(delim: &quot;[&quot;, - 2 sqrt(6), 1; sqrt(6), 2)\" style=\"width:36.977em;height:3.684em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Hemendik aurrera, modu normalen forma adieraz dezakegu jada. Abiadura orokortuak <math display=\"inline\"><mrow><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> nuluak diren kasuan (normalean kasurik ohikoena izaten dena), honela idatzi ahal dugu: <math display=\"inline\"><mrow><msub><mi>η</mi><mn>0</mn></msub><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">̃</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑻</mi><mspace width=\"0.167em\"></mspace><msub><mi>q</mi><mn>0</mn></msub></mrow></math>, non <math display=\"inline\"><msub><mi>q</mi><mn>0</mn></msub></math> hasierako koordenatu orokortuak <math display=\"inline\"><msub><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>q</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mn>0</mn></msub></math> dituen zutabe-bektorea den. Gure kasuan, adierazitako matrizeak ordezkatuz eta eragiketak eginez, honakoa izango dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>10</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>20</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mn>5</mn><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup></mrow><mrow><mn>5</mn><msqrt><mrow><mn>6</mn><mi>m</mi></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>R</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><msqrt><mn>6</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>6</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ϕ</mi><mn>0</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>0</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msqrt><mi>m</mi></msqrt><mspace width=\"0.167em\"></mspace><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><msub><mi>ϕ</mi><mn>0</mn></msub><mo>+</mo><msub><mi>θ</mi><mn>0</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>6</mn></msqrt><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>ϕ</mi><mn>0</mn></msub><mo>+</mo><msub><mi>θ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ez da zaila egiaztatzea modu bakoitza bereiz aktibatzeko hasierako baldintzak balio hauei egokitu behar zaizkiela:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "1 modua soilik aktibatuko da baldin: <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><msub><mi>ϕ</mi><mn>0</mn></msub></mrow></math>",
      "2 modua soilik aktibatuko da baldin: <math display=\"inline\"><mrow><msub><mi>ϕ</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "Kasu orokorrena bi oszilazio-moduen konbinazio lineal bati dagokio, honela idatzi ahal izanez: <math display=\"inline\"><mrow><msub><mi>q</mi><mi>j</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>j</mi><mi>r</mi></mrow></msub><msub><mi>η</mi><mi>r</mi></msub></mrow></math>, edo, forma matrizialean: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒒</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mi>η</mi></mrow></math>."
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
     "html": "Irudiko bi masako sistema kondentsadore baten plaken artean dago, eta ezkerreko masak karga elektrikoa du. Kondentsadoreari maiztasuna <math display=\"inline\"><mi>ω</mi></math> nahieran alda daitekeen eremu elektriko oszilatzaile bat aplikatzen zaio. <math display=\"inline\"><mi>ω</mi></math>-ren zein baliotarako gertatzen dira anplitude handieneko oszilazioak? Nolakoak dira? [<em>Oharra</em>: Ez ikusi amortiguazioa]."
    },
    {
     "mota": "testua",
     "html": "<em>(Figura)</em>"
    },
    {
     "mota": "testua",
     "html": "Kondentsadorea ezkerreko plaka <math display=\"inline\"><mi>+</mi></math> markatuta eta eskuineko plaka <math display=\"inline\"><mi>−</mi></math> markatuta dituela. Bi plaken artean, horizontalki seriean jarrita: <math display=\"inline\"><mi>k</mi></math> malgukia — <math display=\"inline\"><mi>q</mi></math> kargadun <math display=\"inline\"><mi>m</mi></math> masa — <math display=\"inline\"><msup><mi>k</mi><mo>′</mo></msup></math> malgukia — <math display=\"inline\"><mi>m</mi></math> masa — <math display=\"inline\"><mi>k</mi></math> malgukia. Hau da: plaka(<math display=\"inline\"><mi>+</mi></math>) — [<math display=\"inline\"><mi>k</mi></math>] — <math display=\"inline\"><mi>m</mi></math>(con <math display=\"inline\"><mi>q</mi></math>) — [<math display=\"inline\"><msup><mi>k</mi><mo>′</mo></msup></math>] — <math display=\"inline\"><mi>m</mi></math> — [<math display=\"inline\"><mi>k</mi></math>] — plaka(<math display=\"inline\"><mi>−</mi></math>)."
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
     "html": "Suposatuko dugu ezkerreko eta eskuineko malgukien muturrak material isolatzaileen bidez bi plakei lotuta daudela. Bi askatasun-gradu dituen sistema honen oszilazio-maiztasun propioak zein diren jakitea da aurreko galdera. Horretarako, ohiko prozeduretatik edozeinetatik jo dezakegu. Gu hemen energia zinetikoaren eta potentzialaren tentsoreen kalkulua erabiliko dugu. Bi partikulen masak berdinak direla kontuan hartuta, erraza da hona iristea:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/53f8c8a9b8ed0218.svg\" alt=\"upright(bold(T)) = m mat(delim: &quot;|&quot;, 1, 0; 0, 1) #h(2em) #h(2em) upright(bold(V)) = mat(delim: &quot;|&quot;, k + k&#x27;, - k&#x27;; - k&#x27;, k + k&#x27;)\" style=\"width:20.841em;height:3.110em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Eta hemendik, pultsazio propioak determinante sekularraren ebazpenetik lortzen dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/7540ba4fe627a6a8.svg\" alt=\"\\| upright(bold(V)) - omega^2 upright(bold(T)) \\| = 0 #h(2em) arrow.r #h(2em) {omega_1 = sqrt(k / m)\\ omega_2 = sqrt(frac(k + 2 k&#x27;, m))\" style=\"width:19.917em;height:6.635em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Ezkerreko masa kargatuak kondentsadorearen plaken artean egotean jasotzen duen bultzada oszilatzailea <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><msub><mi>F</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math> bezala adieraz daiteke, eta horrela partikula bakoitzari aplikatutako Newtonen bigarren legea, sinplifikatu ondoren, honela idatziko da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><mfrac><mrow><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup></mrow><mi>m</mi></mfrac><mspace width=\"0.167em\"></mspace><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mi>k</mi><mfrac><mi>′</mi><mi>m</mi></mfrac><mspace width=\"0.167em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>+</mo><mfrac><mrow><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup></mrow><mi>m</mi></mfrac><mspace width=\"0.167em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mi>k</mi><mfrac><mi>′</mi><mi>m</mi></mfrac><mspace width=\"0.167em\"></mspace><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>F</mi><mn>0</mn></msub><mi>/</mi><mi>m</mi></mrow></math> izanik, eta <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math> bi masen desplazamenduak beren oreka-posizioekiko. Fase-faktoreen konplexutasuna alde batera utzita, honelako ebazpen partikularrak saiatzen ditugu:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/66a0260b4dee2119.svg\" alt=\"x_(1 p) = D_1 cos omega t #h(2em) #h(2em) x_(2 p) = D_2 cos omega t\" style=\"width:20.216em;height:1.445em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "eragiketak eginez eta sinplifikatuz, <math display=\"inline\"><msub><mi>D</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>D</mi><mn>2</mn></msub></math> balio gisa hauek ematen dizkigutenak:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/121c1a09f4bf1522.svg\" alt=\"D_1 = frac(A \\( omega_0^2 - omega^2 \\), \\( omega_1^2 - omega^2 \\) \\( omega_2^2 - omega^2 \\)) #h(2em) #h(2em) D_2 = frac(A \\( omega_0^2 - omega_1^2 \\), \\( omega_1^2 - omega^2 \\) \\( omega_2^2 - omega^2 \\))\" style=\"width:30.506em;height:3.100em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "non laburdura gisa <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> erabili dugun. Begi-bistakoa denez, anplitude-maximoak (erresonantzia) gertatzen dira <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msub><mi>ω</mi><mn>1</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow></math> balioetarako. Aipatutako anplitude-maximoak infinituak izango dira amortiguaziorik ez dagoenean."
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
     "html": ""
    },
    {
     "mota": "testua",
     "html": "<strong>00Jun09(2P)</strong>"
    },
    {
     "mota": "testua",
     "html": "a) Aurkitu modu normalen maiztasunak eta koordenatu normalen forma luzera bereko <math display=\"inline\"><mi>l</mi></math> bi pendulu sinplez osatutako sistemarako, <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> masak dituztenak, <math display=\"inline\"><mi>k</mi></math> berreskuratze-konstantedun malguki baten bidez akoplatuta. Orekan, penduluak norabide bertikalean daude. b) Aurkitu era berean bi penduluak bertikal dauden baina eskuineko pendulua ezkerraldera <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiadurarekin mugitzen den egoerari dagokion moduen konbinazioa."
    },
    {
     "mota": "testua",
     "html": "[Irudia: sabaian (sartua adierazita) zintzilik dauden bi pendulu sinple. Ezkerrekoa, <math display=\"inline\"><mi>l</mi></math> luzerakoa, <math display=\"inline\"><mi>θ</mi></math> angelua osatzen du bertikalarekin eta <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> masan amaitzen da; eskuinekoa, <math display=\"inline\"><mi>l</mi></math> luzerakoa, <math display=\"inline\"><mi>ϕ</mi></math> angelua osatzen du bertikalarekin eta <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> masan amaitzen da. Bi masak <math display=\"inline\"><mi>k</mi></math> konstantedun malguki horizontal baten bidez lotuta daude. <math display=\"inline\"><mi>g</mi></math> gezi bat (grabitatea) beherantz apuntatzen du.]"
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
     "html": ""
    },
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "Irudian sistemaren egoera bat erakusten da edozein unetan. Aipatu behar da egoera honek ez duela errealitatea islatzen, problemaren lehen sinplifikazio bat egin baita malgukia horizontalarekiko paralelo mantentzen dela suposatuz, eta hori ez da egia, eskuineko masa ezkerrekoaren altuera ezberdinean egongo baita. Hala ere, oszilazio txikiak kontuan hartuta, masa batetik bestera masa baten desplazamendu bertikal honen ekarpena hutsala da (eta, beraz, arbuiagarria) desplazamendu horizontalek malgukian sortutako luzapenaren ekarpenaren aldean. Honekin ez dugu esan nahi desplazamendu bertikala bera arbuiatzen dugunik (kontuan izango dugu gai grabitatorioen ekarpena energia potentzialari kontuan hartzean), baizik eta haren ekarpena malgukiaren energia potentzial elastikoari hutsala dela desplazamendu horizontalaren ekarpenaren aldean."
    },
    {
     "mota": "testua",
     "html": "Ardatz bertikala gora begira eta energia potentzial grabitatorioen zero-maila penduluetako baten zintzilikapen-puntuan (adibidez, ezkerrekoan) hartuta, eta malgukiaren luzera orekan <math display=\"inline\"><mi>a</mi></math> dela kontuan hartuta, koordenatuak eta abiadura orokortuak honela adierazi ahal izango ditugu:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/4ff6bc5c7844f760.svg\" alt=\"cases(delim: &quot;{&quot;, x_1 = l sin theta &amp; x_2 = a + l sin phi.alt, z_1 = - l cos theta &amp; z_2 = - l cos phi.alt) #h(2em) cases(delim: &quot;{&quot;, dot(x)_1 = l dot(theta) cos theta &amp; dot(x)_2 = l dot(phi.alt) cos phi.alt, dot(z)_1 = l dot(theta) sin theta &amp; dot(z)_2 = l dot(phi.alt) sin phi.alt)\" style=\"width:30.933em;height:3.684em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Adierazpen hauetatik, energia zinetikoa eta potentziala kalkula ditzakegu (aurretik aipatutako sinplifikazioarekin). Honakoa izango dugu:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/3913a81d3025b9d0.svg\" alt=\"T = 1 / 2 #scale(x: 120%, y: 120%)[\\[] m_1 \\( dot(x)_1^2 + dot(z)_1^2 \\) + m_2 \\( dot(x)_2^2 + dot(z)_2^2 \\) #scale(x: 120%, y: 120%)[\\]] = 1 / 2 l^2 \\( m_1 dot(theta)^2 + m_2 dot(phi.alt)^2 \\)\" style=\"width:29.853em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>g</mi><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oszilazio txikien kasurako, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>≃</mo><mi>φ</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>≃</mo><mn>1</mn><mo>−</mo><msup><mi>φ</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></math> egingo dugu, eta bi energia hauek forma koadratikoetan berridatziko ditugu, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>q</mi><mi>i</mi></msub><msub><mi>q</mi><mi>j</mi></msub></mrow></math>. Eragiketak eginez eta sinplifikatuz, honakoa geratuko zaigu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>l</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/2b5a67bcabc97285.svg\" alt=\"V approx 1 / 2 #scale(x: 120%, y: 120%)[\\[] \\( m_1 g l + k l^2 \\) theta^2 + \\( m_2 g l + k l^2 \\) phi.alt^2 - 2 k l^2 theta phi.alt #scale(x: 120%, y: 120%)[\\]]\" style=\"width:26.297em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Oszilazio txiki akoplatuen formalismo orokorrean erabiltzen diren energia zinetikoaren eta energia potentzialaren matrizeak, beraz, hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/ee499e6dd3db6b69.svg\" alt=\"upright(bold(T)) = l^2 mat(delim: &quot;[&quot;, m_1, 0; 0, m_2) #h(2em) upright(bold(V)) = l mat(delim: &quot;[&quot;, m_1 g + k l, - k l; - k l, m_2 g + k l)\" style=\"width:24.462em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Matrize laburtuak <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒕</mi><mo>=</mo><mi>α</mi><mi mathvariant=\"bold-italic\">𝑻</mi></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>β</mi><mi mathvariant=\"bold-italic\">𝑽</mi></mrow></math> hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/11c1c6d9aad3964e.svg\" alt=\"upright(bold(t)) = mat(delim: &quot;[&quot;, m_1, 0; 0, m_2) #h(2em) upright(bold(v)) = mat(delim: &quot;[&quot;, m_1 g + k l, - k l; - k l, m_2 g + k l) #h(2em) \\[ alpha = 1 \\/ l^2 \\, med beta = 1 \\/ l \\]\" style=\"width:34.138em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Pultsazio propioak ekuazio sekularraren <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑻</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>0</mn></mrow></math> erroak dira, edo, matrize laburtuak erabiliz, ekuazioaren <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>−</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒕</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>0</mn></mrow></math> erroak, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>/</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> izanik. Hortaz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mo>+</mo><mi>k</mi><mi>l</mi><mo>−</mo><mi>λ</mi><msub><mi>m</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi><mi>l</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi><mi>l</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mo>+</mo><mi>k</mi><mi>l</mi><mo>−</mo><mi>λ</mi><msub><mi>m</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mi>g</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mfrac><mi>g</mi><mi>l</mi></mfrac></msqrt></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>g</mi><mo>+</mo><mfrac><mrow><mi>k</mi><mi>l</mi></mrow><mi>μ</mi></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mrow><mfrac><mi>g</mi><mi>l</mi></mfrac><mo>+</mo><mfrac><mi>k</mi><mi>μ</mi></mfrac></mrow></msqrt></mtd></mtr></mtable></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> laburdura erabili dugun, bi masen multzoaren <em>masa murriztua</em> gisa."
    },
    {
     "mota": "testua",
     "html": "Hemendik aurrera, lehenengo pultsazio propio hauei lotutako bektoreak kalkulatuko ditugu (edo ekuazio karakteristikoaren <math display=\"inline\"><mi>λ</mi></math> soluzioei lotutakoak matrize laburtuak erabiliz). Hortaz:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/85097ed1c135fd7e.svg\" alt=\"bullet med lambda = g : #h(2em) mat(delim: &quot;[&quot;, k l, - k l; - k l, k l) mat(delim: &quot;[&quot;, a_11; a_21) = 0 quad arrow.r quad a_11 = a_21\" style=\"width:25.504em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/3e6519b597926008.svg\" alt=\"bullet med lambda = g + frac(k l, mu) : #h(2em) mat(delim: &quot;[&quot;, - m_1 / m_2 k l, - k l; - k l, - m_2 / m_1 k l) mat(delim: &quot;[&quot;, a_12; a_22) = 0 quad arrow.r quad a_22 = - m_1 / m_2 a_12\" style=\"width:34.100em;height:3.832em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "non bektore modalien osagaiak konstante biderkakari batean indeterminatu gabe geratzen diren. Aplika dezagun ortonormalizazio-baldintza matrize laburtuaren <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒕</mi></math> bidez indeterminazioa kentzeko. Hau honela idazten da: <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">̃</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒕</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>α</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑰</mi></mrow></math>. Beraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>m</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>m</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>α</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hortik lortzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/c3564943e31c8bd7.svg\" alt=\"a_11 = frac(1, l sqrt(m_1 + m_2)) #h(2em) a_12 = frac(sqrt(m_2 \\/ m_1), l sqrt(m_1 + m_2))\" style=\"width:20.898em;height:3.234em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mi>r</mi></msub></math> bektoreak eta horietatik eratorritako <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> matrizea honela adieraziko dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/6d14efd4059c5b05.svg\" alt=\"upright(bold(a))_1 = frac(1, l sqrt(m_1 + m_2)) mat(delim: &quot;[&quot;, 1; 1) #h(2em) upright(bold(a))_2 = frac(1, l sqrt(m_1 + m_2)) mat(delim: &quot;[&quot;, sqrt(m_2 \\/ m_1); - sqrt(m_1 \\/ m_2))\" style=\"width:29.114em;height:3.684em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>l</mi><msqrt><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></msqrt></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mrow><msub><mi>m</mi><mn>2</mn></msub><mi>/</mi><msub><mi>m</mi><mn>1</mn></msub></mrow></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mrow><msub><mi>m</mi><mn>1</mn></msub><mi>/</mi><msub><mi>m</mi><mn>2</mn></msub></mrow></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Koordenatu normalen adierazpenerako, egoera aldatzen da sistema hasierako pausagune-egoera batetik abiatzen zen beste kasu batzuekiko. Esan behar dugu, kasu honetan, koordenatu normalak honako adierazpen konplexuaren parte errealarekin adieraz daitezkeela:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/48b74bcff036473f.svg\" alt=\"eta_r = T_(j k) thin a_(k r) thin e^(i omega_r t) [q_(j 0) - frac(i dot(q)_(j 0), omega_r)] #h(2em) \\[ upright(&quot;suma en &quot;) j upright(&quot; y &quot;) k \\]\" style=\"width:26.016em;height:3.002em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Hau da:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/8a0f854faf460931.svg\" alt=\"eta_r = T_(j k) thin a_(k r) [q_(j 0) cos omega_r t + frac(dot(q)_(j 0) sin omega_r t, omega_r)] #h(2em) \\[ upright(&quot;suma en &quot;) j upright(&quot; y &quot;) k \\]\" style=\"width:30.143em;height:3.002em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Zorionez, gure kasuan kalkuluak nahiko sinplifikatzen dira, besteak beste, <math display=\"inline\"><mrow><msub><mi>T</mi><mn>12</mn></msub><mo>=</mo><msub><mi>T</mi><mn>21</mn></msub><mo>=</mo><mn>0</mn></mrow></math> dela, <math display=\"inline\"><mrow><msub><mi>q</mi><mrow><mi>j</mi><mn>0</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>j</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math> dela eta <math display=\"inline\"><mrow><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>10</mn></msub><mo>=</mo><mn>0</mn></mrow></math> dela. Horrela, eta <math display=\"inline\"><mrow><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>20</mn></msub><mo>=</mo><msub><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><mi>−</mi><msub><mi>v</mi><mn>0</mn></msub><mi>/</mi><mi>l</mi></mrow></math> dela kontuan hartuta, koordenatu normalak, eragiketak eginez eta sinplifikatuz, honela idatzi ahal izango dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mn>1</mn></msub><mo>=</mo><msub><mi>T</mi><mn>22</mn></msub><mspace width=\"0.167em\"></mspace><msub><mi>a</mi><mn>21</mn></msub><mspace width=\"0.167em\"></mspace><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>20</mn></msub><mspace width=\"0.167em\"></mspace><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>1</mn></msub></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow><mrow><msub><mi>ω</mi><mn>1</mn></msub><msqrt><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></msqrt></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mn>2</mn></msub><mo>=</mo><msub><mi>T</mi><mn>22</mn></msub><mspace width=\"0.167em\"></mspace><msub><mi>a</mi><mn>22</mn></msub><mspace width=\"0.167em\"></mspace><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>20</mn></msub><mspace width=\"0.167em\"></mspace><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>2</mn></msub></mfrac><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow><mrow><msub><mi>ω</mi><mn>2</mn></msub><msqrt><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></msqrt></mrow></mfrac><msqrt><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "edo zutabe-bektore moduan, aurretik definitutako <em>masa murriztua</em> erabiliz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝜼</mi><mo>=</mo><msqrt><mi>μ</mi></msqrt><mspace width=\"0.167em\"></mspace><msub><mi>v</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>1</mn></msub></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>2</mn></msub></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Koordenatu orokortuak modu normalen funtzioan, matrizialki, honela idatziko dira: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒒</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mi mathvariant=\"bold-italic\">𝜼</mi></mrow></math>. Dagokion biderketa matriziala eginez, honako adierazpenetara iristen gara:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>q</mi><mn>1</mn></msub><mo>=</mo><mi>θ</mi><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow><mrow><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>1</mn></msub></mfrac><mo>−</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>2</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>q</mi><mn>2</mn></msub><mo>=</mo><mi>ϕ</mi><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow><mrow><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>2</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Beste metodo bat:</em> Erabil dezagun formalismo lagrangearra higidura-ekuazioetara iristeko. Funtzio lagrangearra honakoa da:"
     ]
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/bdd40015bbf4aa78.svg\" alt=\"L = 1 / 2 l^2 \\( m_1 dot(theta)^2 + m_2 dot(phi.alt)^2 \\) - 1 / 2 #scale(x: 120%, y: 120%)[\\[] \\( m_1 g l + k l^2 \\) theta^2 + \\( m_2 g l + k l^2 \\) phi.alt^2 - 2 k l^2 theta phi.alt #scale(x: 120%, y: 120%)[\\]]\" style=\"width:36.975em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "non energia potentzialean dagoen konstante gehigarria zuzenean kendu dugun, oszilazio txikietarako hurbilketak erabili izateaz gain."
    },
    {
     "mota": "testua",
     "html": "Bi koordenatu orokortuentzako higidura-ekuazioak honakoak izango dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msup><mi>l</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mi>l</mi><mi>θ</mi><mo>−</mo><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">}</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>m</mi><mn>1</mn></msub><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mi>θ</mi><mo>+</mo><mi>k</mi><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><msup><mi>l</mi><mn>2</mn></msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>ϕ</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mi>l</mi><mi>ϕ</mi><mo>+</mo><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">}</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>m</mi><mn>2</mn></msub><mi>l</mi><mover><mi>ϕ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mi>ϕ</mi><mo>−</mo><mi>k</mi><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Ez da zaila begi-bistaz ikustea, bi ekuazioak gaiz gai batzen baditugu, errepikatzen den patroi jakin bat duen ekuazio sinpleago bat lortzen dugula:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msup><mi>d</mi><mn>2</mn></msup><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mi>θ</mi><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mi>g</mi><mi>l</mi></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mi>θ</mi><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Era berean, lehenengo ekuazioa <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>-gatik zatitzen badugu, bigarrena <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>-gatik, eta biak kentzen baditugu, honakoa geratzen zaigu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msup><mi>d</mi><mn>2</mn></msup><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>g</mi><mi>l</mi></mfrac><mo>+</mo><mfrac><mrow><mi>k</mi><mi>l</mi></mrow><msub><mi>m</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mrow><mi>k</mi><mi>l</mi></mrow><msub><mi>m</mi><mn>2</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "errepikatzen den patroi berri batekin. Erraza da ikustea higidura-ekuazioak deskopla daitezkeela aldagai berri gisa hauek erabiltzen baditugu:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/03821250dd94d811.svg\" alt=\"Theta = frac(m_1 theta + m_2 phi.alt, m_1 + m_2) #h(2em) Phi = theta - phi.alt\" style=\"width:16.010em;height:2.891em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "non, lehenengoan, dena <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math> konstanteagatik zatitzea aukeratu dugun, jatorrizko angeluarren baliokideak diren beste koordenatu adimentsional batzuk erabiltzeko, eta horrek ez ditu emaitzak batere aldatzen."
    },
    {
     "mota": "testua",
     "html": "Higidura-ekuazioak aldagai berri hauekin honakoak izango dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/eddd8a141f8bf462.svg\" alt=\"dot.double(Theta) + g / l Theta = 0 #h(2em) #h(2em) dot.double(Phi) + (g / l + k / m_1 + k / m_2) Phi = 0\" style=\"width:25.102em;height:2.980em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "bistako denez deskoplatuta eta bana-banako higidura bibrazio harmoniko sinpleen adierazgarri, pultsazio karakteristiko gisa formalismo orokorra erabiliz aurretik lortutakoak dituztenak:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/0bf7aca079463fe4.svg\" alt=\"omega_1 = sqrt(g / l) #h(2em) omega_2 = sqrt(g / l + k / mu) #h(2em) [mu = frac(m_1 m_2, m_1 + m_2)]\" style=\"width:24.907em;height:3.740em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Ekuazio diferenzial hauen soluzio orokorrak, beraz, honelakoak izango dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/ba8580c8f70b48a4.svg\" alt=\"Theta = A_1 sin \\( omega_1 t + delta_1 \\) #h(2em) Phi = A_2 sin \\( omega_2 t + delta_2 \\)\" style=\"width:23.411em;height:1.364em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Proposatutako problemarako soluzioa lortzeko, lau konstante indeterminatuak <math display=\"inline\"><msub><mi>A</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>A</mi><mn>2</mn></msub></math>, <math display=\"inline\"><msub><mi>δ</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>δ</mi><mn>2</mn></msub></math> zehaztu behar ditugu muga-baldintzetatik (kasu honetan, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-rako hasierako baldintzak: <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><msub><mi>ϕ</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><mi>−</mi><msub><mi>v</mi><mn>0</mn></msub><mi>/</mi><mi>l</mi></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "Aldagai berrien definizioak kontuan hartuta, haien hasierako balioak <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-rako hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/b2e83225082f5276.svg\" alt=\"Theta_0 = frac(m_1 theta_0 + m_2 phi.alt_0, m_1 + m_2) = 0 #h(2em) Phi_0 = theta_0 - phi.alt_0 = 0\" style=\"width:23.171em;height:2.891em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "eta abiadurei dagokienez:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/1355e32f4d19672e.svg\" alt=\"dot(Theta)_0 = frac(m_1 dot(theta)_0 + m_2 dot(phi.alt)_0, m_1 + m_2) = - frac(m_2 v_0, l \\( m_1 + m_2 \\)) #h(2em) dot(Phi)_0 = dot(theta)_0 - dot(phi.alt)_0 = v_0 / l\" style=\"width:30.408em;height:3.155em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Emaitza hauek soluzio orokorretara eramaten baditugu, konstante indeterminatuak zehazteko lau ekuazioen multzo honekin topo egiten dugu:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/94da7d3ea6fa8c4b.svg\" alt=\"Theta_0 = 0 = A_1 sin delta_1 #h(2em) dot(Theta)_0 = - frac(m_2 v_0, m_1 + m_2) = omega_1 A_1 cos delta_1\" style=\"width:27.546em;height:2.587em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/0d3c835fef8d6ee5.svg\" alt=\"Phi_0 = 0 = A_2 sin delta_2 #h(2em) dot(Phi)_0 = v_0 / l = omega_2 A_2 cos delta_2\" style=\"width:23.068em;height:2.313em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>A</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>A</mi><mn>2</mn></msub></math> ez direnez nuluak izan behar, lehenengo zutabeko erlazioetatik ondorioztatzen da <math display=\"inline\"><mrow><msub><mi>δ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> edo <math display=\"inline\"><mi>π</mi></math> dela eta <math display=\"inline\"><mrow><msub><mi>δ</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> edo <math display=\"inline\"><mi>π</mi></math> dela. Balio bikoitzarekiko zalantza ebazteko, baita <math display=\"inline\"><msub><mi>A</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>A</mi><mn>2</mn></msub></math> koefizienteak zehazteko ere, bigarren zutabeko <em>abiadura</em>en arteko erlazioetara joko dugu, kontuan hartuta <math display=\"inline\"><msub><mi>A</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>A</mi><mn>2</mn></msub></math>, <math display=\"inline\"><msub><mi>ω</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>ω</mi><mn>2</mn></msub></math> bezala, positiboak direla suposatzen dela. Modu honetan:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/3bb57b54febc0e03.svg\" alt=\"- frac(m_2 v_0, l \\( m_1 + m_2 \\)) = plus.minus omega_1 A_1 #h(2em) v_0 / l = plus.minus omega_2 A_2\" style=\"width:20.896em;height:2.588em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "(zeinu bikoitza ez da <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>δ</mi><mn>1</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>δ</mi><mn>2</mn></msub></mrow></math> adieraztea besterik, orain lortutako <math display=\"inline\"><mi>δ</mi></math> fase-angeluetarako bi aukeretarako). Lehenengotik, bigarren gaian lotutako zeinua negatiboa izan behar dela lortzen dugu"
    },
    {
     "mota": "testua",
     "html": "(<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>δ</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mo>→</mo><msub><mi>δ</mi><mn>1</mn></msub><mo>=</mo><mi>π</mi></mrow></math>), eta bigarrenetik, aldiz, zeinua positiboa izan behar dela (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>δ</mi><mn>2</mn></msub><mo>=</mo><mi>+</mi><mn>1</mn><mo>→</mo><msub><mi>δ</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>). Gainera, <math display=\"inline\"><msub><mi>A</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>A</mi><mn>2</mn></msub></math> anplitudeen balioak, hurrenez hurren, hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/5b89910d4b9adc23.svg\" alt=\"A_1 = frac(m_2 v_0, omega_1 l \\( m_1 + m_2 \\)) #h(2em) A_2 = frac(v_0, omega_2 l)\" style=\"width:17.451em;height:2.588em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Beraz, higidura-ekuazioak aldagai deskoplatu berrietan honakoak izango dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Θ</mi><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow><mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow><mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mfrac><msub><mi>v</mi><mn>0</mn></msub><mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>l</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orain <math display=\"inline\"><mi>θ</mi></math> eta <math display=\"inline\"><mi>ϕ</mi></math> koordenatu orokortuak <math display=\"inline\"><mi mathvariant=\"normal\">Θ</mi></math> eta <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> aldagai berrien funtzioan adierazi nahi baditugu, ez dugu besterik behar haien definizio-ekuazioetatik askatzea, honakoa lortzeko:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>θ</mi><mo>=</mo><mi mathvariant=\"normal\">Θ</mi><mo>+</mo><mfrac><msub><mi>m</mi><mn>2</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow><mrow><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>1</mn></msub></mfrac><mo>−</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>2</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ϕ</mi><mo>=</mo><mi mathvariant=\"normal\">Θ</mi><mo>−</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow><mrow><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>2</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ikusten dugu koordenatu normal gisa jarduten duten koordenatu orokortu berriak, <math display=\"inline\"><mi mathvariant=\"normal\">Θ</mi></math> eta <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math>, ez datozela bat formalismo orokorrak lortutako koordenatu normalekin, <math display=\"inline\"><msub><mi>η</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>η</mi><mn>2</mn></msub></math>-rekin. Izan ere, azken hauek ez dute ezta dimentsio angeluarrik ere, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><msub><mi>η</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><msup><mi>M</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></msup><msup><mi>L</mi><mn>1</mn></msup></mrow></math> baita. Egiaztapen honek, ikusten denez, ez du azken emaitza aldatzen, eta, era berean, frogatzen du sistema higidura deskoplatuen soluzio sinple batera eramaten duen koordenatu normalen multzo bat baino gehiago aukeratu daitekeela."
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
     "html": "Irudiko masa berdineko sistema higiduran jartzen da hasierako baldintza hauekin: ezkerreko masa oreka-posizioan dago baina v_0 hasierako abiadurarekin, eskuinekoa, berriz, pausagunean dago bere oreka-posiziotik a distantzia batera eskuinera. Zehaztu masen posizioa denboraren funtzioan."
    },
    {
     "mota": "testua",
     "html": "[Irudia: bi paretaren arteko kate horizontala. Ezkerretik eskuinera: ezkerreko paretari lotutako k_1 konstantedun malgukia; m masa; k_2 konstantedun malgukia; m masa; eskuineko paretari lotutako k_1 konstantedun malgukia. k_1 (ezkerreko) eta k_2 malgukien gainean, x_1 eta x_2 akotatutako geziekin, ezkerreko masaren eta eskuineko masaren desplazamenduak adierazten dira, hurrenez hurren, beren oreka-posizioekiko.]"
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
     "html": "Lehenengo oszilazio txiki akoplatuen teoria orokorra erabiliko dugu sistemaren pultsazio propioak eta modu normalak kalkulatzeko, eta, ondoren, hasierako baldintzetatik abiatuta, masen posizioa denboraren funtzioan zehazteko. Horretarako, energia zinetikoaren eta potentzialaren funtzioak idatzi behar dira, desplazamendu horizontalak soilik daudela suposatuz. Edozein denbora-unetan masak sistemaren oreka-posizioarekiko x_1 eta x_2 distantzia batzuetara desplazatuta badaude (hemendik aurrera sistemaren koordenatu orokortutzat hartuko ditugunak), aipatutako funtzioak, hurrenez hurren, honela idatziko dira:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> T = (1/2) T_ij q̇_i q̇_j = (1/2) m (ẋ_1^2 + ẋ_2^2)</code>"
    },
    {
     "mota": "testua",
     "html": "V = (1/2) V_ij q_i q_j = (1/2) [ (k_1 + k_2) x_1^2 + (k_1 + k_2) x_2^2 − 2 k_1 k_2 x_1 x_2 ] <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "non Einsteinen hitzarmena erabiltzen den errepikatutako azpiindizeetan batura egiteko. Bi tentsoreen sinpletasuna dela eta, ez dugu prozedura laburtua erabiliko. Energia zinetikoaren eta energia potentzialaren dagozkion tentsoreak hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> T = [ m   0 ;  0   m ]        V = [ k_1+k_2    −k_2 ;  −k_2    k_1+k_2 ] </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Sistemaren pultsazio propioak ekuazio sekularra |V − ω^2 T| = 0 ebatziz lortzen dira. Hau da:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> | k_1+k_2−ω^2 m       −k_2      | |    −k_2         k_1+k_2−ω^2 m | = 0    →    { ω_1 = √(k_1/m) ;  ω_2 = √((k_1 + 2k_2)/m) } </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Espero zitekeen bezala, pultsazioetako lehena <em>modu simetriko</em> deiturikoari dagokio, bi partikulak distantzia bera albo baterantz desplazatuta eta erdiko malgukia lanean ez dagoela. Bigarrena, <em>modu antisimetriko</em>ari, bi partikulak distantzia bera baina noranzko kontrakoetan desplazatuta."
    },
    {
     "mota": "testua",
     "html": "<strong>• Modu normalak.</strong>"
    },
    {
     "mota": "testua",
     "html": "Kalkula ditzagun lehenengo bi pultsazioei lotutako bektore propioak, ondoren dagokion matrizea eraikitzeko, energia zinetikoaren tentsoretik ortogonalizatu ondoren. Teoriaren arabera, badakigu pultsazio propiei lotutako bektore propioak honako hauen soluzioak direla: (V − ω_r^2 T) a_r = 0. Gure kasuan, ordezkatu eta sinplifikatu ondoren, honakoa geratuko zaigu:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> • ω = ω_1:    [ k_2   −k_2 ;  −k_2   k_2 ] [ a_11 ; a_21 ] = [ 0 ; 0 ]    →    a_21 = a_11</code>"
    },
    {
     "mota": "testua",
     "html": "• ω = ω_2:    [ −k_2   −k_2 ;  −k_2   −k_2 ] [ a_12 ; a_22 ] = [ 0 ; 0 ]    →    a_22 = −a_12 <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Eta dagokion A bektore propioen matrizea, beraz, honela idatziko da:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> A = [ a_11    a_11 ;  a_12    −a_12 ] </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Energia zinetikoaren matrizearen bidezko ortogonalizazio-baldintzak a_11 eta a_12 balioak zehaztea ahalbidetuko digu. Hortaz:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> Ã T A = I    →    a_11 = a_12 = 1/√(2m) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "eta bektore propioen matrizea, jada normalizatuta, honela idatziko da:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> A = (1/√(2m)) [ 1    1 ;  1   −1 ] </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "<strong>• Koordenatu normalak.</strong>"
    },
    {
     "mota": "testua",
     "html": "Gogora dezagun koordenatu normalen adierazpena honela idazten dela:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> η_r = Σ_{jk} T_jk a_kr [ q_{j0} cos ω_r t + (q̇_{j0}/ω_r) sin ω_r t ] </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "non q_{j0} eta q̇_{j0} koordenatu orokortuen hasierako balioak adierazten dituzten. Gure kasuan, hauek dira: x_10 = 0, x_20 = a, ẋ_10 = v_0, ẋ_20 = 0. Balio hauek ordezkatuta, honakoa geratuko zaigu:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> η_1 = √(m/2) ( a cos ω_1 t + (v_0/ω_1) sin ω_1 t )</code>"
    },
    {
     "mota": "testua",
     "html": "η_2 = √(m/2) ( −a cos ω_2 t + (v_0/ω_2) sin ω_2 t ) <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Hemendik koordenatu orokortuen denbora-evoluzioa lortuko dugu q = A η adierazpenaren arabera. Ordezkatuz:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> x_1 = (1/2) [ a (cos ω_1 t − cos ω_2 t) + v_0 ( (sin ω_1 t)/ω_1 + (sin ω_2 t)/ω_2 ) ]</code>"
    },
    {
     "mota": "testua",
     "html": "x_2 = (1/2) [ a (cos ω_1 t + cos ω_2 t) + v_0 ( (sin ω_1 t)/ω_1 − (sin ω_2 t)/ω_2 ) ] <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Erraza da frogatzea bi adierazpen hauek zehaztutako hasierako baldintzak betetzen dituztela."
    },
    {
     "mota": "testua",
     "html": "<strong>• Beste metodo bat.</strong>"
    },
    {
     "mota": "testua",
     "html": "Sistema oszilatzailearen izaera dela eta (masa berdinak paretetara malguki elastiko-konstante berdinekoen bidez lotuta eta haien artean aurrekoen konstante elastiko ezberdineko beste malguki batez), intuitiboa da ondorioztatzea aurrekoan adierazitako bi moduak direla posibleak: simetrikoa, non bi partikulak kantitate berdinak albo baterantz desplazatzen diren, eta antisimetrikoa, non bi partikulak kantitate berdinak noranzko kontrakoetan desplazatzen diren. Suposatuko dugu ere modu hauen bi pultsazio karakteristikoak lortu ditugula, hauek balio dutenak:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> ω_1 = √(k_1/m)        ω_2 = √((k_1 + 2k_2)/m) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Modu bakoitzeko oszilazio-egoerak, partikula bakoitzarentzat, hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<strong>• Modo simétrico:</strong>"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> x_{1(1)} = A_1 cos(ω_1 + φ_1)</code>"
    },
    {
     "mota": "testua",
     "html": "x_{2(1)} = A_1 cos(ω_1 + φ_1) <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Bi partikulak alde bererantz distantzia berbera desplazatuta daude edozein denbora-unetan."
    },
    {
     "mota": "testua",
     "html": "<strong>• Modo antisimétrico:</strong>"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> x_{1(2)} = A_2 cos(ω_2 + φ_2)</code>"
    },
    {
     "mota": "testua",
     "html": "x_{2(2)} = −A_2 cos(ω_2 + φ_2) <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Bi partikulak noranzko kontrakoetan distantzia berbera desplazatuta daude edozein denbora-unetan."
    },
    {
     "mota": "testua",
     "html": "Baina soluzio orokorra (partikula bakoitzaren higidura-ekuazioa) modu bakoitzeko oszilazio-egoeren batura da. Hortaz:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> x_1 = x_{1(1)} + x_{1(2)} = A_1 cos(ω_1 + φ_1) + A_2 cos(ω_2 + φ_2)</code>"
    },
    {
     "mota": "testua",
     "html": "x_2 = x_{2(1)} + x_{2(2)} = A_1 cos(ω_1 + φ_1) − A_2 cos(ω_2 + φ_2) <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Era berean, partikula bakoitzaren abiadurak aurreko adierazpenen deribazioz lortuko dira:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> ẋ_1 = −ω_1 A_1 sin(ω_1 + φ_1) − ω_2 A_2 sin(ω_2 + φ_2)</code>"
    },
    {
     "mota": "testua",
     "html": "ẋ_2 = −ω_1 A_1 sin(ω_1 + φ_1) + ω_2 A_2 sin(ω_2 + φ_2) <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Agertzen diren lau konstante indeterminatuak partikula bakoitzaren posizioaren eta abiaduraren hasierako baldintzetatik kalkulatuko dira. Ordezkatuz, hona iritsiko gara:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> { x_10 = 0 = A_1 cos φ_1 + A_2 cos φ_2 x_20 = a = A_1 cos φ_1 − A_2 cos φ_2 ẋ_10 = v_0 = −ω_1 A_1 sin φ_1 − ω_2 A_2 sin φ_2 ẋ_20 = 0 = −ω_1 A_1 sin φ_1 + ω_2 A_2 sin φ_2 } </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "zeinen ebazpen aldi berekoak honako emaitzetara eramaten gaituen:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> { tan φ_1 = −v_0/(ω_1 a)        A_1 = a/(2 cos φ_1) tan φ_2 = v_0/(ω_2 a)        A_2 = −a/(2 cos φ_2) } </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Ariketa akademiko hutsa da balio hauen ordezkapenak x_1 eta x_2 adierazpenetan lehenengo prozedurak lortutako higidura-ekuazioak berregiten dituela egiaztatzea (zorionez, sinu eta kosinu funtzioak ez dira dagozkien tangente-funtzioen funtzioan kalkulatu beharko, sinplifikatu ahal izango baitira eta aipatutako adierazpenetan azken hau besterik ez da agertuko)."
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "AB barra zuzen eta homogeneo bat, 2a luzerakoa, plano bertikalean mugi daiteke, eta O jatorritik zintzilik dago bere A muturretako batetik L luzerako OA hari luzaezin eta masa gabeko baten bidez. Aurkitu barraren oszilazio txikien maiztasunak bere oreka-posizioaren inguruan. Aztertu L ≫ a eta L ≪ a muga-kasuak."
    },
    {
     "mota": "testua",
     "html": "[Irudia: sabaia horizontala sartua goiko aldean; ardatzak O jatorriarekin, z ardatza gora eta x ardatza eskuinera. O-tik L luzerako OA haria zintzilikatzen da, O-tik beherantz marraztutako bertikalarekin θ angelua osatzen duena (lerro jarraitua). A muturrean barra hasten da, A-tik marraztutako bertikalarekin φ angelua osatzen duena (puntu-lerroa); V barraren zentroa da eta beheko muturrak &quot;2a, M&quot; etiketa darama.]"
    }
   ]
  },
  {
   "id": "a28",
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
     "html": "Erabil ditzagun bigarren irudian erakusten diren aldagai orokortuak. Hagaxkaren zentroaren, V puntuaren, koordenatuak eta abiaduraren osagaiak hauek dira:"
    },
    {
     "mota": "testua",
     "html": "{ x_V = L sin θ + a sin φ → ẋ_V = L θ̇ cos θ + a φ̇ cos φ { z_V = −(L cos θ + a cos φ) → ż_V = L θ̇ sin θ + a φ̇ sin φ"
    },
    {
     "mota": "testua",
     "html": "Hagaxkaren masa-zentroan kontzentratutako masaren energia zinetikoari biraketa-energia zinetikoa gehitu behar diogu. Energia zinetikoaren eta potentzialaren gaiak, kalkuluak eta sinplifikazio egokiak egin ondoren, hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "T = (1/2) M [ L²θ̇² + a²φ̇² + 2La θ̇φ̇ cos(θ − φ) ] + (1/2) [ (1/12) M (2a)² ] φ̇² = (1/2) M [ L²θ̇² + (4/3) a²φ̇² + 2La θ̇φ̇ cos(θ − φ) ]"
    },
    {
     "mota": "testua",
     "html": "V = −Mg (L cos θ + a cos φ)"
    },
    {
     "mota": "testua",
     "html": "Egin ditzagun oszilazio txikien kasurako dagozkion hurbilketak: sin α ≈ α eta cos α ≈ 1 − α²/2, ordena handiagoko gai infinitesimalak arbuiatuz. Beraz, honakoa geratuko zaigu:"
    },
    {
     "mota": "testua",
     "html": "T = (1/2) M [ L²θ̇² + (4/3) a²φ̇² + 2La θ̇φ̇ ] = (1/2) T_ij q̇_i q̇_j V = (1/2) Mg [ Lθ² + aφ² ] = (1/2) V_ij q_i q_j"
    },
    {
     "mota": "testua",
     "html": "Energia potentzialaren gaian, konstante gehigarri bat ere arbuiatu dugu, sistemaren higiduran eraginik ez duena eta erabilitako koordenatu-sistemaren jatorria egoki aukeratuta deuseztatu ahal izango zena. Oszilazio txikien teoria orokorrean adierazitako prozedurari jarraituz, sistemaren oszilazio-maiztasun propioak |V − ω²T| = 0 determinante sekularraren soluzioak izango dira, non V eta T, hurrenez hurren, goiko energia zinetikoaren eta potentzialaren dagozkion tentsoreak diren, gure kasuan hauek direnak:"
    },
    {
     "mota": "testua",
     "html": "V = [ MgL 0 ] T = [ ML² MLa ] [ 0 Mga ] [ MLa (4/3)Ma² ]"
    },
    {
     "mota": "testua",
     "html": "M bi matrizeen gai guztietan agertzen denez, maiztasun propioak kalkulatzean sinplifikatu ahal dugu. Beraz, maiztasun propioak honakoaren ebazpenetik etorriko dira:"
    },
    {
     "mota": "testua",
     "html": "gL − ω²L² −ω²La | <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| = 0 <br>−ω²La ga − ω²(4/3)a² |"
    },
    {
     "mota": "testua",
     "html": "Hau da:"
    },
    {
     "mota": "testua",
     "html": "ω²_{1,2} = (g / 2La) [ 4a + 3L ± √(16a² + 9L² + 12La) ]"
    },
    {
     "mota": "testua",
     "html": "horiek dira bilatutako maiztasun propioak."
    },
    {
     "mota": "testua",
     "html": "▶ L ≫ a eta L ≪ a kasuetarako hurbilketak. Tentaldi bat (gainditu beharrekoa) maiztasun propioen aurreko adierazpena bi forma hauetako batean idaztera eramaten gaitu:"
    },
    {
     "mota": "testua",
     "html": "• L ≫ a kasua: ω²_{1,2} = (g / 2a) [ 4(a/L) + 3 ± √(16(a²/L²) + 9 + 12(a/L)) ] —(a/L → 0)→ { 3g/a , 0 }"
    },
    {
     "mota": "testua",
     "html": "• L ≪ a kasua: ω²_{1,2} = (g / 2L) [ 4 + 3(L/a) ± √(16 + 9(L²/a²) + 12(L/a)) ] —(L/a → 0)→ { 4g/L , 0 }"
    },
    {
     "mota": "testua",
     "html": "Maiztasunetako bigarrena nulua da kasu bakoitzean. Emaitza hauek gure intuizioak esaten digunaren kontra talka egiten dute. Lehenik, L ≫ a bada, honek esaten digu sistema L luzerako hari baten muturrean M masa (ia puntuala) zintzilikatzen duen pendulu sinple baten baliokidea dela. Beraz, pendulu sinple baten pultsazio propioa lortzea espero dugu: ω² = g/L. Bigarrenik, intuizio berdinak esaten digu, L ≪ a bada, sistema bere muturretako batetik zintzilik eta plano bertikalean oszilatzen duen 2a luzerako barra batera murriztuko litzatekeela, eta horregatik espero den pultsazioa pendulu konposatuarena da: ω² = Mgb/I = 3g/4a, non b zintzilikapen-puntutik masa-zentrorako distantzia den (kasu honetan a), eta I hagaxkaren inertzia-momentua den zintzilikapen-puntutik igarotzen den planoarekiko perpendikularra den ardatzarekiko, (1/3)M(2a)² balio duena. Espero diren emaitza hauek batere ez datozenez bat oszilazio txikien formalismo orokorra eta kasu bakoitzeko dagozkion hurbilketak erabiliz lortutakoekin, atzera egingo dugu zer gertatu den jakiteko."
    },
    {
     "mota": "testua",
     "html": "Gogora ditzagun energia zinetikoaren eta potentzialaren adierazpenak lehen hurbilketaren ondoren:"
    },
    {
     "mota": "testua",
     "html": "T = (1/2) M [ L²θ̇² + (4/3) a²φ̇² + 2La θ̇φ̇ ] V = (1/2) Mg [ Lθ² + aφ² ]"
    },
    {
     "mota": "testua",
     "html": "Orain lehen kasuan L (edo L², energia potentziala edo zinetikoa den arabera) faktore komuna ateratzen badugu, eta bigarren kasuan a (edo a², aurretik esandakoaren arabera), honakoak geratuko zaizkigu:"
    },
    {
     "mota": "testua",
     "html": "• L ≫ a kasua: { T = (1/2) ML² [ θ̇² + (4/3)(a²/L²) φ̇² + 2(a/L) θ̇φ̇ ] { V = (1/2) MgL [ θ² + (a/L) φ² ]"
    },
    {
     "mota": "testua",
     "html": "• L ≪ a kasua: { T = (1/2) Ma² [ (L²/a²) θ̇² + (4/3) φ̇² + 2(L/a) θ̇φ̇ ] { V = (1/2) Mga [ (L/a) θ² + φ² ]"
    },
    {
     "mota": "testua",
     "html": "Lehen ondorio bat da orain ez gaudela T = (1/2) T_ij q̇_i q̇_j eta V = (1/2) V_ij q_i q_j formako energia zinetiko eta potentzialen aurrean, T_ij eta V_ij konstante eta finitu parametroekin, baizik eta koefiziente batzuk infinitesimalak direla, eta horregatik orain arte erabilitako formalismo orokorra ez zaiela aplikatuko. Beraz, koefiziente infinitesimal horiek arbuiatuko ditugu energia zinetikoaren eta potentzialaren adierazpenetan, eta horrela honakoak geratuko zaizkigu:"
    },
    {
     "mota": "testua",
     "html": "• L ≫ a kasua: { T = (1/2) ML² θ̇² { V = (1/2) MgL θ²"
    },
    {
     "mota": "testua",
     "html": "• L ≪ a kasua: { T = (1/2)(4/3) Ma² φ̇² { V = (1/2) Mga φ²"
    },
    {
     "mota": "testua",
     "html": "Ikusten denez, kasu bakoitza askatasun-gradu bateko problema bihurtu da, formalismo lagrangearra erabiliz (funtzio lagrangear bakoitzetik Lagrange-ren ekuazioak) edo (orain bai) aurreko atalean erabilitako oszilazio txikien formalismo orokorra erabiliz ebatzi daitekeena, orain energia zinetikoa eta potentziala aurretik adierazitako forman baititugu. Formalismo hau erabiliz, ebazteko determinantea, kasu bakoitzean, honakoa litzateke:"
    },
    {
     "mota": "testua",
     "html": "• L ≫ a kasua: | MgL − ω²ML² | = 0 • L ≪ a kasua: | Mga − ω²(4/3)Ma² | = 0"
    },
    {
     "mota": "testua",
     "html": "bi emaitza hauetara eramaten gaituena:"
    },
    {
     "mota": "testua",
     "html": "• L ≫ a kasua: ω² = g/L • L ≪ a kasua: ω² = 3g/4a"
    },
    {
     "mota": "testua",
     "html": "espero genuena da."
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Irudiko sisteman, malgukia eta masa gabeko hagaxka plano bertikal batean daude. Gainera, malgukiaren higidura posible bakarra norabide bertikalean da. Idatzi sistemaren funtzio lagrangearra. Lortu higiduraren ekuazio diferentzialak. Egin desplazamendu angeluar eta lineal txikietarako hurbilketa eta interpretatu emaitzak. Suposatu orain <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi></mrow></math>. Ebatzi egoera honetarako ondoriozko ekuazioak kasu limite hauetarako: a) <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>, b) $y = $ cte, c) <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>∞</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "[Irudia: sabaia (horizontala sartua) zeinetik <math display=\"inline\"><mi>k</mi></math> konstantedun malguki bat zintzilikatzen den; ardatzak <math display=\"inline\"><mi>x</mi></math> eskuinera eta <math display=\"inline\"><mi>y</mi></math> gora, jatorria sabaian duela; <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>-ren desplazamendu bertikala <math display=\"inline\"><mi>x</mi></math> ardatzarekiko trazoekin markatzen da, beherantz, eta <math display=\"inline\"><mi>y</mi></math> izendatzen da. Malgukiaren beheko muturretik <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> masa zintzilikatzen da; horretatik <math display=\"inline\"><mi>a</mi></math> luzerako hagaxka bat abiatzen da, <math display=\"inline\"><mi>θ</mi></math> angelua osatuz bertikalarekin (puntu-lerroa), eta bere muturrean <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> masa dago.]"
    }
   ]
  },
  {
   "id": "a30",
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
     "html": "Idatz ditzagun bi masen koordenatuak eta haien dagozkion denbora-deribatuak:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>y</mi><mo>−</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><mi>−</mi><mi>a</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>a</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Partikulen abiaduren karratuak hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/97100048f6dc789d.svg\" alt=\"v_1^2 = dot(y)^2 #h(2em) v_2^2 = dot(y)^2 + a^2 dot(theta)^2 + 2 a dot(y) dot(theta) sin theta\" style=\"width:19.839em;height:1.584em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Sistemaren energia potentzialak bi osagai ditu: grabitatorioa eta elastikoa. Datu guzti hauek kontuan hartuta, funtzio lagrangearra eta energia mekanikoa aldi berean idatzi ahal ditugu, kontserbatuko den magnitudea, eragiten duten indarrak guztiak kontserbatzaileak baitira. Hortaz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>a</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>y</mi><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>a</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>y</mi><mo>−</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lagrange-ren ekuazioak bi aldagai orokortuentzat, <math display=\"inline\"><mi>y</mi></math> eta <math display=\"inline\"><mi>θ</mi></math>, behin sinplifikatuta, hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo>+</mo><mi>k</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oszilazio txikien hipotesian (<math display=\"inline\"><mi>θ</mi></math> eta <math display=\"inline\"><mi>y</mi></math> oso txikiak), aurreko ekuazioak honela geratzen dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo>+</mo><mi>k</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>g</mi><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non lehenengoa baino ordena handiagoko gai infinitesimalak baztertu ditugun. Ikus daitekeenez, egoera hauetan bi higidura oszilatzaileak deskoplatuta geratzen dira eta bakoitzak higidura oszilatzaile harmoniko sinple bat adierazten du. [<em>Oharra</em>: Ikus daitekeenez, hurbilketa hau egiteko modua nahiko zakarra da, intuizioaren kontra doan emaitza batera eramaten gaituelako, bi higiduren arteko akoplamendua espero behar baita]."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi></mrow></math> bada, ekuazio hauek honela geratuko dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/a2b8f5c0c90f7c2e.svg\" alt=\"dot.double(y) + frac(k, 2 m) y = - g #h(2em) dot.double(theta) + g / a theta = 0\" style=\"width:15.496em;height:2.605em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Horietako lehenak higidura harmoniko sinple bat adierazten du bertikalean oreka-posizioaren inguruan (<math display=\"inline\"><mrow><msub><mi>y</mi><mtext mathvariant=\"normal\">eq</mtext></msub><mo>=</mo><mi>−</mi><mn>2</mn><mi>m</mi><mi>g</mi><mi>/</mi><mi>k</mi></mrow></math>) <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mn>2</mn><mi>m</mi></mrow></msqrt></mrow></math> balioko maiztasun angeluarrarekin, eta bigarrenak, beste higidura harmoniko sinple bat bertikalaren inguruan <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></mrow></math> maiztasun angeluarrarekin."
    },
    {
     "mota": "testua",
     "html": "Azter ditzagun proposatutako kasu limiteak:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> (cte): Higidura oszilatzaile bertikala besterik ez zaigu geratzen, aurretik lortutako maiztasun angeluarrarekin: <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mn>2</mn><mi>m</mi></mrow></msqrt></mrow></math>."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "$y = $ cte: Beheko masaren higidura pendularra besterik ez zaigu geratzen, <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></mrow></math> maiztasun angeluarrarekin."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>∞</mi></mrow></math>: Lehenengo ekuazio diferentzialeko gai esanguratsu bakarra <math display=\"inline\"><mi>k</mi></math> duena da. Erraza da ikustea lehenengo ekuazio honen emaitza $y = 0 = $ cte dela. Beraz, kasu hau aurrekoaren baliokidea da."
     ]
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": ""
    },
    {
     "mota": "testua",
     "html": "Irudiko sistema, <math display=\"inline\"><mi>R</mi></math> erradioko bi disko zirkularrez osatua, adierazitako puntuetara lotutako <math display=\"inline\"><mi>k</mi></math> konstantedun malguki baten bidez elkarri konektatuta, emanik, aurkitu sistemaren oszilazio-maiztasun propioak. Lortu, era berean, bibrazio-modu normalak. [Kontuan har bedi diskoen eta lurraren arteko irristatzerik ez dagoen kasua]."
    },
    {
     "mota": "testua",
     "html": "<strong>Irudia.</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>R</mi></math> erradioko bi disko zirkular lurraren gainean (sartua) bermatuta, goiko aldetik <math display=\"inline\"><mi>k</mi></math> konstantedun malguki baten bidez lotuta. Ezkerreko diskoa: zentroaren desplazamendua <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math>, malgukiaren goiko lotura-puntuaren desplazamendua <math display=\"inline\"><mrow><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub></mrow></math>, bira <math display=\"inline\"><msub><mi>θ</mi><mn>1</mn></msub></math>. Eskuineko diskoa: zentroaren desplazamendua <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math>, malgukiaren goiko lotura-puntuaren desplazamendua <math display=\"inline\"><mrow><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub></mrow></math>, bira <math display=\"inline\"><msub><mi>θ</mi><mn>2</mn></msub></math>."
    }
   ]
  },
  {
   "id": "a32",
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
     "html": "Diskoen eta lurraren arteko biribiltze hutsa badago, sistemak bi askatasun-gradu besterik ez ditu (adibidez, diskoen zentroen bi desplazamenduak <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math>, edo bakoitzak biratutako angeluak, <math display=\"inline\"><msub><mi>θ</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>θ</mi><mn>2</mn></msub></math>, desplazamendu hauek egiteko). Irristatzea egon izan balitz, lau magnitude hauek ez lukete elkarren arteko erlaziorik izango eta lau askatasun-graduko sistema baten aurrean egongo ginateke."
    },
    {
     "mota": "testua",
     "html": "Bi diskoen masa-zentroen desplazamenduez gain, malgukiaren eta diskoen arteko lotura-puntuen desplazamenduak ere adierazi ditugu, <math display=\"inline\"><mrow><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub></mrow></math> deitu diegunak, biribiltzea badago erraza baita egiaztatzea goiko puntuek zentroarena baino bikoitza den desplazamendua dutela (gainera, desplazamenduak txikiak direla suposatzen ari gara, eta, beraz, malgukiaren luzapena edo uzkurdura lurrarekiko paraleloa den norabidean gertatzen dela). Azkenik, eta oszilazio txikietarako formalismo orokorra erabiltzeari ekin aurretik, gogora ditzagun desplazamendu lineal eta angeluarren arteko lotura-ekuazioak: <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>R</mi><msub><mi>θ</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>R</mi><msub><mi>θ</mi><mn>2</mn></msub></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Beraz, oszilazio txikien teoria orokorra erabiliko dugu eta energia zinetikoa eta potentziala abiaduren eta koordenatu orokortuen funtzio koadratiko gisa adieraziko ditugu, hurrenez hurren, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>q</mi><mi>i</mi></msub><msub><mi>q</mi><mi>j</mi></msub></mrow></math> forman. Hurbilketa honetan, energia zinetikoa eta potentziala honela idatziko dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mspace width=\"0.167em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>8</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non aurreko lotura-erlazioak erabili ditugun. <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math> matrizeak, baita murriztuak ere, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒕</mi><mo>=</mo><mi>α</mi><mi mathvariant=\"bold-italic\">𝑻</mi></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>β</mi><mi mathvariant=\"bold-italic\">𝑽</mi></mrow></math>, <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mfrac><mn>2</mn><mrow><mn>3</mn><mi>m</mi></mrow></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>k</mi></mrow></mfrac></mrow></math> konstante-faktoreen bidez, hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/68def8cbfd9ece96.svg\" alt=\"upright(bold(T)) = frac(3 m, 2) mat(delim: &quot;[&quot;, 1, 0; 0, 1) #h(2em) upright(bold(t)) = mat(delim: &quot;[&quot;, 1, 0; 0, 1)\" style=\"width:14.805em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/e7a5708b7335a10a.svg\" alt=\"upright(bold(V)) = 4 k mat(delim: &quot;[&quot;, 1, - 1; - 1, 1) #h(2em) upright(bold(v)) = mat(delim: &quot;[&quot;, 1, - 1; - 1, 1)\" style=\"width:18.046em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Pultsazio propioak determinantearen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>v</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><mi>λ</mi><mspace width=\"0.167em\"></mspace><msub><mi>t</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>0</mn></mrow></math> soluzioetatik lortzen dira, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>β</mi><mi>α</mi></mfrac><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>3</mn><mi>m</mi></mrow><mrow><mn>8</mn><mi>k</mi></mrow></mfrac><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> izanik. Beraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>→</mo><mspace width=\"0.222em\"></mspace><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>→</mo><mspace width=\"0.222em\"></mspace><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><msqrt><mfrac><mi>k</mi><mrow><mn>3</mn><mi>m</mi></mrow></mfrac></msqrt></mtd></mtr></mtable></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Soluzioetako lehena modu antisimetriko deiturikoari dagokio, desplazamendu berdinak eta noranzko berekoak dituena, malgukiaren luzeran aldaketarik ez dakarrena (translazio hutsa), eta horregatik pultsazio propio nulua dagokio."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Modu normalak.</em> Modu normaletarako, modu laburtu bera aplikatuko dugu, matrize murriztuak erabiliz, bektore berdinak ematen dizkigutenak. <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math> <math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>λ</mi><mn>2</mn></msub></math> balioei dagozkien bektore modalak badira, honela idatzi ahal izango dugu:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>•</mi><mspace width=\"0.222em\"></mspace><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>21</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>21</mn></msub><mo>=</mo><msub><mi>a</mi><mn>11</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>•</mi><mspace width=\"0.222em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>22</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>22</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>12</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bektore modalien ortogonalitate- eta normalizazio-baldintza aplikatzea geratzen zaigu <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒕</mi></math>-k definitutako metrikaren pean, forma matrizialean honela idazten dena: <math display=\"inline\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">¯</mo></mover><mi>r</mi></msub><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒕</mi><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mi>s</mi></msub><mo>=</mo><mi>α</mi><mspace width=\"0.167em\"></mspace><msub><mi>δ</mi><mrow><mi>r</mi><mi>s</mi></mrow></msub></mrow></math>, <math display=\"inline\"><msub><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">¯</mo></mover><mi>r</mi></msub></math> errenkada-bektore bat izanik. Gure kasuan, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒕</mi></math> unitate-tentsorea da, eta horregatik bere ekintzak bektore bat edo beste tentsore bat berdin uzten du. Beraz, hura baztertu ahal izango dugu eta ortogonalitate- eta normalizazio-baldintza honela idatziko da: <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">¯</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>α</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑰</mi></mrow></math>, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> zutabe-bektoreetan oinarrituta eraikitako tentsorea izanik. Hortaz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mn>2</mn><mrow><mn>3</mn><mi>m</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>11</mn></msub><mo>=</mo><msub><mi>a</mi><mn>12</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>3</mn><mi>m</mi></mrow></msqrt></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, bektore propioak <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mi>r</mi></msub></math> eta horietatik eraikitako <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> matrizea hauek dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/284779c3a6270ebc.svg\" alt=\"upright(bold(a))_1 = 1 / sqrt(3 m) mat(delim: &quot;[&quot;, 1; 1) #h(2em) upright(bold(a))_2 = 1 / sqrt(3 m) mat(delim: &quot;[&quot;, 1; - 1) quad arrow.r quad upright(bold(A)) = 1 / sqrt(3 m) mat(delim: &quot;[&quot;, 1, 1; 1, - 1)\" style=\"width:30.725em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Modu normalak.</em> Modu normalen adierazpena, hasierako abiadura orokortuak <math display=\"inline\"><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></math> nuluak direnean (normalean kasurik ohikoena izaten dena), honakoa da:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mi>r</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>a</mi><mrow><mi>j</mi><mi>r</mi></mrow></msub><msub><mi>q</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">]</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mi>r</mi></msub><mi>t</mi><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">suma en </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>i</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>j</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kosinu-funtzioari dagozkion anplitudeak forma matrizialean honela idatzi daitezke, kasu honetan <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑻</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mi>m</mi></mrow><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝑰</mi></mrow></math> dela kontuan hartuta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mn>0</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>10</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>20</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">¯</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑻</mi><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mn>3</mn><mi>m</mi></mrow><mn>2</mn></mfrac><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">¯</mo></mover><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub><mo>=</mo><mfrac><msqrt><mrow><mn>3</mn><mi>m</mi></mrow></msqrt><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>10</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>20</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hemendik ondorioztatzen da modu normalak hauek direla:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mn>1</mn></msub><mo>=</mo><mfrac><msqrt><mrow><mn>3</mn><mi>m</mi></mrow></msqrt><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">[</mo><msub><mi>x</mi><mn>10</mn></msub><mo>+</mo><msub><mi>x</mi><mn>20</mn></msub><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mn>2</mn></msub><mo>=</mo><mfrac><msqrt><mrow><mn>3</mn><mi>m</mi></mrow></msqrt><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">[</mo><msub><mi>x</mi><mn>10</mn></msub><mo>−</mo><msub><mi>x</mi><mn>20</mn></msub><mo stretchy=\"false\" form=\"postfix\">]</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Modu bibrazional bakarra 2.a da, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>20</mn></msub><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>10</mn></msub></mrow></math> bada aktibatuko dena. <math display=\"inline\"><mrow><msub><mi>x</mi><mn>20</mn></msub><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>10</mn></msub></mrow></math> bada, modu translazionala <em>aktibatuko</em> da (?)."
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Irudiko <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> masak masa gabeko eta <math display=\"inline\"><mi>k</mi></math> berreskuratze-konstantedun malguki baten bidez konektatuta daude. <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> masari <math display=\"inline\"><mi>F</mi></math> balioko indar konstante bat aplikatzen bazaio <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean (gerora konstante mantenduko dena), eta masak marruskadurarik gabe irrista daitezkeela suposatuta gainazal horizontalean, lortu 1 partikularen higidura-ekuazioa. Ebaluatu sistemaren energia zinetikoa eta potentziala eta <math display=\"inline\"><mi>F</mi></math> indarrak egindako lana, eta konparatu sistemaren energia mekanikoarekin. [Datuak: Masak pausagunetik abiatzen dira <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> direla eta malgukia bere luzera propioarekin. Gainera, bi masak berdinak dira: <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi></mrow></math>]."
    },
    {
     "mota": "testua",
     "html": "[Irudia: gainazal horizontal sartu baten gainean, bi bloke, <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> (ezkerrekoa) eta <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> (eskuinekoa), <math display=\"inline\"><mi>k</mi></math> konstantedun malguki baten bidez lotuta. <math display=\"inline\"><mi>F</mi></math> indar bat (eskuinerantz doan gezi horizontala) <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>-ren gainean eragiten du. Goiko aldean, eskuinerantz doazen hiru gezik desplazamenduak markatzen dituzte: <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> (<math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>-ren gainean), <math display=\"inline\"><msub><mi>x</mi><mi>c</mi></msub></math> (erdian) eta <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math> (<math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>-ren gainean).]"
    }
   ]
  },
  {
   "id": "a34",
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
     "html": "Suposatuko dugu malgukiaren luzera naturala <math display=\"inline\"><mi>L</mi></math> dela. Irudiak abiapuntuko posizioa erakusten du, desplazamenduak neurtzeko hiru jatorrien posizioak adierazitako puntuekin bat datozela (sistemaren masa-zentroarekiko desplazamendua adierazten duen <math display=\"inline\"><msub><mi>x</mi><mi>c</mi></msub></math> neurtzeko erreferentzia ezkerreko partikularen desplazamenduak neurtzeko erreferentziatik <math display=\"inline\"><mfrac><mi>L</mi><mn>2</mn></mfrac></math> distantziara eskuinera dago, bi masak berdinak direla suposatzen dugulako: <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi></mrow></math>). <math display=\"inline\"><mi>t</mi></math> denbora-unerako, bi partikulen desplazamenduak abiapuntuko posizioarekiko <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math> koordenatuek ematen dituzte, eta, ondorioz, masa-zentroaren desplazamenduak eta dagokion azelerazioak erlazio hauek beteko dituzte:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mi>c</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mi>c</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Malgukiaren deformazioak <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub></mrow></math> balioko du."
    },
    {
     "mota": "testua",
     "html": "▶ <em>Newtonen metodoa.</em> Aplika diezazkiogun Newtonen ekuazioak bi masei:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mi>F</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub></mrow></math> <math display=\"block\"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi ekuazioak batuz eta kenduz, hona iristen gara:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mi>c</mi></msub></mrow></math> <math display=\"block\"><mrow><mi>F</mi><mo>−</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>−</mo><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lehenengo ekuazioak, denborarekiko bi aldiz integratuta eta hasierako baldintzak kontuan hartuta (<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>), <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub></mrow></math> denboraren funtzioan aurkitzea ahalbidetzen digu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mfrac><mi>F</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mspace width=\"0.167em\"></mspace><msup><mi>t</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bigarren ekuazioa erraz identifika daiteke bigarren gaia ez-nulua duen osziladore harmonikoaren ekuazioarekin, zeinaren soluzioa ondo ezaguna den eta zehaztu beharreko bi konstantetan menpekoa den. <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mfrac><mi>F</mi><mrow><mn>2</mn><mi>k</mi></mrow></mfrac></mrow></math> aldagai-aldaketa eginez, bigarren ekuazio hau <math display=\"inline\"><mrow><mover><mi>u</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> formakoa da, zeinaren soluzioa <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mi>/</mi><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> den. <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>δ</mi></math> bi konstanteak hasierako baldintzetatik zehazten dira: <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo>→</mo><mi>u</mi><mo>=</mo><mi>−</mi><mfrac><mi>F</mi><mrow><mn>2</mn><mi>k</mi></mrow></mfrac></mrow></math>, <math display=\"inline\"><mrow><mover><mi>u</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>, eta horrek <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>−</mi><mfrac><mi>F</mi><mrow><mn>2</mn><mi>k</mi></mrow></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mn>0</mn></mrow></math> lortzea ahalbidetzen digu, soluzioan ordezkatuta honela idaztea ahalbidetzen digutenak:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mfrac><mi>F</mi><mrow><mn>2</mn><mi>k</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, bi masen higidura-ekuazioak honakoak izango dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>F</mi><mrow><mn>4</mn><mi>m</mi></mrow></mfrac><mspace width=\"0.167em\"></mspace><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mfrac><mi>F</mi><mrow><mn>4</mn><mi>k</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mfrac><mi>F</mi><mrow><mn>4</mn><mi>m</mi></mrow></mfrac><mspace width=\"0.167em\"></mspace><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mfrac><mi>F</mi><mrow><mn>4</mn><mi>k</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "▶ <em>Lagrangeren formalismoa.</em> Higiduraren ekuazio diferentzial berdinak lortu ahal ditugu formalismo lagrangearra erabiliz. Sistemak bi askatasun-gradu ditu, eta horiei <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math> aldagaiak esleituko dizkiegu koordenatu orokortu gisa. Abiadura orokortuak <math display=\"inline\"><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub></math> izango dira. Energia zinetikoa, energia potentziala (elastikoa soilik) eta dagokion funtzio lagrangearra hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>T</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>V</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">}</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Lagrange-ren ekuazioek kontuan hartu beharko dute, kasu honetan, potentzialetatik datozen indar aktiboez gain, indar bat ere badagoela, moduluan eta norabidean konstantea dena, lehenengo partikularen gainean eragiten duena. Beraz, kontuan hartu beharko da gertaera hau lehenengo aldagai orokortuari dagokion Lagrange-ren ekuazioan, funtzio lagrangearraren gaian sartuta ez dagoen indar aktibo horri dagokion indar orokortua sartu beharko baitugu. Kasu honetarako Lagrange-ren ekuazioen adierazpena honakoa da:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/8160d0fffc4a871e.svg\" alt=\"frac(d, dif t) (frac(partial L, partial dot(q)_j)) - frac(partial L, partial q_j) = Q_j #h(2em) [Q_j = upright(bold(F))_i dot.op frac(partial upright(bold(r))_i, partial q_j)]\" style=\"width:22.087em;height:3.684em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Gure kasuan:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/da3e8ffd27b9fdf2.svg\" alt=\"Q_1 = upright(bold(F)) dot.op frac(partial upright(bold(r))_1, partial x_1) = F #h(2em) Q_2 = 0\" style=\"width:15.257em;height:2.904em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>1</mn></msub><mo>=</mo><mi mathvariant=\"bold-italic\">𝑭</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> baitira (gainera, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub></math> norabide bera dute). Aurretik lortutako funtzio lagrangearra eta orain idatzi ditugun indar orokortuen balioak erabiliz, dagozkion higidura-ekuazioak hauek dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>−</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>F</mi></mrow></math> <math display=\"block\"><mrow><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ekuazio hauek Newtonen metodoa erabiliz aurretik lortutakoen berdinak dira."
    },
    {
     "mota": "testua",
     "html": "▶ <em>Lana eta energia mekanikoa.</em> Sistemaren energia mekanikoa energia zinetikoaren eta potentzialaren batura da. Aurretik lortutako bi masen higidura-ekuazioak kontuan hartuta, dagozkion abiadurak hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><mfrac><mi>F</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mspace width=\"0.167em\"></mspace><mi>t</mi><mo>+</mo><mfrac><mi>F</mi><mrow><mn>4</mn><mi>k</mi></mrow></mfrac><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi></mrow></math> <math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><mfrac><mi>F</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mspace width=\"0.167em\"></mspace><mi>t</mi><mo>−</mo><mfrac><mi>F</mi><mrow><mn>4</mn><mi>k</mi></mrow></mfrac><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hortik energia zinetikoa kalkulatu ahal izango dugu, eragiketak eginez eta sinplifikatuz honela geratuko zaiguna:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msup><mi>F</mi><mn>2</mn></msup><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msup><mi>t</mi><mn>2</mn></msup><mi>m</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>k</mi></mrow></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Era berean, malgukian gordetako energia potentzial elastikoa honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mfrac><msup><mi>F</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>k</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta energia mekanikoa, beraz, honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mrow><msup><mi>F</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>m</mi></mrow></mfrac><mo>+</mo><mfrac><msup><mi>F</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>k</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hasierako energia nulua eta azkena goian agertzen dena direnez, masak eta malgukia osatutako sistema sistema kontserbatzailea izanik, indar konstanteak egindako lana hasierako eta azken unearen arteko energia mekanikoaren aldaketaren berdina izango da zehazki. Hau egiazta daiteke indar batek garatutako lanaren definizio bera erabiliz. Indar konstantea denez, lan hau indarraren eta indarrak eragiten duen masaren desplazamenduaren biderkadura izango da zuzenean. Hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>W</mi><mo>=</mo><mo>∫</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>=</mo><mi>F</mi><mo>⋅</mo><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>F</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>F</mi><mrow><mn>4</mn><mi>m</mi></mrow></mfrac><mspace width=\"0.167em\"></mspace><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mfrac><mi>F</mi><mrow><mn>4</mn><mi>k</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "aurretik lortutako energia mekanikoaren adierazpenarekin bat datorrena."
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": ""
    },
    {
     "mota": "testua",
     "html": "Kontuan har dezagun irudian erakusten den sistema dinamikoa, <math display=\"inline\"><mi>R</mi></math> erradioko eta <math display=\"inline\"><mi>M</mi></math> masako aro batez osatua, bere zirkunferentziaren puntu finko baten inguruan plano bertikal batean oszila dezakeena, eta aroan sartuta dagoen <math display=\"inline\"><mi>m</mi></math> masako konta batez, zeinak marruskadurarik gabe irrista dezakeen. a) Kalkulatu aroaren inertzia-momentua biraketa-ardatzarekiko, b) <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow></math> dela suposatuta, zein izango da oszilazio txikien maiztasuna?, c) Lortu sistemaren funtzio lagrangearra <math display=\"inline\"><mrow><mi>m</mi><mo>≠</mo><mn>0</mn></mrow></math> den kasu orokorrerako irudian erakusten diren koordenatu orokortuak erabiliz (<math display=\"inline\"><mi>θ</mi></math> eta <math display=\"inline\"><mi>φ</mi></math>), d) Egin oszilazio txikietarako hurbilketa lagrangearrean, e) Lortu sistemaren maiztasun normalak, f) Zer gertatzen da <math display=\"inline\"><mrow><mi>m</mi><mo>≪</mo><mi>M</mi></mrow></math> bada? Deskribatu oszilazio txikien modu normalak eta kalkulatu haien maiztasun normalak, g) Gauza bera <math display=\"inline\"><mrow><mi>m</mi><mo>≫</mo><mi>M</mi></mrow></math> kasurako."
    },
    {
     "mota": "testua",
     "html": "[Irudia: zirkunferentzia (aroa, <math display=\"inline\"><mi>M</mi></math> masakoa, <math display=\"inline\"><mi>M</mi></math> etiketatua bere goiko eskuineko aldean) <math display=\"inline\"><mi>O</mi></math> zintzilikapen-puntuarekin bere punturik altuenean eta <math display=\"inline\"><mi>C</mi></math> zentroarekin. <math display=\"inline\"><mi>m</mi></math> konta bat (puntu beltza) zirkunferentzian dago, eskuinean. <math display=\"inline\"><mi>O</mi></math>-tik puntu-lerro bertikal bat jaisten da. <math display=\"inline\"><mi>θ</mi></math> angelua <math display=\"inline\"><mi>O</mi></math>-n neurtzen da bertikal horren eta <math display=\"inline\"><mi>O</mi></math>-tik <math display=\"inline\"><mi>C</mi></math>-ra doan lerroaren (diametroa, <math display=\"inline\"><mi>O</mi></math>-rekiko diametralki aurkako punturaino luzatua; <math display=\"inline\"><mi>m</mi></math> konta EZ dago lerro horretan) artean. <math display=\"inline\"><mi>C</mi></math>-tik <math display=\"inline\"><mi>R</mi></math> erradioa abiatzen da <math display=\"inline\"><mi>m</mi></math>-ra; <math display=\"inline\"><mi>C</mi></math>-ren ondoan <math display=\"inline\"><mi>φ</mi></math> angelua eta, berriro, <math display=\"inline\"><mi>θ</mi></math> angelua markatzen dira <math display=\"inline\"><mi>C</mi></math>-tik jaitsitako puntu-lerro bertikalarekiko.]"
    }
   ]
  },
  {
   "id": "a36",
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
     "html": "Lehenengo galderaren erantzuna berehalakoa da. Aroa denez, masa hura osatzen duen zirkunferentzian kontzentratuta dago, eta horrela aroaren planoarekiko perpendikularra den eta bere <math display=\"inline\"><mi>C</mi></math> zentrotik igarotzen den ardatzarekiko inertzia-momentua <math display=\"inline\"><mrow><msub><mi>I</mi><mi>C</mi></msub><mo>=</mo><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> da, eta Steinerren teorema aplikatuz aurrekoarekiko paraleloa den eta <math display=\"inline\"><mi>O</mi></math>-tik igarotzen den ardatzarekiko inertzia-momentua kalkulatuko dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mi>O</mi></msub><mo>=</mo><msub><mi>I</mi><mi>C</mi></msub><mo>+</mo><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mn>2</mn><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow></math> izatearen suposizioan, aurreko sistema pendulu fisiko bati dagokio, zeinaren oszilazio txikietarako pultsazioa teoriaren arabera honela definitzen den:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mfrac><mrow><mi>M</mi><mi>g</mi><mi>d</mi></mrow><msub><mi>I</mi><mi>O</mi></msub></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mi>M</mi><mi>g</mi><mi>R</mi></mrow><mrow><mn>2</mn><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mi>g</mi><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mi>R</mi></mrow></math> baita, zintzilikapen-puntutik grabitate-zentrorako distantzia. Adierazpen bera lortu ahal izango genuen sistemari dagokion higidura-ekuaziotik. Energia zinetikoa, <math display=\"inline\"><mi>O</mi></math>-ren inguruko biraketa hutsa, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>O</mi></msub><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> bezala idazten da, potentziala, berriz, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>M</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> izango da (<math display=\"inline\"><mi>O</mi></math> zintzilikapen-zentroaren mailan nulua dela suposatuta). Beraz, funtzio lagrangearra honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi><mo>=</mo><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>M</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "zailtasunik gabe higidura-ekuazio honetara eramaten gaituena:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>g</mi><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>∼</mo><mi>θ</mi></mrow></math> hurbilketak, oszilazio txikietarako, aurretik lortutako pultsazioko osziladore harmoniko bati dagokion ekuazio diferentzial bat uzten digu: <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mn>2</mn><mi>R</mi></mrow></msqrt></mrow></math>."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Pasa gaitezen problema orokorrera, <math display=\"inline\"><mrow><mi>m</mi><mo>≠</mo><mn>0</mn></mrow></math> den kasura. Aroaren energia zinetikoari eta potentzialari <math display=\"inline\"><mi>m</mi></math> masari dagokiona gehitu behar diogu, bere kokapenerako irudian definitzen den koordenatu orokortu berriaren, <math display=\"inline\"><mi>φ</mi></math>-ren, funtzioan. Dagozkion koordenatuak eta abiadura orokortuak hauek izango dira:"
     ]
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/a3dd8d8176182106.svg\" alt=\"x_m = R \\[ sin theta + sin \\( theta + phi \\) \\] #h(2em) dot(x)_m = R \\[ dot(theta) cos theta + \\( dot(theta) + dot(phi) \\) cos \\( theta + phi \\) \\]\" style=\"width:33.949em;height:1.584em\" loading=\"lazy\"> <img class=\"formula formula-d\" src=\"media/formulak/e446970729fa7c1c.svg\" alt=\"y_m = - R \\[ cos theta + cos \\( theta + phi \\) \\] #h(2em) dot(y)_m = R \\[ dot(theta) sin theta + \\( dot(theta) + dot(phi) \\) sin \\( theta + phi \\) \\]\" style=\"width:34.660em;height:1.584em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "horrela, <math display=\"inline\"><mi>m</mi></math> masaren energia zinetikoa eta potentziala, eragiketak eginez eta sinplifikatuz, hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta funtzio lagrangearra, sistemaren bi elementuak (aroa eta partikula) kontuan hartuta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>M</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mi>m</mi><mi>g</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oszilazio txikietarako hurbilketak erabiliz, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>∼</mo><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>∼</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>θ</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow></math>, eta bigarrena baino ordena handiagoko gai infinitesimalak arbuiatuz, honakoa geratuko zaigu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>R</mi><msup><mi>θ</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>+</mo><mi>φ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non jada konstante gehigarri bat arbuiatu dugun, problemaren ondorengo garapenean eraginik ez duena."
    },
    {
     "mota": "testua",
     "html": "Ondorengoan, oszilazio txikien formalismo orokorra erabiliko dugu bibrazio-maiztasun eta modu normalak lortzeko. Beraz, energia zinetikoa eta potentziala idatziko ditugu, bereiz, dagozkien <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math> tentsoreak esleituz (ondoren horien forma laburtua bilatzeko, baldin badago, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒕</mi><mo>=</mo><mi>α</mi><mi mathvariant=\"bold-italic\">𝑻</mi></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>β</mi><mi mathvariant=\"bold-italic\">𝑽</mi></mrow></math>). Hortaz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>4</mn><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>R</mi><msup><mi>θ</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>R</mi><msup><mi>φ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>m</mi><mi>g</mi><mi>R</mi><mi>θ</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Edo bestela:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/4f4dc77542112897.svg\" alt=\"upright(bold(T)) = mat(delim: &quot;[&quot;, 2 \\( M + 2 m \\) R^2, 2 m R^2; 2 m R^2, m R^2) #h(2em) upright(bold(t)) = mat(delim: &quot;[&quot;, 2 \\( 1 + 2 delta \\), 2 delta; 2 delta, delta)\" style=\"width:26.598em;height:2.989em\" loading=\"lazy\"> <img class=\"formula formula-d\" src=\"media/formulak/93bd74296a64402c.svg\" alt=\"upright(bold(V)) = mat(delim: &quot;[&quot;, \\( M + 2 m \\) g R, m g R; m g R, m g R) #h(2em) upright(bold(v)) = mat(delim: &quot;[&quot;, 1 + 2 delta, delta; delta, delta)\" style=\"width:23.757em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>α</mi></math> eta <math display=\"inline\"><mi>β</mi></math> faktoreak hauek izanik:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/ff7d456b49effb79.svg\" alt=\"alpha = frac(1, M R^2) #h(2em) beta = M g R = frac(1, M R^2 Omega^2)\" style=\"width:18.499em;height:2.585em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Adierazpen hauetan, gainera, <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mfrac><mi>m</mi><mi>M</mi></mfrac></mrow></math> eta <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mi>g</mi><mi>R</mi></mfrac></mrow></math> identifikazioak erabili ditugu hemendik aurrerako idazketa laburtzeko."
    },
    {
     "mota": "testua",
     "html": "Pultsazio propioak determinantearen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>−</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒕</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>0</mn></mrow></math> soluzioetatik lortzen dira. Gure kasuan, ondoriozko bigarren graduko ekuazioaren soluzioak diren <math display=\"inline\"><mi>λ</mi></math> balioak hauek dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/66d12a6481f2bbdd.svg\" alt=\"lambda_1 = 1 / 2 #h(2em) lambda_2 = 1 + delta\" style=\"width:11.377em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "eta pultsazio propioak <math display=\"inline\"><mi>λ</mi></math> balioekin <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mi>α</mi><mi>β</mi></mfrac><mi>λ</mi><mo>=</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mi>λ</mi></mrow></math> erlazioaren bidez erlazionatuta daudela kontuan hartuta, bilatutako pultsazioak hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/e31032c69a00b204.svg\" alt=\"omega_1 = sqrt(frac(g, 2 R)) #h(2em) omega_2 = sqrt(frac(M + m, M) g / R)\" style=\"width:17.183em;height:3.186em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Problema honen luzapen bat modu normalen kalkulua da. Horretarako, gogoratuko dugu, lehenik, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mi>r</mi></msub></mrow></math> bakoitzerako, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>1</mn><mi>.</mi><mn>.2</mn></mrow></math>, sistema hau ebatzi beharko dugula: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>v</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>λ</mi><mi>r</mi></msub><msub><mi>t</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msub><mi>a</mi><mrow><mi>j</mi><mi>r</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><mn>1</mn><mi>.</mi><mn>.2</mn></mrow></math> :"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mi>δ</mi><mn>2</mn></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>21</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>21</mn></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>+</mo><mi>δ</mi></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>δ</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>22</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>22</mn></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi></mrow><mi>δ</mi></mfrac><msub><mi>a</mi><mn>12</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta ortogonalitate-baldintzatik, orain forma matrizialean honela idatzita: <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">̃</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒕</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>α</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑰</mi></mrow></math>, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> zutabe-bektoreetan oinarrituta eraikitako tentsorea izanik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi></mrow><mi>δ</mi></mfrac><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>δ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>δ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>δ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi></mrow><mi>δ</mi></mfrac><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "behin eragiketa eta sinplifikazio egokiak eginda, adierazpen hauek lortuko dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/842a49f4ee563b16.svg\" alt=\"a_11 = frac(1, R sqrt(M + 2 m)) sqrt(2) / 2 #h(2em) a_12 = frac(1, R sqrt(M + 2 m)) sqrt(m / M)\" style=\"width:25.930em;height:3.162em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Beraz, <math display=\"inline\"><msub><mi>ω</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>ω</mi><mn>2</mn></msub></math> pultsazio propiei dagozkien bektore propioak, zutabe-bektore gisa idatzita, hauek dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/3794135c05786157.svg\" alt=\"upright(bold(a))_1 = frac(1, R sqrt(M + 2 m)) mat(delim: &quot;[&quot;, sqrt(2) / 2; 0) #h(2em) upright(bold(a))_2 = frac(1, R sqrt(M + 2 m)) mat(delim: &quot;[&quot;, sqrt(delta); - frac(1 + 2 delta, sqrt(delta)))\" style=\"width:28.243em;height:3.834em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "eta bektore propio hauetatik eraikitako <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> matrizea, zutabeka jarrita:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>R</mi><msqrt><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></msqrt></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mi>δ</mi></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi></mrow><msqrt><mi>δ</mi></msqrt></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, modu propioak <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">̃</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑻</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒒</mi></mrow></math> forman idatzi ahal izango dira, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒒</mi></math> <math display=\"inline\"><mi>θ</mi></math> eta <math display=\"inline\"><mi>φ</mi></math> koordenatu orokortuek osatutako zutabe-matrizea izanik. Hortaz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>η</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow><mrow><mi>R</mi><msqrt><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></msqrt></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mi>δ</mi></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi></mrow><msqrt><mi>δ</mi></msqrt></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>δ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>δ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>δ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>θ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>φ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Adierazpen hau garatuz, modu propioak honela geratzen dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mn>1</mn></msub><mo>=</mo><mfrac><msqrt><mn>2</mn></msqrt><msqrt><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></msqrt></mfrac><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>θ</mi><mo>+</mo><mi>m</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>η</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msqrt><mfrac><mrow><mi>M</mi><mi>m</mi></mrow><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></mfrac></msqrt><mi>R</mi><mi>φ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Horietako lehenari, <math display=\"inline\"><msub><mi>η</mi><mn>1</mn></msub></math>, <em>modu simetriko</em> deitzen diogu, eta bigarrenari, <math display=\"inline\"><msub><mi>η</mi><mn>2</mn></msub></math>, <em>modu antisimetriko</em>. Adierazpen hauetatik ondorioztatzen denez, 1 modua soilik aktibatuko da <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math> bada, eta 2 modua aktibatuko da <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow><mi>m</mi></mfrac><mi>θ</mi></mrow></math> bada. Horietako lehena aroan finko dagoen <math display=\"inline\"><mi>m</mi></math> masari dagokio, <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mn>2</mn><mi>R</mi></mrow></math> luzerako pendulu sinple baten <math display=\"inline\"><mi>m</mi></math> masa batek egingo lukeen bezala mugituz."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>m</mi><mo>≪</mo><mi>M</mi></mrow></math> kasua. Pultsazio propioetako lehena ez da aldatzen, bigarrena, berriz, proposatutako hurbilketa eginda, <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>∼</mo><msqrt><mfrac><mi>g</mi><mi>R</mi></mfrac></msqrt></mrow></math> bezala geratzen da. Modu simetrikoa eta antisimetrikoa, hurbilketak erabili ondoren, orain honela idatziko ditugu:"
     ]
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/7bcd93172a42361f.svg\" alt=\"eta_1 = sqrt(2 M) thin R [theta + m / M phi] #h(2em) eta_2 = - sqrt(m) thin R phi\" style=\"width:21.739em;height:2.336em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Modu antisimetrikoa aktibatzeko, <math display=\"inline\"><mrow><mi>θ</mi><mo>+</mo><mfrac><mi>m</mi><mi>M</mi></mfrac><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mi>φ</mi></math> <math display=\"inline\"><mi>θ</mi></math> baino askoz handiagoa da. Beraz, modu honetan aroa ia ez dela mugitzen dirudi eta <math display=\"inline\"><mi>m</mi></math> masak zentroa zirkuluaren <em>zentro</em>an duen pendulu baten antzeko higidura izango luke, hau da, <math display=\"inline\"><mi>R</mi></math> luzerakoa. Higidura simetrikoan, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math>, masa eta aroa elkarrekin mugitzen dira."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>m</mi><mo>≫</mo><mi>M</mi></mrow></math> kasua. Pultsazio propioetako lehena ez da aldatzen, bigarrena, berriz, proposatutako hurbilketa eginda, <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>∼</mo><msqrt><mrow><mfrac><mi>m</mi><mi>M</mi></mfrac><mfrac><mi>g</mi><mi>R</mi></mfrac></mrow></msqrt></mrow></math> bezala geratzen da. Modu simetrikoa eta antisimetrikoa, hurbilketak erabili ondoren, orain honela idatziko ditugu:"
     ]
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/9169b10339ff466d.svg\" alt=\"eta_1 = sqrt(m) thin R \\[ 2 theta + phi \\] #h(2em) eta_2 = - sqrt(M / 2) thin R phi\" style=\"width:20.248em;height:3.046em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Modu antisimetrikoa <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>θ</mi></mrow></math> denean aktibatuko da, eta horrek, praktikara eramanda, <math display=\"inline\"><mi>m</mi></math> partikula ia ez dela mugitzen dirudiela eragiten du dagoen lekuan (komeni da gertatzen den egoeraren irudikapen grafikoa egitea). Modu simetrikoari dagokionez, aurreko kasuan bezala esan dezakegu."
    },
    {
     "mota": "testua",
     "html": "line(start: (25%,0%), end: (75%,0%))"
    },
    {
     "mota": "testua",
     "html": "Transkripzio-oharrak (ez dira jatorrizko testuaren parte): - Literalki transkribatzen da. 50. orrialdean egileak <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>M</mi><mi>g</mi><mi>R</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> idazten du; erdiko <math display=\"inline\"><mrow><mi>M</mi><mi>g</mi><mi>R</mi></mrow></math> gaia ez dator bat eskuineko kidearekin (<math display=\"inline\"><mrow><mfrac><mn>1</mn><mrow><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>M</mi><mi>g</mi><mi>R</mi></mrow></mfrac></mrow></math>): jatorrizkoaren erratura da, horrela errespetatzen da. - &quot;problerma&quot; (51. or.) jatorrizkoaren erratura da; errespetatzen da. - Jatorrizkoaren azentuazioa errespetatu da: &quot;construida&quot;-&gt;&quot;construída&quot;, &quot;esta&quot;-&gt;&quot;esta&quot; (azenturik gabe &quot;cuyo centro esta en el centro&quot; esaldian)."
    }
   ]
  },
  {
   "id": "a37",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Irudian bibrazioak neurtzeko gailu bat erakusten da. Oinarria x₂ = A sin ωt bibrazioaren menpe dagoen gorputz bati irmoki lotuta dago norabide bertikalean. Malgukiaren konstantea eta amortiguazio-faktorea, hurrenez hurren, k eta β dira. m masa soilik bertikalki desplaza daitekeela suposatuta, aurkitu honen oszilazioen soluzio iraunkorra <em>oinarriarekiko</em>. Aurkitu oszilazio horien anplitudea eta desfasea, dagozkion hurbilketak eginez, kasu hauetan: i) ω₀ ≪ ω, ii) ω₀ ≫ ω (erabili pultsazio-erlazioa r = ω/ω₀). Gailu honen bi aplikazio dira <em>sismografoa</em>, oinarria Lurrari lotuta dagoenean, eta <em>azelerometroa</em>, orduan oinarria azelerazioa neurtu nahi den gorputzari lotuta dagoenean. Justifikatu aurreko kasuetako bakoitzari zein dagokion."
    },
    {
     "mota": "testua",
     "html": "[Irudia: m masako blokea goiko aldean; azpian, paraleloan, amortiguadore bat (β etiketatua) eta malguki bat (k etiketatua) &quot;Base&quot; etiketatutako plataforma horizontal batera lotzen dutenak. Eskuinean, x₁ koordenatuak (goranzko gezia) m blokearen posizioa adierazten du eta x₂ koordenatuak (goranzko gezia) oinarriaren posizioa adierazten du.]"
    }
   ]
  },
  {
   "id": "a38",
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
     "html": "Irudiko sistemak dimentsio bakarreko sistema oszilatzaile amortiguatu bortxatu bat adierazten du, non m masa oszilatzailearen gaineko kanpo-indarraren bultzada oinarriaren higiduratik datorren. Esan daiteke pisua indarraren bultzada ere badagoela, baina indar konstantea denez, ez du oszilazioetan eragin handiagorik oreka-posizioaren desplazamendua baino, eta horregatik ez dugu kontuan hartuko hemendik aurrera eta hipotesia egingo dugu x₁ desplazamendua oreka-posizio horretatik eta oinarriaren bibraziorik ezean (sistema inertziala) neurtzen dela. Era berean, x₂ desplazamendua bibrazioaren menpe egongo den gorputzaren pausagune-egoerarekiko neurtzen da."
    },
    {
     "mota": "testua",
     "html": "Problemaren alderdi garrantzitsu bat da m masa ez dagoela sistema inertzial batean pausagunean dagoen puntu finko batera lotuta, baizik eta malgukiaren (eta era berean amortiguadorearen) euste-puntua higidura azeleratuan dagoen gorputz bat dela. Indar elastikoa malgukiaren luzapenarekiko proportzionala denez, x₁ − x₂-rekiko proportzionala izango da. Era berean, amortiguazio-indarra abiadurarekiko proportzionala denez, kasu honetan abiadura erlatiboa ẋ₁ − ẋ₂ ere kontuan hartu beharko da. Idatz dezagun, beraz, m masaren higidura-ekuazioa behatzaile inertzial batekiko:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> m ẍ₁ = −k(x₁ − x₂) − 2mβ(ẋ₁ − ẋ₂) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "m ẍ₂ bi kideei kenduz eta x = x₁ − x₂ aldagai berri bat erabiliz, zeinak, konstante gehigarri bat salbu, m masaren posizio erlatiboa ematen digun oinarriarekiko, sinplifikatu ondoren honakoa geratuko zaigu:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> ẍ + 2βẋ + ω₀²x = −ẍ₂ = Aω² sin ωt </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "formalki higidura amortiguatu bortxatu bati dagokion ekuazioa, ω pultsazioko kanpo-indar bultzatzaile sinusoidalarekin eta ω₀ = √(k/m) higidura oszilatzaile askearen pultsazioarekin. Higidura iraunkorraren soluzioa ondo ezaguna da, teoriaren arabera, eta honelakoa da:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> x = D sin(ωt − δ) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "non D eta δ balio hauek dituzten:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> D = Aω² / √((ω₀² − ω²)² + 4β²ω²) = Ar² / √((1 − r²)² + 4β²r²/ω₀²)</code>"
    },
    {
     "mota": "testua",
     "html": "δ = tan⁻¹ [ 2βω / (ω₀² − ω²) ] = tan⁻¹ [ (2βr/ω₀) / (1 − r²) ] <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Azter ditzagun proposatutako bi kasuak:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "ω₀ ≪ ω → r ≫ 1. Hau malguki elastiko-konstante ahul batekin eta masa oszilatzaile handi batekin lor daiteke (sismografoetan gertatzen den bezala). Kasu honetan, higidura iraunkorraren anplitudearen eta desfase-angeluaren balioak hona jotzen dute:"
     ]
    },
    {
     "mota": "testua",
     "html": "<code></code><code> D = lim(r→∞) Ar² / √((1 − r²)² + 4β²r²/ω₀²) = A</code>"
    },
    {
     "mota": "testua",
     "html": "δ = lim(r→∞) tan⁻¹ [ (2βr/ω₀) / (1 − r²) ] = tan⁻¹(0⁻) = π <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Azken adierazpenaren xehetasuna garrantzitsua da, non tan⁻¹(0⁻) idazten dugun, tangentea 0ra hurbiltzen den arkoa dela adierazi nahi duena, baina alde negatibotik. m masaren oszilazioek oinarriarekiko sistema inertzialean honenak bezalako anplitude bera dute, baina fase-aurkakotasunean daude."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "ω₀ ≫ ω → r ≪ 1. Hau malguki elastiko-konstante handi batekin eta masa oszilatzaile txiki batekin lor daiteke (azelerometroetan gertatzen den bezala). Anplitudea eta desfasea, kasu honetan, balio hauek dituzte:"
     ]
    },
    {
     "mota": "testua",
     "html": "<code></code><code> D = lim(r→0) Ar² / √((1 − r²)² + 4β²r²/ω₀²) = Ar² = Aω²/ω₀²</code>"
    },
    {
     "mota": "testua",
     "html": "δ = lim(r→0) tan⁻¹ [ (2βr/ω₀) / (1 − r²) ] = tan⁻¹(0⁺) = 0 <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Aurreko atalean esandakoaren gauza bera, hemen tangentea 0ra alde positibotik hurbiltzen den arkoaz ari gara. m masaren oszilazioek oinarriarekiko anplitude askoz txikiagoa dute (r ≪ 1 baita) sistema inertzialean oinarriaren oszilazioen anplitudea baino, eta gainera honenekin fasean daude."
    },
    {
     "mota": "testua",
     "html": "ω₀ ≪ ω kasuan (r oso handia), m masaren oszilazioek oinarriarekiko honenak zehazki erreproduzitzen dituzte, baina π desfase batekin. Horrela, m masaren oinarriarekiko oszilazioen erregistroak, hau da, x-renak, aipatutako desfasearekin, lotuta dagoen gorputzaren bibrazioak ematen dizkigu. Hau malguki oso zurrunak ez direnekin (k txikia) eta masa oso handiekin lortzen da (<em>sismografoa</em>)."
    },
    {
     "mota": "testua",
     "html": "Bestalde, ω₀ ≫ ω kasuan (r oso txikia), m masaren oszilazioek oinarriarekiko lotuta dagoen gorputzaren (oinarriaren) azelerazioaren faseko neurketa bat ematen digute, Aω² = Dω₀² baita eta lehenengo gaia gorputz bibragarriaren azelerazioaren anplitudea delako. Hau malguki oso zurrunekin (k handia) eta masa oso txikiekin lortzen da (<em>azelerometroa</em>)."
    },
    {
     "mota": "testua",
     "html": "▶ Ekuazio berdinak lortzeko prozedura alternatibo bat problema higidura erlatibo batekotzat hartzea da. Sistema inertzial batekiko eta translazio-higidura duen (eta ez biraketa) beste sistema ez-inertzial batekiko azelerazioen arteko erlazioa idazten badugu:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> a = A_NI + a′   →   ma = F = mA_NI + ma′ = mA_NI + F′ </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "non a sistema inertzialarekiko azelerazioa den, a′ sistema erreferentzial higikorrekiko (oinarriarekin bat egiten duguna) azelerazioa eta A_NI sistema higikorraren azelerazioa. Gure kasuan higidura dimentsio batean gertatzen denez, higidura-ekuazioak erraz idazten dira, a = ẍ₁, a′ = ẍ₁ − ẍ₂ = ẍ eta A_NI = ẍ₂ = −Aω² sin ωt baitira. Higidura-ekuazioa sistema ez-inertzialetik honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> F′ = ma′ = F − mA_NI</code>"
    },
    {
     "mota": "testua",
     "html": "m ẍ = −kx − 2mβẋ − m ẍ₂ <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Bigarren gaiko lehenengo bi gaiak m masaren gainean eragiten duen indar erreala dira, malgukiaren luzapenetik eta m masaren oinarriarekiko abiadura erlatiboarekiko proportzionala den amortiguaziotik datorrena. ẍ₂-ren balioa ordezkatuz, aurretik bezalako higidura-ekuazio berdinera iristen gara:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> ẍ + 2βẋ + ω₀²x = −ẍ₂ = Aω² sin ωt </code><code></code>"
    }
   ]
  },
  {
   "id": "a39",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hiru alambre zuzen eta leun plano horizontal batean daude eta <em>soldatuta</em> elkarren artean 120°-ko angelu berdinak osatuz. Masa bereko <math display=\"inline\"><mi>m</mi></math> hiru konta alambreetan sartuta daude, bana bakoitzean, haien zehar marruskadurarik gabe irrista daitezkeelarik. Era berean, hiru kontak bi-bika <math display=\"inline\"><mi>k</mi></math> berreskuratze-konstante bereko malgukien bidez lotuta daude. Gainera, kalkuluak sinplifikatzeko, haien luzera naturalak nuluak direla suposatuko dugu. Aurkitu bibrazio-maiztasun propioak eta sistemak egiten dituen oszilazio txikiei dagozkien modu normalak."
    }
   ]
  },
  {
   "id": "a40",
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
     "html": "Irudian egoera adierazten da edozein unetan. <em>soldatuta</em> nabarmendutako terminoak iradoki nahi du alambreek partikulak O puntuaren beste aldera pasatzen uzten dituztela (hortik dator haien luzapena lerro etenetan zehar). Koordenatu orokortu gisa konta bakoitzaren desplazamenduak erabili ditugu alambre bakoitzaren zehar, O jatorritik abiatuta."
    },
    {
     "mota": "testua",
     "html": "[Irudia (74. or.): O-n gurutzatzen diren hiru alambre, 120°-ko angeluak osatuz, beren luzapenak lerro etenean dituztela. Alambre bakoitzean <math display=\"inline\"><mi>m</mi></math> masako konta bat, zeinaren O-tikako desplazamendua <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math>, <math display=\"inline\"><msub><mi>x</mi><mn>3</mn></msub></math> den. Hiru kontak bi-bika lotuta daude <math display=\"inline\"><mrow><mi>k</mi><mo>,</mo><msub><mi>l</mi><mn>1</mn></msub></mrow></math> ; <math display=\"inline\"><mrow><mi>k</mi><mo>,</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></math> ; <math display=\"inline\"><mrow><mi>k</mi><mo>,</mo><msub><mi>l</mi><mn>3</mn></msub></mrow></math> etiketatutako malgukien bidez.]"
    },
    {
     "mota": "testua",
     "html": "Sistemaren energia potentziala elastikoa soilik denez, hiru malgukien luzerak beharko ditugu haren ebaluaziorako. Hauek (hobeto, haien karratuak) kosinuaren teoremaren aplikazio soilaren bidez zehaztuko dira. Hortaz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>l</mi><mn>1</mn><mn>2</mn></msubsup><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>120</mn><msup><mi></mi><mo>∘</mo></msup><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>2</mn></msub></mrow></math> <math display=\"block\"><mrow><msubsup><mi>l</mi><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><msub><mi>x</mi><mn>3</mn></msub></mrow></math> <math display=\"block\"><mrow><msubsup><mi>l</mi><mn>3</mn><mn>2</mn></msubsup><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>3</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Energia zinetikoa eta potentziala, beraz, honako adierazpenek emango dituzte:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>3</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>l</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>l</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>l</mi><mn>3</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta dagozkion <strong>T</strong> eta <strong>V</strong> matrize elkartuak:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/138f48e86f977001.svg\" alt=\"upright(bold(T)) = m mat(delim: &quot;[&quot;, 1, 0, 0; 0, 1, 0; 0, 0, 1) #h(2em) upright(bold(V)) = k mat(delim: &quot;[&quot;, 2, 1 \\/ 2, 1 \\/ 2; 1 \\/ 2, 2, 1 \\/ 2; 1 \\/ 2, 1 \\/ 2, 2)\" style=\"width:21.537em;height:4.541em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Formulazio laburtua erabiltzen badugu, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒕</mi><mo>=</mo><mi>α</mi><mi mathvariant=\"bold-italic\">𝑻</mi></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>β</mi><mi mathvariant=\"bold-italic\">𝑽</mi></mrow></math> matrizeak definitzen, matrize osoak erabiliz &quot;balio propioak&quot; eta &quot;bektore propioak&quot; kalkulatuz lortuko genituzkeen emaitza berdinak lortuko ditugu. Gure kasuan:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/2173616ec3292986.svg\" alt=\"upright(bold(t)) = mat(delim: &quot;[&quot;, 1, 0, 0; 0, 1, 0; 0, 0, 1) #h(2em) upright(bold(v)) = mat(delim: &quot;[&quot;, 2, 1 \\/ 2, 1 \\/ 2; 1 \\/ 2, 2, 1 \\/ 2; 1 \\/ 2, 1 \\/ 2, 2) #h(2em) alpha = 1 \\/ m \\, med beta = 1 \\/ k\" style=\"width:30.562em;height:4.541em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Ebatzi dezagun, beraz, &quot;balio propioen&quot; ekuazioa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>−</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒕</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Horrela <math display=\"inline\"><mi>λ</mi></math>-ren hirugarren graduko ekuazio bat lortzen dugu, kasu honetan bereziki erraza ebazteko:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msup><mi>λ</mi><mn>3</mn></msup><mo>−</mo><mn>6</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>45</mn><mn>4</mn></mfrac><mi>λ</mi><mo>−</mo><mfrac><mn>27</mn><mn>4</mn></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>λ</mi><mrow><mn>2</mn><mo>,</mo><mn>3</mn></mrow></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>2</mn><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">(doble)</mtext></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>λ</mi></math> balio hauen eta pultsazio propioen arteko erlazioa honela ematen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>λ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>/</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msup><mi>ω</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>ω</mi><mrow><mn>2</mn><mo>,</mo><mn>3</mn></mrow></msub><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">(doble)</mtext></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Dagozkion bektore propioak balio propio bakoitzerako ekuazio orokorraren ebazpenetik lortuko dira. Hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>−</mo><msub><mi>λ</mi><mi>r</mi></msub><mi mathvariant=\"bold-italic\">𝒕</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mi>r</mi></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn></mrow></math> erro sinplerako ez dago arazorik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>21</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>31</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>11</mn></msub><mo>=</mo><msub><mi>a</mi><mn>21</mn></msub><mo>=</mo><msub><mi>a</mi><mn>31</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mrow><mn>2</mn><mo>,</mo><mn>3</mn></mrow></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>2</mn></mrow></math> erro bikoitzerako, aldiz, egoera ez da hain sinplea. Kasu honetan, ebazteko ekuazio-sistemak ekuazio baliagarri bakarra ematen dit, eta horregatik osagaietako bi arbitrarioki hartu ahal izango ditut:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mn>3</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mn>3</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mn>3</mn><mi>/</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>22</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>32</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>12</mn></msub><mo>+</mo><msub><mi>a</mi><mn>22</mn></msub><mo>+</mo><msub><mi>a</mi><mn>32</mn></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math> dela suposatu dugun. <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>3</mn></msub></mrow></math> bada, ondoriozko ekuazioa orain lortu dugunaren berdin-berdina da: <math display=\"inline\"><mrow><msub><mi>a</mi><mn>13</mn></msub><mo>+</mo><msub><mi>a</mi><mn>23</mn></msub><mo>+</mo><msub><mi>a</mi><mn>33</mn></msub><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Aplika diezaiogun <strong>T</strong> matrizearen peko normalizazio-baldintza <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>1</mn></msub></math> bektore propioari. Honek hona eramaten gaitu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̃</mo></mover><mn>1</mn></msub><mi mathvariant=\"bold-italic\">𝑻</mi><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>11</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>3</mn><mi>m</mi></mrow></msqrt></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>3</mn><mi>m</mi></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Erro bikoitzari dagozkion bektore propioak <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math> eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn></msub></math> bezala idatziko ditugu, non bakoitza <strong>T</strong> pean <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>1</mn></msub></math>-rekiko ortogonala izan behar den (teoriak esaten digun bezala), baina horrek ez du ziurtatzen elkarren arteko ortogonalitatea. Hala ere, <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math> eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn></msub></math> erro bikoitzari dagozkion bektore propioak badira, bien edozein konbinazio lineal ere izango da. Adibidez, <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math> behin betikoetako bat bezala finkatzen dugula suposatuta, <math display=\"inline\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn><mo>′</mo></msubsup><mo>=</mo><msub><mi>c</mi><mn>2</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub><mo>+</mo><msub><mi>c</mi><mn>3</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn></msub></mrow></math> eraiki dezakegu, balio propio endekatu horretarako bektore propioa izateaz gain, <strong>T</strong> matrizearen bidez <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math>-rekiko ortogonala ere dena. Beraz, lehen pauso bat goian idatzitako ekuazio baliagarri bakarra betetzen duten bi bektoreak <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math> eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn></msub></math> aukeratzea da. Ia arbitrarioki egin dezakegunez, lehenengoan <math display=\"inline\"><mrow><msub><mi>a</mi><mn>32</mn></msub><mo>=</mo><mn>0</mn></mrow></math> eta bigarrenean <math display=\"inline\"><mrow><msub><mi>a</mi><mn>23</mn></msub><mo>=</mo><mn>0</mn></mrow></math> egiten baditugu, honela idatzi ahal izango dugu:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>:</mo><msub><mi>a</mi><mn>32</mn></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>22</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>12</mn></msub></mrow></math>",
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>3</mn></msub><mo>:</mo><msub><mi>a</mi><mn>23</mn></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>33</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>13</mn></msub></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "horrela, lotutako bektore propioak hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/a7d5b03abd2e2403.svg\" alt=\"upright(bold(a))_2 = a_12 mat(delim: &quot;[&quot;, 1; - 1; 0) #h(2em) upright(bold(a))_3 = a_13 mat(delim: &quot;[&quot;, 1; 0; - 1)\" style=\"width:17.209em;height:4.526em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math> bektorea behin betikotzat hartuta, <strong>T</strong> pean <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math>-rekiko ortogonala izateko baldintza aldi berean betetzen duen <math display=\"inline\"><msubsup><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn><mo>′</mo></msubsup></math> bektorea honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn><mo>′</mo></msubsup><mo>=</mo><msub><mi>c</mi><mn>2</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub><mo>+</mo><msub><mi>c</mi><mn>3</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aplika diezaiegun lehenengo bi bektoreei, <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math> eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn></msub></math>, normalizazio-baldintza:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msub><mi mathvariant=\"bold-italic\">𝑻</mi><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>12</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mrow></math> <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̃</mo></mover><mn>3</mn></msub><mi mathvariant=\"bold-italic\">𝑻</mi><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn></msub><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>13</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta eska dezagun orain <math display=\"inline\"><msubsup><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn><mo>′</mo></msubsup></math> <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math>-rekiko ortogonala izatea, eta horrek <math display=\"inline\"><msub><mi>c</mi><mn>2</mn></msub></math> eta <math display=\"inline\"><msub><mi>c</mi><mn>3</mn></msub></math> arteko erlazio bat zehaztea ahalbidetuko digu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̃</mo></mover><mn>3</mn><mo>′</mo></msubsup><mi mathvariant=\"bold-italic\">𝑻</mi><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>c</mi><mn>2</mn></msub><mo>+</mo><msub><mi>c</mi><mn>3</mn></msub><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̃</mo></mover><mn>3</mn></msub><mi mathvariant=\"bold-italic\">𝑻</mi><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>c</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn><msub><mi>c</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Gainera, <math display=\"inline\"><msubsup><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn><mo>′</mo></msubsup></math> era berean normalizatuta egon behar denez, honakoa bete beharko da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̃</mo></mover><mn>3</mn><mo>′</mo></msubsup><mi mathvariant=\"bold-italic\">𝑻</mi><msubsup><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn><mo>′</mo></msubsup><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>c</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>c</mi><mn>3</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><msub><mi>c</mi><mn>3</mn></msub><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orain lortu dugun erlazioa, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn><msub><mi>c</mi><mn>2</mn></msub></mrow></math>, erabiliz, <math display=\"inline\"><msub><mi>c</mi><mn>2</mn></msub></math>-ren bigarren graduko ekuazio batera iritsiko gara, nahi diren propietateak betetzen dituzten <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>2</mn></msub><mo>,</mo><msub><mi>c</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> balio-bikote bi emango dizkiguna:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>3</mn><msubsup><mi>c</mi><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mi>±</mi><mfrac><msqrt><mn>3</mn></msqrt><mn>3</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>c</mi><mn>3</mn></msub><mo>=</mo><mi>∓</mi><mfrac><mrow><mn>2</mn><msqrt><mn>3</mn></msqrt></mrow><mn>3</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sinplifikatzeko, gu hemen bikoteetako bat soilik aukeratuko dugu (adibidez, lehenengo aukera), eta horrela maiztasun propioaren balio endekatuari dagozkion bektore propioak hauek izango dira (kalkuluak aurrezten ditugu):"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/b87624319a1c8e81.svg\" alt=\"upright(bold(a))_2 = 1 / sqrt(2 m) mat(delim: &quot;[&quot;, 1; - 1; 0) #h(2em) upright(bold(a))_3 = 1 / sqrt(6 m) mat(delim: &quot;[&quot;, - 1; - 1; 2)\" style=\"width:19.593em;height:4.526em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Azkenik, energia zinetikoaren eta potentzialaren matrizea aldi berean diagonalizatzen duen matrizea honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>6</mn><mi>m</mi></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>3</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mn>3</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    }
   ]
  },
  {
   "id": "a41",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>m</mi></math> masako pendulu sinple bat, euste finko batetik zintzilikatzean bere periodoa 1 s-koa dena, <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math> masako bloke batetik zintzilikatzen da, zeina lerro zuzen horizontal batean zehar marruskadurarik gabe mugi daitekeen penduluaren plano berean. Bloke hau pareta batera lotuta dago <math display=\"inline\"><mi>k</mi></math> berreskuratze-konstantedun malguki horizontal baten bidez. Bloke honen higiduraren periodoa pendulurik gabe 0.1 s-koa da. Aurkitu bi modu normalen periodoa. Deskribatu modu normalak. Oszilazio deskoplatuei dagozkienengandik asko aldatzen al dira? Zergatik? Kontuan har dezagun sistema modu geldoenean oszilatzen duela, eta penduluaren masaren anplitudea 100 mm-koa dela. Zein da blokeari dagokion anplitudea?"
    },
    {
     "mota": "testua",
     "html": "[Irudia: ardatz-sistema <math display=\"inline\"><mi>y</mi></math> ardatz bertikalarekin eta <math display=\"inline\"><mi>x</mi></math> ardatz horizontalarekin <math display=\"inline\"><mi>O</mi></math> jatorritik abiatuta. <math display=\"inline\"><mi>k</mi></math> konstantedun malguki horizontal bat ezkerreko paretari ainguratuta dago eta gainazal horizontal sartu baten gainean (mahaia) bermatuta dagoen <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math> masako bloke batera lotzen da. Blokearen desplazamendu horizontala <math display=\"inline\"><mi>x</mi></math> koordenatuarekin neurtzen da. Bloketik <math display=\"inline\"><mi>l</mi></math> luzerako pendulu bat zintzilikatzen da, <math display=\"inline\"><mi>θ</mi></math> angelua osatuz bertikalarekin, <math display=\"inline\"><mi>m</mi></math> masa bere muturrean duela.]"
    }
   ]
  },
  {
   "id": "a42",
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
     "html": "Sistema irudian erakusten den bezala oszilatzen du. Erlazio zuzen bat dago bi osziladoreen periodoen eta ezaugarri fisiko-geometrikoen artean bereiz. Pendulu sinple baten kasuan, <math display=\"inline\"><mrow><msubsup><mi>ω</mi><mi>p</mi><mn>2</mn></msubsup><mo>=</mo><mi>g</mi><mi>/</mi><mi>l</mi></mrow></math>. Penduluaren kasuan periodoa <math display=\"inline\"><mrow><msub><mi>τ</mi><mi>p</mi></msub><mo>=</mo><mn>1</mn></mrow></math> s balio duenez, honela idatzi ahal izango dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>g</mi><mi>l</mi></mfrac><mo>=</mo><msubsup><mi>ω</mi><mi>p</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup></mrow><msubsup><mi>τ</mi><mi>p</mi><mn>2</mn></msubsup></mfrac><mo>=</mo><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>τ</mi><mi>p</mi></msub><mo>=</mo><mn>1</mn></mrow></math> s penduluaren oszilazio askearen periodoa baita. Era berean, mahai gaineko blokearen kasuan <math display=\"inline\"><mrow><msubsup><mi>ω</mi><mi>b</mi><mn>2</mn></msubsup><mo>=</mo><mi>k</mi><mi>/</mi><mn>2</mn><mi>m</mi></mrow></math> betetzen da, eta horrela:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>=</mo><mn>2</mn><msubsup><mi>ω</mi><mi>b</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mn>8</mn><msup><mi>π</mi><mn>2</mn></msup></mrow><msubsup><mi>τ</mi><mi>b</mi><mn>2</mn></msubsup></mfrac><mo>=</mo><mn>800</mn><msup><mi>π</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>τ</mi><mi>b</mi></msub><mo>=</mo><mn>0.1</mn></mrow></math> s blokearen oszilazio askearen periodoa izanik."
    },
    {
     "mota": "testua",
     "html": "Izan bedi <math display=\"inline\"><mi>x</mi></math> mahai horizontalaren gainean blokearen posizioa adierazten duen koordenatua (gauzak errazteko, malgukiaren luzera propioa nulua dela suposatuko dugu; hau da, oreka-posizioan, blokearen ezkerreko aurpegia koordenatuen ardatz bertikalarekin bat datorrela, eta horregatik <math display=\"inline\"><mi>x</mi></math> malgukiaren luzapen garbia dela). Gainera, blokearen luzerak ez du eraginik problemaren garapenean. Bestalde, penduluaren inklinazioa bertikalarekiko <math display=\"inline\"><mi>θ</mi></math> angeluarekin neurtzen da (bai <math display=\"inline\"><mi>x</mi></math> bai <math display=\"inline\"><mi>θ</mi></math> oso txikiak izatearen baldintza betetzen dute, blokeak eta penduluak egiten dituzten higidurak oszilazio txiki gisa tratatzeko). Blokearen eta penduluaren masaren koordenatuak energia zinetikoa eta potentziala kalkulatzeko aukera ematen digute, jarraian ikusten dugun bezala:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/1e7a2f709e7e2c1e.svg\" alt=\"{x_b = x\\ y_b = 0 quad {dot(x)_b = dot(x)\\ dot(y)_b = 0 #h(2em) {x_p = x + l sin theta\\ y_p = - l cos theta quad {dot(x)_p = dot(x) + l dot(theta) cos theta\\ dot(y)_p = l dot(theta) sin theta\" style=\"width:16.567em;height:9.903em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "eta hemendik:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/1104f58eb265e2b0.svg\" alt=\"T = 1 / 2 m [3 dot(x)^2 + l^2 dot(theta)^2 + 2 l dot(x) dot(theta) cos theta] #h(2em) V = 1 / 2 k x^2 - m g l cos theta\" style=\"width:29.907em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Oszilazio txikien kasurako dagozkion hurbilketak eginez, eta energia potentzialaren gaian konstante gehigarri bat arbuiatuz, energia zinetikoaren eta potentzialaren balioak eta haien matrize elkartuak hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/e2533fd062401d39.svg\" alt=\"T = 1 / 2 m [3 dot(x)^2 + l^2 dot(theta)^2 + 2 l dot(x) dot(theta)] #h(2em) V = 1 / 2 k x^2 + 1 / 2 m g l theta^2\" style=\"width:26.814em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/bcd33fece144d0c7.svg\" alt=\"upright(bold(T)) = m mat(delim: &quot;[&quot;, 3, l; l, l^2) #h(2em) upright(bold(V)) = mat(delim: &quot;[&quot;, k, 0; 0, m g l)\" style=\"width:16.181em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Pultsazio propioak kalkulatzeko ekuazio sekularrak hona eramaten gaitu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi><mo>−</mo><mn>3</mn><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>m</mi><mi>l</mi><msup><mi>ω</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>m</mi><mi>l</mi><msup><mi>ω</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><mi>g</mi><mi>l</mi><mo>−</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><mi>m</mi><mi>l</mi><msup><mi>ω</mi><mn>4</mn></msup><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>m</mi><mi>g</mi><mo>+</mo><mi>k</mi><mi>l</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mi>g</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orain problemaren ebazpenaren hasieran lortutako erlazioak kontuan hartzen baditugu eta gaiz gai zatitzen baditugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>k</mi><mi>l</mi></mrow><mrow><mi>m</mi><mi>g</mi></mrow></mfrac><mo>=</mo><mn>200</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ekuazio sekularrera eramanda, hura sinplifikatzea ahalbidetzen diguna, eta horrela lortzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>203</mn><mo>±</mo><mn>199.02</mn></mrow><mn>4</mn></mfrac><mo>⋅</mo><mfrac><mi>g</mi><mi>l</mi></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">{</mo><msubsup><mi>ω</mi><mrow><mi>r</mi><mi>p</mi><mi>d</mi></mrow><mn>2</mn></msubsup><mo>≃</mo><mn>402.02</mn><msup><mi>π</mi><mn>2</mn></msup><mspace width=\"0.222em\"></mspace><msup><mi mathvariant=\"normal\">s</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msubsup><mi>ω</mi><mrow><mi>l</mi><mi>n</mi><mi>t</mi></mrow><mn>2</mn></msubsup><mo>≃</mo><mn>3.9799</mn><msup><mi>π</mi><mn>2</mn></msup><mspace width=\"0.222em\"></mspace><msup><mi mathvariant=\"normal\">s</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mi>τ</mi><mrow><mi>r</mi><mi>p</mi><mi>d</mi></mrow></msub><mo>≃</mo><mn>0.09975</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">s</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>τ</mi><mrow><mi>l</mi><mi>n</mi><mi>t</mi></mrow></msub><mo>≃</mo><mn>1.00252</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">s</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "non goian lortutako erlazioa erabili dugun jada: <math display=\"inline\"><mrow><mi>g</mi><mi>/</mi><mi>l</mi><mo>=</mo><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup></mrow></math>. Ikusten denez, bi modu normalen periodoak banakako oszilazio deskoplatuenengandik oso hurbil daude. Kalkula dezagun modu normalen anplitude-erlazioa formalismo orokorra erabiliz. Badakigu <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msub><mi>ω</mi><mi>r</mi></msub></mrow></math> bakoitzerako bete behar dela, <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mi>r</mi></msub></math> adierazitako modu normalari lotutako bektorea bada, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>−</mo><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup><mi mathvariant=\"bold-italic\">𝑻</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mi>r</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, eta horrela:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi><mo>−</mo><mn>3</mn><mi>m</mi><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>m</mi><mi>l</mi><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>m</mi><mi>l</mi><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><mi>g</mi><mi>l</mi><mo>−</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mn>1</mn><mi>r</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mn>2</mn><mi>r</mi></mrow></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Begi-bistakoa denez, anplitudeen arteko erlazioa honela idatzi ahal izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>a</mi><mrow><mn>2</mn><mi>r</mi></mrow></msub><msub><mi>a</mi><mrow><mn>1</mn><mi>r</mi></mrow></msub></mfrac><mo>=</mo><mfrac><mrow><mi>k</mi><mo>−</mo><mn>3</mn><mi>m</mi><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup></mrow><mrow><mi>m</mi><mi>l</mi><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Baina <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mi>g</mi><mi>/</mi><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup></mrow></math> eta <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>800</mn><mi>m</mi><msup><mi>π</mi><mn>2</mn></msup></mrow></math>, eta horrela:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>a</mi><mrow><mn>2</mn><mi>r</mi></mrow></msub><msub><mi>a</mi><mrow><mn>1</mn><mi>r</mi></mrow></msub></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>800</mn><msup><mi>π</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>g</mi><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>ω</mi><mi>r</mi></msub></math> balioak <math display=\"inline\"><msub><mi>ω</mi><mrow><mi>l</mi><mi>n</mi><mi>t</mi></mrow></msub></math> eta <math display=\"inline\"><msub><mi>ω</mi><mrow><mi>r</mi><mi>p</mi><mi>d</mi></mrow></msub></math> balioetarako ordezkatuz, hona iristen gara:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/7537f38d4c5b00a7.svg\" alt=\"(a_2 / a_1)_(r p d) = - 4.07 med upright(&quot;m&quot;)^(- 1) #h(2em) (a_2 / a_1)_(l n t) = 798 med upright(&quot;m&quot;)^(- 1)\" style=\"width:23.996em;height:3.369em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>a</mi><mrow><mn>1</mn><mi>r</mi></mrow></msub></math> anplitudea malgukiaren elongazio linealari dagokiola eta <math display=\"inline\"><msub><mi>a</mi><mrow><mn>2</mn><mi>r</mi></mrow></msub></math> anplitudea penduluaren elongazio angeluarari kontuan hartzen badugu, ikusten da modu geldoan (hau da, <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>r</mi></msub><mo>=</mo><msub><mi>ω</mi><mrow><mi>l</mi><mi>n</mi><mi>t</mi></mrow></msub></mrow></math> baliorako) penduluaren anplitude angeluarra radianetan blokearena baino askoz handiagoa dela, eta gainera fasean oszilatzen dutela, modu azkarrean, berriz, <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>r</mi></msub><mo>=</mo><msub><mi>ω</mi><mrow><mi>r</mi><mi>p</mi><mi>d</mi></mrow></msub></mrow></math> baliorako, penduluaren anplitude angeluarra radianetan blokearena baino lau aldiz ingurukoa da eta gainera fase-aurkakotasunean oszilatzen dute (zatidura negatiboa)."
    },
    {
     "mota": "testua",
     "html": "Penduluaren masa modu geldoan 100 mm-ko anplitudearekin oszilatzen ari bada, lehenengo radianetan adierazi behar dugu haren oszilazio-anplitude angeluarra jakiteko. Horretarako, datu gisa emandako periodoaren baliotik lortzen den penduluaren luzera erabili behar dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>τ</mi><mi>p</mi></msub><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><mo>=</mo><mn>1</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">s</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>l</mi><mo>=</mo><mfrac><mn>9.8</mn><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0.248</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">m</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, penduluaren oszilazio-anplitude angeluarra honakoa da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>0.1</mn><mn>0.248</mn></mfrac><mo>=</mo><mn>0.403</mn><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">rad</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta blokearen dagokion oszilazio-anplitudea modu geldo honetan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>0.403</mn><mrow><mn>798</mn><mspace width=\"0.222em\"></mspace><msup><mi mathvariant=\"normal\">m</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></mfrac><mo>=</mo><mn>5.05</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">m</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a43",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": ""
    },
    {
     "mota": "testua",
     "html": "<strong>99Feb03.</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>m</mi></math> masako eta <math display=\"inline\"><mi>L</mi></math> luzerako barra uniforme bat indar elastiko ezberdinen eraginpean dago. Alde batetik, bere ezkerreko muturra <math display=\"inline\"><mi>K</mi></math> konstantedun malguki espiral bati <em>soldatuta</em> dago, eta bestetik, bere eskuineko muturra artikulazio baten bidez <math display=\"inline\"><mi>k</mi></math> konstante bereko eta <math display=\"inline\"><mi>l</mi></math> luzera natural bereko (orekan malguki bakoitzaren luzerarekin bat datorrena) bi malguki linealekin lotuta dago. Bere oreka-posiziotik apur bat aldenduta, aurkitu barrak egiten dituen oszilazio txikien pultsazioa, gutxienez bi metodo ezberdin erabiliz. [<em>Oharra:</em> Kontuan har bedi grabitaterik ez duela eragiten]."
    }
   ]
  },
  {
   "id": "a44",
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
     "html": "Suposatuko dugu hasieran barra posizio horizontalean dagoela, malguki guztiak beren luzera naturalekin. Gainera, barraren luzera nahikoa handia da suposatzeko, oszilazio txikietarako, bi malguki linealei lotutako muturraren desplazamendua, irudiaren arabera, erabat bertikala dela. Era berean gogoratuko dugu, malguki linealetan deformazioa luzera-unitateetan neurtzen den bezala eta, beraz, <math display=\"inline\"><mi>k</mi></math> konstanteak indarra zati luzera (N/m) dimentsioak dituela, malguki espiralean deformazioa radianetan neurtzen dela eta <math display=\"inline\"><mi>K</mi></math> konstanteak energia (J) dimentsioak dituela."
    },
    {
     "mota": "testua",
     "html": "[Irudia: ezkerrean, pareta bertikal sartu bat zeinetik <math display=\"inline\"><mi>K</mi></math> konstantedun malguki espiral bat abiatzen den; horretatik, horizontalki, <math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mi>L</mi></mrow></math> etiketatutako barra uniformea abiatzen da. Bere eskuineko muturra <math display=\"inline\"><mi>k</mi></math> konstantedun bi malguki linealekin artikulatuta dago —bata gora, sabai sartuari ainguratuta, eta bestea behera, lur sartuari ainguratuta—. Barraren bira-angelua horizontalarekiko <math display=\"inline\"><mi>θ</mi></math> izendatzen da eskuineko mutur horretan.]"
    },
    {
     "mota": "testua",
     "html": "<em>Metodo bektoriala.</em>"
    },
    {
     "mota": "testua",
     "html": "Teoriaren arabera, indarren momentua (kasu honetan indar edo momentu berreskuratzaileak dira) momentu angeluarraren denbora-deribatua da. Momentuak guztiak paperaren planoarekiko perpendikularrak direnez, eskalarrekin lan egingo dugu bektoreen ordez. Gainera, barraren inertzia-momentua puntu finkoarekiko (malguki espiralarekiko soldadura) konstantea da, eta horrela higidura-ekuazioa honela idatziko da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>τ</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>J</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>I</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>K</mi><mi>θ</mi><mo>−</mo><mn>2</mn><mo>⋅</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>L</mi><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>K</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "2 faktorea noranzko berean bultzatzen duten bi malgukien presentziagatik da, bakoitzak emandako indar berreskuratzailea <math display=\"inline\"><mrow><mi>k</mi><mi>x</mi><mo>=</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> baliokoa izanik, eta haren momentua puntu finkoarekiko, beraz, <math display=\"inline\"><mrow><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>L</mi><mo>=</mo><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mi>θ</mi></mrow></math>. Inertzia-momentuak <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></math> balio du. Balio hau ordezkatuz, higiduraren ekuazio diferentziala formalki osziladore harmoniko bati dagokio:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>K</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><mrow><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mspace width=\"0.167em\"></mspace><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lotutako pultsazioa, beraz, honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mfrac><mrow><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>K</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><mrow><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac></msqrt><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">rad/s</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>Energiaren metodoa.</em>"
    },
    {
     "mota": "testua",
     "html": "Energia mekanikoa kontserbatzen da. Beraz, haren denbora-deribatua nulua izango da. Energia mekanikoa barraren puntu finkoaren inguruko biraketa-energia zinetikotik eta malgukietan gordetako energia potentzialetik dator:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>I</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>K</mi><msup><mi>θ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mi>θ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>K</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>θ</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Denborarekiko deribatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>E</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>K</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau da, aurreko ataleko ekuazioa berregiten digu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>K</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><mrow><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mspace width=\"0.167em\"></mspace><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>Lagrangeren metodoa.</em>"
    },
    {
     "mota": "testua",
     "html": "Funtzio lagrangearra <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> honela idatziko da (pauso guztien idazketa baztertu dugu):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>K</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>θ</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "horrela, <math display=\"inline\"><mi>θ</mi></math> aldagai bakarraren ekuazioa berriro honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">{</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"script\">ℒ</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mfrac><mrow><mi>∂</mi><mi mathvariant=\"script\">ℒ</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>K</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>K</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><mrow><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mspace width=\"0.167em\"></mspace><mi>θ</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></math>"
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>000</mn></mrow></math> kg masako ibilgailu bat profil sinusoidaleko bide ondulatu batetik zirkulatzen du, irudian adierazten den bezala. Suspentsioaren konstante elastikoa <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>2.5</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup></mrow></math> kg·s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>2</mn></mrow></msup></math> bada eta amortiguadoreek <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>3.53</mn></mrow></math> s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> amortiguazio-koefizientea ematen badiote, kalkulatu: a) ibilgailuaren oszilazioen anplitudea maximoa izango den <math display=\"inline\"><mi>V</mi></math> abiadura, b) oszilazioen anplitudea ibilgailuaren abiadura 50 km·h<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> denean. c) Erantzun galdera berberei ibilgailu berdin-berdin baina amortiguadore gabe baterako eta konparatu emaitzak. [<em>Oharra</em>. Egin bedi hipotesi sinplifikatzailea (eta eztabaidagarria) amortiguazioa <math display=\"inline\"><mi>m</mi></math> masaren abiadura <em>absolutuarekiko</em> proportzionala dela erreferentzial inertzialarekiko (eta ez ainguratze-puntuan jatorria duenarekiko, azeleratua baita)]."
    },
    {
     "mota": "testua",
     "html": "<strong>Enuntziatuaren figura</strong>"
    },
    {
     "mota": "testua",
     "html": "(bi marrazki): - Ezkerra: bidearen profil sinusoidala. Piko-bailarako anplitudea <strong>10 cm</strong> gisa akotatuta; uhin-luzera (espazio-periodoa) <strong>2.5 m</strong> gisa akotatuta. - Eskuina: osziladore bertikalaren eskema. <math display=\"inline\"><mi>m</mi></math> masa (barra horizontal gisa irudikatuta) malguki baten gainean. Ardatzak: <math display=\"inline\"><mi>x</mi></math> bertikala (gorantz) eta <math display=\"inline\"><mi>V</mi></math> horizontala. Akotazioak: <math display=\"inline\"><mi>x</mi></math> (masaren desplazamendua bere posizioarekiko), <math display=\"inline\"><mrow><msub><mi>l</mi><mn>0</mn></msub><mo>−</mo><mi>d</mi></mrow></math> (masa kargatuaren mailatik beherantz) eta <math display=\"inline\"><mi>h</mi></math> (malgukiaren beheko ainguratze-puntuan, bidearen kurba ondulatua jarraitzen duena)."
    }
   ]
  },
  {
   "id": "a46",
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
     "html": "Ezkerreko irudian bidearen profil ondulatua aurkezten da, ibilgailua <math display=\"inline\"><mi>V</mi></math> abiadurarekin mugitzean, <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><msub><mi>h</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math> motako kanpo-indar gisa jarduten duena, non <math display=\"inline\"><mrow><msub><mi>h</mi><mn>0</mn></msub><mo>=</mo><mn>0.05</mn></mrow></math> m eta <math display=\"inline\"><mi>ω</mi></math> ibilgailuaren <math display=\"inline\"><mi>V</mi></math> abiaduraren menpekoa diren. Profil ondulatu hau da amortiguadorearen ainguratzeak jarraitzen duena, eskuineko irudian adierazten den bezala, horrela deskribatutako irregulartasun sinusoidala ibilgailuaren gainerakoari transmitituz."
    },
    {
     "mota": "testua",
     "html": "Funtsean higidura bertikala interesatzen zaigu. Horrela, ibilgailuaren <math display=\"inline\"><mi>V</mi></math> abiadura horizontal berdinarekin mugitzen den erreferentzial bat erabiltzen dugu, ardatz bertikala ardatz erabilgarri bakar gisa duela, <math display=\"inline\"><mi>x</mi></math> deituko dioguna, baita ibilgailu kargatuarekin malgukiaren luzerarekiko haren deformazioari ere. Ibilgailua pausagunean eta gainazal horizontal batean dagoela suposatuta, malgukiaren hasierako uzkurdura bere luzera naturalarekiko <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi></mrow><mi>k</mi></mfrac></mrow></math> da, erraz ondoriozta daitekeenez (egia esan, uzkurdura hau <math display=\"inline\"><mi>d</mi></math> amortiguadore bakarreko ibilgailu bati dagokio, bi edo lau amortiguadore dituen ibilgailu baten kasuan, ohikoena dena, hasierako deformazioa idatzitakoaren erdia edo laurdena izango baita. Edonola ere, honek ez du eraginik problemaren ondorengo garapenean, eta horregatik horrela gordeko dugu). Malgukiaren <math display=\"inline\"><mi>l</mi></math> luzera eta haren <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow></math> deformazioa bere luzera naturalarekiko edozein unetan (aipatutako irudian adierazitakoa), beraz, honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/141a6030292c6731.svg\" alt=\"l = l_0 - d - h + x #h(2em) #h(2em) Delta l = l_0 - l = d + h_0 cos omega t - x\" style=\"width:29.238em;height:1.342em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Higiduraren ekuazio diferentziala <math display=\"inline\"><mi>x</mi></math> ardatzaren arabera honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>k</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>l</mi><mo>−</mo><mi>b</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>m</mi><mi>g</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>β</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><mi>k</mi><mi>m</mi></mfrac><mi>x</mi><mo>=</mo><mfrac><mrow><mi>k</mi><msub><mi>h</mi><mn>0</mn></msub></mrow><mi>m</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><mfrac><mi>b</mi><mi>m</mi></mfrac><mo>=</mo><mn>2</mn><mi>β</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mfrac><mrow><mi>k</mi><msub><mi>h</mi><mn>0</mn></msub></mrow><mi>m</mi></mfrac></mrow></math> diren. [Bigarren gaiko lehenengo gaia, <math display=\"inline\"><mrow><mi>k</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow></math>, indar elastikoaren benetako noranzkoa ematen digu, <math display=\"inline\"><mrow><mi>l</mi><mo>&lt;</mo><msub><mi>l</mi><mn>0</mn></msub></mrow></math> bada (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi><mo>&gt;</mo><mn>0</mn></mrow></math>), malgukia uzkurtuta baitago eta dilatatzeko joera du, <math display=\"inline\"><mi>m</mi></math> masa gorantz bultzatuz, hau da, <math display=\"inline\"><mi>x</mi></math> positiboetara. <math display=\"inline\"><mrow><mi>l</mi><mo>&gt;</mo><msub><mi>l</mi><mn>0</mn></msub></mrow></math> denean (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi><mo>&lt;</mo><mn>0</mn></mrow></math>), era berean ondo funtzionatzen du]. Higiduraren ekuazio diferentzialera modu zuzenago batean iritsi ahal izango ginatekeen sistema osziladore amortiguatu bortxatu bat dela kontuan hartzea besterik gabe, non indar bortxatzailea sinusoidal motakoa den, eta horregatik honelako higidura-ekuazio orokor bat dagokion:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>b</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>k</mi><mi>x</mi><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oszilazio askeen pultsazioa <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> eta azelerazio-anplitudea <math display=\"inline\"><mi>A</mi></math>, datuen funtzioan, hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mn>2.5</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup></mrow><msup><mn>10</mn><mn>3</mn></msup></mfrac></msqrt><mo>=</mo><mn>15.81</mn><mspace width=\"0.222em\"></mspace><msup><mi mathvariant=\"normal\">s</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mfrac><mrow><mi>k</mi><msub><mi>h</mi><mn>0</mn></msub></mrow><mi>m</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2.5</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mo>⋅</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow><msup><mn>10</mn><mn>3</mn></msup></mfrac><mo>=</mo><mn>12.5</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">m</mi><mo>⋅</mo><msup><mi mathvariant=\"normal\">s</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>a.</strong>"
    },
    {
     "mota": "testua",
     "html": "Ibilgailuaren abiadura <math display=\"inline\"><mi>V</mi></math> bada, bidearen oszilazio oso bati dagokiona, <math display=\"inline\"><mi>λ</mi></math>, ibiltzeko behar duen denbora indar bortxatzailearen <math display=\"inline\"><mi>τ</mi></math> periodoaren berdina izango da, eta hau, era berean, <math display=\"inline\"><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>ω</mi></mfrac></math>-ren berdina da. Beraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>τ</mi><mo>=</mo><mfrac><mi>λ</mi><mi>V</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>ω</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oszilazioen anplitudea maximoa izango da erresonantzia-pultsaziorako <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>R</mi></msub><mo>=</mo><msqrt><mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msup><mi>β</mi><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mn>15</mn></mrow></math> s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, orain lortu dugun <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> balioaren eta testuan emandako <math display=\"inline\"><mi>β</mi></math> datuaren arabera. Beraz, erresonantzia-pultsazioari dagokion ibilgailuaren abiadura honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mi>R</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>ω</mi><mi>R</mi></msub><mi>λ</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>15</mn><mo>⋅</mo><mn>2.5</mn></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mn>5.97</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">m</mi><mo>⋅</mo><msup><mi mathvariant=\"normal\">s</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>≃</mo><mn>21.5</mn><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">km/h</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Erresonantzia-anplitude maximoa emaitza hauek teorian lortutako adierazpenean ordezkatzea besterik gabe lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>D</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mfrac><mi>A</mi><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>ω</mi><mi>R</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msubsup><mi>ω</mi><mi>R</mi><mn>2</mn></msubsup><msup><mi>β</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mn>0.115</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">m</mi><mo>=</mo><mn>11.5</mn><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">cm</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>b.</strong>"
    },
    {
     "mota": "testua",
     "html": "Ibilgailuaren abiadura <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>50</mn></mrow></math> km/h <math display=\"inline\"><mrow><mo>=</mo><mn>13.89</mn></mrow></math> m·s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> denean, indar bortxatzailearen dagokion pultsazioa honakoa izango da: <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>V</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mn>34.91</mn></mrow></math> s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>. Oszilazioen anplitudea, beraz, honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mfrac><mi>A</mi><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>β</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mn>0.0125</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">m</mi><mo>=</mo><mn>1.25</mn><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">cm</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>c.</strong>"
    },
    {
     "mota": "testua",
     "html": "Amortiguaziorik ez badago, <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>ω</mi><mi>R</mi></msub><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><mn>15.81</mn></mrow></math> s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>. Anplitude-erresonantziarako abiadura orain honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mi>R</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>ω</mi><mi>R</mi></msub><mi>λ</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mn>6.29</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">m</mi><mo>⋅</mo><msup><mi mathvariant=\"normal\">s</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>≃</mo><mn>22.65</mn><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">km/h</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "anplitude maximoa infinitu bihurtuko den abiadura, <math display=\"inline\"><msub><mi>D</mi><mi mathvariant=\"normal\">max</mi></msub></math>-ren izendatzailea amortiguaziorik gabeko erresonantzian deuseztatzen baita: <math display=\"inline\"><mrow><msub><mi>D</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mi>∞</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>50</mn></mrow></math> km/h <math display=\"inline\"><mrow><mo>→</mo><mi>ω</mi><mo>=</mo><mn>34.91</mn></mrow></math> s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> baliorako, oszilazio-anplitudea honakoa izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mfrac><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mo>=</mo><mn>0.0129</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">m</mi><mo>=</mo><mn>1.29</mn><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">cm</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hurrengo irudian erresonantzian oszilazio-anplitudearen grafikoak erakusten dira amortiguazio nuluko eta problemaren testuan adierazitako kasuetarako."
    },
    {
     "mota": "testua",
     "html": "<strong>Ebazpenaren figura</strong>"
    },
    {
     "mota": "testua",
     "html": "(erresonantzia-grafikoa): <math display=\"inline\"><mi>D</mi></math> (cm) ardatzak ordenatuetan eta <math display=\"inline\"><mi>ω</mi></math> (s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>) abzisetan. Bi erresonantzia-kurba marrazten dira: - <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mi>∞</mi></math>-ra dibergitzen da <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><mn>15.81</mn></mrow></math> s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> balioan (asintota bertikal puntutua). - <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>3.53</mn></mrow></math> s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>: <math display=\"inline\"><mn>11.5</mn></math> cm balioko tontor finitua <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>R</mi></msub><mo>=</mo><mn>15</mn></mrow></math> s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> balioan kokatuta."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>D</mi></math> ardatzeko markak: <math display=\"inline\"><mn>11.5</mn></math>, <math display=\"inline\"><mn>5.0</mn></math>, <math display=\"inline\"><mn>1.29</mn></math>, <math display=\"inline\"><mn>1.25</mn></math>. <math display=\"inline\"><mi>ω</mi></math> ardatzeko markak: <math display=\"inline\"><mn>0</mn></math>, <math display=\"inline\"><mn>15</mn></math>, <math display=\"inline\"><mrow><mn>15.81</mn><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mn>34.91</mn></math>."
    }
   ]
  },
  {
   "id": "a47",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kontuan har ezazu <math display=\"inline\"><mi>l</mi></math> luzerako eta <math display=\"inline\"><mi>m</mi></math> masako bi pendulu sinplez osatutako sistema oszilatzaile bat, plano bertikal batean oszila dezaketenak. Bi masak masa gabeko malguki baten bidez lotuta daude, <math display=\"inline\"><mi>k</mi></math> konstanteduna eta bi penduluen zintzilikapen-puntuen arteko distantziaren berdina den luzera propioarekin. Aurkitu pultsazio propioak, modu normalak eta modu bakoitza bereiz aktibatzen duten hasierako baldintzak."
    }
   ]
  },
  {
   "id": "a48",
   "maila": 2,
   "izenburua": "Ebazpena (egileak ebatzita eta iruzkinduta)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Oszilazio txikien teoria orokorrak eskatzen digu energia potentziala zein zinetikoa koordenatu eta abiadura orokortuen forma koadratikoan idaztea. Hau da, oszilazio txikietarako dagozkion hurbilketak egiten ditugunean, bi funtzioak honela izatea:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/a0c3a8875a77491d.svg\" alt=\"T = 1 / 2 T_(i j) thin dot(q)_i dot(q)_j \\, #h(2em) V = 1 / 2 V_(i j) thin q_i q_j .\" style=\"width:16.535em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "[Irudia: L luzerako bi pendulu O_1 eta O_2 bi puntutatik zintzilik, sabai horizontal (sartu) batetik d distantzia batez bereizita. Ezkerreko penduluak theta angelua osatzen du bertikalarekin eta eskuinekoak phi angelua (L marraztuta hagaxka bakoitzean). Muturretako bi m masak malguki (zig-zag) batez lotuta daude, &quot;k, d&quot; etiketatua. z ardatza bertikala gorantz O_1-n.]"
    },
    {
     "mota": "testua",
     "html": "Irudian bi penduluen egoera erakusten da edozein unetan. Akoplamendu-malgukiaren luzera, oszilazio txikietarako, erabilitako hurbilketan, bi masen desplazamendu horizontalen arteko diferentziaren berdina dela har daiteke, zeren, egia esan, hau trazoekin marraztutako triangelu zuzenaren hipotenusaren berdina baita, kateto horizontalaren (aurretik aipatutako desplazamenduen arteko diferentzia) eta angelu auzokidearen kosinuaren arteko zatidura gisa lor daitekeena, eta aipatutako angelua hain da txikia non bere garapenean bere lehenengo gaia besterik ez genukeen beharko, hau da, unitatea, zailtasunik gabe egiaztatzen den bezala. Beraz, aurreko hurbilketa honetatik abiatuko gara."
    },
    {
     "mota": "testua",
     "html": "Kalkula ditzagun sistemaren energia zinetikoa eta potentziala, koordenatu orokortuak irudiko aldagai angeluarrak izanik: <math display=\"inline\"><mrow><msub><mi>q</mi><mn>1</mn></msub><mo>=</mo><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>q</mi><mn>2</mn></msub><mo>=</mo><mi>φ</mi></mrow></math>. Aurrerago, 0 azpiindizearekin adieraziko ditugu aldagaien balioak hasierako unean. Beraz, honela idatziko dugu:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/fa388f2484b7c815.svg\" alt=\"x_1 = L sin theta #h(2em) #h(2em) x_2 = d + L sin phi\" style=\"width:18.862em;height:1.313em\" loading=\"lazy\"> <img class=\"formula formula-d\" src=\"media/formulak/ede2d58f016108d9.svg\" alt=\"z_1 = - L cos theta #h(2em) #h(2em) z_2 = - L cos phi\" style=\"width:18.625em;height:1.313em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "horietatik berehala ondorioztatzen diren adierazpenak:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oszilazio txikietarako eta sinu eta kosinu funtzioetarako hurbilketa egokia erabiliz, adierazpen hauek ezaguna den formara murrizten dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"block\"><mrow><mi>V</mi><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><mi>L</mi><mo>+</mo><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>θ</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><mi>L</mi><mo>+</mo><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>φ</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>θ</mi><mi>φ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non energia potentzialaren gaian konstante gehigarri bat ez ikusi den, problemaren ebazpenean garrantzirik gabekoa dena. Energia zinetikoaren eta potentzialaren tentsoreak, beraz, hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/bb84e00cd65cdafd.svg\" alt=\"upright(bold(T)) = m L^2 mat(delim: &quot;[&quot;, 1, 0; 0, 1) #h(2em) #h(2em) upright(bold(V)) = L mat(delim: &quot;[&quot;, m g + k L, - k L; - k L, m g + k L)\" style=\"width:26.589em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "non energia potentzialetan akoplamendu bat ikusten den baina zinetikoetan ez."
    },
    {
     "mota": "testua",
     "html": "<strong>• Pultsazio propioak.</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒕</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> matrize berrien metodo laburtura joz, zeinen arabera pultsazio propioak determinante sekularrak emandako <math display=\"inline\"><mi>λ</mi></math>-ren ekuazioaren ebazpenetik lor daitezkeen, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>−</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒕</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>β</mi><mi mathvariant=\"bold-italic\">𝑽</mi></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒕</mi><mo>=</mo><mi>α</mi><mi mathvariant=\"bold-italic\">𝑻</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>/</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> izanik. <math display=\"inline\"><mi>α</mi></math> eta <math display=\"inline\"><mi>β</mi></math> konstanteak bi tentsoreak <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math> gehienez sinplifikatzeko beharrezkoak dira. Gure kasuan, hauek bezala aukeratu ditzakegu: <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>L</mi></mrow></math>, eta horrela <math display=\"inline\"><mrow><mi>β</mi><mi>/</mi><mi>α</mi><mo>=</mo><mi>m</mi><mi>L</mi></mrow></math>. Hemendik aurrera, beraz, tentsore hauekin lan egingo dugu:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/c476101456291887.svg\" alt=\"upright(bold(t)) = mat(delim: &quot;[&quot;, 1, 0; 0, 1) #h(2em) #h(2em) upright(bold(v)) = mat(delim: &quot;[&quot;, m g + k L, - k L; - k L, m g + k L)\" style=\"width:22.757em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Hortaz, pultsazio propioen kalkulu laburturako ekuazio karakteristikoa honela idatziko da:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/ff3d836e5904affb.svg\" alt=\"mat(delim: &quot;|&quot;, m g + k L - lambda, - k L; - k L, m g + k L - lambda) = 0 #h(0em) arrow.r #h(0em) lambda^2 - 2 \\( m g + k L \\) lambda + m g \\( m g + 2 k L \\) = 0\" style=\"width:38.100em;height:3.110em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "lotutako erroak hauek dituen ekuazioa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mi>m</mi><mi>g</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mfrac><mi>g</mi><mi>L</mi></mfrac></msqrt></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi><mi>g</mi><mo>+</mo><mn>2</mn><mi>k</mi><mi>L</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mrow><mfrac><mi>g</mi><mi>L</mi></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></mrow></msqrt></mtd></mtr></mtable></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>• Bektore modalak.</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math> matrizeen sinpletasuna dela eta, metodo laburtua erabiliko dugu berriro bektore modalak kalkulatzeko (teoriak esaten digunez, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math> tentsoreei dagozkien bektore propioak, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msub><mi>ω</mi><mi>r</mi></msub></mrow></math> balio propio ezberdinetarako, orain lortu ditugun <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mi>r</mi></msub></mrow></math> balio propioei dagozkien <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒕</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> tentsoreen balio propioei dagozkienekin bat datoz). Ekuazio-sistemarako forma matriziala erabiliz, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>−</mo><msub><mi>λ</mi><mi>r</mi></msub><mi mathvariant=\"bold-italic\">𝒕</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mi>r</mi></msub><mo>=</mo><mn>0</mn></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/daa88aee2e7858ab.svg\" alt=\"bullet #h(0em) lambda_1 = m g #h(2em) mat(delim: &quot;[&quot;, k L, - k L; - k L, k L) mat(delim: &quot;[&quot;, a_11; a_21) = mat(delim: &quot;[&quot;, 0; 0) #h(0em) arrow.r #h(0em) a_21 = a_11\" style=\"width:25.940em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/ab4bbfc040d6c08d.svg\" alt=\"bullet #h(0em) lambda_2 = m g + 2 k L #h(2em) mat(delim: &quot;[&quot;, - k L, - k L; - k L, - k L) mat(delim: &quot;[&quot;, a_12; a_22) = mat(delim: &quot;[&quot;, 0; 0) #h(0em) arrow.r #h(0em) a_22 = - a_12\" style=\"width:30.244em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "eta ortogonalitate-baldintzatik, orain forma matrizialean honela idatzita: <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">̃</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒕</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>α</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑰</mi></mrow></math>, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> zutabe-bektoreetan oinarrituta eraikitako tentsorea izanik:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/2932693d81e57d9d.svg\" alt=\"mat(delim: &quot;[&quot;, a_11, a_11; a_12, - a_12) mat(delim: &quot;[&quot;, 1, 0; 0, 1) mat(delim: &quot;[&quot;, a_11, a_12; a_11, - a_12) = frac(1, m L^2) mat(delim: &quot;[&quot;, 1, 0; 0, 1) #h(0em) arrow.r #h(0em) a_11 = 1 \\/ sqrt(2 m) thin L\\ a_12 = 1 \\/ sqrt(2 m) thin L\" style=\"width:31.042em;height:5.159em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Beraz, <math display=\"inline\"><msub><mi>ω</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>ω</mi><mn>2</mn></msub></math> pultsazio propiei dagozkien bektore propioak, zutabe-bektore gisa idatzita, hauek dira:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/1ce8ea617da25216.svg\" alt=\"upright(bold(a))_1 = frac(1, sqrt(2 m) thin L) mat(delim: &quot;[&quot;, 1; 1) #h(2em) #h(2em) upright(bold(a))_2 = frac(1, sqrt(2 m) thin L) mat(delim: &quot;[&quot;, 1; - 1)\" style=\"width:22.328em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "eta bektore modal hauetatik eraikitako <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> matrizea, zutabeka jarrita:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mn>1</mn><mrow><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>L</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>• Modu normalak.</strong>"
    },
    {
     "mota": "testua",
     "html": "Kontuan hartuko dugu sistema pausagunetik askatzen dela. Egoera hauetan, modu normalen adierazpena forma matrizial trinkoan honela idatziko da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>η</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">̃</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑻</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒒</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta gure kalkuluak modu horien anplitudeetara mugatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mn>0</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>10</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>20</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">̃</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑻</mi><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub></math> hasierako koordenatu orokortuak <math display=\"inline\"><msub><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>q</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mn>0</mn></msub></math> dituen zutabe-bektorea den. Gure kasuan, <math display=\"inline\"><mrow><msub><mi>q</mi><mn>10</mn></msub><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>q</mi><mn>20</mn></msub><mo>=</mo><msub><mi>φ</mi><mn>0</mn></msub></mrow></math>, eta horrela:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>10</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>20</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow><mrow><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>L</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>0</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>φ</mi><mn>0</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>L</mi></mrow><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>0</mn></msub><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, bibrazio-modu normalak honela idatzi ahal ditugu:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/0a6806402ed0a66d.svg\" alt=\"eta_1 = frac(sqrt(2 m) thin L, 2) \\( theta_0 + phi_0 \\) cos omega_1 t #h(2em) #h(2em) eta_2 = frac(sqrt(2 m) thin L, 2) \\( theta_0 - phi_0 \\) cos omega_2 t\" style=\"width:34.216em;height:2.859em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "koordenatu orokortuak, berriz, koordenatu normaletatik abiatuta, forma matrizialean honela idatziko dira: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒒</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mspace width=\"0.167em\"></mspace><mi>η</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>θ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>φ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>L</mi></mrow></mfrac><mo>⋅</mo><mfrac><mrow><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>L</mi></mrow><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eragiketak eginez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>θ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> <math display=\"block\"><mrow><mi>φ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oszilazio-modu normalen behaketatik, erraz ondoriozta daiteke zein izan behar diren bakoitza bereiz aktibatzera eramango nauten hasierako baldintzak:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "1 modua soilik aktibatuko da baldin: <math display=\"inline\"><mrow><mspace width=\"1.0em\"></mspace><msub><mi>φ</mi><mn>0</mn></msub><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>",
      "2 modua soilik aktibatuko da baldin: <math display=\"inline\"><mrow><mspace width=\"1.0em\"></mspace><msub><mi>φ</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>"
     ]
    }
   ]
  }
 ]
};
