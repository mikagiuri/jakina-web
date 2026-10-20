/* JAKINA · kapitulua «B6.7 - Deribatu partzialetako ekuazioak (9. gaia)» (03mm_05edp), desde edicion2/kapituluak/03mm_05edp/03mm_05edp.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["03mm_05edp"] = {
 "gakoa": "03mm_05edp",
 "titulua": "JAKINA - B6 - Metodo matematikoak - 7/9",
 "azala": "B6.7 - Deribatu partzialetako ekuazioak (9. gaia)",
 "azpititulua": "I. aroa - Tresnak",
 "iturburua": "kapituluak/03mm_05edp/03mm_05edp.typ",
 "sarrera": [
  {
   "mota": "iturria",
   "proiektua": "IMG_2026_07_30_02_32_34S_CNmet2_p0_y_p1.jpg",
   "xehetasuna": "CNmet2, 0. orrialdea (zatiki 1, etiketa kanonikoa CN MET2 p0): EDPen sailkapena eta Laplace-ren operadorea; rótulurik gabeko hasierako orria, edizio kritiko literala",
   "hizkuntza": "en/es"
  },
  {
   "mota": "iturria",
   "proiektua": "AAA_TEXES_metodo_matematikoak",
   "xehetasuna": "Erabiltzailearen Metodo Matematikoak apunteak (2014-2016, %100 bereak): funtzio-espazioak, Fourier-en serieak (ariketa ebatziak), Green-en funtzioa. Ariketa-bankuak fitxatuta: METODO MATEMATIKOAK/ (31 azterketa), met mat/ (375 argazki), AYO (apunte EU), metodos_estabilidad (8. kap.aren osagarria) — CATALOGO_B6_METODOS.md",
   "hizkuntza": "eu"
  },
  {
   "mota": "iturria",
   "proiektua": "METODO MATEMATIKOAK",
   "xehetasuna": "Metodo Matematikoak irakasgaiaren pakete osoa (UPV/EHU 2010-2014): programa ofiziala, gai bakoitzeko ariketa-orriak, azterketetako bildumak eta 2013-05-24ko azterketa osoa",
   "hizkuntza": "eu"
  },
  {
   "mota": "iturria",
   "proiektua": "CG-06 (carpeta_grande)",
   "xehetasuna": "Erabiltzailearen Metodo Matematikoak koadernoa (233 argazki): 2. gaia (EDPak) da EDP-teoriaren bizkarrezurra — sarrera, sailkapena, mugalde-baldintzak, aldagai-banantzea eta azterketa-ebazpen osoak",
   "hizkuntza": "eu"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Deribatu partzialetako ekuazioak",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kapitulu honen bizkarrezurra erabiltzailearen beraren <strong>Metodo Matematikoak</strong> koadernoa da (CG-06, &quot;2. gaia: Deribatu partzialetako ekuazioak&quot;): hango sarrera, sailkapena, mugalde-baldintzen taula eta azterketa-problemen ebazpen osoak hemen daude birlanduta eta garatuta. Honekin, moduluko hutsuneetako bat (EDPen teoria) itxita geratzen da; ariketa-oinarria hurrengo bildumako EDP atalak dira."
      }
     ]
    }
   ]
  },
  {
   "id": "a2",
   "maila": 1,
   "izenburua": "Zer aldatzen da deribatu partzialetara pasatzean?",
   "blokeak": [
    {
     "mota": "testua",
     "html": "EDO batean ezezaguna aldagai bakarreko funtzioa zen; EDP batean, askorena: <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>... Koadernoko sarrerak muina bi ideiatan biltzen du:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Aldagai bat deribaturik gabe badago, EDPa EDO bat da</strong> — baina integrazio-konstanteak beste aldagaiaren <strong>funtzio arbitrarioak</strong> dira: <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mn>3</mn><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> ekuazioak (faktore integratzailea <math display=\"inline\"><msup><mi>x</mi><mn>3</mn></msup></math>) <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>5</mn><mo>+</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><msup><mi>x</mi><mn>3</mn></msup></mrow></math> ematen du, <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> edozein.",
      "<strong>Baldintza bakoitzak funtzio oso bat zehaztu behar du.</strong> EDO batek konstante bakoitzeko zenbaki bat behar zuen; EDP batek kurba oso baten gaineko balioak. Koadernoak kontraadibidez frogatzen du: <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mn>2</mn><mi>y</mi><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math> ekuazioarentzat <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math> baldintza ez da nahikoa soluzioa finkatzeko (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math> eta beste hainbat, denak zilegi); puntu bakar bateko balioa are gutxiago."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Koadernotik: fisikako EDPen zooa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabiltzailearen <code>met mat</code> orrietako panoramika (&quot;DPE&quot; orria): fisikako EDP nagusiak, denak bigarren ordenako lau eredu berak — <strong>uhin-ekuazioa</strong>  <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math>  (hiperbolikoa), <strong>difusio/bero-ekuazioa</strong>  <math display=\"inline\"><mrow><mi>k</mi><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><msub><mi>u</mi><mi>t</mi></msub></mrow></math>  (parabolikoa), <strong>Laplacerena</strong>  <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> eta <strong>Poissonena</strong> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  (eliptikoak), eta <strong>Schrödingerrena</strong> <math display=\"inline\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>+</mo><mi>V</mi><mi>u</mi><mo>=</mo><mi>…</mi></mrow></math>  (difusio-itxurakoa, denbora irudikariarekin). Orri berak bereizten ditu <strong>hastapen- baldintzak</strong>  (H.B.: <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, denboran) eta <strong>mugalde- baldintzak</strong>  (M.B.: <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, espazioan) — eta problemak sailkatzeko lau galderak: ordena, aldagai independente kopurua, koefizienteak konstanteak diren, eta lineala den."
      }
     ]
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Bigarren ordenako EDPen sailkapena",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bigarren ordenako EDP kuasilineal orokorra bi aldagaitan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mi>B</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>C</mi><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">beheragoko ordenak</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Kurba karakteristikoak</strong> — informazioa garraiatzen duten kurbak — ekuazio honek ematen ditu (koadernoko formula):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>B</mi><mo>±</mo><msqrt><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>A</mi><mi>C</mi></mrow></msqrt></mrow><mrow><mn>2</mn><mi>A</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta erroaren barruko diskriminatzaileak sailkatzen du ekuazioa:"
    },
    {
     "mota": "taula-kutxa",
     "oina": "Sailkapena. Koefizienteak aldakorrak badira, ekuazio berak mota\n   desberdinak izan ditzake eremuka (koadernoko oharra) — hori da\n   bildumako &quot;sailkatu&quot; ariketen puntua.",
     "blokeak": [
      {
       "mota": "testua",
       "html": "table( columns: (auto, auto, auto, auto), align: (left, center, left, left), table.header([<strong>Mota</strong>], [<strong>Diskriminatzailea</strong>], [<strong>Karakteristikak</strong>], [<strong>Eredua</strong>]), [Hiperbolikoa], [<math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>&gt;</mo><mn>4</mn><mi>A</mi><mi>C</mi></mrow></math>], [bi familia erreal], [uhin-ekuazioa <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>], [Parabolikoa], [<math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>=</mo><mn>4</mn><mi>A</mi><mi>C</mi></mrow></math>], [familia bakarra], [bero-ekuazioa (<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mi>t</mi></msub></mrow></math> motakoak)], [Eliptikoa], [<math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>&lt;</mo><mn>4</mn><mi>A</mi><mi>C</mi></mrow></math>], [ez dago errealik], [Laplace <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>], )"
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
       "html": "Koadernoko biak: <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> ekuazioan <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>C</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>A</mi><mi>C</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, <strong>eliptikoa</strong>. Uhin-ekuazioan <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>A</mi><mi>C</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <strong>hiperbolikoa</strong>."
      }
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Mugalde-baldintzak: zeini zer eskatu",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Koadernoko taula, hitzez hitz baliotsua — problema ondo planteatuta egoteko, ekuazio-motak agintzen du zein baldintza-mota eta zein mugalde-mota behar diren:"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Dirichlet</strong>: <math display=\"inline\"><mi>u</mi></math>-ren balioa mugaldean (adib. tenperatura finkoa gainazalean).",
        "<strong>Neumann</strong>: <math display=\"inline\"><mrow><mi>∂</mi><mi>u</mi><mi>/</mi><mi>∂</mi><mi>n</mi></mrow></math>-ren balioa mugaldean (adib. fluxua; isolatua bada, nulua).",
        "<strong>Cauchy</strong>: biak batera (<math display=\"inline\"><mi>u</mi></math> ETA <math display=\"inline\"><mrow><mi>∂</mi><mi>u</mi><mi>/</mi><mi>∂</mi><mi>n</mi></mrow></math>) — hasierako baldintzen analogoa."
       ]
      }
     ]
    },
    {
     "mota": "taula-kutxa",
     "oina": "Koadernoko taula: problema ondo planteatuak. Uhin-ekuazioak\n      (<math display=\"inline\"><mi>t</mi></math>-n irekia) posizioa ETA abiadura behar ditu hasieran;\n   bero-ekuazioak hasierako tenperatura bakarrik; Laplacerenak\n   mugalde itxi osoko balioak.",
     "blokeak": [
      {
       "mota": "testua",
       "html": "table( columns: 1, align: (left, left, left), table.header([<strong>Ekuazio-mota</strong>], [<strong>Mugaldea</strong>], [<strong>Baldintza</strong>]), [Hiperbolikoa], [irekia], [Cauchy], [Parabolikoa], [irekia], [Dirichlet edo Neumann], [Eliptikoa], [itxia], [Dirichlet edo Neumann], )"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Koadernoak ohar zorrotz bat gehitzen du: mugalde-baldintzek kurba karakteristiko bat <strong>behin baino gehiagotan</strong> mozten badute, kontuz — informazio bera bi bider ematen ari gara, eta bateragarria izan behar du (bildumako karakteristiken 3. ariketa, baldintzak berezko lerroetan zehar emanda daudenekoa, horren adibidea da)."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Karakteristiken metodoa: d&#x27;Alembert",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Uhin-ekuazioarentzat, <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, karakteristikak <math display=\"inline\"><mrow><mi>x</mi><mo>±</mo><mi>c</mi><mi>t</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte</mtext></mrow></mrow></math> zuzenak dira, eta aldagai horietara pasatuta soluzio orokorra bi uhin bidaiariren batura da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "— bata eskuinerantz, bestea ezkerrerantz, biak <math display=\"inline\"><mi>c</mi></math> abiaduraz. Hasierako baldintzekin (<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>) d&#x27;Alemberten formula ateratzen da: <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> — pultsu bat bi erditan banatzen da, aurkako noranzkoetan (bildumako karakteristiken 1. ariketa hori marraztea da)."
    },
    {
     "mota": "irudia",
     "oina": "Karakteristikak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  planoan: hasierako pultsuaren\n   informazioa <math display=\"inline\"><mrow><mi>x</mi><mo>±</mo><mi>c</mi><mi>t</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte</mtext></mrow></mrow></math> zuzenetan zehar bakarrik\n   hedatzen da. <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> unean bi kopia daude (anplitude erdikoak),\n   karakteristikek mugatutako eremuetan — kausalitatearen irudi\n   zehatza.",
     "src": "media/irudiak/c7234f86ec84be72.svg",
     "zabalera": 304
    },
    {
     "mota": "testua",
     "html": "Ekuazio orokorragoetan bidea bera da: karakteristikak kalkulatu (goiko <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi></mrow></math> formula), haiek koordenatu berritzat hartu, eta ekuazioa forma kanonikora laburtu — bildumako 3. ariketa (soluzio orokorra <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mn>4</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>5</mn></mrow></msup><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> duena) prozesu osoaren adibide gidatua da."
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Aldagaien banantzea: errezeta osoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Metodo nagusia problema linealetan, koadernoak behin eta berriro darabilena. Pausoak:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Baldintzak homogeneizatu</strong> behar badira: <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>g</mi></mrow></math> aldaketa (bildumako &quot;Koadernotik&quot; kutxa).",
      "<strong>Banandu</strong>: <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  (edo <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, geometriaren arabera); ekuazioa bi aldetan banatu eta konstante bereizlea atera: <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mi>/</mi><mi>X</mi><mo>=</mo><mover><mi>T</mi><mo accent=\"true\">̇</mo></mover><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msup><mi>λ</mi><mn>2</mn></msup></mrow></math>.",
      "<strong>Espazio-zatia S-L problema da</strong>: mugalde-baldintza homogeneoek balio propioak diskretizatzen dituzte (<math display=\"inline\"><msub><mi>λ</mi><mi>n</mi></msub></math>) eta funtzio propio ortogonalak ematen (<math display=\"inline\"><mi mathvariant=\"normal\">sin</mi></math>, <math display=\"inline\"><mi mathvariant=\"normal\">cos</mi></math>, <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math>, <math display=\"inline\"><msub><mi>P</mi><mi>l</mi></msub></math>... — geometriak aukeratzen du familia).",
      "<strong>Gainezarri</strong>: <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo>∑</mo><msub><mi>c</mi><mi>n</mi></msub><msub><mi>X</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>T</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
      "<strong>Koefizienteak ortogonaltasunez</strong>: geratzen den baldintza (hasierakoa, edo mugalde ez-homogeneoa) funtzio propioen oinarrian garatu, haztapen egokiarekin."
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
       "html": "Eredu kanonikoa: hagaska, muturrak 0 gradutan, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Banantzeak <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi></mrow></math> ematen du, eta <math display=\"inline\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>a</mi><mn>2</mn></msup><msubsup><mi>λ</mi><mi>n</mi><mn>2</mn></msubsup><mi>t</mi></mrow></msup></mrow></math>: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi><mi>/</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> — Fourierren sinu-seriea, modu bakoitza bere erritmoan iraungiz (goi-maiztasunak azkarrago: beroak leundu egiten du). Uhin- ekuazioan gauza bera baina <math display=\"inline\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><msub><mi>A</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi></mrow></math>: moduek ez dute iraungitzen, oszilatu egiten dute."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Soka/hagaska baten lehen hiru modu normalak,\n      <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: banantzeak edozein soluzio modu hauen\n   gainezarmen gisa idazten du. Bero-ekuazioan modu bakoitza\n      <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>a</mi><mn>2</mn></msup><msubsup><mi>λ</mi><mi>n</mi><mn>2</mn></msubsup><mi>t</mi></mrow></msup></math> faktoreaz iraungitzen da; uhinean,\n      <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>n</mi></msub><mo>=</mo><mi>c</mi><msub><mi>λ</mi><mi>n</mi></msub></mrow></math> maiztasunaz oszilatzen.",
     "src": "media/irudiak/bdc460fa8bc282b2.svg",
     "zabalera": 313
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Adibide ebatzia (koadernotik): zilindroa, iturria eta Robin baldintza",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bildumako 2003-Irailako azterketa-problema, koadernoan osorik ebatzita dagoena: <math display=\"inline\"><mi>R</mi></math> erradioko zilindro infinitua,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>T</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>∇</mi><mn>2</mn></msup><mi>T</mi><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>T</mi><mo>+</mo><mi>α</mi><mfrac><mrow><mi>∂</mi><mi>T</mi></mrow><mrow><mi>∂</mi><mi>r</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>r</mi><mo>=</mo><mi>R</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(iturri homogeneoa <math display=\"inline\"><msup><mi>b</mi><mn>2</mn></msup></math>, eta <strong>Robin</strong> motako igorpen-baldintza — Dirichlet eta Neumannen konbinazioa)."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Koadernoaren bidea:"
      },
      {
       "mota": "testua",
       "html": "<strong>1. Zati homogeneoa banandu.</strong>  <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>Z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eginda, simetria axialarekin <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>∂</mi><mi>r</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><msub><mi>∂</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mfrac><msup><mi>Z</mi><mo>′</mo></msup><mrow><msup><mi>a</mi><mn>2</mn></msup><mi>Z</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>r</mi><mi mathvariant=\"script\">ℛ</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><msup><mi mathvariant=\"script\">ℛ</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>−</mi><msup><mi>m</mi><mn>2</mn></msup><mtext mathvariant=\"normal\">  </mtext><mo>⇒</mo><mtext mathvariant=\"normal\">  </mtext><msup><mi>Z</mi><mo>′</mo></msup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>m</mi><mn>2</mn></msup><mi>Z</mi><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msup><mi>r</mi><mn>2</mn></msup><msup><mi mathvariant=\"script\">ℛ</mi><mo>″</mo></msup><mo>+</mo><mi>r</mi><msup><mi mathvariant=\"script\">ℛ</mi><mo>′</mo></msup><mo>+</mo><msup><mi>m</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup><mi mathvariant=\"script\">ℛ</mi><mo>=</mo><mn>0</mn></mrow></math> — bigarrena Besselen ekuazioa: <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℛ</mi><mo>=</mo><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  (eta <math display=\"inline\"><msub><mi>Y</mi><mn>0</mn></msub></math>, zentroan lehertzen delako baztertua — koadernoan &quot;ez da agertuko, ez esplotatzeko&quot;)."
      },
      {
       "mota": "testua",
       "html": "<strong>2. Balio propioak Robin baldintzatik.</strong>  <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>R</mi></mrow></math>-n baldintza ezarrita, <math display=\"inline\"><mrow><msubsup><mi>J</mi><mn>0</mn><mo>′</mo></msubsup><mo>=</mo><mi>−</mi><msub><mi>J</mi><mn>1</mn></msub></mrow></math> erabiliz (koadernoak <math display=\"inline\"><mrow><msubsup><mi>J</mi><mi>n</mi><mo>′</mo></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>J</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>J</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> orokorretik ateratzen du): <math display=\"block\"><mrow><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>α</mi><mi>m</mi><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — ekuazio transzendentala: <math display=\"inline\"><msub><mi>m</mi><mi>n</mi></msub></math> balio propioen familia diskretua (konparatu S-L orriko <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><msqrt><mi>λ</mi></msqrt><mo>=</mo><mn>2</mn><msqrt><mi>λ</mi></msqrt></mrow></math>-rekin: egitura bera)."
      },
      {
       "mota": "testua",
       "html": "<strong>3. Iturria funtzio propioen serie gisa garatu.</strong> <math display=\"inline\"><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><mo>∑</mo><msub><mi>C</mi><mi>n</mi></msub><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, ortogonaltasunez (<math display=\"inline\"><mi>r</mi></math> haztapena) eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>m</mi><mi>n</mi></msub><mi>r</mi></mrow></math> aldaketaz, <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>x</mi><msub><mi>J</mi><mn>0</mn></msub></mrow></math>  erabiliz: <math display=\"block\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msup><mi>b</mi><mn>2</mn></msup><mfrac><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>R</mi></msubsup><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>r</mi><mi>d</mi><mi>r</mi></mrow><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>R</mi></msubsup><msubsup><mi>J</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>r</mi><mi>d</mi><mi>r</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>b</mi><mn>2</mn></msup></mrow><mrow><msub><mi>m</mi><mi>n</mi></msub><mi>R</mi></mrow></mfrac><mfrac><mrow><msub><mi>J</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>n</mi></msub><mi>R</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><msubsup><mi>J</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>n</mi></msub><mi>R</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msubsup><mi>J</mi><mn>1</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>n</mi></msub><mi>R</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math> (Robin baldintzarekin normalizazio-integralak bi gai gordetzen ditu — Dirichlet hutsean <math display=\"inline\"><msubsup><mi>J</mi><mn>1</mn><mn>2</mn></msubsup></math> bakarrik geratzen zen, gimnastaren probleman bezala)."
      },
      {
       "mota": "testua",
       "html": "<strong>4. Modu bakoitzeko EDO ez-homogeneoa askatu.</strong> <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mo>∑</mo><msub><mi>T</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> sartuta, <math display=\"inline\"><mrow><msubsup><mi>T</mi><mi>n</mi><mo>′</mo></msubsup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msubsup><mi>m</mi><mi>n</mi><mn>2</mn></msubsup><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mi>n</mi></msub></mrow></math>, hasieran <math display=\"inline\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>C</mi><mi>n</mi></msub><mrow><msup><mi>a</mi><mn>2</mn></msup><msubsup><mi>m</mi><mi>n</mi><mn>2</mn></msubsup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>a</mi><mn>2</mn></msup><msubsup><mi>m</mi><mi>n</mi><mn>2</mn></msubsup><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — tenperatura zerotik igo eta banaketa egonkorrera doa (<math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>: iturriaren eta igorpenaren oreka)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eskema honek berak ebazten ditu bildumako mintz-problemak (gimnastarena barne — han uhin-ekuazioa zen eta <math display=\"inline\"><msub><mi>T</mi><mi>n</mi></msub></math>-ak oszilatzaileak) eta esferakoak (han <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math>-ren ordez Legendre edo ordena erdi-osoko Besselak agertzen dira, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>r</mi><mi>T</mi></mrow></math> edo <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><msup><mi>r</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>S</mi></mrow></math> aldaketekin — bildumako iradokizunak). Falta den teoria-atal bakarra transformazio integralen bidezko ebazpena da (programako 9. gaiaren azken zatia): hor Fourierren seriea Fourierren <strong>transformatua</strong> bihurtzen da eremu infinituetan."
      }
     ]
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Ariketak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kapitulu honen ariketa-oinarria bildumako hiru atal hauek dira: <strong>Aldagaien banantzea</strong>  (12 + 14 azterketetakoak), <strong>Karakteristikak</strong> (9) eta azterketa osoko 1.–3. problemak. Ibilbide gomendatua, koadernoaren ordenari jarraituz: sailkapen-ariketak lehenik (karakteristiken 5.a), gero d&#x27;Alembert (1.a), gero banantze sinpleak (hagaska: 2005-Otsaila), gero Bessel (mintzak eta zilindroak) eta azkenik esferak (Legendre)."
    }
   ]
  },
  {
   "id": "a9",
   "maila": 1,
   "izenburua": "EDP-en sailkapena eta Laplace-ren operadorea koordenatu-sistemetan",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Deribatu partzialetako ekuazioak diskriminantearen zeinuaren arabera sailkatzen dira (eliptikoak, hiperbolikoak, parabolikoak), eredu fisikoen zerrenda batekin; eta Laplace-ren operadorea koordenatu kartesiar, polar, zilindriko eta esferikoetan."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "EDP-en sailkapena",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Sailkapena diskriminantearen arabera",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Eliptikoak</strong> (<math display=\"inline\"><mrow><mi>D</mi><mo>&lt;</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">Laplace</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">Helmholtz</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mi>k</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">Poisson</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>u</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">Schrödinger</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>",
        "<strong>Hiperbolikoak</strong> (<math display=\"inline\"><mrow><mi>D</mi><mo>&gt;</mo><mn>0</mn></mrow></math>): uhin-ekuazioak, adib. <math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mi>o</mi><mi>k</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mi>b</mi><mi>i</mi><mi>b</mi><mi>r</mi><mi>a</mi><mi>k</mi><mi>o</mi><mi>r</mi><mi>r</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mn>1</mn><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">uhina dimentsio handiagoetan</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> marruskadura (<math display=\"inline\"><mrow><mi>−</mi><mi>h</mi><msub><mi>u</mi><mi>t</mi></msub></mrow></math>), indar-behartua (<math display=\"inline\"><mrow><mi>+</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) eta transmisio-lerroa (<math display=\"inline\"><mrow><mi>−</mi><mi>h</mi><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><mi>k</mi><mi>u</mi></mrow></math>) aldaerekin.",
        "<strong>Parabolikoak</strong> (<math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math>): difusio-ekuazioak, adib. <math display=\"block\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>i</mi><mi>f</mi><mi>u</mi><mi>s</mi><mi>i</mi><mi>o</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mn>1</mn><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> konbekzioa (<math display=\"inline\"><mrow><mi>−</mi><mi>h</mi><msub><mi>u</mi><mi>x</mi></msub></mrow></math>), alboko galera (<math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>u</mi></mrow></math>) eta iturriak (<math display=\"inline\"><mrow><mi>+</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) aldaerekin."
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Laplace-ren operadorea koordenatu-sistemetan",
   "blokeak": [
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mi>r</mi><mi>t</mi><mi>e</mi><mi>s</mi><mi>i</mi><mi>a</mi><mi>r</mi><mspace width=\"0.222em\"></mspace><mn>2</mn><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>u</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>+</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><msub><mi>u</mi><mi>r</mi></msub><mo>+</mo><mfrac><mn>1</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac><msub><mi>u</mi><mrow><mi>θ</mi><mi>θ</mi></mrow></msub></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>o</mi><mi>l</mi><mi>a</mi><mi>r</mi><mspace width=\"0.222em\"></mspace><mn>2</mn><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>u</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>+</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><msub><mi>u</mi><mi>r</mi></msub><mo>+</mo><mfrac><mn>1</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac><msub><mi>u</mi><mrow><mi>θ</mi><mi>θ</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mrow><mi>z</mi><mi>z</mi></mrow></msub></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mi>i</mi><mi>l</mi><mi>i</mi><mi>n</mi><mi>d</mi><mi>r</mi><mi>i</mi><mi>k</mi><mi>o</mi><mspace width=\"0.222em\"></mspace><mn>3</mn><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>u</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>+</mo><mfrac><mn>2</mn><mi>r</mi></mfrac><msub><mi>u</mi><mi>r</mi></msub><mo>+</mo><mfrac><mn>1</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac><msub><mi>u</mi><mrow><mi>θ</mi><mi>θ</mi></mrow></msub><mo>+</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><msup><mi>r</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><msub><mi>u</mi><mi>θ</mi></msub><mo>+</mo><mfrac><mn>1</mn><mrow><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></mfrac><msub><mi>u</mi><mrow><mi>φ</mi><mi>φ</mi></mrow></msub></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mi>s</mi><mi>f</mi><mi>e</mi><mi>r</mi><mi>i</mi><mi>k</mi><mi>o</mi><mspace width=\"0.222em\"></mspace><mn>3</mn><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Koordenatu esferikoak: <math display=\"inline\"><mrow><mi>r</mi><mo>≥</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>θ</mi><mo>&lt;</mo><mn>2</mn><mi>π</mi></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>φ</mi><mo>≤</mo><mi>π</mi></mrow></math>, <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "CNmet2, &quot;MÉTODOS MATEMÁTICOS&quot;, 0. orria (ezker erdia). Zerrenda eredu-ekuazioena da (Laplace, Helmholtz, Poisson, Schrödinger, uhina, difusioa): <strong>zuzena</strong>, sailkapenaren konbentzioa (diskriminantearen letra) ikastaroaren araberakoa izan arren. ⚠ <strong>Aipamena:</strong> jatorrizkoak Laplaziar esferikoan <math display=\"inline\"><mi>θ</mi></math> lotzen du <math display=\"inline\"><mi mathvariant=\"normal\">cot</mi></math>/<math display=\"inline\"><mi mathvariant=\"normal\">sin</mi></math> gaiekin (angelu polarra <math display=\"inline\"><mi>θ</mi></math> balitz), baina behealdeko koordenatu-transformazioek (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>...) <math display=\"inline\"><mi>φ</mi></math> egiten dute angelu polar; egiturak zuzena da, angelu-izenen trukea besterik ez dago (ez operadorearen akatsa). Testua ez da laburtu. Ikus <code>koadernoa_metodo_n2_p000.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "cNmet2",
     "xehetasuna": "CNmet2 — METODOS MATEMATICOS errotulua, 1.-13. orrialdeak (7 zatiki): EDPak, bero-ekuazioa eta muga-baldintzak; 2026-08-04an standalonez egiaztatua",
     "hizkuntza": "es/en"
    }
   ]
  },
  {
   "id": "a12",
   "maila": 1,
   "izenburua": "Beroaren ekuazioa: aldagai-banaketa eta Dirichlet-en espektroa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Beroaren ekuazio behartua (Dirichlet-en mugalde homogeneoekin eta hasierako datu nuluarekin); lotutako problema homogeneoa <strong>aldagai-banaketaz</strong> ebazten da, modu propioak lortuz."
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Problema",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Problema",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>t</mi><mo>&gt;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>t</mi><mo>&gt;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Soluzio partikular bat <math display=\"inline\"><mrow><msub><mi>u</mi><mi>p</mi></msub><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math> da (<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>p</mi><mo>,</mo><mi>t</mi></mrow></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>p</mi><mo>,</mo><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>), baina ez du <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> betetzen; beraz problema <strong>ez-homogeneoa</strong> da."
      }
     ]
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Problema homogeneoa: aldagai-banaketa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>) ebazteko, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>X</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><msup><mi>T</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>X</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>λ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hortik bi ekuazio: <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Balio propioen problema</strong> <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>−</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>r</mi><mi>x</mi></mrow></msup></mrow></math> probatuz <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>±</mi><msqrt><mi>λ</mi></msqrt></mrow></math>:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><msqrt><mi>λ</mi></msqrt><mi>x</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><msqrt><mi>λ</mi></msqrt><mi>x</mi></mrow></msup></mrow></math>; <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>-k <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> dakar. <strong>Soluzio ez-tribialik ez.</strong>",
        "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>X</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mi>x</mi></mrow></math> (lineala); <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>X</mi><mo>≡</mo><mn>0</mn></mrow></math>. <strong>Ez.</strong>",
        "<math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mo>=</mo><mi>n</mi><mi>π</mi></mrow></math>."
       ]
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
       "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>X</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>u</mi><mi>n</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Modu bakoitzak ekuazio homogeneoa eta bi mugalde-baldintzak betetzen ditu."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "CNmet2, &quot;METODOS MATEMATICOS&quot;, 2014/3/13 (1. orria). Aldagai-banaketa <strong>zuzena</strong> da: Dirichlet-ekin <math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>-k ez dute autofuntzio ez-tribialik; <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>-k <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup></mrow></math> ematen ditu. ⚠ <strong>Zehaztapenak (aipamenarekin):</strong> (1) <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> kasuan jatorrizkoak esponentzialak errepikatzen ditu, baina <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>=</mo><mn>0</mn></mrow></math>-ren soluzioa <strong>lineala</strong> da (<math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mi>x</mi></mrow></math>); hemen zuzendua. (2) Soluzio partikularrari egileak <math display=\"inline\"><msub><mi>y</mi><mi>p</mi></msub></math> deitzen dio, testuinguru honetan <math display=\"inline\"><msub><mi>u</mi><mi>p</mi></msub></math> izan behar duena. Iturri behartuaren (<math display=\"inline\"><mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>) eta hasierako datuaren ebazpena hurrengo orrian jarraitzen da (<code>koadernoa_metodo_n2_p002.typ</code>). Ez da laburpenik egin. Ikus <code>koadernoa_metodo_n2_p001.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Difusio behartua: koefizienteen aldakuntza eta serie sinuz ebaztea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Beroaren ekuazio <strong>behartua</strong> (<math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>) ebazten da modu propioen gainean garapen bat proposatuz, koefiziente denbora-menpekoekin (<strong>koefizienteen aldakuntza</strong>): <math display=\"inline\"><mi>x</mi></math> serie sinuz garatu, koefizienteak integratu, eta hasierako datuaz konstanteak finkatu."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Garapena eta ordezkapena"
    },
    {
     "mota": "testua",
     "html": "Proposatu <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>b</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math> <strong><math display=\"inline\"><mi>t</mi></math>-ren menpekoa</strong>, kasu homogeneoan ez bezala). Ekuazioan ordezkatuz gai gehienak deuseztatzen dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msubsup><mi>b</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>′</mo></msubsup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mi>x</mi></math>-ren serie sinua eta koefizienteak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>B</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, non ortogonaltasunez <math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>2</mn><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac></mrow></math>. Gai bakoitza berdinduz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>b</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>′</mo></msubsup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>b</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>′</mo></msubsup><mo>=</mo><mn>2</mn><msup><mi>e</mi><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Integrazioa (zatikako integrazioa)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo>∫</mo><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mi>d</mi><mi>t</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mi mathvariant=\"normal\">cos</mi><mi>t</mi><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> erabiliz (<math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>b</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>2</mn><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mo>⋅</mo><mfrac><mrow><msup><mi>e</mi><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>t</mi><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mo>+</mo><msub><mi>k</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hasierako datua eta konstanteak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> ezarriz, <math display=\"inline\"><mrow><msub><mi>b</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mi>n</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>b</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mo>+</mo><msub><mi>k</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>k</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "CNmet2, &quot;METODOS MATEMATICOS&quot;, 2014/3/13 (2-3 orriak). Garapena <strong>zuzena</strong> da: koefizienteen aldakuntzaz <math display=\"inline\"><mrow><msubsup><mi>b</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>′</mo></msubsup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>-ren <math display=\"inline\"><mi>n</mi></math>-garren proiekzioa, <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta zatikako integrazioz <math display=\"inline\"><msub><mi>b</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math>. ⚠ <strong>Zuzenketa (aipamenarekin):</strong> hasierako datutik konstantea <math display=\"inline\"><mrow><msub><mi>k</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da (koadroan zuzen dago); baina egileak <strong>azken soluzioan</strong> <math display=\"inline\"><mrow><mn>4</mn><mi>n</mi><mi>π</mi></mrow></math> idazten du (ortogonaltasun-faktore bat galduta), <math display=\"inline\"><mrow><mn>2</mn><mi>n</mi><mi>π</mi></mrow></math> izan behar duena. Hemen <math display=\"inline\"><mrow><mn>2</mn><mi>n</mi><mi>π</mi></mrow></math> erabili da. Ez da laburpenik egin. Ikus <code>koadernoa_metodo_n2_p002.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Beroaren ekuazioa: mugalde eta iturri ez-homogeneoen homogeneizazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Mugalde ez-homogeneoak eta iturria dituen beroaren ekuazioa bi urratsetan <strong>homogeneizatzen</strong> da (lehenengo mugaldea, gero iturria), problema homogeneo bat utziz, aldagai-banaketaz ebazten dena."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Problema osoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>3</mn><mi>x</mi><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>t</mi><mo>&gt;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>t</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>t</mi><mn>3</mn></msup><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>t</mi><mo>&gt;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "1. urratsa: mugaldea homogeneizatu (<math display=\"inline\"><mi>v</mi></math>)"
    },
    {
     "mota": "testua",
     "html": "Zuzen bat (<math display=\"inline\"><mi>x</mi></math>-en lineala) mugalde-baldintzak betetzeko: <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi></mrow></math> non <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>b</mi><mo>=</mo><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>=</mo><msup><mi>t</mi><mn>3</mn></msup><mo>⇒</mo><mi>a</mi><mo>=</mo><msup><mi>t</mi><mn>3</mn></msup><mo>−</mo><mi>t</mi></mrow></math>. Beraz <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>t</mi><mn>3</mn></msup><mo>−</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mi>t</mi></mrow></math>. <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>v</mi></mrow></math> hartuz (<math display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>w</mi><mi>t</mi></msub><mo>−</mo><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>−</mo><mn>1</mn><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>−</mo><mn>1</mn><mo>=</mo><mi>−</mi><mn>2</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>0</mn><mo>=</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "2. urratsa: iturria homogeneizatu (<math display=\"inline\"><mi>z</mi></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> egonkorra, <math display=\"inline\"><mrow><mi>−</mi><msub><mi>z</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>−</mi><mn>2</mn><mo>⇒</mo><msub><mi>z</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>⇒</mo><mi>z</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi></mrow></math>; <math display=\"inline\"><mrow><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mi>A</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>A</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, beraz <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi></mrow></math>. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>w</mi><mo>−</mo><mi>z</mi></mrow></math> hartuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mi>t</mi></msub><mo>−</mo><msub><mi>y</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>w</mi><mi>t</mi></msub><mo>−</mo><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>z</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>−</mi><mn>2</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "3. urratsa: aldagai-banaketa (<math display=\"inline\"><mi>y</mi></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup></mrow></math>. Beraz <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>b</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><msub><mi>b</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>-tik <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mi>v</mi><mo>+</mo><mi>z</mi><mo>+</mo><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>t</mi><mn>3</mn></msup><mo>−</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mi>t</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "CNmet2, &quot;METODOS MATEMATICOS&quot;, 2014/3/13 (4-5 orriak). Dena <strong>zuzena</strong> da, urratsez urrats egiaztatua: <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>t</mi><mn>3</mn></msup><mo>−</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mi>t</mi></mrow></math> (mugaldea), <math display=\"inline\"><mrow><msub><mi>w</mi><mi>t</mi></msub><mo>−</mo><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>; <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi></mrow></math> (iturria), <math display=\"inline\"><mrow><msub><mi>y</mi><mi>t</mi></msub><mo>−</mo><msub><mi>y</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>); aldagai-banaketaz <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; eta <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>v</mi><mo>+</mo><mi>z</mi><mo>+</mo><mi>y</mi></mrow></math>. Homogeneizazio bikoitzaren adibide garbia (mugaldea + iturria). Ez da laburpenik egin. Ikus <code>koadernoa_metodo_n2_p005.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "Beroaren ekuazioa mutur isolatuekin: Neumann-en espektroa eta serie kosinua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Mutur <strong>isolatuak</strong> (Neumann-en mugalde-baldintzak, <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>) dituen beroaren ekuazioa: aldagai-banaketak <strong>kosinu</strong>-espektroa ematen du, eta hasierako tenperatura zatikatua serie kosinuz garatzen da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Mutur isolatuak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><mi>α</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>t</mi><mo>&gt;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>t</mi><mo>&gt;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi></mtd></mtr></mtable></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>T</mi><mn>1</mn></msub><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>δ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>T</mi><mn>2</mn></msub><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>δ</mi><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>L</mi></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aldagai-banaketa eta espektroa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>X</mi><mo>″</mo></msup><mi>/</mi><mi>X</mi><mo>=</mo><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>−</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><msqrt><mi>λ</mi></msqrt><mi>x</mi></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><msqrt><mi>λ</mi></msqrt><mi>x</mi></mrow></msup></mrow></math>; <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>A</mi><mo>=</mo><mi>B</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>A</mi><msqrt><mi>λ</mi></msqrt><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><msqrt><mi>λ</mi></msqrt><mi>L</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><msqrt><mi>λ</mi></msqrt><mi>L</mi></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>A</mi><mo>=</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>. <strong>Tribiala.</strong>",
        "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo>=</mo><mi>B</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>A</mi></mrow></math> (<strong>konstantea baliozkoa</strong>), <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>T</mi><mo>=</mo><mi>C</mi></mrow></math>.",
        "<math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>B</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>L</mi><mo>=</mo><mi>n</mi><mi>π</mi></mrow></math>."
       ]
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
       "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>X</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mi>L</mi></mfrac><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi><mi>/</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Soluzio orokorra eta <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi><mi>/</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mi>L</mi></mfrac><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> serie kosinu (Neumann) da. Gai konstantea, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rekin proiektatuz: <math display=\"block\"><mrow><mfrac><mrow><msub><mi>a</mi><mn>0</mn></msub><mi>L</mi></mrow><mn>2</mn></mfrac><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>δ</mi></msubsup><msub><mi>T</mi><mn>1</mn></msub><mi>d</mi><mi>x</mi><mo>+</mo><msubsup><mo>∫</mo><mi>δ</mi><mi>L</mi></msubsup><msub><mi>T</mi><mn>2</mn></msub><mi>d</mi><mi>x</mi><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub><mi>δ</mi><mo>+</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mi>δ</mi><mo>+</mo><msub><mi>T</mi><mn>2</mn></msub><mi>L</mi><mo>−</mo><msub><mi>T</mi><mn>2</mn></msub><mi>δ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>L</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "CNmet2, &quot;METODOS MATEMATICOS&quot;, 2014/3/14 (6-7 orriak). Dena <strong>zuzena</strong> da: Neumann-en espektroa (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> konstantea baliozkoa, <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>/</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), soluzio orokorra serie kosinuz, eta <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mi>δ</mi><mo>+</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>L</mi></mrow></math> (hots <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow></math> = <math display=\"inline\"><mi>f</mi></math>-ren batez bestekoa). Egileak difusibitatea <math display=\"inline\"><mi>α</mi></math> gisa idazten du (ez <math display=\"inline\"><msup><mi>α</mi><mn>2</mn></msup></math>); haren notazioa errespetatu da. <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>) koefizienteak hurrengo urratsetan kalkulatzen dira. Ez da laburpenik egin. Ikus <code>koadernoa_metodo_n2_p006.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Neumann-en koefiziente kosinuak eta egoera egonkorra; <math display=\"inline\"><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup></math> datu baten eboluzioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko problemaren jarraipena: datu zatikatuaren Fourier kosinu koefizienteak (<math display=\"inline\"><msub><mi>a</mi><mi>k</mi></msub></math>), soluzio osoa eta egoera egonkorra (<math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>); eta datu sinusoidal koadratiko baten eboluzioa (b atala)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><msub><mi>a</mi><mi>k</mi></msub></math> koefizienteak (datu zatikatua)"
    },
    {
     "mota": "testua",
     "html": "Ortogonaltasunez (<math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mi>L</mi><mi>/</mi><mn>2</mn></mrow></math>), datu zatikatuaren proiekzioa: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>δ</mi></msubsup><msub><mi>T</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>k</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><msubsup><mo>∫</mo><mi>δ</mi><mi>L</mi></msubsup><msub><mi>T</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>k</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mi>L</mi><mrow><mi>k</mi><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>k</mi><mi>π</mi><mi>δ</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>−</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mi>k</mi></msub><mo>=</mo><mfrac><mn>2</mn><mrow><mi>k</mi><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>k</mi><mi>π</mi><mi>δ</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>−</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>T</mi><mn>1</mn></msub><mi>δ</mi><mo>+</mo><msub><mi>T</mi><mn>2</mn></msub><mi>L</mi><mo>−</mo><msub><mi>T</mi><mn>2</mn></msub><mi>δ</mi></mrow><mi>L</mi></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>2</mn><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>δ</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>−</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi><mi>/</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Egoera egonkorra:</strong> <math display=\"inline\"><mrow><mi>α</mi><mo>&gt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> direnean, gai esponentzial guztiak <math display=\"inline\"><mn>0</mn></math>-ra doaz, beraz <math display=\"inline\"><mrow><mi>u</mi><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mi>δ</mi><mo>+</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>L</mi></mrow></math> (hasierako tenperaturaren batez bestekoa)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(b) <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Angelu bikoitzaren identitateaz, datua <strong>serie kosinu finitua</strong> da: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Beraz <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>), <math display=\"inline\"><mrow><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>, eta gainerakoak <math display=\"inline\"><mn>0</mn></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mn>16</mn><mi>α</mi><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi><mi>/</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "CNmet2, &quot;METODOS MATEMATICOS&quot;, 2014/3/14 (8-9 orriak). (a) atala <strong>zuzena</strong> da: <math display=\"inline\"><mrow><msub><mi>a</mi><mi>k</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mi>k</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>π</mi><mi>δ</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>−</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (integral bakoitiak <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> erabiliz), soluzioa eta egoera egonkorra (batez bestekoa). ⚠ <strong>Zuzenketak (aipamenarekin) (b) atalean:</strong> jatorrizkoak eskala/indize nahasketak ditu: <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>−</mo><mn>1</mn><mi>/</mi><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da (ez <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), beraz gaia <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>4</mn></mrow></math> da (ez <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>); eta <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math> da (<math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>L</mi><mi>/</mi><mn>2</mn></mrow></math>), ez <math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><mi>L</mi></mrow></math>. Emaitza zuzena <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>16</mn><mi>α</mi><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi><mi>/</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da, hemen jasoa. Ez da laburpenik egin. Ikus <code>koadernoa_metodo_n2_p008.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Bero-ekuazioa Dirichlet-Neumann baldintza mistoekin",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Azter dezagun <math display=\"block\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Aldagaiak bereizita, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>T</mi><mi>X</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><msup><mi>α</mi><mn>2</mn></msup></mrow></math> hartuz, <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Baldintzek <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> ematen dituzte. Hortaz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>X</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msubsup><mi>α</mi><mi>n</mi><mn>2</mn></msubsup><mi>t</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Moduen ortogonaltasuna <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>m</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><msub><mi>δ</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub></mrow></math> da; beraz <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>b</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><msubsup><mi>α</mi><mi>n</mi><mn>2</mn></msubsup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(a) Maila-funtzioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> bada <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>δ</mi></mrow></math> tartean eta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> bada <math display=\"inline\"><mrow><mi>δ</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi></mrow></math> tartean, <math display=\"block\"><mrow><msubsup><mo>∫</mo><mi>δ</mi><mi>L</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msub><mi>α</mi><mi>n</mi></msub></mfrac><mi>.</mi></mrow></math> Ondorioz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>4</mn><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mfrac><mi>δ</mi><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>b</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mfrac><mi>t</mi><mrow><mn>4</mn><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mfrac><mi>x</mi><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Jauzi-puntuan, serieak alde bietako balioen batez bestekoa ematen du."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(b) Arrapala eta plataforma"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> bada <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>δ</mi></mrow></math> tartean eta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>δ</mi></mrow></math> bada <math display=\"inline\"><mrow><mi>δ</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi></mrow></math> tartean, zatika integratuz mugako gaiak ezeztatzen dira: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msubsup><mi>α</mi><mi>n</mi><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mfrac></mrow></math> Beraz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>8</mn><mi>L</mi><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mfrac><mi>δ</mi><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>b</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mfrac><mi>t</mi><mrow><mn>4</mn><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mfrac><mi>x</mi><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Paperak modu espazial zuzena eta <math display=\"inline\"><mfrac><mi>L</mi><mn>2</mn></mfrac></math> norma lortzen ditu, baina denbora-faktorea, seriearen hasiera eta bi koefizienteak okertzen ditu. [CORREGIDO: el papel escribe <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>π</mi><mn>2</mn></msup><mfrac><mi>t</mi><msup><mi>L</mi><mn>2</mn></msup></mfrac></mrow></msup></math> y comienza en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>; aquí se usa <math display=\"inline\"><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mfrac><mi>t</mi><mrow><mn>4</mn><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac></mrow></msup></math> desde <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>.] (a) atalean beheko mugako <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> galtzen da; (b) atalean eskalak ez datoz bat. Hemen kalkulatutako bi proiekzioek EDPa, bi mugak eta hasierako datua betetzen dituzte. Ikus <code>koadernoa_metodo_n2_p010.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Bero-ekuazio behartua: muga-baldintzen altxatzea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Problema hau dugu: <math display=\"block\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>π</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>π</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math> Denborarik gabeko altxatzea aukeratzen da: <math display=\"inline\"><mrow><mi>−</mi><msup><mi>V</mi><mo>″</mo></msup><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>π</mi></mrow></math>. Bi integrazioek"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mn>2</mn><mi>π</mi><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "ematen dute. <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>V</mi></mrow></math> jarrita, <math display=\"inline\"><mrow><msub><mi>w</mi><mi>t</mi></msub><mo>−</mo><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>w</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>π</mi><mi>x</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Problema mistoaren moduak <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>t</mi></mrow></msup></mrow></math> dira, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>. Norma <math display=\"inline\"><mfrac><mi>π</mi><mn>2</mn></mfrac></math> denez, <math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>π</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Zatika bi aldiz integratuta, <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>π</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><mn>16</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></mfrac></mrow></math>; hortaz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><mn>32</mn><msup><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mn>2</mn><mi>π</mi><mi>x</mi><mo>+</mo><mn>1</mn><mo>−</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>32</mn><msup><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> denean, serie iragankorra desagertzen da eta <math display=\"inline\"><mi>V</mi></math> profil egonkorra geratzen da."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Altxatzea, moduak eta <math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>32</mn><msup><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac></mrow></math> koefizientea zuzen daude. [CORREGIDO: el papel comienza la serie en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> y elimina el modo fundamental; la expansión completa comienza en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>.] Lehen gaia kenduz gero, hasierako <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>π</mi><mi>x</mi></mrow></math> profila ez da berreskuratzen. Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n2_p012.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "cNmet2",
     "xehetasuna": "CNmet2 — METODO MATEMATIKOAK errotulua, 14.-21. orrialdeak (4 zatiki): Laplace esferikoa, beroaren hedapena eta ariketa ebatziak; errotulu-aldaketa bere horretan gordea",
     "hizkuntza": "eu/es/en"
    }
   ]
  },
  {
   "id": "a21",
   "maila": 1,
   "izenburua": "Laplace-ren ekuazioa koordenatu esferikoetan",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Koordenatu esferikoetan, <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac><msub><mi>∂</mi><mrow><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><msub><mi>u</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>+</mo><mfrac><mn>1</mn><mrow><msup><mi>r</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><msub><mi>∂</mi><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msub><mi>u</mi><mi>θ</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>+</mo><mfrac><mn>1</mn><mrow><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></mfrac><msub><mi>u</mi><mrow><mi>φ</mi><mi>φ</mi></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bereizita eta bereizketa-konstantea <math display=\"inline\"><mrow><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aukeratuta, erradio-ekuazioa <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mi>R</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>−</mo><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math> da. <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msup><mi>e</mi><mi>t</mi></msup></mrow></math> aldaketak erroak <math display=\"inline\"><mi>l</mi></math> eta <math display=\"inline\"><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ematen ditu:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>r</mi><mi>l</mi></msup><mo>+</mo><mi>B</mi><msup><mi>r</mi><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Azimutaren periodikotasunak <math display=\"inline\"><mi>m</mi></math> osoa eskatzen du: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>D</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow></math> denean, <math display=\"inline\"><mi>φ</mi></math>-ren adar lineala ez da periodikoa eta ezabatu behar da. <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> jarrita, <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>μ</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>μ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi mathvariant=\"normal\">Θ</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><msup><mi>m</mi><mn>2</mn></msup><mrow><mn>1</mn><mo>−</mo><msup><mi>μ</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi mathvariant=\"normal\">Θ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Hau Legendre-ren ekuazio asoziatua da. Poloetan erregularra izateko, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Θ</mi><mo>=</mo><msubsup><mi>P</mi><mi>l</mi><mrow><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msubsup></mrow></math> hartzen da, <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>…</mi></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mi>l</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Hortaz, soluzio erregular orokorra adar radialen eta harmoniko esferikoen konbinazioa da: <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>l</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><munderover><mo>∑</mo><mrow><mi>m</mi><mo>=</mo><mi>−</mi><mi>l</mi></mrow><mi>l</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mrow><mi>l</mi><mi>m</mi></mrow></msub><msup><mi>r</mi><mi>l</mi></msup><mo>+</mo><msub><mi>B</mi><mrow><mi>l</mi><mi>m</mi></mrow></msub><msup><mi>r</mi><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mi>Y</mi><mi>l</mi><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mi>.</mi></mrow></math> Konbentzio estandarrean, <math display=\"inline\"><mrow><msubsup><mi>Y</mi><mi>l</mi><mi>m</mi></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>m</mi></msup><msqrt><mrow><mfrac><mrow><mn>2</mn><mi>l</mi><mo>+</mo><mn>1</mn></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></msqrt><msubsup><mi>P</mi><mi>l</mi><mrow><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msubsup><msup><mi>e</mi><mrow><mi>i</mi><mi>m</mi><mi>φ</mi></mrow></msup></mrow></math>, eta <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mn>1</mn></mrow><mn>1</mn></msubsup><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>d</mi><mi>φ</mi><mover><msubsup><mi>Y</mi><mi>l</mi><mi>m</mi></msubsup><mo accent=\"true\">¯</mo></mover><msubsup><mi>Y</mi><msup><mi>l</mi><mo>′</mo></msup><msup><mi>m</mi><mo>′</mo></msup></msubsup><mo>=</mo><msub><mi>δ</mi><mrow><mi>l</mi><msup><mi>l</mi><mo>′</mo></msup></mrow></msub><msub><mi>δ</mi><mrow><mi>m</mi><msup><mi>m</mi><mo>′</mo></msup></mrow></msub></mrow></math>."
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Esfera eroalea eremu uniforme batean",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Erradioa <math display=\"inline\"><mi>a</mi></math> duen esfera lurreratuaren kanpoan, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>V</mi><mo>∼</mo><mi>−</mi><mi>E</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> <math display=\"inline\"><mrow><mi>r</mi><mo>→</mo><mi>∞</mi></mrow></math> denean. Muga-datuak <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>m</mi><mo>=</mo><mn>0</mn></mrow></math> modua baino ez du; beraz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>E</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><mfrac><msup><mi>a</mi><mn>3</mn></msup><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>r</mi><mo>≥</mo><mi>a</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkiko garapena esfera-problema planteatzean amaitzen da; emaitza hemen baldintzetatik osatu da. [CORREGIDO: el papel deja incompleto el rango de la segunda suma y escribe la fase <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>l</mi></msup></mrow></math>; aquí se explicita <math display=\"inline\"><mrow><mi>−</mi><mi>l</mi><mo>≤</mo><mi>m</mi><mo>≤</mo><mi>l</mi></mrow></math> y se usa la convención de Condon-Shortley <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>m</mi></msup></mrow></math>.] Fase orokor koherente baten aldaketak ez du ortogonaltasuna aldatzen. Ikus <code>koadernoa_metodo_n2_p014.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a23",
   "maila": 1,
   "izenburua": "Lehen ordenako DPE linealak: ezaugarrien metodoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ekuaziorako, ezaugarriak <math display=\"inline\"><mrow><mi>d</mi><mfrac><mi>x</mi><mi>A</mi></mfrac><mo>=</mo><mi>d</mi><mfrac><mi>y</mi><mi>B</mi></mfrac></mrow></math> erlazioak ematen ditu. Haien invariatzailea <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bada, <math display=\"inline\"><mrow><mi>A</mi><msub><mi>φ</mi><mi>x</mi></msub><mo>+</mo><mi>B</mi><msub><mi>φ</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math>. Zeharkako <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>y</mi></mrow></math> koordenatuarekin, jacobiarra ez-nulua den tokian, <math display=\"block\"><mrow><mi>B</mi><msub><mi>u</mi><mi>η</mi></msub><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo>,</mo><mi>η</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mn>0</mn></mrow></math> bada, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>η</mi></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: soluzioa konstantea da ezaugarrietan."
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Bi aldagaiko adibidea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><msub><mi>u</mi><mi>t</mi></msub><mo>+</mo><mn>2</mn><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioan <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi><mo>=</mo><mi>d</mi><mi>t</mi></mrow></math>, beraz <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>t</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>t</mi></mrow></math>. <math display=\"inline\"><mrow><msub><mi>u</mi><mi>η</mi></msub><mo>+</mo><mn>2</mn><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> integratuz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Egiaztapenean, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>x</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup><msup><mi>g</mi><mo>′</mo></msup></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>g</mi><mo>−</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; hiru gaiak ezeztatzen dira."
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Aldagai independente gehiago",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msub><mi>a</mi><mrow><mi>j</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><msub><mi>u</mi><msub><mi>x</mi><mi>j</mi></msub></msub><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> ekuaziorako, <math display=\"inline\"><mrow><mi>d</mi><mfrac><msub><mi>x</mi><mn>1</mn></msub><msub><mi>a</mi><mn>1</mn></msub></mfrac><mo>=</mo><mi>…</mi><mo>=</mo><mi>d</mi><mfrac><msub><mi>x</mi><mi>n</mi></msub><msub><mi>a</mi><mi>n</mi></msub></mfrac><mo>=</mo><mi>d</mi><mfrac><mi>u</mi><mi>f</mi></mfrac></mrow></math> da sistema karakteristikoa. <math display=\"inline\"><mrow><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><msub><mi>u</mi><mi>y</mi></msub><mo>+</mo><msub><mi>u</mi><mi>z</mi></msub><mo>=</mo><mn>3</mn><mi>u</mi></mrow></math> adibidean <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>z</mi></mrow></math> invariatzaileak dira; hortaz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo>−</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Bigarren ordenako ekuazioetako datuak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mi>B</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>C</mi><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo>,</mo><msub><mi>u</mi><mi>x</mi></msub><mo>,</mo><msub><mi>u</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> ekuazio batean, <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> kurbaren gaineko ohiko datuak hauek dira: Dirichlet-ek <math display=\"inline\"><mi>u</mi></math> finkatzen du; Neumann-ek <math display=\"inline\"><mrow><msub><mi>u</mi><mi>n</mi></msub><mo>=</mo><mi>∇</mi><mi>u</mi><mo>⋅</mo><mi>n</mi></mrow></math>; eta Cauchy-k biak. Datuen onargarritasuna koefizienteek eta kurba karakteristikoa den ala ez den erabakitzen dute."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi soluzio karakteristikoak zuzenak dira. <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math> den tokietan ezin da <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>y</mi></mrow></math> aldaketa automatikoki erabili; beste zeharkako koordenatu bat hautatu behar da. Orriak bigarren ordenako datuen geometria aurkezten du, baina ez du oraindik sailkapen-irizpidea garatzen. Ikus <code>koadernoa_metodo_n2_p016.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Cauchy datuak eta marruskaduradun uhin-ekuazioa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Datuak kurba baten gainean"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> badira, <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>u</mi><mi>x</mi></msub><msup><mi>x</mi><mo>′</mo></msup><mo>+</mo><msub><mi>u</mi><mi>y</mi></msub><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>φ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Normal ez-unitario bat <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo>,</mo><mi>−</mi><msup><mi>x</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da; beraz <math display=\"block\"><mrow><mi>∇</mi><mi>u</mi><mo>⋅</mo><mi>n</mi><mo>=</mo><msub><mi>u</mi><mi>x</mi></msub><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><msub><mi>u</mi><mi>y</mi></msub><msup><mi>x</mi><mo>′</mo></msup><mi>.</mi></mrow></math> Normal unitarioa erabiliz gero, aurrekoa <math display=\"inline\"><msqrt><mrow><msup><mi>x</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup></mrow></msqrt></math>-z zatitzen da eta Neumann/Cauchy datuak <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rekin berdintzen dira."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Marruskadura duen uhina"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>+</mo><mn>2</mn><mi>k</mi><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>T</mi><mi>X</mi></mrow></math> bereizita, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>−</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>T</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>T</mi><mo>′</mo></msup><mo>−</mo><mi>λ</mi><msup><mi>c</mi><mn>2</mn></msup><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> kasuek soluzio espazial tribiala baino ez dute. <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>, denean <math display=\"inline\"><mrow><msub><mi>X</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>T</mi><msup><mi>n</mi><mo>″</mo></msup></msub><mo>+</mo><mn>2</mn><mi>k</mi><msub><mi>T</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>. Erroak <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mi>k</mi><mo>±</mo><msqrt><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>−</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> dira."
    },
    {
     "mota": "testua",
     "html": "<strong>Gehiegizko moteltzea</strong>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mi>n</mi><mi>c</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><msub><mi>A</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>k</mi><mo>+</mo><msqrt><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>−</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>k</mi><mo>−</mo><msqrt><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>−</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Moteltze kritikoa</strong>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>n</mi><mi>c</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mi>n</mi></msub><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Moteltze azpikoa</strong>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>n</mi><mi>c</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>k</mi><mn>2</mn></msup></mrow></msqrt><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>k</mi><mn>2</mn></msup></mrow></msqrt><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>T</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>≥</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Linealtasunagatik, modu hauen serie konbergenteek ere problemaren soluzioak ematen dituzte."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: la línea normal del papel termina en <math display=\"inline\"><mrow><msub><mi>u</mi><mi>x</mi></msub><msup><mi>y</mi><mo>′</mo></msup></mrow></math>; faltan <math display=\"inline\"><mrow><mi>−</mi><msub><mi>u</mi><mi>y</mi></msub><msup><mi>x</mi><mo>′</mo></msup></mrow></math> y, para <math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mover><mrow></mrow><mo accent=\"true\">̂</mo></mover></mrow></math>, la normalización.] [CORREGIDO: el papel escribe <math display=\"inline\"><mrow><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mi>c</mi></mfrac><mo>≤</mo><mi>n</mi></mrow></math> para el régimen oscilatorio; debe ser estricto, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>n</mi><mi>c</mi></mrow></math>, para no solapar el caso crítico.] Gainerako bereizketa eta erro karakteristikoak zuzenak dira. Ikus <code>koadernoa_metodo_n2_p018.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "Moteldutako uhinaren seriea eta bero-ekuazioaren Robin espektroa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Moteldutako uhinaren modu guztiak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>+</mo><mn>2</mn><mi>k</mi><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> problemarako, <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>. Modu bakoitza <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>n</mi><mi>c</mi></mrow></math> alderatuz sailkatzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mo>∑</mo><mrow><mi>n</mi><mo>:</mo><mi>n</mi><mi>c</mi><mo>&lt;</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>k</mi><mo>+</mo><msqrt><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>−</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>k</mi><mo>−</mo><msqrt><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>−</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"block\"><mrow><mspace width=\"1.0em\"></mspace><mo>+</mo><munder><mo>∑</mo><mrow><mi>n</mi><mo>:</mo><mi>n</mi><mi>c</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mi>n</mi></msub><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"block\"><mrow><mspace width=\"1.0em\"></mspace><mo>+</mo><munder><mo>∑</mo><mrow><mi>n</mi><mo>:</mo><mi>n</mi><mi>c</mi><mo>&gt;</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></munder><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>k</mi><mn>2</mn></msup></mrow></msqrt><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>k</mi><mn>2</mn></msup></mrow></msqrt><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "[CORREGIDO: el papel usa cotas <math display=\"inline\"><mo>≤</mo></math> y <math display=\"inline\"><mo>≥</mo></math> en las sumas exteriores; aquí son estrictas para no contar tres veces un modo crítico.]"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bero-ekuazioa Dirichlet-Robin baldintzekin"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>T</mi><mi>X</mi></mrow></math> bereizita, <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo>=</mo><mi>λ</mi><mi>T</mi></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>=</mo><mi>λ</mi><mi>X</mi></mrow></math>. <math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> kasuek soluzio tribiala baino ez dute. <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><msup><mi>μ</mi><mn>2</mn></msup></mrow></math> denean, <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>-tik <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math>, eta Robin baldintzak <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> ematen du:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>μ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mi>n</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>μ</mi><mi>n</mi></msub><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>π</mi><mo>,</mo><mi>n</mi><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Autoadjuntotasunagatik, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>μ</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> moduak ortogonalak dira. Haien norma <math display=\"block\"><mrow><msub><mi>N</mi><mi>n</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><msubsup><mi>μ</mi><mi>n</mi><mn>2</mn></msubsup><mo>+</mo><mn>2</mn></mrow><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>μ</mi><mi>n</mi><mn>2</mn></msubsup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math> da. Beraz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>μ</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow><msub><mi>N</mi><mi>n</mi></msub></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>B</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><msubsup><mi>μ</mi><mi>n</mi><mn>2</mn></msubsup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>μ</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: el papel anota dos veces <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, pero el enunciado y el cálculo usan <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>.] [CORREGIDO: la última copia pierde <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><msubsup><mi>μ</mi><mi>n</mi><mn>2</mn></msubsup><mi>t</mi></mrow></msup></math> y añade un <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> tras el seno; la fórmula completa es la encuadrada aquí.] Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n2_p020.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "cNmet2",
     "xehetasuna": "CNmet2 — METODOS MATEMATICOS errotulua azentuarekin, 22.-26. orrialdeak (3 zatiki): Sturm-Liouville eta Green; 2014-04-04/07ko data ikusgarriak",
     "hizkuntza": "es/en"
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Laplaziarra koordenatu zilindrikoetan",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>z</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Deribatu lagungarriak <math display=\"block\"><mrow><msub><mi>r</mi><mi>x</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>r</mi><mi>y</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>θ</mi><mi>x</mi></msub><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi>θ</mi><mi>r</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>θ</mi><mi>y</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>θ</mi><mi>r</mi></mfrac></mrow></math> dira. Katearen erregelak <math display=\"block\"><mrow><msub><mi>U</mi><mi>x</mi></msub><mo>=</mo><msub><mi>V</mi><mi>r</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><msub><mi>V</mi><mi>θ</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi>θ</mi><mi>r</mi></mfrac></mrow></math> eta <math display=\"block\"><mrow><msub><mi>U</mi><mi>y</mi></msub><mo>=</mo><msub><mi>V</mi><mi>r</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msub><mi>V</mi><mi>θ</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>θ</mi><mi>r</mi></mfrac></mrow></math> ematen ditu."
    },
    {
     "mota": "testua",
     "html": "Bigarren deribatuak osorik garatuz, <math display=\"block\"><mrow><msub><mi>U</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>−</mo><mn>2</mn><msub><mi>V</mi><mrow><mi>r</mi><mi>θ</mi></mrow></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>θ</mi><mi>r</mi></mfrac><mo>+</mo><msub><mi>V</mi><mi>r</mi></msub><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>θ</mi><mi>r</mi></mfrac><mo>+</mo><msub><mi>V</mi><mrow><mi>θ</mi><mi>θ</mi></mrow></msub><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>θ</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>+</mo><mn>2</mn><msub><mi>V</mi><mi>θ</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>θ</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>U</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mn>2</mn><msub><mi>V</mi><mrow><mi>r</mi><mi>θ</mi></mrow></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>θ</mi><mi>r</mi></mfrac><mo>+</mo><msub><mi>V</mi><mi>r</mi></msub><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>θ</mi><mi>r</mi></mfrac><mo>+</mo><msub><mi>V</mi><mrow><mi>θ</mi><mi>θ</mi></mrow></msub><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>θ</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>−</mo><mn>2</mn><msub><mi>V</mi><mi>θ</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>θ</mi><msup><mi>r</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mfrac></mrow></math> <math display=\"inline\"><mrow><msub><mi>U</mi><mrow><mi>z</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi>z</mi><mi>z</mi></mrow></msub></mrow></math> da. Batuketan gai mistoak eta <math display=\"inline\"><msub><mi>V</mi><mi>θ</mi></msub></math> gaiak ezeztatzen dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>U</mi><mo>=</mo><msub><mi>V</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>+</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><msub><mi>V</mi><mi>r</mi></msub><mo>+</mo><mfrac><mn>1</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac><msub><mi>V</mi><mrow><mi>θ</mi><mi>θ</mi></mrow></msub><mo>+</mo><msub><mi>V</mi><mrow><mi>z</mi><mi>z</mi></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>r</mi><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> ardatzean koefizienteak singularrak dira; funtzio kartesiar leun baten erregulartasunak muga bateragarriak ezartzen ditu."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkiak <math display=\"inline\"><msub><mi>V</mi><mrow><mi>r</mi><mi>θ</mi></mrow></msub></math> eta <math display=\"inline\"><msub><mi>V</mi><mrow><mi>θ</mi><mi>r</mi></mrow></msub></math> bereiz idazten ditu; <math display=\"inline\"><mrow><mi>V</mi><mo>∈</mo><msup><mi>C</mi><mn>2</mn></msup></mrow></math> denean berdinak dira eta hemen ageri den <math display=\"inline\"><mn>2</mn></math> faktorea ematen dute. Enuntziatuak koordenatu esferikoak ere eskatzen ditu, baina orriak zilindrikoak baino ez ditu garatzen, eta hurrengo argazkia beste ariketa batera igarotzen da; ez da falta den zati esferikoa asmatu. Ikus <code>koadernoa_metodo_n2_p022.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Koordenatu polarrak eta d&#x27;Alembert-en aldagaien aldaketa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lehen ordenako bi DPE"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> erabiliz, <math display=\"inline\"><mrow><mi>x</mi><msub><mi>U</mi><mi>y</mi></msub><mo>−</mo><mi>y</mi><msub><mi>U</mi><mi>x</mi></msub><mo>=</mo><msub><mi>V</mi><mi>θ</mi></msub></mrow></math>. Beraz <math display=\"inline\"><mrow><mi>x</mi><msub><mi>U</mi><mi>y</mi></msub><mo>−</mo><mi>y</mi><msub><mi>U</mi><mi>x</mi></msub><mo>=</mo><mn>0</mn></mrow></math> ekuazioaren soluzio orokorra erradiala da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bigarren ekuazioa <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>y</mi></mfrac><msub><mi>U</mi><mi>y</mi></msub><mo>−</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><msub><mi>U</mi><mi>x</mi></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> da, <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math> den eskualde batean. Funtzio erradial oro operadore homogeneoaren nukleoan dago. <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><msup><mi>y</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow></math> hartuta, <math display=\"inline\"><mrow><msub><mi>P</mi><mi>x</mi></msub><mo>=</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>P</mi><mi>y</mi></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>2</mn><msup><mi>y</mi><mn>3</mn></msup></mrow></math>, eta zuzeneko ordezkapenak eskuineko aldea ematen du. Hortaz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><msup><mi>y</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dimentsio bateko uhin-ekuazioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>U</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>U</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>U</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo>,</mo><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> jarrita, <math display=\"inline\"><mrow><msub><mi>U</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi>ξ</mi><mi>ξ</mi></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>V</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>+</mo><msub><mi>V</mi><mrow><mi>η</mi><mi>η</mi></mrow></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>U</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>V</mi><mrow><mi>ξ</mi><mi>ξ</mi></mrow></msub><mo>−</mo><mn>2</mn><msup><mi>c</mi><mn>2</mn></msup><msub><mi>V</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>V</mi><mrow><mi>η</mi><mi>η</mi></mrow></msub></mrow></math>. Beraz <math display=\"inline\"><mrow><msub><mi>V</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Hasierako baldintzek <math display=\"inline\"><mrow><mi>φ</mi><mo>+</mo><mi>ψ</mi><mo>=</mo><mi>f</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>c</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>φ</mi><mo>′</mo></msup><mo>−</mo><msup><mi>ψ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi></mrow></math> ematen dituzte. <math display=\"inline\"><mrow><msup><mi>G</mi><mo>′</mo></msup><mo>=</mo><mi>g</mi></mrow></math> bada, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mfrac><mrow><mi>f</mi><mo>+</mo><mfrac><mi>G</mi><mi>c</mi></mfrac><mo>−</mo><mi>k</mi></mrow><mn>2</mn></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><mfrac><mrow><mi>f</mi><mo>−</mo><mfrac><mi>G</mi><mi>c</mi></mfrac><mo>+</mo><mi>k</mi></mrow><mn>2</mn></mfrac></mrow></math>; <math display=\"inline\"><mi>k</mi></math> konstantea azken batuketan ezeztatzen da."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lehen soluzioa paperak <math display=\"inline\"><mrow><mi>k</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> moduan ematen du; forma horrek soluzio erradial orokorra adierazten du, konstantea funtzioan xurgatuta. Uhinaren azken berreraikuntza hurrengo orrian osatzen da. Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n2_p024.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "d&#x27;Alembert-en formula",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> ekuazioa zuzen errealean, <math display=\"inline\"><mrow><mi>c</mi><mo>≠</mo><mn>0</mn></mrow></math>, eta <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> datuak hartzen dira. Ezaugarrietan, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Aurreko orriko <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mfrac><mrow><mi>f</mi><mo>+</mo><mfrac><mi>G</mi><mi>c</mi></mfrac><mo>−</mo><mi>k</mi></mrow><mn>2</mn></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><mfrac><mrow><mi>f</mi><mo>−</mo><mfrac><mi>G</mi><mi>c</mi></mfrac><mo>+</mo><mi>k</mi></mrow><mn>2</mn></mfrac></mrow></math> adierazpenak ordezkatzean, <math display=\"inline\"><mrow><mi>−</mi><mfrac><mi>k</mi><mn>2</mn></mfrac></mrow></math> eta <math display=\"inline\"><mfrac><mi>k</mi><mn>2</mn></mfrac></math> ezeztatzen dira. <math display=\"inline\"><mrow><msup><mi>G</mi><mo>′</mo></msup><mo>=</mo><mi>g</mi></mrow></math> denez, kalkuluaren oinarrizko teoremak <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi></mrow><mrow><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi></mrow></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>s</mi></mrow></math> ematen du."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>c</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi></mrow><mrow><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi></mrow></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>s</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> denean, integrala kolapsatzen da eta <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Leibniz-en erregelaz denboran deribatuta, integralaren ekarpena <math display=\"inline\"><mfrac><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac></math> da; <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-n <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lortzen da. <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi></mrow></math> edo <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi></mrow></math> soilik menpeko gai bakoitzak uhin-ekuazioa betetzen du."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkiaren eskuineko orria hutsik dago. Ez dago zuzenketarik: paperak konstanteen ezeztapena eta Barrow-en teorema zuzen aplikatzen ditu. Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n2_p026.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "cNmet2",
     "xehetasuna": "CNmet2, 27.-82. orrialdeak (41 zatiki): Green eta Sturm-Liouville, EDPen ezaugarriak, Fourier, uhin/bero/Laplace/Helmholtz ekuazioak eta funtzio bereziak; edukizko rótulu anitzak hitzez hitz kontserbatuak",
     "hizkuntza": "es/en"
    }
   ]
  },
  {
   "id": "a32",
   "maila": 1,
   "izenburua": "Green-en funtzioa Sturm-Liouville problemarako",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Har dezagun <math display=\"block\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Problema homogeneoak <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub></mrow></math> ematen du; bi mugen sistemak <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> baino ez du onartzen. Hortaz operadorea alderantzikagarria da eta Green-en funtzioa existitzen da."
    },
    {
     "mota": "testua",
     "html": "Zuzeneko integrazioak <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mn>2</mn></mfrac><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub></mrow></math> ematen du. Mugekin, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>411</mn><mn>70</mn></mfrac></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>44</mn><mn>35</mn></mfrac></mrow></math>: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mn>2</mn></mfrac><mo>−</mo><mn>137</mn><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>70</mn></mfrac><mo>+</mo><mfrac><mn>44</mn><mrow><mn>35</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Green-en funtzioak <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><msub><mi>G</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>ζ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>ζ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>ζ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> betetzen du. Adar homogeneoak eta mugak erabiliz, <math display=\"inline\"><mrow><mi>G</mi><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ζ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mi>ζ</mi></mrow></math> denean, eta <math display=\"inline\"><mrow><mi>G</mi><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ζ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mi>ζ</mi></mrow></math> denean. Jarraitasunak <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ζ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ζ</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ζ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ζ</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> ematen du. Fluxu-jauzia <math display=\"inline\"><mrow><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>x</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup><msub><mi>G</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>ζ</mi><mo>−</mo></msup><msup><mi>ζ</mi><mo>+</mo></msup></msubsup><mo>=</mo><mn>1</mn></mrow></math> ezarriz, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mfrac><mrow><msup><mi>ζ</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn></mrow><mn>21</mn></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mfrac><mrow><msup><mi>ζ</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn></mrow><mn>21</mn></mfrac></mrow></math>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>ζ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ζ</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn></mrow><mn>21</mn></mfrac><mo>,</mo><mrow><mtext mathvariant=\"normal\">si </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>&lt;</mo><mi>ζ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ζ</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn></mrow><mn>21</mn></mfrac><mo>,</mo><mrow><mtext mathvariant=\"normal\">si </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>&gt;</mo><mi>ζ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Orduan <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>s</mi></mrow></math>, eta bi adarrak integratuta zuzeneko soluzio bera lortzen da."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkiak jarraitasunera arteko eraikuntza egiten du, baina normalizazioa amaitu gabe uzten du. [CORREGIDO: se impone el salto de flujo unitario y se obtiene el factor <math display=\"inline\"><mfrac><mn>1</mn><mn>21</mn></mfrac></math>.] [CORREGIDO: la última línea del papel usa <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> en la integral respecto de <math display=\"inline\"><mi>s</mi></math>; debe ser <math display=\"inline\"><mrow><mi>d</mi><mi>s</mi></mrow></math>.] Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n2_p027.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "Euler motako Sturm-Liouville operadorea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup></mrow></math>, <math display=\"inline\"><mrow><mn>1</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><msup><mi>e</mi><mi>π</mi></msup></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>π</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>Y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>t</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> jarrita, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>Y</mi><mfrac><mi>′</mi><mi>x</mi></mfrac></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mfrac><mrow><msup><mi>Y</mi><mo>″</mo></msup><mo>−</mo><msup><mi>Y</mi><mo>′</mo></msup></mrow><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math>; beraz <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>−</mi><msup><mi>Y</mi><mo>″</mo></msup></mrow></math>. Problema <math display=\"inline\"><mrow><mi>−</mi><msup><mi>Y</mi><mo>″</mo></msup><mo>=</mo><mi>λ</mi><mi>Y</mi></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>t</mi><mo>&lt;</mo><mi>π</mi></mrow></math>, <math display=\"inline\"><mrow><mi>Y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>Y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> bihurtzen da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> kasuek soluzio tribiala baino ez dute. <math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> denean, <math display=\"inline\"><mrow><mi>Y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; mugak <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> ematen dituzte. Hortaz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>π</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Operadorea <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>′</mo></msup></mrow></math> moduan idatz daiteke. <math display=\"inline\"><mi>x</mi></math>-ez zatituta, <math display=\"inline\"><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>′</mo></msup><mo>=</mo><mi>λ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi></mrow></math>; beraz Sturm-Liouville pisua <math display=\"inline\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math> da. Izan ere, <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>1</mn><msup><mi>e</mi><mi>π</mi></msup></msubsup><msub><mi>y</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><msub><mi>y</mi><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi>d</mi><mfrac><mi>x</mi><mi>x</mi></mfrac><mo>=</mo><msub><mi>δ</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: el papel escribe <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> pero declara <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>; la familia completa comienza en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> e incluye <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>.] Bestela baliokidea da <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>, erabiltzea. <math display=\"inline\"><msqrt><mfrac><mn>2</mn><mi>π</mi></mfrac></msqrt></math> normalizazioa eta <math display=\"inline\"><mfrac><mn>1</mn><mi>x</mi></mfrac></math> pisua zuzenak dira. Ikus <code>koadernoa_metodo_n2_p029.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Sturm-Liouville problemaren Green-en funtzioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ebatzi behar da <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><mi>y</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>π</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>λ</mi><msup><mrow><mo>≠</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>…</mi></mrow></math>, denean."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Garapen espektrala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>y</mi><mi>n</mi></msub><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>π</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hartuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>G</mi><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mfrac><mn>2</mn><mrow><mi>π</mi><mi>z</mi></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>λ</mi><mo>−</mo><msubsup><mi>a</mi><mi>n</mi><mn>2</mn></msubsup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi></mrow></math> iturriaren koefizientea <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>1</mn><msup><mi>e</mi><mi>π</mi></msup></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">ln</mi><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mfrac><mi>z</mi><mi>z</mi></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><msubsup><mi>a</mi><mi>n</mi><mn>2</mn></msubsup></mfrac></mrow></math> da; beraz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msubsup><mi>a</mi><mi>n</mi><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msubsup><mi>a</mi><mi>n</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Eraikuntza zuzena"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><msqrt><mi>λ</mi></msqrt></mrow></math> idatzita, muga bakoitza betetzen duten bi adarrak lotuz eta <math display=\"inline\"><mrow><msub><mi>G</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>z</mi><mo>+</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>−</mo><msub><mi>G</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>z</mi><mo>−</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>=</mo><mfrac><mn>1</mn><msup><mi>z</mi><mn>2</mn></msup></mfrac></mrow></math> jauzia ezarriz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mi>z</mi><mo>−</mo><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>a</mi><mi>z</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mi>z</mi></mrow></math> denean, eta <math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo>−</mo><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>a</mi><mi>z</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mi>z</mi></mrow></math> denean. Nukleoa ez da existitzen <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> den autobalioetan."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hasierako Green espektrala eta <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> hasiera zuzenak dira. [CORREGIDO: la reindexación posterior del papel introduce frecuencias <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow></math>; como <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, las frecuencias correctas son <math display=\"inline\"><mfrac><mrow><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac></math>, sin ese factor <math display=\"inline\"><mi>π</mi></math>.] Zuzeneko eraikuntza orri honetan jauzia normalizatu aurretik eteten da eta p033-n ixten da. Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n2_p031.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "Green-en normalizazioa eta soluzio itxia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>G</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>G</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><mi>G</mi><mo>=</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ekuazioan, aurreko bi adarren delta-koefizientea bat eginez, <math display=\"block\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>z</mi><msqrt><mi>λ</mi></msqrt></mrow></mfrac></mrow></math> lortzen da. <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><msqrt><mi>λ</mi></msqrt></mrow></math> laburdurarekin,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mi>z</mi><mo>−</mo><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>a</mi><mi>z</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mrow><mtext mathvariant=\"normal\">si </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>&lt;</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi mathvariant=\"normal\">ln</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo>−</mo><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>a</mi><mi>z</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mrow><mtext mathvariant=\"normal\">si </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>&gt;</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Nukleoa <math display=\"inline\"><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi></mrow></math>-ren aurka integratuta,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>λ</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msqrt><mi>λ</mi></msqrt><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>−</mo><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Formula honek <math display=\"inline\"><mrow><msup><mi>Y</mi><mo>″</mo></msup><mo>+</mo><mi>λ</mi><mi>Y</mi><mo>=</mo><mi>−</mi><mi>t</mi></mrow></math> betetzen du <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> aldagaian, baita <math display=\"inline\"><mrow><mi>Y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>Y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> ere, baldin <math display=\"inline\"><mrow><mi>λ</mi><mo>≠</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> kasua muga bidez edo zuzenean ebatzita:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>π</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><mi>x</mi><mn>2</mn></mfrac><mfrac><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>3</mn></msup><mn>6</mn></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>π</mi><mn>2</mn></msup><mfrac><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkiak jauziaren konstantea, Green osoa, integralak eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> muga zuzen ematen ditu. Autobalioetan, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> eta resolbentea dibergitzen da; orduan Fredholm-en bateragarritasuna behar da. Eskuineko orria hutsik dago. Ikus <code>koadernoa_metodo_n2_p033.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "Uhin kosmologikoa: Bessel-en modu erradialak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math> denean, <math display=\"block\"><mrow><mi>−</mi><mfrac><msub><mi>μ</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>−</mo><mn>3</mn><mfrac><msub><mi>μ</mi><mi>t</mi></msub><mrow><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi></mrow></mfrac><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mfrac><mi>μ</mi><mrow><msup><mi>q</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Simetria axialarekin, <math display=\"inline\"><mrow><msub><mi>μ</mi><mi>φ</mi></msub><mo>=</mo><msub><mi>μ</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>μ</mi><mo>=</mo><mfrac><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ρ</mi><msub><mi>μ</mi><mi>ρ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ρ</mi></msub><mi>ρ</mi></mfrac></mrow></math>. <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bereizita,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>R</mi><mo>″</mo></msup><mo>+</mo><mi>R</mi><mfrac><mi>′</mi><mi>ρ</mi></mfrac><mo>+</mo><mi>λ</mi><mi>R</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>T</mi><mo>″</mo></msup><mo>+</mo><mn>3</mn><mi>T</mi><mfrac><mi>′</mi><mi>t</mi></mfrac><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><mi>λ</mi><mfrac><mi>T</mi><mrow><msup><mi>q</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>R</mi></math>-ren erregulartasunak <math display=\"inline\"><msub><mi>Y</mi><mn>0</mn></msub></math> baztertzen du; <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> baldintzak <math display=\"inline\"><mrow><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><msub><mi>λ</mi><mi>n</mi></msub></msqrt><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> ematen du. <math display=\"inline\"><msub><mi>β</mi><mi>n</mi></msub></math> bada <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math>-ren <math display=\"inline\"><mi>n</mi></math>-garren zero positiboa,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mfrac><msubsup><mi>β</mi><mi>n</mi><mn>2</mn></msubsup><msup><mi>a</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>R</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>β</mi><mi>n</mi></msub><mfrac><mi>ρ</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>-k, erregulartasuna eta muga batera ezarrita, modu tribiala baino ez du; <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>-ko <math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math> adar erregularrak ez du zero positiborik."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>K</mi><mi>n</mi></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mfrac><msubsup><mi>β</mi><mi>n</mi><mn>2</mn></msubsup><mrow><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><msup><mi>t</mi><mi>b</mi></msup></mrow></math> hartuta, <math display=\"inline\"><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>b</mi><mo>+</mo><msub><mi>K</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, hau da, <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msub><mi>K</mi><mi>n</mi></msub></mrow></msqrt></mrow></math>. <math display=\"inline\"><mrow><msub><mi>K</mi><mi>n</mi></msub><mo>&lt;</mo><mn>1</mn></mrow></math> denean bi potentzia erreal beherakor daude. <math display=\"inline\"><mrow><msub><mi>K</mi><mi>n</mi></msub><mo>=</mo><mn>1</mn></mrow></math> kasu kritikoan, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><msup><mi>t</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><mi mathvariant=\"normal\">ln</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. <math display=\"inline\"><mrow><msub><mi>K</mi><mi>n</mi></msub><mo>&gt;</mo><mn>1</mn></mrow></math> denean,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>T</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msup><mi>t</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><msub><mi>K</mi><mi>n</mi></msub><mo>−</mo><mn>1</mn></mrow></msqrt><mi mathvariant=\"normal\">ln</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><msub><mi>K</mi><mi>n</mi></msub><mo>−</mo><mn>1</mn></mrow></msqrt><mi mathvariant=\"normal\">ln</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>β</mi><mi>n</mi></msub><mo>→</mo><mi>∞</mi></mrow></math> denez, indize handiko modu oszilakorrak beti existitzen dira."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Paperak bereizketa, zero ordenako Bessel espektroa eta goi-moduen <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>-ko oszilazioa zuzen ondorioztatzen ditu. Kasu kritikoa ez dago papereko hiru lerroetan esplizituki; erro bikoitzetik hemen jaso da. Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n2_p034.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    }
   ]
  },
  {
   "id": "a37",
   "maila": 2,
   "izenburua": "Uhin kosmologikoa: hasierako datuaren Bessel proiekzioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>ω</mi><mi>n</mi></msub><mo>=</mo><msqrt><mrow><msup><mi>c</mi><mn>2</mn></msup><mfrac><msubsup><mi>β</mi><mi>n</mi><mn>2</mn></msubsup><mrow><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mn>1</mn></mrow></msqrt></mrow></math>. <math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mi>c</mi><mfrac><msub><mi>β</mi><mn>1</mn></msub><mi>q</mi></mfrac></mrow></math> bada, <math display=\"inline\"><msub><mi>β</mi><mi>n</mi></msub></math> gorakorra denez modu guztiak oszilakorrak dira. Soluzio erradiala <math display=\"inline\"><mrow><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>β</mi><mi>n</mi></msub><mfrac><mi>ρ</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>t</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>a</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>n</mi></msub><mi mathvariant=\"normal\">ln</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>b</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>n</mi></msub><mi mathvariant=\"normal\">ln</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> moduen seriea da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>t</mi><mn>0</mn></msub><mo>=</mo><mfrac><mi>a</mi><mi>c</mi></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo>,</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>δ</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>μ</mi><mrow><mi>t</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo>,</mo><mi>ρ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> ezartzen dira. Bessel-en ortogonaltasunak konstantearen koefizientea ematen du: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mi>ρ</mi><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>β</mi><mi>n</mi></msub><mfrac><mi>ρ</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>ρ</mi><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msub><mi>J</mi><mn>1</mn></msub><mfrac><msub><mi>β</mi><mi>n</mi></msub><msub><mi>β</mi><mi>n</mi></msub></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>F</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mfrac><mi>δ</mi><mrow><msub><mi>β</mi><mi>n</mi></msub><msub><mi>J</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>β</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bi hasierako baldintzak batera ebaztean, denborazko modua <math display=\"block\"><mrow><msub><mi>T</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>F</mi><mi>n</mi></msub><mfrac><msub><mi>t</mi><mn>0</mn></msub><mi>t</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>n</mi></msub><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>t</mi><msub><mi>t</mi><mn>0</mn></msub></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>t</mi><msub><mi>t</mi><mn>0</mn></msub></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>n</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da. Hortaz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>β</mi><mi>n</mi></msub><mfrac><mi>ρ</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>F</mi><mi>n</mi></msub><mfrac><msub><mi>t</mi><mn>0</mn></msub><mi>t</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>n</mi></msub><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>t</mi><msub><mi>t</mi><mn>0</mn></msub></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>t</mi><msub><mi>t</mi><mn>0</mn></msub></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>n</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Proiekzio-koefizientea zuzena da. [CORREGIDO: la fórmula enmarcada del papel conserva solo el coseno; así reproduce <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo>,</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>δ</mi></mrow></math> pero da una derivada no nula. Se añade <math display=\"inline\"><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>t</mi><msub><mi>t</mi><mn>0</mn></msub></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>n</mi></msub></mfrac></math> para cumplir <math display=\"inline\"><mrow><msub><mi>μ</mi><mrow><mi>t</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo>,</mo><mi>ρ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>.] Serieak barrualdean konstantea berreskuratzen du eta <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mi>a</mi></mrow></math> mugan zerora doa. Ikus <code>koadernoa_metodo_n2_p035.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a38",
   "maila": 2,
   "izenburua": "Tenperatura egonkorra disko batean eta eraztun batean",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math> diskoan, <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>0</mn></msub></mrow></math>, eta barruko <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>b</mi></mrow></math> zirkuluan <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>φ</mi><mo>≤</mo><mi>π</mi></mrow></math> denean eta <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> <math display=\"inline\"><mrow><mi>π</mi><mo>&lt;</mo><mi>φ</mi><mo>&lt;</mo><mn>2</mn><mi>π</mi></mrow></math> denean. Laplace polarra <math display=\"inline\"><mrow><msub><mi>μ</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>+</mo><mfrac><msub><mi>μ</mi><mi>r</mi></msub><mi>r</mi></mfrac><mo>+</mo><mfrac><msub><mi>μ</mi><mrow><mi>φ</mi><mi>φ</mi></mrow></msub><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>=</mo><mn>0</mn></mrow></math> da."
    },
    {
     "mota": "testua",
     "html": "Muga barruko datuaren Fourier seriea <math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>4</mn><mi>π</mi></mfrac><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mi>n</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bakoitia</mtext></mrow></mrow></munder><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac></mrow></math> da. Zentroan erregularra den barruko soluzioa:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>μ</mi><mo>∈</mo></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>4</mn><mi>π</mi></mfrac><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mi>n</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bakoitia</mtext></mrow></mrow></munder><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>r</mi><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>≤</mo><mi>r</mi><mo>&lt;</mo><mi>b</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ez dago gai konstanterik; balio ertainaren propietatez ere, <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bi erdizirkunferentzietako <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> eta <math display=\"inline\"><mn>1</mn></math> balioen batez bestekoa da: <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Eraztunean, defini dezagun <math display=\"inline\"><mrow><msub><mi>H</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mfrac><mrow><msup><mi>r</mi><mi>n</mi></msup><mo>−</mo><msup><mi>a</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><msup><mi>r</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup></mrow><mrow><msup><mi>b</mi><mi>n</mi></msup><mo>−</mo><msup><mi>a</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><msup><mi>b</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup></mrow></mfrac></mrow></math>; orduan <math display=\"inline\"><mrow><msub><mi>H</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>H</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>. Bi mugak betetzen dituen soluzioa"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>μ</mi><mtext mathvariant=\"normal\">out</mtext></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>0</mn></msub><mfrac><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>r</mi><mi>b</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>a</mi><mi>b</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>−</mo><mfrac><mn>4</mn><mi>π</mi></mfrac><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mi>n</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bakoitia</mtext></mrow></mrow></munder><msub><mi>H</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>&lt;</mo><mi>r</mi><mo>&lt;</mo><mi>a</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkia aldagai-bereizketaren ansatzean amaitzen da; hurrengo orriak beste ariketa bat hasten du. Hemen emaitza muga-datuetatik osatu eta zuzenean egiaztatu da. <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>π</mi></mrow></math> jauzietan serieak bi aldeetako batez bestekora, zerora, konbergitzen du. Ikus <code>koadernoa_metodo_n2_p036.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a39",
   "maila": 1,
   "izenburua": "EDP hiperbolikoa: koordenatu karakteristikoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ekuazioa <math display=\"block\"><mrow><mi>y</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>−</mo><mi>x</mi><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>a</mi><mfrac><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><msub><mi>u</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> da. <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>−</mi><mi>x</mi></mrow></math> konbentzioarekin, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><msup><mi>B</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>A</mi><mi>C</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>. Hiperbolikoa da <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math> denean, paraboloa <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> lerroan, eta guztiz degeneratua <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntuan."
    },
    {
     "mota": "testua",
     "html": "Ekuazio karakteristikoa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>y</mi><mo>−</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mi>d</mi><mi>y</mi><mo>+</mo><mi>x</mi><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> faktorizatzen da; bi invariatzaileak"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ξ</mi><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>η</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Jacobiarra <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da. Deribatuak ordezkatuta, ekuazioa <math display=\"block\"><mrow><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ξ</mi><msub><mi>U</mi><mi>η</mi></msub><mo>=</mo><msup><mrow><mi>η</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> bihurtzen da. <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> denean, <math display=\"inline\"><mrow><mn>2</mn><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>=</mo><mi>−</mi><mi>η</mi></mrow></math>, eta integrazio orokorra"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo>,</mo><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>η</mi><mn>2</mn></msup><mfrac><mi>ξ</mi><mn>4</mn></mfrac><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> gainean <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> ezartzeak <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>s</mi><mn>5</mn></msup><mn>20</mn></mfrac><mo>+</mo><mi>C</mi></mrow></math> ematen du. Baina <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>-tik <math display=\"inline\"><mi>Q</mi></math> ezin da aldi berean <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mn>0</mn></mrow></math> adarretarako funtzio bakarra izan. <math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></math> adarrean <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><msup><mi>η</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup><mn>5</mn></mfrac><mo>−</mo><mi>C</mi></mrow></math>; <math display=\"inline\"><mrow><mi>x</mi><mo>≤</mo><mn>0</mn></mrow></math> adarrean <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>+</mi><mfrac><msup><mi>η</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup><mn>5</mn></mfrac><mo>−</mo><mi>C</mi></mrow></math>. Jatorrian kurba karakteristiko/degeneratu bihurtzen da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>a</mi><mo>≠</mo><mn>1</mn></mrow></math> bada, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><msub><mi>U</mi><mi>η</mi></msub></mrow></math> jarrita lehen ordenako ekuazio lineala geratzen da; faktore integratzailea <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>η</mi><mo>−</mo><msup><mi>ξ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><mn>1</mn><mo>−</mo><mi>a</mi></mrow><mn>2</mn></mfrac></msup></math> da, eta koadraturen bidez ebatz daiteke."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: la solución final del papel con <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>η</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup><mn>5</mn></mfrac><mo>−</mo><mi>C</mi></mrow></math> solo satisface los datos en la rama <math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></math>; para <math display=\"inline\"><mrow><mi>x</mi><mo>≤</mo><mn>0</mn></mrow></math> se necesita el signo opuesto.] <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> kurba karakteristikoa da: <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>-k <math display=\"inline\"><mi>Q</mi></math> konstante izatea eskatzen du, baina <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>-k <math display=\"inline\"><mrow><msup><mi>F</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup></mrow></math> beharko luke, ezinezkoa tarte oso batean. Ikus <code>koadernoa_metodo_n2_p037.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a40",
   "maila": 2,
   "izenburua": "EDP hiperbolikoen forma kanonikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mi>B</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>C</mi><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>D</mi><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mi>E</mi><msub><mi>u</mi><mi>y</mi></msub><mo>+</mo><mi>F</mi><mi>u</mi><mo>=</mo><mi>G</mi></mrow></math> ekuazioan <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>η</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hartuta, bigarren ordenako koefizienteak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mi>A</mi><msubsup><mi>ξ</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><mi>B</mi><msub><mi>ξ</mi><mi>x</mi></msub><msub><mi>ξ</mi><mi>y</mi></msub><mo>+</mo><mi>C</mi><msubsup><mi>ξ</mi><mi>y</mi><mn>2</mn></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mi>A</mi><msubsup><mi>η</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><mi>B</mi><msub><mi>η</mi><mi>x</mi></msub><msub><mi>η</mi><mi>y</mi></msub><mo>+</mo><mi>C</mi><msubsup><mi>η</mi><mi>y</mi><mn>2</mn></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>B</mi><mo>=</mo><mn>2</mn><mi>A</mi><msub><mi>ξ</mi><mi>x</mi></msub><msub><mi>η</mi><mi>x</mi></msub><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ξ</mi><mi>x</mi></msub><msub><mi>η</mi><mi>y</mi></msub><mo>+</mo><msub><mi>ξ</mi><mi>y</mi></msub><msub><mi>η</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><mi>C</mi><msub><mi>ξ</mi><mi>y</mi></msub><msub><mi>η</mi><mi>y</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "dira. Lehen ordenakoak <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mi>A</mi><msub><mi>ξ</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mi>B</mi><msub><mi>ξ</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>C</mi><msub><mi>ξ</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>D</mi><msub><mi>ξ</mi><mi>x</mi></msub><mo>+</mo><mi>E</mi><msub><mi>ξ</mi><mi>y</mi></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>A</mi><msub><mi>η</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mi>B</mi><msub><mi>η</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>C</mi><msub><mi>η</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>D</mi><msub><mi>η</mi><mi>x</mi></msub><mo>+</mo><mi>E</mi><msub><mi>η</mi><mi>y</mi></msub></mrow></math> dira. <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math> aukeratzeak bi familia karakteristikoak ematen ditu."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> kasuan, <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>. Hortaz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mn>4</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>η</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ξ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>+</mo><mn>2</mn><mi>η</mi><msub><mi>U</mi><mi>ξ</mi></msub><mo>−</mo><mn>2</mn><mi>ξ</mi><msub><mi>U</mi><mi>η</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bestalde, 23. ariketan <math display=\"block\"><mrow><mi>y</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>−</mo><mi>x</mi><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><msub><mi>u</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> eta <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> erabilita, <math display=\"inline\"><mrow><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mi>η</mi><mn>2</mn></mfrac></mrow></math>. Soluzio orokorra <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>−</mi><msup><mi>η</mi><mn>2</mn></msup><mfrac><mi>ξ</mi><mn>4</mn></mfrac><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren zuzenketak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: en la llamada «versión correcta», de <math display=\"inline\"><mrow><msup><mi>F</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mn>4</mn></mfrac></mrow></math> se obtiene <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>s</mi><mn>5</mn></msup><mn>20</mn></mfrac><mo>+</mo><mi>C</mi></mrow></math>, no <math display=\"inline\"><mrow><mi>−</mi><mfrac><msup><mi>s</mi><mn>5</mn></msup><mn>20</mn></mfrac><mo>+</mo><mi>C</mi></mrow></math>.] <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-ko bi datuak <math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></math> adarrean betetzeko <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><msup><mi>η</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup><mn>5</mn></mfrac><mo>−</mo><mi>C</mi></mrow></math> behar da; <math display=\"inline\"><mrow><mi>x</mi><mo>≤</mo><mn>0</mn></mrow></math> adarrean zeinua alderantzikatzen da. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> kurba karakteristikoa da, eta ezin ditu Cauchy-ren bi datu arbitrario eraman."
      }
     ]
    }
   ]
  },
  {
   "id": "a41",
   "maila": 2,
   "izenburua": "Koordenatu karakteristikoen hiru adibide",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Lehenengo ekuazioan, <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>3</mn><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>−</mo><mn>4</mn><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mn>4</mn><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mn>4</mn><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math> dira invariatzaileak. Ekuazioa <math display=\"inline\"><mrow><mn>25</mn><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>+</mo><mn>5</mn><msub><mi>U</mi><mi>η</mi></msub><mo>=</mo><mn>0</mn></mrow></math> bihurtzen da, eta"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>5</mn></mfrac></msup><mo>+</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bigarrenean, <math display=\"inline\"><mrow><mn>4</mn><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>5</mn><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>p</mi></msub><mo>=</mo><mn>2</mn><mi>y</mi></mrow></math> partikularra da. Sustrai karakteristikoak <math display=\"inline\"><mn>1</mn></math> eta <math display=\"inline\"><mfrac><mn>1</mn><mn>4</mn></mfrac></math> dira; beraz, <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mn>4</mn><mi>y</mi><mo>−</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi></mrow></math>. Zati homogeneorako <math display=\"inline\"><mrow><mi>−</mi><mn>9</mn><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>+</mo><mn>3</mn><msub><mi>U</mi><mi>ξ</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, eta"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mfrac><mrow><mi>y</mi><mo>−</mo><mi>x</mi></mrow><mn>3</mn></mfrac></msup><mo>+</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>y</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hirugarren ekuazioan, <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>y</mi><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math> hartzen dira. Jacobiarra <math display=\"inline\"><mi>x</mi></math> denez, aldaketa <math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mn>0</mn></mrow></math> eskualdean baino ez da baliagarria. Han <math display=\"inline\"><mrow><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: en el segundo ejemplo la característica escrita <math display=\"inline\"><mrow><mi>y</mi><mo>−</mo><mn>4</mn><mi>x</mi></mrow></math> no corresponde a la raíz <math display=\"inline\"><mfrac><mn>1</mn><mn>4</mn></mfrac></math>; la invariante correcta es <math display=\"inline\"><mrow><mn>4</mn><mi>y</mi><mo>−</mo><mi>x</mi></mrow></math>.] Hirugarren EDPa hiperbolikoa da <math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mn>0</mn></mrow></math> denean, paraboloa <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math> puntuetarako, eta guztiz degeneratua jatorrian."
      }
     ]
    }
   ]
  },
  {
   "id": "a42",
   "maila": 2,
   "izenburua": "Adbekzio-difusioa eta muga ez-homogeneoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Problema hau da: <math display=\"block\"><mrow><msub><mi>φ</mi><mi>t</mi></msub><mo>=</mo><msub><mi>φ</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>φ</mi><mi>x</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>π</mi><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>t</mi><mo>+</mo><mn>2</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mfrac><mi>x</mi><mi>π</mi></mfrac></mrow></math>. Mugak eta hasierako datua betetzen dituen <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mfrac><mi>x</mi><mi>π</mi></mfrac><mo>+</mo><mn>2</mn><mi>t</mi></mrow></math> aukeratu eta <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi>z</mi><mo>+</mo><mi>v</mi></mrow></math> idazten da. Orduan <math display=\"inline\"><mrow><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Baina <math display=\"inline\"><mrow><msub><mi>v</mi><mi>t</mi></msub><mo>−</mo><msub><mi>v</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>−</mo><mn>2</mn><msub><mi>v</mi><mi>x</mi></msub><mo>=</mo><mn>2</mn><mo>−</mo><mfrac><mn>4</mn><mi>π</mi></mfrac></mrow></math> denez, geratzen den ekuazioa"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>z</mi><mi>t</mi></msub><mo>=</mo><msub><mi>z</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>z</mi><mi>x</mi></msub><mo>+</mo><mfrac><mn>4</mn><mi>π</mi></mfrac><mo>−</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "da. Operadore homogeneoaren bereizketan <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math> lortzen dira; denborazko faktorea <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow></msup></math> da. Behartze konstantea <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math> pisuarekin proiektatu behar da, eta Duhamel-en formulak koefiziente modalak ematen ditu."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>2</mn><mfrac><mi>x</mi><mi>π</mi></mfrac><mo>+</mo><mn>2</mn><mi>t</mi></mrow></math> satisface los tres datos, pero no la EDP; en el manuscrito falta el término constante <math display=\"inline\"><mrow><mfrac><mn>4</mn><mi>π</mi></mfrac><mo>−</mo><mn>2</mn></mrow></math> en la ecuación de <math display=\"inline\"><mi>z</mi></math>.] Ondorioz, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi>v</mi></mrow></math> ez dira jatorrizko problemaren soluzioa."
      }
     ]
    }
   ]
  },
  {
   "id": "a43",
   "maila": 2,
   "izenburua": "Mutur finkoetako uhin-ekuazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi></mrow></math>, ekuazioari <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ezartzen zaizkio. <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>X</mi><mi>T</mi></mrow></math> bereizketak <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>−</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>T</mi><mo>″</mo></msup><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><mi>λ</mi><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> ematen ditu. Dirichlet-en modu ez-trivialak <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup></mrow></math> dira."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>n</mi><mi>π</mi><mfrac><mi>t</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>n</mi><mi>π</mi><mfrac><mi>t</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Orriaren izendapenari eutsita, <math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mrow><mi>c</mi><mi>n</mi><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>. Ortogonalitateak <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>δ</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub></mrow></math> ematen du."
    },
    {
     "mota": "oharra",
     "titulua": "Bateragarritasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Soluzio klasikorako <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> behar da eta, erregulartasun nahikoarekin, baita <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> ere. Koefizienteen <math display=\"inline\"><mfrac><mi>A</mi><mi>B</mi></mfrac></math> izenak ohikoen alderantziz daude, baina orriaren kalkulua barne-koherentea da."
      }
     ]
    }
   ]
  },
  {
   "id": "a44",
   "maila": 2,
   "izenburua": "Uhin behartua muga mistoekin",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>7</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>7</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>V</mi><mo>+</mo><mi>w</mi><mo>+</mo><mi>z</mi></mrow></math> hartu eta <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>7</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aukeratuta,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>V</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>V</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>V</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>7</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Moduak <math display=\"inline\"><mrow><msub><mi>k</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dira. Beraz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>C</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>n</mi></msub><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>D</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>n</mi></msub><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mi>x</mi><mo>+</mo><mn>7</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>56</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mfrac></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>D</mi><mi>n</mi></msub><mo>=</mo><mn>32</mn><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mfrac></mrow></math>. Norma <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><msubsup><mi>X</mi><mi>n</mi><mn>2</mn></msubsup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow></math> da. Serieak EDPa, bi mugak eta bi hasierako datuak berreraikitzen ditu Fourier-en zentzuan."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Orriaren koefiziente biak kalkulu independentez berresten dira; ez da zuzenketa matematiko behartu behar izan."
      }
     ]
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "Bero-difusio erradiala esfera batean",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Simetria erradialarekin, <math display=\"inline\"><mrow><msub><mi>T</mi><mi>t</mi></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>+</mo><mfrac><mn>2</mn><mi>r</mi></mfrac><msub><mi>T</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>r</mi><mo>&lt;</mo><mi>R</mi></mrow></math>. Azaleko baldintza <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> eta zentroko erregulartasuna hartzen dira; hasierako datua <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>0</mn></msub><mfrac><mi>R</mi><mi>r</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mfrac><mi>r</mi><mi>R</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>r</mi><mi>T</mi></mrow></math> ordezkapenean <math display=\"inline\"><mrow><msub><mi>T</mi><mi>r</mi></msub><mo>=</mo><mfrac><msub><mi>S</mi><mi>r</mi></msub><mi>r</mi></mfrac><mo>−</mo><mfrac><mi>S</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>T</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>=</mo><mfrac><msub><mi>S</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mi>r</mi></mfrac><mo>−</mo><mn>2</mn><mfrac><msub><mi>S</mi><mi>r</mi></msub><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>+</mo><mn>2</mn><mfrac><mi>S</mi><msup><mi>r</mi><mn>3</mn></msup></mfrac></mrow></math>. Hortaz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>S</mi><mi>t</mi></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>S</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Moduak <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>r</mi><mi>R</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dira. Hasierako datua lehen modua denez,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>0</mn></msub><mfrac><mi>R</mi><mi>r</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mfrac><mi>r</mi><mi>R</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>c</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mfrac><mi>t</mi><msup><mi>R</mi><mn>2</mn></msup></mfrac></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Zentroko limitea <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>0</mn></msub><mi>π</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>c</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mfrac><mi>t</mi><msup><mi>R</mi><mn>2</mn></msup></mfrac></mrow></msup></mrow></math> da."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren osaketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: el manuscrito deja el lugar de la condición <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> sin escribir; la solución se completa bajo la lectura natural <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>.] Argazkia bereizketaren hasieran amaitzen da; hemen lehen moduaren ondorioa osatu da."
      }
     ]
    }
   ]
  },
  {
   "id": "a46",
   "maila": 2,
   "izenburua": "Laplace-ren ekuazio esferikoa eta Legendre-ren polinomioak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Simetria axisimetrikoko eremu harmonikoaren forma orokorra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>ℓ</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mi>ℓ</mi></msub><msup><mi>r</mi><mi>ℓ</mi></msup><mo>+</mo><msub><mi>B</mi><mi>ℓ</mi></msub><msup><mi>r</mi><mrow><mi>−</mi><mi>ℓ</mi><mo>−</mo><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>P</mi><mrow><mi>ℓ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da. Jatorria barne duen esfera batean erregulartasunak <math display=\"inline\"><mrow><msub><mi>B</mi><mi>ℓ</mi></msub><mo>=</mo><mn>0</mn></mrow></math> eskatzen du. <math display=\"inline\"><mi>R</mi></math> erradioko planetaren azaleko tenperatura <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math> bada,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msub><mi>P</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msub><mi>P</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, <math display=\"inline\"><mrow><msub><mi>A</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mrow><mn>3</mn><msup><mi>R</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>, eta gainerakoak zero dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>−</mo><mn>2</mn><mfrac><msup><mi>r</mi><mn>2</mn></msup><mrow><mn>3</mn><msup><mi>R</mi><mn>2</mn></msup></mrow></mfrac><msub><mi>P</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Forma baliokidea <math display=\"inline\"><mrow><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>−</mo><mfrac><msup><mi>r</mi><mn>2</mn></msup><mrow><mn>6</mn><msup><mi>R</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><msup><mi>r</mi><mn>2</mn></msup><mrow><mn>2</mn><msup><mi>R</mi><mn>2</mn></msup></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da. Mugako datua zehazki berreskuratzen du, eta <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math> gainazaleko batezbestekoarekin bat dator."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Legendre-ren hedapena, erregulartasun-irizpidea eta koefizienteak zuzenak dira; ez da zuzenketa matematiko behartu behar izan."
      }
     ]
    }
   ]
  },
  {
   "id": "a47",
   "maila": 1,
   "izenburua": "Zatika definitutako funtzio baten Fourier-en seriea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>L</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> tartean, argazkiko profila <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>L</mi></mrow></math> da <math display=\"inline\"><mrow><mi>−</mi><mi>L</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>0</mn></mrow></math> denean, eta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>L</mi></mrow></math> da <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi></mrow></math> denean. <math display=\"inline\"><mrow><mn>2</mn><mi>L</mi></mrow></math> periodoko <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mo>+</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> konbentzioa erabiltzen da."
    },
    {
     "mota": "testua",
     "html": "Koefizienteak hauek dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>A</mi><mn>0</mn></msub><mo>=</mo><mi>L</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>L</mi></mrow><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><mi>L</mi><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>A</mi><mi>n</mi></msub></math> koefizienteak indize bakoitietan bakarrik dira ez-nuluak, eta <math display=\"inline\"><msub><mi>B</mi><mi>n</mi></msub></math> bikoitietan bakarrik. <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> puntuan aukeratutako balioak ez ditu integralak aldatzen: seriea aldeetako limiteen batezbestekora, <math display=\"inline\"><mfrac><mi>L</mi><mn>2</mn></mfrac></math>-ra, konbergitzen da. Hedapen periodikoaren muturretan limiteen batezbestekoa <math display=\"inline\"><mrow><mn>3</mn><mfrac><mi>L</mi><mn>2</mn></mfrac></mrow></math> da."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Batezbestekoa eta bi koefiziente-familiak zatika integratuz berresten dira; ez da zuzenketa matematiko behartu behar izan."
      }
     ]
    }
   ]
  },
  {
   "id": "a48",
   "maila": 2,
   "izenburua": "Periodikotasuna, paritatea eta ortogonalitatea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bada, <math display=\"inline\"><mi>T</mi></math> periodoa da; bi funtziok <math display=\"inline\"><mi>T</mi></math> partekatzen badute, haien baturak eta biderkadurak ere <math display=\"inline\"><mi>T</mi></math> periodoa dute, nahiz eta oinarrizko periodoa txikiagoa izan. Funtzio bikoitiaren eta bakoitiaren biderkadura bakoitia da; bi paritate berdinen biderkadura bikoitia."
    },
    {
     "mota": "testua",
     "html": "Produktu-batura identitateek Fourier-en familien ortogonalitatea ematen dute. <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>L</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> tartean,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>L</mi></mrow><mi>L</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>2</mn><mi>L</mi></mrow></math> da <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>m</mi><mo>=</mo><mn>0</mn></mrow></math> denean, <math display=\"inline\"><mi>L</mi></math> da <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>m</mi><mo>≥</mo><mn>1</mn></mrow></math> denean, eta zero gainerakoan. Era berean, sinu-sinu integralak <math display=\"inline\"><mi>L</mi></math> balio du <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>m</mi><mo>≥</mo><mn>1</mn></mrow></math> denean eta zero bestela; sinu-kosinu produktua bakoitia denez, beti zero da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> tartean kosinu-kosinu eta sinu-sinu normak <math display=\"inline\"><mfrac><mi>L</mi><mn>2</mn></mfrac></math> dira modu positibo berdinetarako; kosinu konstantearen norma <math display=\"inline\"><mi>L</mi></math> da."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> la familia seno-coseno no es ortogonal para todos los índices; la tabla final del papel es falsa. Por ejemplo, para índices de paridad opuesta la integral puede ser no nula.] Ortogonalitate gurutzatu automatikoa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>L</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> tarte simetrikoan dago."
      }
     ]
    }
   ]
  },
  {
   "id": "a49",
   "maila": 2,
   "izenburua": "Sinu- eta kosinu-serien adibideak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Semitartetik egindako hedapen bakoitirako, <math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>. Argazkiko lehen profilean <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>, eta <math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mfrac><msup><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mi>n</mi><mi>π</mi></mrow></mfrac></mrow></math>. Hirugarren profilean <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>L</mi><mo>−</mo><mi>x</mi></mrow></math>, eta <math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mfrac><mi>L</mi><mrow><mi>n</mi><mi>π</mi></mrow></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Laugarren adibideko koefizientea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mo>+</mo><mn>4</mn><msup><mi>L</mi><mn>2</mn></msup><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><msup><mi>n</mi><mn>3</mn></msup><msup><mi>π</mi><mn>3</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da. Bosgarren datu zatituarentzat,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mi>L</mi><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mo>−</mo><mn>2</mn><mi>L</mi><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>A</mi><mn>0</mn></msub><mo>=</mo><mn>3</mn><mfrac><mi>L</mi><mn>8</mn></mfrac></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mi>L</mi><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mo>+</mo><mn>2</mn><mi>L</mi><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Konbergentzia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mi>L</mi><mn>2</mn></mfrac></mrow></math>-ko balio isolatuak ez ditu koefizienteak aldatzen. Bi serieek han aldeetako limiteen batezbestekora, <math display=\"inline\"><mfrac><mi>L</mi><mn>4</mn></mfrac></math>-ra, konbergitzen dute. Formulak argazkiko bost kalkuluen integrazioz berresten dira."
      }
     ]
    }
   ]
  },
  {
   "id": "a50",
   "maila": 2,
   "izenburua": "Bero-ekuazioa eta hasierako profil triangeluarra",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math> ekuazioan, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>L</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> tarteko hasierako profila bikoitia da: oinarria <math display=\"inline\"><mi>L</mi></math>, altuera <math display=\"inline\"><mfrac><mi>L</mi><mn>2</mn></mfrac></math> eta azalera <math display=\"inline\"><mfrac><msup><mi>L</mi><mn>2</mn></msup><mn>4</mn></mfrac></math> dituen triangelua. <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mfrac><mi>L</mi><mn>2</mn></mfrac></mrow></math> denean, eta zero gainerakoan."
    },
    {
     "mota": "testua",
     "html": "Kosinu-seriaren koefizienteak <math display=\"inline\"><mrow><msub><mi>A</mi><mn>0</mn></msub><mo>=</mo><mfrac><mi>L</mi><mn>8</mn></mfrac></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mi>L</mi><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> dira. Hortaz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>L</mi><mn>8</mn></mfrac><mo>+</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>L</mi><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mfrac><mi>t</mi><msup><mi>L</mi><mn>2</mn></msup></mfrac></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean Fourier-en zentzuan profila berreskuratzen da. <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> modua konstantea da eta batezbesteko termikoa gordetzen du; <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math> denean beste modu guztiak iraungi, eta <math display=\"inline\"><mi>u</mi></math> uniformeki <math display=\"inline\"><mfrac><mi>L</mi><mn>8</mn></mfrac></math>-ra doa."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Paritateak, triangeluaren azalera eta kosinu-integralak orriaren formula osoa berresten dute."
      }
     ]
    }
   ]
  },
  {
   "id": "a51",
   "maila": 2,
   "izenburua": "Cauchy-ren problema hiperbolikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>3</mn><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>x</mi></mrow></math>. Diskriminantea <math display=\"inline\"><mn>1</mn></math> da, eta bi invariatzaileak <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mi>y</mi><mo>−</mo><mn>2</mn><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi></mrow></math> dira. Aldaketak <math display=\"inline\"><mrow><mi>−</mi><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ematen du."
    },
    {
     "mota": "testua",
     "html": "Bi aldiz integratuta, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>ξ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Hasierako datuek <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><msup><mi>s</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo>−</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo>+</mo><msub><mi>C</mi><mi>B</mi></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo>+</mo><msub><mi>C</mi><mi>A</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mi>A</mi></msub><mo>+</mo><msub><mi>C</mi><mi>B</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, ematen dituzte."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>y</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mn>4</mn></mfrac><mo>−</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo>+</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> gainean <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mi>x</mi></mrow></math> lortzen dira; soluzioa operadorean ordezkatzeak <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> itzultzen du. Orriko azken lerroaren baliokidea da."
      }
     ]
    }
   ]
  },
  {
   "id": "a52",
   "maila": 2,
   "izenburua": "EDP hiperbolikoa eta Green-en funtzioa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aldagai-koefizientedun ekuazioa"
    },
    {
     "mota": "testua",
     "html": "Argazkiko ekuazioaren sinbolo nagusiak <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mrow></math> diskriminantea du. <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math> eskualdeetan <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math> dira invariatzaileak, eta operadorea <math display=\"inline\"><mrow><mi>ξ</mi><mi>η</mi><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>−</mo><mi>ξ</mi><msub><mi>U</mi><mi>ξ</mi></msub></mrow></math> bihurtzen da. Eskuinekoa <math display=\"inline\"><mrow><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math> denez, <math display=\"inline\"><mrow><mi>η</mi><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>−</mo><msub><mi>U</mi><mi>ξ</mi></msub><mo>=</mo><mi>a</mi><mi>η</mi></mrow></math>. <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><msub><mi>U</mi><mi>ξ</mi></msub></mrow></math> jarrita, <math display=\"inline\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>V</mi><mi>η</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>η</mi></msub><mo>=</mo><mfrac><mi>a</mi><mi>η</mi></mfrac></mrow></math>, eta"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mi>x</mi><mi>y</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bigarren ordenako problema eta Green-en nukleoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mfrac><mn>2</mn><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mn>2</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mrow></math>, baldintzekin <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>γ</mi><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Soluzio homogeneo bateragarria <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da; beraz, nukleo ez-triviala <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mi>−</mi><mfrac><mn>3</mn><mn>4</mn></mfrac></mrow></math> denean soilik dago, eta bakartasuna <math display=\"inline\"><mrow><mi>γ</mi><mo>≠</mo><mi>−</mi><mfrac><mn>3</mn><mn>4</mn></mfrac></mrow></math> denean."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math> kasuan, <math display=\"inline\"><mrow><mi>L</mi><mi>G</mi><mo>=</mo><mi>δ</mi></mrow></math> konbentzioarekin,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><msup><mi>ξ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>ξ</mi><mo>−</mo><mn>3</mn></mrow><mrow><mn>6</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&lt;</mo><mi>ξ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mrow><mi>ξ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>6</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&gt;</mo><mi>ξ</mi></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren zuzenketak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: el manuscrito cambia <math display=\"inline\"><mi>η</mi></math> por <math display=\"inline\"><mi>ξ</mi></math> al integrar la primera EDP; su familia no satisface la ecuación.] [CORREGIDO: en Green se invierten el signo del salto y un factor; la función escrita arriba cumple las dos fronteras, continuidad y <math display=\"inline\"><mrow><msubsup><mi>G</mi><mo>+</mo><mo>′</mo></msubsup><mo>−</mo><msubsup><mi>G</mi><mo>−</mo><mo>′</mo></msubsup><mo>=</mo><mn>1</mn></mrow></math>.] p058 probabilitate-ariketekin hasten da eta ez du kalkulu hau zuzentzen."
      }
     ]
    }
   ]
  },
  {
   "id": "a53",
   "maila": 2,
   "izenburua": "Probabilitate osoa eta Bayes-en teorema",
   "blokeak": [
    {
     "mota": "testua",
     "html": "5. ariketan, enuntziatua argazkitik kanpo dago. Zuhaitzean ageri diren bi adarrek <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac></mrow></math> ematen dute; beraz, <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>=</mo><mfrac><mn>5</mn><mn>12</mn></mfrac></mrow></math>. Kalkulua zuzena da, baina ezin da egiaztatu ea falta den galderari erantzuten dion."
    },
    {
     "mota": "testua",
     "html": "7. ariketan, gaixotasunaren prebalentzia <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0.001</mn></mrow></math> da, sentikortasuna <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.95</mn></mrow></math>, eta positibo faltsuen tasa <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>¬</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.05</mn></mrow></math>. Hortaz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0.95</mn><mo>⋅</mo><mn>0.001</mn><mo>+</mo><mn>0.05</mn><mo>⋅</mo><mn>0.999</mn><mo>=</mo><mn>0.0509</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>0.95</mn><mo>⋅</mo><mn>0.001</mn></mrow><mn>0.0509</mn></mfrac><mo>=</mo><mfrac><mn>19</mn><mn>1018</mn></mfrac><mo>≈</mo><mn>0.01866</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Test positiboa izanda ere, atzeko probabilitatea gutxi gorabehera <math display=\"inline\"><mrow><mn>1.87</mn><mi>%</mi></mrow></math> da, oinarrizko prebalentzia oso txikia delako."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren osaketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: el manuscrito deja en blanco el cociente final de Bayes; se completa con <math display=\"inline\"><mfrac><mn>19</mn><mn>1018</mn></mfrac></math>.] p059 beste problema batekin hasten da."
      }
     ]
    }
   ]
  },
  {
   "id": "a54",
   "maila": 2,
   "izenburua": "Geiger kontagailua: pioiak eta kaoiak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Izpi-sortan <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0.9</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0.1</mn></mrow></math> dira. Detekzio-probabilitateak <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.95</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>K</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.05</mn></mrow></math> dira. Orduan <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0.95</mn><mo>⋅</mo><mn>0.9</mn><mo>+</mo><mn>0.05</mn><mo>⋅</mo><mn>0.1</mn><mo>=</mo><mn>0.86</mn></mrow></math>, eta"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>D</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>0.855</mn><mn>0.86</mn></mfrac><mo>=</mo><mfrac><mn>171</mn><mn>172</mn></mfrac><mo>≈</mo><mn>0.99419</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ez-detekzioaren probabilitatea <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>¬</mo><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0.05</mn><mo>⋅</mo><mn>0.9</mn><mo>+</mo><mn>0.95</mn><mo>⋅</mo><mn>0.1</mn><mo>=</mo><mn>0.14</mn></mrow></math> da. Beraz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>¬</mo><mi>D</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>0.095</mn><mn>0.14</mn></mfrac><mo>=</mo><mfrac><mn>19</mn><mn>28</mn></mfrac><mo>≈</mo><mn>0.67857</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: si <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>K</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.05</mn></mrow></math>, el complemento es <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>K</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.95</mn></mrow></math>, no <math display=\"inline\"><mn>0.94</mn></math> como aparece en una rama del papel.] Bi Bayes-en zatidurak argazkian amaitu gabe daude; hemen emaitza zehatz eta hamartarrak osatu dira."
      }
     ]
    }
   ]
  },
  {
   "id": "a55",
   "maila": 1,
   "izenburua": "Laplace-ren ekuazioa bi esfera zentrokideren artean",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>&lt;</mo><mi>r</mi><mo>&lt;</mo><msub><mi>r</mi><mn>2</mn></msub></mrow></math> geruzan, simetria axisimetrikoarekin, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>ℓ</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>∞</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>A</mi><mi>ℓ</mi></msub><msup><mi>r</mi><mi>ℓ</mi></msup><mo>+</mo><msub><mi>B</mi><mi>ℓ</mi></msub><msup><mi>r</mi><mrow><mi>−</mi><mi>ℓ</mi><mo>−</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><msub><mi>P</mi><mrow><mi>ℓ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>. Mugak <math display=\"inline\"><mrow><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>1</mn></msub><mo>,</mo><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>T</mi><mn>0</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>2</mn></msub><mo>,</mo><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dira; beraz, <math display=\"inline\"><mrow><mi>ℓ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math> moduak bakarrik agertzen dira."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>A</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mi>T</mi><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>0</mn></msub><msub><mi>r</mi><mn>1</mn></msub></mrow><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>r</mi><mn>1</mn></msub></mrow></mfrac></mrow></math>, <math display=\"inline\"><mrow><msub><mi>B</mi><mn>0</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>0</mn></msub><mo>−</mo><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>r</mi><mn>1</mn></msub><mfrac><msub><mi>r</mi><mn>2</mn></msub><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>r</mi><mn>1</mn></msub></mrow></mfrac></mrow></math>, <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi>T</mi><mfrac><msubsup><mi>r</mi><mn>2</mn><mn>2</mn></msubsup><mrow><msubsup><mi>r</mi><mn>2</mn><mn>3</mn></msubsup><mo>−</mo><msubsup><mi>r</mi><mn>1</mn><mn>3</mn></msubsup></mrow></mfrac></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mi>T</mi><msubsup><mi>r</mi><mn>1</mn><mn>3</mn></msubsup><mfrac><msubsup><mi>r</mi><mn>2</mn><mn>2</mn></msubsup><mrow><msubsup><mi>r</mi><mn>2</mn><mn>3</mn></msubsup><mo>−</mo><msubsup><mi>r</mi><mn>1</mn><mn>3</mn></msubsup></mrow></mfrac></mrow></math>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mrow><mi>T</mi><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>0</mn></msub><msub><mi>r</mi><mn>1</mn></msub></mrow><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>r</mi><mn>1</mn></msub></mrow></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>0</mn></msub><mo>−</mo><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>r</mi><mn>1</mn></msub><mfrac><msub><mi>r</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>r</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mi>T</mi><msubsup><mi>r</mi><mn>2</mn><mn>2</mn></msubsup><mfrac><mi>r</mi><mrow><msubsup><mi>r</mi><mn>2</mn><mn>3</mn></msubsup><mo>−</mo><msubsup><mi>r</mi><mn>1</mn><mn>3</mn></msubsup></mrow></mfrac><mo>+</mo><mi>T</mi><msubsup><mi>r</mi><mn>1</mn><mn>3</mn></msubsup><mfrac><msubsup><mi>r</mi><mn>2</mn><mn>2</mn></msubsup><mrow><msup><mi>r</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>r</mi><mn>2</mn><mn>3</mn></msubsup><mo>−</mo><msubsup><mi>r</mi><mn>1</mn><mn>3</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: el papel usa <math display=\"inline\"><msub><mi>r</mi><mn>2</mn></msub></math> donde debía usar <math display=\"inline\"><msub><mi>r</mi><mn>1</mn></msub></math> al despejar <math display=\"inline\"><msub><mi>A</mi><mn>0</mn></msub></math> y mezcla los modos <math display=\"inline\"><mrow><mi>ℓ</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>ℓ</mi><mo>=</mo><mn>1</mn></mrow></math>.] Goiko formulak <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub></mrow></math>-en <math display=\"inline\"><msub><mi>T</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>2</mn></msub></mrow></math>-n <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> berreskuratzen ditu."
      }
     ]
    }
   ]
  },
  {
   "id": "a56",
   "maila": 2,
   "izenburua": "Mintz zirkular axisimetrikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>+</mo><msup><mi>r</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msub><mi>u</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>r</mi><mo>&lt;</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>. Bereizketak <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><msup><mi>R</mi><mo>″</mo></msup><mo>+</mo><mi>r</mi><msup><mi>R</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><msup><mi>r</mi><mn>2</mn></msup><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math> ematen du. Zentroko erregulartasunak <math display=\"inline\"><msub><mi>Y</mi><mn>0</mn></msub></math> kentzen du, eta mugak <math display=\"inline\"><mrow><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> eskatzen du."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>A</mi><mi>n</mi></msub><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><msub><mi>α</mi><mi>n</mi></msub><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "non, <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math>-ren <math display=\"inline\"><msub><mi>α</mi><mi>n</mi></msub></math> zeroetarako,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><msup><mrow><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>r</mi></mrow><msub><mi>J</mi><mn>1</mn></msub></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>16</mn><msub><mi>J</mi><mn>3</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><msubsup><mi>α</mi><mi>n</mi><mn>3</mn></msubsup><msub><mi>J</mi><mn>1</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Erabilitako norma <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>r</mi><msub><mi>J</mi><mn>0</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>r</mi><mo>=</mo><msub><mi>J</mi><mn>1</mn></msub><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mn>2</mn></mfrac></mrow></math> da. Kosinu denboralak hasierako abiadura nulua ematen du, eta modu bakoitzak muga betetzen du."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bessel-en identitateekin bi integrazio eginda, orriko azken koefizientea zehazki berreskuratzen da."
      }
     ]
    }
   ]
  },
  {
   "id": "a57",
   "maila": 2,
   "izenburua": "Sektore zirkularreko uhina eta Laplace-ren ekuazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>θ</mi><mo>&lt;</mo><mfrac><mi>π</mi><mn>6</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>r</mi><mo>&lt;</mo><mi>a</mi></mrow></math> sektorean, mintzaren Dirichlet baldintzek <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mfrac><mi>π</mi><mn>6</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> ematen dute; hortaz, <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>6</mn><mi>k</mi></mrow></math>, <math display=\"inline\"><mrow><mi>k</mi><mo>≥</mo><mn>1</mn></mrow></math>. Zentroko erregulartasunak <math display=\"inline\"><msub><mi>Y</mi><mrow><mn>6</mn><mi>k</mi></mrow></msub></math> kentzen du eta <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>a</mi></mrow></math> mugak <math display=\"inline\"><mrow><msub><mi>J</mi><mrow><mn>6</mn><mi>k</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mrow><mn>6</mn><mi>k</mi><mo>,</mo><mi>n</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> eskatzen du. Frekuentziak <math display=\"inline\"><mrow><msub><mi>ω</mi><mrow><mi>k</mi><mo>,</mo><mi>n</mi></mrow></msub><mo>=</mo><mi>v</mi><mfrac><msub><mi>q</mi><mrow><mn>6</mn><mi>k</mi><mo>,</mo><mi>n</mi></mrow></msub><mi>a</mi></mfrac></mrow></math> dira, eta oinarrizkoa <math display=\"inline\"><mrow><msub><mi>ω</mi><mrow><mn>1</mn><mo>,</mo><mn>1</mn></mrow></msub><mo>=</mo><mi>v</mi><mfrac><msub><mi>q</mi><mrow><mn>6</mn><mo>,</mo><mn>1</mn></mrow></msub><mi>a</mi></mfrac></mrow></math>, <math display=\"inline\"><mrow><msub><mi>q</mi><mrow><mn>6</mn><mo>,</mo><mn>1</mn></mrow></msub><mo>≈</mo><mn>9.9361</mn></mrow></math>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mo>∑</mo><mrow><mi>k</mi><mo>,</mo><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></msub><msub><mi>J</mi><mrow><mn>6</mn><mi>k</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mrow><mn>6</mn><mi>k</mi><mo>,</mo><mi>n</mi></mrow></msub><mfrac><mi>r</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>k</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mrow><mi>k</mi><mo>,</mo><mi>n</mi></mrow></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mrow><mi>k</mi><mo>,</mo><mi>n</mi></mrow></msub><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mrow><mi>k</mi><mo>,</mo><mi>n</mi></mrow></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mrow><mi>k</mi><mo>,</mo><mi>n</mi></mrow></msub><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Orriaren bigarren arazoan, Laplace-ren ekuazioak <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>C</mi><msup><mi>r</mi><mrow><mn>6</mn><mi>k</mi></mrow></msup><mo>+</mo><mi>D</mi><msup><mi>r</mi><mrow><mi>−</mi><mn>6</mn><mi>k</mi></mrow></msup></mrow></math> ematen du. Domeinuak jatorria barne hartzen duenez, erregulartasunak <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math> ezartzen du; p065 orriak jarraipena eta mugako koefizienteak ematen ditu."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: la reconstrucción temporal final repite dos senos; deben conservarse las dos soluciones independientes coseno y seno.]"
      }
     ]
    }
   ]
  },
  {
   "id": "a58",
   "maila": 2,
   "izenburua": "Laplace-ren problema sektore batean",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>r</mi><mo>&lt;</mo><mi>a</mi></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>θ</mi><mo>&lt;</mo><mfrac><mi>π</mi><mn>6</mn></mfrac></mrow></math> sektorean <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> da, eta <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mfrac><mi>π</mi><mn>6</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>θ</mi></mrow></math>. Modu angeluarrak <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>k</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dira. Jatorriko erregulartasunak <math display=\"inline\"><msup><mi>r</mi><mrow><mi>−</mi><mn>6</mn><mi>k</mi></mrow></msup></math> adarra kentzen du."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>θ</mi></math>-ren sinu-seriako koefizientea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mfrac><mrow><msubsup><mo>∫</mo><mn>0</mn><mfrac><mi>π</mi><mn>6</mn></mfrac></msubsup><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>k</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>θ</mi></mrow><mrow><msubsup><mo>∫</mo><mn>0</mn><mfrac><mi>π</mi><mn>6</mn></mfrac></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>k</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mn>3</mn><mi>k</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da. Beraz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mn>3</mn><mi>k</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>r</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>6</mn><mi>k</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>k</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Serieak bi ertz erradialetan zero ematen du, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>a</mi></mrow></math>-n <math display=\"inline\"><mi>θ</mi></math>-ren sinu-seriea berreskuratzen du, eta termino bakoitza harmonikoa da."
    },
    {
     "mota": "oharra",
     "titulua": "Jarraipen egiaztatua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Orri honek p063-p064ko erregulartasun-galdera ixten du: adar singularra esplizituki ezabatzen da."
      }
     ]
    }
   ]
  },
  {
   "id": "a59",
   "maila": 2,
   "izenburua": "Probabilitate eta estatistikako formula-orri laburra",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bayes-en formula <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math> da; gainera, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>∪</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Banaketa diskretuetan: binomialaren batezbestekoa <math display=\"inline\"><mrow><mi>n</mi><mi>p</mi></mrow></math> eta desbideratze estandarra <math display=\"inline\"><msqrt><mrow><mi>n</mi><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></math> dira; geometrikoaren batezbestekoa <math display=\"inline\"><mfrac><mn>1</mn><mi>p</mi></mfrac></math> eta bariantza <math display=\"inline\"><mfrac><mrow><mn>1</mn><mo>−</mo><mi>p</mi></mrow><msup><mi>p</mi><mn>2</mn></msup></mfrac></math>; Poisson-en batezbestekoa eta bariantza <math display=\"inline\"><mi>λ</mi></math>. Porrotak <math display=\"inline\"><mi>r</mi></math>-garren arrakasta baino lehen zenbatzen dituen binomial negatiboan, batezbestekoa <math display=\"inline\"><mfrac><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>p</mi></mfrac></math> eta bariantza <math display=\"inline\"><mfrac><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>p</mi><mn>2</mn></msup></mfrac></math> dira."
    },
    {
     "mota": "testua",
     "html": "Uniformean, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow><mn>2</mn></mfrac></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>σ</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mn>12</mn></mfrac></mrow></math>; dentsitate esponentziala <math display=\"inline\"><mrow><mi>λ</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>λ</mi><mi>x</mi></mrow></msup></mrow></math> da <math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></math> denean. Normal orokorraren dentsitatea <math display=\"inline\"><mfrac><msup><mi>e</mi><mfrac><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mn>2</mn><msup><mi>σ</mi><mn>2</mn></msup></mrow></mfrac></msup><mrow><mi>σ</mi><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mrow></mfrac></math> da."
    },
    {
     "mota": "testua",
     "html": "Lagin baterako, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msub><mi>x</mi><mi>i</mi></msub></mrow></math> eta <math display=\"inline\"><mrow><msubsup><mi>s</mi><mi>n</mi><mn>2</mn></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msubsup><mn>2</mn></msup></mrow></math>. Azkenaren itxaropena <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>σ</mi><mn>2</mn></msup></mrow></math> da; estimatzaile alboragabea <math display=\"inline\"><mrow><mi>n</mi><mfrac><msubsup><mi>s</mi><mi>n</mi><mn>2</mn></msubsup><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren zuzenketak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: la expresión <math display=\"inline\"><mfrac><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>p</mi><mn>2</mn></msup></mfrac></math> es la varianza binomial negativa, no la desviación típica.] [CORREGIDO: se explicitan los índices de las sumas muestrales y el soporte <math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></math> de la exponencial.]"
      }
     ]
    }
   ]
  },
  {
   "id": "a60",
   "maila": 2,
   "izenburua": "Eraztun-sektoreko mintzaren modu normalak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mi>r</mi><mo>&lt;</mo><mi>b</mi></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>φ</mi><mo>&lt;</mo><msub><mi>φ</mi><mn>0</mn></msub></mrow></math> sektorean uhin-ekuazioa aztertzen da, lau ertzetan Dirichlet baldintza homogeneoak izanik. <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math> hartuta, <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>F</mi><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><mi>F</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mfrac><mi>ω</mi><mi>c</mi></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Angelu-baldintzek <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>φ</mi><msub><mi>φ</mi><mn>0</mn></msub></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mfrac><mi>π</mi><msub><mi>φ</mi><mn>0</mn></msub></mfrac></mrow></math> ematen dituzte. Erradio-ekuazioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><msup><mi>R</mi><mo>″</mo></msup><mo>+</mo><mi>r</mi><msup><mi>R</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>k</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>λ</mi><mi>n</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da; <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math> denez, <math display=\"inline\"><mrow><msub><mi>J</mi><msub><mi>λ</mi><mi>n</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>Y</mi><msub><mi>λ</mi><mi>n</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> biak onargarriak dira. <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>a</mi><mo>,</mo><mi>b</mi></mrow></math> baldintzek determinante hau eskatzen dute:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>J</mi><msub><mi>λ</mi><mi>n</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>Y</mi><msub><mi>λ</mi><mi>n</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>J</mi><msub><mi>λ</mi><mi>n</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>Y</mi><msub><mi>λ</mi><mi>n</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bere sustrai positiboak <math display=\"inline\"><msub><mi>k</mi><mrow><mi>n</mi><mo>,</mo><mi>j</mi></mrow></msub></math> dira, eta frekuentziak <math display=\"inline\"><mrow><msub><mi>ω</mi><mrow><mi>n</mi><mo>,</mo><mi>j</mi></mrow></msub><mo>=</mo><mi>c</mi><msub><mi>k</mi><mrow><mi>n</mi><mo>,</mo><mi>j</mi></mrow></msub></mrow></math>. Modu erradiala bi Bessel adarren konbinazioa da, bi erradioetan nulua."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Helmholtz-en murrizketa, angelu-espektroa eta Bessel-en determinantea argazkiko kalkuluarekin bat datoz."
      }
     ]
    }
   ]
  },
  {
   "id": "a61",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> funtzioaren Fourier-en seriea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>π</mi><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tartean <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> bakoitia da; beraz, sinu-koefizienteak bakarrik daude. Zatiz integratuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>π</mi></mrow><mi>π</mi></msubsup><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>2</mn><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mi>n</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hortaz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mi>n</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>−</mo><mi>π</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>π</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow></math> jarriz, termino bikoitiak desagertzen dira eta bakoitiek Leibniz-en seriea ematen dute:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mfrac><mi>π</mi><mn>4</mn></mfrac><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>j</mi></msup></mrow><mrow><mn>2</mn><mi>j</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Puntua hedapen periodikoaren barruan eta jarraitutasun-puntuan dagoenez, seriea zehazki <math display=\"inline\"><mfrac><mi>π</mi><mn>2</mn></mfrac></math>-ra konbergitzen da."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Paritateak eta integrazioak orriko bi identitateak berresten dituzte."
      }
     ]
    }
   ]
  },
  {
   "id": "a62",
   "maila": 1,
   "izenburua": "Aldagaien bereizketa: bederatzi urratseko gida",
   "blokeak": [
    {
     "mota": "testua",
     "html": "1. Zehaztu EDP lineala, domeinua eta hasierako zein mugako baldintzak. 2. Baldintza ez-homogeneoak badira, homogenizatu edo bereizi soluzio partikularra. 3. Proposatu biderkadura bat, adibidez <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. 4. Ordezkatu EDPan eta zatitu biderkaduraz, aldagai bakoitza alde batean uzteko. 5. Berdindu bi aldeak bereizketa-konstante batekin eta lortu ODE sistemak. 6. Ebatzi espazio-problema eta ezarri muga-baldintzak: autobalioak zehatzak edo zenbakizkoak izan daitezke, Bessel-en ekuazioetan bezala. 7. Ebatzi denbora-ekuazioa autobalio bakoitzerako. 8. Linealtasunagatik, superposatu modu guztiak. 9. Ezarri hasierako datuak autofuntzioen ortogonalitatez, Fourier edo Sturm–Liouville koefizienteak kalkulatuz."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>c</mi><mi>n</mi></msub><msub><mi>X</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><msub><mi>T</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mo>∫</mo><mi>f</mi><msub><mi>X</mi><mi>n</mi></msub><mi>w</mi><mi>d</mi><mi>x</mi></mrow><mrow><mo>∫</mo><msubsup><mi>X</mi><mi>n</mi><mn>2</mn></msubsup><mi>w</mi><mi>d</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Metodoaren irismena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: una EDP con fuente no queda fuera del método; puede tratarse restando una particular, por expansión modal, Duhamel o Green.] Produktu-base oso bat izateko operadore, domeinu eta baldintza bateragarriak behar dira; hiru espazio-aldagaitan hiru faktore edo gehiago beharko dira."
      }
     ]
    }
   ]
  },
  {
   "id": "a63",
   "maila": 2,
   "izenburua": "Operadore linealak eta bereizketa-adibideak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><msub><mi>∂</mi><mi>t</mi></msub><mo>−</mo><mi>k</mi><msubsup><mi>∂</mi><mi>x</mi><mn>2</mn></msubsup></mrow></math> lineala da: <math display=\"inline\"><mrow><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>1</mn></msub><msub><mi>u</mi><mn>1</mn></msub><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><msub><mi>u</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Bero-ekuazioan <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><mi>k</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, bereizketak <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>k</mi><mi>λ</mi><mi>T</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>+</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> ematen du. Mutur hotzetan <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>; mutur isolatuetan <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Domeinu periodikoan bi baldintzak behar dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Uhin-ekuazioan <math display=\"inline\"><mrow><msup><mi>T</mi><mo>″</mo></msup><mo>+</mo><mi>λ</mi><msup><mi>c</mi><mn>2</mn></msup><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>+</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> lortzen dira. Laukizuzeneko Laplace-ren problemarako aukeraketa erabilgarria <math display=\"inline\"><mrow><msup><mi>Y</mi><mo>″</mo></msup><mo>+</mo><mi>λ</mi><mi>Y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>−</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> da, muga homogeneoak <math display=\"inline\"><mi>y</mi></math> norabidean ezartzeko."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><mi>k</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>−</mo><mi>u</mi></mrow></math> ekuazioan, <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>+</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math>. Robin baldintza <math display=\"inline\"><mrow><mi>−</mi><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bada, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> bihurtzen da."
    },
    {
     "mota": "oharra",
     "titulua": "Ohar metodologikoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: la igualdad periódica de las derivadas, que aparece con una interrogación en el papel, es necesaria en el dominio periódico estándar.] Iturri ez-homogeneoak partikular, Duhamel edo Green bidez trata daitezke."
      }
     ]
    }
   ]
  },
  {
   "id": "a64",
   "maila": 2,
   "izenburua": "Bero-ekuazioa: Dirichlet eta Neumann mugak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><mi>k</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi></mrow></math>. Mutur hotzetan, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, moduak <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>, dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>B</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>t</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>20</mn></mrow></math> bada, <math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mn>40</mn><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac></mrow></math>: modu bikoitiak zero eta bakoitiak <math display=\"inline\"><mfrac><mn>80</mn><mrow><mi>n</mi><mi>π</mi></mrow></mfrac></math>. Datu konstantea muturretako zeroarekin bateraezina da <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-ko bi izkinetan; serieak barruan <math display=\"inline\"><mn>20</mn></math> eta muturretan <math display=\"inline\"><mn>0</mn></math> ematen du."
    },
    {
     "mota": "testua",
     "html": "Mutur isolatuetan <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>. Orduan <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></math>, eta zero modua ere badago:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>B</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>≥</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Kontserbazioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Neumann-en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> modua ez da iraungitzen: batezbesteko termikoa gordetzen da. [CORREGIDO: se explicita la incompatibilidad de esquina del dato <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>20</mn></mrow></math>.]"
      }
     ]
    }
   ]
  },
  {
   "id": "a65",
   "maila": 2,
   "izenburua": "Bero-ekuazioa eraztun periodiko batean",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>L</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> muturrak identifikatzean, <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> behar dira. Espazio-espektroa <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></math>, da; <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> modu konstantea da, eta <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> adarrak ez du modu periodiko ez-trivialik."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mo>+</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><msup><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Orriaren konbentzioarekin, <math display=\"inline\"><mrow><msub><mi>A</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>L</mi></mrow><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>L</mi></mrow><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>, eta <math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>L</mi></mrow><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi baldintza periodikoek kosinu eta sinu errealen oinarri osoa ematen dute; zero moduak batezbestekoa kontserbatzen du."
      }
     ]
    }
   ]
  },
  {
   "id": "a66",
   "maila": 2,
   "izenburua": "Bero-ekuazioa mutur-tenperatura ez-nuluekin",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><mi>k</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Oreka lineala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mi>x</mi><mi>L</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da. <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>u</mi><mo>−</mo><msub><mi>u</mi><mi>E</mi></msub></mrow></math> definituta, <math display=\"inline\"><mrow><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><mi>k</mi><msub><mi>v</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>u</mi><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>. Hortaz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mi>u</mi><mi>E</mi></msub><mo>+</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>B</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>t</mi></mrow></msup><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>u</mi><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>. <math display=\"inline\"><mi>t</mi></math> infinitura doanean modu guztiak iraungi, eta <math display=\"inline\"><msub><mi>u</mi><mi>E</mi></msub></math> bakarrik geratzen da."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: en una línea intermedia aparece <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>u</mi><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>; el signo correcto es menos. El propio papel usa después <math display=\"inline\"><mrow><mi>f</mi><mo>−</mo><msub><mi>u</mi><mi>E</mi></msub></mrow></math>, por lo que el error no llega al resultado final.]"
      }
     ]
    }
   ]
  },
  {
   "id": "a67",
   "maila": 2,
   "izenburua": "Laplace-ren ekuazioa laukizuzen batean",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>y</mi><mo>&lt;</mo><mi>H</mi></mrow></math> laukizuzenean, lau ertzetako datuak <math display=\"inline\"><mrow><msub><mi>f</mi><mn>1</mn></msub><mo>,</mo><msub><mi>f</mi><mn>2</mn></msub><mo>,</mo><msub><mi>f</mi><mn>3</mn></msub><mo>,</mo><msub><mi>f</mi><mn>4</mn></msub></mrow></math> badira, linealtasunak <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mi>u</mi><mn>1</mn></msub><mo>+</mo><msub><mi>u</mi><mn>2</mn></msub><mo>+</mo><msub><mi>u</mi><mn>3</mn></msub><mo>+</mo><msub><mi>u</mi><mn>4</mn></msub></mrow></math> idaztea ahalbidetzen du: <math display=\"inline\"><msub><mi>u</mi><mi>j</mi></msub></math> bakoitza harmonikoa da, ertz batean dagokion datua du eta beste hiruretan zero."
    },
    {
     "mota": "testua",
     "html": "Adibidez, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> ertzeko <math display=\"inline\"><mrow><msub><mi>f</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> daturako,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mn>4</mn></msub><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>B</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>H</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>y</mi><mi>H</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>H</mi><mi mathvariant=\"normal\">sinh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>n</mi><mi>π</mi><mfrac><mi>L</mi><mi>H</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>H</mi></msubsup><msub><mi>f</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>y</mi><mi>H</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>H</mi></mrow></math> ertzeko <math display=\"inline\"><mrow><msub><mi>f</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> daturako,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mn>3</mn></msub><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>C</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>y</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>L</mi><mi mathvariant=\"normal\">sinh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>H</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><msub><mi>f</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beste bi ertzak koordenatuen isla eginez lortzen dira. Batura harmonikoa da eta lau datuak berreskuratzen ditu."
    },
    {
     "mota": "oharra",
     "titulua": "Bateragarritasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Soluzio klasiko jarraiturako ertz-funtzioen izkina-balioek bat etorri behar dute. Bestela, serieak barneko soluzioa ematen du, mugak limite gisa ulertuta."
      }
     ]
    }
   ]
  },
  {
   "id": "a68",
   "maila": 2,
   "izenburua": "Diskoko Dirichlet-en problema",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>r</mi><mo>&lt;</mo><mi>a</mi></mrow></math> diskoan <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mi>u</mi></math> mugatua zentroan. <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bereizteak <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>″</mo></msup><mo>+</mo><mi>λ</mi><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><msup><mi>R</mi><mo>″</mo></msup><mo>+</mo><mi>r</mi><msup><mi>R</mi><mo>′</mo></msup><mo>−</mo><mi>λ</mi><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math> ematen ditu. Periodikotasunak <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup></mrow></math> ezartzen du."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>-erako adarrak <math display=\"inline\"><msup><mi>r</mi><mi>n</mi></msup></math> eta <math display=\"inline\"><msup><mi>r</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup></math> dira; <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>-rako, <math display=\"inline\"><mn>1</mn></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>r</mi></mrow></math>. Zentroko erregulartasunak adar singularrak kentzen ditu. Hortaz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mo>+</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msup><mi>r</mi><mi>n</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Mugako Fourier koefizienteekin, <math display=\"inline\"><mrow><msub><mi>A</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mi>π</mi><msup><mi>a</mi><mi>n</mi></msup></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>θ</mi></mrow></math>, eta <math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mi>π</mi><msup><mi>a</mi><mi>n</mi></msup></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>θ</mi></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudikapen hau diskoko Poisson-en integralaren serie-forma da; zentroko mugatasuna eta muga periodikoa esplizituki betetzen ditu."
      }
     ]
    }
   ]
  },
  {
   "id": "a69",
   "maila": 2,
   "izenburua": "Mutur finkoetako soka",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Espazio-moduak <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> dira; denbora-ekuazioa <math display=\"inline\"><mrow><msub><mi>T</mi><msup><mi>n</mi><mo>″</mo></msup></msub><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>c</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>c</mi><mfrac><mi>t</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>c</mi><mfrac><mi>t</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Koefizienteak <math display=\"inline\"><mrow><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mrow><mi>n</mi><mi>π</mi><mi>c</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> dira."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren argipena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: las anotaciones <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no son datos de una única ODE modal; los datos se imponen a la suma completa, como hace después el propio manuscrito.] Soluzio klasikorako muturretako bateragarritasuna behar da."
      }
     ]
    }
   ]
  },
  {
   "id": "a70",
   "maila": 2,
   "izenburua": "Helmholtz-en ekuazioa koordenatu polarretan",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>+</mo><msup><mi>K</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hartuta,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>″</mo></msup><mo>+</mo><mi>λ</mi><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>ρ</mi><mn>2</mn></msup><msup><mi>P</mi><mo>″</mo></msup><mo>+</mo><mi>ρ</mi><msup><mi>P</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>K</mi><mn>2</mn></msup><msup><mi>ρ</mi><mn>2</mn></msup><mo>−</mo><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>P</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Angelu-periodikotasunak <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup></mrow></math> ematen du. Erradio-soluzioa"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><msub><mi>J</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><msub><mi>Y</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "da; zentroa domeinuan badago, <math display=\"inline\"><msub><mi>Y</mi><mi>n</mi></msub></math> adarra erregulartasunagatik kentzen da. Notazio orokorrean ordena <math display=\"inline\"><msqrt><mi>λ</mi></msqrt></math> da."
    },
    {
     "mota": "testua",
     "html": "Argazkiaren beheko blokean zero ordenako forma agertzen da: <math display=\"inline\"><mrow><msup><mi>R</mi><mo>″</mo></msup><mo>+</mo><msup><mi>r</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mi>R</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math>, eta <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>A</mi><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>B</mi><msub><mi>Y</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: en la fórmula roja el argumento debe ser la coordenada radial <math display=\"inline\"><mrow><mi>K</mi><mi>ρ</mi></mrow></math>, no <math display=\"inline\"><mrow><mi>K</mi><mi>x</mi></mrow></math>.] p082k erradio-argumentu hori berriz baieztatzen du."
      }
     ]
    }
   ]
  },
  {
   "id": "a71",
   "maila": 2,
   "izenburua": "Diskoko tenperatura geldikorra",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Iturririk gabeko egoera geldikorrean <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>ρ</mi><mo>&lt;</mo><mi>a</mi></mrow></math> diskoan mugako datua <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mo>=</mo><mi>A</mi><mo>+</mo><mfrac><mi>B</mi><mn>2</mn></mfrac><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>B</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da."
    },
    {
     "mota": "testua",
     "html": "Zentroko erregulartasunak <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>ρ</mi></mrow></math> eta <math display=\"inline\"><msup><mi>ρ</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup></math> adarrak kentzen ditu. Mugak modu konstantea eta bigarren kosinu-modua bakarrik ditu; beraz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>+</mo><mfrac><mi>B</mi><mn>2</mn></mfrac><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>B</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>ρ</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>ρ</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> harmonikoa da, eta horrek EDPa zuzenean egiaztatzen du. <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mi>a</mi></mrow></math> jarriz <math display=\"inline\"><mrow><mi>A</mi><mo>+</mo><mi>B</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi></mrow></math> berreskuratzen da."
    },
    {
     "mota": "oharra",
     "titulua": "Bakartasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ortogonalitateak koefizienteak ematen ditu, eta maximoaren printzipioak Dirichlet-en barne-soluzio hau bakarra dela bermatzen du."
      }
     ]
    }
   ]
  },
  {
   "id": "a72",
   "maila": 2,
   "izenburua": "Bessel-en funtzioen identitateak eta integralak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Identitate diferentzial estandarrak <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msup><msub><mi>J</mi><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>−</mi><msup><mi>x</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msup><msub><mi>J</mi><mrow><mi>ν</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mi>ν</mi></msup><msub><mi>J</mi><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><msup><mi>x</mi><mi>ν</mi></msup><msub><mi>J</mi><mrow><mi>ν</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dira. Horietatik,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><msubsup><mi>J</mi><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>′</mo></msubsup><mo>=</mo><mi>ν</mi><msub><mi>J</mi><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>−</mo><mi>x</mi><msub><mi>J</mi><mrow><mi>ν</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><msubsup><mi>J</mi><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>′</mo></msubsup><mo>=</mo><mi>x</mi><msub><mi>J</mi><mrow><mi>ν</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>ν</mi><msub><mi>J</mi><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>J</mi><mrow><mi>ν</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>J</mi><mrow><mi>ν</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msubsup><mi>J</mi><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>′</mo></msubsup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>n</mi></math> oso bikoitientzat, <math display=\"inline\"><mrow><msub><mi>J</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mfrac><mi>π</mi><mn>2</mn></mfrac></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>θ</mi></mrow></math>; oso bakoitientzat dagokion sinu-sinu irudikapena erabiltzen da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>k</mi><mi>n</mi></msub></math> <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math>-ren zero positiboa bada, <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>ρ</mi><msub><mi>J</mi><mn>0</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>n</mi></msub><mi>ρ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>ρ</mi><mo>=</mo><msub><mi>J</mi><mn>1</mn></msub><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mn>2</mn></mfrac></mrow></math> eta <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>ρ</mi><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>n</mi></msub><mi>ρ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>ρ</mi><mo>=</mo><msub><mi>J</mi><mn>1</mn></msub><mfrac><msub><mi>k</mi><mi>n</mi></msub><msub><mi>k</mi><mi>n</mi></msub></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>R</mi><mo>″</mo></msup><mo>+</mo><msup><mi>ρ</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mi>R</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioaren soluzioa <math display=\"inline\"><mrow><mi>A</mi><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>ρ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>B</mi><msub><mi>Y</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>ρ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da. <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>b</mi><mi>x</mi></mrow></math> aldaketak <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> Bessel-en <math display=\"inline\"><msqrt><mi>a</mi></msqrt></math> ordenara eramaten du."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren baldintza eta grafikoak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: las dos integrales rojas presuponen, sin decirlo, que <math display=\"inline\"><mrow><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>; sin esa hipótesis la primera lleva un término adicional.] Lehen grafikoak <math display=\"inline\"><mrow><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> eta oszilazio motelduak erakusten ditu; bigarrenaren identifikazio zehatza ez dago etiketa nahikoz egiaztatuta."
      }
     ]
    }
   ]
  },
  {
   "id": "a73",
   "maila": 1,
   "izenburua": "Koadernotik (CNmet3) — DPE: bereizketa, Fourier eta Green",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, 64.-65. orrialdeak (0033 unitatea): ariketak (4,5,6) — (4) Fourier-en serie konplexutik errealera (n->-n indize-aldaketa, Euler; f bikoitirako d_-n=d_n, 2 d_n cos serie erreala); (5) cos x-en sinu-serieko garapena (T=pi, omega=2, a_n=0, b_n=8n/(pi(4n^2-1)), bi bidez egiaztatua); (6) funtzio baten hedapen bakoitia (-2L,2L)-n (T=4L, a_n=0, b_n=(1/L)int_0^2L f sin(n pi x/2L)). cos x-en sinu-seriearen irudia scipy+CeTZ-rekin. Zuzenketarik ez; konfiantza ertaina",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a74",
   "maila": 2,
   "izenburua": "Fourier-en serie konplexutik errealera eta hedapen bakoitiak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "4. Ariketa: serie konplexutik serie errealera"
    },
    {
     "mota": "testua",
     "html": "Fourier-en serie konplexua, batukaria zatituz eta lehen adarrean <math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>−</mi><mi>n</mi></mrow></math> indize-aldaketa eginda: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>d</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>d</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>n</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Koefiziente konplexua, Euler-en formulaz bereizita: <math display=\"block\"><mrow><msub><mi>d</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>n</mi><mi>ω</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>−</mo><mfrac><mi>i</mi><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mi>f</mi></math> <strong>bikoitia</strong> bada, senoaren integrala anulatzen da; orduan <math display=\"inline\"><msub><mi>d</mi><mi>n</mi></msub></math> erreala da eta <math display=\"inline\"><mrow><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><msub><mi>d</mi><mi>n</mi></msub></mrow></math>. Ordezkatuz, kosinuen serie erreala geratzen da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>d</mi><mn>0</mn></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>d</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>n</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mn>2</mn><msub><mi>d</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "5. Ariketa: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>-en sinu-serieko garapena"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n sinuetan garatzen da (<math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>π</mi></mrow></math>, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>2</mn></mrow></math>; funtzio bakoitia denez <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><mfrac><mi>π</mi><mn>2</mn></mfrac></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mn>8</mn><mi>n</mi></mrow><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo></mrow></math> eta hortik:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mn>8</mn><mi>n</mi></mrow><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "testua",
     "html": "Kosinuzko seriea lortzeko funtzioa <strong>modu bikoitian</strong> hedatzen da; sinuzkoa lortzeko, <strong>modu bakoitian</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "6. Ariketa: hedapen bakoitia <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>L</mi><mo>,</mo><mn>2</mn><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioa modu bakoitian hedatuz eta <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>4</mn><mi>L</mi></mrow></math> periodoarekin: <math display=\"block\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>2</mn><mi>L</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mo>−</mo><mn>2</mn><mi>L</mi><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>0</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mi>h</mi></math> bakoitia denez, garapenaren <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> guztiak anulatzen dira, eta seno-koefizienteak:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>L</mi></mrow></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berregiaztatua</strong> (<code>edf/09_sturm_liouville.typ</code> eta Fourier-en oinarri): serie konplexutik errealerako pausoa (<math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>−</mi><mi>n</mi></mrow></math>, Euler, <math display=\"inline\"><mi>f</mi></math> bikoitirako <math display=\"inline\"><mrow><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><msub><mi>d</mi><mi>n</mi></msub></mrow></math> eta <math display=\"inline\"><mrow><mn>2</mn><msub><mi>d</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi></mrow></math>), 5. ariketaren <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>8</mn><mi>n</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> bi konbentziotan (<math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>2</mn></mrow></math>, <strong>biek emaitza bera</strong>, ⭐⭐), eta 6. ariketaren hedapen bakoitiaren <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>L</mi></mrow></msubsup><mi>f</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> modu independentean egiaztatu dira. Dena zuzena.",
        "<strong>Zuzenketarik ez:</strong> ez da akats frogagarririk aurkitu. Ez da ukitu 4. ariketako <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math>-ren <math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><mi>T</mi></mrow></math> eta <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>T</mi></mrow></math> faktoreen arteko ezberdintasuna (bi idazkera jarraitu, blokea trinkoegia zein pausori dagokion jakiteko); ez eta 6. ariketako enuntziatuaren <math display=\"inline\"><mi>f</mi></math>-ren domeinua (<math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>L</mi></mrow></math>, integrala <math display=\"inline\"><mrow><mn>2</mn><mi>L</mi></mrow></math>-raino), zein irakurketa den zuzena ezin baita erabaki.",
        "<strong>Fidelitatea (konfiantza ertaina):</strong> euskaraz eta gaztelaniaz. Hiru marrazkietatik esanguratsuena (5. ariketakoa) bektorizatu da; beste biak (<code>cos x</code>-en kurba eta 6.b-ko adar beheranzkoa) eskalarik gabekoak dira, testuan azaldutakoak. <math display=\"inline\"><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub></math>-ren lerroa hutsik dago jatorrizkoan (ez da bete). Ez dago <code>CN3pN</code> etiketarik; 64-65 orriak erabili dira. Ikus <code>koadernoa_metodo_n3_p064.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, 66.-67. orrialdeak (0034 unitatea): 6. ariketaren itxiera (x=L simetria -> harmoniko bakoitiak sin((2n-1)pi x/2L)), 7. ariketa f(x)=x (-pi,pi)-n (bakoitia, a_n=0, b_n=2(-1)^(n+1)/n) eta Leibniz-en seriea pi/4=sum (-1)^n/(2n+1) (x=pi/2-n), paritatearen aljebra ((-1)^(sigma_1+sigma_2)), eta fisikako DPE garrantzitsuen katalogoa (uhina Delta u=(1/c^2)u_tt hiperbolikoa, difusioa K Delta u=u_t parabolikoa, Laplace Delta u=0 eliptikoa, Poisson, Schrödinger). f(x)=x-ren irudia scipy+CeTZ-rekin. Zuzenketa bat mentzioz (Leibniz-en zeinua - -> +); konfiantza ertaina",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a75",
   "maila": 2,
   "izenburua": "Leibniz-en seriea eta DPE garrantzitsuak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "6. ariketaren itxiera: simetria <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi></mrow></math>-rekiko"
    },
    {
     "mota": "testua",
     "html": "Hedapen bakoitiaren <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math>-en integrala, tarte negatiboan aldagai-aldaketa eginda (hedapenaren bakoititasunaz), <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> bihurtzen da. <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi></mrow></math>-rekiko simetria gehituz (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>L</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>L</mi></mrow></math>), harmoniko bakoitiak baino ez dira geratzen: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>b</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mi>x</mi></mrow><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mi>x</mi></mrow><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mn>4</mn><mi>L</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "7. Ariketa: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> eta Leibniz-en seriea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>π</mi><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n <strong>bakoitia</strong> denez, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, eta seno-koefizienteak: <math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>π</mi></mrow><mi>π</mi></msubsup><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mi>n</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mi>n</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>-n ebaluatuz (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bikoitietan <math display=\"inline\"><mn>0</mn></math>, bakoitietan <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup></mrow></math>): <math display=\"block\"><mrow><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>=</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>2</mn></mrow></msup></mrow><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><mo>=</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup></mrow><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>,</mo></mrow></math> eta biz zatituz, <strong>Leibniz-en seriea</strong> geratzen da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mi>π</mi><mn>4</mn></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Iturriaren zuzenketa: Leibniz-en seriearen zeinua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Paperak <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>4</mn><mo>=</mo><mi>−</mi><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idazten du (<strong>minus</strong>). <strong>Plus</strong> jaso da: autoreak berak 66. orrian, 7. ariketaren enuntziatuan, <math display=\"inline\"><mrow><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>π</mi><mi>/</mi><mn>4</mn></mrow></math> idatzi zuen zeinu negatiborik gabe, eta berregiaztapenak zeinu positiboa berresten du (minusarekin <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>4</mn><mo>=</mo><mi>−</mi><mi>π</mi><mi>/</mi><mn>4</mn></mrow></math> absurdoa aterako litzateke)."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Paritatearen aljebra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>f</mi></math>-k <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>σ</mi><mn>1</mn></msub></msup></mrow></math> paritatea eta <math display=\"inline\"><mi>y</mi></math>-k <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>σ</mi><mn>2</mn></msub></msup></mrow></math> paritatea badute (<math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>1</mn></mrow></math> bakoitia, <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>2</mn></mrow></math> bikoitia), biderkadurak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><msub><mi>σ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>σ</mi><mn>2</mn></msub></mrow></msup></mrow></math> paritatea du: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><msub><mi>σ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>σ</mi><mn>2</mn></msub></mrow></msup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> adibidez bakoiti <math display=\"inline\"><mi>×</mi></math> bakoiti <math display=\"inline\"><mo>=</mo></math> bikoiti, eta bikoiti <math display=\"inline\"><mi>×</mi></math> bakoiti <math display=\"inline\"><mo>=</mo></math> bakoiti."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "DPE garrantzitsuak"
    },
    {
     "mota": "testua",
     "html": "Teoriara itzuliz, fisikako deribatu partzialetako ekuazio nagusiak:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Uhin-ekuazioa</strong>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub></mrow></math> (<math display=\"inline\"><mi>c</mi></math> uhinaren abiadura); soka batean (1D) <math display=\"inline\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>.",
      "<strong>Difusio-ekuazioa</strong>: <math display=\"inline\"><mrow><mi>K</mi><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><msub><mi>u</mi><mi>t</mi></msub></mrow></math> (<math display=\"inline\"><mi>K</mi></math> konduktibitatea).",
      "<strong>Laplace-en ekuazioa</strong>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>.",
      "<strong>Poisson-en ekuazioa</strong>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
      "<strong>Schrödinger-en ekuazioa</strong>: <math display=\"inline\"><mrow><mi>−</mi><mfrac><msup><mi>ℏ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>+</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>u</mi><mo>=</mo><mi>i</mi><mi>ℏ</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mrow></math> (<math display=\"inline\"><mi>u</mi></math> uhin-funtzioa)."
     ]
    },
    {
     "mota": "testua",
     "html": "Lehen hirurak, hurrenez hurren, <strong>hiperbolikoa</strong>, <strong>parabolikoa</strong> eta <strong>eliptikoa</strong> dira, 62-63. orriko <math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>A</mi><mi>C</mi></mrow></math> sailkapenarekin bat."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berregiaztatua</strong> (<code>edf/09_sturm_liouville.typ</code> + Fourier): 6. ariketaren itxiera, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi></mrow></math> simetriaren harmoniko bakoitiak, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>-ren garapena (<math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mi>n</mi></mrow></math>, ⭐), Leibniz-en seriea (<math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>4</mn><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, ⭐⭐, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>-n ebaluatuz), paritatearen aljebra eta DPE-en katalogoa (uhina hiperbolikoa, difusioa parabolikoa, Laplace eliptikoa; 62-63. orriko sailkapenarekin bat) modu independentean egiaztatu dira. Dena zuzena.",
        "<strong>Zuzenketa (mentzioz):</strong> Leibniz-en seriaren zeinua (<math display=\"inline\"><mi>−</mi></math> ordez <math display=\"inline\"><mi>+</mi></math>); autoreak berak enuntziatuan idatzia, eta minusarekin <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>4</mn><mo>=</mo><mi>−</mi><mi>π</mi><mi>/</mi><mn>4</mn></mrow></math> absurdoa.",
        "<strong>Fidelitatea (konfiantza ertaina):</strong> euskaraz eta gaztelaniaz. Ez dira ukitu: marrazkiaren ondoko paritate-erlazioa (<code>f(x) = f(-x)</code> irakurtzen da, baina <code>F. BAKOITIA</code> rotulua eta <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>-k funtzio bakoitia eskatzen dute: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> litzateke; irakurketa-zalantza), <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math>-ren aurreko <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faktorea (emaitza zuzena da) eta simetria-blokeko <math display=\"inline\"><mi>L</mi></math>/<math display=\"inline\"><mrow><mn>2</mn><mi>L</mi></mrow></math> izendatzailea. Ez dago <code>CN3pN</code> etiketarik; 66-67 orriak erabili dira. Ikus <code>koadernoa_metodo_n3_p066.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, 68.-69. orrialdeak (0035 unitatea): aldagaien banaketaren metodo orokorra (uhin-ekuazioa: X''/X=T''/T=-lambda^2, u_lambda=e^(i lambda(x-t)), S-L problema) eta bero-ekuazioa muga-baldintza ez-homogeneoekin (u_t=a^2 u_xx, u(t,0)=T_1, u(t,L)=T_2), homogeneizazioa V=u-g (g(0)=T_1, g(L)=T_2) -> V_t=a^2 V_xx+a^2 g''; autofuntzioetan garatuz C_n'+(a n pi/L)^2(C_n+g_n)=0, C_n(0)=f_n-g_n. Bero-barraren irudia CeTZ-rekin. Zuzenketa bat mentzioz (hasierako baldintza f-g, ez f+g); konfiantza ertaina",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a76",
   "maila": 2,
   "izenburua": "Aldagaien banaketa eta muga-baldintzen homogeneizazioa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aldagaien banaketaren metodo orokorra: uhin-ekuazioa"
    },
    {
     "mota": "testua",
     "html": "Uhin-ekuazioan, <math display=\"inline\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ordezkatuz <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mi>T</mi><mo>=</mo><mi>X</mi><msup><mi>T</mi><mo>″</mo></msup></mrow></math> da, eta <math display=\"inline\"><mrow><mi>X</mi><mi>T</mi></mrow></math>-z zatituz: <math display=\"block\"><mrow><mfrac><msup><mi>X</mi><mo>″</mo></msup><mi>X</mi></mfrac><mo>=</mo><mfrac><msup><mi>T</mi><mo>″</mo></msup><mi>T</mi></mfrac><mo>=</mo><mi>−</mi><msup><mi>λ</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Hortik bi ekuazio arrunt, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>T</mi><mo>″</mo></msup><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>, soluzio trigonometriko (edo esponentzial baliokide) direla. Oinarrizko soluzioa <math display=\"inline\"><mrow><msub><mi>u</mi><mi>λ</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math> da, eta linealtasunagatik <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mo>∑</mo><mi>λ</mi></msub><msub><mi>u</mi><mi>λ</mi></msub></mrow></math>; muga-baldintza egokiekin, <strong>Sturm-Liouville-ren problema</strong> bat da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bero-ekuazioa muga-baldintza ez-homogeneoekin"
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> barra baten tenperatura <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bilatzen da: <math display=\"block\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> Muga-baldintzak <strong>ez-homogeneoak</strong> dira. Homogeneizatzeko, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aldagai-aldaketa egiten da, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub></mrow></math> izanik."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema berria eta autofuntzioetan garatzea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>g</mi></math> denboraren independentea denez, problema berria honakoa da: <math display=\"block\"><mrow><msub><mi>V</mi><mi>t</mi></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msub><mi>V</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>g</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> muga-baldintza jada homogeneoekin. <math display=\"inline\"><mi>g</mi></math> lineala hartuz (<math display=\"inline\"><mrow><msup><mi>g</mi><mo>″</mo></msup><mo>=</mo><mn>0</mn></mrow></math>), zati homogeneoaren Sturm-Liouville problematik <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>≠</mo><mn>0</mn></mrow></math>) eta <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ateratzen dira."
    },
    {
     "mota": "testua",
     "html": "Funtzio guztiak oinarri ortogonalean garatuz, <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>f</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>g</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> den. Ekuazioan eta hasierako baldintzan ordezkatuz, koefiziente bakoitzarentzat:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>C</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>n</mi><mi>π</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><msub><mi>g</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Iturriaren zuzenketa: hasierako baldintza",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Homogeneizatutako problemaren hasierako baldintzan <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> jaso da (kenketa; paperak behin <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idazten du). <strong>Autoreak berak bi aldiz frogatzen du</strong>: orriaren lehen lerroan <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idazten du, eta azken ondorioak <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>f</mi><mi>n</mi></msub><mo>+</mo><msub><mi>g</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> (hots <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math>) dio; biak kenketarekin baino ez dira bateragarriak."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berregiaztatua</strong> (<code>edf/09_sturm_liouville.typ</code> + Fourier): aldagaien banaketa uhin-ekuazioan (<math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mi>/</mi><mi>X</mi><mo>=</mo><msup><mi>T</mi><mo>″</mo></msup><mi>/</mi><mi>T</mi><mo>=</mo><mi>−</mi><msup><mi>λ</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>λ</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>), homogeneizazioa (<math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>g</mi></mrow></math>-tik <math display=\"inline\"><mrow><msub><mi>V</mi><mi>t</mi></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msub><mi>V</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>g</mi><mo>″</mo></msup></mrow></math>, ⭐), <math display=\"inline\"><mrow><msup><mi>g</mi><mo>″</mo></msup><mo>=</mo><mn>0</mn></mrow></math> kasua, Sturm-Liouville-ren <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta koefizienteen ekuazioa (<math display=\"inline\"><mrow><msubsup><mi>C</mi><mi>n</mi><mo>′</mo></msubsup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math>, ⭐⭐) modu independentean egiaztatu dira. Bat dator 57. eta 61. orrietako autobalioekin. Dena zuzena.",
        "<strong>Zuzenketa (mentzioz):</strong> hasierako baldintzan <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (paperak behin <math display=\"inline\"><mrow><mi>+</mi><mi>g</mi></mrow></math>); autoreak berak bi aldiz frogatua (<math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>g</mi></mrow></math>-ren lehen lerroa eta <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math> azken ondorioa). Oharra: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> ekuazioan <strong>bai</strong> dagokio batuketa (ez da nahastu behar).",
        "<strong>Fidelitatea (konfiantza ertaina):</strong> nagusiki euskaraz. Autoreak <code>NPI</code> zailtasun-marka jartzen du (hirugarren agerpena koadernoan, 42/52/69 orrietan), hemen problema homogeneizatuaren autofuntzioetako garapenaren ondoan. Irakurketa partzialak (<code>OSO ... GAI GEHIAGO</code>, <code>BERDINTZAK</code> aurrekoa, <code>2 ALDAGAI BATIZ</code>). Ez dago <code>CN3pN</code> etiketarik; 68-69 orriak erabili dira. Ikus <code>koadernoa_metodo_n3_p068.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, 70.-71. orrialdeak (0036 unitatea): koefizienteen ekuazioaren ebazpena (C_n(t)=f_n e^(-kt)-g_n, k=(a n pi/L)^2), e^x-en Fourier-en garapena (T=2, a_n/b_n, seriea), gaiz gai integratu/deribatu, sum(-1)^n=-1/2 EZ DA EGIA (dibergentea; Abel/Cesaro), eta funtzio periodikoak Heaviside-rekin (g=sum[theta-theta]e^(x-2n)) + Dirac-en delta periodikoa (delta=1/T+(2/T)sum cos). e^x hedapen periodikoaren irudia CeTZ-rekin. Zuzenketa bat mentzioz (dos-estrellas: laukiko C_n(t) formulak EDOa ez du betetzen, 2 k g_n hondarra; autorearen NPI marka akatsaren ondoan); konfiantza ertaina",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a77",
   "maila": 2,
   "izenburua": "Koefizienteen ebazpena, <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math>-en garapena eta Dirac-en delta",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Koefizienteen ekuazioaren ebazpena"
    },
    {
     "mota": "testua",
     "html": "Aurreko <math display=\"inline\"><mrow><msubsup><mi>C</mi><mi>n</mi><mo>′</mo></msubsup><mo>+</mo><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> ekuazioa (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>), <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math> hasierako baldintzarekin, <math display=\"inline\"><mrow><msub><mi>D</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math> aldagai-aldaketaz ebazten da (<math display=\"inline\"><mrow><msubsup><mi>D</mi><mi>n</mi><mo>′</mo></msubsup><mo>=</mo><mi>−</mi><mi>k</mi><msub><mi>D</mi><mi>n</mi></msub></mrow></math>, beraz <math display=\"inline\"><mrow><msub><mi>D</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mo>−</mo><msub><mi>g</mi><mi>n</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mi>n</mi><mfrac><mi>π</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Iturriaren zuzenketa: koefizientearen formula",
     "blokeak": [
      {
       "mota": "testua",
       "html": "⭐⭐ Paperak laukian <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><mn>2</mn><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math> idazten du. Formula horrek <strong>hasierako baldintza betetzen du, baina ekuazio diferentziala ez</strong> (ordezkatzean <math display=\"inline\"><mrow><mn>2</mn><mi>k</mi><msub><mi>g</mi><mi>n</mi></msub></mrow></math> hondar ez-nulua uzten du). Zuzena <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mo>−</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math> da (biak betetzen ditu). <strong>Autoreak berak <code>NPI</code> marka azpimarratua jarri zuen formula horren ondoan</strong>: ez zuen puntu hori ulertu, eta hor dago hain zuzen akatsa."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math>-en Fourier-en garapena <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math> funtzioa <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn></mrow></math> periodoan garatuz, koefizienteak (bi aldiz zatika integratuz): <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mn>1</mn></mrow><mn>1</mn></msubsup><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>e</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mn>1</mn></mrow><mn>1</mn></msubsup><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi><mi>π</mi></mrow><mrow><mi>e</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>,</mo></mrow></math> eta seriea <math display=\"inline\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac><mo>+</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>a</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>b</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>."
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "testua",
     "html": "Seriea gaiz gai <strong>integratuz</strong> eta <strong>deribatuz</strong>, <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math>-en jatorrizko funtzioaren eta deribatuaren garapenak lortzen dira. <math display=\"inline\"><mi>x</mi></math>-ren sinu-seriea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>b</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da, <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>1</mn></mrow></math>, 66. orria). (Paperak zenbait serie zenbakizko ere ateratzen ditu; batzuen irakurketa ez da segurua eta ez dira jaso.)"
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "<math display=\"inline\"><mrow><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>: EZ DA EGIA",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math> seriea <strong>ez da konbergentea</strong> zentzu arruntean (batura partzialek <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> eta <math display=\"inline\"><mn>0</mn></math> artean oszilatzen dute); autorearen <code>EZ DA EGIA</code> oharra zuzena da. <math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> balioa Abel/Cesàro-ren baturaz dagokio, eta <math display=\"inline\"><mrow><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> Fourier-en seriea <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n ebaluatuz agertzen da (jauzi-puntuko batez besteko balioa). Berdintza faltsua da batura arrunt gisa, baina zuzena batura orokortu gisa."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Funtzio periodikoak Heaviside-rekin eta Dirac-en delta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math>-en hedapen periodikoa (goiko irudia) Heaviside-ren funtzioekin idazten da, <math display=\"inline\"><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> gaiak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo>,</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tartean baino ez baitu balio <math display=\"inline\"><mn>1</mn></math>: <math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>e</mi><mrow><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi></mrow></msup><mi>.</mi></mrow></math> Deribatuz (esponentzialaren deribatua gehi jauzietako deltak, <math display=\"inline\"><mrow><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>θ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>): <math display=\"block\"><mrow><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mo>∑</mo><mi>n</mi></munder><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>e</mi><mrow><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi></mrow></msup><mi>.</mi></mrow></math> Azkenik, Dirac-en delta periodikoaren garapena (<math display=\"inline\"><mi>T</mi></math> periodoan; iragazteaz <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∫</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi><mi>/</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>T</mi></mfrac></mrow></math>, eta <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> bikoitia delako):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><mo>+</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>k</mi><mi>x</mi></mrow><mi>T</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berregiaztatua</strong> (<code>edf/09_sturm_liouville.typ</code> + Fourier): koefizientearen ebazpena (<math display=\"inline\"><mrow><msub><mi>D</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math>-z <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mo>−</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math>, ⭐⭐), <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math>-en <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math>/<math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math> (bi aldiz zatika, ⭐), <math display=\"inline\"><mi>x</mi></math>-ren sinu-seriea, Heaviside-rekiko eraikuntza, deribatua eta Dirac-en peine-a (<math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∑</mo><mi mathvariant=\"normal\">cos</mi></mrow></math>, ⭐) modu independentean egiaztatu dira. Dena zuzena.",
        "<strong>Zuzenketa (mentzioz, ⭐⭐):</strong> laukiko <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> formula (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><mn>2</mn><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math>) ez da zuzena: hasierako baldintza betetzen du baina EDOan <math display=\"inline\"><mrow><mn>2</mn><mi>k</mi><msub><mi>g</mi><mi>n</mi></msub></mrow></math> hondarra uzten du. Zuzena <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mo>−</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math> da. Autoreak berak <code>NPI</code> (zailtasun-marka) azpimarratua jarri zuen formula horren ondoan — hor dago akatsa.",
        "<strong><math display=\"inline\"><mrow><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math>:</strong> autorearen <code>EZ DA EGIA</code> zuzena da (dibergentea); <math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> Abel/Cesàro-ren batura da (goiko oharpena).",
        "<strong>Fidelitatea (konfiantza ertaina):</strong> euskaraz eta gaztelaniaz. Ez dira jaso 71. orriko lau adierazpen zenbakizko irakurtezinak (batura baten bigarren atala, <math display=\"inline\"><mrow><msup><mi>e</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren berretzaileak, <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren izendatzaile bat, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aldagairik gabe). Ez dago <code>CN3pN</code> etiketarik; 70-71 orriak erabili dira. Ikus <code>koadernoa_metodo_n3_p070.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, 72.-73. orrialdeak (0037 unitatea): 8. ariketa uhin karratuaren potentzia Parseval-ez (zuzenean A^2; Fourier-etik (8A^2/pi^2)sum 1/(2n+1)^2=A^2, sum 1/(2n+1)^2=pi^2/8); 9. ariketa funtzio bikoiti periodikoaren Fourier-en garapena oinarritik (b_n=0, a_n=(2/T)int f cos(n omega x), omega=2pi/T). Uhin karratuaren irudia CeTZ-rekin. Sekuentzia jarraitua (72, ez 82). Bi zuzenketa mentzioz (b_2 cos->sin, a_n faktorea 1/T->2/T); konfiantza ertaina",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a78",
   "maila": 2,
   "izenburua": "Uhin karratuaren potentzia eta funtzio bikoitien garapena",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "8. Ariketa: uhin karratuaren potentzia (Parseval)"
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>±</mi><mi>A</mi></mrow></math> anplitudeko uhin karratu baten batez besteko potentzia, zuzenean kalkulatuta (<math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup></mrow></math> periodo osoan): <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>T</mi><mn>2</mn></mfrac></mrow><mfrac><mi>T</mi><mn>2</mn></mfrac></msubsup><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mo>=</mo><msup><mi>A</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Fourier-en serietik ere kalkula daiteke (armoniko bakoitiak, koefizienteak <math display=\"inline\"><mrow><mn>4</mn><mi>A</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>): karratua eginda, gurutzatako gaiak ortogonaltasunez anulatzen dira, eta <math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>T</mi><mi>/</mi><mn>2</mn></mrow></math> delarik, <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>T</mi><mn>2</mn></mfrac></mrow><mfrac><mi>T</mi><mn>2</mn></mfrac></msubsup><msup><mi>v</mi><mn>2</mn></msup><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mn>16</mn><msup><mi>A</mi><mn>2</mn></msup></mrow><mrow><msup><mi>π</mi><mn>2</mn></msup><mi>T</mi></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>T</mi><mn>2</mn></mfrac></mrow><mfrac><mi>T</mi><mn>2</mn></mfrac></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mn>8</mn><msup><mi>A</mi><mn>2</mn></msup></mrow><msup><mi>π</mi><mn>2</mn></msup></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></mfrac></mrow></math> <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>π</mi><mn>2</mn></msup><mi>/</mi><mn>8</mn></mrow></math> denez (<math display=\"inline\"><mrow><mo>∑</mo><mn>1</mn><mi>/</mi><msup><mi>n</mi><mn>2</mn></msup><mo>=</mo><msup><mi>π</mi><mn>2</mn></msup><mi>/</mi><mn>6</mn></mrow></math>-tik bikoitiak kenduta), emaitza <math display=\"inline\"><msup><mi>A</mi><mn>2</mn></msup></math> da: <strong>bi bideek bat egiten dute</strong> (Parseval-en identitatea)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "9. Ariketa: funtzio bikoiti periodikoaren garapena"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioa <strong>bikoitia</strong> eta <math display=\"inline\"><mi>T</mi></math> periodikoa bada, senoen koefizienteak anulatzen dira eta kosinuen seriea baino ez da geratzen: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>T</mi></mfrac><mi>.</mi></mrow></math> Oinarritik berreraikita (<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo>,</mo><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo>,</mo><mi mathvariant=\"normal\">cos</mi><mn>2</mn><mi>x</mi><mo>,</mo><mi mathvariant=\"normal\">sin</mi><mn>2</mn><mi>x</mi><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>), <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>⋅</mo><mn>1</mn><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msub><mi>b</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi><mo>+</mo><msub><mi>b</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi><mo>+</mo><mi>…</mi></mrow></math> da; funtzio bikoitiarentzat <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>n</mi><mi>x</mi></mrow></math> argumentua <math display=\"inline\"><mrow><mi>n</mi><mi>ω</mi><mi>x</mi></mrow></math>-z ordezkatuz <math display=\"inline\"><mi>T</mi></math> periodoa lortzen da. Koefizienteak biderkadura eskalarrez erauzten dira (49-50. orriak):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>T</mi><mn>2</mn></mfrac></mrow><mfrac><mi>T</mi><mn>2</mn></mfrac></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> barne (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>0</mn><mo>=</mo><mn>1</mn></mrow></math>)."
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Iturriaren zuzenketak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi zuzenketa mentzioz: (1) oinarriaren konbinazio linealean <math display=\"inline\"><mrow><msub><mi>b</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi></mrow></math> (paperak <math display=\"inline\"><mrow><msub><mi>b</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi></mrow></math> errepikatzen du; <math display=\"inline\"><mi>b</mi></math> koefizienteek senoak dituzte, autoreak berak enumeratutako <math display=\"inline\"><mi>S</mi></math> oinarrian eta <math display=\"inline\"><mrow><msub><mi>b</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>-n bezala); (2) <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math>-ren faktorea <math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><mi>T</mi></mrow></math> (paperak <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>T</mi></mrow></math>; autoreak berak bi lerro beherago <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math>-rako <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>⋅</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>T</mi></mrow></math> eta <math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><mi>T</mi></mrow></math> idazten ditu, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow></math> konbentzioarekin bat)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berregiaztatua</strong> (Parseval + Fourier): uhin karratuaren potentzia zuzenean (<math display=\"inline\"><msup><mi>A</mi><mn>2</mn></msup></math>, ⭐) eta Fourier-en serietik (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>8</mn><msup><mi>A</mi><mn>2</mn></msup><mi>/</mi><msup><mi>π</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∑</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup></mrow></math>, ⭐⭐; gurutzatako gaiak ortogonaltasunez, <math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>T</mi><mi>/</mi><mn>2</mn></mrow></math>), <math display=\"inline\"><mrow><mo>∑</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>π</mi><mn>2</mn></msup><mi>/</mi><mn>8</mn></mrow></math>, funtzio bikoitiaren egitura eta <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∫</mo><mi>f</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> formula modu independentean egiaztatu dira. Dena zuzena; bat dator 41. eta 48. orriekin.",
        "<strong>Bi zuzenketa (mentzioz):</strong> <math display=\"inline\"><mrow><msub><mi>b</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi></mrow></math> (paperak <math display=\"inline\"><mi mathvariant=\"normal\">cos</mi></math>) eta <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math>-ren <math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><mi>T</mi></mrow></math> faktorea (paperak <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>T</mi></mrow></math>; autoreak berak <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math>-rako zuzentzen du).",
        "<strong>Fidelitatea (konfiantza ertaina):</strong> ezkerreko orria euskaraz, eskuinekoa gaztelaniaz. Autoreak <code>MAL COPIADO</code> idazten du bere lehen kalkuluaren ondoan (bere buruaren oharra, jaso da). <math display=\"inline\"><mrow><mn>8</mn><msup><mi>A</mi><mn>2</mn></msup><mi>/</mi><msup><mi>π</mi><mn>2</mn></msup></mrow></math>-ko <code>8</code>-a (ez <code>3</code>) emaitzarekin bakarrik da bateragarria. <strong>Sekuentzia jarraitua</strong> da: orriaren beheko zenbakia <code>72</code> da (hasieran <code>82</code> irakurria, 0042 unitateak zuzendua). Ez dago <code>CN3pN</code> etiketarik; 72-73 orriak erabili dira. Ikus <code>koadernoa_metodo_n3_p072.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, 74.-75. orrialdeak (0038 unitatea): a_0/2 terminoaren jatorria (f=A+sum(a_n cos+b_n sin) funtzio konstantearen (1) gainean proiektatuz: <f|1>=<A|1>=2 pi A -> A=(1/2pi)int f; koefiziente orokorra n=0-n cos0=1: a_0=(1/pi)int f=2A, b_0=0 -> termino konstantea=a_0/2; norm(1)^2=2 pi=2 norm(cos)^2 delako) eta serie konplexutik errealera (d_n=(1/T)int f e^(-i n omega x); batukaria bi adarretan banatuz, d_(-n)=d_n -> d_0+2 sum d_n cos(n omega t)). Irudirik gabe. Zuzenketa bat mentzioz (d_(-n)=d_n, paperak d_n=-d_n idazten du; zeinua azpiindizekoa da, ez koefizientekoa; oro har d_(-n)=conj(d_n)) eta inbentario-zuzenketa (argazki-ordena=orri-ordena; aurreko '72-81 falta' oharra okerra zen; 0037=72-73, hau 74-75, sekuentzia jarraitua, 0042-k baieztatua). Bat dator 64. orriarekin. Konfiantza ertaina",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a79",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac></math>-ren jatorria eta serie konplexutik errealera",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac></math> terminoaren jatorria"
    },
    {
     "mota": "testua",
     "html": "Biderkadura eskalarra <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>f</mi><mi>g</mi><mi>d</mi><mi>x</mi></mrow></math> delarik, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>+</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>b</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> seriea funtzio konstantearen (<math display=\"inline\"><mn>1</mn></math>) gainean proiektatzen da. <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math> gaien biderkadurak nuluak dira, beraz <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>A</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>2</mn><mi>π</mi><mi>A</mi></mrow></math>, hots: <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Bestalde, koefiziente-formula orokorrak, <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>π</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> (paperak <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math>-ren lerroan <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>π</mi></mrow></math> faktorea isilpean uzten du; hemen berrezarri da, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><mi>A</mi></mrow></math> ondorioak eskatzen duen bezala), <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>-n (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>0</mn><mo>=</mo><mn>1</mn></mrow></math>) <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>π</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>2</mn><mi>A</mi></mrow></math> ematen du (eta <math display=\"inline\"><mrow><msub><mi>b</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>0</mn><mo>=</mo><mn>0</mn></mrow></math> delako). Beraz termino konstantea <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac></mrow></math> da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><mi>A</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> termino konstantea </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Erdia <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>2</mn><mi>π</mi><mo>=</mo><mn>2</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup></mrow></math> delako agertzen da: funtzio konstanteak kosinuak baino norma bikoitza du."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Serie konplexutik serie errealera"
    },
    {
     "mota": "testua",
     "html": "Fourier-en serie konplexuan, <math display=\"inline\"><mrow><msub><mi>d</mi><mi>n</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>n</mi><mi>ω</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi></mrow></math> izanik, batukaria bi adarretan banatuz eta lehen adarrean indizea aldatuz: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>d</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>n</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>d</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>ω</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><msub><mi>d</mi><mi>n</mi></msub></mrow></math> delarik, Euler-en identitatea gai bakoitzari aplikatuz, zati irudikariak parez pare ezabatzen dira eta errealak bikoizten:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>d</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo>+</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>d</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Iturriaren zuzenketa: <math display=\"inline\"><mrow><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><msub><mi>d</mi><mi>n</mi></msub></mrow></math>",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Paperak gorriz <math display=\"inline\"><mrow><msub><mi>d</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msub><mi>d</mi><mi>n</mi></msub></mrow></math> idazten du; horrek <math display=\"inline\"><mrow><msub><mi>d</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> behartuko luke eta seriea tribiala egingo. Zuzena <math display=\"inline\"><mrow><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><msub><mi>d</mi><mi>n</mi></msub></mrow></math> da: horrek bi batukariak elkartzeko eta autoreak berak azpimarratzen duen <math display=\"inline\"><mrow><msub><mi>d</mi><mn>0</mn></msub><mo>+</mo><mn>2</mn><mo>∑</mo><msub><mi>d</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> emaitzara iristeko aukera ematen du. Ikur-lekualdatze bat da (zeinua azpiindizeari dagokio, ez koefizienteari). Ohar gehigarria: <math display=\"inline\"><mrow><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><msub><mi>d</mi><mi>n</mi></msub></mrow></math> berdintza <math display=\"inline\"><mi>f</mi></math> <strong>erreala eta bikoitia</strong> denean betetzen da; oro har <math display=\"inline\"><mrow><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><mover><msub><mi>d</mi><mi>n</mi></msub><mo accent=\"true\">¯</mo></mover></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berregiaztatua</strong> (Fourier): <math display=\"inline\"><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac></math>-ren jatorria (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>2</mn><mi>π</mi><mi>A</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><mi>A</mi></mrow></math>, ⭐; <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>2</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup></mrow></math>), <math display=\"inline\"><mrow><msub><mi>b</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, eta serie konplexutik errealera (<math display=\"inline\"><mrow><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><msub><mi>d</mi><mi>n</mi></msub></mrow></math>-z <math display=\"inline\"><mrow><msub><mi>d</mi><mn>0</mn></msub><mo>+</mo><mn>2</mn><mo>∑</mo><msub><mi>d</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi></mrow></math>, ⭐) modu independentean egiaztatu dira. Bat dator 64. orriarekin (beste bide batetik). Dena zuzena.",
        "<strong>Zuzenketa (mentzioz):</strong> <math display=\"inline\"><mrow><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><msub><mi>d</mi><mi>n</mi></msub></mrow></math> (paperak <math display=\"inline\"><mrow><msub><mi>d</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msub><mi>d</mi><mi>n</mi></msub></mrow></math>); zeinua azpiindizekoa da.",
        "<strong>Inbentario-zuzenketa:</strong> argazki-ordena orri-ordenaren berdina da. Aurreko &quot;72-81 orriak falta dira&quot; oharra <strong>okerra zen</strong>: 0037 = 72-73, hau 74-75, sekuentzia jarraitua (0042 unitateak baieztatua).",
        "<strong>Fidelitatea (konfiantza ertaina):</strong> gaztelaniaz. Ez dira ukitu: hirugarren lerroko <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math> (behin-behineko notazioa izan liteke, marjinako <code>SI b_n</code>), eta azken-aurreko lerroko <math display=\"inline\"><msub><mi>d</mi><mi>n</mi></msub></math> gabeko batukaria (kopiaketa-akatsa; azken emaitza zuzena da). Ez dago <code>CN3pN</code> etiketarik; 74-75 orriak erabili dira. Ikus <code>koadernoa_metodo_n3_p074.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, 76.-77. orrialdeak (0039 unitatea): koefizienteen formulen eratorpena biderkadura eskalarretik (f cos(omega x)-en proiekzioa -> int f cos = a_1 int cos^2; int_0^T cos^2(omega x)=T/2 zatika integratuz, I=T-I; a_n=(2/T)int f cos(n omega x), b_n=(2/T)int f sin(n omega x); a_0/2=(1/T)int f; PAR/IMPAR arauak) eta bi aplikazio: (a) f=1 (a_0/2=1, a_n=0) eta (5) ariketa cos x-en garapena (0,pi)-n oinarri periodikoarekin (a_0/2=0, a_n=0 parekotasunez; b_n-ek 65. orriko sinu-seriea berreskuratzen dute: cos x=sum 8n/(pi(4n^2-1)) sin(2nx)). cos x-en hedapen periodikoaren irudia CeTZ-rekin (beheranzko arku errepikatuak, jauziekin). Bi zuzenketa mentzioz (b_2 sin 2 omega x, paperak b_2 cos omega x, 83. orriko akats bera; lehen integralaren zeinua -sin->sin). Sekuentzia jarraitua (76-77, 0038ren jarraipena); konfiantza ertaina",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a80",
   "maila": 2,
   "izenburua": "Koefizienteen eratorpena biderkadura eskalarraz eta bi aplikazio",
   "blokeak": [
    {
     "mota": "testua",
     "html": "74.-75. orrialdeen jarraipen zuzena: orain <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> eta <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math> koefizienteen formulak biderkadura eskalarretik eratortzen dira, <math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>T</mi><mi>/</mi><mn>2</mn></mrow></math> kalkulu laguntzailea erabiliz."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Koefizienteen formulak biderkadura eskalarretik"
    },
    {
     "mota": "testua",
     "html": "Fourier-en seriea izanik, <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>b</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>b</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-en gainean proiektatzen da (gainerako gaiak ortogonalak dira): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo></mrow></math> hots, <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> norma zatika integratuz kalkula daiteke (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>v</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>, beraz <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mi>/</mi><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>): mugako gaia deuseztatzen da (<math display=\"inline\"><mrow><mi>ω</mi><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi></mrow></math> delako) eta <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup></mrow></math> ordezkatuz, <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mn>1</mn><mi>d</mi><mi>x</mi><mo>−</mo><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Beraz <math display=\"inline\"><mrow><mn>2</mn><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mn>1</mn><mi>d</mi><mi>x</mi><mo>=</mo><mi>T</mi></mrow></math>, hau da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mi>T</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ondorioz, <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> delako, koefizienteen formula orokorra lortzen da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>-n (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>0</mn><mo>=</mo><mn>1</mn></mrow></math>) termino konstantea <math display=\"inline\"><mrow><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> da. Paperak gorriz azpimarratzen ditu arauak: <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> koefizienteak <strong>serie orokorrean</strong>; funtzio <strong>bikoitietan</strong> <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> eta <strong>bakoitietan</strong> <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren zuzenketa: $b_2 sin(2 omega x)$",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Paperak <math display=\"inline\"><mrow><msub><mi>b</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idazten du seriearen hasieran. Zuzena <math display=\"inline\"><mrow><msub><mi>b</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da: <math display=\"inline\"><mi>b</mi></math> koefizienteek sinuak dituzte lagun (autoreak berak <math display=\"inline\"><mrow><msub><mi>b</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idazten du lerro berean) eta bigarren harmonikoak <math display=\"inline\"><mrow><mn>2</mn><mi>ω</mi><mi>x</mi></mrow></math> darama. <strong>83. orrian egindako akats bera da</strong> (<code>koadernoa_metodo_n3_p082.typ</code>), beraz seriea kopiatzean errepikatzen den lerradura da, ez kasu isolatua."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(a) Aplikazioa: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Funtzio konstanterako, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>T</mi></mrow></math> izanik: <math display=\"block\"><mrow><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mn>1</mn><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><mo>⋅</mo><mi>T</mi><mo>=</mo><mn>1</mn><mo>,</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>-erako <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>n</mi><mi>ω</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mi>T</mi></msubsup><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> delako. Espero zena da: funtzio konstantea <math display=\"inline\"><mn>1</mn></math> bere Fourier-en seriea da jada, <math display=\"inline\"><mrow><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac><mo>=</mo><mn>1</mn></mrow></math> gai bakarrarekin."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren zuzenketa: lehen integralaren zeinua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Paperak <math display=\"inline\"><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mi>T</mi></msubsup></math> idazten du (minus zeinuarekin). Zuzena minus gabe da: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-en jatorrizko funtzioa <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>a</mi></mrow></math> da, zeinu positiboarekin. Autoreak lortzen duen <math display=\"inline\"><mn>0</mn></math> emaitza ez da aldatzen, sinua bi muturretan deuseztatzen delako."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(5) ariketa: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>-en garapena"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> funtzioa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tartean garatzen da, <math display=\"inline\"><mi>π</mi></math> periodoko oinarriarekin (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). Hedapen periodikoa <strong>bakoitia</strong> da, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>k</mi><mi>π</mi></mrow></math>-n jauziekin:"
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "testua",
     "html": "Koefizienteak <math display=\"inline\"><mi>π</mi></math>-ko tartean honela geratzen dira: <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>,</mo></mrow></math> eta termino konstantea <math display=\"block\"><mrow><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>π</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mi>π</mi></msubsup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> koefizienteez, glosa berdeak dio <strong>integral hori ez dela beharrezkoa</strong>, eta arrazoia du: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> bakoitia da tartearen erdiko puntuarekiko, beraz kosinuzko koefizienteak deuseztatu egiten dira kalkulatu gabe. Zuzenean egiaztatzen da, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mi>m</mi></math> oso ez-nulua) direlako: <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>≥</mo><mn>1</mn><mi>.</mi></mrow></math> Paperak zatikako integrazio bikoitzarekin lortzen du emaitza bera: <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>0</mn><mo>+</mo><mi>I</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, beraz <math display=\"inline\"><mrow><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math>. Sinuzko koefizienteek soilik biziraun eta 65. orriko emaitza berreskuratzen dute (<code>koadernoa_metodo_n3_p064.typ</code>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mn>8</mn><mi>n</mi></mrow><mrow><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berregiaztatua</strong> (biderkadura eskalarra): <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>T</mi><mi>/</mi><mn>2</mn></mrow></math> (⭐ zatika, <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>I</mi></mrow></math>), <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∫</mo><mi>f</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∫</mo><mi>f</mi></mrow></math> (bat dator 74. orriarekin), PAR/IMPAR arauak (bikoitietan <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, bakoitietan <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>). Aplikazioak: <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>1</mn></mrow></math> (⭐ <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>) eta 5. ariketa (<math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>; ⭐ zatika bikoitza). Dena zuzena.",
        "<strong>Bi zuzenketa (mentzioz):</strong> (1) <math display=\"inline\"><mrow><msub><mi>b</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (paperak <math display=\"inline\"><mrow><msub><mi>b</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; 83. orriko akats bera); (2) lehen integralean zeinua (<math display=\"inline\"><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo>→</mo><mi mathvariant=\"normal\">sin</mi></mrow></math>; <math display=\"inline\"><mn>0</mn></math> emaitza ez da aldatzen).",
        "<strong>Ez dira ukitu:</strong> <math display=\"inline\"><mi>v</mi></math>-ko <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> soberakoa eta 76. orriaren amaierako lerro moztua (<math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup></mrow></math> integrakinik gabe); biak transkripzioko zalantzetan. Eskuineko marjinako <math display=\"inline\"><mi>ω</mi></math> inguruko ohar solteak (&quot;beste <math display=\"inline\"><mi>T</mi></math> baterako&quot;, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi></mrow></math>) ez dira maketatu, osatu gabe daudelako.",
        "<strong>Fidelitatea (konfiantza ertaina):</strong> gaztelaniaz. Ez dago <code>CN3pN</code> etiketarik; 76-77 orriak erabili dira (0038ren jarraipena). Ikus <code>koadernoa_metodo_n3_p076.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, 78.-79. orrialdeak (0040 unitatea): (5) ariketaren itxiera (a_n=0 errekurtsioz I=I/4n^2; parekotasun-arauak bikoiti/bakoiti irudiarekin; b_n zatika integrazio bikoitzez, errekurtsioa I=1/n+I/4n^2 -> b_n=8n/(pi(4n^2-1)), 65. orriarekin bat) eta saio berria (2014/3/4) bero-ekuazioa bi dimentsiotan (u_t=Delta u errektangeluan lau aldeak 0C-tan; aldagaien banaketa u=XYT -> Sturm-Liouville norabide bakoitzean; oinarri ortogonal biderkakorra sin(n pi x/b)sin(m pi y/a); koefiziente bikoitza integral bikoitzez g_nm). Errektangeluaren eremuaren eta parekotasunaren irudiak CeTZ-rekin. Zuzenketa kateatua mentzioz (⭐⭐ errekurtsioaren muga-terminoa 2/pi n eta zeinua +, eta emaitza 8n/(pi(4n^2-1)); paperak 1/pi, - eta 16n^2/(pi(4n^2+1)) -> 4/pi, ez du zerorantz jotzen). Hiru bidez egiaztatua (scipy). Sekuentzia jarraitua (78-79); konfiantza ertaina",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a81",
   "maila": 2,
   "izenburua": "Ariketaren itxiera eta bero-ekuazioa bi dimentsiotan",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(5) ariketaren itxiera: <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math>"
    },
    {
     "mota": "testua",
     "html": "Aurreko orriko zatikako integrazio bikoitzak errekurtsio bat uzten du: kosinuzko koefizientearen integrala bere buruaren araberakoa da, <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>,</mo></mrow></math> hots, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>≠</mo><mn>1</mn></mrow></math> denez (<math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>), integrala deuseztatzen da eta <strong>berriro</strong> <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> lortzen da."
    },
    {
     "mota": "testua",
     "html": "Paperak gorriz laburbiltzen ditu parekotasun-arauak, gurutzatutako geziekin: funtzio <strong>bikoitiek</strong> ez dute sinuzko osagairik, eta <strong>bakoitiek</strong> ez dute kosinuzkorik."
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "testua",
     "html": "Sinuzko koefizientea zatika integratuz kalkulatzen da. <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> izanik, definitu bedi <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>. Lehen zatikako integrazioak (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>v</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn><mi>n</mi></mrow></math>) hau ematen du: <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mi>π</mi></msubsup><mo>−</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>−</mo><mfrac><mi>J</mi><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>. Bigarrenak (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>v</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>) <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mi>−</mi><mi>I</mi><mi>/</mi><mn>2</mn><mi>n</mi></mrow></math> ematen du (mugako gaia deuseztatzen da, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>0</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>π</mi><mo>=</mo><mn>0</mn></mrow></math>). Ordezkatuz, errekurtsioa geratzen da: <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>+</mo><mfrac><mi>I</mi><mrow><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hots </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mrow><mi>π</mi><mi>n</mi></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><msub><mi>b</mi><mi>n</mi></msub><mi>.</mi></mrow></math> Bertatik <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mi>/</mi><mi>π</mi><mi>n</mi></mrow></math>, hau da <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>=</mo><mn>2</mn><mi>/</mi><mi>π</mi><mi>n</mi></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>8</mn><mi>n</mi></mrow><mrow><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Emaitza hau <strong>65. orrian</strong> enkoadratutakoaren berdina da (<code>koadernoa_metodo_n3_p064.typ</code>): <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>8</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "⭐⭐ Iturriaren zuzenketa kateatua: <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>8</mn><mi>n</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Paperak bigarren saio honetan bi akats ditu, kateatuak. (1) <strong>Errekurtsioan</strong> <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>1</mn><mi>/</mi><mi>π</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>b</mi><mi>n</mi></msub></mrow></math> idazten du; zuzena <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>b</mi><mi>n</mi></msub></mrow></math> da: muga-terminoak <math display=\"inline\"><mrow><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mi>π</mi></msubsup><mo>=</mo><mn>2</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> balio du (ez <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>π</mi></mrow></math>; autoreak berak ondo idazten du bi lerro lehenago, giltzaren azpian), eta zeinua positiboa da (bigarren integrazioak sartzen duen minusa lehenagokoarekin konposatzen delako). (2) <strong>Emaitzan</strong> <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>16</mn><msup><mi>n</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> idazten du; errekurtsio zuzena askatuz <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>8</mn><mi>n</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da. Zuzenketaren froga barnekoa eta erabakigarria: balio hori da autoreak berak <strong>65. orrian</strong> lortu zuena, hamahiru orri lehenago; gainera paperaren balioak ez du zerorantz jotzen <math display=\"inline\"><mi>n</mi></math> handitzean (<math display=\"inline\"><mrow><mn>4</mn><mi>/</mi><mi>π</mi></mrow></math>-rantz baizik), Fourier-en seriearen konbergentziarekin bateraezina."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibidea: bero-ekuazioa bi dimentsiotan (aldagaien banaketa)"
    },
    {
     "mota": "testua",
     "html": "Saio berria (2014/3/4). Errektangelu bateko bero-ekuazioa lantzen da, lau aldeak <math display=\"inline\"><mrow><mn>0</mn><msup><mi></mi><mo>∘</mo></msup><mi mathvariant=\"normal\">C</mi></mrow></math>-tan: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> muga-baldintzekin <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>Y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> proposatuz, aldagai espazial bakoitzak Sturm–Liouville problema bat betetzen du Dirichlet-en baldintzekin; adibidez <math display=\"inline\"><mi>x</mi></math>-rako <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>X</mi><mo>″</mo></msup><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mi>X</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Beraz oinarri ortogonala bi familien biderkadura da: <math display=\"block\"><mrow><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>b</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><mi>π</mi><mi>y</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mrow><mi>n</mi><mo>,</mo><mi>m</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mo>,</mo></mrow></math> eta hasierako datua eta soluzioa oinarri horretan garatzen dira: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>,</mo><mi>m</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>u</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>b</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><mi>π</mi><mi>y</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>,</mo><mi>m</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>g</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>b</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><mi>π</mi><mi>y</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Dimentsio bakarreko kasu orokorrean, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bada, biderkadura eskalarraren bidez (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>y</mi><mi>n</mi></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>f</mi><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>ρ</mi></msub><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>y</mi><mi>n</mi></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><msub><mi>y</mi><mi>n</mi></msub><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>ρ</mi></msub></mrow></math>, ortogonaltasunez) koefizientea <math display=\"inline\"><mi>ρ</mi></math> pisuarekin lortzen da: <math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>y</mi><mi>n</mi></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>f</mi><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>ρ</mi></msub></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>y</mi><mi>n</mi></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><msub><mi>y</mi><mi>n</mi></msub><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>ρ</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow><mrow><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><msubsup><mi>y</mi><mi>n</mi><mn>2</mn></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></mfrac><mo>,</mo></mrow></math> 56. orrian ikusitako formula bera (<code>koadernoa_metodo_n3_p056.typ</code>). Bi dimentsiotan, aldagai bakoitzeko ortogonaltasunez, koefiziente bikoitza integral bikoitzaren eta bi normen biderkaduraren arteko zatidura da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>g</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo>=</mo><mfrac><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><msubsup><mo>∫</mo><mn>0</mn><mi>b</mi></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>b</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><mi>π</mi><mi>y</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><mi>π</mi><mi>y</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mo>∫</mo><mn>0</mn><mi>b</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berregiaztatua</strong> (ariketaren itxiera): <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> errekurtsioz (<math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mi>I</mi><mi>/</mi><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>⇒</mo><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math>); parekotasun-arauak (bikoitiek sinurik ez, bakoitiek kosinurik ez). ⭐⭐ <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math> hiru bidez independenteki: (i) errekurtsioa zatika, (ii) berregiaztapen zuzena <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>4</mn><mi>n</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, (iii) <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> identitatea <math display=\"inline\"><mrow><mo>→</mo><mn>4</mn><mi>n</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; hiruek <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>8</mn><mi>n</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> ematen dute, 65. orriarekin bat, eta bat ere ez paperaren balioarekin. Dena zuzena.",
        "<strong>Bi zuzenketa kateatu (mentzioz):</strong> errekurtsioaren muga-terminoa (<math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><mi>π</mi><mi>n</mi></mrow></math>, ez <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>π</mi></mrow></math>) eta zeinua (<math display=\"inline\"><mi>+</mi></math>), eta ondorioz emaitza (<math display=\"inline\"><mrow><mn>8</mn><mi>n</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, ez <math display=\"inline\"><mrow><mn>16</mn><msup><mi>n</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>).",
        "<strong>Bero-ekuazioa 2D:</strong> aldagaien banaketak (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>X</mi><mi>Y</mi><mi>T</mi></mrow></math>) Sturm–Liouville problema bana ematen du norabide bakoitzean, eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mi>/</mi><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>π</mi><mi>y</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> oinarri biderkakorra; koefizienteak ortogonaltasunez, integral bikoitzez. ⭐ Ez da egiaztagarria <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> menpekotasuna eta autobalioa (paperak ez ditu idazten; problema planteatuta baina itxi gabe).",
        "<strong>Ez dira ukitu:</strong> obaloko <math display=\"inline\"><mi mathvariant=\"normal\">cos</mi></math> (garapena sinuzkoa da), bigarren lerroko berretzaile lekualdatua (<math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>n</mi><mi>x</mi><mo>→</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>n</mi><mi>x</mi></mrow></math>), eta <math display=\"inline\"><mrow><msub><mi>δ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>y</mi><mi>n</mi></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> ohar iluna; hirurak transkripzioko zalantzetan. Data alderantziz idatzia dago (<code>2014/3/4</code> = 2014/3/4, martxoak 4).",
        "<strong>Fidelitatea (konfiantza ertaina):</strong> gaztelania (ezker) eta euskara (eskuin). Ez dago <code>CN3pN</code> etiketarik; 78-79 orriak erabili dira. Ikus <code>koadernoa_metodo_n3_p078.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, 80.-81. orrialdeak (0041 unitatea): bero-problema 2D-ren itxiera (koefiziente bakoitza deuseztatuz u_nm+lambda_nm^2 u_nm=0 -> u_nm=g_nm e^(-lambda_nm^2 t), lambda_nm^2=(n pi/b)^2+(m pi/a)^2); banaketa egonkorra (u_t=0 -> Laplace Delta u=0 errektangeluan, hiru alde 0 eta u(0,y)=f(y); aldagaien banaketa, y-k darama S-L, Y_n=sin(n pi y/a)); eta Green-en funtzioaren adibide OSOA [(1/x^2)y']'=2x+1, y(1)=y(2)=0: lau baldintzak (G(1)=0, G(2)=0, jarraitutasuna, deribatuaren jauzia P(s)[G']=1) -> A=(s^3-8)/21, B=(8-s^3)/21, C=(s^3-1)/21, D=-8(s^3-1)/21. Bi irudi CeTZ-rekin: Laplace-ren eremua (f(y) ezkerrean) eta Green-en funtzioa G(x,s) (s=3/2). ZUZENKETARIK EZ (dena zuzena; Green-en lau koefizienteak berreraikita, 21 barne; scipy-z egiaztatua: baldintzak eta BVP-ren berreraikuntza y=int G(x,s)(2s+1)ds bat dator soluzio analitikoarekin). Sekuentzia jarraitua (80-81); konfiantza ertaina",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a82",
   "maila": 2,
   "izenburua": "Problema egonkorra eta Green-en funtzioaren adibide osoa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bero-problema bidimentsionalaren itxiera"
    },
    {
     "mota": "testua",
     "html": "Garapena ekuazioan ordezkatuz eta oinarri biderkakorraren independentzia linealagatik koefiziente bakoitza deuseztatuz, denbora-ekuazio arrunt bat geratzen da modu bakoitzeko: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mover><mi>u</mi><mo accent=\"true\">̇</mo></mover><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo>+</mo><msubsup><mi>λ</mi><mrow><mi>n</mi><mi>m</mi></mrow><mn>2</mn></msubsup><msub><mi>u</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>u</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>g</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>u</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo>=</mo><msub><mi>g</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><msup><mi>e</mi><mrow><mi>−</mi><msubsup><mi>λ</mi><mrow><mi>n</mi><mi>m</mi></mrow><mn>2</mn></msubsup><mi>t</mi></mrow></msup><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><msubsup><mi>λ</mi><mrow><mi>n</mi><mi>m</mi></mrow><mn>2</mn></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>π</mi><mi>/</mi><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>. Modu bakoitza azkarrago itzaltzen da <math display=\"inline\"><mi>n</mi></math> eta <math display=\"inline\"><mi>m</mi></math> handiagoak izanik, bero-difusioari dagokion bezala."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibidea: banaketa egonkorra (Laplace-ren ekuazioa)"
    },
    {
     "mota": "testua",
     "html": "Denbora-deribatua deuseztatzean (<math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>, hots <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), bero-ekuazioa Laplace-renera murrizten da, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>, muga-baldintza ez-homogeneo batekin: hiru alde nuluak eta laugarrena <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "testua",
     "html": "Aldagaiak banatuz, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>Y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mfrac><msup><mi>X</mi><mo>″</mo></msup><mi>X</mi></mfrac><mo>+</mo><mfrac><msup><mi>Y</mi><mo>″</mo></msup><mi>Y</mi></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><msup><mi>X</mi><mo>″</mo></msup><mi>X</mi></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>Y</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>Y</mi></mfrac><mo>=</mo><msup><mi>λ</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Baldintza homogeneoak <math display=\"inline\"><mi>y</mi></math> norabidean daudenez, hor kokatzen da Sturm–Liouville problema: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>Y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mi>Y</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>Y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>Y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>Y</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>n</mi></msub><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mi>a</mi></mfrac><mi>.</mi></mrow></math> Ondoren, funtzio guztiak oinarri horretan garatzen dira: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>u</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>y</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>f</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>y</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Green-en funtzioaren adibide osoa"
    },
    {
     "mota": "testua",
     "html": "Ebatzi beharreko problema <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math> da (hau da, <math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>), <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> muga-baldintzekin. Green-en funtzioak <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>G</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> betetzen du, <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> baldintzekin."
    },
    {
     "mota": "testua",
     "html": "Ekuazio homogeneoak, <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>c</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math> ematen du, hots <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>c</mi><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mo>+</mo><mi>d</mi></mrow></math>; beraz tarte bakoitzean forma <math display=\"inline\"><mrow><mi>A</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>B</mi></mrow></math> da: <math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>A</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>B</mi><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>C</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>D</mi><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Lau baldintzak ezartzen dira:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "(i) <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>A</mi><mo>+</mo><mi>B</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mi>−</mi><mi>A</mi></mrow></math>;",
      "(ii) <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mn>8</mn><mi>C</mi><mo>+</mo><mi>D</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>D</mi><mo>=</mo><mi>−</mi><mn>8</mn><mi>C</mi></mrow></math>;",
      "(iii) jarraitutasuna <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>s</mi></mrow></math>-n: <math display=\"inline\"><mrow><mi>A</mi><msup><mi>s</mi><mn>3</mn></msup><mo>+</mo><mi>B</mi><mo>=</mo><mi>C</mi><msup><mi>s</mi><mn>3</mn></msup><mo>+</mo><mi>D</mi></mrow></math>;",
      "(iv) deribatuaren jauzia: <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>/</mi><msup><mi>s</mi><mn>2</mn></msup></mrow></math> izanik, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>G</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mo>+</mo></msup><mo>,</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msup><mi>G</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mo>−</mo></msup><mo>,</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>, hots <math display=\"inline\"><mrow><msup><mi>G</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mo>+</mo></msup><mo>,</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msup><mi>G</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mo>−</mo></msup><mo>,</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msup><mi>s</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></math>; <math display=\"inline\"><mrow><msup><mi>G</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>A</mi><msup><mi>x</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>C</mi><msup><mi>x</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow></mrow></math> denez, <math display=\"inline\"><mrow><mn>3</mn><mi>C</mi><msup><mi>s</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>A</mi><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></math>, hau da <math display=\"inline\"><mrow><mi>C</mi><mo>−</mo><mi>A</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "(i) eta (ii) (iii)-n ordezkatuz <math display=\"inline\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da; (iv)-rekin batera <math display=\"inline\"><mrow><mn>7</mn><mi>C</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math>, beraz <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>21</mn></mrow></math>. Handik lau koefizienteak: <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mfrac><mrow><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn></mrow><mn>21</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><mfrac><mrow><mn>8</mn><mo>−</mo><msup><mi>s</mi><mn>3</mn></msup></mrow><mn>21</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>C</mi><mo>=</mo><mfrac><mrow><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn></mrow><mn>21</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>D</mi><mo>=</mo><mi>−</mi><mfrac><mn>8</mn><mn>21</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn></mrow><mn>21</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><mrow><mn>8</mn><mo>−</mo><msup><mi>s</mi><mn>3</mn></msup></mrow><mn>21</mn></mfrac><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn></mrow><mn>21</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mfrac><mn>8</mn><mn>21</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berregiaztatua (zuzenketarik gabe):</strong> bero-problemaren itxiera (<math display=\"inline\"><mrow><msub><mover><mi>u</mi><mo accent=\"true\">̇</mo></mover><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo>+</mo><msubsup><mi>λ</mi><mrow><mi>n</mi><mi>m</mi></mrow><mn>2</mn></msubsup><msub><mi>u</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msubsup><mi>λ</mi><mrow><mi>n</mi><mi>m</mi></mrow><mn>2</mn></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>π</mi><mi>/</mi><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo>=</mo><msub><mi>g</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><msup><mi>e</mi><mrow><mi>−</mi><msubsup><mi>λ</mi><mrow><mi>n</mi><mi>m</mi></mrow><mn>2</mn></msubsup><mi>t</mi></mrow></msup></mrow></math>); problema egonkorra (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mi>y</mi></math> aldagaiak darama Sturm–Liouville, <math display=\"inline\"><mrow><msub><mi>Y</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>y</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). ⭐⭐ Green-en funtzioa independenteki berreraikita: lau baldintzek <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>21</mn></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>21</mn></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>8</mn><mo>−</mo><msup><mi>s</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>21</mn></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mi>−</mi><mn>8</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>21</mn></mrow></math> ematen dute; <strong>laurak bat datoz eskuizkribuarekin</strong>, <code>21</code> izendatzailea barne. Dena zuzena.",
        "<strong>Zuzenketarik ez:</strong> tarteko hirugarren unitatea zuzenketarik gabe; egiaztatutako adierazpen guztiak zuzenak dira.",
        "<strong>Koherentzia:</strong> jauzi-baldintza 59. orrian eratorritakoa da eta zatikako eraikuntza 58. orrikoa (<code>koadernoa_metodo_n3_p058.typ</code>); adibide honek garapen teoriko hori kasu numeriko oso batekin ixten du. <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msup><mi>s</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></math> idazkera <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren forma literala da.",
        "<strong>Ez dira ukitu (zalantzak):</strong> lehen integrazioko <code>10 c</code> konstantea (testuinguruak <math display=\"inline\"><mi>c</mi></math> dela iradokitzen du); koefiziente-zerrendako <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>+</mo><mn>8</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>21</mn></mrow></math> irakur daiteke, baina amaierako <math display=\"inline\"><mi>G</mi></math>-n <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>21</mn></mrow></math>, zuzena); urratsen zenbaketa (bi <code>1</code>); batukariaren azpiko barra bikoitza eta <math display=\"inline\"><mn>0</mn></math>.",
        "<strong>Fidelitatea (konfiantza ertaina):</strong> euskara (ezker) eta nahasketa (eskuin). Ez dago <code>CN3pN</code> etiketarik; 80-81 orriak erabili dira. Ikus <code>koadernoa_metodo_n3_p080.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, 82.-83. orrialdeak (0042 unitatea): Green-en ariketa-zerrenda (oso azkar idatzia): (1) aurreko orriko Green-en funtzioa aplikatuz soluzioa y=int_1^x + int_x^2 f(s)G(x,s)ds, balio itxi egiaztatua y=x^5/5+x^4/4-(199/140)x^3+34/35; (2) Green-en funtzioa muga-baldintza mistoekin [(y'/(x+1))]'=cos x (homogeneoa y=Ax^2+2Ax+B; jauzia 1+s; Fredholm-en alternatiba: Green existitzen da homogeneoak soluzio tribiala baino ez badu); (3) Euler motako autobalio-problema L[y]=-x^2 y''-x y' (murrizketa [x y']'=-lambda y/x, x=e^t -> y_tt+lambda y=0, soluzio logaritmikoak sin/cos(sqrt(lambda)ln x), espektro positiboa). IRUDIRIK EZ (dentsoa, marrazkirik gabe). ZUZENKETARIK EZ (irakurketa-zalantza asko; egitura egiaztagarria maketatua; scipy-z egiaztatua). Orri-zenbaketa: hauek dira benetako 82-83 (0037-n '82' irakurria '72' da; sekuentzia jarraitua baieztatua). Konfiantza ertaina",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a83",
   "maila": 2,
   "izenburua": "Green-en ariketak eta Euler motako autobalio-problema",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Green-en ariketa-zerrenda bat da, oso azkar idatzia, adierazpen gainjarri eta lerro osatugabeekin. Egitura egiaztagarria maketatzen da; irakurketa-zalantzak amaierako oharrean zerrendatzen dira."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "1. ariketa: Green-en funtzioa aplikatuz"
    },
    {
     "mota": "testua",
     "html": "Aurreko orriko Green-en funtzioarekin (<code>koadernoa_metodo_n3_p080.typ</code>) eta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>s</mi><mo>+</mo><mn>1</mn></mrow></math> iturriarekin, soluzioa tarteka integratuz idazten da: <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>1</mn><mi>x</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>s</mi><mo>+</mo><msubsup><mo>∫</mo><mi>x</mi><mn>2</mn></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>s</mi><mo>,</mo></mrow></math> non lehen integralean (<math display=\"inline\"><mrow><mi>s</mi><mo>&lt;</mo><mi>x</mi></mrow></math>) <math display=\"inline\"><mrow><mi>s</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>2</mn></mrow></math> adarra erabiltzen den eta bigarrenean (<math display=\"inline\"><mrow><mi>s</mi><mo>&gt;</mo><mi>x</mi></mrow></math>) <math display=\"inline\"><mrow><mn>1</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>s</mi></mrow></math> adarra. Planteamendua zuzena da."
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Emaitza egiaztatua: <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eskuizkribuko koefiziente zenbakizkoak oso trinko idatzita daude eta irakurketa batek (<math display=\"inline\"><mrow><msup><mi>x</mi><mn>4</mn></msup><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mn>137</mn><mi>/</mi><mn>30</mn></mrow></math>, <math display=\"inline\"><mrow><mn>49</mn><mi>/</mi><mn>35</mn></mrow></math>) ez du bat egiten. Green-en integralaren balio egiaztatua (scipy eta integrazio zuzena) hau da: <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mn>4</mn></mfrac><mo>−</mo><mfrac><mn>199</mn><mn>140</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><mn>34</mn><mn>35</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "2. ariketa: Green-en funtzioa muga-baldintza mistoekin"
    },
    {
     "mota": "testua",
     "html": "Problema <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msup><mi>y</mi><mo>′</mo></msup><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> da, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> muga-baldintza mistoekin (bigarren aldaerak <math display=\"inline\"><mrow><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> darama). Sistema homogeneoak, <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msup><mi>y</mi><mo>′</mo></msup><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>c</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ematen du, hots <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>+</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>d</mi><mo>=</mo><mi>A</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi></mrow></math> (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>c</mi><mi>/</mi><mn>2</mn></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "Green-en funtzioa tarteka eraikitzen da: <math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>A</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>C</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>C</mi><mi>x</mi><mo>+</mo><mi>D</mi><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>s</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Muga-baldintzek (<math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mi>G</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>G</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>) eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>s</mi></mrow></math>-ko jarraitutasunak koefizienteak lotzen dituzte; deribatuaren jauzia <math display=\"inline\"><mrow><msup><mi>G</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mo>+</mo></msup><mo>,</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msup><mi>G</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mo>−</mo></msup><mo>,</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mi>/</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik, hau da jauzia <math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mi>s</mi></mrow></math> (59. orria, <code>koadernoa_metodo_n3_p058.typ</code>)."
    },
    {
     "mota": "oharra",
     "titulua": "⭐ Green-en existentzia (Fredholm-en alternatiba)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Glosetan ageri den oharra —<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> problema homogeneoaren balio propioa bada, ez dela Green-en funtziorik existitzen— zuzena da: Green-en funtzioa existitzen da baldin eta soilik baldin muga-baldintza berdinekin problema homogeneoak soluzio tribiala baino ez badu (56. orria, <code>koadernoa_metodo_n3_p056.typ</code>)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Iturrian gorriz laukituriko oharrak iturri-puntuko hiru propietateak laburbiltzen ditu, zuzen: <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>s</mi></mrow></math>-n <math display=\"inline\"><mi>G</mi></math> jarraitua da, <math display=\"inline\"><msup><mi>G</mi><mo>′</mo></msup></math>-k mailakada bat du (<math display=\"inline\"><mrow><mo>∼</mo><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) eta <math display=\"inline\"><msup><mi>G</mi><mo>″</mo></msup></math>-k delta bat (<math display=\"inline\"><mrow><mo>∼</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) — 58. orrian ezarritakoa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "3. ariketa: Euler motako autobalio-problema"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup></mrow></math> eragilearentzat, <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>λ</mi><mi>y</mi></mrow></math> ekuazioa <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> da (Euler motakoa). <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>x</mi></mrow></math> faktore integratzaileak Sturm–Liouville formara darama: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>x</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo>=</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ρ</mi><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>e</mi><mi>t</mi></msup></mrow></math> aldaketak koefiziente konstanteetara eramaten du, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>λ</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; beraz soluzioak logaritmikoak dira: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> bada, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> eta soluzio esponentzial errealak agertzen dira; tarte bornatuan Dirichlet-en baldintzekin ez dute modu ez-tribialik ematen, beraz espektroa positiboa da (eskuizkribuak ez du ondorioa ixten). Problema ez-homogeneoaren soluzioa oinarrian garatuta: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munder><mo>∑</mo><mi>n</mi></munder><mfrac><msub><mi>f</mi><mi>n</mi></msub><mrow><mi>−</mi><msub><mi>λ</mi><mi>n</mi></msub></mrow></mfrac><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>φ</mi><mi>n</mi></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo></mrow></math> 55. orriko formula da (<math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><mn>0</mn></mrow></math>-rekin, <code>koadernoa_metodo_n3_p054.typ</code>)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berregiaztatua:</strong> (1) Green-en aplikazioaren egitura zuzena; balio itxia <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>5</mn></msup><mi>/</mi><mn>5</mn><mo>+</mo><msup><mi>x</mi><mn>4</mn></msup><mi>/</mi><mn>4</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>199</mn><mi>/</mi><mn>140</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>34</mn><mi>/</mi><mn>35</mn></mrow></math> (scipy-z egiaztatua, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>). (2) Homogeneoa <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi></mrow></math>; jauzia <math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mi>s</mi></mrow></math>. ⭐ Fredholm-en alternatiba (Green existitzen da problema homogeneoak soluzio tribiala baino ez badu). ⭐ Iturri-puntuko hiru propietateak (<math display=\"inline\"><mi>G</mi></math> jarraitua, <math display=\"inline\"><mrow><msup><mi>G</mi><mo>′</mo></msup><mo>∼</mo><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>G</mi><mo>″</mo></msup><mo>∼</mo><mi>δ</mi></mrow></math>). ⭐ Euler-en murrizketa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>′</mo></msup><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>e</mi><mi>t</mi></msup><mo>⇒</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>λ</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (soluzio logaritmikoak, espektro positiboa). Dena zuzena egiaztagarrian.",
        "<strong>Zuzenketarik ez:</strong> orrialde bikoitz hau abiadura handian idatzita dago, gainjarritako adierazpenekin. Zazpi puntu anomalo irakurketaren mendekoak dira eta ez dira ebazten; denak zalantzetan uzten dira.",
        "<strong>Ez dira ukitu (zalantzak):</strong> 1. ariketako bigarren integrakina (<math display=\"inline\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> vs <math display=\"inline\"><mrow><mn>2</mn><mi>s</mi><mo>+</mo><mn>1</mn></mrow></math>) eta <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>8</mn><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>21</mn></mrow></math> vs <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>8</mn><mo>−</mo><msup><mi>s</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>21</mn></mrow></math>; emaitzako koefizienteak (<math display=\"inline\"><mrow><mn>137</mn><mi>/</mi><mn>30</mn></mrow></math>, <math display=\"inline\"><mrow><mn>49</mn><mi>/</mi><mn>35</mn></mrow></math>); 2. ariketako izendatzailea (<math display=\"inline\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><mo>−</mo><mn>4</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>); 3. ariketako sinuen argumentua (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> vs <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>) eta <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> lerroko lehen koefizientea (<math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math> izan behar luke). Tarte osoko irakurketa-zalantza gehien duen orrialdea da.",
        "<strong>Fidelitatea (konfiantza ertaina):</strong> euskara eta gaztelania nahastuta. Ez dago <code>CN3pN</code> etiketarik; 82-83 orriak erabili dira. Orri-zenbaketa: hauek dira benetako 82-83 (0037-n <code>82</code> irakurria <code>72</code> da; sekuentzia jarraitua). Ikus <code>koadernoa_metodo_n3_p082.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, 84.-85. orrialdeak (0043 unitatea): bero-ekuazioaren ebazpen OSOA aldagaien banaketaz (orri didaktikoena): u_t=alpha u_xx, u(0,t)=u(L,t)=0, u(x,0)=T. Banaketa u=X(x)T(t) -> (1/alpha)T'/T=X''/X=lambda; hiru kasu (lambda>0 eta lambda=0 tribialak, lambda<0 ez-nulua); balio propioak lambda_n=-n^2 pi^2/L^2, autofuntzioak sin(n pi x/L); denbora-atala T(t)=e^(-alpha(n pi/L)^2 t); serie-garapena u=sum b_n e^(...)sin(n pi x/L); ortogonaltasunez b_n=2T(1-(-1)^n)/(n pi) (bakoitiak). t->infinity limitea = 0 (enuntziatuak galdetzen du baina ez du erantzuten; esplizitatua). Soluzioaren beherakadaren irudia CeTZ-rekin (u(x,t) profilak denboran). Zuzenketa bat mentzioz (lambda<0 kasuan sqrt(-lambda) erroa falta; autoreak berak zuzentzen du hurrengo laukian). scipy-z egiaztatua (balio propioak, b_n, ortogonaltasuna, t->inf limitea). Sekuentzia jarraitua (84-85, 82-83ren jarraipena); konfiantza ertaina",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a84",
   "maila": 2,
   "izenburua": "Bero-ekuazioaren ebazpen osoa aldagaien banaketaz",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema eta aldagaien banaketa"
    },
    {
     "mota": "testua",
     "html": "Ebatzi beharreko problema, aldagaien banaketaz: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><mi>α</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>T</mi><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><mi>α</mi><mo>&gt;</mo><mn>0</mn></mrow></math> konstantea den. Enuntziatuak <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> limitea galdetzen du. <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> motako soluzioak bilatuz, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><mi>X</mi><msup><mi>T</mi><mo>′</mo></msup></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msup><mi>X</mi><mo>″</mo></msup><mi>T</mi></mrow></math>; ekuazioan ordezkatuz eta <math display=\"inline\"><mi>α</mi></math> denborarekin elkartuz, <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>α</mi></mfrac><mfrac><mrow><msup><mi>T</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>X</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>λ</mi><mi>.</mi></mrow></math> Atal bakoitza aldagai desberdin baten mendekoa denez, biak konstante bera dira (<math display=\"inline\"><mi>λ</mi></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kasu espazialaren azterketa"
    },
    {
     "mota": "testua",
     "html": "Atal espaziala <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>−</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> da, <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> baldintzekin. <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>r</mi><mi>x</mi></mrow></msup></mrow></math> probatuz, <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>, hots <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>±</mi><msqrt><mi>λ</mi></msqrt></mrow></math>. Hiru kasu: <math display=\"block\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>A</mi><msup><mi>e</mi><mrow><msqrt><mi>λ</mi></msqrt><mi>x</mi></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><msqrt><mi>λ</mi></msqrt><mi>x</mi></mrow></msup><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>A</mi><mo>+</mo><mi>B</mi><mi>x</mi><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>&lt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>λ</mi><mo>≥</mo><mn>0</mn></mrow></math> bada, muga-baldintzek soluzio tribiala baino ez dute onartzen; beraz <strong>soilik</strong> <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>-k ematen ditu soluzio ez-nuluak."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren zuzenketa: $sqrt(-lambda)$ erroa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Paperak tarteko lerroan <math display=\"inline\"><mrow><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idazten du, argumentuan errorik gabe. Zuzena <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da. <strong>Autoreak berak zuzentzen du bi lerro beherago</strong>, orria ixten duen laukian <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idazten duenean; beraz tarteko pausoko laburdura bat da."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Balio propioak eta autofuntzioak"
    },
    {
     "mota": "testua",
     "html": "Muga-baldintzak ezarriz, <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math>; eta <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>B</mi><mo>≠</mo><mn>0</mn></mrow></math>), beraz <math display=\"inline\"><mrow><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>L</mi><mo>=</mo><mi>n</mi><mi>π</mi></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>X</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Autofuntzioa konstante biderkatzaile bat salbu dago definituta (paperaren <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>1</mn></mrow></math> edo kte oharra)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Denbora-zatia eta soluzio orokorra"
    },
    {
     "mota": "testua",
     "html": "Denbora-atala <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo>−</mo><mi>α</mi><mi>λ</mi><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> da; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>-rekin, <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>, beraz <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>t</mi></mrow></msup></mrow></math> (zeinu negatiboak beherakada bermatzen du, difusioari dagokion bezala). Gainezarpenez, soluzio orokorra: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>b</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>T</mi></mrow></math> baldintzak <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>b</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>T</mi></mrow></math> eskatzen du. <math display=\"inline\"><mi>f</mi></math> bakoiti gisa hedatuz, ortogonaltasunez kalkulatzen dira koefizienteak: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>L</mi></mrow><mi>L</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>k</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mi>L</mi><msub><mi>δ</mi><mrow><mi>n</mi><mi>k</mi></mrow></msub></mrow></math> (tarte simetrikoan; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n <math display=\"inline\"><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow></math> litzateke). Datu konstanterako emaitza —eskuizkribua orri-oinean eten arren— honakoa da: <math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"inline\"><mi>n</mi></math> bakoitietarako soilik ez-nulua."
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> limitea (enuntziatuaren galdera)"
    },
    {
     "mota": "testua",
     "html": "Modu guztiak esponentzialki itzaltzen dira eta ez dago modu konstanterik (muga-baldintzak Dirichlet homogeneoak dira), beraz <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Fisikoki, barra bere muturretako tenperaturarekin (<math display=\"inline\"><mn>0</mn></math>) orekatzen da. Eskuizkribuak galdera hasieran planteatzen du baina <strong>ez du erantzuten</strong> bi orri hauetan; hemen esplizitatzen da."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berregiaztatua (scipy):</strong> ⭐ aldagaien banaketa (<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>α</mi><mo>⋅</mo><msup><mi>T</mi><mo>′</mo></msup><mi>/</mi><mi>T</mi><mo>=</mo><msup><mi>X</mi><mo>″</mo></msup><mi>/</mi><mi>X</mi><mo>=</mo><mi>λ</mi></mrow></math>); hiru kasuak (<math display=\"inline\"><mrow><mi>λ</mi><mo>≥</mo><mn>0</mn><mo>→</mo></mrow></math> tribiala baino ez; <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn><mo>→</mo></mrow></math> ez-nulua); ⭐ balio propioak <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>/</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></math> eta autofuntzioak <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>−</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> betetzen dute, <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>); denbora-atala <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>t</mi></mrow></msup></mrow></math>; ortogonaltasuna <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>L</mi></mrow><mi>L</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>L</mi><msub><mi>δ</mi><mrow><mi>n</mi><mi>k</mi></mrow></msub></mrow></math>; koefizienteak <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (bakoitiak); <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi><mo>→</mo><mi>u</mi><mo>→</mo><mn>0</mn></mrow></math>. Dena zuzena.",
        "<strong>Zuzenketa bat (mentzioz):</strong> <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> kasuko tarteko lerroan <math display=\"inline\"><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt></math> erroa falta (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mi>x</mi></mrow></math>); autoreak berak zuzentzen du hurrengo laukian.",
        "<strong>Ez dira ukitu:</strong> <math display=\"inline\"><mi>x</mi></math> aldagaiaren eta <math display=\"inline\"><mi>X</mi></math> funtzioaren notazio-talka koadro laguntzailean; orri-oinean eten den <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math>-ren kalkulua (hurrengo orrian jarraitzen du); <math display=\"inline\"><mi>T</mi></math> ikurraren erabilera bikoitza (denbora-funtzioa <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta hasierako tenperatura konstantea <math display=\"inline\"><mi>T</mi></math>). Zalantzak transkripzioan.",
        "<strong>Fidelitatea (konfiantza ertaina):</strong> gaztelania osorik. Tarteko orri didaktikoena (urratsik gabe). Ez dago <code>CN3pN</code> etiketarik; 84-85 orriak erabili dira (82-83ren jarraipena). Ikus <code>koadernoa_metodo_n3_p084.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, 86.-87. orrialdeak (0044 unitatea): (1) 1. problemaren itxiera: b_n=4T/(n pi) bakoitietan (ortogonaltasunez, f=T bakoitiaren hedapena), serie-soluzioa u=(4T/pi)sum 1/(2k+1) e^(...)sin((2k+1)pi x/L), eta t->infinity limitea=0 (esponentzialak 0-ra, sinuak bornatuak; interpretazio fisikoa). 0043-ko iragarpena (b_n eta limitea) hemen baieztatuta. (2) 2. problema muturretako tenperatura finkoekin (u(0,t)=T_1, u(pi,t)=T_2, u(x,0)=x(pi-x)): homogeneizazioa v(x)=((T_2-T_1)/pi)x+T_1 zuzena kenduz, w=u-v-k ekuazio homogeneo bera eta MB nuluak betetzen ditu (68. orriko teknika). Homogeneizazioaren irudia CeTZ-rekin (hasierako parabola + v(x) zuzena T_1..T_2). Bi zuzenketa mentzioz (w=u-v ikurra, paperak +v; w_x zeinua; autoreak berak kenketa erabiltzen du gero). scipy-z egiaztatua. Sekuentzia jarraitua (86-87); konfiantza ertaina",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a85",
   "maila": 2,
   "izenburua": "Limitearen erantzuna eta bigarren problemaren homogeneizazioa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "1. problemaren itxiera: koefizienteak, seriea eta limitea"
    },
    {
     "mota": "testua",
     "html": "Ortogonaltasunak <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mi>L</mi><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>L</mi></mrow><mi>L</mi></msubsup><mi>T</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> uzten du, hots <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>L</mi></mrow><mi>L</mi></msubsup><mi>T</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>. <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>T</mi></mrow></math> bakoiti gisa hedatuta (<math display=\"inline\"><mrow><mn>2</mn><mi>L</mi></mrow></math> periodoa), integrala honela geratzen da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bikoitia</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mrow><mn>4</mn><mi>T</mi></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bakoitia</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beraz indize bakoitiak soilik gordez (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></math>), serie-soluzioa: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>4</mn><mi>T</mi></mrow><mi>π</mi></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> limitean, esponentzial bakoitza <math display=\"inline\"><mn>0</mn></math>-rantz doa eta sinuak bornatuak dira, beraz: <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Fisikoki: muturrak <math display=\"inline\"><mn>0</mn></math> tenperaturan mantentzen dituen zerbaiti lotutako barra bat erabat hozten da. Soluzioak, gainera, edozein unetako tenperatura kalkulatzeko balio du."
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "⭐⭐ 0043-ko iragarpenaren baieztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurreko orrian (<code>koadernoa_metodo_n3_p084.typ</code>) <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math>-ren kalkulua orri-oinean eten zen eta <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>4</mn><mi>T</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (bakoitiak) eta limitea zero iragarri ziren. Orri honetan autoreak berak idatzita <strong>bien baieztapena</strong> dago: bi kasuak (<math display=\"inline\"><mi>n</mi></math> bikoiti/bakoiti) eta <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>-ko erantzuna. Berregiaztapena bat dator (scipy)."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "2. problema: muturretako tenperatura finkoak (homogeneizazioa)"
    },
    {
     "mota": "testua",
     "html": "Bigarren problemak muga-baldintza ez-homogeneoak ditu: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>π</mi><mrow><mtext mathvariant=\"normal\">, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub><mrow><mtext mathvariant=\"normal\">, </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>T</mi><mn>1</mn></msub><mo>→</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>→</mo><mn>0</mn></mrow></math> lortzeko, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> puntuetatik igarotzen den zuzen bat kentzen da. <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi></mrow></math> izanik, <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>a</mi><mi>π</mi><mo>+</mo><msub><mi>T</mi><mn>1</mn></msub><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub></mrow></math>, beraz <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>π</mi></mrow></math>: <math display=\"block\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub></mrow><mi>π</mi></mfrac><mi>x</mi><mo>+</mo><msub><mi>T</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math> <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>v</mi></mrow></math> definituz, <math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub></mrow><mi>π</mi></mfrac><mi>x</mi><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math>. <math display=\"inline\"><mi>v</mi></math> lineala eta denboratik independentea denez, <math display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, beraz <math display=\"inline\"><mrow><msub><mi>w</mi><mi>t</mi></msub><mo>=</mo><msub><mi>u</mi><mi>t</mi></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>: <math display=\"inline\"><mi>w</mi></math>-k <strong>ekuazio homogeneo bera</strong> betetzen du, orain muga-baldintza nuluekin: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>w</mi><mi>t</mi></msub><mo>−</mo><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub></mrow><mi>π</mi></mfrac><mi>x</mi><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Aldagaiak banatuz, <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mfrac><mrow><msup><mi>T</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>X</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>λ</mi></mrow></math> (84. orriko eskema, <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>1</mn></mrow></math>-ekin)."
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Iturriaren zuzenketa: <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>v</mi></mrow></math> ikurra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Paperak <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>+</mo><mi>v</mi></mrow></math> idazten du (eta garatzean <math display=\"inline\"><mrow><mi>+</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math>, baita <math display=\"inline\"><mrow><msub><mi>w</mi><mi>x</mi></msub><mo>=</mo><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mi>…</mi></mrow></math> ere). Zuzena kenketa da, <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>v</mi></mrow></math>. <strong>Autoreak berak frogatzen du bi lekutan</strong>: aurreko lerroan <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>v</mi></mrow></math> definitzen duenean, eta ondorengo lau lerroetan sistematikoki kenketa erabiltzen duenean (<math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), horrela bilatzen zituen zeroak lortuz. <math display=\"inline\"><msub><mi>w</mi><mi>x</mi></msub></math>-ko ikurrak ez du emaitza aldatzen, gero <math display=\"inline\"><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></math> erabiltzen delako (konstantea desagertzen da)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berregiaztatua (scipy):</strong> ⭐⭐ <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>T</mi></mrow></math> bakoitiaren hedapenetik): <math display=\"inline\"><mn>0</mn></math> bikoitietan, <math display=\"inline\"><mrow><mn>4</mn><mi>T</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bakoitietan; 0043-ko iragarpena baieztatzen du. Serie-soluzioa (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></math>) eta ⭐ <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi><mo>→</mo><mn>0</mn></mrow></math> (esponentzialak <math display=\"inline\"><mn>0</mn></math>-ra, sinuak bornatuak). ⭐ Homogeneizazioa: <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>π</mi><mo>⋅</mo><mi>x</mi><mo>+</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub></mrow></math>); <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>v</mi></mrow></math>-k ekuazio homogeneo bera eta muga-baldintza nuluak betetzen ditu (<math display=\"inline\"><mrow><msub><mi>w</mi><mi>t</mi></msub><mo>=</mo><msub><mi>u</mi><mi>t</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>). 68. orriko teknika (<math display=\"inline\"><mrow><msup><mi>v</mi><mo>″</mo></msup><mo>=</mo><mn>0</mn></mrow></math> kasu sinpleena). Dena zuzena.",
        "<strong>Bi zuzenketa (mentzioz):</strong> <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>v</mi></mrow></math> (paperak <math display=\"inline\"><mrow><mi>+</mi><mi>v</mi></mrow></math>) eta <math display=\"inline\"><mrow><msub><mi>w</mi><mi>x</mi></msub><mo>=</mo><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>π</mi></mrow></math> (paperak <math display=\"inline\"><mi>+</mi></math>); autoreak berak kenketa erabiltzen du ondorengo lau lerroetan.",
        "<strong>Ez dira ukitu:</strong> 2. lerroko batukari nahasia; bigarren integralaren mugak (<math display=\"inline\"><mrow><mi>−</mi><mi>T</mi></mrow></math>, <math display=\"inline\"><mi>T</mi></math>; testuinguruak <math display=\"inline\"><mrow><mi>−</mi><mi>L</mi></mrow></math>, <math display=\"inline\"><mi>L</mi></math> eskatzen ditu); azken lerroko diferentziala (<code>dt</code>, <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> izan behar luke); zuzenaren sistemako <math display=\"inline\"><msub><mi>T</mi><mn>1</mn></msub></math> (<math display=\"inline\"><mrow><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub></mrow></math> izan behar luke, autoreak alboan zuzentzen du); orri-oineko ordu-oharra (<code>16:3</code>). Denak zalantza-irakurketak. <math display=\"inline\"><mi>T</mi></math> ikurra denbora-funtziorako eta tenperaturarako.",
        "<strong>Fidelitatea (konfiantza ertaina):</strong> gaztelania osorik. Ez dago <code>CN3pN</code> etiketarik; 86-87 orriak erabili dira (84-85en jarraipena). Ikus <code>koadernoa_metodo_n3_p086.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, 88.-89. orrialdeak (0045 unitatea): (2) bigarren problemaren itxiera: autobalioak lambda=-k^2, autofuntzioak sin(k x), T(t)=e^(-k^2 t); b_k koefizienteak hiru integralen bidez (x^2, x, konstantea) proiekzioz eta ortogonaltasunez -> cos(n pi)=(-1)^n gaia soilik geratzen da; soluzioa seriea, u=w+v. (3) iturri esponentziala duen problema (u_t-u_xx=2e^(3x), 0<x<1/2): soluzio egonkorra V(x)=-(2/9)e^(3x)+A x+B, B=2/9, A=(4/9)e^(3/2)-4/9 (V(0)=V(1/2)=0, -V''=2e^(3x)). V(x)-ren irudia CeTZ-rekin. Zuzenketa formalik EZ (lambda<0 jada erroarekin; anomaliak zalantzetan: k in ZZ vs k>=1, (T_1+T_2) vs (T_2-T_1), batukari falta, V(1/2)-ko gai askea). b_n azken balioa EZ da independenteki egiaztatu (anbiguotasuna); V(x) bai (scipy). Marjinako erreferentziak p.290, p.269. Sekuentzia jarraitua (88-89); konfiantza ertaina",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a86",
   "maila": 2,
   "izenburua": "Bigarren problemaren itxiera eta iturri esponentziala",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "2. problemaren autobalioak eta denbora-zatia"
    },
    {
     "mota": "testua",
     "html": "Banaketatik, <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Atal espaziala Euler motako EDO sistema bat da: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>X</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mrow><mtext mathvariant=\"normal\">, </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>r</mi><mi>x</mi></mrow></msup></mrow></math> probatuz, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>±</mi><msqrt><mi>λ</mi></msqrt></mrow></math>. Hiru kasu: <math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>-k (<math display=\"inline\"><msup><mi>e</mi><mrow><msqrt><mi>λ</mi></msqrt><mi>x</mi></mrow></msup></math> erakoak) eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>-k (<math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></math>) ez dute hasierako baldintza betetzen; soilik <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>-k ematen du soluzio ez-tribiala, <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Muga-baldintzek <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> ezartzen dute, beraz <math display=\"inline\"><mrow><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>π</mi><mo>=</mo><mi>k</mi><mi>π</mi></mrow></math> (<math display=\"inline\"><mrow><mi>k</mi><mo>≥</mo><mn>1</mn></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><msup><mi>k</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>X</mi><mi>k</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>k</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Modu bakoitza <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>k</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hirugarren baldintza eta <math display=\"inline\"><msub><mi>b</mi><mi>k</mi></msub></math> koefizienteak"
    },
    {
     "mota": "testua",
     "html": "Hasierako datua (87. orriko <math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) oinarrian garatuz: <math display=\"block\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>b</mi><mi>k</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub></mrow><mi>π</mi></mfrac><mi>x</mi><mo>−</mo><msub><mi>T</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-en gainean proiektatuz eta ortogonaltasunez, hiru integraletan banatzen da: <math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mi>π</mi><mo>=</mo><mi>−</mi><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>π</mi></mrow><mi>π</mi></msubsup><msup><mi>x</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mo>−</mo><mfrac><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub></mrow><mi>π</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>π</mi></mrow><mi>π</mi></msubsup><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>π</mi></mrow><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Muturretan (<math display=\"inline\"><mrow><mi>±</mi><mi>π</mi></mrow></math>) ebaluatuz, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> dituzten gaiak deuseztatzen dira eta funtzio bikoitiez biderkatutako <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> gaiak muturren artean elkar ezeztatzen dute; <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math> gaia soilik geratzen da: <math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>π</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>π</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>n</mi></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mi>.</mi></mrow></math> Soluzioa seriea da, <math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>b</mi><mi>k</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>k</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta jatorrizko aldagaira itzuliz, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>w</mi><mo>+</mo><mi>v</mi></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren egoera: $b_(n)$ eta seriea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eskuizkribuak tarteko lerro batean <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>+</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> idazten du gainerako lerroetako <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>-ren ordez, eta amaierako laukietan gai orokorra idazten du <math display=\"inline\"><mi>k</mi></math>-ko batukaririk gabe. Biak zalantza-irakurketak dira: <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math>-ren azken balioa <strong>ez da independenteki egiaztatu</strong> (kenketa/batuketa anbiguotasunagatik), eta soluzioa seriea da (batukariarekin), ez gai bakarra. Egitura —proiekzioa, ortogonaltasuna, hiru integralak eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math> gaiaren biziraupena— zuzena da."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "3. problema: iturri esponentziala eta soluzio egonkorra"
    },
    {
     "mota": "testua",
     "html": "Hirugarren problemak iturri-termino esponentziala du: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>2</mn><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn><mi>/</mi><mn>2</mn><mrow><mtext mathvariant=\"normal\">, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mn>9</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Soluzio egonkarra <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bilatzen da (denboratik independentea), <math display=\"inline\"><mrow><mi>−</mi><msup><mi>V</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup></mrow></math> eta <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> betetzen dituena. Bi aldiz integratuz, <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mn>9</mn></mfrac><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo>+</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi><mi>.</mi></mrow></math> Muga-baldintzek: <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>9</mn><mo>+</mo><mi>B</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mn>2</mn><mi>/</mi><mn>9</mn></mrow></math>; eta <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>-tik <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mfrac><mn>4</mn><mn>9</mn></mfrac><msup><mi>e</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>−</mo><mfrac><mn>4</mn><mn>9</mn></mfrac></mrow></math>."
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>V</mi></math> kenduz problema homogeneo bihurtzen da, 87. orriko teknika bera (<code>koadernoa_metodo_n3_p086.typ</code>); han zuzenketa lineala zen, hemen esponentziala, baina mekanismoa berdina da."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berregiaztatua:</strong> ekuazio espaziala eta hiru kasuak (84. orriko berdina; hemen autoreak erroa idazten du hasieratik); autobalioak <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>k</mi><mn>2</mn></msup><mi>t</mi></mrow></msup></mrow></math>; <math display=\"inline\"><msub><mi>b</mi><mi>k</mi></msub></math>-ren <strong>egitura</strong> (proiekzioa, ortogonaltasuna, hiru integralak, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math> biziraupena). ⭐ 3. problemaren soluzio egonkorra (scipy): <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo>+</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>2</mn><mi>/</mi><mn>9</mn></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>/</mi><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>−</mo><mn>4</mn><mi>/</mi><mn>9</mn></mrow></math>; <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>−</mi><msup><mi>V</mi><mo>″</mo></msup><mo>=</mo><mn>2</mn><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup></mrow></math> betetzen ditu. Biak zuzenak.",
        "<strong>Zuzenketa formalik ez:</strong> <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> kasua jada erroarekin dator (84. orriaren aldean, autoreak berak osatua). Baztertutako kasuak (<math display=\"inline\"><msup><mi>e</mi><mrow><msqrt><mi>λ</mi></msqrt><mi>x</mi></mrow></msup></math>, <math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></math>) laburdurak dira, ez akatsak.",
        "<strong>Ez dira independenteki egiaztatu / zalantzak:</strong> <math display=\"inline\"><mrow><mi>k</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℤ</mi></mrow></math> (zuzena <math display=\"inline\"><mrow><mi>k</mi><mo>≥</mo><mn>1</mn></mrow></math>; autoreak berak <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow></math>-etik darabil); tarteko <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>+</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> vs <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; amaierako laukietako batukari falta; <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ko gai askea (<code>4/9</code> irakurria, <math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><mn>9</mn><mo>=</mo><mi>B</mi></mrow></math> izan behar; baina lortzen duen <math display=\"inline\"><mi>A</mi></math> zuzena da). Marjinako erreferentziak <code>p.290</code>, <code>p.269</code> (testuliburu bat, identifikatu gabe).",
        "<strong>Fidelitatea (konfiantza ertaina):</strong> gaztelania osorik. Ez dago <code>CN3pN</code> etiketarik; 88-89 orriak erabili dira. Ikus <code>koadernoa_metodo_n3_p088.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, 90.-91. orrialdeak (0046 unitatea, KOADERNOAREN AZKEN UNITATEA 46/46): (3) problemaren itxiera: homogeneizazioa w=u-v (lau deribatuak, w_t-w_xx=0 iturria orekatuz; datu lineala w(x,0)=-A x) eta banaketa. (6) Euler ekuazioaren Green-en funtzioa y''+(2/x)y'-(1/x^2)y=f(x): H(x,xi) tarteka, L y=(x^2 y')' forma autoadjuntua, Green existitzen/bakarra tau ez bada espektrokoa. (7) Euler motako autobalio-problema x^2 y''+2x y'+lambda y=0: y=x^r -> r^2+r+lambda=0 -> r=-1/2 +/- sqrt(1/4-lambda); hiru kasu (lambda<1/4, =1/4 ln x logaritmikoa, >1/4 x^(-1/2)(C cos+D sin)(omega ln x)); MB-ek C=0 eta ekuazio transzendentea tan(omega ln 2)=2 omega (omega_1~1.89, omega_2~6.69; 45. orriko mota); lambda_n=omega_n^2+1/4; Green espektrala G=sum phi_n(s)phi_n(x)/(tau-lambda_n) (57. orria). Ekuazio transzendentearen irudia CeTZ-rekin (tan adarrak vs 2 omega zuzena, ebakidurak). ZUZENKETARIK EZ (anomaliak irakurketa-mendekoak). scipy-z egiaztatua (homogeneizazioa, Euler-en 3 kasuak, tan(omega ln 2)=2 omega). Sekuentzia jarraitua (90-91); konfiantza ertaina",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a87",
   "maila": 2,
   "izenburua": "Hirugarren problemaren itxiera eta Euler motako autobalioak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "3. problemaren itxiera: homogeneizazioa eta banaketa"
    },
    {
     "mota": "testua",
     "html": "Aurreko soluzio egonkorra, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mn>9</mn></mfrac><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>4</mn><mn>9</mn></mfrac><msup><mi>e</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>−</mo><mfrac><mn>4</mn><mn>9</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mfrac><mn>2</mn><mn>9</mn></mfrac></mrow></math> (idatz bedi <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mfrac><mn>4</mn><mn>9</mn></mfrac><msup><mi>e</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>−</mo><mfrac><mn>4</mn><mn>9</mn></mfrac></mrow></math>), kenduz, <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>v</mi></mrow></math>-ren lau deribatuak: <math display=\"block\"><mrow><msub><mi>w</mi><mi>t</mi></msub><mo>=</mo><msub><mi>u</mi><mi>t</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>w</mi><mi>x</mi></msub><mo>=</mo><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo>−</mo><mi>A</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>2</mn><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo>,</mo></mrow></math> beraz <math display=\"inline\"><mrow><msub><mi>w</mi><mi>t</mi></msub><mo>−</mo><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>2</mn><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo>=</mo><mn>0</mn></mrow></math>, jatorrizko problemak <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>2</mn><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup></mrow></math> duelako. Hasierako datu berria erabat sinplifikatzen da (<math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><mn>9</mn></mrow></math> eta esponentzialak elkar ezeztatuz): <math display=\"block\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mn>9</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mfrac><mn>2</mn><mn>9</mn></mfrac><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo>+</mo><mi>A</mi><mi>x</mi><mo>+</mo><mfrac><mn>2</mn><mn>9</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>−</mi><mi>A</mi><mi>x</mi><mi>.</mi></mrow></math> Datu <strong>lineala</strong> geratzen da; hori da aldaketaren helburua. Problema homogeneoa (<math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>) aldagaien banaketaz ebazten da (84. eta 88. orrietako eskema bera), eta <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>w</mi><mo>+</mo><mi>v</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "6. problema: Euler ekuazioaren Green-en funtzioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ekuaziorako (<math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>), soluzioa Green-en funtzioaz idazten da: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ξ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>H</mi><mo>″</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>H</mi><mo>′</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>H</mi><mo>=</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>H</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> baldintzekin. Eragilea forma autoadjuntura eramanez, <math display=\"inline\"><mrow><mi>L</mi><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup></mrow></math>, eta Green-en funtzioa <strong>existitzen eta bakarra da</strong> <math display=\"inline\"><mi>τ</mi></math> ez bada <math display=\"inline\"><mi>L</mi></math>-ren espektrokoa. Espektroa hurrengo problemak ematen du."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "7. Euler motako autobalio-problema"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioan <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mi>r</mi></msup></mrow></math> probatuz, <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>r</mi><mo>+</mo><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>, hots <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>r</mi><mo>+</mo><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>, beraz <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>±</mo><msqrt><mrow><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>−</mo><mi>λ</mi></mrow></msqrt></mrow></math>. <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>−</mo><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></msqrt></mrow></math> izanik, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>±</mo><mi>i</mi><mi>ω</mi></mrow></math>. Hiru kasu: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><msup><mi>x</mi><mi>ω</mi></msup><mo>+</mo><mi>B</mi><msup><mi>x</mi><mrow><mi>−</mi><mi>ω</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>&lt;</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo>+</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>C</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>D</mi><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>&gt;</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></mrow><mo>,</mo></mrow></math> non azkena <math display=\"inline\"><mrow><msup><mi>x</mi><mrow><mi>i</mi><mi>ω</mi></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup></mrow></math> identitatetik datorren. Lehen bi kasuek ez dute soluzio egokirik ematen; <math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math> da baliagarria. Muga-baldintzek: <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>-k <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math> ezartzen du (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>), eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn></mrow></math>-ko baldintzak ekuazio transzendentea:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>ω</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><msubsup><mi>ω</mi><mi>n</mi><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>ω</mi><mi>n</mi></msub></math> soluzioak grafikoki lortzen dira, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mn>2</mn><mi>ω</mi></mrow></math> zuzenaren arteko ebakiduretan:"
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "testua",
     "html": "Autofuntzioak <math display=\"inline\"><mrow><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dira, eta normalizatuta <math display=\"inline\"><mrow><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><msub><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mi>ρ</mi></msub></mrow></math> (<math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mn>1</mn></mrow></math>). Green-en funtzioa garapen espektralez idazten da, 57. orriko formula (<code>koadernoa_metodo_n3_p056.typ</code>): <math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>τ</mi><mo>−</mo><msub><mi>λ</mi><mi>n</mi></msub></mrow></mfrac><mi>.</mi></mrow></math> Horrela, koadernoa bere buruarekin lotuta ixten da, hogeita hamar orri lehenago ezarritakoarekin."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berregiaztatua (scipy):</strong> ⭐ homogeneizazioaren lau urratsak (<math display=\"inline\"><mrow><msub><mi>w</mi><mi>t</mi></msub><mo>=</mo><msub><mi>u</mi><mi>t</mi></msub></mrow></math>; <math display=\"inline\"><mrow><msub><mi>w</mi><mi>x</mi></msub><mo>=</mo><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo>−</mo><mi>A</mi></mrow></math>; <math display=\"inline\"><mrow><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>2</mn><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup></mrow></math>; <math display=\"inline\"><mrow><msub><mi>w</mi><mi>t</mi></msub><mo>−</mo><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>) eta datu lineala <math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>A</mi><mi>x</mi></mrow></math>. ⭐⭐ 7. problema (Euler): <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>r</mi><mo>+</mo><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>±</mo><msqrt><mrow><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>−</mo><mi>λ</mi></mrow></msqrt></mrow></math>, hiru kasuak (barne <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>-ko <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> logaritmikoa eta <math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>-ko <math display=\"inline\"><mrow><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, ODEa betetzen duena); muga-baldintzek <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>ω</mi></mrow></math> (<math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>≈</mo></mrow></math> 1,89 eta <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>≈</mo></mrow></math> 6,69; 45. orriko mota berekoa); <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><msubsup><mi>ω</mi><mi>n</mi><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>. Green-en garapen espektrala (57. orria). Dena zuzena.",
        "<strong>Zuzenketarik ez:</strong> tarteko laugarren unitatea zuzenketarik gabe; anomalia guztiak irakurketa-mendekoak dira (lerro trinkoak, letra xeheak, berdin-ikur bikoitzak), ez garapenaren akatsak.",
        "<strong>Ez dira ukitu (zalantzak):</strong> 90. orriko <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (letra xehea <math display=\"inline\"><mi>X</mi></math>-ren ordez) eta <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>−</mi><msub><mi>λ</mi><mn>0</mn></msub></mrow></math>; 91. orriko <math display=\"inline\"><mi>σ</mi></math>-ren baldintzaren bigarren atala; <math display=\"inline\"><mi>G</mi></math>-ren existentziaren lerroa (mu/bakarra/espektroa); 7. problemaren enuntziatuko berdin-ikur bikoitza (<math display=\"inline\"><mrow><mo>=</mo><mi>λ</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>); orri-oineko bi lerro trinkoak eta <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup></math>. Marjinako <code>p.290</code>/<code>p.269</code> (aurreko orritik).",
        "<strong>Fidelitatea (konfiantza ertaina):</strong> gaztelania (ezker) eta nahasketa (eskuin). Ez dago <code>CN3pN</code> etiketarik; 90-91 orriak erabili dira. <strong><code>CNmet3</code> koadernoaren azken unitatea da (46/46).</strong> Ikus"
       ]
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n3_p090.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    }
   ]
  },
  {
   "id": "a88",
   "maila": 1,
   "izenburua": "Koadernotik (CAx) — deribatu partzialetako ekuazioak",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "CAx cuaderno amarillo metmat probabilidad ingles",
     "xehetasuna": "CAx, 22.-23. orrialdeak (0013 unitatea, orri bikoitza; #CAxp22/#CAxp23): lehen ordenako EDO eta EDP linealak — faktore integratzailea eta p-konbinazioa. ⭐ Ingelesera itzuli da (0012 euskaraz zen): gaiaren araberako txandakatzea. Gaia PROBABILITATETIK aldenduta: ekuazio diferentzialak, Riley-Hobson-Bence eskuliburutik (14.2.4, 20.3.1). (1) EDO lineala dy/dx+P y=Q, mu=exp(int P dx); adibidea dy/dx+2xy=4x -> y=2+c e^-x^2. (2) EDP lineala x u_x+3u=x^2 -> mu=x^3 -> u=x^2/5+f(y)/x^3 (konstantea = funtzio arbitrarioa). (3) p-konbinazioa: x u_x-2y u_y=0 -> dx/A=dy/B kurba karakteristikoak -> p=x^2 y, u=f(x^2 y); (i) 2x^2y+1; (ii) BI soluzio 4x^2y eta x^2y+3 ('a solution' ez 'the'). BI ZUZENKETA deklaratuak: (a) 'integrate w.r.t. y'->'x'; (b) 'that'->'then, of course'. IRUDI editorial bat: kurba karakteristikoak x^2 y=p (CeTZ). SymPy-z egiaztatua (ordezkapenez). Metodoa liburuaren hizkuntzan (RHB prosa hitzez hitz gabe). Konfiantza altua",
     "hizkuntza": "en"
    }
   ]
  },
  {
   "id": "a89",
   "maila": 2,
   "izenburua": "Lehen ordenako EDO eta EDP linealak: faktore integratzailea eta <math display=\"inline\"><mi>p</mi></math>-konbinazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "CAx koaderno horiaren 22.-23. orri bikoitza.  0011n euskara agertu eta 0012 osoa euskaraz egon ondoren, hemen *ingelesa* da berriro: koadernoak *ez du* hizkuntza behin betiko aldatzen, *gaiaren arabera* txandakatzen baizik. Gainera, gaia probabilitatetik erabat aldentzen da: *ekuazio diferentzialak* dira. Bi epigrafe Riley--Hobson--Bence eskuliburutik hitzez hitz kopiatuak dira (paperean bertan $14.2.4$ eta $20.3.1$ zenbakiak); hemen *metodoa* liburuaren hizkuntzan aurkezten da (jatorrizko testu-prosa errepikatu gabe), garapen eta emaitza guztiak barne. "
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Faktore integratzailea: EDO lineala (RHB <math display=\"inline\"><mrow><mn>14.2</mn><mn>.4</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Lehen ordenako EDO lineala forma honetan idazten da, eta faktore integratzaile <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> batez <strong>zehatz</strong> bihurtzen da (ezkerreko atala biderkaduraren deribatu osoa izatera behartuz): <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>μ</mi><mi>P</mi><mi>y</mi><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>μ</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>μ</mi><mi>Q</mi><mi>.</mi></mrow></math> Hortik zuzenean integra daiteke, <math display=\"inline\"><mrow><mi>μ</mi><mi>y</mi><mo>=</mo><mo>∫</mo><mi>μ</mi><mi>Q</mi><mi>d</mi><mi>x</mi></mrow></math>. Faktorea lehen berdintzak ematen du: <math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>μ</mi><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>d</mi><mi>μ</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mi>y</mi></mrow></math> eta <math display=\"inline\"><mrow><mo>=</mo><mi>μ</mi><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>μ</mi><mi>P</mi><mi>y</mi></mrow></math> berdinduz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>μ</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∫</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea:</strong> <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>=</mo><mn>4</mn><mi>x</mi></mrow></math>. Hemen <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>, beraz <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∫</mo><mn>2</mn><mi>x</mi><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></math>: <math display=\"block\"><mrow><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mn>2</mn><mi>x</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mi>y</mi><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Autoreak trikimailu dotore bat egiten du: eskuineko <math display=\"inline\"><mrow><mn>4</mn><mi>x</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></math> <strong>bera</strong> <math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dela antzematen du, eta bi deribatuak berdinduz golpe batean integratzen du: <math display=\"block\"><mrow><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mi>y</mi><mo>=</mo><mn>2</mn><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mo>+</mo><mi>c</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mn>2</mn><mo>+</mo><mi>c</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lehen ordenako EDP lineala: faktore integratzailea (RHB <math display=\"inline\"><mrow><mn>20.3</mn><mn>.1</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Bi aldagai independenteko lehen ordenako EDP orokorra <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>+</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>u</mi><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da. Aldagai baten deribatu partziala baino ez badago, EDO linealaren metodo bera balio du."
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea (ingelesez):</strong> «Find the general solution <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> of <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mn>3</mn><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>.» <math display=\"inline\"><mi>x</mi></math>-z zatituz, <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mn>3</mn><mi>x</mi></mfrac><mi>u</mi><mo>=</mo><mi>x</mi></mrow></math>, faktore integratzailea <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∫</mo><mfrac><mn>3</mn><mi>x</mi></mfrac><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mn>3</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math>: <math display=\"block\"><mrow><msup><mi>x</mi><mn>3</mn></msup><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>3</mn></msup><mi>u</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>5</mn></mfrac><mo>+</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hemen dago EDO eta EDP arteko <strong>desberdintasun egiturazkoa</strong>: aldagai bakar batekiko integratzean, integrazio- konstantea ez da zenbaki bat, <strong>gainerako aldagaien funtzio arbitrario</strong> bat baizik —<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>—, <math display=\"inline\"><mi>y</mi></math> prozesuan finko geratzen delako."
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Iturriaren zuzenketa: integrazioaren aldagaia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Paperean ohar gorri batek «integrate with respect to <math display=\"inline\"><mi>y</mi></math>» dio <math display=\"inline\"><mrow><msup><mi>x</mi><mn>3</mn></msup><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>5</mn></msup><mi>/</mi><mn>5</mn><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lerroaren ondoan. <strong>Zuzendua: «with respect to <math display=\"inline\"><mi>x</mi></math>».</strong> Integrazioa <math display=\"inline\"><mi>x</mi></math>-rekiko da (<math display=\"inline\"><mrow><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>5</mn></msup><mi>/</mi><mn>5</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>); <math display=\"inline\"><mi>y</mi></math>-rekiko gertatzen dena <strong>beste gauza bat</strong> da —«konstantea» <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioa izatea, <math display=\"inline\"><mi>y</mi></math> finko baitago—. Oharrak bi gauzak nahasten ditu; laukiko emaitza zuzena da."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mi>p</mi></math>-konbinazioaren metodoa: EDP homogeneoak (RHB <math display=\"inline\"><mrow><mn>20.3</mn><mn>.1</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Bi aldagaien deribatu partzialak agertzen direnean eta <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> formako soluzioak bilatzen dira, <math display=\"inline\"><mi>p</mi></math> oraindik ezezaguna den <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>y</mi></math>-ren <strong>konbinazio</strong> bat izanik. Orduan <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>f</mi></mrow><mrow><mi>d</mi><mi>p</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>p</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math> eta antzera <math display=\"inline\"><mi>y</mi></math>-rekiko; EDPan ordezkatuz eta <math display=\"inline\"><mi>f</mi></math> ez-tribialentzat: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>A</mi><mfrac><mrow><mi>∂</mi><mi>p</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>B</mi><mfrac><mrow><mi>∂</mi><mi>p</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mfrac><mrow><mi>d</mi><mi>f</mi></mrow><mrow><mi>d</mi><mi>p</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mfrac><mrow><mi>∂</mi><mi>p</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>B</mi><mfrac><mrow><mi>∂</mi><mi>p</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> konstante mantentzeko <math display=\"inline\"><mi>p</mi></math> bera konstante izan behar da: <math display=\"inline\"><mrow><mi>d</mi><mi>p</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>p</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>d</mi><mi>x</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>p</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. Bi ekuazioak proportzionalak direnez, <strong>kurba karakteristikoak</strong> ateratzen dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea (ingelesez):</strong> «For <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mn>2</mn><mi>y</mi><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math> find (i) the solution that takes the value <math display=\"inline\"><mrow><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math> on the line <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>, and (ii) a solution that has the value <math display=\"inline\"><mn>4</mn></math> at the point <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.» Hemen <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>y</mi></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>−</mi><mn>2</mn><mi>y</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>c</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mi>c</mi><msup><mi>y</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mi>.</mi></mrow></math> Konstantea <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msup><mi>p</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></msup></mrow></math> deituz (zati-berreturak saihesteko), <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>p</mi><mi>/</mi><mi>y</mi></mrow></math>, hots <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math>, eta soluzio orokorra <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da. Baldintzak ezarriz: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (i) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">( </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>=</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -en </mtext><mspace width=\"0.333em\"></mspace></mrow><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ); </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (ii) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>3</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berregiaztatua (SymPy, ordezkapen zuzenez):</strong> garapen eta emaitza guztiak <strong>zuzenak</strong>. EDO: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mo>+</mo><mi>c</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math>-k <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>=</mo><mn>4</mn><mi>x</mi></mrow></math> betetzen du; <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></math>; <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mn>4</mn><mi>x</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></math>. EDP lineala: <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>5</mn><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><msup><mi>x</mi><mn>3</mn></msup></mrow></math>-k <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mn>3</mn><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> betetzen du (edozein <math display=\"inline\"><mi>f</mi></math>); <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math>. <math display=\"inline\"><mi>p</mi></math>-metodoa: <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-k <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mn>2</mn><mi>y</mi><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math> betetzen du; (i) <math display=\"inline\"><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math>-ek <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>-en <math display=\"inline\"><mrow><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math>; (ii) <math display=\"inline\"><mrow><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>3</mn></mrow></math>, biek <math display=\"inline\"><mn>4</mn></math> balio dute <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-en eta biek EDPa betetzen dute. (Ez dago probabilitate-corpusean; SymPy-z egiaztatua.)",
        "<strong>⭐⭐ (ii)-ko bi soluzioak:</strong> eskuizkribuak <strong>bi</strong> erantzun ematen ditu (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>3</mn></mrow></math>), eta ez da hutsegitea: enuntziatuak «<strong>a</strong> solution» eskatzen du, ez «<strong>the</strong>». Puntu bakar batek <math display=\"inline\"><mi>f</mi></math> balio bakar batean finkatzen du; zuzen oso batek (i), berriz, erabat.",
        "<strong>Bi zuzenketa (mención):</strong> (a) <math display=\"inline\"><mn>22</mn></math>. orriko ohar gorria «integrate with respect to <math display=\"inline\"><mi>y</mi></math>» <math display=\"inline\"><mo>→</mo></math> <strong>«with respect to <math display=\"inline\"><mi>x</mi></math>»</strong> (goiko oharpena). (b) <math display=\"inline\"><mn>23</mn></math>. orriko lehen lerroa «that, of course,» <math display=\"inline\"><mo>→</mo></math> <strong>«then, of course,»</strong> (kopia-akatsa; jatorrizkoak «when ... then ... we cannot» egitura du).",
        "<strong>Irudia (editoreak gehitua):</strong> kurba karakteristikoak <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>=</mo><mi>p</mi></mrow></math>; eskuizkribuak lauki gorriak baino ez ditu (emaitzak), marrazkirik ez. Irudia <math display=\"inline\"><mi>p</mi></math>-konbinazioaren esanahia eta (i)/(ii) kontrastea ikusarazteko da.",
        "<strong>Hizkuntza-txandakatzea:</strong> koadernoak gaiaren arabera aldatzen du hizkuntza (0012 euskaraz, hau ingelesez); karpetaren izena («probabilidad ingles») lehen tartea baino ez du deskribatzen. Iturria RHB eskuliburua da (<math display=\"inline\"><mrow><mn>14.2</mn><mn>.4</mn></mrow></math>, <math display=\"inline\"><mrow><mn>20.3</mn><mn>.1</mn></mrow></math>; «(14.14)» aipamena barne).",
        "<strong>Fidelitatea (konfiantza altua):</strong> metodoa liburuaren hizkuntzan aurkeztua (RHB-ren prosa hitzez hitz errepikatu gabe), adibideen enuntziatuak ingelesez aipatuta, garapena osorik egiaztatua. Bi etiketa kanoniko:"
       ]
      },
      {
       "mota": "testua",
       "html": "<code>#CAxp22</code>"
      },
      {
       "mota": "testua",
       "html": ", <code>#CAxp23</code>. Ikus <code>koadernoa_cax_p022.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CAx cuaderno amarillo metmat probabilidad ingles",
     "xehetasuna": "CAx, 24.-25. orrialdeak (0014 unitatea, orri bikoitza; #CAxp24/#CAxp25): EDP linealak — u=h f(p) metodoa, ekuazio inhomogeneoak eta soluzioaren existentzia. Ingelesez, 0013ren gai eta iturri beretik (Riley-Hobson-Bence 20.3.2, 20.6). Hiru urrats: (1) u-n terminoa duten EDPak (C!=0), u=h(x,y)f(p); adibidea x u_x+2u_y-2u=0 -> h=e^y, u=e^y f(x e^-y/2). (2) EDP inhomogeneoak (orokorra=homogeneoa+integral partikularra): y u_x-x u_y=3x -> u=f(x^2+y^2)-3y; (i) x^2+y^2-3y; (ii) FAMILIA (u(1,0)=2 puntu bakarra). (3) ⭐⭐ Ezaugarriak eta existentzia: datua kurba osoan->bakarra, puntuan->familia, ZATIAN->ESKUALDE batean bakarrik (0<=x^2 y<=1, itzalpean). Zuzenketarik ez (SymPy-z ordezkapenez egiaztatua). IRUDIA: eskuizkribuak MARRAZTUA (x^2 y=c ezaugarriak + itzalpeko eskualdea + x=1 datu-segmentua) berregina CeTZ-z; 'argudioa figura eginda'. Metodoa liburuaren hizkuntzan (RHB prosa gabe). Konfiantza altua",
     "hizkuntza": "en"
    }
   ]
  },
  {
   "id": "a90",
   "maila": 2,
   "izenburua": "EDP linealak: <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>h</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> metodoa, ekuazio inhomogeneoak eta soluzioaren existentzia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "CAx koaderno horiaren 24.-25. orri bikoitza, <math display=\"inline\"><mn>22</mn></math>.-<math display=\"inline\"><mn>23</mn></math>.aren gai eta iturri beretik jarraituz (Riley–Hobson–Bence, <math display=\"inline\"><mrow><mn>20.3</mn><mn>.2</mn></mrow></math> eta <math display=\"inline\"><mn>20.6</mn></math>). Hiru urrats, ingelesez idatziak; hemen metodoa liburuaren hizkuntzan aurkezten da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> metodoa: <math display=\"inline\"><mi>u</mi></math>-n terminoa duten EDPak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>p</mi></math>-konbinazioaren metodoak <math display=\"inline\"><mi>u</mi></math>-n terminorik EZ eskatzen du (<math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math>). <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mn>0</mn></mrow></math> bada, ezin da <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren menpekotasuna zuzenean zatitu; orduan <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> formako soluzioa bilatzen da. <strong>Adibidea (ingelesez):</strong> «<math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mn>2</mn><msub><mi>u</mi><mi>y</mi></msub><mo>−</mo><mn>2</mn><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>.» Ordezkatuz (<math display=\"inline\"><mrow><msub><mi>u</mi><mi>x</mi></msub><mo>=</mo><msub><mi>h</mi><mi>x</mi></msub><mi>f</mi><mo>+</mo><mi>h</mi><msup><mi>f</mi><mo>′</mo></msup><msub><mi>p</mi><mi>x</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><msub><mi>h</mi><mi>y</mi></msub><mi>f</mi><mo>+</mo><mi>h</mi><msup><mi>f</mi><mo>′</mo></msup><msub><mi>p</mi><mi>y</mi></msub></mrow></math>): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><msub><mi>h</mi><mi>x</mi></msub><mo>+</mo><mn>2</mn><msub><mi>h</mi><mi>y</mi></msub><mo>−</mo><mn>2</mn><mi>h</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>f</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><msub><mi>p</mi><mi>x</mi></msub><mo>+</mo><mn>2</mn><msub><mi>p</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>h</mi><msup><mi>f</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Lehen parentesia <strong>jatorrizko EDPa da, <math display=\"inline\"><mi>u</mi></math> <math display=\"inline\"><mi>h</mi></math>-z ordezkatuta</strong>: beraz <math display=\"inline\"><mi>h</mi></math> ekuazioaren <strong>edozein</strong> soluzio bada, gai hori desagertu egiten da, eta <math display=\"inline\"><mi>p</mi></math>-rako betiko problema homogeneoa geratzen da: <math display=\"block\"><mrow><mi>x</mi><msub><mi>p</mi><mi>x</mi></msub><mo>+</mo><mn>2</mn><msub><mi>p</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mn>2</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mfrac><mi>y</mi><mn>2</mn></mfrac><mo>+</mo><mi>c</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>y</mi><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mi>h</mi></math> gisa edozein soluzio balio du; adibidez <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><msup><mi>e</mi><mi>y</mi></msup></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>⋅</mo><mn>0</mn><mo>+</mo><mn>2</mn><msup><mi>e</mi><mi>y</mi></msup><mo>−</mo><mn>2</mn><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mn>0</mn></mrow></math>). Beraz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mi>y</mi></msup><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>y</mi><mi>/</mi><mn>2</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "EDP inhomogeneoak: soluzio orokorra gehi integral partikularra (RHB <math display=\"inline\"><mrow><mn>20.3</mn><mn>.2</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Ekuazio inhomogeneo baten soluzio orokorra <strong>homogeneoaren soluzio orokorra gehi integral partikular bat</strong> da (mugalde-baldintzarik gabe); gero baldintzek soluzio partikular egokia aukeratzen dute. <strong>Adibidea (ingelesez):</strong> «<math display=\"inline\"><mrow><mi>y</mi><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mi>x</mi><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>3</mn><mi>x</mi></mrow></math>. Find the most general particular solution (i) which satisfies <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, and (ii) which has the value <math display=\"inline\"><mn>2</mn></math> at <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.» Homogeneoaren ezaugarriak: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>y</mi></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>−</mi><mi>x</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo>−</mo><mi>x</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>y</mi><mi>d</mi><mi>y</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konst. </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Integral partikular bat, ikuskatuz, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>−</mi><mn>3</mn><mi>y</mi></mrow></math> da (<math display=\"inline\"><mrow><mi>y</mi><mo>⋅</mo><mn>0</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>x</mi></mrow></math>). Soluzio orokorra beraz <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>3</mn><mi>y</mi></mrow></math>. Baldintzak ezarriz: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (i) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>z</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>y</mi><mi>.</mi></mrow></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (ii) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">familia</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>z</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mtext mathvariant=\"normal\">edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><mn>2</mn><mo>−</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> non <math display=\"inline\"><mi>g</mi></math> edozein funtzio den <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> betez. (ii)-k <math display=\"inline\"><mi>f</mi></math> <strong>argumentu bakar batean</strong> finkatzen du (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>), horregatik da familia; (i)-ek, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> zuzen osoan, erabat."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ezaugarriak eta soluzioaren existentzia (RHB <math display=\"inline\"><mn>20.6</mn></math>)"
    },
    {
     "mota": "testua",
     "html": "Lehen ordenako EDPetan, ondorio nagusia: <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren balioa <strong>kurba oso</strong> batean emanda badago, soluzioa oro har <strong>bakarra</strong> da; <strong>puntu bakar</strong> batean emanda, ordea, <strong>ez</strong> —soluzio partikularren familia oso bat dago—. Adibideak <strong>hirugarren</strong> kasua erakusten du, interesgarriena: datua kurbaren <strong>zati</strong> batean emanda."
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea (ingelesez):</strong> «Find the general solution of <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mn>2</mn><mi>y</mi><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math> that takes the value <math display=\"inline\"><mrow><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math> on the line <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> between <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> and <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math>.» Soluzio orokorra <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da, ezaugarriak <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>=</mo><mi>c</mi></mrow></math>, eta zuzen osoko datuarentzat <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math>. Orain datuak <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math> <strong>soilik</strong> <math display=\"inline\"><mrow><mi>y</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> tartean finkatzen du, hots <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>c</mi><mo>≤</mo><mn>1</mn></mrow></math>. Ezaugarrietan zehar <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math> (eta <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) konstante denez, datua datu-segmentua <strong>ebakitzen duten</strong> ezaugarrietan zehar hedatzen da, eta horietan bakarrik:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eskualdean: </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>≤</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>≤</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Eskualdetik kanpo soluzioa ez dago zehazki finkatuta: <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>1</mn><mo>+</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> formako edozeinek betetzen du ekuazioa eta datua, baldin <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> bada <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>p</mi><mo>≤</mo><mn>1</mn></mrow></math>-erako."
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berregiaztatua (SymPy, ordezkapen zuzenez):</strong> hiru urratsak <strong>zuzenak</strong>. (1) <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>e</mi><mi>y</mi></msup><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>y</mi><mi>/</mi><mn>2</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-k <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mn>2</mn><msub><mi>u</mi><mi>y</mi></msub><mo>−</mo><mn>2</mn><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> betetzen du; <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><msup><mi>e</mi><mi>y</mi></msup></mrow></math> soluzioa da. (2) <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>3</mn><mi>y</mi></mrow></math>-k <math display=\"inline\"><mrow><mi>y</mi><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mi>x</mi><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>3</mn><mi>x</mi></mrow></math> betetzen du; (i) <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>y</mi></mrow></math> (<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>); (ii) <math display=\"inline\"><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>g</mi></mrow></math> eta <math display=\"inline\"><mrow><mn>2</mn><mo>−</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>g</mi></mrow></math>, biek <math display=\"inline\"><mn>2</mn></math> balio dute <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n eta biek EDPa betetzen dute. (3) <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math>-ek <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mn>2</mn><mi>y</mi><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math> betetzen du eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>-en <math display=\"inline\"><mrow><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math> da. (Ez dago probabilitate-corpusean; SymPy-z egiaztatua.)",
        "<strong>⭐⭐ Existentziaren emaitza (orrialdearen muina):</strong> datua <strong>kurba osoan</strong> <math display=\"inline\"><mo>→</mo></math> soluzio bakarra; <strong>puntu batean</strong> <math display=\"inline\"><mo>→</mo></math> soluzio-familia; datua kurbaren <strong>zati batean</strong> <math display=\"inline\"><mo>→</mo></math> soluzioa <strong>eskualde batean bakarrik</strong> determinatuta (itzalpean, <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>≤</mo><mn>1</mn></mrow></math>). Datua ezaugarrietan zehar hedatzen da, eta datu-segmentua ebakitzen dutenetan bakarrik. Hori da orrialdearen ekarpen kontzeptuala, eta marrazkia <strong>argudioa bera da, figura eginda</strong>.",
        "<strong>Irudia (eskuizkributik berregina):</strong> <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>=</mo><mi>c</mi></mrow></math> ezaugarri-kurben familia, itzalpeko eskualdea (<math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>≤</mo><mn>1</mn></mrow></math>) eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> datu-segmentua. Marrazkia enuntziatua baino, <strong>ondorioa</strong> ilustratzen du.",
        "<strong>Zuzenketarik ez:</strong> eduki-akatsik ez; hiru garapenak zuzenak eta enuntziatuak ondo kopiatuak.",
        "<strong>Ez da ukitu (zalantzak):</strong> <math display=\"inline\"><mn>24</mn></math>. orriko ekuazio inhomogeneo orokorraren forma (<math display=\"inline\"><mrow><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mi>x</mi><msub><mi>u</mi><mi>y</mi></msub><mo>+</mo><mi>a</mi><mi>u</mi><mo>=</mo><mi>f</mi></mrow></math>) azkar idatzia da eta ez da hurrengo ariketakoa; <math display=\"inline\"><mn>25</mn></math>. orrian «determined every value» (<math display=\"inline\"><mo>→</mo></math> «everywhere», irakurketa ziurgabea, zentzua ez da aldatzen).",
        "<strong>Fidelitatea (konfiantza altua):</strong> iturria ingelesez (RHB <math display=\"inline\"><mrow><mn>20.3</mn><mn>.2</mn></mrow></math>, <math display=\"inline\"><mn>20.6</mn></math>); metodoa liburuaren hizkuntzan aurkeztua (prosa hitzez hitz gabe), adibideen enuntziatuak ingelesez aipatuta, garapena osorik egiaztatua. Bi etiketa kanoniko: <code>#CAxp24</code>, <code>#CAxp25</code>. Ikus <code>koadernoa_cax_p024.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CAx cuaderno amarillo metmat probabilidad ingles",
     "xehetasuna": "CAx, 28.-29. orrialdeak (0016 unitatea, orri bikoitza; #CAxp28/#CAxp29): uhin-ekuazioa BI BIDEZ — aldagaien banantzea eta ezaugarrien metodoa, gero baliokidetasuna. Euskaraz. Soka tenkatua (u(0)=u(L)=0), geldi, u_0 sin(pi x/L) hasierako posizioa. (a) banantzea: u=XT, lambda=n pi/L, u=sum sin(n pi x/L)[A_n sin+B_n cos]; B_1=u_0; ABIADURA-baldintza (osatua, mención): u_t(x,0)=0->A_n=0 -> u=u_0 sin(pi x/L)cos(pi c t/L). (b) ezaugarriak: c^2 u_xx-u_tt=0 hiperbolikoa, xi=x-ct/eta=x+ct, u_xieta koef=4c^2 -> u=F(x-ct)+G(x+ct) (d'Alembert). Baliokidetasuna (osatua, mención): biderketa->batura, u_0 sin cos=(u_0/2)[sin(pi(x-ct)/L)+sin(pi(x+ct)/L)]=F+G, F=G=(u_0/2)sin. ⭐⭐ Ezaugarriak orain TRESNA (24-25 teoria zen). BI HUTSUNE osatuak: abiadura-baldintza eta baliokidetasuna. Inocuo: batuketa n=0-tik. SymPy-z egiaztatua. IRUDI editorial bat: uhin geldikorra=bi bidaiari (CeTZ). Konfiantza altua",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a91",
   "maila": 2,
   "izenburua": "Uhin-ekuazioa bi bidez: aldagaien banantzea eta ezaugarriak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "CAx koaderno horiaren 28.-29. orri bikoitza, <strong>euskaraz</strong>. Azterketa-ariketa (<math display=\"inline\"><mn>4</mn></math>. zenbakiduna): bi muturretan finkatutako soka tenkatua (<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>), <strong>geldi</strong> eta <math display=\"inline\"><mrow><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hasierako posizioarekin. Problema <strong>bi metodoz</strong> ebazteko eskatzen da —(a) aldagaien banantzea eta (b) ezaugarriak— eta gero biak baliokideak direla erakusteko. Interesa: <math display=\"inline\"><mn>24</mn></math>-<math display=\"inline\"><mn>25</mn></math>.eko ezaugarriak orain <strong>kalkulu-tresna</strong> dira, teoria izan beharrean."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(a) Aldagaien banantzea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eginda, uhin-ekuazioan (<math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub></mrow></math>) ordezkatuz eta banantuz: <math display=\"block\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mfrac><mi>′</mi><mi>X</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><msup><mi>T</mi><mo>′</mo></msup><mfrac><mi>′</mi><mi>T</mi></mfrac><mo>=</mo><mi>−</mi><msup><mi>λ</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>X</mi><mo>″</mo></msup><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mi>X</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>T</mi><mo>″</mo></msup><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><mi>T</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Muga-baldintzek: <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mi>x</mi></mrow></math>); eta <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>≠</mo><mn>0</mn></mrow></math> izanik, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mi>L</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi></mrow></math>. Beraz (modu bakoitza <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>c</mi><mi>t</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>c</mi><mi>t</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> <strong>Hasierako posizioa</strong> ezarriz, senoen ortogonaltasunez, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>≠</mo><mn>1</mn></mrow></math>) ematen ditu —hasierako datua <strong>bera</strong> modu propioa da, ez da Fourier-integralik behar—. Falta den urratsa —<strong>abiadura-baldintza</strong>— ezarriz (soka geldi dago, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>n</mi><mi>π</mi><mi>c</mi></mrow><mi>L</mi></mfrac><msub><mi>A</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>∀</mo><mi>n</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>c</mi><mi>t</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(b) Ezaugarrien metodoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> hiperbolikoa da (<math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>A</mi><mi>C</mi><mo>=</mo><mn>4</mn><msup><mi>c</mi><mn>2</mn></msup><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>). Ezaugarri-ekuazioa <math display=\"inline\"><mrow><msup><mi>c</mi><mn>2</mn></msup><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>, hots <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>±</mi><mn>1</mn><mi>/</mi><mi>c</mi></mrow></math>, eta aldagai berriak <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi></mrow></math>. Aldaketak koefizienteak eraldatzen ditu: <math display=\"inline\"><msub><mi>u</mi><mrow><mi>ξ</mi><mi>ξ</mi></mrow></msub></math>-rena <math display=\"inline\"><mrow><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><msub><mi>u</mi><mrow><mi>η</mi><mi>η</mi></mrow></msub></math>-rena <math display=\"inline\"><mrow><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>; eta <math display=\"inline\"><msub><mi>u</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub></math>-rena <math display=\"inline\"><mrow><mn>2</mn><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></math> (gainerako guztiak <math display=\"inline\"><mn>0</mn></math>). Beraz: <math display=\"block\"><mrow><mn>4</mn><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>u</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> d&#x27;Alembert-en soluzioa da: bi norabidetan hedatzen diren bi uhinen batura. Muga-datua ezarriz, <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-n) —hemen eten egiten da eskuizkribua—."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bi metodoak baliokideak dira"
    },
    {
     "mota": "testua",
     "html": "(a)-ko soluziotik abiatuta, biderketa senoa-kosinua batura bihurtuz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>c</mi><mi>t</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>u</mi><mn>0</mn></msub><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hau <strong>zehazki</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> formakoa da, <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>s</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik. Bi metodoek <strong>funtzio bera</strong> ematen dute, enuntziatuak eskatzen zuen bezala: sokaren uhin <strong>geldikorra</strong> kontrako norabideetan hedatzen diren bi uhin <strong>bidaiari berdinen</strong> gainezarpena da."
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Berregiaztatua (SymPy):</strong> dena zuzena. (a) <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>c</mi><mi>t</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k uhin-ekuazioa (<math display=\"inline\"><mrow><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>), mutur finkoak (<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>), hasierako posizioa eta abiadura nulua (<math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>) betetzen ditu. (b) Ezaugarriak: <math display=\"inline\"><msub><mi>u</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub></math>-ren koefizientea <math display=\"inline\"><mrow><mn>4</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></math>, besteak <math display=\"inline\"><mn>0</mn></math>; diskriminantea <math display=\"inline\"><mrow><mn>4</mn><msup><mi>c</mi><mn>2</mn></msup><mo>&gt;</mo><mn>0</mn></mrow></math> (hiperbolikoa). Baliokidetasuna: biderketa-formula zehatza da. (Ez dago probabilitate-corpusean; SymPy-z egiaztatua.)",
        "<strong>⭐⭐ Bi hutsune osatuak (CON mención):</strong> (1) <strong>abiadura-baldintza</strong>: enuntziatuak soka <strong>geldi</strong> dagoela dio (<math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>), baina baldintza hori ez da inon inposatzen; hura gabe <math display=\"inline\"><msub><mi>A</mi><mi>n</mi></msub></math> koefizienteak zehaztu gabe geratzen dira eta (a) ez dago itxita. Inposatuz <math display=\"inline\"><mrow><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> eta soluzioa osatzen da. (2) <strong>baliokidetasuna</strong>: (b) atala <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idatzi ondoren eten egiten da; biderketa<math display=\"inline\"><mo>→</mo></math>batura formulak berehala ixten du, bi metodoak bat datozela erakutsiz.",
        "<strong>Inocuo (ez da akatsa):</strong> batuketa <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>-tik hasten da hiru agerpenetan; <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>-k <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>0</mn><mo>=</mo><mn>0</mn></mrow></math> ematen du eta ez du ezer gehitzen. Zuzena <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> litzateke (Sturm-Liouville-n <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> ez da modua).",
        "<strong>Irudia (editoreak gehitua):</strong> uhin geldikorra = bi uhin bidaiariren batura. Eskuizkribuak marrazkirik ez du; irudia baliokidetasuna ikusarazteko da.",
        "<strong>Ez da ukitu (grafia/zalantzak):</strong> <math display=\"inline\"><mn>28</mn></math>. orriko lehen eta hirugarren lerroak (enuntziatua) azkar idatzita daude: «<math display=\"inline\"><mtext mathvariant=\"normal\">NASIGARAI</mtext></math>», «<math display=\"inline\"><mtext mathvariant=\"normal\">PORTIBIO</mtext></math>» ez dira ebazten (grafia, ez kalkulua); «<math display=\"inline\"><mtext mathvariant=\"normal\">BEREKETAREN</mtext></math>» ziurrenik «bereizketaren» (aldagaien <strong>banantzea</strong>). Garapen matematikoa osorik irakurgarria.",
        "<strong>Jarraipena <math display=\"inline\"><mn>24</mn></math>-<math display=\"inline\"><mn>25</mn></math>.arekin:</strong> ezaugarriak han <strong>teoria</strong> ziren (non dagoen soluzioa determinatuta); hemen <strong>kalkulu-metodo</strong>. Bi unitateak jarraian irakurtzea komeni da.",
        "<strong>Fidelitatea (konfiantza altua):</strong> iturria euskaraz; garapena hitzez hitz jarraituta, bi hutsuneak <strong>osatuta</strong> aipamen esplizituz. Bi etiketa kanoniko: <code>#CAxp28</code>, <code>#CAxp29</code>. Ikus <code>koadernoa_cax_p028.typ</code>."
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a92",
   "maila": 1,
   "izenburua": "Metodo matematikoak: ariketa- eta azterketa-bilduma",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bilduma honek UPV/EHUko  <strong>Metodo Matematikoak</strong> irakasgaiaren ariketa-orri ofizial OSOAK eta azterketetako ariketa-bilduma osoak jasotzen ditu (2010–2014), gaika antolatuta eta edf-ko kapituluekin lotuta. Irakasgaiaren programa ofizialak 11 gai zituen: oinarrizko kontzeptuak, lehen ordenako ekuazioak, goi-ordenakoak (Diracen delta eta distribuzioak barne), sistemak, Laplace, serieak, egonkortasuna, Sturm–Liouville, deribatu partzialetako ekuazioak, probabilitatea eta estatistika. Probabilitate-orria M21-en dago. Adibide ebatziak JAKINArenak dira; izartxoek (*,  **) iturriko sailkapena gordetzen dute (* sakontzekoak, **  guztientzat: funtzio berezien propietateak)."
      }
     ]
    }
   ]
  },
  {
   "id": "a93",
   "maila": 2,
   "izenburua": "Deribatu partzialetako ekuazioak: aldagaien banantzea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Moduluko hutsunean deklaratutako teoriaren ariketa-orri ofiziala, osorik — azken urteetako azterketen gehigarria barne."
    },
    {
     "mota": "oharra",
     "titulua": "Koadernotik: EDP bat EDO gisa (sarrera)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabiltzailearen koadernoko sarrera-orria (CG-06, &quot;2. gaia&quot;): aldagai bat deribaturik gabe agertzen denean, EDPa EDO bat bezala askatzen da — baina integrazio-&quot;konstanteak&quot; beste aldagaiaren <strong>funtzio arbitrarioak</strong> dira. Koadernoko adibidea: <math display=\"block\"><mrow><mi>x</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mn>3</mn><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> <math display=\"inline\"><mi>y</mi></math>-rik ez dagoenez, EDO lineala da <math display=\"inline\"><mi>x</mi></math>-n: faktore integratzailea <math display=\"inline\"><msup><mi>x</mi><mn>3</mn></msup></math>, eta <math display=\"block\"><mrow><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup><mo>⇒</mo><mi>u</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>5</mn></mfrac><mo>+</mo><mfrac><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>3</mn></msup></mfrac></mrow></math> — <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzio arbitrarioa. Berdin <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mi>x</mi><msup><mi>e</mi><mi>y</mi></msup></mrow></math>  ekuazioarentzat: <math display=\"inline\"><mi>y</mi></math>-ko EDO gisa askatuta, soluzio homogeneoa <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da, <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> funtzio arbitrarioak. EDO batek konstante bakoitzeko baldintza bat behar zuen; EDP batek <strong>funtzio</strong> oso bat zehaztu behar du baldintza bakoitzeko — horregatik dira mugalde-baldintzak funtzioak, ez zenbakiak (koadernoak kontraadibideekin frogatzen du: <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>3</mn></mrow></math>... guztiak dira <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mn>2</mn><mi>y</mi><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math>-ren soluzioak baldintza berberekin)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Koadernotik: mugalde-baldintzak homogeneizatzea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabiltzailearen Metodo Matematikoak koadernoko errezeta (<code>met mat/</code>, &quot;2 – Aldagaien banantzea&quot; orria), hitzez hitz baliagarria beheko 16. eta 18. azterketa-ariketetarako. Bero-ekuazioan <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math> mugalde-baldintzak ez-homogeneoak badira, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub></mrow></math>, aldagai- banantzeak ez du zuzenean funtzionatzen. Koadernoaren bidea: definitu <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, non <math display=\"inline\"><mi>g</mi></math>-k <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub></mrow></math> betetzen dituen — orduan <math display=\"block\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">M.B. homogeneoak!</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta ekuazio berria <math display=\"inline\"><mrow><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msub><mi>v</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>g</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da, hasierako baldintza <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik. <math display=\"inline\"><mi>g</mi></math> lineala hautatuz (<math display=\"inline\"><mrow><msup><mi>g</mi><mo>″</mo></msup><mo>=</mo><mn>0</mn></mrow></math>: egoera egonkorra), ekuazioa ere homogeneoa geratzen da eta banantzea aplika daiteke: <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mfrac><mi>′</mi><mi>X</mi></mfrac><mo>=</mo><mfrac><mover><mi>T</mi><mo accent=\"true\">̇</mo></mover><mrow><msup><mi>a</mi><mn>2</mn></msup><mi>T</mi></mrow></mfrac><mo>=</mo><mi>−</mi><msup><mi>λ</mi><mn>2</mn></msup></mrow></math>, funtzio propioak Sturm–Liouvillerenak. Uhin-ekuazioarentzat eskema bera (<math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mfrac><mi>′</mi><mi>X</mi></mfrac><mo>=</mo><mfrac><mover><mi>T</mi><mo accent=\"true\">̈</mo></mover><mi>T</mi></mfrac><mo>=</mo><mi>−</mi><msup><mi>λ</mi><mn>2</mn></msup></mrow></math>), koadernoko orri berean."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aztertu aldagai-banantzez askatzeko ahalbidea: a)  <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><mn>0</mn></mrow></math>; b)  <math display=\"inline\"><mrow><mi>t</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mi>x</mi><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><mn>0</mn></mrow></math>; d)  <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>t</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><mn>0</mn></mrow></math>; e)  <math display=\"inline\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>u</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>x</mi></msub><mo>−</mo><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>; f)  <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Esferako bero-eroapena: <math display=\"inline\"><mrow><msub><mi>T</mi><mi>t</mi></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>T</mi><mi>r</mi></msub><mi>/</mi><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, gainazala 0 gradutan, <math display=\"inline\"><mi>T</mi></math> finitua <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math>-n, <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mi>/</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>r</mi><mi>/</mi><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Kalkulatu <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. (Iradokizuna: <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>r</mi><mi>T</mi></mrow></math>-k <math display=\"inline\"><mrow><msub><mi>S</mi><mi>t</mi></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>S</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub></mrow></math> betetzen du — zein da <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>?)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Planeta esferikoa, gainazaleko tenperatura latitudearen menpekoa: kalkulatu <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> egoera egonkorra, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math> izanik. (Legendre!)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hagaska bat, muturrak 0 gradutan, hasieran <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: kalkulatu <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Nola erabiliko zenuke emaitza hasierako banaketa OROKOR baten eboluzioa kalkulatzeko? (Bero-ekuazioaren Green-en funtzioa!)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Laplaceren ekuazioa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>×</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>  laukizuzenean: <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. (Iradokizuna: banandu bi problematan, bakoitzean baldintza ez-nulu bakarra utziz.)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ertz finkoko mintz zirkularra (erradioa 1), hasieran <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> deformazioa eta abiadurarik ez: frogatu <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><msub><mi>c</mi><mi>n</mi></msub><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><msub><mi>λ</mi><mi>n</mi></msub></msqrt><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><msqrt><msub><mi>λ</mi><mi>n</mi></msub></msqrt><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dela (<math display=\"inline\"><msqrt><msub><mi>λ</mi><mi>n</mi></msub></msqrt></math>  =  <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math>-ren zeroak), aurkitu <math display=\"inline\"><msub><mi>c</mi><mi>n</mi></msub></math>-ak, eta kalkulatu <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> kasurako."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Mintz zirkularra, hasieran <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>J</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><msubsup><mi>λ</mi><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup></msqrt><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>  (modu ez-simetriko purua): lortu <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta marraztu gutxi gorabehera hasierako baldintza."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Behartutako uhin-ekuazioa: <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n, baldintza homogeneoak. Aztertu: a)  <math display=\"inline\"><mrow><mi>ω</mi><mo>≠</mo><msub><mi>ω</mi><mi>n</mi></msub></mrow></math> guztiak; b)  <math display=\"inline\"><mrow><mi>ω</mi><mo>≈</mo><msub><mi>ω</mi><mi>m</mi></msub></mrow></math>; d)  <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msub><mi>ω</mi><mi>m</mi></msub></mrow></math>. (Nola deritzo fenomeno honi?)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Orokorpena: <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, baldintza homogeneoak — idatzi soluzioa serie gisa (moduetan garatuta)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(*) Esfera isolatua (<math display=\"inline\"><mrow><mi>∂</mi><mi>T</mi><mi>/</mi><mi>∂</mi><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> gainazalean), <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>ϕ</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: aurkitu <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>ϕ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. (Iradokizuna: <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><msup><mi>r</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>S</mi></mrow></math> aldaketa eta ordena erdi-osoko Besselak.)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lortu <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> betetzen duen <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>7</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>x</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>7</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> izanik (baldintza ez-homogeneoak: lehenengo egonkortu!)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(*)  <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mi>/</mi><mi>l</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mi>μ</mi><mi>/</mi><msup><mi>l</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>u</mi></mrow></math>, muga-baldintza &quot;kuasiperiodikoekin&quot;  (<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>γ</mi><mi>L</mi><mi>/</mi><mi>l</mi></mrow></msup><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> etab.): zergatik da erraza aldagai-banantzea <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> denean bakarrik? Kalkulatu soluzioa kasu horretan eta saiatu interpretazio fisikoa ematen."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Azken urteetako azterketetako ariketak (gehigarri ofiziala)"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2004-Otsaila)  <math display=\"inline\"><mi>a</mi></math> erradio eta <math display=\"inline\"><mi>h</mi></math> altuerako zilindroa: gainazal osoa <math display=\"inline\"><msub><mi>T</mi><mn>0</mn></msub></math>-n oinarria izan ezik (<math display=\"inline\"><mrow><msub><mi>T</mi><mn>0</mn></msub><mo>+</mo><mn>100</mn></mrow></math> K). Kalkulatu banaketa egonkorra."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2004-Otsaila) Zein da zirkuluerdi-formako danbolin baten maiztasun normal minimoa? (Zeintzuk dira danbolin zirkularraren modu normalak?)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2004-Iraila) Barrunbe bateko soinu-uhinen maiztasun minimoa (iturriak irudi batekin definitzen du barrunbea — PDFan kontsultatu)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2002-Iraila) Askatu <math display=\"inline\"><mrow><msub><mi>ϕ</mi><mi>t</mi></msub><mo>=</mo><msub><mi>ϕ</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>ϕ</mi><mi>x</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>t</mi><mo>+</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>x</mi><mi>/</mi><mi>π</mi></mrow></math>. (Iradokizuna: kontuan izan ortogonaltasuna!)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2003-Iraila)  <math display=\"inline\"><mi>R</mi></math> erradioko zilindro infinitua, <math display=\"inline\"><mrow><msub><mi>T</mi><mi>t</mi></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>∇</mi><mn>2</mn></msup><mi>T</mi><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></math> bero-iturri homogeneoarekin, hasieran <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> eta gainazalean <math display=\"inline\"><mrow><mi>T</mi><mo>+</mo><mi>R</mi><msub><mi>T</mi><mi>r</mi></msub><mo>=</mo><mn>0</mn></mrow></math> igorpen- baldintza: kalkulatu <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2005-Otsaila) Askatu <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msup><mi>e</mi><mrow><mi>−</mi><mi>μ</mi><mi>t</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2005-Iraila) Askatu <math display=\"inline\"><mrow><msub><mi>ϕ</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>ϕ</mi><mi>x</mi></msub><mi>/</mi><mi>x</mi><mo>+</mo><msub><mi>ϕ</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mi>/</mi><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mi>a</mi></mrow></math>-n, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math>-n <math display=\"inline\"><mrow><msub><mi>ϕ</mi><mi>x</mi></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>∞</mi></mrow></math> limitean <math display=\"inline\"><mrow><msub><mi>ϕ</mi><mi>x</mi></msub><mo>→</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>ϕ</mi><mi>y</mi></msub><mi>/</mi><mi>x</mi><mo>→</mo><mi>−</mi><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math> izanik."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2006-Otsaila) Gimnasta bat 5 m-ko ohe elastikoan: telak oreka-posiziotik pasatzean <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>−</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mn>10</mn><mi>/</mi><mi>s</mi></mrow></math> abiadura du gorantz. Kalkulatu telaren forma ondorengo une guztietan."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Koadernotik: gimnastaren problema ebatzita",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurreko azterketa-ariketa erabiltzailearen koadernoan (CG-06, &quot;2. gaia: Deribatu partzialetako ekuazioak&quot;) osorik ebatzita dago; hona bidea, koadernoari jarraituz. Mintz zirkularra, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mn>5</mn></mrow></math> m, uhin-ekuazioa koordenatu polarretan (simetria axiala): <math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>r</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><msub><mi>u</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>u</mi><mi>t</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>10</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>−</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Aldagaiak banandu, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><mover><mi>T</mi><mo accent=\"true\">̈</mo></mover><mi>/</mi><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><msup><mi>R</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>′</mo></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>α</mi><mn>2</mn></msup></mrow></math>, eta <math display=\"inline\"><mi>r</mi></math>-zatia <strong>Besselen ekuazioa</strong> da (<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow></math> simetriagatik): <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><msup><mi>R</mi><mo>″</mo></msup><mo>+</mo><mi>r</mi><msup><mi>R</mi><mo>′</mo></msup><mo>+</mo><msup><mi>α</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math>, soluzioa <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>A</mi><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><msub><mi>Y</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><msub><mi>Y</mi><mn>0</mn></msub></math> zentroan leherzen delako (koadernoan: &quot;esplotatzeko&quot;). Muga-baldintzak: <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, hots <math display=\"inline\"><mrow><msub><mi>α</mi><mi>n</mi></msub><mo>=</mo><msub><mi>β</mi><mi>n</mi></msub><mi>/</mi><mi>S</mi></mrow></math>, <math display=\"inline\"><msub><mi>β</mi><mi>n</mi></msub></math>  <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math>-ren zeroak; <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo></mrow></math>  <math display=\"inline\"><mi mathvariant=\"normal\">cos</mi></math> gaia kanpoan. Beraz <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>C</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> eta hasierako abiadurak ematen ditu koefizienteak, <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math>-ren ortogonaltasunaz (<math display=\"inline\"><mi>r</mi></math> haztapena!): <math display=\"block\"><mrow><msub><mi>C</mi><mi>n</mi></msub><msub><mi>α</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>10</mn><msubsup><mo>∫</mo><mn>0</mn><mi>S</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>−</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.167em\"></mspace><mi>r</mi><mi>d</mi><mi>r</mi></mrow><mrow><mfrac><msup><mi>S</mi><mn>2</mn></msup><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><msubsup><mi>J</mi><mn>1</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>β</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math> Integrala <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>α</mi><mi>n</mi></msub><mi>r</mi></mrow></math> aldaketaz eta zatikako integrazioaz egiten da, <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>x</mi><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> erabiliz — koadernoak pausoz pauso darama, eta emaitza <math display=\"inline\"><mrow><mi>u</mi><mo>∝</mo><mo>∑</mo><mfrac><mn>1</mn><mrow><msubsup><mi>β</mi><mi>n</mi><mn>3</mn></msubsup><msub><mi>J</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>β</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> moduko seriea da. Metodoaren eskema bera balio du 6. ariketako mintzarentzat eta 2003-Irailako zilindroarentzat."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2006-Iraila, <strong>Blade Runner</strong>) Hannibal Chew-ren begiak: hiru laurden gorputz-tenperaturako fluidoan murgilduta, laurdena 20 graduko airean. Kalkulatu begiaren barruko tenperatura- banaketa; seriea bada, lehen bi gaien koefiziente numerikoak."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2007-Otsaila / 2007-Iraila) Zilindro beroeroale infinitua bat-batean beste tenperatura bateko iturri batean murgilduta: tenperaturaren eboluzioa. Nola aldatzen da altuera finituarekin?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2007-Otsaila / 2007-Iraila) Bi esfera zentrokideren arteko solido beroeroalea: barruko gainazala konstante, kanpokoa <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>-ren proportzionala. Banaketa egonkorra."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2008-Otsaila) Kargarik gabeko zilindro eroale infinitua bat-batean eremu elektriko konstante batean, ardatzari elkarzut: potentzial elektrostatikoa."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2008-Iraila) Bi esfera zentrokide metaliko, xafla isolatzailez erdibituta (kanpoko erradioa barrukoaren bikoitza): barruko goiko hemisferioa eta kanpoko behekoa <math display=\"inline\"><mrow><mi>−</mi><mi>V</mi></mrow></math>-n, beste biak <math display=\"inline\"><mi>V</mi></math>-n. Potentziala bi esferen artean."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2008-Iraila) Askatu <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>ρ</mi><mi>ρ</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mi>ρ</mi></msub><mi>/</mi><mi>ρ</mi><mo>−</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>: 1)  <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mn>0</mn></mrow></math>-n erregularra; 2)  <math display=\"inline\"><mrow><mi>ρ</mi><mo>→</mo><mi>∞</mi></mrow></math> limitean <math display=\"inline\"><mrow><msqrt><mrow><mn>5</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mn>5</mn><mi>ρ</mi><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mn>5</mn><mi>ρ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>5</mn><mi>t</mi></mrow></math> asintotikoarekin."
      }
     ]
    }
   ]
  },
  {
   "id": "a94",
   "maila": 2,
   "izenburua": "Karakteristiken metodoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Orri ofiziala osorik, gehigarria barne:"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> karratu-pultsua (<math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>2</mn></mrow></math>  <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mrow></math> tartean, 0 kanpoan), <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>: marraztu <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>±</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta soluzioa <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mi>c</mi><mo>,</mo><mn>1</mn><mi>/</mi><mi>c</mi><mo>,</mo><mn>2</mn><mi>/</mi><mi>c</mi></mrow></math> uneetan; egiaztatu aurkako noranzkoetako bi uhin sortzen direla, anplitude erdiarekin (d&#x27;Alembert)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lortu <math display=\"inline\"><mrow><msub><mi>ϕ</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>x</mi><mi>y</mi><msub><mi>ϕ</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>−</mo><msub><mi>ϕ</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math> ekuazioaren berezko lerroak (kurba karakteristikoak)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>3</mn><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>−</mo><mn>4</mn><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>−</mo><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math>: berezko lerroak; aldagai-aldaketa egokiaz frogatu soluzio orokorra <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mn>4</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>5</mn></mrow></msup><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dela; eta frogatu <math display=\"inline\"><mrow><mi>u</mi><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>y</mi><mo>=</mo><mn>4</mn><mi>x</mi></mrow></msub><mo>=</mo><mn>5</mn><mi>x</mi><mo>+</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>1</mn></mrow></math> baldintzekin soluzioa <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><msup><mi>e</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>5</mn></mrow></msup></mrow></math> dela. (Baldintzak berezko lerroetan zehar emanda daude, baina soluzioa bakarra da — azaldu.)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu <math display=\"inline\"><mrow><mi>y</mi><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>−</mo><mi>x</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> ekuazioaren soluzio orokorra <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dela."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sailkatu (hiperboliko/paraboliko/eliptiko; mistoak badira, eremuak zehaztu): a)  <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>u</mi><mi>t</mi></msub><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>ρ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>; b)  <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>6</mn></mrow></math>; d)  <math display=\"inline\"><mrow><msub><mi>ϕ</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>x</mi><mi>y</mi><msub><mi>ϕ</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>−</mo><msub><mi>ϕ</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math>; e)  <math display=\"inline\"><mrow><msub><mi>F</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>F</mi><mi>t</mi></msub><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>F</mi><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; f)  <math display=\"inline\"><mrow><msub><mi>u</mi><mi>x</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>u</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub></mrow></math>; g)  <math display=\"inline\"><mrow><msub><mi>e</mi><mi>x</mi></msub><mo>+</mo><mi>R</mi><mi>i</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>i</mi><mi>x</mi></msub><mo>+</mo><mi>C</mi><msub><mi>e</mi><mi>t</mi></msub><mo>=</mo><mn>0</mn></mrow></math> sistema (transmisio-lerroa)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(94-Ekaina)  <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msub><mi>ϕ</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mi>x</mi><msub><mi>ϕ</mi><mi>x</mi></msub><mo>=</mo><msub><mi>ϕ</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>ϕ</mi><mi>t</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>: a) sailkatu; b) aldagai-banantzez lortu <math display=\"inline\"><mrow><mi>ϕ</mi><mo>=</mo><mo>∑</mo><msub><mi>c</mi><mi>n</mi></msub><msub><mi>u</mi><mi>n</mi></msub></mrow></math>  (koefizienteak integral gisa idatzi, kalkulatu gabe)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sailkatu <math display=\"inline\"><mrow><mi>y</mi><msub><mi>f</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>f</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>−</mo><mi>x</mi><msub><mi>f</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>f</mi><mi>x</mi></msub><mo>+</mo><msub><mi>f</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>; ebatzi <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> kasuan (soluzio orokorra), aztertu <math display=\"inline\"><mrow><mi>a</mi><mo>≠</mo><mn>1</mn></mrow></math> kasua, eta bilatu <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>∂</mi><mi>y</mi></msub><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>∂</mi><mi>y</mi></msub><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> baldintzetako soluzioak, existitzen badira. Azaldu emaitzak."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Soka infinitua, hasierako desplazamendua <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mi>a</mi></mrow></math>, 0 kanpoan), abiadurarik gabe: Heavisideren funtzioekin lortu <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> orokorra, eta bereziki <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math> puntuetan."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Fluido konprimaezinaz betetako hodi malgua: <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>+</mo><mn>2</mn><mi>v</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>t</mi></mrow></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>v</mi><mn>2</mn></msup><mo>−</mo><mi>T</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>. 1) Frogatu soluzio orokorrean abiadura desberdineko bi uhin bidaiari daudela — biek noranzko bera izatea posible al da, zein kasutan? (<math display=\"inline\"><mrow><mi>v</mi><mo>→</mo><mn>0</mn></mrow></math> limitea egiaztatu.) 2) Hasieran <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>x</mi></mrow></math> desplazamendua eta pausagunea: deskribatu higidura."
      }
     ]
    }
   ]
  },
  {
   "id": "a95",
   "maila": 2,
   "izenburua": "Azterketa oso bat (2013-05-24)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bigarren lauhilabeteko benetako azterketa, osorik — autoebaluazio errealista bakarra azterketa oso bat da:"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "a) Ekuazioa ebatzi gabe, aurkitu <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> ekuazioaren ekuazio karakteristikoa eta kurba karakteristikoak, eta esan zer motatakoa den. b) Askatu <math display=\"inline\"><mrow><mn>3</mn><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>10</mn><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mn>3</mn><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zilindro solido baten goiko eta alboko gainazalak 0 gradutan daude, behekoa 1 gradutan. Kalkulatu barneko tenperatura egonkorra, eta hurbildu (seriearen lehen 3 gaiekin) <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0.5</mn></mrow></math> m, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>1.5</mn></mrow></math> m puntukoa (erradioa 1 m, altuera 2 m). Lagungarri: <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>r</mi></mrow></math> aldaketa."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zenbatekoa izan behar da esfera huts baten <math display=\"inline\"><mi>R</mi></math> erradioa, bere oinarrizko maiztasuna La notarena (440 Hz) izateko, soinuaren abiadura 345 m/s bada? Erabili <math display=\"inline\"><mrow><mi>∂</mi><mi>ψ</mi><mi>/</mi><mi>∂</mi><mi>r</mi><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>r</mi><mo>=</mo><mi>R</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lau dado: hiru normal (N) eta bat trukatua (T, non 6 ateratzea beste edozein baino 3 aldiz probableagoa den). a) Hiru 6ko segidan ateratzeko probabilitatea N-rekin eta T-rekin; hamar saiakeratan hiru 6ko (ez segidan) ateratzekoa. Dado bat zoriz hartu eta hiru botaldi guztiak 6 badira, zein da N izateko probabilitatea? Eta T-rena? (Bayes.) b) Zenbat botaldi behar dira, batez beste, hiru 6ko lortzeko?"
      }
     ]
    }
   ]
  },
  {
   "id": "a96",
   "maila": 2,
   "izenburua": "Beste azterketa oso bat (2016-01-07, lehen partziala)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "CG-01 meategitik berreskuratua — EDOen erdiko partziala, osorik. Iturrian HIRU hizkuntzatan dago (euskaraz, gaztelaniaz eta ingelesez, &quot;Mathematical Methods: Midterm exam&quot;): irakasgaia bera eleaniztuna zen, JAKINAren edizio-familiaren espiritu berean."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lortu <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>y</mi></mrow><mi>x</mi></mfrac><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> ekuazioaren soluzio orokorra. (Riccati-usaina: soluzio partikular bat bistan dago.)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Askatu <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>t</mi><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>t</mi><mo>&lt;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn><mo>&lt;</mo><mi>t</mi></mtd></mtr></mtable></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>v</mi></mrow></math> baldintzekin. Zenbat izan behar da <math display=\"inline\"><mi>v</mi></math>, <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> izan dadin? (Laplace + &quot;tiro-parametroa&quot;: ebatzi orokorki eta gero doitu.)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Askatu berretura-seriez (Frobenius), puntu singular erregularraren inguruan eta ahal dela d&#x27;Alemberten metodoa erabili gabe: <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mn>3</mn></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aztertu ondoko sistema dinamikoaren oreka-puntuak hurbilketa lineala erabiliz, eta marraztu fase-espazioa: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>+</mo><mi>x</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mfrac><mn>3</mn><mrow><mn>8</mn><mo>−</mo><mn>4</mn><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "CG-01: ebazpen-meategia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bilduma honetako ia guztiak EBATZITA daude iturrian (<code>met mat/CG-01</code>, 330 argazki), lau geruzatan: (1)  <strong>kurtsoko ebazpen-dosier tipografiatuak</strong> — &quot;Laplaceren transformatua: azterketetako ariketak&quot; eta &quot;Berretura serieen bidezko ebazpena&quot; bildumenak, taldeek bidalitako ebazpenekin eta irakaslearen zuzenketa gorriekin (&quot;JU&quot;); autoretza kolektiboa: kontsulta eta egiaztapenerako, ez hitzez hitz kopiatzeko; (2)  <strong>erabiltzailearen eskuzko ebazpenak</strong> — Bestelako Ariketak I eta Egonkortasuna bilduma osoak, fase-diagramak eskuz marraztuta; (3)  <strong>ordenagailuz marraztutako fase-diagramak</strong> — &quot;Problema N (hoja)&quot; orriak (1, 2, 4, 5, 7, 11 eta liburuko 8. kapituluko 5.a), egonkortasun-bildumaren soluzio grafiko zehatzak; (4)  <strong>azterketa gehiago</strong>  (2014-15ekoa, 2015eko Mathematical Methods ingelesez — 2016ko partziala bera hiru hizkuntzatan dago) eta bukaerako <strong>txuletak</strong>  (Joserra Egañarenak; Laplace eta Fourierrena E01eko formulario-kapitulu bihurtuta dago jada). Gainera, kurtsoko 4. eta 7. gaien apunte tipografiatuak (sistemak, metodo hurbilduak) CG-01en daude — <code>eda1/2/5/6/8</code> PDFekin batera, teoria-apunteen bilduma ia osoa. Ebazpen bila hasi aurretik, hor begiratu."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Paketetik JAKINAra ekarrita: orri ofizial guztiak osorik (S-L 13, Fourier 11, Green 7, aldagai-banantzea 12+14, karakteristikak 9), azterketa-bildumak osorik (lehen ordena 16, Laplace 16, Frobenius 16, egonkortasuna 16), azterketa osoa, eta probabilitate-orria (19 ariketa) M21-en. Iturrian geratzen dira, nahita: <code>eda1/2/5/6/8</code> apunte tipografiatuak (242 orr. — edf-ko teoriaren bikoizketa lirateke, ez dira transkribatzen; kontsultarako erabilgarri), <code>aguirregabiria.pdf</code>  (edf-ren iturri-liburua bera) eta Mathematica koadernoa (<code>sturm_liouville_adibidea.pdf</code>)."
      }
     ]
    },
    {
     "mota": "hutsunea",
     "izenburua": "Metodoen eskailera: analisi konplexua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabakia (2026-07-23): eskailera pedagogikoa KALKULUA (Taylor, funtzio-serieak — M14-n sartuta) <math display=\"inline\"><mo>→</mo></math> ANALISI KONPLEXUA (tema APARTEKOA, oraindik idatzeke) <math display=\"inline\"><mo>→</mo></math> METODO MATEMATIKOAK (modulu hau) da. EDPen teoria SARTUTA dago (2026-07-23, CG-06 koadernotik); transformazio integralen atala geratzen da (programako 9. gaiaren azkena). Analisi konplexua idazteke — iturriak: erabiltzailearen mintegiak (<code>AAA_TEXES_analitex</code>, koautoretzan), Kaufmann (erreferentzia hutsa), compendio 1. kap. (konplexuak, euskaratuta)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_metodo_n_p054_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  }
 ]
};
